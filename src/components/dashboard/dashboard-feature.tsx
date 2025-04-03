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
    "4yhWR8JqR6v6MA6eH8qwWSQtsVWHAWth143XgL3ELx7h1aFYWwEED17aR3QkEo4i2wPW143vgkwcEFzxyQZx2Fd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GWp9uXmEx2jiV2qDTCTJNiir56AQ9vsHZhobTHc4BbqvhLMF59Ss9mN7NAZ3ap3nhTEvwHqbGxhRiaDQqouWB5u",
  "key1": "mZ1C8nTzB1gZ3KDmuyHfrd3En5zcFPMxJz4x6NRDvpZo8nPCm5v99b9P2qra2PyAfZrfVC4e7EefFawNePv8wKg",
  "key2": "5pDUze4sMjJu8BsfNxYkMtMmPuHNVYMfxiva1pekWtehieffWv5Xv5RFt365tPFLZVXYPNKZAQgAr6JUzVxzifxr",
  "key3": "3gjVvpR1jCdVbnpy8dUrRe73NVZV6WfEMzwXJzWcpmnJNee4KC6h5ULvNDpMwP19CHXbycJuaSQjGmLbozbtkd7M",
  "key4": "MyyrAbohSskNEyNaVpeRA6nSnSG8r9GUMtJd9disvmsvaqm5F8Eu1AhrEyu2s2DR1GdGxwYd72qia2LUxBjv3C6",
  "key5": "3WTD3BA8LMNHjjGKN1YKSLQ4hsE9FadNiHCavC2NWdfUNPDfvgN2KugGxPpodkobsk9dPHCLCCQwtL7DthDZGK61",
  "key6": "fJxSj3tbediN6PJvEKziDwie3NwgwwL9HFZiGtpdzpR17xzJFGjvh1YJP7m6whLZSc4SpBeihrREGswCajR8dCQ",
  "key7": "4ZJiJ4nomexFXMqkQEi3Dgt9bbzgotYCmn8riLdgLYasgy7w6wsxWewwn5MEqQKSbbmeZAHpCq3r9Nqnzxm3Z3oi",
  "key8": "3D5XF2MXsFVDwj3HBE3ssvn4GA3JjGwSfHJDCxHyxhjLNCDCULVVWbns9a6pY91EzWTiddeo36UhsuxH9MwQ1xnf",
  "key9": "3oQCrVnHAWcgFKkLdJUB5jwdUw7z8dEgeZiP6V8XW4u7cPQbLtJ9LgSBnU9YkN91KUtvXJLcwWogJ82QGAZSu44r",
  "key10": "3gHropcPGGvXQPVy1GtYrC1EM4BGMguGsU6ZmGU58xx31WmDcAm69hDkSufq4kaePGx5up62wTSboCZYTq5KDNVq",
  "key11": "3EGTAxdjZyQFXRMjdLtfJh71fr7BSBFDsK9VTRaK11G4zLj7hjjnjymraXSns1vKza2esxuvaNVYF2ybLz6iDEdm",
  "key12": "5yJ981coJ4EraqQGN5kVT2nQyjx3Rwiiv1q76Bm1vGHz529wHuHGiuAjqfeTeji742zGboFq2KZNsKkaoMgwRcb3",
  "key13": "4YcHx4YYcCDqR52ZNCc2tn5LTpb7bCf1dVwZRPTjMVEZghExpH6Y3KdK3AM71wMy1Zwd4AvHSUiFDGbhXqMrfy78",
  "key14": "48kYGzSKSqzUTMeTEoKH6L8j6u5gQp2xdXJ6aXc3NNex74sbdKCTf5xdsN7R4XGwr5fNd3LcLgTBo5QcBMbBfFKz",
  "key15": "4EeC2L9VAYGtunzZtZd9jBUHkERpZ9Hn47SfSSizKzYdVai81EnPJW58mXK37ZdShynxKDtVaydTzC7ozPZFQZMG",
  "key16": "bkN4PP2jnumtrh2UkWFBN24FVucSqjbwSdJ1a3aYfAmUTv2XxAox4aiWdKAQFp9EeanuHHg5FsogZyFQYgKHEbN",
  "key17": "2ngPmiapC3q41PUGc7whvVMx2nmpAriwfrHXyBTM35WimjJ6hXpMFz1KBfcTFCCQ8nTw6FRuYdme6MgXbPz6u6fy",
  "key18": "2awvBC9wxNWNgUPHYfp8xq52Q18RBe2KCtjwafr6ptjHcTiRy2KeCJoB3otsXAw62SJKVsmG8iQWVCBTt3ay2xUd",
  "key19": "Di1ps3ZUwbV6sgYoSsuiCQ1pgn3sA1prULYGiywz2cZn6AC4knDeS1CWvZMib3RDgpDMvocEMCKyi8o3nBKWVHt",
  "key20": "3UXqtteiY6UufKkEH3pufUk5mY7U11PYYscudsmmpnS6KNpTKeXjKUaK8vWLEA6aKnZooV8Sxr4xdUn8SKV7Ef41",
  "key21": "n675hFBHn8JPUrUhQawuYqGXbqEjVp8WaNLFaaBFgin2Yan9qz6YC9aymMMD2hockY7AFx4MRYW27drBhGogreV",
  "key22": "4xkCpXXhNVpGvboAwRfMhQcM4XKbXpQFSAKQNhEHax5qiqotbPFuMNaJ1k9rtF95mVNHAkepvv3pHwCFMNvnBPyn",
  "key23": "52Vwo4WdUvLxaFMKJYiZTZzNn21iDbthFHZSWGSkWwwtdJeZxJskNjKbYDyqDf7S1RxKcPkmRiNzFd1SPWZ3mwJB",
  "key24": "3ttrgbWQXztT6vAjstPhk8KWTCn1idvVYjYidrxZRxkf1HMveViLXdXh7XX1edcQnBthK7J3GbpvQJAE8BTs1zFm",
  "key25": "5CQAQKpnKwyqiFDTyXpjgnwtiLGdToEU3YGJD5zyPsuVQhhj97YXvf2bu5xNSKAFhqRD5ug3JSmS9Djr9rMRrgBf",
  "key26": "3PwVao5grb33Q4by1paz9kAUEHjUeEtBncrQEsGjS5Gwszmhk1QaxBRofbsoJRD7devvZiwc4AJ997h61x8jMSDj",
  "key27": "4RASstJdvqoVUA8hHX9nzaB121UuyQauS23yhRrxDa3FzwfTczGXKyJd7ZseSXaHpZdQ2675fU9CHh9SaBPbkaNa",
  "key28": "3rsCLtWWu7GS6ibpL42pwCcFLcHJpzGhp1wW6fJzo75Z1Z2sywRQkH3sZQe8cYEkw8SpjwVPduN4hmtBAF9WSpyG",
  "key29": "2MprykCsL2h8TbLBCnv2mUF6cofHoPu8cJFNMt4HCzHgY9qdbEfW7PCZVxNw5NrxaBzJ2MW4CY5QQKLMAkHvtkkL",
  "key30": "5JirFN6fkQTiZFJsTZZNYFziAepAuiGGdBB8XXG12nGGmpuSZQE5iccQ8D89f52F5mXgdNtY56WLMSLtNDRY1wvS",
  "key31": "3ki3gofs1pcuFqCFbvmyVJdUAAFuPNkUD5JebjKiCuhaJw5HQmErTWMpYCZWermkLnDZbt6MgLMAZyxU7TTkqYcs",
  "key32": "64FwCiWDcVbvV54SjmNmcthkV7GJ8JHroRmWHW7DL1tCQgjorAHE6gRaBwDovFKrmFGmyMMpVgQZoys2Q4tVhMRW",
  "key33": "4jFi7oG624ReW81iRPADX7BwTXogdqEhFqBjY29RNAR1EE18ETNY1m3HxVAJhTc9Tm2PPKen5pAeLSuQV3SyB1iL",
  "key34": "5DWrsxcgEh1CPMAoAyz2pvKYLCio8yiDcDmcpEPwkQBu4vFD7ubFc6MT2LxfzYzbS994DjTUgcyAznthFMUmN7N5",
  "key35": "5ovK2BCTvR7wJUWnB33vwZttpvRe85xhMAGVSdiFtkwdTSHHay5C7MXFLeKYZE5PnKWLsBQqWYYpLJxPVo4ZkEac",
  "key36": "4G2WYWs1Gkj7qAmGEgd7DwPMpGjsUYacutK286QT3RHzUH9JtbWW8X5jbDMJGw9TyvrMWBEN1BEyUqxdBTQgDjvi",
  "key37": "47vD6fFfSskLemkxtZeoriHLrGxakTzZtaqTYqy1wJ5ZaQ7LjTeVqWDAQNznu5C7tWc8m2Tv5S9DNDiL72WYPG56",
  "key38": "bszNsYcHvPZmpVJtXxcNZ4oWm5EF9Fgf4aMoMym8KYFmAgeFpQJzwVuQiHeAUPojnxbMs1XZirMFvWhggs3VuVi",
  "key39": "5arC4TfFYcfjuvRfk7tjZZao1M4w4EBkPRDnX4RLAJrZSnuzm9LTpT9MwbK9UEXwaFyac6PcCEL9gSpKJwwEehca"
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
