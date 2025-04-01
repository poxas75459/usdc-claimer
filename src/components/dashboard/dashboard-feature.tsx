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
    "39W7iwzSV7oK5wjX88Xphsve93xrDthVFbkyCsjfDyiEXqgNwfQWWHc8ookSDrXMVmeKQQSnpxtMWX9yCDRU2b6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51RBxGPLTKRyzbrjzd1GDEkPWKxWPSMMvrtG7FacU17MfqqTW6UjYDghymi769v7o6AknB7xPYwvASWV4Cq5yQEo",
  "key1": "3PJxYw27C1w6JzPaxjsyMQhDakfSdj88XuRohu9fti8y2yicAu7i2uYkg1pBdcLUE4HHDoSnn5dQB4mg531SPcSA",
  "key2": "5visaHcTHJHP459i1xBDvoMziGkVcaRgZyXY2NVUkrdtu6RumMmHfq45ENh8hHdnoWsLpCbvg7x4sP5mYrAUfPVt",
  "key3": "2Lou3V9Ju4bqmXpgU2dNsq1HxcWiT3QMQax84wvpvmE83zX66ntCkDjMhfVVWnQDhHUSD9dwt6C8VGG5ktrqfPTn",
  "key4": "kBu4tz1m25XJC8YshNTFa5BP76FfbH7sKEkVnvk4xHZG5bFB492cm8sxcAXQK5SoAogKaWzfSxsB6QcrJnqsLc6",
  "key5": "22o35BLEcas4mCSCARMtrVRDVuNzvFKsT81Qe4u6EgxNsPZaZH4eZa1aSDjYWV4mx11E48yhNRVE7BBK6DmffVY8",
  "key6": "2ee1EgLegmZfCiQvuLMJeirbNDQ4kGgKb2zfoFo7wHBFLr2ohhKtQaXhxJQbpQVJHiVVuPtBMVeQCoDbHSLr4DJS",
  "key7": "47DPai5TxvirmBG863rXz39hkfWqU5w2jDYXQFnLbxHh8amGRp97yepiq4NcVrcVwnpdYPM2DxUtPMjZoCkgD3PQ",
  "key8": "45FmmMR2LqL716Xj9zgARQCipX8Jka8S5B6F5vxnPrzz6cNMawoghTsW98nCxcR8XePqPnXdMw4eF3M6V3ZWXLuE",
  "key9": "2zL47Uzvbcq8NYYQPkXd8n62B78N3VfwAJwAnx3rLhiXf13WVSMnGvrsbfCr2wtgwb8bN8cgk5jqJJphVLo7V9Cm",
  "key10": "4zYqAMQFcqbLVmF8zBrPmA6R1WvrCW8MhTwwNTUy3w4knf47VoYp2zzvzKdxSwkEmztpuwfCC9Zbt74rUtmLrhLy",
  "key11": "3CHXBkub11rRWmxasP7KeYZyRJEYEguaV8t4u3heVv748t58ELoyK3MVWwfGgGNPGyYUDiKA3JjN5hDYDSfBrT8m",
  "key12": "2M2vqrYGxnPN6tyBDREXDkbeseS4QvnXBH991e7Rs3vLv7abCSVjat1ELGg2scwa8wV9xjXrYdVTBighWMwAWwyH",
  "key13": "3f1FcycywnYps2Jm2vyY9Vq7pTchnp3aUsKM1yUKDxD9Kjzok7CVfzogSSop6cBuNcNAzAUm8NpUnufJ2XDAnaki",
  "key14": "KyEwz7YNSUcFhcptC5Yw2Gqkbj6PkGm93njb7hAFu5zwUpTugygU7HptEEy6r35s1kC5F2gt5sGgDVKAbhyCv5A",
  "key15": "5BsZZqxsjPMuK89n5LpAdExBGX4mbx8SdksP8WovWXawesGKQs8dgvV6d8gw6zkpk288dJSpC21YBooeY5apksGR",
  "key16": "Ga918ea1YUGikCFpyFQDmNRbXR7gQVZ35v89YizFZhmSerzKnKX41DfRgzttCEncQi8GaXVwAqtkxNtYMH7BckZ",
  "key17": "5A9rnkFwwmPGJs9QTUCAvTzm28vUmAHcZ1bRiLmxHTum1EMo8Qyqjtszp4CmxHsAUcwM3T2giYtLqdPqdQ2C1e74",
  "key18": "2e3JU5NbGAbwA6qs7iSnvJHSMPStzUMMUKJMqCwqiJcUPdarmyJM8pFepm8fznEzp6sm7BSfjxX3tFGzq5FcBNPS",
  "key19": "2KGMar92JU8Rn8gw9xecHvVLS2hTErmbWtYmfX92sHgGY3M6inyBCrz6kMSNFLQCWbafFcbQem6bB9mwS4Tx75oe",
  "key20": "2uUhBLsWKhQCENfRaqJVpA9tMkCtCZSNQV5oQRT64HfoLXTzxzAT2bPMZggNZnMR4R8R2VaEuNUZrv7jRU2MnUwq",
  "key21": "2LH7VojXAHgsTvVvezNWWNBFeTN9djtdRNX7Ua9aU5KwMGPvXH47xgUDgooGKnRLNu8vb9Vcg4Hw5tZ5MjYFRnLL",
  "key22": "QDfNxyEM96RsVVUnGt9LxoFPPzsHnehTx8PPYzRmDNhNtV1Crnpz5HR5aWYuzsSU6Jqq3BnYfeSrWGZ9Cvqiwka",
  "key23": "4i7GXDud1CEE3cWnhJv2gPnqKb1XYy36eG7XetgoxMG4DoJ9bWE7CGazdCyph7M1KpNh6rwprKYn6FnUVQx8gRSC",
  "key24": "3gAvJmhC9kqMfgqVGFq7TyqoGh5JbEGGN1wxnTcFMmz4BwPgu5phvvyLbX6JXAx2wuqe7pH5ZqESQZQpTA4PDngk",
  "key25": "a2wLA47QAv5Gq1ed5ZbT6e3UsgkMw1tCcYmyqETwDswJ4Vc9HKt1ZU7u8sePVRHc8vzuPEHZUG2H3WtG2dJKayW",
  "key26": "q8Tzfn43f9ZnzYw9gh9YhFMfWoxNrA6wMuQxAe3yoPs3WkefeMQAQ7wCD6cN7ciKZ6M6uVG2LrDpPY5xjqgmead",
  "key27": "5Gr11btDdcA5CRzhAdbK9wy8MkbXY1UzRppHtAfkKKSwNv7ZHNE4eewuVCDjHFL5j4rnB8TN4JCNV1PC1jQUZVzK",
  "key28": "3V5giegVxs7isU3UApErf3CUGRPwFc9uEz7fCHaocw4tsCgV6G8rFfogBXSoRKqau3CkuLRCC39gp6Rq9PJZsW5G",
  "key29": "44CbwVkBgZkBANNQT3f8PZ7m43SZV9Rj5eJH2JnyATyhjtkRhmfEvTN89QFrMgtbiXoakpYuarQ75jBX56C2KDpz",
  "key30": "5L4o3u632MeQW3dtdaR6wJaGf65g6EWCgWGna2S8CZD6LjEQjiP2QVUSh2kZPAUs4g2w3Vp3BR7GxkQJYShMs4TD",
  "key31": "3mypsi5Vs4VGeMeixRyBX4HQDiScPP7zHrFbhe7VDzkCSHEAWBc2TcAttnhcDoRu3yfmyCjXYGoK4K6ekJJn2Brv",
  "key32": "51L8dGph4LSqDkdTtA6JiVxxJ3szqgZCSBdZ1Gs9tn2GePWUpDHLXUT1keNGppEbkZ4QgSjsd3Ug8646Cohv2JoS",
  "key33": "5UVnTSuGDsD7xj7qRnNfRWNxBKekGep1QiwCkYNjjG4oRGK9AG18e7iutMpuFgmawZDovbxzz7hagiqtuvMEQXze",
  "key34": "uunfPz2Q8K9KuDAnsjYtYKYkNcomd3Xab3V3BVnUTJg9icAV2XEYnRgm29swz1H55DXib2Zm16E1UQFpWYbL3pJ",
  "key35": "2ZoLroqr93K2aLfBm3rEg4bUsBVrz6493pb5xXHyJmep1H3ypPfZaJkeqVftRbZziHaKu6w59FmHmZyPfAg6y7jh",
  "key36": "3fe8VTZtALkWDeL2vETsK2tJ5za1rSDiBGr6zyXh9dQV7YpAEY6nx8vgJTgxS5dARg7Tyz4MZP3gpiv6qHLmzkeP",
  "key37": "5YAf3DdwWeDgsCEemmMeyqoA5km4F86rz7afi6oEys23G8L6PTfG3nNoXYQQ3PnAsEe4PAzZb5xxVHaAgJ1kX733",
  "key38": "4wAM9cZCYHWMZjLYqYGTwZpGdrcwTfyh7h11tPGtReR9sz9gy49JZssmmouy9RtRe5VCA7fn8MF2TW4LmLgbyRUo",
  "key39": "4kVoVbNJDhQvCLdj9cFsV33diQueX6wgD1yMvC49gPSf83zJFeeiW64ZTcRhznnGPcjeZuG5httT2EjypFTn6nQo"
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
