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
    "32u3GYECaNJLPxaGYLJKDEfxSofoFBpyXcJh34L51pxtvNyfRA7AjVgxVKPFcLDybb5R5Aythe4PpTSW99NyoK3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cC3UYtjbnMzC3dVHRmiUc4Vi3zai8h3Y41J6DZm6BDZz8aMkQ5QxMExJW1FzVnZpJxw2mvi4uroEzj1vAo6aaz1",
  "key1": "575isPCk5W5QAvCSPr1vfRqdrmpnmut4WRB2WKQrgt1SjKws58PCXehSQeKju4c77oaYwnxnnC5mryEWN77b6zeU",
  "key2": "5e51t8wJgZvk15HtrFRsNt8ujupoBB45YhwzCu7AroaoEtQ1Y8ksvvyw5o46Ect6f7TRh668gX9oBAkfM3dFtBxJ",
  "key3": "4qAoHdSy4rGuc5HPLT9yiMCXNrJyGrusc9bY611FFV9FW94uxscR4Pyzq9KorszHNVRz6wyrCVMtjFjmivwjhmxB",
  "key4": "4aawiavs2G2zt42ZNUYMEm1PDiZP65PAmbXmwicifs3aGMo33D726aWYb4A4deTsnu9VvZv8RuMKMY9WgcCw2KEN",
  "key5": "2nuQNqFyJcBayGNMZo1NeuH7YDqY1NPGzFEXyUPYWEaonM8Zp2QrVotU6jA6pZU2xnozpk4ZxvsNV3DsG2B5DGR6",
  "key6": "3Z8AHaKqMemYdY2vXK1JXAmFTEmG4vcZ3UqNDAMTADZUeE54sNQ6aKFSEPzHR4q9b7swTYgLQmwxdg59k3dvEVax",
  "key7": "3rx7gJ34MQSaXfGir31UY7J8W1xqnhaPzgb7SGTyJ8afVVESB1Ji9iBwwjZErXTWWBrTv3XdJFsfCtPpWFnP3jhN",
  "key8": "5DNcxZmejJ6ZEyPk4szt14vHxhaSw9adZPKNAkxefTJuQG4xmRh2DpejYPG7jWdPWPc38KnabesxU2j7FQZZEkst",
  "key9": "5Qb7GCDzPiUM2V9AEU1AvhRsaRVHoNECtjvjZAGrb2TrWxzdevtta3hHkA1Ak2b3MdmZh3MrBAFFXCjcrAQg1in5",
  "key10": "61ijquyTSFDtWdSgjhjo1vCjzMHzrtwxNN44sS85DE5zLci6M64nJrLSt7cp6DgQW4XpmJ1fw2pG91JjZ5DyLTcg",
  "key11": "38XNqExKthuyMhgvZWcJsLTfDzwo91rWHfcKSJn7nzTBtyKGHb2jkBRio14kBHcYcEAs3UgFCXGzzGVZ3TR8uYkE",
  "key12": "66fsuWKeE5gSo8Hwj65JdsvhP3Me8irr8rCy5PpjoVga3HGnNj3q6t1rSudCwJaCuR2rSkrfYAjRa9G4DsL8Mzac",
  "key13": "2s1CYHeqbt7hugtqZUuoMjcndZiz71tmLZo6RXrfjA1yn4D3cBBGzMSf4VQHUZrMbm4Pgpyv9kvZPmkZCmnpaY8u",
  "key14": "ShjRzmochpGqyD1LC25DNy5nJfB4PA3SwBMe4gpDiMjPyy2U4bZtzRfD8eGgssYhCm2BK4SiiQw2dPQPFanryfX",
  "key15": "5occdk5V4u4yFzw2wtU6xFodmJnY2TThw71jGa4e7gzLVLuUg9AatCc3igdydD2jWtXHK7T8qStDVFt75qd5cz24",
  "key16": "3oiwK7SigPTPAuNnsyC3Y6y9TPYxcxrN9NqYbGjHdwmoinNwzVfpVUccc7ZT9EwmVfGzPHSrTQY8qB2AEnZwrjmz",
  "key17": "3qFqtSWKCkXdrn2NbFiyGBT8NsL7gbRLV4MSW4ixfLad8KDWB9Pk6dbaewsyS7c9nZeXTLaU8cr2EcQKd2wombi7",
  "key18": "46qdAF8vF6Nt66GvGirBN2DDjooyUxWAzBWXtC3fhaJzDF2pY6nWKa5tRyP2ZVeXzM7DTd21qGaQcQUsJXnPAjaH",
  "key19": "5LcSXXsX6NCZApLHTbhJts6yMfJE4n7xvYRdnSeFFqFigiFT1t5KuA1m9VyzMZguiX5byDcKjH33Mx5E8XWtEfSt",
  "key20": "2Ukxc85yVroDnTTuvggP7iYkSn4d1rmX4tEu32W6LW34TAcbSafYaxJquJe78uDfwyNpgPwupgikvbqVmDaXdVc2",
  "key21": "3zohrje8bsiCrLAtDvcWBd9cwpGChEDQFxu3vmjUhn6je53crhWYndoZQCnx4V9Hf7tg4yksoE75csk51s4mSvkp",
  "key22": "2bJygYcr1DRnyC9xMunvu4JWYApqCC2Bspa2HrFHE3H3gh8rqWAPVLVnStRaaXq31o4nABTbCiftU8Znftx4U54g",
  "key23": "3i3e5SZrTATRBRQHPHz4phFnpg7gDD7tUBKkKPtjjQDrCmNfcUqTjFFY7hoMuu2cRiDJCpFa8sQvz75RRCCnf1HN",
  "key24": "5b3kXqvgF3m2P1ZDfqmrrGXndrhjFBMJw4SbegNmoXVcdwaK3BP8uHKaUGo39GSxewQN25Q2CaUH9iw6rJt18UqB",
  "key25": "4g6g9nYy87VPGWhZeKaEBuGWhJmfwLXn5ANGkXyXY1UJVvD4Jy9GkDKefj2SMkkK2n3S6acQMq2Y6UQJkX1tuXUm",
  "key26": "4faTqXsz8Lv9nQKYuTG8xgwdYyt9pAbumQrGtpHrHZ43W1NZkPzawE5JyQquYneAdb6EumzqCAbZEDi1nq2Dmbeu",
  "key27": "29EgoHVUauV5D2fpkepkkZuJ7ssFzoFRi1bjDxfVfkaEtDK7iEbr5VP5uS1jXhfuR8KkgY2iJCkkX8AxKeMJAYLN",
  "key28": "5QwsGoUtF31n5oJEMQPdozyfU3GyGrknGk1BUjU6H2qRCftFyDNHux85oWFdtxzsiQicJ6buZpnNj6yuogTERgvZ",
  "key29": "33KDDguPzqfUNjZMh2Qc7cYx9SHFUhH1vBrYq9Q7ne8zJAAW37TLs4kjtSXaFn32K7AcrakjhqVWhm9QxDCo8SGX",
  "key30": "3T8oad4jSbo5wi4kiWFkNGRRSJKtLWKhchEfyDK7Upp2nDpY9P4EXQG47RCMy3HDhfHoSXCLMn8QZcAbuwmwi7c",
  "key31": "3DadnwKu5hEZ4Ceqs9iQQVmY8qsx5TMYKBaeDHTbd2DpdA2jsYmqpdt1MmEeLTAV317VckWQfAc7ozF1N7PHTAsT",
  "key32": "2uY9u4KhmVMooiEVbYTfPapTSptMi74QqVbYj52ZKNLMV6ab521VgWvtP7tkdsZz9Wvb6CnfCknmaQornUeoRxbH",
  "key33": "Vm8zWnR2MibVLHQmvvduABfpvMwKMDrqXH6qWBrmeiVy3ft4SBmGDsigak7Ugm6v7TsSmFAotbRJ31E1UsPru6N",
  "key34": "3H9BgwK39JL9qzSgnTR5y24AQ5giuQFYrNdWQwjTy1oQMpFCBnkUY1yL3tXcH79E8iLvcEYfaredDJGTzk51vfHz",
  "key35": "5c1ipTURoeQoUpZsjXUQNCgokTenpSSe9AbvbmnZ5pCoKfS6j9rGrV1stmpucUr4jZUMt83CimkfhEGJkFxehRMj"
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
