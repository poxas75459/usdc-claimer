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
    "2tHaQM1oUSwxFyd8FsKoLDgpTz2MfrqDMJzmohWiMeyJnwGj4wZV8pjSNMLdX5eRvnFKEp2B3tLCXjifRtavvgZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "235xo1knUegZWVBhso5V4h4syiCu6KgLpPT8GBCvRn3kLJEn5s4t3FRyERwrkitcBabdywLhJoeXCPv9yB4NZfJR",
  "key1": "2GxbBmX2kBvDibdQ3mUwB6X1xYoaeqNxgyy2hz8eJZRnHXnCD3x8Bm5t7y3Yzdf1iKsKR3q3qzziHZukSJjzZmzX",
  "key2": "tyHP6jmgdTriqCGuqSpYGJ3oyLGpprX7DhiLLrp5jLkPKq3VYD965N1r12NzSj5dKMw9FKzrEXMJo4o4ZaC3oU7",
  "key3": "3xV7wnw2iBxv6LfQupYr7f1cBL58feCkqjEijGQA4kbze4VTGjJr5oLgjeUiAi8o3y5D9yPbLgmKV7AF9K2KJNpj",
  "key4": "5qfDxnuLiLtUxEDBvw8zwyMpnCuHuTHTwAEHQK6KLCscAv6nSX8M47fx3NzZVdERo44ACgnmageMnj45braXD18",
  "key5": "2oumaaFUnaBKiGapnMKP1uHbZ3btfrm6r8Vvyb6d1pgGQiS3iKHgab8n7yaoK8XDEh9wXJ8HPvJtNTP6uiWJXgxS",
  "key6": "5T25aq4ZLsvohAbL1MfWXJa89fx5xdu5xm9sMiGnr26fUrRxSsnofkna6cnMXeZmZAr6Rv1SBGnYn44KJHsPLQ6E",
  "key7": "cXVkh1AF3R4EweoCo26TZuf3wKnRBsnGyvSsbW8psMRGEvSxqxXsGcoA5mm3xg3kCxsVpjdn97PNMJHrq9YbfSn",
  "key8": "5gcmnjGGs9P1R7Rx6rDteWxYw64yB2m9Dme2Q58uY5V754mGsLAeCiUypu5mujkbG95XRc9UmxWBiDHmc72yR6qB",
  "key9": "2JTSmwaKaLkjHUc6FMZEiKbAFDQaTTihvrtqUeAZx6Gfn9HMunMuCKSt6Bd6AeohVbibKLFXyP6nvSHwDMGqpgAM",
  "key10": "nkdvCpTJ4kfgvkDeVbnnfdKPFdTbXfTBxL6LZFMVkanunVBYHoEeo2C9VBgepMEhqqafwiJVP2qBdRfpMh9aVsG",
  "key11": "2459XcTYP8pnAEpyGc9nW7oQ185WChqJYv5Zzgbf4yZT4QGTwo2AdsJjPzriR3m8D7CsMso7NBzEJ8dPyXZC2iNC",
  "key12": "2SeruvWRAhpvKkfKVXCwdjFerBjPMWMSPnjBmrQUTBhQf1Dex3UxuysD3RdX48wPdCZ6tX97nCvHniDHCg97E7Bq",
  "key13": "2fzE2d88E8YUovwoq4a8kox2YXEEHpLSbreRpoLKgtc3NWbSedNbr4H6tWvXEHGxuvigh1UqU1Lmemp2UX3NZQj5",
  "key14": "5e98tn27ZvGZp6iSXmCoLUmPkgwv2N65MYMnkzXNKWBgw2dnGBp6bi7314MphYzuNV2HUhadjT8mvXVRxKS21Mkt",
  "key15": "4o7JJxhtd6fs8XVCmjhn6HjceD2soLq8gj2PE2MWrTcgjq6s3WjS8rY5AapuNzuPEPc9EoABeVPP4YmN9pwpGjg1",
  "key16": "5EWJYj8srGks55KUZYodc35dPeyWrF1QKFM8BocLhBF9U5MkP1y8JWoFwZjLb7Aep7JUr2HiJJ2EzZZz3uvVmA33",
  "key17": "4cRbGXLdQvYRi5WvqwATx1atUAZDEPDs3PmfufakmUmi58YucdwdWMEN6nmt5c7bwvswG6t61Mnrei57Dobuj9v3",
  "key18": "4cSudnksj7rQRwKe5L52LfX6AxfEM6BiQE5jmYU5ErDxpJhRHkTMuVMdNeUHztZiRj2rRDdTAb5oUyPPDFs9Hcgt",
  "key19": "386dLGsi3vqqEgft6Fhf5aPahJfdb9xcKPrzfszNUVh3EziwzyPYAQuhtJTqGVTVnz4fCb5CV1ZpPgmSH4iVCNfQ",
  "key20": "2kz6GA4k32o33yA4TGvXjh4CCRzrvwPw9GimxbWDoWdUyRBidTTWo7y6U5EbMsonZaX1dL7aHYFgifkvSAjF41tq",
  "key21": "4Kqo7G5J8WAgQSZ7ndUEfExMSVXJMo1haRi2pQKfQuFJmE7cM3MaA8i9w1vt9HKnz3dtKUhavtGarfeVDM7Ey5NE",
  "key22": "2EsmdNGjcswpwPbMTppjYDnVqLAwc18RZJsmwM1dXJfNVNpofHajdwEUzsXY397icRex45T3Aibtz87T2tZcpr4B",
  "key23": "5VnznmYWRHdwEMAWEgirK1CdtDNmhw2nWGgCcqsnoygv4qPRpM4oQUTvgfXfModEr59j68RdTmULMQbiMVr8WKym",
  "key24": "5w76Myuca9dP2DmEeF82zuJPkbrtJEECAuDMXMygL5eXyGe8TYHRpGKCoM7xttP977Zb15QdAfFpErPRtTLhquh1",
  "key25": "4PnwEGmF8X4MWxeqFiQDGAqR6Tp9S9kwQZkybZ1zbP8ZYqwtCtNk9NsNg7GwsqsckP8Lm4dHbURMSM7AuRsb8P2h"
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
