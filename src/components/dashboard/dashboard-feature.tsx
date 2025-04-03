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
    "2WaTZaKH5c13axvTezTEqdJkD7uiDRqJhXpHek3CQ3tERydcvQusx1bRfutxYA4gR1UAxdGtUMCj6QkyNUqf7wwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Ex1yaPQZrwzgYPRgTUo6n2mMrCYpA3dnz2fLjckzsqqRgPTE4ymBdnbf5FPvDcqKae3UKqjR2NXBh5z7Tkwo9g",
  "key1": "3TU1mrKBbqhaTv41vLcBATfpETf5LNmWPZir89safL1C1ThzMEEoeXSFY4qkW2euYRXizHrLpVwKrjV7uSAH589S",
  "key2": "Tpz9pCPZ3kNxMpUitqw1D7zsZmrd6WrAZ5iNz1RWzCsUnLvNdCA7515BbFCHuYU1FDPJoDT5Ppmrgw9JxPZnHPs",
  "key3": "5bFDPtuADfJxbWcFhEKdyJK3XAgb2dGD8xwfRxDsV4fB2nR7HQgZnBX87m6oEnefh9dQgEyfYHK55D1fKKFu8CNU",
  "key4": "4t2XP9MVAbkaeC2iUKGpTQ2Nwhg4RWFsusJkHD4C61NX5vioZggGwHz9KCXmpEveTTZAMDmCJsusjsw5r8xxS9xE",
  "key5": "4J1227A9bAPmTz8mYuuT7dccEmY5AFjnajmrmfCFUGuR7oprj4vMjXBGGLeWphsHXGmV4bgQiHkJFfCktVfWX5ss",
  "key6": "5sbRotQy6MHweRvKW2sEy95Hgjcs24LJyqymBScgTXmbZPKtMZ73zZncn7GvrG2G9DiTZJMe9ATmnf8uXZ6GsRbY",
  "key7": "57QNHnYeoXXxUNLshDRLwN9mSPTMUka2T3tkZTvWdaynmTwfw7o3NeZK6UngFaJ7XtJKPvAJ17aQtwoQe8zNGsoP",
  "key8": "gYcw6sizP6EjNLbAg1JxKezg6pL5whLCZwoipgAinmv12BwvySdu2YARNsZ3hcs4Gd2J8c4R1LMPAeYpSSLvLvv",
  "key9": "2gyPm7pwG2dKqB2APrqEZ5z1AKq2ZYTpueYWTe8H2QrWpJMCBHjGsMkKNdW1GeDUx2zi9szGAimxifBTmsSk8WAk",
  "key10": "VDj4BDySf1Xm8k1iqmZqX9Apn3fR4ipU3CKTW5vHWn8PvsbvYbJUp91PmS1myzt8uryyJeQg1eBCQMVUQc5oyP2",
  "key11": "nrGBcXdqgiqEgKvbKzYe3HiNMGzdFPv83TtpVnNmeTTLiWg8eQScQm1wt84m4CuVk45diKzJTjYzTdUJmp31QZz",
  "key12": "iX2jch2p8BsmFkErJheby1XZKu5C6R3sHttWU5c8VWRCeu4QqgwhxfsuRxRkrd9pLfChBzmofQC438naHVLK1JH",
  "key13": "4AyqmMdQsHKfEYNRXSy1Zgmyq42hDRx2WCvNwggwCyiXXmkrjv9we42syQU7ZSsy3ZpmBGPfmdfcinazxRPuTvqf",
  "key14": "3qKvSoP2uhbuABZJ2Yki1spNz4sMhPLDqcFingsg5HoXA4wFU24Rcu11v9Vv7rFqHUhLyoupXR5NTf2oyNqxeJy",
  "key15": "2fJhFEZjX2P7Ku8cvvTFJZm9nj6GKmGUSgdUnynsnNE4PB46XKhU7NavdWCmGaJnQWKjF2fqifTLEBX8vPqqbYth",
  "key16": "2GtD7RwgH8ngq8PpQh9hFWHNFbD3n4ycKctVk6VHbrtA4T3duJnUSpAaHEUzNuTfgwY1jhD1H14QzbZ2tDiZZQnH",
  "key17": "598yR7ne8XKFbcwEAyduS915D1g2LDj699rheu2gJ7SsVmobnJ4CaeYDBVR44QdJewkuBzp677MpAiiGgtD59qVX",
  "key18": "3yYnuYG7MT52KCAixDz2sgdYntEtxeXmMRvWvsLqz1CAFzNJgn4Zuygeg2CaJ83NbSVb4NH8ikukTP5CSC1DXKHu",
  "key19": "62zQughUQifPHY6ZP18hKsvobLkKjeraSaMHeoRpZo2twtALREPH5VytefAYbpPssJZiXVFdFfYEQysgLxtsEcRj",
  "key20": "4cKocsPK6MgQRRrUNFKgrJh3qg656WXKLGBcpPNov96LM8pYkb6qq9o1bQ43b6FbJnPEwUztaayFRdizM9YEiyy",
  "key21": "5GjG4pGouioTjaeBu9u9zmroNRWrQq88UEPztpHYbjXRfrxqaV36mRJK9vt7iXuL7JzMvAyt9PRtrvRnTM9pcxD",
  "key22": "39xHNr5nEr6TjXDWFAp77pmsiF4UScoyQYE9ZKyvWP6TXViH1ERHRCKiY1VedLjV8Sq8u36ShVbnYP7548qGjmRH",
  "key23": "2b6hB4cN7CKtTLBwf5k16MP56TB8htPGmApePRpPM1j6V4thZ6uL6oYsFuns2hqgbRX9eEGHdLrrwUwHbr1QdmZ2",
  "key24": "5yydGxNuYTVqL5RXPnuVK6EuFZj327B6n53xn1Nfab5kYfpjDkJJ56HbQ5zBD8y3ipGzPKzvvBcsseA8s9VrXQzv",
  "key25": "3qcjXHYyxbuZU492KrxKmHPZiGKr6vi8nwoKxoAR2i81a5njG95aM6Bui43u2vsM7ezrpHSzuwVnyczh9pUypVz5"
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
