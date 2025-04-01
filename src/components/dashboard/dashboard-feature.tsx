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
    "3eAN4xdksvA7pRdvxbYKnzdmzgVnLJt6RGct4dpSQNbyGDtBMGu4G64h18oK3MAeEDtpQsCiMb8vVkjvJVLA1B8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5geDEcLZuYUoL6Ye7HrLU8hsUojK3M49Hux5EGNabfg1g4UMdom2oQWMcxuJGB8mmR5RzYhgWaUMG5yX2xnWDY4v",
  "key1": "3iyW5tkY74DvACvWrabkpojLvKHvai8tY9nWne5jT3eCF4VYEjh1W5qCFnGLtT226tP8TifgToE3vaewKJsspFZs",
  "key2": "5MmjUfntFL4r4DMSqFr6gbmRhJfmTX5THrXq1DwwsPHbRqpXgw6rACRo9q1UKq21EHdNpAGZXhaPFombQwMVEUqz",
  "key3": "5RdoYf6kXhoZMXrazUQQ3zvkPd1WqEejwg6FAuEn8WXbET7UBAYw57MykvvcRi41EJVdaLYfqxu7mrK72F5FGYFV",
  "key4": "3VCsk3MRUhz2bWjHNCESAbjNyqNgrGeB6bKnVSesP76frHPU6MLUr4QEhUsPigDDnaCVyYQvV29Zg9KoQWDebjeL",
  "key5": "47s9bMdKACtffFu6LcSvf93gvHxCXibFxUj6UiDN6R52XaHHnreQ73px3VxYpDmAptAsxo7MGTUCMGMvysySTnGb",
  "key6": "4vTuyq8PvgHjV2PTpY2Ux4xL3HUYPL6PREbq3KfQzaeC9UFy67yixENa3nbRVdDKxR9CLjbSJs7DQXJCAr56sPEx",
  "key7": "2GjSBo8LcYTLgSVdeeMEofxxEQ1Uz6LFy8rFYxTxpDMdTEEdrpFAHDCGp7YZnUDHP3KdKPJMSfNeRMRABdV3Y1S8",
  "key8": "ccNwjFg92v7CSxHvnAUh2xqD2PRB1esVAn6CFaoshgcVXnFsuScKqWHaVmS5ffCNtsgn1x9YA4vsyHqJQtVTker",
  "key9": "3PNHfGRw2qhMA7k1EF4v6D1TRV8KDAGtLhjgTKaZmywfSSFAP5h11NLFd2sJo6udPyXDqtWr5UyTFGXeormAs13",
  "key10": "2vfLnbFDMX5uD1empzNQNLtmg2CrUz3XTkpEqA7BwRa1RZHsCVjgX5PuCnUJdpExmM7CRGKgtT3h4fwDBocU1sxN",
  "key11": "4Vijrrxr3nKEvipHZHSNWSVqi1ppFcwF6duVBEru7wfx3nDYPdWkdiR3YTcDDHjoAN3A57xBUbBAzDsV5PP41G4A",
  "key12": "5eyxHEGPbbg8TpY78DYUkyR6jto9MTrhaA1r7q3hyARQTT82iTJucZXGvBrrFZ6VzCrMBU36qgnoYQ8mbUBpxYrV",
  "key13": "4545bG4YT1QL5vs1gMWqiwUfpZw2PZGzgYZBtNRHrMzYC1NGPSvX8txr3XPUNJHhEghNiHDoiqkxrtt4LgBVWBr2",
  "key14": "2DPbdrsJR4b1HswDcaQf7xMmMpU136HxJwg6vkWCCbVMRpda4agt3gEvC32JA98QyMqqQkybanogTD8jzzL1k8zc",
  "key15": "5NE6LPDkV2WkxJeS5Hp61JhKNrBV2ixAGLL7GLjFqAYC5ncsCnkH5uEA5exrVmy33bnzbEMrgFaVG74Bk18ajgMn",
  "key16": "t849p7Pm5MoNXHEH9xGGVUg7aS3h8K6CCNi56evrkV2eYK2ZAuwaw756ZwMMNzCCk3VihUNmKQL6ZVwxhDMD34B",
  "key17": "5EXHQRNYRz7PMsP9DJjbRGURGYd2rj3Y52GSVtcRQodTio1UozqP8WpM13VLBVkTGsqkMEFKKnqam5bNB8nrdvVF",
  "key18": "5sMYyJgRYH3WbtoZVrZuwaUfhZedJmsyY36kgnxjCyumAEEbS4DPwboohwNDT2gRqnjy2KaFMwB4BGMAoBFuqPq7",
  "key19": "5TmioBdMYCVe47i6zPCFy6dnRKkahaRvWHFgVd5ExykVcHu8RaypK95BiXgSxmzF52ieKbTHxPLjYyAck3uap1VC",
  "key20": "58h1vs8DTdvMS3nfGm6DpU4LCwdWXab2JbYM48ZdJudJisv9cA5GkcupvgkCxXCKPwWVzHuRHaBAi6TqMm1TWiuH",
  "key21": "5gf93QBj5u3zKbFW8wKYDGJrhQgJuwJLw7enZSY2HQBB5c1wkQ5yznQnFMTumJVCpnaNgdanq7eB7Mrdr3WjY37N",
  "key22": "5JJECUhCJmFJ1uBqHhYnukg1jXuwPXhmm1rCSxr7PFskGavdJWau9SxhiWLw8odpecwTJbGnZvs8zbQBTF2xbrqn",
  "key23": "3ZKHYJpZ9ZEBj2LyCxxwoqeAe7zwTHohx7bTTvDxixQodxzb6dUd6hEfztsqaVvdHEVgmpBoDcF2j6uSVv7JMF1c",
  "key24": "2YDHAwoFjoWemR48YAPcPjkmMrFeDbAxU7AmFWg8mMALGP8C9LKvKJk1SD4eTFdgZzwzJ6bXEgoisZ7gz8n9n8Wv",
  "key25": "2dX63ZoqxAsBbWFFFYFgsPtPMBG7TcbSobEw9Q4eL23v37n2zdvcJSQ7TpqZwK1nSRaXQ8fC2Uc44Sgrxdf1dJre",
  "key26": "43U5rkEZCa4tJZ8fziDMiNma9HAHTe5ir7zLNkCjqEMWB7SBuoyU4UwheNYpDTnGeL6xqMsnMY22UMap21H53aqa",
  "key27": "5rEtQB5fyVB3erEbimqocpZTKfkLYeHAgDPtK1MNtSuWdDv2kQfmoT1ez4Tm7fBUnwyJ1q6E6tyPdjEoja7VvfVg",
  "key28": "3VNFkPaGe8hvVvRRJ2RNBG4oxLqKZX21DmcSzP3Tu9wNsxB3trZQX3DyGSiF95x4ztat2ys2vnie6VrU6q5xKuFC",
  "key29": "jaBtyycPZfays6PpUx7d3EtHJj3fMjCGd4MLY8rF1xMLK2K163SgRjVrxAnz7KDLnHSuRs8e8pQBfuDyRxNfRrL",
  "key30": "3xmxnn8JwDrptS5gMqmN4vkmgHTooAT5vHxeW8zc58YLg24Mgk5J6m9Wa5kemVpfNAxY29BBawnP17bcCWfArtrH",
  "key31": "4h2nMeFd8ehRZHj5AzYFXABzK3aAZP7yhKPrSMEy3Ua7BuzTjB7TjnetuAWWimqK5W8563xQNGkqUudSECMersrW",
  "key32": "3fJ4qFdUNsvYu89jYqa7DwTcoawb7h5NDFEhjZBH5ECutviJadXtXEPGm4cvMFJ21CG8iHF5QAmKmvyAZsHo1Cd4",
  "key33": "5dBsYxaun8GFE7pLujYmv6yVwc1GvLqm6utG81xmF3ruEFuDJQQBBQvczjGFeqeFwmk5ZZTLtxosE3arU8cLf9oh",
  "key34": "5rK1iRLxKQFr8NCenKyLCFHPCQcHC8otssZJre1YzAGFBLXiRbQgtVpUKfK1kWsYv4Cbqt2fMvaquNR349ffiZYb",
  "key35": "3oLUevivWmCsFCHoZQJFkbm7GmebhKzcNsNCF3VeyFTt94YS9Z49kSpVxrGFKQDzgWGkXBhpJq1umSiTYH2zXPNh",
  "key36": "52uM4Vzfph58AE5KhWJYJ7xD413gcW5xtvUzmqY5h8J7ZNYcZfuVmb3H4WEJCwzXYSC8rBbXpdecxLtYq2ZEPC1V",
  "key37": "3KjjoquQA29BDTSAPj4V8AjSBWe33akwKuQi4BT45JxUxCmZ1GzAzsR5jsCAapW5tGt7gKwF5cx8wZb1d5ngkpT1",
  "key38": "3hcAXTkMdy2A1TVwJd49q2QER1rW6drn9eWdvtj5i2UmCd422QFggSZKHEuVH2UK7PHE9PUkbmR7Udkpm5iELPSw",
  "key39": "2KRSmXcjThWQm7ULWquTbTGq7bsGViyBxjFnvUZ82DydLK4w2bfLzWqd9pd5eV3fcQEgNM3FiRaJWpqv4DEZcfwV",
  "key40": "3xNn6cTTAUcrCzj62ozfaTKSbvHCV5TTSTaGSMqoKACrXJE72L6H636oZooPZpGKMjq1hiWQLaMTeh7GgRqhNdBu",
  "key41": "4R2kqPvVHo6UeWg3JhZPHc93AvVrFEn1misM1jXZufvioU6iJeQdG8YipFzMAoKb1qmnJeqVPYkBFfuKuHMgc6UW",
  "key42": "4L6nedPjnuKn4JM4MU2dB9LNsYUPigrS3d25kQMoyGmsVJa7yGwGcdmL2GGbK6w7A7nH9E8jUqXyNosSDaMmvZ1a",
  "key43": "3JwWuexFvgs8yEnaJdvfStFWeUmxdFT97zPBF9Fmd1ygEaXo4yy1BDNy8xx9qR64GRCZ9g5Hd5LpqZBmhVhNoTtT",
  "key44": "3zvNiL2iAyahwBhyRrUjbCdCnrPhho6ZNet6bkKLaXSFsUur8fZ1fR2kxypmiPj3asK2RHdfRUKshEkM8xiTm4zf",
  "key45": "2iboNT759PKRM47866TCjmjB7abTp94trRbwyiXURgJvT9r6Ufn7te9BRogLCe3yg1nd56jKm5KzSQUWDXbdn2xP",
  "key46": "2xeseSv1CohiLQbhcMJYYQYaEGGFt2vn391yBHQAgcxHrfjRqwxkpdkbGeGsgCcDd6Dhwa94aEwsbLL6f7ZyUvVC"
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
