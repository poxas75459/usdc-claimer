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
    "Sehpc2QcB7cXA69uk5fWKXom6YGkgqNA3F8eeenAzaPjkuwFML9JbxJ2k7MCaRUvw3qzoNgoaZRYtwHz72Do3BM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zvYk9j3wu6FehSesaxFQYRi8TuCdabPyK8ho17eEq65WCpb4Q746FfTiZf761CYNfkzR7XUX5hBen21sXsGvEfe",
  "key1": "2mfeYbCuEQpC8T8bPWUyRB61AYhscMu96xN2ai88tb9nzEN8kJC5NdBJTbeUBEdbHRMMh9Kpjd4utCGQN9CmNMZw",
  "key2": "WK6rzYWjyx4UodVs5JDjYpqQxphuxbcuaMNZnVVbWyaeeRhDueBd6f4Kf4nVZAVxyrawQaVT2yj4aqv3bMN9Vak",
  "key3": "4XpMTBTNL9dVWgEU8PewVwwC6Zx5wcJLBYEENVJ734KJCHXjNCmM7kkWqFUo4K3GAB9CWZK5A4pWKNqST6EtSkCL",
  "key4": "5wJJutpLsYb66TVRN9qJpyHdQMTkkDHNvHSi86koTTihTsU7B1pXxsDTaQydmbLvz6zdbTeBVHeepj1TEpgefxeD",
  "key5": "4WoeGNunffmkbeXxgH1iqMrguo1byYsqftsM6ZG29uTZZWYQnhVZsYfc1hFRTN1BvusGbGCMBxwBoTadZ2x5Dq9W",
  "key6": "5eVrZHceSzwByjeA8iPbjrL5mboA1QdSQJbQgeAquQovC2gUscu6hYGH2rKkNwmfrBKLrR1GK2ebYaZivjMKgLj3",
  "key7": "4wKC79fE6uZa1NY89pMo2csqiAG54RgQZaBomMgcV2czmgXsZg77tjZG56gcAPX8HSDpwUAaofxy4TjLFe9uJD5y",
  "key8": "4XiihNKfYZxoJSohSUUgjRqtjZJwLb5ZFwVFJzCBkTJZG8wCK4GzyGFMetWSCM99Rckc7DSvcghKGpaYpF1QTjbT",
  "key9": "4aznodzNzupmkyGpVX5X9ZRJwyYfYcmBoi3rAPMvw9Vgprg15m3KpvSz8AYb5EoRGgE4c7atDMVakwYAiUq1zqXB",
  "key10": "SvuoFKAauGsd45688YWoohPUg5ukqmurE5zhr1R9pqHTQpd3tAkVAi5cgfbAfieKbHroUEdZRuE85p94NTXwvcM",
  "key11": "3VWEBrZ1hrfcH9zoMeFr91Q2mm9pFAVA3ZvBS8eh7QYuasKKAnCwnpUHR7pwpE1aEwS7YtcCzmZbs8rf35vcvMVc",
  "key12": "4jjjPWMSHMc5QDuMBpu5HEqLZ6US6XPjK3XWKzHq32FDTK9uvagS2tsotdMdWC19tN64GsakTtawhwfFegvv15q1",
  "key13": "5Z35boBuyQ68RiRshrr7E2Sc9G7Z74bpBpxrGpqkLjw9BpSjnQJoW5h8br51KEbeBUEvUyqRHtewjCaM288dHh4s",
  "key14": "3Xw64LCwmcHXuHfGSYH7kH26mhvVdKMw1QdrZcc9eZfbAmYua29rac1yVx8CNkKeSqBRDSBbFKdXPrJ7y148LsgV",
  "key15": "3cG3G5M6gqU6PpXeh5PDLtYNZno7LQ4A2nhMRFPE1awVSJRvhcJztELKbJuhgFAPKV7RbsbrWK79fX4jrU9r99tT",
  "key16": "3ejt7hmQAwHZxK87nDVHEmG3G4oMx8E4Xejk48xEGJFYkfmjNUmSqkZiEsaXq467o6kLjBgpCNrRRMvg965YczmT",
  "key17": "5Z4eAhVjmV71xzczN14QFtAEfzQ4tJpuh3EUZAESG5mpbgUj5Gainx3TzD57TxwG2tsyfyRJ3kAm6VdmczyK5gHn",
  "key18": "3YqbWauPR6LSUawim4BGVszFnXEkZNuurWQSmWWo5wu3zLDfzL88sZ4PkRa6kwFE2ThcFsTfmuJqftbejC1p19ZV",
  "key19": "243rgjruXds3ECTNM2D5z1ZSd95wJrqZJBND5Ea3sptAbXsYzAGf7zsEEinLeni8H7cGJ8KGeHzKB21GbLj3peZM",
  "key20": "3cWyYK1LSyesao8vUAAgLgnBiJHLoKTM2tAczP4cdVtXKbVNUFAJ2amauVBuKVGzXUessBdegwXrfRtTQNk5taGX",
  "key21": "KxctvnbRnrEGtW6cj5tPKZoN81jjvLmYofnWE2gnNKWBZXqyg31hXgyRxVBhJAf9MNExTHMkK7834ugvfQkSh2D",
  "key22": "2esPxdVYdnjjmrQdUv1Cagz4F6UH8hGxUTkKBaQMK8yX4MoDcuMUsUUx7yWps4jDe7heYRcRUnvxCT8aF7MbLtS6",
  "key23": "rRJbWyVvnKuswiMAYRCUuDsY1aEyG2NNsUPY57Bv3cTateAC5TYg97qSQyaHKouQoeE4ziypd3sr5YCik6NzspS",
  "key24": "XtJS2NYHWvUqEeVoA3sajhqAF2WyjELgZvNKcc2fBLf47u4xHRdoAeFJ2VYoGbMCm6pSgWQQGYa1jEaxbkBNquW",
  "key25": "5zrYqNdd7T3yyS86R8sDzS6gmLwgYMTy54LhKr1T32Q9un9Bqajwkfdk6jqhvnY3TLRQBa1fATddBce4AkdUcxYv",
  "key26": "v72PXeGZz3nuFst6knWwKaWosJajdjji78nMrW8pfDhJLX7jBhsgGfx5qmShFtShBNm7RBiZsnmL2QY8MmxWdsX",
  "key27": "217JBknV1LBWsuiRhsnpirZQFCrYkqXkopwAGQxT3N3oPvz3K4Bb4WdLu2SqUQEio3H7MENhU2bHhteoUBgimvZ4",
  "key28": "SWDjsj1g4ehsFK1aEXDEXaNpq3tddpYnQeQqg5oakv1XwZ2XKxksTqRENQU1jbzi6Fj6pMEXjYzYfNaKCg46uQo",
  "key29": "3aTtBgC8ZyeQjkmLHxZgFZ7cm6WxNBBdgd1wFDKGbzpYaT9ENtbcYgEr6n8JroPL8VXGEZhGDLeh86oFJfQGnjw",
  "key30": "2s8BLriHk6dzipbYHRZWaLReqDEmgsLgjKczWPVJTn9wV41oXFBXzrXsoZcf2AjdSCfC3Y6c2seFM4r2iXUqcjde",
  "key31": "5uZeucXW6Leaw76GjvWyrSZbW6i9L16dZfBBJktisCg4tvDaqsUZYXXnn43CijJJHphgjvt9DEMbM1KHszGQpbEJ",
  "key32": "5GjScCGjoLEVLs2fmosXLws3EbPdprVGWm6riTj3KERn3m3Z4VgbsJUtdFEkL7QDiEUVGpGwEgQjZsuQTWX3jGzy",
  "key33": "5nTQGFigQiPB8AeRLdBTmbFqcRyG9yefJZ5xHaTqSzrmZ2YYofX3HLbD7XxFwWxQBMhfED8GmgJ3y1kvFFNJ8aLz",
  "key34": "5ifDyLzM6V6Pk3Bmt626ERNte98f3we4Lkr2itfUNMRpWPnRbgBZ5v4qVMcvh8x8kYXDhRjDviMc5r9TVYPFbgZ",
  "key35": "s6NHceNt17AwFQEqJ24wtUb3C1LrtEo9jFJMqa6k5Ey7rifz2HCw95NFZC6iQMdF4Fp7RPnzuhatqdUHNe3QScu",
  "key36": "6CPyQNdaTZJMh5TUnFNk2QWYt85pdksLgGu1UFdF63gGCtowNR3d9BbMznyki3DCGs6TYSKZu3DmzAnTXKsK711",
  "key37": "2zE7BgotPTYZdpnFsWoG5KdZseHfjm6DsYyFAyk12ZZLhnRPyiBwtSjnJswMBzcwXw2LtMNKPiNdeogoq3WZskTX",
  "key38": "4PqjJt4KCB9tdiruYmYBfJj6W8rQzmZU9aNcomt7ZzQbUqPJLnbv57Dn6a3YoqLx1DHD1jzkhqa6uhmAepGdh9J2"
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
