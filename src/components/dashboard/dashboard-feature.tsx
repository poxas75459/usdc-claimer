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
    "zxoN6L54wxPxoGgNkWssYX6NkRzSyW7auabgH6S8eW6aGxK61GfiNdybWmR73TRiPWRfDpr2sRhHyzYqbVvmFov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aJ3Xn7tLLrgNqYtNu5J1Y7gUVfbpjVqpj43CJffSpDBFxxvnP8b9VBjE9ybX56sTYxcKSYXH6YoJ1soSs524rAk",
  "key1": "8N7mpsFi3nifjQ7MMvzhdvxxThKzcH8tCmCFHeBaje4WNu7R5fKQXvwaRBUHecHZbBbbEdgwkX6r7WK1LV9hYZX",
  "key2": "37L1Ua4pd72C61qemTuiDqm1Bw9ouydXgMYvUrMms7BxhomAhahG2a1zBYMZ6woJhMz3AQBm2F5t7J884MEXRkHw",
  "key3": "2u2N3aqwL2vKAgNBiXWVLnLDndoz4VFxDTtZCWtVZf2gfPXNJvxy8hwQ2XdmRn4SikHzNf7Dc8hm2cSUdvpDVAer",
  "key4": "5bJgQRRjwTykAxpn57tPEuvEY2bRona8UesxUQ8Q8QqEH9bKJYiQ4oEQJnLykHhUfKAjsgaz1iRkFaucrt2cuhAC",
  "key5": "WTVMSfV3kvjjnPe6ruv2WoTots8jeCWtqPAoZAQedAA4Q6v2GhCwgLhpfj3ixpBXpRC2SFoCHXw14HXugVd5K71",
  "key6": "5ToTbvXF9jzKCh8yNGBgkX3kkTVhCBTGasDbRopYap2mBeKRwTCVUYgXuzWLfYpgn4Fz1fGaA2bUntZgYx4dipBy",
  "key7": "3YKCT1pxDUCCeEvyHUeANhi3VzRRJ9nHPHmaKvFHjkvpzqFryZfy3XZDREjmgF8uvBnVx7pfcxNSYJVF2WSkuLMQ",
  "key8": "1hp4bNHafxfhrrEc4xEdeQwWaczESgWQFmj8X2NVn6pctXozwZx2Nh1DSB8ZSXC1szX9fd9tMf7D7yJjXxDc6H",
  "key9": "3hTtX3sc1XmQWRAFPquG4Hx8D4HL5PW6Q7uB5a7cM8NNpvYW9qS3HHaxhF6zZoiy2L3Jja36xCrBUkzd6nzNgqNT",
  "key10": "2Euk2PmGyFS628GKNC37dD3PZsAtL2Hh3hzo5QugN5A6sxGMsTkmDLfNCk3zcaYy2cA8QgSzJKTtLdwpJBEsyBcN",
  "key11": "2fMWhMo4Lb9eiYkNFxSpMowdrknM62XvTw1hjvrPSE18dUwTjcnBtkHmDgFyimbxcnavUi8gEC88FDGxbcnVM6Kb",
  "key12": "HYtZTccWceVgLhDgKhQmg9MeNLwmDN6NnubkoD8sTitnTAHPAyWdn9Ys8nXaBuYCKnrpgVmRWsDM8hUrKzwiiW8",
  "key13": "44EoEKzDiahVhUz8KgLEFB2qfSwN9e5VrXXquvg82XXjwzYxvwaTAWWeoA9ZkbbF4k6V24sYMdNUjWUY4FBwZfKN",
  "key14": "27KCqk3ZkVikcDyUPECBGS4rB6gnD56pZ97rmyUWFUtk31keKwrWksdd7iaeApPjf7btuMxeQZen3gfhVEgGLvWi",
  "key15": "zgoc5x4ja8LewGS3SfXCR14cUHZ63ofMkpJN955ZH2irGwJN2coN3HgCZJSn75Q9UfPJF6Dz6qv4n813QfPvTfp",
  "key16": "vZaCD2y1ndQVCchmpKvJUakbaFR21ykFVA26cGteZoY6awbPzXvGo2ZfxoCrv9Uh5EVgrrHwtTapwpEPuPeWULz",
  "key17": "5fuik9CDcsLyHn2fzkfeTyGWSe69iur7fEBTNN8iGPWWibnN87ZHsmu7qGbreZnTdS56m3kkxjGfQ4m83q1T1Txg",
  "key18": "54m5SFTCaWBFbY4doB2hz7ajygEGQpnRKDFXswTPmfbjULXc3nR57m1Ra2B8hvBwWBFArE9qKAVj32UFELxtF368",
  "key19": "t5FUmApvq8yA6Tsa16Kgq5ZU7k2ou1rMcDzb2eRpF4xk3e74r1ksTswAxyru9NHrUNPQBGCaAZmNVGBSoGYzNzw",
  "key20": "4Z9HX5Sn5WjgV4acSi56TVAtiV1G2M4PtRJWEHrKenWxUzDjGmpQdHcsytpZTWQRQvGLovssp5ncdmdVzwk1gGWB",
  "key21": "2NAGGsAyCGyAjkuU9A4PGz18orPRQFbmPgSwqMtbE2xHWGSCiTNbKtfAjmRDp6bQUczFxym2msMA9w8jSwLw4dVZ",
  "key22": "3252uCeWUSpWvwtRPNDpaBqPd7cVybTTAV5vSeCcyGRVuz9qfzByKDR4ysPwTdRkak2RKUZKNA8mtwKp14PRKCoA",
  "key23": "2AMk8m3qSYAFKKkiNF18PP1dBK2hXPdyih9tVRKzukhV6mkDzVsWstLTZx4GwPDzgEGjJ6WACvHfP2mWTU3RRUNg",
  "key24": "2LF1RXSzYpqrubMrwLegK9tEoZEgvE4yAHgAh8tAaBwhMVEXk2eXg2NDpDG1LW3pQeDxVTMkazJ9ZFkoJ2sav23f",
  "key25": "5Eyv3pTeo9jc7ZCLnAZ8r9RbmJpj7n25BawHYMjX1LpuT2Qdb28sjeedGiazgiSC4hYTq4tTqB1R3HRxhVdaAVhy",
  "key26": "4wNnktTpxCWf34XkJECyER2s2cA4xGZfPvAkaeR68mPjNdrrrC6sfveC3WJvJGGNtBzrRh8qJNerntw1UQPDtVBj",
  "key27": "5bdBBBLQHwB6QkvRuGpLQ3gxTTPiLcYgxfTEtZxhEXLvQoiQYZedomDqipCRY6nkCEfbsjJLPaUprFR7mnYWo9yD",
  "key28": "58BzkuTTNdu2ZBGkgwijXBeTHYyXjcrAQMcDbYyjobuCqHWSRzj55iNudZUKwDYCaWrHAjF1jyKvnB2HGbbfs56Z",
  "key29": "4b1LNUenPnnSs9zJJpHCkVo3e7PkiJm6xBkV533J2qGkNAnAecvKZSP4gUU3BP4hBgj81MbVoU4Vww3kYu9raY7Y",
  "key30": "5MEsZFWjXgh8bxEFgYpzLrrACPH5RPJKG21M3DYjEg5Rkh1z8i3VguDwLAXBJK4G4BN5GeWJLUKCkyX29DnJUopv",
  "key31": "5aBC55GdjW2iiDHuca6YM77DN2Y9HPMdhtn3YwpGkwRjzTCrqDn9pY5fs37ZvAx61vZXBLrr5mN5p6hLU4oJ2k2j",
  "key32": "4raDhNodj9NvWidchBpNzrkrZCySEP6KBNvekGQqvHZpsA1dFdAXc4TtHQyqnZomBVhui6w4jiyhMRbxGG6kpJ9i",
  "key33": "2YvofdkXNw1FuKhHntRteR8i3ueGg7oae1gRMc1MPcsarNVvfR1QgS2iJuj7VaDXoxeMYKKtP26S6sGNkXnfanQP",
  "key34": "3Uja88vKuPf6UsmadPiYTkESutLHzRRDY88VK8KuXaRNCCEaHt23owAkapzSaD8QBWkvvT94S3pWJygpm24UsAat",
  "key35": "3mt4R6sX8UCdqyRuCyKi2VWfCxojNGdxQDBdcZcrkpu3bsNghyZnNC2qTeZ9GdLmvwnziGTdXbxaRbesdyjYBRKm",
  "key36": "2uZogTBFWzvb7iASK3dUou2dHbLz19mdHdtaMFNvp12inGiYtMfwdRFmQukFc8tUcioU3TS4TbhjRTGX3ZkvXJ3o",
  "key37": "24yYLF6GobdtuvuwtgEjb8R1h5nsinXdkNHz2gnMg5ionbK8EhidSHMddqtqzeDKhkT1LumWb86nQ35GBCRRrf4q",
  "key38": "4Uh5TecT7TuLfUb2vs1jdw2Rcz7g7DmoGAf65VHqkXMNUJHRjLSrGW89pGqgX76Y9eZedyjTgF28yrwy4A2T7WtP",
  "key39": "2nZqiuJrYdtntZqgyJqD5p82TAVZeM9QW358JGBfCH9DeM7nEqpXthiS5ZBYkMm3rvkA4BkDY2S24SCcU1DxKEPt",
  "key40": "38vSVwQjSRbgGJd9jhsTShPUrx1EYecYs1ra75fPV3yUJQKyyEePkDT7d5DNPaPgYVGyvhSqmMdyoWrUGfMJYBQh",
  "key41": "3pNefLZdpDK2kXjdvX3TkJexoccQT5twHEWbQNKwMZPzG5siT9PzVzji2hF1skUPcqR1iVgVccG2PW6BnEXvM2JQ",
  "key42": "5u9HumpKYy57pQjv9o74VA76eY8WjgJhmCKrorKKBb58JqpK6WrsZ8EXRiLNT1CeBSEZojLWZo9zZAbdHQCsxhsp",
  "key43": "Fi8pi41Y5kPoNGoLfqdFTkGFs9Ha8Vno4BVzf3roy66hK7kYuZwNeTAQmM6hPcsHsAJ4DeHT5UkX243ErhgfKpq",
  "key44": "4PGL52ikJ46ZtgdvwB5JK6LFGUAqiPBctrapuhaDmDV8jZjo45evrriPg4R7WNDiG71rcM1M9p3QdrLtVzz7kGPg"
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
