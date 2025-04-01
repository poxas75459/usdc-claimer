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
    "2hitxp9EvT1H167WwRvdQc8vyDVvNasdMwH5oWwFFpQ6RKDA8abbxSiWW6nK3YAfeWjmSwAq4NH8ZVDVnCqFdACq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49myr2neJpYxH39S7N6WQuWHZMmfZ7X1W3Sqe2Nrk4MPsncjff1u9KCgfYGJAtcaC57kUCQuVRuBMv8LAgdH1Y66",
  "key1": "4CnwayjXqWFLxmDyEExFQwwGiv79GwHypwrwUiZ7aTo11HHguUBAPgxJbLEhprKStwwuCmUZ5qbVuhqQUwKDXvtB",
  "key2": "4dW6VBY3DCJe6ChxHMkMHJux9SxpoQdUahqygqZUF7J4VNtLL72Fume9EmKrPDqUFKoh51A3DTEJjsU1vCEa6pQR",
  "key3": "2o6fMKQAhhNX9qeYV7Ks7Bkae5STiepRetA3kwdcKUKDaZNiXPKzX7koy7Y1fLNpWYvitLsEvTcEx6wujkPdDCRn",
  "key4": "67rdDuFEdEeApJhfYxPQa1zqVU177ULP7Knxrt15z5WFXrqLtp4SV4DF3Gbg86aMs86SmNm8MKHy9cVGctBZTmsH",
  "key5": "4FGHbc2HRquNPTWMV2M1aQ6TT4Np4gjs9Ubuax1YD8SYssH9k6GzDdSSsSbXGnzBJ6cXQ6Jr4fSiJenRPzQcDVow",
  "key6": "3qFuF3S9aShV9r6rBFisXsMGkk7u4oVA8g5oWtc7AzMokQ7gJij9qnJbULoGCroCwc34cZg6LTXVj5yseSZ7oM4x",
  "key7": "4xo4qFx34DveoAs8cvhWz1YqKUHEZvpNYGEWhqBarHbzjq8ggXU7w241icPKhZJ3HDguWTx2hz2qXtdpiNNm9LUK",
  "key8": "2oWyoV9iL834tmNBTS95C1P1UQrcMHTMqhrjjQiBwm8puxWpr9DVoetZcXhWjsMPRydsBK2s1J1ZoYZ1csCPXyMt",
  "key9": "2TzTDT9c4cPJk2LuxPTAm6xPvHBt6GhEFdzJkRV2MSgWMRyHVx2o33jM996miJqpHccusAxbCgQmGzQcwCoh8gtQ",
  "key10": "NaTsS4iiEZiXk2WNVMUYhuL2c6aRXDAMGUwS3xmZpLa5UPE1jAKjjZX4mRtpSHqrBV2P4pkJT7Y1C6GS6n2m8zu",
  "key11": "21FUhnpodVig2sn97sHcBaeFzx4NDZQ1JWxCDsAG9etjA8Ugwx9CcpPR4y96x9ComFU1Csisq4M4o7X6XVU6DNVQ",
  "key12": "5R3nVJ7F3BbW5CLFYFWykT1MJWKdpci3xQEtSh5KqFpAuFQ3rYqvthyDTNAC2DQdRAypH7VfjR3LDYrYqUKPdwSX",
  "key13": "5ZkV5DGnY2j4vAbEZKk6ZamjtdoVTDr6dXFMYkLz26kYstFvLhTpcDZTYEwrzQZ5qBc6ShCMHunZeUmW1gkUEAHC",
  "key14": "rkHFLTe1AQe9YjdF8fMesXM9ZPiHtzmWRXVkDHEtThF8bRPt41ugUGfTvffAbUUzdrrF5pkRkR1cC8iKXHgVGWs",
  "key15": "3nBGhV3LruBMnZe9tt2GCJ2ncJxYwrPTYTPZNWabH1aRHBu5kqXAbEn9ZsknxPz2dzR2rTwQUdE7hhV99aLmVT3k",
  "key16": "4XRjKNmK7nXs3m5sNSEFQMMqk1iUyNX9gAJ7WsYaEWp38CREuy3MtCY8WLtRc9sc9sDtZNF4EdsSgRFi8N53Sgha",
  "key17": "4P3k5oec5W1CjVKhxKuWTwPhY8hn8gXTZkkNMEV6tQWaUMp7VzoeMmVsjRKFpJtC3dhaehLFxkXDQtqQUNHXVWhy",
  "key18": "5Z5qnqHLjGEbL2NbRBWwGeS17AutTxS8GB7BZULJ4hL4jPw1dkmijnoiq8EGZq4YGpK8Fad6FbVfGQciPZJefxWT",
  "key19": "3Jgag4MmU4vYkR5YvuPXTzRtQdcDDm9ouqY2L3MpB9i38LBgdYZ41Vv4ZAmQNmRtrSeLGvEtD7KnCHiG43GeVV2P",
  "key20": "RmQ1Q8EAsMn8SvfST1P8rFvUCfSLC9D9CYsEoUJ8DYiVAa91jLPNhU9HThKsgxF33XP66GWjhHZ3sxKqr4qXWMr",
  "key21": "5HwAoa8U8xa3JLA3pNYdzibV17vjXjYu5XnWmy4cdbDEBHMgsoCeptcczfbnugqvssjUeZ2VkbAkx21YLV1Uv4kq",
  "key22": "2g8r9wq8g824EdEbuuK4xyqTBzUAEtq6JMyz2pQ8Qg3SW5UUyQgB76CFcxxch2AiSnshvaR1ymGSEEsmJxffwM35",
  "key23": "4CrRS5S5jEZV85LnpdeFNUEYGncbtS9BLoXirHdfRVxo7dMG3CSWfKxPfBCG2MPrtvwms2kVK2hbochShfeibxLm",
  "key24": "2NnnRtthBYYfGAR1Bigw2XnxHJdvUo61rRQxcBGL1pFaAdQBfyzqGcDpkWfeCBEgH6fJgRw3WckBxcg9PUuorzuY",
  "key25": "4sYKWRprvARezsns3ixkeK5bhYjY6yjqD7uw6sxqZVn6yTN3XYbNd9uzoYJQWhCgPPpRPbWKdJxLhwtCTtpcnTB",
  "key26": "4nXVmBbb6XuDnRKXT4RKzjBBP1XMp3XAV9uR5TJgA4h8DPSUmioufbRvEEJchDWxVw1tLSwTqRCu4ZVtej4w74sp",
  "key27": "2M3W97dxteDPxJsSJbexptHnBvGDrBugUzT5Pg3YDGpjHEY833nV8cuvRRQvVrMdNYzjBao7sPs6K4CQCYfmQLHs",
  "key28": "64wB9pk2KRmGZXntwHsHBAg6EDnxz9YopmAwSWapL1DKBzX5ZxVk1ore8NqVqbYR5iGxCHPGmWyoEmXmUFMFYZNB",
  "key29": "5rD6Wn52QBE6STfFMHtLhMZQgVvxjPdDxXLyYXASLsybinHVbvpsVsEPTBYC9kKas8yt5dPvtTq3vkQbrFgouRne",
  "key30": "2pn8U9vSKhgXzYvJgz2NubFPcMD8UrQxH6DYso532nXtrz71whudVSbvoSafi2AjBtS1pKWJCj6fjjpBYjetDMFi",
  "key31": "2hxGGYVDvY8RBMtQt3fQuJoPyaURvp4K4MnkXqRbvYn9B1sRhGiQRWM5ChRwiFjkNzcEcEgZ5kZmfXJePnCZoPg9",
  "key32": "2Nq6efNifMMtxNb45PKCFSLizSM5GgitucsJLh3AoFtiewvMm2wmvfKBDzHy1k61Vn4pqr5ZJCeg853rT9u4hXoQ",
  "key33": "45NBwTMyR7jmcdoUzqTwVpeLPTHps2ysZSXnXLGChVH6eqriZTjyTuSGBU7zHSGxNBHszxpGn7jvGdrApeUDvoZF",
  "key34": "4CSPFDhedyZoBoB69Q6jBdEYzD6PufT7mEJ7Xj4eLMe2gbdp4wTGbXiUnEHLUCa9k685F9hyuNHiv1GiKn96Lv95",
  "key35": "5xcU3nyo9eTASbyALLsvi7kmaMsRZhSykJRbcXwpbhotdg4DNe9314QfBaZnxnEShdY4SNxW662FndL4nt1n6vyE",
  "key36": "5y3s9rabH8irpE1YQUpnKJYGroQ8o7SbwjzPgpRZ4xTkzoCaD56asoRgkfWg2xThRFuXVEdZaumwqc5SaCzaLCPF",
  "key37": "54ioz7hLWFp5rRN3jv5kNCokKf1XbXMHLhHYJMfJFpyfbPkhZX78L4PCufZ76MUvw9aekKmooSLqQpMGjzGbAy5M",
  "key38": "zEuNygF8QNPXe9VgTmxBY1at7KbFJwCK683W1szyp9etD8QVx3E3CuMcyD57CuMdr9yTd9uafxnzhNuVRtwSmcx",
  "key39": "2UtBRNHPxUTPW24jb6YydFkcqm8pmFm7LXR9YXWmaKycskgNeMCznYveW87WhRH2r7JjKTQaEmpAdJnG3ie2ErQB",
  "key40": "26k6guxzq5sgpowZmEhezozmvzJk5E6QdtwvgsN7QGc5sJ8rAnaudmmVKH9GMvN5UYbBbpbomXgFLRAvTrTiftNh",
  "key41": "VCgvwhyfuTzqoUiJocVQbBFEdEiX2ynPd1HUEMdaSN5KtRoK4aDwfbnBWPv3wCNMFr4D4RKuhFBtoaBCAtnWFRV",
  "key42": "4T6NvyU3mZSzcFihNxBTi6VL5TJNA6v6oxAqYcnEmKUm565YHyqxtZJMXyQMAtKY9V8UeK5JsmCCkKfWY626vQcM"
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
