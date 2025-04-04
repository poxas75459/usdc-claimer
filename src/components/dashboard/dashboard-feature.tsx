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
    "PLsR7CWywuuQJ7ioawcvwzMC4kv9sStUoJFzh3SHx5frVcxfkEXXJqbcaHT2bAKKUV6cvcpDCw8bKDMfgFSoQzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36aKCsZqGUmQhNxEG1mCBv9gweB5GRCKca4UqdgTPSzXDneqnXhLvcU8G4sgem6kEH1y1LrmNfk6KVhxghi8WuGJ",
  "key1": "2aTc9R1rkT6ZG6gMb3PZ3MG8hJdJhxa6P5vvkGEaL1jt8Ci6hedxSxn3RExe97GJZot68UcB3BXC6z2LvVbkcqwV",
  "key2": "2jpwirMc8YWKnsLnC79S9q5hyhfGTJMvvgDSGD8roGjesPSAfRLyLFFJmiZj6uYgqgzibZRZgRHbzjemQY3YCQL4",
  "key3": "58oyQQEnqaKuCYYixhndgbTkDGg7CxNU1e7PMdcvBKfFpzwmfjc6QRNGnHtwxYsjkKsk16QdqxNeKsaN8McApC4s",
  "key4": "39pacNxGJ9mbRWpVivdU1rnXzJi13sQrGhPCPgt2YCtTXJmwRfEYZTUXK7wKeTGcZxPPixf5oUgGjpdMrgXGU2mq",
  "key5": "63Aw5m5xU7oddew99j8dhG4LNRKSpxLFCgVibThDpmXqrGeKzb768nkfhqMnAfx3p6jboqYtrC7QEV9bf63XvUyg",
  "key6": "2k5PdJXK2xctiwkD4dFSMdeQtaBkoF1FZD1c4WdeY4edJy2PcS9ciBNgkVTN4jARg3hUTnuHtSA43WBmjR7rHvhu",
  "key7": "5AoVmcJTJNHFgj1Hb6c6A2SBJ2uvYSbnNPyeW9qbAvUgpZMDpFNU8Q2xUjtmmqQDtV111Hnhk4Aews9esyGuxm5w",
  "key8": "4cKhFQ6QvqNr1hrrTmW5tMrbFUPWuLFnLKaAxeDBE6uLsH6aR6FtMVxDwoY6sSHCJTT3eAcoLwNtL5WAWQUYFXqd",
  "key9": "q1c4nRFYC38PRfubojmZQTCybv1E8TSWbLcretLuTYBXwQgjDMA11BdPo67bExus5JsZFDmYv8VnfB8x2ZwRjjw",
  "key10": "5tZ47YwLkzoVzqQDF6hm7xLFD96dY1RsTX7KUaeZqkpN3ksmwURJ8pBibdE8cXLagemQvg6apcB85yLotYcUSQ8v",
  "key11": "FoFCLsCqkT5SYcqtwNiNss1XRgW8ybC8F76WHEsVvSmfdgGX1CjNub37sRpnoF236wm8SCKyq8nxuGiTnEAupwP",
  "key12": "4KhjC4mPPw8XfxQEePMsJ9m4oWtyLJAN8ecjwvLQV8PfrXTw4PXn1mUWDQ3DWLdNQSfZoooT6cCb2px8t1vmdicM",
  "key13": "5anpa6GgXjZD6xL91Q6JyXLtN7ach5bo9ZYCSDTzUcqPYnaDgQ7jZex9K7UviE8LCfDMvCC7cop3Qap4ZCJLpKFT",
  "key14": "4CaNGs5M4tC1jMtmKMmZNVZxMZng15CD9Zxyfr6tNhXK5a1zbQMXP2SugjTRE8h4psYsbNDZ17996DwN76qMju4w",
  "key15": "2EMAyMFDkRkGMsEBfb6rSp7j3dCfoHNAZZ88Tj9ny6hVPJoumuev8gLeUX7A1gpF7zNBmebzugx47DKUQVBFj5bz",
  "key16": "39Qh6hAG8JTV775PstH7a5ALyawZUFbw9LwrXfzrgtiFVi2gxw5s2n36jtxwcjBx7engu7peUrYx5xa2y3fHWm4",
  "key17": "34ndK4c5XkxyZczdAavmBsZ4Sa7tfse9EeDBBzjymimhKGsHnVxR3PzahwyvzW4te2zaTHZZZ3D5dSDWgW5tvTD6",
  "key18": "3VgrNH25teP8F5EEJn5g9hMXnBd2QZyt7fzQTFWPpzFQifKwwtWWYpKPxiVhT6rskk6TekUb2wV97HFMvKgnxDvX",
  "key19": "3YkXXxCCy4qvuhjtfCMVHLbdFCcuZrj5dYNHMmLWS2fMbgH7bQce3LcVUjFuRGsx8xN2BEFQNYGXqX2DbTaTP8ht",
  "key20": "2h2unqCNsnoF7uvSD4TtbnvXi3TBhLTqqXxGdaB4xwheXHYC8roCw3YciyYhQFvu8ZFLGxxNGENxzmcAVh5ouyGf",
  "key21": "4CHLtB6672eUX7HohRxebiLVsNeudq3dqq1tdoajjoa4VpFzaXSrceCEwuXSEc27eeVaSK7etZrBYKRy8tNZ8jCk",
  "key22": "72Sp3TWPqAp5X18BVqD8MZFUTTVH2rEpcfY8XGKTff2KwTJYZ14GX9Z6DF7Kd4qJUYu3fB1928QLPhVLDe6qLi8",
  "key23": "4KYNpERMKkGBvXFofQWgrRJdk8QEwetrUKN3RmGtUKPA1aV5BvFeQHbcUnQS1SnbYuMXpUeowCwVXKVcimxk75w6",
  "key24": "3d6aS3HG38ytT97FrABRiJgpxEYbHrGhnXgHUz1GNHgXDouuZfHGibjPH5HtKSk23y2De4eDS7iTc2snRdBtUq35",
  "key25": "3faMqnCAyczcEcx1jm8oFZxE9wXBNDfXMqN1LicSZx9ZKbPZN41fq8j1b3jfm84CKFuBFUjBJhAgUWhZtByBywga",
  "key26": "2JBLpqWCMCGPAetTfyrtbANpQ5YA4r7LsFZvDTo9idyYmjaATHNAXc8F8jQWaC6HortbTkJYrYuzoUsoS19uG1sn",
  "key27": "65qywXKnDyDjC2Ujow2vjg5WeTVL7dTJsDfWu5fAskpXwnHMxRVDbKboAN5UNZcUffhr2rAdwvtVoQZfdzNy8zYj",
  "key28": "5piUDBhp89kBbpjAACDSuWyBi1TKFzoqoesd9cUViSWENkWoAxT18KeqSYNfHCXx2A2mn3ivkReEns3wJQLARc5s",
  "key29": "2vPy3Cq6CL4PNiERigPfextPGd5bhugANHyCVpDFW4oAxbLoAQQSMbnyCm6NMfh7HLJ1bwAKLjLQNGpMP1Zy8yAg",
  "key30": "51hPkHADL6f1UJzC5riQ7WXMQQc4iVKyLDxzttxeGL32pi6yarrVecXbdB22YN6v4nZEFYh1FtFPYBSjFjyvnaRd",
  "key31": "VRryzN8u1ojuddwitz9FLF9HHHCo4CMfXLE9XwGj937HZPBppbB7YU5bQ15roBUJtSF4BUDNrKuVQjvVvAnQMNa",
  "key32": "5yeTcNyuWMKF8DBWHnk7GYWLDztTxHUVheP6ykrHqi2zfneVgYS5P4MLAhf4Hxh5uTdJbwMWFZUrq6J6Fmb6CWCh",
  "key33": "62R41Z6d64868gPaCuqAbFLHLDE7E3ZJGHPomdGd2NsgLZdeu6TSo6rq7B64UJPJuvrV4NNiHTqnEUDr3G4qkhkV",
  "key34": "2keK1RkeUYs6S5V9Mi9GbBDqqoTYNGz3mv4WBRS92c3REuMfn6d5UedMJVnYqQq1QYvgUvds1hZjLyEBthsC545b",
  "key35": "2GCwQs2cwbL4KzCP7GDAvr5NCDcn47xhJfiGjcMhxtMYCVRVNyXgCkTJBEx48QYcjdWfMr2rR3E4NkA1NLBAqZi5",
  "key36": "65wKDSdjBNuxrBna6B98Mw5x1xKHb5FLtjxzY7AVBoto8SaRXVzeJMotAsHDkcrmtxBwvQfVpkv2k8zdbB8995pd",
  "key37": "47nPjGWKu4VBmuuFgwDx3JprYSLE4KJSPEx133Ck5HDZxv3osQ6UqAfK3yFFFgygfqfkXkUcaeh8uqxnUKBeKuVg",
  "key38": "2PGooTvyrzjjQgfweVQaqKW1LgCwtk9fidxVXaj7ZG7aCUBGALEfbrcu8LbB2gYEZR9TmKtCwDeTFJJJ12u7KJ9g",
  "key39": "4sGxuUQEwHsySuRM1PQ3TbJGxBzxuSmy7kvid143AB4KjyE8pquxCeu9wNecDKiDZGmL7PvdRxcqPKGq3ju6nWgR",
  "key40": "4bxWrfHHK187u1wM41DEjVFsZyoidVfk4jaQu6j1uq432WBmY41gE92nqQZuTSEYGrvAyajKLTwNnsp7Wk2EmXyz"
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
