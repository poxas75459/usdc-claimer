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
    "Rp5cvx1r1q1sCw9vN7gRpSuenAp7swNjpcuhKUHu4WvADZnWoHD9ns8eJx9KS7X131DN9cFyAH4iqmQceTSNVaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n11YLdVwxTvFNxBWdBUN2fgmxSpdkwtvoutZY7zBzo5V9pnM8Qg7hKzMMYfwoEzQCCfaRtPhuPzdxT9hdV4gQKs",
  "key1": "3SEgtYRdsQSWcrrVzxF735d9SeadQaCxDtFW1FyhG7eNkqS4t8WyLtcqHQMyDtbnj1Dq8WBYhdzwFrA6u9S8rukq",
  "key2": "4JFqa37heQnvFHjJxrX61XFvUrFM3sREYsutWKWA2oK4yx2mnNGfMSRZaumsegjtcQEsymeT73xQUwgRyLPHGh6H",
  "key3": "27PQ1Yh1urLXSYwYVTG1EB5AsqHGigGy5JGj9nBfL3vmvCdr2NZxp96KRkkepvSvs8pVkHcBX7agfEiizQbJPLWV",
  "key4": "3N3qyFnQN69xLfaucKYHLEFTte1Ya1ncrmjBd4pbyMUG3oCD1vZWW6ob93XQr53BheYbL39Hj2if2uhpetgXhezJ",
  "key5": "3Eu2TAPK968Sknmqmk68JkuATNc3aGFH8fnwbskiqYPys9xYCjjnHSd2qYwCDnJBDwhK8mcaVZZN4fHoghEH9E4y",
  "key6": "3JsfnrsVypLLqpHnWdrvbmRWUamxfX86fNvzenzegdvf9WupWdMpgDniXPT5kGRDtSxMym8eMGBzri4ALUMkzohX",
  "key7": "zQJNr5nPYRNsw8Th35XsT9DheiDHWuS5tt4UPLDpnoiawcYjdX2cHrdm2eytuTAMBWQKEkZataQ67NZpPWvqAge",
  "key8": "31JGogbSpYPjuW3YDCGyQoh2n4js7GpHur63g6RcrEWxDYSbrHA88zZM2t7AwGe7o73T9njbNVBttvhHfrMF7Fhr",
  "key9": "5tU5pSFcjnorzubP3i8CgMikTa6UT3PVnpRkwsZLKC9JrWgNhZ3XtehPaTKvxUxxeVYo5TFESFmU8wWfJWXaHXmn",
  "key10": "3aWXUrdTQhnW9HmrVUZQ8bawvWRZnJi393LZFFaeHb5gzJ8c3wirBzecbs5hR1b6gQ1L8J73v6jmnkvubWrbTfdb",
  "key11": "Q2XWz6Gv3esWMHX1yZWBEXeoZVfRHmFTd6DE6t8gxdS2FQYb7i7sSm2ejBkGUroo2UcLavjrq3krPApbNDonZso",
  "key12": "4c6jJ8soXNVTZtpmbktj2XRmysHMa3WRVYrAQJR8yju3nDbRxw2n26SfzGM1hdQFbMuWQyQTU3yw17934vRay7nv",
  "key13": "5dbqnd6Ltr6eSPb1GY8NDjETwbYw6nQSBD4dnAaohBXhM8s8kWaKYXQf4ztnusfjPSS3Vu55RU2D1Cw5gXWk4qBM",
  "key14": "31GCWFXbshQLFStSfzovsw2x9cRCvFA2w2fMEaY535U5XBjRpPXHPHejKEiqavxkwhR2RLmstBgMyJtgwmEyMTuz",
  "key15": "2gDbGiDWfJwuqFNZdDAufspTnpPnJTBWZtXmVjShyZo6aJHG9GyB75EbEYSdhSxv1p4MTdopa9fUZFGEJ84oMPrb",
  "key16": "2GX4km98xerhWkFYEix3UQinwCgt1CMW8Yw18qBqMYmXr34aiUapHSTC72v5yW1zMAGrEMg2Kkbkbn7zCVzLPkuN",
  "key17": "332ntBKrJL8R3FUB1zgJ5NkMdyKfL6PLqKzgRkVV55STrxN8z9ZRzPdutKi3TSbiFzM81vBbKTX2S3dcEBstZd6d",
  "key18": "5kH5qSQayK5UhVifjNq8USSz17idEySFqhwYBH8XALHtZMNvMbQVUdjp53hry1gK5P2PvpwjsyaEVSURRCmGygiF",
  "key19": "2DiBJNND72htxT6KiojC3jMvHq1yLrx3wqGHJWASRjbhFf2TW7yi9W5cmccgzFxNE1uJ64rsdMwCgiXtJyUQFm9F",
  "key20": "4cMd7GNz7MuZkPGWUKSEJRwbKtdvj5EFvgHfKfS2c5LuRnQ8kX6NMAfEiPD6AgTErYSr4P9hnqDPrg5ZGGmvLV15",
  "key21": "5Xqyn46Y5t1cjXAYYnwp9K69GCxfcPmoZoXJptppWA3zqCvjwYQ5ggzTn8qQaXzf157hHDNyLbtXmRYJjH1DxCL3",
  "key22": "2geNVNrVPnjhYCHKNpLMV4CkgdjPjhZsvSFHREHoVsc6xhainUEhgsmepXrtuMqansU2Uzdoc9RZKvYHxaZdhoog",
  "key23": "4MfzaNkabyj214zZv9FnuKom53PADobePMTRuoaddCLVkY3J71STHyByhMCT4SNtpuhXVUiUdPF8BgwGcUfLuRNP",
  "key24": "29iSZWkCK1PK7Yi6FBS2Nu6dmtDbqYrbPe9DkYu8VyWDzdhigqDy2gBsTDTvqST6mcEFZHkZ4xj5wCMrkn4ib6Hy",
  "key25": "4PDtQHKgL42kZtWhjRD3Extgp2psxhVkNBp1F8iNpvbfQbdVMvjjKdb7mKdAFZEUe73WgjZttSbChrBd7Sphx7XC",
  "key26": "67kwcWSdytBatVkYgXXtsK4PkdqmRLscYS79qBnFEWcpu1YjP6U4PaTUrKHcZSVBu3DtR35U1xSq6dGZJ89TPiZj",
  "key27": "2XpV1LGX1G76wNonz4L5MyqLGFqDc6B45KwZZJWsyvvw7aj8YNeTaHgyGzfG5bKhsPCruhM1QyZLKQnk7r7PKReo",
  "key28": "5JzwxgMZ7JYY43H3TKRWgNjurLWJFbCsqqmCDCHRH1wHt9WMTJtrvBPnWvBX7grk7e4RF7Za2j4RYLpxnbkckuUF",
  "key29": "2dupBPnRazr14NorXmtTNojsKhbFaYFvpdWbA8HBequbWPRYmXUfpzSo6rMkEURHAg5ThGbT2LanZARdS4XLNKK2",
  "key30": "52pRzTfT6a59311os7nYC9khZEdekhuVVyoLQqLbHzAfSMpCxKsKu4gUK3K7GjHfu5njxCjUctQ72xJg7RNU2amW",
  "key31": "2Zu6YSYr4QoKV7hcA4Ha6aUeigfGoQ1EaFRy3d7f2bPEDFW4qSqYyedCBa7cpczPQ1xKbMxCzgsXJbmegEPeDh2B",
  "key32": "jKaNW6PgqwJYZ2oR49X97Ry2PPqEUw9iRyCcenXc2WW7c4nZzsi8eDj7C19ntxLCivPUtBEAZyetMAGbsPjJPih",
  "key33": "4T3resVGZqHG5wkNf9PeDPUDtvUKw4jrpsQ1Ap62QF6CKyFVGWmVT39eHWjX9bb2SoAu9vjMLCy2iJvte9vfMaXs",
  "key34": "3hE3Uh4K3fsR8pEQsXinpCff6R7bPuFjUJ2MoZcYna5UzmGMYR5xnQE6m3wyP5L3pRnBtt6WpVbun6S8edQkbCuo",
  "key35": "3H8danwVWz1AKRh2yP48iMhh2qmKBdsXqTiKX7TyxoZK884pNpi6yPHRhLfi6Ch4XSAg1H2GztSFSpk55LCNEFej",
  "key36": "3JRfZcq25224YxLeR64ti3pziZwJyxUagtQ5sipuvMPfRQgsmSuJ8nciVqT7jBbySYfjcZVsvSWE7oJshacjCR3s",
  "key37": "5qVJ4BRYNiw5Aswyx2SckmCAVjk5PbJdbGAWbStYyySNkfehbMGcr76D5naCYUH6nvf1c8arYcgeuKtV3VBiNkfd",
  "key38": "SBT8upjcfEGwP4Ji7BrzPca1LWZqUFp7BGgYwxFC1FPMNkPZeNfRgdLCqexgxrWc83ieWzVc6SG7sHMxRkeFFHP",
  "key39": "5zsqrkYchU9RFHWXhqZKgdYXMKgpoFdyLQgy87QRU9vpvnXAvi1Tk7uN3FGdp9bzHMw3rAuYUvafgLUVFGXzLt8b",
  "key40": "5k1JVWahHuH2DX8gwxscUuimH6yznZ8ViUXCgyUwmoX6VrDztK7RGyUrn1LQZ916Zwrux2aS1fupqsjRrHmJ6SpT",
  "key41": "34B2qvQPZemYx2X4Wd1hMMgX8uifggwy3NwcRBbx3Um4Y2xbA2ZndEkEorpmaFukSCQqKNocX48u9GJ3AH1UdHfH",
  "key42": "kx9MZcQuwifC47LD8J1fuDJVR5B2VVuZjJRj4mfXDCZ1E44KqZMTtXA8C9uFvbeCThTNBqsfdiRdjbyMU7YHoAS",
  "key43": "ARBgQEjp516bDJu9svfNgCC8GrCdmC9QCHrbW1SYNLxwjcMdABA8WX57rcwqAryHwBPvTvzKRcLwaH8q7fCZ1yd",
  "key44": "3e5z1GPvrwJSkNX5eEf6kY1SFCnnvQjdfwCsctotvAD8NMfZqFxx3hjgCTbtwn7LYMTAo7HRJ1nZyF8ZFwuNM5PT",
  "key45": "5oPcCmehU2w5RnLLja5sR7W86AZXJQySbXiCGg87PxPEwGNiRmKMjUEcMTzD96RHGnAyBCG2Rf4TgDeWt7y9hit6"
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
