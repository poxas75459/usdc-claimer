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
    "2e9D7nVhWmcKxpjmrouiYQUWDeBcdy6aobRCGsWWjAvKcHbNdnaDkLwGcKvVJZaFZjaDenRxH58532UTQF4iueD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sbvVs2mhYvYwexsxEVLs9EnN8weD8ym1Tja984EKRNRmSAKmTUh87umyjJ9Wi6cDsvDVWFkCujPjfewzTVAdUjb",
  "key1": "UBPHKy142A53KsZWiA7URji7L9VBKPd4KkpDBvyYYeVZ7DFXc9jx9M2mr5PvP6EtkP1Wt8Ho9sjM23wjyLAQVVp",
  "key2": "4tfkhkesfbRytxzUFPMiDAKaYXeg7X6gUvN4Y87DhvpShdPshPcuQcNxRtJvW73KnSxA93NjStnn3JHifampqZLh",
  "key3": "pnnKeyCs9mENmALySdHkLeE4Z2b5BqiXf3U7TZgGrRDkLoDUHCq2UeKRMUBSHNaRUnbwsSNW3duWZX8ymy5Hzi8",
  "key4": "q2tCqeeF39wxwhNRGA65rD4RxjXWtLwd3MqmBDc6aNM7q89WNfV19NqHytrUANDTEkMonTuawxn8QdCNdac5wZc",
  "key5": "2NiV7DDPc7eoY2mPj4iXqMe4kirci3BxtmY2ca51N6KpW1b5ydPUbVUEdcktQSJUz4xiDXWapF5nj8yudRYRFU6n",
  "key6": "5YDRFpRPPDpUWfqJ3xihzNt7EHEFxrdpMwpfEmAPoKjgLZca1n5fJ96WE9zZVLRwWziJqDnSQEqdAhTk7mfgJGZa",
  "key7": "2fooDEHkN3G7BGhTRhZr7ZVKno21nKCDdVyrRQr2poXN2sTtrBfETdTmkpyZw9CNRRCM26fG2Wagfuf7Ps4ytRjQ",
  "key8": "2M5rCe4QinS2UMfvtx46X1E9av9BEHH94EQ43yfuFNHyL8izmW171ZbJ6VVx2ecQSg8HRP2C3xE75LmytrnaarW5",
  "key9": "39mbYmNjbT3uKHpkxr3Cx3CXB3BukK4jp1hzrDeWMonAgJ93cpz3XMyapeYsWVEF8pFnTmnLWiAQ9x1h2vfUCfMZ",
  "key10": "s8xVcn7XUqFXJZkmJu6ALi5AU36WPGAgRukZxEbw6VMW8zjGuDxeVvtKCZXGBfwa7SM98xP1aLwVe5NfLWFCoXm",
  "key11": "4T7ju93swsaJ5FRkoCG3EXZ8cJhTnnHEcL3eEaomSxpG7ADyscGfwrS5222NDdFfQsbnZ215ENUaKdVJc3prbtju",
  "key12": "4uoFdNFB5GqSWLeCTLPz5zpVBH7jun1uZLRWeuofQXfbihrA3ogqnJW4SmT6QWfrEhW1QjpMv7ukZXEuKhxx1tnU",
  "key13": "MBNrFiMXPB7xXAZd48u6jhkhuwkRzSz6uQmpmDguHtSGuzPnTmzKBp499K58frtJmECzRXdX1Vbt3i3iG4giZAf",
  "key14": "2EVCgjmbXNzpHSiERzyp2zzebgZjfXMcdpYQLjzz3xNzwa9ekSFu5zLvy1b1NkXcV2GeWtpCHJtjYmFmzo7tv99G",
  "key15": "3fP2pbMzrL66t5WGxv6vYsXyogKmEECCrthE5vJe6BR3rjAmKAx43fiTU7888B9eooYMmwTcAZ2iC45QUpj9yJNJ",
  "key16": "663JgadH7zt8QjBpQySyd2xR2zwTb5c4pMdJ781NghngYhXC3GLreoMNvABKdH1rgkhEQQqbzqP5kjiXp9rwuwiS",
  "key17": "2rmunwW8e5XDWmr9wqM6rB8yervPXH1CYn53niMCN79HV7t2tg5Z8pRWPL93hYaojShrvd5z662dqcjKseMAQnuo",
  "key18": "5LMqQfW8eBYpSsZdUB74YivfHuDGWtvJmiUWZCjo9bNU45vFvQ21Cvh316YrFTticPaLSZLTW1bCNSDzsdRuMpjr",
  "key19": "4rz2T1GxX81btcBmhDHjwLKwUM5NshbtFoHKPDm6Y5KVTeT6sDkLxMdPaTcqb8sijvrTDQbPHoFTyDmFRYLJ8S9J",
  "key20": "3pCdKuKahPM9U1o3W8Pj372vJJujAiBsXY2SdUvxorpRQx2yY4xdZBmByJstW2mGFp5M92GDwmj38Z4DDQcpU5TG",
  "key21": "4mYSVtCMYGjLUrW74h9TRvV9vynSfmAvdiaMuyybztd271L9LVJBRupRpW7vakTVntiQyosJ62gxawy2Kps7zMbJ",
  "key22": "4aVj8pNp8MyM5FjqJ31AR6Nf5FEQBqoAm7Uovs6LmzcNkgUEpCjyyYTiNBdZESHt2mZ1zFnj6gSosHCMspY86Aar",
  "key23": "67a9j33UT6WR625PaCCa7Wh3nyWdjqotsBaQddVx6vHJpA34xs7jGQ48HKhur1p68ZVpVjACsDyv8XbwTEoW7nMu",
  "key24": "5SzrjuQkV3dMToHc3aCCDPJxWbHFJyZMEazYh2NudFMjuWe45VWB6LBgNhghKSfsH4puiw9SMqHahign1yDQbk9Z",
  "key25": "4aKGuQ2Jdn2jhJobW6Rb9Hrh5EoZtc2eq49CYHUCuKeRmKdXUQsG6Qd14AZ9iUrrbrVSt3ud3sKxqibdKqKs7W2A",
  "key26": "2QHkF4R6UKGvbhG1pgW8CCGDoLKcyovKbyZmQeuEooedbXo37PbZLEycX2PVt87q1E7ixzmQN646BQfTHJKTGY2K",
  "key27": "3rA4jF3J7QDwSsyhmf5wA1DAsn2dYWDvr8BegvUCV6fZT6fiaJPe9z2ivgWymRuhVKiJmAmYdHucAE7iTjUdj7Qg",
  "key28": "3uQTEbwHmCKM1hDTwHUgxAU1WsFB43zbbyX6BFpeKtH9EZwvGupeLqc5zLJ8s2HKoFW9sM235mhgHzNKAHiKtMa4",
  "key29": "615C8KYtYeWiDamxnB58V2vDahgwKw6T4HURJWrqFDsKnUrMV5LXJDap5jJGRMRiPFpSJj83PrLkvw9o2yqWkKfn",
  "key30": "4t8kek6L9N8u9dPp2AQ5xs3zwqGVX5bijk34GAqtPLqesT8yQ99VgDKyi5RqRNtPy2SkFVKwDc6m6SfCwdhAoc74",
  "key31": "5ydLhQvqCkzk1bjT5MUxxKH5Hfn5J7QywNWsMozwqNe49Lfi3Cr9EzU7obP5vzLozXDwBu981CVWrYUX77xhUh3Q",
  "key32": "5y7XUq5Bao45uUv9acYtE5dE7EDuT4jxaZpLbujJEassdEtDM3piJMpLnhk83ptZWeMEdHAHF1XDKt33twttGife",
  "key33": "4rhik4rZiX7WR63SqtaGAJVVwKSgga6joN5MaGgsGS1LigrdErEew1DgebU9MC3Djep9EcuzBkXWgiGzHm1tjRJS",
  "key34": "2M1NtCUzrx91K12nhdyqaTv9RDUx9rUMMqdnwRsu538jfmS276j9R3PnFZSvi18ocbknBAeiuPdFxeEAPoanq1HU",
  "key35": "5jaaVFE83XmjwxSrJEdZVB9d4HxArxx1YxGRs78XURSnJ2zEHjMQLTpyvR4ZvnMKEuBmqLtvu4nrVq3u3jt1xNMQ",
  "key36": "5FHeuk4WujJTsoAHgfDWywaeQ4o97FNhsWBE5jufiQFaDXTsMxJVsdpFQsGz4M47PnTvhexqrD5JfCREWi88HQFr",
  "key37": "S3eSNBFHPkZEAP7K4Z6QXiz5pZUPMqhwSD5vrbrHHugNTY2UhwVb7duVPzhUUzwxkJcjz9onxgkfHYG3AqRWgKa",
  "key38": "5FjeKYNCQitJbHbMevyfF9pPLbjuDSHuVjvnHtz8mGbXdM1nThL264xAsp2bTxhNJFXRixNG1MpSScDdub6xGhxF",
  "key39": "iQVQ9JbqotCgC5J9BdioX3XNR54LtRaixzKbjarXL9dYB19KTKVB9zFXQFUQfZjqx4B1r5TbmhSB6JnTKENHNkP",
  "key40": "4DiCsG6Nh61xfdY2fcDLWnXM17BMSeKeQB86iM1db13n2vqsNoQtiVCuvuPn6wvo9jTSSMBz1BvMRLNRAvfUbuFp",
  "key41": "5ZEtrNJmVYNgVEQKYKf4UK4kCWzxG97K3CLUdQxmLyx6wAkpkNTDSzFmc11wu85gswyzud4fhV5kQiLFPkVBPYz2",
  "key42": "5H2X64hxgDy3nHZKLGHjEMP4QsRUpFg1oByCTrZ88bZ28iiktG4vdbcMzV7k2P1KQooYCW8EkfhByf2vbRNhModj"
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
