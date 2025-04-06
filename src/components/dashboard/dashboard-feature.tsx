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
    "5EgKbiE8UbmvN32X5N1Vpusv6Qqsp7BFfaYHPuWHbReD9NpTCazC72o4imjsVq1uW5Rrg3ssjhEJ4fqRv41ZQCWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xd2WMdRWU7uYG7go4DMmfiwWzXmVccgrEQeuAnssBJ8pzgyrtgkYQNrMSmHC5FzNnUjNbePaBPVtF6bHJkbsKcM",
  "key1": "5QdFdDS3tSNYncHc8CenCPHjA8oHLDDUwrVA3nMnMfK4EyCg99Vmi5skqwH3nYeoBHuFBtnCvhyy7wp4AwW4sFEB",
  "key2": "38FTogxCQHGuwWhb2R2vyrsSPZi36BH1HttRR2vN5uxNfFG9N7sTRF23wxLYuRt8GXcaecHQc7hFm2h4bAv22XG8",
  "key3": "55qWoVoSCx5q6w9ZuatHowHKBUBXPeM9EUhAhqtVcwEmSBK7jG2DmYTkaePSQ278iLumX9rAQHnGMicciP2a3N7S",
  "key4": "5TbJNL2YnQPB5bztW9RVKV1vYh6F97rzrKLCfZ2ciCa5aBxtHtT8TgqdXuxS9iJrraDGhbxsNkXFExSB93CLERcD",
  "key5": "2JrebJWzBHaPaxXwJsM93C93a7np5EPtJQq9dRad3nQNPjdw731XAFuBXcaqbHyhUdR9wCuhHzkrvCt8TKcvUcTY",
  "key6": "7ZNZq3GYk6DTbSiHuNxJBtvvA1KrMQ21t9na6Wy6oEqfEpS6v2DYtBUgCUA9N7YNawzCm16Vs89hAxNkPztr3bT",
  "key7": "3DAKCYJWfuDXBXXX5w86V1MktKZ7Mbft3t5S1XSusWhSF1Zgbsfck7ygGp5GLZ7pbdnvw3MUE4TazAvfNM56Uo26",
  "key8": "Gd94pCjfeJdZkpm1iX7jcjCHSWaGTyRCmrJuiCH6pKXMrUYH9oVSW5YS35tHe8uxNfTV35vU9WGdUmKqGqFx7mi",
  "key9": "39756FdqVVrR3s6HPXL6qaxytpy1GfxGitNbAKbxxL9xak2TTNxZBFoPddp3XjYqHum5NKwS2dZL1LLkCSip83ms",
  "key10": "2k1EbDX8jtzF2sKsPFu2MZyLqjhqXfJRZJYBSP1kxdScyTZHTa43RjuiTJ71uqoCV31bJVZ2Bm9XgTKfVerxMPUd",
  "key11": "2dyzsc4S6nfT7JeoH4wPpuPqXTZdPpC4abVVZnKXDPb3uZdZ7ampHqeCfSJ6us3Xxxbw8KLPC2WY8QeQt8KiLC6n",
  "key12": "35hUGm7fDGijdPmpstwt96QbAQFMjwYYv91qHdtdoiVyzhqaQ9XkQLwnnB99Dee6P5APGXbWLgFmpRCWvfG1J1G1",
  "key13": "3SFgu6X4Rf9XVzmRK51dtCmWXdbUcPRZgs14FcDQfm1RQXVB9peKmHNERoBzaSVutwPiA25QGqACGR1kNsNzQje2",
  "key14": "hsvqjPfGk7Z3arukFEHGxcjPJbKNnX17fdqmdY3oLEJRkQftFo3Qvo5NbHfMDNoqbWCZKvsLSwg4Wn8Djc1aPfT",
  "key15": "4PQPVd3jXo1HUDhsyeDBLaueTV5DVVLM2sguQBhJJ9t4mSt3Y73AXbDZczeqDmdedvrmhhXS4UnQSvDfBiPhvYZZ",
  "key16": "F2r9wCNemWz8iBqZ2RMWhgeakJLVEkCr6sAmEJxB6VfhE156CsRY4EkpaCRN6FdUkRZGAKkZA5xnfNq7eAz4AvJ",
  "key17": "3zQsCTtwkz9uRn637dr21qt9xrTi985KJuyPHJfCYPgDmMRRDQpt4CRwYUGiFyD3kUcYRMynk8wg3TTZm9xBkGV3",
  "key18": "5U1dAFvRhTmYja1NwPe6NU2QQGdzzpKe3N9VP2iCtpqRmaVbhWGq9nAz1bGdcciivTcbMHAyeG6gnSxCuTtBC8pM",
  "key19": "2vaiqjAS6sbAG2NDnMm4xWRp8LEFNDukXWVAAXq5sUduzFLuvggQgDbmT49ozzJpqfdRgyC75DFxpWqRbwqgPBnk",
  "key20": "5GTsQkQEgsCvKBc2cnf7sob9Y75Yufq16M3tgyWHwcejagWZdFCgGxE3dJb2eHLeG8RndreGhk7Q6qpQ3nJ1mzXY",
  "key21": "3dDMeSZ7iNKgHky3EBfY8xCa5W7V51C6vPBWDUc8Bb4j9Ftede5Ep9rwzJbT4mXcCZH2JVkNC1TnZZYqaczxi78g",
  "key22": "czMTwYhXKqEHa69NjiG1wPpUzcCdzwPxkD8PWpjyXagQxjRACAAheJkTs5X7a93ScSPew4fRV3bXMzuTaER8rPk",
  "key23": "4xhWjWwLiyZog5EvbpybYBAosHQj5MFv6kye1PmCLbG2zPRzAqRXCo7c27JzrdQyjio8MSMJW8nYogch2tDLSEBo",
  "key24": "3UijvtY1PseXEqEHpEF9YmgF27d2P7P71cQLmpF9LL623jVxLNZA1TC2zc5yAkydRUSqEnCm9kVpRLRQCWwEVzNd",
  "key25": "2j8KvpRAGbYRba2QwTi3P2qPfsPMkYhGSiMWYSgF9oMsy8hE6rDv9qQF4BqcRHxwhqqhXm88qzabuTHQV2Aq9dJP",
  "key26": "3FjBnQPo3TMcGUtsvgiurMZuzcNUrpPuMtYtTs2uwY7UHwT99BL6mfR1tT3PiDrKP33vbZTw3VmnDocoipPMhyvk",
  "key27": "3vCKKhXngaZ4kvjfraCZr2yKPWRzkuxGWjGmNz1AAaKg2sTYzUR6kyUZhc3odcVvtPjs8fKiGMwXb1wZZjYfzqVQ",
  "key28": "4vahknUbRU6zw3HtvD8egGRQEumwLmHPCsXK8by3EpYxrXBhjg9EMG3FD3YFCgzjvGJT4qvGPKViBjXKq5SMbWre",
  "key29": "2zpYtH4GgEpZXbN8zAzqvHjfB8gDGnEXnhHLBSc39gSKQZFnqjvuVYRsGymQhmKn3WkhGK6mjwo8fQiSHgKFoXVq",
  "key30": "3BmpvB1qh4RVoJSvf3JhWg37ao3cqvEcmj447iyfBE4BRZDxeK9MPJN1nfP5v89Y2Fu2AcQXrUgF6EdKUmX8AKE",
  "key31": "NPgPNzyZibLeQgP8iuchSgHQgPczqup5YCgMAT5wK5TkM4pELt6wpmB3MoGiPF6ydmpvy815UqqHpLGA2ruCDoJ",
  "key32": "4HmJHVMKXuAtZsmh9s3J9Z7WWojEZmZV4fV3uH7DX4uqnXQ8mgYhXrC4hhpMUBdFACHsdAvqbnZosEHRyrqg1pCC",
  "key33": "ZhkLzHZJgt6xpsKh4SC7XXf27XiWoZshUJdKCSxAArbDMxKXpfFdMo6jy3pSS3FY3gU9Y33fKbPqV9MjQN3Xk6E",
  "key34": "Qg29rK4cSYDEJrCX5KQyWZtY4AnxJ53R4erDefTX6i72nNTrmavb3NTmjvsKDiGBwAron1bfrPwYPZVZb3997p2",
  "key35": "5K9DaGuuwos4scN9Wpc1ktBUJamaBqyF6htHsWBZi6JLUWS38jjvP3s2tPnLtprQikD9bTHGmR5vjm4xViGZgud8",
  "key36": "5BRVhCPnc9PaUHyrvGKmtf2b3FYmVN3peu37fQFwJJqtw5wpSShrBucocjQxdUuDXUGfmVBNhpPkk776tKfFHUT3",
  "key37": "3xbaFotxs6Kg8DvQ6tHEwYYNPofgTUJptgKRW9kp9MFd19S6GVA69XwWRZhgK9wK5XHjCR6QEXULnBi2Z592jxBp",
  "key38": "3Bz6sxq3QeDi5WuRF6DNmdLAcP4JTQcaXf1ommVUxEmiweVsdmtRAexH4uKLvs5yuVNiSxbx5CWKcsiX6Ud4CxsW",
  "key39": "zECPTWVPVFyQWvN9arrmRAe7A6MkEVgDVRptafigu8fwLUyBmP4NnsuVPm1N9AScccEQ78Yec6XV4SQPz5NvzNL",
  "key40": "fLrLbhXrkK8uTP5Ems8wM3VGy4tCa51kwAdFsFay25KKZe3VMRaZ8aoVwyhDUPCKQYHGtEAJij89MfsGhKJ4ntJ",
  "key41": "2UHxRjEn1ZRhH6vBndXFXF6pkivER9wCnKTBXYPhfSMYrqmnHm1VuaaQ124xNwKtWoaUBbTNK5BhwxdHfjKrAfJs",
  "key42": "62wF8LdfYc2eE6Jtn2StF6RXz8umR6VbpHHDDtDS2uqmrdCyB2QyMTUDhhP6PuDR4SQbZCNsjerb8fYG6ezhD5zn"
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
