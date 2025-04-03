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
    "43KLr4Po9p6tDtGaEgstafHqwT8ytAc8kLp63dZ43J52NAJvSu2iJiC4r6FTzg68NU3TpgDnGMrm9gLfnR6UZgN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38mmQqPrjkVshTgq15vcyVtj883K7GtqJxV9RdxfNiu9tP2UU6pVKWgudP7CZx8EGLuYrz8JJh6M7VEMHpke8JXP",
  "key1": "RRMzD6RAk531CuTKBg4XPgyBbRB9HymPy5yCYW49jnHqxovC9YVCD1CmSHowaP5bZEPZ2NKQKKm9SWipiCtnf1J",
  "key2": "UkAgrorYKEW1AQbA4CtRnMncaBFR8NWCeNZPC1E6JNWwadwUWzsocv1xABtgWTyZUyvZcodRVeXCGiKhgyEfpXD",
  "key3": "QQqBXs83zYrq9m9ABq7hXFQNL5y6HbpT6j7L5ofsWj1k27cd76iqJTqCs7exan9W8DrsYFCeWsvDDXk1CQ6YP4z",
  "key4": "4kfg8F76aRjYYEHLJNKA5ttx4CtQ9af5LVC3zZwmi4LVPhtYTLbGdmRNGw6Gr4xTDE6aw9LXVaUzw4qaXTHsiPC3",
  "key5": "sM8fchWHK6MiRgd2WBVcNBbbBRKhkUjmbW1koxtySahsPb1bNGBEVf6o2Ag3taqHaGHmpyvba1cwFZvCqN2BiML",
  "key6": "5KBp7pNFXnebxYgL6FHXbt4UfEM7GEPdt2PMkaFPWA13mBgmr6MnbNgLfte6SFR2KWbnNC88GpZbU9RPTEQdWRnM",
  "key7": "4HfV19117hiyHh2VAYnomtUpWF1t3H9ABEZw49C8n5Q4enqAmt9P3ZbGL2ZFHFSCiVdMmqoKA5RHkec1exYCMP7N",
  "key8": "2ro1ogwCpSCH5dd9goS6TyF82srdmcmUPtFuG9SYpEQqqbSnZc8BQGFiVPqURJsnu1CS3tZ45Fvhrgt4au92Xwgv",
  "key9": "5rYCzebKGT4gyu3GcSoeZ4tFS2jouFajf58L9xZpm65cwJmMsAAab6xeZ4EceefdGB1Yb33wqzcMVwDPc9QDzvnM",
  "key10": "3jrH9y534Q9d2yuGucxk8esGTv1f8Q9Dpi5rB7WP1F5nAp65gohgo2K8yBEYiCVJPYg2BYwiYnG9hAwrFwfkzysD",
  "key11": "4o3K37tpaN2LwPd6P5kZu212F4kmuUMXBvYznsSeqL7KHqbnn1SMyddu2VcraZZ1FqJiU5UaW4eKtuxfsCwGBCDM",
  "key12": "21h8nhxzVzTzQpTLsXJsifs3P9y6TbPWTBXLSXSMsqu6MC2kpABjZ8bTJUPudgCh1YQqWmghWin3grSrUrzvmMj2",
  "key13": "2zbyzzczqo5eZbTyLx7oVBDQnHAXxQUb2Q7EefrEdnaR1GBboLukTUQSKUfmUji9z6cEjTu7q9A9oahQ7uvG1GYz",
  "key14": "3kR2zU5N3BZKRKd6YVwqWG3V8EqTRxLMi9z666CikNbyyioyh73kiVBj1aRBzXbKcyFmJkMgb2frTEbzAEehxdeZ",
  "key15": "4eiqZE8ewyLpQPpReG4DnsXq9Xi56UsyPUExpJao4jehgfqPQBgMsAifYiYMDxnowDXaxCjnstrjYxsk2L9zD1CB",
  "key16": "2YhBShhvz5HmcsgxBKwx6qf63U2dyyyHZ7bsHwnayS7YWyx6nPFNgRiGFDJveJcg2uSJaffPxMoKPWazZhJpJ9kz",
  "key17": "AQcspUtAT6jG3vX6GDjneVE7s2DhzxuXdw6LJRJmNBXxo8Wrmkgq2Br1TeG9KmbJR4McaaiYobQd2JAuwtJF4AV",
  "key18": "3aKEZQbN4H5NTToayWRryAmzwzQ564gJJnkuSE3JUJk21eyVspcEqeavWeY8HrLsm1X2AbrRSwRpkk9drQYqgDpv",
  "key19": "4LtiMCPUPVm7VFgxbU5ybiGoCipeJUyVWxd5aLWC1aKKRuNP4NMGBNMZtxD73wyeWUX55iVbFboKjv1kLzqJ1rPB",
  "key20": "2zb6v6mFMSDaUs3ip77yoMLwVQXKa5XCwa2Fodr8EvA1NdyNQSPqiP8hBmywhZE8D5ePpNxAqym6FBQ9qwxyU76K",
  "key21": "4kPWqbP1DYrJ9qzNNcxki5nSizdNkja7BvSTrsJdrhDvBZ1UGjPaWrvUun3BdPUgozrnVQUxZEG1gwV5yf5Adckh",
  "key22": "GRqAf7xtpQfaiPMqQCJeEA116Tu3oxRYeSniHbShDUDkYoE6NtnBFaHdjQiav8UFEqeTr7sjjcpxTVtifw6k4tY",
  "key23": "WjotTQz9MEVgvRZ2Cmk5bGJ6L26cGqTNNwsZgBqFYSqUiqf3e1Z13mNKLnhu6S76XmqgY5wUCDYK48fSiUh3tSy",
  "key24": "2pWXWarfsgzpbJDn3HmeKPpPHD3892bLRQWkLJqRZCoprXqptFyCRSMnEscT9PpxEDEo2vxjKak1K2ZoUUoqi2FH",
  "key25": "2dF1uJg1tAEEDues7fNtGjm1WnMzkyqEtfDSyMPJdiWEgEZj1rZaPDDnzargDhRC4wCqsmXGiTzn9373s9Gj5wqr",
  "key26": "4z2g4ADQpAQtjwFPBcefVcNi35DpQVfNxBrAr4Aba7DQFfxtVVNpBB2hmW7sykfLZFxzkjdAy3oBXSdPjDPnPPcZ",
  "key27": "4YSpnydvUZNXdvDjMhGCTUGNFUyekbLJ7aPnAUHwnU7k4t7rZbeszJPJq4RZLvBrZboFGkixnqxYCQXY1ucMjaei",
  "key28": "pCj3kCXvYHHG3HnUuwTipfBZ9JAHMzFdTbhrjxgFbbeehAYaAVQ9tHhD9VuoQBw6oyXxMtBnrC7rbuh1oEDF4Wj",
  "key29": "51V5cwUdyWq79VTRJG92JfEiaQByAntRXRcKnnz9QKYSymLBmDpkjjD1UWbJHer5nxeqdnbUKs8f6HsrA835WEd5",
  "key30": "5mbohAip1JoVyoLvpuFv6ZebjHYE9n97wracVWEirme87ZbmSCQopDZwQPzZVyH1BLxM6xuf8qZx8kS8ZU184NW3",
  "key31": "3ZBuQbaev3foXJW4JZNzPXGM1qiJhp58eBaBsM518XzHBtizKg8FQBy52bhsr5eLgcc6mbxm9MJsUb6SZLeTDQci",
  "key32": "DabHfY3iAxCisS12aHNbsC3udX83kwGmtZ35Mvo9vPEpWjkJGyNFKnUMBZk7hVKJWamV1XSubm1nLuodYrbKkBU",
  "key33": "3XizyCxkzGn85acyjVdTKFU4RHM8dzE9Ts634c4zjeV7Qo7w4w2fbd4gLgT9aQzasLGydGdNTyGgNptaQwq3uaaS",
  "key34": "2sJaTSYLyqQ5FBpQ1z2YdzJMUohKEfWBtBmQXN1i2Qj5a8CP5RiiVouLDExo8FPdNgUdnPVvGCGmrA6E4iSSrYxe",
  "key35": "2XaFp7tiLHKZL6DRKRZsX6JaZ2rs7i6h7YnvbRwtc5Q23ED1GAHw9U6HZHmZjP3B6pRJY3idoXfVPXxJotRevHeS",
  "key36": "3Kffi96M64psRrp5UCggJtFo6cHcrXxyTKoMpTh5Ap3nmxU3FjFUHWTfdUAg4rUtg8W69552YySifJN3bXoVhCvP",
  "key37": "58i82apegHsvUnQK53nNzshuHtQRp4qivnxBABCsDV5gNGuhABppRdyA733R7rzbevYTmXE8SgMpWidRR9ggXkpo",
  "key38": "635owkzEjpumsMaJ7YRo7pzvNmXEPwvY4NAxwUYGZ4svbwfUq3C85A2D3WzfERUK5WdoQxfg94DNtj2QCVNSdQTg",
  "key39": "3sU2vAyBFwsUxBYiHPhBqww5FHZDAuBxeE2BwJf23vFnKzXq7ygibw9CLPLKYji6GaaV8VZomuzhAqF7f2VMDsR1",
  "key40": "4sb5LucSeUETUEFNDYW51eNaVomjpmMXBFufwud9EbC3ufZsSKzCQBcdb5VYaf5nX7HB8jnV69Lw22zd7iphzBXM"
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
