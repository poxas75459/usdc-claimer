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
    "5tpFbrJT7adXB3HbmF4U3xbh1rJfVAJzvLHJrevu5SAk3nKY6wsryMK9pCSZemRNoAFaobB9G8e43foqj1KktnXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LKuirVkCe2ihK5tbrzwbb5L3Twy45rwoF7k7ot2ekgy5PpnwMzshKGbhoX3d99wMKmKcnHKKcQpFU9VL5qPc558",
  "key1": "vGQhBGbhG8A6PjDEJynkrPHqDp3FQoCGHS1LMnaKcMfGeQic1AwdHzbDuEDoLignb1XgmBqzyQNcP4TyQqCKPzL",
  "key2": "28g8epmfWPvGWS6GifiDUNoK4fBKG39MHgp952Z47ozYUQCZaP7xYBevXzJHew55HgEwYrT9xmCWjPxYunwNEbhg",
  "key3": "zNSfJjHMW4hsuJpuHu33TcjvmFxi4JGGp3YCYqh3auGxwB529QobVusUoFVqihqi355LCBsUdQbrSaX1FnzXhLy",
  "key4": "GT5AyZFZzQQDSPQRhMBCh2hxuVtJuHLpn5covM4VugBWc7W2Bq4KW2FDBo81LiPtu5Rzy1XFfndGNHEops2NZjD",
  "key5": "3ercT4uxu9GG4NJSDV2Me8q9seLbqAew8KDfL1iRENUWf6S2Uy3w4Rupomj5bfHujb2hXShRVuA2VMv2F1PLDbyg",
  "key6": "42TafzfUd2YA2csrhrXaE8riJyq4eQ8xpxZbCb9UGwD5CYskMtAdvWmwjpMR36raa2En4QJX8njQzJjKPzQRbS5x",
  "key7": "5NdRauRq71xjUakgKZY1xyk7HajfQZSGhRWAVcBz5Ye4bKcwA8wqj5PDFBAJRvLh6o7KXizLPr7Fphx5QCBaf6XC",
  "key8": "2ZBuz8Nu659nadLVGnQaKc3zFXDiWVtaFeNnVQz3kfiV8jDRedJyFx1pBt4MCn7mBzgAjoJ7hqxn6c65LgqwMwpa",
  "key9": "5eEuoshUwTXAiqahENLw61oyto7rtEoDq74JdEvrQsHpiN7jXGnT2rDbi6BihiL4Xgx2SKHXPjFPhnepTXR1hvMb",
  "key10": "esnDMnh9Vtf4eaYqzRgxhfUGNVeAteZCgaUanS8VgACqqJaqS2S3mB2LDYKVzAkjnCH7p3avqDcv1nK41VomeWV",
  "key11": "hZak41buwcSyaufyEKkvwe8obVJ1bHynuKrkA6PurEja6TaTTZV5bCZa44S349ZQjYqZgcnxmkdH8LkjptQvTjF",
  "key12": "3nuDuGKSByzZj7F2htd3TKQp1g4iJ23FkRosUv13sEh1Ja34YVYHeDVwA56UhsfpdHK8DM78b4kbttNEjtejsBRx",
  "key13": "3P1uWASRE4hhMAuMnMBmowmkMis3Amj1dbJ9E9Bkh7HNYtAoQ6njmLdQsftkKh77jUChX8CgYCDec53c6gpHVPEt",
  "key14": "1W4cz7xAYgrhZykG4ZoMfaVpeu4aNgY1tYL5HYZcuZNhejw9vfoJZoDQ5LtbgqMd76kA5mwpedotXSRLvi2pY5m",
  "key15": "3FeZY4qi5eYhCo2rN8vvBLkjYEdH9oXASoTLSGf1FSwkS3MsityEvpX1zxLSdgrUutnZH6GP1sWXu5TExawLyMTt",
  "key16": "21TVsGKkocVh58gfRnPsm6Hes7aFmG51z5tBUeN189XybEN7iu8GqSoMiRtaeqZZ9w9cHB1MAWCBcMY3NfZhMWw4",
  "key17": "9LTZFv7YfL1uSRYYNk7VUgNc52QngivxYgsRSQ5C5KW4veFeXdNzm93bTZP5JFui3jbsbBiHUH8SxX6RPgBWV2q",
  "key18": "2Bn73npeFk6PG7w1VoQejL7JFdNLDrP1xXeGvZQLEydYVwPooEGwhW4vg3KRCUCaWU1Z5Hpkxwjt623P8fZm2c6K",
  "key19": "278kcNEYmRn6rS5P4Hzkr1ftGfgzejUKFDGGb4camHsHpt3MKJMCkVNGWtacxvrHZEmHSXiPBqJPj6ozpm2mNqsh",
  "key20": "YwjG4hrPoZGGkdR8WVULggjSWXejAPc3xC9Wgxb4bjvFqu2amw3SVuzePtCgewQ1CjT58kacmjdCuY73Wk676Bg",
  "key21": "DUjxkqND4DXp7nggX3gYy5uQjzHYshRK2wbHapDpqKmgbbCgfYA1CEfe8Wh2L3FCVCEQXmkWX5P6BA7LAANKafC",
  "key22": "3jBLLsbZB52J1JBkoh2XzUQu6Gor1MWAHCKDsb7BKwiKQpHRQz2DyNkgiF6kBkuem3AXDursrdnhzLFKmdok4sxD",
  "key23": "3aduPJgfSPj8Bo3LWBZgBc1yifbMxeCNVvBMhaW16jr5DyA6vzMMxV4sp51RZx5VC9Fmk9ahBEdJGdTFCdmRRE4L",
  "key24": "5C51MiB1AJnmw8WQU3Lkhnq1PUzVwiHcJXBMAFmwsqWH9zngJkJh8kLi1RkKQhz69AjrcU3wGasZ5fP5gczGfxdw",
  "key25": "mHZeHiLXtSKK3xdiCTmHA5U2eTmNsW3Np7ovj758TTdsXQ9bB2NEqXU92zLLzaMTpGZ5LkjtcRPkywDQu18GJyu",
  "key26": "2U2Jrc4ipJUbWiUZevtx3gJmKdM2HXnkbxeNfxH2tuS4Kh98uuR4NpnwEus16vCGyiApvxskvwfj9nc9ShhLU8Yr",
  "key27": "3HWtH1adZPuHQhGGrVZBurcyBthnnBadAJ44Tkw3Vr4zaur7UnzNPTP2fQ57QDLChbTRdLD3tH6gkUakrD5TobMe",
  "key28": "3ZntxycRB1Zx1Up5yEPs5dX3PsivE1FeRRRAPU9GgnmzdJwFZk5hj5cywnXJ5gUn4RCWdYWWLnP4YfsdBs7ysAti",
  "key29": "xnAWKSQPf9NBXFPKBRaVgNxdBB3vAdoxWLvwNiCFATxZZ2VK8W35KQTY6CRc7uGdnVjTLKqUs387pNtcjNqnYLU",
  "key30": "XMu1Mv5qnYZp2uCX4FR8WN6Wjjb6ouM2uVnVQy2SfD43JRpeotEb9JRUpEeJKMQQqTeVQGQtBiqFQ3L3FWd9472",
  "key31": "5VudTJ63gyTBmQugoQVaA23YmQfYuHUJvpZZ3FMWmAKaqm8g2Ty5XuajB25FdYdZX3HTU6zicuKvueEh7bcZifGY",
  "key32": "4jYzFZ5tyUyWku5xcYDcrT3fLRmR9VuHRhK3X2e49ZFoExW14QKJtpcN3ubhvP36QCPcMe6ZJRMxXL77wEGZL3cY",
  "key33": "4dLioK2KSSHAgSeqfpmkdWTUDjHDHg7nAfgua7KrbQNXbydYwW8kDoRCDTEXtgxdUVrzUY79PSrAB3PvGXwYfRh4",
  "key34": "3Y4oqQnVJFNKskZP1eaaiyYHJYcCAtCvZ1dNDDA5NesGfhjLcwN1hBYrDpxPp6BRtfR1XowRxwKoQqaLMcc2toNP",
  "key35": "zdMrNrou8mNCeF5WigkaGf3jy882v4B2vrJGyXrKHdQ3PJZ6Q73afqrwrJk4Mf74URokrc5M4onhXCMkJMqvU4A",
  "key36": "UT8tgaGx1jkMUgjqXn7eLCaJUVyzNwyuJ6oqNRMEPPMpkAHHhc5f8XBxB3eDdAPNnSK5rANauSN4YhS7TPHU32q",
  "key37": "3NCVCGy2W9nXHVPmGT427Tchd4buDg6YLGDXuYqcRUpj6Gyisg8Cxq8k75Y7y65wGtEQok9xk3NnEnNavf3Ve11R"
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
