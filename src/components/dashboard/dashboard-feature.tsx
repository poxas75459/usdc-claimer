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
    "4e7FY5593JecF5wNYGT4v5uXTjXwRtwSUZgbhKPGcmEN7MHzHGPpcWPrU8p9bRGvopyrLkNZgh5Brw4KvHVfB7Ez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vc6Wy8waDLKhkNfTsM6JYcFJEihKjTC8WiNUGNdyR5sYM19C6dfCfpaxtToTH8fbVNTS1Sf59yxRci52J1ZKJcK",
  "key1": "3afd4eSFuBFA1hA68Sp4Vu1A5ozHzQ866XYCp5jpDRDAhqgCDhW6bX94vCGtLajRGjtDMbqmjYKyAcRjJvASoF3Z",
  "key2": "4fQDJBRXbagpVrdve5CcBv28pJV9NJSrhgcYwYxFXArm7cbqxkwEczujseQxg1uY94AT6TN8aaY86PrNW8yLfxiQ",
  "key3": "3W99CV5FBgGN9PpD78EDt92ycW9e9cv98m8brSWCkYYcjzLnDeRPeiURktYe6zVPeKJbBMSc6iBbpWMp3mKbyVr5",
  "key4": "5oPNJZJuTjypNhoen4Ewku5QCDLPtrzcFc9v2728KN59ua1BuitwN4sFuoFR4wqMxjeSoHwoTXmYdw2FxB2SWTTL",
  "key5": "54zLvwYnxfTKM1ukXqPuGSQKi28s98adiigqtWqf5rRGfyjshGoGNLRTrNTYNyjLHcNGcZouratg8tgwapsvQj6h",
  "key6": "v2QVCD6SbESi2xsBvGP3WQsDLMn3xqQFY2KR9i9kM4tGzWoNDSLdAzjGAA4SmzM6NvTvC26pBMu1KFoSE7L5YTY",
  "key7": "2oxNcxkwCvt1A8KNNC2a9wva2EhN3qFUyuBBKUT1cTHg8FkffLGYcVT1rA6eHwZ55yKkecg6MCZJFjPMRkhcoDgw",
  "key8": "3U2BGHHSegMaZwz67VXbtT23rcxL2Qjc1ahpcXrCqvuKot8UU8erDsNeS2rP1fqtDeUgKKzSFaBJs48DbufxoTYx",
  "key9": "2e1MQBZ9wxS8qcGxac29nyZGMxd2fzm9dNiAdik1fVgt5Bsf1ar4m2ky7w93BAMCzsCSiBo8A1rnAP864dJHCCCk",
  "key10": "5e2KTEiHkhTw1B5ZMocMor9s4gGPZsH2JSMcsDv2VNnHmpbCpDG4o8KxJcBJvycz7ufCV2WJA7hUYHjpapb93ULE",
  "key11": "2K8oMSKA43BYjG8qXWzu3VmqUAKvAHsDSCE6nX9FGrnv1o3NYdBFHFPULQgug2HMcCj4cYsag7hkXJ547nT3X8Jf",
  "key12": "24svEvnPvwaCMKc7Hfec2JJvxxNrNUwhkAk1keSx8Z8TdbrkyB2XyB1vHVZub23nJDiTzEo3acghAW4p8Uw53ECw",
  "key13": "5M6YNxKV3kqiVh9G8oVdUM9nFeGSgf3waKpTrSf514VfMai1V5BoUg5FsfAB3nYEXC8YQ8L4cmAepLwdfWtR3RKJ",
  "key14": "38K2BFivCRRLfK16YmhQoyu8zfCuNKhUNXeb8zAMA7cBqH6nu1p9BDCAdNq2xLE2xGkf3YaZqd5afyBuGjEoH1hz",
  "key15": "3KoQawsJ2fzZpXH5pNewbfZyHNXCD8evqsPRDq1AWdwWV8uYznxRRznoZKD15ZwWBb5xAzCywibJFJGk9HpEVT5",
  "key16": "3fS1hKcuTMhXTwk1NUJqvL6qzEKaAirqfcawXaWhuKNnqV2hwie3zkkL4FnBKUy5Wyf3VnjY2EVAykFz13Ps63gU",
  "key17": "3urVnFt732UdGeuYo6pH4QbfrtKDU1Z65i5enYM9uJbsK2Qo8zofagHS5FVEYYthrnh2jQV4dmHHw5Dr86x61GD9",
  "key18": "5ZqqqkhzLmca4XqwWzS5YdU3zkSzspWjNDL7Sn59jxxVWMGQNUXoWFBxtyfdPBVJQ6wncRyrotydDNYPJHajw275",
  "key19": "5tV5eKtTCpRgJ5vcGiuJNrHHeZTFKbrU3Rd8q1NNvx6UhYpoaPVHkgA42GadjsoxYhJuxkMUNGJ2uxErx9zvyEsL",
  "key20": "3ExDUHK6JvJSeAnXnzDwNQjARobA5GFe3JVWjFcwS1toyjWXGJEkyGB9d6Jz5iYJMb3vknaz7wGGmzsUMDo2wXo8",
  "key21": "3zExVjtSwfoTNL98SdseRKzuNuAU737Nvjy3e3LNSyJhQHGmf2otHtni3r6LJqRoyjJ9EfxuerrJiJDsKoaoqm82",
  "key22": "hpoQiGefpXDxXrqY8enB7LVkuTWNRz6U9dZaZSDUH3TZrL7PkpDv4HhooUiEojBwAfwQtt562VWpV71Ja3kqtW9",
  "key23": "jL49HueTdibCyrg5zqBC89fWM8oj6AwYxbRd5riht7UxTuzjtS8jM8PuD5n7nPfWvEe58MAxzqC2TTZnJmKqAmk",
  "key24": "4nfUUbQf8MPNg85p6QTUUim9ddVjbLJod7Q3gZv6AJxYzDe8ods3DBNhETz7ot7Nx8xXniJ23gVxixARW6JZffnc",
  "key25": "2XAkUYXg9QuhPC6WkWZuYTYVcmXi2nBuLTUxP75LBCnmGjoFmeq1UMQsL8EDnDgExEnCTm1XEXjttYGG4Vg99gAT",
  "key26": "2RZBXGUtzddMyAKqKoHTPdCsVh4bST685KbedLy7jc4JQaP3D3ucy8SxsAa5XHafUMFq5sng8wFLLKhcAd7ASKwj",
  "key27": "4bpScsCmd2tSi8MSvLjWouQ2MPNurGAVrxVd4wG4TMG61cgizNvmMxozMBkVKMTfwG5bpJNuvNR1aTzMAdgo7biX",
  "key28": "2dSsQSgzFQcZbsnehppjwbemb82xE7NTCvPdDD1fzSvtsZqVXGEcQ1Fajnoru7WER94Fr6ePvZdN7zYPKgscnpbb",
  "key29": "Wc5sGqnzPPVz3DM45z2CWoV6kCjUevBkgnCYopy3TtrYSNxy43NP6qDC6rBZW5eHAbVxoTBcd74jjCeXjgtnds8",
  "key30": "T4227oA8VvGrZRbZmVGEMpWHhyjtXBmCLUjh6caMi1SuUtJ8VhfRh3LHHftmhk9d85DXYZ1bPai9YAc8euHhpuw",
  "key31": "wSMHtKeVJoyx87to8C4igFJmEuW1kC6wS6q7Z6oxGG43s1NMdB6Q8NRnDkdhLm2xEywkFMDUhzsZW8Xq4LpZF3b",
  "key32": "3bcwfyzaJghcqWgBXqSPRbScuashQG7bDvqcEPzuqVbTB44Wowqhv3Ybgmy8znMZyTDwfAQMZUCsKUrWhi83Trfm",
  "key33": "2ijQHLntz8HUEg5f3LnfuaxGPHtBokLYpFBiMZcjxZCoiiQfy31NsZBCi5ePVKgQjopRiqnc5RRebxNsEMC6euDD",
  "key34": "2gFeELgWbTGxyQreJ4ranMKU9MSoNzkYJicBwVnQxjkJCztabR2GsvW7SDzxTHM3wJ1zfTykJWzzKH78cANHgyAR"
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
