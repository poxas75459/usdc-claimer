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
    "4fguTbJU12JVLhdnWqRjgCHpeWwTWQQCwnRbKC17QqRKBH4nWSU2pLYVJRQSyV7xEmbhmdQqQ3EgGiQyasqZDmeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ieFev8QfupCPCoveWLs74CEv2RyFeTafeW8Juy1xQBHzQaPrzrmDjBYRRCnrDTcHV2qUBT3Sv9t3j2AqH7ttnVd",
  "key1": "38zUsu9mfmYuVybeY1A2VQRL9GMz2oZjEGeiTaaWUim8DNU5Qw9ZUB2188zMNh7PuzQfDWiw2iaunPAbWZnVTKQL",
  "key2": "3ra9pu64DyhGFghbvYy6orunZ3w7widSRA5mGX7qgbZFfX2qvDd1gLMpGhVKV1yL12K7LH5n694F1JG94511hqQ",
  "key3": "4mnDbFdfJGJJUoqpWPxPvULabqjnKQhzj4NhmwNWRUaaoxBdyVnYkHSQaYm19De84pA3b6yozc3Q9rvQKKUiLMpr",
  "key4": "4rLcLjBD9kPA6YM5FnFSsgJVd5qQgcHCm4TGCGCVMadePBoxQBFUuMLfYSuQbB5o7mL6uHXpDr6iUMMXP3Gd28gU",
  "key5": "4CUboXveNkrCbs5cEQBNpBWjneDPy7FwKUYCQACgMUk2SCzyW5AnPbpCtzMCzEdwKyHZsVAu8EDtkkZTDsm8NgTi",
  "key6": "4SyAigNDEvcdk6Xn3tqxpHbR1hvnGN1nSjveguLUkamKb2ErsjVonQdAjmW2Zp7atarPL81bbzGX6pRmgumJSpfC",
  "key7": "3EM2QxweQhScsCSLd66HE4pUwH8HNytQkFNzSKYjbmjffuTbGpLeVaNvRyVykbJGyFA2wuV7rRsfYbZB1PTqJhQM",
  "key8": "SJKZo2uDFZhAkHpQ4U9mvWJkbUyCkv3MnmjXDijz3LRdXSspMa66C7JrivJkdCruA7XuCP6ZP9YtzLctbd4KVpf",
  "key9": "36DfN6vpFN9z7rLsPcrytrvt4SZHbG4mmmZQMkyykLa5QSYcUs8Nzh1fMs7jkk4mX2VEUFh4o1Qog4ShXeodSePa",
  "key10": "3ehFB57UP6KR7BwFkUGnjzC4ba8fbH8Wfp5p8e1VeRfyFdpmaDFYUrXu74cd2SXi7ZoibMEduF1MszdpWpZpc9Gy",
  "key11": "47ihMoCshWVjG2YNmVGUAU8fooewZZT7z5dKTcdyCiZpXUSt9VyzywmxxN43cKa8F1kLUmGiSiKrj8DiYshoMiT3",
  "key12": "2xM8ByqwKE2SRJTHJbpTT48kVtUf4A2WKJyTkBKVZazS88X6zPPimDzxVXA7a6ak3WY4yLtfDApMorkinnfwMxJG",
  "key13": "3D7D4y5hzA6VHtpefMsoMNGVHwJXXTVNdpj5kKLW9fUbtG8UA5YfvVFLGJhZQe3GcifkLktzU2ju4kRrFC8iUrTb",
  "key14": "5yfdpcvujQUc2KKTYzUJFHb2cvD7JVyXbpdwwvUBxtoZzF4DjwaARJ6M9N6PfvaLfbbTasnp47sSQL7uPkYtrr8E",
  "key15": "3Nc6gH1wXTaCC6cLzYgaBA1FLnf85GT8RZsFbCc7vMvMWX8H2GG2YER2ge3cV3ZaLrJk4qZ4KRLtRv87Ywckqbc5",
  "key16": "5jjUwVwpiW4GfVEzjUiJSmtWPbSUNTobLeDbdNuud2gPp3VoCn9gk2sN1dAZWatgJJNLAekuShnuSoQ2KNuU1bt5",
  "key17": "8aRZJpBYy7FQxypmn66eBvBFMm1qMuhUuTnh1j1S4ryaHB1RnffJNkaLrMkaRdrbP9thmRVzddcwhRemLxbq78E",
  "key18": "dgiXfSzHUm4GNYYxKst2WwWLqowLSAG6qagkRwcrdxrwfpNKLB3H9XEtoXvDNvoKBm89ge9VWUbAWxssbcyevrz",
  "key19": "5sgK7JfYUhNaCPno8txBrfJVc1fkBeRuQNjWNC1Y61wnuEqb4aWMQr2NRDSYHBk64sU69bPQor9yDrHaTDRm3ruU",
  "key20": "5ikJXhNYPQGfvHU7n99x3x28YAoDbAncYqKEXnxKBcavaVxuaK4YHXCuxigw4PXFsDgaGNopwqUkBKK2jrNQArFy",
  "key21": "Q7rL2Ehn9sCaVyfQ1KrY8QDkyQC7YHHH1V9ubRZjFH2fjixMY8EdsjGiN2x5R8gitsAxiAk77noB3r7UY1W6u5c",
  "key22": "4gvd2N62dbQHBhGef3DHhppxzZbdttihndRdFdmqYKFFxinKGbKq2Bhe9RnYSWCCiZvvxMw2j6C8pTVsyvZsPdcc",
  "key23": "3CvZ7kkWNNGC9DKj79DErW13e4e2ZAor5xgLX6dzYBFsWAZfhFapnhH1CVSkFgvgaVCumBwoiAupp8PRVFqF8XwB",
  "key24": "53YvWUphZ4LWEGJYHo8ocL1jmWGyDXoQCGs4FuXDMJkXrTC94cw22c6xGZ9Y4ZpkdThLHseztbC8nWXBxSAaAqnT",
  "key25": "43fsESdQ564vjZ8B6GNGY8LGX39NK6ABoEczgiYcUqhBWtGE79GbmydtL7MBBk7UQLVjhawRXfiR35EbqAduSDmP",
  "key26": "2moxHpc7BafiSTVpExb4j9UCkLfwztBUnng1E2aQEca21iBfxkEYjgyh6DVS7TMa8WKWp3wPPKxY72HXL1WDXRpv",
  "key27": "RZLG3rJWBkfRNdwxtJkJhN5ZcP9hKW9PVU8WsGeXCJphqSgrh9fqQ78LYH3uht82vRt45dTHS7TGhy7154Ye1wx",
  "key28": "2Ciaifhmdu3AXmqRyFauJTZJnzt3Yo4fXJ9GTETF96VtjT9h45VVm2JvBQTBfaZg47yeRx8w4L2jSByR3utJCFEG",
  "key29": "5HafZUmrFcDT9beNGL7kmx3JYSBbj8QLb21HhNNcVfymMCZDRXc9LUKdErNb7wKfuZqPe7eofoy4awrWJ68FCBGM",
  "key30": "8yRHAssGacdDBrZSQz9DArC3hNMA3iWStKmQEWRyBg2qxSa24dBs4cREEP6RWkfYVb8F7zq2FzqLK2d26viY5dH",
  "key31": "4erYQtQMvHN4SupAamytBGdCEvxenAKMnKJBwzM7Wrroi2BMZtMM8cXMekhoaxRbQj3dkrVGMagMgjwSdMeaVwdR",
  "key32": "4e9nnchDnf6UXepXhuWbSksBzNwMrkaz9UxoBAvJBmSFp8PKHJTQ7VN8jovS7FC8z3cdVVXPBJjYbtTeosw34ZNs",
  "key33": "3X9PzYB569mhoNMs37q6sPcASYgCaWKZzYztobmefrv29jbWD8KzQ19qLtj25ei9UjiiHyg13PP7xjUBPdTXUaXM",
  "key34": "2Dedb5Tr2LRKT2kU2ffRNsgoetWYa1zjuufmj2W8eiTbm8q81Qf6mQKsk2DmNXFkUjbfFPeTD3kpCFf1fq7mndua",
  "key35": "2aM6fgYUTBHymVV2sCq5r6vzS7xapunqdNxZq5Bbiq7xVRdD9jKZD6UVRS7vbEogMfKtPkDcJLbShsqEbh8xBRVh",
  "key36": "2sDvC1Q73Fw5UrmgZiacABu87coeAPJMFsqhC8Hv36C86R9cPtBtVTSf3fuwtvkvGedJPYibzRhW199YpAGw1VGU",
  "key37": "52AdBuXTXH16sJKNsJp88HdNrxgSroh3jH2q4Z2NuREiNiAnrV2qy68TsqKkRnii6vPJQnz8Vw3SDSo3cw1T96hh",
  "key38": "5dwp7QQHLUxGgBSsd5S5x78vC1fHMzLssi8DowDRsx1MncumfLEPNjvdkzshspTqYuLQJjogPDeLehifXLx7dCna",
  "key39": "5Eg4GMSRMhv3u8rqmkoZ314Mgk9QaQwYi4NSUbNNtiGjqbp8hw1BA4ZipRZ8vZJVXyoMTPkcsQxWTDZFcB2h4V5X",
  "key40": "4FsvFxSivTc9oWGeK7e5Poa61HsxW7P4DJog9cb5q6Q5QYeH1Nf1TCkXs8aPD5q54EinnoTdrq6p8H2rzzrK5EHh",
  "key41": "4DT7kkh3czSE4mR92gZGyaFmTFZWjCBsXaoEooiqUV92AwJKWSp1t7dZpE3P1GrLPLn14DU2JwJBUH9TY3F117aN",
  "key42": "5NQEy7Dw5tTKsnfiYA58XUNyj3rQ1gqwPu4x8Sd71o5dfKWj1MooqRnkuNbZt1h5Bdy5JcVtfXpJP73bFfLwn6Rb",
  "key43": "4WGd3wvBhzGhydL889qXjKm46UTnquyiqU5SWjo3NLZcv9kf2VmTC4KxP2u6padk1kowYBM9eBbdxAsvoTiUtFKu",
  "key44": "5DJ25ziCxCS52MxHgrD3nvpsrVXjY1GpQcGqLz4d9S8gDiybMrjmmSZAyVYBBbHV4dGkn7cNRngDCuqrGTB31Dyk",
  "key45": "NvkiVNaQ3sQsTZ5No4wdrBsmywFNEtDHxg8WWK7FyQs686KagVmQdnW2rxQ7eArSuNTfHtcH8tMnVmtV2ZCVwgV",
  "key46": "57MVJMJVdYwqA8vWt5B4RhLXib4trDidk7RHitg2LWNW3z4QYbLF3V4q9j4vgpxHuoBXVg9jw4wS2ZuMH4iqySP4",
  "key47": "4f7argDGissgH5z9JXsw1mzNcBqogmv5VaRrMG6Kq4Zh2bnm1S7k7NvUk23KKgkUPUfThtAAmGwR8QkJTG7MEBwk",
  "key48": "5AYw2B4QYp2KJPBPk3Gz61UwMpggquAmTJuHM3HkWGV2E9HxavSPyzg8K82xEP4bnJcXCtx2hzcnjP5MBZZSznVp",
  "key49": "3p1P9m9BSbJQyA1SeTJ1ZCERtpCCcYCYT2Pa7tjakjsdy5ptdaC4Qs3F3HanujGxtnQgtGpaAuVe5JTkUdwq958w"
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
