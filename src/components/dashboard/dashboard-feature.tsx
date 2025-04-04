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
    "5ghW1wU5cfDa4TNgqxu3PurhHczkV33x48i4Kgm625SK8pYCQUngPawtm9QvfPui5MuMxKrgzsMwny3eG1XjDhR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rw7fHTKZCpSWuEWjdNUCcw3qNV5R3ACkpRwXUBoyGk9QoK9YxTLmzZbzjTH6rX4dn1xPoRnHdZjG9y6yt9P8E9D",
  "key1": "58B71gwcuEo5ciAjSWkSCCKvnJD2DNTv7zU7YEFK862MsX2UYYPRzhiqBnkr6rLuTN7KzAsywr8cdXTZdtM2EPjW",
  "key2": "3cmdgKxds4CjpUfJCEtB1nv5HG5bpMgZE12BStafWRRKkM8FA9feWHDtfd1xvkk5H7Jf51RPgedmVwMpLVXD6Srv",
  "key3": "3EgQ4vLcgMy2LURzQTHddKhVanc3hpXxLHYkQmXm2eTvAoUr2jBCYfvsjbdhfwX7AqTGNiw6dYRifPkhS4N8ULTN",
  "key4": "tqD78vkYZt9e2WHwe1vR1igoLqqqUnPjxQ8yM5xwHRT8ZQvEPUyjCT6SmRhWP7RKp8FLSGRfoWbghkfRUnHe6BL",
  "key5": "4paK7SPn1sUWLKrJHGVvvtvj5FiF3RVdNgKncpXmZhi429pAfAEztoC5P2NYwKFxX5dP8VK1WC3PdzcxQKjAQjxB",
  "key6": "4GxGn7Kg36uCHLtLGt2ProghP8bT3AzwtwkEBmS3BgqVDqLnqWyJcRWsbNpELQPJddLgeW61ysrEZWodfiaXwnj6",
  "key7": "2g6MyHMmxMo39Qimqwuzu8phqA78w8StfQ5ZHJAF3qHFDvAT2JxHsX2UDN6zgvLrxmQizzVZDujKV2QibuEf82kd",
  "key8": "2TbQvNH1tgnoEQCeDn2k3WGTmRi2FFiLi7enXPqVWHcnhtECKmji6LdxhydqrsJ8nbG8BgaA14BVmNcnHV1Eggdx",
  "key9": "2EcNRERmrNLeBEC1GeBdv5WfnvgrBbe7KfTPSQcNV7cq6ZpmH17edBAJc3JP46aprbdRSbiARxQZ4aFHf9icSrk3",
  "key10": "5LMzwHELfGZTJvvpwP3L8e94moR61Q3LkeCsPjS1vjjf8RgqiCYhBuiKPFfD4CGeuaKAVt6pBE3SHgRgLekSXkbp",
  "key11": "2rwJFGVmtzxTA6qdZio3QCGn1tjBnj2nEz1RaTtVjKPXjtRPBYBGNN1FJe2FjwPxqJeYwt5k7msN4CEuqieqBb9g",
  "key12": "5Qfiud65uT4wqRzQyfpfkMAVhpC73e6snk4qK5o9Qo8LofiXF7kKgDi8qJew5bXgfwuZGkunHtH9RymKFEJbYTXD",
  "key13": "2tQet2UKeismwZqMn2Erwa5nX5MVeQbjKe9djVctNSWSv7TQZSX5pJrdWznJPRTvQXPvXjhYxXt2VJhiwavRuo4M",
  "key14": "2WdHz8zeiqhWX2BRRdaGfQKraDfDev5YJ4hrdUN29rPiTsGW9qBnPJwn7s7D9Ch2TukXJvpkBQrZQETDw82znRjU",
  "key15": "22pgfCtegzkhju7TS5jp2ussSoMeLqM1HHoGfLqG5seJPdxUjadBKmwZy444L31pL9eWWbuDf1JMoTyaBEznBdji",
  "key16": "5DGzcndU76neTZCGtcpRQ7syiVSPuYx76d7jRx3QXdaToKzU1CD5Ej2ehZdxPHfprUiHCW4zsv56aa1wnQia7whg",
  "key17": "3gEV1sM42LfvMwhAh3kTb1FAiqTJ1PYmsBKDroWHb2Rt6S4rLyoHrdnWdegNi1ndU5gXCvVoSRUb7YH8TUCijcMK",
  "key18": "47bn4CdK5yZToVehCH5Re8B4yWuW4zKjLRmhEaJ37SrX4ijqNArYVbqNArMaJkjEiDNLKDfgmC6c1Wmpn514y1kE",
  "key19": "BUc1J94vF6XUrwXTRBXD71nY7Rz3kZfpRZm2PHzM4ThcBvaMh9Asdi8rW8huL3oGoVquYy7Qrkb1KvSSNRKtTni",
  "key20": "3obVnaJCB41HNx6HPK9TJE4ZqUbaUB5PA8Ns19CzAmy5Q7SAUk2DJhXeWb3egAzfbDGZexcHEEVTTD3K7viQFtSG",
  "key21": "32E8wGJTE2M82yjc6xZ29vBuMBeoZKs3jkbZj8ka2ZsTzVk3aofHEc4dqmQCdqfsy4xQvBK4ps77ytP9b6pffSVL",
  "key22": "5LC4nZgMFuHAA616HGJYk2FuAc8zNJdW5SNDdtrVPjBkzHg3o5f35B237fDWd4RYQonToAFuUgsye7xbjSpHDkra",
  "key23": "2V7bNnd5ND8S4ZGA6ySXCprTCmkxB9akzw64BYXsA1qMiYesJ42Qr7nsef3ZBjsQwXnniQpuMc5NKeRAN9cLvVLo",
  "key24": "5pkks5NUFrGrzrko56RVJYrKQy7EBa8pNbDyyJhxSd7Ug33wGyMg5DUMpPBrmbnL1rT8Md1dDZYKXPyk4uVonBfU",
  "key25": "2tSRzSh4GYvZiYRdh59QKC3moT87jwkqmXzPi9rnakoyyz3SKqHvTVDnB5W3xp1gCQr9Chv51JJrSssNksARstoc",
  "key26": "2D94rsVW5pbgT4o7jmLNXKTEZkSgvFNvoLTgcmz3tni8wgyrYuBfx8rMBT5EMrnWGcarzyrT6nNBTqrFV3uqhHKU",
  "key27": "25nBeqVaQu45jdujNDMY2Jgez4LNbgJQqoN7mQoucD6cXvkvNshwJhQCqxrjvVGvPygy4CLWLShnA4agTZVxczwg",
  "key28": "59jHvjJZLRBj8SvzCb4N46EJHGLnCmAyR9YnPwPWWRXnUJDhSmdrapTYCcWBqFA1rJymTNdXecwDabUULqNQc8fU",
  "key29": "3xmgYwD43SsmYWmpmmr5bDNUBZ5FQwwiFcBcMQRnMU6uBNj9nbdyyubbCbbz1wTjbVtfDF3DtfhLsoBgj5G9EU4b",
  "key30": "3naWUotxsKAGLQ2npavnzhLY8cthRky6jwdvxsMWrD8DqtxsDmWpaij8tvyKgbFVjy44UsSACSbxALyBwEJ4nqwX",
  "key31": "3TrbSqqbtYqUZCPoU8KTECRzYMmxTQpS2uh3qvASnxYRZMHigfuuqj6b2XUfuCbgFyamqTgQUPeX9VFbTJ1BdeDz"
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
