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
    "Skg8GpdBDYhueutQM6C76z3Y5fR86RNPRARFcd5wTNk7o3CfjK8a1vnjKxWD8wkbH5WTx6jKLN4oEozUT3VsfQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4RFukXdmVYXcgaC2mHDxPXDyPEx9Cpd1rKsa8uxem9y7cnzgkYaT5XPEHHAiKh3KqzDAAcH22HAJaMPYS6daiA",
  "key1": "3mfTm21EaQQAc4MmN8c2arm75CN8TfGYL6jDSwT1u9M7tzd3r3azNzTjHGHrqEJQyiwSABrKwfeYibLW88apzmNB",
  "key2": "5XHLDWhB4VCMGc6ZApZYgzS17fMcjbUjpf4SQeMmWyqmr5EdxXZZH2xR43XmmNUm3hkhjKRKwhTSuuUkZcUoSD3p",
  "key3": "3jbdmAXJ2iDkrUPdoP6xtUNSg7omqByhmmHHoaT3KBNXcn9ewQrdhK4gUQ5xYMPPCyZ3oTAjSvoGhoWXm59eCBje",
  "key4": "3cGQodJrL2jLtn5LT8PNTE5VmDnYUUWguEGgStdzW6tbQx5tFUpp6PxW77R1KspDumq18gwbRRHTvwxz54YSEqQo",
  "key5": "3ekdydKW38jejba6wYJnunxLNwmhZP52aL3tSBcWgV8eFGo2b4A86LbETLUsKZ89zjAVnDSgaSUkAheHE2b2WuMg",
  "key6": "2TUC7HtRmEqLQgs9HWP1HxRHhqRT9UwUkJ9x2sytjdurFWAEBEHJcnEFL4Q8NPfsMg1yF5QA8hfGtF5gzfPkpQJq",
  "key7": "pg2VpNv4KxYtXapJ4gJDW2Bw15dvVtnbENXVDcu56UgGdSwkaEXjYYggZQH4RyZQsAasjKdTHunndi8CzqVeo6e",
  "key8": "2qh1KWsUrYTgKYrUZ1pKmMzFFiYmJYxyQBTPTiDtD2X6TK7p82c5s6uLYsPibYYouNmjyqo53pBgaXdmfuMgBJ6K",
  "key9": "4ibzK4ukLwTbuzZJJ6NAqr7JUivR8DLazgTCT4GvkFWXZaSQhy3zzevdr9C2C1sD5wYUhzgBsJ9CKAXkB3aQ6PDT",
  "key10": "5JawUk4rgHTtmc6CLmJXSYUz2q4rb6GaF8tiYyozPHpEhsszRNDut6FLtRU6djga7zBHJPBq5cJe7VNfqdQWWkYS",
  "key11": "3orVbHWfgNBznuzuP44rdATmhC6aqKy4rrMfGoaXM5aJsGGBk8rHcGvHHoiM4g4H2wHsE4c5aechhXq6kfvY9zdu",
  "key12": "4ZBS8Hrb4gZjArzZA32NwZ3BZ6LyjMjEimhUfH6xKNmr3KGA2xTEy61iJ7CqcgDXdf9qpJuK5d4VRz5RjTsDWrJ7",
  "key13": "3rskcptih9e4wrEKSepAKyWQbzo7qMm6B9DLm7Vek1YEFffTKVmiDWkViRKibATf6rqSAis2eNVRe5vXoT6FR4QB",
  "key14": "AyrWdL47UhvCTxJZJ92LahJYf4jjLzsKZkitaQhoZYnmMGDD777FMpuAwyEcAF1JVct4ahJr18sTB5aMvU4N1v4",
  "key15": "3H55hkRBqLXLNm3gV7EBrgsCiTJDWVjZFjuLVDxD5eNVJ9ipsxubH1Yjbm8fjbynheAWJcfqZWBVX7kVPWWpc8HA",
  "key16": "5vHdE9NHVZtpT9AErHkPYzirmKhFN8q5MKxsuntNwkEP1WD72EMKZxAMTxVVFZhRCcePoYnk8pRAbgYfnT8Q5Zs1",
  "key17": "5W8Hmn48bEtSpQczQWpcGi2FiiqyvcL4YRiw7RLcEnbMQVKcicZR4rkxaELpMvAX75w5HXLg8JvufnwmM17Rp8GT",
  "key18": "3tQwQMtg1VmqBTcgLPK6nZYd3TXQaca7VoiwcFgd1QwHxitKdU38S2H6G679e4sjMHYBwbuuS6oPTYNKKzTCNDM7",
  "key19": "4gR9a4hRZ9VrD9mQjBXuEYo1H2HrWeLdvQq9RV5ADkdggDKsFrn6knphbvAfudGcmSwhJChUhpZV76SY3bnqnLfX",
  "key20": "zW59Yff4WVV2Cq7SxrmJGAJYqSErgcMcKk5iwzYpX1CmBNrNjEe4wGewJz8fdnS7GqWFDQikqyD6pRbGBDQ77qf",
  "key21": "44BQ3HrAXon8ynpcnHEyoLvdgPNMweZUMyiMNtp5VfeDcZQwY8L8DUATz92ew24Nc6GZvdwLmdrgYRoLTbhMhQAG",
  "key22": "2vXtqydmCarKbu1VRkQcDLmZCfBoXAHqMpwRnvtR6uKHsY2XJrV3qqivdtF8QweguwAMKyuBmJNektFizoQ1Sihm",
  "key23": "hovkVSPL35BHuQBdgR6eq7UCUbYF13RRPKwf5w7U2CnsMe6YpV5KzxLhTHrmCAN4JEtfpL2uQgUjN9sEwzXvWQy",
  "key24": "3yKh8ifyZ4MkoAtEhxQ3uLxs8usSq4qQrn2LWEHQdBtCbnnnvqbMr8CTg5dUBs4Dchsbu8tAF7x4SAfdun9qFR3P",
  "key25": "ES4w3rJFETj5NBYwkLcuTuZ6arVB3iCQfWutV4tVgtYHu6qLK2TkuRB69mtPVcWF46UvWxcDvajMFGMVTdKziVq",
  "key26": "3cE2yD1K3YRoKVoqvLy2nKknvTB8ESRVxvL85zSmWTsHR1CZGPKZtrs6LX1HfThxEMCncFyRgEV5gaSYUuvnyg84",
  "key27": "48jSHLat7oZcGD1yC12buS3kauEudSS4Vn3zVD4teKH7RGgnuitEyzWcDBuZ5zZyR452seqJAxKSmFS5Mqtq245K",
  "key28": "5cvAMKdYdLUfBsahCReRwMVDPRbSJ3BHkKASry4kV2JEiyHWVrXNz746LM5sR9oduZHbbeorXtkd79weo7dqgff2"
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
