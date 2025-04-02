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
    "YAmrZK8SS7nd8e8qhZcoRKFXYFfKSJTE79pJARvRayAuqT152PWEMSZqTFSrexrbMdt62mmt5gFyhrqdmea8QTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yLJDDCdN5w7w4uk3uSB6V7qkiHwCzR5ifgYZKeZqmjqkoT9Vzq9SKNaBUVmCMYXZBnySJxjXwjYvrimH4paBmtz",
  "key1": "4u2KUDauxpJM1f47WJdwt9wPdWe6k86WifNwSvkpQCx7zm4ctRWG35nrsJt7M66bziSNVxSGTRMKH4Awt1wfyXWK",
  "key2": "3DqhS84XBkCtL5EXL8wLDyYYK5FV2KUPjNcGfhvwrvTruzRovoKMsiEsHDyGiB22GnwfWBWspntED3UMRoSkDzws",
  "key3": "4SkjtREWrjbbo94vb6HUVWA28LY2qeyb7xSagL8ViVrPbSP4VB7uDz6jvvtsYWcRxgS9MhxpRJFym2HxpHPZdfbF",
  "key4": "5Yq28xK5B7rA6Pb7hR4RuiSACdDMT4nj8fn1PtoN6cXguSjht9pAsjGMzXtJdZm4zo73UcqiWf5eqDGaSNrBxwC5",
  "key5": "2HJYHyubtvuQwa1zGuJ8W3yzFNo1mYfuLVRPXpMAPXui3K8iJzCktDAzw9PKLmMPnRj2PwKEtmnh3ipa74z44ah2",
  "key6": "3bQPMTKdunBajkM9LryPsRBBWKEGxcWcyYGe7VTXF2r9TGiPtsAUJELJNYjTvHwhNyjHh6K6q6Y1PvnjVyrxn1pQ",
  "key7": "5VRbmW4mVEUnvkkfHt5UVVBmEAMWC63FtdFSbJFiAsteNExzZy6XS6YjU1TFfnsppgGVyQPt5coibEeM7GCFvL4g",
  "key8": "4iCZQBcpQbcPBhmhMQhPj1CgFcjsuwXvQyzWAu2LMZPHnix9jADYPib6bpxcccWhXu5KL3DCjbhRVZTWTQdN5tue",
  "key9": "5HNMdMoe7YmiQdZqZbZWueBbnH5VLA56DXBtT1e6am3qRge1BrugqK556ryGa1gspyw7FdY3hSiRa93vqbnA4ARo",
  "key10": "5ehZW2KNSYFANR32GXtVJgL18gvUHVu6EpbvoDS5Tw4K9J9NMBStSzYXMBNWyvE1zyeeWt4uTyCj1UaBmW4L49mc",
  "key11": "4FEqtx2uUyKp8oQgYae92tLoSew2da9DvD1vXoZmFTjdCfP44DGqPVfEdFbA2HvcEgoaBMdS5FUke4xhpJJ2gw5B",
  "key12": "5ZcXH5aQMkQZHL17ZNEmCJ52hprRkV1wmficEAd9eErpcHhjrrjH3TJCwWwXvpVQ7ETkDEYcxZr5FsnEckkydPSP",
  "key13": "3hDsEFCXotW465n5yoUV2s6t9cxfnjY2WBhx6dJ4CpTfD9cQPKb5EL2jgHBgJymrDvgZRLvjST3HxokonEYVqWFt",
  "key14": "4E7fsEcYRjmxmUiKo7amg2qy8drUdgFVACdW2HPBbehNDnRW7irbhkx1srxuGFb3LHEub7NnhxWWvtiujsUkC7A1",
  "key15": "5itMZ3wciTz2fuBhPP9HcB7GY8FAXiYwKAHQEsRLdru89X7PPvMP2kB3JB1E7jePYja2ULF7qn4GWgJ9MLnW5jcv",
  "key16": "2fDCQ4VX8zs1TpYfCipEYpDCjDXZGDoQuDf3mpo6AxJHxjCmyMHFsMFtsgpCzu21bmTTVp4sHRWqiHcSom2UvD79",
  "key17": "MB8hv1QN7kacdiZukDhxYD8vRZKgb5RbvNR8KbfhHpSRhgtztcc4r9wxtnDGUWzw9LasYYGQQatkCcwB4HYXJT9",
  "key18": "2zaoXxHFa93254iGdmr8K4QhsmDkEZ2jBx2m7DhfBe1WwRZKLgu8S7GQRKPs7BNDGz8rGW48nWEwFauZ3QBhoQ1J",
  "key19": "4WzXsimts8nuQKoxGGGB9zNob4U3ja7qbqyEmYrKb4u9qErtDKTshSCWjHaw6YUfsMLdGupewgN4bJahew784rp9",
  "key20": "4o7LzpT9KmzkNVZaAFwtZSMkSfDcbND9LRt2ZzsacoYPKGd12PSbux3qXPUXfTRPzcbT7TUz2KXqhTaP4J4pEHTf",
  "key21": "3fnhuwfqRef35LuZXLw3RQXJXs3b5axk7SAZEPhmCLWfcJ4GX8MskvAimXknd3vTKSvLzJShRuafu1e1n78kXrCP",
  "key22": "3XU21JxjfMFQRzTFTLgLctFtaNYR9RdCUEA6hFFJXWjCswWwmXMCr7gcnRLiiqLqs9mBpMsyQUvEoZ8bmxrWYoyj",
  "key23": "2LvQBe41CEugRKQyA3WnDevDyKKQJG65p3iCNN6qrGrnWpNFXHuoKo5zFBreVRkELgQD5xSu9F7Vz2mSaQcUPn11",
  "key24": "RpRV6LDWXuRXFrRWJnBkg8Gy7E8G1bmvLmt7dzB6gZAnpNp3oGdmXy9mZrZGTEtzXABuQqj4HWJSDJ3XTsqnh6y",
  "key25": "2E5DHHmtpb1QhtmgCcLXUvdC1KvVBq8y91SNPPtwr8ZM7vhKvqeFUbRyStWADr3XUML6Gc9M5BGnMJzFSffcWXbe",
  "key26": "5ShccWPFemHZ4ZduZvBJET1WnUvi7TzkvwkZPVfND5Ly5X9LKxxba3nmZD81VuGeZsMH8zcusWPFHjg8WsLTxuk9",
  "key27": "2GW7cf3Q56S4Dg28kVsuDMVpjUKbH9Pne487bPfRKg9ZqY4uvVC4c2gSwRn3LDB931DqbmbCsL2PTJaLUgnD7iTq",
  "key28": "5c6AnSCGHD41tSf4U25jG3zS3qziuCv4Me49iyNCv7N1ynDdxsteFWPGgRSZHTy8uma7xscm11yFdPrVogEXP2Cq",
  "key29": "3wwEopKnC3xdzZtSej7UuMBtmBtsv8tp34WyoQk9X7F3wkuGWWkPrLVktQGt2YM2PB8uxiMxhAAEVF5KQLJ9BaVU",
  "key30": "5rCCWtccKB9MzqGG1RxDEv1dzpg8YgjdS6yzwgKhEWejBycyXFCvDTCHV47x4iCvqpnySjNXhF24TQcXveVFLTB4"
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
