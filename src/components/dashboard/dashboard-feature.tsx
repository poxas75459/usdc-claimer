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
    "2am8ZMjgpmnQa2CjmcLgHxwXHpmxet6jYBZEnGHswccwntUdRT28Py1Eo3HrR1bM3fTrKrkWfsBGSwE7jVQNBERH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xws63Uo8JEtNWtEz6kMWo8oRV5k2VQqqgmdXsHhmL3jcffpaN7uTN6vQiGtKi1Cj5qU4qeV66Ec1xzHJKCRZMG1",
  "key1": "3njC6EvJW9k9py9UMMHrs8BsuooDGcun9BuUzQFy3e86DHs3WAHaS4VFFyfaP3dwSq71TDAgjgrBtw137Z94GzE",
  "key2": "25Y63A2S3mxXu1vmjdCuJWNgKR66EN9XJzT6W5yHEAuvqGjaF4dBSF14ZuWP4CaD3iuviWWET5uQBLPHBgPMFexP",
  "key3": "47Gv7DFzvTtaG2DPn5PT8d1Mf7fV2ApJva2J9AsxzVdKVi53GnaWgkWgPuknSpVLTV3kxdQM8DYbTkhEZzRsg4DH",
  "key4": "61cwnbQ2YRp5LWmWQiVn78HR4WsMhMNJkxYoNs9vkkocXb1fq5GRGwHC32ikuTYPBBSXunySqa7MWiswDm8xgZw2",
  "key5": "4SqbVhFpZPuLyPSbF3vTSTHxY1kLZUX1ftQYqHwLep9BTuQkacM9GHnioGc5c21EPSoGM8VTuFMVKWYT9gHNPL3J",
  "key6": "2hxGvkNqEnST218rAq1xLLKNbaMziAcxYFXGfFJ8mUWDrXTXhxca55vRUaLFYbUvxrokzyv4HrCFLUXUD8R6tjBt",
  "key7": "5qbXw2zRvmj6uvoXW7sQrRQ8XGgghifkGeKPGAqei6oRvqUr9oUSbUbqNqELHrnNq9zAScBpsNwW6LBDPoj8KoPv",
  "key8": "477BHAK8HkyFKY2ebmoJBH9VC8rxtdGC5JgapVPTtaxQWTU9MgiLFAa3cVQjs2rsBmi8kUSTu9p9cmG44fsBr6rn",
  "key9": "2vDoexqGn1utZZkE9ZdX3MM5ba5GmmZ3TXmEKNBN4ofvFSRc4nGtnHYMEViQMe6MJyUgWnE4BQhpDDbG6rLUzqpN",
  "key10": "4urNWWHLphM1LjSYLct9n7LBP5K8RWUFUo24K3w7DRGKwBynqodoBQTNfXj1LkNexozs6BMuuAMRSKQ5arojTyHP",
  "key11": "4YpiAtrYBu4GbFxoKEWjifuoShubUaUiko7UAMmpB9KhjcueWeQ1jPisYEBbTKjSdbjWXxq3ytMCEfmrzk2FEqme",
  "key12": "BV3wzy1W4mP71niwFnWWGweevyDfBqBFVpX3g4J46XdmQGmZ3bv89H5TGse9vYtNkEKuYD1icbWCpnB4ttSFzRv",
  "key13": "2U5KgEsJDD5Yu68ANZHAYKs1dXTen91AMaTfVWCvsABfzX6VqT1vUSz8z7dHf1eTrWaos31HnCYoaU4zb9gWcjB5",
  "key14": "4XW4AzMPiNfQLn1wBzMWzdzHRZdVhivw9byzLp4jk7CdqbVE855DBEAQ8iebF8FYGk74WGa7Rmd42eMDULBCGGhB",
  "key15": "5uKJpRfGRoWGFyTZJtvFJCPsRzpnqn2neJsrx5Vy3JidTYrsnNFHMJdDgR3ECKj83qyre32MmdykBWQbtMKwVkbr",
  "key16": "GJDQstQUuDJocfCUSCpRcJnG1TBFUf7waT81SWYiW68SufE1Xt2fAkYaGLikiuFzS5A3BuinXnhHy9YT2TeX3zr",
  "key17": "3zPc4YmsWN1wn7D6gzCWWbgoiRq8YYGqU2oWnyrNM9TDV3WBgfhqK9pEsRCbuncBHDYt5s3qiTe8X6Ga5AsWvwhG",
  "key18": "5J4tDoYx3YfNiVenqM5o6sVbQZwFJkmTTfcM8xfN3fKnJyaTHQvht6JcStAsAZyHSU7riQTcfhUFKNdm9Yc8c5Mp",
  "key19": "2kXc9yq1H5xWTM5isfk5r2PkcRrEamDSiwN8xstiux6PJk8TwNwVp2HAkGkpzABYd4GqmX87ZMgB6jSEKiWxpBVj",
  "key20": "2HiNDmKW52Vn4RMZBAacpFpZshULdrAXRvpprMdjRux61qGUpBTh9u9jrTVy7HywN9RczcUFYxAc1zNWVyrhaqJY",
  "key21": "4BUrJSzzFPhSWaKSiZ1VmBkQ14yYBUf3fviYwYTqPTpp3sHXEnzq3ZcC4NNh6nKSJNN3ppZ1hVx6fhshNfem8Yxd",
  "key22": "QL3Y8PSNanZbSDTR4WwAF9GDS4bhic5Jj8GHfy2E1ZnFBR4UtSkwkNmcBwJvJ9MeeC3hf1PnbzTwkYUY8oYc5sB",
  "key23": "2CGdjLtgFyroYAENn5VPbLYhRTYHPVZrrn21yQ34Dq2CCd6ifWdE9PoMyLJccjajQgqAcqfJYwkcSZbgaq4YG8GH",
  "key24": "3hpiHohDXkf8E6Yh3o1gp4y9au3xjSMDEDZ69KRpzS8nmCcLG8eAqwxit7DKRE6HsCd9e28jgVbVuAoon3uuubwf",
  "key25": "5UMMndgQWF4Y942J2QcHrUBU6ArakM8FDF9FCqUNRadr648g7prR1FysoQZKLNSRws6ecWMQRXq6ozBGf3gPPD6N",
  "key26": "PeQZCb7ERgajpfke3MoBkyWrqTusFs3T4hHCBRr3bhnDNDHJkPvUtWKFUg4jeVMYUZZuiHpNurzvsDBf3yCv2hu",
  "key27": "5CnxAPCxpizEAmjvEJUa4VqDiQKdZGdY1bLFFeDn9jhpSVm3PSwgSx8KxuhR4hjc2qVxFXhHoXnuEKMtvaAqD6xo",
  "key28": "5tuy22XJJiokxXdJ62dFV6KkCs7XAecX19Mr4GUNEAbb7FVEN7hUoWDpvucziTVCfHFUZRqoyPdAc5csxchSjYxn"
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
