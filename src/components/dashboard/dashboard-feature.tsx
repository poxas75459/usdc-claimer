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
    "4kLV8ssmxHMBrTLmNgHX3uPiHzw5xhykNcqiqggJpqVWjaDQv3CAfMxqRfJZS4F9MmZGbRTcCGaRKcgYDaefUfyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tWZpgEvrVWFP5a27pzbjfuwJotmmawmwMqRjcHzzXYFv3311EHcJ1HhsaDBnJ5L2vgMyKXBpF6pEkDXcfLS5n5u",
  "key1": "sgqG5ChnjCS2Dj82qqQZpnUqdV3zkNxB9pucJXwF1BiDwbY9R5CfVfZ1Bmab9MWKUY7f8k8g1BTzyEADZdsRPUN",
  "key2": "48mebdEpv8sNL9qHhWVvZjUd3hiUhmq2DAjnBdZAGdn1GWZPhuabh5JEgLk1sNHmBo4krxFVftqQEPYsTtabnDJ8",
  "key3": "4tihmy7VAnco2nc6bqXFFHdDxDPU3rq7c1UVWndWYk8aY9vWcNyvJ2hTmR5QR4SzoTwwHjA8mjMdm9w7ViRjuwvz",
  "key4": "4kDCXEzburGsmCUjYF9v6Lc916Cm6ryxH3rDttJW917NmY46jSs1WyUxH8rBV7aZbcKUWdkAiCQA2sX12WNpLZi2",
  "key5": "4HUQ4hGg2cgasTt4Wqdo2ybwxDLrBQEgLRULAfanoP7xPwR6GtLQ5T3gMHZUX3vFw796jDRZwuc1wZxukthvVwEK",
  "key6": "EQ8A4bdRUfGhcSSLtm3qyYYh1Kh7b3gXi5zep8trwwM44k6z6aouewJkgQJVM3CPBxqExJVSXTFUVPf27HLp4vN",
  "key7": "3muFeNQoJhacjyR4Zpcf17baKiuPrSxtLL9jwDFngQhtZhfhMDEMAZstUTSaNGuzmy5Zz4wMcmw33VSGho2j5Tup",
  "key8": "2TcLWXUYNz2PU5cv2qFwKBQSHRQgQfEPRTqUZVgaFdgjYUEn2dnx3hj5ataZ6XLusqAmhoKa3dmMZm4AhL7qcC6b",
  "key9": "668BJP4T3KiRkMnNPCQGwrx3EmvrkWzbkLF9cTFftaotZKbqzeG35b11wYrpXTCDwqV1ax2gD6RApd1L1ACPMPVm",
  "key10": "4NiaHVDhMmfXS1ZbD2tdiGPhdKRELCPhvbQxgQJ26u83MTEpsXHp4BBN8pghEfr6Ajy1tfDiX77aK3d18duP5hq2",
  "key11": "26Cmqgyu3RQEG2VvAi4euHEciFSqQPj5f5NTE7RecuEoDxnCeZEWSgdVK7BkCzub9Y6TCDaUud7xNQkC7PvyTpKV",
  "key12": "4z24Zn1HzrAbgKdU6srjYFXKqDmLr8QjWx2FN16qjqyecjNc51gipmo7NGbGVYqfSqUgamaw8agEFSMGZYSLaA1n",
  "key13": "3PpA3d5G9yq73spXFLgK9pZBhqzprsubZxBF8iuw2nkhSbDqPRRp4wZXBrNqtYuaoUoF8EiUAwCJwuZCLVmRpfif",
  "key14": "6qKSRgi9vSSVkbzDRAUR5pQnpGv2esywZPbLJtezXBoL6vHn9wVnrVof5m52CnM6ahbYaKyf2NEUHZFTzAmU62h",
  "key15": "BMMhyM87KqBtb5NmUFCAKPB5dg6cbNNSRV3tixHrbzGxebmD5Lze4CWCY3JEENYLLgXFaRGGd2e7Pgw96gF9TXf",
  "key16": "5tiwn1e7sHuwUXbP5pY44dmBZ2LPXGRC7DvpEyzTFZo2KgfY9iqXrwpdKnwHfiEqTiTGxK2P5mst73qh1jG6XjEP",
  "key17": "DdwgUunAsRwvNPb5J1MbU8BBQReghvtGZy9VxoHmNW33sgGRY5Fa9DskSKTgGpmPQazSCQKCSc9tiQTA9KdZVLx",
  "key18": "2aHhGUuYR5p7o8NFwcGhx2JaV4cQzcqw9pkf95SFD9hC93KhVwvQi3JmttQ8xYNm6fJb7eDwnrqZRHn6jHYR7Faa",
  "key19": "36etVjB2dQ3hSuNokLaUBnGBYGiXBUAEjBUJaCsCPfAzt6P8um9mPANCtpkmxZRjGUP35LLrWLzV5T5cWufhC9H3",
  "key20": "4SfyWpY9NFWf9XQt8Zdatetd4mhd549nkoRdWZBG711Mhr683unPuxizFa4C8b5bKmMCrbya8Epp95UjvsLotdBW",
  "key21": "3d5YwZXYGSmckT88ce4gLyQe234qkUM8XgiRw2W2gRof4i3Kp6Gk3QMfSNVHCLVw2pcUmwDN7jnQVhMVbmBSHxtE",
  "key22": "4qoUGEepraPA2ncyF2624m3qbBmd6beKTp9JAXFtokT14zR7b7TRRCofuHQNJvZhVFBCfKVXQeWusG4XusFcQUTV",
  "key23": "2n4STVVXWJvEch1xGDQA5r3mTQiLuWQLHHsLH64cmgGb7YZQGySYfSMKFJA7j82jH4BEyX8ikT3FcD2M8K2yFXfm",
  "key24": "43RQf1nx3u31vZPYKM9GBogweebjn86CuiAepy3DRTAeuFsn2KoXC6VJRik6V5WU7fKJFFZihFRtkWwyVuCQihYp",
  "key25": "4bFMWwc1ZhwmFj3znMmiARaMCewJkFciWPCTFGhVtuQE7KMudXKBxdfQhnP3mHsVt8g23ZkXUnKQ9NxH1CrpCi3A",
  "key26": "NzSgivQXmgfRNeJ3k6tKhjupCyfRoyyLUm5NjmTBdHe8sxkVfV22JkpBGvxow6RJCQBSbLFbZ25Shb2qQwF1R6X",
  "key27": "4LQJUJWxznUm6ePFSycgKTprgz4ARPG6qV6qTViCPzXe5Px5qo9adNTsvdyDAUsBbSFTFBBXUeQDi5z1N2tzN39q",
  "key28": "77R8zRUR5JmieE3J5WHSpXTydWb97MBqg2F6fs64S1GUXghjCUn3CdVs58ecJSzZ6hkyhCErm74DyxMvTzqM3Sp",
  "key29": "CvKV3kLKCPAasKxhprbaVbnyu3uh7A4ejNRpLKfNWskTQPF8jHz9rjMxFAuZ6mLAuyKZDVQB5juuzVAeXw1He37",
  "key30": "56dBgKaqDs1bq8sbeRYJZRseL4u5vScE2mkMbA1Z4kNp4KqKSKUGZtApgoDPSkA3ig3m9ru8WAmWsyAWDsTmHd9G",
  "key31": "5qZEmKUYwoTyHSHEGtjX5xAjeNCPLTsSSEns9UWyANBoyLrD81N25Ax8sCyqFL5b7seo6wmHYZjmVjoPGjV73w2K",
  "key32": "2si1ApMDkCEw4mqdYfbb1hKJz8SSPGg1WcwjYR82uHTT1GmzL9jEiU6HfnpX4kZgVTCrNFm7uEms3asmSsPKETBx",
  "key33": "2QaBw35mmCGJo83H5kjmtdGGah9sRiMXNrGVDfi82vzsMcA1kZHU9fBCW8XzUg7MTznprMakKSAzf326mxHvQZjA",
  "key34": "3ZsDSN51mPGdSaK7zy536JgjqXF2WGqX3yyrVhdYvxMQdVeNCzYtFCurJ8YYn63kK4NDo2JMg7Gj2ssbuZb3n6sk",
  "key35": "DjjSPEUY5zi9MkV3tenCMs5W4Dtn9y2raLuJX7XQe3AGcSX3X1erdKsFneyvuCWTeyh2K9M4ZMzZ3YzZ7cNqRv5",
  "key36": "33NSPsW853wACRiGK52ucUDcQ9CfxgQ8QeKWHxEEXE3ZTimySAN6QfwMuRHnWvUtpqJh9fB4UCfypUEBdGmoAEQt",
  "key37": "3NAeGQ3mWtDRWTsyoq42g3LN8RjZ4V4FNuivSFRcFisC1SqpJnWj2WLaRvTfFu3HxvAGjfuGxhwtxgN5CuPVCK5m",
  "key38": "3k1EURukMFRik8FZLs82vZY2M2K4Q9Z5EZR2atUzsNHAyDKckQCDcCno1u3HPZo4G41jjNVniaq39SqZUgGH9DCa",
  "key39": "2X2GGpCHSjWRoMCuV82RsD5mW9ksvUXAQ5z8ePey8fSN7jrU1XZ6dcaB2mQ5r7p5u1AnGtqyDpbixV9GBjCswqau",
  "key40": "4pzfF79o7uRdobZd49Ccwi6r6hcJ97TRDBjNaxFPFHTmwtuJpTmFDZv1D3CEvBRua6Gmwzs2z4nyKZYdDSVGqBSq",
  "key41": "3Rtir8MSqQDDkL7RCFEtE7tUBg3G1LTn54TFEUUcHTXH9Eu1eFfHTFDQMUAvQjLXs7skKcPRWwp7pxkhXrnMYeD7",
  "key42": "39vL1YydTKBStbzervMrFYdduTYtk5cPBkJgH72H12jA3Ygzfz9F25DLMVXhZd4x8ekPbcgydnFMPWzTtCK9ikvP",
  "key43": "5VVjxBMCKSsbENs7MpAEBRqQ8DHjuoT9fetykj29y7ueGsVuKSsMfzKJgHn194qcmhvFJQ3xDntz5fGNwY9wsDsR",
  "key44": "4r8FAn4UknhLyPwjpMm6XyxmJrK1ZAnkV4HuBJtTydwmjTxwZPcSWFzCs1M9A9hYqjJU7SsbS3RjmDLMLj7ECJEV"
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
