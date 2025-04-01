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
    "yNpDUTitgbV8v5ApabDitdwBFw24BAQDpr8ZadacR7ikKmEDFQChPPRyWdyeoxgByg87dZactUoV8j1kyTZ4twc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i4FGVhBrHiEpTxooA6wF2cXX9Xf62vYjUQwyvgbYWhxoD8UXnNcebXqACQfFvDe6tuiaRhjtiUCYBigmmTN92u8",
  "key1": "5KdWjf8AUyFHyzyiqPhLFYBwmosBjSE8uC4a7bHuckMnwzeWLLjGPvfANyjoX7XbqECsp8W7bqmkUUbPWvKrxy8k",
  "key2": "5HE7NJYyqZzaUE2cVMFXAJnYJT9DE8ufJ2FRYhtsJJqmu18929b4AvqrHy9dMkXZYYb77baFV5RtfM8B2DTuUP55",
  "key3": "BQZSyKRtauZbsYtJrEDtsd7neXhSBXW6Y95DYy4aoWYNUMSNm3iMfTsu2emAFQDKkn2tTQJLTdJUJy57LvXgjx8",
  "key4": "5nVRykSqGE9JX8KtAmZFsUpTmf3ZMA413hDuc6r524G8ULoCZs4NWuudhKKELSiSuUBwaTs3fKps3fDK7V6nNzVe",
  "key5": "348zJ2D27KMu6qoAi3iFqY85W6Vt46FFyAwkfdXU319hE2jab1qGuADwB1ocFZUjaAYaGjfch6oT97GTcxM7rbD4",
  "key6": "4e8KT25NirGHLPEyb1x1a8csrMxJx5hkNfuZ6XUvNLQpBizWZSti37nr6ToHyKqSdRyjK7Uqz8JDHGBvRxwCe2CW",
  "key7": "3qANFjizv1N9yfUf8h7tszReFDAaorM6Tdi6KTMQULFx3anPRYMVeDLGGVPpmsw2wvXghPMa3p1RXpWYFGfbk2Ve",
  "key8": "2s89knthdHJmEUqSaLAawSDB7rBhqN6AaYhsGf91331odxdeDpGiPJnaB8FYA9nYyYeTrMwFruumercJoeq5CARX",
  "key9": "3s5EQhVoVv93pGqjNKUgcG1MhVicqYVz2t8oRCjx8Lsak22QVMAVecR2b8DsVNWRTtRqSzquMSpJUKfR1mA26NLD",
  "key10": "562drKE3WSVuwZDAFpxmX88EUKfW31uYSJyv59a7QcHyNxxMvyVwnDvN349yUn29VTL6Paya1ZAmL2chuELuLJgA",
  "key11": "73KoqmTb2tzKLK3wgkeh364eBCxjVLnAdBiagrTiubCBCSBbiPFX4bRHg9oDdaopeornzNMk8Xs72y3vov3Win4",
  "key12": "p1xsuEA1jbVmxASHcy6H1RrfACvbuZgRdbqMu5nrwVmryLV6SjkTvhC7d95Tp3d4tjewPsXDo4qJF5jWwbcXdvS",
  "key13": "TgL3NM7cCRdCJNcwQEmGKmE8cTPbyTpSCoPV8PS55buT4jaz4JAMCuKtpAFZfqEeTtPBFE7saPcBNWjXKbYjMoq",
  "key14": "2ThHQX93oJoLqoMuKUZkjcaoXz6TWUCtBMcGotTHHnZX74WDaDVFXagZdKhGin7MJix7tzyEJv6TdXnMhQCUyJ3t",
  "key15": "2xrGKwrJ1kCgtkUipRxpq38zNzGFQwMdsMVH4vh9Zzbiw2NmABDkrkasCoWspYFMm5ZpqWKauAU7BDm1ZfyJwbec",
  "key16": "25kY3qnVdVcq8f4aNLDAugFCqLsFGyX9dC3z1tZvBngfyc5WvHpsdwyJ9LW8vyPqX8V3SD6TgiUGeSPsK64Lkj3Z",
  "key17": "3rwM1YZZ5ek23YLdoiMUPFd946aBLzhY8aVM8VYqvzMUdQzHgUjJfyqJAhRj4hJFsQCycfeW459s24R5gEMxx4Sm",
  "key18": "5Cfc6dHPK35Pf3yPKJnWWxw1RwbaQ18ruxbrYaoGDv87MaENGtXy4xado2cBJEDi552Z887cVTsCYBER5c811PaV",
  "key19": "34pv9dbMXewEFEBqGZXo3SeYcdZqtzv5mwc6wVSFPNis8kmZGceuQuksrfFDFGT7oWEH8FwpKqxoVZnzUzXVbY7J",
  "key20": "5BZ9rrNJHtatftPrK952ghSKWAbe52XkoNv91Dk1rWWrLTjshBbhQppmzk7eYY94s4wTL1C2SvRjiWNairf4aPTm",
  "key21": "5PhB1HdWrfv9rtavfdLUup1RRQM8GyCJZGCc48ymd4XydE4nTx7CnUsPH7VZQiD7zPiu3bGtcgP9Gy5Y5aoKeWFm",
  "key22": "3usSzmyuR4EstuA2QcK5ndFRzwpvRDTUz785oeLdafdCLB6i4HX4nQXVM29ggX8PZWEiiT5eSW9b25xJST8TKVnk",
  "key23": "5RSdGQ81GCWFCpKjNX6P2KY9e3cvPYJaCv9NedBmAA8EKRJsmVMUKHKELoYLh1QKv4f4MUnBkoFLogYwXhMHLFV8",
  "key24": "5532q45iiDBBcYVjs6rAEKcWVPrEreLCVesxgn5YX3REvxTysLnJCuCLf1ZSqUaJoGUJ5s9pETSjG1FtoJTR96vZ",
  "key25": "49wHNCTQvcpJ5hNvmtvM1xyeVJAvisWkzvGcY9kTn6YUzL4UcFmVSVBSMtKqBDz5ik2zL3C7nkumgU9PQo5j2Bu6",
  "key26": "4imcdDfHn7eqikDWxHjbJcMRX7mhowbXya2v8JoV9on7VFRL3uLpbJMCTc5NHXkzEN78peWiXsX7UhtbSRba9u4c",
  "key27": "5qvvK7nUrK1qrSr3NN9ZJ1FFzwzpnL5ypxzNThwaZ9c2QBzJrXL6tkxEwMDpE4brtepMT5wbrbcCpMWsRMDRdstC",
  "key28": "fucDGM7EL5Q1gnx1yvF9jFWnKEftSqQsVuhUZWwprQYcsLgKzreMem2N1SWX7i3GmviF3ByeybX4aNzUpteDrvQ",
  "key29": "3eCwPkMwbuUWQTy3tq2WLCf9J64YdfceLBZvYzhUn8keh8bbyhCgsiMbX6aUKZQHDs3ZLJR1uKidWuUiKm5QokD2",
  "key30": "5qY2UnPRGw2gm4fnr9nCib3ujd8qW5XJARkiJcPorvcBGBKyxvUcxYAZqE2Zv7ySfody8Z7boDh6jD1bgbJpAhwy",
  "key31": "1tRfYpxM3rKkFc2dH4VyycB48noyFLjPbr6gUUTqL8X5dpJoFCCovogP5SiqUchwFULQHM8QTpXYH38nDYN7kLz",
  "key32": "3Dxaik2MCVtb53YfkiEZmP2k59RTMhFJEceUihKBnWkzLhKh6kMvETgyTTYcH9DJ21hCFx4zqgsurKGysFSpZjfP",
  "key33": "4aEHtbe9JbUHdxWUqPT8qnmN87caKQdGJ2z4rhBzhDWEtiKJWEw7DCMDD9EMMeTv9LqJzdN8S5WDqjfSy89JyFyD",
  "key34": "3soboYYAc2eE6CzCjyDhCZotNfPTL4eG8eMjbDjBFGjFVP7L9Uh98DPNiK51Z5x639vMsUYVnZSsKytRUGdQKZar",
  "key35": "4yP3XLrezKjFo7eBt7bcD3zrNcx3cLKb84eFSX1uNe2RpgPHmuYzyMZtCsXF6tPxnS52ju46ZiJQmijJSn4gMHEf",
  "key36": "dzxuMPtJwK8Tb2PQkNLpAs3BKVHGi4Tat91Eg6VuDDcoi7DgDywSUxNbxNouvSzkRkeL9bxuQPUcjowuXspeD8r",
  "key37": "5g5SXFFHrGFdqcMbvRNjEfLmLfLSvfEsijkXEkX8tqyAVag8TmVVYkeTGE1pUkVMq2FstVX3WftMjQ3r87bZeLjz",
  "key38": "4kNPrUZzJZRo1AhZpJYD7A7AhNsX6VzdVxTh4wGS1qxZncECXNMJzxmY3y5PMRT1wyrbGtdrhehPNRd8cudaK1Ds",
  "key39": "4AxP9hg4JTwr2oCmMdjWSj7pWmx1pgQraAR9hq3oxTsuHQCfLsaQRq26QoVFzSmyeS2mA9MtJBnSjixXJU2rzKD4",
  "key40": "btaoSewXZqL6KSPEmGL6hKy24ssCE63scYb1TUCHXBkjeXbkoKFws55NgDwVnA5WmFiVUbHK1CtZ8fo8PLRWXGk",
  "key41": "4CqA7qB2hbqubok6LKJdHT52NqXCzRdPGdmCCRa2uAsCUqazNJkWxy2oc5QCiZtzobsSd47DdDyjaeuaxC1svXWc",
  "key42": "xQ4vZj17EYaPhLCW3HGdgcm5sbsZ2Sac6htC3mGxH1vWJCz55cVtbdqL4PwJGC3f4UFh2rrfSHoP1RVcYw2n7jG",
  "key43": "5sy2mHX92u8xnwnMaVWUAe89yC4C5wb2dwmQnouocVY1z2N3X2pz4sQjCtxHbGUFqBegAE3RoxTwxueMAAzZh9U9",
  "key44": "KdmwCfwKH4MPpNMM56EkvFtCBuyK4q8ysdxiTjyXbdhnTyMeb1ojDAWmPHif3txg8iU8phXV4E1JoXRBdxep13G",
  "key45": "ALre5mbQHCoexycffGAkkb6BSQ5RTnwGhMS7p7QXwwx7jVM5VSPeno11VsMAf77k8T2F843sKL15AgLuPq8o68V",
  "key46": "3G2Hc8VDjDCsb6nu3ro9aPB3ACodsGRRXXBqh9JC8N2qxgomDw5cQLcbmUtN9kwQTkrixtvcxC5gxJgXWzDH16ND",
  "key47": "JskYVSNaBmLxYwcApFKNZ53cHcqFiZTzwS1JUqiY1qGx8sVEJdtWprWyM5sqx4UUeb95DNgfZxQ8XP7XAZDLziS",
  "key48": "56nj4xP8cYkycMtauTNEYbthfby9WkhpLh8h96Ce6V4p4JC7t2CnmnsWHy7q7TDPNmpetsai8nSWkDmMVnJVBkxg"
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
