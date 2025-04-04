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
    "8G3x7qhHMHba826vgecgatNQ41cYVbfxTTo7gcJapGb5RQo2ku2zEbea9hMuUyiVBzENFGCQjsyFiv9cNpEUmTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sUrJseQ4JaHnz7uhnDxttNSPiYg9jr6GkZZEYkQgwY8bFp6TPj6KRB7139g1SsDDr5LsYytKfTxC8KFKq7tCtRN",
  "key1": "52ShZLfohPUrz5S7rnK2kfLypr7EddREsbtH1uSbeKwPW25ZWBfbut1YM7DVwoJjdGTnw6scjJC7peRue4qKm79C",
  "key2": "51WbBhgEsgYUEsXng7TLdMEh6FvPAU3ftVFjkvgoXXPmGkh5uGdLnJjFZcyweYLSrd24K25rWRaJQs91WasVc7wD",
  "key3": "4AHtsTjtRbZSNjeqAcz6Mkk1qh9zagHt2bmGrU6ss7dowk7qTExrmES4qnNFqkBVn57vtdhAyXqDbZUmjGV4LMSf",
  "key4": "2rJXgYWXFGHgw2v7fqd2LBj5ygGC44n9ZoUdQs2ePwv7muYTMSyyQgoyiVfqjyCvyheqqLSHNUXQHzDvwLqPiyip",
  "key5": "5vNyafzjFHCzYrWXdzUo9YFf3Aoh9mu5EKfZxjg2RjfHhHjTV6UAZByBUTnP2xnrEUvTtPWaQ6BN5Ub7qcsfBs6o",
  "key6": "RMkY17wxHjWUuZGQ5SBRRdgK6H29ujBzYN2xjPZKWaHyjTDg3QD5ejt1y5vFpvUn7XNUUJXb73vBMzNUG1RZqkP",
  "key7": "5y1eDqvdwB2EgA7gTFJYDP95knVuZdvEL3xkHTHvkTQNAgiYgScFQwyLYAHULXhCyoXp9vrH5xgCGWE2bfVhok3L",
  "key8": "35DAykdvLPJ3nqHeCdfFcpkuXXCVMQvt4T5Mgtkt9BPyTUz2ThAPEkLTuTF5GcK5jyqytszTZebKRWUhC7jVu99m",
  "key9": "5yLoTpZdeLZYMb3qS7thSX2JXChrRPJd2rP9UuzUxoBYfPv9MvgZvutKec5LWM6bPs8nbFunwCyepTWj4bvhKFU5",
  "key10": "63jDAwd9GdaFBRcBPAeiYFao6i3FaXtT9UFxy3WYZ7KAHVBdaAjRzk6aZVBtD4Yyn4CZJS7bhCjmS2bXG3rJkB2M",
  "key11": "27o9Hvg54aNR4Fhafc1sFsVTgDYv3tPqSvP6Ac86KWSVNhfsNMjQqQPojW6B2Sg6eGbhWARzQMQTNP7mxCMr3b8p",
  "key12": "5qbvUq9eab2gxv3ApC4vpY3F6MADAFmWc764pWjJbpRAeDb3yQMeDQDx9aDF4EPUQcxFzpQe3P2kCv5HbGiqdmth",
  "key13": "jeH1v82GtgeVUanSgHHndU8DzYzdQSFhmtf4yQyE3aa6T9DJDdSSPyJcMYx1iQ1QNuDvZNKXPyUCMNZPCCoqSsp",
  "key14": "5zN2Ev65bCoEX9CAouoYhXUdg7m77rejk1A9FkmkBTgtQCFDXDuCHv6mVG1ST7P95YcqpxRc8JyBiFjDYKwHCkqC",
  "key15": "4gZ4bmgVDgUGKrdcQYP6iZFYpL2CCvfJm448LtSnfmSowCCDroUXmcaw8ER63XPLt7gMwzcmrKnjx5N6wjDFDC6v",
  "key16": "4P4MWFoJgWyVBsujhuhLqsPmLfDgeraiwnq7chtMaKUYDQEjf5BDunNhdhfooUWRi1bL9AaohQvPPtyVfJFuWBiB",
  "key17": "56iVDFCGXBxBGhGjnnyYL26DgUZw3wf3LtuBQaxGZHpXAvtEhzbuDVu4aB1u6pPNYpPcfU8ra3n8u784dKBJ8WC6",
  "key18": "3VkqJZ9WSYRJVFPYH7Pfme3d4Qna5Ry4ksnDA2HsuaMt8GaMvY6CtjByewP89tGKUyGAF7rjWJ3z1vVCc9jn5bw5",
  "key19": "4WY4SXQWSGq4VRfdG3wo4A6jWaEdKdWtaphr3QGSW8QRuascuMdWCbLqvEV9vmTPcTHFtASdw7FbGT5auUkXv4E1",
  "key20": "29udWkZgfNNJvcwGDsW7htUyYExQPSmPPU6fSRxNb3jzinAgWRZkcvEgLoWQU8YFbDW6E6raMGAbKYReNAaJvPoi",
  "key21": "5ZWqtb4YRwnKjPUg5kL9as9gE17buf51QgGxLHDwRMuRWwHei7xYxg77fdVkCJnEepSozvWoJBbHdoZurQ5GNG7N",
  "key22": "3KZ4ayq4xcKg7JktJwf2FW3VEwSnKoS4e1v1pwsrS9kdHrVCfJZAp9LhJ1bRLc4jKce9qdJQ4Z7kg8bvCKDPescz",
  "key23": "5Nr8cJTGUTecBsrU6RksCruiFf52pNgZR4wdzWgPqxmmqLP8idmqxiJAMEsbJrce58Rq34DTW5y3HkHPY2EDwT9p",
  "key24": "4w8VQYjzL8n5ghWKr6aVgkMTNc1UjTC73EWfTeBFvW8iK9noqATauYrtsLy46j3irJ2dCWm6QK9wBrdRtXarUTfn",
  "key25": "4Xhrjpo2V2nC7eqSp22yMeje8o1RCnZS3uTb9pF875pye2qe8znWDxrb2t4EmQTWqnzypAxkk5pfN8qjxr2Sxim5",
  "key26": "37EEpLejEjYsrpFstuaoCehEz5H88yb2sZ43dpJQvmJYbvz2WqqC2YJbB1N8M2dCNkhdMVcZWrYD6LPz4LEvZALL",
  "key27": "5z1sVjxqb9ihFgWrNv58pzB4fyCGZJ19Bw95T3cZvtnx6FRXMWuqe4YQEDcc7wuemnSdCrHhiU5Gjb3N7YTgKf2Y",
  "key28": "4kZr1cCPSDGpEPkZHd4VcbQxNg8ZYojSWJPto8m9F28Ya1piC1a2CuK1ZjF4c2vMixXFAarEkU3zxzRkdGrdbpVQ",
  "key29": "3QP2MwZcyWZLh1igq9vaxRqgTunGAE227p3aXoAcTNrMNZwszUJ79EKc45FsXHxtZPgGa5kHoRVM5vfrLt1LZcTQ",
  "key30": "5g8qAKfKa3qxxpkkioxiQoTiB8sgCuLnC6foJFUgBBhMCRyvwMxdpCKkYu76LkuRWNeWA4WPyUvJMb9TzFjA71v9",
  "key31": "2dJnTpF5n7JmWofhTHqbEoQRWyVvqp3YMHwVC2qowncBR65Db4pPsFqmLPRjLmFtZtySWHXQ1nBFXTSszsKZL1bj",
  "key32": "3CMyjys22bUzVS5Jm9weXkhTAW6EQD63nq58KmHqWB1A1PyPWb3TmyeZSXTi5DuzFnKNnpUg1xW64SKNrXbh3aCG",
  "key33": "65FZnkHrA4GVCkegP2k7EixVx7A4kQUNGaEChvwsauXWUFhYWYniDSUbkx85AHBHnmzK4qQVSfkJYuLNSkzQqdTy",
  "key34": "5bxRrVFUDsV37fwD5wLhipW7PFnTK3oo5GZ4nArFSAd1pqJUQotitayo2Z5tyPK2LCFxYnBQyyevsJRP9rVV5WVf",
  "key35": "4hELvNrB7nASucZZNJHhhq91RFsJNZthBjoKHAzb3WY8stKpccH8B3h6L34efHgFmh4aBLHSCmz4YXsNk4t8vY5R",
  "key36": "5iMHpbyrTxAioBtzu4QBf2Ab63PjUAJKVG92JXjUhUvejuRnewyz7enRs21QJxsN4Sa2MVJmx4t1Jo2f7ecxkHFZ",
  "key37": "4zv6pdxwTAHEiDGNvky2S11G1m9dUF1pDGvxjdXFeiBppYT4v2gChXbi2cGCiJaeP59s4r42ebfHAeLFrKMZ4sWw",
  "key38": "3ssYJ2NzD3wuQkMzYSzitLkJWpQkcMcHKehpZhv75xqZk4uAZaPFXdQPLZsAEB52oNmWgV9iidbJtb31mA8ufHvv",
  "key39": "9vJPTNJNBXsWHycEyzbg94agKvpoC8bKveyNDBkAncoG3FfZKMY5U7ZTaprW67ysmL91GoY8xtXyaaYekk4rB27",
  "key40": "31M1rvZabrxriP6uy9nnbBLYmFvnjaGPJMT92XiBQaEjzDaEYGUJujXiT3k8D1wX78BMGzKgfT4vtzK6EaDU5kJN"
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
