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
    "5RPvEAgGzMESmFhAWShe5v21jZY9fstB6oyCsRVKFzL3vjkniMvshwyzg8Ur2BW6bWHBAAu7imbKud2SscZfjRvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31dGPRsVM9Da8LwzJi3REPRhmAusHPqky43nSduFbPVfprZQ96iaFWLeTqmoCSjJnaWHfb4eCd7Y5L7wwJA8GfFq",
  "key1": "4aYFy8m7c2QsKua5QXizsQPBaYgGfCmnDcZk71f3bZDZGWGGkHdW8xxTnMuyKBe2c7vwMHEjjR18SvC1Ucjd9KoH",
  "key2": "3BioUTHEbbRxWCMUYBLE6RecBKa6zfZ4yz3o7RanBN2oXCPrkevUsBRkzhSqSqZ71Wg7SVRTxqm8bKLAq4t2Wne7",
  "key3": "eyvuLkr1j3eh5eaW3ZxiJmQWeZrahfcwrsHoRHX8Yd9D3ZZ92eiXZxEhpVFiBxWrgiJuQ8VgK6ATAFbdRLVvk6Z",
  "key4": "3FXMQWTowaogvp85syz7fEDjxERhBm4zPUNDL8jy96KzX9ZEx9ggVgnkQwxtHcJ27T7pL4uru6rmevvVjSgLvuNs",
  "key5": "3KvwK8gzGoW7HvicsueWbu1Dw8WcSgcjEtGyWiBj5uAAPQ9u7QE1Pbux2L4c1RjU8KJBfzs336uU3kxKqJxqLmua",
  "key6": "jgL4VayAFpw8U7m6nnc3KQt9dvMEKMQ7teeQ1dWeg16yQdxYfDG9sr4hriFaGayf5a1DiDr2wdzA59UGtZEuUXa",
  "key7": "4h9j4nFnuEaxHz7TAGG4NaKqxKfnK33cFCfHZe3YsCkVkPNUNEybkBgbonHqXrgooXqFgZV3CmCXtqibvErZELnS",
  "key8": "2gqLcRnLr4NSV6peMiNzwudig9cQ2z1AX75KpWJ4GGoMonMJrozTj7JQQrLQuxiukuhDh111RGn8veppkWmB5YiW",
  "key9": "2i3rhvzhsAgmpLLwvS1q2mzZ6bvqiJCakXdBznEcVFTRF9NPp5fLpfN3rWoiE2PHiPWtLywwUqH6QzXh6aFgjrHk",
  "key10": "3nJhtDcPd4PJGYr2YEpWHhqJxLikLz6e6oH4SKhKWutXCtzz6YBun2SE3nopXrAdzeUdpnKkqkrjk3t9kQpCnM3G",
  "key11": "3Zm35s89yyW99WdjSypU2NXospxnxG4HysPxoLgfGXYYfYDhdd7oxeueZnYj5Pj8AqoZvccYVjhjXooKLPdrm5hw",
  "key12": "3UD74Njf9QSzobEm2XffkG8KCCJYr1uSUVq5gS5HHwXAYtjRrXYUbdzNezhKYo2s4gGA5vKT4hoYKXPja3e9wa3s",
  "key13": "2wYGZJfxoMzgjv292iMTwkUakE9xaopNswYLcWiGsTEVEvttGCVNpzkj67goMivwtoEhrz6Vedrsmb3WiX6wK8D6",
  "key14": "5VxsgchRr4mo2quMnkLH5P3mMuKDHjGaBAUzWqMbTE4YqRGKurwiVDXbC95rXZhgH2zMZYuZLpYLFyycEpdLkvd1",
  "key15": "3zRSG1xDm5xLrCCx5ERacFtMwkPBvAfa4sUcCnkfYGPP48XLn7h2XZK2wrCCN36ADDL8NprogDyaoKFJYghrRcc1",
  "key16": "2s2VmtU9KVkGRA78upiXpdzrYjt3nR2UCJZbHe52PEyLTEWySQMV8tGio7p6JKcAFCZfZURNAa1McAQjjZRrWSUR",
  "key17": "53HYpxdDd4DtbKKnnbSbZ4ut17dCmDb5fUaBpmTgdodLDvjcWZytBhVDpCcEk5rrTW5ziDxLpPUdRt1VuM2Ce5kd",
  "key18": "xQ1Srk3pA7TiuWXxsSiERTqgEppnCBvTJrGxbaHdEd5c2YkDNUhUMqHJFSxJ1YMa5uMoxzNE4nhPF5NgmjaFFAz",
  "key19": "4ttVQZbyPDUJR59oPRQSfpPJXPcP9iCJZcvoVF2UEyjxit2uJfVUrUjumY1oAgqpHG4ZjGQxWXHHyzcmmfBMVxpb",
  "key20": "4iNCdhYXyDYHzeCexcoxijSGx6EZM3zxrFRxoLbuxhJ3vc64Uzr55pkDm9isBXLHUnmbW3Ndo6SRJfvZ3ormq37n",
  "key21": "2yFTC62DdDHdhFUzRZd13VSkKZCzsJtprDPhAVgKr1HxLNKdBkRCWmEgAJsNfzs81BvbHZX4eSHaovwDpsqh1z2T",
  "key22": "5KLPicqtYUNjcaGqRwB2pbk9sqri5on1L3eJ9QhVrpa5BLbVSXJptidNiGAY58nzdSHfYdTB6zVRc4nU3oZLife6",
  "key23": "29Z38CgGZ5M1gKvdMtAxJrgp73pbKJBJB2Pwf9RE84Ua5udexajkEiJdhB3eo5ViFVR82asL66aFkLXiAbUoFnMD",
  "key24": "4EiLKsaY1dqaqpyPxaguqEetsa2WgrNERZQeYzr1wawskpjBimQbnwPssXuWQ4AEsr6x7jpQDeve2pSkkp7dnFtS",
  "key25": "3LHx646158KdjaZjo6DjC5hJdQEokpFDP2Px6uxUDS64t26VGpaREUw88iKaomR5J7qvKFkD3e5o2RGujWxvRZ2p",
  "key26": "2VnnKTrwJ1trAZDUaeE5MnRpiu4ZNBxNY5FwJAzAZHo5sUvV449ctF6qoYvtZsSeBysCHWRjYak7wK9ncWEfzPta",
  "key27": "hNGZeJTT4MWRfenHBzyqhcJvMrY5oRcij87JaquSEmL9E8rjDiGg6BhbxtGSA6GpFJx6K6DjYdTGof9CCKcdaeW",
  "key28": "2Soe2jNBGZKEwr2nNQ5G79tXHm2pBccTssLY1q95FCb5Zbwwmo7y68wcrpRcy5wiZLV41f1NTrB6QZPqHAVK8KTz",
  "key29": "4pZkv4YkUYKoQSy38zruViDgdpddfH513iptFkRDPXxWcMXkCsJTmRw17bNszn3moVWrVzcDNdxnW4p1V2bBnP6k",
  "key30": "5tsNLC2SkLUhzSsaZbedHNApJMkZxCgbNVHDsS2PEojafL3mYi1NG9tk1ye2PVQJug927afhLXqiWnU5XoDqxyzz",
  "key31": "1fBedTSZzavGKskzSfWjhX48nRREzf1AdHYYYGFGnpiTCSW78VYUox8QpDMLQzWvZG7wWJB12veYJKVipEyLpWu",
  "key32": "3L6FnfEREcrD3dnQKqoUomXQS8R79hxMzsGwYJmhSqwPKtDyv9ks4aFAYAWSCBbkaiMb7VtUU8wtPZJ8z96mD71D",
  "key33": "4Z2E5sCHH8oEndWndwTyMtsBPdGR1gRqY7ZJnfhD4iYBN3HMPKKi9np8ZwSuhMKtE5eDtN9GMTFCsaeR6u8rERbY",
  "key34": "23fDLdFczZNr4mT1ybq2EWZhApXpN7SSS9ok2oiRGLrF4PaETr2GCXnfzMgRm1JcKSD8GVBMwzAqsBuAm2HLaxQ3",
  "key35": "3XkjhaTF5k1G3KbrMgY8eXCkMMisN5ckgtrf27rXXpKqCKWH5JpFQjDeaLbkHJANce1BaqideqMAkXBNjsLjfcqn",
  "key36": "3WcVseJME1keB37VQRR35v1CyTU2kc8QyTchW9J7MCHh5jyeXidA6Huz3r9XPyfZ5YsdM2Yz91NkyzzpuziT54SM",
  "key37": "4toY9pkieUTuTAFcYLFzHJpPTwWPAFM28JMhuV5ba9wE5BFYDkUzJyRnjc39AXqMnwi4MmwnY6PyaBoetmbUGG1v",
  "key38": "3XJhyt1ShADA16EDhQebQv6Cr6NLjEdG71y3tPMRGtMyVvxn9sWvGh8eU2bT8SNADUNQbwvogzq4JQN6QG7G1DdG",
  "key39": "2YnZNDZna7Vs9NBMUnCb51kEpqPmUrub2C8CjH9CgknDdtuj5kg3sJGE1KvhR2cV1uGiRjD1KXZCWmre6YXuf12x",
  "key40": "JDcKp3ugt37UxVo3dCPYPbebc15ujVkS2HwjFEEwEmhdz576QFYEMY2csTAc5WHcnmhLbgCHqtQcaW5qF1hwCLm",
  "key41": "2xC4W97YJspAcTjee86ST82PBXZAri15b5aDvzoseihwTjPSgLRbxKeejqugTY3ZH35gBz7ZUCG9YG82KgVcnMH4",
  "key42": "zFcxhZSnrUVERsCnfmPXRYQVvwBP9Ns4MdUKfbAYLcHUc19daQcivD8yxYX4UV38ExJStn9BFL1cHfiQQ15X96D"
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
