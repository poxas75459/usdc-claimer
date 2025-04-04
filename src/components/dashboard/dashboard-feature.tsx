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
    "3FfJtymMJadeo8aqx1XhbXiu8SqW3LdXg4zUQcwYPCkSSopPygog2EDpUWh4i4Pa2gLDQPT7jhyiagTbpNLDKwp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mF4U1iiQawBNVNqqVv8QdT3bu6onbvfuy9pBCgPeEPXgZuN84MPbrCgGoxxnA4vVNS2FyxdxFe4Sep8JUoQDrjF",
  "key1": "5NhXPp8dSwQowqiXkUQZiSEXHsUN8ocMN5oYmBwShfYVZ7H5xZjPs6ujPT9V3wUbbcYKNx7JhCog2UXYhpnxoym",
  "key2": "2sRfh4khubKzKVHeDSeFSN814Bt5NprJ6xaVdDW8LKF8jK6wy6hMaDdYFFHGtx9u8saAQ5mWQ4h7fhDjznVW6aS7",
  "key3": "52dC28Uki3iFvyvoKc9gJK4QHezvPY3h3Brv7RvHANq6wXdgnvtV8n1K3BAgG2cnahzz4fRjT4URA8Vcr5WFg4Jh",
  "key4": "2jFQ8t6eArWGkCPdQDEo5SqXTW4Z1mLK2gP3W3P1dT9vEe6UyUMTEaNfWpeXYVk4DgT1Fsiq9hQDwbQebp4CpoVT",
  "key5": "4DcWyu7cTnWYbQy9e5dvrFem1BaMaYjKRp3rfRe1scP5obfdY8d6wpVRjweRk33X1FdVQMuism798x5drm37EQdK",
  "key6": "5GrXiA3dRcKLHtwSSdiPMXE71nNQ9YNV8oipAE3RaGwyokxj29KB1ZW6CSncAPxzaavavk1T6fKGDXcS3YvFVBTa",
  "key7": "DVstXtuUsiUUXpCd9VKAsUsw6eVWnhiMG7HuAH4kPMJ4MfNmPGkSpUQgPFhBpnj5xUFDVoneb48B8kxoomokiS5",
  "key8": "3dU7LAms5xwBAa6vzpKwhkcj3jUpnsA7rtZhjaJ9M3VzWEU9zHfqz1HJ61saHMb48nGxWxp2YKnfubacc9yPTeuN",
  "key9": "quVTwob4CABPsuuLGimHvi5x9yHYTUxRap2SbNmEj6VzBvHhXiLhuyXHNqCX5rVVn7Qi987S48zzUKT4Pq1a5Hz",
  "key10": "3r2aE7kneUsHVqL81SXhp1qpYQeKs1ph8mEdhefpLLwi1Xu2VTQaRYAqwqYqTdcFogeEj7Zt8YajdDzcUesoMpix",
  "key11": "5v1Y81L7t6GMPCrsqeYzt3GYEmjTeLk4sPbWL91Bg7xwqJRHqW4JcExrFEDGEAp6jk5bXckAongh1YLwnfPZSYFx",
  "key12": "42CSMWSArSu1XfpXJ43tj9H51QpUJruQgMtfLSf35Jwu6mKfoUAKtiJMhtrLFGDpFpeNTdAdnYnNNJFAoLov6xuA",
  "key13": "7oH5RT8G9KMwvXAi2jSB2u6qMj9Y3SYaEWKJqfzo7KkT8wVTnVxe2BrZsjdPiVX1oKtbWuYgjTGnFwjKSDda8yC",
  "key14": "oJgvY1P8yo95iD8FsUbDQUDxCjVyocKQVPSupVSk2fEHCfv9vjbVELADJEpJUSJYRKgoXZthjdip9iwjsvR5g4f",
  "key15": "bF46tAFvH7GzB7wk7YCxjRBaeLesi9k3WNKNjTjEBBNPBpqwYGAyn237hXfBU3GtZJusU6zbGLXkuvpqiub3cpn",
  "key16": "5GhRywmq8PkB6sGJySQ8mshvLRpZBY77hYMHwARmnD32BHYvs988ry5as9MDXpuLrMzQMyM6PweLTxHN3r4SCpPL",
  "key17": "kH7DAysjUJXjVGHpoJqduUFfTTdoZYKPPVsJQT5q8S6nNcxCydywg2SUSPFWKX9mz5AFjX9MoshN2GTCCoxivkE",
  "key18": "4SxHtKdFUQB2eUXcM6xZQYZGpkmtfdfgXAw5FTrj93VWFApwPt1kGjDnwrEMqsC2NYkf6Vpxx1gG2gH5ews7x7CS",
  "key19": "2wbK1tR51VZRpmL1KW7P7pGXDephaxt45gdz9Wc1hiCRf9XFT2dgAjmaVuBxXEQHk8Avh6aXob6R24yTiJfaWhaJ",
  "key20": "5MsCAfdVWihQtAw2DNSMaTxxipYGSEer3GQTJGupjcNpekPvAuBJiUeBAyrVTktnGtYWpim5mjrgfH41f3mXggYj",
  "key21": "43NqzryxnNnZ3u8mLhyp1D19wGWD6wEpjmaMWnbf2fXHYhQVRXhHnFPKQEzSjzEhSVbcadPUagiS5Yi7MD1AQAdm",
  "key22": "gdi1xKi1tP7DhKvXcVbbhgcMsgkgtceuc54DbWECfpUMuiARK6Ax3MBqEckwXYRyxoSe2STDycWTuERnvEaKwPy",
  "key23": "65o5BZZGMvrJgXgK5kmkvV7i1VccNkhZgDmv88QwawtMQ8EpJqi9u4d3ruVDHLeKC6Pf3jRSjTEpjPY8v8xokG96",
  "key24": "5Ad7Mq6Y972L4JUBwHkjzncbYKexnpQJ2E7KppzZ3mVkSqxnnT2RZ6LNg4j7Pv94zquGQ7VStXKb5Ybj11SXYDKe",
  "key25": "4Cfvo5eYNNSbakaB9sazqJvUNa6m3LwGMrmTUEZY6NcmUmA1VfmCkzEA9kvnFnPEbiRhVzyE99NQxbqLVT6uoQtz",
  "key26": "2YVkKBqP8PfavBqCFQqL7mvohUniYkSDsHTc6t8oG6D5EZbvXooHK9sero2KKpE6oaPZPEbdwaEThoWnVPwUN3pR",
  "key27": "AxmqaHpVi4GYyiMHkZBD8WfWpE4pFCSMHyvjuYxfysF77zf1qZ7yVXBmcShLZPM7MU5cMYG4wRkFcsY8pf4bWed",
  "key28": "2eWLTfxHfBwjUNoXMMkfkSEhqE5QQZLfFbgMBW4JcA4U6cmfeV3jx8vQuoomjF6ZiqxLuP5GmKK6X4N7HH7AvPxb",
  "key29": "35CMDCa6MKJq7whg7AokYW5TpX4jW9NQn3i7DtiyeZ21EfhPUrVNj3KcTUNwNCpbDNmgCz8EwdChbjSMu2aj5vmy",
  "key30": "3AXmkQw5jKXYEu4RaUPzMf38idYNpvtvxYmEydEgFd12vv3ioLV7oaRMiv4SHa2mk11q5JtJsukeJRtNwyY2tVYf",
  "key31": "2AcXokiSTGUahtrwKGx77sgyDRDAJrQyc9uHLyEvWfhnss1hPgDJ73oRfmPCH8qWBhj84xVX2doXVijnUnSecX9L",
  "key32": "45nsSgqMEc77pFsdyQVbFZY2hRhWACCZVW4xBEz3P44WTg9sFMvDuXzEYB73YQD3QdS5F4s1PKwD6KGMQCG3y46j",
  "key33": "2etgcf5N9wwNKeau8qrjp37kHqopBuUUMyMbUB44gYHknKHTGqC9fAoVwnQtPJuL5851E8rEWBsTLNmZXqdWQq5q",
  "key34": "4tUYusNh6iEjrVGi6qSAoY7CHDhzmHpfSebUGmp9fVL6WWoKb4xFq9MkBHSaesAG1yYkpViM6ZaTC7VfPZu4B1dK",
  "key35": "525Xi9atu5KErvWDiN1um4LJDDd2SbxZwrrZAKKzVE8gb43RJJc168pR7sdtJfCasr7pXqVjw5gv5uZo2Vfinzdn",
  "key36": "58tej1r5wwAsCwnEgrwozUtQ3MnNtq2547QWT5T2KaLsfxiLRky7AkxGWE36LJUfEJNycvZetyQfcFYHnVfu1bcW"
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
