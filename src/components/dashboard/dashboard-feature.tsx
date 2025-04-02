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
    "5kNHHzGBgm5wUvjivjFNA3VqeUjXve1S5nWFiXJzhy5qYYawDjRe6dWiexwokhLArD5PQMtKGo1TMznY4JRCaWdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45PqXw2ndywo5cDnvAGGCBSk1JAwuEBGg8ReKr1ax8ogzQLrHD3W78uds3v6zV9FVxZfnRCRJRjpJ7Yc9RpNbJnT",
  "key1": "3aezobMGjVcUJF3ZomsLzhNsYLMyu9nDyFLfsXx7Seq9y1RijpW6rnUHd9FzU2QP2WEfRZ2yPGzN7pRxYJZkZB3y",
  "key2": "2E4GJspFxwnc9dS5oMzTg7qZy1KMAXkt8emSKMA6gGqT9vZL355TcrLpbZMEyWDeiRvXap2E8wjXwqZsKB8CST7Q",
  "key3": "3o2VQvVTgtXrfkBcSBqXYZCh1xgmsGZM9Gn3Un2U9jTo7dN2tpkFsufNvq5Xx1VYQX7GUfHTSozWm37qhyC7C862",
  "key4": "2TkNV44ftkQF99BsuwGJTYT2WzPSV4LHfdhfspqAwwxZUzApxKzUoPkxgysMgxbsZQ6PQnD9qFrKb6NpZN6fLRW",
  "key5": "55EuMNk2qF6twhs7akDPhL89khN66JjzrqjB35ybdAdvkGnzyf7zdc8mATDmfQ5H6dXbQxCaN6czQBMvASGo9ieW",
  "key6": "5kxyQzaBRj3PGMF326ugnd8jmsNwRuJWccmTMJAqE5k2brJAF7RdMEyNWwUa776RZGLjdjmx1SVdkjDrAmHKTBF5",
  "key7": "5iALUAaiMddkWki5qEm1TqJQzsu4ndkPHtUfD2CsrqDwSk6s1vDaK9mAwfrk6Txhbn5pSPKiHCkS4SBBbDuizhiV",
  "key8": "7De8416dPo7aNF8K1uEsm5NNs1ksP2Dj5f68h9woNHpV2czm32VAVY7CpFcBVH77Yyqh5rSXR5fK8TwvBqkqjT5",
  "key9": "57ZocoA9sK68wTrkVXP6aRBkGLukKEDEZf7e6wUhPVGc5KyrgbpuuWsaJAiF4VWnJ2ruXYNJxeXrRtgRM8amZbRm",
  "key10": "3Ac1SoCPrfgc2jNg7MBVL7gSbU5R5zzHkBF5T7XVLwD7qZwNF4A9AmoK4qFgFzdo8krNSbH5UV7EptpR1bHEK3gA",
  "key11": "4upaRyUgXVg1BZw8yHKuNb2LL6hktR8U45QBLiKZenrqssQ7VL2C7kzY9yQg9NmwRBDuwPFRXRhUEmMhYeLzMMH4",
  "key12": "5M3h6hrknJBH4Yc6qqU3pT1cPftw3x3GuGGaDTioiQiYDdvsFmxf9QZUWSKKAswbS7LvtPmgHxpx8PK1G5QE2ZwX",
  "key13": "2wjsPmZNndQKyVKqrNvGskMox9gJAXTHpahgoADWYTjt1D8degH2d8yQ2rwNDiwzoy8trbHugUzbw2nx1hauUAJt",
  "key14": "4rxAnoRMsVeoLhtLjwxVk6krDBmAS82P5pYjPhtg2g6iwCwvnnGoDjLc2FTBQHAuzx2yH2LP4rjG43PrdZQPxMZZ",
  "key15": "4BW7sXZKLikgaTadfVAfPtLySEoNp47wwgPpTKMwGNzroe3oQemem6d7XLbcFJMZhNuz991HWgRsMFJem3RQi5mc",
  "key16": "5FqDF5DmakhxsxK9MPG9W7uR2CpxCSd8CG1BieSZQg58otx8EpyRedVybRbkSKZkF1rewiEoSN9jWhPuwVJjVKbi",
  "key17": "3HDHpCDK9isRXajkmEhwqK1vJYYU9rNU5w9aa1ZP6oHhg3jwq7t5h5DktbhPffDiRkeAEYekvMj4HcjHJFS7ixrF",
  "key18": "4x7Bp8qhcLcFsv7aXHjFWZm478qTRX24syQMN8RQJf3ACLKEnecwFnPDn3c9Md8VyLQq6r4x2SqmnwLXGxZg3ixM",
  "key19": "4em6taXbQYaL6Akb5Ko3jUh6spm997A4YGsH31ep3KfhtpktE7nURCGwNaBhfbvb4EALdwc12HVEyCdfFr4Mk3XT",
  "key20": "3JWcmEWtRozF9pFchtKtmudqWaqNt3qSt7tEbDdfmiqBDDvFumC2GJW83JKtyNoVxYzo7zsbs8ELE5PMwErUXUMJ",
  "key21": "jM9BZFmpikcfiNEnbz5qrutY2ThzY6qZLcYUQbeLNYDAQaqeEEZJbKrwUQTUp45gQJYxcvZXNFSjgfkKPMNyemh",
  "key22": "643QcJrHP5CW2PfWMRbK9jLTHwmNBbm1FTkfirFXYu74RMSEgMtHeX8DVy3hukvKrwKmmonoFLL38qmtGPBd37d8",
  "key23": "4GZzYna1vTLtS5NEn2FMbznkjWCv4YY3WQuJMKMxGbvAVUmLAtZ1sj8dVwtUigaf3DPc4XPT6H3sKgy2c3BVtbHg",
  "key24": "TqW6Z9Db5patd9L2JBJNF9YLEskwJC1Y81LjZqd55JXtHnEPM1H3F5pRFibPMHk8ZWsufWn2keS8P7N7BXUkzvB",
  "key25": "4x4orgmagU6g81PaiCu7zATL62oz4Gpg5SiDPZWKi3vk6jYEDHDAQK5SKu8Xu3Nz3hx3Kpv55ZwV8u8G1BVHotem",
  "key26": "2KAdhBS6vHhV5CFFkmKs2qUdg7MiDXccBmJPZL6kA6xdPEB8fGfRysfCZXoMEHQjpmzbkb4RGKqVVVWxwWwgGN8c",
  "key27": "kLgjtzbqWExmP1gY3ukey7MSfnFFcf4maEn2efyzAWowibgLR9DFEsiLg5HtztX9TZ2tdN8RLjurPrNcEmppWf7",
  "key28": "5GWF8GL9o8is4Nu5Fd7wXM8ogPKLwzsmoyc896NEsQ5e1vns15SMd8PhXn1pxvX2FG66HfELf5wGx3sXdQAaPmnr",
  "key29": "5weCSf7JhabDRG89S8WTyYqwMMTbaxWWse1hCdWPykj6GdC9Fx1BcnX8TcEEPVjUc3CZif2a5gsHodmA2eCCRheq",
  "key30": "2JF12oP8R1miyeeCHor44pqFazHKYGV2hrLYuQPSq6DFComqAxoBFuKXUivN3RcyeudP7UEUuKEV8isrEbfdckbh",
  "key31": "A7hjYKx1LwQt7gErsbNewG8hvbMQk3XcJuT42vf6ZAk73Hr2EVQMUk6dKDNKSHb15CHfGTUrWrSZW7p3h2KSK9C",
  "key32": "46bQjohcQkhZppoSBzc8SNn76okqyjZ44aGjP11HQYPpuzaok6tYY2yY7f5sggUtZuXNWU1rAczpuWJqRdh7kWuk",
  "key33": "2joQoyFveGwXNEPsdKZ3zeCNkywcfMMd4Mtp1NZg1f3oBWDKcfPjWsMZCbgUeDndsjxdkvXA8C2zQ2puUu1KfURE",
  "key34": "5vzZCmKsrK5WeoLF9aurzKtFiMYbfiexX3QyUAPz9XbBrCRq6YUNUGdydWPwD6bCDw4XESHLLQBRCGjsXvFAjJxk",
  "key35": "63mBnwa9D68Goc4MUtTFgAbWqJ1NTGcUd4smajN2A8HGrzzGbCq8iF3peJufroXLJkvvrUCroHwoYHTeU697c5Th",
  "key36": "22G4PtXZYY9x54bEFNnsRmjCcVCti2RV2VuxqrWcEsEriVRz7i1DFTu2hEpgUzKNJczxpS23E7jKsbw7xVHs8jPa",
  "key37": "LFKEsxDXUjKipBqU6cgEeFMcvGPS5iUXFnS7CbgV7kwgkpdAshEVa7NgQ3SzY4Lffk3EajNhoBYAinT4GERtMWB",
  "key38": "4VEYLUj6m9gz383SrJUh6JF1QsRQQkxUeu7SPy415fhsrRvLREj1xqXE4aLNeWQtuWBtMD6ixs3arDCFZmvmHwj9",
  "key39": "qJuRTmZia2BPFwWDQdMxu7F3u1MDEsv4HZhEgYQXA54nbxSEFHoJ3yhfiuV92zgQ8n5aLfrQoFaQ8bWbHEfjNnH",
  "key40": "2x635Yufnw7yDuLv3XH7zM7NA3FkSvjsStWVWYKrVW5w16i8aGzsS7rzpVA8CtVRyhrWGmFKcGAEVVG3fm5qBcKp",
  "key41": "39DQwqo57WARQuGSHsAc7GHeS3vKe6iJTbhHhtTvf9jZujnxR9TvHpMZzGSv387fGc3g27zk6FhbSdZA2845yy8f",
  "key42": "5Rq6upbjeEzBVuTaZSvcaD8DuaFgfJURzHDStUtXjc3xnEFgbnWYQzhzWy1GnqUbvMbSF2fd2DZgXoJ4kBrV2sk2"
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
