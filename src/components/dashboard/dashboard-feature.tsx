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
    "2wAhTHX5USMD5axrqeAsCYU9T7MRnq7LMwiSrDs6qRTpVdcHnBRWZzyYFi6MDCXup6qQGWAQvs9AKsT8vKF2Y2Fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uwaViUuJdkjvzYnY9iS6ewKYt9JoyAaNiBh8yBrELcazQwU8HxkBbjchiP6Jpn49wJwZKhnbACU6b2Z6LGeYvuf",
  "key1": "54yfaF3wKLNTggoXf6DjfgXcSG3ziBLKAykvs8UaexLB4P78UfBg1JdR7qBo7HesNdvAEJMzBUAUxpco46siv39x",
  "key2": "anLo39eCBwKg9KbjqYkqQTdvoyHfjSMKMrMdrGEPwNXsPcvyQetjLkmdb6L9fuKwJBqiTdoVi859zeeSFc3MtKX",
  "key3": "5VB9jWGQW98pERwpB9snmtFuNL5rEGnFR3Nk4jrAXRJnDh1GRj18LL4qQ5j6DoJv27qE3A7xMbtEiibyPMEaMdsU",
  "key4": "2NiiRv8G1uMQtgZVXE7fQCSYUYMBhJQuBKHrsQeHJwde3A51fvK6CgfC1FKN7qEEaibcXu8c8mybYHMSnEj2srPS",
  "key5": "174hnsroB487j6YeSBmrjc3sGt6Djuv2DvqG7hJhxiiQEVPtD1cmRXYk7PS7d4Kp9d7ncahnhwigoZsuRngYBsk",
  "key6": "4kAmfoZqFeyTmBXHDgXjpyhiXwaKgWtNzrJFAXK35XZuodtpMkBGJjoZEEkRmA4beg5PSEbgd8uG4MP6s82Muu2",
  "key7": "iFbtaq9GGDHNRnQLrA1HSN3CyZUoAvF9gL1k8bcwUYVBcJk76xor3Y42wjzjihyuthMDdBG88hafoYWBtEATBeJ",
  "key8": "5N6TUVzEnQLfKCGzhvG7bBaEGEHizGDyvUnBESCUA4CS5pJeDBoGXt5FEUKoZxGj1v2F1oL6ir7ToQhDxDQ2yjcD",
  "key9": "4bYgXD3FB48gWnhn2ZWo2dZCtFbvHxTcE1p5unJL412BqkKXu5RXUdWmue8qaAjbRqs5GaZK9kBAYsnUN9bEowMF",
  "key10": "4PJhe7ULzhj5TGgchuoZdJJs1u4ZzEZvCBAJ4xHREzxki1UrbYAGMsPyy2er1uJUAtoKeJfnzDVTxwtUuDoqw1u9",
  "key11": "43uWDrDtrry8N7zMz5DwghG7C3DDDGVyzLsWhXuz1Yn4gpFaw4cH6ZA1JPB2HKVTZzfUc5sQBR2wrh9TW9xjWr5H",
  "key12": "2hnqVCCPcHXvjWoE1io8mTK4MQJuYjrK68RD2Z9GanysjetSR8JQdNZAU9RMQeooyfuTWHCoB2yPbKRuMsmJRDBo",
  "key13": "4aQRPcvjzpJvjTc16ejfVG35jNRqdPVNJoWgYXMt6UgW3Bj7c4BKm7118fv9KPTzkqqUwBEhn85yRhfZniBnXoMe",
  "key14": "TNXuHpUEjt7Cap8C2ogXVnh3pEhG3CKdkUirxmS8eq6mZz5DAnXtoCJC6D2UeuKU2fSb1yN2J2hdDyzyuRPRvJQ",
  "key15": "2ZA4B4HQ7e4HJJ1Bnd3irV3h3ceBcmk694VprGdRFHgNLTEbyTEayqVwBCACG5bx33RVEoeUQAsnL7WQYDPzC7AS",
  "key16": "3knbWYo24mrHJfbDhPX2Jrm3oKwLANAANHB2TwDG2vHnwDbVNKgRRUqKBtYGyQafKoRNm99tMwVn7hMyxstjhNH5",
  "key17": "5FfsNFR8QtXGJzT6Srqwwit8rB44JTCxbytL6Yn8k7qAqN7Rtj2tCDcPQBAmMerqVeZGxnAXv8PqFRnhnWhQ1d2w",
  "key18": "2H29djSRCVsPbH5T1DzhLasxPV49EmohT66dTrPSq3rWyS9BTWkUygKRBUhFqSSJzLM9LLWoiMSLttXzBgptU7D7",
  "key19": "56Jpt1nakPtWJCw119iiNuRmMUfr7U9VYiEHg9Vm11kLienS3Av8vQNHS345nf4VVEx3DtMf6VDVCVyWu7ExhN8P",
  "key20": "2WdeSSZUBfNCAWbsg6m6gQyfnvcJD7yNLzW7YL2ZVt8d7CDARi4w7f4tdDPDHddzzCGe5tHKJA93mw4opn1CpxR4",
  "key21": "2GiiQWJACS4ugimZtBpDNXrANp3w1dWaofaA44hssSM7TmBBVThHvDy5TEGNTzkFbM7okhH4vgXH7iriqzmBVZon",
  "key22": "5YSRgX42dp3mkARiBtUipGF2rdFb9nrBtLmAtpu6t8BfFB5se6QYUCXoDQKQgSNPiL7VWJpeJ66dot8kieRBtinF",
  "key23": "6cxe5uK4f3qb1b7G5yE349G4pixnFJy5A9tFXfrsABgWgX4zYdk5gZc6GemD9CYqYRusyb1aQPAzZfM6x2PtPx8",
  "key24": "4Ks8ffxuzPMf3qoFwtodC1uZgv8DiierDs36vZKv33EadAAagZspzbWDBaQ5bYwuYpfVqjE851jPALo2vfi8DWi7",
  "key25": "3hp1oacxg4wjWGfTYeuzEfShA2KP6p4Yfw9TtBfnciXcZhVjmubgAjUdTuJF1hsw4x39Y1D5NqfWwa296rvbyrSu",
  "key26": "p6wpuooacnwkm3Va4SVGu9mCPsXQsLpjcVj7MFwa7mMwe9rmEPpPoU9xZ34WQHoeAKnPmn2XMaTUkuAirMPLPVu",
  "key27": "4tiP7Qrwr3QmJjpphYiTajNNLjVVeMq7g8VHpe6EVRR4q929HC8cgsvtyNhnn8Vvu3RpFYFDHZPVuWMvDYFxg46y"
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
