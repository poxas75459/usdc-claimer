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
    "YQ5fAtSWdDHHdsYpVUpvJwgEAtMCxcPjibSEEqAPr8VWdsQFEFnc9kGn3U8oHjaJfBk54RQWeYPUxPmi55zSMRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JdZNmCigsDmQfSrJFoQo2NNiSFRyFjwxr8XAo2cbAqfd7eykUSWRsgpJDdFxjHtXruk2QP1w64nmfKJPur4FXXB",
  "key1": "66ACURRcuXEtdTnSFn4f9XF5NaLnLT6tKgPjJsDo8gmvqnc3e51pR1MqYzDxq2hzfitM4ENNTTe3BA8LadDCNAWV",
  "key2": "44AByqh1pfhaHagzysFyrM7wvG2mGtD9nz62rBwq2QMzVvymeDgWm6zVseb4Fjr8YahStcbixpqgznADTwZK73CR",
  "key3": "Ao9H5tVgsgfa8Z7Mg4E3gBFGTac7Q7G1UjVeoSGdgCx9M19KkTc5h91VamigLnVxBEFqiHQAZXRhdSYoEge8xdp",
  "key4": "3gxJZG7vfGC53gVoUfWfeY8yR4uiahYuNUzNs2FJg4Ji1Ucw3sfaJSuKhoVPttrSiaLBJgBR86ZmA8deb98dAoYv",
  "key5": "dcjqKCobFBgwMHc3B6zdsn6WP1CPuFwG3M7GmTMezB2nk3nYud87RrPN7ZaLjf9kgoBMuxmE58Wrk4NwiAWgbQa",
  "key6": "5j5SWKurGpf4WBoFUWFNoW23RWbNbUZLUWV8JonZQRVbfVK7By2MDyb87CBSXhu2Q8HaAKjKA3gRAsRC8hXTzMQY",
  "key7": "5WuVcWDnrbEZEVUxFLGEYmLr88SKPdtmirRAjWhH6YNnFd4DkqxJ7vFShUMxHGkgiEfNeYGWTWyRKiyKNjTJSaRH",
  "key8": "2JwQwJKo39AGp6FeZhd4TLiFWTgVbEv2pcM1NeVjgCvA8VNumRjQuuvRkuNeiBj5JqHfCfTocQqHuM1LcsRFzfKy",
  "key9": "UCA6ccrBcs6hhsvvWLeMji1BELx2GJdLu893mqYCmkjidRUin716Z7a9sLdxZ29Qxy4aKpSfvC1F1r5wo3RaBre",
  "key10": "5rrJdyaGAUUp3zjKPiZoDE252Mj3QY5miyiHHHtk14t2BsmEwFUpesZEb96pr2F42senfj7P7d2AGrQ7aZCgzDyZ",
  "key11": "3DP2PMxE4Zug3hkXsLFQyUkRF2onVgQtHViNLQfpaLBqr586oPH1X3bS8t4sRxLoiBV2ykf4syBw4gLqe751a4x8",
  "key12": "2ZmrLZLq1i8mtLeqVhZ3QANborKSnoc84DLdpKamnz7f5XzRCs2cQBo3tMzHCAe36JTgokYc7pXphd8Ywr6iChcz",
  "key13": "5H2kbnt7QzoxNy9xHrTCNyrVVtLyiakokQTemza4gKxL8b6qSRfdJUoqPNxjta5ze7xrbHHsDWxbymeay5d7KGW3",
  "key14": "5dt4xLYLGS3X6jQyMQ7VyEeMJg5rT6uq8QHwcDwg6muBv8Aopc3VEXK4bCmYA39Unx3CsCHJjFrrMF1moHGZzCMb",
  "key15": "2AnS8tfhDjNakmjEkETM3cqD7U4J8nWgqF3dutGD5wdY8SWwKnR9ehGRbb5hq1JzgPz3sQNHQNgVu5Jm9RcrRWtA",
  "key16": "3tAyHr81SKePz6xs1hhu6rQNfnet4FcHyWqxKnPVHaLMzUgVnb6WhPejZGjyzWsTPauXMoQLqKevyxj9PBBCD1zk",
  "key17": "cYEP5bKZLvzWfXxci8JhUiWDKLU5yTUPkJwuRov7NypiU6ig2wJ7Se2taLNR4Fs82FbAUdfL8K1JMYPXuxCs6si",
  "key18": "3z4VQuVno7HQo5v6KAxyFV1X9QiXjuutxMTBKrraXE9Wj6KCyMNXhPv25eXjTTa2zGDChuXoTMEyVsKRkEcvoETj",
  "key19": "59r1fd6c59Gm261toKAh7TcCjNDAE93MT62Q2n7Fonj9X7qtqzW9ThqTokpmvMLtyfGYM9g6KbFUcn5JXfEY7j6e",
  "key20": "4QW86jPohTwTYA1KJEW4wGSkkMjsTyssTqLiAwvP5eLgZNfto6CF1Jv4m8NxBN8UTUB27ZN4uYr7Ne7XKRo2s2rL",
  "key21": "bFd9DqMocTyo7mnBzkMJpeVS3sEAZTTNjefucajobQHGVQarDLq4eMJTqtPiVtvwJuS94y6X1LeqxeG68bSfVdV",
  "key22": "5GuzkihhBBzynqAzxKvx8rY9RF3aAPAqQfgND2Md5RKEHHFz3c34aedH3MQ9Du1XHPBGEkAy6aLJztiUsaMLMstq",
  "key23": "R6HMw7L882mrTZAXDZzHCd2HChCUbC2fbnkyComVCwsmYCMpj26dXmUmJU2VQ1TmvhNdWc5MqvXRGUUSVpuUNbW",
  "key24": "2nHSdz17nE75MrrsWzvtVikNXnhvCGHwK8W4atDXLReomQbizatPbJeEN7VwR4RfP1BnpzoZtqJh4rTEsBGwyfZL",
  "key25": "4c6WSCDKnhXgoRQQxLJ2FzwdNMja3Q428CuPeXfYqwx15eV5BncPwC12njewu5bHzL9tAuECE8zqqWpw6P2x58h2"
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
