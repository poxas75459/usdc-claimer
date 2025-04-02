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
    "5BGapDWxCK5w66wzhgCZRgUKC1o93SQmJ1x6cQPiAyTwUhhWZxCX72U4yoYicrDZCwdwtssuvrZmRN9wjx498NgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rfoGFqk4N1SvjvHJECjenYVVs8MChJwZneapUv1jGiaYYH1pBnKhhWENV8ZAFpBhr3bPds5YaoNGPDqr8xEoY3P",
  "key1": "4V3X4BHYWWAEaxkw5T6Eb9GEpNseQsbPNbcGv3swgEKmNaTb85jtXnHfg73kDXcUBPZ82RXmBrFXKBr9btAAKYTb",
  "key2": "3aRzRECARUefhXZ4GTQRCvBBZL8wqmpCHbNqf2T2xid7ZeHWrGRLk1sdVYTwM7stMH71N78EwTzns7gTNxKoebqC",
  "key3": "3ggXmh5GYjwZatgCuTCpV2XsgiB52JwzAhUkoYBEBSizs6xRSwV4Qit3JSPAqAkahxgcB3d2NXFGU1S3M12zBqYh",
  "key4": "ye3JMkA7YC3s5LTGEqdHJGQdNgCpejmPvfhEoUnMFns8jEdcyfXox96AoTUMDupF7EPwsRpa3VX5YGcTpeaK642",
  "key5": "4CthdpP4TG4H4t9sNjojpVKTav41jxVntsFWkh924aJXQXe7mHHxxykP16s8sKSSAqmLR5Jdw5mPUXyQ9Hp82dnx",
  "key6": "2GN4QJc34KJ7tAJBb8GjpTNoH5HQsnd6Ctvj1gXDUCmgWZ71wMexpLzxUfCwdCGg3fWv4tc9EF4NeTreJarfmPQp",
  "key7": "5YuaFApAzKXFcxC9MuKMZuGiLPMsJx3p6EDWhwH1zkYWXsrAwMbhvFEpEdz3y3sYKnp6LXThPtJ8xNWVA67FAc5s",
  "key8": "3bRPKnFNEHazWZznf6ks7p9SQbzippzzq7tBitowteCMmzrZYR5nGA2PPXdySfThAoWspTAks8xuZxAn42WnapqZ",
  "key9": "5zHvuBvsDJFF8pp5hwWSVYVaqvdazKZT8mKu6pooZY4ne3y6GovKQeExxm9V5DuWUpQqZ5uWcCrSmguuDxDozJom",
  "key10": "4beZjo5oGdCyoSfHRQyCbKjFnfouNXstveGjgf8u7oAFeuzCjL9rBWRcgZ5L6Y2w516TRuKdR8BGoXzcua1tNjx",
  "key11": "4X2N5sLNtuHu4WN9SimcwJ1fasWubdASYEcRaNv3tKmWGin6TuLEFnCGaxW2U635F7Z1sXq9zgHU5dxJxoEaJ77G",
  "key12": "4MN4S7h1sYZ79UEgNcn3ash94vUrQfUYASFxJPbY4GJE2D9RAqbBdzCC9G7RhR5RZtAyxv4MpTDQa648TLdGfcfK",
  "key13": "RLZ8FdsYLDpq6kk53JVt4LZJ5sAF1HJvZTvFeiSHYy2crxuaZhCjffvDZT2PbeVjiRJgtxTGc86CJtuqG5eb7gk",
  "key14": "4GCQcakJkDRrAhBagsv9s45WWcztwdspnVnKLh58fbjnxjQBzFhZ1WMexHN8t9hTsRC787K7MRSU6ke5Cz99ABHm",
  "key15": "3eg4QWs1RY7KsUAsJttLZbNV3y2pyJ5XiSn6zsu35v4W74Mwt6CULeksttTzmrSGk4gih7sM1xwDxGvDg2oCUKAS",
  "key16": "X8mAhUEjc7f2uJL5XEbWuzUBNFpLdir4n3RL5fEH3E7ueP3mJh7arpSbcd8cG8P6jTaajUwhme8Ftzwb5zojNTW",
  "key17": "3onvatKNQ7cyiCp6uEacby9R4AxdoTEs2SBQoPegLuoDaXioCvqsXza2X5gSYBrqM51pzM4ocmPoY9PYW1PzYYCc",
  "key18": "NztGGkSJb6SjcAMBw7Eh5SctTKixuhvvLoXdLGDUfvdGKAS7KzMypL92D5Z8EmWXwUTGuMuWgGFp56agAwwgtUR",
  "key19": "264WCRZTvxM5h5QTtpu4LEtQpS4co11y9ZtpCCqYysEhrS87xeJdxkc3ry8RaqRPkjrfJfCdtHqMgkpqqUpnsVJo",
  "key20": "5uV3bDUkH992Lm7GVU6oAo6e9mPJhcVverYbq4gefEgnrD3uofDhqkRY1JyArqxc63bMP1foiMAwoiePpEtf94Jv",
  "key21": "fm3vqBHT4jPLB7FkBf3cesyQnsXA8Dtz7EzVnSDkcB3nXzScxEQkB6Pink5qeowQu7o1Mxb3cRMDfgBHKjZ9Dwc",
  "key22": "3fVarsxY6NNuS7MyH1R2DEBHnjeeTq9vbjkx4qC1goDEw3AzVL5xPb5Go5EHwWrTJxnhHawK5pEdPKpLPEQqdyWZ",
  "key23": "5VMyDnSrKt9ZcWPZruEL63sZsfwdzYPkXapY5BeKMtUiX3hsQ4kSP7EYNTrNy1W4SU1By4SCB11tjXW8CQL25Pzi",
  "key24": "2GbRdFA3HBo3SsfDnSLTPnbunNK3ZqiLFD3QwNgB5Anscw5We3hUyXepuL9hWkz23bovZ49Lv96w9T1dwXyNyGbn",
  "key25": "4ETyThYfyiEvV3mHV3opBhhfcbfNPX5aH61JRoMQiW8Gm4AMVnVN7bguUWqyE1U9zzGGvcX5ruiw1nhcxT1TKay1",
  "key26": "2xi9LR9HfHV5NtYi5eMSK3Gf9X3hpdzdN31outWwp6P9Mq5h8M2DP4KNezweete48asT51MQZMuoAbxpX1eBnoHG",
  "key27": "4iu2A3FNKhZjg9bRAsXf2vFUYggXfqBXhNpibuqWHJTpoFTqioURq6DkY9uDKxH7wvFfKQKy6eJoLQbU3jNSQTrH",
  "key28": "49SDE1Meh5pp2nDsuj1QMeXqoFYDJWk8KyABHnE9BkHP3QMJM76f7eT2AGEEiqf5kA36pTv8pdS6zX34ERe8Ddow",
  "key29": "5FYhUMvk6U68vnstnH3JyZXP14ShKACkenpVCMbSu2fyzs5sWJuzaMBf5TqB2FbrsoZDe1KWr9VV35Scjb4fGepo",
  "key30": "3xoDJ6oAnu4S4pV7CxawrAT2ekRuQxFZQSBKtymQvUZLuRU59nqTzkUPDaf7teE3HAm9Ge2Gm4jW3McEpDF4yCec",
  "key31": "37K3yGT8M1Up4FCuMGD2Ndmu9Bfmo566rpPtMZAQxbs2VkpcBSxHR87BUkhdibtqujPiMT7cXqksFya3dQE17FA",
  "key32": "4Q9v1EKPUMHNJRQ5GJ9jD7Ga1kQwJoDQc3HgREQkUw1An5dCyVNuUXvt9BFxYEWSRvhnEBjfYAUynNpCWE2Csg61",
  "key33": "3XpLFdRiExh1tLoWFG1y1rtFpuMC7LYnn2cSvxxHTq1eeZP2GP3ZzaDkJxy1X95cW2J5wauB2JxYjCD3viLEVbiD",
  "key34": "4BkS9vZ1U73JwAurBQSUqPsGD3YAEnmmbuoHmqpKNoTkA5poQVSnJBUXKaqN8gpMA3mPrNBZWqBrz8EfJAYAacDv",
  "key35": "4utTG8cbqnpCPEyQ2n3CSHEoxRcdpjTRgT8TtawA4oiWZsZxV8pbZvhZGSjX1zQJ6MBs4i2idWynNeakWr4TR6Gf",
  "key36": "2RsnNsHxouCwvy9cyckbm2Lz4cHzm2kXxjX9YvJcvmhi17WcKKXs1ZyjdtvcpWYVBM6hYPTapCSTUrw8nyVpoj1Z"
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
