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
    "4LSW6UBGN3UhSqjm13obduyCDvxERHVGt8nuTXiLDsWJpAr4Ryi9tNMG1h8B7TxMMF81DcUE91QB6cmeYqywxq5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vh5RShnEqfKHJaEemWtxzYgRJMqqkyRrvmeGcUANH3DKJ5yRVbL1Q5etVpJUTznLaMCWyYSB4rog6gxipktcfyV",
  "key1": "2Vxy3XaUtTxvgqMe3AvgVRokbtXyZTN1fxVMJf3HPfEMzKMEictLuht8Ekot1SfEtpRKxXg8K4iFNwamuNgs7eCF",
  "key2": "3GLE3egKKBYt3LVxmYRxrmhj5MDVmHShh3e3U9YGVHoE4xKLH5EQRsSVZUeuoLg2nWJJ1QKkeUUFfGLVJZYEjpVP",
  "key3": "52DMoVSe3jLjqm1uR92MStqiuugooqkzvnRXyjmJcEo6LbfVC292zrjtufF4mVZKAGAaieT5qCphAvuJRZYLd91L",
  "key4": "28KVUhXHfnhM27dxW2S5it7Sipzjo8w32sPbo4suzq3RZyeDoiVuDAciaomBYpjCVoDBuuUW5oGVKS2SRENTa2hX",
  "key5": "iWRy7Z4RPZh9Utyh5EdERoSmKoAeDZvHcbkTUpTxaqwHxtb2p6iZVow2fUCci95rMaVXdYgWh7Nmvw91PbsbXSj",
  "key6": "2AJfoNtLuMd4HQdws49eXNdqLnLqzXknhqckSbKVDNRCm4LPLqGNCjxxL6Tz3kVM263dhUKi4gJc4vy4mTC2yZhy",
  "key7": "4LE3rArWdbC59aU7v9jZJ42NRbWmdcpAwtsx6sb7x7AY7MN9AD6ZeW1tFu6Dp3zR5FrtzTRKAH6Q79wWQBzdtJGM",
  "key8": "2e8AjnpFidHxLHQckdct1zr8MbQBk25UdY95KKN6BkyW8hNXWG8kvJdbhzAMPWs2p7B9Zd7bZQJARFGFHT1D6KYx",
  "key9": "JLrYHRzg5CvU5ayauywaGiHsZZTDFyp1UZrhyWeH935YmfAw1E6XjMgSYV4LsGgxvKwN3d9fH33qQ2FZAgaH8X1",
  "key10": "45muFsJs6VJwUFLVJMH6LfhY1Ldu5eABfHSTcSyDAQswvr8Uad3z1NoBUDAvJBtsoXMJXvDBsmKd4mAwoUbExoCs",
  "key11": "2w5M6q1HnGiHqtAj2C8Ug5fYm4nJgc9Wo1yMh3sTp4X26GLTiYjpF8vdtyKuMg5gqoo6vCkz8B8jMPCvZ8xmFKie",
  "key12": "3t3pJnUGNXJQP4uAGfdHkxXZZK3QG9d1Lh91ycQnvAVH7xB1CnnNUyeGgyeHXcVY9nGk7irjZB5E6mGjqVwcmdFz",
  "key13": "49TnPkyFQ8Gon8AeKJvkwXcVJSydJ4cP7UeqFNddtwAM9YXphNUd262kQ814XYxNaA4qopSEJHmseBTPB2t72mQL",
  "key14": "4ciHVinuvWLQWpAAaiwbYBFfmhmf8QXmkGoNopw1xrSSMBvxR8wcdWmQ6u8bKDJiS6LbkjS2g7o94vtvFhi95XHg",
  "key15": "8xoqdUcBkFG79u8QY9pc9xKkkZ65Vd1Yr6VgteaG1QP3DuWTNr4oAauJsGC44jAp56NNYM6Ybp9v61fsxLBe6T4",
  "key16": "1xrnxhJtUfyNyqLWaPpXBkipvy6cGmkSpaEJeeMEG8VQHYyGnuwrGeUMK3SmaETpRmzGYzk5vtvdCutTQ1PVh2Z",
  "key17": "3f4t8NDzWtjV1sgAYXE5gNBzYvoYCynmjNGth5DBhu2UnLER2rMc2g8siJmjHiakAT4iMG99Z37w5WjKcT2ybsxR",
  "key18": "3CQw7Rr9pH2RXt21HpuNA1JhWrtkxs6MJLwV953yy5CHhtuAhTzQSnaDpVDe898LNMWzLr4Jym71eN4MLwFWh83J",
  "key19": "5NWEipk5bBLnnrDsFQjp6JhWQDycQceoUWJXoFrNQCVxcTf6etSpmjDWDEbaAqFsBstNnAMajmHkMTe29CGJ2huJ",
  "key20": "49gsccKq8P3cvzk8jmcfqJaYaVuZdxix1k3pa9EJKsdNox5Lddda7tcZgtZJB1puwaXS67vgDASuT4emw2KypbAd",
  "key21": "4YunpxaBs8bPGtKzipJe6hNBtFiEayyvCnqeePj3Q2agioMcvWvnr5H9DF2tCGamAVDdHMYL57Qe1cW8X82rP9ob",
  "key22": "4FjSJAzkn2drRAeSM5BmYTAq4AcMx3cEquYsjvNCofb9GgvFdZAW1EfJWv2YFtiTFF5PnsJ1i8npZWfnr1WhsrP6",
  "key23": "2MfunF9MsjVmCojpwQ2DdRwe81QS75zFeGpEHuXSqqtqwSnStguj4RRdtDV6iwD2rzqyVX6CykqgLUf2UiMG5wzM",
  "key24": "45BzyrS6HgiR9cS3TYbVAgZGfti742kdGXFJ511vGk658WsyyLtrSofcibGVuXyk578Y8gCiE2yrBzdEAEp3vwe9",
  "key25": "VnFN4Dts4QaLb5wmpeaThThxhQhpWRKm8tP2pGLgJNpNXiMCgox4shwGPYmL1azdYc2DgUdA6Di4o17zgQ97sYe"
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
