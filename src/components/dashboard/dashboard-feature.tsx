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
    "3rraGNDkLJjLsN6qyCFpuxKQnGCxTvHDGSmeERhE4SvVKfFPA4PJYjj1ypc7kQHQyMY6RFGdi4zMPYudAHk6pmkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vuDzjViPRzgvCHQMnKVgx8HULdDzm6ZFMYZuKMqUXvq4tHxHKH7oKyNS6fKfbaWrbmfHBzj2z9MJ6UMyfGxgCZ9",
  "key1": "Q67PyrxWZUHzSatJQKfryFQ4HLLWBwpgVRZs1tvsLqDwsYtMGzET1TqY2pDAte2yCHr6cG3dTkMRmt6jafvjR6m",
  "key2": "5TDgzH4saWtckTbcX4gM9wc8hyrNmt6HP8RVBvyLip9Nx3v3dsb3yVKDrbfGjEL5L69zPq6mDpUB6wXKXKJzPEAj",
  "key3": "5vBFYHweSh69kvfCRxDYfzWFhTPdZJm24KV2rEwWrBa96s5xzc29vqcbK8yRwBpjfczSrpuP2hqR9aiLokdNpMvy",
  "key4": "3Q9kCPks5k9hzutCXnbQMmttdgM87u5BNT5mfRdJKG2zDf7BQLauqmNu3eHYirSFokEiCh2pU2Bn83apSVmbAZNu",
  "key5": "fY7Zjkf9FtnLSs8dxkGiVP5aCmmHQUavreG4QwUKbH5Mcymh3U3BGy7cXsDNTcEaFsqn4xrMAJLd1wuaTzsjBQF",
  "key6": "2PU1XjUcHD6UrJNq4ZhRETD1V5hTGdCm3L5LV7ff4rVL8A1z4cvmGR9HAwAovZbC9bDmnAmF3HLMVaZBH2DuYecD",
  "key7": "feXvDujBwcCgwqJkYLfkPhqJmruANHAofptT78bYkJh6JTk2v4QbxEsy3RFEbpYBUsSyjzXxQYsjgqE8NqJaRfE",
  "key8": "3EvK85kze8HpQHy39dUdTr2H9JpXS9AUZPntxJ9g9WYVLbwPmtQ6QzFhA49CS4NPxd7jXW67xhZ4rcpT6d7wzMei",
  "key9": "45n52jmcwypk39UJ6i864tpsDAv8T1d7rAkMGDPCQtwyocdtiKcTy86jEqXQcVudKEzngbFziepGuENuFtkWFn6h",
  "key10": "2bbkdx6pysB6MPWAng3hMGo8pcvLxKcE9SpnWJBxpioBLmKVu8DPkLKrNgwuC6yKxsr7U35AzurzKkB5LRi7aV3Z",
  "key11": "4xH4CX6qAQA5z9BmmFvGGFHQACeasUL3j6anPFCY913HhdJcN5EHpkvUo6Jaj4RBtEL82Mt3Y2gsoMLb1U6kAsqs",
  "key12": "4tFgpeiExZmPPLfk6KdiVvGTJYAgSdt55bK1tZ5KyubxjwAf8Quv7TvoXXAAeAdHM73eTxcUAChxPZPaAbf1Bw3Y",
  "key13": "32wX9hkPw2vkZuSpbdvy7BR6Aoi6brnpmYxrXjUcEMnmfBTAdiCG4YKnnioePGfhbNG9rrvLBne5BGerHdodRgQK",
  "key14": "4STvXSBHLQdmn5D4v5DBFDSoPBwUwfLnsDipriVfUDVDxKrHeMWL77qrzauSJZyVefXqugDTKQbNSK2TTQTvQHnc",
  "key15": "2SdjiExabcsHhUF2JNjoDCi69XSA7AhJUgtzjAXxj23JbSsHqzbs4MMPJyi2CNd5iQ8M2LVFec5DVRKX7MGuaEYw",
  "key16": "2qtp94Ued1i39c19czyBGpV9gE54DkdfoxP3AmYZGNWjrk4UL12seVSnJmSqHrTQq1fwZpyMYhEopGqZEqWyRVxS",
  "key17": "5xMhEDpMNgMZvAJFLtPenwok4hcDRsQzSYdEMr2LchAmV8ZfCopeWb7tnjoUq6UStTUjXVEW2KuAgrcDJXSb5oHA",
  "key18": "4HqfDSQqmE86xVjVQZ2Bv4DyQqC3cFficfVu7SttkbJMAvRbEBtmFjGrBafFwF8J5ZVWWtqXuWtrWpqfm8TPxUzq",
  "key19": "4KAxVUb5dVnJ8HMZ1bvPgsiUFFz5wXCavdsAyqBqboSo91FctQNfH8Bxo3ewsz47DMYeAjVDHHxTk9NUY74W1aWS",
  "key20": "1c1487MwekH2dzvP18kGvJNqEbf3LVWMTfJMGpnz1fG515wftGD3czwBNY9g7NuDwWmde1toxCJmAPob1XFuTu9",
  "key21": "4dG7QjUQ8wfoKEwBWWajz5BsQGofp8JRf4mDcUNisUrviHeTg7RCpYn9BmYEM1NdDTSavkb1E7hkcyTH2AfEcQt7",
  "key22": "42Rb18asXs8cLHjLMjUTzR9eopFkom1hYGtsBoSfBjyXSfdDo6NMVprsD7n3mZ4bPGsvgvMtqjmiipTDsNiBocAf",
  "key23": "4qKBqCYovqpqFZr6cZJoUokhR4pfoz4ZzZqSasFJYGJKDHqDEYiKwuwk2bTou4g2wPby7an5dUEDnjhBMokUKzdY",
  "key24": "4JzGHwfNyX3WGx6rCJTYRRKKCvqpVEGJ2nQaZQ3F86Bej5wkVHH4qFUeBRS2L9aeCVf6vf89csDSLutzJwjua82R",
  "key25": "vqcg9s4VD8D6E4LvmmEikh2rZgk2QUDD4xfbKNqdEgJ1Pj1F9EicfQD8BoBV78ntFCGmgzXemZPDjTT1KtTMvpr",
  "key26": "2LodTZxm4tE3rmhkzfXWw4o3XmCxhJcahV5oNUiHKaDaxktpKXBdnYBUEGme6rLbWveh8VcggSMyM6n5t8xgaVqh",
  "key27": "3fgCjNK6pcHeczEef7x5jbgkQHEXrjpnqg5MmaTUPEWP2tvKWBryZG9zF75qn7j838xzTfdFZJtfg4G4nyFeV8ue",
  "key28": "4CUFqPnBk8yptLMKpocQjZt9DDRjMzRR2xoFRYSAfbXXpNAdUguYskyiLFg3ad9iNf4cMEFshSAWCxoUQjtiL4Yg",
  "key29": "62683NApfqGY4UEZ1gFsrMSas5d4P2PCrMgCYnHmTqk89UUY2shHUjN7moF6eMUtcrZxtcaNTjcCWTkLhHLgc68i",
  "key30": "4Z9A2zpUP1hbvTuTCEiDWMP9ENWcgB7XsJ1QqP2WyfWveutiaZ1s9tVQk8JxdB8FAFjaMAphiWdtcbgYsGrDPSvF",
  "key31": "7vnAVfyC2bQfgyCzefRmsigZz81sNLm5GQ5t1tKiVmHEaDAmriHwasZdzoxeRFcnM9MXtz3i7eik7xVKsqBPWFm",
  "key32": "3zXkpcybX57wdrMLfywR2pcBfLnuGq3XfHYB5v1cqTW29TefJHkNhghYmrPeZ3nD98gZgTfjoNdzPkhidDPx1kE8",
  "key33": "nZYT9u7tjUVAafRqmtVVa4RvzvbroKVjVBEWvhYG3cVNdLpdpRUncvQhpWBq9qP6FZGQsCVoAvS3dRB4j5kyzC9",
  "key34": "3ruK4t3xydJEg2NGY3zcpivHdr2vZR8qoZxKSNRsFub2NKe75sgFyE14qJahzzJjUt1teNFJAeLM2s1y1Np3jAYa",
  "key35": "4PASUqQeeMKhypUDH79fRngd9CoCTH7fcmdoAjeHCTdZZtJBgixs486EXZstEidkGMsAbLWTgaidoawNTJSKStmd",
  "key36": "4upKAgL6J9a7KJFTHBeYTUYDpCVP714wP219bv2Q5mk2tExVES2jMaHfY65SDSyzX5z3uVmhvawzp1FEeFGczcPb",
  "key37": "42B4kGMaNq49woMviChaQnnv1LkMYLudGZ3Ycpe9odTr66R5UR4Rc84SwDaCn98eEbMqSMhV3rbXaUEuWJfGf4Uv",
  "key38": "3FaytuNvgVheDA6uP5AVVm3ACMkrDWb2FJDFvjY2S4wi4dWv4PMRvdAoBp6DGsKECC9onr26SmhcBiToS7mPT1AA",
  "key39": "3E8XLBnmKMGvcCn9qvrhYVU173DqcyJ9HGnYTBhpC3wmDDCZBwmwjYH846Y38cn9hjJzVEoU4CjqhCPSU6Q8VAeG",
  "key40": "2jxVHAL626BezYNo5C2UjKcyqQDnTfHgaDikruxvCuYBUciRJtSXVGMNpPJzSoJ6kJrRgw3a8XEiMP8PyBbmGEwV",
  "key41": "qtHum1jwK9cu97hYZLCKErd4kM69Z4FirLVzSdbgxxJ5xuFeior99NGqJTWHP9gBqoPdinpZ6W9UVNvDMxaVUW3",
  "key42": "24vRU337355xRygiYSUWpXiQe9wSEybZFWE5pApLmHt39kb4gpDcdoqSQt3H1T8d5cLmVji9Av18FuFajqKZZUFk",
  "key43": "2noyoexx3hRGRRLPYVzMLxJv3itPDSDSMbUpEuWbLHK43abwX7d5GyEH7ouhyS4oeNxWeGLwHh11n8cyWTW2R7zz",
  "key44": "43yA2pon5yjJ3Ge4JoboSbZC25ay7FvrtMa4LhtVGr1mG79cpbb3Vzjbyrd57CBjc89pNvBKzW8oDMoWEMyZNGHu",
  "key45": "4xsnQkX4yL7sFAhkFfpPVkQWCQpkBKosPMm2mbYAcDLwsukseKqYcQvkFDEexdWx56TEDiY1HHmucotU57NzWkcJ",
  "key46": "PNtP8GX1iMWH3dSnLmVC9CESs3huAtXmu7nbw6rusqyrGGMg1uwm5Mi4unGbq7e1Pc5M4u6tVQqc1K1kBw4coUZ",
  "key47": "4r96NT6dkbeNBqP6Cq2p9hTEWN4yWmjBAXGdpriEkP857ibNRBt6ejtDU2sENM6YLgQvVUr1wc833KNtpb9wVZwd",
  "key48": "2U2fVT49DGuSsEn61BSJkYELw1LA6xdfJZw4VGV5b5rXQHRNRyjDY1cA8zQm6BAxF52hunBo2TgbsF9r51WKUP5a"
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
