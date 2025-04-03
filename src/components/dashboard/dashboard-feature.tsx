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
    "2ayvrqjEJjuZZaAWgh6vabhqSre3Rji8FS5ndogsaiXmDupTueKDFZ4o5X81RsUSGR1u686oMShixJ2Kt6VtSRDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nNbt22EYtGUaUT2zV9jLMzUFiAcRc34EZeuvBdodguHjnoVTJEN7n14Sw8AuFEGzvr1wt2uJSv5xDUN7s9TbzZp",
  "key1": "5SkrtRR1tAEKUb8Pm5EuCXLViS32ZMLuLvvBu5u8WDBAnAxaXxENzinukBeU7hdwYdzCrRHreE8pRFC6qCoGbUdN",
  "key2": "3wtVzZhsEWhQYcAp3PMngpFLrBUtvHQ3Y9AkGYhp6RgQnPwqM3aDZRa7HyApmJJBKd4fhvmou6mJLxxpEPCa5tHs",
  "key3": "2T6bCygxvcvTvtctjnnfyPKfzvzN3gfKL2vaqqxicChAv7kBmBMUsW8zgdYkjdQv4aKaJmsm8uu2nuRK19tqE6D4",
  "key4": "fGeK5AHGwBvKJQRy2xGJg5QPsDMSCbWFSVdx3bPhd9F5AtNJdxN4LRVbTt7ogckWJF7JQeHb81TNMmGRNE5RRgs",
  "key5": "3JoJhnqshEBcjKz5HyivApviaXu94Sy2x3fAaXn62DcPabgRqW88eLuk8WuM1y8Y2gpyy14r1QCr4xKYhCWC6XR1",
  "key6": "3bqC6jvb5i9qwEjbdftSKL9Qgi7E6iQ7rBeKNMHTkgKZr6mgQVTkVrL1JAUagc7pFAWEMNW5x8hBGAea7Ctw9Ejx",
  "key7": "3PNK4cnUfivzZBeM7oychkK2jJqjnmzpyWLJUp1HnLpDaSAF4Kj9ZSW2uPjj8BeoSHjzNArZNiUu3HwFzkWQTcGy",
  "key8": "q7tJjLVWQ9wLJBL5AzbwhPSG2MvhBiruThMJ3jDbK6siavKzbuphhBwoBCXGFSRAmPZT5MNqEv5heHQshynvbhg",
  "key9": "2AhxZ6viU5kqHSLmYQtwwtgzgg2bf4T9iABSagzHVo1g3HYybChcDXfGBX4bPw2NLqeaZmqs39JwbdwESzg3oLDc",
  "key10": "5bZd3CZkcuHNvGPWtB69NsNn8QWSfTTuMrE8oFtqi2zh1bejkEdWuwF9hy9XSiJATDNBKgv9wvFEv78ypi8QowGm",
  "key11": "47vqWiqEZicaNGsdKbcYdAje35gsGQFeP8ye5DpQm23RsXhjUrdBLUKMPr1YCynRZ2xdX72ajstLZG4VYSqiYwH6",
  "key12": "4AvfcuCQmkeBpV7xWSjMd62sHddFvqrtGHfXr7uVKBvEniptq8brLRkRVtXyzmxZzxPM9K9osdpC2P4w69QYHksE",
  "key13": "4uLMZQ1U3JxorYXrH5vEcE1YsnQr4FX2e7367Vt5gpn3LbSccZmo71EfjGcpP2cvWSn9ZG6S1ZzUuibPnT7pmwDr",
  "key14": "4gR6y1HyBiX2dzzJcJo4cpKkiYXsToBtyWSGTVESN7spaE3sbvVDoFSDnznHmjhxhZCm5f33moicGys7F9opuNT8",
  "key15": "4rhzFKoWh2QttJAze7PmvyEb5qGscFYzJQojapzFiCzyixmgRr9wVrCWETUNxshN5bpepLtpfHFJfwCEsyKBLbAK",
  "key16": "5ovBuwSpLDNbVmoVAR62DGexvCw1Ltc9SFcfvZA2PpAPbypAwmqCWoMt72kTnMsRg622MF8jqdc6dP5umkEWWKJT",
  "key17": "2wpiJjTX2akekMGsrnkG2gGwQ941x5qbkprzEDZ7ssNYBQvJhy67onne4UW9WFk76RKkz3fxZrDgAuxsJLVPXxg1",
  "key18": "2ELzWgEkKhvx94aiEaAs6upRx3WueeXrG2LFgRkFya5d1kziSpiqM8uZu75gSfx9BQdJ3VJE8WErvfJrXYR68euM",
  "key19": "2f1jXGnGicRiTp3AZoLvjn9KcfDpLZfzJh4SKPrkTCPffTf5jBKtfxYjFgmN3ShVJsSg38ToDCaQHjVsQsopWTD2",
  "key20": "4xVQ8yG37WPQKVPLnmNgPcne8Q9rp93HHASfcyfwZroSfvurALBvzcNKG35PxUrwPthUVMDp3QSNQ3eECg8KzjPC",
  "key21": "2a4zBwZSML9n129BB39WGeSN7sctahVUyASHDMnMgVq5dfYWtTV4hEzjYpcMidwDgVmNVcbRGS7xgAKTp57WRNZY",
  "key22": "2XktnNjmKX5ZLaWJMVrwJu9KorX4XUvbeV4TJM81o5Fw8JK6Eage8MDXhUJi7kVtqtVFdwDJ9gQz51CnAJBHnyqB",
  "key23": "2x2rkAAXJQyPm7PxKqFNBZqt7VCmeXnahTFtsWq2iE8niBMBxyDAEd5mznn9wCSVr8Nt6xnPayk4FzkpTiHUr8hs",
  "key24": "5QXiBYeJbZs7aZEBhYTxAQ6J6nnTkdkHHSLpSmL4Y2ZkZtNpqAztHF5dSrFbZv3BEpshYiQrSF9pXqzBndop4j8v",
  "key25": "5H6zSezy16WS5XXBVA3NpkViuVTTXdSZ4BcpxEKtVq2kfEusX2Rb63TdfKJmjEeottHXNuFGzanrUWxNHGcEBXCA",
  "key26": "3SfYPMNCQbHaf8RKJLHN8VFmXgDUc4Zicizfer7GWbUSaSNQqbnLReseHbQ8hSHK175cefZ2i5LkgCF6CQLfGnJJ",
  "key27": "5v2P6kL3fJ24qmghTGe8dMwHMNxDPfY2cTVKcQ7tHxayqbHHe2duAsUiSZmguS7MPesoRqjvWKxKQRkDxyrzfYpK",
  "key28": "3jLLzESzgQrSQruwppdVXXWv8vwBBe1v2bJuVmus7ZCZR2R1i8CTFqdHPJ9VB8UVJJgEVnsJbrfUCTUHR4zYAJd7",
  "key29": "5vRPChfMAwqUor7QBd2CB81zAvsTQkQoGiuWMKKQM1Z74seeT8xkA3bJgswEJer8trbzNvwTSGCEDr534VmEAUVX",
  "key30": "2XYsSjLLJ9tcx6moPZQTkse9X9PLDhgvw4SJsbBvzS7aQHzMqLVdRgBDbCvK5yp5fWcY2fXkA1VmzBdpJVSXtady",
  "key31": "2QpdxoUvqPuyWx6wkbugyGXTdwTVEPK4uRZDBuBQETe28t4cxGfqVy4UjwPCH3tDxPT8Jj3wpGu7KNJ1PXyFH5sh",
  "key32": "MzF6qxGAJJEd73pJyC2zirGdYW2ZwmiziXC76VyEAY7rvz76gYqJTGUkbMARXEyjTeKibBigmQtoWQ23uogYT2z",
  "key33": "4i23ZGirvmkpoU2d6GfezjE3dC1e6z8fESTGcuzYxYBFLRLuP4eQgstNZ7E4VcAufHdLwBDH2pmEr2p55udBVAYP",
  "key34": "ijRTU2PWKkC4mP9EM9GxQRgXBzXE3G7895C5cq6v9McEYp1j5JSCdVDMYMsJSh4H9HCVndKchzpJM4P3fbEKKcT",
  "key35": "2qe8LgnHQ1ncEW9aEQE9tUtNW3C5bcno5K6pJUy3BaYnvoLxfmKhJpG6aUUJJDAaKc3gLEwykgxEFAJ33EnyWo4x",
  "key36": "2Atw2PWjoxA9zzwRnpSb5HtiUah2RTHfBHB4TbZVWtaz3aoPc5r4ZhDLDePK6263Umh2kW5ptQd6rHNYhnz4Fuv6",
  "key37": "5hd6RR9TKSG4UtyUpVA5jNJSPNXsDyLMV6hdKFKgpxjqxsHG9AXyfks3U5kiEkWFgqAPHJqVNd6CVNyHF7JTCyw8",
  "key38": "4vACrjYD9hxD1L9k1fqeXbcz2vgxVESDc1wao6BYxcLZFVojxuF7isPuyLuKLLBr7kH915e3FDDvHRBNa3zgFQr4",
  "key39": "DQ3TRpvqLiJJuh9iQFUuvy5xmxdgMaZY8WGv2224dkWPmyNpcw38LESjg8BqnGi37Ek2a4WF19iL2SMH74rAvhn",
  "key40": "2CTBvZN4HHrvgKiFtZEuvARnk1WpRtAemfYdwsBjD16AF9q67TTd4bwiFSKPMrpJk7gfgrDk4rFgHbCY1fgcwnJc",
  "key41": "8qETfwJsMBwr819Py6Dse91n8VWi9aekq1Jbf8zQcQtgZSv9mnPjnosTb5qutri75vVUNMvmuCQ7n3BhDfktmRZ",
  "key42": "5Lk84oHYs95zbGPr6DqqnJXS3jP3Pra585novb2YaDNDWujs3EAT8KNzuGducrCTNWT6ngLog4fNHc4nSnHhf13o",
  "key43": "zpeZeUoY7PQLzUDJTfDc4tcnCMtobSo8HfQSdkChPJfVQRwtoEoAUfwnQEbe9Fk16a2SSgP6FrDDWUCwanDFtx6",
  "key44": "2GKsRfDipgGCgQVDFyFBbhvFG9Pj7CLkkpcGhJZGTucpogR5TAiEkPDr1ehYYASAf4BkV2SCeNsUt691QiuatYCi",
  "key45": "9qFqSV5PLrwYNiFxQmHunwDYt7K7ApWkiMZLhfzZkeQWGDqw5PsE2petF3u6Dxvm4wK8jtye8XjGbM5eseaXHCo",
  "key46": "oxt3u5MBVD2MGg5yitAKWffTkxAn19wctnPgmFgUF5PsVa7fhGpMPBrv16ajPQUmnqZC8hWTDGyM7gWcpywyuzu"
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
