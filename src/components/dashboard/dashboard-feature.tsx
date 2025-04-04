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
    "QXDHaYVtCTKw7t7ZP1nAGYZVeigx3wsSnBAuza5qaJoUi1LeB9So8UquGLfYUabWtcnkhLd4Yg3roYZ4NsWUZex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QqFgoUH45gMgPCnssqjgmKCBhURYrQyJtQwxnkmghPyujsjtSCpRkwehzX2GsowxvhS9CmbZpQNBdYqGHidcPSo",
  "key1": "64R7UzEoVYPgZy8AkUAqkCPyEzTv89PAZUx1ABsqarXGttVVHMYmoZvYqk1PcmBtmZNip23B7CuX3dsEJ7Nkk2co",
  "key2": "4V7xYPpCwRNgcUZc76wM82LWbg6Xic96Su2uDszib2U5cc6StDzsixV5EAiTxgNttJYTfyofLZzFZRGYekmHvhUZ",
  "key3": "4cAXtsyk3NXGXms4v8qpTVvpf2jFAyGx3YQ1rhP1H1dHXhn1dyv2HHPasEKrzWcdKUVyUAhNTv9VSQ1gWwHRk2gW",
  "key4": "cLiUZLJeNveBMvGWPKj8nTps8cszp2iGyQaNonp5ZTcE9sW5w889WW6L2CyFWW18y7WfuHBsRDtPTjos9yRm4D8",
  "key5": "3GHYHkHJxsLwozHmAg7FkaAL2ZEEvprkNx38zsnxapEW4QETCD2i1wcUuf6PMC1DZxshNTVUfeEYuN6tqmK12SCT",
  "key6": "2c4rdfGnCyd6hc83vWoWknjw8zqepUFTZGoM3rKvVKX8mPMG5McqaAxyQXGS2iUeBxutUEdyw3LvLGeyzveHSvxN",
  "key7": "2ForREC8KzBFUyDPdqq6iZUh1hTFXUjGUpeJoGVzU89ogaun42BAiGrsoJdD4xHZu6mQcnEDLNk1RKY7ZrKti73X",
  "key8": "zGJmJ4CryRwEvz8yW8pKhbwNxVpdSpMAXipVhBWk968tviJka8iB4LoiPnKHDTpKhyBsSx9sJkAbMC5msY92jnN",
  "key9": "5ySE92bzZWZCSFb1DvULDGRTPQnYCjamWTBYF9kiusK2gqfd55umB21RpY9Yev6ja8S6JorjyEnxmhfQ8QzRQoEt",
  "key10": "2TAMs1Utur5bn7KTYMjFJ5ve5EW5RTAYouMcmjBQbfoWgK4uxKNFX4QT3taE3mDKdDE2jnjXPMN3NpAeoAeRRqnb",
  "key11": "5C4N2hztHdH7cJy4yB49byX5HATHaVNmTwMTMcfGSKRrjcKFzH4YDdmitjroVZt62EL35vZZkowj1CSWqYRRyeen",
  "key12": "3fbPD7pqKwQ1tSHBRCBNPmtjQbFXBxryB2DhSJppReyp8rUpHhNMAkw2KwemQmUEmudNZMmuoG45NVNERALuWvfd",
  "key13": "2iMpsAC8VKW51ZamH3vPusMBe3T4ftvA15vDzwURLb5u2SzMTfKskq9CjZBPfNuyTsuybiEEAXUzDMNLMVnUmryw",
  "key14": "2xeq1NY9EKXeVqsbhT5MVDVAgs4vsLfhtJ2Kh6L8oKjf2HBkp9XRnGsUMsTrvoKSTDbnXjdW4gmj1FMVYJ9FAzgj",
  "key15": "4uw7BGiJBorYjkNE5NYhqxHnkE6cMrXptEyk5Npk5iA3vi9ao4JitMf6JkGZii3Q7jqHN4BpBKqn9WKM13gqCNEd",
  "key16": "43vJpQeMUgmXS6oNZd7nEZpuevZgK2uvAgzknKTbtutQgVYeefwik2Uo9CKRzthZKJVu4aJDmnDFjQ8oa4as3GE3",
  "key17": "vsBkV3KQ1X4rogbWeJiPA7ad5DBt6S7Gw53jijnqUQYhUK41ar1pv8wAm5P5Yow9FfPtCTKjCjFX1nP1MrXuA6W",
  "key18": "5XQ6nG6LGgRRYBPceW3YSNe915oH3bNgm8ovJeNhNsoD8thmLB3WKa5Ky63Jw1qBSKnXo67ecCCEZ8rNqgwq2wKD",
  "key19": "3txUQ1VKdCEMac6Cc1AEE9c5CLUeZ1PgGwDGhZMRyojgWZ863JPFhFbEudQDYG9T8WsbpE51G1mZuD5qAr7zX9W7",
  "key20": "2khZVfxUPrsLSiJerWG3bfBwbLJAdFK7PEa8HPv4mxB3gGTmCQwNE1PEhRZq1vHDHErj9TdC8ycDqsAXHHvP3Dvi",
  "key21": "qXxioqnA23g7BdSXG72Sbbq1iq41suwMSz4bNdL1Y5hVoLKM8g2wVmxFiQaKdS6ywBLEnPM22P5ZUN9FUqvA6RQ",
  "key22": "2iVZS3w5suZxaqHsXnSGgL4EDpUKMSjZgM8AggqxmL8RSsaZDBBMt7xi1js8oKqxPVDaZK5HsVQr9icb1Ut6Zcn1",
  "key23": "5yHBgqGdJRjKcn7me6xJBxARizxNFxqKBVeuH2M4mb2gvMdvpGPHi51ytaBj893QAdWXm6njx4bDEDbFh2ZUqtvu",
  "key24": "4BvweYCrEyfFasN9qy8r513vVqajRnDEvjNJk6W1AeHajiJn2XDw6cU6zNcPkmwQHQgq69uithDNhSvKF9XLVoCJ",
  "key25": "qsuaXqTi4XgnGbmgcaDaHC3aKqjJvkTLAi3onKDdm5ZXyHwyGbtRA1GaWiA4jZREtzn7aTHHBUKt86LA2skq7TP",
  "key26": "5gZxWsgRYDHMtVtKLJWdQtTcVmDfbDfPKngbUMUqiqR2qtgnHtEHgqGPjTkLiM6fU8No4yeMbcb4VH2tfxNinwuR",
  "key27": "Ktk1zMrXBcU9Yg3XFTaoAR1KNLKc43ymfdrzwRorv4KW9eAc5QjH5Ns5GPWuYCm9yUwG2ejkg8SsXbNHKisU64V",
  "key28": "2eMXfjQR4XwLcbDjytAb9r1Fyd5zrgRQk5rfjpbiJQjJMTrTy4e9zm1Cn9KtJ5w3Sn2L9CNzziojJ2Kywvp6GxkD",
  "key29": "2PZts58DYUDLLt49eSozrJ67Xy1bVhYGFfBLaBiaUsLVupjuNhwGJLntC96DriwMXq4uJNitLZJEtagbk8BBLLTA",
  "key30": "4QHQEaBoVyCJJxpmUysX3Jyh8jr23Hwo8cPyMaX5B4NbW5wauoKogzSiBhLZo9NUTFGYW6pTzthn1VgLCK81kckk",
  "key31": "2WqyMjSsnBXVaGqSsnP7W8MTSCH5mjFDA2sy1iRZRhV8uJFotuQUGeQrmWqGg55Vb64Hvq6i8XQGKj23KTGdxvuf"
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
