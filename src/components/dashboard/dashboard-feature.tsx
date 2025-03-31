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
    "5SLPEZiSkLFKfXYrCbPNvPipPriAouTay2oGSQnnAvse42MzsEg9iuDsWungphZts5SMqmWY2PzPPQZ4kHH6yAqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ag3W8jbqKiE3SWEpmjvpsv2SwWYgr8fMLxeMYwQWhXcmyvgcabWQHjzRZDxfbucxs2jXV7G7MbiYsVayAnxiFHS",
  "key1": "65XLScmUV52WYcd555XV6b3DhDLxNGiBfLwHrZutRnZ2JkV5ZuGGG8mpnK9qZ6gCHQi4Jn6dtNArEq43AHB6npHC",
  "key2": "2vd3Esxs847oiZXEss9X48zcGWU9bywTBGWYyGvsfNt1EUEWnt1P7oCZgFSYq1yuWyrjTD1gnCFQ4LAxY8mRzEbo",
  "key3": "J85oDLtQxBTAZmS3q67tfMZUWdKaqtSMxaFRAanduT4cwexRb3BPgGnqeNWAbfDKHiQLNBodjKFw8V9AdbbiVFA",
  "key4": "2K49nEcoMMh1DgGkqHtwUJZ7cUPU55qT9nPJ5Gwgo8FSSpKcCigagct14CEw2GLmMsY9VoHUayPzWGPjYwGMXNQ8",
  "key5": "5uoQN9Wr3MzdaybHVh6HD5vdzQo2iNCkpqXRWoXAPBCvd57mbreAaBXNLjUzqYzJ9xvgffhthF1Ly9fhu9HybLit",
  "key6": "3SX3Ku2sUuwMh3gKATNeeB5GD6P3FoYtcjM9AcykGPRjgoxjxu4TmnP8ybBYJNFFXvXSLk7d3Mxz5j4wrCQ2P8yA",
  "key7": "3NpvHZfo1fxnjGzUC6fyvDKVsUXUZUjZwMsc3t9cS3Le1ViXAPprXqZsV9y3tZ1ZjWb1tmRTSA19PyciF2zz8wEo",
  "key8": "221LsSGQSo8YtJcdAce1wq6pHZf1ABczXaXWj6du44JfJeyXMxDKrbKBqGPB58abTBgXkZDSSx5F7THgmBujsBan",
  "key9": "4WaQbfne7Gy6vMy9Z2K56HEoQj61sLkxqSgAV9rw8LLdfxtkRTqqFLn2A8z7pXUwJWz3VxYU7eSLLCjef2xrBR3j",
  "key10": "3eW3z1zBcvsEbUqoeCxxvZZaTwLMzhiFjQgb7TNVj1gsFwVW1hsFnjbxjRhG2ZdLsk6qHieYoCDYZzDy1ipKT1ny",
  "key11": "3es1ohxKSo13EEB8wFpVPbDR8bht5Jk6LzbNnv5Fm6NKHcpo449AQTs3jLC4MhUGktw79LMjHen9DtJmcTsSU5Gi",
  "key12": "7WpUQpYvmVHKHzVA55e1grRuEgj5Ngr8pqs8RAEEvf7yhHMeoAfFtfAgSrnQL275sr1Bv3Fsr9pG6jHta5NFaJ9",
  "key13": "4ymKzTUg7Dcing4uuP1qseJVTGadC6dat7CDj2igdre1UR12wsveML99reN2DCtwMdkeB3Nm22gmrkdQ41TLbUGu",
  "key14": "2UXXBVTxD4Pu24scjmfw86dCsFMR1NrbwBzyx91LXt9UqYKtBvLCXzsPvwYeEJAZ78VmvbEbfSHTF8nZYVahebBd",
  "key15": "UjxKoNaTSeNVZMnSd5eQ5Ho6mgpgfW7Zs3TEeMd9GQUmevz3TyBwvYjoEcpQQGfTmM5HQyCJfUF2jooKvMdoz2o",
  "key16": "WDej9Gwbr1dDixbyWeGLHya1QQ5mnhVMoP8bVgXm6ZhMTxb9uGbDyRMda6ypapxqsApmRrTnEYrD12vBMvRiZ14",
  "key17": "4gY5YMPzQmffrnQtJ4Nh9xrLmXuzVqgAKxCXkLDqRNC7doUGWMJgE1hyoRcFHqUg7y4ec7kZHYCt4priC3akAriL",
  "key18": "3x7sZ3DJjjEDsEPrFMEvnCCgwSVNQNTPAUeRhHdcrn6kFp6DQG7mnwrg5EVx2B62dosHeWnvk1UtCuKiZsYjBnik",
  "key19": "551ARMusDCDMWoFwSbfXJsQZzt83X7VdoFgQAcxGnoheU2bLwMHUUwJJWwavi3CE9rmZzgnHgrpgdtXoCBaaDJyq",
  "key20": "2BLb7M9ANZUY3JDQmbb7DksAMhRPoRU2xLdLrLZvVkSRwAxnwe6Go8TmLrejt9DEUwYyvqX1781cQkTpbRvCFBuL",
  "key21": "4LSw4dRCsgG8E8uYquHZqz2BvFwbqTwUYUEnwy4sGZJF489N8yMkiWwYpsFvAPoAbacSBcjfHvb8AvdTinjGqdh2",
  "key22": "3EAmf3Ha7dueuge4Fz2GxJ3WBnv3wHuo8R3ir1UFX9dadpWjW4ZH52x9mvPGkf6k6yCxcPAUx32RAc9t7WPkLi6z",
  "key23": "4vD3BGRv8dVB5ZgiiXMCS45LcGHujSso2jLwoPbHQJr3gYTmCLRoNv7Y2vpV4NBXrRMjGycGEyehq1EPVZpmRe3i",
  "key24": "2ujLm7HRUVFhBjN8vRoBaKtd4j9tXmDVY1xadCmNJW89cBN7FN95abaumjaQ3fVdngeqZ5EVbEyo8rseUsugkvaP",
  "key25": "2AY65iWSyQVgquZnoqZeGK5KvtpBHGqEUy9MAAF2BMPxVnGQHb78t8dinsh5wqrxKRR4XCSU5DEUUzft99TSGHaS",
  "key26": "54KdQzMAUP9YSULoa3wjzMM1ZS2n63oq9eeEJZd3EpC5KeZWitsSS2XNbap6Ej4t3zZPebJEQjef8b5v2jtbCmPe",
  "key27": "2Nfw2CM4dWWCXKmaGEcwkpCE21Si3cAhTtccFYSH3tbX5ZUJNes7fVwsPGWfikQ3SMxWYrE5RdsYe3BEU9e9fExG",
  "key28": "2hqWC3CWdjt1ZJUpTZuC6EzENLkm1noX7GBNf7kNPjo3h5hZbA2bYZoqErnFd9MuXdragNuPD9m95j355dpNQraC",
  "key29": "5ENaKci2KcW38ecZW9FE1i7bFoSw2UfgPPsyv81mR4bSwXkEHKTdEH81yZmXU248un8MQGwiMgjMuuKCJrUCRhLg",
  "key30": "2wVwdQGnRPTWVXwBLJy5EVvURo29EKW1wSWB8HUUw2FZPRBzhrPZHssKWjQ1nUT5ZJootU5DSXwiRTGshr2Y2hvP"
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
