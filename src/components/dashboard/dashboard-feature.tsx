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
    "N99QRrSMWVMPJJ4k8HYdWBTG3AKysbkDJT3LVF1xZ7f7fZGBnAmqmktw5UevEDnZbDTKQvnA827hQZPGsf9EY89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8sb7mWaa6Ugdz9L768NWdcnqMA5RJXrNmFiRfWfnUbu7CXCoU27sp15iEDhVkVQ56MotCFBd7iCUVu52jSmFQeh",
  "key1": "5SLNwhtJqychRrVkKzbF9evzcW6RdcRspVfca8nbbKAz7L8NNJDzJKeP7MqQbp2AiEK6xY4y2GESrafN5w4YessG",
  "key2": "4ZGu367DCvt8EjZ6HPHH876gyTdae8CyDAurRtxvBgk99BNMKfkN5v1s9RM7cRnQJzm69PWzKG6js7v81HENC1mw",
  "key3": "2rCdZA82bcQVDQGdkdEmVToACiiP9ABtaKnjKM63baaxZLpHttThxzyQJjZRuMAKtLA7vo2iwERJt5K1LTTTssii",
  "key4": "5kHUwSKFJJXgySz2iG1dwr6CSxA29CTcp24yD1D2iFHQahDMVhtmQJxLzkzTXMW5FgyQ95afx3yihUkdymipRoPf",
  "key5": "5LNt2Av3u1DX7ugipJ1EpFTyAaPXPVAmxYgwi9NgEss8H7kohpBF4RzgMPzeQfoBGnwMLKDGiSVVxMcLB9fGJrog",
  "key6": "5hzaJDmxzEE3QHkB5qwPTUVeaw5yTs9TfwRUi4e3iJGNzjzBsKm84fKKBWBDq7Ym3R8D8gL2MW3ktogixKR2aucm",
  "key7": "5iKxQzKP3rBLGNUs77f1vHrABDvA25qgBjdT1ge5C4YNGVVjyYCgR1YRYCzCmFBYusmAFuV3WmMJVF2YjRDvNbKW",
  "key8": "4MMUXyS2K53ESmYbD5ABXF8ZeUm4reK8mXy19ZFvk2jTQFJb24tZT2Y21gCv3wtkt5yGUMhkejWHaGmYKSfEivA3",
  "key9": "4VrxTBZDzUeo3LVQqsyCdUwRVyKWxbkaLESPMLLuydVG3JLCJtwJgo9tKmyJgvZmTJDJUzRzRVbYekbBRnwmanDw",
  "key10": "41ge2K361CTFHrEhNVS3Q99N6enqxGGCKuNmDV9sSGnNucHxzGGwoQWRGZqLNZBpzduhb8Q2V3NwayNkXQoSpAWV",
  "key11": "4Jd2yF7KNP4wgTSE4FqALh1zuP6e67NPDYHoxhEZcBPKRsXsfjdprdEe9pvZqUQ9JUhe82e58qDzFawoA8W1XuEE",
  "key12": "35bmqWYK3vjMwuu1n32fZkaSqBxpUbQku2ZjcSsVPxT8eGynLkWHKS1Th3g62rEGmness2MB25ezyWPQq9Yx37Ed",
  "key13": "53Xjb9319JMoTK5GTgWa6TdcMGi9txAgeggK2rE3aRMYcUDCcQHwHJEgaJUxnXQ1BSVvuTNpkguAqJTBApUNx8xU",
  "key14": "34NTtrShxdxvP6RR5f586ktpyw13BS9yd3qftkkp5R7vpAMGUeaKsTzgQWsDuEg7nPHUNagApfnFhAes1K7756iX",
  "key15": "5xErmC8VL1aUcXwAzcSREfVNJmooQhr1uhxcMSTukrtLYnW8cS4MSHrtmjs7Ld7h4rJsNyGhhCs26b9Ea1AzsaS9",
  "key16": "24kSTgHZgm2F6wd6cUfDu4ahqDZBo7PeqtFWrkFfyJRNb7F78TBakrWxKk6aiWhRP1vBdQTiTG1oeN52Db5D4JR7",
  "key17": "3rGBaq64oMftPGXE9zM6qHkKPr5LX1N8oy4PTPxqsZybL5ADeiRSavCgAnbp1aCGn5EP2Jw851qHMD8mUTkRbRzi",
  "key18": "Ap5b1Z1wY2y9a64yAxZxyPNM8L3rSm7Vq1DAzpAVUWTfodJgiGD5VYbweZRDfCm27Eq3BP4KopPU6iFWr4ASFPU",
  "key19": "3XN51GDcsDitPdSNM8J3Azyf1pqq4iaTbiT5Lx2Rgmii5oy8F4CJYbVRXUhjZMqhpLnUZtZvPnRqhuvFzLTAnGVe",
  "key20": "4J8gQj4tGxzfJd1gjVzUTWPfuz7tzeSQdMg1BLJu1hHqVRgNBEjBT5YYpRbBiqBK75TtHS2TNSvicM3VaC1Sex4Q",
  "key21": "62nKErArsy4zNpoGE7hkXcsJrdvs3Zc6k5EaQXn4B83XwSkcQcCCZDtAr3hNFddeLN98JcT1qD3ry8F81DGLoJsF",
  "key22": "YPRTV2ZW5DXBfrqCYzJigsx8xL6De4SMhi1aQ8FVd7JKjJG3hbBakRmbeq1YFYRYg6w4mxLXpMJCFc4pVGG1sPy",
  "key23": "2SrSm1iJg9EJ6FHLNpS3CaSLLsEanoL8w6p9MDCwspcguw6HYGKduEZDTe2x1RRJLME755fXKV76mBqFfSRU2Hat",
  "key24": "4jURVBQqbz8sg2XPiHKZKQ83RrqoPoXYBUWvRU7dwDRRPangmhRznk4XgFxXZLWVnTeYqsHCkqETnwfJZjLBrEPp",
  "key25": "ztwYA5FPZvmuNUR5NRx6RfwVc4kBeUSF2bwjYDHEyFq3sjuGC3KdTevkmgCCjJJTH4W1AVFJGryA8GkAMM7RtAt",
  "key26": "3xBRRGHgfrfHPFbVGFwMmYCe4qybmKjYaurEDieyKUtmPfX6omi4rByeNwLC7tFXqMLm45w32Dpa66cGniKSA9h9",
  "key27": "2rY4R2kgcCLDEYfHcgD69LX5WzsMy5QnMfm85rYnGP5S7CrrNh1ZcR6ZE3XHVvudCFQNFcZxtta3RfJ8PhTSAc2Y",
  "key28": "MgxVG48d1K6pDY6kSS6PkuZr36EnLdDSudBMdweVDXqNJnwwB1r2XE7NfWALsFYtBtD3xYtLUV598QwMy7JrSHW",
  "key29": "3FzwKNoZWG1TwnBAHbZZ8LjWrRwMpQWPzqWTFbaKfbV5yLPL2oFsLCwfEzoA3mtxAFuXi33oaaA17k59LxZqt5fE"
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
