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
    "5c5VxQMoyea6pUvjFCVntbsZVjM2WiZnHhb1RMvhA45BoYV9T9pzW9scdT544cFL17fTL5NnrkNUokXM8rB3cZkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CVaoLVGnuG3vcBWZnUGsScQ1sxbyXqDcSBRbHjvjR3i9QwuXaHEKCVL19q2n5wdoNnqwpf4ynC4tQWyzYLqd1FU",
  "key1": "yPVCn5iz7wPaftH8mWxtMFMfdb2Epfvh6mDWW8VJy3PnkLSBGZenGFKpDT7N1aD4bYALsh26NK6hzEhe9xhy8Dx",
  "key2": "2JwDk2VkWqFmzBHF2v8jPLEKtuvxQhpGyoBLXNnEDqMBoxdkDm8q8eyU287pVYZzhrJwVLmvtbhg2FeNwEKGqxJC",
  "key3": "53HQL9aU1foxiXzJfk5MfnoSQzkvBdQNT1wUvAne7mku4vQuFNnZscRoKRuZWUUodq6Jje9iHgZwVtjH7hKmU3F4",
  "key4": "5EdWRsGBfTrAFovcLySQWBj36NmUhHaTE5ecPvKkeum3Lz4xcFarBpfhMyTWgLiebLmDRgnx3CwNVDyEhdYtxzai",
  "key5": "1hjqjnVrwMH4UYT64ZJdsjWyBkfYZ7dU1n3FEceT1pjukmS81utX83LWeQydc5bPsNpwggBTkunmkEZKJ2pMUk9",
  "key6": "2prcH5aMpyjWrk7Cd49ySDbvAciVU5fJnt8qH1iPbsSbWb5zgmDy2aj9P9xt3EDREikKjcBz86pk6N87tXrmhuNK",
  "key7": "Q3iG8D6QSfNyjemSRdSMtQfJJUWLpDd7ZhbLxHHS1DKAazT2RwC7hxmRfKXwf9FJVV2Sge8FwGMv6wi998RpsPp",
  "key8": "rYRwdBeGAJ2fsfvJBiUurWVQZpTr8czMFb3K4Y92ui2YSWQjKck3S8VMMNscTdE3rgBB82NN9UCmB8nZRbXc4Pc",
  "key9": "2sN4Pz8XM61xaARRnXkVGCoU5kPv6zrwsokuG5xhba8JXgjFSWRRsydgTRYWrFBSTRanHjKUauUmf4uje4TB74cX",
  "key10": "5oXCPFWGqY4MY4SDWuB4dwHT2Tyvv8kJZjpLVpJWgWEAVhr7wectPUnw2PG9BJD8gGBYFpVV6qKUPbCJB1nha8bD",
  "key11": "448BnFPoygBiJ8ypHHEwK63zBpAtQ6WpeLDCHiYEJou9siRNBKBndEyebQFpMQxd3z7ngyjYfEYiVSyZy3jhbaoJ",
  "key12": "23Htxd1ZkUKju22hygVTepPP6ZW66QUYJuria6BxCqdWWLhrRMivckJHaNpWuzy1XfYmhDSJEUnNJxv5GruoF4Tv",
  "key13": "8LQs3VB8hHG3RLBdCLfG3HkyMD9X4iyJC2ixxMtFmTSeSxCjoMqiYVstc7i9fe3AahFk1dPFeRrxG5AGFSFGgjf",
  "key14": "44Ydyx228me4c65b285k1sVpodEG1MLma4bpBfEbdaXR49cNjHYtG9cggshifiJRGXjU3rJ2toJUBoourMUWeXGy",
  "key15": "4x2E7LwHNGCo9GkvBkL42zSWwmf1kLAZ78BXVo3xGag24NcTaG5ER5W2DvbDE4nn6apvf4sSBRmUTsmYDFHDa76a",
  "key16": "PxgqACWd4tCuiyUjV2hTnRjbrS1133Phaf7pBvZMuFv92zwtZpP9MvJ5p4RFCxxHndHLxPcBNGsYmGqExGpsf5b",
  "key17": "3DeFmLZ6t5xWW3WCDiSaWb81oGYok7Rn53xotf7iEJaXTyqZ7Qp6MmBukioP9mUZ5ctxaL21B8PuknsocqVGYb1M",
  "key18": "24JCiDEjReVSqkztt2iPU5TpBnwKmhaU9KJJWFpHo28cU2EQFCjq6YuvedfzXP62wtNu6RyiQaYJmLixCSZGEnmK",
  "key19": "27C7AAhda9P1gyKh63VsBSYBkvQQmgcwSfsXfngKB1ZGhEg5Dve5h94krmBG6Mh8NZ7SaaF6PEQHMLb5Aso9emM6",
  "key20": "3mnEgGGX4q7yQYg8BpjnSZkkLb7skJEBN1G1ucxgjc9AcLxNG4UbJJcc3uJy7LBcPfXnJC7EEDxJSM1ovymPYAxF",
  "key21": "2mR4Bqk3pcuCQtovA9tVvc8xZqYQggykwsgwWFKjVtZYhDwTqsawS34dr4HDvn764ZXJbK5kSoxua5YBeKwChkfk",
  "key22": "9hKN5W8cyr7bbakvh5XEiXCpPKMog6PjZbzLA96m9AVpz3bAvZG8pWq7EN5ZQGg8DyVfKxzZZwC7ouUk6DT94Z6",
  "key23": "4Pn1xN1RnR5o3bQT2czkn3W7dGCmRGTXznKD8pwYrCcTY7m9W11i9dDRteyjX37CgEJyQLHpeV9s5bt65RGLSU3z",
  "key24": "25ncxpHtk2BNbsMk41Fwe5tVr6nDjLFoNj8XoYAZ28AtWtaNqFMXWPYRcn3MQWq23NmUMWoToMrJ4HjpnNCL7jTn",
  "key25": "3Lm6QjUmFqoKB6bMQz1cv6g5XmVbsvuxALAJG2YHNXTcQ7A3GmwjfVfmc7BfvQ1HzazNh8hpYwBS7bqEaivAi3mo",
  "key26": "58WWE319EUjzfKTiPpXeDK2sdpeRDqkuLzWsUdfyviZ5UkCDK9fcxfGPK9bagMzQ2jDZjrwobqXajheeVLpgTBmn",
  "key27": "4RKgGKoPdriPzyTETN9SaA35GozdunLCxKpUi1CJUzXeQvg1vawGmKUmNxsybc8DQ9NiiYJaR9onnaCzKZLfUgVw",
  "key28": "b4P53x6WZ3UAbWxizvYKWVJmeGTgGSZU2aaKkAPAqU4YqeUUkiGj3u1BPun6CyJ6XwaGXfdcp8RngdEtNFX91dX",
  "key29": "4t5vKWjdw5UEm43zx5Euz15wzbr4oqU2XSdShoiRxyaSqV1hgjNZWFrmhJSH5vUV4toCteJygkaWKLTj8MguNA5c",
  "key30": "43p7VR3zhEU8myEXM2Z7ujYZZusnLPzccLmc9CeDtF5CYYYKxzzd5WmRihXLxsephiQKR3UR8Ky5wo1D9hViPpw2",
  "key31": "33YJ15Ea7s68shsWPtEkCauEXQ43RgznZwd3rzRqDKZbLCWQFH11kZuMRYVbQQWKG4waKJXwo37fHxMfyGaWJBxg",
  "key32": "4ikkFsvC1QLiqq9wCEeyGDfxKDp9iiKg1FsWxQKDm9FRh1Rx2BXHNuXkXbjMv2NhmGpAsnJrGB4GVaDFGRYkaYNd",
  "key33": "2TWNQ8dnHuWL9sUMpwQuEhTzUv18bzUoqtvRz6jvGuNHDcJrnbehZUtHEq4KS3NhSY2PwWpQqTUbfWqmppiMaNCs",
  "key34": "3SHWwuoAxajuZsRb5JaoUbB2NThTDLDWJY3roy4ewDm4oTbh6USpbS4g9Nrqkhnqcs7oEbQMZxHDWR3GLxSWccTM",
  "key35": "3Ce1FUA8wBLT1A7d78RgmYUJmF1EQh9M9yF7tSS6EJCypbfvKA7rSipMsSdtHDTeXZMHHUBKMv9d5Wii6jPA5i1Z",
  "key36": "E4znqvF3s9HBK3t6Lkw5aung45AfMpCcnnS3YCKggWh7AJVXAYe6XmZ2EUTQDsBLgsD1DjNskntAdaKF27qyoiA"
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
