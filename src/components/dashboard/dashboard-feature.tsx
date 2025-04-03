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
    "PjFNeENqrPQhia9uXquPMwe9oM4T5FNPG1TyCCLsEhnU535sGTdW7ay7t3sNbXURmxuTA4DHcKMBZWzXCsvU13Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2itkXQPfwyLmRjJg6fdUxdaSBe6ZKoz17cWQzsmJarucRfaE4B7vYDZDW8vRdZKFnuKVt84rpC3ugrYhKS2BawXH",
  "key1": "47gXP7zoTmUztdXJb1ZELicvb2vbxvhhYjfLCiWDmu1eTXqz6BJUhemzdSojKqJdYWceQQbSCC46w99MBujBB1Yk",
  "key2": "nEfKeagPLv8AkN9w3U3dL9mjJmKjuF58h5pca13nhz5K7dzgAcxfwbb54ns5knyZutzuvAwVdw23M8DRSp1XLWE",
  "key3": "4YrLBRRvjh78MXvmBzAbBwhBu8tJ1tMndqQGtsxjPy5vQdssLKPzbLWFFfybe5dK51DnpnMZTbcFeVrcWpiSB15E",
  "key4": "4tgRRTx6nxJz2Mo5FsG6TxnMwp1QTmi2P3Py6A46MUMCUMgUgY2hr413fP7TENvapABTSuwvGnm1nFZJ9mx4GRk6",
  "key5": "3AhKAZDChPaxRmjdM95bUWK8QivM6GT8YLSUaXurE8jJHYKY8rHx1eWWAbpyYiNJqzQSsiXZ9tYsssL6zqbmL1gu",
  "key6": "5gYR1PRcpD351MhaQ9pQyUaQaxgNfLEavn6c8nbgeJMiikrQGMznoGTTEmMUVDM3bppFBUE87BrjNnkTHB6vgnaT",
  "key7": "3o5c2evdnswm4eK7bzHf1nA23L5xGpYtHxMHMGAEXN4xse3oSPvwfhDnVzCZgQHtCd3ktw9y3tybSPHMeW3FU3xp",
  "key8": "3XYivHwHJmY3cMzDAayuRXS3d2wUPzpdUTkJ6vj6Q3dB8LeE6DrwhxuDbsMCmTLNAsdKYFd9iDskdkjLAioGGJfG",
  "key9": "3xhthk5WfF2GQPkcm5ksaLonYcTxcs7xU1F9ZgQHqSFW6Aei1E3bH1UMUJAmntjCHNK6Y39dn6vb2dLfpHz2Awms",
  "key10": "oED9ufRyLRWASynBjQ2cWznCNr6iVrDzdTAsnrfb62tWdowPa1DWgRbD6MEv1ns7b1fvKRfxxo1tPYMi5pG33sJ",
  "key11": "2GKFiVngNcuUJcefV42rV2b3VnQ7aVphpzBGmyC2TEKBa9DVu619LcH1G3eH54bdYzCiQZ1KB5kAwuq9KptX1HnU",
  "key12": "2wqzQtegMpdbYvsoZqJw4UUG1bSAJtj2s2CjG9mvxhLintKkTmMfhbrUGwr9X9GbsR3rScymDV26FUzA3878C1uf",
  "key13": "3zL259ZMxfvnD1v15TeCHgQBqmVoQpUqTjX89DeRWyAsNwYoyEnt3biQhKXG62rVRWPvtMxRM2qVSmWEZ5LMVeLY",
  "key14": "7nFpjhGCWVsf7BSk8jAZxCCYxdbvaUB3o6jyjpht2XvUEHCCFFYJm4Jx9bXHfCcEBmXQJipKMa7YPoLNsDoMLai",
  "key15": "vQcQdqaaM29Tftxk5bGieftB8sbdqCUEiMJAdCpXsACBN7F8E2Aza2gneb9m8oZR1CxH9HD1AKRouyZ4HjtBv8j",
  "key16": "2kjdt6DazyzrzkDUdBww4n4Tzot4RAqnv4M2XQkXQ8AMMBW9BQbwbFLTTxtTtuoYrTmCzU2aM251jzYQvTp3Ly43",
  "key17": "5kQ6TfEoXkJCqNzKdsBgjFrdqej27LAJJ2L6tZe3UK88h6j2FDYkCLCEna62qmmDzCzpmTQZux1n9EaCXAKoGbzs",
  "key18": "4BFJzuXvagFZnJSA4nMpb9deumCe4RbSEFR8eg5Zru7nMPc7tG28inxpCY327tCVFqyqvAxmQZZk3fna9PJo1cXp",
  "key19": "FaFAratdGq3PY6AmaFSSVXiwCJmxWbEUMhTvUYkMctduzUpksJDAsrnwnFnHhBdSsiKLp9S5MuMGgtSSC9ssdcr",
  "key20": "qob4PYXRMqRQHC5uegZpULRaL7EBwZn2h9jAr87moJcrKZWisZeHooeuRcqmVWwKxCTWX3BL7D1y5WREkX7HRaC",
  "key21": "5TN3SdPGyXrWQW47Ta71BKfsS7PfoXjtd59aD34Tb25YXLiYCeCX3DXJ5VQN3sJS1g4X8dqiiQ79EvzBKXe8NNZa",
  "key22": "3TggVpzFSpRDzC6wpK7fDMtQXMNoYRFmUemtH2LuqxjRg1psBRSJu9VYgQznubatpAqmgCnfFzxRQqq9tuZzmwT6",
  "key23": "3fYSBGNH5UnjmDkSKcUZAVK2oE1Scw2zSbkSMxteZ7cM8spHsQtsBbk6jDYdP4fNyvQ4jtQCi3cLWyNUxYcz4RTq",
  "key24": "36nMYUuF9hiDYF9eAQc6a2p4ZFQw3iDDKDsgB5ropRtQzbdE8LioWbPNwAEf5EC64j2JnEFEyBwdpxTZL1PCmVop",
  "key25": "3C2znLLJof49ZMJDpxZ8WFcAvEJjHLmkW67zMY4QJRvLi9eMno6q8Kvz5NLws4RSgXFzvpSKR8Mw4msCnAH948m4"
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
