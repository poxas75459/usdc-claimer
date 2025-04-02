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
    "HmrG6heDqj1CqjU1ZTtkAWTZ84UUPjmqDSPrpfiuWX9K9afgj9cgEfVvcfF8BRNZQkazofx561GndptDzk3EUVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H8GQjpNAP1tywLb424UHuq4m2MMJykyLVYJvZj1QAktJYQGqwoyHySgLQS1m4seCRGtcKvt2iNMPzynRd4CA7tH",
  "key1": "264g2XoeNHyHBWCUxVQzhH3ZRdszL97rTCH98QtBVoGPdaBprkaEvA7BTJByGtdtK3x1xEumzkARYP9MEzcHnY8B",
  "key2": "54MD9gRaQChhku7amx2F9rmjXbnGbyAsR7i2yDnkaqGkUfpawkUare5hpZHQNScvcUN5roP56WTHvZhQhPX1UkJn",
  "key3": "3opBcc9UW6y2UGBtEwqk8C6tcbHwD94aRnpvek9gzfNLnaEBhr8HFkhf5tWrWyLrtiEbQBJGHuyvULjrsegqjPFF",
  "key4": "4JnzCFEc6viPWiVPemgWwdeuR8SxGGXta1F6xRiehYtqD5mtfyjsoJKLgV6RoH4h81RHEx7oKi4mKQy55eTptQuR",
  "key5": "27E7TWvLSVgFDZJ6B4o6JZZnQpVwkaoiFytC93pZHHa9Z8Zt3Wn2ZgV9DH9ioxRGKage9eejyq7dLj2J6vpjmhfo",
  "key6": "5Xk35vjva3tEPLfepvkfUrXdD4Uvxpqxc35UmsJZFqd9dAr2EesW2ihvy5ipk26rArKwvP7d7vJgx2Sz9wjFxAFh",
  "key7": "4ViJJj5JMZn6voNLwc8rfysUCsxux7NcqVsHCD2ujiqEfbUrEyQeMPhyS3tV2DTqp6CafrKhgfTv4rjzjPYRxp6V",
  "key8": "5w1ghAqy1PNtXRXodBKGmEwNmmwPfHJAEUwfzS3qLqFUBb4g6etpoEarqpEXSusfzFiAXD31wEZnbjFCLT87cp1P",
  "key9": "5GcPncRmw8eEBQTDUrTSWf3TZseytqa73PsGRjyHxNywJMgNanbrEoDgDYs9htKZ9gFLT92MutUnp99QpQZRbwdj",
  "key10": "4xxUFpfzmkHGFsBCZv7p5kWuUdwp8P6SW9xM3u4dxdayt1V8GMQxYwfmUiNtvvGbCytXks3ZEy5zqt174EzooUtv",
  "key11": "Sbw4KjNprnDVVzvxPsiqy4jM3o3BGCDsCZm2KfX18cMPDWFVXsY1kzST8u49EAHZaoAjkfus43KS3TVFt7Qxp3s",
  "key12": "4LgAtzcKVPf9fzFKo8mHrD2ymqYTSKBabuznDkdPNZhkxK8tFdoqCn6Auye2sFUgzZq2k26btF372zS9u2vys87e",
  "key13": "38jhp2dXorTw5E74eTg6ooS3dvnYJkM4SKUofdBeDhSDefTvpTzUCDKBgYsr2EtTtYcAcbWDxgVM6N7NkPhJ9RxC",
  "key14": "kDuxtR9KN7x5Lh2qbMZkqdoKpAE8hTTTEUJ5hSDvzKU5HSjG4WoWj9Q1Cc1FWDoKqnWxb4BuxFnhUYNTMxHe9VA",
  "key15": "3LucxFeX2EbUqqgA7sRTsmAepRaHBtNtUCcgxhiWazwD2rd1FiTWwxssNtbqHwytEqXSUZQCrCsLK3FCNXKAP9Ua",
  "key16": "2wLENJG2RVudDkjJrXMgBkXNPCUXv3TPHZw6F2juHCudt2zdhjQze3GceEWRSQJnArfNZLnz6wPMQoTBaEKVbWLC",
  "key17": "46dE17ZrVeF8otUC99zX8x8kW4gHyrRsC2YzxNrq6Ld8hcEJT2VsdTeqG9DCsUMTDdkkDA7Xdn87aRrqryoGmcLo",
  "key18": "4Sv9NmhT6sRjegzqeF2S5XVLF8mkm7EMfdBq9CUVLh3XXhy53rise91ft5FpECQoqQrP2SQkA74B6c35PAHyw3NY",
  "key19": "4nXyhXe5S316U4vVHKZJoY2Y67wPwqVyncGd8igvFANhh1NMsTcfqcXEfRfshhebTdmA4JGbneN7kw2CpyrTh2Jn",
  "key20": "4e3zvmpzYNBDCsqHxwVucRZNKxoQuS6YY9WgxnBy8egjSx2qb3cb6TWwigEGn752FBc9XruEy4HBpGkQqdqLwdFt",
  "key21": "5kpVbNTuWXTsfScDrGMKeq1E8MuG3GmezwZSWuvkZ7X5WG5VUXMMFSEu5Nrd8TAez7kxnsYy1YgMvhnXAdyF16Lh",
  "key22": "3zu6iemgM7ZpW8wmbdGRQj27RcCrb83kEcgy3C1aoPeK4ghwVGuPgDbNSu13CPuRBvAJ5x8fW8xTP6YfNQG5aaoM",
  "key23": "5sCwMeHLdLddVLjAMk6PEj1XGbncTGFw7mcF5Qx8n94S7TRNQo3LDqDNEqWZCTf7FizixS53H2BqBdS6izMmysRB",
  "key24": "312iUZNNweVjYxRqCyKZhCsLhRrKkwxTytgfN7JpLXfMHGyFEXhLF19MTN1mMDBJP4MZm73RvBQpu8wZcBC7touy",
  "key25": "5uDoz29xCuVmo9cguNt3muy6UEsbP3rYWfHLLiPzMtjwFP4qHpxVnxW5gKWxxvyHzyxS3LdLD6voNfGGSBMA8PtH",
  "key26": "3tP76QYTmPrmyArNPxvMJn978xsFCpmoo5aHTPr89chpbUzAuEBRJ7qATLDQ8VeztqmZ3qMxLYJGs3iEzCJvuNzM",
  "key27": "58bJgjdNFcx1okFLrdiAjUiap2xeDHDg5FVmx9ZvZC2VBaLxuzyCo6rfeXLYSkXdxyrS5BZjbEmfRepHpxLJPxAE",
  "key28": "5DJzvAcFx4Uszs8myW8jjLgNMJZ5sH3A1KRda5vs5zwyneTuGjY9KjRbBUEeuvvE3RNz4MRnUWH2KqFCRcYYHZ5X",
  "key29": "3UriTPeoumynazLrNmRgE3msSgwevvUsfznUKPLhRdqZ5kpxNvQuT8VZTSEV5SyoNhRbBMYmXVJq94fT3sxnwmn",
  "key30": "4HdYheHaJ1EQ4AWuRHoaKbJHSJMjLLmkdCQreGf8sqfNFwoZmyqa8Wth3sARL8ZgMVYbr3Bi4tvC8NuWaiSSEpDQ",
  "key31": "4j5gurW7AeBCWJDc2MM8feaHKohAAN5rg4vJJ763b56vaeBVTbQG8GhQenJ2koCwC6veM7tL5rK5DpjxHgPVQLx9",
  "key32": "Y3no5LudLccfPpTckfFGLcdoZ4vE6xaqeceBmDjUiuqToPPEE4e3gRZcouW4LjE7iUPJzBM7gqvckjdPqddheHF",
  "key33": "53vCGiqdT26ammePMxNRYtCDUdVEm7gDHz38T44fa69JnvFSmS8EdBnB59yJsaULyP7ubCmPBUNbLBhXEobKHqWJ",
  "key34": "5s7zx2faM9WR8uKpfZUnNk25DvxRByZEE1N5Fpc5xRHyJqLaopYXjiSPEGXC2eCS6dE1R983XEMq6GhXYKYHVwsy",
  "key35": "nMMNs8UaVv4p4ixMT9548Mb5b4B78SbTNgoAxMLdVk48cuvMEmqfRCSDoH2DsxQy55pSruqDrayY8UZ25ymkVDh",
  "key36": "5KWwdU6JcrvNXaRqHizxfQyqtC74JnF1VNejyWJHNYfLq3vqJTQVSGiuybVQei1xauFoUirYDYm2vcgdKi9j1M4j",
  "key37": "MZjHzf3aNXARngUbNVzAJXVL1sHbqahnoFctkWgGRYquWs35xaQvWtLdr15JUHM1BCW4fDuxEiAiNZFri4gWsGs",
  "key38": "4jqGsUjpyhMGKmn4dCzKBBKdV5Qixk8oXHFWSBZN2bkXMqQUxbn3GTbVomBc9uJveeF4UyvpGUvcX1JWj8KzUaFX",
  "key39": "4YViVYEJGpXAFbM9x1n4S4rd9uH5CUQpFVxHLHdM3k7KHxCL7XUB9LYPbCV9HUB42XBEYYaC8yqh46QmbCWodoMA",
  "key40": "5rAYPCYGozGoqffFMYHhUhqKoKfXJtG4UfUhdF5G43Pk5QbiEKX7F2xciVuNP2sGVFLYYvnGpQ2MjzbCEvFpNdPG",
  "key41": "mCPVF7HYSHGXLJfLv559JNa6zBehCX2pG7fyqkKyt1ByNMaCZYJ68DTtBLKD4XrqRXgv48yxvxpeGMgSCvtzFHM",
  "key42": "VeTwDYUJUfYat2xkKhAXD4wwBMbeiWWxT4GMNY99dN2scPE9SKr2te9sUPFrfbyCbUawW1dXMpry8qE5EyJB91a",
  "key43": "3cJAmfcVJ4JBbRRTao7zpAFJNMQfYCbn6sGHDf2kR687Zi2cppNtzcdfZVXxhKU9KakHCheTDaotUAo819boso9r",
  "key44": "4VxKenab2aD9yCww4hbsqowwaDDVqGEvhWgCEncZe4ezZGhN8hyuuM1TXH5GNdKZg5Nda7TSmadkorJgbo2yyAZB",
  "key45": "5ehEYySyGDVWrSBZ5VsBv4vNQq42qUurbChqvcttMSHTLeWGUSJNULxbUJ4e29oZ7yMsHDGNeAm8S2MHwYwy1rXN",
  "key46": "5D47e26rE1D3YR6s8V8g2BfrCanqysTKmAg6AssAx351kgh97nv13mrwnSBKT1nZGBiC1sVS3qzw8St6Wr83gSDj"
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
