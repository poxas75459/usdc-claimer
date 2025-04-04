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
    "c2ZajFgJ4GYAuMQDMnXjF8J9nqRpxDWFDjCBN9ABa3Qu5DABsTU6L3XqqeTMSzmyYuFwUptFBSaPB7NaBUP4rBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UUYYeyjom9qeK5caj5WPehfGn6qpJUGDqF7ByHyuchmnKHU2YBsaVaww35B4dBs3mg9B9VQP2CVch9NTWunK7za",
  "key1": "nVAfG6eSxpHAecHPYH3wDNTN437XSEujD1WngcChE4M7ekqnuNznXrtxRsSSX2bJNgVo9x4xC4EjVyjN1dgvpvi",
  "key2": "4j6zz7rvxSnaPUAPZ2tw1NabkDH2qsCKNLramGWcxp7EpT1HN279KFZQBdATATDdP4Rcf3CwcbYgRYt4NVhQphRz",
  "key3": "4cPvCDEXzm62d9GzYjez49ELzRHsfPT9zyBezCAuWWF22B2ckdiArte3rpvZDwQQS3AHAKihWZbKiZUDbhZNDaWS",
  "key4": "5KDHkxTmuWB265DbvEW6kxF6UvyB6uvsV5p432w5cNztvB72QajLHRe6LNULL8F1PFFEbybHuk2S8MrFH91dfXrc",
  "key5": "Xnb8NiMUdA4TLnUyjAfy9KU7isKd2p1CdcQcpHRAHDG55abPrRK11HDKVSX4PYzX8LG8NQCd9iY2r5nhi5tiwBu",
  "key6": "DHbMKJGzZgQgxte5YiFkweZ8xAcXVrx3Piw4TNk6HG73H2YrYEbUjYDk4giJmj3McdkS8muBTqM5d7i1JzKWb6w",
  "key7": "TP1GLvGqDUTWMYgFZjv35Moem8ZwcaMk1UdYrx4fxjUa1j6w2hmKS9Pgt5TJrBNcpopXx7ERweszpwAwE2G8mgV",
  "key8": "5xsJE2niJW4NJFiFvjoj4hXBdDzfZfVrSiV8nSiHSv6B6vyfTT9coxiPauKUutpuZjssm3ZBr4Ue9oYWb3xsoT3E",
  "key9": "jMnbkykw5wDyWxMcnA49HNnN2XRM9DY8THMXsQeUjpWKp9HyVbbxwmVkqDBU6iaWoAr2x5cSZsUWPvn7gcmZDT2",
  "key10": "4LS69eWcDAWEyJLX3dWEzCdtnpvsZJ5fX7txVSc3bcZ9YMXCTkCUrJJdtuH53Jeg9m3o4qmXLTifvAw63Jwy3xUG",
  "key11": "5pGnDHrs6x4iyR5J8u8sjPKSs4yyFYPXrMfvw4gXCEZpjwR6ad6cERMB3MmiwPFmtttZxHVQimoGj5GszqQB3Jwj",
  "key12": "53KGND3a86cxDyfbxcprdxNmrX49qftzope7otmV6Mp7BC2sSSqVCqSuq7GEFW3M9Y3jvcjZEeFJXHBuLug3B979",
  "key13": "BgyCGgHH489jQPwv3fcGNEkL476ggDKAY7shKmXpHB3enAT7TE7W9gBbr8ax1VZRjckrogzAt1SssiLptwpsGFk",
  "key14": "5qx8xDQcvVKH2mUiKSvBhwfSnRyetASbjCA8oXXosQoW4F7Rmpr9qPEZWUauks3LeGHNuQp3L43BpYvQRHj5fPy",
  "key15": "B8AgGunSc43QfThjzbzPrFfFErWKwsnZUvSmp4RnTZd5adJxbW15ERvrGs3zWrqtuPAQPCLarvEV8buH8VKWTVy",
  "key16": "3ReeZ8tExudLjPmagX79ySakrhqSKr1pXHwU91a6x7mSP5esaToDoKsG53P8vdhy4txpn6t1tsMCJ9RN1YbXiGhX",
  "key17": "ZenexMGdhRcxzVMc3q5UGzHR9wXNMgHUkmzuFz1fWrAndWquAi3JEqc7oDBJ5GhMYbM8UH1angahoPXncw6GL4V",
  "key18": "4B9MAP3Cbq5wKFy4R7ZnK5wmqfLS4UoH49E8BdstEM6XJeaRHUBpGtVx4FfqouHS5jtkBeLbHrxWjWoaqK4DnFKK",
  "key19": "35uCDeMr29uUbFkxsLy6Wf3G3ihbMMHqttrgwT2a6Em67TZUZsGW7e2nsLvBSTEXX3NUNwKfFMyePa4Paqes2N7d",
  "key20": "gJJRyQE3YUTeGxLSBjbYKhr7PhRZFkY9DjQqQpeRrm9Nauj5fXWcHNKSeuxpcSkfXVJN9gFroiFteVpsTCDxXwZ",
  "key21": "jEniu67Nay4ZCmpBsCktAfCq4Lgd1wNKbnNMWHvTRgWqmB5PvmXCSv2TnvfLYvmtrjoz6CQ4jZMMpJEJqNAjPRq",
  "key22": "62Bv7miWK4pZLCmDXPKNVRVTAzkFyKpCP2chy1dLW7pNTQXcWyxBQqkeis2wtN34aKAsBxAJzCVgDN2pAmH11u1R",
  "key23": "3uJ89e2EcQX2T2cJhTdzefewhzgJoNsWH8FgDj2bi2k9mNpeyKNdbSAafzK1ztFHSdBLqdKKVVxiiRdG6EDVaQy9",
  "key24": "3Teu5ULJzDqxCTBqGrgGWXoLVx8vNddGmSRRAywRJpCzoT6byD57xepc8HwBSxnBFiUQ2kQUbGP4thhm6rBcVm48",
  "key25": "3FfN7cRReAuhp4MabBiFwRYrcoG8GyodV58yo2A3bjZ4QrmLBGEuoYmuyZpgHa1dECB6J4sRJoupEwrVK2k1UsM2",
  "key26": "uqf9sFf1F4kMZjYzH13ujRwFjugi5W14ru3EgUrQ6bbdvWDSig3sMhNYSCvzDcU5f5jSghW3HKHK6HLx4sZ1rHN",
  "key27": "38ifLtgZdrDMJUwz32Qp3EJmnAJhCWpoQpj1NqzWGxUZFump5NV9Byw2ohFJ7K9wHHrtmx4E6McnZUUq8pVy36Pg",
  "key28": "3s5qYgRCzJbCkZctjhLnQne2vn4sUmoGnGoh9awwDUsE1ESqMW9Ywp3H2oRZ4A27opSWRSz6AxsncXuz8fW97LqY"
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
