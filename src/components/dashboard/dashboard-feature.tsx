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
    "34eFHLJo3B3Bj2uiKbwH9xR7qEpeGoYuQGKhQnUxoCTuHYWsHJ1EsoGbnsqcfKdevxu1R1YVSLowsbuRbwj7ftLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47qhBuVegFXSHtH7B9ZkXQwCWxkWBVt39GAhdtdgrrNBP3WGuz9TKMwHVX41guRz2SHxQNinyMHMSG4b31bhvTh",
  "key1": "55UwunavJ4PGwoF8tXEqVbHk2tCJoLX8egdh4Vt3Z4fDAs6avM54EDmF8u3wvumhKtY4ioRs8juPPhxGYdi5rFfR",
  "key2": "2pcnTPdbJGLtWwafuWs7A3XnSbzG5Zq8mZJR1dpS5C68jwNzPdRKQG7EXx1BQfSF8S5vh7NMRrsgQ2Awfad6huGz",
  "key3": "4BFdkEb4TZj2UTeeQmVp5Aa2oZYUJApyZKUhaBvLvNaLVvD8yGacwXWPqHDrmqk7fYvPdgTzGH82Cqc7VW3K3EmQ",
  "key4": "4jnomJ7VRPRxAaK4EmLErftVNAWQ55736HtjkDcQBbYq5tddV3csGdVGXtMqB4BSMpTzTHa4WGzT7bwvhMyi9XN7",
  "key5": "379iUGEhMxqFsvpSrnX86NgAZEXhKNW8FKDSBMVDiDisgt6MCGgHYnBRx9x4BxfoQ6EoP8VmcFmjyHdmQQZXy6VQ",
  "key6": "4YQWBS7wkJQ7LxGcf2ELdAc6Hgbu15c34HAAvRxpqQaZVgGANi6JVKq3Kvc4YVKGpvZBtD6LVJ45vmkfkuXNoUpE",
  "key7": "5Yug6nAbgRW1QTnE5Qgr5w2Wbg45C5Dt1eyD7feh1GzXpVTHzKtqpiZHNnH8tkKXqG1yUgq9oS2rbdBLGTtbMVr1",
  "key8": "2ZePbauaDmLW3unPegZKWNiQjQwbutee4zxw3qcfm4u45ngwmW4f6RgRgWVxfT7L3vFWuNfuT8mFa2gov2czjfyF",
  "key9": "5D2SabRe713Q8rBXmFxMHjxq81uF13modTS1HnFUAiorgYDvjYaUyJn2XYDUcAqPvSpnPmK252XZ9kh6zDadf6v9",
  "key10": "SNHdCsUzNyvQCEVkDcdRGDLfaTbvWAsmd2u22un13K8ZMLMv9hA16hrhc5b7Vhg3UgAu7u4PCojwmKhfsXb9vc8",
  "key11": "5rydzifhc5Sef9RoQ3TN8y8RngzqfqHVFUZgrS8ATXxb4KpSsWfTAdcCamjhCXBayCtyMr4uTFzthUG7f9T34gX3",
  "key12": "2u8KVXYPhyfpV7UJdMBfZvq7SNwB4bJosZufLPTPWzzF8nfhf3V4xZoWY5tkhkjGr7GkXbYTUSvtqXhkC4oPEeTW",
  "key13": "63iJgp2D7tUDY1UNY7USgV383EthrAzv1RyERXzz8hHgXdPZa15jjiiesd4ZvrG8m2xxSbSL7NcLdfrZiHb3Gxim",
  "key14": "S5KojtkMTAVfFwabi9YjikEKkHBWT41whuXdTCbkDCLQbv1hs4Ed8ZgL7fcBRkNCZJHD5JQFfHRa1jTVBnpiHkz",
  "key15": "5eBNd2Day9Xf2u8FjrwMrbmLkqsAVqA1tbRTajccbqX9hdt1QzNVxV9s58VE9BsP4bUZ1cddGTCmcNJi3Kvzd58u",
  "key16": "485HjHcJLQ4xBm63orxAZ6vfsnj3fwS5z2Tkr9eFpfFidcdWujx9mrqqLJnGwdW3Eo1ScpsKt7HtGEuSxYdqYVeA",
  "key17": "bQ4PfNB4nxGRjjy1JfzVv7BAp4J9Ngagv21k2wUBkG4HWsmcDYKbqirnpwF2xLyEqLxXghpkwiKGU4FWgQMPKTq",
  "key18": "47wm8U8DzYNAYk98adA5UpyyYcwdj3jrvtRzxzGgrXTfpa5ArJMBvFHxpfjCCKbrBChXRaZYDH31qmNNYvnXkrnd",
  "key19": "vqLBo3wxvtUec5zoaFwqfTLrcZwiZwG5iytiAdvMp1ioi9DL2A4a3oWDFmpKJRwUeL5cUKbEaYVyRY8VtPgA9rm",
  "key20": "4JmRrrq7aNfZaaeN4zHpVGq8PYisgrLVkuLs9avjZXRfT42X3U2CCCRUBCkhCXT6yFQTLuTvrH1PV6o9BCpgAkuU",
  "key21": "3NxQnTLUP8T5scw8NvSLUwVWgKMJNggCGo33ESZBBPyw6fMCVHqCGN7kSjW3wN6Zs9u428QK6iqY9FAGmcT2PtN7",
  "key22": "2y6DJt98zrw64hcfDZobrhG9od4evyWr8YZFg8Uk6T73EaDtMk8R2QaK3dgP2nw9ygKFonDFwTxkHHnrc27xCNNa",
  "key23": "2mzbC1H7uAFhiHTnbgGzGFLsesBgNWBFLk8P2R2uvwbB9TrKSoxSdZ6ijw3PqPZcjdJn5V4Enh3EGKP57KxywKQE",
  "key24": "446Qzjbkm4Em7RXPnqVEUt7XzLzPvQ6KNwvBAToWkXv4Vpod1nEbfFCCRevzFXnqHn2dcqkNktGSHg4i2Eriwcrx",
  "key25": "46u4XdQG4Yq5uLwaTCpj8mZzTincBCLmMvgjAyvJwHHAgHT7ArDSFGcXVszsiyp5faujd2aCqA24wvMuDXR6x8gL",
  "key26": "xsZ7h7PFxsS41yvQPeyXT8YThBqFLvyttPz54t6aGC8dULecuaYNpxF4qYKr6Sv4T6rhChjzmzESNfpGzKxhEVL",
  "key27": "4pkhsmFRvdV7c9qX21FCG4mzge62q3ZK1EGpJUfYtS1ZHmwBMoVPhFpgRBgPFBTkRj7kqXS2T54DGMDKWTMYJEqC"
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
