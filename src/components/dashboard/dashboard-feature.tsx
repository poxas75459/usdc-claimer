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
    "2JCg9t4hPUJh39udw5UifZJ6sF3AacVFQ2uq8AoEwB8C5u1ZJ1B8CBHB1kmtbaPih3Q5YodU4oTtxgTv8P7YG6X5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dooFS8YJe62aB129JB2rjMYP19J9Qjt2WMPsqMBafdyxMDQkE1iV8v6WQAwhRv6xyZrvPFCxqBC5hg2drbkr8Sc",
  "key1": "38u9mQb4nr2V9XddziCcdKmFGY5egamF6gv6TtNmDeD4vbh6Q5xEgcb7wRKYsDPDQDbDbku9KiYkzxpNT6HHnyMG",
  "key2": "483RmFLjLWqbGD9jLSRn6Kv55Tjybdgc4sMsbne2Kn4agrTGWVB1JeP3LxxCyRv7inFpAfjzG6oFNPU8wnnHkPGJ",
  "key3": "Tc6tGXBmso6eM82VwPfGGYHPomGNAaaUdJoHQid6FGoxToKBFpW6A3eSVSwrmhs6QRPHLZ5GAYfZDrzwxi1XV5h",
  "key4": "3nAuevRZxda6E2kFyfTqQKuZyxDu3h8qvoggMyNf4qwneunn44BvQHbKta51UgLYoc6E8LGFJusnsrtAj8zrnFxu",
  "key5": "ATnuxdtjTxMt937MWJxQNuyxyXU8qw2sBuYg7i2nx91to2ZReAsLETeSEececSeQatopieeHCGLMkt4oGLzX3Wj",
  "key6": "4jXsTvC9t2h7gdGLqViE2S83YgzwXLocqonY47fEaGJvDyYzVzcAAGoEUvUovHRbfWNp7EGDLwft86TfNQWA5cVd",
  "key7": "V65JncN8pnAJ4hPhuGXGUJzosb3te6PHfxKNDHsc3bFqDnKKv4Ffbjkpe7nrp111J7SwNFvHGaLD4jAjeTRy3N7",
  "key8": "X3s2sSsj8oHdMGJXEDZqc455g46t6Qy4NWYJAqQ4vYxv2aBTrWRLuX9rRUqqaJk19P88skC7FzeTCigsVo3Sv1e",
  "key9": "3XTf5KKq5RSswANktRzYnc9Y8Em1e6ZJayTcRy9N66r7SXpraL4aBznjAWhwKDWbaf5vf5H1YikHemk19o652CXL",
  "key10": "5rYdW24Jm7L7BRT2uSR16ZnH9VSPEWdubAfoVYptfU6371gtTGa3x8nzvUheDvrfS1LGGEBdxkk6hMZUPfhBUPZP",
  "key11": "5eH2XA4JkjVtNKDUj3e9BE4ZDnshifsPXfzoFQN5ehzdsvXr97LfyaaeqRcneH3QQRGdcZMzRaRJGiqbncxoLyHJ",
  "key12": "3kCLCi2iE5xnx8RXfVqLGrpUfjyiQgZdd1xpB7VeVxPxyZTtxYXpGKVF53kc5idzPsgDZo3aMhY7Pt2bi73swtVR",
  "key13": "2DakPHmbwCtCeX2LYQE3gkxC5srWQ3FKvTX8PuDofMeJvUX9zJoh6aQCoDFqwAjMxDVosFdC4vPcp22Ww9aPUWN",
  "key14": "5DcVxLcmp2SiGv7NQfQXYzBM7Ss4HAYtgLBXbBmhBNUTmMsZmqGHJo1UTrBuGAL5sixXLaVBodmYa5Q6YmtgRRsa",
  "key15": "2dmun33zsQECd3YGjrgJewudrLRyw8N4L5vh3mnp7p7gaAD4o6CF2UmUzmFdqjSf7LHo3aui7eYukgSnq57R4pa6",
  "key16": "rDFBBPfsvNucBdnQKrJmzwxJHoBFMuSN1L2Uo73Q2Rdc9Z3yzy6TyqygbRer8MKEgaPfnAD1f1EpGBV2N1qDGet",
  "key17": "54TEzi8QbEaNjQfKZpXsTd1s7L43wDC4wsgV5zsdia6z2RrjMzSK32izc9C1XmU9D2748DVcm58xY47oNUSUsJQp",
  "key18": "44qXCtYVCjPdqyq6BQ1F5cSDeKZ2ao7ija1MziAVnn57Us5XFQn4pB3Mv5TDY3CFbYvtRSFmGTaSam1ABuGTGVsY",
  "key19": "2DdY2YAQRSbzZoeFBiz7QTyRLjJhaFR8vnmCzv53RXLFbwK5i76eSkn89DzP2BLEQZduf6ySvLKcUvELuf6Y5vYU",
  "key20": "2JZGqr1iMKJETitBrwEjGmCCkfBUr9pz5dB2sUrWmhLhKNZtKcbhrnNC8EBBaGBTVFCHhKheBT1VKUaYexGA7GVD",
  "key21": "2RRGN1NLAMtY7V2QQxh7MtFJQPRTTwnpw35gMPHpVf2wGm7HqoP3FXskLj9dWgpVMUgwpMiTpkF4JJMFkDVaiWsC",
  "key22": "54qg4LKjXPGBwjzvbXnuM5LFb2WTJB7ZktXmeH931hU5JHq6b8RvVPhLnfoumcGABKiJBBizxTkhZrvZj4KCPevq",
  "key23": "tYPWJeKyCYXfStfAQSt7GA6nSjoJSebCGpdD7ey14k2zBYc5cKSVwEye9b5rFuEiMMkLPmiAYfpX8eejWZgdKLh",
  "key24": "2kueJ3gfRPry9gRRm4ejVLuk39s3m7hzznEbKLQjPGQZyM8yJeK2ZTB23x3fCqoNJGmozoTN1F9GuvzGb4xRc4vA"
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
