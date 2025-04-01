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
    "2fP6qrVMFF8jqwqju1RgaDgUiHxUbYDfdhhSSQQ1RistyksAKDJMXLyuhppazZBfXqthEpTknenAvo5cbKBmoe8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SNkxMi9M2CCMFJhp6fzC91y77Hd79gwYiuZZh7tpokDNAppeNU9WTG6wztyfUp72hJXMJiUrU2kyxK3yFubTYjc",
  "key1": "4DgxQU77WmbnEr4qTUw1E5ew2RbLArQcMKnvRfchvqyag3gzxu7RDWNvdemJQVZhDjVtYk32tLFQpgMkXDJPZBuK",
  "key2": "4WEwvghFLW6JFddAuSQ7nttsNqCxFKxtsTNHtz2X2fk84qr1Ndvw6VdmFJBoe9ayidgqfHn26uvjUWBbUkKaPavf",
  "key3": "3RLhFxpeCYxqqis1QcN3vUSGV989qdzS5owAiTnPj2MAjqZ96sWGVrFEKgKGxw32pe3o2CDY2w6QDrEK5gRZ7W3s",
  "key4": "yZHw8Y1KQhNBE5CGcZ2aMUQqZgQMzby2VNrnzARtdRU7MaeEEwx3u3RHuKLNjTBW15yW2h7U6KjZE1Lxy5pHYzE",
  "key5": "4HMQGBQjbAoH1xtuKXAZ5YNnZ58HrPYBShw28SpdVwHHRM1g6rPLSGmSQHKYp9hhd2J5A3oDUNCuqxjnhmisnjYF",
  "key6": "4poWtd2a7xSnLzUeFURkh8vBiwEkuXKRHPeSNgq6U8K5GbRrULe6qU9iv7G2MaX1GrfYRvC47F36dn9ZK7yhU696",
  "key7": "8rNudjTqtji328ChUB1KhEFsEejS2fauBDniPbBwCdUFw5VvoTZPy3agWqgK7HcHXNZn7XcN1FEnLcR8p1E1nF2",
  "key8": "3n72AS62Kivv9LjRWtYchQXkTM9vGvbkZ5oanLbo7xrYXXEsH8EcT7ZiMxg6NLe7G1BGs93Wm4Arns93iQqEiZxj",
  "key9": "3STaFbFfWdSqJzk6qTwBgnmP3jr3Qa5QGMnAgq7nkyDBPvPirvpgEqaMxnAt6X18jLnfDiQBVi24mgkWF4n6agSX",
  "key10": "48ihY1fzt7kREtAPKDG7uz3T2ZreE8mafVcrr7T5GQRqa43FHmnX2fGzGMLbzxXfCsfx1KzWHa4KS7jS1JYgkjBH",
  "key11": "2L3yVjzKbWyDNbp2Hs3wwdy7XtPqXTp95K72zepKAQDLA4fQdDBYMRBoayQ3z3kYQA9ZSp2xKMx9zH5MJojFNe4u",
  "key12": "3ENGYAXX85tPHdRWWNPHBkBptGVKuhLHwYi4VwzTkX872xyWBv6Jqj9XNrsmZZWHkhPoCdmWS1u1DnGvwFhwW1Jt",
  "key13": "4PcUJ6pzbZsWLZgR4p9QfajrVHrhthwb1UNxaBTgPWWpXe4EzVS3oJerxYdR3GtUJCeTxqqEHFQaU8nK22A4EWBD",
  "key14": "5sbGfzDjD13LkkM6q63qhwYZHJUcEWLqaL27Q1VxCVjjPR8ZpSwFL2Rms3dBivi1xpZ4KEWzUk6EJhnzsU6WCevb",
  "key15": "5YgRjnSbjnnFDWADKwWXeZVFtsube7FwD3qwFw1EyfzkYwQgu1o2U59PycJ5kTbJV6X2Sm3JwXhe2joJzhxsUVP7",
  "key16": "5j6ZGwhoQfDPk4u2GigBTfMPTcSdQ3PeVKyrPFG5uUsQSXAq9worSaVqwB9gt6g4W3gCYrPB8RzWwppUriMYeFG4",
  "key17": "4XTtD3fxsJEUgxBArR5TFtLZ1VZ6W5kcKrno6GEQwdtALp2qPzYpxCdhQMGpyiahu7GB9jpYtBRRpeFwq8uq6jD8",
  "key18": "59MbDeHNnYKjz6rZB7dUjpAKvnVxZApsLxRJRp4NCodnFauCa2AKaQeF2xakZSeLr9axNVKbHJDfYAkJ2gp8G4a6",
  "key19": "26VMemjUEw1dzdhyocsHLRLYxn5xt24PhxmKidW5yxMeA8tnrAzkHX66dipijBaMtZTpaDz4CmvQw88U4PyoajEA",
  "key20": "26rSxCp9X33Yc3tyZCATnBqvDmjLMQEpt2vCbGDe15gmTazzJnsBLRUbCt5WHvmgCDCUYaUSN3d56JoAyJcL3CwK",
  "key21": "C4odCP7SrsCb3GjadFRQc5Xo7PncK1cZJ26rUTrX5jap4XfmJfxumK2Ssj7Qjro7A57L1C6KypmF4mYEacSQQDZ",
  "key22": "3Dyh4pxp9KTJ2rvSi7KKsx44kJnRp6hgG6TuDXRcQWrQzyH5EtNdk41Xkg7WbHzcqir2jWuJQX4MLPsh7x5KBsbP",
  "key23": "YtG1xZn3DJ4L2qcAxYRtmKGKvUSKXGuf7ZDcu6R5krAsSeYUeS9edR83ae7ECuGb1NAZy4CsLfoXTnokHMgp2Xg",
  "key24": "2stpbV74juDtdRNngg477wLM2G2uJw7gMkRtCTHu2CCQuPRMRLuJ5SacSSgwVoteMbp5J7vskAqDiCpo5pDbb6ti",
  "key25": "3zMojjyLRKdXMFtdYAgvZk9w1DpnQJU1VbkH9G4bjSgPBBqcAFpXhZ2E4FTipDb483BiPWxEARGbpBqSv1to2qr5"
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
