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
    "5FuNtvR4fKRU455sstdovX96hnXdJ95so5ky3uUX1MrHHB6x5QfScZMvruYeNvRWe6iKg6b9UaXU97PJPAvgiz9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WnrXSojVwsUBz5Ya5rq1NhbRez2QPoQ9yVq7cS2A2rSfe5zUXVYKhgzhqkZpWLAhsnphiG8cfo3PSakujGzuhz5",
  "key1": "4yNhKr48uorByuSrLd1GMd5EvKg4D78b3w18edzJ9PVUhLACbMkQP96LHeSaUYGGpaTBeZphxq1RqrkxTkJWYHA5",
  "key2": "39LWPRG2mE36PNst9mHjU1Q4QZgWi233SyHQSALBagnWSnTe51LXxCfF6r5AyheHdPQQuvTiV5DTvgVP6WHxi5jK",
  "key3": "4k8y4AEZm4hYgf8ofmLQYvGRN35ppXSHBqjybKmmQTRvHSdDSHTZo1gLDjNK65zhw43DMahQ67bBRxQTev2hPBL4",
  "key4": "2vBkSqPKwwvVhXrJ5zmLsZuSYzzHEDUPNyntQCLoLEJj2JK9VWpeH3ZEqCDga39SeJFT6C58h2bsqVsaEk12YmmH",
  "key5": "3wxDdXVjgaUPmkiwSg1ExpTxQFKWjQem7bneeesNTci9s3TKaSzSXYQPh6W8oH95f4NP1FnJU9U5kF6NdQ2C8pCo",
  "key6": "cRXFkoEBJgwVvdiWytUwe6bWsoDAMzyobHaSStE7iN7EiQdJdSUtX6Fw7d7jgkY9jiUjCUvUXr4EvmntG3WPFK3",
  "key7": "3gCYWdhbeNwcuzLGyye5rgVE86cNmWUr6RfFsB77MARpTHHS6yhSNG4ETjU8Ty26wT2rkgJpd2i9DDoHXA4Af3zo",
  "key8": "45dpME18DgbYW8wiy1quJsDA5bWWdx5CJaCPsWLvkJj4mzB8afFQqDn7zhohd39wP8DJp3SahWTicY4a9vRjw8wq",
  "key9": "4W5qkL3eFaujyUF4J6Uieqk4DwsvAuz55cJXDUXoaeNSpnHbPPc3Zcu2SkVPzjRtb9BgKsggVE5PtncubaS7EjJm",
  "key10": "53XetXcYHtVLW3oo5Ls5Vv5suunFSwf4c4XBuvmYvuQkEQ4ekKprKddGaMUJ8itC54kowwPTqLh7iY33mo8DzbtC",
  "key11": "Gd8dAP1pSxjUeHGfMq84FBiTY9EvB6RZ7x8HVDJt1NzYhaHNs2khQNymt2NTVTD4V2H4BcCLr45otv6Xs7gSUTX",
  "key12": "3tdaA46sUK83itP1cA7d9K3YAaKzBDJvdiacxPxNnDZEqrKXyTqPJXq6BMCjJ2pBLhKgcaTKAm4xi81GS89cwqXM",
  "key13": "3eJTYemKqGKU9eaTj9us7fmj24bT5JoMeRfiX5vmjeS9vtxVusqT2Q6EjkzsUFYunNVSzJEXc49cD22FBLv5KHgJ",
  "key14": "5qxUVy6atPMP9ksSBk9FFZGQQLepJw1J2FEBumzmsumyYccQCAAG7z9nPXZo9SBEhqbQGeJPacEVgW2jVBuFpXmS",
  "key15": "54LqJ9X1cLyFAfueqkqKJe7jGyTUM4AaVuxj5JPjA7JTYFXJosU1DtwieUk3BjZwNvaPkgRd6fyuY8DZ9RA3kPQ",
  "key16": "5uKmWJSwUgZYojEBcoEUBBPix4fd6zspY33GjpmRDTjF5KK8gPyKUBAog3KeJTzBJXywyas6yrY6KB9azn1h8LT9",
  "key17": "4XDUXVCaafKNVZCQkontTviWGa68shQEBVNeR4eZaaExtmS1FnoztvYmHaWWYGysrmxPafYy3nLYoLJney7uJfk3",
  "key18": "5Z9G5h5dGiAffYR2ijWRRAuE53yTKnAAi6rFhr9dxAawLfKvZ9w6RL2DXskwYJXU5o3K6ELrYWKwZhAsLrQov6FQ",
  "key19": "YqbLTTZfRckuTDkkPTzvBQyPsNtC1sbevJakLvKrgkJAAiguySG2u7oij1NjJQNFuXu64eqV2cdQMYdL9LmUu7s",
  "key20": "34wiUVYRi6FjURyZjVA3hoYAGesGF1wj3bgKJSqhEQeD4QbjKmvdduuKQZXmERvTH7m6HmoEr9BTQDoeZtQ8tm42",
  "key21": "jmwMkqG6Pg2DWiqALr82ScErRDpcjA3XdzrHd6x5sepogP5PnTvca3ArkkJyan8GhfSj8Ek21FwUodif1GWWn17",
  "key22": "3DJwAjzwBCh6gGAMXuZniSRA83H6hPPcVwMrERCtFKevdHSQsknNCYhwrziZVvzGFtLPQfVifGDzUqxFUSwdeeZQ",
  "key23": "2wUcKa9N5qknYhdp9hpYi9fqrAGqHHVtbMo38Pv5vnNNSSBFrdRuRmNy2nyPtgK3GkjPYq7BVjXXe295tLtGtNZ8",
  "key24": "3mzMBZPpdP4bFfaRC2uAGyKeu9GyqpuhKFTfLcwNruBKTDyGyRtt6er1skEgH54ZA1iVKEJFV86KkiycrWzX4cA6",
  "key25": "txqusFJYWcaL5C12qeXSQsNgtnpvha6uxhr9vPxJYMXzSb9FFuPEJUgkNUqJaGPykfmGrmy26qxvLFR6F3v3m7b",
  "key26": "58b837Dz2STTqG1KHTZn2yhUxphrDA4wQPyLDe6tXNUB13CjQW5NSmU2XyXJ3jBghrEm97Tbi3E5gVUACQis5Ryd",
  "key27": "3yAkRCymvjpctxE2B8F5aPnWQRmLLxn7AkQJ8xCyNgdEXAfrDVLUW5efxStFTq4kM6MXXNy5si78ctipBh2n74QT",
  "key28": "3PCkCDhdA2LhB8D6a6dXzNmK8DinJ2ZGzjtupjFyBpZxYjKRiiYxX3zJo6gEjsvhxkF1e3m3ZXDzEVZADXLa3HSY",
  "key29": "3fU3VciyNUDU1WBM6G2r7j6hGU3w5JigXbs28AVq7N88TX3MbDejjVMW4RpLHwbEEwuqsEuuUVcE1dyA6qbtNF6z",
  "key30": "2syP7m5T2GyKAK5t3dkjTxTrvmow5SXgXHQRzYJxikjHgSYY1a9iUM1HNVNgCexp4KgZ9HKrj3MVkKNkSWPTdNSN",
  "key31": "4QL2mAAse533LaswG3s2XbRsvFuHtRdqTRaMnLNPmG61foTvAJW3EGyBKSRDXiQvj3B5NHv8ouEy3wjqvxKQ8MNC",
  "key32": "3WgjM1Peuv5x9orUoWTgPt3xpW6HwmEEqv1RrwSd12upxQmERk5inQf1KnMy9Y9GX6kHqgAgSGRBQojZKX2sa3h2",
  "key33": "5QarwQ6Sro7oVaZdgBmpn2p5p1jQLmvTBpHWacYi5vYnKWix1G5L3sd9avvr4zkrKgBzQm1bSTETexFg3WGGGy9s",
  "key34": "41coeobSRq2AhwmYc7zwrT21XmvXgNcojgVuuQUEs1iJh37oLYx5RvaDCjkJyHiMK4HvxCvaBeQQMkaGM92wmXiB"
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
