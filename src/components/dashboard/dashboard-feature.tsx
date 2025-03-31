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
    "4dNivrysc4VP9Vg87o9WG4CJoDfZrt9QzsnyGNve4e1b8Jhq5zyzpybs3RCf4TVqyhU4hDiwLZEDFM4QyGj3EVcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jZSsKFRzyyE8x8Yggq6Y9vrUHt5cn5viFVr63or45GRJTnMaoejfdegzwfWSsVbB2LpWBE3EDfhUjG7FddqAQtv",
  "key1": "5kVxbcbt3uD23YkQfUtWqpWSYSrRaHEM9sCcH7PSxMaB2qpCFZ3rmCq3zNuE62WwM8dDfFbFXhQzk6oWhbDMXS4n",
  "key2": "3FTevVyR8PZtc2JEApoeFG9f44B4Qvw1dskRZA8Q5A3fvAbUM5yD1E6qutzyzcA6MhwyYfFAo7auv53fTMavzabY",
  "key3": "5zMUBhQjs5PD3oi7P38vyP7w1z9VvHf3aCnmwhNuinyR6LGYet4WnjrXQbbWtbva4TdTAnxiQuLyWWQRcdYNNFAe",
  "key4": "3JqvHe4KL2bLCK1WmmdooE1diJaCn8SYzffZBszTNYFo2nECkNHEbrh8YCARvV4pG9wGVbJFi7JyJthvkh9tDEHF",
  "key5": "31CVmKLW5NrJUUDVNHaD4aGN9ygxwJvt2xkg1CNzyDNMhhM1yBX8yZz3hamBxRQpfWuTec1XYHcpJ813nmDsJpAQ",
  "key6": "4Hahr6MMNWMBXLseNjzJk9UvSZnRfYRRBYGm3aGJoDQUEjqm22FyS7UGZXw631ws8u3UB4MmeCofk6qZFqV6yzvV",
  "key7": "2wEWnTPswchZmGCFKHyEEfjL7Cr3MBCZpUQM5PMtDhLiwH8UsLgAjuCiKmVjvGiaoh5KqPSYswVZ76PLizwnahs9",
  "key8": "SphdrRtuyFUQpe14cVj6bD1BSZyW3cFo8W8uQBQFpWtg4zJYRd8J3MxjZW48Vs7WsExr1er83WXRZ6XrVPcN45q",
  "key9": "247HK7barBVHkNQC2YxbfZP5izM8E5GX9nEnhejgxjsNbzYccpVgGTmS174A7R1mHzSvNrt39dihrPh95rR1sYrU",
  "key10": "2gm7VfU8GKiC9duxMPTZWdfqTKe8vYpy65ZjdXLVYJbW4CiRa9TGhUihBsTC9bQcRUcu3iWwaW3jhUqqGsbTUZnY",
  "key11": "3X4cGMwxEKnhYfptmh98xpXT9mYd6r8Bvw8UBz4vmKbBuH9bp3Y8QKG4FN8nXEcNqeetWSN2ueqPix9LbSyY9ccf",
  "key12": "4hCGFGzFLh9j4LgYE3MFFeSB9CxYQNkSryA1Rn5Gi2PU3WhXEXLHsVxGqGJ2ovwVToZEb9ZXDFaa61yY62UGchfg",
  "key13": "gX4vxsB3Ri83xudpm7WQLvHRvSZd2GNTWmz5BVLn7WyXxUabbUwsNUfhqDTCjVKQizfxJfgaXsafchY48z9eW7N",
  "key14": "2eVQpRz9AdjByn6ydBcegACMcgxk9kfuQsszvBzF7omqmv3qYjQrwv6Q5QYxKN3ucADdRmSN17KuXxhFTgAAoJKB",
  "key15": "PWrB694ghg56zkpP1TNPJkuHjGKTbtJL4C2X5RM6rsWuK87QGsWZiAPenmSMknvf5PdD4Fs5wKZEfFfwsb1eHEc",
  "key16": "2n8RkG3cUAy6jQLGQxJQZHY9nX6wV5ALMqoMuyGoMTGRjgGfe8YXKM2FecD2G16KcxE1hmigr9qehRwYmgCW3cmZ",
  "key17": "3oWcUHPudu4XbMywqqERxCC7CPkuYRdN6Bu6swpoRuPY6z3aN7nEyrnHDCcxY9YELGBo4pDv6XbkxzWpSpmn9pP1",
  "key18": "631yBuLRuzVQ6SPuAcPeQC46TLKZFKWXcQEmuRaUpcTeUFt5dDcFmWWSwnq6qm2Vhc7w4ZuVbZWxgvirz5wE4Ksd",
  "key19": "3paVd9obB3dJpyaL5Qs28DjeXZ6ezJDxDRxyxgp74kfGS3tHVLgJhLDwX4XG1TSAtBBjePieniJHqkmYMg7TPjeK",
  "key20": "5gw3FHpLLZpvvkHV7K3qKWKjTdCGgkmE65VmcPpA6F9rNywi3U2Y1YpBxffdcppmvGqWjrkm2WNj5A3NpMBowiXs",
  "key21": "Q5wXpkzBycnw2DJUdfvFk9iWZxPqhJenRaeqN1eTMQmdMDzkTrhEPLdq1LR9e4skrfp1jWhZamzYwLaP4T6MYPw",
  "key22": "nmXdtXa6psfTzizF4Db8jYT3WEix3vDsNSy7WUPSdw2dbzxuDDgQmQNX8ppt4hUSmPXAjx8CxgPpsQosuZYLqXT",
  "key23": "4THwo3GHXUZkyPta9sAyw85KuXYFUvAjYo3zEV8uqn6VuPu8Fr9VoocowSonU4dbVyE5GcHsurRDbZLvmRK7Shoi",
  "key24": "3H6cGZkuzRuWsgj9QpTSxJ49ediWHXEHFGZs1hhaCT94gCsMZrdooKrVm8UH1FJVXyugM3hBzYneKWXPBHhgWXrD",
  "key25": "3uLd8YWS3YaYZNuGwZETq3Ygsgw6GGeQKuxVUyNPs14xyZTbMVXxAmx9K7c9jgvR6Tgmm8tV5W5z2vxyHfP7eDA5",
  "key26": "2nz321kVmRuuXPXktuvuetvPSP2EnWAivkApUgSnmw36aX31Bz1BLafrFZPTLDG8Kd55nCq3RB94ZTSG9n4EwGQt",
  "key27": "4XxGJXEprykbyJtTmyGLh8og7kmSGE57eW5sRtukMwAZtfwbRnmCx77X6ytPET8TraCrncupY6kZ4wEoBTFW7Lkd",
  "key28": "55QPc7GYTWucqjnM7G1rMGJ4aLxZVoDn32XzG7acnaLdGQufYvr82jFn23nvsCk7e3sLgkmADqhGyNTwVUnavy1X",
  "key29": "KrVpyRTPM9WpUDcDTWa4euZot7L9MHdRFcofXWhdFnpHcAu4uEkvdwaggrr9vxpWe5HBtPwWxWiLRpdyM7n9E1Y",
  "key30": "2RUQUzYSxaDgwnJACyFTJpiKjgPzVWsqZb1ZJ2ht4mT1bkib27k6jCS2SxhmgoTkm17c5Z2VVrfDsnEA1WthEtmS",
  "key31": "u41uF2ZfnqEFeeaB9oJnsERRV1pe1VBvee7BNoMwqq8Y18bWGfMHJFo5gKnXWrupgYL2vuQSQuPEVTaUK7qpxzF",
  "key32": "5ULy9XNDGRfqjC1SQvVs7pxWmj4b3k9V8braDrqjh7TeGHzQWCkKDjbUw2pG1T2V4t9n4ovkbNb17D9BJRMUfizL",
  "key33": "dh9xqTQW3G5BLqS5o9D6hRRxbjaxTgcMvRMut4f889umP8s4UJZDZKop251RoikNrheVphm4ShPNxcoNfkDzDKZ",
  "key34": "3p9WhLux6b9TJVZxny9PmoVJB5Xp37CwqEqiEigTjQt2JnfxLEKf2gHoBchdSBETBcseTWixmrnGv5Lj5LbxFxKs",
  "key35": "4WgChYWL6Y6Z69Yd7awhx2TgfJWGjZeyKbkymdnMEFLnTLjop34mxrzCkazR8GcHwgSC9PrRa2hWf74rvj8LZZnm",
  "key36": "4SCEx3M2WZUatLWbYBdkXjrD76mb78oBpuszRezuceMEhCVGf24evTF7X1GBtQR67AxGRT2AzhhQjncWcMa9xBJU",
  "key37": "5BZESwzDB5bjLdNesqN7W6JMzgf1o7VYps6MkPzMuCcyzpr5wvidbQZ1ZsGTu3JY2At35NJrpJMMnfUfjAr98G8q"
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
