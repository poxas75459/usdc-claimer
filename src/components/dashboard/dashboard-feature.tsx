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
    "2znzyUEHL1i4d2ExQKdT9yXyqxDXsX68ueqq2J3r3kyzTYoFMo4qNsuuFjxsC1yXMD49yKwkvvMCKxDKvZKb3ERh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5quYQXbvDfY6v7fnpy4NBjns57QauQeq6Tb5AaHTZYJ8duZV4wAdDWkMLap4cWp5jQAtzaAEowWh11HiryQHur1k",
  "key1": "31bW78qcP29yxU1egTtLVYNYA7xyM1fQYenw5fn4dLNANZBKQtUb63L2irJkPV6TY61sckSchsFiDxrW4pvPrynC",
  "key2": "bjRqxvoJCaBqj5iFfZSTwPGH7ZKCEpF1H96KDbPrfvPV4xvxjeACRFtJpj8GGRFrht2atGoWGXDkE5StYbvpb4k",
  "key3": "Fn61dYBQLBm1hdHSwyAGZzfB56nVxABRk3tan4aSdzHmwcCg5pNwZ2EuzpGf7zTfeqGvZjjgx1tyTWoAY7e355q",
  "key4": "3KcLqRV1MkVxkSsD13MvuYsPBM8nqTzRxhk9xqtre83UEBnTNdvJwknrgZmVSwUJfmRoCY1NCVaMG5xqdSvJcWgj",
  "key5": "5tCemqUYevdjrvXWcewdKDzg5WnCtCSpdmqdRhf9pxJ22V3YGwZd8qtTLJaPSxNEa97EKsoGLXmMQwVcYzW1FG1E",
  "key6": "5Yfmf9a7WxoF8AQb1SFNvjp6S1dA73yYuSw9q5d4XxSvw5pAKgDSW3Aijy36huFNxbuvrLYTnhVqa2gnzYvEa4V9",
  "key7": "3TRJzx8BzRXvdY9ozN9JiQcjQoUMQ2kGrrUp4UU2FTqGJAweVFcYDzwfUuKxBRr79DPPBC81wZR4RytfTh87LyJ8",
  "key8": "4dm2eQCLy4RTqmq4ZLM6N9Pka2u4NAUQi6mRvxJJGPwsjyVZHE8qosmGkDw4CVQDe7w11UwHbu36tNBugq9K7nrH",
  "key9": "4pxvUc4wyxUEc2bBfWCfQqFuYdm3U74Gty8DtfRAxKf7fkMN3GPe1BaEUfqfqT51kkadFgVxzVYoFhdBVSR1QtJw",
  "key10": "4RxPkK7yCvnbWTDFagsqJQbV8EZ7sNckrxzkW46Tp67u3PoepQDpvRQUVMra4RZrNkczfyFdUMPXQ8LTwGDz62d5",
  "key11": "3iXsf6nvWMYjup2K7iKh9xscydrLCSyBiXAxFSBbEG85g6mgFrRDzeZsfLuwRgFCH9oiKkmNnKHFmkx8YJGC15uD",
  "key12": "ykXpbdp3d6i4vARcXpJBQvggWqLrBafjYtBG5s1F68fQLhZcSmHgPokxYei7zMQGcexsMJMjQMwS5QNiKrjvZvj",
  "key13": "2FCZcB2fTF3niF3nJ1Z8PJiTxpxKtn6R7KRf9VH6f6q8fS5vQiweMrhgm6Eei3QxKgUsGtKYHGHegrYcA6gNwFSn",
  "key14": "2TeN2B2Dg4tWDWoj9PE3Zv2FpFpysZ4zt2UcVuJMKNuxXNvDq9giAFnwtJspn7ktPgF8QmREGm46AjAKu1xHYt2A",
  "key15": "3ATN5Fn818auDs2wFeigNeoRQsZyPnQWZ7wPKjUFnB5XZa5k5H4RjFVhH9CftDa9p7pXaEoq1UeNNSfnDwZvkG8e",
  "key16": "4VshTJRPQjtBT3yNvCeKREisQLVeeyFuRG9e6s37JYY9ShcstnXiETaPz1DAWF1EDwHJT5eivUddzWVNSNk6F2Cc",
  "key17": "25pZQztd4hag4Z2FtEGjVZCVvWJexuv8S9YpkPXveMtVUC3cr6UmvGFKVo4jwFP9GhFSTJKn1mcrtoxS824hUobE",
  "key18": "MCoKF2Lmkq3Dq4rsnvoiAZevHm1xuUUEbyGnAoUmg9PM3nRj2ZNY8gz21FphiSqryfWY22uQkoqzQBsXQ4MWewd",
  "key19": "w6cuzmc38FFMJmzWGcw5UqNvw6NkRenLRuMDeUvwFGLoW2PNaR77uGjEWtnF2XqfrGiQZs5J6XxN1YAdyjbFssT",
  "key20": "5Ndve4E98wLycPi8zhFWTKzx8JZPdFfVwGX6LXeYUP8Rq5eiN7MfRoXtrAHMt1SzGj5tU8YmUHB32nm1FmgZisjD",
  "key21": "356x5spDfnjQkReAVXBNrwChcqF4vFPQKs6T4rqobXVVULPsHF93bkRWcrNJuMm1zffQGXyqSgB1uYguHqi2rhKh",
  "key22": "4Fepw3bAo9ehQMUbhwr7VHyLRF3T9Uxt7DcFLLcZ4v5Z9YhZyE1CdYXQVG6b15bKguVxuh5qCfdX2deDXPxGJGcn",
  "key23": "5dvC4a4SDwTf88CzQT8Nn9SvRNS8VxnQGP3tgmZ7SYsHC197qgBe74TrMD5tkZbFjcWbHpaUcU9TPprjsDWWjwN1",
  "key24": "3wasmxNkjcKc25uXqVqLpQJg1yEDMENqjCpQ4qxZyautj83tg1iYuHNYCFXeDfmQkVF4GADY98nZdDYfT47eoEf7",
  "key25": "3V7nD4Z22PWFKyF1NfCdXenCwz2QL23GwQBpJFy67pLu2Rug23iS7Ky71qqnja7NjPXaZTyPMckNd57CGos3JydE",
  "key26": "2GZzXqihPsG7oUgHdUd8utpUFjTP6x6Yrxhs9ohaAVVfqv16F8WosHKa58HjGSRUDYygNmKKekCiuPzCF31jcr9i",
  "key27": "3VDdCtLcqyUkw6uqSozJ5TimMD3c9y5Q1TKARrE9i53dyQwBssqRJHmEuJ7BA7vM1SdueLxu11LFbX2LmzBa8iiM",
  "key28": "2cZS98vfUxjz5UTVfLtgxiEF2X5kBn55ucdGg8JjH8PCBuGXMEvzdkp9LSGPrnvkeNbMzrRRvkUVPZy1sJW2tvyZ",
  "key29": "52D7L4FXfj6bct87Lq7BqH2sdTuXTnxhStNHEBVaXV3h4xATxNYLqFLq3PBBKrvqWsDVi8kqhiCcuTgig8SJwN4N",
  "key30": "61t5Mradj1N8kjH85qg3H7TXDVfuKz2F1EvbcNkroMSHL1N64MFZjFXke8cGi6zSHD4Hj2cJcwNA1TS4sGjDAFZt",
  "key31": "2yFQSU882bUCL3bZCDq338MAGnc4WkvX5d3RtTSMvaeCRvJUGSFTWcD4nXMm6uK43gXXsExiPRv51i5aRiWD6oCD"
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
