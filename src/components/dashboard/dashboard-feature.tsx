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
    "5ZocC19iGQmHe4t7QLLttmnkx9yS8ggpMB1NPe8SE5BjuvSSF5zmrHuKZvPEa9KnuKM7wbDmXreL96sCLNrwdsp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32jf614g7FbZnYTn2gN2d3m5GUXAGSChoPFttp5crDLc4iNvfNknFJR6fgvnFvBTH2c97mHrpTHANrX62Jc6QfSo",
  "key1": "3xhZgxokRonHCFS9y2TEXSvUBoUWGkggNAzLQAvXFeXF2cCC5ezuSuy8NnGSko74vWYGSGP6Ky7rsrQS8gkx51pj",
  "key2": "3S8XhGr61yPiyU18hvu2bjmPHMqckpE9xs9Lsfz5rJ7JV6B2XpHEScRntPfE6FmuVPdtVisB3DCeiF5rj3hrkJSJ",
  "key3": "5sxc99FdMoJnUwNX8yPRmDVt2QUpUsHACW8iS3wnFTXgBui2KTm2w7CraadqyCxURSYtuhKfX9gmH5UuRyG4ThCS",
  "key4": "474gWRFvBrQ9PFhGChAoUsGb4AjUmMs4n7qMCzjejqy8uV1V2SPzY5JtWdCj1gxfxeLimM9WmHmrfzkgZ8hZaXrb",
  "key5": "5N18kn8wgBYz6MrqCFMWpf3Sk6LKPrPAQwZFu4XikXyv4JDXSujAwSMb5yyuQrGRZrJ8QEN95WqRZv4na3s8aq4P",
  "key6": "3Jk1pAZhweNbm3FqECBf2a44wHsrCazLthmg2RKWmjogtXjZFFQ5yhgDkBJTbjPBgSggUXQ6i2qVyJ2JoNQ1UwSr",
  "key7": "2DbqVC7K7xnaT1Fm9jj2u36RWTwBZsLo93acnqbMnTXiJrthrRgkR1KwUzeXPzbNDPxZ9DQEPVio8ybASuyh3BcB",
  "key8": "5MUMP5snr9iW1R6YMZAXHzGVPBkEeeQTYsD9ARJmSetbSFCAePfZ3ukJ2FtNz2SPfjG9kojhPAkFpTptsL7NZYgk",
  "key9": "5j4L7BVxws4qwBbbqPdUAtfhcVEBVNay3xaogdKACneNSbmHNFKgk2kBGtZKkS7eV4fPutq9dCxjVKRf23G8VQee",
  "key10": "4r2aQebpcv7Njng1TqFwwsbc2TPSUHjVXD6HqX4YWkW4Y1sdem2EtnA26C3nN6rcWYA646C8qPLdEg9wtsTMwdTc",
  "key11": "yVwnZzuG2zcyNXSK8VKGXBFuZMd2CugE4X9qEqwhP8GSFNovqazCYtk9zUipDr1XME3KuW6GgaWzPGbX8vwGv6T",
  "key12": "4Z446Qr3ksxjsfbVoP8F5cat1LSszyzq9K5agVSxYDmvRAEwb6GCbkQy1V1CC7j2YKy6LbPsLw8kre9RHqzqKKzw",
  "key13": "2sBuE2SWHn54271ebDmm3UdcGJG17HWKVCrHCYibpGC7iKfjN7VDcmQBMNUvVFzKjxQSftfJNqiXSkwSoue8cEnX",
  "key14": "3DtPm7icEMx6ZKm1DZv1s4j6v5WhxCvNRqbdCqpL2Uhnveth25LnA26BzciCwkZbw6z6kKKG197h9di5EgK66K15",
  "key15": "5ZDPDsB4oZvKNvAKxF7eg2DdiFarbXWEqpHnGrtJeTJv3vcwknBpJKBMqyZdMyUWh1zVWx8nsBJ5zT67dGufVNX2",
  "key16": "3vzy4yVpoTUNQLf5BDpToGbd9CaEbevJTHS5BgQrHQHavCULyCSkBikU6mLaYn9fARxvbWzy6v8P4tRjEmBB4LFn",
  "key17": "4HsJqS7C6MdcW8mGR3UNLkoZEq318Hw8hyW6yahoj85f6XrtR9LxQVH58x7kyFdyUb4vzJ2xQSNoKZxWjHcLdMvG",
  "key18": "APrBSaMpLtx3knCfZNMJSfEc9VSBRKSP3us3uytP9nphLce5bd8NBKvCFWDH2fkrDiA64VU18bs7C6o8t2jbda6",
  "key19": "3ZDacczK7zCrVyPMj2v8ejDGN8BkJ32MYKsoPGL5ofrAfQ2E9Uhg4CWceYbwpcRLx2YpotnBnQZj5cKCHsMfcmt",
  "key20": "51a1ucnbJVzLTHbhCe3YLBjvnu7q19tNH3xfK5M8yfVqWFczFEifVrtEYgLXfGc7rq41NsRU5UP18rFZQQDWKZyS",
  "key21": "2hb3z3aB2kmuc8TFpX2ScHGzVAMBmyefecji8PxhG663KFCPgTSy9dyrWNeqgunFarCoaYjSo47TsVGPPfRNxKJT",
  "key22": "3SmzpwkoogYw8rPi3zmsEfRqduiRXqWik2w3xSZegtBbnE4yjzpb1bmY79FF1YvZnbqg9H71PeGgD6tRqwECaos3",
  "key23": "3bsrWrhQrqo8dW8TxgaRBLcGsFApDQe5Hcz1gAsPm2mQ3i4ANvGNzBGniakbeuckAYhtziNe3WULkfGeqdEcV8M9",
  "key24": "N9ZHGte92o7QfektZaULrbajG2RgRkg9tPBrZyqRAg9qZZur6HwypvEwXt4tGNq7TNMysvzrRTiQre3ts9L1rrH",
  "key25": "5SchrRZTuV3rgSBz67oCHoVGoXhxJbKmuQMvK3G9VRQmbMPacao66aKScQHYa5fL1bef7s7TYywqetAe5SM7v7Sy",
  "key26": "LqBAjpEpccktEMbFpnh1hoL7aqFWEbqCBsn2Gdec5zx2yDkkbV1cWZCQ3MxTEqtFVRnNU7gbohcXNeX8NVPJhET",
  "key27": "66iAXdEZUCoDXsuZPv5dnnvKW1A6HPptLfBjbPVHYUmqj7S9jMcDDtsv2SpJc2mzGV3xk7VSwGcBEXMsg49LUJCE",
  "key28": "54UshWTasabUhoy4K2fVpJ8btAGLBcwvJ7cQ8ZLCtg5vvSSie1uPSCs7iQ1MJtaiKx1TJUAigMpB2RuhdksriBCq",
  "key29": "4GRCth6jVGFnWSaLcgKY8RbbPA7yYm4RVycLEmrBpTHLnbia13G8y5XhXEwxZrzsf2DNaacxEJeqWPPE8x9EdQWJ",
  "key30": "2qUPsj4sNgWFHJPV6bxKvUozpz62iw296CKbmJk75YLjx6FFaDALAEnRsqUigoDA6X2FEWG4tULWt6tSohEYLqQ4",
  "key31": "rF2JP9TCsHs686u6AXzzUhRwnAVHKF5NgyHeKYf7r9Y4osA331s84Prwd725ws4vKFRTsmWXgipQWzd7MRdtvPf",
  "key32": "2vXCoKMJnJhZ6yZmWHgXo3dkHfQz1pymetvtsPKEBkgSDNZY1LX8YpEqAC8Fmmb754R7gWZEVuHVFZyHjM9aatDM",
  "key33": "2qNdUPY9j8N3fDWXSVq8v9nCuaypop74CMaEr3Karc9GsF5wAsANZC6dN5niMGXiJArP6HhMX7hPePNwhJ13DzeT",
  "key34": "9u5QDXK3zvTQQDG4D8KPMnCXXvBbj6mRTDcwQ2Ds6ArvT563SKXAY7azJ5539VS7Pv9EfSLSTJ4g8gR7n3QM4DQ",
  "key35": "3L4EpUYv3w51NaqN78r72jK2m2qNTT3WiqBuWA2Kw6qFXt6LzhPEWPXYmP7ekf7G4bUUJZqTTb6n2tNy2mCjXQnY",
  "key36": "62ufTkgXsrUou6SRrHjDWWzkezZ9wiBXnRafjjSmK8fTNtB7ChRjMw39uwutP58CCGGEBoh93H2t6Hy2ABbp5SQz",
  "key37": "4ZBha1q6vZr9gtEySdGku3dXzaB1owx8Qq2NhaQAHKKAN8fTb5VEwPcLjELcNCdgCS1rp2iMuXqMQ6wMinKzwQ2L",
  "key38": "32eTbpYsqnzzmYmnX1gYrXjMdCoLQsp2Sk3DaVqkcEasDXtBZUYtxG1oJDvoLtU4zrsmHcYb99sBaWUxLKwgeAR7",
  "key39": "3Y4gkaJdQCaoN6WXaVRBC6CpCA511THGwvTqv5E16STCNX65PdM1suNEUMkSKkskXs6rLYoH3kLYJ9o2buA8UxLZ",
  "key40": "4bDpTnFYAxbZFNEkUP6F3CyXiD5hPVzthkAH9AacxHDo2td6g7v9x4k9iExeugY2pYh8waSiuDt1rvfzZ2rNstwU",
  "key41": "2rwZdwEFScd6tttz6Ei7AsZAucdj3s9DWJRZ1RN6qwAf2esKu3964oPjeMdLFh7Yo3rCpESgznCjWaeGzGux9GUS",
  "key42": "5GHEq7p8QXVAdPyKWTf3jAeSUbuixHq1mTwE6KuUA7ZFypFdNKRWEvi7DEC5h73bz1Q4oF5GXXc25scx6Fp3Hhwr",
  "key43": "6D1yraXYM22UmNWvYvm7eUA4MJESoRHRTPrKd8sHUTZnDu9cnSMNmVYSeyM2LuaHVk63TKnfyTkchCiJkwGr7uC",
  "key44": "gbuy6iiwrB7Fs1R8BfpGj1nKRgJKHXG45q6sW837JhYuN9uHBEQ3yhqpSsEGHRgeKVkM2He3gMsLHpEaz896Cy3",
  "key45": "4Ez7JSEYb596yyzH1Dj8N8Gb3VFvpf3m8dgzoQPdaWybBpUveqZRVYwWSfZnNTf7grnzmooP7WaBa43KdGMePoGW",
  "key46": "3LxAqhGYTUnep51xAaDdburyFqfRK1zMPUkJTCAygYCpFxEpsHfqWrVcenYnerB9df5XXwNcgCzHEoGWAyUjE5Em"
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
