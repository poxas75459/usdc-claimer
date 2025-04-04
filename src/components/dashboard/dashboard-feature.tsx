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
    "59iUWCGXFWUUiomvfD99Yb6VKJTb6tB3Ax3KBAddCfPS6P7hLY5DP2a5SuYDNYKGkk51R4bnhJorgQgAhELVPyu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iA9P2rRRifG1KDbrZKaeksPFZd16mGxXjwSyRYyr84jNZkxBcGx1FXbA2JvNLAhJ2y1S6g6q2SMYTgtDu4JcMw5",
  "key1": "3WVqTKQNdLXyDxWHw3uamqPSHpf26k3DoSjRs7CkWdG2x5Q2kaRFqwkqv6C7jZY8jymmmmCpaqFzTiCGjeQoUY1E",
  "key2": "KkTpDUeyQrrYrSFzCE6xqxh18cSas1aFgAi4hgV83e595LtSftbf1F9uuysa5uR5QuQtc5whgm8BkauDXmjdyBd",
  "key3": "22tzec6ym3u7qWTccjX6xYqttBkWiPfiGbbXTVFDMpSxy5nzje2cwPNXSCzrPgyzRZTwYFej5k4YtyAFvzFzjo5p",
  "key4": "3ckCjTLcjvoBMbmR7onTmCCjGQijC16GrrEuAREzXX2xWCGAbELe5n2NpK3nLUhHyxRtt3dbSP8TDbuAHjD7nLRE",
  "key5": "kDrfpQE35ceeB6QvnchRAf6KrBsvrnVeTde92wd9TYD7JUtPMJ3SG3ArSkfKDjR9kCnWHdgv3Ri6jyqjJjcY3k9",
  "key6": "2YtmKfzfMPaRmrv5Mayp1T4zxkaFfDN86zj2JuWM1nYxRBZmAcuSoLDhQpRKLcgeucnjccuZevncj3uqtDJJZ4kJ",
  "key7": "5Awz8Y4TG1HqCsoDfLkuZcwutV11yQC6r34odq4nemg6TdcUqYJQ5RGnQaR2SSKy8qVaXrkkwioAKmdECEPvG2vA",
  "key8": "2Lmhwz1xdKnLmDPrwnpENmj17feUJEunvFKbaaUJBrq8Ftpvug2wPL53WHPQif589hhe99sjqBUHTEg4KKQKRhK3",
  "key9": "2nh2dnU8t5wBuUVr5jVJR6iaGM8pSebC5gYx4k8USLjMCs482k82AxUXcNKH7By6vupqUXfPk2neJi1bifSQmWCB",
  "key10": "2fiWCP6cg2VU6FcXTe4roJfg6Q3V9pN5128nQCG4o5vHmUA9ZwzzVjupt1Z68Du73U4cuyzoCcs5PcAVdnjAXFX7",
  "key11": "5c6gSDDKzQLqwa62hYTzdqWiYjvQd32VUBeKaJE7ii8pn2bpDDx2NgmySe2yuHBgTf7HRtzQEkNvDinTh4bnRn8o",
  "key12": "dgdV96yEnj9anak77zhyiSwEyCAgD541RttT7zoWFLRYqEvDLZdQgshqnMFgRiXyyGDDtvPjLoKsa7VkebWxph2",
  "key13": "4rL5MGZtJJrRpQkWzdb6qSZQLJvqxaHTbbWoyLWNPpeUhBAj3H76VeTzEiCJe6ve9MhroV3y544YV4MJ2L6Mg1ra",
  "key14": "AYJhfzSbbAMNjAo4wps4es58GxrUrRXc8WdTppvuWUrcKaDJqtJcvQu88LpBgJfRmsisFiA3YcpWDjZ7ymxVuE4",
  "key15": "4mT59NzFji844iTpV2TYNnqNH8xA2apBnbdjBvNYkHbsBWqX17vh5syPQ7rMvYREtQXCWkjvtSpx2TJr6oKqnRNb",
  "key16": "21tz47u2FLj9di4F7oD6VHCATqvsKDztmwrjeRxJza4ufd8S5BTQ7LzggnPax1WAUDuEqWtB3Cc88q1fW1DBjBJd",
  "key17": "35oM1XY4kCabjqgtNRQ4YSdVHbStfhSwssCzBBJQetrfBK5C23SsNjgzBANmSUravUdQpjZQ6FDNa7YfpWYTMHAA",
  "key18": "51X9cjc4VnaLcMkA2D12G4v9rmuCX8JYdBfg5udo9w4e5TMZCiEZQwUKB818FwizyC1Yhs8TCaHkq3RWCSRWks8Y",
  "key19": "5xrdz2MvUKzUxP2drjQtxXVdi8PqYZfuJWSghPzyXf32gFtYiheB74rh8jStASPUF2vRzTxWZaQL1bf5TimcAdwS",
  "key20": "wbPtPvGmK5L7Bd7ccfMKZfyBp8wvsCptui7Tsr6cf1jzSir3MXvs7iV4zgYGHQTTvsY39TUFozKGc5GfAqDB6YZ",
  "key21": "ruC88Qcpzbhppzos3EGCR5oycVFUHQMBA7aaqvUTm45rrE8ag7cQ5BtsZ25tEousaqC9Fe6ZppEFjWPCR3Qv2Pn",
  "key22": "28PpjCzewdLYSfwtuLnHbPcsGVGVjJVUJ8xmVqb9B3bzCHMgV7riiV1xmp15JDmKod7pLu9riAeAWvbVT9dbUdVN",
  "key23": "3X76uMkrk7V6Smi3fjSYLwvZz9nKuT2bfNBU9BNraMQ5CHXi7tm1e9Rcpa9vWZz47uf3FQ6YcQpVhWq59PMYDETz",
  "key24": "5MTqwfm9Nm3F3gbk4tUBj5PPrJtNmcLZyHANHWsUPH7FxjNkADJtz9QrkZ3va8L5BZTaYNbyRi7YqBMKp8Ed5F9t",
  "key25": "4q7bnTnkYHtTxufQTm7ciKYDSv8TUpPW4nQxCEe9PxhYERf17GBwWSxwKTzi19h9vq94gT5CCkj3esJTPAauYx8",
  "key26": "2f943xfFHNpGT7EgH7yqZyhvYiQJvb2jd2WrmyLHEpcTDe4tW7idP5eYY4Vn9LZzk2zCPHFHouSa5FKY8k6aGV5V",
  "key27": "39dwmYv4MpBpuzSd58XVcaCZTsMSh6N5FWeRmNn1DUTPAsR11QXHbwfMvCXYtpj1T2oa6C4wqaAQfRvy6mB8he2f",
  "key28": "G18A3pSdhCcHoA291cYVCL6Bfm81Sm4QKQAaXawk7Yr7K1HrTqNxYNPkLnyvWji2nwMtDCUE6wcZaoZtmmy6vge",
  "key29": "2BVamn6hFY6vHUsKEqmmwShbVVAZLprTemXEU2YW6C67BC4w8nnSSqFVFT4JpfZYX88BjH2wnc4HNiNaPvw1HjM9",
  "key30": "5FBDGKXEqWDByxZZZSmXmAjAbHddgxUoS41CAcgGBzye7HvD8eFRcCfo2ACYzmYHJrdHw87gaY6sN5og4bQ4Gz6p",
  "key31": "56Sm5fzQxpfTYJU6kzfSHup8LSkB2NpdSXEsAvKQQMTNVzAHrQ6msLYPEr9EqAYHmbeLH99jMeAy5ri1rYXtJBxb"
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
