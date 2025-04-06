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
    "2BXhFREEdXajtxtNvBqo2Gp8oDtUTeRxh4qoreKDWjJDZgzoPk5TB97kSP3ze2U3W79ab4T5ECtv2RA1inpXc9bn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ez3STjNvox6Jgwc65ZcyE6fGNMVrMejNgT9M3DqYJyKMfHuZmmEfVm99BD5aD5SriREU7fSXbiYePkJAA3znCd",
  "key1": "5Ah114tUZ41evihq2wYRVzjC8MVSXUJSqed71Q7zUP1dVAg6oQF5E6TwJRxYESRjfkMpjGFK9rTRT1vxEv1C6Lxb",
  "key2": "5tmw2DkY7pgNkfHwjuSa7sj8BZ7RyzeFn2FcAcPJu36zwJFVQVD5LesuUZvAs8HB24VjUU5r4kcyeDbP1FvnB8yA",
  "key3": "XDxH518MRBHLhArAe3UmyDAxKf1J66EfTW9FnX38TrDfyTgxZkjFxMmqFufUnZ7Y1R9tXENozNGc7HrjFzzizR3",
  "key4": "2STbfArXtgNLK37eWJQNNu68tY33T8CHUyTFqFDfB7L7DZg4QhZyiea2UmQxPxPfeViPsYGevWBPRch8rKUAxMYR",
  "key5": "2fqeu23Vec4cQ3VgBfzqtB8nhV82cDxQ1UfJZCHhz6zRDegR43hwwBPjifecmGNRccn7aTge66L5w3Xs5itXG5UQ",
  "key6": "3DLx5MXvaiCphi3rQBFe2ajsrNJ79hEkB28VVXH6Z2DGRGZxCaod7Hpm2Kw4j7RepvS9xgarn1FDjh1Q71eHHYsn",
  "key7": "3qM78aFDmdNqyiVKnCoMrA1H5cobGWT75cWnR2cRfzqjmfqzqpSmY2DSf71Dmp3N4PVzRrDKWgxy3fpwR6CG51r",
  "key8": "2FaFU33xo5aph8EnBhjg8sYWvujxS5Pa4TFCzsE9gwe4YQNZbH7akJwjmyTQZmcHfpVbroLgiZKDAdbqXKvEj6kv",
  "key9": "2jLFzmYvDWnV8PAF3zX1aEFKNMqH1EYuvSFKzKWC3AYBBd4jVJ234V89f9ARoHj9xrqsm3xgd7VNwPVgScYod9P4",
  "key10": "3QFqcdUnBQRbuHEqrh3TddJXHCD3FnMnDax2BJ6aZotrdStEkaFqGpo2oMDY3iEkHZHBsgJFLchfrvQaSGiqoFeh",
  "key11": "24m2NQXj9UuZ5cY2c3ttsayizgsjnYW6YmGjq8hJfff7FCam6HPrMo9kepWbbdymxA1UR9CsRhpAByQkNZx9NapY",
  "key12": "TweahfucNkrLWiPvnjfscoRB6vMjKMPGEaZpuHG5XnGpiLGtU1Bzea9SS7iW5kEJBRVg6VeM1VAfCY4rdUe1g78",
  "key13": "42GKzLAK3BU3hKhaF9CoUmWmmutJXQtbSgskBAfmWCnWCtUWXGdC8xuc2aXJa2BCReg4qLsLnFCk5cWjRbvDyN3C",
  "key14": "5AFjLQJCY8Hc1T2z7ASatsKc4upgZVfFY7vsZnv2zoZsjPtnWs2LZmKnB5W35cnF5iGiTwv7jbH77LaB5cQAFC8Z",
  "key15": "2JUJwPf5zEDu6AAeB4yf2xDCRuvuy3Zvn9AoefcePJaEcZnMgwh64wjFrqZo6cZoRxh1eM8DVtTMATYHRWHF9Xx5",
  "key16": "2S4U7mTawZko9tiiMfWgD9ZhA4dR9g8gYsBWjFdFG4qGxVf9pCQmSGD751AuMWhFUrrYAur9deyGcpqEYymQHZBw",
  "key17": "p6uak2EryagewaXcdwc6HoMh6NNyY5KSXiY6tBjkPu59RCpprcdUiHSxr8ega2a3V8rBFEQK9B5Cwv1werVsHrT",
  "key18": "gJ4ybXucYrgJoG4y3GiGA1xAfpzQ7TVbBxYVye89Rh7VQLz1X1EN5MhqQ7ARY2fNqtGAeh5jETUZtgzXg32nGvC",
  "key19": "4GzfP7FQ5Wvb6TAzDD2yFBH5ExzHiAvbKcKJxJZFjbWngNzU9Hk9k1cnUaFmbBc2tH6tDMYBLKaspDv1FtvWVHXS",
  "key20": "FaTJMpnVxHoUzh8uw19VQ4cJ4ic9xybZDvDDQbjtECPeHPzGb11FpaymMQHRAh8Mhzgu4TXZyYv6XgUH1o5ay9h",
  "key21": "3D8zSo4rwNk3unLVVnHE1nUELqsjKBnEQTe8neYGQG9WcsJA3zrpEvx4wNQvZHzgGs3mGqvyf2h9npvr94ronjTU",
  "key22": "3oWPCckEp5oDXMif7v8TS4hLNwo1nv84YvfpW75oTjjNNeTrpAPbXsX8crFx9fX53PFeEXjNQg2ULuGoPBiHNz2T",
  "key23": "3CfnkF1jUYnLkEq4PgbXWunKCa7QSA5peseoYxCvxyzK5HFhcCQdS9fJ6UzPC2QJ9ZBFDtK7a5j8LgtdPoCzrsAf",
  "key24": "47QHS5xoQyBXMA1XHm2agEFn9y5RXLu73i6M8W67kBWqGJ14xvs5oc57ANfxihwvPShbeXsA2SY7LDyWaZEuExyJ",
  "key25": "4EzUoZUaqSii2CSUDtLmbjcbQwkcDEtLnmjBmP1xgTs1ZfhgALucGXfDv7wDXuNQjFXEUBQeYnTpmVYR1UT5PpEh",
  "key26": "2hGbKCvZZCZKMZpto8eaKpWVWfPYSrnEQJnhe1iKHpGVgcMhQQLyWX99ppuGhrwKus1Y8vo377Yryf9k3oWrzdLr",
  "key27": "3MnW17HwtChTavgzgRTU11fTyRGwm6weriXmVDvoqNbeLXyU2EPeUNTS5BP8WNBxLiZiwhufPXPihZRY16HLWcT9",
  "key28": "qJuvYpVQosSUGhSrpccxjvRVsGgjvnmsaYxUb2hHL1ekUnT3vMqmQYzMcNEx5ZVFL8t4V29Sf2zdh4E6BhMDpjk",
  "key29": "SNu2oUnuxicDzMNf26LKjEzDBxiHt4w8Md7MXkt2HVV4dcsVRrYwzZn9AagbQwcWQPXZYx7jBEDnMLW6g9u17PK",
  "key30": "4CRMYWfbvUJJxKUrTcecoAmjswGsUgKX7PoioNWxi7sWP9yPj2ozvGqyuiwgxazaFU3XXJYCGzCEP2vXHqGkYgpV",
  "key31": "3Q5adqs14Nq8BoxNBK7Gkru83ecHt7KVDGZsTfmCnsnqiiuuSWb5XkVX9fjF7HgEFQRRA7BjWTgjv6X6YMJ2Lfoz"
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
