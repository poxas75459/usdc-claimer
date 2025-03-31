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
    "4mhs6QranyTCxpzBCssh5f5nWEWNNhhEqC79AVphEvYG52KwWTwEREf4wjWrgqiLjxSo7U64xLg7T8NAp7m1XofP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vTX5f1MhbEh77Ny9DddYpX7Dayho3USm364Lf6dvYPyKF42vQYUXw5CXsBx2eopq4p3cNhvxK9EE5sqRxc3ZKjj",
  "key1": "3rVgXeZkZwxVFZcUKH36cbGircf7xrU7bHe2uovgaHGDbsU8N1LfUiku5WyFWSmGAPmsb7RL4K5fhnVuwwqPTYZ1",
  "key2": "3q4UCSszoDq1NzgvWCUknS16E4E1AZFGrqeneZbjhRsu5muewWygV4sPwHmFra997912VqAyofovAAZ88GGZM8M4",
  "key3": "3Ebw8CgjjXZWikrpruzUtDehNDrH1Zx5ZGfSMCh9wQM6RoM7EJ5wueYUdw4gvn58LMeVUmQCMDsxuPoYyVTpvgCG",
  "key4": "5ndFj1jbCqh2R2DUDNY4ozuQuqnLgBuSP3FfAeob5ge2YR6NFFLons2SQoKccB7utic6nQw3Xyf8mBTZi629SFN5",
  "key5": "37BxeTUJmWDoFifVEwep1ya95vevJMBRp5rRP8gny8HGqLWHNhQSDyAjsrrSLR2XNk7gc25eG89guMqLiWGFqwfj",
  "key6": "5f7u8KJB6J2CShDP73N2z1uKLsqTx8zb62C2tydePetVbFHM1NJ85DYHFKD5jN2cWM76CBPof9h83g7qst7fXVab",
  "key7": "4v9BBxghJCukTgezAEPzKKUwML1BDzumbsZ7VrgAj7AuB4sdR3iPE9HoAS6mXj15pqgKZyudGCjvF1LyZdutcVzj",
  "key8": "5T6ESpJUkidZfijGLUZ43HncFFN2j1pwZjsFBYK1Fry9arYUdFribYEZxrJjL2pLc23LLEUH9ByjahndbYPJJY7M",
  "key9": "4LrpKPuWU7P7kq3ohnVTH8kwaGuj8JpxFzWoK6WZWrxWiqbVkC8otGQE5HjoMubdZB62i3Ak22tJgN9xFnivZYDP",
  "key10": "4WxncSraPYPv7qJZysings4PF8LAjpqYGNFWxcUM8xN6iEqK5eFAdacw9rvrLJNipppgP7AHeAHgPLERtz7NMdZ3",
  "key11": "2zWSM7wttMpES1gt6E39EFBj9Wi13djcwDQ2TEfnaetuoifR6KTSf7TStZga9P6LP7aFkmpZSTN68f4aXK4gNXQu",
  "key12": "byssWa42NqGuc39JFjaF84PstAvNqo21rxYfsH786xqVSdUN3AmwL7XP2i2Nh98GetVxwZYJXSUtMU4yiHWUzZd",
  "key13": "2jMgvr6YfW5a7cDrv9jdGPWYR61eVMmeTSxZunT2YJdZR6jHZWeWC2qR1LwsE8keqzdgeCVG7xsMUxv8XJjhvvqG",
  "key14": "4M2yNQUmLYLUj5Q9QVRFhg9ETV3nCKPt4Qeyj3gtSkkiruQhjBxKTJM2cw7HJUc8ban68Nzz8eosnnnSbc8HqWCc",
  "key15": "5T1kr1UcnFtJFadcmsZsCipmtNzFsx74VUzSFr7Fr5LXzykZx3ph9pyac5xcrmK9hNFca2LuEop4ii1gHWF2YKWJ",
  "key16": "4Eg8E4KCf3KQPj86jzxqqCZZCvGQhbMWoq4RmMTz6K8uccAHX3x4Wu8gWs4SkkyFuuuRz6Z6MG1eSFGAVwYHWBdS",
  "key17": "2eSBbm25z8HjYKGjxKcjYK6ThF3UzaeWxqJbG6dsQDq6x6CJMaj3rpn8Cb1j9qPCTLoPQgtDqFnst2stDW73dmhG",
  "key18": "58koMPAaaMZHVVBNFrSzix3eVTkqst1F2WwNSM7S8RZDyeQ4ARBtRfhNALD1mVVoSSxDAxzJZ6ryX7NTMomsQzwV",
  "key19": "2xzeJoAaNmXr2FWWsqx5hc7NNnDynuiC4bVL2kCKyn1nfffZ8ksHDKtp7pVE5PpdEN6fEjbxs4HpSEgzqMoh1PAY",
  "key20": "3fTCXSTAhkaBewK3PvqpH9mE3j9JaM1DjNLSmH3BvgsBU9wZWmeQyBojUKrYh76datUXqS3KzRVAHFrwnCfouHVq",
  "key21": "aPBuf7pUDYM3sfP14C1rSBK6U7591MKt6YHyGcELtQZi4icZ4WbXa88Xv2a6BqbBDLphpyeUwB5Aic3RE71occi",
  "key22": "54QU5MWEvgsQmEdey65dmwnCZM7sJ4AdMhtqfmoxDqVDrpNef7EwxdqGPSLF9ZCc4SggVZweZjiQxUtEh2XLDrPw",
  "key23": "3TinASsJ9TdRvsoRfk8wJzbnERaGLXqkw1xqGagE74HSY2NfJcqp5rykfx9oHGYXB2TRFtEGYb71BtEBnivs8ntt",
  "key24": "4r7PToh78oqTkrdfj1hMgVc8Jix71RrrBSDFpJpcPT9e9amA3dCMrHjtjFSYAJH7NHX8nbNh6MiLuLtMkroYuA9v",
  "key25": "2iR1cyWKUhsFNseeaPwZbc75AMtxqX8oCbckfn1fzEGFETuSGWKGydwPq1rhM9gLhKewMu3XM1rhjXMTFdcrrTvb",
  "key26": "4V792erwt2peWKEaGZCTSALfYhAvywg6VPMyu2UanS6kjB3HC5R5CDQTrB6u56bPpLtFEKA1N92o9jNhhpnYsp4Z",
  "key27": "3ri5gsPaQnQreoEysf3dqYoxxQCCeQPDaZU49vcnLTmvk1jdqKxNCekCi3ahQaE9oH3ntaQpxy9pCHpFZAu5ZW2v",
  "key28": "3T1G1CvrJ7Fy9s5ZZGwecvEEopAYjGWLWTsinBEvXSWuRq1wsobNwz9fKvzE4CcKvzCfTUfu1F1qUsKH3xwPFmeH",
  "key29": "4aMGX3zptPgNdMZd6KQE7aJACiJ7o3vWLN5aibnk4mTy1wU7KCDG1sKmabpMNJiqMeRiuSVwvmMyYYWGt4gzPRrp",
  "key30": "45xLtJ7Ey7p9EYqmf2rJ7Ar9XxkzefRAkAUnqA4ngnFHF6uU7iL2jKEzYsA8dFLaJUPAiYr2bKae163REDN43AVY",
  "key31": "5wG871KsXBD6SZb2i6rFg6oLPGxPMdDoWcBevwMTRgi9jDSampnDXhqbfWVA8CqqagqcbjtaoTwxQL5gxxiF4NSL",
  "key32": "3ebjpr66mpGRWcAhurW371RsiW5mN6hJKAXQy9JxNz45w33qYDbm6qbViYDSJJecVSnBxbQT8GXkSp4ABzUxtThg"
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
