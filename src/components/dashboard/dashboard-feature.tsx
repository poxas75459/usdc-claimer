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
    "3fYzRXBcEuwtDhBT8uE7gpAYHKcQm3Jh6RipqqFvjsbg58jRwnuDV3EBGKSJSQNtgDp5fYZdDRa1gssCTLqApFWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B3c3kEXCSwPJUyWneda24SVXKDYbyzL49cKvtTcEFBFtbDRSg1vCaoWLouZZkJR7oGyHYvb8D6PMjx35EAMEAE9",
  "key1": "5fhbqZzB2HWQPWWL2xAM6GiZa7ZL22tf3qQRSasadPuEBuEHWRyLRipV9AucapveVxHpccbVSj6T6hoEwFaBnBMa",
  "key2": "52QXtbgGM8mtP66oX2GD8nvAie8yJJvfA2jqsWGPiyY2g42Mr8TuusvzME4NLHqhjRb3S9yPLnzCk4qQSegwy8Tf",
  "key3": "2csNjbzj6ycvYP5MHeEktKruyaefoUpJB28DNCouuzG2cEXeQzFggn3eVAZoiUZjRBBcGmnZ6cMMrTyuFot4zP5c",
  "key4": "f8Wnb3dBYZ3rKYC39T5ekCcXeHV4173WzM7mwgjHSYBfuWeTnwNKaPf3nFp6fVcCDvJ3dCj8YXYvog8NBC7XeiW",
  "key5": "2DLUxaVAT3BexSc3TBab1sd4jVvAGqHrqxrByQBSNsfBao1hFQ7vtQnjDhqysbTeEsF8YDFMzZKpn5Heqfu2BnfY",
  "key6": "E1m6TXVzrJiUdQJfsAXFgXFAkM9vshurjDd4XqFkh6z2QBkSobD1SdLWXfEaqCb5g5PnWQBCPo15BJvdPUfHLLN",
  "key7": "5HPjZKiHsdcYhv868mgRnutFXmT3bwEjQX1pFa8qD9DTE2VProPyMAbHtdK4E4kw2WuY9jQqkPPpYPdEkS34TByc",
  "key8": "4BN2s4QBMtpQ4RKECU3AUJUWzK9JvQQrRGZKsWcU9x4REECQiW9kQmVKX3go1uqUMpDzGhrf2JEkFkiaYs4ndxSg",
  "key9": "4NYcPpwJNoZsPXCQoSVCD14ZBSugUBQpwU8121T7vQuac2oLqUoGz9qtCU381ZgtU5TCkr6vCHkfQo1ki76MPezU",
  "key10": "kzpWpSn5cuUdEcQzn9LSPaFrV5qY1pJNWY5RwvKgEf5FyrikPPPL5upXKjVYXEoCS6kz7Jm3Fq7g6P2XQQoS95k",
  "key11": "5aeYKms6mYk7ZB2cLLweMAtZab4RsF1warn9zom4ghNHa7iz6ZTm3hVfsDfgdchd3at8W3GDycXAKGVjhT8Lzo5o",
  "key12": "3g6AcAcVnz6MKpjwKLaosjeLshFhkmKzkZudtCtDMiv8mQqkoRr61e5btzZsT8jNFgB36WWXojTXo5ZRMHvewp6Q",
  "key13": "2VVGAzhPyT8fDHzWCvnD8EajugUsfbeedLC1fWcjsrSxjwK3bNjYdsu3Bq6C9sxRZVsFwhxcpBnUETGkKGpzK23P",
  "key14": "2oXEUukLbrSwYptFpwVuycrgLcCEhssjMsgtZ4P7Z6xwi4dQ7QE2dQS1kh8WMmq5d5zzaXX6djcSp27fasLbC5Cz",
  "key15": "fuY9JHR7UeT2wivPykbDxc9osLzqzzGz2CJnyCvJo12TebDFJQdpL2NdxrPMMJ7FNE6YeLqQ5iWqwfiDSmU4Fjv",
  "key16": "4FLjBsyV74HSJesXbPxmT4P734qV5pbvNKrg7iVbhHXmb1qHkNcq6MnvHLL8rv35VTUM6dxS1HMNkbKoWRkgdQcK",
  "key17": "5aont1KdFXwKoRYHUN5tkqNXUog4rfvPhkAje8gXN61uroXrwGKQpzWK7HYTbmLViHGRhGDemQA9NA8UWi8Ad6ni",
  "key18": "25RpXMtRVJXP8A8QcJxguezA53eDJexsNaUSr42jBKaU6GdoQFhFsXedCLR87pAnnj45t5jU9ocZRgHREjpjVL7N",
  "key19": "2aaeYrf9aMDm9TvyKEmSgopoaKNPuiskcCP2kb8UU5DRb9bL9A7H7s6XzbmJLsjWbSAiw6sVmSyiDfectSMT8uRk",
  "key20": "5puhAuho5QqZ8zkhAckVf1LEWJwAJDsD9YDPc5LgdeQfGbVRDxWma3zxURrKaCti5u4E7KJ1BMxhRhT4ahQNeicZ",
  "key21": "2YS2gQoHTvNnHK5FCA5YCKvUiePapR995TuLo4CUrSBTFtxbBjViybdrc4GnHCBfXexGD9gN6ufeRK1LHgbvqjXJ",
  "key22": "1vEwxuX1jyPt5D8e1RW31nu7hWZmDt6z23PnbzZh8GXmSv6ScAKEnyT7XRNDwJfFgiH7NhdzKt3CEt18DyKQhkv",
  "key23": "3n1TdRGDoUQRkVwX7DDGw9SaqSu77dF3yUYigqjiNbArnjwCBb1fw5nfLJfZVFZQTzxrvUka3EzVT8YR8WwRCW2M",
  "key24": "oGkXfYmvYyayEhQ2Pf7kUzVSVbCWtzJY1qDAmV3x9H2yqHsZLTeXAspx5bxD6pqkDNUFoZHqDuEY27ndvwPL6kg",
  "key25": "63kdccP8EHhgykwGNaoKVHkj9kPdXC5f3Br9Hp9oPzhtmys1pG6ZC4Ho5HCaegoc8wBBtaJpNeSaDSRQHFLkGvH2",
  "key26": "4mKVkztDjPfGApHmYqVjopQu2bmQhKUorBixtpfarsYWzrTFHec544S8AFMo5KPNy7wNZXuHvVfVfyrDdrq93B98",
  "key27": "248SNAPx71DVd2ZipASVrp68zAEaVfJhhgg9RLfFoGXBBzsfNtGftgzFUG4mhH2tXeniQsF6mzH1ftmD9BzH8mMG",
  "key28": "3xhLwnTjSfGiyZh2itAEPuQxinaVtYu3ePYGNTF12uRhKv4fPKJLEp9mDeU3kCeRW33KpRfsiAuF834jNvE4H5Pk",
  "key29": "5cHouRE2riRFG31o9jJbDLp4dhf5cqTddLZoppc4XYhgkPnyggJPLD4gypFGSATJ5nvw3iQCHtUzo9NfAtxD5iq6",
  "key30": "HFnQPJaJGnm5jMdtc5Z1nMKmsLTvLTWriUNneTmS17vEZbjXusn8aYtVgHPtwHvak6Txa4Gw7f8qGVya1RHoaL8",
  "key31": "voFt3krhrjvWtZgKKnKe5twcXSjbw6xfWBXUzqyCs88fedYqVhvwtzDy7wVrGaPGicA4dKfxToAST8LJmT22XHh",
  "key32": "5YhDqpqB9hvSVMg4kYdSeChp5hkCwMU4nSN9woGSpwVNRQgkqhe2oTXkTFP4sGmEJe8G6SqcqG4TDioR7mFcaymP"
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
