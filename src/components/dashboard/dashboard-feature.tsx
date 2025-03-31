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
    "nspw2sKNeen7znv8KYWtrKSAtmSbAhaJCkAvFwCLC3vqLwyzix6xTw6zRXFcfedeh34cmhyoPkNvKAQpFdNqzqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yh8GowKWX1EHvAf9mR5U6rNjE4Apz3P3RpwUfUq3MJnA2cueYZcm9uEVCNPH5DGfjQhHzxoq49GkB6qBAacoEPW",
  "key1": "5YYNyeXq3KxoqENjc7FDZY3BogQfVsUnSbu8MtHtCxsNseDCEQFbbScfBmLbB7Hsk7jGwwENcWamebBvcWHFNrVX",
  "key2": "2NjDztmkX6vsGnznrbsaDoCB9vy35ZJ55wDZMk4EaeMjmxZ4gPYZ1XijBXcmk6khm2WZBP2Tore3ZT9gMoFEx96x",
  "key3": "4wFtF334md1hNEoSb61g7yXe3opjvLxR75LUvnF8ARgUR8Vj2MABtY7FG65gzJXELcc2gFBznL1wExAEDiqgMZcB",
  "key4": "5bUonWQFttkWAmsSXxnryuSQi2vFN5AsuPR3FN4agpdf7MFB1GWiC55QzcV97GEdtJ3Tu8QqNrVdqzHbYGwR6qtH",
  "key5": "5hdmnbMyqGuPwTWoX6N78cBcNJ72r8xn1tdiWwyFEhC5h6YTFGdp6eW2hSf1HgWyjU7cMivmAMKRfFzVHN8C3fBp",
  "key6": "4soChK2eVf5ntnPyrY45ZiQEBB5EpiqE9jr9LB3mEAPX6FCo4nLokTWusMGMxy5HXb2G9GSsWGqcp7DzhMwwb2bx",
  "key7": "5XnWiUziHzR86MM8tSvyGnjGWaAih2XxwLo188xpkkNCRbpLnpsEUVq3yq9jREzqYP5BgyNyw8D2gSS4ynQpS38W",
  "key8": "CBQMcSTcTRykdW6JCgmduEUUXH22ZWiKCKdjmn4yFM4pCXP6RE2NrJuGSx2fHYu8y34dXs3x8WqUBD8opP2RGgR",
  "key9": "5excuQjp8VzaPT2Zvsnt5uFAdhjh1fDSr2Gxj7u2sU8TJvwPPsnSNBNyN3g5SJecbPUkbJNKypfxGf4PXZed8Qmx",
  "key10": "2j9QfVRvhTatEi6T3N9vWUWaAU6SZxEVdZ9jccb7itV9sTeWdwdkWwBL2aV9kmWcB1piDvpdw1xitjmu1je7hexW",
  "key11": "5fredrYEEZJdv8GGuSPvXviWPr6MkbTRtazoPgC1ouyfm2JB4YL1UTLNm3M1GHh9uAqrkrPKSpJHMCgUF7GKbyX1",
  "key12": "2ZnzZG1FYW1HfZ5b7vkrH1JaNauFtHZVGcb6TLdtVyMbGdbWH8Je18nm2g2KEXv5v62Q72cd6mWR5RsXhFXBnHYk",
  "key13": "4GvprQzRVmyfhYBnMBoAdWeppscyPVQ27UJzd97xURnSrFykPgtperQEJudcLCTWC9Hsy3ox67Zn7jJD92Ps8Fd8",
  "key14": "2vFP9Pb2tkJzeFwTF3oEu8oSo5JRjKtjFYE6cNecAGshqgSJHJvusJe5JPZtyjuXqghdF6xtFUGUNiR7SyyBUJyi",
  "key15": "5fkApJDU1qdxQHCrMMqyzbofSzuB3d7cmkPnjsw7Fwxt5Ydsx1bnyG71tFYFue99yH4k8UALW4FYmx2P8ti8nm25",
  "key16": "4PjTfYG4HbZwrjdn69qCWaz8EEoneiaY23ro3awbBKRpasrR2iFnU7C8ghTMEEbuy3wLpZFGPAGJh9Xs5618s5k1",
  "key17": "4uWPFccH1LXMU3c6GKP9SnVE5NTCEpQmxnUuT9g6sWGqL5w4nkor6qqXaSrw7sNnrMmvH9Zb6ZBhpDTmTFtHKWTq",
  "key18": "pwJc2TMV1UuysBDyNjTzRoDxDKUy1i6jdX5FJSYKSWZzj6MxXSD7yfpz5tthNmW383Brt1QWkEJJ5z2hs1Bwn2k",
  "key19": "oZe1SSqarDhehkWpQXZMPJinPJ4wkwNkSDYb9YCtE8LzywBKfT2C5PXQ5zqZ13V672yQTKD1zWpp9uVQPRdEbWE",
  "key20": "4HG2fbWZw1jPdBTYKP2gXBo5MfrqE4Lj9gCw2oKQZfVREympngTvMp524WAGfLDC2vPh1k2e5u9GWe2BsogHZumT",
  "key21": "38dw3aBFKhNGEsaHhZatYHjoZdsxBoPkGBCXhU7CVsBJP4ozcqDprBASYwH9NVrJQQJ3Tvy7q5umPXsydtsBYZYd",
  "key22": "5QabqU4kDgeUiqQxePFYDXwCWKzTbzhd44j8Ai6zWZtojtTN3aEieMQh6PqDu8WKWX1sSKh22YFVVbnCeHZEKG5p",
  "key23": "4qwgPGZxgvrjaPofUuLJx4mMLthdhokohh2trq7HrYWKATwFHzNx9YtMyZUkGB5LtWUpWZistPMBLD4LkbgBFiNN",
  "key24": "2xGUvzCzFWs9yrobnZGvu7n2jhPB48i74XQu2saQAHqeiY3rneVR1knFAD3Qi6PRsrBSzkSs3wXuSUjQUUvun8e2",
  "key25": "gjMWDb3EkzaHAiC5136hArDxo3ZKacLxc2DbMSoRZcRjzp3HTPVWXxNGdqAXrcVgPLtrRZW3WCgoHvmZXp9SwVc",
  "key26": "3cpsbYezLTLHFPc5xeT9kNz147DGZ8iutRNCFhXkq4fR7XH1sjWAaecUbERH3S4VcYiG3hNJtcoS5Np8vwNX6onj",
  "key27": "4UT1TiZmY3NnRcRSrhvfhUrkpp64XNoxRLpaJNgQNLpmY1hmMcJRU1z9r5QTqabU82sJTCKv4NQFB6bgLVivXhZi",
  "key28": "659NXd3ba1uggiZHZUzohamFVap48pvnGDPmTprZWvt5HXd77RhJo5tsVt65yZ3QVvMrXCUJbGbFWhrFEbMckKw1",
  "key29": "4hqTFPsdvT4H1Gh8PkTqRAGgaiypQckr5qUbH9DhnePdE1wSfWgW7FY3rwBGk33uEDx9gC4CvecAFbRrPKaFc9Qu",
  "key30": "42g8VRKNaK4pMt9F6nwAdQyiBirsdv4RvGMX73RsFdSnHRSC7gofXGdvK8sysPfKCT3ignknG937irVisRUiko5z",
  "key31": "3PBphxd9T5pnBULxCdGbmQZLBXwWVThzm28tKcAPcPHK9wtUFMdTzH9u6pDLaa9oGUVK24YS7qt9aGyXcB83vqbn",
  "key32": "5kj6PUud8bFrjTaz19FXnD3Ge7UbWSK2f4agdAxkyWtUSkiCZFSs8195g29t7reBCv3qQJGyXQKtUFYhCf75bfyT",
  "key33": "3jzZ21pyx5yPTS7HjZLBbfYN4vU1EvD3YM8eT137eDBiLX2B6NXpqyR4XQab6rhwBtkdxNYs17FKneV5SpcHCG7Q",
  "key34": "4W8oqN4eoWGbsD16dyjyCSFDcQkXXfxgGwSPyu3XcdxdLT79U77knJ1dDu8ek3KnHTrQxbVkJ31zrGsMGsCCYXeP",
  "key35": "29APFQWurHSWqFX9SDnG7LvkJoFWh2f42PpvrzHHJGu4eL7KyqU86VkhmFk6ksWkB9XA4bj86vNoUcsT4ZaXKGfu",
  "key36": "4BPJ7CPtL9ni23bJagBaa7giiVL8vvVsheXxNNtmzgwWGQEhNct1M5MU3xJ8XsEmqGTJoNQLAgb19CYj6myc9Y76",
  "key37": "yY8sMwfJnEw7vS6Ee1KutXR2SWLqz4w4Ne3i8sgdzsXVJwPzyDra7PYX6XCQjaH8jPg2GD6ZZdr5KRFr2zoPkF1",
  "key38": "6zmQVMmkppZHSLrxGdZv17VEzQEh5Bqfkhruvx279WHGJB5mqpAJBUN4oBeoQtTUDVJE3pWXj84GsFKAmCAzwCm",
  "key39": "36G49y4qaeYWsyqqp6je4fqtocAir52jjHZHmx8yP7qQ3UecfWj41PYoksbq2rEAKAc3X4CcGH6GMQGTFpt1NAde",
  "key40": "3bTLsjxaK6QBDjtiHUZoqb4ctMoJEczWGFE1gmRJUoiLDdC8H85pE5un1SoWtfND66NU7qwEWU4Z9NSpKmSeDAsZ",
  "key41": "5wwGUfZQb4hJqVAaLpw4svwxoccKKMEVnopu4LMhSTNt4M6F2F89tRzsW8kiTNGqyLAoL2SmfTzmAbx6TgZUuY8t",
  "key42": "51GTA9ht2QQkKUPUAngootUTxdVEhCttE9hz8r4SYEbfYMm2vDTZEmyhA7tUWemurxUH8CyE5LNEcK6M6LrotKS1",
  "key43": "5LjKbGsrMwXFBFubLdpWdSS1Qrqc1QBe92u4haY1vWapGDVpwiSx7mh6doYSeTuwcqnDpTFMTD8Dx8MooWwRcRmx",
  "key44": "3f6tLJWePiafy4e6gnMvHFC9KhkZTwKuJiTEnW9UvKwqTEtxim3ZLrNt9pMQytoy7F4rUkxTDQxMS5gM2coynk1Z",
  "key45": "5AiBx9ygMBWwBAQ6DP3sEqqGT685g3TC2DbLLVwB7U1PPF5RxGZKt2PcvjC2k9Z4h8VagraKVTJamaTezkXcCjBT",
  "key46": "2TsssJ6WSrinkqRWD6hY5ET3ABLBrS23TFxVcrAXjGNymGWQMFgJnBq2eZJcNv96NSQ2djv226FfvkuqVfC7Mkt4"
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
