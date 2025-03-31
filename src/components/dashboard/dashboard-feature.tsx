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
    "5gFDcuTsD1frvtpZBWY9hp4EojkurmhtJbKU3q21kgA13VEbMJT5Ys62bW2LqGjKHMsptomzyoucCEDeTQ3ajiZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fiEduX3RwfSQCpoHTntZjFYCbHp8vq48tPBdgg8xZRCKx2kYch7CqwYteBY34v3EPyAaWmNkGVMjAQN5VRxrYPf",
  "key1": "5zN1ZHknfCyRvSrnYBpt2ws4v4Zi5JCE4Tkcq3b4paG5oMMLHt9N9pWN5eVS4SLwXCU1WJt71Qk9ZZ5F6aJXi1pz",
  "key2": "2BgLLDDv5stzr8thRLoFYxY2Cbu1gEUDeeNsgEWyzQQxFYtrzz4fjHnk8hBtV4NP5w1kGjw6rPGHHSnwrTb1uBkt",
  "key3": "2N14rmhC4RFz2sWVHssxPoztrk8qwqik8ZugXK8WfCTRBJmR48fqSmp64UabBCGzy1A3d6D7v2kj1eu5KUProwjc",
  "key4": "448Mb8jvLcZRrkE53ztpNKbjSmzjqfosLdAt3PBu7MdVbA1CWqiUXVtKZmVK17WTi5iXbMB8pKzasHMDwawBKakk",
  "key5": "2xjTQQ2aSvJRGptfrb4Lm9F6z18zvFydpuByEVPh2QZF9aytQdmxJgg4XCt8QxkqGZ33b3heRGkC56mhT7JBJ6nD",
  "key6": "5jMvztcAGWJELxud1qjzcAii8KPcbs2j9NAvR1YTuQSHnFHzBcj5UAbCY5fFjJr7YtMXWApjjyRFQSh25vkTfUSS",
  "key7": "5Zvk1G9XShCF98ZmwEBkzA4Z43Wee1UTLDhhqEJWUnXk4HWSdn5Lv53i9NaSrYmGGhjgtWJ6khsSizeTSQiRGhu9",
  "key8": "3JJ5kEyKTQ2wkqfmq3LpJ8y1bTKMg1S5JcjY5r3GQBwh1q2T8KcVBrM6A7fK4udgXn8QfvtC8nj5Bp2s5Kn48tgX",
  "key9": "38bGnTqac1fymEoEHvWFro2bLEYvCUqnxjtbd5RAEfcAvziW3BNWxtQtJ32Vdvp5UP3mjh1xuNryh6sf7t2EeczA",
  "key10": "qXzfGXbZijvfDhb4LGo1ZV77xnYeL8yk8UhuWh5iwFQxiToJ74CvC32nnS5beovmpd57bYycfHPhh3NfvY2nSPu",
  "key11": "5qTXXDzGZ1ZaXkNaTGA8oAQFwwmKAPy9pYkx5PQ2jUo6ZKUQRpy6HH6i6smayaBprdXuQnrwiZeJtjeayqRhtACt",
  "key12": "4PNc9a32Lhyqbd7Teke7dPMCe8KygTV6W1vErvUbuT7ZoELjsYhLr93qbYdMAHXrHW3ed4jT33duBjWg3MvQgt2Z",
  "key13": "vjRzW3PeSugfbmn1haUkeqZFJogc2s4rPRcxpraER81bbdbKEuee1jevDzfqGfVt44y9DtTPzQEhCBukZjbYrPc",
  "key14": "5K2WLkMrs3c95E5UQ391ufuze8jfxhtcL8YRmi2w1SFJxZAGBpcTzQQN2xU8mNKVFe4KapddPjPFTmX6kqzmLcxE",
  "key15": "59p1i7exEgqufjtpvrdckearrqxcuNHGpZ42uPvhbMWZt6YxQW2vr6NNy4bCv89yEn5vNvvtDNG9pXpvcNFkbhJ1",
  "key16": "5P3H3EEN2J1oYYVx5yNjHXFy1FWAkMHaujA9YgSfgvzKnNXTZrek2SWJHYGJFpYH9NVetiS6hpy32GoYewjXyvQx",
  "key17": "4SYmtkYRiaau6nvAH7aUXutCjuTAM8uM5hEuvFyMZT7TdoD4jaxU5iftDhAHeArvnnN3KALkLc39GBWGk9gujG62",
  "key18": "5ivh469Hq9LkgkEfhCJtoPUbTyo6WGZzQagKpVWF3S9FUojDR8gzpLMQnKN1cRv9FwJe9svekUF5YkR2AECSSfXC",
  "key19": "4XcbHAwRPxQY3c15NukTyXkphNdfeLVS2ffniBKo2LumHQY4octD317vYWJLs9EjKcw5YQt2FSmSPkXG3FC7Fmia",
  "key20": "BWmcwu43QfMwn7LY9oRTPesDb8RWAvVxx17ppCXa61689zgErtWFdmSUf3eTPtM4MRmZ6hJ5y18o7mr6sofwkTU",
  "key21": "6WoiLMPce3rKGiU7YeGTmdEkfmdtVszvUvSB8FxV4cxCbrdvAL1ePFfyrPn8V2NpfgdEMmrvzUHSKypcbmVKTGT",
  "key22": "578MBF1qwaYEAkAehsVeV6CB8obMxiohCHvZT7qXdYNPe4UZYNC3rYr4Zna6KqY4vaEmhDtwG6ohV7JbJ77Gx746",
  "key23": "3fketdGRE1zc3YqMMYiYuko3zurbxf7gJG9CnpCUk8SnkYxSUCoXbygE3MNeuabroE9EQ2jcctP1nF78pr7q8F4Q",
  "key24": "3dugnpk5CyjDCLVYCH1FxBeuatgDAFnTLixemXULZDjjCm84oxfQdWgJoZ1ZBW2gb4UR9vuMQsdJKo5MfwnPh7wm",
  "key25": "52p2is7Goex2u8btUiM1BixwiqC9oRuT9NKQVDWGTGainaAEVjd4rh9fD4Xj7h1fR4pv436SQwXbAvKnUYq63kdm",
  "key26": "5ZDYPwinFRFDYRfGPVgCTqPwfbif7snPD1ni2cufV3NvUzKuFUNTjgEu4ix3MfW7PJpaLafxxcD5Nn7LK2zZR8xV",
  "key27": "29Zk8AdMcboViBmog9HagvA5BBGdyKxHq68wbAhW89Br9mLVD9MX6tyX6FVhtxFiXotZDJknanVUxCLJGcWNscyD",
  "key28": "4QH2hSc88eTD4ToHsyDEPiP52bkaTBNF1wrysBqX6pwxmrtVSVxG2t6Yws6MoKGT9SnWXenQ3YJTYJ1v6ptY9Qar",
  "key29": "572Cd6Edcw3v5qKr38fgVp61pSPhmVn4K5LJqfBCVDUpFbzMnkc4QUb6dE3rQEuLE2nNKr31GEoyWr9oke9yDadJ",
  "key30": "5eb3bqHBq7HNZgVi8hP8sEaASPJ396vaJhqAC1NSWzmmPcAYm5dRtN24gL5L94nabSz9vaR1VQ9Hzfg9vt3icP4A",
  "key31": "4KDMc7AiA2MUN4LvLwQ9C34QS3S5h9Vs7pFKAVisi2rTrsQUuspuaSZ5u6ydAT4HkAU8nzp5jNACvyDU2ViH3AGe",
  "key32": "5zGTEfHnvM2N9513bNQhCE7kmUmbeRJnJjf9B7qJFyFbXD62fyfupZ5jCmWoh63DRLcE2hU3DvBQo7TjznG6hDBU",
  "key33": "4tAgKzqUeyAZSCCwUciTpfUT34eyX7k5PS1qt6yitcmeiF6kBDSgSGMBPjS86sN41G1381rfeoeqXz5XapKrKpqB",
  "key34": "gkW2H9ZRSvXEXp2NPrtxqMj7eUSUYLGFtCeWmYTvJCWGNCPRVnd91CBwQ7VfAme7YJGwHHunjLuHaJ3kCAccKDw",
  "key35": "5LZAHqVKZwSL4wNhLbWwsUkRcUJ49HNVQMAQcB1UK4eDpB6C3zBMXNuQ1iU3hSPx5nueM8Z8PPvPCMEhWByqfxi2",
  "key36": "66tnmKLw6JVkHnurooaChnQEx7Zqpy2UTrkhCW2xbpsXJwgWTikUnTSnUaXmmDE8BZQYpha9iH1y3ZUAmmSFaMJ5",
  "key37": "5Lg87i7TCgnJowAAjV8HyidsNA4v9JERnemUyPk9GbC2a8sbjCGxpD4LJjjAYaSQE51r3LHEq41uYsEx3wRguCjY",
  "key38": "5H6DbFnhaELLUMsNPNwVehqQ2JoSRs6ysJkKSCtvHBfLBdHKbzq45GNie7398jUdWoWQXKhzSaJiLNoXCGie7zNq",
  "key39": "3sq9ir8zzdRjfoMKu15vfxZsKcgk8GURwtrZ2DQXeqLFdfVqdHMEaqmB6wDYP6L4dh5ZsNa2sQW5uFx4EBEDQaRE",
  "key40": "64XHn8VW1U1s9Z2FWDD3jViFXA1hi5xKUhr8ntm5NGLxRRxuVS6MTTyL4nxJp5tpziRv6d3HWdzdmt5LS69rcaPp",
  "key41": "2PPCsQFsLzho3YuypvkVcRLXUcBGDBBbX9YnXufZ1rg4AagnoJfyHVnsT5v4Sig5DdNfqQZvsNJTikD1Swo7zc9X",
  "key42": "3iqYaS9uT4As7hSGFitL7XwQrDhvTEGER466ziaR9ZEn7JmytPvye5dc9HeFTVcBtaSseLVx8Ww5boDEPSCC4afV"
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
