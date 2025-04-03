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
    "5R4Jay6ndNwLrmCqdchjmZxNCzu5tZACg6MUaVQajJfxz8qatxRv7iR5kHoPancZg1G7So11pVWeqkvgiNjgP2kY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31YEqnokcuE1Nb45HADDwJaEGTxtpS1W3SA2A6ZBFe8UoAGjSxPY45i46LG4akXzCdXJMTd4HUEgVrBJftnopHET",
  "key1": "5Z2r98QEQ2KP71B2c4z3v5devLPQiuKxAXEWqWzsKhFsiM8VadzHyCwW1Qq2imytZ5LzMVLwEnvM7UQGUW3KPbys",
  "key2": "gP1JoZe1KEmZrWCdsPQME3HurTsF7FDukbwhFhsFRmsygpYpfXnAYFmtcdo5cW2vqzNdD7zr3yvxzm5U2HBbDJS",
  "key3": "4pTdY3r5TjqCT3tvvDb2fZpm7RAzEd7Xmr9oWahapa6VUjXEtP3Hk8JvkPtgYESnbwnsH39u6XoD3DLnyhWNNcWJ",
  "key4": "3eANMDpfXGSuLcuFaT2JRfV9ccWydvdTusbFvoG56126yfsgR2FqpcKS4r7qeu4hcEEC3RM8kjpQR6bchodEa7fM",
  "key5": "3PLEiYkvXtZD8n9csV8r8q4e9g2iTnB32py4N3CyZNMJYVNgqw3qogu2b2rhrP3TEadz6io36VGdfarQ3o5JTXDA",
  "key6": "2dFrFvXY5oL8YrG7NviP5gJaJucZ1zmgMstSreasgqj8PXYZuDFTmdGMY2XYY53sQxHZarrAodSpoXVtB7i4C9aR",
  "key7": "2VHeKtXJeypxJsP2EadAXXbVkxmHmpVTZeodpzDT9rUqSaXAK6D32efU9X7xnfuPcyjQq9isVmT9bXNrqnN8bxTD",
  "key8": "43DtsSnBXGFRQvFNzJQAnGsuAvkgbyCRhcLLqVZrro7eYqHy3jhRE9UCb9ezjwkk5NaKvm9mhCdSgkXB68nMSauM",
  "key9": "59uK3Dj8R92NS4HyxXQmqQxGrZRKHEXEdkyE6i9kXBsvQMjB1MLUDnqsafgLkCcpjQDnwdfTW3D4DnaiDXap63Ys",
  "key10": "4HUBosT9vutvj6BAisytWUZ83TvGGUDE56rpSBxJXeijTyFCeDnM7frJQgq9oib6EKB4XV4ZpXd6krJbJvL22q4F",
  "key11": "49jfBSjFuwimm9znhYtxLrFzjzcDcTTn8ViwAAKhsc6gwZjMGvKvuCBtWhCfiTAyhuaz7ftiMgDsXpfQNjKJVGb8",
  "key12": "uAp6ZmQ1UrDSGZGQcv5x3tnw8TqX8N2pABJBK4R2wMiNR5H7N1vVLSpSo3CkFEYb2Sqotew7aGXFLMfVUawPCXC",
  "key13": "5pWraY87CLnvrZ1Zjju4eA6oFJt2Vns1cPKkT4PKo6NDi27cHesnEPqbTu9HKEnah4sWPyUd4dcxUucv2p69hHtR",
  "key14": "2eGF2zJtsor7qaXvo9BzrNbrGisuz4jPkY3rc8MmoiciawTrW1qdvhANAdtbUCrt4DvSRijKrWcyKMTThJsQyb6J",
  "key15": "2sCfzR5C9MEWW4jHxLGgVzWVWCq6eiP21covRsaH4rSU4Ek2sYtTd1jfrALLmiMPtdbUk5iW8MfCHMeaE9bkYfmH",
  "key16": "4tcg2tK42TAjsoRXx2nqLxHYsnaVibaruLBgCiHtJ8AC3J5RFmFD1neRev7gDgmKPaL1Y8gFPn9RoFMxU4Y7H7MN",
  "key17": "5gFzUqTy54LrjNi3MxTWqXizFdwceUACqpBL9rW1bvw3m984znzrpacqrj6ZoiEHc4hNt58irnVWze51v14D5z5w",
  "key18": "3tpy9PegMtk6FhH6jt3RrmWu3ECHvT4Z1UnK8hJy5QAoEuvEBz1uDBJekFLi1nAzBAYQtHHKfhwJ2Yf1uHEmUVKA",
  "key19": "2yDF2PGN99oA9f2tMsTU49rqMcSwKJLvFB8ZqTphecbY7uQkXbHmXeee5Fzz6dwzTP8tPbzyBYrp6diPjf84REQi",
  "key20": "2x5CUucgmTZYztyycYUyLecpmguM7uo9CPzAn8FB8nMm6eDAnijSnsrHk4yYZcQ3JCqPeHG6Mj9ei3mhgQFkJQdL",
  "key21": "2jMCEURzFRh9AUmQvnbiR6hhgwhQoUncQrWceyz6s4HLGJCvL1eJ16ZduJGLF83NUcv264WGpPv26Tveb1JT8CSq",
  "key22": "4HdaC1KJpWdHuA36pkNk6Ca3eLfGqxhzeG8yqzX5zEn2kRHFqAjP6esUYeaXqLsXnruY1DoUxudUsEFpWvJyDNZ4",
  "key23": "2qpqifebJC356vdPLu1BBKexiDbbvWxauHuagQ7LT9ZU8yGTjRevtnuJNKwsvAmVzcWWxNJyBetGcTF5HiY8JWLg",
  "key24": "o14yKR44LhRBk6E9kDbr1kepYuXzybyyQcMzGyuReVeP63tYGjWN7ZSCMbnXtYZGeTix9hGXHKkHk8Q1mVU67E1",
  "key25": "612jnZqzXp3hBSJbwfpKj88MXpQB8sE8SESgz3oKmAVg7qKoo8UwAEjoRrmCnbNRxsT8qQgUvsccTH2rmXYvB6nf",
  "key26": "2N9ip5XE7Gg8ui4eRL1NjyJCkneT7TQENCZU6FHZmFjThvWyCSuaHhxD2LbhZQ7JSuD9twqaDXHmfmAUn5ETc9Y2",
  "key27": "5ytkUaRgdKxnf7s4WNH4EWS17rWyX1kQhFsavZBC1nEWcum76B9Wcw3wgUhkWX7ksutcVQiTcunL5NFGDkXScvtz",
  "key28": "36NR9ardMTJsHdeMCiNbyXhCBrh1EhYLyqb81tEaXRbfft3yaMKYbeCKGDtJmnqFBHRQCWqudUimukotmEhQ954F",
  "key29": "4a1FoX2DAPeXcU8FNiYWC3er7bFCa6imezmCkCDbzDVCm3DNPdYjTPzcuMePaS58usF1p9ZTNSz1gQAVyxivCZay",
  "key30": "5xGxw1V1emVPWgBK5344MH1HMAXwX3BUM4msqjDudfTtzWEBUDaQCVim2bQavT5XPSRJAMKyZh6J46haGmhWa6E2",
  "key31": "5MizXWW9MTqZzFj3SGGQNaMM7gdLy4GHHycYHApHvkcASL9FpeysZFWR8TSpVTwLHgsHstCmAtJuKK4dWPMqSnQN",
  "key32": "4nVnKyudhFi9QGuzZXdCbgJTFN21vWo8Bebd7feqVAi5nEGLFmcMRWk4TnVZXevVYVxMnnd16oyQEfUD5AwB7mUB",
  "key33": "eUxsSSmo6acL2k3LfA77NXgu61BUhdyWcevHSid9tm2SPutPgKDTZ9Dtg4J4ygaxp16emQPYfhFhJs2B3gx5ofB",
  "key34": "FzUxUjT4faBfGN71xSTrcvqmS325L769TuqZrgy1rsiXsKvfKGhdGBN7DNk24FP3kS6XUK4ZYA9AstWHY2GLRXd",
  "key35": "5cVdo2ktdz5BPK1Q2zVL7VFgMVhz1vWxhummHscs9qX6ZFEcSbSdA1YdM4gECZJBScCbreoo9hqAxsHmGg3ykYqW"
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
