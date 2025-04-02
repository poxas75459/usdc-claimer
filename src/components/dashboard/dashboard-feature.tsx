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
    "5DLwFZrVKi8i3iNMMTNykxrioEbiPKabCZJYqpe4BvH1jTrkgveJrerYTcwXMLpZuEmkqpzwevSkQjvj6WPPzbnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "218cnQqJZT65GiM16WtCoYyjLvGiGEzpMDhzYNEWwFmmwvtRmXBDCp9rs7NrisrAK9g8sggNsAgKc6nojs19upqq",
  "key1": "2L98zKArDYHxbFWncyNHY2CRuwnnDeFnSFTPzouQmR4p2FVSWjfeAsYKYexsgQXjGnjaZHqgqu2ue1FUivFcK8Qh",
  "key2": "2FhKHR2hwd6h91wsJkq2xpnjS6CuYErDVBMiPX4dqV5YKL25LjnYyU3zNrXFX1PUcZLcu4rtg3eyUNpgUnwKFmRk",
  "key3": "4cK9qWPgPUKMDv1ob43mt1JGQonzgshhr8PmXGMkWJPpX5jrzSH4guoZZTFS6PJxgQ4x3KiwbR7KLLfMfojazzig",
  "key4": "426ft5YvRogse1XLJyVJo1WnedqdXcYsw5CcTozDXGpVJvpDA1KjDU89jVe9DgiqbpjdY7FhDZ3cuyRC68SmJ7JK",
  "key5": "5x61ices3SCrZkF8sK5Kgn1ZHUJSBxFo6Cf8vsUHJAigkygbbnkBPuWxQ4baEvgD9Lv8WTwaG4jK7KW3Eo6Ug4gh",
  "key6": "SWKpQZPauDciDSBdmEyPLh3Mh7An9Z6TF7CpJj47aaunn2YQZC3TYFaEn4qPhqx4tZ5MSRoLNrgViH7RDyxLqvp",
  "key7": "4rWiHCRtkaPKyGzzMEduqJ8dhHgSa9gLgyiiXixcFdKV631ckXbXz3k85TuAARKPfB3TrTu8FBrQRK8iFwWjdLqM",
  "key8": "2m7nq3atHobWJwBdaN3AZEZ9qaBWkLYNxwdzDskoeFn1wqWRdMJka1aFNP1Bi2MMGFNvxJTxg7RFcXi4pThW1TF7",
  "key9": "54bFnGyRqtKMXKJA5UcjdUoPKhR2J4rwz4q7a6c7B8NJspNhdS3DK1iEUgKXAd19WhKH5tNTTThatzpKj3CZsuQE",
  "key10": "2HLxuhtZz4fzxEBXbrSAbHivZ8PvwV2VXy2UwYzEb4s3QuZmyKgPoUgywuzrnQMwsGa3YGLbQuhWkDc4YaqnU5kG",
  "key11": "49df4JdF3gEw5y3bsYmjPRr1iJ6iV7MmXs5LtxuXn5vEq2x2dDMHcks7XvH1Ygh2MVGQopnnne5viP8hGSM7B2ha",
  "key12": "Mv6Y157WA6orPcaTTnWgZDRRJ6ybzTWg3138b27pinmotWsiQWociL3xHbHndVAJxP4gY3bQrYK541ZqzA7UyTH",
  "key13": "3VmjeWhbEjrjHXePbByVFtSj3DgLvKSBKKE1LzVXY9iE4DY5dCWLbAkYDPan62D6cxhA5F9ZsjiitaKsCG5ZYm9s",
  "key14": "52qrxPEvKM8cPVY3ztUbkXLyF8zKPaL4oMCqs7uD849wwrwBN5bj6UBUxTmJond9QtaWrvGhqJYW3zYzXTYztL3",
  "key15": "2wf3he98ZcwKDkkNhKq3BV8Rmsa99sK1RzQEvMF6yzZ1BHtA2aAbEjMGxKqmN25pxX175typEhD57nCcAAQpe7k",
  "key16": "G7qGvn8pwYhGeehXy2nRQVB8xtJt8W3B1NjCx5pM8dx6pHPVSU3eteorTaQqqpqt7xo4JPuNgNNRgXU5xWvBHqT",
  "key17": "1i7mAJihurN3Wn5Va2huxpVFtyjqvrXJNHd7pLaygeRH8E2gmvdUXpRtE8TuMJE9rTMnzdfJNuNAd6ep72Eknqq",
  "key18": "YYsF6u3jTcJMrq27imCbrv67HbuVtm6RzbzwoK3mWo7h7xX5WdLr7sp94i92t9sBxuhL88nxoViDVe2uiSyNde7",
  "key19": "5i4B4ge5D1hiovjm3oL6ihq7APhDS9JLs5Auc2f71NKD356f1V8fFyAWBv15FcXyCX6xt2NPS6dunqerPE7PogFV",
  "key20": "zsygYc7yeg3WLCPnmh7w5UsK1n8qGkauuCR97Ci2qoVJVB3YHy9N5fCHiqHHKq3ZBUf1YpVsBfMxAjaYFtukson",
  "key21": "2ibR6afxZNkULE1Te5RUmse4sKp8Ao6jfM7djJjQrGKaX8ABaTdP2A93qRNqcYo1CpRsiGEUCS4kgjeGftFrsJWF",
  "key22": "ki7N14RfByFr4Z8YBw8fA63M7R42mvoUfGdCP4BQ2ypj2pavjabXXP69pNwR5ok9sKGpT5d6feWymJ5RKVzPZfr",
  "key23": "2QfSsDMAghoZ3v8vboCkAKQarXVJxqBSqtfb6ug917FGC3mMbehYZzVPt9zNc1TBUvShfgEvtURPB9YCdNNPA5Qa",
  "key24": "31aXbSHm7oCY9r4kFBNPBRWo2GauQ8KhvF3C4hwC7d5oADDeXy8VF8J5h6GHHN6UyScSqBuvFHuJR4Y1BhmF2zh3",
  "key25": "5SFkdUwkYnhAJGLRFqpSVHAK2JY3x7XGEMsthUbsHP9H5CzTBpKmFL15wg2udG7HmthxCYZZPYGvx4EPeiHmTid4",
  "key26": "5QEgFE8BKzp181zxdDKounSABwsSV5x72LWQWgE5vffAa5koRx6pU2JezgWDwmtJuX3P3iUhMkXb8YSjGNgRVtsQ",
  "key27": "XVttAQTeMe4qskkJXv13VRDvASNrZj5Hrfqg1kDGPvb7R4zDSuK3KH39qrvam1KZosW9X925GARk2LtteaBar95",
  "key28": "g9JvswqzCrqTntp8EhFWyCpLLzFNjgrSWkoLUpWM3oDXDWhq8mXws1XaicVLtoDmatMad3AaStJiHvJxexapjDR",
  "key29": "3n2w4JR8qHvmNn5BwKtFX6JZ1UPDaSZohQjAEacmqgFw2et5bbBbGNwULgLmMWV9JNX3vUU4VXv43J3xtx2FCm1c",
  "key30": "24isHP7V1iUzKyG9zsA9aX5CdkEdiaUcuHrRXPx9eNb5wR6ev7xv4xm5mhmw5dH7weUSVDf4CTrqS1oibtdhB3QV",
  "key31": "2MmCMQWcbpcJuTufA24s3NXA7HZJLQqeM8aEf6WCc837TZxDZevax7PzQsVcUNmSXyVr7sS5YDw2QkMXDpMp85dn",
  "key32": "3NXNcqT7HsV2gjZEHaTL6H9Cr9eQBfV3d6ohmWbvgWfDtJ439trYeH2kVtT47tRzRQVTqnwiuBnqH9n2o2rcgvWm",
  "key33": "4Pw1TVK3gUGBBAJYLosvt8c1UKiEEPGEmSdJjBoiyjqscywFDsJiNBw9HBweCbzddumQofA6Ujoc5uLzievnjkyu",
  "key34": "5J2RNXjstmy7WYFwtmrGz72FTViX4S37Njd2fW11oSY44zAZ14vpbm2xuEmHxFMNnBJederdxVcN6WxKLhetSB3w",
  "key35": "3BH8kgf3GS9rJHvo56Xz22zd4Ufm6E2a7HZBzwejUr4ydNDHPcun6HzqicMuB7LYQeuWBZ6RNYAvjuaRrq7qVfFQ",
  "key36": "2H1ejdyQ9AhnS7pGcNUr1sJxHpnGEXoFbEMh6C5HNreZCzsBNwZ4SWyvYFeQqB6bXea6YpB1wNQHRN6hb3n85UZo",
  "key37": "4FZz39a9bZogEZ8sMgWUAqcxEFEKR7s4nWa6N49XQdHe9UUYxyMDutfUdgddftk6MPsE1U5nBz5haE4A3W6EQdWU",
  "key38": "5bPGKQWFXZziJraTb1iAUU9o1GiuLoDNcP2Zr1ot8GkHF6Anvh5T2H41ctePg1fHPy1HGJnddqM566eTCiiLRLXz",
  "key39": "4p6Y88a3wdFsLR7kk8VgXh2LXDEAAnf9GGhp1JzQS65VN6PMnfByWsxdMCRbuyHmdDUoUTjKpm9W9f88VYmKxtwH",
  "key40": "5TuZkSgEFs2d1Ag1yVGqxFuUf8tbQGcxKUhNCbQXZuCeWJW9Kib7fWFurpesKXQnvPYKSNd6R9ZQvEUt7AJoJSWn",
  "key41": "q9TCoHhQZWTERqxLJBFSfvhUohNua22RKDThChef1ho3ebWt3oW8imH4otakVqgFFthNyc95Ge8YDFFiGCXH32K",
  "key42": "3uhLD3tx7Dvc5UrGXNUqNwYhAHez5QkUh9kduvKG5oSf1vYmJGFqbvD7wkpSXLQo2x4E4XSFZwEJQ19wFrTnQp4n",
  "key43": "3XvuDxCxA94Z5ksKp1JfZaAJhN6sjaywvuCiLDk8hsbuM8pF6qHvJzYPizpcHb88tZkuvX8pey6G9xcuEnwyRnrT",
  "key44": "ZwdXSPdyC9jTy3D29H2Zt8vQnDmfC68ZPSGhycRdP2u5NE9T2sSRD5wRaYKoiJZPeN4rBmDSwBM4nw7xGmyu5mL"
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
