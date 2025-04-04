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
    "2qGzmmS15oVQhWssKyGrBhNwGrmZT32YiQJnMhGQY3Su1kerWyRrZ8p2Gf2hU9n1MGw3Zbfcnxc9f1WW6UwhcJ4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pqX1CXQem2FcyptuxJSkEeQEDR33rsKvq1CihVAJ8R2hMKsNqipfrezgNjB768LL2gTo3sJ1csRam5TawbrAax",
  "key1": "22o6CBqKKhWJkWTZ3gGj6qr4sfFVnQr3z5bqKD9AVcAsDE5YSVxuJBqYepzm51fRXQ9biSWmHDcguygk3b3pCFLT",
  "key2": "wRkRyCXhYHyWzF9JBYQcViC7uxmVTVKuxsytfUwfT3n3wCCcJmu6JbBKxra4WBcCCo3pG2MxoqJcSsRH9MTZjcp",
  "key3": "2qnH6qYSptdutg55ECA2LCnruG14hNGeMExVxuzfmVhg787earYhZEPerFdSXj3PDyPCwrrzZTahBzVNA2Wut87p",
  "key4": "5MWFqZoPZLT1xnMb6UUuZdheJ792HoWA5pBabeTagNtKpsL78geV5eWwkmFAAsxQttjj8NSttV7yLEoT3wtDrBeC",
  "key5": "4p4FMkG4gBHrMpsmG61e8zdZSN3cxmtayGyUFbB5ZsMRfEWxQQQGwkHGKn5dNHyPrw5MEuc3mNah5WadULjaVMds",
  "key6": "QScpLNMzoM2a8J1onn25XqcBgykvetqUDm69iQK9uT3z83Y9jFLRBTthM336Sz6o8zLGNhT9yVE6Wxqh89LwLEe",
  "key7": "oFQJ8pmhvJF2rgSqC5dDiiwUwZ7JSq3ZsHmHGzRyiGoi9vmc2PUcyKaBHLqX5evnneqcKhhtmZzzYXhTmXEsxtJ",
  "key8": "2dtTHFBVMctbg1TNH3Qk7j5apDPifXX7UiC8TGMYgGtzJBjnjFuztT9opL7jYDhPcLxrRjnG4DhtDdBMKzR5bsCx",
  "key9": "5HsQ5HY2wsFzo4bkJLEKRrG4eajYKXtUchkkCgAYy7sd7AUQnnFZNmESDUPCCDvHaChBjamaQ3JfToaTBkvQuULb",
  "key10": "5guvywU9w1zCdwG6RFksX9VJ9Y4no1zR1ZNZvo6quzTN73a2a6NDpZXsNPuSgs7tDksd8V5sCbUsRhjgf27V88hH",
  "key11": "4WCxrkV1krSmrzQvZgJgAweuY4WFBZRRUNbvXyadbYQiYhM3Zjw1Z2rCZT1iSH98zxQsNddLeB2KzrvuEs5MzCk6",
  "key12": "5F6W84RUtJwsC5NBZzjYKUtkByC1XiVj5HKUxxjyRbCxZwm5dab7Nv7rei6oWwEtRktnA4iNJ8hCDpUFhRpYmHis",
  "key13": "4TxRcM9Pgvu7Zff7VQugoCwRsLhcnFL2Htby37Y3SJrLWCEH3QAcg2aFg4Fq2UQ7R7exV4QRY4UYM5qxDWAMdP1V",
  "key14": "34WmUnJCo8wkA8hKE1MwrBfn6doaLkXWq9qTFqaApmyw1stFeDSQQpxpMXQXbSzTgem9Gt8TskbXh5526nqyK2WS",
  "key15": "Te9PbFP9uQGBPwj3zqZnPGooy8c62WpQRW7HCRaPTJre9fh6jVr8bJqoVbuXG8JXhNNJuRf2fYVGs8mFRJDLeN1",
  "key16": "5ZmDB5qnRY8yGDNViSFsAyBnsBTFPHSPpDfjhd29mn9h5wvo71jn8DjMANTZ2HG38eCHCFesuSFmaLgfxDBJkr2M",
  "key17": "3EuSjrHU5BW6pvf3VzUhqbWMsPK1hVTZoq54hMScjjyHN9914P7Ay5ERX5VSezwRMxf5aM31y2P4bhiQRJYVVNVZ",
  "key18": "3DRzz3nJsoH24wBmhnHfzbkcf9UQWmfxbqT5TfhCLimjXDapv2rurrtmCaYGRMjpbcGk9yRhkEAK3PTvcWNragLq",
  "key19": "5NEJEc3UzxXj41LqqsDHTeQVhAy2ZapUcXo4wTopj42VKHzWGqVDqxU526yLwgomoydAiv4Dt9nAeNbjXsu5GnDE",
  "key20": "3wRjppki4foW96GJ6K6B7NdFo9RBex12RZVmdkhioWBjtMuVEuUf3i2yJ7pgTfpDUhw8418vi1NTkE9Vbwhddy18",
  "key21": "3cckMUaeSTeHWhKcE88JvvCCGnZgYGibrP3Twseu3KwBjJhGPTpQywEdhmwn6h64JBFDuoaT6WagCav4mskGTgjU",
  "key22": "4u36jh29Di8fABafR4psNeLJBKEpTnNdA2hcVH5nW6cNvSsDK2iJHnF8APqErSanSxfWAvJ7nvH2cn4yhhVyXKVx",
  "key23": "3oaekUfPw2pWY97YbdKPRAxSx9NAXwPwDcRzoNQPDz95U3MhiAzTk9WW7jJAy7S17EpLwp1dXCmvTtNYxHAnNS4G",
  "key24": "3pYHt6y2dYtHpm2PecdqsAP9iPoTETTdAS6jrJVDzHntJ9RCvWZ3qU4Db3eHqYitJsVBSBabByHTJf4PtR148xrL",
  "key25": "4Z2ETVCE3zESd7MTpEoepKUtvQtxoScW5jH4QTnwrgVMbAjuPd3pmurpopAAUtJSx3aK48fqd5AyvmFygQhpWsVn",
  "key26": "4F14iu9XFuPh63mpLzPbnmvYLkizHuJgNnLtr1z3m8EUhygEtwaiS1SEupwEZiNYu3z6HixCs3yoqYgrsUcfmEHP",
  "key27": "5AMHsdLUDDopQpgfT36GZW7Xxm71L26FfXkTFz7xxhiSPLeiYwrMQfrrhZd3Cn7dK6eqeEqEsdUwAPLUA3RWq7hV",
  "key28": "4MEMFNGxgQ4bqa1e8evPn5HoP6dmcd9j4kMT2EYb5uiWqNuCY3gGQJHL4HYLWXRBsouddftV9YiYyGBA9UZEnfGx",
  "key29": "35UfwUESCxccKDHZzgrARqsduqUMufcLcULDX9HXFS13hHbVdzecweBanfUWcHGPcwHXqkxz67j2hs5hz4Bq4eDZ"
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
