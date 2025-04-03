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
    "32cLTn1uDrWjKEWuV8ZYBm9DU2FCMWJE9HLK3vuBRSidsbgGFS3AEcthPFs32UQE26PeLTHushqBBisVDXAczZ9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44pxWDphR4JFFagE77T1fHdvEL2cprZkPoQLsPfcpZ1nWD3yThrHZGTDjpNVB5atJ95TZ9Ed4keFazCCbZvzuW87",
  "key1": "nmYc7xNYxW9vGWkiynvRY1pVi6BX4hNjRDokY6ms18J3W7YC2LPvuukAq2NLXwaAvRhbJCiw5LFnRnYsqTbkzmo",
  "key2": "4ATTsz1JCBusHeuz1wzfhv86J3v7X8k8bZu6HwB6YWedFQCJUTRCaUxdJ3G2JvfTFq679xmYunMc5cCQTmhXoinQ",
  "key3": "63ytnBt21QG72nEekU9FG6WcocouiiVnjL2uiWPYNPmwAD38KCjAbHeDFNrTFDsDBRCHf3Rs7tjMJR2fz3BPSneB",
  "key4": "5dnNXaJJSMw9zqg8k8jTkkTWaqHqmsW6gnLHjBGz26sJdkpMjLFXejNnyAxBxGZVrpe5TnGnC2iWZ2QWqiapBVxW",
  "key5": "rQF4twYRH1XXuYVXUpNbdTy3LY8x6ooTJ9W84qLcAPAAvhihyRrcCuZ3E3yWGyWqsfFQ3i5XCpXvs44nhwYawVA",
  "key6": "4QzcSP6uhDNFdDhedwsLBoowePs2AVh3oHgdWYtEgNEvMhTryQZx5becnZDPgH9Vyyuk7Tz8sRUTv4ysmcFJ6NTq",
  "key7": "4dQrjW7QJwahsxypjHvz6d19JEUM2HcBVFBPGbrXaEf1UjFMaetzBdt7c25QwtuMipo1nyHVbJCNkDocqUcfkYBm",
  "key8": "4DxkKjJYuVThsBEoPG9M1NprrRAWWKoSftETEBw3ZRZBzUoz4ai2WHTLNusmK182HA9qx17tpKz9bWESEyZYXJwa",
  "key9": "px1g9FRcPD8hhx66os32XobTUG5nj7VXZzv1c7TfrdQWs56idMeeECm4HdKnRtDSLx5Ay9gtPieKbMx1EvcLgbe",
  "key10": "5on497yH2qjoqr9rW45iFfxukx4fPUjThCcfAsVZF4CwqK62DS2BaSGMWj1UVn5fNtcQEYf76okCjzgyJzpALp5A",
  "key11": "46E9W7EdaW5Rw5Ygxc3hXoJARGza16rkwVh6mL92WJGG85r332LM64Bgsdc6yqnfZAKy91Akw9cHNXXdSNgSYXkQ",
  "key12": "4pbZMnVGVrnA7wWJZSa4NnDUvYVSm8LfJBFGrhi3U6YeJ6pyzozBQRRt9T3Vw1jR5GsTE4NY32tRvyv13d1jpzE7",
  "key13": "23QqptwAtWSsFbnpnP17VvhMJwmFbXeeYrcaqseEd9gEhGp4iuNX9237TwFCn4b1f9sN5th8c86cmUxt7avChSCt",
  "key14": "3LNuoNfy2c79dZNEEBQvWnq1oHADUR6Q9TmfLZ8CvcR8c8aNTNwcfJKJNTXW8VWUKLb1LfNQ2q6EthZEVG1XY669",
  "key15": "4GicfgDeJ6F5R2Y5U92JaSNcAkTiTU7xUuGiC5LpRDgNBzHDqAC9hi9hzuqPVyWcN7dcxjag4CAV1jrn1RtPYGtM",
  "key16": "3qfAN2eA9ipebZviY9BAw7dwYJ9Bjx7rsFbeSP12KMZKUXBkyXXaTAuusrGvH7dGgscbWaHdauozt2UzFQSB5vmd",
  "key17": "3noUr4noktFgvs2D1MC8CKsArSp2auc2XY4ueHxe7HX6ng92nd3p426XWujJemp4fiVytgEEWsFM114jwgUeRasa",
  "key18": "5V6vmSqEs5hTuEBwzQsYbRUkNPAftMtK9k1ZaUjiE4GBH27F6k3zF77NQBvdtrwtmpgbFadjoB9q17uj6soSTfy3",
  "key19": "2s1DCeXsbggXyVX47ej2wmA8Vm4iCHhKMdqtt4mJzDQApPnvxpC2TiH4J2Zq3QVn6MpqckXTnNz7g1yk1uEFdjTx",
  "key20": "aaPedkJ6mg8KT9Phhy2GzfjwTxTgQ39MPb1VyNPgZbnY9p1wDAq4qU8pxnytTCd3RiH1A4nYZKg4QsCom3AvSHH",
  "key21": "4dov74pitbmRjowAw4UNLLU9zPrpaLvxuY4Kg2V91zQMbuirtp7S9CiBQdmBD5eSaBt68T5oE2Z3cJoCumphkSdS",
  "key22": "5dchG9u336CQXUAsBTDCED1QD3yLUrE1yRb7jznvpuCTKZsCrpVVLagGEfBfHihMTtnNhFwv3A2aiUNGqr7rAQo2",
  "key23": "48cwcLFPqCYPvB2XqUntJNfi234erFmP6DY2hvVsVYBPobqkC7DrpG2gDHncj4iVDSwtNMiZtZwut77wpADZNE7S",
  "key24": "ShbBhVDLg5iHqWoDJuvYVqMwZPpVP7zLvf222u5dYXZ3qjLS91VPftYepqE4Unbuc1K6fLxrxiEPW6L2TiiSLo8",
  "key25": "5PEKF64kfBL87tMQ3qfqAYhkMNtGk727LsRdnKLteLuvtoePm7vE1jZBc2SkNYiMSE15nkPKddnHUMB7mUZqKBHS",
  "key26": "4Y61N7ZUGTt1uXAmrdaTCSdrnozhie97QhEMpn7RaqCSzoKeJoLuTVVCY6m3hsoDsBHex3FKY3v9Jiw5BHTxanjz",
  "key27": "5XBzCTVa1suHVooobncgkwUzBwMtVnUubUz83pKcS8wLbL7qWPHiFyTbN6Y5gYLFTaaPWesWK4vLU559isCFz5RA",
  "key28": "3L8BcedJZoPKnYVGmKBfbgHtkSbMZpzLuFtTjPWsY4UChwpeRtav83rwFHsHj4WRyyBGjD3nNNoTdYbFj6o4VNJv",
  "key29": "vsRy5dRzMcMk57SSLQMQY5JHLTDkjMWeo8Cwf37Ms5M2w5H2VLY7Y58kZCSyL3a14dppHseAVShCqP5QRNm7As7",
  "key30": "3DjdN5yL1rrhBVkZ7aHt2sigK4df9HDt2RoNFbF7Ht7HWcG14S4vMcUBpWki9vKB54zBe4giAcUH5D4sKVuM93Dv",
  "key31": "pcawhSCB7NpccjpFmSJyvswXWa4E8BQVVqcQev9orWXEGeYXPW6ujMFXKd4NYQao5sB6rVdT1h9rpgoHyrn2NyD",
  "key32": "3gsRasfCTVmtZK2fWGeX7dRAnJg6dK1iqNASur5bkzekv4gg1QqKQ6FY4Bzwvp2kubLNk9ecX1VMfUSnhTayKuqi",
  "key33": "5FRv4mNkgMAYSuZZv66NRBCWkXNtQUTyLrBzi11BTcJo2XLE8N6MjnQUmKiMAeHEda5XZps1JSf1Ck1B84wxMxA4",
  "key34": "2SgCKTuhreWp78jZ4uvV7AhcnikZK3yXH8SeSCRoKP3sxVQb3ept746YuSKjse78v6MwWbZpU6JjV6dHbcyrXgAE",
  "key35": "4pUbEpHNGyXCW9kUz8ZFDV9U2n2e99Qnp6xUH5f5qDTsf6yFuFPJWPTb9Vx8syXKn1ighdkdat1cDZHt2jXDkJ2q",
  "key36": "9PMKqizhfFs93MBnVwUW3FdAE1dXPEeDg9AtyfNXwHQaW12Twu2e45hEWzXQR9eiyhjidLrm4G8Ge7QEfwi9vRK"
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
