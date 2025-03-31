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
    "31HYdb7GEJP2EcJoAs6LStTVqZ9dj17bpgnckSQF5kqGjw9SwDKE23CwGWrNivwimjjgQ9R8fMvTkYqrhCxBdcvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C9tiZJSworuHSatvVuk4W6ycfqYDP5ZUA9MovmBBMfykb5K62asJUNdFH2LA2cjNu5mXky8iNHLmCeLcorGFcNe",
  "key1": "dwM8mq1aY5yy9GfTJzDAAXeimkoytBYwYon98iMMCzFbq3HcLnEnxWwqvP2XEisvRjrthTMD3sVoWtHDGyp4vWQ",
  "key2": "26HF9mMfecHYQjQQEm6K2TTxorUVKVjTQ4y3R292ozoQKtobbYc53BAmz4fjHcNsYDPMWT9XeoVKYXLBYRtexSQV",
  "key3": "4bsMJKhMUutyC2cjx6txyzDsbCgm9oYGsMWFGstGMXAizY8GheDY5zUqz4uvAc88Zxh8vLoCaMZcQBcDjtexzkMA",
  "key4": "54U9AqcabAbsxzS1n4mqcywzQqige6y4LoD7q8zjdig5wZy2bRezGY3FRmsBSCGE7LNniDpEAzQPAAcrtLPz1xpn",
  "key5": "nqrVfbZWLu4471rZPKA6YfNU1PYnB6VBmL8TsRKWFVPLYPHbwNu7u8vHi34qcbReqpL8DyZEsfzfmwTTiUxZQQN",
  "key6": "4nUa3AjyD6RyhZ14RXHRc251QdVjvwbPL9H6hVQotwTd2dJVW727KT6yYpx3A5f2ecFiy2NDu43p9RnHmMPULmzY",
  "key7": "48FqZwKYX4waqw9CDPfPoELu9PzLoeXe4J9L9kUhoLp8D1VcDSZFrTUzjz5jQggiEfdXM5zZURws2Ya3BYhTErPi",
  "key8": "3bXFoDb6uSCy9vzaoq8gJJeYR5wD6Gxki8nZkUXCEpsmxt9n9FG6Ckf2aGyHHYRtoCV9eGvbaw9hykt29fxPMiH1",
  "key9": "25LrrKspcUyKsTDmNjzZpq5o8aCfWXJyWkWY6wWXCBBC49pNNVa1bTHPFhKpexHRwhUJP3UMJSZBQmAgnU5JDzi7",
  "key10": "2Xsa4GFWkyWKPmLbRTr6R317uN9NZJQrx1umZfHMXJARRHNZchNA2SAk8JMm9dVykV1GjK9mPKcx2CycxzJ9ursZ",
  "key11": "5DTaxcEfC3PZcVNE75pT91z76SM4L6HoGZ8HbFDn5btFjLQomL9D2EsNCneyoGcK9J5jA6U7U3zPY6DbfSrEd8za",
  "key12": "3D9QTUUKNVhAkVmYP8drMjbaHzj2FA9P4wPtyZ1Z636QcRv5gquugaq6ZDCbZSXgtXADkgqoBTWTLDXZuS2VpB4u",
  "key13": "3YVDQedRquLhsLRirore2JCHk7My1651RBTfo63Nr6Qar9vwGsJV62psdxSG4RgL6MJ3ogRiSCSY1YPLKmJfepuB",
  "key14": "3r3r1NPM2gY96ja9nARngwZ2dumaKwH9RPXCBF2Zoo2vEKJjjqsBxX4zVDfnWYHCStB2JNWnJtzDTcqWq8yUdrFR",
  "key15": "2dYpY5jrKMRJ7Tu8Sf2iq8W4NHAZacdZcVQSoKqs5zCVfXivmftDGBBphakZBTy6QKAMQDZ5ULapz8TSjKdUesMf",
  "key16": "4z3iwdsvpkPfxM9j33EJkR9y7QZ5MbumJtM1aaN2AAtS3C2koSUB2CVoB8G38w3T37TxFGf4Xsyz3eTuWXFKh2wE",
  "key17": "5tSFEwfjhvUt5tsPTt9LjTcCDPd88BoEaEFionxA1j9mfyQAEgr2mEE3mti25sjNK83RD27vfcp8ekcDpQ2ZScpN",
  "key18": "29BGAte9u3xvCKSE2AmU8d8mVC7YbUSgfyaNtJDzH7MSHsUqPSwHWg1TsoBLYa88FK7yhqXG25Mp977133D7FZxb",
  "key19": "5WH5e3KdfdY6VjKejzUiRELY6KRNXPYyiPdswoSTdYbDL1UQjZNHYQRJbDtD7tY5ayvNsjs4hX3GfWmu5GXhMzby",
  "key20": "5S1kS9zoWF73p9EYcuBm91ms9jBe51xkKFZBPuLGGG4tnZmTs2PHpy4wXaEVZWCNahzjBn2XL2oW12w26vRkZwGD",
  "key21": "2LovGihxuYQFrjKVGKP35u1D9mWYg6TMhmmteCPBwjt1coBKCJqHa7V5oY1W7EpRYGz8mV3EtJY2rdkbGVL9kQ5Z",
  "key22": "4CYqTzs4sHumd1abhdGbRXStiQxAz224Xc5qgSgBgAg9oz4QPyBXiZXcK3sEUGFsGbNMgoAHPJqCob9Qms7MxLiG",
  "key23": "4aP7F3MXLW687KAw2qYfR7vqPpe83QttUaRms7yTSgrNqHDJPFWVtBJjJ65FAcQuNNhGTNzQ7NE6DpNocsXKHsX",
  "key24": "4uZR6W3JHhfbBqarJPZ5ioLtTHmHV1PbG2v1nKXN7XyhRDk1CgQ9BP7icR5Lea71WUhfPW6rTbrUv2C31C943eZU",
  "key25": "4ZMo4KAB1b5vgf6egyc998EQytgaXq5SVXYPZWzSoBaYhmy59ZKc3KfftUtePCZrpxQ1N6SpePKW6V8zLp4Ep66z",
  "key26": "2jaC9yfQD2FvDKJewf6KMYzTH7avFXbn2GZF7ji82spRm5xiB8MyzDT8baNukL1jsLYgn2UXwkUtzPkJ3BfrBz42",
  "key27": "2NTh8CWSAzGtYnNYfJUg6L5Vi3We3FBja9pTdhPwedGnkMkM5pYoaijAid6ResFwEJF1tiCB1bH4176SDfxzueuG",
  "key28": "3UmVK8u6Vz6T71SW9ruWqoCDsZptiV2fvfqzKULNgbHoq7bsHcCrLUTxjrbEZEaJ96KUcBTik6BUPBquZ5dxToFo",
  "key29": "4SojHVsrMtPpkdMToX8Zav8nWKxsEtiaiRdJgnkmmsD4xd1sjbzcwWzFjae6WQtTwiEg3JYa7YdLx8es7Df11j1t",
  "key30": "a8LBjcu5LrpXSihQFgsdY8To2Gg3bgBpXB8wuVvALyzgu5wmCug1F3hNQ5nzMwqoA6eHeK7V3Sfp3v83NQahXeU",
  "key31": "tt7HGLAG3v37Mk42UPJHX3kCAYa18TXyX8t8yHKZ3792ocPsg9Hkqw1tNRr6jK6Vq6gM18DuhBAs2AFZAVWgVJy",
  "key32": "4yAffqx3xGu4geguKZ2DGUqo7oXe2rSw9FBuCUT5RwjpKyP5vggLAH36CjonsdxU4XdsKxppiWeNzNFbZXnWC4iu"
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
