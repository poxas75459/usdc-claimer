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
    "2VCNB5oHE88Vvhu1fN4gi9jy1pfDJqayqduxUkbAZbeGLikMRgebXNsempuFZBEcXMwHcDisXtdDTLzYuDtePEva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WeUpQmmf1s681k3n8J96GjS9NhiPPDefCEV1hQCnJY7X9asjrayBBH4TXKFUgYdKihk9BMpuxhDQNTTftY6uujw",
  "key1": "4fDoxvYcGbvvuQ7cWr2QnEifVNpbLAtQKqg9ABP5jg7mZAeST7iFx7hhnNzrsfG9ANGeFx99hPiMTFYuR1BKsSse",
  "key2": "oGC5PKeESgoYx35wNVhmJWxeuso8qTvdA4N11BT7vQ1JHw1MnLNbb9stAmv9uo9jM3ctiTkphhbwmHRDA5ceRZE",
  "key3": "3ycK9SU9fSaLmU7i5faTZxvBx3MPddNmt6kcbW98575dGiDPaVMPrQdstokcZN6actHVTQ2WoA3AVWf75r5KmZch",
  "key4": "52zjTZC7Zu2yGHKoMhzipKNx3skpp9s7KRSaaXtFhkmVRQQrnwKNQfKPnNptj1iLaC3oGGkPt2g5NMfSrY4J6g7R",
  "key5": "5hZhfU6z2ESo9KTPrsDtFNNSQHHjhUpyaNS8hbygyCcY99bUuF3xJtwRcQeHSKyPZv9ojzgmcj4ESAZy49TxcZ66",
  "key6": "4fEo2LCm5S9JRaZSbihrYqHfjZyp1aVd2Q8xQAPoZcvrdcZWp7kDDSmvZC7bDbfQtAqMUYmNxFW1kQq2BV8XXJH5",
  "key7": "aVxweG9LPKUjrhRwvUyJ7mGRbBDKnHh2icQgQjrugiRDUZZo5STMfNoGxUoic7DMyn4hSKmXAj4rsbNDZAZmEYv",
  "key8": "3DcqsPtN2WnFf592MDESPc29F6FNnPnfvH31wbtDRvd1psYsi3XZwjJH5w7rwona1YszvwXAiPp1RRhjJK4j2w15",
  "key9": "An9F56YfPNnB9TdpNyHNw5WRGFLfjDUABa4cToCsLD1hP6BfzdKWiwrUNaXU9WB3FSVu13k3oFPaQtaQvB3B8ss",
  "key10": "3Ld1VHk6EXx7hRSQeiZMkAVhzkXvuq2sL4VdrJwURJNvHLbmig3zZtwPe4yNz8beYu76NUZPXNAyrSxhxBrkSfCz",
  "key11": "pqTNTqns8z8ziGJokFf9wmeFKf2VverFfNqR2ng5sij8dLoyFaK716nvAEbBA2d8EBEXunjQd8KNo9cT78vxUME",
  "key12": "55SkT5YhD3Z13wEx1VZ3LekYeqwJvr5PUeRqJnndQT4njESL1h1MDEQyhCo11KkJYdhjVZZqGyNUg9Fs5ySVfkW5",
  "key13": "3ijs3Dp21kNu8mmEpq5kCmFqeTcohEkSp3uP34tE3XrNBkXz8XTXySMgsmm3YL1qLmhQNY4eWt3sHm6V6bsmKWQ8",
  "key14": "5Uf9A1THXGQH8gqqt9kBitqRPJRUNiPufpocRtPPnNMZSKzwid4nQ84SeMvg8yaZXVtqAGbS55LK4QYEVQwu8rFF",
  "key15": "5xZZHf5FPkqc7QSSJiLjCEy58CYig95qh3dgQNRcz5Ljpk1Jmiy5r6H1YV2fpeLHmJ2vgXXv8PDz5UzZa528sgki",
  "key16": "2CuKKRNhZGU2NKEvjaQrF6KSVoz21rTEaGzFXHPMcwcemEES4kdqwVaSHatXKMHZz63rtsAHCuVzKipQFTk4sAVJ",
  "key17": "3TqmQ52f8HWkEPxpGZMfbADMQ7Jtvocvrg5nc5m4jpEWoRbeK7ofWgTujrpZR2QF5HSjutKMNCp13gkbzXB2piso",
  "key18": "2AFx98UxaZwwN6ZmnvKxfDB13SYx5wa8z2krx9wekhJMUNTztY6yAFGVuXYuhxinqDoU9vZY14Vrv3SGZsyPTHdM",
  "key19": "55W8rbQQmn1Z6FJ4bVLea82BqjsGqKuC6zBD4GcQRHvJPsc1VMPCUthaQkJ6iyjNbVAY9iX9VMcLUYdJjNNNo6bB",
  "key20": "5yfPL8MBvDZAS8CJyWLXWg2rMWSkBnVw91rwTN7wmrPtQmZbn1wKZpPmf7g3aGMkTLggZEJyQKB9WyeHanYc9exz",
  "key21": "cPMQm7ekjTCkpceUwjW6uY2jZyZRfGkuxX2fViiKayYxDYQkFekpXzs7KMVpgCUxTEskZYLP1matR5q24LXKHFJ",
  "key22": "3wZzNR9s8sbafxK3aAsmAgPjSYdWxA6m1EijS4b1zf69X6tsno9Y6FjbSJKt5tM7AemgGX8nvm3ioBPmVrVyeJ3P",
  "key23": "5h5cdeitGmD7uaXzTS5xaxccUgg2fKghKqGLDdq83HySFwtg3WRA7Jk8rA4ydryzawhruCYLq4wnZfvz5wwHtkeD",
  "key24": "3ratrk47Le3ZTgnmkmeqmNYtsfNQAKGtZ1yUjae9ruuJm4HFJ6FgKrusjGiB5jZghFFoWWumBPs6QXA75dtR48Pb",
  "key25": "57MjbVgQU9KLHggUSSPxDYvgyzd6jefGEbyHodwAkeaoqeZyedvHSBMfP7vA7zyEUfrtLwpc6GaB9kXXpAdVS99",
  "key26": "3ddKikAP7XGsPJaUUH5Lt9bEuxqM54DzbKzKStEsaqLzbe9xMfdK8NtJGMUBL79mmvMm5dUrKzCugec1vLacV8qo",
  "key27": "2iMCW66FqmjeGLCurVbcRSFNo6MaTi5BbCoqURZn6YrgC6bGcSKDCg9tyZ2XRsMMJjgnVgFBbmBGvxSQ221LMGLu",
  "key28": "5LcAwTHWdJYZ6fYahuCxa76L1PGTiS5QTyBXS2MFnW7ZK6ACtDqRDB9LigYnQBwdmLvxBSsvUvA4qYo6J7k8PFCz",
  "key29": "2swoE2uySoXSVhwoNXCLU8VPiGGEPEBTqjDBgyE1J4qXGnV3dcCHaBK6iQ8rykiVw2L7V1pwU9rzteWEvsfyiqx3",
  "key30": "3PSEYm9CQZMgfNLgCDvTuHBRu8W1Nr7HKdAQUL2epJ731kdpF3joc1a71KDJXyYoUVpNs5nQpndCCKBDdD8S8xJX",
  "key31": "2n7uMV5dPe4VibYvL9Y7te61BAMRJLpEdMqvEzyGS48C6VYyUzj8pjQaYwukrjM4fF6rKmj5u1FaeQ6B53NVdfLh",
  "key32": "34xTxzK2ox3GxbpkkaMCAiFpMKgtahWeamvMRGqmyihevbAzx8Nek3LVTSkBELt6nJDBb5KJ4JE6yrDZ6y7sSkG5",
  "key33": "4x8aFyABtaYRWnPrw2SM6jVcfESL92YvHQa2GBY9SKPChygBi13qHE2PpSqSfydjY4siPEd5yW1GXgkFndrmnWP8",
  "key34": "42w5rEPDrKH4UsEhEuFW9QBj4AzLsme1X6wSF5DWsiZonype8yLVcSUE79nspT54QQowpuYWvmxzd6z1526tPLhm",
  "key35": "2CLd7so8hgv82uHde65ENLSpt5pWWu8oGBaZMzEnenieCVwSdcbykyfy3zCbc2QZ41MGbxwCfZQ72xuxkjdbzzRo",
  "key36": "3YSoBTwJbETEeyv58VwpT2rhjMsBsvsGSW2GivCFfxv4TMWZeiRaVA53cNGyBNYE5aE9gXh3rTuJ89irftcefgyi",
  "key37": "3ujNrBVRy2tPgyhXmeSwWFcQAZL8NR8wrZP2ywmcsmgbBFCmMp5gHqoprzwwGKF2ukkQDuUAFQFxwAavRs6JPHJF",
  "key38": "3aWLtMKigty6FuBa5i5P9kH6sSX5tsFwn4f7qw5ZJ9S2SgWeoJjLWHcsoNSNnk8quLTHvpuTGUYgD8wAQHFnrURn",
  "key39": "5EBHz7b8HymdRKXgWTzB3a873L8kjS3R2C9TB1PRsQf7im9ZnHnTuMnTj47xctjNg7Zs1fC3Njct5ZtKtHBD9b6a",
  "key40": "5D7so5hbg7thaxPBXESvLu8D9ywj9KdApKKG8zSuiKpHzNSoJEgBcNziCyZ6EgAnvcArEdR5SwXssvUg62rTHMVc",
  "key41": "67KQywy1oWrbgM5rVn3N9324UjB625tvzPEUtRXTPBbX7pdzZpG2jMe89TnQfVowiwyDoaF1cqA9dRAA5oC3AsV1",
  "key42": "ctdZShgzexdxCfJhpZ1qSMmZpgYvmqUhA4ugibLPwcubb2F7PqFuSomxZjmMHAxKoRapJ63s786Dw3cZeRAWoL4",
  "key43": "2P5yLAvsnJzYbtnbpknrURSMomKuzLye7iALYuxeFPrYMNnRXsEjFvUjSTxhxP2Qvr59rPjZZhX2i2GMjFw3tWVz",
  "key44": "a5EXZEaetQiNTJYSBQpUSiKPvmovS55X6UV1zG6Gfy56JttLtbmzJa9BFremZcfUvx1yx5b4ee9Anu77si61vVb",
  "key45": "42zcsNjWzoB4kAmAYrpq2ZLRLBgFRFgkVXEvNjDH4WF3sQ1J86KWJXDvYVxhaWbsXUcvz6qizRiSRjMepkpsYMkE",
  "key46": "5qNYThv43NJDDK9yow1464FjfazdzJFsyQiEb1d4AzqyEKevSVcXmPNhtE29Ux132cogbuZ6pUd9qBhkDF4NNNgc",
  "key47": "4gCDmLnRdnKtywddddUqaJmNXNWY4WuXh7MtjqT3WRoojfwthjZSLCfn4xaR1ExRTojjJi1vn5oDpr4SvehvjjdT"
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
