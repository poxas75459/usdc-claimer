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
    "45zpbNjCEv5nW9ipH54DXGUvcUMYtUUYy3yKNRzLowr3h3zF4hAGd4ddR8deqdUDiy5DdQXNm2U2a536VwDBJsWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ojrhjkPESCU1XjNfrSh71KCGdmKcgshGK6KpHnK96L5Sj8EoQgKQ63dFa6nWVSBHJXiLvWbmpMJiZtUu2XkKtkn",
  "key1": "4UhwdvamvgruimxaUn5ccPMJNMFSqUpU26vTPPupvdBfcx7R135gHtoQZSkicuJQ5uSdK5vJDKHEeiLscogcgzF9",
  "key2": "34ra8wjV1bg1JoxBPGgd6LnFrtFepGJ98LcEMyA5bjqULY9DUtpCR7Pc1d21stRM61yq23gvriyNDmT4PDE96Hbk",
  "key3": "eCG2JCHaxsc9t8XcJWCDo1UwAUfFgzcCTyJL21YCibuFkbUP9dAkXmQGsprUMA6WQS6h3tkYB8DSHr1vHZ53GC3",
  "key4": "2p5wNg6owVUZFe3FcSX3JsvDshFcuCBTfxdjiVvKiL96wxyiLNBXtHWkDfUU4aogYQLmioSYXjydVB9GSMyLP3kV",
  "key5": "2S6xJD9voE2VpgH5i98fiVKRTe9maYjX3jwUFLrD7kN7NuwCuczTHrwr2sJF3hAoSGvZXDEEz5oSJjkvaZ5JwHzX",
  "key6": "axZ3gGcS14fAhcC3KeA43JW62uDUbdPMuM6cDKkYcmAnAbhjapBc1enun22tCQrYHgQydf3hCxDvGdtCbeE5UsH",
  "key7": "3v7nUKKhRfPbxdDPZNp4xUCpTaQo9NkmBdmss4dVR9n34n4P17Gm8oxvrsQStkzwFrpEhhuCDtCjikimwnqkxdUq",
  "key8": "2zjSXdDPUwtry5CMhakezYUoy7JVggA8fUBjUSdTL2UkTnQvkawrM6N87z3qZ4TTua1ituZzNJULQjFwfh3SVk41",
  "key9": "2oeYyUVuTgUefQ9pFnvX4XfRAuGyZGm3yAwrjJrXFaQJybXQ2BXGjVbmDqqGyNwfWTSK3HTJN42sUbEhrHWt6Joz",
  "key10": "2qTgU996nF4uF1kw7Zjw4u7mZ2SsWGWXgsczDLRKbm2C7QSr9GYQPAXA7JtVnfVAuQPQXvMtvN4Pf1NcG36uRxAi",
  "key11": "3YrNsCRgCY1XFBNxp8HPTfXdNYBTZB1CeRKwKGEkwdHvndCTr87ZMCzsDeMox4k9XzyNXaAEpLxHahXw7r9LNmwS",
  "key12": "2ydq4UJbv83Avsq63Lg8TEki82NwMXuNj63b4EraYW15BaF2QgSSAUaksBs8FANHaTzLLp6cn5a5TVjtCbvSd7dP",
  "key13": "2G5UP2HLiny4XV7Be9FAED8evgsQZZWRE2cE275R3UdtK6UCKCM2f1HYfHnhnekaZ4SZ2L3tRAJyTn8yGvzrJuMh",
  "key14": "4PgL8evw8odUyBMJsnqQaCaKGMEoafLSyGv4UJNQxfGCdM5XT5U4gQNF8XciHjmsdzEsSnUvwfaQ42tov8aqwkYL",
  "key15": "2fhSqdus79aEj8PeaNXNKnSddr9fgmetzuLTSy9HWSeGd37cJqiUtwC8DsDchPVYgDKhhSeZp5s5rYnC5kJZ7TdM",
  "key16": "4KFUhFYwP6HbqvJcaA3VEB4ECVBZty3w8p3NHYdpVAXTxKXS3V2dDKxax34Hnm3RkFyycmPvdTtJMkuVdJbnSnB4",
  "key17": "3zpeG7HDyzJSm17sv2xdgTi3tw6Hy91jmasKmBqMm8ZJ33WVrg46Fat1zJrWxzDCJPT6ZZ7KU7X4V4wzP1sRCuqj",
  "key18": "XWVqtzygbS7c8wkaGHb9WtD9MupGEsS9Nj29VNNHizrv6FPbf5tKyEATLGdwhqTCp7j6Q9wCLD5jgPebcVzf1Ez",
  "key19": "343BBeR8HLUjB5DRqhupc4HN8xeQHZA6WJ9vh2QabQ4FErMypBVz8wTNWxrp631wKSSHDCPvdtveeJKTHK5iHjXZ",
  "key20": "5RFZg1Pc5paoeqR9cuwiw6Ev48yoBxp5d6eEnT2PRSKT28BTt4s5Y6opzfE6Ao39yCc5S2LvZc42wdDgd7eDgXMn",
  "key21": "2hN1DmrfpJM6cZ2EX35PTdDKzGkPH7RYkrk6WZduMFB1bpStqeVCETafwj5JSiQUjnj82PV7jJvkdPQEYPMXbVTw",
  "key22": "4XAumKRkGJQrZfGfStg3wc5tz5nRbReP7oCr33nx3AzGCd8SbctC7koiKjfFqsDnjRXfUXAiRLm84qTAnueh1LVH",
  "key23": "416KrtAkPhg51KPCdahL4MqQL9cR6Ho8G5Rswg6DAvHsVMfCEsoVvnFRLPhUMthyUB52NbvR1SuhiW85wGFRVsUq",
  "key24": "4XJiDXzszkNHZHo8kGYMLuRyz41BKetRva8T2P8jiRmvG4HaLAHn4Na3hxGPguJ82Ua9aKX3GwgNJaYcFwnmXKYt",
  "key25": "5xffsTnceh1HCAyUNzEnqBUxSUd4K9Dfg4xmda83C1jsnfPp2EA5ycF41Wu8SZVqHJLtmXQNpNR1es1oCgDXz8N3",
  "key26": "3pXrpNjKRCSFp54H9iyPtauwn2cXBW7BC1PqnYNma9kS1dedh3Du1jNryqxa6BcUGVN6xYtwq8o8Whdop4Ux7BeE",
  "key27": "5rEj8ZvygbZKwYt2YLLCENobyabFgoTqoeXSuwnM5g2fSJ3MyFrVT92bBX7DhCvipyL4WtyK1wd6qUJQFZmHsYjT",
  "key28": "33Bv2YPuBF5hLQQqhjcUNtZtcXbrr1mGySXSVDQECzac4GrUQDAQ72GZcknGTpxRyCPbd3WcQWStYedWa6Y5mmsP",
  "key29": "3QxzA2hxogY1VbXr8HgazoYCbpcwhScPwVVt5uonXiupDmPTBM9mKUG2mNQy4AFD95owyXaUnMauQgs1ANiAyp42",
  "key30": "5jhiuS71YGEkeWW1a3MoDHG1bbDFCdhFD5g1zHL5vzEKJSiEgW25t8TXMgbBfzMn2jpJ7sQhhmHriNdnQv2sRNSS",
  "key31": "2opCm7i8hQdFtv1D8CFSNuVpnikQxYY3rkb2Aozjwru9L1mdE6urVvsRAezQuiEc8rW3Pz4N8UVzcn63xL69aQKP",
  "key32": "2kGGyT2ofp9F5x9QtDXLtTPR1Wp7qqgoqS5B37hrYnV7hwRrScLzG2UjKW8C31wWhJaweMipS672Eg8yeU3grMDn"
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
