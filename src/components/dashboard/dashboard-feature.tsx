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
    "5zYSrmwtZkrqMxuCB9MpHW2HYTb8JRYrHmJufa8umMbbXjknm5bYqRUGeG52yRFKHYeMfepVirXEk9bk2kTHjdzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bYXK4JauQGbQu3X6eMSsFiwzMRqyX6nyjtJADGQrENRmG58gyQsW2zEE39aS7TTU5LZc2YhyX9AUw1YctjENYRk",
  "key1": "3hJn4sAVAbzrKgYDrZpi2p9N8wSXAgcg41dGK33iy1WjztdzttbDVFBcqA4wEHxPEY75agNAb1wNQgBHqzqxEsRe",
  "key2": "4MNxe82vokrCSNJCKvqxN4HZU1FXXFFUqKHr24zciMGHdPay1UXrbbt3eHVHhasUz8g7wqXVMmYwxXq6bDQQzq8Z",
  "key3": "4j4yVMh27soVjP43hT2WZ1fKjYHoH6QEEBaCd5A48GMRN8wCYvNo5pod7c3Xd6TYEyBnFHTVGfreLxaVxFH3PpeR",
  "key4": "5LgUcTRk1cYNDHY3ugkRhF1ktRnRwovHgoAJrdt6ng3jFDemfJHwwi6aU4ocp18idboejhxvp2oRaBq5d6iBV6eU",
  "key5": "2hXq3xaTQYY7fmA5yBmDM3MFK2vnQALiiLnkEvPAxS3r77BZ1TuEJFPde1UdXamNuZXMVGPs8PBS7ebJph373CGs",
  "key6": "4a8P772Hu6a44Zzoeu5oPpWFzftz6vqx52nTrRR1uyVFRfDALNRXEiBZsZF7SQbS9mPvkhkPA5hgerDaY5pcJQEM",
  "key7": "5DDURyTMZGeofzYB9RWg8vr1N2Aq6w5w2pYFU2JUfKdKuByZNqXGFh7wxRWCS51BTFj9dmeGA7VYvWPcVdtn9MsS",
  "key8": "34zqkWFijF5qRBEawsEsdTomLaF57ViMGSDpyfB3mTeF3VF9EKcssaBjMbGWjqPdbnyoeRybiV43d7ntDf33vYth",
  "key9": "3hZR7nCDVGNrpeK67PHZpNgcbTEsZYgkFXuK4LZarj6Uc5UAWGrbfSmNe3N2H4Wh8jhVDhSzpS4CJSo126YH6QAU",
  "key10": "3c6CYxb3p2jd4ZvHNWnwFtU5qtvvknfXiEGUNFhEZfrLjLfhEHCK5fAoaWbJQej4DU5VbnNC9Z1NX7nRThYey1kj",
  "key11": "2fKsh2Btm7DeZwNtSVKpHDyy4CEBbFpt6a6cpkFmJnx2qTW6RYWvrJFr3gyKRWfyqUmE5opEFdr4CZ73PAjTAZcg",
  "key12": "2Q6UaEt15DRpv8NYvpdjfDxqNxDqhPuDThrAdbcDoeNKRpfWYmq85cXaL4H3GgJjCfjb7MtiNnz1RpfufUiNgT1v",
  "key13": "qN2t3DjjeBQWDwUHS1U6gQ3bn1apBFC1fbcHLy4GgHaraNj9BEXACMiXfoQ8ACice5RpGMZWZg94yRJpjx9hUor",
  "key14": "XZRtmSkH1ykk8sk1aRCvyANEuNiaJnaxVYdcDPpdsGLf9jMMzGLrX7H6geBUp1cMcxi42gk5LBZNuqf3A39wK4U",
  "key15": "Cw98Li3Liv9mxjZ1tvsNZVgm2Ctgpf58Rwg8XxZZFvLHGr5EHj4QboaJBMLmodJT1qQhdCtP7YGt6vQ9g8LcGd2",
  "key16": "Hhfb9Aq67qCg2u8LbczCojurLesL6aoxikQdPDiJVEYzZLqrCB82HmJMqf4dohNbi4AoDd9QBftzuhYRvTp1aNL",
  "key17": "CCPGySDcgK4rKLvMMQBY4LKnUv7o9edHPBSBUshgV123fzqBoRAtXmRnHQkQSWwvtLycjaBPseGHKWaN8mpELRi",
  "key18": "4xLSf7wwPaaYfXTymCqCVbLzh3EqRVEEAVacVjabzCTXu2gVGMnMkdRevNexpHtJtWcU53vkn5Qzcv5H1L7KY5bo",
  "key19": "2YsZr85vTVqKocXZaDg9PwWfFPUENauMBqYjfpGmNoDSqV487EKhrxY5WqgKjRUG1SE9NtJZosJRL3Mk4xCVsz6N",
  "key20": "269qjw2KjRBZRANTzsMn7zif7zGwSawS7wAini7G9XpVdApHb2khLRqverasgFZikeVXiH8hJjZLcannm8exRPHV",
  "key21": "3W5UxEFXAzbFp8KypRwD9xBF37viS3B3CcqdxjxJFUpxXZWMLWFMtu2yW8zidy6DoLdi4Kjbgov8aY54fm5mGEFK",
  "key22": "2msgSgS9dboYWagX2s1YHivWgEh2H8oQ9YfyixbMbJmXHcguCrdyLR3cUK3diCGaZGhcmTLhzyAB8psLxhW34EUD",
  "key23": "4RtEYCcpF98u1YjswZucazJcjVMoVuJDDDtsH2Jtm19uTSQKVyHVMwRGn63na9xNchbk2rk2sVby5VxcdiBRQwYb",
  "key24": "4Df2E82bnQqvb4H7Za4u6zRe4eHradBdbCCDM24DBrqsV9LtBamkJ2NRPmcQ79BRXfjYCJohVuh6tzUuDg1RFJGt",
  "key25": "3YzDJRzviCWq8iEnv6q3gYZtVnWYxeJaApRwmG6aG1Dn1BLZ3w9F4Ygdqj6X9zE2FyqPDTTNgLgvcsymGZPDzUW4",
  "key26": "3JVtU3eHXX5SDwFks6JGwoFnea4V1YTGKnz5kxogXnAboG9ggftW2zFEUvsniW1SrRgJpxASXRuCWW7ms573wTA8",
  "key27": "2VSsV4KYdWDERXfZBR3Z5j1V8VbLqqB8Mmvox5mBR4BVcFPE2Ue3zxhrUAAdUyMaKsYWmmq51CCHmGPKQ22zLxAt",
  "key28": "3WheHhKxyjHMHJFoyB1NCpCGYQyyGZJeExn34VyvxJMEtzWL6Q8PpDRKnPtXPGosZYhzLh5syLg6uqCX93TTjLRF",
  "key29": "4BZiYYJ1TNdaUCkUSLnvcsyLF7jkjzgsSgMxriU29QorARt5BhJWdyWs6oQNvKrboR126XxkFJbHwnsZrhwBehXT",
  "key30": "3Tjz7bDc2b9rc5k9FEcTX3pd6EdmN3onjeDoreQ1hvydCQ1pU5C5Bj9wHPaH8xLck7x8cwpvsfck1yXHnGSQbbZd",
  "key31": "532ttrb88Vug1umVwbyMz5hfaSvkukAXT11CqTYqHca5jpfkxi3yw6JhVQWSiFfVE9T7qX1ztAVe98VU5uHJcjAG",
  "key32": "1e7aJehoGicgdUtPdoQ1q3nHCpcbR4BgY1WiCXFQTwAtmuujNJ41Pw4EryaLzq5t3maRdvzPyQCdtuUSg4MJU1m",
  "key33": "3B9idtrENdtJr7D1mM5z3wyHMNEiPbbhL2Y3Awr3HLdQ3VDPVH1Mimx9Vuq9UGwejLAZHcCSHismi8VdeNtNjB8A",
  "key34": "3otrDxScuMkV9azqji361YL6szPDcayYQtQAmfvEhVQ2kovw81yxSEPsgVuHyDqfs2uQqtRuo4LLNmXqN6N6MjK3",
  "key35": "2wcWQXfJT5xWW3NfgMBwc4gDPqg7CzX7ENA3n8jMWCndpxgEXkjTSU5T6q2q5XLJzQzo1RcKdKSnvLLLjUanNdF8",
  "key36": "5qRM1XsTrosg1Q9LYQqPDatgGFxMY3iPZY1YmoL3pksc29DcVy3manuw7TgkkoUCTME6odkAqDcq97PefFcrU8Tp"
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
