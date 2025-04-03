/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "471Rqocp7LrTKuV39zRPZUJWmfrGCAsn11Zj1vKGCbZXVQGMYNczSYYNEzYt9iZoGhRNP2pVJ8rjMfsdgtUZ22uj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6g1AJzH5yurFuncc9GzG5vkVRXiH3mkHuHPoBcivpYuYvzjKwvBgQyV7BYesuAX54zrbMbM2mY84kf7ccecRqDe",
  "key1": "3PLgC1qQ7UQD4rfBu4iKYLUGrV36XEAQYhRuHLP7vYNFvoXXDS1SPYft1iENMSpJH1epdRnHoAs6zpw2Nvevgbi1",
  "key2": "2BKMRkhTkupUrPpTeAqCX8q922dDw43XaGRKYq8VxG2ZnUtv4LMdBjU8swV5eAJ9jzVuRfGyHEaREydZUNPyf4o9",
  "key3": "2F2qYYoVTTECfkQica4T6eRHyjb6MeDe4aZyuXMhr8hVqWzvMAhaDwcU4Kmd7zn7HBVXhu4ZBR2UVGzDUgcQC2ES",
  "key4": "LEVxncEXVGL9gXZnRRDeYk7T8M4ra3hydSokLemVHNGcdAjipYC3JvnsayoPrzXiXpmQB7RXyEvpR435zeAjpAv",
  "key5": "KJ1G4UsQXhuri3mJZuYJxmuyzFJHcnukXc85rk8aux1DpsnpWpKdniRHG9BnSU9ms2oLxtW1bPcHBayHAf8bwTQ",
  "key6": "5cDd47iAqv7JxpiBcSeR3cvuNoQ4hpJa7hzdm11bx7Gx4UYkyVfzjuG6eyvyM3BQQVrVYAqdUiNHAsZE91jJBvif",
  "key7": "3rxtuWCBxb9Z5VFCoixQJb27TAFxNJgH8h6bhSiiif8Vpz8Re5pLxW5XgdG5Kpz8NHoRnSh4QoN99WgUNiQkWjGs",
  "key8": "tt9e22uT8UuGEVeg8RQFvaFhGiw5DDf2naonR3g8PquLPTT6jud16rC4UR3bz4c7qeAKucSqwEqsXu2K3gUyQFJ",
  "key9": "5pd51UhRpk8WRab3HQ7djQt2oxS5B4xTyLeHGhotWuJWt2yN4abULLQ88b1wQVqJcxGbV4kgWQ9GmFsTLbquJVuk",
  "key10": "4a2sZJ6KAgQDZFwcK1Epdc1PuaFQYQHi851ZR5cb7DxxPuFM15pnLZ1gYsCNXFV6FpFMj7Hm5xZHMnrtt13GNdMe",
  "key11": "5Cwy8A5ANHKkqK6DEojNLcAoZciRfH5FG5zRbrMLJDx7MGn49BrNv2f5tZ6225rYwERVkMM6Z6TaEd1kmkcEyPi7",
  "key12": "33hQU224nxr4GPY82AXoFq7MajvZ1ozFwBGztcETimwRVBR6KAj2ARPiZnjXfTdDoQj3ovYJMrEMnaJHKKuUJzb4",
  "key13": "29SUeGxZ6TQNKSCtQQfPd8Fesjs9Po24FvcgVZ8g5gQ9gRjSwqkjzmKnt5XoLecEjnt3nBizV7dkxzg34Jf28fdo",
  "key14": "3PLyaPASgqAm66iYanJnzEx2LbEZhtyvV2HdUzrZb1yqipoMTPdKxAvhG8XtEntJCT9QmXn5xKUzkYR526hHD7KK",
  "key15": "3D9LFhC7mLuz42hd7mvCh5hDqjZ7fur3feR3k4pxQasfgDFrbjKdmLZC7uchqBcT9RzHukfUeBdGu7TLhNQ3MkJ6",
  "key16": "3w4riZdpGsPJeVWvBAH3yqqrMF9WdqKMG31q5cYRCaiGWwwGsbkwkDUZL3jkNQZbQQrZeW5bHDf8Hd78hCKZugLe",
  "key17": "2nqmAvoQmQ28Qfuo1sBbJjX1Xg9eHbi29yvdZ2VuFm6YAJiMEzdzc6Fn8RecssEhb7g9JVFZBp739VwSK9wxcUMp",
  "key18": "5MdwVS5jybwgz56CpR25RJwdFh8AHLsP11NsXQYm3EW96B87yxUXGoeRWMYkQabeV7qAsjfcYFYSf51rNST8ajsu",
  "key19": "2Azyxem63bFyJ4RKiYFUU2DhR5v4XKKs9o5dbPpyBkur2Go3FasFW75YPWzozKWUQJHB2LaUCuirRi2VTRygLy9u",
  "key20": "2fgWRyWd1kYT56Q2ioNmwPYxxZn7TQKUvFrNtGXWT4XHGvKbnZN5nmPKYwNurHsc712BAr78Y9LuzsbfwTJZWS2M",
  "key21": "4ChMZn5bu153FLZ136nbwscVpVfmGZUikE3G4MFJdDYJr5XQ3oEWcmQnP1dscpRf6ps4M47dzrk7g6xxmyCykP2z",
  "key22": "2W8x1VNLvBKXXLAjjLwWKcmGEJMYqCCC9Q1cEXThwRWR8MXxh89U2EGqYWuptv5A1MhLzWygtQTcehcKKmSSYArF",
  "key23": "sgrGpSahWU1M8ruufZRA1QsobahbUJ3H9mwN7cRotAGCRCDYiBSApftVZTXDE2bbgvoNVhvxWFD2Xp9ZdpwbdMC",
  "key24": "ChPaYhZVvb9VNwymujkkWinKfHXB17kf6yVhXAUjkrXZBRcqBS7cUbggBaAj16UaBqVSbpVZ4c7xdFbNgDu8L74",
  "key25": "2bkugeKiKPKrYD9peexHj4DkPKCkpqzWPv2H27YuqGDrJQkDgwe1EodbbPe61XGQ8ioHm1uzvQ3h1AsEV4x1ZnXq",
  "key26": "5e3jPUQnVD2P2tXH3VGVeZnfcKFrxmBn6xa6dWtc6v2UVc5N7gMgPqKuYjUbq2rkistUdPFGjGdMB2YhSdeiGAjd",
  "key27": "3D2BHF3DbJzLbdkwTkRmYBFQ43JiaxXs7KPstzsBCXihg3sgG76etiyUQ7CC5UjD93oBfcBUz3Jh5VZPeTo7VLd7",
  "key28": "3pAScJwpFb2Y1qnBmqijs7C6USMZTSHorUUmi2EFs3fF2HPUtPGEQqPEAP7WEMjEcwZnm3oReFhNaUv5p5m7PMiT",
  "key29": "4iUcWKh464BrXnww791nQ1y3wPeXsmi46fuzWNzyt6kbq14386Wrn8pUVDPdZk3pohbdZPiPJVCEZ5fgRWgXfUdH",
  "key30": "5WvXSePoN6KECndYWJg7XznXgugbYWwUtKsRmybFJDYpDmFnTfXTBL4yppp9mnAKWV2Z4mCXjBGdorg42Pq96x2B",
  "key31": "5C8Eqm8DEqU7EyruM1tYWrgZgVQdGhNyeB5N7dNftdxV4T9y94Q3WaghKse1heM8GivBE8AfurpkH9pAHwmucReW",
  "key32": "norvPhUydr9bVDgE4LYgM9bv43dGdRqE8epLNhz5MNbPkUhfgBiDbZEE3zhECMte5kr2eo5UJWJ2FRxzgZryg6m",
  "key33": "3eCjDCP7jooH4uAPXUCRDfYJSrkt7exzrMVhYpK47Urzs1LDut2bwY6qAiQvhEUHSURUZkY2JLtUuPRo8LeY9RaB",
  "key34": "2UQS77TwMe2VQwd9e9nFEfZtVjtKq8CSxfGZHLLVQ2Zvsmwh54kcSdAEoDjcnHMJAkwsVJ89yYGHwCXWN5BwGToK",
  "key35": "djEjPciV7GJtgxRB1SthWQNCYFGydPzQ2wzToiV8QLodRmDLV9cbj5dpZuWJsaW7zgrMPnBthKWZQYpQLnw8h5x",
  "key36": "cLPUg4NEHsUG8NkfK6TYto2Z3VFad2eyqxTfevRMUFJLVVGdFpQ8EdXUE7VPRpKETsZPHSuERgzZ6c2h4xZmnxy"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
