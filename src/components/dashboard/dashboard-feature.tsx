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
    "2burmBHo1pc3NppYtHfpGy3yAG4cmKFo7886hvNMVkMTMyCLWjBVbeN4qGnmd8mFKP8Rc8jmR5ZgAgadhMjWfdDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QDqXtUFQQJ42GfRz67pdgN1KYa31AL56ZqyAVy6dgWU84GEJdT6wfpih8Cg4Lg7jd5L3Ne53A8zRD79TchSm8Jv",
  "key1": "4UQoj2xWVc9aJnCZ4TG8LrRbvKX2tG9V9tViHjaSLKBb1NqL1nth7mtLQY3WnrRaEi9bxFn7QY8zcTamXi68xMky",
  "key2": "4Ku6ui2ew1oTnoqoCR3FmeAUc4GumTjwBSqUgsQ7mgtAyBYRgwGeLroV65GiHCP6oDx41m5u74fWt7sTkzT9KoK5",
  "key3": "NmmVTUjVTX3q3hq2FV72oNXWRRM8ECZPnLbMVumN6EPkVH3EZ8yFdGFabdqMcFDLoyALYKKA6fxjdf76Q2MSUCC",
  "key4": "3uKFxAHF1oRsFwE6ZpkhAA5FYXtB1Fp48BVyrize4JqvCe1NgkMhiycGsa1uES6JfrJjPDTh2B2nCohEXa6g8e1b",
  "key5": "2XjSTeMLA88Dp3mJMsjBQprNYq6oBbjNEH5sgUxJb98yyVAUAt8oeKSnLTeWEaYqkGxtcjiYQL57htexDioWn7Re",
  "key6": "5zMSk1LzdPgRvowTcJoxZafG1DaACGL8x79CR5YLJgsZrExtdmGaREM36XNVEaajQyQrPgMdiKNm6U28KVzEvF3c",
  "key7": "3q7aAaF6z7fdyvZvMx3xdfyAsx1f3E73GsuT3UdWe8h95dNjQpr7Uqb9zUoEyXwu3g2VFMD6KVD8CSQUNPAday2r",
  "key8": "55dkeAwb5EkPKEb9psnAQ1y5Z5owh8AyzpzXgW24KVr5kWMDhfQrbFcK5ch5P5PDdD88g6sBhRfTTnF7mA2WPoy6",
  "key9": "5bxjEVJpmaF6yiwM2Jx7Z4uA3sFSY43mfcyXCZ8e1mK8MEDPwfzUTYSLZKDDg5smttz9quTUNE8wabjMJZNhfyjM",
  "key10": "5eFTjbS9q8cCHt2U7NDctNw9b3gxJb2nbryoCKjrXizY8AQQyd5fp6EqNarGD8c3fw5GXCgNyXJrCnXCLsMuanht",
  "key11": "3LTCtVh4sqdfjVuTaAUnLf5KCteCMEWwJd2wpDq4ctAD9Gy6KjCbwBcg4bJQvaCRxnr9UW2ksZ7UcEqFazSu5rWS",
  "key12": "3q9ip31eJeyKoQ845uvX2nLKZxbNDn8gus5MLR3JkLdYnBYXBurpntzWjRbsugAkuRFftkCw9J4TLNRtHJMWRyEj",
  "key13": "2zkQjqRCNrPAZFd5nTq5Rk3iNqGu9ggYxrDHy5wH3UMxaXL7V2J56dswUQGKXJqCs1mPpgmHPLWqn41ddDQPxWGK",
  "key14": "3PK3LHzMPddaAoYvTAoFmpy2CY6EerSFU4A7onTsGpGoQvXbLLqbQAAJYtSFFcKX1wK3xTgvuqKzdGamoYtM1x6u",
  "key15": "32ZjoVh1rgrNkiGj6sXrsWBqT7BXX5d52ERuiLrjvgkihFNwbszoQKvPtmaHhGd4yAW948TWxKVSy9KGcDGiR886",
  "key16": "BMX39fEntcprRvGn8GaaGNfdu4DYUermeadn5uTLpcgsjpSuJdQbVXA87M8Nu69QWEcgA3sXnZ86ndovqBZAYcV",
  "key17": "5N9a3ZLd3ehLQGUSoxsXnWktqYW7sKMUbybJs4PXs47VXJFJU75MfHBqgDPqtFG2d6dkMSTL9c8Pm5hhXUqYjRZb",
  "key18": "3sanp6Pio14cf1kYs3iUApzL6pXXbR9PkTQU58L2Fr2Lf9ovaUe8tBYdHKigXyu2jrhJxDmAvwkqNHPk7kCYtukX",
  "key19": "3zWxeFYDbAinHtt3Gyky7ZbfP55F1HQ8bs8kKgmLccg8ScsitGYDnN4HbjVGqw699NBhsZbcFEZDL9qQU1VAprsU",
  "key20": "ekhfZLVg6YhnW9w8ZNfTWU1LK8K5qcpygFWNnsR77CTgDtNARcvB4qbF6e2ay3QjL7u8pnnDa46m5GWfZiZTffU",
  "key21": "4qVsvtANb7kn2ZyhhuXSE2y49n7umhQJEyJ6UQoWVDWHh7JzZYrDJ51aTXNt1LuohMARxvpu1zwkxDMPiu2T58QB",
  "key22": "5xDR2eELXrJsU4S8RRSREyWSpxdoWSKovDjYWkdmdUZDhge1UjGfdiFjpYx54bTrDUoKsNKfKpf66LyMR6nWthUA",
  "key23": "QRKqp355YHzgFiBzytRCZxUJQbuk1ccGac4ziD29gJHbr9nbv5UdvftNG3qXfpZBqTCso7gW8r1jJTnY7ByreqT",
  "key24": "2ee2JgqYN8nrVoRcjiSme71CMrRiYsBZ3Up2k4uNrwVstYX8N4qqSJRPdSXtpfmguZse6d5XA54hR6CFG4sBAvcK"
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
