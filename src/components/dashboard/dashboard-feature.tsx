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
    "P3x9bhRWrEUpfgm39hLieaNr2w75St8sTDzd18p8kCwDrb1zWGmymdf8qvPLB71RWvU8o5R9cQraViBzNYv5hPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wNTHygGUgysmhU3ypzb9UwHqk7FPAM9M8EL4LQS5bjMvhpQcrTUX89gLP8mD5wTue9nf9k5bS5WSYzch9AKu19z",
  "key1": "52QMdq1qPCsavovvjNFCt9a1SLXAxsKpjFDDx9g1sSyPtVxsohJLf1NT4cEEirUvmRU2DaojXhtyQEtS3Mrp7m4",
  "key2": "CeVQnm2KEvkpcAKMd67gTBLc5Wxj8gZsJBuWc653ksZRyR52CWGhDfcZF9RnMvDegokpY1GUFA3CYVmBg244LT6",
  "key3": "4oFyBqr8egwzbqZh8gMjaSQEBCvhcgnjcoeGehoZCrtEqhHZ3kwCAokV2dFa5M6xGhFUXyE99tyQujTGQ4bbT34C",
  "key4": "23f2zsjxvpkjW6kE4ai52FrkfFQZ3fLh7kuQqFEkYCKwEAhkggJRLasYZFqbLCYqgAJLG83G8vFWKpwhNPNMftGw",
  "key5": "N4r3seremLWTPvxpSRqrqtcQzZ2Y6w8ZdvkkLGEAnB5GEkstqeTnpjV3ZYztPeChywxRGwDjyHUNNnWpJAzqrgk",
  "key6": "2vg3xNgBF5TWKRGL5RqehFa3nqCg4HdwnCgmYTKAg6Xzgp8h47GDxKLx4v6vHV7MGzSzJQPK9Bv8nmXNFjtGov9w",
  "key7": "2AHmMiaTtn4ENH7Y7mVAbKDoTGcER4b6pLskKdhSzJYefK58eWv7WA9Cdkzr2sq1FKfBmaYsp1yXuQPJ4KvebowL",
  "key8": "3z8a9otN6uSUAqTFeG9N6eWbgn1L4w4MsQ5BkD3HKDao6RP5Ws42bfnjjK1YyPjMyTSkxX7nUp8qg5oZcU3m3btD",
  "key9": "3FBKoYmE1LEhaLmDcZ8HMRztwmDs4cF3shwRHe3EPc6otTSdwJXCgzUSfo9iUfr99w3VoB9FQuiEXocknJanqAQs",
  "key10": "A7MbcvfZhnnfq3TQArurZiwgh5zXk6vYFeBkexHmfiu7C3So6zsMWeY7jxHyhsUvjR2MnjNNXMRKvLgxegtpan9",
  "key11": "4aAUSaYckyHv8SyxHNQJzAEE6ggNMyoA1fdivSkC5YnwGNiXRok5zaHsU8JyQxFie21eiaXgqZsbooAoMxkTBQnq",
  "key12": "61C2j9bbCAxueGEDkcC3kzAszr1CkeLsKfC6g2GnanAVCNvWM3Q6vggG1iDGNEucoK1TdLPovy3tWyNALtdHSeBU",
  "key13": "3S9NZcSZuZJQypPNyoGsrd9iAzDAF5Qe818FfDnZxLdTvbkL5T3i3VPHmS3h8rB5AxXDie96N7ERxZhX1xNwxnPX",
  "key14": "5wiZJ6Jy4GmLtJnxtjE2T5qx52hAxvgYYXEyjFaio97AMPFQHbjh9MtzY5SL6b2TN5isJGdQcmdZs7UVpqNZeRnd",
  "key15": "2NNE1WQaC5ZMPsWF7hb27xhULAZRqp8oZVMkkW146eLVhtwNvpDTLpg7uBdzb1y2d3TU7n5pYQE1z9oS8WuGUVoB",
  "key16": "3EFP8VZEjKnYinVusoL755Rfd7HotFCWPzBeissYF7Sm4nRdvejHzs5WhEALmqV16CBzbraMjBWMK1Kyxn1e2icd",
  "key17": "3RHv5tRqSTbe9gLmbneKLzEtCE5ab9XymeBsMJidjSU5faHLgfLFWCHrmRtKVisSE6PQH1DK63AXEMMsA9VCvVxC",
  "key18": "3fDKbojbiREWG8qr3mLt88igMicpg7Rjk1zqLU5aASHrSWop7swm3V2aufnaeZRGPAYU5pvegcCi9C2PJJfjYQ4Q",
  "key19": "4SHSuNttUmwMbNjAUvUkv9VbS8tfNR12yEPZdhiH7pTFMQEsnWE9VWjhMyV6Yd7DwXQbadETU2pfWunpwnDmPYQ1",
  "key20": "5oyL8h35xrkPKL8RmXUfu7JwsA7nfGaQZ9ZSJpapmyHeT3deujdkpnhGqLPy4KsiftVE7TSbWPGGSGrqED3vs6Xj",
  "key21": "4SUwyvz6BxKvZCxRTXucwX8z4qUFwPt8GiV5JWKsJPqSvzFhzu8E8kQsfD4CT3hKLzHPNLs2WcYHYPhyyUzsnVW",
  "key22": "283SBueBz63Aq273Tn662aFpBXsyEp3CEXgbYWkHY4KaAgHK1WzyG1L2vos75GUBKpMWiMD3N44cEcYMfJiFdQHE",
  "key23": "5XAYMofby55YWB1v72CHqbYstxsZq9GRC4C1KCJq5u5LRxgDxNHJTceFMCiM8Ms4zvcm46Z1y7icvjN2nLViLbNy",
  "key24": "2vf5SWp3HwF37NLjgW3np6XjLTyiXgEkRkTGsybH2AmT7wujCjGBG6ACpHoRjvPH61auXZCgFciH9sbPyaoPAU21",
  "key25": "4v8mkfDTxmFWcRr9QWBqh8AkmFJHFJ4Cee9CqfPzwKEqA1yQp1mK35NmwxubqNUQ2Hoo3rGDZUkdztyw53nkHmxP",
  "key26": "2oQoNFCdgSZNeBUcNkURvLM4Mw3hebeaCRn6VKrfvtTGg3srrsU983G3taGxwFBZt6R8NqN1yipozh7JHrsyWEs",
  "key27": "2fLcZkcXtU5FwrgcQ6W6qc4Ezf9F31FTALdhGtG96sjYGhVqd659wmQxSEUh9k7hZA3oyBMLUtesgGRvg7Zv47f1",
  "key28": "5Kt1dJ7RzSudSpjdYwv9NTMq1nkkhZX2C9gasZRfGRxVRgxxorzTEdAaNF5ZEEbJmNgGb4q9zX4neCawunMRj8Um",
  "key29": "4w441FCeNFzdEhZ3M8JAGHL4bL75cEeA1pbhYnUJM1hrMbaiUdfBpKBWuaRMhD5ouPeownsAuA7jBT3kuENZ7EWg"
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
