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
    "4WCnyvQrhjRBbd3cBcYEh1J1oh8ReNG6LHUe7tnNQYvbuBzmY2hAoyGddRGyPMxUvrgP9uh7GJZDHmTxe46wCYAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HcrBRTPvibikbJVjwUZeZsjTk5wCKJtC5Aqq6oNLy1ph1imWbPu9Zqhf9JpSVjcRcQEo3BXr6LKNkKCVaobTPpt",
  "key1": "EZCzqmzu6rEN9Rvm246JDG48r96WXwGUzoJTQ1KFxZjiiow4UMkzFwBGTejUy3pHWSsgtPYvks1Hr9a8DwxcQut",
  "key2": "aitVDKa5n6kA7Pg3afRPft2xNgcnMK7XPJ6uVZfHR666ZC67PejM4BA7jztPduiBwUFyh5T56yLo8Y32LjLLyK7",
  "key3": "3WVAbmHVHG17DKhMCghWzHNYdK9rASrBukAqWyo5BemzceGK58FpWpsQjuP11ha6v5QJDYAaGCKNh9zqq9bRjREU",
  "key4": "536zL61ijg5gdCpxTyvj38woL5CDQjWTbq2NYhe1ZQwjQss4vUdvyjZPar9SvdD7KfUZTe64f7HqMoWq74cdcg9J",
  "key5": "5a914EaufM13vTe58U87jtFiawVL7tzpXJZqwX3dqphHGB2T16ugZXFf72ZLTpw9WixcA1xvDSb4wzfZzmV255Zd",
  "key6": "3YMgMHKci6Adjv38nHrngqAc25BuEx5p31ERG32zpwXj6fsWwkReHkzdBuPP6sTakVSPbTQSV7BpviNqfAfqTWRM",
  "key7": "2jkEYxZ4PSbzLyQitFjsN8KD9SFWbkSP5dzbmnKiCe5vHWzzBniwJYpDz64LvFVssNfwMFCKUYeDRUPWBTLgAtG1",
  "key8": "3xsToHJ332XUU1xjTU985cL3FoYMSjqmHwXaYLnc4pF1MypPGGS7JCWGGB3qRNo6kipdXtqFpru9f32jTDtocsPD",
  "key9": "4fg63fsFwUqmTQVVQ6jkJab425UNVBDPDChDHtt75igsJKhSpzGNocgn5Hnht7Dk76i14BBf44ERGG7kVnVUY1Jz",
  "key10": "4nR9YFmvi9U2rdfb9K3cgvjUdJmA3deptnvnymZ56yXvr96fu53v7KHCmSersVJakfNGnazrAAeAHBYfrWWiYowN",
  "key11": "5Xvg9xRaZJNU63MHHY6MiCLKAuhVKNtn7UgWUWGYcsju275fXeDfEAXtN7wKJ9RYwU2DW3c9XTufAbvJG9pj3pJx",
  "key12": "4ixPUBVytL8He6o5CotjcCSxxa8tRyrdP4bVvv12NVnLPziyZygG8evUmrVJQnA4bW3pVAdmQGMrQUEQUaJvcLJ2",
  "key13": "64P4AZGenLQY6yYSzSgBTYhJSbqXy3k5CwBMV4W4jpz1nBhexRC4AwU6PcrujPfi4JJMpzRXhFEvbb4aygAyuVw",
  "key14": "4nBYsjohagsBvjGTnZLwqFxQU2RAD5bnK1aVF7QVndir5bq1g2vhMDvn7XQn19kEDUSE1MSC7KU6N8MLz5rRE618",
  "key15": "yaVoWC9P4UWdbrQB9NGWKXe2xUjXNFUDks4Eg3i5zgTzng4nfnokgeNLUL5KM7hDuAw3P25zt54m7Hr5k5xxgWh",
  "key16": "uDSGcXiaU6MhTgRsSZXtRjtJnrYFBGrU9uBkqvJsnph4Du5eD1qQCUxd8rSWhVtE9N2wUSACeVAFVByC5HEC8jf",
  "key17": "4KowrXaZRHvABzBxtwBraGvV2mextB9BhejFyZ3agNwGVz15Bs7Xwq8H8C8uf2YfxvrNG3W3RdmsNSJodfRdBCcu",
  "key18": "4jcvoybETTbgtzuafYq2uaJcVC2xU3Reh51NW2sC3jVS7Fdoq5cybDsCzCHB8SSBkq6H7Vgab5FLyb4idKcwuYE5",
  "key19": "5ovdFqqTDF4BafoXcbX9YVdDFHK2vkAR79bi5ApLLaQnfuxyypFhDExauFjFTWd21Cj7MQaGpc7qvQffxD4m66D",
  "key20": "43cMYZ7PLH8oa7vLc5huFrfDYRnyWNCbgbeCBBzYiPjgWcerEY55myPuQjqtWHDu5HFrm4kH3uuD9hB4gRaZm3m1",
  "key21": "7hWcqvwmngbJAiHJsPNQ99ztgpX1DgxNx4Ye1Q6LJdxspkgCnGdiiN9tbg3xU1qy8tJ56MbZ2bTJUgkHtHzUKYq",
  "key22": "2zfkTfdTKTbgLstRM5zzW27thsPSCWui597bkcvhAcC5TfJJZpH6k8Tei4neSXyGtind3DWZ3XNUE1jeEbK45WTm",
  "key23": "KBz8DnB7cjK2xrx4DzhYetzrE31XtBo31nvGS6d7c7g2nUTymxvkLNEPdmVUw3uvQ4pKbaE86nNx43DpJFj8cvn",
  "key24": "2rZNh52gPGyHw3RTAjMyHjgBX8yZv2dLmiqM25DHxk7RH1VU16CTGVerxJMC75oYhzF1oX8xULwwJAsnP4ELaUNc",
  "key25": "gwYp2ppbNGRaY5g2BLqMiHym3LEKMUzyK8Vg7VSWjsdYj3K62ZsuonzZynGBRziEuJb3uhRCmL1YkhmWz5sZ4tC",
  "key26": "63ReW7zjtp3FPS9hVA1kaL3eqdxbdENk5oQ4mrrVp3YYZRWeDXQB6eC4E1BCp9HoCw48jjS13QhfR3jXAZh4bTzC",
  "key27": "xfq57c6yydeKSTUZhh7Wokboz7FbkkDJx5XUfHL56a6iYYwYWE38p29XPXccbrwpCZe2bD2JiLCu2zEMkgD3WL9",
  "key28": "2b2AMsKpYxRKsinjQu5U2QdnxW7pK8BcpxXk5XNwYc7bvM733i1bnVjhUizA3zPeY6vDi22T5jS16tkBXUyXuYZf",
  "key29": "ZzkEPcnLhaKqYJLzVJ4EX2JGKrWjjVFN2LYCX5JR2BrTX1eyuu7niJbq6raLyacidq1cWMTHgpGQF53GMQSjkih",
  "key30": "5XEJW57tpzdaiE3AVTxzoX8QQAmKKs3hC2K2zyGUgg4frdHvKGWTwceKfCfn7bpufXkio5o4ixi6q6kmK4qmZDWY",
  "key31": "DHeeZVB182f5b987S5i4fp52TdPhBA1XRfYAMNFUCSkHsf2ZoT3Q2SdcdXSYSeHFciFn2Ydo9hFB1GuGBAihEJ3",
  "key32": "3XdQz5ehCz8GeUi514Gg92C2WSkzwSxh1NYbNK8wBJGejRUAdjUTmX6zNd5E9izTRwZV9WQtAHP8FpLPgHovLMMe",
  "key33": "wh64kE21w1gjtSEonoinia4kGPJyKtA3xUmDDfyYLRaeiiaLcbHwnqNcH6ppbYYwFnq5rHPGjxsuwqhYaRywie3",
  "key34": "461amuFQvK24LkB8hzpmW5MCPTKNmo6Hv2MNSfH5hc9W2oEonVjZtvjXs9iLyaLg2DcGGg196xhdeW9BoPv2PL35",
  "key35": "bzmr7XMKuEBz9WW9qn3AE1LzqrDF8CYL3DUyR2uShLrsG6fwWyDc3ZT5kgSpeXgyLqiReo37J7yHdii4waVsktF",
  "key36": "RYUZBnWfZd6zNDyP2Xu1Arq16ViXDVqn7Kx3yiK27QhwMNkFZsZ2WdX83PpSALAi8o147fMrV6gmzRG2nLNTuwY",
  "key37": "R41Rr5J6UadzCTWmRZZ2fJXX49vYDJXsTYZfzC8Sg7LDEDwLLphfPHRuz5LwUKovHLaRpRQ7aukZSik97fuvriT",
  "key38": "4JkTJv5GjjhryxWZXz1sSpEYGfwMfAo6RKrhvjTe8JsfTkB6FYNnt8ryfds4EF7kbdpe4gskWFWYQxv8pXoDCZMn",
  "key39": "54npHoW1DJr5Qi11NsHNk8pFJNSuQJV3qP45bSTUttLLoFgCgxg3dBd6mtHZtHXje2dUm65xVx5ZjzENfrJwTZFG",
  "key40": "Rt7awbKxw17DcR62XCQHUYSAw6fJZvpXczZKtY5VVquiC7oQoNeGMwXYY89vkrkrzPpjj4TP9mVh882E1CZtmVh",
  "key41": "whM3tPDJpqFuoHZdHyT3wzT2iUGAPskTJdwTqFT6EsPN3cRZKUNvmU8QbgA3EmmTpWGzBHR37SuCWLPiRAKoUnM",
  "key42": "3ya9pXDvGocGq4eYGDhKzyXpZsPhiNLHXBXKj4CjXSyi7KwVPAwaoEVttKxQJqmBeZCVKGmXLiz66VAqVu9GwCL5",
  "key43": "5QA2utXBKMZVakiZAktud8PvMgn1n5mHqyF9dTEvar6sFMCfSfKt6fGMJetZHGSC52TXsQsDDLDgJ412xWRKtj67",
  "key44": "2ebgFpdpJJeLUvoScs4t9wC5BBoDoMKLRxwX6JyARsAD5398xZomA17M8SCfHzVbvJNoYNyJPSht21QbgNFHqXmZ",
  "key45": "5u58qPiN3vozdBeNN1eYquyrc1Pdr1tVPHP7cQL8phfzqoMW3Em2qAGnhzSh6GYYJzxWvGGegVuwWAeNEbGzknVT",
  "key46": "5gCsYtyXcWpr5iPEwWLWM2fxthWHfJTsyGU54XYMxTEWSEp5E6mhMGKJSZsM9T2vf5jx43hyaJaRM8bkfxdXR46q",
  "key47": "WjAAn3r3HCYLYcVRRhv5w7M9NGYraJuo7hdACTtbELY277azQHuy5Ntj69ubD2fD6wNAAniea6WEjgWxsYuRuAM",
  "key48": "2Hoeeb1TPmytWt58SkBeP8iB1hCaDRzJ8LZEV99RgJNp8VPnoKXw3nNJHLYxCF5gLKvnPP3VFp7srWkj54u6TSHN",
  "key49": "4Sfa3cufG86hJYBiQEUgc2b8RJBnSpVfXXmyhk4cHSNpbKwRJpMAJN2MTgY8jNgTxkJopecYUgXD1SGCxYuTMcLu"
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
