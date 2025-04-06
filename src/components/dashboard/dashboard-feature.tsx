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
    "4huxLheLcPPnQjTwYbGNjYoQGouwqQVnBzA3vpiGUuQHqKoDSgaKGqzu1DAAuRC6Vh3kGfS7Fbtq1Q4UYcLrphUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dq8Wzh7J3gUHV1RUq9fw7wKL1PPCG1bUfDxbW6MLRZraeYeyQYLNh3wo8mSHy4n5iwUdsQuBDVKRR3BtCJoNjY7",
  "key1": "4tsCWktzfvP6pGMWYb9TfQ6817iLTv77QuWJAK2B3Aihr63mAFS8Bvb27Nak2sWZg9dMgnCuM6vys498tMxn3TR7",
  "key2": "gyV1wagJDw9UURjBWZGbik2ijrxDDZmpUTJUPaBhziStVAdgaQsVrxjaNiEv7YcHP3ZQpKn179bQd2tU7tsFo4T",
  "key3": "3TDAJsbdMQvkLaEbWwZoyP8dhXdN7sqb79rN37JVTG4nNCKFwr715yTAYbNmNGr1TW2yyCposH3N7XnaM4ZZrcNn",
  "key4": "3jtMHf35XBk4S6BdBuoCEZgoUgvhGKfZuvanVbT5cNFYW7Dpuie1bk3d3RtHizkfCm2mzRLdvfV9u8AMt6g7pHsd",
  "key5": "5myzJmKH2PuSGSAZw4qNgFTsXdLfSiJcE8jRFv2uTnHUZVX9c6pgE2vkiV2Y8YSVFrbm9yDnML6M2qLpGuUbNXFc",
  "key6": "wLguxWTdUzcEAnw6VW2nExjZe1PBjzpY7AJzTY3jHK2E2YZknSHSYWaUDaLVzpZwfBnd2cRNaQzV7PyrGTJ3Wya",
  "key7": "5QDzK4JXF46XiHQv5gVebry7ZZcQYuvEVfT158vmxeYpR989pLtASEWbvc5h6dGt8Ew6fNFAheJzN8uxQnzYsLED",
  "key8": "SokYdaumohNPBJcH4gT1XZPNa4zUWMHAmUjZL6G9jkyS6B9P22bL15yYZcNpqF7WyScH99P9qLoQQyCQxUGd2Vx",
  "key9": "N42V2ae1HL78QArHDG4gSb9G8t1Nb7WtbuGpgK3VdGM8EEmPBvfE325EM2KWcbDvP9zFvV7vGv98482tLo9TL2j",
  "key10": "2tNMSyGQ2JsSiMPwwsji3NFtyhA5Eh2ixL48TRYAa2YcgZ4Et9i6yipFwZEMHK9kaaZYYR5GZrMyhBh4gkBaZ6HS",
  "key11": "35JnpVsurEJoq7ckoZoAanwWBbK7v9U75mZJFpy5tJ7KSN1iRER2cWiZHRsfZrzuvmnuxXGeFEZ4m5DTAoXmMBzM",
  "key12": "3LZSCHmte55wNzCX2D75qPTcX2bQgtaxxMPHUnjZyug6gMkFZV2drtv1H86Mc75iSRdTNiRW3TZq9zUSfu9UwKnU",
  "key13": "67ShTRNBA76Gjo2VmSss833mbSBxZiikW4x6use4cmQCF4aPsLJ4YDUSqdvtsPqG7DFt3TnvLcq9u6WuPLjBW4Tn",
  "key14": "3BMAmbqRgKQLF4u5oG2XoaWUrUE5QMYhV6ddAyGorAqnKdp5WMjKacoq9yRtKVRGB5WWmJKz9puQ1fTmopSzK1dU",
  "key15": "y7jyYfM26MyHieCdTPe6mosLdxFGoVSBMBR3XS8A4WzuCMnxB73r7BLS23JJBhfaacejhtvfbGtHsp2hjbmNZYB",
  "key16": "2RgompL1MJ4VgRjAgaxSyRS2LYqU4gkhuGG29Gc6AsbF2TYRrJiVK8o69LNJwyRe9KtFZ5GkDabLXm3eACSYTJFx",
  "key17": "4TgYipWwtKEcnaEjVfRfXGArzTUhroUUsnVoxa8PrXowJsLtVAVvfu3Vz6wsgz4mi9rJx6atiPgt7w3R9Fh5ej4N",
  "key18": "2gsDRanTrX9ptYM7bBNXPebg6HDaZiaC68bLUmpmvaB8RUbxtFpSFteaPgW21PQmnjHpdSppiS63iy5KKFYYEC8t",
  "key19": "5hS1tiq97yi6MQwmQTaKd2K387hxNa7yaAhy3nVoHsSjrWzGk7ZLSBw5iWwSd2p4ZjPJum7fpdCZukTSKgYhaKCQ",
  "key20": "2gqyy7HRx5ttq9v1VngVQUd86Sbaj3jchmfAXotcaj2ZCdwGzCVNB7c4a2vNbnY5cDto6SPHvLVEn76iK24eK8fa",
  "key21": "Bc5ftTc54h87iabvrUFn7MPKjCMsZtTSPNaN5bd5ZwibXmjeWvnNm3DNGTBXEVL7rkEGegwqWeptTTz1Cq2vEiy",
  "key22": "2VyDF6CfDk6apAmbA8FouZUCf35SgK3B1zgkmgs2TZFVRDRCUXyXb1du4yv6RUWy83PuSsqV6p46GWxaQNBrTrY3",
  "key23": "21NH113eh9rr5EndazS99QVur2WvAk7GNaeSNoJHr2TSwebS4JWapzCgoJpgWRDn7Ejd4tZB1PjAv3VZMnZMPZQS",
  "key24": "N57wFtYvW3Rkv2Ts8kypJbooF8rzrpd7NTgfes4rVLZkbtvcJ9At6a1NTo5EhFPn8zqGxyh3b37rzJw9BJuuqEt",
  "key25": "4nnVBn9TXq5Dk9DQCr4E1FnUEwQ8sS5dh25QUeYmp69BPnmGFH33MG365tf31KuM6bT8FyYPBGC5nUS6BkNhPCMN",
  "key26": "2nhMwnJUyGAnLSuuep4SXQQw3JiPERv74XZZXrvFJeTPbAf2PixnrMpqgL3u7VimaKXbKB1gKAdUZiC1urtr3SnE",
  "key27": "4UTZWsjdmsAtoVBY9YpmGMJHcPXMt3PTKE3HdSkR6qcQ7FNYDzQjH6xgjNkkiXK33m24SuEfXi9wJ9r9bE3vV9V6",
  "key28": "4rZFLMrNkoz4SCDHU78WG7ydaWaQR8sa36q7oVWy6zsiWfqnSSeXJtNK12a76SomixgoHJP2CcDk5tJaxYtFwMq2"
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
