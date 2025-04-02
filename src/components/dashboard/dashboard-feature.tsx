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
    "3oTGARY5TCJQkzqvanpwDshDtAgP8ML1H1xUYrSDNNrs4DPaDU9TGndZiYw5PC9UMLEg3nazuD2pMvMwkMtXSpm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YJV8R6YLUbfPnHGiDiMC2djm665upPSQacgUrZu18TAGmZNBHAx3CNXv97LY7McPZmqo1AYecukcjZXhcQCpkDo",
  "key1": "brcz4ehSCvKPHw49FnAkuqprCYNNKzAN7bD2iLzTE7LmW4B7BXW8RkBuSw29NP4xuk1dDrcyY7jUu1jQytUC8Y5",
  "key2": "3fXqGh1iasy5qTgGqMsHwh4SbjpJp6CWoERNGoXY9u2ScPxp8NnkBLme9gdNkYmKcsAnTkhrJLRwTdcKZpSiomAu",
  "key3": "5bJ2pyCMg1dUHozMBofEsJMmGA1uBigMwkRGaybbGJUKDshnYPiwjdz2SZNR1FZPwojVz9XgtLaT4hhadJMQSNWR",
  "key4": "5Z8E5z9ivEAy22xaKB4Evzj5sQEAgiQus3Qn66WMzKrmQF9KnD595TCLdpdeKb1r2KAUpP5NTmeaGqqwBMMT6yWM",
  "key5": "eRb5atDGMBrP4fpYsF1gem6sqaNpzSDMTyoaCerTcaXupYqGe8B4WE8Lsm59J951Ft3yihpbtWCtMqvs8s1vaW4",
  "key6": "3UELi8Gbrpevd57Uj4PDoYyhX58iYL662oXvktf2drNmQoME9TAEjUSYkQGnSxibCiHxfp9K7nMKDFgMumLDfQE2",
  "key7": "4khZbR5uRrtQbAvKY55ewqTHQ5RhXkn39eYDvcaTUJyMxWw82oycJj3wonDENYLCuSbd5qKDu7vmqRjKfMzEmSi4",
  "key8": "4xvdk1YccxpXRJRgB5CAtsRfqxnZ1KtsTM49i3Tgt7evdmMgRFmqFHaTnomcruc2R1psLzbzoQPixaMLeCHi74Hr",
  "key9": "4uYrkKgxj96Z9EfLzzUseT8gdgwrmGx4ZVPbhx7sqJ1Bavn7bDbcC2UJqmYrQiTHK7QCUyPeuQT6evfTT7nPqctm",
  "key10": "5bp94YA7AXJcaJ5pSvQK294d2v65JSjUyy84A7V6V1QpXQdAMC6az5jJ3B5QMjkpszREHFBmtLVyuDP2671845cP",
  "key11": "4YLxdsa5iEKW77vd8Zg5GiiKEFLfJaWmZEbZnbURQ3AfYsGJrRhFiRz9mALvJGcyPE5NsGkSQULp93orygNxV9F3",
  "key12": "4Y7GHgPLrYdG4cZoUJG7qLTEBeoMs34su3ZrfGfwqiZ4bFaeRj6nwnb3pe6LiuuHkc5F9Jw9DfRJzthcsEyUz5fi",
  "key13": "44tZzUJCtUisuoFCZu23fmrEajsNKT9PiqEHyNiZqA6iEkSQyooz8cCvtFueVExvzXhxawBEZ2E5PqdtbThJ5Kt9",
  "key14": "2yGQ7SGNFxfpsPnPvfc2TRQYwRgyW4tyFXKpobbMPEGx3dKBYyJ2vftHCjqwq7cjbnzX3Tfmvk9RfZoUMavFc26t",
  "key15": "zNnbZu2faCAmRmfJzxiAxzBtrLemsyAZQxmb8u64hNW1NkGhZPyhWidnLwwyzA7dQwscWmTK43WmFcqBqgq4dHM",
  "key16": "5DqNm7AnCcppSfaVb9DaSqUB79RBGHcfPFEoVjGNuCfmCA1D3qgcH3WSpXmmqtJcZMj953xP5mc5Ni39F4p1mcZT",
  "key17": "nEpU1UUbj2PVJm8qbSaFmdSaT89kwqFLS4TZLwyhYzR7Tje68q9CtcUGvwc8XR7mEKwDSa4AiL8vQCrdefByqiE",
  "key18": "4mt1g1GDHSxmpE25SutwCEEmvWbF9Uh7exjPySv3KozcnhH35c5FG5Y5Q4MpZfA1jp49L7fe1U54jNfwHy3CixVV",
  "key19": "3jmVovAfL1AEB9UsBxvfAhGdHNM8AUieCX4QYZb4TtF7rj7ANpAUU4tAaWYAHLqp7ajPSDtVbfz947nrTve93B5b",
  "key20": "zZby6re9x98qmmss733QSfhiheLPp1pir7MiPRDmF8nEiHNtJhrhi9DPsZ6cYzLd7c4Qd9zTR6D7bLixEBseUdR",
  "key21": "3TmUakn8o4i9hyVwKUD68u9kk678sA5d2kfTsGUzXnobUbk3jvokzz4dFivdCEFKWurRNZjrPFJjiYfGhNmXeAQW",
  "key22": "4HQB82AamNzKLdmkwAuo1FnYavDpjJoQ5bQhm3F5ANpP7VLtBs99dmetanxWCfztVaLJ2ezvnSrCn3G7aGEEHBF9",
  "key23": "63G4nRcpp3iqgCvHkWdqzxdSTLJNkg3DDjbfF9BJHgtWSpJZiNq5EYgAWcrfmuFAN53PmZepePuGjbjGD5QrkC7P",
  "key24": "5GGwE5mLSNtJSZ79EUCfrdnAjw6kcDQzD5rboQdXABZQtWk1rGRBuZSZUuanpGqoiL4uAvoAxBxbiKh7XF67fTQW",
  "key25": "2bgTQeRv7mGEf5r6CFwanE31fiCKCVYSSt1DaE3tuNfyrMxiVZQy4vpLG6KyWDHrHhZMRgf4wKa65XgTrWLXC14v"
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
