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
    "54VG4cy4ZZgb8TrH2RvQ4KB2nsJJ7txJorUEYBTUKb64Ao15ekCfhajJKm6u1iDiLR5mUwqHC5cFsMoCo19JAuzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mhc7MgVddiJuDUzu7nMCkZJWbuiVZSG4kSwp9DsPvgETWb7kfZK5DyLyXbuYSaJyzQGWnN92unPQoDUQNYGzKiN",
  "key1": "4LrtJ699RfixhiP1wTJT3HNJwpoXPWpC5HzAXGxSKpPL2T3kXaFMniM69iVNvkmPnnAoxbgJis2oWGRdUef925Dz",
  "key2": "3Akq4CkYAFuLiD9t2q3rZUDatVxDBi6Q8RCqCULgKZEapd1Tjgi8ujybWZK8nHrAvGo1R4FUz8J3maRmAZL8DzLf",
  "key3": "21oGuhmriX7JTxqUT4c8QFTXpnBSicwfs1u1rj24TKmoWfHVc4j7GarraMx9mUrNjgBcCvU42SNme1WD2SJPvi46",
  "key4": "4CaJQLZTe8FLuoDkT6SuHy8GjZBRQEQrzsrtVSJ8B2QtxGbaXRhbmdpUJuDoqmaEzWcbqHJGHkjKV4LdKxEBJHq1",
  "key5": "ccbxdQPHTYGvCJNbGxWxCqyTWKy3fncTK8s33EuikL4WKQgGcFctVsY45KVhBUv12GvE1VLcyPYVnmDQrXU4yCN",
  "key6": "67GwzztZXMYGrjgXStcR42rGgDgW72hDWMdoiYqhuJ6cUWiY8ayGmSXM3nRN8dzY367YXewqqTJgXF7igQZJUxBK",
  "key7": "2PqQEk25cdnV63rmpWEE4MZy1nj3bpdT2cBG7HgCEAxv1oFJPsPULrznKjiqDRLbvhhoo7xPFULSDVFDVdMdbWe4",
  "key8": "2CJpigSwMECmvBA9brWBSFyawPzC8TQaipaA2Yv81qN1oidY62JNc8EFxHz5xH3GG5bnSM9qs2H5v44H12hQXTTU",
  "key9": "xX69fpMzsUArqzP1wjHQUmg7hwM1zHEYeS1ceq9CGappnBR8hXdJ6FDGpMSF1PFW4FwRdwY1FKiehdP2NZdYsWq",
  "key10": "2HdfukDPu5Z3jVaBx1MmgUJctxYh26mS5x3hsGaYWqHJwstgabdfg77StSS8oR6CNPUxD5o2JHppMF7c3WUa8ph7",
  "key11": "4DsF5EGnho4qQB4HzgxeKDft8yJ73rTWQfynqczVxENLtsh7UWf9x4KM4r9zh9y7DyZLZ3GMiT1oX3TELWxG7ZN",
  "key12": "62Wn2VyqrphfbWYRjLYomwh67TziqbbX1W2hD7BxrHVw9YRCvUidCXJKBKxAFHPa2tdBot4PZ61XNpEozgGCm5uZ",
  "key13": "3wW6WP9p9DsdfrkC4b7ELF6Wh3asS1c8dAUrSnLxA3K4tvqNDTLVfMgySnKzxZ6McEWP1oYoCWm11Wehh5ohLyfp",
  "key14": "5LE6c83iHjfWSPDJ4vJ1Tsoww1VXQ8T9ywjzaMNzAxQDiwfHeuR79qgqCgW6dEFtNDxYjxTs8xZQLA5YkQBeDqW3",
  "key15": "2nkVupHxN8hpTrJnmc9k1pDGWWzPWtK4oXToKJP4a3CkFM5cNfiMp5cUe2p2PzsnKQip6oVkLXV6nDh9uPK9YJTZ",
  "key16": "TBesxqfHRYZxFjXuY5Y7bDDcQGKbfodc1vSUua8nsYE8XGtr7FfgxC4gdrEsxE8DFDzTxwhEnrbdJJqfDbjsGeV",
  "key17": "3kgw9QxJ8w99xMcrBDQQEnjczaLqrXjNa76ph1JxCmSwo6Nspxae8KjuvKTyGE8MqgP1pHg9x1NztHUH8Gqg44FW",
  "key18": "3tsHgkRRkrWZHrjhaZBXFwHwHhUHGmdT4QKaGBbGSjCdoFvFUeKuN8UqrejYG8wakkd2Noa9C4sMF74ybqZX47C9",
  "key19": "3RPHsgdGNB8dw3iDm4xfinuCtLMowMYwc4vLb6kmF7PHQ3htKGycY9BrSP6oC3pJALkxRFY5EtXtTqkmP4eifdQd",
  "key20": "2eDmjVZ2cLKERFi6hbt4xiRP3hK2X3cyAg2Ukw6xDyBo8b4jGia22QuWt6Xw6srNT48dsNWXbfifMMgqi5T71XxX",
  "key21": "4j9KuUsngWvydN66i2shSfgfx7ejpVW1ZoqzBx8Ay3PDcpibkA1F9D4NVmuZw3o1ZsZpeFiGACjYCFVMyEhbkn8e",
  "key22": "38XaV8U1gMn46ze7Ra2cVFdTt8Y1ZLBEwmiBmhekatqEgFKJA6UvJdG6KEb8Scqrz7PTkdshs4QFQ22BdST9rn9e",
  "key23": "4vgRkizGL6mKPS6eUeWDWHgfv5ZuSUrrp4uLWQWBUAM98DLje1H7FcKyYm7c88gDPqvc5xTKfmXCyg3nEdQSzzwF",
  "key24": "2VWBeTcEkAHUZ6pAdysqqL714T5MyKpULyPeYUrxUNxS11yJvFLJPhnVTsLpBxkZcetf41vKgyKZYbXwqWAw1DMJ",
  "key25": "26VVxznipmA9Xnsi1GYsuAd3pDyPnMVmh83YKgAEBnQH18JUpavu2gGtBGhTVTr2zoa3kzymtkUhYV7pE3SLsJ9T",
  "key26": "3qeksqR7d5ncuy22vVfCrL3BAbVxiGvSrubNRLuD7L5Rirdwgx4nek5De5ohwkk9PssdHSnSoMPUgYhu31LeDKK",
  "key27": "2eoX8SxangQnGhM87qEcwpYB6MBEG34UL9Fxuzmo14rvZ9QYw83UirApDWxw4iPDte7MDo6m4w1bshsfWPgPgDVt",
  "key28": "5vhkU5yJbhQ3kksPhXbCYT5vWD7awkXmnsVi8yR2b3StUkrPmSboz54zKTHHAGzTx9TkDCdAXLUMQcMyqPXVKRHE",
  "key29": "638U8pFGDGYRKcxdqU3XvMnDg3ZVbR9jMFKDUZCW4ieAExg8mxEAbsNqrMqt8itJWgYtyDPh6RewBpV1J7TFs5WE",
  "key30": "47QkQXqBcr65n5WdcpetPbfUya4HqRo5Bsdnq47Ra27qwi9yot5MUZoDvofotrxCpJK5DyPdYAUGybbFQchXNHGF",
  "key31": "1YmeL6nWWi6tuqN8gL6iyW3U6cqZvAFWAvTMfKLxHk3prKNQa9mGxyRnuku6GEzQcUY3wWh6NxN4yxDErW86Q8f",
  "key32": "315mg6pPxDTU6o42imH89gV7mW5DHoaVAuthw78ZDa72fp4NrJRxJQ3mvEGHrzr84hA9HrUHk94TgvQWhcfoigam",
  "key33": "YdwignwM5sVrgKnXB2vjnVzpnbEeECyUSCa5NK1nrAoVeJug8KmLqX7uwkXZDaWKz84dJT7zZjTqjBHkvv6TVTY",
  "key34": "4r8TxFqQ5rBdJhPkFTJZRrwV8cXvBDys5yPqvqMD9vxgCk79DEeQ1vumiJuPNmarNiE5BvkyEreSQTnmD3LND5ik",
  "key35": "3PeSMMXHu3FsDCCthgpg7wnpURNCKwYbHoXyc9gjdT4mBTc6XHGyzXDVvGtefToexsXfhLh3uP9GffWpdQMCKTx2",
  "key36": "327nmH5FQMB3u2yRdG8KbyxSsvSxpMURoCvC6Z3kaQBJRxv8njyy9UYmVshYBVHVjt9QWCA8YzZbA8peRQRv3W31",
  "key37": "5kjx4a558EZ7Ri1Ra8Jrzh3Aup7ydsEBTBoZr9XrVSsr9LThgVqvFXVb4FkZiuCR6jmiLuD7XvvYDB5TJP8sXJF6",
  "key38": "3AXAMpVS9DoJi6rKSJhrn1XvFFPvpuYUEU8Vf9fV7pu278w7bBSsjQqpnH3m12NZSnAdzwYq8PMRtGt3kB5DuyBo",
  "key39": "5vZNGjikkLjH8vmVgmNj8rMuoAmUcyvJrzqnWZ7QZ7FzzAQ3q7caFxmiBbNDJzm9swjwzWruboXiNNeAgrcRtip3",
  "key40": "46fikDmisDKxp936iowEoYjY9rzqqsy9RcuFsc8ouJagsMmjqb46DHwag8fXFXhfufkrF5793JVox3SoDZho2LLo",
  "key41": "2i1G3esFygSiRgX8SAdAu2smM7KjRTaSoAf1V7JvDYxk8YavxdQEDHDpLFYhGDe43kjoJLyjsMDQqA4ayMBcpAME",
  "key42": "P2cvAgXa35HWbhPZFjNkmztsgP7h8xNK9xHLAbNASrHrWfVrBvRbGpjDmWUZAjGq9HU1JeWiZNP3kfRhomPtvh3"
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
