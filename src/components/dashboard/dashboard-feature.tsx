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
    "39PE8k4UAowcMvHvBmPgpvociByWxnVJD1hhN6eeGqK9ya2qm23daCUrdQPsjz6tRSpqgcbaaYZsewtA6ujTaMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vttrSVqXiJH8fdDqyJPLnwRAAeErn35t9AbcBJKz6B9DQTAV6NuHkk7n7tQKeCrpAwZwpiG9VS85kgrrvDpRRWo",
  "key1": "REWfQS3ipsMPftSYtjJ787bgkmdiyPLSoWi1Yb38VVFgx5pQpc6KAyxfZp9oGLrJ9aN68JBoUTKJsgSL85a6Y9H",
  "key2": "1mDug2cBFbtxx728Q5icoDX3n3qaEV8nsAvAsMLDtSVY2oJ3bjvNF9uQidrk1c16eUe3Y84VPXhAXazgkhauQG5",
  "key3": "22tELvQG9pyGupcXckKnzK9xGzCa4ti3ykq4Ed4sqPf9tXB8tJsTDHxAfZB1yM7EN4fGkCi8yPzf8yYAnMmT8Qfe",
  "key4": "29Au2QJYbUSFNvJsSKSt1K23AZjD7x25eSHgVn8WeYbKHGSwajH2FyK8hzsuiuVsx17HfSVLEhrPEwCfweThpry4",
  "key5": "4UxPMYYzA5SXpk867MsnnSMiKx48R9ErfErpyB6oEsonbzyHwxD18n9qagpjcnozeMmyvwpQQH67wxwvjJxhiCqK",
  "key6": "5aFZiaVzaKgEwLsJjggxZATB8kWqsEhu4VQo1vZ4A5q8xg9zQgmG914rDyV6cWgDdLrvS5vTo3GdysDXyULo73B4",
  "key7": "2FeVz1xNjbvXX6ngCt1nm755E4c2FuBfrCq5PfBGxvVPmn9RDfkzD1f4qPNd36n6kLB1doBwrFmW4UxRaeizknXp",
  "key8": "5YHSyGdXEiH8aMJZ926zpXG5ZU2ZsrxMfyHFAuTE5hUW3LsNVpsksK9pToVoqYYvMzkPd1wcGXWMWVvH6k8U7yCb",
  "key9": "pDymCNzAbstGDh7kMWZQmVTpwNykfCo3S3CsdU58yXaHknVXceuagEBdqnNW4ncnjxHJxLkfxYiyhjBM42H5L8Y",
  "key10": "4kpN9gkV3wroWZdUqczcC1aaVY1EVNVkwmmLBJP8zZHExhZTVfvvDBbHzfeHyGk4ThfDX5Cyqz7n1uWWSmxBgMC8",
  "key11": "5r645eH59zDFYwi89nYQp6Uijo22RtkBqmiEvqXsevKLhFxSYAfyFVZz7W1WPCxaUnnG16VUXwjbpagvn1iBjddk",
  "key12": "3KRVxkeQcL3JstJ2XKs58PmAn4RL8G2MEbSX4Qitcxpa4wSbJdFkKkEkAzrfXKjxEk2ByQWznVmaBeAimAKRxKWV",
  "key13": "Wn3uuCjXkrskjkhzWPpfpPsLYbqwco7exYDSYS4oM5B14PWyQdumUdJV7uKZP6gcvpXQM7L4iwpWg52oP5MGvmk",
  "key14": "J7QWGXfjzpnEJCTJmSW5mypEvMrEkQFeWuXipXKN1ZDNvE3LU86GMZ7CdiLKAUrN3de2c8w1XeqZjAbD6259cc9",
  "key15": "5q61S1CGCzKA73MMFJ28J3my5u3NPcQvhEVUSKXK2MimZh6FvbGxQrFg4eRu4Lxw74b1b6JzJ5WLuyaKUsWZBqo6",
  "key16": "5w1YmFQnLVAdmv24emLk88yGM738D2cUejV9MXVHdLGxxVLoUg75qifP6z1rRRTi3aNPPjXbHJMnZtCTv84DRQpj",
  "key17": "4WfzHo2gRYz97rnvd7heaZfJd6EjnxPoWFAkDcQe3pijkhfZ65zMFjxrQ9cgFCnMAcBxnAhWCTLWW4JYJieaJ9Ga",
  "key18": "5YYeMM39MnudrAm4TWk4QmBjPTER2VtymoP2icimPFZVeXfyMJ66JXLmejaNMfRfZwtKHY9sP8NWSM8jcMrRhQdM",
  "key19": "51pc1BSTdLFT1tzrFwFiHn3PSCHrrDGAX9MqcM5yAyCJBWKeuUPTiB2bDbvrTgEC7LygdjJ33cZ6fKhrthdv9WkA",
  "key20": "2vs97eQNDYbHcqUBMaXAHRRcvrUSHX81hU7EmVCjBxM6onn56H8dHSaeySqTPf4itGqfrKdvnzZcM8e42TBgvKtd",
  "key21": "5JJWVgmnQDF4byfniKaFoR1Sf6X1yefAnxpCKqD2rWsLT2NFscyWFgx3u31grkPrGeyviEFBCxbVW6rB8iFoaaUy",
  "key22": "62LbhheoFzfV3dZZvVHRe3hA3uqxiRTHvc449FqCjzgtwaUfJ3sMkXRFuJBfJp8xc3Kv32CWxTc9UVvCM5iELuuw",
  "key23": "4VXxvTwqT3KyRz66QHxYBcgQnYNLuuNCWofdfaWWNJYA5Yc3JyH5PW7U82HjU3Egwo7cMa4nYdbaCngp4KH3wUTE",
  "key24": "48WcUKMVnxGD9KCAVbRvpa16phrzLai9y9QRnX9LbDsY76Xd8SeSPWc16dwMmF7nazuH73vCRxhnSNqJpKmwHFzZ",
  "key25": "4FWng5CA5nZej12HVX3bhD1Lo8fP5sNDHji3kPbjz93MfSXwzCZr9zxFsFqnNKppPN3CZhogrzYqUwbQEVTxHdwa",
  "key26": "5u17LGoRC77zhyncP94fHtr5ELjx5E2Swm7mj6Qdp5dQbsXuqe2t9sGji1aFo4rDEWvNsUPpwy7UM9fm2BHuLP1Z",
  "key27": "vdhbJMCc7VJNWM3WfDGRKozg9Sf2dq8WGwtXSVPUkYCFfCJQft3uZu9xXA2hp8JznPV3VEAXXTToZMHQn14BcTn",
  "key28": "3tCLCs7NcuwMCAN6uqXunCe9bwUG23uDMm5txupb1accE9qy26sq664aFygEYoB26RPoCrv8ZuSB1Bifq2czsBHr",
  "key29": "5oUu2H2V2qwjLjyoZkraWVD34nd5wdBUzZ65v4negZ53Ak9J72ZWvwXEjrDHso7tAreduS93WoiuVoWigQN6HBoy",
  "key30": "2hGotdbqtcXBCffgfr6QhnjCobGrPfet4ciQBLp5SxbiCbwqBhudd5e8NRys3wF7SaPXqEp9utnAtkb6hZgjRLTw",
  "key31": "5bFpQZMuT4csJJkXMRwFtAYimKBhBhvAqdvngVe6ujzEuM2CMU4SHWZ1RwKuiXTkJwRiuRfD4AGD8sMiBA4JQ3wc",
  "key32": "5prTToiMVJTMW6Un6aqPe2K2nTbpKdfEeY67PtjxQwFo3yZ7hEjf14hVwFUyna4ZXDjVuH5hnBqWP3tMoH1jNsJe"
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
