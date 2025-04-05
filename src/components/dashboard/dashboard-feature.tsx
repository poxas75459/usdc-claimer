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
    "UhZsPy7WaCBgSviaztVd7pUvJaPZc1Pt9YJzyfCZEK62aED6wsNhQ6JySF7hbtLPU1LhaHcSJ5RJGfVYasYbmDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FxQQstChN3As5CBMVuoHz54g93Rwdv2RJBginC4gy6khiNqwgDjCRGJanS7vEWPPa8uRzJjp42uFbWzWuXX96qV",
  "key1": "5KKAtBDj4g9CPMMueR7XpzXsLoDvZvm4VXfmUsgPTxrWoD8edYtquaFmzL9mTiKyrzNUVqn9ajD91JEfyRfFT9sF",
  "key2": "2FnjE1fB5sRknv9xtDjPga2fGm6fbuVNdu5gLvWyZjZdhuTJcbrBvcPvZsKYbS6UJ6TM6orhDQBfzdy1cNRZwWXE",
  "key3": "43hkiCaynUAay4URtT4rGLfQs6AzQJFDq8jf6X15K7KNviLnXFo5ZSzMZzk8LXzgAzznar1gBhJXv8aoBRW6No2w",
  "key4": "2GDcmpCLPp2gVKFJCFwNGy6U4qjtr53LZ1WkJBDqS2UVxi4vp7B9kJLeQgwLAkUvXxaagN5RoTgGAftjjYhbUZeG",
  "key5": "5mzcXzgRhg7fN7iAnopm6ihPm6DxHNFehVTbJHVtnx9w4mjHwD4uqsAzn2zKQV9foFTvZHdseaj1e1JLMtGrLjjh",
  "key6": "55HsHWfBb8bQoMweXjKL9jmVgGhK4LouyTs2CsNkFspEM1SLFwhyqNUrxr5a8HWWtcnYnqeRDuywzrinXKAccZWo",
  "key7": "3QBwwfbDJbmuzYHZrMgKwpxJCj3kGnyphAUhT7tT9UvPjT6hKv76huCtmH6HSiiXELxCCK7X36PTks5U3U8jqkLx",
  "key8": "4ncVYqTQi1qqxowyEpXhF8q6dyjqh185Zt2kwQQzAxBm63jMiSau1PgtvstyFP1kNbkkSsyL2HFR31PgyBxYzpDD",
  "key9": "4zS7cuDNxWFHNBd66Cp1xUVPfv2wLoNd145DKXk31zyTnrA49RyCMTKYtkWAUgsBUTxr7aALDvyC8XMkHtj4oYqU",
  "key10": "4qB3XkdF2mfL16uj496E4Zou25xL3rUtWA6aA1PP1FYcuUYNGD3kfnHrAYBEtehzMGqLF4g4FVPgYaHMwJARyVEw",
  "key11": "2NBt4JF78phHqx61k5n6KAtMvXQ6x6SKEHFsVd4TsM6wrha5dAT4KcUHBbQpAem5ETLG8Lu72ZZ45w7NCwRVxJTv",
  "key12": "sKMYSgj6auXuG79iUBxnYi3dGXDu715K9AdmqKFpxrgfcSXabZ1Bdcqka3SVt5kXPRYvoRZ7C6cZJG8cL8gu8Td",
  "key13": "62eVgGUJhmoSqAQYPVFt7oy6gd8HAPGWZSh6RT2TiKW6aSePfUBSND2Zi97L4rWgt8PHv79ok84ftzHiHQ51SUw6",
  "key14": "5LuLFhpzcbAyCXTUGFBVcsjG3Ywh4BDyEHXHwiwbPkBzsogNiR4D75Lj2DxTtML6PahnPPpFnmU5VL7eaFxyBVzC",
  "key15": "2Y4FgA5zAuthLZF1x7KM5Lc1C8XSatbgBgP3cwE96GmzUapcVgXxogESG8wouVpk9xWbWkoiynBmVrrawVxUrkyt",
  "key16": "36D8jZ7uh3UP9rEF4esBiNLH3PgnMPbowgZkMnaPBdCRU36pF21ihi6XQXH6Tm6CjxdYERu1AQxMUx7CeyGVoLMr",
  "key17": "3j5fSJmZq8LiFGnp7h75TYrxH2nwxfy2ZnbMXR6s6ouv53UUQyMhtM8bGUNyU67p3TmXtmmqPwBgjxPUYUwxPvb7",
  "key18": "nXn6myvNrdzEbhgkVR7tQstrLYeKiE8paWU8vYUuVXqP1jmkTda5UmcjEYbbbvYsczqnxVfnfv7rgZndBtZWEyK",
  "key19": "43hmBAHJsLXgLrJY4dfNVc9aiNJtFwrjvLvStmPEwZwb3WAsp2Ctwk7b42WdjrzsnWsNAWZRaxBb1NdM52gKixxE",
  "key20": "2d5hbn7eAhZkrG7cCNN2apKtpvZrn2U4Ppgrsc8hJXbBjAdPBQ2DigWcucnQxXhSthg4ZjLQ9ERwwDskKgsaVfff",
  "key21": "5U6XuZEPLcLZQNyEbU1RDsgF5cPaQvbXFK8BKf8VspCTe7kV5Wg5a68GPxzgmpaemneWAddG9zZiUPJcTzDcuFmz",
  "key22": "5uCY9fXnQ9xaPw4BFpiWywDkubLXQFoZZs1xstaPPppUkvkjTzrHaHfehrRgLaC7Fnaep7j9QdPdMEU8hgUpmq2x",
  "key23": "3DXzKEDyBk7zWaHUui1MjrVdvpuzutHJbXavzwGPJPzXg1QpwmP7gn1QNTMxx4D1e5zwsPGNenWCfS7bMFEsJk7o",
  "key24": "2A4YbqMtHcEqFMQoqVxvbtyTeDEdRyH93dumsvnXNp6vm7fAvWZsyWHNAuU2CdjHWBbZMT8GBFbwTQXesSYbq8c7",
  "key25": "3ErGXZWzaP6k1jGkv6sNmFjtoJCmSJyNkjYnio7Gbxc3tmYRpQcQwgw9iBsBQc1v6D8NXb37p4W8x5maMdswj6gq",
  "key26": "6qUZNQN736oq6uioSdvunNVTgEVc2wskbXGarUhPAMApgKD3n2VLryEEuxesgcaStPjh9qrdAkc8L4SWCHSk1Lp",
  "key27": "35ChjBYGYoRdz5gfAQ4zZ8QPZXs9G43MnLDu7oBLEG2XzfPdEbBXPkXoaAJeUQ8RvGFRcMJhsCXCDjvxCMZuXBbs",
  "key28": "3D9mxZ3CiEoEjd4M2DSyqUuCvib3AbzgutU7MBiJLAvfGfCCNHb9dQC2MKjfhs2TGVZsMsWRKZX4NAqBjuCa3mN6",
  "key29": "2wtAMqCxLp5AWdNz9QboHaHLYfMCvfqyjMDSuXmvUXjDACPZ33EAQ1zpmAAN8Eb7TQ8VZKLwgJkoEcbrJ9Z3Mwrk",
  "key30": "WVANtJX7Nr9nPHNs3Ro1J1Mk5BQZFvHNrpBWpL4DZK23Pzso7JH2aqwwAU4EyyH4PakuFtVCDHU2CGK5NY8cL24",
  "key31": "QQ3gzUe5XSgHA5RojU1Qo5KY7eT98m4tWHkDwzpC73ZVvyucMPyoLmJN3rXnf1uswjPrW7JuBBEPEHmZScyQVnF",
  "key32": "2REr2DYGXGt7eAbhVmXb4oz93xbYThExWiPCZwV6rHj1uhjNgkXjR4nadxhoKZC6ZCvmTXWdHvn4tHnGqin13UL",
  "key33": "3hsujfjA4uynUVkDRc2XGRSKChUzWovHsfypnWHZPsbC1vEYUXT93aeq3xSbL3YSMHU1So31TRUt8S8pi2u3EdhW",
  "key34": "2QA2pmYmWN3qHpadSWBFt57GF7UYoSmCoHTGseZC6eY727HxAK2V14aNbKAPDSw55oG6RyCszuLdymHWPkCaKDrq",
  "key35": "4kCHKCCKJ5FULMiWzpAs2SCHoQvPKQJ2r8YaGHvppMRqCG5znqfk1phKCt9GwqfLqH8PCwRPzSPVHTVyVwY32SPR"
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
