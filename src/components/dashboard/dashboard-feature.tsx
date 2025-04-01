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
    "i67JinivzDMxDx71qwnUohB8s8CWD7PU283Txa3Uhj6bZZDV3SLp9EPCqtDhTpbMZQ45AWYsGCxMtKTn6tWGMHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DKLvmmhxY5dJN8t33vetsoy2DgrGtQmxSej82forDMBcmibxjPtr5NREWEXJze8MJUzeE2Fj9GukNFsbvoc4eA5",
  "key1": "2EpfQUGqXfZZ5CC76Hoe3TCqdwsY1CjBu9FUmwaZyeDo161nxHFtvzrctfCaBS3b5nAd6fWS4zn19wppeH79NTx7",
  "key2": "4sCnVd4RFQWqE4UHzySbw6k61BC1VzfobJ7Ji3kqnbVLyYgUQFoF1gc8MPhYSJZSj2mjp9SU1qRQLeTKkwUrk9xx",
  "key3": "39taCmubKzDZY9ojjAknbVzV1fnFtCWkzMR85nU3KY914wVhPJcWcq5jGgYL6c7stpmM1DXeeXv1goyb6CtDFtbu",
  "key4": "2BPZjZFuPm4UC1vsCZQWgfx9o615R4Bp5DoZYdLtJtGmaNC6KKyzBMdxC7h318i6jV3TtgYWwe3P4SpNEK5mgG2j",
  "key5": "2MiqSXvmsqXfYY2NhvaPZbPUjzcchPAGvEcD2AdZk8HdsGH8S5t2dPisCvehiJfQ9z91Z5aKo2L2wbV4MyvWKPMe",
  "key6": "Sbw9Gzq4bY29gd9XhoGN6KY3QtjJ2XDDcpyLLu5xGYyfxGnq8DdMZRwVNr8iHdAAzgTDtnsRHnooYfwgkK7v8Bv",
  "key7": "5c65q6EckAAFruMitjMZNWAry2a8DWmk5c1qMhdVB5quBnuGCAybToymP9PjLWdSW9SneYpt8xvewwisTpZ5ei5",
  "key8": "2gtjsuxPFCtWKHGQMe2fpq4XsMcN5H57SjqaRcsxwechbunAAT8hsMp4eT1v3DweCURDXfcXxVrFzkNvdMkcvopv",
  "key9": "3vLpBvpjzqJXYUGQZNVpj9th8oFu3UuS4SM33VBaGGGnHHfNWiRVWjiHyGoUmiz5kDwFz9guWzw5F78UQ6NUBaTq",
  "key10": "4yo2TFi72opyHYxLFHjYFTQkW8mNM1nf2sjqRShm5RojUnLVVQr6fTgonRrfPAXYMqHzZXHURjCePo7Jv9C5QC1q",
  "key11": "2AcReG6NpXRE7VAgzBMDwggDvwfbsaZxzitrUXeVcaYP8akLKyHM5JGyzzwsFtKMJXPaMG4DbHDDRsEbXgjS1DAA",
  "key12": "JANbgpomctzQp9JkVuFED7VvTqz7rjJUH3fGpmoQ4LjWHWmF13T675U5N9R4APq9kKyWPvFUYqz6HcCLZ9eaDoL",
  "key13": "4UdHK8ZuzGmw2xmw8WgbjgUdcXtJfxtuPWQKWBDbAPqaDrog27pzxcNX2WgeT2XG7pEWTSicxPoMdYDfm2zWTho1",
  "key14": "3UmZzbQTdHTPUdFmaMV7jfUTDuMHQpgPjjjtfbE3Lkjycnz7uGayv5ffT9HWYsuDfi31YQdRsSEBHih4DQY57adx",
  "key15": "2ki6oVbAsTinKiAHneuLeSzNDL4RfSA1R4X14F3Tk58LR9zZG1EcPjnH8wjg8vRMYHWPSQnuWjCokL7EyjWLKB8t",
  "key16": "3ytmNWqq7Se3DvVrE1k4CXeHi1TDFhhvYomSXb6eA7vWWPuGT76z7aDJwyjJBwoL6rNspX4e45LFkyUrbrrDGeMJ",
  "key17": "4v34xWnbyzKCMk9Un2cZzhbWwWPGNhuza1HVe4RreE77gGsRQ6jfd356kuS25fJjeSQhL98fxwoZ5RD28nJvPAwk",
  "key18": "bWYNQwqDgaBQBLqxcPQxmeWGdutgagG85qrq4JzKGG4J1KB9ZBjGPHrhZZzaYVnrqk7A66fznrHNBtNF7p7LBHu",
  "key19": "v9RndYtdjuLLqGVxzvptakDpR1Kt4sBwJXn5kVSZfUAvJGfUcg4F3FYcB2mqiLRqiCsykvtZ1hyt96cR2PAnxK6",
  "key20": "2kezndVuAjsXoseGFxkckoaSdLGXgSeWXJS6zmkcJZXsn3uisDmy1EPnJ38v9sF8N3mJTbpZsWj5G1CEbimWFQNN",
  "key21": "5Gf8g43roMkXw4WWfDvjVyhUWxmYxjqFLTWkxE3muKHNHCNb6Cxze5pq763KM1pdpksiLY7gE9XpmGaMkRBykkHd",
  "key22": "4cJnNMTogwbiFETpSq2d19RN8nGvQbC1THfFbQodQhJ6z3TTEXa7srAFtG8QmswT3b7gqsJb75o2w3mNTGYQJePf",
  "key23": "5Z2uaCpvJx1RE8DX3KzyMr1WTDFLdwx8Kwwv4ndng9o2gV4PNUTyhpMcB24tmW29dAeTgvdD4qi4NrEbtpViHFN8",
  "key24": "4Kf7RfezvSxhuSTfPH979sezYYJwU4hSWunnQWCXqXD2QHUeXLTNBe6QypjvRXyj1xGsPeLC3B2e6VoAspXYqeS4",
  "key25": "5G7Cd2qKi7pd6Dv8m54f6TMxk36uEKtFPajd3GpjgoJzjDDyBKxC3NfxGLaTZjy12yUiXEY63tnmnvTP8UePGVda",
  "key26": "wfnPwmbTQd3QMzPq4P4SxHerboREwmHnxzc34N2dLE9bh4RBPcsNVbrek5WyN1uHvKKEeYuDGsRzAqD42XZ72j7",
  "key27": "4WPors7iUFw7f3zYKFT5MSzy7e8xA4jRvXoJYq9C5A2wwt5GDbMrfoCERd825uqaWqtaxfGM2ShUZKFs2ZjumLcw",
  "key28": "35PcSEBoyJSaAmbVXwTK31BThatEDoHxHHMdDnmU5RecXMtrGeHcVDT6WnCTtsrgEPhN2zqdY7uvmtS9bjRcXmEg",
  "key29": "53BywAhY8UWqozmgSVvwdxZ8JMDP9vtYakJ1uSFAx2YKZFzLga3YJaBqZ7n8aipoZTBMW5TwUFww73h6z3rd57fH",
  "key30": "54WKNGpyMvBieWztaBKVVx8KmTGNReqKDEPcNFWXWKMnbutcUNvtirKHfFdvGvdsu5FnzsdUWGzDJ9u5a41SrD2",
  "key31": "2s5c3dsqfaWtC57uzmRS3k2Pvzbtgx1aufH16q9s4y6s9i1mWyXWrjErBMCDZwY3f77yLq2QVp2QjU5KGxqoD51u",
  "key32": "5Kjqo3QmVkgPL7eNmLwu4yvnzknqshutVvErtzdiqPfFjhi9SX9QjuwMwTB4QuHkDaRmrY6Z1mXJENUcxtwEFeze",
  "key33": "udeh9tHUj9ukCHdC2tyLtuFPJGFAPAyUHTdPLaiDoE6KBkGS84sq2Edkx3noSJaL3BftJoCGoU5ThZEvCtUHXH3",
  "key34": "5jYvuEUrgrZTPZU3PPuaGrfQDPvYmLVzY9d2FadB4azKLDfAkToEFTqpj3SL5Doa7idXFaRcojyE5s117ACuPnKG",
  "key35": "4Qfrec7tMZbPWzhNXqSptdgCjHKyScY1VeUqG25C9NVw9r4WpfMVC3s7pBhLyJSPCze5DFfH1zURUjbK2eDcVsUz",
  "key36": "FQBzoyfEB3Siw2qGVLTFQhVJvLtDZ51tENLgWphGjXXEFgY9xcGaM6DTHEpffDmXsjeP7H6P2TWodNS9H3gxKr4",
  "key37": "KXqdigw8u4cNFj16jUMo3STdePLbtj3KMNxX4vu1ZEU6oqBgLV2JfePxif3kba3kshXqx4xowW5vfuioqZVnahr",
  "key38": "5YMnDgLzHXVSaU3yTC4BnDLFCJVQuqWT7MvfWrLpaHRPJau1Nx4ESJzUj2kYRsvrks8F1Zdmok4ZRQNjUygkUyZc",
  "key39": "3oCa1o8UF3EPKMNvSqi2pndPUMQC9ixcQdxVEq86oC2wyUkUfgLgEChmaaDUquXrovZE2SfwjPHECsrovHezmNov",
  "key40": "52BCd6nS1ZUzdkzEVJd5h7RY4388F5KvKi15ty1xQjpPo3SYYYdVGXYB1dZ6S3PpVPh4VxPtz2cpPNebybu7PMwW",
  "key41": "4DTvJ1wZsh5EfvFZhQofFE8PTc6jbcRZLbJd2d69NCMYbAneHWSXi5JUcC7ZNeyjPiLcaw2weLxD7qCNmKm8AUC8",
  "key42": "2Qt77v2RZ88DQCxon4zKjzbBgahg9SQhv47pzDoZjGUPRhR6CZEj1zE1oHUBeZbnkCjqSCXJA5qgsX3VCwvNsZa2",
  "key43": "3SayPbqx614HbroatUXP4QDzneqxDq5xJ6NAFsnNbn3kLQC1B6iZCnGNU5mANUCDqjCsosiGMsQjCxUkkaQ76Kbf"
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
