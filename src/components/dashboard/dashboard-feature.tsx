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
    "4pae9HXCU5WbHiq4W5HjRd2fT2XzvGTauiRxmCeznhaSx5VqECh6CcmxsWmpfnqaq4PmLyo9Nioycqv8sD9TkxbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zuiY5x8pdcbLF3HWjSHUSjYXweZhq3bKpYAwrjVPPJuJ9GGUH16qzv9vuXr7T5XUDghHwGU64Q7Hmpwfv9zWsnF",
  "key1": "4aNzQNF2trwe8u8zzDHMJym2LaE9D3taHugnkx5HqfsXdp1VpCTrkqEyVD4ERRDnKEmTia5rmxT4LfneBvw2s3sx",
  "key2": "2NThAKsknjaJMJPmB5BapZRH3rRJ4iJAXrKqPEK3i3NLkxovQtywAMwbg8of8DCjjkGgWioiwz4MrXTcYJ9FSLTo",
  "key3": "2gfMsmNcp2rPULvB2F1dJpT9s1moa1Uk5hjv28cvjBoVbc4SQyVjTVBNQggWAjQV84bZo6gedwQczL9ehdLzUCSa",
  "key4": "2UFT7nyaYpguiuk8N8j4K1usR7gmdMTHeMCy9Vrw2UwAWMMrtncB5Scc5VxdL5ZqDEU99M5Wsrx2nDLABv71WbNm",
  "key5": "3ghedYCyvRiYpq867WkMUcn5rGnmnwo8rnzVvRt1mpGR2vW14tvpivSfx5DcEFPuX1T8FrxXqNwmXE9cYT2PNfKM",
  "key6": "nAi6hsSrtweeghtb8UcBojckQpNcry1qdDTuvc6V9xhfp2cgoCT32hbRpKqnTqMyLUL1gsrP97dvVAmirpnZnns",
  "key7": "EmryknNiiAcZ5s1ejQs9Y3BcL7EbUYYLfm8S8En3SnzD7WLspM4EPrKZeF4gdhSc6EexgQB9r1RrvimY6dUvMaA",
  "key8": "1itty5rhCvveuKfi4TuzAs1DfrgMo86vbewxKXNZgDXjvMCkgLc59F9eoxT5zAVF9Y4N7abnLJ8Cp2APivcZoxu",
  "key9": "5dgxPZo8cZb7grcN1qkCe5cTkWS18tc7X74gT4sj37MXFtzNZMDDGAM8qikULkcE7zduUuip6Fr6R6ojbHg9xL9A",
  "key10": "58FQamJN8McD9SH88aJqbFJLNGVveuRjqEgjPLnf7gt9BoBVNmt19pcgGt1yfkknrdvARgXLYHNutausVU9RgpdG",
  "key11": "5rYq3WmKPnTXiZWoDUwRrda5aAV8zAvgXW35KE9D8eqx4f1dDcqh7Rz5XJW6ncrCNGUY35zZmtkW2KR4dxN1M6cq",
  "key12": "4iAVbmvivdYcy3SmuCphhi3GrnSCKMZ5aFjtgvN4wTY728Lq9MeKKy7iHRnZV3Bv7Rs6M9tRZzqoRXMC6yEsKDdg",
  "key13": "3x33VoMsp3AQWGkuTuGfScJcbAjKwKoEiC4Q2VrKdqXyDs1nDfxCfDUsoahKjeSXao8trtd5bn815LVHosjJXjpB",
  "key14": "4dYN5YV6me2iW6WaiXktY816RzwAUdiwTeDbovZt9pHpb9ikJe99sZUmGAExLqCGkpgnDi5BXCEVaE5khC8c8PHc",
  "key15": "s8zWxv8A93mGS4jWX32dKkQEykdk9UX6w8sASRCbnfHhPYK2Aq6qqDtqCQfJUfk7MvLEQmm1FeFvBrfKEQ6Mp1q",
  "key16": "tLMfoM3h31APNgeXFzixMTLzqUU996UxymvrMa6RXptBej9xWpyMaJMfYsHw1e6HmPGeFs5AuHuSZ7vFvwgSZQG",
  "key17": "5rjEfLvqafPkge8w29F9b57MuhjsAe4qN9mJYXvtwVZrNfE7J6oMkK3coTSiiqtRwY4vK8nE8LgpdGGnRYYrxw76",
  "key18": "2GcHuuVNhrtt7QJ5eDMnHraNMWjN5ETZav1YVWTNNnd44bgzjpgRCXw1ypfdTd9dqEbossp2VHnt4JsMnjwsqKKu",
  "key19": "5ZBhhnHeoqzpoXMcfrzaj21fR4cLT9U6LX5RvabEoNaNKm4tqVtgXKCtP6q1av2TQWGNqVhYNRPZHdZ6RZ43mBCd",
  "key20": "5yGa15RwRxcFKcWEAQ7Hk8qPpgwXsx5aCAw2YsV4T2MuBnAuRjKX5Kme4WxYe6rhTDjyiZnxYKZ4hdk5rbwA5AcP",
  "key21": "2Wc9goiaou8eF3Fu46UDhw82TFSrHzjL8gzqwpDvyGfxqfuAzapb1bNSXabWqFdkQEMYKF7xHV2nyLf6tDsnxDrx",
  "key22": "tdAkgVoPF57322J3YiPfj7VQ7LiiiVofNUszYLqhgx8hYGXo5qAf1e9YBL112xQyr62ExGc2DzRHQQNusPks9vL",
  "key23": "4KKJB5pDQdq8UbzLL1xUNVEqZEzj1hwPf4UnwHUcdovbMVRmt5zto6Fta7YJPa8Dh3Hr5y6fKAfSWw2E5vATPLzd",
  "key24": "4W2Af3iJtn8j1p2LheZxUafGjbYtTxycmiLJuDS8qDdZGPQCX3Z8UMHdz56TGD952edH1uK2kZrWdGbsyuJ2BK58",
  "key25": "3gzeXGWeeED9nhPUp35uE18Svr8hdPCYtZSsiWiWTS9GefEH478HEXjRBZV3qB3o8Rc38ZY8hoF6jnXfFDq3r7FB",
  "key26": "2xpnfUK4zXQMz6dZAoKCbXqgkjMwSWCW2gL2eoYhdRatadLeNwu2HKjNzPPrKm8M8rXpHSU9MJ9Zj5gyK4YY2d8a",
  "key27": "56NEuk55DiowmwpXEUUgejfpgtMwrHqre7cepPDSWPakS8oy1G5uyAuTvWPCDuPpmAebptutjMbUN3mw5YZoZyXU",
  "key28": "5nkFknGrc7862eerPYE3Nfpmiuvr2gMbferviz4sL2sz6HTXr7K5xzoeuZTdqP3pUHg1fNdQquWxUDjMwdz4TLxy",
  "key29": "r2d2cDB5sDbya5NQgegWc4NBuqekwNyx4iHtqtGhgXYFuRUDJj3R5ewtVPH5sDZJyjCUs14szFDeuUU6emY2DL5",
  "key30": "58yJPC3myeLW1QMRH3hpSL9pciv8Qz85SYKyaUnFWKBU3HqgkJ5CQH4AB76YgSASDqRQvRTMtuqfUsZWB7Hd19VZ",
  "key31": "24qK4qVUgayBdJzG1Cu3xqUhdVmYkWhce1QHi3eVXYRPAreh4ahGNHTtmoTrygSAk4zYecGoiEw1xhQ2MsCMxRDi",
  "key32": "3SPoT34eBViCWqVq9ptoRq3Y8ZCcdZGAZZkqLHyUUnzrDUcnC2gAUmPzaB4pWxSUY4pzhccmc3AyH4MPYp7maDf6",
  "key33": "22FBUEWrYurhPGfbHYUkHG1p88CPdXWetHAZ1SJbBKUCaPgLNqAkURbSb51VbmbgCj7LaYADuCg9LpHUbSKeMwTp",
  "key34": "3REURa9J11BwiJerPJFVhbaZetJ13BC5o8wRwwJPBp6VaqmSh8crepoH2moKfm3shAMUXcsGDihAnUSrT6d455ZM"
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
