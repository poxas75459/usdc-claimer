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
    "28J65iEU7AnuEemco8iNSRmo5rJm9AYugS4viUPopu5ACTZwvV5g3LtpYUqzVQ2uY4xpFWeM5r9EDavh3d5964NJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cxtgPTRQRNvxXyeYzXdNSM46MSkrhp2zBBPCZ1B7uM9UWYcDn7ohfHcURWG6zuiCX9rzeTqLsSmX2Nk4YDHMTRj",
  "key1": "2H3KKEFz73d2HGTZK11cSUBkYpCJHeNDC562ruhJJdtm9rD5Vimo9d66tLNhgu9vVCvMLNJxjq1BdnCYCNXM7vBX",
  "key2": "64wgkWGf9w7JUuK3XSsFjkfN8KDP6AsppVdo59rbrAdc5tRvzwMwLyqQsB2yudQAdGrs4TGgHc9MtCAAMNqeczUc",
  "key3": "nP6qM1BfMWD4KtRj3SQy3Pfjpwb7xHLy5KN85juHrBhQgjiaDxj4Rc7M7Jd5GN1cduWPrbj85RsXckP7oaeCd86",
  "key4": "5ZGn6arBQU3iGNThKBotUsh3yoGmZA4re6Br8rsZSLhJ533QKUYjkyvPHJxqixzABS4QVKeJvQcUjk6gNStZUomT",
  "key5": "5ALBkEap1dH5HFa6mmcvm6xaC3qm5kUtDok7tKGCT6QqziUyfcsrh46ou9ZAo1CE6x3oUoBjsDM4JWKb1eXdJGrw",
  "key6": "3KqiPFg9HLuUfi5FV2KMLmB3Kh92fSFGjrYU5CEirmw62Y8z63m5b7yL7vVQiqyvsLF1a1AtHWDpSQvmhfXZY3xy",
  "key7": "2MWTVaf4xbCWF9PPP5iCqMZVfyaqfcTZ4iZ8iMZUHgdkU7LC16GUrWRBGTwKx84uVTqNFEzVjNKEjUooxRkKk1hS",
  "key8": "2331e9Mr2dRVyy7ABdxxcVZWTRfA6MgsqxE6TxsaDjoyhC4eFrmziTSnXSPCExz7woHG539HrCu1x2kbgSYkgKyf",
  "key9": "5QssTMbHvGz8W3Pf28wvLQJtWnPG6dEy22kbhYkDJ8mZoEoGx1HivrBoPHguaEGcEBxcxWsyXY1brUUapCU1YAH3",
  "key10": "3ZSdwjezLgC6d12SdCx1qfUujgz3SiCJSnDADrzXoCcVRjc7BKtdWRQNxAGJDphPjDVh9wae8yotdt7wh6Cb5CG7",
  "key11": "34pdrxnGQ4sqm6AWrijZDkWEtqRDUXrvJzLPj36TwXSvb42Actae2DvXJ14RubroHjLBWLmZQyh28jCxv2CztrHt",
  "key12": "4uiR7u5SxK8ADLyuz4Mh3BaPmcMExkFsbNDWJZzWorLWyY1w3QzVjSK4vP8pc72uaqFrURDQKGnbXvBy5oQvLfA9",
  "key13": "5npLeEs9n3vjZMKfHEpmdmtwC6rQWEaiC3oBQWaMFvYkSmSE48oHX1AUEWanf261ies2mtcVRzJpKxAhfxp652dN",
  "key14": "3tPXQkPErcL3u4gZMejFAWWNSjnEmDZ6mNNAZYEkKfa4jRMGqsaWorEWmx7HCm5QUvx6AbKnJaXNJe88EKfwYQF5",
  "key15": "91hXcyyaKGFqRbHh78Ys9sBSjJAvVBsqkJ4BbeLn78AtMZE7LZeS35bXUbHQv4hecDmiTp8NQVfpxAs2zgPF8v6",
  "key16": "4JhkDR21vinhPcH7L3zbSBGuD6E8zjnaP4m9FBhFz9Bsp5A5TM1TGUEVAoeaRh1WTbWKPfARmPBDezEsTcqCF6vt",
  "key17": "2zAxtoXjmWJ1P9PaLMxtaSd5yUQ5yXrPX4GmjeuZu68qLEtaL4882ztdet4qiYXvdwZKFzh9xKQ2qWsQmBfj8LDr",
  "key18": "3Bbmi8dNERjmjwm5Ryz8zpMFqrocm1Zk8AP5QMcxjqFN8cPv9RQ5Khd2zYpivNw4hD88BbQrGH6jFznxLYK7x6AP",
  "key19": "27z9ZW5gZcD2iTUHooypkRE1DUMXtn9QpmpVWJ9FVrHNdUKgziJ5w612j7mQN6tZ6HLNNwfb5BKiP7Bbyc9raCBz",
  "key20": "3ZUVZ4VkNziMYqLyNUjrVnQbw7mR8hB9HJQHkDAwfEZCo8C9p4hAXXRyB7n2F1WJto1J3PfjP9pGRr5edW7g4Ea1",
  "key21": "2i7xdMPTCuVDDWd91eV6ugidHr7AnEPFTzvxTttj7nqgc9UuKxxksQZh2tEgUTh1dfGEH23HCJSVwKHudapGfe4J",
  "key22": "3xKKt9XUfx5JeQaXE3ze2dq31Bw7RBunyUiFkBRPTRrzAUFRJd6Lb1cxa1keGr5og7tCyJfkY8S8xdz4MaU1dEAK",
  "key23": "XGNkGCByACVLLZoAjNofJgazdrKkcZ2KVpWvhga8XDEzMQw8sEsMuJPs45c8eg3V3o58QKPN4s4T1moJbSH5a5K",
  "key24": "5GbHJzG875W9Jdhn4vMofe8LyWtyqwNSJnoUSmGdTcvVtpFk9c24LcoajZfyzn5WKRLUtzv7bh3pw2eneoyYX2DV",
  "key25": "4RoQL4iLtHBmyyrvTkd7xpqzdDzir81YdTMQZ9dBiRU8i7e4kwqt6FX62vuvMnqneS97ANHw6tJ8xzoKcC3tRXKZ",
  "key26": "3tHH4p9mEWdLJuHPWCoZxFSkWoY7vyAk4aHXrdYE3ugJMSDQcfgSAEaFskwykr6w7cJjp9YKT7KcevfujWvv5k6t",
  "key27": "REckYsSABeFBwcVn99Y7JCsxXWYEbg4WampiijHEDpkikhT9DFR9X9dzrfSz3i7GDGVY5ZF9vL81HeanSpogxQM",
  "key28": "5ZUuXnYhs7ZYeCXzFozwrQaXAWh2w4XpB5iaBpfcJGDNppzsvPejTkZsKSDGTt6xQTonuHedK95bF5hGvzPctK2c",
  "key29": "2j4ZxwbbxdiezWsyLGV5U9eLzw3Zu5W5ZWADBdxVXzgEfxdyMkijoTLSxeVAFaeRzik8tRUkk9DzDoSMHfDU8BJp",
  "key30": "4SbK7NzvjBatRhp7H2m8EdNkwuJ1EzP2X3C46Y2Kb65eMtPHhYR2B4WRby4yFrik6FbfW4Xo15AWTwVtLogAGH44",
  "key31": "yk1Asi1USXovgVAGJqPiABBy5qqaGn85x7mmJXhq5AYoMmBKw2CPnFC3PvhwaVbvra5V7YJAAZ7FhLEJaGDnT6p",
  "key32": "5RB1tAYc3EjDvHE87zrHLkFRsqsK3G71NeHxfJmPM4bQqwhXCPC9e51eSFvrz8viGu5YpW3j5uifGHJDXHA9WscB",
  "key33": "5QzRM4tqvCoZdACjepw8sEPwFkoqNPmQitxRLTJxH7RByieZovJg3xMzaqMpCAk1yajb4jACYJSW4AQh97XmzZ2W",
  "key34": "2DwzqSQJziNK1mALs2UPQrnJB1tcEouezptmGeR3T4447dU9n7ZeD5JLG6JCt2snc26SLjZbYUTBWeRsDv6WEq9h",
  "key35": "55mWvak5B4MNSfQyRQddqha2EFAwbPoXKj6y5XvGtFa6T427YvuZ6UtDhMsDqpN4L2yvPDm1Hbe3PSSrsc1v64w2",
  "key36": "5oBj6BJTe2mPdRN1jc44p996AJoLonm9WD8fH9Uwi5zkt7YCLycD3Kaf1hiSysLt9DX2sXJEiiVHRVdp7ESThEPZ",
  "key37": "2Ef2XeT3cdrrCeNDvT297hrnVuK9V31rauDqwK5bsogZsqSmtvzHruJzadEHm3HMxSrgWnKNMStXUKmvuK8BZJbV",
  "key38": "2ziPm9HXyUtP6qX31zrrsENHBny1Ga2md8k7hfQ8yR2rfw7drHMU4XcnmHQ2ZapYCGRdxKjYgyX84W7JzCLr57tU",
  "key39": "5CJRYG3wyA63XmgzLp88wSKrJpSqJATySY5YFRg3KxVJNB9j7PmV1CKVyxFC2FMediW9SiFZig6WLMt6rzkZ8vpX",
  "key40": "Q92cJivbnd2f9YUXmkvx1u5LtqQdKWwnpgR885AmKRQssdkPdpYrvgDkiiupTiRZXy6Z2o6tTLtV5aSc8ZznDbd",
  "key41": "5WEBDtFJWUHctYrLm2iN8qCGuPizPEVvfs3U2dm1krqpNiMpjZF2mgqExQ7CkH7WWfKMo4mzA33Z36Eyu4B9xcvp",
  "key42": "25BFJmnd6kv6fTy36mVeC2r3CZVw6EvRA5TvCiRjjZckhsnjKCcy32w7YpxF77P2dqJa6amXGbtnvHRMstDNJY5N",
  "key43": "2cDPXmUaq2UCi2tQdDzZCVQWQeKjZ2PkBEFwNoKUax8jWwDiwNhyjK168GLg2pqxogxpgx3WuBy5XuCZzavP7Rnn",
  "key44": "3GwiUK2xCsfJ7UpyFHUHxVb2fCDT3RgxjDtU2eD7hokfB3mmVu3p834i39127FnoZqGr5z2axQLa7c7JUF5tFU5J",
  "key45": "5ecyDzUUsvC2UzDdxF8d9Nsmi3NcQaZKm5bVCb2qHPuoGjXqoeaJKP9Pc33LVzQsfYnppZ1YVJc4iSnFrNRBE1qt",
  "key46": "2FhmF1qRQWKKZAHGx3cNZvt94eNbUU1niiTmsJLNQQuFwJ7oA7CWks7h1xyEMauMeycL5yxYNLC82Fy6RTZuZBnr"
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
