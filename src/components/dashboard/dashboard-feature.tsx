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
    "nWNSLBgjaKQhGvF35tjp5srvcGQZphuhXk4Ps24UNWNgx1ueU4AYiDrAxvCFZov266n7eDbeg1q3FKdp4NdgL7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TJGbPoZ2FnamSBJaT8sxADFA8QZ8PBKAH5Nsktq5YdAkwjyHJH1Bpc8NJ5hSGghqpq3Lsrs9yzE3DQXS6Zo1MfB",
  "key1": "3xUsxNSanVhGrmqQTT3wQVzKCWaAQoCzcVdBoqtQVg5P5sRvfF7gjTrFT2ZGEu9jebGC2dkJ5Vnidnp1hwabLPXh",
  "key2": "3RRNkBV628WvUm6HtVGAv6TfMQUTeHnBm3EAX67ZciTpDP6QCDHTzNHkcogrqKBWthhFCQ5yMhdwsPzivCkCReJm",
  "key3": "65cPHYdG8VN66hhwXop4jQ6NTikPA1FyYh7GTJDNcPucwseHctbv3x57sUk6F93EM5SzVnfkAXo28nCxxHCsnsjL",
  "key4": "2CKJ4gwsKkyfZ1rcTG4fLm8ZfYHPbuddpM51TYk3bsfXRCoAaBYH3w1NP2k4UNRreP2bHscebM9Y6QDw5h6VdFhg",
  "key5": "4sQBsApfHyN3krQEPv4LkXpVW3fiCkBnFsFkTgHNdpqxEG91gTAm2nfSu863LuhsqjHKBBWJqppZF5gBnpyzwYvH",
  "key6": "44wRaWYTH5S3yt6gtenQu1AN69CtMN8XiDW1w772YDrkXQaDjXicexVYWesVKEkkxJbfNtGJcpXoENvXPQ9gT9J4",
  "key7": "4jRPTjt4SxwdS7nEptpbXMgMGtLsFhWcdyqEzNRMnCz9MwHcHiPPmiqwpDCWiWCQFa5A61ykk5ineNgj3sXpJBK4",
  "key8": "5Wdrep7aNry4Czji4y2qwNng28HNzQnUR8EetUJ3LvEkp1fcKMsvW8RgAnmSTgSAWu3gnAgNm4twym7jAVAJb1a7",
  "key9": "3RTRdKZr4NRx7jRAfPmWFHGznJez8xSaATT8mhUTta8295FDAf5ARgpbaHh1uyZSwufWiMfm9M8VG81V38ucaEbp",
  "key10": "c8M5PQWANx41hhjND6gg6n5LmHasDEEsDjRMtepS23ycX8y7McbfSPVwHg1hzRYGuzwWca5LfQuLFF25jt8iZi4",
  "key11": "4sy3bTQAyd6qrBxupEsbnEBPLgdwdRDmYaWDnwAYDTqbBZUaV5mtGSk4DyDC7zKDzVGxZy7ogVFRQdhSYZfVG2QS",
  "key12": "tvezCG7VAUNE4QpX3S5pM32p4Mwga9Pb76w5jkv2Um6kVRNZZsJL8Sr1Po6Yvy1Ax6A7ddVhdmojcgowEtoGqa3",
  "key13": "4vDuEcBfbZv1huiBAZVBvuoea4S82PZhBMZ4CQsNDgJH45BEeifz8xyVe6ESGSpgnWtsHA6i4C4idUZKZWtZLRRK",
  "key14": "23L98HGS8zg5KUqMnnHVxQZQc49Bo5h62SAnexd7g7P2svRt8f7v4fo4i7HzcpuszDtDdyaJijfbQRNXVENBunFp",
  "key15": "2dFcajgQP3eNv6rLdkHMqas3RTyUwk72RsWfNxj4ZUUgiGNrp1x4nftCHtxwxXUovWEvcDLBUyC4naRpNn5gKNRH",
  "key16": "494cbJagY5TYzvjetbUVHMF8XMxK5vLuEqGtTTXtz4sKiLyHFVVHR2aRit9qLea7rsXDRLEksJ6t3UN62Vbg5LsM",
  "key17": "5zusJfZC4NAAnyeSB5wsZXENHch97amNuutnMuZQK7Hzjst8B55t9STHk7dFLaD9opW4pCiPBmnSiwmy3iFdYWJx",
  "key18": "nyHA7HsX52vcZwvn9XsvGBY7sD4wtGXEWLpbBKkxgmMgLizTGFWRwDEyBMHboP3w5RoqHUsuRmzYsiavki8Lx5s",
  "key19": "3cTEgZ8b5QZeM9HjB3RxC9j5hsVqJuR899ioKPmgq9y3RYFVFeSEcBN9aEEzKxmG6ktVBHAhDEpVXoyuWnnx4yEC",
  "key20": "2dxK58RstGBT1ombq1hZ2thKaWE2QR9anCHPLL2BtawLKQUmGcczYnCnfJ9nikxiY8mJ7rS32JmnPEHT7tfAogjz",
  "key21": "395HgaRwwTDeR2aCNonu47PUNkzfH6NwqcNLtheQj3Vy9JN55KMTUdm4e3xXA6KDvL4mriB6r6gpySZbzgA5mZML",
  "key22": "QjeAb3PyBTLDUBnAfcUHxdPSSwTN1uHh7HcHLY65jhZU2e3fW1EkbSUk52aYguoHYcXAZhzcW8xBo3woniie9Ha",
  "key23": "4BVBhp5ZWKVjWpiB1qWeSf2BDeGY4YXuZioP6uCkV6C4D6ojD9cefRgTBg4qZvUuRK3wiSsxjSeDPSSsepexSSrK",
  "key24": "H7nYH8B64ZHFgkAypmHr8QobNQqSNzuN3QCVT24NzQnCCuBr51EQ1PFExeZck7uCUC46Lte6PhHhdXb3TUskyhb",
  "key25": "56sH37QMWMjqvjKHuQqFbxKVtJ3C5PhRNxUVK5bHgXk464YZUKw7uATQzrzaCFCB3UtHbq4kNYitGcwWjzoRdXzU",
  "key26": "4G3RhPmEEvD4uaFRPq3w1Vsuaj1XXM1i5H5ojgWoxeEJjn5g9zKjuXF7VQb3FBHKUXQdofzSdo8n12N2BuSpfMFG",
  "key27": "2csFvLn3AiKqwTLjv8Ys7wBBv8crAiEn6jMdmUzfHiM9NZjSZR5ooRfJz9AnFqyf14AmxVgrLY4tdcZQMt7j5888",
  "key28": "4cbVVDp5F7zD7AxCWFfHYf8wjLqFtfyNUJhBRfezT7MQNBYyYa1tW13D1bp5eXNGpB4tcvxpbF2zWfn6n4YHiRZG",
  "key29": "2n6Zb5HXi9hApaHGqKCqcLR2ydggwMYW8hMz546U4awdqUZSqahPH5Tsa8wc3p9RyZrGPmpTwLcYV3ZDDF5niDRj",
  "key30": "3B2X4UMsnforNeDjShkaiGEcjgd2uSgR5HXiqjbUibBZm3v5jdbvbBVF9yiewvVaRhFpMkwregVGbf3z2T6bwimk",
  "key31": "5QkhHbziPoFy9Uyds55xbWw9hNjQ4t4dgaHEgrSTXMktbK6dfC5T2N1w7GSm2sLyoWVReMhBWVvR4R7WKK7bQL6d"
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
