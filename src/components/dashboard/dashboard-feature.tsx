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
    "5k5hvBzgr9HiRM2C3jFoM5qMANxn8FsQrBGXxc3EPRj2x1923PqLa251WzXvXAiRRLRhGP4TypCoK1GV6HCfk37C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vietXnEGqUqc9XAimxwcbiEknDxATHFV8mPaXybKsRQ2mvsRjzL3soWnq4dJuhY4y2e4mM3cbd3MkW8hMotUgPQ",
  "key1": "5FRNMAuPGjGeaVhRSh6VZdzh2E6ST83hj2HGUbrhNf5XzFNEfCtDmFsrbQC6VuiFvSXzGghy7LwbXj81tcPM5hWS",
  "key2": "3ADToGnh6mFk31jrCnVQKb88SXSvWR164ywMprrzZ6PY1vxM57dpm1DtwUJnuLWq5PcAzZGpaVby5isiykTfbRnD",
  "key3": "HZRExc5kWGFATytBU7zAeQgWinw2kdYwKxE18ViVRjGXzbRpLJBuunG2TBLj5tGL7NxfNEmsQP2AZk3HD1xCWSe",
  "key4": "TMuEPdRUxPhsVRtUtZ9fmt4NLxafPjJyndzfCrpPJep9RN5RtrAQE2LZmjb3N9pGgUjGrCcSxyMtrapqpW4Lmg9",
  "key5": "QzKXq4zPXCXRANFTrfn8b1uCnLXLmSs7GFPieCdihokkNseQ6WL3ifhrAZ4uMFs2TExPMPeWyqvkS4o34brEQ9J",
  "key6": "7wS7gSCLHVaPYoMnNe9zZx5ru6qZmcGDn8ZoKC2qFzKbGMyfaCP6gCJgf42ZH61cL7u9DMQfhEkSGGoqfmSU6By",
  "key7": "5N5evzPwLGPz6AGAyxF5RrwqUPFnMTKbfjpUG4TjEdGFw9w5ABvNfj8qqtTKkopuSXBaf6FNKo5zACtH8UY2DJf9",
  "key8": "669ftswE16Nwbr8aasYcCgdRAdCWnGWxGfrUbKg51edAjRyembEXUrkdoxdQAgc9NPf7Q9yGB2YuCBP5nESKXPce",
  "key9": "5kQURXPE5ma2d3F351LxucfvAYuWF7ewTmeqAQiuP8D27BzUA2PpPEcCuEMjmkhvLNBADnEqN1jKxB8FnoCYAzWK",
  "key10": "3zSo3gb8XqhSvQiKz1LHdRG4SYUfNcdNmY7tWUAdmwBxxRjQcAYmUwEyzYASRupKVsLEpWy6jtdJRwFwo8g2yi6G",
  "key11": "2gyqWHyyr57xdq9jQGUCkKYBuPyLYANhUsXbb6wJJcqnTukvzza4PoZskmvb3pNFNK7cE58fsyAaomCEsoD9KEBt",
  "key12": "5jjNiurgZc4TUb14tU3EFJGmo2t9RrHnKt8ZQyV7s2Nc4gZx8gMY1tmZaas52WDdRewFVD1fa2FPwe9TFE1JtoFi",
  "key13": "4dSrD7UhUGvE5Fqzwz3n2RGDv6w4yZAacixJA5hdzU99N5fgxnNKA7tbJgnM4kRPUKoNBkKCSho5MYkkQhBXf6f3",
  "key14": "51Z8gVtURxZFnLvUUGvArDemqXPTzqdQD7c3DVRwKEiHGyAHjVTEumRxSmcVaws62R4xRSi9aHXxKqUdKrUdnLXe",
  "key15": "2W5ATWafcDtyKbdHEWeT6SY18wHPQkmmuVD4DQJUiLv5A6uzMHEXv8oe2SQ4e4CWse3zAJw6HCbiiMc69syWFzi5",
  "key16": "3uLpDyVJcCdEdmS66W27XqM1CHV2q9RJ1wACiqnHswUdbcRfDFrPCDcdMKsBNC5RDZbnqjcoghU42QLDXhMBhtFL",
  "key17": "4GaArCX2rPRosHLemPD5Z2YwKQoMdc8k2voeoiurP7iy1ZfWyEMxtxsDYsv4mtYKu6ijhMZmCxLSzTRQBaoSaoDJ",
  "key18": "3a6GGLWZGC5qqxhxS779iE1weB7h6fDifDgk7A9eYHjrqhske9t8kunsa2uibM77eaNk8ttpNzL3karhvMjkYdqy",
  "key19": "5wsiQ9iBU61hHFndg7Hx3yTqFJ6jXyJfRqjxVhyxf8tBWyn2PsRX2a99DFXPMUFg1W3iwh48LP6g3Ga3rsbxUESA",
  "key20": "dZqP4o3Hg4rPVYrabyC7DYjfj6gjkjV4C6U8GJktGmsoacrjCKTyT7V4KkS2Qtd6b7cKxp4AHek76e1PA76yXui",
  "key21": "36obAwMirEEnBgQHpWhFCFQ34BoMuzCFU9D8LHDeJsNjUKPwWjSURi8y29UqWpKFcLJQWUGe68gzbuPbThVD214A",
  "key22": "22Wvu9hZ29ZXSWTY5qRxpWgCF2G52MphLv9CDDXj5qupy9Ua7gS5LpYwFh259pNcXGo1B4zNGVsKMkMZbrryBdCq",
  "key23": "3h3qPB5Gj394tiDUqeafkMeWwHoR6QzbRLZPHUH1SithUWaGmVmhaFQWiqfg1MrKXXkXNG9UqZYB3pByq4baWFkM",
  "key24": "4UvCGqpQhjhUxjHEHoRCz8f83Wd3jM9g6UfdaYQeiACNXdhhZnWPrbzvZLjWb6smSuKk1wcCTKg7CacWMB7UJVaH",
  "key25": "3C2zCv4GG9FucMtpjsPrT9o1d3tMHbS6DnTudjTW2uJokibt4m8JD4QmQwQwGcT5kZVAcACsNXEC7VYfgEx97usA",
  "key26": "NiR2R2QvrA9GNatTvMrv3RhRWht3B4e5daHxMC7LRwzj2mCgHoAUQyAZBYAsco1Rr5YfCoTC1qnaYpTr6kaPKRj",
  "key27": "2KU11b9RaMpsfPp1r5Vm7eViV42SXFr49Tu9mdesKNoryGQDUrVwXSfVCRxBiZkgn1ie2FemrWndevimnG8ox6Yf",
  "key28": "4pY1V3XoGEvZzWb88eVbpZkFDoAJoEjsYgGj6tfo8JGekPynaU8P4JTF85AMf3kV3WqSzVGSgzFc3YrtQmRfp33w"
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
