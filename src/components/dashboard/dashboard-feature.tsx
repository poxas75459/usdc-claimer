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
    "26XJUPACAyAkGmqR1d3uN9NT4tyeANo8J4WK2tswsg2DnhV3teyWdnA6xy2zqKQBHH275nX6gN273cxyR91cVMCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LW5XXWimBirsjx7x4N8A1oomsA2wA7MaDg2JrSn8ERaPJmCoPy3vEPxAwgN1Xn67aRWR9FZsEcnLqCYWuNnn41G",
  "key1": "2vktJdkX9x7szgn7xNcSe5QHAiJmu2pFCDQQEiwpErwSmaQjin8eR1N1d62HttSxbnzb7zg4gc3xVzQXeQr3QPkv",
  "key2": "5D9XeX8yVUVEDq7fqcm5Bjg2LPL1Wk4bebkeMn5qrm5Gfe3G8egM4h4F3oyPWC56SPjWCmADYT4otdonTMiAVHPU",
  "key3": "5GNVfRxPTTHe8hhXjECg6GbVFPCFuyqtiRGnBf3671C48cYjXpyphVoVnqvds1ek5EHVjA1XY6iLz4SnADESbdpf",
  "key4": "rE4u18CNkqHYfgfiSsuXkoviiawG13hKHgWaHNzLw6rfTXY2sZD5MS6Sp7GcfZbVsTVAexxth3wSZLJvofGT3h1",
  "key5": "2Ecb536LCKPpWSHhaNDcyBVqLEhRhBZYQJC3MSoRtKopuWg8BQmmaYBgPaYgkT3vCE4rpdBsqqE51M29FPZjoNpy",
  "key6": "2RfSoqb9nELzkwkz99WeQQMQbwyzn4cnsUZW9GcjXCnaJ44MLsnSCqFLDXoPDismM3gznc98nzqZrCymFKCXtNVj",
  "key7": "3zYmm52p5w32sj3PT3HmCNAApezZpy6Jdp8Ly8M3cCgYSXQjjq38hJd2cAVNChJyYdeMBtrfXB9HGkoisupqgXqN",
  "key8": "5hppUgA752oZra9HAH9bpUWjysmtofGMusUQHcWtqhyUo8PuZghNRaYNbZRQPKXKxSKp4qjtvzX5uLu589PyhnLb",
  "key9": "3BYpGuDDGcK16H6rbPb5tjiLVrU3x1HLJ4t3PZMjYgp6pDHQys5dMZqE5f7bydxoGnhLrNgnaYjXJ5kZkRy2H6tW",
  "key10": "3UDK8V6XCKcidZvYvitPkXkHqS7AgdhHSzW1254NtuCVLaSyNFJMDSfB6Nc4thFcWbj5uBVh7eqJpJkHNPvBfiZ4",
  "key11": "5kRnkmuPfZwWyg9wtyEa5KvpwbZQyXrH8rExFrttozx5EWSxbbhT3JWMyjWjLWbun93abLpVAMpGX3W8i1xFt2NB",
  "key12": "2q4rsFGdpnzeFVhqWHSPZjAwwE7fkVdGx7nr9rLgzVJbLXNE6hu4zAqPezwKF5WHsEBuNScd19iNU3iGoNzkdmpe",
  "key13": "48VKKGmydG4AfoLEUnEFfk37u7JYd8WWfJsNLstA9JuDgnuN8JM1ZpeXYKZRfeNy3pWwkJCmQtLahKdifYFLDBiY",
  "key14": "2RuD8mWmyVSgKu8y5oFBLGesivgUEF8AnW66LFrPXuwT1wYaPdAqmEeRsMCV6vAtJ8UST7qcRW8BFBAGk9vRRNWY",
  "key15": "i1dRrjrHe5cdPmPiP9G3RDrbRXRbzpMLDrkDG6y9vGuH5b4fPYqny1g57sGcbA82hs6LRYJYQxLDe3kat8wYpn4",
  "key16": "3pgJwWmqqAhDtJUn9BXgpaebqF35rEKeFx8X3TaStb4Q2payhfzTFun5nvafCxfzfbY5QXNMmV7beWDP5vAkDaoU",
  "key17": "3iJEoQpCRvM9FZj6sEDLYEo3mrtygGb4TgsxDdCeHJApkB4nGaRHzn8kxUsRyqGv3jqDLYePCevAhjV1KfmiPQCU",
  "key18": "2AnEJGnjTnmftieTRgdVeo3KgXR3tAYjAjhruPrN4MWhojvjGy7rjfooFADFdZ774VSoWBkyCijr1fEPYN1bQhE1",
  "key19": "56n71Wy2fxFN96DWgsryQ7qVgcWsYMonwAw5qHV9a3frFRTrGjY5EsN7QAQL8ws16ANCbWMct7txAvS6C4VC1NpF",
  "key20": "5HY5murSF4J7fPeuMSvaZv6skUEtwu1GZn42oLh2maBUtofoeY9Qzh1euBhSWencgsMzg6koKemCH8BAELwnTrg3",
  "key21": "232fJVQjhYLD2ReXRNnCyFUkvhRJiMhXnpPtnYJWEa5z93wLxCRTAqgTd4VAF9zsroybPxw5otsa2bjpiDPuKAhM",
  "key22": "4Hmye4PiEUYwjznccq9DKKpz7EvxdBRLDu1sgmPGxgvtrAKfQNwVTW3rds6FpU6qftNiwz9oeYBKCWq6mP4762fe",
  "key23": "4MxeooDHrrmG1xBSKYiZKXrkhqCMEdUYqUgPbTv73BdQnyGcoSnrsQKFE8tnM4pw6LtUs3TvcgZngNakboNSXXuL",
  "key24": "zzoYHrEacfEFEctAKxytnfFR2oAs2r72KMauw1NHF3v8xqwqaDMA8moN51duy97HoZq1McDtMMcXmpHa7GBVWTK",
  "key25": "2m7czrCGESSt3K95pZsirKGEz4op5kHdZjiNyeMuLUq89UHJMCpQbT9qvAZ4iTPwNQDjxegPgdFcXPxvpFRrppZq",
  "key26": "5g5D5DMdno3utLhHVvYUFffbwS1NfXai1gbbRpq7MU4nezVqHCscFKVxQNZoKmvEwMxDp7aUjGQQbZrzsHJdCeCa",
  "key27": "4UdRHc3EqGFAQEicE9vnjD53uALhYYcWRki45oSRcbXPenfMK3jNythTacrgtMsU69q7jR3dxegCPJrKoWL5kbhi",
  "key28": "6zTHtJKrQtgWigHaEWAuKoM24WT3qvhBPtMX5gLjqxyv2V1JfnudSx9GhNr8GvVZGRQE1gyqtUsbiBwYa8jTKhH",
  "key29": "2kRkp31vySpxHbzeSM1LTjQ7cWVmXDkRXpmLZrjEWRqQRJstRD497eNzTwZWFU3rmo21KznPvrgyEsZZXxDCtU9Z",
  "key30": "3tqVNomnhg2A3gBBbAMdL6w4MPMqCZXDoSeZ4rCXzuLPDNXF7cELF3FLPjC4na1TLjmC5MZvnztqgA4vjQuvbrzd",
  "key31": "3maGtwcrEvQ5kmsP6t9uFFy59FbHjohGv2ZQQtKZeWtJargxp8mgmsAPutUD6Xe4wD3B5ZBft5BQAM9zefJPVL5i",
  "key32": "2F2LSWLkDQa61536umaA3aLd2HnQRLWrUfvA4Wxx2KaE3GW8MLTxLqgqRqKwdP5T9vrL3GygPEgM56GyzcGmP2FW",
  "key33": "3kP17q8vmbS9XznD9ZKnbMAJ6MUTzQj12aXa9vBEVNgiTv64HJK8WfCf1ci4dA9SVgdFL1223faRG3ovbs1mydbQ",
  "key34": "beStUmcoSWZribUj1GS5f6fe4WQujbfi1F3DABeDwBxoRawyDeutaWQ2mQStMNC5U9Ruj8JzWvYpm6u9fSR3AsF",
  "key35": "3dkKTx22jPEpSg6tQ8EasSULSAXierU4qDB4ABLichsbg4qAhU877gtxgpJNbZ4Mam6UUfbiev1eSb9BRSVxHJfY",
  "key36": "wTXnkf5pTkgc8RpwUmMRRBR5PmUDryk2vBWCuKUdfVjeYx6kfY1vz7dSWFd7Apatpqa8VwAK59teKdhh4CeWn65",
  "key37": "5WqZ3PFueFLDBh1C7Bnn3o4AGNpXq9ePtaR8hUCM6XvLi9rjm7L9PAYVGfRe92P2HNdfRy7AHMKESR2r9bXFqwvR",
  "key38": "4JYLLd1SsNp6k4HF9Up7tvLcwbojNfDGDof4nRDSsq3tDgzsMcFpkfSfZq4oxtEZwTqirY5uen3Ri1BJrmKJUtyu",
  "key39": "LZMsgoCB1WpBFj7CNsAWmPWKCxQVFDgP72NguGPA7C6jD14Rk5dv7Hvp4K3Srf8MZkKxF747GT9biSyhgRxxPkt",
  "key40": "21sH5teKSKnvMyHPhhpWeqdUqX2BLyLBW7y3SJ1bQJczJRP4zzN9UYMHk9d1ub5EEZFaDPgmvtT2S7JFWMDLgzd8",
  "key41": "3p9r6j7qCY2z1KUBUjXPUX9PiZH4csgufzL1yv8VHhfPAfKLxRQaQFLPoVo4MQSsvzPmoQX2CpaXsXCQUwM8mwjd",
  "key42": "3LqrrDEJjtoUXTf2dcFLrN7kV3KKySpnGPvsrbZk8HsrZSukPvu6RbivYzYUfsXnXGGGFzfemkdeBBWyjcitHoLN",
  "key43": "8PL84g3Si6Bhp29PpS685MbR97haXmuSBGAXFYRMJp8QGZ8zRZZkQMJi7zPp4sCwfB2ACCzcbSaj63U4i4xzS5h",
  "key44": "m9ZkacctDvnbo9KZMHCuDZiVFaRqi2T5cmA7f3e4M32VQTk3VmqrwTJf7KVCPrb6SAjce7gxg8cNGwH6KwG9noU",
  "key45": "2pTzn5vy3TXd3B1o9yiboZ95DQVBUnwWrYYZcjk4mCVMk4BGGQAZafRLxfxoy1atC5GyoSMfpc7XFWbGSFVUdKng",
  "key46": "3bGktE7krQ3qBUdjHtLExic6M2maKkSL5Xyd38zw9N7CotbqZm2Sep8c3hBxgsMXN9jEw3x4qNqb1KyEVrZ6gmr8"
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
