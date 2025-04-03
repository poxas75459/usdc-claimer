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
    "3vxBD3b1DJj81SW6MGe3Nn45o54NUS62Zg9ZLQAh1GzKwSrJzTzYtAy7WyYMd5Co546WppjnpMuPxZRf6paqXhUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jKfYyJR8h3wD9hGkVLWfXVUFyciQPTagpq5bL5C5QejCfAy9fD3jzbMtFBkWncaqa9eMYkuy9a1ACBDhzsRRZtr",
  "key1": "5fvfVXsf3ttrQbRbZyZtsEfxQ39kGHSvMRSNMnbMuXtBKVhgfZ75Shktufzfn4x7GQtXCoM2bHYYWqhs8pjFi1rb",
  "key2": "5uU4pLQdg1vEopXEarpzZRcva3YJhpxUnTu37TaJiR8yWor8F9hhG9x4SAGv4jW4bE7nA37P3ZE2heqgszihmyUR",
  "key3": "UuWWSa8MwnNuAFY3jWbH9oqkhfqecL8Rk8aQ1UcSNxuZxBjpdpNUJ586CQoXcP8eYEPE2B3gdpK1f4q8Q6yVWTx",
  "key4": "4Az1XmtrES9TZoABv3oLT2m52gzuzzCVh1dGoqMcDxEPwxAHM7hMBk5KGnVciDFt46in1xxFUUq8kfSkLntdnf27",
  "key5": "4H2gyq251veqJA7PdiXoQmpW7PKki6Jz5GsA25bPekZY7chANtfzBet3aNjAftnxhToruo6q62xwLUKgpAFTCVbM",
  "key6": "4utTaadxRn3ezCPk23Ng3ZZh5bgEQ6jRCkfc7LEwcAzMFZAR1GGLURjJN1rL77xgMY6YzfuNs9coztTSvkoSQaYE",
  "key7": "3Gt3HCC5bEYD365AqijgGMLMfanUb8qYgRunhLQqdDyHJeh6gqaE3gpNBpJSAyCq3VaVF3vqUpEj7dAszi11R4pz",
  "key8": "3JNCTNGiKgm2Ao9xujiQSUUdgGVHNaS23AeH18RvgJPPirbKAAcLjkg9jPY9QijoyjWJQNfsMbkD4osvXGjxJB46",
  "key9": "3R33f4HVz6pMbCMqDYfAshG4mXti9kCHLpVMHs1JSZaGsCMwanKgNTo9qpCBaVXCvNZxGPt1wFtZcgAVJCZwdba1",
  "key10": "2QtcMvbxDoXcx7UuQWYTdTcrjqiRHuRaM9EDN5nmxMxxWydFFE5mwww2W1Yti3b7ZiGCaR7bJG6MBQofXuN7mPsV",
  "key11": "61hMfGZnAjBChcq1YaeVYfcRDskkrgsFFS2cArj7cS5EWffMk75qT2tAx7M9reaF5Vht58aP1A7Fd512QksWaY4k",
  "key12": "3QnamU491NVer6FcDsNEFpfxFSyy9gAP2EyUmDAXr2xTCXrc6pyg5mQWyom3hLc6uMMUoA8n45pVfKiSAAV3BdCb",
  "key13": "5sqKLawk2V2THXmvKGPcy54MDAHzuDJPpiJLQrqRmc6V9mirbKKLph5tP3NCN4kkKogJiJcQVt5gf8uEEScXuj5a",
  "key14": "4CVxJp1EWRU2UUnTe2Z4xfPRHpj7o6oM2xiQdDW2bjQWsCb7y9XvnghEWX1tP74E3CxhHx2XZyv298sdCpib43Lg",
  "key15": "3ZWi7mGPJKHeFJLvNs1NytvEyoKYGHwuUSgyuTAiSHtbvKtocpUzKSagSdn2C5xqUGfmcL9NFeVGxbK9xe8RdjsJ",
  "key16": "2dsRQvWQkkR3BhEAzq7REnbUiFygR37zJ2xcJuaW3xDCwJjcuTGwJch38XA55TCr4KpeJknSWM2SvVcmUAcAD1Vb",
  "key17": "5V5KH2o4kpVQrM8s5H4ZTPcKXhBLkZq3pBzLr6ospN6d81bG29jw6LY3yP5EfNLbYG8Kk1XMY7GQzVMTwZapvJCH",
  "key18": "5nvc5hG3i6bBG6Mn5QJC4aMsgqmQ4ZsmybNhFPhdZURkRGWGmZMF6pM2ntRALFKCVccGwqEUt2EEkXWGyX79xVX9",
  "key19": "6pVQMrVAfrEutKHNV6oxNJR6o6nuEJiUtvDRUUAcow16tbKuRdHxbdAEbPceCYD7JPERfGm367hhfPgqT4jjttE",
  "key20": "3gf1w9jqxQitcCohJe46QmP1hkzKKbutNPgzskjBkSJjwoxrNtwti9nrjNYTMT517cu2XR2neeAbtmidyyLueczx",
  "key21": "4YapChwNvgyvzcgVHTt8TbFXrZ4kjuoukHDZtffun4ohBKA7CjQzoQZPD3f6SR1evR9nqrSMNKGJpVGEnqFQDgc9",
  "key22": "EoY5nmC56Q5J2oqUTWca2ELhw49M7NCuK1gMTWhVgHCsHiLP9r5ehC9WKv8CUa7EgpXRniZTiyKb5ZNpmtsgwaw",
  "key23": "4PWvuH38WRcwMZd7WAr2b1WKJBcdcY5uB2RRDyPFjpZUJoEZXQjthf19HnJyaiFt9GcBecKbs6aiRUZfJKmrqZPi",
  "key24": "3cXqtquwg4X7Zz4WbCqe9CAnrNQ2vf8KJLrUqHQyivyNiBptXH85RYQ7GmZjFJdAXt5Wd3kRVRLuGoZdWPUC1cEy",
  "key25": "Pnu5AufUBbsLxcbkXF2kDtoSerhrhfADWfnNdViU3mQ6mWpB4hGt3fw8QjFCJfsVRJHbMFTnUB221r6GxMqx1EK",
  "key26": "4WkbWhe6R4p5oTMbNNQR53nhnEcEhwuDhuRzQekYnHgHmPyWZb3PWRpP3infWN66y4C577YmBbRJGPtkYTHqUrkT",
  "key27": "5xZvqyYtvazZW6NNwHshxXRgrGs31U9Pg6zsYxntgUDfik4rPbp6moGoGxZfoM68NQdDExZNoEirXGkB1VSEzsou",
  "key28": "4dpGqyyW5e1yTnDdJ5U4pLMLidGyyr8Y5XKyEfVeopvhNePhANp1XM7wYkfFJWqjzBwpMymgb3tdWkCwe2idPT2X",
  "key29": "5VDfDEJdebUQ7u9up6XuyENDfpwxRT4ST6oqkZwErpi1VsxCjisqmtQBS9GdCJ7y1ryWDvmFKmWN1xTJ9jmPJmhN",
  "key30": "275jcu6GjLzGuHeAMj1AxVQj4if9JqqEESAYMShtzGvBEAJdqk5i7x718J6KBvngtatmtqLMCmLAzvTGu4AZ7hYF",
  "key31": "5Th9LQzRMDFzX76ybWgNPRL1g8dKToCRTiFnLtL421D2WrYXRLCYTWCucqfUdrfR14GmK59GHbD86Eskf89NtYEp",
  "key32": "2aQ9Rj4jCjSfZMkd7AXC1imGU6DaKMqK4toMgctQxLtXNTEystQLb4foXf2RgQCmNk9rfvMdGpsFeEqNz5GXrsTN",
  "key33": "3YWPu16JXMrrm2q43ZT7FzLdifSzEcLtqzvRgdo1ZMQgSjDYfg78ND22iepVZF36VbtjmQUMrp8jssLKjJ8oVZrt",
  "key34": "NTcz1kQBHQCia8P5CVrQNVuawfBmYLB7rGNZNxMdfpFH43eeZvHi4u4svR69Sw5RGTCNUqYJvmLGmag9qksGReJ",
  "key35": "HGBZQH46CKSjWYVS37ejBqmRy1kGNUC2ND121zwy4r2x1qrCXTLTvktmvBxqusfFWJM5Vq7pwrm386HmCFaAr4k",
  "key36": "4RDDvkm2SeL9jJUQosKhpqGGd3AvfzfgMcZijsDGd554Z5U1qUyun7NKWR3SYiupevDXsjDxnwCKDK3bw3uthc8J",
  "key37": "4hA9XgDBTzHoL4tpgM3FGL4J1ff9vKjXfLzqhqePDo2BBvcfWCprCPiPpKk2XRaQp6mXNRuQpf66btz7LrBCphmb",
  "key38": "25Eo3rBMiUZ46ZjZSDXGp4pGYZdgtZcg3JNkGRN3vqvh36w3oGpaEnkE2C3tx1NKoBCGqLGBU9YESiYcsNWBriaX",
  "key39": "AG2YbTbCmqfTjnrYuzS5iQLomvLypZc9D2j6tFiU5AmpSq6Mm24mCqPS44Nyc3V22uCeMxVQcTTPbbiax72fdsM",
  "key40": "5Urwm1MsUBiHHE1rfXAkAYCHLtnWbAoyt2q37qbySJxeXyJKs7zNC8ABVciTUYvNnzbpWv4zu9X97vhw5wcUEaze",
  "key41": "RTjMRndqbCEH93zUiSFKxmaXQ2ULVSjZboKZcsR8fsgEedb2vUpnYj9SRz7wXUiEXedyxZ3JYxi6zL5kUY7G6vw",
  "key42": "ETESvGgWbMnCAD7NGKcUVvTjsytr461Tot83x6qKPvxcbbrFRZmSKK72NtLyDczZds5KK9WMWhuFgZS27NBMKdG"
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
