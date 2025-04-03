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
    "4uFsCFcikyNm4QtcZWHDCAfuvAmG66jei7YVk5GpyEe5FttPn45ZzytWLL3XWH4nAdQryj95wRg7vbjrSLRijKpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MEv6s8K4UQPCCoq7nAiMweaWUmPzT53E3gxZX19kjETRd7oBBydAU6LfbLu9SvhWv63N43YrGrxRTxX91Y9ABtV",
  "key1": "43cPJ76iSLMAKiqZPVkQ6nuZo6jydLoF5n77TdDKH5tcPgZe7zzpCGA6FMCiicyeJ7k6C4symtUMdNupr5aEKN2J",
  "key2": "5i3p5snKXeXcoNLNZJ6CEd7dfRU1DMXAEpoZyE6asTG9YZQPoA8tFYycS2Bn27UZdbiTTemGdpdRhCf2RWp6xZHc",
  "key3": "5zVBXRDE9VNVXM1ATfRykGwBJArmqyM8snGVDkjN9NT28r3jsFufZhSko43r22erFr1GEKN6mhGHAFCHB4Mdgk8b",
  "key4": "3HKGjMuMRSxxrNo1kWg5oBheuCmp7yei3jSMhhobzdhLrEdYsryrbrjkvMexSXxj6CigB8EFFUVjFi32jRHb4uAL",
  "key5": "4dA1tXsgCGG4aXu2gjeHaZtfwe15zg8sePZQcRQxcg6XHfoiehWrUm1wc8ne8uCK3CfisMRYzz4tWJEiuKGH5K8U",
  "key6": "uKqnujTcMau46nvP6p56d8UyUAXhFm7PSggtgJGDMJApid4vigDCaVbHRpT4fTiFdNDfPiCc23kdCPfxFSXxQsB",
  "key7": "2a8sHTdUpu7Jo76tdivs3SRDatP1vfCkztkpA8oqjmQBwnyawRwbRnoM2vT3XVHQvaJyQNfPbmHxxC4AdqosxHSC",
  "key8": "2FQF98yf21xoeirWorJv2ZqMzHfQj5ryE2RrTQCbtUBRt1YHGLa9r2eyexeo7bT1a4VpRfM6Zo5kw4FmiX2vkj7y",
  "key9": "5JRoU5go6omPo6ks8JnXa6zdrk5USEvDttbLFWUF33EZa4ngfirDSJjLW2qGuNqoeu3Ry8BaiZsS32Cu3VoYj5pz",
  "key10": "5YnAMCd8xGmha6NgFhbbTn4ividam3q4LLMwGKqvwKo6ELQ9TJfJASAYUsLPTNH7Yh1ckztHie6kko5iMLQuXENA",
  "key11": "3xB1t3qqJicKhEvQ1yFXCvWLgRrTLnpCfaoMdgGEh5faBHX9TWcpSCVuQAmyXyVC6U3qARh5KnkuFxDAsXm7jLgK",
  "key12": "4pZvdTHh6t1ee2qeFQoY3hhsXKnkiX4i9cbQB9bRGr6nA4YCVEy11WwqtfJPtQdJHb3UavKrMGXvhAawpQeLtzhq",
  "key13": "2s5L1qryN9psojpVrLLAF3ikBMqaBBLSyLA2jXupnVwDc53uFvjpGBwxUmxUcmfSBXt72HF6RhkibZdgn4GT6v1k",
  "key14": "FhJsti7x9R3YTimbYsBUyCh3kbxoFK97v9mkJF1s8kMrwb1o6qt1RJwtXgEJDvhS1iZtLhJUXDKFFLPw3opEw7Q",
  "key15": "3y6qXgjQMop7uKKFEtJfmZx3DqsAimE3HsrNtLL8hFw328wM9hdhAULQHk8cgJybzeZ7hNntEDgW8MHVto8cybAq",
  "key16": "jbNeXFNDiYaMSYSQqEhvAMZ2iwQgVxA9udpXij1ZSvg1AEXJifgE83KfqyPRpZ4qydZ82Ytkwcy5P157nt7N8RQ",
  "key17": "vpzaJDNRKhi4v8HrJV8WQngq4vMuy8p1EhBn5M923N3ibrEmKGqfxcm44XLnudLnDRuwcrKdLHR4wxdKeVigBtM",
  "key18": "3bexq1vAsH5s5MZUbZm2g6XPAA7aoVEXnLfK4fEzdgS4TrdhTMatFmqrjCPgL2HHMLGwnL2W2yRDh6rLtGQPaxbd",
  "key19": "2tAKjncw3RjUL8peidn4K3iV54S33fyMp2KgcJsMmGRdhEZRRUrA8QPPDG18wjyEzmcND7cpJt7hf1dmqdRTr5aE",
  "key20": "5zUqBKNF1JeStRFzqMQNPmge1L56krgvAjc3QrFZYdHFpBYN5Y6WVCyvmc4qZqxND9756Hw8yys5kfuyPDST7ZSG",
  "key21": "3THsnE8jFSaMRPJgy77QWNGJtN5AzxHgHB3qsnEsqHThLnbKavFKUJcXJQZQqT2GuhFFD9vi2CmGQr6j146ypXwd",
  "key22": "3M2FYjTULCMRGUaXPksq1jSC9BAztiULB1oUSbfU1cRzFaqfV3dwAJgsG8wNxRP6ZRt5ojcMRVJa9e5sbriMYfP1",
  "key23": "61gZdRqEn2bKvj8spzZbBLoGTyMkWAxALyAJFNy2pn8Ubz1xuuAqa6Dvi7Zr7SSKFnTnEbcAS7xE4m9JWHC2wW5L",
  "key24": "4nqKG4K3ogrrXdTtcXeTz9qiez4uJuqZxM3bSPU6kW9dAYfDZEtVui6dkWMQHEcsEJg3kfsx5b23Rj3LNN64ksZb",
  "key25": "2zu28oifaq91XWXmLzy1NrCmtZru2pTY6ccmBg6AzcZZ93x6ZJPNZ4cUxnFKQyNHrhCDFa9suGEtfgZXL1yaFuGu",
  "key26": "5Z7df3A2yQmtSTNi4P5qzHhxcG8BjsA3ve4FU72H3veqNmc91fW6B13Hie5Zcz4Qdmbm7dUmEW99ZyzzYG8GuYJi"
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
