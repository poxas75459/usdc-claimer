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
    "46cnukpyk13vs2T5t2E4FNRdqjW46vPhKpB3bHASeJdbDejBwV7poKx7cbwsFKKrfTTwB8tRZsVAkwc2YGo3tioe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GN2dcpY8emiiYk7dMK2PmB8rnGqbNf8YXVbVekRtB81kJtN2GYjevNmLditCHAikPPeSd9g86zzycCYZB3DjnJU",
  "key1": "3f62GjhnmMahhw1sT4B5A45tbE7NiRMR1Uj3581A6zkCpY7jg74wXazS3kQCqpyAVZk5HzqXuoiNyzU4Z4SukbFf",
  "key2": "5xLAqsWe1AJ4QU1hBZiAZU9SaqcLfTZ7gHktGhptJ82q99qbEyrxesHkzd6LQyxgcSjvaw8byduE4FsrMyHEgvtB",
  "key3": "3k1q2MXMwFPU8UzqGo8mZiekvqX2z9skS3BxEm2ApwFWaDbya53u6CTHprf4o8B74DvzGufJBEpx3ex5PLmxYCGL",
  "key4": "2h9hJTCzzq4sdkYnM34vXhzuBNLUpQiVhSZqFkSWtcH1ZQgC3DCtVrKgTz14zQL7gF7XMfkvrUTPh6AzN2ATT3bq",
  "key5": "3h2CqRDguPpHUVz3bNWQ1ZcSjCtNETZviZ6igy5av6zbK7VaZwbHNGVHaa5mneMQtDMDHJ9LHpwTGuKey43mFUUa",
  "key6": "2Pr7J4GJGzF4jdMk8q9NuBRh9P9gUMTePFPBzQ67iLkD6shgr7QvfEp2wC2TLwpB2JKcDvAC2TRdECGQz9XgUL3Q",
  "key7": "3jWnT2Ko8bZAzsCQbhAJTAYHQNEoN65wyFMQAvZZAEYQhNi5LEckbme4BmptCj7SyrFcTV7hxnHorNPVMSakNZeT",
  "key8": "3fcj6VNHJrpwhhxLCZrjC1psxp9PLqKxfXo12X46gtE7wtowf6zcAAEJH6eXCAm13FFC7DwgnxUEksHGSgDUqjFm",
  "key9": "3Lu5gaWYDrAbQGvGncHREDawzFyNSjfSiJh3WCEXy5qMtB71BAvd1H6sbtsfPCceaXnP47sZFGAm3wyPEGnkKrFa",
  "key10": "4SJcUVyhTe7YmadUXYTVifXJPwfxAwbtRYBti8uJvfFhgp173FyKobyP4FAx7CwFzJEnxBGgNdbdnVszArnkcAQ1",
  "key11": "5ZEL51qmPxdF8vwzE54DLAy3rrxbb5YJEhuriXdAVp9yzqW3jNDo4Lk8UfL7rJn8FgEE8qPbcitpnAErRS9XS1qc",
  "key12": "hFEMZMyxHxfaNSNB1DAzfnZx7MKZJoNg4QeZhPQ7NRAjg3jNor5qB6FP67HZVAcgRMgV7ZPkPro9jJmNtKKxpzU",
  "key13": "2An8RH8emjzPR8r8HDojKSEH8YeJDcvkroAn5jnff3pa8HQQyYgpT4hn8VJv53TdTCCAt4spqzkWjafGEG2faXTr",
  "key14": "3iDJ2Fnptu2yc2xNNczLnRynUgWZuJrwxp9D6cTTtce1N4LVRr4QLn6qabEXC2mmJG92sAzFxLZAzwNmFHqhS4vw",
  "key15": "5KFo58azXqKh9N9Y5qY9JMbaw8tB2TpZ68NHCr4P7PJaACUArPd1CrZoRK3NZctpV3TGEkdzSPnJCMbcNe345heB",
  "key16": "3AX4MkBw3Z22JVDNPwqy4DgsBjhjDQk3SpqLdRUG5hHfejLiZfDMYMFqhfr3pVp3puRhRf5pFPQbzyn62mWXhgYP",
  "key17": "43i84V8YUaJPPyv18fvhYtpGVJQvohAFSZBnRrcv6XsykGprVdPXE8pAn95CtFnqgT6yBYLHoy65wBuisbG6Fkdn",
  "key18": "dacZ1coneTP9yABNCNqwSyUiBBLeHQfhMCjFXkEZrbaic7QmJwdR8pnKJT6DtkTuHn6eeB43qRKyTmPPHx9X21j",
  "key19": "5DphzsiwNJpCaxqZTY1GSR47JLrPk9RcDLBTNyKAwnASSnePxacWCp3ZX3DxuUE73mFdmFiSDRHvmu2LjgLSfY6c",
  "key20": "4Aj5DmprCXVoaJQz3s4j8dTPjUg7SF4he85eMv6HFAHLfXEKDm1Ffxwrsw3fNzFnq5StZ586TsVtAG7PgS6ifoTw",
  "key21": "zDGU7hkz38ZKvvPcfwF634sPM9PooZhcKxy2bbCLCUv286BFt667VGuE79wAqep3jrUQLQz8rcgNN24j3VkaMMw",
  "key22": "5KnKzNiPTsAJg7vWWrHzby5wDmmQrusGo1ZBz5bjPaABWRUqQENgH2CVFbc8PJp91HjkWuieZRXqtUtBFVXrZACQ",
  "key23": "4aecYaddf2nna79aZnjA7Re5HTasa5wLpQa4VvbXJS8c9rf1nDn8R4JktLT2Qt2ZkbUfLrqc2diT5GYor9nvXBax",
  "key24": "3di2W6FMBD9Cb9TWdB6T6x8svuiFNapoJS8ndFWvKfswutSXWubsieBLcz3yVHaCrXuWU2WzUaiz4HvCWV3tqH8d",
  "key25": "4Z1htB2tmFAv4bTBvk8FNynNpXS8Ff2X4Jwc1HCkacyb6dgEXuUwHkRDoY8Q3GJgrF7RniZaZSEDEf57gLaGfh5x",
  "key26": "28m4biBm5km4wmAsChZ35EqLXTYZB1ZakdBbxmgD8enTk4HESULDNL1z2na1VRXEBtVm6UrHDX8B1hkCJmhjJmWc",
  "key27": "5mgswUuuMq7r4QjQxemS565RgcXHWSLNbua6AMsoe2DzHTqmGuX3JDu5MLhtPrh4nqWLRa8hDCWF1nbdRG3EUKxX",
  "key28": "3MrfsziHTjjtdor6NdRHLzQ5v1wnqJ8TfRubYbxGHoHYfCkooA3iVqhX88dJUiRxvHZHVg3FmD4fa4KUiGqXVFfZ",
  "key29": "4Wy4zfroProAqGEkSBW2UrhbPofNoq6HPKxhVzW1uF7zn7z6f8JphLGvNxZp9moZH113hSg3N63m5anMqov5PJ3q"
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
