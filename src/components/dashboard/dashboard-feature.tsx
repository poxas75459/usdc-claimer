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
    "4hYkTCbJdwDbiNfbfUnvGpVn949vF8f5s1bkucETYVT1usPmD5VFRzZNvLkf5hpGasjfTGovfHjkx1jyek842Nng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54d6VLFUBq9Vsht9hKCU3g4hTex8oLEXnzmUVYecqrqAetL2zpfwhXNDeErfXjaBH4FffusrSE6mUwAZ13EQXxYj",
  "key1": "3niW6pnzsaXQdNH5GpKuvs4HJJqyd99Ca1nz9pxMdPxX1VZfvz8RYQC7rbmiztWg6nPvSt9CmeHSwumGpWCTAfic",
  "key2": "3qTBZGbjHXKa4UjAHzPTsmGKC8egGZRqP7a3EnU66csuQoEJSStyruqYpVmqLuAFK3a9zFUiD8D267itHSGRfUKw",
  "key3": "5cY6LRXzPtv1ePrK6F3V97As57pG4nnvNhRGJJn6z6h8uMysorDWLjj7W9NAAWZRqfufAxXkNEj7w58Kgzhm5ZL4",
  "key4": "3BusDWm4Evyv2Rv5hFwNQL23VPSAWJm83SwCgnAGY2ZsyE5NTNE25FF4CndQEd64RDhipvXd2m3HQAtudDYiY9v4",
  "key5": "5pW7kCd5jGRiUtEYV9WkQZSxSNFqzFTtEvHxhwZRZijEcvzuCdPVW38H99T5g6N8cY5NjPQvAvsH6mqUHhd246tZ",
  "key6": "4bXpQtCWL2zANQ6vxuUdP9orsjxUPsL6UU6D7bsU6UFusNQjpFebTohy4Bbnr5ggxr873s6a8B3jhkFfVubqNaq9",
  "key7": "2ygF8YBCHSQcktmYS6o5UTgMqg47iTjZteqio76RproAd6t4AeV2GxgeHhqWvXFSgZQK3RWraJEnQuKBBHjR2Tfs",
  "key8": "NoUsYzMaE1NH1ZNecpK36svciXBViNk9PLiWsM8W29nDecj8TwXG5bXev4iqFLzGevyY7KZYPA6iSw1ZnJfd98k",
  "key9": "3pfriWf4V1oah6tV6BLxNuV7UQNSmNEfcM6RxRqF6cVk3uXsGTQssUFx47RDCdhdD1UZTgrtviV395Wn7Q1VNXmj",
  "key10": "3irzJeXwjF1noMnXiKVsYKvtHCyGLUasMXyWPMZt256VewmgFDHvY7d3VcTJ6vij3hDotXFNHhfDy2DXuJUnzK3L",
  "key11": "3r9sEuEjMvyXyHXqv7jZGvJmCxk3QEzx8kFwficg2UdcF7j17TWhr4BNw4hXggGKSsZHNiZxk1CzNDUtv4ib3ydw",
  "key12": "2Fb4kjJEKPmAsTQJ33ttRtbVPYUECNJpcxVMihqnvKYZsRULpkSXzytKYzTyiudFc6dTa5mKcUSHFnk2tXJKZrvN",
  "key13": "4sUYgRht8ci3Ftqrpdqyb2XFXYVcejkt6464EVFLSu1RpftG8gobC7i3sBCHU36M3GR9iZHtSXS5tvT4Q4KterBs",
  "key14": "63Lj1qsr7odRL5Ge8K5UjtJVyG4SXJ83WexgWBZmKrgnFCzsNiMmpsbtt7kLxoVMhxgdmeCGigSmQsuhYeQjQkDs",
  "key15": "1RKaoDpWp2vZtuAhBcWV3YbmuexqkjWknG6gzfcJ5jyd7N41Y9T7dxvMgPpx4N7KnrTLbf7xitdAbrDyPyJe2Z5",
  "key16": "3fx24MNTPwjPqCpRN7uoSX6esxBTpmfUbBrMZLQ2DTR4YLWKdmfgYDFSk4jwuhkgPticxcNUPduba21jvLNSCJY5",
  "key17": "5Tvdpcs2APFePXghRta4NAWsEMu5L4qbtfxvjAm8H3f7u8FLbFfYGCaAJzd3UDc4CCahGtPytVTf4dJfjNRW3Mu6",
  "key18": "4qFGznXXRdfA2STEfRJxepwjKX4mKZaSveHm4UQuk14hX7JX1oNCqU4PVnkjfVD7599DC2wqVrGGRoB4VY1ANWz6",
  "key19": "2KxPRwFqU9EHcq7ie4D2D8DVRjPT1LWxSZUo9k1agVmuBpd8z6fsJBPYkPfiiVDWBUGtseXAYYaq9Tt1AwdmBMMu",
  "key20": "2ZYPh14daNZZKnKTckUajQnyDz4xKNUur9P2MzrYdZr9TGqSb3bsBpVAGrZVmp77XnZXseJV3vwuPZEStDM6ojnv",
  "key21": "2rssBHYvgiQj3KP6Po7ESxp9vYGWvC25HhWeURKXSXTSxrTKLC2DrH39w2huKdnSYGDgJsUR3pkWA2XkgSqiTTAY",
  "key22": "5r7p9y5R9zkLXuF8GjFjwcwVVue5NYwcXRUb5tCQDKCKvd8E9ZCutbyV4GiishHF2DCAVSkVCEQyfyGRVoAbdvAY",
  "key23": "qnHr8RC8ZHLVyshHzr9oV8yGuKW8de3W33Xo2ZBr2k2Ey5LXoCHMAdmknj6sSgdSaAKTv3w36keyKaf1Lv1a8PU",
  "key24": "cafaeNQkeexCaTnuDSSs2sTux8aPDqE8UZszNfEvxk5xHhXEjRx2WLU1DZawt57TfZnG9awFDA2n5Dtn3bCzuF7",
  "key25": "633Z8th1g7RcUZJtAvfSAwxZHCCRveChcFEfA2XpNorXvP3mNTRnZdBYXwPvsnHAYuh13F3ebrBx723R1L2ZwKUQ",
  "key26": "3P3VogyEfA7hEQrt3SCGcQ2bkSQBdbAAgH5BtJqcSbW2s5b95Mn9dF1MKja9vhraStucN6jZxK4sRvEBXD3mc1ZW",
  "key27": "4P7zBHaVy6Naf8KwJY7SXW3oMB2H7bkhW9RSuEraoShetcDpzokTiift1itDi9TVdWTtXtE2JFiZFfkVD3waXpsX",
  "key28": "26AJJNHvB6EEJb3ba4TfTeraTttN29ZBEyKDwuRcmjteeggyRzSrdxrXT8m3g6g8bDBCzn7pokzvQWn9PyUVg53u",
  "key29": "2Su2agH5iAvu69AQKAyTk6hEqAojDYYX4R3pXXZJm9yefrAEEWiUQNLZH5nk9a5S7yjERJyfwGbMzyNTXjEXrqTp",
  "key30": "54dZnCZ2QUpzKwKybAGB8JcVYkQMmqPqKvnWqpmAqPLRUtvzABMZ2S7toUR2CfqDxXyZQxYWY1kPUjgyCpmZirRD",
  "key31": "2H1Cnp8U9aHGwB6eDuYBBpEwiWaa82QC2Km4Kt4ikrGBTUA6szSpj68wfkC9DvsYVppuzh3uTmb9xXW4HeNvfTPc"
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
