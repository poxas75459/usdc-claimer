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
    "2cBJTkDJAxF6XxkZoZkCmTYjk3n2XF1AG1xMndAhsMY2MMxnLu8cRutwfr8uiMu3HzY3SpwDv1pbQkWNYE7YvQDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pdixhfFszpUjuw7BNzJD4vnFwyfxLFeooWCPhabcGR5G97rMfjhuDgumK1Y1h2xGgZYsDypz3JvkzgxHDUXz7Kq",
  "key1": "3yteU5ENq3vZPZnrV5Wyk1C9zXvu24vNGZSgv15pshQNWzpGvBVLYiFyaJ3tFTaKj2rUc6oWm7JbXcfrMXrUPxgJ",
  "key2": "zF4JXsfnL1HK7z9oHw9Ct1SzcGZgELNobyMphv8VQUUjG1FwZLuTsU4XJGV964FpXeDxsXbaBG3PH9Jxt3TZXro",
  "key3": "5Cz3XSsFvoQ5kjixvnfEET8F3zTNpHzfLi4e6eUuR2H126rpPobsZrPRxGuM2mzXa97mwEP3bD6R4H4iUsetSQD5",
  "key4": "2iZJTBdFrm8QZKTRdiKWrnP5hZCP4LiNEdxaotpsV3qB1YwPx1ZWEtYvYYdugXSttN5uwdTyCQCouLAxt7nBmsog",
  "key5": "3awVmGZuG1WDV8FJ3UEuKtkG8D31JXVrRJEuoUZMLMZesbDrNDRGevKeJKPheVmDeHf8HMgJZoV4stest9bSpm4m",
  "key6": "643Jt5HijUy7h4g6pq5QhanNuJMBU2KdyDkVaSw1q4QU3uNsALjnx1d1uqhKjbvH1Naw538GFRqGNoEH5emJxcsY",
  "key7": "67L2Hm1T1rELXc5952dGHT7L2DoyroWNxuj3ZTPW6ye2ny1qvvkwfyDGoC25QHZuJ1HrG8RgSQmk4jgttHivsdMg",
  "key8": "3xxcuuSgBaiFyemHyP7hDf9Yn73Kj4hcMYfafpnXorpMqGtXCtVedX3erfsts84Ekyzf7hUkoS47UmMXKvzYqnxx",
  "key9": "4o4GATmUb8SybkZqyNj3XueUPv2SZq8nPRxpiXf8Do4su8MSQeufNnAgFHmrfpMRijSKRi5xfCkrLeBqJhNNoDbt",
  "key10": "aVBtCisLsCyRVRSh4UnN2681jCG71es42uyij77FybJBAmqqhUnTbQ6UWwWxtfmmpgELxzqRpsJsqs2C57kRDrN",
  "key11": "tFy3CMcoxsETa5tdDMJA9r24QH33otDPGpFn8Xv1Qq5rhteo1z3eK9Xe5kW9YAUScqsRJWw99Ezmxso6bFXv6YC",
  "key12": "2nB5epufUGjSEuVxVAjCwyLUECdDWkZwLppPTZnSCWoCgpmNkAr6PpPpuM9eFp9iKtKgNLEqNdoJAZ4fHpEs3AFF",
  "key13": "26DZLgbBGnUDDrVBMRePwATbUCbo89RbdYAGWrm1q2Qv6kUNuDSCEctJdwa6UyvmGZRWqDYLckJWmEQdsQtB1Crq",
  "key14": "21JxiCz3RHJc8pkAJ4EQeGZs3xBD1CRGtQ8bBwutJYzo9mSCa8fz21sB2h7zZgDrWyV3puMGZNGs7jL46o6pYLgH",
  "key15": "2C9QDjRfuzugQTqZ7ZVvj3XPbNH1A7C7sWKTAN51NDEGsFvjWo8HCf9Y7xkuprRZ2Ne3GNTdvbVEU5YxxfbyBH43",
  "key16": "2Vjf51STtVYzcUzxQbkeh9JLZEnrfGYntZL8jGMv2aBniqJwmfGqoCqFk3RLecXFwUGE4AGtoNc2y9dicnvVezN3",
  "key17": "3dBFUbPS6ukXQCvdqWsEqVmWEzaniVTAuoC1SpL5QMmnnBZvBJKAPisHh6asgdy19fZzadpvZXPm44HWvYvFxWBE",
  "key18": "4aZRojfTHoipvj4xsr1oDjsUKsJeZxMbzFGu8GoZQipVSrEC4d68DTufDsePixjzt1UW2mpLJuUcTpPfaREbxw88",
  "key19": "ivu5H1xo78Nf28s365g1wqynbYvwqGvmwvZHkEUEX3sdoQhFKh9Dz8ADqnmrhuRcBnT6t5SwFTMRFZHECodR3qR",
  "key20": "bDkravkeeP4bE9bboYCZGiBdSfZS1Z1xLbXrYpr1DogrwUPwhazvnEmYToDtVGegQY24RTPRhDQNTaBHKMja2Xy",
  "key21": "31FVNe2bQMkqxdSipUGHvZwp7JNNvimkGzgnwggRFevxi6r7wGkG4P1fU1ZbPF8uhBsQaXTari94ZzeFbgHpkYFT",
  "key22": "3eCpcb3J4Lr33WEXJSADqf6hZ8f4GsYjTc4ZNJikppJYifE1FLCS7EpjncwyxQcBgLvWm9Su7G2oJkuRcdasrpCb",
  "key23": "2obrhUDTLBKBVNr4jABpD42Ght7aJkAJzeqTxXygpr8Utj4DmooLkD63frLrY6MQeJVY4pPGr6EU4uvYW57tqwHD",
  "key24": "2wgNt2sqU8WUhg9s9yengeQJvoiLB6ZHeJbfD1N39fH8PdLBneKKYc9hcNH5SGCjaqMS8HNFdkYZHtEfzHVQwh1W",
  "key25": "4AMJb1LHAybk2M9YaBi2G45UmQg9mtR2bQF5dP8PzrAKeowAULkk3N9pLaFmk8QqdZ4ach1eHQkq8DTrcrE3vGCV",
  "key26": "3VG9aibGXREkPsng47C1QCvBLhtak7bTEG7iUZF2rbKJC5cVPPgbMKvr7ucv6adB9QurfiYHPuCuospN3sSiXBv8",
  "key27": "4bedP9UV7AQcBPTPHQWYEBBd7hXUXmu1jLkDPqKKog97zG464srDZb62j4Xj1WBBJnKg1t44U8svUM3e7mRKwq8C",
  "key28": "53xuJxfpsQf5WGZ3yA5ZMpAzd1SZR9JfkGbHnJmvdLoqrN5kdDC2EqSeEifJ1iAfyGkKSWFdnJ35TGzSNEU3uK3P",
  "key29": "2bXVHE51YiFQLiFKFXtHHAfENocQZzQb2Nvk7Rt5fPAM8EHh6VZGWKnQQyf4Ezm1FRf9ERsAG2xSrfGungQe8YoY",
  "key30": "5UezaEVKjs811bafCa1HyCiC17QeDSYx8CLUkBkfg93gQxm8AGFPU9eqK5ETv23HutBxSQy6M277mDvtXrDjsRMU",
  "key31": "2sR314y7Ae8HzKaBj3fuKhDA8si5kguDafPPnss18H4xx1h3Xzn7oZma7GmEjEzRCsT19CF6Cjhdp5FizDekJgN2",
  "key32": "5k6XDgDDFGzuWgwMTZSnWRyB2N6dYDe3dt9BFx21tTWGdeKhC286b3Xxj3UVr5iTCKr4wReUPNzmEgVC7LQttVit",
  "key33": "3P15Uyszj6CiTWrZxENGzjCmQoMH7g8vi3A4HAUoYFKGhktmsdeN6oyukPur3tpvgCDFJ5GCmLw1Asw4NMXw8x7K",
  "key34": "4PcoPcrLYPx99hhFNmtUWVLBqDWsNbobyEsoJVpxZq6P4wyHBeKy2EKZydi3pVVqr3apCGts51aFSJVGwUEAe3aj",
  "key35": "3TYZNVezYVzg4cWR4DFNvY333H438cRt39ADCRJbUaR2ZjdCBSodJWSJKVhUdXw8KXzJacXKfVn4mVV5b3JzjCp3"
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
