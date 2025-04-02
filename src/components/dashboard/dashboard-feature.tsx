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
    "5CpfLRDmSRxxyr6TMqfxBL3WKyATK6TXQdxqg21T4VKa1LzNmJYLpUSccMGqHF22uiXrvmHdusK1MRvmcHJdpajM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8CFuXgxEJgM1thQgKXcKj6xdM2BVAsbtX5eBaL1VC9LVMDskRfeaG7Vq3b5HVyeat9rJT3Vj62M8fDZWbKM2FNH",
  "key1": "2Y7RgUfP1ARWFP9h1mXDnnBz9E5aGrinGXVKRNGDMC9avup4UjyGTirDUhTDnVS4mPQgWcoo68vvvDcLhReGMiuh",
  "key2": "4SwEVi84GTBk1ujJNBCyAFdSHUrzrWAa1BzdNzV1XRA2m5SsgpoAuqHhvB5mfPvEKTCJ1QRF7nbcWu7TPZtRZhbF",
  "key3": "2rftkDAe9YE49XgdisaMH6mH9NG2rs44Pm7DzxCqmsHPDwWbPVDZ5AFG1PvZ6BcowSoWf1xHqAHbFQoNgbhtwUh4",
  "key4": "5rPBduw4giuBF66eruCXkNb6JGKEM1sudCArHeyJaQcLaVd5vf9FQsUV9d3ZUwzJpsCa5JnQ7ijYYULZ96WbFWPe",
  "key5": "3u5jruXNF4YtvxxRzhj34ZMSGf42sYXfH1zNaAK19XcLpwPHaSKWzom8J4Xap124oSAoe1zxnsM1iZfcSrt59CwK",
  "key6": "2J7qyn5FAb4HFntuyoZ7eyn5zpKNq3c1ohKfbh3BDbKuhU7a84hL8LHPtUgT1xSepURfwm6YDmDXiCzK558S7Z21",
  "key7": "PwZ3wtyv85EoTs2pvHDTmxh2x9YX42DvTE1J66DWTKf9AU292Ur3kRM5z9sdAgYL4EDXfseSpbznG1dosnNxF9t",
  "key8": "4uJM4pietLGyw9Jip24iWgWVy1VQeu8uC6c7XENySjuxSfR6m5UfvDPSpdeyKgsp8siMmKshSntpZTakQwSv3mMf",
  "key9": "35zGkG8g6vYf3ksJY78Tx6T6CnXfmpCAdzWbT69jaDyaYM3dokFW43y9bW8E6U5eTUy2PRbctjfecSkQwowc8cMo",
  "key10": "5tGgF3T7pLva1gNeam7uBRRGtQSJXWSGu9qVRKgEbnfAAN4pR4BHMw6zPDnsUsGXTjrUYDPf1qRGFTjHpMvYfDbR",
  "key11": "bZMC9UTtcYZWB5HrW8ZSAemh2BCVEmemXtsRwtiXzrQTLRhrADA2aVbkLpVx14wqFm17s1PaLRv5eZNHcKdLfXj",
  "key12": "2ZVn2BBUVnhAriEzCk6UqTPE5ttL5yuFwKYD6wBLc3KHUN8N4TKmFy2MhXWvVLX6aiGoYXbuusDizCJwSsS49b5A",
  "key13": "55bA158RYd19rf5uaEXC3ZFecsdnLQ49AzzJzDbSfX5dh5zbKqArUG9HGMxV6FdRbL9N324bCy4KZBUkt2c9SpGP",
  "key14": "28fTsDHfXDsT8XoqZE7CQ8qkTdbH3rBDh1qRcY6XaTACxxUsHsZ3RRW52CpJv3vGz6XLFDihiUNWRVJHKwJihDWk",
  "key15": "43DMiwgMsBcNs7dRTMDbUFtL7qpVbyomSeaW6Q2fPZkFSS5y8Jj4oy2wfftexkPuyeV99Rhxj93ZyteFxTbwKxF9",
  "key16": "4EHB5XY1UBhAgr3EmstKbdmCC5uTLLx2Jsjh8emzDKzH2DHR4E75vN5YRsTs9Rqo3nKu5Cw2RWPsiNJ7QwW3t6PS",
  "key17": "2YW2cGDsWV3oSRzRZcHMM3kEeQpFzEqdGJHpnEhYVssKjGuMDYBKoxC1LCBgXRHwNMfAxAmzYhVxQjwttna9dWuH",
  "key18": "2ofrwNk8Z8hW2eESxRtTnELcQAdGFhWwmy6gfj8KqenRKD87zJCWxdcxf83RaiEpjgbvDhoT2yqcY8XW8yXSVpZD",
  "key19": "62nDkSshvgreiiAZH25fhmAcGHvVwwxWRiBzsEbRWQMcD2g5DnE9EE5ceVeUChtbgtf3q9BjEBXyWP3wfCfaDTF2",
  "key20": "39wuWUSzdchPzZAKGPxRugtjTXL2CLYAPYUBbh9vBbfghEjzZ68Abzg55FYaYS9zAEbFwhVGsJBDErqpz1pEpitb",
  "key21": "2vzYCojixVVFCBb4yqwHr9sT6Bqz2jxMWgFWvi5dGrtSGvMwX1Z4xY96yhnzpAxbetL41NvsRorWyy5req2QZhBt",
  "key22": "2DVpXZ5MJDp46Xa32jPx42EMghjp4DwbLJ5MJnskVBKyaTwoFaDP5umhG1YDnKouayGxyJC288Q4LyVVETWFfd1e",
  "key23": "28VinwaDgzhcbDF3SskHgr7rgnGq5rs7VGxdsYi67pvqkJEJigeqThczwoGp1co5tti59qZGarsJnkp2vDuMAgmn",
  "key24": "3sQNUySSM3dHyY5UcFPy2GB74TzXkNZJcHztEKdPHMtAKSmB8rFWLPpkmRpYNXcvywweVxTUGpvgidBQynWjKrvE",
  "key25": "anWdtT3Gpef7hLvP1XadS3a4n6o56ueuYb2jgKRjqtM7z7RyyKyaJGDWfUeqojogSRwoqECicVbSVqD2vrWoDVb",
  "key26": "31MYhfNWzfqfwETCuficxoS6dYNLv9Gjt7aM3v9Kkm3U4MtmzMKjBTDJyHvsMwgDJaHLZiBEqjCMFQQyQQtwPHc5",
  "key27": "2vcyPWAynfJHJaPNMydPcxnXvsz8eoEGvBCUbNHmBdoJyiUVZgWMwqbNrTNEL45EL6UWnqyvYhSfb5Zgwk2xwgC8",
  "key28": "3RdLYc9EX72GQcKjkapNWjF9hQHAK8BjqCeTBwwWtiWkmyBAk2DUFWKh8qphCe314517bXSwjAxQQwhge9dKxhMo",
  "key29": "3TTPza8FQSrvKkGv7vvjDSydYNgLJ8dsoMuYB3JrRfVBbY9Ej364XEJzJ7uB8TvGVQ2YSVYDSnKRF85b3Nj6hKhA",
  "key30": "3sR1Z2K42rfUwF3jmyCqtUbvsj7tW3h79DUJUxvy7wmcqQNNJgkcVsMhP5n2YWxLASAo5Bz4qstjNQSeg2vntKMJ",
  "key31": "7dxwq26Uj3XDq74LSSiKoZdxCttvMLM4g6MK5YYBM7QkGmUyxY5f3kMnoEaXM75upuk2MCPmEa5YAyK2jwdaVEE",
  "key32": "4qkvwyxnrcDPdf6enLBoGwDBx1Pgt9RmzoiDc4ryErjv5AHxstnmm9yc24SsncKzbnEAYfP8SbEcKvFEDvsdarmW",
  "key33": "4D1BpPAh3g6SYM7BYYXgpBswJpnvq72J3MrrwhLyxnBHQTg5SH5G5tbq28FTwxp61rqRL8qUVRjK5QESFaJRvEK9",
  "key34": "5Ak15BDQWfNxoR5m64X96HadoWgeYfWsBBNpr85y2NjUYMGa9RZaHnMyWc1QwYi2L3a2swp8DYMjy3gjtFs489RD",
  "key35": "2BQa9cJL1YbL7mArmyZAbcjYCBzbqcfKcqaYgsfcYBxvtEXi1NHUsi4ZA2QuZ75GTVLdGm4TbLWxEMY6Lykd4vA3",
  "key36": "3jVSd72kbN4v6xts2xkkJc8C37bxjYzHKmjEHaawEJy1TLnavcRRfDfYRydKMtn2tUK9kPC9ifTNuCVcehFLwtj8",
  "key37": "2KbKd9KwomwBL9MXLygnxXZxgz3t42ciQJCQZRaTdJRc4Z2EoMhQYLogXN7eGx2Qwcy254CcV4vFoe67YaRzzHQL",
  "key38": "3oejuPpreqFKJuzoBbiRternHxskao1W86Zg7JACAXefK6Tdks89G6iJqqxgLB5GXSAfG55CaMVsv4MJYpqj1oNx",
  "key39": "5H52kM57FfizF6vEZavsByanQmWa6rkx1bYw2M2bQid7bU88V3BNeEMeV1e3Minh9rPDb1S8vcGbD3JPyCigRyom",
  "key40": "3Sk8Kvb7nZDyqXiGCruVaFV78zcvUS4sGTf3Sk7rRmeSQMcYu6ivH4zZbDhbtNqxnMc1AUFipXceeq3MQ9F5cZz3",
  "key41": "2CMmdyuWJPM8Vwrqn6spgSAsNm8u6sY85vWS9m7o8wkNb5mmUFLG2SiFiqtNKrCKmiECiee7aiJTiDEthaG8GEam",
  "key42": "4hhsLBRsJTqbXAZPfQVpHvggdhVVZK85NC4CafSopA6xam2gpJjJnxsjepAYhsPg6eT2yez7j6sx3fKuGYcE5Gem",
  "key43": "4pGeUuPAr91znQkksdA4gRGxN4GreKEqJCucp7fsGPSHCCNA7MgvcDAtWKec9JE8cLpqag3pZhdgzzZcKhi5CQ6e",
  "key44": "64pBTUM5CpEYGSKnJnThHW7fkyTx5mMsLKZshDcNinswEgcajdFyVmQZiDhyyNBc43t2BbuB73vCPDYEUSnpsMZd"
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
