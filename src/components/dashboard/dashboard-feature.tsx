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
    "9TBMGyGzskjvzDfyJ2xf1My9X5xDfF7Z8M2RbrsyxG8yE8JyrSqGkHBfPK1GEWEGLVVVrqpHEEsaoYmWf6ZWBm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WBqHmw7PUQzM2DgP1LD8ShRPpzffDZ9crvV6Qk79rPEJeMifvB1JHQecNeA6fg71bqWKu7abV97u2uKQDJmhFx1",
  "key1": "5BuuUCduCtk6EUe19ZGSYWLtr4XFzyoLLacfUqBbbQaES52MoKcumHiSw6GKMDcuV5kfxYKPzTFz3ShrXvdmMynZ",
  "key2": "4tRvkFzM9wQ5DrAyjyCnjkPL2ErUe6dApNZxMYPHRXAm4YqXiea18ZAwo7U24kbHHbBPeDFN7kXv9a1xqRSsjqdY",
  "key3": "4KtUuRRmuA3bnppPE53wfd2Y9wMmi6e3HEnTWz26zNQEvLTqWbBP9ir8f5mcwaPnfNBoRDxRSErjw8nPVjQD3wii",
  "key4": "2BsJALH6ANmSmWXTEeoJUc2FNDbsUejyC5iJxiVpWvSN25dc9miDmwnSqgiBCeAq3SKxQKdjJ53HoiZYDh4gDpMv",
  "key5": "2e1cARakzyb1H9oR2bESJeumMMaJ8tjPy1NCWo65CSU6UJcmJDAsWaGuxwMr6yBFFiZSygmcckCVGkZpfvWh3edK",
  "key6": "3xT3sQhsyviVprExFL51rNPmQ84B5FrqWhZLW49RRWZaxKsQWutR7CHpWeJ1hSQTz8RZE4LXKNQo3Z9EwFSpNZTQ",
  "key7": "5vqCDYdMWhrJNXzPKD8nvd15hxgp5sBjcMg5fCvixABZg3eBV9SLzQUcPUuno6WjYrBkh8WwcefGE3vCE6mvcC9G",
  "key8": "AC78pL6n8xSnfxX8gxXQ9hcK6gfYLuUqk9oeAPWw7KCgQExYw4JD9w9VeuUa4j7ipSQxTcCeN3jDzAnvXJtSjCD",
  "key9": "2LdVkUVMmCzNVtVcsrGhGDDLPszJUCLb6JRA4V5r31nEe14GzpJNXmqBkoFdJHY4f9xfMf4eZRPvoMBKyhKAk5MR",
  "key10": "3H9PekuSQ3pfe1gD5BtZrAms957me4e4qptovr38tuyPedr8frkkwgrFxW6zc7c74f7AuKM2Ng13kuWFR93kHcqa",
  "key11": "5DB8e7veESJ1gEpLHcauwrWRRgf2etewKb5jCdHBGXXQ7sQ6CyHUe7bAK6RDoW466PScfa43T6YQDGPJFQHoSCCo",
  "key12": "3EvWNbyPSovuDYo1bkso5mdkRpQXbZUFkhWKmVxmnmBuPhzFxFEFpSMuFTznHq3zjeKbVorfvQGE8Jqxb7Huv8KT",
  "key13": "M5hPZsXPSxgp1QND9Mvmx46dmaptahMrQKjC1hVkqmY4bp5TsgebXH6vpJD73Gpaw3yVoyJMh4Gg3whiXgpyDKZ",
  "key14": "njfHJ7hAACdVsNtGrLagS8VNCFwtV9NwTxoXcgbKYf27pLrA1hpVWMQiE75XfLNkNBNABj8pET6MHkoJpFQm4mw",
  "key15": "57gEiSrQfyPc3Zsw6G38YLbuTHkr3xQEBFoytFvuem9j79Sf5f9byLiAgbFQnmi4Y5n81HTUKZD3K2VdebN7xnqj",
  "key16": "5EETsteDfALCDqzc52T9oEN6NrXFou9E37N65QKRaHG99ZE5BSicuTHk9uYa6uZtEV51uVNXAGEEeCZm5gX3R9jF",
  "key17": "5iKFKYC6EpNNAMxnbqbGdmrYJeBJsRgeTFH1VpLB1EvNm8TLGf4Jd3CmhSakUUAmGWEotPCUMSEca6QaSRfecmM4",
  "key18": "2rvXc7YaLFp3GDk8qcDM57e4rhB3c9qjej4h32ovGuMGWv7amVbHdEeGpRsmBy3fx4wEDwFRmtQo2KMyiDDvn4B2",
  "key19": "5tfvfxYngncq7SXrdzwg9SuCwcAnmwkVbVjBicyioSdEBwkW8PTPA1Fex4oPd9k4x9h8f5Jh9M87ciLJWKj8LzhV",
  "key20": "5E45ZDgAA8iwK2xMdWCTNZtShkFCtA6Aw5A3P3wL1BVK8HFXWVxXV4PP4t3ULnntnbp4nCgXWXGXMBCLDQqi3PJ7",
  "key21": "215Dcd2xfr9r9RNasn1DYzpu4yueTbGyYrJeGYATYR623xdBaETJgzWFLMS1MexCnvb1H31JxjWwJABN2hHKPkCo",
  "key22": "26SHqFjqSbsyAuj1SjCtzZpX6VtJk5fS6Pb34tbvynV1cvCgqEmCmsMk24NbmNqcE1AMYbZovzcKSUKmAdzoeRK9",
  "key23": "4pRFyGWpLojpDwCvLAM3gjnfGUsYsW4hgPp7tx4Sb8ZRRG4ufbcrcLDaEzUr8ja3Y1NwDZ7kS8EgEXZntZSJhEDt",
  "key24": "34sBw4tRrzhpX6DdZKBHtrYXhUpU5TYUfAnRaUjUu2wiSzU31kYWkJYcWbLKyRgxHazoUxnbihFd8Lfyomv5rYQF",
  "key25": "5CaFD1xcU4Edawm5YmGtU8dkFCU1fndrds8SjauGECCXwLJnPyApUxk6smfrZ16BBpvR9tn684EFuFxWCBKyJdef",
  "key26": "xRCx7Fed38QZidvxau42hLEdWpNZ6HUpvpSzzZcpv6xyuidHG1NUo1hxK1Tss7GkzKP6tzUWAb7kdpSw1noHHHH",
  "key27": "2ocYa5jV4LWfSseU4tQCkoZd1wxF5y5xzcQQfWHvZtL9HZkDbWRj4baMgnJec91indBZDvjYHDaqzemLoQvbXWC8",
  "key28": "2EdwmjJXWqb6WhZeBfnNbb1h6QDmDtQrybTYRDYi4ippRvADeSAEyrvPd3qoJfwHDBWM9YDg6RALfukKxPhFQkSW",
  "key29": "5UAaCrRAo3t9gGo1qLMens9nYEivajHYnxsyK1Bk9a5pE8yw1wdx1GaMzrXE64YixJfa59oPAd6YujJoBnawKop1",
  "key30": "3dkL7rdjdoJGPk7GtRhsXzXSM9DSiTGHeHkHNrFEYHryMy2BptSsD1zqA8wDnsqj9CBk5tFuzEEqs7atzAMdhiE2"
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
