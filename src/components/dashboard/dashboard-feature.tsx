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
    "zwhPtYgapwa1SExyDsB7bxDPaGxnPPRWpfYdVkEAQjconk2UArYzJ9zH7iKSix4V43jVqTtBCRCQjWQhrk7Ly95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "furdDAtVcGPUF3QYU5eCJtRZu7yRJkEUqAVBcy7PwQMMqfStK3XA6NZT8zvPaNCiLvpf5TxE6Kv6acSfV7yYHow",
  "key1": "4aQWedJJMnHfAocx7HT7ph2U5dv6WUApzjWRarYjm6v48mzAUkKhi6pLKzVrjucqitKFG7vkqSZW3x1Ga1yTBPPF",
  "key2": "37bNTyhF56WadDkVeDAPQQGkiN5vfAr5bDLUnWR6hbUW1qJPukyairCY9AS93mZEEtZJKVPSerKLnwensB455PRC",
  "key3": "2hu2ZXc9Ze5srpDhFYwCanF7TtWfkZbwaQCLtT6z2AvfU3WemBQJCE5MVi9kmr916G8idRMcjCzR2JvMxWuiUNf9",
  "key4": "5umns5Czou7xWoEWYHGt5QyYsSTRhkJ15FbBRGZPFfS8bsogaPPhHua7ZvkEPYnEhcWYSMJHmECWAg1BCizHZqtb",
  "key5": "T4UohWAi8iQ2g3hAMUfpgJdVPa7APgBaBw3stTkQAGXQaGD4MvymkeDLjuHrtmYbXDuaByG8zndCbgiHJ1uiz76",
  "key6": "4r83LVw1viNGuWfcvxzkqSjDfbW3W8HHFbJxnkSTDNUnJCtyZUWbw1ozseAy6NVivaBmz2zyLpkXNXn3Rzw41eLL",
  "key7": "5FccisqpQHCG8MjcP8x2LKwCcYvX1zgpUNCK3k7m2f5EW7B8KjJPnTv9sgmVyNmAgq3TfVLRZUq6bowJ429z2Coz",
  "key8": "3gJ8ep8KP87JV9x3vTgXQh8XssPKNZjtPf7dNXJqAxSkT3SyUUEQwHkzFqT7QgqwymdwNPoT2cB863QGAvePPGVv",
  "key9": "c1eBnJKyug1D56fbkdr1NTd87W5qAuSRKZtYz2oikth7fF1xoN2RHDbPTpMCnhL4BPz4TnF8p2VrcLUTFa277Ei",
  "key10": "51RcmHjpHPRs5mKmkvkQa4uXtgFHNEjSR5Xopb9x9rHJXPLedLovBdDuxC9f4X1n7HLvBQ5Wg3WF86Us3DLunRs4",
  "key11": "HRKHzeS17g6TzKEKg42ReFuKDbHFFfiHWvrJoCJQ2k6UVK5XjzjqWeP4FmsK43Am7i25wELJHp6D9PqYxzeurVd",
  "key12": "5efrPe5MTdRKizFYqWNPd7gUFzSX9Rmq14o4VNWgmA3dZPp3FrpLkJKASmKenjJ1VWHQ72uwFDrxpDt5XDv8jgtQ",
  "key13": "5RALYfWhmjnvoAiGYPREgLJmkzam74UfgErbpm5jgp2i3K1CTQULn9YnCmDZKnrzTuSHmKiH9erJYd5tZzS3Q8xY",
  "key14": "4qkQXDHMaA8LgesRxeE2PNSp9NUT3z9yokqi8agt7bf8eEwnr2b6WoRz19mVkWQNhqbwia3FBrXMzXzSy3TNJLQT",
  "key15": "2p5iYB5C2GUqrDH9614FinX2ijaBH843QNuejeN4xEsV9eYYF4nxaZGJmtwSmttsYyQ4E9hAQp2hep1Hj8gKeya9",
  "key16": "53QrGfEoD9roM8wvJcFimeFZQrUYsydoRLH9eoS7rcBBe88tXic47NsTQw1iReQJesUcq6yYQcB7QGEWQZwHCaAV",
  "key17": "4BftMMiSamYdbTyD4ppA8fZEBqULnm4p31D4Fdf8y6RUZUA4iGWnzMiPEXLTfBm6uMhimjTRaJQXFqsrwNS5WAyp",
  "key18": "5wpM7d2R69GdcAR8wYaM42hohQh7iV44JuKKhjp17wztLPU3Y3yFyifuQ5wrUdw7qbFMFWeTM4F8TpNT4RBZ8RC8",
  "key19": "2ou2SFZctc9ztzgjUarxQtR8KQtycsdKavbMs9p5sbHeDDME8pbQiKky5cZKSkr7cxdVTGp7jLfjoNZDAmAdKr7v",
  "key20": "4KbnYyzKTy4qVNfxMTsAgiuSLKNPA7P2MHuhxPBcnvJtafj21Qtnb5Q8McfNW6mmwKMRrFC542KukBh7ATgMRT4h",
  "key21": "331NYEGUcm7Kvz5eRod5pVcs553ffFBBrJid7n5Uzq6Q96hNisZwVX4T42JCbJmrRUnWpXdNLZgDjN7b3pqfRaVS",
  "key22": "612fr6tf7o2K8yayqYC716AmV5Uu7pXaQra7MYQKm4Licg1Uk8mayBuEx6zjSmH3rxPzGh6R6Bk8PcqTr79cGQum",
  "key23": "RFTTwTUa2prSGGp2aVfiVEfTp9EDCHPjtLGtJtjKqXRU3DvJCX9TpXyc6vmzbXt8wvHch1DC5Dzy2CSUQkS2TdY",
  "key24": "FzrjZbm7vyTfancnQMHGN2TsYDtsip5boiaVKEJ4BYfdSE4H9mfBBbshZwHwGPsnzZWigsS4BPUiCtrx5SWx9Fc",
  "key25": "2U1kzxkpwXkwX9nmo9JZ1jvJmtpZb3oDAhGirU81TcKHU87RVpe4PWyZoURpSP2iMnV2ZCVcZ93RwRpuCXDniedg",
  "key26": "5esMRKzaL2pVHdSAa9mLAj6x8bk2WkeXCyPAq8Wz3ddNkHZ18MWqa2Bc3HzzDUFfNxeHUbGkigAXNwagx4CBUYLx",
  "key27": "57M2pf171VwT3y3o9dBknwJEs2gHj5o31SZ6j97oG73hvgpD34bHabZSVApyBzZrw3HdSQTWy3dm2zsKVMwSJeZp",
  "key28": "64dbnssDJdgZZNEJ9oTf5ZBjQP2VEG3JRN1ZZuHnEQLAhuYWS4GgsasyT9aqo4rL95zAodQGhfiwjYyP9TJbKJea",
  "key29": "5pwvWDamzwzpsnJnkZfvDq42rbxyN8JDkKYUd4s24eSGBZerF8kqk2G6GVAfqfLstWPpsy2QKX8KK46d4vFB8H7S",
  "key30": "5LPxRKcnPk7MA1YMBhsayhTde9hDXa7LAVis4GQvha6nqA7bvGMZ1eZubHEGScTwYpEQJyxnyt9PZQLxSUrXXyjs",
  "key31": "4WycWhBfiywjqKM27ceQnNMm8BRct3fNiRZa6g7KQuQ3wP3kiYWT6ysGi4wuUujsiT6heDf1Ne9JbsqW3iTo7TCQ",
  "key32": "4JcVFkyBQoL2hcaWcVUjd3WRHCj9nHKCA9L1mP6SEEyaEFMY4uP4apBmPxEZnhpmWtrhazKUjikZaqpbAoo25xav"
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
