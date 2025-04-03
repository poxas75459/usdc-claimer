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
    "2C7wtF5mcTJrRFzzyYdmtWzpKeWXs1DoWmsJAPVCZvyCnyC57nPCm3N56VxzHcQYzJtKfLsuPSNMFcZqSHoPUfJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g2bCysnLB4DG1aKbdRryvv7t6CeLubwdzmfs7fckavhNdfZcfbx5qxsk6xzdGfpg58VwwcRR1sVdD6rtJXS1HyX",
  "key1": "28zy1FNdktyxmouH5swxRdXG7oGayThZz93C2fGm96JAeZ2aJh72r4Ya9cb9muZ6QPnCieZCTtc12FL1oMEc6dfR",
  "key2": "4nBAkEfGJicjkPdeCJ2SDJLSTAW81rHF1yEDD9SL1HSqX5h8jTFA8xLjfSEdp3kLLyDufxQgHkcwdPocgVnBRFBk",
  "key3": "24FMvWtKa8i9qFHx3P3AV26vCQKxxgf7PPhzw6Rk8xgMZYimJdXuSBt5uPx7DD4TAKq3yLCBShhpXx3zznBUmpe6",
  "key4": "jXsvxEJEmyiCLyafrF2dffMMavekwJN42V3DMDZtQjnU7dxESDQDk3Lqn3PcEpx8216Xaszsez1y9ycZ1GNq4Gn",
  "key5": "2i5FzPKqFtcVGiZ15U9rvjANcrAhZPiDQGJgLmSSv6vuasDYvStSW4wgt5to8mAACXJUHBn5LQspDHESpNzUpXDX",
  "key6": "5ADS5mNpHTAMiZ7he4f3VcpGEdq4ynGVSV47Zt8QvCnmf3W4sZZDmcqSPDSqkRFZyNmQWynekCTF8A1arfHKpQuE",
  "key7": "4p4nDXt81D2YRoJdUSYAPeREm2Urt3sC6QwyU2F6MJGP7U3k9fKJ9F5FTcaRjbivBCB5ttoCBKE85uUT1aMFXCY2",
  "key8": "3X2hj3TTiTCPKG1cbZKd9ZkwbejjzvZyYE68MLRX8LyUfEUKQCgLAn5CiC25XVEYDoVp5cJXFSkjjH9MVETvhV3d",
  "key9": "2BnCfrQaiKUhShJAagmvFooj6B7DQq23rwk52dPD6v9s2yHsCndG4TeJvAqf4aGHpqniQRh4cQ8sYFEANmWTRiZG",
  "key10": "HRfegEuG9jFxezdpWysRUyfAZhi1e7WV54HqcvirWKuuVoXdcFBXEFwfaRj5YoQbypD4WpRUEusd7hv3ToZrrtv",
  "key11": "5pcqQMKyTPPABpJHeSqtMpYUA77gTdbB86SUEwrAqurTzQhyZuRa3a2gkiGY7LJZq8RBsHFmEoSobpubE1xpR9SD",
  "key12": "2NZsExLU8i6wSP7YgNAUWx5AtrL6aBpvWVUkDTWJzeLWD7BxnczmZUNGFdF3jBwhhmVYnTBrGHNxqhZswbPmZz3Y",
  "key13": "EvK4z56PGWXWG1VvV9GQVRE41oP42HrEUJf1Muj4E66gbEm3sYA9d143xEmQMu2ZmW8is8JHhcYvXQCXJcqhkvs",
  "key14": "4oqFu5WHh6fM1hwtmv4LE9xs632x62yju7PFeCsSjTrjM8Ja2acufYHzxCKFAmkVLXuTKnBgSFLpJFoNDAa6bJmi",
  "key15": "3YyzESaAp5WNixmH9fneM4eBrxRs2p9zsikA4bdsWwB4GSkCGegLjKEJ5YP6T16zensTUzFRfJUjU9MdvKNbbnkN",
  "key16": "5qzQq84V9A8eMjeWspUd3VrUFrn7eATh6y68Fyu7q1gAC3xpoazXpvV3J9qrWbC63i8AXKJKrTo2v3j8ppvMTDcG",
  "key17": "3rxj3ADNkRaeDQTq6KDZUyp255sKQa26uxrujgJPxF4dXuVZuVChqXtAFtTbsTUsqa4fNaHTEu6c7S84Kuf3XBRe",
  "key18": "4whtfZ3AghVkQpvPCyMVgoVJujemn7cpooSFaicPdAbmewctwQQdDNKux2JJWd3QhAvkwzCwJSiJ9TwzFW5KYbqr",
  "key19": "3KmuEgSpm1J9oMmRv3WLiCBuSwwXHgaU4PfgYNkpPvNZPCA74WbEetvRHgbbJoTq5954aixMxKKDC2z1f8PZLMG6",
  "key20": "576keNAf192ySkCJvJnGG2XZJny9yqQpCaYGZSkWERuSUMW6jYj8NGZ7SGqEDW48gz5ZJBZDGLU3jUY5NsvrLwNN",
  "key21": "Py5jrVBZUxZS4Kpd5zXdngLn3R2ofaQU2EKaXTxjQRJWsK4qWrQB1ZzVLmEfvq22ynEzK5qNmw1CW8zdHxWrb6T",
  "key22": "2vnSbk7eHk7jAZfojY6hdPC4vSZuJtb8YrS3WeKxdHJ6RKAxViSSBWXd9wvCZNzgn5D1AbEHtusNdtSqQzgBG4mq",
  "key23": "61WGr5ACQhjaiYv6i6Uxd8k8m2hzFmBhMBMMHqvAU58k7nb5ZYrbDLDAPpYnFq8opTjvASK6Gf4o8d1B5n4M8hED",
  "key24": "4nngM3k266PwTu7ZNoekWqQoTAKC6CSKYwP4KBgHeZ79azARHKWoqTQxB6bXeUfYKBtWf5uAJcLabap8U2aBSTPZ",
  "key25": "5xQXTk4FZ1432qrrpj4GMhjxA1N3Hd2R5fQujWTepi1zpS21D6hX8PUZRMugEPDfirMoq86FZpDwwEHxct3iHioE",
  "key26": "3oai4aP6SbyzT3uPNruJgKRBzfRa2ze4C47V81Fz242PJ3sN7gNSVhk2yjPZBQUnvouNkRgVwuq78bZBz1kTMfsn",
  "key27": "3NF5241oH8K8y5ffJjvsb24H33air26NvhoufPkV35t2U28nBvL9HVVBaAAENQanGF2v2SihnSf5DL4yvocNUVpf",
  "key28": "2dap1xuRLEpu8thCUavoLte8sH7mjirSZ6bePbeMu74jZqstT2CbqwNeMZivb5ADopHGMUbLfu3GYC5kosSSepUN",
  "key29": "51oU5AW5Y42BhN3yMHT6TY1RfWSzgQ2HCn2qf1fbdzEqJgNFrhbb9QY7KdUV7CiYGfqLDn2Y6zGDYWn1yXskDhvj",
  "key30": "5r32RowxzJQMWa3BswzDMJ6qpN85iz4Amfx9npn4ingSdK2SCQGNZGnPLcrWdgb6FnDgqJW6MiANqAUSGG4JecM2",
  "key31": "4AuhSri3ZfF7CtdRDJ4RfUkySvyJyvCYfNEvvh4JpiPS5p6UWd62YJ47uCBYD8A6VMb1GiHLW7ggtNGYoVc4M3XQ",
  "key32": "QneM9ZuS85EBeArbAJLNmk6yp7epfCRmocGFro8dNecAMYPUvBQCsjzWa4u4ab56htL9RLY7jyBhaqs7bSMCGJY",
  "key33": "3ofXkrCSrgBipoZvcEeNfENp3QF5cCvkjEwegd7iUqWdhc2JU8C4SYWz2x7cSMukkRsySSbMtzaLfNQLia2XwaZm",
  "key34": "3LMRFh9awrxNAXtgndxXQBVRb7PziPPXAA3tjFMyErYbpAvT4S5kLZmFhx2G9N7mKgNAFgojLzLqFot6Aw3NajN5"
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
