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
    "3o5bkotRgqqmeAytHTcV6duAhUwMJtZPGyViqgw9BDYg6aKCdDLzsicpgxv3Ea3TJ9u3V4uaQFQ4budRuLXch21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25XQSrHP1zAbLE8vvvAWVjXTmQKyoKPTMeHo2EKgjXfECWK84jR7JGSJ18PbcTE8yqdM7hif6VbS8yFJvLqKTtUo",
  "key1": "4K3NFqzkATWqkPkSFjrsRLdwpGyGR9RUuz6iw5hsFdanHq6PyBa3dgkbn7LVMV4vRaXuFEHywrbqnCiXRXCEkbfP",
  "key2": "EgHcbzN176vLv8oDxVJWS39PFUvjA7yD6mAxSzaFrY9CASKppnPPJGeBYaiQh9RFiJYQXDfDTv2baLiXSGXSwCC",
  "key3": "4VmmpbTp84diNLQwTtVSSygWUFeiFCdeWu8SSdX3zY5qDDFgTCL9WELhH9AParY4XN1128o69EoBw4J6BAmbPR9J",
  "key4": "5iRURxAeF7PhbPMo64M2axHQVbF8UwdLMqgozkarjBHqPAbBDG9BkQ8S9D1LMekLE8U1enHm7cBQ2pGRa92B2NSE",
  "key5": "aUgDRG3uLJL5tfXDFqyFcu9d6nJARQPuZuVY16o4hkRGAwCWjKMKnw9coQ6jNz4akSb6uWSCLi3ZutRLzhScSSu",
  "key6": "3kPH8VkuXRbHzLPWkb3BKb431ikjGBdUx7iG7RSDgYavTXuVZe1yby5Vtqbsksedevw2TPYi6SjttqMaazFHxMrF",
  "key7": "3Qrrv5UNRX7thKU4cyd9zYrDGCAJBfMUJQy6hqStHFp6bkRzz81MLRq2PzFiEby5GXVk1EgH31nq5Zm97jdhtBSN",
  "key8": "5mtwrdZa3iNHu5wLF7YiLq21LRXqDTw9y8AcwDDeeKy8HwVMJwDTrFUzyDmWxyVsqoxz82TQmZBVmLqCw6LArhLF",
  "key9": "JSkURUeUxFHjZcn3TznzrpWHviSQGuaM8Tbvd6xZXnEU6Z73wiso4iZMwZyXRr7Ko8h3muEqrJV2vSY51T1eGxe",
  "key10": "2HBHkUDobCHxL6qMCTBxqiDVMGbjD1AnvasEFhs2AbUjqNBcHJrHokJ2WL46GGu9eZHkrBXVr5cTSWSQrHQrczwZ",
  "key11": "FibQrvk9rHyfCSNpR1BvjJyvM7W2G4o98XebpGRr22PgAv7V49KXj5VPx6GnpoWUdd9fbo49Xc6fi6bCHnhpcbn",
  "key12": "i2DarBKgxuhHZSVRxkcLvQVtWoFLios1LsW37RiMqCyQdGQ5UprfYp5e1uqdzJB3CHQoQsTuxL8asw9fCNxDGMM",
  "key13": "48PDYUPqEYY8GhrwtyfTTVxdHrexE6bN1ruDGqVet4BoDE9ekftYrSZ4Skotxs4WX91TKQdj2mwx8HJuKwr1eGyN",
  "key14": "2DmPQ7gsautpSu6FUxbbotfNrAQCkBecmLkLhBDBq2WUsoQxcwP9psGYnuF8RLW4aEANyvbqH3xHb5D3JybazTuG",
  "key15": "dt9YcP3jPxWrPeM3i8eHZYsc2z1pMGio6S81FZEhRvfp8FyuQ7fWVUUETzqp7oRhwit63DcerTd2RfBavpNstJg",
  "key16": "56wN7Ct7fkjfZkGNZvtUXRJMAHyX7saQXEHpPkig6aJcpFcjWAHWHWWDN5NtDLHzgZcFNUjxzMGfSFn8E361yETr",
  "key17": "385rpGsuxTgxNj7A3y7sBUQriHKFuCKTW32UtaGGuAhM4X7zyWUDie5bZgB9sv98yy73ypRT59MLiX9RjsCRwvDo",
  "key18": "3XgcRERZdCBRrtem1G3V1buUdmHFCWKrmNkgiPgiCHzwgW2auE9wiygEuTvCP4F9bXeXfuCA2xQCgsLaq8Zb6Ev5",
  "key19": "4jUL3US3umXuMYVmWoPa9Vink7QAh2S61UE3SYteXi8KpjkuPufgicJJ6SWajHLmPJp9PLtSBn2vCopnYzQxqW5L",
  "key20": "1hEW4x3zAVkzAGNqJKJ67hWzrC69dCGrCzoPL3jNP3VTC9ovi2kAEUBVQUi1LrF2Tmp46YEY83FYXNZjffmXy7x",
  "key21": "28kXNorhoFLz7a6dqKSPduW7DaXxwWkdqKHoepi21VmdZjQJnxVS2MgkXqkheCmhhaasGthFWCyR4KhD9eLU223m",
  "key22": "4VsRdDeYHWdcSR36BU13sXVB5Yhp97PcUNWL67gYxXw6df2NYGGtPVnjx4ydG4w8KAhHpZ11YKSVTT7imdCBKo6A",
  "key23": "3gDaP5tLg4XWfMNYUSwstryuXkr2NcF9QMeD4tN1p5jCsojr76PCvxK316yjk8dmMNe3wJFXbmsHYw9TUdpp1Fcz",
  "key24": "yoPaJniszanetUHfbXvdGMCoX8dRxw4QMhKUwmFy7Am6Tat79NvD6vVL69edcqYCHakaPEecjKntjfSR2JUAQkt",
  "key25": "2x2QBu9StygQFxdayBTZ1gvGt9pMFuAdCppBeZ14PDzQ3bTNa54eh32YQJxdJPpstbPb7UugrcAzdfv7u8yCRxbf",
  "key26": "5rgVpPuMeUtdTpLtrBLuXS9EkFRKXJ8CMc5fSSzN6MvECzN5yDTz3wugvYW7T3ovDh1ZktK792J12XmD5JLGBg5g",
  "key27": "26DwYMCkXJZJLJLgMpzyMrNqpYdpY5qSSS3qTuaTTWEcFJeE5bdoBZ3QVfJ5Vd77L6Q5RsHYquhWuPFgBvw2uDWV",
  "key28": "64JhMUfzYsaXoNs1Ek3TnigE8fFc19iCMqdDZjr5hbNbjiMTurX3FMb3doVUeXmfTJRb35bmUjGVMeU53zUNorbS",
  "key29": "5y7LZSRdtYd4A4PKTPHmaxxutyq3mHXkQawUBr5qi9aFVmVHWiKEWXTVyJAFmuE3qjLij73iWoDDkxqAC69jmNfV",
  "key30": "5XLDzH9cwJPezBoYpB22x5bjZRuK7kiWkUe4nf6Ea2j8a5etfSWgR5Zma21HuxS9TgSPLxak5zQZTSruX7sRFnZe",
  "key31": "Ws4uadPkxr62R8TxcboTFYLi3jLhwcrbDXWrkun7hqhjGUwtmiKYapC9TA833E7Gg42ARp1yV9DLtuAPm5fayWA",
  "key32": "2nfEq37TC9gf4aUUNjxjhWnotnnUTzph34uH2DWZYPjp6xJdgzQpYQmUZ1WKrcn7iJDoGR62Wxca266pbCvGcgDr",
  "key33": "2eHtkSK6RVwvXnoJKaYFYcmjJQ2KbCzVmFmAMHEzRpTosym6y2QggvATh8DzW77utEgNaZUqUSEgSaBt5gbSPyqt",
  "key34": "47tbX8PvNMGAe7JT6jGCRfrJGsvmAreWfdnRqkDmim1F9w9EGqZbftmWEDPxt5vSKiRoWeBrPbpdHcCSmBsDcbpc",
  "key35": "2KtsX2z7JNxF6WP4yneCULNevLKtgnFY2hxn7XmnCYmW4TwRdyrp9ioFbgEgTYK6ec6n3ZfS8iWRdHe8EjJ8mUfG",
  "key36": "2Aw4phKTGykvnVWxU3bPV8a75Lqz2V8C5Sd5WwtdwEyPDHxVcCae6vRq8nLgLt2dYj5TSz82iF21zCdFttJdUZot",
  "key37": "4fWgmbW8pUBzFz2mmACUc1NmgbC3Jk67npgf3dKBNrLhyCfF6PT5F9QyDc4B1MwKmcDG4KEN1Wt7bncQC8fZn3SG",
  "key38": "5AJ6D4P1Spe8dCwztkpqy4WmguEuchgSrWD5Y1HYAtQNuaZrEPn684t7e6rhGRnZcxS8f2d6eFpNrUqA2iDR1EFQ",
  "key39": "5jgXJm5kuC1xLyHgKBYiHhrokXWSumyZhaopogQ8mFZT5PjW3k2bbWKbwN9fuMgx7cuLaDoPZsCVs8MM5WEUBiqd"
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
