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
    "3j1JxFfkyMGqQAfpKngnRhrwUh3tp624fGWvYf8o9wDrqXS8kqMuFrnXwRfT4zWyu9D2QDsdjVdvLoTshV9ExdiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61hkK9KjeqrFjjqo9hkhvrzhw5NycmMJrM7QGtEraLtb9scyVXdk3mHY3jUdHLN5rwfkarSx9ig4mL53SqwJzew1",
  "key1": "5q6esaBXZShViGqDz6ys3KF8kpBRN4UuLYewEDpTJM7mXNXFcTN3fGmZ9jqXNxbHd6vWcU1jTNPk6VMFSnmnqtR5",
  "key2": "itwn4pNmmzKXsGB7dQvQ2k1WwqMh6atY8FhmiZFsGPkJUWLsm9vnfSWqCS39QFJ4owQ7gpD1RNw8vpxi4Jp8LEa",
  "key3": "3Zuv82wYF4zqU2B6RQfdLZA6K19HtBzdTikr9VW1GRUQcSmhq9hRm2Qrjvf8jQxuBFs9rf2W3XZNMdWzamzxMcHG",
  "key4": "LhWkUTQvoMchyiNmpG9tpyqkeW9om5CXZg5bsnpMph6fsoX7ojWC7NkW7pzzkP5SeCnktwSARqhpamLBkDqYGzJ",
  "key5": "275WFKiA2G1MqSoEWUVEhkM4p6JYwZ3C9vs4KA7hQsD8MzZV5U2GP1onLGiQRmREs5qa84hXchosCaUrfoBc3G52",
  "key6": "JrXdhWtqYK2fvrA9M6GcBPAzHMSNBquGjWqNnHQvkDc78SafEBKVQeCh4tT72BvGF1rLS4CNWdY4YoyrAQt3TsX",
  "key7": "8s6q8Wqtye9ur2uF2m7txaRZ8Anv9sLpZQE8m7EHzdNcM3VjQNUvBnM8LFf1jg7noGKiLuzUVtS2GPVUdbd5kUa",
  "key8": "5ipowtpRtpEGYSSFmMhd7ZT7SFGT4EKz1D4pkYSTKMVWWPoHVpxGoK13jX5sCiK4nURKkCCpuWNJz4qmdPSeheCr",
  "key9": "isVn8Sfd37Ps8mgBrjn9Ftvb4wQVHhWQZAxUioLBx4Rt8dg3oPfbob1EYPMSMUEE9Ytfmv4XeYa8psk3mdg8jvA",
  "key10": "4qdBc2bqXx1B4rZvb57p8jbsRV1zLJxgCrv8xjzuV4ex4e25EAPvd5TuZe8GzKVubxTAbBXy9nSBsuvTx3itMq5j",
  "key11": "2bVvBMcxA6F9bN2mwmCUcZoUwXRC3GGqCTmkB1PQd4a9ymExXJMU9DHPMt1GR2qQbKr9AZdgb4egEZkmcD9iQMe9",
  "key12": "M7wZGvE9f2fGY7fxY9Nzp441KijN2oPX3v9QUrHYW7GsUqEDPgLSti52M4Nmr46o9DZFvNJsKhpSYDCTZTy85kH",
  "key13": "5qVyp1vc5pJ19XKYyqiiG6JTm34C49fBC5n7NyFaNLi61N6v2Cddwvy6anCmPNFakFffyNEwhz64pup6j5YcxkKv",
  "key14": "61bPpSkbmoLeKRjV2C92sd6zFL6osTrDqm585gf6Hm3kSVQfdkYTXXuSoHGWGXsqtB2zz2N1tQQMH19KceQ8rSze",
  "key15": "24VovnjsJZjs1PkcdNnhdZevmuF1Xb2bcNaJyke1A9vvQh2WncEH74h88PwJHUBQY7EYuBx6vvNB5t6WsgwC9ZrS",
  "key16": "axopyFTyrY9225r8atmcMngsYkb8cY2RULrH7qdE8MTASMjsa5YVrRhMGQVgBmkfcUhhECfsAJCnJHgLuuCMpLB",
  "key17": "2zHFZXhrW5pHwukhbWPm4jf1rJWfcDVTrbtfi5nnzpbWQwUuZGLSfeHS6a4Fqwxy2GHAV88JejNhJSxr6h7xtr28",
  "key18": "2vzikDxivdMQMWhKZeT7KDDUBZFGqFTnc4oArbWMXsrbCvqJhmE9bvzfKXvrN9Vo1gKhxFBuEp3xuQMTwha4ohuo",
  "key19": "3RHhWdaJRmj9pc5pzDTCqdRrrvaPDgsLYM1jzSn1downrpLDUEoiiu2mhRa8aRkdggV9eCbqJJuPmqH9gE6PGduJ",
  "key20": "4AXsTkWxP9h49d5PuR66EV8VoJcuUJdtLg6mQzCp4cYZpaeoPJD4AERi4ipz15jgoBtDMsDUN8eHbqF9JV5AUcwo",
  "key21": "2hzgq9skRFXiQYBTNo2fp3SJKoSagmszY26rarX9aHWGtFQcPmoskDt699RRET6sczxGUoyMN1SSmLawNmAzDKnX",
  "key22": "5QBARmGGedwiGRus1DXrsq45opatF6PVnrN6f5Qbq8vRWhwpPoTGHSmnzsesKSPMDnPfcvRY1pu4E9zo7YXb4mq2",
  "key23": "3M1nncwaQAGbna2eWnrfjSNbiJXAHt48AeD9e57SYgxrmL4VTarBTe2rFzdrVpZWHXzaB4n5vgxWP3qJCucjyhv8",
  "key24": "tLVpuiuep7rKEFxkmQRQpvww7ArGVomTJXTdkHpAJey9wWPuXuCLVng6GWDNL15sEm66AQNUzVbvf5XEHwjSf8Q",
  "key25": "PZUv7ibgbiM3xZs5eX2KaVh4MKNQuevK65Rniv1goqEcZ27XmMDA9U1PKBw5L5zsYYYqgKSK8tEP9y6UNEkdSww",
  "key26": "3TFaNgBh1MtFU61LrugRJk9tj6nfDca3LhjZaQZEXoSKBT1diDdwXn4U2Yy8iLJCmNtCxscd34UdKdTdKiuEUU6z",
  "key27": "5TSWDxMr3ZrfZQHTD57JVPCfbyc9Qa3eoQrapyFWoxkidvtjRqhYi7HfGz5KXNobrQPEguYmPrcm1gJubKXjJE2S",
  "key28": "5eKYu5uy9BcRjpX9uoBYZSGGx6myGakwGyKbmNEYXAyiXnn3yTwi2zkcMVDPQN5C1tHR3ZM7H4wn8tsse6kgZW3f",
  "key29": "5Fuvzv7LDz5xug33LJubwZ9AHxcHHtiahTU6V9XTwmwymeKJnF4bUm5Z5nwK44rdyHnBugf1EvNWs4jr2MW8JZde",
  "key30": "3n1hd7rnTvYAKqAugjRLmSovVYXTjKeAiVYG1A2vupkjwP5hVr6kZF3FmgPQXVbZe7PRML36w5qZAhbqbdr5L9jc",
  "key31": "Wwt6AuaCgvoS2j3boQLFcRw4kvhroMThoqLC2Si3u3K7v5DeWQh4BqwsQN2tcJHApYkKCBHXgwasc15SJLTficg",
  "key32": "2bDg3UKo2hS6W9WfDJkA6GntuTJjJcP7Ff1DREfkUEbmD88VYcUKSANVQdFZrr8oeakCbQEQRZ9JmovipxdrNwHj",
  "key33": "3sTTFRpDPeiLYWqnFfWuv1DjWDGoQ1tVUvZiwT5695aEK4nTKGgHjqmp595oz9gdbiaxuyWoro8JPUzxXSbCSn6y",
  "key34": "2DFDxqdBAVpJptTV3xwKQgyF1SeUg9gNhyPA43XZpa1AHJi8oGvy8PwcNrqeUXpmoUupXJUHNT7Y15Ebs9j8CKCu",
  "key35": "5C4c5h4YdZ1fp6rez8VGdQF3sF3UxaiWMzUyb3DH7NsRLZmhgwayoc5T1qaMpeutDHVa8SEqBpymRdGxc59CAv8W",
  "key36": "4eKzScvGcJEag6joejK65AayRwhzprobfCwF8vkAS28hLjA84T2oqker5QXAzTnhfREgYb1kfVqgweCDp4ptfVuE",
  "key37": "5MnhRDDTihERCgTJcw8UmmamnSR6wGQAYQuGk5uWsPLmSxkfLBHuk8DAXwE9nRqaXhLyRoh9rNGQcNmGPeQw5W4a",
  "key38": "3zja2Jrcd2oMfWpfrpSkuckHX1gztmUEAQYNHqqVe37mwn3fhkeh8yrdCCGM1xNeChrJGcbuuz3emviVhqxe3AVX",
  "key39": "45uoAPXQXRwrcRakawd4QoPUc6XzQeobfebv13v4bPzx2QkYnfXmSkGJsnMG4UDK4JRXUi2XbAfLnTFLL8x9jaQt",
  "key40": "8Sh9waK6dSK3TwPmQLQik2NmnfVQh4AEU6LLKExJbmFtu3qFMUfscFzmV41z2LG6kLgy2x2s26P5eYQUbubzFCD",
  "key41": "4aRyBPM6SL2sas8sivy4YXzs5ZBn1XweDB7Sp7SMFeaVuaEVR25hrTE3MJDqZ2SoJtR7qDrikcMZsYfP1bw43c7G",
  "key42": "469VBgjzDQySB4Bg2aEmV2pe1J3bv6DUssdFa78zZp86PJqkR5UJ1my8m7FKhQkcqzhoiae1DP9khdXpDGb8zs2x",
  "key43": "5CRMYT74ix41qnvfxv4dJpTicxQCCDYJejaB9ko3ejGGPgSg2UbRrhA7dTxmH3VQzEw7V2XpnPxb38Sfx12doswP"
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
