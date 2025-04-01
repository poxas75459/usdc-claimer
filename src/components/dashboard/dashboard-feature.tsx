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
    "3rNFh6uVwCuq5UMbXWixjZUZF2bxh1SfZA7mLS3VtaPS6zZUNbzuYsah1VbN3n9s9iHYaBzrRW7dSME9iakCzNW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uh5u72LqNyAGZjB3FcZAX9xwSWXoNQxWpi2VRgShUZDZ6a5DtsVf16jovN2BaFurSSkJk6i7kk9UZ47PFeFUJUz",
  "key1": "4hUNn4goo68BE8nEY3Mz4wkSiRgesEtvGopxyps61aTsikjpYqJpd6H73yHWtK4svQvqKAQivYRkVZ4B99BY51d8",
  "key2": "4GxuUthFMzeoeYWyuvmr4kcWdqdUsZ1hDod3V8soUkdbWL6S6xRiFWythsKy7jtQUP2VYuk3HAULWFihph25JCJr",
  "key3": "4653967vbo2cjncERW7pn4ECT3iFU1JEEsR9p5aRxDNNtzXvqqcgSvVAcCigCkGsCKUNStaeB92J7ZrEh6AhdKVh",
  "key4": "4u8pSdcfaWyGWsXovbf52BQZbgyPq8yXR4SUVhMg838fNCG9evbnCdYPeiQC2LKfh6P39t9mrMLyZ4LcrBKFxycR",
  "key5": "2EQdspVUi7zEjePTPTi7sR2M2HGsyQhjV2UqNm5MPFf8fqSAsnrn4m7VUyHujcfLPA8TpZ2JhkNisqj61DBcQKtA",
  "key6": "2wq9LmKgZk88c9YDRr52fkwCaPpkdCKGMed6MsbiHchkHMGapyJFdWpwTrCKwRtQe3msGrF1E989amwYFsKg6Giv",
  "key7": "3wrGTLHVPGZo4dta1aXbPLym4oZB2X9DpULXsftoW5AJqSm2HUjsc5MrCUH38vcJKPS82usTb64NxrcGW17CBakt",
  "key8": "56nbmrd5X9iyRSjXCZMmxEiuqwLY5otseDj28PBPtkckH354HR9SxhqGg9H9uXUZP9Hh5dv4PjEMir9doWcuneCy",
  "key9": "4jkrHwS1X6TJfQHqEKpS6iaEkCh2BFSoJeScg7P8mXV2JU8xpZ116AToBUi6ibGS4esrBhGDZXbkC8HVzXz9u2Ne",
  "key10": "5cD7BcnZ51Db2R4D4RiY48dL6ubCDwAW3FmCvGfRoeULwrPX1rbUFrVQCgci5UhqcqF6UvoajE5avpWpoYzCm9Z2",
  "key11": "3FNVABMHASyxXbHHCj8FHk62RWz9M3R1fFHG7vF1pwgmkcCEgCEztT9yxgD4m4DUE3gRx21Xajd7p4kcMBieHr9G",
  "key12": "3ieTGcNG9qfb672RU1fiX1Rv4PJz5bqmMxNBh7mGicoLBrhJHtNjm9wRK8RvXeNmnoc1ufMfnnSnJLRP9imj68uQ",
  "key13": "5C1xUMnzrKwZznBXdA2V6j5wWHme66EHyJQSCLiQUKH9Rdmruc7rHrNgFvyKzYpmSJYYq3mRjqJkvMnL8pyJotXd",
  "key14": "3drP4GFnsJ4Vowr11rAqzGeYub3zFpQGsyCEn7YkuFfk3DRcZGjfkZhQ6GMWHFHwV97NT4MPdPEsKcRryPhfVSgw",
  "key15": "ei61GhmcTJiJ7b2LcVGdeVsZe1cYUrPh4Lt6pepeVpUcFqdJuxMJUxR3WTgPJPW6CX5hrKpYmTd1THmnzgR5GaE",
  "key16": "3p72adniVAGwhAkguyCv9tw8uqEQw2mgpPDMwMTU6NpbffTHCcMe8aEmreaR7foxKEGVD5nhcNytNZvRgGqHAiSN",
  "key17": "eRoxHGg5GuhERazixHRwkwVARGyRPx7XUhBtbKrjEAhtq4GuCHP8eCcdshRfHLrBuSHgGkhxcK2by66X6z2ddqf",
  "key18": "4mHWNYtNKnZuYN2rmY9rXv5jRa3e4H7S9BigN6LvCKB6Yb6X3ZY4Gc6HBE7RdgbqDh5zWnp3grueMjNT3DxAeCLB",
  "key19": "5cC9XyiXezmhDCuwKADCLndBmbHfwbg4bg8Bt8Tz7afa1SRv2KerTkDRqfLbsQByCG5z3zHCi6cJ1cLtaU3f4QJB",
  "key20": "4CpSi6FSRt9bpATwvMVGn47Xr5dp2kBQYNRjhuwNdnsMwSxDF6LqZq1mvhedZPbjHHpatRKpLcRRNJ6f65WL4n24",
  "key21": "5q8LZ1TbqgrUwRMW3UwDZKFAPnG7Aoo5FtNXZ4uW94vSLkEFGNzcBJG86hc6wxT6oXpagZgiV9YSp9gakBt35UoH",
  "key22": "5gHMuahduZ9K6uz2HkmCGfJttVWN4HKDhzqQGrTa238gGYjnnLC3oCWLoUas6QLnERZmHqfYtVsfcxh1eFBbgmRB",
  "key23": "2DzhUgaPFw8YKGf1re2tKXxzAhzF6h9XiXgyYiFPdZrXG9LiJuuQt76eAnR3qvw2uk6aunwzgxvfmzTx7mB3u3VA",
  "key24": "2BodEstvp2NAG318RULAF16nDqyLEXdbNGf64uDJVJtsfBWhx8iMPCm4wSKoHh5a7Yz1UJ54NwvegZWCVYwvzTv1",
  "key25": "tW7BkiQoj2EHKyVzL8EHBvPBWvenaC321BEdHjEXGZsqjUjM4nkA6cCB6yEUZ935xsh6Q1pBp52GJmZQvZ2iCQ9",
  "key26": "52L9HNTkso8HuLC84DXdseXfe3kb6W54NVtLocMj4LtmXW4pXG1QXpMbUeNuZspXh5yc45QHEJtc2gHECzZsoSdj",
  "key27": "3nKtVzSnC15Wu4X87fRv5Q9RUtZngLJkanuPs9YrfvkkxHRtjHtvBjgN94mrLFxwgq7vtDj2qZsUoDYMRsXvTSLR",
  "key28": "1AN3iYv9j3nMCZEHAftMFwLnZVo5vRTUqRyhnF9Tw2y78XiouxUdbEx1MZT9cqozDYPt8XfdQKMnTFm7fARcNYR",
  "key29": "2Eyez7iUip6sEKgNmEdCb7ZQgpK4DDxwu5nH6k1U8z3ashxfjNdtEko3dNLFJJsRGVuJQ3mjYEgNqxyZ69oRsjLg",
  "key30": "2F2b4eWMmSRPnLVXPJe3wExkmYYjJS1is1G7XLduZLW3bY1MQcE6NtFu7YpLhrcWzgC2mNzZ8m67PQuwarb7wW27",
  "key31": "41SVF2w7wGbEMnoNWJ7s77sJcZf8SkCownoQkW85byC3uPiWXewHb95hZw8UrUgo1URT5FfEPK3inMwdHtff26My",
  "key32": "2tJASoMPkHLdQryWX3z5cjpnNo6QQg8UqcLNVNNxPg33VkGHc9GbPoRt3Y6or1PVQua6pipQQbhGzrkUpb4Zq7MZ",
  "key33": "24Ld7cDdsPNMfAM4QDHvpgntURuv3WRkkKTmL1jssS4Qtuzcrh5BRiRi6dY7Fwk26vKchyBHioy6xmjKMEHbcajr",
  "key34": "3wMDAJTY9dYQXLTUitXsY3Lroam3tw1crwLC1WxdWsHfKUSKZ3iQD2zptY2KwApLcoN4VVfmqAjsyJBKgVrrvkLz",
  "key35": "3GXXrDocaacXjm3ZJ3aqmJCESQNJbapfr8ZaDYk9d6ZrccxNwqV6A4D6qpyHc1MFoaHynUeTzTqk81uu9ZsCGGX",
  "key36": "54EmDts3Fz3sB2v79UBBiLMBUwvSVD96FMyAGhymheU7a7BTVK71MzTCB2djrrc3XR1pocQcr7Bsou4sbP3fFMiU",
  "key37": "KPFzXvovrSmGXBsfvitnHgyCQzLaVqQS3TWybajoRVhrodzNVEDK5M3WjqHSUxpjriQ8cbTX81cGpzXFwZbwAyh",
  "key38": "3LFXwF3QVHWkQpD8iPodcExSEoajYkCZk8CCQJKxDUoPGLjB6VGyR392ng7HpNuaxuFZvFmZfkxWHUygAqWeDAHL",
  "key39": "3xfMxyGoSsNRsn5NvssFnYAihrK77rf7Puruk7nNyp56AFH7xR4KEhqbfuuSVVhbpJbG2cW4YmouSxc48aEfCU6H",
  "key40": "66uKV4KQDYMDicWE6cf6tV4LXFi41rfVN53VXzkxnDKMKtZ5cXyFbtxT9KF1GzEJry8HVCnRTY4a1wP75tGPMwai",
  "key41": "4EwEnC8fubzs6rUJf2KbtMLLkkNh3qZ65CaKv7eou1TCjyG1yvGCwBz34Shhk7Ck1FsCPthPdMsoTvgVnLbR4vmw",
  "key42": "5ZgswzpCEShh1M5wnx8cCKL4ihKe2u2i2kUVzM164yiiQHPebDYoH8iVq3ovxwLadaD6uR3VBTmB3QM4nZbD472j",
  "key43": "5kRbmVU2yArxdEYMJScDrDJjYJjsXSSCzHdR8NVr7mqQ2Z5dzc48SAYCKBMtYgscH85BX6QP1tVr24qRT1361Aw9",
  "key44": "3DpQuNZeBAqcqYxM5r36gN8YqfYkcAFiMy5TRLZnFD2RiHz7qJoCGb7p1NeqNSN82LYvzfmmVbFM45zCf7LWjpjw",
  "key45": "ReZXuMyrbhFvgdxUPgXsxL3d6JVvBkQrziEByzCpZaKgBDVbrDoovfiycEFiFTheTNPpWLwaucGPjP8rs3mKo6W",
  "key46": "2SFfAKqbBasjExRCzvvJJZPqFmZE6xZGPrrZWEfPy2EH9bgQSjjP7tyrRpATr5WXbP4UPX3fK8md4FaVYsWKgNh1",
  "key47": "2cUGXfxXm5pG34seL6zxWqcDZgeBzfyTM56tseeoQacao97deufcvDsuSuafhVkSxVLwMCePiUehXcGFZ4aWPbjh",
  "key48": "4kgNeAVEpZtGXGVj7VrvMfH88phFHp6jQpERQME968iGszPXSwUkpype82ZxYVAW5CjAeHUa8wTN8sSuSn8Pa4v6",
  "key49": "5zqxVvZXJNFZwdfEzGiawFoW5CxtCXAoSroKEgHT71GQs27JL7n8aiSeSF6yCRTUbjsdvvMtZH76bucpP2j9CFzY"
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
