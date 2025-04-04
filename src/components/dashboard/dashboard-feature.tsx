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
    "2cVQxJBamTjfDXp6YQ435SmoPufa2CNcgrYHJii2SDh9Wwmfm5647vNxJ8hvk18BzZx6JbpguDMB84ypDwGjfYke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sZCtQtuDv7LMmdYotixfmwviKVzb9i1sPBeAfia3yDh7tAqoUVrKxkhXuaboGeUtwNUrNzW64YBeGB3BHj7fK3i",
  "key1": "5fikjibBEfKrJKUyLqobnn6JAqrVzLwGKsSvffwN3ftZReJRfyFFfMHJ48VewmFPz1EnaQ3fLg29dM6LCU5mkCAh",
  "key2": "4XXAQg118cFEatRDjZY8e16XKb8srcN57ob9XHWawRoToW3MzEJxcQzohLCuihYKhKNDqvF1H67yoP57CBZRH4gX",
  "key3": "iQAPo5eeqVn8CA32UySgtzgnEy8SBJWibStGG98rVQkJVeSuNFgekrFWamxWakDUZB6vuG8ZoJE3ssKbSjQ1xhh",
  "key4": "4yp7vVbLReebSGnuFFBLsYq6YHbyBtuWYsGZHGogp8rr56Pum7DUzoVgnspzZLgpt8oSjB4hLDSRzFuuSN1A4rLz",
  "key5": "3ua11kZhdwG4PGWYHHV7epAb7kdu5e4Bc585eGnBdmjrDQYVPhM6aU6eNA9ipV5tZkn6JySb7mn6HUUedjyHRqKB",
  "key6": "8UPeWvjHkmYTyHuvS3FmXVS2gLLCCKCRGv4fxrnAir8nMvqXKcsrYRkpygir8uDS8F9sKwo9ra3GZDc3WcBnezJ",
  "key7": "5m1z8dXFL2kByKn1Mx1Zu4fzhhnE6VqueiPJz1BtYqx2AuT9s8MQzXpyRjiRiYkuzgijBRXEFJFjnaLTgdCQ8i8S",
  "key8": "2WuU65EadCtxQTzhb7Xit6fFQRqtfj7wpQeaSm1zZAxuWvCdKBFbcKpquGNpCJiWrjaJfBedecTEeC6CjpnisDXt",
  "key9": "5sFbw8JEd5vpwTnxLsVeWCvYdHoBFqgRTSjGo8VRmcqHaiFQdXoL1ZC8RveQt3YU9jRuciYNzgJTeiKotyiXE8ue",
  "key10": "5FYn6k2Qi4o1egbK6jxcjpu4HaLqp7kit3JX1egfxEDE2cwugm4mGKFUnejvgcvUZrj2k2idXsbx75NHEVGyNsT1",
  "key11": "4e91xpVchKKMrhKqCNdJpn6N8JDvRhCRbPgGXsCj1tnD5rZXDP4BKWs2ZDchwCb6bsTBF51nM5zTakF1AoTUUtVy",
  "key12": "3iseo9EGwwXccmBUrMygSwWidCfUmYXp9XJDZmGwSzCvfqtbXw5sbAoog6WUAbGJvQZNqJJHbXMDLgYEnmjGjbpy",
  "key13": "5mfgXi4UASnDb69nRQUEEujG9UuCdH9FmEFVxQpGzR5EKY4TR1rVhyHEwirs4biNAcLkMMLWcz2nBBursnDjo8Y7",
  "key14": "5jFnYJpbEqQxufM9BfYCg8gVLE5iLGda1NjSLyLVzB6mvgt2Xrhd1LrJMGSgiwpR4fFskQ9Z5dDc8sR7RukCVQW4",
  "key15": "sKraVLu2MjY6QzQMnLzKT9UYEC7e7hegDUz9iE3TRPUwkoTiBrdhizQzE657mE3zfxrGcPwVmbc9gcYNWQzEGzc",
  "key16": "2wRigcNqsY43sjJkjfw7MSVVjcJgBbmqkkoE9buaptxbEyDw7CujpHk5TVAZi7BgyYKDoX6u7W3Tr1AJjE2Vyt7j",
  "key17": "rs3to6tGeDSmdnepo5NTifPEbJcMDG9ERZvCTusTy8EwQk7bresuox3u9g1spBoaisSwRLxkLA8uAuBsSkd6FY6",
  "key18": "3QxJHrsiMT4si5bXDxaeuZi2yQ6R77fsDB9sCugXjE5Qm3T2TgvV4dt1wBjQNuLasMbXc9dbdbRsuTFvaceobFtL",
  "key19": "5gVV62wXniUtdDc8z7k5bwGjhp9mP8h12vuLLJLdg6by2wBdgswF581TUguaHeupn8HgueR7dSLRjqThkWDMXQkq",
  "key20": "3qkupoW9dhjmWd4EkrWzBXhTxLKaV67uWzsLCHAM329rv4z56L14Hsxy3xZL8ikTbyPgGhC4zZPU4mKiSRmjqBLY",
  "key21": "3YzhRTGwadrxNsndCBoMY5wGZ8sw3naxReUcVsrKHh9d1G4ermiKqWd7twXa2ag3z5GkhJwDDqcpdehB7E6TvjAN",
  "key22": "Fis9XHekDKVv2joxjLT8U3Hy8Cxs9uiqEfiT2cvFS2Yic8DrnE6kAGA6shKeaZH2YuaaKqw3XbrNSwRcjsyhtfg",
  "key23": "1axkjMGSSMxyiy9cXcV5fTHup82rBtSRNpNpTYZ9pDCBWc9jQk1V1MyaGKiVJdKAHsDUmkjYd5YtBLMRXeHAUuw",
  "key24": "5LC9dgKV498XdPLC6B1VK5aqTbtFRdpxN6GAVuPqjLV4ng6THxxwJLQvhi5jzzPikXsodBi6rrvt2nLF87vby1j1",
  "key25": "51bDo5Z6MUFygvTDJxC8qn7hrdRkdTCipUAoNVfJGksuTJ5JzHqs3Ymk5cNnSmfk8LogSkkFruE6q1sDzb2NMdLZ",
  "key26": "3khTDSy87jAmYBok3T3HqH8BthV3cfZobb7owxFCjE5tqb5GCE3xrw56xZw37LB6YTLMtQtcmj4wrui7pwNJvBas",
  "key27": "3iGMSo8pr8r2ZazEoe48J4cPLakJekd9NyN69Kdapkzo7vacWXaYUrYLDCXoV95eSUPU5ki3age2yFZMEi1sYzKK",
  "key28": "5KikyMAez3sSeP6H4Tpo92xghhsM9LjdYHbr4Gmc57jcotXnuLu3tWqn4hcseM4GXrPKz6WMF2piS9ZbHe9ZpnxQ",
  "key29": "bHGpjsLWcmJhutDyByyEdnUv1GVnp8tP2do6T6JNB1B1eeFCFouLm1q8DfszvLB1vXdg9zB3VQhUFjk5xPsqUE6",
  "key30": "5cPY1ThjyaUbHFTutUsKYD63kFFQrKDJ42v4jTDfqhAhPUPz8vqSsTC2oqLAgnWBzjiov4uQZsmydxeESujUYkcz",
  "key31": "2FfXyRx9mQkydhgPFxoFyoviJsKWrV2pg66UpVGQ5VdfZebr6NzrpQ4yTWcWkKfM2d4mp1qQD2hwy8RjAP9DRKWH",
  "key32": "4xvVjqs6AMur1Uqcqr3k5E8KjhsnkNnrUSoKb39ZkBiUJajLzF5Uqg1kVBrpd9Pxy9bMxsr8V1r2doqZoNtdhHWV",
  "key33": "3H5rSML7mPpECumwiCYuu8BwQZovCKAfc8EvTURCpXQA4qKmTBB8pnXhsz6qhbdmsypChGYVHDXWkTE7hmq2fqyB",
  "key34": "3sHxS328YaAJF5VnyAWj1mrRY2kM4BYu6WaRkkkhxTHsCkBQtPUuxZBP4a3iqddb5Zav76qyqsmo19UGwznzsk99",
  "key35": "33iBpQ8zj9256AZhSytT5BVCPx1ncQsmbUUJtwvvvrz7K7uVo3V9YRBe1UpKbaaZU9rA1SVq8kYZgfTNms2DvfiT",
  "key36": "5dK157CcZMf9pyUHjZS2EEkiPngWPmxRPszxXYtuZF3cSz6AW3XcbGEEKt7WsvtTWqn3H3D3d85aZovN7hpNWV8u",
  "key37": "aFuuJ28gAvQmDTVMft98ooW1R8F2rxHrr8UpQChiJ6oHR9QFZypEcWe5WPr2m55Pn7g5cWXcmDAuu7v6RJdNi1d",
  "key38": "3iYMEWPZ9RPjjgFjmW8NeH7StuFq8RBrGWbXWosChdTHzbDmKfHLVU7ZJZE1E3FLj2PNB3EonppUPVKqrSHSM9Vr",
  "key39": "51e4VgoYoqUAyGqVENZA8582sJSmVXTqM6V3AS2MiYgNkGqq3QjmVjciB74hAmGX2T6yuLFCquzBGPvZK67qAiTn",
  "key40": "KXsgGHKNSaBFWkB3vkbH39LiMbzUiuoWUx9UpMaP5goiZAo6bSizoNk8FVe731GmqPjcixx9F61AgazdjAxGWn5",
  "key41": "22WLwDNXyk5LSp5Mw6XiFsNTRP8oE23aFrrMGnej9kSjhGJkK73hUvMU8TcjBVqgwkaBDeVozGQgNpyet535bwNx",
  "key42": "3i5pV8KDnUvUTXmvLas6XRBydJecv9Ekt7jJaVLJCVv9rxaSgvkL8dE7Zx4tFRr4qBntrJnVLTezeu6C4ERHxrfM"
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
