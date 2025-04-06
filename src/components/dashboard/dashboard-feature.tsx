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
    "2Q825Thsh3jm7AT6CFQyJ1nVYXvNmmt99CgjNdHaqMjZhzxMQ5KvkdcNgijGewvDDY1UDNaxMrEZQrXkVQqrYaec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nHF126XdrpNDVwf88ya7apjujfvgpRmjpdNSX8ci8jSw5mL8Ju2hHmo6cAsuY9C9uQTgTbgaySfhHYbhgFE9TDU",
  "key1": "4UzNofAtqkXZThqMSjkptSJo3disDA3UjyU8GK4EC2dDHLUWVrKwzHr7iu92uk6K6cTukeqwWyRptwSTiqhJ423h",
  "key2": "4hpjxqCG8JPtTg7MnaK2JeS3bgDWRu8MpmNufWN8cBRFCsFKFwmm6HEWACf8S2pEnUqBW8JADqXXnBxsrSSbcSef",
  "key3": "4Jao3uPGis9SpWgRERp2bbaHr9qYQTsyU6xphMMvTNM8Gg8EUorcPZZAhejJByWaQPSBXew4oyT1XHRTF4tqjEgK",
  "key4": "3VfNxnTrDJoYsVm4znk37rMLogwnLX3HBDwFncgpnRiM7DV43Uv5TjBmbWiT36n5tVENrrBCAsdso3RSYrUosB6Y",
  "key5": "4wcVzf8Pj8iqGjaXMDwLdVdX1FCJAt1Wojyhj8VpA2Znx6gmzy85y5oy3wTAm2cj7Go6J1ZKa8vbGpVJQki7tEQS",
  "key6": "5tNnWE7TjvXHzJi3LaTxYxJbG3v1Hbtcj4VqsJxnABKXDZFZ5Qo9FQYVEdb9GyksxTEEtZdnrtnyFKj7dyu7rmuk",
  "key7": "5ixe4U1RpHgtH9aSHqsokxGg9NkYCMCsvwdH4AdeR2P7a59RGMckhDB7zXJYtVUKTMS3mb6ePuJPg1ZnCxQnUUdT",
  "key8": "5s7U9CwivHGCzsYKL6pnFjdAt8mCWRX2ebu2gpRTp55yYJc9rpdXZfHq938FgrxfbDM2oiGi4hc5hpxPHL3ajPNN",
  "key9": "2422w1KRX26ifzVBdH88aEbEZTeYUYY6je67JNE4H886dMzBYgvp9taUYKKCCgRrgD8y2rRjfJatPU7jiM9UJ182",
  "key10": "QG1PSXPSeMtDSsW2yaE74aVfv1vmHve7vpx17BqKK7eFWYGFioZm64bBsBZnMkZUCD4SEqEzGuG3UxCvd8WicC8",
  "key11": "2X7PY9nxrJGzN7k6XdBGmcGG3H4V68bNQtfoZzwL2dJssSgRSYXhE34pNq1RPMN2JZZzXZThD4NqM8xPApaXmijR",
  "key12": "sUFHx2WGyK5o7SUGTCoKtwamVJjhoXEtKLo4F9dJKPUTUPtMpH1rUkferJ8R6CWA1r6NpwwfD4oAKwcoCdppT9p",
  "key13": "a1BtMt2aK9JN6XAHDJ2KjF7xAw5uAaZ8Xub1BjjbqH7dRjetmVFYZ1m4G2mKS4CNBPvj2wwQNQbuqFhM7r4MXBc",
  "key14": "29UuXhj6tERXte2FZa5m8gWWWkor6r2p31LVJQBsReP8G725SN8a5euEmUeuaYc8PJPUn556WAmEtFkbCwAir6UQ",
  "key15": "5Q2AmSKM2pwScH32KeiESobAZCjZvXC3GEyBtZ1Ks4mZf5FLmhrMyVEUMiwMBa5cAGxVquRQSHCQqRVhsKNSqaLh",
  "key16": "5mwgwK6H3XYrDzcLELxbjPdZzVb4RAxD4sXvtcH2y2t6y3VmGXLViYjKc6oBEA3zmEEHzQXb1fdk9rorRXApVABn",
  "key17": "5Nq2U8t2bxw6scs8x1rkrpLmBhPoaSCGi3Psqg447WHpRBDR7oQ9RaGChaVnbh9y3RzLSqz7EnZbFYybhDpcVFrV",
  "key18": "4yTMMTc2YcunorhMqVSiDaoXPetc7a87ohtdmxMkkFemyNn8MirtYhsQd7D73kQz8Z2tNyEoZsDXcD7gadeYVvoi",
  "key19": "5yi6sTVYnzTbTApHQEP38WvmVuVRw2TPdnvqqroW31KPAELHJVdbYwzFU1j5pX9tMLNEdgovVm2hManNg8gTF4d2",
  "key20": "2uT4bZiBaeiBY1DZiEaMEWmzkfHi4GsWzeMd8JZzHSAS3NwEHLqVYTin5ueGUsnCYYAKEgMzjLK8sPd4T4tJBkJ6",
  "key21": "5nuuTxT91Fjm7TDQP2SBBHdtLrWQ1vJUYsjj3Tu8GtSrBHvLMPrqU6Lst6qaXy5eyhUvTMxKY3azVsTjF8XnqbTR",
  "key22": "3oG7bPm3CtyT9uL48PKZXyDuB8n8aqdhTriod9gLE3Dr1xrdpzURR4XZdfKmxPPHjteqJDLKbXVqsa7bCQyt14YH",
  "key23": "4dJAP3wpsjTKvb8CkzjfL8JUtW6wPKBfANh8eSqtvXQ9fEJsYSL91iKG9M4PzVTMUDHuDv7hEESGBnU3jSVyFByN",
  "key24": "m23kLVHyay6SCzbw3gCcamYoFicrgnXfJDH5MLWGVjMkHpk3H6HgyTFBrCLJgBSF1LEBtHNY6UmFU34zbRT4v4S",
  "key25": "2NdKzHCe9QSXBgWUSD6foGAbY2Kf36pv53yziK9RumV5wubFSWFy25vJkGG71YaufgJcSQVJgCNzqk4kAE5A7eci",
  "key26": "JvrNhv3damTk6gr7j6LU4Js3YQB4ug5jxHvuBQ3YFiM4UhPeAVm8vcLJsWYqtVew9ApeDfRX45Wa8vTYbBMgc4e",
  "key27": "aEhc8jMyST95syKXHXEwKZ7waTTHzZR8EYon5oVuvVj1HNLgyux7XQBjV38V7cPKnXq8LbWR48bHcNYtv5vLaCa",
  "key28": "2cdgtaaraA9R1J55E2YEdhNCXEDdDxumn2AyX3TbG8K6mKerdq8mkZH9LrDdU9fqbmxa5cG5trT1UGKa4r7k5NYV",
  "key29": "5nSFqm9mcKCYT27jc4ABF9SPyAGnpn4GkbkEATB5vt6wsEPVnttx4z5YeG7tGuZ6Mz7mGpERm63vuY61b3DZJDwh",
  "key30": "5ystwMdFeTbgfVDcAbu5CjNpwi9BNPEVoG8QwkH2nX6c18fvP7AespThQzBJ5qHmhgRbSEjjTzWduqdu7qwFPgRn",
  "key31": "3aHq5nH4WsNMM3BkuykFWFZJx1fzbf6invYmCGm7ZDyLJ1PoWKbcRi28czn835zvTgpWoc2C9nwqnGUnaweGVdJu",
  "key32": "4qfcnRRqu5r8kPEpMg1aoqZoLo4kWivumJ4DoEVDEadQxey4gmvsM9qngRzfpKhXgy25x71Mziz6pjp3iyBAGoL1",
  "key33": "2fQ4z5Rern7SbHZdRgbsVh272eRCmLGPEjSGHLbtJRwULu7VnWT16iXGC1k7qMc4xpQiJUWZuKAFS62NYpYeNVxY",
  "key34": "5DMrjC42ZaAWyAMrpTr2EdKa9WtmDZtECsmkLi36YsDdmXT7A15h1QuwPt1ZqceDZ9HUuaHoigG4hpPwjrwyix2E",
  "key35": "53SwTBPoZWTLJPM6dFnm6s9Tav3JVQ3uHjJuEvD46dc2WhR2JXgjACEgYhksfRJrM4rb4ap9FPLx1zMB7CXxJs3c",
  "key36": "4irvpKMdYfM1UMPwiW1Ctmtp51oyZd5Rbskg1h6D1AMmmG7Rb8KEefr6varHTs4As1z6cpvKcoom43s7cv7GXo9y",
  "key37": "38rhUVKZHF8ieXawJVHhcwWBq48tGZpRacpfxRhic1zYjiHHuVHR3xv3UXeNM2i664MTxUkhimdrJDFQ9KzAQU8T",
  "key38": "2GaCyfQe7d2445sS8PwHZDxgVqGeTryVCHEqdJgdiWUa1GfHDyrReNCxjtfjZyod9dJJq4Civch2qh5jnTVzisnU",
  "key39": "5jZ2q41gbcabzPQeouX4mck1c846EoLndDRAG5hZzxrFDsf77zwpsUEUqZjwfMotdJQd4khQxjEmJNK4HLhP3QyX",
  "key40": "671HZ64gQBh1zKMADMm7zB42KHH9B2o3TZ6y1tfenJfXTSojqeC2WFWwjcfRphJ6kct9vQMWD2tnp8b4iGPB8nn4",
  "key41": "8qd9GAdnDSikfFq7q9Bj2L9emaC2QDUgWyDmesWDd1XpBT5re1p9QzWpjDgVmjWecHHnuz8VtDyjeebpsyVfZD1",
  "key42": "bXXKhVPzarJnidee1UXy7ohmTFJ2efZY3qNuviZPbeHDtEpmQr6SfBPR4r88Kb44RnVBbqsApeUpufowgVeH21T",
  "key43": "4SKuzVico4MxDPwd5Nthwh999RzELPA28ayCmLtahFUMRPF2cxJYVkP6XzE7M2uCyaXrJPy3ucK6QZH3tBYyRfEJ",
  "key44": "51BGeqQyqfDbPQoqsW7qPRmXGH5t8zcGr6qpHuEBKfhXVjxGbsC6cN1rLHgzNWst5jtze1scCA94BB5ZHwnwxT4H",
  "key45": "5EASQhaH9DRsoDX5fzQ2VUehVUxmLQKjshTc6iq654VG7MdHd9ymcpVYzstFC3dZWwo83T4K9oD5Ywo8twCMDGM3",
  "key46": "5Qdej1saChFiBEgtqJzvuyacSMnwEBzfQuALMAkrz8rm8MkmHMLUdnc85HNxG3ARPSWBp4tBjx1fWfwxYikqnAkF",
  "key47": "u7sAq7bJsbkfAifx8z5RqQz3Ha6ATrjWiZnPcKTsWkH5Kgq8zqNsAYdhjnN5d9JJuwEJSDrB6YCynHHQp9TrHD8",
  "key48": "33hKZGrWahsQoWYZYpdZp5LmVw9CeZdkxATvRpi374dM4MXT5CGngrbztCXd24rnSWFnkLdRhE84oXF1B43gAubV"
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
