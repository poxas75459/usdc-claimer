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
    "MSasqqKyAqYGjuzhv73gYa9Mc67N2QAwrLByWF4aDrVnK6iN5BMzpo6ZqRyyhiFHzjNyZzsz2bGFQHVwq1evmkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fxXmWfFz5HKSTt1JhD23XYhKhGxiNhQVg6NYhoTgpHY5ajPoVzmaCFZjWryU5xWGadgCkHwdnSi8LNHzfE4tjAC",
  "key1": "664YjWtdo3j8BdDLBDHhzcMX7JaEM4TYTi8kK6NSxjW27WXzjLXyr6aBU6VhvuF3kzfHaTS33vhsN4M3Rve2uCYS",
  "key2": "5hbR3UDBRwfuJeQkqYpTJgzs5bsRWdQM7ws41DRfcxBND8dhRHuKnmWZZXo5QnynkXNrpsanr2FRJRnjf1RycYPE",
  "key3": "G5bkbxVrNkdioAW5kU4AqbK4Auo7NSUUJBChjPGeZ8g4MEVZebqVQyBhB67LJRMzghsNzBscE8Hxf7Fk4yUnWzk",
  "key4": "mpPd21vZ8nkpPbcVCx59h3QfSePj3vYDNr6RkME7QbvVyZcPMhZC48o53xVcdbLkWCBKDRMzrJkqdcECz2nU5BV",
  "key5": "4g6nVKoCUPpkzqmqbPsJx2Az1r8dKmCGGm5vF28NaHqXfWAoSwqeYEegCRxq6LgHBRuwMq9pvZwjzm8gVEKYCx14",
  "key6": "43RdjM5k28aq8kqmcCdcdwaJbASckvU2upg77wt7DrLqViqDhjJfCEa4eDXyhUGEpoYBkg3gHzw4e8Fe6QxPstLS",
  "key7": "3H5tzkE2w9mfyBZKYzks9aWfooXTCoBeTsxuVKbjnEZfseXd4ccboowtzPxk338MbXgDVkNxKQF6BoQGFvEm4GLr",
  "key8": "UCAAtnDdofvFM2tPVpcFSZ5ACMGhH7h5ZjGpMaXZoNH87n9NK32bJB8a5qn2VLPL9eLQv48Q9sayeVD7sQoQ1cc",
  "key9": "4JgcyhRxiXLGoYhqvd796G69FtAUvRXHAq6fkvfPFdCtWwVgDDrmmdBZxfMxCbPuxdErHod6feTmr8mDgpnYXnSf",
  "key10": "4eWR4hKPRfs47PvZdGNMunmehqoqiJgp9Uht55yv5m5odZpoiBoSBEnGwcEkUc1CqwtafZjyddbeGHCVfp1M2Fma",
  "key11": "2LaexQ9o2k5zzRbykT7sx514AnqLX1eDX5GmvxUvMQ4FeQsPqN9ngQ5T4A8s27bvHtYSK9Nbr5m2NJvuMsaZotAf",
  "key12": "5z3W47Kp3gUsbdaJsDemzdLyF1zrPAhyBeoUDXfsaJBafFM1d93nfFCR3nDgqYmpEC5BkUg6ZK19PpNP1J96f7BT",
  "key13": "3cZa7v6gY6dCjV2BHLLvPPjB9au6qvbYqMqXAscsCVRnXn44n1EZyxN4TKpiixFzRgaeBvNVhgjrpMFW4QtGPE7v",
  "key14": "2HYydmMc6ACNthV5KYcgVKhUXWJqvcgkSxxm7kGLR1fKVr3GQLW9QBqnvWvv4C1CmbrEubAoX2KUgvD4jU21aDJa",
  "key15": "3ae3F2TmkoNqSYHJ3J4DJFK1EcwpA3AecJLfy2ck5QC55CqzEKj6kD1QfMZ6VKxGBMhiPXZAijMSUeTkEbSitRXG",
  "key16": "HrzVh9axTaZwDdr6Ma36UQi2wQXqdrT5kp5Gh94otKQH8dJVLXoUiMopBPWnNCL1nyqtZofo9KrzuFRfHdNfx5N",
  "key17": "2aMWtSxLvPM4grscfr1H8k1gu9nhC23MUbMH1YtEh4HmSgd5fVReXLKwjMWG4iYwEeyv7ck8SFBTwA1ThJC5zZfS",
  "key18": "5iVM57GXfcnezArziMZc9mn77v47chi1oC3vUgCjkKGeoULiq8xXUzZLN5LRsiog7Lg6AZXj2ETdpfSQ7iSe9ReL",
  "key19": "M9ZJ6TwkAsXxmtEMek7w9WFJ7wC5Xip3vWeLqDwWXYyoVe6Ew4ffMcA4jkLsBavZz5EkCPRmWZJqwjoA9TCmSAq",
  "key20": "fqdzzyVUL4QTxyDMwaZ5vc7jjM3EfVXnwPAx4MuPd8ecAMt7PfvcQJwbBvLdbEiKn6yxpipKmSu1Si1AhxP5jj1",
  "key21": "5TVNDadjePBJpRcdq7jHMXk22WR6eJWMUEzzHa88CSfNBB2HQBT2HQ3vtc5cLUcnrmZUkEWbJ9H9nGr9DxxMAMUd",
  "key22": "3GK2pgz2uZr1cpuWiCJy67vEjh2abCP2qMRHHCMZUMVxCa6dpZWCvgw7G2o4jB27AsmCzv7tdnWyDF4kGdC6aRyX",
  "key23": "b8yTpnxHh46ofeAxPVGs1U91cmNbXkt6yYh1Sx4DH9csPsrMhXFb1Wsvg7mAXGqUeMwDpwCtmG4KgWJQGafrj9U",
  "key24": "5QdZ2tTT723DGLmPMsWJKgfq9fzQePSmoS9LvM7KkUaXxu2vZghverYkSdvB1Vm7u4LzbgHW3SXDEJbKKVQ5MZbL",
  "key25": "5ffohcq5RyVWFT9SoWT5BZ2woWwNdbwuJ6qWe4ur5jb8PyLfDNXGahe63izWo5JRjaVZdPMifpLz5WQq9tL5AtjQ",
  "key26": "43HcFm7xZCbCMqiTczyt5vdHxQSoVkJD93vrjARM6JLZVvPnhxkFCN7R9RqwrKU4Z38CwPxAkAcCFpcjYn4dpftV",
  "key27": "3mGB4b4pktHVmTqgMCswxVCpP5g7DGttr7W2zsxBiHTuh2W1kgBdoqobQpPpDyvXSaHN2iff8nvJ5WhRscTc43TT",
  "key28": "2tRXo83w5z5CW8gpaGMHCtGV59fuM3qqFEcct65TdvjTJjSkiTrxhChtKwbQGytR2YYhfHozkrJfniJBUEArPtEU",
  "key29": "22xMoyjeEvsB5ELTUHg4Fu1dJwk7UdPw4wGqAz24oFvqi4wbTfKtKauP989jUAJtwcmADNTMESRpoKqUUF4gJinj",
  "key30": "4H5SH89SYnVw97AT6AmAQ6nMjbHTxPSRiXE6Q63FjZoHn6vPMY9KwAyaJa91RvHUF9nYNnYu844SjKzAbRoSv2gi",
  "key31": "sZ6YjXE4djW9a72gqKpxUe7PrsywYWc87jTbSjuNU1PqTvDmcWwYX9yTHVteqMCRUEeDbbEmzT8TqGw3CwJ5ZZQ",
  "key32": "57yRtwSqQ5ykWDMnzqYNdVa34XFWDL5u45jaPzTWHWZ5BUcCfpAJN2oTsbVuBdp6gcxKrBj2WxkvC1fo7XZM2iZK",
  "key33": "4JuAZffR1mmRNN1QZDoq9UntfFW4jQYaiwt53RstUbJ6JH34i4SQq2KHPsDoifYn5r9rNxyUcwNXKaNYRA9wq3FY",
  "key34": "36i1PKJaBuLjSgPpeCBtoRiiAR3GKj26rQQTuhQ7KmaNLqUUickMa3XfHnBqpt8uyeN5FKiiiyQ6oihf1iKgMxX8",
  "key35": "5T12f3661uwQ59LREAUSmvTb9ya4Xsqtqm5L51C78hysoxpkANvjAfLLvEkHaLnXPMpNZe8YAt3Utm8yD5cbPBoX",
  "key36": "SpNd9CfGASaFUVDPybeahRKHdPUwTfm2ckuCaPimp3iZEKRQiTpFrzdKCdavoJgAF2cpm7JAnM77eNum6FVZHxo",
  "key37": "3fgetzHjWfNVugRUfocq2MSg42P14iTjJhu4FnBPAosujGDiPJeuDNZ1MbaDU1JEk7E5TA6K3kV1w15VLUbGhzu5",
  "key38": "58D4bTcUr1pYZmqunCmrUiTBfMvnLKusz1mm5M6gRZpXgD6bmQR2HbjzNH5CefyPwbt1PEu59PURb46Lk8cuZwLP"
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
