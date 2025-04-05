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
    "2p6Umep8HqXss7CcFuPs1GywY7Exk7GVrXwyXNxctAax5Fk6PF6uCSyW4Zgwf1ngWtTSThbcVmy5bheWB8dnSNY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HDsdtwtZqXnFk4PMDWLoQoCz1ksJrybhBVNN8sZQ4z9DNyem7GT3YRiRLmTjLeQiUnq36R1vMxsBFJ41QfxSN42",
  "key1": "5fBK5waUfVBpfzawjLtcgfxCZpb8Ab4da2r3v3hfNLonD8dch4upATcqwXmwAQSy6pdM9wvsa862PcLrFnyGMwRx",
  "key2": "5Z7mmUhfLob6YT9Dc2RtBAnEWgsdtG7rvZM5mGbWEMv1F6XVTrF5YYeYRt5BAWK25oM1GkcMpSTTCtqXErrs13fY",
  "key3": "4aJ8Z9xb591HfA1fgNhH3JGTqxQiiWwMMMbXyvNXwoWYqUL2Dk98f3JCTnepuQVmKek3B7T7voxAk9uhdnYhBxsu",
  "key4": "66W9pYC84icDKN6PZnJATKaZaYCSAAWy9QoE18n1u7LTG4bVqE3k5Gxzg89pQNXqfLU6suVhfWSoyu89cutgDqh1",
  "key5": "25or8zTGHWogqx6JZgdKqTo5zmk7QDthyGdAhLk3fV9ZdNY6acJ7CWYAkKbZcyTB2zrQWUGeFzTSPmfADJ5Yxzuu",
  "key6": "4Gjgr2nocfmjTDYbVpwKFNd5NXhfd3X26wDnBFWrd8XUBRWBgxVGuuJBjbiQgHvLWSCV5KNzPhXAcyd6g9n8NqLf",
  "key7": "4VKpyAEhxM514YdCfMNabAZ9TJMvh4TgteqfW4dKhVtwcWmTUjNUm8Q2frbJjSPv3dREJxja7EwkH344zm1x2rrV",
  "key8": "2k3HTp5RBHQQTJhJDvAVnmeEvcJB1ATnhg73hkPyHGSEkUHy1tq37vKMzTUb5Z3M1Eadrop9M1CdugXJ8f9aM6We",
  "key9": "NjnNeLYyFkssJ7x3gky26kaRcjq5xtPETq7U8Ux7YvbjS9xQ6Sr5Jb51vYPSC6hKEJ3FHThuyFpEjDh1nattaZ4",
  "key10": "34ujvzquGqdWFrYxfzjeuZ61S1GYjPrEaaKRSamRx7ZAr7oMjoK9WssxoQntWqvghBAoRcxhwGgRjaUpvBmTtqCb",
  "key11": "2AMpThr3yNQ4PHnJKFXuJ3Qi6S22wywrcin5d24i79x1vLbXEAhFRKkiAoD5QLd6zGZjQnDSuSixy2MSVb9bvgcP",
  "key12": "2N47mcJQFqnLXcNnTAcngyWqdBHYRkc5T3cQ7TaeNjvRsc1o8UTzHuZDu3zPZdGxDf4uGs48xWpU7pU99Z1AcAbF",
  "key13": "5ut5qVPUz67hiqdkjYdxutB8GRWCoEaqywSoWJ5hufw7QHS7jMn6PoiufmcvCjFBMe8UCfYnevHWVQfmmMfPUYE8",
  "key14": "3uE9W6pEWrCFa2FRRJVb5AK1pUz4evhXSvywtitygmk5cbSrTfkTv8kWx8MyDWnkvG7aJLMxZK9UDja8TgKfSsa7",
  "key15": "2gqGdgnsjvhy61S69FkSnjaVUg9tZM9Dwu2xeFC9S64cg8d54CnC6JdeHjW2Y8NigdDutKhYJpMDCpbj2VD2Ec49",
  "key16": "5RrWxBVGz9qj8GstfbWG4qU6WTZTQvWppezTPRdgsYZFPHDBV8YkrQ28bgFLW4RVH8XRSFSRGrFbuQhrnNLg7Xne",
  "key17": "3Jq9wEzi5oBsxPb2wu85fHjUbK2AGbyNxKD6coUAAiM7cgcuX8aYnKbc9ysRnxCTGBsedXX5oA8ogFdfbajr43KZ",
  "key18": "4siSVdtGBBSzjwwFHfUVXqKwr1RDwd6Ucqs6NYwDEgd5gPncBhLMCT5PSwaXxqfEtDCfnUeMYon3xLDNMYyEKqhg",
  "key19": "3e3JAQbuR3HMvCaz8USgMXzaPpeTEmfHapSnnRFQpDi6NjdEJj3BQ56F5C1bM6FHVmfq9KKMDqbUzTWur5LFA8Qz",
  "key20": "2ctginUXsMWtFNCn94cx5VDhgEbXqxvWJ1djqhQttcaxQVKch9BCgvCpCjy2AgtPdABaJwkp4CYDvCtFLneBbgcc",
  "key21": "61kwW97JC9hA3tXzwn6UcSVijGZvYCTWTqT2MszLaA8TLa4XvdJ6DZT64WzTwP27BBHs2YrX9XvmaUomvvdC8oK8",
  "key22": "5jZJQz21qWVDYGqKJGMUntRJ9KKkbKars4V4uUYYHeaFTpUDnVpkHsskt7B88PtTiTsWvJxaurDqtPDXJX66tkbz",
  "key23": "4LBp7AfvTAUzfEGkaCwx2bNYQ2A8ktPdkx3fsrLv7fG7GLrvMWbBjTPY3bK8DKXoMh5FKNEhappgwQHXwvYCZNBa",
  "key24": "52ve7cg7QpN7czMoQjcBirzZy57Y4cKEJ3mzR92Nd2Ni8MVJJT1e8VhvENoRbocTeevKtoPVt7maYyyJhMo8dj3A",
  "key25": "4YzVDgtn9JGYeERPFpbh9gtLEcmsWRXPNcsveJRVBpMtqHMBYeygWnUgjrLmyKfPFJNywU2kgvwEEeXstJMCHD8t",
  "key26": "5KVQnY2BfKYbMQPMGjUg1Gxjs6DtQ63RwNjfxNEeaq823QsAkqKuv3VGwzCKe233itJ3vnBZLniLfLZgZHuQacbp",
  "key27": "3asKqFwCF1UWHQNRHXPWJsgLrNicPF5YMP2UQNwrn9M5SApNbvwB4HehtFxe9pAhfJcrWrhx9MEY4dnmjzTkSSLF",
  "key28": "2JCepjxZgzXoJnpzMmVAyPpp7b7GKNWgzqu8Kjz8TctKeGtm1AHwqrR5wUMTJmyHtfhB6BhMntjUtJe2B2dBDWDx",
  "key29": "2jQrmCBsjpKCEd3bt8meUqPxZNnjfo29E2Pn7B1kzdcHSdeqP7j4f1gCwmwt8LXZ6fTt5JR42h2t6kYvHkm8wBYu",
  "key30": "5Cn6115QtidvRFF852B7wcz6zvdFA2XgCfKU3odGh9aKk9inC184hdPGHaxhoJtSv6XwZ1pFrhfeVz9fxMqqbynZ",
  "key31": "4ZBB7Y4tV1ZEuEzspMtD1eN89FAfRdaZZCAwbKA3Lo6AXd51tZXHih8HSGs2vRHJHWXJKsHRqcZbiAZGj8CvqP1x",
  "key32": "WDKuaWo5Xq5SyL3R4USLFueaGb1GjSRRJ7QCGjLjbKLmeuwfRT1dEFuEWRnpnHtFmE2DY9hPoxidtxiMD7w8tBd",
  "key33": "64NZQzH4E97D6q8vKxBRLuV4SXzc5eyiNg1YxhLKKFN35r3vS626D8aazfY76JWVWN6yyZAAhvYGKkLeREWGuK2U",
  "key34": "5KVr2HFC8bTBF1n6gQVcV3ombHiBBEUmort8opHuXgdnCK16bQ9xvWSgDoNsaWsU6HnmdPUxikRKd5PV1q5VJf2b",
  "key35": "3oKayhikk6EZkUmKLKp47u7paP18fDKthzDHMxyCeyBLnr1vp3RUhgyr8DKndaDd1CYsopS6AWWb4mVMHsHdP4SR",
  "key36": "4umhh8bugDkpxjH41cA4eKzmhZpLL2fpspeXCLqDfZP83jk3rG4Lb2nmcFUf5fh31wm26MA9s1qsdcRLBhF8DkD3",
  "key37": "XRZWhTM7H8b6kp1TQRy8XsvW8qXEnANku9FSS1BKA7WA9kXoN2DeTnQ8RrLZQBE3Yfwi9LRez6T1u4WyF78rygd",
  "key38": "VfWCEMGZvQK3amrgLKVjiptPNf9inZW68cY76LTHThEWsCmrBjZzMzwTuduMXxmJVbNan5HzrFzAbHx9B2X1app",
  "key39": "2RxWKGUBopxJodKHasH3ruML2z8EuSYhF5inw5sHPzs2n5kRwZ4AZZQATzU5Bm1omWFoGXj4ZSvvc1ev5pUNRdGS",
  "key40": "2oYT3YHAgYrZGAMiNhRoH5PiDtooj1f2656TYko3EYb2YXG1Vz59UFRWN4DWF1Ni9mqe2LEThq1k1UjnfAQPsFwS",
  "key41": "4GRs8muxJp7pq2ijRkjYFGUmHxqVRgLnqwf8xxGyjePSs9CydYfMgcnfwRsd3nZ9ceyrpMF5NydcSt16HN1pqtEf",
  "key42": "4cnq7enAqSth1L6GEgqh4DE5tRJ1ESdQ376cKi3UFHVtKWAz1ZWYjiDRx598WyZZQYeptfC8yVMztUZwrTPBodPm"
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
