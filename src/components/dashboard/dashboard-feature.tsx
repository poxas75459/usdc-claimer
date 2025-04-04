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
    "5DDZEEZTsjsftA9qU8Tvt8cmQ3zTNPA8bUiR6dyC5M9BJwaUeEnoKmUV9KjKoFaWUUpYDvENaKNTAabf8vJ7gTAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CRsyW361tnRSnd5eUNDQ8cYqTkZEsgMT5H1Zgsoi5VEXysWTsYD54NZx3WEt9NdAJ57BJinwnkwWUHGhoZ3wutL",
  "key1": "3CRjLszazt7DNndHb7RARjRr9tZf3BnexNU1MKknNSntqcyFWamkhmxm31UthfEwyKgLXvvZeJf77auZEYWgnnEU",
  "key2": "45U2FRTHxaPbZojwhapzWB1U3YamUgJ8ecDQBV43AyKyXLuXKmmfL9sYwPEuUuZKRHr35BtQtwLL5AcaoLES4uxR",
  "key3": "3t3wv6b6MYR2rM1pWXzdqABxDFeMtt9MwpuhCegrt5Sm4BaknuVqAr3NAKhFe9DoVHgariFce7qxN2nEtfPGE9JU",
  "key4": "2pSVFLvgYNHAo9xmBpRx3o1ke7YxN4ZUmMhqKYiq2iju3ZwJ3z2w4ZUGoRQs48dVQUb89LaPyQ6KEFHjdv3FbXHV",
  "key5": "2Z7E68xt6S27ZaKGobCz7g5bqe1Etb6BVAmEzK1h1fwMSbhgyC3oR8t4pthQD1JEUgMm5a2ce6eNpE6SaTg6fKNf",
  "key6": "4aGbAxQJHLW3Rdbss2fNMZhyYj5Mg7W17prKgQnqAShSewwsSmpsqbjBHJgUbC8Z8SVB156JDv5Hxvpw66ud9Fq2",
  "key7": "6QQrxMNZPdcxcqbCGpb6rUZ9Qjbvb2riYhPRXt8vyqP8dtzAJFSWq99zNnoeSxXJ9wz1JgEGZhikhgAok6VXUXK",
  "key8": "5zjE9wYnLKCuDEvqUVzS3dRTvLpVA6NEz3k9DzPdSbPSKSd5pytpk7U4Te37Qbz3yoHpyn9RoXQfNMcRwRiYufJt",
  "key9": "2qURJizrMA87Hc5t3D1tJMF58j4oDPXyQodpMUCUCuP3SiuQyaMpeTdHqnpUMLtN53CQqCcTV5QuCh76exm1yRUy",
  "key10": "3YPULnH2EgkR3o9oGDSxTbnZZnPpv3CA2uWhmEtLbiXda4jSVMHUaPZYfrAZ4XjK5EB4cBJzWG9xGbAXFsXAtun4",
  "key11": "37FCnSkYoetn12wwoP63cyUPkYHUucNzGpyVx3yKECQhAKgkkBwHcu2THFXibWxXexTJDtJRwzc9M91spBjqbJ7G",
  "key12": "2oiwFaqwUFUf8d7vCnDDeyaafL8Jyhk4EVbFifqh6YumWdqbaBzteT6HwJFmcybogveWeFm77QzUNT1SChhzXerp",
  "key13": "5nGEy93rppZzUe1uhfVCBFTtN9n1VpEZo5XozgRoznmeKAKGFjM2EsSNUkRMgiTGHSEn6gfwWEw3qqqQeihMNsLr",
  "key14": "2wMPREe8qnMMyYHMBtTFA79tpG1iK6edy6pWukSbx8HrDjiNKDGgbmuB2AGZr34Vq2r75dCs6rgbFskMq9NCSMmt",
  "key15": "4z4MF8hjPj16YajSCNZzwkG3qgxy18Vf6wYwDrZX1mMSy7ZBRnm4oNdU5FDMfKDKNzEwXgPMTWsnFn2UsTY9sie7",
  "key16": "2ayh8StKdQmcFX5DG6QbkQEuXrh7cXy6BqSg12zRovtCFwbfiGWoJJR7HsqdnucY1Ej7v3rh9eFSWHG5efCQfnun",
  "key17": "5YuEpsuVLnER61wHjNnwySSzwTutjZksB2WD1zsM9TpdxybNpfxyjELqiTLb6pEfRTWKgsBhfarKEmnnvBcmd8t6",
  "key18": "33oK25ohJCu5PzK1ko7XiKGAdCPexVNWRp196pfzrdp8hzdriQtvgAVEnfnxvm2FrM6PeoyTJnm58kiKkrUpKYbi",
  "key19": "5SfwBcsVbTfsGjp7WauCPwo7MPNemVFXaofGyKZJcWTDNUcrExVkmH9LW1KpyNij23DyF5aJc9zthwaKtEKgzYER",
  "key20": "2xb767qeMz5hYfzW4WUn82DgNiUqft1bxpDTaftJs1erytj6Zb5urQwGq2LiMqarpvaLBgDaBTopfawpUztWjSpS",
  "key21": "48iYxUFZ2ixqrvhh9NP7iXAoh52qRVvWAH4QvsJpo1cEjTrNWg9RkgSx2Vh8y7BVys1N1NNSH5XWCM4LqGoGzws",
  "key22": "3ue7wXEJFSvWDBzuEofqrGbhaa3LJXfRNrh4ke1FVgEPtfAbb78AwzRsresMFNieTNA291CJwNBgrjgoJzTvWGhz",
  "key23": "4smhQkszDYL2mRHKvB7jbkVYJg2LfCGjk2iK4Ae2ZQLXWDA9Ah4TacJz3xqCZXyyFpVK5UjSDCAy34XbeEbJyuv9",
  "key24": "3EztBFy5QSXwFSqbLNjHsUcmz5ejTrtxjFvY7ts8LtsuYfiRr5RN7LkQmPRzevrY6GoU1i9LRBNmGxBpKX4ozJNZ",
  "key25": "5AypmqRaCPNzbfZbKPbcUunpZ2RKyqmzR7AkHrL1QFKygNYdg8TopM6m3vHSgaQorcz99zQziJFgjh1dzoL1CdUU",
  "key26": "21KRp9PgzMFgfyE1YRDEu6LxsKzZW8ZvczPukc1cRWVzvzo6YtBkr2VkWeMPd8o2s3kzDzkBjujMSQ7RZAgZ2k8d",
  "key27": "2PShKUtgtVW24EmDSC8ULDAb97ckQgkbG1YjEFFGPfPpVdHY1k6zMgUQy8ZYDsVijetFXwxPwTqzARy1gLSe8L6A",
  "key28": "5cGmXAZaqYiBJ3FtiRe4VEzoN7PD1uNyCRnES2PMUpvtdcjmfpjFCachg1EfkN8bsX36K4ge1p6Zqype1ZaZkhnm",
  "key29": "4GAuc4dRd5fnaY9tneqnpLeMPCEW1fhjLK1cdoAW2qvB3G8rSkR4WJjdAC9DDdTqbD1yf7zxSm2JCu32CRGKNwVm",
  "key30": "4zvGGYbZiy1HWKDqxen4mF5mdezDnvJ33WKCVS422SSTzo4GpMFbzRtaKBTH3ukLitRBbkfZcFouUcbomDURGMhc",
  "key31": "3UqyFb1Qzoy2z56FxQszxPUnzQTEogyw1Nmhx1ZS7jW9yjSggLqMAba9bbt7Hh1st8ZpFmHwuqhzjG2Styq7yGCp",
  "key32": "aTVvhh6rNEZu7EBidxEEtnQUAFpeEzVyEhTaTvjPVB2pHuYP5FMaKAhPfP1Pomx6GkxxxtdkRyn5iRgrHhMH6ku",
  "key33": "5i5uNvJ8qvMKdx72HAavGEcXspUEU5vHeJ5xHxqcmxnPHAz3TKG5U9oxVFnRLrf5Z7rFefMQN5hpxUCVVmsXC8H3"
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
