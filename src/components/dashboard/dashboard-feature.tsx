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
    "UcTLeWbddFFEgQ8kb3xJzm3VkwKYUoPB9pUNNZETauL7rxAMdXFwzdh2ueBTWE3K3xtW2agfeqUDY5KiPicRxxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uyhWdTQ8kwnhKioWzUVQwEXuvkNJqc6jS2e1rZCyUz5QXgkHzNTXWBJ6XczXHAzsYBbd7ZF58mT518WEcWTZedD",
  "key1": "5EXMnzL7Xa2BBHymiwQUZAEioJBx5ik2h97C5F7n6CZSMkQTpxAMu1w6iufhWzi4UGhUz735ScaobM88WyNaPNcF",
  "key2": "2VB32MsoZUZpCDMAC8AyhsM2LCqkQTHXkAFzTYvcAcUVfmj9S1wCdU6hfxFmzFqYiXqkZNBT8VdvLKLBo4jLdQZM",
  "key3": "3W1qDnHJ4PGWTo7FCHysUS93fnGPNPBgH1pbdumEdxQY4DPPuvaNMP47WsF1bHfozqhcK3fikvnMYCfgEjbB17n3",
  "key4": "5fmDo9hdkohXem49StYQQsJJREYkVgPeU2n2RLR6hs3suEXnzkVdw1sBMJAw9L66zeBjbYJ16YSqs97j6PXdPX4x",
  "key5": "4utbBL5NnfSUKgYSFh7WfFKki4T9R4nAiazqL1TjjxpHGnZTWSMhf3igRgZdFYKyvgRe89FLh1YCGBbMBSFifrXV",
  "key6": "5cg8qUkGt1dsNTTF3Yk5WwC1G3qwdKXVPb3zGU9GGwGvyiqDZ18KyhUMGouoNeB8W97ZLXUh3KTL9KsMUfmYcfJQ",
  "key7": "3v1HU3oznNDvW5U6bwMyxAkTsAyEmcfJy5cJjCaQGBQtN3NNiUx7tMDybXiZEWGW5udp1SzsEbuKkZBB2ug2PmsU",
  "key8": "tioHnew1C158rix9ra32WmcdGLsJFYfBFTBbuhoqt5gHLSQGTMAaovFwmkCUqz6hD8aqys82whvF8UYYfFAb8Gk",
  "key9": "2btj4e9HyUD9GEyf6vTNEFPWwN29vxNDb1WGvAwy4hfG3nYdayzBTuj74wPQmgbskcCRdm4umEqTbMR6njj7VDQ8",
  "key10": "3msHcp5CTAbbChp7Mu6nPedadS3ingX9qv6qZPWFXL7ug69VD4FiLWhr31DaL9k5WvhrBZV7QcZeS1KiPJhZGbDX",
  "key11": "48UsjvsgUaLBMAkLmJJcwRQTvYjiNztaZxHCUmw2GmiG61Eh7q5nYP7PQ4eV6eAeN7ZHgciAh9AcvWPqujsmUZwe",
  "key12": "24QKaFanjoALdsjkAapw3rEnQGx1gHiiRmpyFZjtHsfhHwfCv1aBweWeHYecajzyfsMrwgR3YM4ig9xP4w3rwR3e",
  "key13": "4TQumR57NJabDsrzScfDoUJZbAJduJA8ADUPsD8dt17zXeQkYmNR6LQkgaZMpFWDWktzq6Ax4sWBSx1jL8AwcvKN",
  "key14": "2voYArpvWMKuFnC72oVBKQASTUh3vt3rBqpzUFXWZPN6EtnmCiMSAcL3G5qFRxPJXaL895xnLXVec2JrbqkZjuvq",
  "key15": "3s4hPMGRhF6idqa4SYKK7tMExSR2UovE8FuC81BQHrS4NfogdThvx3MhhNyK1GG1qQaRXYXoD5WsvhoFDTNcCNzY",
  "key16": "aTQHvmw6V1ZA772zJjz27vUeDzVFYosyz7Xq5oLkJkBW1dApHpoooTKBaA5HKyETbJTaBQqmVYmB1K9aQa6AwMg",
  "key17": "3oCuUW69hrfDgxLyNeTes3TtM7xhG8c7f1e1FfoVnHv7Dp6QJzmN61PBVEUecwaKGwDo1wBXXNFDgczBby7u59pJ",
  "key18": "5eReQqxByDn5gXRDczZHPbx94SEcJpaQcFKN7PY1NCJppgffuDjNJD44v4AaaeEQy7ghWuGLNAcLnW5RQaZ4yJhM",
  "key19": "4pVwUajrQQUJJQRky6eqBHqc5hzoSoGghQM7YTS7SajQxQUuKN9RrxdAzz4C21RFkWDg1YT4pjP2signZLiyJVWP",
  "key20": "3ysjuiz5PZDJqZeXpcZyb5hgnhTXcDqLDfKjWop9RPh4utwhfgjvDv2zZQzVzMMuGvTr9NPnFoiWZ2DvrJJWzzyi",
  "key21": "5oqdD8gR6EdWKReES1KybFqnzgzgnCRh7HrDnrBuoMoMg2anFwerZ47dKkGYGRqkZwJYwu1afbKEtcmSx7GbnFMn",
  "key22": "3UbC8rKNARwGGTTUYD9MaEQsJyMt65i3HW3MYrv8PtGxeaUUyrYQQqTgjbjwFvXyDAqS1PKvDmaH7X7YAMAFAAQT",
  "key23": "2sxEkMpH2DEsUX2jahDes2dCmS5zvYJfqbkUqQFNQdiRMhf6b8bTmrkHcTR6roBiWfxUnEqeXUb5yYxk1PQ9KrwB",
  "key24": "2csnyQiyEXJfiD7VhH2TmWXTUpEZxoxePV1w41QcTKtkHzt4QXCMVfz5XY5iEzj4pLGAJRtPVf28WPP8DmrqfVNJ",
  "key25": "3a5KfTa88AXRJvK4sivns5t5tPPJgFjZM6nDWXrLdoR94oVci7WyjJS2u5Rpa5y2zXHKi6di59DZbKiUsxVnaoua",
  "key26": "3E2RcfiZDwPPgmVEzKswEFN6Xt2bWE42vqMqUhVRki3p7J1rzusvFp2R3BYN9sDhv83TKGWz4FKRKkiKvYSVa7hY",
  "key27": "4ot4tu2A6kbcHMtaY2ZuGHjM9Y7oho233dJ5kJkJdRTCC6DsVTKQmE7tFgyjcF671wJyz8GpJ7d5Y3ALP1MhWrY8",
  "key28": "28vXEnQgia9vgjMfhHoUHq1DEC4y4KgzxPVq5ztx3S9qcJbMEKJFcQdxBtJY54bTjb5p6XHRaGUXiKHw1Kk8FE5A",
  "key29": "2ZcQqK9uaxQR9NURfPqReS1zYK8y1r5aEBm5GtroCkiUjtXMLBnPhpA4QksQgT6qZaoc6igbczXtVfPKxCYGsVDr",
  "key30": "nXMub66t35RPA3GK9ZuuDUMH5tBCTkLe37iJ4bcoGzjmZbkVMWzhmB82DsequXsjfvFa5SmwaVdSSCXMew6nMCQ",
  "key31": "5Yzj1oKSgEJpxA5s4t2hyS1UJzzwBdfmm2LTrsPusUxfWAXYgATNcxT8LpbgAQwWGv8vpyfN3ev7Ag64QNLRJzQx",
  "key32": "5bL29fDtMfYYY7MUQPDeWkYFPmcZNwJEGbdCdcm3b7uBV4m781MjPJMftGKgQF3Xs3nFhoYTbCEEokKKwvvYLZC8",
  "key33": "5qkTBSDwvoFoExEBbR9LBbTLqEbdxHSLyZ2xcaQuDfHZvKwkcKoonPX8xukaBn1dT6dycrPUDJrcGoBUmBt7JRSX",
  "key34": "4GasXKDt2eXf5YtfvuMWr9ucMteHPLz414RxmCWGq21taZDLPRzVkSucZNdNqyQuUuizxUQwjGpGG9xmebSnCxjm",
  "key35": "4mStxEsV8VhGW32MaDX876dwGkbHjkNerL4E4fEvP7Lrqi59jKvCpLeSz8nzmrMwq3PB7DFwJWBNDP589nDcrxVH",
  "key36": "55zJggb67B1YY8P38nX2ZLmpPcRVEuePrB9dva4Pmdu5RJHvmKMPEyBVYn1KB1c2r49TC3aSEhJJaQvsjqKS6jax",
  "key37": "2GYAaEhrvQAkzCRvZQGyLD4SMosVewL6TBuhZqVR88gUUUE217thLV8FuhDh9Gk2MAcZB8stF8DDdBGfbuJ1ybGr",
  "key38": "4wcGvc2CjAjy7hgrbxGa5boqSmMTaDLWqoNqeGnvRYTEgxEhHQTZeMJb4zoReiEEgwTVwm85pVz3wzy1EwgyM2VN",
  "key39": "3Ebfb57BGTXJiD6525aiLdwtbdEqFwHLUx788GqsDrJSjGufyAeiGZnxZNGhmdTgpw1WGxmw6XuuDiekjkFvKLDK",
  "key40": "2kcGN82AcV1tcbbRjEyLm6V9NodSwBUbT3WdD1tR5Q7JkJZkFzY9NQWTzS7nJwKru6LLThMH1uN2qxCoqjDrkXib",
  "key41": "3Y3hz8arAxpzaTrTpYzgqAS2i5XCos7rbrnLuBEYy66c4fcCCdvkB3qEmMDAf4SrJA9rsUfP16QLYyNd5AVAC259",
  "key42": "446gpRHo5Bw2z4wjxrBL6ELu5MmFCFm3JKzGu3VuobHfmyjFEsjNF8iWknkBVeZtfcJ4F9tCp2vwpntSVChZediC",
  "key43": "5cBBBVDgM5cehLzRTfTFgmsvzQma5AUesuaXugQgecvRHyVRarXYJVx88ibR3xADxvkcPUEPQZuKLDWjtrEyJZ5Z"
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
