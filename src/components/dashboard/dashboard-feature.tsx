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
    "aNfw2K5ZJncGi8GTVAof5dUq7Fy1FESxz9BPHiG6MaShpKrstuCLPZMK2ue5UxkFD68FBrgED7W9Ww42yrkhPyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3esp5RYyrmZUnnKDwwfd5vheuU9FqUVxMUiT987UCgSRT4F3xr7oFcqmYPboC8a7qyXAf315MPJgErrKwQt2DHF",
  "key1": "3MVVS5QWqm5RfEHHuSDA9yU4WxKKcX4Q8vymetx3CimFCXhivE7usJ1BnnzsaGCg4rGzCw9jEYTUAMaAuVkSp1t7",
  "key2": "62Wq1fKsnwPjWySCrrF3U2dscKtakTKrTPPRcBtwNn4L2gmJZnWmWCMWkjtvx8J4ito8u4XeLGpX5TRatSPsJhmQ",
  "key3": "5HxGynpvenLBYqF8P5vFZtBJuMgGeghDSAXXQoapdb8SrTyEKQHgJAq6SUFcMBSeDefBHkUprAoGyjbm3snp3UT1",
  "key4": "cue1CHfLYbN47DJwUK3Nj1bWtwtaz6B4R9uiPYXEoafRHiWvnsUY8K9chcmpMxdQpkJM8RLSajsaEaLeSTqg65D",
  "key5": "2A6zJZ2gugn4Nm9DQVRs1Ez32yKuA8wkDFXqvZLfZMiLVKSzyjuXMBvVTLdCnKywPtKmGA8467MgRphrdXjJg9CZ",
  "key6": "mC49b6jqCXYtD2m8ffRPBjVwznEp3pFEchUZr1tw4tEUjk9CdTQtHXaLbVyoJgv8BvZca5q9WvpDXW5uFhTzB3C",
  "key7": "4313kfR6xEs6Z6xB9CFnPViiWvJpn8x3NBMKPGVPr8VXSkjs4JyuCJyKFT1PqCWr5EQ3Tyeb22eJSyjdFPq1TUCF",
  "key8": "5FpgKzE2s1n5AX9rkHrZfhyYuJpAjnwNJ7MpJmZSUwdEwE3BB8JtF3UfAaY6fgQfnR97763gGNNnGjaW3NK9pRLf",
  "key9": "4ZFgom6oqZs6rsCSMfFR5Azz83xjxxbKhoTJ9k1npTGcnvC7bLsyZ8aUDRSqBdiFqacrMZTzS5M1W3NWCVQnWj9c",
  "key10": "3GwG3NbZE6e9X7LwpzTKyGDK6RLXHexaZrqjFxcq3uYYZcn1wEn26763b6NbK9yaMWUKsCixJga6yQUM3gbbZyUN",
  "key11": "fqdc33rDfcu7mUiv15fhzmoRFea49QdmQotvAci9F3YiuJ3hkjFUhX39CtCTEVU4qaXQP7ZmJcLQrdCDcM72PHk",
  "key12": "2bVTBhyp3rPmxGQagLYdGz5zCD221VoqAUPQ4Yj6ARUDA4atSNN9RiMhp6jXTsGetMhsnDr8adA816qMhdwsfgGU",
  "key13": "3bx5YymkWqLYnstQDrS29z4qTR9mkBmkM22qWhZqs7cZFsdoqhLadpatorLfGV7EmtaeHxEZ8CPDCasEdm8Argzz",
  "key14": "5RqKfT1TxjBoFyCGkphV6U9PaoBTQb8bR4FcC8VdFgkZtvn7Z4B1NPSqBUXzYoDaKXijxoif1RLaJHyPyqM1FraK",
  "key15": "2Vn4VqixwUVUtnnN6CgHZ5PAfuh4S2FStA7pZs1csJibDyjtDc6CtC1SiQTnsooDeo1pNuPS5ag23CMsrSXecJUv",
  "key16": "3vWXePCaMFr9FK6FtVd4m2xUh8DsbeommoMrQQCMFH1CbhbUnq4RJeTRP32GqJVKSgN28rsjpuG34pYfwJRULoZq",
  "key17": "48ajawRQQE73XPiVK2iLN5FpuFicZaBxCEeeRnrygXLA7CmBzUZhd7pQ5nLH1zUjuvBunXmSc2SB5JCcW3bzFiot",
  "key18": "prQGw6bK4Nm1jG7Bz6fUYZoCuGU351cjKVtJkj5WRMcFELCtTGyPLqHWRSDpLtMh55SeofYLMvTHdskKGQo6Atf",
  "key19": "25JhqNX9tPvzero98Xk5jKHKELeRVBUWvRRQWYwcSekgxEAWWodZ6AYBbdFGEzBSjkLKZyEMmgnQXcwAVkfMyUcA",
  "key20": "qMbLZsNBVuA8ECwtQSfviUdAUALP5GWRvZDbAEqWvuMXiWnjEQTAxiDXMjXU4TZtfkWzbvsACRug6LWYrG2RBgu",
  "key21": "2vZmX1dJCpoPufzPmxTpg8GzQYZSC88Dy7wxkYNwCYzuonBCS2r7zAA6U2AYGGNVEUvHkpw8RTFpLfoiSdRcTNY6",
  "key22": "5VcdJo2wpEaUf2phnV9fMUDbgzrRdUfP5zAyG94weh4bkiQdWVeKbPf6WirNSoYVkduVYV35CCY51Q4CmUk4Hoxs",
  "key23": "yLxJEbC5wetGo8Bs4WcJndn43vnrbAV4cj7qcrdjmx4rygbRwLYqHMSLNvVootEyHhXRQ5NmCG3auybAMxtgKFf",
  "key24": "kGGKqTGFtMN4UwqY9hUhyJG4TL9Fmqqz8mCt5ddwv7bzdt2rgXy9sptWT4MW3e5X9MvWKrRnta4UFF7GQcMagjj",
  "key25": "2p5JXyh5ir8bX7tXXn8ouaKFL6i6qqP7Fz6gghrpcZmHCoWveWNM6W1P7TWndhkJtbrtzoZUYHVk4jMNmntXTkZ4",
  "key26": "87ZwNNhaCCoFMtPPHPSL4st9LLmVEZsg6CqmsHvn99H92NezTAMys4FbQQ4kFNU3FjQ3b246KnJDG4DDRUudgXw",
  "key27": "hMiVEucH38DqYgiAUpKUkZ12F8cKhzWjFr6va2nm5mjFoEGMPZaBXZrUY9jmkFE573qsj22u466fpR31LD712Ty",
  "key28": "2Te6xvatpRKr4UnkKFfD7Eqvghsccz2fSeXXRu3MBeXrg2TsyL6JbNcWhE1s3ybh9ti8XGCERjFd6bB2134zYPaL",
  "key29": "4B3cWZUSgdwknAthB3R2RcHZrApLh5Uj6n6JddEawFK9d54x7uRGAVxVSFbh1TeqBaT5kahfzZGnBrbRezwSw2op",
  "key30": "4BmKCS7RWZj5ofoyFbTmNHXjGj5hyv7hDrWXyRLQTmTRhMZdeT399n4qV3LgzG7f2GTVfrPN7XCwmQXQQfm6a4MR",
  "key31": "4K447J6A9Sirbc7QtRXTkk5cj7f5aJWfCLydbQhM2etxEFx2VUU88NbRFbUKqD5i4E8hgvMaWFVWdvU1M11RcPK8",
  "key32": "44KuqrGnzH2a7eF9PgUf375TPWp18bR6dRkmhmxoQud36nqaQvbfuXTtB4YuxAvhmWhEGp6NvnuaFWPfSctVjchF"
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
