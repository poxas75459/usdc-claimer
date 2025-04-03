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
    "JHHNuqBy2kjuZjPr9jYxXzCFBPrdbnYncBzazKrQq5NH855sQP1xmhx2Wyr1RdjKEWfakGy9qaQ3DrkFntAH14s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RkZBw1C13qmCJfDHJTdeNMSLrZQBsoHzNEAHwYkpoEya3B3U5bfNbd9jNBCEbbd6UXvP9e2tywpq3GMtGEPD5CV",
  "key1": "2g43BLN37ZabZ8K2UpyTPzauqHjhhEtTPVizkQbSFpMG1hrjPfGJdme7ZAoTSeAvCikgNBR16vvmHwMrdx7EUgz",
  "key2": "2UhTSG9ZojH27hrgqaAmNHqN3tFqpHqA6p6LHRPM8yyLdyATtMDKLJkEHjSrQ74P1XjjyiJjV7ugWAcRRQ9MvYUH",
  "key3": "54rrzE1CjgoqubxFN4N79ahGJpFWy3cDz6hdHq79d1zAdqi6FJj7cEuC8ND1k1tjnWwgaWnWMW4GcSSpc3SsN5hA",
  "key4": "3gusdkUDWuyoHXqt38mTvfMQpasnTtz633agwS9gMjJnxJHCE3ZdF34SLJS4nZGtcUdVZhhGfQM8NQgLtBQdkeGo",
  "key5": "43K3G1jge7m4AWVuTxJEsabMYLEeajp2MNSHGx8tyXF1XsoJgEsmpShHkBAHPQEmcjW8c7FytPpNRFtSf7F8oZ5V",
  "key6": "3pReJG5mcnhsegDfZAfD5JDf37bZy6hwVMXuhpqysjAddGooZX7WCJ3Hjg7sJxhw5gAkkJJdVLnPtNzW1wsDgqJ4",
  "key7": "3ArpEJcFNkaaxvSGNPZMbxA7iXZoZe3NcLwqAYkJxSk7DuDPQ8NUUutxXTJAi1JkzHhJXW5PYxeaB5DLYYhExzxJ",
  "key8": "4jVggWmjMWD5KtNS6b1FvC459hjnce8cojqpfUGd3rF8UTGuxMYYK2yxVKmZBtE9W9otdBTf3tBcGbeyHV6V7vsL",
  "key9": "cMQxTfP5eqxbcPMMozVjSe9dh9kUS5LNTRWfQ1AHZFgAKEiUqiPmz2ivgFXbbMu3vWGVD5Sgm3ygBM3UZVJK4CG",
  "key10": "3kmxRmpe2tKZ5NxV6xZJbtgo99ZV8QaL6GNeGZ5aTE4eYYtMtSYfFWwshnuR2WuRXSRQMiVTd1Vmz6bHpXPUc4ZT",
  "key11": "2jMZAb3WrNS76CeWwtFAqEYFGNHRX61Yuy8Jqu3q7iR9NXtcsTGn398pe8WxmtDZqHHxBaJSvp7bc7hGaxGPscoP",
  "key12": "2grDE2uZFw3hu4MpvrCFFWQytCBtEn1AiWHcgyFpqVUtfz74TtbCezCxcuiydRdpXJ6sMvFYg1iptynB6Cf11KBi",
  "key13": "zULS9D5dNNyNc6fNRXFa97oU4W83HmpQMVMaeYCgZoBCYqbpQAAiB5KysuRADVLdSQa2DxgMNZuNQ9GZtJQ3LNz",
  "key14": "2rxphyCD8pmvw942LyuxVCMkUzQQawxfVuY3MjczQnXD2DXYkVtk5mWSzcZK5cNsZyrcA8usneQ9K5QfcNXRmYQC",
  "key15": "3tR6vQfFHE8zN1XooMwFKC3hMiFrtvzpb5nWs3Yna6NXAEJeMBNiQW6Ncw4oBVh2VKU9s7ZXtAXvaqEd8tfKbz8T",
  "key16": "5otqeP4hLFwdPYJFLTzpgxAq8HbYGDiFtMwsbhQuPG78Ud21gVV6C73dJUJyCvNYqxULpPCeKMxqrtfVVQ9RA8BV",
  "key17": "58x7ZKVeH5mBRwff1KmvazmhYZEjcoPF2ifqpcbrvVp6AVtrHcLktPUZSrbMtPLM4yGzrCy89AedkbkzamEchtkM",
  "key18": "3a1ApyP51WkzvTpLGE6LjYBq89VVDbtnSsaZwedcZGRNzRbUfGJfaYQh5Hc5bJeJhZHSukDFs9XQBguGYqPwJ5zv",
  "key19": "55heAxmbww77rJqfN1xuuL9xp4seYFPSX7z9kxqshUEFrMQVJJDa8MwCMeSAUS69FQnynBsKzZYMdpwRcuin4i1k",
  "key20": "5MfnUrZVomF33v2yxhNTr6LMvKTyrcs2LKELzQCbxLK58yYFeT8MpQagBHQuiTueUsa3q2VNsTkTm4HMdJuXje9W",
  "key21": "2Yhw78Lg5XBGaVZe9vi6R89R1GHP3uoVpW3dtBsNWp1Dz9gC8yRCwoh2ciQwrAQy4UZAsfiZ3NuP8ypwstMtDTVf",
  "key22": "2HCmvsUEdoSWQnyrbyfVpLivPXHJff7pNnQJgTknFG97NVREJFzKgdQ3f66Four4iLNxPVwKm8FEyMy8hmUvRU6u",
  "key23": "3RDmTx3dzFwFhwSxsBKKQXXi9ofPhoBX5td1ErvGfmdxdm5X61uA8WcZgL8fLg4k1kQbzqBLsB8uP13KmxsWWAHG",
  "key24": "4dsqphRpF1Hn46p9RqsUwTytR54d1Awqxg5RGJj5t5GQiYEP2Fqz5CYZmZvBEixHwaCYh9VvXdeJFo6GCt627BjY",
  "key25": "2YoZz6c1oyDHxnV8t8R3yWAJ8fXpN2xfi6mr2zs9pAGkfCXD8agrAD5tDdEULikP2N3qfHkxcWhhap8XLVumzau5"
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
