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
    "ttCTrVe7in7gsJ4RzNgjGb3gjSGhwNgbA2GNFdULnsY6SeZck4dZGouUBUsfDHCBCQU2BmUr5htF2NDdK6T8wyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T2aGZ5c1rHFY1jJQwyhgvfVx43srom8gpkf6kwZKUyjJvc5mEu9iq3yazuuH5NCkkmPUrVGHrxTTR5LB8DfgWw",
  "key1": "5VcqqRH33STVdb9h3cmJbegPRfYhSZjmtPo2ATVdsQXa9TxsTVwhHJykcGuUpBLfJELRHH1uaXTTZEdGZwFkPrek",
  "key2": "3XbsE9pbqCRhmb1eTgQzfQkC9Cc8eyzg2aEqcoK9gTKhWKiS48GXnjb3qxfBLKR3BjVn4hjrjpYTtUFf2AHeLBtL",
  "key3": "4Jy22wihz1s2fjNog7A248UPeCa22puNiUzXeYA3RfmiJxq4Ek4Q1ruJyNebJiL42SUvDcH2Due1z9ECnVibFszz",
  "key4": "2NUn9RmMmRFvjSspXvYYVNTpHgGGnpEMetnPxSicHuWKWJKsTqrYjaTeksANWsJuCrAbMaK7nWoBL1WMTxz6m8YV",
  "key5": "4HSd8Kcmi4VKWiy5psjChcFp7p16WuHFJMhGgHzuGM1p7JLYf3D5wa9c612WsNR2R3fDhbr6f1GbRQyj3Aj79ugE",
  "key6": "5Dngs3FLmiKKZXWM51DXiEuc4QMvCGKrDWiphq2GEP6oPv3tfGy2euvEn7YijRWY3fWuru2AFys9JziinhcACzrM",
  "key7": "23HiZ4GhwSttVYfkW5XdBLzaX6DMH1MNkjPUDwbakGFiLezmgoW8rLcWWThfvcGvr3seP3cDhkw8Ae4wsr3NVFAu",
  "key8": "5WA6oudojeSEqjN1JXZKeQDVtQwi3B7baAuP4Vay2yt6qvMFE8HV8qs9NqXZCUkNApAke954qnQkoizgb5XNgX67",
  "key9": "3WRxytEBJoC8Qqa9xJubPDNxXAQeJ5jcqLywD6jKXpLHBj1178z989KePPQqZjMe8r4bV9uRDz7FKSZVUaUgPAXw",
  "key10": "3HfhLoAayGj6nFEeHAcgqhaw67K77UWAfN7ca7T7vdeRxKzNCdEHqB9TMjRLSSGLnHNdbCgmWwp9YR3N6abUUjPX",
  "key11": "58znV1qJje9XpPrWu3KaGT1k16LppMXe7eCFiL9pENVES9TZkUNmR9QJZchBuQPmjrLZXUDmobFe3bQjkVd2BerA",
  "key12": "jrU6yU1e6aw1PPP5S2JFibR786voTZKiHnkteP23BeLuiXfZ7ipEKYhUSvdwxJzpKNkT4VzZVrNdfzwiFGf4rXa",
  "key13": "4C4ZoWaS8dseRFGKqXZ6EBnXqdKLr17G19EPjTYNcEgDjTmyryYDEUMuDBgPLp24GsayjHr8JWHy1erbQ62eVeTK",
  "key14": "3PoZZquhY2dWzGxXqR8n3NPsSo95TRbQT8XxP9bvrLFAMJJQ3tcfPJmwKQurGpYkAJemwcFUS5syEtwc5x1MQJU4",
  "key15": "4DAeHG4yYHmnwnyvd5psNgCz9ZsB7hDZxXPqAcpwBUYaUnTCSwEghDCGwtJrd9CYY3vfohgZiFsjeAKoHHuCTn4J",
  "key16": "2TeBgin4Fj3pMaL5uUo4PoVG9mbxkxEDheLCdGcaALcK9T47HxpAFHURXr1yoLkRBG8YP4LjBXmvfRx7gRcWGmsQ",
  "key17": "4XnwnbXTc8vTACTEj3qqMZQszzKVrb6CuJckcQEhuwD1RtxDXqQe55NMAeX8GQHdSgtaE4dPMinkzoHgCNNWt556",
  "key18": "4zGrDZDLmt5YmEuQHmjVzGw8hebCnFQ22uXE5wcfwgXC8EhPmox4p19pUhkA3c6VBMPZG6MytKnMp2HFkVT2HFAe",
  "key19": "3TMZjKW4Ujp5dNWprHcWh32TrEFtf2nwVoMRipabdaY21QRGnEr8wBoZxUyfrpFzonTthFhoMzEs4PWbunEDmuiH",
  "key20": "3tCs3vQfMSMh6Uz85gaHz41Vjz2bR2jaZkGguwvNN1pR8bFfaGdzYNWULeVMYFpRpKHY58HAGanQV5U3gWnaw8CJ",
  "key21": "3PECs6amL9cKc982kUqaSyFFbiZEg2Rnk5BRG3mAKCvWBvfP2NvM4SEKNckPAX2AvXD5VXV7zFerpjoyTZ7igA7a",
  "key22": "ZKfs1CGy89bETpi4cjetQCVBYFpJWhYJCbhBtYJdtGr5NrULJ4QmbKFbXCqngh3ofaeJ5MYmL9gekJrKxnxtPFc",
  "key23": "4VzdDzEKRyySk8vNCE7zK8CaH4KrMFE3Su1e5mRzj5rb9SAXQLMvNKv9xJRT2zqGKjohqtGkJkq5TQxdHLn2HcyG",
  "key24": "4zKoWAEn3nXmqQLjFAEk3x1Gnb2MNWdkBD2n38d2b7KPULCxrsPLW5fVrGiz5nX6pQGdcLAAcqpidGAC2XjwmNAM",
  "key25": "Ky8o88Xz3sSW8MULrDipZAZ7RHNKiXgkhXgvEB3CpE7n2SMEuHwLA5mzR7uauv5NnJgbSmJfWLNTRuN8dgPLx99",
  "key26": "3qt9WZBFT85q75yAUDb2vReKCvENEGNyyYBoMT1M6bqaS1zj5bYefsRPmUHw76QsbM5AKjWwc8M1TK1fgqq2tdzR",
  "key27": "5zv8KbUAAcuEWRk16JYk7fU74JvjuMnjkeG1vKQQS3RFgJ7tnTnJadiBQD4ErLyw4gpxN55eUWt16QTs18svimDe",
  "key28": "4VxrUFuLA8ox1L1mRApZ7xNXKCUMvvoHRc1FwuJodTbZ9roDGo5i8Si7eLQDbFJgDsxmWf42UotNNxpyUwjPe7iZ",
  "key29": "25w9Y65znGrVEJf73GJyYk6685Qj3g6koNTY2iADihga8p3VtSZMjUKYXx21ebdXXSkwhFFijUJAYYu8SCYuFCgz",
  "key30": "3yzAzm7pKRarWMVViqn7MHFfatHdEwu5xHjJ2m6VAPhxY9GpdFJuaDB5H2sQR1jMbzr6dEtSNrEGBDFGGLZ1bhyC",
  "key31": "5q22j5umyaDz9wjS6c94jZynKftt4KakP9LR6GhxwVN1rB3tFxUR9sR3PLeNxWMVyLpAkX9BmdBd6Zhzmm2HYLPw",
  "key32": "2KY4q4eyU14PKTvjiAEujzGBZ9GdkePnxrVHzaEHNwrMyQa1P6499m7BQz56NARevayMPArX2jstuYuMXXTatLvK",
  "key33": "4z65qsdqCNPCh3aCdRVJzDkToAUd8zWgAJUW1qri38NWcCVtzjeuaQuxiM6pLQhw5wJz1mU1iBQcizCrhzSYLDuy",
  "key34": "5cKjizEB8rHJjcuK2gYkJyN2Xehp5xwKRJaJcvcTzoQn2JBaooi7wMxzpajDk81xvxa9idMo7JuLmcbM5DFCCe71",
  "key35": "3V8FqQM9SJJ9QSPHPfb7bLoy3pjxyFjsdUHmHYYHRcWh51WqmNjT2evmv2bQtGkuGe7m5njPC4HrZFVbbJoz24vW",
  "key36": "129Dyz9y5o6gMra5pHreNH9BRiEERFFNRwWoczKjvLwYty5ADb2iDZMaYeFraEHUjm1UmXHFk7XZbwfBp16ryGjT",
  "key37": "DLgAQfR1wwyM8RdceNmPWh7pVLhBWfpKGnmCzX1PfKCRuEWrNDb2vawiX4zix9s5xB1ijVtE31PveQqiiSU5x3e"
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
