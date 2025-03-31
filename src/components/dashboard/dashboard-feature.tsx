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
    "5tT465toKyVrWp5CNEJhQz1CbVqjkETmd81C4coTTsMqRSwGcPTnLWfoa2VABJBXmBaibTZsn8L2WXxCSBPFwimx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z65sqwF5cPgb1BrKwzuiFGBeTUPwKVQDZe79RCJZ8BfPNm5LCFCgiG8g69o9ngJW2xB4AKxnoisMb7pBT3MLR1a",
  "key1": "WprCuhF45g7tDufUo2eSxKbf93TQNVmBCy7qhbMDQuG3LE25EX4g8iGQfw7N1WheErmWscPrG9v2ChuCrRUqQ4D",
  "key2": "2omTMBmvv6uc23DVScz4s1BmiPocmebjsWkT7FDDS1bNWxg3P8HQecRFQCLSJkpieJ4mLQpa6QpUBE9YraLHQV82",
  "key3": "4AGh788KDV4xXChkeTV3Nprfa8ojinVJx462GV3gbAZPMBAyiDQ49zKUk53E3v7o4ynz28Lg26Ye85LTp3YgZc7F",
  "key4": "4RT1GpDUgcFBs9mdK5a63kuKhVyvYNQm46bdQrz9GAUnSkxzXS1M7xx5E8eHkTF1b9UXWvZMN26urUEm9HbHB283",
  "key5": "2SUEvQSY8C7iZpH9xZZwmkiXyZnU1BHEX6RjkpKcSYTd9NX9Ef6bcuWi46fxrZecfDMGVumLk8b2jWtmPVpZMS6U",
  "key6": "3uEN2pw4Hs5PqKAKhZJ6cqhxuQLS7oueqPneaHXdq6HbTJc6f1iq5NJkPecJfdDDRTY1jyJJ16CB2ttbZcUh3JCP",
  "key7": "r2QdfoqrAPSjSFtqXSJE7psjGMRzhysLGTXwCay3ovKieGdwqcUwEfRAATvGh4namuJzup4G5Fb9hYjrsL3a4hh",
  "key8": "3caLHJRo9twfxXk2Lkwr2rE8YXwe1oZBHjuQJrgNuTz8mvq4yENmrgpGgSNgA2U823Td5EnsHJ28gDX8eg9kgLDW",
  "key9": "5gkB8y9q8GTs9RZFBospHASzLrWxLajs7cSapTu9Qgp5VDQjt1kQqNdwK4PRhNGCVUdLtFC6THQ4yLcd6zhxSjxe",
  "key10": "23QzWK1QMc9SjgMthtMkQophyfwgmFpcAtVBTj3gdmqcMcEAkJPt7chJ3eHjDGXzsxZSj2ECfaGStKgABRuHMxps",
  "key11": "4VdADNPutXaCB4XZJMHBSzmJSbGocbeoZff3zaP8CL5E6p9GSUQiaQtJgY6DqJenWk1tpY1jjai1oA7Y1tFd8KDp",
  "key12": "4ZskuH6gMX5fSKVBPWjhVbjqphffYofizZVU14j9rRu9KtcC7TtCKrcrDpFVBs4vNr73zyKFPCdcFvMFBfqFw4Hf",
  "key13": "47o4e1GJU4na5myF8Sn6w9MMx3uNZH8KBJXbRXR5kgiaaXWezzXnFeAeQbprfrCCGhWhweVSYGMVHaGQP1LDs426",
  "key14": "66o4ZGe43tAERXzkDqKM7xLcHKLcAXzxFMKuoP4ihJHdqF34DmLHwwWbcfof4S2cXyGNVBJ5qxXcFYzQq7MgBwzD",
  "key15": "3Bosu9tiAQk2Wo49Bh2TCgUXuGgedN6pjjuceRdh8MjD7UyhQZ4XETk853cUADBY1EYNmscqVfUzwREFM2nNHYn6",
  "key16": "5CYxdgrDKKjx4L5Z9fjWmmJL2wkyT4oQ3zDVbs5pmSTy9So37xiBuzSKYikBbBpRC3h2HcZ1K7oT743ipLmDVcWP",
  "key17": "41cL9KNBehXDKLMAPEJWnDykWDXX7AZSQWd8HfqrNVGH4xDzk5SA3mieaoyVnDs4NAW4G3mxgaHWCtwCKxTCdk1b",
  "key18": "2QgQKasSSLtUUgiuo79QnXWhR97oP7E3Ydc5fg6QZ3kjUoH8dsVPmaMR2Wtsqh4SeFhL83zeZzCgsExg2LHZqCfp",
  "key19": "3c6Hvz1TmfwEM3MJZUNT8B6zcdnCmWgvjiwJwMRfsESBnNvxVPBMK8RoZrCkVZVegPchtVfBXkXqnQzcVtd5K8pZ",
  "key20": "2JCLUydoHEi1xcVZ9YzWybBjZCEt9K9j9RHSirxdmBVCkWcdVNxtuswJckYJpYA5p6PAD7TFb1x5c5hK9dr2BhEg",
  "key21": "2qhQGgys4Bz5j58eW9ZjsS5N3RrLSx75LkTBoK34qkFbgVEHaHT3YMZjU5SNtC1aUXYuo2u5Q1FBihmZTy5AHaTT",
  "key22": "5oVHpoSzuRzSCFkUP4vQ7Azpn8dtUNZUMxUjKFGtg3SjQYPwc3un3evo7ZGZJ3EpSLhKPfbrs7vtwr2f9vDSkVAC",
  "key23": "4dF7bsXK7hCp1rKAyUesb6eXJSNXWz61eR4cCSHPtAUqUbKApdQPjewwzCGEg9SXtQLvyvrvBv49f8Nk3pz8TdPe",
  "key24": "3xcHiHXEExoQaMUoV3Vb15Yy1n1ng9ze6Q2D5KZLSDn4e1poAoCHsRm4Vbnd2fk4DtatrkxWZY9imyS9GF5eEkQ4",
  "key25": "2rAGyoA3KydKPZ3bhKcLmJKk4mZYw59PoPGoETrGkpfRrphU6AKxQnrP6uQWzhXo6t1Kh8cEXT9FvgWg4xnLLu5n",
  "key26": "janhbc42ZvwvwXvy1n2N2k1hdomerB9XdAH3j2ZcxXaimAaa1ncRv4x88UPKHqpH6cgJsoFw1zZnaAtHYfsgTz4",
  "key27": "2nJCbfkpqgApqE1PuDfveYhiz6hoSZPUe2AsQmf2yWJfe665NqpeFPFerbyiJ53ioYU9ZAhRJAKnofyfV2Xq7pA6",
  "key28": "2Lj9Ai13ATUyFKEq1L48i5aCyckbnt5Gb2QVrpMZQnSKrwMCr8ntVCF8tLF4osrKQzTNb1zR6PF2DFisvNNtqkNj",
  "key29": "jDFUGGD9nRGdAPPCBXS2cnLgV99LohiFfptJEDVGGSPmhWypMLVFRZpV9j4DzdbM2att3MqagHd42NN2RxjpPwS",
  "key30": "3yijudLBgu3swzTAvCFNRQbhiAPT7SeKARgSyaYnisACAhozXnA45JupPfbD4AfgyZ9L1vCq7qySQVEXbaFKEkEP",
  "key31": "44qM2FwLoR58ELMM69BipmrEKDd1Rnq2YrEW2AHCN1Nfo3drHgb6AXGb1o4pcFU5X444dsTj2DZVXEebdfrMXL7A",
  "key32": "4NoHAfoU3CpN5MsPwwiafQKNRW8nAwxjpriS4m4NCMPhWQVaGqZXgi9ARVWM4oqThhFudtKFP7r1rbi27QDKB4pe",
  "key33": "4qtY9X8UAF6JAYRkxNpvcbjdWqgbH558mjha8h8kqZ5LS25NTaRTDTnLhFWCVJVXasi4VC6rHYeg4ukSZagri1nq",
  "key34": "3BPmev41iSLr5w62oqQSPXD14QwQvEekqfKp7gdZ6u6C4HxZfXnQU86B7b91F2C64jCzYDtxixTBCH4GuXZaiCfm",
  "key35": "jUgRQwA5thvR7qs9QXrZSmqqtd23n22TSt5fwC57TsLdcz3nnjVDjisJpj9yncVRMmB4gBJYk4FW7WGPakHVfVW",
  "key36": "2nqAnbdKTHpTd8LYZtMoHbqFR16euu4nzsKjNFw52T7SBrdyYGCyATXzV3SMxyZZKzSQTkLzk6Duw7AyKiZPZ8PF",
  "key37": "58Dz3Eu8uavTsp66xyAFNAXqcXjWiw6M9nCdhQsxrLQByetwD1K3GRfUvj9uWDZHheH94iCpPhWzdf1CHDu5eKHB",
  "key38": "646tRa8XRm4vUbGKN3p2z1yPSANznk9uiLtDMNACa9TsFpK7vXJRJvvLZnMFzPrv6CgXML9DpPRFMQ8ACCzrDB9k",
  "key39": "5xa9og977Hpa7K8kBnsRXSrBuqUGTzf21ooWboUaW1akBeH8UNx53cRHrsMuJNGnCxnivpLAgsPwqqhrTpbpweT",
  "key40": "4RPrnpi9wUbqU3j7oYsUPgQvxCLdE1CBKVBQe4akL3xvnDWggMRhtub77cH9KRtbYC8GFLfEMVNYtBXSURv8gPRA",
  "key41": "3tgmCybxmoywgjWWg2XhXc6hTstPnFDuTe7gmMDQC9i3FM25giCyWhEsEXn7NmiQPzSoGBEKhuVv7e64tFphDggk",
  "key42": "5ormGSv4YMikS81h9pMqazdJm2sdVsQ3gQ6pr82w8xk78PUeGbvLf4XM3Pqz7Ht51xKj4rKSiK7qY2BtsPp4C7s2",
  "key43": "36C9fPxteexSxNj88CacinqtJqsyRbp2757CrvQv4p9Azr6hzLYdp5zaenP2p35MvyyAm3XbS3hzqXssQCWByQkR",
  "key44": "2Rp5kLMN9CrEKXs8mD4Gp81hbWkZUcFoUkHKzfircTwXQG5FJXjgUMd8AL1tPFGtifxXZ4qc1sRSDqRXc9QnMEUH",
  "key45": "4YQgQfUrFXBDxYkREiNjuaXp2BR7pPr8joXdWHrjQqmUobNEePYK4yKt9cm9fhC87RC7UmjtUrFT3NUkDDMLd9gN",
  "key46": "2edBPrxA7j6z6fJXTJiEjeoCfxUm4uwRSuoPJN9KDL8ty7iz3zmteNEJgvKLMEhZKWWTXMsJGa4QZ7mJDrXBS44x",
  "key47": "5RborR6hSBpzVgCgTSU6fpNNN91pTdzPnuS41jT2gXn8vTh65uUVAwdNdsnrd3HeMtxXR9cNQYpW6BETvaGEgtSn"
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
