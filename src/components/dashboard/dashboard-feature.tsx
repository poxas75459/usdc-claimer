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
    "4duuQEmQRek7K2psn3gSP9Zf5PKK4PAgc4pZoo2SCp9DaXdYvGzv56vePhbtuB2aQHu2NicBttH3o5BrMEheQX5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WuZ6qGAjJNRha1kEM7F1QBJQW5FGp6iNB1PAo4cEmgQ1YZutZqE4ZdDPx5WQehGipSEiu8VjXC5ESoh3gWpwjEB",
  "key1": "XFTRLTStpabbGfapa1hdV5Yf2YxMM7RNGumbRPhULKji4ztoFpJCfqXWFNpjhRjh6KnVANb8CPf3eTTwAc1LaAx",
  "key2": "Vt3KpLVBnMFBwdSwKPuTuv949wC3RZXpTyXEMKXLg3NwczDMGGgiCCoGnEqsHUP8tv8xEwjTDFyYSSTk7LopXiZ",
  "key3": "6BMpFxdWhKee4x1A1DqddrsUFsrVm7EYNd4bHodKKDYnaWt5YZu2kNYBfJwVAUqZ8gnwKWgBTRcrZxKfEKXhoxR",
  "key4": "2bk1kQNFufCRxmvr1GJ4TqxYwJ8mBzCX8mzm4ESYd1d6ciwgvwE3aL7S99anZ6Q1P6RGN7v1DdhN7A9L81k2vvA5",
  "key5": "65XQxNnyod45pywLDdEK2Sm2iGso1JeqPwQ9FYAapn8Txsk6wmBW2J91nbX97EgMuH2TqEXgEo9Jd5JLLtn23UUs",
  "key6": "EoAsFRp5AcH3qmagXQcDNYVB3P4nyojut6L4hRdQDZnHpQncc5WSbGvLhVnc8vP6eiVg9yzsGbMHcqApthCXDpG",
  "key7": "3yjXVwpkse3i64YAoKwZVWufHkPSpgLr7UmJJ5kSJgBMeJ6b2gPdyHq3L7wJS5Zo2vh5WuKFATdLEG1vumGJjR6b",
  "key8": "5ugE53ZjnFV6VykzX2D8PERKD9wfpnrpAs5ouRboSvNSbMxdzaN5TicMKLAPGqSrh42DLUyknmdC3rwJWC2xh6hE",
  "key9": "4zg8Y7PgRpMkU45FG6nM22Rucq7vm226acN1t5om4rQvUhogjtgUZMVaokSmgpyQZGuYLQNMZEmqhn2rYLRPYBHY",
  "key10": "5ryuJyLUfpV7Yh9gWi8NmrbGpJ1aXHGARLJngft4BnMRBgRHXThmf5QyviUYrNhRRWaFSmtkAxLTKkCQwTn6GwhL",
  "key11": "42aMWXgBvAeQNUdXHLqQzSntKyhpmJvmtoAKPgCxmauawgbXxtzsHbemFo6s6FNs9ZvoGwRkdmqwUNQ3vHgjc14B",
  "key12": "2CVdgzmBQ63XUDxwYaLu9DRDMCkNqUpRGhadNc4NB4bkM1m1tkbviXq92hor6CbvHbkBYBmC4xETdZr5PVcEjzFA",
  "key13": "3mCEhVy6NRW6YvFYkrM3mzB6JuxqbYN3CUDwXe9NLybK8vS6rWgT7UJv2GneweUNMY4SR3eZNRuuh6cYWCVcF5xx",
  "key14": "4EAxHLkMrS9AfcGCEFdaZX3ACwgokc11KsXqqMYRpJYTWy3xFQVvc3fsCdnXDF8FMtAnFrCgfrzCWhZHkFPKscxf",
  "key15": "36Y2Kus4R4Kn8rbxJV5hV82DVU2rUu7SQyGJkpZuZ72H7DmJMHqJBoSQnqeb8b2PfuoSyDLTnA7id6M7su56BVVx",
  "key16": "3xeKju3AxA7XHhzmwJ3q68seHkpPEMusMdVQKejWpPUFF2reV5w91dkLGzbosXiVHqrpGqxqqJmPpw1rt11ym7A5",
  "key17": "rwTvUwmUsL8RzUQRWCfEPiseYRuUhpHtqfZMkvLXJ366uTZ4BHYVySZ5ZNJssW4vYtPYy9oDWDMWWkKLddewfMq",
  "key18": "5LW4qieJXcyW72rZtYEP4jtvMZQSSyXUj7rc97yS6fNXY3Z1FFBBjMRjMKcbhVBUapnaATDpiUQMCXx5jZsz7UAT",
  "key19": "3Qt9fTb6LfxDW7tQdu9PKuxCe75EsUvnxXyRNuKpjaeszJruvTrog2RNh4ZsUqWRm4B7Zuf84gaEWMcuoSeyTjMo",
  "key20": "2kadcrUhQnkWnaKT4HTAvVT7seWGdtTCbuqzGz9xqb3GY7GWYKmQFkQNQzyPZx3DUxnhdVo3pp6pU4KN5eofDM7T",
  "key21": "3AWvL5wzzduaFjH6j9bVTPwSwWKbPtYGAbJr3ucycEYciTuMhaMSQvTxiwgpeaDYr9zNvKUBfNE3MPqRGsHQdXg8",
  "key22": "5iQLAnrJTbohdRnMU1Hk3iKrEPC7dqTfeonUzDE9X9e1NscEmXwFLBEXSz2wmiwxbH3JW7buzQoMkoNVEudMyM6r",
  "key23": "5D55M9ktKHwGZ44nFi7NcTXVn8tXeJ3tpN9ho7rjJkFDKgcniybuyMdZekNGhvGX6RtqCaX8VpRBPtYj5jbNuNst",
  "key24": "5ujvrPsUMbHfojjnAxngrxeZG4XeknLaLCRmD6bkpFcBRo3Qy7XmLmAMA2vvXuWzDv6ciN8tpC49p8HXweiKfHHM",
  "key25": "2ysHG26XkJxVM35zJceVHK9caAjqi1SUxZs2r7YLpNbTSRwYY3hrNjkiRv13MnsCfSXhV4KjUXHMMhZ2xj1xJLME",
  "key26": "3mqwrdNxvpHPFzpqrjKg59sAhJbRdqVCQiHjB7MNg95GZEaUPFQJV9Gri3LeAP88Fvu6m58gzW7QConWPJK2CSHF",
  "key27": "4XT5XYHjYdEMYtKAvfRuZHUjMUVkJv4N5JrriFaYH1TiK4Nz1gp12LZoiUvX61wCytWH66rG2CMWZPoaYfp3t2tR",
  "key28": "4BP6n8gifc6DxpDMbu2Z5Kiuadki1cPjS9QirxD9HVBw3Ff9zcnCYsawpAkT76u8pcByHpYvk6qZ5WR8ZTL8pQ7Z",
  "key29": "5AYdXtVif16n9M82zWHf5sUqyQAxbdif3nwtq9JjJrc5jdLUmkZMnAE8cnaerC5fdBbTfqWHe1UDwJzwALYwKeFS",
  "key30": "3LkzFGFMmVx1QHYtTuSgcoKn9pceArfAR2p1JhAH1yMWTrr1ScR2yihep57GbFvs6bxtKWVZ7E5YF2wzHrj3bHYz",
  "key31": "orjPK9udZMP2ujBv7jwLbFRPYBpQ5GxzWGoyZ7CvJnXJvkJLx7oL7v5YR1ZSQ3CTr2ZZhQWtTCeVwosuCdGWSnA",
  "key32": "7fK6j2yJ5JfWj4FWYrcq8oRaRHD5zU6a7TzpjTiCdt5SDNCn54ED44VtC94i3xYmeDjWVqc9yg37YU8pXQB8pE1",
  "key33": "42SnetrvyL5WbjkgMRn6bK6htZNgkp78fNdoxCQHkL3hHwbQxksvrDdEuypWB5xbz8v5dju9rdu5NRyL2YuuH3PP",
  "key34": "3TW4SUJi2QaB2NjA9MkkNFTVE1k9yLA49xF9CoR79eGNhgC1jmaHWnMSnsHGTs6ANKhRARbddnbL3XhNHKgSTfb1",
  "key35": "4xoeFwsb8Zz2CAuokhKFTk5htot96QunTXzPVzZQe8VMbu1yPe4t18kx43bh9tQ5hWT5fFSpiXvYbdJW6Ly6X8pE",
  "key36": "WugWCF8oL2nQCMmmFVGExroFVMR3tvrCqYnf6XzDVRauNpvfRyhvvoJJoSmAfVxr4nzCuUdTL2mhs9tPhAGiVy6",
  "key37": "2HnUqCGnE2qSDAwtNAGCRJKVpt9xkwQUuMB7MUV3Tu5YZ3gY5EQrJEGqH9aTH54qh8kinrMeQrUMswKFGjN3XqPt",
  "key38": "5nJrJeddD9bn3biofCFSF9LDcc2nuh5z9cNBPWDXqobzNtr6VMDwCgDwDFJBvS73vmbi2eoaqfgHf3RmEU5tWuUk",
  "key39": "35STr26NEK6VoTbFahBPE3ypP4vucyxbijSRFHjNgRPfW5jJVXk28CMSfFRhkUjVrsWbGHDXkyLo2fQeb5FA7pGZ",
  "key40": "4TuNexKytziRiXshe4KUUiivYZSiNxmv3Psvkm8tyYHMVu9iYCguhuJfTTgKdFvKY4mHgcbNCRP1jdihFTk1jqUg",
  "key41": "2x8UxPEzgeeqFeG8LaLSboZJEE4HZse9pzZCGeAK7FmgXqmGuMoMTMgJ6buT4N91WqYjXvXdf8hBiK1MgruGVxy1",
  "key42": "3fxi98oqGy2bm9t5GZEXktBLHP9gTdVYdz22g1b2PcHnuvatxS975MjesBh38uviLP6yqsCQAcvS4AamukhAyNrR",
  "key43": "4aRbDYhFHxNY6uQKFXomgWHXL8Kx7A8ac1dcXCCfz4fwgWjvHuKwJHdNQH7KRf4og4EkvRL3oBxyDTTRaLzN5vkD",
  "key44": "5z2QToizAoGbiMcnwjM9gwtfQ7xshTzQUZBzXPRcCmLwCvu2zVHXdUrs25Q39nzVLVeb6vA3nJmK1zsNFNZMJbF8",
  "key45": "3rQaaeZPk2xoGCfYWucABSvDRHo5vE6Pq93TVwpmfMiUBi9b6S11vMq2xoxmNHtoCgg9V42TWNC113Yd2cqQNoAk",
  "key46": "2sxnL3dg1mYmLMX7pWTEeF9Cpme7AyXQsGN4rNjNBjhZgNvy5A5r5vfDkGbgfi581SGCDSxzPEfNPBRteYkkPoQR",
  "key47": "5vuLQCgktRKmcdbmXL5ym7s9nw5wePoW6yogzWgHGYsR7gQSKvrtiUHHM4nckuLDdLUsooacgtCAhCWrzc33zMGi",
  "key48": "4Vw8L6tkNNcdTx3cUgPWaJjjAdZqCD3ZcJhqvsXWreb5Ry1b68F2dFfsRJjugMFg2i1WZvrkebKQoy4UpbbYjc23",
  "key49": "3H4SSqFEL16nbkmgPjK3Gd6xUGMbW19UqM8gdYSAgrvQEuTF7LU1ficpLAWsNYgJQQrTfskSKbygmDEdMQUNjPHi"
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
