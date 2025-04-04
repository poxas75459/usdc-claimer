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
    "371mzvD7HUXnDyjeXm2HTQofrTRhqoASry6r7dozLu6r8ADaET3DqUnJEqvpPfoZS7fXVf1NuFrEa9ToCfcAXjfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hfvtbkEpMBZtUWuytxNrWUwQW3ZnN97P82vGnwmCcUH5cYf8Rwg8r8trsJSQSxUR639iJZauM5dXxct1E7h1mu5",
  "key1": "56QJ2ZgTGV32UFpNBCYJkZSmgZLPBzcttzgZTVzjGEdVSZhG2WSqWJEh3PoQs44k9famV8oH2Gov2xcKRsR2tX6A",
  "key2": "2v2uvXPzLRbgX9w62ua4ThRWwsoorBVrNVxc3yW75KVGxeXFvBXrUJiuSHUjgSSXcmdY4gJniBk4f3FNCDoSWHVv",
  "key3": "31M35wJswFcccrLaGyPradd56BdU5GumX1suG8MnX1GL6uzwnNX4Lh92zr6tzvtVpSPg3y98WUNio2tHKcrQfYXF",
  "key4": "4aYKsFRPHkWYser6tvxj9SKopHXaJ1hqt5sUC33jCZyweacfvuVPBHsoWVHev7waz2rrtXLVHc7YQraAoPWxH2iu",
  "key5": "2kDtEKTgPvpwqhD3B34m7kSPFniaAdoCzGR56yEGiKJyuvKuWqBFXCPupkMJ6S9bkyPspdGFqnKetJpkroJsZqns",
  "key6": "GZVmcnyfk1vEsryMmVmS6wLr8dn7eNh1wAbd6HRQ6EVG3j2wpaASngM1mALiF5Yts3iLjPioS3UMgG3eG5Vx46n",
  "key7": "3rRZuAQY2UEHjqn5Fyto4r7cRWNwuxsfCYzaCNtUx2SWtFFJrjHh3WGf3pzaFimmqHbe5UakAWvUQmcTHAgAWwjd",
  "key8": "62otjxh3yPzghTZukq8RkB7YKyQqdz2xqqnukNb6NCR6M4ij7riD9tUSyYT1aMgRbafwkzcp7paubkgycEh6bFWs",
  "key9": "46fVBscktdHwzCJKjLgq8seuKwHyBTvrrrfHzHsKNV9pfy6fzdZZJeoyN4a9jjSs5ksQrZsHhc4dLS3rWhRafJXq",
  "key10": "3zoqBxrzn3zieDqRCHo8wjUTuJwK3sWA9eUtBA6HWqeNrk1747xw9fMKVxGWLtURnvYDTjkoTV6Nqxkzu3zjENTM",
  "key11": "2vbhZ768dKXzhRBmBBKtfkavMn5boi6SEEcmGr91joHqVwoY82a7aiPz86HhkxGFES7Mjrxq4Am6n2iD2LUxE9D",
  "key12": "ZkBYpNaTZE6NVBcnaNGnKKKXykQ2gdtaWjMg5XpYYhhk5yM5E5C38hnz6PmQcLu3WYuAfVhrAiSxpujuWX2AgH4",
  "key13": "3Qkfpbn36Phj7SByJFf4WSDxqVfkZi8iZ2noKvKNdkmjXso3THLGkjNAaAvFDJeBGLaHoNMK2W9KDBMyCf1G7Vkj",
  "key14": "5eo7nLr9Pvjw6MfzBXq1YM3SS5yFCkH3vmW89LLj8m14qZxk7fs87fCRxrxUVX6gSEftrb4dz7NMUi2GtE4o7qjV",
  "key15": "3v55RgpHRGFYYvMcJE7i8Qps9FV3rZNPndiF7CNDJgvJ2BqjufvhhyMb2JEwfwy1jk8vr4ZXaRALYnVBphtmuQ3w",
  "key16": "MXNaQ655Dtdnw4hmTU5eHCPkytQMtfhqrqfD6ECDDAdZstEj7WjByrrvfu8d2EQLhXL4CXwiNwSoR7yKdWp18oH",
  "key17": "4nAbVcAyrJrjZGdkRKkWGTS9rBo1Q4G7cPDPdBFug1Z69zYx3dGNAfQZ27Xj5itGx32itmzpe1Cn9Q2nxsMv53T9",
  "key18": "27U3Uq3Wes1X69Ccz4RXQhPyNAi2unUPZv9kKChbR6rV46LzfFVXh5nVJpXd8iwtw18Mt9oUYv7dXFgCxqYhsAW7",
  "key19": "5dTVMJ94nRdjivnmaWp83ZENWCrvHWoKw62gWwsiDvs8s8wYAsHdCqmSiEDgHy5f6uDagprfbcKavtFiRwJp3qz9",
  "key20": "4DXLxjN2XU1aiaFuoggdBZrJC8JgUyMu7V1o7Xe56s1QCGRfccmkwSbyUory5fBSTWuL4usaN6Jm3kZzNjvNMNTE",
  "key21": "FijDPVT6p3VndQSqYES16MgofJRsD7GnvnPaQPzBLG6pGBf2CXwWa1susnNSbXJPED6FymfLGikp9TJq5SyPHth",
  "key22": "63cdVWoh7FiUxPA57ZcVDoieNpKStwAsXuAkuEGuzngApdLXN5Xg13ALk3SCgPRCtGFWqPbHoDUvusvhKbzfXf5R",
  "key23": "3GzEKGQhdwEGyoexr8V2hUZJRHGAPNNhANA3PvEcF3zZY5MY6R77Py3hJrAqom1w2P4gfEAiqdxa5nA1EBVUXzfr",
  "key24": "53oH6qaMRAEcTdWzqr3rppqtGNiEtHYm8wXKRxS6SAEiR9ZS4HGnkJFzMa3dXeBLo9zYzeUKysvskmdCyQ9j8Q19",
  "key25": "2JNmB6Ha5cczPAEoJnp5u19eEGa48JCbqC53ancmu3DGipHBDDHtsmVbEMY4gJjqLc7Fgwg4mjJ754H5exfC7d2L",
  "key26": "4RD18HSLkGJu2fHsLWW8h66KpuC81eRCW6SvaEBvmjEZFb6Ym1SsVsuUwR92ghckvju6MDZcQ2hAFEGQbzjMc8H8",
  "key27": "5RDqZqhydc6SgAETCQuxzQ9RH2jt6QYiuKzKh11h7V5r9y9ye6Uo8hx6y3WCPUysN57ks6YJq5aDLN4jEpWUL5Gr",
  "key28": "tsxFVztj4j5FcyED4PQmJw6cXYUuibFfaa7wLTgnEpNKMP42yemmm14whi6L1xB2aRyzbxPrPqxzPo1RnbgdeTa",
  "key29": "2Fmnemi64J7ecrdieowwpEwPCuSrJnLewe2SSn3zKBFUBMmMGg4Q2yyCpo6EA9j2hW5ctJHYHyzfggJRMGW4sdXP",
  "key30": "5D4f122gKY7GyrNPZJaEH2uEPjaVApctmXC26TuoyPSsmS8evMfYiKQk8ZdYYfpPsRUFtCgHikRCvnyQS2gNJ2Jw",
  "key31": "2SH8tkKMYu2cvc5n1LMCbCJXhwMifK17yM5E5kvRkD5VPnDDvU6enB3vRrmKSrxpM4CMHrpH5zh9Sz96zABTgU2j",
  "key32": "2CjEXqgXsj52qDLwbgLD4sWUhd5Lz8Mwg82tGW8ymdfrXb5DVTrTPmB9kgTx8nogisYiTA7WiGmccpJL8iBcbgM5",
  "key33": "5DskgDHaFhTpEX1WhVVNkiDTnsHoUQz4cLhJHePH8dF72HAeLQ4sEe9qxpAXS3eEx9jjSBEt9hk3dNeAmWNGuqr6",
  "key34": "4BPwtes56yeBZQMcwjVD48JH1ouubdu7FkaMEUhWfKYDi2rMtQLshH7uiBHLgHJgpf8kbYXioFv3XvpSofK8ZMjP",
  "key35": "4v3EAYLpeCAtKA21SvNmLrYpiK4usNs5hXdRzDVQkL7dVSHLgnDah2BRQaAvTN2QnzfEAacp3P4tiAJi8TczN79G",
  "key36": "36t6hHiq3DbMPK32zV1JQ2oaPcKn8RCABrDHyR55dwQv9avZetJHT8vuaGowRxV2sYbqADxCHyZnbJab9Lvsjt9V",
  "key37": "4MGB4cFp5r8ktjTPofpwBMCYvUih2hXGZtYzgQiJLL7BeUAd8QBhNZ2U7ocffwsRWcdkYtq21UoMqoEEewec5vd9",
  "key38": "3gx1EdTMPsqDvAxsPWJbdjFpLtggrNzdbYZXZTxPy4LskQ64dKfQx87bLFcztzVqn4GhvEfhp6pLShNuEtQkkxAR",
  "key39": "5D7n18HAPXrCu8zPXqVHN634mZSTsnhqsm6EE3pzm1PeGQFj9myruiCkUPPS17wYkU4NPhEzontBZDSc8r9g5AXw",
  "key40": "tDYup4XGAAw4hnqmujpPZ8vH7To9jjgKqueemXSJ7m4148V8WA9TXXSko2opQEuPZcGiGVoW96veZf1VaYzhS8x",
  "key41": "2snR6QAnKghp9F19xK55tCrjC8Tp2TGR771WXTHCrCLQTSQXaSGbsx34eFAi4saHi62MS59fEmEEAoTrqoL3yMy5",
  "key42": "CY6A5u9tthKuiY8PrQwMYH6tSLGtw9eB3hWjM9rqqzSMPeoky7BqNsBqLB9zrddwXCnLgSCe9KUZroqnbUC68wU"
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
