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
    "TsYkVoMTxDrgJMXy2rFpBY4zJpJgPe4RGLzeb19hrBWzoAPxodK1CoxCK1cqsbRq9cuKJFm5HXWuWWQPcAok1US"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vZYQRM2x5pWHDBse6XMUygqEnA8NqwBrCPC1Vd4MtrFLhZExiAFfQWtnwT2x4v1LHuaWhjJEVxkH2epkDVAxpUd",
  "key1": "3HmBCCeKPmGWjgf1GRMzsyFGFAm74PM8iLnKx7NEBYfMkq9GAraBV9trcmwPr5XuU8FLJ5BKqicPTwTNvNZqX5h2",
  "key2": "5TC11U4TAZf5EmckBsKqC4MRAvsr3FqMRhzAYSukR8CwKEYGr666e4ZHDkAaibm5mCMophBNa3fsSuYLagkVF1HJ",
  "key3": "2DRxjjCqVZKsJG5iWM1pouQ48XC2mx1cQHR6Y8Cqsz6AsXRyKYCexUUq8wb8FBVodJPGavTBR2315CG46mywrtwf",
  "key4": "4H5V3wAQkjzbdnzf4DGZNoU8X4JPHVVvLfdqXxukiPjBML9QtEGowaEXZUP9Fq5wJaiD5X7kEyGCb59tvF7yqUtr",
  "key5": "4EKU17hQdyKeCzsb9DHHBNzQRoT1bhEtXokaMCJA8aSAmJHzwQqy6zumnbe96Q2QBJPwueTA7eEWCYJtjWncwYHz",
  "key6": "2fgSiY71KA6H1vbcoUYjLyAKTNDJRAkaYaZiFhrMaZHXti7QxSeZdsYCs3vRF1AG9FiKPwMD2KrnJqoc7NqRuRpr",
  "key7": "5fu5Jr1BCqKBkdX6jjWGS81GhrLQ5t49t9FPyc95nPAo2vcB8cek4RePTmpALNbefMweXi2mpFexqmhPtwX3JWNF",
  "key8": "4V9r6soNQLNwC2WgMzZ4eSNKw8sCUwA8c1mrRmMqsfRaL8HsgY1dC6SUjAxPupwSN9bogVrwTPQ3J49D4HTkjEpn",
  "key9": "5BDnbv2CeC3vRHXqHeRiqKV6vDpemuxqC86Utckun4ZShB43VVrGvMhtfNyyb5mcXCvYtxQVrzNwSM9ZZR5k92F1",
  "key10": "g8U9TDpEncjkPo892V8fsCyuP1gyKV2Mi3cgUMDzuJ2u1jCaup2p1PcuKkwhMzYz5QizovnbcBuD4RP2ApaHUD3",
  "key11": "4qa38V6mrRNJ6uTp5NvuK2UdbkcQP8oL8uUWWHxUodgsBFXDHNrdUeWA31hPFXuo6PUpz26Fa1ev8chJB3Z2GSZH",
  "key12": "vfroxJMLhxiqpGjbLqAWPu2Ys6Fmmi29YuTRKHKJ79vApVtmNoTokztojKmAX9trYy3si5wMW1LDmhDDAfukPKm",
  "key13": "xhtwkrk5zandtzqMEs8ZqyxZwDDhGxxDZ1d3n3DpmwS6iUS5z8hqPfKzqSrYZe7miYcKGPJLAQSjjMH6Gd8erjF",
  "key14": "4UBqR6TzREShRyLb7wdEu1seo7RMiG2Tg5i2f9Fft792ukBLZUxAcDFw8YcpwKE16kkekZbxJHDLYWHEERLWokRZ",
  "key15": "5NXfHgV37C2kPAnZfNAHhF2AxogP6wTBbpinyJBMxiKbCkGvsxMLFNJnKeL3yqYitqF26Dy4Hcq7RLqgevess2Mi",
  "key16": "59YjABvtpzhkLSK9cdjuvc4eKUXuKj2obJ97okFMNTJu5BGj2pZXeAvhJoZLYsVm5rC2G2R7jXfTFfZSgpLyzu44",
  "key17": "3hv3xk3GnboDPXrJNxC9Nwj5jfCLHas4YsS5xR6gVdqrvAT5SNii4mkAsjQY6kcm2qGib2VxdfZD54rQCMS4Ecpw",
  "key18": "4dKCm3YkexmUBh8y4faZxAroLxrDXDWzUyEfDB9e36vhakNEbqTThznprLEY9xASxyJrNpRrUF3ErXnP1NYNsxNx",
  "key19": "5fb4Z6foBYuq1mgDXe7EyQaRraeqWUgPcoXmbaaoYBnWCNhm42zq3FSjZRxLxm2oXWR149JJW2JNsqgaCsgrALAU",
  "key20": "7ptfcm9bPBjDi4JoFR5pTuqhS6NqenU2KHXtpqBAULoZjgW9ueZm3MsoEGCXScUBkQcFK1if2XGErvDXiDr1jYb",
  "key21": "2uf2bGYXKWKEh7PiiwjobEk9Pt7Dsym1LKZdbwrJmrED3qyV5i33sZePbFDiPyLR44yjYZoqMY9GNRZwwvRaTB3q",
  "key22": "3eW2s8gvpGabaVarqSWMC58UbPjUapxU7ca8u1oBAL9tRVepootn1av5mNVc3fet2Zxk5MkKdVZSjvEe5CUUY8sk",
  "key23": "21GCGNC4mrSPTDF6rdSm1CzrJAuzvsGsfFBDPpGcJ7ibgU7J7JLP6VQTwcCzqgudCaHveWbuCpJKYZT7dYZBG2tB",
  "key24": "5w7EkUXfHazon81SPVjq6MTUTfAYxsMqZTq6bTvrLVuGwBP7tPoJ1PrY7MqDgfvAZGK3qiNYhX6JFACMFe7KZ6kt",
  "key25": "4SDJHp4GDPe4fKeCf6XDVWAcybQYotQkCzvWfoXQdA4rd5s61yiAiqJUCiNJzZmT9j9pPdLQDiRFmewRUCkUsUZg"
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
