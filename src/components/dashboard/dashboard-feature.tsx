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
    "2kMu4KcpiTYNXTNT7jnrtp67fns82c1dqaWdCReKz4M6LAuzQL71jMYDM1LFFRfv5M9pwgJUHeFfEQFouK5Gzn4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dysZR9DhGfrecQwuEp2fz8FoV2WNqQs5DWTrjSX1ZWeqyGkc3bk5RXX8sFh2HfHQpsHTZbmxu5XqXwFZpCZd8fq",
  "key1": "46ZkcmbppdnBiRpMUEsMPYQyfjT7xEo73wrBYiSqWShKcCNNc5huPGwMBpZJDgiScKeiTt5fysSPnvHUCYh6jEcs",
  "key2": "3xykM6RQzdQqppSG4K3hqgx23tYikgJnGeiMzoQKN3TzKVb2bGuTxkbjbTrCSWZx8uXMfJViK3vqeny8vHXjDKSv",
  "key3": "544mbxHdFtDCEvqdsQr3xekV3oU944yjfWLZj4t74YWS6Q3KQ18YMgTvsjREC8S8S9txukufJULWShBzbJb62f3e",
  "key4": "2SAb1hdGCqhenLTYNZ8G4P3MvrdQapwLexn2bZTPSRfWVB84txiZLWvNbp4qqLmsbjaMFmjYFMPbfL4T8A428nRi",
  "key5": "4sf8QURsaNyXWNCXcYZfcmYL9KNpzWPM61bPup6FrGemp6PgQvCcP3sWFyomSoBzUR5ktgV8jTiL4YmDSWNik9rs",
  "key6": "qyDAEUYRE1JesCkdi1YAv8AVHgSUHZmysui2DK4PdV4AUTLodA5Wid5HqPbL3nusz2shtvkqYLhFzm1oDJXMgZF",
  "key7": "JapmqJ6kAL54z8fznwG5d2BStgxsZTLbKbBPbRnfvTpG5Hc729WupXTNz8ZV8Cm1BF4AVmqLPHB1wpezXsxGcYq",
  "key8": "35X7WTK5eqeKgvWk69HntihX5wC6xEVFueA1qr1FHcdBRwgNQTGEp2JJQKRqMKsGrgLxyciiWyQ77BMAiY5LjzaB",
  "key9": "5qARGyBv7yWzrzve15nd9kosK7Q8YryLecUUEx2368F6UxJ6ShsXQy7D4YJtJKhH3qXdDw4HCk8kYrmvzvMVpcdY",
  "key10": "C3LmjEPfudqRMh59bw5XKDP8MSPB7c1QHg5gr3SLPck8UKHgKM1nRm419jLeYz526TpndEtcyxTafemeHyuYeL1",
  "key11": "5GNsLd3wk9A642q8KoEZtmtqsukMjjkg3tTaJes1o9G7Z59iwV3vUov8w1JeoR4jbrGUcjvW4jYaoEjFYRV8Psbx",
  "key12": "EQJxCh2rypLvoQenkFbeFMZM5HUhTxwfD3cg2JEHfjYPWRZ7QiP53upxCN8K1UHmPH6HgzDfzjBaRYNoJgWmnbK",
  "key13": "599Kj4VtcTDiuE9H96x97G8qMTifLE1xnyfqBxSAZuxvZot7m75RgcDJH1bhpyQfM866TwmRdEfvra3YwsPqKSwo",
  "key14": "52adEAekcLuZKKhJY3q1Tq7KEeRjP53cCPqmgwkteHbuV7dzHavSo4csZy39idiCve7RPx6aV6bsQdbovHD9cem3",
  "key15": "2CUGFYAVmbQZ4zzGpZXeUrkeALvWRYAF9sE1gfr7rivFevYoNQZWDPmGNg4JWpxWQCMsF29wgPGfUXybKKwtCVVw",
  "key16": "26svLjhqS1QD3vYrZNFLnEiGQZyk6XX8e24hR8ESQ2PCs6YfG8nZhWA1AFHRNMj5hWPsHME5MHM6xowPFAsVSXee",
  "key17": "5Y6RSGSS1kebyJ7Aj8XULHrBtYaaGhW6Y7RK9t1PfRRhhWwL934Yq1gFiWUix1F2Eb9RTRwsGJvBK8NTXcsUfmUC",
  "key18": "4MgysnsRDHwze1R4KBpeT2v59DHccFUpkCaQshpUzYBm9rPdFHykbYsZokYtYWtTPzHsmPWkxG8DGNYnSHELyt1c",
  "key19": "3zmXmnCQABVdaNLHDF49HA4DBLfXCc6LRzmrMuKSJG6rkvRM8J5FycpKWFFmccTRoFAvM7ZP4GFWXmf5kZTniTSG",
  "key20": "5X4V729xiCgqk6Hp8tPxGmfATadLup7yfG2AW5hkbezfxDdXnKhfKzd73FH9mBpQjeJHpKMRDoNEQCZ7GyyKBB6U",
  "key21": "jfTmWYh1bQrRMxQirdKKZZ8oZJ2JJ4y32WiQSVoLhMoe4gU367kQ9d5KFupeUnNLycZbgPWMQQvGEKFX7NFueyC",
  "key22": "2J7SyrgWh1hfusYrDHWnht43Ap2ZaVF5ZBMyUBuasKvHnCAVoKLDceu7EWFNrRiE2SuRB4kcNPtVNYYFGceTr57r",
  "key23": "3dYvs2BSHta1uFNpBjQ21byAJZH5zJQ8LYq8nTCdyXwGupdPeyfmxoFCq8nqvwjb9gnGvMS1qVzvaPbX9eLyFYV6",
  "key24": "52a7U5kBq7pQi6zAPUtJiLiN4esMeCHifUXvDHLgigmFE9BefVKjwC4DhsDKYjKM8uPcb64cpHpGgj1s5UPYVGq2",
  "key25": "2QYrHLKmaCb6fxLZLYiJZzpa67FtHCGqJVHwZ5Xk9P7DWUixn6cJnV3oxSGMyawKzm7yEb4Kkp6Jkbmy3FCNbza2",
  "key26": "45y7VezQc3LTWKNBbVdP97UTSfbVeRkNoe8UGaHEhLgY6mRHT2cUf4fCaxLUwTqD1YxEUpYVFCXUgFiZSmTqe9iD",
  "key27": "4bACYF8RJVhNStLS6TTTA9shhR2aUZxg8jEj3pCN985JknrEEDQeaKJYFBkGRwneTtrP47AyjLaMqsQece5aEjxe",
  "key28": "4U1VeuUoxbb2cPKyG87djjMsYMsSHrBVit2A76bBEHPDigzeDUmW7deKs5D2Xo7a5L8wLu7n1D9mgR8rPd3khUbS",
  "key29": "3f43B5U6YdNXxecW6Hw12RF5B7hNaf2Pa6kR2V8R7AEyksZNd964ER8yWBNcx1aZt8zQYvv7AhydsMsxEdM35XLA",
  "key30": "3bdUqQKfcf1z45fcPQru8jV1aAoXset8AEtdpe3ag3zYnEs9eJQXKesBLgwdH7yCWU6wtHn7y5mxXh1ZS1UdqVxE",
  "key31": "5gtMmmJ5EAPFubEcvUJECv5owBz9UFwhEfBpYsGPqD7Ahuhfu8hYfBP2gWRQqARJJHWeEJmAzR7fm5pHy6MH5QtD",
  "key32": "45wppAqn8aC5q9R7CNSxcQp5q3UZMj5BgggTPRdSL78Jsh6ETLB33K8TnaiAkwv22woD4ioiQwkwkDzViNpTK1su"
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
