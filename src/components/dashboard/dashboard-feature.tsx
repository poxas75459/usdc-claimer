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
    "47cRL8k9eqihYi9CG8V9zVoeyPmT7nqedEEiWUodJzEARfYoG9ZzzxV3zbp1MQQaJX6rPfx6wG7HZwY5TJUzCWrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B24VfzQ1ct6Ea3Bpb3kboaLWxygacyv3bQVfvJmEDdtaxh35DiHgLfrPwixBLjDvqt72xmnkoEgBJHkp9yFJqWR",
  "key1": "3YLa24hLUWmtTCADqaW1HRJGYa282MgQrt2A819DPrfgWMprguUceb415w8qYQz7AtgnCP7WfecqGuJYCxtAC8ac",
  "key2": "3gNGwXFJCL3QBSJokTmbNaCJ3cbvqsrk44xLnJ95KdgAscy61NqYLYBoTmaT8kJGyUehPfL9SKuVfxdyFBxAntzM",
  "key3": "51eaCweByoLwRzgv4fTHULewVMz3B2gaof5ynSq2Taz7amp8T8uHpP6yL2XQH4pxr1ZK9ZzcA7foxPHpeZ7F1WBV",
  "key4": "2aSYKDoeTf9JYwAYpp8CUQJ3qjo9BU7qbJ1wLYALjbP6fTsgJXoXF2TWKZSNsDp3Ndk2wFxM1DFMdN3ZcgPsqsnX",
  "key5": "3WFzbuWDigB52yfZYd83tCiYPLJyXwAYuJrYPU2RduNHCe5yzcqT2pheXmBQi1Ps4cFAigoNqWFMV87wuqhxFzzw",
  "key6": "4BZhZ9SMJ5hLbTKiZsRFGZMGnUH6jYS9GF8u7aBatD29itd3ZVUrTZ5XoARTzUYswfSjUsbuHRznPGyaLErGvvyy",
  "key7": "Kg7cbrDbbH5fkuC6bFoM3qzYtnfPWiKU4o8W4G9JA3NmBjQVzaoCKTrCr9bZBT7T5uqBXHBRhKLJqz8AkjYo3mL",
  "key8": "2PEcVwHyVP3MQvv8qeMXRPcJQEqJN2ppue1YkxnQDN6AVzRv15Ahx8RrahqWK3S6uzoRR3v3kP2Pvuqzink74jrx",
  "key9": "42uVsqjDTU19gjNPQMHMFaNvkFh7iSRpM5VNbwro1DgDG2ZGE2Tw9WaqwNeqLPk1QrHhPe5BPQdu7MmCq9k8bqiL",
  "key10": "5DUDdfSc2PpHSzYnVTcS5KTFfnV18MCQtNUV3gLqzCUqd7dRdFWR8d1UGSCbcsqnDWTVRc4cwwzz611BiTWbM6WE",
  "key11": "4G9JabCa5NtndSum3WYVegVB4RGiT1DvrjJE84vw9cWvj2w1SCCPm9ZpgJy9ump7UX9wXVTBjwWLziKhAH5J9833",
  "key12": "2G2MKZEgjhb4JmVkHH3N9BnAE7Tk1mL8K9JSFjzAjYrCWfHLybfmXheHqKSAz7rBbAdbYQoB9AbEwYyZQwhv2bUf",
  "key13": "3XrBWzcyS4Ce3RLh1dqGjJeHVdWJwXvMiH247ab1Ybty6SAsPVpxobK7dFcukABwUFjrVFeVozxaKNXsUSad8Thc",
  "key14": "5xA2wdzU8qNrvcz99xmuFT1RLyUCf8WMmiP9RYrvj72csSxgZtCFssgGiBNJkJW7XL5ki3Xr5FG8hzwKX5VeV3yF",
  "key15": "25J8AsafWDFn1AYfGkgwyJs1sfxwW3pYr5QATcVCXAgkbN1Qpx9hHaWf1KXh5HTZNp35YAdF4XwQ43KQZCjGxqhB",
  "key16": "2uNPvofkkcAwVyxZmxqbwhuwE5EvZbTVDndFZMGY2abkCBx7s28w7oo7HfeWTuv6DPXBE7bRwWUpBwKxaKhSLDdV",
  "key17": "29A3bdZMpePVuQE2dcrUbifnPGKjhoC8wJDUSM3j7MKEdsJTWCaGGuSwq2prM9k8Gnvw9CedbwYbeUqgXW6UmE1j",
  "key18": "2n7hn6zUBdZB2zU7dGW8waSU6kTjqR1uN4GPEgvLMNtyvjyUuRp3nVu2smFjiGwE9kZygeQzdECdqasvWPmtsqax",
  "key19": "43JC4i1SyXXympYo3kqsGBUirjbvxRZuKRY3t8eaJAxc1otU1qyk2xAvLHKAvJWN4bEtjaCJVTQq1CET6a3VAezR",
  "key20": "3n69V4BWgBeQhpnDHfGK6S4KqdW3vTe6yuc4gFhxUCufwFv8aEDydFMDBRCg3c1TRMhUHv8pGJuS6ULskp3mdvxc",
  "key21": "Fg9wp1fBPVFoec8AptRMon3Cxi9yRocXtiuoWv4vJZBUFR7tB9aguhznGkpRYWQdib6o6N7iZD1bmyiigjM3yn3",
  "key22": "3hF7r7R1XFKsPa5LG9bnuT6ve3ZjdMhQwSkVfnCDf6ew7zuEkwh8QAiCZFck5QVdfs4g1R1WSgLdgekjbywAAq3b",
  "key23": "5wmQ726cssjaKXSut5vwWfNPnHcmMPUBiS6KNKxD5GwjWYvzWsv8faZ4EVXPsYFdbqTBRmtZEzGQaAP6jZZJkZzz",
  "key24": "2FovureFSia6hjdJKxe1jaZdYsU6MyNZoLgHTqMNPmFUDJMxyR8UnNXTkiRUuQRYuLk45zuNHMWpm8JTtEvFMcfq",
  "key25": "59CMjbToBXC7wd5DjTreEk4xj4CeVRNAq5AvzyEXK9pnpfHiBuDAFxSDajGZGA29ex93ouCZiwrRAeGBiXY8fVe8",
  "key26": "5wyqCcw7Do2UqumfDkjbqZjAxCRQGunNbbwPhYUzRwFnk2mHqApqYChwFU5a5AnCiGj23KjWNEoMx1R1moAUqW44",
  "key27": "3Z7LjXhrtiXuQ7Grcg9A2QSUWfH2ATgPLTCPcnyJqZnCAbcSjPSbPuHU47hzYvCQQCrk2aBCY6WpTzfAKtTmFnoH",
  "key28": "28Qb1GGLKa9LceWgRDZfcjcFi3Wf71kta5p2ctvHtXZw8ZUBQjGLKA1Um4EeQFx2N5U3m2Q4m3i2fb5NUVysk827",
  "key29": "TpCKijXJQwWqhMeLRCdmU2aAKsYHyWgdoqwaxFmM9SbpcFaCJsxDnkMFYLx3HvKk6kNv1T8ffeQvd6MwC6UfiDZ",
  "key30": "4nvXeUCkYEtSUbpT8Y3tAkmqEGZ2ZE9rj1TX1Hj9LrvZy6mBb3ykASeiRJSarDUj9bYcgpn87m9KbwKV3KPVteUZ",
  "key31": "4Wx2pNB5Dj1Gu97yw9mV5okudXGFvUeU2GRj9v7GAM1TFiJz6rfVE5dxNWnRpxuiYFxQnrD3vV6R3E8hjhXS474R"
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
