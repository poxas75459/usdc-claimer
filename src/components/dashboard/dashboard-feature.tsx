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
    "47P3xDizSQ9BmVHVUCjJ3udWrJn8DmTEE7TsUDdCSyNooKT7iGGeV9iR5daHfTnxRWKHHzYTfiFhedP6FpSjjjxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2km3PYmHoujTKyxk81pkreppUbadmUiyVtWofjPPCbP5gs8SFi7rvu2sV4rjn1ZTjk5tP7Se6pUo7tEK3TYJitDK",
  "key1": "4xDPVhDXRAea4rnhEk1kcgbYArZewzcTT6LcbBegWv28jn3yMfnY2duBF11tgfNw9BpgrSN2FJkTX5EGEZMR6J9c",
  "key2": "oyiE4z2gZ1ArXMuTZAvPCDNVzH5dPLhqiryTAVahzqa11k2SLM1br4H34JKP7bDU6PZMzj2o1ypCewiPnLaNcKd",
  "key3": "pJxoh9mNnjAAGmzE3UccBpe2kvj4PVLrK7r5rW63Aoaq1SdfN1T223FdbzG9GocaDueNe9beXqS6nqovVtG7JPJ",
  "key4": "2iXHS4KkN4tJQqKuhyXcaNzSZoiErLtvPChmGpdLiwt29p3vkVJ3ABEomBj26xmiSXUn28uicdDxJXsrwTNATXTD",
  "key5": "4qAqzpAvSUtmsTe2HxGU5RE316fzL3d77Z6BJfCNnraV7DNpuUPprLMnmmrtSGStpyPz1bZCi9CU17GzykTqYsiS",
  "key6": "kNgesaXoim1xSizruS1XXdgjDywy7VsFxPNQEFEU7JsHYZ45Gk3jBLkeU9d2xRJdPBpDGwmHcA1ZMnvE6swLpX4",
  "key7": "3VWLKmzLD5CZPhzkmTs39Ek6AvJv5e1QjstyhyB7MqHzBRbzFSoCa7YoWhSLR7TBBS4p9ygrBgkLX3yrqPQ1Zojo",
  "key8": "2krnU6DzAigYzVBED1cQG5xHY32maog4Dy9BY8J7CWQFijFLDSasD4XgS5Wjqnq45Z2SRJFuzWXsMSF46hWr8b6D",
  "key9": "3xsypCgaZMjEdAtpqKcS6ZjSNNk3tVPQpaeAcPAjYgJ3nsSTajc28pHgM6DY8xHCvSuHkVwhQvXaa7K5rJHJ3iCk",
  "key10": "34u3iPfVNU6h4uAv8aqwvTadVJpA9U6JjoduZDEsnYaqbusijkQYFnG9Y67r4R5UspC5fc5KHGVE3K2eYXuqRujN",
  "key11": "4eEJ4rLLVP7z2Esg4yBg7mS5zP8qxtsewwLkMAfRSbGtnYqsdzX5myKMT288xaYLC7GrjJ4iPAcjTarsEaWqzGBN",
  "key12": "5WvWMMb5enTaA7C4by3UVcQiX92eNxyrUs6mYfVvE7WGW14HKKHcij8DB5zFDZHg7F2BFSyXfw656g9H8XQdzFvK",
  "key13": "5LMZB52oL2fMpcvMqHQtQMYM8xXMA6oywGqgT98QoVLCW5PV1cJ5WVZZnx8Z5eXsWCnJdr7GwXc9nzJ3TXucKJq8",
  "key14": "ZqLNS72Qj9eEyb3ZLZcCgXs4KuUEPH8sAUUUhS6vTe4cp8SANBeNFPdoKtsXvx9o91qncYYcUNkJ9fZAhruZmZZ",
  "key15": "3aiDw8Dg9HJs4k6LaJQ3cCWoTpPxvxsuq78yWcWECSFRmLs4RtAUwJeu1sGhXJXYUPnt47MLCjPwPncdtDRSy6JY",
  "key16": "2KbioyA6LpSeYR53tjqYGqVUmj53PEfnVAYxxf4rj4EQZPSJtDKZ6DSPeJXQYBUKGD519dfD8bduZ6MamcmksAsH",
  "key17": "2h4Up2ZdmmKXU6jCEWVeieNxgRmQczKABcLgftvxQEfKWmciQv8hXdwTT8QMuccmWL2G1wJ7zgfLxzABa3rY1d7C",
  "key18": "5kRSw7iXuvysN5qF3F66pZ4p2hMqW97DiyyUi9j3w8RSsX3mGjiKcgk68yxrAzAH6rzP9c2dGxyHBmZ3aEBCwBTM",
  "key19": "3eeupkPK11WnQRvC9eEscYS26vb5bWj6Np2woDJhHRW2H1bmSr7SLZJ2k8pMCJFR8DeiJYxaskq7C4EDSAnpHb4e",
  "key20": "2U6XvXbGdGKLzFMQGURGtXMNBCpMEsiDthtxe6B1i9oFMAxAfKEkH44aaEp6oBeNkcka2NPFTv56ENFT8RMDusaX",
  "key21": "3vCF25qQWi2647kzKdUsznP5jX3CnddPEX1kszXg9EjvFoLctGdWwqgrZZPwxFPRpMAs7vw1VYzcE2PaDnpFuZZa",
  "key22": "2RHzHWc7K6emMAbrCQ1i1McmRDtitdCc6mhvUAcn1JcUrJ7XvPBiBW8NUbTMyqfzYEc9nQowhf8S98p44D4mo7gU",
  "key23": "3Zq3PVQYwekeoDMXixd8MYTtm6V36NR2bhghZ31uatA9CQkBFjcfYUfmgin2ZVpvLF497jtExYfhenLm9QkqWP7o",
  "key24": "3R1dPCTuDfbpMZhYcSyQtJgngXfMvSLoUzBg3EfLeYJueAxWbAH2YBi27Pu4o4BLtRW5icoxbjFBgXG7KLRGeyGq",
  "key25": "4TUaDWwhG3ABpUrF7pYqCc6StFcUehmq4JvdL4mKWfWHHvKPyBDxJxHSMzNVhHiU6FwSfQg1RR22QvMKkJLMbexr",
  "key26": "3XssfaR8EzuPHARcsgzCKyRL2c4tAQZrb7rwUCJkEhYadb9RrjwTo8q1p7xcJ3PbaW94Vpj5gTtdpSC29r1izzN9",
  "key27": "r2jBiz23rZYiKdUBnAhruXDkcco62h6F4W2UMJBqw8jePamjtmVz5JbcoxXhPshqD2idgYLBPE8sesCxp7kRDfE",
  "key28": "5fQWgw7eSvUhLx1x1QjygrzE3J3Tm4GahFpPMy3w7sdVCgDkWK6zXGohf1Q9rFwRcGXnzh7p2deBnBiPzTYXgLmF",
  "key29": "5aFRRxEZhCDDwiSdRGkPmUR94RaEjurCyTraDvFbbMjzmmLh6ixt9BsW7aNcNhHzc7NigAxhWJJjbkFJ9Bj5DfUG",
  "key30": "3K7Fur2UDqGRn319QqnnqhWPzPNaxEf5sXAm3BoW4hiuCnWvPWt41D7zhQdbHxKQdbRPvLTDzhNxGsVBhrfsGyqG",
  "key31": "iofzgifqQWNvs8rTQRGWAXQ6jacarAmG3Rd6FAGHavfcpT4UzjtcpdGzXadk2e2N23PtoEa9zfP6sBHaszXRhTU",
  "key32": "3WRu2F59e1HCwsKhiiwRRVjHvP9xwN25peiqKYAUkTDKNcNEeCgVTQ261SSEA6bKpoHfEXjNEnN3qWca2t967bDu",
  "key33": "4RgnCiuRhdEurYKQrKsDtKiQbN38YQNTgTFsyKhMBjcKxLtVnqHSaNR6qgnwfKgNsTYqba3mXjUC1UffHRyrtFJd",
  "key34": "2ENfYTe4bCAewwhExPnhZwepsTSJUf7HEpDAhR33mW48dAEALukk1dQxvwjeoMjgkgLKHvdpfopEfQQzYCeYk9hR",
  "key35": "xdxezik3jhF1YNzKdMYtpL3KSK3CCGiVNo3jyyjYzoagYoSzHmC7aNMMeMHdLyKGAHRLWDiwkmhUQk4BcgGJgNw",
  "key36": "4J9zL3tfB5uFzc6pamrG7RTFDBUacUHtRZr3CUyfmRztGEwGWuSLxBszasDDgYygr9NyHtiHvDj8agJR2csCNbrp",
  "key37": "3XsJbz3yGAf9PB6thdF7V9uTBDn5WSTiG4ogw9coW5rKMoQSeNRq1ZAGa83evaUBpgxRZq127yTP35ESP24PZSnq",
  "key38": "41dqt6qCUuHnpoNC1iJvMGvxTWbgSTWbBTArB8LXJxdQdq1KnZZDmMTvGGeU8MWAYJLPPqiYETGKrqRsEvL3RQWW",
  "key39": "e5R5oDg3sP98QoEK5ViXuPUJXF2BhxcBE42WdKWXWQhG28hWcYAuePX35e7WnCXcMzuhHbWzu1bs1HtEhAGUYdf",
  "key40": "3mC5yJLsg9yPqj4rf6CaUfEs8jDkXdhsvuM7jXS2VrDR9UA37PNB7SFKNiZGUdU8B3kxRB5dGsRfG5wri3xJLyL4",
  "key41": "DRV33z8WkRTm1qoBmjR7Cfe3FZM5bCpy6sARRrpt94io4ARfYB2JpawMwrZd9e5PZnPU6jTVbh4vwYgbF3jcdQv",
  "key42": "3hKY1H5JTRgNqJkZRe1nXkjrV8vh1d2Zi8wJoJ6RaZMLJ7k9rAwqNWefGrNczKyWjxG21zfDWup3Vkyrd1a5JddY",
  "key43": "4VcqVFZx6ZG9U7f8Ui2yaJ26xTAr6eberrLmqTaBSsoNQUaivP9THB97EEjxkRNdQoWLLuVBPEQM3m3KFumFhiHr"
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
