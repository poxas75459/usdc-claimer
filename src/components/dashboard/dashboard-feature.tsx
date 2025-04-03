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
    "4dkkXAzS27iJPUV7YpxuzrSiAwLDcEgxpDnQQjzkaYCojyADTPaHpyLExYe2M5mBgLTEWbLiwQ9sFoJ7peNTrxzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Phhkzt6F5js2VX8QaxTJScCzhXi4kjueWDvAENJ7bHHB6yYXa2SPNHsjatVJoAJXPCFxfZHP1LfAfxkpWMwMPU",
  "key1": "3qyPKbJCAzpra5K3dQMgo4Cp6AU8rkWS8RKgJXfdCQDGyDoagoy2ufyrBS3w57TUDrbs7gQiU2XpJV8C6cZrNNNP",
  "key2": "4Sm2M5hYVfYtJM24ZQZYYkcSG3oczVf6ErkZM5JRSDDDXib6EiXwckYP6MNQ4grNgJ9yicxEobfYv7v7EsnwMiYK",
  "key3": "2bcbp7GMhPnsuZruGr7hrvmmDYRqJxAtntD5rkXuaFXQpddBcEsSRqfQUqKccNq9PstSRLnNPmd2sqGCy39siNeN",
  "key4": "2EyQBMsT14ySrmxwvd1hdmG7LryK9aXGJKZsDGCo59rPp6TmpBJwbN4aTDNQ5fnKTfE3YcghUSY2YUyd5ZiFE8cP",
  "key5": "45yHg9yqmSXLgh7EhowKQv1UtuogeizvJEb1JBD2dqZddm78fuKyXFazzCFKM3z23pMoXupSug7YYrnbyPhwVbAS",
  "key6": "vPMyvEJdmGWP5QJ1bFyHe3RFLF1eBoPdRebq1XS25WB36WuqVGWcyr8UwqAjQSJ9zJq9VgcSZHCwFNfeMwm1Jy5",
  "key7": "2UXMzcS5wzSdD83gbGLTt6Z5gUpLB9iL4HcdjsY1XPvqD4tbev9HjjVERGphEcmCvPxKdAXgi3juYWpuGKzJBPsR",
  "key8": "5DAurJP8wn89JmrsMdp5SpCxkuSvewNbZdDfydogjye58zouXSrkdbjnmyHPbMd3BJDcxD13rCkJb3guswbMze43",
  "key9": "2scLKJ89CHCYhRC6x17RDR6vARkwwW46HmkJU3fJWBFKdbM2nVJHGea56FjmG2c2U9Ut3MVwaoQ41DsNC5faRH7B",
  "key10": "2YMsaotpAcAfnL2CQQDcY1wh4S24kg3LR3SoXt4HLDFB7vFPVCTQgtQwm2TGMb1JmTVmvLETWKxvq7bd9VMT6D51",
  "key11": "4CYv7tWhgsdZ1sWyFDSeYorX3BW8Bs7bPr2zgRGJrMMRx1CMDfUQHsBY6YQUEb4rHzqTo2EbBvod4Yv9wnPibHJ4",
  "key12": "M28rHUhoZS47p4ubPSFb4dXFo7x4VXVpSssPu5vNP4S598KDFeMbTsQnxzuUyBBPJH5Mttgu4zpze2Rz9eFHfS9",
  "key13": "XnrBaXA7ByfhqkMxr5hwJ7iuVQMfvrx6fxKahiDP1ser5piCzrbo1oqefAKoBvoJtAej8ipDWcgWEyo9Gp5qgbx",
  "key14": "qNVbdEiZUEziBDDFBrHvye4gy9BMPbMsdRGYnu92LgvmBZVJC4ZmFEjdvpkoqGTU9kT7U8YJv1zoBnbNfy1uY6Y",
  "key15": "3X345kSRofBaRD9n8x5jo5CMT1gQsjCenj4iNzsaASoFEra4EqPbn93cvj3UKerYciYqQv5yCJmXq7NtgWXbvikE",
  "key16": "pq4LR4rR3KmaBt84QtZWNw8MTAVVV3HfF7vouRiDEpdMCCwg1TTdCPQnDtgqJuojnTZTL6TSxPr7knuVdxyjDbw",
  "key17": "jCy1eBnmeHLDayf6R2TWk8e9wxgqSv623LUm84CNma52h5UwKp2F2VGPxmCWEybgycQke9tSNJ3MMGnKvbANgnG",
  "key18": "2V8LQoQNnK7sFWDPCHjVM2oyuUsuo6S7qBwq5ALWArXKVtss8Vs1SK3ckFGFnvdWTx7iRBbgojmM8jT6W56U3Aof",
  "key19": "5FKq9mAYeAUi4yDve944nuJ638XffFPTb73dRTUBspjcM9VtNAdiESktLhhrCYFotUTtVkdrE7D8UvSQsa28pUZm",
  "key20": "29nQrpENc6s4pBNZYQDdu4yHjSFognVd2UmKCT7y3PmEBm5rdFCKzXsRnt5kmiPs5jJFpD458fhHWKDEmj3HkDyp",
  "key21": "5wWGYmNSGZBMzn2bkCaDGKTzGGPTJrTBA2GdJkngJhwQ1MDvFjqESBTWxYQuiauakAaC4xUnbegjGw8p4h85Egoy",
  "key22": "8mVh5oQeqiqB8ArpNJfpvpqwnyoas8QT4gr3AofggxkbF8Q84Axu7h4T9KRFP57ZyejRiizvtSzZLwirY5jVqBh",
  "key23": "3UHKPkoAbRzpbs3UiqN387ALTnHRDHXkMjPqjFhJsgWm76CZvUNL6mHQTt6gJiTgcVaLy7mbJgVHiBkrwPjtbUho",
  "key24": "1VaBis94dYD6Qot4NWQW2iU6t8veHxCJ4ywYUosknyrpgPVeK7f2wX982qVHcF16DRwnJaPuDvKNYdqNxr5C47W",
  "key25": "63adNpA6d8tdRNUFgzsBi2RDzdVBeHMmxXNvuKBKut5BYfpEn82ut6MafSGPEeZMgTnAzTWEvKXsJFnvN3ze2Ux7",
  "key26": "9ybYQcmSn72Qyo6rZusiqLpSeFaojUhagV1VT8EMicLRjuSafRjGdGizgn6EhCQiYstzuohMCh5SBtYGFPJyhYy",
  "key27": "opDZtaoWPARUaU2u1tqu7B1kWce3xmQf4T5bXUr9wBE3msdQx7VPgSS7Ta4RyzV7BVPDusq1za5QEUV4Q1zAfxG",
  "key28": "3bEiTfEK5dchNGF2jsrC4JZEHWxf3pbjpch9BwUGvqKuQaUinLYYEsSmtDGq1wK2t3tFg6j8upxL4Ma9VH2jrUnt",
  "key29": "2LC8tbqwVCHRs8KaLnRCJZRHUQT2kUyHkm4ArnzWZj4WF2aYRyqLf8aSB89um783EzRCGHqMPSSGwqhjPxz79eVC",
  "key30": "ATZy9BwT6MWJXPJLmZKPtuvJcCWpcE2cR2tjQ167upn6oWSauNQ3EAuiTo55ecR4Gjk4MRaQTQpuFa7xx5GH8Y1",
  "key31": "3pPHUksEcqsskvYUSGJzuwLRqTd61r84hrTjyJ6qHfkTEhniNs3Kw4pJdbUta4EYeM7fhBMoQ44W37bqPnTQptTR"
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
