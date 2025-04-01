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
    "2zKQMQVi6nZ7DPYFJwBKijV7xns4wYv8LSwJUkBrFbAHbeESf3HJY1K9SPPWjTLCT5NABxfVAeyxJkFiByY8MYuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QCUJMeLv7CQ1paK1jEabK9wPshKish2Rbz8NKG9RZXdMoHyp3336UCxhh7KmWNj44UPd73HxeQyWu9FAtTH1Xks",
  "key1": "5YYScqEqhdz4Tmq6n69hAaMzv3FRdMW4c7HuyjMATQm58i2JKy8ZDPLYiuH7PtScz71D3cK27CRdGjCcy5Cn7Nky",
  "key2": "4PCsziXvEBnLexAAhZGY4X6Hhhbf8bK19NxvPwMKi9PL2RgoAruGn2R2grqA7dTmqqWsWu7eUqaRg1A2uQkgGDzy",
  "key3": "462ggPC13NXLa7Yy6JMGUQqgfBX5mZjEcEpTZu3YcNPHUYa5dnC1EY6GC3vDGREmxB9wZmVKKyY4SJzHC4bL7Yjg",
  "key4": "27Rz8MSr1kpZFt8ELocuotAgHqWQPNYWb6LLoGsVuVecvvMv4QaSSk8E74vAbP139A1Q1D9SSCERUo4sNv8qrtJY",
  "key5": "2x2uSKmeXphsUNanfq8PcHcFAk9En859amvZxh1HwVHHyVtCFGceZxsqrxTP8QxMBfgVoNCiYQEm7tvpbUr8wNyD",
  "key6": "3Hf2R7nDN91Uy4GxckSMRsARqh1rGhv9pv3uDaNovxqKEf41dyrneHBJfGLAvZJuxAxEqojzd1JmvL9Muzo2L91c",
  "key7": "2xLNDohu3d8U252W8VhG52qos9nd85uv9dtLapuwnAedGABkM44bmDAAqubz3Lb3nQ5EjhuyRZG6esXKftPEpTot",
  "key8": "BZaCeBb7KWiegLNLKJwJmx5w2NipDcYdqtcAp4oEkZ3fGMtsZScrNTQaTKxX1WcQGBj6KtmTAuyUBSu7U72yNhN",
  "key9": "3B5TA46UGCu4KhQXkuMuE6xG2PVJS2d1oKe74dtns9FXoNnruK72Brd1mWsV45UeveBkdpWmNjJDQT5QYQL3cDcS",
  "key10": "2y1s53xT6h8py9hLnd5eHrKe6Xrr93hHa33Nyiw892rrU21Q7Fbk1Ef5gyZQ9siouqWkUngr2GaYnnN8vyCveUM5",
  "key11": "3asyyVQ8EvJMDYaKdaptkWxHFCdPD7ct83vHEp1Dw3Zm97k8soAM2fjqdghkHZhzs5JfyLETP9sJY8BCAmHQVW6d",
  "key12": "5cmhHs1UoekKgsmc1V1owZvg4M1Si5aoNGjyTFTdNwUUocy1GadWUwTXg7Ddkwbq4kRbjUfCwfQNjG9evri8PuJw",
  "key13": "2w7pb1HXp4hLVG2nd46RBjkauszLT6EbAVL2oqTTYu2BMtCZ8Mw2bC5J9dKRB2V5XJ2n9yAjNEdh6zDd9nyNggtT",
  "key14": "5owah8yTNhj637CcqorNS89VaMTbQXhAtumjNgtAtksoPAbi2JuBYRBdS6fEwaoLhBdjwye6HCmJ7qExFsWaaJpf",
  "key15": "y5zVJHKWVyH3RaNmVcFWHu2zKtPLWhUz7Ukcjw3r5veXWfed5MFiNUta9GyBRDgHTjkuVjiFaGSZWyPAB368ndQ",
  "key16": "4rMLuBVQbfLiDfzDGTpNwsDTtcBmT4LHpeX7WQ8ssjFtbCWN1toC7n55uvmsgd5GJuRTwWeWeoicwAVu4zTYGZpV",
  "key17": "3XXFmVpmGwZtybzuJsehhPSaDsW8ut7ABQjjgUL4iato7PgaxKT8E7yxfWyucAaPwTfgjRtS2Hqcp89vrkgsNrJu",
  "key18": "sgvzY6YjLSxVZeFk1wm4ih9cRa5Ms27XHqRdWQYEchGR6j78Ya7sLYrewVig3B4n2Ay1EeJqPVZ5jdV5KbdZ3Xb",
  "key19": "4iLKQKUnMsg7yTCAkvXSUyiCPFfR8xWcJzW8n19XJQrboh3RHsWYaxJuenWp3JZ3qCtzAxuLuZ9Ycp5EzoGddeUV",
  "key20": "48FfFAa8DVipKj9si1FrGCeoNhdcQntNeUpQVnHYof4WcBvno6x2HS1WZh2CBXQmTZ2HtdeEcJBVxgt2CjXw3wE7",
  "key21": "4AnrrEVjBHZQ4yL8YrBivj6NiNoJ1eSc7mXZG7QB43E59U26S7ERduPPzzVT2zwRXPFkR4UQZZQ7yG8xPxHBEBQt",
  "key22": "4zA8vBGKoDCP91qNCqqBTDYmM54vdMyX8Bw6JmQtM7ex6pWC8e5pqrwVH8LQrTbo9RYMpfXt1rs3snaetjd5Xkav",
  "key23": "5kTexvVPWvMrMXs1ndRhQsB8bVWYdzJZPEVbT9gVj7QLsctgjhWYpGffac6uadY8UjgLvwyz6DT9evXzBsSCBN2L",
  "key24": "4ThX9Dia9tBHiq8SBvcyRfsQc84rnPQ8QcYGDsQDzJG1u7rVkKEBBJNyLdSbzVDrQc8CWLE5GEUrSK1AD98WQH3Y",
  "key25": "3DUT2VNZV9CCtodSah1qzvVbsaqX1Ggs4EG2rcoAzfLKY2sLoaj9VCEYU5oUYryXhsJ78wwU1sjnnCAxiSQ5PN38",
  "key26": "a6JEC8juZjL5a3P9u945YUjYbnYnnTmA2XXADpsGRhY4sb48hxpNt838UagULiFxJU2odMZExHwS1k1csEGkTME",
  "key27": "2CPWVrjr1HeQWz5wSdVyi25NEwrAKeuAgSTVXpoo9ozUnL8h92q73YFqzJTdqTr5WHwqbWYPGeU3oUL371twAgFr"
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
