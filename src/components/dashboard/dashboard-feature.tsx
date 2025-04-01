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
    "eQVQaCFg1E9kHoCVutJe1MGKTmtTPge3Z9QCQcYxpcbc6taNZbfP8HvzsUAw26q9YVmthJLUoDyuDuqo76wBZes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SRu1oj3iKnttZuPTYwksx2FoTL7FEn93HgYAAyGpx7fCMAu9oKesaBg1EQpyZnV2KDuVVigSnyoTUCLwVgYU2Sv",
  "key1": "41oXg432bmp9t7vKuEbEb1epcd1Nyvum4grKKy3LzAwfUuw7VhRrBpM8jYUjbKXw6NUnyjvnxotrJFEoS8XnpxXr",
  "key2": "5U3nqEqhfKYQwt8Cw8W29RHKNtScmy9xktzthHAZphMkhAeQ1RQjJACGUW5irrkvHay4oJdZBGxxan59UddWB42g",
  "key3": "3dooDrXhanj4TMx15Vn1hThW57zZ45be9RBX4fFjcLt7tSj4tXJYggZkKb2FidoM1F1gvmLvLpftyKGcK8wf2pCM",
  "key4": "4bbP4CDgBVtkNigqFnWYob6G9C6W9sq95EpqTEnfpKKzYrambEWV4TRMS8t23uwYcJoVmucNptGpdTymfK2xBG3C",
  "key5": "2QrAVFekkB1XUjgzsB5Pp7wxyB7627rroVmrJYeQYu8ztYYQauihang6toNzdHGa2z5tDa7JP6toPthMEL54pBo3",
  "key6": "bZ77QaXxoWkWZUQ8GQxxd2EahM1sim1kZLhGxvrLKRKxk4CgmGyzRJVdyjPQs5U6NdEq9wsK7mWxahV1sUFq4so",
  "key7": "5QpeyxCcvT2StQx1thNkPUZVeXoVfeENk5McAPZTe1Nffd7BaXcDy31SDVVtjoXVMeazkgFe9Rm9vgMsHYdfih2N",
  "key8": "SR66FjH6DWTpNwSgugaDVEQAYMBFh4usWH1HWApKtfChotBct4gXmwqzT5otZz7ZeAANZbmMy1Y1HLLF23pyVza",
  "key9": "5sL7m5FsawUX7YYnj1c6qe67yUa4iizbgyq8eaGPTfZ77mDUeoAPJ1XVTj9WYqZB15S6YwmiRiLospBv6rkiP6cU",
  "key10": "423dBiWmKQVSpSFVeg1pxknjPxW9sbsWMun7V9Vy76KxLs37U6xbU8AD15FyNkKvJ2s1PHjUP6rJd6KTy9GfmDto",
  "key11": "4LnEPdxhTvbyGsnLvH23PNsjxiJMromrnd26p5H3TM8NhAYLGmwh5g4f1xZgJumx7xQT5hvxqMJ6RU1iGcVcohcB",
  "key12": "3VkXCaoEeAN3GSLjjAMJthwWtpFy7dHr2zX7DFHC8rioS1R4QZYSeMhr4iv6wF86mCJYnjR6doQBiNgRXogjtFd",
  "key13": "4oX1LTLQUW7oKoTWx4SrBTGkXmGvmCcowRYnzoSRBHRLCGG68VKdnePcqMjQyPZX5uRwzx2XdnadYz7GvyZ3fN4b",
  "key14": "2HGpGbxo7b7P52yj9qw3EC9pahZcL8DrKBodELJ42pxWxgcert4FaEVY3WVjZ1m8gsG8pZLEremdofoFX712c8fL",
  "key15": "2N77pUCZWCk1Ajujo6H2iaUSL1crBQM593BwMSbUasXWyswGvkf22YiQRdC1uys4nyR8JYcYCdQEcac8PLTfvKW3",
  "key16": "5NUGoifGV1io8psSn3NbR1VbybFG781HfA8Rr2k3VQT5UpceFaP9snJzkq5w6WHpVR3xjDkq9ienqD8mRTosqLMG",
  "key17": "Ztzy3unt1w1Mbm7tDEsEPim5fsxEe5k5YXaPxQ6zUH8u9WxN4HiVbVUDibiEubfahZ81mVLUkXbyNVK6kqFbJUf",
  "key18": "5u915qNsJrCADUL7BLg9TrYnyiEdpof5xT7kBMFCq2dP5H23iUcJSFpbMFNQmgWB2pwefoYYHQn7j56YSWnZ7BUv",
  "key19": "Q2UgVKJxXNDLZhKyzzL7AKjyMJw1QhkqcUDUVikiiTJxxbTMZiWypUqDi2QSzB1rKsc6w7e3SThzPJJ8zoLKRkQ",
  "key20": "4o7jKH7FnVVWzvWDZceNGDSgFd5Ev3riCjiiGjtgeP438E1rBK6oDRWhYy6EBKYPv2oJkxC9RraqFxcBPLhx9GyM",
  "key21": "3VbZDYSYPSwTQH8cWDxfLHmmCJnXfLsAdjBzxJvhrokFPmQZEi6fzbnus54jVQ2VhhzJPBDNTEp6VbwWPK3uGQkv",
  "key22": "eodHZeafSfwNN6as74N37doyE2Sx7JXfpznzN5rU1k1YgfdRX9nyXdxEonBfiXCT5SG2KCUjzY54k9M41EPdw16",
  "key23": "wucEgQZYLSxTFLvBHL1XSXjwseY2r5v5yB3NUgC9mnmNTVAGJC3XH595E1HWdJtrYMfeF8KQqBLB2pGfeYrCEio",
  "key24": "Psvt58FzFzXXaDFrSSUtauV9ntBypjGiAuuq665pV7pu57HuocpXgZDcKfATyQZiUrLcrwhYW5T7n5B9RLXJyTN",
  "key25": "3xKDXEvKRoNKaPXAm8WNgYrtZLnVagu43MqK7ywAArNGe2TjYVQYyT8gZLBNkaAr7Fmih4odV7Q3ENCPaRCwg8PS",
  "key26": "4qctcR2U1FGQVHmfUtkAYor4imyjv4xhnJq6FDmtVHB68oE9JWWuJKz61RdJ36Yjb9uK77pEXM3hEcmnZCBvzPCN",
  "key27": "574WWriYb8yNZWoL6Gk29niiPspf9HaUehmJAqTK4XqBRifwnKMmAD7ggbVGfMBpJwwnWwENnMBrY1fqHKiNkhnB",
  "key28": "4Hm6my1Yd1d3MnYHqX3Xdpxuj4XgCVYEBt2TbgVXPkgQtQYEMx57gmG2c4Pm8VqUDUyQfMa47tQ9yP1iBCijjis",
  "key29": "5E8D519dbGbFMWXzuPpCCFkD53Hpg2SmJKszDictN9tJ874K2GovqA3oPBi3G7bZfUhQahTjenWC4149RoFcRBJS",
  "key30": "2Y1cEZaBV2KNFiD7z5TRUTMYouYoap3TPVpmK7VVsiVmVmULezdZGt5oFwFHtxLwxNLvMBSSsMYCyHEtctdyVCHp",
  "key31": "37BqpMN4FeBftvU5kj6vB7oYtvqqPXGnXwiLDy81k3bL1MP4boe1UtyVJdDDGxhRKL5ZaD5N5b6EVjU1SFFEsNUS",
  "key32": "2ytpW8XevSXb54ck1e5EnGtDVgy138ncYoHoVhQh5Wi3D3XLU6hpiF32pS7DJTAULGpR1pnCXC8511QchbKcHSFc",
  "key33": "5svBz2br4QRUqiLqa2RruPxn7KjuFsjBshuQtD389XTFoQnzJiA1msmX3BjvmAxiiZJTNGazZpy5F9FZQzTkPs54",
  "key34": "4b8Sn6QMmtyuEfF6UdGshUsH9QvDWKJ2hRvsG2ssLmUhu2a1fLt8NViamv8XL8aFkNXtreT2UC94pbAnczdV4F8N",
  "key35": "49M1L9NeVyeNjPNhsF1tyqpdpGaTyrvVhhChge4iQccLcN92SmQx5cJbEyPB5XshFwLZsGNdcvPjLzQNWG1boifH",
  "key36": "3gqFc9HoQ5XuMGzzdbUPCVgDRaD55azjNqJvjKDtCjQLcxnkfKWWbr9B5gTRTUUP8YCbd9EMjL6PZ8FMjvrYNJwz",
  "key37": "5mxGjFXaS8ViFtqDTkCG2fCGXti7DJVVsYE7qZN6j5Dopw9w2Bv8NXD7u5KL8qM7gMXMJzV2sficf7GMDCkarVtR",
  "key38": "5WSo3Km7pYd2hfehhQZR3cjDC5tt5zumcJcrfnyxmUcx9Qz3TU7CKyKYLxq5vvHBqdeUG54X4K7eN172z9i5N8rd",
  "key39": "5KNwqEZZmemSijvcWVxkZ8AzgTu1jbc8WPbq6Ky8MN7h1GDyJKLUZqgRZ9Zv3SMkBpYGQDtzkwJX8VtkGx65pMDc",
  "key40": "56Zv1jepZja48hcnwSinJbHQBX61BYcDr28VBsJFh3qKmLd48YVEQ7yfQ3Z3CcmnHRMNqzF6n1MGr5h7L5q9Fbut",
  "key41": "4mrNV1kpVLe3xDXyDXDK38T4WP2TmLBCSsj7Zej5edGZBE1UeWFPXwDoUm1iMi91MirrrQKsxvJhq8BYPiVFAUMW",
  "key42": "2T8jhvxhyv7ZQK83hCE4mH1jpyLDvQQqtuDYhmdQQDuJgc3GvkxLd6J1sALtwJLxgsvSw6qbXzp8jLTqmKNQzgkx"
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
