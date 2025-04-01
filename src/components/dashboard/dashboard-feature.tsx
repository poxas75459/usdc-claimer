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
    "61G642knoUiwefE7rPio8D24k6FhmQ5RZWrwXcYxQSJ6X9Kz3vBTniXcK7Fmq4xniPcg5wxPurJT7DfAhKYRdTzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TDSdJBgq3RNWc1cbpiknxu6usXiKyYGkZP1p4PM4bPgTyQwYFeuoajFuBUEpysGBwtH5cFN9FcKN8ZbgbgEbcEf",
  "key1": "2RzKeaYr1GR3gJgULQMZPFNTeRjfXoLM1nd1PaoRB8a7WRLnFbL7xJRigFpsWuFvx7CTpk2px86ohrZs9fVkhbfa",
  "key2": "2h83W8dgTndNtq9rGj7HGCaf7oQV93midKzBe6idjeGFs86yhAo4WMAxtzvt3suqVHui5Js3V4X675rnD1PSMx1H",
  "key3": "5NoQQCxMYhTp6dYTZz1H65X4qV1puR86LAMnbkRAcuFPNx77mkRVJRFKEip486eSZyUXU4mS2oHX3AvKfpNqkbd8",
  "key4": "5Mt6VtiS6L75Vj4DbJsQ8Gc7wWnhLqgaVJ1L1LGLnyJNZAmeZF1vpknJWb8Nt7j56dyxALRjcrSw7ps7m8qjUZDg",
  "key5": "5heZPR66EFU4GMQTq4vLz6TotyG6bw8GbZagMRWvUhYaWYHLhxFBhwDKTWH47hEYVu4t6dQaq8b2hjmC2CmHoMt3",
  "key6": "5p6y634oaihZW1fRviK4LthvRAhkky5jBzA3B5pTiciBZwLGft5MWbzGihwxSh3qtHASbSfU4SmxoAgixsSvUP5F",
  "key7": "3Zjfhripoh4UyQJELesBg5bWhyPbvhNCBXcJTigiypyYL2xTH44kue8DYKmyit2oBvoLVQqo7FgEhNAcNH6TVpPB",
  "key8": "2cExQ2NwMGynShspTtBKs2NkhyocEzt8QoSyBRS7fJuzWnP2ZLmt3DrK5JmbZCaniQVejiiV1ZTSWZbp9wepowyA",
  "key9": "jBryEnYNQTyYvW6oqwoVzxnNwTVr8x25Y7uaERMA4jGFKSa8wUsGFfxDZkpbySNvKmjiQd3ovvVBJHKjfCAbosm",
  "key10": "5onG5nsxp5irgwNvpY5PdWGuuui1syNAaApQcqDYLxB2xTCHCNEYFVgJqF3BdkLv3CZ8tpbTMTEqPaSkKshCYtCy",
  "key11": "2FvstnGL4hKtzBNQG2vDWdDurQCB9pEDwooonDKVz4v6DJMZMocdPQkMjX8Wm2B6z1nrcm3j54DzcKHov74AJ4eh",
  "key12": "4L32VSyiZ3ECrEsDxFQ1aaGamqmmoANTu4eS8kehsooaGfSBH3SoqveBFTPKHa9Rqtg6o21zhXE8a93LPv7f88Gj",
  "key13": "4qNitMUjN9JTfYsBg6aN7duaj3woWRv81nfeZiAUr8yEhdfkXQtXf8W5WEyXtCzuwVD1K8mmQWBm9GDXeVL9oJCH",
  "key14": "2BLbDDgmSSjZkqPa5Akh3iGNYanteUxq9SyMwTXypMqy7ByyXhikMz2md9CXDUyQ1nxqdGASmGs2KJJcPV2WCc1H",
  "key15": "29RmdnQP3kJu7DhBEpNTcBe8AZ8CTM1rvaGDJrsyJGCVAyAaB7e1eJZuLc3ga562ZAwMgEiReTuQXgUAZMhVrQ6R",
  "key16": "4ncge4jzBRRcWbD6BRVunyrAhPf7JroVFq8Q7FmAPFLsXuhRayknvV3R3EmoG7dZ6x7YfFpvB1Ftn6PwD1VbGigf",
  "key17": "3bxR9CM51BvKwjSoi8ins5xULKt8Qnuyhpt6oaXmYDfCQ3QNPg6tmXXsmXSDfXPtjSfA6de4WV5D7aeBjnr3diEz",
  "key18": "541ZJCDdR6f6ApD7iuwAvN7e9h5XjustQZX8TaQCwVpzzUyFFx5Ad5fNMGkNYQzaaFnYZadRBo7or5ErvFfEmhy6",
  "key19": "4kSpmSTF7gKcmNAoGBCrLdTi4A2zrmjzSiFuAQtzMfy6RBriuWnG6YPb68fb4c8jQtAz8jwgmxgYtvo79ooGBVBQ",
  "key20": "3ktSXxwMDSnvabL4Mn83vte1b3UiiXiNwka9TkPqAxUJgFKghHYZuNju3b649741Vg443tKtsuXebmBXKa1m19GF",
  "key21": "UnHdp53CNvxxsBsnL6VBBaQWGPoGLQDDchrjthm82QqUcMH1mhs2eWv57VQvgm1jsp3Lfi5rC5ncGrTd9gthviM",
  "key22": "2PqGot1U8CtxwMAWKdt9jz7Xkddmudo2671yS7enJYZ5e3MssrTuYhLTnUgsRovMKzZPdCFnhHh7narxXWhxkhSD",
  "key23": "3JGLVAnWrxogXGNAcfSBn2g75TSqyBJD6JWAKKgB4RuXPNLocmrGjqUMmab4QcBW4gT9gr2D7PixcWyijViqWA46",
  "key24": "28mtsa6yM1TGBGLhW6tn8siQGo9ARozSekgtKFBmHkdDYH8bX7xkJ28sZiT5rzA9LiJzgCUT6sASZm5Y9cfShihE",
  "key25": "39pTrujPosAFkKDs8H9GqAQm9QdAFiiufP6HH2w95n886AGnre2SnUTqwj2mnMxKCaPUFduzyZfPsNKqVTnx9hMu",
  "key26": "65WzqaAigmqwL9f7tTF6ugKrEQsMvfcDTu9brZ3LJpiAQEfy4AmWuDDcHrjP543zsYRwzz7M2ku7i4da9332awSC",
  "key27": "2DJdATjz79TWgHQ44dBXMEDi5cZA4t3fKNLpdW4HWoMJZz3eeA97YcK2KKFDVrry9FAwfdDsu6atvuxz54arzHaP",
  "key28": "2fJ3oC7LUknP8MoPEtcFbifUCZhriBJTR6vvH2YU6cPT6eg873LwjDnyPa1NrECuYr3JNMEQKNu5HwaEmCJkWNHW",
  "key29": "4WAWG4zz9tohMsjzu5nZX9zp6mvL7dP3SRX2aM12Noj4XgVHQid6yA8KdzSiaWJKaqjNSF4EFuDGNgYXBrmihNDx",
  "key30": "4zB5hR7A2Pqunbz18QqevPFptkESV9Vm4AgYC1xdRb4At3ZsHuWwMMEtjkKfxE2ogAg63s8LKA1XzJaWzgCyY1L6",
  "key31": "3nQVWi3hZXymufyJ7yfyAfff46ZER8qEBkWZQ1AkJtqRCiK7rhLP4oQ3fUdzshJkbmkSx2qpgtBHERJFYvSD8L9V",
  "key32": "38ZHb4pcFwTFaJSexeCRrE3Fi4gaxuofaf6YSKgYcVaFs13CLCJdrisBvovjL7yny153QXXhrnAbmuEZtiyVqQRV",
  "key33": "3b1y2TkXrLZ3Eav717jr7WjFnjhCGz9kgn1DgFvwNFmi6W3n4vjRKaRzfNYuS7FKP9e31jmQueeGQQh4uhRj1rbQ",
  "key34": "5jV5uyHHidSdYLsYCgxv5YGnn7BRP9jSgRieUMaYTq9oh437eop1oZkLb1RTB4n1dK9pqkyyBaeseBU7tRxzENxy",
  "key35": "5NJzQLqadccVJukr4aiSYz8nQBzQHiRxtTsmNhG3yrPKFFMxYvqYzHSU2hxXxHd3TAT8yr4feAJaqyzjN7XbkkAG",
  "key36": "3i7jjNTGw44jDQNUpNwWg44sHvQcN8ZcRSgoD2A5LwoXS1Z1JEp8ajKG5hWcbf72tszsnFctJHbgbp8XG6SxmASV",
  "key37": "FGQodHEjkUrer85EZqazJED4fxbddFkos6vktupmXLSU1wsaJYpZzc3eWtbXNEGstH1CUM2x1DnWVzokc9t2gwc",
  "key38": "47gkT1TzHvGgwfZzXrvKS73UeASdsXsePRwqHenM1F7ScVSsffFVs8Kk182RAzETeU6DPgbH2Wooo1EwrHfhR35G",
  "key39": "5uunAw8HsBn7MXrZrgCVEgU12Hez2VpYg2KyyyHrNEm6px4spwQHRQhfPajmtpdNTBPzxzZSdaXWKLY2rkvgpG11",
  "key40": "4zuiEt8iGVKYoZ5h9YweCJAKaAprnfMLmbEoao6mrXfz6cGz3VvXR7tAouAcowdJiCjdtvZva7kyKKeSHixX1JxM",
  "key41": "67adbmUj16oNBViBboVbVzHAGbSmRkZ2JtifbHSvJ5cYXBfGRsPAnNeeApYyfKmXozLMLRiZ1YftSWnvWXeeGiTU",
  "key42": "464RsupEdnZE3ixTNyp8QdbnwqiqTro1CvzyB75zGf6YNJGHd4bJEBkVayXEPUy1hSGutHJkvYDNk6tjiHFux4u3",
  "key43": "TmQ1D7SSxRth7jSi2LWY3rA2aZrhcNzsKX6oVzQS1m6f4xnTDCJSuUUisAQU5fURDFxFtuKYkLz4762TQ3MzMvg",
  "key44": "2ohieiTKfjgJZFjVsi6m2HkzHWbBniBbsmGdKy7THE35cSoQU8neof3V3EmVfxNjFBqrqccSEAUB643D6DyZvQ67",
  "key45": "5UojsSS1jrkprZVaPLiYB6zdLsUtr5h8sMmpUXTZoCSxVngr9AV9X7efnzAnprL8bBRzRzxTDjJrTPAVpVtfC9bS"
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
