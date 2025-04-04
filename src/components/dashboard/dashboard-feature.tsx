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
    "3wNJNtQnv6Y5mw15RFwHjgL8nG91WL1GDoSedfFCmJxCSrqdSygKisJHWAxU2iLtLLCtFJa5wg7SCEXKwUxvqw3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QbUZfv9W5jF8A3Hsh1Dp2Lu7cHFoaKrgfHri1pKVg8HSEMGJAUZkyFVAjFg9ki3jFhueToEP2kTv9RNbBJcE4yC",
  "key1": "2CXEbZkGRF7EZEJCqucz9CRYGG3SJEo4N5Zvdro1jVBnSLmnqLpVhjggzqef3DsQttoNPNGKi2bFBGipHVtCixJ4",
  "key2": "2uNNX9paTDT7tmBUihPoy3Xsfm1iQSs8z2Z8TGfA57cC7rpeHXEDjCY97LHhBuvCZGVk3b94uu1QTAwfBP26amQs",
  "key3": "63rmQbtKmF57sr1droThXuUyS8miUfW7gsqwCKNcHBPRedHh6Vtj86ko8YhnwBjToqA7k7eR6r2ueD34GuiUUM1f",
  "key4": "32mgCCLf5qjUCZbg1cgqTgbs6h2DwutSFK8rvDWxwRCCwP1mL3XuUHsXbXuHynVvxsjPAf73k6paaPNjYh3J5hfy",
  "key5": "4441s7X2mQBJnuh8yx3uvs9pYvjgj7V2ocU8kd3CqH9vkY5YdGqP9ibZPtNPGU7gBdGQdD5vVoiAvcsxFBCMAt5f",
  "key6": "2F3VAG4xYatT1BMjXAY3TzcsuBzEr4qqW2cMCHevnFkcfLNRo6iJKRa6nGZYayRNvxSBTjD2r56QC8s1HmRTGkzF",
  "key7": "5egPqRZDriiN8dqoRT3BQviAxDBG6ob8KocDjCSqhGHDAWuru6rEr2crFbPJuDUcxtAhhhjRBQNQYf5ik3odUoq7",
  "key8": "4MkNw6CdEELZ5Uy1Pn5FoiKcmFaHvjrCLXyMokXupyrtBQ9qDH5P46oC6MKWRDFhP9QV8D1Wc98XdmdYJ6NY2a2n",
  "key9": "35146extVuNpv4MRhpdrRfHRHdFBbjMpcVPB9dR6a3bBG7CtGjJmCdzybGgAwMCN5oF6U8eVnJWgTcu3haPVwDi3",
  "key10": "2S3u9BUy9YYxFt3ptckfh8Yi9qt8rtfkDUNU2D5TR6cgtnUev98x1B4qrvyLS1LysB6cJjoxB2WJYWTkSHEc2mt1",
  "key11": "3xdTnAGzgnBQ7GR54nnqwC4fAb86b4SLNzzbwnTDrSVBnwpSiCYZxtffJ6c8hkGVoSHb7t49vfZ2RAcD2xnAkG3n",
  "key12": "48W3SPUYkadWM1NNi5sheUXjBMDmWqUDCGhnD1PfWj2nGWm1PubkWBayhPZh5afXB2DqXa721pxRoQBDo5fmgGnb",
  "key13": "3xMPZfQsWRovga8QMqWteFxxkC23LYqhvREAsEWGHv711kzk2vpAUNBuixfKQi83tsyv5XK8EYvwe7PwcvKNnvar",
  "key14": "31muhDocyN9w3dVwehvA1jg9ZmN7dcrNypbbx9CBdtmLjdbni2dycYkhWNkadHw5fuXi74rtwXgmPzhV6GEUEir7",
  "key15": "2LpTkYroQdUgaadSkYJuuWXDbUxxTRC5C5ARwVxKz2phBjUqnKxgokCasN214vRfPNpQjoefYLhnJRo672wCiz8J",
  "key16": "PUZFoTQki8txkU3NMQW47Q53tkhmTBSHqw1gDLus5kA6nBgAyKX97xE33yrWfrPe9PKbVhZv6dSZsL1Qax4PSfH",
  "key17": "3RGWcyC88nbNX6hUeZf3SsJBA6kfBzCyQVTpcocyYjmKqRWgeYNv5SQQcpcBGddAobrhtWJSESpcGewjja2reBzZ",
  "key18": "5hvCgu41rBSoLswtGSwifZ92y5DxLyhFLAZQVcmhwxtoP5pYedq9Z9Jq388PAGE9oEZYddyAyUs3TssbSXgZiD3d",
  "key19": "4QxUQ3YTCDkRj3u8bwT2y4VWTH4J2nZtMopLSat2cvqpL2sWRVay1rzWicNcs9fpdhgkhWdW56ym3UEFXwpetLsJ",
  "key20": "4Vj3tSjcfBfxN6pyo57TC8nvA7kkkHyDdd5RkdF9gEAoqKxJSHqrdhJvPB1EFVnoJjX8phmqACf1Apo4Qyn2y4hV",
  "key21": "4MPCcFz7MFBf73e1pUMMiBagn1rDNthV8gzLrrLT2JNwB58ULa3LCPKY16rV4RnXYmaSe87aMApXAQsz4qorXQcy",
  "key22": "4eB6uC5yzw15ZNagb5tfhvdi1R5bfDXXfSU2H97jFnTSBsZS9r4GFDm8EWhuzXQvgre6LuVqJ3jJ7onmAg3M8hCm",
  "key23": "jcy5hJRQniLmW8fx7NVEnBMwJzCKNxHZkYRJ8KjpsKttB7BPL1hyp8sFb64ySdHLdL9J4EEtfqE62MHb5Uns2Wy",
  "key24": "LpyJQSNppkDf6fvm26iVteMkRW88HzDgcwuu123SXa6ThHX2RcXPRcUN2rGMKa37Xf834CMDmeZA2t2LAT6nGc1",
  "key25": "5KktzW8s78HSLJLf6vBP7pusQvSz8oTAusPsi3WngK9cwfMQ6GsmUw5z1WRZw7EWNKR1LwV7jtSHB1FL9MKjcsBa",
  "key26": "4yjjpTdtWg9E24Qe9VBNUXzBqAmLKFckRGRq3NJgvSzdEiyMbpMMkSDZTs2DGLvf79HQYoN5EAoorx8xDuWppVyY",
  "key27": "LrszrSoDC5SiK9uZkUwoX7WAEh8VFtf1qmURCStZALQ2otddSgHpEjehJCE8GYefBMThYhixrqnU9G3GbqCVcPf",
  "key28": "5g2ZFNMDLzcUwemHqRHW3bjBRaKynRFcgGXnMbfDpvDTAmAfRWjW3hkBXgK9u9sqK5bwCuchJkRV9rXgKW22Xof4",
  "key29": "ZUu5Txa65XPcvXfdC5dfBzzZorrFkFdq1j2DmxEyJZK7CQXefw4rNGDYLa12mpGtyvSGbAKu2MRu1AdMtaRkdYq",
  "key30": "2PZzidkpQbpreNeQnus7wdzqGroV7owkE4MVVNWmxCF15nUFw2YBAPYvBxuohVo9dV6tLeSZ8jGtnWj45ETDYC6N",
  "key31": "2ektasxgC9nVmMywBfpYM8E8XPXWc6DDxr1Qi3dgdqbCduhj85gDFrbqXBbKfHYwuoFh3Cn42uZN6ZpVGnrZNHny",
  "key32": "kvyTwZaXiaiaKMbKDqR2XRygLzWt4rqTPc9idakgReK49zNd3FQLrqHugzgicD5pZi6rFFdmzr4SvjFvUvpLvs8",
  "key33": "4ZJK4s8VokwRWYtcYx4BbAqs9osqC2iS4pptqJaggPLjBfqygXmRVAo7y6sTmB3mMu1wjXaAgKxJaB1iDdkRo5r",
  "key34": "52yPLiJCu3U8eJTv8FoaTMMuC6bUz6akRctFVwTP5HCJy7hiupaxDYRurLhFPsr4FX5rzYRnBbLJ2vRRMhpFqM9e",
  "key35": "2F1hJbXysxCMAJ9Wc7jeuypi9crPkUarfHeLpX4TLHEYJ6dgsJuhe39TfmEjgQ7HVjAhBdueTifxwqKUrgpULBm1",
  "key36": "4J1WYAaqjNPGSHAKc7QMyGBHHznFdk2KAVFSQHcJwidF4sexThQF1eSF1ExiJN5pVx5UAuqGqESqgMTtsv4HicME",
  "key37": "4JYZ7mSJ4AMy6pPK3yWtdRwgV5wHPNc4NBDY6WM6y82EUMM6xYhcGZBPxdCXZpLoYFYwNfFVgqbU8qz2DrecBGFA",
  "key38": "2cLrvoko5p9LKPPsm3CNuL7PtkJTVrw6uSanUCZpcmUEMLHVGGDPLWfYHJcaPqR2aAD4qGp7yroqa2xvvS17URu1",
  "key39": "5PcvGaae7qQne6bQusc35e7zpvKwhefUsKn8uypgBAzFHANdF6965LJZcMJNsV5GNXnMpHA3p26WmWsFpRqfshX9",
  "key40": "3hPYxpYo4SUyyYWdgytFuMcBsZTt42YkmgjKwnWT1kGXhNagGFpZAcme4Qhcb5tYjuP3F4TP7A87iKpjkcZu1b2b",
  "key41": "5EdAasWDkBCStPsBwmKQfx3MaxyXpBBfwr4EjfXgJQ3yCRbSNPKoCSPFpAzzCVaX2QwCnXYhZkC1qFK1iav3Rkth",
  "key42": "5JsLTuPkxiuyatU8c8QnkmktNoBokLDSRMfG265ambzWz3pB1Ss1eWV8GJ3k2T483mpiuQBVWLKGUtDAF9P2rVn4",
  "key43": "4Bd13L6yLPrXSm85GRUddjH9KsVGPkEzz3P81gYinoNW2g8qBpkGvQrAJpqHbyx1WWKJMhvivsPJQaWuGCQGQo6P",
  "key44": "3iEqJxKnhnCxJBE9k4rjDbDbP4NR9cY7WFLRkn5qEkrfB84Y5bQaGq8oJ7v7GuUDkTqKMtj2qbHTYcvdgN8Q8SMZ",
  "key45": "TFvTxsLYUaAw1Ec7kRuwSzPQTa3yUKGaazaWBGRag3mUQC799WiZigBmhyh1k5upp9pmSZx52YYg7TYLa9GNrbg",
  "key46": "35q3k2LmKhEFJrJT9L8ciDhcE1TmgTeJdPGaGdopvdERfXpYEkjHFAFe5rRg6vNyadnWYPreVhRWMLpB3CpF7Vds"
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
