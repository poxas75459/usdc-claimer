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
    "2Yn7FY9W1B3GHykWATLjuTEy4Zj39eVvLGT7cdkNX6rqzpL6PsYeh2u63GXS3c2SJdQAzDQvaNd1YXWjMTa35ZhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pMGbGfd3j3xEHwnecAZ5szW4zh4CShid6rnU5uqqQnA2stESfeC7hWAoYUBAsU7L6hAhCBGSsKQncM623s6sPQ9",
  "key1": "5T3ycVZDWB2y7UtLdL1vMZFn3owWgAKHjKKYsj66TkgZL1wRLJ7LePcFLhoxzXWRyWfeAYiHDn3PVNYyPQwrh7oy",
  "key2": "444kwdcdq4QP4933SBtZqxqybt3HnTvqztLJTc5qriynYG7V9b1XjgFcDi2Vt79bo3hRTTotLrG9v7TgwULvF6q3",
  "key3": "469wKPrsJrF1MRUg5uHfk8LiDyELh78Vgfjo1pFnu53ERjTwDwniVfs9TVpJaQTexnamWHBgEzhBgow6c8uqu8vL",
  "key4": "2G342YtzBrdPBPSqaUaLPXQHUuFsyu3v6XtD7WoSzL7EXexDiWUSQZ5gyRsMELfJ3pSpDMZpdxwAyf1iVk9jw7Aa",
  "key5": "5fx8JYaoL382iX5if712rQH6LeBt57T3Cf9cc3djHcNir1K75BEYNTh5TGF2RipTdYaVxf87ePbrhM8M8kqJX2W4",
  "key6": "8rLji3FG5o1Er1tVjXKQzDt335fnCv98W7qdoxAxNExxTcu6nwX5geygSYDaGLpm5f8snXpxoMn3vdGHJ4zqXw5",
  "key7": "4GT5dJ8ADZEu8WsNKo5qLB2kAaB5b84gjXqWZ4TDW6mNZVMyr7dKJFLuxq9tcXCHXt2qNM5wnb4nfH8YhideiAfC",
  "key8": "uChg48vdxCQ3KfLLg8ymKFGfQCvSmpYKs56cLA4xT1jpKrRuC5pyeVgjBKtKQEGmY4fxEHtZzoKaBzWP76aZncb",
  "key9": "3c4kAPno4LjkTNs2kEE1jJF76RSB7AywjYXwgw1ExiqFqwLcmWqkfvUpP2KNmRAFzyL1tNVraq83UFUMWQ6J2mi",
  "key10": "3GhMjrQ7fV5dqFd8gsFZ2VbFBagdQdFWPGY2nUvhsQCBQt4zpdBc3rPq2DrTHVhBV4hFVVGYoN1S4BMh1m3mgSh8",
  "key11": "679szT3pzWNEdFu5eNGi5bdhhydmT6WMuW6FTFW7uLe8DHpKdn1ffZo3nBmKqFdPLjMBGRsqTeazAYyFtGPCuij5",
  "key12": "5MC6dbpiE2REK1ZH4ewSnp79b6cey4Xbd1io4sKsWRV2F7iHAbUwD194dSZjgUbwohudnz3FwfqGMT6bXEybRT2d",
  "key13": "wN3mgLt7M3rBsQQhrt55qDkFDKbFmjqfp9JJ5jqvoCSHqThc2vDY79uu1gyb8wKbMzmsnfM2rkU5ZTXKX6Tnfsb",
  "key14": "24TAckq5G8DBXEgwhfp21EmSUQgby4zzi3pGncBqjfJMAcTHMBsg78vKcUx2PdGzLknHdYFzQgg9PhrUkTXUNkrA",
  "key15": "1nFJvHHbDPYP4jcReymPgwk7JaDRf7StR1Cy6yc5cvcsmSTwbywt91Z7GHPnfSJ4Kb5VDZo41EEjCHFbiHNgJcw",
  "key16": "4KCwEwNhfYmijcNFiqxGLujCTF3CfsTuZNi4RkMYupK9D71R2ymks6gmCVm2CgSuy3TmZ7FBiTgKyUzyBe38rV9f",
  "key17": "3FDvenzKqJWhxscXD2Qx4n1nJuLSFBPgzzo9jSWfwR8GqvNRnJEcRsRrGV5bKyVYUx7kEB5HFR6NaWNdTVJNWjT5",
  "key18": "4d9UYLZgGg2VCi2bJyRHL4XyBQA6qR5SjVWgVRYsRBsjAPtD8M3JfsD66QUJnS3Z8mUVRvBRRxqyhsbYj1ZmaMCa",
  "key19": "JjefZviTaLRxjDaLUK2v3er7y39qvTWF15n4PgaZiuYEFVmAjUB17nccNWMTbzDTYCPka7PYwtKSvszGG9eFcUn",
  "key20": "4Quce3n7gbdcgAMdbvV8sX1HCnX49PYRqQtP11nQFKdA95ij58UJ9kHAiXAudz5iPvrUWHPvjZSqJhsngwRwmGXm",
  "key21": "3SnsTiCPy34aJp5PhUBQ6qaRcRhFBqy2XMnjdW46mfziWyTF17AApinENkW4uEoLBrFRyEvE8SXLfoBDrNiDmocS",
  "key22": "2Sckx2ZSrA3GACcrgVDeaHM2LTuVmRG2xNpf2FJj7nvmU1Hp7ZbDL2qx4SwHEpYgHoVx3sNd3VbQeMnJchF2AdfY",
  "key23": "JbRu3vkXxBt6VjhddZbWX1ZM84XbUotAYyAtXaCh9eh9qVhSgU8KPwwESrf31vwX58huYKpQDdUWuH5NHBR1YES",
  "key24": "D1SBorNd5AHgJig5bza83QMYM9u4WJhYDqMdmYLnfcmsvqB7nWhRLGTc7wMiZEgKqDuPMZycY4bBioAuLQeGXsp",
  "key25": "54GH6ooZghssFQVo5i5MD5vDYckpA2pxxbFUYbrJQWUu3GADtY9tsyU9X5GB2bjzAVmfo3v4SsLPhsLJiy1zgSoP",
  "key26": "2uaKaxBm6MR1UUEBTpTSiY752hu53vQFkiHcqwCkBefoYMCXyqcvgGjb6fTerFfFacYP9jgwuFezYG3Y6Ym1KXXd",
  "key27": "ePcgWntaqwfjE25F7epgBvBdtVQhy9HHF8Xne9TN8wXNHVC6wXTRHtqCaFJtFZAoLNqSoKE2YiysFkNnteacYru",
  "key28": "zWCUwJsRqmB45F8b8RSCAzCEJCi5qekSE4wwsEB5xZafBrF7rtEWDMKeTg75spz23u9LfJVvXqkTwJ7MeCoFCLw",
  "key29": "5PtKhcE2ivoY9MaQrY24bGqvUrWW6As98YJMZDBZpmvFU5hnaSvTDYtqdTBFCWVv2JXj32cD7aGLCCyqU6RFeNSL",
  "key30": "56zzCNTtmYNqYpiaA323v7v79jGvCnD1BiF9nrfbHhd6JRjmCmjfsTqFz6sDM9KXYh82exsMo6q1u7514eQnjDeZ",
  "key31": "2btomjFFRQzb7uuD967BQLmm1krFUU5Y89RGEZU8Cwo8v1dQU9GiwKcABb79DGwkmZS8ALUEuHc2iBBNFm83JcFG",
  "key32": "4XpvTJ6xJcrw9TJwGYc7bjA3fArhPnHU5NakNrpfUPQ3bFqxhb8XbyrUpfvyF6V8d2612FqRgaCuTvE44RSTDmkg",
  "key33": "5js2XzZbKVcZsTv4nndNf2tVzV7YL67NTT6oWRUJd2eKT3HiQDFVdztY27qstHDA8EAK344bSJPrCLoq4vuztYcz",
  "key34": "3EYb7Lw4mK3BsBUYQsgdfo3UZHK9MxPbRcwRqqp29L4nPayuMmpbSTBH5UCxvCkYNiDvrjpnK832D9YRhb9TsLTf"
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
