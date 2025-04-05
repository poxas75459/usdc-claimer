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
    "8nwkjYS4VA3xWqAKDsZTQP43wJMXpJFnzMFJkPEkQbi9d69KM48ky7kezEa6qYWLTANiFp3z6sLjuTNyJQ6ribv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XCyh24sSnUyb7YWBKLUhyV7yxV5CTALmCMh1GX2DSDrkE2B5ihJDKARyjLUtSqQAgPQxN4tTdtx2jZhVXqrtMpg",
  "key1": "4vLySTDtm1JEBKRM9bZFUL9C88BE4SioBLHZR9LdrpzY6DSQmJJJAWLbA7Qgap64Gw52EnWrZFjSccNaevgTHs7L",
  "key2": "PkeJn9KKmX7zpqmCxyTCSYAjFCwgnXvSyQnE8WiZBkNFeQxHHeX1rdbPoYHzUmdErTJNnzSLPDfV8kHoh3N485f",
  "key3": "67VK4pnJtKrnQYfXEFhyneNCRyUYVriMVfkG5QFXa9WzM8izSBzLRTAGFR1LLkC48K9M8q2ZUKJHzLs7s7UVYvyE",
  "key4": "4cy8aVr52TahBne1CzKEB7K45z8CfAS9iDmyotMA7gAho4t1ywrjy4dA2fGH6yHiLFJN6BpnL856XG4Whc7XmE3D",
  "key5": "4McviQfwtSpfi1nSN6TMCeygyRAwyaFKMhuggZNeuPNyRvEFay2tWv5Vc8ZBDjDpC7ggm3Gwee2R6d4Q2ap29jVX",
  "key6": "3GTiHYnKqAV5wgjyR4j8LPwWhiXQmaM2Q6E1HumCm72P1wzYXw1DQtaefsZazsAq2EpBqx4a5KxLzxQEqDSgSyt7",
  "key7": "49HegWujJ8Sb2ULj6HsonVCgURvgivsV9j5j2LishkoA1m7r7H3gaZih8BeW1v5cDTMccVpYbKJcFRFSSqogDbKE",
  "key8": "2VURvtCpAfb9o76cuvxhJTBSxLMSUJY2dVJRja3qr34szGEMhPCcg8nS37qbECWBHVsPSMjvqrgwKXpVNNAD3bY7",
  "key9": "4XhNgHLNdSZXCxW6Nu8aKopu4vHggpakPfEnmffbu3UsqCyXmYcTR34dDZPoeet2hVCfFVmeyKXT6KnuPEwUsfGC",
  "key10": "4TvTbsk5attTPhey9VeeMDGWVsFRWKKyGQNvWNeDQ4iD9e9rjNy3VULHMPuJFsp6KFzZrNbNBWZq4vqZ3hkeS7TA",
  "key11": "2YsdHfhW2PS8W5NeM6eNiVz2FLWMKMdHdQQKG2oFTZwTLAJSKaNYwDTjP25dV4JHcUZKZZgVVwYWB2K768ijKrrz",
  "key12": "5Ag8RjZ616XPMQyKquqsjC391ZFnrwem8oG1CY8aRgtFNhqSDcUdeAgV4Jv67DwNPH3CEj1Qx9CE1crRCnCnNHvZ",
  "key13": "2EmbCrStHE8AniRCoP1yrBU9RKmnZvth3ZDxvLPah5QynfhvdTxvJx4doTELJMQKeyFz6Kk1SY6BUfsUARLcG4CF",
  "key14": "YR6mFbkCGpkAeHhyF4wJiYJZwUHPmX58KzbBGcC5DVgMXN8NmwiJPZsHDYpZh8RabX8kE8rrd8J8sNUc5uy8Z4E",
  "key15": "4TDJjSzTVHYeMvjt1gqCWCtxmy9ptWq33HztEjMPZR5S9JNDt8wiq3nUhN6jUjEcgRVNUn79Df1G7dtFmNZa58Fv",
  "key16": "39pFCmBJwLxHz8PdESvumRL4Hq1fdQNsjNhT8vKV1GhAEqscby9LuZtCsiNwcA99dUTmiXJgNpWSwmfCZyNvVdTq",
  "key17": "aC3FKRjcGfMtkfdKF74z9ZgFg6N7eJ74L6K2nL1aaZnjp2Pgrf6bSQfq7z5w52yZcYZT3TThyQfAN9LVKQLCVyK",
  "key18": "4PEjsQfg57wvuAQZgfapRjTXNHLcg97Q8Ad3Lm42PNJ9TVV2myBR3fBDEHqHnwnMdLHFn3cTNkKw98iiHkayhkfc",
  "key19": "7nia5WfEWW3CRWLAWUuLQ1ADvUk4Vv9r44whW6vWDRxdD3oQXbcEtizitPSahaDeYURjTZWCzonSafNx9a7HqLU",
  "key20": "2xBeyfsrWxJryArtfnFFX1G7K6AAXkjvp6GLEUfWPiUiwbgVG4hmhvdfR3Sg1uGmhFiqpyAnA1NT2782h37qqto3",
  "key21": "634fa3iSSJLU1kpqux2cDWjoyVPxdoQKQQapYhkusH36yigCMHAyNCWn1BsCv54chMwyLkrebe8XKmRVAHA2oFur",
  "key22": "3FVmwCYrJzHdjDkPKcxF2Vj3dgAe2qXgV53CTzqcRpfjhtBLETn3gEV91kovwuCcNeiX6jMbyRqNnUyDM4Sep9m9",
  "key23": "L75AzQEJ6SNXxRfNJ5WdTzxPeVy3LQC1pSJdXd4dSVAFbg5FNrHSSXRfgHwniKJAqn1v4pUhcy49QCFNjKQRMXq",
  "key24": "5bXHA8pQWampWX2WrrVKhL98b596NAktNyyBJTypjMW5vUUEJBtd36B75mdVKjTJK488KpVdW7rXT9XdhupEiZgV",
  "key25": "4kL3h3GVrHjmmMEyLhn6BvxopHFg33XoVRoFHnScakMWbKK4MJxSR1B4mtEUttbxzWWL5gDn8uiFbwLTxVEGH7ga",
  "key26": "48Ywfg82b5XUzmeSdxaxLZec9XFQtwBxMSx9rYCYAsoygh5AHt7UyusESPoJv3XrRQFRaNs4bvMNhrs2CbVv47Gv",
  "key27": "2iA2yTKqtB75az1kAVuP2axNkat9VrJcyy57mAwoN7qnn3htYAj4hcF9XnTecBXSuHaxc5oA7JYFEWUeXbLbQMcS",
  "key28": "2pxZAiDG6FfpLtytDYRxDo7npmo5J1JaXFYV6QZayXw3NsgBvBpXVp2CzWhJ4WH9ALPuptLiaUkG3EoKakdcLuHU",
  "key29": "2LVKDhfYV1jvEi4ZthP4rHRsPo5eyHoeF6wdrZm1QqK6j4M9f8Km1mqy1hCsLTcqt4dfCpVyG2xyBX22sapLJBq4",
  "key30": "2Qg5WHwv3a1VH6rVEjKNkpQR1mLWbtBHTB37fxozqBvBDio7BhCKPJC92oTYRry5UZfiQayn783CqZ16vqJ6v9qc",
  "key31": "4ZyP6pyfy64shNAbzaiSo7htt7Xtt5UT7YMGJ4EQaxVaAsYagpy9r3oEAKCHasNkW42oqu9TJqXLWnuHMZyNWbNZ",
  "key32": "vuq2HTjfgCnsJrdpwe8NwwL5Pzt5jS5uiPfPbGwAWFmi5sGfh8JuPz2a7NqJk1tV3pn5umnTW25E2WVYiduArHQ",
  "key33": "35Kic6G4x8EgTDbM1sdZvg1BbPha51JqTm9TjuhLDcZjvug97RfBW5ebzVEJzehHjCx6s3X8E9fvkfRgzT6XZFUJ",
  "key34": "46nK2StBh6sMFhKNUmvjBQ5Ugr1cnUauWTsvHBzU47sCNj5jPsjUixMw4Ys69TorhV4A6BbsGgCYhckHJwE7cDMf",
  "key35": "2DDcDJnbAwZUDPTwCCPVe5NVxBnw1NGGmtnBAKs4kM17EVmQFzGxE9UMJpBKgr4w3kdKAtAAguVskmjTz4HtUNbC",
  "key36": "pe9DaS33HmMYoAsnRKpzkoTAuF96AjEpjLr4xoZWgu1bfiJuQPHybcndimSSn8oXCbzmxArQGYpmm4gkEbr5uZs",
  "key37": "33W2pV8Vot6uigjrYUkPPMuw8Jocit5DCggfwGBsHRDEpDxXemLXLXWGpAmUtePQwmvduyS7Ytc5UbQR8cNzH3cE",
  "key38": "4CQ8jmBFjqzzcszvYfwH3GfL2NqBFXR6Uj9pUiLxzTx2YjmBxypvz8nCJVihTa16J9nPBzDFEMNM6TamfP3VuVua",
  "key39": "3xhkHaQfg96ZnPcMhi91tVAd3f42z1L2DLuX7ZcYRnZ9pCVWb7xxMQQ93RFPJ6xZQT2HGXM8pWUPRk1Umj7qgmde",
  "key40": "4yFkxcqbwtJaqMaavy27gpq81KjstGpUJ8Ju9WGMmPTHhyPV3YVM48bBjVXPf3SACvVyR3zt4jdsx5GuaUHKDc4G",
  "key41": "4w6SESCperpgXVZZfR9m89i6ukQhAGeHTa2xrJYaMoadVHQf22Z6EHQykMj6EwipWpH3srcJ795Xb3wzdiL4vULt"
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
