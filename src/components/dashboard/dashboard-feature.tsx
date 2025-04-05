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
    "SB6QHnN8usdC33eSLruLAqTfxvw7vyujfUt4BpvDtQiqt2R6djWWEuN6TGne7w49swzPjtM2o54ePoLvqbC5fnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YmsSbxzuV1va91gS6Dzq2R5sAz1zRe2qMBjVgUhQaZRjF4zzjaD3yFohb5L8zY6amnmtMjZGNsRnAVBGanYVw1N",
  "key1": "5Y5sUx3wPcL3HUVT4ofeneGtSwUeRR6b5ZxUYJwNpGovjE92CiZJD9P77aBwUyN9KWwyezPNVSxiwZseWG2bogc4",
  "key2": "3WUT89pTHJYvgMaafVWFR7dqg3fjU9n23jYdPpU2iE1zR6exs5nHz2j4oJD3zZSHXsGsAGzow73LYF486Z86itXk",
  "key3": "AEzudrdz46jt1txDfgoMqWwj5wztcV3Hfu7xqpeUxQYpDMq9a6bKP9aotF56QaHnNW2xtkALf4DDDmhXwdcCGuG",
  "key4": "4AgPNX5xYN4WZ4w6vjwvcG46N66WE3TRkin2AvQvt2dFabrvdaeNa8Uvpr9tyJtdm2HtrR9frGpfPxEatMYL6xUN",
  "key5": "4NM71KTHk3LHkWstaN9wVHtTgGiCPHSwsdT7QFPdmjHF88ZmU5oH5SJve5b2Ym7oZtEkFfdH4NcMdr1UDpduzcZw",
  "key6": "GmNEPcu2VQRQcqFyCXijZjfgJMQ5wK2k1CnZrF4QXcRfN57Fb2qik8yHUidhy32PPeE5if85QrWCzjGMEqseCcV",
  "key7": "2iGoxny9pT4u6AQkVQcLtCu31GH5mNcc3WWbKTqdeWsRoZjuUoWJCmBm1E2j2ZDAfBL5pzSh12Y9Kn2JVALbrjmj",
  "key8": "2oZYTVSjgzciQaprLPxBH78ZTK3a8nDaoHHCYMinTAnVPXbe3oVkN3riTXzByS93NaCdN5kjEbrfsHnVWPRVY6MR",
  "key9": "2vhknjbmmywRhSgxJH3mMWA4DioNiLE3u9bJJew7D9DY8nu9BpWkK3r88xMFDDzthxnZLVEPh9KZQr3rRqgoEo8E",
  "key10": "5rEKkQTXHgiMRGkFHkG1791dqD4uVzcbQ4GD4xLEN2fdf9VAogRfJ3JwzfvC3jFxuSb8hmR7ZWJPNbbdx2RatCtz",
  "key11": "5M1XBEj2HeFWCtsJpSgf5n5d6WWoRiZPTu21SRE81T79PuBUq9VRYY7EwFMmAPKPADpgmxn8gMXtCNGRigHovF1y",
  "key12": "5HGJ8ZNtkyLTgAvMJAbs2QHaYgcPbMkLPPyNKRSxzzcydSyN1AjWk9GWtD2AynsuRyDQ7Ack2J22xBVgCwgtqy5C",
  "key13": "2jJNNT5HigmJh14AFsd5yuRnn7fKiXVUfZkeqeJ1VtiNEvqUF6wi7qxnFgsMoDsSTeLoLcx5diLPFbhu2USA2DDW",
  "key14": "5H4CtcheRutVb9sMhzHhVyvCqHgTiJkNc6wgFDR14qVPirNKPwHbnxvMUidyjrKRhn5aCzmK6ffc1U7DyYSeHbQe",
  "key15": "y56cfVHjy366t1AiKpFgeAE7RFCTSe6LTqtktWREJeZsD1My5iRq8kRFyRqzduTQdpeeoocR7tKqqUsWNRjW142",
  "key16": "3m4FS6FMYimZSLeDheLvnxE7kYbZ1j3hQGumkc38MQHLQBJLqKKMMH47KUPs1c4Moo7tp2PKNtnakaXLNkiPkwe6",
  "key17": "4Nq4qjM55aH1yLamJA2c5p2A29MyjNrKeGRY6Vdgs3k6ZGo9Tp1pLJG4Pq8k7e3WYp26NW33vdiDjmeiRpM1FnNM",
  "key18": "4xnJt7ihxR4ejBxmRrNWqAV3XKKwTT75Xm4iwyg7vBdHmnRbkJWDRxw4LiL4BogvfbR9xBfEVsFMtspPFFAtJqrG",
  "key19": "42Xjh9P1d4Qi6cP9vzwEE7YwZpyYAMcwpumCm299opdjgKAUeSFq5qeEtLeb7cjrQbzrCyNHcCDYHxhi36nvybUH",
  "key20": "UeiWg9JJtT9XpnBejZmLZ3FUfgvAe24URKuKAiAXtPKDDCj1njKW4Gg7DfgXoNme9tbcH41zDKL75JvV4tzyFiJ",
  "key21": "2m3TK1YGizvwYN1x2SFsecfwGY5fjrXJcCyMfXkFYJpEpDKjkz55nbe6v13uzqBtj9XNuvPijhCNXyiHYZjngSy6",
  "key22": "2iFMLFRwCiSeZdePfaCzh1wbBYFFgkBC7QbERzjNjmhgaraXoF361WJoX5vtCcPB6EEKcZ1dXpx7obCYakQEnndY",
  "key23": "2FZtEvPhgurDHHD2cmJCRxabT9rPunfw1xbBgU5j1mh9z2gMHbcJ86tEXLv6PuQ6W3EBWJ4gPRYPv2tAuJMT13Gd",
  "key24": "2keZxEZyaycwPSy7nGeSanVbCcniS49Nr6J7RpvquRC6WYg3Pq9hd8rZqUxSJQ7WrTw4NHKwC8fbZuqQdbruGHwZ",
  "key25": "3AFPUvLw9aTPMXYAHWd7LC2WAU69MyfPAAdZAMQg2jsEwYuWLDa5pyBhDA11mcj4j8xn5UScS5frP4u56G8bKF55"
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
