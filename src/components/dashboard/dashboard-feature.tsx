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
    "2f59HicfeJnUQFNQsda95T4fcZkq1ofXUjfuBBuC7CRxNKJoujWc14hm5WjXCPtjuir2tvMKRfQH1D2ZS8hhADRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gkpti7AeAMuLuD6nExrH8XbmyygkaasViuvnZRcSFnW6D19qxjXb8TWWAungCP5augPq4SfQPvvtq3SuBS14N2d",
  "key1": "hhB9eZSBDBGLstbX2iUofMweG2Zm5SBC8P3udbVHUaibMnYcsN5n21DuG9bzRP9tfwiJn94ywRatvm4VCCyFJtS",
  "key2": "31jw853gv3td8UwZUxJWtKJ9WKjsPDgnr6n1etA3gRnb8T686jBEswjLimpmXQy42ga4vpPEHWRS9SeJP8ogR9tQ",
  "key3": "5Ha2ba5AUqwnj3S4fS9Jx2cxWgLqNi4JyLhsvLvHi5r5h4UpCWYV1PjHgwpYKjPzZ2fhm7EUmzxRhQfEWg879NLz",
  "key4": "3ueRoE7sRPzF4GRm9nkoB9AEc4p2tyaUQLgfLipjTXwh2vCSDfANkseMpnrWYT4kquxhjF9yJxJUZVy43bnArtN8",
  "key5": "3o72KsmLYFq9gwHJuNKLAZboGoFAyQeWEMq97fxcxDJnneXFUjV9hAkikDR6AW4R4VdeS8WZCJHeuLfXKPagJ93c",
  "key6": "4XVocQTgZ51bF3puTXa1Ys61tAxvcPv6jU9mTzguwhR7qWtRoQFByZPR29FCmq79CMrYjgG5ssrSbuD4KT1t724N",
  "key7": "2tESCQX12JWaJU8Emwr8a3tMRyKWgysgqqgKAubpMP3zAmQUhkFM7Q8hhGTvPpMZW98PexeJsh7eopiFyjXe8mMS",
  "key8": "F142dj2BmCkNBrebwfezkViRXzsvxBdPUXmXSkNm2XxAw2UBQtCarWqV6zap9GLmPB3PoExKfCTCCMoWKeA1TGj",
  "key9": "4kNbG7X1KgTkSDNvh5huXPj7EKDarCwx64Q3G9qifsjRv3BLXby9v5Zf4j7rpmbGsPbwhSBPxuv6TrCPa4boNtmy",
  "key10": "31cJJoZnGzNBwwmgdkry8bC73kc7uM1hdktgJ7vZQA3AiFdDdW86HJeRHWmj6cSkt4uWc5UhkfT8Gv94oAM5Q4EK",
  "key11": "5V9o6reB96KHftmubbD4GJkziL2Xo2xUh6SoJ5NbEZvUQhkBYAhs6hVdAtytxtqWqPJ2ZwiQnVzjhY9B7P4gf74P",
  "key12": "H8A8EcZ3iD5SD2deWaGn8tgtK3sGBSB8bRmorUArdf41AaLAs8E2f5VqWPeQCsWLJGhqPi366N3C2m23eEPcLg8",
  "key13": "53Bxq5BmFcPeuKkfhYuAefSXQujvibepBkkPeVmNRrT7uwXMnU9iqcrg1oqnTzfkkUMzQJDXH8fA7qr73Rhvmri1",
  "key14": "3U3Eru4eSXBHf3SrtNJPGTgMYLa7NwT7qRmyvW8vcAHqAd5SKnmpHetGnv7VNcECZKWsNbpwidUePphLqgbiWrdU",
  "key15": "6Ju8ozHKDdQZBuzW2XEEjYDt1X9x8JWW2UQURV7wwxKRvqjNZFT5hHmWhXpDqAgZFJhCasThuF6kNTeETviA5XU",
  "key16": "4koKirP8gh7rzCLAeSAsejLQihtWRUcgeDMAnYy7sVyU9NxVHeCCjgaX2HKFizpyjZ7wwjSdyYWyC3pCDCnMFcKY",
  "key17": "61QJ8U2oL2xR2jedC9KTrHWzbT6d5VdwXyddSu3mqbXrtCU9WyQDrafYJYRPizq3z2jvynd9nWQYA18VJ5LcSdg6",
  "key18": "23WUb3KZThA9NdKnk1UEqWeD2S5QqVruuBBaCffuUUDc3zNCLjkdPzqKLvJMPkURZ71xhWJw5PZTRnPg3W6MDc1i",
  "key19": "2gfGv8w2rcmZj9da9cGzrew7gHtdRHi5DBB5onoePpyDHo8h4fEXPPCzFoZyncmveyiXAtx1XVJk6vXFkFGPn77L",
  "key20": "3dcdi53nXLrrsJG3yx9MEXTBbYNXBHcFokqRS641kQSLtidqDdo72Y1k7zU3Tf38TayobAKKQYsPhMWxBgrstvia",
  "key21": "4wE1QmpVhLZqEpFQgZSRud7apxvKiz1LxpH5nJeRtkXaKBt3RMsCE2EgstNaxz65mpWxP9EiB3GgjeeZQN5poP7b",
  "key22": "5eavUSEzcHQbiWRsMxHiikeVt7XbzaynEqqjSomMbzUhWDE7QcLJPtqbiENvKhDAaTsC8EmfF1NM3HUsaxSkkzto",
  "key23": "3caZSPYe5AoKtCoADHPyLJcp2YJKQWYFfSK5XjvHykcu61vsj9ZM8gvUq61P4kFAMqaRpWJ5mejB4jmLFK8QwaGX",
  "key24": "2FTAeYte8er2qWtWnsoCqmMX6nFoBc9Vg3CYW9HQz1SV5HTnVriqchiCHD6t1q2LeY4d6rf5gch8bqngYxD1RaEc",
  "key25": "2bTTcGbYmGsWcqLCR7MGRRsS9ZUV9eLfiU53bSMtauAHmu1E4XwXGihV4yjNfWPC3H1WmcFW5Lrr5No4QAQxYMfp",
  "key26": "3ouEY8TZBEVeuo3B9gnC6KcF395iJ2zvnXabt6GNGYhS3fM7aPV61ctfYH1DV59rEhtuWSinEVxq43zYSEbPd346"
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
