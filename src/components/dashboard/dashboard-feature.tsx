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
    "2YGkLcYaUKuhvRU7aawgiaodjSPK3FfDQGfngpM9N9WpkkoGiS8tj5Zycr35sgsgZkyZ43YQHu9nA3QjVBAyFvqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uh9zaRSoVhpZsnjNwqqmXdVqZLPAUDaWpZAXD3TUymUVV6jACdDpQCYe2DNK9ZdBqec2S4oeCqkHw1gvS4cuFxC",
  "key1": "2i6UBKqMCe3LZ83xDnSrKueaVhQKCZtMkBnm4fFb3BVJgusDP7PwSE3ZaNYPWH7KqWpY4WPdsQMgkd1UdHDuhHB5",
  "key2": "r2bJkGNd4zPbi4NpdybffrFRRxEUz7WY1s7KfJVTvskndiRsdrUHTMAqsJR6SbZoX4wi1pmvYLbahF2NkavSzbp",
  "key3": "4YmF7WDYc6QXUF7o1MwHt8tjKarNw7F5M6eNy6tUnr8ZYV6YMv2dpuUF4vsgPsXxbye2WFxZjQX59MF6wvUXYrZz",
  "key4": "4exHecnAjhCBijySJg2gZJMn5gMGPTbxNs8KTMSYv66vmSw4GXykH9ZBUduVnyeKctkq777mMbvyHw659MfCF5F4",
  "key5": "3dD1BmeMVfb5bmMRuXrZtNc6hahdbxPzzbHBLQTcxDRDAtzJnXyHhTx4GpxZ5QeCTozCRGo7ynCkwmV5hC9qWSAF",
  "key6": "5ZDmqPswKwBuDCWqL1ttp1bK9MWKgU7gv4yMFv1kfgnfG5xk5MXS93YPyAxB3NdyvTc9JMeW35KiCdzKYwB2J1Vj",
  "key7": "2woqpRjFLPhiAU2hghDCPmVTadaeUvunnuWvniKuwM3cZYKYrnf2j92oWiyQoqQu1saCKUR6b7fbRZvJzRn8u1mH",
  "key8": "3YNTg23QTURZVMfb7NTRFauJLE6x9Xcr65nzgsJdyWE7J3AMWvef8C9Yxgp7NSAXguv6AJcTA3fGqdizjMWqZGiJ",
  "key9": "5YhFircztBWrNZvGMNRXxc9ZFX5yGmXpbNURhbzU5mdESdJLdL6HiQHirad22R1vqfDktxNNq6sKWVcYmRuKuuNP",
  "key10": "5KHaKcUgpm6U9nK1LSSMp7qQgJmxME9aE7Cu3EW3qtSEwsp1pAe8qapwH4dcf2YCxMuefoSty2ScVMbjcSg5b5Mt",
  "key11": "4mtJrWkV6qsC4sPi3scueYCUf5GBeqCYT3SxEbXmhQ2LjEXkj6zuuP3sVuZQqbfoJ7u7tVLWX7HuUS6nH5gAmErp",
  "key12": "2n7SpVzsz1efSZKBSBVx38nywD4zaG7B9V8RjogkUjgKz31u3XSkkGJNSUe4FW556z2AGG7skGafyPqWeuh3teDn",
  "key13": "6tnpksWd9ydWE7jHxESced8aMitWQB3DGwyw3csMDb48UdKa2WKx3EWsAZYnwkPEj8nXnZjeRvW1kUwhZnNxPyc",
  "key14": "YVfv2hkhCMpXS1SXkCxR1AFWK82wyazs3VAA9ZF12aYo4n3jGBLAy1HrJhWmx6toLZNq2KbeAvzwBBMTAxcZBqD",
  "key15": "4P6nAuacBbU8Tc4LCgVYeGnZbDSbxfLKcoZ5iiPXiKhkBqmDUvkrJYK4RJAP5ZxitagExbL2eatwPvWuBh9V1nXZ",
  "key16": "5CtoBgPAM3ByRr3eZFKCUaoBqz9525MoRr8gTDtBXycX7Rfmo1gqmVqVdu9TuN6BS165vsnmgjeFHrNo1hxa4SrD",
  "key17": "4pfQH6FiPBbAHVAAt8zgoAfsAQgiTD1kCg1cHFmmwycjgD3dszMfseXQdSxPfpBaoe2c5EZkZgJmFA3WEEGLXd3a",
  "key18": "3dUBpcndrZPGZnHuyqJKFaFqo3LaAp2DoDdN2vXVgjrZfxkzWbz3ZjS3v91MoeGmrFT8qVbj7QKrfPXYbkqZ8iQS",
  "key19": "3ufPiSHdwBnyKqC5sim7c9t4CYCDiCwtiRMRiH9PiS5JED8cW8Xw4Ms8X3MPoVa4HRoFjzDr4yeTY8QXinA3ztGk",
  "key20": "5BuCNmbepBd4Dmhoz4tSb7qaGhefzwoPdox2C6DfptHF4QLQPauUNXxVZKZaQP2vDzaBai1gK2qGbGAxiga9TszX",
  "key21": "5DhJHkrVpCp63EhSNuvC6Yu7cdCstsv1AxL57KsqQ4FJWZJbpqHJQgaP6KhhX18jRyAiiZg14e6RP9PnKQkPxNSX",
  "key22": "e3QmVXxnDqE3cAq7q9Z4przSibYU9PacPuxmSfdGaVGKRdTrqWfcdfeP6vdaM89jNtJA2Jvd7yyqhRZg32Q7hUc",
  "key23": "2D4avaZmnaMwVdFmS1k1X3iAXT5xUu7vdedFttCfaieE5pV6DyGv3fxKaFFPAu3vMxsVWzxBg3zUevEwArwdwGdf",
  "key24": "3ucvEFpTPwEwAQ1QhX2BcVKR3hqfUhNjUypNeepsSarmQLgxba9pnZ8PJvgVWGP9fyAW6T8ezyv68xp75jAJEW7o",
  "key25": "3zeCcCgJWfW8SpvcpStMDAckdA2TgYwxiEXxbJ36j3sKLnRXwxKdsRp9G6PbxkP9Wri9yWx9gnyab2dHvjhxhDPo",
  "key26": "56kkd2v3Mq5yuUeTji54rpf9PnQNMrDtQAbpcT782qGg7YAZdBtnHoLKzkJ8V7JFDUCnYdmDMALYVyWN9LtUUGra",
  "key27": "nD8VKfDbCWVFK2ReDRqBhQD2ZZhfeK6LeLUa3VwxRnh6LBguRdt4U7xJcVYdsYcyZiuLQSBjiDRRLZVw6xiJx3W",
  "key28": "B9iPn4vsjd3fk9SuaGzUJEhoeoywS9Ryk3UK1mmhur9hU5ZnoPXMCSQVQRMRA5KouhEdiJEWidPzP6HbYNN2bGx",
  "key29": "3JzVnrza4Wq92sFULqhYzL4e1rY8B3kXy1EXpQPbGWwcGAfPPQPWH1C38LC1qDakv1cEtCn2V514ctqaeTDbPjXg",
  "key30": "kEDpEMZmy4dHRZo8A4ZXLdn7o8PGWzs5jQ3mi8WogXQRoMnZBZb7Bgb87zEKFQUNwHGU9aVAQvFicbosGYmKw1J",
  "key31": "23txV4Cnp7q5WdgUCe5PoBmTJxN6YPdWTpyfacMjedgeeM3ziMzTb4fkrTspnTWNnwRXbhxqwKB6FKR1rmBRMNw7",
  "key32": "3f5tmWQcBuUfCVVJTUwKu9Yoq2nhqCaEk5GyHc9S4cw4atvy6WV8LBdKy7wYSzjVFyDmqW61dAr39Pi1vyuVkgQ",
  "key33": "2144WaGVvJK3isKXtm4fUn6mtKmWjzhAGbWqUCviKmjPJBDfQQtAUwdb9ywrgosq8Bf2ocR6d7YygSMdRLJXV3se",
  "key34": "3Wzsdi7sYsoXQycQZtrkMryieGhs812QBxUWvqUwYMkp1AYx1sT1sX1NJrEQnR5tAv1B8nkh9yqA5G6w2UUPXR2q",
  "key35": "36wTWCMaMw9YcfVT3eg2xVuHfrNHxVQEMexR3STxDbp3JrojRmmoogAznL36iBeXRGgBy92CUy1nKxssQZb5Ta6E",
  "key36": "3oLedhQ3KRah6xoWTNJ11va8cspeqHyrgu4jS9Pvvhtxu3siyYRXHKUrQ3vzhqU95S3kwV1nC7781sg9PcwNEsDQ"
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
