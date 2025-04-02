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
    "2YGAqJEdbtQvBr4VVnC4eQwwbd649GoBeSCqdaHg8Stw59ZAnUwHeJzB5mi483sw1gmRAEei42Tebs7JMgXyn9b2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ve4SeDXxxiTrmuqLGmyJsxcDxUH8Facaj4PoY1y8aYzhuXuYX8XPw9Wqt9qfYgBDiYDcbDbnceYdSmyEBtntBdC",
  "key1": "3nZzJZhhEkL7fP7Hh7qtuxQMopdupTKykZFh4kKyUuaiogiMLGga1rSw1kbCuJYBHxmhx4LvS7XUnaxoAtQdfXnY",
  "key2": "Cppytmg6sa9DaDvMJ9MDjzQ6TDbMFhRPsWMnohssLt7zGWDhDdZavQP7kws9uoWiqZ8zo6vgQy8pxf13PXoJkiQ",
  "key3": "4b4xtY8QhGTjKQL1WqfSbRwRh1TM7Xb9cdX2cog1NX1sESbehWYoDchpEMkNK2qLR99CPmYwQDS9WfFYej7ZMn5S",
  "key4": "2hVqQctKtzxzHEi2ETDBbPxWSWPHEKb7eY3zxQm4zZpzihtFjrtYcHo4aq7PzqUYnELaPVjja1J83oV2t3f6hog2",
  "key5": "3Ei9DXe8m7wrbqPWGDS9TifVA7u8rVaQiKvsfbGAKtQ9JSAczvkDQhG11PEjYZAhj4ebmSTbqxiV9pxtozZNiQWZ",
  "key6": "5Bq2MAZqCH642fHX6gZvQuQUmDEHCmuQxkL8SdjTQ11RvJcwyswbW2sMMKAD3EK3nQfoQdE7yrs78oNeGHLJHCUe",
  "key7": "46wk28yc3EjoJanAwwGhhFLLzpTayutg79kazXVk8izGfQfT8m9poCaNWWdonXkF4m7EmU6Sgu3DBQm1MxyNgB6D",
  "key8": "3by3UXAhmYAg9ZwSayNCBGBjxusDkd3RK2JvdC1GEE5LmrrGi5RgwKGJrHopQBuE3cw83ukWF6CBJc3urJAmT5ZX",
  "key9": "446uUVsovGvKzyywLGgHeR1SUeTjc59d3ed64VYHfqgaNuFuN3wN6qRborBtEJvZFWb3SLd3UriPer7nhsU7o7zs",
  "key10": "4FxcKEjMbYDQaYxWTGxbYciSevjJwWf7nCuxc8rLTFe7LYejKhPY9gDB3BZDfEDejQoaZ4SQ5uNWyGyWmWrHLR7a",
  "key11": "4zXoS5Q11Uf6oghCC6YsF4kKn9K7suNRy7avnZYA4MSFk2sSXGo1kiP9NKcsfdAgkVBjxySRmaLbyqMoLcvgjrJT",
  "key12": "cHHzVXpsQLYnKLnAEHuoELy9nPEKtbTEm4xcBH69767pU7SzWRf61Phsh2AdRZExCXvMvWSxpXKCts5s71MdWq5",
  "key13": "3PgoJrJKmEUYwZ1Vnobt931qhUQKjy12aHyJq7vbnmT9DzNGiwzV35H6NoiL9f4MGu5poxPZUweaHGEvtmTBssSS",
  "key14": "q7ghpCN8a3v8dGvhMSWTWHvjtTUoAAdMuv5WTo3kGKxmmoHssHMRj38tnXut3j1GmF56Tnzu5KmjGEXwKcY6Vmc",
  "key15": "29q4JqBhR2bdsiCZdKzQoHEv1pKcK5Y3bdWXKNbpYDZ5P9pEwZvc3hQSf9w893CibCzV9GPwBwQijuRi2fL66PRU",
  "key16": "4gTYvANtCKXJgWFccs4oCehGoq69oGo1CcFpBVbcJNTzSuevPhQDPNwE8LEWGh9Tusw1RXPXQ4WWX21pz4tA89qG",
  "key17": "4tyPMCjyQfWT4fkUZc2A3Di5zwk2t2pjp6agcNdtfFEiVBCPACbjpxDbh2ZGy9oH5dyrXr3mFZLojhNwgLt63v7B",
  "key18": "5waCdq7CA4bRDitkWSxoa171FWvvwRHesHjUGurjodg5EiDYhUvppC26N4Jd9vAvrwKzMgmbSutB33DFnGpvrESA",
  "key19": "3tyXBPh3GxhPKZPVpDcP76P2CWSMzRuE22ubtNA2VETj87CqC6brAH7nQRUmK6rN5mdP4yCheuBff1mSvenr8JKk",
  "key20": "PmLHYSgLLESMkb8K9NNnXQu3g9VTGt11tQnt7CpeeXVQQ8FGgnKhsL6FvZhwbLGprHvjUsjWJ354qQVvBEB9U6s",
  "key21": "66TCqoPBLvYmcYmDFd1xwEM2uzEkUgih9BEKTkw9rdqxTYubiQ3WF6er6LsW9uAALwiiofeRHf14nJenNai8fkPA",
  "key22": "5F5z2iKGiW1ARgNhHfnSKJVHSUd3dMdrMZfQyMUBh76Sv5zjnQ5JNb92fDbE1HuFQNetLAcrnfuBpmiasJ2DtS1z",
  "key23": "39sHuucrsJLYS3Gcq6PhAeZ2A6MjnoSC2pPZfTnmJcCPQgFtyds95tvLJRfja5mgD1oHq8EPwE8oURHrwdumbEo2",
  "key24": "5V4YEcRiwoTncAibo5MUtFfwnWRrStyNNGAAQQKDgYmUYuAcF4veFimzm3y8iyxQkBfTUVB1zxhC2pDgoEgfD9Tr",
  "key25": "2HsaknrRdhcGpM5GFJ8rZvDFRn4LiZUeJ1qwwAEt3QeBK5ormv3Skwthx2rqBqnhcC83TKbEspqR5zgCMXrdw2wx",
  "key26": "3WqTCKLMncjs65RLPhTtGzcNAfia3cNBnvN76WHE7S5Tb7wgtLmZogb6oAT8L1FQgqozRg81t6WMMTswENJpwCLS",
  "key27": "3qkow52koZzNszMFeKFTs5XBpFUt8xUF66ffDP5UFWinYb6rGBspj5GxN7Qs2nuD39Y4dx79tFCU2h7gmj6G4xn",
  "key28": "47DzmWq4PF2hfgkVz3AYJF7MGcj28tdmNxKY8VzLFkrhDpsNgofbKPzYzGH42ghGJUoDmsZSoA6fU6Vvi8pTXBKg",
  "key29": "5WHqLeaMjr1wXT177mf991pTuSWGrcuag9gLoKkUM7Jkj1H2etuUKS7MgkztYDMAfXJPWnnTTjeV9z4tU7EjmAfC",
  "key30": "4EWiBEE9y1aeWe8nrrWjrbAzUMXgwtc8UZ5YRzqRDB7zaE36298DHKWGYs6yjqAXrbrErL3fEKfUcUi8w4syaN46",
  "key31": "2ReDSvm4QtgQqGB67RDoXg9UabNfzRjmeEsbJmwGnjVCR2oeB7mitg5DxsgDLiBiKBi65xQdspa1Vu8e6XqnsCc2",
  "key32": "n4YhdmzoxRq67YnxxjkQ4iRSksZvm68US43CKeKW2xnrHaJdiuMC4wKasa7vsgGAbxAY6awUymLCj5rg4t58jSg",
  "key33": "2Gs5KfqUQMxhozNrNDoWUSymR7RNSxMkcGMhu3P4WvWzAAn39oQadhWwKV7GKMhWpcVctGQH7rhe5fwocHri8vyF",
  "key34": "4iAsNVTrpfbbnojwe95o8weUx4RKxQF9sxezghsRScs65x2PLErBS79ZC6e7sJEU4VMkobvhxMhip22UfDvH5htd",
  "key35": "298phUmviWDrtHhp9paofydidCV1ZxjwyqKinDMib9AWwxM98ic9H65n6mFnkM953ZTcs35P3zXi7B8QiCZksZmh",
  "key36": "NddsBUKzo49pkdLd2i5Fwx1cGuUUAqC5nso4srfJpn9JqFAye5K7D24Z3qmbsd1d6MEhtzKWQLwfFbxpc8tcu3m",
  "key37": "3ynKie5aLDRAvFhfsdVNJa31eV5ea8TgSDu8LJpUmJ1vWzxdPVK7oYjcUGr7rpo5BeP3VojEFJue6T81xTY4XGtV",
  "key38": "2FTVvjn1qYpjTRWv4wYYzojfTENQ3wAqq2RN642ZGfXhEKH1WvZPz58m2BVXY5zZAktSwrpi5WFH2rvBZWihuYc3",
  "key39": "4tX6ZvWW1rJrRxBRifKjciR7btCjNTvhaGN351YGzasmtyfGkmeY8gxKdUjyphhPGLxQTa3KTqEGg5MK6kRDfqfN",
  "key40": "66xVkSdHPoua3jvSB1yF7GLnH1qPSPrqHbUiTNAnyWYciCt5NYuazqRZgzoxTKRJD2pVjgeT8AHuB4tkLtyTJ8c9",
  "key41": "3DyXQmdtvVcyWFpYWggqZvqx47qqD6XaSDbkRmjYHLrcDarpMkFm4tcy3vuxzVbpgQJJo9qobpGJkhuFSYD8svSN",
  "key42": "63ZRGxmeW2CnWEVaP842YqthK7KyUbJ3nqytsFEajbAwBTheSp9hRtxsrwxwwbUtKEfq8uf8d4tyAJdkwuJpj6X7"
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
