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
    "3gsNcpJgceL87kJB7q6fWpfPLh5xkZqxrziYCiEUHNdYesyYPU9TZLygvreohq9P8DPKLSfBB9Zavqty11HQ3XpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5akwgh1HVTcSVHUic8YbemaKyCoxgCLvKCWjJMybwJLfyZ6xryAPYtKKNr1NFovW6B9fWBnruZdDfmAuhphUgPFT",
  "key1": "2ytsvcZWk4GXnFZp5bERzCwCXNDQdnNnYrU66pugtLu8esezXJ6kJAkAa5GKrWdemTSSRMn9EkEQzySCckbDokqz",
  "key2": "J3xFf5gLuw48fwCZqmjhPhCzKWUES3W23G56Yeeqe2VCpkmiD6HoXvZVqJAfAPsXEuWyHfUaqpN9541k8H1SN43",
  "key3": "2CtEdBXMs1mARkGJ4NY9XyKNRmpBKSvd3N9kjx7zAJgnNx6PkyPudZTco8KGocvFGtJqNQptVmLwFBATzZCLHkBe",
  "key4": "pNUKhFomH7H7NgjRmPoTZnpe2Y3ie4obJutFJducJrZK2E16PbputgoexVTZrugMaioX2hfQtnkPeBqBxcZvh8c",
  "key5": "2WJZM3tynHh6P1YtmJScqCWqnaZiPp5FC4bEop1NHpU6X6t7Wr1JVjNXu45rUwaYgvuUJnwVKFmepTh3UuFacjxh",
  "key6": "3frNhD2hYt3gLtU4xKb6gPfX5wm8vmo7Kz5edhesVhs3a2CtiVtQksCQL9pnXfYNp3jhn2EdXXMeLVqTmZECgRM6",
  "key7": "5aJoPAjcrbbCMcrpSkaQGtreUS5rKpNT3CgexmBpvRKwv4Q2pNi6ihfCqnnwfW9zSVEqgATfWRabzp1KFZFQdpDv",
  "key8": "7Cun49PqPEpJBa8oourgiZRe9oweNTAwwLRyGQ3385WcAMPHx13nKSVoAniXUcrobbLQMXUrq9c9DnnugPcGkz5",
  "key9": "4UybmP6sYq3gE7HPQo8Tx8Z8ViL8UoCrDfQXvHivbiJyT62DJ8WRqcUXCXcsrhwg1WvgnWot94TLxVZYpkq91s4j",
  "key10": "41syEmTnLAkPJmLEmzfaq8JnGP89Q1ogHfRaWamSKVDZGaGr3ws9FyAN1GAkVijTiP2SKije9CKAJ93Zwq8XwcEi",
  "key11": "4tVtb3pT2vHFjDaMQhGE9wyJgecEDoVT65iodoYdTFxhPWYSsqoXJoKiV3HGSqAsaazU1FibxQNvL1AW32DCDwzy",
  "key12": "2ZDwvZcjn7dwRto79oYRvAV1sLaL8cosUvC8rN4hX3aQ2u6KCvn1KHsdaBtThmYrrxwtwcSd1aYeGMNuRieUuWxZ",
  "key13": "YLQpydJDvzGVaNpwwauN1nw5TjHZNbtihnvsaLxCsB75FSYmfDjo1bcsRKmoYh5r41cUUkkWDtCgQVyKQCcyA2E",
  "key14": "QXD5CC6CE74GYcEsuPvJRumma6xciGby5bHtBx8HZXG758h4FU3hAtMLY3UYfisAXSCPG4fGfEARZA58LHGYPoP",
  "key15": "2ETE1nE9ydaoHNBJ9zXqFiNzuzBhhh2UjXKABpxGB7VBCaAeddZ6UKN829dhqVok55NaqNX5PL11viNuTVwmgxum",
  "key16": "3VyNFexUmu1Wu7h1WD6CYvTFtCFDNsdwZRVMTDGKwL6wjcpeXDoUXadrUWCv9YZhgyJUqZVPKS253FsKuJ7Zm3ce",
  "key17": "6tEmRqyjWkY85DYqVabnHhyUUyRivvYMthB9ZeviJn97zPhKwL9ZvzCkSHMejoUNj97i4hDGVNubo2kLR2QUsnm",
  "key18": "WopDQRFnVNUoqYHUymUjzpfUFvhDueKwJpFCkDi5qTpFQQSpH3BmTQNVsPCF5NyYanzNWSLfDJEd6Rg5tLcGE9X",
  "key19": "2Xb4yEGwg583ynGQRaNffX5ZtVLYx52hVVgjCMvTxQPQcN7Zxhvjq92ecqxdkDZvikUMY37FwUrcMGTJRJLMGTcr",
  "key20": "45MHnNMetrFG5WrQFHh4uWBYxzQ4owmJ5at5uXirYHPRH5i7NNwJARnkxjAn6FFzv4mAdWtUviMZbvdu3arSHiHk",
  "key21": "394P9PmAwd68WpjhTSC6xCBKcxBbcExDY1yYUWiov7Q5bTRMFy2oDTNwcYepckBYQYdnUKigJRyLzXETHrHndo1Q",
  "key22": "2NBiZ6s9QZszBFAJjuQzNovyYe9DLUFYfuSR3e22EfdQtrx6eDEvD68kURggiLbLdNzdwhF4WykdFpAKh7URRy5y",
  "key23": "4q2VtXLdqLEujxuNQzRqaHz8YecehQZ5tshCXaBxmJwSKEhb27bpid5yb7oZWFY88QwakBv95pKuwUHjY3GUuyiR",
  "key24": "2dBQyDBYnZguvHrRG12jSHWUPwyWQA2KSLf92EXmCMrRPvRYXzWeWuoq3BZHJax2DVixg1oJURihFsPeNLzqtKYj",
  "key25": "5GGpd4rgC23dSpKMn74qM7NPy5uYMY7UJ2NGQ6eow9W77vRSnHAFWMTDU9R8Gq4PPNqM6TxGaGmDY58KjcBo3uGs",
  "key26": "DjMqfi8xgQb9yC1FG1xdB1ibhcLB4AwMAYxtvw2byGGhy38R7W2RVJ9YE3hweexF1bpoBUFx5RmVBJtQnvnjX5H",
  "key27": "3QWSCC9GV5gx4m4ySxPDGVJSPxGmfD7dfbqdaU7BSvHPoMq5u4tFuBKwyygCSrLvSZkhKstPk9QikvuZakfQN1Kw",
  "key28": "593MMWKrWJT4hzyn3pecnSaxMfCoVjbcDtmKy9qmKNJcLnfuuYLggaFNt3mRXdxe58dfjHqw9Twn7Y33Mkar26ja",
  "key29": "4QLtomkqrNnEEvcySTsQHzybMpu4B2oVXY9mi85ByfgjtpwEgU9SyQB23CNDj1aSaTXAMpBtC6Vsgy8ZiFzdMH4h",
  "key30": "4d1fLZkaqyhzFi9fGJBWjzirbnJbSxHcZqTLJdD3MwFHbEfVGA5VamwfNxgxER7mVdxik5cmMtd6NdJCoktjqkwG",
  "key31": "2qvhrkabAXz2TnNXvGq9CpM5h5zRw2mM9BWH3pa55WzWQanFjsfMWAubLxCHg1zhVwK24KqBU4TMSRngbjfVXQot",
  "key32": "4w9xNdmJdr39yqaLrQvm9c5jiNBUG1F61p7jj7ei69Lixg8ZwarwgpUdkg9gP9f8xq4R2N6mnVQCycqv1ncbUKXk",
  "key33": "awEr7phHHgJ7c9iWPw9hVMhdWXe6N5skBGcwDUUQQwsjdohn9oSJq7TZgK8qDuZbRLJbuihB6G2AVX5nZBZ1UR3",
  "key34": "4ZSuQoYH5zqnMadmo9VeyYuZgQsLGCShJ1En7NkuSkV5CTBk9UShP3PJDVimvRtSMdDkjE5fgdy6VmWJs81rhVBQ",
  "key35": "2jCVzUEgrH5EFr3AYkK9LL8ijfx7c1y4NvjuQNUhkktLCeNm55Nn8FSoSDK6vyRD1bkkijrDNw4WauV1FGKx3kgR"
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
