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
    "4LWhpE789Zwoj1VBPGn4Hfsr4u8GykXutXY6shXwuAtXBR4SsvxPp1qaNzeaNJwU8t8C3riWFQHGNH3GQUUjpqDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z42NcD4cY1Ld6US72wu9bWnxu9A2B6e4SSgVBbp21CaDzR3Cb94UhBk8R9paLM16CwckfxDy54N7JQdTp9V8oKM",
  "key1": "5xfTPpN3Xz6j4cJwcL4gSqCbG5RhtW3sT9mHHQQRoVdSZ8LYGiZwjrkdLdJjCf46sUM7DnTX7QmiFkJ8oFskSGfc",
  "key2": "52Poiw7ivzRcpi4NyM6xSqys23xwYS2mmkEJTsb13fmApJ95W76NdMRswfwCXfKgLmyrCJqc71bX1xCshDPXThBT",
  "key3": "5Cf3nJKsHLN3gGWinBeatMSrPpF5rjawWYzhh5joQfWykpKmsFcwa8BL1JKhVJxngqJ4CFh2zKCHD6GJgsRHjWi",
  "key4": "sBxPSXyaYu4PT5y9Csxm8vYQyurWvDpvUwHkQCdX9cE7TRA2pzpf8a9v4DdZ8owFQBFyieap34ujsT4ux3sooZp",
  "key5": "4BaM7VGzToR2h2A3nawR43xtFgNAW14sZL4RDGg6RUnfFyMLhAiu8njiBiC7m9pHhqQox7We7hZYUposUtNsDFTT",
  "key6": "28Ck1vgA2V9zK2BDQZcuUhoJMA6L33Fu44VKR5FKzvanBJoRU58JhwN8fxkVM4CoN53XSrNAyxDQ51WWSWpNPfAg",
  "key7": "3ZWvjpUB4Yx5rBu4FFrhPW4R466oUuNkdG6BxNvEPcZ2xS3pATjYeAeJwsbQ6aMqJ54kv5HZNdXWSVQu5UGtJqYn",
  "key8": "5yKWaqSMqQnFMDh21hkq3n9KGrNeDmvar8GP6FDoKBVt9HUJPyUsGYjXqc6PTHAJfSN2Ga6yrEcUtyjFftYZVFRn",
  "key9": "5R91bMQKbSvUk1PXcdqg8zYrc33XFf3QzLRkGCutpTMTsXzpo4WE9CLDh5FY3ciXbQYo92EiianSq3BN6PQa87Ue",
  "key10": "5cQwQ65bjAk8PAyHzQkxvo1TuKcjAJgGiHoGVMMihBrjqy8CAuqdPhiScHphGEAU8VuU1mQSeu3g7r7Yf2mAqnZa",
  "key11": "5P6ofG2hFyAqEZEKmWPjr5GqqjKXzefa7HwkSxNkbhLeG3ZonkY2wjf3GvoaMn3mJ3Np9x4gLJjoE6Bv3SRuqijx",
  "key12": "VYZXDSMM5pWPDbYccAJSeqev3pT58Vhso8gwe83SY9V8kF9KugDnBM5eZiSzKMQvK5FJnpWe8dt6Ks5VXb8jdzm",
  "key13": "woQ62QthUcHa1G6nBnhCEHPGX4RoPuNQieVqxkNTa46UstJkbov12422gwSKEQ6LZy1qXr6gVjWmLzBC81RJv7j",
  "key14": "226Rb9AVQbiYrfivAZSBmxGNzJ8P2Ehczdu4yeDyyZp1PQgvZMKJZTNUn2yNK2hhJbShp8p2ofuCvfhRzE1TbFZk",
  "key15": "4joXqs9SrPs2CvUKn3kL56339VZ7Mo3aU5wGu72zhKty6rDk4gWNzhLTrjAXeFTCRkkEJhmRA5fWGjo2JHM1vnKB",
  "key16": "4zm6FRQCX8sxrNTYgzdXNkMWAMZZ8WcjfNqNKdXpUR1CiFNyp5fzEYnuYY3KrtoVCGpLjwzxRqtDijkJQMkZJo1X",
  "key17": "42HSzb4v5j9WajfdzW3th7tBC5y4MwaUR8woNNQvs76rAV1AZBiCHKDKSXVGPRfomiKguPhUCKet7dTNnBhnRpNf",
  "key18": "5RwVNi1pVxx2fJ1raBqAToLAHFJcGUi3DTjH6g1BhCiumLYgRmEq2whR44mcE16wD1J8yinvgx4EWQypRfJSugLt",
  "key19": "38rhDe4GrM1T6CS24osN6LLrvv5comD1s7enXnnKAEuzNrFzDehMcmLXfX1TMEqb83EuHmYVqaBZB3roGhhwxasE",
  "key20": "44E8WhPsiSbCdhCPYJ5jKptv1E2tygGudZtKGxLPrwjKjd8Fth71TF5saFy6Sdem1DFATw1uBfWpat7W6YZ5YB2p",
  "key21": "5PXoFLxuctqy5tikk8k4sMwrPs61ABejzsGzXBPiLvpTKbHiYdDJzRbtQuVnkjyj5whgN5c3VBWDLbHAPhs3TCt3",
  "key22": "54QstF4ETawDCZrsADoje3qNbcgBBp7GBqRY8zoLs7yDLhXz426YzJMTpaFxG9da8mrDuKNgW47Gu4PqRntci1uB",
  "key23": "5Fjx6poKSbHmLF3ZoZab2RA47HwbbSKGhaQiKJ7mXd1nRA7f6zVRnKFE8yXZEjoMwcyEpjUpE4mQJmAZvyEMA4an",
  "key24": "525A14xrny6r48q9HZX4ihsr8TR8HgSeAWbf2qxZLKevypzKzPYgob6u8szx1oprzwTvdtRoUZ2zxV2jp37PJq2J",
  "key25": "2YhU5FiEL8m5mwyubk6DWumdGXKr6nEy8kDmUZUX2tYtLvTtYRRRGRWktb2YSCX9Jsx1Ueryv1Jdb5rHF9GEmCSb",
  "key26": "3RFf7ier3yqgofoWB9ar4a2gXHPsrXizxtLuAoUGoVngCno1hSe1GkCAQZULyeR7vCHkNnrCL3JarNxjHzW8Siby",
  "key27": "4XvmhV2DgrZq3bfQtcUbEuGBt3RY5wKtMbKguA9B7YSTp2e2NYfYbjo47JgM7nHof14M4P2h1HF9Y1SoBEr2cLKU",
  "key28": "3oBSCsq4VZ3o43SZWtTvm8TkiTJ1v9rdQ54sYh9brQnNj2hz94qdi7zBgJ2rCQAoTjk6vHBdSxtaYPCyDmxWcoYd",
  "key29": "4ttmG5jAMmoRaMEP5QQp9TienAgKrCEQ62J1GJSythYgHdPz34CdzHsypPqtau594dUTta6qawt8N35RR8YdrPG",
  "key30": "5TvdG9ConYa4pacVm166P2cGW6TBmFRqmY3YYaWCNSP9GXNRDcaasDMKvuwHVC5fTXeiskkCxkNa269ih3npaqNM",
  "key31": "4PCBCFyRTHGw9WzjAZhdXZtoB6X7wAVwmAu9Srkt1UENNGcLBSSgKLx2GSHXpXcDot9RoYF7tMSr9YE8iFVVqiDd",
  "key32": "4RfJBHvTtLB8s2PcCusBDzKrYnZU1xRuSkE6RHP4aQubNQ6Y6rJimHYJL76tbwfumLnejvYnP5u9cPC7UpnttYyz",
  "key33": "wByAUe52hB1T4sjidTHjFoNAdYbBgmPHgTqMTEisGGqLJeEyNyzPjRw2wpnD4UBfGBhxspwdbxfEmCjVnapEEqi",
  "key34": "47bf9hXwVN21QEVg2prC32nStNLGeSuPrh7AthwbARGE8ToJAZP8eff7FT7C6w2qKKB2xkuvcxGe28PquN5YkjVQ",
  "key35": "4Qv4523iYsU9DtvSEHi1oXdLs55FHZpWfitsp29FtkRiLAsNziXZHVLfWb7ogCAHQ8Sif4CCsycX24uakLzPjw4A",
  "key36": "dRhGz6h6Uat3Y9b9E72XFEyKMHuJtgFzCdk78QpFBjhcYmAz3jMeGUUwa1RJpca4dqGKMheC13v8hjhuUKe8zLK",
  "key37": "5ZS5szBBhVPp8g63qnbsMhuBeyxgBi5WPPr8qaqpEJ78zzP6jAypPCTrY7qGx16ki2LqNAwJrbEHe9veUa6KLKS4",
  "key38": "5XF4WJ74W8koYD1VpkTHX11QGvSstNHQVJyNKaZkBfkmKEZeZaXWre45G6Jdyd8fxuF3yog5DHgkY5mfDSCzg21c",
  "key39": "2kcMzkQb1RmBba2MYs9fWMamu9rTg1YNV3q7TixcpMVWkUWiizsGWNM2EsiJCFXt6Hfgz4etURCFMkpgJZ4qmgLr",
  "key40": "2jU4vfipMXHWchdFAqMjKVDfHum5Qje7FVFK8wQCgAURyr2C4UmyKSfhd2v6kasbdDfeXLE4YVSNNmhmAAFVeySm",
  "key41": "2jvpMQRMq5a8FpXJun27Y7Muu4EiwLAhqYTD23iedpEvxsqZ6L9uAiujogCRvwp9praT66KzaAB7WF8ekLLZhh7M",
  "key42": "3XBUwhRTSAndWwDQ3RUsANoGnRgruJABkjiNfnDhTRrrzLDfXpXViBo1SpLqw3dPeD71sHXbTu24jKS3454YExCi",
  "key43": "5UHiWdFdDEVLZwngWU1vYrpzPYBm64jJdgpquyXJrS4QeFuWbrePnzft7SrnxwT2guyMgjV36KFxJv9HXwwz83gd",
  "key44": "daa71DvknCmAYEzfsfGEhU3AaaGfUEAz6ruPoRc9zL8XCgkuJKHFfSjNqrQSLYrbKU2Q2FhuHrd927K2nN25Ctq",
  "key45": "2fAKxR54JxFeyDmPihZe36Vqg6P5ZLHkvsEaH7Mktjt4xNBghsWdCbZu8zEwaVuP2QZksGtkEzDUF8kUjgQeSkwD",
  "key46": "2NDSaCnueo3F1mLSDtxrSpR517j1kmuR8aRTPR8hyYxVzbTqWJKxu2A9ogSPpFg5HWwxKnomnbrosbqUH8JNXY59",
  "key47": "5U18qq65dDYr484sjrwzyCeTUzGguAi4A14VSYAnGE6ztc7NzYTEG2WmWTG92QJudGCSPriVcWxqPVxiJ2w2fhYR",
  "key48": "44Z5eN5JNuqZ1A9jAgFG3Hhud618inP19Z7ttYhNycnXhSSkmqe2AeVaMVVJEfvf1n7WwyaGjY4hhjGXzU6wepP",
  "key49": "4CbSJnoHmUwpZ5sQ7ApMo76yEzBmCnBqPi15dQR6UpVdSwSEjM32EhJjz4LHfst6kEs6eJZ2Rvk2jhJt4yUWd68M"
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
