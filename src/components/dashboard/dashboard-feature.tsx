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
    "2Kq5Kci82pv2u94vycMmGJr56tYh9CmdGQBVmEKLepmW3RPj8FhQBHrCFXhkN8CwVc148wBmYCxSuemjQ8dgh6D4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kEZr98bavD96JhKZLGPCvX9urpY6WV87wheSN2CiodbzWXTZ4Wbenjzp7Fs98DvDvLT5s2f5saJJw67wV77fYQd",
  "key1": "DZnQThWpbLojdUh1vH8qdf2hkJN7NSHgMH2qtEbwvd1sTZ1kZkUFZ2xxib5SKDdshm69oHW7sBJj1Qamqs146SJ",
  "key2": "4n6vkYmFz2LoBnJ8thT5eBdebWoRfcLrVXqVL3AxWrM77MpRhbB3SzPVeD6Tacx3p7FE2y65tbseEcfSdhhpHRGB",
  "key3": "3Xaz8NuhdG5nhtvBykcvR1DFb7uKWRPG8ktNNeCpHmH9KmgHcGUYEJWKbxa8BpnuxAG6HeDNnMjhi6qP7dyDhso6",
  "key4": "4UoAKSUVi8twEbPny1Sy69oxji15rM9NRXAUujWoDJxLfeuqR9sg7cUB4L1pvhtSDfYx7b97votkiYTFyLUzQxf8",
  "key5": "48CpxvAVLewxPKBv7y1qgJefQHt2YtguxRaWQzJxvSyMTc8VwdZFzrwwN57WdzGBCKekQ3Lo8C57UvAJrp6NwQdS",
  "key6": "2vSeuC1txBdDFFj3V5auu4nofBwc51D7F6ht83uhHMtxHXXytfwGeVZbbxucJWHAevQpfqkuGiYhNXPfp4wEaWwR",
  "key7": "4RwepZznt6c25nch5XeXEKSqReW99QDMQ8e2ksEBiukdXupttnCKmamYSB6YXKqe8drVbZuo3VR3qGJC5DgniakZ",
  "key8": "4SEbBgCGrU4SaiE2DJtTfK9ERnZKJwp7v6viEHRKaUtJxhx5WnNj9eWYaeqHVYA25Jae7FBQHCf6ZZvVYC1Gx5rs",
  "key9": "3XitVW1sxhCEWcKm1Hg9WyMbExPafcprpaQvyUVKWvNpExziKDHaSE9aApS94eAoFGDf1T6DsK39ttKTRr6D742R",
  "key10": "5a5csJig8p2V7TtNnbdKiFw17CWtdQaVFEWrh4as5Bg5eGcfmBGKD4S2qmRjYmxRaychgDT7pESw41745zDwu9mk",
  "key11": "3JntTvSpkRuVeUMhTA9AiJm3sFMHequJ6hDDtbZZFW5ju37EPuhaUHfNLBP6qrcz185C8VCQ7sw7cmPFTcYaP3WF",
  "key12": "3cuuThqkxAqjVbWB853A4dC489uYhzppzBEXxRJWev2r2xDeaPCVGcCuhnDhwpCCDDLZKKRNn3ignuVJq6oMp7zo",
  "key13": "5XptTFSTosqfE9L81PYe63kFogEiS4TxWBHWAMkB3LGaSeLFdgerDYPcLZNBBaBHF9bRKz5U9qhGqtQi5ZjzWF81",
  "key14": "49LMr8rrhqMKpYVFa7fF87JYPG5JLfmFQXz4dxbJsBpgCH2dD2X8DXy3JmWpoRWhCGw4oy1b5dJJqeox5ZLSWQrN",
  "key15": "2QPH4pnXPaQ5hGhrW3xQUFPH44amLuA1hW7ze74EkxKSRRdMvWSZVXxZ4WHtjqyJAWnTRXYgYX5dDFRyyKgwNJHQ",
  "key16": "3bYNpww7gsM1dSSUxL1FYuSHfAkN8bXX1JjYewJK6XpmfKUcupqAiTaZaT2BwcqFn5jnk7du6x8x28ksbWUP2cwu",
  "key17": "5XyHsi7kssuFfLkNJsAnUDFjTapWq3YJdovwzz5ZwsQghDMxGne3ATYBV9Fa9JoiHuJ4iy4xJPNuNKUER4vorAL8",
  "key18": "5ytdXqjSVeHV6fhf1qdFwQLwiLFPZCjUJRXgYRFmujUqMqk7E56v4apnNhcCKTJBAnSQfoZkQ7yV2qELMF1jnarW",
  "key19": "4j68kWsChkBRieMH2NYyVeMSmtSMWU6kXz69UmxNVB4VwgiQbhST9pVoFvbdrE32r1rP5dxUcE2PrRqYQBgFRsiV",
  "key20": "4Pyit4hdEVwe136irkYe9mMjB7frZSj5Z3KXAVdj6qfimySL8fDHjLBBxRhfNgzMYHSa3Wz1wwNQW7Bq8JDR4NKV",
  "key21": "JXXYzWBfkeDZW46igCCtUVGG42FKXxJki3aWVpkRXuTBFdLZkhgghXut4Zduo3hucipWVCco3hUrgygMABnMfUj",
  "key22": "APU4Rf6tiw1A5Ug5ZwizLoa9svYzfQ49rNqZSC93gfG588BdXJVTe6KjHY3nD98YXmiHjkPjMVQXw9WMtX4WsYg",
  "key23": "38FGM2L3ovB3fMUuazLce6tPSDhKoGTAkKUcm2iGqVWdADULkqCbnSpEh9ETQReYgwSWbHWc6Y9sSkW9fBbsE7az",
  "key24": "2Pqbr5DXJJuSCjvrLs9bGHmQ9moCVc4MvkYt2MMQq5UzbSurgap9hqwq8dzECeeyHcjSBfGePxrvib7Cj9D93y7q",
  "key25": "3jpnR8diHupES5AUmP3RMXSXC84wQUtdP9R93QYNw4pAqq7WqtdMZwYeqHGN8eZghHuFsfKJCndxfCwjjsmw5pao",
  "key26": "KPBpP7JxYdFu8kHK8QASA4KPkM2fNiidhvXXJn58D9DzMbB7bsqCssu1iep2fNJX1ATM48LJzm2mBVfP2enFUis",
  "key27": "5YHA9mM3EAdsDh9J1vCwQ2nWmmSngfcSp6rrqs1Bp8WtoiXrab8uekRyR9trPhKnySqkdGaeyZBoNNiytCeEQgcy",
  "key28": "5vpQtBSwF4iSqVJaoD7XUmiYpLJhWmGkBa6sjtMze7B76mhq6xLivkguri3PzdvnNrKAVYkANDSwPq2S6RS7sEPR",
  "key29": "4frBBgQzvsyrxR1h2sd9utBJqStboA4EBtSKNsQ3oQWWGzrWE5zbnzUPbSpimGGS4kVc7RqT8ncPMDxiPje4wFkC",
  "key30": "62EaaNXh4fPk57HfFTwVdvpHM1K4PjtkLC56hwRSk4ZsZM4xZukZUV52xzHzvH4ehr7iUesaHEoUuQTcjhoLAiMT",
  "key31": "2oD7nzGmsJjyKVCxNvBeSEtSB1EZfD5WKcibMaG8kEgAg5Xhm1eYrDXpVG4iGE4qrTkoy4q7P9Xkk6f8mhWuQ2W4",
  "key32": "3QwtbJKeHyzwFCzWdMcFhSzHmBGB6rB8AN8p73cfEkPLWMdFpd39TqXNrS6g6uhqhdKsVz2b3PB2f5UnLp1MwbvX",
  "key33": "3fhgZCm8aFNiPZieYXWZYueVYHxkqFjhkURA79VrvVNaRVLZQMJeZFCPMxt87bWG1z1DQaCCwjrMH2rUfuBhEhUf",
  "key34": "Pkf89rr65T68DDbjcBUxZkwEWzEtbx3P5NXCUzfhmgHxHsNdqu11NrtA91CyAturrqYNUpYBjjxsyjXFG1n4UkJ",
  "key35": "2sBkTeybkspBQebwAZueWtfToMFbm5m8PERcPBfcwWEPeMwwa1Hfd3AUmxongc4wGv7H9AhuRPZqXPkfyBQHp3Qb",
  "key36": "5m5PZWfVr6BHSQ5xUyUAXNxPMGpLCP6WogEXPyRbmuJL63D93MsvjcrqiD8869dkSCXf89DnWKXjMGy8ne7dA1GM",
  "key37": "4BREc8iQiGeLE6Ug4K4f2CtHVQjSVBnU2yqCvd7jkB9z9fgJaHbpfSXQYmCFxCAizQkz5QbFTTghoRp45zXAPrvS",
  "key38": "5akrVzYwXhWoTrZiiegUxDE8667gUJfzHcxBaTYjz2tejX5GCiiFBHG4X7SQsgkVrPTwd4VHw2Wg3PsWsMot6Yih",
  "key39": "5TRJgriwZKPw1BgfNSjKrxUtghhevDcLVKHvmrzfLfkCidBdYeEGttJzHmjpCPsxSXNaBskYYYkMebeEsLKAmNjM"
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
