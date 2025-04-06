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
    "C4Wep3VYgeB8NRuo1fpdnVUoBHBXnNr5DqovxMJsv2qLESnEcYLygMabD15ZwMESWidiechFwzF4NyLpbiRSbDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZyM3iK49JVwNjbqhz2qb9rySdz1qd91EnVFx8RS61y6x4k25gHZnDkCZHpdaAdtp1XUXEwTvrhCULzjGpKiE5R7",
  "key1": "5kBHnF47T6StEM1GNXbZkTqGBPVNyAigUX3T8aW5t6XsMmug6VDoA4Zkkk1GunKUHjF9kEr9RxXQYjxfN6YUqCab",
  "key2": "2iadZviV1nTVnEmwqwQ8cifZ1gijEZRfbaYBmsHq6pLzw7BkQQv5NefisgKnFzdaaZWGdMtEdomQ71tyhj3DBXMJ",
  "key3": "3G65siupzQwDojQAWEvxzy7oQxCyi9mgdoubRpbZGPeP22b5mPAM36Q3Ap7nL3zoKxSCvaNdrto3XqSdK1UJGbW5",
  "key4": "T9A779GuWKkgXNHHMJqFDXiCyXUCmWJYXcsqXYen2KXV67sxwdpVwDKfwrF4U3YseQnsZg8WmcLcHbywPp6K2p6",
  "key5": "341s8dg6SVjgXd2bGhDbnB3GBcs7gNVNdQsHtrKu5Uxyh6TEg6G4tzS6VBgsnZy9c78pr9kdpJUhCTcQMuEqnt4N",
  "key6": "3bbJCr493aCcmkQsCcYCghr3tM9EMmem2evD4ZdJE46wWZEVMkDrFUDCqcbVUpnx67Z2iUdA18dCG7dzYwwvfvTF",
  "key7": "2FxJoyAmorwjCLfF4s9h6we3wk5VCH3NcbMDZzacmF5CkDiaQwJiu3gi7qne5PVTKG17KUJmng34GuZxjuXWqKMb",
  "key8": "5Tyca7voghibbxzgQwG3TjvoU1EPyYxQXJnnRHWZwuHwiDNFixCFF6zWv7pkWwwY79WTcbRompQLy8PiEDZNT1Y2",
  "key9": "GdYFsyEQehn8ZkgmSBYLX49o4HQRNfJHD3KuMEPw8t7CZL7VHr4QafNXYo2hoo3i3zVN1KrLDdBPpXY9EJLtEqa",
  "key10": "MkV6YdruXrfpCmtAuUhqQYBcCtCtvTdBgFCqRLjhhstHniU7baHugJUTFiHo7aZiateHW2otuQQHY7EMVLC7tAs",
  "key11": "5kjzbBHdnr9UDLUhSmt9oupwGVdCBC3HoLAjpLFnC1YVANkbPG7K7EMGCDMR17gtCcuEnyHjG5oCfuLqvGZXEgAR",
  "key12": "4oTu6REoQ3zdhthAnc2Po1zgoQpLsaNocHD1yZnD2Kme5phGr1X92tsQtxj3CVJGhsPrf9qSLs968pGZQvidTzTk",
  "key13": "3aZszWQLo8b4FnQXsUtSqwRZo3a726b3sA4BK8U6Cj3cNDgbhUNw1xfaGZJdzvXnMdx1W8fXEdESHsWL36sVSM6L",
  "key14": "2vMzsSD7fVUEs3AvQH7CCiRhsd13eR5vCoVZCuBqJqiE8mYjSZgW32BEWXYPifMWf5Sj2XwApkuPeTgPymS9XmNw",
  "key15": "3qYop73bq7KiFhyM5ooGz9cG3JUoswzwEcXckcGsBaZjGJsLAAex3U8CShdnuwErKU8h1AS9FbgNCYoc5FWQ3h6W",
  "key16": "LySsb1dQhgaZr3MpDLU484weKbQR1RRUN8HVKr6PuG3FuYBjGCcMJictfqo1AK3mqTw1Ejjo7rEsEXAUHL7hhd7",
  "key17": "48hHq5sHCdM117pMi1e6bC6D11kBnwZ2ioyJfURxd9cPAw6K9HVHLtM5pve7dWqppMgB3oSqW4VnSwyMoR31VPjG",
  "key18": "KyvgmnhwNcrJYtzhdEwcu2k6gRJ2gchouGUfFtceZ2y8iAD3MJdSw6gNUu5HwHhzbz79TdnrdZVMXNUGGkxVy1E",
  "key19": "9a8R65gqyNzpesBtfv1wLyGPse7Q6Y1Tj4aowWjmVhZWEC5Ng2dWpwQL9H477tyKTV7MFeTC2koN93spzS7N87q",
  "key20": "39y8GB4z5cvSAXppXQ3UEiPnRwuVBNMkxsiw1FGHQiksQ4arRStdNJEbHQiUq4PGLfZwaXhdNwXHeZhEnZezDCPb",
  "key21": "o26dh8vRixJMhRe4y3AE4nGhyFp5gzZaLr5RcmGp8jerWiKGh78zywovJJtNEiu7FEspoFdFc4zQeXzyTPUUofj",
  "key22": "46Q5k6E5wn5arpUTrUT4SJma8CxNhezGeJmwjEbN5hjceLbHpKHHr7MSY5yr6FUhxjuEDeyzwkorj9rFzJXWBit",
  "key23": "5YQ42thGQh18urgQ3gq4eVS8hxLg6hzaHjXJ9BCbbsHpgKNztvjujCLKgJFAb8X84dfNU6GZiapnbJYvoD3kthVi",
  "key24": "5uZrdrP5Gq9uj7LJTRut5M63ggSLeq9uiV3MiQjbnif5tsJPRyYpigLTpKAp9sBNzGb53fEZS4zjpwEyq37MZorS",
  "key25": "5ZZB9bkbX8rdPtf3bNR5JgVGENZfMev4gjQFxM3btiwPhRo9VrHm5wR4AceUQkLMreBCkSwnhic2RJUdmb36pYAg",
  "key26": "2DoWQz5GQ2sgdJY95w1jPyzmKtTRTPYcG8jjUnAwYuw4zjgbsnx4d2oTbPzCG4W5nTDUJS6haAwS6mtWFXtngiei",
  "key27": "asEu5MAy5MSmmmntSEYcBW352uYjGUtY69CMqSdnqCtkwdPidGYY4xD1Bhb9orYtS2SoRi7etVLANeAk1LAQuV1",
  "key28": "5MRmJeZJ5JW4vKRLTSu1fKoZFiXpB7sFsXt7hPXrYUNqN8H2H9LZgoRQXrP6esQYntLz5Nc6q4EtCVyxpbN9c72k",
  "key29": "vPgXVkGauS46yzCgU1hZQzn1gt8EPZnNHk7tVXoHgzjVBssxCfnNMZAkdMFhBMdfJAamBNbmkXXi1SPp5swYAx1",
  "key30": "AENEBZFD3Z323YCXa7byJMNYfJ9kDncp553f5bVWUd4ecxRa2kvEW3ZZ7m1XwZTZcXP9wmbmfiT9V32CsqAJPVA",
  "key31": "4b1MBdbHyfuzTPahnVsqnP55RTe5nTty1po5zchkMrsFrXrvRgUkJS438S7qPrsSnxxDb4JaNRokcwHAWKvgSwYR",
  "key32": "4FeDbr6oHZk37MUg5J33n3DAfXv6yVpuahnp8GoGhjY1URN4TdirJFuG8krcpU6ZMzXGG5VTLg6iNDr6xj2MYRFW",
  "key33": "2d8zwW2zcoE2TXtAEUcDDPmLR2Qor3A5AHnqM4LSknXwnHCDbWAXi7gd8UKDQyMBk95eSECK2WotVUzbf447tRfX",
  "key34": "4sA78FxMJDjmbiukD6BacCcwxZMrJKgmRM5pQYqTkSAqJLNfp8LkfyGDS9Q5M8dKcWWyFT9b8G1mVeUoBxN92vY4",
  "key35": "3QyHy2XcTnpkC6Y8tZMfk88rz5tWCardnZG1pD4KuMc27xz4eVDLUzRJckYEqAHcAs51f19gV2BGYHNzcv4CsEfz",
  "key36": "DFzzuep3DNKTopo7mopG3SrGa8afWGcUshBmh2yFbERje1qbyJSXQJD8xJeBar5bdaYDwS7G4b25QRYC6sCfBDb",
  "key37": "vfBWDWJh2AtWRuhkUGYjoRPK3W2xxwQc1c7HczcCpHSes6boVyHjMTq2pkPLk22zroNzk5bQ7kjrYyRxQXp9xAK",
  "key38": "3p8PP9BYDR4ZDrQQu1ye298zqBCZzMubLf8hfq1WkWKCJexPuqaXpKFMgJZhwdWcPLyKAgFzkoNY8NRtCWdRiNg7",
  "key39": "3gixDENdXQMMgnsUAjnTpD4yLxQaeULq3Q3i1fCzu67ByN1PSwgSdfcodyu3b4NvqVutMwM2soUpib94MzNvCNPQ",
  "key40": "4heNoHE3Q5yha7JnhUUHJdzkhA7K5ZLTpxhd4UkUWW2VCCL9yGbKdnt5BsfG2Cq9RWXjvirDsrMvNXoWMChmkGV4",
  "key41": "54qhq4NErtdTtJxsLRZSVU8MFp4ckvWruqzXjP4UfSJUmFB1mXNRN3jZPPc3xEGpmZs42BuLs714A9S2tKc9f6pc",
  "key42": "4RGAxVihXprrXfgBtkQvhUHKMHBX1jRp6EsLX7LfrFta5Hef9khhngZYU1o6oBF8N75Jh5q2TdS122Kan3kNBLBM",
  "key43": "3fKhPAVSgFNuJ1hCASbBUpLY4k6FvDuQ8xqPafFEkJB1gwB5VQacBt6MM6nH6DCxYPhE1vGEm12gPLfGG7iQY6js"
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
