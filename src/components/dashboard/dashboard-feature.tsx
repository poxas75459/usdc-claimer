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
    "sokgsSRK89PaCYv6a35nhX9Gdrsn3uu7FAdjyrkjyT8a54XVBTHx29uqAzR1pL1ZjEmLSQwujjEsbnCqqBXmttg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ohccNMRY7qA7gzVEYEjwtbjYrFbqbkcWUbPrkVK6Xt5b8GnP4zVXHd9jdmGHXftJA7kc7H1e3L9TqGzxZ5JH2Dx",
  "key1": "2mjuPq1Q4nnWtJfHnq465BmWo1p39Mfi6stAdNoSHggJmrc5Vx79Jt2iQmasiBEgyGyeh839MtGMhBoepnwuM7CP",
  "key2": "5XrSQijYmkDn352DTfaHivmmFiAzvtDCk1CsGgTVSmYoH2m6SRiSZiZ8np5dBZsh3VNZQ311ohgneF2P4JVQC7Mf",
  "key3": "CYm4ZDH3ixEBfASB3wKiQD6LmGHmNhdYvD6pwKDMeF9pZLQUXhvUzEkXzCKsJqD6Yd6UQN4CovCFgzeorc8FiGA",
  "key4": "3MzivRCynfwatM7a9KF2ALtEsaFcSVRSRzy8qArPr25VTDQ3rZq12qRi87YQakitVZYRbtKwmGWxawKtBLM9F3tg",
  "key5": "apQaxtzbv6hQ8PMijJazQz5RBePQpoji6qx1nAFXprTyWon9RSn5eJymm5stuKtJCCJrP5rdiPF1gMTzHuBa4aA",
  "key6": "4Kg66jFB9c5vagtKfRjn15cN2SVDFT6Ct7i8Mf8tfywDbHeVksU21QnEyqwPjxQGuuEdGEVx7umrQ2tXt263FwQN",
  "key7": "2992Y9urcJUdNR8T4kUi4LhkUZF8ZDPR2KvoZECC1w9zwQqr3jBuSVAuu3jc4tey39bpuq4sEqrZTirzth3HecML",
  "key8": "4eyTbCcD3sFh8sAUhVSSFJZK67vy7LCcYM1UiA9FyscCCQ9dh5CPbbfdYwf685UhgS2MKhXDbPpPpjRSqqNf4sGP",
  "key9": "SKGVCEPN3gmTfiD8NgPvTh1bbna3vqiGJYmai6ymcooVQ9wKLn7wgFBLP8jaTXnx1cqLLSmABqPxFA7npndGKRc",
  "key10": "3qjoKbAbBvxDfC4gu1gHYYCMYDgWCuvRy31tfUdiSNuKkUJYUN6GYRp6roGJBhMNkXvKvzhhuoA7GGU134FRBiCr",
  "key11": "46KpzxaEBAzhohsjyGFzhnb4AdHc4FdK6EJiFzhu69K6UApxm4fmWnMDopWR7TezyWrfeQYFV3rZycbkKn81uViZ",
  "key12": "8kMDBbzCQi76xTqJqQTzAvpLXHeVp12sivmVu7JkuYwaegatqReRfG2pNWK3wj6DENxjHSh4EL7tBaPRuK5MGdC",
  "key13": "aun1mEA86YWBVHbPVG9x8ZSYJcovfFqCZCjH1be65f45GUrx4pcaNJ5zHem3B1NFCmP6cYzcfZbkcVWk59d4db3",
  "key14": "3ckqRu8EiKGaucoGH2w75iGF9HrcMH1P62D4Li1eE1MPq3jqmxoVeVyMwhck1NeCg1JuYS615FAw1NW8zRrCg1MY",
  "key15": "5t5Q2PKGHjKcQNrVLcBfJ8YbuXRpUop8zZhuKWSuQmQbYTpvFoXw8KbgRfuQbDNEW2vpHxJheUW3aVeV8jsFHzLe",
  "key16": "213m5Xb3izL8TmREoLqkc9opDB4tWiWaQoRYMCEGsBbU81ds9LDLHqSWVwQavoKoT3LUdUTqdd9zVYThMuWFwaY2",
  "key17": "43tTETcppLsUFTmPubKmrgt8EVZ6MkMrxXhGSWCsHSCfiQUxCXmMig2RMTUtafZT6yRcZmsuXZehqNLX2pPaFAn3",
  "key18": "2XLmkHkEHHUTqtJPHs3qqBjeUH5mwrCgKznKxNtuNoRXHyfbz1vPZr1MokpV661Zb3RbHLtTezAPHHLwmxvef3RV",
  "key19": "48MmeG4dYPLZN1PK4TWTk2ew6nLuFTgXcDQnoaN9QFLkk4nw5QvQsMZj8RmBXdzBj2m6a4QXvDQ5bXTESSBhyqH5",
  "key20": "3PcWTWuCec6N8USb4ETo7ozb8tk1d17H2dxMMmcGDiBN8KXWMqazQvKmAtLpbnDZGh5w9XQixoAeV35SRwk3mLWw",
  "key21": "2a2Cdwem8xheFxXivfuAKyxpZaUhZ4XjPsCncxVDU5ZftDzwCELvcpERBShfR8YyttWqezDbq6tz5qVnrJ3gQxvz",
  "key22": "3GLpYvVcGrvpdDCEDaoXd9y3WepXYomkxWUHNAgH8gxyko82BmHsf3B9pELT3WyDqa9Ma89T2ACQFgQ8K74hFANM",
  "key23": "3FkqtQMK9KmzXLUVvXv5RpGKvHYyB1ey8gv4MdrktcJyQGSpTeDeybLZtqjkcHhpXr22uRm87NwMc1uYkTuntHZD",
  "key24": "ozJEHoJa2WwCJZjDwwCjqsPsahJUWxsMTeibxLBxwykSonsDqWKTL4agqNz3yR7s8sMEHBumZxXyT3ahbgVALKM",
  "key25": "3TEkCdQ9GwSyGvCS2dWgAi3shfBWEjN6B7Hu92Lf7KQe1DD2knTytKjQf8Vr95kJkyY5udJzWhNa8suRH7o8JFpZ",
  "key26": "dm17ZKyunhBAWVYWUoNXz63XEyN8w2apDZ8vofcuCe4FmYFdiGJQgw8DDnWHsZi8Do4wCfFvgtPoqVVhuormt96",
  "key27": "61fxsKrTkNGBp42sgjtdHrTcivqyXiWEu4wRdisXPNXzgt6DAQZdv448HiZMuD2NeX4EGXfpgzxGrtyKaTWcrEBd",
  "key28": "3ei8CmLj5uZEbDE5tq7EbGwyoPkLqRa2PcLeNKXkGvG5NSEuH9HBmmRCQMoM1jdu9xijrVY3so2Mjk1vJPcscvUv",
  "key29": "E8j9pbEEdTnFGkGba5DqugPhzQVGgcwKJi89zpgWitusa8JG5u42Qq9i7XayM7A74axejR1bnsyhNZ4y9L2Q26K",
  "key30": "C7hSTTNdxiY2UbTHZodkErKeoP8p68gGCXq63gJFReYrPofTZNWMw2r32ducah3oBPKAZE3wbDya8mxhs4nXeuQ"
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
