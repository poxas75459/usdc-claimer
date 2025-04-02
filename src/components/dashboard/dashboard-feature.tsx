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
    "294GzAeFnfaM9A4iKsyVtBaVD9cDQZL58LyDEw8CxCMu1Nm5ZowU4CV3oWnzVUQJ79c2aD2BMSZ2juvYrD9yYfwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H63btjtSi6QWBUnPn4Xj1bSdKQxeGmLfrsWJnfZGnPWASGBshi7xTg5xqA1LVKoCsVgjyoB6ShDUjg8TjUNRaJX",
  "key1": "339HFCRobvgmB3PYSwtjb4sXavjVsfMpHiwrXRnW7KF944mLb1iDd1F8tHMcZcU58rTgswyT2c4NhzjMWjN1YTzB",
  "key2": "2PuPLKHekVbEKnocTyYqUei7sKQ4RGHsa1yXXqBytHe3JKHrGsFWpBMuUfTz3XcTn7jZdgqS8zrxZNPmXg1TuNGK",
  "key3": "57aFq8P3AcwkbPsjSes46fuizj2VzcAkBzMmGrH34cDuGdDMk59ytX2ZpKizHgGvVeLKaT3ovGy9CSDRxEYziJCJ",
  "key4": "5VzmH2T5o9BeNEFo9TnmnZS2nN3Wx4jHs2xJoGwzECRvjpyX77FyveSbnQomsUhgGNY9WuFzZnCSY7xmpZ3En2ZY",
  "key5": "5YmQ3L2DxCSbuzSjcc79Tr5waB8yxHaegaQkoxSYdCF3fzFBhV14uZHGbC2Qih2522d7LYZmxxQi2gv8JFejZy62",
  "key6": "3yw19BkVCpa9ApezYt7tLR43KHDE5sTgJDM6eqyJ7oVQikCmWw4uuC3TyBgbBqEFCZVCQVQy2Wb8temCUkDUBm3R",
  "key7": "4U5wsaYKqBBJJU77XmfkULQHNZw8RMpkeNR5EQhNF3FW7xFGZGzdpHaqKajYAGavmpVHSidLd662zvxoPnub3Vev",
  "key8": "5S5zLXhjnYv9oPCtRPtd5eZUhdYWqwYJCGb9zuqbr6x24uss95tcpug3i2PNg3PcBEXVf3VUeoZYcVecXwG6yHEg",
  "key9": "3Kz1sFeN8g5CW32YxFxxmWYi7aE7WP1wCmvVvfcM6ChNSioAgkLbrFuTF2tTmXdcmPnibwsJYDfTRMzbBqrcJrdR",
  "key10": "3J5LWjXWJVDev8oG1BVT8HnSU7cnTezCvaP3aHpRUFtmaVLZzwn7dohdfguFyGFteUyVXkyMLngzs4PjFRDRduB7",
  "key11": "GNnXWi5C3nGRq3rhAPM7pnLihX6r6U1ZMRwhV7P6csoSstPXRvyxrPiabAE32ZXKqnxfsMRaqKCZjf9bGEAYFRP",
  "key12": "4GJFPmVvA4GbbxkDfYzUpB8Dfwhbzjf5ZYyLMRzvG7jVC9AjzKzLgAqhGiYzTy6eFb3jpTHTrBZJrNFpEVgnx7sW",
  "key13": "232rGPsSZLskef7JFD4tjkTzHHGecPCJ8vuucUTKRvJ72AkRpL5W3iX9PF17BQ5jQLA35nQqiQsLGLmBdb1nLcqV",
  "key14": "4ZSw2NTiBe564cDP1xCTAgFjcoqXRHvCZG6ASd9hq5Ns4wwvUKjEoLm9UbPr2vtk8WAZZChNPZJ3LYku9KMJy5uP",
  "key15": "37u9wqoURCLgtfzDBearwXRqKzVXGLwBqNJGBLy2tjPUuuW3V8j79M19BvPUneehgNbenBAmWpd9oHyYBifeMU2f",
  "key16": "5LrEzb7wTBqMHFMNW5VugQjHLLMfD6N7HL1hu4NZus8yjF2KmZTdbQSKKEzK3d5rfU52TLMVZJSFgUcoxRxKGjev",
  "key17": "5BVD4jBN6JzcDFYyd8yTmAnkxfxXw2mDjYUCm6gT5JyHXYqxxCZX5vkV9XCm68TFu86Pt6nBaQtMN6gfBZsfP4rX",
  "key18": "67i7VYYmUhGYRCota785BFqrWsmvnoBntpr4KNLZ3JCbBYYssj37PWtKi4k8Rxjbociv1ycnn6QufvR1SPCjwYKv",
  "key19": "7cBsbnRJm7aQUnJfJxAgSYoVst1mgLES8VSyBRCpviKuH8tkSiFZdvDeJCtQb2N746KWAfhC596CT8AEjnyDzfu",
  "key20": "5tRoXjhm8EsPe2o9RcQEMnGQcmaxMJ77XZxiXm4xjrjiS29c4rCk2opPmViaL4VkQxFFQxEtnaqqnacH4g9TSjC8",
  "key21": "3SJUbuuHQLnx6HvRNkC3fVL7MMLQ6TEBE77APwZqZ2vmHnHtTfpgMvWtctmhNrRktbLMjWqdZBD8Nvy44SSgzvYM",
  "key22": "6GW9GdQS6AnLKBdNuauuEXz1FGrussvpG5S9PPHfQEzNFYuELv2zmUmd73h5yaQBAAhvk4xNmgfxBNHNRNMV3wv",
  "key23": "3ABJY9hxvEcGJe9eidyZist69ZhsjiGevTmozZwfU3H3yVsGR17AGpL1qJdEtFSAqKaJVUEvSgDF9CJkUzLjoH9C",
  "key24": "2SRB7HQfEMV9RMoMU5bizA9seFAqiUm6WB77qMycQ4LXxWyEKH587PMxQfd8Ke2r2GoiNGSfu9FoMza5KWx6EZRf",
  "key25": "25XPr1L44cjEqbHFExLtbUGDbntobUQfcHLi2swdQdYMnwPdGP8iQZnwXreSWZYsDsUhFmjd6pvR9qjoyDoFyrku",
  "key26": "2L4sKLvKgEdnoDDsfZ6thm1WgY5LtgQG8gvbEd57EtuaW3FqnySm7EsDiMpmMaUCGM9rUwfF7EqTHpuQGGjUVUpb",
  "key27": "3VEB8VJ7CPmNNnsW2YNo3JK4BabEZE7kyfRtpsD6vEAWbtYtVBGibcad68Nmecjzz7vwzfPixfpxcEHXskGKXSza",
  "key28": "2hrJDEhG34NZVeYW9yUYZxLQikDx9E2dQYbakG5GBmnkFCpxwmU7JH1hAab6Qp3duK3qBCa1UPyXD8V2qWXjRbsx",
  "key29": "3MKAUnNJsL313e5eTsgVwHYaAXrBa8nWaNREPn27XbQF1P41q6jxU42c4YssS7N7B5vcQFobHGs3RNadibcTcfUC",
  "key30": "4UsYrgVfB2Lf29VS8vYHpXWTW9XqMK3KHYBLADg2g2SW3RynbYEUKqBmSeLoXE8Yn64KPW4MkcuAovVzVsYzoyJ1",
  "key31": "5trpw1GfqrtEEnhmYpbdc9ZTFqmikoUYeifcUThZ4n3UTvGNX54vSQVSrPYoZWkW5xprJbHb69gvsDtxjzwh9nzk",
  "key32": "TQzWw9aSFjkwPt8bt7uCHccBLDLew7Sr4cix5yHVRNnfs5qRJch6pSjapqwefXWfaC1dbs1pB1TYGxczE1JGaMT",
  "key33": "4sPqpW6MsHoejDgR3pxyVXdAPYR9NAt8uN3M3wXeS7KjyjdbyD5MSbEQtiQq1QnusnkgRUBy7hsY9jSyqDNz7Frs",
  "key34": "4BfrU2T4LLWuqwnJ9hqmhHaGAKVPMjrbQEZjAbQYAA21DfwJSRdnPCdV5ujMRaMic5YtEwhi6KMjSuBfMNNUG6jn",
  "key35": "2NzYpSZHiHjSYvL7cCKnMbth4d863uzo1uMBv3spqLUHAP29QFDrdYtonZg2sQkaQPhAZmFHQawxffCWMDCS9bHg",
  "key36": "3ZUqxxteNsH4fHyJUvxiTq6RexsLEq7bkCCyshCCXDv547rhaW9LpnmXzETG3a7yWoScA9pPg859PAdguBNb5UAG",
  "key37": "vZfMmMU6t3pYSQdjyem5pxjLgQgP5u74RbNNuBBLFyEi9t1NTXQ7vUgiQMpTRwpMpNJYAJw7CVqcN5rBXL5FCfF",
  "key38": "2m9xKRM9q5ZnKHKC6izxVCVBhRerxS9EaakEXBbd8CtLGFV3TjJyFwxDB2SWJ36qDS7XUuFxJd1aMcZLw3Vfr7Ca",
  "key39": "4jmXHgmHMcqKPYPCMRM7VKQ81e8WWjkogJ31zdHXNwqbX6RZLQN9oGL5nS1qMmBivodvwj9hA2KmggjR3kCbWBAp",
  "key40": "5ecSqJQnvzud3jHAFzSkaUofFonAj4LmFNzxNF3yLZCtCtEisBqE7tsgLfS2vAGSn2aZevUGF7a7axqSrWBFuoX1"
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
