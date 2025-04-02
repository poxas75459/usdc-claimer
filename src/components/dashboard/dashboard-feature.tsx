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
    "15JVQq3LL1YCuY26rqihsRhuZvHpmXHvbFf4TMcQ6hHn3uVPee2F5SP5V9TqvzdxQ6zgJJmyH7s9YgebjjRqnWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L8vEbH2dK9tkXHZUsm2EZzC9SCan9n3af1bCp9akr8jGx41smoapW94k1EtyDL9yQdbV4amnk8uYhjLWcmvhxgd",
  "key1": "3kec6tjceDJPyvGeKxAbYxWjHusb3cKY7p8se4Hfv1eu1AhrjzLcaJVwZNcuqwCfxyZX4yJ6ywKDv3YX3PkkFGFs",
  "key2": "2EuX2u6o3B4BKdwTHk6qS4JR8AMhzySX58KrogVmW69qzZBFH49H6oEdbn6FjqBDs5AoC5SYhrJAfMbLNKTpF6y9",
  "key3": "3mGJFs3DjAUFA546pw9ywXM16xQRMzQih2tQV6TAcQWahsRiLfP7RtHKpeMhhUQdWCoHwvzY3ZMmM4SUqUPNsyVD",
  "key4": "9z8v3F34QXjXwQqX1FqzhH6fERMhp8fuHK7qGp1RDxoHhnQCj1ZTkM9H7UsZQgMpHXUnLyQ3bVwF3tzmE3UAQ71",
  "key5": "4uNXbFjjL8R3tMn3J7LRmgUVrNSsbfcdD9pYgbd9X575XT2hw4Ro3MQsscEyjHTLdLcK78SudqEvoubTb1fiL3Xp",
  "key6": "4tAmRGCkx1tTw7JCyNyYiiCgxjBufvYfzSRqmuryg2e7gyw96BQAk8ActEmJJDPTXKF1V5VJyQcYgvpHBAJmL23N",
  "key7": "5ZKX5eeRBkV3bpCUrRfCA5akdfD7DwGMAHj33qnUqvijTUtxLotrqUvyrvQU5dgce9kpSf3WTC1WWN8fgzzPRnDn",
  "key8": "4FCbtutaLydheGfn1fRUB7vVEzEgd1tEVY4ip3gxwaCiiTrofGCtdsXLVSQhsS5FTM7jLtC7phVn88Zv47UuGjNH",
  "key9": "3Tqm2XqCyb8bM85pB1JidPqsAYU71eGuu5uxenrkfZqMv5wpxJGSQRQYyUppZtwyFFeLwHcQqYvCYuydHFGztApJ",
  "key10": "4gvygM3BXAY4rZp2Nri3zQuh2L9nXTzWUd97wbZnJyRufbmu8HjXAC4HXkjyH4owQfVcHszrAEmweAHA9RA2d6Xq",
  "key11": "4dRC4jc9zwQVc3PGS3KSBnt38JsmLvED12KAWyzz8MUnoLNwg23sXLCGrFZfK1LAJiCMsHZiyrf9hdzYbLAzZHTc",
  "key12": "4yYhGNa7344qEFsppzmuygZThvvTnNmdcFaqBTS7oEqQ3r2Pwp42ytbb7Ge2JQzA8adMJiPAbPq5rKXJewnbprY2",
  "key13": "5xuj4JwfZz2L5G6C8iiiqe2xRNmgoscBEKZXHVFHAEbbeK8UABBs7z8f2paSX7nKz91KFiSn1EudHQ2v7a1zKkaf",
  "key14": "4fxKBwaRApLGqBAgQiDuKteS7M2Z6oRQ6sUL22z9Q7XAhqaZkdRoZs5xPsNjNEPok6JKFPgGuj7PxsCZKJWNh2kH",
  "key15": "2iKKQb26id3VJz4ehoajsWLZKxx2Agh6GU7ct3g3VoGyvSsYYyDVycfPV1LA9mF4PysG32Xsof9AHH4sSUf9stLn",
  "key16": "Q5uREUvPVWe7sVTiknWYHbYbG9ykXkxJh6BH5tquGPEzdPB3mXLjAQdArWvtJGcM7vX5hU484WwgnaRknCL9Ese",
  "key17": "4q6W784iDzBFZEUBaTqrThjmDGyzEHrbr6nKdtZuo5BxTFmKZiXNbRQGnVKrvpyVVVvDnew5cv1qnjMssARfvaWU",
  "key18": "4mpmj2Rnz4SjZa56YmS4DxSZb7BnFfUAp9KRg9H3RAkk1wb672fbX1KnmJpSoWxYSUNgQdEgwUjnVAvk9RRnswp9",
  "key19": "44ZbsBiLB16B4aDjRXXZtJwtzQKz57CzcVFAsScnBFfAvQnAnKcQWe3WCFZT9XqGHEQBv7nFVLitwQMoP6EedXVv",
  "key20": "65QuhtHhRmFgMXTBAZgqhcmJ6m1qpC6sBRtzohd2iJJxcsB297zeGppCNfhjTc8r4bsSN47j6ZJNsadG1mMm2vt8",
  "key21": "5sLNAYigqzmX46CdvVBnyr9PdvxaQZ7XvJMCJhVyPsMAXM3oPzANqqknr2iZEa7S3SqiNaotZE3LMt1MhiVneM9S",
  "key22": "4xATWoCeT7ooHoCwSPLXnRtK97Lzoea1jHF9mAJ4ohDtq5pixhDjEge5pJqLvEGihYS35Eyw2Zp9Kn3uFbEg1E7b",
  "key23": "3DEHqZWtEzJ8F3iuJurgAMboZzZNnE8HiXnh1FRvbBtQN1v4Ex9kSs3oMGByg2q6NbRUx2RanKhYWpf8m995ZWvw",
  "key24": "4g32SJ5ubZXRaosgjfve5wQQRxCsjgJX5CREVM2AH1xhgt2CEEoRgKuuQ3BvSLa8kYJFpDKnEHsN4QecNCucJVUd",
  "key25": "25F2Y64fezU8iNqcVn6jAw3NdgdwLVHHo5zevGSGfTrf21TqdEtPEPLGV1kPe4c3NfhF7uVi5anbyYBaCKpztdcm",
  "key26": "5Gb2w7tohe67Haibe2QZzWhjsvHMCTcHr1KJd1igkcKSU5X6Ukvj7j7W6ofoAus49BdV3W7zyqdAbf2kkLtyAy3m",
  "key27": "5M4mgD4psuKt7ZGXnSYz64HwScHjEZ2ML6oaMopKZDzVJ9UgbTirV3yRQNZK1tDXRuhYfuoWYVvPseqERR4qZbLX",
  "key28": "2YVLh35jFNf8GbN8ja5Kxt8nvf2WaSiqw4erUCcrq6YBD8wLxWTNJtG9X3wn5Cs24Fv2wupcEcnvxHrQnMTEDQDF",
  "key29": "3vigHmZgQM9LpFec5xHuJqUPB6Sf5uJAV5zR8J2e8xEedp6P2xHmbs2M6tXqz9NkR3dErCnSVZ9UcTmnaVjF4UrU",
  "key30": "4cUQCKy19iGwGd6QiBsYwhjLVLy1ZzByNGwku5ZDwhaHBxU7rRD9CC75yrTGyKuYeZu1hF9htPqmhg8HLLwHFEdV"
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
