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
    "5xaSoR7oE5ryqZc2kFtL2N3JgFPZyWhMGqZ33m6ENPTg73HcJQ316sN5sv8vahgeW471DSZ4fNcuNFwkVHoamfgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34kXk3Y9dadPYZEMxnq6H1NeQhwHKYGtUzcJkkcfS1tYNFvie2JBEz9a4gmkfjRBhqpcVdtJxxvHAQXRM2Dnrw49",
  "key1": "H2Lf9qxStskVdheBEjMk6mHf93wxTAuJgD2votwVPo8PVhVF6HUvnZYfHNTnc21vfSZfd6KbcxyMnPKzCkv9xSu",
  "key2": "5Mt2MkjQxbz49N24FvATcvj2g7bEZtHYoxMiTeNRaRhYfVzgXjj7Zk7Ag6G2mNAXd9MEhFMwniRSTCSrRtLt4utF",
  "key3": "3uPkQmTpbj4WQrTo5vbWVmv3MHdQMLnvekR1bu2WvcbKmhDxvnP8Zisth3uPxABpn8mztVasZkK1hpaAKXhpmh5H",
  "key4": "3qHFMp4evgbvoW7WP1vacFsxKgVW2za9iggdebher2MdkSEjKn458aEDaa8aDiYuqHkK44JfynFuzWgNLvJ2pXdV",
  "key5": "n7BsJqxJ9uYpzienhFrRJ8uCLDsSMUc1UNDoQhv9sPWCM6p9KyiriNzXS6ZAm6hzXkgskAKS7fmH6vLguNtzvNG",
  "key6": "TASYASHHHrVbBPcUWdSPA9hr9dQdmtmwimcfqW3CdZ26GMUmfC4tnym2GFeKshBzvyQH9Sep3HSz8qPyRWnyh8Z",
  "key7": "WKVYULapRC34WWPSbh31buBjRUddy8S8hqihW5ZCorKgUWovA5eaE954qMTCxfdpAqnCaMmE7d2jAvCHEgh21Vs",
  "key8": "3qxrWWFXauPi3zQ28MLdRBVV88RwvsTqh2ri8H2GDs279QYY985grjLrKNnobSy3XaqacWaeU3gweRsFYBPF6aqP",
  "key9": "45aYr48YYaKfiMzK9KWnQi8yPC95GAXg9dH9Rf5XQcZXgwh1XLYSW9pXE2SkoMtTKWRd3EfH1jJT3zuncHJrME22",
  "key10": "3LiiqseziGSXdB8SpRkANKTHJthPNc7jfxgA16QebAD5VK7De6w1SbXiVVbfr3DyK3p3DYymw8WBb4xpz7qAUZRT",
  "key11": "rG5f2wyQVXNGxDzcdnrDYhtJuAp6wsidV7AkKusUj4RX3QDgbXfXpJRWNGoSnFZDvWnqRPdSqPUHqrsoFWofuMt",
  "key12": "oAq5YSRnSvWJrTSkY4m2UQuBeC5MXBm7db33cjRH9tCvBDavnRxY4wHkQMwdo9C1JDKwFVfRJF9gGxaFeegFqhH",
  "key13": "tj4JN9Eke4iKjEZPumR8SkMwpe6rkThEzojADarfm9KHiPHNqkdzkTob1dwJ4unfdXimDYQRmiBTjRvq8MDuy3K",
  "key14": "35eNWe7Dy4qzk6VAVqjCBp1SHNPsJGgdxkJc1p4xeasPqb4hHSYsQsZqYswANLq6wxT7FPAANBoPZtBQEyncoTH3",
  "key15": "3JGBvuwmuibLc6mmZCmejDxyer1mKxFXk3Kn9uo9Lhwjyxa4UMttbqpXSwkch9nERajm7wNFV3LJBvoy5Cd6ai2Y",
  "key16": "3XwKHmNFRVZ7jGzYcepYxKQiy91VCsYswotRasmskLCjKp7imvLdt6cFnoDUpBKQxr9NXB5aA9Q4AYiVmVxKVYs",
  "key17": "2D2cWj4VwYLHwH1YAHdW1WvPA39XLWufzibSsSpPwwXyHq6RWDgPzekAk6TR6MJHAzh1LUuFfkzZdkKESNjuvz2o",
  "key18": "2gtbixF62Fvfp8gpeSiULzG1SQmtFYjn6s5kCC1zPANneSb9p7eNMijNy3CZLafZReUFpw6SwsWQ6WKDaaYk8sPD",
  "key19": "34ZQM7xryze5LaLGkKfnq33tsKXj1qFgveaPUoyJtRuRTGF97itMWDHghqpv6CKeKJKEg6R49X89UyLF3EN6RbpV",
  "key20": "2evTU8FgR8tPoeW5qk3WsEh1U2AFbps53JfXpUaDBMPtS6kG3jnvgw97R3vER4odstBiFQvVjd7ddD47o5Gyboha",
  "key21": "4sjpuDqGjpihSxmTxTERm1RSL81ZaMomcy9RGv4V9k7ivRSvatfq63Y1mnCM7NJdgqLRT26hKLrG2GesxetqGPku",
  "key22": "4UaeF2GLZZ1ScqpVU2TPuNu2tReA5RY9mspCXzLauH72dn9rEvXpKzRZkPDTV4XopY5GJ4hSFgc9WDGyUKivK3hp",
  "key23": "3rdxhuVb8nFW5bNhaahqfL7UwNxdZ6yFCBYsjrK5ioVLLbGHzqpQKgCdXKZy48DGkuwbQ71X3qKuZ5zBWK2u5nd9",
  "key24": "2ET6ZbkzEG9a2fUyufMZsg65bheUJUC8wYU617MQ61amptuRpBbdAR5G7faC1picgDPd8vYv9LKvJ8SfYCMpzywc"
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
