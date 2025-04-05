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
    "46LgueD8f3aHRDxqxVkcneTNbuGcMaQ9SKutxnovff5fvfNGEszohsAf9kcssxwsrNx9mSu6VTX7U6gNY4spyyGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cHjxiBp6x33pYqaQNDLzXHYErepPtEZPYfRVPGHmZvjFSufZqgmaQNvRyzgAK4eaAc8J1YGawfCTKa5UggEJRaW",
  "key1": "66N9BrWd1dyYoyHAcgJW2E41dM8oLnubgSzLKXdk2tGmArVXaqeKGxQKEAf8Xatoo3LPvoXKPPSfEwFf9YFmgsod",
  "key2": "5V2VtUo3LzK6iJQAVe7Ne5fFeuLatZz35hnVk66WCRouq97tT2j8usgib7TuF3XyCh95d4WkscZ5gkLddtY3hLBk",
  "key3": "29jq8S7dRYroVnhhvfjk8pJ3q49gFgjUMXr2MEWqF4XexzpfWwZLx31FWahz8VbrccQymdMr4jkujjNFiG8cPQ7T",
  "key4": "3t8eqBe4NPxAmfBfgE2wCaeU4ieywooL7qDKCSx93ME8hk82LKAEomQPX7ntfEMoeB86A9GtRhZgypPeBb8Axm1i",
  "key5": "33QReL5S3dMurcvXryoErAKEsgexFzUUsKfVumqEuQHmYfY5REhCKMsmvQxcPgAKknHYcbrewBQTUBduqvUxznsy",
  "key6": "Z2gX4rVXSusq6Cxsie6TRzd7P2SNJLMqttP93pidCEntJxJw4uA4Te8vzfwZnPnpKGaMghKxmsmWuxcuXnxwRAM",
  "key7": "qcWQJCXws4t17GvWS3r9m5uGTxUA8GTR6rmx3JjjhpHZMf4CT6DBXkMfuXvdhg8eT5cgD6S3659u7aNJY45ETXa",
  "key8": "2My7J7o7zyYW5NoQpdyPa1qKu9nNwAZUGUFzikM6ssj7vFgmdosqmSQbDPwD8SkV2uShmpkAvTDtDXreccUvyovE",
  "key9": "5po7GZuDqYJzcCCVEdZx2Gj8EWaPvVmfYPz46Pae2frQDASgR1K5SfUVHFe61p7BynaKUFY5S4ZM1s7ctCjNS9gQ",
  "key10": "347ktMhjrGpc5nBCuaQtRujW6kSQrU1TwgczWt3qdXYg3H5to4JAz38mn49HtWMbAB85xRr6D3bnsvg8JcG9B7z6",
  "key11": "4UcwciM16Rzqf2YbR6d8XgYYAp1AnSBoeXDUJ1mvogERi8qudv9yuQSVxcFzgxfE5BpBKrXRbs3Q6b13Rg2tDzrY",
  "key12": "Hxf17wyYHh9jncfTZzXGzzWaWpr1Cq7j6mVqWNWpBvXvrHKD561SRUm8N6jjFwikb5VeY7iteM5MT9Argo8Zao4",
  "key13": "5R6S1obivzrBqzMR9VyEiYM9JMmnR3519HMb1D8nvzu1eFsCj14R1uYC54PQWCxL7E5PXFRYH5s9Kd13GseYiJxE",
  "key14": "5AXNYnqjtfyY47otNtnwYQAi6yxvjhm9jNiNyzu9RubFACYZiTRZoeGVsfZhoeV5ucNccb8ZmpyfBWo1AkYmiPPq",
  "key15": "2j3sPvoHKkQdsE17rNzLp4VLg6nootR7cHBWd4gSiujs9m5MPJkLgEj6yYm3ycze3o3YpGGN7S4rPAamzkSxKKm7",
  "key16": "4SQj2qJcMgy7GMf8eeL7iyMnux5cvz3qjteBk5RBAeH2h5EBeY6aVfwdvYUykDgEoo4HtEirNyd7hUsvfG3UsN6A",
  "key17": "4Ng96YRLFCW3vwLebXDmcuuzkWsfYsxHp6bhqWYrtz5B4AhvyNaPceWBzXY1qpFXWQ6xpt4UP3STsAYva7f8yVYJ",
  "key18": "AETPbpvTpF791qodoArZpfMkyabbmfzdpuMs5Xj99vmyE8TreRSXKmc6QGM2jsVjS82fUfko6QAgHBzZvAbTvuo",
  "key19": "57oeHv38h6SxBSqQaT8D13zgvHYQkTeHL4Da7x7SPE7LHfTr9B7gjQWUvSMVxPUJKNdfWAtnQPEimWPgciPpEjCa",
  "key20": "4GeS2JFTnJa64R8mpjQNnVUifvzNAyowkfsRbH35edyefcuAR6yBAvvpwBPbaWnPpx11999CcsSAdf7HeDxftZiR",
  "key21": "2piBJKKJ8CZnC1zdMx7bfzbhrstc9zNTdfRRYBBnqTgde89jtTmZsUNyHe38Z71D8NYBjtyPmPWBYQZWujXPE4EK",
  "key22": "2oAoBpFVSn345pC7xdGN4yiP1AYAWKNpyyFB3eiAAffjXW9rNit3q89Vzamgmfve1hwVCnLAPfP3c7Yg74TVPwDn",
  "key23": "2ttDuqJZ72HYWwLxUUz8jo2oS9uDS4MusgC7VWfqnvEWK99h4cCWQRGYFFbkwiqpx1rNbqzvYjAtSfQ2RqrGbzv4",
  "key24": "qwsLQLRUi8ngn84bz8JUM4fw1xb3bKVwmtX6YNyXdsmjEsHyTm5jhjHkXeHhAdtwe2oLvAczPbNAfmCtyJEwPJi",
  "key25": "495ncKBPCYYFRhns1xqAu6kdyrPqhrqskbWPBt87iCDX7t2jLUa2372ZBmRboCLR21Zqv1ginqsZhzc5pXkXoNhm",
  "key26": "4r7SXzdq3HQhuksK25kcGtXKoLQaUR2LNtHyohKnkEY85DqBHh5CDzrob643rsMnHctZmxDX8xuFtXKpVrGk81Ru",
  "key27": "3WcTz47JEbhKYMRhSsxRrrbdw3CAS5SXnZRafgMQJRciCzBDJ5wZoekdvCiSesZa9TKibgdnrEKMGsaoFarXGeRD",
  "key28": "5aXssE9mcgzokNCsF3BGxV3VRr8aDHoAWHQAjMzGAEMLAXEmZR8yytdhvT8maf5d9FaEYVvYpzwPGKXSqtF6k5DP",
  "key29": "eEFXY1jhzjPcf53JnD2JH3yiU1nV2o5i9X3UFVZdC5U747X5immP3PSVCRBLuc7mjxobWpo7gf6M2CVC14g1uqi",
  "key30": "VLHffDqhbZCwdm44tiAn3k8zGW3yNLxk6kP5h6oKHCTDaa2syiMsmwcMDptE5o8neVqcDdNNJkyJ91aX7YPau9X",
  "key31": "3FNM6ehP2YoLUX5vxYbTBeabMR99HTs2aEHgaGtr7ea93zsX6fCKa6GXtwwnzPHM1oJ4JJR4YUCknWCL7TvEn4FD",
  "key32": "5jHuNxNbMLAx6Y36C2CGaasKsUqD7Tz7zE1fmctu1MRv4sz8Vm1ejggArJpCsZKU1keQaCejYUcKF4Ywbu1BVMke"
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
