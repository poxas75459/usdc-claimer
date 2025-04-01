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
    "3g5XnuiKXZksey6Mw1oFkhqAfqAcHH1uVJ916JcSgHRCRdyDFCTD6xgKmcgH5Zjoo5kUw29CNvinajyDVCFsm8A3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kTiWchr2fDKEQ9G4dK4QQCKCcteTew5MqoVnvAJZZZmZGseHxs4VrBsW4mnE8vECr5B1RtXKdY4UNLYJy9xB9mU",
  "key1": "4kgRiUkiAPAJXvCAKBQNfiK7r5VRUTm8z5ZuoRCzsBRkmPgP49keZcHSSHvgnDfq5z3HNhUMqRNXqVsh8kYyX3kQ",
  "key2": "99r7beC6e1U7GYEryTskUWcq4rccxTQxCYxpsXN7xcSQrkAEGFuu8ohHVXGB3SrRQYMrGGJ5HPkNSaay6Cd8LG7",
  "key3": "4MchFpD6HMrgu7JBa5JMniHQrJbd2VCst4ABRPm97orMvu32aUKp7VuQ4t17jfHCS5FNiwtFAi515JCQxYmVsyxe",
  "key4": "T8JKQ5f5pEekDxJ5bwsoZto7j5dUa3yiXc1EUqzoVPCDfo5ja3T5vtDZrgv5YazCQ7rhQGAwRdUWBj9yi8tiv8h",
  "key5": "3eocdTUMHBg1Mz3sfZgBYC8fzm5NFH2zdFSeHDhjpifRQn1ejyddAauZPZdn4KBzw7xTxjWQbTGp3sdP74MoCQZ4",
  "key6": "yWqREbVg4RX5TqzB6ix2HZcPP5nXVKsJA9WSg9FY2LPAGg3N9xaXrPf3g5bbJzi4wNaiTn9yrYYiCyxZ2NF9Mpz",
  "key7": "57zsJd6WYs7GrM2CZrL7ZYd7aQ8L7SvDArZhyLdfa5YGg6E8DD8xYMxqvXD2sBUSDc151m1naxmJJjLJmSF1MXez",
  "key8": "3AX3KAvhDxZQZdZMyRXPTfUs5XUhW3D6hizorqYmULVXR1oJConnEDdBtZe2eb9NLFfPqYgHn9mCQkTPRNnnYhwF",
  "key9": "4LeYi2od1y4jntb3rNiCXk9wkLj79U8WAegLhD7cZ2tXRmRSxHar9xaJAca6smMTDuCUkzhF8HMwcZrLT1aRmjdv",
  "key10": "MDC9D3p6cB4A3J9ux9KmZFs1Um8vAPVndwCv6EtuKqotPLK2XNaegkCjXJqyVyvk3TRySwDUhtDYt1axo9Xvkhd",
  "key11": "4HZ65HzzkdJiscPmkyFJD8AYfMpfmfyWXG5vS1XF9Zn7uQ3w7xtFZfnRPMTcfFUWW66zw6dMQ9r8RcS4fNZPCLEg",
  "key12": "3bKYZMAGBqU1tsWHTkt67NeLxdxDx8FSjANxWsr2vAbMnsPaBz39Kb4Qbvtcwdap6yvh7sYFXdiu4yFVYbvMYRWp",
  "key13": "XCUTAQcC5DFkR23VFxduNtvQi3cpSXCXK15R8UtWos4LhoM55xwFt651Zb3mPGz4d6rzCFcHnK3MVaRyDfhW2kS",
  "key14": "2DdcDLCz2mdduzQU8V3b7YwqoE2uGex9braFcuHP91EX17zKR5hUf2fPaTYC2ye5WET2G3zzZCH52cHHMZ6J4JPg",
  "key15": "3bqhapaCTQG3r2g31G8MtpfLv9xhCqmnYUHPRh1Rp2X3StpPq8vPeKvxtqfBXu6NyQN7Vwx9eNwoM7G1vxRDA7ST",
  "key16": "3ofZRwgMpSUeHJ7qFKmsnRUsMt53MpFsGD1BPAR3AiLw5QvP2b7ugy2oLz1B8ooqpD1nTZSyS8buFcR9FkZUqszi",
  "key17": "4sU13tgYP53ur2z1XtAxriP8FBKhgbguuFH2s9anFBGBsTdKN275YyQQEAC5a2cgz5Bc4i8d2oGJkWMcC2ubTWFb",
  "key18": "23SusU9LDpBRjFdjR3beoBirLyWjgWPmS8bGCJg3aEJJJwi4b1Cg1iFMy9EomBPsREkyuLZsA7vqyBEJVZHwTDb2",
  "key19": "wuZN3ocEB2NMKUWhgLKGGkurR2i8BFXUVcDxgAq29s9PuFchLrT1RxPkXpYE1BnrnCcyuouNaqEU2K1UyBoKoaH",
  "key20": "3kHAKWREmbTTQd9XNKo3Bf61nYRPcZdH3FRoCUxfhdSdtquSXnoiJd8VbFULoPotWDynALw1w19Rewk3QTYoMDj5",
  "key21": "3Wyu1pYFKu49DDamwswoegAyvCqqjbV7WTdHcsqYwC4412JKFxa2SwK5CmxCT8f8xB3ja14PiMrGiU2kgCr2HGjj",
  "key22": "5iJpSLVEnNQHsuXQuoC2uDH69A1vqG7ntiTn3roQZUzRc5LTgUyeMhkzHA9rMTGW6qJDAh1utB2jjL89fp4gwRwV",
  "key23": "3xXs7T5iwLv2xvXEQMmjxE3v3LQ5gNWjBLzFwt2zB43i9bbJ3u1U1Q1yzZVetMiZ1Et4qsBqrXRCvpNuufcP1Lv9",
  "key24": "4bDfLfNjKu1FF7kG7nZP696j3TevTuDCS7iNtrwCefLdkiXPEsHVCM2P8JLK2gXe4SB1YRtn2vBdRg19cCYEKre6",
  "key25": "2cq2xnH1fmbPDsfEjrsqc2frrXyitUEr9Zneg4kbcD12vnqF4B2Y47vR5rqWKxZcwimALoJMY231K8qhvvvnz8si",
  "key26": "QSgTdUjLHgbfaYBxquAH1jkJ5hT8eY9KjTB1QcGKzaRfBL9vTTuBUTEgbHv788MNDBohHRMaP3XwoUv3x57pofo",
  "key27": "hAsMoog5irZJAyfigUtCgs4LM3su3EAqggWuHcyYvMqXjUVdy4vVrGPuUsGe1kxYJEmkNEBdz7u7P29E8oDrymM"
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
