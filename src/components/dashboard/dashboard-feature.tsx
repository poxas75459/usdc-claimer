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
    "RqmALmN1yyAbo9UPFaUsBRKcuy4TzvGfch8Ve16nwBkqs1LGc7W35nbm91eEgu3GpSnPvfv4hHy9vq1SZXxJp8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v2DpKPfGM37WmE1VpA6gMTZVqy3k7ShpwME7iaaWrNGQTVhZ6RPqtzJarUo7HuWJKLysgproTkUwMsWuvJrxTcA",
  "key1": "25kMFBXbrj5cbMtErkpoEqgxv4wout7cDRLcURr6eoh7zrjqg9Dhe1VNFvrbyXmtePQXMn3GfSSmJqvBtyiHtK12",
  "key2": "64E33eUAPAo1EDrvVidN88oSBcXtaMYUqEZJ9Z62bnPHdCsoiaCTLtY7FEeEoZhav3owzrybVdCqJpRtmLVfrhHD",
  "key3": "2HPbvTD9f5Qtso6Bz5u1fP3EEZcMnEBZpbvGpLXtvWVgXBPeUubmwmE4N84QmisGJ9jN3B43haHir2ZbcWgZN6fz",
  "key4": "2WStFZ3jqCprP5gQTXn14UNqo9KzjweU6YGtwcM4aeMG77JxVFzBJkaBJiySNsySeWoDiDpJGBufMG6UckKCXgSc",
  "key5": "2ux5pGFuZT44MudHdnSJVNH91hGqnxEz7psNjm3TqxeGjySdnYhLXCb5bqh6eZXWoL2ttekRh5KTJjhZA2NaxkvD",
  "key6": "4EWUeapFxQ2YNezAtPLgYkfb9wc9tM19QsLeesx2E6bZkn3QDnVTsbWKZWcMfetk3dGiFHApXgu5ri2LQWmmaFAJ",
  "key7": "rQDwMf7Bz1CKxo6871PGGHfJa4s73J1BWgej1psNupa4x4KSxiwq3gyPgRMQKqvC7JfJiFoqQPmV2YMoVGjjRoQ",
  "key8": "3fCt4rf5uGgdDCB59YfWwXpZA31MTc34dW7giRA2KSnVGmth4siPx466YwiMnzjso4Sa5BNpVmBT2ToazeAhCPPK",
  "key9": "5xbVAfJ6hS3GgTeJWm4juKkQufyj3UH9pMFRWE5JtvsCus4Tz2bW1CbD7P8Ja42ECj3go6sWdWyoDdeVKQrLnwKz",
  "key10": "5qGSBKmVExRzjK44xFZaYADG8DS2STayzFexW2on7yoPSbTEHmrDom6x9aCVehoNgWbxmmF7L2tZQB3Ybz9Unpoc",
  "key11": "4sA1qPN1rkUAKjWJKUx5EgR6kuCgaQnWxRvrRqmEfmDNKxbEVaqUzpcmyYJGRqRVgqRZMrFCaZq5bksaoqt8HMAu",
  "key12": "4QefjCkxoTtrL9xYv78aSFWoMv4ZQEMAjmrXZ7wwu49zCTQZCUGKbBxgoGCXfaLHmFoFPoDeZppuzaqBMSKbYcGq",
  "key13": "2g96ScRqHszqRLH1S87CyrG2abatEmjYYVHQj1L1xWEfWRvRi1hQT1R6k3dqtsbUdJFvUxZiXSp1fdvsco5eZHad",
  "key14": "5Fc5rXBTWxKqLrYmwW9JqL8sxiTYk1GUGoQJFUM2rNApf4CJXBhJVcTRboFf9H4kiEHQXJ2EXPBmZScXHmtNzXKV",
  "key15": "3uxs3HCJF5ZZf6xHWqhsF8JR9NDWHsJ4QthZTCVzp3c6S3ud4vE15MQH1zUTYZdugGpewhLB8gUKEaUS8SwTZbyN",
  "key16": "24nYFF6kT6B1wWTZUmieer3d7N9jWcHsbqwLxo2DYNwK3Ffu2uQtssLQLXeG6yB4nyQXH1bjueRc8hRBDs736Ngj",
  "key17": "21eLMX9bkQ1BHULHTJCnnYkZL1GSDCHGPC77H77C4PfZHcuupommTMBAPwk9wvKPw6Pc5ZgRxFJH8Lx5qTUs24vH",
  "key18": "yxHTS6dY7qAEMwimJ3SXKnzEvbVPD7ehaMdCSYYtoKnh2dJSL5YbUXkDZwadp1shLAQkePrCUJZUjNQxiY1jQ37",
  "key19": "38E7tKanqqM35FnxHuW9n7QHtZV8mH1fThhLCihSWJYD5myRYowjMWmzuYsGjqc8CkhDiDQTkpgwDJnYYF1JArBz",
  "key20": "5KKAkgjnGZMCMQt8UzVDwyygvxKNgAp45GZyVg8tJsuZQBQhSeMTZgbwUDUqWw73W1B1TYXHTcH68BpxR6dXuBCQ",
  "key21": "52VhJcAnHNNpMrhHPer6B1XbXb2YhAZTtsdhuDifbqFAfPXyHtkXVQxmWbgDuVXiBth7ucXpQ3iKrg8Sqa1Pfkdh",
  "key22": "5VQUmw2SE4xRFzN8aY94zJGaEsC2C3iFojt3RANbfJuNwmg8twBfJnWGY2nudcmEcJgMAW5cJXndX5EjC7q42wc8",
  "key23": "22DLjcJ6dHGimSmbJm1atDEbhjAiy619c1ZeQKxgZL7s5h5MjZp29FyRb3QbhryYyErbemyqiwvYWdVzTiTM2sPN",
  "key24": "3M58bnyWaZ4gcjWsprmkDVFDtV7aG59fNu6cTZsPfMRwmuEi6oxAFTmh9LvvBVM94dsGSWAeUncqsJUdGyZNWVkE",
  "key25": "3QRmYE3PGchc4fSzSHZtCByPXDhoToyMFXv31wUMCqX2jdcY6bgNrabyYVbB56VELfvj3Gy1uRg2cNmhfPJRcxVq",
  "key26": "RATmyM6nSiXthVyuDLBXMuzhkBDZavM9B5aJWHs5DfFKC8azipBE2EDYxe2vrdfPH5w5dEHJt5MTywX5K1E9e42"
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
