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
    "5uLoh4Cv9aagDJUGWs9gEGuPqCibtyGprA1rDEUKPDCLiURJhuDDZemViscDNvUfksJw4TW5rDdowdZBbGZQcrKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59yd19hQBYjsU5LgchLR1kv7oybeY7koZYs9zf1hKtkTJYnUMa3WTgdkv2CYkPd8BGxdhGuaKoABHgeRA51iHNMR",
  "key1": "3gpef7oaHkPcoZ6KeLcW69iXE5wR9XjBVeUGKDvqhV2dwZLGJaoEUcJaQWgjDPeSPXgaedeNak1KthZWm7HJRaky",
  "key2": "664LaHRHXvYQ5gNDKoFFa4Uq4iMz1594vJUNBFsoazQa1zAc33BuQ7hTz8rbiFZFuNbaRc1x3YiKPBVVnyWqvGv4",
  "key3": "4TpUvtAqMU6EosxnYvexirkkGrUinBqq5S4dShF855TYaENVFqY4M2qPwcqDMTsj7mBesXHiKXMKbSQKQTnnXAB4",
  "key4": "qupNhh5D29kupsWicip9bQ54amnQvEyqo1m4uRDuAJDprYSfXCmbyJq8GGoj6hGAA9DpQwvEMwwWKfFRo1KNosV",
  "key5": "278uF3rguUWLeRVDoCwoXj4BFH8CE1wDKLMfmYWcHXFPz28RQUb3YqMFZQFuJ3HiyxnPxXXzUhvqgSgKWxH8C9QZ",
  "key6": "7bnPMSkzPysPDGnsYf8eD8kMwiEeYecvFcagLKBnwMgh3CXTzUKGspjNnxxyXXNvtN5NxaVUHF6Lk8zzAMDfNXp",
  "key7": "4Gmg11LP3pnthmd3H5Qzqo7xSCXxQP1vvzAH4Me9Sbspco66QAZG2A7mXeAtSLakUdSwKGzbLekeruRN9kUmn32V",
  "key8": "2xgN7zGT3uRX88nHzSbNdJAfEXUdX35w1FcYrYQta9JXzuecKFtvy64wQWULwek1GM17MRdp79aaDHecd4fhJzdE",
  "key9": "4yiqRZ8Z17m7Af8q42e46VjRDFLAmbvfTQBsyHXJcQ4ZAnmq8hLZhJ5gu96zy69WBVw6VKWxjTeY8T4XEbDK8Dcw",
  "key10": "4svKPeJKbUJV4Q5J9erG3TmrdvYDXLUeJKyyCguSRxSdNHWwb2fz26hsaURU8X25rfDnsn3xx7HtJ3sfHyTXxjBi",
  "key11": "4WWQfhUSxSR1F7B1oee5HgiBKmkpdP88tam8bvTdVYQhHMXkzvt2f8cjsbEE5PdgFupMsb4dYZf99piKhnTcL483",
  "key12": "wLpQ68ffheMaE3srdvQR5gAEBX4jZ2rpcNrkb84y4A1sh4a9V5tjiaq1HC5Bs5xJd4ZdDXAxTuaWeRDQ7hCzgiU",
  "key13": "2k6GMdXbgwhtGobXSZNtimdpY6CahY8ZtUvNr712nGzhEhwRBAZpUbkNxUb49RV56D9WxZ7g5mvmi68jEA7iWZfH",
  "key14": "3hRxpPaGFpa5G9Zowc5pkMbWzfxWGdWafWL6RShD7MU1Q9GS1K5TDDv2QxgxGAD27TXbxXCqaYYv5cULuZjrBUQ2",
  "key15": "PeLZ1vg7WYFDp6oxFaqxwRQhBUydy2izzjw1AL3Vqkx5rr3cxgxStbwdukq2FiVizBdohFAtwg1T7a1VwojaUeu",
  "key16": "23LTLYbBYHhTJeSjincoK8bVpBRBoXiTBniZty4dfQC8stdhCppKBybuhSvRxNfrdZeBapYCMDadMMM6oSKc8CKg",
  "key17": "3yiWuEZhCnR93qq32iaHykCrgthoXoYLKgbJPsunwJ7pktPohVhNbbpRNpQ5sSwtnSkEGLTqrrRNKFZF9o2mL33B",
  "key18": "397iv9qUhbkm67PVPZ6ppV8Cbimdj5bdxYHAEgU9VqQNvyaAQAoJvhZcDRbFDXpye2BD9YpmmhQxNYvwvm8bzZiL",
  "key19": "2faUYgukWFbNU58z6kTXSvcfDcG7HcACFjcFkqrUZwQsAXJ6j9QXXB1f1WRMyYtE2uStHdmNJxWMf6yGhdHHkF2a",
  "key20": "3ajzzM8hkqQCaNHPKC1ciPNSyh7gjM7z26G4FWpfk73RCWhLmRLieC1UWnssgHFBaR2eaFKaHGnDG4qdM1GwznAK",
  "key21": "pAmsi3F7S3mbaLhwPqFE6Z2oiJ22xFyzXn1LDDNkubQL4XYrk4dhHKb84N1d8ziHAUFrivsBYY6kgvgqvh9s3cq",
  "key22": "dd3ZHTeA5n1EsCbk7Au2VPsN5T9339dJqk86xLWMmBuBFCNTJWh6kUf9TUUj4mzRjKwqC3neryfrsi5JeaS4hw5",
  "key23": "48eKQP6gS5rF6H69kCX8C8vUv9XKL5ESoz11XknNhBovH8YXk5oCZgdNuuGvJXWMTdu5KRq8k9gqwmryRftrbV9w",
  "key24": "5RujvyWdJUcYP5XznKdvY3ttjkN218NyAntbj8nyQgz4B3fvW4TawxY3ofqAF2rw7Ag8UUXK3BJyUi7K3ken1bW4",
  "key25": "4Pr4qCTYkBFKzfJ2PU3GyW88U97RwuDLzqDL9A5FQu819EmRMuXRppgnn7QrNt6epRZ2RH6rDg2TeUarftsE4ctf",
  "key26": "5KtuGs73RCka6Uh4va2YFumNPQPDFRry6nWJbqjGzPTafAVoG9RmLwWTMBfubFEe6mw1riz9CdnHFdLieUmDZ19F",
  "key27": "3MfpQK61xmBfqbVy2qixFCDues3jtt5M9q5KkeXx5ft9XF2uaUEBkVoLezhBTEnHsvQaZBX6TRbPPP4bHBBUDUe6",
  "key28": "jS8iUurRwyrbH3st4KCw64oEpkY3ohSeXZgr39PDiv7WSty4CCdTuzt5gKuKXECCF7taKzRiMh8j7bAks3Lekrk",
  "key29": "4PMosHFCVaNpWruudKZDdP2vPDGSayqSFZtzQprfCRsMoGV883BvN8NwSFy1WAEhJVkuEZwTdc7FDPxGypqvfmUj",
  "key30": "2Wn3H9rgvKbaiwGFjtckUj1BhdvXNVsFNZoBe3MbwchHCHmGF9c8G2MrEEbfqvAYsZC27m5sammKE1nZTZJgmFkC",
  "key31": "41GMLhtrZZttinh7n9CUZi4wRcnFbcH4muZ3zxT5X2WcHgeQoQRLvJdYRDwtNFPWiazUETPYQMPYT5YDLKauD9qU",
  "key32": "5uTjgFpnqy4c1aZQPrsb9RfXpLp3Cc4hcqKzekFwe4h3ZXuTihhhFpRmaSXHKD8F72YaF71aRwtxQVQwpPHPuLaU",
  "key33": "4aKScuXi6UZpauPx7ruMvZKSMnGjva4dGd43Z7DeiXUZqcHADQLGLUPd92CKUNVdZQVFqVgWqQj6e87bcDEfxpdd",
  "key34": "4MLjakc9gkmYBT1iJpMW4GBUyZQULXadcvEZ56b15bEqMi94QarEVwjmetwkXhbv7T3HziFjjwpQGMEMaKKRQFeW",
  "key35": "5berLybHByH8PhujjoF8X2k77iPdSb3kZ6uwK6mgQ7qQuZz3edVwmsU8pedX29KTMQDgcdqLCnSfwxGBipEfYwG6",
  "key36": "46KF1NAr9teQfAcy5t8UFZq26PFmnqowUuCaXGb6biz1dpfXkY6gQ31WeB56Y9hZQ46YB5NEuKWq8pzNBiLmq38F",
  "key37": "4NQXc6TigdQv1JVoDDuoax2X7kB6QSzNePx1Ztpjeb7K2nosypMcjSLJA2YpeuN1D4fTA7vbHbHn5JCoooTD1yD9",
  "key38": "LWzYXJWPwyy5d9tsY4sJZjzp5cJg6LPMU55rhhVq9Q2EoCrnq5uwRDNAgfrpGVGRnqqMYA4TfshufgpiK9w1mP7",
  "key39": "5JzWt6VSfmkCQyVgnzURTuVr97kfJoDAUVxaqYDqsTnLMxbFhSsA5nHWLXvdPNLrHmmacjgxCaL4RwMgPppU5M1D",
  "key40": "WdprUoN2mngXUzUKPGRscbKYHNABYaRYBqpTT4t9vriBVDbPbAVJWcZDEm9V8ocPknQr42tugExWnwS6haz2wtD",
  "key41": "26NVuP5xsZQMS6tZeysMJD7dSMnaQ7kLQU2cM8RuDVfswFCJTmypVRPAR7htHWnVsCxPMuQVodn43a49fZnvWrHf"
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
