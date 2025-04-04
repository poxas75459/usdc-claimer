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
    "5gpH59gbpz2qX54u6aijFyhdiWNAX5owjehrfMt5rjBEkdyWDWo7ssfUaR8ERAdP1GHTNFWFcDwjsxLwbNDKMYRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AextfCFEWQDEXnMvtmzjJHUjrVJ1d5jjGAWMaaU3vaiGm63rzoDoHjLf41XhG8NMozo6nJXcUEAXKktctULCyw7",
  "key1": "3TCLoWGiLgVwHyoaYa4siVYwk5JpgVUEb73NDbpYNZxzG7QRsmnXp4kEUarx58Vvexv9tgAw2gpyChpiTszUjx2M",
  "key2": "4RGcYF8y77PguAZBbFvN7XuSNwbAZwNRoTSatcGv3ZRnk35LXfoJK4TzED39q29kwujz15dgs2srnzt5Cx5hqAHL",
  "key3": "2d2idM9ZB1Xuf48GQ264gSvHC5TzryZfyxgh48QJQ237eTxtGP7JcfxHvoievAUk2r4efA1zbysbGZCJKFWaVpAh",
  "key4": "5WBjy73Ey6fYvnHsxRGS58vkJHZrWJzN3ojy6N1kpjQyyEM5CLp4CQ9AGtVHjVJ9YnoKszZRXd8D2ufBKciVFMCE",
  "key5": "zPjKbR1tCUotDk9X2TpLNrVChsG5xHzNZ1omXSotxxMePT4nHQMbAKwrztP5vFghHJtAMMMWGBzp3AyuBdDhTs3",
  "key6": "5f9hvKdC9CEgeP3HFayAxv9dqeDydEXN3t6uLE1ehVhiFrxnne2hbdGNjSokLrqzWdpykrKz4HEC5DkDhNtgiaVN",
  "key7": "h379MAmL8dRTz2G8PFXsLLs9v2o89RAEV8oVAdNUkmBFrzeTRytvnKbsnERjEhdR7EWBvG4hH1HXMbnoAaQ512Z",
  "key8": "53LWdjLZyugNw95tgJvS6Q23jCXxbUS882m7gVeoX5s3uW5fYhoZK2kgDga5UXindZ1uN6RgaWchTsczuyGVod4",
  "key9": "58vLgj2whsCsFo5LgS8AjuFL8tCcMv1ahMnUamY5acnnLnd7ws2TMevjC7LEmZFLPoV9ScR7V7EQhxf5a1eqsfar",
  "key10": "5aWj3ncPKwq4yxa7EFUi39dH9cUuUyro1hizpkFsdQMPWMzMpxQ2JL3xzQdjp13fcssdDwgbBveJFkT4CCrhm9Nr",
  "key11": "2FSsJgsG8EF31Mo2hpyzzgVLLo5hqU7UTmzi6sdoMwxkYEoGiyNACXF9o9YDaUy5juqxfm8eh2ipNvWLWL3onLBR",
  "key12": "3sUNSfKhYfEmnWLL39ujCrkpo3ouGSNFvfrEqmz94He832PDwQnSqvAQsdUocioC55HhSb4KXyEi9LLHTRQwcRof",
  "key13": "3WdbEtFTrmjy94Tc1WfVAuHAJj6uk8NmBa91tnxcPHEJyFdmZrDMPYruny6o7fHohqBRPmd9p7ktpPTRmJKtoNn6",
  "key14": "z8cCTo9kA8eXF6eNhQfgRrL3xY1SKNvrU9U6imYiSvt4BcCZ3nHRcQTnMge38SyfQFgGaXUTPHX4FXvRL3oQipP",
  "key15": "C8mn8ReC1BfV6LUG2yxCNGx9ceZ9LVfba6rE4dtYEzAbaL772R5bm2NBXqbQS1jpV1ZeXqmpjvAp2QTnZHeaEgx",
  "key16": "4va78X4mSzocprF58WotRfkBPEr5Yh1T7ec4bT64SPfpGY9nE995suEmw3GUpFkyqF3qYBx8NFFmFNGCDxsc2X3A",
  "key17": "3tn9LNeBHuUD53xNvLKdSnBp1t7ETYfcWNWiwgWYZSdjgWA5tZuLtgbwKcKoxwQbWVVQPacRFqyVyDSrU926HAtR",
  "key18": "3UfjS4dPfsP3R59UUCf9i8iE6cKJ7WBwa4gS6zm2ZLn7EbpCG9VgTz3Gg1FawRK3Xf87aRTiGBAK7Uo4qC7bnEGB",
  "key19": "4L3M3G1d3aWDH2W7Gizb6MwW6f52siPS1ZLiUbd1VquMvNhiH2Z5jiMzcF5RUwKvfwrQuRjoC7ZoXD95psEUfgFP",
  "key20": "2aCG2FoPidtYnoXQm2efLsCq5eyGk8AN6segXF9oPD1sNcLraqgRn7rs1jq4CzVpJD8JNzPaRMe1PHL2jn88BFL9",
  "key21": "9PPFF6CK9KAboiJKNPbL4TAUjXznPy1EskdfuS2rRN3mCneMKn962mxN9AmrjftKyJBLKmWZnJ558a1jPmYvjan",
  "key22": "aq5fjfmrZMUyG2Jj4T1F4GcbXduCCe8H3eHJS2xB4eBUH7hyy8dnYiTctj4LHLMR617KjTidG5xUSQfZAButJiS",
  "key23": "39SXwjsB1Ag3y7iBdoM25PjcrfMSdP572LEmvwF9AV23QzyBrH6LY3jRaNhW6MQj1ZZobkmfuqWRGu6qyPNVmau4",
  "key24": "33SdftyjzPMuhhAwTx5wVLvZtDtmmudYiKH8K1PFXGWZ7jxnXnVSahVULorm1YAYTpTGtiH8gHEU8tLwQCaLMECD",
  "key25": "61uKgYMVfqjMQuAfg3sfuBbJqpBsFT9GNBZAvJqBcxGpNk288vpJKybEZGEmhKgqank3NEA2DpBcahqxgsfGNgWK",
  "key26": "2P2Sbv7oBgkWnGcFurVvqEzbXkTQtwvqc6fQBe94Y9LL6oCg1PXjRPornXeMJJhFfXFHxU7Cy3nMWW17c99E2JH1",
  "key27": "5iukRSQWLHQdWdGteL1STXiimrfvFrQT6hPgM74LPRHanV5EDVBsS9magFU2Ta7XXNg5P9R6aqdvNEshwz1NtNuC",
  "key28": "3XwmfjGUSY28EBhdhcJMARuynoz1gcxL7tvjzZRZLTseNKuovEsjmeJnyLWgFQPfDYrLdE5M4gJK89H8aabz9cUq",
  "key29": "3rqDwNkMzyqULybnf13HBnj86ipki9iVSFEE3PFJ7eqm8aDnGR3xiRTVA6FXy47UMZwqp75ufsDjeT2RiC4U4w4G",
  "key30": "5nE3WuSBc7rfdsHPDafgJV6is7CyJJ8rXqdbXEoYdYF9HkRKHk2iSH9Yp84JM3SJSKhj2gSxNwzunwRQMKgk6o4a",
  "key31": "2tWkKf4MLJFoYDKhRkepbH8QN8WkZdPXaXJ7WXbQUdjoJhbrLyREQvTkQQfNerGaWdG9TPXa11woxPPkPUtLWEmQ",
  "key32": "4RzHoqySxz7sNfUvrFADKWEc1JQ8foYJT17b5Cj6wCSwR4WYfUjKExPRjgFBvFUW6YH6dpSDasLanKuxoeD7daNS",
  "key33": "mP9gDv3XaHvXX4mbvR4vm2bUHXeFfootTT1QMeBSfCkCUE1Rdbmu78MB6dGaypbyJuVBNbSVsv5rb9EmGSVteER",
  "key34": "2uX8jA8e8yjJUVN5zupyz8d5bG3g59TJCMivL8ukZMNypkteJZfSmHMFd4rcXyqYFrpyAXZFRr92ckCX6Pyi1MPq",
  "key35": "25As7tvqhqEggNrFgMbMmvF3QUbcQDWkbrzG54JmpcvcPv9dtZ1dZ7VG4vhyZvEoF7S1u7QJMRMTsvJhi6pbKVXL",
  "key36": "2vsEQsvSmr2wEGfpPFe4s3Q7hgNgxWDTPUpzYwDkSD6gu58RFrWgM2T4VJX58EwbxWPoina8Gaek8xFEENcmpwz9"
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
