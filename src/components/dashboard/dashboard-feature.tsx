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
    "5nmBYYhPZYR6w8Z1a288PZf4u4YHZycjchtmEQzes5ituxEzBhehWQXRkwT1R77vrZSbmF6eFSdvDQhaRFxQQG4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xfxdpSmF1Va5J7takRZFy4YFPy65uSxvkHzQS379zGsB9HwVdZ8S3JoKWFXgut1v76ZkMA9ySJfKNo5AZazg215",
  "key1": "4xWiDBqP1qKbZjH7vnHnvDk28H5HcEVx2RYemgH3z3AHUHYtSvLWPM75cw8j8ZMLVv4HbuPLcTY9mhjxfZyD7cVn",
  "key2": "4EhrVudgQrZBJerE8RJuhP6AGFdhWuVpcLjqXcf4MfMuksq95nfb4GtJwcDcBJKG63Gk2Pkhh3iDbEWUJqBN6kao",
  "key3": "CiE42hMiHPq9Td2XxJnhCpuPyyPaaNqMBu6Eww85qeP11XyiXo2QM3jZEpDNwspSdNBn9Fzmn8o3sG9L1bmm6nn",
  "key4": "2pywey1Qm6ayp3gNPinFUt56vEpoYKLG4G5ZTaWzR4goe45nhiQYi6i1ehdJUHVWfxdCiMDJKowrCWTNjnK3JSbg",
  "key5": "5qnTpbEiTxD5pujX4cjVCrgD1N5ncxajj57bSTw8ocvoCPZXp9H9XRkjDkwvknxML7CSK4WEN61G7Ur1VANP1THs",
  "key6": "4N7VXmXtz8FgZJFPYLSxSDWG63qiu5PuseS4R6gXyUAe84a7QPszDfu6xUASWRQvi8njreQ4bwBi4gwHHHH2Zmpn",
  "key7": "3NHFcf547qsShUA7Ekxjx2s9VLjYtcaWXGFfyBSeaaaCc66XftxyebAMMVnqCAVSH5GP3PuzPgDAZiaau577DUN9",
  "key8": "3k8PRERx4exBUeo9y4gKdffPoiYNZo5Ti4y9WnHBc8aRn7BQh8A3jm6JnNKnwU2oncEsS6tjGUz3NSTUMGhQmNW",
  "key9": "43cPQJT3VD3KSAbu6xxNauMLe2KxTrKqo6UZ7YSj49yNhpFZUjJHf7EMvokAFD6S9LdX5kjzNg16LtSfpYq9x7t2",
  "key10": "DF32Xves5Bpo7UorLjWuncAYHJqK7k53mpm1PmsWqoxfLGxEdBaZXSZRVHvBySX1ppexGSaC69aR1swfTFUv13e",
  "key11": "2JCcHX8xUUVmpVhb4ifQpDyftnwKeYcpmCFoUdT6fWszQb9wp87MVrArTGBRnNHuN7zR7S4JrgDBeidLGfs8PLwT",
  "key12": "DeU1UhPXeVmW3oFcbwWDW5p7MQqLX9dyjuVCiqUMUi9r82rtVQvE9jbvuF2eTqzYiGs8VZtckqAs2sDmfYE6x3r",
  "key13": "CpXFZf6jxceEWwjZgKavCKqKejtZBNzdMiG8nyTywCCGXeJqs5QycfbF6QhEoPDnbtFCY8NUdNmX5jw7Y81W12A",
  "key14": "33FNpT8TodLrm2hD91H7k9KVywkU6ayRJMo3x2jUvFCz6y387JYQwigndAPEKPyM7e1ZZ5ndy5sn1VaHPmcCWB11",
  "key15": "8Mw2LMD1ky9YbrwgTaXc1msLf4sCAPgS4mb9SfKgzWuwGLHkNMgjZVNmctjDwX6hg5XX9VYi8vsFyJbuohFKu7t",
  "key16": "5Vsf2oPywtg5qHGfpzSvfXY5kBjTK5C2t9bVShYHbqxVXecww2Gw2JhaCY7SKHTrZunC1paoRzCNrwxNUF6twtzh",
  "key17": "5KPC8EUAvCFSpEXJw7w4b8ko3PUjyE8Jkb87FfVJMpWb5KnTHMFjxm2CcQcJsq7CaF9iTeopfV4ifR8UVYvppeqo",
  "key18": "2zUJG7BydidA1MpBgLxqVSCJaYjSeyhQxnKaEFkyRRopfnD9cD7L1Z86qsfHfN4z1PiLvHAKmCNu1WRA7L2VVazz",
  "key19": "VRD9HcSS3tTiQQzK5DPaapus5uhe2S2cd4KhCTsJiVjRhEYJ6sF1e8R9dHeBJTkurR2BTTosHTotra7GW7rVjKb",
  "key20": "66F4zZWxjtsFAosqXRPtQ1by21RXLeVn2FeP7FgU7p3V5J5AFomjDifq9dfkArEhfyrZUxbfgzdp5NQisgvpxUxR",
  "key21": "5P5XzWJNFouedzTAG88n37HKhTcsnPRm2UiWWe8kqt489ARcX1Tmt7tSgyPRU3QBFrrQEFK5VXNk12rV5uCxHeHv",
  "key22": "5GnEvnNxg19gb5SNvuqGBjtijvvTXe8cdmeCUtwDbjGhwgXpvLdptR27nqEonNW3MAsfHKzj2UizwVwQTxagy1MK",
  "key23": "5a4wqfFeB8GUSrpoHMFUDwFjtUBpFWzTLS4Bvm3ML6LQdNunXh9bs8qW7hKda7x4dLfBdrifYQjkFQtUYHLaVE5z",
  "key24": "5c7NGYwgg1c4twcUtccae4dsmRDDhFG64XdFBZDJBM53KcmnLDk4ER9PnShEb7vAh8hQX64rk4mPyYCq6mXPEhXu",
  "key25": "3qfHUbVixsxxuU5b9iBEbDydy6rhVuKb95xrSGNQXAjuo1JhbkevgD65Q8vXG78PAtYqDtJ4pXfPEW9U5wqeM1qd",
  "key26": "5NfYvmez8eU5sK4jXbvDyG4T4BFGaspbxBJsZjL7Y81LCtqtRGQQFbV67SkeiMVC4SZarDcag3Ddskx18vP59cRv"
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
