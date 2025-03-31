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
    "4pV28byEgNkQmMgtJnaFByrm91NPgDQvtghkdJhTaHN5stegkAFxKfj3mq8huJgAkvBt3gCygtstqECztPbcafi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uC7r8b9baKywxXRi5dW6fLi9qJ2sfiej92BUN9PeeF6gGyiY6fb2gZhAZtCwjubwA3cKJMJu4vPcUK4FsPFYw8g",
  "key1": "3uQ18pL1Co3zJu8BnH1EiPNtZVinsWJYh9HsN5CJieQFStczCZfwz7jNDzWkYtFs6UVF9YcceNwaYaepiQNSrUZY",
  "key2": "3wDSUWvQRF6ke8vFuDLeS3SdXsKCfdMs5BHFmCFQqdM4mSmjrA3CTZekwzJZ3g4sH3qggAHkGB7hAQuMXTxw7B6y",
  "key3": "2XGGHYaGQYUUEpkMfY1hRVP6WT7butumgEMNKrirFaaBmKcnNa39YWbugzpQM2TUmgCf2J8KhrLCBMV7fjYyL9DQ",
  "key4": "2JM7dX3mZJ78tcVH6hAsngz4XD1yp3SR7HSmX823kPNnx6jkqGSxVk5aNCdDnf8c8Wy7G8MMrvXmkM6phzWVWByb",
  "key5": "2o8hJoj5VkY63vfXAri9MCSyWV96zhcVwFUZF6d8htCFyPqdFWeG3bNAkpkXQrZJRdULnNHRa66dgfUvFdqBUWbM",
  "key6": "nRvpHmdPZawA5s5KCqK4xYpB9EXhx8AwZRKRKFZPV6W86nBe9dKqodzg7wvME3tjNgnm9xpTEB3ebiro9zpFTep",
  "key7": "2NLjCUmaJccoGCbPX9L1faeSCRJXjFP4HkYx8Lb3nQgoAXUoDMBiDMCinPpKfG75KRYREeZS1AhkqAsarU849eEw",
  "key8": "1qYdhwQ3r7FSwet98Rpbs8nUyVNpXR4SRCCxekhejGG3hgqA6U5opdZiQ26sqabr8bxgSSs7YB1pxxU5mefEZoP",
  "key9": "4Yh7NWm3jyDhEAbeizgF1V9eYCoBibkyyYudBFLPwkEfjmaweX9hN9DoRmKv5xNd6rm5hQKgvyasqF1SjqGyLH8J",
  "key10": "421RZJdcTA9jLHJbECBsBg8N4j4smRSxkpd9gLSUEufp1ZTeFgYHBsbWLaFqtKfZMxjNF5rTFMMjjA2eZG7io72R",
  "key11": "24761EEUJ3jsHbJUdcw3ZhjBTRiSd4gd1Ts4bNdqGVXssmqqCALrn2NLwQBjnmhnyAm3QZJAUahzq6BKgKU2zVM8",
  "key12": "53fdM96NfYHuxhJLBQRk2h3gHQVQSUGjXDQg7B3h3iwyDKsa4NfhaStyzovVeeC61dLrst7diQ58kse43vNtYD7J",
  "key13": "3aP7gmkThQHqjtqHfg3BEnSUGADgn1ncVaQKjRFkd9D3ERddZu9oLcGWVwg1G84aLYWYZLdS94QuLRfEc6Ui57qA",
  "key14": "G2fRG5hxhPZAbsY6D4hjkybehvhA25oj55h2sNJs8S2Kba8um6SEzG4vAFkv4jBFkrhNpcPuo9sdtNqv17Hj3BW",
  "key15": "26W7s5UgE9dAF8uXvqcukmMi7PEarTLnBDkan4a1tYwYnXnBAzc4JzGc7MdEtJ7Cw1AJX3JyWHn4yW66bFGMh2ES",
  "key16": "SwTWKvm6dE62ZGamGRdH19rH2QRSVsroucWk2cYVC64NsEGwHacEEM1SnVugTPwXw692rxnCuQRS8rE2QB8PBv9",
  "key17": "5fChNBp6ZUPhL1rsNKWR898rqvWqjw8Z7F9SSwTRvq84pq8aLbqoXT6G4ijCQRVQ7yGMQNakHyAf8gVrEjKYwVkN",
  "key18": "2Gb5S14mganqz4Zor5G4e47tbjkE8VZAfo4rP1atHv3tY44DymBf1PDSHnfBR843srFWwwRJ77GDtgBdg3QAYXhj",
  "key19": "vKxwo8A7AWDMUGvZWFeSWz4BieSu2Qn7217pWcno3L1S7Lzt5myLugTqn9maniYiAeApHKXm4utoQ2yrMKyXEP5",
  "key20": "2g6Z17uu2UepMKYy5FsfBc9gzxJBVQModgUjK2SMvCiLz6XQYvDDoRqy2MSsJoHxSmEzWDGpngANbnfKPsH5LfzW",
  "key21": "5sgKFCCLLrCwMwFJKCUEYKqXwYmvx7BQ4LRvRnvJA3QBpZEWHgva4omURKzLBtetSAuS5e62LyxSoR2WQJ4B9Ncx",
  "key22": "3hsTHyp7UP7YAGNzSmS1uLAgnqCrpKvwynPHNEEy3dcgBFBbnkd1Tx3icFagnZVM5thA2sBKsmKvZSSDWb7XZfNm",
  "key23": "2gYSe88gPa6ADQuvgXakKgLVtyqKnmCWDkRFNKNkQcvfV2to9nmn6zx3L4AHmD2DC3P7CTaotYq4xftLTAdrmU8y",
  "key24": "3jK6q287SmZTfzuaFnTUGpzxWsUGHDmVqKnLTc4WXkkcFEVB72RFJM5Mgnxweo89yPdNYHwDcyoiNiAPVKcMRVYV",
  "key25": "5dngbMhVrxxAm9FUUD8N4niuqktmBfrfpGi7FYDYGmV9FJzRWSKJ2xtocwUHuwfDjmYfN52z6SaXyW1hXKbbQ1qY"
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
