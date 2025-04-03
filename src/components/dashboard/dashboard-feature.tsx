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
    "4QaZ6gWEFjazrrJyrdTYHSGozWr1CxtRNGRieCSM1CuJydz6hEthvE6ATSCiPY5kmNtX58ZHndJKNofzHYYTLS3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jE45PfnokTo3dX2swsrwjLFiVDNLSSxiRq9r9v2gbntvymZduEEcvEt9Jcid7XQXibBGQmzmRDsMatkdwap8UWJ",
  "key1": "3xVv4FZ751x9dEehatb7AzSbcZcJB5y6EsxiayErSw4FP9qLAQePM2AWYUCmrAqsmt9VkjDJF2Wap69WyF5YmH3h",
  "key2": "2HC1FcRCDYscsTCNHWFTWikf6BfVR8EuQdjVyTwp2qvh3WBmwFupM1mR3SMty7wVgdPjtXW3yFmdvrHWGkVd7hfj",
  "key3": "5bG9W3wWLdwmFaXC9B3sHy3pgbqM6yXACCxVi414nNDK8Lra8mjNRx5rXKbZfiNQAegVfTCq6ARRJVSakG46Tno5",
  "key4": "4YVqePqkLvkp3tm3p4473gckgK94LXJBJ5V66Y9paBkPunzVBzZ8qD4yJkVKgv8Qk1djo2QaecUGtmWNXSahWsBx",
  "key5": "2ZB6SRLEbtj293fDtWQyUgEPr9uq1ZhvJww8t2wCq7DumbC6PfWXNbRUAby7JnjGDHcbMcgfthGBMeBtTPWiujbj",
  "key6": "5e8J1duCYETczhRXGVuLiPkAFD8zUEPwe9nYyh8QpNYzLjTVp1gXU3PvuzZDL81Ginf1ELFVKCscimBAx6nABag2",
  "key7": "anBrkX42QSUJFoZKG7EPJYiTprufVDq74phHdR4iZqrpMTvdTaUhWfKXbKYHN3gAJvTa878vtDvwoZWQY4vanQ9",
  "key8": "2fuVZf1kfF4SEM2UJYBYfxgYmhKg681gntoMiNSDMzExdYgqewW5mqBAJYsjUFxnx9FERRPqahpf3zU3BWDCVGQB",
  "key9": "4rhAsRUuQ9UqVMRqgjM1wsjJPCTPSKF4YKyanyfv9xzhBbWZ31Tqs4wTd68X56KSTzJruULhPWiGYKVuBpvbroh2",
  "key10": "5b4X9vrnMASVGnyH5zTjV1X864GKvhwMuZxtkec682SriyEwwWLKsNHxJLQ2o4LmExmYLLXHJEEMnF7wr9oe44EJ",
  "key11": "KrfgcRJfzMZEixmjEAefwxgXjYrLUzvSjvoJ1z2XxGeSaUU9mRHfgm1Zm3e9MFMFYLnTjLUnZtp8WFQxbd71L8M",
  "key12": "2rwpRp3W2ougf3FqKTFPUWM4rgE6vfcVF8NiYMxKvtj5PfdNCYDLFvDQuuNeg6Ws4EFd6b7m1u4m13AxjL3wcnzJ",
  "key13": "2UYq8e5gLF5Eqg5PgLLfXaPgYPgaX1DZ38Q2gAxbzJDV2D7d3H8a9quUrUrHBvkmMCG82azEpai5pkEZwMcAM5f5",
  "key14": "32tPBqyjrgZdJRgoW9x56VP3EqomS824P6f6zena8yRoizimwtQyLqViUgwC1e8Y8NuKgP8Qb6kyRUS4JWCepshy",
  "key15": "2echMzzqkLHyLkE5B3W9T2uvxXdEw478YRvN9t2V4pMYJQPZ5mCGwj8uurrXC12ZR7yVVxvqSh3dw7TXfUoYJxMc",
  "key16": "61GrhUSrLiBbXfHVLZdSmVuVRk1NM2A1QPTbqKXyHEoJqdfpT83WRbD8eT9VmhseVyuYCyVFh3igqP1BmTKG2oVL",
  "key17": "mhoUGyM83zEE4JnBeLi8p7K5BTYZMeEhw1nEavpFgyZkkusqNb75jNQqAyF4e3SKLcxEfASBTjpuaqS6HtkCMwx",
  "key18": "2mP3p4g47r97J7gzdskVheKXDfVSvGuhrCeKugDnijTp1K3vZVXRQJaHPUqCFCSXt7a6Bws6sK6jJd7Ei8uABNPk",
  "key19": "2JeWoXVwdZcEhnRj1mrqHbYV4xfs47teUuiEVVQRgk2W3pbWwPmVA5qnG7ZrCaChHGDAL3ABq1Fw7CZDPfWooedV",
  "key20": "5R95pZeTbaQH68DnWZpCX3VePLJdpXqn6D6i7Yx6yysnqFb7ajiva8KDzu6CFTvG5h6Q86K3MGZmA3PYvsiVzLb8",
  "key21": "vpe8CYBZ9yRR3zjiLYSrF8jnEQa1HyhUmxUDba7zdAMEkGPDNKbQTqHRSAppNb7tY7m3fv3SPFKL3SKUBYMPG5P",
  "key22": "4zrmzRxLVZJXebaJHoYS8Lw3BVdFz5aRVupuHeyg6gqWpfNxhcqUUPc7R5EdiHZV53L1t1HFzv2VHfRi1Biddj2T",
  "key23": "34rhFrCDq7azxv2v8b9c3K2LpyRiscrcP3c2TCPAfhhPTTFzz3dnmPV85LdfprotMfHUUrCDucBfMs66RVW1sxoe",
  "key24": "5iG4drUB6MFq2kxAbzbe7B2ct8qtEmnSFp4eLDNCKj6yRrVxVcfgKGtqyHiuXqhK1fg6vLHjNSkNrYZArn7jeAn2",
  "key25": "4QHjbJhVoYdBduJRsBNwDKxfKcmMREjmSsTbd9txGbQBUeJtmEuJhdCNpbn3uqjTMeEoCHEKeHR9xX9d6YGVpxwm",
  "key26": "4birSbjPcUMCMfSkG2yAeqYmeeHTXQ7LtEGA2o8iznLNoMeFQRR3bAyHdR6Dv6wRJrVApSRCXnAh5Ecfyp7LX3Gi",
  "key27": "4G1Cm5Copc4CkKPJaytayToDtc2kJ87hfGJTLzbMtpiTTBWBVy9jkhj3aZL1wEXwAxX2FyRRq3NVEKcwErrLBH2Q",
  "key28": "3CPn6UQeGi83qhNy3JecDW86Luu2fyc6TQCj4M36MMdksvzJaF9hbsbXkkfGfRP5HyCb3c8vKAWTEFKdwQnkie7x",
  "key29": "2ghs3hhYMj3EER1yS4858BsEnxNfTZZFMHskn3Xm3KrcegCWex2WD42Q2a9FLn8Ft7AVQ7mApAcBqKyX9RhTRLQV",
  "key30": "6588S77yFSnf1xvwCBbYokqGobv7ZPQMVPFR1xmwu3eKszXjztrHVdrWhgbp4W4oyfBcQTUbaCrF4HFx47oR5saX",
  "key31": "4aqSrjj7RukXgAdAM6pu3dU3nWU4v9m6rHHGFH5wAm7HhvuMfAuvuRAMmFnCFDjBBE4d9oKoeEZwyWMNiwx5gkSY",
  "key32": "5BcYRkPrPoLWhfjqbCzJ4n3bZXZp6LU6EmaUtMSUpHttppMvrHz7vr82zuiwJciVEuZWQfJHmsWyRDfdAhEQBfWq",
  "key33": "Xz9RmvaNMR7WFiNLH7pL1e9nitEF3wDPy1LKeZE7oukPsJHtbENLXAc29j16MTo8tyDRqWweCNq4x1236mDCT9K",
  "key34": "4MHr72j8kpbtFGKEyqHti1Dx9cJnvrEBmBKmuCw7MVFER6qyBDSgxSVFLuGytUcBN7CKbQjTcmbCNzowjRmC3Akm",
  "key35": "3zweduhznUA5YJNmeE9DaoWcDSTrFbS92cFkCBCAPi5v5B4RGShnHMZRYWGgAcNWoBzL5EsLZX1EnXwLwmc8wuQh",
  "key36": "4tPVvYPg3LwZsxNHX2j1xJbSJbr9Jkfekz5ybhE2V3z5tLsccQWsQc7TaHjQV5918V1cqHVTPafZ582yevH2JVou",
  "key37": "uNH1PwnnZceKDv9qEbZkwszpo7yvmRHma41JrYGxvuinZkvk2BRYxisjkgD42mTz6xTvJqFrXy5FbifHmcCjQED",
  "key38": "25Afd3Ehx4ai5uY1GCF3uEoe7q3RS7Uvc257KpVDgEkjkmFiL4MoUoUkSAe8wWqpFaLuU3pLba22pT3xQVmCu9aX",
  "key39": "y3BedKPMiTogNgZgebHfYWAWc3x9UJQ8sdEKPkYTpiRuLnvRWZnXBcT5jHkbMcjXZAet4LD9jv89WVBQ2Mm5dde",
  "key40": "5QMmqzXtZkCu4kxvFLDUZUAkd6QoPdnZi1A4Ga5EKVKhBaxy7R5qytRnv9zYMLFZXYUvs9ykk4t4h8nZZVF73DVm",
  "key41": "4S6ehH6mgQgGw8XkrZ94nRYEqqphAmDkSD7WeasCmZqbyYbt18pm45aeESGEWFj8j6DhKbW3mWXrVw2pP5avmfZZ",
  "key42": "5hVB6bdchSrhdefDDtZn23FZSrJN9Ev8WX5WYSWFZVM5K4b2Xj4dtFCz2KYPk8xFfMKTQjDCsR7uQztwwZ36DswB",
  "key43": "4pR2rMmtxwNpuzSY8RSXmF9EDV3htquXRswVweZt8k2QTxfCyBDvwe4Gftpf6HEXZJkFvrfUGnayFdL75gLjnA6c",
  "key44": "3WsM4S4t3sywRoqfF1iB9iYzSvmugFsxiLH8T7FtX7F7Zm6xWFVddNYDjkSwxgsTH8WsDjeUs1oLP2LTUW89ZyTT",
  "key45": "5dcaU2mm1tiDeAZCNyD8ihrodGvvMmuz9wpABpcVnEtr2Kc7oxxhVSAZTDgyUtyrd3jPVVtKdouVKgLEfWmrjpqn",
  "key46": "2MLiPqJ8xSeiUQ6Fx4MB2Yv2kEsgVvcpmUs58G8Cm27e3YvveD8wy7RqvCfxBufFixJcK8zY2k3ntLNWke9Rah1i"
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
