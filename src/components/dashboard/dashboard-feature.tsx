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
    "5hDsbLLeRYC3G6FJBauX3ecTtg2QNeHHoC4jnFth8AvHfzf2qfb2GP7apRHuYJiVVnmJxYAKJz8WqHU9u3wzWruY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bt3ZCbJo9B5oeoMxPtNf8WL7nqWxxxQRZHNXw35kPaSNzAXCRgKoqEATH7cfAmLprsVPT1ZM5kBf733tuQwXvXW",
  "key1": "3Gs89Sj3Mg8cPYkSBqS93EgwMtFxUAui5QaieHM7JzbHs4ctqTjhAWcbMr9rbdair5GGHVZPKfRMmcRtv25X3NFv",
  "key2": "5QD98fvQ5NHnNiePWUoSKUUhqW3Vjqh5pUS5gfsWdaPv6EZpni8QeDs5b5UtwCfyRstfTXN76Dtt4JBrgFB75hKe",
  "key3": "4KkAzrwJ23qKGKLeEDM5ULJEzQRX7turDGVBzxmVb5Rhkeo5byzqvneCEVXJUpMtik33kQtYJ7hdbTpvxpxzZ4W7",
  "key4": "4TRCdaoVLrYiuavAjnz1UtHmvNUh8R8jhjAWFTKnzYMTJeBxrerLsup1PckzfM9chjJWyxpc1UW4pBLUadxnHWL8",
  "key5": "5Rgtsstaa7PbjhfmjRhouJW7uGyynBxkz2HU2go74LhPm1pbCHA8RRXkctBJkfUUDqXBvJ7PPfpG2b1nRFqi1xgr",
  "key6": "2krFJY8EvER2MAbPznAWNUEeK3t5CrfwCT7VWdf1QuVguaYR7wdEpSgmxobRQ51CMZppoHAQyMQBZpaYSc7aRtWL",
  "key7": "3jxbZNxhzwmxmd8pGdoJ2E1MjNc1VxqEd1ZGCjdTiXCaf7DtbQthEtTjv3kwpQsWD7qkn6r9vo178DUXdrdGHFt",
  "key8": "2c9S8D4vMPCGs7jyFYYLox65zEhjgCVJirXvDH2J77WmcPC5gwGFH99dGTcjAiy5zXk2SSu3kAbSgQ9boAsMu1ry",
  "key9": "3BMywrGokdTY6LGoCeVieRRC5CfjTFH7zsawamabc641Ne8AQ13jFqXDr5i2ginrKbvQDvDwGB2vJok2LYUYtxBC",
  "key10": "2anowyXgdi1RhpM6SoZQg3JggDn7XJafKv9jKPEbsxd9bPezDKBULE3GFDAM7hmfV5RuVxCWEDC7VwGKNESojRhy",
  "key11": "3p5WSxFPTnqWgwvCYYimdQxv8QkSTHSPz7xqX6nTsf6JcuBDjAcn1uBqCp2zWZbCP1igSGA9XhU13PfQW9DTSYLT",
  "key12": "4KLSbjY9CDJbcbtRQMqpRXfooNhw2ie3rvEkFXyc7327GnTyTRgiNu87SQCYDdStP6H4x6V42rfx2VXdJXVSNRUB",
  "key13": "2LMngSsEs4AckF9SDqHypEHuHfudivyshbeKMnSo2scUQ6fY4wbri3EkjKMvHMAGtNadh5wbCNjKY8w3NSuqL3g6",
  "key14": "2HEuEnUg31anG5oQXL9ea4ARVoG6U4L6omxfeRijcQfUaHrbYfBj2DAq3VGhQfEtaR5kHLvLiynAjSfcs1epGfgH",
  "key15": "Kje9dwMt4EUFJN4Syw1ffuGKKfC9bQXG9rNc1mtvyt8YBXDHzjCMRcbPFGMbEekTTatxrxmoVTdjrmmhKF6kryD",
  "key16": "3oCzQRcYE2Wq7RTiLXcVu372MqjTJczM4J5RTaNsYw17UqAShcA1G6usLNjyBJm63QzwjfNpB9dPso29BfuXGTWn",
  "key17": "2CqhZYxnCWrQ4f99qHeTXCry8yATM5HGB2dizWJnYcWZphMDxGTdPRAwRfHmJB8uex3XzZQzLBaQDsEWh8vyaSMA",
  "key18": "sC2ADPgNoEXm6rJzri1ZVYcgZrBrnXTM1nYDTDLUkdZNyGTnCMxw6eCfqXgN5FJrfH84ik4Nd8b3Vhs6TafC6rV",
  "key19": "kp8ZDpLPREhvCZa3CYnduuvL7g6cWBujELNbsGgbbVAXy5JC2pe3gqMucoURbviBrKeJ4ofRS9n5dsTNtXEjL6T",
  "key20": "41ZLeKsAsWNZQfPcB35zVU1s82jEQV3DRFsx2dCoSj197qN25JD6DZenN8M1NnarLCqKzrQxzzy1GW5AQLvFuj4c",
  "key21": "59BBy9o8G8XNMmzZ6PJyEmq93x4zY46iWPLoGnFcutqvHPPLaGuEZ5uYTPLRMvJRgGczp2SwWzkj7xnvfHcy6JJo",
  "key22": "34XSuAaBn8eiKoEouz4W5H6Dot9AW3ZBcAZ7TKYMf23t4jHGHihiAWkSSyNWF71Fx4HAcUSnPLYXeTp7UYC3dDbt",
  "key23": "4S4zX1aagoVUG44MMitd9RGuqyrkYKvqrb8QCPxb774Fj2JBkR1vii33ytFoZQYQPA9VQqHCiwhMXh6ZzgFUnb8A",
  "key24": "4EpHqk3RXKzLSDAVdqdXfMUmNPXVuE5H7aYZVt7iBSt2jQKadEkN4XTmWS5LkH1DdhKgdvxjsVmW7XHP1WSF2nd1"
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
