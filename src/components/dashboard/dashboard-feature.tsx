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
    "4NLRk7bmjm6L6e7yWVRBfpdV4EPpSHUftN89xGwt134gBVtNH8yZ2kC1Vu2hb97XdfnMZbB3FCYUUs5sZGDMUbEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ptra81joLbcMiwxjaWDfwXmmZTMtoU12WFKCTjEVpNuCyabmETkCQ6fh2afrRi4aqjHHtnk8xxdk3MzSwKfnr1D",
  "key1": "2biiuXSjhjhRyJjzqPpmKPw2rChPMdZyAih2Rpq4QCbLGkwHcfcdyLcBNvhhxUc1zMtD2xmuosit686KHr3gmfgs",
  "key2": "2GnrB7T8z6JZREBqUJXXcAaYwsCFPMBmpvGCRbtEGkW9qBt19jxM43JSuK2Ahz8do7WmippY1pwyRCJRqET5A7Mh",
  "key3": "2S1EJECdw6Bz9Cu6u4WstyPuSocYejSTCE1Ao9SFyX87m66BvpTvEP73Uv6k7FRKRnRobrawvPr6qmCQQzPmG7B",
  "key4": "3S1bEo5ypeywHED3soRYJ8hZA8vudzpgQarV3fmU1HAufcQXDTkmgoSC7FgnzshxRRNT7Uf7Jox7gfMgEkSGbxwB",
  "key5": "oyZbzG8GFaZUJGrkvqhLt6e6EEH2hESjA1ZAhtQsGZd6j7QACwBxNPRkEu9gwL5qqqP2iyzBXscVy9h1x6111uE",
  "key6": "5wnmm29r5MYD9mKk59egVht9J3KwCmxybbMz8kc8gNGspkVwCwvQXGh3C2orAW5QgfJLkYqqHsNCkd6knq4jfrVC",
  "key7": "2AoxBB4MgkimhQZUFpzu1wroc2N8zqSmgq5rCmGi5D2Z7MRERPfNokjkb4pNhrSuvGTYbvYXaRvaNDNSLA3u1X7Q",
  "key8": "5LNEwDsrBCFBh6MLSZt9MR37Vw7zrvDVzL4K9Aj4T4awvuVuQagCNmWvyYWz1FxD2t7p6okKao5jb6SVsbnrJjSj",
  "key9": "4EjyevWxbiVcGi6WHyLXu7ASaV4LASRPCzEG67ynWLJjNqRpzbthszkzaeqc8L14b4RLQpt1AGCV2fAax4UC9Rjq",
  "key10": "acTMbGFDLDTWUG2yVs52qpMbGGz8xrzDn9RCrjQM77aXCVur5TahTKX2nUBEhAy8o3y83mQQjKWroWjArhSH7f1",
  "key11": "2jFVXGXuaRYPQf1RMEaMSShkk77Q81JuJmZtZzksSS3hD3sHiqDR1yFTem7z2HDxrmqDvgYiDabFBuWEtG7PrhCS",
  "key12": "3yiDXSedb2XSfyJ8SuwEuSKoATFxA8o2zSNF9gnDyM2675goCTdsWGHSfnVqzpYE4GSPucgd9rTNtvvgRvcKVqmA",
  "key13": "3exg68NdYu428vesDxjRLJq45S8fPRgZp3FkYu8V79a7HK2y5Dp4wQPPRaWn6jwjMjYyiaUCTx9FGKJVifstskgd",
  "key14": "84kewYfg2Ar1tPbNxDi83PHjZ7EUXGzpeViXLnVjbQDew8nK9eXWiVpnLLRDjo5CNxukj8Pzcu5nfsEeQWZybRz",
  "key15": "4C7kZDG69jjqY9112cHJZNMgEbwtwfDJnegNPE6Z5UV2qpvydhhY4LVrHg6ViaSajBZ8mSS2JJwbCE6yJr1T8c53",
  "key16": "4RZQ2LT2qTtX77VkPfEBr1TW67BC8fPAGiS7dLwmeJijzkSuV2rVXxPEHTxYmqYdV3BvuG61ZCz7Ur97VPVduoAg",
  "key17": "4aoUZztd2K9evuXHbbhy71Btmshn87MWjk6v9yaoiTS9gvRrm64LGvGYGXQ97C6TVVVbvkSqfK1PpjnA98qhHsto",
  "key18": "2Vp9P8gnbrvoUx23B821zXzwtzBxnFqKU1ZNPTVUSRvi1sRtXXUq7gmCyfWMrxwHAoYz1sNSKgfUm4SLVY1dnsrJ",
  "key19": "59QkQLLVckgviWR9qi9iAQQuC4Dxdo9SvnPQAodkXP9sSFzsVsh2jfaJcC7cMtwhZekVKRU4TJVwy3mJRgMfuatU",
  "key20": "xQtwZjiw4gAEqrN6GMgVytxwh4UvSHxjyYeiGAmJF8fU9FYzNkosAHQByN7HL7YPtNxnMddtX4iZkAmRpiQnwfS",
  "key21": "2zTmwgsQthfkKbjdczfcomGns5xxJ3gLeCUK2eYtNmKNarnNrgzLDXifnqf4dpe2yuQuAZv6daCn6nQbJvFHfSei",
  "key22": "qX2mVsT95DjBkB5rk3xB9dRJhh3cCWaBRQWThTLWmXRAb2wcPerxvr5e1sSMFbJTxGSLg3GHBjzjuvNi2LZuUvC",
  "key23": "2m8meLxUYxEAwNdznq42GXdc6bvPBRNrw4UH4HViWXe8tdRkfPy9dCfigwf1kcZsbgRX2TJ1nBgMyXD19T2dwNDo",
  "key24": "65vm7toDbVWsoiBwCfmCzWFSHp3j2Rb7KMjTGZNU6RTWvg6uM2CZwhBJjSM9ckhfC12sYFhnBmqngWYu1tnxCdZ3",
  "key25": "tMA2Rrm4Bf5suNmUdePERmionT92AtmXUSCAx5b8qceCEvKTWtyNbHnPnLLu9YKeEkC7mKgyNXij1ZnWD1FVjHt",
  "key26": "5x4QSEzMtvQs9e7iDdJaGNYpJLau9139k4dTAG5UifQ9fJjhdTgvx7dnRqSPfjfUFqF2twYvrbgHf1WXmBfuGgwx",
  "key27": "3pZZ5P2tKzjGpMD1yaCnaLLdnjuNteVbaj2hKByEpq8FTf7MAjawYS4Z8DBMrspEsytLBcYM7gGojFUCXCFC7e8z",
  "key28": "5VYVZm5tdMwW3iMdjb5Fw6Hqx5oXiPjXcqzDiVc4ARgw5tdrvd3ygKWg7payMj4kAAQ9w1hfVmG6g3ikTq1gZQzp",
  "key29": "4w2sJukzZfaEq1vMmVJYMn3pL91Pc4155Fbfy1rM19urVovpdAMqrouQn2J4cf4S9zVgthU7B8WaivkFkHcA6daz",
  "key30": "5aEdsQ3Y9CMxomFwunA1VgcdeP5ExFvTYVvfi1Cs4ogaazZ5ic5HFwuGxhQX8KJ21rvLSkw7G23bud6kveDuPTiJ",
  "key31": "4C2S3ES3SRygveC8KgHS4AooZaepsH6xA3PGj5VBKwgWhXMzLom1tuVT36hJ3UiRbXddNK4fVe4QGK92Z1Zm1KP9",
  "key32": "5baDgfebDsLvX4n459YMw1VsipMcyS7nXXdg6UXzi42QJKvqSfxYTTH8bSvxqavigndPGCKBN4FyXaYQKkvpmSWs",
  "key33": "2PS1bKvRFQZiyrTpqP1XxM2gfoDwFN4WRJhfhaYPagCfrJYAPXpXj2QCzPgtBUg1qN7KeHWVZJjV3RC5BVYSmUUv",
  "key34": "5skCqt61JMSprsVwZVw7gJSuZYPmJ1boMpQdffm6bK3Nxb9NWgcHxJ7n6GNfHGj6GnsnaPcRmWqv4eQLV5wcetck",
  "key35": "3pySFAgJmkyv9gU1pFGyLvJ84huuNtj4nktURzsWW6eFPdpZgZBzoRGRQXUhcvfmFy6Q6KoAXZXD7r9ekWsfhnLG",
  "key36": "3eCmKHfo1rgJJAN3hhftY4MBL3safftb3nPti2tZPJpbxPtgBPhk3vgWRjsz363ACSiBW7xPNchJmmyyM4cVMDV7",
  "key37": "3zL9PQCKxa2HhD2xzBCrxKjcUXtvZHNhDMHnGVawWm3aaZpXQ4DCGdAyYRkCPEbM9rvYSrjkUMmeaS7vV3VGZdEM",
  "key38": "3857fpUL9k7ZAvrvvD7QP8S6QWC6qhJBsaEAw248322DQ3TDnePdvMDM2wiNXZ1gkZ9gnHugEsPs3xjdpxrFk3Vt",
  "key39": "4BMmHfHBPNYVtbkuRk6WD5KWvV7yD7tVUxizQzBSdJRvGVhbTHdFxSn2hPfByjnFN4WtGrYmyBf4wGkHVsGzXed2",
  "key40": "39g5u6BPscWaC5hzHyGBqiL4acckCon8nQDNVvzkvPsjPdBpwzk6NbBepdwGN88PYFUJTuVL7Un8jkLHg8QHHWHJ",
  "key41": "65kpSu9rx7S9nUM5LeepGbKVLgWEcNsrrLiBZwBs31ipnSSinAysPSTFLdF9ZwGA4MDTAZERfFMQaQ2uHtAdLpfy",
  "key42": "4SQToH5VKnBwP6LyNrCcgb5V5y2HX6vd3EfL1teoHkuTXvaV6N56vxAkx1Nv5Ji7osnWPHHiQgZRYMAyeS7twiQ8",
  "key43": "2D59wzC3xVNUFZWpVp1sySXd1EXCtUzCoDkgcAC5XkN1JX5kmBCTMW5hLiho68mzCuNX8mVVtNgBpAnCbaFAfZeH",
  "key44": "664b1dKn21T3TneGNrN239QbYynyp9V3uTnRZWpggdH8V3WHZ5ZK56rGKQ1mgJPzTX8kGsLabiqyC6egLAUGzvyM"
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
