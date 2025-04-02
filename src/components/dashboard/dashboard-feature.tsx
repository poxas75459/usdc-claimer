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
    "5CTYweG2EZ8CLkUNsvhEn32yaCikbFKa1aBG4tpQuKy44eqXA5gqgUz3g9PA6dgnxfgg6Y9qjZsThdyY9H6JQN7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65CyarDMFuXTNEzhX6881GUiunxKV9BwQoyTUwX11Tv1NiZc6PZHihtFZkWSpcDdjHC6cuyM7KoKm7A3fVgHNSH4",
  "key1": "df5fVUQN4SgYuqBc9QcyXCwUa5L76yb2tnyE8mYBj1fzrr1zTiUVhRCnDUiSNNJ5NgqJP1XKc7W5VEJ3RtWQGbA",
  "key2": "51Zc3YSHQs3VoD3j643QNu7Ldr8RG4GMRgoVPAUKRnSBMTvNmkigiKW1rXWbQ9SuneuRQiCSCqqHa4wwEaHoBae2",
  "key3": "SmjbYg7ur93br27BBZUFzT4Lf52rLLfMjRtAf4zZor5SBE5mV5YffTi1YoF2X39dE1rTGYyexyz2xb8ivkKRHMc",
  "key4": "5CA5EZPc9nh2rgnAZwvFCp9Q3xDwDrhnv8R75knNpfXvnxLCeAX2yypn9m5GPnCMzGAzHQTsCbGZt1JDotFngRLa",
  "key5": "4YidRChJQcYofjTuWdTuphRvxCbf1mHHdgo47a7X511jP6RFxSUHM4ei1UMytNvUUF2BqCrtbb3BpJQNneJRaeW",
  "key6": "2iupjMLgu7u9SrLJYKa1zcstLRva8JR3qyA6VvYHwV3z4uPDQ7mYFrhxoNHzX3n47hsauB4q2vfrks7wKaQe9gTL",
  "key7": "5LYwTqseQV3Nma4aprSAWXirUxZpgJAonnumTcekXSitFLjK4yrRYcs9iCsdvVFDP8Td7hnvwjB7CSNpoJUxT9xp",
  "key8": "3uTpHJU5eVqdWnS1YmHmbSqp1v299CSQsfW3zn7C92Z2x1NBK7yh6acPVAvhLJLFbmGQhoe9XPyypvv2bNHwQvqd",
  "key9": "bYEpXFnuaiYQLen8jTJwUYAeB7y46oNDXa7aMgMobefqVQaeyLHHQgnjCWpcsMJtE5QwxtoJF7rutbqc85yJ1WK",
  "key10": "3Vx1z6SEZbejTMdA7gN7yERhfhkA1WtMmBiuJWFFaeUrJJMApxTT1DKUCSyCXfnMEt4QPX7rPrc9WQUWqsDZsqey",
  "key11": "54EcUbs59rnRZZfuh4AohNsFdKWJfTR8AD7qWEDNJ4mSgPQoUjimHKdEL2JPGTRKoHyyweMvexeYD92NbbSrwFEf",
  "key12": "5Mu7UEnBEqd6PY5FSKWCtyr5k2w5fT9odTdDwyhiRVi3QGmSDfonHgZa8poV2AHWRkfFX67EHGXdUG326Abe3AGh",
  "key13": "5hypmWE5wnbXTLP4YYQ1wwC6w7MyYkR5mwFu7Dweh6EXLycjxz7Tnn1cm9hNDo6D8pDvrExUuRAj48cMZrNRiXVU",
  "key14": "5Baf9nZhot7MquMGhZU48ygUY3afbQi4CGYYJE6E5HAhSVV68Yvb71z2a4pPQGjfp4R7MVg926piKnkB5usER96L",
  "key15": "3hFDBMwLGVzCjVpjD1kZG3AevVE8m25JeUtPXwnYTUZz3pKmPsWh5Ycxca7pFpr8ZRiKB8ssmAENGWnnV5pzmt9E",
  "key16": "5pRNr4n9GtH2iBjMEeg5KwHkLAGNtgCrBxHUaZzi5NrNRmjVP25pQZNVLCfBqRAhYZ46Y3aJQ1TdLie2T9bAWKqa",
  "key17": "4jbotCD5RUujeXMKZT8TSxXpgycFjqenCVZKEpmS6JZeqFPfmVek35HTcthbm3WKyaG7MxGYznwYGJatrKZFSm5W",
  "key18": "2YbYQHfVssz3cU4enMrazz48hQjJ3JRqCra2zFv7H5c7Fk9gnLCigA5DX7bJFiERwtws5KJL8rjU9n8vvL1hQ57t",
  "key19": "3XpnwiEyDGfvLqmjaRCJ5XgXXunuPZhKRGW2dXCLotAaG1RzBLCFyi29enQUbhCVjfpZCK7Sc7F1TZeS1AZnDRLV",
  "key20": "3VCFDUUdsjJ6pS9QQhgvUbFrDMBfW3Sm1ofzRdbqVZpdDiEEtW6ZAvBH759vcX1r3exVNUsBHHiJBnJJRDaUowHN",
  "key21": "2AibX92giLFdag8tmX4WJzjbyAVLA6ftd2SzybqbwnhxdysRwHuiibKgyzMYeQPsozDDp8dTKMJkRCJJv6gQoChJ",
  "key22": "3Dpyjik2VBp1pBjXmbtNHko47GzHnwWjbXLYRmvqLEMP8owDEX56JtQvSV8GCdAcPynUizykkjqohHiWbWqKfTUN",
  "key23": "2QMZ7NpLnnwji6JKrptQozvXjXnvd3yeqdXFyRo6ESJLePdeiy8VfYq7CSqaVdV7JPjqCzQ578PNzUmzG776aBPL",
  "key24": "5PKeqSXZ5dejs7cdnnYX2X7vTrukwJcQQDfWs5k3pq81gMedUgxcTv3iVx9HEMdS4TQAQPUp1KcHCteTkC1XtFzj",
  "key25": "5XvNzFHJeficMvnJpnjjken29EPE4AqVg3Eva5BkmRGFKqkcpGrawCBghfA5fMpvLJZxefngzFD2XLGy1HbkhGDB",
  "key26": "4iaLTzvStcv8RjoNntTprQfQ54qcaupPcKBYmBGX4552V9vR2oAeFAFFhm8MbP5A4U4vVFNvyw21PMbyFW1mA4wW",
  "key27": "3jbZjMH4wmZEz8DAdwYYn8cpct9XnwHESEfQJXyhtbcmqDdciYcE7EbitQE3SwxDkiLNunZarQmALUUvX5Ma57Tq",
  "key28": "3sVHHitN8iF4hB3boZLeW6GQ1KHnMZgHbKpnFjSay8eGMAdax12oit8MaskTGEaVLxzV4sE8q9WynE9C6k9TNied",
  "key29": "3HJoMwJpqxXhYX6tszrBw4YVNM97fBNWtZYM9QKxoQSaEoZZzxxG6dkvfxi9nP8dFHASRmEg3XqBEJwBv1wgaTn8",
  "key30": "5BaLithEvXz97JWbfvFTqQT5ou7nNFgN5fke8rcsgPvrfSAvv6rpKKn8XT9YMZknD5pBu1QYkGEVBEBEcUcc6fQq"
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
