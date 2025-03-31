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
    "3m5UwHbGRrL6WHPHL5mt91n7XoPQVXgFrbAjneeupL6HLnd1qZmFUz86CTisCRYNRSpQ5cshzjMqdvXMB2fXsLnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61oiyzuDkm5aQ4sHm97C9c51jXy1Yh26R8aTTZWsKmyNt6wLjR9Ktt7qYGWZwuRakvfySSQjMYvkg3sZWjrbYLGp",
  "key1": "61VkAJSFdH1DtQWd7dJG1uhjX7E6iGHvWQY545GXwB5RPtrAqvE85BAVvk6B6DSzBPKJeuxy6mzN4uYJZbAUhbpr",
  "key2": "51srLQk2PH242g3YNhifDvJydkUCHmd6zLzpLTXwowZ59xu9C2y9CFXxWEcKWLwpmzZwWgvpypV6m4unrchSnSu8",
  "key3": "28x3VEJviajdsoVEUuBkRYt2SuP5vvmuKYVKpPhjGKWM968DiYe9CVAHnXBR3vgFVQpk8NKwzMxF9NLSmgDCiwUg",
  "key4": "3MhSvsi3FukdxVgrs7yyotJaTFPR2eYmvqxxRozrSr2f6yjrcqSeeRVMsmFvnBGg8E2EXCNs5gk95VcEzwGD7629",
  "key5": "5qip2Z6fRN3e1bemhkCFJZyr98GHYU7dW2T15tAL9eHuWmaR5pMU4A5aUJeCwM2xjsb9dnjUrg6DEFhwkYP8Kuei",
  "key6": "3Skh5N5oF4iXm8TwpH6pHP9EYWq6NaLbKRmArw22whDabtoZjcAgjgTBumkstqDbetUSsjEvS3KgvV3pL69dArJ8",
  "key7": "5YM47UJhXaUaECbKng8MVFM6g8rZnippjCAoyhCC914U6yLmiNBMd8KVEWPVuqWrcGrjSGbmqHeX7scmqgjQ8sdH",
  "key8": "5Rngrytdfb39GbxbSrmBEkKB3A8h5kstYSegTvnwYKwzYXwsvJJ1xkXQM7Hi68qxKrwcS4CirRA44tvqSNBipScG",
  "key9": "3mbDGqAJdR94pnckg33kfiXtiATg4KKRep33jeD7CHafmVgnGT7fmLxdbrvdoG1ZezVk6zgdrHkWHY1b2Dm3F7Cy",
  "key10": "3nUM2VqypzxEWWDAyZtvMaVgbpHtUhaUJZrLAGML868vHLTg5tue8LKwnaMg6AeHTNw5HxXJx2E3ztwta2n8VMZg",
  "key11": "3r45LRT3z2RNutxTj4nveXvALwK4a1yRkLuoQgeYEKoZpXH3uhEndVCuocBt1AmP2KnE5LWvhBJWRkNQTcvoivMd",
  "key12": "2546JJpcZD5aQAJznh4FFTipT818NuY9vbPNY28P7gXDWkhgscduK5oAV3gNrZAmNCqN8Kre29AJZpreMwy9whsu",
  "key13": "4HDxNjvAKUrZHnJY58jKhiZ9HPH9Fky57u7tbXkyRE1jm7yRzmDDkiyhRoyH1mo5uiG4uPDZQpArWXwVvZnnh2Kg",
  "key14": "oErMm2iSRQkVwYiCwjLTnAQ3N7aUdtXn4FQ366bSMDnEoVtBLCziC5keeyvhbqmvxtLoVNT99jHghfg6Wja6MFd",
  "key15": "4fK1EES9qmXMDvsNX1GufhNBpFeiXA94Wh45gNJN1261yQU8uwp6gyCt4omPoT4y26UGL4r8asjGJRim2aAUBT7R",
  "key16": "3Bdrzk5L6yDF9rs1b9Y8DTmBbmvmbesRPmRemEvYpUjh4b2yQqAToGwhbsFAgKfrYXewiYBGSgjMJznfG8wPcrYJ",
  "key17": "3FYKmXmbpQ46fKji3CrrmJ8x6q9DAHhoWc8cTDFPAzLX9vGL7paYWKxwcuaUdpaVH2zbGjcTQXkvEX4AoUyxxa4K",
  "key18": "5Uf8fQijSpsCnM7Bqsm9p3v923jrgeYCzBMjLJReKGLXtLtx2AyChjywnjHsBLjaaxWXFyEGsBW6BsxwbWj73z85",
  "key19": "rVoUoNjGhL3SVXtvDkdhHDBJaM28PSc7QjmAhct3D9rcvsn4TiRG2Gcvb6BHySgCbe8GgERbXRaULje5Ee4hAVP",
  "key20": "3e2dKH1rZsmxgmGK4CKY95BGy2zGfdrDApt6wHiDLAr14nVNFU5R7DVAKGZnBGnV5dzpGFjV4meF1DnqRzxsswcB",
  "key21": "5GCVaEz9Ejb5nx3GA7Zn5oQDuRgqp7SW9vUqYrev1sFoWTNy8jAVdanprZuuTqK1LXeb1UCz1cTwNzathRsFEY9Z",
  "key22": "2XCu8hyS4WLyrEfJUJ3RiH6mrMf6EJkp4uCjRoMBWCkbKZjv3yP5ebRkY3KoVoHeLnwhJCS42k195JYg2s2bpZYQ",
  "key23": "2UwfDbXXvouZAhJTNWtE7XxSo1hdhaVavNWsZvemEwpW6T2xfD8TbVbYz78WQpaL8JHQDkHqqJK7rYZRjhHmsT2o",
  "key24": "51accw7TakDKvCB8BVaSfeTNST59W4SKEDYK25cghMJ2QLfKBPHh6TWTyYoKX4mCTPdkTqcLzwCSGHTbcGz8etnV",
  "key25": "3d24dwiStHXwgnxJzr237zVcQQSwK3BSLKEvoYJNe4VbVf8jJEjzrYeNLqSQHkKBMpWC65rU8a1Csiy18qzG2voi",
  "key26": "4WvuiB2QgEF71r6u6Vfuvw1D8PvF2HefC4PxuPufRqM3FDHVZ8EgYDWcszkdzTLGq6w9DYYxP6bmC9ybyaFeUgJZ",
  "key27": "3hjiyDhuvthiA4EqW3fCmm7niPARYQBFNZUuzCFHaE2NQbpdNyNgoUCsNVNMsKHpaoRtgDcqSchgSwsaVBAuUDv6",
  "key28": "5B6bNC8jxxNzwM6YtSTZQRsMWw49VGeYbpvGGXMdobkHNdbMdFz6PnVU8Fsk3UHuP3cLwh8qo7vn3kvNCQK1eeK4",
  "key29": "3P7ZQzRFFjJ4xuKAgBoiDL9AvBuSnofzMCtQPTxsuMNxn4WV6mDZfGWz3DQnnk3sSawdc8K1WrgWqdfxfpCGsDwR",
  "key30": "5y1uHLtMdsURQfLHpb7Mx1k59g6n6vj6zZXgmrmaS66t8P4nUEPCXHTpgCKYdJYEXd7CcDzQYrbkzz7URQYoiKXB",
  "key31": "3CtPuaiPokdaERB6QDneVaPj5bgJH6zEj9zHQKeGPgq2BernshbZct3Y5gFmcGtfMbsuqB2kWYijXqyYCpQz8bAE",
  "key32": "63NBcyjskyjyFfRj7J5fLwSxM7zZKtxfZ85yhXUpCV6Xss3wxmMLKB7btPr8fCxNpbkMeVQqQGsPL9NGmBsNa7Lg",
  "key33": "4GqisW3A4e4H9HQgAX27Kktbdnr5mKxPqMAEyCZLmZ41AHPRVBLDfiZe5B7Efm4PC8BjjMFUw1Ea6DgXVbv68y1g",
  "key34": "2HssSUgwx42giBuBHmB6DUJRk2dGQUqrGMSnvg4k2jm4NjszUnGW5bzopSnR3ayvFZ2wvQnVvNrCYTXxVASstVFi",
  "key35": "65EpvPBbzbFuMqqiQ4JdhtFx2VxgdH8hAvCSBsBeJVBYeVKesSuDNzrSfXUzgJh6ccXYpBvmx5Gfoh9wE2f1cRTY",
  "key36": "2f4c8ht1GCrDAKf1DPfmr4FKW6w6bUqASYhRNVZJuFzxAHSsFMpb9g8V5RFDKWDqQ3wupfhtvMFMckxGxZzTqPsE",
  "key37": "2RQM3CvJHZydX8znWnND9RkxE8K1F7TdQjAvWwhufhEUXXXakFWqK8hVXLJbRBDHTEhgsS9UnQFHDVr8yFy24Sqk",
  "key38": "3AG3etAxxQa7ww1Lp98uJ1iJJxiWvVWiWvyH9FWPMkZQJG5vafxEVbgS2LLJr92GiJ4pKDBAsjnR1kKdr2cGGcXg",
  "key39": "4BuWiCkKBQeeVUSmqVyaVLsSLYRn8JK6Xt1QbZnbbXUDpy7AcbH1Bi3bRke8qKuTDGrkqpBikBQR5KLyTJTwvcw8",
  "key40": "4tgNzZAfgJWTwQnabz6qhs2Fk5uevXHZjTRmwABEWnook1ZLgxVgB7ENcyFda5WSTAtGeSpbZU4N1cfSUprdhaGD",
  "key41": "4MwxKtawT1tFezCU52LD1XVyrd5ttvvGMCB9ik4bdWLEdzuMkBWJbGWW1sRdjfYh8H5NgEihWSdL3jHKieAUcjob",
  "key42": "5SPTszEE29aWUmwgUXu2BGtU4qDN49cRSADmN6HxsfGdLjJtfN9ymyJVy4JV5s8quSNvFBrm1FpQTEaTtaTLpGB2"
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
