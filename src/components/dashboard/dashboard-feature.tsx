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
    "os1jD7PhwLNqQZA7yfCarJpu7ZV2uF8oQZxwsBuixvuUkTUWX8q1gubvu98hGRNGPK2jUSFS9o8M18TqpjorNpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oFGjxTva5fcydrWkFxw7UUSf9ZxJ1g62zBZ2Kee6ZR2ZeSdvTFG3upEhdcLwCLGtiWYjCnhaR3KKfp68WRBAyBB",
  "key1": "2x1xb4yhwiKBfPtmnunuhadpNAwsesX22zz9WyxxZwU4VNP26mcAbbDZ4sPUHBjqBGJwQndAFdHyrTxyWgm3xCNs",
  "key2": "4c6VWYmjnXn2DAta6kRxy9xtpSba14A8dN9qhH1mbSWvevLnykd17Ud9GDxedwNrRxNJwYP2t1ufzXox8MPCS6Wm",
  "key3": "348JTReboTQgW796eyRyZ4dXjigWmFzB6kgwPEnaY4nVeUmXJCK7pw3JLxCzKrbALHqr7HHPC2QPzqTgyLP3Hxx2",
  "key4": "4JLZSVkw46XBkeCDNo5k3d1xdd99J9YfkpK1HPQ2m4vaJKau6RJX8MwbUFt5t34qCLr4BRPS4umt8ze61UwPu8nB",
  "key5": "C1r7bfBjeLAAttJ2bYojJH75QizKC579Fj2PkzfvmaYX5nCtddquaBuBcLtpiLxZ31U82v2yod5WfNn35ZeuXZz",
  "key6": "661dC6td3KqgWvN57rWh1oGWaGsA8be7QwQ9HjyP3FzBTdjwLQyhtfffaMur8xjhm9ZcQuWjFCPkWxys3UdWCebu",
  "key7": "3qDyk341DsCz5yvUetdZcHTbKgSkV939vnNMfk3WzGHqqXSao1KoZKjrR2jCfVWLJ71CFB6ztcG3tpXzi5ZUSjJ",
  "key8": "PcFvtC5t9MmekM2Xt4w1pY7cx43H5Ja7rnNBoVdpVVeLkSA9bbgJW7sPXkvtfhfVx5gcwPsAg9NsXDxxzBntHtw",
  "key9": "3rHeiHtXp4uWiVRLoiggEWsTDWTrhBgw7szSe2umJ3M4fcTRqN7EYcwGwhjgv8kE4JyJ6Jf8ib4Dpy94XxzKEmKy",
  "key10": "2KMdByD523QTcivz1VKfmUL7QXgCE2pNRtxz1UdbeAfbfbjthCv6CsuWQnY7H4MiSGLtGyn7vLbV1KgCJFMQcHzB",
  "key11": "3fvVLnxi9WBkGZbdLDQkFpbCnkLyubFaxi7v58citMwsvyha9AGijDcSHR5LABJYFmB2Cgg2L3YyWGgDdRW7yeKt",
  "key12": "eLQiGwU8oZXVuefGK51FfRpUdD8X42DvFhezjRYoYYFWUoSJ9sD87WvDjgyXX1gPTJQpBLLyVfG7XknTV88erWW",
  "key13": "C8TVTmdEQsoiC2YgY49tEomqRurB4xiLQY7KwPnfredd8dt69rNrvWEAxFfThiCEaNL1C3SigEPSWV7VuhA9ViJ",
  "key14": "47MqAjeW41ke8qgeyJxQYseHdnV1aMWEhiq3BmAtm7CSY7JNCMWY2oCi6kvdcsiMog8HRcqDZG4C9FLJuWcDnGqd",
  "key15": "3A382ddY49VdnHyyuDuQUDbUaL2eEQ7j8z8MSq21mLzL7crryHook1UE7d9Zg9ZDZVJGdZSonkjY1r3uZiXCQfD9",
  "key16": "4NK1uHfBaAQ1uV9DBxdrBBUmup3PEQ2NyVQ5Wp135XqpWVhstFSKTiFivifGfmdMUJrYNGnY3esdLjzqHePVWRUu",
  "key17": "4QkypbpT3cRAgL2sMcM35VLX4QLxxLVRLizsB3H2C31gbJR7JVa6yRiCK9rXZofXBdd1JjmgnrXBPwEk5XU5wGao",
  "key18": "5tsTznqEeGmHyZCCs4n5KrNTyJchseuXdgnnihod9hj3tSyLMa1cSyPSRVEmCg2BdGHmr7TPAPGSFwcDZwamCs1b",
  "key19": "4djD3tSwgSeiaVX3ubrCvQ9nQksgxjg5MUfs2cw7cotB8146nyudzBPDduyutbY39eFVA2T1ksGkLUo6QYEv22uJ",
  "key20": "27KU2tztrC84ZeHWUB7yz2reQNSgmsUcwhU22izE8agSP7wHoWXLo6ccHcAMvYGDemJdz2vFhzVqWbpsMwpkkaPR",
  "key21": "3oPLHQ6DomBdMcXcq51jv1V7rttgzC1SWKMyaxknJBKL6qcLUAeVQHmKTR8dL1eMRiq2dcLNr1KWzmqTrJg5E18y",
  "key22": "3tcVUvwAhivMCrHmitaEuFeRwW8D5GgmGqvx1PNfY8JTCsirS3RZ4ffS9baYe7bdsusUiJXswMypbV9MV352yhn",
  "key23": "4fovL4NxgHmh9JiPDss2T5N8dvPCJwa74wrtp4Pj7kcpgz9LZj4sN6935YUXRs7FoC18W4nBbpHPz83waXTZ5vXN",
  "key24": "4EPoNd7TZww8kzpdfDNMXF2hdr6WvMkmLvFzZdcnwqnGtyKxDmZFgC9nCdJMAFCPkEnb1F9wfLPBeScmXKXhuw3n",
  "key25": "5vMDJd5KXmvCSmHocBvagKoRtRecvq2KSLjqwe2tgQ9rEGkUgbBYiSVwENC2QD6CqZAN5nmFGy6JzWyLv9mdQFtQ",
  "key26": "J41AVvVJTWJ87fwQhTJLmtjVptKtvqMHFfJM2o1jbVKa3QsMd7qZMc9rrYpYP7T6JtpD7o8W9fWVtmeQEC8y33V",
  "key27": "44S9ndW73TeuTCbzojXUDV9LsNq3yxASEBgrWJ23mm6VY63LShtxdUJ1jsHTWjitzTD17jay2QAGmGakjpKmfdPv",
  "key28": "3J2r7YeQ111tVR3iHkY5JDsgCJy3ByEqD1UpC9EXor7rtPZcE81x5YWAtvb2kFQZY2aKXRYcbvcifxPfgn5KsUJr",
  "key29": "3gXUSw52nELCLFkzMjYpBiuUy97rHpjhQVsbnyNpxRa1FXG63USVMRcTTmha3naKV2BPSdd4Zvt85G4uYaWFdGTy",
  "key30": "5n9SusvJwYnbeA3dTEdVeqPZdvgf77epASaTtFTHqMF3DiGAsfc2LPh44Fo2URAc3pjcF1aAFkBRUD6JFaYYsozH"
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
