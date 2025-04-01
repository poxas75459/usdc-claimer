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
    "61sThn75HPfzoj1Jm6SPBkYD1qV8vTJiZpf51xJBJpEHT3bhWbUMJiPAezywVsx2TDRy8XznshGb2GoTCPysthVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F7rjuKbmi1uyNtKY8QDF35fVhycnygWXbZT4atgHVSA4orG8rHY8mfGmipkPWGoR5hawNLBQgyGSjaTF2tXWGWW",
  "key1": "44Znfaf68kUg5P5vjq5iqNkfi4VxG737zG3htf5Nxst2ZiBCukzuL5edUDcvNzFEc1AYoD79GZanyNuo7o2ZCwqk",
  "key2": "2pSdPfVc82Ph2C1EnsRMVv2u1U2QNvM5y78AFhfhdTdEn2acftcEcZ1D4in5C82Kj2qQwpf1xW78NvJJ5Su3ZtDx",
  "key3": "5HEUfnctGGpfZm87A75jntKJbH93e45a4mxuJqGzYZisDWiZkDvaP9EAsf4hQcjcotG1vgYttqbFyce3b1EvsybB",
  "key4": "578kCcCGdU1uHGaZsDX3vzNEecZoqM5556vekyp6fDieDfPpvBsZuTudKFE15JjPiYo8coYysQZo2wAfw4o8tfmh",
  "key5": "ANyPVptJDg2wjrnRS9obAA7hpAmsWroBAbP4t1Y25zDZ2xPf2bZjTx1a9wCfmd1CLXtTRJ4eh7RvXsfCzd7uFvC",
  "key6": "4NSu6SRnCtLaT41HpQP8sKH1mGXxfeHqThf6iQ8biEHECF5q76KV7G1ufjHrQ1hEZCQUr4sH2dGnsFqp7J8uj7nT",
  "key7": "RDDnKYEWDe8xCBCwCEqkVeBpFox4qyysb7yaGChVvCYp4MbjToxPg22qKiP1k4TnfVLSRRHG5wt4t8JSU9a47z3",
  "key8": "4qAgsdnL4atAoiKRmsfd36SQoJeFeKvWikwpX3mYke9K2woWyY55z5Sc6VXK5rfqaBe2ft3PHDUnbKETBsnCDHRc",
  "key9": "2Q5S1xNMdQ5rVUXGA3QgzTCQWjXojgxav2cF7Vyh6FcVA7CizWEemEp9pZWQpfXbRLk5HYaRvmSufEpMXiL9m2Nm",
  "key10": "2bz4M47Kzh5yyL55m4aJ5YH6XZVkV5eBFtPU5gyTT1eusjbTsBcAmD47FiAehgiRrcgtHeSHMJbHE8gqUuduzPG9",
  "key11": "KBxRPKyNH2odyH4vtrvhG35q7VmcJD4Pm61SBpzwUGdcDgcmDR1NPP4WxdbFDsgvEzctdn9oSwg4tX2i4Z14wnB",
  "key12": "2dALGm71TH35cnvxwynJG4hGSdZb4ojtFVRunNMbf57DAHxvoHRqy3tYzEBRLjTLkAipqJ2c7dH7Xabmz6pLXurf",
  "key13": "5boc68mwkiBBSYCubNB47jgP2K9rEpqXSyBsmp8DwsDPDiF55uBc9mtdASTknd6ZbQH9cxndQNbm8zdGmNgkDdZG",
  "key14": "5smq25k8bvCQaCpjfExVtirjYUt9n9S4qtBqSeMN5nhwYVXViySxTu4agSBqZ6E7mkF6Kudpk7j4cLfZk2bgN7WX",
  "key15": "wZoEeDEbWVMwLSRQZA9NtSxxhu46NBCG93R4B1dZ2zdnQmCeeEppVjJY7ZAaVgbnkovqoTNma3372sYy7Kia4Da",
  "key16": "23x49oTcJJ4NQ6pg2T8Gcykys28A4Sfi8GoZSrVSzZmVs9Yhyeo3dSTWoRPd3Lkq4trhm8BKeWoHdKkAseBntSUC",
  "key17": "W4pwj7poahzjLHU2B9qUTNd8qJgMmmNU8i96TEgnbYef3gEjLieHTvrMPo9CnMJVwWtwVWBoWi4Zq87oniZQhyv",
  "key18": "4AkdYT9EaRpJeTrEixgjtcEPK4QPHhM2upv4ptPuHk69cTsstik9CZYPMQEiUb9ducyiFXGwgTMxL1BePv8gsNhL",
  "key19": "3oM4Q4KhToCZJS4jVMoBYmbsDNuejK5VrPHe4CjLzmeXqYYJyxa1BRyeHwEMz4mWxae11SPtsPEcAfP2fMogKMkF",
  "key20": "udP6aR236WwqcSULFTx1VNC9xnQ1r9cd91P2sr3tcxiafK5f13Q5sXu21eFGLz79ZvfTyGqMXWRyhRbFTj43sGr",
  "key21": "5PiwfD9By1VKHcdHm197BHxR6A1HD2kpCNoyoRCFRmAQUjbACPbDjAnnFzTGJctSdUnFMnj8E6KrFVMu8scpVddN",
  "key22": "3NJvTQob3G6JeBy7U2U3uiAPQzvEL8F9kiioFVQRQm94JksSd7ZYNxUjNpgsjYicKHTLfYapT4Tsg1Q4oKwkuTV9",
  "key23": "37fSV88uyLrieM74y5WyNcsDQUN4wKwqxptd7kmjfFr8SCFRRGs9yfoZdYq4iNmgYeCHXMhRFBA5Wu2zyz7u9Dgq",
  "key24": "3h4h5984mgLgLGf9rPjQgegy6bXmXfpJhg4th8XKBp3n1MvfeU2BMu5MKYZ9R46rr3M2Wzy3Kz4iBRdkfCfJfXVV",
  "key25": "zturYb6jEYxYZhaxE6rY46GhwB181HgYFbRHoisk4ARfJj5zTWYQJJraBdVANoTgP35dPn2h7AJT4HyWHTnfzGk",
  "key26": "2gwYXPhfg3VHLh7hqAgBX6f62PNupKzUGz1w6RKKDJxSaHBvuU4jugn4jT4nS8Ap7wv6jU1o6RVBfFK9yHdo1oj1",
  "key27": "fkshRz3XqXBbC3GhYzhDJuxg6TRfcY2jJuVTfm9zt61ibhAeLBueeahDwvQAS77H99FkyrnheFWPVVWon25uEtd",
  "key28": "55zryqGkv4HuBTRiyqqziviJKZjnEUVVgHZv9VFXvxzaRia25JMa57HNszkJhEn4GTBuzTe7EkGUq4fDBQfjzE8T",
  "key29": "3Q4kugkZ3CifCAgYQL8HCA8vKVBEDVUyjCy9q2SkEAf8TnxMq3qFwpy1LUpNarZe6qdBbTx49b85J5gP7KRJZuSM",
  "key30": "2z4hmSUCkcPw6zn8zZTUtt8vrfja58wCe8kdZohD5qaYLDHUUtjb75G7FNjmFqpHSfKYytPKZ6S5hw6xf3foPL9Y"
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
