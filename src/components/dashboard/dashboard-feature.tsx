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
    "5F2asyqSsGvH2rpj1zUcB4ZiQZ6gJTpeqPqMyZaP1cTjBsY5KWUxA33fZZSJDCygtSjEHLpu54w3t4MEYzLgCHWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44uCsBrCGkvC9tfBdEaHpa322ogKNCbAmjn53bETXAiKK461QWQ18ivMsL5SFdLvs6CPormSF4YF2ChdfqP5rSgP",
  "key1": "5DdF4j7aSLj8tuVQfji14SjCEgSETfUgTJN7BF4ppvptZ6KTyceaCrW1Vogi5LoBEZrMqjGi5aZqdin9mCSsKttW",
  "key2": "2jYxWM1huZcXxsAfV8rmtA3WpuKRmUPKYuPmKo8otgghkMN4DKtv5Qgsi93Su7HDdmQwXZjgYewaGsEsH8ukjxPm",
  "key3": "rY925crNtNvtMQ2Ga4BZpkx7GJP2Nwt9GPoveoaTonXcuFETbY5uN6y9ziaheWh9niovoLc1hbYTiBJtzGVAqyw",
  "key4": "2Hun62qY8LrrqNfTfFZk58N1mcaFTMXGMeWcsWmDLcQTqZRT3SpCDt7GX7meUpmJ2WMuYU5MMMLfYjdMzTaKSFsT",
  "key5": "5CGJxDk9xT49bZLx2uSMwaoUhhqUCX72XNkDAoz5vmhYFWY5Fof1kDMWTrRa7R55JrBK8qEdkQrJXexRWT1cjBmV",
  "key6": "4tnRMfz7KPxWepyksXuAg31pRxBDoUgEGT25J9ZhGKmfwCaajY8v29bhMLTfmQKroVEQQafntLY4QHCqUNKEimR1",
  "key7": "5J48sxmXQNeyc7ThKsNkbeY5tTX4WhLx3dBeRWg9moHMYYS6Zm4saJeSoeyNkVvViRDsSTwoGjRFT5bDNDpGwuH",
  "key8": "4a1rSwQt6hSvitWvVFucdbxSfgPn1KAAuYsqcB3u7d9tn1yWiefSpyLPvJKFgMF5Ej3fjNg7xm4qNcY36MUKhSg2",
  "key9": "FYBhZusWy9RJcGBeShg2depVbC4MokyFrLo45FdbLTiWKx77QVmjB9AdRivvX5M4JbVB7kSRLBKEr9DSZaVMNJT",
  "key10": "4hy56a6zdHyJQLkTqZ92tsJwmVWZZM6nWd4xtxoRdioPqqV3q14C6Q3Cjdte4dc7TEg1TrbZTJzKozRt83cfBCiH",
  "key11": "4eXeCaWvHBb6EcGvmyaci42nJoVDYuPByktGs3nJkeBigtwsnM2i8ACQ7z3QGCJvdt9DpyqMdi3xMRSeodCE8mML",
  "key12": "35ZmRsh9se6DZUwzySHfnMHC5LveYKeWimPruZi1VQYAZ6dXdEaaA413V7eKTL7Lw2cfVWR4qoJWS6494bgEUahC",
  "key13": "5NJj8TTn4Aon8JEut3XgZBxC2qn6sgJ3geyqAi6JuagRsXC1HWtvk3THGyehV3ZBEQyBFua4VdCdpr8HpJPuw2eT",
  "key14": "4EDcQuLvTaYKykmKa4wWko5pRTx5armM7CZQKibcSCKqLxYobDtX3Va3NP4aSjfXQkkaMsmNRG6Dqbmmb7hcvmmm",
  "key15": "4n7xuvVnTfTrNBdmzVWb25qFbgRSa6rgHARgBuYW9duqSuzarS9x1XvEjVwDLKcu2ev7cF2vwmH3Bz3pHd1bhD16",
  "key16": "gN4MWKHwuM2BWByZnTn6SDvQkXLdnG7rrkmKWSAerFhRpYNWeikpcf36pEweeY5b9ByEqHoab1pQ3eykdFTeaEv",
  "key17": "34XEfBkYUTRF7LHaLMDjSnYngTJVLjskiAMykgzkMpbWK7nDrpd3SMjqCCq4x951oMAR5Ny2nLhMSNT7F4oszi7s",
  "key18": "wgwj5JbFuN5vixCx4vNbfAPFBNbDJPtLAMMRZURwLoBnawYGFvritoLMJNK2ABrcoZyTDbwjQDXbYdLfJSkPhXW",
  "key19": "5V58hLiqR3DRsVtrCeGMZ1bx9z3qNimESZXRnXxpi2KVZ9zLhrNUXvmKmLSK8aDhtQnznmn9ETN7itFT7Pm5fBFn",
  "key20": "5WzXakpiqyVoz7bc7Y7YVRrStoF8u73wfQeQniirRKR8k7RRPfDTu1PMvPC8rkxKVNfgAK197f7uoerYnRDrbVtX",
  "key21": "2NP3E2GuF8KdQFVPy8BLP2tExn2xM8iKmuoD4Ee68zEScMpZmVmTiu3Dg2FDAZmbkW5rdHa1rPS1oC2fNVZEuDfY",
  "key22": "GgaEzDP8vQHLSasuEmgi2LBoymd8buNsVuS1m2QdJpKSkqEYiGrtWpPpvPf5XLBezdGbFXzhr22rhLYAvomGvqu",
  "key23": "5t86ahRDCSCYAEf4bdi3Q3mePWEoRwPfw4TND7Bsr5kmUoo5CHCxeK2t1SDrHTrno5zM3tqrRT44oyeqDf2KNMLj",
  "key24": "3iMrmqadTrbDgeZc1fx2rwsaY1UDXTGo4sU5irhJpkHQbMmnsY9VKjjXhdJZmP1jeQjeC3a7uiwAuWNioeFFNmd2",
  "key25": "4xJeK18BtMy2dM2hF6uVthNBBBuB5YGuYYPu5U5ieAh7e9fxAPwR936SQxrVb3fRoFp5bATE2wsYm46F5Xq7nDYK",
  "key26": "3BZfu9RYFTtTA1EBgqdi4hjGRgrqA8vUtrSEiKPFtmc6Qf5tPPJtqLqra8fqpfeeeMwWRaKeTNkW9rVLPJwskbTV"
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
