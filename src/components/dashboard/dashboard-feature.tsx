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
    "4Ek2ChmmuJnHbePkGeoyevtcEq4f1CCCwojWyrLxbh9udjbNAjN7w2StAQqMZqAB1KjsQqBpBNHMSzRaPh4fDVRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yj7qLKNXTsuJT2o7o5wEkpsauXBmtPMBjCEBhSRmtFcBew7WGEhFGh5gi7J48REVLgKPMexTX3r5skMJTLBMJTx",
  "key1": "26TCcTjGPgzmWERmEdCgEXeRfhuMjN9dXpcE8rrNRw6WRZxXyHArSY6zh1S74FJYrUJPu1xRidjXJ46wf56bwE9g",
  "key2": "5RDCosFatZsSKzMNk2wCoedhTfuiYZMVfsf4zq8GCdgejaQteWSorb7MuV74hmPfKtKTKWuCit8K68iJJatTH9J1",
  "key3": "4MEeRguY5cvscQCPNWxhu6yQE7VjFqGvPJfeGjpsoPLZGDj2aig6eR869jjJbrc6Gze9GwihAGnhqk3AVKyTz282",
  "key4": "EYpP8edyqkDMZvBbHDGoHZFTN8RLb61cGxS1KzyP1QdM31nfKpKy47ReWQLGkNAdWQJqbva1fnmWhgGDphfhsGS",
  "key5": "2kzwDhwKbUQvzQgdodGeHLwSHUW7wiNM9RTYs4Qfq8Dgrzp4hF6TeFY5rzRYdTayXxAuxshw4HYrtFQXvGeYQ8df",
  "key6": "ovnbuo8SnSwmymDKNi1w3rpQkYptgGYCRxXhAC5NnWnC2A97ZwmZ1Cjr6EjSGZc5rBm7EKACNoWBBkqEU59gifN",
  "key7": "4X3BwSqBRfCu7aVtNX6odt4qjNmFJfts274RrP249q2tRdATs9RK9faGr4JzqeheG4vYfpQaaccWh8hv81iEL1x5",
  "key8": "4bunQmKxkcnaq7uNAwk4fSASskU9JPhab9vtAh87RXfc9briFagJTyLN8vVYKjzrKLHLusR3aBtwnbgUopXeX5w4",
  "key9": "TFgUSNHwHQn4WB65uMERbKUnhy67hSZkd4AaenZ8535oHZVxY2usrSnJNSM9kp6u1pgidixwKPDy4NL8uSXS1YA",
  "key10": "3oo8aSxxEfx3b3ZNLNE3n2LB2uuszdxhLPoeFqZr7MpP9MjY9CjkT8owZhjqbSt67bkTVFKNyFJobjqdFWyBvCMR",
  "key11": "5TTKf8Aq2vCsvdyZZHsfNgqEGkZm9srosVqfMxuBKSNWky2nh3pBa7TByUq38nVyRPHJQTNNjUVFTigjyjJcQsXT",
  "key12": "5ZSikiDWN4UrFkBhdZkZVSW2cwbXzsY3ZdaVEFp92J3B2CUCxWxY779A5FWBSpVin11yWYuJD3zri1ZZcgGKz82H",
  "key13": "4AoL5jv7McsZQfNrd26SDpj6yaDPLzNCkESgFtty3Rut2ki2WwpR3KsQ5xZEhjPhLf8LXNSj7ki9me6bV7kULmCP",
  "key14": "3wZvvzSDGaLd12oMv943CaRwt4nYuQpthYjah1PL6i1fSHnEGkR7XBosWho21vq3N3W12kzDQCMeW3qAgfrUxXRk",
  "key15": "5Ep9CbCX2vYdKtsVHtRszm6hewaEZko1hukawLPPZ5Ni1YuPqXMAb4ysWjcQamYtSnQQZ9Yyg4N6574DL9Jhgn9w",
  "key16": "3cSHJmNNb811Jt2LS7vNi1ewvbGBUYTyoKuP3e3guP1gDJQ8UEn7T8rsc6STMgdFu553H2hSpdXhVSJnkVTe71M1",
  "key17": "3tumLV45h2d4qJ6g1AerrSzc4BXTeNS8taXkYdT4AE7QpYM1zWoRz6Wpw3GceS3EeKo5xBDCBvYv5H591Csvoiy7",
  "key18": "3vD8SjYt9nZmhztcjY8sHncwaVmqzdmfjCZgCexdBifJTRkKn3SpRzPqEuZKrLNxvUm1PEyu8eGxUh18RBYiASDH",
  "key19": "3zfw6UNt21NSgZXmCAoVsTHFP5ZbYRynjytkt5pMRL8rnJRVWi5TM1bNiLMpo99MV3h2wYp8EsAQFPgesAFfYwF1",
  "key20": "vuDuG7aAQnpTujvWUe2c42GrfJHibBewugvo4KXYB8GLg4adAuHyTCs1qEDLV1YNB3195Tzxmg7hX14oD28zvQd",
  "key21": "4Pw7MYTxgT7sDsQdVaD7L5V8N56HCv96aoWsvPuFnjNh3xA2RidMpF4e9Ta7HzD1ouSzbZUjvhzi9NjzkPWWtRGh",
  "key22": "5N6geiAPMJujaKgFZFWn6UurrD1JDn1fzNC1KYJcGHzcMJ545DT2AZZSDEGRWKNvFDkFWTWfu9TkwYwYmFrgE6nf",
  "key23": "YM9G5jW8Ht53wEz7pf4Wrvf2PukZGLPJAjcXN7mFhCZmhb64V9FwrqARpMh9JMFRtPYgtMhcoeyDiNi3ZXuvr5x",
  "key24": "3iX1LwVfkPkJMSd78bKDRHgi8Fu7vB4c4Cy6YUwc739ooJ4YGKLHeU8p8fkaDxa74RokJS6JhieDYqVCmLV7XyFV",
  "key25": "5yRg3WhEycRCxBFaQ72QFKWJxvue3Yya9mfXJi18Y4dTtrYi1Am43mbmPLxS8pNdnDymL75L2EYkMbCUAbyfqRFH",
  "key26": "5x7gqL9zU2okY62vHBpH1CnoezG6So42aeQccKm1ssNYVT7LjYAhToPbdST5VuTc5gpNQp6qKHSho25YyZCTbutp",
  "key27": "5hi6aTf6SW6uEXKoMxyGDrV85aWFi8KwAvqFqzyXdj7jvxzDA8AHCXtGvKhxj383gxGnbjCUG14NXyLYcpKUqM7K",
  "key28": "2o2PwakTwq7SYBjpLKuh6aYexWnq56ocPYcFvqbLm5fZMhvb25CjUzuUxKKdhNjcvnov5mTH4GZeM4NKR4EGppyr",
  "key29": "3idRZJCFVzobG2NKCEyeRPtHD3UCQNuWhbTbzkDCnSo9QUsqkPGavxC9wbeZQoFPndGvp4fJEqVdZcXduY8Xzbpx",
  "key30": "239MrMWFgV5H9tPj4fRmYB1TQ6nF2SbcZnQqVvA28W5iYPiR6SHP9U14bjx75MHVkrk79we5XtfNtSfZDSMPmVyA",
  "key31": "2cPyMnmnjNT4bTpvoUedRKvtNUC5p65pzhrYnyyhVJZVQSDihbNNwK6FSY6geYEZ9geKqeTqzwgC51r82uBdAXu9",
  "key32": "2dwL6DsgoVbQ5Z7epbMP5prvkDR7BvM1TKGpY9BajBxX8HVrzFAczDJsQWCXm8GtPgGj9tNLKMQAaUmScswXNX4K",
  "key33": "5ao4jbBCmhyJPm6F9Mn87eCtvgbYRjMPuuYDg5Q4jULRbkh8veEBEnaVn5tf9a9RQjpZHmh1UYDgGQH24xbmwgRa",
  "key34": "59bJnxUkgYEan3bxn8Ro9gMnTiKbX7wFVQG8pvNvdszu8PzhQewmmL1vNATNff6Jg1z8tpFSxvi97tQhU9c8FoGw",
  "key35": "nHCSQdQEuwhmcNtXBFyybFoXEp5ueM9C9Ueopzd8UrRoXwyKraQH9vfKeXHo5NV4uLK5bYtzPaP1DXp3q2fCuVd",
  "key36": "31ekFPpfqmeq4EXvQaJgWD79yZdkMGtKG7RNvLcsAvvCWhu7fFTHsXPVHjPbbie5tSJkBjLfitmx92u13m1Rp4dR",
  "key37": "UasDLNekhiNd8kRSVLFadrjFhpgbzZKyLo7jLKVrWyk5dVXELFMB8yF7JbJta56bPeQ55uMhNnXXwc2oK5Ag9yv",
  "key38": "2yonoWkqN6fziCinc5YdB7b17fdDqedY9YkgqXK44X7RFsdQhnHbbjTrCm1X8b6A7cz7owBJyu4rGgRGiotTwHKi",
  "key39": "2MpDj2LAjjKskyp1xgDNeV9goocbiQimiMYmBK6ofxzkjstCKhPwYVCAYLJeJ94dwfSCGRA7VR4m34xt9pa4xKEB",
  "key40": "2VZaRHNdFZN3N7XRSvoWRnyZg5oo3oGDtaLiSTcz9szQVQrh9TWCKbVMJ4oVed8rLcrDVsWLjsDY48jRTWkAsxmY",
  "key41": "3HCHqPhafinAuhqy1f9MtfnBanRhtSGdaBLqPF6Wwzur3ZGuqs6bvnGnhNoVPAWiVfbShgd6YpQUhE3prvWztaCH",
  "key42": "2CoR6hGZxS3cc4w5yzNBDR7vjgxxxo39DvmFSWrxMoLHu79TwePBzstRw1iWBHLxhLjroRB9zHXaC4tVBC89eELD",
  "key43": "9E1Pp41EF1iz9H6Ay1CgvtUrV6kdN7bYHrahMS33x3RH2o76pHZZButgu4Q6ws8XDXnqqvUc14Vwyuqn7cQ5imn",
  "key44": "TCuX8LeA8N3PkXCbJddyrMZf7jMCbtdmnL77DuGLvwvpFFCgar2Zn5xAMmtpKu5nPqkHAfW7gbjrx2FRgHNLRK1",
  "key45": "AvKdcz5LRUBgxpyjHijbvewjedg8JCKyYXivicTuesexU86ByrY7ERdpZHDmqrJTemQpa893PM26wPmnpRxpaci",
  "key46": "5HzXVGZnsQn8f4PGN5ktSJoasoB8urMRXwffYyXEHko9n41iXHYWVwQcKKezyMAbnojvLMDNU6LiGsAZBnaNARGZ",
  "key47": "2AZcRzRZbenSUC2wc7oRpnw3wpJzdUPw6GpAEJf8qnMKNezpL3qhNxLfULeUzNEC5TV8WBTqbpbEMwangZbWEc3Z",
  "key48": "63Db8WYA3rkw8gaaLYSu9tYamgV2b9byWm9RGUBQch2SAtmvk9xsYHp8TTKpcPt6xSQ8gXASvr8BE3BvhK5dpHrZ"
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
