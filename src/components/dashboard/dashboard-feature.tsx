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
    "3vvmdYika3a3GpzTn15XMYcJTy5YG19UXLqHvkWddXD2NgW1PhQEaSsCdkuYDtAxFK1jb6AmUK7NKEZuuV1keqsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4544ttPbSPtC9uyvLz6YQporLDXz6wuo3jcTTFb2G5apCsVdtMCW1RahBwYcvCUpyR74unR1HNPnkAB33r4LyUSB",
  "key1": "5nPMrrbaAXCgUUw1pDTVEHYdQyQJytLxogYTn6u2TU7Lc5Rja4BmVHFsfhXVYyf4YuZUkmo1VyNr5mQ8Jcfe4a1h",
  "key2": "4n5miJfWrWcNQCzggSh1pNVYcN6BFwRb3dS1sHcJuvi7F8MApuCM8U781ZYGe5UCiPRu4UPEwduuCafDcLn7mXda",
  "key3": "3t3TDP3kCb7YV2F7bm8DLZMDKvMHhn8AAFPMzy9fANaczbyB3kh6z4WZd1CVH35nwEHyywTyCnG3Vbwre6xcoMJ8",
  "key4": "27pFREVLBcD6GYbhE8bt4uB9FsWnHHLtkTeo5W7PC7pxigDU94udSFYsHrRvsN2HGGkK4wr6uHqm42NRoNV8qHWx",
  "key5": "4EREkzXtWvvQDV91pGmHfqgYFGKCELwFouxSKj7DNcv5imNvT2AJETxsw5sz9S5XizFHQ1g5FXGmTaQC8ribGvYJ",
  "key6": "BrFFitTEh1GpJWMdov5C7d5P9VpAoiCFTRhq8fCGKAHJ7b7zcxumdCZq4WXYqTSuPGBbTUz91tKpG7Nm4F4TaJh",
  "key7": "5NbWk3xk3WyedmCCFZuPJiacCsbfgVEpPLPEnCqEzrdZmxR7jxJbjQQKPumNNRvQ1AvtMXNasDdKaVA9nQcMRRd2",
  "key8": "5K7d8jSw2FQAC4Q1KyHcqzxV8ZETnHy9Y2SmmnDghm2N1XpHQed8gAidBpG2rAyREunFtdpTvxjry48BPiBuPacn",
  "key9": "3TUC1MhwS1mgG5g5192j7XgMmT9k7SoKmZtFJR47NAY5KDqCAG9a5Qs9igMaPDaRabFVcThrDzqMhdgXeKh8xSoo",
  "key10": "3BCfhKqagM8TmEEmpmntB3vN6wkCSCCT7PJGyHExyb7ZLiH2N1mceq7CAz86ZWvWU9UNLXFx8LasvuSfmXfVfppv",
  "key11": "5Ze6MtFyokjPPGBwvEi4bRoiHADW38MGf83wr46P4yMRL6GTUudJDM1XreWtjUPYtotJmfhP9zSaNqP8nFP3gcXw",
  "key12": "2FERBqgaWmXVD7ZLruQMFcEHm6abH3W1Sxrqwex9aoBqSu5bZK4dccTyZtyN3mDAC9fXqaFi8yJ8L411WAPeHBNi",
  "key13": "4yWehaMMreHKCzbts7tnTdkW88oQoQot7iGzaqS3cGc2eeAc1kownP5M9gHGkGPUg6W733wzDtRuc5vpLHfpPrju",
  "key14": "J6xAUJoyuuyVJgyHLRYZJunQSzJ1Dth4YMS8DZW8SLLMpDwBzjWkkxkgmUjxqkVj5RV9S6URaVoiQCRCNzXLQrt",
  "key15": "HCzdXze2qM1MccAV166su4C3w7apSde8fdDxCRCtwyob6xbPC2FKmF47d1Chng2STP47Ggj6vgKrivKQ3VmXoCE",
  "key16": "3J1vAH5CU6637uYvDQstQBWosZXMg8yyMAhKEgYTt7fari5XjM5NchsamK3ABJSBoA1ARg64953RHS229HTS9kgp",
  "key17": "3EUGFdCrSUnFYDcNj7ZRZodsd5X5nqQZ2c5dEhchXVdVhzo9YGRb63Ggd4MU5knkX7o73z7wqkbiNHYMLLfqM9wa",
  "key18": "3u3kzgNwnHTfkprmavQghg7jWXx3gmV5vQeTRCDHZ1LVp785MFaZVAGoVGEc6ufvvgBAX3z73dLUcRMbgLbthECj",
  "key19": "3b4Yh6ju6xs4pBsTdPEejNsGKbVwvdvypjgPXgqvdm66moRFRvDoKCTqzjD9pfbCzNiDnWZddiifxYH7bHrt5jfH",
  "key20": "3CMLymKPqHuTSFuonXLHziGPmpnM3dmWRJWKTbXZVRDqCQqTZQG7spuwRYGLDS3kbG6Qrec7moZ7RG8SkbQnCDGX",
  "key21": "2Dn2nP9QfcCkk3LLPcGVuvJ6E2FgG8GPhajgSFxjxdvdfxMrqLn5P1G2sEhHQ4M4Rq8k6mFML3yFyjsr9JAQJbpg",
  "key22": "4sNb8FjQf87KgCToZfcfaQkubpSryWg6h2MfRPyFD6SvQ1n47R8hfGiPteoH8tJct6ySU1tgsjKrQqx7VAMDSkef",
  "key23": "TZ3mRqJhedx6tNeJWT3Uo5Kd1tjuaJuisqnC5QsBJ95vV8PgdEzk5y42wobLGtHF36ug9AwikbHpZc5PX5WeMMd",
  "key24": "2WXCpWYzXdUxje6DCtUHaa8PB2m7LcnhhNVvRp4Bfc6XUtHaciSujWkER9AhDTyq6vL9aAfqryTpYcHwEPUWshMq",
  "key25": "X912b3QGsrc22ew7QhPPozCRYDsAyYbZuoJLqLUuNN5gAr2Zoc2oWhn9EUgpJNNfkqNQ44BrZM8HAP8fHpZWG9z",
  "key26": "5kEkkXFp5PDHMLyKRVDX9wVs9JoePZ5htEXHTEfU5a3uM88uQpy3six8a5t8SKMGUstFSe2e4eWeR6axGCA1c8Mh",
  "key27": "MJCijCHVF8X6Gt4TkdYgBD9FSsGRrSm5VV8QcT1BshxZpW9gAPmNFbUHgjxThTksgikB6un72miuGfd3MHeMLL7",
  "key28": "3hKK2NNK7e448Xip6iSjnBTtWEBVHxt4L3uRwikAvEeG9pTrWfGtAu4zzPeA17hXrHJ28DTiGyje8RBVRSpiCFCF",
  "key29": "2TEahqQJotUyDTUNmuDvnWsmbPzCQ8pFQbmBJV3jCNukzzGUyJ6CkrfqDYMB6ZCwGeYb7UovrmzZ7yU1DZxtGMig",
  "key30": "3fpjw8ZtCt9SFdHxmfKTfzkCCtxeHoVsJSTEvMcn2kBcka9Atiq5cdByubKVuycik1ZFeTYRLGxZAQ22WFYdR9ee",
  "key31": "27bXikP9D7GEsyddnnMWosN8hcX7PheUme1xCWf7ifLEUtDXyxU19x37amaLJcsNvXZ3Jcga2qgNgqpDs8uEqLPv",
  "key32": "3uGPT6oads6rEpiXsWnNaJ8ovgVqD2d5NXsMepq6gNJadZ9MpTqvoXoxodz6KH2yJ2VKnkx2w7rrbMt4QRy6zRra",
  "key33": "ZZKrvbyt3EtCHLUgyNKumanb6DkisTTAxZeEMHWm991zYXhnFP55hXu3f1iNtuw72zVmcgSpjxwguKa1ynsNJdN",
  "key34": "VcWHRVhebSUuyG4U3KTdaVKXjHPS9Lu8rat4bpN5dX2BKJdkgthyWLta6wMijxydcMPaAnJ1LwXKJHr2KB7vHF3",
  "key35": "5vYapaZ9Et57bYnGc8tHbgLuu2MXMepykMsd3tEkQd34NmbTuz9fNftDHSqEfoMU9RLzZfqRkn259ZtKSnesp95x",
  "key36": "4LiFnpGq2Lvk4iNJj5jRc8EeLiF3NddWZaCAt2T7pyhisMxRFLHTZb3cXi3Nkd38ShgooAdfyAMESdRQQJMmj2rv"
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
