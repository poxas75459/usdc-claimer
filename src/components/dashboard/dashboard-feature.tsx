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
    "4KQkRePXw7g29VN1YdhPRBBZPEvtVUMjJuGe4XxWt1rWuTmjmQCxZyqf8233nawR9rWUHk9U2oUdrdZPtcJzMEAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V7mG29PSH7E6w3RfNvyQaQSzrhY2dmmYwtVxsopieF9Tr9mMxUjQS54vJwGagbnKYcoKQszkx43W5jaVhoCyyAb",
  "key1": "4gkiz76v2vaYKXtX7AL19nFLRZYQUDQzKnrFyX4QBrVqtHxUZ7wbVsrDJvMuPG8KYdAuJQ4Vn6PBdsfTqeQTncJT",
  "key2": "4CEVxNrisiwj9aMZ87SemfhRSpeuaMGjWVaw3gqHY7MxSeRikHCaTTFDDQspgJPw52H89NMfZUQt3zhwpWkTjSAs",
  "key3": "5sQS7nMpcXFVXCpzhU37ULqwn9Duw3cVdEwEyAVFEH1hy81QSj6BLfGrUW89AtXCy751MGjjsazhBkkHZszuxdq4",
  "key4": "32GuRX8rX3uVUTphB55eg2gMHAYKyXsqLB5Jivhp12V4QdkQYypvrzwozyE2Gz9xKP65amSkphoMJQaXcNdshwRm",
  "key5": "3uk9FCU6mbkFv7Rczq1sp3cVcSAq4KHWLPFndH8oqaouV4QK5gUvyeRLkjhAsGEDasVSfjrFcQrNGSMiFoKe8rAY",
  "key6": "3bYt1FvbSiCUyqWVxPgtCLVQ1SBLE8tbKTSQVb7rwe93QJXPngX42wRNcXjpSrs6TUS5xitoq4ePgWhDM14tsRyF",
  "key7": "PddQmxu6AQE8e5rSNomwap48ioPPmLNqRasx8Dkt4kZ4qWiKfkAcuUCbZnhQ8VvRjQniDu6xmSk3juxc6C6NBXh",
  "key8": "5q6i56R3cxCowoNh98XfqjE4cuPXcPRxhAiZ9DmCYYBCrPsHwCrT5r9rmwitzMAUfY2khCuwAzoKtWQEH1D5KyKr",
  "key9": "3FtjvEk3XrpokwPaBz8dTUbVCN8jzM4teeao2CMiBmqutMN9v3uMmsmL28ybvGqpHXs4r5fFesCywhuq8AWiGNAi",
  "key10": "hjGzoYWyrMkLCMNyUswGdH9eJHxNj61aMJrsZTWYjysePWFxA5Xi5ya5XMDhis2JveTUaTp8VnTxAetWkYQQb6C",
  "key11": "35V5Hj2NbNVbFvXg53Ltkx9rYwYz6KYDQsDbBdb9s6BXPG9vVwLBprTbKoVY465tkoWdSTnYyuav5sFDoApuTEfD",
  "key12": "4GqFoBzSrcme5PwFbAeLrjjpZuwBc3nYuK7Mj1bhBLaMAHKUpsjj8GVaM9AjWVQUpJrzyFWB9Qw9cz4QGdPHCpif",
  "key13": "21Tc8aNyBYZT8ZmnkA6petmStPM5T9Zy51ptKVUj9cUUaGPnVpEj38o8KH5Su754qgCv6nyMquVMQypsLHkns1FD",
  "key14": "3JLETLsgxBe9VUShhukpebXhNkJjKN9Ct21t9V3UNJVUZsX2d7VT4gePWhRxuMCZRB5ForNGSyHzGcaxQpwHG5L5",
  "key15": "5QaqL4e96o2BAsVXGxXGnb82kQZ8i7QxkLeBReLH3agoHGop68GrMThRXEPkQ2fNP5Jypm97MRoXqopTLYaGDrXg",
  "key16": "5hx3gMDWXo9cuBUe7bKERfzTEx5AcApYN7mBu3S7LxUGPGk7uRxW4nuMVSe85VCPJHaS3cRFxNMBJvTBMM8RstbK",
  "key17": "3MSViY8Tuj1UbhGFAz26xQ1y5rRwNHTqSXLBbrSbtqX1U1pVfKbCaawDm6dAAuvwocuCyBijiU6vcj1upqLpukMy",
  "key18": "2oibTQqn77tdUWRnzqvhtodCdaNKjUE8K7asoXUuwMSnod6P95pCs6FzfpjjBNnMW9kWjuNQ6urotSaPYVcUYxHT",
  "key19": "534VCpkqjcSySJYebZN1R47HfEKgV1YDZrP5Sa4hWPrQpeyjvXPcfUQKTrx3uZLQKgsqUm6BM5BPwgmtRN7p344D",
  "key20": "4jKT2w3WbcLoaEEv8Tj734EKyGtuZmW57fWr8y5CaHwnJsPhjXR81PigGs1PRWE3rhY8m2CZGwa9stmGhsoE7tKG",
  "key21": "ik9dm2jsLtgBPhgB9Z27G96mKSLUjQHXGBJFmCiqnBiHmZbJn2BA81Yn76MubxAkq7C24fncnKRVPRwHWC9zLhh",
  "key22": "2RTps7bm677gHXD5aJzZ1uBVGS5r6KmUWUwzX4hyt5Y14Y2P3vasMW9iCLRuT7WhuQdZ8nTDPq12aBiBDtbaFec3",
  "key23": "5nGLYogCKrJ8rznw4PVmo3bYznRXRaEpRJbjrmvNz7SAT2SFLdHpyPCvb7MFbkvoc8dQVZF34NPNQWNcRszk2sAX",
  "key24": "2a4wT68MUfoDNhdzToZEMhamERVjMEx2XqGvSfZ9xCp3GnJPSnNymzEkaf7yEvHrG8ug6qkqYrV3HkfRu5AjDCbz",
  "key25": "5U7rxnVQh9XovGai6zQzfeojxKED4LcXtydmDTqMJ6zARepq2AUYPheajXivV7iJjd2gab9Zo8UMCLBbupnuMEWu",
  "key26": "4x7eivozqCpAe3qSGFcu5hQocuGq2mk6z5KfVeuVqh9nNSXW75Ptke8e9VZxYPQijTMUjfHhz6y2eATWtQ9qYiWn",
  "key27": "2bC6snd6cLQvDTvcDSmBtvYiHL3BvnXDxkyRHygnSRoha5Xi6L5TcgJXvuympfPKqjRUFGuJ2wBQjfGyKKCsgoPi",
  "key28": "5qCGdJGFPayo2xaSSvmhZqpGAfY1csCBprz82HAzG5LZuNCrincBGafg7bEDyfLB9yGhs7KoAPoaaArTc3oe1B5T",
  "key29": "5s5SgohtLjVezdG3G8czyY4M8eM5PDhQxDCnwzLyyHspgGZmBKXQgmdGvr1EGvZB6eDvVjCBiAVg5tu1GTCH6mnS",
  "key30": "5WyXVBTD7eFFe33Y5pQNTW6hA9rEDAtrikh9St8WPukQcrW1G4QDCos4eRPHryGNbFPcYei3yZticFSkCsWjLHRu",
  "key31": "xVKcRYTqDxWQgCWF72B6wcrGJ2s8BjLDiKQcRRbMHauCkfs4A2BhhXCLACc4fYGTMJ1qZRMFEhJtMyvBcNEmzAJ",
  "key32": "2z9Re6aaEKZ1FDvbgwRGgK8gcPG4hLvVxvtfRnDgL5H8GNQMA1ExEuqUfLQErrsvZTHiMuLa75p2jprz3FpnsnQR",
  "key33": "51GbspayVeKGfALncC56yZoUuFDetQ2x7dY6pEPr9TMF8ewRHTi3QX7BHaGSvNsxKwUp3jwjZMFUamMD4LLgAgKp",
  "key34": "kcXmsBo3YBJNAgNvpFfppyzGihbkweA5xs4YNwTD4kkfueEuM3fVH7UXiki87u8hCRSjhGXw4FmE7uTJcfcgYZa",
  "key35": "3VqgPEaW7Kdp6AZCrDKgbL8YzN8XAefizrWw3WbHBaRszieJL9WtsGHWEFxwXSdWfe2DfWVfmqdwF4ELU13Vu1h3",
  "key36": "ZjQ9chce7XP1ojCQwpSuFW9iWb5XLHjNM6WoX24Q3CHxzuBccrUM678R73VkWTYdEEREbdP2ccb8fw2FdyXSuTF",
  "key37": "2k5d1rSWhhQ9uaTuusVWdazZaGSycwz82wYr4JZxCKnmxBUBWm3ceGfWFZsmo8f1sshUh1qqLQjf2pG3p77FJnbc",
  "key38": "22rzdRjBDRmLrZnTMbJV6J2F2m8Da8izmspU9BSakSPqoKSC7dx1j1ieLmZ4RUsFqaXEnA742Dj8271asw7GPqXV",
  "key39": "mt4GTBDbupRHPPVpBAiPxVRN5wZWF6oUNrohgcamrch8umQpwjiXLAieBBJDybMJDacxbwZtQnL4CSs7eYrBiwc"
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
