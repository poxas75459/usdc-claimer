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
    "3x1XVryW9scHiAiHyTKFawqb2opwPx3mX7Ln4pMsYdWuBWwM88nTHxwr9x66mxa5emS44NwQBSm2ub8Au7wXstd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwLkGZ5nnBLqVHPye9hjppRrhoBVANVdFzpKittysAkPDWk3gj5kd56X5iiSLdqcuQLScLPaFsmASVaLaAVSWQ8",
  "key1": "4BRzcwPREZScz6CaoMtGWpwQW3dvG1L3ZZvDcfwcgUWGRnz22XFGwUzEdcLpFiG1iZkBkYYGHKGna9ojeFGW4cnk",
  "key2": "2fKjm5yKwpcfnoci32jHhEFwc2FkxqfLGvcgsw5mBYRxHBhz9stiCqhpka6K4A4JgTBYnP2zjAjoMXAfEuTxW5qY",
  "key3": "RzQDTU32tofWw8GDRCH8PgJYVLLSbNrurqTw4TEVfLv944w93LPQHR7SsgkyEVr4Uad8ng4ahVYr7CNt8MHGoks",
  "key4": "3XsznY7rahT21bL7aWuLeAe92Vmc5KM472EqAqWPxdL1B4r7UgYfPjn86iPXSejbwzVxAUviABcvJTS2bUt6jXbU",
  "key5": "3GYd57UUGkc7d9tS2PETd7XnwX6gBfLhG529W7u83oKhVw5pC9DqHrFMxpXpKAYS3zqND3Y97UVkDpEf3GkKNghC",
  "key6": "5vVrD3u3fQ6nJiCR1ruDiWkpMjeBHjts2gZPUAcAZfmFcxUmoUMjo1CfMsFeYdm579tXTMDLZXbY9SDZkv1qF5Je",
  "key7": "4MxkZMmpEriU7FcpaT7TsrbafpfhyUoJRxpvBLGRqerU3A2FcxdG7yyPqMP4U9qBCzd4T21KR8mvjBzcK1P3SztW",
  "key8": "3ESXzTuH5eAS2KQRPuCFMqDY5YA6R6HgQ2V2qkRaXvpVdQ8FVGXzhrRYwsyQpCDGuyjktaemyXhc2F7Gb5Gn5nB1",
  "key9": "643mF1UvM9VRpqywtQHZdTXYVGC5jrUHhzqa93AX7shyc8sLSC1xyCjGJeJXCbA5rPikS4R1xRkEMs5vRsNSEaem",
  "key10": "5QVgSH6nYmx1UHc2KMQ8GnEq6rH99RadCzg6rVY4MwwFfTzaDReQ3oyuQm9QWxQJKmw997eDebFbJMbRRkuntZpz",
  "key11": "4e4aAyEhMAiPPr14HdPzEJMYJ8GkLczWUgfm96xXvLA8LziQXcpVgz3E6ivXJgf1jfmduoVf8JywCqZCs6bW294R",
  "key12": "4nDu55NdC7TifJoep6W7vJRuTyyW5sWfKUwnH5WfDQXkTr1GiAhxU7AuAoXXp8L4EcbkMxrp5avFwPRLjg5HxYuY",
  "key13": "31imRuj96DheoNkN9SwLg9mNJ4Ykxs5XT5ZwKiujMpMF82LYBQWmnqPYXQz8LXmvc7Ar89kAKC9d3jgrjRQMnjhh",
  "key14": "62ZcHFai8uuRB4sC3fvtCTKWAr7j148fN3FNPhfHA6SA5qHh5A42TZpVRAaPpbRvXszRDfj3ktW5dje68uP5Tp6u",
  "key15": "Z24mF5Cex6Y9VrTwcKeXECtVFnCNBmAPiFseP3NuogsFXfsrFyQTMejK3HY1BUvWsHvTf88tckjmEp4tQdE2X9u",
  "key16": "MiQcUQLgKvn3gfPvqnPdUJYgCfA42yY9NUx4T21PdVt1hMhzqjQrePF7tKZRFKcHApBXaBX9PzJ56Pf9tqWAXgC",
  "key17": "5ezGVxaJFRdsvN5RZgtkxn7KKdT3QfwJjoYMW9hU6bF8GqDMzX6sJq1PpR9kbtKdWt2FqETJ35Xyc2YSjt3MyPuC",
  "key18": "25SQ9D6rgM4xGVGS4mESyevbUHEca2x1nsp6D3hMk1ZhFtrupwJnDSsrf5hjUxgxFnJ3s3aBChFo3yLNqiYnQEBM",
  "key19": "3fVYFcu9RHjN7ymUw4rnhUprVThf3j2hJWPKYd9VcsEpxhojGe5nW47xfpJeYefDsQPrs3R71nPDso8ySMjJpceo",
  "key20": "3v9NB7fgkehBJJ6sHYx8SZSTuUSgHic8BNkKWTy1k24hqCJe9i5qmgp6RzEYqqzwFDAFPa8dtPnzW54YQb1evtmh",
  "key21": "34SEzzp3Jwi3dGyz6JeGFowT57a2kBaT4Fzi6BBG4N2qwRPgC5JECcgT4B4uYz91iqBk9obrS7Kug17KQ9TLKgv6",
  "key22": "c6Z34LAHAZeWR2Qonwa2Hyqsp3dhbbY6LKJhEmqDny6BUAzXfYDVQVJMgQYCe62WTyGaNM9oy8zUduHNLeoKYEU",
  "key23": "2aCfYVH98gyPBXSXsfBD1u65GNovD8B9WRAHxL8CGMJfV3tiMxX4nqfQPhsM4g3cyT66eoejpZLR21HBi5uCwYYp",
  "key24": "21K5QRPmCPyTt6opfMxSSxxz81EiNhGFVhvLFnQpxBu8Ek8JN1r42MxsCSkZTRSTS3ReMChrVLVoFrunH7pK8TSL",
  "key25": "3tHyRV7igZVicgV6h2DHusCojRui9heU8ABeCGAfKNYJ16VBSzysMrNWn9UZmzUBosZigyPsEwbSnKc1Hi4uBFQU",
  "key26": "3M2euPsAR6nVgKbu7g6GxT2nwJNMu5BZch3TdqRtL69vQ484AkLPy6FWKSxd6tfejGRkHMaG1RHfcHtMqENzyXKb",
  "key27": "5WrB6UdzxvT89hwnavcDFcKNE7fCBbES3NntLvwenEQTk7w4cj6Fm3RRYn7RXHHRN5A6bNqQTW1PpRXZdugSB4qm",
  "key28": "3XgXZcEUv3D6yuoy62PAZkYgHCLnLVzmq5YXfSYtfyaY6sFwXjjnPe4tZSyiLF1bNURFUqe4jMFkJ9caVsmYJNsv",
  "key29": "61J6UA1MbzsNdsJhH9CakLbzFBcopfSj2w4t6gokLhbFo3xc8MLJcNwVTntvBypFMXriQuFgCWuZU2k2Xm3gqdTb",
  "key30": "3b4H6pb1LQdNyNbaCUw5kRscBDRgY1F66bmiLBryqkeeWMw7caGiPWkhJenkB62txCLBVnN5xU6Mwbox5piRXiti",
  "key31": "4vqgQcHs1oxk3XVm6FaSNFhNUSeBFtKcBheW6mdDeFxWJuDJzpxi8kw5WrT9ao5SP351RLrUCPcvWd3dpKj9rNRP",
  "key32": "7rfUB9KiKoKL7FTWLvdPi7bzWAP1LNvWwxZtUbnZwaQpzpfNzxxQFji14nAnYHwUaLTJtEtyUz8QGqKMAaph4rM",
  "key33": "4NNWFzo5eXX7JoRP8fp7ARTzKXmouHWiooZzDcHEmNqVQku65GTuWVQhxdttxFhXMxmoq9ihg3wXbi6zQCiEj4fd",
  "key34": "2jjzEYoN7eiE1WkGJ4DzQeYHC2z2Lv3NPS8ti2iPLTa7prZykV3kcTEe5T7D3HvgXtAqFZaTq6AQEfaW2gZhWX3C",
  "key35": "gDKVvA1kteczemJiDk9tDBJZ4LdDN4dXtFSvqchcVCWiZ5BBnyQcyXbchu4pxfM8kTYnAKNcgDrCZ2B4vrAJnz3",
  "key36": "4uq9kxnQxccYSpi9F2eUfdQnuFiZ5DxSKfmmtMvHGcBnTKnD9HQKWn6oiW4jYwtwXvEmgtNvGX3NXT2xJR75G8wC",
  "key37": "2pwzjpEGtgzFRqnGgggkaN2BjGSu4KJdMiu1pUXLyprtkGFBqhFoziTwH8uRG5VJKEqAcnxHeCS76fRoZWR3Y7jd",
  "key38": "3LAcWXBdjCFxLHW5vpe2Xb6NB7eJYphYBPBT33Hx86ZR1KHhptnFaM6VHRsTSc1vX8Efa1UDpJk68CbFTMaX9Xoz",
  "key39": "2kJL3H35yH6S3wnZB2kiHypcehhhvL4UByhkFJVuaNRW7E4jHx7xG5HtsDsHrADeFR4qKV14a4qXv1b97anTsnip",
  "key40": "5QuApjf5GPLGpkszBBiUReW2i8vyEPYQHB7XNxwdj5HrtZudb6eDzCTTPqMxXEYayKsyW5UgRAPC3EdHritog1D4",
  "key41": "4NfdtEbm6QT8dA61q4iKRW7nSuqqp2RhXUQ9LCDpgWtnFzmcFpZLcbpTRU4wYgBcsedu5QgzUjAz3K1MCpek39pb",
  "key42": "iyywuoXANbzoyndary79fNJoexNa1mp4gKMaxH8C8rhkipr3hMbp1aZJhLhivAVeHU1QEcen2uHcZ8W1p3SxvwG",
  "key43": "3F8tm6umbFKUZ1kVw4ht8o6SFfcJCBJ3p8ohZfxdAepyUR8F3jX2uGrBPj25qFYaUZxwHaAKNM1HHto9JW5BAdno",
  "key44": "2zRvdwdvHf3HvuDx8zmocjffpveD5fcA639JnsDbGJ9kmHrTLFyEP2795g2VJk59dQo9g7q4tW833Rxmvch3bahs",
  "key45": "29upr1ct73qVgvBshA9tPd6R7X6RDgHekGZ98DzQFAFKqMdhwA631Bux3oB98DDVTvpB6yzimQD6QuTyzLrSF7di",
  "key46": "51c2AUbRcn5quvyJCMerAeA3pdLLaY1HTSNWD8p4ryjSgQGiae9JP9vph3bP216Mp566RiEkWHKGjK1ZGSQXJVg7",
  "key47": "3bES2M84zjaPJ8dPE6oVTJRaAxiezw4KH7kfZxsnycjfi72NwTAc47b5EAzbztobFs6hoyMyrjemSzaXXo5bBQgj",
  "key48": "5Q1YJzcBnBmANRMWi6ou68KPkXJRY5RauctDPPrrq1bTa4kLQqqT3NYdAKDCuVqpGva4p6epii2TiRbdEkKSrNGc"
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
