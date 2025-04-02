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
    "3FEaynQifEYjRkvR8W7cgV85bteFYwf1N1gN76XbPZWPp7DeGXMrTxszX2dxFfoFdYxPs3fUeN4mbDbViVLSbXZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z1fxfFJFGZr8vca7FsJK5WAhWe2HzT39E84AnNt7k5bEEMoRYENYGWbDeoeFLyhugcaHeGvNihwrY4FAbTPNKiR",
  "key1": "4ef6vMkejoSVQakXBrfwck9KHWRTgSEdoBjGRWXQR42PbnrAJKP5tJaeHJ3BwjAagQy6895GPsq1bEi9UhTHt2hc",
  "key2": "4yTZjFKYHU5YCpKDPUGxTFxJJbqa7f5rwXJk6DzKchKdc7rB2v2gY7HeK7djpEsGGHV9WWhAMY6KvBAdM7Rb6fae",
  "key3": "4MWNX4QKH91jkx36etkSvz55CRHjy6x7LEMsRnv1yzNrTBweLXUBio4rwHzLbgorb4sXedWjQZM7vCsRYcbXrQ4i",
  "key4": "4JU5excpdZJ3311MBEoMGFQm8qeuMuhDqLRviHUfdmr53MrSc14DjwjMmdgNvk4392WD1tjqhUko6sqPZthUbXbE",
  "key5": "1qp9KxmVaAs2vtS6R1ZnCtT4Q5MadBDdFD24dXzGv6qDX8fWtbi8y8XfyiN32gqCGrHgMUhgvkUPGpprYdty2iy",
  "key6": "oCmxbfRkH4UKGtuhdMk3zMczeHVkLYNTDGvVUH6sfYaDs8wUM8niEQ5erdKnWYeRir9BEpbUJycuNRdck9Mwcyt",
  "key7": "2UqCmB7vnPXa6WztUPJ9RjXc2sevwf3vvwt4jZtDtt19UcBRApv3aZNCG8vMStdWS5UjKYENm8sMMRegzDCgxYAr",
  "key8": "4vUQWsQ546jwt9EuX5szDHvo7yVnSjHZhFMvdayYvkhBzMNfepEm1yWHprNBnELNyJ6kqHLMZniWyy8BSx2exZdX",
  "key9": "4s7gx3d5VKXzvFrRV1rJxLvLVwkhwiZpmu4xdByy1ozvo2Gy8NX94bLHRaptSvrySTbAtrk3sGQH9fAr4tEdYDED",
  "key10": "CXY6TuA4CW5GqKC6Qbj8FgcMEDyqavDRNHqgDdf9x9xTxK2AbKWWUzc3oYwy645ypyQK17RnHyGeQjZVxsK1jL7",
  "key11": "oDHSAqsA6dCyGniFPRcuRtqjGU2RJTFqfPxCbUsWLSLYqUvZS4ewam42hVAUTQbiDBwMvzwuAZecTtcxKmNioYu",
  "key12": "5xLRxKxRPwzZGW22JYSbQcgAxVtNnZBBPMidyCQtWJ6rEVC3tkzxZjp3ghzniToUtJAChhJTuKywCLr9oA1MCqkp",
  "key13": "Nar53GX8zfpp2zgUvEXAF5hAidSxEmwFC44fSff6PJKxyhb1waupV6Hqeo8VKwbokkYCsAjc6L4PHqrE92A25HP",
  "key14": "33U1m5air1qwZBC8EQ3tBs6g2FkzokeGugLTsXHmpCMyRBQeistAkhkGGfwJqPohfnMFXqddn7LRCzAFFEPxrWZG",
  "key15": "2gAFtMxLsvWtKwQtPvjqUY1rVca8hCXJ5bx6SZS3YAw2Qw77M6YL6H5EXF1ba5kNU7FvHtQEBdBpkbSRRwaEsdx3",
  "key16": "5N3LL5gHH6ZpPHCLB9m4gMrF1S4fsjz3W4gciNLZxFiJkrDv2oLEAzNZ4LyCza6WuYuuUagNPCboCmBg5LDneAdg",
  "key17": "65CSxRweiV84PwxgHgWKPQSNNdMJsngJsa9kF9jSnUnbF6XmpBR4Q6QbWUHzHee7W48ag8BTzw84ANhoDK9FwxgD",
  "key18": "5RV2LxoGtk9eb9eHFxGNHeHPi4zTR13YdmmSPNRJcFPF1BSkgKDGfhQNoXWyRbX5ahEtnW1XkmVXPfpqYrCePDVq",
  "key19": "4nYw5wArcxjuUvPnXJA485FTP9FjTjTmnjYdKK9mCEVNcyX2kXuSHpyjZpjX8raAYDr7WpTK9vRZnpNNu66JuFk9",
  "key20": "dBsyhLwMw23UNEcoStVov6dFmpnVGmNZmEsL4Xb4KVDZELYNgFd3Vh6PZFUQtTs5PdAb65C4qkYWx3CoK9rYott",
  "key21": "2HoVwmycHdutMABdFq6ZH4tKmj6Ny2ChoTF7iXvYqajLaSai22xtPt9rksqs3ErV94eDxTdTf59wUEkEeo2sgPWF",
  "key22": "3CJiXsmxKer1da4JV7yA91Qcj9ysKdZk8MQG3m4USXwxoZubFXLQxYeXJkdkNCV7ExpmFbkCoJuBU6zRjJfGRuuq",
  "key23": "dNfY25GRpX3NDHk9gi26VGfQJozAWTyHHFj5ajYr9YT1qbGWgziYksN7ByH9jUBRTnoaWuNwo6Ggcxi5AjBJY67",
  "key24": "2pL2WriRSqAh5eYXCBLZxeoPB1MzVKcg4AgZbogruX2BFXASiiTkoogjCyFzA6g7X81oYkJJVGnqs73c5G2ATGP1",
  "key25": "53sGSJgY7M7vtog1oMVGFopM3iM7JrEt72MC9v6kXYHrq1zZ2MXqWX2q9JQ6RJNJL2CaMvLCVFR3N6aWjS1wc1HJ",
  "key26": "2MfpTKhx6dMhwsUk7hvZbMRvSqQyrkwWK1S6gHnngQFTV7ivNDvzLST5YtzwQhmRRV41KQbcrrofJ8G4aJonzwrv",
  "key27": "2dkQpm4gWmAGeGoFibXJFY9Yo6K6VUUA7jkPEXWUqXYSSW7Ci4PS7MV4T4sdjiNFdj38G6HGk1qyTTMgKaAwhaz8",
  "key28": "Eg8LTX5CBXt1DKUQD1TcwpKcF3nthR76g4xJpkLh9DPX8ppodCriNmCSUesLjRi9BAb4eiKwiv7h3sB3T2pYfqw",
  "key29": "5ytpiDTmczf3EujfMyeXgHXftGfZ6D5TjfwDrwRmbSCXgSQGHWmQN7zDa1Z92hUDqoQu6UKkHbDepDWxMtYrydZh",
  "key30": "3ffkcXCDu6PMsZLFUTFf5hkhtfMtCSkKNt56HdjmQ5FjJ67r1Sr34Hm1gMHioMJuCn3mZJ2B5H2GFAVC1jndN9SQ",
  "key31": "3TnCEZS3GpSHKPFUR9L6YQo9D6o7MnATDEkw9A9ho2j6fH6FWJJGYpg6gJBck8Zgfi6YuCwZjbwtkWi5wX13dpeL",
  "key32": "dweQFj9mCA6pFzvP3bw45isihEPmGCBNvoLMjF7xbi5xWQvNHDyxofZ3G6XApYWzt9gvNr4quKEFdrgpzESYiS7",
  "key33": "3YchC5kHthWjUJLNRvNUFX3uLCTTed5QmCMk6TH5vpERumbzvsoJVRZq3vmGS2NGf3reMJ3ZFq1yAbs62gX1qLQA",
  "key34": "3kvAdKgDCeVaE93urYuCY1pzvz8yZ8JFEpUHRNiMcBkwuRi5bnFRZ1p1C18nMjRdbbi8wVr5nh41u2Pyq9ovMzZ",
  "key35": "5En4TjkX8eLU7Bffz9thi2mDDuCZzLGJbM7V24Ks9mhmdjSFK4DHj6XuMKGZYFCngs7HFyvyTdhiLNPQaUYqRyXs",
  "key36": "qpmiXYDpES3mgzeQKwnuuAv61oUXhP4vNSp9pbMrE414RLzq43EUJf5Wk6sFxSpw8QCbtYpWQxFMWm5xiQLe4jP"
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
