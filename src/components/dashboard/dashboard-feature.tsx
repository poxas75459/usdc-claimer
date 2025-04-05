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
    "2kMyKC9e4BwBKCMZryJze44rcptVSPXfXbsJwMy2VpdbYBJPJZn66eQDRn5bwGwmpePhFLzzYrmUi1RVwbwsqmFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwJ4CZJnRRASZAgyTsbmMQJFKM1HdV7voQb5zSMMT6LNVWB8FKSHSkGDXfxKV6F7Fh5hecE5tTYEuubZ4AwqPoy",
  "key1": "d7wwDesctEcgpdMCAmiPoKo3R3Q17xxfkmuyqSPf54vsTgDxVaJXZ4wZiqcxP7SMvyYrefR8paaXsJPDo7pS6jm",
  "key2": "2dSYuGheKEPwytNjhpm8fAHUJkFC5p4fngZtbdWtbYv942NmsSjnHJ6bpn9hyfeNf28ePmgaCp5kP8hYaqKNKFm5",
  "key3": "56wEs7pGmQizugN84ccpU5bkJNu7VrueSg1r263t4cVLQgk42YY3M1dqnf8k8em7UQR2kVsiYTL5ueZXqERPcMbQ",
  "key4": "4Mz8a26CXfHeb4dC2pa2CUazVV39TQZxG3Nzv6Kpw7jiuntzgXRyw71SztEmvPESqmc6vkKhM9LrdDYimjpY1YdZ",
  "key5": "4vAhzevK2nTPCyzpbkizxALHQamGu7aeiz8oMyrheZCqyNSuRdHyFra1KSBwaVPRWv4ck1Up4omFHDNqZEQzvcdS",
  "key6": "8Fxe3zkbMrX6Nsdab5doYJDoznWXgNAnDoKmSLGkJhb1GbSYeBtde2zsbPDvciH9yHv4B26ox5Gb8XZvRTAQqbq",
  "key7": "2ebGZEcpo2NibB8aTd9t9XuYwszjHBFETcyJfZrkBALstPJzQsB9ZXmNrszhgeGuN17qtH8HFKpvedqqRtXS8Mb7",
  "key8": "2Zb7LeesJVL5uzUi3dpQ77819BDGEG5JbkoG7TZGFBBHknqT2S6XtP5tXLcpkSWrJwpTdsWvt4mnssgngks6Ha6r",
  "key9": "TP9ppeTeFYFmbnmJdFXkztMsgkW9eywYTTAQn7U682aqGTg13S4cpcc6f72EA5mba8VZ8VwYtTQRakrBpMmssrV",
  "key10": "4tb55Q1GHC6YMSgwCEfRKc1xyKVf1risbRvsmhQgQSFNX6bGq19whfmPFQm47dy8AhCi3xx3J1QbY7RWLMdMmfPr",
  "key11": "3YJykfdiJ47ZupQ2J6D9PzitZdmEuJ6oaXJc9TTgoHP3hutSkp2i2mH5VonD8zLfw8tSqsfRa5VzmsEWMXQZ8mMK",
  "key12": "rL35mSf49Fcund41NaRiofzGB6uyg6WpoC7xFY5Lr785GzEjx7dKPZ4ryP7BhXqE4krQ5PAQMMVEzY1SmJkCkzZ",
  "key13": "34NKzNQR87G1zMKeykrptGosA7TgFXdtW5THFKpht3RiSevzMkLYWbmmG2Ln117aGFRKeurWtsjFViW1T363ez1b",
  "key14": "2VSCdaHDuzN8R2hgdL8zxU7X7xhxYVwz9k4vw6TkagHLTPa1GnhuYEf39bq5VtQ6r22UMSPv7nCk74bUpMi2tUJY",
  "key15": "2MTv6Wxcrn9LXfFxWrkhoiiq4VYYm5xZnDLZpgNjYx1M87bcnUvUXQQ4e8c7fRimTNqm9uEBrHiSccQooKyyC76g",
  "key16": "3q8ruki8QZQRH3sv8VBrUJFbT8pCqVLDh4Ki8dZub7QofSphCi4yTMqN9LFTfb7qPzeE1Vh3xGPeY83yG6NwXvQN",
  "key17": "2SYZWeFZuQTAvEH6L4Ar83jXAuLr6ifWqromf6BeFFcNJGpwai9GrSu5siYy4yF8gh3dY3otBeSZPgwuk2EVGesE",
  "key18": "2XMdbMCpmV5Gz39QBfoVfh799myyzf1RUZC4MXzZhCDRcssS7zzwKaWtERTVk2PbL7izEstwND2ogs14GevJ5Zep",
  "key19": "AzLnvC6LsdUJLwigETTi1nato8mBbW6vpZ2n4L8DWFrmrXvDCNt8xHFEJPZ1nhwqXFjMHEqbRvat79DB8oA3BTF",
  "key20": "56E9z6tKqPjUaHoFHkP9eYqwxY9vWPVWna8SeVjQcH4Q56paZDyc7s6bL7sxd7VADJFg3rXW4G3wjqPLUM1ti19A",
  "key21": "4cHg1C5torDWTkq2jJzgLjrVPwtfDm9UcUNN2JCcWZHuVMVxbo1grJ3F4EmzYmxDGfbsAhjEbbMadrJRKj3b5GTq",
  "key22": "35kvHw7VkEZfqb47j1BWb4Nh42GcJJSx3EB6yTgYCEWLPrm6pXhmcKNxeBt38EhtjKxtwVtGkRDeTuednoN6aHuD",
  "key23": "43wbaQik3jjybLCUKTf1Fc5ap9V2rBeYgUFBLaaet3hdT3CUCg4M8dwcHYVQUmgbyRJx4jzAr3gbeMkiakNgnaty",
  "key24": "cFHgekLhPF5eVNVsCDj22HGh5tJJVq9YgTrvMRuwvfeR2zxhoWnZ1akbMt6TTw6yVuS2jD1s84EEcWgc7U6rk6r",
  "key25": "25otSLGfDTevNhmzEicHyhLoMwq86uKsrGWNLyKU9vzbBtYF4h729wG3vAcQ4oCxioxToBa5eVHZE8t72jpP9Hmg",
  "key26": "3rWpA9dP3SfCwbVHqy4pixceyd2xCgEmdnSKhcg4vBg9X5tFsYUpXhULHN8RNa4PwzKJyhY2AFnFuqiLL2pbKxGH",
  "key27": "2Gtno7Jkjh6fyDwh3t1s9VrynvWqaWHf94gu9zRki6pzV8snA1WGjcA38fdrcgvYFHWtM4f3K3bYLzXnNwzvXKkv",
  "key28": "3XangwXD5ryaTpZYxcvAPGDrynnFVokafQuQV6ZBAtpFeyoPw5ERjmsWRgEeJ7kT9Z8tAEznjyQcJjkUnNso2aHk",
  "key29": "5isxmMYUprWtmVfaYEMeXCHxLDzBySL37RKZEqcVSrqNVDe4CzhCYCJrmEAwGH9DUvZjSuWoaEQBbBSsCSnE4jv1",
  "key30": "2A2ZXvLqfSn5wy3uZeSYcM4NzYMjJaXcQvFeXr1Wf9ZAZbS1x459K9DJr3RGbTPQZmChu7Sxn5tEVRtm5JD1M4H2",
  "key31": "3zhvTzTpkssx2HFfniRy7ps51j2BTp1rkxeMDiWnKhq1EfnqHYs6DNN2mZ2eACWoygAZM7shYJdqSu7suvaVwnJf",
  "key32": "41u8J1Qi3Y1YJfMCEcNhfDHF3ZM1ywmpkuY17BW71demFDq4qBj4BpZCpe4jsNK3qjwS6LjGmVbjB6YokKAnjmBh",
  "key33": "3WbEa72c5UZN6qr3cm7sFAGaaARD7vYUbiNKskyWUfD8FcSY2xgSL6wpsUE34MeGAu9DWWEiEEJbcccQaPiPLnGG",
  "key34": "4D7SqYsvDVj2pCdZAqxdM5VULEEyXxULCbcTVesYYDfVSmY6b4XX3Y9TYrCyUmoyWmdbcTSPRfkEC8ybgGXEiQk8",
  "key35": "2sUbjXrjRvkcTJ4FXeEfavKQBZU3U83pCUpiYmgdGqNHjqeFGhARxSxEj8WpqMqPV2RPUhtCB1D5GTkvYA2k3DCt",
  "key36": "2orHxKVghH5ip128qhjeFffs77WCjEKMijorJKm8m8BoTSPLfQSYUMC5pAW7YK6dbzZocbucMKHC5xEyeVzjEPn1",
  "key37": "4dvWar5ddoUk6JJk87SA1WY5WUFS1rBk6rAoQfuAoxjRezF2vaejxb7vRiHFkU3MdqM6jRsX1LP1fDaAv5Th5gov",
  "key38": "qGh6ioKbomPMfSv6uM3GusBrM1DW6eqsKDuBintsy9xxvR9na3K6ZJeqxPCaB6WuGm54YbngUDB5NpAjH4jVQvh",
  "key39": "4uShjgNC1JQFDPuWsWfW7qgaaLSMogPhBSKiJAsrjzcwwnWgSpY2y7jydXJDDbYLKJaqheGc8jGFbZSMBQrZknrM",
  "key40": "5MEz9jePPYrk9EcikubEwK1jutWC7p8xRvJZW53sm2vmR11iLau8z6edpvA8sCFCJZDWDK5jEs8WrWnv5nzCqwxa",
  "key41": "62tk7mprgHdDT2hDYGshFY989vXK1ANSqq4UmAPRP3ns96NXFTiqzTQttrxVUfjc4KoLQ83xygQxZGjnAG2KGhG9",
  "key42": "3aYtAMJSLkQhPx2tStV1Hygn68YDog33kGv46oYQwXmYFBeHYKYcsQMMGre9nwAkEJnZjBfVWbJyUhbciAm6Aemr",
  "key43": "4zPNfyxrBatbshkWD6Kv3hQcJftcjstKVNMhM2vyDXENjin5DbfTgCfRwwe8R2Q4MfCHGqu3NkMD8TUX8RaYJvg3",
  "key44": "7eTMBaDJtkhvBopKky4wCzsm4JvrQX3mxKEs3MZWp7Ju8oG6LqaCz9bcpGPXo78e8fmvAPcEhT2Q4einH6zpsKM",
  "key45": "3GanAR1VWafDTfhwZbBVjNshbsnZ3Cfn2oMvjX95z5nWANJ1RX3qgJwYhSCyycxU9d3y7m4Z375wB8mWsKBqLC7L",
  "key46": "4Hr9WkanTcXYkUYMa1ysBWqYtGAWff4dm7MnynkUEY363mgH5H7ZrgW1zBeJSf6VVL2p7gws9VEsmxv8FNgVEpMd",
  "key47": "5sXwbxNabgp8aR6UuevBYSamc8Ve3ySRLnTFZJWhf2VSRGRCBxnZNkkXDEMud2Jo4VLWtzqqP1DVNVZ7uWLzVsu5",
  "key48": "5qrv4HWzswZwQTrGMWkQmqrJNQN1f4ooizXsLMwX6ip54TsupTq6X2EpmXoDx28rQv68ALbR2iLSA279ihr44NCL",
  "key49": "2TYPEXBKwsvz1uYm61L9KV6SYTnGL6AKupXpfVvuFjN4kGKHrr7GTrW5vR8r1k6Xp2qiWQwthkQX3uD6PP6ZJ7FX"
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
