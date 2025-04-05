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
    "4W5rS8tFHyoJF5AYArHisDrptgXANR5rjiUPET1P2mtmCPGwUPXAhNVtjRnEpntKKS3YeyriDNS2YQpQtCm35yAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kSqANYThfCtaKkAVhapCFEeDWwp8eyenc7ko9URHp93wQbAcDrxPyKAFes7csmbj2dJP1a2xjS7Yqu6sHJj6FjU",
  "key1": "58hACRZCWW2HFHu2GWcGq1iapsbH9xcgCryNbCdD2mDhShCa6jctMhJj5UVCYicUTarAUDfpp5HBgi258JMY3TUS",
  "key2": "1KgxS4XGVAt3U9VwCMzDbUetvSfwUq8vtcThqM12DyNPjBS5BAYaHnaNLUSVuhFkv3FFTtihAkd3oJKXJjqbnJD",
  "key3": "5KRh9b18JwsnTh8hCNG8LGiHqxmCWxoPtw7GGxnYVrsWHFdWJ5trHSDjo1D4xHKCy4sYhGEHdxnyi813g7YZHzos",
  "key4": "2VM1vSTvagqgeJ19UPBNf6iJ3SHf1P17G1dA9An9dGxuWAxy6NJ457ppmkZoJDHigHTE7RfbQdzxdcyvAi958v6N",
  "key5": "2cz47PffKZ5HkozPAbb3qcyaDxYtGPi68XQtSEgdWWBRYLyy84EuyeMsEuyHiJJNyfVAYwy6BN1X1zrjwSsJsVZF",
  "key6": "4xds76o9cefGXKr8mmFEAEgRV4uBstkpT6mPHfkVNp5KA5psLTwrwdRqYZDXyyNGe9Z3y1GPdwgEwQbfY2cViEeR",
  "key7": "4HHmXXjQJM7sEAbg1ysT1WeuKzZiDWKHyEWjUGyEGQ6fZHL5eX14BK8f2CQj7tDMUXejqcBCGQoT7XfvzAiC6E9H",
  "key8": "5VN1VGbYTyeYgy1hWEK344EBWRXioYHnPQWyPpkztvcB7Y6HJ1iPSFqWH5gNfvrAk5Wxo4GriaZC3Bbv5WCzT2cZ",
  "key9": "2m5e3FLgpaUisrokjy7wHwHNQfHvWdFvxcs5BPxhAwJXAZ3WCN8TRQw6bFDwBK7CRfCaLsseZFD5RKGRi3eHiPG3",
  "key10": "3KCPGM8EJKtQqPBskbrBvaN9hgisy581QwDYoYwVCSotDQmw5f8VQSUmYQGnug98RJccqwSjaB8s1fV3BhVo5qoa",
  "key11": "HETZc2GxMdXBMPEWCixCkjsU6ErzycCUsURkqenFKhXcqbfyMvYb5JxZiq1azkxVnvbcQVY2hg6sFuUT6BXDzLu",
  "key12": "34KRLXReJH6uPWDaWiFM1zC9nVhfiPV9p3Jw8bSAY5qwfFJETQGwnnn3c2PrDdW7vBQH32UCrJu2wand5FSm3T6g",
  "key13": "RU5S9uWRPLQgAaFDnp6qkmRrCo2oo7VCjTfLxPsAcg5AUCwDCMehTuDEvFMQTmaLTq2uD5rsqPD7HTVdzTKgFYq",
  "key14": "4KJaDL6bgUMheMv9dtyKf5fEuk1HvuBkyU48m2x7NqBCk4iiDvPezwRNVAiYE44UD84i2E8vCpsJ4TUPK5QW99P6",
  "key15": "61QLDN74Tafb4iNCurffDqCfmwovtyT3nx5hFJ9CKaQk6UHcyaT3chfH3oUddPFBtzU5vpGU4z4Q6WUL8LXqbfnT",
  "key16": "SLLLG9jmrRfGEwCreuNHPLTf61juCpHJwV2bMmTPDfQ9eboDXafag3UXhyDrSTcKpHruuVgzvjqEtmKn1Ne7uuy",
  "key17": "2zqAizLk7Bzjkq2jBnm4SBQXhdKmLMLffZ1zKny34ZP3MBs1GQR8R25CmDDGi2JkSp5MbjF4QZJvjty4p4N41bhV",
  "key18": "QP8GL93SQPRbrmke4uPSwLN6RhpxJGtxdRjL94GRqb4RiZf7QkKzKaH7DvHU9B5RVqNgkoB7hQwwiZKknwAm1V9",
  "key19": "5scAb9RnPQXrYhnk4PS5hoQBCSYxfVf6iWegsX8AY234ugpFf4XJRMdLMGMzUhuraVZ9HtcoZz9xcrj9EmdMKmZZ",
  "key20": "4B5jejBSRzGKrHxK4LjSUukTGceuoeQ8M6MyGP7zSFMW59WW3Yh8RmcMDXYe6VBNFoB3PS23yPok7Tr3zQC1wQGQ",
  "key21": "4kx4dtU4VRtW4UTJnd93heMDLRNdV1KsZsnCbstffqy7jk3Lx49YstZAfPgTHKSXeffNQcr1fnwjG8M88qjPLjdW",
  "key22": "2wA688ytafTAB6pHNySH5nxxVa9G9ua8FkEQwU9fvm1fRDuAZ3GfJNmQVgLFEDiqFL19WjzL5NXyfEt48Zy2nEAY",
  "key23": "4Uyp5maqbyHknDR8je7Ry71ggN3R44iYBoNbxijSHfNHVrRd1jjTrrYjfY7HJeXpjwACZ9m7QBUgzi2UvBVcF8Fh",
  "key24": "55rkYhsrJWySxV9hoQhoUULTJXjcminckNVh4aa98MxEbg8SPq2AnT93fRCTaEyo784GKPTnXkttb7EF3Y5MdJQa",
  "key25": "46BRGKUmBAKFekfNaRko4U5ipyJLCWeNPXGD6cpjr6utEfvuTxVFYf6Q1QBnQjX1HdjS6gxNJCgvstuD8zh9bHCh",
  "key26": "2PXLdxPqTjdy4nuzjDr29WFfxRfeKCd1vWADpV1yc8nkbbAreZKMVPQErMUp33HRYmxsBJ447VpbG9TfQxDJvBqh",
  "key27": "5qVi37xe65QWRHe12gTz2QNxGGdDkrA74tRDdgPhqJQP2XJWnaWiMJdBzqrRwCVZhbp7cwWe2zq1HRVxjY1Qrk7R",
  "key28": "3qrafwscpbouMuvSvPcAn9sKsqZiLDGdeeGfk85KJeRumRhhKq6TWT5D2t18epprWpgL2FsDRbG3UF7kW9Vd4S7p",
  "key29": "CLmLifvqQiHqSk8MBq3kiLzHTNJ9rMuZQyFrrbHJoLTS8jUnqirgLrfUcDfNZhvhdZAUCPuh8qVZP9Ldo1W1Xsv",
  "key30": "5BEWCWydYViBCwZTquVSKJxLDkkfVfcbPk3WmFiitt1TumfCb3Vmo8gCE2NWpKTa31QQ4r1UwDEsnu3eVe3Ypsyg",
  "key31": "haUx5hPgDRTmWuJa9icvcotmuYkED1o22yzKe8gr2vhEYE5tZLZUtWsYXPJMbnXsSjQoTcmJbXpNtFH6GuhDuPv",
  "key32": "32Kiyk3bXszwqFVZWFmUU9vdDbLfGtE8BNa8Wj7KDJKbfdyudCFHA2UviioScVnX8sC4oHxw9ujTmSHCgNiAM2Et",
  "key33": "5ZqCDoTtVRezx5tAesqk6CXFhFmPahQVxeezrowHbmm9wrBPTr9PhWpXzq1Qve2uXkMRF9sVFaZCw2xSGQ55H5P9"
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
