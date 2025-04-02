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
    "4Wv41DZuAkDwpmY6RMJhAHDXEKRVpNrQvEiPftsUMKUqd6NS11P6ziNQ7GPQrzV7DF7xUj5uuKY9TU4iqoQPQfQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PPWuuqEiBM3yPC7Q7H1BxG3mGDQVu5wvBUEpgUTJca6oPLWCFcYA7nNuSp2xzKk1ikt8PnMu9bK5Co6aE1HowG1",
  "key1": "AAtuDReERd4LbKkFAdpvv3PdbQvGHrSxanRz6Svo18v2AndokDvkNiEN1FCNjU7SH7YHqjckdxJfSVo7MBvmdHE",
  "key2": "5AFHKAUSbw643pRUdudRvf7eT3ZsfLcHmoPbmqrsrQbtZnkdwoMJhQStzNeJ5XqPH3Qz4ySrjViudFGiRc1y34re",
  "key3": "BaisNxekCa2xiUeFQo7kRmUNXdG8ghm3o6LxfKg4e4pPzC6BDLipv7gQnSkUDBwEpYJrRfWHc7oBDBg6b6ocByr",
  "key4": "482BxThxPmXVXjsUwikU4fprX9hA6Wji8TYVg2ZQb2pvBEVSHjedW4AWRagU1umdHFwLNsf5GdGVS7RxBcZmXhE7",
  "key5": "2QMyCHdaVuHB4ADdBVzyVcJwKe1GM2sYKpQMwVHcFy9ubygD4xuv7oUkE5NbLptfLoVPew85mCDpSMfDAqeUFmfJ",
  "key6": "39yvBwcfin9mtU1DbnupbWHXcT8gD3jf1gCC18A9G7dsSmytitTt4ytQRbybLHLXiDU5hpw6fnNdmSDWvg8fRDvg",
  "key7": "5UkEFmAYoQ8g8us5Rxe83mgqDRKL8bUCpF5usXvcXe2jP3eTKTUZn8Ssj415c6qfQVjZS6tRTMKNYXsz4QqeDPUL",
  "key8": "3ypB4pDpSiBY6s3bEJLoPk99zFBy6SF21FU94Tbg6K7uhVCyLGtA6VwjqwfMnrMPtgXLrHPvudHVo8QxumvLCWt1",
  "key9": "2YPTpA6sbovyhqFdUMDsTsra6M8byRWyg7QAvrTPNhh48KHeyfMMAuZev16pvcHseGyi15i9mJo3kRwqchtXLsd2",
  "key10": "2Eixw6zvUMtbSCKJpDkRS27v7N11675Lm5jPTC2Wm684LjMtUcEQmnLBy9726j3r8JWaBuGAJq8xANH9FBbW8fEE",
  "key11": "5iMWStk2MeNvYrVYNgnBzcZeAWhJaPKidPJwQyMDV7Cj6WN66wNHE3Y3wtwXfe4mMDmdhuP6tAXfXdbhJVaXLayU",
  "key12": "4bfpjA2r2diBuKPWXqoHL2pUiHxAjvzZjJyTtjzhJ1LfpFMoH9Y9HNfims1VoH2PC1TeFrD26J4DuFms1un5QDQS",
  "key13": "5iCYN7MFQ7kuG2oULMctA7Nwn897CwrjwETzdV2z6gRBTXkF9KREAPBCDQLEG7MiBeWRFFxxea6BV4q9gYYBR4u3",
  "key14": "2frAxMUC61KMSZzFVU5c9rLkoXoAupBiYTLN67kTkPPRwiKbMs3vcy4PdA527VBKCB1vWCkWGKqiQ7K4nuQGW2nj",
  "key15": "3XxeVSTc1U5U74enmGm2CKrkcS7HiSmjQ5QUtgdRLsGAmCsr7pCXsMotAqHm23zxA5NZLVtCP1EZG4TfcdeCt9Vv",
  "key16": "5WEe5GCK7W2V8pzuHCVpKtcSfXogqHnTXUWxFLim5v6ynCWFbiJSkTqo3Kv7LVNGxKr5vkRitKEZFHPKMeWX73iJ",
  "key17": "A5vHcZLaVeoRMXYSC3jEonyMQmvBY1nAHTRw54NDkCs6iCWALEG6ASTgND5Bn3SheHDJ5afm8McJZ1WtHH7rWKj",
  "key18": "64GFP5MRY9RGxtukTYonsuek2i9RBghQpFFES3SKMN3VMXj978EEtySfFNt1kNPKnJSze4rN6qJyiAAQkgpQTXYo",
  "key19": "2ost8DBEvngdRMw5169yiYZhTQ2wAiicQHLo7U81AV2WZ7ySZeCzccEZrUzkWdaLj8SmhTA8o6mxXdrqLruRKMr4",
  "key20": "54drsZdjb1sc7am74Lv3mRegGAscT7PhovGSJ3qxCybxSG4FF4PXJo5acQrXWA6fcYDvjmd2mLczpKMrC93hRKRc",
  "key21": "3hdSebfb5g7Yho8UcKAVnddD1zxigwAVWUifM67g96M7CEkfRotof9F7pynXS2e99kuqbEKn1bfRB1nnELzBEGoV",
  "key22": "3r3jktgT7wGUe26hoEUukzbjxbubQMAKZKp1BZgFfanxHsHXPfSU1PWkVqHDatmTBF6q7pTMEdjovzPj9EDP86Uu",
  "key23": "4dxSCX6eTQ7y87tRaSeLzorhMqTsv8xwBk84Za7pHp6Ym19DgGNLNY1X4LGJmXrkdwTdJtx98eYEE9fSazWGTREb",
  "key24": "zE213ouBMYgwG5EvXpjVWUuDKJ5CMquy83gLUrkc6cEnyiMu7mj6aN4dreof2nEfFB9nMPqpjRjYpMEDggqAo9W",
  "key25": "3Cpf7mCRzR5PsxHFcJ9RySnejjbXCmGvJFDHHB5sudN4wt8hTW4TxXK3QxodCWqFhdP1ULrRJNhP4B5fNt2df5Ca",
  "key26": "4jHSnXFB4p6hK2rnBLkWfZtHUhUDfr43rcVAYBjembr8PreyRpLCpZrXRu6MqytsdrHBvBCm7P1FuLEcKkNqDEZD"
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
