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
    "3oJgwZgRpyzNLQtdGjbDwaTdPALwd3VPjcmXojY2i2KFGvFZrYPyVK2M1cHVUy3VbhRLdjso5s8zVE8b41BFmBY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ApjUsifYRfvrPwzmDLecbswVzQ8nmNEYJFgxyNAaxuiZ1ym94RJG3z2zxxLyFsUCvGjFr8daaZ4PCMMGRcy9T7t",
  "key1": "3nykWafr6Xcnu2VQcRuhX1G3YpKAmauzffaVsJ85AcNg4YhAtVnBwNcpEbtcqX4EcoFPaWsBiWjUyWC1nbyGmK8D",
  "key2": "5ThwaU5zZ8CLDyKJukp9dAvDCDzkeBc2ykKNLEzgdqe43F56KWT8y8UjCqfKNjVVp8FBaJA8JugA4W6H1AvYZ8T7",
  "key3": "585W68mvDGQa8ACKJBkC35ZSc71xJhJ2QX3krNdSRa4U9ai1PhHM2WMe2amRpKx9CeQ5zkBZpo5AaFVGeMwi8QVH",
  "key4": "2e5yQNtB2hRk2FNisc1yZSkkdJg63iwKxs11Tm2hegBN87DnoJ53hrSQ9YNacgibMA6qBf4ZpCBAMPMv4nmHChhy",
  "key5": "4hMcYUnazDwntuFDJUrgPdHtJ1siNW3hHVXGV2A8dLfxKWTYQuqxNngShJMrjzbRpvss8RBy511aoPhY2CAVMZ94",
  "key6": "2y3pLYaHf5cEZqq6HTAQxgkppEJJP2RArbpdxRYsJRDueX9iwS8XWaNpzRaEvdEspwmA4JhPTzEuyCZM1qovFHTK",
  "key7": "3g9AZB9KuFErJWx1H1ZyAGixPcvpuJfmfxHrxdZGD6vFB4LNnQwfYsDV3u6GvvWj7hveSaaS75rzqXsnN2pc7uQL",
  "key8": "3DmDHDbZXcFGuhY723QumrWjJ2P7yr5tvX3VVqmR1qhXX6f8M28oqr1eWDJf3c3xEd7EsAxQ5ejLKv61g6w6xywg",
  "key9": "2ZeNZAajAavDfxNZb3grXn123BUZr6QzjX3v5e5bzXeriGcSiTEkXzwyYhafBPmuNn8Fok8Jw92dgSiW9ntmo73v",
  "key10": "4QHKVEbrLEq4wESwnG86xZ1Li9jwBR83QzJoTmQihJf86WbAfccYfyKHERULWKcUX1bxL2wLjnJ1hRAu7CTjJNAi",
  "key11": "3DRVMEMZF7zRcTQ99qysvkqvue57ZH5kPTpcCvFwDreYFqun2ER8QfHHqXxJ4NPirmdRSTp7BygxWQ7jK65X47t9",
  "key12": "2scejHby73m7oMseLUQErW5HawPuvhksgkesqjcY6HGGUuXZspRsw5uBDLxLk5m1wXuou4nbzcqmcyok4GueALaN",
  "key13": "4ys3TpQg7MFmPZzzHsKqokZEP7FNEjGZcbYe4HZtvFsdjLTmEU1fStb1u8i7ukqgwDWSirVYuinRLm5yw2CThoN6",
  "key14": "hPvJQXAsYuegnUQuLoYn1UBqX9EpaFxn9eqPvgc59Hfjwzo6SgfqQsP16RaxtrbcErYBYMaWNhqqRbtvQ4Eqbbf",
  "key15": "4zCXW8ZnRKNwp4Tr4vxCu8Kdr75FGpAhCUVdFD6U6cMJEur8UuKHaJzJ8Wt4z56RbRgBuhmDhv1DbMUJ4YmELByK",
  "key16": "3EwcaCnxrmj7jqHFkjv2BEVtEZJfkyYGijuWzRcShYURZiMkqjwjEbZu2vyo8FcpyaeWERpkCKxBmGJZecQfZw4P",
  "key17": "3TR58Kx94LGUXHxB3GbTuMJunQJ1w4qDddDPtRUNjNsmtWQJdinCBnMfjAQX3FqSRy1pAWM5ZFYkngC3FrCznrrJ",
  "key18": "48E6NRs36A6W1dBAC2re1jDbHEF3MeNRmFQQ2uk759KQ61bvTWCQuN67YKNp978JkgfAaQUZeUwZgCq16My44uoB",
  "key19": "2ajLFjEoVDvGaZCCQSEyVpUE88XB4MM1nffkPaSokx5Aj2ENy7Sr8yhSWkM4gu3Y6gE4GezwAKZNtgcPEsihtFpo",
  "key20": "5qj82j6jojvrCoDJ6sHSX4Pdvt1fJMDKpUhxdF1HzABhgp9ndJDjTPRaUz9fQZfY8SnjYwoFEECkfF6tU3rCPGA3",
  "key21": "46QUiA17UyD1qLyNub7VZ4bdwjJbpsbkba44RUYkzdDeKZv6PkMt8ETVJTmWSXj67NwHhEnfTAxXNZkdhhkTxje3",
  "key22": "2d5d4x72BvssPuyN1fogn4ur6RQD6VJ3H74NR9N5Rd2P3HdKNAAPpBSqaQMEGH6C9ymqUs32TzcvU8PPFoxLXqEB",
  "key23": "3xGZEYLxiQ3Hkf2iHs7uCEPZNikti2ZwZJCyj2ZDebv5LSnnY4SunwvCeE4NyLn6VGoe24kSp8UaiWvmVEmwArNU",
  "key24": "4k2SWrMVcMbjyDPeCqEG1U7qkpoNcT79SEX374oFNQdKmQtTuVehAfSKNxLrSEuPGG1TZNfqhyM1vXVXwHHicrb4",
  "key25": "54WoPyse7dbBiqpEBcNSJ1wKQpuhKbfmKwMGmdwrijDuP3jvy5gTBy1EwocV5Tvwbf8EumQrvDUnhQUVLt3DJeHA",
  "key26": "QEx2CCtaVNURhEswtT5Q8m9bySTMHxM43GfY7xkH98dKSMwHMtUbGuwvbdskCisFEnkvdUxFi4U3JjT8if4WsBY",
  "key27": "2dPvBdD5XQmDK46Y2GHB4KpkUAuYyWpZkz8Nt66xdQB35N67YSSk8XRT4jB6FA3tSumEdLmfQAgPEV47ZubM16zS",
  "key28": "48UuG71Nvb3TjGCsFUGRQJahE6Dy6qiFotzyiHU16rMxmzCv7J3HcymMMuD12czjUhKdW63dWSfTSg5wwVvN2YtV",
  "key29": "2WTpcWoxC4oDfZe3bL6tMKLya2YyEimX7V2Nh2wK9FuZLNWUtrrpeHKJGeWJ9GFKnBGqamQBKmjDWr7Fd1MNAnu6",
  "key30": "4orcGT5RMx5eSy9itdgF7CYwPM1orD4z9FHHa1pg69PqnNzXsxJx217orQp7qjM6SS5x12EtVRPHoL4XgdBq1cJd",
  "key31": "2LGvZfCXHWvhPEcYgA69WPJnLPNR2kFoWaJgJSWjQUKS3pDPWW44c7PewC9PoQ4X7ZdinYesskNymuDTgCJRfLdL",
  "key32": "2tS4WorNLKqXTiCg1VLMUzqzz9aq7o8JApoR6UkhJWXtEpkZCXf5XXwchESvJCMDuoD28cCHvtb582NWqWRh8mGQ",
  "key33": "3do22HENa6NQHNdwXoNZHXPJWXMBAX7aFEc1AugXDAwvjDaKa7wnYEVDBTEp7Db1HhKZomJ7AtRJUjBAvDwUrM4F",
  "key34": "2iM9FvaskHwgWejH41Kodkuq4PrvQxqw5ATPLwPv7v49YxL3abaRWRCmVAS4mjEhV1n3oVMZh3LJHeNY1YPLyjYq",
  "key35": "65GdxqxjbteAfRmLYMRngfPV2sRPYGhKuAZnaCiskzjxWJLNNKrzRaXsLSUSU5phqAN7B3Gw5JSbBxcFL7a8hDiS",
  "key36": "2v1efzzjMLerramUzBnFjDr1DdzfCnib86god8LQr5tys61dr3X7P38jmGWqZ9ZmRaKbH7Xoa2hNY3bdyaQr7THd",
  "key37": "3rYritvc3bAbXgGfJXK1Xqv3yjusKPkQJVXd9VBKA9yYUvcGM6o3RkKGDArjT5fsyJ3zPWBSuDdabqQoVqKsMYHS",
  "key38": "5WCQ3ji6QHgSwpHCjn5w9wW65FmvUFstqMXBEnGenah8DsmHHvQguYKaZXfR4fan14s9CPXNL4dq7DVhfve2u7VP",
  "key39": "3Nm27QHnAgowFvVaSqqZ9ZgeKm58gEmDtoaT1iH9EH51pBeKKkt6wCnSDwVWni1SxF9nGKyV7zdfFWviJ48TsU5h",
  "key40": "QQX5V4iGx7qEKzVVQY3kjNg6XZLvGbemeyvHowgNU3fe69PKUMqePKvJF6S7AUjZ6UToXWWnfS9we78RW7XndAg",
  "key41": "63s3K8Wr1nVjapKHWocRhrmfNr5vEs53ngZDdgUeQRtG6fiSQ3pBGVaxMv2pzrCzfuMfLww8UiSAb6TFgZpuL6us"
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
