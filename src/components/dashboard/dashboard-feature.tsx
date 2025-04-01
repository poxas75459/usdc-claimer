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
    "wPTpLWSKfW7ZK99hS8uaDxqALVLEnG5KXvLE5A3xbXiaeSW7rWx4J4amaaJUTwgoaUWSWs2SgMfGF2DzPUEhAjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66r3hKjwZB6vCy4nV2kovzbsooTY2Pis4SUsg4f73RenPM2b83vUQVJU4jv7PvhKgZpobmXwAaHfwX2ax2XSxkDf",
  "key1": "YbyaZuZcN7ZXBXVhuhum3iMwrL242iRZei1ywrRbc3JqCaWPHHFdbDEcmLyiqSihtxXWhtWDUusrBVk6fmDRxm8",
  "key2": "2riHibSRTR4kgmM6d1iRNaaQ1oai2hwmqQjBvrG8NVtdsBLYti6RMQFgzmiV2GT5kdrJwrhjqPMiJJxdjRpGPZDL",
  "key3": "4735a9UbcXGfH8U2JXQYpgFoXKoScrypp5nRuMD5HCZmqfucgiLFqX7VkEYBCP89ha5odBZaKdC4ZVkyhsLVxPL6",
  "key4": "EBRx4FeWgj9Ay1XhC5D9YCSUN7G5Yd7hJ5ik1qKD1Csup25RWuY1GVMVAwsnVrpNKJKKK18DQkg5exaJPAuZibG",
  "key5": "3CAv7vfnWhW7kd3ixF2gspaBRiwmisvYLtnLrEqHovi8Tj2cUPduKuYieuZvRXz7nkZdfnUuEnzzSuT1vRgZ1Cp8",
  "key6": "3m1ksiccRFFx5wXpz7gjTGd1P5dw2z5vc5RAM2AXtZoy7NA2kjgMkrkYMpWc2syn8yvQuZ14wHQGgcPNiYFPiyFj",
  "key7": "56ZkUYG5KTdCxQjWiEFtC94Sez2PNNiCF48BbNAxFrSEK4pHJM1RJp1UehoS6TsfjFuRYJgVPiCgVfsonS1qQnBU",
  "key8": "3Gs7RJp71AJxqwciawhAhxdvaxh6sRZ3v5LMqc2tyZTKjnFHuU2eof54G7BSvDzmEW9Pjcwbzx8UxwCChuUd6QUK",
  "key9": "4xe62xBB5xzVvBmUSVDXBmix6bNCdLaVqcFxqFDxfoCVuNRbYBaWvVfTuyV9BBXyaupvQGNmxjAVxqcVjaXbCWwf",
  "key10": "2JYJEt6jSDQHZCQc1C1SSttsk4W8mt26PQ3Mx28rxtwSR8uJcZSNDWZccJAbdCpZqHe644CE4LPLaY8bDtjMrLbr",
  "key11": "2noB67LZxSnR7QhKm91Uc3NmFvfskQy6engUuKVpb9paoFyDpWfNqMsLR3LDmtpPi4MuG2Kv4hivMi6rPrvxcuBr",
  "key12": "3bepNNZj2vHeXkPbpUMvehGCj2rVRG3uVfofZUQymh8uBQ8hqtnZnjxRmWzn15nDTdkHquhjB9PfcaFGY8hqMaw2",
  "key13": "59KR7sb3ESghLqhsYeExCh7YDpvMsCGeTpP9dU8CyUWH833QXj7Sn9iBVU145RJM8t7s8Gj8HnpVnaiym3YCcrEp",
  "key14": "5d5Z2L1FtnEQYamQW8qF87soHd3jg7A3C82GUiA5Vv3qEuK4NjFqgc2YxP56wULKa4mn9tNmKrvFPwEyXaFcVtxR",
  "key15": "4FThkt8rNDjn5e9P2mMkdVaYm9Gep58SS2BZGAp5rEYPFfa4UHgttbs4LRsp2NeciFbemZqT3eq4jqk9fCBuPy1k",
  "key16": "5aTBenhgzVVsizGnTDj7cb6C3dcLJFYCuLrtfxQLXrpeW2uts8gqyCqhAKuNZsMVSqsMzYQeWE7hk6S7K1trj7LS",
  "key17": "3m22HR6iwgpE7zuM8CkyZ6LxS2vHKyfqQy1YKT8JBuT1njL3QQu5RYQ6qsWttjikHVZJ5mrALjL1retFEppdmcVY",
  "key18": "4AR9CFpzfUwE9NSgkoNkPxkiHDnrVXamH1zW2WiuJ2qtzRwHZGTJ3ZCWTz78dYknE6ofBPDo8HyQNnBysfHwXoun",
  "key19": "3hUwG5dGH6FRxNHUwbhcKfumTiUgLP5e34fCwQfDK4SoxdtCh72PvGareVXYnfGtvPvwBcV8wvxgTKrfqTBNkJ4E",
  "key20": "4JWe5sc5cYCfcozMnyMAiZbYFT8jxFS3EpYuhqyR13Gbeo5mBBspUWiEw9TYD2yuTFRs32H4cyRjTT8NaXDEZtVs",
  "key21": "KPVAJbgczUi1aT22z55D3URyaqKGxsyYs938Lq6jjoKDDx6Y2fpApjo5XQTuUR33BRJiNndaw1ikB8Ce8Xm9ASb",
  "key22": "56w18nayjUSEQoT7wiBvjYdBzJd63RhhcaTF1L3tJouNewVfhXwxYnxL4yej1DBaj1i3TQJQKcHV7WVuXyjmDhhs",
  "key23": "4j92ojo2YaeTRKvhJo9GwCybsJkBPtyV17WXtzuqPkxcScYs79sFzns2VCKSzeEjdrnU3GuoaqFJweZoU31soPZ7",
  "key24": "27wgYAvknBjgt3CpLVhQdDzq6UAFnKiTe4AV5UsUVqBbN1NnsmXThbN5yMngc6Ht9TRV9SKtqHsVYCzFj8spRwAf",
  "key25": "LCsvhqnAVWcXt1sNnfaH4paGgHpnBZhksoHwRvGgWuwFHTwBWWWphZAPyE5bFbF53jtdc7rkyHatSgr1xho5tf6",
  "key26": "4E3aCuBxKcSqhE35uDf5jg7zAwmsG77oet3dDNjXxLf6CZTi2yeJva7RcyHg6wbycAeAHo6YZwrRyBGh1sKgEsFg",
  "key27": "3H9Bojw92k9Exg33ZhQ7kEuHkQjnuCHsx4ngc2asRcvCVeHEEmNfVy1Cy6jgZ5bzTuhx9MQBWFhdXPPsF7aYyXKY",
  "key28": "XW4AiFpp31T8wCJAYDyVLJBvbvJMDB8em6NF8yy8Bdmf7Vm7yQdaXBbmbS9Tz8hd6YinMB4oKmy51K4pzAJH6uA",
  "key29": "Wzfzge43nkUXBi6WBbqvazjoeDTSsV4Wo5DZwdh2Skp24tsmgYAwtw1wTcByJqaXzZZEvTARa7221NJJcEXfsnG",
  "key30": "4LX1wFVSE2mMRCwvMU5FQ47rb2YSTU91SRCQchmnwDmgvmZap9bbB54GuJhUDrUBbKj9xiRtxwzyk3CiwqrwUTv4",
  "key31": "3CaDgTrMABeWiRWBd1qHQsahJ1bfHWGhg3JozoMUMsfYH15UKUEwGepyzotA9K6ujuHn7pTUZAiYdjU4MTTotfxB",
  "key32": "2dq3hzs8Pgc58qfoRMcjyzfHTSTQqMrvWFtANDcNayzaA2YMrFxwQP6kCNBFe78uEw4v3BVMLsmGbGqChwU7HwDn",
  "key33": "4gEFG2K5kd1ZKgRRwXtaySh9HmwJd7Uw2jDC8xxwHq8MjU8ckb6UwveBT2MXdzEeCgCX9uu2s4Gfa1ESxT9EfYrn",
  "key34": "4S7NXDZa23bTw3xCztiTbCmjKZerv94A5HrtdCvbyH54xqA4tKzc5KdqTQFGEhHeHU6aa4puCppWRD87atLdFryM",
  "key35": "2twMJeqq2w6NeCYeKgQduvvYtdDwnatQWuxVQu4pLaLHsGbfvKPsofdR8zmqPJnA7PSNPg1apgqVPmhhKtjML1pJ",
  "key36": "528wgSxtytQa3niCuZwwzxiQbJka9xkF3189BEyTi4Xat9Gap6NQ77NisC6E8TxNrEzK6nA4ScPifoeDF738w9R"
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
