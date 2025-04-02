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
    "3ZBd5cz2k3Xtrumx2XywmPpLvWZj7LKxFBBJCAXUDbPTyR82GewAKDsPMPRX8pPHh54WcUA8dMjjL59yvmcosGvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PZLf9f4izZBGvUcxBaQs9Y7jMo7YicKzLuFTmEJLB8GNY6cbCjd8SMDT16WuBMCxFLrnLWziey7RdNBgMa19LdB",
  "key1": "2JrNfPn4kF8RCr361MHEUwU7tUPxgfEoS9BXGPayysbukZcyyndRY53pejQkQNJu7RLsjTfe9foTGXUSBL5vzthQ",
  "key2": "3VG7ePrYv3VoXxaqFCXbSf9h2ErXBjRtaYuJ3FNi869hs6bA1ybym1tXBJDyEKoEGQAR6wKeyQAMjB5DsGVCHNCx",
  "key3": "JbJrS93oCktbDLkdregvaNG7wpTeK44idX3TC26PinEBSUnvXcSbdXj6YE3DvoqtU3xpPFSHqjFhV1H1LpJf1DA",
  "key4": "4Q7ignFPEr7BgcjS46GkXX6VFDz3Y2eJwRJmER82BFqZFPtfvPL9WpT8LgYQuFs1k9uNqdHYcRA3KGaCeaJR4SmW",
  "key5": "4xTEV7tynTzqGUDM9rvBSSVAjDC2u2B1ehwtkgKk2PPxYnZjmkTbhHFePrwkGE497R3cMwNqvWx4Uq35CeT1xcwS",
  "key6": "45d3ERU2sqpC9uGTceUUt4o31sz6yVZKQ25wLguJatgBAyzXv4kE4i5hzTafSDozF81892YVBzdeyPkjQdy28CoN",
  "key7": "4gXfZMtmBWSSUiQ3i59v6usmjtcfkzNLdWXRUgJsYtNRf3kkB9ymxU1DkhnT8v4EqDw2didRaZ1tPyX8pFYijdG9",
  "key8": "dUvYSuzv7ahFuEQHmNWYeApKaM68q1HYLSXG8EdyYLBR8z4zRWrkdMVCsSogr5rcGG22T4quivsrjjinVU43qHM",
  "key9": "pKJwLTdytZFpvGH2jMbvPJpswY2hJHNhfjqgdCKCgigdaEfKnngs7vg3dsULogGT1DqDQyDzdZ52X2Tu3H1r7fV",
  "key10": "2v9mobUm5xPhrMLi44Enugc3aGjMQJWqg8mJyoYWsPzvJ2TAE7mKLT7v4fa4cwiGAbMWFchcXTqjFoKwE8Jvph81",
  "key11": "Wwb7wU9cAn1TvYJyWYwsYSEVqWuY3eYy2eoGfH4fedboYgzf1Q7owt61YpR5rnJeQnPMbCBk1t9iPHJbXRjtWHS",
  "key12": "2m5Q5irkGmTCffxJM1i5kjEQ5igBTWcX83dfQ16Kr2FeXen68UHEWbTViVvBTeUz3tKCCWYYDkHRrPnVkzdbSxdR",
  "key13": "W1zthYn9vddL2rXoVWYbHtuhGRKyrtFafJXAJY3gBadWA8oShnNAsoLgysM9nsiERTa9qbY9ZEwiULrRBzZ8K4A",
  "key14": "4n8Ufa2uguB6KXas8NDULBdihMCqunbYYFY7YjCTh6ygWduy4dxUF8pRLkjRtc3k9qJ8sauFd5i8tqsTLSsSTU1x",
  "key15": "37h6u9sHpSU4jjaRQvgkdZgvWCmB7bJJktmBnbJedaP6e75DecLH1tSLYTvE6B7ptjQ23WggTUTScMwTfdMWnRk6",
  "key16": "2wz6ed4aixfu1WKWxzbBdvCZNTWBjwXVCMFETE4ydACLMnEtBuhhXy7RSaamB1DYVW83WLs3WRkARp5KV78LPSUX",
  "key17": "SqhWL2PX6Xaih8iPwDfhWyUpNH8jfxHVcfY5pVvqMaVBNsoUSR1VRa7gX2jpAd9dWvk63Hxp6HobSHS7pBB17cR",
  "key18": "3wM7f7ggFSHA1Ve2dPyN8MZmNvuTAdejUz4NWakXrhnF6muMwzQwR1TFQ2cApn821iPpvvWCyzBXmTZSMDZmbY5D",
  "key19": "5un8q2ahCUvf11LLf3HfaLmJsqRQtiZs2Hn6bkLHKP5hyv8K1EUpAysMtuYTbmhrWJ288ctPyy9udGvQfk3CKScz",
  "key20": "45T3QJ4DtCyQsztpytK2knefGd5Q3k86E9N9GT7zBNFBVFGL583afvCFFFBA29ys92z1juBpbtDihAFjvwnFVA72",
  "key21": "3B8qKg74dgiqXVHs2cGzcp8xwFJqF4JrLzoojf1wQzRWgvwjypKE2Zfc3uRdwN4m8EpGXza1zvfAW8SLjcCo5MJ3",
  "key22": "7BUqvcwMJaPf31QkRYS8PaeCNqonVNxRM8uaVht51u3vpfzWp9rUNS6JcDF9Vg7aktjRuUFW9GrCwfHLYrN2VWY",
  "key23": "4QKnoRvohRAKUW7nAqfk77evgQEXHNxPk4o9aKE1MLdqisTnapJPVEyhrM5fCsKPfQbdpxcNe5zijMCkyGA9v7C8",
  "key24": "4gycAZ9HdY6vyuYJ3gjh2aiuhBTuxxTRrk9UE815pRiK1ib91EzDzWfZXnZGCeF4ukQgW3kMEkUDLSKqs4RsLpW7",
  "key25": "514WtLyWVJjjdZNqL4pA9n5LWWmH5BCPQP3aH2qPVra24k5KXj2DVEWZcqg7FyAASexmCbcV5Y7SaPYAHvvWBEME",
  "key26": "53ga4c3QTkC313oWc9UrNY1qRZV6MLXPSprPPeifCkoQBgfq7FCXzKbxsHXydkb3Zsw3bBX8Ao2pxty42jAy1ZUg",
  "key27": "4aMwEqjMcbXyuMw1mUKk4UTtpHVbC9UrM2gMxg3m2HExCdB2CiLQke61mdZP3u4CXYVbsJ56Ci1Dn72Gbes9upkA",
  "key28": "AoJKDg8fmaZfMFyRammefT1M7dhyvist4WiexVhcSufK9yf28TS31KUpQNxd6PxzCUGz7KY1gCTBPkGqUyLXWmJ",
  "key29": "EEREAv2ktazNvn4gFz5yNjas9zJCnaeDq8HDHZYwWewEVNha31rPFQ96m3htcz9F1tmgfUj8wHQnxibYfUH5Jjo",
  "key30": "4nXiA55sfsTMfXYtdejiib8rYcCoP6qucbWyhkX7GozZeinq3eLM4S8HUfc6jSJ94ncS3gWou8Xta8etw34pa2G8",
  "key31": "3nkxWcmRbwgaFTevaCSWjQWchHt3J33yhmtWhpAYBtNRsgssiKUVp3xNutkmxFkHR42tt25M2BkNxwd8H8AEVxMs",
  "key32": "4CNfwiV7XcKP7q2jFuoVeBJSPrJysDVPsW8FoEfG4rBcnBiszCndMmMEbAFU9qi2egWc2bzFH3JdDUDb68CNq18q",
  "key33": "2HGTCqkuMCcVaF9h8DnKPDEFsxQf1ytqB4vUk2kyeFq5rHfbDWU75huqK2KfzBmDhXnBMYXRC6Xfd84HRH2NrAwT",
  "key34": "56hqjLMSsSEehbASCv2G4WnuZqxq9qzXWXBnBshchwTakoo5PzudeooQuaHMoMyr4rpt4qhst3mULexUijeGueL8",
  "key35": "2JGEUCPgDJb4hZsb27AwrDTCLVWUzSNzJC71gLj3rw7jSNeR4i6zYW6LUM2jrZ26Ji739nBpuEACNv8dKbJhUwtL",
  "key36": "4gwiBg8P8msqo7zHoWsmZhenuTsLMF3LHhCF6ESDmWwWTjYdq4xj7scn3ig5VWPZHPrHD8YnxghcbRZvzvFCn8i8",
  "key37": "3t1XDnw7eTk1za2LqQ2h9KqzyY8Hh7zRWSJq7J8FFP4ZAuxgzEy5RKjronUmwnkKBotPJNCqnwjFngBUti9QxU3s",
  "key38": "3QiT4YVZacxiBeSaeyJQ4pKAmVxuMKohX1jqrbjxU1wPEh943ziAHkRXXMQAd6fBNEA8g7LxwDyy5VFoXSybNxRK",
  "key39": "48EHbegPcii6DTN3xfy6fsBwcsBaANf6meQdSv299334H644Fjj3RB5vjipW6fN5ctExs6h4kovY7GcvXP8sm2gu",
  "key40": "3NXGGJ9gMsoHiPHRCWN5YwHNt4WZC7EDo7BgCuVwjVheZNuuQSdkUm8xRzF7Lk1QibmXvj5V8v21bcr8QdX48jR"
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
