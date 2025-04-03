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
    "4zpo6GdhWmo7QQJSmTWeWgZaS3cdXNwqnpgrjpEyDF6ys3QJ89hMY4t5tV7wu8ieekgSsrRxWyEzzA5fErcNthwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uywib2yK8NfBGk9hrPPoCbJZqeZAbFqt8XLjTTDJ6sUymgiVBHFKpNUuxBagtdPNxRHRtgn63GYbLfgq8DaQmPq",
  "key1": "4kg3EY4oRAWfJPxmJQPa5DKcf5PQod8h4Y7CELJQEr1d4Em7usfuJHVJ26i1zBuS9zdSMYx8zWxx4oZghhThxhTa",
  "key2": "264wccFZH7jefqKtmVATyKoTBp87B5KRvHrVn1b8BBEK3Hvn1F4rgKCHgM1uxiqmtUdA8oXJAqezCfUtHYACPHgZ",
  "key3": "5eQpwKAEVx2Hu6vjedqcR6cg4y7nkgRCZ7Cm6xyt8CtTLtPoGPdvJFgtnhwndaBmphDafu2P7kuwctMybQGYUByz",
  "key4": "2WQoWAAZLse2oNvqqGmKLvSCnQLdqi2RvbBYfTSpquwXezpTmsJW21iymJTPJsMpWRwZRSmhsgmFrscDi3J7wt8A",
  "key5": "aXzPUE2AuChBCpohBBDegtoc4tEd3ii7YNvMpo4YGmrjxkKhUL6Jw3eUDp6f6uxpa8PPKdK11NukAzGsZPJdJG7",
  "key6": "4wgjGa4kwrCJpJfMmTpfQtYFkueZcAHimBZyA26PYxNymvAFb7Zo57erG5pPfzqFiLM2ucTmBP3pRXbJJXm3BqjW",
  "key7": "2xbNsZ78mq9SEoWaGfQbLGmYBSc7eaNshN7dD8fdKj17XGruqVutPfETPvqSE5dpavWT5u6FfaQGn9gptB6XR9P3",
  "key8": "4bGaAtc2YqPrZP1T2iBHYbJDAPkqJaDYYGmvGMfWaGizeh8k96Q2wcoy5p7M3smbQKtto2okvm3bvFK2NL3k1Dgg",
  "key9": "3nRVKipnxmb1h63arPeEV6gPzqyX3JqhEpoZUnBmV7srjxXiJygLfWd8SfxtAoUiZS5LzM5RQcp3DK44rUiQcuMH",
  "key10": "546jTP7drHYpZeH1LX4s2QH3sUsiQRPjuyNXmBcgNQoJTm3ixfNr3bPNZUNz4FGPPiCvkEF7uQnKCPUsmqXwxftS",
  "key11": "GCcQfdkTeggShyZgarBA2AKhSb32aXEtvirDhmyMKxD5HMDU1j76XTbZ1KRHfekPe8Q1v8fZMJQMQ3ya4jTo9XG",
  "key12": "YRuSnsm9VoUQzYNQDL4ALvx7AijuiaWLwyMQfmZ1ZK1KqdyZPUY8S35JQo7ppwPUN8f7KYRvFXyadJUyvLwUG1h",
  "key13": "2Y7bhAZJvUntAZsarNTP7ba9XwWdtPqs8NpRmDVUxAjBewJh5haMfYubBwxJwoNLNG4xgrxaMG3ZhTBLG82isEzD",
  "key14": "4VeUjJGie3aZ2oh5yeKLeeNgKe5SPSG3zJ2pNVutkSMjuBCgq6kPrXnhHcdppSonG3SchAgToH1dNWomp3H7xkEE",
  "key15": "5ucmK6zPWeRhG8pDjpoBWkrPHK16j5EpCQoCjiKKRq7r8A5WdxUTDtEv9Ec9MLquPUxphYWBvdyLzF1VGwZ6VtDS",
  "key16": "3Y2b7pDoPZAJhWR2bL5NvzFnNP7wobjsV38iF25wc8aS5Mv8wo22kq3SLbPvGDLbPSQEZgpjgB1pq2j3iyWmWX7w",
  "key17": "4ZzJPkUjg1BL2sKrHRu5dX4agb8XrBN1bW3JwB5TPk3yVCkBdWuHYHPUQYmTbNjq8Cws4YSyaR9Hrb48wWwFwwK7",
  "key18": "4qC34YQ9bmMQKdBEcPt76dM7Mpr5ehBVRfGEjHmfxxGWjN2FfHfrXaDhEnraAnYoVJN9bAH5VJeYSLsJkhaAkGK9",
  "key19": "4bzNVmFXxyvHmAsrfshk1h43pmmSaL4Ahb8NwQdeJfp57WBG2BW2Lx1v28Qf6LpyV2J3tLHFWkyYScVY9EbaQFWn",
  "key20": "2DqSE8Gt8dtU3XuUGG6oi5vMJQ659UaLe1RojjfbxBjzjDVSFg8WZQB2kCTmf6hBzFzdU77N9pujmTCHyqXXnFtj",
  "key21": "82NCLfmpYZKmS2ewB9Xm5bXqfvseqxy6o1ohpQ4R6f2d3zqQ8eUPfXbAK1ixq1JEyr42JTH1WM3L2jaQR8nUk2d",
  "key22": "5fdPYBojPLd1oR2R8M7ttzGJ6BMLHDBKGbsvv6z1SwyDzd46GSYX5T4wLESowdKnVancjQvyjP91w5pLxnW1MvFa",
  "key23": "5BVb2hMEmucv8LxTqNtKfJrnyQar9BB4phNTYgreTCBhGdjQRR8kfYQ6oTtHN988TomV2LMh31u3MPe4c1dZKgsM",
  "key24": "4UtRrTbCEomZajV1od76EjBx4zbJuvcAmquQpSq6STgTDkFaRicQn4edwLZSvCCPyumLbWKVtYyRCKu2GXe9vBT3",
  "key25": "Bq1he3vi48smauDVAZdXE6QRwYnR5unPg2UJstkWzS4NsYgSFiduMnpSozJ7mBXVvSLFKGbvkwmdupccwfGrRP1",
  "key26": "CH3dnFdcmuqH2nydtf7kZn3keh6bLvtScnPudLygzG9vAq3Ta8xbsQcMsxropS1vJFXkpMs1WrK2tN7ZPwwrexu",
  "key27": "2rpU3woGkhPhkveXBT9JSvPqXYkteqsXoiSvbQYR77EA5d5FDRSeBYnanVNiunoCCoRS9LL642JzTjNuKK5irYjV",
  "key28": "3XHZAmBAVCHAVKV3FnKdpKMxdTEB8Tb7K1YTKekHhaDtWDKLDeMjWFcVDuAxiC3rhErdt1vZKyVGns8RNF4tTto9",
  "key29": "3FRhfSszCynN6CWMLF8463d7EEZxnVecrPuuUPk55nxLWAHunT7a5WH7H7Sc3rqd4sVWkNEpLPJooBG8J8NrLW1u",
  "key30": "4EQZdQuev6hfWx7eTo6CTMKuWw5Jzhe8JDEJRqyPfTJEQzu3WCyboX8225A13YZZgv7ErVWveN88ypH9WQwb39Kf",
  "key31": "62yrk45rsqGcv7rWcqbqtcsEQaZdg1pBn22TKpg1AjYLaPTBhdsd3GNrqSYAnxADFNefgr7zC7C3DVS46qLj57E9",
  "key32": "42jyg8vWqw4UzoZpjEeoPTP8fR52Hy5xPjNweyD6eeuvhdjyMDKQYEdE791D3HrykohxBQormdAqXazDLYGw6iw7"
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
