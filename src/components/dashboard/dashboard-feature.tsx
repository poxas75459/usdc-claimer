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
    "5Tj2WqTLgqrsAiJFgEiCz254AUZp8q67zGxx4RMhoEsD9zUXKaUVcKnwkZcpN8jbGt5vyna1Xpo5a4WsyA38heAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jQhKbKjNqKKcRi86TU1Ypj8CGGdQsXnRs26x5r5LdXzmnCtLNn3HBB39J1P6V88ALdQHfQGeLxwb4MAc9ngNxha",
  "key1": "6WVbWszTS3aTVHuwYHFqHH2CHj2m7ednjTueGRQaNgXR7xBnu6XNQtpmntBV3pZCH198Hh7qvp8sUZaYgFfxUd5",
  "key2": "2oUbLamdUbgi9VoueCLDGEJjLaif6aCTGQi1JK2DM97t4LqZQnUEfcvPrMhfrmn6vwrsQ666oQUGuQhb1C8vgUrE",
  "key3": "2AaMjPwrEMDj947czFQD7WThLGNJ9cFZzZ3EcAbgbwcPwte8CQPVQEHJVE8CdQkeNY9q4wvroe1ugaYqF5m6af3f",
  "key4": "3LK7ZyQSJVzRBnZgPBxKFXgmoNwLzjCTeRroAebm2fAALKtpHzRq9KTcjkAKbBMJ5yjPrHQnYyy5gTeyh2qyJzFW",
  "key5": "4iAfxWY46TrWRTfRCdxJqFuankGcPbhxhgs1gZ5buwa7aFBBWuyWQfdWuXyRG74ZDdp2o3RMfZz4GwUDpLYSoFqv",
  "key6": "2eyAqfCCQ1De6KviuvwCRiwXYWn5h3BL9wEJA5rAFjMsxct2ppyUJpGHFL8ux2rWGvEEoC52zH3jboFTQGaqfrRk",
  "key7": "5T83WgVgmZ4nnMJeZGZAt3wYuqeNnwGXksbDJeTFCQcJU5zX3a9vwLGXERYew43d31f2i484jD26V8QrPs5B9iML",
  "key8": "2EAzbyZuRTJqG5bEy4tymSojRf7hfcGzW1uh8fBE4dMTAjf5fwJ9q2qrsMbEqhshxSC2cxrcWwKtVYK3RKh2khBk",
  "key9": "DoeEgT2TncAgkhvZBH68sHC2deBRrGNPzBpa9HvUwyf8wN5A7MSCQ1hZvHZbt5Hr4hHFxnABR9Nio1oAwBUxVT6",
  "key10": "54QynePM2mcpiqXpFT4NKB5WojBpKHudfV7TtjhwwY5muCRBtCgG7VkaBhWwfFpogAYueskarW34zevvfBZqUwje",
  "key11": "3vQrS9SAY538RM74zfyLrAsty6TMRwWxMMQD6Nycd7pVi8WWteo3qLE9G4At5RwgA4i3eAFNrKzx8oWYnT6NE5dP",
  "key12": "4z6yGdZYsbugqJgMPrfDKA8P1YGsPWD61a56DVzbowZdE8v2vYaHZ6dFm5ioo4DN29fJiho9x14D9sk6wodeFKPH",
  "key13": "5jBNS4GwJ8DQPRyD2KFymNjkjtrhZ9k6CJoKnMCi7WodZFfwmhuXKajopxt69aVMJ9tHJUHodMsduPfyEtoBsbfM",
  "key14": "4DxCBU3W5Mt7UEvNzWYQrGDnt53MfAHHFg3Kj2qkAcwDDaHSuFzvGGczQtNRSuPNykMHwGabzppGG7P8AXAQEDLp",
  "key15": "4Qv6H7ddcueyRoEXdURD6v63oPcwTvACsd7XncNox1q4ABwBetdWRdCHskNqzkyVP8YaSQeyjr3To4BVajHK1oDc",
  "key16": "27qfYULBirQvo3aj6d991ZQ6R7Cyij2RTXf7tVMmiBZLPxq5zeoWdTgjb9J4yEZF21cEEkWfDBLXvEHDZpYehaT8",
  "key17": "4FtKSHEXusrp722Qy8EkkKkWXznyZhJ783xM9EuvqvHyn7g5thNHtPCwZ6riKyi9X9k78zBV9J97K7e6HMRjNNcj",
  "key18": "E3DBuH2Q4uBgGrxaDNY8Fszj1P7sS1kmiQweMjeuyjwDzG4HevVxF5fMuWXH3KoUUWiut5KbMpnhyvFJoHvUdfF",
  "key19": "2J6cxwFfNAX4RJRhCML2r7feFBoFTebMs8UXqmBwoVuea7Q2Ygihz6Hf4cyfDrQhf8StJXi41a6EAp2ZJQ6QvLqg",
  "key20": "2RtkVNUb8i2Au3VgDuAgQYSeHwxqSaoG9Gfbu6gjFfkAedbiT8xYaTzrLziGbNhebdEbvkRjgufpo3vDZHPpDtiT",
  "key21": "3sWaFTffnnfsH2jSwRCHqbnMkfij1sime6FiCj2GoHZBmAcq3z83y1rn1iQUYXyP162hrMi6k4PhP2VLPSHJDfEf",
  "key22": "2H5YRTQkrh8dJnLe4gStkUEYF4rH2E8SrFaXyHC2VeK8DUoViJwLvsYyByQFdxRKb1FvZQsxuzzqHi9yUPnw3TjX",
  "key23": "3vqZkpWCEMwBuSjgdrr3NswTJhgLojRDVo584xbaVe3NpFpK7ez37UFvEPii69zbLzv7zmUnzsdF6pxXGrkkuBb2",
  "key24": "2zZqs7sibhEnSSjxb6ujy6FsyrJxmGXAavoZVTejhVMrezM46VQ6YN8onwe7b67ZDkG8HRMidfx22NypdgppEWfH",
  "key25": "3ZcvAkpVpkeHpCikg7rmQduiL9Ba61qu31sPp46UaTSsS8xhRXY3E2ghScRk5kG9frh2AN59RpAwvq4kVuXGL9rq",
  "key26": "52gQTqoDDKeHanGwWh2LHZ4WAyJyw59Wm9F2ttEz5KYi2XkvqNPf3M9xZFbkf3XzX9E6ZM39f9drptZrsF71x9QA",
  "key27": "3xocWmkcnb2DmE5eoq5PXwxyuPzFGBZ7HCZV4YCyxYZHbhgGWL8phrhKvNfHchu5wBgpMHheT3BfTK3gtsyQN56",
  "key28": "vnyr3KdST1sjxsvsM7cFAVBP6w3k7rSrWb2QHsKCxWRZUrzhLJy7mLLGE43y6MFp7sTvgtxVo4FjdXCxcE4QbBW",
  "key29": "2sgmTu9E3iAHjLmGgEia2x29rvozvnyux9AUDknRPN8CPJCvv58QZNTvn6aHsKsKcczRMfC1e45LPCkLBoXjxDE3",
  "key30": "2MyURwEWgNbUMZKUk9GfP8NZtEpEygq411iobASVyfb3oz74XhXZTr3v3V7zFSkFSAuQ5Nabp21XzxyhKyQ5nuRt",
  "key31": "WbtPbnVGm9oCMg87Ri5ffiNVaKnEz6zi1R3T1vhEHX4v8cCXSJBULCXZRXt4NjxGzAT36pp7i8B65f5iN5Lv9V3",
  "key32": "5ciKn4EehvYtk4nJFA7N8CYaVU2sRnLgpaoXMsmYXvLc6DXTdShjE9CfBizXv6etsdaVt9MUeaaiwaJh9ySN39CP",
  "key33": "4wrUBLdBwbN41CXDu9JNs8BEazTqJgadWnPMErmxWgW8hw7CRnkLnNy3PDQbYbcdvnsPgWSTaJMWFV2uoPne1LZc",
  "key34": "5vdWFsdpKZ2zwoZsgUjaGLsQ2vGhpYxZ1LAs4NX7kTfZLm7Qv3AXA3b1hTEeV66VpTSQsKQV25w3FzjdynNFiixt",
  "key35": "4JaozRyGDDtHeP4cmD5PGihpBqFPyj3Zm4MEQagygvF5iv9jykAomsvu5kJBURSvcr2JzhP7cs642uhnRhtmjnNf",
  "key36": "XoAF22zBASogNxmMJUBsrPPV6WCmgKrk4qg53xGv1GejbecXhXSJbfNzW7kHGHZPrc3WK2rpREmiPPLXADs4YSN",
  "key37": "2MFhQYHCDBtH4GEFnrqAk3GKe2Vbb3nccYzkh5RaT3jJfU4DzoHvHoQF9YW4EEYCidDPUjtpQFMWeuPwGTuCvU59",
  "key38": "2QToKHnht3ViMj3pgrKPcZ1ioveK8EsstPF3HqEVceDcoCS5n78UFg8B7t74R8rjRUV6K48ehLZVpnHrwYVyHXPF",
  "key39": "2DNUUoo7Y1AjpvUK7WpLH6WeMcMQaJCkZiHEHwD4v3FtVSDx9Ax2QnmQUvKWo4midAagx5ZxEKbnN47kyoVY3gdk",
  "key40": "5VbW5sixa137mVuiv4ZxZfCPdmiRC8UzwBaL8ExZECa1oJVtrR56ETq8ySoZdunUBMxCh8HxzokNDwdLAUaHuNiz",
  "key41": "2pnvXkm1rKUBtyedNhg4fsiQBT9zG4SWkKHtcY1E5UanubU3SNtRyokihmxygjtc3pdkXqYaaCjghcP5sXkKumaT"
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
