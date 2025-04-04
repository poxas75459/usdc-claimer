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
    "4mBFtsutnmFD8VTxMuXNGXJRTodWHVnciV7qAwnVGUkbopsV9r3Vv9sf4a3gVYzQqknPmynJnkk1ht1BP29Mck8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2baim8kqoXLmi54C4cQv6GgYh8MpFqRbDzs3PDDvyHfWWSDv28Mzg6Y4YATaZoQkwdVg8Y9BJbWKV6DxfRnBdrYJ",
  "key1": "566hG9VMsCGWbQ26H6hGKKNZ6wxyt52r89npHuyqCMbkTveg5VVdJK5iF5q7FvpU7wZUKoivcERyEveMsxE1wTRw",
  "key2": "4Rf64Sq92g5K5q4PLKsMrG34rtQr8S8d4yXsoLP13yv12vftHXpsNxcLus7kgA3R4rCfp4MGaN8H7NNdQDh9paTf",
  "key3": "kTSgyTFxXguDUEbbqcAcqjSgk8ySt9XjkReiuRan3dqJbYcSnYvL8qFiTLQdf7LkRgr8inZnLUKaEX6icg5FEFy",
  "key4": "3pct4MhQtw43YRirnR5o7BS8oRic6YenJewfSfVqZnCpsiLrce28d3KRxaXwqLqPk1MNGBcVYLAamsunshaUaFBC",
  "key5": "4VfNJDs1XbzWcmqpaXHgebRaTPS9Epu8LKitR9kK3iKdSihg1t2pkdjgjpV2rV9otmMxnW3U7D8Kqfmd2hKjPcqZ",
  "key6": "4hDr6DzBVBjfF9BD8kc84ebTMncv6fBS4tMXTTNs9956omr5aWvkEKh16toh4ypVemDGe7cKHSBkXsM5k1UaCmtp",
  "key7": "58QkB4C2bZY2Ly6NHaTnLGMJWZq6hvDn7GrLQboFPKKT1HFe13Z8CjJrbok3oURUya2dwWtnG24vhY8bFdTeZLZx",
  "key8": "3tNZBZAAz2qxycXuA2vJnDNq2Y32YbALdhrsM2DaUwjsmzQFg3aen9AKV3rY6Z7rftbRJ2ZLCw6zmQfLRvZN1orb",
  "key9": "2wv6eDhZo74YJkCNCT1dSujeMKWtBChqm7dEcEpuDPnddpb6S7m2pqXuzjM2fo3UQHsz8Bdtegdjm6NgUs5nVbLX",
  "key10": "324rtqBZ6QXvAj5SYFPc1abhUCR7CVqaEdh9aNNXjdyncyv2ypnSQQVXRHqA4bnbmoavPaHx2dN8Abumes9m74PM",
  "key11": "5cTNxxS5NRF6ibyQtXwBxx8fcJSh7GRSq6acPRMiWFU2xtKxYMK4XNyiY81A2sch4vACmWuy2rs6zKLuDzQtkQhY",
  "key12": "2JULEBtc2iCbMDs5FRnvZ2cWnWuX5VKhsqc5baz8831p4apmcB2AiwYMTHVy7nRtFnyw4FZwgwxXWA4NVXaaMAaB",
  "key13": "3D1zKR4sJKJLxid2xFPGq3kyhZuWefbcnVf4BnQqJo3f4TMa1L73XKpwxuFSr2zV93ZL7f3fop22ipvVJxooXwsY",
  "key14": "5Sfz4t76UjipRKefA6hyJweojBw58LfPEJgxoQFkuea8kuEpdQ5NghgBN9q892mxZdYPS1iCM1tVQJ3e54SgS8EL",
  "key15": "2uBHKvoMWxZh1XvKKHNBXK1MwvuNwjPNAF9h8JcoeUq3azYghQi7HPaNtE7J6wS3GRu7PmjcHr1PGirtA9cscDsu",
  "key16": "37AFL16w33ZofSnQYVzvf8sw6eMnomSh1e2ygS4ZEAPsRTxnKgN9jpRNp4qFW1xBJHWHafneaD11E2mLRFpssek8",
  "key17": "3dKi5YCDT94KECt5Hk27D9Wd6p66a6jmHh9oa5d89vyyGHpimkQeKya2Wysw3zsQWKEk8TAXg6tfHUJz4R45War8",
  "key18": "AksS3fzj8eksFAymtvxB2HQcCTWkmk1fgWMMNWByKpMywcpJ7aVsJqjBRTEv4XseNNhwVqUMjuiBhCUSV5d6pcs",
  "key19": "3NMdjq7Rt24U2pXpc27fQ9pFhUsJTrXJ7GffQYZsTqGs1FjF8hmXoUu44njuPipEErGHqKJEZSigBUwKMtZQXGcY",
  "key20": "4FLmKhXQyUfh738WMN2uLhgsaacFUj6bsnkBCC3h66EuttjWnjsuReCif7shSoSNpcLLwhMULHhgY1nakEivvC17",
  "key21": "5J6SSkQVYc6msEBZ2Ga3GPuMozmGnrmkvUU7zJ45wtaHa7wFZLpC3Jyui9kJUhjNwuprYL3HLWFtSJnQ7ztQ7wLn",
  "key22": "3MaUyFeY3NaRTeBp4JhzDUSC4VAEUNxRJyWEdWXthtXnoodjJqTzAosiNgK1y5kNg4578pJGsKMyczHJYqGo62Ky",
  "key23": "2moF3LyDDt6ZaJWfvDZ692Ct8trPdsyxMfnm4XDFkht4UQR9J1NPJsNpFLpAy7DZaXg4kY5g4NLvKbbipATyp8Fy",
  "key24": "21mVWwUdbygbSThbB4AjBwMjD1uG9XdiMpNyVDgQa5mzY1estDGaS3EJft8cnc8bqZBZBA9xKUTAYUwut2sq3MAN",
  "key25": "3BYGsfRRbDHsqoy8mu2L3axnDCksFzgHbFhGE3VhDrTphUAiWcSSuTsw7dJ9qFApSF5h8Q34tdp11kVLBSBQPg1q",
  "key26": "2EXMZBPu5QytpXsB2yKLDTpcqHiXHUUMMq5FS7iE3egKPo6WFmneMDFyvs6MgJHcMFV3KvwnVCkoqDqXLgpuqYaE",
  "key27": "22kDBDopEtQYmzu9bTZPj4Sm3eQfagmxnxgJZQYgx8Ymb81gTPXBBS8w3hgBrM49VJyT7kQ75ijhywxfDrt2t3Wb",
  "key28": "LnXxQzCF14HomLrLmT3MVFReM1NycZEyix3Rxqyr4LUQCbkmLYUnahKtZnipV2UAJgpwetC8yWsHNQVHEJLogzq",
  "key29": "TX5RaYJveMjRGUefcHnMSWoZRqXWTheuRVZeYqzmB3QrF2jLRE8dUgYAcGRb9o5BwiNa5TU34VSrsRmMAHdY98X",
  "key30": "2ddzcAenc1YwUBrbZFC8CZm1XqtaVwnBJinWERosyzV8hUMC4mXiZnGEkfVQpMhdToRshggVz66rBYq6gGVBahdC",
  "key31": "59zHD7bBpLxEsLf73QcADyZ5t8BCvBwPaQ5xgoo2Pu9GxP2sMB1NorvTDv38kqfhnAVjoUQL5hmC4rZeoxECb8fn",
  "key32": "QLqvpkMFQMoCdMmg6nfHQ5hSgdGs7WKYqvYTNJg66ApJaHf9z6rBfsybBij2qQgeJpUzWKJtovcKr3DTyrLMLgS"
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
