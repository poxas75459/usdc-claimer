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
    "5kCB7yf6pxJFScWXRqHRdrkKqPjQBJLWKKzuhais3xZFMsLmGw1yXMDTZdtb2AimRcDrFZb9XGPuTuzGTd1MiFmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bhWcNqzHSzFu2FMFgx7bwtE9r1RXjL3b67UXNekvtXTEZMZzVgcnbXyLivAMrZ9Qkfr1Q4aYwc6x51SDXiXe3uG",
  "key1": "5MCtbQXX4n8QxBm7jiGn57towJMsSy2YVj2tmypnpfT4AqY1SiUF1aJbYWV59dveoJNkvZyheYMSfpttNDFdv4Lw",
  "key2": "3FJ7DRPebR11D4fSPg6J9mCj9ZqezHTdHaqQPUq8fevr2UrAaKn1bh7iqBPv6KjjTUBAhQA18LAjaPZBfzt81Evr",
  "key3": "45Q9CgBdqJN41raoGCb4h5YQk3RQBwUdKLKesx4jvTgbzGXbXEbs6Wu6DqFgjY1hJbTyLBTPFZXGucmhtwpg36Gy",
  "key4": "465FgdFuacRYiH8o8x9CdyhnrrvTDby8JztcKXCtXqZ3bfihpkVArJmQ9W62Nx1b6GzRSaoX9pTrkf2A2L51kZm3",
  "key5": "3iSXC8TCmRwivA8uBtdVsN9X2LtCXVWYjmhAcuUFDVcCH4bxffphMpd1swj2gmRcuiamLJfnRoHdxbvFXTmB9Avj",
  "key6": "4yGgBDMNVH8M7jCVtC2kwpG9sxvx7T4F5h2zbxq31GoAPF5i4mRBQyrteVpaAFf144BgsAXB6jsBMXZTe3b94KHT",
  "key7": "3meLv1r34mPytEMQsdBAMSvv8PTMeRtxdf5iq6V43tQUuL78WjrfzCL9XmrTpBDCJrkqeDHAGaLuGpyrEuAJqzyo",
  "key8": "4UnD9koRoMyutuZ7gAuLfsfHLGfiDMeMvhw8xNs3JMy3t2N3UasHBuoMTX6kWXjjouNVJLjbGzkEFMcNY44wJbeX",
  "key9": "5svFPAw1zLFAF17bwnWW4JpsHTusBfpyAXs9SjxvqtVbLBMB66DtoVZ7eJFAVjaT3ZpNiATg4fHFXQA64ssoa85G",
  "key10": "4YDYwXmGMkLT2gDi6RzcM1V9yUBtd2U7KNMUSZQUDA3YAzU69VwUFaR2HS3pGSdc43Ma4ZvmHGoSxHkz6DqnB5ak",
  "key11": "At5dy9Kio8gcJ2SKy6mGE2wymrsZs3iA7tqYy3weSgvdzUk55QNTvzkABXB7ZQh3G3ZpspWxmbVbPJeXNvxdQuW",
  "key12": "25nC8FA3TeffMr6AuEYtgWCpjSAuJxmPBacFFziULftLpppfqWMeqeS9tDQcHcc2AP7GeHNNftcHvdF4uhkx2NL6",
  "key13": "27Z162QNfayLPy5hdtk2XuuGE446UJzws44U7BeBAYE4y9WxRbu4uUmtBymoLPDzzu4PXdDAdpjrJeJPuwXo4nmg",
  "key14": "HntdufxX2qgnGmG983cYEViaKDRuJZm2DikPsNPQAR8YKGLiXdk4qRvMkzVt1D547d2Cn6usNtsMMhi6mfB6Cwd",
  "key15": "ugdBW9bG6Zuxe2kHi19kgyVXLwmtxRaxhs9HS35jcLGLeQCSk4aVc8xMAYXTbV8noAt2gZp2NeXjEE7BhH82LWL",
  "key16": "5ah4ikqAL7aM1YmQRFpo1gj8zXZnkqsVrZywVBNZaoLPo5dcxHjDtiC69D21RYpDKdcw5zwN97VW2RbaT1FFaYkj",
  "key17": "4jWZKxxwTuDMjyp3A4yYRBwG4T2jhdcLayo5h9Zahh8oLSKAoWHfkGhnuifLmKJpcE7iDapKkrSndJKpgv5QYtbA",
  "key18": "64JNVQG9joGzZtqiWDCN2fB1tmR5Db1LxBjcTrsbSFJKwTGevdCgEJLHUYnFfqLCcQghkw4k2Kg4Vs3T2hPE4ijd",
  "key19": "4uj9m3VWNttPJFGCGguuBNc9EA1fGGNhCU5x1r4iL8RgzG2mnjRc1Q2Gq6cjTRjaNKdXi3sGNdMJQsoq5oxUXYuW",
  "key20": "28gc3DDW1YzfwemGNC9kPdf3F4jtDiWaVTQMz8Nnt2SupTTJBdrVUp36out1yLMJgJnxJWpEQQ9nBB9g5j8WzP3J",
  "key21": "RgDFYgjfztXRp6Ty6Ny4eN37Ze65NJxKWwKhoknvNh1bobBumZcj5PCrXEF4iZcJWutejVFuC5QNg7h4c5xB2nS",
  "key22": "KCLWEacAMJtMomUyxgsciR3NkRXQhJzoFcu3H1JkiNeEYKjkDEo7anonD24fgSAR9JU8gtNm4hLE9FPar13nY7k",
  "key23": "3bmMAGuLy5MF3jBS85VRfPym3GmFy1vh2DtdpFvHTz2XrjdBF92z4MvJeYoWwNHihYSZ3otYMr1QFh14Z2goTjME",
  "key24": "4grmHJQzFV7N4zFx7eBCK6YgARfDvXuSe5Ln6C5VDAbWgzs978enrXZeTL6PddLNZb7XvmU9vPgD4ktGUMrGqmU9",
  "key25": "32YYuSsdhackACvxWN4SQ3S1spCxGq4rczqDCp93Q9mkwyq77Mv6hyD9yNYYpXUAp6bcrL7K7SmnkyC3BoXbXMjK",
  "key26": "3zye2shXxcPyEXwgZyTHj9s6rBVjqU97rdV3LNbGmKGDP9Jfg6MccHVdfEifxMF1qfpfaAoSNmFtH5UNqhriHHRE",
  "key27": "3RzNvxPVbhvcq94Mq72N2T11Kee3Va84kF2mFQ1U9WxF4oD8bWWC5JiLkXcz4FmXsXtCEbFdKfP7wk6AB6shmypq",
  "key28": "3FabTo5sHb3fZxTCPu8cMM7NJzJi1hCUbJ8oLZVm9buXBKM59fNM4Eb4gPfZGd7L7bPWzGiBiENdpifoR6WothNT",
  "key29": "54GyPvaEJCu3ycXjEULdqC99jgXYwg3Q73T54yJAn2BSJ9foqhJ2MHxP6wbqeQdXFi2DFdbNJaVhgh5oTpgXJ9b4",
  "key30": "gnM7J2HYnwUkDLsSkjBHxNyvnnN5RZH2g7mMNzBwiwBUGEAitgHgBhq6fiAo2MXmiKqQPPBV1gzH3wWHXvroMig",
  "key31": "4dPDLuK2LTwcGvGuMBpsW3bdAK2fzwDtYsYZbythppGozBPFY3wEFgzTKnwAMFU6xJ2TWu9c4X32eFGQCmwbhuhH",
  "key32": "2Ep9Ew25r9iZd7AnsgZDPEa2H98JyVC3zWsyzS8GRwhaLGbTRCks5MwEkHHWyVQXUxjBayf7JbNr8gPrTkgpgAuH",
  "key33": "4EoidG84pC5fKHy7qK5U2rAJSZ8qbXt3GaN3ZddCoCxd3gwH9peAZgrwushEaJb3iJejWo1GtNN3oJAT8HhriLAs",
  "key34": "5M44cHzCZhkzVkjm1ouoiN6cAgsarskGb7sFR6Me9r95dMez4p81LGGBfarrDr2U9d3j67pouAvbJ4YvCxFN4xVP",
  "key35": "yKK2qDSmLMWiLu8e7HMDvtXwEkhR12H2x4TDcExmVFrRNmZpWiDJEoZtUDYfLmodntZs71njk9vMTJVxTFSJyu9",
  "key36": "5mgmotiYTyG7fqHrombL7vgCiHEvo3TMueffzUUGuZcYKAo6RZmkzjmaELhv8km63gyc1ooYzjsrfo9yMFAbrkQQ"
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
