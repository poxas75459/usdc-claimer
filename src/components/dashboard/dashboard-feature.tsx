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
    "2DsZDYtAd1qK4fVZLL1VsrCdZ3VLKXpyacwSPBFtJbRuLDjDSx6RhRgeFyKVUKYVbJ7ZCYb5M621ZGCbEkBM76Ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tJDL8qMuD2JJGNWVpYkKUzjEd346oPBjYgueVnoPeLEA9SDC3dm1qwreQuy6P8188tKs1vfJkGwGKa4dgXDoGyu",
  "key1": "2V8nrADDhEH6pAVv5SLJTU7En7jQtmLJyzp8NeJQ3W7pvVi8sgGZd9SfyBDLSmeZFYvPPbrmbjk1Vo1ztneNJBTX",
  "key2": "4BHz9D4ieQZeGR8EEsQr9wEjEuKpTghSxXCzqf4b5rZmTg7h6ixQWZHzZLsHKSYLpkYHtrD3ZsW8TXScghk76JXb",
  "key3": "4gHjJ7S9o6d3C4XwD117ePZoTDFzujyksC96oJzCVbHs2Tf8xEaYw3MRtfdMg6ugUTt2UHgqa845aqqn6WUPZ5Z6",
  "key4": "3BiZrUxUd4WsK1f7AabAr85GfSjH2TW5oqKLTdAR2FoXFV6wYRb8MTuapio3LFUJXJmqhrTSRXT4CXKtUK36X1Vs",
  "key5": "2y1ZGcs4VUGzrGCaf4p7TMtXuB3MvF29gyT1vy3ZiyYEtoZwd34G8Cx9v5Y7ee3Uuqdvv7Fu8DvPjZKsA6zTcTs8",
  "key6": "5fEcMrxa1AnqCa38KKATdg1nHSoEtEnVgHuWNx1ZjVwQYtgjYhnDhxqneCvQ1kGGaWF2TpjLmzbnHnsghZwMho5h",
  "key7": "4QUGgTsMjk9JzdeCQESuERf2Cyo4VkR9DUquXkjs3XjtyimGh44mycJC7o67ejjWf2NB24P5PJjSik5jSqzEo2Ec",
  "key8": "21DF33mErPmmxBA8MDypLbkoPRwmezb68GJ9Qn4C5gH36JZ4NKkaSf8ceURSeMxd6AtZpKY2KStX9Meg4fUhZAgg",
  "key9": "ZE3C2TH1egFy2GpwQXiyoNio6xG78NkG3cxEgYH5nBPPCQPyQBEEhYcao9Nw1bHshG8Jvi4cpXmHriTwcuYriQV",
  "key10": "6XKxdFJFdQG8e98bSugkitHZxTKHj4Buf7LXjWo1GuQwprAhM1FJDaFXFAfCAM4hFZ2P6BGUNxXUt5c6kde17Ny",
  "key11": "3xtxMj88QVW4VgP5VHiNyrfFZPTqAf4PadLeGHg8KbTtDWEbjSr9MpDGbboiBxDQDfcw6EdLPziqYNL5EjCVZCAT",
  "key12": "jhhsUinPHnXy7eYDVL6G7YKS4C7kKSmgvDm5Thb8V2KxZ6ERwrJ9n9DqmZx73xrcuMCV9zYs8NBS3m9URVzHn52",
  "key13": "ZVWEzyPR8ipGV5SJsaBgTxUD5tZEC7cY4vmwPDGdLs9aUKVt75fN2MW5vDSN6KEqmn4oEky2BjgCH23cfaCFvTX",
  "key14": "2VPYieRWNrvkq4Zk5QcwiFg8JDsNx1LGNrD5h6MsjQHxWtXaRSdJXve9dLtu4vj7ELtEd2pJVoWs3Cg3BCX8Ejy3",
  "key15": "34FeLmXpD4GLm1MEzXRD9VcoyfuQTxXyCJtq4kFke5qn4YcnVNry9Q7rLgGBCimdQYnn5jEGAsjWEnzEGRo4to36",
  "key16": "58KCiqcPSoHAV3MkY9rocQo8k6Fm2uEtVX5fNy64CNJFenjPjgAGY6whD7fGn3nUEZUoFJTkYdmrVdFdUsscCd6w",
  "key17": "4rAUNayvrc8sdoFDMMX4h8A4aZWyv1occyR7mMCshzAbXZc5RTjNBWc2XYNkxFNq18mjzLf5xn7agxFAFjNfFUp7",
  "key18": "4PdWVBypZVecEwb8HbZUpY4vMGmHHBWZ86jC4p9uCDQPAJjt3WBdL6vi3wmmeKUdzFcXTjULZjGNmtBf9UAZTNC1",
  "key19": "3xBzbpwX1gE4EKc7Sz2NWcdL9Qqy6aNePYue2Jv5kC2xmP6MVBTtVhRgpjMxbEEZK64Lhyrjb8vNjEJ4iaTYJMnd",
  "key20": "522Kh2QW2KrLiSi5wZ9fibNnaboL36TdtHtYAHSjuMnqv9SbtgLYfxVMLbrVEN1cAaKmUgkKkKzm4K2iaif2AMB8",
  "key21": "4u9Pbn6z6oGxRGXg2T7XKLCW5M1v2C7CdkTNYQ97Ro7rEUk5J1NLYHNAj9ABmBLebcVkTrxbamTiBadbLPCwQmq6",
  "key22": "3XkkszvGKsqfK99ZY9DRH4cNitHVtJ2fSW7FyERuDHw6cn3Y8opgLEJVndjs8GZbwryLMFBSVvehHpe2Lp5Z9HDq",
  "key23": "35qPF1qC7ZqJnei6u6J4Qg2GRwwcbFcNwwdEkomYJtndrucW2DzRuZBUqxS8DpqcLavsYxHrHbrwW3g2NNC3xDe",
  "key24": "26a2aY1SMqmKXN9TZPTfcmLqFqnWFySdnPP4vgxtdthcmGCw63fYYvT429qfasa9o9QHDtUdVM91yoysnfSfSmX5",
  "key25": "2LDknL4V3ZvcvYUw8XE78CXAMkFJP2tRk6oaRAz1iXNc8zwWQnWAEi2C2DaybMRnQzR9sWggzkUGWwLnJw7o6jYJ",
  "key26": "3figbDaoJouii8Zdz6kq5yqYzYdYbs7SUrZks4VaHy2HQ44MKkZGJeynNNmbGDCi2Gin3G2srcKUcWZ6VCbHdFwi",
  "key27": "KUvDjUCpXtuUTnSatt3dYPT6NLKKvmHsLJvcWpp6CMgq1inAfdPBW4sbrDh6qUf1xbHBbNkXudEuFTF1tKSzeCs",
  "key28": "3F6eHGRYRKJwwchNnodiq9Qjc5XDjc6k5skzkETrho65hFYidP78NnLFoomEUwod7UWg9Rq3NYxP71Gk3jdtfyXy",
  "key29": "47MR94CvL6U1BqKAvibDSUkM9jXydtjtwbXVQoRFLBezfkt6fdyg4Em4srgqcAD5z5EcHEXAEnwx6DN6yFsbffXS",
  "key30": "2nmCo9ngty4jkzUfR1hk1Jd1dtogQshdS5eam2rCLbDASkvbDqDy6BLncdVRgoH7MEEnXUimFet7MoEe8dqPc5Am",
  "key31": "499f5qpnnt2SNR7BvwvLjQGdvnMQSXFg3oNLQ8JcNAx3Ax7yHvgPXSaEp8Myk2Ayqwz7vsrVVTgznepo7Mf2hNpe",
  "key32": "2b1GPXTCVWAdZyoULiEGJdYCZDEJWYuPeFkHNmgoEztNjpw5bnFwkaV6QR3dhvPsK5Vvm1nCg2inu4u4sdNdSkfn",
  "key33": "3nmhq6nx5idWzQbiXPj7NW3Ss9Q4PJe9q82FB9kr8VYNRVVTwZ2UPoyA7gur25bEMgPY22ghRLnG3Y8wUYsZSHJZ",
  "key34": "pLkdisUE4uR33wdbpWQft7W8T6PkGjqi4CB7y1z6s8bSZvUoh2AeEv4NCWhberkfaddhgQWcxdeC6XyuPqutNP2",
  "key35": "57YwyKzHikU7Ep98gX6KXsxPmhN3swrV92wYgcvEufCdp4Laas3daftWWKLXCYct1CL9tMGmwKfgJjs7JDTVrzVB",
  "key36": "33vkFwudjgkPp2N9uBD83gELP2ufCc7BMCMsS7QB5RAM1JVbojTnsaNZedpgtGx4mXahJaPFwjgHNNokjhhwRtZD",
  "key37": "3UTfVKE3yKzicf6QZggvdpWotJ5vr4KmTtLBaJ6nYafUrpUQQoANVwdd1N5MTVXoZdErRovKajCYukZfJxwkgEJA",
  "key38": "39BDUzF2KjeRRCyHeVeCesuh3SGbZ8yCi4dwyWhiWAgqx6KTuTup3SYg6b8dofeeQTrfFVci4Y7EPcKWTiAxPYwX",
  "key39": "23AENuWyULtngqvTkMZzSSG9r4E6EoU8cxXxied8zmtvyfMJhnrSn68PnbqXHttoPHtD6cMFVoNXRA2rVKKr3ddH",
  "key40": "3oF8ymnA6dsMQByXwUqDJub6L9Mmt5FkQTSm11yCAdEQiKSaq1jmt59fQi8m5EGS1LiNP9E89rM6KHWq96T9EvD8",
  "key41": "4hsV44TybjHD33EPY5F3ZBV5iez6jzvgFcknVaacQeGqFmm8bxEJKVdTVb5AYpwYUFMWTQjrZMRzXmAjk1zTohti",
  "key42": "2wrzGZCbSNJrsou2TtoEsF8LgE5fNawUjm8tWu99Qsyn9YoSLJkpC4VnmmdrRa5cySJX4i49L4GQANTQw5gUjM5V"
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
