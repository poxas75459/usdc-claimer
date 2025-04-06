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
    "QcVastJ63LVGMweUwq4HyKrcLq59TdttEVbx3gosknNFHRkyVwAvaoW1SZQcbABorzgR8f614wY4wFCs97PQr6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uaTzZpJdpANxkcgYYUB2ydgDDej1u9sFFZAtoAzGN2s1yeWUNf9ns8aT5B9E2hWWpKLXVizT7ew3d1sDztjWtrQ",
  "key1": "33HvZz422J1n9Syth1AgAFziJUmq4jxSRNfUMtCYezWzA8xz9z5roQ94wHzSR2YM641DsYzBwzV4gSW3Zm76Comf",
  "key2": "5TGkPPxxVicDMVvHaKEm4wTjr1vBebPCRPoyUedBDJduqHqBtmKz3fAYSwtVryhrZezhYWF6TZJwwXBjEpV8oopk",
  "key3": "TfCTqqEGWN1Yu97e36q7P4Awtj1qGEaJdHMPbtPF8htwXkMMJbxq8dM93T4GoTxzZuJbmSgucGTThm3yvFAThyW",
  "key4": "4H8MgEvMqob3Qb9s91VhhkzNpf1hhyGoAPnahgjYaTMagvj7VgtSSt1KPQbjMZnzm7XheXwc4h8xqusswX9i4ATq",
  "key5": "3AnoaSRt1cdr24Y3TgjkePk2gqvZyr27oxaL5WjKdkf3cqBxQHm3UJxTYWkY5aqFuFDUCx48oWZrAa4R7SREEyKy",
  "key6": "4oPRUypuxRwHQ7isU7AXNgfP92i2KgqBMqBzs2zhZg99erAaLNJyi1eyV9zggNFtmVrpcsVxF3KNa6GHyop1S1f1",
  "key7": "46uErXcwzyfjactLBZ28sn8jfJpJcZB2qgWxUo7dgJc6XQcWHZuGxuPYJ6u6LybeLpDN5dAJkMzyEk1Dw4xXTkoZ",
  "key8": "2DtF5bAnVAMDDyQSxnMuB6yHd26hc5eesFqeGQc548U5ugH7Ac7o9N9qSNwybYaF56KWRLVgs78UWA9aMPjoibqC",
  "key9": "3Y1t7dKMNog8q5KB8LmJjJBBCmNcjatW4WhRnuek5Xnh6FqB84Z9hshGsj4sXUDdZAWyVpRpcWKtCMTFzEb5v5xB",
  "key10": "5L7GEuPty3TkZLwFLcRSohDHaDTGcm82J4nBJhCCT199hRtdmBqCpdtBzzsj3fratMGZoLBTw74uE25oLBdhZBQb",
  "key11": "2HApSDKVn6DKHSQefeBCMMT2AJn3UkBD7cQ1qbUyWfPxhdqkG6tC3i1iuB4Zksa64R4z3THqD4Gao6g1VdbxGs1T",
  "key12": "bixYjr5Wj7N4FmEHHzmz5B3zMPDDdxzJSthb2nFu8d4AyZyyxBMmwmJFNMxpvecfUKWRVXSxxrnwvo7Nxecxm5A",
  "key13": "2hBiNMi7v15wHYNXQxAWfrporbR1iZAaCDe4TiSER49V6EdFtft1ACuLiQCa5QN8evyrEtV6mZTbEgaxLytMSatH",
  "key14": "3ToWxF5Aos3Rz1V2S5jzCCEDXCdzz1h7VYAAT4nbetsVcPPnEZdNSA5NsbUEbaZWuLQHoad4TFUEN95kYXjrjDxT",
  "key15": "4CfmKevZaGmWuFKY5WpMp4bCQRwVgd8o4whBqTKxQe5tCfp8dWe7MUSqGL2oPGDn8ckfqUA2wJVkSGw1wsYnfuZE",
  "key16": "2ctdTrVNGNSBrBwF1CFvFdC8CkXH4ZLX983BMRkqLqhoff3M34QtTGQbFw5fiGfwFfo7SRKU9gaBPD8h5o7CboXf",
  "key17": "5BeGkuCNrNswhRJfDWe5MPCj2vgs5Lo2ctXzXcegJ4DgyzehcbvoYTEtvxfAP3rLckKrs2yvNtxfRw2L4TNmei29",
  "key18": "5ydbPBT9h5qoArLvb7j4LcLjUNQfdSZ4dkN7FeL1Lj3KC8u6XyLhJMXVaVttHXreGR3MAyzWzKvykREP5xGXVuhf",
  "key19": "4iMFuQDoxftLHDwYjPvm3vPQCB7g8P8RnLu6WxrZjSVJMYxCCHQVGEHhPRX1vMNL5tx4b5DAWEEens5J3eGz1kha",
  "key20": "8s1yUNjhP9dLnpqAsVyzrfbdSgfFe5AEvtKAHddeU492RG4ombuHvCFKejWhpJxP7rqUxs2S4uLCY5GJyvYHx7a",
  "key21": "4Mm9tjQneDPgXM4z4o6YJJrYYybox7oMiVtwRr4NGNSraanpjtPXphyjm4JNabiDTmYpYyLt7MCzjktWaTqGaaoH",
  "key22": "4Sw6k9E665PBrbJFFNjZ1aDU8Dgh9CLpFg45S9uCv1im6sEsoHFDvuVReJSPcehMpr32nRjMZkqhnCD673mLRHAH",
  "key23": "2FH3BsvHQkY14z7qwVzM3hAT9PyV3rdEcRcE5ThREM33HVmUnEr6JkiFRCVwBnp7ZDu7hAEZr4vTWj41zeEhdXUR",
  "key24": "25DCk4XYobt2Y4p5hoCuq6gPHMATkRtr3deRtTAgLmoqGdyzD1RtsHN1gq9DypQrYqygiuntbeE6CtFHGL4z3zzp",
  "key25": "3poPrDW62HvGFvzHstkodQubH5uNjQVFnzBGFsUE5E89gYgBG2G6Stjhqx7fiMtDMczPK9XnDRkuDe7oHGHP3ann"
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
