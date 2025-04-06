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
    "4XUFBuTJ7gsHzvDmCdpfLZC7jkDNVaamza4DcgPwZ4E1gDMPny6FSFs8JKu9HouDremVJaRuJoijBXM7JQktsRLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J1BHqGFezmybNH9vBio5Ztkmiizh1WX5QsJ1HVzJ7KwfvwgsFvX44v1TTpziu5Sg3FyhbSKh3YezUcmwneFuseo",
  "key1": "4eQLUazrWDjAYcrXeKko3K9MSxHQFNR25S21v1ea33CdgVKqPGhfGKwf2ZLXcsSMGHtUaNi3RdmNfW4JPzZ8gX5Z",
  "key2": "2MtX6jX4mj359t5gh6izb5c7q2zSvdAVcrtVXSGmca4ZYXYeMGUkzVmsjbzxQGJxSMFByMwiHj7kzX15gtxeDwVE",
  "key3": "5xkX9ezcRTFn3DYgnRTTrpFBE1kqashQHZz3EiK8tVPwFtKGn1KKKjiALbYu95oVVoPuRpEFLMTsD546RvDYojcN",
  "key4": "3D8982SdSaQ3yeeULeJ5pdBC4rUuu1ZJNFDCERSAheKpUWBYuiZg2YDjJE9L723vRnjfByex6FhMYGhRrkPpT3rH",
  "key5": "yaH8xaeLYge6gHc7i1b3Ra2L73JeNBLzVQuUjWZ26Gvr97caCty4UEkvnNsmmDQBTWT3jiSBA66T3ebEFynrTt8",
  "key6": "48CSdZQLsqohtiMrPK8Trt4EwzfbaSpHFeDctJRdtkPXCazaRGMrBN4a1dnXiAxGgvrGE2KVzs5KfKxViEt2bL5p",
  "key7": "2Tj3VLFvtXtGRVmLfNzvQHwjxTEPN4E6PoxVdifejdMLGigW3FdrSi4d1gG5da4NYsdphZ9yiaiASHKWQpewuCWJ",
  "key8": "43aGijQDiGDkwYyYogyd9D5QtCgBNikJbkq2PJQvSprqhS85nm2jN2ShVc9M2KU6txPnDC3nhoNdKRiA4Zy6yJSy",
  "key9": "28RKf9DbMwY9H7jouZgV7Kovc7vjkG5pQ9T5RJeVAD3XDNJ5zcXUzDfRLR77zjBV4UBFvQ7vqkThBzYg1ACsKgG9",
  "key10": "49UJSqxL3EJeUWz2RqzeFSzw88bLob3cigVjYM2HA15KGTbz5RLvWU1HcH59os6apLNqcg782u1Av2eobdoUZmvL",
  "key11": "2qtUZRrn9jUM7cmyeAEas4sa7CzaLaT5SigbAvXFCpigPHJmcTj6SWRkapax4zhCPBvu5bVpMmuWKSjEBrcca2vL",
  "key12": "2e45ggkCZeSjpwipW2Y1UNALqhrEvauqKmu2RwX24gWLeeH3miuDzpVDsCV1Wkt9jsr8vi6PpPwjQLXaSsx3ppre",
  "key13": "4quWTBA2WUQAg8BVqUoyAJMfdm6FWx7eaUHdSEMCwy4ZGUXtWdm9uQ7gWQH12j2rzakjNu6PqvNxJoo3f2sXZddL",
  "key14": "3wdyjegnuVGcMmz7gX2un8KCU27F1tMB529mdbJNTciGB8uBrRDSbQ2HtjqwRHTvsLHBj2reQQrvpF7zxynJAdNG",
  "key15": "2K6GoLU4kSWH7Nzi382jZDMKuYhnLoVpqZGH8nrimWRiSTo94kq2C4ND294atVembAjFh68E6zf9sJBRajn4dTca",
  "key16": "55NkCw7pxCpwW7SSUrENkDuXZoMQALTk7FXfsCRHytuSogG6WXtW1vbhMjmF3psZ4imkiVGxNSvBSRpFc5UursC8",
  "key17": "28msRZtCAvh55uH5UpgSCtvBU82n1NACxVrWahZbAWhu725rzE8Gx9bgt65ha1BcSsUmGooFqr1DtMytKqzsFJXy",
  "key18": "4ydSgJZtSYSzUvmywDwtrfmN6owRVodqevSpxwUd9eDzMaqzvfYhfxLpj4rU6a4ub97EobgQTaLSyzNiMwr7SGm9",
  "key19": "272bvxShyDpojYR6yDh2Cr3QJYkEt9U1WHe2gDKm4VMZ9CXi44KFtKipG3FaUgBew2MNaDpziLXhZA54cXGsaHcZ",
  "key20": "3k9r6GmoNVz1ognaKYqbmoUQYtHV9CLaZBqbnQLCyYgnGjentX9xFgzgc5ekWvqjQWvo2HFrvufPJziHqeaTE1Zb",
  "key21": "5R2GiSLDzbBhawH3HnuSnm5Y3o5rcxJY8z9o2aLhbMMqnX8u7JJh8yDN86ZcTmGSRHX69R3xbobnzvYuPoJH58Gj",
  "key22": "5jYaXXGmie3Zzc9HTtd7Dy4JRHkhReseh3DnAT52vyWJdmUMZfVBHeyUTJDW291RzYbbK5wfTMMSXDHHsrembVty",
  "key23": "3yaGStNG1kaXgtGMpVDCWa7ajGRVGtgFx8nkqxXrkcXrxwmr7xb4Y6XusXkcRXZ34fBUriKqwntATwWnKDLSRe61",
  "key24": "nraJrhULsk3rETFFbXnzkXZ28iLQtjYuF8PqzjwULUwhe79X1qY2ivjau4G82DESUU9tjAvrgz43RQRBLRCaUdt",
  "key25": "sGRzGQZtEXLSMYiZ8qHQX7UZXhphJeBxdcv13x2pmY2YLpZ1SjrZ5B5RRVzhpxeDiZBrfH6K8NNubC6pwD8ha5d",
  "key26": "2Ukuydpm8gGCn2sL9W2d4y8Htiz3woNWBUPWAV1i2jZAhkzaYSJDiieP4kaaUwGJHbYqJT4oCAEvMXVubU5fVcMv",
  "key27": "5fbcXB7ofuucgtHhSt5Foctqn8wgboHxW7Sz4pb9wx21mZkKUbNwDPdayLJ56TRGSVHbWfCtnmAxrnsiNk2xMyGK",
  "key28": "FgooH5Ae6T5VqfjfLpeZ3JMf5wqwJEWbo2C7Y7rPvEsqHvkaCYMkt7KarfWZuU5hmwdpu8wVk1jbuU659wkerMn",
  "key29": "6499BGhUysLjdsh5ApgpHRoJdGjjz7iJcvtyoqque9Fnrv9NsrtCFC4NmoxEp5zhRXYE5q4eRem4k5h8HALoy6VL",
  "key30": "5mMkfoPv6mWaFzou7DdpMnEUHLau6EmuoRoYZSz5Hai6Yp2Ak2vQm5dPPQZsFMTbapBSPuMd8kVPFLn1PSB5tQ8i",
  "key31": "TMpyyLTeVbxquLBoNyfvzoFQpT7BHch8aMs7FpgdWoKoEYCvhAvHHb9Rsc5th9a4X57QduRVtk84eHZyZ9T66X5",
  "key32": "337AUFZrJ7usqWWcyjfvKHUEt24G1BqMK8UEhq4HjmPtTuxbyxubbMMEdcDijwM8wXnBCv4YDFPi8oTLREYrM9Zc",
  "key33": "3wzHibmX3ccwVeNfVf7mxdyY19FFn2orsQiUSaEPA661aTg95Mpq1f6sFLogd1549oxV7Y9FMKchD2NrKUuyRiLf",
  "key34": "63pyBBsPPufLUaxovLZowhqegS6rhNj94Gv5aH5smkUn5CQoZT2SCQfxCogffdmmXHPd6QnTfdwAvJMvjE8edHHP",
  "key35": "LTQdY95nfS74QibA6URtZA2avzxhtQVE7QA8HFJwhyMcVgFanr25Fmy25XCAJsw8ymznzfnXSFjcRd8ZU1AhTyv",
  "key36": "41wtjYRKxtJ6yvN21jwGTdsj8o1FfA1WcQN3agEWywYYtubFdJvCKWiMjbg9bNAqVFP4UYHd7mCjD5U89DtUifDm"
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
