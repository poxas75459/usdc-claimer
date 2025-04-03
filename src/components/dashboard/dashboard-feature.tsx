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
    "39Geig8BkW447nhTmBHQ6qp4bT6jHX1jgvFUw3rbPsr529CnfYLh1F8yvqvpVfTeUrgFQRTBoCgx2fSygf5fMxCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PP6mrsKsKqNTNLFqUiEkEYu3WpKgWgh2DSPwWVFNjLqNrzkoSd3Nt1HinwUX8HqaRd4hz4k8bpa6jQtsrGSoNZu",
  "key1": "4CfUjiD2y8SPfgBBkfAa7sKXRdqqPDKSgGE6MkKHd7LFMRrqEqpVF6fn7EKyQdaYGwauYNQzx32AA64yjjyEV8T",
  "key2": "36dhjG8AvnAGAnPBSo55gV5jTdTfYDHbzdARkzXrXveZwQMBfGWyJSdknhchUaBfJWeUoYjVtPqEak1SUWkKmnqv",
  "key3": "ccg3KdzuAdBVGktYhzKZK8kBgp3RRnVr9t2WSFHDvE83bXXP9H1qc13S3unhZZhni4TQdqF56Ac7AMfnQ748xW8",
  "key4": "zKzCyxyiE79ujb8958u2uzfPEuKibCzj4yr1pCYwN88Mvpee68fXTC8khuz9WqA5kh44ye7JD5t4T2xRNRsdCsz",
  "key5": "4HR6R8S2kffXN18sZHpv8chV5iUWnepgiokVLB89BhHyP364vjQA7mkSTLruTpN9pBw8UEC9UEjpfjVZdWf8cWRj",
  "key6": "37mBbbnXj2qQkXEsncedmT1VG1WEScaUuTYZAYd7itCvrFdRMhWyD6AZgRW6qkggR3F5oD5jSGDXQF5xQ1phUy6W",
  "key7": "3r9utp3nxCYHxo14nmDk7tPxvJWVHUTpujgwcFJFrb3uD2QnWfsxy1HTdaCjxvA8Ew4jDoxRa8jMdXLVQMsG1Aiq",
  "key8": "4qWSvYKhqFAK8QCENBN1VNBjRNfhEVekLHMou3bv99imbgqUPP1MUhZtWJMwKgVeRceG3QxqYoBdkrpaHH89CPov",
  "key9": "9MKrReeru9maBDMjDgDfxQLwSuMm8uSyMHVaV3dCv92pvUbMntrc9VFpBCosQV9gg4oraiVrrvAtvVatjAxZv4L",
  "key10": "2NMqrUtLHQy8cQLWdhK1YzQt8p3cF1ttnaZKsPQqVRSXUZNuTtu8dqr7cRkJpyUyMEKhQx1BngcpegJKJdFtPtNM",
  "key11": "iWiPTnbu26Gan5gJPNYRs8duvAWtnWTVmshFMQ5AYKnaJuPSuuFBxJWKeDFFkRZ8MjYMJodzxPdmUkxP4qtqFpa",
  "key12": "qTQQiEDvSGZWgYmRTwfRP3MMryCi65yp6LpTfQQwHbiqEsXGwVYgpZ8axk5WrZNq1vjnc77aR5kv2xhKYvCCRb6",
  "key13": "3GuF529jcEcucQUTN3t3PL2icBJVji4s7SM9V8HtPgNraR53gejFwaoxkucBRoqBB7KRU9CLgudoTWkCvynjANv8",
  "key14": "5HC8U1UwSJDR3QDHR1PBhheGTsNRZthbKSopFtzAkFX6H7sNRF1BAoXHXnCxt9nvzntuRkHWbYWDLiHvwYcoe17M",
  "key15": "ZzEn5v8gtDuzymNzrdSV9S5NKULMUNMK1VGPBZiUqec71BsbX5Br4HzFTG9XRGht4jucJEk6ZBdQTu5htUbeSKT",
  "key16": "5ZsBy2cEWrTMMpvKZUwjX83K4H356PczPRLtF9oznhWi7EeKYAdbAKf2LZGdhqsHp1VrGmScUGbsDzeDiKJ7i9BJ",
  "key17": "QaocqeDbik8bo5LpgmDUdRgbNASuxTK9ksFC15ZPC1aempQ6MPDRUqycu36Rta7tcacfwKuPj6pUEs13Re9Qj7a",
  "key18": "4pGBJCS6kmpRoV2vZsNKSZYjvup2Pz3t68WtTVYseyJbm25DbWRRMQhnYEZmET8xQV8awNZCWoLmarE12oV5mza2",
  "key19": "xojFfdZBdP4bankAhpnxk8BkqstTSb6YiSixuz4MJY5ft7Lfa5Beb5f1mYQ9vWXxzv3vPBCrXFPoav2ukzRkR73",
  "key20": "Kpn28YgQgQVyoCrUrzva4S4Q3M21hK9CX25V4GEWXfdyPPWUATCEMjwYqon1TtcmbZvxDZDTtj1t4CCUzsadgnR",
  "key21": "uoMAQXvnoxWqWUiD3dPDrWExGNK8iMdi2mPNQje8G8D9cbEzbPSU1hsQKvmNKK4SAMKENT8RPDBHgSnz1Tu8wej",
  "key22": "AzXHHqGQmGGKaZCxdqpPeWcKmxntqwQRLpQSjC4KjyiEkAStm5xPaK4xfm9EzyKGcVPrpvJ51Fmx7LCGd2ZAUXy",
  "key23": "32A57woLXtsup4jZJGczwpvqsHC27EP2W2XZwDtBxU7XinG8RustfFvtKNg6mCNpXcdzFLoq2GiAEGFys57kMyWd",
  "key24": "42LDLPAYP6vnHU82Uq4eSqs8bVMEAFNYEb83vnDbwbWsstjNvLskWLbuYhPbZb8JGVz2GKdXFdHqcusCeoyC1z2t",
  "key25": "312L1G57KAGh7sYykbDutCxgCv1eYniCEXuWN9VHxaKpRoTTGmVFC7NxDrgmLKrNjAbvrwbNSp2mpMsakjp6naH7",
  "key26": "QG72nSDSMoQGPc4cvVSa2QbtGvKXCDz2dFZjbnidqrcpm2aiB8xNCCfwZgnYgQv4C54Pnw7dwje39uGhUor3V3E",
  "key27": "qgdq5jeT8gLMJZ9GHpNSFJoPxc2AZwnyr6Ytgn6rBaztJDz5Q1UVPK4bss8VHE9PxANJhoXgEwidZg3zvqew6mZ",
  "key28": "47oGDDCXdRjgYg38bNxXw8ALuwHhXVKT5kQEkivKfN8HYChMvBVTvjs1Nzyxs6A9mSs3fn95jxHnHqyVv1T8ergy",
  "key29": "76pDQJLGB5nCKtuTzwbthHNFbHP7nKCY2FCpnCgvXCD43YcYM4qFsCnYiQzNNdjND833tAgNhVHYm9QBUQsbXxd",
  "key30": "53yRLp5AJGTycaYBtBUeBPrhu8XSWZPr3hFAGZ2EjUBrbQsQYSfa9YmFTNdpW2c8dQ6s3Z7ddNTujD3bYMiWaLSx",
  "key31": "5LkrcM67DUJ1GgeS9oQM8srysYi6HSfHnAS6HaNLvM3SjwcVuY58xWyx7EcwnFZegQZkczjRQGNjwtQVZkj4mfvB",
  "key32": "5xT4fAVppmMG6iV8xrWkTEHd9JqwmGYt9ce2vJvR2GSKRKbroJmsQgAeGxSKcpwN271MujmTzKBXPR1cMGDisVdy",
  "key33": "21w2s17EjkrrLbiVjCvCegWSnjASeNBMnLJoLkZSzWVygZ8qvme5ybCf6Qb3kUuDmQARNXhTP8Tj2poWUWFjd8XE",
  "key34": "4MVkbzTHdeCj6r4bm8SxAktj5nQ89ciaF4eNqc5GoVo3fiwNmubd8yLY6XoSVmUKnC2jAF7t1L78xGtaDaM8AE3R",
  "key35": "SMTwU4oQbw77uQhdqTizR6vVs3se4UotdxtdxJCmW9fuPBn5XyMpCJzfnmuYvwRPPhKxfTCXKQtURmzDUDH3WvZ",
  "key36": "2zb58q1QUg2DYiaF1Zxb6fiomXMienwEbBppeaAW3vcs6ay5a2Yd6c9uVbATy1z9YNEaCdnbxM3YLBbzE3asaBM3",
  "key37": "5RmwzHg3zbWjt3X6ai6mieHLGUp81oVJHKJLMFVcM8AzerbyP1KwAJNPFgk6YB9YZH9rfKfM92XkdaQHaTYbyezp",
  "key38": "4hY1xMd3cW6m5HgYSjoiR9erZQUrxQDYNg4fyaRYfdDHeqGdMaXff2dthKScjPm5dv3ruYQFaTYfaRqMvpYY2XjZ",
  "key39": "5gQyFwdueACj23qzDgJiGSMfi6Fn6YS1bUrHSHcf1UQVMoD55EgLySCLCyrxo32SeCok7oA5uQcNMJeyoie4rVFn",
  "key40": "2DgCzaGHxuqFGbJdoWiJLzFTom9SroTSncNy3T4bpjSKtyxJdM1szndYDgUf8gmzd13af9XuWypXUdDp6WYkumTE",
  "key41": "3s6GkVkXM7duRzaAqakoV3QW6Vv2aBjLM73wMj7awA3opPGDfNBmH1UQgBXeRuJaBJsrdELCXU1B2KwXaYFDZTyh",
  "key42": "64gBEQgjVrT2oYiZZpzvUNo4X9WtEpVStJme3DFCd47FwMUBdLX7ghJAXrskHCQiGfLSnTUAakHHFHgjia29scD5",
  "key43": "5dGRWDdKjhQwvgzuxej8c8nTvTM8AU5m5MLETufYCuo6ZyAhRgoErmYuBb3AfTJLAyqmtsH2oVu3zGFV8oCPRQDA",
  "key44": "3XjNzRYAb1perkoMBs3zuKaUXJ98XYC9F8dBSMXbRR4SXhnAK57uoEbdMHwNKyNBUwmHzkxsFzdBbcFu2UrUmN1D",
  "key45": "4LVkJ7SM4XgV3AXBGcQuUcSx1R6gye2Gc4Ebz7KBN1ALU7wHYYfCpHG499YrzsEDqcjYjnhTQYKYAiJvWhuEHC6x",
  "key46": "3jvdyx2PD6aLmBejvu8v2DpcHYTWsXzFVqMsQesioKA4bL7Pbezggbf5fUW3u1q6hku55WJdCaPxcrQC5D9ZqwTJ",
  "key47": "4h6ETyrbVxBCnooUTLPBgtoY73Uk8qgYyu8oeP7CRcTompa4Vt1jxeqrLSNrnpoP8WWrkczg3cfw268R5DnxGgRR",
  "key48": "qrvkdmHotX3uEautCe2QcPRh4gGMKDxvHVkffrBr2C7qRAoTnRBFFcsZ4FNgK1FeVMVwLr6y4TCbCJJPPBQtvUX"
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
