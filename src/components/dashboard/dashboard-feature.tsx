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
    "55qSUiyQUxYwecUSUc8gCLKeLhpbVaNn6RCGLgt8N7YTojjHqSUV664LxD9UrtLWuH5XVkUj9s3FuNMN6DmjeuoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t1gYbibhmK2xtYkRb9vRaFxMfT3bLYXE5imviiqBydM5PycfWezNbmfKkELukHq4oqSprGaYQSxHYHfF8oVskSH",
  "key1": "55A1AZHKf99LYRGEYM3BwzM3AsN3koZZNRe54pPPKbH9sr77L5dq5THekDQHFoKTXC1TLQGf9tAqgXCA77fdXuo6",
  "key2": "bmSK8gug1YngVbyGNu4pio2nWnZ6QyFi6ghbMME3DzZgW9EZnrjD6dD66LMCYrDZZMTD2UWeMwPQsag64gkckRa",
  "key3": "5JNUKsp698MEJuDoEJpMjk2W6MjmoHgxSGi5jTQFYjaNQLMLFCKD8RxzfYEPPiGBHcomHSitu8QCFoU528fdiVPJ",
  "key4": "52ZDB3aLHZZLjovMn2qbuQt7Sgq6CwwnEhEQT22KrsmXzoQZW7CvALSSwfNhjV3wyKUo3c4RAXiuSjiyRNVZmvWn",
  "key5": "3LpeLAzyEFyoDYStRxewkcRsSyy1M9kvMNxRX6hXSUqo3mem5gxZahFDG76kPWHUbDFbCVGQuYv4W3BKQ6BZQS1M",
  "key6": "xCCwBkFD3AKsYnEQMtujbuD84HhULG41UKPPwo76xzeYNYzQytxCFtuQBdYNVx8msJ3JShChW1JyPmGpAsRvagN",
  "key7": "44YkTYNV4czVocgxEFzz53yA2YjcjjuVvYfrYVdRigDU9zUTPa5KLCLektPVXuSQPVLazNbodnEwaG8aEBuo7AYd",
  "key8": "66nTqhQi9wu8yF56B7EZdNwQLC15KZQmft39p9tpKvi52FVZgeopjfZp4XDEafQttbaPsgUsWaLMWfGHRSJrw8Ui",
  "key9": "fHQ7gSKkBguPRLquSsQkV5H7YRm6wVMEkFyLApipSC8tELQAXZ56RVCtoQbT1t3cdnSpY7n4T51HiTro8jnpART",
  "key10": "4r72pXn9qFFyeVJMfaMbZFMTwvueRzhKLreN5dJDmtX5bBXwSFtaepf1ZqhwrPyUNJSW6LuqduNfbaPK4MAZWDFs",
  "key11": "59CajubpTBtsPMVD9YijMhvciFm5KiwNGCVFZgmxBU8qfKdJQbfYurJ8b1Lfd46RhDAXxDuRZz9G2r7sjAkcvfpc",
  "key12": "4JXEYconwKyGUutDuD9iMNTNAAuyGfH4dtrw1KJr1YbsGkTpYXASpcYVz7T2k4UjfwQtvFNqdXKW2BXTBeLhhaBj",
  "key13": "WzFyqbfsTXCZJJ77tCrTXFsmrofXeQyBvrW7c6zWy54E9QuMgzdGU3sbu16R3MjuQ96To9tK3sMAG9onH6K54zN",
  "key14": "4h4xDd5d4GK5B9gVkC91Fb2wbcUs7483ezM9VZGVAc4TUXK4j3pqDovTEXpUtUAKPHpvrZ6L1jfUKJuMJVhKStMt",
  "key15": "4nPo8fUd1v4Mv3xYiWTGymdFKE9jbhBFGBxoh2oQGgDi2VzuysWaDbnRGjpSP2CEqCwsxmhR8GZL3BiFC5pAWokP",
  "key16": "2d1Uq4JzPkizYRt6VhEVfDhvdooPvKpZUXsGhZe5jahjvW2NivL67vmCRoGdQ1fmJq4mQZTtU86VVEUxY3qYahDD",
  "key17": "3d4HSr7VvBtsmEfzSHmMXEdYdkojreZwBfwjxKe7iftsmmAuW9uCfsJjjejpGYNwRATtnzhQ2jE6UUuaUbkRRs2j",
  "key18": "K5JSYWDkuGNwkk7X8bhiwY9me188c7Ztc5BCnKapzsUNg34RdWd4Vwo3qBq2RKGTUWuCRcbAR3ZY66C5MMHQuUC",
  "key19": "5EcyXig791V44q4bKkwKhdKSGHiKMtj66wYtR2Dq48KE2ta58JJMt5eTH1knrzecNW9GYrhMo7AEW33VGTbDckA8",
  "key20": "4YnybYZP1C7jZuFS7cNfLs8srrZb6Keg3qxhLx57iN6Q7gp8GP7hgGjgiju4CHxRhVJieeTAhqFcgezuZu8fhGsv",
  "key21": "3uxC1g5b8e9AQrHAK3PCXDDoQjfMAXPHK1LCCRM3Lt1qb7Um7mvnHLaMToBQdz9jnfQvrBXUe2ksiyJYHUYwWAhm",
  "key22": "CbEvrUaEfLMDugJFqa8Ewo2QGDcPzXGPEpV5Z8HVjnm8SwH2VBSYW9vXs5jAWXdPQFyjVEVcsSmNGLrhY8VY96r",
  "key23": "3dzNE1cmudqFyRvXc2mfBqSWUNzB4RUvTJhbVRrdU3cTEWDyD6EoCecHsuXBzc9onhm6gEuece1Bfwcc6p5gAyrr",
  "key24": "5gFukhpnMS23EEsiFrMq4f7EfMEMcJbrFpVKDcPekDA779vym3xSTBMkJiFeLdUCALiFvbwgMRibteaNSSuiHGMQ",
  "key25": "4MGkfTxwSFhWxbxo7BWKWc2yKMuhfxhEDDdz8YEfrDtJaA7eLiECSv5ALGsi6td1Chm1F8KSLfEqW6XWNJwBYPW2",
  "key26": "66B5M2JMgS6rEUUupBz7YCZpXgmpjZL7CCjp8mw2WZA57whSTxaxWZ5iUnEUM3bKwAxoSqP4gmKo8SKb6842CNZq",
  "key27": "4yEoSvtq4cjfhJUHqBuhkG8Haid9MA4o5LixXMyfC7rDzUH5nWun71rnPG7ByS6UKGy4yYRAU6ecyVDPD4YX6p66",
  "key28": "5nhGvZo6GL9hFG3276wbr1ZzoPmNpJj4JRrDVP5ZEAAKPdvTYLxBnobeZESthQo2zVtqogXs2RZHJ1834UqfQT5Z",
  "key29": "Hv8wgixmi5yWvgQdPYmmE6aU9isbUEczSC3hWLiopUUZqj4bxB7kSpEc1D9qeCCMEMnQTTY9bcf1rd8autxgXMS",
  "key30": "57FUXhq85NLrFJFqb81Msixp8aTvxnLzjyZzsh9wQR3bbTLPqGbhc7b9n3iTxwvgTWEzGfYgu5gvxgpijJX2ThaY",
  "key31": "2YsAoFeTFxmj2CVQW2Bw9hN4AjFb9fnG1fTHhpjvEx7yxtrs89YjMki3athGZYGkkM7xiKxHMVWziWbMBnzgRMnB",
  "key32": "2X596GWWkMYiL9b9izJzNWKZ3nF8A6uh9qGbmSmTgBJcwHNuPq8vKfdpFzbwsDu2YMdL2fAtPqEgUzN1NiNXespC",
  "key33": "4XeCs7RFHd4gUHR26taEtc9pgXyyfMdnancR2bz2rGpfRuacheRAr83ZVV9QBFyBBf9rQLYPWJncmnXXock8BbJ4",
  "key34": "56msG8wiMCqMtDPZ8VXbsHHL28i7GFn3yE8mvNhr59CSendvjCjgMrLCvgnaJJmEfjAvVBpD5HvA4vih2X2Crkdf",
  "key35": "NuSxj7RmKBu4ioZMPLKEFYJnR5P7uDtCGHaVqbCdEwiAcSzx8sb4UFqpkNiZSqrjwAjBJ2EpQXRYhL4b3zQzgTY",
  "key36": "3uKvZR6XvMwFXn4cCq5cQAc1dsXBCpY8cCsfCadrZ6SzhP5QdMNsdJ92wn9Ub4vH37rxJaZJdyD9n4wn8T7S3Cbp",
  "key37": "fTNtjgZu82BS1eJ3CqGbg3cD2DCsu5XBKZC66KBibqr8zVfc3o5LT7WczAGUdEKEoZY1K2s6t9xvLP8d5E8KNAZ",
  "key38": "4JBwKtWNZTzVSUdRr6B4dnhwmiFjr7FpbLTJVqLxDtJA5KAuXALbrfeVkjNpiyZcjtttbSYjBvDP73mSMBCaX6b3",
  "key39": "5LQN5MqPXgm8B9LTKS6Ft8dNy1NaG1rz754oSC7BzYgE65CzFQUSLCbWB7qER6CXAs8idfY4xHJgxhDaT5TV4UiK",
  "key40": "4CZ5X5UDSTPEpcXEvRcs7DDirUnwEtd2ybXEUKhSShSrch2JfwRjsGuMrup2BJAjUAm4ewACwJkyos8WGrZLoAq8"
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
