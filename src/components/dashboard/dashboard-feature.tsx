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
    "2caKwUtNBkw1MhB5qBhyWNPDsCC4JeaJNSafqgApvFJJJ46dq7waBsGHGeUWhXuwckFcKXvS7CkXAxS6opDCGYuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z7YY1z5g2o1dMi5NpXXMatfrFgMsBwCk128QB3nokZXbZXFfQdBvtWiTEuXwoKzmvQXnX9tKskX14SjhDYZnRE7",
  "key1": "tFomVq4vDh6BrLEMkrQCNsouxKpLNYEheBqoRFZzRmzdePxJwZUXZgg1rSzZKGVKawpwizBqaUbQL525PbPwCTx",
  "key2": "2ut2L2tYVJscy9AFn9uFN1oGZNkhMpas9Kh1Jstp9kAgreWygZMNr6maxymHHyotj7qfkHhZqU14hCuqFny23a3S",
  "key3": "5BwByX8YpYdwe9eHgukviMgLF7FY3Asy3848j8SyGqhUtt3aN3LY2L9WChaGXbSkrAKMAw4gK4uT2KqqkTgP5eXt",
  "key4": "3nZgjUr5eE7GLZZWCFVSfsjSSjSJsCxCAcpQii2Qa8oQrHf5P69nv1x92B75TMARhJSWD4LuJw1d3htgWsQRtaai",
  "key5": "2pXWizv7FaievfxXxPbHs7PZBCh6YE2z9cuwUBamtVHmtoUHRSsiKEYdXaAxf3cMASDrFkKpeanhoek7CqEXf9xq",
  "key6": "3ZvWuCwV4uHWpiZmp3kEqibha5syEEFhdcBVJHZHnpAMGQmbgAJ86gr6ygTkBqh6oD2Rj9i1chHnJPVAUjMn7Fzj",
  "key7": "yVowUanJjCk9tMZBAMKSBAUmAeNaGG6ejxFtFoUA5cPNHS72pSkFGZViMojWyaC6k8Pe7x84vzoZiHu6cJthzzX",
  "key8": "31nV4vUNmdUPaKr4k3k7Pk55gRRmw5mbdJp3zkkQ76LqrSvyJAEvVuTjXfFcpagy9r9KtL8722aYT5ppRKyjSGsB",
  "key9": "491YVminirYJAHnvd3Z3fSiVhbRwuB2ijJoirNvGKMtvRrqqL9zv7BZDWc8QG2Qx1gmeZhYGwLyV7g5vLyUrrrCZ",
  "key10": "2YxqnE8NRqGUfsBiuDpEDEdJpV2XkUwCvAYXiLoFaMUQseV7koBgfrbFKHosY7x5Kb62ttc64PsgZg9dHHGcX1F6",
  "key11": "61378S3LbtDUtG6AJRGraJ5JMxRvJfoaJp3haU285hazf6R9jjwWtffBF7uFUkpAV8TW1NQXjHhBASWkdLBehibw",
  "key12": "3WF2C99LbtuxCjrmfNgRWxQZLDkxvAuDNr5jNegkRjkjFP3bLkkBMmFjYJuXV1KjBu5dzxDAWN2dWL9StAvYrMmz",
  "key13": "2fKqEUu1vtDjSSGScibgj7kubrUjYvZSQxWA4Xq9b267NmjCcuMoT4Ch2Z8Es6j8qZNC5Jc16NV29EKriZC54CWK",
  "key14": "2kCZctvwCTG4SfUR7MbTgQ8Y2fnat8SdKd5rjiEd5iEJBUhe9RfdJRHCE46tJ3M9N5qd75KreALKgStWP7U4MQp2",
  "key15": "3Co5Gen4zP6nMK5bDrmNwZcTtoMdb8x2zdKvBqbPBBueGgijnspWJsRmiGsZYzLRcGqGb2GHkJaJVLrReANqRnEk",
  "key16": "4c16oLfBg7hCzqNaR5Pfzgh8UMtHDVHcQGzyh8VLkWsPwshENCpse6MmzmDqtjDGDpudFwG92VDBMu9JAwAUfvmv",
  "key17": "4vxL8pDfxHr6FBZCUcUuyjUzxzfpvyTKxa8ygN3Qtsm1jsSAB3waPx9vWAotYBHaUBnMMmmrRS5ajqQrZLMTCrij",
  "key18": "2Js1RpaKR74Pu8yfMSMZ4cRPVeFY6KnW2vPH3v8gEiiLgCcUkki9JgcVrXLVdkU8twC3MSNQX46nnqqdfN7HRXZ",
  "key19": "X9i6iz7mco2j12d1VRZL57kVUmD72LQGrNRErqAwdxVVb2oLqQBiPwQCBbkn7v2YXddnpYAMedPuQr4SwNzwPLP",
  "key20": "2ER1nBDoYYJUR9nCR7rGRcFPjEXFKrj2tQMdSuMCtzq33X2HcFmJ2HfJYX7g7q23R6Gdx35acRm7MJeY2TxpYpuR",
  "key21": "2zRBS1z4qDdrarfJHfWmLAYB3VeacxJuGFpXK7n8ysz9A6Txmd14CihJ3w4uiSLyqX1X8GUj58HjKtPqsnxPyChy",
  "key22": "66adSLQse5cYFTB4zkXNdPVHNCpX4CN6Cb2LxkhteSdiBX5vmYLubDC3mdVFgM6cGiJ9a26E1FuSbNsmYrrdagnK",
  "key23": "4yW94QMS3UZgZVNjPfhCk88up1YimXRtc4GBRnMkDFCJuvTjURCaMbkKLkQ3oitg1xvxBUbHNHDrDbcYdsCoqG9P",
  "key24": "3FNmgLNFpUVRaz6dKQbXzJaHM8B38iHuoX8nNNV2cBGyarhGBCgSn3xYtM6annh8q8sBTqmqLEHbvv6YRVdNqTf3",
  "key25": "63VR9MUanhMU9xRhxwpHx5PFHN5uNneWtNs4amVD53teEeJuh5USYLkpSnxiq8L23nkGqEHFhoBQKDWM1GNhtfur",
  "key26": "bUGDsuzkD7zi4yzYMy7tiWCUBVfkv1tPpQqhauRmQQf3FsMtPyoApsRFGBpxZsPLqkmqyRJuSm6JeYSbhra9Rzq",
  "key27": "2fbou4NHVQVqQMnBXBmPv9frXXLxkpRTb4kynH8HcSX3SZ4v5FzXWrQ3ttkXTWgR2piDxiN4Tx8ZnT2ohZm2cZpe",
  "key28": "2BRpuxX9twa4yn2yKwtv9mztoBSdYieUR1coJBBnv59mtVGj5Ldv58cSw2w4P6JpnzY1sLhw5Tr6xKWxWqDFsYcj",
  "key29": "5yApmdxjm2Uq3uumNMjqHYGswJ3VQ3SiWwiFcr9fcZowTS2NqMuyCMHhZHhmZt8oJqTTe6C48vUbHqPW2QrHcbcU",
  "key30": "2yqT835FxEqFb3pSM12bADa3g452Vy4bYz94AzhDSFrJgrJNVGXQe5oAJ8R6YVEjSjx2j6ipXLZpNj8ZCAhpk7Z6",
  "key31": "5Jr54UKha8tTMdBTMCSz1VKZFnSMkeLd3S2KfwyMJpno943rZiTps3knm3gAAHpRRq1BdtLpeKgYWh5JWozDr8rf",
  "key32": "2mDuhxrBVHzGKyRMFbjeTY2ML5JxxvhRBoPXT8Gv1ENRWYtyYmYDMwEyr7V43396KPAd5AoceYfi8Phwt5sKBza",
  "key33": "5USEatWncXUHZLMC19wdbgiYa8VMNPmtzufZtHm8mVRRuZWBRed7w8YTYZWovoTcqg77zoq9qcvUNjK7sLJFMQBo",
  "key34": "5CEE9Nz6D6bjAFWBgd4S8TXKyjVSYF9unfsnVthmd3Dm1DreXgKAwjVNZVP32sQDMnr4pgv4QuimQME3nc8pqc4H"
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
