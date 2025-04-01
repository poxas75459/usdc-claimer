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
    "3gNqmfs1TMY8ojNQd9qXH8JMPknDqUPTHc8D5QYwXHyoaQMVAeDsCxA2h9ha6XbjyskR7Ke743Do3PobCskkFxQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uhbGkXEz6JhTfacShRf9fVUtpFsbQDATnFQhvgZjqdSZXCJk78XvrzN5uyd4zAwDJPvWnduCxx9bGwKvJmig49C",
  "key1": "2a3XUT3qrLJmo5tQZFjY5RjgRE7TgpU7hhnBboFrwSVuEqLHWP3JA1jaK8j2DTVrpcT3ab1ejvHd8YRXkV2m1bkG",
  "key2": "4soHtddFqYHEmwNq7WHyouDXE1iaSrFghPesTXKUyYeJjRSFL3kh3tpZDhxdXkZi1Cf44RGyLuf7tQidLc4jTgF9",
  "key3": "4qaLksbtGjviuzV7KHX5JMythWRoipbXxz4GSuQbY6XZYTbiovQRYtA6w1tmuUGZAGukSfFrapGWcm9cmfmYXYzG",
  "key4": "4LAcLawG25BwRFrcEzh5aSBSXggQMckNvSTnxqTcWg23tk3KNcVNCWac3rPt9EQdRYhrrEsJXdekb5rx8GxMytUw",
  "key5": "JAurWaHcgTTrzeiD1HjGuzPXGWQkb8vt9tqiWft8zPwzdg8yqjb8XEXLmSpMvVKH1fd92NVaaprnQRJLkKShfXk",
  "key6": "Q4bfWCNtWN3a1cnz3jotgbXEo9BqyrATcFsNQCcbGci8G6gRVHSsDnowd5G6tMYdcFfwy5WBURRxHNM36pEXqYY",
  "key7": "GmBCNRiMweTGrWdf5ssgudBMkeN9pG4HHYSW9Uk86mNYxBUt3H3FwJ8L1RudzojYHEPKkKGYFesua27kQsPe3tZ",
  "key8": "3vbG1H53dw1YP85oXeRDd162gTdmzVj45TLKGn9ZvEYPs1puqgvvwqxYdR5QHGwZdtSmkXCqkveEdS9KUg1pNCtu",
  "key9": "3SsjWATGD4fsveRVPNJXgArztF9r16zhijtz1S5KJymrrFkFzQW742W2ysdYbmfHmneLcgmbURJaHGDj4BTDFTEc",
  "key10": "fEgtvR4N7F3heM2WvcTSQZDzvrA1MCB7hsXpwzRkHsGWnmZ5BFb7mVTq8TbgTnJqYtosyBJg1xTndfTMbnCsjUo",
  "key11": "4yfJscPBwB4n76NEjyEHi9w7kP9oPebt1UzsyAEWUndBoDJgMqVLfQhGh7y7t6qzvVs5vcsTgP2mPv37dhVowUdU",
  "key12": "5QXGrSjZACrSsth1KGEj8NntPLs5wX3r7jraTCKoGRBA4yPSEybj5H6CHX7BnVddRERwvLtf3B9TxyKDR556vMeF",
  "key13": "YzFry1KkC2x3Ug1LA2N7SarERK9rfQQuHG1DV4He7TcJdcwpBYnZcjPhTegHDaArTNNKXbEC2dUqFXs5q8hZdYm",
  "key14": "5s8sNEdkugabbrG8vyrGPAar8Zjxut7CnVN8MJdHKQSBbU8dinY3p5PNAZfa9mMEZ2YKTBX54dZ7M4SVqXu4RrD9",
  "key15": "633bdM8VyjnuTynUSoo3oyVdK2ueRCPpgVexTw4osAcyS8S4BHqsvrW1KXmjasZ4DHcs5V7QNoNC9Pm6BrUKSEMn",
  "key16": "4dArJ439fP6BQv7UTSGRSf3YnDZbPVQkPbbNgiWc127oZDKVUfWqjzd28f41GzKGyMbNJyrjdVAiRXuMtmC9hxLH",
  "key17": "EogR4TY4FpUhY7zRZ7YuWqUK3uRdHs6D4eqMJVvTU2mdBnTQvcipAU34VCFHpUgAezKn3sVJWbjJhYBWLyJaUve",
  "key18": "2qvHUGYaaetEQcSPYXbifFtVktAT71ErSRudmajWaXFmDuMT1FHQK51CNueLLedqmjCCmyZX7nrRaXB3qtr2Jqrw",
  "key19": "4RkhWGDtSw5PBhaKeVxCrCA6GDnBCSMoZatBzEyTDHoyxnLKoqPK6N5bJK2uoD3pb5KJGFo811hKAAK2S2WpdV1T",
  "key20": "39YPGDvgkxF7M8tJy8iqx1dfuXZE3N7Qk4q934y4d282Eja6xrzzCSkzvTgmLviiCmdMv6VthgVJ4cayakzAM2Rz",
  "key21": "3YFcrTSAbzaZCvVFs55FPu2ayj9846hytQny1FriRmhDrCJNsFnNVKduntqg7p7FrXunstniVdDjtqonwpoS8W2C",
  "key22": "vuXPaqwTUWv5KoX7hG31pZDMUwz9Vanmqk5TezZykG2s6cLJKcRDJamSNEq3r72VemxYN68TVt579asjemYNMDw",
  "key23": "543SFH9MmgFpv63qmZWTTihLT9rNVh9y7viW9Nnags4iNusS1zbzEbyJZTmw1Q4uVMnPzb8fWY8CfTgkPRBx9kpZ",
  "key24": "3H2piaJaZE6dZdKdGvij7b39PnUxwjySQ3oS9rnj4frxKPi7N3tvnMFV96vmJ7geefTW21NH5x6pb8pLSW6dJQKA",
  "key25": "5DGEfLZhefVya7trkedvaNxgH6EwmNJsbQwRXAfjueUTT56UUn8FB2wF43MqjmbQWX5LTtqNvbWdAMW7aFmkGhEJ"
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
