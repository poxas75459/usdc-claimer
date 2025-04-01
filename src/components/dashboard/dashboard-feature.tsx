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
    "9GBKsN5XipFHzMKLGW2KuahaYwsJbcPv8WE2hyULh58k9UEKxyDArGfyFKzqLfd8cTk8mUBn3YiC5mYMoaZuf89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7hR6b4J5iFmqEEU4Q26KgqUJPD8cUJU2PyaAvnBfrSDZGghFjVugtuVfDghRX2RihXKzCTCZN26MTWpnEu8LpzW",
  "key1": "3q2RpxpCV18G1EzAm7eFgmXDmM6EeaRwgLdPkrrzhZQttnTa3PmqarK6f3JZEEVfnMXCMff45bhhZgpF1nHnQ2Sj",
  "key2": "4BXVv9VcoQ8nSSiNYRTE9nug9VFZVU3vh1L9CLBETUfesncortmFCXwo4mQJCDdRynr7etqZceCm8W52WoCHV5Lc",
  "key3": "uBkGGVsTsG7nyLX8z8kKGPNHVt4CDFReNZLBXZQfF7sy6G9yhJhvnX9gvE5fF93y2CRKvpET8u7Cio7oszz3gLE",
  "key4": "2Dt3HmQkjzHUbeFrgywWjiQMZKpvv6yYZheYRo1wZ2XoxsgSiHdpD8QRnNAAxV5NetA93VYmbM3jHBYJy9NMbmJ8",
  "key5": "UkCzaURhDu2nTcSheoAjfviCytpkZrWNhZfSBGtG8ruchuX7roRvyqBxx9k2HWQNFPBZb3eHKbpkuhAS7g6oWA2",
  "key6": "3bXsfWp8UMjnVBRtakzRTjiQeqhzKTjaTboPeapBX5riwgZfRfaHt8LbDhKSyctyXMgtNt3vUSiRSTr4APsNxj6U",
  "key7": "25m8qYEk86ieZ9jzNUoDuTmNjytB84XMzS92MiE9joRZD3K1ssGgMrXUVA8bX3Qzi7qetwBLbmm26UxLYyq5ufjB",
  "key8": "4QSQnUDFBoT1FMAkuK1UqcQdouQxQVpgfagpYNzzFEopUe6nMUaHvuciVart4i7FobCG136Zwv1zA8zU9tic9yFG",
  "key9": "F5nzGkNra9ib6kT9KLsbEcV18zXM5rnaubGNbJavJu6ugC3A7AdEPe3FP61z93gASnk8Dp979NkVVji8hhMdLGL",
  "key10": "4NRttyTuAb1QXzpwKDsiZiNdcnm5hsN9PeNLqC9kSeHT3zrdvyjbwoj1JragMZEBX7tEv3Q95A3B2YginDWrNe1S",
  "key11": "22kWdMJTY3EkUxH8w6zVjcWaxVTY9Uzwm4A3kh7ri51pChVZ8KdmDuVvTUh7Y82j5y1AnG2fY3rdbxUiPsLjMFsr",
  "key12": "2dAquQJSbwnewvfES751YCvazDyX2erwaBjZhbBsahhXM7jQXv5a1vn9REiuueL6YjuaMK4k1ZWovVX1dvggpZoh",
  "key13": "5jNJBg2ydpygBRD7nyQUy61m2ZTpPdQKF7onovWiRAxQrAvb9ebh3FxYZKj3U5ythUGYThTrkPDXTXb11FDbbRiQ",
  "key14": "dvWxyVQcpD4UXEuKkpuZ2T7GfvwmGhuGtudR2p1f8gH3gpN3c16NKakgP5Dyt2XaBLjrcWfXStkyp6o3Ah3d6wJ",
  "key15": "5dA3QDvefJrVXiUZbNuz4vBYcVsyzrh6Huo3h9zLzCYDPPgwDET71vc8HRkdqGmRTMiCZAViXDjgy59ZPd86tvjQ",
  "key16": "4KqgLt2v7AGgMcwd3YFEEd4eFHQ2eXDaejeM2tWwZLbo3dTGFZRyADDZoeKSFo635FN6Sv4Po8GH9QAYd37bM7aE",
  "key17": "2EnRNQJZY1mZTH3iyEXo9X1vGuyunPdGnLhLAoNoFeUBGKnvSaGDtgs3Qva6U1GhVUemGbyAJwENN8oP56qamN6s",
  "key18": "5RbF2L33szGzwrhdeEpV4jt8MpDmQbcXB5ct6rWyG5Y5rSmcUJum91GybY8x7d93RErQSv9N3dHyt4i9uyFG211Q",
  "key19": "2vt8vFMNFWYcg4AUoAF8FwD6qWJJTzgT5YwAbNyCvhgq1pNsQwTe9FAccwwmoSe4Jpvj3GVitfeqkDNSd4yZTvo9",
  "key20": "5VEo71cmqsNnTR3tvVTqcmVfe2Yo2RC7VJGVedfTPUb4sR3yQ2NnHRMVXWCP77hpggtJZswZxXT4SzAKrNkJ8HoH",
  "key21": "5nwHipWhKpDfZZE94wsWEiefNSZycdLeHiMmTLaZo1kXhwiEPegGuVruk2CkgEMVjXgVJ3Rw9qBG29fSdK34nkxa",
  "key22": "5ytu91hLT1catUGSR2xDYVc84gQ6Pt8psH52resiV7BggA1B7fk368BQVY8bSzfGAHqxya4ZU1JzYxcSk9vNBPxL",
  "key23": "4GEeFqUnAoGrDkFgG68aEN5nA9KECaRKvtkeWkiugFtEt5AH3HhFkV1ErMxe9DhFZVzXGAqcDjGcc3VkVV8B51Y4",
  "key24": "53iWQdXe3tpFgEKYxmq1BF6ExDfzz1x6UhBAWv2GtCbUjReDZpiQYmm4eVEmnmcHwYYmRb9HPEWZRu8kpyuBtby5",
  "key25": "4Uavi4oy8VJJ1DiYGSF2KTYheF14hZEHpdeu8Qryp5BMtF8MRK5rgQddL2aUDe6voJ26LMK4joPHrfixrxUQFxY",
  "key26": "2S63fjvs4mnmuTGXSCgcqxVdumxKosfT65i3eqSPLVZCk2kdGNHPjQjKTPtpbcgzrsRQGg5t72ooe3o1QubU8L9k",
  "key27": "2zj7KzqA6AS3C5JV57ayYiSDRBh7wb9hzHcdmGqzyoMrCbvPa4XUN7nYuppzwAcbEcofuuEgmXXx9VHE8NRAKjYN",
  "key28": "qoqBmktob7H3msU6eYYTwbm12b7mCfZDAf2wYf7UQGZnnmiKeVP98GWEH4Lr8WXxvaf6Lhu2TTs4vMSwr6oJbTX",
  "key29": "5W4wRR53EZGZPckhtCDrh3rUmtJoGasEvmNDq2Bq1uhAvMYGxsFNWaFq98ZpzKk2cT47YwDgrVPUqn8kkrmbHXDn",
  "key30": "2ZqNSaWBXP1mQswAWocyJ11rEqXWXspw81xgMFA18LmSeyD79y4csy95dATZV9WuSBPkABuhyXEe3c82AzTAFcCR",
  "key31": "4HiHX2ZZRZ1UppSKFEUm4fXgjRoX5HykodwZeGdPAaLmBUy1MFqwdctgApPmPX3fZzJT1pPwjBHuFZhCXHYSHEDP",
  "key32": "3CGuWgwJBxxNW5eMoXGAVbXnqEE3zC1rfKrNLuuZWCHPj5CVE4QYrSLSpd7cnMrxSHjHsBW1LveG5XPpeWhS7s8c"
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
