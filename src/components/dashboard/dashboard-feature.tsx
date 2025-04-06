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
    "3HS1GN2toZBjjhxUSjzcbQrAff2PdPojpZw6XHBZDiHpfyfNvZaCYF3g7QrsQMtqxHUHgMopFJDBumqCW3Qyh6oJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cbzEgFmS6o3Nnw7ipra8Uj6Zc1fmChtZh4J29gP59vF1cMKg7RYwvK6dvLqJTSsBqPJLUikALW5p9HJwgdsZ7Dt",
  "key1": "5RW8FRAzZGuQ7fDZ5CNN5UPincj3DWFB9ahxfGs1WmyXtiPVVWmnGQpnFgjfrQ8skgM5hSJeisXh3B2Pq9LrAFfE",
  "key2": "3otRBVSiSdKjSVbbD9uyvqUgcDmn7BFgnw71WAnxTPqiBp6DmabMhNmmRnL3ZqrK8BGJhCJtaHtLDBC1H5JFSPYZ",
  "key3": "5kVQ58ZXCn2b4SRcHtrmUWWT9ve5rjt4Bf76vK5ACVq1RkXVkj3RMzbi1YE2hwryzo667ay2SXeeZHwZ5tP2W1rX",
  "key4": "4Cbt7iyVevHtPTkSDK8Zw7kSPHeBDvNHAX6Madm3Ttrkz2dT2ByfNrnV5Mj8DGayMqhTph8ymYjEKM2NGAShV6SB",
  "key5": "2aT4jCd8ZvUAUAvrH4nEfuD3gprGtdJ8FYmNLuHTWBMKdMAxK2szJDVT3s7waADv5yqEDuX5FzQZHF75YFkh298T",
  "key6": "2GSKoorPVak4hSfNyMY6Bf6asZjL88QKJPPA779w2pz1LhYPHWiyjod9gbsbMhC7abNbE8WcMBfyxfb5J6owqgfs",
  "key7": "2Tc2Ub1SuwRxykieVGvu8pExwPCbVAjQQi5ndoVSVkC6pd8fPfbxgZ2ydNDRxxPgBZB6JsAjiAgZ3hkqg3Awu6va",
  "key8": "5G65RRaW9dfrFEE8RAmWRBhXRB4PFzyWJCxwtbi78s9JjQECSWfDnJFW7T3t9AhaD1UZEDKF9Kg48GXBYgFN8nv",
  "key9": "3TbBmbnzeXsnvKbRXdpdLG5SmUhpq3fncZsU2iUL4KcTda2yQCySwuB6eV8DMaRWfZnXzt3NAhmAjCymKbWpLYbc",
  "key10": "4HnmPApkVkDi97Wfp4e8wBCheK8fbG6x9g9GNssYAopHUNLj5V6CayhKt9Pm65e1oyZeCdw8uEfmxUtiWUs8zRr4",
  "key11": "6Cq3hRojD7djbKRCYhUN9mjhyH2CSWVLaDUFXbpkw3q9zz5dqSAn6a9WvCKEZUGW2ZGM55zcLFWbAkPrFXVmGnJ",
  "key12": "m5DmAzF9T5HzFos3fumAuy52brduzYd4F8CTf1Ku9Zh2vNcHSadC9iSdpBMMo3zWk4rgsko98Q5bJRbtDXxjKmn",
  "key13": "5MvYqDS8Fgq2Jy56mmWUf8KBgf6DYhuCiHqpzz9KfmYBZxLhYkikjbsnqoYbq7gjY8EMxb1ModiYPxLKCDsVNHdJ",
  "key14": "3rUQzA96BSCEpUxtRoaVtjaTTbRXXGsahWzWRk59k77zT8FGKozaF7TuGTEbCbZWUoctr5RRA51KuPzCi9hC9EGv",
  "key15": "2Tyjo8kGSpwrGyVpFC6fYSz3L5RAwmQgGLnuUzYT4WgB6WNiaUQzbjCXNkvSY9RysuiJm9bCHBX1FYubZaGNa1jc",
  "key16": "4NoWBTwxmLpbbAVddY47Zc5cfJDQ5Rk7G4rmhAnfhsjUBHEQCo2TwN4T7sLtD6zyrPHV5myQE3mc6TtvK6xTCK7V",
  "key17": "5QkpPPu39MxDNgd1yGm7BYBincN6KvsWHUJBDZS21kufw58s7R7nTbyHn7sb5XsfcRnvoRjZzcpEoRBLP8AAN9CG",
  "key18": "5WjhawjdvLps9KVJ9BxyVRdDpBXKBCeAx9jyACwgggho732LqQMhdj58znURDbfUK2PZtquqesokeXXHhWa349wd",
  "key19": "61cJYJDsWzPuVQorLGWaBUTrNULtmWUPR6fNHPznY6oB33vggYRtXWnF7Q4y15NCPDxiAv2FzfPxJBZPNTfjQ58s",
  "key20": "otKUWzoVKJb7wQ5iowBVVMBu1sxU1NWfwU9jPQtEKkUyfpLRQEU6B8X8NcjNk4HWViPsV8pxy2Rig1w8REH5E3o",
  "key21": "5ugRskonFZj92mGN5Sr4hAdMPovADYX7L6uXMKJuZyfKGi5NDyzCjNUw3quyfuMhhXoPhQjkgWqzHvzifEDARszo",
  "key22": "4aZLGzwYXV5ASk57f1HToujF8heR9ifh5hTs34HyDaywWNFWyhXk9XhGBWLkFeW7j9RLpDgtrcMKNtd3agBYvf9J",
  "key23": "33mJVhAcBYr3MDDb3atBGcqFnG41sQ64JN5QFRDzYyF5C3MWXhh7JVyq5TUjHzQc4QnneffdctrguJibP7B6RJDh",
  "key24": "DgKy5iQ9EbenVNhTcRNTHxjbgf8juLPEVHr6L32jdAGUL8qYLZ4nWiz2q1eyKyMP6ezJHp4g7VfrcmDuvRLAw8r",
  "key25": "4yFTVML9zjENBfupvZAmMm7ToGizEhx818d8ssQTNKEiW2xzDvvNCg1w9GvozTKo17zbqdbmo3tnfrhS6sqCHAry",
  "key26": "4wRvx9HG9ezJ3TBuZprMgAWDf8WfUDLi9WVjZT1sL7nUTnPBPEc611NgoYj169uE7yfRvA3cboire6di95R34kgY",
  "key27": "4cZ7YxQXBPCM97b1QN2t994gCMYrE5HndUGJuxZ8SHZFVrkwZ2geSQzyXYCjrAPUpETAkXnbjTVz61uSKSGzLgBf",
  "key28": "4MT7mCR11DQ3vXP2oqTa7Sr2B6QN8Qz8fxF6KBXCuTBJyGR2mUxi5fSgnRkowVnA8CMEoQoU94yzSw1PQoQUrdD6",
  "key29": "4TgPH6AKyizyVwEHp1qxiYYLWJTMHf2hVALj5BntwRsqV8rvTydJyGqriZnyAiK7L7RbnTJtu7jNBDnPTuhFxjeN",
  "key30": "3ieubgAtTdApkYhvuzVkbyFaXNkJJ82dzDdL2enAnMtF6AJkMHTRCQtc7N83vfpyj71ZXah1okM4CnnnDVmEyRFG",
  "key31": "3bk4z1obzujpHdvAeCu3h4CK4hpxk91Fj7H4H2Uhyo2LyZvF6UGSVKPsmcx1FvWjWYCMFdjifjAoNeiiWa2NyRDw",
  "key32": "qeJYDiCPbtdhwpBE7b2wvhBDqYbjRmahcfa2iwHaXGSaLfY32BEtpssaVa5vqCoWULhGFsygvfCAMsEeXmvcVH2",
  "key33": "5o4fqZsWSRJ9U1LksDZ6KQVgxBQoLKcZrM7pD4L8hQus3P1vjx6p4UR1ETKtrbmnRqZ8TbdQaPdEddwu8rAkxYaq",
  "key34": "2MRkatoxdtKC66awrckck49m1CKa7H6W94wDByhyxFHGZfb57aAWT1W9DAZ9f6ZjizakpgrFfhybesUM81Ew2GoX",
  "key35": "c7Z4BXHv89XU3EXZ9mr2o5MRnpyxYJ5fHPfAoTLyCtdjhRzmVXo57mSbytKt6X9qpkMzm4YZy6cwEzgzG18Nhxf",
  "key36": "3vs7ES2uDaCekQ48RQHPgNyN6vzKyUqzxNNitJREuG2GYhKP6uAfh2jfFRiUHrMHMU41shnU9XpkJj8va46byXoC",
  "key37": "41oWkftfFfG6XinzPGbkVgkiw1azrp5A1aKggYSpz5UrNdL9PAb2Xyu8yU4n1rmBodqYDZqGUJWyEG87sr7RZD3E",
  "key38": "58TkRWEACrFYYvystLZkunXBfNYEYpGUkzDHgKbSCjpUMxpoYkhZBvjDrGm59RNp5uveTFK8fi1Cz5sEiQ4dTjFL",
  "key39": "4RnEaJa5EsnhticvqnrkZcZMRQDAsmmNwQgQJgSHsnbmcWAGQCAsqoJMwXRP5oNqex3BfekVuM6Q8GBMVonNjcRD",
  "key40": "4de51M35duzPy35WuHbQQmRxggAivSevw3XLKULHwLFB4S6gt8UEB8CKBrivaBRqSAtYshXkqBHhDSwGRuXsfvvX",
  "key41": "3TMzKCWaB4PVKXQ6nPb19n7mrdUKVL2xRJi8XDj9UUoJCeZbtt72UyVgze1SDiK86vtvixDHcbQo5g7hrHVv5oUq",
  "key42": "3MAtaSg6wNmikWHWGQTz4mRzBFmdnbTdexhW7aFCjCu4AHNivyLPsZrPyNFEodjY1L6cd33SbvoZGWpma5fzhRWw"
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
