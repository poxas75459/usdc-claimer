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
    "3KW8kdwGRaDB84noA5csD96hrfHgoYmf85UE7YQcJARikwu2Q6xh8FeaAHzNksAr5ArGUvHewjvCq2N7JTyxhdvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ps3WJzXe7PVQ3ENQ4K5JhQKrfoLxsuX4dbg2G3aMU1Vn2mWYXhM9Nojq2CpWxWq2zuMFccPuXnEKVEDWekbcc1y",
  "key1": "zZ2Ja5Rc1C5WFFW7GJVZNomyyDfcYUEbgjYe2DRgJFx9h2h9HRNcdY28ohB2hkBDhynb32vpZZtn4CrbU3KQGfL",
  "key2": "3CQBmZhDPxkQba6HZFyDdUkNT9EDhumu2CjMA6vZ5qNGDYEPFkvJDk3iPSp4uRHTFzMEjHjoYdZ872ciC9Mbpsju",
  "key3": "2G6xhmohhreT3SNasbRhiuZxPT3LjcWTpPT5mzboJKNwqwFqSFnrkrdcMFpnGFPyWoDRoiYuqUXYNsN2CB2kKXsb",
  "key4": "3y1kbSxYWQ6jf19XaXuYQWwZ35nXJSQdCfG7d8o4Qsw5zgUy77RNQybY15PDHHSwZqJwWgu5184ZXGVxDN2KCP5B",
  "key5": "2LJi9QggVh2V7d5fbXgwVTHAovMSRpFKhzj45CSmxj3GqtWoBeQ2VBCpXeU7M8ZG34twm69mrToZnZmhpBCD6gCs",
  "key6": "4mZAcDKKrAAdGXqbSSNNy1dqevMR2rCiJS75pmaMqgaj1GD6hjCQXXqD5dShmyisZ62hev4QdwA55bEERCXhc3WZ",
  "key7": "vLk2rhevMKT4SAKogQPxfRtJXK2EMTDp2N9MbT219BxXU4ijLfrPFHUsXzbTJcZZpNSRtCPithh4yVefC3yxbRs",
  "key8": "4EdzXFvdfkQZdoUXHc9ujbjiDJcT3S4ZBcv1M3Ut2oVGiqcJzjKp6KRSupvbVU9Bt1nERQSELqnuPNoJ3c7aFWhS",
  "key9": "4Xsc94sQAZ62tWAYrz96MrJzvyne2TqJjBRCUDWQ7jQmfweuS63vxh6aqRdnTk5Tp34dN3Yu1tg7SECQMG9mJcn9",
  "key10": "343CDaiDcFsF8WSJWPm5KwrYjw1XV1DBo7G5zNnrp4q52rcUiC3UFUSwmWewPdySG4eMYBRP5Yfaym2nnX5VRcqC",
  "key11": "AxaZMP36QY2DcgKhyE3wzL8atpu4F3mZoicM7NRoqr9yGBQLEG9NHjBb1LwXW2J1GLk4nib9BJqkLycUHxHZJ4E",
  "key12": "c3Su1Bjx8SMnbHhYpCFGj9J9AfApQoR4C4N8u8829JMw7xSa65qXpWuXtbLAB4ZoTy8nt6zSF2q34DMwfkgHxhB",
  "key13": "5ULjCUXyutPfPR7uy5EakfqocBh8EGiMkEN8KQzE8ugeC2Ea6zv2Y4mXn3L651pVam5Q7bJhmecuNGJwkVqE5rSF",
  "key14": "31MRr9KShkzvymkxXVhcPKciPrzGoCqhDZnBkFS53HCgSb1oJ4J6hTsNYdkpmSKXZdcfjtvJx427fMhgpSKcrnRe",
  "key15": "2TCUvojviZvbzWeFrTuLw94EP8xsPvqdUrNmrYjxD7oCzWhVBuPbzg3emHpt5KzRXFpzMrBQNXtbt1E666QJ14PJ",
  "key16": "3g3HmFgTSD7CMcrHjw8pMqxX24MaLnBq8bg3c23CgyzLVPXyg2mJB4SfxSHdUeegz2VYbcmnJnYAw6Gi93vRiise",
  "key17": "rAveT3Mbxvb1bjwkEDLtkJsXGDwxDo2iZwgjxAPztix6bquvxHsKvp7hVjWTQcJ8SEWhy8ERUMhnJdM95SBphqk",
  "key18": "3SY7aqntGvR9jEk16sFhpgm5BLDuFPXevGTjayrkcckhw5WMATZirkrWUEGFxafLbKmjQX46zR19nVqugxRyKZnP",
  "key19": "AhF3xZcxbhik4hf7E95Ms5kGWkR4qs9uVqzEvTg7xxybXGoRQy8GtLbLDd8Qd9eGUDHwwgfUzzfVGHCeAKSaJFa",
  "key20": "5yxuSK8ibLy3yoJxPM39wgC2fCwRCFqXVNsXuw7yWyzqLDVXQtkGy3wYmhRjPznjeGEnnhoB53DLU3QXLDdSxxwp",
  "key21": "JpTTm6AVuns3Lpp6EaFFMefXNHyfhRvVo93h1hhGCtCsi5kmkhnjZEuDtamcS5wuZPHXnFJKdExjEfdY9xqm2zB",
  "key22": "2QdqC9QFZGzJ2uDwpEXHuXrvMJQNZJdKpEPAyw5at55RfA2Be2ZYhRrpeSEVV1ejFWSdaFwyXWrHVJRJiHsYRtPp",
  "key23": "4FN7Fx5gYUHLoD3YG3oSfKm1SMucR38MFXicWQVr8TcE5pej8Yyb6PpCGnyB1gWdshGAfm8qLsDCXBufRijBi9At",
  "key24": "zzF2xQVVZw3C7JvpsswmP9bYB1vJ7PukmHtkK8MdDtT2ciWJdxPh9zLpqBgztmZKvHAGefjfdGhKXzakD4jJJoA",
  "key25": "2mDr7DTCQ6rbyQveNWMsHejJ32uxrpAVznWgY54a74NeWngqxKWiXtQc4hehRCXyZDrzj32uMw1PMRHakJmJiL6R",
  "key26": "X5f3SfzgvN8YAqEyK9PFTCExKQNRpNscdJWyu5ZtNEVYAKSPD4newZv7ESviDssPyeFgcPBnJfCdWJdhfcas44V",
  "key27": "3mM77rmY34MM2dbNBnKRGZypADFu47aMEaaE6RxYZzxxtS3bZnvCuGMbzT7Z2eh1U2sWYdPojBVJDqqhbMoVftgF",
  "key28": "45fkLp3ESXYMiZBndRYmVYGdYwJhgGJAowEi5XrMADErPVNvGYcsRgxNWtNzwqyoCPa9oWNPA4Jq3dqVJM52gJMa",
  "key29": "chjNSMravrPA6E2J3k69u4t7B1icd1iqZmz5QCjHLrjYsnJ4CgTxmGMX4zgn2G98sxvWaTCguU9a9ZanFj6rZ2S",
  "key30": "2VkmZjCwsyaFezqUAUknHwFGPjRPWu15wJqQzeqJ97qcZo8HBytrbiYmrceVuvDx6Gu7QpidFpdSVYdC23hwrwtf",
  "key31": "5Kb3my4m1h2QzdPLG2ZK2TcAETi2aTiZ4gJm5L7juDRnSEiF5SUdYg8ErF7gwpsZpgoEM4zgdFfgrnkUFjJSqArE",
  "key32": "4XnF2dsrVX1tmZRPwaHvrJ6hcTFqWdi1BnFeXzQfEVTZKriVB7VJCcesZqSDUDxgfkF1Cf6CgkPn13fYz9gtVfBq",
  "key33": "3SrAWSghF1VksvpQ1tvjUrkgfK8UDXRb34uSrRiURNSc3kjF6XhHNmoVCondfvCmdUvXKvANSZjk5gESWoCGG4KT",
  "key34": "3Tmy1ZnXzxsmg6eq5b6JhkWLPtxVsKUooqgeHgJgnamek6ZzXvzfEFm2BPe9Qtqa4HsX6CW5RjuGqfHZJeEDKTL4",
  "key35": "4mSxoRdebtkWCfKyKcGLyqbh1FQozpoeJf3a8xrYbmKXFebxsBF96CGRoX1nHBRyWzVrHzQMHAQAkkEw1x2627wE",
  "key36": "3weSkKSh35yjSjtCi4kkbnZVKRur9LTPK1ntbGfzqjDmiqxcG8CY1YuVMfGNnuZUKBxW7tGS4X6wdaALXfzLHd8c"
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
