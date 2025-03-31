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
    "3bo8VELw8fUz5LeSdu3WYqDeNXRLBmxjtLHa6qPBuGS4BPxN9QFVCd6FuuM4Bc6mYWn6zrmmqhE1QznqdaCsogAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28W3bYcsCjiDpjBofUY762vmKp84gsF685tu2GocrpH5ps1GZBCAdWjsPTqYyv1SZtFWTa1VPb2V7D4CPEpEuiFP",
  "key1": "4TqeEqb5X3SqvznnThC2izUQHhjEku5SopurjPJ4yxRCm67MeZxjAxfhcomZPPHPPHui19n8iMX1chEHFhEBojc7",
  "key2": "FK5Fy9PGNA5F4WGXj1x433VkwedtwSKQMCmMY9WaMvEmnHjsS1hKvwVKEoKNSHeqN89GEFsnnEicBa5JBzd9PVi",
  "key3": "5m5Lko394RYu4nu5rVCu1V44xNfPqWw6nMGH9Dx7wLdLEsLEgxZxVZXc9uVp1rVxMUXZQWzc42fH1dJRBpafndKj",
  "key4": "zVVXTUYSryGkwYfA5mAK2SRe5KZAhhhniqZaCXhMBeNEt9CTH9f653wQ3FKHkjjp9XAQxWEjziz36cP8XQFpoPJ",
  "key5": "5XFRgvBNvNkjyFTLobZ2q16hoNEXLjfoaD2QCdmh8uowG47gLLj21HG4MJrQuWJkNybbzwNqjKRjnn69GiyqWQxG",
  "key6": "QVJXyKMmp8Zn6yeowsrzHbP6P3dFhuWC1g1fmua5ejsnhTGXqYdSKbkCiTRo1hzL9oWd3mKBCgj5ojKzA7zCuE2",
  "key7": "31wSpZX1Yb7JGbEJVzoeotd1ZNTnsjMxRrZUBodPAc6eEyGZip3MEaaTN96w7CTSKcqKK2CWdEFRvnyMNdz7W6JV",
  "key8": "5GCnpiiPeNevb4bwXLbq6NhgX3RkDecbyj5jnCkJg13ebzWYkfGMHWxV5Z1uGCSNuC3mkbmwvxGWagixTvDk3EPM",
  "key9": "3LnEhCo9r5NEnmWxDhJWsEDRrVDdZuhqaCXFiPAPJsDwvp8bhU4yEdFD4rPvGzrQhczyjy1ehYhBzGpsfqxZSGjs",
  "key10": "3rBeDfQJCrAJiPJMuvL674fN33NH4QSmc1ocS7CgpxXB1F3AAgX4z22CkkvMy48YatSiAXfHoPLbSbWCn2gKNLE7",
  "key11": "66ZpRA2sFVWhDeFWJoeQfSFUU2VrGvzmKVzgUyBqgtQ94C45rTCi8jshHeFih75R7j4Js9Ln6PrdGBkkzaYFshM6",
  "key12": "4hFHu6pu9p4TJifV5x3PTkDXBJc4YT7GqXH8BYgM94w2DncfPNP6nk6xBXQLEcLHyjG2szrJSdSZruqeYaiYurPh",
  "key13": "4qecewtAjUsLs7iPd9aSZLHC4xB39hvFLnyFP34wTwZgjmWeix55v384at4v12wM25179yp434ETESwhCVRdT48Q",
  "key14": "5me2CwYxv6s5mjk3Waccoie7W6UxTVwqAfQ6LVJFVUWfiFV1FpreMkKtwVCbxqSrjCCPSBeuwpCWMEepYoskuZ14",
  "key15": "57rXNH8S7xHPvBpmGPBezTtmfd5qEudtjhySJywgTTfamPv7wPckDcUiDdeQdmCEVX7qNyVCRxcbBwKLboPg9adm",
  "key16": "3MtbpCXCUyjhY78Bs21q2433WBF1qcqU4s7EiDXpHTWqC5xxBQ8NHj2ZzxTto1xgdnkdNPrgYY7LGsEdP4qQHpX6",
  "key17": "66quD8eULq8QowaeAq239pMHvyJk8yGNvgTLBF8Ue1ZEerx29WJNwT9mpYzEPx7KaYRopbYvgwjGScBsh9t9RhWd",
  "key18": "QwaedgwyanjABNNWyQ6nMfEZampLVTRboYngottW6f6oBfZLzXJBJrqE4Av7oWbMNL5aMopGaCjzCGcKsetvEuq",
  "key19": "4Pzy9X9EiGh5oPEV3b5GaBqzWaH95WFTGHQC6AuoQPAzM1AFMvqga6Npm4fs87NpTbpFW1SRspdjVfyiKu9MNHrb",
  "key20": "22EQRfB9KQ5drJ9JGE4QuH53FXXi6xXymSk8yLdxRECQzCj5QJUf5pZ1o59UmgjdBgmgiY5NA5DVpqbW5vuHpJLX",
  "key21": "35ar6jdQzqCeoGED8MwNzKKFRzmSYrvioJXw7k6j93AsBtC4FgsKDGwhtb491m63De3ZB6emfcUba3fWgjEsF5Uc",
  "key22": "66QdK6qqqpGxpShGoqPJxo2WAYd8B3xpTRJ4VsQQwJQNxvTXk7TJHYRoc5ViCbFPLKfe7x4WhJRix9dza7wEuyzM",
  "key23": "5UrxURkR7vm4UwZ3ivt2WrMDTdLo6pAxBEvHoZ67gYNvuHVjNNLpd5Dk3wqMido3Q7a1ZChHRKHCQxr5LD8hPKoe",
  "key24": "4ESs7EgpiR2Ky6gCNNhCHxSUhx6bFAxA3C74aEMmimBo5CvGVBwJDdf4oaGgrqRJBVsbVtRfCE126KsPJzSG5AA6",
  "key25": "3sVNFA3WjsdXHpkTDLqpHD1E8gEoeAmAhkpYCWP1SFfmZdEjxGtAsKqZEPNBK7JfxK99F934x7MKXXX3b61jgFbc",
  "key26": "22AdUHYuA5B1o6zaCJWbxkxpQ94YBokRCm2eZdjj4npvzJEXgqi87aH9KP3vd2zhyLMJZBY2bpf2XzQovbSww996",
  "key27": "AWdVrAZweNDBHFvghhs9mwASvWRqhQmJYCbCndhcwkapWpDw3h2CpfxxbAJ2fWWb9dzG7LRPa3tuMuxkiNyYqak",
  "key28": "5nrx5ZbfsBSSLGYZrxJipoLiktkbJMt6xekzwVcEbmeaBBpjoaC4Q7V8RsnEKcXpGXZm31ZZRfzc9LADW2ttot7Q",
  "key29": "3EPM6HPYwoTW3BXS3kG9hz4aimFbDiywWn3ZNuLDKXGFWKeoyUyEMCBZRSZAffyfRAKNQNZEpJc5dgiiuxiCadHw",
  "key30": "mHzjgbgiFCMqAUGhcHejLeDUidqH2PJTRSoUFtrceC3Tq27SwqRX6wi3wFRrdWZLTqBkXZXc78HQ4pFC3LvvBds",
  "key31": "5abxn4SZcqSayh5VGCUkbGc1NajSafELvT5WRubs7SpwaUR8TLZAJMJVFq7fPNTcGXJqCs6DHsbQAwrBEMTRH9YP",
  "key32": "gm2q7j84sQxHLnBXo8poDKWzyKStRJLhwfsUmrRXHo1PNFaABQ9nzYGGTBjQFuiAQXKxe1H1h9AUB1F6KRqaZ1K",
  "key33": "5eWNhRKqti3fzGE3J7xK1nC9nxaD6sLCuCTHER5mvaZR5wvHZ8mhgpmYSjx3zop9RviUycqPRB9WDxnHmMVWqLBJ",
  "key34": "D8pfYZNotmiFq8ezL9BaqoHTktbUXQhZXrWpAxohyejEUr3rmbMcsBkma1brqRTXjU417TrAmM6RcoAwFkN1dwL",
  "key35": "41cBzUFdirMhRC21t1CuNERXnYhccVTA5mJiqVVEoFiKGrF2Z5xH8fXz6NbmJBrKqMZcsp4v633FKwtftRRC1huG"
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
