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
    "4hAbRWAiHe5QjwADpM72vaCFcfddDhGocG6YG4SCDbANiucADCmca6KEcHAUYjFyF3WtDMcigu9tYTcoMSrC1d1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xbod3ziAiKwCvMF8RcoHAXPCZEQCq5zaiiANZQD1FX2JE5Lt1sK39Yhd7BXs6r4cTDP97K3kVbFaAy31sfiQ8pz",
  "key1": "5p8T7hZDenkioeGt4VjCaJxrHF89g7Gf979BZCx91EbwmkMWH7zRDsjos6QLd86Kd3bz3XPzzBNy83KFjSr993M",
  "key2": "3RgP3oQPkdRjr8ctydtNQdonsN2yEptymoQ2KPypbYLGKnSMW6Pc17KQaSubtnGPbkguJWR2UHFguVcMspX5sTsu",
  "key3": "4RfGgQvi9dTEeuGeiU3i7mfeopV46K5Acp1sg64akhqnDqUz8xfK4wJZJEbMddfnkYygkLkhBzCt1mwYc2BwPhw6",
  "key4": "3cJLnPNmjz4g6zQVx4LaPu6ggRhUhpEFo6Z8uTjBXFPB55bWxDYfhHCTghLhYxVWcFZCYeMJpgKxAiLPmQR7NgFH",
  "key5": "2f57RHpGZtaCcG1F4hhgXWw6daAsXdC1Q8axUzMs9T2znjkn59Uz86b91a8FVaz9Qsg91ZXEsGZJ7xPgU8WvXS6V",
  "key6": "5EPgPJmLw8BfDxsXE59BKx8mvY7SZHbK6icJfjTAZymkvixqjgZyAPjimKPo1rCUGrzYLmRYJ2GhU8krGaG4CUdC",
  "key7": "5fjjdxcxMpgiD9GAW83XnyGTm1stf6ohH89E92iRanb1LwMLDpkz1ciTa34BWcHrJhbPJhf1srt1oBTKbUgwwxyj",
  "key8": "4ec9S8MD3gYi1aPwcosju73n86Zku7M5aGHMKB7jwkx18WD8YpkHC6sfNen5koSPz1vyWzbY1bcCEtaZc4DGb9hm",
  "key9": "5RyYvijQa65sLyR2nPemL3oxonGyv9HtwcrfTAAfn9fGwzgGP5naVJwpGtvXyphVHqYtw9TjwUfFcUzbWRXSME3V",
  "key10": "mAN8ybTKQ7ZLpU8cULUPzFCvz2GKmUtepAFJagumTbQ55MvhQ1dpjVj7F1TfM48GSVCGASRcuJQ7empnaZ5hkBD",
  "key11": "26yUi41tj7Ah9sLngSyaMqfSXnLUphipTaSSzhUzf98iEKvvyrHYB4nChUJrfhJTphe6V4eSXfxJ4uPE5qwqCQvu",
  "key12": "4APjaXGMxyJzH6VC1ocSXwCsk3ntEkykhfbAiAPkrm4ox3ajDpsmeFA6tLPfykUhLcEumaAxW5kfkooNMPVkzZsS",
  "key13": "8fmCZfov32PYi38TGfoQVb4RmCRXfe5wBi6ci9J9dybmiCLyB4FquDZXF516Wq9VDomXQAEBYMYWNBHruJxWvu6",
  "key14": "5k26PTRC8LovFPFSUGTUmoDjeddfEfKaFt5U82NAKhtFDxzVhiNc21nJcfUubhsHLEzsEcPQYqNqhtSedBnkwqtS",
  "key15": "5PvCKGBoNieAFvN72F8TKKFtZ4BHESxa6FmpCeZVvKH1QHqYH9ZFVix43JCdj1yUWgxyRic5AqN1qSwXSTMbAXJZ",
  "key16": "5sNnQw3gujjWKSzg5kFtrv3aGZBz7rqwp9FKG5hwH6s4HfBpLDznSryKkoJbcx9QCvKxGeNsrjXCRR79TWXkMycS",
  "key17": "5gzdb4FQKpcCErjCBzPCJqKa2RVzXQX9VoZPqetuQvY7w3yqC685p6Pre9tTNSxDo5imvW6WK1sBRzLoxKsqbWyt",
  "key18": "5zb1ik19PFdVsWWAQLiiLQ738kxY5JiTA7N1mfJnZC3dMyAnUkcbkHDe2QnQa8wKk5fbMGrDG2vc1cPkcGzZvZr",
  "key19": "42F1pr6kpe3iZyeh5JvuuWTnoVkeb561kRWKRBPaUWG9WaJahZrLXBQmH9UmtirLiGiXL4AvJaKF1AFDWscKxoxY",
  "key20": "28M25UkUFg63KDkRu9TRFrNXBwH6rXMMTyAGQ8KpXDtHk6hD9NFfE7XbGvP6MYhZgoWzLYvcdZTXp9K5cPKYnDYP",
  "key21": "4vbpzceBsb5P5DZvydrfdN3H2Q74y5Cg6aLkombffpFCoDkeBvApqedsvt7djN2CASs4v1C3ihKEYD4HSB3tcvmW",
  "key22": "49gRiFrAmox5246NqRumgMjGhGp6i88kijtGarUfc6c1b6pFkyisFCTGbQoUZSG5fRaVF9ABpcB8XP77wc7KaGoA",
  "key23": "5yeRgCagzMTiQ6ZfJWj6LRA7YuEvxuer7seYJFBndqf65xXHiBn1TQTPiA5BEuBapeBz9FaroNBD3LWyoL4djvd2",
  "key24": "4edGiut427VCFQniyXok2atAmJrsYTLaaQi7icyj7ULDqmnskjiu5FsojpQCaoR8eJByY9iaC7e7CRnCsuaQ1qWZ",
  "key25": "4VgfCneg2AmLfuHmzRNjqdJcbXYsCNab3ySaUBV9cfqAEQ9dtXb5wh8Ngx4BPFTRAnNzLmR6a3m4dRjMcCYYoHoT",
  "key26": "3zpayiVDYBQREum7Pmc3DWS4zT2Bstrqp9MmuaUhDWFHYqvkBmgeVKEERHUyzhfLD1sJVRpFRHLc11J1NucAUXTG",
  "key27": "5Tr9oMub1LNGNiW4oB1G1Fm1KF9S472x9QKcRMSK9L1PtQDwkVcFJ66QYvQovWdhuquKqtUEjVX4FyXACRXWo35w",
  "key28": "5z2BDCpexTiCmpQLxHkFAqrndacwaRT3EiU6uy7WLhmXCkFRTtjWWiiv7671PASuAdZ9k9CZQMoV8jPhQ56ctqJ4",
  "key29": "P98fzjYcjkjom6YdtiRUy19ommNdDx1kg6CYWiiapzHmzFvBpbmKBtLphTccbdUwebHKwkhW6kniKPLgWk63eky",
  "key30": "3YWJovA5YyJX2ctXCtbUH16457mQWn7Nr4wmSa7sWNyRHADbQS5J16Yfx2sSYT9Ste3LCELhdGNwC7h2jBj2zvuQ",
  "key31": "JkyLENqJqUbJ53bZUw6FQDegeUNQqBogqZYmvyX39Dn7bVY5AajaY1MUBRWNbBV3qY7Q6fARGVNoBTwKvUHvTgx",
  "key32": "4o6YnVo6wY47Sgp2edQ1AFFU7QVeSrN9z7iZcdphugA7uAGHkFWtpnHnPaTAcbNBW3SsgStgkjid5rMeTBASxZ63",
  "key33": "3VbRW8gmdS4Z2RjJYwQiLRJzE5RMMGXYbJubCeGGepF9dCUzzMdeEGRDzYSPsrhocg1bFUSHwSuD6m62Ay16CMpM",
  "key34": "4XVJ442Rx824p9LK9PMeiM1ECwgtWtE5oihD1MNAhbwtBCRMYzcSvZ3SeAH7C7VJVfDaSh7FiVAvrLN9jKPQbj9D",
  "key35": "5bqKaMtHEUi2GYuoPeDpZ9S2auFzWgHhv6H2N9Tz3RoZRWj24yWkeCvwNo6xjb4ZDw8PNDD6D4wwbbbYe9fXfqX1",
  "key36": "2nvNuo6jQ4EpYGDExoQdxJ4bqW53VXnaAHxV2NZKZvaKwWsjguRszwthHfSDtZqCs8d654vRTCEfURrLQWndDKN7",
  "key37": "3Xcjsk6WWuskgq6SXFfKv67urzRJ2jvsg58V82y2fiRnZ86ME8cSZwXFhRutSjgyUhcics322wLN6iaQQVvCCvTA",
  "key38": "4ky3AyW4iBoXKQwJv2usJ32vgomcLZKEHyR8bF58XiqtT44BeCCew3W6zbvw9SWbV7vd5LLZDEGJvotruZYyd1z4"
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
