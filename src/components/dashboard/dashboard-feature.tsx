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
    "2PRXQ3DsHDvVYwmWvntP3TbxV6drRQn4Q25D9Wzf123Zb6HyeD1E2wbGvRakFB3cYQ9o6YKELXECn7CdMjY1REpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mYngTaL2oHVetUuyCJqZA4emGCmAjgB82oJje4oLBHYNCYqzuneX8yGJDMQvAzFCxwjc6ncjhv9kWh9nvMQ8JCT",
  "key1": "41zEJ8M4hnqwK1cSoiABwgSn4MrxUHt33ex12MTbKoEJBekFAiaUJ1BK2SHY56LKbvgTz3wRiJpxA7mTmz5LsfvL",
  "key2": "4rZrTvhY6ZnPyn7v6hW1d8FZ3GCPVQYt61GvzMY5rdnQdH2mrxJga4TQWDsXfxUTF7P4uzqUnRhBTuvMJY5MW86R",
  "key3": "2mVhvGi3TMyVUkRBbri72tYh61QK3RYL9LVMEfMp3tDZ1djxewerMXHodWK1AzNtyh5uM3PLyshdZmStLtygfeg",
  "key4": "32ag1J8XUvzjePq852wGeSu8wVcCBpDhraR6Rpp2iRJkBcGrTzJkJ6Zt1fAnymWjSMjUfhoacNrm6W1mKQwqoLmy",
  "key5": "2C4Vaq8Jhi4hXszCRK5XX5rwA8oJ6uWQ8gEZAahf3CocYkowsvujNUa8jNW6DremcRFSCmihacnCkbW81UmCs3LV",
  "key6": "5eNojJZU6juMCfQt1ofZfgvt27CF3LLGX9Pm7fCwojmyxkQY2K3x1L6onZSDa3iyh3RfrVgsPfcx7u9Au9joJCdz",
  "key7": "5vXzJ8NU9t8mic4xgKNGukFmqep74NdSQ6R14ontz94N4cZdWgwuY6X8G7Nej7DHjKHZdQn5ffEJWme7jwR1ZeiB",
  "key8": "3zHMqED5CLL5WYqV3mtYyr89rVi8PASjiZmJPw5gknMsArV1b4USWDsVKwhJ2ntNLbXYeU5QBUxkwHE2c2MdYSKS",
  "key9": "3Xiktfg2hQKZnkf5u7f96dB7rDxQMBCeYu16X9MwuHTTMv3bLjwxPbiYgFdYm9SFXPWDQHpQNqYfsNy6Ue5biED4",
  "key10": "2eK6J76fsYmaAHdrEsCUdb5wvLx1U2RB47yF2xiY2BfmPRLnmssqF4qwmfbtHyj2DkvYPuB79z8BCU9WBb26rR7m",
  "key11": "5nN7wVnaWzvNbay17KdyBZWzRkg2HCyFmM5Npxax6vD2R71cqWy1fboUpYZt1xRLG4YiTMdSvJwvvLUdBzfgyqE6",
  "key12": "3vb8X6GPSC9Pd5s8LC34ocGGUmzGzki8crh9EJvzcbkZCu3WgEqgWJkPUmJT2widivdqLuYNhoPBXpLAQtgicw7e",
  "key13": "xTCivw98Nn4bm8kv6ppxbzPp8eWCXkKwzaCyDPMaMkapfJN1GPVjfkfvLw6Q3LZuw3uQLJcwfMQq4WMJFFZGbun",
  "key14": "5ktX4mMzz98xWMBMEPXH6t81XS62RpX5UmNQyL6p9jRuVbZmoCvFokG59iiJYjPcY4X51gNU3qp3MWW4Wbj25FfR",
  "key15": "59UdX2pZAF1qeBwvrPvSeJLLTvedUWysTqkYqXN6ssKDrDHVAMb8MRe9jU6THxpjuLHCSW55q6Z3oiLmu8SQqGiK",
  "key16": "4gEPhbANM7RfpnMawf141B7BbUj2YSjMPpDxTjTiEjSVKiQtxbttCmLYP3AT2LmQppdikBU1r4QwjNpwB5iRepwY",
  "key17": "38gzwNDySCSgEViw76oRxfEruJNit3t69MRkZu2ip6osLWxSrfqCzE72XaH8XewYBbBfqgG1cFVksVuzH6P7vdXy",
  "key18": "dXD19rYgVi1dsg6fy2F6CLs8Rd2Rdp4iQxL88jNwYt6qSEzXUxyfpJD4kxQnJAimCUp6vU5DUg2fWaxHDfWzv81",
  "key19": "4ZcWaMQzP4MkXUHFvK9qC5xaQ649fKd2L3F9CkLxLVySVbe4vGYmgXbWQDWfXxMX3i8tHcADn89LSyFhva2xjp7n",
  "key20": "5T3pJFsbeD7cCzEuBnAPoYERa3PdvqGf1NVh5gAkp73zvVtDSoSD94sebPwD4eWJ8BvoapP2yMZjGw52NnHtf2A3",
  "key21": "yRETRs3By8XYreCVDsCL1mJnxqGYcsaQ7gHGWo6NJf9yH9Q1B7WcpoS42nJmEFPSXz4SdwekSZUBCChy7jXMR56",
  "key22": "3YF9FQd3A5FtFtgqUW7MXtqK3Xe1DtoUtF7zHYREdhqJQZHgTyWoSgJJeXcaAZ8aGmUbaJvaRjRuwBkQ6Uu27Fb9",
  "key23": "5aMv4dVoPNZ611rEbVdZCnfeLco6oHd4Rv1CoDsZ7bEtAiEhDf1NcS81VvRziCauhGExL8fdT1T6w4ooqcdnb3F4",
  "key24": "5bNM5QgxXbZujp1yiDhhhHDiAXgmRVN2GBZcpfz9K4hT3SXpRsaPjU5vddRZaaQDgvjW9ZyaPrQ1KD5ht1UuTuee",
  "key25": "4kpmoWiUTN9RVF7RknVEVu761i7NFu4ZigtvqinriXwQ3ueQF36HpEhSFchaAwDS8km7ttWQkeUAAujMnU2uQqtL",
  "key26": "UxRJDPFmVtKpSD6VMJTYGmahQj2NuKeKqrqPiRBvF6QwdC5TWveh1uzY16igDshKeX1vKBH6kByZ5xyCSnV79C9",
  "key27": "5bw8epopkuR3e3VcMaQFkvaCvZ9WXmCrkbBfEMrBRZGWLV9yPhJSA2mmYQDRjn1pDumdNLx3MALHWZvsap5Bc8dJ",
  "key28": "6e5VjFWscq6aJRzQXoxWSyb5ikZojCFbZpUtFuVGkXLdb1SrbSWArEWbVEaQsSHKAXt2u6ALPxSrTTPjApuGwge",
  "key29": "23vbC347JYwFdBAP9eZzjsotDN7Q5nSoQNm398p5RXhyCYwpmYW3TzkLTsWAPdWKyzFveaCtaL3CjCkk7ZeQ8PVK",
  "key30": "23zaaQv4FbWUMePSGzyPiXpU82wDNpqTSrDhNyGUDjE9d8fjh8Pv8189RBMHKKLbWJm7QkgU9UmftotiJzYdsErv",
  "key31": "2T9HkmcZQB26Grzv6vQcwrXZLc6MKzTKWNAcKJs6Bb6tV5WJ5257JbeswkwaUDatGZaX2SLtVmRiEQA25F8mKQi",
  "key32": "2fFsSg2NbGkedY9d7PVr8Z4zx8dvPKuz8c4nNeBR9xzr2Jde2x7C42EAb4NFy2WCdyjV7RHNaoTzwwFp1fkwmARw",
  "key33": "5g2mepqakER2GhU5n5cBn6zhpdNN8NrrjQyX2BrHX6YeBLRfvCykJC9earcLhxjwJgQLQ5j6xigv76S5FxRRrCuC",
  "key34": "3jotarY6qWnhXASb2kNnA4YvENrzYdWABiZE6vkpN5ENqV2fc7q535baCa9cNWYKgTni66zHkU19gSoNh9zw1tEZ",
  "key35": "3iyeMN5uYoNAvtjDgot6jEgTBAtTrGJBQMoNNoD9oTU2KmSizH2KAkTrRLvESncesA1mNdEQyLfNijDyrYB3RTDJ",
  "key36": "5JN7oCuuRrGYXBJUYrf1tnUAKTqoVBfTE8U6T8XCdyGXXYPzx7NZ7AQXZWfD3isqxCmPTrqekfnFxELms9pPdH8v",
  "key37": "4v7rVKzKZjLwrjD71ysAATSo63ds43RaM7CGxwrtT7XQrp9R7RZmHQeGogJFzPE3VjjhEt4aW9KrGH4YwK2hZHPo",
  "key38": "4MwDYpT5nkhNem5CinMpGNixT5Z1C9RYS9XDnA9eExtyPQ5yAm7giKED3LH4kh8hMuGVKhuyQRCQQht8jFBtinWj",
  "key39": "5Lp5tu6KfH3ngD6ptQiEq1GwgTwVRKcdNKvHgCdKGdtL17sEXw6gGc3mHoAcaam7yHskGzzYUrxHZvZ2TwaeXhad",
  "key40": "A33EcMK3sWsbaULV4ew9ad4vCC6F61FtbQPPxXvmnaPL7VZMUDGfdqSPjymXYZhspa2LK6yxvPwDTTe3uhdh5WE",
  "key41": "P2f3CAQd5ErUbNff9R6ANRcAfgqsYYJsvazVGifRyeUycphRbYmZiKjhcTG62vLUsiVxv2bGtNbrF7iDf8aEdBr"
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
