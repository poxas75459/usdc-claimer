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
    "3TGB5nfko2KbJ6PAbKnJHLfrZkPdB1V6qinpPGay2XLFYofNmx2Pcj2JgAryHF3LjTFyBB8g3Jq7XzyXzsrBzr3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31p2C9c6g4opdWC6aaz4RxZ18yskWWD1yzTEdtKiPhGYWbQHL9tcYSXWvqUoSVqfJ76CqKY6vFBRQeaQRntxvqCM",
  "key1": "3GYY6GXj67yL2RFpeZqrSJkY8eyD2mBckMFQbTJskM2VqpQatk3nkF58QShRXnKKM6jxw964pzNa4E3HHbdScz5v",
  "key2": "qNqHAfyPYXh9zkH9jz74Lm4wSYHUycs9gzTSsxCUNNDBst1tQdtYyXFTDhNiR93wTPnL2bHxpit77RLSFuo8L46",
  "key3": "gDJJw5NuKMe6FPqX73B3MvfY1bHsDTAJ5esYUY3ktHPmHeSGQNxvXL3hyMgcA4VrcJTGNW6juppv3yCTUTgtikf",
  "key4": "3k7apwToZeFr2YvJfEHg5h4CPAX2EgSR2VbjmKDKFBGw2WLrbkuLohhB9mGnxP4sgAofmWgpySdp3ojRhu8RPKqr",
  "key5": "4T5uktjN6YAByYdARzs2HcKUhDRbxWQutU1cT1VZgwussmtwLM54M2MN673dj3SVaFrzKhix1tT9zKR8V69Mqx2Y",
  "key6": "3X1tPF7NTn8tmATToiPJbR7v4ktdwRAcXMF39gK2gYecAVKmNNatfmg2a5skSboXVv4G8CCG5ZaPcmMkNUVkkuzv",
  "key7": "4etUiep88TLHuR2TLUR4fb6xcvFp9e85xsi5VNniFCq5AVCVM3A139sZHHWy9Kny3JvbqaoHpivswU2CzTUYCy4A",
  "key8": "8oRsKBjfH2Fg5rJs4bk8TGC4aAT2qhUbpP9aioQJNWNPZRJxEWv544vdVBjmtM9xFBBvAvN8Hte2XSrBNq8UT1r",
  "key9": "5M9Yr5qdpqAxLq7zHdAHet4bGGe3KKYdfkVg712MKuURU2NxsSS1eV8ugKVSpWbj72EDhentLfPhQRuK7W8fw85L",
  "key10": "5f1JGnU518UAi1bHefLvxtcDvZ6b4paScZCHgvtm2pqHe1chA2rdi3yYWNGapRZ569GSr4w1AqxPaByWwkDgL8XM",
  "key11": "4EsBEAqb9nuUjyvUDyS7kJmeC2ubcExZaTHQjWXmfiatdnfcUnPZJWCtFyZ9vKLxhHm2fKxxs2Y1xLfyiT8M6rjs",
  "key12": "5HSKRAzbqBavpVformCXfB2nCFvgS3KtueKJS6L8HSw5NxWtRAfvZ1FmZFZAeWDtCwuTTwTFLnnFEg3HAHoV4Pjn",
  "key13": "2uU8sqv3r69XMEFvkeamUW4EXrgMbRWUcL4twmuzWrjiMB5nUFfbKsUX8G3yqxmSd6zdwJYddo8UXEz2J6sghpuj",
  "key14": "2fsKbGvRWWLuCTLnoJgYB6zToQ6ywgUivhaoVhMPBrgyHbrDf6dE6phtmhSBgJpBmRC2Sy6hFtyXxYwKzvBM685a",
  "key15": "5MNUCTFcmiPcgJsG4s8zHtrK4fpeojaF72N44MxbnkejPA5zBXAgwgVVYbX3jiqTsvTps6dYGt862eRwxr7wpFso",
  "key16": "3Wao3esJmGZNVnsjizFDZEhS39zhQVH5xUD6jz9CxtUk3VPjCf9ardo9Pgi4hJ9ftgPswfe1RKiEs1zCnc2Kt8LA",
  "key17": "48yG1T3mevtfin6zVz6SEMsBBbss6MugL8VndSEjKP6aksQAfAp1FmwoQRWj2SxFqAHsmx9NguqcFsgsRt5RgkB3",
  "key18": "3EsHYNrMdRyskRqhyBVLa2RrXjqE2EXHeAKQN8UwUz7c4rW3h7774LSZNutJTHetBG89UL4GmvtT3nmcsLoJo7yp",
  "key19": "3QjkiVxeoejkjpBjKXfS1Aeg4vLJZJioGswqXz7dEDCWe38oUFBsFagx8RzMnmm6HmKbFVD3fx5p4pPHLPwhJHPG",
  "key20": "2XvQymVxgGZgBXER2coyQqC1dkEqmnqcPZp1N3yMgNLst5yPM8LmU9HYv5G1kWFBiYEKkei8cVpr8RZ2UGEwWRAt",
  "key21": "64f6NNpaE9MJutdz2WP8mf2wh24FEUqQCvhb4xGZKtefNb3uEw2wPdGQgA9qb5uiqYQM56v2UZpBVEh7jqJL8MZu",
  "key22": "4wQ9uMTHyqXyV76fTrVbWQSicNeEXjWi7KymT9YmiL9uficbrFFXTgV4vjABGJ1XAwspXyH1YvUAGLaRyiRK9uPo",
  "key23": "5XFA37pnH5vY1DCqsJAf59GUrYc7WQ361Mgg7c3qN1kQUy6E8tAAUtxh6xjbBwwDfSJxkXpDewhxZUa9VRXR8cu1",
  "key24": "4jp2BjiBqZq5VFs8jnJVauQx39ztYdJXR7mMFCPsWomgzkJNfw5vBYLdwgVHgwyfQ41DzW1ZzVfrXgpKXyDMeLwu",
  "key25": "5NCaMH6Kr5XjeV6htfepMMUsWoxKp1B1SFzYQpeC37QCbL37qNDZEagbjPtrxnjwu1PnzMiAcDUj9nwv4hmGzuJ1",
  "key26": "3wASatMadX29cPGs38dKhqnUUEjdKnNNmDjsHJrHURkMcqgMpQmARafyd3miXvzApHvqQFFxVR5nsB9McfZfwF9c",
  "key27": "5UirfP8x4nGauQq8riajq1579m5xE4poxnQqiQfJpY2SwEdZHkaLDHqq6CT8ynqBMGEtshwdsTJopPo9BhnSZXms",
  "key28": "5z7ZdqdC4YAb5QpWw4UEYACri4sAnHCXKnEupQvn57U5Td83vrE7pctfEbJ2YMMzvS1CnbSkCEBGgi1jMFsgPJSK",
  "key29": "4Yuf8172X6uzdEaLBXVyWFpBC2bS9yMrPmTRmGxTb6Y7xdWdefGdj7oJReQ6ceTTqvAHGXC97HLaHPaKN1d7UC7S",
  "key30": "2RfMnMTpUXSbr93oJy2L6MMoMU2Sp5ucaoQhHLHHGdgoRbhXxnuDfG13RzZL2rLvMETFbVYdvF2F2eiGp6i68YoR",
  "key31": "2P25wS564uWrTE2jeaP9PSgRFSzqVwWrbAT5HuaaDorRHYvyBghff5GQhGqXZudnETMj47XMGFTSwAsWhUBHn9UZ",
  "key32": "3bqPFPPizjgceYiwGfjz8Qfg65h2gWrV8maYxKu4tJjYRr5KwqT4dKXx3PGUTjPSV1CNUXgxtmrisJACzK9U24fU",
  "key33": "5MwVznxL3XC72E95btzCc2PWGyNXXG5AptQE31efiWMpMmqH9fJhPvKEJGf1HatB8n8EYyztQaVwDcG9Hc7uiXLT",
  "key34": "3etkzi2mtYWRF4CDfaJorqwrM2ZDhb9WgCcSh4YB8NK66cgqF8AfREBsyBnoKrvbp515BB2BLi9mKWQGUM32FdGD",
  "key35": "49s2N5gN6rsaVfX9HiYR1zo8dxZkR3RBMuUehTS44ZnzcoKPxAjr3QcXNGp6X3J3fxECbDMAnixLFiR9HjUTtmYK",
  "key36": "41kDwrxM8JUFcJUiWFC4ez2VnPp5vgvQqZ5mQXXyH5ysbbgZ4zQgPfhWtWkK8PgKSGHBDceyKAw6YjbCgrXNDmiD",
  "key37": "51SwP2Zj4j1CsrasuYQZa9AuNXkpVv69PbQZVTZUfzB57z39oqHf8SgcDu6WyRxuCQjkt8Xibst73oRvuKALqSZg",
  "key38": "33VYDi2FXHpnPdvKnNwkCPDtP56XNNBbAcWcUg3kVxC3m85Cr4mzbCdz89TMok6hxox2AGJBgdLmiVnSkb36e9bE",
  "key39": "4epajznzP4NkjAwr5B8VcriCwnpvsUhgrBezFYAf2rTmeHThQBhpDZ9ptHG9XhwFW4dpsBW6tyQgCtTzyE33dSAL"
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
