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
    "5xMKcNK6xqtTPvgq8X399kn2rvNdfCMwLU3HPJqvrEPfF4FN1P7vJvxXxn4kC76iHoTMkGGhoPb1DgJj3YSxE7ej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6b72swJRWjiiHrVdoYw2HjByf6KKBvTSBM13UikB4eUuphanPSeGehdt1L9HhroGzZjug7eDqKHmrNPNLa91B79",
  "key1": "3u1wYmczt2VSJWGQmZCajv37D8Uubo6KaWs4umGt51kAcs18XW2jRfMyMfQSyHWwtGAPSjaFmfgqopkm1T9URiYU",
  "key2": "5du4T25yBFQ9TYVTKeWQaV7XfExsDGkR4WNNBYK89KRRxYLh3M7bFUNwvFYNY9UxNhbg7fSxH434xdEqzKERSpaM",
  "key3": "NNxMzKdu2oTwrgYTfxx7sypTuKb4PoUmwVnJFED6kFxxGiMGBk6MGCPvM6iAzQqAYFtWoFhZooTNkV8V9zocUZ8",
  "key4": "4R2U6yGbgCxRbE16gEZAXM8SEnqUah4wbxhGBkE1YrXfa7o1Zy5XiM7EeePriTqPWZmq8yaXwia2ypfAf3iFiGUV",
  "key5": "cn95LzSCrxjq9bTvdogaXtVVY197yHNJDbKrJZYraQhpHHP4GsWe8EatbtBafUHjZ97JoubCif8EuauSfcM7qzA",
  "key6": "2pA9hhuebU3StnaQwucbSALGe4dkwHBqyA1wbwUQYTRrBzwZprNWZxd1DqLvz53yRosPvm7V6JSKf5TxFQ3K82Hg",
  "key7": "z3ZvAvffgtM1nyLxYaoRjqBH5ApPE8ZjetNgwcmxUnKkMchtqGxT8fGAJ7hHYx7KjP8G3HpkzZK3curz1GWqmRa",
  "key8": "5ajaNEDGFS1jYX8giqVxi6hUKt3DNdD6A6ugWwVMsxUjmsYACkM2jZJQjEG9a4vz1Q8cM2yCoCVTvU9spHMpRmms",
  "key9": "3yZjNch2EvzEeDFYuJUnyXjChbfWfpzmHUaRqVwUQYBZ6JHdLtAhFod36AWA1EzrLCtGGvAoPpc2XvtpkdhSH9nr",
  "key10": "4UZbL9VUWgzf8R6s94c6vwMQk1aWMFtDbU4emyTvDUL3u97egb6VAXHgsqDgHDr7gHhPJMNC4a4Nqq9Se9cKCjAa",
  "key11": "WovhGwXWBJCaj71URWUFAhnQ3a9nK32Ss3UGcLyLYoGZQDLMPvi9DKRH7eNTQ7T21Fzs1KoQXk5u38zybzSPBqT",
  "key12": "2XGTFdjJWGx84K3qUTCYqqBLnSxRngSvfgtrgAztPANBEbyakbXup2vuSB6s3gjQ2CpyDr7kPKkuEY4CT3Ub3Z2i",
  "key13": "3MBp3sdMr2QPSuH3A7dmF4q5h4TDBbH2dRtaaDhRThefUozZm5ibhxhExwFF9HYMJivqVnZwW5SgpAwnkJwKSheE",
  "key14": "384RhehhvWmQR7ZjbPvawhGnyn6HiDP5vRXSeyKozhTvksQzdEW4yscnFQ5gm9MmcTwYFXHG4fVYZj4JbSKnMrcE",
  "key15": "3kxA3wDNrLb9sqsFGJQGLHa3RfanLVrDgwwVmd9TPTgq5SCwX7jDdgvgPJRVy6FtfXkYen8SpPWDQGbwjUkiNUYu",
  "key16": "5ozUW4TPxzSg9jz7SVXwppovcsXXW8otyLuvX9FLrNnieeZ8RPedtJvzDzfM9DE8HgFQVocEZwN7p9NvsHLNide1",
  "key17": "aeo86P8gnRv2n26M776zMbSe8AMEnifeZqmv97n1tHQb8MNUFfBx9FxczNZU2ncJG8zFFGZPRq8qQfufbQpmasJ",
  "key18": "3trBSoqbMpL4RgXoWapbVpNNeF8jkdBwst3CBEfnENwvYekgxHAXWBEsyjPrzsZN1aUP99kF2nQxXcfmWPNMZ5qx",
  "key19": "24Mpq8c9YGuKKCbCqXtRJbuBrrP4jqiStuKXo35oGadtkMzyZJi1EddVMDN42Kz8gBENxnvnkaXta1zkCqyaf4oA",
  "key20": "4CBmsRkVofVyBMxNbVvGQ5zGw88GAj1mgGfkgfZQ8oR8xua9TxfJJXnJpyQx5YxoMxK2PGGTmNLd4poEUB4dhk4u",
  "key21": "4zZBeJ1cGTwM8n6cy9J2A3MQEGU7DAXkAzMgzWrcNaY5vTE9LGm1Nk41PW4dDRU8WqjQjjXQv9g66AVaBWg8JcBt",
  "key22": "4N7HktezScbTdWQQt5D9nZx9FFmuZWG1t7794nC6PWAiMCyZWWeoXEY1LBrB2K6a2XmqLEdcbJ6Ee61bRxh5N4zG",
  "key23": "46Dee6rxkhEsZvhmUJedV4XBntU4csn6KB7QbL3GBeunrQyPvQy1sAfBCNXnPmWCKsLopNDZMDrJhdRtymWniH6B",
  "key24": "2Yg6hgbBZ5YgbvsLJbpoqnL7niBeTwRfjefSdx7F71tKnBbZf6FL65hsjddT5ZbPCmu8YTeLrkaGL4f9QwPXu3QU",
  "key25": "3LVn8SBTMKBPyDb4Af6i9NoeDGsgFGLtpDHaQ1STEUwqGbSBUZR7JyFdB4rmhTWpnPqbjTDVuYeCovGH6eY9F9F",
  "key26": "3CqWF7tzoW7xM95z9jge8FE41beGjnei8N1cfwYTFz9N6YjDkKep5ugGjBcmdCSiPg5Jc2rs8WYBuDSDpKAc1e5a",
  "key27": "5VrBu3DiCP1CxKzcxhfmDtTo9UdcfQCpXGNaLqziuJ3CNDE8NMux6xjWzXEzXUCYTj1jYFYxpp8i4QgqiiR1pxcq",
  "key28": "QfrDTKLzSX3YzwBbnxfc5fTB5pdtcMRhYTxtzn6kVbr7Q7gZyiyCT1mgM2apduFSW75rHSZURqsUdDwmRd1wHWt",
  "key29": "5M6m9vH8qnBshZvAekk8LadDNPxBZqVLFsZK8JUiw6vtZaKoUz6skRP45mthLLRSLX7ubCfHhXXp7hhurV97umKZ",
  "key30": "21GZTSa9Su3hheQAJofKY8iyvFLA5YSheyE75CkqmZUAyg5w8qySCUczfsYCevwuuaGz824S4gYdCuehEjZ4N9LW",
  "key31": "4bMeeTqTa1tJgxjPhZAx6pYdo2MYopsM4FUJFhD6rQA2YJpa3Ncv6XaYecregxDUN62ZzqvxiGqFtPhchcGwjP3S",
  "key32": "pgRU5GWPPiKttdHqw5aB4zFsoF2Fmun5SUNmUTN3XjNhgBxfon6vqyaFToNd2ZKQSKRgLpXpJbjLGduZ3FV22p8",
  "key33": "oXCPoSBYHDqHMWSevDw4siC7PwZRRJFicGe9gagD5ZXzGTwF18DkFDhRNJa5Cfq3nkS2gYTGLPoZghDHnt1dcjH",
  "key34": "5JEjaSHxsWkY8tmTwKxjLXiTz31hxvpUJ5BTW6yKKrQxzKL5wn1JnFVJSYNgco7sZbpB2suiED5bhECaLMLfUbXM",
  "key35": "39o7kLgHSAmkukb6SkQ8yYGGGkZHSs4tyS6kGk7jMjoA5dRg132anGswrZJU4BuZHvJcQBEZjjmHhDfomdvoTKpY",
  "key36": "5SNndeSnKtz59QpikuuMukSHMFMxvr8JVU12oh6DDGQ35QyikNLWxiZQEdHRdnpNrMxErLccwjXTqwJeDENvpAN1",
  "key37": "2kKCeFXXxfSrKxLbw9qFJuVdbKxK8TKm8tpj1rzJxfduNhjwpJtvYnNcDHqbKpL2gkZxAU75Zugw21Rtc7yR3Qu",
  "key38": "5LDghEZBs6zW2jk5yGu7KZaHEDZSkSYnajWHPARMFxcRgZrLc4R5kJ4sbfQ9ZSJyMa1oh2j9EA3nvXaGWW8k9Uz7"
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
