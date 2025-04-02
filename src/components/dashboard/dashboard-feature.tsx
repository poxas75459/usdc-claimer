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
    "3wbFe1r3r1VivurdKWgkZFh1HokScTDrMRGPt3SzbwMow8ju9vbFWMHsdaKobUxRaHBJyCjJ8ivVwx1d2ZH9gyh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51fZeqCzarqEWkgEpBVwPrPk2dcf6QFbJLHnCPfP1U3tMtQyoZw2GsvhgjXc27jofShmzPGvH2dmxHuErvK2GEf9",
  "key1": "2WsxZvcvsxxdSLTC1MfFmkRqY3rGF7oDGxxeSqpEXmZLvwTLzZP8QXzt5nhaX9UTD2cMHrtj1MHAQoC6WnWGDiBW",
  "key2": "3vJTnPK668puoQ7cgUEJXKDJhj4DwdJ5BYreNRRxN5dtgMqGbdfYQHxzNHEa5i8SpbDL2AdWZxkNhppCuo97G5kn",
  "key3": "36gfhfLQVX11z1eQ7Ud4xkozpwKAm2rHjVYGeb6ZVi4tZMFUtT5TSvn3MuwucttUZYsttAiBMCxNfTp5sj2ydxRd",
  "key4": "3PZqd9CQn1JvbgGFpH8Sh3HJFfk4WjA984EdXGbrLCFFXEe9yrKaSBWJJixjjvBChrgukzcLuCEJ6B1CKAmQPcQq",
  "key5": "4ShRq3HpVmVBW1tHXLKmqAhNLkGYnnubSagMdtYCrFmyq3FRpD8QmFW7XYW8UCoPCdR1knu8EoyNHKJ4yx6ixkQs",
  "key6": "3CtCyfzex7AwV2yYLtaeEsjnLx3diEgG4LbviDe1eqAFoRo17qTwoKpgFvn1VVWMEiS1gWaPKq7AGFJKEf1n6yPX",
  "key7": "KbF8agdJC1JCMFM92BvvnhhAxVpGA3xeF3rQsL9izb34Rjb53c7TaSP5SxefArBqsuDQUfuDa1GgbRHysb61roz",
  "key8": "2RZbp92AnjYbscEF4aKLuJNxZx7kLiBAkEp5sbi8EQSUMPeuVF2bdZmtunXcof1KX8WmshjAJHvBZEoVxmSMAPiV",
  "key9": "pSmWAom2dewxeX5Xa8hQYiWPyRKPcJNHDAUCTxVx93EJFtnipmPd352AbRBUDsfFvEpqzVjvMicDiqR4xZ3m7Zb",
  "key10": "m2XprBoDpG9D4aGGXayP71VP9nwaejF8iWCMqt2y9JJyZvxCB2NMNzbeh2N61LCFjfhT5o9hHjrgfFu6Q2qucdv",
  "key11": "4TL2mwUf48Ym2eGEZTKjhJmZxBdbbNc4cKveiixTkjTzKGbUtzNtPDS1JoM5S2Yb9obvmdXHc3PEtAZhGrUB8Ha7",
  "key12": "5FkBg6RDQL5yCEhBESaisNwDMCEA7URNxj79SnooWoexr5q7Hm99VFsn3Hrgug7h6orpd4M9BTmc7832CUqYPUgE",
  "key13": "2aLLqHahoaG7goLzfTdbiqsHYiGd7sdvTim6qkARMLDB8n5qeZTJom9VgTTCEj28tHntFZBQsYp5D3HUPG6K32pb",
  "key14": "2nb7vrqJDCfutkZrnzgjgZEGq96B8mZadFejqBkAYbh2jWiFqsiSUgtNUwKC7Y4FNNgMjAdzyvjrVUPTT6fVwzcq",
  "key15": "5JbCfXtp6EzJ3yoiM15fJXhnirFH89yixj5ttsD1LehYbBk6juZtge4HsYMbbv63X943xQRENRNhkbtobckYRhsQ",
  "key16": "4w2mMTxcWLxgum6hCp1fqkPZ2Qgta9dHtyahGpNNV3qBeSN4aamQ8dbSXzUawzpXvV2v4Ca2kMjstuy1KtvwNgEo",
  "key17": "4mMQV3QSGqnho19qmJU7frZeppiHbkbcK3K88HTNEtgDBLbJLfxdnT2osFxpsyzjhMaVrpPP5oj5CZT3iGLhVstV",
  "key18": "5k3iYbDpDFzxkiUsUFqR8ExoG3ZpxYPLs6Y7aZbSwQkwS5TRDNnHPBVLmPz2C4cJz3wfThL4taUv2cPreu8zwE31",
  "key19": "38XZoRZg5TvqhSN6XS4fuE9yAtxa7xBzQdBbXeAt8yHfzMer137Yc4TChezLU4kkTUsabXWgwqnWDR1n22V7ix7R",
  "key20": "PESztfH2omwJCe1WH81dqYSy3te5Wdorw6tS8e2fqBf8U8PPs3dNSirYerQLQPSpn3L3RVuH9Vu48qVc7pEwReK",
  "key21": "2PwTtXw2rUvkr3J2FUxxKUjinoAxP9s3JTAtvbZPj6aEbzQuWPuBUeSBNynk54X7pqxMwFtV58mSaDMtjc7uEAES",
  "key22": "EEfc6y2kWWZwxEFz24DDyFZyZw6wjLzD2XntpKpUjekLhjGrr7Cr2rtVqXY8y5Do8x85SbinkWy1YYwNS9AQyjb",
  "key23": "veFppjNU59eVUMJWLbfzwTcwNVL311JDuaM4vvmHTzhooXRmtMFmqM3h9Vui2Q5ivG38yeQpfKQ639Lxs4w2UJv",
  "key24": "b9524B2ehwiup7TgcEMQLNX61mDRARZCERQWcBMpxS4J1zSaMZtxMne5Ru9aUjXxEGn3jzPkVkirRJ2smS91RZ8",
  "key25": "2HuhxyMSWDArDvXXbhk1zz3CKQyCae76BQJRCuz3LzBDMz52UrCUsQmJ2AXvcLFvBZFfTAkuMU5RtWbA5wVFqYGk",
  "key26": "5iwgJi67G8iXfFe5Rh6QPoAeSTWQ7GTDt1Tqvgcmk6P7RhFj1rYqmwpF9emZZSVw5NJvnaMLbUwS521RnPGF8r7c",
  "key27": "5KnLm25VF3wycVoifbJ5dqWnaAbX23WG7JgczuCytRbc5VGkYSz5pu7cd2ipMeipLSWU4BG3QBAvLkK3G6v5ve1k",
  "key28": "5SvMpPdg8YyysF5rjAVhj9xGtc4KMCidZiapWZtKUaGm4vw1HnboXgUCJUfkyMJYU181YcMgL5z58vLchdwuGqhQ",
  "key29": "5YNiEMyMzhixxwGcuoiYfcAScutGn2o2x1s9oCeUR5NGF1UrdVy8skbnhScNMcNoGp4Yt8JMGvwREytRj67Fwvq3",
  "key30": "5tSDcteVfdjrPEkeZi2NTuWKUVeyuBDvvccAeP21DKL7gCZJLaVGERu9JFwaSuh164B1YQkSgbGDk53WGzKaFkiA",
  "key31": "3DooBxY5S2nZdvUYecbsAvLHoymJSN6ZzM3BuUQewfaKMjKVWsWqePMAKR2CYLwYZ2xL6fcW29UPQQ1NtEYfXHUU",
  "key32": "2jQP1C9o1iEUfXkrWk4FUAEApzWQcLfbXmeSwtodyig8mWYopwvuFeJzTpw5i18zMU7RnScKW9TXgLMZbh2Q4hBT",
  "key33": "2LwaCKsKWaRkme3pfUNaxtXxZRSYtqdhhgnpqByiNokVQwR8G32GPn2FmRfdj7CZLH3sDJQffksLWGc76aosE85U",
  "key34": "4Luv7kwFJ6yi2njdUA9guhPagEoweKuGgMyr7gF7HW8ron3RoqTJ1mAxQCCHQXegzJ8rzuifFdw1Yf7dTaCoZ258",
  "key35": "23WobyyWv6PgFhYoBzsETs3dnb4sFw7w2SqE6b37XPxBgGt29VHe5Lpu8gTf5Tw6m1y4VjTfYzojWLAdBomV6Gpj",
  "key36": "3eTreQRXYfcJWYqpaG6tLYu8Xn3ehPpBg4AeNxAg3NaSHmuNKN6iu4nXSoxmeHMY46am24dXVyPju49e6Bzb3BPP",
  "key37": "35QZsTTaas2uxkeVPVJRNZcgSPGdaDGzaEyMQ3Zc1WVtQSZwbNuUGCeks9fJzPLVrtFCdFj3XbkuMLGeFN86eSQf",
  "key38": "2BtfP7UXaBKvxCwqpzLhXjeG9kPxkLv66XkHAsuotXkoikHQUBH6stjcEx8KZ4wuzgaSz6pvxrpFhbRECXFwLvdg",
  "key39": "2ng89dw8gR2nwHEV5GuJPsqeTLst164XrHrFHYCtbVJeSyM3hLFQifx8WP7xXAmBU9MeKCLnRaFhJWtmUQV21P7Z",
  "key40": "5gLwVFCbt3sqzmLGLcDNmaPnuBYynRBVnyVBye5CUiLWusGq5AtZzPXP56dLYBFUawEwC3hNEswQbmU5FKSgDPu7",
  "key41": "7RfEXGmdNVnxfT7GSHuvDbVNabAwyMdyxSsLnvQMDHpMp1E36kB9u9PBweHrE9mUqiYsVuspTEGzxgfvnXwQfMZ",
  "key42": "bpawT7HHnefpKY1ZZSAYDPuYiWXoGdMDLhMo6VTSpHyHAsmz2oBycYFN4nPAw9g9KRwRqkY5e7GqXBKmioWNLFE"
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
