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
    "rjE48UTV2HcwzdwQAYZcM9C2peBNA5ev1tWuADJoL2pUpQXBD6Fft29AWBcy3erb9JcR6YSeuz1JGDh6z1gMPcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z2uE6DBsP3KeMkfpuSJDQ1sbxvqVbEjnrb7s2iEGqVkPdQSs5yPh2DragcB8imJAqcDdyjdSkf9mYpkePYQLzGh",
  "key1": "5BGrczvuxtvDB47jCkxnXxqkUiRtPSXfHSg9p7W6PxnvKh7idMZPc1LW8hYFN1gou1wnQVndADWRAe5o24w7X7uq",
  "key2": "gGARgmtDMUY1dG5XtcoUjwUWPLbxzuBP57vz2f4zYxkPhVEFHYhMkf6qg17Nq4VzxvuEuw57ddtht4NpdRvKaBN",
  "key3": "2DQhBnhHE3P75rmMmvB3m5LmWe2qvU3A9bTvknTbjNF8jbX4dHiG21cV4vrtrAXqeRavrAkSiehTJoo5uCwoshmc",
  "key4": "XLu5dpmheW3dxJgtWYYeWGVgkNKACgdS6nPBSdcNNhEAnfUWcWrR2oUhzJt8fvzwsaYpwpjjXiEWJpeHBQUnmKw",
  "key5": "3PFf5Pvk4T2oAYHAodNCaWDR8gq7XDwSDiZWQdMER1XL1g4GjeXMXVJvDbXu7Jk2KvHhyu4anQQmWtNdt3v671oR",
  "key6": "3MxA8CXuvsVQ7f5aQ8DAJD1oxs9JEucrSeriSUeophYkToaVtsDKq2xff531RXtJ2A8AAyZYGUs9fvb3dsP5shkp",
  "key7": "5FJFutN7Wg4xz65j6psWGUjYZpWtPJWQKg3pUq4U5iuQLNVtxmTmMHHtvbAh2PNSR4N2iRjLrjcYj5uetY1LAtxJ",
  "key8": "56R2ov1Vq9j89LN7udcS6DThiZw8KwheA3BNHVz4uj5b7ckicRzAYUP8ULqyjuXyTftiUuiY4CqhJu9rYMhmWW4P",
  "key9": "46NMkq4c44EqQ6kpxr5Cg9LcoitNsitiYELqg3uiUxcXk4HiKgy2VMnmuZwSpb7XgkXKqwajnR4pNuCycjrk8vJ7",
  "key10": "4VKYVsZNDggHyzShCxGnNk51B1hXgcJSMso789BCaF2EbYXRajC83obMnaCjNLyVprLiFgrcwgqxtXEHDvEb4KWh",
  "key11": "584RhS8JVSxP91BjrhBqgifP5pMMf4hFskLbiMK2uYqt7JKQJrVy31MuNcH5nNrvE9LrxmVm1ege8aA2kyYPgyw8",
  "key12": "4c8pMqinujcuXBMn39ghnFVzCx2RrHgdziQvCt1WkQT3NQ7esnuW6JV1T7ozMwzJyMzRDQaBRTUEFDYQmpaJQEuA",
  "key13": "4VuuQP5aEsqqs5BxBdZ7c6H9bxVRRVfhLUXKAyzcMnaVsDVzAAd66LogdV3cdPZ3LtbzwZxrmdyQwMwLH2v4wH5a",
  "key14": "htyUnGVF3Zmip3rum8zc3znWhgoqypnKjqKzJ4GcnZfuZdTerfuzeqfGBMt37SXjiPKmxb3X3Pz1YhybZejqz9c",
  "key15": "wD3M8xxMCjkYSHDoaCvigQdiPjSmRzLqJVJAd6qy2X81DEKcsYaYWcGMRTYpJYvNu2BMzrfLPiZ94Zym8FWjb9e",
  "key16": "35a6ujpj8cNxDcjCN7ozfTzKo29U8FtrJtPSMT3h5jz5q2yukqm5g7uSao943Z3RxdeBt7kuwEMS1YskVMxNbeVe",
  "key17": "3F9MhG6StjpHeGYH1JLqqEEix77EZTUeYho6GtwFSHYzK2Lv2ZoGswnrNXzGsv3c5YqQnMnU7RdcmNfhrR2ib2Xk",
  "key18": "2TCtamFUJhVqUbCrBRwhBusNsguED6CsqRAvPqDuhhBhVwMD1ks97oisQ1ApE3fxWGvCikPjyM9xr6Dpnj9es2qn",
  "key19": "2miNjQ3KPiJQ9Yq8rSYFhjfMGSu8aAsEiTtzagNuYATE2mAyCZkx8ggdfAKJkm5aTfi4LW7jGZmoHCZHn7KL7XL1",
  "key20": "4b6u5sGBAnjoJ8vJByrELh5CJ9mvuLZC45jtV9Zwbj9YDe3YgUaas5U4XR6BSbhW3Cweiu5ZLUutcSS9ocoBTm5L",
  "key21": "3z638xD5QjnVZuz5LtrYBBByCvJ988BAqrWvLpjFK2xQJQju57Bgguu6XnAGenUCqeaNLq9Nr7CzAiFE61Lo52Zu",
  "key22": "2eASFp3Qj6vw3f1o8RfpzXhKUGbx9dFMnXscawq6w5auewkVZhYJyzPE3FND6NB4oiqXPrnm1q1Z75yJixTTbME1",
  "key23": "2nFnt5JB6RTYMZSpzW7twPzh793dATyL4dj3tZqso4YpqJBbq2wqfr2CR5v3qNTp9LqfZ3DXDyi2hMG76ozzuRxM",
  "key24": "44BxrJyA5H3gU9g3CvFzSrSsFqsG4ujkWRFYXJdZRJGTQoCwwpuE8gmazupUVK7fCJ7VHJ7ZicmMCjwahi94ND4R",
  "key25": "2cikNKJtmc9YGfEkouerPmMfDLpoTU1dzxvFdca8DooFf8PHzZUdzxp9FSeY38ejRVNXLqP83cYkTLt7wFCNuqPr",
  "key26": "34J9YFvazACphfkdJxP7nLW9Ku16bdSsSs5t35uPYUe7iivnZK4hBUBBgApa7GdPGAfMUJ1oHnUmma45TwW9srqb",
  "key27": "5dRR7a9zCQJXGLkCZL13EpUK8MN7P2wJW2e3fmfgamJHCFsNJ6ML2UtR3yD9yoJ6XwwLELkUKVUBWdzXESk9HXLZ",
  "key28": "2PEH1LiH6pdsqkvvAChrrnqqa39bxxrURdCHZu3DP389wwrtDhdnfPfhTPMiRX2fU9iJNzkJfGEu2EW12TLWZFH9",
  "key29": "GCK7cLMeoTHDhfypmQsSJBViSo8BwAHEKJ6KfsUueJqzSxSX5RNUH3DrfAYu1zhAe1GW72UX8BBZGtYrPRcEC6z",
  "key30": "3ofwcFwmzps9M7iD6PTymtJjBoX1GZgQ7jPxsfhnhKT7JUiPtBGUrrBXUCvuXu6pxXVcFYnVhdejTQMtw4QBbji1",
  "key31": "66v1jh9TzJ3B8ryNdcWBm9ZVMpbF3Hxt21Xaw82HVVdpVYvjKTsWoVYHGFuRBhshYyTPwVGx9Lj4bLAxxjv1VPN5",
  "key32": "2wuRW4h8RwcTcYxnLwTw66akxyd7dTbXi2pgVBjJCyrNd9hyuxs9XoG2zxCkmVpBerroxCkLM83SWkAMoKdu6Fe9",
  "key33": "3jzUQET6xRBoYjzGNDV2wDcCD2v2Z7VohzcLh31P5GcySFKtpBzm6jLUECccC6sSSi64g8tUAududiEGJHYKionB",
  "key34": "5Lvch3RMvypHC33GvWgFHGCoHj232BS1pYXhsLZhY6qPFANAhJDh1CTd4oynbgTfQFov5PWNC2XXjLuFmec2GTrH",
  "key35": "5yh52ekgxnpxynyFQkULetszbrnsjT5RpQQBJ2GkwKArT7GxKNdNFVShvCgLEHLHmMcTX46yFwsA9cAJHuEbnSUt",
  "key36": "33rCcGZaUyu6bLK2QRRtvzUnLHznaa4SGJ9obUUaE3zD41B2Lbop3nMJsjvqznjtbjZPj8kJFvftEfWcb62TLWQp",
  "key37": "2dTwvp28MR5iEXBbeWdPnETLHG6bjShynaSBpLJizaPx599Fp4SPRkBRJGEFJJiiURJHSncWHuh7Q2iMkCm7BZxs"
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
