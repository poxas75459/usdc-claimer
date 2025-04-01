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
    "2imTeZWsrH6EBn6F8M23VxDwoZcofMhqrbngNAuFQLAekbsJhcdA4pXtVFonK3fVRtepZww2KENHKEQqUJ7QZ35r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gk5D82XhWkwaMvLW84dFfJPL3kvoSh1fMMBiwcvXp77xtjqZRP5d7vCUsatrQHcCa6DSVjx1FQcoXEwgujoCMze",
  "key1": "DFnnzPZJVgt3d181ua8GtUBMCEZyoCAbEqe6E2Pd1sUT88XDyuBzZTr3K1ST4568SxF5pJ5aHXLmkwnTdJV7451",
  "key2": "38ZqzAYhHxa6gYCVH1vYUuMLNMguzY9Mf2jkFTMzyZKSsJJjZKuG82Xmz4HiX6R9pWTNohiktMsBjLuCXm7Rraog",
  "key3": "2rn4r4K36etSFsQpCVPuha1qUo6RJuaP7UnjWFfy1U4yXyWfsHvDV2osNxYBDwAuqCd7Ur7928Fo8CTfjYvjUXZx",
  "key4": "2TBiauiXAeeT8vFHWow5snQ7mj8cV7Wh24GRM98kZLtfUPWBtbrpRQ3utefrQsZsdP8FpU9k3j4VuKfHc2sANmPZ",
  "key5": "47rGton7JmwhEwhynezb9ErMFX61FxKFqJBH4pBw2wxy3jqrFGkWfB7b6HRefbf2U4nbZ6wabvY5iqC7dvA5tZC6",
  "key6": "2AY37KmMvmknCnfrbWiNLQYCWXdM99NBBTwcdP2735myUBvFFFV9ZTT3t7nrqQkwF3XiYy8Mvk4cSLAfQBCzx1qR",
  "key7": "2DB3onjhGduUEckKoeoeRsquftZXAWtH5CtaE5WZHq9rNXvX6Z4RXr4v8Wojm876bVo9f7W6oAovujBQjKCJCR9g",
  "key8": "37oCthKFRWcFieQkoWjYTY5jvfauuJvAy6MR4LhizMHRkTyAyNP1NMMP9RyCJJpBMaHTuH6M3E1DGXUKKJU58q3s",
  "key9": "5i655v9JmWGRAXJrHRu37KwzP7xamr4vaTWGbhZ2HbQjGEouNN2vGxtZ59Zpjwdvi7q3Lk6drvq9iuqiDxPdFq63",
  "key10": "5ESSTjbp6bNcGXbgA8fwzsMNm6eeGWy7TosiPC7D3XWBvBA8nZ8TmLUZ5tAunXKKhshneZijDhMiEBpjofbUPG2i",
  "key11": "5AaqKSD44iVHUr3qyRTpVGHj8zUiz6KsB2rFvt6ErRodr6Dt6FrmmL6NFgeryrhdzCXMRSqgdoYnnYyrpYGe3jJv",
  "key12": "36E4qTcXTNWm3h9GUPqfpfrEi3f8nKi7K8FxYjRSU7AQhDYohuX9C4HNMbooEMvKxnKiBWZuTgHzArhuJx5c7MjC",
  "key13": "3wZh5bksm9NrkfFJYezfayJ9vGPoqRfk2KdG3r6utC3cTKNyJCsPZ2Wck9RHosvX6n4XM4RPZvGhzdjPfL9AJUK1",
  "key14": "3EacjB1G6ZkHCe82DbXpGNxzGzAws1RBSmCC4Q1hoBvhBT3WgmkByUttta5QcUE7pPqPb19w8VYfpE8emyfYrf3B",
  "key15": "49NDunoaDnuTVztFWS5zccj6Vq6hMFtuBthhY9r6jVSVfc3dZaHUsqg31fn6KthZZZBcUiRTfsXvn6ELbY79REu1",
  "key16": "5d16ZA7k6Bi8nNFmBuoQtkcUYMkspriQrScccKCsRyUkz2nTzS3Eh3GrLCci3DUEhykPkVUssHrdfy4GKP6tjiYr",
  "key17": "59dpfjksJdUbDxYji9QD8UxozFWc28NcixFXUwXX1pKcov5viSH7fawMaXHCNM9dx5emcgcsAZwvT6wPm4aXKhF3",
  "key18": "4WxoWYrdgR4JtTP4SGyJWDAbEUoneezPZC7vkAhFfni6SCkvEkf3BuN2azuxSpgU6fyBkh3rRhKy4Vh55GMVQ2Fy",
  "key19": "HGz6i2E6eHcxuTpv5tYjvrm1UULM5Nmb4EBrcrvL31gjGwWdMsw2B3kdo65tCEzvbh37VKbR9sHfpzXDiwggYcG",
  "key20": "ykkG4HMdeCVc4smsnXZgyTKhWcfAPwPN67pZbNMbk8KBLoggPFLbGnogmgh8TMN6B5KZKbykpaYriZYmdJhgRE6",
  "key21": "2d3o7ARFsajMLxevYd9jdZE5ieJxYQWrJkyRByL2tRCMd81oHHSJTvS9d6AWdMdGWQDsa2mC9qsEAXdNEiKbtfuE",
  "key22": "39uEFqfBuEwLSKa2g3fJ2GEDT2TLw2yFyvCWsxb7DjjCYU3fCCXNonN5v7fFKDjP336RNSjSNqLbJtW7DHKARydh",
  "key23": "vs2aCRJ9wuy8rJpkQ1cQkdKYaFHRaMgPhYb8mfc28gEYUKpER7cbUcYhd7EnbJABQJGDALnoSdDZNRWpfjY6yKZ",
  "key24": "3zbRLBTLiKUR5q67yzVKc1qE12ECknGYdvFk6MdUH1YyXxYr8nZGthJqHjNhhkt8TYKKgXbG4c2joNFstHdPSK98",
  "key25": "51MJzRvjCaFv45d5goqSoaUxwrwphsRLGvFjdEoTYx3Xy2kYDVUku86B2irUuG2Y8R4CXxXTXKQjdwmtDM2UXGzv",
  "key26": "3R32bRtCwwgggHpJJWUaRm9i7XH7LxAuNcvLbno8xYjcZnk6NTDHAJjtSduWMomjABEkH3Qb2ZHrvj3BBQZqTSUV",
  "key27": "26i5JxvGzs8o4zD2FBzYdv9gdfdLYmNw9buxNRyf93rHum2bemEN7U7cqgp3EbdDdMLiMZrSqfWKvfw3GP8CqKeF",
  "key28": "3GCrzSVcpe4bwXqTnETDikkYoThFbdK4PnvV2ch2uCpXGW1pZYRPkvq27KxReGbYhE2Xwb26U2NkkWzG38ymscFo",
  "key29": "55gEE5m98nWLqR5MVSrqgiEKoW4f3Aho4ie9eUiDwJuChvimkW4CTZHY5DnqDruBJi5cN2bXsidFnqSfoVKVrgLu",
  "key30": "4dbxssiEMQfsQZTXwVpn65AGgGSkKwjDcg3J7cP83yqVQiqtP6ebDAUhmCyx3iXp9HvjG5qk4hwLVGMEJk41LaoK",
  "key31": "5ZaLtKECuMjGNwVuRNnTeTdf4PtYMAgZZYqFny4nF9pguj4DCawHqtfnfxJLGqVBgSyBG3XQGvDjo42dwBaNmxmy",
  "key32": "38c3QRe4wavCC8hT4JBDkjx1tSkLV4h82zvGsDJCCbKhsE3My8sWBTRSJy1Ev8KDFKMASp5TWLoUBXGzaNzaANP4",
  "key33": "UPywxnyMD7ZVgoMnEZwhqN99FnCvmuTKhFZUN6q9sGeFMjXrjy2jZwSbkrVAGSCNXe5TVLbwzAL2zFT9VPBTxZc",
  "key34": "54csZifW5C73bw8fnhTGhSwZShfRodEcTdhTWDJtBHKxx12VX8m4UXD2g2U4MPjRj7TzUHxZT5UntBXC5Cd4GVEn",
  "key35": "5PKM13qWC2qL7kXAvmr83khALjBmwNzsAtK95ygSJHAwwbAHb28dYrhguQYjsxwEEL7VKXQcmS1rgnz1LUoVpjVy",
  "key36": "5BzoRytZ9XLqN5mMyFBoB56qtBH32Z818sQZL88YVZiSCdsu4jkeWgPi2DwEEJR1f1p6TQ9PJ8dizGd3sHvZrAd1",
  "key37": "5WLV7MnWrNMKSbVGE2B6DFTcXzS2oZzURGg6ir66zsy5gcB3JdChb8D1GLGJ3KsNjjoPHWScu2ZPSaLcDSoiznGB",
  "key38": "5EGdWaHuVuJN6TdMx7LXSHBtzTcC5hPA74YMBZsaD6Z9hAV3nizUFPmCdRvZU47cS4zWWZsuDmBpijduPVtB9tyX",
  "key39": "4NnMo19xshXWNJV3kqEygrBVyEVjFVypCrcrk5Gzk46zr65VDgFCNs1BMiWZvP6FNSQgGeMXV81XxAV4LT3qjGTG",
  "key40": "5zTSoRTnL6tSibnHFQQpL1MCmc6pYxTws9d2LQppn9WWZbD5qjdzhwB8aTZaS5ibnFGBKskdKUB7gPFdom1kigeU"
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
