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
    "3qMBW42hLcMb4cFAwoPpLNPpmsDjMxDW15CjDAUZro7vDqU9kvij5RHG4xKZ6NBGYqjGGNzTiniS39Lix3X5K6Zw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ahr541ceqg1tHHWszoEcQycVtk89kjUhi524Kkogfe7PuxGLwg6QXLMdosiME9rpyZfpDpyZhD3MVXTn842RqVK",
  "key1": "3QAesHLGQ4d2CSnsPJ9vpFmd1SpDw3mvptKiiTZUkGbBgcpgHHYge6cSMhm88YGT3UgrhHzYZqrUg1t2spkeLNQk",
  "key2": "4XsnjpmhziTkhP595piyKBiYhmtvcU1MeHZKkVRYTBe2FpTuG9TAUQR4z6jMMXiDXJhKiP5E6mnd34ojzMZwkU8B",
  "key3": "3RV7xDeRH8W7m19H3o7KXEn96VXFEoFhW7DmGAxpNJGcp3kSWWCmcsUPPfXmo1muZQdWMVnTAAwwKirGfzr8BsH7",
  "key4": "45XPvMM6ZUdXZ56JgBodSfZXw4gmvLF18hLTHnHgQsa4fWLrtSniohcSrD1bT9aC6SSU1SuRx5THjGy93FnAYNAZ",
  "key5": "5YaHTf9R7UCHX2R9GrCuwYegzkkc5g1e9RVHrEzsZ5qWioEPfURX8B3QbZhpH9C4cfQi4Y3WVReY5SbsRGdHw17v",
  "key6": "3v44USYfCA8eN2iWrk2QLW5HEAWTEJgFMMbGo9dnJuiLrFMmor4QyedRAHUfJ6uvJEmD4YdNtRz8kEWytgx6N4JF",
  "key7": "47ANRzgK6dMZaqpJiSijghUguWet4m9Gv1xnny9bCkvxuUEK41NqyinCqDLUsSgaPKctXTgCyT7x5Mmp66yU18Dn",
  "key8": "5LgnPxYNuicV3EUTf9LFAAN3Bd2EBDX3mWzKMvppcPwWznALq3KUQ4osTYfG2d5kw1nq79mFHX5eBCNmsYnefM9C",
  "key9": "4CipsYegwtFJbTozo6fCfbFCGX1rq7ZMJjsS6Hv6RqTdrN79jALWzrWKzWHMkCxZDbMtMazg59VchJcpRgZVR4dM",
  "key10": "2txRRxYXs3Sfc8z2q2oK9K8hgKQpP56rGFUbzhmG1Mn4gjg6Mb8tEggbjJEPWBjHxx7e5jNTXHRqea3mwauyyhRS",
  "key11": "4QTV3LGsN4JyJFAjBwRZJWjuieLz9XXgZTS17ffeLKz3KP5iX9wvULERbgZgqE9QyCReDkMZVir4ZifVCFy5RGWn",
  "key12": "53tpiRTM6Er81NCNVDPgJZGAop4r3iT7tA8FiLMgwmxp6m8FwjmJuH7Q4b8PF4xPWj18P3VuEAorzRYDEd1dSuMY",
  "key13": "3ZazCoLXDRavXbZZ1iWebB1UwFxeVBKDLXo5wBdmYGnbkDrrhQmRXzXnmrEeyy86QNXy55aaNF71Jt4jKczWzDYY",
  "key14": "5ijQ18MrrqxUcM2dpcnU9PvLZyHDpj2xN5o7SMi7SyLHCPo7gnjH4v4gibnxw5iyypjnfAgyNuRm8Z4x2QUwi5JT",
  "key15": "sexxCRQKKk8nFKv41Z4kTxRJ6gjdbAeF5mbh6CJxkS2vBDj7fTzCi5QzQ7Tg2VZiX7hCRWS4iqmHMLTCeZQjtNE",
  "key16": "4gU2jZ1cjHDQ8FAbjEc4xmUApXaNAkea4LbDVN6JN7ZvNkYP7wW6zBYjHVaMVhjBkm9baD1poZUCrh2vsog9WsCG",
  "key17": "2KMpiDbES3UpgQZDLZUv8NPZCnhS6W4vkBFU4jjWruc2hJzyb7aarG8cNJfeD9j8ariZQwFWqoKJBWi457vZkayu",
  "key18": "2zWHU3cMSbn4ApuZiowBdpDMmvtkfhggHKnZqqP8Ep6VXXWe8EusryTFjRQM7vZJSQnStZPKutn22zkvjwgpze1x",
  "key19": "4g5dQSsaACD5W3QS5xKagqzvZPm5W4knKNq2CfjGjUZngD65V5fJj6KACimBzRde7AGQJeu76d1sHi7Z9tdoBToV",
  "key20": "KaHpiAMKNdeXYE442PiJ4U9ai3QuRRtdA4zEY9jpgYp3jZyhSuYrSoNfqQzeGVRN5JFbH7TbNMEf9VGkVdFrUXR",
  "key21": "Bi5GNbTaTvXSFHHjpS3nE7QXFMLoqkmLx4BpFrssDAu3ooVyXTvAV6vkxcGoVcq68F7NreHscokRaXGCKAXMpSP",
  "key22": "3sySTwYZ4jJzBFYSyAL6NaxckmzbTD3MnGbYLZory81p7UKxF6Vc1xCdyiwu51Ckc6pHYZSaXyvQxegXpofy8xgC",
  "key23": "4wbdttka3ZQjqb2Lj5svEYPcV9TKomppqR5WHEkhzUMeGEex9r1tNVrtvegmTY5CsqPguFZKpRhH3srFWxHvuB3x",
  "key24": "4e3UXmYHo3zDgy4nRrf64gV1iiGJTwTceVGTWDDkQiZ2q9M1RNawgRtGdRpG7xSybsAix9d59ZM6wh8D3R1LQb5t",
  "key25": "4NV2kUiBWALvXsvRVvAX4WxUpgvPwtoykJytbMWJwRjyWaDsHNXYpncvxAJVoXAr5URJiGScoqek7mgxXJJYZdpk",
  "key26": "31ex44MP84k4Ca3Ak1RpjVzt32gMeQvahqeWgRRsRtifqLBprgXtwJ3jaDMZVuEv2khDv84uW3WaifkojRUUP5Tw",
  "key27": "5wRRLrNJbUet49MVVcn1Vz821ftoTVivSa7CuRu6swLDbZsqFPLt6rUgMFnbgmg2ewCTDiETtRq25cyMCtyF1eHd",
  "key28": "3U6p7RiFbxGozsmyraP5oqkYB6xu5Naj4qJdVZWwk85scr8VDC9YbT1Sy8Y7ZwZ7pwQVqUwmm5jY7RaHK6T2UDMM",
  "key29": "4SSK4ZwxwMeCpeEFtrMRozRiPKuJ5Tqyn65YXkCS1aTm9s2U9ELMGQznLndHZXYp32spTHUcWZobQX2VzHMK7otJ",
  "key30": "5egshmSJfwEv5CtYKnNKkQFrY63vBkoRenuEhCSVRjzqTAmghbZZuyzvvV6uZWoVirSm9mUVpuZYjhMecMGB8Bsf",
  "key31": "3mDc2uyG2vmMhfJTnshGMWpsMjxNPEzodhnAWVJ16ZQvk77pVEsSEUjEaY1vEjwQzc3Z9UVYvhpndQqTVuuRVSys",
  "key32": "5eDu1anST8E97GAufBffH9trJ3actHjBKUk4WC5cyQfFSV3zuVK9ddonDPKFvSsbwXydiJ8kao3M7tjZLBXUpt7K",
  "key33": "3zDUUDcCUpHM9icDjUKXroLRpARa95yqNx4G8x4dUt6JtMWk8FQvEYVzakmgnLuzUAu6Mip7QmYQ4G8JwQAZKjSj",
  "key34": "5g6zT9dKQksf9qtmiFRN7daGCCtGumHukdqovSA4AcskQtAdCUGqDnoG6LFc77iDk5XhCUWqCaiZiT3Hbm5FGR7C",
  "key35": "5bMAeXV4J5bHvrPyrCAoMcsS2JghA8tNe5gQUfgAd5CUr9fW4gtKoKYu4fLJxfM7ycRY233wfw9p5ZiTP9xCWQ72",
  "key36": "gmp1md4rMnWxrA6fFiYAH4WGWMU6hbR8FnAXRMCnpz9Y6ekRQa214aMJmhfjX3Ce2xRDfMjKnt14JGzS7471C9J",
  "key37": "3m4uBeaZX1UDBELe9Z44GFX2BgKVhtRNuk2EeCSF897kz9cusqjfzYyYMpAAAQTRhENvaYqSPiu6MTDVEn7H7hXQ",
  "key38": "LcdCeasyiuu7ZN3e2jmaNtikVMpoM7pfPNLsWZWjfiQL7cd3uNV3XhwtoPnxSMw1cxXEqoz5nyGRtMKAmDzNg8V",
  "key39": "3Bx8pzR5accrRnUGddE1DgV6yanrurfTvXcDgLYh7qxhvr1Z7x9hjhqb5VREbHK1VLsj5vz5KtmVtyihLWFaAMi7",
  "key40": "Skxfj3oBUZukMzjK1Bb8JoAGTEgjtY8hPaZoGAtBAVKZg3mTK5bnAREMwcxm3e19m5YnSZWwzrS7KAYaGfag4bw",
  "key41": "3ZDjVtvPeY82T1MqT4ehWGvpKrUn28yVEBCJjxRqbNK7bmtzsy5BsA1SmT2W7TcCyhbgby8a22HpuTAM78pqne9o",
  "key42": "2g6FqfzBT4qmxYvd2bD1eBBJ2y6CcZpT82G8n7bunSyrN4xMfkJ7oVUnWZKDD6ihFSCU8mVm52ntZDzUzw7ZSzsF",
  "key43": "2AnrCnVPomx2JTcNe4qM81GNL8wGeRCtDncE13Y4qTtRDPvKMqghDGtQzRYcYPfLpdZmzu8m6ZMJhxXxVPF3UxBv",
  "key44": "4RqBAWRqj43pGhNhAVub3VyqDeufqodoaQLPZoX6jM29EB3MWgon9w5WMbdcHw35Rs1yo7zkbaqNHtbk4b8H1tt1",
  "key45": "5Uju57im1exmTDom9Q3DVSsN3ntX5AparJgVEfrUsjZTYwgVn9uPJcj9ukS6uCstEiL1omfKYenPREwh1mqyEckb",
  "key46": "4Dayc8r866RHKR5k4FTQMENEM8XpSf5juUnrez9Z6DBmdSMgMv7527eX9ja5ypD7VVUXcYVdk1Avf8BWz3eQYfZr",
  "key47": "56J6MzpuU1PnFyY2a17hq8QkLW3qjHxpdpmY2CvQMrNiamTcDYFWT2RgGreSwETemKr7vskztjGzcQYTyscoHXVF",
  "key48": "EBd1xY49R7RkzPVgarmScfbsq8P6pqn4hBh5w8zb71SYuZAPLamUcAah553MeNnF4sAVZ6QZMm9gKudETSak6V3"
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
