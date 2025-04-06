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
    "4pQfpKceHdGxnZjNW16SeiRkt2HvoGam4guwnq1dm86fnyHCGpKRGqkKCgUMWLZAegDzB3vjX4Byu3AKEmP3PXbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zhwa6ai2edET6gCwL8G6wT28afhehzf6djdZWvsrjbX38GiFNNeN32mtGLu73WQs8tU6AxBSdH9GMvC6BcPE1jW",
  "key1": "uuCD8X39h9AmuWyvSdAYtJnTooEvQH2xWeu7p6BA4bHaQsagY53WXC27AfgRr4Dh8tdzxkme3825C62UPwGgvvo",
  "key2": "27UHxGWTaRQMrFJeXhkeJ3qsfSWWVdQSu3NccZMXju9WCudvLGwPkhmsgAuRoyp5opbSg2P7WGG5eb4geDLK3tGi",
  "key3": "36Jpjmrax8wyGBabhNDscyjFY2EjXsHwXVVFFMSqKtawwquLhx9h6zzyQTz1x2bDTCwtp3FbdTYRjN6ZfgpiwZnr",
  "key4": "5VagfUML9FSsog1pMNkav44kWj13EKYhE13e2ahRrpiGQ85jsXBufLaB3sPkTXwLFwErBZFnNo1G34ohEfQC8D4E",
  "key5": "yrh8d66U9QVJvrMDv7RTXcKxra5v48DyV22U3JwsBPt5wzuGpLLmC1RXeMJaHyb6sie7gKRi8XMUuRe4yHdLV9b",
  "key6": "5o6bLDZrjd2TW4iJhwuHWauuS9wW9frYUdiMBMfWnsiwmbec5cicBFojDfVqmpE3D7DBGKDwZqFyoy8XUZ1Km2QX",
  "key7": "4Pwfzwe5caR44c8S2JeKdx6P1As6syEZ89sg9froGp4KF4YysNyaTQtgyE7VPkDFt7AUE1Kuuc8XzhYAFQCxFtvY",
  "key8": "5ZQu2j3gXbaR6Tq8AJegqmmheVq8JpzdB7sZWCNEh7hzkRGagLC8aWprsBBAQANT8PwzEbmgdF6Lt5iRgfQpkFy9",
  "key9": "5eJ24jYEYjVhUquXuv3nTcYQZSXdpckjLHxo2rXLA4oEYoz1NJiVaZtCBpVj1RXcYrPUFB84MdDyXHigSdt7vLJ7",
  "key10": "5hDQiUQM1m9S1vt5t71nRRfNTefPh79KVnCUfMDGHTsGtcDydi2LVqahjVm7Lxtj8k7C1trssHZALfi7XPTnWPKx",
  "key11": "2KD9WWVgFNvFKQ4od5st1XpTmVZfh1L4XKDQdg8RmeSABjaDyLiMcRXhuosdzXQwRSqsYtcK8Xjoa378vHi5tv3e",
  "key12": "3HdQ7e1wpGqyNJTZtgNmXYkiUAYUkihPu3FWkhydva5mGw4PSwKrCgmdyhjkpU5tSmSVw5zK3QPQSpfeKRfrpEeU",
  "key13": "5YyChWcyZJoiSkaqjkCD5wpexBcX7CQ83hgqmRQPc64kqZxggMb9VQygeKVCXoUm69CHxr6akC4nmUZXihyarKgV",
  "key14": "2wdd6odyxEJAP62uSUfqGCX3gj6ucZdWdUxDD7PdRgBW4tkkveUuk6dbmSJY1weDEAtQsnvr9bqzkoeXrckdsi34",
  "key15": "3WovC8Vwggxa9xucK15xSahFzkxK1HzGeSLSqUMeGUxVXowaBiNc3c6GNVrdzyo9ttbDPBoQvBuQYk2hTRVYzuAM",
  "key16": "5NEPp6B651yS6sWjWyFMe7JvLVU1QeCoDyNeDoaCapw3YDV2GXpuq7UE9C3Uzmxc4xLqBaEWgHH2rQe2oy3cHr6E",
  "key17": "5GKXJRPRKVeiogrUNXqeDRSmtkUaKAsJFeFKqdJAkvLMd8pmnWezd1L2BHLGxeMeiRoYUBZ3ZPqHFAeCmWn5fLKN",
  "key18": "4y24pk9EM8zTPYqKdzqtuxWVyDDHGRGqGj2SjvJQH3oND74dqvjN3q16yD8MTFZSSbkaV7nnqEYhcyarcjeZp5Pc",
  "key19": "yugHoJ9WkdJPZMAKtv8njsf7u4bM6RstM5vD8ouybs6bTzSzJXazJNhTNpHr7BMd4PMhe7oiWt9T5nLVvMcep4j",
  "key20": "5APHzKxMjBwxwCNRiqtv29r1U4K6mXkbf7bZXF4UxXCv9v4bwEMsWm9KAJmaSCnqyvetgJuaMHrb2YnwJ28n6Lk1",
  "key21": "5ChbZhqXWzZDh6cFzjWwvTswycDQ7y4q62nosuCAKxPU9wPecBH9PNUB6f2hhL5hy8fLdDQdheew15wuqRdrADFc",
  "key22": "5p5Xy8xaqiw8SvJ4RJePzKSVctH39fEKqT6LSESzU4h6BeLJJZDY9pL92QnmFWD327XtJg1vE9wtrY1d8uibVW9W",
  "key23": "41pr9kjfihE8E4RFj5rWeWcD1ktRehFx4NsvCaRZNJiLyYPzkjWtms7EWtqaJLoSPvn9DyiH7qqrMhmLgYDweKH2",
  "key24": "4Guti44pDnr15Qx4ZotCY8sq8dEjQ8GD9LvZEDfiDqMqsStVtfUUCRxPio9mQF1dZG9jfqGeBwRBZf9RLxRDHBrv",
  "key25": "44FXnvPHnTTWnUdgqNzeaAXtnBdiSjs8RvKX8ocGbRYAWJqrxRSb46kphcp9Wo2GUGzZGWpDiEtszARmXWtanFnZ",
  "key26": "G5HzfKaPM1hZRVsYz4dcMRKrsLoMgkdRoo47TJkS9LFmshBvMypymMVs45PDDaYi7boeJrqoumBX3bAvFyiy3Ag",
  "key27": "2Ru38VFQvJDeQntft8akRngfrvghBt3kKNJm7GzGZk6r2Pkum9YkEpEiqRmbPhrJTfKQrVC5nxNYNdXgG5JS92i8",
  "key28": "2vvduebiaKorzpCu9SwWxgr2xJwpamhm5s1xsrzQn775Ly3aeHwKQ1tdp4AxEuUcxYhrGYGtrV3D9JU9bGfHmAzW",
  "key29": "4HgLjdEvfsjwEBrNPagDaPQ36Je8RuZ7rVMTwFN8NKwcWsvnFdrCo6ryPgggoUyH5f7a3D58AZ5bmxxaNdL1Rdm5",
  "key30": "5972ZKRYvhtAoQskS4RoaGo5vwP5WJqv54fRkn7xQsuHCxH3Vb3waYQ6jY15Zky6DjdC7HmziyNrT46j3HFHtjMw",
  "key31": "xiw5hfyPbfSwmxzBYDbxH16SFCmQC4NUkCSnQ3TpnjwtcsdqiswF11DyV15SoCLH8G21k4rMS7o6LNiYFGatpPj",
  "key32": "5HFJQioFCcBy8FN1fv3RahAxaEp14yV7hS13JfdiScN9w8NpdPjDaS4dU1oRfRMbCLZ3WHSuPvmsx3JqEvWYhevh",
  "key33": "4hyKdH46gosfHdojdeNTs9NtVEb2efnJvGCZNKPZB7DAsfGn6jnTuqXCcZPAJaif2BHgVJq15APEGVCFeBkLbuBc",
  "key34": "5o2avLmQvn6sRcjDNDkrAyTC1f9MJBdJVf6fKh9zdpJdPvteFvGBWeCei8QqUXyjPKxV83Knori9m6YmDz4WhEpJ",
  "key35": "tsw1XCjdsxTBTziZUPWzTn44E85NcbHDR4htoYYn2sPJJ3J6vspHtUo8rdfWvHgnEh7A5AikcdUEPGQfo4o6MWc",
  "key36": "3iC1mt8MHLwNWDQeVRbv4sdWLAz23YcR1a1QyUsG39ac2c5M5fm4R4n4555af15mjJzkX7EsZUm8sha7hakyQ5Ee",
  "key37": "3CdbCU5tBoCuQDwfN51xF25jgJVKitA94T3sBqtwHtVppd3PdZEB5dLMgMxaU9SyCoZsQ9CVM39RNQD8nCZ2aKwr",
  "key38": "4pPxwcGAohaKJMoNYGfwBRN1pXNq6Hu51nfZXxMnbC2pKoHjCasJbxmNHHNxMiyTj3imfiniVCSf4W8QVu1t3G9b",
  "key39": "8hBy7AbGvEiCYnB8syhjnrTdY4FfMqXZiafy2KpYkw5K9na9SwD26zttHMPq5Xym5EdwCWv4Smc2NhmWQiUuBnu"
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
