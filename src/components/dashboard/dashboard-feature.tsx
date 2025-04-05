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
    "VQZb5ykU8pxybMZ4cymBnUFP5mi48PAyPxG11g6FV8Gd1tfsnwuJUDg7WSRr3ipHY8V8tB3HTDMEmkLqkLDF5qT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CfheUgyK74qxqWsk7owPhCciPDxsBoMRBfLDNNYpWTPq8cE8DomUYrViY9DrjGnDNJjaZ85wqVBUQaoCi9L6qdn",
  "key1": "4FXkHBRZwMNqyHZds2w3k8mdmweCayj6n9fXJxdJQgV1HYXYzV99n3q2vRvdjVAwkNguAN5XYEfRuW8Qaqpzjpdd",
  "key2": "4t9NHAi9aFexfYFiDmRZ9S2vxmBTUTxs1G1uw5pmGrxYHB25cKd8XESR6tk2Mwsv2daAPS4oUT7h3XmjSbUxgztV",
  "key3": "4CdRkWvg89zcbf5MENCHVu44PUvn7gjtRDwndq2smupvAmNsmRxqHuv5zUU9wiMdARhfGrhyXbtKzLanTJkHMuju",
  "key4": "4HBnYUqF253xRWYEAMzvWWX65DuDDe9Wqfr6UvPMfBuaiDmmRyDAkAbRG1nkptqhJ4JVqPXxZX1abAv7VPb6paRC",
  "key5": "1Xkak5mHouLrE3ACEBiyskR27UYAJsyzEeyN4CHniv31PJregKF38VDs2C68amXQmdzUuD4xV8zSBzL3CJVDwgT",
  "key6": "4PdoYi2jrsuRGxAFAzGoYsaJHBcYXW4mx4Nye5jSVYKwjdKV1vzt6biKQqMGu133feyrfuWB4FN3N9sorNuJRhM1",
  "key7": "2vGsAdeyo8rFQQd3Kcyh4b2RiGwmrvGPbXBVgV6aSp2u9kLkzBJ6VvPVrisUENFq1RSahHTKBnNoxqdqGHQQc7vb",
  "key8": "JfNzu4dUpYu64iDgbTZ3mXm1Wki6qVsvAn3CvqXHDDEPiNjvb2MftzSD4q4cYeMwgRu6nipDsqYk5qaP64hk3z7",
  "key9": "2JwamEGqu5PrpWgy2WVtHMNvWWDb6uXMSQD4hjt7xEfooFF3CcQLtDkPYnG4JQKoSmr7KM6sRj39Dvf3AbzdvG7R",
  "key10": "2m7rFyScKoeWMaKaoySzxGpgC22AcuUqjNZwo8SkPhcrrHWgpVraKjRC4LY1GegGqjmQbCQ6p1rscbZXf9jX5q55",
  "key11": "NPHLKSE4nd4HfDwkqCmhPwiNLBvH8vJkwGZkMbjwB4ZEH5uqL4trQ8eekWqh7bsQF2C3uYKozs9185nRyCtUWRJ",
  "key12": "41vGYr2WKZSXSqQJcMiAi2od3gZC8zpnHJ9U58fPV3VyQuTSpEJ3hGmupzw1xBFA2wmD7iUydm2i6ftqDLePj8t9",
  "key13": "2yxviBN2AYkcLP8aY2EyL3s4WLx83F67CPxen5qvev3U1XH7CC72RmouQbtR5NZt6jq9ZEkYVNf4D3upPdaxtUws",
  "key14": "3nBJcgpc1kP59ePrHkeN84iLjFzenj8Rys5LuVRMAABpbrzTgtoWLD6HavpH3arg4AavLLWRJgFUBjGdCwXc14Cy",
  "key15": "uRUfVMCLwixEuiAznxR68xftwm9aUch3frbC9RwA42kTUUmLg36zyaXsUygimUsBEeDCZtPueuxQ4LZZboKPW6G",
  "key16": "5akcEo5oTvXnDHUroSm3Kv7cRDGx8zJGyahDhDFimEVZXdLCNE6EYpeKdM4wzitBwdJxZm9GSuVX56Eqnu2FdJyz",
  "key17": "5CL4R9oBWNe5ZUiCcAySo4VTVhC7VP9ynfvvf3b8sDhkVhDohYDLGnjQqQq3BbnAJnReshWdAmCypQ21yGAA3Ah",
  "key18": "4BdpeyhfwGBxmMPurfcx3viffjbuVnrL9PRdy5tyKypLmqzL5JhfQCQ6oyR5bkJjMCd6hRbRui992CTUFuacS98R",
  "key19": "5BdnLLVzVRaGJwKTfJP6jwKknJFfwgBSWAU5B57GkEt9URokzLWFBfW3TYewmhh4FzDLwd5cTMrf5RrgkprmcaV1",
  "key20": "2GzWadx5uqchSq8ki9UvTiCsWwnTtCga8nXoatdPd77nPRgbFkYFsfDuXE64Hqb4KFb2WbAhkasaCPbAzpfd42Bb",
  "key21": "bchPQWiuT8YUcEjZMxHgeKwU5QLLTMQAXnrse1V4cfjvBkhHc6pMkNs5JbRh6mdMoJ8w59bHi7Xr6mf4eQz4tSf",
  "key22": "5QWNWeKo2FvXEzWvozEGn2qgYAD7uGZBzrjiTGYhNZcACTXfRouCbQxxnqYFxXim5csfcEbvwVDWMfTwKAdQr1w3",
  "key23": "UbAdLLV5JgfdyqE59bNj4n7Tyaws92gktQpNj5tcCwmtNsbc3oRnkd4uF4CmrgQ2dDvj5TkjzBDfEdX3vR341tj",
  "key24": "3NrWKHKC5kS6743KcPr1ZzmthUrFPk8rQuAHNjD7abUh3r2deHD63k9R8977dmastvzWWxcezzCXpQVVZ5HBu15L",
  "key25": "3g8bRoKacKKp7HnHxTHFr91FTLRGGhqpR9aKwqn49dzsHMzbV1SG6eAYyjpYDLgsZ3T9qTyCvsQgAjqQQaNKhtkh",
  "key26": "3F8v8UaUiZH9rpBU8wjksWmqMvScnHoXkXCJfG622ha8ExkyZsdGmbL27mP1MVWt9MhHCin8DiFHASWa6YyxekgV",
  "key27": "4oLMZuW19cxqW6a7EKTZ87j1fFZPsZKvzFKRmnmJmDpsZdQub7jFYrh95FaL5yoTQVVWstTAajaDB989Dy7i33DB",
  "key28": "51DuNJT9MFk2V8SqUcqbTsQQiZtNNo4N1pmtEkLrQwymmCnDrn7846vnLiGyHkZJ2K76mWybooDMrB9vwEjYZhM2",
  "key29": "4o64Bbr2yKoiUHaMp7LB83iFUDAT5DyRVjbHGouQscXdh4bU5ur9Ljuxjou3FbuUqSoeuDApo3A3poWnbM5ByFVF",
  "key30": "PJJZoNNGnr6nxmWoU5xF4KwrgxQhTKZ2dZHwybgDUDxs4kGPaiVdyLfSBSNa7m19izahnx15SgG2hrH387E8Ykv",
  "key31": "JagiquatR49PACsDmy6RWtP5AZhv5ewsPkiJnPj1RePSwV5eJEUqeLp3EpmXw6A4xyNm2QHKfhtD9nnjeLRaBab",
  "key32": "3Dhxf2nRLCmhotYD62gTfdiUbszwGWsM5rwqxGF5dswejSpz1tk28r9CKsSCEJjjp6DaTnV9Qupquk1ZD9Krsb8r",
  "key33": "63dTpQiqvS1ptHXEqKVYZSubUVyeRi2fwRYB5Nwiccfef1gKLQsgTjGWYVqzNoetpe8DWPq89FHhddr2FnvqEfMj",
  "key34": "2V3uBapLry44hN5wa9WGBq6c3LYimfovqGV7xPucaJuVhbnpzJadhntfbGNSgWKJu1qFXU4v4Waiz4QyU7TkiAo9",
  "key35": "8hjyzV26VZ52yzDNY4xYsTc4uUXGr91KnootQNCQ5j8i7EgAkKG44QcArDqoxo9JWzYmGeh6sxDt4kxmMuz9Xyf",
  "key36": "32MCxTXn3MzV1XFZa6fBjJEkxpnHvkZGukktdJHXrdiMx3DMS7vU8eSuG74nRYq7LWFYozh4pVzAT1CzpU2YFVWu",
  "key37": "2NJi74RphxnWE31CRrtRE9vSeCCgJYLLZiRRbQDDDQSc2JuXMVKycoiL2115qwN6xGmGWNw7nruTAgfLVi6a8Ls9",
  "key38": "4v5wZ78t1xoh9DRYZqDJ971feF6aL8BUxqtkhdThW7Nhzg2TqghkZteTnA1bVmtz7WUnnXHQHEuW2BBoCy9hkhF6",
  "key39": "3mzq68VndnE2UCHMgM3h5AxaocR2fU11qZWz7FifAhUVc8aadbwHMV7taDgZuqVvujoB2BkHvx8ChjuJRcw7Kgei",
  "key40": "3o9EhKXEvr7ehswZ2mYKFZ4mMKTviKSTBgs92e6PU1Pqbue4HVasPLscyb5LDmAZTNZmWWXNHzQ2ooQJZGQZgMVt",
  "key41": "5SDd9Gk28MTFYgAw4Ke2hwsiR9RHxLptwHwFGmUVKgCBGxDwoeLwQM9fa9sNmjrREw99sxhCAbnREMpomd193PUe",
  "key42": "4t8PsTvg8mTiprB1Cm89BfppPtDiPoeUi7RMzyBgXK3ufk6qVAgX6kMRqPabwb4Nx15coAvXQaGf3VU27oAwWE9H",
  "key43": "2Cz2eYFSW3AHFm5jd9ZZjJf9R76KiZNBec5yMRBf4r1cQn8yK13ASupvcuexHgdPkahoR5Zpae3EDYfJN69wnw2g",
  "key44": "Ck6eP8qFX8cWkuV198YwWT42wq7GCGHTNnQQxqVfxMgLTcVjiQ5CtSA5JS9HBbUJUWPPmgHSZT7JMLhr5AzCGZ1",
  "key45": "5H2dBUuG8unkNwoA9n9QEQ63MHSuz4CVzdodCy5iJuQH8L6byzLaiBLN1hbuUq9YVsHUrQzM1LpvxCNFQUdUWux4",
  "key46": "3JEv1Kf6jDJnrcEuHXy5HcsH6QdsWqpgMXXftEFWvcXPW1eQhY641VCzZ2sPspmnBcPs8xiQKrvaFNkgHfWoAfgc"
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
