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
    "2EXYUTCNb9x99F38RHQPYmbef2j8AHszDfv6Zsr5yt8LGDYevBGrY4Ngj7GkHLjFfTkfTvz2n5nhQxjx1pJosND7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1SxG3Yz5616e8Br4zQFcUbd1TDt1XYcUDn4cNhmSrTnapPKttC8Xedpc9jBxc5HBYj2d58tTjmHXk7MPKJhnpRo",
  "key1": "3VTdEXinpGUVAyhwVsmHgACwSHgE9Q7g6GCBX3TfuKqvh1k9UZbz5gikLFFcqr3VhKu2VeTsQV4HTRcTwTLrUgJn",
  "key2": "27dJHcUa9hHRAsGc4t1wbEUZHQxLvCEUrBXngPtu2kw79mMyTwn98TcDJRu3PeJoHziEyoCjA9hMHeqLJtWPStVR",
  "key3": "2S9VF9Uef65AcpdzUSiu7b6WBhGvuLrCvcJBH9xKV7iWSzAP8S7wX2KZVxoD5H1meHPQjVQyUo8UVgcpxaHBoYLk",
  "key4": "617nUHCcY5jk4yi9szybh5q73db2GS8Zo1rN9oi7vHAZ1XHGxbQRUf7LZRREtodrFRPh3yiYMosdr38vdfvgL6eJ",
  "key5": "4GKEXCCqGRmxr7NXXf1fES6jEXvPyd1wahQ3Xb85UVDd9qFLoSg2kuqVKFUKLAppfLuKn63R8gow5ELmVVQX2k3F",
  "key6": "4q5w8D4EyjG2u6oThXzX6n9ZPD82cTDRQUD7xHmvLkyRmyUdgL2U5MGAL6sKfyXaP5VktEQ4Dxy67qvciYbcErz4",
  "key7": "5E38ZSbWYi3Fz2JSjRUrGD3DrGzGmZBeM7nNBSDbaW755KC7ebRuqrXuDoEXheCzHnXAwP8idH1PXR6opycnXL6j",
  "key8": "2qLXCXZmj3qTQ1kQCQiN7kdavJacioRhwUjwgnJjC13det8Y1Z691vfGYLFUap7Gtu6aNroGKpct8ZZGaCrHxgZR",
  "key9": "4hqyfKzcHT41axUhXidnGfSj9QVMhLBQHHqaVuM263QjfGe3jGz6Y2T3iBvfpSr7oHLGxiw2MVVS8jCt2nXRhdbT",
  "key10": "5dst3Fcdmnq7NqhCF2FoHJTtWCdTMLbEL9zhucNpKo5reMeQMLnoLBL87QBciozUqbfPeV1N5ifrmZumV2wsEEGr",
  "key11": "2Uh1ZTa9NnbWfeMnKZLMBYUMQXp1D1MtnojdEn8CiEPvEjGtmAHcTxjxh6FjayB3fuLbZVv6mLhgA5wz8oDKuFR7",
  "key12": "2mdKjphbTCo6UHsLYyiByvVDCtfkVxC6t6SUWFkyC1xiH45Yj7bvYaVpwDZNriFkuVZuC2ZjimT6346M2bRJisxh",
  "key13": "2CncX1NthudVBoL5MgRq24cX9eadEJ9MAo93WSAPTfB3FyTYeVsWgNHTXgSmB9UrnULQfbSeQZysY3B7w2pYzsFi",
  "key14": "2mvvUiUg1AfRTQptBXAJmpGaRANZ9oiGsfgePFP9ms1EbRFYWfMSW7KCdDVq1wNtRrMS35FDxcEyoHYfeLtJkdkn",
  "key15": "4r6PVcVNPRY4aaehwH8pL1RTFe6gRUQWrhvqWHBL4oUz8S3DrX3PyLUfa2LkzdNG4NAfXidVf4RcbmfS8k4jQFn8",
  "key16": "2nKUUnxCLxE4sZMYdzwuoiRPB7vj1uoEFaDfgNvtSot2i1CFVkHMMETYWR2PdqkMidzAVxMG2PPGjmGNgPVQF7jA",
  "key17": "2gpGLPjGfjUQ7DU5K4rdubCsDHEhEJzz8WQk13yihg1HNsQ7kwfafp4DKukYb9uykEVsKbUd5Xo3LzzAYWya6GUH",
  "key18": "21ofECYrhZbJ47u1J6VAqR1tA4qm1xn4HGqnCHpqQEJCKjnCTEaFt5NEpJQQN4zS6qR7qov5gb7riiGctdvuin7d",
  "key19": "27Ff8a217K7oFJVu6dQC8HhrQCXasTaEFDCBNCdKfPdxCpM91EWqEoshyMffGjNikqCGAq3zpg79KkXFeZyLPJ7z",
  "key20": "41TYLsUBMeFgVB4RcF1GJqocaGTiSE7D2R8YhR77iMwQexq2WXdMANDiBia1ZMqcANTffuxHiof6qFuNoMhiV99f",
  "key21": "2nGaTcZJDjvYRxVVcBxq2wiRxrcWyrgJZ9WDcn4M4Zr35ETbtur5UYaTdj1n95EX3AsQPQ5ymTuu18PrBGnuUFdT",
  "key22": "4kf5Co4r7BZ5nCSkYbQCeh6oaVfoFz7zy5hvS72WXEJHucEjc1dKTNqPFphQcw6QPrWu1revCDtb14zEbLdN6pcX",
  "key23": "3xuvTQ5Xboac6J6XW7SCDkXoExqRbGJtmpnmwPAVp7tGm86FtjtRzSnXhyu9qZ7F5rbBP8d4XseUSn8pmdZYDLQv",
  "key24": "3bswnKq3v6RtpeJPB24eytXtk5hGbQE1ZT4pEttQ9YJ9kA5TsejPwC8jz2SRKpBKXSk1ZUnvHXkCgWvGnzyFXLV8",
  "key25": "2ySLfqFZ6NvR7ns5S8N8QpjFkPf3GjNnu6T9itiihWLHa7Uw96undqxHyxRP5SrJDgp6PshSPKoUsrzpraRfzK8y",
  "key26": "37DEYegJnTg5y5BK8ZxDDKyZPCf2eTbGJT2Q9XZMWezmX3CKTn3ktrUFxRPUTnxhFEJ3vpStABCYix5qfTAn1jFd",
  "key27": "2qAtfcczqrzoUSBYvq68faGb24Dc6UiakTRFCRJP46ZWspTSEiu8XhCjdbVMkPt6tLFa2Q2nkW8618RRagiKVgiX",
  "key28": "5JNwn1PCnDbqVVnrvh12qyvTNgTcUwApd8ufCUwTThJu4PL5baa8Vy3RKJcCNiB5FdzWtJkoWWsujFyz4Esu918W",
  "key29": "5uXUK4MqE3yA54hQbBMqZzUTrK4vqw7QPaQKCrJhLJTSrSK7pdaqfciJ4GtJ633tdq4nwum7Ys9pj7gHHfDKKFaC",
  "key30": "65xdS6ThcC25qdWJLQt9kXogqSjtwhgjpg1PbQLPFDpWUeLHToKJ3Su6RGzRfQGszjYrbCvLkC7FKkRXP7CTBURU",
  "key31": "3H97d7DrgAtYsYugcg66jMDjeSrmkLBnxFANMa4bnQ7US56yN1ndMVePiFi1FFJi1mQg6nVGBNcM88bWUvyn682V",
  "key32": "Gsn7NxT8Wkz2U3uG5PAYDVjyaB1jNnwVUaMotm4WteF6veyS36HxoAEg9hANkDrukgosQVpSyWwNkPKrK1kTf5A",
  "key33": "4VT6KEuzX1u9gLM1kc32R7QbovNn1qHa8hVBVJWQAyDKmhxTh8N1Y6Yie7hxajdvFyKV52YDr2KWocQgrEzP6cjC",
  "key34": "2JnRkSfE18meja4dvFeqKpBJR31s1uZxSoqFVmRza5icdC3AdQx1KrMZSKjBUmPD1jzkWK4j7UZWEN3EUCFWwDi",
  "key35": "TuphZTDJ15vRRCrXhA5ULrXXcgwcBpmsyzDeGuyZMRr2TKKAvcsi7GwARQYUpf5gpCANTEJeyGj3oi9WqHnniyv",
  "key36": "2HvRTKvADYrVvecciQVa6nniyH7DYzPNUirjz9N21hiL6kg9eQAgiHQqKsRe9GP3RTVKiYctbivYHQAHp65SFdPs",
  "key37": "4HB8C3TNoYcwcnZVcPYDkSthSip5TYkmkep4pBM66CUEGh5MeQ22G8WZywyEWHu5Me1HqACC1RJa9TqyVuivaZR6",
  "key38": "5hzPHXTUVoDY7mScf6XQH6C44hPzqQzaXHKVaM2eQJ99oYCwnPmTJyG8xa9NyLwzF6mFCQYDYZXLsLh11ETmZTde",
  "key39": "3qCN9q8rWfS5kijKZ8opY8eAmWLpZSJv7WnSAF3hVPaXZgB9ZbXZN8T78wHXdnBCm4AGSwJxD1dk9o7WdPgdcWme",
  "key40": "3ZTTp8BFm9LENThWbDHdqH7Mo6PQMnWjDHRS7umTXEwteDKdF2b98jcFMacpNfDkYZKvS1rrwsG3QqD64bL3y7vi",
  "key41": "23j3ELYARBWREGHRGso2fPtUNFgPJ1E7qwgVg4kEtwGoYWTCH3u2Qpy7A35aRVUhdCe9ACK3AKAAi6Q4KahVFTrx",
  "key42": "4Sc8HMGQawAsw31zHwQzKYhXwjZBnvwPEZ8U6ZwfZPKyz1bdm5QbYAT5QG3mA7r6Jj5Xwb8REbDeXeagaaxCkidz"
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
