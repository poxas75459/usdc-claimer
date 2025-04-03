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
    "5LeFsaZr4Qxb9vZ5xe9BbNfVBPQG3LAe6UkNs9NdXHZvekhAYgZ6YUyBTViE1Sg916RrSCxTYADn6XpTwMq2tDKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UWqBywACKNdGnUKv36oD7s6oLoht3ADya1RuwXFQgGRrYoN9xKGisK7GDMuqYUUEoLamn1848MU7AwCTiW6Ucfq",
  "key1": "4tvqhScUS8R3Vh5x5ByUKEPetj24pzXK4KJjYSPhhGTnVujLK1z6HEuM9b6ZCssFYqz1zUFEyDS7FFY28ymhXAba",
  "key2": "3pkynXn2Fcq5KirWoD3BZD9bv4Ejn6LWAe7qCP534HZ2dTT562gbjeYmFpc6NDiB1H5M3AftL1952TknKruDCsJK",
  "key3": "64uB2K86S8YM8tywzfJoirUaeqPVFCZbJatVL4W4yEdCFwujRjeAKeG8Sh7u2Pa6GEKcYPnaHMF1UWLPo96LJdKb",
  "key4": "j5LtS2TvFf9kRZFc5xRLVNr3AP7oEAof6xyVdGc9MXeeBYzqFppu3fjsffgCa3XRr1aLv833D1DzCptRXfBet1W",
  "key5": "8fsWs3TVCnqahYqm8SXXpuSGtXU8rzYB3fK2rFXCvFs3edMnvF17eDK5qASjBegw38iyz2zpYuhVettv98zkmtk",
  "key6": "LsVtTEVLmu3ZDw1pfV1f7TzJqgY81G78ZzB9f2Twj2XWegsTJ68R6aDP2h3NhF3aXA7oLgrVGnYtyEuGhqCmbG7",
  "key7": "41uEyk17Ciuk5G374uWjNvf4F86KHRMEKKkHgfhqso6dBUps7mCgn6gh4ZgxBWbDdMydcub4ACn66g4wPf4v4XJz",
  "key8": "4Y7WRzH358h6KKAKPS9ipJMHYoja9VF1Eif6VQUu3jGRoAjCbdEQt26FwmXpwzNAHJbmeuzaSJTnhE75TU3tTBMf",
  "key9": "5vogAJ51m5nKaX6nyVR7qMwijGMvrEm38JiW2J1botb77KbFFjDVAcSZ7uZFYCxMLr495DhgyQdau1UiX38xBnUY",
  "key10": "4Ufkgcd34CpE6tiiwNKB3GD4gyGeixnPSbp6vpvJbLqspj9ZJ4M4hntjnkRcyw9VaphNqJ8w2LAvQrmNEeUcsWnW",
  "key11": "3r5GNpELi8UPGQWbikZnGTxzCfxXwjcVZYdntFL3xAYELd3VcnYCEZmrep7BtdFZKov7fuBLTWQyBwho7og8BcHZ",
  "key12": "2VhVoeweMYeb9s1ukeA23DDasmBcBeup8cPLBZnABGT7ivpiFWWgw8ofief5XNEnG4jKfTCebYNRZQhmMmBstDsf",
  "key13": "eHGME9NxXQ5dgkPHRygFuuu2YuRSNmjNA2PvWPGDwzFsDQMgSMajwdJ8JLRQvabHrXESHUEV2yuPffEVAxnaTgZ",
  "key14": "3Tn5vEiQoKH7FgSYBeffj3hBh1SjQVitDUiqcBDspA1quLY2YHDABfdccCVRgTXu9P1owvVwn7ny2pNE6Wjp1TBz",
  "key15": "3R5t4MugQLCzzopDXDHFQuT626j9sTGU7fdnA8gbKrtujcMaqQzTuTbRLCPoC9Gtj2BGkd2jynqfDk8SbZg4VNTC",
  "key16": "4TfF6hofnKTwah5CeT6sJvv5hG4CqfdJ1B9XMFVqSkiiFMCeDJBGjVGC9h2THhHAmu6jPoCtn44DmJpTe8B7uwZg",
  "key17": "2JECzrAgC8L3aN9ZyUezCAY2bEPgkQGej5DxPEtdYpU5DsrgqNJUxJ8VHUHyoCBwiExbHvDN28ctvHTSks4E9NYZ",
  "key18": "2FHVXhBGJ1dy3eXkHrhNBgcobWmBQZNZYSpqBzEFt8WTTxwcFrHewNJ5XLxKfFSo3mxbZE1o1JTcTscM4LFondM7",
  "key19": "261PRHtBYynwzA9ky6pGfPZobcHnUTuC4abdAMiGAdUUWLbUmnq5uXEdeVytjsbNgLiwSMUaHSd36UrHHSC339ey",
  "key20": "3FByFivN4JEvvWgmtTGqtLTo8nkYwA5ZEraGHiad8wHQfF81W8Ns43mKMfqubvzWiA6f8aBGKKzQP3Fj61E7KniR",
  "key21": "4AGjJWY4H4DrThyk3xPwEG2W3TQFdJu8xkRsBm3HEZNk5he9Ec3oapN4d2L2BVDZPH9YbRALyracFZb1JVqRSpfQ",
  "key22": "63Dm8NgzDE6E4uW4u2D3XaTQuQscDEhwnypUZo3RKajxQMnC5h4bcm6TtReTDEdHSdazi4vEG5wvxPgqjo1wrCuP",
  "key23": "47oTbqexvj26mRWE3kYhq1Rzjh9oaNndAjj6n7hUr8zZnZj9isCfh48qCQJbVjom9ftFpYLscEHULP4MxrY3zz1s",
  "key24": "2KvSeUq5ikxpgHP2EwvP59z5RpWnK8ye4bmjcTkLkmuPmykxaaerSzUsVgr1dcKQri6xomLQ5NRLdMPr8QyMKDYg",
  "key25": "4VRjXYpNrXusUztrRudTLwfjy1PNWboA43g9BXVcGg1DXbTk3VU8SEQ3nzGAHdN2aMFPpNrA4B6u39uSGtmQGyTg",
  "key26": "TfXRpdoTQzsQGeTNAerUeN8negeuG4Q1s73qSKpPWBSUXQtK2kqhfT873JT5Mz5YkBFX34hAJXKSNnaQ8D37SN2",
  "key27": "FowkyjGoZca9bsb3twbYcCnuSnre9iSVsWMhSZGtwndwv4vfX2xVKKDhb9XB716FpCN4yvMDSWiSjJ8MshsAbNE",
  "key28": "5fDuMFjNwcnDT3MyzMAuBazhsbpy6FcWmMvA7CbsFsYMuT5zhNBHPwWposRNo7VwdEraNsdsEJ4uC5DjgkKfSjxP",
  "key29": "5PgXdRE6dMs2BTXeHNbyuipeuC57hVQrQrRe3AdcfuCx5kM7vNLjZKCZP1xg3fwdB2FoyjnHSF5kD5rTeM4Khfqd",
  "key30": "2HnykmtucjYAP5ah51KETkNVJJrSCbqnUwKWW9mu1QDtpaMATgn62M8jM6rPoFasNV6AMa7GJPeJpW2JPBciKPqP"
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
