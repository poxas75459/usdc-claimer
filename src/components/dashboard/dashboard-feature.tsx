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
    "24zY8TyUp8xScZbNypwKLbQSo3MT2si1DHk9Us7LpBUp3E1kBsG5fHWLW5Bhta63Y5KSq2W3Q7hs5dvPhFFWQo1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58jdniFmEVqrwfT1zgQmXLkR8MHk2VFwhqa58QKuftECAiQfiKQ8CeE2nwkXtfi1ozN1TZp9G7w5Ux8QzqqUsbGH",
  "key1": "4HK3jdfuVHMqpwgxYeRUe2KktbRvJomfAr3hutphDUjQWigSPwoBvwFkWvV7JMWQ1XoBxVAd5Q4ZD6C9M1MtLHRc",
  "key2": "5VYaqpoTsphCfALETyPKPpqnQKuLbjokQ1Sh3JFVPdEMoQrRrVN3xGKowszpCoWsvUZdMgVP41rYtnKvjWkFszxn",
  "key3": "3kURujzkZEKVYN8v8zRm7fooYRXDp3SAeh7WVxyfSUSawiYU1Z55jM451mDDhMfkwfGtDRBNBjPF9XPSZTWrW3uG",
  "key4": "RzYybVQDbsRvZMvkvAMdAXrZmK4QMjPmF5vvDzeL8MD5rrYrshYspFDdToFnRnoatbDXyLtkLqPF2AsYE7VZ5t9",
  "key5": "3z5Ni1zme9k8yjgkior14MwXqihmc5xSXfU6mZiuzLYANW3fnFkeLu6s4riSUbpD1TM1EgPQYP3kYYp9pUuRTMT5",
  "key6": "2nNaPV7FtdqAzXv8PccHkVnuWtn8wBKtW6eaHqxpNmr78uktjdp4BgHCHxG69Xw8tVTBx6qzkXVcFYuegVNmGqNR",
  "key7": "4TkyhztyJEP3ZBQibFkzbRNu5m71H5mqzvAjDtybxRiRNwJFP8E7mGdbUumNh3UtAQ3qw92rbDy34LYpLt8rui4B",
  "key8": "2cigmQJrKPWJTuaSKQZawHpr6uLwbXGUCgukY5ajvVWsE9i9ZYz2HVnKG1UBctBb46Z2ncGFq7G6h3zYamFHy7YR",
  "key9": "67qTV46pesgxW6NeQEb7M4cTSLu94p9c8UWdXZR2tNHjUAd6Fxaxm97AaiANJmZxQHUoRHdyU6EUaMRzzCVPHrk1",
  "key10": "5Wxz7Qr7iesf4SAVGCKniysHZ7yyQT8xDaR1eM7LptK4JwerZyS8xhNegkvRbCZztUYjuDDUsVMmMjMyJs7DUoeE",
  "key11": "v91QRbMUVsGcZskGgw4DotH7FYNLZfDJjVinjRBzgvxwFFQdM6QBY6mWEeYJKA1uAWCbM3QgzNfimudGABNXR9Q",
  "key12": "2SAzKTvkwozt8sMKtNu2oeswQ7Ac7wkzFVfuTuGSkft4B92UPah5Gsp7rNzo4r2y4V5ctPJe8fjFwHeTXXPLQxwW",
  "key13": "2eWkyf4FTsE6z2KdipEBVA9Nv25dhGVn6Ud9osiqKPwdhXESeXuxqbbMCgtyz4DgDeNsBSoQWgd2rGNUL5ABWweB",
  "key14": "3h8TFmkTEcPG1mspLnyUTaWxEQfLZKyjv5KPYoT4ZZzHPzXutmp8t1Es2fhy5ky5Qv4M2bQukn5NrJVdYCKdF4vE",
  "key15": "41Sz3ehbVoMTDJtZoK9oHRHHFaDh5o4wbBuRmZpvQfpgG12W8z4gEjrrpNcvKE43zwgUJhf2tyDy2SLbBzt6XD9D",
  "key16": "37YnfwatwCMuCxTQB7xi4GfXCWpHmNyzQSLvFGNoPxZ57pEAHTR7sFHTHcqxV2VEWuAyDAJHTdSFoyW1oxzHLjii",
  "key17": "tANGDRoCZmoE6Kew7TxHyZkbEQPoN3L5ugh1btK7Beo9KaMXXXMoAzii8yzh1qiSG31HY2jkym7d83DRPr3jP7B",
  "key18": "2wL5aR7hhg9nTiAQpV7egqT4WYcMPCuQGB97nyWJfTaYgS6G5fSEeSYKgBAGHxMgQi4LHyz12HJFYx7LpRpNYXjk",
  "key19": "1rggS15N6x2VgfT3y28fnEEJFs9d9XsCPBZNcWgWbCzy19h6nHipYCAM5XBXLRzFtqfVnjXPRhoZKyki6N8qymK",
  "key20": "46X1AbkXQJTryFLKoKGr7bNXN5o7e4mgKCfriBzRDVQxymCwDwn5wwGJQexaNnb2RQp2Khw38aKHJvoZ4HWapPPY",
  "key21": "4phxcfWiDQqH7Ucq4vqdxfwQY2Dyn4XCRRyn1Rveh2csf8iip2Xci2FtiB9mnkqLYXNM5ZUy1SKc5xVaAmS8ADFC",
  "key22": "4C35TbzZxRWbJ8YTUymXEw7ctvcnfgNRg1nvUgfy3GFqBertWThKJerVXX5KvxXZBGqvuGsSkKi8usgHrgZJPiS2",
  "key23": "61jQrtZNeSDsZWcEwijdtHaCKDuE1BUxm3t68N4C88bXw372MDgVJgEfKX9TfkEkg3yCNopYoPfVUdpTVJDP6HAx",
  "key24": "2G1efb1Ld3XHDkGBT4hgPgcQ9EJYP247p1Dbwj8Xit4fhnapLBvnNmu3txCmnGtb56LZpXfzt1g6s6jm4hNRAJFP",
  "key25": "66TbHRshGp1sFi5y6bCvxr44x1zjK5PmxmY4w8Ms53NcvxAfrDLnp1aRtgvNom5v7snWz1kURWkzDWEnbyAhmQsd",
  "key26": "3stBvXzAvhd3eEM2YBgXui48wrr3VgDFiCyif4ZFgPi3UAE6RVHgY4aSr4H1cNTzMhpNC9xkVdkDT2V2qWhX69Xc",
  "key27": "4GYczNewE8gbNDvZXWYaJij1Hg1xssd47bths4mjBNJymHmRkYY3Be6x7vCrxS6GMoV7KGATgEJeQe7hx62usJBm",
  "key28": "49BsE91oqJkum947UAEZtEzaHVq442YeLuuxa751YvABuMFyJZwoXoRKYjeTcjQHMpXeB3x11zH6U52eqwhn25ha",
  "key29": "5F9b6KLSXMVGmWiqdD6qUtKosp2cJHhGqRpxLUb3GEHPhmFprRAJsfn7LYqgV9dY56FYmqtkzQWZJAmxwDTiy9g1",
  "key30": "54K86mcJd2T2mSF44rw9eRqr22k9EHUEivYykcF1a1LrjzvQpXnADrE1akAJ7QPLERhkMLj68hxQL8mhEFEMBt6S",
  "key31": "4hLxibgiZXvpqGyEXo5SNFXLiJQ3Azopa8KsopjAAt6GVdNcqwWkVMYtGFU9duFRpaojgJGfss9L6kSYcRKJ16JM",
  "key32": "4oWXqJbobzKw7Y8MBzro4XAS2dmkiP2eDMTrpxqkJ4oXzFFojogtRpwPyd2GQoUCTTZeXbD8RvTidBjJw7jRHtEv",
  "key33": "5H4dBKyRLWioHAj3JBp99nVN7Egm6qNXA42rr9xqRE2JRHv1qKY6MzVSZbuU3Pc8zJ8M8BUkNa7n9tsmpLj7iRcZ",
  "key34": "2g69hAemqGU9basG72YfFrpopojuU726pY6fNXDQvvFZF7krPyLB88q6SRBZh91oCJUaWFeSfm6XAwHm2KMn1ghN",
  "key35": "BqV2ozwDMmW6vqeHPVz7Rk2NEW3DQW1xgksduNiKYguHKg2GXSdYoeHZpQiJBmtLWyHJmDAARfSFHD4TBgkXTtw",
  "key36": "44pLRPJ2wz3nYYvWpGf1BfmYDttmm1eeUyxVenL4RyR5bkDikLBnERhcLcdJ75ZRFQ3VXVr1SguHBafZXzhtTtnn",
  "key37": "4ZtHuuxu6M98KU5KD2rUMh92a2XWXRjXeeqThRKBGqEprL7z2LwJjs8BnaiT74ZpDhPSKAd93gv7aTrcrsGpxfxs"
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
