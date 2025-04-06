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
    "22hKHgtASHy1gDQmepgN546phZQgEDvCAL1USYmQaBjBWR46xpQNstzarfNVZV6NyYv9CV6y4exvP324e1v57bPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ufFoJa9Ar4bDTimJDaUA8CK2Ya1TqbKc94d2JwLSAvbbPPeihc8jyTHs1y1UVA1qMg1XqJtcbN7md1coTv4iyLb",
  "key1": "3Z9bTbvy8pTpDW5XoS3G9wv9iuYEHs4dNWzcazkx1FbwzYWdUu4rZxgRDqRE4pDqTvEVb4dYN67SGQg3Pd6Cc6z9",
  "key2": "5VKLmHj3nBqZ1C7fSPxgg8BTTUfMDvZbrEHYTDRFSL7f6HbALF5QDnZwjEBc8VoqfgvXWR34qh4joHMmHqBF1zJD",
  "key3": "5v4f2aAwK3AcYNiYXFF34bPEJPATCiERZv62U79jg2SfQUHRLs9dM9vsTK79uQF7PqHyatXaMEKff8zFMvGU29bh",
  "key4": "4pXRc1YniGzo9uVNs5nqADZ5s8MDyLAx1T1QQwuYnxYwM3EVH8b7CERLkRqKDeJDGNNAqwb6fbUtRg875aqCcoof",
  "key5": "46UoKPUvceop7aUfjain1VFio8NyCaisFND8EkoEzdw85gckMpJj5GeYg5n6bjPQ1D5TexkAz8dbooPCZbymch1F",
  "key6": "5TgezE5dUdGyG2PvfDha3HkzYkRadsSuTHxMjQz6mGdLTUN213nFwjr18MdzX8JQMm6HPsf2v4ZhEBzyXyaQYxGg",
  "key7": "4EApLMiHWd5ksSEVKiNwqNWPGco7GyYqZovHAYCZi2E6vLoiYCGA7mKk1pKe8Yp7hmN2HYbkH72L8NaT4a6aqvoz",
  "key8": "2nessFxoPk8pvyYQ7cFFuuq2pfV76kyCAu16rAUxGE8WQEnxtKbATS6VA43JAkkcdpx4X6t6y2h7JDN73bdV9d6A",
  "key9": "5n9kS9GcUWhh8KDd2MQ6fxsHmPQPHwVAuRV5VMf1wXypQbax8M5NDa4t4cn5i45utK3wRtP5VmF3od1WvEuuhhH9",
  "key10": "4FayY2uwqKqGQQ3RBJeUUbSjVtj72JvhBuSfCDwKqPtXutq33dPruwCs1Nd871Rs6Znr29eLYysahcCCmUs9ZaLY",
  "key11": "27fKuwzZkh42gAMBNuWnArEwYbLepYzBJH6o81gQmLYDrigmV7k3WzKU2ybhKvpVoq9khPBWeJzCrHLzoxkvuAQ3",
  "key12": "5phgwSQjbUR6fZ2uUdLkcF5fNf81mvGceDMRv3KxpXvpbZqqsiN4MqMwdWkM9iQKS5Fucb59w8WSNXsmd7RKkV6y",
  "key13": "5CRfyBsouoiVmVfV8tdBpjMaXpJaTRfmMeAcx1crbn8yUteD7PesBrTtzacdhjqcbzU4noHGxnkVD2yB1QMe96Zd",
  "key14": "3saMH9dQCea9z7mQrdWhT1a9injfFmUXMkkDZezSg1gUw3J7dodiUw5KzavRDD7QTbpqRoFGBd3XHYm4b1CEAy8P",
  "key15": "3s1zRJKR186pBThrNRNjdKXCuRSA5jofemQTZGfuRBpCWEFmSn7ep7KMVsNLWwWN4JMdUFHh4JxKivWmkAbD5tCC",
  "key16": "2uLq1PnGv5dysLWmgi4SDMC1CrbY2DJNEZbYx1y7W5AgNtR7FiYynbMgTQS8rsKcRVp5FCYyrxkvZUJsbQXx7xUX",
  "key17": "xA2aCT23JsCJvJZtbuz3MwTQKWvYhTgTPoPZt7hYBJR9ZugjbcqAJeav4AGYcw27Ka3C7EDxCzUvdvHYLR7FK9o",
  "key18": "4mgDfVPsjsz4kykbG4EX8Z43TrURruCScmn9E9VHAaq5YSxN5hufezQ5YNR1QgkBgfp2JtAa3fpDmH484BSsXTjn",
  "key19": "3hyJtjogy8L25TnSJenRQP3WYvJUP2pS6o5wfjLAyzvkPfjYbEjPFfhUi5gFBGTo1V3BF2opkhYYJDf7AM8HsyRH",
  "key20": "51Sj8eqsEpfLE7G6B9goYEoD44PUfTZCzGAJZ1yqKV8PCzbeLCzzXJ8G2fvaLLAZMCyEkgwvQ9Y8NA5xYhGFXtwG",
  "key21": "419rWeVrVMAf4mVHPuJu2nNJZTe7YuhNMxnx4Ci89KuEDR3Ve3WH6BmHbFYMFydwGgHVUHj8qYEqZcAm3zaMVvUd",
  "key22": "fi98ycde2FWg576iVRXbBFnYPy1keF5ADHLKX2bUSpRbCthXdXfYeea4kXr5fvuPRgK2HjCfVu278jtfCbMCRec",
  "key23": "4NykSGa8cRrPVxWWgsKqTAseauBPaCHaph2dp3JGQCX9cbad6R8rkhjqgAzQNtTuryu6tvhu9EkXdTQA7dMFYrPu",
  "key24": "6YebMfqspHVvKVrkxT2H1dSRKB8tpgfa2AEKy3HKA4nkrT9GsaWNLBko7irUSwETL1Vkhxv3paxniBAa3S56UBw",
  "key25": "42juBt1WFa9jAKNp7fp9UAPXUx2YGqoQd6mxboCZY4VXooirrrTL9QbBjKM6UFLSQq2j7C2BwVTMhDMXZQ3qcDwn",
  "key26": "5uu4dcgKCKdjx4oz1HxEJArDnQYMScWPcSRi1aLqKtLpFcwXGZMFEe5NpxDfKWYduJ9tuSi7k1DVg218FnjE7SvM",
  "key27": "5xbH7Uy8VMukf9ptHNi22XrqtPCMavW2QVRWBE3K9tp7obFNDPfVLqaF6UevJrzk69c2VasMM9LSodHqQ1V5ULpx",
  "key28": "4QGxdhpUeUVY3SumB6FrpifoHwqBJ51pUYe2b4g35iX3UGFoxJQjDffnSQRXfMxUdkBTmZ9SMqbLqktrHsRY27pD"
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
