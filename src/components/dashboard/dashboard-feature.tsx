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
    "4w1u7MmMHswyJPdsjs5b3658Ghqjdcwcw1sawPHN5yVCi1sMJ1vhu244ZSLdbGon4Qb1dvFRnTkKoEGK2rarCa1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n6KhorKNRsm2GvVbjeCvqgV4ycEdPuzHXNvBSQTPzfQTmmY8RUM1ucx3tuSZ5VkP9L2G9SqchTZKEcHfZTwnMYa",
  "key1": "5bpYcqytNTRBzjM4EwngZsUxxqqMkVegKFxfnmdUpJbsZvnyVCosx131u2inhxz2rpoe9JYfxqc1e3BgVXrch73q",
  "key2": "49oqJBsKdT5C865LcRMP8vy75ZS29xjWn3rMN9z5UXqWCsBzWfqtyzs2D4xaBZegENU8Ck2KzaRwaZFk1WmnRpUU",
  "key3": "2tGPiEMqm3T7UDVsGnQJknEYhWBeQR93LiFcsUicpN6vtPTTXhx1iFDe3c79HDVkTbqCeYk8HzMUEEEzPPT7q8ms",
  "key4": "3cGkXgB7KSV98sPbtHU1EFdkuB9E4p2WQPZovPHpa37UVv7v1kwri74V3EpfrGWpEAG198vgqKjRWgUxrvQV6zny",
  "key5": "UMcaCqM332zCtJp6iPrzRPsDy2P9SiYbaM64v9XTTVVueLKspRqsq2fczcUUUX2qQW82jSJfNUE9d6BVPCbLoyY",
  "key6": "5Y1deYKCAEcV3zn1p7v1HwJ27ukNWpJyi2UDSHjyEestvhbLr9QW8aWsCSfhvefC64Si6bbq1wsmP76JdApDjQSx",
  "key7": "3AJE52Bk8SEJhwns43vkeHQoshf2639HzecYuuK5WmX74ieLeoYPUUnDSTK3Wt1oA3MTsb2XgM2AUtziVPFdSNr1",
  "key8": "4SsjVAZcp5qu8m4NPAUFVqXF7Uf83kE8Lp3ryFkjKfw77uhfF3oAhE4gbVhRHZyLP31U3fUZtVH2Hsd2XeS29HmA",
  "key9": "ohG5J6n95X33XUyvhzUGzauWdAEzTKt8PMskDvWobGkmTPBFs8quwrenamDahEe9X6e7u4rBrqAf3aLLQ7PiHe5",
  "key10": "5BDTxvizw4xjB8K63Pq6mjKNUm3QJCW9Qate9pHBBSpHRAtTbjXhEWChLhjPUu5QcouNAfu3xYq1famyCtTJMQRh",
  "key11": "2Mbisde1FYbCYwqiZ8HKcQ2yAbfhwMJbUm9DZXQZzjYKu2739wXFLNRH799ex8eWFUWw5675VJJkbYQ9UQ7WAAdw",
  "key12": "3NowqfZUiZmDiLhdC1pwVXb89WVino5Ao1Zv7ZfCFQzouU3hoDA7e5sBX38FHeh1WJS3SwoVLEkF2sw2A3nDXY49",
  "key13": "qv7FZPvgAHTMFdcWKWF8g2WNVvniz8xG5tJNcE1Aw8WKCT4kuDgNPQMg9epkU25dsDZYijWt1xGfQmfG9H1DRrn",
  "key14": "2dpETF4s876MStQGf8JEPpFwSdc5WdpDALcg5CCJNH5Y5g9HxV1EixaUBEX9Z7MxgW6z6fL8zysshqh39bUR9YSF",
  "key15": "4oSfsgQRGyxy9rzYYkr1JZVet4iYiWs4d6bcHyJx2fZUBXZ3hSsQ1Y92xFE27nEoy1XahHAG7LYARHpQF37oSZDH",
  "key16": "4Y7v986FaTuUh7GqL1cCiNL9QVbSohih9easPrh1MMJZnyph1xqiPwpEyH4APob6giJKxGLDkpsQ5xmY1yaMBArA",
  "key17": "4BWwra3Kcox5XsRnuC8tkgQwepFc5aZiqPJ3GLRx4yp8ZDAA54P3Y8mjrajaCHBcdt1dK8CN1z67574H9MmMPvs6",
  "key18": "4iRzaDoMExWep3VQTPedwGDuUAnbu6pCPCaNcFYjXtX6kiXS8ZaNm6VoVnTwouVg13FKh8T5iDjhw84MgHDMcrHQ",
  "key19": "6atcjjW3sUkgspXw6BzjYHZ5GaNY3hkzv8jGdyidHGLa3xcjqzpAQ1aesLJcAnUzcj2DdoqiiL7amyAEFtVdQjv",
  "key20": "2x2VtcDC9DYSnYgVzHS2fcXaFaYNJdojtrLGuHN1DkNB1JHWkM1UrReQPVmPENZtAnwL1PDbWWD7JqN57ucFoQEc",
  "key21": "3pUGtkzCfZn2hBgGcmN5N8zzJN6CvTaBruPaETBt3BJhVMNtpHUvKmi3vqGhVNpKLcyTZkbhjauVm253j92qV4J1",
  "key22": "8DXyYrjdh2pZ9q21ZiZ9NQzR7FLo7ikwFYbyUe4Pema2ur8rQD27dBRFENDgZH9Qv7zv5vRa193QMMzVQWbf32r",
  "key23": "VVS5abk3RTk3N8xCd82RTd28rmhHoVWsoB5ko6wLQUQzQnDxhDxZVhUgKz2BVopdMdwPgPccJEwaZBuJA5jwDmd",
  "key24": "3pEJMQTqGRNdUtyQ6d9VmF5FV1GqQqQsoPfedYvzGvfEfWkCJewCkiYmmd7CqdBbAnBGoW1CrLSDcZV59xeEoz4G",
  "key25": "4wGhv5yGHMg42Hp4YEhjURp6D9kWRzTspn8GkwqztgksvLYspxpaHFW3ka1nAdu65VizFEJaSbAWE1Xw9wG2VR13",
  "key26": "26vzM4BiAVeXw3hjRvnYu62BYJGrXZXBjJTU9jEcX3DbAecHoAkAtmaLWftfycqAA7tJGwzP2iLqnxXD2TNdUGNQ",
  "key27": "2WCc9fSD4hsjsX8EKeUzqwgE7pqJLq66K2GHpbbDrxPMcd9CxUrBgrC1Jhg1vsyp76GMKkZDUskTbxjhJA1KUdSg",
  "key28": "NPktqBnQkha6mz5Mjq9MJnCMM6QE4bQa72vcVsKhSsBgHf8xzgEhqiLTpnPpBAGf7xwnNX2TSUFE9NrHhcwZC4W",
  "key29": "5XEayNDD6hSizXBZRyvCn3L5745YbzBiim6xhdWVj7S27kxcmqxTBdWqgLE5wAY1vfvCGyqtc7PHTkrz3Y6ddkMs",
  "key30": "2Tr8U7E4k6hdhXkt9hiYjmK8sysRsW7VUw3YC9GtMR3s4YF1dJJ1gP7KJzkKyof8MmVtfAtdoeVbps2rF8xUQNjF",
  "key31": "4vL2VTssX2um4rsnoFzTU7zvP5X2TW2XiinjvWRhSkaisRg8ZjVzgzeNeMJ2Q1gm7DqoQDGGcqDG4NZefYJBZdvN",
  "key32": "3Qzji3zHR5AqaUxCYJXwFmNL3LQUXq4JfiBb94YqkDFUf499vnxd9k41kMgGZg6BfErpYn9ejJZtU4LvDmynQ9Nu",
  "key33": "5B78CrYNr1ZBfDwbUbqgBBdMrXmMSeqMuSJkd3CP1qtMaKN8M72dgAcDM23NS9nWta9VKgUsiKJpvKr8vMBqTs4X",
  "key34": "4xhMcDYmve222QAkoRkKLvwdBfbr23eKB6wgnkbYFeBBGdzJFYBv1bMHWEVbiAi4pnv9Yq8JdRVt3dR9a34TsSMU",
  "key35": "P3FEtABiqEPts6dY5n2ettKvZmNjvJB6JJ5QT1zXWUyTnad6BRTR9Uby2AUcYYsN867jZEnBoLfbCnmzmK7hC6z",
  "key36": "3FCKyvz2GL1kD1xG2YWjQEpYSgqEbfFciXLe4GUiMgjZP72f9zQAk6j7vpndmnDNQjzfsg67qKMqW3vqY3UMsMYM"
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
