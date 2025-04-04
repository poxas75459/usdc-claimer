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
    "4uKFkqjGKKjKygdmZdqPuFTkEtVhYjp59VeoZjGM9BM3Z4GmLEucSu7MWciMhMMMjXXJyXo6dE7RWRzBWjKa3kUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KzNcVP1VMsynoUf2iw52DoY7VLZbWM5aYFBsb63QaftS6kzkWFqT5FKUq5ZhunkWXpDmmgKUdMUeDTRWwamiGmv",
  "key1": "2BAkeoNcmgN1EvfptDoBBhWJXRRgmLzjdSRjBEMX16ps4M5byJghwybKBwkUJAqUGjnoN9nJ47YaSkfEjVsmCtoV",
  "key2": "3GyLzWV9kf7Q3UnHA829JyHBJHgkfMd2oACvLgsG5Fk3MkLcWj69F3AkCHiPSK7dSN4LgVLAkNytAi1WtY2Ftn3M",
  "key3": "3x4NW14oqEHMYZB6QbNpQEaRDMTVcp6JKf9jt7QwrfML3H54p69n7L6i1yer74bGV3fipFqJayWSeKQeJ3twnkeF",
  "key4": "2YahejCeYZoN42n9fgwKDW76cVJ4DXKZYjAgFCzyWJNxo3uNwiUkjb7scrz8FjurtxkSEbnL2554Ea1296AcQ5uS",
  "key5": "5VsdescTyoJigbFsgRkgywUrHgvYn7MMUVs9Gy1ZJGKQ6sJPbKXz8e5unBRPWKuKmQoUmK2WRJ4VL3A3siaaWDKV",
  "key6": "3ceBKrxR5GZYKvrYbmFEJZWVhhZZn6q923bj6EM4JATu2KNhZKXZ3fEivEbmYN82CEKkaDqh1yaedB2AgEBPar6V",
  "key7": "5LPb9ode1FhN9kE5Vc9UR3JMsJkL1SuAvrk2hEFSGS3DDNtYiRnW6PYw9mWuoFMMUDa7W8Qi3Fk9eWaYB6SbqDm6",
  "key8": "3jTYqJXV6wjLYzg7Co2yZtH8uz7umEsrh28soAmVC6JvTdHhuqgsGaUm8XmSKWE1wJ1TpyTWgDdh81Hf1J14ahPY",
  "key9": "3Fa5BJTZmwAbgquoNfJVJuiNeNgjrb6ZxiwSLGChzAk5qqpWRQNETCYJ37msV6qVFW4bzKecNAimfPaDxW5uhKJB",
  "key10": "2PC2yFo4b5zrjyhMN5oavWo9ErBmMbLU2KiPtR799PeuTYaAt29simvRdQJ5hMwLhUK7uyzqfdRieTgL1Wj4SdEp",
  "key11": "2ohugV6agBynXaqYq3rgyvQsrbwo2mCkcNDWP3UWW1t6BoVfRv3PfrEHxaX5uw3SPEST3JqfBqQEkUDZXf1M4rAL",
  "key12": "axct7tFnyUACosMqTqEPxhJzW9jNBdvh9sozuExV89W9Pj8Mi3TY99DtLabTAMyH7JoFGziy9VFhpfXqCps7pQm",
  "key13": "2XLsRZhZd13HTzaYs9tDmR6xpM1QmtNUpueyve2r26mFm5TjinrcQrJg9HNe4wkrRM7AjYeRRtgdhka4rCzkrJQ2",
  "key14": "2VffdPYCqCqhJ54KKX4pZKZGH6bKNENuQHynKnmiTzYESgZ9Wg1FHeNHKebSDDQcWJmpd83bBZMRgPWwp26i9caj",
  "key15": "26oWxM8LUEyFyHxN1zVWghUVdMrRVbNkM8rdZnHD38GpAf52aaxKPsTM9kGDVYiSCoTWH8M5mKxKahmjB992Ba9W",
  "key16": "48rem1rCM12XpUjz84tLNCSzX6aXtRw6zsthZB2HfhLM2yjzGTH1VdmKBqsWXSb7qqMNYB95eLD9uFXhJAYPRnd3",
  "key17": "6zB7A7DfPsEz7ZSBAR4jau8zarXpEL1qUoLcTLj9rExnNujkshWxwf4ucPVpidFzpi8QHrSCLKG3VxCQU3fRVP7",
  "key18": "2VGLmNWLrveuwdkgQYhqVwGip8cZipwfHSiVutAsBRETZ8ZxvdHB5GQcyqTwRPu9eENjeQ3acmp4dPbCLFahKeZV",
  "key19": "3dB9MU1XNgge2vzyMWpwGtaDxFDQx7ZF6nNGv13EDPXWHVf5LsMmmEUcXmJbHtdEchQ9SwU2Mf1SLFrn5f4VKGdt",
  "key20": "2ioLqEdZZKhA2X32LaKLdV8bQGojNsWnBcVfLFj1KDYGJQHvizRG2i9W96Nw536SBqvkfPyoWAgDh8fvZK4wHke1",
  "key21": "5peiSQGVYxZWzoKomuzLrEdUscRy9fsJKYAmEQ76JJ8unKdhwj2gEBuRtx78zZX9vgB3cXroaMJTA8eDdG8knGeH",
  "key22": "nHmd86qmnqxGYzUYqQgBsRCtcg2V5NMykc3ZYGAy1CCw1snET2jKUpqW3ZcjT4LyGzinz4zYcFfHw7xeVoiG21f",
  "key23": "3z7pCUrwwzH7mfePFtbATDqLejkMasJENJEqwsxRkEFpVyTt7qfkBbZCK5pFC31uqDk5jTSGkXktkywnoBsqwLHV",
  "key24": "jetUHC2g5LR9Ss7Kfu11vZaZ7YXorK6CERNnhWVDZpKy481mwtA9onAtVCipNeTn5mYzGJvD4c9FCpUaF875rCE"
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
