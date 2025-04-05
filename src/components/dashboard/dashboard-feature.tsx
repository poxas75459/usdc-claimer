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
    "3QzJdmftEz6jZBp8J99kWXFYzjhAejK7q1XwmUhPYVp4f4MzwQRVbWMrQcYbe71T4P18pHNyx18Xn4XreYv3NaGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bgKMvgoGhE7AZtQyWpZ6v1aEFVyn6iz1XAcvc24pi3JrLBVu6aL1zL82Hk9xX5yv9VLKJWtSSNMioWo9CpWKV5u",
  "key1": "3VDxd2pKVVMjQGNnyLwMokUyUsW3pTuDQ1iTBqssAgwRLLrpQSZuAuxK953KM3top2PwN16bqP75iTMt8Vb5bxoQ",
  "key2": "3D7mUsYVFmyQB3ujkKPJqK24ksqZPwj2V4MqJByis7obfta8q3ZddkPycmwYJhUVVagyQPGwUigqzd8uEzjRtRdo",
  "key3": "43oaf2mbXBwY1R7WXQ6EMFafHhwS9EpuXyERDbCuhR3t84mKcdKUSeAbZ7XnLWJmgnCyBbfnwSEPjKeNUu9L7wp8",
  "key4": "2qehywGKexMHs4ELQBZWJw2cwjJF4BTPE1frTH7G213Vm3bTieEuxjcK5tCXzVoTttMK2thb3RoNK6DkLAyYTQYH",
  "key5": "3GjSXvhACoAsBfLCpS3iDZo7BTkQ3A832mNzeegAxUF9engHc3hmaFWj9JjNVWKGakC7pSqVr5ePwDg9yzdbRmQk",
  "key6": "1mKYVmtUT4mefqHh8ygo1kka14tg4s1aMRtzxsLyPhyeTLbUz8S9chwrX6XFj5X3BYZ3Hiq8rCd3PLsoarjo1uW",
  "key7": "3FZA7uQmv1KGb1HoLC89RoR75C7veTxwtPscYgqFgcxNC4DS6HxLUXMCSSERCrsY3wPbxjLeKqNGCqEcctuEDLRs",
  "key8": "2Si7XQacSeA8Hfxt9MED8jEsJokRHBFYe9hKzFmfAS7GjreVUUYpmVFPabiMQ5PCfJu5CEtdNFMgSnnNfUMSdNSW",
  "key9": "32XcZQpFV2sdZJzXYxuxrFedCpp5pzRzVMC8YEW3uwA1FJrGuwprd64mM7qnRfAs6WuA1kybyU9kQgLP78P2qbqg",
  "key10": "2AxeUjJhjY2sT2rBQEtPCzxidTpwJx5HoNexqRfKq98TUK42Preqe6PctWi94qR19HvD1F3mbCcMEetYma3C271p",
  "key11": "3A1ep4CDgApSj5eAJL3aTq1wGxdWhdM8nMNbAsWdqKT5r5B93vnh7QCiZyVAhaJk2s3KHe9DQf2TtfqJAuZHB4eg",
  "key12": "nNxTXzvWJEBbFQnYtS6mrsQSFX8xBVSTmn4qU3uamt4BDWU9VRiyY4pSwySNYnC7uTCLwcKr9gc3UFxxesQEpNg",
  "key13": "5M5egHMceq3Y8Q788bxaLS38749SFjiARDYseButZ5fJuv9rzYBCVvaRzbmUcjVydhs3DY9rj1Yoo3SqmwTsAGHw",
  "key14": "38zQUjWiH3iB4cya6CCbV5doSrg21rAAqRyUSwjXH79wMtmgSGBey3b8LNeXRuPiHbm5hRPgNBbKcsLbLSyFo8me",
  "key15": "3kJUKd5LP3hjyQqB9dn5kbqwP9smEmsVuWVtWL9zxLjVHcgCPGibwz2VsdzEaqJ5ttjL1gNhqf2sw3DU9afAfD6t",
  "key16": "2kuPmEthZoUJxXDHxDdr6Jpd55WUfZJxgCTBUgbEr15y62y7LkhjxaJpDFr6ER75iHxQR7QapRK2vqkKbUm3xTLh",
  "key17": "2C167WAat9Ysqrts1xhrP2ebKFSnXHFsxSkgAqrk8mmSnPFKPreU1wXcPcbjMV8n6hJnozNPDHqB4CXUTjXauwco",
  "key18": "2WDxvNyv7PL4GZCpQFLYXj2f8rGjrR5TpeKGKDtKGe5hx9U3uGUyMGn3UgYJUXjrpmCpbEgBiRUaM6FkJYEQag63",
  "key19": "2xcF49Y4qtu5pbYkRQmYQNC57CcryR8LANRkhzZ2mDS4drFDqPeBFtMS5BksmQT1ZUw5ijEnbWPMtjwZhUXigUNt",
  "key20": "woygLecspKBBfe6c7rpmZ6geBrNTiur2QLWHfiNsGd3hzVocyw9inDKHTfe2FzkZv4dndZ1hjaewfWDcmEnNruf",
  "key21": "26bd2GUkaJQavcf3BpTR3wZJJMuCquV3JeVtwVcurpA7fVzHUtFpsuzHX5zRb5AUJgvYd9FJMRJoEDqW7HyhezWa",
  "key22": "2Mq4qRHmgJmo26XnrAWer3MpKQAUXGH67PP7yBzRaXWNYYVE2D48r4ANtakis3fB8MpprnkmLyzZo7nyrSQEKG6t",
  "key23": "3ycpRuGm4W8fC7yfvTAPLLd8xpi8FvqkLTUN26ZLZe7YCnDyrbkyiSR4eHMMmWqBJ1HZMt3vzipeybTvKkTLnh5S",
  "key24": "4kXcAqaWqujyNbPNdDqPdgzXsB5up8LqrqNjiCVUB5XTw43T3Exze2J1DdcsuYNQfJJctJgnRHuzxSSTLe7CMiLY",
  "key25": "CHGJye3y2j7gvAkdXm8sUifHeg1DrK4uMxgqahUBepr3P2oWwpM48cMKcxuHGKgboKs9KBPGC8jUMQGwNAKaGe8",
  "key26": "45ckTkQC2aXLoAyzA46uxjjGchkxgTtJzzHTGzKJAwSPrjaqM5Y8CmKSpWYx49qrM8nbqiDuSWJ3tvS14EdfVNVA",
  "key27": "3N7W8in9sTAAyPLoY5VHbJiEzPQLdSTDa84qXb7DMsMNsJLiZTEyGTEWBnhiPdPFQp3Sc1RSATEen6Fn6XiezHor",
  "key28": "cKpFGNKjUuWDgq2Wj18oecPidrEwvQ5R8f5dLDXvApEbWqLpnABtTty4A2CGmCd1J5FewV7vKSvqzDTkA9FRrYw",
  "key29": "4J4NcF9ExnM5Xkd9BUrPAqqxMPJ7J4nFSnYgDR6jLzRvpFv87YFi3PtofUBq3qrcBJLUycVGGr3cEPQMeT5iBLfc",
  "key30": "2zSVpVdw9VpjpfE65auLuy6ncFmYUz6382tGftTbacnZWMYfodNKazfYqepYLEcnMqEBKcHaKbwmQcC3nf1CggZo",
  "key31": "EJ3BozwTCYbaDsfzbcyYyxLS79n2zu6f1m2ERsKP4JSyJaa6dGKkBScgoHy4J2vBYkosvSPZ6g2dSfp7mwYM8jk",
  "key32": "fux3CreqpVCzreErojL5gPAmz1wKkPZdXZP9pwVHYxjHVdFnVwJ1HkhxphGXxbME5ouQwebhp84fYBw3nEZ5jTV",
  "key33": "nbgDo46P15QPvdiXBBMNr14Vaj3KHb4AVvvzvDxMYin8ZSw8ydocVGTAW4Gij87AVDUuAKxCrFP414bXt3x3s3x"
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
