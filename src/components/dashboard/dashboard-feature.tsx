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
    "4DdvetzcRBjqPf55HiZLE1pHR3JarkAQZ9ZVAGzkPsdVkt64PRGXtHsUm3KSeVRxCdJJzvvJH1ZnVZxf86Z1cKVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XXfgbZNFAbSFS2SNF9xALV6fXSxCrUSfrUZfHdNPABRwryDrrF6DTpzTS6gyFtpSQLjfVw8rjEhAw4YYNtunPfD",
  "key1": "65tFpWQXA23qgpDvH4vAA8MTpuYKTt4EYeLLkndw7YcqYewadJYjXoJboCNSAuJ4y2fSMVCb4vjhtMeXg7x8chLB",
  "key2": "63cqxC35iSQPH8TKming1zLBSLqW6p8cv4vfHR9YFV5PjMKFGupHUUGvxQFB65XmdrujLpucD2eVZ3Zhx56gV4to",
  "key3": "4WW9pAujAHAJm6UxuEfYVmUA61G8GjZyTk8LhWEWKjC9qqZnNTSWMYrNzmhwAnuWHPPu4Ze82CRV8dJFC4F2vTBW",
  "key4": "3y1TzEgytWofZHAv7BGPgQEis5yyevk5NTrJFYSNrDt1xVCj4MdPcsLsAhkaAPFTJ1u1KMyq5tVSdMwse23YJoN1",
  "key5": "2HZNn1ie9jYL3Uq7BSZpkayre1qaPH1Q8qjJwhJEh3aD3hmFWSPzePaS6TKhjoayvex9xVHti7ccAEMEE28uNKhm",
  "key6": "4WZoFJ1WY2z4ardqH4eQHPWyoFdrtLz7GcokSWD6UyDha1vKVtNyQ87i5qqx2E855tpuBXVzV9HidaDusM3J1AW",
  "key7": "2uRYbnoc3N1qguek1zYSrxze2vx5HBEXRjUvHZcr4d6fQ3jWg1YmPZ24c3uC2w44vLe4Fid6u6RPWmdzCLn6eaDL",
  "key8": "5iUBQJeuzYUpykRr61x8JbmZToMFy8es1ucM9AJxcFb6X8DvHS25kwaNyaeMXP7DuoPJAy5NUBn4fa6kNSzHPxjb",
  "key9": "5kjgLGpoXwUpbbLXenZdqS597y23FvG98hPKtwdGc3MJEcRjnJb9iZ6CWCb92HMMeZRCbKeVNYnQbPFoziAjuWM4",
  "key10": "4dJucgT8Lye6ch1tx94uFxUJTWTfuyM1CUJGZt87HMXmxL2TArmrwnwC79ex7UCdR37AGDGXvhJZxJdn16Nc5kY2",
  "key11": "4qm8wQb5cbp2DYTP96DmCsePDdkJHnGApceBFBW5qZpwCwgwyM8KU47MLTwqRVmTcLoP2P7w5UbtP1hS1i2AvCHX",
  "key12": "2vYNmNqCcyggxKAdsanqtj1j68Ds8DNzcVSKPuRnk395CnbmvaLuK85w54rTTqEv8irHkHTBczNibL6C4PGPWgSn",
  "key13": "93bJ9Rc1asAvGxjCacg4iZ7PGofeXRFP9GrXtG8L1UdLqPaCnvXjWZSt5j46yEpYdmuRQeXxjzGrtoGvcoTLe4Z",
  "key14": "4A4M3tpKhQ4FRgydaTJHe5rspN4sYZhtQ1LWGH7ViJu6kTziA4MUvgHrQUZpjusHbk4QFX5L45couFVVUtNnrxAN",
  "key15": "5cu3QkACyudGuXe9qxWZrR6UzZ68zK5GcQQxrPSPjgpWUMextPMEAz88LqND4mMdnNjDqm1L9BMMT1ReCC4R34ws",
  "key16": "2RokersQimHPEctJxzgoFDu5qzkzgJyfSnnDriytkmeSb1YDK6jAa7VTDDBqMmXLuEacBATanm1wDExzUJ3YwjT5",
  "key17": "DFKdsG5VkRk3xXQADeAx3rEzKdKB1h7FSjCh3nLJYrgBcxUArHb4wBT7w5MuPZfmDq4ihLjveoK78L8YG39V3Jh",
  "key18": "2JAw6yHgZDAoKsKrM58DrpDs74evaQxZsrNZ5UJVDX1FEUugT5mRMbC3igrADPmvSndDbKrGtugcRNCvX63AvXNR",
  "key19": "WvXXLmaKjSpJHHSpKZGvbJQBR9QZYKPjV2vLfpyLdEQBeR28LpwJg8Nu7i3mqkwfMAsEawuWcQgVgWybwQK4pxk",
  "key20": "2Zo1SCFxUHDHCoULDSE8dcmdzTzGXhojaeqGzMJcyGf4V1CBDcfM7uMKPAiFJEXqEEpfFUHYWvAfkXfovWcjEBHq",
  "key21": "3bPnm42q1hDo31hzdQXKZ3ZsWs1RUnFj8F6oA4TzR74d8RxydmuXEBZHSP5VUiQpLudSAfKyLGsEiqU4cShuTVid",
  "key22": "5opSsYv2YqCiwnnDEL421GSdJpYq97fvGk2JpnQ2S5J1PNKo493n97BmUuBkUmjpBxnCut7Zb5cYKB6otaHi6WsH",
  "key23": "4xoS4YzAZQpAVfggnYn7Cn31Aa2MFppb28LY7cJLdZabWfTj4crFeM3yF7djSwR6ad1vH9ydzi3FQmqPkUUSwcAj",
  "key24": "6sCJ9krKnbPtz94PU3cSFuwLb4yy9tc52YVs4czQT899nMzsQx2NhoDJdEgjK7R7oXJg6S3pnCv324MFmMjBNCv",
  "key25": "2wPfVJBsXqb2LsvXyhtnmtishQrGQfcUA7N8JpQCdBJrGzPbNnsTabTPwYUZANZE4WmkUxAnGkoTySVMAtjhCXFu",
  "key26": "4TfKotqZZMzPwazBMkKNTMTb3uryMTCwR3xQmRvaSyh3i5srhCy1n55cispwMycsPmALZgvGtedd264GR1KXWe9D",
  "key27": "2NChi1mPvyCWZaubwsyZrpSbhfRYz7MWzjeYFTXuTURN6GvjxpM4fxZ5RMYmwoWdtaTqg7Nv3gjNeU8pNcUFq9GN",
  "key28": "5bnLyaDiKb531t2fYFcUFuNs8KrL22UuxgRcUE9jQohuhwdjb9tQq57dFFLVxnJjA26Yr3x28wsFhUtfQ8YCWYZL",
  "key29": "XHH7BbLms4TpJ5fPipDXPYJkfcnkdvWJmzTsoV7wVCUUzuPkBhaXG6x5ZnZyJdh6TWqhfSwny7zW9AQykGrz1va",
  "key30": "5NrWJkLz3wttukRQ8pVy6ApVPbNwSS4g77rqHHC7fovJwVBYA72KxbUZXvkwm1FdPuH3T2h28tbQWyNLVAwVHEA8",
  "key31": "45v9hVSLzN9eSoXULV2NYJqWSGh1oFcVEPrQWmnFgwA6EmdMngoRT4rz1AxJbdJribke23Y93Hk2eg5KqjthfYuP",
  "key32": "4eDWVcgVdDrPNDRG6SjxReX5ja3JUgBsceQjmy53dF9esAszAAsQgBu6HabTV3dtWZJm4ZiwJ7htWqqAKKmwAa2N",
  "key33": "7T32uGNexkWVkh8u9Xaeqov2VEyvo2QYPTzLAVE6eHG6Up9WxkrjmYf288WbHgqk4s3VbbWK9mLvdGyEQxjJN5T",
  "key34": "3CUkhBLoguT5WujGtHPQRCnTarNDjXMxN4CNfN7BP6EtYrzBDNenHBXs4RrA3KYo4L4EN2kytKX19PGLqixBMDBh",
  "key35": "3iAUFmzb1n2DFkjxGESP7XNixWCQV1QPh7UkqBYQDuezdRDTSZyQUSZUBN3bPoygC2JyDhr63VeLoywr6sSDX6aL",
  "key36": "22Et6KP8khVW6GQfqFZ6PQE94UtzvXxxHjLZfWoSW1CR8sag292fDKyWWvsttox1qHibrLXvnYA4j6sdY6eJRD1f",
  "key37": "2rQWy1WW4psZwMSiXhMRAbzqJ6LVBDPqfduoEYUwiPUrK4xHhcCjJAS46MefL2Ww3CBrJBbTeJLW66bS2fHspJW4",
  "key38": "491wJHSjTjgd7UGM6hp1q8n9zU1QyLWcJHK5qBxr2T1RoDsrJNgJj2u4wKH8hdhW7g1Yj91AqMHZyZuHrhWr71sv",
  "key39": "qatCrQ9Z1oNeKi8zTfiuZxZ2t9ZstvTvruw1Ufw2SCTkNuy35U3xhB9ppSkFeS8p5QgwMsdBgZAFCJLi6Vpojax",
  "key40": "4RuAG2DyCAhNXihWVvn5HeY2FBbPA2bwSUf5zTFekR3eq1VNEEKsvup3zajerNAa7FvCkG85ohbBCr8kx8eAoHiF",
  "key41": "65NMUV6drN2rwECF7naRsenpjVqsCWZ59HEZQKki6BnK72qWRqoqHg6QMYCy6SsugUbHu8CtJVWnCuYbaLW5833P",
  "key42": "4iQ5RPj7EN9m5GHHUUAhvcMBuk5MxKeGGLPeLn7QMWr8q67WRbVr77jb2V2V8MdXF5iEq2wYDs7HoJRUYTCKFbYY",
  "key43": "51KufGMoYr6yP391ZXvCogTrA41iWs4xupcEcA3fPkthPiYHx5WdR447aJMUNR9owuhPqav5ZLRdnVQrhZSjbokN",
  "key44": "4oykwHDA8oNsunLDfo8EZyiFZERrihHuMDccjof4kVnXdgZG7e8aS4uk389YREkYHsM2Y23rqjhEH5dWrbNQAcgK"
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
