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
    "dVBhM7PC1PwdVjCRXnpEaaehSpuSvGgzuHTBEt9pS87eLPY89pd3i3v2tM2Tbo9tRMNxJk2oS3ZpivSyqvAoYgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mgi7idfvDEQDcL8sXiERrCB7TePp1buptgNpmUdZX7joh9q8LG7uAn73ZTydWUpboTSMkqdArcwxAiFhRfMBfM1",
  "key1": "3tvdWtwVKasWWZSX8bnBgkwAzuEfSHKWyLyKk2TnouSUbjtQj5yBrTBcDsUDNSpA6cHabs1WyqwMgnKdpiUgEeyh",
  "key2": "3KzKki2PEFuyQJC2ueJagfUxe7xPo8DauyUX97PvVgJjVgUS65z3Ed749iBmDS9Q9XXiCLxg7fXGBG9nzEM97FBK",
  "key3": "TfTTxwAFLuQhKKLunpjYm7WQK19fLD9Lu9GU7G7Bx24kWMr2hyJs4BscBXpiidw6UHTfgTrtdU5vzi7VX7AP8op",
  "key4": "rHGNcnk4hnAYuf3wbSxKvUSYhRFD3GR7RABo51tU7gwF8JXwKtADMk6SthqV5TH66TPnJRrEHwvLaiBK4B7F2ji",
  "key5": "ftRaCpCt5yGfGTNrkGxcQYEsaTdTXWXbHMKKaQkwRgXy9ZhZpgfLBdp3xkVYwPwp3xfSAhy4aHHynSDaJx7BDYm",
  "key6": "XzqomNjcpGRBcXFx8XuU8fRbT3kNcwLTRLDEEWtNCrzX3GpmyEXsFGE4VanEBCnTiR1CmMjw8XNxxrkp1YkUdv4",
  "key7": "3yp8VMRYJsoJyFsbLvdC8AzmFda49yHxKzPhgBguY82TxGnTfFKafa1SW4hLnPaZwp3t5uaSJtxiJDbUr8gCm2mQ",
  "key8": "zVRSKY44sh9MeFuQrEThKiy3tuL3k9Pg7aUMht4JZQrRCjtbFQqvvwofHRLmKbvZCsKf7ktLjZHjmzcQNrePH5d",
  "key9": "5L2FGgzUCWAFwhGoCd1Lt6bir2MtaTesswByiLPhNUY1kUuHR4dkZzxKRKqiSpfjHt3o3Rr77PKDX7S4spU5pXX",
  "key10": "3n8f4a7eeV3ZJKKhvMc1h74ZFi1xGCLi1ZCmhWKshqytWhpjBAPYcySNVCFdoraEQcw7cdZ2ForUXyQVjdxn1kh7",
  "key11": "426r1taZv3FLGde22549NXvnq3HhD7zRKaYKPVUZzGTGtp1w648gMFYUnW4UQNcoNRzLNnGLdEqgBwYZe3ypUX68",
  "key12": "5nfMDX8xspwAPGQdxFsMmNSMSGBTnHU5V2A7scEunaRuosnwnQMTaf86Rkw49poTZrerVxedMEZ7feWLW9dcwFgi",
  "key13": "58us3LH2Xr4VNzUoSK4AnvEu4U1KRzRdKoMrACewKNXQ1iQdiz1DM7egcHpVghiuGeFzVkpBqdY93DfDkknRpDrt",
  "key14": "2zL8s4xW7EAj6edDuKubDB3mY7oPzHh1ptv97kGzwfMuyXXAV4ibYsYd6R56goieNwfUV4cx8rsd4PpAzywyCG3g",
  "key15": "aqSQTb2WzmCvE7qR5xthbkTpyvdnv88CZu1AhYoLAY5ofLFgNipsXyEoLJX1EBuFYqMf1wNSoLShGb4Z9TTtXqK",
  "key16": "23mi83NaJc5zTGREdpSX9GJuvzBchJMSrFB4U9XbvNJNzyRHtiSPH2M1f12XfCKBqeiv5S1UVjpJjXx6EJTZiemd",
  "key17": "5Etc2Nxfqcj1TsjC45SjD3rXjR1q4FARQnkosaJk7xSQAYgV1PKKytyZ4M66dikJvnXq4DDv1FdWneWUEqNzo9Lf",
  "key18": "2CoTVF5p2ijRf9GdXGNGeQYo3Xy6um5LEuB5qj8uNSPdqNCyoii2spiSD9uacy861n8EtzhDGjZybk7AWv6sMese",
  "key19": "3sjLSSqud4Pu9VxKCx2ve8UK1faRmThbFogRrP5wtfyqiJLS2A3Yz8Srg9Yyh8ZaZ17oKehwDXcAncGShqgRNbGQ",
  "key20": "5er5kgRCsgQA234Eka2Nyret3YyZcxDLdkyNZy5pR4VuaLNtN7V7UHgV3b2BjsuS85KL2WDr6PvHAjyeotTZbUfc",
  "key21": "5SpyyxGSU83F87S3E3FSifL7rBrHMcEHKiJWe5pAWiX6WnMkZ3gDP8K7ez3YMGPkzHf9EF4uPMJsF7r4eGnCkPPF",
  "key22": "NiQCEQAxwXoCj5t2Uy2mqqEJMfkfeD3a513i8tGFQExm4EGdtV1hWGxdd8yHa5sUnn24zhAxhf3b1SafydLFpPm",
  "key23": "2B24Y9uP2smMxWw5s7rfMafNorNZwE1ZVT5xGnFssqdoC9PMvBUwRzoQp5854TqKiUyVaW4azJygo2fT7snBwEBC",
  "key24": "f1V7REwHhkJHob3sPCEcrRFgZM8Fy3ytV8hYrAGcNcyhCvRGwt1w9GPq4NCu5atimeWJbisW74EUEHbEMNx4aBQ",
  "key25": "4DQTqrNdE9w1my8m8oUciBgKPyL7T1mgJtZJ98c8hqMFRDKMmKELAMgoyST14svaaPMnQit66FtqcCQZPGfQ8KtE",
  "key26": "2SSshj2rNVsMYyiZDu5WhHEt2YUvs7WBpXqnQRcygf9WYtwm8XGbnaoYvNqRfCuM7p8HdjLfkkXXSyugnLA3hLtQ",
  "key27": "JYuFpg5FoceaEgZngF1TDAwHyRrxbwQBr7KnFKM1gU165U64SQAtrdszCxzHC4k6YLu2ABqLCANWLVj6y79GXbX",
  "key28": "2rMtu71wHPr5mcWnSJZV6SwN8itFVHxiAHQJ5vhh8s4YTu1EwE4Ed26zcVqRThr1spfory3r7inwEBhUeDsEn3TK",
  "key29": "2dTJjmi5RRc5CpCmg34BVLhnfNMFr7p1pPTq7a5Rvnn9G6Gkd1V5dh92YqaF6LzEkvoHZGhN2oDRgDb5n6QUeYJn",
  "key30": "4c5Sd7DfJqqFNqMTCfYgq6qdKtgUt1A1AhhxoKtjoRUMkZwo15Gm7V7WB21EQFzWt1fvMWXq3tPvQVEUcrkPsuug",
  "key31": "33EignvX3KWrPBYzwtQXinySQGQsoTZcfbG1WZ1KwP5UTep6WAVBavTNfxv3UMMzYKrkBfibPctrruy6Qjzf59pJ",
  "key32": "VyosEuE61aGfGf6NsfhEVi2zUbBVxv4JqZxy9sLiL6PruNetmo2MD3FDcBcAKx4P8hR7xT7fnkPhvqu9piF5GSH",
  "key33": "5QnK2N4MXG6QXZT5A6Qa7XffJhvD2iDSTsm8Q2PJKCQ1Buf5E4AxFBUG33nkNdj4zyVyfpMJ181fjELub2S4qdir",
  "key34": "2fPGQ9RUKbtRvUG7d4EhKHKG8rMfeyuE6ZbkJupro93ScSznKXTy8ED9CLEpV3VC3XuUR2wCx1UyyFRk83APzeD1",
  "key35": "2UtN2difo5aiwjh3yrpsZqVfD38zaq65XerU4eAN7YxrAWeBjGtxACucS6qqDB5e68gT1GHiCAem3HoMYVudw2L8",
  "key36": "469FnpbofTymuofTBPt2ZCMKnDnHp1gyPTsdABkbfmQS9h2aM3dWumiz4WhQRn8w9xuMWxkPZpZEfKwHv1dd8rur",
  "key37": "u6e1BZJc3gF9abQ3pTk2acgcmxCc8ZsJC1uWjDuoPMjiLLQsPspWj1uqSnTLcUcZfYHyDhqCGwu2SUNu1YxnDQV",
  "key38": "5cFsQvjdKtYCh6WjoDZW9wPr3pXzF2puNn9NBkM5aVnbJKe1L9xinvmsR4hK3SYjVC674VuGNmYVfm78jsDrRM5c",
  "key39": "3GzAzfqLv7stk3vRiAMunXbfNAu9wYCqXGakjYpt69dXhK4ED1dtN7A76YXSesSBfuGrz7Szd4iNz1u5eui162kp"
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
