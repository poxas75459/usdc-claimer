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
    "5Mn8iHVx755kCdZU8hff13YQAMHu6oC1PMmHQWbMLFnrCZpCus6xTk88e1GNPc1rUFMS2VYQRMrDLdD9F2pYZ6NK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SHPXN2txYwU7d7Ki9MEJkcL6KLfH6YdHo5iPkxyrMRZpzH8Mcysa16pw1MxbZsqdAfZyTWGFRWBPw1nJWMSNVig",
  "key1": "3CM9DiFg6SAEz6JqdczFGY4Gh7qs6yAPo2m6jFFZ19Z4Ls1M1w47Wm8pH8MEM4TR75PywRf7VUiwfpGQHX5qXZDq",
  "key2": "3SBph95bzka315ev6opXRRt5faLXYsVBHNd2wazRVfx7d2dK3wSKPdM27JjYt8tmpFQhGb1uSWrjVpUkAVnZC71V",
  "key3": "5Lj4GjcTQiJaywLvEDJH7JnQyJajSLqAazCmc3TAFo11wVJZzcTc4DV1hGTMdHmRtsq2fwGepaoH564KMQM5cxRi",
  "key4": "2Hu2y84NPniCUbu5c7MexTqNMDnZE2dLeitdNJpL4sqLYmE5VdLq8EN5SVF6Cnzx728SH5HQPFJE4MXe5grdYt6y",
  "key5": "3VjUqyb7Kk5WXynrgbTR97NLZVnryPgW3zj5zqWH6eKGS7SzJLeoGcxAKhUM7SHe24P5L1YzNGm8ML4Mebt4hJvr",
  "key6": "3V9pmU3AP5NnWkpxxXAw4LfXoo6oRkDjtWBQoqTcmVAYHu788eqFho7C3u59xdT4Hj4cxz4GSYeEmQYzYWuK5JV2",
  "key7": "61FwrZbzpsesoMouVeN7Eh3H3Dvdtm9LHwr4BTtTm9ympyL38H2SWk4TTDDodjB3KgMGugvEMEZKc2NKNHhi4jzW",
  "key8": "4ru1g4GmsvZ3xZS5RArh1E2hH4JcSXSctc3aSvBndwba7x68GPEjhcSLFx6WBXH2Nm6cq8xpG645VY3riJ8A2zsr",
  "key9": "4F5jQ5uLvmrWN5mittdnwqstD1mBUHNU2atU5MKARP5QDxNr95tm7aP6MqKBRVDdhPAi9cNTuyi7w5HN8ojt6fYi",
  "key10": "5NbTeFY24JwP5nLCDPnprWwkiyyXSgBZJ99dEnFctRjvqzKf4QXnVn6WFq5huBKQHnpNEzT4JqHYgaBiHjxL8i7c",
  "key11": "61cVdK2avv32oyK3UQStbRJ3vmfx8hLwmZQ8bLrcN9Yatcd16LJQYgAQcNf9WJLMUSLZCDr9LYhcfmo1FRKNfp2c",
  "key12": "57Ki6o6DD3ceg777xEnUoqoXD8d8pu4N1jk8SkToQjVDBpbKeQXHXjecQUVFD28of1SjhijRqc36ryggDjJuqEQt",
  "key13": "5xBXkYo6PgNadbarF6XDYcpL8fnJMNQrSBDtNSCiyhh3go9n1Lc68iRjKc7AZnv88fmARZmoV2uRZm3j7wPwm4uK",
  "key14": "3pTymxJn22dSt5Wb5mzxohjfg91sq1TWN84fyCZtgugy1d6scshfW4rDEVHnBCwP2kuraYeXGSbGvqPwcwJp8Pbv",
  "key15": "3T75MDx1ABzJHKYAdeN6NDBHwrcjHMvA8ynno9Rkh4bkrBSWJHWZJaPDMpitmqsdvc8B6ogw5R2bhWoLbaBEBAWA",
  "key16": "2Csk4eeYc2WtgRZB3iPqarcQMp1vFKQknVQJntLTAtnduHazRcx7JZBX2VQEsyteu5gDknNEBAJXrjdU2mSHcJ51",
  "key17": "xKCDd5JUKZfuRek7pVrQ4zq2qRzuaA7SyLCEn27yPA31grkHAoetWZuUr5vSLfedJuC6XHTc3MLnM45y8cEC8SM",
  "key18": "3y5F4g2DcHmX6wzd4PdMdYmqzFMaZd5cDDWdx2YpuNGwyH8cDrKoqMbn5VQvqByRAyrLfSX4yVUqNn3So3GQyf9F",
  "key19": "5yc5sqZanQoZ7TmeweV3RCkth36jcRd1fS5buBK8DGxJG7zKQbA1JF61hog8PYLLmw2Whtr3rzbWVwxz8YjW8czT",
  "key20": "2tYEaCbbu68Czfqkz8Kx13TPrHWDK8jf84yxJswTuWh1P2wLczxQiLeHGjwXLaxP7uUtyYuQ8kevb1rjuYMwnieo",
  "key21": "23bxzRdvf4j5rucnLDmVgxkpMCveQoe2oRY2EVmm2zZM3M1DSJHP73ZYtrduUnWMwbQAfpvAXH5Jx4KuwqM7uxzA",
  "key22": "4ZVjYqPZKwtBzBjB8kbJJtu2pcjPhEkpZTenhMLQHPgdUyiW1GruW7CzVwF5Vkpj6SoMg2JUJwXkdn918BZD3PQd",
  "key23": "42MtnJ3RSGG9y6eEV4TfhMeba3iPbtbbFE8BrENAgfP7wogjfmXAVRP6mo9Jj5wJdETFRhSDWSt9NnYG4sySdeCt",
  "key24": "2Gy457SV2o2hByJ78icKYznMwgKf6zRdqfKQCT1V9Gfa1aNMzvsJzWaHjtVg2u45E5mUZsdYrxLSVqYtxdMzn9WM",
  "key25": "xwbDPR9bDepgRJrLajygTnKYRbxr4bTSawR8zd5CdN8W9fY6i4Nm4igzhsDcZWMSxVtEAoLpffSvDskQcxNjMzT",
  "key26": "2BxWEUorgsXQ5F8KSWnNZQrMNjEa9imetdu7xkfNwGi4x8qaXjKe82RhjTkos3pCmoFKLGncRFr3hHqj4kKsmWeM",
  "key27": "4XaG4tTCundy19CwenkbAu88EATC1hWZqDJxYwC5imznvj1iprb6KghNGRoCWLNLbngjEtQs71mcTpP9HSzPSnkL",
  "key28": "3TvpgaEvcfnjmpJHRrH1sbKCfsdnXNLymhTVyiZg9mccongFWoUknnxY51qUyExx3LG22q8a9vrrrKKPRFbFjuVA",
  "key29": "2JA4TEf5jBoJEk5yaqr3y3gdKc9sm42dg9S964oLPAYRwwia44wPcuhadvMnNUEp3QZabx7RLMhwJMmkUeEbN3Ea",
  "key30": "3QS6477ZGucg7y7LncMqprHBwzbAJNasDmD2mtbXVHQCDFMjxtCF81cjor7WYorvArBZJBGDfwGD7xx9LxGPvE3j",
  "key31": "45NSVfUhqLDTvPRPid16ECa5frL9aqZhSLoh1mzXbmioD9ot6VnkNhobTx4x5YnRTAhJVH7DhunKMbCG2TNhsM3X",
  "key32": "63yzz4axBcRvZvDEpd7vtiNkDF8xsYc3acdwyZLCYv6MWVKqptcEbMBA4c6nyuPZ1Y4oEp2Cdqzhshe8sm4dvmvb",
  "key33": "51YTAx3Q8h9DpnmVr5KRtswz9Wyudw4cNWBXTFR6HqTob5VGjPGDGJCuPDdhBtkUQjwv8XzD4a7yer4NjLkDCX4X",
  "key34": "5yhNkMqq4Esho5Ps2ZX1NUMHobmSt7HzVSyJ3yRqhDPTV4EsFgeQuYwHbuGJy3GJm2orNeZWHkCDxLYrw3h3gG1p",
  "key35": "UaYHBstcNefQViyMkVT3QAfZkhJf1TLJG5zFpkt2LKB6Q88SS2EF8NviWa4ZepgC3HBGZHRCUBYasahXAZuZErZ"
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
