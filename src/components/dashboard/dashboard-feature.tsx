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
    "4wpUS7YsCvN42hWZY6bXnb28WHFX5xZW9EZLHckGMJfyXxGSARBHmMKVmoUhXDRR2DDGhXwZPC5wZ8yKn7bhYuzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QztLfK7vW9eHxstpHvCqXbUJB1QCJaRc29aLo51e8Azbaa8W6D7wDrwh5oikh3boojrjmSFYW3AxyN5JCuqeaVK",
  "key1": "4vR1o3WNKgmjp9FrRCMZ7Sr5rwTq5caqwRiKWz69oLZJFbKExRfagn8mTDTvU8vNeCpteoe4DEpqyokSLZdq48cn",
  "key2": "2zWMUUtE8wJmZomkaD2jc7y8WpjreGKPy27BywMw2PMwS8zs6y7SUsPM1R5yedLUHxPkudDVq5BpQXFtJNhfdP2r",
  "key3": "2iq9DrUUGs7JGyadbfA6VMfZzLAy4hVa6fPVofhYvjks8e9y5wKWtXMS7onwxXnAN8zNpfkS98NDbxpegCTRF4Wb",
  "key4": "2vhnkXobDJszsz3zbWtfvQ6qieNB9rWsqqEanf2FDnevtPCkyXjmisCN97rtEfL4idUbU8ZVhvDjdYhTKWzkDrxK",
  "key5": "zHtSZ8AGTtKB5qs9dcSRRHGMGj3k8VZUaGUDrfomSdjYmRbm5xpzScKjmrDjg7MS5aq9utSJdRaPpWi8hfSCSHi",
  "key6": "ydxb69vbVUX6sVTX2wT6XbTti8Q5TXnLHPDoNqv5TGreko9bJt32J8iC6pmCgTDe98Hsk69pTtGfZeNGz58MmVp",
  "key7": "5FYada3yFQwcftr9tW1xZ934wcbcGvYiXNidpKFPJTTHAeUnM1xUtVYNuD2UfTiVdsujd5HyjYbDxJ1e1khYQ8xE",
  "key8": "3o3wXQYQwExrHUepRTR8o1wwnytNvkq3xeLb38h6swxdUVLdSQmGk7tQzUi4rxq3ZqS472DZzGD3A91Laua37A1T",
  "key9": "43sRywqRgj7pPUvrJoahGx8Ps1mbqGE8vZegzyBXqD9KJzEwcJX7RL1tEqg3kxoxEmHcH9phk2nQBiJdSbpMbfzh",
  "key10": "4yDEtzjPwVcoMGW9Keeq3Jgb6nq5TfySEwC3ZuxSTmj1wqzsYUnCm37qdL9ZST1c6V8iyhu47PTqkn2wfhxnko5s",
  "key11": "5q6f3YXUMJ1cY7b7yL5nuV3aD2hMYCD2sMMc8DyvZUMkaNRpJZKKRpA4YNJcRSvt18x8KcgrThJxQ28Rw8SAcRHv",
  "key12": "577toxhd1LuCjhifTukNybYj9BAy8vGd1q4WUGfWRD2griH8wxiSm21NPyoHEVtvSzwQreqT5rU3z9q1oPMxRpgc",
  "key13": "2x4obj5Vx2HmxsyXaH5N8j2xJd4vdsYzh88USdGPBNityWYMCzBJdpvCVbuDHGbocMKdKWpuTm7ceuiC1nvHKXDb",
  "key14": "3C5QNU7WhfYjt9bBhmPcXehz96dSbyzE7ALoQ93rtWJkFC3JaWZcZNxYj8gDf2hGnvir7BtA1CNJr7CoEd9qNpSJ",
  "key15": "Acrkc4xfWfMiMCKsXWjjdFohGZDNTL6y1TVVNU6kJSNLLsDEF1SoyW3k27SnnArqsZnZRHhjURZAPySAiswwx3d",
  "key16": "5HC9LZsu9DRcgcZkFUvExzFVJ4v3THwhcZNLMWPNGn1GE63GjudYoYX2fZpHPTBpWtwbRF6uio7EBZYW6Dgeis7e",
  "key17": "4KnwieVYvfm1r5FxudtAG7NMBW1URq3RWtEkPLwbDpLFB9BToxtib9SQGxgjVUTid65TLi7D2PE7Y7EdYbP1XXzk",
  "key18": "ygxzXcMNMDfDz7sNwEffvGw3QoZjkjvgpKyrrQKDpnDjgLc7ESKjSb2AHzJVy7cTmHFh4JRh6RxRzHjJ6nwj5mc",
  "key19": "4Ebknedd868TNmvCksnBzvV5ZKe676C4RJ1TLSN6KwfYjMGobNEPBftodVn5XQ9C5giFLuQwd9GpzHcXuHL6fTKY",
  "key20": "5886dkvc5tswRAfyX6sN8wHmy7YJdRPMzonrWSY4bjG8WmdzQ8xxy8pesxCXYFEZzkEzwgpQ1iHmsfYhXtoh7iC1",
  "key21": "4rkReugF4QmLGHPyKazdKwvXLs75u2dqA28sxow16z2hJiBqHr5BtxVPa8HEMhCbGUm8jU3TcWFDHkrrUPwjeUih",
  "key22": "5ss6BYYSSwsoHbFFXMYMrrkRmX1WzZiMb8tdLjc5tUQ7YVzoDSrkk9LBLWqzCdn3RZGuCV5fKp1CL2m9x8Uai4qU",
  "key23": "3Js16suVoa9i4DL5mXZ5ZxJKhvxy4TiAqRV4SLCLt7aMovKLfm7BnQHrL8NLUC3Dpf8nNCsp4nZonBSDB3pp58S5",
  "key24": "7iXjVXB2G2BsNNCzwLhgxddNpwDdAit7YdLEkKx7f6Zn2TDUxKeg2toqC5nBJwXvPK582yyQ8FY9QHh8SuWUBfT",
  "key25": "27vVe2HL4BzRtoGdPNhsAGv3jjDsnGiB8amDhuNFw1bu73ADphkgLSdfc5QAbs9J1PfKwGqku1JNy7VuryCNvKiW",
  "key26": "2zuCk4cVZ9NsAeWMtF9VLamEQ3TfUNzBWb5hZ8kb6u4jQ82W48Z8q8krz9eCsPtvabg6w29JJoXwy2QjtxLHsJTK",
  "key27": "4vdnCPeHB14nwzLfHzTykfMUYMgtZNu7b5k8fQ4fiMZrGszP5bBu5UR9qHY5MiuadmFmLLJMjRXCijvTiCzLFugj",
  "key28": "5BwSQ5n5XxDmM8ACWeWq9b4drGAFa8Tr92z2mJSfNtRbPGBfjYSokrVPmD87z5HNxATF3N1t3GmdG6aAbrv79RQe",
  "key29": "5k8MK7KyKkkEvjbQJKcVh8kreienEakUdSX4PYRAYnF8NKTHQ7fhvocUosAaQYHF1e4UvJC2ffcadoSLKfAM41g8",
  "key30": "4wfDUEcryZpUDuRNeRpWS2Epxx6mMkDzUAAGmJrT7jrk72pmFzUncLn4pvwBEbqL5TsFcqid7HSePa5tmg9tg2QU",
  "key31": "5tKnu4a2Y2yxGewAM7LkWs13ReqAGhRhrUrCiUCcddSxj1JYY5iEnrZout6jaKwLdrt7bD1hNXvm7hnxhgvoZjfH",
  "key32": "3FSQz8BPtySyjXTSTrDvSrGWAjMm3oQeWSS1VDixS8vGKttoKTHYhoid3A6ys7Eyfe4HhtHse9WiKsM6PCvA9fuS",
  "key33": "3WCHzEfMuaE7war1cGnwmnWo5xQdqo17LWeLv19G4GJhxqeb1GFgvA6yePRmLxFBCugQuqkwWSq2E8UfYufBfQ8T",
  "key34": "54BPxuPQym1nmiuvM3rpgNxkQTFwUw7YXKxvvAcHrv9VTrjUY2thNkrrkK9mGGjXozx74eiDEKmu2EcM8GdCCGDf"
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
