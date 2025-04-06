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
    "57ZmVfnHoytzwn3U9utPvcJzmRDBRnUEoAMXhzyvMdpok5gG3R6EZ2UWop2FPjogPFMYD4TsnarBRktpwV5rfpep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KruU3GfUayZHRu2yY5qXE2LZASFFm8EDtFPKEtSHzDjiY9TVpaSKEmCTaRpQbbHTxcZ25scLevBkYaqPPoTz5Ts",
  "key1": "g9Y7NbyzQ9jPjUQTAsrqyHvBB8ezZdEJwp6g4XFsmU7WvrsCwiwAp85Lee4qzYw5WLFtvBCTzNjiqE5TmWAZtq6",
  "key2": "4JDBfir7wFsrkWRZqyte4xN3trJSjVJTx5zPL2uvAYT958oQq4CyF5sjWXyFGsWp2ncb66fGVXo9Nr5WHioYr3JL",
  "key3": "5zo2vaSUr2kahMsNvr8iLrNQD76MBsp9h7JXhWkhkmUn5keiz3yToUX3nzYJ8BbzbS956FLQ5jEECRBiBbMje7CS",
  "key4": "2ong2gbP3m7k5F7zVzXUNv9h3sybiMbzW8sxef78Z8NH4ijbAP4ZYDg1vGoPbRJUTGM1cMBrs7Nc3AFer9pUeRCs",
  "key5": "3XrGh38hhG1mk1Dws5UMz91zvgQ9JrRkpZiXRvV3wiCubaX5sj1Sn8u7sNcsTpCLVpLshoSx3oqq2FC9xAvGCD7N",
  "key6": "3fwpDKsyvEyrrLPKQAFpHh278Hxpz6qbyANzaQKBSR81aqffdEJWwEcdwvWcMVvur8WBDoxXe5RYtg1UwdrfbxAF",
  "key7": "2cvAM2oPngApsdN7rh2nzvMEUQEJNQendoG6fshX1bV7hgsZVQj5Ber9syN4RYPd4w8uQn8MeojNHXPr9z8SsNbs",
  "key8": "5kp1V842nZEKJe8iymyLZarn9kWM8e9nwYWA8zbBT3G5VM7LabMvv4swChmVJ4kFGdiK7sRSXBievDKCKBtxL9Xd",
  "key9": "hay8nPteJU8YXxmMx4qRyHKeuUmvPLjPWjYJTikxKHFYUPhttKzH2vtxdV3BwDRzqEcJBcTLHHSHiqqKjhB5opG",
  "key10": "2DhTkX3NhT7Rc1Mr4rTbSZWvtMW7vnBqes56ikfHQCzi42viJcLxCMjz2Rj4MCzs6QkZU1Tw9otc5NDxCBEn5Y6o",
  "key11": "UFyVaXfoMvNJib1a3K7UnD7ziuBfLig8hhhHobEJiZ6EPjCWLMv3xKMbXfXVCaJtM9L92xpwJdDuZ4nVbpVgeoE",
  "key12": "4ZFXJxcKaoSZ1cerRz9kPo76UmMyYoS6eAvQnKyxUSQSBjyKza4jJCPX2qGcQdzApGH2L7cZbu9Pi2F6Ma9LuHFY",
  "key13": "67paVV6TCHkUme5AU8SfJVeS8Grr7KPoRoDo5eic52rNYF7GgXuAwn18UVPgS2oe53m1icy7myNqZJhTCn6eJYbG",
  "key14": "2uLM1LQ4r391SJdPtgQ3r7Rg2CLy8kDY6bSwwjZh8B7Gtp367W2MfkkhKFmApEc3xwH6E88qD1vaQZgPuf7YvmTV",
  "key15": "r2ubpzgrmiQ3BNgxHMtFbcMHkMcriiZR9Khv8UV1Zgz1rYUBRpxBJMuB2i3VPmt381yTJ7ypzP5Be2234XUzvHr",
  "key16": "3LRC23Aq5RZYTrLYWFWr3pH5X5vzTEaPHWrHheLRCV2sVr3Q5Q52ptk2AhbfqZF8KVhRPStQFHSsFXr6orXHp5Mj",
  "key17": "5ab6CBxG6BmTKn3ovmAoJYjK3NSPEfT16AzLhGmBiZJyNpT1CKs16RCWsezQCuM4dYjTeYFuYecsnrH47urQUd7k",
  "key18": "5F9mtXjVhf8Rg7Fx1bKAomNrt4hBDFeY5gJxrDMiXseu9iBCijfEbZxaZZdgv5GzujVtBPH4R7FSyuWyPZ9PWwBo",
  "key19": "5JRpCxguR6wXMVw6D87ERhHFxDqEPLmmniZGH4oXLKavqZsUyxiNaQhufMzVCfCVqmjDiq2KDy7ygug5wfnCtUAW",
  "key20": "3p1BMXLYbqqyeJEFSsChtg2WWxDuHgxonMMzDeQ7x9urpaaYcHEYhXyezkcvJv76Mx7rMRgeGsu1F6Y5pSQWzea3",
  "key21": "TpULTCZNvwv5HR4w3z6nmEWfT9ZyyQ3wotfDKkRYbKsbscLHk2M4EtXWtgnyfjig8AFZwWkTV8whsQsWfCvGEw7",
  "key22": "4LPwvn5kqVgzXhAUUMhbUzuysx88GXn8GP9DQDtKFhkELPcycuEc5M17c3XkRrQhTP2AJjkC8TdC5yVr14x21jq6",
  "key23": "TWoMEHkHQsCvTK8zBSyos6AavgfXQHzCY3VpMqJYSSXNjc9bdryzm3H8kaPtpPgiAAFUs34kQeZ9qo6YtoYj4wz",
  "key24": "4kvE94TJLYQuUy54fi6UGjA52WjgGN7oJHe5LmLVjK8zrB3een5z2EX4zy1HwtmQ4LjrGMY96rGmDhumkbyeGYbp",
  "key25": "3t7AoqiiwyFiUQpTpxeveEGaveCJC2M8rDkE4xZU72hHBuoS78a7s5NshdUcu3t6J25QM4FQFuJff6rFvbQMWQPb",
  "key26": "5qeungsswtMmz34vm9feNR2gbfdrUc8Df7PaGaG3nxoEtNwBCGjUb7rySjqgvDqHt8jHwg2UezsQaYmFtCrt6nVm",
  "key27": "35yRQhbs2edJEJMErvk9VAd7nkDe9sxx3N9uRVfBo9wPMABm4qqJyJwUb89YgmzEtWv21Auy8JQuuFLTet61WsDA",
  "key28": "3nNUd9TxCokh3tGXMJSKznMXVsLRbPNUUgXgznCEa9bAgYJrDawnLNFHXZqp2ZYBaUxXRKH7Vt8onQnbHF1X3kiU",
  "key29": "2cNog8V2ThbAWmGfzfkw8dfvNFbccjiS6pA3qcgGJq6dAi9gd44dVf7tbxfs1U7T83FKcCpqE9QqBDZCEd11L4XW",
  "key30": "2MYVaFvWBWdPLwfQ1wVnNTveya29gtp9JLvfNZgWtCPNcbVsmUttmAyizsYCrftkLREEtwPaf67KHp9KuqPKzkWA",
  "key31": "2Hg6j9MfzcsU12RwTVqBgRHbQuPWa7kn3S8rzPPnvyG4c7TRz7s28x1JJnLGgHhLCxBEMwiFSRjrRCj6pks26Cjk",
  "key32": "5VhPrHxcbaWXMy786DpBRttXqR8qvxHsbfWePjSksBAfmYxCLf1xd3R7MPPRzEBxkyhrHei7xSSSYWviTRvaBJvt",
  "key33": "2ZVHYeXgywpW2hTZNiwmkJdHoXfBASxuDUAZsp6e9FCS23aqj1ZeEKUxqFWxab4zKpSKHcb6xjYX5TKQZWnECMAX",
  "key34": "5jqL9Tkz4DJWd1dHYpmQL7387iku4dTNrcP7XQZFtG99qRiH2wq6Rvc4c2aP4YjKFUDKbDrbMXuWCEGFB7FEgW2N",
  "key35": "2JwBdafqpPso2JFHVonUaw7ZiLxtubpEY85wgY2Atz9K3FZk6a17VFp9NQZ3QJWDXnk9MMDttBuCspDa13bb2iRc",
  "key36": "3muAkpT1zVd15i3WsmDZbxUbrER5gV2z7d7Ktg7e7xedyhkGQBkGUnVCJCEf1ZtiNWFx57NprXg6SuhrciMMALGb",
  "key37": "4LhPCzzGTk6tcpyyeyB6KU3oQsdBv1LeFtcAtLUDMctXZbUcbDg1Q7CdpECdqDXYUuJ6N6of7nE2KvRDzjAcAXz9",
  "key38": "2TALMnYcdNs2VTbyHALCHFV5jjpToc18RhnQBETmjhYD1gHstxV7eMAt3zgZfzN7PXSv9bK3LoVARjYcRdJsFdZj",
  "key39": "129EmdtXNtd8kko8aT8S5sir2a5wcPY2eUg9eVqdHfaUmZQYLCCB7WFL2MYkeBJz8NHpR6jdWEPsWiuBc1JJgyQB",
  "key40": "5S6TFQSST1qcjpoiYQX2pQFZiWkpx8TWWU3Qo8VUxKy3cBG5w1bK4iiJbzGqsu9i3T5L8ywJfNhtiUidErUEv3Vw",
  "key41": "JRYdXTnuSAK6WjzfF6aPLTgdKrs1nPdaN34LwT4LQ3xcoDRCzfjFa7rCSYpqE8kTn8u2fGSAB25stFqs99fqA2L",
  "key42": "5DSRPVoh3YHQ6z5X9JqG1QVFNmDWjAhNHxq7QgXKM4PCcgfVvVNvdFush7BLmaZDnFp437PeiHn38eoTzVqWhWFu",
  "key43": "2PC52w6bYfYkzxBq1vsoq5d8FtrRPPnC8utuwbdzfYiQT3dQL1tL9n81dD7UK9CbtZKnYytHAu5Tbq9zaWuyio4N"
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
