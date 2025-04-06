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
    "3pR1EEFU57btmRzUaHqXFSREA3SRZxj4tJ8Wdi3HF4GfSgscV8T3zDfVrNyQEhfMmkhSPcJDVsXwJSnjfp9AuB6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26q8VHCMrN8r4whBMwcSZN89ZsX6cW1Qxteu9xSZeJ39RJgFuqyaE8qyESsmMA3vJTmXo9UwP7f5kwnhVUhT1nJF",
  "key1": "2nqy4UD9vmoJQbtbyDZ6cznVauEH71sPD7SwRKArEJ4db25q6VzAPsKAyGoD3RxFNf19Ui92qt2fNZmo65i3iDdw",
  "key2": "3e3omK4SZEUePhjGBUrJZ4udsePKwxhPEYYTYUbUegpdBrP8iZPDi2mdjVtnirmW3uM6S4SWCBbA3Q7p8FG3PdLE",
  "key3": "54Ca35Va6um48sAUmFG1KwhtzVpcz8CTn6vxr1yHMNYBg9yUDoZdvJ7iCorDUtKMVNTWbHvGCzq1GNNfhEihq9tn",
  "key4": "4Shsb8cZZprLxcxCpK7hHvM9Jad79eYrLusWJdAEHhmFVwdKzhYPEfXwg2hVQrK1QBPgiin6jSkR9N7XLR1khzrn",
  "key5": "fuhpmUx3hogAqnEzN9aaQVm2TXqGp6weREg5Z5GWga5mPn4uzeXLrFAY2HWsP24Ko4ADRnbCbZ1XfqMnbCfwiZW",
  "key6": "ganoWnyTuCRv3kUEckmiLDjcryQnC5SWoY7jJzX6BGn3BGP233EEhKHMp5GVfmMbjBPBKW3k4K7m4Fagmx3giUL",
  "key7": "2z8fqh2GLk5a3jPAk5tP9n5RZZpuFViEz3whZyNjagzvQuXRQC2KPz5RywrkFcFG2JAeVAmab49Awk1iFNPLCVno",
  "key8": "3nL7oFNvYq6sjZCjzjZYdBzUFcG5iffTTWkTsEFtvQB9qBWjiBcN6rSC4AxjLdFTR7hDLVXttVbhXT1qegTt85uC",
  "key9": "5z3ZBNnPJj3rHaDStxTZJim7xKnowicGQpuXSYf4qPurJjcqxigsQePddL8zyhqwvpjLt69dGcmkRWL171xajysR",
  "key10": "5HXBfcvZ5C4Wc2rF1S7PR2GmuAKHusZJVCcyoKhPEMt4rN1P1UqjF6zxJiMa2AdebaR6bQ6u1kQ4N1eKVCaUNpWs",
  "key11": "5NcWEVuXe8si2AYt1adpRAgnGxyus1EEToH51mH4N88pWDd4Y9j4ntFat5K6jApuMFuYq4hHTAS4FuenEkKzGrgW",
  "key12": "5s2EcB4eYE3qYnuiQjdwpcKSz53qyA38U8gSkefRM17e2ZjeD7oEeYvpvDzmKdVSK1jqBG8cQ2AttdryEV8AN42q",
  "key13": "4Ke3LuLuiHCcLGvgbCn6iTw4ibsQkeB1RrkVfM4TjvRqbEywmeAHSLQS7Dx97m2rXN3bGb21b56M3g3nTDKVwbaC",
  "key14": "tz7SvDFn6aNvBANZ1d7kCCyY4xQnB6yQPqpCfLbunAxbwg7ZgYdyHrGZezn4JhmxFkHP1hp8z7MsTpWJRAnz8sd",
  "key15": "23ojNZucoCFjbkfDDbK9USi5edpsHhX9s4Hej95Jpb3U2KkekV52Qy2CWKL2TmaK9YUj3VVG4125BnZ2ibBs1KyQ",
  "key16": "29DQX1E4WTPUcqjo32L2hcwviefVr5AoAqKbh6etqGozeojFmr4UvU5K5KPrp5Kde9A5Rrzsn8TAv5R8KNe6ANDK",
  "key17": "5UMhyTxwmX3913WR2QXyu4dLRZMUVLBCAXtYEEhST3jGtvpgb4DtGeJxXfm27D1GxNBcLLSa8gugkZAaEvLLuAfR",
  "key18": "634o1oJBL8hB2wvh4aktPtL4K6dst7zc5Qq48durWVttrxsjQP6SewNchvQfv7SYdp2SocTJGf4VTG8hy9TVVasq",
  "key19": "3KjCj1JELPzgvifwjR6RYRGQFyGgSPFF2DSgeYyudqPtfdHp1uMgwEHiBeuCRpLaGsXYTF2rrwd4D2NQxtdUYeuj",
  "key20": "5Q7yaD1DXPKVb4huhLHBKYtQ5KRiF5Ae8DGha96ABCJZJk6a4z6pXBkPYcgmyttYi8LtQCXXNiz7nfpEBmrLTVhF",
  "key21": "5kzsW78LfwdRRFC6poRH8SqzJfePDRTfCbcPustaGWcvpkA16e1wT27ELXrDrE3H9CvTJUeQ8Loh75RWwDuiQFDG",
  "key22": "421bUGNsDKmTyuR8ZS7NKYR17eNk7cB2yxRprVGkE7K8rdCxdH11xi6dZj7bBvxBqjLCFW63kXLyf759Nu48CtKg",
  "key23": "5vgQsCh51Gz6jMWpG7ebgCgwcJG9HR2ru2TrdXVHLfY84568Z4RaoCthSaZbPtE3M7GxjBTPATPWLdRSCq9HPYCZ",
  "key24": "3BFZyWbs6k49jbvvS6UQCWDnxk4kMamRxoAVps1HuUffZ8FzZxjV3yft39r7MRo7hDeL5HjWAvnT8eGgHJSss6Lp",
  "key25": "2dDztjXnENtBGnQJbNahSzUbziw2MbHcCVKgYokxzSdty3WjR8MaP5RECRT9HRMQDN9wZmfryhfuxrwMnBEeunPA",
  "key26": "4tF3xpG2PDHGyR4jXG3B9dgHtX7ZvEASV5nksnyZwkVK6w3aCtAEux2DXgrLncgKJ6PwzPwwFTvV9auDRSxFVSg3",
  "key27": "5iqt1y6coVj3bi7Cm8M2aVjiZVFiTwRxDJoPWpkNUtGmrnvwwSLMNV5xEXAXzgxALPh5P8mcZkzFTCEqiqWSXx69",
  "key28": "5PFWQknC2sGGGf5A9xLT7mpL57728yP1afRXfc4kF2iw8krMp6wD5HsGa4xwbWtkyA2dDnLrk9u4Uve16b6LXyGQ",
  "key29": "2f55ZZDA7zoYCrhCFr4Ei8pETMmNrRgb2aLnCy2hq3Pb5t9U7oyEdiZgPDXGfMSzQWrb6SjZzePpvsx4ZB8Z7o1C",
  "key30": "hgGHtfnaQRCqjvgEe9kmuhHMdZGrTPN3ECVk5mHbfM75L9jzxmFUN7hCKT3r7fNhWLE2rpb5ZYhT5VJLb5161ka",
  "key31": "5rK62obHZgmuXWSxsBq74SCDEeztC39CzQeTyo6SYcJx2VtKRLD2E3C6ryxmqhZ7boiHmFyUfz6AcHhMGvzrkqYw",
  "key32": "3dBKanNy4STdc6ttB7LFpAH9DWbLpseBYXaiRCCxbPPLtokprXRkSBfscwFetvyjF2M3dg5XYEvWuZh5serEykH8",
  "key33": "3vcoRF1o7uyPfH57yc2Mh4ryCF24t1bXG8p2FRPSFXVCTNwFz1uLQmN8PyhuBYyqRuA8GTdLBYvsKaD5Wj4s81ee",
  "key34": "T939WyNKcgaY6RZ6np5aTESSWLhGmULH9kazyWywuc9GNKFYJ6gQXGcxJQccQTG1uvwacpaq87JrtY8aWEpMnKe",
  "key35": "4499M5oG2xrf7X8DtE7JuxURpJwQqhTmHidZ4Fjum3x9JdDriznvaWxKqNhG1rumpKdguLzmrrCQ9MUtYPFJtCuU",
  "key36": "3z6pTCCZPV9qR679DpgxBDJowNNvpCdbALKMcSq72zBrZfUdVvADQEj4ne9BeqyiQNyvyHRRFUPX4sJ4dydNLbFY",
  "key37": "4RNd24A2t2xQr4w9AuewubC155zRuGUEb51MsgSXtnZ5AZeu651xsYnoi5cHikjjQ8Vu6nrAoMqSXSnAxMCNQ1aZ",
  "key38": "22uTLBRvXGoHgEEG2WcEEq1n8eZHfxZpBBGj2R2uyPmAVKmeS38YJXHdp5Jr7NbpWAkenwKTiYFLWs9szuZahmJG",
  "key39": "3JM4VAFosBtn8jNqw8Fb7QLMGBayzWd6pAabGJT2SctjZUzjMhyzzTxbGDcki99dNSZD3qarMbE4bqAeA7fwuszt",
  "key40": "4p38PLEHHsJZqqmb22u3X33qbsuqvfRZi8TPCvqmw9HHbBEPfCEJcXQncs52Z3HNrwmsfzDCKnPLmWd9EXSdZWGi",
  "key41": "kJJg64F1Za8MdBmyD9KcsH9Hd2nnBfxiojg8CLtgA6RxY1SS7LRR4DUeEqAeaUR38cjuwpWAgugzpsM4dgRDF76"
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
