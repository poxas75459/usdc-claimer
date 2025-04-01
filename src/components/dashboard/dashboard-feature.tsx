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
    "23GdPLWjLQr5wmUzoKMHKqh8GEPRELGGogGi2dRZMrFoVTL2EfBWrE3SdcnEsCYLhx7YHUr3h6ew4VQ983gQ9Pyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ub8SKxDe2i8ngfs7t33BGemmaFhmai8nnwnJKNGExeSNEpqymkDH7YY7NtvWcPdzBuh3PqHwXGHyoHjYRacHxaa",
  "key1": "2XM7khptz5mLmfu12nCp6nUSG9azN6b1ALsgMY5K8MKztU459KuoFUfRSe5G7iGZxUq1JLRYeRR4rXjcRW3HZc1w",
  "key2": "47SAmM3CnjvfPHWwmyTqTZcvG7UBpMHeiLJASpbhvTkxFenAnDyjWowYw2cqh4X2QsHakCEs3w5nSZdqJnqSxm6W",
  "key3": "4hPwLppWyBqbMKxdp23MKhhEXnPPdHvpJoaSCP66yiXzaUvDNTnwic21ost9Lp59gjpbjJ6RHjaMwupcfW5CAbzN",
  "key4": "5wrrfuAnZFoAxPLy3MRg6jTyXJp6P6j7sfhBfH1avSCduN29mvCxBf4zgVVtWyXwx6FrUCwRPBndYptMB732vmAp",
  "key5": "4ZFRUseW8d3wJVNDakQiAoxUpCSkgVo33E8G8xcEcJfgLzVerwQi4NCq4wP1bdNGJJxx4RSwWdZ96HgFh82gZukA",
  "key6": "F8u4X5D2Uqs4xNSyXdiYoKxkkmC5EtiBJ9NpeBsTnqKK43UstoxzGzyfLg664aXkNHWgDpwdeDj3mTiUUC9RXYp",
  "key7": "5E9Y94BiYrLUzGCnFQAc1n1PUta9cdshiUvJqcaoyd89Z4Md2Me1dqpvhK1GuSLSinGVyr7xACMD5dVwY4ELibC4",
  "key8": "342FPJ2w73huAcyC9PsEBHLB3duedq7tPDfqythKfibXS5v5SF4oibEGcE29nNYeCDMMR5GgGWuBNPVmhUiS5FzD",
  "key9": "JDbnN4TT6eq5Lt47WcCGvu6Kg2k6xyaTGTNobjQD66NHHU4eCTnPYpSRmymRk2TiNAWgiVBKzhzdPWoXqxTAq2T",
  "key10": "BNWXBhmcUbrxz9vwGLXmWFDh3dEGoKLGP7bpZY2D83EX8fru8JxB2Wv7m2wJrY7kQQ1myk1uxyrDeJeg7Lee5V2",
  "key11": "2tVw5VGCbpdh5BDD9QHgFn7zjQKmPsvy6jWP3vKGvdGfFFVQfxd7pMyPwPxXqZKUgs7WMzQDUGtRbY6Ue3DrRtsP",
  "key12": "56tfDz6pYTYGu7skBrTbLp3JXEGLCjrY2hhEzBux7zU1vA95sAumAN9hYeyRoCMCFA7sqkiDEfzhjNaZ2ANQvhRm",
  "key13": "3gXFKZvEqgqEMg7xcKAxD91sLigZgRJp3utVH9XZDjAqatLG1UVq7D33XE8vtwzz8AA2jdMBDGrt1Wsr5D7AzpDJ",
  "key14": "373uJc1u2sPEnPuqQvufZBfYHbPNkDhCV8Mnq6pAWEE8gh4dTf6Vav3GNXDdgi1tUm1i3fsza4uymFFHMoY3JzyW",
  "key15": "2efajoYaD45X755Qv714enMq1PALbFytYMTaVQt79NuJBMb8RheGYbgaEowa1zXW7SefbBeKTvhtKiHFZ1hu2EK",
  "key16": "42qnoHQg9FcHp5xNiJEqudkL6PeMoSVk8r3E9CksVa9GvjTqb8GzWPvu4xn73X16BmixjkeusKgzNfJrEDGBUhE4",
  "key17": "79iHZ11uJ5yZRmWcaKhEg6fDCDZZ2CcNrFV9mdnbvgtvu7G5hdkmRseScZdLcYbQPxtcuPPPTyUbJwm8d997uY7",
  "key18": "TDWtXxr9p2rUebM6FX7HBWQbbwQV2jFT8pYor3yLQq6qvg9muNF9AzQ5AckmWfFM7T9NFsL6LAr1MWNqbkVATfT",
  "key19": "5noi5SGKpWL6zo7eYRPG3X4ziTkXX264PDVAv5Kq68oBQ8oTtVw1yF7xxfTUdQTRMfAzrejNwywY5DpimyxBGUBV",
  "key20": "5r9JT1LMXymNBwqQsJS3CqC41QfEobDcyv4eRbn8S3WxPLSU6ZUWwmoRi4r4fW16ygSNx94Cyu8qxucFCGw8KFnR",
  "key21": "3sYPB3JUF2XSv4xdpfMx5H4m6TJUtRwdCXg4VtBPKo7j3Jju65RDQw1w12y8v3HrEqGYGWrGRNbwBM7xrsFp9ztr",
  "key22": "2JAEtt9AC5eNu14BKLp7x9v8NdfFnMircFPh1rPNqn2TaQ5SxgHZ3ey9q1So7ZiPcxYQfjUDudqbHZRU1AAcisdN",
  "key23": "5pHWrUDXrNANYFxKASz8ZNbGURTUVzbW3KwQeGmadpUuLejXbRkiAJmu6TwMa33mViCH3ZurHcE8tdVGq3kE2Ary",
  "key24": "dDmeZw28o48FQ61wDYrSvrQT6sU7RozLD79cqUtjuQzNtHy2iG4xLoiv17yV3U7UZwjKcGA4qcpAXZ3o1N1GqNf",
  "key25": "UK67WDKtzH8doMiKZGY8wATJM8mFGrXX7WRUkvHLEhTGNEDFbkDDy7R8Mwh97yWeYeijKCMWSnEckdqCizeBHd2",
  "key26": "37oAndBMN5nLvotdgk7AVkCyQRHgN7VnBrLZ3S2LiHCpD78uf5AtKTbGLKrFpD1JexzfefAEBv5eDKZTQT2Zve7q",
  "key27": "2Rrg1HHBZGE5U19V4G8iNiJUUGAC6n1frzjF3559xC3EQzGEZrZnTvffckTGXk1EPuVrpUHfmEKYe86donYkzwQu",
  "key28": "532hR2V35wRhbRGrUEmEvDi1WLAxifn3xzNCaZzBVzA14kZB28hTsE7zRN3sEsaHbDLC5NNzmwKAbvHCFMW3nGrY",
  "key29": "528N6bLAsXcVEvGRxUiSQY194fLcUXyaBx9WULbj7EZ4TmaYmowk8RDdXytq2qavTrFjtHMsSiztooDhs2XnVBE4",
  "key30": "3uyw2QMYN4wY1XcgeVUzPtddG98Y1g9qAJzeCV6tZHgF3a2HQwpcgp6wtE5m8Mch99F8bAxdybKdbrX4BRq8afgT",
  "key31": "b5Z25P8FdBJtTQoECPN6QhBLtiLodNzNAdDgFPf1vbFEaS8m7Qhmkk1ChAbRvQvNcTa4nCP5DLQJDHJxFSHEsbB",
  "key32": "fwNgeJs5AXLRbdyamzYgQxfvHwK9JMWjYyCSbwerTWyXwPkdyCrWEW85cG5aFN8N9vzB2x2XEmwgKpDdYw4vBTT",
  "key33": "2Mgg7aceLwinxv53byzz3QFbm31h2dEJAa1j1uYxvcecDv7mghhy3oUjtpibJm59EDbRb6bLx2Yk68ndEHvKtpbV",
  "key34": "4CfNfmVHooFNKurBz9fj7BWyUgwNMp83ghujV1GWFdTVjyDi6BhpMY7HqV1E8k31TPegfpAc1vDFQZ6P7nNfk2iv",
  "key35": "4NVhQ4TyqQE6WBfw21h7in78twnsd5R5PzQaGrAEZTmSsFZNUDkkFXnTriA6Xdn4PrBm95kqX6pDUuaahCoyLSzL",
  "key36": "JhzN6kAAoyPsdSMyPfg7u6FJSVi6hRD3THgEy2jaSsk2Pv58wDhnsEnYw9v8UNCDwMkXhVhdoGHCHC79s2t2zBv",
  "key37": "26JGwa3fReQT2BykWc1Zrc88N9Aqe1Zxy7rvYFpPqQtA33TQWef8QFXzbTcZ4hCum7wjKkDTFyj2Jya4fbJsv5y2",
  "key38": "4LNy7ySUjtjTPccMRJqR3VVfooGaLTSfHZY3xx8d8X5rCQwPBgf4WqwKefD9jLra2hnKXTKq2ZgnffWWGM3TNgiH",
  "key39": "36XExz3cU8mV1cDsJQVeEioSizx5H4xvW19Dr6WYT37Dtg4JWnPHVtkoCwuDFmTygpqy36BpAM9935xC8CXGYjPX",
  "key40": "miS9zvQt2YbsoE6o4D4nJy5naBq8J3iFniC11DwHwdTR2wLYqHnLghZzw7eQCNE8dj7vvCQgyJcQQ8vo7QeuJak",
  "key41": "2XAdP23gGkNnqHTBBZ9xgSKRDsuHkWTbNMycZAiAQU4bhxgf3K5ByFLm9H5rYZJoeFnCbeQKxbKpVnDfu4oRU8Zq",
  "key42": "3XoPaQva5PqayESXy274rMuCAkMgBbJ9C7KMtSdwL95iQYJRNLkvXArNjJm3xR2cyw8tam8cXJyqh79sr88FUaWR",
  "key43": "3ZtS4pLbVZaM4YgdaVAKnMmaYSnfkGXnEaNN3rdt5x1oeBtBLnhNrj32FcN3NH5fG59G1jMV5EnSKpvpsYiZ8bAC",
  "key44": "4u7jj84N3bsPLa9QLUvfKZCqnoCxGYLiRPVKVUkxZaiv36FsKmdkHEtgWDppG7Y4biiTd4wGMsMmfzoUcdnwynN9",
  "key45": "3FrjjUgzjH63XoHdjJieRDNJPsj1hy7LRG1ZUu2JmeLFPwiUqSGXJwvgBKpayTGJiGdC1X5pqpS2duQF7rnEMUnz"
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
