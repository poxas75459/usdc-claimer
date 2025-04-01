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
    "iZ7q5mQtMXgdHVX12PAR2Fr5QTzoYWvcwTXZLUUupzWTKUq5AdhMrFVmiL6g1GeVEqDwWuieY2tWWVS83ArbQNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34LH3uqCGLC8LbRvAcng2vURATjLvjeXPqL67FA915jm9x4TVkQvi6CH5xELg2fUBNKBwFpftCTvASq1t9TjKnxm",
  "key1": "4JCpTfC9K7wEXduN5yv4viaMB9i7anx1A7iJJXw3hDsaYP4kfp6Dcc5apXVVMatFu7BLNs28dHWZSVJA6VWto9er",
  "key2": "3hQeumhLg838DNgaUxaa8WDWHLtxJevedkNxXjSCNFMfGek8MqVRzp6qajEoSefh2r76CmeXVUo4GqesDhY9XuaP",
  "key3": "5pbxwAEsCuR8CzayHqP7Wxo6nZBykyzhaQXthxZAs3dhSfJLKoG2VJVRarozp1Z112Gr3Lb5Vtnwg8esEQQHSavv",
  "key4": "4Cj6mvjQh2ryscKaGHDdKTYMsXZDUD35cdn1DZzPPESjUiEjwjUbBuaCdjTNGkG5AgAt145L7WS1zaC4yXTLzMTg",
  "key5": "5NLZBug59c2nEJhpGMmTjY2XCMrGSnCFFxTLRUhosK2m7kkCBmM8FEVbDmkWGmEuivMVCLbjJJkZdmoSpgR6tw1a",
  "key6": "4pPUtwpdmaDRhwStBtYFqL71ebPVBdvmrj5j2rUB2X9691VdjC1P2vSL7L84tAhV5GKiw8P1UdwmRyNJjtUE3DZu",
  "key7": "41YoLPgh2o9kdeNuDmJ7EtWZLse8X3pfjN7r7SBRUbfv2hbx4gMABf6vs7XNmx4yJ22Av8cQEoSie38mZ2QNTdvL",
  "key8": "3umcTJ7pza8PgN8s7xWdFEjxBewEQAqYLGLVSHJbNqPHLefQg6k5BSeYVMHWHD9TtnuFYKjhwFUv3kV6WnGvyV5i",
  "key9": "5tfapMFUfMsyof62fSEHp2D2pNm1ed2FE3x6B1B3niqEMdCFiSUFKKjVu5Era4pEioWvZ9aCkbPnxUWKf4iUCPrn",
  "key10": "4XSYp11XTrZHN7JzXtknPqdoCaX9SPGGdxHCxxA2KBUwuu38QaDfGL2tY7whjchc8B4BnE4FLLyzGioJz11SwvCo",
  "key11": "EjfG3DA2mN8y36Qcf5sz8mptrCfCNodA6fTQt6fHg61oBWKTGXKWXzqa25WHsx5ph9fSEc6WPTU5vh5ZiHwN3F2",
  "key12": "bu64i7aVB32AKy8mVjaGgLhLbrmPZo4KFf4sTwz3iKCDhQCvfESqEYQVxGx6bbxsAdk8mYkRK2mgGuEt7j6Wvnj",
  "key13": "62pbCeMq26VfnmHKWARaPVoY6ffGEMQciSFtc7xaAPHxzR5rRQqSwbrcg1qmQV33rPJEqZKZAeajU7zAXYtik5dR",
  "key14": "3DnResPL3DchHUPLh3SeJRnuqzWeD5zDd5JH3uw5MYcqWuym24JVyXsc5RnzRXeENK9jsLNihxY5ZAQfApkV6PUw",
  "key15": "5ix9nYXVVbP88qoeN8HGfyGznwbJb8bc3K4QiwRFKDd1pMunFuwLqDDNwoWveZVuVaf5EXnEiNyZWrDYVY6jCpYf",
  "key16": "269G62CZ7aAP1zEf4mvmYMu5fetaqkUstKExQ8fWYBpYwcVM39YLTNZeCswDoSxfs7CFzhxjq1zT2PhAk6UbPGXW",
  "key17": "3ZcPkTVVfm81J7TBeSQdoK7F1zZNhSEjZKKioBhcS2mzBjBJDGVpsGgBaxJVRQ9WtXatBDMwc82oP8wvKZVxLP3h",
  "key18": "64MRBuFBGTAViLodEzLcaZdMLwqZAKNZigzPh1mCy4xcUX9j3A6Dak2xpaofBSMCtEvhc5zTai7XQjR11cZNjHi5",
  "key19": "4Rnk1RM4nwid2D73UuneEuFh7LhAzMebHdm1CqShJH5WBYT4fX3sj3xw1BjMJBjKe4wma2qmd3BkxxHXqeExDmPR",
  "key20": "qaMEgQSyv3RsFEgqYyCzRSj8c6fKReDRm7uX2wjkhQi2V5vZzYDvwQErfiYF6E6yAeFsnV9FQx7M93gJBWP4AwF",
  "key21": "5TUSnPi32FTNo4vugipFn1UgeaKGmSmrUGQRePtc1HpAYFLXjRjQH4KNapeWoqA5oPUq965s6iDy9siBoEr37ZHo",
  "key22": "3ax7jD9knLkqC1nwMFdkik5BPZLSSfRSDaLe9UgK4T8cvg93Rp9bgTjRasydCVMECnRQjDXEsc3idkkDF4eVTB5c",
  "key23": "yjYbQ2yvem3hz8aRxbx2fbjt1dAfGM2sPfsixMfy2TocDbmtsMVTEafaskHgEWXjCzY9Hhv7N6tbmHxK2pQGmnq",
  "key24": "4rTaXcFv9VBMdm3ejZXXSvG5VvCQ6LinkN6Yiacqos84pdRR8LEu5dQn1PzYnie93jw3zENVXjC5tr2wJv339ss9",
  "key25": "34sWfP1LB1HwsYSkpz5x21nidX7uf7ncvkWk6vQg3vZ1gzraZyyDbnMsJez5aHHWQJvaWjgikQZK6E4EebgZNbsD",
  "key26": "Rb5EYYNyeRG3dSH7cXLQx5U69fQmaWPuXKTAq6E8jkirMN25kyze2c9S7kKB1UXEjrmpDACqkUDbFBYBjWLMCdC",
  "key27": "4SjnVd7fYkA4mR19ABp666Q8W8ajbn1YGh3DosvGtUV4oteDkTcRb4oLsT4cTzTW5KjZBVVUHKTTdqAhrQYDgHoY",
  "key28": "24aK6qpA8NrjEvTg3q9t8gTTm4LBH2MadnjU7kvxoFSDDVZZ53geikh259V6BA8iZPHGUixgimtepTSjvbojwxsV",
  "key29": "4KMM4oxu9eYnBVDxaR51T4kiZX9QxsVfXUsrrqg6x2U4uW812jQcXnZhA5NKPrBNierX68hP5QHfTVsi1eNPvyBm",
  "key30": "55YW15eDJdkWs4dzpqX3LGBiJBGXBBSFHpWiQdqT3t9chcQk9W1Asf4Hao8eK46ZxXWFBo2snfFzDaozCfr6Wp2e",
  "key31": "55pqdxn41Egbj4YwAa8qeH4iSkLVzS9wf7AZPfLLMvBosPW9BFmypEy8gEvNnWX9e1KmJaQGAvjrSozvuby2ENk4",
  "key32": "4cd8maaf7fsNgny9hBhTHz4z6QnrhKgR4jrf9QCmF6PnTTDsDJxN4kQGfDxn9vytCGrQNevs7iMCwi8ZGzfnkB8F",
  "key33": "4x8R77VCdEKdrp3dxzEQb1GKYyPfbVKdDHX82kVBboeWyg5cq2Ba1qJMtFLPKJvLFstWyf7rKVeyVWa5XwsiwbWv",
  "key34": "3A1pwFr2PzcUCQadCAigxZi73M6f35Bm3nYEm2xYZgr7RakSb2VGFdLaFKncFwsG37rUmebD9AnMRZx9Z1wsB2UY",
  "key35": "63ZAzLa2JZLw8rsAVDEJyu3qEtZHm6xpyViVN5BbuTAPLG5nPaJSigA3YUyfmj9y4msbbkU7AJfJuPcmzyPiKVeL",
  "key36": "4HVCD4P8t6Dk4RjDMDEZRk9AhRjAEdNCpVKEJhp8LviKi6YbZ1Urt2kfEys7G917bXufcato3FzKAJgVmvhpbqgR",
  "key37": "3tnHwUySAn51Tjh9ncJbG2ajsW64YFMWXucEx7RZeZXPfY3BNcWUJucxPnYwxR3zuVvYjn6WX7wd49u76DdSSLEQ",
  "key38": "AMA9JdSTGnxksMpE7bJkwpLzi4sAYaZFSiHhtN9a2q1A2nNQEgKMZogL4SyuzdgMnDys6whhT62mYVWavyKkg9q",
  "key39": "3GG4Y3FPxaCeqSkT2BAfUSojrvNZaWcuGrHRK6kzXDa7qTq6xiAZTs3re3QDARypPHcwnKNK5i3V2e4zUWpVQFvg",
  "key40": "59xkvpRd4H98vMwA9Q6DnZ88vdXq1xhjrgq6a8WtLS1DEKCVwXwRjUj6ZzTPtkXEErbhYxbowvZsf464dv66hB7p",
  "key41": "2Kkaz2zaqkkjDtR5cPQDk4xiwQF5sqHP7pg3WzTNX3TpNMUZT4Agjh6NZrhyh5Y7qiVP4BqQea3xpyjSsocqcT9R",
  "key42": "4PQHERkc6EzTfb5qeLLUMDAPuTfr31CpF8GVoSQDgZfooUPfe9DA2c5Tj2fLGBiHhJs5pCWyETaqUG5Zqs6sog9h",
  "key43": "25FWE16T3ZAkt1DUYioK1SeCLzVYGkPT7tuHb4SGcgrV8KUF56M3pFFmfzPiEJwX6swUmYUu4dbrJ4d71kgcYnPL",
  "key44": "4WXFAoeQWCXKDNLpHfisU64M5eysZEQXj7nQTKaHSrjjSU74TsyTXCGZ58RLGABPKrJu46RJQA7Wv8UHUXHTKyE8",
  "key45": "VcD5xix2F9MrjXsskbbewCa9F4j15hcVQqbo7VPWFscq87bhF7Z12UTY5pH6Kw8hDoHpjBxpDmynwM2YDNv3hcn"
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
