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
    "5Y8G1V7ZVjKBU9uF5GAN82J1ThFDEjjDYHoaP68Hiyganm2dTTAhqijMga2o8VZokz6fd1rLC4aQngKai5KMWzud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u3P3o7b2aSwjzwdLUNPurGA6wmfGQc1KAf4f7422LoGkRDALXsncYeFNV8s3GDGzF3yFATurLKNJeHeKRioQ9Xi",
  "key1": "3rwiZ7FDgG7Zt9ohnRpzFQr1ipy9vWkoPLSEa1Tvqh9n7kvVqSaCHnxyQRwMF9sQo6zYyLsmhC6xGQPrfgT4uFNM",
  "key2": "5gNT82u8qyMG7R8iMtZcETCbW2oGLQkpFXx88gX8kZpjKi9jQZwrNbhUbaaEncuCKHTBQtKY8awrnEoudoKMeybj",
  "key3": "3ufi4eyjuU6yGAxetSWxY3GFREyX1UbNvHQVDHMKCtZTKQkp7zF3DcVekEDJxWWzpXadVHWbW3KECrYy9hnxjLYs",
  "key4": "39Aj1kc72tRYpb7coNRedkMJpgXe7Fi2Aas3uV8Je8fEWQKMVrdRqqaz9T9yAdZeGFyt7LaR15EHtX92jiASFqpT",
  "key5": "29J9xpcf7HBuQ4eeYuLduRUxsM5UrGVGA45XekBYoRf2xQ6ArgLzzvGmyPbSRoHif6kjn8r3PR45C46qzz1czr3Q",
  "key6": "2mD1fmjijSVYHLmh3bZauGcEc1autRDP1U6q3nBNALZiEXVJZuhSei1XV65qneLrLSw1z9Merih44Q8de6uXcWTg",
  "key7": "38t3ja99Zrap8UwsvUB952oUqf6YZL3BimARw1C3x9T43jDcZppLnehZXH9Q4sQ7F9292mHXKoFLxC7i1DoaSSDD",
  "key8": "3fTvys5CTpQt68aXq7e82qVdGJEARb6k8oTUjnzmQDAZU4UC4GrWCdT3wudhGGjho62gKMW9PoouggzvFqV4PwwC",
  "key9": "2X8FsZfmaD4YhP8SC8AgSQV4ELRrYn7Ykc17mcASFbvRfjUSDHPt569zGPPZCiwc1bsvRiL421P4WK9BRUMdDXMW",
  "key10": "3XTowNCqRvWr2JpsqtTPQdxA4S5PyT1qUzmQsvtxu1KtKvs4hKhT4Z3gJzUYrenPXePiZxSz2odHQy59Hkfzjb1F",
  "key11": "38d3ePYaZaGPrMjU857m6ASPt6JVbDdKpgdaLFV27YjaqFd63Bg9uQdugAPVFyNmDMUTexfuW6jtBFZ6GDi9P73K",
  "key12": "49XH8zGyuLH94K1r7PXCpsL2PWsTzQKvqnci9xFtSqj2VJRj8wq5XL7eqny3E3iZjWQ9B3Jyto3RsKPW4Qthns6d",
  "key13": "4jFPYre3NEgq8ALCPQ1EJ2WNaZd4C3dnawNCdnnh2Y68EAJj42yboX4WumbJSWJwLUnwD5ZrFHXFD7bHbquEsuep",
  "key14": "5fnfbe9unpgViuXEGhfoYz6KZwVMmU5nJVozzb7rSMEteWiD549biTA31w1LozPnute3LXWd9q2NDTr9yQ2WBQ5k",
  "key15": "qeBAFwCqxQR3MDFduBGJTWKrTPXSNnJVRgFA9GndQYmv7gDZ9psmWBfu734tzBnx4tapKPrHJtrqQUc4kaVWtXJ",
  "key16": "3pvKAm4P443t75T9TwHKHrYTYaSpu3i8TEA2hcUqmDCBPMvnEuE5g4Fn5frc2fbxn2xZU7WP5P1ckVZAYjz5hsTU",
  "key17": "21j5iJVFcNMB4Q9PEMzLTRPcwufN4JmCaWqB1KTqdDsaGi2R97ZNWEYANxxDktXgYt5n4hSVDRrQ3MbfJs4S4Hq2",
  "key18": "3er2zR5r2UU6tRd8XUawpGnjESeGBfa86Gq4P2W3om2V2fEqEFwNDMDya8Q7AHTPMzDbCemi4asrVDZJFSgTtuhs",
  "key19": "4DVFEuXJ7H9sUpcdp4iphzKJFenJk7QqhsbGf3tKMyaskh9ZFgG54vuUWjXo8JwiyxUCNTFuGZbLraknzm5fMDT5",
  "key20": "4kPd6jraeChbXeZmBHPTQUjdiCZb3Cj2aSEPvb9DMvfdkMsjUmthJCGhVQH2dybYvvTTpgHEee2ptCRkvhDDyUGZ",
  "key21": "5LaWheEb2Bo9Bpx37kDhrF2piGFRfDmJQFxWkassNh9Q489YvYokNn4uyyaccYrx2vCg9Wj3w5KBJpSG4g9Sxysx",
  "key22": "vvAyNA2K8bYPEeEGeFzW9R786WeyXj4UQGoFw2K5Syz4syJGHFuvQEzctqCABsWCUizPTdfFQoVPj8GdwHssC2u",
  "key23": "2RMZMvKUK9PmBLSo1KdAwBLYtMYCDHFX6uqxbYFLxwTVnQ1b13AWzYaNs7CZ1CLp3YPzN51yWa5YAkPS9k2Xge8e",
  "key24": "3GEw3yw72XrbEG4dhr5fEZuXkmiC9X6nqmtMrUmJmp73aZDzRgCg18Yfu56UYvW5bCKunLZaPEt2A7qEZuYvdsGd",
  "key25": "2q6DDxdrJi58E7nS6vfRdneN3VXPEpdFzMwrCF9vdS49YTwdiy62eNi46WVyWE7n2iRsihnnjwkWDMs73eVrYjxK",
  "key26": "2XVkobBN55aBnxP6Fvy3ybtNFcomZqGGnyQqQacZudean5pjmB2wFTkH51hhh7sGCZ88p9wRrZqKcRmywb3gHPPu",
  "key27": "nYhmUKiTVVf4UrVNqckZmCeekomP2PccLP8BxxK2KoceDSmcf7ChCqMTyTa1fssU2Nugp1WdYEgcL5ELiYDFg1U",
  "key28": "jQCzB4yq4o5dt8pEFFEjiYS9624EYsNifgMNY2EsNEjB9BtoorNPjjXSLNeg1be2yyvtPRnEByyzp1BEZGdiNbz",
  "key29": "5RNS6Ltc4gCdsNQ69AvDjs6ow2pNEVGYDSWc9QsTRVKyXGkb2heSFAc4YXgyrfyK8UHj8G35y6hsjPE2JSE9ezeY",
  "key30": "47oNpmoxbUNw12wMNsPBL8xFufFMNY52GeUEUGP8sb2rx43xFS4FLFeq348NCT1qeRP7hQ8riYx5bueFxJE2vsnU",
  "key31": "3NS4JKmT1HPjAATHHjJSkeyY4XjkgBnvDUqDfkhw1NNpjZGrzm5KJxBVt6PmMMVN9snNDRtJjYU99wDYUL5WzbPy",
  "key32": "3NhTWCVr3jfrooEmA4mS8aZ9wki6N8TUNZFisHkZ5tXVKr7krVTBeP1GZiCTeEgiMVWUHQzbUFXah4YKX8cmcyjh",
  "key33": "2gEMM3i9FS18rscGBCCdg5PvCPmxF2Mm1XfY9vsWEN76SgeSHKeNRjBSWMbzxrUCbZEo5PX5t1xV7QofFmtycqDw",
  "key34": "5ySLwHQXSdLLcHJGbGNAtbRP5RkbTzymgyTkJLjmgWeg5FPj6D83kKiww1UcuWMTc2j8NM5FcUeDFhEgLuL13889",
  "key35": "PeV7ZrSuFr3oAgBXZ8z4N3xiYz8FwYSk4owF233TwTE42cZHqXrKoHsj3iVdKDxwkt14Tt6WCLJ9DpNnGaaFDGc",
  "key36": "3c527YUARBBGbC5CJVDUpCde5GCHNxjaWUfV7z7tADbMpZqyk3tJpUwzZYuy7DDD9oAyVxULHdc7dzW7fzjmCCWV",
  "key37": "2RthML6dQhAKkBuBLA4Bv8h9LXFc45otVu7hKBCL2P79ooHfps3QdV6kjzev7BiMGJMjUoFrcJQ9xtDsJfHahunk",
  "key38": "27d6E44BmtraLHP2RQA4gGuLa25m1UX7itDsD34EarAfgLwxvaQjRZmVUddv74ShLx7R644HkpLTznwMKXPo5Nrs",
  "key39": "212mGxSBDyJwCSN2P1Kg69mJphkJAgziycvvmVT6BU5jZfxJXbjeFPqKsFM6eJySQsfiDkaCbnfirpa76Gvy9LYf",
  "key40": "5zrvbHhPK4LXmNSU2DXPMuFpHiqH2A2kuqZXMVjYshng7pnPYBExPS2yxjRAtBHQUGfwdeZetwcPrs2Zmy8gde6m",
  "key41": "3aqdiqHprhxM7fV3rpTJytANH4hhfcbQW5xCuatYMMgZNMw5LpYS46jHecQ9qpzKoRApjta7pXH37G6meaRX3Aiu",
  "key42": "4BNjr8NL2pYVTve2D865bkksxqGRLgqKwwanFpEmgJ6NL4zzVKgyoMz3Lg5Xr8ym8B5MVwxCmv553QexBjxTnG4p",
  "key43": "4gbTYA4QMQDzMpDCXCVkZsAMgCFmyko8oRTBCj7rntLuC6vmoYM7Apsx172yucNRyumKW3MnNJS5dxwWpTzQR8ha",
  "key44": "4m5yKEmtRiJvddwPaqG5YJbrmtByhakzbrn7kxvWv5ZgzMYYDze3hFsMp5WHAkA4ajeZnDRGa2nsWMhjoPdmRmP5",
  "key45": "2guTX3daXZ9inXc61tRUQcJw5mfVUwfUU1iYoAKGkJ6DaWqgmTiDie3qHT6N69cVr4BvRHS3i8V3WhdFo3wVcinL",
  "key46": "3YYWfzYWZcUN6kLF1zGmRzCxaonmAANHwusv7qBBWEYi7nezxUA8thyDddR4un8dMBAYYGEsHqS6Gfw5BnfbJaFh",
  "key47": "2ozDR4pRsA9zDZ8NGPMo7XfvpbDaBh3W95t546LQseZC4rHwmMYDE2iXBfhe8YJPTZEgC5QwqoSShrhboohFxMTU"
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
