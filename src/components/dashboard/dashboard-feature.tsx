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
    "goNC7NfZ8amqte1LXKJCCT6b4sQQ7VfE6eeZD3cxbW6Nx2cMR2MAT7f6idqAKq6xoJTdqC8A5ksfNtM4munaGCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SwzgfCeiUAw1Wq624PPF9LP1ckz1cbfa8PpGZuDCejcnUifepANz4UH16gJFZc8DzreeGyxFDmBjgzX2WUDEzzu",
  "key1": "4JUFWv8u4CPtHzZ2bMrzwKzUMjHSvD6br7qkAUiJoGW57dsMd9nBtanwjz32SyMof4hi3H7LFURyd2ZhoUhYdAEQ",
  "key2": "5GrMQzxg4fNskHwzPpYEmwZbAjsNtgN6jA3MPxDLXz6wGTSnJ56caoueFU9czje3sae7rRPGedL8MiDH2eeUmcRs",
  "key3": "5rdDN2YHvz2aLcnbaWbEAAUPs9VBtR86CbAsbUrBxJ1y2Y5NjWCycgcH2hjwctzipSz2N8N1i5RCDcaVkD8Nct8D",
  "key4": "2FoFmAv8zzvVgC5Be2tjjq4vnjn2bpWxBz5tKhD6Yy3jToJs4N85rq5RYB3ga3HZSA9CMCZqHxxSjjoqQf9obLnu",
  "key5": "4YnwgZXxwemDMRW6kQgxdTEBbS9KqUbeuR72rz78RYCkMhU3Q77rh4W5GTKWQsQ92feHsmcNxjhYSrzL1irwwFjV",
  "key6": "5fTBsQASy129K7xifmwvCzzVB1iv5Xbf2xSQw8u1WTj4dsTYaz48DFvVqHHWLS6k8g877dNEFPFt8HDmuWru5P7u",
  "key7": "mGinHzS5eBAevRxm2sizm8ZJAJ3XHkawz7vF2VwRFk3DrVj5Vibiib929Ske5QpSFoHNYq2bru5kCADRKQpp3df",
  "key8": "JviwAwWdzMCwc2BuD1RU889TLC3YYh8YsbpGupv5tPw1EYKDbCGUmFwyD8GPmPELhj5D6Tg97RW9fqAaiEX5gac",
  "key9": "5PBqxk7oQHPJ8hKPRMo3peRTX22urGFhVsJXF9uLLG1QXMo9RviKx5NTdsPFnxyDbuXeEpcMMq3kzYnqZt96y6LE",
  "key10": "674oN8YWocXfn7LkRu4tp6RNrtYAwKE2AwE4y41Umgz7ayFd1cR43nLokzYxmkWWN46aYwgdqp2PY1M83tiQvqVr",
  "key11": "WVuvGS2RMKhQeb2okYT2E14zRnno7iCZvFftqbAd7QttT8SYbhVKiWViSvMUuPLAVxMZuTk2fbh6Bq1jsh4BfsJ",
  "key12": "7annRASQeLU6DN352wkUn7LY7e4NAedR3THuWEZTNTGjJuwkZemAR2EJQfSuR5JoebSLpiyXyVdSZ9mF5W71Yei",
  "key13": "5XNczVSHP7BZBvs598nVJP5GzbGFf7evFtJuho1CRY34ky2rgoG8vVMJ1sN3NbSrovx72Xnhry7TXCeBkVWLkXQY",
  "key14": "3cYbK6BHYrVtDot9AHx33bbRZ7NhdBxSrziYGA6Vw7T2kWuD6ZFDZ7YoXLx7JyJfHawdGPFUZbXAb7ksojdwLCo3",
  "key15": "4pw8kRKEjaZhnbp1QTXjjRpvYBWK82KTssS6W3vqefYnRmhSBsaTscKSvpDbaipSWkJAmCJ6NASxnaKDV3jJdo2Z",
  "key16": "5ghLDoM5vowGKUVpkm92quodqRZjraquEfbDx4nQzKoHGzK9TqkDKxrTTFXNL8HCxJonnFV18twSSr7CivXpi2ed",
  "key17": "5RcLQD9f5rbTfYYW4iU4Z55buNo5kf7BXeBntFCLzS1PLwYG4LorWP1QdgXkFDXHxHrK4tEusE5TZEd3mLdJcYQt",
  "key18": "46PKDb73F5HdGsg2LY4goG9fU8VMRpj21m46fquZ7z6A93EgTV2BmRA1wp7VD1JTYWyPUyffPeZFbUFQ2jQGDM1G",
  "key19": "4mmcCezdo6qq94VzUSSYd2prj6Hj9v1FxN38b7UFM3ANRjZ1qukMeyrc9T9WoUo6NdN7TWH8FDcpUoAY5GqyoyoP",
  "key20": "2yyyR1LrsLCPQKjhTiBi3iVnbnmnGDuKehgYAvxypCE7CJXZo2fCUjAu43zAfQqyzBJDUqzKfRYtsNK4hw96oW5",
  "key21": "3pYr2W4oR6Qf2v1aE4nLfn5AAHkCserKcHTr7cdfZhq5x1VS39YGbiaZtgwA1TJbEDnABrv4wA8KU4Bp1aadrjdu",
  "key22": "W8KJFd9vgeRq7zLWzqqaLkDUwGMjrTEG7KgkxLA41AKBrRdQa6yaKSt26xE9oipUvkP3fyocjyjQ82VFU3xAx9X",
  "key23": "4iRQT8hfeqZ1nT7h43KKhWiJ18edfbjHVzfcwfzjQFkQ6AxgLfU7e7hy85SVFmeX4VJiCFAwKKyH3YxmxbjqsR1T",
  "key24": "snqJgjaUX5jQMUWAnRGRQKVgMKJWxqQjAJhBsg41wbLmGjNofcuAoys8MKorF1AD4x9u8bk8f8B1WqhhL94VMMY",
  "key25": "2PLqgEwmuSr7dFcvvTy9uXWXKKqXNvddC4e9MPHwVPBuPtf1XCMDVWo4A5MWzF1dfptC55E74Bd4RwQTSym95yZq",
  "key26": "GLFBgMCb9aJQpWeqJjbh7WKqqD6k2w7KQJQbWzZ5jNbGEmM16xjkZVHqnVqVgMp2UZC6uraMJ34Q8EVjUFKkRUX",
  "key27": "3bvwEsWbNsrD8yNdF8Kjv5QztxrDsj3TXQMpS3kLYGcmLzpvVfLMm9A8zaTCJey9DesMkfdJktz2z5RadurxdwAD",
  "key28": "2tA5vq4B4PYZXoE9hi1kx6gJ8mSYCsR7YcViTsRLKPSbkejvAxS8zJJQckTB6qjTPAavpQihop7HaAa3pKX4PmyR",
  "key29": "5jJMjqct4NDMdv3sr453cw2ExeiWWZGDb9yRWe5PAjLVdrY5ZxcAnXBGqN5msHekSWZ5PRuHPtiwb7KgYCznG6Kb",
  "key30": "4zfSfMRDmZbmynSmUUp6Cw2zsL4npjQk7MxfrTfmkoy7WDsdzxg89J6eYcLTFLNscACS6RAXiHT1gUukHWTdpEzp",
  "key31": "2BNdd1GA2B58xUWgCrUrrabmTADwEmYvcFpjByULh9peJoFX1meuc3erz43omPo8sDpjKZK2o5C5NHEKF1f5oVd2",
  "key32": "4AsfLM3M16MrCxWZgk5cxaQhr3DUjHjNz6avtTnJxkvR6kBz4e3CJyDD1UF5PyFXXF6wn481iwvQX3eW8EScymnb",
  "key33": "3Pi9XgfdQXnHN7XnBzxPSMCywaGtkFNMCHxqqRLUxgs6MehZXuFznKgiFMob46WseqxyW6jrJTuQESYHeiqY5x8t",
  "key34": "3mzhzEQAaecvqTZSrTBAqJBMKbMM72C1fbdshbPK4JauPac14KhnHfp4AaCGKph5s3nFw2ZsZKWCvNjxUZWfPj7G",
  "key35": "4WaLtEpSUHeDBXk8cwJHX6FiuvY1vPQHf6HbEojG2wvZEzPtGAP5VWi8ZQh8mJaiDnojurCJTJhnF1KFEhdNKE3D",
  "key36": "32aGiqkvqpoXgHLEBux6pdKLrEWrE6f9A6eaXUcqeWdzq3o36cQBnxAWcQtAb6bXJmCCXnbfFJTjEJvy3iWdyjW2",
  "key37": "27bT1YJML75DTgrEbFnmddaetfkCtq45ByyRAVCKGsdu27SDxk2rPf4ANydB9xRo2ogGHpGHcRwh2sqMx2ig6fSV",
  "key38": "c87GWycqER6RVeivHbme4r5ZNCNuz2KbdPXSk9BsDVHwmGbSjffdfuM2DRoRkFDTqTSwGDreJ2H41a268rVkoJc",
  "key39": "3JRDWF38GADTVgQuAk3PeVRzERR6TeworYmGiCJD3NMKTs83HxwCoBaPEhE1KYiQfbkwuFwEJzGHPKM2r2Po1xC6",
  "key40": "29qTVdVpvddixUsaeCywDzbzcvrACPy4NvF742RHZz43BheeU64swbtTYbqiojk12gFGP7jFBjPfsWo12YkdCDUX",
  "key41": "2LisVSm75J6uWGEZKxagkbczUEF1Dj5Cnfj6hZdWamdbx6v7eHobcESGycWnw8Bb7RyUJ5GZKbP7k4HzJ4rgAa76",
  "key42": "CuD8gC9mumwtFLJZqksHbu5PJyzTDWMUTgaecYcqtBKqL2NM93DRohbJETCJDB9F7zSKQivysowtPzUriYhuqzy",
  "key43": "h1ZR1ZwK2otonCQqtYNNhXqD57hYdtfz151zxUXupKDV8p1C3r9xMoKf79KfguvPnJpRrjJ4cHo1kSPDXtFwakA",
  "key44": "Z8c1T4xZbpjXXntkFRFqmgbkU4Toa4o48BEe5kUmvSc93ckYav9CEWhdBGpntmZjUkyAXSdzRgc7qJCCFPugjka"
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
