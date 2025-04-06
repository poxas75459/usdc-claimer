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
    "3wpK5jq7LRZ6npu1rqmJwtZosGERivkCeCMVqphn6wZwTk5fGV56dHRADtWW1pcR7fws3iXmnMBk3b55LdnYqdki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "537C5QmNcfTsn41ajnfUpWWgKAFsDFU5KuKb31JcRRmnE8Mg6jFaPJdWajLsC495rFjFHcZsX9oQyhU29cpM5zD4",
  "key1": "5DrMR1dXviHSj4M9ZL2k24HrmUATR6UiJkm2Dn7ESECd19jXFEwcVxTUDFZMeShm8ussm1C17fXhB1iq3ALtZFwr",
  "key2": "3EDmt4C82HLKnwCBzRugCdc8epsK68u2iFbBVHQYg1WLPRKoKJuZWiJ8pcxP6wbQfgwo56hJYVb6E2mfA9FK2Xrt",
  "key3": "5FF8jrPX5j5wKp59BogLVT3upFwgLDmpJ5mbfwGorFYKBXNELgGhvMqMucQy3hFAKxzxup4vpvFjNEMT2UkG42Lr",
  "key4": "2V3w9TsUfSz2XGBSiUULWiTJm2fzdFPuarnS6KajD4sndFjYcTLo7XHDVvD4cpW2cmjscjSQ23EgXK6XFkFHh9oy",
  "key5": "3rYmyaDHhWcT4fCLNwmVA49u4mEG6asFx5r91JniQUoVgjuLHm8jv3N45zgWdPwzobyopegJvgp7ZcehnaH7gJwN",
  "key6": "4vnmEAnYX479qkr75GQFyySShZFUg6HctHq6n1a9nqGoUejSmfPA4cSQVHxH54yQjYXpWWE5J8vxibJBy5W7YhmD",
  "key7": "2Lz4u2RxBJKf5ESCaiGaRjghQRmpZgyP8R4axg5453jJrgxJBXroBmKyHDf3Kpb2SmBcDRS794ixS5Cbgf45Q8Kj",
  "key8": "5FaoGKwQF1fidz9xD5uZ76UuF8Js2sueNYqpGSf3jkRkQZXSRbMRpXVCSSxGJPp3SoDFcKQHs3UqLejqQBFcg87k",
  "key9": "246uQHePJK6irWkqDsg6e669ep71jMGuV9SMgjoPEwA8u9Lyb88TNnXKYBQsVNn8RqXjGDCYH4tUUpzkjqxj15Kg",
  "key10": "5o5uZwtefM7zmx1sKVLja3eYRxmmmWezXKCX3MdSVeGPeYaJFhJXzAAyYVimpnrvtz1JFR9bHmUmRY7TKCqAmzD5",
  "key11": "4Ho8scNCmLanTJD2NogiWfbHscZ7V14ggxqZtSdtD852KiCtGDZceBk9HixFNGXe58M4NneUTJbC29w2m9uAgfU8",
  "key12": "2A2SZbYw8YWrcobsP9697TS25gbTSPC7BLM1fW38X9VsYHsnucdW9D8CUaNy8dQqQyZybwLmCKJNzGWs1VDcvGLb",
  "key13": "3QJ7d6yPmwve1pFWb3to4E3At6cyahQobZkLDX6XRBDJVJ5VU27qBYN9ky5FBSa8XvXV33zuheQJ3VBrhjV6Fzyq",
  "key14": "3ACSufMtDmkiSwyLbVcYFmmUHC9cNJTYo9zG3CY5k7qf37eLVh1d5B1isRpAcrdqTP9bcj8QyajqKactpTtBBPyM",
  "key15": "4tUsJZ2GyMot9guFGfX9QryTYDQvz1RMhx9S2LKy8mvkudNUWmWbxwjgMRfzRLCfAMwAv45Uyu2ZEPiExnVccEWr",
  "key16": "5RXi5kRGb6QVBPVSeRjWUZL7D9c43wEak4W5qymaZvUG3fN7x2qXcu7LvzrjiJcnUwNJnXcduM67RdK7vjmr1Xw2",
  "key17": "4D7YQWhKY41KVmHoSNNUkP35VTBbiaK2peyhVpvMrU2cLAdGNeuqwtbz4V5bu9RWQ2kgV9XQEudaA13W6hGUPhgU",
  "key18": "5PDCghWKVbJFNMpbB7mdiSDZuz4BxsTQcLuTcPwHpfqpYs6X7ifK6LkJoLL8vw978C8ARn2JmAaCTcC87SoQ2Qeb",
  "key19": "3AuHguKdtVbq6pLYWDomTarPuL6mnQbH4knH6u6MS6A5ANL9n6AZGxNv4Z9hJuCbLYTcbV2SxWpJTWZkqgDJHwF",
  "key20": "22KJtxYKyCF64rPWsujqRNrfmBFnLksxwuUghwQiAVzt4FYtofdggSACbHetKo45TPLsJff3jVq7jNqY6kNatcT5",
  "key21": "zUzDVQ2CwARxN1Kaf6uct3Q3JUVYajQXUgxusNFDVYzuQ4YWsmn3T6EQQqTX5CqV5Qkkvs6qrwv8mpM2eULGd1B",
  "key22": "ccSLKWKoHzTnp2esgjAbxZ3VnTZePtWrVUB6PxDzMNJ6D9bi8iZXFkN7T8P5a81PyVmNX4L5H7QrhsuPwav81up",
  "key23": "2TbWHd2TALk61YnQYCRtA5EG6VBZctR9RbFUrfyXXYK88tYKNZzYipFQK8wLNNJjHB98Ed6U9RD6hwfF7JN1qr6i",
  "key24": "2Q1KWg7RMqutTFHNjyqRDJAGePN1QahMvoSHBYs4HtVteWPVvjMEYBDozhXsQS3Z24RmbFDtyd7Rc4oCHmZjGa6n",
  "key25": "4Tjvngfo87hkxGLpekqvZg8iyY9PWfRT74DhRsMibzeUaLAQodSAkHNnr67AFWGFJAn3w7QqpYy76xJFPKGU7ykh",
  "key26": "5vg8VvAfDXTVREGiyw9RJDvaoF5VaAFfBYCwNTV9Px9EG88hxUxPg8bxnnw4owLzSpZsUrbiW7ota9e1qCZUmtS5",
  "key27": "3YFrUrxnCe3TEi3epjzD5yQ5DRY31Mearn3E9F1ixitfy54mAEbJ2o1tVknYorGJbzkuzjfxP2T9zu61tQ2up67C",
  "key28": "41ZosG1eiACuHiiogPpjBViiiWc6XxrMNnJT8p9cceGCd3ffiNsVmqfAV5toh5dQ8kgfiXdY1MPSQe3fLMrSf9Rr",
  "key29": "4HcwKJuRbTuacWKyMGhrJmh6GFRw5pDLzb1nhzSHEjJuxjvUYgzhRX5vhb9KpGJzJhfEJiC6F5AEkFvU1NtRsVLJ",
  "key30": "4upkLaTy9QAzFptb3oTm7MYKJWEYH9PgchnmXZPnmjrPs4zsrP8AJauV2XTjeHEvoxGMUc3JGURNuJTixohNYY7p",
  "key31": "fV1SmM8pMjzqnUbNbmkFUkpSPn8wAhWZVQCY2FgPb9qHaPKMVQ3WAXnKPDeK9gGkURxk8CAsAnHxPHDRCVKHL5f",
  "key32": "icyGBuRT7h3wNyWfmmaYvNkx7MkvheqmBar3U8jonPhjNpz8Qh1yX6ctKsRF2YWSkgrzLyd4YewmvguNKxePUNW",
  "key33": "5fJPxBv5ZJP2kv3rFPEKLLYSciEBkfppG4xq381ykMHSA6DmByAm8TTiZVwcZcq5RMwzd4xNfKkpmVkWZVDDws2G",
  "key34": "MvC2kW3S7bhcGtLtE1yisWsHkPR3krcBMGUrFZHcWunyoWrdEdNEiaJsZFZjg2gwCW7GY5sb625KuEsNY5kYN3S",
  "key35": "2EdvU8E5cg7eDxBsm9YcQnmmCjs6suhok59bnkEyt1CuPu9zp5Ss3zv2g4cKKdMTq64NSj48LC6v8JWzNrUsWRE5",
  "key36": "tRTHMocY6PfTzaG5kVfjYk69wTn9kkFeUA6yqsiWxKQTgvTveEWAAx8hQHhipZ7m8ypEfqAhsD8ZGSeT7GzEvjt",
  "key37": "4pTfBaX34FPogYPE39oe1aaZTyuN4pcCcHmE9ykJ2D6KiPBTMhDtrenLk19ZwTUMMKjJ22XiYtHuX2jXFjEGWJ4f",
  "key38": "2g9GexKGWKJeUzQkAToAP3mKEbHUUwQiVr9Xe4euDVnjBLPS3HfPvyxwpCSYjRXpjyDFnQmay9SDa3FnL2bWELKZ",
  "key39": "3HbYtBs56uXEsXZCfT4VBh59fgR81GNpKvmgc9Rbox2kGHNmQxteR7DbztwCMmnp6zHPNMqDvwsNtAbRPUA7DtHj",
  "key40": "KvtJeud5sW7eNQAtk8n7uS8vUgZaWFfWbi6Q6bDE3WoT8GWNPAT7E1UiarBrLojtkhY3EmAYgPyJkdHj2sp3ist",
  "key41": "ZB3PVVHGVjS7hxS9BbVPn9CPBXCx5tBLBp53w6bpqSEbNhiiKNiyfHigiHDBCFcc7MGk6PMrQCCT9eUHJ2pCVnD",
  "key42": "2X5eUsDEHs4qd3TBm75zbxN93JEmipm1GKZzFvaTHJ1kumPpYPMgNhvPQYKKY5o6LV13rCWHRzYWkjRA4g17ZFpH",
  "key43": "4J31atRoFvUwXGPKzKEGvzuYfwYZ57NFWzsWPpYALErQhkdtHumMevVuTBFtdvsru6MRtbRHi5MvkAphiBSPpweD",
  "key44": "2a5W6KEQDMXfreKTG65DNSn6gQ5x32Je7UT9wWT1d5j7fMjJwFzF6sa4sZ9h7TcPG2GMuvXZL5ViWg4MNsrmbaR8",
  "key45": "2Wrf8Ecsh3EShioWH3MeCsNmHCAJkmCj7LRTyLhjJGD5jdw2mUmsuqJvCBR8XLn5iNc7kCx1qW4xstWamDZosZpv",
  "key46": "2Z9iKycsWyo57KxjNxGB7yuY7299YxWcG2PCH3pAEzEVWsG7nAMchR5ENrU3rzbpQk6pEtqLCoYikaaDTeEr6GHN"
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
