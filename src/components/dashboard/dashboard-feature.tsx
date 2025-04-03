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
    "QvnRadhEjKWpN5ZTRTsJmojke4sx4wZvActz3jFgqbmLMqZRGmLkPGW5mx2A8BqaLJeWT3gxGxEv4ogbW4a3in1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2heQgf5tM28ntqWSavB7bMfJpEof2UVxUp9ehMcE8kJbi6iAcBc4raZGS9Qx3H2TTjTXCGqrb1o1DowikEYVDXrh",
  "key1": "4Zopn8PoiJPabZRyk7jRdNPAsw6EXmTFVjd3REzXLVb4weCQdJMip6Gg8cu1vwqSkMBhaF3Unb6DWa7iQSgmL7vu",
  "key2": "3DdXw94UCrEQCFGcgweWyZghuW2Fgn9C5j98bdDpjdTk7gBRbjf8D8HuiXBEaXt6fvQE65tBYK4NZjJKpxJdrWgZ",
  "key3": "9yRt7fQhEBq67zYf22KJbgZcYwm2TcGCogq3Ys3Ku4xNJL1q9NyxJ5q2EXViXmf2mxGFV9FBaHGx7tanVv17QVs",
  "key4": "LUM5bwTEsZ5tm5yXUUPbNW1Hp66tKa2WLEUivytPBp1tjvshc9kdL5Ni8TYuB8omkZNEirWumzVUJk6MFtoHbAW",
  "key5": "5iUm4PVTpFoK4DpMjYTLRLWdhsAgjTvwSjVU47TGs9vwPydKzv7cUd4DKqWu54hzTVsM4hBUfum5XtNUytKn5k22",
  "key6": "3rsMavhdyLDX2vyUUmiqwNJpeF4AhQhpQnNAagcuoL8ky5mGKvyrU4yNDk7iPtWTHfYbancezUWL84FhXuLRZcJk",
  "key7": "3gzn2v1BsNdRVa4JuuczboRRDHyrYpgpfjadZXiJjWhDhLxqRu38GXLjqGixrKCQ9iqMNmjX8JW8VQCPjuM9uEUq",
  "key8": "5yxM5wgC1GTmsU1YzKYRe5RvfCNbJyuzZAwR8YLJvmDxCLK4HjzmpwMsW1XkSGGHTBPt2Ch3Qdfk4S7hvDGfMFrL",
  "key9": "5wXBghHEixGDLudqMFNDEE1LPCXmD3ZMZKWq8k9gjjYNATorjJ3mGvjyqNfCW7KvmRLp3F7NC9c5yeWn82xLQUuk",
  "key10": "3DCoQ8GmFukVCsvBzfMp13dKDeTPwtaceT3ATQoEtBkMHuQNnzzYzqs9mUvFTyEr7RVf254F2T11X27AnVN1VrjK",
  "key11": "3kBqcnASiBT9us1mbkaZYX6JPaFtJ4FD8u8WJm8f6RapqgjgYTFGGw438dutS8rBoDbke5zPNLW2TwqRZsBpfCCC",
  "key12": "2gtnTe4JJcu6h9BKEPazJGtrFCKQHVZDoF2Uixb5RurgkmkqGo4SkdNAZZwk8Z69JjCFsdev3EfNiCKR5JRyMuwg",
  "key13": "3qyHvfGvzg1xBomSPbmTvAGM6bgGEgwyLhNqxTYoM98vrqWbM6YppmiCsCNaitxVRZxznv7Uz1Lyfc2ffry3GzzL",
  "key14": "3M6S5fNiPASCRtb2n5ai2Cq9QyADaRtHTrx43NcHEFaBHjMFvc6YeNY5kXzDpjzTJdR6kXxnKMkAhpY71ETvLu1T",
  "key15": "4aTxc8eNRjsbfp1XZ4byJJyfqWyMw8eqJJiaBNj7VEDMp8HbMVpMcvgsHxm1myM1a4FwTvJVbkVuK7PxHLRvZuid",
  "key16": "2JXRDSM2tyoF66EhXdiM7PaZMqrn15k2Bw1noSrJXCjAXy45T4ARat6cyRYhGEWqfixTnuunAdvV3fAANQzuhhQZ",
  "key17": "zwFZYoZvD4gf2FvhZwPpFCzX8GAjyeaJJ1saLVGQGv39qRSDmxh3dpPBNsJ9fLSiLfhCE25f8JQRhsXyZPxbTRX",
  "key18": "4Lj8PDE63aRJ2xg4bsQuvjmD9hWviKXaMZTNfK5ZevGDYKLKacDzuuikDEG489WsdUVHbedzQnGdGdiukWMBV7Wg",
  "key19": "2dbVQ99c3qyzjXaXh98xWi8F7eTPWL8Qv7QBvYmsqWwGDnkj9fESuznyhYjyyodQ2f1BMBXK21BxBiDZUWRGU5pr",
  "key20": "2iJ67hNY6o1tjJxirPk91jEtnBaLB22WunSWgXa8dwGSHaDVaU5DH4mydptewvTuhs1CEZjuAo5awdNo5iKNorEB",
  "key21": "4DfSS5A2P5QUD7VShTd7ou6z495S8LAhfK9qaYMCuNCSQEzf9NrcaCcyWDxHgHz35x4r7gpGcDy9vSYu1Vx7qDL2",
  "key22": "4D2g7hY4TgFumQys4p9fSNcg8w3gLQiUQFoQ8fr84oQNJ3ahLMme8QmywrYPkceDyZ7RPnCdERdauwwS18YT6zRU",
  "key23": "3SHAMwbRKLBw6ogf5fA9naUFw1RER6JbwA6F4tYt2Fy2AjQWkkNSthMZkagF9RcP2xUrX96ngoK5NdBpsVLuWN9F",
  "key24": "2YvqCQymwGzBauPaNEdirvBeAfaSfE4V1we3sT9AQ26MTShC9ZD6hVyfQtLVYZBf3qwQj9XxMU1QXWv9nuciNKn6",
  "key25": "2ACUH2ym8yqtWA5NKL8r1xZs7gU3T6xd2T1JTmYiQTdDKRz4L6gBhS8nRUWdHDcapzRkVzjxhJBjomnEV7QzWmet"
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
