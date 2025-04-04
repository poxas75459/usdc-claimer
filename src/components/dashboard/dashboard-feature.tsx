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
    "26MQS3QZwMuooxcoHW8h1f4djg9oe4oL4Ks9Q4XhTYFykG2grGXnYJDWpabiMpjUcHm3CT1m1WcKEiawF2VEp8Xo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1oM1x29av4QuTKddZTT45xPGH4WScXGns8VBPiN8sRS4GBpcneBhG1UMkUByhFxbvoNq55GjnD7nyXHj6dAc565",
  "key1": "2nC6kaGVAM3sUpDym3qDbcwunmdydN5Ewv3zqGe2F1NagLEkYACrmDRKQEFBFuroas4oytRXDrmoau7ABiY4cWxR",
  "key2": "29696P6r1ynjWJzodD62z4GEGVmSbJj4JvomuPi1Mkwc2ebAjTY9PUpMUtpeRnUD7dxTw7WeKeWtvM5Ji3ycbxpE",
  "key3": "2eP69suscMBHxjTZ6fRy1zRcXUy8KkqLYqEkZrnRdwmYH886T3WGrFJEMMeWLxP5SDtXn6aRdP7A1VNcMeaRdesn",
  "key4": "61emzQjJwNaKLX56oooBn3X5Y58btQfjZKDvnv25gdCPqS51kVpBLMAhH2LAGNh8hmmFKiQjd6vES7pXLD4Prbwq",
  "key5": "3yfLcFkGiZqY6o6b2qCM2ucSd52wDPbqrFfj82KQCw5Xmjf3WivJLHDeQ59zbr8uUJMTYRubLyAHPaztRVS1hPT7",
  "key6": "4aSdgYaevaxRV4YSFRZeSWNFAvjhtW7h2QYsHgvbt3higYCaqtX8TqcXfVRvoYXyjMefcw1ECscUAQR2eK1zeGUi",
  "key7": "46ok9VwcUFkguXhXzDhzJaMScj6P5JHySDXP1CWJ8DYi34XZqBsbp8dS2GXtP71fMPKmVfyNxVUYR77QDfE14FMm",
  "key8": "E9ooupN7AZbWLngZ1Ada8wPuFm43hafGm6eU5TQ671NcLZGM6PR77F2yxYpecZJpJAwgngj3kCD5y9F1tqh9HyR",
  "key9": "geKEQUaBPL1cAcgAHw5GoUwqxiGTF1ssC7DRAAbzc1iPgiJhEwTwPhPbHHtF8x1QveV73RuzFdjzgqM4111SHzZ",
  "key10": "2syMxCrVnYCYKZScsNqDqCMwrs3eTVgiVF3YaNwYjZhyPsQ3mLDZoQ2NAPioqjTFzrYkVfDiezVfWNzNdWLn8W8K",
  "key11": "VFdL6PGCg5DaDQ8s3a2ykSPugqRPHrpsbkt3WHc25VtAZkZBBeuNhbDHES1cAnkabKK44YKGSGHVUppMgrMyZ5K",
  "key12": "4xesB64afuzBtfAg9HUBsVQJRtu4BY9texk1i3AJLtkqA4fvLpKsdFbWECk8MUxkfcUVpFSYnzUT9o2zfLN66q6Q",
  "key13": "YmoD1FmgeEZKYZ36pZdx4Q2G39bKUHVHctmQDCAcJbx9fTt8isEZQZFxkRzMwP9qrA3YrMt6sBViKMWC7h2Tig3",
  "key14": "35yJueXQJF1CFr6hJgP6TQKczT6QWAnKCwLju57vE6HoVXM8nZaLdHZETsecAtYD4MUCUQ3FpGYP8BCu82nYWW7",
  "key15": "5GjQ6aKqDvNCYssbtsrJPtESbbFfqzE4rSu6zADzNHWeqNCgKLejXvo3ZpU16dWGsEwf58y5D23QXWVG2hcVbgrL",
  "key16": "2C8e3YdLK3jbHqvb4L7GFrgeR2G7b9jMpMYx15vmgwwpXj5JoiBik3D8xiaPEtoZjcmiaKnhuB6xSbQbh7QXhP2K",
  "key17": "5isygUvREZqF5n83i1Nzhbo9ifCPfxt4CFfVPEFkLYk7EMqaFTueYpGGYgXDt69MAiNhrx32FdpDsdTk636v9gE",
  "key18": "SKK2JRbZYgzQDTozGKvceHrCbFxmT8HyJUKSvyZBj4drLyNqTPajNTUmyUKxGiDvNuAq9NtcvWqmw9rxso73gdn",
  "key19": "3r2bkxcYNK5bxwZqV7ZWntWkhxsRVx6nMMjHg3hqPaL4Pb4TUJcn29duf5w483UyLngJQhFZT5xLA8HD8pbCq8Qf",
  "key20": "3a7DfL72mATKiUE2VCN5w9PMuo5X8xs5i6bP1m1ebzyaP4T57RzGUCStYmVdDadVz3A2fJjDk1VESM7QUQQHBLgR",
  "key21": "56TzKCYmo5EEhKgr9GvaWZdRnrwAH4BEZ3iNc5TV3a4KngVrCfmR4iK6jTMC3P9vrqrA33Tf3JCmYoGRA2124Mkr",
  "key22": "3VRiKDBddTDjJfo2j1VHGsibfiNMzCcgYkCUs1q5ZA6KMnUEK8izP6RRHZfN5n27JjApVoXNPiApEJiAGJ7FRRSW",
  "key23": "5LfRKUuxnRnQYDVVtGrZh97NaZBVznsTESXpUrJFAqNPCNnHjgLE52KsvSyg2ATyJjHG7aU9HR61wAFDb3RxxGcD",
  "key24": "3hCbAC5EJtnmBSBMcvvjiAksTcotavQDwF73a95w47ArkhD8acUudycRWsuLVNifNsZ8JetrMdQq99XpSPBZkCJD",
  "key25": "3GYdpQJDSFRDzUB2uHmaT1Re2KBkTSAPb7tqKNRau5UGJbPWkx16eoDGWVGToxUAdr2VDqz1zoR4CjNDpHVJTxwJ",
  "key26": "4YYpJhMykuvLq9u8Yh8GRbAvKKTL9p2t4VSaPBBJgA465KyEaZG6LgKhXbh5cj7eDRfTWEAhwFQJx9McLbKnKUvQ",
  "key27": "4DBBA8f1MjZExzf56Prd65dWdgMAnFR5VBoqP5UnBPehYrvFHUZAjcqG3t9eLsNFhU5TVYtjMWGq85sEncbtjLYg",
  "key28": "5mZBVDPnMU26QUprn18AXsdmRhxv5gdnnDMM2zvNCUNE33yXcM6yUyRbyfKdNdfpuyTKZDVSLVytzNxxNqmuLU3W",
  "key29": "5ZkUokYzoQvsbaFKjQdWeytCqjgmk9zuPLLekjYVSpw7xWMQNhxHYx9agP6jxrB7MspzzNLHusuhKVt4ZK7Wp9Sb",
  "key30": "LiMoLn1KKmLhoUfMSqrTaCrTLYNFsTZDt6HcH8oAHiFtaKmY1ZySL7DD61h6bPL6g82yfRpicybzLe2FqEJe8Ut",
  "key31": "3CaLRnZuYeuLEUR3S3M8xoHYg4NsNKRV95Bq7AoFHrKpiNWXEHghyf8YcGrNXthMPVSxV5jJwpuVUXMLW161W8m",
  "key32": "26nKKP42Qdnn5VxJNJTTG742VmNGVVMrD1s8qmG9kciRdei7otjStQ9BSkQ1bdTWEs473Kg9mC7wdnrPU6ZHUrNy",
  "key33": "4sq37fwC9xCBrQDZ8ubYULe7jQWDheYLP2sBNDessku79ow9GU4eZxmPzsdAtqQk6CzNMrF81ZzUe5v8LmjDpanD",
  "key34": "4E9H52LG5ZAUJb6fmTPvkXuvCWsTrZ22BGZtKMdy6d4kHYg9sEYBu24j3ZUe8955qb5KkmVP799XPM2JvM38Enh3"
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
