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
    "633Lf9umFeCfRQbikXNa4KaU5xcBti7m63DyBcmx82HMuV4Ud7EPfLZq71Z35erbMd7XF9yemuvYPYvebrkppJ7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Y1LZJaodrvZ6XoTtggBFzsQ8qLkpecH7agXTqqaqfETaUSVKXZqotZzS5jnEVvgfCuX9yB34oEfoPjmcaJeX3F",
  "key1": "3TgTmJXefE5MB31eyYtxMyGKMWLjFZLwWjzYgq3toUh85xtxapnDZAE5wQJhm2tCWEdtpky1wXLUzHQiRS3STYnV",
  "key2": "4n4Q4exrDLiGtzjAi2eRkZwW8tXtUTrjpmwqAMw7Yje8KFTpRR9hyMmcxZTSWTtcK8kie2G1qd13W55fzi2PeeCw",
  "key3": "46NLrxjRV6dbeLyRDCvWqdJaGsYZGyeNzX9aZRD4EjEvSLDEjREbFsTnXqVEjBrFwCVnJeESxrPtCdAeEHnCd8aE",
  "key4": "eJQGz7Cho8b4N7YS4Tv42bc5dKyTuD82xz28qpRaj5f51HfEZRZrWb8FGbRswxzHuc6V98Xkr216WuzrFH5f6ym",
  "key5": "5euoM98Lz4TAeg57LuaxWG7VXtriAWoRkt9RjwqHBXkfRvCekMboUDjRwf1Kc6vUSYg2ivgDnvUYAiZayT9WSK5i",
  "key6": "FQr4367KgAufskBUDCKPtUWmmsFiboassyPKitCkME3KT75D8FbRXH2RVxKwTnZqZvQrGUvNqgfLLyqywJS4cm7",
  "key7": "EfksstGmFZ3eTozDD6HHW13qXR8ub4S1e586wGyMbBKX8CHGcTgRBLcugogguA78xS2A2qMX5eGwQbT8qpajwP3",
  "key8": "2AgXwR2MGR22JLgoV5s5x9yeh4ohr9tBGqyTRMe19rta1NgXXpjHJgHFiN39HABp2S5GsQXydyaP7Ppy1RHofFpR",
  "key9": "6fmmn5zzzjMQUUtWE1yYzP9SxguZrzEPLiw2ptfQosDthFsECehnoAEK6JmPdtbGZeXbzrVz2U4R6M1J1ACTjd4",
  "key10": "4pw84NagnFvXPKPAYVb74tGJLPsVZCqgfQpwXe6LtUrof9Fj7TmGSUbq6PHf7GcNCzFea9QqzXCgtguGspHCsEch",
  "key11": "4RFmtzXBJkUNZKzaYoF9Bv6NhH63HK44cn6WYrHxyeYrPb18X1b6e5oa2aqqhZdXXJXBbqW9a7c9Vn1nRN74CSTZ",
  "key12": "5s4cFiADjJdTvt6ybqqHMAxD9A1pZPLxrmj2s7mrur2Vmug8Wynei8LcTLNmX5e5YAVJVNNy5W8C5mgzSNPfeHMD",
  "key13": "1p5d3upm7jUdrDJp16gpfv2tx2UJDzD6Uehi1UZZTEhG1onzgsR9Wq8wZ3VJrSwAF5ncwxme8sByxUBRRFFiLHb",
  "key14": "2AfiVhTtj3BcsUv515ZgrVaGn5NfFmFKCtjymQ9KBG9PLbkxkJqUXPzypgCr73Acsoi8Vw3bE6vfPeHtXXeSR95x",
  "key15": "49kyDW3wMhuKfq3J3WrzxZQteqxpj3Ad9CXRgET3vVEzt6TnPUuJMaQ4jKuQ59uWturso1fsfUYENRnGejhkopmU",
  "key16": "2FxUwKo6x78RJ2Uf1Cfy4H2HTYZ15BeuQtKg12wUb7vVJ7GiKG7toam9ZLwn4Y6Zr3YsDDykPrwaHhE6nC9DD7cW",
  "key17": "n7kaNcukdP7AgBaqR2sDgYSvwVNePATH2brbiiqjvv3GM1gy64hCHw37m8QNdrNViG1yU8KmyxuuACVxxV1BhgH",
  "key18": "N8e325psssxTBhC8xCVZcmdcHHeVdqs9ZWx76jSC11RXXiL1D5WrcUvC6wCWe5UqauupCDjtqMp7FDvoXQdGoHu",
  "key19": "2XB1BaDrAhts6KrHM9TaXQo4qEE843dgS6PJwmA14ezjELbRyRk16kvRrGZDmc6PkxjN3h6rKfhYX61raxfxQ8EK",
  "key20": "KymMiChGLMwPi6cMzCPznAM1xjSqz1oP8UouTuBnUtohS4f1xWZzedYAqhCZ1AQWsCSaXmsyR5pnXyRhWKYaiVg",
  "key21": "2LaZ18YtHCXYYfaEnCfMjDRaypDcdbuvVD6FRDbdXwch77E4h6LnPnsqtXReM7SQMPwCSvkgFJusnYxgVuVG1ViC",
  "key22": "3W1DzNKKLnCRih2iGAhwJ8mZupLbtMdRx8YUgjadQstPPTxNBPFezp69itnBcTomvox6Q4Hd3ismWzA6am5pJW46",
  "key23": "2mEYhfRUVV7HJHRLqAykEC4DjUxGEzC6NMKk65AvXqAyrwqrQfn75kLfPTkW8HoayUPDC39dk6QnkHefgTYVmESL",
  "key24": "2Zhu8dyYmeVEoBLGEWrvoCrGtwYMFkMerFXbhy7TmU5cFeH91Y2bLRQkEmziQLeBNSx3iM7XBxtRNQtkpcVeQWcy",
  "key25": "3YPBfGbeVywVMVCKPQH71xQ5MTJ6jXbi9LvELFELk1WvgSkHYMNAc9zAfQzBRfj2NHoMnTyP8wxYJfYPAFUc7mpP",
  "key26": "3fRt37u1nFRjkHYfWDNcoGWnnfz8uB6PchEStzGPaPq8agPEQaD4huN1vZDLC8cWEmq8xsogPQ6mAvwWwTaeGnnU",
  "key27": "i4NLbDCNj2PuikV3w7yF2hhxAAe4zKZQdWUynXWXkHtEuUpL5sT4shPjuXXHrSmB7CEDGnrEDJT4iknvQPjT9kN",
  "key28": "hUb5zuET9Lz3VH9N3K1yHNG6DqTdrg914yq6kGGzR4n4Bo2o6Jq1uWeLjMm1gTQaBf4JYRCt8mczB4Q4uMuRjk7",
  "key29": "2x5Gb6TxVBj2sAM6iW6Q6G6sKBY4TGVDzHzKskYGZt6YHf5WxYby3ykiJNFkEBZE4sUzSHBAdFvaRJf4amFSAQWp"
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
