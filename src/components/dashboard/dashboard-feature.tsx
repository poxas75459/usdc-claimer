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
    "3xAu5dJUzm1E6DRb8iArdF6uQFa2TKoFpBQSXoW9RxFTR8Qvt3wkDRNp444dwu1UWBBEL14amWRfo41zUg8E9wcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41HfpF1VBYXTB68r76FmKNBLxwsbJ58urUvJbp1dQRR3hp62kpeTFnmuZnEPQgU1zuQvsYTN1tyqPmSkXP1HxL5h",
  "key1": "65r6sBCNnRFwh5xkXzEBm4Uc9fWCUYQFvB7fG4KDDEZmGUhup2ZgvSgq3TJMFEfvqrBzGHLW7nRpwEKtwodRMB7A",
  "key2": "5ZBByWJ45UU5x42yc98aAgzAS71HtirABN7QZnX6adUEoaURjMYVpm5GU6XArYjMpyc9mTV2GC8SQfcvd4JPvTwK",
  "key3": "2uSVCv5BJN8uQ1tTMquX989gJ4Jdo6fZxGuAauVdcwnadt6sbYyC6BeC4BrdV98SrZdQ7qbe3ddjVSkTxfAakcho",
  "key4": "4wtuH8CzsYmCF4msGF1xFarcGdGx2t5yAUwjphtkqV7zkUS7fimGDGM9A72J4WA4cHhM4m3PemthxAx82MUU292V",
  "key5": "W7kc516DQTQFr38r6j4TF8VvZzmRDZDpawcz11CznznhqJuvHVc5Mot1W71iQkCLDqKXKakbz4kFA1fu7hRQWqv",
  "key6": "5n8XrcVzd6pwNX8sXkhDEbzf3WNryPfgGfY9p9NBXjpJrqAh1ozz2nYL6Q1nB7tLfDX8Yt67MHDyTvfZsETfhrEY",
  "key7": "VUsLZkeKdUT8JnepxXDokb62koPg757RaBZfnUv9fneQ5vBbCZmFo4uN65zMP9auVg2VC8UKt5ZEKUDm7cLLsxR",
  "key8": "3LLioi9SFhs3Y7tyVdon9iXdWTPDpMmyMajf1hHKbeo5Nf7KQvhaZXLszsQS21KqZ9ko5oiaHEc7hFqZwj6dyhRX",
  "key9": "4g2W9uEPxwxTGD6eQNDczA8d9suPcDXGov5giLieRucyNkYrv3paJmPvqisPcUx5QHCgVLn73y1uERFAFptsf62J",
  "key10": "LVPMPCtENErdtXhCDyfcFACKf4KGtrWmiz7XhsgLBvBYY2UR7qf6AStrgJ2DJ2QvgSsBdajqFddm7Gf8SGjYAmw",
  "key11": "3Ey9bqbjWMo2GeCr731Bdt3u1EUyCciVpe1chFYm25V4GQgfnHZ9UXgCQcRwG7kdKxtA2CCwXQ9mp5DJUuyo4MRF",
  "key12": "3APehhJZp9vYBubgm9NE74sWk9t3Tuvr8wmdmiTcrdYBfmAP2LZRiCzs2RMg5yKBdXLFQHSQA5h1g4uRbxP7ZuTS",
  "key13": "4SXmKD3owg926j7aqd7hjoQiigZJU3UoSZpsXpZiAeaC4u2idYrds948bY7GGHMh5bg2mN8vL1wk7LpxE2fRiorN",
  "key14": "3CdXLkvn5cnHuL81HdEySuk5NwJtcU4SacpTPDZps3Ha1vtsHPdopQX7weLT6iAGx6D1naESfeghTYLHQoVkX4yR",
  "key15": "5tC8GJADBjRL3vaaHFQvjzkmdJPWbzkmtV6QaAXryBt1uJWNZ6nxHAop9xJKU9hTT3wwb6C52ifv7rcxq8o9gQpD",
  "key16": "2kMGqJquGdgcw3hFWSYfDeAnAhAbCSjes8saBPB1zx7mSE64t2i1HQxcBdnNvWUyvW932LeV9KCp6uoBxwTwwcNN",
  "key17": "2ZDz74J2U8AztDAm8dWULSZ99XcrHJeGcn2fvXnrjqH6CusAvcWrrFBNSLGXjsBG33xA2Qe1h4HhzFvK5JvWustk",
  "key18": "43C6rRU7EUYBSmE8Jq4SXqHU35GW7zvi83qmzBbCMGLFNxwCKa54ozcufJomq4snvxRiFEjDa9ijeEfS5SzCGt5c",
  "key19": "4GixHEwZEjfCi77fr1jS5g8uNYHxPe25yCV7Qjw2PYAitFpYygdF3Weq54Yff7qrfve159n6MufquG4VS1Xq21G4",
  "key20": "3ms2DHGss2AWtNiMvjP5VK867wfM9u1Nr7QDSYAV8FXi2H7gPrtSda4jM3qSsoxbfCke5Fs4FFAGQ5mmypNKr5b4",
  "key21": "2b8WA2LtZUdoAi1CNYXPVdQDrAt1TLLBuEfFj4nfAHva14h12dAWgLNwPzj7DpRvFu5WRtN9YoBFDGY21L87QZbF",
  "key22": "4YtTz8BZPAtZMAiWk1dHjbuDeqhucWik4H4VaW4au32FVz9HTsDa6KmtZN2TkkHGQtbAfBkKxmiwTo3ipVdrPT8a",
  "key23": "5zwZPLZqRKYjmAJ76FkKyNQDDiE7otLmuKjodi52tL3gKdtGhhF14DHzpPfionJAmCqwbLoqvvnFewyhnygpQgke",
  "key24": "48KnNrqmzmPhvKxSfCsGsiyTwBuv9ZWf8c1sm8aKhH21x4Lde6961xYeaqRMx8qPZPEyVf1aRm4fWbx6KXkrtwjB"
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
