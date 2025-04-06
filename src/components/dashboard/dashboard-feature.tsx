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
    "49vPgPuo1bYPY3BJQTqe8zN1adm1USawkvmXLoX1gRszaaK2tpMS2UzrREEExn5Jw8KN2ofNWhjcU62Hc1bYYWux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K1UxNqbpH7UrmGBuSHcmVP2UviopYD3A8vCREkFYHbM3jcgzPbgro9uobD9ZKbpjbsFKdfTE7WRFjNX2XRNwVxg",
  "key1": "5GS6rZMwRhFHGhvEBaRUtmkj96XW32DdKpJCqRrSMqVMHHd77Pve5oBJa8GuBQLhvEEm98VRdKR4XjYNoNeHUqb2",
  "key2": "34mZSZm1i6ML9Ei1sRhmaxXNrBn8ERgVyHuGaTCuiFDFy8mx3ZDhxLFJhAbu9sqR7c3yNDoH7USCdcJ147mcA9nz",
  "key3": "3mqWA7J93pYYe2v5YzQrhrCeVqok1UrEA3nxE15Joe4QMwK73UqYszV6a5f5ZvdZAww92pYHbGfHb9UfmtBi98ck",
  "key4": "3uangded5UKZWaS1zn9C8m1LFR3DrDQ1FMNFbxXEQkDgn6KC1dPgucKUnw8JsrWN7v3j3zpVDmiS4adLusDsojPW",
  "key5": "2mraTQ6wNi9DWQF9XmqqEJSme6pgPacUU8fQguCB9PLDwZtPYDgaKTT4rHHoodkyxB5XYNdHnRbHe1yNSxpfgTva",
  "key6": "2EPc3bxLNixQkvd1S1XuvVSgc8Yz9wychZAe4EgRGCcChtYPLbK285Q5iQn8ndQFGU7SPA7vCfCoUBj5AmMQccqR",
  "key7": "31qMEMigNegh9DkGAuGdDVvUG1UfD6BDKgHLfbEf9ku8q7QGnj5e9oM5YCpAGq9SeapisKQwKXtFY3FwrTUyivXE",
  "key8": "4Paef2XrB23ZQXzQpe8AWvDhWwPqyyujWQvyEXxYMHLcqX7uo39Ji735cBs9eYfWxgVj4yVPGDJc8Hb2NjsDKQRQ",
  "key9": "3zHz1ERj9wgRWewYQPMT78udJsDV5wwtHNUAQgoKE2LMfb1WDJKtUsoYHiBWwghjwakMoNiDaWG2eFshafwHzxrs",
  "key10": "45bZdrSbq3tKwNTEwjiEsabgdPKsGKD8LNPY6knXFaEjSWCAYZXApCEFvCm2w32FXVktH9QqGt6egTtPmYvefmFz",
  "key11": "24L6dX3XTRQ1GsoRmXmKTVRDatypDZYgD5FnPu2scvakfRgndWu2C2p6z7wpp4ifaoxUUuAe7H4jgbx8AqwJTxZj",
  "key12": "cNgpCDNThgqQXwhSdocJVVH1XWZaSkLDLzBsVrYRNonpPZyJK6RM8vcKyBTD2TV8ef3v2CUQRs3FqpGG7CNW1j8",
  "key13": "3KrrS6N4CGPHiNYdKAvg6W5HTqmYnvX4Y7heCd5YLdwFPpRtJhzPLjecYXHtaUeBdMcwr71MxdEnJNqT2aqBi7QL",
  "key14": "2NJZ5oFMFrUSXkGzVTykLHtk6njpADD9QFahD7JW4sAPuqNSqb1P2mu2FBHmKA6dSoJDN2RdSiBUt4kjtktjLg6N",
  "key15": "4wvA9gqEr3zpkvrHhSRyKx7xrf2Hyd3ZDgfpVjb9n6qWPSyZ1RSL5TqXssvdfYoNVd5hh4ARddF35ZmdF3zzRyfX",
  "key16": "5Q6xe3CZveAa8LH1cyqjN91qvQurfgLKoNPKmAUCjiY9e82HBHMgpFYpW5EgbmquikpGvfVgdcCnRdEC8cjWiiCP",
  "key17": "4kdZ7ufiNNrsRoAWAPYR1ouQjcgrCKZZ1NcWR3W4WQkT1BwnhzKnmuE3HdXvEFXszSy3Q8ccBX3tjtkP57uBK8bc",
  "key18": "3zEEHVNURJ725z7cwSRhdkkiCUvhGjeAqvSYy1HPkysAE7VuHWejkvPsptExYJuCqmarQ7chANbuhVc1jCwq1j1X",
  "key19": "2DQnXUiKZGZcdsjJwvAN3tFvohJ7KjUHp4c1urpLRcrzS7BSVhP3dMBa32Q8CBVc55hnpbgSGYGMuDMLMzGviBs",
  "key20": "3WkUGGAi2My4w7s8HTm64Ccxh7c4uGnUQHjVCcSucMahH5TxoCF82o6a6N7642wLuHcVpMqPpYsAgAyDj2xS21pN",
  "key21": "yiAgyK8EqiLk85AUygUNAncd5WTscMjkmWWDza1Ghf7Wc5mhejr6oA3X1EzKoW7XaVKRj2o785WeTSB4THDX8jg",
  "key22": "2svfrKUwPYeFRY6bb2EeGvoAS541ibSFSSyv7vpGTyPFvyakWCfoSmVJtYKJx4qeY3rTrVqXNb5UV363xq4dsrMk",
  "key23": "2LtPRhpyJgk1wLBsmYvJFe1LfkQQjbVGs4b64XNxr2p6zqxiqzEfEDKcZB4ZQCtgmUT38wbYXBi5VqSdA36cXtNV",
  "key24": "VhnE2ryJoURntgGZnn2WoBNqnKrLeUk3zdVbrtxhhFuh5c9DvtS8cXCCjcWYVTyGaZHxwCFDswyVXPgnrRLdmTv",
  "key25": "2RTkgjnMLS4anUP71eSMquyBG6DGxXP99NGPWrb1wErumKUJDHK9YTaxMSLCkZDAFzVHE21TvAwstFNwZNJcWSEk",
  "key26": "5r1SdQZJRjbmbFqVunM6hQ6u8BJuMrkbHHv62QfxRQ7YNcj2UkSnazGya3HS9bNBRKWdMFguAZZcrUgBEMQ862QR",
  "key27": "3AWkgRtk2BwqLQdrpkYFPtahHegPYvKS2soRAjZ9ipwUkYNrtd7kaZyjV6cqwU3x9Pz71yqdcSbVdXWZ2No5AEvL",
  "key28": "5otMdQSWTV1oP5UDi8gesejhu2dkCkxSatqVi89tgcDaoroPU9CsHr52k2FYKWXxGcyKLDBPerzbECtYHU1o9PWY",
  "key29": "589xGHT5cqG7JduWpnuk2y3D3dd3FqU43XqKRcNCkcX6EPAaDwVRAjgs17zVmxxo1i5tanCnk5D2cNGx9cJUAKKp"
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
