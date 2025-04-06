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
    "5a8YRG9fZ1q3tZpmxEE2eNWLz9LyaZV2Vdsfmgt7ZGm9rkHo7ApB9MoZJJY4wrKy7wc63r8Wz2vCLSHh6zfVAweQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oNVKNaxzQTk7Voo8YLSvJsNmynSn9Dv68GUYvPjv4SdSvJk4WwDwfCGxAaM77rNymvE2xMncmN5nKnvGz1Pp2P6",
  "key1": "2dayfyMJQTw24X5UpDqHVA7FQdM9aCsqZrD5PvqwGqndHs4osFvyZz6wtEaQmjecutKoqomAiVNN7fMmNxTVvsMM",
  "key2": "2CowePFXHBZatXzid6AKegDeE7uJVzES2GmwStBn1WNvRqdqWNaBhUZdfapgHBxVCbMvd81NDbBjLKiMmfGyDaFb",
  "key3": "3g9Cae5dsdYRnfSaEFErqGgZP5B1LmsJZYqAfQDPbxJgpzBcseuMCu5ePkZe8f13kRoPHSG52jMCTem4dfNCy32i",
  "key4": "4VXUJuzgHBSGXWSmkfr9PiScaHJrED77NKZJNvy19v3z4WXdub11efWdsFafegq4tBRPFTz4A3ngJ2V5v3gkPRxe",
  "key5": "2rBYP8BGZk1KGJcNmC4YCWdnNCHf99FA4rgWDz26dGUoYctt4GBF6CUP8GLQVkdPUge7ZWiEy9z38L1WEmHau19D",
  "key6": "4owRoapQpVAXzMqL4ZD4Bp6q5q9i65ejoVfFE3VWCQtdtkoJ11qJkh4qTdBTmkNNfJdHBX7ueC5LR57cH31JV6b6",
  "key7": "3bD658BBcN9cvGftqKgwaMsCuN2LPJdHz1xLaQSNrTQt53LoAaqcfVJVcHWyTwJmcPbj1eAD3aER6HfgKPiR6vx",
  "key8": "2cdVMUYpeiRtXnwxMhSmDPUAivWxzEc1BCwkFXW1Kxegn6ajmRAxdbdhG7v25Axi4V5J5NQpHzndc4wGSLwB6YGL",
  "key9": "5uvtCUacXBNPiuqq9u1SuKy8EnJ5JntGwPPs2zA1jHqFVpLy4Rk3PPeABBVRt48aHw1qNspnhEVBEWLfca5KTzug",
  "key10": "66pyH8Q55dPaZ3B8iS4W2HKaDCLRVux1pFtWLmjiHeM58d2gVLFjfpeR72nu8wV5zMYJxdhLB6cFUcbquyqxE5hr",
  "key11": "3Y3zxbZt6UQv9SeUAZtGPyRBaahNbWWoeV99S5YYhHd6NKANk5CFayiTEKYELJVsjiPxPtaU5cEiQ6iQpeMn8DbL",
  "key12": "5NnN45KyEVvG9mZ3Wv8TsA3YC3XZT7rJRpjg6HKL8wn4ZRPYaACig7y1azcuwV3iJ5QnrGpuqNb2MoRpFgsLGxR8",
  "key13": "2qPuemKhxnk2PQtr6gbgi1KHEPbepPRGtvU7Nb7fmv4KTAGfpstPotKEc7XVKXeYJBWYXzV4Fb2865dXqSPSF4CH",
  "key14": "warav65igKqEyvHidES2gQpjwDe4GhGMepPbGFEBGBs4qxDvUNfjoT7yjNWht6gztYKkARZAQLiTMaBASu2MHPQ",
  "key15": "J6J5SG27uPP4XSzSWgtbWhEXKGmhR39WunN6BDop7tfiHHqFEmEpgWe154jetef1DoDoB92sKArjf8SRGvTeCmX",
  "key16": "3tm327sJsv4pAREYJJtkmNpxANU8gM3VySJo1a1zs5yZZRFTu6YvZE8fQfPfn5LgNWjJisf5oJRZjYytcmCoaWiF",
  "key17": "UEa92TcNpqE2G5bzicHWuSkbaX4NKDNBPD5zpNsASYNqiJaBsni4NtAPCQJAgvLmHzny7tK2QW3Ara5JEPJBtgx",
  "key18": "2KHQHhsPE7bPibtNSj34GsVPCYuDQ2ZZfN9W87PP3Hc6QVjHzPVgZA1xyGQsRDqaC38e8p4nXq9LM7kkdxmRrkGz",
  "key19": "61sUCHo3cFjbahaPZrosyBnSFNJa8nGFJmkZ8KacS2Yj5iieD5BxN674mouVZmNgYSovuuqFnnsheknJDZMPFdeS",
  "key20": "2bzgWbv1wAJyVBtYCZ9DU25KuzGVSBpRLUc4w3GHxusXixUVJaPAAcu9dChvQ45oH1E8iFkXomoKz1X6rKyaP26v",
  "key21": "2JREaD7Nb993DhzBdFYrrhaAz6JiAyfQv2MDLmFHwrRfv1HGY4bwCjPjkbP6Phm7ZnH1GDkLHqPsAerBqj8H4B2C",
  "key22": "53k5LdeiqRWu2vCbJGnGqcdDed5f6SSq1hoi7HWNqPXWLyVJ6MKFp5q67NfPkgZ6tm4XJDttbUPKnXrcSAgbRWKB",
  "key23": "qD7Ss3nAm9pZDYuvXXswF9Zik49TVALsHuRcrjPbEaYCwxYHnYJHRhzELh5U7PmJVWWw2bR1TQwJkpT22qwW4us",
  "key24": "23ZbHQFhzvXrVujkdvR8YsAvTDCezRjsHz6TQ7t8YnLUqdn9iyghUzsBGwh9sfWmt6eTVf26TBfxSyMzCZfSLjiu",
  "key25": "4wHzVBAtdLnNojbfSQU3Wk7aD15zYf1tZiDzk9Qkc2TyCQCpu3Gb4H9CpLisvaDerCkZzrVy4QLN5it9JdWao9bN",
  "key26": "5GcVkfKeiXKCfStqmT1iNMrY1g9uQnE4uVZwjAfY6jgsYHumuBQZkGjvVirY4mwNF4Qv8jDiHU4YSYJ64ad7WamV",
  "key27": "577iGFkpgbzE6ypvZieRKPTu39ALdhBtfJVHSRmobseYmQEHw6rUaefEb7AaECXQqWUskhurGzD2fe5piDpAnttn",
  "key28": "4n1BqE53W5r6kofCyND6y6EkLeQzMmqSjK3Cq5L7YN1TKgGwhZjT3UQBkdmekS8fhnLHmZ6uZnxxc2H4bypJ9hmn",
  "key29": "3LE6g3LpmBprvxkVMB8oLQkBkVipmd6bDxuiTRCsfVxPVypLtP65cw98doWPaFh4paegpEiqjuUztjZ4ubsPaFCp",
  "key30": "4gjZfj4x8VHnprKQLEpcC5r6pHvYdAwqVHPiJ3itS6anzdDr5fS85dyJmAHJwsksY88nCw9kmhCczdohAvLAbzFe",
  "key31": "5ZmgDJNDWEDXxhZKY1K7vkgaxdMxqXjjQrnDZKpzSyrmHKuh9bSY9oH3afyvnCffRSZUibh7pEXvBE3qeP3rKSX3",
  "key32": "2dYFNcLc4Sgvnb8qGLZFLVCHnBCj4Ppi4SLFh961TdiSN6Fa1eCGxiGbdMVCDMsZQc4VYZmCepWNW8QYtEr4FHDZ",
  "key33": "5PHcEXXFyr4GtWUN5Y7BQqC5oKuu6a3Tg8v3b7HZMFwAXLk35tW2ZSH6jY3yBEtq1p3NHWHWojPL8JjoP4htEXPx",
  "key34": "5sH9fjRjAxDzDFyN6DqwVCEsMbYSNJKaiKFZoNJtNyjsiL3qAo4E3J8hF96fcGK1eG35YtcCvF2pfdcuUGgiLSFd",
  "key35": "XCvjuSh1Fu4Vs3X1sqzRLCb2TJySGjLnkVKBUda1gALsYixVZz8ErcRL5X42YbE8Wvw4vFKigeziAJAibr3RxWw",
  "key36": "49aFmMc2TJCVbUbyuXdBTu143q3aaXTrT3mSiPC7XZx8Av7En46cqdzs8vn6ttvJKSGhBoPPAgh7TiUb9U9nuxWm",
  "key37": "4nCyvDymff9HxUs8uo6RqTHHejdqK7R7J9zeTwyvD15LWFG4TsgKPBkWPwnaDWtw8m4qZxK71nQ5hENvfWmZj1cV",
  "key38": "xGDbewJaaQbg1SH3tvF4h7PPcwyg9wgSknVJonjZGmY9VcTxHkCMKSi16birSkAAcP4GP4bJVb3kAp1PL1nCAWf",
  "key39": "2YYbg8AX5RM1BMpTds6Y2M7zYAY9o634jDHzDaiz1BHgoTk2SchJPZmGBtxwfL8XjAfxpC7dgMX16jqsHDSr2TZn"
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
