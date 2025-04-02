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
    "2i87gtiBCwVCRqRVbyBCsqxNtWRbGAgiyaY4uivbYEMo5KVtRjeYj2kMh5rQsSuUhaT5XJN7hLivipHg2dfdqu1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KgGrpE3MuT6S3UMahu3MNWsXJW74F4NXGBa7fMaBBCXYN1BuDShWv79yvao3zvzTpSvvsFufqNaHWpXsngFCeqS",
  "key1": "2HCEFuEtUubgfFqgUqWLcRCXTzFn5NawegrcjSCsATUeddFtzHLvb2y7QjkjtnsnVYut7cmjQGqFzZcQ73NFcSAr",
  "key2": "2i7dCs6nvNBZAQVJrbvJ5aA9cXDL6T2etVm4YEhQboNrpfrvEj1MCDMcc2Y3fepTGb4ncbY48hRBaEDseUcY6scg",
  "key3": "G4HRMXinTqqno59wHTL83YLiYs9eDPLSquU7UQTJNu95183G4PNPL577Tem75Ktisee96bAqtRtAawLDPDMKJkg",
  "key4": "658gX7ZkgrkoX8HdXgysEH8aeZJ6heDLNs3W3n6dLDD7M8mMtUMKvLanK8tquRCJVpUwXVA48k3UJGNrZkCmoxh1",
  "key5": "62VaCuvMoE3P68bEUguEdRFuK4hvWyJhp2ypFkCaYj5JNByZ888dhRFPNmEBxx4jWh9vA4ZVxLZ1op4hNbuDzZbE",
  "key6": "2vE177KW8ZBDMMfXJ2JXcvRrQir4qYg95XytqwYK6drpA5fnztGDYnZMJS1kgf2qHRsHbEzHkGc7oWmgmJ8XyGV",
  "key7": "48QXthZ8RvrRiyTvZrvoWkzhDGYkUwzqFwNRTV3vVGBMnxf9Ar8Wy4PTw25nVkkv1nPvrspcfnDXhR6eu2QNAKYk",
  "key8": "5zo6UNhYUNfMC1pdSfsCM3eFq7Ads9nG4g2eVgH7MpQ7xMCUAEZ2UcKscUZdXFsGzim9VC7eprG5ftKapSygaWTK",
  "key9": "9U55LADdP1KdZN3fxgCD7Mp4wZjmXZySdbGKyuWoGhnYeX1SAmz4Cbb76GyNjjYWhAUXm1L6CAwsPG4e4tf693K",
  "key10": "5Wtr6ZvmsBXjiTcjgZCjVA3igewxhDLDqvjfRQ4nwuQj14r58jsf7mYaBDAxNH6pug8EQzrKBg5QieKFjRkadQe8",
  "key11": "3fsrfhUMpB6VgqUUz1c3iph4s9wX5EMsVokM3ykqBF31pwFkZcVD34XQpTbX9NTjRd4F5XGGf5FDnGTSaKPnrsvH",
  "key12": "4Bsxp1qH1CSMwStuv88E8rYrEZ3rAARmWodqqHqNZ279U1kytantfembNTsp6JGMtUJa2V6GjHdukHE2C3pkTnkp",
  "key13": "3brAjRArRYY8zMEvEh2WborwPMf5dX6CZSaF9j8wF8jvm2gA7MT8LENzHDShQ26C3rX3Ct8TtpeDwaVA2MBYm9GS",
  "key14": "4mXULfQFgLqs1x4ZFboYCuCkZkaF44Dj7PuQQ5umhp8ucjTBBJz7xV22kRwEZwSHoDQ5w44hfPgD5WcDqgc7PUqR",
  "key15": "5kC6s1z6p3iWBuLKwG2vjprCiK4AkhrGSk1FBPrJ2unZM73LHdeAgxjFmnD5ghBoNfePXQNV2EsYvLQh7zEw1kA8",
  "key16": "2phJuR7BBBxzkTVm9KEbpBTPaiF3UcBfdQ2yy7tXNrqZPg9teJxwQ5rfAgSvvWeKE8t1m7UwgqQcbdefe343PQLu",
  "key17": "m6PATvPB7zuS1rFsjbKzqaPC4HG6q4MaU8vM87zreAfwEkobEJJEFJKvfv5abN9dCKAZjQSPFPt9pVAzmVAeoME",
  "key18": "5VqdLpSWys2a74sAnGdxUQFJHfYBrC1q4DKR3GZyo4UCUD4V9GEz5ECFZVrxM6JssGFGPJEc4jPPJ4i79Ct48rPg",
  "key19": "4kthihwu82fyLcNPaCig7FxqSCMS48nje8eeGQNruYwXoy5FuvnsV9VXTyr1kQDyvBzTqdB5E2nCaACL5wYWTfgG",
  "key20": "2KAf9qTi53Bp9TtmhjEeuvEEwp2xEJnWMXVP8czdjStiVrw5k7DMjhyAaX63DxWPwbLjXYNXVxJLvqDSPZ6daof",
  "key21": "2Pde9pj2Q5ec5LeiViNe1c2KPeSFvLfecvMF5P2wMP1EimDdgub9dKphQPkZ8rjiEs3yecm9g3LofomjiL2AVRnx",
  "key22": "5D2k9Qwz49d8sEubXPqeMrv7EyuBqk1TuLyfHGYUgHBXqMdpcirLbro1mv5A3G7w2XNnZWYx2ja9GZnscjTt995v",
  "key23": "25ZmHxoDywzikYRCozP68davGpPcFxqjXVp2wLqmq1HjcWcDuJbpwNezNGwUQCNLaryDoHkxKH8bdRqvg4vd2Ki8",
  "key24": "5qq4hq2AsCqwGp2MEUSFmhA2t7Ls5saYmx8nS38Thm5enNez1vveHFxZpNV49G1dvzfzPJBR9wXJJbXRg6VNz7h2",
  "key25": "4hsmGfwj6a8zo873SyVpvinhySbLUosR3ZhkiAjtx7x8feExL6uGqPRGyNrSxRECsR7SBvsUMkxnKnCPxvmvNN82",
  "key26": "56zh45fcxocfosXZGqV67fzPM4cu54g7Psozq3Z2QuHR3yhGi2nRAfm5XGgk1ioqGSRLMkd2eCMfDLnVV2gCFmtz",
  "key27": "gZXqWNVQSmJiTthoFBFrWRYTHN4tKcy7JgBbZ5ZshtUQNa4u1JKTPpB9YwyJdJDirskBfqygUVRHfCXycR2RYp6",
  "key28": "546ym5QXfxRWmKJvXgKUUAMKJarDs1TzT1CFrhBWLmm41tDLkYe1tZhCVk2bfoZSrUWWkWst7V1oEtgjjxnMBwEK",
  "key29": "248dYQHAysRNRkExNduejAnajpuDn1uNSPWzD3LjocTbZqH4LJQBobzCGCCV4nDazauauXYn7EoQnxePA43Lyoxh",
  "key30": "4S5FRFVERUuY7GAQk1vZZFfTxUrunvqfTeSF266ktAtckZ2KDazyfUBfJxsfgdCxTdn1R3GQ6EY8yCZfp9771g5t",
  "key31": "23UTQ6cME9UhwA5XwUxQz8xnhfo4DnPSjyGLbxkBZzJVu2jUXcR6A9UdxjLJHYuapEcZEJYjGmrJDj9kkajmnd29",
  "key32": "mDyLmJEqfUd1fbUHC98jLX4u8cMTWjm11FXc2zVESLPQnZr2v3MBf8VvqiSdN6KJ9V7oCt6g16Gm1whyzZmnwHz",
  "key33": "3BjWEZKPT8ZzCWhYE3CuQ6PyRv2QbQj4GRQKeoMDo5RpS3XvgkrFEnjzFkdQK8cbehqtvFWjxRRztyJ5B5YPFuWG",
  "key34": "4u2c98o2rCjQWAzyN2X4sRFDxsh5D2PKkca3eK5yMuJEyzuGNtouZYLrdAt1Hcw2qJGkejNSuf5RFr6LUB4sD1zW",
  "key35": "5aHkvRuNR7SCqcxH9Junqte3sihprrBoKyEmpjQk7QgLKUb3fiCDfZZTzYdo7EbzKLc6yQvLGrXWF2xATYr4PY9v",
  "key36": "64NGhDraTRqe6bJGb7h634GmG1bi6gymAyrQe8GUVQx3zsNcF8t8GML3zXdTvZVSPFE82r5d58rye3ALytdmgzoM",
  "key37": "5QtqHe1EiZiQfZZrLzNyf3mPMtyiLiRs3JtpJH6GGLZg3cCfdjYUcTo5Rzk4xZxNEepvHDeXakpvjqKqkfx7Z1PR",
  "key38": "52a7kfxKgjmw1mqu5vcy4JU54f7F2A29wTRPaHvotspw72TXj3MoyMFk8on7rxPVpExBJKsjr5zTpH6cSfoxkhN6",
  "key39": "3mdTyd1d3CTZYNReUju6NGLUrbPcjaqu6yk7sbRbvXRVxobs425f8LHwpgsZDm2NhgggTMBxbEpNFf6F88qYGwKA",
  "key40": "5rvo93T8ybWgrHqwsLrDUCiXyHs8nNG43QzY1CF7vfeEBjxUMXQNRWy1j2sZDZ2MDHm61P46WGkFFkR7mBB4Dmbz",
  "key41": "5YAZ6qmGQ7gqHL6wwDc8w1Fjt5Fwvm2vpLMeZkHRcBCmH2vqiHBNQ9Y7NkCW1Hgyy8zdZWBgNgmeste87A9M5ZrD",
  "key42": "5BhpYiPL1YNn6AwNSDm6DrwfdUjdHZBsGidrTQ9QHNdz9Wv8w756NDuXo2PvrPePdGpopJV5wiaTi8nfL9ArHk9K",
  "key43": "2MgXmwhzcMKxEs1ghJgH8rtPuSRMZjMkQoeCL9YUgXGr78gZZwsa9x6Bm3x48yaPvPWHdTFRWwSSwWiN2mL3JJkz",
  "key44": "4Z5N1xD9ikzsRhDh4XZ42m2GRxFZNqb3Ef64hQr3KKqptm4UP4oygM8FsrRPgsdzym5if9Qfr14VNjSy2BUPgeb1",
  "key45": "4ggpSptMd2Y8Dz1BfSqSumUmzakgo8kD5N3v7hmHPJubwwbZA6L9MMUMjrUroEkNHiHV7FxT4wNuKd7HmUUa7mGK",
  "key46": "fEBWmhGEuGxggzz7NXEFFkC7Q5r94BAMN4WpQe1aAUy1Aswb4ohxaULZ71FSHeLK7mkSuZM3TPkehABrYapGgTM",
  "key47": "59E2ADGjnTfLC1Hy7KBdYfJfaYywMpgSwbJEQejGBsxVrYHadb8Aibk5qmmBPAU15suaDB9CwxnAY3Lq34ACK6Bq",
  "key48": "X7ZGEUYuhxg1zgTVHKYQeRVP896kmRnCNXMM56aGBthTvrcbgSfhDUdQzKjpVDGXzCzpwXvSDWCV9AZGEGA4v7M",
  "key49": "UqhaEaJarghtZtSas39kee6xTPokUrNbKW1DkC8AtBettennS4DeiFx7DYmHhc5WonF71VRrFfkA2m2unfcGTXG"
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
