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
    "yqWCSNJPzeaZwu2Ny3c8gTSaS8qbS3Fi2QWm6gtjbiVtbrCvm1ifpdRRMHyE4e434ASGTD3o7N7AwQH18Amd8yd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JRbdUKEMmHuEWi3nRgwpdUVJoVu2mPDD2o9e8Kd9i7ArfYHn6dbtAUuKJTZbW1S2gFwp54M25ihqSCm4swqxLKd",
  "key1": "2LZCDe85pwGp6z832e7TeUvjQMPZTFsbAyj7DhMVtFgSpPqqjD1bBHohJBgnYyQonD1uqw1eG8YDQx6MgoT8Fk6H",
  "key2": "4jvcNj32QbUZESKYcbpKFNoFsHfau19w27kbuFxXXqSXRS7gwVfHNTpSfsbKvGViCPg1UTTXGeAuDUEJXjynUsSg",
  "key3": "vZ5NjyyNvaU9JXR2AXcQPWaZHb2xg5Ez2qEYCa9NHCfF8JYp5NX4Rn5QAHFVHCL6swwQ1GQn5aKHa3cZPjMLMSa",
  "key4": "5GAHirHMBH59gUywiALdoL83DGb8q6HeWeGRfe6UcQCvUvwWMsfauZZ1J4QtoUpFczc68LcytxNT4kFU5jsc8rfr",
  "key5": "3E91h27rV8YDKd136WdRwG6Vjq5vz3DCk72opxRxzmRhWX73ySbRkfbreKZEf7r7gBPmYQhCbYk4pawzGb9ebXcG",
  "key6": "2MG7V1WST7tX9GxKaL8CfBZecaQ25Xk2m6wnbo4f2Sqv77yND79YHpL3FnZGrfJ2PNo45PQ71DhzCwBXxj6pdrbq",
  "key7": "5FDBgGpbS3zGvQeqAVMrVzE6viAHTfqngopKWhBJBu1wPkae822XGeJtPhMrNRV5h4w6n3UjXRQryd7jbBgudQRZ",
  "key8": "2JMCqEPWSWYA37pjJCfESZBs1c7c3ERtuNyJXi9UtNJTHPV4tYiGSEavKqVs7GG3xAsXXicezEGMHRbrJc3x2Kuf",
  "key9": "2ciAQqdiLa6a3TDKJ5FMSLLmFsW3vuH4Rus7qpX28MJDYRX4S635rNeYzB3EK6ee8x4j7X4BZ66oYTWwTeLG97bA",
  "key10": "4ckKkTNfuat2WeLMd7jKZkangq2DkBsRhfk3qA6eqtYMR1er3Qdn7qrNrGEM33hXVN64VfReDzuDUbpB5xHQQYgU",
  "key11": "4GrhUViB4LvpT9qNoRFigRXRib5ZsFBRMb2EqFiLWmeH7EUXXsRo74oTuxgtpZvATqSCeNubUPEauCfpARLoWLe9",
  "key12": "62UsUAmZ3XJJmien1bGS5isom5z4wHRviCzSmLzcLGW5d8o86sfGxED9VN6yEKbZfDqiXw5xHDehazTGzMuUJwBU",
  "key13": "wRCZ4vvr5gJQDiJ8jVExPxZRQe8z3tTGzBMD7Ub8xFAWWUNo1LKw6qLZxak4C5vWHsybqDd7Bwdju3t2B7xt4u6",
  "key14": "ha2ML7sjx1Ackw3zhznBvbJdV9Ws55xw9QMFJ3vxZ11Vrf9gwfW1VbgqMWZ7Vfxzf4vYXuQv19Kph4cBv8DLJK5",
  "key15": "UVKhwNGCNUrbAxLNMQTyjLJrvedFBPCKz1fg2gWGeBCEynnnJAgebmbqzqrCar5ri7v9YrMFsAjTWECcgg4ZGA1",
  "key16": "2bfKtzLGSphJoC11Kbq6Z2YpFS4KzXFXF2DRDGn9AoS5zmvEet5uPykm2saLieyVLn1oeZrWeyo61y8UdB927Rwg",
  "key17": "bKK7v4p6FZXUyqrMhKgSDTeSUt3ZthV5kibFR9yjCh9vqnMcy9KBbSbtg1kMTse8aqUTy2EDPCMbGtShHNjZHo2",
  "key18": "7Vgij7xsAczoeXE1zUXoyosNkzGjN7gNqzW8nFUb11t5vxMY4Eoewhc7ptazrbC2LDjtLvKjeNBbNJMC7b6NK1W",
  "key19": "UU6RRV946VYw5H6cUnfPghYJYvdPgPQJdJjPDQP7XTGeM8yCcwqASARMxwm99w4YhsGCYgpPMzsxrYvWb3wC4UF",
  "key20": "DJ8Yctqv4g1uhCH6aQ32TTi1GfJfMdiB7V19kbASfF8gCJaS3HgfY4AGvE1SqcgyhcnVJCzDcyd27FyfUv4sWyM",
  "key21": "3vD4Dnz4zqyg12pjDKsUaCKPjndBWtgK8vVdXWiaj1XERF3gdeqUYY8BM5ne1cdW5atzKh9RVvwNSb7gHBFp4AQb",
  "key22": "2uzxWyBAqUjFHmGXrC7ph7qx87ZRU9U5Ww7gfcXyREARJVhXAyjcqiXJYTLsU93YNnBKkDSs5HtkB2Nxsq8AiSG1",
  "key23": "2jdUncbSLWLaz6dtrhC3XNHwWwDHrurt3MotKsdVjw8PxM7Zb2R3atoLnmP88USW6tWyQoxHYwuP6vDQ88VZC8aX",
  "key24": "xs54epJaVjPXQE4wEfePHcbZtZbA32ybhLcegCLB2h1nWdadbNNgqF461fZJcXJq5GVHd6rhCqcRo4BZUawXLm6",
  "key25": "2hHETU38Jp7DzTCACxvLcbfwDpB45ZMsUyLivPLzr13reeAS5iQTUVQsf9CNsPBGXi9wkf2RFwRLNPdWxNJQg82u",
  "key26": "5muFbjC4ewaxN6P7DoBNfAtCMBLL9YugrQKmCDc2BfNRHLFnRv6dYzabpmosmLg9H6R9cYD9aNNs4Jbdhj31SDvh",
  "key27": "4VyPEU6aXbRYWX4VVgxfDsR4JP1bwkm2fG53Rz1eXtd4TH92LSh6pDx5gkXpnWCSc8ZUy9MwmiHcHhLXKgQa8Ary",
  "key28": "Z4K4iyaazmpcPMd1LJdJnC8t8NVL2fbasDpFoWgYvW4BAtaANfKruPcg6HBy5cmD1Cw4rc7Cuw5zLJkdoKGDfHK",
  "key29": "26bqV75aAArNCbprc9dPENRQ7zAYqC3rQUtBai5wjpQjZ6AjYjmC26HSUgA2oDxMFyWSkXDM78TME7Zh48c2SkDE",
  "key30": "9hu9bzTJzzNMi8Hez3mUaYokULMUqWhJLgJqXva5wBHpLQEefNXX8VoXWJ2EMKRNnR5KVHtnVubbFscVBMvgsSh",
  "key31": "2M5LwD8GmCGHGiqyPuHWoCumrhRGpKdurdnrD4uhkPFKnQB5uukfsSeLvwonWAmB5BtStuwgG6CJC2183WkL9GBE",
  "key32": "5Wt7FddDaY3R3mHrPiJbfsNgv1w5LTdH2vzxQzMUKam5u2iZXQ5AW13NdTU3U68kwGDyGxmJm2vqXdpRGXBhj3ZY",
  "key33": "4NoXHBEc7WKGWquxCaAC2Tu8mVWbbxudFFCEFr3HZzZQW8d11bbQCkNqV2rDZsWE9VvGX9QMe2q6TLip2ETSKfUo",
  "key34": "56WcQWoGXvgeiYk8DJDHAhiQAdfCSKMTXe17jj1njqp6uh3D7po49SZmfPRrVnNKRTgk279zHAXm5W4keXREZiCx",
  "key35": "4DNuigRiqDNk5h7BKfWDCzDoYcd88WAQDeeg8Ssha7ewNxxUwkJv2PEHo6ifwyyesZ4g15Y7GHHwAQbUEtdFmMKE",
  "key36": "2Ny8qCovEoBDgtPEEnwUjLDAXCka5Ha7Q4MKrtb745vnNKc8niuDBQG3E4WK9gagPbFSSptNGRvTSmKyCxtS3hx5",
  "key37": "4M19veCbZvaNwLoLHzc6cweKcNY5myxbADfMocWq6t4rsaConp4MfkuaH7pMQEwC9Ys4rUX5ahrUar9CeczNBvXa",
  "key38": "2Y464SkfupCwrhhV84xHHAJNUfSVYkR8yEYeZMFtMExeuUteUfoUDpfEr8941p7A8yrt8xabzqdBr6ywbUHzY2Fk",
  "key39": "8DRH2CaYKZvjU4j9By4Pa8L1GnosPQ7XZvtZSXSAz3CuS4x2ToU9uyYjo67YA2eB9rS14x9dLHDNMCmr9Pf2G1s",
  "key40": "2hLi6ghPcfKJ1NVpX3U6ZoZPSYasKcvZpEgFTvHM4Nc3Bbw9cosRY1VsLUXd8QJZ7mpeWKZEtobAPcbuACR6henZ",
  "key41": "5rTRoAmu1v8MCpSRzFKVpufETY5CkzeJEng5w8RAVbcaHLWu17F5gC3cbUpTkaELdyBM6rU2puLugroJaef49vto",
  "key42": "1qScdTbZytNvRJUMeJ4ZfPyz5oY3Nyx4LD6EFfHxdDduxrHnN9nrGnRyjfRjm8gjZvpDzCcB3iuYgJ89th71vTB",
  "key43": "4ZrkCLtQRDTnq6QD3Kcf4zT2FkCEgSWkU8jMybh9m2MEw71G6kyXLTwND5QHA626z9N7Zjg3MBhjTNTNPs89gZp3",
  "key44": "54tWEvMEELTPQnJ8jhD6e7vDJFZs6tvr8unoaFK7sJH9bHCkGSmNRTN51xshjhvvqyJZ8JcAEbtJC1xYAPkJVDFQ",
  "key45": "uQgsp3dTecyTnzPHK6u9RGqmw2f3QX7gqwn6vPihLdA9Ueg2oHqYphs2FfQahdm9WaAeLaJwYSJqYoy1GmVxBz8",
  "key46": "48QsjqZ68kEDBJbNLtvtqpu6AjjvwRWffpMbys9wU54FueWRNJmzjU7TxxVKLVNnzbuRDGoGkhRBJwi8HSVbuCU1"
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
