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
    "4x91eVHgLxcBNTiYHADMPzxoFXy3kUgk5DHo1wcSPxkpKM4ZpfpYszPc3RwrvkqNbfV9QmzjtkMd4eQ9iCssdsAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7jUmp3fi8KhEHfd17GY3LYrVp16pPKrYtbDi9piJRwgTz8tGeBhfbPEs9VMoJfTiGHVNJ2BLt4e84kjcnmrpcCU",
  "key1": "5zum3XPKLgou6o9hFb7L9Yamj9zv4dDprTny61P6xfdJrGfNRzkZ5DHMEB5UwsvpXm8vkuNRLSN6UYRjF6tr9kHi",
  "key2": "3pnHhgED9ESoc8Q4sLYYSUhXZGx4xAnA3szZrUN2EPqCA8F6yhsVGJfvDEUAvkXroAc9DaA57cjJT1w5fPn5tAWq",
  "key3": "3HLDike6Yc3yAEnj6zryh5KabWny5Fd52WAP5tcFbtDfjta2np3vrd1LAciuLQrgiRuGkW3y18TyFZ2QENTAgrY",
  "key4": "4hYuWzrf4eZgTxj3PTemRi8jnhj2m7WxGstZojYopxiWL3ns1boQxHCVoz3vzXok7GsnjpVaiTS5Zvw5NyoDXLPM",
  "key5": "3MkNMBr6Jb9QMBwzvN33TvvXuXr2L9gjWVXBwc3s5VHAdVwkHdx4JBaoSaTvZ9iok3JLnBxarBf7u4CjvrMNvxvL",
  "key6": "XrbiQJRNcLQ4gw4SAzUNTeVY6oAvBttShvC4oDadF9gjTBK5UAej3wWXPL1KefZNDn4E3rpB5RAFnTNVVuGt36g",
  "key7": "2iyMCR2MkbhrQamkAsGPUJRsbrxXo8TMYinv37fx6TsA1nBRQ65P7aPc4wkGFWdKWCVGJZ9o867VySGzW7UwM71r",
  "key8": "5noSdjwWENtTJ5PmpGNTtvLJo2r1a2VxBESFwvpgfG5R3zb3E4sCDmMNTMPdpKqiSejbeEDZy2VJLbTCGPpRpgKC",
  "key9": "pg6GV1qFv8Ze59LirVKhNNgQPXY4FoAVAMjLAML3v4QBsWR4uB3bTK4CP82iP2YmKLkoR4SYE4VnEwfGxKVMPNt",
  "key10": "5xsPDWPDpVmMD9qeaRGS4Nyt4K8K5ahJinF2Nw8RmUPWtmtvNerJhkPywH1KJtc9WxrVKSPHQ5AMS9wxBt57sNPv",
  "key11": "4BkxUXZfcLHTZnciCVvDhuhDFkpwDiBpr4Y2JvC2EL4GZe5der5YywqKparpFVJcX52bQUQFbn8nHCjoV72cy1UQ",
  "key12": "45572ytgAdU9swt36mU8hLGd6bDrEyKiJonkgWPa455wxrEoPG87j4eq2akBVSzUWqX8DaaXgjNwKj19WiE2aCGg",
  "key13": "598DVJVc94vpYQC1Q7xCLYBQUJSsyFXDC15zyWce3VhdNbxvHemsuAv3ge17DmvV7WQuCTqhLo7qjyeTVDBFUzbi",
  "key14": "W7ptZtMwmvMtnMJPxBA4DwiHPZg4QpvQiAb38ixS9Fpttn6aLVLUaLDyrXZsVNEEbsjUs3FgAKTnBjuKjhZavDy",
  "key15": "4uwZdfJfqabQ1BKoYcfDDwU33KLyHhfiaNAnB2ojZPfW7RJRskm8ZHEmRVAtwE7pQXhwmYKUKc2jFiGcxdVa5Gq8",
  "key16": "3UsaFUrm7UvreoGFK2wEVs8BpPwt8M6PG6bZt1Vd6SoXBkn7rekwmEjnEwiz4EsapNqmJW5zfjWM17krTxSYR5Hr",
  "key17": "GEVWGco1rnBAp7XeH37CHvqxAQZsRHwLk4bMyR63mmXgMYXCrrfAi3DrzKYeNwYesgFiW28cZAVx3VCT7gGDTrg",
  "key18": "uS5PLEwTAfBtXDpDMLiXi2RNEStjvKXp8oexhwDbn2vmx9JGmfQQtWBJbrPh3Mr8fpvvUgd6ebfjXkJx7g86Pev",
  "key19": "5WKfm9QKKjgHKTc8KxuY7J3zvXvCkyVHx9TytWVvkKkEyq2eE8AyPnnrtx5VbNugxKGJcrbMd7siwLPqhDHhqKY8",
  "key20": "3ehmsskzo3XVXtqxmbV8gP5dq7BiLSpiQnAPHgjZnQbwkxEFut4mjM3diQ2whjjdyiNxiCJ42smWqeqHDCmbRAsA",
  "key21": "3DBoccZ5A4KApaCud9hCGaGRTeYR8sMX4TPjGx2B9HCjNPVgmRLcFJkt3VRXT8wAbbXZBfhKaiavcnoJRMLPjxQR",
  "key22": "39BKPiucwo5E4b7mCBVCCkkTgcxzmpMhS7tn9nozwY5NjWLNiFWsZ6j76fF3Ch53zmwFxtVwo3SU4qQLdVtydP1c",
  "key23": "jy4ZijU98d5njFCn2Jfjrh5Pj8F2T7tChommrURBKLwKFkw11WAeTNpHM68LoWH3QNQzJvGbDdzsf5ZCxLjT6FV",
  "key24": "5JNUVjTN4LfDvqeuBxZRTtgpd7mCJqeB1CPztT2JMY11azaWX6Qd4sM9GHega5ZF7zFmMTbrQwpCnDhmeFbBv6SG",
  "key25": "4rbDQEGNoipoKkgZHSSjSsDa2rJCwPtayGCeEW8F6ztrQqSqMg3aiyCWNk6F6SuShyEYsFNQ51ok1YKUW7jHuH7V",
  "key26": "5zXSwYJNGD96KM41dnymx7nV8LpohXp3vf7yFeY4DyeCUECngmLwJN66RNxcVyBBYaBbk3ThrkGLPdzLPjWZESvV",
  "key27": "gtkmXvx9NEVfWRvrPCubeqKqvKdrkcFTMhreo4kEHpboQQAYtZPXaqibipwu4meCQSvrrBV6MULKo246gPs1szg",
  "key28": "2g6QtnxvUXGPwhXFfxpuH4aQSqh4jVqSxvwpfuysGhLEDgUELrDnBRonJZmcoKWKMFp324R1iUmti6KaTAir5BJw",
  "key29": "3oJrkG1dH6tP7yXmHd7UESaetCHEtRoTqhS5iySkiNNRA6wH5oqo2FUUkLzABCy5YF3ZLjpfj39EPopMzTSbQLDW",
  "key30": "3fUQPaRbJ5AiVwDJhhEdXLsEtgBZrMJhmVvPhWvWRmwRfogh2v7oujcLrCRqYR5QagGRj1a6FcNYjZ7Dkmu9mfG7",
  "key31": "QNHwYDNeQnLwCoNFE26W6STCp32hKeRDZm1rjw6vK8jU6VcQTGuLB8dyKugbqiNaRvdcqQGXZq5pidMndRcBUV4",
  "key32": "4sVZ7Knihd99aacQsVst4BNCPTedMdq6MfJtatiXvJPaNmdhuwXN1deJAiiGc1zHWLj5BzKCKPyQQxZHkSLMRAZV"
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
