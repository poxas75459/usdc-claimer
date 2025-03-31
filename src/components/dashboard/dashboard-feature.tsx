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
    "2uhke5sw7y72JbL6j8dbS6PonR8kaKatx4HBmRyyRJcGsPDmxw4Pw9nGjx5Aas3oA44YaHEy5fmcuiw4BBesbYDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6774bF1EvLnNcVzXN8iJ989jqG9RoREgmf6JPa2HW7sQPsFgAWbRQCPnHCwr2MyRRdeQmzr7V6uJTnLQhJ2LWow5",
  "key1": "5YVcW3xN9tZjRVJj1h6dsmiHU3QrBWhF4xvvPab7LvSxYijsTz6PrHS1t57k1HvMgdNfw7xvXpUGA761R53M7gTT",
  "key2": "3NRyskD1kEkRbv9WUjkUPgGEjkiAKmH34yR2dCFJXDzc6Bzf9WpW1DNBTWdTdfCxf9S49YWwvXFL7PdVwQuCdpiA",
  "key3": "3rfUN6bis5zRxoemfKEUv5i6ZXwwHPU3haVJNa8rSBS7UqyBybu3dJbqpFxFvEAfT4MGTdgoGaymijuyMVkUgJPQ",
  "key4": "5gStv5VHz3xYjCsJEzicvrSG8HpgDcfH1iT2PbNVFvxhFXvANXudnb1fEwYTHaXrr9VakMkNvXFQhFLod4Apycbi",
  "key5": "3qzviYMfK2Pq4cB4MbaDxz4GW337iEjQvXbwhGxoy6ydeoFMbxy7kLHFNyDHGMLCdhV24WiX6GAWWkgPt9iE3fbL",
  "key6": "2mhben8tHJFHAwXUtz2b6vtCQfrWVYVHn7CSNMgvf4ZVSfjWKaWKWKSw8gZ5EZWp5zFcPfbK7AkbH5JrzENXFeYm",
  "key7": "KUF6Art8qHJ2ojfyYgkiaMLvhQP3KjnHmhabiQWZydGc3edynm5we3TK9qn4V75Tomw9D1HBbVz9bgYbKso9XUw",
  "key8": "5dUVwWqcezda9oW8g6h88rhKwJabqTGxipJw2qZLwa9seMDXA6CQr1puiuCndqH21fcZqyKtD1HqkQLQ6ay76GfP",
  "key9": "2RMkPGtreiMBvVRsH2Uz2QdyJr7HoVtDPpTjA57nuRc1x8HUAowLqS78ytafNfXUJWopMzZxSV4xgaaBMPnqTf8C",
  "key10": "412XGamfWp4GcVnmhhAJY2tnd6vhQjZEt5g2rjkLQ4bEUgki85vTDTAgxd3feeVLpjBzffhKytpdnFFrxch49hSA",
  "key11": "6ggzESU2THeEzXoabSEQEaGTVrBgDWGA96Fq4VfLPhLNEtJ3oYXWUQ17m5WEiLG7YM26uvdJt2Bxv23JFgLe9w2",
  "key12": "3uMQkqx8f8gaHEkJexHb9weXyT35eojkPmQF4uvxA6vVr2qawiiPeQjUQjuEbwmQAHibiSSesxEsfuuaCwEZXc8j",
  "key13": "FC2rYzGKN31PdDg8ospBmjStVdgKN5ZLNZAg9vpeqZPrvgFUR8c4ZD7bkszN6DihiWRrPXPGfZD3vTThJ3JA955",
  "key14": "66FW6dkmZ77QkRgygTzDajJHNHYhHVf7XmXwngBYQv2zkTeYy4VqPPt2pELwhRawSe92du16SQ5zBR9P3uk8zqtH",
  "key15": "4DFAqyKhVYcfnpXhK7nmYSxEDapoza7Ph5MVLJyJASbbDamSvnq4susGChTZtuyn4xpwxpFfXJM4gkzzTDv4LeC2",
  "key16": "5up8FrLujxomqt69SWW8iGq87pRoVmaStC3Rcx4cxxrewrciUTF2vTExdvQ68adZxzy5VjUw7FGn6DaYUsdndoJo",
  "key17": "BnrumLcFUtwArStRTpGAf5y1voy3PHVmnpAYmH7AMBtXjUUDDqyuKcoSYma1Pb9uxeHFo8MiUVt1bu2vj3J9QjG",
  "key18": "5dNuTainpvPLu7rjcT2GZLNCjhUy4WGuSLpaPScTL4kTSAUZuFaHpAvnFhpv8GrNbf66cvDDcBEysBhkCLmQqXoG",
  "key19": "5fAnMbte7cPKeBD26nyP4ZiD1ffa6gCx123aLSEteiut2a1FNozXCemNcuPLzjqaDPDJGGNZo1NT2AFaNEHnUFZy",
  "key20": "2kTtxy6R6XKdESY9Lt4mx36SEp8dhiNkrqNWyg6zSrLv26LATYvfcadj3UtpxqnsrpkoYpUHPdsy6cqKj8noqr4f",
  "key21": "2XEPBGyUwWeEd3ixEwv5QLpAp37RNM3tXgkpoETeyoXTUUdWRf5XyzBGXvywn6RhfhSKGHD4GNFz8yMmootpPGmy",
  "key22": "PspLTMZg2Kh5ShkgKUg3Y4UEXvz1pqHirkT4K9oSkXEW4dD5QF3tMnksuS2x2NyPHp8sU7E6nkRF9us52FcvoZk",
  "key23": "3ZjNEfxWR5bviJN35VGvrfHRNjCtLyY1CfhzhsXoqDeKs77XQSSYe1peCvVhxY4MDXCHbswdsRHCvpWRFNgqhc4D",
  "key24": "665ie4cFCEKEBYf7s94a3XrgXPoKzPvBtEtyxpmsqzK9z8thu9fW41RLu7Cx8yk4aHUEDo6d6BWpRSSTw3Ut6jkc"
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
