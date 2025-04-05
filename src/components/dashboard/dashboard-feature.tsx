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
    "2aKrh56Fexi6KyKr9YbMaQMyHxRQVXxgnc7LqbZ8TQkuaxdkgN1vkkMuH9rV3n659GfivR78dLPDzTkDyJumA326"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MT91sZrkykML1EhG7Co8BZ3xTvGan1jdC3gRa8vDGvchDrAbQGzTqzniJfLA3x3kSgZVraf4na77qHUQ8WAfosL",
  "key1": "3P5XHeAERL9ADsEkECA8unwq9e8TGWNRKaWese6EYoXhrimMCZmPgHimFX3boZTQUaqzAE6jt5ogvSbS8mPU41Zo",
  "key2": "2jeTgEEMHp9mCVveQFBxP9dcY8S2J1E2mAbK3aCpuwQkNxvro61HHaNvnwjfG3RMuCkWr1GJPBcYy8jA8ZyQat83",
  "key3": "4EKXDxc4Euq5umrMK5jVJz2prwVscJ9Krb79zWhLzcWT6obQ3Z1yWusCjLVRbS5RuwQowNemmyq8hrL7Qrmp1SMQ",
  "key4": "FtJEq9PvRqvUPehBV4GPGGxqf8ha8RcuVrXDnNSUtFajcXUh9gGcbrdi5Bm6sak5PbZV4VDDHhpRwoM9a9jBd4t",
  "key5": "2DsXrVWGHZPN8wGNRX5i7dGAR9vGEy7DMb5MLuDE4Vj2cXcgG97whwjHd4LkLbpDi8FV4RvnQi3ZHwF7Uqk4VLbN",
  "key6": "3o43bRDYpi4H6mcqz4oWVGZwWTgmzbquJsPTr7YB1ZRcz8ZVR9c5zoBecAQk9r7wUdVigXnpJKv6UsHEpGjsi4L1",
  "key7": "KEvQ8wZ9EQMBvhZqJm7BLtbnCLLHcbga2D7WYYcaQyYxA7byzYBc1g3zdRhHSiHpaiJJAmmgwsLjsYJqQZxZWr1",
  "key8": "m4sJVD3Sp2raPkKcriKwdwTMY5fXxxDqT5w2bNMaUA92B9QLso4E6wSJzCKh7pbMAaFofxx3BHwHH2GuiBUJgSN",
  "key9": "2YqwNusG3MZWnFK22T52BDRqxfLYBdmhs1eCs7VS8hdzztSBNyHknWXgayNdr9xgYpcqkw21qojnx8A2nBaZnwxu",
  "key10": "5QPTSN2QN6rYgumcsw6JAt4Z6bVZ1tw2NPe8rThPGLrvaM2Q4XSDDoCLZNggn7QSLftE9wXYEytkvATMNF49rVvE",
  "key11": "34LTAjCbWQeae9ZZt1kzrTg5NczwGjuXKrAb1BeE6Uc9hPTBk97pqTNzyU68qcUu7iuTLV3C7rmKjbaLdfShsSt4",
  "key12": "JeRh9kkvErJHiFbh1dL6GTHVBuGZZytgtZzciUZrpx4x7VcoXMFsFURdxDYs6RNNaChmjZkE3wq4oFpp78v8vvL",
  "key13": "3Qn3nD2hcofNukzPeDYbQsAqfAFChjgVKVbxpfYP6gUkwywhxxAwnf44AvKMUnCS7SpUzmxNF1TLTZFWpUKxtcw4",
  "key14": "464CvdDDtw7AdLqGRjc6m7DNf2nX7dCMZ6xi1PG4kf13wQuC7ZC1AuxsrRzasba6FoSiGepRDdMJcvDP6td5haPn",
  "key15": "cYXayngr7zEob955agcqaTx5P8ycdF1CcfbFaEk2yrMwKXkvQ2w2Eunyrn7vjKhie8ttfn275u8fsEvXAkGXeBw",
  "key16": "rHHwj3c4VcEi54y4hSyXZqmfnrsFoZPDTYuQPCBqXgSeJ6dTzCns97BW7UbLBtYM7vcp485D6zJffQyyFCkFDzU",
  "key17": "3ktMhXZuKFgjLwKPCkG1JbKNMTZwBS8TEzqjpC3mqLMoKcX73tBPeMuF9z3cndpmHypEdS7grzgpqVrtXnxLKrHm",
  "key18": "2xrewd73WJNZiefdDvi1F6LnoTQ8yP7woXJPwvfx9DqTUuZ6XEZLRmNtqt1v3L2QgVREbpTqC1puzABbK4RaCBdq",
  "key19": "2gzLfxT2ty7Gwxus6RhE1w6HK797JBwWRxarCEFkExnXGVtwrfVTZqx5gJ4mtNZvGhdVWXSb43LqXfAiKnfAfEDL",
  "key20": "3kegJM6543BSDYQQcoaTeEpMr9ch3Kz1cujb36ufs32QYJf5KhjMX6csmhiiRWfttysbdjw154WjLg4EKtbg8VfW",
  "key21": "3qefChGpYyMT2Wp5gUAKZSmUc8a8MgAJ8gzLJjuQ6HvkLMR3Z5ttjhmWDsjnZmGD5vZvxCx5Hwo2J7LyvWE5E1KN",
  "key22": "L5km92CPZ9ZzAb8GT8zNX7Fk6BZtL7BYhqSzYYubBV2nhBn5pKoNBTM4DohDpbc3Yk9yyDF3YstJqUuisKUtqYn",
  "key23": "5x1CTSo18MjL3tETu69HYRCnMy4apV24CwqzhJrrnWWc1LpMsq2Cg8ux5VNDdbnC44hjYnsLDUfC3ETtLq1VvMET",
  "key24": "4KuwZCC5fGGv2YLohrWBo8ehCfgh8wUeY8PMq6KMUvMhBn8yqoNU2EYu9vvPmdfMDRWckJSeEqz7dygB2GnafGf5",
  "key25": "4WcjAoTGbRQVDdu4vPt8BcdSeTa177jA4KkXDmtPHDtHuZSN5XwSKVyR6J1QA3EvrqvJNgz9fohKZfVhwfvYDgPC",
  "key26": "2CVBd5ov88aLe2mjHSzT769HD3VcNstdMBMTPLuemqxGwHViDoZdZgHPX2WVApdvskZPokPsPbeDdsfzgk1FWv8g",
  "key27": "6wa3DvWqsB7G9t27hM8LTrHEUvKySUcaGnHxnAjyBZXV8x4kJiAewH4BeFYZo21HMMEKmSioU7a1v5yQmAptkuj",
  "key28": "4zJa2k1ErjdfEoxDyzTggKKiLLncQJtx2Q6B4by8W5yQTNcZJvBexMwyCECqGNLfEvnAZxV1W2VQ4Bm2DAW24LN3",
  "key29": "2o1zvZhfqeyq6QyDNu4r1zDVtX87ZHbZvMscAcJQwyAtJzBn9GzbC5yVtoyx1wYwwBPTWkKSzJuERiDJnuDXksPk",
  "key30": "3WxG7MDu9mtzfetm9suYYFVaykTFrDoL4awUA9E1ib14XThzfrMwqj113Pd7G8u3QQqBA6TMLKCcC7J5WwvTb6y1"
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
