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
    "4eeDDyArvymDFabESJtXA8ohc4mpQPyFoLW5eAhhNerpYgyhBdDEQEC65VZhJzHQ8YBGTQiJvuJmYM1XCvUirrvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S5r9C2caZLHYGvc1PVPLsAH5NyrkWhTZ2sg94zjLSKQSfe54NBA6Myj1tpf9Xo3X3s8sE8NS2nDm2V2NsVx6Aiw",
  "key1": "58HnfigSMoP63w5FspmJtDJ3vBgykd2zAV5vqBqZ8UUtEYhxeZ44ncXyXQpD6eQME67pjhdMiZe72dkcHZBHHrGu",
  "key2": "2N3kgppNwHpM3FSCx7HA1AR2XUHW1zToZaao1thdNNAugWUQjtKc9nQeZBX3RFr317gQz3z7s76TUX4nXXdhRwb3",
  "key3": "4zDhghJemZaQRHSd5Km8hZk4YxsWLR1886r88UEXhse7jADCo1xJbjgqtoPzpUDtsD93WPqdnDBYmC6ncsmRbDMB",
  "key4": "3YTHxHF2HP3n15oA1deXQXLanUsBMdb8q3KNQPARF89Z3R51oV5V5hiTuHvv5DEjSDixU5iZSnM6kebztPKchK32",
  "key5": "44JmhM3u2wBkYeoYFH95rQQw81ex6dq9pjCGayt6z6hjLJiQi4JYYC1iBnouTMtHxN4Zd32szh3dZKWuPCoDnYmi",
  "key6": "3QJPafuL3rCodYuDxrpGqeLPHhQty57MRMqkZqocqeDcSuiAeUB4nUiReZJCfJxbdMGBegjRB7KXtCTPB4o99qPe",
  "key7": "5tCuNcVgsyRNNJoXakSrkybsgaScfMg85DU6K7hZqqZA3AcqeCifg5SmcQkcAoWyhkZq4MyddPs7gVPhdmuyTs9k",
  "key8": "56vaqE2njYnMSqswhCWViBqpyqQM6CdisKdZCBo1tAtjb7LJqr1dhC7T896pUo7F1mZh7FoaAq3XtGHyx7L3cSkS",
  "key9": "3MZjtR1nJgwpLeXXo3GRz9qD7yMm5L7krFnmke8DcEWdNUeH94DSUURha6ZsPda8QdHHPoBbPDeAsmvAuvES3Gdr",
  "key10": "3nnVye55eoJrCGB2PcUPCVmvfw4Qere4BR8BKLV7FEehrdU1H5i2pNjNFi4nrwskh3y7ZXC4wrMbEyE9zXrcmtbw",
  "key11": "3fAj2RTPNefYzbts38mPJ47jXK8FdwKCzrciZZ6X2KyW4QjFvpdibRSpmwuBUjw4FnQhCYjnfgqYmJPTAjkGfVax",
  "key12": "4MeH21ebndg63M4awjsQJT5hoV6ep6UsTvAcV1VdrSDPr3y1L9UNne6CESMbV7uXNLaBwYfEgyWeMgMxBdxuHKvg",
  "key13": "3jWUQJKsEhjBYeKnenHALGhMWxt8wvoFcgVgCBUXzxwyrg2MxtjwZSm1YxXSTpmSj5FTSS46wKB53Y5PR3dAwRTX",
  "key14": "66xZmffaRgBpxhYj5jubTfBv462Quj1DFWRGe43Wit1vwvkBoRhr5AuHC38LREGyvxTuPiPWEYp3q5gGJe4PAwkp",
  "key15": "3Jbv2TKq6h8XzD2Mr5dZBf26raaU46vCrxFE4BZ1DMTnt8MFXJGZR4L8D9XGXSqYay7EH3AyTR8iSXjMhHPd4Fcv",
  "key16": "24UQiAd6Nt9dxT1fQ3iVPDFo9CiWefsXzRSeCXmYsnnLsMN1LVSBQXw5oeWPqP5v6rYkAzbjXTjc5zv3VugPgrV8",
  "key17": "2eXxeNUpLkrkjeLLQKNqGPjxH1KXUHwhiS3UULgJKENc1yiko9q7uoZCFgrL2f8FpMShgu2cTPG3GjnbFMX2Wsqd",
  "key18": "2F4QNB96v3ThSKMAsDQtJnsocZxsGx5yDWN3WfTbXazhUuAMXu69wrNDuLjHNtEJWjejqmotpXJZHsW6w1Mn2ofo",
  "key19": "2PhUxgr1X6NgYeMLKTKUJYrpmb2C2JqJWATnNz61NW6YDKFkTmyGCpSHNs9FcbgkzGPiGr3nzRr7jrQSp7P9fEtg",
  "key20": "3piAQauYjfTj1xT7cy47rdFXf51ipWGGvrKuceuFVMU1mFBpdQRmUKK7qfpetTWkBt8CTcpj6ACLhQQGb9c5vVkJ",
  "key21": "ticHcrNN9MbvsVEyQGaM4wCebKw5MGkSghsALps9xmEAC34YGkn1SaPQVLBUDwsXuPVnAvStyMARLND835xCaLX",
  "key22": "3SCy1pvzL3PRyuu2a5XzZPyp6wt9Yi34GJKVJiBSHtfVRSbr1nCn3G3grJbjfwvrgxprdZ3Ziuw4GSUCkbUS2Lpb",
  "key23": "5Fs7QnAcRFzNuu16tQYejeAr1ZgbpVyBBVeKGtdTCwWfovWAN6TSVXCsHDpTec9E3YUU8EPnx3wxZTqTXNAPtmst",
  "key24": "31tFmMkPPTcng73vszGnWw4Ms7kvXKGjCq7Gin8veChypKFAGeheZcdYi7HCSpbXnz37vuyxtGaxtiQL4584D1E5",
  "key25": "2Z6g1kJiSNW6RzZ1C2C2g7cT1vYTeWJCgxdzNfpHUf12XSYAYzYHAZjaf6zGLRtvZdcRMzecMgmyAVuX8gbmYo4k"
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
