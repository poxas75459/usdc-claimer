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
    "7VDHTkKqXB2hMnjVmtzMhz4NBnZH7cqzrdY4Z9dioZrJV6z8rqHvVvus88wCNgnQG2yMwzhjYhQCopeqZrMMAZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49WGu4LwWEgr7e1PAtMwmxPskP6nNpYo22qC1JkaGUYbTsy9xpkhGGwtosSQuyqEmFvA3jeYtSX2stVvEopzerBo",
  "key1": "4Gh8BPHNSDhCmtnCYnW8rX4pSKahUpc1f24SSdrLzWVTrARKtVFvke2DpwaGb3bHfMPKQ9Wdq29QxhsictLivsmY",
  "key2": "ZsgWz7BsaFKYcwnhUNvpkgnW45Et2H4uqmt5E3yDCeXgm4pV1n1U8yWWTa5MmqcRJdrT2PfsR9nVAg4Kxb1qzSW",
  "key3": "3nv9uFAr4bsor4it6E37D7ktrHsWU6TGg3xP7hWQTyGQWjm48ZMwEe2RRETepkbdb5A5SsMaKUR82ahPK8vBR7yf",
  "key4": "29wXxAfwFYFGw48BLTTmprbyqD9isrEjh9Ebe8enjL98nhyyZ33o7pfXGTK4UDSkMTTQzerU8sgk9f2RAXUQ75DA",
  "key5": "34owrECUNEzg9p1TnJG56kVHcB6ivzwmGPjt3C7c3uP5VwvhBHpya9rJxZpg6HaYCRmUFaFSqVGH6TqzJg4zPL9v",
  "key6": "MfYBxpb3kgCwyDwTYncS2BptMqGhQKzAXoBBYNymaoq4ZzAg6UavY4vrHChp5kbUHPX7yi6HDkzWfCj6h8UoLnQ",
  "key7": "2tZaGoFg2LqeVkeoMYLaCoSh5UQAHicgqPLcamjrik7zVB3cw8BnjxmFpd8oYS4DLXoLABatGLd1w2cQtmrdEKHh",
  "key8": "2UQHoJfWKmcMSr3ba9NgJacdLhDW8DQFbrnUhS6F8BSdP4tDtCQTFAtFt4LRFbStsHbftjeWzsz1ndbDwR2Yb2cz",
  "key9": "2CmK3AGCZHSnN8GqYq4sk33SBAW2RUXsP7YqboRJg1hCkTpJEQMBA5pqhQTTdSTqsSkQcwsjJkQcGakSZqp3vdSz",
  "key10": "3f8QkcrvM4n7LKFBtGYLAidm2WU7wACjV8EWFHYNxN4PNYZj2FEmANbhJPWSVRi8DpuPpzLRN75fWKbe8QLB6itV",
  "key11": "21NqA2YcKGCyjiH71KrSpWoy6XLNy73UqXaFZra2a58igZqYpsU8Rc545cokJGkyMofGn4DtKYG3cBKwsSjn2V4M",
  "key12": "4zXTpX3oWwvm8Un8moBDewNEt1efvpb5WqJBEtKLPaQZWqBGE1tMdXDKNFdKbXYbssAyHBdh7HMorjwrMUK1U3zh",
  "key13": "YaepsBSgwjXHWZyPF3HwrEUnsipwCUgsPk52DYpcoM3Y2EvhCU3Natwm6EXAom7CoZfnt35kLAHJHUFniiTX3RG",
  "key14": "5NZ85pZCFfQTADhrZs5H4xcGHu3Kku3hAoaeXWftC47ffRdG4CvzaULhGtXGq2FFq7fvBgFDLpLDi8MqQaEhRsp3",
  "key15": "3NTgLm3zruxCPd4CcV3Rb3Vqmr8d8E6t8MtFjCxM9R5BJoVtZJ423gj1pvaKgTfSUg7RkK4fomRKAydavc9Sdd9p",
  "key16": "2rPKwVMM3Q6tThJT9GjqBUxd2DcdWSzf5EkvTrMWGjeXrgMKgJoNExJ5VyaCb1S1Ys8AGRgUQNQQcbjbrbsJAC6d",
  "key17": "5QHrsKeezsQceQS7u15VBS5o4fvNr2YbQ1JAkcmcYa3xfnafcZ1AgkWEskErMaGQxUDaRuoyqu7s7M3MBUb8JzzD",
  "key18": "3sjgDfQN8u2bb5kew2adTpG5DV3t5iiYj24W98AQdMsRB4xBtK8atdmM3SGXLkvuzUM2PhyEv1o35ZcP5ceeD2Gx",
  "key19": "3Z8EGBKwLjTtB3FNqpKDo8HqgSPeePzeSiPJrceHSd2yQ6gmk6pXLwyQ7XNs9hMfzFAavo5ovxdim2wW5rfUSpEZ",
  "key20": "5NgH8sAK9r95wcwMjtgLu8UqsmXMqdDYfhtVhAAJBXQFUxAgqYQCMiqfDNRGkfLH1y4kApzJmBrHKNBEtZyJcMCU",
  "key21": "53LJbKjWYAiKvQgGEArTvYcrEcRxBLaqme4Q2xXindrUhGpbarHMWw7ybGPATq99hf3FvsThfyBTEGfXHwPLfukV",
  "key22": "3hMtp9Q71LGFz89gf7tScFA7SC2G7cop6zU6rtR4sKJsZ81LkoXsbXf6Bh1PA24MnANUgwBv4sYAYSPfJmFAXoZK",
  "key23": "4yBmwko532HkHFQFZkKu2Rcn1GYet3rNwjxiex6Xyu4fVYjDM9gocTgAkhmEZci1xRXvaupnn7baTS6MqP2nZb1w",
  "key24": "4XT61fHMauTZqSQibM47cq3xtqtmP3WU3bQ2YguoEWqmuQccUrNbUNAXhYvgidmMsKBmsnNAVa5WVUd1gHJGxHDz",
  "key25": "3GCnp9Qaje777Lb86qTHCxazasCCEJbjP3uHMHtWoJweG2rDXMPGa9nbtAAbE3pGgeXc7P5YnqcoeB93gzV2Sc1k",
  "key26": "Un7nCG7Mvd7MQVNNazA4aeq4Ybk1QtRUCfrRpgFe6GrJwG6MjrQanzWtL351Mkr4rpktx9NmoCxhaS8oaZ79Go3",
  "key27": "53G9MWX5eC5nskGPW66x7vJGnrtGSnG1tXKJr3kFTGNe3jarnjWcMU5tLpbhQss8fooHhYkJRgWJxgAYNCnFGMab",
  "key28": "sgnZHxBTuCxffVzpeZBkgkW2AvZKhBAATRfAz7fjUqB8Rbn1t2KRVt1QSY6svphDXbKp3KU4ehJZbdFu9AvzpEB",
  "key29": "57EScTQUgmCuwNPRM4WpznN9gEJJHPVi224zVWYpWBmfTQUmrLg8JL7Cnkj4Jx9tXeQGeM7eT8zXpdLdXxCT9ZmE",
  "key30": "5Lha2EweU5pPAekiwdSJ6ZKe2FLMppSKhgfpV95Pc4PW6MhSbhtrjrwyf2u3oY3ejF13cGyjpSGoWSfs5vKqbYfc",
  "key31": "29t4uGWkrreutWh4iTADBMrMTYZjD1yumUpHcVnz6EaRPpf83UUsQRFso3cY1krf4sz3n3TaUdPgrrPrLftibF2L",
  "key32": "41VA5Y78K7wdWyzeqkcM5fFYMnKsoCkYQBSftBzHfMBcaUWVn5hbP88G44VLs66ADoKjV2sqUsziPoFnQwz7wCh4",
  "key33": "4X1FwPFmWoMN4QM9V7UkFMHNfneRyJLzTpLaevvxg3krUiFCjsykUUTjp8ap37dgnCsNr6Y3bnfXPFqoQ7h21yih",
  "key34": "4fsXUNyxhnJpFUvtyEooGifzVq9xuB8AsaDahEesKasocniihi8x1DiVPgehUAgmtdMik6tLvXuU1L9dQGGB76MD"
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
