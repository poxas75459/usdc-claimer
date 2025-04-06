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
    "5zaEjxu6TZhRCS3ptaP9qjSdU3MAq4M19XYBxV5de81P4x1x6Kqdk4JtRF4tf2kajzFvz7vphNryGxafG6At1ZPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dPVpKWG9aQpAnGJXhN4Q4Eaggp7rMdH3A8H1yEGkUZaN373FEG8mBNKex98mK1cF8roq43FuqidA3sA4wR1tyb9",
  "key1": "31ypNm3mTyQCvukQotJiKw7iiPtGo2HErcyjhtMHz73iWdR8ZtPxeFUjyzmG7LyNDMZDo42XWkEBvmYuki561Ys8",
  "key2": "sBR3sj9o4qeyg3w3i6tEdenapBdzqRr51gHqbwBnzBr3Q2CkeDas4RdTmtkoQyxZWUpkE3nTiKVDtWAhLjGH5Sp",
  "key3": "4ojhLwrxiTK5HUKY2iLZXkijE9CSdxB43bbgrFX9SYzCgPYuAU1WF1881PE1Mu44zQGj6HSdaTGgMqmBf1T7Dz5W",
  "key4": "3JzmpsZjS25zukpNM5NVVFVLBtt2QiiM13xu1Msx6pp2yUvyjohuhVG2xqweg1n7x3Tb4xH1S9xoT4T9VA8EYJTR",
  "key5": "4gXS5NCbqmsxHFg4oNogc3ePkDauxWsnB7Wc4K67HDW26nRhPSGbjCUkpQkoiDTEdQw9Go5PoGJhRuvXGrgrWP3m",
  "key6": "eB6p7cVVFUMddEexhv9gvE9kJ1zRbX38gaMmxVuga8WsTo7vay2G4wUWKVAzY7i92szXJFGJXCnL94uvxsvvrp2",
  "key7": "qbFBhaZHm66uoJ5k5c9atdX5jrBxPJPFiZhGMSkev9FFkHqNZx56AEL4AhfK5U1dfZiiieRss3zUjrcHeFQBVfi",
  "key8": "5p9stxhwU8HGKh6oKvkdAHBYnRxrafEPFLTfUSersHoRLcpXCGToo6ZrrNVpJZWGSQsT5BTiZG7LpeN1fJ4EbcPN",
  "key9": "2tZ53yFyxatynzEkFK4HWQb3zCyzBxcG8wKbJjV2Z7r9jFhZWnuu2XasL2bLwaGYDkxDE67qFADz2ZTQRaMvh5gK",
  "key10": "4L4Xz7ETJLkURTfxtZFaehrbSPWMLoHyPZtrufLiexKE9mAkZxHAY7iGgYfQeca636QdtGkjvHDZFxHuZzp9ynvC",
  "key11": "4RxYdyHWsoLPbdXGL5x4EWRkT7Fv9mxDmVmSBGjYpwaQmyH92smKYG631QDodKbjnKJENcmPrNVXa6VS8tnmohhN",
  "key12": "5CtAgc4tMyNZtvNXCrgQvHeZZwt5dUgTYMNhfuMF2bMmRFs4jAReGyd6fwXYvpdYRfWmub8KZSSyRL8ouoWHAfpE",
  "key13": "959V9ax2CxiLaNKFtcShVvzhNCQvtQ7Gx5UtmYwx8JjWeoBJns19uVufsaaRTgNeTbtPNjeVzYpxKPm6WwtEjvU",
  "key14": "5mpARCEeYxqCv5gWzqAKpURLgmUKajVENJcvRpKB8PTBhn4aSpekBLaMk97dDDXFU29Tx5JzMCR82Lv758rR4BNa",
  "key15": "213eKVr7rdaDQfvjwfNJ3qLzTq6dsZE4bZsPY8nMDZPqV628TMiHJ7j2rk1nm63D1wpvaqHZvcQ2SRKC9pvvNKG3",
  "key16": "4ytUXqu445Z6ueuf5T2HVw6nn1R9FmzVZfdf3tfEqFx6WhkkwsGR9EM2cFVFbKtEeH3iT2SR7dg2tB73Wxj6ncVN",
  "key17": "3dL9Rn7CoKTB683Ymb2qxf13JSmjfenUHrAM6Pop2rcPgLd6y6g1AdRRZnztQGgu2yih284J9Tv3Hr6jURNb8GYE",
  "key18": "4w27hvWbmtnYGGquugxe9qCF46f2t2iuC1LqtyLCpS5zXqUcLDWt6S84gueffXda8FxDKVSwR4DkQRxKEKBmD7aA",
  "key19": "4aQpTa2fraEkvJypkXSowT5afBaqSr43XuLJnUto9KEBGPuEe95ggj9PjwLA8LjYzBwn8eztHBnLACkWW3L22Hg4",
  "key20": "2aheoQaxVxHNp443Ar6U9QLUH8peiXEYbAXrE4oA49ELfxTT6MijQkMLeRvLkBCV43zHH3JffFTr9ViK9dMQ91KV",
  "key21": "4NBpL11DfTdvPnC5QzR8ZVnXtbpmPExdkxhEo4CJJrUH4R5WP2jj2j9o36nhnch2qAfHHgZRG5nGVa6RHCYaN4kJ",
  "key22": "2gyXdQ8Mid4iB6SYgCSeV1VgdHQR7gDq3QtkLzKTotocL2t4oXymcXDQRmaEHqiF1WxUDvtrNQu39mfSDkqQVvXX",
  "key23": "5pP7n67v1ZjU2FtNfBWhetwqgzwzaxjycAx3AcDEFJ8es2B2xTD2cYkAV18AkqCH4aQCsLNyFdatcx7RYnhM1ymN",
  "key24": "5bCFi62bWP9JFaaMwK6pkQEJapFFoTN7n5zCWtN1DT83sEimVWCvJVwyVpvzZrHKAU6xsTk7p7Lrhqd49eX2SXMs",
  "key25": "Dkfq7wV6qRF8xNTyPQ3HGRJ26zeu9ia7fyMRZ7dXwHxK8vgouBFvSjwbjsC9dpuu1NMzXo6ZRC2AU4QYfmLCKMj",
  "key26": "3a9BPrgrtpyTgdmsoFXQb7fVZijRVNy7JWuDsoDpJaruD1WN3K3Lq2dcUcJU3HkFUCpcCVnPeHypZC5noVr9Kn8C",
  "key27": "5DKVK655PKuEF8Che31PwnDJcJsXBwSaJKwiYpYapUmodaMKtZhEX8kJsEBWgNBxUPyUkZRrqs9HJrR32kGNwCwx",
  "key28": "2pQi5Gu9r5CXuSXKh54zGuEBoFhcGQZ4kSp66f3eF7pzWxAWbWgQvs8hDBjy499NygM8U8LYDfeUrSL9ZByonQBt",
  "key29": "jrzPQZeumPGrVWknYwZAgDZmXGP4P2grtAsUrgwqTgSrgHWLfyS8e1eb5kMp2ZHFiqtv3w4VC1bvb4eHkqStvHd",
  "key30": "5zX8QwcVcZD63vma4h948JC73doFzTUSD4qjXg4hqbKiH8jfngTTABpyiN1y3GE7w2ib6WHBeGWPYL6TBvMfoCQJ",
  "key31": "QoEduM8xr6fMASjPgwckumrHfFrFfNWnNvqSKcgpeLNA8LbVon7etS7w3vuTJLLkzy41voApiyykLdawrEVSTnh",
  "key32": "KYzHDLZ5sgvpygFUjZuBxZyraCHv97AJ43F894aExkRqQaidQJckxaWYXn4kHJFm8ixiJYjGhyarVPZUMzkCxq2",
  "key33": "3GWmyCNp4TehoJSpSMxhfS16LAXLC6MJU6C96MbuEZ9K3iCcSdb8FARbFTaF6ofRUaTipCeuH12WnKR79L7QBWBH",
  "key34": "72apzViHxcnrHTCKJnnWkbRQcJsj7Qs8iu7GLppkfYXvc3oC4k1AYbWUMxGNCXP8fy6hR9XsBXHtFnWMd1kXYF9",
  "key35": "3tfARmEEqagLAaF8mqmAX9DinxT1LmDbN3U3utTTypcxVTshWd8FuBmgH8RE6GP4B7udKQCj4QGDQVTEi9rC7wpg",
  "key36": "aBauRcWGCmCpsfhxt5S3twcPxmpb5FDnGLk12kVdgfg59XRM7JjWFZaDecYRRRQnCe93Lcodx5oxezg4RsWG566",
  "key37": "3k299hp7UH55YkXcY4bxFEbrW4BeQxNXh4njb82cW3dJRsdu4Boc6rtr36n98vsty7mfhMqWnr8cdgoGt3XnmyLh",
  "key38": "3b8X6iiT8HrmVYRDDjnXjjXcN3KSUknMBeAdpWMGCZ4emLYvcCcotXHom8Ch2JxMnbXAXFzymYqPxgwyMq8ETx3m",
  "key39": "514ZicUGTDZAsX4eGRqwoBGqDTFMd1MUVQDYzWsnR53VHxFCrvhEJZBWUtWtG68vpmrcEwSSQLb1dQUf7vGKfUNL",
  "key40": "3teNVoxyCJVBT8d36QNJAH95v8GmoGjAa4twvfsWCznicDhJm3geCDe9D16cMuC3eu5CgwZvBXQ9zqRDNrMW5Wh9",
  "key41": "5PUpRLanKzbA6okfdsHXtUBHz4zbfzexPUXg4i2pz9QX3adpXMM2HVJnUxS5ceBhbinRb9CMCHpfxwfWnZbJ6BCi",
  "key42": "3LRmTb9SPnjJFBDFYYRZ9qDmQTJxSs3XxSTqekTWpEcfFPtyrnsKNznz4zMHQgKKfbAnMBawaiYrhMSU2hW2ZrkF",
  "key43": "3sqHpnTvZp3NQaBMAtDTbF3HXQX6BopJqF7HvvRwBTxL96WNm8mjZKdCtYZnbSyLtWEr5CbLXdCoeB4a1b18HinS",
  "key44": "24hHJvJ26FdN6HV2xoXaEcUA7y382huAazzt1EQx36ZvTziwV3egDKkrC9fTWaE9NTXsJPGQQruKdU9fjjMQCfMw",
  "key45": "5izur7T8J4LE8HvrfAvMdhvhuZDEJvynjzvNUetmpFRUjqL2RJmySmmNGTD5XRwe3TWCEuf231Rjwu96GnFH5spT",
  "key46": "2n1Y7qXzsYXc1CMJVsnkDarJostbeHjYvy3q33E8VrFa2XyMExFWff6rfEj3QGpjCjpLiVgUymKPjB1SsF5kPCmC",
  "key47": "2gBnYvvpwyXt7tdM4iF5qT2ZrNyZf4YviTvAttzm7FceuQdKcZLin8FZ8MuHgBhuBq3yy8uJsZHYBqimx9BNAEPM",
  "key48": "5sbiZ8CYFHP7YRwKgSSpc7eTjwE6BG6LqWouxa5WiyhWw3iHR4XnjURhf4g8Lj18EujfwHz9qttxtFfwubR3WpdC",
  "key49": "5eZgxdYqQz1i3BAQdorkVtczucyxvZ8eFFTLCf8H1Spz8JpLNu7W7doZLRCbYCTghp7HTSgdiyN4jQLC4MCyUCCs"
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
