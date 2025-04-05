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
    "HjZT35JmaWVhmZVbMr6v1med3rwqhZgZPepa3bbsEi3cQBSXkHjbECiFLU1FzAaQmtc7WUWcyPbLKVcKUPcLYHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HmanBqcZyDeuejqknhkhBum1rKcoyxYcgC1DdZgLiJWVHgLWwUMZxgwbEea65ppGt8fofRUyprp3rFR4jihvcFM",
  "key1": "4KJTjt9z6nuhETEqnPFQbemRw9b5kusMdtWCCZUmGAbvS7LsdbD9TjYByAorJGY7ethFWYkAyvsXGFqLN2wWhiaH",
  "key2": "4mpeNWojtV7hcBfReWFiyMqPni5SagyCobjrZ6aFRJZRYrvvFxvRfsRWogpFY4RbYwkMs792fo5Q8rpG2A1YpT2H",
  "key3": "4JFLmZizS1vB7rtPexj3NqCSoTT4b9mQ11mqJsWHzcL8vaXxwDXZJjoSJsrF9idL2FtRqiCg8JVVErXzaek6MDh5",
  "key4": "3fVEsZyMZ3Xav7EatitXbhnUjnRAmauUgixJbeC2ivojeMxdaFDMne2i2jR4eNJ6yDL4iQcXReGbMK7reb8Ecqks",
  "key5": "2r2uiFknoQBX5UNuRE2zFVRqHfWPkpaQunBaZwJc7T8ueHjhbLsTYhuB1PvwkeezbzMXBBo1Ei3qxHBQ3re4oqPn",
  "key6": "3wX682Co9cJ7V9ZABfMoyLVWW1QsvDVb9kKWYU8uCLNjJjMD45ec9mnhQdkHM7Q9hJPq1ePEhDwmAG2MAokb1kLA",
  "key7": "ukDL73pUxS7T4c2PYV4DA9ui9ChNM8f4ehWA8WCw7pmroaKt2wkfBuM8JTVgXqoCmtkpU5mmr9D9VL2ZBUaeuD7",
  "key8": "364hC12xJKBn72rzkW5H6WA1eP1ysMPe5LYrE2MLPQkqZ4TBWwf7C5LS8wpLGHzsjTxRyEL8QxUbyG9p4d7UEtUB",
  "key9": "4veZgzuzSbGhvkDmfw8DzdX4yzsrjrQV6GKuGcGCqR1sb9UhRpkjxFWsgE65JHeStdZeShDd2tKwwvFs2zaAuEte",
  "key10": "4ynouLsUuteNjfpDSo2XWhczymTpDZa7bryA9F35CPZg84RaDJJ9bvyWiEauUNmHUYABoRj7rY1srdC3XcmPPxvT",
  "key11": "3EFCKg5AyGMEfddS9rDRLua9mWZH3QwfcggUfJdRjoegyygLCkYkr6GdM8QC7kK9cwpQ9iFHeg46PNXhMK6C3TmP",
  "key12": "53esSsfMDQYi947m2u26HGLAnsFDP93TtZSrrhMUncgfCVtsFwzoCW7NaLHziwoSgN5LgUDDQTPSB3ab5cihivWN",
  "key13": "Y1yPG3NPe6ZTzfMdWsCdRtfmnpjCtzn8sBQ6AktS1TNxdLy287b97sPZoegzVEHC48C7ZzhgkVTXyCYzCGYgTEj",
  "key14": "31v4KXRWNjvbjEPGBAvuoCjPhqsaszvRhcxaL3po1zb2nmyPV2pnJ7vCx5mWkxE2E9mxUV69aruDTUivMCVR4mDL",
  "key15": "2ScjRVVQjtv78XjzsD1TVHTDkgJWAAPLzAWuSYLcXZ9fZqZsCWQfqWdFVdVawFDaVX6HB8jgHznUSCYM2USNkNDn",
  "key16": "2WPWshCqPwZG2cwjfTmrppz9ALpb3eHwqFTkHV2sEGcwYZ5Qdo1jbWFC3nHWYvPKvR3Fa48dqdR7CWSwSThG66H3",
  "key17": "3xD96zFqSUQpuJqspBb6yaQMfCtNt2mD8GqxWMJFr8Ywc8hn2J9GEhiUkLEKgQ5bwDRCWJbcNBJUHo29k9PaseDi",
  "key18": "2scXuM4Wm1GYFPBT8TivzBLSzpiKaikECh2mhLE41CYAGDHWqesqZikwtoKqBYBgu7LBA3ZgLUp6rtzpU5yKCCXW",
  "key19": "2NkNMZULA1GMXEa3miJtvPTfFaG1wayQYBz2uKRDFQxqCTZupev6gXDEkmDLyMkhxba8AwY7NSRitP8PnKLFTbPH",
  "key20": "2VijrMXBBS9XE74oy6FT53XHqWNmZjbSFnx5BmMVG4wVuXSTaXRbmx1srJA37ncEgUfD4zz4wS66FunkygnpkRXw",
  "key21": "34v1yad9AZybB78cqxbnSSzeRtojkNpBUWxr2t5PtVpm3qXyLxrDwxWworR8XXn2G8o7N92eeamdr2b7wAVKBLrE",
  "key22": "ZJTbxaJZufNWkoD2oQDnt7ujMVxMXNxCeFf3HLJBXYtBLudcQv2ML61HWGZm3XzMMTUDr7WCgFvdtJzsCPxYrNG",
  "key23": "541UjcDqGkExACtFsrsn7zrT1XbAXRu2P7Va48Wqy7AXRvo6mFjbcuKHVKmEKLujBjgxo5DsLe2atyxFW8SGTwpu",
  "key24": "wQ6MaPrNQGD3UY8owF1abxdpu6NLpNsvBzksGgCPo5govBGTummi1H2YVqQ9XLhhjzUAnucfknF6gteFfyA5akP",
  "key25": "2k5gLNNjDobMhqJTRnA8zxsBwHKiHSdvk8Cwt9W36WwZw9owKxgR4RP2886a73XsG8gg8tuAafvepnFMkJ9BXCE8",
  "key26": "4fwgYTw3qsUpkjVELh1bKsBfcqcPMLy2mQRjUj3MhJwPTaCKMFapVEd3b7hEUYKo9482SNhsHnSFx11pfCVKzbCB",
  "key27": "27AzM9X42Pkyis5pGAoMCFQwbQQAWYNRnUEbGA7rYuuhFq2soc7TtzTZhRnzipG5iMZs4sAwy9qirfP7jQkhLtRX",
  "key28": "64k4DPR6hfkNGmxVqyt9xX9vCKBKF8yGst3aXCmHYxZfPkiNMFaAuYb5ss8frEXYjxVjDWz26vVXJJ7LE8v11imo",
  "key29": "Dtx7TmuwqT2ccHmPtTsPuwALjRj8QKgqtGxgPnwVdh1nAS59fedPPVMrhrfH9ccgjm2wQEuxsEhNtJ2gvUJwdZ5",
  "key30": "3i25xCePQy994FkBoZXUAdeiKwShvVPTn5RSwSzykeY5RhAHx6vByNRpphbZ8XsQ9Kfm1bu6DPkr3iqeYWFuyN1F",
  "key31": "4wNEPHizuaThRWiT1PHg9pgfqKDSYNmfDxLL42BrxLdUWAKeYqy1q6RZZsp7N1MEk6osjKrBRaMQUbB58GpCHDEt",
  "key32": "4WD1PSPGuTLQ5jha5VqWSMpyhHKhmmzVWKYmnEQwXcAnV6AjERvQC5MnRJVWbP7nGrA9Aq75QhtPshm9jRKJDqw6",
  "key33": "3T3dodRUh7sCocYp2tvHYctAm35GMcRBUtti8sKJmZ8K8PhtDnAVCkfpmUK1XRJX7c79vZfa2Wkpup9UyF2bNjvg",
  "key34": "59ghS8napzmKMtWVxkqY2ojqPHaGjzWPz7bkv2n877r7bw9m4JkUrZwbJwFgGwaosGY51Qi3fgb6q4VfAM41UdwJ",
  "key35": "64TM1FDKvzcQ2WxJgFN6tSk4Dw8HdLhAGHXpZjnpe1K1WJiZLvqBEsmoZQx8VeXRKvgXWMYTbAFQhH96zYuTRenn",
  "key36": "JnsLRy7b9vvAz1ow25LF7dUif77UkT9i6DUXY7hUDWStGzEznneDSFkYuJ6PzMuzVDtkFdwdQKvcoLtVoqvRRRy",
  "key37": "4JHabsztea95Wh3MNr5YmiTYzcG4gxdcY1EFvFrRHQT3oWHCt7SAbbTfyo4sPD1cLrNTYtvjwEkQXpEKfZ7Z8BDC",
  "key38": "2iNWWq85JmY7HyVqQijXKH5HDYz4J6NDchcKeBNGy33hSJoKTkA274DRqVStoj9GLrBaBJ6gD195CpQCiZ4qLTMW",
  "key39": "5ThZ61ZYiG1EbMTtPiK9ri6uo3H2mdf59JoFtND4yzYcft6rMefHE297ATQdQzD8Mq1uHXfB5hUzyVWHP2d7MnED",
  "key40": "4htJzwB3KL1aDirs5NnZv2AE1VzcWCAcvDsfLVUT3rWvipTcgWVzi8qdePYDM9LZ8vr2e731h8LSdGe7NLAnQh5d"
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
