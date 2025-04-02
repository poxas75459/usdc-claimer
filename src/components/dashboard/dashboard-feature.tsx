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
    "GtRVSko6aBLxAtNiMvBpdyqezSrzvg5MRwXcrt7RzVTBteJSCTVAd3Uh694p9x188yb4jvWX1gPGgWXj8TgrEsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TCoMBFsLGPR14oVsPF9jVtenyG8gQFX8qVHnRg4sY6uTgGGDuv7yiUGRvY8K5FgdGLpC9wUJNxnvCpfHo7sJdgB",
  "key1": "28baJr21Nf5pZRVpZZeuAbqork39W65CgsCXWzvi6chodQ4py8ePsM1kh9vGBLUcB62kLj4EFhnfBzStfP6Kj1Ld",
  "key2": "xix53MdWvx53yDRTocVHUr1EHRphm4SP6Km5Pt1VtVAP6M7A98KTfmfKnFYayBJPbce5PnxvZZmYVA1gmUxLQaE",
  "key3": "4mfn3oYoWxGA5P5kd2uEujDwGS6JmwDsbAWLXpiGHgRjvhEQo51D1p3ke2spWdZeFSwagdSBkZgGYBGbLETSSa3A",
  "key4": "5oEEitdnk1Cdd78BZJBxJFeqeSoi1WMmBQFbvcEMz7F3xPUQyMyRTkbceXrKGMVFpdsyw6oNzgbiUBh9AqUTdcBN",
  "key5": "ejUeV2HKpKH4amG1hE1VWooYvHpdAPt7dKxSnsVaYLYD1SVsWVhh8LaWMserbeGA5iFw8wK9QwCpRJt9iSLgj46",
  "key6": "4Rz5N9gNF467KXBpnCB8bUeX9sb16KrLHRzPHEFgeMeNQoM2fYbQJwWKi6ixD4WYkjTVVoJfZizs5waWwohbGzaP",
  "key7": "5d5xYsywN6cynCVkvzSSUmkziM5rDaf9ePcn1QeuRg5gAPBFDwoB4QWJRiw15ysbEZfYLEHeiGRMw9Te2WYxP9ee",
  "key8": "51jxrzFm5dicjkjF12FsNLnQ9nSn2Fqd2ZbacmHMefDpPuzXTbLDmtUGjKSRDxBfpCnGC44WooHVH16TjBr91tk2",
  "key9": "2rsucsZGZUaXjH6L49C7cHxjoDfKZcmXfRPHFqemotZ9WReEwW91T5rMq86egnH6HafkiAsEDmQUB69m8BPkaoYv",
  "key10": "3Yyp6jEJmvuVofQmWq8Ky4tVtAJdXh1Tm8tGJEzenNtHZ4mNDyyvrNFHeSRKPohCCKn5gFfat4VM2XdZewtE3Bqr",
  "key11": "3n2mxoSCzqkMSzaoLk5cM64GB5itzi2SiZXqmf13Kxh2Qtmi68F7hdKKS9pCsrhbehvtL8vuTQv2j6TozXXeWPb6",
  "key12": "3uHXjxfLzFChsrCBPbqV7JpjRVNwJZwB1vtnsQpBCYNuqxEDE7iW2CQn3BmX8uCkk7uoWfNASs6kLgmPWtCLHHPw",
  "key13": "5UQDTf36oTsJ3JQy7qsmSPF2wVuWVYjC9wTKwH5CuhbeMy8GRfRxNyCfJirySs6JDPiPahE1zza9Gzxc9NqcQGMP",
  "key14": "329WCufLB4yPAGFnwHBDn3EmuQ7TTXePW92HoALWY8ajXRsHTnsG6GA7dgs7bAnAiEvq3HyyiMsVStgvjF6e91on",
  "key15": "4iQw5voWVRH6nQagLcm2L4rNoSD6fVXhRBdhoDzmF2M4uTBgKWdjjoTvnMRWUt4FBn3uQxgcoLe3rcxSY9SXuPBK",
  "key16": "5vvQMzzKt3NPGaqMaN4NsgFPEQSWWaMS8CGqcLY2UJEBNutKEdZmr1oCi2wE4k5Vzb6u5q95HWq4eeckWMdcxocs",
  "key17": "5h1uMxryyMXqzX5KHNME73cUiETG5nxoHYYJ73s4BnWQ5n2eYyJEZofjujhBiM9YZCazH4jyBcHGo9cASLkGsfMJ",
  "key18": "3xNrPzQjZrJCLmy3a8bnKaiE6FxBs4pqzaARvMQVYd6sYybKbNa1ABSLpwsHFMo9pYkC9mt4HhsaA7drHk7WLmXZ",
  "key19": "4ngcCCBDY5z8dULewGzxJdcyXeXtA5rpa8FdsaYrhmBbLvk3pWpzDNZMwo6GZapJUZVtRhPWtyqZFCzhLyLFamCR",
  "key20": "3C6tN4CZjLgt1Lk3JQG43NnfLebAofVyzatqrUTfS4L2BGziEKWzzNqeVnTEmRmRfVsqt1ayHXXqcy7hnhzHXYVU",
  "key21": "5hPePp5qEWrgGhjm4YqWULmnASVWtomH7azDv5RVMvqN4JsZRGzDEA5mNDxHC4L1nKa5C1StW6RRjeJ29rcM3SdU",
  "key22": "4AMZP9QqMyQojPG1qoQ7PWhFyjiSSF9u5sSmvnADfkcQGbgwaQ3JC1HP6ovXLH6cXMDTJoY6yShiaCoYAQud9x6j",
  "key23": "3Li9fS69ggFiexocjUB1hG4dZTLwB1okjCAkENyYwEzTLksgMSX1hJKavnXHDD2hyKKWCcp7c6qPxNgnfRxeU3r8",
  "key24": "2idhiPM78VvYNstmuALCsSVmw8bU9Rn8yzJdMyAKpWxRQVAZi25w5vy9tvCfQpPBBBb19vHMSP8XY3vQQx6xi3sn",
  "key25": "2oDkfzsvrRarPzqReur2LSwPgFAtyKDwwWCz65o9ttkqkT7wuWqjk5ZqeMx2cxfLQ5WEWW3bVq2W3xvjbnJSBjEQ",
  "key26": "4Mystu8xXzxurFYCuB9cWsHGVghF9gzkEa3cZifYYagmCgxFq5xGtP9y2gc4mKkYuQdx1CMhtMjN7JDmjGC1XJkv",
  "key27": "57yf5Hm3wnWo6yHg9VuyHC9Ezje254m32AWLNGUdbKtwnzxzqiZr1AgFWEHmPBmayHtz7CC9pF1voyo1sfXNLVXK",
  "key28": "25uzbM5Zcvc3eyoCf5bDVkihch9d1tBT4zhZAR5csT5EBta3BMyR9CsGSBcjW9ykqugCyx72VpWktJCRPaisEpny",
  "key29": "56R4NviEFjKLm9KbEG1MyeN7b1t6sDMJM5PExXVBAAEpH8pGfHdL24JENDt35iA28bzvp9YGvAgjwLnd4yRmwov7",
  "key30": "zKx6AryJtMKqkcUKphHuvEVWRKodSLwkA5mUpwN6XYmXU8LN1wmBT6kpQtZQFBcA3oEqpjvyVJ3ax4F3JiJjLzM",
  "key31": "4JEwg3GMK13Cf2wLAs2k8CC12uf4iQScsr7kjrJR2nHmjZwYNufdtu78EdKhYHE1J5XQjE9fCu8r5BzRxBRAVoTa"
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
