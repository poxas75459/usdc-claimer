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
    "5pmyn1MbgLSFuGkH3hHp6qhEN6Uqo4cxu6cwzSmVmjA3FJ9XRRC33sLEp2AeHUFmemeh3kuoWgZyWBPqYzMy1yUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SPHbdYwWt9dBZgu7NN8Jqy9yM1jJfQW5Fd7KCjM5r9FeGsm5CDt9ktWGH3n7GbYzDn6S3HWrw6KGWjqrRFx5HVc",
  "key1": "5RZeD6jNePM482GknK9xNhCJFYaJBmy1Qss3LkQguju1ytyyu7kzXrqoLkfB7xceicKK56KpWC32wnJQDBcvvXGY",
  "key2": "2fCQnSTpaoTLV4ayfLixcjh8xHkLQLPKpa8APcYf3ttXNFEu7FS7Hgg4gPgE1DXcnxJSFDwq9vp3UshPSCqayx8m",
  "key3": "34pF77ZyqLFLmzkKJGqcrXbh4EdwREByLE6nrr1szVZjbkLJos8YKLbgcniiAMUTZKQLpmzGWGvqLxkhEtEk4WzV",
  "key4": "3GZRt7pETK2ebA6J1VpLMV1xppe6GSz2fxos8uhMrL6TNFj5VCxr6HjbJztZqRYoAEAat6segYNV4mBacLU7NUnw",
  "key5": "5wSHunZMmFmFmnbr6AXxDRqjku8nLshjwJcGco3XWPfnSsi1Cj5ZDDBePV6Kfvc3xQ4qBinY1XGf1sRhP8bxPNFZ",
  "key6": "pdwcFCNgapmC4Ja1tWBefxfcan5gKwPjsQpPsYD41yEqbjYRhvdXkPyC31sqaWYW8dYmSBGPeQpkDHsKGdeEj7N",
  "key7": "4rtPwvTwtKcx3Gu8s9viXW9qdXiEzDaLjNr6JYXGzUCTKQ5s5kforENrKx6WtnSsYQj9go5FNLgbcXbiqozesxgM",
  "key8": "52TQSdfGykWkSydFV7td2mqFd94L4oeFw7oiNJoKuxfTKR799BM5em9qqb4t2ZjWMCPCrkbY5tzDLo9kPXmrhRby",
  "key9": "5TMYg2rcBcMXYkmpKmTioNqTAWz99RrY1R63KwEAUFjYw2xgMKwiJKaS2nGTrCzDBuhKtrsvNw978zgzXWvBeMgR",
  "key10": "2Niu1rV7ggHPdyeYZnLF14sc6cdG2p36y8QbWqfRVo1oVgYR4fjmxMgmKifa3LYkHLMfe8BF6N7PzWRnCLwbuE1o",
  "key11": "fkboE1614HuVSrAcK2TeVfPXRkVsDdaGApEw3xAQg5EEXH1pt8zceLxdk9V9G1CWUR9SE58yPpnwYhYzcdcirMD",
  "key12": "5NrXeXSGqaAP9i6kT2RvMnDGqon1xUbL71cdiHrX1G6ahczJVCGbPp2L4sZXJgVMkNcugesHimdMyytMHwwuVAhz",
  "key13": "LVnfSZ7Lzi8kW56UKoWLXJoNRoCnvHSCmjRTd84YLZRmaN5pBnVmn18fFwYce7mndLMXHqbAKRH8TuGParANiyw",
  "key14": "2GYEDqPrqhiphPZsXYcZ467EEgGo7RuHwSVMdua7zw2P7CVhWCv4q6i81djXJyeWRj71tXJfFF5u6Ny1bPzmBdS4",
  "key15": "4iYJWvouxdcM7qzyzH3S5qXETfZDUrFaS1Gquq8cqPNYtQDD1kxWizew1o2VdNBsNtEnzTv62n1F5tTEwdvmDVx1",
  "key16": "qvjSH2rzcRDtMsNgNGvVcpjwWeDtxNzaNrfZ8VDpA2NYZNS9ZV5gscyskVps6ZNTdy95aEL1pcEepS3gv8GLPa4",
  "key17": "5XV2atLfHQkSx1xAnvJHTpeL8xABCnRUhLMmQkrEwrgpUdS4NZaFBNaHyPvTVbmCdL6wRGDVQz7P8JyMwfnH66ba",
  "key18": "4VL3U1Cs3uy1VPwoXdvzqTRCPGSJTBw5qkwERdKDjE4uqY8HR4x5XWSBrjBsYWn9XGgq63M45Ye1Hkd3GTKdeFuK",
  "key19": "5RirJVdHyPvPmTSD9nUyr9iQaEyaW6Y97KjugmsXuGAyM2yD4wZ8XeqppSQqbnVjDreZ2h4GLw7WfADjPDmubuh9",
  "key20": "2dqmmG1UvuUCDH9WAGbrGBAXepdBKHjuduSLNvP5wi1NivdwDtpyTLdhpenam8VYqKwRBfA3bQHaLF7D5pfK2SCY",
  "key21": "519Mk9KE4RzxXo4A24NVhcanrusXVQA2pTgSEcUigF2sHo8Kv2Rjfks7rUj1UzkcikPBayzgAc2G2ha8DUAMmmix",
  "key22": "3SyABwo1Q9nHeUfNckdg1cUfy8SMHiZXjofqRa65Cgg97fxhipGxwWRiefxJ5SSi454rzSGzsL8TbNY8Mq51sNUW",
  "key23": "3q2ML8mcJ3oYaiyAXCeDwedD2QNvYYyqnteGjhAFnG568GqbcXdkZ8Q9gdMqUs2m2EchVLv4EM28YurtGe1H3TFv",
  "key24": "5qLD8wkJbdQfvXMyhHC52Syx9c1VUnZPjGhKVtnWch7PV38sfQoE1YzNY3SQuSMQ4PodPrVNBLJ4a2TfkQQKVpA1",
  "key25": "46D43UJkhvBzvAmJKAgShKhZfyC9mEPXauiroAqgy8xrDvWzxezamfks96BUNoYT2T2jxDcVGrSUownsmjMrNPkJ",
  "key26": "QpMvWBhEYovujEiCKLa4rZgH4q7WGKckVVtsHvtdsBQ9cg5DK689DJSSzPWj9etbEgJeEafBNz7PuZT7FhkZKUG",
  "key27": "296sFYVkyjT13XTGHWKbmz1xrQ6jMgew9dubde8ZZ9jxJw4FXPBbm7TT2yq82DyZHxU8LHb5tmUVoxYHEi7no5Wy",
  "key28": "4UUhVTXcp97KdZtoKqpP11v6AAM9dWaZUuCQQPy9otP7tM9kfC2br8KXgJP4szRk8F9DusK2AKwivt7vD75K3UW",
  "key29": "48pbYyRkEF3ZTvPpKFXMJgFyGtnFhU9xZb3AbUWBeadkbiZnyH8kRCGgDqxbwwJ9ppJ4cmFjrVoWVxqPgDx11PFL",
  "key30": "4QCcaSiqN35Eajv5hPKXNx9kBnh99WR4Yu12afCynxhKiypfWQJjkbPD9FjE93xSenZb2ZVfuSQ8o45Sp1GCoLrq",
  "key31": "4LZsETBvqc8zMdAeTrQfuPPyYn56GmvttdBoq6zEWWTKr5dTRCz263o8KPEBpcDgBqWE4sGciGjxsdgjo3kzE5UA",
  "key32": "56K6KURUds9SQV9XJSURHm91GsFz5SU1q8o35yUQQvjL5iqkQav2ktzA5urEsjKX7neCiv7oHK3Rys1MpVsCXhnp",
  "key33": "5A8EyDuVkDtGY2QXKcRWFcF1zV1xh9ySoaweVavQ4Q9djLrZgenB6w5KR6NZhB7uiaXdKeuHdCBQJqiKNymuC4KU",
  "key34": "2MgrsBxSGQ5rWSahWaZJMvV7UycDXRGPndjvKUVVyVWujKGmuUREKiqVKcrpg7P7mttBGLNJNEeEihiHs2hTwd94",
  "key35": "2wwWNod49BfkVPPP3xS46NUxgR1sCPriuiRp7BKyCBLiE5QSse7f15UjYoSWuADbz1Wiu66mxQ7kgGYEp5R7rZPg",
  "key36": "3nGzKfxXZnje1PjnPXPbGVbEKmiQFh5bUJu3V8PmfqhRmeq16CZjJAgDvS8kLnRK4NpytUJ2ubWUcNsWVpAo3srx",
  "key37": "5Pc88vPSQQciitNfPobahBJTQoprTaDeJ3iPEJjoNxTQvRKQAVUgd3tVg9Nf4xDCQE7ZtrEXGCsri7FCt93EuNwW",
  "key38": "5aMr4ogQgwi6NJvuTxPNQ3grr4RAwwsccoUTUiVtTHBSzVtUrx141Du39sGPYt5bn1TZ39fTnHbAG77pL92fdp5U"
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
