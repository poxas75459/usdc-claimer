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
    "4z6wnBsS7jYFP242pdZWaRd2hSbNPQmUjsZ3SFqkREHzVXdTCihpsUBM249tMzYYgrgdgYhnNsA2ZDyiTkoPgvNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38XxY9JJbeQqQvuUrsPH5HrVxqfvuVgkp2DanPLwD4cKNdPrFn2LSAxM272v3GUCV5HUvADWqgSgT3ngtrX3wCUQ",
  "key1": "5RgK28mmaQ4nQDZrCyDqBCQ4QP9SHHh8QNf49TK9UJHXmLPRFwUFfmvGBdexTooDEYYvqAPEmv7VBdhbvCznuzaG",
  "key2": "3bgufVKoMEWeNiv7CvaqAi7aUCVdAxoAv19VJNTGZkU1WuNEVQvU1K7pb2N7A1NeW2VwoaYxeUXn4HTEW8LYBk6W",
  "key3": "2zo2AS8ayajuyFymvyp9gCtWtoiEUi97ASBsj6vPdjWKSMLZoU13r548B8SzKpMkRNqhX67SJ1EQP7ECgHWxq3sS",
  "key4": "5PwPHvGwa4a9NTto9nbUW4C6VPNdfEfnnxMnEwgjxiRvsvbrFzDrRwd3K8aNxHHc922rDtQYTYqRh597yhaXsdKK",
  "key5": "2AMpiYqayYP2H8cnpTeXYqwMvFJq8W1rEJvoEvVn8fBMphJREoC9W681RCd4uTrQDyCKiWtcQcSE9uvdqRJEQFAn",
  "key6": "518ExLxQQ9pKSmPTe1ZD6C4K3H7tzfAtgNsdNVyZyhtCoechuG367GDYcFynXLGfQBo9wqumkQT7drPFkEkwEAb9",
  "key7": "4hcpu8UZ9puDxuoE27WBD9VC9Rq4tuRD42nr2v4wQAzbB11JkhTbS2EiozG2WSS6ZFMXrB1jd9FKmzrA9DS4Fb3a",
  "key8": "3xneWLSH8nLzVLJuS4d71bDWNouVg6opxgGxYKUPQNRqXKvfsh6Xc7f6TsbqMv5tqhJMztSt4W2S2QWsmKQ7oKhz",
  "key9": "ZZgpEwhptTTHkH9Q1rgzg8HLgwrnXAxanef5qdi5DUqjiH2du1wEe6XcpWKD3XmLNqgtBrEq5wUhJZWwpe513iS",
  "key10": "4bwfqardgLf9PN4jEsYWXi9ZZT5JF5DCwx6Ryt2bJ147WgN7cNaNoxW2kbeNe9GHyw64Ju64TGwm43Df4hmGSz4j",
  "key11": "FeHPUchN7uoegHQZPCth36oQXecMgY4HpkAACGEsUbHFiuvjTb2ePQYrq2TM2GyBcokUGMwQ4VW2V7EnPfMRhbR",
  "key12": "6R8tYmCGTB6ftxVWHjxjAWGP74iM57BrXhz4PVcep3GDzKE59s9S3UnUeGY8BtxY2rUgTa4PbDsCWQtSfoqFknc",
  "key13": "3dkWJGZjyvr6CK7hvRB4iU3k6yrL2PBVHvSk442dYXiUtrHyW8NJTEyUHxTVotr4JQr8sRDhCo5iKfGA46uMktdL",
  "key14": "2sdcHzRacHhtdb3gvQk2QKq2KCDy4CHzngx1KFmFA47Txbkw4gTDSK1DBwa6TTGrdZ2XiYFk4EVDzSucQXQ7dkFf",
  "key15": "65aQaRosD2xUQebsz3PDfRk9rBT7F2NzUr6Qc8eNtRvnibMPrNVkT6rHPcC1EgvuWXeXy1r9ywaUe7ArY4H5pdVz",
  "key16": "3tJ8YH8PRPPbmJaAKVZeqwHdrWopprNWLmSYTChTieqTRYEZyGFQLThbQsE1r44wPgAQWTAJ8Do5YvwRTTgYS7hR",
  "key17": "4ykC2o7Hzixi2fT4aKzjESoNGKHagdV68mVk9EbWxpAWhj87zU5KydSoCXqySMcJPc4EsWvrAHz7ExPKGRh8D32V",
  "key18": "5nqZPBpuKJg89f3MX7nvf9jXqci1Stee4mdtkFVYHAt236Duuo2hAku9aVTNLsk8X9FbzHtwdrrXF4qHvyWrheiS",
  "key19": "jCiWQPSdKNkDCsRXSyPy4jNXEpW7qr8uVE9xLHdEVBaKTA25AwP3PPgiYrrhG2dxzCr4QiqNy6jHBANthtf9RhY",
  "key20": "5ZZuDDcGayDVJHsbfBTSWeVCyWqXRU9EXSms1dShNAqCqXUSc1P2HUDacK1pEH8twkCq2bC55RSrJ5V7CiGgbjbE",
  "key21": "4nESNWdpPpNrP9XeKRxhaj1KFCv15MsLKwNHWBSZnHENttjgrDv7cdiiCqyTdPhxjHx5sZvLkiTFHAskcff6Dvz",
  "key22": "rQc8VPMTvBdKgnh2f2L4JQFEuc5rXM4a9tAV5CFoCWY3erppzogCb5hTMb2iuGDyzeB8b7R6eiuKtmSgLeNnGig",
  "key23": "2uvVQ4KUEgGJ7aCTPvWBtaSkRxWfdhZZ1FbmtDwxKXXkJAQwhZhfRDQPucJgb7TmgGuJSAwrfwdE8ZQiq9dxbSFN",
  "key24": "52nk1dguu99QRfXYXwz5fReoV3ATSAekVTfDUhHCw56HX8n7om71YzHCiPKAikrb9As1UZ9e7Q85BzChEUikEGy9",
  "key25": "3XV7yDEaJNYgpsVyEgtpEzBpp2B9B7BUB3UMDgsdmrFHcbszF6bYA9U8oy74QNpsoYdm5PKu42eobcX1ThU5qkSC",
  "key26": "66wsoBCjprDVLLFAtWPvGnYVe2u6YzgNrrJsPWxFyU7tno4PD7apEg3deSqmFzWQAPvd5GfnKB3PV6VU2pQjiQKZ",
  "key27": "626aC9wjJ12fG5KBti9n1aTPs4u2wMbpvAR6Mw6KzGwPartXz4pAxXZ8K2vRt2Y2YQPzfssfqJqXtWZw8dNeqhaM"
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
