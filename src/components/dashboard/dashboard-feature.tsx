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
    "56e3Rww2XE4ZoPaZqBXUNxNuAS9owNBMBb7rE1oCxrX8rrdvvF6dkEPyCfL8hCgQU2wYvrDo8tDr5w6p2YfWkrxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WyjTHd3SzAbCdnP4QMVUK3tTaJqFXcykHwrvaZiQLzFPqLde1NSwkvDcmAvppyNwA4uJ5q21gJe1qGXiNQNcE8T",
  "key1": "5cGaQUTML1YuTa6KSChsAErh8qQAL5tCkcDdx6CmhdyLQf5LBx574KWNnZR6NLxedbmHRJrDAUpeaGR8Jz27X2wg",
  "key2": "625iBy4RZMP6MKAN8hWXSyzAxZ7RVnSSBuEhcq2acM8RGY73bSL3oFZicSjwoeNJAstySkoUE4EQCjhxASN8bn3H",
  "key3": "39DSnW3JWPiHG1eK97fosXpomnLyJsGr7A3LCsn62KfB6z6Hfeo29HyVqNedTGpaU765AxX9RucV8YV4JLhTtVdD",
  "key4": "am7KE1juvjiN7MPsqM3egqotM7HFMfQgsLkno7kfJ2c1gE2uCNYrFHsS13ekWRghsJRzgWuUG4o88VSqXu6uHjd",
  "key5": "syDrjQe7KFSFQWde8saZbB9gZVVHFRQYp7cSNQCJY2jxuFiF1FNpoVVmj5k5mCzj8cospCVaGH6AeaUnv26hEDi",
  "key6": "4QNCvhZKd9P9fBUXkvXCri3fB6hkuoVzT95g1XAZLTTimxNc1N7mEDSuJR5fydrJQs4f4SmmcZCAcWH9NP5zD8Pg",
  "key7": "Gsgh3dJUpwK2kYxudV8rEapVzX4Xz2q4MqU2NFzhSJ8jTvbfza8hAVitcx2Y1J6gi4L8MCesNwQkPJSL5W2Zbca",
  "key8": "25GsZ88WAwhX1R7p35A9cYicPj2oHx7cAvwtfh4YYikLwFPV9EuLc5gEzh73qzWfFemFgCAxYc9ZUBiMciTHzqs8",
  "key9": "2uq9w7734YCjzhNncEt7CK7cs1z6HUvKeFwpP3dG5NBte4VpyvCuwPJm6xpeP6dci5VzbCKQRAZ5EbX2PFCjSKAm",
  "key10": "554sq2eBzcemd8GSm2z5CA4dPSXqpoWghrcUfmDXQKo8JCntLfAkiko1gSqjsn7K6QBJXsyXkmZ1NsFQsMJtMutE",
  "key11": "5JDDy6jaeyL9ahWpDhx1EvVTPCDn5mVox5M8U8dxEYDbeZ21cULYjcKMaKuecj7AAbjqKNrnpe2S2JtzLq8QSbbK",
  "key12": "63KQ4tcQDvpAip7niX8jUiY9zQQr4XGVThP8XJEZ7FwLyytUhWMH9xxeCxnKTmNUCSpVf3aofXGTcc8xjvZ5cZYx",
  "key13": "MyzsdHDEekuQakV9GHaJJvWzSX735LezabJWSUsiSbPb815754Bv2bFGkxBfAWSiyKwT4ojnQwQuG7QzbjuyBbx",
  "key14": "3BJL6k1crMPjvyG4AdZQDSt1EBNEsH9u8UHifCVVWgtTTJyqLkGsJjUzdNeU8HtVX3fee46LPzfkeyVuKJc21cXM",
  "key15": "4PQsYZVuzm2pM4uM56ep8TAX8MtVS4n4gHxPS74z19iXdZNXEu8tLLn7wHEn1GaSM3CeLJJ8uEFLEje2xEse7UWp",
  "key16": "3AubbcpX5mum5rx9F5UqMczoWSrvbf3uEwzYMfJsq9Uwqc7eEgFfaBA3eXW9rwEyeb8XipXEko94XNLwkj2hSuzG",
  "key17": "2VUcq8qNVSrBMun8adHEypAKan4y4DTZVYbxxCAXzLzJQGdCd1rTHLMsgdpReHL9TLGSWbv6c5kpGCbbWHGyJexv",
  "key18": "5UhiWYUXA7Sec1v7LbCQPA5E2ZacfMo3BdNUF6ZH6bKoEXYrPbLX2aX4oJ2pQJyE16cNcW7qhixogAqUhDf5zYca",
  "key19": "3H9gNqqtTYJLcfeWSmiszr9soMaK2qBatwW7gZrLEpf6KvGRnMpLwbwZ8jgE25fXNsbKvmYXLHQeynEUpw1unXx3",
  "key20": "5XTVZn8UKvN7fU72nvzTMaa6mKAHruEHW37BjYCSygSRXseVcjjcCdCoXNSjKnkEGW18xaxt5e5foymJ77R1rnnw",
  "key21": "39mpgDk2m5Z6EdV8ZFiMFJrzreWZnTuQzbFxA1ZrKMafg143xt8SPqr711WHJ2QgQRsGX6e5biT7Wxy5F6mVUEtP",
  "key22": "4Q8efJ3m7dhNQVUeChcoSHz6eHZQ6WKvVpnsWTZ2c1FssgWehKMK69Go7PAjpwoh7Vefsqk8ESairegbtiuk1rHd",
  "key23": "4Hm4zD2Hvgq1C4FsubJd7HwbM7XTy4m6tFy4JJy5ii75DD6q5fKJHX7QMeVNLBenoezFavnEPHBvBCHCqopaNhP6",
  "key24": "4WJWWcQnBmnuNrQAYdGHjeK9TVwgzj4mQwsMWHKUwT5q3Bu6bSesHHFPty9BQ17ptocAMEpRVu9cTqLL3YaKuLsQ",
  "key25": "5rCu31x9HMBgb2Wy2yUizghNTLyPQo8ugRohmz1fQNUPNzhPp3YXDdymbD1jH8acKsvxbuHhTU2XeoxjT2Czj3g3",
  "key26": "2McnLkj8CsuXSXqdisapNMRKatfV5j9QfyC4jW6LN1dwsF2fxpKAMGC5PuUZiyuR39g7HwYxKSMBGV5xqiDPWAfx",
  "key27": "63mo6z2XahUqqYsG6g3dVZ6b57nSwwCGtxWX1eBtdm7yr1wNWexbmEtvohkh5RGt1PUuUAq13c9Q7Rxh7fJdq7xU",
  "key28": "2iX1baMAv7Shjgsa3M9qfg6k1N9TDgasVvE9BW2UFsNA1d7ddy8wDh4DMtcAq7X273oXfcNHVBibEjzfF53uUqew",
  "key29": "3jCUAynjHh5gviveGCCb8MHV3s9hKY2vXGgpMerPwXKTG31N8ozbbdrsSwa6G9zsJ36fPFoV1E5CTCwUotG8Fm17",
  "key30": "2YtnJmthJXwbU3CTL245VEsXHHyp2bo3vqsAWzSgyuDHgmvZE1BUrET6R87MJHEaEpYaSzf14dpNSo5eaHmzTLWn",
  "key31": "2F9A85gKD2acT3QDScAvPbGa4xnwfaDmnPf7UPwowpH3QsCqQm4kRP8WrGjmsWSdQdsvRg6WHhkKqxWG8qJvKkUr",
  "key32": "3vMAiPik3LBPDEN6oi5aHjSnVvYGnm4qR8PtFY4hzBM4EEi6rJPNSYLnuh7a1TB7gHphue4oqiPif8N5jpAsjVik",
  "key33": "S11nTJ2vW1XLajSaVYTaYxNs6sQDsN7NFYZWRMeQJHNMLxZcf66SHVGzcdKme6rzVC9jdJCnjJg1QkceVUfgoBr",
  "key34": "2xEZUGScEW8RL4Whp3CDF2jgzMuRcyzKEM7BaomLMvyPssWRX2afia67LgrSd3vf6BZXDeenVLb83PwJo5ao8o5N",
  "key35": "MaHy96pgANVgRHqJQonxG6fvtdDDN8tPjbH1FzHL96vLEZZkpcFy8YJ3CeckGpRJcHAwt5d81AZJXLVtqyZHwBr",
  "key36": "2pBvV1SpU6jEUJTMnhLP5rDUZMFD2vEY9pPuuSjccWUVjtzsMmKydVkPbgW6CVGS1VAuRNTEyYpSkXKftYE5VwRn",
  "key37": "5QWcu2GHDGZWzhMpENYYMf58TYhrV63TxjyhvosVQ9SipoknuM3t19kDKxoiWrxzz6B4bt1KCfvNX9oKjNMVA3co",
  "key38": "MxfCJRZmPZv7owzhynatSX4rBYBUGdgu2iog4GCLyxtreHGUEhGiHCmZeLYWUuU6eSCnaSqN1TF77YMzmwuwzKq",
  "key39": "UALXBzcVpm1MEC6LzFvKB5XVvtWvnRCTknFtGFH3WBDv1u7QJxbHW5tYTuq9xBGzeDvaQJEetGSQrdheRbCetLy",
  "key40": "3c6se2BsJiSVGPnM7DukzSeiNkqPTxny8jvr7yFsVfL99gs8qUtaWibyZ9eoAfcMC2w7vSyt3qjhCji3SqLpMKF4",
  "key41": "3qChYSpyaoEGtgZ8AWeDthpFgVeMB9UAFMV6hRc6js3bjaSHyFpMsQBvJXbc3NskNFSS7LLR5duU562TDyzKX12f",
  "key42": "2Y8RZJZNgAfp8hdfTradKE6fwKwTaa6iACcFQEUXNMo5JacFBKU5CcxxKvzP7wLBQnDj4aHGfFcE788XRPFR26Fy",
  "key43": "5HEbcB1MaxBNpkWAJ6MvPcpge4USDSqCSaQzgk5imLY1S3j6TkEhtQAkzb8cjCNsBUCmxdWJGubatRYMbqSSEdjq",
  "key44": "5b7vyqARV1hMLwjEsdhVH7myeeuLdjmcf8jpHxqV5AiBq4qCJ56NNa3iSn8F4WhxGjK5tKQoDyZ5YGbgiPb46vKW",
  "key45": "3UiCKToV6DnRYKuPk4Md3uBuLKNCXd2YmpR91oJ4sEfU5ERsmREuG1krwEe36S5FbubXAhH8vBTp2qi8A1Ww4NYG"
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
