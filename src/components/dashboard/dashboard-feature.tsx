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
    "wWVKaXRzKshMgB7biNHui26UpBfaoddhuu7NhRxGEYuyQPDmwUSwTv4XZUB66HgiSVGZm3EUxyadqjgjAHXX88t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B4e18NfsxWyL8sstDRq8MRjrJ3f3jbfPrUKDLeiDcm19yu9Q6eGQhymDxa51z3Vz8ZvYSwRKMbYKLkSFW5ywkKq",
  "key1": "5fV6aEyDUjyXx1mkECpdkjNrga9JgJ2z132GP5cKSPhYj2qQMQCioyrYJG3nw1ekpXY8ruqpPyoiYdymYCRsBX8X",
  "key2": "4w2oKn15bkPhv6EcMKWwbKnorqTremPba6pagukW2wofpRDHM7PpRrpa8gY8kCyrsVf9yMhhZQ3fAf2zfKBMEt2y",
  "key3": "58rxsixuWWQ48LrLKuttKBLjp2dVVL6KwVcsXw9EAptnPEkurxEZg1aGyyLDiiQxMbAZ6pj9mWvDAC8ap2iAC5tN",
  "key4": "euVDLsmnbe2xSxz9cB19NGs6S3TRZrCXsTLsHBXF96cX5keT6G8gYfDeKDQN3oeZmyUAkUmgCYmPRnEBQfqFcqa",
  "key5": "46d2tuEtFBGvboEWEnUeF6SEVWDGsqDfWhhJjSeTJMPYLyRP2AZYiQrLgxTsFZsnQDbESa3DreBiap5mpho1Rq6E",
  "key6": "4wJyaMHyuLdqXdNsQfm2Mf8aYAc1pSducjHdmeiFBKyPQFmC3PLcVrZSuH1L7aXAgkQZ7h9wYSVjWer345vCdrgP",
  "key7": "TWmsJ4H3Giaqqe2UJjne5KrSte9Yoou9tgmagNGq2pPRnPB12fSXnHPHBNyqJfY9Wr8iSzXH365YUKfnEJtsKF2",
  "key8": "4TmkVTFrA8v69Uzzu2BvFiv9LAd6heN6hxXLWuZRfPfnsj57XP3djZ8AReMGeSejQb8twCx67GV4wwQ3FG28iXyg",
  "key9": "47SnoVtMjPtSGyaA4BXY5RJuYppTLYm6FVxkyrupyKbusR9icjPJr4a3DB1JPeEvAYdvJGJzeEi3q4MUpZbmSGP",
  "key10": "2RiEhyjbqd8y2YNDGvXt9XrPrpVqpSviSLHdSBQWsK5ztiiQdBY1QD9BoeELbgbjg7hnwB5vNQCgt4bvZYnHUfWR",
  "key11": "3JSJt5mpDUWDqgoCdQ91FGjhdT7hTGVA4GqW6wW12ZQsrdRHvmQGCQCQ6w9gP9t9MyS598fDprGTbMWAPVhPL8Ps",
  "key12": "543f6p38QmEhABrmNgKtX6xNAtTt3asXCPcd6EbdMTqEg5dSThjLxuUQGY9JynKHEZxRXPJVi3BWNamwsMuBsTyM",
  "key13": "2RaLEFr8LFGG3Uh2a33EiC5knvu6NQzcSQjw8PyXhy91nnLP3fQbfqw52aHSCvYmB3z9m5GjPnxPgbdNGwNcfhf3",
  "key14": "3khAE2ZJdy9YAUsj8Ycp6gUUymGkRwmkkATX8tGjxsRMPzpQnaBynrZMxe3Ury4gYsDia5vPS5kBdFJRCYAySFrE",
  "key15": "2CHAQZUGNuDzdiShMXoV6mzgt9sJrC8pGYQKyqEAhnWteqj18jQXCXYuu5qj3jPo6mPFoJxpw8p7DcAgNzrtwxys",
  "key16": "5HNU2miKVECTjBEzq2kuNMizeCgWSu2D6wgGCjzP1fuD15bcqBiGq4kFMvUQfmaQLLJ7THSXbZnGBQ3SdT92rmX9",
  "key17": "5zpkCvbKg9E1yWJTfa79rZu79SpkUAL4T11LSToPG9AkkGRV356kuuFMZmzZm2F7qJy7rPASSY8bYCPCty8q2ufb",
  "key18": "4E4SjS7PU9ySKJZMbpbe4ebhBw37V8oGtMcZJGsvKJRwh2XcuvibxHLqkogAULSByQyZJx1AuU5ivVvAEUT6FdDA",
  "key19": "2aS8PWWAyvCgNMuxRnTvaVu7LfhLbEqgmNGFAD9mQ9fkyuEJPC4uiUTTa37oG7nDJuvo1c8JwgpBTVkFVUMsymNv",
  "key20": "2JDDZTGUieFSVbphGaUds3XrZP495HLa7h9RFZQX5iBtgM7s5mkaBf5Zwb1ZodHRsBe2aZCyUZtM1WpEXA8cTipv",
  "key21": "35631FH5w1VrLz7WEigUkP1HUjVphAbJnUvDx6FQTJN2JkGRzj21Lwdh9MwEgVfkzLMUv2dAiURD2GgLNAKbFsHs",
  "key22": "47RF3pZkn84ZuLevgUBW9AZuY4rDCdrX4QVzH7boSonxfk18b2rhTBkPnp3Mo9E71rzjpmrSWusVGsNVwtZWur78",
  "key23": "2AtKYxC9egz1D3BfX6XUHgGiVsXhnAnJketNsuQiXeizyxMc65wXGQUjmm9kxYd3AKPaYK54dSH6hgMrUnNUoGa",
  "key24": "4fGQcVYZu9rKuF3ona69iy9PrYVnryU8BShyMcRyewkTjvo4d5DThp8XgitCR4SsiaNZNfojpx7ahuBNEZTx3Q4r",
  "key25": "hMFXesSQKF6JAhuDhLfnzGUfvquZMTi3PYqpNbxfAqPECkdMDibxCWETYuHCPBFgK3a4ViXtwhyokkFivet9SZg",
  "key26": "3tNAhH9ou8Qky3PT7PYqrnV9nXcrVdWphEBPH3GgLkkCVTpYwjyWbNTRdpC44V4QgDUi9ygFKyp6kgeey7QB6yV7",
  "key27": "4CJ1RuBjpyMYvXui1Leat8aouUoz4NsfyjiEs9pz9KYQsrUjmEmK1Fz6zkTnMUshfPeCKGEDB7TSt1sFEjdbAuAq",
  "key28": "3igFGcu5t7ko2gnkM2NgkSEKe7X1sEJq5kwAsNQnyJmg1eqAQATQDhsZLmoWqDDLyF3qNogGCgBJHJ86bBvsfVrU",
  "key29": "3zc4313mXFpBttd5tcJ8ADzgGhFKC6r2whznhWYoTshtQnm7ktLTGth4Y3mVLdozeD2uegefQ9e9w6iWQtbJNzrq",
  "key30": "4wC1cucFHmRNWeCnY4Ha4FbPnSYjwzeb99DyC5ogejoKxNgDssoHQSZ4yVnhbLNEmawfvXqg6FCr4Rc3YeLZPpdc",
  "key31": "45kt4nkvSYcivPk1pKmUeapXchGRTKBJQFjYW46Sd44QNV2ncFJ5HVnd2xF1QN1RHzKAPqUMhjmunWW8M5ocAAfM"
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
