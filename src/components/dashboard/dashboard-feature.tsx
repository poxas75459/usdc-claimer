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
    "5R3bqfoLS5QRc28gqNmxJ1zfnr1SWssHKeAZweQCDCok3xE7btVLGKvJhEuiYT4wMbZqvjDCuBbEeECEa5H1VR7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CAxqp8UeKk1B4LtbkeUUJvETDXWT76CrY1CfF3TheamvPL6hamEEwsQ8WzLbMp8XwuNfjttJrXHjiLMANhPjEb6",
  "key1": "Mcq19brshYMEQBZ2U7Bbg14iUo5A8v786rMwbHBC2Ehn8jhYVDdvfRNJLsEWHQhnu9PqN6TnUUR8437wajzbM8h",
  "key2": "5jajtxYfVCPSBqLL6uvvrVfWLEb9QFCsFG2FQLNhs5ZdYS7ob4pZtDgrkbWHHqppLLHVuVofiFYynM63xpVur491",
  "key3": "6ptZV5btx3UoAdtXwjTa4RZ17YjpPPGULQS3qB5Bws6PSf8nWfXgCrX2AByMicsUXaBPj6eSQerB2C4PwTN1Zby",
  "key4": "CBkEuxbZSSkqcdKNjWRMiFSrFUa88sKw1ab8L2gLrjbF4gV5B2v5gTHJNHnD3b8RyW9yBpRxMSpyfx9Nw6kWEEd",
  "key5": "4dBCHMRFmVoFkDZ2kQCA1UDmJnygG5BL5Z6AjRpUwNwB5BJRMQzGXKs8wPnQTQJfo8ihQojw6ZSF835oBQ23TjEm",
  "key6": "2hfMNmbXYeFUSWhwdbfeAsv9kvt1MVByBASWXheXX8LUpahQyKMGBRfviMgWD9QsjtKvqE9BzgKfaLFZzLrsrtzC",
  "key7": "559wFaQrGLnkLnn9Fj6ugDezh7uqkmZvNZKNB7qAGFPYKoKs4fAoeAJwXEi2TzD5oUmjnQoAzYEYCBMzkmuvSDyK",
  "key8": "4XCjZM9WcE55Bq65FSXpkPbbwkJSQKYr4VqAHesgce6a36TQ4yutQ4RMdXYLChZz8WrxzVjSoYSp9WSENrGcZdtw",
  "key9": "4Ha7cahnEHgs7QufNzGzKhniuXNKAJFYbEzD1nNW5WDED8keadjAxS44xdg2TYHgqjkMBJbaYUqLxmQS9rnp5r7c",
  "key10": "4uWdT2UHgPrVXQjTNxZc5aFSBWzsfAHgQBUV5jP5yFHPkXK23Hg1Bf8Tm9zGMBSRVMEH5wjpKp9QdbxN5uKe46ap",
  "key11": "5iqiYqJh3riTZJrpwMUYma8sdvRQCvLGdWKenRkeMMFDpciCaf2yn3aaWprNQj8Yx9QRgB8YezXRqvwrZpp7nor6",
  "key12": "2JnZeYRCCZfSQY7fA5qsHYzZrfvvosg18dbwJhVzxuq48iauByQjGtsaMjT7ZpjTNUEhHBZ1rRt14Pz2Nv9YoeWQ",
  "key13": "41EPaW2pRqJXzbo4671KeDty1DzNUQm1UQLB3ijBkjem7HXw1jujR7CwqsAMTjwaA9oVfk2VWtfaDtcV26tBJDjo",
  "key14": "4bMR3HrbmUnm9v1f37DRnJi7EHFwytVL7DbEC2c5xDScaW84pV1QvfMEbVkk37puMoxLTgNsz2d2GSNsGoWMoiRZ",
  "key15": "u2UPE4Q45JrF9GdcH6MzuJYRB3qDNARm6YSgzRg1oi1kmJnkYz5qfEFmvpPCR55aqseD8FXsCDXfikkoB3KxQ9E",
  "key16": "dfdLZM3X81CEtxU184jVjJ1bTxp5R3yJMQgdXdwA92usj1sUMeprJheagvGkBsLDL5CPKEnWRAHXdHRiHJhi6x5",
  "key17": "3KX3gCwEYZrwYLzWvzLfeMLweEWTZtKQKfQfFaoBXyZSVu594awiXNnB2Up7Cb5bqfMwRkGTmYZWw8Yz4qQM492Q",
  "key18": "q5WEwS6eyPmfpqfodNU7g3wt24xG4To9DqbHueASvA9D4itwh9WvHLuyXqyomGiNrsGjRNNSbfsP3ssBzv52a7F",
  "key19": "5rv6CzsRpJYeXWUyGUBEbjmT42dbgVxBkMjJZZxhbVqqrmvbjkpgTYBAEzhTPpa7kfrbgfTpAJssvpYy2C4qs3pG",
  "key20": "3hcK9z63eDaK7hpnrHQ1oAxqyu4vsuTsqqMGuFqfq1iLTyrcNbFdYPwAhdfotCyLij6JmtnSqNnuUKWWaEtfboUW",
  "key21": "5vTYv2uuMGtitxfCWwPVZziXm7VWRpxM9uCRN56z8kZfaBM3NJR5XMwLoQfJzp7ZaNyM6ohYJE11tqooKwoFxVi3",
  "key22": "4oAi3BMjq3fnoPNZJJ8M2rhDnsq3bZUKsF43v1sYpC6ZqmKZaoQzKTVFSi2ze1bk2QfYRi5qq5nz6uqRC61KSEmM",
  "key23": "4QcFiWKjpe7E2F1v7h3SJH6Di6nMdoaFDmcvYFLTQmVqqCfDFZxkcz7SUbzG2ES5PBkArPG3TG2Sbyrmss2XNbps",
  "key24": "2xw6bJbVAFPb3fmX5w85Q5YufX1KXxH1LB8co6pZJeBjRXff9TywTbN9WGVjoX1Edr2mkVn4TXqTu6ZZiL8o1LEf",
  "key25": "41Ue9whAr8i7cAaWk2wywRUGW1iXPmYBDrpLqQqajCHutpty19AJ7Z5SepCSH3Z6SavJnmj2tnR6yA5b86HxiZF5",
  "key26": "3zbMse1HUcUnY8WyiTMncP91MRmN19VGmv6nSRre6yuiymnve4pYPCWhxRjorxTuDowu5b5eSLUgvZ6Yfyjfsi61",
  "key27": "3skqCDkxmvREWgBujqQRLAHwk41FVBDpz8km1zBiYtU7BC7RufWBtnHVbCJsXBDR3sD3x97rfBaeBHv96Rxxr4xV",
  "key28": "4rXs7tRDhqRbZjGNqe4JFKDWRGbfipZncZbkWF9bx6E3z7VCsTfMdCmR2eafJeFiJoJrVeKfgnJW7XXNWZ4ZX5SB",
  "key29": "5D1VJWLfNBrmYe49KnAy48VmdQ546BWQ76SuMrasLQvSpwB1nUQKPcvWM6sykBBnWLChTohh83HuJk24kE3ABZfH",
  "key30": "3PCkQuk1ReejGQg1zhUi9CTbwEHM6VRMKvKi17qdq94dmVCWuT9AJe9gGsEDBkkBAehWt1Rqq1ce4YzRUtA4RaqL",
  "key31": "iHgcyWeE2hs6aUHFNFbwkVRGukarRris3vpoYMuAUGL9PHHx7EEPhd7Eh591grZ4Czn2Nf2RpuE11gCugU9Ah5H",
  "key32": "46bgbxBs9vQNTbJmk89aBcr55guLNfMEBPUMvfnFe8gyedtN1wK6va6JntbcF9wHkstwNV5RKDxM4CoexPAtEVz1",
  "key33": "3nyYgzTvriwPMdXeoyrmqnT4MmdPfRsqH7wKpvZwad7P8bUfFS4uZJSvkyUdXkE9QRZSQPtSbGWdjHqtjpepUkFX"
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
