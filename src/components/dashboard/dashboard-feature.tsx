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
    "2zwrseR23yurMJg1tLaFzD5ox47CdYm6wcKzRwqJP3a1642nnWQF2aUbhZt6h8ZhxUHncGqQQXypejj2ngdG3Mz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rTHZJgxKySUcHKaAy38kU6jZGNrMCKdX67Mctm2PCQt9PuNGYg8FAwKorVVuZ1FSBoeAgAALt1wPtUCashQ8P8x",
  "key1": "4QgTcPgaqUTwP7ccdk8ridtG7v9fvEeeaYRehzUwQpUzqZ7zJmbaaU3niyNhRpc7nzZh2b95ocNAiLB5JkZDoi5v",
  "key2": "4VjMJnokgRPkDHJ7fnrDXeiEEpbhpo6MEi8kh3xEX3jeWb6CPNMxj9TJ8xhpRTAVkpAKVPQSGFjkpvz9MnpgSrd6",
  "key3": "KFtP3EKtL7aT6r4HryRbbuPMz8JckvK51XKdKBcMnE33Smtv53L78D6oXmzkqDxhJzGwKfX3ARhkSLRaQihV4YG",
  "key4": "4GkzBYbWVQKS6tyGqmhWXdhCFD9ArBjkMktkGtniY1E3QWKyFob4H3A7LTTP15efJEmoR5PZDo3Ee9nrjk2Gr876",
  "key5": "26xoXdqZR4p7a68o6LSLveDWy5PMxHW4hjNBpnnJjDXH4yxL63RRUywkep2RZkr19PFrkcxCZfhax9G1sMd2AjAM",
  "key6": "2c9inQkLJPgrDb5R9L5Y62KXSs7pj3Ec89gs768V7sNxYE2iyQoP6We8ZiZxcg7TRK3CPNqB5roTpaBJLhj2s29N",
  "key7": "2dLnCUs7YGEUtnWdTqBu8fnRKuitLgD5BXRudX9MvrPxRp68jv3G4cqc8ghycFhF9hLGNMZt1NiFuSLZTLbU2b1z",
  "key8": "3ZFJfN6aTrofWhUkzgaejgfoetzd78uFt6C7gNeqs65tS6o7D7T4Etd4koh7AnLaMwD2oaykfV85iDmeFjkme6pz",
  "key9": "4fKjCyPSpUpDL2EGsyZkKb13QvKkB9ZeUAmYoyTe7YoAWKHsApFuQA4h1ArZPqgftRHiHtFSsueDv3yh6skeoe36",
  "key10": "4h8kU5VrfcaXDeEgessQf2YpLWmtXtEqbvmDuE5nDiXqM6Ei5puzQJb4PG2eQtaV8AXCFQLX7eY4G1LNT8c8m5Vz",
  "key11": "4rWFtssFZExqgXazKuW7WjTCGVejbwfwfryKZYJ7rckUkH7RwRDwAY3qy3NVVnqzoe8vpScDzPuuhMEJZA1G3VSz",
  "key12": "4n47ZyUHdNeKYw5pc5mMj4xtFUEpdozzHMnCdHbV7qymHMmByVjH3xrWewD1w41U9Y99apoEBoGf8oUhbPrNSXPQ",
  "key13": "4ac3HEKehwVFeS9DgcKThZEpDe5F42PKiuN8HpnjAwLVpZMHBCtCLkWdBa1E4gykrgmEpwaR4eEm1h1V6JB3UVse",
  "key14": "2MRb4X6PDrKJGmAfCHrdx1jeY5bUaFTmTNvoZDHtYTjFanx34sg1eiC9dzjF6ajsvSpQzv8cLUcQ93NEiQs1doXr",
  "key15": "mdJQcTQ1Ufty8Y7ri4cRnxMairBXKiRBR2yyK1Doc6sYMtUiaeWSixL6CRY8wYAisCx9K6dPr54doFNHv5oCdex",
  "key16": "4CnzwwuwwWYsRPcGPGSTonKR3pHAjhxYvPdQUKfT7JpWQfxMWkQEHmQFRkZn79v28EC4zTmugzoL4HBLD7eA22TF",
  "key17": "ZFUaPhsmaAmwCErePhaBABvuXnQnCvM3ouFyT49NGweevAhRqpLJtNRkuk7bnn3ixWYbmFAXuNLGw41HkexhYyN",
  "key18": "jzr6ZejYsGcGQ5tP4VJSV9RhB6MzxLbikfEBhY5pDshMbDqdDEYyhjdgixaZuT1QwvhxReXoYovgAhLsLFgNKca",
  "key19": "4yGrXWnXdg9S72toHdGiaF4BKsuiuRqC6iM6GduC2eVr7FF7P2ppx4xevj9TYNh6UxzBgBpsGjTLoTmgWNPrDqLH",
  "key20": "MyxvYwN2jYuiEtGyFdkQ7yBbwq4icfSgK2dd3GCqca2nX7WfCPGZKN8x6JZF98WMZQuNN9qQj7xzZXak6G7LkfK",
  "key21": "4myh7nLCaApMaGReg26UDG8tfkHkYbyCMG6eJSwjjzzVNF1q7f8DNCmcsRk65T1T71qcPvYgxnfF99PZY51q611",
  "key22": "R51h9emMYt14qbYxTDuPaGyM5m2dwPqwch8PZBjjQrYb5vijiGBQHnvnZgTQVaD9Np8qKDCdmM7HAp6RYGbb9Zj",
  "key23": "59vyhBKDxiQFoCZTsBK5xC46Sc7Q7m9f1fZR34YvzpkZhZGvUeLgysbRLexNrxnfA6iPqJckwP69giZddiZWZvQS",
  "key24": "uYXFTbLa3uEfSwwN3Rh3YjY63M1kuXKEo1g9BaYPYu6H5nozh4cHzARND9teL1oaAeBE1zVxETi6KaqMqpmyK7T",
  "key25": "ZyLiNDtta56phqp8pCKr1AR3BkWAp9GVtniG8KXJYD4F1JuSHgdugougPKLWWpm5EhhRcBzv73BDPa3h3y2wLtv",
  "key26": "3utxnKcQ9hbhwLob3bYTD7BZvCWJiM5WtGRpVGRw6qmbv8XF3HzyPFimDF22uzkg5JhGUWsvNZWzR6jHk7iPjKcx",
  "key27": "4UzjUhHWjxZKoeMnx8NfS7deyUvKUimxUKsnewTaewF1AEV2B6AHtjxkn9DVp6hsn9jy3wrPZAxFhxCwvP36nys9",
  "key28": "677jr8bikSY4vXdeoC3sGugQAVrcFTvgYPndcWc3nN831h8Xr4wJXpjGGr2vuQXeAyFH4YAK1Ggocf9MeUV5LvnK",
  "key29": "ziCkVVFuLmJWq7qgXyknficaAimNF8yrw8pCvot488poDw5kMv3LrwpGyJ1T4QjXRsERBKUeuXAzQKVFR3g1Mkz",
  "key30": "33PA1TJrYdJf5nr2jDoNuX3UiyBKiWdPiT64fprqiU8qoKn9cc18tfgcBBywp3pxMZd6VeouXtSTWHRTqQy1fzsX",
  "key31": "2hTUiPZBVUJySh75YaKXVRckGf9nFtS468Q76Dr1zdWBAXiW3eX76WSPT4YZM6NEc1b68A5MD7rVzdEEfqranZ7c",
  "key32": "4ZMbNMmMU5HXLtbmxj9WpJwmfdj5jverRBFJ5gZHdzCV7UGD4NtnwTsZ7j1mj6ihcBSMK4rVhDMPSCLVkmhZgnDb",
  "key33": "2f4JbBKFmA4k8gu2pbSxoE26jaCXkS1Nimn5Br1o4fdxwCoKWWW5wqWK2u2AkYoHxuhNbsZHKtsWiDNKLxpaq38W",
  "key34": "5ekZhPT9YmWqr62sKpMbVW9Ui6hyXRLg2tr8aacFaa48RX4DCjT7iXcmxCbPCdXmhCCCngBPPqHci64RbAHT56EV",
  "key35": "4pxFEZmqU23fuvJfC1oZ9m6nV5fHevdt9cGuoScRQ4QGWUUSYWrVnibuGa5TGwPDS5XuGHBgVfC4rpbmyrHgwqfh",
  "key36": "4Gs2CrPTo5yu9TyajLkXDLtGPUft36mQB8EpV9t65dtKQV3FfaDL5RhM1MD2MHqtibDsD4vBqpkPZmTaVAnfCmkf",
  "key37": "26sDoxpamWPMHLDmBy8Gq4Vvn5CRqmn614Y2mqL1YGYC3dcCY2CKuXjtCNsHa5scHiRbZvui9rmbTvh2EY8sSsH1",
  "key38": "2zfrTzpJ9XgfoSA8qkgfoWSu1dsUV84GEuYrFqTboJyhXJ77iFcENeGBi34GtHqqkZdo75mZFmDhBjGbZdobSLks",
  "key39": "dYFJj1vDw3W8jwYXndhrm4CR8tuygWpPob4TpdDfG6J9nxW4nqXTsQ9Uh8iELm6YDAepkeqmUTUUGash9hWeqvQ",
  "key40": "FGJGtBZ3xrqirT3DUttgmhLNF7DMNtqJLvNFfKiVE7NiMX74F6NMWEsZcbJFuGHwmhkjiEnX4wW2maVMZZJXFv1",
  "key41": "3iREGrrRQnf8wYquB17CrBJv6HtYYVCn4bP5Ua5CRTL9WLRDoPA44eU756yBSju9FUFwiqpi6keVgtmpw7UB7Qa7"
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
