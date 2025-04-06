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
    "UtUuna3uCtff32dfusFtoqXMKrK3sdhG7FRgvjP6Bkwy6JMnbAH9xWMXki5iPmzbcoAFJVLPk4dtpBAxokesjg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DNDybUaGDZbxUiV1a6EpgxxqLjW4AUttsMWh71aojAiS3xGLidWyVjjSbPyAj5TbgEu4w5z5ZtDt6fe52pENNqs",
  "key1": "3S8ZYMGSut4tkxDXcdBUnG2ZRKc6imVG1JzWRPPhEtpspjeh2BpxHLzLLGzx5mgVCDzBZnpPCF29sviF7vPePoxx",
  "key2": "5pmJzwFp5FH1d7f2hi9n38VjL9CbZid6cKb9pVTADRA8s2yw55XKGCZ9HHEyw11U7DdmarrqQr9b1jag9dst2G9o",
  "key3": "5Af77AraSAJZHh1aqqqCgfkkqgNwgtv2kBuPy2GVxUZAoW9FpkBBF4M3A9Kkv5xD7vXL1LeSEeE4AzyidR4XaLJL",
  "key4": "3D74d3No7Fq3zqLUuJyJwbfBHBThgsqGGCX7ZytE1MPzRddL377nsDwX5gCFECkNPAkD1ATwXwiih4n2RDgacBem",
  "key5": "4mmdr6Vc6oxiU1XveWHvzku4HF7xD9gD75f6YsTFZHNHriasea6VqTzMGv9ebHNoW6cqYy168d5EBgR71z9dFHKn",
  "key6": "4vYxftodvyrQS7doGiX92kDaRrJoGJUGzhX5A6QWeHBqXpD5qjYJYVaTn1swmQGc1F1T6zF33QB8Yv7pzCt1BR9y",
  "key7": "3bgT4JGtG4qdoA19Zwef1xaAn44r2iA2rijaKJEtQxhiXqXVYutEm1rBr4gKTV4XyEZaREkVqwH1djjwHwXeqdjf",
  "key8": "3uWDWvYLH3xsvkExH4tEPtjekcaNTHdJJbodesCvVhG5t4VscdLa3CBDFtFES2WrdGQQhJ73PHzEe2BDXm4ggFqu",
  "key9": "3BNp8boQLzAX4X4r9uPt2yj8A9rqfymkn4m2B8FXqwc6cVPCYUJCarijs62tnwzRUX6eQQiXbcihURW4ViyCTqCf",
  "key10": "5r8wNWMo44JPPYDT4LJmeyXZtGPgd9nApbrgKsXM7kkkR5bKfa776M6qpCawJYyrt9Hc7p1FLwQtmovchA3V2YhS",
  "key11": "4cDB8nx5c24qhb9xowqKTFq6dgDDyA83UJZgugK2aHZA2FdF3td85oPKBvpb7TQZxm4JtztwqBVHZnVe7stRN9Da",
  "key12": "EniGae5p9E4yG5Xi9VmL1NcT5jzpHTDfbpwofRPEAe2zqoATufv18PQzrcDcR8qCBPJPWNvKMRTkHGhzLqkvc2A",
  "key13": "3x8aQ5XZbK457QS2mH9a3cTKFBAsefXgPy5HL6c2EVHVFAbQCmCDbWWc463nUadT1XMnidFuPBGmL3S93jGsEL8i",
  "key14": "5cs6nujH3zRH2B2szrGzk1W6SuW5FRAV2KnH9nBGBP43aBBe56T8VM6SJuXfARvqZDqfgTbwujN68z1rjgeV9aLU",
  "key15": "4vBw7Y1a7xkhNZecrBjNMDR2rKkqEGaTLzNTSzoWcQpbon7yZ3EACKF34AXL4H1z1icbzxR5NWz3kQjL7MEsihkA",
  "key16": "4e6AXXANkT1Jj71u6P8BeYGjeMoUMzDNsXUCXAGmqTCkJUcj46DKbRjyV3qackbkLnrjUgytkjkXBjHHhBABUfv4",
  "key17": "46UAfV93uhWK7SiqfX9wnF1TEfW9B7CQVnvYUfXREe15WsD3soFKs7zsLu8UgPgbk7cw5tq7QHqXNYo9Hw8Q1LbS",
  "key18": "4g46NFA1p1TJRC3JDtEA9J3QesgAaKw7L6vux7RMEzwvKrrtXP6zCCyn5nE7vBJiWutTD6kzMGrXQEe1rsSDhqrr",
  "key19": "5QxZAjhTSVnE125TiymvaYDnMLnsiUD7dp9pPPjFE6o5BPy8oRBTj7CRATHFBNtpU2yTD1GA5RKuwrHNAV45cu1H",
  "key20": "42BP4wm45CYNhit3PCTSMvKrBbmp3GjZHUC1qXyoUDbcEDJxH1UTHkF9sGVUvBQjhzZkKK2Ta2mEJ31bysiMuLFP",
  "key21": "5PQA669Y65SbNCBapraMQdPXGB3jyi1YLD7aSYLE2gLv978dhV7j4m44Go1jDhnWWdw1y4RzK3JNLv3VWmecqdq8",
  "key22": "KBRGXgTZButqyHtyRFBxioEWcZQ4MmUjM8iGwvTHDJmXpYGK1NyVBvK18bEsk9dPZ7WJ6vE2tLyxv2qU2WrntFr",
  "key23": "4c4cVG17eLNNEDW8n9S6Hra1MJtsBEbwnae3Vuq2fsQRAtJB3xju9kwjXSS7CPwk5mMLSTwFRPvpaancxRgeu83N",
  "key24": "4rKbkZ2N1qhA1rYjJqVmHh1PzuKFFiqaEnQVKHVQy2bX8AvZb3dayvK8ajyUtmqcR2c3syE1qckLH6gE4B6RnnSy",
  "key25": "3vhgUzei1MkMUrhbM8aAXJjXLioS78QwUXeULPxKryaoEt1crBhdCsdtFbNVYbhTkUUeR6AjrWrQzjSwagRjDTkX"
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
