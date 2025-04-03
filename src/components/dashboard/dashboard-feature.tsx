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
    "86s6RkdkKc2TwYakwnRtUzcBdw2hN4E9dgfQ9aHx7YvrfCdXanxdq3eGQQivdvKV5AVzaJECe6C6xRU1QTTFKnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v75LCztCxET1nTmuVvZxH6NLCmxfacnnhLLmBR5Rr43txG32jBaxvroRULz6Ym5B6uMXJxaivicEqdVECp2CVKJ",
  "key1": "42y4zRTvig6rHTdpzKo5xQnXUgRvXSb6eunj3kNWGUW4PJ2GBN87mYq6U3yWwNCPeeJzRsF6AXwbSxzkZxcNnHjn",
  "key2": "2NzMYXbDTryP9Q2AGz7z1TEmguiHrvzqDfaw8xzeDzyuvhFjaGH8gxE7FkQP6jNTTyQmYzpDEGFtmC4WS5LdvAHV",
  "key3": "3U18VmDaXZfttEG6AqiGMJwZVQ15JAc3vzHHdCMQB7RxgPaRbTAV7pTczxfNi4p54Cn1XX2d8kmbEuYCUEyCjBbF",
  "key4": "5H1bqT8oFYsBZvh914dkKtvdDRtafjgsfya6KK5FD9iQ8LT8MMZnPV9TpfCF3jX9RTrSV3n1R2e8hNgCB5bNDUbJ",
  "key5": "65vKZ1UJ6LUDwmFxjS4q3jL17UztCB1A435A7JvBgNvpie7hdmU27PPvzNLw5oXcPQCMrqk6JMtyi9Gu3U4LZ4rV",
  "key6": "SweTdSgK929YZ9WUmYjJ7gHF4AD97fqxuKEeTNAcdLWweauts5VeSrEZKoWkyAu5KFMqjArf8CX3zKJRSWyyDvg",
  "key7": "4PbQYMe87hqxxswDHpYZ3cdEvRVZ6XG2e24tkTnEWiXztVUGMoRuPDrTTLVxGYUcFpizovsUKv1CJsD8vHu8jEe8",
  "key8": "En1sztAedhvS1QV7nXJKXtR5hqqxYtWLondSZTEfMhJr8Ts67gei5mvSHHnCEM2Ckkt2tw9MZQAQQXe42HSWGGK",
  "key9": "jFodtS5cSxfnh2tPKHP3FJPremriN2CSGehNF1Luyev2jJgSMf1mpSQKpqfTiC3acp9Bsi7qHWzgh3M4pHCkPib",
  "key10": "4Mw5vv57g7ZHeXjqZdmDgRsEyhWJSLZPa3gW4DCc99j7LfnKSqiZNyVNaQUpUDkA4u4TWQF688ZFtJVcojfdqbAm",
  "key11": "2kNBYEk98MmMX2PfhMpcWRv1Yjq1gs7fcUS9mjcy4FEyb2JR9PEg2Net8xmAwaLTr5NgV9PXHMSUAzWhuzkRDxzi",
  "key12": "4e9TsnM7u2hzJEpD5J6NBJqXbaLtATPXj9WTAsF7GiRGGoAHAmXBjDmfTHPyTfDC5VVCEUmhxH3KuZJuuLv7sWwZ",
  "key13": "pjJvx7a6a2uLUwDdUbrAve9297un3VRuZg5CWCdZwcEhSLvXq7m7EVVmvNbtb4r925t525ZnunH1iwhG8Yna67U",
  "key14": "X6Qv1u9QA6LNiZ9q4Jxou229guuo8DURHDNz61ES2BVJPmFwTJPZwLwPy8Vk1CpjPybe6bbtdEDjuym3S6VcvVR",
  "key15": "53Tna3rH3xmh1AYoKzBPxbSETRTTL5PTyz3x3ySrGGnEfdS9jpMxUGfu97Wk7sXDUokPHx8ZRNqgxHuyfn9qoTxy",
  "key16": "2X6fZPnJBa2Ugd7wRsPQHq9DzHD68ViZz7XJKqatk5Yx5eC8gMCUnZeP9e8eu3ZJGcHAnABkMkjpnuUwkYEsVqSi",
  "key17": "59aTtqztovZT8DPAFDNcQeSQDtRXV671HvSiPjmup1cvTETynwPt1wC5M66wVo8B7kphuLbiJ4qGYyNp3DCYQw5x",
  "key18": "2XKNcby2oZn3jxkK6xtcbNnCnFAA1hJtHZDP4RAcFDnyeXq1hT8XZkbUpQcKNaH8kJCY8dMz1659M5UjmwT4kFH",
  "key19": "49Xyr3XA3ZnpFKMtAxELPG5UpQxUozjcn14cGfrLVJneuPbHD7qdHH8TaG5h1SfFRjw72Zi9k1GW1qMp7SiTQMnv",
  "key20": "3qWaWSYLKYM6HkfJzuWVQM88qtRXcLobHEBTQjjTCtWW7cAM5LEroxdfw5X7mAH7dTFrHM55oNFAE3bbzhSdAnaX",
  "key21": "3iRYYUpeVzknmpwb6J2r6L2NKv9U9z7rmfuC7wMnyeE7JMV1rYyWrPbf8o2qFYJ15h3GAPuceZvNUSML1Gd7NXL",
  "key22": "3TAP4AdKGZoKSBZWTAaebSmx2Utr56TgS7aNVPAdsFvH7miRRNJafbdGy9PCiXAxab61wpsnPTYNnbUyEUCXn2fV",
  "key23": "3yaf7yPxLxKAZ5uEDk3SKJztoRKDm38X99yEWiJHZv5PcqT7QzDru1uZb9iquaWjyuhRCTwvjpYmA2WePz2nLN4S",
  "key24": "3kfURj8Y8iLVYBzQuMN6yCjFnUxGzSFXghvt2ucbziBKAsebKqWY87KLzzX5pH9a1KYADj7i4sNE8EBPy693NbyB",
  "key25": "24NAY6SBEyGpLoqW9E53dwnyjPoFBif7poz6HDKzLQE7nc3GigQPeoLttPH7r4ki3HFcfZNhRf8T8CY8KDQzAoci",
  "key26": "4FXQbNWJrUJfddayQMu6pRXaz8vM9aRTxnE9fTU9juQPWWg5pYPzzC1cDHyeshLtMTUKYQAegAf6kWpMJQR4B2oX",
  "key27": "4kWtUExZjKPKKXD5JUutm3YpcpQxw2R6BVD8QQFQfc31DxPEcnAViRiCKGi9mQW8eY3YNZpPDYRAnC763ZqzL3wG",
  "key28": "bvvH3JQYMgedZv8Y33cyZmyo7qzutG1p1MuHFdzpv64piuQvRgqmyqPNiQfY3aUF7ySnLfkumY7kYnByHaUiajw",
  "key29": "4VHZTkA8PJF1HNSLP5EPCpRBJB9E6M4w7LyErgF12o5tUFnuUS2sYnFenAxvWjC5fvinMDivhGTSpEmFub8t4Ea2",
  "key30": "3zobjYRN7QuRc1yrRzjxiEgF96ay7dzqUrjXKPkjC6t3U3i47XqPwGqRR6CYdsmLarpkLgUH2bd5J8gKmwmFvLin",
  "key31": "wTbABu5wYqUEMZ8Sbjbzj2JbRfH5pvUeEt3SkWXs8yuAF74jCMhdQsFVQxkvAjikXkgfzCuYkNYULefCDmr9fYC",
  "key32": "4Wi4KXRcyNjRSMf39bNE5A55s8gQLqXoXmhu59LPXhgLdFAuiCgK1DuKDDAC3DSikr1CvTHUcqrA6VU8ZuZBv6Ph",
  "key33": "33B7hkERnDh36wJ1Y1hMG6auqd6jsGa47ihvvD8UMmJK5TL3kH4SySAC9QP5Hi54vFrD928v3nB5kRYfvji5FgB6",
  "key34": "hwukLdFaTptyVy4Cm4ZW4Vr7LNosUDZNyiLonBe2hpLWmkAVsyzBDT9Tj2qtRnF3b3nDxA2xnZgUa5tUEo33vkQ",
  "key35": "4B9t51HTPSFF7zN8gWcvmsNYKYTU9SF4Ln49corjAYBBTZ4jNRxYuDvPsixqPnQiVCqYKXXzC192BAb85ASN1Hz6",
  "key36": "23mmonht9BpJ7AuSpGYsXHnokwrHP4RTNdauu5McKnMfrMNk3dGxytFDkX1KR3aF9SZALBGRgWiatAKgJnutwufo",
  "key37": "2pxRAmbfN1Zo5b7J1LsoebtXL7Zv4z5uhsWrxoSu86p1VSJTddiT3Y2qbDHczAkarhc9NzDu3Aaw63xnac39HaDo",
  "key38": "pGb4fr2WsKnqNeNdLDQLHFcfr3Ec58ZGx4s48ZBtbPcMRWmYyPw5Y8PEVtqm7vo4HmjagfXpjSoiUdN2f1CiPF8",
  "key39": "4KXCtGiGAYPRQHniLoiB1KY52az1hSg1kH3uuBo7rqM4JJHnWcX87uPoRMG2gKUk4XAJnyHwcyT6JMBDzNTAAHwS",
  "key40": "55m9y974tWAo2kemBRHuNzkpvwoxaZXcx9vG72ZtoVuGzXktEYDVn3qWnk6ELT3B6fjAYcZWUc2e5gLBYRxT1cLn",
  "key41": "2KNTfUK3PaMKh4mJgpwsnxF4MUpyVGzbWhkGJyS3ZJqCRJ8meCd6cqJUGCdDchRrnedDifbky8FR9dd97vGXtxcA",
  "key42": "YfQtyPUMeGYG5jJ9f7Vi85QGhac3r9Qj8xmUqkWEnyBq5xB7CCC2mU8zU6iyYjF6ZwVi5VcXwJr6e4T6oJ5JnWv"
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
