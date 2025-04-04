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
    "JiLDEUPQNdpbcFWY85gbYrMPhE9xKZmjJQrjn1BGqxySugj1jCXkXT1yJLV6viVVeT2xcE5pw43oZbXHinzKjJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58vvaZgX5DDgBtSdcrqnhLKvskubuPHBFFBzR6t32zkavXbzuxiUvRZVdxUZotjZGYktm4aGXL7vsEBqyGuy3ZrD",
  "key1": "2y4WaEN2dgE7H54Cua7HfxUuXXGzsiD5d5cvhA6mqZAK9Vfiq1QpRSF9bSJSDvKJbzQ5S4fJMkMTLoRoUknBGmQe",
  "key2": "5MZvGFq8bK8kxyzsRrDVGjAJuV7hit4pDhUwJ7VG6o8hUyY3xjQwhYwxYLpgXVPZ3csvGxC26HKuJEj3s5ciXYVV",
  "key3": "4qL6ys9MPty5QBvg3vPwEw8MKRMtZ95hxCXGCJ6fEL8BgdBp9eFSUxsLDBaU3Z2rVJ3PmhWr5bKBVEDtfxL4ZRXf",
  "key4": "4iLKEc95tmZ29qhJbbjYLHcVNcuwAZR8ZmfRjaRqNze9AJQDuHvFouXc93bUKNvRo5qyDRjJQEhj3Gs4QmWUP5JB",
  "key5": "2v4mb1EfzQA39JV71hPoxDuJg4Agcb7hUH4eXfWboDGmaQiNWAsTTwvNQypDcHE9eXV5qDPN3Q8AgSnVa5uroVf1",
  "key6": "2jTZhCsh7iQKxKfjRUTYxu3bWNKJsXTRc5hjU8wu9ZP1MhZccXJ4XkBfrUjxRnqc8z7e1sMMqBgFjWFqrYxFiApC",
  "key7": "4UKckSQcfeGmRmZ7LqbkWnyR5faLDtxGAWAqioxM3HVhLE1KZebvxPNKsPemcS2ERDRFe11sd3zGM3GjqfiojjMD",
  "key8": "eT8poD5mU9Se4F11SeX3E2TXoi7QBm6MyRedotu367gTUPzpm3TeVja5PgRTVW15S4FDpQKevxy2t7qjZvB8btX",
  "key9": "5epZo5UbA74v7acTFgachGxZB1CgpNja2FtvM1f2K92TCVYYXSCFUFXSvWQ7z1m2fYjCmNCDnyjUJNw6M3tQjChf",
  "key10": "4LtV7yVMPfTJwsz42nnwuckoYMpoBQbH8hzqYWY5d2iAbGGodtUecn6PVDR55dumkD3DZhk4RgeLvwkE14nxwAVm",
  "key11": "5k9WteBfJfeVfE7vhSDA46tUJauTf91yKKt67cgfbnYBqxG4CMvFdFSiaYxQXrv427JNCwB5CHJft2VkNAXdVrUa",
  "key12": "3Ru76z1i84YDuWZSGYYrsBsiy8H89zmW3G5v9Zkq3aKFjgkcQZdwRHnud2iWdFFAmDw48e4zRyb28ESFrnTovAxh",
  "key13": "2vDK7Cwbn6XZ5mYjw44FP53njXW5mFD12aixsyA7eYfegHMDcTSVtMVvnS791Eg2sSnhzRppEvjiVpnNFFjD212P",
  "key14": "5deweEqKom4X4CvQ36jxrNYHrJYhJdxYfatsLVyjn2hAJ5p5XzKiGfFc1iSF6KQavwgXcfNSUsmgGk1kZpDhMK95",
  "key15": "5djpWu3kh12nhZ5tJiVHiNEqynUtvJwVL4aw6YobSbjtqMtazvbJV6VpmV5AWfzw7hFhhQvokxGUSuEuMD7mTpbn",
  "key16": "3gagt7wKaxKhAQYYPg33vPFVXaqTU1QXH8BDSxGMJphAKqUFRehsGq9mwCWo8verRuoaiLPGQ4tUmotG29gRmh55",
  "key17": "4jcSwzUbLpGH9qgM4pJ2837fF9wxSEnuyu4vYjKEFq8tKkCtzgGLwcnSpkVpqG2QSwNEnGdgGKti1LCZUdVWLFau",
  "key18": "etgNuV542cyqiepqBnFx7hArmP2fBhPpNDJCZxxXjUgbFKUmGusmiWKCn2jqVavfWDvCPNeuMyRU5TMZkLjMXVN",
  "key19": "49ct3o7EeyzP9Cd2vLroE94gj518mwuMwJg4x9BQp7SvqhTFfa4BNKBoR1epVgRtxiB9sSZ4DJzTECrBmiMHWzj6",
  "key20": "4Ed6ebNHFww6kXzRWnzadPk32gYkxoDWFNMdXytSP6QYmy72JEyX15HKYLTodJe4eSv6vSvqNfQyvq9QY14fSNuB",
  "key21": "WCF8L39G97PqdD4WTvVHVZep2sRJkY21LSW1DzLBQxAEibtUXrEnUMCRYiHt8pARHQGNZrrKNiBL2SpsUnDfK85",
  "key22": "wZYTccunoGFpt8wsjaQcshLeXMjWHoJC8MWrXKAnbZAzmR6vtVXembp86QTEAknzmVPVpLNuK54kN3EMdDLwSgt",
  "key23": "5ygeEWZoZdVoe8SvC1p15HojEFoBg8awzMHFysk4VfwjWAwovTi3Z35dt82TGY6xYTzjVcvUMHgrpPbSXzemp1Cr",
  "key24": "ufRiuNLpBfP2JJT652bALcDL7y32dupAvj9sBspmihVJ9sQQmXD75Jp9NXMZgZ4zRpAgpqjydhsynZ6k5RjkFJM",
  "key25": "2Snevg4LuvnMM61tV3WQ5q2GQjmaQaBouQVVTNcuS3MZHHUNwvsqdpv6o9J594WZ1hyRpAuhwHwweehd42wvTTC5",
  "key26": "2LAi65RipKdi8ACvKJwqyZGRBGxXefKwKjDQk56xRjARr6u7y9J9MtPdDB2oQvpvq6TuYnLJ5JPFvuuWgi23wvHf",
  "key27": "3sPdGrUvgsLPXY3xeFsJHCfX6LRjJ6NVQsU8tR8b5DW5gz1U3eE5X5pvEMiNeo5ri2SBJbDATBoxgSJqRkMVCYpG",
  "key28": "12wVswtNAGm95KPs31UgMkD7QHfbLXVdJZZQ3si59pRuUZaa2eKi6nmBhjhjgGVzWwhs7KYxdEx8M4xALfFAsKk",
  "key29": "47hSNcfPSWoHMNQXnRRTKr3f8LiWdJuzWhAtKduTLuceiwRF2LNYzBU2eCoGtTAgPFDsFaXB34X3DUPViNoeX8xE",
  "key30": "4cvBY8HXUrTvdF7NCAT99zipgMQ39n3LuR5ekd7sfyTDsS2UCF845F9CKyKSDN3NhowSdrND97ZmkWLXcwCKRCvx",
  "key31": "4XgrRPbansD3BoBEzz4oDwy4xxe54wpfgzMu2R4cnEEudbd9MQQDP4iYTPg7rdKo7z6NGV3e1qgGzNvNm6afGGqC",
  "key32": "24rHhUcNCFec2eYZkzAGYiMGYhzRxC3mGTMp6zRZqqTgb6PmoCprbfM5CUdxRgWd3kx5gtrbktjeVbVdRa1gyyHj",
  "key33": "2cqGyAwrYEbTWmQaFFP6Syf3wYR5vKumiHdWMFg3Dyx9GnoQwDQkskTkKvAXa5ogzC9LoLMdatj2DmkX6tqv8eCX",
  "key34": "3BmkqzSSbQLfaMx4Ms4H2UZBTWmwWaqwX9sPPTRneFhmqrnk1aP5dpS5CRx5dDerLS6pJG6YJJRwyaoGG9iZ7Pao",
  "key35": "RpHgPNaBK3A2ijrnxabnnm8hv25QmLuGzhWhXjTYiZQWkDtnWA9nuqy1xydLjJTuUonS9b4PBmonfkfiZDhrjWj",
  "key36": "3KsKdnYVepJkp2WzUmt7mcfXv7SMtnSJRzE4TG1ScYoUpSWAaJYmAmwSKQFvzH97F8zZnMvP6PDq9XZRWXTRLWqW",
  "key37": "3SJRiUY1EmTRCf768286ssgCAH3Y3b8ExaxNuxCWeNC5xecCz1cGqvAAWYE9Z458YxwHH1DfxBKRb75PaJvX3yos",
  "key38": "5bP3ch9SrHkqvC6ToLTJ19obBqQDPjMUauWhZBQ4VZUL56mzt4yMonDYtHtgHrpiwNQ1uG3qqWJaUXAs4EuB9Vu9"
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
