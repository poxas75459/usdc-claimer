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
    "4vMsP1oD3kTCg9VqEqrwQJDs96eR93acDizNf9EBdsU9iuATXX1SdBDdg1TGSzPw1eyWBSYsCEedngtqRj87nXzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ugbWuKKNVKPDTmNFoj2EGKEKHkeahK2r6QxaXAB2uS8ybXs3izdyNFk16i4vTiywpMwaWQureYhmjQ2UG3Fa1xS",
  "key1": "2pKTxAxJQr7uUiuVrPomgvhegW7trGJFLPSxTHQymECphdx36ciKFM3jXh3DW6R39TSuK8czAPeMqT3GTqQmDgVL",
  "key2": "4wi5JBuzpzd2eCsipUjbRDEFbxmT8WQK6Y19zBshuHaPFYuApiGx5WtoriXeLP675LdWEzJGmtyDwEv4es49dT5v",
  "key3": "3KJJ479ropqWmrR79CQheB5kFLCLXa8CG5K532F48Y5bNjtH4toW35gERkHGsMP1fpnB5rYkVpp7426ML1yWuCPn",
  "key4": "4JQD7EmJKvBRxGuXfQuCWZZcs6JGRuiQLCfoRtZpZ6ykt7kZWR5azVEDkKvfceBeFdEq3H8ZVnX1VVEkcUKirX16",
  "key5": "3n6pBA6TZgiHfAkcJBfGbRZ6RRQSiGzpQ8BzJ6nobrwddUoVjig5ySAWY7pFTqZyEWmoApmjH9JMjPpQr6tQB4DV",
  "key6": "4rRwp7hvQJbmS33ceaeYSSvvzSjtVmj5MdEo1TpwyKQorLDxQGwCtAXzfGpXUmdBcHkgdXqh6RB41gVpoBSrct2T",
  "key7": "3a6B86Kh5khDj49xEJyYwC278oQGCJhob6S6rU819RpCizPXbEGuH8cccmXdis8Cv2BY7NkyCU1qQo5tAPRWJDti",
  "key8": "5y54TxJP5KmTisCysPU5ahh4JCv6xE1WUt7oBSe4NFqu8ByqpLftp7ThJwsgf1Trs6z5iWtasXBJRChyTzbCWrLo",
  "key9": "d6rJ9bHMprFaV5ntFNTQTsag5mG5hthynkZJk5FrjYo1ub8ioMiuV8QvmHd6o7ESeyNkJ5j6YoyBeyc1j7o2N9c",
  "key10": "3UjVX2YacJAfK8w8ZdfsDnQe57DtFT2royp2JPyjjrJ31EDvfR1fzvyipzcaFAVsZgsXBgmvPQNByNJrVxFLKF3e",
  "key11": "3JTG5iqtWtgyWNyoGCxBaoFHerw7xyu1LxRRF5QfuUHDNomX9WPJJJHpyC5SSvkajVW7NkF61vhYmS34CRFJw3R2",
  "key12": "2BDYPwCzKub1GdyNkiLfH6jBAaT9fLZhLqNkeuN5hQmHUyiotgNom4rxC86EyBLwuZLFZcdZZRgBjumgESCWuWUg",
  "key13": "3hovtXtD76x1PzRLQbqGnmwkkRxMz4GxrnDviUSKo7gh85dYnzBD3fXucqozyZxhHWdCA994H4J9Dgv2kE3inJtP",
  "key14": "4iwuDGkrtL4EujNuQtPFahXEUKvEx23t43K2JNHYLbYMMCD8tNG6ayR8tzVVtuf8gAsb65gLU8mi17kLQm31oJKk",
  "key15": "5vuw78pyCE7qypsQr8DUFq4DgbT6wvLg1TXw4jmnJdSDaNT6iMpEcDqWVtJ7QzPM6JDgEoJaYFPmxNzYTdmjHMiK",
  "key16": "2UcbP9Ld5aNFS9CXPCgsTWYnGrmch1mzQ1D9zKzvPYZVESyxc1NQFF6MTZ3svBsJSspwPfirwksSjknTgeJzcPW5",
  "key17": "4dFghP2qeRzQAoSJFN4hTU856SUTfZueAQr4iGoGcFyxZVKzgPqqM5zkGTdfmZxFn2USgJkGxGkqLx5D4xgFBnek",
  "key18": "2qf2L7Zh5amSyw6VKPQcb8Taa2Ex3NdX1kPR82pxqMowQVfnrTGwrrGD24of4wQDECuVnaZbqvqCCpPUmvcu2mTY",
  "key19": "2GfDbRbQHiUgt5axx9zuXHK3MjEyHJMJRBFah91ZAbkZ86uvVXZU23BXGeuhDX24zZ7UaWStyhziSYAL6x7BJ5E5",
  "key20": "31U985rXvcU3MGd8Wy3GCnPiR378Axy5koaGYh2dX48gSH9gAbwVQZC1ALLzwGhXWnJRzGhpvrhLJWJefncZ7s7w",
  "key21": "5PqyXPN5e9EoTjrZTMWVLyZrQz6cMaxU6hzKXC88o6jdudfr1cNHWDmFnVZ6yGxQxvnTNav2D5VY5q4XAXP83pWK",
  "key22": "4fchopmUA4Wd29jcN5sfmUbraZeiXYq61DopWtjJ1P7zCCdrB5jPF1UN9yVbywQSHBPEHWZmbiWzLAFyDjP5bWgf",
  "key23": "5YMDriz77n6zHtizypWPB2dXbjQsBrofAiczdzXJh1EsLm1697Zz3wGKcDvUaYKCgdHvHmvWL2e1GMCMBtfXavwG",
  "key24": "5hHFh18mKzoigCbuaVbcuSRbNnNYLXqbkCVGy3SPGefyNULee1N9NCTGUVhMbgCJfhr8Nm72YBsyi5Mo9ohJFXdH",
  "key25": "4YRjcWwXX8ZuDCxmZVGFnuFNDXjizU6qWmoDdWQu485tJwedWTtLSxrLiWKXMJK8Qzaw39ygwUy7S84ndrgHuyWm",
  "key26": "2dvQ7xByfK5nxgjTbgT93Qx29zZFStAM6yV6GKGXn7hzzUt1oRH8Z8S5Fw7HvUR8UcfLG1F8xXKtmTx9VZP4HUyS",
  "key27": "4LqQG2P6cHJ9rNnuwiY3yBPtLfnrW2pCVqXohg1oyowyo7Ya93HKs24duQSH6Ar5myvmaCRgto87dsZkYvSeEZpp",
  "key28": "2g3ZmoRNtrxBLwQDkjfFYuNLUjUFn9VU91uUgEWUKzMvYJPK3zhbzJr2z2YVR5AUAhiuz5nMxYYyxDWCyczTuZjY",
  "key29": "WsSwbfaLwgJ2Sqk9zhAHQGi4Gu7YNQYEfoQ7kxmbz7Cm7Bryu3tyi5t3H5jtJciMts5nZTrDiFdA3LRyPmtkekS",
  "key30": "2B59CY3oj488pCjvQswMFLW7AVVaLEDTxe4ieo2L5rfHQsZo2H5VeF4HZhkyKEbGBZ5sM552aUqNHM8JCVFHRdy1",
  "key31": "3QVRExPx9BxLMNzaXrW3tnTuvnvQ3zpYgtUsXVKbZ9WPaiKDCwUAXeScoUpJt2ausz5PjYGiCikDgaqrii4C3vEe",
  "key32": "nSvfxS8eCwDofcdE8PDBUjPS93Ro2Vk7rM1PpzxdF29gBwynk2oQTpovr8AZr2kuXRJavB2cH5mcjMct8W2vUhq",
  "key33": "3RNpwUhrk742wLLzvUcK3zLvUZQXKiz9MarRFg2rrLCizWAsoFpfy8reuFQWgxom69f5cBrC2eLBK2VMgbnz6tCB",
  "key34": "2BfwgDAExVtxZmhz9d3jXfm36YCsQv4tHefzzYK8jxT9paf3Pqc4kKo9xCwudKL1EHQDgk7bmnJFreMaZ3mUDwgd",
  "key35": "3LxbtGoPR42LjmDKrsCAxCSf64tsrEDJFEErf548UiL5diJ3bkhRCdJVofHVv77uGfViJH6cHnvibV6rWBdM9MVx",
  "key36": "5yzC6y1GLbBagCSn7e2rQLg4RBbZKroTgn1VUUDFDezdxFEBfnqmRdok26YyGXGH8k4YkBmgEDPtrcx4akMBdzD8",
  "key37": "5bzMKLPBAGu58e7vb9zdFGWkYGJSHuYaTU5ojYysLhmLLtrvf8U4pU8T5BUWv2rHtMvD7G5vxQozvo5LfcC7g3ji",
  "key38": "GqYVJ7fY6sdQhtsiTB66qWdG7VqM1cZ9sL9iJu6jRpPWdRc2hU4jYmGBUpnD1hewRGwbP97ySz9uoC9vEb5DwWg",
  "key39": "5id5WzkQzLcbmvtF16CWiNoM5CjSRiwyFNMLiw9BvHym4Ad6ZJEzisDqdvRPeq8Jw4jygyB9ksx6rDuhpyAFdp8m",
  "key40": "3Kom24GPsnH2SiYpVHv1xvU16oSmLt193oF3gcdgUDeENnMBKuntQSAbbVzK2xNfk4avM8Ve7iuKQQJnfBDRDUYu",
  "key41": "2TeYmk96vLZ4K5kbpCV68ZkrHFJmzSwBTWwHUmKohQDwZ8JrBRdiC5L7TwGpmjdrhZDr6qZNvWVAND2jLEziXEz8",
  "key42": "Bg92ZVHevMAUjMnxVTVnbYKYR6Uittyy9XzuANjRzEZv4wddKVWrafj76i64D3UVjB9uKUYFew5VvdxsdS32muT",
  "key43": "35QqiZurcnQQY9sP24AR2PgqqMbd8cSptS7z4nScFaLa1KuMHMBRa2ykDaCH5yyzxVdQe6oNh82db76XDshpid1w"
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
