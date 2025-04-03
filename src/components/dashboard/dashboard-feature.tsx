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
    "21swZNeyp56QxUr8xpQNeUsXhqd6SUi7b77TfdoCg3rZACjZ7mNYVXzF1yT6LYtUMGiFNfDBMsJM3n6XpyauHVnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cvbvFXKUp4c5GfrytV9VtSoihuJSV5MfwBv4shYvonwmkwV7xJBP84ihVUnc3VWuy6sJQ1zXGGNKZmqEu3F5pJu",
  "key1": "XHJLSuZ6UGtxZDVrz6wScUwQYLy1KMbZxq6NCv26dTZ81eTokWGUpifgivjwYxGzi7WfnY9iCz7fYqdPV7xsRfp",
  "key2": "5PqQyw5vxGbV1cPUor737rAknvGEYJhBB1s6gk2WrtH1CCJA11CgUEhJgjdM2ixxHpjUWGGM6sqALVyh2ADnfQeM",
  "key3": "4Jth9v7wn83ez2f7nyreMc6dJEhWDAwzZdvc1uXacoUP5Be3AhqeN6Tb4tqhhmg7BWZQyffSWMFtJ7qGLhChZdNX",
  "key4": "poevyF1Kw2b2DytpEbjaDNj71SWM5NpWBTR3VDmegMYChSdpk6HFSU5DCQbX7eCTgRn3UVp4CgKoiDsTDHNXp9C",
  "key5": "XZ8LA6FqTdPV8RA7Rj4U2ULKuSYU86ap7woQnFMBcU1tJFiJUPFUy9AQSHj5vjFM92RYssgYHoDZwXAJWMxjDZq",
  "key6": "3E2PBWKS8GBWFAkzv2p9NP7w9xo6movqFaQ8ToxGE7FWCMaAFjn75CdPbukXck2unK8gn1VL6vpqwonu5XxsNMDk",
  "key7": "2hsR5adGWR2UYdLRcTHejq2D3hgfGbgG9NWa1xPtKZcthjs1eJgyjg7TYQYjBuDWmpMLwJj9zKN15sKiHArW7THL",
  "key8": "3AhhEFgWLTZMimaoEjekLyn7PJ5byzJFRwacdnobAoNsxWDBwcWvTRvD4RKyzUSbdtpLJ3Ti5ETdxzd1b1BafsJQ",
  "key9": "3MT61fYHfUyoce3oZRTbpgPzWh2Pks1Ra4tACFrR2DECRfjCDwj3EsmBxpFB4Mf6vBUTASuG1Chrrbgd2vsVxtEF",
  "key10": "zGAvsjKyWwWZR9KpPHLkD9yZmJub4LECtGDdJfj8Amo4fowKVjqHCoRJEKH4bvb7VikMSckXnV3UuyuYbJDhp9d",
  "key11": "2MXLoUixx1FVP4CMBtwugprACGahPoLS87ad5282FEswYgQ2sxENUCmSe5Qj3pFsN2pkinB6C98TDV8sdfeUb9wt",
  "key12": "5k7u9PpVTqCfwsToKQ5WgXT7ofHd4h6j81QgNp47mrWCsSvfCwYmaPeTPjs8nr7SFwwbxhDWaw2BXUJQZm73dcQw",
  "key13": "5QZcmczWJkT6WGsWRbf3RPt4RRoQYYyd1xLueCf8BoSSqX34E4UnnY8E8EYpVBuaKxSBUo776wLDS4Gc9GNcZXaQ",
  "key14": "675nz3GhqottLGhW81SGLd3Ja7NyagRaZsWC4ajxREa5o7ZwFYiH4vXo6uSBAgoFpzRrKP5RdhLvUg9Rgemhy5mP",
  "key15": "3MqyUZeajYWMLbnwnbH2SR6nqRNFd7ETzRphRRGLka4NTUUzvPjkV1KjiEZGvYXSC1GYJRXYRJmpk14uB3LRyzzT",
  "key16": "4KkKXYKWcJrEsLPn3LFEMpgiSrWMMHYuN3WFf4EgsceGCRQzd7AfePYScnTPFgR8Nf73RXKbJa5PdNiKVwsmJbsU",
  "key17": "2cj2QyeAhkn5gTJkNinpLYVTGZbwuSmJMtaiRFNRSM6e96sMkwZWRkBEpHDH4LXGKJdQMxLkqtSLZTBHgnK4XCNZ",
  "key18": "pZnLGrhQeSZNaA3NwnoXhv7XTb2fBZaiVp213y1dtoYB8V1DNPS13jCGYJMp9RwcfnC1x4usgG7Fcm27omjLpoW",
  "key19": "2CQSMZSx2kSvsLi9TjwMScSrmfHsRcnhrWY8VAgiZ5HMjyHnQ4efeYNoSLyjDUNVyghn11WhME3rG9JQhYkhvsVj",
  "key20": "5f2V3ZGthwq4ZZWAymYQMVww5QkyJzTWH8ZQPKVp9yUiuemCcKTWzNSxrXr5z9un36tM4CHzhwxL2uaj831fJVK2",
  "key21": "vUsTC8WPMVRz7fZxNuHmk5LsBvnankCZtiZ2JMX3nr74o9J46Yfr6m3RgHF5khA8oe7ndWeKexNEzkks6Vwnpn1",
  "key22": "3gZ9J2XPVMwxSZYBSTC5zYCNRgNqv2mmXynuk8GnmMbNJDVDSFbP7XVkB52LZqmatHEYESa2FiBfiSVkG68HTdn2",
  "key23": "2bEZEU7bHuEtTYhXrSit4Qzu6Lg1WQ5zpB8WCXGRXZvFtDXKpzAs5S3Qgd3JTy1aSipedHEe91k8XctdZBscm2tW",
  "key24": "23aDLMgVyaGqi7sESUQSunBhd7L3ri8t6Kjufb2gXYbA7FDprHBn48mLgxLewzRrnKwXkXNFwngGeSjqZPKVwePs",
  "key25": "2k29ar46Cj7anNYuKQVHnK7QmZiVJbWRHCu3CKpWLN4BgB5fB6YgsofCHK9DR1wQ62bwub5aNsfJReGmf7D6vfQB",
  "key26": "4n2R1H7cAyzQXc8UUnXcGwjmn5fjNS5fy1jEqNDJafALyFLDthEGWpoeUBnyn8xdjWjJaGrK7a1Y3z9449kbRics",
  "key27": "4YwihCcUgvdfPRNc4S8vnNW3pggV1BFZdyMNA6Fm8Q883kTXHbZwfvW3oTRXT4C6bH1PcpGSFiwfAUbFrTfsZwS8",
  "key28": "2FCuGiaEs6iwZurH2e1GpoVZX2y6yECf3qorJ8yMYayQMfbLRuA3xsPnAQW5bVP91vz9FquL1MgSb3bJJUkP4BJp",
  "key29": "4PGPfk75RvW2pPxnhvAUwAjDcpHYbggUAVQeztVXoxQsnB2sSx4zzR4NBJ8M6fq7DZHEd3z2jbXAhCDQzukGVnn",
  "key30": "4B9kYMipa6gGUsBfqPfZYL89LLUXGy2MZgFxuiosxsdtTPGV6x6rtb5x9TMFY25C9r15iQ9FPLrLPy6oxRRQrDLX",
  "key31": "23z2FLYiSeEWDpi2QM6s7w7aWimmYtBFc3rVs9McojNwzg3k73bjh3JvPi3zzkCvRcfHSX4YiGMw3LmRwZZDF4iA",
  "key32": "5yEbjD4U8rKFCMAuxWPzyj5BvkZ2d6djbwYpuep9yfNQzPiEie3brf6rdbCPYpjTKgMedyyk2ewEh35AyhRczU4F",
  "key33": "5pHb4FiYK246o1N2LmJWHNcgBXYY9bR5z1WBQFLvGfauzYKexTnzia1UqfbGq6v8hghFs2JxZwbUwwSET5aKsu22",
  "key34": "4UwiayYq9PKduvExNJ3hik9EHzb9BMYTzUcy2nbd1wqW6gLxuQQZeperHgWjSbsN6MfcNca3DKMhwwmjEa83M4j7",
  "key35": "61gKQoddiq3wefwuT2zGQ6NLpRnpXHxrQN4uru5qme1FmhaZMRXcgtXWWAYfRKTSaz9suHednBaXpu5WJqGNnPXM",
  "key36": "5EEkYjRabUmFaEo9FKV1tFErGwfWPNVXHy2uzymq6RiEFQsWsdM1ozao8TQn5ZHg4rBEVzidRmiU93yJcdASxXm4",
  "key37": "24WE5uzHcFibc77gbgyaMkNs6g3LSQ96T2ct8onpyw5Les3KhXDEXKi89ddXX8hNTbSYcaVa2CNR4N5XqmAExfV4",
  "key38": "4jeKpeHsTjELWaPwdZhhfq54SuGCvNkkoUR1cUpd7Mz4S8JMChH8SEXwRYzGMDt5imrA5x4JRQhSKdoGGDoNkFiZ",
  "key39": "4PNYvNGLGnwCpgLoV5QLJAy5cgsbejArDP33zFVVmwbiLKqA7Nop142tPqfGyorKAwgj2eafm14VSmycMpEAoMJ9",
  "key40": "4JLrbJBtje5vV1JrAu6jwFQiMwEtnJL1yRGei6cj5aW14WQPkB1cP8BhZEbfeDM4QaG8vrHknnANBeNaMX7HyCad",
  "key41": "35vjhKvMw3ZzfWt45FibB1RUBrhkCjoe4J2V6nmvtci2sqpFSWNPYxd5N8uah6NtwWRD918Fva4ijs5DrLghqNfd",
  "key42": "g7nz1jiPAse3x3pgNXj44PmwSEsyTpPX4x9T9g2JeTpW2xiWzT1yHb9cmtGiMDXdhd5fe8Pp7t63D9Vy8KRdPJn",
  "key43": "2tntbEx3FPDk3DGZ4m6BS53Ty97yKozZ9oX5avUsXbVWBXPb1sjvw14GhBSXhwHFhcoSDxUmj4SzB48rEJBzVJXU",
  "key44": "4QZQe7oVaSju71fwVW4zfT7Z8qMnFF8xF9vfzP4SoAwd5fpYTvqg4gSxw7eZswskC2XUpVorX9axSUtQ9R4mDc9D",
  "key45": "2FPVoJgf5fXRTc25XeLL8gF2yKGXR6dj3Bqi1cEtnPMRUbJBGgtVsb3sQu8uRkEZHsx7TMSuij7souufzHtTGmaP",
  "key46": "mLnaBHFT1UVjxpL6wxfbk5NHZHjN2ezBXWWxH9BJXYRdAYqtnjdoEfwbhoCCkHg7bqAktkzsdZ5rG1zvg1SUkPu",
  "key47": "2mqmbxuDcC4VGjjjCAbGZaSQcSqSWrdba9n23Q5nNZJk1XRdRQ27mBpD81LhJxhVmEeLncSBHfh4V9TVYQBRJo9c",
  "key48": "5uh3JMwswxV5Hc5Pc5ZUagmie6sHjYiKmoD2UwcYbAM3Sbsk1xAmicx97s9WrYRqdQhZW3REcC7ntfBZGnuZPJsb",
  "key49": "5CN5bsD8nQjdbMyvB1w51pjfim8PsZC4pPGaArvvdTy5qPxPazxHRGxUvmkdDrpGqxDPHTEZZmUQarL2GWuvxmQn"
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
