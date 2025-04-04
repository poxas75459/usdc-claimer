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
    "2euxcquPzT1MncGqQnCNC2B548EqazAKF9KdtZzQbWSdWfF2pRgBifJS6K52RA3EJgF98pjzEKQgNbEpvicG4BbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AeCE3ULWE7crAdE9kUyBTTduZLXsi8zn3QSMiyCMG6WZYLhpfzQsWgYk1fcPWtrPHvrunspTMY3FsvZvsQnbPGg",
  "key1": "3LWuYWLGM9tMAAdtz7r8btiMcgLtdC8WumyF3VFyPbSEjETK6xUbzLNiVh71US8xCL7jzfUSNc9M2xbQxRpjo59f",
  "key2": "5jMh9QpzhV9xnCFYHedatdy3gtZd3Hqb8NSumFxzpp7XN7sZkLE8PVyi9bAki8siz69NAgdBFYQabaFZhUV8wQMa",
  "key3": "5KcQb7SakE8qcJ2GecDY13R3mSbcfiCTPJcQYJKSiWNoBb23knfG9zUHA9eHXKx2H8APb1ifLZMGHSLFmV73fjzR",
  "key4": "2Hd3FuyQBu7i6Y8P6PJ7JZyQctC2vJk5jhkZVYGqCdJ15dtDf8VGQ1wdLfTE3o6EMURNZerkcbkMEzDeiWj3jicq",
  "key5": "4auXEnFSCs2bjBxYkEbowgLYW7J2yDUMaei26jh9u1T8g8JmEFaVHBja11aQAodLBGmvX8Ceu9mw8v1azNKF6SgQ",
  "key6": "3KxZbdakjALbJY6gFQQ2h6YjcQpG7WDRCpg4yhF1U8zofKy1xDyDcmdBPhSTGiA4xPhcGgN4FdCnQgAPMsusw5K7",
  "key7": "5Lg6XV4fuKXD2Rx9ko4QWp68HjBu53PqdPweUK8e9X4QY31zb8gW6v7n8p71Ux7BFGXu1eKN9sexgpssMk5yYj1U",
  "key8": "37tcH3s83Db2eZsCd1yrBQtMMu4jMvYA7d43jBpnYqsCdfiZ2MBobPzjBMUsNAuyNB2Npzvt4LGuhQLBN7TPpuUT",
  "key9": "3kFsZNEUqoQ6Jg48RehcYomu8SKZwKaeRfSxXV4RYArZX1ycrWLANnT18vFs8n4UCjvKTHk9BBmB4mqBvrLQo5uj",
  "key10": "bXyegSzC3FJZ8RgoYQMNvHDhRAPEpUeyLzXfvj6JEdTUj8tEnaNaeY8GRzKdbUGfr77LALsfExebPwt4C34ebPZ",
  "key11": "5J7f33Gmf7w8EQS6Rom2bVGnwGmfNtT3MpeZUCAeYH4FUr5ppSN799ieh1aGPjVuJmEYcP9QwL8pSTHtH1tgZRiF",
  "key12": "5zgsAq4nG48iy9q3SwAnFWez5uCL4wNoULVeo5R5NRBXNEDWjNDeskYMf7UCu2BUBf1aRrHD71d5bmE5gBcR3QoU",
  "key13": "3ZVWBLtFdm4Yb54P2LyEyYRGP41YTegUm6WjinwWtbRRGyZjzzKJS5VSNaMgEF2CrX1imFZmsGR3crfuYcaZpqLN",
  "key14": "2FiA7ri6Fq1jbNCnVePyAjqsR3dvYywbUy3Wtc62XXsKeT8nEy3CsqYa9PxhVRAesrRGZsDSFoo7D9UmiGHF7uG",
  "key15": "2KyBJfHavNMYJ3HexjQhLEPc2dqHBtdJEf5CF2iKey7jCR1is4dKUtqw9yZmjgRGLx6hvEQqVmQXBPoS8LnUWmry",
  "key16": "4Le4ba3CVrbbTcUiJ8tyNggowwLUaAG86WyHLSshtkDcuVYspkzZMq4MJviGLcCNWgC2YoMhGyGavtpDvy9rB4im",
  "key17": "EFf3mjsGrBvTeaw4V7XxmspkA1WnT4Zd7ofW7eCD3XUTBEE2AVVMGjmfVQ7uvj16bSKE9Vvmrai3iCY71ZsGeX3",
  "key18": "4YHVVFFLQ6FkpFMGudUq1R3sXpM7gZD4rd3YffWbhG1R1K3JmvjJY1YgADg8ppgjHgLUF6qheQ7FdMf67abLWNt5",
  "key19": "3tQqA6i2shYpm5hVh57cKxxF5MhGRUfCFb354Fnma3sVMEFp44pjyZKCaTKzJmuCWDNaafzQUUDqWM7Vkr6AenRg",
  "key20": "5n6PAz6YgFuqiTrRMxaTzTY8etubY5rbVarSnRymJK4HXevhbcLjZNQ6Bi3W7dTTDVaQ7DfdkdvoGhN6wVfVCamy",
  "key21": "2HWuQ9Bd6daZDKMmXH6Z7u9L6Eaj9p8PnMEADKh3rFvr6ovSGZmxiWVYWZothDxL27JQ8kCtHQejQ4F5489KxcGq",
  "key22": "2fNtKLRHGVeJRms7hLpwBybPYKaYMgbEMqdPKdFRKsF1XQDzpxfb7qwrmcZJwfDcBGhbwoMPyE5Tz4n5wq4q3ANo",
  "key23": "2xNgmM7oSvebzGUkaVCtQb5nxPHeDmiS4Fi6yUk24ejnbiWQ5wNrmRB23qJQdXPwQPZmA4GagfLRx3gN7af7JrBX",
  "key24": "vhYH9oPK7RKbHpbyqdUzb3MU3qCbJwuQmjyyrqAdjdXD2ZXHKcVefo1enb4UGrsPFQxghonW3QEqdzmsA22S18F",
  "key25": "41hqhoEkBGztjgEgTYZn6FEj5ag2BV4G8ussa9ejGArMKC7nyaKSeFLpGjq91wnzSej8WLzJM65xNvGRBDiFDvDM",
  "key26": "3oybPB4J6yQNdyy4tDYnQxm98rHdpMa5vR48JvuSmHXMdbGYV31UUMRRZbGHyizUTejq5UkctE6YvhoRQb9mX5pZ",
  "key27": "32WcmPY5rtzxkgeuFt3ZeDHe5qWuHVcpUvzZNFXV2wP1GY2GPGos5G3oJy4643H2WRiNX26oKKVRZWqmi8cS4uWD",
  "key28": "23AAmdpuUDgd1pikaiPm5oLhgHaz6DWPocyr8U6kAB4rHZ5YEzzL74D9nBRnABzdt25edpGfGVcDFbbttiRLAfz3",
  "key29": "3iQx71g7ENk1oiLpZ2fdagttK5vUcPVMWxk4AokojEFarog2o8aSY6E5eZTGMaBvQJRWq2o2gA95KUPZZD21QcJ2",
  "key30": "4AAYbLcSYwrVcQosFBj1NGpfz4R51uwLp5fdRFnbpQVraHa9UzTYMTQoEjaqXra1A9S4MXXNgjiGhwn8MKSS247Q",
  "key31": "6KVLoh8CNzueo4mfseg8B3eAPf9FEYyjFY6rG4uufR1WsRPm6GUpCDbzH9Pc3hTfNp6QtVL6bbmqqFjRkrHQXwe",
  "key32": "MgUfb6bjqgzYsS7bLUTj1LLXUexanA1nuBBr1QcHYhWnhSyjZEZ1VG3XaMHQeDogi9z6TiM9fcoGTLDSJpmDqqo",
  "key33": "ZJV2biHMz2zGALQsdRwg66mecs5sKuGpxi4gRvEzGg2cPQG9zDbPnXrudLdq9oXRmDEApSHiA8bJQ3LRgC3DgRy",
  "key34": "41X9AeirKX8n69oGjR4xv1MRKhKS2QumbaftLuHoFn8kwi8HAmpHfASkV5mwouL9ytnGdcrsPsW7WtCiSxnds7Go",
  "key35": "5Y6xndwG2Lhw3Nk8yDMw3QesU36KcxRvEgMCeJFGMv7qwRzUv9Zbt482hCZ5a77jzvGJb9yFLgkzF8VZ1rxk2aV9",
  "key36": "5siwUbQqHZGmQJyfS5iN7VNjpLELRxyuB2UoUmzebEPG12RQVjn7dNh3DhnRXXnb6ESn5vwnH5QGEehUCMeNQyoT",
  "key37": "3SpYwuoK5fq3nUDQa2AnQmo738B2UWQUgKVKEXes2osvb4ET4HJCTzyhTxyhDi1LZPUzsGdftNz6eQ6iESwemR9R",
  "key38": "2krwBRP7evBEgRSnzE66ziymSSnrQBvnBLM3DXqWVJJKaJ5ZCaw3Abs8KJYAJpTxqRfbzfJsUhepLcMBXe26sRu9",
  "key39": "P6EuAooPaMJWJN7aLFu2NuKdgJUpZUEwXnstKnt8K912zk2Hk8U1c18HeCwX7cAGPHsC9pCdQTHtQj8kJEbHJvs",
  "key40": "3HveD11rgNCpUfKmBGTJVDHGuuFQHn9shhh4YVVW4PTdYZA76M23o4f5Qfhdjs8wA7pSgQLHdyH5z48YY6VH7UHM",
  "key41": "5zst8iipvVvX5YcnohVxEAdXZbh2r7G3MMk2VWFyDzizwqLNVy1aD51NpAPgUxkfFxSTFeFzHMK1Eecuw8RTEQ4w",
  "key42": "2o4MpUZWjDPw8Y2dbUV8x3aubb88X2LkvYG5sinK3MPKm1NtVz4JaSdz1fRLpBp5bVwCUq6MK7JCv3URTFDVD7t3",
  "key43": "5eF87Xue7HCVcCvw9WKHHAEKG3Vpj9cVH8iHJwNjr3P7p4X4suTEBmVAG6iY1nv78XG3NjYt7RHmiNbHRPyMww1g",
  "key44": "3LuzbpSZTs9PMsqmQHL4cw94kyEk4g2ZBswr4CtFrQVQB97ZLVh7KwyP7PqK49mckhPdBmLZhpFA3TXFKEGz6E3f",
  "key45": "2VyZzfb31Wx4aFHS9VNKPmQtqm9KiX2LxvzwZgrJUqqMostjEpKnXUPMmCwBvJbnbbmCH9ST4PHr5o64jrq4bLyf",
  "key46": "3tqTyiUZLXX2aA6giSmaDyBhxDmsLwG4TDvbnx22Jqe63p4Yw67ASYHPHbzWj5yHVh6SHb8FtRGtj4wThSvtZTeh"
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
