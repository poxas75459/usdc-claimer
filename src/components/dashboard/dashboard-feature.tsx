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
    "3bUHdw18vqsnVUKGfSRh45etjVWWxr9WEZjdiXBWRjvZ3thWKn24ZNs5jSdTjnew53tjJpuKBSfASgiLsi3hXcx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E9auJBxzf273DbfrrzqFf7ehS16duSGW5THWNAxefQA4STe4JDNU2eADFhNFNSHawR1DpsD1HHMKF4Ve59epxjR",
  "key1": "3iMupjWhFbz48c17V6R8geh6fJ3aqhiUK3KUfqMrfi4C53ngS6LpDtQj7rLjxCx5Nh5xYZvTQS6NoUWjVCUosnHY",
  "key2": "4rJvTWzxni4j5Ch8evBd6xiqBv6jy6jKLKHtb5qFBgF8xmBkkabzriwaU9Zq911Z3ztvUDKLUBbFSMAn5pVoZM4C",
  "key3": "3xnv5yPRXnjt5qcG6Ejb8EVVudvPPe2HQjc5jDfyXGoq4QybPumJDrscXZoCTUsjhxQivcx1ZrMtQrrm4V97YAiS",
  "key4": "3TLE46MfmiWCEEkb9qBCYwfMpCWG572npYFNr5ZrrdP5HUnmjSLxGbFtmpmVRqgw58dMimwsP5wzANsQ6jVpY9Zw",
  "key5": "3Cjt6ZJevBCBffSJydfycHdDm26xtkjjcxGeCLw8W5TGmnGBLjgnFLfU8MgaZf5esJWUPgEfhhSmUPURnSvaeJiy",
  "key6": "2cVUkywiqSz99QEAbv8hzL63iinKqTdqk1PU7QHXJCxtcqfpzWn3mEaxi3g1Zh9TUsRZA47wQYTfuPo3ongWQJY9",
  "key7": "3k2FF21MAHk2Vmp6yvpu21qGdZhkzaw68tenJ4GGoRUePZ7Jk5wfZNjKhWnUJXomCdxQbQVZ4eDeKGuTPGnPaZd2",
  "key8": "5citGro8wqybWLubMsTtt3JvajcX7aKtQpowJQdjcbt3tyG27hxPiauEg7fpWRqZ3ZM7JbwxUQvpcSbf2Csrkyw3",
  "key9": "2oai6TUP9GnpXY8t8p9mDd6Fded26uEN3eMKW4MKjw21ivkYE7YXyxK3xr2bhdRsdUhefMR8EyPT8rcHckwU85Xd",
  "key10": "5SPqRkBduHGFN2cDA1vKZRHhGS6HRQbEbiV6AdFx9wdv6f91adi46oodmaeeSuJwxwzx4dn5s6LjzxZ1usmrcq4h",
  "key11": "5W1TiS3juxaNzhfUQsqnjuBizDEvwNRsUnUQipAU782GMnR5freuP3VxFjyhAWba5FhEnTutV3MNrXZooJhbo8ex",
  "key12": "3zpC7sqS9xwQrA1mPsbHEzygzroE7JVU9JJF965vj3JWzobYVLuSorMMTTRRzqKt7xdWMHKzjE4q8Df2B4MEu4c9",
  "key13": "4LfVkWZbt9QeZYjQCZPwNLEDiq8o9NjTSepLtoh1LkG6BbZCmrSPpcosZYQf3CgrmecdvV7bPgS278mFfvnEMRJJ",
  "key14": "5A4Ut72yXfShZ1j5JqffZM6QjWj9zrNYenrekfiiJWjv9ubfKkksfFA7rGn13JLv1TtuV7pc5JJwd1R2VrggJUUM",
  "key15": "2PgDXHPzV87hSix4GvCx9jxWhUtW4PJFotmxAWeUBk9ix6iV5oya1dnx5sLUXfFdEapvvwWU8f3rJYZs7XNP6vKJ",
  "key16": "3cMnPcbzUgwHXrcfgcf2sdimjxHvvApRz7JJ4XtcL1Vr8wVoFxbSRg5FxRi5fdMCfo8abD6P5C1u867L4iUZf7nJ",
  "key17": "mvPgmvcEzTeRMdqMHPgK9Hn8qRVJDTLNYhxoGbpdcfMtXkuuWAfHXnqYCxJYTnhWvFyzC59q12zwTByRoCR9aai",
  "key18": "5LmJf55m4CQT74FR4iAun6G2UURS3WJ2WQswv7LB964oKDwS6Emv4Y1MQuBfouu8mb349aDbZYsjArdD4QyBWbfq",
  "key19": "zTPAueDZtzvcgNdSC9CUV1qCBmxtHxPeqLPhrYvZhCAnp9Dnvrf9DsvvzCVExnoWB1SU1WBeFCZo8w6RjQuae6q",
  "key20": "31pp6hF9xmUYMhcV5BadcRgB8DWSqyZNnD4HSgGaprtwPuiU2svfSPGo5uioitHyRMYiXUSAmV4fCdhvn83Brtof",
  "key21": "5hdApjXsQKX53MVkRLHppU3sv2uTBfmvWHS2zDBLSVRCjRPfeYHChACevhRbnFztma3WYgB5DAfg4WScxDi5mwLB",
  "key22": "Zs28iPCwS2yqpxEp9484iCAjWXFTGN7aAHnmNawKbMzNH4AUixHKpXinoVsPi5ExZLW3sfN7fJdiUnqHexnAd5d",
  "key23": "27G2nNr9pkah9FvCTDQCscScaEwgbDXPXnjZG7zv2rb3qpgVr4SurRyoED76hruMo7ETm5Qa8Uos9Wsfh71nEeet",
  "key24": "4L7WHkEBQFEKwtacBbHvFDXAWBSwBUijW6YSBcUt4Ve2bTnVPVzSTfVqisDyMAN5ZM5PKrWF1CGHjEMgtiN7zNUt",
  "key25": "4hj6p9xJT4wVnZaQGdAYiS7rZdTxLmQp1KuiMuFAATN6jxTnGiEW4rEpWZ87RqahexPuxY4YjhJBbSgNgiH4HzB9",
  "key26": "3cxvmGdkgpWR9Ar9CG8aWpoMteRbtwvSg67bkUqJdNnqwseiQFRNq2JEMdo69iNKAPTwzhaQhMACgcaCN7R9cRb1",
  "key27": "bbudwpwtEikqYWTeoQmviQ7HmJd19VULKbn1TWNxMnhgQRcRRJ3qb3KXUgp7JqKEr67AHpnog44TGACsnV4gjbA",
  "key28": "2T8RDKCmEtn4ZDrYgE9h7bN3VPjS14ABL366f8pe1FcurRf8ND6RNZJhkDrEnRwHGmM4wG5ZM3jQ8yqx2MiAYUWN",
  "key29": "3wuBmTEDgz8DxeqVtT53kW8KBd3EAy7B1kgvX4nyDsrh6cirH9YjUB51xzCkkPySky9weBwiD857jXUL4g31qpWu",
  "key30": "22Ewu5VFtHDZyUbCyAvptikXcwW6A8NyqCttJr68yNX3C95ZuNRwH5RUVtLjGfwzp2QpZVGGfxTusxQwvfCC7AhV",
  "key31": "35NtfZxPHi5NNusAdaXcwMVZfDY5QVoKqGVr36tXhnvQwHhNg8jcGimygo59UNj3yyvyBPLp1Tq9CM3Comxrcnn7",
  "key32": "2Ha1WdfFoKfkgP8HuXRgJrPcjBrg4jjmymQ1o7PnDyMs4y5roBMRsjfezq1LHp5fmJb2qqMQsohdmaxqv5uuaRFP",
  "key33": "48Gn13Et5q1sagLVXK4JfJXYws3rc1r86THmWxHXPhBMVsJXJEvKVfWiy9VYREqjaPg8ha6mk8gUwyV7HgkdGNjw",
  "key34": "37f3R7GAfJdbBo4VLja76RXWPsqLneGqwvedmkmt6Q9Y8Ujaon63WNyEKfK3Faubv7YnEzbfzSiqLqgM7bBgXUxg",
  "key35": "DWYPHy13V5wNYZezfCYKNDfouxPVXxxqLPgnhHKi19XF9pvCzHjnqV49zHgwaZ3AEumiW9dnFyEzKGMRajx6Foz",
  "key36": "4wx4FRBu9FYRSMYhTNoghSLDr7NEyzGmfBbGonSkS3KPX97ZK1qyfsevfk5Wu3D1EpNJRnJia6djN5wDtLXYmp1H"
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
