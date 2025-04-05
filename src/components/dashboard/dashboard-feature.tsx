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
    "32GwT2Ei3bmQMS1gYUHHEUS6zjsaZa3ExpiieGQtfnMXMayCFxSCYJfLNKtwr6HjjQSpxDonsEVdXqgcD2f6Sk19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zcsim3JsorN7p9R382UMAru7fFFdp34pxCxfvBrXjVWKXFg8KWCWw6wbGCjM7iWgwBTt5NotjsugJeJuRFFNz74",
  "key1": "9t4QyB2UztnHiDUVy7rGbLKcNF5RGYuADfurjpa1wtWy43ZFj19RNn5Etc7iRmja3CqyjxEyKFVM38TdNbHqTtj",
  "key2": "5JxLmgogpAVRLpwvx41QwSr9ve7yEwcogQm7GDFwvgSxK5RkXi2Cd3VDcbbWTgbd2u5da18Uic9wgmsmi9gNLbn",
  "key3": "4DJD9GY8R8A1762HGtPJbx1f2isz3NebnQxY1fiFtXohqFEZ9tuEc6eGfkpKa11y15SLMq3KKhmoqQ6dtVkRYmPZ",
  "key4": "2huamiMq7Lxy2rZsvks9RmXGwUtf3PPhUjq56z2XHobXNM32KidQUF19wHcYo8paciwqqtcdrMFLoCoz79reBDYV",
  "key5": "3DnrA664Cx3xGKbej8o8FnNCduvxx2dUexbfso3AsD2XVMW2SGXnuG3Smb5rEb8Arq4UtxWpHizUuzvTzW6M29ik",
  "key6": "4QoN9d1MypQtpTEDoAmtjDUGhTuCJHNA4DmPmq5QPweA3fVVud1JWSYoSv6PcGAnaNg9mN1ZfKSxWyTEBQNTxozW",
  "key7": "3KQryXqMs2QzNBrnG9UbPRHyWJ3ttDqXzuKFENNM81JpbvVj6uT5FiTcvJpr4ThzSy2HoXVbTU425wCbkdJFAEii",
  "key8": "4QF7KwvGyh1LGC9hcX4rC5W7mPaKiq1gS9PyxnAWE7SvH92eTvufdLuLvDSNcVYEVLM5rjXKXkCvveL5Vh7fJk6P",
  "key9": "5iGx2cjY4ESuEpqoEP4yqNLL1mjAP3MWXEErVqAAXcQpGKeUmWyPA5kYk1cszExDctmutZGa14vzcgdYXXvbH63X",
  "key10": "3cZZxSkbv2fjWF8x6LpSTzqEHHAwoU1yqzRLS6Q9hVSPQdSQxsvn8KeiJGvzNUb8EBXRHUdBL7ti18RYigp1AZB2",
  "key11": "2t6HL6L7asvbyMvAscM7BVHs6uJwb1u3g7G5ixJ1QiEHRAcK8yRrDs6GSYqZpNP3Hr3pF8vhxf4VmrZWi6DQRyyn",
  "key12": "3an2ar1dN3GjmZZcETYWsMnQVqW32ZKfSyn7Q3zSwpXMqkTq7u8YoP1Fwc2JNHzYsRu3cbKAanfZmhg9WLDGrCKM",
  "key13": "BuL2c3Jtarnn1ahiULe24ynNCSAQJ5vSJMF7S7WmSvd2zTNd1qP4tPRxr4Z5X8H6duSRqLghrb5jac3tM2UC6qH",
  "key14": "5XjLEja5GmfAhbARXbb8yVU2RzgEixtnwdaRPffQsTB5zZNnYiPQJ5dGNyV5UmhHp8pfsjUjGjYfeSB8m9VDyEj6",
  "key15": "4TubxgrLw9qhpYZZDom2H4k1KR2DAVtW7EGCmCAyN9DA3ckJHwcRBcriG8VeANFMtDJEeiGCfzu8ERqwYbgs9sFv",
  "key16": "35DU8d5QVg2bMKUqox8hg9hCYG38ixnmHj1Mzm2vEyyFUzQ2EAMNnXEeu92vZsEcbgkUP7qjWQuBu8qX9s6o2Sk1",
  "key17": "2nMcCkpHPQLBFJP4DjW77DRL74ijpDa9oDfDxbWAZHac3y2Hk3775nzHR3q1rYdAuc4xFeGpbnNzgGua7nJEvVxJ",
  "key18": "5CgBQAnFvjv18cNCBGampmM8mvQgJ597MNsLHJ9FnAAZotvREoJdhS7JGqgJUBQJke2LtYei8ode4FTvzvK31Lmc",
  "key19": "59oK7tz9qm1BS5MUBJ12kaFo7FPpUF1LZ1KLYd4cEMYqcCtfnexidxssDuMmvNvZaTfQS7zfgsthHPxox59eemJe",
  "key20": "7DPbHnpViA8ut6Bayc477Kbn1sKZfcXJdk1EdvLAFKR788QuAxtMbpznkdJW3xq9aWYeMgGdzPsJYmQujLsdAV9",
  "key21": "4KYAYfBCHp4g5kzrJQbGvg2CfehDv96hCNjjugfMTNyqYRaG9RBdCouWzyLQb2AjuZ8SVWNfCBNsNr1iAxCRskQf",
  "key22": "57HbuVSRQHSWnSjBMrZGZJavKiZq8BchZWtcbtmnY3tqyeFKkv1qGtouqAWJTemfaHhAg6p6fsfcfdnntcfBUZEs",
  "key23": "5JfsXJj64vn62MomSdDnz9w5ZJPxqroQFUnmk5QsiPLQKt8VfEij2yvSfzKRLgrdYp4HKgD3DU1ZrgvfRo6eMJXn",
  "key24": "TtjyczRwfp9VG1kUVbGyVMLt21Py9BpRLCE9djnWVs5JDm1Ny7ifyqas9PWbTVywykjGJMDRA3bTY8Zez3prgPv",
  "key25": "3hCj74kkb25mSLi2Bx2pWxHvoZhqXJt3WnqMw6xikdBwBUWiBD25DBxyVAPky4UPks7dGJX3fcTwQA6UoLAdh8pb",
  "key26": "2reBGviTGUx9HgN5cnMgrbYuUHfZz3hsgcHBkLZ129x2AoKhyeSSopziqNXTjvyscoA2TVgx2Vw89jzh2AidQADr",
  "key27": "LTUMjSPkqMbn42227P1JDXNoE56kzPQxY7XfWcuw3yC4dpgr8ZMttYva6iZQQfAH7PnAf9VN6kYzG9FXvpp5moH",
  "key28": "4Ka89P3UAdGbHkNs4cmGed7AKiDqa2VtKiPhr4UUpLgRYTsFSVUtjSKDB6mHeXB7vS1VYpEd8Eny73yvMn6WtVyX",
  "key29": "2MWnzuvkYfDuKn7DkEReoV7nn2ievDbNFRBoZPKRuHUfuWH4GNdzCuLiANXsAYGBjvFCZ26N4rimvj4zEC9bfwJV",
  "key30": "3pwGDnC2wrWYeb3BmrCMjyi3hFLp6fnMAAJ1Zq7hU9LBcVbLya3wakHfh44dnmq7a8JGsbpyLbQDRw4bmSSvCV9L",
  "key31": "4tgcJvicuUvxLMigkBPApW6NZtvv9rBiPnJyNWeCFrkaGmNRscTmEGAyGaZTc8ZqGNUJ2oGQjiGSjGqGoeyDRr6E",
  "key32": "5vhozmwRttBBGEuyT64KGk1Bf9qdNUtnn8zBAndM9yWv1Epk3GNL5Nrz4rSAbQvYFPHQZbFDSUJQrsZWeuXRk4Yz",
  "key33": "Lqkp8kpfwiLG2Dz2ijCGVFAuiM9Vd2TVwXv9scTd7edUUnGr4m4gdV7bCSMrM9qPfnJaYmpFFuFiTi8KMLHknAF",
  "key34": "3nwB7h4ShZm39xbfhpaTkhWR1hWJbacz2zBtkC7Z2VvLkK31VgipJDX7siUqcvfETmNTDy2KZmtg5GKv4t6nohu4",
  "key35": "rXb6jnjdXVhNNrfHkVhstT3Y1DhPuXQ9ytshuHBsVtXLGRNpXgaBiAzDjjA1Gp8XnhYXTYaEYVrDSgN2Gqh2Kpx",
  "key36": "5tJdtm4Dvja7AJ1grHeYvupNVjNAB3ZhP71hYAqcpJLbfcUxfH69VsBkt1tgJC85VC3t88gdG7p62VxrRDii5mtD",
  "key37": "5T13HKgWYpzy8tXvHXCLGGoGB8nmFu1fwXe3sqc1tLEfFcvZRoKnSf4KhCTsoCKWJ7caRUoPBeKWsdYruc6jR3Nk",
  "key38": "3D58PDoUzvuqbH1hc7PJVRkZuVXfjL2R4zpj3kHwjjPKSyqega79ZcF7aRzqUbnnGMKsC86iSApfFPNRCoj4Y47L",
  "key39": "Q6G5zo3Bvdz6chEWBBTofyL3shrbvwbVNFproEc12fcNgBW3Nn22eJVLkjgLQarXguHSaFqor5iWkonkx2UXZuc",
  "key40": "AhQTvqE2rw7u2f7mqwqZYr5fycD3UXt1tozKRinzu76TbPHs2RSmoResATVLDm73P1uPbA65RsC36ognAqMCZcE"
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
