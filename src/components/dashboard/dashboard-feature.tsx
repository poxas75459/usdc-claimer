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
    "4muEsCn6hdpCfcza5gwNJ21UdPWEtQGEfeLTMFqukxQRaW3L4vtwZdfRFgKavQzht7mqQpX5nDcX7x9vM7m2uBeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ciQMHrzGhL3h2bgtNjNszhRZA7DVP3niqMdMsRevNgxSAfYpKnoEtAbuCCM2GBCwHEZ5CSBaGMX7nJG1bk7cLyJ",
  "key1": "gNnazwoNuSTXKUr4nt4NmsGyB888weLBdmJGGs92Sx3R6E2PpLWCJBuUtVfotTvBqAsKqGL8LfJ8k1gSb8YwyUa",
  "key2": "2LqoFwKFfGDRWqRCcKR12mppm3J6XEkS5vowbXy2tvAYK6e8tDgSY9De2WE6ZZEhoAmjqhxkE8H71EDp7mSRdTo9",
  "key3": "AmCZknmB5YUHpJUTgQCzuuov7ZN8bgC7p4D3hfKa3nZiKuRaTC9UmSnrdjCNsx928S7twmC4fryXTLbSjpV1ZKj",
  "key4": "51dba4bqgz2FKKYvwJBUW71RFmPfEiiSNo3PPfThcQdLMkoHvrsdypqK8ThqzGFt3a6wfyad79reuxWDzp59HeFY",
  "key5": "3S9ReQqQ4jvP3Fu4v9siUEDYNNpX8yjZSUGXo6sXWQMF4hTThmks6JvWuna5V2YbDwqM3h2YKpDnxPuW7NDZMRaS",
  "key6": "p9LHo6wyn7NsCVMCZAbeSRuTRjVwRDmL5Y1QVyEs3we1cu5j61Mg7fAQZ3RTz615Ja8SNMZr1JhaZLP7rsZ1Vtw",
  "key7": "3yvrw8Mzabr8P8dSjdGuDJTaCcjetN6qVYtiuRuSHx4gRU1GNtEEq5zBCiTTnMZoYwbkFUPL9oTEW5Uob6Jm3NkR",
  "key8": "5c9EBioTNFdJvLVgCWjSQu6HbkB5x37ft4r3PAmvbWbVpwijD3WcAuZo1xpfk49KP4CzqpEtYJEG1gL1qy7k2qdq",
  "key9": "55txJjHLssqg2AErmTkU1ohEHU7EYYL1jhUW2pmvoNhyakDfmKdmqR2eix2QJ2eGDQgMFjnLq2twBwpYceRu2oo",
  "key10": "58GxeFpzkoJqEf2j7HMBVUDEhKFPRRaYQMW7uFLuX5EVuJW74WNPzx1GLDK8QaRe26TLqAp4kJaS86uwNTUtqrZU",
  "key11": "3UEr6wVvcoFXe7okbqgqgGqszbMRYZ6uHSpBRmeZA5komVMP87iMSgeAXVC1pDudyxrizaS3Mbvokh8rmeBMZpjx",
  "key12": "3urHV5ZxJsWL81q7YZSCyQ29zoJZ4u5uJQqj2s2eR8e8bh3eTPDbw5ER8xDDn3QeGEUbvyBdMy6ZwqiSuSRZpYWQ",
  "key13": "2mGxnmRCVZEVaC5pv1PHoT2sz6hfNuuLred9XFgpsHYT3KT9urowCygh9F3mYqHqqs8syT1sv5zMhaYeNJUC4xWi",
  "key14": "2JSP6znGE8hsvjvaXXZFtFd1Pxj2RwVoCyBzmRr9kuZveEQdCQn6QhpKXMrg9zquyvMkha6iGB3edhkorg7ckCho",
  "key15": "4D8f8wS2aGLeZc9LUPq6UH6tYEr9Mb71oMmxiiinmqTs4ajNLhaCYfnKmNjMf5rgKQTAHAhN2PNxqGKL5jEKAYxN",
  "key16": "5qJCpsatc48s7eWmGSSeEps7c7HjA3PqqXqZW66FwGbU4W3mGMjCuGEGBzqELxpo83m49PPfRFQs3coqPmGYLKWv",
  "key17": "5RbJLsdaALa2oQHFb2YyqMFFJAMSRWN9CsL3cWdUkJR871XkkJ6sqRbaqGwZ9R1Ldcmr8idXmMAUKdnc7ccwwv9n",
  "key18": "4Qrxs5C2eAfeShm8d6tdjCG1d1j88QB2ru3ch5HSWNcf1Vbggd2AQnAFwg1z16NG87BmwdHuiNjN5bxN2kMixozw",
  "key19": "3S63bnAb7eYEaBT5XXZc7cU63dtMESvbLZNCQ9JJJ6Futs2yQoEnQyqzKSpdYR9fF8xb7WUUXs6GZCRVnRZGd7QK",
  "key20": "z3tkTbP5Fr7p4mRCA9XAr7GYFG4ZasEHakTnGjKHdNh7sTjutNNUkAVLTn4BwF3beFsKGNWKrNVW7DtfuVog3kM",
  "key21": "mMxbDpVmLRMGh464YSyc5jBP6sNRtXne63jpV7qi4xJLLxVQMP77Qbf1fCizPykcYGdAYiWPDosGHaJE153yygP",
  "key22": "24nnfqmjsRwxwtSW6dsPXHsRqEHjf2NsFsnUYGqkcN9JrBftu4BpPUKuaJSkyaUGpG3gCV9H38PHR9Hc1JXsgmqW",
  "key23": "pg2Qjd7Z6ABeJfwSnaZd64w7pCTJoyVRYF6cai2qEKD9tR5T7zAdNDwka7e6pVceC5nSrzpLmE5varZ85KATs6T",
  "key24": "1Uk9Y151ramQEkLtG5zUGJkMpCrCgsQxbb8DJpkVmyirGsuTqC49MvPfYwEZFptD5MtWTUEMj4FSjFqNuvfh6rU",
  "key25": "3skeURqTGx3THd9wupy167mvNcfLgAHdannmnN6LNeAYRbKueacCM7pHtrgDPDk4BiZsshfrmWtTCQKvmWe8BpTN"
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
