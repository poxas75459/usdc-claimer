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
    "2kJ4CzWthVEQ7fUjnm5J3M4ygmNsUgou6URdSAszoc4VkdJmyUiSRfNU8AP1wpWFhQsoBwWsw4tAk7o1KvGS1EsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AXatAsFZ1mAVBAuks6k29tb9ed41K2xPrmM3ErhuQGA5KN8bB7P1DaEpHHrw9T4Mzcsw7yG6VeW2FYH5jWbYtfa",
  "key1": "2EhT83sNFMKYYqTLGg7ki9uQ6GvYuV4teJrabck5eDKGktQ5rWoV2MFiZVuxgLkjNAqu9y5TPrZcET3m1xdsSPeF",
  "key2": "Q4bm7s7PBXXHr6cjCyVAUvBPqrQw9R2i3gwWoP8YK3ytBP2VXEzQSUfNVoWbsN8BZbebQGEkdL8xoVXpVbr8BX2",
  "key3": "5zkincvqwFDydeM1gZaQ8CYBYguNJ9vj3cFZDHLxieRR4cmG8a8TUwFq7SPPBiFCm525v68Q43itbKwPwVNuDD8A",
  "key4": "517GiG5v3K1pCwaekszfAgrvCDL9g8QrDrea2DhfwnncqvPjBjMRYu1kaumkQ7QP8d5aU3JX3KkLVcJXVF7hJ13N",
  "key5": "57jXtdbfvmnjj5JM7iPQwYAmTrucca8du83yQK2TeaMeYoYwLes4b54aY7aZpWwamBZPjGoQSqSZ4ovx3YpjEBAu",
  "key6": "3M9J9727EaVP3wm44EMqNepc2fnYmDZFC66KxGz4tZwq36J7iwBREpkEV4jWSHsSZ5g3LLfMJ953odGvZbGP4tCt",
  "key7": "4MC3jPVJhuobhsNZP6tNaB5PTnvkTpz1JMmgZYUSNxs8HMVSQAsi6gs15drDeAfAThC8RgRKudzkj9Lxg4kQKvos",
  "key8": "57rGtcwzniEzEbkMFMHc412SGUwcxDGT5dyEpnVT11HnrRR6k3URNzQBc4TDVRemjBMTxrgaofkkwpWNfWEquhaN",
  "key9": "3zQX4KDzsfpUqeA279psuGRbkxe1MFFZhNwpBmDkwBScG48KBdErQD1jRZL6A9XXHzLm9MQDqPaECcnEkryWN6LR",
  "key10": "2xp734fBC1XUKG16UdoFxSEAHRBdvY4fWuaCJPMALDmg5JHGKypcoFzeWFCg9T7jtNJxiZEyNj28EkmYrJrCqR6w",
  "key11": "4nwANVCi1HCpY4tT3CtiTb4rryNpuEekLFyKTAuDntaMfjpSJYzgHc71cnkYioitRDf1TXYPNqC422X1znrXnB5v",
  "key12": "2fhcfiEZh79KSs1DJJAybbrYYVPh3ivZWpoDU8SY7XRXG1r62XKqBfTMHwFpbtkfPyGkevBKggPv4wVteU5BYHFY",
  "key13": "5rtXUmAUKonbgnmP8cf79sGLA4wnijkwCzhwpgNFbK8dDRjud8M3DXFwp2v1X9YJhnjRU7VW79fiSniryipjHsPJ",
  "key14": "2eyQVsfHApUtew1qufjXfCuvBaj7zTLdeEkMjBVuDit1BwnUF5GqK9naoexpziecp9DXd8KhvC1LrHhAVTfe9XdY",
  "key15": "3izViCDiLczU6D6bez2dh1Dd5TMYjqvYEjqmPEqcAnvLnapF4C5Q86g8zMrQGrQJUTWA8zWz28nVrhjNFdCpboGM",
  "key16": "65hGYoYL37uqAQXfbAJFBBS51jNMccEPDbAVpWzGomrU9je9Dc9WwAWxu1ZzTRv4Nju1WtmNqP4sqs7f6vfxvGsB",
  "key17": "4jbXcANqbCJHS16ck2d2mkYMWK5oRYizUPxbAdbAWD62zFANW9XVk65Q7nE8SxxWcE7p9AkWMAPD2GQ3bBCcLtf8",
  "key18": "39ASkAoARxdubt2Mb2u2is72JEbEzKwa3yWuUoyT3TUPkgmKkC5AHmugNmCeTFocuG2QZZG7XZUzXB1g84QVYkTH",
  "key19": "YRTczNMN7veQ3nSfMGJgqYRhmsmVGX6XTKYavMy3Wh461RoUPuKDzwcR4qVthCdmaCCLjAACijReWo5wmc1wjvF",
  "key20": "2ZkAGf6HUZagqEnrdC8xUDGiwyK4aGGSnPo7WtU4MHux5JcuSWbjNdV4TCuNUVX12E2haw6rD2YEcYDh3x2GXmwg",
  "key21": "3fYaf6q8QcMW3JAYaoLBaeYcTgqs3Rq7cY4QpvWVvNPAzVgu6mg8mETpPYKC2ps6DsFjuJeFMLjDNm73uZWYLwvm",
  "key22": "5oEsnSw9genEMMXkC2XqegGVTTFRR6XWBSacXirFAReoo6CkBVmnJjmsq8XL9vjkhBaeZzCVFumpuJWEXEX1vmX3",
  "key23": "46ECh1dxWye3wJtyeaDB5Bosfp43CNTrAYzL6f1fDdD4spYCPTof7aSqVo5gkvF2uTH2hj5H6RWwD7yv3JuSUNXo",
  "key24": "2dzdo8qS5q3vLEuyxwg9TNWjwaEKc7hgNvbVUq3yXaWPJZcLEZKQQ8tgNKmbXsJQ7NYQiqC1uZ9LBhQorTB7FHgv",
  "key25": "3mHBXeiy2oUqKouYDmwUom3ab2NugZ7EpvfisdEDLwGm2tHpXEJt9njLBJwCKh4GorsCQSV7L6YyMCPRUP3vU2WV",
  "key26": "4r2YjSbAKsqWAYT6TLU6BbfgTyq5HRnmuBMLJa7RghXkk4sr8uSHcqpmW4nm4urJJDzKrkrLpxbqXZepk7szv6QK",
  "key27": "3rHoMBY74B12wZn2FiJ3qmuyP9F6ezoLGp32JsiDGgJCwUAwPqqAV3DSVqGyV9o2GJbZKGzHP1edimmgYveeys7W",
  "key28": "28E8AJKXemxoKxuYX4gkJRstB9jXqkfwx5M4H1k1zWLm7TCa6XJS5nVwiWXt9iceLPwy8f1gcjVyeaZ1gXvoqfmm",
  "key29": "3XC5jWCccWZJfnFqLaC7HuStgouYMwDMUmYWwDvoujQzu55VUHQ7bAtHnvZVkzLrK2oQpuzgX3Co9M2yD6NZdWv",
  "key30": "2DzXojzVLaogZD9Q5AS5v2WyPkDkk9Vj8WdAJFrN1rR1HTNidz6ogrjJQGgpYuU9rwN3EosBMgP6EgPivTCgbjuq",
  "key31": "B7eBxhiZNh8PDeNHUzghHF5SZeC9LY2V1pM3VBH5svpcMH6qgddXNkk8Q2My7XQQWmFce2uEgffbL3pSr4dqQCP",
  "key32": "3pfErGisvVF5C9ZKrDwLmdFJ5PAPg1etg2CjWMy1C3RcFCvyXckZ3ufPnjGe89GAekPQiFpLyhRDLhKzYULigyfa",
  "key33": "2BEW6nLy1tRcmRbu8ENpM9tggXkmKM4NPjJzw453ReuzV3zqwLetorLyGDJutmSgF3AKkhvjpZGcyQFNd6oUyo5e",
  "key34": "3EnrowT9NLvjHdHadDdrwyxyTryfCfdWLVzbfCDkdLQYauMgPt9QfZLfTi6mCssWib5LNdxSjgddpnY1nbwnwKQv",
  "key35": "5jyshfdVyJn6cWVkmSUJPJudHqLor6QbCQibJjPXKRjMGtrB2j5D45uHB9TtCRMcAA4npD5Q4Y5cRzCNTKgtYa5W",
  "key36": "5JrHuHHDypmS1rqHnXHNrenzjTGi5J9sNzxvZKSMhhhbZiv2eMgbPgmtNaM9j6BAHjd6XVNWTpHAwmAjaULjg8t4",
  "key37": "5YJMzdm32iHjSm6it8kxNYQChtV4Y8G8Wk4icAz8Lpy91FuGgpfYh2jeVS6BEdH8g6uGaayYXZn8BkeMeqyYePy6",
  "key38": "3gAHpGFTArjMGKnB7gTsbL6D94b6725R3wY7SVa5CG5RHgvfPupfrXGEJrFiJ1bc2dbcdLayUDsjybEiagt7pEHw",
  "key39": "gPskY16ofxMrumib5MSSy5bHwR92pifDR4ptG8EN8iKQAtJZioQEpEmvrKnsDgLiUHWEpfQKiDEVkWRV9mT5eH4",
  "key40": "269zUWkQbLQrQup7RBPD687d4oFvjJU1tQH8ta4PQLk5cHyDq2DWig2ep32JwAhK6EBaqyGnVmj3mFN78ub33SVy",
  "key41": "3HyPptuef8RqFvByxrWnUkWcK17vXXkAj8abZywsUJfFTyDn53DP1Ni97Ejg1M8XUHn9LcHKdF7NGERt89sCc7nj",
  "key42": "3uNkCDbeiZseWZx53izVkUr3tgqmeXNwvFdLBYgb8GgnYhSzCEezvThfFYXBzkqTdphWZKvZ8LdaMWBSLkggUkwd",
  "key43": "4dZx8Z9GEn8XV9AcCTpapMkfVTorb8ZqJUkLAv9ReDCyYBJfyQP3Shz9iEkh9L7jRdhFRnE15YQtmWtBpk97bNYK",
  "key44": "3YnjHGeNkHL5T9Uer2j27Acs6SJKZBHp2SuwgLZn8aHqmcqPVghPDvtauqvAxAUW7dDPKn6xWNAL1Qw7bDUXbVh9",
  "key45": "4u5PqNhWoaweKJAcqmTM5E3aUyLUG8NNL8wk36LwFB3VHboTTmfzsHpLvpcrWZpN7XfzoxqEYSseMRrtxa6UZc8u",
  "key46": "zTdVGe2SCR6K9DH6nzGCJaJqr7CHvzNeptf2VxnayEHJXhHo6b877YK9SbsNAb53VuR9JpNQyd4fqfzrD4N4VpG",
  "key47": "58c1MQ7rtWAZEZM3X9A8u5pgg2nABZEgbyE7ahWMeqpDUHhp7YabgKaUFQiKszqNEmKLPSErY2zyrawQnRize3mv",
  "key48": "4bm9qa4BKc5TCLpz93nhBhsgP4rZduxmpT7UdKZU2fXBxQWp8MLKGWXUqsdFYVsZ11o6SqJR2boJWZ3MAsCqWcsv",
  "key49": "3s7R9v6LEsRMpcwHqcHThYZYxpyV47te4Bhu9mFKE7HLA2SHnSdHSv8jeuUJnonfGgywFVMUPJK5qiZDKpbitifv"
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
