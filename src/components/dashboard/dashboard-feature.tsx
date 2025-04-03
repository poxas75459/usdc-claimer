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
    "2grAxQh62CD3ycDPzTnBQH3Tm8UUct54w8Ru2gPufL8ZPNPjZtFPRgbbDJD9Rmvfe3vbtoepuNdP1xX7AK64P5UM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QYrb9FoBnG1fCTpGaog9opamLqnQQUd5FvwJM6ib3MxUafZTKGkPpmUZzs3NCEUcmkY9BGoQEcE1fqWSW4pV1zY",
  "key1": "5S95NXwCHReYNpNegz53sbH57ZPCrQfK4nWAxekFkr4D7uf5FHtd9BXqVwk4WMemxbgtfhdNueU1bbzMzAAFFNUg",
  "key2": "4tCvGQwhEWg6YjRuhVysZvh7XE6eL6Fa8W7atERkiDLxwY6GSyUYnZSZC5HAsS5rDt3mBk8cpA4y6nZrMSv2X4pB",
  "key3": "2PhHvabPqxMyXzqA2ZVxkDj6FKkGtNmpd3krySjgNFwUN569PtS6mTYK6p4eoqYo5gNpC2vT77cYLipfRdkPWU6a",
  "key4": "57STR71LxAaJoPipR5j5jizhVgeiyCccFvxsvWu9qavcLVJe7SEraCXWHmG2r6DBVp2mBQeyaJLu6akffLR1Mxkp",
  "key5": "4X6X85AJgYV1syWmYqzrisSbeV67EtzrKP2fqUXQPv9gEzMfQTEqn7mHyEBDF4CDckfrXotjTSjh7kGUmEci4xm",
  "key6": "642tJWZhUSHni99Qu3gcVfj87GXsFBqrFyvvyTqBF4tyDCztdgTG2WAz4VsnCCwoznzZ6Bu1xpaJYhY4WBoavAFi",
  "key7": "2CRxLAiQBZRiysBZWbin92movhdAyvpoyBoJQP7nwUmKR851KMBd3aX56VjKrVZXBokYuAs9FuhBRPfuzuoFUp7b",
  "key8": "4q1jCQyBcXMniV9PPrdgkWcr7HuEDye4AR6JG6dPYJpK9yCtrmQNCK8gd6D8XVvYYTeYpoV9u1pmf4ZVkob8fMAe",
  "key9": "4xsPeu4hLM12cG5JCTohJXBDpbHNA4979gnGtAERN3bJaAQ6pKU5xArHUvUw6yxmGb2DpvDTK2zWHASFD875e1sC",
  "key10": "xyuN9qG1zNGoznAbR1wHYQpNBU2Lw9wqjoHkLtoK5b5EhZEHtLTH3uEd2S327ePyHQEXLmXozjC3q5hLn8zCamN",
  "key11": "kVD9LfsGAtHxvBVkPJXY4vjot6BTm6UvfM4Jt6kUbY7ryZTtvnAm1ke3Wqk2QeVXxbtR3Cbg82vf9zHMozHXqFq",
  "key12": "4zng9Q84k8okZVaqYRPa5Q5RjuGPN3BL8jsutjtK9EBu6Gz5zLJmnLVL6gTz1eEmVx8PfopExYY2dWtKKrz5AHbr",
  "key13": "2shNsuz4VdXcKqkyxb7GUv5vSoLiYA6DBgdq28ZkGKmQ363FCmpEK9rKbtPf5qMv91MyGESHV5Ztc4RUu9iBJAMU",
  "key14": "KW41MErwNxsQC1ZpC9HbZFJ4Msb3ysLfzT2UWtbAFYECbaBoExgjURJnW9j2oQ3LKjoPT4v6Vk6k1tq83d3Lr9A",
  "key15": "5uvtqSfyQr1bxkGyrBy5Fb9DWWw4PcVzAFxUDM7WaQ1aY6TveLb1ZevC8gkKMihtTaka2Cn3pBA44D8BJ8gneCHL",
  "key16": "3ynP43zzKcHZVVnsc83bDnLMx3aokJHSDPidnJ9XNstF9wrWxXMFTKJaa9czhucaHA3uPjN4R2cKgCsBDyk1xq28",
  "key17": "59K49gbEhMQcomb4AtJcCma9fEGtYpLk3DXYWndgt3HN5ChBV6XbmbeRYm8KfTfzKtHkARNysjnsgfwzUGaRJ5Bi",
  "key18": "4ELSYYFKyiU6fyPHRKBvjervjoc6hYM65oGxbmS7fkqy8XpoGviK8zVrGSKvu6NoD3f6AG4QWakwv5kEwHVz68aA",
  "key19": "3v9ye8U88YkgtRZf247HkSnKbaNeTT2yi3p97wUACxZvThXNHHYR2czsok7u8DV5rSXsnGAnv9WygoShgE2gZRNv",
  "key20": "3KaGND6u4DDAr57oa2vCqr4G7zByn86gMAq82h8dCGhfLV1u3yErNRW4FZ1yJKzYaYTENAUU5kU921e6T9uJ1Trb",
  "key21": "24BbwFaZ6tMypFR2k63kb1WtBefihjLubTFPrd6ttAF4LHTZthgsUNstS5R9v4SJUV1wAYXiRrYeSENezbSqnYjX",
  "key22": "ShoAAmW4YU6Qur3i5W16iXYW3f4s5LRjWAcFAEc8Hm7VzRnp3nAL3UkYGhtD2pveNj6D8HMCsujRW7crs624XgR",
  "key23": "5f5VGDRWy2Na3pZxpM4SzuhkmqXjPqLiTruDvnyn95Cm99xwffe3s4pFaYjXYow4ApP6WxujoRS4VxHqXyT3YKXZ",
  "key24": "2ByK9rpdE6dqxNVUzfZvMWBkkuur6vrGFYKnoFEWeEuDAztZFUr3riHCCVnq2S72M2PifS4J31o2xK8SuUn7usrT",
  "key25": "2K1DHYgw1xCo5TRc1JdKVHRjoND5D4TZXRhCh75jvAVgeGsrxXvoTsnkXFJwPxzQny2H7WxAyx6MJ4qTL1roNAWd",
  "key26": "3a5ZSGGEGFUTS1gx3QU9dTjSDYiXJawCySs7AXA5LyC5tBieGLnfQhXWh86ttWhDfWWomihQ9vvdTQ8nuYSMgKY",
  "key27": "5PzDmaBTPfgjNwyeyVDGafJfBebFUXb4qNAr2AioptbwcciRBias86xXgK4Rx7CUqknHndPmqAafM8wpxkTgdmGg",
  "key28": "JjozWtYz1EUU2ayiDcRX3kPfvRWJY438KJBgZL4qaAsTf284HSEKMi9VzQKNoSrmpfo5A1To4HRyWuNJKHMPVg7",
  "key29": "5v1jD9JNdfys8iLsSE8aTeQJPvzKbzpeEVj3242HQtZ3ojcDuCkYFqkS5RzVwkjjyfXhRaFd4HSdmNMsCoiS7GGR",
  "key30": "4XgcHQbEQt3hs8HHQ3Y5Z1wJV4d8A96dwdcAYKo2rWNHMyCngqVCtJ3EGibS9FXp2NHsU5wu58Ghb5XQrUM3ZowR",
  "key31": "bBCBKyLjPi9oxcVGhrEKj1jNjvpSVihzyCFL6LQbtv2VyFZJN6XYZGW11d3U3uGbQ5epALc2hd9D55UGTyKPU8G",
  "key32": "2pDA3sTZUtMBNX7dspN8zkxB7BdraGfzPDGxWyzp3wQjrgJk9aYm2e36bGgaY1roxmiXEu5ZwsdnQcwzAfTAAbf4",
  "key33": "wqJs7z9r5Qcrz28RmZwajK7hLJz6ZGvPXpT43oFPCLddSnctWkk3LW3saDFKnnX3M7bA9FubH14vLi6DuDthLAu",
  "key34": "32hdsgQbpWNR1s5FUzFLnNmGLHNWnGtp7Ag9bYcF3AsBTMvoGU52VaZmwGXTKqPmMUjNcRqUc6m9JyDHHV3tCrNe",
  "key35": "3w9prXVq6Awh53hzUqEYFMc1c3TKFtcB9bcn1BkQCTETTdQVVpnvqAX7JJRC6TUKZCwFKStMyePTGsPdKgAd1XK5",
  "key36": "3qMz4wVKF1hxENRyvu8ijnb9o86A7scEdQbesqoLZn8fQCnnH6g39kgdmLKMHA4oi79UkzU42PE7CFwaBtys5A5V",
  "key37": "2J1Rj9GmsdYjgiyf89S7JKajwG5biKa1H7LZkrDxNjTenKFL7LG5MhgFK8SdS5q3MW63ydZasrkGqxqDH2cW19P2"
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
