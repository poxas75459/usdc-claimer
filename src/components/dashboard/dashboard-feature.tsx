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
    "2EFFXs9git2trbF2ipefJ9UHXtA3usMDasnUE6f5sG1wwGEs2pc2Wfgbgw1oUmueeE6SLYgFpSMmsutT1TEzU11g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uAt2zs4oS8taejmuwprXnBwtH7hX23gadCv9N34v9H6gqrZ3nyU4SuJvjyytxNqi6GYJxBbSGRxgja29kABjqBa",
  "key1": "3EWkRfSX9g3mJ6ztaHvhN5aiTrL5iWQp8b1Az3NckynTyVoHdhcn7TjPQiF8ShstEgtMCiwGD4HuNL5PHamvYs1L",
  "key2": "5Ty6S4xwNFNUwr7HWsckrXCRKHA9keFscjwKYwMJuyBqXDbGwm3tFSSa1ea4CXDhSF2w6qpZuQjfvRrB6KeMNwnx",
  "key3": "66FfDJj2wT3ArUspcdKz9SnczdTNwZKcn8QQXwePwaddrUy69zmFDxej4MKoSDaZvjSyat7n32VtbyL54uLpN1bn",
  "key4": "64p6jbhmue617PM5cUMa51md5WiBhFkcyfwoUiZMMN3kKVXvRB1nS8aWoQYAHvJuQu3nTGAMvAbgPmoJ3cekfNZq",
  "key5": "w38o1vPzzSgJCDgbwTUCLcfR3ZYUihKwqnZAT1vLdC4h84Z8Le2a7VvmM9HhseuCgk4UwAZQ42ewSgWAY6xqAx1",
  "key6": "hrHambDpwmrDkKu4p9T7avDuWSHaAxdV3a68TXgzdPka3zTUEYfYoLbXvJnYXC5hBZMc36qKG57dYz7gEHHQwxa",
  "key7": "2DoreMCMQBEiTDL1W7uxtVcSA4V6HzbEkhCByWKgpeUaEY2UBQMRTkC8ZyorZSDnTgh2QWmYdWqUpaftQrLM2TSc",
  "key8": "3Tzq9veYfbx2YgwH1Kin1h2oZzK6o4E3hZkgKB6xpP2CNnw9YEhCJ82dCpkbg8CnDEPUtcrACS9XkN96QZ7kisdt",
  "key9": "42ZAuBg2AVAi3fz4s6tMcr5oM75ArhKR6zLQwqhjQTzoDJ8N1YJX3Tng6bq5YE1vmr3AxwAquTUarwrRpwo38a3V",
  "key10": "PEzVNSnLgERhnmXjNWEGURKNW4EBDofjojtxBxPPbx2iHuLU4RtEXhg5mGfbRnXR4V5qHdmR6qdZo3arVZKjUQp",
  "key11": "3TiYGPoY8ubyEHxncjBVLCLHThebkiCLsbUK1vPC3zEUktdBVnfNQ76beCJa9q8AMFHENPZNEGezMQntNf1ojCMD",
  "key12": "3ms1xMhejoPJBRJh8myfkV3i2uFib6K4jqQijxc9s4fT7DddpfReC9QDdAHNbcqvJsxjxhZzpn5XMvf5tZnMMST8",
  "key13": "4cqeph6BjDZ7EVxRZvfNAFULx7SSShtV9eifoAxa9yDN4ZwepWqTGtv5qMHUKSt5Fj74ed3SrjURoJrswnkcETFE",
  "key14": "5xL2meyiepDt3yHDogaQHjAWqAysxFJnE6GXwifyEg4J2DaU1msFzGrGwoNCbttPrPPetQhdSWgDxjExCC1Waa2s",
  "key15": "4FVe9u386NL3DQ6S48juY9i6vN1gQ3i2BkRdpnuJ6tL4MzNtTwUGL6t8821uMeKsewFVurLUMkBrcMN3DKNmqTAJ",
  "key16": "ESMNEh3WVz55DxawY4529iP2hdwU6fWyGpXNpuVQNDi46YTdciQZrBFt3MraqBPindk3PRP1ZNXWMPgQchxMjz9",
  "key17": "37QbxjtdoAQJtCh3JCkSFfF237fDL6qdaxZySzJcvb9EWLYxviL6Zm2pMa9gz2cVrf5GpevEJWP4hxbXmQnqgqD8",
  "key18": "41wMjoFpoUprXAEogvzXUnYbgZbUAiRvePd6n817WErHkMVgAf2ePrc6echycxGex574MRLbfV9SSwTtZXr1Q8w8",
  "key19": "3bLMWV9djc7WxzkfxAnz8yFUvcty1Ni71srdQ4dsCtTLtW8GwsxcYfajrGN92hEJssESUf4UyTARXq4cE8U15dQ3",
  "key20": "36d1fi7iAqBJXCiAPmLSUFghmzkqYsrqNKEJQ27jcnGVRwVscyfgps6qbujb6dn788xMFqXySWvP1AGQbQvQYrcG",
  "key21": "4i33z4WQjTkrWkUPDboyyUUH4KmVQYPvBcBUqwJNm648EJsSVmf2FCgYk7zRUzaTqMUwhPMEmV5gkFZzb4Q8kFYn",
  "key22": "3BtTzUdu64sFPVYDuL1fdw6JG6krZ361okkuujkYPJFRXVTZrBPFzYsVWeCKUvnp4QiYZh8tXD7E9mUKcFVZ2ZWf",
  "key23": "4N9S4EaKHtkAYN7gdnACwG3YceXRbXSUSefXyV3hegnsnNsdm14eXpXJhqx92GGDbWuDkFHYCLWhmHYVcGSRhn23",
  "key24": "34Eca82fN1ZUDGqRKQ8yguiK8MZ8AWoSZLnkpzrruBHA113fNtK4gEHXfxDUN9A7xTFNDrpAz7reBFe5x9ZWfPDL",
  "key25": "2kGr4Jadu4bueAgXCEWrY1Ewq9XC9uyLKawr3eFApa6wz7GTH4gA76TxdPTLAmCxy633J52AbygiyHwMWaBPdDJZ",
  "key26": "4gUqUwgnMReCZHmHLnb96bACHoCrKLvhpNv147JRCYpJdaXxCWp9AGSGzt5sJHmuA9KLUzDrd1wr1CYDeB34Ldhg",
  "key27": "4fsmXo5d1n7LtXTmdkkXCnfk2RLMz5uiY4FJLQaeetQVQHHDTAvhBsVDsgYPXfCqpFQiYogXvu77DzdEncfVAUEg",
  "key28": "2rZjGsRrz9wiQNZc3g98xy294CiZFcWtqm72CBQLhzFtN2HUWqtHQJaBoFEHHQR34NxP93Gn6NhEBxboYBXfMbMd",
  "key29": "61aBc443XpbTG24Gp9o9bF5XbX2NK3MX61cKZGJhuZSyP1AUzJNViEEmgwo2KmwZJoAgXTzcShcUJW8CrgJsiCYn",
  "key30": "3XLy75NSgugqMJ6G58XnfBgdtRTfkJfaFusmSzvmER88ySvGjxsm9KayiCpyiuJBkaoKEhmvcvYuqoEcJyct2rg8",
  "key31": "3csrViZ9jSr7b7hshcRhgsvmUPT2pDmEKHy4gCWaeAJuUxRLt9YmEwtrqoAqYyPi7BMa5rnREx55r6ZG94yHk8bs",
  "key32": "5BjMRz3Qypb1JpDa64jrn1kPQDnZsrsAs2VeUpfTq3P2Sp9QM1kJqACLRAMgYxmfX9z1fTZJgqVFh8iLreKzoqpY",
  "key33": "5LTBCSh5Xr27s6cAEwBshbvtczsEw3TaEaXi9D1VZj62DCh2bJrAyW28nPmTeb4i2WJaGuUKeD7jKYLkvg8WW3P3",
  "key34": "3qhUB9cFWvuuL3coTwnXoYCJV4GJkgoqDhMEpN8Vzdr2xXFqWWoUJbG14KBXHmQ3TYRHuHLfgCvxG1BYw3Zq5E4V",
  "key35": "5e8NQgTHKbxoh5umZTti3KvVhVCDcy3K9H1LitV5FEqEhgaRLc4V8JSWVnCFvY2Tc6SprxK16YZCWDXMhGA9M5am",
  "key36": "zLY9LH3PBLhFb5bpWQxKDdkvqfrzYgFcSbKUWhPUKpSVUNZ5vBizk8guXDd9BPF6WwggHoPb6N736XScCbsLYcu"
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
