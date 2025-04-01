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
    "5jw2afQjFqM5B1FvSuGPYXzW4w8Nc3ewWKCZpK4wXbynmUzZYi6Yy4HtRs8FAUN3RLMXMwfHDY5rrhjykCCA4g7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3veByjVQihZX2VF25FnLs1A8DPANBAfuBB4hU98Jink4kTqUFYurv5z2E7wu8nK3a1xFavLfwgopcE5bq9u2oqqa",
  "key1": "4MaFKCJM34BUx7phKQc9VhvoWCgeZCyaHFQhthxJPvzPdaWUjGkcRYy31DSBFsXwrnEptjpnTkze13uQzuA6GSQ5",
  "key2": "4dSQgeZY6gWzUNDREMcxCeApeNeeZUcpqrwA2hjGfddCf8MyGFvqc7LGAufVDoJqWk5XwAo2SFJvvjdD9PTJWPGD",
  "key3": "3oZqxVgUmtAD2q4ufPXzxdX1RfC4EMQdDGzrQ6QhfSuNqPig5BAwxhJFkKTWzyacsyuuA1XuGcrNL2v7mx59FuLa",
  "key4": "2J3oUrE8BiKTLPDmCLjgihZ9QxoGs86KKNr4LBLLyrMTe8UgeWJbSyyeGsvCzACZs4D4J16ekyBY7BN58C1NHiuw",
  "key5": "35M12omTgyVNUeMen8cm75v1stRYsYNyADD5Udjq6G8dgANqpSMrdirajsJpuk37SVtd32WpLHvCpxC3qGJW2STk",
  "key6": "4rSBqKXHBdwhjz6YaHCF9YdjP137Nmi4bf221MSWH9S1ikQ6DJ78uw7yukVifNWeDEaVGV4y7PRyyHSJzYSMtoHH",
  "key7": "3f6Q3XBtymC5Kn3WZU3VdEGSGqM4hd5ZcurMTDPNfeEuxtgSNzbV4aQPk4ht9jxS98KzXjRvjTmTGZXCELgs4W7t",
  "key8": "H8mKQADikCeXxLk8hf2Vsn8WS6qpUyseZBNpXhiBf324xT18PEsRbBAT8Erxj53rtaNicLjT7bUijhfcgwBApF9",
  "key9": "h13HXUyS3yJPC8WkALkZQSwiZnDG7d6ScMVDG3BXttGp5ifNd9f2h1qZ8aQeRCcUwEomfU9xfX8zgjtAb3jUxRN",
  "key10": "3oKw6zmhrnDnXLNwLT5DijB9agUjnajB4ZmgqEmVCxGc9RxbHJgDSMGn2jFUfdh7LHg9haiwbmyUd3saXw9PGjDN",
  "key11": "H4xkgBDcVkktdesszq8epW8cU4rbRcukFyVX8kXUigbwo23RoUT1eyiDmdA6b9qeCKBtsuw6zcTAGL2gaGA2qP1",
  "key12": "2BSLPScTYsib8722A85rakyvH84u7GKes4BtoemwitonwoLNgPNEAV5neToLhA4uvmgSYzmwwNmHsEzjXreqA7tq",
  "key13": "5H9HSryvsfiUUGu7pRo3rMXwoNAJS5mkSgbAUyjYvWbQYXFftK9FLWP2tDrLeYBrrc4AtSzsQ47dyRSYe9K1Z82h",
  "key14": "51PkwVj2bTYTRwpKwXh4iVT8aE1hxCHuLpLUuCf3B2FDDgGV2vhPsPGvEcMBCusv9qxRdrTQfuWmz6wVZ1L8VJfB",
  "key15": "4jKtHuVVuZTMTftR1wsUDVhhkVaA8LabdwpiSM4SKwiU1o2g57GJqQRC1kxuVfLpXt6sckt5ghUCnU5kAQws75sY",
  "key16": "4tLRAkgBTfgWMXtsEFtkVXYRwArSwx1eQAh61pndCYdQM17cjPNLwLbBxEiTEUTC2r7WZmV9t7JhCZ3FBNLpw1wp",
  "key17": "jeqYmH5GrUdukdEqT4hjsNyfWxFLaYpJ1gSZU2cuZc6N7JSjbQrWfeVnGBXB9whGrR3rMgaDop6D4XZVZmBmDVP",
  "key18": "2CdWsLLz8ePXr6FKYyycZtKWhjp7HWhxa1XFk3RqRRJXDomkzYHsLvpvubYuhGXfF5m2kEgUEKPYSuEkefqKeRdV",
  "key19": "38DEGWSuhCYAUs1PGaRSCpZGGrG4dHt9zqFYGepzjVDzEAcfFqXqKza6kpqzRkP9QZ427ZmCXhtBtGDeyrHneWCD",
  "key20": "5RJriHwFdaitqXsGeEjHmbAq9mb1myJQauX3iqpE3wv4UZGszLTVeRijpVcqPQWfygGxBJr6qhyNAJpZ4XS5WGSL",
  "key21": "4JoQd1mwW2GBj631qKF7NWrHx29LkyRUtjp4WdtXZbWvZxmduPqqj5G28zttxq1sbFitgYVuNmaLefNGH5djKLor",
  "key22": "4cmDdNyWXqQfrck2ywnnuwLGTRp9vt6vGoSYxf8gkReyBqmehXH1ZRcATDKHp7LBMTTxDJnR5Fdd7K58SYLmhWjb",
  "key23": "3ejnk2PbTpCmKeJwpALiffsg2WzY36Ch9MeaLReeENRX83MLSVMiSqG3MKNHz5CiPxcqn31xv7gGwJHQ628S4hkQ",
  "key24": "3iRAcKtEF8KJjGM7v8h5KsEg9iu9vHt55UqCPYDPuE1Bt7ejmekf2rnWKyg5i6ERtAB9ZnXeMcytuFJ9sXCvgpG5",
  "key25": "4wop9C77Cfhu97NQevXPqUi6gKJ9t3KgfQ7NAKkbz4d7F3yEZSk4NoPEDAPNQdUTmwwfG32nR9ggHRDi53nSfeGj",
  "key26": "4vgExsGaqCcZ7fzWoRZS2Uw187pDKEVRXWfZqpGntRrMBnTMaQrwfwACYLoKaykJ74zB4DLbzVzug3DA3SKCxpCY",
  "key27": "5Fe4uymmWXmK54vQJUArdQLSKpVE63SworSBnC7sY5SP64JmQ8zyhMLp8QtusZ9zEaqzCtvHDAHPrgRuya4Ddq8Y",
  "key28": "5c2Ct5kh3FjAz8Pjnu6Kj9Ze9taQ1dehaZLndi7v89AUyWXRRPJfLgr1WDw6pZA54KBYupwNC6HDd4hu12o89QoW",
  "key29": "65r35uRzPWoQU34WFSJpxwuSZDPDUrzb33Yz23jWdUFnNC9gUd46yrYQ9ff2zopjxizFzizi24H5rfSxAvETs2qP",
  "key30": "3LAWprsBGS6UugFw5TCZS86ULveHJijRJtqFhM4yBfS5oNe8MmxDzvTXdwDShTrG7h7uVqoZDgwPfmQJ8ovgbpnd",
  "key31": "5pnvDD72Rs8f1tAT1q9GjkTEnr1xjuiCsEficdFLLyyLJFanAAMvYj6UodPhuXWs3FS6S2XShWsmj1sZmcCAUudj",
  "key32": "vHoP8Y4A4XFgF4ut2mdwD351BNnDBCdYg5LonQvbgy6tH2QQ6HAEzLbGU4aZvjVwdkCJQDvaiSWt6upc9eeDuGt",
  "key33": "3RXxU45SMtVm793Hgs7ANp6siSokmQhwrRLM5JfPkgp3PhAbjGqqVveMW9Pq7XPAMHTtQH3AEcWdhpi8qtNK27B9",
  "key34": "3HTmNdkQJFUtRTE641sesd5PzVxafyq5NZEj864GGCPqKTJQmTyCR3iTpQT8wtD6xgdJTxJrAARr828uNHEZ9kQZ",
  "key35": "23g64qydHodT1Sf39i5qi5zPa3KmS9Ce9EWcCZQAu89SRBqeAL15U3iXMXPESKgCK8t6LZjD8Fp39Xwd8JgamQgs",
  "key36": "2FEmg1sGZ8nn1Fn1ixETKoGxF4MiBEBLs8fCbiwNBdggtnjpUAa7w9eDT7cu4o6AMVYgDdh7ws21BQYd5v9tzftG",
  "key37": "5P2yJq6dhRsMQ72TGW9ZrcHcuwUnnhwz49zrwMCbUqwoktnr541ZhAwFeY1ExreyphhFath3QYYTuqYg95sootLe",
  "key38": "2xBRRdW9eq6oKJqCZM2nWPDLXQyjN5UKEPMkRvAjA8y1LJS9udya74hSgDpf5EZvTjYbPwUPzRQLdftYXLZAMQ31",
  "key39": "48meXfrkQ6pCBL8RqLWfxk3Jb3yC2NRPbTzSA5RoxfSnJvtBtVtFhYGeNh3jekpXfr1rAY9Fr1uPj411XnGPQRiN",
  "key40": "2AVLre237oR3Y4qkpk1ENj6j5b1aLPE96F4ydxgDXv9trjsmpUeTEBnXWrbLCyxK44gCVWR81bZ3y2zzrSXXNxD3",
  "key41": "52qzMNk52Kyei1SFvcnQwSoL2ES7RchEqyiTMgmmCNfPg4QjWgRJjuEetXPjZ2T2QSfSUSfCxUGLZhkD8WGzMkM1",
  "key42": "2rhTukGJRwKvzJDNttzkcT8KAr4ubykoiqjm4F9VHbQ4x3naSNA7KQiY8aVYcxsAH9xejfVUxzZccBWtwKPacUDi",
  "key43": "3frTJSWa3vRm7xZKLjTD3g32VBq9dgTwMwBKWqKFerv3DKda8ai9q7QPzcRJE4o7gw63VVuPKPWamFa1fGq6qFBo"
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
