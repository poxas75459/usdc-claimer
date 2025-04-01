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
    "3XMnxs8wb1GQALDf5D9am3uwKb6e95oPVHF28iJKe6irw6ydUfTyPKK7XziLZtV4t8JZtBHDfCmAMAoBYVPSiWyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J4kifhheBvwBmEtH4UpqTMmLmevBCAAH1rWhgrACSoAJjSJ51Zzzdp7EJ1Z5KZv8jpM8gRabUaEzqTzTESiypkm",
  "key1": "AHfEus7tVE8bGUFpXZywhjUnArRdqVXibCFMA5NHMMj9P6qk3vzopjAf8JPuJv4RmUtw4DHK2iRqpVz3sA3MWqd",
  "key2": "2FDysRbNuJWwuKQBAAjidYgKE4R3JSZoY25oNdu4L9LjUVhKKG2PJcDwqShqVU1iuzsGne8fxCtTxCYzFAx54w7A",
  "key3": "4Yr87kmPr7upNj29rFRPJF5CZaXurmPxGYQABdjF4BEbzRb325zT1xZBP2QC44XY4bNnMweLwTQEGj1Cpz2bAt1J",
  "key4": "3VmKEvptzxmAhQPpasHq14ctQqh8Ejq8WeNwfzCBjKYVKp3Qdz7S8jDfHdf66Fr1MA9bnKbtVkgkAZzwz9iZz76B",
  "key5": "3zrjeQ4pr3j657xe7eobnEfoBPtxWyKYUv4B6CffjHzuGSPkVxsPZ2iiKoprzxcTNbbXdxxDB6Ye8d1t9vQm9e2S",
  "key6": "4WjXHWEC7Br3eUzz4mVbjsbDEBzf7W66Giszxwf3LB9s2AmZZwRpeuYjBWRgP471V6yw4Fweh41EVBSxCz4esnMz",
  "key7": "3UYLuEksdyLhMwRMMXf2nhn2RbwknCrG7SeBc8GJSKmPhUZW38DxocG3pyAJ7budmoA6ENmk197mQcRN5ghNuvZz",
  "key8": "aQPAa5Rg8c58L1rTfQvtPeZuR7L8mvStnMbw4qMVoh88tZUpYBX13i49JBKJFEixa6x4Tpc7M83mDLL5JkAAs2j",
  "key9": "51TZD8Dy3ozu6NWCevx8G7U1ePcfeMnK3LZUSQNCnBuz6dTgmj5sp8DRFkGPcV99DW8r3RCCYv89nzwUQ9m4wBSx",
  "key10": "wmwo31BQ9TCrXeYkW6X32XqAW1eSXcvuN9qayGRXRh1GnoAPt8TNxu4ErgZSGsjEZoQWrgpNpZG9EmoDynQhwRQ",
  "key11": "2tdttHEKdXYU2wgdo6rE5qT19VpKrpCKxqsmVjRa5tLFvMyb8rzjvXeciBh34pw8fR2YNqTBW2vk7jpVK2z1v62T",
  "key12": "1PiSc3kBianHxrsaKK8RM8VgKfy3jnAXVhZQts9Hq22VpoACP6cUue5YdX5p3625N6JWBoyo1J7PV9WvSKqGTrp",
  "key13": "YZqxLptVD2MHTQ5SqzPC5reWQ4Xw3SAQaJHtE6cF7gReE1yUZsQTN62JSGVUHW7iNDohKJdTT1BtdV5KcycncsE",
  "key14": "4oZfpH6VrkNCDao3tjBjTvmepmZtGfSq5u7APyU1ZGFejnMHCEWqNhUdYZAeJTLerfeWCHhoCBVaCVr8Vh73S1c5",
  "key15": "4AEoAcxU4Sf1vz4XsLDRcRLKFPiqJmPTJfaU55bpj1mtgSQMCytxjyJ2ZxPJfKsXAC5htES7YcrQGPV4mpCtbgam",
  "key16": "2bopqG4fiC4NHcEyrWmbafJaoRt2Ry9HmW3v6ac7vVM1SneSFEz4PGYwk639aRg4Eh2YpyBcE7FJxwGc5U6vH5sG",
  "key17": "29b1mSiZo6nFjdoffitatm3RhS3DNkWaPWKBwMWURCyDzz2MDWEjwyqE9kzTXe9zQJphzUWhA8Jvzt8oRevRcgi5",
  "key18": "WNncZ1FEQUhwSgHxusLUbmX5stuHPaYSF9v154KWD6WWr6eHSSRmhvBB66tduyuezoMFZh55Um4peLPje112w6E",
  "key19": "5GHugGG1zGDfxp2oNvsxydGZ5UNwZcz5854dj4jL9jrvQCBFMgKko1qT7QvL22jwtqP9m7QrKm2ZTHzBmAP6d4TP",
  "key20": "3Cysi59QKmVGDLaRrCS3SFd6jFBgQySCfM2LRCTxPt15qAopJj92TuBJQ7t2vtTHCJJbSHM4Ag45zGnZaWVEyawB",
  "key21": "64Y2YYpLBzew8x98CUoh9e7cJ7JeaFt4hznD3Gv7Fpson7XEFFjTwZRhpN659iGvCvgRY4E9gJRdXdujxAHLeUaL",
  "key22": "481zQvJLoAiN8gGxZ8UBiNogRmfXnypMoVWiCjVkbjPKZSCv7MouvuDanCf6esHbZP2duA9PhLB9LmMz3AeFMcqH",
  "key23": "2dDbPdsVqhWKrSt9mZZVBerbSuRYFvRzXpNnWdwh3JFedYoRzjMGdojwstR8X3khgPRAcUnTq7NB2ARU7ZbdauKq",
  "key24": "5td4s1P2eXqKd3Tkwc7VZ6k7dzikmWUdf5VT5BnKKUA7Q8fdbNoBgSNeoaD9efs6gnktdaF4cCW1f4v6pmQnQv7W",
  "key25": "5wPFxU9WCq3wK5t5TzNAwnY1SKYTuV4c5QyjucUiSxV9qxVbXMXrTbR1YsBtSpMv2qUgj4pn6VXiVLHKp8GM2Ux6",
  "key26": "3yMbMXth8fxwVhF8Dd1krq8kjDKtctEAMgjwSFeETtdpNv5f6gKk6PA71i5cFFFag8WdMsMUPHDBUgZSn5rkohj5",
  "key27": "3PAm9GH9PRdaFtf69tpPiidhGvGb37GgFbqdczwMs915iNcgGrLc9zAjCePttw7jQKytgZfRZg32hHtipDWtRZVU",
  "key28": "2is363K1pFAGYxUZ3Ppahvmm5kbLiRCzqDvaofNADJeDpQBnnDr5n456vX6NhveWPEW8TGPAx7gvifssmH298Pro",
  "key29": "4e6eBT9Mb7nvky9u3H8HGbjKvnUhQAAsNrGWCGAvEc4HJeF1ZLF1rDKAvS43wmMQN1EFx69XYC7Ya4uh9r7C8BpA"
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
