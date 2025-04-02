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
    "3T4Ej5BJ7Hh7uh9QkCJccPiT77B8McYwVHhsixMGj8Gpe4GCZKaMXD6cWGjSSmVM2ecLLDKUUCsUdhYxzHKCCPZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e1JnoTUBZTgsRxMx7McwG6SaFAuRZQfnfM6dR72t44h9noQUJZ3jPkUhkB9XXuPontETDFZTq4x3szxFXgGJQ3z",
  "key1": "U2iQD4twVbqpyg8j313xqUexdSXDwM6q2bpSiL2jhgk71q7J6hf9GLTf1iHNV1PpnMU8yQNM2fvBbv1RiXd4uGj",
  "key2": "4mCetJe8nktzr9jYHDeqLYCAvciJTuzr4bh9fEtG7BWpHY3Vu1e8tCYdebn5e9iF74Kmszn2m7xw8XykJT7wtRpn",
  "key3": "2QuuyqcfET9YjSTLrPCaLvRRCnsnerXfhY4yNQwTgGfa13piAoqj4ttrKNYsnLmKgPvdQKX3jCd84gYQKT2fJxpt",
  "key4": "2i4LeGRArRWZAnN5cHY5zfR563SSP9Fveo42HQU5J6RQhntp54jr7SSXpQxv3ZR5p8sZJxz7MtD6j8j1CpQMVKGd",
  "key5": "2ZWg2aY7A3zSD4EySbiGoAoLyAywsk9NGhVhBAJdMiTtw1QcQsKmTZrNXYTLACKoGfVuuMzK1m5k1iEVb52s8NHT",
  "key6": "4dPypBYiixKEF4QkPEUJ1pAKEUu5KiBNbyBJXqXX4RGQKAPspNv5xY8qKVRBMKGchD4vzGKKVUFpZ3ME6ZApoyik",
  "key7": "3vKk1rrEL4AeggP1RzY16qdesLHd1cydEEoaf143M96XgAXQGsAz6TNxTe5BjSey5AUgSgZdLA76mUxcfkAua7XX",
  "key8": "2nQX1rXLruM48zy6P9iWmjnF3LgXinxc5qvgZQJzMbsxTjcC8fajJrvqLVqPhJjVo2jCWgUmErQJgk83sZt7odKd",
  "key9": "2gQ2ncZS8EVAphRWL3GeWFqUVm7fw3nWGgnjHCAgh22UGCpDF7NKyKx5vRngV9YqM4pcAmGv8xqFZdfSR6YVyM5D",
  "key10": "5nBineZDUz6KV8ED9S6qibaoPsH3PtiptAmJqRm6KJiJknRwPgE7aqLYF4BHxhnu5hyeA1UyXg8iAKd6cvXUTayK",
  "key11": "4X5rvrEt4gPYVPvL5gpFo1BucVU32d9fSr6Svf2de8xVAjmP1iVBc1UFSXNVwKng8eP4F7ig8XC6kDDfsSabVVjA",
  "key12": "2Xdt4SGnTz7ZyweRRSaDyH8g1xfiB716KTMoBg2bAZFrg3y8oRGuY5nDG6ryt8uuC7sKz9vzab5rdmFyvZ6eg3XL",
  "key13": "3bmTQQnkkMAAzuGrrwZJGmiNVfuJR8oesXvfAuftgqLJWY2XzJWQUjYdDuNno8eK8ABDdcGcBbbJrehdXBUyhPfw",
  "key14": "21CgiSYsC2H4qGzRUaGydTxCB9UtseYkJELt7ZoDd4d7KXbCq4KyLKidD9x3FHDwYMC38DVFnZ7oG9SyLkuzyBux",
  "key15": "K4nnUQBoZ7Hynmf2UVswUBzY9xEWK5igtcsQQUnKLt8PYyY8tUCLKxUSne3ZR3nDeypni6WcCNHwCCTiQuCYSDM",
  "key16": "3NiYSXsGusU7DUjcVNKbMQnSbb3Q6vHKavWA2oGDmEAh8g3Wt3KZAwTwthj1YbaNS7vGLgTmxYZVpHRgYFBfujPc",
  "key17": "3Hq7sJpKTkMLuxwCyp4eReDsmB5Zh8GcvTtMEd9NjYs2wNDHLtM2quEVo1QkiLk1k2XKQeNgD1FffZ5aiS7s1zUp",
  "key18": "2i31jSmRRB8BwAaT4DrF9BWFf6bHRantC6UN4VFq37zsS3HkWKsVnT3AgmjirW71SNiQGdtPVmHmGqZHMveE7BSC",
  "key19": "8XN6bk7orQ3WYZCYkejLy84rqGDF8nRkvRtPmGqk7CSALuibEgNtWs3k1cfmzg4kTg1AERd8rNSeRtT2e1wWbWt",
  "key20": "2rZDDWuFANHyA3mYFEoFmTGerVTTuwfHFhjpDNiprKJJMSPb1zVKitjfCgcETczmgjaumAn72KsgCySagepzqDuH",
  "key21": "2Rc2WcBnnUUtGTVuJdFkUFCRxKGzAhybAUUbeY6icX4XftK1TPRtRtqwvrf76dFAFrsPtk4tTwToEUGGX8Kahhuz",
  "key22": "4nT5c8H7KPC468f1MsiXcVWmxDkNdUFGpHcHqpDcFcLvpvy16RUxd5AqEqQJ5W2GuRwPaUj4WhoaGnsNM4U2gUvX",
  "key23": "5PunrCeHt3XKwBao9BWEAB1XL8MZ9xQDXjmqTze1NQNU3Bnip4pQyqW2H7oJKjRGMZb2Xo7FsGh7nbr36R5C33Xk",
  "key24": "4JFc6zQUKutCpr9PptGNdho8VNNFwXcHn3iKQEmBe85wPxe25nNtZMazxybjLkR68L2SbreBVJUF7rEXCx4YJAL7",
  "key25": "3dvRUkaL9L5wwLF8TrP8BRg9U8HkGRHZr6Akx8Bh5Fk5Cr19A7E3LofMwTuDQxp4P8KKfeettftWMyws8HFJ4kdg",
  "key26": "3anay56thhQrhCH4eYMrGPJuoCPrWLCZMRbERTAMgZBkyWJhSvSPqjc3MDQMLGbEwVSKLRcgGPmc7NWwvRexsekz",
  "key27": "5ow66krLVfYPTyvhYvyTCetCYdZEanVNYfyJMEQwUEdPz2McVFRCZaWb2MtUCw5e3aNWRHbehkvrfSQ7ZszJBjC9",
  "key28": "37fbYQbpw1qjLHLLg1GTk21sxKYVZZG5N9bNU5VYwq8K6UeWeXLm61Vg3XdToPHnhtt7Tk5wyVApogVYbHUUXHC",
  "key29": "3GKGYULdE5ztk4eZnhqjxGabp6HN5YzU9DeobP9F6DxZbZMaGZtoXtw8XxPJNzDm1iyK44o6fP5JKfJAn2DgMPR9",
  "key30": "CkoB8ENvbi33oYjr2Usq6vBfBrYc6cyEgAgo4ikPL2WvwFdRHMViMDqggahYs31aGJHRyCfzS9VBFdEiqam8QNx",
  "key31": "28nqNCPL5u8zpvK2M7LbkXoVKULEYGZfj2qmLYkFzUTRYqN3w2CB1zApkVZ8kXm4oJtD2w3jhyN3Jrhw4W5hKfJx",
  "key32": "3zbtrTiesBUE3tQfgK5Wu6TJw5EJEmrgRtp5kQz6BAp3zE5K452S2uuTFx66E3k4m35WBRSk6L5jdocsYGFLwgjV",
  "key33": "Rw47cB2BtdQskpU8Tyhm1fCeZsmCzjbNNkrSZUZWVQQKVwJyWecP1DGc9dLDYKhLjHynKbDjVj9WNh1x7ea2Pr2",
  "key34": "4eUNa3Pw56TbjNDHT5hSRvkrC3xks6Z31nNtKoCLpQzKfjUYKEa7iExzYJBPaf7JuWMqN3REqFKQxoKbnpqXxH7Z",
  "key35": "4ygRYfPKb3DuQdXdqn6Fe7LE9dwz9Y3pF7jWoHSgsf3ogQ7J2oUDY75S4yPVT4Qz1e6CkEGdDNi8pBJeYnvaGWgi",
  "key36": "639NGtjJfANSLAirv3SC2KuoSdAiz2APF1JBeJ66qk1BhXW19YG8JF4F2q8HWo4YS76ondSLMMK2fCv9bA9Q89UB",
  "key37": "3T8LCrUeEWwovsgXVctSfg1628ge1G8DsFrRkn9HK1rGHiUfT7veain7hKDv2ACeaPVYpkBRAr1udC9BtRYT7F7n",
  "key38": "3GdCP4fmw6p8H2eoAqBAiedfBaWhJYe8RppgQWN7JpbHRyq1uJbmsmpNaKakpr15gU54znZHksB5M4RauqoDCwjW",
  "key39": "GZCRAuCE591rwrJtExD5ye9NmpC57w4YbPYFZE7m8fw8YRAB5ZnPxuj1vDKTM9JYe4HVmFTmjPAgmB2zVKGEUDx",
  "key40": "5V568VwuvEwJbaDCtau2MWtXYcFK8gmtvdc5L5MLhAukP5wQT58tzGHmZqiGCc3M17tL3eg6vJUWYfFLgHojnmnp",
  "key41": "4J4MsQoL81ho5F3xQgDgtudhHLi7XyBpo7HSo7sYtiovz57uCNaFhJXrkVyTeqCsZEqFx2c9qQesTppkvxQz92mZ",
  "key42": "a3PNejYDcCcak3gxgAXTKuDBKu9EBzoyRU5ei3RQewKRNZUxYmBxKdebUbNbrZX6UFmW8dB7orv4PvS6jyAEAcv",
  "key43": "2jLjF2vKjZ2pagYeT464hDZpxS8C9VsKRa78iX8g1FHiTMwqfSotHrLHETv331fXJgvsoqWMbQJ9QykSKGcMwrFT",
  "key44": "3XM764EAg5NY5sWbLPcKJuTCTD74Ueu6bFeJJxXNVkPMPCnbvks4E9jZnWPTuyXamNHvDbHrU5d32bF8Yb72ss4T",
  "key45": "5TyBA36dpraXX7YiHxb5zYqwRCVAi9nLbvqjEpS948o2viaWZCBkG1aph6QvstgbWutDKRaVG3VCw8GcNbXmCjoH",
  "key46": "2J5vBo2TWjZGDpTcMrfdKqJtUkdASSQHhEcEm4aXFaqoj2w7k6cuk4TtkBMUyMES49c87Qtbd8sKgnXficNkYZdd",
  "key47": "2PHBbsr9dKH5CoQ7cB18TFqyA4XeArjW3SEhoes5FUbofvWire6s1Dpa5eH1rR9ZeUYuEbmjzCSSokiT1A27nYPB",
  "key48": "2pkaTBGfDsq1kKxeFYceyq7opLwSEBBdYpcd5FQR1xkEhLG9nkTKuZnf3DBD7aPzKcMztvaM6BbivDn9XtyJmshH"
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
