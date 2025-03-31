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
    "5xUj4Bh39M87B9miYfHUEWq2Qvmyx7AB1QJavPGLBmgeAMvWKciCTbyWzyVirvusoPkNg1MNnNSc4DyjBT3UKA3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63VoydLLFnEMDYHUrvZPTALp5TgyedGBgR4kyEkFWUDDShHmHPeixxAf2YvzoQiot4WWoqaxxF7VtxubgraJBwdP",
  "key1": "3zhmamPp9VDrwYWQfe2qDkJdE9GbRo7LzKVrSJZzGZ57aAxfZvErtVoKRJfYdH8krtPZfJmV5pRtSjsBz55G1Gyq",
  "key2": "5Eb4hLWxz5KyDQnmoRNykFnA1nFMiMcyKRL4YZksUfMfYJAinHV6U3tfjNtMtZhtTzS15sxmyn3pJU9HP38R2Hqn",
  "key3": "2EnUJ8pvipGejAKbmGQ79ktv9gosaMsq7V62gGXepRP56Jfy5m9K9K3sm6y2xnyR7NULa9FYhTu4GwU1ksRHSeS6",
  "key4": "36cMgxF1UQwy4zMNrnGwL5HEqbzJtqhPMm8kcoeJdrwGt2CJCSy6Kt3HnDm6dRQ2gJsVMgaANBWnegEEwds5dQsY",
  "key5": "BMa2CAYGdy2HMradScBJW6AgRTR6ZQNu3BXziCBMfLBX73rtW1dbawoeYKhKEvmxrijseFFetAC7GqHXkfmCYtT",
  "key6": "5ua9NYKrYBjG8ckitw59r1vkpHZQ4gA5TpCFEu8vwTwSGHRFrSdWYSkx3cHKHiD65mfyXx5oCKQwUa3LxonAJa1z",
  "key7": "3BJiyGkC5hf5hrKWh77Jx6ENLKN6MUA1JTHHhDvodCmMuv3Qt7WoJpVvAnjLqaEgBYDbwbZfQ4u2oLroRn2acBc8",
  "key8": "4f4HzkTEk3puXUY1eAqwBRwUfVRmwE6PQncZX1icbRRPFGChGScW1NMRGfgNFm4YW5eidg1ALa3Yn32QJ6AkDVvj",
  "key9": "Ttjf84AQrERGk8oP1p9X4D8WjqvEpxnQ3ZRyMibQbaVSeJHA4HS4Sbwx2N1ibrNFmAtgHoq69Mq4phWeBskDda4",
  "key10": "4G7cC9x2f1aTfnaxr9Tznz5RUnAEU6nVAgdp2yPy1NZoSxwdiaknnB7cEUVz8zNiKFDizu5pDo1AWhJZD1FoUtUQ",
  "key11": "MWpQWWxeMFftad1zJeGtcBkbUqtUL2p5NtfNXj6RHcnqdPL7a3h1sVi9jaaTucz26x4b4SgosgS1pqYQ43UhxH7",
  "key12": "1QqmcwDRoSxc7PQeBh898jHuop3qc5b3z8fDktRbRwAAcKcvhiJ9VYbTprXuua849NFyLgwXTBXYhU8FVtEnEvN",
  "key13": "35HykkVj42FKbAKzojwt1TWJbUqk4JrPPw6uhiHJPRvkoKQ66FJpfryFYa93o46gyo1vV16krMEPjSTNxCjA93ME",
  "key14": "54NKui8NA9k1343J9U74nDGQkPvZL7gcUMhFAs9Lep9pEirLScuU2tJjXwxBqW4Pq4ZdRNhxU3Nev5FKRysRD1Uo",
  "key15": "2UuwnXvaAqgx1Tux3UeQ6aHEfkTxYcfVF8shX86HbNhGEb33opXt1FsHzhLZUYH9javNdeQS1rTEViU3SRHWeUdS",
  "key16": "5UzUjfYV3KdQdv3pnCYfpu1W6HwEYCfNwuThkgVH5ijuRVPzAWeEaCsn9fbH2wb3gXSLVZWK53qcyHir7Ly9HE9V",
  "key17": "4DKx1TR8VYLDS1STn9AgH6fvR1utCrELkAPp9b4EXLYdpueTFX46oGzuwFxN8K8TWouFsoRQpso926GuxYoMaX3M",
  "key18": "38btUeh9kGb7jucA986iXvnRv2fweTRxVAUPBURXAahvdyCFx5vp9YskV2hLcXYHjZHmN5RxiE961EFkTwWyJLw2",
  "key19": "37fNqQUDmixbGHNtiB2Ak7WeBcDeGghfy7fj7FXLeAB8gfJmt3KiEWBXPrfMB38w8c1sK9iASHwL1i5eCyUhuAHN",
  "key20": "4V4kBiwvKER2ZKaRL6WhMRtLXSaxdJBkPdGrqoCCw7jnrEKAAgSvEeB6hniUx3vhDYy5CtFtX5DfR4V5JVFJdhz2",
  "key21": "5Y9fQMEgpmeUDGW1ZpzJNfWvoAfAEcJu1gwbV15j7qkUr1veGG5JEvfEniMHsfnhBRrep4EXyga42U6eEPSyWQf6",
  "key22": "4HcZmqoYCMKzHpQZVtnudPxRCnXEcQRWftKk6W4G1W6uTyAgQmjBTV6RLmBWEZBHZ6Fncc4wdNenT5V3F3s38Yf7",
  "key23": "4pJAFW4w6z2cyWMCipWL8z6uTAu2KT9Uny79kfJMcSKGZtDWvNrCoSkwWvW27hBnkfTwN8E3YhpKF82apA7pxF2f",
  "key24": "2oPMs4XDn3XptMErRrmjJrtsDavBDocKtA6rP3PjyJgPm3MSg9xs6NG1hU1URQaqjXCXy6sNqYtzZry8cYc25j6r",
  "key25": "VLZrvv35pRFXJ7eMjt3zeT7Z5HDxTsQcCW5vt58AmuMTQVCQPb9cwWCp2aysEDkEAtExg6nQkwpuGywUgT52rqs",
  "key26": "2bKuwuBi9zRhqhwLXKwGN9USXwvdgD9jQFyt7Sfh6SevHHygNiLrvsiZwdMBFX9Kx6KyLDkRAPrPYoTSC3EzSoe5",
  "key27": "51TxKdAtpeFWGQ3MSt8SmkJfrtK9NUtSfaiceJ3moGLCbAkezf13Y9e7rfi2ZmAAFRMGFNGpohegGJ2aWUqCBhaB",
  "key28": "2JkKNn53jh9aHHWbvXP7Ax32AN6hcNctKJLfKHv1gFkuvBoLGBNXBA5iitTx2JkqdYjj1F9kYpWWa4ciVL78QMjT",
  "key29": "3Zxvpt8CMbp3UVBJUgDgGYivj3rNMJkxLvxmhexs2ewLb3isTmfv7MocvAEHYmiCabnyYRQsCPinGdUAydsJwfq9",
  "key30": "3eb7WUDfVHrWbyyDuDgFKRmVzArAhD92W7Csnh5gfxJxfdfKYjxkA643XL9uJ6uGgDmGJBGrvvUxygGryEvWcidZ",
  "key31": "5S76GbC4fFBzjzy4LDgZaynW88aCdoTuyyxLSXr5WCZNChhViRxmZDeaPNk1LWGYJSrvKN1eUrwjDWdP9KmgyQa5",
  "key32": "5eFnRVE42pc1xugjLeZSzJbapbiap4WQ9Su7Ryk37BppTSCE4rLSx93gQCV7VuJKUSN4s8nN24oXLZSGzVPULRpB",
  "key33": "4mzdwMqmCmaCvXcWCNXDkSprCn4ZtwqUrAEkDuwCxYfMo68GYHSVYMZdsvdUYi6CDS2kWca5bJw479YNzPpMygJ4",
  "key34": "5bXHVHzyVoU6PstnLcPAHPFrFt9nwBaf6ozYYERrJ8Lek9to4Zu5tymw2QEKMvdzfKJriQzfDhgJ5kti18x7eAqw",
  "key35": "51if5Wq4x5JcfndrbjzaBsoCFX5HdXKdXwp95gAR2q4PeiPEiRdEHQywvYMJtyVd6yuyhyDBifNUwueQXy2XY7XF",
  "key36": "4YiGmPkGthBhj78nicgRUCMj6hju3RNrzi2UsUB29BqY6GLV9DYEy9Pj65s5FftZT7pgcpF6GWwN7HoCS5NLpenS",
  "key37": "4iGCGQ3Wto1DmFu267TUUteYQzfKUq77EavDheNCy5b8Ape5Eo8JPTePrc3Fz9aeu72UpmcjT8HMtaKdfgioDJws",
  "key38": "zXjtMSL6RZKGnp91YrCPVN4buz8Ypgj5QjZxSAPcqDxGyVwiW2eKycAjSvN8A5MDSegFwQ9VRgmC2WiufB6571a",
  "key39": "6DiRtVHpJETuQJZgJaAsZZtbbUJ6eQJvGpqyyQNH5Qv4RfrhKNhnAtX2omkMQVUiAaf5wvHRHjaja8g791KJ1Tt",
  "key40": "27RK6CNV9pQ6n7d65uprj9L3fHiAFyseY3mde2AzXjmhS4sUBFSgDoRZwLMct4oKcWQVbqAsNH83ZFxnvexGMZNJ",
  "key41": "2QYx8kEgfVURcegiazLfLBJzPG8oGnzZebvT48uPuC2xu16nvmsXAGztm5UyBZ2oRawuAo77BRHoJJVyNQSRuZrP",
  "key42": "nUx2NzZZqCGJMCRCHmJuHubrzzYtWnjmgupYGoNT288WYEoj7eVNiRhKfKf6rnhVNH8SG9AV91BDhQJCHRChooH",
  "key43": "66V3BsBs5e53onEEwcVcQufuh48pDLVzTVr5YCVZSgKsUyd6h9Y8cRY7cJK5t7fUR4VddwiPavV7gBghd5CJdur2",
  "key44": "5VSFAmrhPZxo3AFnfeGhshxMLNXdqrTmGfrZn6Qw3g54RKi5PFywiaVFzC4qd4Zh5vn39YqQRHdtDL9Cri9vqWY8",
  "key45": "4rzR9menK9y2mwxPH9YbUF9kTdF4HdEaGdptQFy9ewLFND8qqMR5KP8crA4rsnZKz8hXcXDRvNYWk6PgQc6V5ckN",
  "key46": "YRoCk5M6BKPz7xWUBdMForJjEcwoK9kDn4gu7XYc6GztvHAv75tPbDk9gB4g8C6AUu9NHSXsoRhGsz2wXZMPiHU"
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
