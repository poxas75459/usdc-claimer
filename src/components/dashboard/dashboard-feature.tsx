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
    "5iTQuWAjmsxMozd4t1JAU6dPUoQnf6ZhoXd6um5fYhpmQwWvPJAEuGfe6RGGp8zhYQDBZjPHLtiXnXSC2uMAEGDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WGPVuHC5gvdPW2LSvWMv9AMxDtEeZvpjcErCke4ZaxggsivUcdu35GxhPBCw3tns1UzaM31we1NjBmfzG3aWcUN",
  "key1": "3taDaEze6zEh7RaPcyT1ZeYXCmfNWyUGSM5RrkfZiHZQjUjwMmHuZ2U7Fk23MaZh1nLHvdHFHyqhuB5dikeHRTo1",
  "key2": "4HUTzCGUht5rzMKxXK2vGZTjqv5PgD4VpixAxg1J5cxiq7N8nWH8nY8r6KAqFein2jurif8Y1yGCvD3ua1wDteU3",
  "key3": "5aUGZGbs3ozT5rFDcE3LPBtud1LFjuBXXWar84pmk49c25br3kgoJzxBQDcUToQJLpt6sbGzkBu7fovpKPpxFbFE",
  "key4": "238hPsrQfHjjup9CpGBcq3YtLFS7ApdUBFxxC5qKSDzgCykLvfem2JngmHzgQH6KgrMP5SchpNgz62DxravnDW71",
  "key5": "4BiKcQdCs5dyqLEsaz89mxFgy9QJ1DDC4PRjLnVb1P2sik2uZEq5fgcqRb5mnA73gmutJQjFvkBPdsJDPqja4Nwf",
  "key6": "2o7UKNFUGGQ15GKTTWk41K5Zy6YCy6oSbPHZqp8VksSzenKNBKASUVfgqj4zxFHGthTpQCKNDABJDuqqaSzoxcsk",
  "key7": "5XWd1TaM8BWb44odfBioP7XtZfgNPC2RhVfDzb7GHcPkhwaRwcS3kvpMdDsNawSwDMox6jg6njgoaoBvTdaLWkRa",
  "key8": "5JSXjdp8TuNd2HucWbEKM2kGD8be82JquGd29qUYsgZH1Lmpk8RiXgMDAi4cxNbnr67ZumJ81z26xjfEAPqW4S53",
  "key9": "5YYfz1cpkrgBZj2yAkBpmnEazSUBARZBzpMswHG6Qt6taHXTVNgCzV9QsBQKTe6CBUbHvA4jY9yD3n1ctSJ3TYU8",
  "key10": "2gGNHCzY6ayD3DQyUriv9EWc2yt4Lyqtm3Yb4qc2ZUo3mFCBv2F6GGWbYHQLUWhwn2CTHe4YYJWEZ4caKa3kVMtL",
  "key11": "3u6yQurTrEYWhVLA4PpcyYJKQNYMdZeUbGfL1P8PioQ5AYHMCgyafhWMJntUsweSvsEqPf54TWJVNqGigLzRGYQx",
  "key12": "Ak2m2xsVpvERPgDSRYER3cPg2MzMU41egw4n77gKz111hNbMgcRa7nyQrVveo5d1rnhE7W8a6mGH3d4nEtG1pLa",
  "key13": "4ZrqNNficJfaSQCbw7ebFiwjkHCxf34wkjM7aJ6D6W9Tk2eeeFvkQPLWF83CUUYabZHVuMQqswHBYxAFw1Sx2JRz",
  "key14": "m5vRS55ed6XFBLTX9GQtmiH3qgLKc7hRw6fwvtJTAZKooE16QAqwU6DuFjuwy7mZ3oyaQwh7HHs3ekbdUNBEmAu",
  "key15": "5BxhAuHJ7GYDVp9JaByw3FoVeoezLRaCtXSEPSBa2CKQBSAmBQ9FoXJo3vxqMQGTCKv4hfDfDppDUFehrHpPXSL3",
  "key16": "4tVgjFZYZ971fwXH8Jvp6Vo3x52AqP6PiQycyz58qpQCDF89bUmoFidPwZ5wwX9hz1uTnE88fUo7AZQucu5gYvzc",
  "key17": "2W5Z9cmbiRpZhmApV57cdHgybmW6d82MLDbLwDE1AebdVSxNfrkh57BjPezxPf4dnNMqweVcHhpBoq1KCzm7xmHV",
  "key18": "46qtQRENDeHqbP3A9PBbtGDGzaidocGsBc4BjBNTPpQZsPB462iuncbw8MFLNMSEqsEHoPDe9jHa678vAVQcsico",
  "key19": "24uxXMBmHY94EUnYBZVQhJx2STftxB97m8fUhuifAnPrCJnaxKgSHHbkibRqUfQRGnNPAWADo58LYcb37GDNJWSu",
  "key20": "4frsWo4WsfQjVK4wKmXu1fYL2nvqz1KzTJFTDNpRaZMJF13HfHuG5nHNzpiREiS1FrpS3WPe1JLBSSuBKyCG58BM",
  "key21": "2zyAXg92ASviRYmdT8NPAbrxvzFCSKp2Mb5e21vF9R9dB86mH8kjGG6rKVQjdEF8LteVGkgtzFeWhtRQMkVUpMtZ",
  "key22": "uU7jGwYzEH4SM15VkzRAPiTN66DDEbcmsZmqwfVBvEiA56crBmGS8DzL3CfZm4vitZsKP77n7BN2TRVCUtkAyCy",
  "key23": "2Bho7hoDKvSJfxneiNxeoJTvLmPBB3QvUYjCiATuf6zT3kxqLk1jWJLJNrAAZH6mjaXKvyBcQMPJMn1SW4FoXPNS",
  "key24": "5HspmUdaABxjECTJDGEqDX7QK6XE5rYikGME53LUADnwWyn9ZQEVqoXVS9pjgoHsBQNh4dEcgugNMvBVDwfLZ3Hr",
  "key25": "3S8XyUGJ9cCXfWRqt85Q5zsVYCS7yBBfLcHgoYKcNqLk3z15u8jhz2tLG9bv7yrA1z4pGo3Ercv2ewqt3biQ6317",
  "key26": "55Nds5dmBKTPqy1BXnriGQD6CWPtVq2MC1UBQpnHU14ewQRf1cByQgdAb2ZtVAE2A34GGeadkjanKZS4Ng25XcSj",
  "key27": "35pxPChJxWvBZ2ehpxpit8zupTP5yP4JBqbAgMgRKuvpajtoiifskt7AYSX5XUCk8d8xU77xW3AuC6odGpWrMM2e",
  "key28": "2Ta9RQdh86QqfS8iboSdTPdyD1JBhYmkyrrXTbiCgGQuFbXtYFSVNf3MqbdF7jJujVjU5F6nEgP4y6nqCWuHCGKa",
  "key29": "R9aYaToHUJx5eCtCBLkcxnMqXfkZfY7rXXUof4zgJGksZPoefrxdFAVvgHQjGApugpBYzuPCHZiXC2hPw5CVtix",
  "key30": "27vQabf3nhRqEF3gokYAhHpz2MV8jPaBLTnqxWZ11tDiKLox13XTM3KZ4iFRcrsLJauz95EFyqr9PaHjkD9DvAGJ"
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
