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
    "5Ta5sQ1BsNGJhmrue9Gj9N9JXG3ZCmBdnUHKEwKHf2UgJnvcQuuTCKAvbT4enjiV4RoLUcwyGFH1KnRR9sK86XXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PFdX1A6rxYxqFLznegso1fZBsHJAXuP6ywtPHeK4M74qjTuKnDfNLXqS3rZ7nUvJfhzZadezgjY49hCWbgDTfDi",
  "key1": "2qehNU3jTZUccn53HtSDU1GUS7vBKA4ZGvdQpyASqe3WP8z8HLmPF7E62GZappZjXjyJwfkJbxF4W8SXyGDEBd9s",
  "key2": "4JnsYvUkjZHcREUQAiwTijgcZEHU7immHZay1WHXf8uQstNyjebGfyhkcxmEFBFvjacgQmGqQDLgsbmNiiQF8Fmw",
  "key3": "2vUVbgmeGXoQa96K8ssXpSBXYoKJjwmXhpHUuTy1eZmHnxd9fyrpp14MJHwTnaaYjyhzpcHxTcKZCpupyeRFh65N",
  "key4": "3H6tko1Fj6zZkSaQxvrV4gask1KmYoctQW9obouHngfoHShPywxuY3cNdyX3V417azEceuiDqKQrsHjeVgR1idUx",
  "key5": "45vMKtF668AUoAbTk2HkRcCvYaxGpVJ5PCbVomUYPbeVkcUxb7k3qj332qQqC4vXtXsGFQ9rAB6RKo2C2NoUXzu9",
  "key6": "3UsZKo4ULbdkHVXkNEWvvb3Cx9BXT1NrXprEDruvbfWwba8U63HA7VpKkhB2idDva2L8aBeqg1uzojuzUz3dyqfg",
  "key7": "2o82fZsiNrypsSTTXHbAgy6UD45Jq5Pyy7n5ra9aPERnQf9yvswSDn5rtQRsCfzAB83DwbfrBji9PMij7k62U1Bg",
  "key8": "4uEfW1m7L9b3gBGuyjQ8wCm3th5H1rHjY5hKpa32uKsocBWc17gb4z72UzmJPXLd93PoxzqUBeP5y5UbVsDRYnRh",
  "key9": "2Dmi3P5ixstga9BYo8LQEnbFJLPmbb9N7uCMwiBMi6tij6sosSQqbJpn5GnQH66KH5wv8gaMjs7U8WrJi6Kfmr5F",
  "key10": "4KrKJkye5hpdzfeJhiL5koRBenb314pdZ6whNASGNMfHF1gFETaU5P5HRusH7nHLnsHmL1mhxV7ro5Lai9p6Tgvd",
  "key11": "K4rwdQxfd3WDYsrg8qn7pfhkZW4bPefqUjtbxneM8cqJQtXN1k8FA9N6rvQjodKjQcAyhDpMGBZYCfaaGR3sf8F",
  "key12": "5X3SsgdzyGFVvAUvfiYf9V3vRhk2UUEVaPSVkUHpmumqnX2uUFLeCZg5YpbXcT97bJbkmtgy9xA32a8KRRNGN1z6",
  "key13": "5vagAJ5pUwGhrqjbv8JpT8s64ppMDjMNYUfxVj88s9Tts9fT39to3GxaVZfgjZKtW8mnQ23DwrzJXQpFTVhPDcGx",
  "key14": "2cBArrTmsrCGqVr836bW2UDR1ZLxYJMh5Rvt21vrRuavdTPUhB5R2YGvZvCNs3Aqp6NS26uzv9DXV1pKGBPWeDJ5",
  "key15": "38rFG11KrRayEbR1u4azf1gQHdPyuByiefhHE5pqqdaGLBCn6tqXG8L7LfDn5Cnh6om7mQEUaDmeGPR2NG8gDmYM",
  "key16": "3XQq9CZ8XDuDQPoG9aYyd97cDMLimA5HpDoPN8anEcamRUSXciifxzjVeJzyoy3DAjhMMaNi1gosRQNCCbu5f4jq",
  "key17": "4haqJsmLhVn4tizUXt7HfiPFBH3tea3RwPFXj9Nw26TzNfKzyNc1DL28yqnB6nBLT2grsuFEy1KVF7dfxRxGSwe1",
  "key18": "Q2UtykbtfqRaBsrzLx46PkqUtUEkfzgtBXduFC3qKpkAZZkVq2x9b3vQnF3eysUZRtRiYBhRrBmff7acScnp2Ue",
  "key19": "5j9jzsYpXZ76JzXNijj12T3fE91m8WuCsw63uGnaLrCKwdE4kpjwfAYt3zriRS7HnvzUAVPdDUVUDBEjvF6SozTF",
  "key20": "4DomX2qvAexnv4riqkNeNggk7kJfwy7i3tDuXoqyWjomwECjwHxsSrDbCDePntvoxnDjKqgCjekBp3RdfskuiQgm",
  "key21": "4E3E1BXLx26LwPYVAoCaR6NK2sq68L5PtY1h2K5K8BLBaq5saoEDdpJmrYCNFQ7K26FR8wRW6B5WWW5vrufdpcqH",
  "key22": "2RLid7HTsfdzMNadpX3mnFULSfs4PbvG1BqNRncLq3Hbt7Stbk6cW9senwzKUEXNRxMYVbz1Wx6qmm4rZ1XPXByv",
  "key23": "21paNLajFry16hvT2Ag1zzZ5BEXC6zkx9tQAA5pcSLSWtXkRwWNCtZW6HZXi3YFnaVE5sA8CjnS3vkWWhNqxWSsc",
  "key24": "4AvJPtXnD78iCx3xw7y6WFwVSGrBjPLWNa98KkEbmDCMYyHYJcZjCPStkFF6BsNMJEJDqSY5w6uHPgw2degC2bEq",
  "key25": "5VdQmcuRynXkww9TaVicUUBh6Hsi51NWdfUkUYKDeGkGN7Y2UPFMazTh2rRvVDmzV4qbPAewpJDddhHDHv31gaDG"
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
