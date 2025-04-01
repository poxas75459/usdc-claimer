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
    "4UnmXTrbRuubE4sAU5rENyFKHDzFUoS6cbxwySKJtU15obEEw76hQdfK38Yn5baZx7AkysmtVhJbjBS6NrkpAmTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hm4Pu84s7f4Y3PCL6rvg2jY8z2h86cP8kYps1o4iBhSBQuT2rSD2ZBPYfczbfsovTzz2gnNLuegnKXCd1Qusnqc",
  "key1": "5ymsdwq1sFvD8pZw8Z7ztT4j44BX5cp5UfAiroCVbwid5fWRu9DZ81YKLcUDJUQPuUJhhZW3JwoaiLfEKfLfzLVh",
  "key2": "fFt1E31yPurxyzFi5XErsJjFHLU61n6KXBGz4Hg7G8R7R9QfWam7zmotqm1q5ttRkfnuUzsy1N4tRJr95js3Aez",
  "key3": "5DnSQwkkWDsBuBFVfzAVtZ2s2kPiQmBefLzkei4vF8w3Mv6nJVkxcbsvqCM3s19gdRRXRMoH5NQenfKN9n3j3jH9",
  "key4": "38EKH4yDHD2K78wLjJGQaZoDS7DU8kJ2muarBL4y856k1dyA1dp28BNAazQPMfZneULA9VCvo9sAjisB7g6jSxG4",
  "key5": "5UKind57FkyhNuGuG7pGw3tvFXESdwiNP8MBmGSYZaNWRzsJvgBds9mNqno1LF9j6SMeV5m8hdEGzUzXijazVpR3",
  "key6": "55px1oDtsW6Z7VbtKhfEcfNbWXCNTMgvE79QeVm2XtN9f4gehp6NgqVRPfxfqqhMXCL2H8pg5hHQb1Qq1XnUuYFb",
  "key7": "5cALQkQKzzJcMv1Ecypw4yNxe2zv8zTm4GE87ZEucPnTpy5vf31idZ66Fz4mmjgJgs19QqW9rJbsF5pmGY6XBqi4",
  "key8": "251WrLSDr63YvHqwieWPbnBpevpFTMLjTizA7FkHRPJExAfjtyCkVvhZ45JaXJ7UNmvQ3amCBawpCHjWP9CRAhDS",
  "key9": "5K34ig9JwHhYXpqebT4ieKg8iqCfomqebnfXuQGK4NaWnSAAjRrFqSDRC3nhxGp5x7KmVspcBgUt2ZJtwkDxNHuS",
  "key10": "5wDh2HA7DfJm34zeT4u8UqVSnVmaaxadjSgyBxqL9nS8Zijwrv5QDQQND8YJvgd15CNeK75LpzVUQUiCrq5rDGV7",
  "key11": "4cGXybt8xNeBm1BcN9AkP4Mrk7FPkco6McmkoxDHAAqrXancp43pvocHnFetyyQY6x4WMFd9LVvc6syvymoFTzDY",
  "key12": "VJPksA4wJev2HXA47CqLdf6n3qJd7nTv78P8UH8cJNSprDV8E1V8qQstAMPR5uw9WahftQyB4PKeqh97K7nPWU8",
  "key13": "4AJ7YYieLLfCdVYwCSQjT5GChMhSp5SdQBrHtRExeLLT1WXSDXTSoBBT2byKQcwv3Fy8n5nLhFnRam5PbnuTwC3r",
  "key14": "311KEwdi4XS8qyvbs52oF6MsPiAqAGyzq7S5FP72LLiU2p1dVM67bX9pDgtSxCRb5KhgPZdxNvs9xeuFaRChe7oF",
  "key15": "29fgfVPp5HVTt4hBTe8M1D7xWbowLkLbUeGrK4K5xoRADbwYZd9s8zMw63BaiJm3eLWaKa9cmCAHEyFFekAKiPpa",
  "key16": "5fsBiHv8Sq3nbLxrxsqU3RPugu2x44xqmpiARaHSykqM3KjJWeZ4orHeWPa3mNU2FqfMc59ba5m82EbrvKhYJUP4",
  "key17": "4kTDQiJH9vG6dAhuRKC6KfzRrQ6skaZyvKusgQYzdRb45a7Z9SXZ3ZNpsQHcWRUiVWEWmuKTG79aFCFvpLSqA28",
  "key18": "3bjhEdajJHr4UcKGWNAoN7xvohGNcwdxvLuy9972TBkjUHCiMW74wGgkR2BP8z5RzFdU5ujknvDzaebiSFzpYJZP",
  "key19": "dMN1tUQ1sEKeJGB78Koids8ikkwxhwQiHk1366XWDntT7htxmBoL3kbSBjUyrBj3kCwekQTBBCGwDk2tbFcDwzz",
  "key20": "3YUVFDC2L4atSNB3Cp7mJGGEhK4maeS2JvdVuhHQVqiffE4pE5Q8MhvbJcGHfeETscQ12CnX7LaQVR4FCtxaPVrB",
  "key21": "o2ENhboP7KgB4fXQBdxVjfiJf8mXAsVZL4CuLbrFu4VHP29B92wEE46s8PGNL7ugQvqmbZ5X5RpPofopuMiBwVh",
  "key22": "4sFFSf95qT2BjyKBoYuMJVjprpqwZSFZAxJvCkmduhSBaGmjbg6jY2hsgWUU24bsLHij5HUBTMBgTumL4yRidZiZ",
  "key23": "5cT8TffkXNt3CnJwH56xmgdBtbyHhHkxxAj8BdWuw1S4UZTde7QDtJsxZ16yr4a2Aj1poXYEQJFJw4A9XusSi9n9",
  "key24": "2UYdjSxLcn4mBRovAGaEfQWycbaA5FfmPAbnPZWbQvgeJR4mvfrMphH2T7i4aQKZtS17Qajk2KvnZab7uMsHbtWz",
  "key25": "4cRSfW9KKKYuoGNjxE1ZDNbXJ4ETDhQh2kLq2w1t7WcEdJiFbsBKBrgu7Qq2ZYfXkGZH5xpkKCRRqUzuXDD72ius",
  "key26": "2cJdinAqfC6VXWFQ7R778kraTNnbyzZvLPJow21DYZqdGoaWZWKLTqB2gK2G7BoiK9ZUiUgsTmc1wDXE5PqBuYSc",
  "key27": "37UYQ7HZqtTDPmJEepys9P5ByxgNy7MjZtTfekLNweJqpvrAHMpG4B9LdFbTb2vDQcMuftResNKU7iFLfkdagu5t",
  "key28": "3XcgqcQngmH2XNFmsMUStjmrSBrVkdFTr7EgfZJo9Ni7idK9pdprTtVa89wAfTAnoMx9a2NwgjYfdTE6ioPF6JvP",
  "key29": "3bFknEVZFc567PZePJ8JRp2625E7KvfLBiVV5CgmKV1p6Aye1jSxdwR4UqTEp1ZmVUZSwyEHFWkMY2bVn87inG4n",
  "key30": "Wh1z7s46828fQ2BG9ZYhkxWBaYE9NJfr4gPNUEvZUTiin6Z8Hp1Zv8JGsQ35XsRGSwY2RjqSUdJ94eSQ9M1xGjT",
  "key31": "QkwgPN3CLBJ2k7KwJeTiH9HuEjyFjRGB5XdRcBnExTpN2XZfjPpiJDf3KJJuJ5sHxAcUC51vbWTEg4r824PzwqB",
  "key32": "KuWv8oa3jSWSy9ZMB5inuMg8uJp126vvvDCqkBK4qmMtDypGocknsNinJr6nn2xHpZdEo74zb5oXhCXjGcYuyVs",
  "key33": "p6QKfeREYTpZf88kdM9ARM2yLeMzy9GmVuEdFmyxTWtCMUHfZmX4gkM7KXTzqcWscfy83fk3c7aTcT9g9GfsKN2"
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
