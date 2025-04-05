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
    "ztCqzHo8mAWD4qvF5Jgu9Jc97NxfW3AzeW3hvwbep3taEp9174rhxJqEgc66igtNPKeepCYYZqQJP9A2mRoHx4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AyZNtnJUXyrMLJLxkAG12jndgxRdSZaDZanwEAniHLxmAdzLEjrgUzspJ4askxhxNcfaPkvww5Rh4byecGsqxrX",
  "key1": "4bJXcpLHb6XRqneuXLSzngg87VTVJDRGpLWWRZLKmVNJzqM9iNeCZJEwpB9Vo1UHxXztg15zydKtmENnazsHT1Pn",
  "key2": "3fJ5W76CZXgscoqPVuWXtX9CQ2NzMxR23xDiN59DE7CsvoDEJ4u1sEstcdarbtLud9kazCzXhSabT44TVKdcP9U3",
  "key3": "3A4g41oqiaEzHDo2zq3ABahK58fPLsFFtx5RZLbJ3WXcbk5sT2Y7V3bEm728zHWUuGn218ju1rjzmBoL2XMkxrvG",
  "key4": "TouzJvGd627aHnzcVvaJ4KxpTGXV9ywGabGC12xK4kEqCvuoTV6PGVNJ7ngGp69PQzP7jQdeeo6gst3BuUdi847",
  "key5": "3Yk5i1r6vfKSmKmTwvE8WmsurimGBWyPDQac85GiDaKZFn4jtGUt9FuUduyLpy2BuaAR6N7PC3Met7jmpTJwxEnT",
  "key6": "R9tbo72Nm8znsitCb2ViyiCEWSsYTm8DRdNw2hoghTeTgFzsNcwYKQThpCYTTTi8FoEzGsAHwkVX4o6Hwvj7iEk",
  "key7": "7ofMUa9qr7R7VAvkpYFxVQHzWH98Q47X2WfgTyjN4vEpd9DQfZTdYPgY4Lcx7MZQBmp5UJfssBDpxaRWMw1Kxtt",
  "key8": "2qz19YjzfNo6PBiy5JNpyjMtr98GCx3guJMXiYDuYmQMthFAVxfXZeSwD8bodhgTC9oWd1XaNoZ1wCmCmwMMSUU8",
  "key9": "5RMBufCYenxA3nmFfjR9wPzMNBPbe3AzBepFfjJ5YeQ7q1cgVg53cFr5QcgvKeFhHK1ne4okn5wg2u45ep7xmmx2",
  "key10": "3A7AAEj4r8sPLHom4sSyj3hp8z4pW3Tox2SAR2Dq3J4j8NYffzbWhZTWvhFEZfcvQHXEnCj54FF9PwtrE2yAgLZQ",
  "key11": "3EMf8j5zeJxmAnPR8bDz9kN99exT12sBhtoQ5vNyXdvDF3WAfrhNETjt7BLvEZxrBtviFwZR9kxTQXmY5dy4w9r4",
  "key12": "4qFS1uYvbWWipX9SnZLvrhUD6w2En9zoc6sURNLEUD4gswhytiPg5xieN9hQu8ix2abWPJ81dZ4qdMbhGA2J4bkr",
  "key13": "3VH6ubA9pUR96cVBinW3bzdo9JQqqHuYa7A4YHpU2SoZzfghnpy2f9XbUWync3GS2qLCWNXkfZYUKw9GyBeasc1S",
  "key14": "1gXE1UUaFJVib2ydUMX2UqFvPLUbKmTPVnmBVSg42NKfG8CQfXWEjktSrBryeahVtLJzYVPLFazuCyokCyScV7o",
  "key15": "5mwCJvKQDSoyKZm4DkbKqPMUrLt4qAwYGvsuyMWdoYbT2iPA5P1gfNLWHRfbW9uDBBz1pY5EPosr3QKXfHvbMrGt",
  "key16": "58yvYYCjcf1LLRomBywDATvdg8XTVy8duSNys8tNtoPJCnbcpvijjbATapWsiTRZUsYtW4Mwedb4Ad2gNGa25Nwk",
  "key17": "2RDvTBNEsCwmCNjhPAzPMXSFmDwzVJjJopej4YhKxZBgKADs7ibdmvffreJtzojkEfHE3sVerwPfRhJPjZRj6Gmm",
  "key18": "4ziHxpVt29hKTCgfR4tFr4dxox2TZTZDy5qbBnM51yHJdcZZETmg5up2H5bVLDA5NK2aHkm3db3MBBJeNGm9EePA",
  "key19": "2UQaTkxMNXr1tWw8Y5AqxhCcuPUY6gETfsQcQStwXgqrk2tXVu3XvwjYSDMrxBwDNBAxRFa4YtdV5V4zdfsagZM",
  "key20": "23JnkBwrmSgzD38J36LhYVzaa1isk5k1qnDhq2Hgc5Mm8F4oPFWgNR6m8LJwb7EhN1srpeHaTuyXEL82Yuu61tzC",
  "key21": "s4Z4aGDonZYr5okMML8bxmAJ7FHnDAY2fRDzizA8EUD7kB17nqS4DsFy2e2aKotaqskEyoPviPT7pqzhDEGpNG6",
  "key22": "3PBzon2vNCLCkYes2grKMsdnj57ahBqsU12ZmX6UY7nHKcuwbwjNG9jv9GQguQsEr9KhFjsSyzFGfqHopoiLWUsx",
  "key23": "5j9mP8RqaAxBJ8YRD2t9fLJrmrZif6XkvZpaUAi33tzBcTB2y5bpTN65FtAWPXU2kg9HhQhgaqZUpBsdxMtLb7N4",
  "key24": "2eT7TPWa3SKmVTZ3zz5sDH1RNqR7AbQARCmk6K1WrHGTMsajgqZcSzqFyXd9qdtx8FyKriyxckxZ6bvDQTGh7Dzq",
  "key25": "4Y8iqb8Xsgg5zJDZMtMMmvFKjTvbH7Eo6FysxmTKBwJ6t2Xg3tgeEJ9Bw8bt8AEVR8BW7JkatEVL9vaZ13FHoj3g",
  "key26": "CUUbfruykgkuZpPKeVn4wnThdbmcTWXE3y61MYBK1ZPXeowq5WigUMn9AzNkCcDfpRZrsRovdawdbQmrNh89mwG",
  "key27": "3RqWK69EmSHBkCfZEDqv3w78Ft8cPLTSbXm7ixmctsY535QvyVbvgtBHaYECoWUBdRMJXp5QMo7sfQX3eRb6vkzj",
  "key28": "4FsVxGMJYgLGoU6V4JgMdEccfnYyKjpkVzbZorGDsjeVuW8zoYduYT8znSbhx6zWM525F5kUrVapWxzT1z5uaB4m",
  "key29": "wSTqFm8kwuCduWZLZdLys5exGVDhoR2t4mGGYYuEs9o3to61PYcUax4fBJixqpWHdHF5QxYKT5jBaeVHsghAhYm",
  "key30": "2oRo3eMsDMJ3dt7zGcBtJm4YUxRU3xbPajRFgbju36QBdwHmpGcuPyWM3SwSgHaTFozKwhpkLQW9tVpg214mpQvM",
  "key31": "QZ74kfXPP7iZ5fjaeFYZnuJfNU4W78XqgLod32AtZ1DCV1tU4jv8X8bbSJBw6uKmiAqB9b4LLRikvvjL1dNSNoc",
  "key32": "4QhqV328XJ14H5BtCG1U853mRcNQMDodW3QPVgP3YjUfJ52Eqfub37tYDTARJCjiKWrpDMmDifpN78sLuNk4nAjM",
  "key33": "UmV9g555h2Hdjozhm2KsDK18o8WCg5AhsyQPQy7LnNYnBwae6iDnpPBjta2fkfsRjkkF2SowNju6qZMwb6Lso69",
  "key34": "6WQV6sepuZvDqj2cKcXDPTFAToMJdZMBN3PqkysWaLJuUPCKtKoiF2xuu48kFYdkwaCLCKDLtdHEkH1iHweyaBX",
  "key35": "566qLwCbgRo8KTNDjKmZ7jq8KWiZp1CcYh1RmE5452VafTrsaUe9oVy3AvHqrosj7ySNwf21xs4pxSN3iutJMQSP",
  "key36": "ivcA5f7EXJt8gjqGxbMvAjnFLddmgeyoRadxffdmzaggof9AphVkUD4PrXPmFk8edcpFik5E1gCDBSrSzJdc88k",
  "key37": "3t7heS6N64MXnRimj5zzQphE726RzM7RF3BY6i3iWsPVmm23mjm4tsHVqXVBYBMuRVHgLWZGgYKZzWpdoZzP7GMc",
  "key38": "3Tq21ppRxEcra8CWbuKrvov6hvVrQY7Y8VPNzmkxw33CBM3wjo6Py1cDu5smBsovAtNTtgg3EEQGMFmjrsaQJxwc",
  "key39": "1SeyfNDjbQSz9MXEUnBRpBBxMcKZb3XP1SxUKdJL1jpHGCLTu3ZpqhmttLRFXkT9tzUxZ1igt58VCYKU8rVMh9b"
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
