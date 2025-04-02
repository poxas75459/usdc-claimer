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
    "4ahvnwAvr3ZeuLQJVzRwU4YM3qpcimGrWYjtNQrsoiTBFuFG241WvLNHg1Q6GWxHBk2xuJSGgqrK7UAXNqSdpLuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fsPtitMTBmk4KRj6vEmVCk3nKZ29fS69bphQJT2xEtBGM7QcTwdtDVF4f7NaJXfxsQX1kL2Nvmxf2ud2xgw2zJF",
  "key1": "25fHLDRnaSmjxG4Eb5qtNXQMBtrgVzVeuR9BuknmBsNos5qPN3RNduB6DQBGVCJFk72djngxRjA9ZSfHJ3jeFr46",
  "key2": "2TvpfyGm5iP5bcH8jJfcyH82p2kYrzcjSbDmR2xVSUpGtarWoR8JiyESZHaiyc68MfaUrHqWqRgwLw3AQGfBtgrM",
  "key3": "2ahbyT8gQb44RTM8CtRnHdXEwAULxtiaRiTweiii7X3dgPPXG4SdNbsNPnTTGtcFYxuFyftSo7YF2Doa822eyQ3r",
  "key4": "2ATFcRw9GvxU8pnWwWWGP3LwDCFp63wkJpkT4DvqtxuUwEQCcWVJQTsq4Pu2SwSCJf1FGekEsQvoZ2CrQhW2g21H",
  "key5": "4cMniwmJ46o8UX5WFb7N9txxTVWf6Pea2fhy8b3ZX8tc3AYU3DZcD2EiiiuDSfseidsBPEgMvjSQv3LR3b48zy2p",
  "key6": "4A3ssMcwVnx7B61SSuAnzCVY83s9k3yFkXUvRJ6rEncsmZdkEVKbtg11k2kMeyUEjf2RozhumAihxVmyNgqShLna",
  "key7": "279df2mmjcTTjF4mfze8WngmkCmRmk29L9yBHR1XWYtJDU5h2AmYQCDTFPa1c5G9AZU89zwPs9Yq1Fia12ENK5Fx",
  "key8": "5cdB8gmx1dmehHs4KjFJnMjN4Tx6AWk9awJhEGLdudg31vaAgqmYTkZWUPdLnb1opvc3NF73oX5usmWxrX1z4vF1",
  "key9": "HxBLVUGQFL742mFLM6ANgcERr9Z22prFhypAs635Bk53HAP7Dcat83Dh8UTHYb1RZ2mNpjuaYVNh8szXqAYnCZZ",
  "key10": "63i9J1mxMiz2pvMapnd9QHWJob6cVsRKP9KhFQCPJdB8LrHPeWER8KHF4k9CekoP3DcfHAXovY64gggD6ghH2ith",
  "key11": "3zSpYa5T7WYBs3z1vqmUmZ6aT4V7kjQzcHLef2P5y33YPvanPSVs3hhVXcrydYywfkjVUBXMPTzkvLBf3XxougSM",
  "key12": "5YqjoR5TiuqCCsXNmVj1PrHH6pZZhMBom9sre9PBNUNRki5EuDv8GNDb6KZwFDcjmC9yZJuTuJUUa7TngABYLiXg",
  "key13": "4G5AaGxMexaHhopWApFv5Pe737W5u263dpr4wwGp5X4DjeTqXhfj28bTHoRtokenaYVDLUD8MxUsvjgHyFSTKeLv",
  "key14": "3XhtW7KKSBjhiiUCGWEfve8mezQ5Gb5haQwWynuimbXGq6zo7gSvh7j5bufx7kcTVupRbDZJRjeUsJtsqDZG4knE",
  "key15": "3F24cH6Puu5tAFjeFw1NSvaiUjkJZAsmuo9QfkhEVs3QuK4yjmgM49FeTyw6xahufNGmMzgnqSwckF89cGBY1ZSP",
  "key16": "3ELghgAFmwTcXvfVhcbxqZsJtdhLFfJb8mJFKkA2vEQ8xUgqXhPu43ef7RbVXQL8YQ1P6zoym65PBRuZ9XYjALZo",
  "key17": "5yLmrbSGNHQMEvvm8DV3L7Wi4pJnhPdtR5NDHFmKLaKjxPGRp7hf6sENxs8NCaLhwrpKCCwDrtvP2tehwNwNDYau",
  "key18": "3kkioT3SF6c1Hemsb3BCRBs73vo4SV3yQJSmeSJSZ7Sv1uTr19swo4PKXpeRRg2d2gikjUvN5MuWqRLSwEdmqCn1",
  "key19": "DgAJ8yZUG2N1uskNcerGYEbF7eaznuNJEHPAqxvoH3okNPi6VJj1RxHrsQQwbFFmj1jEiisHqsGVLrpiFRrGKv8",
  "key20": "5KLU2RZpAGDHuYd9HxXdo4LGBUc1sa9CAcx2ErrFt8dbMXjYofHCTtumgX9PcizrK2pXfds8F98Tqx8ZYBxf8VSA",
  "key21": "5Fjoxy3dytofZuH79KBSCoXJHmtxLq7VDUJErWLrMbJk53PQaWiZhLBnLMnSG5c6Vi9S4tgVXhxEwZPUavno6hFm",
  "key22": "2WXW5bwj1XRiPWitDJXsYMuQ8bLqhco8PtKxdsmJvMr3LrHodfb4uDawUWb3fsXLXx4UJwJYDVQcuioLEXu2KZzF",
  "key23": "4HyDwu3kk5ZD8LKUy5aGg1QT26QmEmn42rc8e2bXrbjwwuAHXW2gdqgG2Mc9ihHV8dPoU4APT7JQ4Q3xu8hBiUvc",
  "key24": "jQEgdWsyZu7BDo7UFpSCLjJWUc7Ao71w2fcV2qdcuj6NSbq7YWku7mC8UvYNLfpuNDuswiG9nBddMYyzLFZa7Gg",
  "key25": "4YcJcqCzhCMUFbyw6TehL9NC2Ph6rEezSfsvtwG5YiZrXeBHEbCHTZ3CW4L1t2ohoriNAHdDJxwyeM1X4vPZA7s6",
  "key26": "j2NwWx3x4WGrzmCKRsfTTU55SkPTKjL24dRW16S73BqWAYZ1rtJYAXKBGBMxmaDrDY49D2d5qNZc64Fgfd8jMnN",
  "key27": "5afKCUDroemnfkuEj7LedursX67Vsk7DjbtbShUyZzZCxJN4bcneVBTPcwfyG47vMFPpWvZqL7cguVNRith9i9qx",
  "key28": "4X49KumCwkCvvfvMmG12P9CwkKLoNWa4nXenKAxDZFXxduGKERcrZ6zuojeCocWP6T1UF1q14rfVJ26pk8gkJTwX",
  "key29": "3SuhgWZ3EzNuM1CCVozmZzX6DCtLLsUwTP4KSdcuZ4ntztH7E1aZvNkcKZd76NwAfU5ydmqApYTcqCUFF6qV2Ab"
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
