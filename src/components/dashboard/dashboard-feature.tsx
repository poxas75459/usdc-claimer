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
    "4fF6L3YTzTbjSfSkMwqRNLgThUme1VLJKwjYiaYqvJ3onPYDgxY4mteRTv4hTx2oy8suYBmqd9S7KoLNuAKKMwa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tWVB1fQoKnEGnAuC2T92wcgGoQ8CkeSN8Q5QxwkyuRDskL9z8r68aZ6D9DqVgHAV8t4awXm1Fyf6AgaACjNgPjn",
  "key1": "HowC9S7FCTjfvfyRMNYnbAMb4i1ogGMFatXRAo3WLUkLrrKmAdssAEzfn4fwMfrRxufaXCecap8CBRtozY6Dws7",
  "key2": "3tC4iwoEuH6Vd1c2pKrdktZRYVRMKREND9Znms6NHFKBLN6r9zduDMQG2czFEvYdB2uvUXLSYoGETuDLfdJqZ5Rp",
  "key3": "4VsM6K6GxQRHRkzijcruLxCVSEfXSST6HU8oqMzTcokf9BeQ1391bdJCFLj6ffEYHbiNv4M15JXyHfZLYiQ6rhrp",
  "key4": "4mkqyJJ2VnMZ5Q4RVeLvF21TLej52aQhQ6K1LRasdsfcfCRcF4sFVWYwsCChy3JHEaJeeuqTPZTsWC72aAhD7j5P",
  "key5": "2W3gcU3sghEn2k46CWMefzXFBApqvJT7hc4UyJe88CDBoKvYcoaBqW9gMP4wFyatLfs4mjw4744hwf2n1LxD6pSn",
  "key6": "5hJh8bGWVTtpp9AoCcupvYCjoDZUdZ28ukt4aj1TeFRFzgzcT3dSJRHAmTLbYsvxL2nM37DbyRUBwFbzynsUfxgf",
  "key7": "2uirgqyU97UQvqZV5oTXgGmyNh9RUJD2zig2JEDoWL7a8XuuCHAAjh74JQshqeqs8uUMSjRPswFeU4RU7bq7v5e1",
  "key8": "5dLSpBAD1wxJm3v8GfZPtXbipo314hgFyQc3GfYszfGfxAoX6h6zcTEJkr8JKdGwAkdHrtw487CznZk589rBmz8C",
  "key9": "K25Qf1CSic8whAJdsdm3pbvHrqAFzHg6RkNDt7Jcqd4sSxYRR8gffTXXjfqanncN9nZ2quNZzFQN3edQ5BPBEuh",
  "key10": "4YLsCQP8nmunKaNkygFfcmGGhJsUnpXzqjrNL6wGhyM7EvegihtftJich2S4Ty85McsaYsu6UeiCnaXB8xqEwXUM",
  "key11": "3HA58c284xGqmbqrmcKuihLk8o7xrpoA4BMuFC588Zu6xoGMRmLKvHDf9Xm6KZ6wyVrMSo3VTjXJjWpW5mVEMQ3Z",
  "key12": "3NK2G7LtCAfFM4fD4RqbLUaYZRMFJzAQzzC1pceWiLmR7Xew6VpEkMbCo8iHDxipYNHA9crPugysj79mBspYu3mz",
  "key13": "5JMv6YhjW38vdy9yYF7ZJShLCLDYiiqQStxNK2aEneoHdRUB1aNi7K7463u5sbuLh2F7j5m9boMmFMc4pwCWb6eK",
  "key14": "2BK2jRAAHXBcbWDibcYQLf7xo6RrFdvppVJbgM9Z6YXbrzKTsHaptFUMugJ6fBdRvHvCzC8xiMAr1n2HMCi8xJoV",
  "key15": "26SEWTSH6h24b3w7AqVRWUUU8uVcGbtv6esdiDWagw8k95ukHRhyzt5hUoGqVCQV7xArdrMpcwsoTBsygKdiLfAe",
  "key16": "255wy9LcQNHF3kD92WzAZfEKZkULzCuTdZpZx6cao87ahtqVfwa82vVNnKEiPLcS7XGmJugjojGmi2bheMizx3re",
  "key17": "5dSxSyJpHYGkVasqJX4Azv5vgPYrSUMYj37Q9H22oK93udRXEL8onABpQwGBogSjgWfjqZXfai75HixMwDysrKpX",
  "key18": "31yZVzxtkG26jW4LDidTpuVkDKrtzXmThkDrJ53p3tjavoCDc9eGzGsYTJJf8S71HzWKtKAuChjGbzofYH9CdVYz",
  "key19": "2yGk184M8BRhMHg1aMrnrwEuQPUPbNmp5KMPkLhrVBsAxAJL6XtBZcHCyoqN1gXBPVUcTeVcwVXoPWbWJpR2y2w6",
  "key20": "FxB6iW3jcFjUrnNe6tHjEYAp7VGQuMXZ1nNstK4HQdXMyqSxGXjkD4ycdmJvpv1ZxQVEVtHdgdpjyCcByu3683N",
  "key21": "Z6uf8vdxWNsSSwL7i2rPNGi7HmoSNsiJrNS5MfdgCTmofaye8B8w6MgZWZwjQQVBEgGPMt9F8iD7KN6r1HAFfJr",
  "key22": "645J4brWFYWttmCPW6quniRfD51qLXdGp1sWBTtRVsD5jSP4QK78Z4ahH4YrbqhSVU1Yb1J8ocE1uc4FuPDqcfQS",
  "key23": "58U4fG7JDhCSdXNpkRjb3vxQQE8iKZVpn8tbxggzBwnGRw2sEjhPKEKeKCZR2NxMzUZfzzWbC4tyHaJv2L9A4xxX",
  "key24": "2z8QHJSML5wUYWdtQzKV1yqgY3UANfeR3q8mRPWJ6VNk1tzzTK9QnUnfeNry2otwH3L9s43g8MnxpkAmBNgh4nHJ",
  "key25": "5foXjKLa1BWFDMBVtqanCVr95J5hecgqVTA1kmhLfoRhZb1LcM93NhT1ke9TMdPbghuP56FTpSR4Ztoan3MLFQcK"
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
