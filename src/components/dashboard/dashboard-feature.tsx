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
    "7EvmbFEPdMykQxyTQJRcx5DcnxW2PgyThXsJAkSKh4k5xap1EKnuVoTPSupHAbX7MQbkpH2DpENNpLtChYc42yZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pn3E6PCrCGsy1Yh6jrq5ZexxV3YHSKVZTWwbvEkMt1RB18GWxhV9vGSwXZ1P9MVCbQgzKqGKDxA6feJh7nPPCsj",
  "key1": "4FZNTaQWTQZ2qfR72xcsX5pxyoWK2EEFbQqQNJGJ7mKHL2rmhW2NoATSsCjnvgvgAhCUvDHnjzoJyYqAcbSX5Hby",
  "key2": "dMfKTjWyZwSUURcbVwURZesH2S7EaZmUBSUtPUWaiyT9Lsm9EgT9V2yt3q9h1AddBnsCpZi3kGV1LP2ELqjERRi",
  "key3": "4wUuf8Wnt1ng77WKdrwVBe1egKJvHvCbxnamc7VqftATF25bXoBvYGiraiFHHiy1i5v8q8cGc6H6YMHVpmWpzYAM",
  "key4": "NgFrW4P1yrKZCTyEyLX2PLjZerLTqWEgV2VmXKqKqGz35x7vahvE3Tv7Ag3pyEFekxWfdyhxQKtR8pPnmMyBQJV",
  "key5": "46wXv7Sk4n84Dr1zHqMxGphcWNrq2UMvGQnaTsLmWUEkSPXuwNUXJk2RPH23Sw5xTuZ5PfwoMbF97bvmdnpxCsu5",
  "key6": "S4CM2HEnkwZebtpY7q1c2ohUyU9rVvbcuLCGihTJ5KfERveqqMQc9maZJBwfsko8qZFpwZB1B78PnTZD5dTxpHg",
  "key7": "34fWrG7CDcoiaGAB8cU5A2WMUiJDdhpVcuCoR6FZy2TUUd8saH7ytS4U4p4uhS9JCBL7WWBaPncEASAJpb2ViNxq",
  "key8": "2oAmr3tV1Ty4JufKjBVGuMpKqaFugXWmyMhHy5BMjRiGRX3T757GCCa7KTxZaYQ6HSJWjrixinxLm9s2x6tyLAFq",
  "key9": "aRVnDjFBXPfuVCwT8PUgGAho8wPyMrnzDX64B3QaN8VQTEPyZDEdS7XBi5E1U3ftSySNSnVmz2WjauYsxJbWs4V",
  "key10": "2pEDF4Tvvoa24UWzzev2WaiSgy7qKXaYydgYhsHhA4GZUpyqWXVQiuKGxpqGZqCeM3ML1s5emu5NsPPCa7cto5iu",
  "key11": "2A5HMrufavz6oASC4J8W47SUh1xy8agYaUA8rWanYYoMfQTL9tpe1HvcTgihqD7rTnQmhNFMAsXYon96FpV4dphi",
  "key12": "45Z2DgwPztkqiPiY9xyYfwbfE1d6dhqZbvSJ6vdem47cTBTLrx1fgLTBMw4rdEqp8AjAnxhs4bda5N8dNdYYRHvP",
  "key13": "2r1uFeJeDfZLKJCVMVg5p4LE1iFby97A7RtjGiFwaw1EtsWdn7YaZxYirrDSRT4Wr9zauGKBL9zK7A3TWZdyV2f",
  "key14": "4U8itqqh1EZRFwy7WP2pWBH7PGMKeVABEojADY5FdqFYrzPKL4W6wFkNpfJsf3JnNL5UwzcsyY81jPi7RUkNhWf7",
  "key15": "5CXLQdcQ6fAtKppapB91HNy5ETdHhBsWpQzyLTC2zKUUCajjRtbR67jJ3ei5SEwN7KBBw5kQAivboAZQn3Epz9ME",
  "key16": "4p8dphaEAosb7YULX6ozbC3Z1EvypKp15VSwn1aBbsMQHsgXdxvp6Akun23x6ZQ6tbQ6djnSRn7Qo2yEUxutPjqm",
  "key17": "4yTTVtbdoEChPGrgqUSBKixFD9vgw8fhusUujafAvrUrtN6czjpUhgm5WewDi3XuyWib8xtnpow6CJ1FN9FDwf4N",
  "key18": "4K1ssQmTKDXjofhPJNQ2wkd8cJugKUGCsLbr4ru3GRvK9mAUbyRpBVRyjKX2yutU9sicqxgGzkqRtHazgB6TGA4v",
  "key19": "4axrXfbqMQa3FEhjT2ExGxUqR7R14Mh1eHnbDdF16f2grNkKToJwwppdChnJbDVizEMqz3oHRscNSXWuc1DyD32p",
  "key20": "5gqGzdr5eesbTRRpMM4qbpGJwd3RPkRacL1VYLQkczSDknjpsmGr21wBU18UfcY5XKmrC1EEdYee1w8EUNaoQYoE",
  "key21": "tc12nTjyhWyB8c6xMH7RTyVcEuoQALDzL4d6VTwi4hTKwzhuvuM1i7SzqSw1iJDgRhUpmwqrWxQeYj5zWW9Bwm7",
  "key22": "rfZpZvmukGdsaKXNJqhx7FCW2hik2FfYeNFFKU9myRMPv3As34jjygyJeQmuuqasbeGGVQCrKA5f6PN4FC6hmuy",
  "key23": "5Ay4zAKE8k7n8NCA97mRa1QZqtKLmw9T7pnzkCN7tZ74ToANmTxHnf4ZW5ND2hDYoY3TuyMgtqrzdgx9VMchGFJR",
  "key24": "SzVmhHtfyzpvL8ULc6EeMLLWipsSLxkbqXdXu5CwAi3RR459xKc9ggtfRP5m6zGJubF4xVQ7Cp5rScko6M3P9F8",
  "key25": "3zLsk5JnbDY73HrCFLJBGFMqnFMGuz7TAeGQgHX4HZqXTieN3cgUBRFqUaihW7TctJYRXVY9oCJftSkfUPdCar3D",
  "key26": "4Qe2tUUS7NA1uc7Dy3x99e8MijMQNRmVWutvvqgKnWFwQd6QUhRrcTh42XtndAb4LJyDCxJ2BPtpitwbRDiyfdUh",
  "key27": "2FMsPshm7RqrH3KXQbuCqq1hseFTp8RVQShZwgR7pqZhTtrrLp6mYHkiBc5SaWquK1i8BQMsifC7yRQKQdRbi4Nb",
  "key28": "28nYQiQgdcxJyV1b2ArSi8VbM6drSURWNaW6TgQtnQG2xqnRsde3bZceEWN9rdX5H6sZWUbMC2LCR3fQXEvPapqo",
  "key29": "3GSUEVyj8L6VcoeEZ1sizRZWj55Y5cz8KsjRzMbqKwd1XS6h66eJQB2vnsV8ZnPVvNWPTZHoU3TVnH11efE2EcAD",
  "key30": "jBHdoENZreSyYqoZt1NQ1T2x3xhKCSEyRpWN6g82i9xgZ5JmHk44mqVgCgBPKQmyVznLXqy8xdeEWN3AZMdnnkM",
  "key31": "2g1uVKxQMHnreHcB659XG1FMwXxhCkm7wZh5DzHZTHhmAZ3y9Jm5gJWtrFTyHY28NvYzHEam4ygoNQeV83wkVenT",
  "key32": "3GXzGh7pTQJXuvjXYVJXX8hWuZh9XDHNuN4zKCVGnDA8BsckH5wQoGrMiU5Pc8w9MFzrRjMGz277qwStjzNjUXNc",
  "key33": "22Gf3FHhhrmLcxG3YNwraLFZ661xAJ7RWggBF6eMk4yCYHNjbCFhsN2nebw4iGXfZJiXnZgGiXy51obvVzWm9jGG",
  "key34": "5Z4fSRyTaJxvUtmCvvjtPvLWmLixEBFuF6C6WCanviLdycdP7EiH3Gen4R7wpFZbsq5DaKyczbWxoyYeypDJr19U",
  "key35": "2gUpjV1oNYVMC5b75iVvEybMiGpkrt8aTM3EXprez3cbYno9K9jKuWHneJae6HcSM51tz1VXfGygJ88jXyifdU7B",
  "key36": "2NQ6259f2RftYD2p4fBfhSbYkquc1qwMfdjUwJVobqQfrGMxaAdXZSqCav2Lbea7hWkmPXNk8uob4vA4BHHR9Pj7",
  "key37": "5oNsrx4xyNFJ3zZoHYtrLwb4FNHX4JGkJrMB16vAH2r4L86xhRHR1nTV4EpQL8rQpsnphxxu46zWxLAti9eVhGfS"
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
