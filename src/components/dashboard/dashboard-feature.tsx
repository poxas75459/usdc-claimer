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
    "315ifsn1KrU1PkhfT3pgU8wApnyByKtVe92bRtjXpSS9DkpfyqzP7PdCqwyt29SpYnexuNxJjnGraFyGH7SJ2LMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "asDhYovxA8kPBymStCFjuxJhs5uPLyjcuv254EP6X5SnMW4EwdELdC7iDPr7RLWgTPQVbAbWArdBa5bcpWD6WeR",
  "key1": "4MZNyyaMnFbCSWkT3M6KMbfXYayEAXi9pPqqGGzBA7jD7iUeA7ETq2D35KVBdpuNUX1AtG1R6HRoNMfJMmUkySAh",
  "key2": "25ZjtPW8NbAqeDAxfHNesDQydt1B9Y65cwx96L4yGXrhiK8oK33oFBFPHQ36qfEivGXCrpJRZxzajUG9Qmx9Pr25",
  "key3": "2xtTGcrM5JYQWnY2StMBLfgy1ovbF1fm9CeyzNB44aPqjCuwhXdNSG9oFw8cGtAn95JDkr6JZC3x9VSu92HdZbTJ",
  "key4": "5nY5Sswj69awAEgxE6anE7TQwzDmUNyf4gGoMc4hZFb8E17utoYQBtYWij9pJanfjk7CWW5PUzT6Ndhjxq88C4RC",
  "key5": "3dKsCm6bvLHJ6tKW8vq44Bcu44JGYYbPHExfxTEzerMxEv31ENbYC7r2VHSxPRNWAC1HybjT8AyMnhXHRzZpAuvL",
  "key6": "5KSq5WMYazH6ZSpEq7gos4U5HtqurL8oSRU5wKipB4yaRmgrNuJvyeheogF2du5KAtpY4WaE48iSGuiwNRTd7Nfz",
  "key7": "3UbZKhcEP9wixbzCzKrwJ8mwFXDgfbuQXBHh4PkqfWdCcnCULika6hMRvufkWLgGFQgUas4kj7acCHjCGMgKJvjk",
  "key8": "p7AiivKLLzzzf94K8rQkgCimptizxtvTYGXL3z3r9RmnECm8JJT7miiJwYuP7hh5kdhcuwxnfpPyVmcPfdNGQmM",
  "key9": "2ALt9ef7kVKuxBRKcRhZwyNUbLAo8dUfk8h1wEAL5ePECdzuWEQYgoXyryMhPz6qfn4mtQifiuDgMagkWPo1eTDb",
  "key10": "22p16ciPqgrnvWwqgdRVfuRBXWeiax4Y5jtHCVii7cT5Pm24Ck1tPpxLNZBS4VJ1T8nPjkJqj7Ui8qHmUeQPZGBC",
  "key11": "4ffFUjgaNtNwmQ8qoYtrxkHM17Ag5zPoeR54ya2SwNdPRCpNRPNGCTu7fgMSznPgavmz3s6wA6oDtumPjNAgm4Kv",
  "key12": "4U6ZB5XiApVpn5Ybm6FBApLDzK2LWsMJAJqNqqqJExQNyW254mSZmKCfULn97oTQNvAcdNPjhdqe7YCbRjPfc7iG",
  "key13": "gW9axurVH8G5j7SyYYgTeVopw8Rk28A1aSTRJ3NnXcckmmVacnyiuatf54YAtLYNaVmET4sdT3RzwCr4eMJhUWm",
  "key14": "3pyoQPVMf2NV9TPjKjf4dDyamcFmBfpT2PSdwbEXmPbStUjen1pUjPhCJsfbBprHqKqcSqcvBr2wT2uGu3r2CPWc",
  "key15": "7rngRz5iMebbDUfDH364Ab4ZNY44fykHb9ZYcNfmS9BCDwAWztEbqR6mjBg3gfNuoqi9vaAmB6zviKfn12XF5ws",
  "key16": "5kZuzuaESX5WTT7RwHYk9vkup4A7sKxVyyEj5y8Yc9minJpEjSPnzHUPsY3sjt1DMh7hK8mZzMZZahNfAwEVJcoY",
  "key17": "3wC8ePajXMcCqFBCTAZnv6A35H32Qz5PE8SkA2us8L1SPQF3W82e64p29XYmRGSzEFeCfDgP1DFNm3tcWAmQi8Tj",
  "key18": "4Wp7am7JbHUxS6UtGyCudGHiZdNybDtg3KoN8QY3JjPhCLSMMaj2Hae52NWJEEi5hxL6yemu6367k5ewaPQXpnbn",
  "key19": "33qiXmy5dDBiii7dFY6NMj5uGKHJFjMx43yK9aGcGHkQZz6SGsNGXvz7gYtrcbao85K15CaQz3UZXyKJYqDrGjYS",
  "key20": "4LpBkUSfXmwZJ4UjxMNWMVsJupHv8n4BppPHiyCvx4WbFNsGsq31vX5fKpJZ3z91Sf4twVHXfQ5yko1CiiyeNN66",
  "key21": "2s4CxhfwFwyBCKiDvrMJY4NjerqiQBNQXwjPjsG4EgavzALCm6TfihceKfmxvuzxSy4meFNjANt1wCce41NdoeXp",
  "key22": "4U2S5UJncr5SAGmRcpsohB3y2UQY3eFYUrfibj3LYWcYTigEKoicbqrerZCcqbDKpX3XR2ETyVrEeLSKAV5hN2G5",
  "key23": "LGPyYwr1RZmv5tG6qeSg1UEWcSmtWzNfGEBWMJmbKEGvqjKFHwk5oNk1baSuC2xiVeXJiG4Mp3x2uaKYTm9SRQs",
  "key24": "4qST6EpZpPirneLki9HxoxRADEH9PHV81vwNvJtBkqaT6Rz6AtkUJAY9SHBuHTL7BVk38NVo8G7tPyNwXm2sUiau",
  "key25": "4wCtf3uMervd4vKna5SVtNzkmk9bmgC6aqGFWSpHozk2PWBXBn18bbDXUiWDM3g7wUz7bTQRSTKsRzKbiVb1bzg2",
  "key26": "gA1BZ3WtR2KeMc2TKxUtqiLiKpUBvQW762XRcEwYo77Ak7U9BdV6efYe9BMCD5xNnDDTi8Avj343WbUiQJtEFdQ",
  "key27": "5hK38Sps4iscigD41pZyMPgCaZ9nq45ama87Kwy1avAq3NAtBe3qHLBDDe2bGyiTwNyp6Z6FkCaV2RZn8rnskJxe",
  "key28": "2QQ9eJjG7iWTS6S3WQdLXsifDgcU1MW7amjnR5Bcv6PYz5eG6SEd2fT6AEZWrHhJf2vChhTtQFXF773VpzBxxqih",
  "key29": "4Y6EpfBSbmmBNLGQXdNzYqHS19jVPXNhUvbMGAX1vxJzLgoz3odb9je3aBUD7RSyJUjgKynzF37STaxB1DCuX1CR",
  "key30": "m3nmWRDcsXwVxeg13HVLgtoXjz9xX4tYuF6fm8Ldis2MngddnGD6EsxMHKu1sCHHHkbVQWc14LwRwNbdXKGBkRP",
  "key31": "226jWbjhfRZTXFgbDJTtr5h5ebGAFrTJ1egeGRymPmUnsZ686K5kPm7JTfuwrT9jHyGvnxwhCY61BPFWLZjobJSU",
  "key32": "GVu6vTGQjBZJzrHrsNqCs3ACBJamZXgC83yPdTJuFVbabtt4vURhQAXSqafBs7hG5q7hhPChMKg3yJFdfHYgE8k",
  "key33": "2mMWPwLnBjUy5nXBE5bWuLVtb2JnKwVJH7WSPPGFuJQj8o9V9s66eMwsFy4P9YtPbA3sQauNFWY5SQUMFvYTkrrJ",
  "key34": "4NE29vGpSVhMY5kj9wdwedwXSzU7tqKmzSJi9fRyVoPQBJVawL2hrZfPNtsakVyRxmAWk57dM68if6d9FE3RRggh",
  "key35": "5vVxxVac9GuY6gERCCmU2wn5RtcfE3RcCxUGxiQvaEw8KL7HrB6J9rSJux2aTADr1NQTB43FWGPG4FZVQ4gZBmJ6",
  "key36": "4ot6cmfHd5mzUfRoQcXvqktZWCcx1eaPBwF6eqMpRxwKqeBPxGqEAcC6ptR9msa2mEM4joz1Bm1qerN8JokW5sdS",
  "key37": "2VDj1EHMtyKgAMkNVAJJbrmzBhv3oZNqKRanJovFBQhhJ8aMaXvyyjUH7aKjPVBYeSwoBRHUKDuDMCPNaXRcNyeo",
  "key38": "5hMtAS3K1CB8mzN7YctiasKqrvQfPG8DyCJwy6g4wiGrmPr5gke4eHAKVzUBwGKACs4P8MKX3c4vjpanXEbwwUtu",
  "key39": "4o81t1LTq5CVjGuiXgQWN6ttmffEFNttoz6oDGqSF3AHnk5weKghbGpixeeL8GKzwgofxzLjjzh6RKX7dwQoa3TU",
  "key40": "33VMqwivRJr1coAF4AMZmFh5r4jELLxXjsXHz9wjNDtVY6wdkEkvjYJxrggaRJJCDXcYsU1H6qG1ahZvNNUhZ5jR",
  "key41": "VpmmpdDmXaeCL8eVY68DRxRfm8tKp57RFAVE6fNBYe59GYAQdxsRDPpLkdTFpMotJVxdNcd7P4VnTxVMJ2bNRo6",
  "key42": "3yM7WaUpj8BWzTvZv7Hw9KC35qJ8anXEZLk9Cfeby2M2479fV9Jij8Mk9giL4XwC3hF9Z9BNRX56ycQgquRoyGav",
  "key43": "mDMcpL2WdRxieXtA8QaMqScaRZ9zUMRb2qtptCBuGcrdFP62msmx6w3oRMPSMqfruWkoJQ68MsknCdrb5ySkw9d",
  "key44": "4NPiMMuEuTWqfe8gpvKNb5R1XYPnQve7oZWWxzXpRdohaif3oUNw36U2aGAoG4CSZL5xzUKBkNCJLXKwMfQiY8gQ",
  "key45": "3EWjYRMreNrGLbTFXS2feDcvQhkzVnUEcSbjGvkmHvHFKtUDxAoeEVPu64qM1t9D786KiP7uvUS8YUwTB3FsHXPN",
  "key46": "2j4WsRH3Rv21vqcAHLoAHLjwyGfmEcBKrNgvqHP8gEi5xme1dKEvaeAn6Nz8ABdXHqnpWAcJUWGHCV9fMDrUDqz2",
  "key47": "2Z641FLLXa5Ut1CNUz7MLwTUXN71ce5a9nfSciUYSTCiMyqjgVwmp9t4vTXh4pJSbdWXyS4Mvwkr4nizN9cFsQB6",
  "key48": "53TL9LRKifcRhLTVqcrBa9ic1oMKCq7tUap3fegHankkrd6j3RpsMgEMjv3ge8xRcCaY9LhEjyLMCDj3s82RKbH9",
  "key49": "4oRApPM9UXztcEEHLps1J6MjKt4ac8PSWL4aRnBjJ5Ln3gpPTaxG2UhjP9qnVBXscXfazNFab1KhA8kR2Q62uei6"
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
