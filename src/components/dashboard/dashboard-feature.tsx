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
    "3yBLvt7UDtR8BuYodu5AZNDShBHiUvdmJtSz3RJpAGc6ZgqxoSNRzPkng9GyFLXtBsg2hGFhkZN3ay8aWAgkmMNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bjDKkWDfaMYodELY1ZF3x65iGRkqqVmR7kYXQ4TMxJ84vM6qyfjHf1erfPWEbsX2DfkohqRUUPhp5JUzEwcV1Gc",
  "key1": "37Bpz9FwYjoLPGqhygskQxuVfgXMVUVfj1NJaFhZ6KdYnS9z4JRtwQoihZFfMTadQvDJTY4VVrSnaMSrGADsdLPP",
  "key2": "2wT9QDDYMvCkTDDXXCyT3mKdxcEGwG2dahmSeipvW8RH33fmzZvyx8xe4Gqjyi8JxcMt3By5LffsH4dVGTghpiKN",
  "key3": "2Vk3HuPbsqdiUtyxNu6yYfZkH1TiJi7sUi2v1kzXX6aW1LiR26ychRTZNgcJm4QJRVBonDv2kho6YvUcrmth2aEm",
  "key4": "4GBjJB9jCXwY5MVGv3eLG2r2eTXRSpEdMBp3KeK388GMPN4K4RsW4qgdFjKTiGg8EhFc4SFFR5KNRTauaNU59MdJ",
  "key5": "2hzERC5vPVm1Nv1e4xNkPnpHWrAH9RsDuLpnn4dvRhp3FT2h7FSNpyuh4UQmqZmwpDKJGNjVVCaoLM97jzSd1SSm",
  "key6": "2TqTF8xP7uCNZjPHoEQKqMjGVKWrssntvakfKDe2YvZCPr3LgV4RJesZGTFjE6dYu7jrTmqEJyh3bfr3mCB5XrBX",
  "key7": "usqvn8fEGxbiWLMM7Hr5bqLNkNN9DmWz1mLg8xp8DCvfr3cHQqThsBszq5TQR4VfbuH8xFhWkxfUtCh3gCKiNZg",
  "key8": "59cHPiUHaq8HYKY1d6rRfrhQPHQURiHzfvMqHgMnegT5Tj4YqyhfjHNnUxPU8hHRKSuhUkviAKCKhvQ5Cjvf7Awx",
  "key9": "52DtnFXZVnDFViCPSpbrbu5Mr3b2uBKxwj8QDtyCJi3pTUhvAS9DZSgH96iqECT1Kc2aeqYxXVH5WRgtL2U67cgn",
  "key10": "2yaPUkL1ecopPbaNz5QGn1kHucfu7ncRfvEvBDkVCqFXtGQpMKo5AYvCFbLKKQgYqe8pcP9Aza9HFvrwczMCRuCP",
  "key11": "3EGxSuvcRuY2aCWDebgZCystsr4kAcJDcFR3TWySp4myQJXJFWPs8Q8d9apbxavKDuxfBNfmn67ZUB6YXgcCPDBF",
  "key12": "2983bcLj5BQM8gVrZ3Api1cUPgjFpvByKVaHBTb6ZjDTtCjSjQuji8WHnzDLNwr2QrXjW8dkpceMaCchEK5Sp4xk",
  "key13": "57LZyCMMiQKWmZ77szrFiQf4Td4k1A1jPcCiEeEwpKPDZRGXKQFJHKU8aqiLGRfeKziHLsnRjAubgZKJBk1HJB5V",
  "key14": "2V6aGE6DiTXwBMmTNomKH5iELBx638s511hDgpSi4iy1LvrqsL3wqBcaxzGVd2CEaWEcyTK9qr3FrJB3Bo6k2R7q",
  "key15": "QCgAzrzvxzRCVQ8Z2625BwxoF4hec8ZPmxezfhNCTVDtR599SvB6NZEtt9jWuHpaHnYC2aSWyNkHNhLLs7XWcwU",
  "key16": "94orM1AEvL2adCcW925yf3UHmKkL3RisTj77Vra4U2LTSPmj5C3XKvdnw7hCs2kYHpK9CoCWKri4Uw5eTBWnFgV",
  "key17": "5eFmsDKM1YUvV5a3959azn1oBiMuGQ2fUVWwYJ6XTRyE9HVWvKaREdNVdxRvs7JEE2Q26AGUAF6E2P9W1pRMhd7d",
  "key18": "3gSjv4PfJFhqSZ6P2dhGD7P2fprH5UvbuhwivMWQiGjrJQkJCoLaxijc9fgFvM97ZtsvZBiczSw3uJoLAHJPRc2w",
  "key19": "3izqq7dD2BQwUVX9J31QznF6yNCH9Ki37caEXVzjJvG9Bn5duwcZepuEPaza3Q6ShUUkGVMdSojmPpdpgcKYxTZc",
  "key20": "49emfpAVn2bvLAHG7qUyHK5nqyyqNghud7n3KFkgSUsx8XvVBxNL9j6jiyWMSBtwj2jMj6eafsTX6U4J9Vw91TLQ",
  "key21": "2RrCmEMEV1vhgK3X6F49c9SfZrZVskFWQjmTLQeGehEcYFKRnVdM4Agx132Uj2smMkvyC3gVrVxUjAkwvvrBQqjj",
  "key22": "27H5kTKuKLNpZWkwGPtnr4fJVXHV86m5tW84rx1vViuuQ3pzLSdWcJQiPpaRDPigymG92VEKNFN1K893AfZnngiA",
  "key23": "45WDwvnVPQKN3st4zYPufnBcPvH1YtyrijfQsufhfDuMprjKDbpPtnj2sSfRpiSAbjJSKLdsuQ4M6zch9CuDqsWm",
  "key24": "4QVLup2GmcPtoqWHRetF27b55ATsXax7gBVbCR6vdGax29pUqWroqnPsjQnCQKt4wVFuoHN1GtaN4uAsWnjFrBpA",
  "key25": "5sXHVNmGVGx34cepkTWFu3nm9nnGfNxz25JVqbtSnWGQFn6uzDHW5S47gjF5S815VLHsZRoMc8sau26J7ZWZ25wa",
  "key26": "3oUZBZnUcYoCUG4xcAGL18w2jfkb7GbeJwiUFPvhnQDoVULKJ7hkGRpqy89R6CTGiobgh2Ux4RuJBetGnS7QsSUZ",
  "key27": "Hn4rfH6tiHJFF8PiKnJBD1MYMn3iN8AXaDypVX94YVaZTtCgHSSPt9eMLpC7gD4Kv21tUBseedscL7vj1LAKa1M",
  "key28": "45vTrrwQXFEKt7yGt3RvCFtpAXYkaT3fX4AACy94qDupraeFmJJHFr5tPZTAUj1dHr1uWdAz4zfE6DGzN9XYjMcY"
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
