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
    "626cAKqk9ooyp3Xhsy2TwSjrS6zR1fLUE68Q51ne8GeYnjEd3LKKwyWMogWCt1fPwddTArkVuy3uQu7ziyn4pGSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bUnqzbHUHhvBxyvPmxPP29wLPY4M3BiMPfVW3zRErjqJFeRBPPPygxYp2ucHS8wVSC9CMYzEPxQyR5BM9KHCErK",
  "key1": "5SSTK4oG55uKhq8gCe5T4X5QKnqod7ni736hxgEipYdQ6jEoHbGCheTVG2baZjEBNHJVxiQTAz2vMwcWbvtUddtF",
  "key2": "58QaN652ET5cZEqUktdWqVKrGhXMRNVSNNpajMTrtqnD7dZ4LARupE6YrKUxpr5incTLyoRXTjE4YQo4cq3Q1uP5",
  "key3": "3X8YAfoTbsMFUrMVi6uF11jtTWssFT3cDF9cr5ubnZTLCqTkbShxzNGUtKF6LhgmZWUkafFEzX8aqT54kWm43w1H",
  "key4": "31Wf4GHpYhG1B7SXMVe1sS6iq21cm8NiQJCFBQGYyrFRFN4wwiwZRvyKKR9KnRwpVAP6YVcmjLGYEFt9LSQLZMBE",
  "key5": "4LcUormoLzycf8iu1R7SpMbmurCNC3ytycHUKUxNhDNbP8emzoBqWwYjHhZ5PsotWU4SZBqWZCAt7ahD2dGkuCbR",
  "key6": "3XbfQ9LgD5DCpcFUSscQf163xLszTErzdUcHoJ9UUNyQL8F2Ds7QiuupwVDvBnF7NrtWsS8EJY9YJmf3BgHrfnBj",
  "key7": "5kaPTcg7YN44RhDn25iyptFWJ6c3undr7Xj8A6z6XqmpL6V5FToxfgKqpuWiMjsncVkrS4cF3XVaK1unALTWF9H3",
  "key8": "5zCqWKHejHBeP9EacW8rhJJowM42afujbmhwcHne6bLMavw5Vt1yTApaF9oi9LCZ1gRZpL9G38qYxQzppRwoZFds",
  "key9": "3dEMDja5AefanieeB1fV1vr9TwtVGQi3iuYrR2GBmDqwMSyfrsTfHu7tGoKaJx7MRKdmDbSHZH1BGRZ6kym4CQuk",
  "key10": "rC9kwbv98xWMQvVNcq7XXe3W9g6cPSyJ6incnVD3xhVe1yDP6dBeEKd3eyLucKtMAQvwB1LeHB2mbf8zZmcbst9",
  "key11": "5kud8XCe2heKtVkuqMpbQv7a6gFJtSUXdkL5Aw3paDHQftX1Q7wLWSFJaYv38wgaSh8yURkKMw9DUBpwRtbaFXez",
  "key12": "4dvsnwgGfqGvH22s3gjVihMZtP6rSdABGfFa1PqxYMjck5Gon7PMcEMUAyjGS6wAdNhyqBFZbDFsPCS7CjF61nJz",
  "key13": "5wXC3UgsmsvNYMnM8bBS63LeRb6buhatLWFnxA5UPRVMawZFzza7vyUW6CJPEbg2reqzwx5nf4smCAETdaBzJCm1",
  "key14": "4XZXWQAvMyw2MPzEq7CoNcQmVzXYxBZ3R1JjBFGHf12igNEfowar4XfKu13BPYK2ZBmsMgQeN6wHy58iznnMNiuF",
  "key15": "ZQWqds7TYsfP17jt9WdAgwn6rXSAZus3DRox546xe5yyXr5JGafZ8eAKBNAJjkkRcwMsBYuvGm4SC1m7VPdjG5S",
  "key16": "4Kswc41KTGUSp1ngKzyTwyAfAzgtMW3Rhhj2FCsJDxotqSBduUiVdinfqAjihFPCDTSSTdcqRcgvXzfuQTmzKu9J",
  "key17": "2Xa8GYgsWH5A51XyUPbfJsWsWKrLpibuM5GUEXAKhtvN9YNXK3TWEk7GBa1PnKjK1bMhXMvpsfNfov7XvwyeUxQS",
  "key18": "3LCGHL8mfEYVvmjnCKamFRxSLYuPKoJin6cDQEDH1pLNM6X52WuWKfQ4fJiFpcNurYywJD7SXqEKbG7FhPCHhuos",
  "key19": "2Wh1NyrUZwMWXFHnFdnyiTFM6mKzBXUnjEcXenY4jU8NX8ikiBKB8m4JLCnUr9rXikj9Eof3W6Acr9osy3TCWYoM",
  "key20": "5gHYpq6umcksyhUG4tB86G3nv9ZXhdAnFxCHvXT9raE6PC5LMUr7k6wYWQrCNGQiBTKZYLMbGVTRiUMsaMQKNeaA",
  "key21": "4HHBQCAfZ2me24qyek6f58zeJTub8x1pw9WaxWM6iqjH5QLnD3b2DUeHw7j4jn1WGSXW8hwchnHgkoNFZaj1r3cG",
  "key22": "3xM1e7Ja9bfs4g65CrmfL1bYNgzWFi7jv34x9h9y54ywcCNFmPhMsgz2FF1qLi8GkQr2iYB6Uv4tjRbeUafyX7Ji",
  "key23": "2YBFxfS4AfVoZLDiUYTxLS3H7moCBniH4ZjniXS4G8PQsQjjzzJsQ1nv2QKtbBmnLREebXihVwCY29xUZcnHcMrf",
  "key24": "55o252d6BZf1NtVdSaf4rhfK1MgjvH22S2dXsfEuPTSG8LUq9LBtCf6p4v9LQDQ9YAbL7NdMfgrzmAvZkBJcU4bQ",
  "key25": "5uZzJ4vJ4zMHdxBbVuUdaUNVWyiGbMQhk6JiJXrojTuGBSzXjM9UWukttv3gbJdrugQm4ay1gaNJ6T1onauc3BNr",
  "key26": "3AqZtW8YhRtEa3N7XHpSfUsXpz8GhYxLrgEpsJHxCDbzdj8dzt6Zf19E8GoSoz7eZUcwukk4Rj1nes5a8uf8nzQq",
  "key27": "erEakhyd9j1mccsHUsddSP7itx6VC88g1zfU3kETrbdvLYFBeLqRW4ucbGLTCPxxq5F974twrykjXw8hgh2NJbW",
  "key28": "5ZjtXgafuaJeBx5EM2vCc7yk5jm5mBi7jofBZ8otZoArGvTLMWeiHPatEBbCqQJfRAH5nSUShsmNGdXtHnoF2Dif",
  "key29": "5hYKDQyiTgG6BHuPTrc6bJquq9sdapgJ6DG8SSZKb71UFGNVG4u2EPJraKQXDsF8SEjGymgJiHLnKqxPrHoP2MGF",
  "key30": "5yR9iF69V8aXSZSu3PS53jwXKQV8Hp3yLQuXDh3h3FMcRQL1kzrbBSPxg6CXDSJFBMFVK3mfWWoz9NK6ojJQdt69",
  "key31": "4fPC3NQZymcwwEeHSUKTVnsNmWiqCNPG7tkiPdq8BhCMXpKkHaeWyxmrAJ8bwPzHUAdpkiMj8mTb2T7bNxp4EG4i",
  "key32": "4MKW5cMpZnoEDyrPbRrk7py5pb9UVSKBtpQsQeMqPEinmC9bbG5PTExkjbA8QPHDQwWtVfk8AqwV8TkgUDEWUVey",
  "key33": "3A9KbVWVwFp6mYx7AqZbge93q8yoNF9KqxEP9vDaTf9oCeTUEoFNT9Cuhke29Br4QHKHmMwPFsPNaDYBwdEL4NbK",
  "key34": "3RyjPcJEfemcrUGojSDj9i7TuFdccsyznqjze5mfrHxSZLMoAh7iCbCQfpPwgqTv9LV4UrxW6nNA86wLsGYa27NM",
  "key35": "E64NE6iW3UU6z11k8623ozQsvYvRedU5d5HfmrN2261uLpQsaBWD4gowfBKEdz6ocnVyeqi7YdcfyVCEpxgEgq8",
  "key36": "2b2Ci5LpHqX3518rWa7K6B2teLLTNcdcQHfVW7ZRxcSuWHVfCBcmVeTWow9cCSMYzbcUTosMNdoRPivrrDnJ6U9G",
  "key37": "3Giue3kRt8ocr8sc1KexytPvYge9qooSWH1MZmwHQvAUAeJiZfTprgc17gMrHAT4J9XLcLdeMzKty7Vxx82kMFfP",
  "key38": "4B9qTMpPJEMMixXPJKo6bjhh6fnb43zznWNW8YEVNC8XfeDyWZbifGuWCHPUgkrCakXsrwvn3KVxZeDH8DYLKuJN",
  "key39": "4EbRxFUHb7QDfHbnGMG2mXbaR92ssi7iAWx3DmfaDVAge8QNCiektZ6GrPdA1i2NFynXoURU4NfU2YZP44XW1RSg",
  "key40": "5bZrK1Ax7yKSKK2fGEF3LcRKYLWMZPTQjvtgGrQFxeHDB54FoyFgpzemo9xj9uSEZCALeWBqGj9xhrbq2t9p5JmV",
  "key41": "5GFg2Cm536xW8XiPZJ1xWaLoCW2QsbwfpBLnhtbyK1cCWCdDMXtSCFKC3PizPr51KBNxy9jxVWHwwJSJQof9eeT8",
  "key42": "3Fd3jPk82cbStTHWv8nPYVpRpW22dRNepqm91mpxNzv6GbJsLo9EHnHcFdR86i2gB2P24X24ddHN5st8VC5zV29h"
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
