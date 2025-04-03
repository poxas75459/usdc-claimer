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
    "UwuzJ3zopWf1obqj45t6rpTskSr2kZfLug9U5cjyNysoVvNJWpXNtHxALzroHMnWYJ2zADm1Bh4uoiuSzgG7YDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C6Uxi6949zmmhyDGUoPpTE8jWWfHXSy2zTtZwwNFkz8qAkLAsvoxPAhL3X69VpZNKJuq7bQruEAoKQDPWJmgCEA",
  "key1": "KsAjHnTdov17HdGP39SysXRXRuzXZVNy5AvGxFBakEUGwSpawD4xmKGaJXPqzuiszmHHpf7CrhndhqJPrPxgDrY",
  "key2": "4ogU7KkeMLd2GmiXvAGFurgpGmznMAxWekH6ea9HqPcjwL35N8DtTJ8m3FxyKYZrq2Wf3XFhoT8WjFKnrHGZZJGD",
  "key3": "5jDkaWCDLUmqqotWop3S33TKMmQ5wrnAdyhfqpdCBUkWcbYhN8JkVLthTmqVaXwWiZqERYmJVaaVCxoLcPmRAaUD",
  "key4": "5sptVbypgx7H4BHJpQojgw8W7CD6q84UvkcaY83EFUP27kGU7f8duA9ewhej72tSCC8FAiAwNnG67TyLVzsjS1Hz",
  "key5": "4jL6mwPUTFv7q6SJbEJHaj9JkAyvcyzDDZnZBjY5h4JWe93o4XX4L3eCpKc8GDM42nhD32c5wAdhMP8skKMHAoCm",
  "key6": "5S3VcBgB8wfF9Pr9QNzi3Ns4KcKQwZGijY868hWHSf2StZdk5JM7ZvSxsCcYGvf38mkKsSrPibniUR3bZyraBsMQ",
  "key7": "5fJKNkXK4w6MHFKoWfvURSuji7w1yutYJNvpbf3RYGPSRRFgr7ykVqSeu3LedNT2cD6QPAYdnfkNUAbHFiPSBLwN",
  "key8": "5NtTJUSMGXu62XphaUZ3M2A4KYKzjsrAKP3dLy3UPeC2dsLpLbEAFcv18x58cdp6p3X7Nbhnvn7sJRM65cR9MvZU",
  "key9": "VoQj6Q3VLqPj3TSZsvncLx1Pt6ZEf6vW5kATdCQFoFvSDQzDqAVpNUxuiMfovvTekcj4GQ1TK7Sq2ZWDfs3t9VV",
  "key10": "UE3J6tQfaCED29bhJsiesGgdyDRAvRTgzRUShkPx4wSihJAm88M4YuPL5PkH2WumC9c4U9YdHD41HvjbSAK8ibm",
  "key11": "3zxVHY3Tec8MVqQ75fV4tnpYJ8j7ESDuA5repgSvnztgsKfwPTL1joXcPcUkARJTritabNnVDiqNYeELeJRmCTEn",
  "key12": "thzfKLq7shtcDuBv7bTPzEvSBTDX7U47JFVwy6JXjtHELt2i4SzcJ9WBzy31zcuxsqsVRtYTagT46wwFBxtNY1M",
  "key13": "UwaZbS9k23fG5CG3F4kvvbcQiKXeX2z5JLHiZ7jbjETbrB3qn8bro5j44L19cqGgTbx8X6rUrEHAjUWysoVeT3H",
  "key14": "5Cz6g6gJMCXXmLGKx8QPqjqJL3JAAEDQL7fXi3xipgr1ppCCuosL73vHkmEzwdxezuVafY8LVsA8HXEpNk1AUUqZ",
  "key15": "3WKat3gRNsYzoCG2dBGasmzDjPUgX5WLTdKqAe9EFzSQ8e63agLoD7mE8k12bm4brcAwJ4n6jTHL7z5aCzySG4du",
  "key16": "5Wac6uvEjtZKjKfbWgMNvUxU2tAvrtay9YBJpxkDr1DijJMunchpHaAYDwp9fYSLMnWsNfWgZG7HkJ6QGvZhaqST",
  "key17": "52RNxpBABsz4sbxh2JZUUdgeWViTZ1qchmXt2UnwKVzWJae3JpCXjZmcm2FyKFvhP5hcZV7LaQWE1a1TezRjjywu",
  "key18": "2yHwVTxgEZQ6gcZX9xRTCMXKfMsd3jBDmFW53TRiy21GygcsWwp2JuQz2LfiH8KtA3SEBa7P9JxyYJvjwTz1DKez",
  "key19": "4zUNR5k8NKTBQC5A6VUSpqEgoWGr5LPujcS4Dq6RCdpBUSdE7yThe83SjWfMMTrKy1boGY51d2Rq9QKdZhLRYqhc",
  "key20": "2githccj6Vn6JWW1xE4AVerieiSAhHMJtEEdvY5KAPHYLX9hJuXoyiezxbmnZqaF4CYhhB7zaBd55Q9WSgzm4DVi",
  "key21": "2aV45UhQwR3cWHikokCd22ZVxPY5UvhsW4LRDatZA1SkqaryWtZHEmKr4cSbwNKhXAffaoZvircGTy8Q1SxRMePo",
  "key22": "2NBmhnzxgDuK5dMxjGhwg9Lwx3kuU632w8pAQaekLMRAKUPRtmzjraNMcsfTNBFoMtCqEXayX2RUWUQtdhU2Ky92",
  "key23": "3AGX8su3S2n5uHfKaHkrbnX53w4ZA23rfhwp4TBqAFzTbf1hgdUDV6znoguqwnCtCT6C5sidpJaFf1aEMsPyk1FA",
  "key24": "rqJpVTyZZTtSRtPQvVy32RZycLXwxFvvXUGJUAuyT9ZqcGzjUMcdy1Dat6reLkK225zX7uGa6qmentgGgcq4u6o",
  "key25": "34SsaUhKayJ1sCDPa6zjAGBLsuEeJMpz9J3Nz6jcqfLL6MkbFepjwj5BzNmQh5bQLDFkGY1cx4GLw6Zh6kY9RUXH",
  "key26": "22hBhLd2a557NoT6s9aU79RB5T6H3GoVti6o7jrQhqYJYbbswVdfuJKkaBFYHoLtDdTWueWonw4R4PFxLGQMpTDP",
  "key27": "2cwbGyTwJYTZk5svue4Jr9nC6cgwunW6bowT9fYwgepjSqndA1iQDAtX5pfePSnV3MpAeHpprniEbJPQeX6jRnfK",
  "key28": "29vmokSXP5QvXQB17iAZZtZ9apnK1aWA6xnxt6CnAzLTGtR6NQgAXJoCqRYhqRnf3Upgq2Kxmv3ZvnvBEQJAJpGb",
  "key29": "54FR5U74u4Nq1hxcztzRVqoPMBo7R1Ls59AXF5WBuHAq2Fg9QFdgMuBtAfuWH7sMKmcJje6VrSaNFUm79PKFVmeX",
  "key30": "4Qf3DkiB4od4oX7PzxaAWUeEx1dYVfpkMBHJvYzkRD6cePvJWPCkz9jnAGhSjnbPhEhBgHQwpQjf79tWadscj2t4",
  "key31": "nfQLYdSbT9RaaD46gqfUwt5tA289UrkZQoaL9qFfyQARU5Nfn6iqN3guS59t2ARZLMnYfZPofvzg6uCBqPRBn5r",
  "key32": "2tPT6APAi3Q3SZ82U2i6kByxYeUuoDCCNuQp4x43vtHW7hmKVR1ErAX1mLfRrZTCpqcxxkGSA34xuvyYKVG3Huat",
  "key33": "2yu3Zbq11PCJ7wjmuiMwNnvQjXqToETNLuQbZbqA4FqqcYrte7gKi8oNe61XVDVTpcXAG2TQZTRhmgvYGYNFihJu",
  "key34": "4CT4WaAPPWtT7YnwmK4dApGA42QFhmwH6zZatXH5QCBY9ADMyMA8UuonxtbakGQJwMhRCCQA5XsKjgXoNXpCrhVo"
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
