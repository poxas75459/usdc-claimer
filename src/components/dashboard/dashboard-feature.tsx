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
    "43bwjd6QQ8bAduyazVKkmvLcETYQaQpfF75tBzYbKXpqba9f7vNadVZujou3T2m8nPQCFm1fznX1HeET1CtG7nuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "556f5Ytbw2dngb63NoMh5Q4stMWYJbcPUAj3ZdwDwqXvk82rZss9y3qiYHT3sRAQXN124WVJfVdXtXyaNPsBu4XH",
  "key1": "4M4uZE4MguScjE3Vpoew79t5Re6vxRYuGjf3Z2ndkLTQ3Jz2RGsRCMVshixLyMx92CDBtR3rM4xdKf3PupmKHYnV",
  "key2": "5QyxMTat1LKLA4TKRoQZpspo5J3ooto7RweYMmRoEGhYGQEbKMjD6NTB42zNKBasFns26U7Lm3dhtUVR5YHJMMkz",
  "key3": "5c5QggYUbWdWEdYK7fctsp4hEQxsyNAs1K619fbeoP3xUzGgeYrcbK6CUWwjHfdZWHr8R94D1PaTbuTme5uz6Rwe",
  "key4": "5EDMMA7zeMyLQ6ykiTPPmzEApL3i5hFAVhCDAyRTNPx25PegJdDEfurMLxtEvnZ7kUwRswGJN1mcRHywQbdJQc28",
  "key5": "5urKVJn9ek1LFiSADRxbBNKJsgk7c3LLcQUBqqE76bsyPUCarVbTVi7uUqfsFCjUoimiiPMRhZi7hLRtJ7twzzTP",
  "key6": "3h7VwzfiWvfv3NUitNa4PxePodsRYuXU81GFURK4iZipEN2egecH2sXjMBuGhCqy5S6baVvh2F6H5C8uU8T4AmtK",
  "key7": "4cyzciVsuyaDD6KdFRvCUVdiqBt6RrippHdXUoLipiU3M35h1Wd5ENBMucyjWRZSTFwWu7DpLrDW7gmziBJKQWGN",
  "key8": "4XrdZmEGKzod2djZmXCnXkNkGVcvFvrffoyqFgFHcvTpn7ivRTeSHx3hfch81wWcmzX2TU4Ku1VEuSg9wCdLciRH",
  "key9": "5ULsEpnbYm4mMPyZPUu424KEDxGQHy3JAxNMJDYhW9ozADFQMiuPdfF7k2JYeG9vzRJi8Fk25b8DPsDXM7gBtA5h",
  "key10": "2RJzRmXeqS7jet9VA5yyGJQCwykWm2KPLNrcNnCQUKE9ATakgFkNKrwcKSBiNCfhMGFFNmTNS4b7bJeJg11qxAoL",
  "key11": "297cEH49NCfP5nt94jyKPQpCDjimSKDvvM24PBF9NHKe6Sts2UNN2hnpYn3ZmsCuZUkcGJuZnU1ZhLYi27g5eqR6",
  "key12": "3PwUS6NKTn4RYG9TCHVgUsL6iuKoYnTEVWuwewLaoBEf98B54PoJ7fV5kubVM9ZeBZ7FFUGCo54gBnQ4nbSAzKws",
  "key13": "2qRS1xG5x1oREVDaMP4uE8DZ4xxe2szusMcaDdMZ9aV7TSSH5a172HD4c27qnAYaQQgv3SrduzGdhzeqfk2vntCe",
  "key14": "2eddiL8gVr788kuSq7YKJD3btC6paNmFkWYz2xwJg5oej7KZj5MQeTPtWSE3kVmzgPUEZ89Jjf3a5jrxByPMkDEX",
  "key15": "5XBYgRjDMfW6PTNx9ePg2LAa9iw61K3WsakxFAGzWSYrcLkM9TF8AdAKtq5mQ6h7xepSxSbVDM4dGMd1o6MXq4wM",
  "key16": "4qiTLKTWKawKficX8ASKbWbzdUBbzdnzeY7gY6onwqHDw7WPhDyp8aBBKDcUz53Ca93ML1jb6Q8vej9YR9UAF1y9",
  "key17": "64d524yiAembD8wJFGTK1Gr2ftHTGaYXsC1HRY5wtSCUGgBjUgsBrV4Zcmxh37w3CnTBxRZvGsUb1j97AB6Eouzu",
  "key18": "5BPASDYscBWJa5a4e6oMKf4sDjSHyfNcRZ7YfNQLsD3iPtw2qFEPXn6SmdgbB5vRVGaemwpYWz6gwVxkEAUML4Nc",
  "key19": "WNfPuX7zQYwCy2TJPNBsZ95kgchvoisy5jJPikYHZ67GZo99nz8Jmy8q7MYHJURVeVYKmyjuoZG1Ujj5QpNjuh7",
  "key20": "3zWRbC3MadxXiZ8HNx7PCF4nNzUXB93ugKjxLevTbKoD322cuqTDAo2uCuSfc62GoXeW5J1493wgDDwtvciR9DeX",
  "key21": "46EbmTVDDA3iw8H1nVmNkTczXphTDYg8DzjBkHMHFg3Br7ixDUmnQiDXdNED1QBXMrjpYo5uPgu3JAadsxTG4J6T",
  "key22": "NyZwsrTqYikoH7Kt2r9tjzTYrqAKYRhHZqDXgpAoPdHytHXUFPz3qMjdWzPQ8wNjvUiw7z6T5aCH59hAo6GdZtD",
  "key23": "hhVYe6jShYio1M5mv937EETdn386yF6bawkCwnLYfFZL9RJjH1MJiQRoMMrYXDdJxVfCEBTdWbxFwySQcWSNhVL",
  "key24": "51vgfyNSn7JHRmrAY2gAGBuUnPgdWM8GQcLugoRXjztJkexF2Jhi3grLLRHQvYYrBPnPzi2tNHZaYJsRqUmrnHJA",
  "key25": "Y5gN1LdEfysyGpFdEfmP7e9LZi53KsEXp7xtBd6ES33rnVhczJBQ8Qu6BQsNYWJQRujjm9iz3oLmg9GUD93tNnP",
  "key26": "rZXt7iwnLNaAetXcCRthg8A3dtAStD7pQjvZ7UpDjgTBMgWLkg2jaZcmPTa8tUPGdBuaBQoguFpWWt1Vk9sEkbw",
  "key27": "38byy4ozpXsgVhfeR1emjkRsvakxjHhjNPRxALpTFv551HkvZABR7Y5XowMDgYqyr8VDYsApe5U1JGimrKeqiwh8",
  "key28": "3h2ANL6iEnGZPSogmghU6bQddcZPvmBFx8NTBXsquujS5Mo4FhTsWRzS8o9VdbDre7vBTLxgjcqiBDKRBLENDTju",
  "key29": "2fNQXzUUoKdqC58UE2Vqdfmmx6U2imE4vhV8cYQgLvC8psunS7KvhzMbbZukvSe5tctkRCrJeGuswp45v3oGuU1b",
  "key30": "4uV85WwafkcijBWkhHCg7obsHeNFydgC2U2XhaLbuTpkBWN7b4c3VyXbs3sWVUR8yPqCcLQXF1sfDeynotXfmK4S",
  "key31": "29EAcfo6M79hJSZdu794Wse57LXv8FeVo7R8LNhbdXDYHcetYG9QtfDK1Ybwc9bJeNxkmE2vspqaspt4kER54yhy",
  "key32": "QuuwxfUQ3zNXj5rL5JXofQGaa3j5zCWNNSqJ2MzKtQkUhVGgVo931LMuVHqfXFibsRx16Cmd4k8G4aTpPCd2oPw",
  "key33": "55u9ifbdKVZYeQkTMLtzuh6xVWpUTBU999ZhiFJzJ9rRgEpHCnkPDZw7wxvhCLbquS5xnTHUUyUbgTPH2dmQAuX9",
  "key34": "5ZiZQcnViUw8WYpuJu8yoF685wyQpjg6ZerW5PdHRpALuRL6hzeYDFhomCkeMFe8VnDadYkKf6rFp19ysGiD5Mjj",
  "key35": "2QTzY58JnhVhd8CohD9s3JDM9uA2ETH11bvwYc6tanHSBegmDjrtX6Qyqp4XFduVJ7cdVYhJ9YkdiGy18zdvGLD7",
  "key36": "3hoTWepDq4Eh2NBu8FmoVbULTCQeKzCov3Gs4VMcLnKaCnTCvGZdXfr2ophhpYdMzCp7anEdSXwygsojrb5ieRXa",
  "key37": "41d1dWK3zjLEmPUUMHmXC1VNbmR6pXZWYujWWteDzoXSHsCinsQq1aVpxtr3qvi7h7WiMR6v3HuRq5zERVjoYpb7"
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
