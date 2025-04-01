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
    "4tisEVm6pLsxobxN26j7njbZfLkPDsHMDgt7kEQYZhnpxcJkEd1Q7KFUiJ39eK173mFP212Ur82bjc3WRSHAYb5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52WjCPUiwnpkFJXfyUQAjjgrEifU871Ty9nCrUY1opMHNNiwVQXPQDdf5AgUXzvybgmMsB28Bwah5yA7nZYWojqv",
  "key1": "45XsfMsUJ1H9HXjePtqNABQPgp2Qu3V3gvGJiXmWHpkJ2sV9cewxRTR7ytxuzNXAC299WqEtD79563X4iedov3zP",
  "key2": "VZCv16iEgyQgxRjL511TQSxaBPZzreoB8UzjXSEcLnKERz7GeNw127XjukWmdWA9zY9Ntq6gM2CHpcXBRERngab",
  "key3": "fLvi4xBHWt6MhbSC8vR9s2S5BjfniiaWKU47Zx64P9WGx95Wxzt3cCVYiJSYCGDjQ8jvR1j83UVbPqmqJymMSQW",
  "key4": "2umucxUCjGppjV2VvdhVg8Bm3SR4Lh4EWnBYCLAzophxHEoc417d2U37GHqxbv6qnLjeKPedicBqFu3hmsmDKpAu",
  "key5": "548VufaWRizCT1KuWnp3uvPuCxA4n8PMvuUY4tLMaL9f5FfsuZkizcPP7TgT4dMESFFu2PGogQQTkqvHQYR8FPuc",
  "key6": "5uwyhCDQREmYqaUBikKTtdTrwsXRBeBmgLFCLndVECHJZcfzx4W1rHL6qnBtbhcrFWwtSUf1dcQthRECHPpwe49A",
  "key7": "45A8CmdbR4DK5HXftHfguL7MSCoZcBJUdbiZGxwEKTXmkvWXxKoiZKpU5pDehJovfa4mpruh1DwGDg6U6v7KjNX9",
  "key8": "3p7j5HdTRYNKk3iCH5d43UKpwp9ijpCsTxeFhUQUBUCMfwQ8HrGF75eL649qCFJaiTKYjKzfHggMuDRQs7WHDB4a",
  "key9": "3cyGJtSQ6VxYXJgzxbV53QZWJTKBZ4ohmYVDoWdgJMy8GQFaW2QCz3WjXwUGU5ZLfAqBKZKngf1H1sNX6RQX5uHc",
  "key10": "DygL35iQApWkcdYoauRQ1zLd6FQgR1M3ycuGryjjZYLPojnzhxjfANGfKa7ryVYALJHRcepZNnQLkx1c9XaBKpP",
  "key11": "2PzrcSrdwJm3h1PVozuFEk16BzZYB2t8HWZREhYRp4c54h9ShH8KRc5RGje31PTcHf66Q6aH38XCyh4S2x1oVmKz",
  "key12": "3xAhqjNy7n6AmtVew3expZzEeTQ2pRNdwbVg1RUJhoCTEZzjQJSMGRHEM3HkseGauuBGSF6L8bUTkq6aZAMzTEv1",
  "key13": "2yQrYeEZkv4euxRkUeEodHJcfXeyXTUbbMGxXEUVTKBKpTsDazCCFQEbqvrXBtqxZ3W2t4f3nn8VVPcCUczVVdu2",
  "key14": "3W1GWAtpztXiAJr83wzi52BuiSrN5iideDjWsp1pkfARSbUBeGWFHhxuxTLMnv8HzLmrPKeL25Z4tjZY15UZjrDC",
  "key15": "5NgY1nhmK8EiWm7gtHu99vHJnud865bZXrTU2psXT53gYFXEwrcYo64rmgZM7arpfx54Mv48pHDawtzRFnXRhcMb",
  "key16": "LWF9v8QAP1nwa4uPnHTV3v4wDKANNbucitgtQ2HZTK61CRrZnfFHkALjNfPTLdmyXyN4hVbrAx1mXieLJdvLhYJ",
  "key17": "2sSMaRJtnoyn6LAzPBLzcrLf1tr8qkFkSkF1TWd4RDnd1FLyV1fjcreS2kv9YVCuT74fZSMbAnhGwn4P2V7VgyE4",
  "key18": "4M5CedbpdA9ffVDBcq8XNg1sR5xoMEEiBdgv8jKgVfcS5ZTcD84xZiCPe6dYnXwCDixNaBrY23h3ZR1xmJWX79mW",
  "key19": "3oBv5nU8onG9enQfXXAtH7WizRgwTCKup2yuGA8iAhmL2YAmTZCMDJaih2P7ETrPJKnLQzHpyqPm49U7kPBgrwmC",
  "key20": "AgxXDBCJ6rpHRSxSMxMbXUoTfxJvCUzNHFC24iT2eEff22gVkhm1hcs9S7K5UufCUM8kGHEsEAN4BTW7m1aWNav",
  "key21": "5vwuWZMgP3CozmygDWHPux6urrw1ETkFoDaisPtRSK2S1uxQ42UFbzqdPCJ89kZ3dqgFaMgMjDPiDHqBh8hpK4GP",
  "key22": "annCpTSojrTxd7pkQian5vCGcPSefyxBwP4wDnJQZYbZY9URbpxXjafZFwwdnkZsydoQ2t7UtfrJF1DSJWs42tN",
  "key23": "5ZzPeAH7G9nMAy1W7YLQtCw2uKQaXnhZjb5X8qzR4cSz8YLL7bhQgc3btX5eQUWGrg2q2apiq6UWa8SYbdYJEtzB",
  "key24": "4qTeNLMxpyb9AJC43LLDH21YEVU5NDbWpnw87yM3y75doE9mP9hmLv1juiQERctR2tBZGLNDHcVwmVRSWS8xVCMc",
  "key25": "3ePf164mgUGRQox8XfPS8gKUegYj4Zm5UbSJyzBv4AWM8jRoiyC6QPA8kDiv5YKsY1TYSG6kg5gQFTcCSxFfptb7",
  "key26": "3c48Qqe67ReCKpakpyKqdysw5oX5rsQQfpYYMs8rm7mAnitfg1R21AJNoc8ex16fTeSFoRGSHcNogCikCX7bqDPF",
  "key27": "S4sYBju7LBaN91Vai55Xw5LqNxWtQT65axbmUVPP3U4WutcA9488zS1jmPn7L575eGC1pigCs1B8ewdChkzcUHH"
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
