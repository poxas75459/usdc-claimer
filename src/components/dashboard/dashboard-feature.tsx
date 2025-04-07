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
    "mFfw3qhkGkcB2XZExKAJJ2ro1hAC5nsg1iJ1r1LcEbYrzkVYKwpBqzmn1LoQ2ggTfS7ATNwERffjnBqneWfs5os"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TyxoJxZrTBidQMfGy4gEU1js7Vbw3QywrvvXXzaF3s21ny7ceFCxF3hJaB5tdwC9rE59ZGCxULzGj1Ma9MQxEEw",
  "key1": "2HDFHqsasjJkTXDfNTSfcLqBEj3kPf8Xo7CWfTwNddHanAkfiwQ3Co8F2hgbDxNt4pagpmpyaAeh9pfMLxJWjgPF",
  "key2": "5C16GHKTx71zK4zem3cTciVkzW92pZm9ossPZof3n2d9bPB4k6pRtgsHzpLjErG27jewqsqNM53pYair8x2rcMaR",
  "key3": "1Uos7zHmqM7jv3xcu4UjNXTeXr6iNxcbGnVQaVvoz9FVdoCNdDzt2v4agc61uxv6qjuJUHvKvda48CgwJJjAHZd",
  "key4": "55jr4hHpJCRbemJ1PpdhsiFS1yYquAXf4pEge2Xphn69vViSRZQeK1hPqyzdHAaKikMqJNj4QEj7z7i67HtwBPaq",
  "key5": "3YZaq9gaaQ1nxHg3GAdtJRRmTyEnGyqhxcmm1SzWMUBi148dFsUkmoWgV9WGPZChcZdsUzuZ89843HRkn2oJBgYW",
  "key6": "kzQYZmest7uPwxzKsmjBrJozZnLxifMDDLUjGtyPZwVpG3Yjr4DjUjEUXAX67MuZhFQz58tkphjwJDmkoHiqAya",
  "key7": "f6eKiS6Nmd3w212f1EUDTUwghStNxvr9XAhUr6PRfR9aGHfW8rPB2yzzFujK24fB7dPbkxXFc27gKn3zA2EM1Av",
  "key8": "2UXwnwN7jyuKHaS75RuPP9B5dMRr4fbKU5VocC9TbNx8vS1Jk6aoNvH7DG3GJUuMt87xFUAodfB25dEK8irs5Fjg",
  "key9": "5WkHH16N2Vik6y3g4grXbvi5VcW21SMMu3bHaSjzQhxtjdyKq9sAFbHA5mzfgTT7d3uVSaScQhFPtG8FditowjBD",
  "key10": "pYudndvV3twwGxC7vD1C4ySYo2EWmaNicLCmowJ9VTBpHF9weJRWrs4XZasR6MgsV6Eh5o23FGPVNokEy5uQEEg",
  "key11": "5mYNYaxTjBiH6BmAdPg5NqHdZr8B5wdy2A4K5ccgS9VuCN3aXd6HAuid9rgHMMZKg8P1KEopvtkfBhDKNgo7Zdh3",
  "key12": "33KZcYXKTuXSq8ho16y7ergM8oZqgkPvzASxUJRtBut96QTEksxijjXYiftcvjWE9EoEwufvScYc3o4m3RwJt7GL",
  "key13": "5SPTM3vjDmEh8KTaGvAVgjWovS5orsop2g9jfhKhpzT1jWQyEmvkYwMD95bSbVrfVKhmxg2GeH1Kvp6k5X1kTu9i",
  "key14": "4woDnNGKMy7PVWhUN4Ldu2UbG76rxFbXGcPbUFgiEWgmNE8TM4fYfmHJacE99KyYh8riUG3y2krS58cBhtp4TbL5",
  "key15": "2HS1RUtX4GtYLYo4DY7qmoLgc3ZP62CWcQS9wKiYAHckUxTqnRkXa5hQUWcDx9GvsCrR6YsXSoJvYcjEr6Lw4hjb",
  "key16": "4j6nz2s1TqZToNDrCeqJWuwHEpjUYbnp5pBc3op8CDG4rfXEFoPGBRFsxFjFaeoBAtqK8jGtuCRYikPsz5K11zkn",
  "key17": "yAbQVk7EkqvVEizowGDGXSKe11mefFZQVu1huEWj31pjqyvKu2uz7ktAp7mKQhzVwEAMvHqFaBaV8PFwvUo8vAR",
  "key18": "46HqtivzCKLhxyqB9oWUtbbR6YNMNzg6MJW2cEf1aTCtCUDrASQ5E73BmQse8397MX1S79iBaidkruEN9TurE4nC",
  "key19": "416zZyygAMfYGST2KfuBLu4GSAxRiiBhvAyoS19St9EchXVVza7cnBt1ZCMe7YrBnCRrRXySogptKEsg4WKA91uP",
  "key20": "5Ds5KiS3HuzgvAutamoBZuypmTn14tTLQKcj3Cs6T4rXeyPWTtFCPp1DZAR8vCRWSNKBghXt6ABkP8SaU1Z6zUaN",
  "key21": "2jH5i1mn5NffHPBrn7eWXBZ8YbibN6pfVd2i4YMSnGDSHtHCXV4BQaYJKUMAxPo3mVVjncjaUTEneLNbWk3bYmJR",
  "key22": "3vNZs3MFNMsUjrrxfzPMEJqGe4897G3Ghbs6p5PhqzyTyd1saCt2YtteRBDPeBv7CEVSLC18jLAjtKLk5Quiaa6E",
  "key23": "28Hs2rq24M3Xpbp1qBtmCtFyFDpKQj3MaW728Dgs6A3tTW5h9jAHazMcgf25T9F5Mkbfe6kiZUGhdLGSziruRh17",
  "key24": "29PH56Ck65M9eHQhJSUMbwXaH8yNZ6FFnwhdkki1AoHr1A81mQXKMVezdHX3WqrERGD7Hka6LEn7Ae9EK5U8QE9c",
  "key25": "2xUdnoXaDebs7DjzYk9AQkp5yuYq4y5Nxd3HY8FftdyHK6y73nq94QybLeWKyR5PidvdAULEFUJnq2Q5iCTVVWeZ",
  "key26": "3EYL63rZ2FWEEiYjbnwndFuq35FUdyD5Bj8g6psyej3yoquYeaJaTNJiY7ZRBrY49ipuviiNnbZsrHN6s7BKvAom",
  "key27": "5xQfqViESf7djtWfj5Dm4tkVc6uJNUxFQCJrde1FVYU51Y17uLPknbYJSk5MxnwvURAWaEFYHVCeJftzhfdAHCb3",
  "key28": "2yc4cs9QMyFBBp4TowouMAGxT58jENDe6yPgEaYBZZRZKa3K9Rzwb5BQnqY9QQmcdojgDTdTckhYVACmoHQ1ndGy",
  "key29": "52VAMhrq6bL8fU49tD4sLYoZzCvFkrzDMCb142P5NPkQWq7bdB3QXFSrSNPsqcZVKi4sDjnRyMPkkpQqkaaN5hTe"
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
