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
    "Xygi7UTK2mHEZca1eKW6xNSGMvwtQnA1xZ29foUyXSqW42J2FfZAuimznZw1143kSkRWg4wQm5maAQz4PmnBB2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43HhnbnEPjeip3u758vQRvThByLeCv7grDaTAdqKRXy5GKent97rfxo6wriWHDGjpKbZDouzAaL4FPgGeK3Ffu32",
  "key1": "3KVpxdBneUJ5iNbViebSiGTxYV8SgYg9JBH5jzMp7oTxK3hLtJcgM51o2vDk6iZiVdBqQ6J4jspJAdeZd2kqiodw",
  "key2": "5X7Sr8hR8zCDFAQyLxuRJGUwZ4fXnyrmMuYpgjqvtEHMF8EjfcEpFEwWH51Dzkdp6yesa4YNfMq3KcJAen6TaEgC",
  "key3": "4DVbQcdA6bHzTH35VCcQeWP5qUD9nT2PWppuDZp2yR81fah8tZMhjrEdZDvPZVjwAn7zySJHfZbusvkk9H5GcgMM",
  "key4": "wZKTkF3NngSWnR4BVrbEEYgnDuHe7NRaC7FyUEWWgakcyKGU7Ev7XBnFJ3Y79EDLrTVhxUf7Vay966371zjXpza",
  "key5": "33pHJpawVMGEGcyq5zHd7h1jtVcm22FvYScWTH8XaKnvLff7ZsieBuLKtuKnWXyirAaCxAe7EXdVH5t4T72r5yaj",
  "key6": "49M3zPfKhfFfzQt9vfWFAKZFfErUbK4N2ymqSsQbWwF9myUqunoZGdZfhkM6pVpRZTjR88nVip57efxKLfhFU9G",
  "key7": "47xSCHJdA6gX4DRMraopd9JFunLVpSGV55pdHVCxBKCLPsbZZNrXDZjBktHcs7W5MciJZxcmVMX4ebjHLBmVMSZK",
  "key8": "4zVn4MFnxPXGSQJriuBuVE38ZM6jyfK44gAokREh525Li2tWGrk2XX25rYXWaaw7zA5FernWHw8gwd9W4VttDtva",
  "key9": "31Ft2GseJqg9XvPA68EdaC5ehChgPaw6ViUT8R6fe1iVhYamZooF7DwbQAdrrCPybMedCHWi5jnf6D6bjRCDaS35",
  "key10": "376ub63qYPPQiw3zpXUyqzd9yvsk9QLj4EnjpeG8JTaVSTJxxW6LmYJsszWDrnjzWeEJ6fMJWFRiW966YUqFCqfz",
  "key11": "C2fidWuZ35j7YWVBZiAVLxr3iaVdYazg2a7giuofz7bHPNrkVRaFiiYSMkGGiXQTLA46LTSUNPxYSj5YScbK2kb",
  "key12": "spGhGYnNVTPsKppg2Qxctyjstui7i4gAh8VhNGkkhKYXDh8Ankomj9jYq7An8vijXD5AMvQ3TDQiXRafeM7RhXU",
  "key13": "31MsroorKjgrNziMhFbUHz7XkP11iyA3Wfgax8TYj1SnGRLGYg9FdtiiBZ4xVLNrZGoQgGc3ngHukYZtuGXbDQUT",
  "key14": "3V6oqox3Y5oLYALQ7yYCCwmFjKvzEaNQkyRRrf4HevvRExGejAaZ7v6HYogVzxHsUJHLgJirpJnezjS2JqHtKMfX",
  "key15": "2eXrDXwirShoP5NcgbMZXJaNQS72kHaWH6G6yyeKH2ytdx2aywQXQC5sbikTt4c3WtcRiF6z1rrEh7xEAAkbinmo",
  "key16": "4RbXemJ8d3sHrkiTum9WLMUuJenCjWhkj7nF3CwSHgPdNJeVChmsySpXjZn8KNsTGpMGJKin1K4Hd1xZBdQ42mHx",
  "key17": "dC18TQWU2QLE1V4qNHJQjh1YUAm7STv2GaiU6Cu3PXQJ3hMyMoRbqrUCQcxF4c6jHMkW8G49t4U62s4wMRd23w1",
  "key18": "61kFXnnKH7zd71J5MSopNCPJCWpMjEwTHJTJd6hrqGfn6iGPVKwXhQETC65HyknCZMofuiLgKYbo7pXPZDkDQx1a",
  "key19": "x31Z5R9JJwWEoNgstrDfBuwQKjkQ8j5pwsq1zbL5sy1wskgDiHTn1z7nrmMuuj3KqUku9BtF8L3iFrGAoLBGMsf",
  "key20": "H6hiBZmXBsj1Ty8rWRzxsMxomW6tZPv1TkrWAooasshtSk1kEx6Ef1JkWQsBwfKztbQVTtWeEQB1rL75hyqx8LY",
  "key21": "2WQZqwq7MBSF9YpnSPWycFUYvu433Z8jHnBQzBxjQgMqhp3gskSc9HsKqfNBJxobK2roVdnDsH3T3CyKdxGJYYSe",
  "key22": "37M5GXe7L5fCnifFRL8TZk2MEGPujETG2Y1rV9KwdEhdjXqGUYTmepLQ9bLnA3eqXBGbx8oKSpDDmZRZWtaNfXDu",
  "key23": "oP4Ke9j7TiKB9HzpzvBMJTHMhqzDCiWbzkCQj9wzCVwdK7W64imdCfHXeJnaT7rHNXxMQBnQU4FWobgu9iHuFV8",
  "key24": "3rVRErGN3PXmDNMV7GDL1SkGUWgZ8u1vpNaNjmzopJsKf6aKbFSvUk4A7K9YBWWy1X7yNcrqMsKgWTNU3EyZESnD",
  "key25": "5RDdCypZ21pZ42MEdKQ8oX4FsvUqRTgzoaGSH4aSS8WNLuFdG4eGyxmefvkXS1Xt8K1yLXfr478zXM6KDsPus57A",
  "key26": "7bxJhXk5GW1aDCjWvmqBxT28RK9dvc229AA1nf7dAYV71PG6JdWbtkhsToEvBoL1TwevEHWN3ezSVdrdhRPZJri",
  "key27": "5Vfx95gjcbToXh57RP8sr69cnc9mPCdekiGAzYGALWBqBnnJDF9sFBhsh4pzitGgKTh346DqhBLURqfFxxe9HH98",
  "key28": "3xmAyRL1e2EUiw3j5wUYiYuV5XKiAsD38hVmgMQeVfoF319TNJiip6y3f9g9B7QTBsFCYaqTBw7QvmG6VATsJpsH",
  "key29": "2LPJyJsfs59gzAGJMhV1QKua9Quwu2uY59TrVNymMBcXnSFBqdFLg3iAp2HpTcK7zAScyFFKsbmpGSNas1LbDM7K",
  "key30": "3unfmCZie8H2GKVFQKN6mJWLbrehvAJXknhA5YEYUCQNPyCXnJz9KHLY3T98zNM5FvPx9Zj1qAwWZ5HJKeaAkeWz",
  "key31": "xm3RYRDb2A2Dw7iRQtxeRDcDPoGrRbfrZEmHV1APr515CztzzxW6bk8WPxZQ6g7RH9MzX6kFvq9eRqhEt8zxd61",
  "key32": "o7ZvNWxdEeuGRo7F7NC9gDsDmtioy3tbYxXwCW2x1jUefn7rzs1pvykkqJT721YxoBsEEXBxs29WxCnjDP1bb8C",
  "key33": "2Y1raUK6gruQ8n4Fff1uxWHqRzAJJCH6UeqPdEpXwqsmE9iCAmYNgQELcUDhi43zorttKfYhP9QpTxU4XfbSLmJF",
  "key34": "4oCyzoa3wepK68U4Zie66TAfrAUaEAgFKYs8aTh1cvvn6ofXKWuzaHUDCAv3KJJAPFXVEgPM3o5wdawtzmLMH7Lg",
  "key35": "YgziNAGze6NcnW1RSi8HLPRyMcaXNjoqkTM5anBjp9iJFk9QuUP3bSmgDx1c4JvQov2Xgqf27oTWq1KFtArWFAQ",
  "key36": "nw2WfgrV6WJYLP7vk67eP4sHV9qZNgnnyRzWWRVEh1LmsRGT6XkW6PiR3qqyEefHAZLQa1j3Vas6sAiD1sxsygr",
  "key37": "tmQRwGYBqisopXQFv4w3SnBTFA5eGkuXTEn8JX563VNRMEaJGh81tiiLAhKp3b4GopMBdBYm2MkR4wwaBYtQdWu",
  "key38": "2VGbrFof8XM1h9c24KjoerkuV8BarZJGQsgt7JwiJWN6cdgxWCXsNE6eK4Wf1Edtucc9NRz7R7GMExH1w2ChiEqD",
  "key39": "3XGpCA17ELqtWg3QVEDmdzjqJTHfMSKZBpDhJTVhBYUBrrh8CQCbqj9prQNtdUQtA7ZWQn25SfxLjLoiiPztUYpJ",
  "key40": "4jnf5cPPLNqYzB23JA7swxzYABsqE3zMyyuPwtYxa61CZFRzb9G7894L1FUL1tsWhPwsru2aZkQj4CpHTR9gcTkc",
  "key41": "5F2RzL59qyfNSsmfhTCUhgjf8EHW6rDuyQdCxKxeQuaJw6ZejSPCjMjkKA8tQdRzoyJzh5xoMbZNTcGyVAoEiC9S",
  "key42": "4T34JVMXwzrNoh1XqtVKd3tnwn8nWSBN2HcCrZJ1JUQ1VQzBYhUtjACmq6dqW4GejoX33DJwjShwMMX4FF2utot2",
  "key43": "yvskocNHwvc3WJKkFdVGoZMESejN2N8c7mupgrAnESXk3woZm9cmGuvkHjscgiJfPzzBQTF8gmpF2KwXqizR27G",
  "key44": "HAXfFEbDCaRNQYBWqyuivSS7gFaM8hNuzTUw7WgiQWTNgK4AN5FcCszMDDMdeksmV4FQqFxrqhkLDuYw843joWF",
  "key45": "4LXaDBay8K9bFBebsoqdtpHGjB9HeF6RMwFf8w43naDX3Xj1pUw8PTujB9zzhtHoqcEnde2KDeCyGu76FXdw2Wie",
  "key46": "4FUZHpQbMXxah3Ds9ETy7EpHDYb32vCs16nUfaGJJjs7pNnEu7CCRT4k7E3zNTikx4psqpEJEcf5s1GGHuCnh41f",
  "key47": "5TN75waZKmvaWermm6bCQ6hGhjQTzjzZdBnjvnZbFJh7rFB2P8s9w5bKv3z1zFLJiACt9mPYoKFLpXZGZwUiEoFh",
  "key48": "224ByT9kgk3XfHqMJaRFjRNDxnWkMf8sakq8GJUG7vKeMUPYxN5qvnWmZSq6FTHeUw11mT4NeeMcpPrvgzsPTRWa",
  "key49": "2X4H6AZ7ybbxtPDhmmR8nsPdkjfNPEgQp8HxQUuHrvFq2hnMWLwd4RTwXLM9M3K6JtFCqaULPmT5fseTPraBe6cM"
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
