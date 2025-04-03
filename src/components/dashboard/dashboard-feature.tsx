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
    "4DdtgaEVZuN2wbLiemhQmLKFhbDrztWN2KS6BSWEEMhuDgdhQvd3SRUg5wkpDVGF8PEaJ6BLxmBiKqfkK4spB2GQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LjjAsBsDe7U7UnwG8svWdrCMUYeFnjRGH9CDTfvuXWKPMhgbqmnNsgg2ZYMTZHb7v1RCUqrSuKkBXMvJqksr3EA",
  "key1": "58Yd6osRo5gcpUKjkM7FwDWa453nvJeSrxtZiQoWNPmCK5KGzJghMmLdqiUAcpLxTrZvoMyqJABwdZYAxVomYYUe",
  "key2": "wrrUXRNtm3uVzR77TTPXn5fkErqN3TEooGjk82fcpE6KrecKzDS3xuTXDRpgsEhYKfqZsiPMXz99TBfRy91Su3f",
  "key3": "5gSx1LrCtgqhK2GnBKPVRuq8EUD6JRanzVFiWNZv3jvkP1Avk3rYwKjQXhULJ4MR7XzvZHyEBzP47ySv5B8sN4kZ",
  "key4": "5SY4rNKSMgWphW7dF2rkknKgScmCHUu6AS2TDNpiW2iLrbBrc8FLQKjnDNsPGQtyKBEzqWHZ9X1HkuePH6szzG31",
  "key5": "3LN6mhgpuFqxEBU5o3vXG8eq5ibF6CHUywDA4k7FAk6TeJehjmFGEyanU9Eb9nyRHXvVHJ82oQYZ8QAGd1ufWfaZ",
  "key6": "3nWMoFa2fLKnFLMTEQd7GSteuo4ZWc5ugB49CnnbDcmmXLsYvXuMGzKb2uXGSz5QLt48EKy1ux6cKVzCZqk4kMHL",
  "key7": "5gcrDJoYkzkMnbVkJNQZ3iqEDBcon3yV9ssV9cVNw5bJp9R8aTSKaxchhA1NVE7hnhb3e9btyuTHfvU8xF1wRT4J",
  "key8": "3u69iZCW5Ys2Hs9eVCGas9tkXRpMP295Q8ixBDhjJ7X1qYmf6SDL76YtwhjxBTsRWHDMCSg8zFUwp95SSesZAaDP",
  "key9": "4eAyYbbbsemNX4v2T5shZrdJutsebwH3trKngb1fBMZmYGiRybvJJknGz5E78MuciXRooPPavwhErezC1SsZ1zie",
  "key10": "2sRojjayg1d86fHyoTxW8532QrzsDr1w9k61Z1Ztz3ox54WnYWVpPkL8yUpVVcxvgCvgYET3XPR7jJJ7q1tedu1J",
  "key11": "5623fbQp3TnpaQFwJkpHhkQy8GYsmnq8fqNCVx7FEiG7RqWgBsX9MBMWe9eQqRf2STTpMrfkyyDEQdFsS4BX1djo",
  "key12": "4zNt6Lz6pPCfEmsioywsS8xQJUZpSggLFQy2qzrhtM6WVSwqKKoUHgGjgfCYL4pGvMgZZtBpDAzt3MDbbjDYp9cJ",
  "key13": "3o5yJ2qvQnR2vWpmpagDtte8EYsQgSHyMsqp8uyzqWeEG1otG1GFKP7gkweoyVJsFMhGT381mwuuQQqbg4gmveEF",
  "key14": "5ePgfa1y1eijsAuWahoUc9uY2mC5Hvy8CDEXjzfEaZBXcJKJAxnCqyfnxCJk45XZPwYochRFv8RHBUq9nfcvWxeu",
  "key15": "3mL5G48fxrzKGCAvhY9uLiBf1WYn4UtiGsQRhYeFJbRMMhjobnH78Jk5VSebCyjGkuAU3gTjxApZ1tb6eTavcYR2",
  "key16": "4VkNUfnD4vxtfP3QwBu32vDfFkhdNRVNae8HvsHGct35BZ4MvCJ9SXEGbeHeNbnM4xP4akze5dzYMXfUv8SUL7Rv",
  "key17": "nWZHsHFtyGQjs4LArSmQfv3tZk9rVVdLy6hWaYQvzg7VW1Fa9C8bqNsbr41jCXcDveocady1n4TQoVr7M5GJaFT",
  "key18": "4EapsrGr242nZ1ZT345jyVdUCwvN5V3683PKwEkaWuitXfDoC28VTx6gT3GXJGT1iUj7bSdvEKA7ZCEzcuCh22mU",
  "key19": "5EsuNWbBH8Xg2GVVHiFD1PmBLQnns8GPxC2TxR45EDJyCrNYXgkn2MKHoPswWkHrsPMeZb79APqVBFrZmkSe7HT9",
  "key20": "AGhjHYZu3gsfykALRYqcCCaMS5sPoZqyfTMiDJBXBan4mW7Cm2QM1MQCQmctC1BY37HgLyeVHcipQBiieEwDjU6",
  "key21": "4YhXtSG7aXATw5zpABUtL9JhRD5xd97WnxaW2FXMcbAbKQWF5g8YdUdC5dFii5dwP8zrZHgfEZZ33v6c5F5LhMu1",
  "key22": "4vCC3bkXifT75RHgw6ZoNbzsHFZhkPNqZwPBiwKPmHgK78UjS8BRxebD1xQUuo5iuJKmq2KZNBWEyQPrqDE1f2Jp",
  "key23": "44J67xVpcsoHdULh5CphDLu8MTWcLaaGQ4hNEHg4NJNKxYWGUCu84joKLTGAnvEGg3vPADWQVFn2KMTryfqi1FTE",
  "key24": "47xeVs915AbaQo6s8bRNR68Wb8KeovNAK8PvtFzB2nTzPeyByhbF6mzYBTTYPq3QuVqPrvoHAdMZkPCYDzyEJzzo",
  "key25": "51f4jaHb9gSJ7EB5xdJhg4Uf7naKMFBuUCAoCUs3vhdHRJ8uehrTauzAw2F6YYXSiQK9WT1edozbuytTY2oou6xF",
  "key26": "3pGWt2EPJfeKGRki529zUGeXsddduZHPp1tSRzsUEFJQ1QwA3iJkAaiyLAfE7E54aDwuVMuBvtntrHuzMeaVKYdN",
  "key27": "498QfdhJNQCVpd188voBJr4n52dAuzVF35JCMGcupCRj8mLULdKDd4jdqanPiyYCyfbr54ge7b1Uu4kQiy4e3GEU",
  "key28": "2seDzHAQcYV5CN8etFuFdG4ToN7zVpZcKgFLtj9Gcc4yn3ZZWkC8fZSDCDQd55mj2t4qjTsgEUJ2ypdhQJUAasLz",
  "key29": "2DxU5T5yEAYmX6Ho7eGVkaTjebMaH1uiCyypvysvMXkvRTccrPkRGEz7k2SS6JbABKf39TZEDqGBm1KexBtvDnWJ",
  "key30": "31vckd1ckDisH2fdx6o6T1krHTEGkZwzDQ4jFfMwgc25pc4hf7sy81RRD1Hi2NXqT6picKeU8Y4XiDN2AAPWTg1i",
  "key31": "3NnteZZAtqhPc3DSrhWKxX4tJWATbRwVpQCMeM4QbZi4QdQJk3QhiBAU2znrQofkWtEnqFNtryigohRz9dBzVqhD",
  "key32": "4V6oNxhhwcAFF5MVqCkKmkhX3qC64SBZ1pPaBSdGn3Hi6dLw5iEcumF4jpJvZoqgWc4eRw2vgVsDZxSH1jYifyZy",
  "key33": "2UmdASuRtdoT4fKK7xFcAtEVHwvaVLFZyMJbpy6SbC521hVy771Zju1ZJTJDiKHCYyZw5RB724eReQAzqkCRh1At"
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
