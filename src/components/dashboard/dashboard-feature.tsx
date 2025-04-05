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
    "64dEG7D1BBe54G6hqkYpEQ1aKbmEij8Q9Mf1eJTzybqmpyc2GkoaUy75LqoBQ6zsS5LGVuRq7vfEEiSA3TXrHWXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Se3Ea6n7yHPweJqNW9kAfxNmLj58z4TFjkjsLA7jr9MBtbtMyt3zwkWyyMxWAaniJvb5sr4MhwQJCyswMcTA8kR",
  "key1": "447cUDUMyzCNP1ttQycRHmuPY6q3tnCSet4rbwGXAfPfRZp399GWtKzMnkBvubMkTUr2HjgauPvxiy2bDKMVT9XH",
  "key2": "3GsXPBH6h4pk3jdyFji6f3rmmVsHpgBN9A1Xo39hTcDUFfhBLMsT8VZyKjVnmPMhSvnx3Rdhda1vn9HVR8TseJNU",
  "key3": "2gLaDr87xqfpGTHwXc6xZErEqcjrxs7qANqM16Ywx7M3XcWbcuv8DQVXd6JYR222vwcuy6sVT5wuMrDvSQiTwP8J",
  "key4": "caxeyb2EEXqwoQv6PZCoXkAcBeQ7JEzeoDpncrn7T2VDjbCjUCXu6PAUcrZyzcRV8afNnT3vWLumXKoEWU5KMWV",
  "key5": "4sNeUVhrbFVVM4LAhTksyFpuvq8Tv15gRmjYphmNq6fQFQeqUgfMLEPPo5TGj5Y2vJBzwkBPrsHNoSJZArMKHRqj",
  "key6": "42dBmwgzLrASokpE3XAb6X823C9qf4csTrojQeeZP78MNSkvF2KQ8WixQs5dT31jFRbtBnPM3fZTrP4qDjLT48zg",
  "key7": "44tBfX4S85839b313VoE66SgaCXrQRyEQmiuRJz1XbcmZXsZa8kWNtDChtgMvy7K2aXABnweCh8m1TWcrz6i32pd",
  "key8": "2Tt4VAHbngcaYRPVFcm7mjC11WTayC88SATbTYoTXRJCBV95UwYv9tdAgyuC7rEgRv8PrwjS3szWVT7dPZ73MsRD",
  "key9": "h5mPiVCMYwZKQE6MQoEnfNAWXLfX3Gzu542jieu7GnW8GH27YrnTwS4rjNfZaSsLoKoYE7EoXi2GXtRHwM4N1yT",
  "key10": "3H9zZ5H6VQKcVpDbFJdYPEC8gSMZoeZNppdfKdZTvmQPWiD7AjQaUN1Gpmvp5VySa4Pp9wteSNGgoCUwb742p2jW",
  "key11": "qL5SiURu4XFVHK3oUTo6DoE6dkTqXzhPHMgJcHAaCRjzZZ3apiWEpbawybWVFLrbEG3D67BXkmnVguxYxDb6kXW",
  "key12": "W1dtXZZB99YkWtVXxyHSQtv6G92GemvuZsdAnY7Mkm8bYfEB3Q98A51fLFio226ASq5KiNqMTQrf1rf6Ts73V17",
  "key13": "32ZC7NQLV8DD3RvWuTb7r1YMRJX1LfoMu9qMyd4KPskjdHxX2ZUaSmJKjQsTUyfou5Ye9fzbR64EsVDehArbHx7e",
  "key14": "51pYVgyZ7ZsF2TmYxVrWMYHevRvnebHB6sQoGg6qHskucKALSiJN2b6DnLaUTJS6EyCxjK6yTGFgoRSx7M7UN6Mr",
  "key15": "64Bwngm1S8ZcHDTtkk5UtjtUrxXyoVsNEFGP4tdLvND1QqYQQYzaeeu1cxgKv8j6TB2zG5m8wo5gVoLygYtdQJyv",
  "key16": "3iMZquWhr4mJ9HTSVnrkuT4XrtW7rURNgyLyB7iWbnGNMLWiwhTZFoRqHiRdTchwz9nBMRYepq8sD3euKKCTpgdN",
  "key17": "2izjSCLFTf8v2RWSn7K6cQq2kMCzHh3maxDxaPntnm8DH7ScH6j52TpRrvYWPv5y1Vk9mbX2RAc9HzN5DT9ybqYJ",
  "key18": "NbUXmzSaHaRgu1GVqP7hugC31Xe3QwHh1dgZjutNcdWV5rWHqcAS2jbuaBctsCu2iEqDi72SKAighDP2Xzkts8K",
  "key19": "5rALFNK7Tnxxg7bPmJ8uxFukZetNXDEUWdAeGupY81tAqemB71ZkDQGfGN5gAfdWagTZSv4mK55r9pcGDzynq9mS",
  "key20": "5ykNHxLMsnGs9qjbXjkCLKJuEbnb9dFXw84QRcLGKaGxea8Vop2YNN5tqgrGtkfktGDfpWVtviZztir1zEJzDwGX",
  "key21": "5Jr1K4GAjAMvCAvVjWBeU4FA93oRg6Mus7VzqsAcvPBgWJAwNjZxxtSwU7jbvtbcUkpHPM8BouhH5bXkbdxSQPqU",
  "key22": "vFHfbe3Eikksnw2xjd18YGdKtTRPmQBAqistAXozdFj6RFwwZNVQtsEmmdWo2fJK2c6cGdPawPpfkgwjzToWNGT",
  "key23": "3Uj4hT6NVAJ78AUC8Q4fwEtMKiCAdUJGTYynj8E1PLY9F86NJNLb6VupaxADGkX8YMqs1Fb4vbVkHEntRRzQ9YJU",
  "key24": "5gPRJgEEadftwXXXQ3PF3oFcb2HYGAEufTWRSdLN9GA2vW5EHJHdCaJecBkZ6Q4juoN4ViDhndMxbviwDEQCZPho",
  "key25": "HDpiVs87FEqaBVDYmbv8Y7UZrkdroPWxHTVDv3FSbrbxvJVzpZLyp5W4oWCitZB4Cqxor5kZaPB37XULu85wBsB",
  "key26": "62LMEA6zSYnYBfqgfyuEnnMYH2qh1t9hcaWoUwqjA7HxcKReifiPSgrrjVGiAneMKoXGwvFJFeSZPJqiQAdEMSvZ",
  "key27": "3BRaPLZEk7n8k2jGWzuacRfJzr6aLdejnnfrw3iG6VtgjAhwoTPjUrVjXFfjRGqDo1aBc4ge48iZAfdoKwXbSY1g"
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
