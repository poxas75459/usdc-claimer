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
    "2t6kL7hDL6EGHf6rnHeXqGSNnx8KMVpo3sQ84HF1WXptkMVUuT3qq8fvfbBXG8LtNcAk4ikzoQDXyQ2hHddo33HE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WmzvQZmb5yGgtYMo39FbesVSwcN1uTZ6QfqTgoa38eeqCVBzmhvdyZtGiG6RbFeLLiuUpJySkGoHGFX61ixkHbe",
  "key1": "2BGJH5zXVYx29nXUj6z2sQJiUN8QpwRpPQjeHUua79LMfDSWdz2zkXjX3xzfmgFNeNGauYSxwsUUZ5ZyeuZJzpzy",
  "key2": "5zUuvxaWXeNsrceV9qpDrTZTGBnmz8DN9ufEDookZp6GQAhU5Wj22iquSwFusuHcrdLJLvyz9QPP5tcNybL8638",
  "key3": "649hkGYm8nRdMKa5H8AqJWWLPhSWkhHzhL4Nunnwp4LKWGX2j6HwkQt9p7HqFL4CcVDNzaesnf17Y48bbuXMkza6",
  "key4": "3yCAkGTkx3HR5LY653zNWjXv1GZWmWPVZR9nFahs5B78Ui4wHTGeVkq4AaTPU9ks7tTNJAZ6992UkFq4JW3LeMqd",
  "key5": "3X56wYZbrzTMErkg6NTcHmdffYPYxB7myzLdjYP7ctPt1jTTdhkpqKgqKtkQuWERMFVKi7qLTA77HDbh432Q5936",
  "key6": "3x4NaaBEZhGRJC2ceETtrFDWZwxu7HWZ7JVeC81qzC1E9CRUTeG6JisAifJvedEp3hqrvZHZwTABpYUW9zHRKZxk",
  "key7": "5BMWjr8f3hwRGo3ETZ6kSBpe3eZbyf7exVjeFu79TwFyokA3DGPM3n6BgNNAB4LdbhPoE6BnAxFL4B5gPxMjzCNw",
  "key8": "5N9Vbz1GXhYPB1CTDEZRfSGS6F4pvGMVugCDSYReZ985qvks2SijL9uxrDfQaa9bpKqA2jqVagYtivGobfeUTDJ8",
  "key9": "3aj2izZeAGCv1w4hN9WKP4kiDm8woL6nyGoeaUCtgkm69W5eeVSzavUjXARfRqRDR1141ejJbvnYvpa9dxQxtWAb",
  "key10": "67dPHwzJajfTA5SjK1cq63Mf7jxTnWYxAsADxpzdG9NE8zdiVgf1XWgPAxcMT643nw8ch1RrBChX1nUehzpvjR1Y",
  "key11": "F65dEqyuKfB57hCQZos9uiAUCMyJeHULWJ15LEAgJKLgt67HxHifVa1a2HKCBCQtK6suoW3gT9x4kZDL2jkTCrH",
  "key12": "2rTtRS2AQc8fqb46EEd4HxHUoE2ugFFLXSKpZnzGnzTUKSeGXpcDxYpUUroaZnatuJ31iKPLxPNPySTndHLXG2hB",
  "key13": "34Sw9troWL4u5FjCim4bDDNPYTWLcn4jGRdMtz8dUfWqh2AkAAyhKhWmGy2yHbe4D1BkLzsF3GRMrFgsdotjL8dH",
  "key14": "qFqNuwNq9VZaaXAY7PCoF2tEhB6oWf3ki1c6tNKaP1nf7Jhy1BTLiZBt4uAQ5bJ9LfK2jqBwaqeukx26v72dZpi",
  "key15": "2113maqhXg6NEeCjxrU2gJtbQqwZnivzcSSNfEDvKHybFMJit5qai6qmHjGtcdmF59To1QzchQDjQibT6Qb5VkpR",
  "key16": "5Fs4mNhedLJj4T89q6uEMP5UeDhJauEGai2KEuJsbAuoJntzuzfdaTe5Ycf7hF1fBPnaCUGkZQoFSG5mjj7JG4ct",
  "key17": "52RYvdJPdM3i4Df1w2UT5SEWJMYu66dicUGfZMek63oP37PDPA1He4nEYfF3yuXi1eU5ACfWKQW4xHWmCeGPJtNs",
  "key18": "5XZZAxZvUzxVdQv7Wv1dNt62M8N4bWGYwmjFh5Zu1uohp6ELQHKV8K7HcVo2wXWMpHw6aYa7AHRWWTpa5Pf15JCT",
  "key19": "3dXLJwDCvJRf1Wu55gzw8ZSGZNL8mt2JcMD89TCStdqdtmjLWwtYLFAgf45ke8Pwq7AKGePBEFFUQ8fnnFLhF68h",
  "key20": "4eBRb6pYA3qhwUyXBxCTRvWcGquWPk9tRbLCiDifXCffz6oRpicJFB7JfocsMDCvfnz9SHkuxQy93QERQZjYGA5y",
  "key21": "96UaNByoPXngCKzK5cCEQDq9adDtCTsEyZdK1gA3ymZREVkTTpDxwoaC5heP86Kq6poEV6AdNxupCgS13rJiLS3",
  "key22": "3AAoNLxQ5qMQJggsSBfuzTDcWqAZNU8Tzx3njd1py61QmhM2kyLcz3LjrFqtQHm1pBUZaUohrq4a21ztLhQjtP2w",
  "key23": "5Ef8JoxFDWdxskysKp5FAbn1B9sA4TAF7NefapugqodTTU4hU6hULdFmdyjG4e1RsQAuccKKxcAJnwTHhSMFWt7z",
  "key24": "4A9qKCy6goHpkXU2Gcwv3RDS9ooFdYLLRghXno9ZQ5g7fjZiTr2Cda7qS1tPP1u85oeKfM9KgVtsdX2dsAxwNTuE",
  "key25": "zHJZjJyfna8thrfkQK41SCCXV5RkgTcvt1N8X7AFbeKWx2pMeCvwtJVCnZRQRWCJxZMYM5nen9KZssEVbKuBBb1",
  "key26": "3snKrv6dXvRAqZCw9g4aSgpUJyy5f7vm6gnyoq4MPQQVFRB58jWhTWjn651zf8ebLQQc4fY3j1QyYWACDH1PiNPq",
  "key27": "64KN2HN3Fo3CncQF1rY1YRCLVE51GvbEGwZipE6froCLay98299z97JhCVNL52m7f76PvyhwJkYh2keEjYGVueBS",
  "key28": "KYeZcoh7gxhLzRv69PnGyhKCCkXdN2pW6DUaXiQo1DDBMDsCgh687T5zDt2YTZFVKpbTCHUbeK8gM9GdU9ttQWx",
  "key29": "5uGRa5G6fAVgNoaAE3Q3tTQnL1gwhaBkiv9kspaHtbKWgSRqZzDCuRrvpejJkhsUtj4K9xpatfMAUXhkXVTTm5Jv",
  "key30": "2SM9KtVD6C1J9zjDGabVjLccCgP4T1GnMnGPBiFz9ZjBkZQdGXSPqyavPG1atyJMMhTMK7xb5qwJYqCL1vHRn2on",
  "key31": "5NH2JtoHcF1BhqYgGahsHEvyHbn5TQyEtTMzK9666CXhvg7xZcY3u5uQ99vWZE4iiyNtQ3kWnXcxgATAwRsS8no7",
  "key32": "3usiM38PMVLyhJY896q7185PaPE6toWDUf7CyEQGAtgUHAD5dtnCt669v9o3DjajExuqscnP9rx1mbSciLiMtnAU",
  "key33": "Q8PWxfGuqf7CsKUfdiDycvcSn5FtqAyVHa9G8bDxpp1KChcXGwW7qzRVjbrvphTS6266ZeHRMtcL6urrf2QXB1b",
  "key34": "2ayscBMvX6S2JaPkAMBBoRJEse8tTa7WXV84bLqSQwMoZkMvgKRaBS4uBNsiWXDMhfEXzJ2a5i3Um7WanpvD1swp",
  "key35": "3JeH9WnhPuczYfA2VjmM7BTmuMQioBwNbtxyv1VRRpjzfehJP9GxUw1zsEqcEwqkXj2oo2iNnkM5CGXHnZV3UNH",
  "key36": "gkTrTirotUV7LEE4V8CVV5PoFzrxaUyPG29NA8wWjMtPpqgKF1KSMXBCcwUfWeD5X1mMe77r9zJFvkLcZkQsAC2",
  "key37": "4tpj2LfPDDxLgRt64WM6Ds2BqUTAXzbGdRXsWjLhSA8bDW2eEMoHh1uc7v176eDVwBu73Y3nTwZQy9ChpEWxxRzY",
  "key38": "5GtngvtV2LSnpf3e46kDkRDQXpwwsvEYYaaTRkxs23MstqJhqkYFmk4t6Xc4iNweJpnVgd2ZJA3fN2YXCn1DSxGV",
  "key39": "4AL9P51LXwkyVYatNonJN87pxaXU9eZ7iB2SL6uVdxwqiHxfNnHf4J79eTodQPMX7a8n1huVyY8YMusuAkSCg3mt",
  "key40": "uZ3jWKBDL1uhcgVxwf6e5LNHZAxXqL2tqktF4wFf7SLHsmQTBYF2VRVz46NWDj8GaqqBB4P86ZhvuxW4f6rurAr",
  "key41": "ijF8W3iTHgSoHwiafuUWpWbi1QTJPHo71wW2EJDmGsmDBLrT8zyKEzMD7VqfL47Pdc4rtqFNQzBabgM1BQZoZ53",
  "key42": "2b1TYb3t5TBHXmrDh9kejv17bNjLxPZzeqgTHSTk9NSBBYtMCrWX29JuC8Sy1Lf2tTF6H23gV6Wz4TeFPFA2kk8v",
  "key43": "48f7x6PWmqTz9tpieKtReTuABvcf9jh9JdaZum2GghmapvFLY6NS6hJrSUHUqXQwa3gHZiV5k2cUdVcUNehMmn8e",
  "key44": "2xyPgQzaTi7aAbaeKX2uhwAfAuJDvpJFYyCqXeVxs7YkViDESEz2UqVQjz2WNxNyitkJeXFtveRSk8KA9LEmrJPB",
  "key45": "62uGcnbDd1zQMRjD7xEPB578Eb7BfHNWqSWXKqtNHdkHzrooK2UJYMqryS7mSYt2icFZr74rpickHbxon15xxvvm",
  "key46": "61bAgduR21UxB8GxAhAksBZBqw9WcFdpYij4jiQELVUGwDaxSAmT4V3Ee5qBQPdEqJbiBQ5XFwFKJYtiV3pPinFh"
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
