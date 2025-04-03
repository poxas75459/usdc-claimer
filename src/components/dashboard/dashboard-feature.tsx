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
    "4NRFYGge2z9mFavXMWco8MLi4mETDjfHF3ozKxxear1E5cGPu5Y8KVG7Rf6eqKcAdaA7UWDrN9kQ1qgzEqa7ihR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jRV2Yqhv8nV13QGZ46qhdDeAc8zPa7b7xRNRdf9gBffGLjyhYTPUnq6BeCnSFV8EdaAJB2JYhLyC8nULpWxvNFn",
  "key1": "so5VjgkerQdpd8CBwFWR5w5KKd28xoD91ZraM4LaF8XvNMWXcJ7UNxFZEv13YRGyQdAQ9k4wMxBMfweSkzdgK9s",
  "key2": "42tcLF98MFfK65oXf27T5vBzBjM9neyJ6jku6dajkLEqR3R3Lg8p9ezb4pFkTFSAjixV4AeqXYyz5UVoPsNuknH5",
  "key3": "5wP5JdiwttoJVLVEeABPQGCaVyJrHPW76jWEhzgziVnj3WnrYiQiaPP7BT9dbJhp68mEymfb2x7CC2tbvFJFZ8NT",
  "key4": "FP1VAZW7cnxTuYFKQzT8C9VYRySDLJPv21NZgPCpQ4hk4efLb5PMETFwodbntRiU3Qr9piASM9WQ1jDb8PtSeEw",
  "key5": "cEcAnTVguegTDCiPr61yUT6RgF3vfGEDr4ZVjqLdzYY7ckatoq68QMkUoPRPdnvTjS6tPSbANAyssFQVeCJRiWH",
  "key6": "2kqsTZ4UHyu4oo2xb9r7kmcmTiBpcLD7yTYMewiUVF8TtTmFwGfPDbHsHdZPDsnScXtCpoRvUCnaV1Kx8FTjcRg8",
  "key7": "3MFCE4123Fp3RByeu5rt1fTV4LpDHJSD9nsYPZJpWkYqYFUtNfYwk5ofGBKKnUeTX8S9e7rrFKnDDBpXTF8ZGjjT",
  "key8": "3rLsT7uEcYsZ9aW53CNPebNLMyw8KhVn52wpHJbXXpqZjyq9S3TrNh7QAoQXMmnPD2MGPvrijjpX3ubUAK1kbY87",
  "key9": "2tr9VMSxTNj6eB767ejKX1JB6H44hxxirxbNufrMeuHKPA9Z2aTvdY7pFS2oosTQAJHgchWeTq5qJhuF41ach9Kf",
  "key10": "z4ngCEsn4U3S6ZxS5J5yCwHF2f4oQw3vgM5JVwtKCzyx8z4kwYDGjcomCfeZP1q6eUAJAqJ7e93QQvezQHorgDf",
  "key11": "3Wev7F3cyTbZxuZMfkxRA6PNs98ZcDLLmZveQg1WDwejDfHbdKNCqdqB4QDKt8TMSiZP34PgUHvarN7YgtjaGpUr",
  "key12": "3FukHSarYbMyngoQzGsVn4iicLBLwqgMpAmNg3jenghfCufsVuw5tpgVxQM2A2CVTYRdW9qRq28iAcD7yEEJE19Q",
  "key13": "5LyjY6WF8SRJ8pFZ9XqFEVdb5tbNu4AmkN7JmvUrxHy367GALobRieNbuREiSJznL6FgwWyeD33NM2YU7JFdGGVS",
  "key14": "5kLzqCFRJELjcfSBvdt48xPXNPBou7DLYeiXMfsGFs2EjyXdQi8Ycj7Q7irmZGidsNiDW8HiNCRRF7gfoaDKTLgL",
  "key15": "54fU15nRQYiNpSzp84vVm15oKMRrQt6LabajEBdfeSHw469Q7Tpsp7zvs7YGraav1As41nVzxsvqTxr64dSTyf96",
  "key16": "2JfhZf3CttSGhD6pqZ4ezSBJXuS8WQXdkFonS6RgAxUhRyN3jXNJKAisCjZ71QGQz7g1vpPefW24GL24gJxzRC2Z",
  "key17": "3S3KZpodMDzCeTmqcU9o1e3YUR1hyodiP1v6HM25zAkLw89sURxqfLpEEVLF1x9kfUwznDeNnCGxRgJGmdwECxk3",
  "key18": "2RnA2Fgn1UUTnJjq5rxgJkA4u1pEkmxAWUdxKN5FwLWYpWF91cM8ZJeLA7arNL8YwhjtCJAg6eeFmevaohgXWzTV",
  "key19": "RNMhFCEzTufAL5Gp8kp9eXzrWLdW59F2anutbGnv7vkkYMc8xMmNv94yAEkSanHQCqxrXFaXUTxZcbP842XTC9F",
  "key20": "3CRCcc6yHUYtD9parg3YSyXPS89iwfxD867LWYhsgXBsC3TgWjm4XFsiVYnG6VxcvpcyePgdRz7PinjSbhQdayCt",
  "key21": "4fJhXqEvEyE4GP2WToS1ZPBesENHrwQiDzEa4agGvbdNFzFRBqjaXEMoML7fNaaQ9aSuMFWgedFth1txcFJzUXQP",
  "key22": "wumrJ2jUVVgJrzFDKRCRaF6XsvTwq8MufDSehAKwGo49erc3fkFopNc8CmLd3QkQkbH1pL7tQEJcTWPDTFegBpT",
  "key23": "4EpwrXBpURfinf6RXwtYHoAS4qLb9TBUSh6uRtDnq4qjEJMvH7HKM8ZvdQ74sZvS6BNwLmBz5SxViPLBdkfoccdW",
  "key24": "3APD5yomF4wkttgkZHdKZJ2EAjpsvp8cZdRep8YSi2dtTr1aUEd9aDj79SPcCTn9jC2xZ71VDjnryaEPyge7JZ8q",
  "key25": "4vpR3VdcuPSpszGH6RrnA7t9LHoJJ8hAwA5Sqq6WhQtsGJVhjqaEG1KS4pcfrkFrAHLZcufqzdrCY13V4aGaiW14",
  "key26": "27rMfZTztA9v62AGapkkfxxBnU9YGtKQWFFQyKi4amVAoP1fcJAzEjVyaEjTNXTLQQScuGmFsa4dY1WcZhhjwNC6"
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
