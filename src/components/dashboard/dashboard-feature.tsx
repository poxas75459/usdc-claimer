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
    "5VN3XgmXtHJGiBMDxddAH9RtD5MTypRTgVhDqormNV2qu2b8P9uiNWoZma8FAWTZQUHUVRs63mvGXh82sctedSQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28vSmXir4pqSapD9dPbfdZJVwmrNjDUwTabk59pYbqCfoNKHTxHoGwLPVtcxAfZr7zH4SKtaxhbkPjGY7tTd4BGv",
  "key1": "2p43HAi3h8qUYatPu2KQSNsCaQsu4qzk8y9y4DbSwa2H7ZBYBECYrc2u6GbiPm8QKK65SwL63kG4Ag3vKHHivjQQ",
  "key2": "5RD9mDX1xUB93ecUGSDxJwgRwBogL78AESwLKEBLGbxNVF2xL6i4zjTtCWy1T5EvYHcQMcxXKA7dZGUdaKD75K9K",
  "key3": "2YXg9JTpMeJRBEahpu1UWf6kniZus28fTQq4N1DKStsuHeMs8Yo5eM1Crj79AB8owFwyAyetTaMzd7QFDvkBH549",
  "key4": "2uqhhUz1fbAuRjwzgbE38hmt5FwLXgykJo7fi2WyvU1XY6r1xXQxbVo6wPMmC8Dgvb6eovFZDUu7GmKSo7zU5Crg",
  "key5": "4sW7nLmmUVKKT19cPimV354EUtkV4zD6iqrstdNSb8z7qwwR93HjRGyQixgGBsknT6KKedGKeKCZjocXBpmotq6f",
  "key6": "5acfrPLZAj6jbjkeBVdUoZvxcpYwk4Zgq9b3tmdPmfm8DB63mu7jaS6pNMjAbo7vFRMKDdn9LbUSKfU5pQ5D9P45",
  "key7": "59jvzCuzYmV3Wb3C3eEmbuTcqoyeig346Xn9L4GvjXU3Dc6biThg5RrnwYzsm861ZW2iaKkKu35osU7Y4QkKV5jB",
  "key8": "5w8s7Jwp7z8BgopYMzEKMGDHXRBwFPWtH8kA7meoy6t2LNXQJ751n56X4UCivYo82HKuuxMxVjyfe3Uj6QABP7Ah",
  "key9": "2YXcRj3zcwinRvPmMm76rLGsBpszCrhtRBzif63aMewq17zk8wJV7xvpte1ijfv768FUZZPHEpjBdYKWdehEKfoC",
  "key10": "3TGDXGJbEwYfb3FMbz2dAS4HAkuHT1pAy1RVZNH8FvQaPKdzicS35fNgqYr2kXJCjJPAqzkzpUPinjWXuTf8gmt7",
  "key11": "48BAEwYCM1SzZmvMsg94TKHtG4bhTtaoKNoEbxkUKeaxckpk1HtQjxrun7DS8Nufdw1opihPXKfkj1RSqRM4Rc8R",
  "key12": "5RgGpsx4FKYGSPdRPbvoafSrSkpzBo4pMGUcM4z1yRXdXKQgg5LZC9Wxy8t584vYF1iac4FwyKNJHRBi2SQ5aEoX",
  "key13": "5Uqcq9G7rNQf1XLDYg8VytoivKQM9Ki5xeg56SC9vNsuyU8WjW7kcxh3ZEMdKTmB6LBHgeLDByPkHhP9GhrnU7Dj",
  "key14": "3B35grGSH9FAXWPHaZWx8qBDLWk3rKwjkesv6VqyANrXFc8uPc6wKMDGD15TL5vRsm2aK917aCF6q8wm3u4XiUro",
  "key15": "4W719HvVKvEzSRi6dyWgw7FX6GXp13XzWhvETLDpLhPPmaqMiYZU5Pb6Gu23UD79aaybPT5fu2XwnDf9MhXsqr23",
  "key16": "VZaactmU276eCUxvbVi7L4y8W9CosKvu2FNS7nhesoeWjetnW9QkuuGRqDopA2eAfKhQWNSKaBJ3EoGjQMd3tKh",
  "key17": "5xyHz4ygPzAUo5sLe4HktEdGMffbeCnTRduNpCpNwmZi6cJ9T2soXcHBWKu5zWtxRgtjDBVYVMkTngXaXms8Rsen",
  "key18": "2GFAZUCpV7MyU9BrKtSkS8yEuKfdnaFUvSnCx1L4REmTVZeYt2ebwy82tPGA8jVv5SoYHApbVzaMCD4RkqSZvgbV",
  "key19": "344m4TQ7rUctSoJAKU2R9FLuKVuvXWTHtcqFxvrK9qfb1AkngngwyiruqxsLPbxHrhMvU86mTMrLR8M4faf6unNn",
  "key20": "epgyzBMMgRfPvwauC9XjLjvGfSeooGNVbRvrT96PUyP9DBRAkbLvxXkREnY1o27wS7RAtxmKeCQkPQXKbyypJSm",
  "key21": "61y6YqgCLgf8ce7K9NvocZc9mwjUiAJC2KmgyGWKXfHyT1kxztP3qAsuQBLrkQcsM2bMELeTyq8c7Dz7gJqXK63W",
  "key22": "95EPSM7u5DpniLgagPuBWw6L1zu2S67XdvHj3h7Z46CrBVyAC7sSQLE6LPi1jLw6DChRTmSReVteQxGb43Shr66",
  "key23": "2qrd8LEvp1uq6wiiEsAFGxSDZB8vAh6skXvZVSvVWJJffjEgMPQygBrYne7CsMbBKNPKkhLwTfcpC3HpqTmKNYfi",
  "key24": "iPXvEALK6dySCWPp7WGT79LWvQVwUMBXEvpU7KbrVTcwJex45EXBY9aK5EyJGJLdxBYPDMQq9DJAcqSsovaZwRK",
  "key25": "2AYmkGdKN8PowbQththwkdJL6ah4thRV74xPCUe2pCCR7UUecQkvDXevdnjcfRrtx9VMZDKvwbwKaipjUx1JdFQ2",
  "key26": "3vJfHgbkSeUkyHtsfXq1nPAb8GgdZQP1wHRMXi3qW8E5F1kBcuVBJBr2FP4DhXHaR1VqnQyUp2gzVLP34F6VfBaX",
  "key27": "4Xdok7Qhgtm6QNh6YpT8QwNQstJXGZDzgN3ta7KFkibczYFKgfwnPPxCTVPFyMxsJgCCeyajbpXD3gJEZ61MzG1c",
  "key28": "n3NwVifiwZhPv7xKzQBaDspu4nYT93s4ZurHzJraxZJW5rmS678UbW6ELhoW3AsuoRpnH235tNW1qigCwkffHyW",
  "key29": "4v4GSvnREPPex9qk3qvcqziT1xJEjywzjnmi2wZd8yuZUAPwfS9jSn16AAYtgSN7LEZ3UzvhNFYEtsZAdZFbt73H",
  "key30": "677D8NpsoXVBdouA1odNXy1EjXcHUf1FgZinozTBBTaib8iHvENyty36e7h5t2asUCasA2JsJUPYo1qa8y1hrB7L",
  "key31": "5NV45tP2YzXGGmXFPPABh4DLEkRBNVmXsoagazUhCYjpDQKr478A41ht5dcoUGrXaPrzVUarCkW1fZx3pZ8q448H",
  "key32": "yb5au1ugHfBDje3jf6nSWr53QLY7h4QssK8UUTB8mWiFK5buaBTj5Mn4axJLv6s7dYBS3wafpcd4DDeYLAhm9GF",
  "key33": "59SjQMYmW7rCyhVBvmiRFVaG6yACzfpfXUAKy9JvoAsrsa2rejZqpwHbtBq23EuNVxHmfNJcu5pGdABVu2wH96u2"
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
