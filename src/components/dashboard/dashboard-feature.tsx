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
    "3Zbgo5VeEQNnpDPQkoYdqbqZRPshkxLJs6BinCKXrinx73qtAmTqTcBfjqTf4MpGmdQBeNXCy1M4ui6FetBkjs9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49KQRHzmMnzG9Kg4UkjU7dCqw7Xt4ydYmZHoiN35xKHWRjTRSgoSTCwk6gM5dBw9CA4PffyN8CumPZyTvaWaPtsD",
  "key1": "4ThpPUQDT97Kx2JUNY5bdZGyr1nbrmNm5Giww6o4PeDJYGQqnbHrUk7Es3MGNNB2WTE3wWu8LENRa84ghUjFi15Q",
  "key2": "4E6MhT8PoKiVfNeFps7M734wd7VJHnKR7snA8CDwUfrESQjK68eYRaCE7gkTBoYoqnHX5mymyDHrJ5FyzATfPzVf",
  "key3": "rxu2ASrvkUqDCHu7viX6dALZ7LiuMqNm2vRW2THhzBPFUPvCB55gAvitL32Lu5eXRFsv87juh7nxqaAQdugvmcf",
  "key4": "45BCyPeKVWDSXXERPSZTAKjpYS4fabAFwx4hBK8HpwfPxRPoVWX3c9aesJKYK4kggffsWBStrqL2QxbctAdP6Bjk",
  "key5": "3x8mdeGE3FC72zRCtAtB3qgPtqw7518CkACCvXNxcrVVJMv1SFsSkhHcQoPfsbhNcmHzXMoKHhXEq6H9YzQfDH9Y",
  "key6": "4s3x61go336s6jaCnRvdNqxdYu6yT5ysBySShubybaNcr71ByykPnAaYyRtfKrUe2syASLBoaJJjwCgYSvQWtWD7",
  "key7": "wzUCBixPqUnFw9PYNqSjzcbQw2j5NS2tv18rsyHti2rGvEiSAq3VtazMjZqYZDEavLNBY7Vu2Q8RxUJZrGrD9DZ",
  "key8": "2azNdPsesjAYipLSVTkrfUuBLH7eykHt32hM3ZQM3wwHomXBtSa6SYSSg9m3w1qqaZwyLu5kuLnpmbdiBYMSirqQ",
  "key9": "2XixKfzsv9qfhdSt79hU37pS4avTQ4tbw7ByVyiYn5Ha4WfsVexBngnfpFmHFQtSUdjTdH8owissfUPxgDcxkRiu",
  "key10": "5nc1J8wKYdZaeW7fEbtdXS6wuVdmrSBL3izT6ct3hRKsgVXNC9ebw8sWahwed3khHZgrXNiLfPjxNT3jNC6pzXQ2",
  "key11": "bkSDBFrYbJvQV47QJkuyLDW4EKVs5HdP6kh1WrLJob5kkf81Co6MLuQQWukTszgFYHD6JcKyZ5A93gL9JdxQpXQ",
  "key12": "2P8ipfnrwwatiPgCDZSsuNeer3nKQR5KQfVkZBJUPNPCH7KQAFrJ3edegUQC1nSmSuq2ees7CikuTZn1vtQKxbE9",
  "key13": "4r727cVb4uVomCXnphR7fXZU6Yn7qKc5XUZ3g14ocU2Y811UwVQG7qQmxtqJaDMbvHjWhvwSapdCgcR33vuWkvw9",
  "key14": "5JGVXu9orT58gxJWv7aPSbFFtzee8bXtoENDCKoqUFy1ZDsQP4itz1uaaghsx9xSBDcoX2tYbEeiLzurpAPF668X",
  "key15": "2o2p2Zm7j1LLAvjWC92F3xCjDzRhDH8UrZzwjyNj7QAtZtKvb3msmHVdh2FAGqgFM4pWrZECxLpmfY7HkqF3JoRC",
  "key16": "3bTDX9VdYV5ptFLhT2EuYrBNNotXru5LA92VzsrE1bD7nefsv1SUShrdi8V7EpkVZ5ESpvpTyMMGfr7RXE9uHj5S",
  "key17": "2KgbpcegHKyyJPxgPgW8t6UzZ3f1U9846ECHv8ff7kRZ4L5JVaACPCxNFcadeQpm6cBfDuZTqGnTx7HTn3gqQDrN",
  "key18": "R7RMpqAhJaW1AEx5moSu827BBauQrr3TtDcddiDUfUnhUg9ooneg77SySVHZFnp6GR6HLDx2MwNk9VFpQ4RWdrT",
  "key19": "34togLSEVtFEgh384dC7mTNrK1aznz8nssG3oCTiQM27vKbSfKbLmU6AL9GSvN9RHgCaQANVqGJ4X9L5aSiMesNT",
  "key20": "3Xyo7MjhGe3biWjA9qwqHPMy8qw2x5fdg1adDuFn86W1Qtc3p3T7BWjU23EjXpUUoiHA9Mn7pFtAqqM8CT4Y5v8g",
  "key21": "3xB1B7gsZMZEDrKgq2v3TZZQydYn3y7RFSyAZj2YFBvC4qiVHANLiE5sDz57p3aB1fNukjsQ1KHGZgQpREafT4F3",
  "key22": "2YpML2fo5Myfr92xKtUq6GupF53vrh2mztME9cKw7tsUN4r1k7XLkp9bg253y9aYPpL18r1mzh98rngVBY6sHuCj",
  "key23": "2bzZu5hJPWuFvz6QrB2ZzHbebBt2xbPC1rG5prGuh2iKThTK9NekrHNjH7hJRyX9h2V1w6cnZvXF8rZ63Hi8kBPU",
  "key24": "429BFHarAkvo65i3LBWGJ2sBLDHMnCFRaKzDW3NbmQZbevpLrDRzgSYGzaydsDiPq89jsd2ESYsqPV3xubkq3WMj",
  "key25": "4pBH6wy95YTPkFZZ6uj6ftVT5SS15Mr6g9EWQtGWQG8fPU87sJ1rAx66dz4SP2YiuTYPi7DbVKktJmsj7bfuRLDb",
  "key26": "2HVdsRaJ1XenQDV5cYg8kxwBtZkg7L6otabc79M1qM7MAcGoypGqmzzjDHh8q8e3vAaH1zHf3FskL95zuTxu2SBs",
  "key27": "xT7CveTDG7U6DKrM24tf3zitPs515YF86cizV75ecV7M9YpdbnPowh7iVqaJHaUUYJEbSwG8zXdE6DEt4qK8TgL",
  "key28": "4ugJieUY7VJeZXkm3JDdmMVQ1uD2vUTNkw1oMpUmEnNB1nuJG4icv2YThn4pQiPkUX4UvBbvv1qJsJxnqfCxvyGG",
  "key29": "2a82ihaut6YroAs5WHEwvBmUAiQ51EqAFdcn7jRQLy9a4THcccr5aLSp9y59tse57R2WSbM7ZsNMKrgidDFtXjQW",
  "key30": "4goDgrD6VrwJLfjSTrSWtWpufXwvyK95wLCDxEF7MG2V3kSzLvX2AeUrYUhsxxdiJMBcvGtDVQZ59oXUoWBZQpsj",
  "key31": "384trXLozFoBrocBLDDrmJmutvUbssoD9ZLNomAw3gQJB1nYnpMVxCfSm3RiBKaSSvk8ZsuYPSP5oG1PHTDn9hHc",
  "key32": "23g4XcK94BwrXPbxeR2yA4LcvuHBfrXwRTTi9sg58x6YnQsxQPUvSiN7uLNKdYEbJHwKEuvmW9JRPUgCnxbvR914",
  "key33": "4MKQBtM6Wz6PbiqMxAxXCV1nxQn7Vum1baaVGY1y3kNXrJ1h59LhSZWhWs8F4WdLFwgNULDXaBUT8JUG5kTed5NC",
  "key34": "4bUKPb4u9Q3kYAsu78MXKFGRnh5kXTMfmLdELkdsQ4DL2qgRUePyNF7tfKE4WppubBcvXj5Hj4RYEmSFzjYVwnfL"
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
