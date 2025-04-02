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
    "3xRz4QqixRWnqfxw1sSMwRbb2uoWVCm2X8hZtGdXb9FuubmKEEuUYUVwTQ62ivw1Ar1W8RxnDbv1GzRr2L1kZZ3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wiuN2kGfZyj3NetX1SR8G2hmJZU7R4R2QFsYvPL713waCXiCWCD8MhvHLLswJBomVqwZw6jvjmnaSL84xy3NPNw",
  "key1": "3FztQPY3VkBt7JR5NbWeBq8J4U6b7oYgESN2DBfCSbbpbMDQTeBDTjeGQcxKBPrDWniC2g9RbokLYCzea7hr54xi",
  "key2": "4xZ9jiyteV52PXMtc4uCAGKf5VBNvEXL6k3YKrdKh5hzqdkiGUbS4tkxfh5b23VqAukZKGjt3WHe7fid4MrGNSS9",
  "key3": "5uHDQQh5vwiC7uGufNSDeYBwqDTEEaL2Xe8J9fybrmPjok8ZnC2cH5kAD3Ru2zQVAP1CVY3RxQuUreuYMCkGgmyA",
  "key4": "2hayw6QHBWWePmQH8N2anLoYYWmw1esjijJLZYuD4RVNB7mHCnFa2JRjmW3VuxLLLeYcks61AqEag9sN9MYxWfjN",
  "key5": "2MquKPCwVXtjJC9mCi8RdgqZFAyJBxGYw7pahvnWf9JGYF8Y94nQkizRvATqoNXbRkRJA5j2BgipjxpqR9BNQYhu",
  "key6": "4Cck91d2FeMHmvmTX8M1mpuWm2a8PiGaAh8e6zNS1m6aDSWgJ1evNzsfevo2Yfaqa7Lxhffn1cRYSnm4Up3f1rkA",
  "key7": "2n5H7mj8ntjM8ra7HKEW4WWL5qp8AZbNBfakTAx3S3EGUpsWoGs5Z9mJ4LeEeMTDdYVRviipF51mUWeVENCzN3AD",
  "key8": "3TeUpkzSChHhgz1SS5S3SrwcevceYuZJs9pthf2ue9Q61UqZXncGx3MdTpkPbmh1N3M6Xwa8gxRdjoFR171tr6Hv",
  "key9": "5JDLGBjsSv7cZ9K8GFNzxeNCU8rwvXN8CP88umyxXfHs4sRsQdNyEKsK8kcKVi1FvRvFUTcx7kKNhTEWi2Pccbbq",
  "key10": "2Awmusqphin3hBA3qHuKSmRSbywgvGH9pvnpr2Ves6xVuoygrj66DVho8CKPPRSQxBZ78NzA3NcGRUXdPxr1gn2t",
  "key11": "AK25oHKt3Hu9ey88tbSRDVVmpgoujCPBrDzQTC9j4DndBM338NdmycmxeRHJngmk26D3cf5EzBFadbWKq8Ka85e",
  "key12": "44dCRfHPWr86dzKta8k27ArTGPJkopnk3F6y4owwYi2NScfUsDwWhyrb7t4fwQH5Ynv2ctnh6k6APCswr8F4mdN8",
  "key13": "2GjuUTRW6jXKrsatbYr3CxV6SJb9WBpRi3CLy4Pah4vbjxagGZ1fV3ENnBSSwNAonfFDHtbBQLEWp5Z7FmrP8s5p",
  "key14": "1H9YcAJaXp8iNbRaoPN9uqWDqBHZFRB4rHj9Jha5pYwk3pRRtVVehque9N2sCRkvxeb7ZLWii5MY1hKcQH4wQBg",
  "key15": "4kuVq7GbMwm559onCz5qNs7TAiSDhb7gWjN7BeGUv7fCe6ARdr7ZJmj1vDbvEea7H2wBsK5cYckBwcH4w6i8vYTC",
  "key16": "3bXopjKWY2SZP9UjkQ5p3dxoHy64ip1NjgrAArWRvxQneJhbvSQgrZSdeS3cp3Px1Uzn4z7GPS1mCSvAEAVmmk6i",
  "key17": "5QwLX5crW3YPc358VZcx1gGQ8maXJXo8jHHHQZCwvFoCnD4Ev212jQTMFiXhfWRx8RuWDqKcwnVBVfwBmgo7mxsn",
  "key18": "3zMTU67nCwizKt1t2xugxUr2TsTD9jX2HsRgXzquRqumZVBFXMVTYt7pxHjbXEHsFKBQqPu3bzDKCDSE2gaXoV4A",
  "key19": "3YHY2X5JiZVJUqCdnXvEk6wtjV37mr1mjafY5rsvYmbdmhFPwTvuoWmG1ooKuPGSVrLjnpfP9sn2RnA4398QZEVD",
  "key20": "3DmMDEoxLQZMuszTEtH4xCJYdFFR3gkTWJ312qY8Qwy2SpoEFBmHdSNnacYbfd12HX5oCXGWRq3nVXbzzNw9QeUg",
  "key21": "3mSpZjHSRLDKVB197KeYKaSYzJiwYBqHEHo9Nt2tJkpaUAkPacnHSGNkpXyFrWtV24GTFGbXmfmvQDVyWfmcYT42",
  "key22": "5rXJ3WFUKX2kbWZVa6DECqsX5poZxFn52JzRB2iPwL3w7dm3UdnFEXTyNixQHKN521iKMzhvHrP1U1hCK5xzqsk3",
  "key23": "4LfJxuQxfZpsEVMNVCuyQKAcZv2ctdwgqkV5B5dsbCbj7n1294bucmj8rABoL4PHq6U1zDG2MtkEAbRJQrCwEszH",
  "key24": "rdGvwNcRvCTn6VmzS5bArZwLX8y6Qwipkq5J7qmStt9CoRW8DsXLy9LRBy5MkcxKFEC3KyRJaKDK1o4nvLuYzXq",
  "key25": "h6ToUwBYLMcS5AkoUFNU7oKePkTrPLjAxmTdWwQ48oURQytDJSASS5gyvhtjADGQ1bXVA5yepir71hacfka131Y",
  "key26": "5jHkfAtvZnDe94Z9ydBt3Z1sPRo3Ta9ECBwootRp85dm6i8P8ikAawaiBrVPqAwyny4MbE2RPtQjZeSCvHqR6q1b",
  "key27": "6PG69vtnWkZqvvMBprJBpTN5VCen9XcW9n4u2eWbKEvHZ9MbjxTQoNAMc4QRgGZcuYpMEgmorJY1DQXxJry9chM",
  "key28": "cvenCfkJN4PiZeB1wu2447CwbJsszz8kftyQLmuj59vgoCBymTHt2fEFjEJPAZwXvAdQoLA38GWeE52AinP58Z3",
  "key29": "3gUWkzvXGryxmWvbnxVHSmexfTWqz4Jf16VWv1Fgdr5du5TF9ggNxG3muK7SgY1LsekvBW2w6n9R8sHkTZemL4L3",
  "key30": "5CsHXJk4HQfbAeiZjnBeB3f57vBgMVAgGXB8Hr6hZKriZfRjkedSfRNAY54em5MXssSzDphFZWoKGmg6BrTLvS8o"
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
