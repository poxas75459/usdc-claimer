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
    "3zp5kPPJCMEn7wjxhxmeznPCPfcGaLHgTawx6nDSM5eeYJkF72H91ywjEE5CXWdgnXWqCPA2druDB8NbFpEzY5bu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AbwCgs8neuSKDHVby8oLCndcFeyHRgS7YGrFb1DaxvYcACbWbxv27XvFikxrJnhEfje6vJBow1kzJZh7X1Z3MTB",
  "key1": "2RfYDWexJtwVJs47aVWZ51Ac5EM1gBDTZ5vippVwsTPnMBrv9Y26SjEPFFnkbcxN13L7XUw6SFWDuDJ8EQwMKJHU",
  "key2": "4dz5biXoWNR5RH37r96UTKaHYdjCvaQzvpQ9oXswBNiPdyM811kVyhqhYehrzWvuVQijaSi8uZ5zfDxQBBRV1KqS",
  "key3": "nv7fejfVbVdK55GYPafV7XyDhfVSNZri9JCAq3tv5pHggYTJjhdxo1Td1QT3kAYDF5WJCxfqhhcLeKzae4ZKVVZ",
  "key4": "5HUAKYPbJW2ePA69aUNsLfDvJcy8RWwsQa5oQyJy8EQZrngArR2eDvbpEzQgN8wRCdPN6H3XKjxBbKCxs1H7ZcgA",
  "key5": "4seesdpjrJZDFwwvXJZL3x27CWfC1SDNGNNwGBd5faFNeyAMwTk9TotCNVL2xLir3CNxhCQfVof7YRNYXJ8h34BV",
  "key6": "4HfVDKqr6iDYFoVkTmxagMXMA6Uoz8BZtu4Yn77ZDFQzkwN6wRZiM1EUq86E3owtMXQQgnzzo1kUwc5B6tahknU2",
  "key7": "5nPKjAQczeVMhcb8KkGzKtGJUGqvdtHrUcD1XJFmqTrQuqYB1RZjrGCrxxNLn1vJSwfjnFhdSyeP2215m7YJQVNY",
  "key8": "4KedEhPDLb9tpr7v4keUWAvmNBzmB9LCKku1jTDPSDqVZtxvCjjBN4oRPPscNatetodyswycbXpyA2gRHH7cyEx",
  "key9": "4rnT7pa9im1gy9fvXJQyRCV1nMeNSm7Tjmw7uzpCRLVfidzDXBg3d2wxwTC61VCtCDtKFbuyrQi5Pi78Dg8PxH8m",
  "key10": "5mrxXrniVnVAJ1F4ymex7x8nA58WiigHDLWFC8zb7hpnUdyUHhGUcfowj1ps5jVEAxn8qtGNX8nJwJD7nQDCJNaZ",
  "key11": "42ZSDpuZc4how5KG1aWYyYv23vA5KhxQ5mMSzAUbRo44omBvbrPiwBmck3XL5nKiCsW38tb7PdbyJo3MLUJngJM6",
  "key12": "N2CQfHJAHDv6nKdWa9WZ9vPMGWnBhTVTc9GW3hdmUHUmMdfrwfS2TGPAfc1YeNhTpoh2NtJDitkJniAbCyHtdGW",
  "key13": "4uTApxtVJ5p7zHp3ZcoVRqG1WS9N43PUFP3KdyA5k522uJ7embN3Wcy1MAD6VTk9vCZPLnyEEvfBTgtwHZyZ1aTL",
  "key14": "5HjiziFZ4DAWwZjtKvqeCDr6qCBztKJM1cMnDkvXkBJNTnxV1HnnGUTgHC5ytte9iZbtAfTB5tCUzmUuhmSZxiHA",
  "key15": "oVtpKo3FGd3d9mtej7qg3UtVFgnbmZ6YctSd85H3ZEe9E6zxvVMctX4KRRnbZtgJCkxwojZGtww8UZRLUHLnewE",
  "key16": "2H75y89dMkRvwhiWwdcfH66Bh9ezZJjba5FabL7aCiNUaWN2oywDkzshQGtmhjuKc7Dv9yMd3N2aSFKPYeQXayGj",
  "key17": "2FTp69f188cvpMkd7JY9A9fYPDsLZfkqLzhqTxTSnLf2B6r85Y1oZWtQwNRHNEx4NNoppzkdidevPhRwWDtEMqp3",
  "key18": "4rN559QF4nVpfVj5hqHn6GG8CD8hjAPNTUfHXusAgDFzfVEibYz1yEpEDDP8Av63YxhphLhzCyiARfEWmcRxvYZu",
  "key19": "27yEcF2hsa9usAgvPwKboNdQDtvpSAS7eXotgJF1wMociD3tFL81VQXQpuf3jqe7NcMUS45LiodVpgGytXrgB6ey",
  "key20": "49JhLF33wTH8kh71KwbJrkJQtuauT83NhWti7EUoKCz3YpXL7ehkEJ3bGNfpeSJ6dgRTi62DBn9k7cajjNRF8fUe",
  "key21": "7vvAsv5VVGu6jdP1TYZcfVHcRj3t6XuHysiyaZFRekVLX1xA9M9MsRXjd4pHkzxgGj1vWDP6emdeVes3m8Nw9mc",
  "key22": "3Zv2oJMSsZtbPY5zwVC1f9rRddwasbSmDQxYj93B2wgdzbQ3zud3YgS3cDzWjxxnU9vAuwFapBV8o8v3VxyeCB8T",
  "key23": "2GeNKF5nmRbbS8Pp3Bj6cE8WnWc9VjnMsm5btpneESRj2wBgUcFzG1CpfPKpPiyjU6qJYfrgZ2SZ4nqyNdJBcNs2",
  "key24": "4WdPSVVW9mWLPYGanuFqHK9gJVDMvNRunNwP8QeqZcXBkNxSYtJE6jjdKZWW7uqWBHgY4VFyxmkzBxTZDNw5TYgR",
  "key25": "4dxpfWok5x5wyieoiRi6868o5DF6zsYANZNehkcdGztG1edvRa1RDRPXdhxv7HiMR89StJFM1NuH1tYiZnV65qm",
  "key26": "4eowqiMLfZuERCG9jMum293L7yHA8o1FhrgRzWuHfd1Q5FmcHci2MD3WUMNjZArhQGsUmKHLA37KjXauG5HymFvB",
  "key27": "Z9tqUiC7GA1coKcYAVRm3QmiBxCCkY1Au3iY6erSRJ2CgnaFKMoGwc6v7UJzVnPf9AU2siPJf95pZiQeoVnmhnR",
  "key28": "3uDDei2TAXEnzJ8WdmYX7bRxH3zp7LwdE9MVAAx13Ek5qtsFtmR8b8W3mZXfJKFLExjyMjsuCKMPyizbEzZZiqop",
  "key29": "3haekTW2rdrkkE15b3AqUu6KdmBhtrjRBqNME8PCZ8eBsUoMTePYdHedxQaEALkgRdA4mjYu9ekeqrt6UP9s3LtM",
  "key30": "61MsG345oGhUGu7Nb6xqLF8yivPxdStj4XMKuLkrK2cbLNTFmgawwwK5PAPUzuiMnxKcG3uhJz7viJv8iisyyyJe",
  "key31": "4xpbv2UUrafRYn6TkPc5QAXgkMedTVxRDKvzEtBPB6RkP47Zh3Uhj23fYN6mAmkyZKZ9EpdCq7664Z3ZyRiu4iAU",
  "key32": "3kpaadvSeBnvAdaLLZgJWXejaSqYPZzV92ie4CrS4K79rvn48J7jykVXAPUoP5iTj61QQBGa99bYktbyCeQEY2v7",
  "key33": "4dXkrjUyjtPLxpBcVmvLrRuyX6QKdmvno1U8zUjdSSoKbLgKWaLADTVxfjgMeeQsoPuypZ9DUkhhNRk3j7W2X72E",
  "key34": "3XPBTEuoETdWNDELr3iAhmsqFcUdgJ2RwqzwmSTnBX4MSwmMdDeXiYsvuutAhhGBJzouaoqQaBCwKHwEVpuC62z1",
  "key35": "42EDdWM9acb2YC6Xt9wCXJqJHx5XVcExQ6mcDZ3kTcBZtHTLMrnAHp8arjRpKHumfd3ZwBqdi3S1QZDehixoXFE3",
  "key36": "5RquYcHy94d5e3MhBAgJHMZBC7g9415eYqYr5TZZvG8S7BTJ5fshEHSadKBQxnV4ZMX3WyGSqGetHCRXaj8qbFq1",
  "key37": "KL3F1regZwqD5aYnyMwxEsQdiKtQySabQxfsfCypWpZRKYJhpwBz72PU6pobadRbHQSE77RF2cMZMLmN31Qqthv",
  "key38": "5QCJEhTcQDsyxXgu2Xb7dEGzjBxeyWioX2RscUfVRdt2kjg2jNmazcSzN21DTwCBwAwZexhKyJtHinjjXFxwyJrN",
  "key39": "4BqK76pmZVU8R9eVVLypju4NzMXMtrb9RqZ3Ys1yiK39yfSidkM9ProgEzRjJPXY4CzeAhxLhEnKG5Ps8nXcsztn",
  "key40": "3WzXQm3arzeT5qqc2cdnuHom4dAPHEkHjEJzB6B1LWUHZciFiuaFhrs8CEwPwQkvmdVFpcXzQKyzjN2ZLAN689PW",
  "key41": "3TcvtX6guKCNiPwYKM7PLgW6nfSr3j1bVFcpmCp9KREKQrWUixCs732KYrNoNRLCvhctnpzEAw7NYa5id9mpDrD3",
  "key42": "4PTyJFiCcfTCGFGbb4Yc9AkEpgR56ibzuEhNi3CfFp3mx5TLRCGYYoUrACT2gxk9oTdcstEogUR6ysMPQQwrf2C8",
  "key43": "3wLP6T5VEkFKmTEHms8vUi1dBacvpshuRYXGz9qLuWPGCDdKVdEgou4FYwwaQZxfkdTp4z4AaVPiMunHraKra5KQ",
  "key44": "53Jkv8wjwVHtNLuvptJkRJ7JEUwKqk2xo6Za5XeMibAZYkLbgR7U86TgTHvUqd2dNtqznhjFrBhVD5q8dTVJFSaF",
  "key45": "5zvbYJ1f2jD67eBxy2mr7TiQd9bZ9iLHGXsmdpY7H87rBZeZhwYjuYAZUbvMNtH1ctWmwBQYerTiA1bbxAhEP39D",
  "key46": "3WNrL9JapwiArbzwWvB83YaTpdPULhRQgog6J3D913GWa4w8XMvUBbe8qoKEjavp9fh6gX6xiPnL7yD6k1L2vNgc"
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
