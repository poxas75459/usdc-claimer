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
    "N1Q9kYUcHFHemPNzn1HNS2dVkvpqsgonTZNRXANwdWdcCp6nMB28cxoFge4dbiMKuxddDarbC2VTZFY6kdWGb4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wqAfSB6HPTRRkMBCndrgBegTHjKFzT7ZgEk6fKxhmtAhsBbCeiXEVn2YaVppNFEixr71jt5uoqJ9ysw4Rq8wCEF",
  "key1": "3pWyxKggU5immXbUb7F3zDZgTRFxw1UFLc8CAk3k3rnaXuuLmvWBBd1PUPNqicQbQ72N3nLMB3jB6FKNKkrHwmnT",
  "key2": "2py3c43icPnvKBvtraTZSaL8PDiMoNq7vG9i8wzQhtKYm4GU6AwDdy1ArnFvaj6C7rW6yVkyuxk7CZhXipWwLhnn",
  "key3": "56xdZzSpuCfzY6Nc1AmLuNUAhfCPWUzFoGvpC4g8x1szYv25wsuqxbprgapCc6jm7ZvbGZSabTGPxdTFdxS4qr1d",
  "key4": "46Jdjp3gc8B56VGj53uvJe1N31YrQsVxpZxXnE1xqC9aJCjVq26jNogoRqk69AMN84wqPWeSNZbN5LmQ1wNk5Jth",
  "key5": "kZbqwY6VHrsSKiXAq1ri83mjZuAwJFFhvYrDXu4J9nqCjS4KSyha92pr7j7kL28fMMyqGsG1JfEtJ6wjxRyPvVL",
  "key6": "5pnukjN9GvveqVfuj11N9wGwG5zbFCK8khx8pRoVU5d8AKg7KEHNSHphyceqWRGsv9ZFSXPxdqUYnDbyPTCHrgGD",
  "key7": "2k8QNBRKkAnCdhj2DCm3gVTqUYWyceGSd2mw7wKAVr9N3x6YpQfsV7DvbgtUNPYBCPixuKiNbbTXzpRXmmjVKviW",
  "key8": "Vregkq5DzfYb6ntwAd4ZmujYsKDCh5rKqQmnsAnXUvd5NqruCfiZnxYPMFkF6Rqb4ntDKAUQ2RHqbgPc9Mw2oB7",
  "key9": "Anymr9jQdQLKZ82eGffnd6TkhmgQpWpFLewsSvzjq62UmmH9kv5rqjPDd9Chg3Zapk99LjKUHAxfeSnSikZRPCh",
  "key10": "3jNYrai6Rb5F34qqYVGPp62DHzpmr7EDdibDeHHToi6r6BT8WKfYkN25CLPoPgwtrYdTRoy5BGeHH8Q7BmQa24Re",
  "key11": "54LuSxpSeF6P2Zta3CiEw5NbNuEjcm7HCz6D5MAQj7w24ovQcHdqXqzj6HHniGaGJtA5JWkrjDv13CvTh893MvX1",
  "key12": "21E4xpXjyMinafk2z1NNpheFsiNrh2n9CmfG1c4wJyqCWtLrQEuPbDPgqAYdRZhbjZ5Hkdw1WBhAfAunFQp5JsjA",
  "key13": "2qnL9wymbuK5ZxCYfSVN8MVv5Jq4WdW8VoWMpU5ZoVjU773jSBzopPi9bjUYHBws4yz8eUixfkrP4j9FhPb3x4E7",
  "key14": "4X9JWDXL5TqxY7GiqqPH8vHFJpyE2vBgiduxiow9imX5CXjexhgGG5DW8t2bhAhonWM96bhosrrBSrt6km7MAX29",
  "key15": "2NWxUQhEwiK46Zc3NTo9CBvNZGEqsSVHXQmNV1CBYtkSvp49xYphkGfaiqAcTXaBhn6TizmoVzYounpuakfv1acT",
  "key16": "27HspN5ieLbJ5YtNb6i941iGCxiMLheay9nzabXcfvSWPYH7N9DdMExJJK9oGEE8ALUrT8YeyJAXB9pmQbo1sNqn",
  "key17": "2hGUez1rWdXodN8Y4Xh4jpeto9ZQPgchNAcJmTmXUMt3uAxVtPPSNRMB81D8otDJZ8m5GDosyc5t8MgZ8itYYr2a",
  "key18": "fY5KadNneXrPiTKLsJA4SumgPTnufaFTJuFfMYuuF9eAfQqFhCQWcJpYGtGgscpT5qxXYdNUmwNSUDR1dehCxKZ",
  "key19": "2qRBKGK8UfFcrqRyLUEjWVvJSwyjTSg1DxLYUiy9xatjdq7gAJeVedFo5nX8goVCQGZ3S2FfQzasfWMxJJZw6iuy",
  "key20": "3yvJkCSDucPiXNqR1qfwNBNkbZyVKKR5FEmawDdCde9c4awgUr7GMoXEU6hG79qBySJh2zGdrxEbedVm95XQEfuu",
  "key21": "2YbQE7R69J5cXzrd3BdFFrMmAJsEnDZzxUxuzfhxjQpQzGfqLNvZmjCgNyJWNq9uDJ1R9PB986u9otyxC4vsT6vW",
  "key22": "4Rv3KJyNKjokpZB1RDHnHwTN6YL2kqVus5M5GJeXjbHDN5CrjAXfs5p1djWckTkgyxsDuha9AJmUHxW2NB2thHuP",
  "key23": "3dyuPZjVpWnCCRWHQEE5Yhrwz52345ibsfEDNcGv32G5k7NJzokEpfaAyS4vZiFG9o244jzYgkPd4Zt7YcAivAXc",
  "key24": "51uh5MHadg1PttpVKBRs37NN2F4WpisJjxAaeagDN9TWXNSGRc5F617UQCXM1CuuxamYqamqGURdH91Embn7Ru2k",
  "key25": "3pXmAJGTXzjeuN6E3rgdy8QNS3ATBRtcaF4qCqJX7GzYcyrDLg5Qq74CtgnVAAi8Rgc59MmS8bL6NvTcndcfKuvN"
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
