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
    "3uHqPyxuFhBvrkr5PpTVnfVyZARRGCSm4WGn6gv4i4LQrxWsHLfQteNk1hY7WHwCSEkmB6KT3BkNiqoXBCxPaSAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F8TDfhp7ooAHwCTmQfkejnCM3EPfjZkW2D1sTZuFUunr5SB371c2X2MKmK3rCTRbomNrMSnKs5xWttVp3cHSEji",
  "key1": "r2PH7YsEyxZeLmnSFKXUvghBfTTZXXrqZjcGxuU4pqQqrv8nAQ3MBbr2r1pRkcCvJbfm2khzzTCEpZTUNGVf3dE",
  "key2": "5v5nJacBkji3njLYA5qPfg4KZT3sAtkVsLrhh8UYqpQ4u5ZfnqGeDLrVYzmXC1bpKHMpJtnhy2dPaGWxouBAAu7j",
  "key3": "2YueoouBwLJM8FEXTKHGLjrutKBXWMBjDPtWLVEeCDatcSJY3AgiGaB4Ckabthm5JMfmnmnJgJGVHKf3GL5WV8o7",
  "key4": "4mMXbDu8XHpUgrNSo9ZrQdZBzmcK5MFwkhkGptrp4xgQWWHmi7e2mP4pcztrcvMKmqf1kLxhTyouiDCPBML6eBvT",
  "key5": "2cG13HwX6VfoA1e9oKPFdDRJuDKjPzFJivykP8fg1RFminRAvUT5h2y2zYXuwowCvj54CYv9eRaKiwjDnfrWZQy7",
  "key6": "oxB9w8T6ymBhJ3H5xXF5PH4q76tc1XvcK7djbt21M3a5yk75Cj6M8L1oog8Rccsocugs5tDNCg1FAwvWEikkDUk",
  "key7": "PgUQyDcatzNuKUCC9cHzNoVgJdfWcNJTy514Bh1EPDpSbfoS5X6rxSW1XWJJY6YWGUJn8pc3ws8QVCjb4TndGkh",
  "key8": "2dCfQE33wJesdVasMmJ3SHP3KLHdPL5Kxj5Jgedcjoc6V5pA25weJgi9VFpYe1jnXB3DvmNCTkupQqX7pxfD5281",
  "key9": "Lc3qEWBw1bcd3qAh7sFoSmqwpHTxkHL5A9ZD5C3WSYsBhoCs8FsXzUmrMHBVZ6Ybw7ZZYT2QsAdC4sGwpvXv1GD",
  "key10": "BxWwfizMXiFbpouSaGNmJMMG7uEDwsjcBTrzfwwbR3dc7G23qg7LWo25R5DJdjxjn35JyqonPDkWr6hKAnBjnF5",
  "key11": "3xskxrZVwz5MhwVmcarEhB1tvbhFaBFqJeyDDugXCgU1L4U43JrYBrmxArGWPiuZpGVJmw4xyBE8yUntBhf1p9ap",
  "key12": "3ioX7tkNDpqtnQZMZmGBzi4KQ3Lgkx7r3NJD1fff1V545HXTj6AXnkx8q51Xrz1kRPEL1g2pCymPojNksARotfkN",
  "key13": "2n7vHRbGEVUA93PH6ofDpYt72MuzKMmmMz7nTxn3o9Xt6q1ZaqH2ZzKuRjpBJYVyDncA9HytPMqLEPoaiAgwCWhY",
  "key14": "1WCKNvWwAe3vVxC3u66CfnzH7PciNaVkgVAyNgxxtXXFt41r2H3DPyYhMYUPtcindYYMprkApuVW5eYivaJcDcA",
  "key15": "XVx6514oRt3SahijjyzRLWpAyH5PY4jmWYUuCENi179Kzf26yBmFp3qmniHKM9f3yVhQLPPBBrWXyk7dK6utzJe",
  "key16": "34Qf7V41Fg29h8UnJ7M9wDySNr9kSNgAbwVgEdHs4vJPWZaF7z9P1bC5rNgHhQDRmiYk2Nb2bBQh5cFpxTxyCvK3",
  "key17": "3bp3hpxuwykz1eBC2J7n4wEXWMsWjsAoF6fHygwjcXCYMBDkLuBGhn8nMgP8wUBLm8PKUQSq4Ch5cu3Y27Kf2yH8",
  "key18": "3GHZvFknUgMpXiaS2SUQhmAd7L5iog9ZKHA9DVyNKwC544HNumr3x6AgX6Kph1MugMKHeBeJQKHSFZDweKz3khSu",
  "key19": "FzgSqrxAPnpZkuZAbzQnXUpYDp2KhyTJshbCbHc9UJPe6CMnNEuc5wr8QFJvs6fREgEEzUPFG6RfH6ENpZB3o1i",
  "key20": "5i1yvrhi2bEJKn95hKwfrizHC8t7VX5SfmL1Ner1QbkR1mtEtDWqgpoYum8bFpHCBDsTbrsAD5q8zScFcKLCiqX4",
  "key21": "3p63MQzWUa6Z5VZHxBoige2d4Z9KhTeLssyiSymH8LsRCsRcpuJK9kwoeETtYCaksocHgn1yimdyB64h3tyFcaZG",
  "key22": "5YrEqiw1i3GckTUE1QVv79uZPL3S7kt4BPr2YRdLvHwJz1nScG5GbnAHbaA4X7gsBXQfVmERevGgZQd6mttkXJ5t",
  "key23": "La8cFgdAj36Sz56MadERh16ECPgnvnQPm8WTAu9igy97GgNnfcw7opbujgLhRN9PBBU6pf4a9fGYrvYRZNKVgKK",
  "key24": "5kwwTyjL6i3Nf6c5ecmRwEVYfHXMqDFfBazSKnjfer9XsfPMRto4xtHHSGokiKHoSWbX5QWymYTXPCKeEbrFUhmW",
  "key25": "5zUoG26kVES5E2UJrd4DZtcSWbERhKn3sC9FFMUJoxnnUHa5VtCM4YTY9PSTqmoETyEPMecNYyvZNsZvtXvnVgsY",
  "key26": "47BapRSFR3Y4vsD9JWWroEAxW6C6YA36oLBVM9HBeJrUt59V8myz6EoZMnmrNJenoymYfhqZzX2h2TWXhfBX1wz8",
  "key27": "5df9uwgwrfqt3PyAGijmLBQUPMGU5qQHjpN2YGL9ig158GkqXGshKgFLRPciiSq4r7XwDVNGMLCM3RZjMcWLnPhn",
  "key28": "HrXop2TqTf17v7wZ5DaEZoEHPgse2XVvmyYb2A8qgahYc8gfUU17zxmLLv22jQFBdK6bxVSceT9LfURm72Qikun",
  "key29": "4q7wm6dLCsbXP9NXJDot93THxomZrLnAapbY4ccVAFYJqZJFo4hUZNg9wKcjNytBsBh7RZVs7fCxdLAqKeaDSCK1",
  "key30": "5gWpkdLRA6Y7V38MUFejKXtWE81FhHPixZPdfhNHqyKaq6PL73ffSMyKF1ygwcy8TH8PF6rFprTwNKNEJhfj4eGG",
  "key31": "4yti98KV2wDw5VUYVsL3MYQrmzua6Jy9rqsBHCYgJWBAGh9yd4Zu2UPLh7woRy4A9hEsoWgmqYiiqxuUwyckDXnV",
  "key32": "3LYK2zMSuuh7KZ55YGh4FQWr4m7euooLPMW4mDiU6LNY8w6T8LkgtAQeH5wumMZMeroxVUtceo1DrcWYC2aYvcgc"
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
