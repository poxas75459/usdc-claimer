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
    "4kjkbAmf8YCbv5rGWUin9CSyLvwenGAUHHktxh3sQJZKT4jM15pxZ4erpsNS12ovztMkQEXe2FfbMhJbsSPxKgry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iEDDgLCghHULPvzAs6wTPdYnYezBySZNH17ufa1sfRiiMs7oDLEDVPZtsxEUqnqY5w92us44e5YCEz4THHgaXeV",
  "key1": "4e8YhxcCZ59aVKnPaEy3ar3xo1PhGmd6EeWjq521Hj8GHA1cpUZrxLyjac5AiBXC9WnSZfoZbb7EzpNgyP8JTuSU",
  "key2": "5cjEYXUHSz1R5kmZ1PBvEwVPZ78GSZdFntnGhV5PC3d8rMtjBPPDiveSxB7UpzQfo9L3tyFpU5kaQnxZuMq2K5N1",
  "key3": "5FFQrfaM7dqnRojAWvdHBr6rp1mLY8GxtNKCr2hZzidSYC1mEnfKnWigqoknVM8ZHbPoBNpaYrn5vnagWDSUm9DV",
  "key4": "2r5njoh9YfkgPsc2sF9RUPh41VySPL4v43uaAuAKYhucUHRMzxyQpQrvtM2F1fPvXp9CBERCkG1TWeoSY8RV1nXJ",
  "key5": "51kVSgaw73i2544jxf1o8GmombbemAg6DtwDeNVFDzpGwKnsWGQ1aMYFBxQmNYZRVvfzw5xzE5BC65K6F1N5bcT9",
  "key6": "G8PAqWCQSxkkKjmMFGPf7UHVyjEqByCqG9otYhr23nqkUqM6maZQAMNMdEqMcaZ6Md4qxgjYZmerR8GpkPEDszy",
  "key7": "TDNWEUNPBiwicy4EgqWXCtdBdzw1xn3B5gbrXCct8iZYwywc9My5f46AAr4d9tpLVPJuLc6QRjD1iMPfZJxNiaG",
  "key8": "SXGFqjxVDTk9RH1RcgNakrcbEAvVwGbP9XjELVRw7M9FmkngFD7oPVQ8DfgNBjoNaeKcb9MF7huT7Y9YudW1TAD",
  "key9": "5fPXY1WTbz31joXD5U6yPcRyysquvzNgufdXCX4WbSk51udnkmoHYMhgQBMkeHisEsAMLzEbiWtxtHdzWp38YR9s",
  "key10": "3kiPF6iLxx3wafsijE28C1GVGVTcSf1Sws4P181TUbCLnLgKoqqZ4cSXpYE7EQHbHUUUo2QB7zTkLeVXPL8Pj5U9",
  "key11": "3sdWy6EFvSazir7s7YX8vLk5Vm6tMitXmX8WNgsb8x7JVhPFvXgDvpLkQnG8q3425meP1UBkdfPpBQi28BNuEbWY",
  "key12": "2PFStiakxK2cCJnCg6R2iRADsqNPzjVga4uT5QcnXBWAb1fFRgRx4EoRcM6pNfypN1uPK1z57uHFMMYHhRU61shv",
  "key13": "4cvQDxsVbJebGytD9ypfy7o4RtNe2UxJLNfog9TZeebKuBTLrXTicE4MZAPmZE4btYL99GSxd8juf1fKKEHbvShp",
  "key14": "5NsqxQYxmhPWRaKnG7VrXbPx897Lu5CRJFwcd3DKtHExnSiLU3tDkpjnTJShLaxSgXRc1RnSpQd5k8KbYorPzBuT",
  "key15": "2n76N76VY7cdb3znb3g5cbdC1K6eLia6aoHB38ZicCXqEiwBvkMYCEK4j5YSi9mnNBMj4MBJ8K4hqA4ZYvGXR5ou",
  "key16": "4kfgKHtU7QJuQr7BEFcfUqeAGdHLqdovpJ6vMRn6ivm38yPNjZW7cf1Bv9d2iUcE67LAL2S1k6ykPgqtsg7udoDf",
  "key17": "3D3YH2qkdShJAk3NxRXVCv4A4QdCu5ACY7q6ZLHzkX3BJVTUaiabbmq1vWZvZYcFC5dmSLoT2i4x9xTWSanGjWpy",
  "key18": "3HmymUMFRXSyygudqit6w2gSP4FMfJKCfBUscbyQjaS4kaVGqaqz5rCHcswSGo6ahSQRLPGbJbn2qKjp4W4gMC5G",
  "key19": "5Ywkv2dG84bNDXdfTeV7iYT5DEkRboL1NuCRubUkuRqMYjSJThPxExhD1tBvjiZC4kvtouCFhYGy1oMav6yhYhnF",
  "key20": "3rfauiRFjA3b8m9afVhjBJ6YWuGo1emQfpP2ZY3X7cJ6nbHof1G6CXDt4SzBaR7gir2ahREcDaTkeFNT9Lv2nbKV",
  "key21": "fUrL9FD1dK2Aq3WqBufNqsHyzf7KmsBqNdGSPYZwsg8kGCqHaXemi6W5RqTDiKfwq6mMfZj7sv2xBKwchHjbFhx",
  "key22": "2TcWCm8qhp2ri3qPZCRHAu4V6oVr3L2QzvLb2G9yJVM4A7UVvSj36hPcCvv1fw74onWJp3CoN77KJuRZdQ576gfn",
  "key23": "61UmtwYC9iWSbxfF94mJWPFrpv2xZF5mwzJfApd697fS7SBAUb5DqnVEEAsrBFBqAvkyWPfWm3kDKS71bTqnLJs7",
  "key24": "2eKLEV28DD5V1dhZukmJKzNAH8bLB8TqFxHQVpdRsZkErBTT85A5RMBrWsgLLUA9Ta7ExutZdvsWrH2jpujqhiNS",
  "key25": "3ykixwJ8jjtMYbn9XX2crh5YDxy7CxbSRC1QC4MYmoBY8oN3gezAt34gQd1f57KfQriPBQHZom8r9k4is7pDoCE9",
  "key26": "31NHuSGu9TxPVSEMEW3eXUX37Sk59C8xpc51ELnp29L93ofoafUw922skRzD8LcZetsq5Jwu4bjmGiVqPvvqCZY1",
  "key27": "5EPrzavFzPvD8hG9kpDUw5kCinqHc2g1mBdZFTNLvntTU6M1JFd3g82ZDwLEweFpxb3drLBnKTW42nrvCf8u9j1U",
  "key28": "67rNSUFAhcHRYFCXMnyVigitNRdUQ6XFgGVBWnp46jr2EEdAvJTtw4hjhFdJp8eRN44275tTox9nsAkfixDRsVnn",
  "key29": "4dzW4AWtrwa7JibY2L5J2xePLrVAiZ5UzXYEVkQXgYvVJXPQzWooXv4nQ9X14PrmJhqVsnvSg7oeZqTSF29nyFqc",
  "key30": "3SBsCdCCzJ33VCQzig14KjJVR8zLzQ6bHSLKTxkmybgY8TLn9eF2eyEXJLRojYb5hv2NPEHcudmjtjhkvDoMekdx",
  "key31": "3rWStBs5r3CK7iYynEJPRieGZPrq2NkDUXKU4d5CwkS9vqA58pmWPQR6s8pmz99M7RSsn8TT4hwpaqiZNjkQVcCc",
  "key32": "31kfq42v5PxFnQCpE9E1WSkzB1pNqvnvKCBrFfcC24XHWZG2kT91j16ytof5iXsRY4vFgP9XC45C4hjHyKY4iwG9",
  "key33": "3WuqadRQpPsu6gGabDxkY2dhVwEJ9DoJA1jJUbu8axsBt7ESpr2QTuoRByGNJBjczktgpLrkKNAcxhz2oex15obx",
  "key34": "39AR4uKwntp2hKA4Ae13GcVQfTi7tUbYBmmKGQiELr7ST22naEnwY4HMPnX4RE3dioFh1phNbvpdifAhpsHhZZqg",
  "key35": "rBGvT82nBS8nChyxZvKA4ytRwo3WPfjWN4zrxeDezS3foANFi7ZBW6mdnbDbdwTnKVir7MhR9DCQF1LbiZbvJWg",
  "key36": "4JVdESJZCBvnuK4478WwgJt88pdE9E2ED1HguXyddW3vPQyuCR4td262WCMNLh3TGLMnWkY54HVMWftRgMFCU2aW",
  "key37": "4u7ueGh7Vhd8zzEBs1e6hfprfxwjZmQnZta8qLp8kcmV2yE4WHMcJzN4UbQHLNiXUnXc3LkdzHHc8ahyfW8CX5DV",
  "key38": "4wZvGgL1gsXGWWy8ujQZm6iMBvfmVSRajRtpKXxaa3DgwXqRrTZ61w48f7RW5Wv5mJ6Hd4SLLtdSxd1oac1BaNdE",
  "key39": "r6ozkorKALrmtEMLo45uv8rsY3egFTYohJ7Sekzwjaie6x5et7FT7cdW7bgS5BpxmJ8VLrk8G5FT3kL3DgmXpJ7",
  "key40": "23cg5jiSwMP3PbE6JNny1Py8J82wNePaAg8kCBA6qEWqMPj8YTysdb8cj61CdZgeC5T5p1CraiTXPCqZ582pcX3C",
  "key41": "4rTyGPnq2JZiLAYtyWbZWwz5NqepUjmMAMD8dp3zDkktW8wJUcoSCMK6yXBUaQT72FQD8iysSVX8g15iK3XY3obM",
  "key42": "4HS1eJWymvkYvbqscYwNGc56UaY29sziLiPv89vW9RPfRS2euezZzkyDQYo2fJvneNs7rfdFtVrVYz7yq57j93i",
  "key43": "gTnrStGVF2P8yNmujmVzZwCM2XKJxpnJPG7gUiuLBKGh6sQXJa3Z3tFMVRTQj6CY1WH16Zx3ez6FGUygFtuBLB2",
  "key44": "wV5LL4wZMHpvUprVnSj4MHu27MJcy71bLFQ5AKsVdfjwrHkvMGdL1k9kMjmdn79hAwNsP7Ep7L2r4asyFqL57TC"
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
