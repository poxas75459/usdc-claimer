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
    "YYttWxeuWoE88aRrA9x9f4wUNf2J5P7ki5THj2dTn3AB1KfN7CD4drag1qQaoNz9L8K5fmK5oetKkKWJtRX1wVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G3ZBtvEe95UBQPDHZ8JDv9VS8eLRTN2zMjnNkqkkMXn6hyBiRrJyBmiLqhXyC8LZNjzJPeisRm8tbbH284uoSmp",
  "key1": "3sd5VfD9ei74qH1b6qxceCEcWsMfFuRCW3StjLp8vriHiHqVHff1i51vo9wVPPqjLj6npPYCTXJVLcSpF6rw59Mf",
  "key2": "4DMsn21iRCNy1RCUJzUhugsn51RckUTexXwk3hF8f9T9v64H2VnpBATD44SjMVbM94rMWTW6Px9GrTc1rUz1widF",
  "key3": "5brXjcPuZu4i8b6uz1uKAiC93CeUKkkPik6fRuBa9VsEtDqdHTTKritBE31QJnX83VS51pae73s3J1yKBygmbwTx",
  "key4": "64tnM5yFPRyTzEiFthvpUJLAsHc4pa6fvBbE7usZPwvUNuQQBiu514CmBtFyCxMzQknkphX8mSgNFhJCDYydDfsu",
  "key5": "3Rw63xkujPmWAzTgTqiPyC1q55sfVuNgcAacEqEo9AbhkLEy7irLddNWbv2YvjTakP4uMwkmUYavDsDKFJH5vPbC",
  "key6": "4pm6LgANn2MVh74MpqeDJppLKhVCGGFR2XK9KpiusCUdgmZvJ3miAT6eaQswyRNtbDEay7GcGXis4X5TnQefH1wJ",
  "key7": "2hvL74rwispV5V9cmqnQcvKfVsvULTKn7R9fSsnwpjUUc6kRT8oSNFtvMsaz7K4N52Q2jPMiT8LvbV5pfWw55ANz",
  "key8": "3ZR8VswrQEHYc3LiN6W9bTqwaPmkYbbmX7QMbxYzPTP6e19ZqEFVYafe2rVi7y8HHz9MNiovqZq6fUQ7km2CZxMi",
  "key9": "4ivKHU7HjPo6Rx8kqKmA4vMUtbKNMjzn5wn1JECmDeaqAFUFBFqBEgHyvP2eUaCKLWuf2yay3bUBGyYMLJZx97tj",
  "key10": "5na5v9G2rxmeEGPr2wzbzVcLUMJDoYN2ecm978ZziqyvHRsr71b88H8d9eEcef37ojREqkjPCqJLJwC4zY8BPBwu",
  "key11": "tfruYkQDAN5MaLW1WyjDKB7T4WRmb1sdrFQ91QGufGY5AWPBw52BspVz4cf41Gv2a3WAHdnA1Zi9E81k7EqYBPb",
  "key12": "2rM6wZVm72QxvWvd84CKbDUYA16Nrnqn8TirDsSEQ3X5FzGkt6DYAFKQj6Ka36MBe1hmgGqFNWnEALJF8whVG3cV",
  "key13": "xeRd4dmMBxLEcZPHsGUfVg9FQmAUScEipYkGz3JoaAPjkz1y3d9bgXmRABs9q9U6C7T9HoW2g37FxyscnuJRVci",
  "key14": "5Jctn5YU46XZGdmzN9bkVKQdFoUeRBxv3pJmqKBTidD9jFchygDdzxPQ2ovKuUiMNQpJHeVGk3ggw8cBdM14F2pH",
  "key15": "Cc3Lt74KeVUg93XBdkgSXEggwWV7ok6zFnbWDCo1JWqJcBBtxnC7XS5msGJjUxCHzEvdEEC8eZeAPAPoiy9e7cH",
  "key16": "4m5JK1aqw23kCt33UcmBtsnuEYJwDMompiJg2iELLBQ7xb4a8JCxV7eHDxt4rMCG9beU4fCsYzAwSNJCCRPEdcHD",
  "key17": "2gTNbT1dMY9LWm5XdyeftgR8WjFjM9JGX8tVrJmiSCYndUPhBaUhYvzmDfqgbBiGyGn3qd5XqLs14sRft736N4p1",
  "key18": "3FGroawziCPGjQTAMF8KJwhUfMpfPJdAPLRiuma4fqXrRzdropEUhaT2VZA85EkFWaWyjnRaB5M1fPbAh8iANJMG",
  "key19": "2nbkUahqucByot7E8FovzcLNar5imhF8LUs4Zeaoir9UHkRC39PWzk1HdqPJzpoRiQbojRcsSda2BTyb3eWEg5qU",
  "key20": "4p1yQkyn4GLFPa3pF6YpnUwFGa3RAEnqxUn7RRivutUsZfTxpEDiYfPGtp7WdhQ7KbtGN7xmPwyiQvGWVC5srGjw",
  "key21": "55sdCFqPApgFSUXQw9cG1Q6D1dQpk2LdgVuZZK1u9aHLVwCFFrTLXv5bKeCWWqBfSd9WjufoT3YSKjmzATNQXK2N",
  "key22": "9t422syyfA8iEwFKZMVGM6rikRV4MqvfhWwLN2gjFJrpYiymWEQawRoCebude6NBb9WK8aixqwnzefMShqsKSeN",
  "key23": "3Mrcse6jojpPAYNNGH1nuGnZ5y5iyaJLm2CmC8Jpf2idHd4s3Vwxej9QH43PGUweCrUxGpUg9Ums5r4xbBrdsNj1",
  "key24": "2WcDxXSrqtMhM8KzGNP27bmydQyC9PCH6C3dajNrCUU7u82dWGZm71dyyjVS4ctb9nkfHAYctr4fYeuF13ybGzeb",
  "key25": "3jHNEQRACSkAUZKD5LCiGPF9XAv4SmsMHzTLhxXFTEAUc7p18gRHXp1SWoDEDNuCAuNfUDEA3RU8EMX7aZrdnmkS",
  "key26": "3pbHdA7K8nt59HosmXqYKgFxaLkpZ3mve4Fc8wkuRUfnjx7FZraoEHaXxj8SA8jeFYBE4EXfzDpRH6jioqgusTrS",
  "key27": "6FfPyGmBPCJTXX2nmixqmLqMrxgRDaU9FTcJ46Ww1RKj5jKGRceGSEANJaxCBwG6BqpCLygJws4ujTTvmbzVXty",
  "key28": "c1WHRukb7gD9NpwibRekSUyCoLrhUdjhCEKJxvpGkkjYYTTQ8X2TTmfnrhx41qK2b9Ff1AD1vSHHKcMKxpEAYWL",
  "key29": "2T4JbZ4D9mDwJgBuT8HE3YG6kkiGeca5vK8niU4qaP8BzE7TSumUJzksshc95hKmskvbT6UYb49g3sWitzoBS7w8",
  "key30": "2oB5Yo3cU52B2DRKYMGwcWdM6eAhy5ktYFFqT5Wrm6jc1xAgnG2LzBSiuHTBrHYfY4s7diibUCCmMCEydnPvNQvc",
  "key31": "678y4M275MinwaRsoWY2aXvasoRN7bDuFwSpH7VPdR8ycYCJ2Ai5GWJk44jZQkwu2kmQWnsniFGz97Jj3Fh2SLy8",
  "key32": "5DEbPAwXpRvDUhUS5suVdqdvi2Ye9tWx2oJVqQX6VcKws7YmcdSNzNYVSPvdstErNrgPS1HtFUcJT93vG6hk9Ltm"
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
