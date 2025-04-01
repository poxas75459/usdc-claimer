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
    "3hfGpbo5sM9zdUAbRciXTUYqNkJebzAyQGRVdyz5PSzhgeDHNu75ygWNJWgHrxMYhrgTKFVt5WT9aNJsh1m5fCtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AmTjJaaXaSHU23QXjpkKxMmj8Gk34pYkV7Be2srv2BbmgKkfLbZGr7ZpJWTtUeii6cLquhQNNLjHAFV4bCtq8pW",
  "key1": "5qfN6QQAq3KNTVDLKMQGK8eZDAi3Ljy5xMiYfcVHUSMQCR9kxQfWDHCTdJzvZLPbvKFsWRLyxyXdzfPHt71FEXdV",
  "key2": "65FLM1aDJEQBScA78B8G3U896PA8dbYFJjd8hR91BJ6DLn4WqyVNnTRR8D31wrg3sGk5bQuwXQxVJ3yyZhmzi3PP",
  "key3": "2Skay4VMLxNbwiEqahrzSen8iyCWLc32hz148ZbYcqXkzehicdnuWpAs9oPRiz51EmowK2AuE6fU5NcjaTfs3imw",
  "key4": "5mZAtHfGMHdWKNtg2V2PafwdNkNrbB9o714geCb9mWoqcR5G4GBuWBJ5vGH7JQEMYvUYwS3XHL8ZG13g9byywa8F",
  "key5": "5xKv6PMvvb116SuBEXHGqRTWSKRrXx7cftkvbmzeEhicmrBaEZDXZyMCMM9tNTB2KdDvJDntQaNE61bhakGToTze",
  "key6": "5PfXn9dBL9AvBvp5mHjJ9z6hkBq2BTuncgVuPkMCotgiyeFMP7JZd21kKLnQaiVf23TrciWivy9pNbyPJ65Qz6H9",
  "key7": "3tKH2Rsud896XLV9vcPA5rxWyV8XqcARhBptkXGye1vSzLdjwPpeMFZoR8jX1zoans2idd21F1UdXqerLNVuU4M9",
  "key8": "Z6rcS3ijNBJVHfsV6pGTiimZyyqBPKH2mbpXALWMkK6fjCgmxptrCUw214nVguqd1E4NP5NkqVr2MqB8NQ7vVXP",
  "key9": "5TdeVT1mRFkUBdZFzMekaYapfMRA7k6J9m8GoXLz2CLSX8KYsjk1d99Zb5VsYJgtcETxc5qV3qipqtqYBRT4Qfxr",
  "key10": "irjGGtbaeTeJzeUwWCG5nv8BFQ38fWL6KyPXZeFGrz4cgfDwQCwowYwE2x7GTmdCGovacZoSSSDzDTzyNQD1iaT",
  "key11": "3kqKiGAMtV5isQnwzWPLKFqpS18nW4eQTFzNqsFLSFEPicgC8h52jLT3US69pLv7uNv9idR3dC1xBaQrmsjqpWe6",
  "key12": "4BrAivyG4W33MiA6wpjgcGwMVcPSD2c2Zt8aXd8p6PdyN6VfMhFxHBk4VogGrpp3tgiv7frF1kaQG81jBT395zaT",
  "key13": "2P6p3HaQbp291nbFWVVxE7iAGdJ3qJWx3St2ipuaeHFzFsPL2WDucfQg6KstH8QwaxAm41B3fyF8Ki189czAkRU7",
  "key14": "2RuP4hwUupD7QtkLZMGaiQidseo2HAFePSNov5dKXJZXkwntXrXt4Bqa8FcvGcELcfe6JDd9TEf2rszLU36UHqkZ",
  "key15": "674v5LwV6Cu4oankcEapzPcQRyignoySjJachzr6xq1GV5jQXZM9WYbkoYH4QWNfSj4brPjL8sp4ZDh9KWs2qiDC",
  "key16": "4jdZFUvdncLvg49FDcge1NLBpMArZpqvZu9SL3A4fJTJB387xsstDZuQxw3Rt6tdpiPvF8dgCm1Xmebs71kCPnex",
  "key17": "2cDpUqtPZ5Lm4QoFQT1ypuKPNDUoHS9n9krkVQ1F66yX6LhQcDja6xeV5QkYvUtH6ToRk4Cexk6JCrvwXt4ZFSvj",
  "key18": "4RcoHB1LsMqaMvva4XLgwyjvwHepPPYYF9fshrDVpn2BSb7UquVMZp2e3bUwUgRnTnLcjNYYx6oTALcxnZWsRseV",
  "key19": "2NHjfeSZMKuwMEVJ5c5Y4Zh9f56fgaRhXs9AeUebp6mKJyCe311PNmBqJD145kp2bofjY5aJ9b9HbS3C2tamsnsg",
  "key20": "2eMioSo5fkxZC9KVgZy1y7H7hCvW1PPpWX2kn9inqC1445ytmHwCadZNqPnqqgGNrR2rWUnSwNYPS8Lp4PFDv1U4",
  "key21": "43pjbudCZvp3FLnTyxWefMDtA5df1QziBbjJXVhfMUSVRLprX2QSLUB5kxPaCnBqw8HRJEWhYyWq5tJ1rh9Fueiw",
  "key22": "5YJDZ88t6G2QwE6o5jixKr1wpFssaEyHfXG8AhKpuPLxPnjWMpv3Xej81Eah1giGRUFZkzM3PttdEbzLRkCxqgUf",
  "key23": "2QLuaDouFSpaonBJTXAhx6Fhpjt6vD4bhx1m8hCNUT2GLnUeti3xs3kdPyCuaQotWNXQf7w6NdKGa58fvc3599h2",
  "key24": "2EAZts2wzD5wDX9y9m3UrSnsnUjqchoswaWVvo1c81fLknL9Fo9Lhq8CQSRPvjpnLSXWadpGFZuKAWASCDy2iKpK",
  "key25": "3Po7kZX6QJch6u5jzjbXQg9qGvEXioYgwbP5364SkAeLW5uGsnKS7HWbiAQENqcwyCApRe8DFGsKKHJV4zE8YJcq",
  "key26": "46NbxCuZjQ1bcySj6wkQ6g7X5tuLca3fFTMjsWkGi51VduoKS1hHGfh1WJgmSmoitVRnCHVPmzG9qEaCQdy4gkaJ",
  "key27": "3wKXrnFHvzy46pqfo7Lym9u1LLhgbyhcWo4bjsNGz8CNTptLgP8DiXPEadfzAAkQk9QwQjLuyDHRCBuHWMGpUWoY",
  "key28": "2Qpaxb5jQXSSWPPcWWggr6ids3KwyxaZjmSae1nrjwi71ULG7nqfdEsqEaUPJV99A7HYa4L9HYkqeAGCchk4dVf4",
  "key29": "2XUZKaBMchLrCLowDVrT5i88zQWusEzS6TbXxajxCqGAVkF5wfpv3CRvrELUV7TNewD8M4LY99gx4DgzRQC7VV7p",
  "key30": "2bNsreXfY6WqzhoLae4GtrW57LbK11mngVSixnpVUyFMpHxJx8jaywhsfQQU4sCvCNK1QSzJSZM5ckewqBjFwJqB",
  "key31": "oqjtxu84sjzYyTuzqrqYC79kJ18h5LK2sDtwiNfXF62R34op7ABSK1n33yLb8LLVwNv4bHWA3SVju1znLB6C4XT",
  "key32": "5MuPgu6JrT8KRQNrG5WPhhZXEUsf1E8BXX2Ei3vyZzkydbXbgH1Tg4waaF9rXBiZHcmAnu8GxcX3JB6MpWKdCZXj"
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
