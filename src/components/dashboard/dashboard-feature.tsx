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
    "3awdQBjPr3j1TwxPTf5gojZAuRD9GD1PqQfgpVQ54sAV3997pWFr9XSfMZdTk5Cwv1a5xtbTJKsBThq82TYbfu5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v1ReoFBPDZDyY4XzHXTxNm8RsUkEgnLMZZPXFvdBgWUS75QEJPfwRZrRZj5J1PL5DUsJLBcYyka1VPjZshEfag6",
  "key1": "39dXS7zcKiAefbQeHHbhymjGD9UJJM1jPVqQVEqs3MFtGYLj98m7156RZsCFekiPrp17uUs2AYwU46HFJtqzi85G",
  "key2": "7zyaaA2mjFvgmjRiqii4f3E4berBgdpge4CvdqYvjEyk27BT8CWzGSXDTYhTNQGY89NmvJw3PMQyhAgrwqGKfEs",
  "key3": "4tqWK2p4W7SJ6UfG4LSKtsFrnrfLTwF1pQ28FxsJjsbQ2NjzmizBU6gHAbPt93Q49DJQXqHwM9b8coXYh8veXTus",
  "key4": "5NTfCvHKV3rpBLcPi8U3dG26jgYz5QMQQdwWGbuKAPEgFfE9tJ9VuGxYVPyYVsR8ZjGDJUB6UtvyVMDy7kB1PPkY",
  "key5": "4rCtzimQN3kL225XruPGygZDJEBZwpukA4izEMHbsQ2vw9FxzTHGFjADXYQzdX2ovQuhV3G5QGBcjyoyqAzrMkbS",
  "key6": "5ZGCwNpnUMenS3t33jj5WsTFjCrjv5pxCmmBNUrzxCNhf9TVwYmS2nEpX3WqCXBbDbzFjuzeWc2DEz6pTyx4mEak",
  "key7": "54iMhoVvw3xer2bNFYq5yt9jFFXLNvVRuHqp74ZhvJNEGgKSG1gmyhg3WjEax5NV6Xxm2L8VWMt49g9RbvQK9KoW",
  "key8": "5ACNkEfJSYFWd7roWpCgxznwSuXrqFxxPtyzk2e3syU2Y9hHghjNPE6gvk4kJB9kAaZS5xtvyZh4aGt6exh6gKE2",
  "key9": "5ehUgnRRG6pu3gzLxoUc4zQ8bQcd3pYeUN7GgKz3Lm3g5gFYd86Gaka7YUHz7zRNxLzUX5BozTTXRt9ArQADoqZZ",
  "key10": "5RptBycEzAs7VzxopCAEEZ12kMg7H8KPNoR5H6XhhYVGjwrYWftrcPbHX3YJ8PZhuZYGtvvbCGJ66n3ZQ7iU7bE1",
  "key11": "25EB4K39neXFxXQPSLk1YVGGdALPAurqTsQP37LZi3kKGddynk6zBE2pWNvrxv1Cfe9FzTo31ExvRG47JcrMRg9u",
  "key12": "4GWw3V1AHCszjQsGbuR8L2Jk3FLaUmjLKtNQ3uNLrDxwRvFNBXTXkk5MC6xzR3NnTG8mxXG8GYkkbyHEwhssfuBj",
  "key13": "4KCPsjsByV9wj9SLsabQyTvHvi5rsaYpdQRsv4VoFLwPHauFHRi7RK5ddnKixjLrkfzavVynScqRNvLpAashzHMW",
  "key14": "3dC8B6rkaJd3qDonYjxjWzTLorqsjHKYs2HvZiEpgyqzgyvR6mUk16awt5oNQTJUAgx6FaEt9WuZWC3LpjYuA2qN",
  "key15": "5tM9A7kbym9c8Ay3nT9TjC5z5JdV9Nk7HrAczNvsxFjkoMSi3rDmBbbfibwERv2eYLLScoYc71PU3JC2SerMSmYi",
  "key16": "ALTf3C41qVUrnWbBogMXphTjU8HyVPQ416T8kdqFm6eP66JifPL5NbT1PtQvK15ZQjmyB9DDeBJSUobzdXzvk9i",
  "key17": "5WqVziMChuoYb4NkWhXdcq8Qpw4tKeWXdGYAGXdriCSuxxmyzczX4Z2wRT39oQhgziPGWX8yJqNac456rxN9PHxF",
  "key18": "4CftJYRhdcETMkopp1EyP6dbVddteixAK2iAiXB5LTtui1WF3Pc7wwQxumc1AgwecXDJg6TEE2oJbacaMdRkx2HV",
  "key19": "kkYRR8xNRHdZc2dJvSekea6bMZQFSEc5QK6sfT8AEp5LgtrAe4UtpbyHyuwXTs7EwTAX619suW2AzSGAR5EvQBv",
  "key20": "5ChX5ZuShYKEsUWomfr7xKCXSSM9gPjx9W2U1CkQvmBcAsN68XbDGK1vAJq4ZP7ntAELcNP4kzgYX1SmGcxQjFET",
  "key21": "2tCcA8QstE6nshUV7Aw62mtsNYJdVkNCh3dDFBKywJQJC4JPdeCnPahTfrVoF9GMeMybYvqRGjKVk8kqfwWaqLiA",
  "key22": "59iU2C73tbJkxSvUJ5wJGgMET2xsf2S2UG7ErNDyx3vbgiyR64Jtb68STD6sfaQQXFuZWtaTjuNXh22jtPXMdkEA",
  "key23": "5SMDhuZ3pkWEFs6nExn7eWYJHG2PrXRXobZ89DSjnAMLzCMMSyd5HS7TeGWC3wQxuu5ndkK6apmVQhuMksgeCKSx",
  "key24": "khCJivZQMs3MHBahms59LGE6Sv5N6qee6bXJn2AmNBHeLgi9d5LQz4JAAMjk6CQWoDYe6yKxiUhigrajpLHxkpF",
  "key25": "5fTP3Yth4KsZXPakeEu1LUgdLgKfNnvjcdsbDGMkp5tW96VPt3koXzmrQdrGAE984HEGKqKwf8x6KB5X12RmbxYM",
  "key26": "35oDfXn9krUTkQbvEC4FqwV4MxTcz7H4drAMRuL9a2y3Ytnb2vQ6vsgQK17FCikHG1SU3EBFufHajaPVbdyZzAFR",
  "key27": "4GKT9qQhWvzqwzgFkgacV7Q2y68rDkzTTTCdQURe2uCZWeo5zMBeqayFN9YLXWMnPDGpYxpPUSa5bqs56dZ2Utui",
  "key28": "2u2dtf4C9TaDTivEtH5e5pKr9EFwH6Ruy458PSXwy7PdjeqiXFkzSGkac712LMPpGqvsJFQsNoi1XQ3sWH7t7pF5",
  "key29": "2bTo6CKjpXSY1HYsm47p19ZJJY3k6MGCEduUDCJbh4JdCEmYNWW8EjapEvfkmsyDjDKDL3etD3iEFr6KE31AanqL"
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
