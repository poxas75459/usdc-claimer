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
    "54uTi9JTrnuHGhW2hTWxpvWLdCp2onhQYAbkYEsBKyGEd2uiD1wMReSu8F8RRHGzCubYQHoCawgtDAK83giSZmCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H7YvVNSf2D3a5URsozzKSgbT1zRfsx3Yph3iRDymavDX4p4NgmDN4UhYsx11fwzdMG1rq35T9CJUZFoSaVErfJV",
  "key1": "2WNLzWbVR91BUegVpSU3LSWh49YuBJmA9bcv8M9Qgb82ZvJDTiqtxJmJXuJPE7tJzUPT51EUpxRNRc6AdzBnYvA2",
  "key2": "3JzkyGEutjaoquHzzKnRTJbuGFnHiBhD8H5TA4GUNnUZrqNhrnWavB32RBNFMtQy4Y2t3CA3Urg6YLy542vWUuEZ",
  "key3": "5AxztSpwijVDBXGMovwDmMum2gqJZgZVFdGUmpNytTjW53A22hXQR9xgocb2QfhF3MaRT5KFfKVMw6iXPd1P3xB9",
  "key4": "3dvjZ1mTVK1Nsg4EMhR61M5HdPywkRu1ezcDDPLH6cDLUCNwJ1TwKhT2L5CsUSYPvCZ3uCqepsvzrGjEZqaoGN7S",
  "key5": "2B7hivAdQJXJqEdQTRmYqGUkgAn2k8DY84Vn46uk1j4JMbXxn3kpx2mHkTaJBRTRrvvQv9C81prvPngJwDsc998a",
  "key6": "uaxzw3PB7DQvnZ9rSs3eb3fWRYT3abGE3CLVdFp4s3axsST9uurbfCv8kw62sNZAUzsf4E92h4iVj5nKXzop6uG",
  "key7": "39SPnbRXG3jHnpMmF5c38g154AqLe44WSnD9XCTWWCaEBkHqBXHjVdqaATEeBaroqChxLrHxCwnGHQVZpbbfxtuY",
  "key8": "3uvZHi6Q6wsauaAJeBjh241EesfCp9bJSVGqxVtiL1JC49bSmYEy7MrjjtHRAv1djLaE1KLCSVKKA21jjjUZ7cfC",
  "key9": "55811wVMYtYtEA8RVxDcn8wWa7TmFTYAYyUYuRycwiA8Xbom3qHMUxubybWz75ZiS1Au8MMsSRgU534SXLPPNGUc",
  "key10": "3rs6u72sjtyg4dvhVakCNE1uq39qYycRPry32B3HVPJbepLchiM9FE1a6NLx5CrkHFAAwHM21teTNj7NdY345MDk",
  "key11": "fgu5KEmNSKPkouMpxpBZrDhqZcuL53iHjHcev3JPS7NUKcmtFfnio6nbHdaW4qaUTANLuqzWGT22nh7qcduZ3Uz",
  "key12": "5vLkWNtFeXWSy4ZMQxjehUPxycWgNzj8mAhFZkpW9Fk9wL8q9RAZxe9Cu16igwJYdWZJHr7vezzW3dRZ4KexvFXR",
  "key13": "zVgxbQG4foWYjwqH8XbLqn3YCae5CAEP5bzUzyyLBJzdJ9T2aSBs47p52sYTsgSPXSbpMLrPfcjqGJEVtXwz8ym",
  "key14": "63Dw4GierjXWmup9kbvE3Tm2PqkXPGaNHSjeNirAYGQwfCuRzmAMnrmQezBHQY6GneU8rxNZ5UkGzUH4HWR9XSXt",
  "key15": "29Jr5P2eLirCT1dxdrvFT3ekuugWjFBazXQHvAaTsJsoRsE4TEj47HeAAQd3VyNy5p7BdnRM3i2sjfSDBNFfoabZ",
  "key16": "3ux8ouz9AJYAZu9xxWuW8SXvxXNd7kpBcAJK7JaA5Gtv7vsXVqqeAhRena2vLGnWfg6UX2A385NL5gTg6xHjcRAU",
  "key17": "5J2NaygqSer9FBYfmuMKEfUkBvsAXv8PuKL99K2VTtXioaHh2dRVhFuvSdA87kZN8LfYwvwhhwyEYgfuzQkswt6x",
  "key18": "2ifTtWQ59DG1gMVTMyEBhaXXc9p2DhudzPU8DnKrK1uxGNTqWjQxSCTt5A1MKcKfroA3h1J1JhNcp273Z9nv8N3o",
  "key19": "4Ro13fQTG99QYEY8gkG918QPipkL4Tbss6Ugb2GYh7vvC1b5JRnX5vs6MKXWbY2PqB6rGFjcwvt6YfHRYG5VjXfr",
  "key20": "26fFG2UV1cpYXP21NKLHjCKWPZWRyN7LpWUS1myRnyGNjvHyCwBuu5ddvEjAMNMWA5AwRHb1anZ9ywn9PYwF7YPh",
  "key21": "556L1bGJT9pNJj7FznKfxwRLLe3GGMzuSUKf8msKLK7grrtXwwoJKbYJoPGAVTntT9pwQ3mcX9aDvnrgwzz6aERb",
  "key22": "3StP8ReTNNzccvr244pdcjJn4Phwj1xtJssooPn4SFkxDtCCVXLw8WP9eNLQGJxLUpBE9d5PYCrLPwRW4N2gdvcr",
  "key23": "LAFC4CAkeHCc5sccpbiEWM8KRtEmgHZ7nocLWAJJoThqRocDnDvCvy2GajfujoaTxbmc1d4LUtysRFNqufceukZ",
  "key24": "9ZLzF87yQ29Gu8mPCPBnFkSJMNCd5pp32SebsYsi1kP8st2iFfjYi4vDerFRKBbjNgsmcxeiT9WroSWLHj1PVL3",
  "key25": "JJmAKnrD1E9PaBZiyNLa3a7ZLPpeBGwxc3dyts43sTGoizZao7EUMJ7gfpByXBfT5WypuqzfeN564jBzfB2JcjP",
  "key26": "5y954zAEvGPmyPrELoPK55KTAcsFpXgDkMd62GXwDyws4rJDKWN4mR1xtweyhz2SGG57pYVbWPc8MHti2wB8FoVG",
  "key27": "47m74qMbeiuE79oWP4wv8oBjfGzeh4MT5hyfRs1vhDpLEY1zQME3orvdPqApQHyW1UE9qBENtHAbsXZkuFj2bQKi",
  "key28": "4fafdXWuC49KhuvVfn5frywKbc7xjvnZzUhZmGGkr5c8JS7soCuPd7cKLBKvAWrenA4vqLBgzij1FgZAF5rYt8oP",
  "key29": "5dKgKPEyuUeb4Lw5ndAHuNd3feXs4SigJQvPtcnvt5mHpTMJaqDwNerCLvX2BJxV9yCFkZ71ywYPyczSSxYrjfLr",
  "key30": "1m9kkEodtXtjuBxp9qiC4g9N9tpu9crYLCZB3sSd2jWmdmaNCkB5893ZrdENJaxRJmS3JngdqYpbjzE4EcfvZXo",
  "key31": "2nw53ryMi5DdLDdvo8ndsG3hoJD1iaYUj5J1ks1NmKFiEwF41wF4xS16N3hhm2axacf5swoLuE8gRhujCx278dHs",
  "key32": "TND1BUjMVk5VrbjKtk4gq2SZubRESDe7VFT5QSZJanPpH7cCfF35monimsCiTNhXkNTu4fJ8bDasuByLRfFcqGy",
  "key33": "KHwUAYPcXfAbhefei4KnkCJrpRaV6g4yPjju2nA1JFVKejumhZuzr6aAxvpLX2MumVtSPZuj7s49RAJzFrv5hHY",
  "key34": "s1eNYxKbzc2Y43H6UYiSJKziMz9SSuTVtLjoCLnfgEkqPwzk1FvY5oRmMkoXuGjaVpGSKJRCfo4unbBKrCBwsEt",
  "key35": "5NLC6TMaxDZpL7LDL8VmFe1NW426JVLF4GhVWccGs8ELdx6PyRozPARyUvmWSq3UvH3SyBXyftuaGepe8suWzURh",
  "key36": "2uoL3e6FZ8hMJC5gGsaiwPdsttju6Z2HNypXaTcG3MHcjG6cqCFZPkfY7NH4uUGvuZuDkqAd8VYtGDgPwxkEcFr7",
  "key37": "4wFA99spdjcAGTP4n4gtHsgZaE1PfKrEUeCQvwZUDqdtZ2YLFiCpgv4ZWGPa9YTXFhEjEug6ZVXTSJKtUgKERGsY",
  "key38": "3TkA3a1m9aqq25xjTsBqzH4U2CHx91jD4hikcZWmJ7czqw5BDo9HFp4usYLtXJn5mJ89c77B2oHPLwB1rym7r9i4"
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
