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
    "4JwN4KdTL5csvuGjGRaPATYfy6Dhbvay6tPAyAegVsqk5bBp5cBZoheew4HiQVvtyFBbwdEizcZ71wg2dLYHRC4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EjAAbAPiGXo8GHdKB6RuUySVbYCVgxG1RxPtp5D6Y1mfqMJEf7JMXjD2tRTFF41Rf9uLbLHrjL27wpStYPfgacY",
  "key1": "rv5FaYtYCjMQPaDTKj2y6ZinYPcHPEtPwJX7RU2fswoZMFDoA7sPi22nMHN2b6EyAPqBDdD4EKxCXT6NC3JP7jE",
  "key2": "3au2w1rAaTWX5GzAhgPknmTKh1SJjhktVXrweoFKPTA5bZi9L9uNCmsu9rUHzz8NGkvbkqX8XSa6wv3VWgD7mMa9",
  "key3": "3gzKaoeP3oWQ44f6MXwDjmTG4KyYBT5ZwYpaumvMNqQxs262CiQ8gJgvZtdaDAwgG8PwnHQCWsZi9xuv4vRq4MSK",
  "key4": "673BnBfHBGCNtNgzi8t26uKcpx1jtBVgiyPc1nhby7u8VAxVcoDKUUBSxGf17BYrtsjEYn7i2JhEAi2r5tcRi8ir",
  "key5": "RDVYtLZeNB1LzaJGdEAn9rNma9m78pApagytULjBJLPMb3oaeT7qqyEVjnFreLtgjZA1xmpFjhEzJQaQWQ9N3uc",
  "key6": "2WzTyFDRnVck1YtAiRJxZPNczF5Mz8a7MJz8HsJptUCLP3QauqN9YZD7C6ybD19iNnHrikdRJohLWPoWWRbd5d2t",
  "key7": "QRVFpGwGmqPEnbhK3VB4BofWKrN4SUrxAkFm2iScdQNQFV2RXjG36UgiizU95YqToXbfosVTAmvcYH9RhDLxey6",
  "key8": "2457XPRmCq2p4BChCp6AmFMrm68rVBqfSU6Wvc2rV9bM37nd9xLDeeWRYEYsnV7AzevzUDJSEccGUv8Zs59fHzym",
  "key9": "5G4dnZZoSVz1HjGcFHCWPU4tEuNLd45qiKE9WprWe3JMAfAaGfY6NXHyNQ5heXBhTXSTwdkwak3G91RVD2PEASpc",
  "key10": "EfXM2t71KjsL5ptWBBb3USNfBn3vj5DcF1KsF3a6wgfUatG175RehRyFtjeuVsWaYu8JM3qtFC96fcQob3P8K2i",
  "key11": "3cxqWuKVwZ9gTJCiz9Kz63TVPVVgxEpFU4eoehb8Xex8CBgFY8ndG8kETB9Ukvt74PgJujyztgLMU9zqaiAZ1NPQ",
  "key12": "3se9gG21u9cmropMU9myGA1vjnGBZZercR8CKuEYK7wxjyTqa9rrHz3Y1uy3th3oVkq6mp4f1D5onMUH4hhQUwcn",
  "key13": "5H7GM6CCfuAATp4oMHKVFgLNfWvsSdSfBd3NYXAx6vDhE8J8fvRShwv5XMQNzdQuRjBFjCpWpeQMWJVqu6thizNx",
  "key14": "5aCMRHvBWGE5ZWYNt9QFN8bHv3Qt4YvjkuVXud9AyPu7sJNJAecMhZMDseyf6onysZuTvZAommdZ3a3jmj6xdSfz",
  "key15": "5G3MABr5LaPH13Gn7425ciyuMZAU7USTZ6FGY3owjpSG21o7UCQtDFp1Do7N6hhJVRhHt7pXT36nQ5iKDeKmPQ2J",
  "key16": "SdDUYj9e5hE4YNWZX3BemFQyGN7HoVeU7gN3ph4BcEzqSrMHxDWSujNxVFwAEbmYt3v1SDngGbAbmKnTxa5Rn8y",
  "key17": "4PTg6Aso5bbAgcPf7bNoeyJrhR7tvZkbqWFbUjSsb5EnF37k7v9smKB4wGZED13uhLkzJKzYC7nmnzAg1J3K4vWx",
  "key18": "4RsZrzZbSmzqJZghPiEWKzvH99rFDM5ErjaMNwvoPHQEgbeVUf1GrDPfMUzQaH3kNLRAmt5oFjXajPrmQ49ph9BG",
  "key19": "hqR8CHG5WeBibQ9yFtNe4WvM7XQxwZpFsdwZnMa2PJMtNNg2j91d7Qo6Tt62aBWH8ctn8kVM5gKfjbZZ9wENLrt",
  "key20": "462HvLsZXsGyzVbkCjaDCvYdGYeaU3aPXPxKb79DVqj1SNCKCzbftvNFgpfrVy6rcmT7NDy8iKqzAUHJDYcz7oAU",
  "key21": "DwmFXBDmZbJ4MJKz1ujKXDxV3AenSX15zMVrgHjJDygvMMsx57Xz9C4RE14uq2YaF7ZjqJSj5J57W3Nhiu2MFpt",
  "key22": "662NGDZxPaqfGispDgyYLoGPPe1ew5pgEqrQy7FryPS9azESg7NagArXzBsBxvvF3KKxTs6FKWfEoa4wLoXNyuL4",
  "key23": "614YuM8UGkfbAjnLpNfTqac8cgVfVn6xdrNJE6hz69w23V3ZEPzxPawypCXY8tesund7nBHgKLpnL4LEYnS2pxyd",
  "key24": "4BD8dHjx8KGAGTRBR8NF8kD8iE59ANjqD3uyottTHqSMw4HVP5ccnBhRpknxSTNcdEpeky57hN9KafUbsa1yQF6k",
  "key25": "3PszHV7Mccicib7THuxPY2v8DonYwLjs497GnWfWzG8knR5vAv9xBdkfj3m2dvbk8KnW5h9n3f9ALJjZCF4hwuNj",
  "key26": "RW3sKZXfryJ6NDX64JQ1XNQcD1ijy9jyqApR8JLSHhjVnyZiVqRrWmUafxwHjfsfNLoSqmHX3LatMXBgv3LkQi8",
  "key27": "46oohcK2b3jY5vxCgQ4uE3dnvBUUukQPA5QpmbyBZHrAyXFaFbzRTV9sFDdeb2a2RE4EZgAcTBkA3TwoT9maXqek",
  "key28": "3zumkrcDeYiFBh9EfkoRAXNiK39BFxK73f76i15FTK2uy5AECkEiHSFYedNiMRUYKhpbA1DLJae9k5DUSFo2dV9Y",
  "key29": "2jVxwz2DEcMMdUUeq6GBryMXNEnZF4w2GzE7znaTnjhzpsiTjg1gXmJZDxfKArKwYuVRQNr7KYCHo1fsdjjQMb2a",
  "key30": "HRih2Ep3T6vGPGAEnMvXtJXRoGrmjgPLunKYPsyCg7t6xcK7xs75FoxFA4XmHjfgevBkiZn9LmZRy47j3218d2z",
  "key31": "3afBwUCRUTGLEqEJLhto2mhLKL6pXurn9jKFmKNQHATVJdMEFXiUtWtgjWHEWBHCjNRSTXKsiEQ5YUhWr2DnkBwu",
  "key32": "5v6wtrWM9fuDAZ32XVHr9xFdT8jQT7nRrRD9irfhc9ihDznLkhwPSTjFHtmC9hVjmaT1WJmJvvKh3FKZxSjbWiNZ",
  "key33": "65io7SWiZR9NVVLFsQ1mZeKrA8R1xnKngTG6EQmmUUeXoJGtbP61FFbbLS3xQnXpvdMvkVfMaoo1TP2hRhxhwC2v",
  "key34": "2CXSL17tDxuEsgEnmdJCNx8izqcfMYiALj6PJQSuBH5Mpx5PvBbvBmvpqBCQL2BSeq5u9eiKvrFDCNR9PPHQB4Ga",
  "key35": "3vUEpjzDGvgMk3tzgwL8tNm5cA78CLKmHMXViZ3XiT1WG6pdujudgWK9fJ2hB7mtgCuWBB8idN4cw33ikZKCkpS1",
  "key36": "5xMQPTZi9EBSMgPvWv6ZSEvw56aoQ2sBAJAqp4pZ6G3WAWKZRHJ1T49c6v181SHVsyMtEHNK4HA1FjfsoU1NUgGA",
  "key37": "5yBp8xA2KVMP5fMyWXSGXKbFzPTaH8Gcjskq6J2ka5dTEppJBPb6ZaDNmi59HKFhGPP6Exwh1VowaZCw4tZahZsX",
  "key38": "4w5fVgvwfcj4Kez5uFzVHQHz5ZFxT8ZarnfyYBzRBp8kbyoaKpcggyaaqEFFfmQ2GGQ2kjVpDcgB4dP2NFb8DDZ2",
  "key39": "5wyXVq1ZReyCCz3GsxWw2nogJnzgv3vE4FfqPYiQcpww9AuT3UPcfuUB6mmwnQpsAQeYhR4pNHgb7AV8gcGF5VCh",
  "key40": "4dm5Po8tro7Jd6cmBfkb64Kz9TmGtPTkhMYVbcqPJfo91dq4NYxsDLd9Vu4sWvuaJC4JfvNoUHTwiHqsApQwWB6E",
  "key41": "2HdCaW43f4rN2duk3TD6MdJGXQgwMz958tFeHATaGXTjHxu4xEF8AHEy5n4kKZHGo5m99C85LnmSrKWX3ArmeDVU",
  "key42": "4uYDd73YnRaAVqwv8uSg39KKPx58usTr2gX9MwfgAzgt98bSEWXeGVNJ3nreimhUNeQUqUbsjd5YXtPjwxCdfDNU",
  "key43": "4cxihv7p1FFXPKyk1pZxMbiPwiw6B1tABfkTVDAyxFTqgLvhKavXCo98HDBnPTZ6DHwrnWoUikHWCsmBkN7VQCpX",
  "key44": "5sWVehwbGYXi22kLHiVaR7aon9jTkYe3bsLKmYxkE7pq3H83fziQQgMsxrNa7ZzqcLZC5Ep1ronbPZRWsBzFfU1q",
  "key45": "3FKeLZZUF11tVUyMPJDKRS3tbokg35coFyqbvkQUzzqy6Q1VxBraAP5ATgTdoMNZb9ZWm5GiTpC1AHe41fjMtJSU",
  "key46": "3u6vUkDC8eY9yUyR2d6Hyc4WnydZJAUuigWzVq89EL3WVoBxbavLk5ASSdezg5MQdK6W7fRAxpm6RcDcqgxQqUrq",
  "key47": "5KuYL1rWgBSt1Da48NGJmcvB68U3pThWNtTr6FijUJdXzKgXLaKN3hEnrvCGYAjRgWV2BphELptxgr2icyLrDUiR"
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
