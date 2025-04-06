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
    "3wt7Vb5LvcHrw1oJEc9EsDXc5PTzzydRvjHjmijS9zYsjBKE8HJy2AD7B6JB5iFDw8W4nKRTUEFwJwLQbTLBZ4Q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n2si6wikSZ1Fpom477QJkRuhFz97BVLC91W5S85fFTS3zccDCrxMregjP8uEfQ7hosr6j5n9BTxJKtE3HtcqyVm",
  "key1": "5A2gNA9Cn5DvK2Jc44W3V62oGSpJgm1gX6R5HYdF8r4gyDyu7JwqKiT5t2jS7D77HPe4F1WoP2dMaiZdMD5Sggsm",
  "key2": "62niNEkUQN63Z797rnWcKQjb6uzP1MAMK8qpU1UdidYwnT5fj2xQE9eR8qvwDnNA1CxFPgqSdvjUXk6xy3fi9cJj",
  "key3": "4XK6potc6L7nXC4WdFPMYuMxaNXaXJWEJYqXLfmREqrY1KBoC7SBjhjZCQTtx4XHihQFfvDoJhe6Aq1DsjieHtKL",
  "key4": "46gNknPYrW8HP22MdpQjbKSFgGAz2SuRAFyePPbRkXdqzVeQu3au9ZJNs74PW8rQz1txfY9rmX5iV5e6KTk3G64i",
  "key5": "5S5XB4UsteQxGhUaE6rKKC6hj14ciNN1BygVoMwZmgPRXMyo8h4oFUe1uja9kSFCgt59HdfDv5EyiG9D2fes3GAj",
  "key6": "5QZPKa93eAHmtGUeKwWwHpAqidmZFZF6gVVvJe5zG2cF8jbEERt32wtmscmWCyhpM2SKS7g6BYEE1YYZyRW6yxF1",
  "key7": "2Ai8PvrfQkGMchBhysp4RzYXAV7oKkKLC2pCzXHbC5bnjaMNyV33u9mm3qnUimb4roxbMwvQCFsGzmg2GEKZPmjk",
  "key8": "4gfRCA5ivnXjEzrVTTPmDeQR8AFugjnnvZ2LUbnMXVAH1mLBSSSKLmWqWDWFeLjJmcU8eUANSBqsZhYVjaZudt47",
  "key9": "3XtURFvrTNRcT1dAwHLGso1Y7p9n7ZBwMgUtuM1mvJMPjiQGzEkUJYyeDGHiE37RE288k1dc2SaK3HG8Vem4Rfnx",
  "key10": "3t7VwviWU2DGSCDCGvGMUf7vgVEkmmdVadJM42XtFdxPEewt9zcuTYkP4gTmgkjLSdCPjYWnTNPLJoY3d8QzJTMJ",
  "key11": "5u1cFo6UiCyxAgnDMYf36tgPETAJM2iV31gDsffNdFzDyw2XJxVckTjY4KSu5qG3YuwdpHu5iprtpoQbXsckeUvh",
  "key12": "4XYFCw824f2i99e6ruFCVSnocPxKNkLYR4qLJzmcC6iYf7AVbZfFgTkLiuSH8sKgwTiuDHNQaWoUBMshAjWR4P2t",
  "key13": "42n1MMQ7u4tvPusoKiimES8nBsB16HJmkuZ3wYT4Zm4eMYHz8TJWMvGwWyaSW2RBpTGWaZx2cYheZiwSp8YEYZZ6",
  "key14": "4ZbkWS9dHodJ5ZtjXy1HSEGdG7kWf7aZvqAFrriEfrnutBkJP1mTdubXziMRbk6Qz7i87hDQLcrmaEzyWAKATspX",
  "key15": "3ypwoJ6ftV1LrFkg4zXwqGVox1mDnUVuGZtUcUvuhVzLPySrMMBDRwmBBCyWtrBCxuA73zgfH3iPPJroRMp7fSbG",
  "key16": "3n3YBsGZbyBCiTNazZc7xtL7kca6cSL1ZffrvivCKYsPwsnYxHBjPmcSg3G3FLh5t2bRrimnCgsa8bdQee78AuEA",
  "key17": "659d3ES2gF14EFpgrdTR2tZ8Lv1PHKcBLKtvGdjPc44sNoQn5nXV1zpwYgRKUGvBKMzxsJ63EdaJpENgH5EERaYL",
  "key18": "sFET4gQ19tzKypt23VG8sLamiRe9i9Q2LiYWtKfEv566MQyS8H39kAKY4JY3ykqx3fiMHVKzbZguQao7DRLSK2Z",
  "key19": "39yviCtD5z8EoqZr7pPMtrGpqKPaHt3E326nKU3XeCUUrJQwFovrkiA8CWQfBd4nq1aDakBRp8HB5d5ckeZ2UxXv",
  "key20": "4qvtQQ6XfByY66dS5VU7zP7scAYXo9fJckC3KuPejP3hSNJqeTxh9gGAYUd9SSdoXsYQzEeddadgB8AgKCxDXw1g",
  "key21": "2wB7SkoLT4NQqorJUefLKMkbwH4oVZJK8rKVgxRkGwdKXSUTZscMdGPGikETY7Hfd1p1xZsTnA4HHLzG3GqfQoGr",
  "key22": "4NXDizr78vXDoc88W3PBF24GRFkJm92wwFcEKkBSLmGvZPLjYKUGPvaTEEJrZa5tLuiTkG5oTKSyPrjZqxybtcvX",
  "key23": "3ZZt6tnFpek2qxWR8ahtqLuQgKSok7nkpb4Dt5YwErewcwrQJwuevhfbkrHBmDaAqBWu5F7dnTrQuE9ahGqLY6oo",
  "key24": "31EveetXcSZetWvgfLpcJZMc4Wa5qccB5SbLVXx2Yf9UKLZWVMBY4X1kqqfgcVUgJjGPekVDM1mWThMvnYLV1ZxK",
  "key25": "fZKcvBD7V5kT3E8awdNtQEuYDxb3QZ5e6Cb2gZTtnCs3SHAz9QM3Y5SExsuETauBBxM4PWY9Agj7Z2hXZxWY2S4"
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
