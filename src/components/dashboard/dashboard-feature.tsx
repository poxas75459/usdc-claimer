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
    "5XMoNFs8j5pV2Y3H1KKxfsrbomLwz8DhMfVVLTaBv4YGCfbnDidoPcfSQ4f9wX1HEKmarMCoEtgkc7EQy25oTkte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38gFWELZcsoF6BM1sDrqwGxbmD4xyMv1ELwJwheFywpEUbBh5RM9BNxWyxpLrZ3hjfMDa7JwvKneWuCzrZLGZaBs",
  "key1": "GJ6niMNtZ1VRxMKb3c4x9PF2aB2aTEEN9Y8rF4ZxGaC9fFWucU3XhS4R1pCvWNsUtQCw5GnSUoehRxgxuNbS8vB",
  "key2": "2UdDqtzkfznjLkMC2quwLo1bnWLUQLRhDtuPet5GbZnePw9dx6vPmfiqeJCWsGgFDJUojCgmo6T8SwB6FJ5AcJDf",
  "key3": "2rptLNP2ynmhnBzczhFtGaQhEyEGy2E8fARM9b1YS2e69XyPwakehFhoAW1kawhEeuJfEL9sBH7Bk6GT1gPHHrPc",
  "key4": "3yNg4UsbFLbfpyGqjX9Qfmg255z9s6t5XhAFXuF249itZEXvFQARRB8wFtcjBzKb2sqSBAtDw1EczUkJRi6jpWo1",
  "key5": "4Bi27HaxnH6kLakwdjUTatNtynwnqpbwEnGPHHQwyTA2TVhLVr4a2eedXWTzcixiVKwK3AwxZ1sMwYdABWeSYRym",
  "key6": "41BkLYPAh5ybYYkhQ8z5cE5Wex6CvuxwXEHznK8etryHbcR4o7QX1Ku8M52rt8haCP6PXDQPHpEvoSmwbMQmmciL",
  "key7": "2dhGiLSkGzioX93GVrLEXM3EXta5TF4PVACSeNMQCDsBkL85sqzYLq2L4Wg7WZDDPqLKqJVMtfDWRAbwVpNPVnum",
  "key8": "5XDbEyeZY2uGj2xmwPhVQsSUUmp3Zd99Kiw88TN1SbGtniDp5EATz9wwgWjp2DuVspXerG3bNRzNZi85Dg2NyBid",
  "key9": "4c2GYSFk9Er6CxcDZh8TYzQqZcngusgrW3GGTYtJmgJmYhA75bwgjPSjSXFMoiaXp7ZviBvgz3vH8ccnEWEWLdoz",
  "key10": "pyRJfEGnMKt92UziQbyaXyEtSDrsKpxCvHUBSFVu6xgCkPqL2py64915mE7z8RqYzmnNMUFvqYd3cbpGuyBaeFk",
  "key11": "2gkhU1rEKSRR51HR3DrMXXEw5eNGMUGSbuqoTPCsv7PjTarfHzRyaz43abjUq5hGJZdKHNMg1hKwBfqMAi716Rc3",
  "key12": "LVK83XHCs3G52UjnTCGLcSCZWNKQYcobfuK2nj4sUAfkXo5NUCM76iGWFKz9QmTAT5p8nZ46sfyWLbXqQWHorNV",
  "key13": "3BX7xPhar8UyXUd6VNZSPugWEUwVpb6gk1u3U1cmfdZVuG5aKTF7MHVbnjniqtww4XVJyVQGn8koR8rAZY31HWoB",
  "key14": "3phWAiCq9QqXYag7SbG36VyvdBQjPz4CRFfJRiTskNKWMaeaPufjwiNsvc6PBtDtDBxWbxjy9XQccXU7oBcKwyog",
  "key15": "3g1B4UPg6eprx9r9GjSwsng5g1eRvo5u5PGvnKZMGA1QjdVs95f4hxYnvLBwCaCkBAkoKiP1G2Lh2sqRk5TrdsmR",
  "key16": "3zULBbJvHehBwgMaHi3QhwtooPM1orvt9R7ozP36zaHzSwJhAMgFkcpitjYfMihixuh3Zy1gHVNdV2sooNMZsgQd",
  "key17": "4KTJ9K6NTEXRwzXkXCfy8aHQ3BQnbCuWu3zYJdeVqN5BeZqKetfk3LknNhAWBmeegUUbRwWXq3fwDWbdBwbxJ5yp",
  "key18": "5AS8xV3J8mCKgYVEjnSmfqUKU1HnszCUXvBT18WizzPVQX4rqKdhtTCff7yN2pv92KcAej9NjaB7hdQfPsUUgJpM",
  "key19": "2jLeMSXLR4VtYDwvfHCU4PRHoJgGEcfSq7nt3XTKb7REjS1HsSFHPQpGk1je45bpt5E8CRSR77hpDy83S9KjfTz4",
  "key20": "2oFphSQ1zADLGdmizjzHLm2Rmxryq3jR2Ek4nzS8NFodXkKB3Aoxa2S8r647tcjwnLsR2stkDk3TfChWNMo6z1av",
  "key21": "5ePcXmrX3jYMefojMFS2xbn4hMVJxNFe9CfxwSA4Q9NFMM9Uk26jYEFVnSwdKDY4sFXfbjZggN9NMxFCGnC1UMJn",
  "key22": "ygp7EYJSm4e2ms9k3nuk66NSCTpjehGbffdwz5JERjyu4P9HjLa1VU9hxLftrF68kuVaicmSpRxGT3r7qBtTjJV",
  "key23": "4fF5Fk9mutWfwvHG2nSEtwkCXLVviyYohUYRVE3A54vWkqfF7iZ16GwMmYw61BPo5GDgTM67EFtkf58x6R7dK5Ry",
  "key24": "VD3pr1SFU9Vw6ppjFmyeSr4fFRrYbCyZsxPe3Axfjaae3p9ET9u2PzQAb1oLpPomLjAwDFsL7iF9sztQGH6DiRS",
  "key25": "4Rh8VdcEdX8SDfETkFZwdCzZJpGTC9YhDwC7fwqRmestqB1TGK9YMuyCNSVW18CNuibDVZ9p4Z2k635x14zkzdwE",
  "key26": "4jf4isJ32CF11zucd6xBKRkdQBUaWX8hnZsiR89U5peWjYh1EVn5gsXTSKcPXfB5DMnnoh7dtadABYUBvhjNXmV",
  "key27": "3HQoSLWvqk1wK4YkXNZQdNHdVChuSdiPExVCUEQBNF52Z6z4wgTXWcJt26Hn8rpmFyfwNHAUSS9VzVAYDetqixYc",
  "key28": "WciENmhrS28z4JjzYUBrVQb4tkkXGLq7xt2r44sbwB2y96LevMHyW9hYHdMx7QiMbneQ8omB4iY29BAqhnzVMWW",
  "key29": "26rWq8iSM25594UUAJ9ocnCrs6V37w4X7gLVkXnxjswhGnoPAbyFwKeyLVmMzHNc3b5hMLXME6c6NWRAUgr4UGN1",
  "key30": "298KJAiQ13RGjwLv644AZYx7hoLV3wnza3DTwPWxbhmyqGDuDnNJxSWqAx9eSJxde1azh3Cr2PLaYMowhekGsF7p",
  "key31": "5Ud1MM3UX2C8GHYHzk5Ha3JqW8TxhXU6VtmhUwNj1jj4WZNAdmNBeQrkgyH9B4LeSJcpVFDxz5YkGPMopEDSrKZw",
  "key32": "48A3gLb9PjmFcKaJpAtHT79W9GiQZSyUbLTDuYRjKNL7dtjEMo8rF2xjgJZ4Rr45EBTfPgbyZe9CCb6Z6WAwEBtz",
  "key33": "4aF49L3UuvXtGZFgevsgCpvSu71dp4jvEFskcN4zW7dewroR6gfVDwRQmZEdwvGQWE1Qxd8HBdiaZqot1EZr7FBX",
  "key34": "47WBxRxbQX4RqoLaZLahLui3p7M54Qj8hqqhbJstWJbuNFCHBgUfGRNGJw4N5kVg2XjZzFKH8T9WxwdQ62QCVJ9m",
  "key35": "61BG1jyxXdreSKAoaDZi2r4sxvmjNgvXuFAymZEq4oQZ12TrzwAichF3K5pThux7hYupWEgHYXLSPw4NwZEmUFj4",
  "key36": "5qTHDXJFmz8McF5agFy178uc9MT2N5xBZxFiZSmerbmnFszEEw4Q4cho2bed1GbdEDAij5C6FZo7j1rWRwf5Yenp",
  "key37": "3rbZSkK7uDzTUyx6zGMcWWaDxyumKGY9UcmWv88Mh7jATHjfFwqddWnwyh967Uk4WSkUqYLBjzFSZv54X8rPhVhW",
  "key38": "2RwsEaamQyEcUtvsbgF1yV72NC6T2hzfK62FDNxTmMGipCHePiLGChdDY7Mk8ap1WjYiYyxTcm9sv9wNeRxqzZkv",
  "key39": "i2HvUnMXgP3sGQEmwuot7iFsTYwQsCARAkaCYij9vFFm2EW9HDdkTQu9CxhNpZcvhe3y72eYSkuSiohCFE5y9js",
  "key40": "5YCzdPYNPVYK4DVM22WMY1AExVHkQqd3WETfsJvs2fgxUBouoiqeFkmB2fTU8HbiqohSB6gsUwwoYANE9uro8q3q",
  "key41": "6awjpw2DzzCEHJNLcN5dhRJVjmjQkEaw6wGkGmZAcLrkjdg9m58LtUg236DzRPTQo89Pjpk9JiZaHHNUtcZPN9C",
  "key42": "TvxSqqXZ5KyKvjKfAxz8KD42rWJA46eCDy8q2uLnpTJHwRbMMobqjgDcJFGo3ky7FGUukHeyq7aGL1r1VhzLbhk",
  "key43": "2CwQJiv4tiyEqFpQsaxzm8chJFMRQ4Evga6qz27jecMrVrJRi5Y8Mw1cuUSFJYw8exGoHp2c4Kqm1YbPo5UcDXgV",
  "key44": "4AW9rcmfmCDKzJmLCmfTbPb9bwZXvgv9ybXw1MdyK12XGHto3KoisKauVnyZvQ4vfu1S4CS4RZHf4iMrA4MmqsTn"
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
