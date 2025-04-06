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
    "3qCq7pjeTvnMdDVe8m4PYVQcN2Msd52hxhvLhs5xFQcKyqoZuhSWQqj1bhudGGjKvfVXVHMAK6xty8cyTCRCs3dr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "umLYZe28FotHfDQaLPdr7r3TguYRrjkodw4iGEhvVEC3SAhxvQgnzEezuo4AXhdimR9Fg9AKpNh3ZDy4pc69kG2",
  "key1": "4ghXt9e3Sf2JC8Fi7rk9zVukX19C3o5jQ9nar1CM21S4RwvBtfibp7tL8Dij8yxPWaMGnkYuyH7LTxjsCPMjizDo",
  "key2": "5BQQ44zpjFdWAddeSj7QVSvHDjCwrFuByq2yL5KESnwbjA7s8fRZhHu4qx8hvv4BSUKH1ueYZvotJEwtZ1rapZ3y",
  "key3": "4iX1ZBHG7KwPGCZQK7nGCrZ9jokypCdeGE89uWBkL2RkpMcuN3Zmiqxa8MWE8cDf9VPyAxgPNw787KQUNZUf48eT",
  "key4": "2d7ULiWjf3rhcRgFeyWcmhM1MCYXRg1jjJZabvm9FyMivg2guGSVSJUYS2mDkEN2aaR7FM5ws6KmXHRYYJ2DSBF3",
  "key5": "5jragxHhnoCWUiNrCmELtuXSDK9WmQduJ78iVAX3yAY1bfauVFkT9zwjX9SWZdb9SCHrGU4DCCasKLYqMd6fST4y",
  "key6": "4YZUzDdwCTPeXLvXcA5BZnXmeharhfHAFrin5YDqCGSz5pi9D19aJzB9b8K9it1RfLU24KYT6yLJE4H9dAaczLKe",
  "key7": "4zvhB9ejHy2SscTi5FDT8taeiUvnvdyNJfQDhr3npyYM8AaqQHXzAao4qRHqcWvbJBJmsgEt8fGXqx92aqMEALdq",
  "key8": "aowZxF64WerskfgWyr6BkcjPPP8Tt968s5rbcD2NjjMB1rh3xKUuydGQjWkibj8ywNVbb6ipKZq53NdzURk8gLq",
  "key9": "3ZtEtaVZWmh6h9ETgqGCyzJ1XjW2kvYq6vqk9WDm2uUt8rm56g3U6BpPVxMXT9yKtdvmH1C35UHwnrxNKRmdycne",
  "key10": "3YhpUPFEPngs7gvq5emyRPBUZ1Ypf4Z3bwZf1Z5XmgmJZra8ZKURvv93HWm65E1zrYy7txREN14tViuyEoX7BEBn",
  "key11": "2rhkB53YJ8pATsNEgk656AXxf1mrn8jH3NwK97hZGgDq9u1mJrFR6BsvFo3pJkAcL535qtZKeZ8G4XsiWJoLkjhV",
  "key12": "2SWkuuRAXKWeUd2npMPWWehKFV5qvDt2863AcdxVPCLg9EUHSQSjTPiyM5UXR4wEnitVx5wq4YDUx5iMhWKJRq9S",
  "key13": "7EL4MwAvLicjSy9baQ2YHvWxJzwVQAxzYtrhi7oUW6TGswJGAFmnc9UynEEATm454ExJdWtQCtJRVykExU3okJN",
  "key14": "62FXNkBAsVK6Xte3w737gDTyTQJekHPY7D27E35d7vpAgXuVA38CgpHF7qSHLs6DN8WxQVCrswpkwaWVsQfNLZoD",
  "key15": "5XokxyTXVtPtvP8tsvdM6Uyuz6QJpvUPMoKr4q8QVNvWRUU5bsuGTdrJn38Xe5jZWAyTHpf6DR4jB8vkeop97oT8",
  "key16": "58GmUVxbbAeDwpTKVR9QH8ogYDuEjDTMUJGmNUQ6udBCppvLCc5EMrT7mfwpoWUx9BmT2vcwh4XsVuFV5GHzsS2J",
  "key17": "3Hwt8PtatvEUstxWoxJdU2MAoKqYYK26uLLju4ELqw1UYDYd2zyanLnBJh2r4wvxCsmDP8hcb8dqmdetEVPN28q5",
  "key18": "4ZSVwxSWoPoRfhedsQ3pRaNs4Yg1AkRoD83cgSA984Z6McP6jSPTDDVWA1TY5DHHTQ91vcK5FyHoA1saLJh64jaf",
  "key19": "21UnL7PayTZs7fpW3PNCSUSWQsrQ69DFi8eRhSk4qYgLRpDs31b3d2w8nmRLL59qxMv1n7vSEHrTcjm5JPRHnZ7d",
  "key20": "216WbrpeGFgG8Sdmpo9SMcuAAodrJGtT7WQyjbvKsk695aQMz1JXheKiARNtXx7tHkfh2qVAhebkSExWXzdjR8sK",
  "key21": "2GDrvbd4j9D2Dr6CLXszLUWX6oKLiEkvmFb4G3x5PJNSSha79jrTSckQx5KSbXyCQk2cTczKXe4xuyzbNERvbFSu",
  "key22": "4T8L2J5rypr7KZVKyDvfypcGAfcyZRDE8goi1TNJQHsbw1JUXPEVaFu2HYWP7FGMXKGQPBS2bM3jCHPwrwdAN522",
  "key23": "4G5kDZudLchW1BL4q9mNMye3SCNbuVw8VM8uxDpsVUF5NNvVjeVVu2xrXpTDN7my2SXYCeRJXHChUgzqhcg2xCGX",
  "key24": "5ptjxq1Wh4pBciFepenmf3Hj2jTu1Q9jJHCSo4BRsHcNekMH7SFkApuT7xfYzWF5zYvEGPos7B7iZVsfPfUDnEYS",
  "key25": "5fxqWUbcHhDqaeVyNh1587sxf399tV2LqQz63eWatem9jiCx5XsRqF7yDZjV6DDnS7caYQAbpxjgyAPD6TThXhod",
  "key26": "2KuDZvKex4Sa25rGwcPmpG5TE8f3nXVYUsm5CYds5sZ9CNqiMA7Z44pNwZEn2TA7mQfcmoyt2HxCw8w2rp9dFEjt",
  "key27": "67ScGPZLg7Gi1VBK9B6gGWTSNTKsk64uSomY1mjL7B14k3vm8ppSui1vnUZZEPpuBqyiPZZdMAtYuERPcXj2ZPwU",
  "key28": "2vuVNvsRAgd2pQzf9MGnvJs1bmBJMQUViwisL9GFcnhFWKLYbDSdWNL4ujgezUXNfnat7wXuYFJvwRtxpKVcUYJp",
  "key29": "5t1rPoKmFHPJSxaVcbLEj3VYCLbUiB7ohLRHcmE3LGnuFo3fNg5BTKnkujNp8bZxt3DCMpSmtU3tcZikjEp5y6k8",
  "key30": "44f4HVFtMsRp9Fdv7ZqPaoDZCZUFFqLb3cUzcGcar3jNbWS9bCHCkf5vyeCG977cnVShN3f1cTqYxBNPXfTTxbAC"
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
