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
    "38n1fUqYLcxTdGiTsSLh87Cp412y3dx2jB48J1SWoAjaEspFDg8YHysZQVkL97hAt2vvMyHZogjJynfCdTtZHiZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KXEUPT1zzF7w8fN8FpZmdo8EbFCyAbvfpdr94zH7FZpLsk9X1ewLguf4jF1YXXjgC6GASSkRW1s2DQC8gE2KigE",
  "key1": "4rEFwvFyFADWhGiodYmAcssmVE4vYkcsDQAdqcDiCSKHNFfbAVFxz9T2uekC8o2FboQYCmDFjXDBQkUcQjRDERSu",
  "key2": "2DspXtUNf6BmRB1rTfyh5Rx9K8zTwrRQ5aDtRFGJNgW3c6WT8d7asXXGp3x8E94YWMiXDFNN6Y5E5zWejvdJgXyM",
  "key3": "2hhPZZFxdpe4g8VFHendzDMsTTth9isFBBgNBqqrtitmRndF6ZmVbJFcnu4k5o3pc5BqaGerK16SqVxVMaS6F1wY",
  "key4": "2YSxMb8SdSmUL7vsjSwn4Jb8r9ox7f99fnRaSW5Dk7xtGDXiNeubWWZdqP5XsctnKNn66EAR98uTUbSrWZ4LA7bo",
  "key5": "qcCdDbiTx3BZsGYB8fEHAnYNrG5kBkmwYCeH6ZpgTjb5csNnz45XRGmvq1c4Qe7cHfpt1SXQCf5bakeKrip1VGb",
  "key6": "2MoiVpztriJka85Nm8csEAawXB3yoB1E7ZJDgbaE9vimRbuqGhXSB8NvYn4aNYc9rTqUqmMD1gGBCAGnfcNf31Sr",
  "key7": "34LXgr3DZJ56ju3xFsBAvmLMj5rQ1BN9bLhmpJCtQnC4cMigp9BKZzY81iSfPQDFHaV8iq9UZGVX2gA5ouczBysW",
  "key8": "5HGqWgydcM1kctgUijDSVQoCCp8RFsz9nkyuXR4o47v7VLMBpKxkmHDW1tqUBmukxbHRjULBfAojo4z5gRzQcMfX",
  "key9": "dtijNspmY4Sb7QP3w2BvwgNgPx82Cq9gA17HVGHnuDHFsdsZRUXXEJcML3UB1xhN1ozEdYxBBKXJdSNuLteTc7w",
  "key10": "4U5h8bSr46DXmoKbQkGfjyzJ6SGTDevxXT6Jx42aAToqKQdimrQsu1BV38aBL6JMGCBZa3e9Ns1cFkgyaKmdeWr9",
  "key11": "5K3teU2sq3dcrxa36hJxz3xf36WT3CYYpjJZGS6uPC2vZm5Wo9iKq2nwwsSZqSeCzvHpH4HyZDBcBacrXF9rKQ9w",
  "key12": "cthdYRMk7ioyCqbJLqe83Q4FghpSLj3J9E7w61xJpiYvmz4bkR671oSuZkMW48wMabPaGswPEdqd1ZwVyJ1Ag3E",
  "key13": "5QMgngR2CwatCJQukM1DdwVLCo29MjqtUMQxW5BZTnho1K9CPpnFeydpUAh6PNLqt4GKYG2YaiQWJFnqYxwpbAqf",
  "key14": "3cAyPjTWAvYfX14eV93WKZjRunJTsDz2iFyRjdyWADuEeJktQyWpM34H3c6n6dNLhEvGxThfBfTUDk6dzfDV8QGH",
  "key15": "3AKtcaAvzKKA3o91UxehzMooiGJRo9p3B9B4SF5hJpXoePC34zMPmrnd8jn6wscauJHAX43Quya6ZAdqUEHcTSST",
  "key16": "4u7JZnDhHtsLz4KGe7XFDKgZ1nZQU6jQF5cD7Psy5sEydKXx9TLd8BX276nJgSkrVs191UZ6FbEVv61VLQTE82MV",
  "key17": "TeJkihaGNGFK2t5u1NtDPq2dkbDwRdJ3uqXbHPwQX1bUM3chY6GdsStfVBmcMJEYtjEcgWND7oWjaaPMJ8FWevu",
  "key18": "irhMdMEEcNtMQwHyR1yZXouU9dq2RfzmHivQ8PqHrMdt1YgRp9nSPXwjsnZbRPtj7r7N73A3u3yyKvKGkgKxhzr",
  "key19": "21SKzxRA2iRpVvhbNnVjKdus1SVbR8VmUsoQLYyMoiUMrznoNfNKSDabYfRazUq9spzJJydYC4zRKKJZJaoWqT5e",
  "key20": "353XmkM71SfSNHPtLxHFQp2555D13vpvBkKsobrakLP7LL17GgtAFp3WAyPM72noW1zQLfEiF63ymKVYxQMGJsqU",
  "key21": "42HS2MFwKWjHvGUQwrmRsPffdwP59fS9UmDCw3rhsgLortm68BEq4Jw8nRBv6iBjtM9xJ346YQmEyiD9BfyceuBU",
  "key22": "5VjHeT4dPZD3dCFm5phBotLwaTi4Ap7WSjQaDUTtpkcN99mtC6bTFUaJ4Renksi59ARTu9EhZ7rTjsSSLcYuuaHd",
  "key23": "4ujnLM6grFoKLXYHyQ52nmMj3APjUWxzBJepciXsFHhPXQm9cN6SgLDpPEoMMDRUCA76Z6X9nakuk5xXVEgQkuLT",
  "key24": "3aic6UWKPsuJfspkaUxauKWR8xBbTAACeuUMTSxpHjaxqmpfkgo7BZ5e83AfMWzYEtXYHYj1ykC9dVsEib5mDMVm",
  "key25": "259EPDQmS2vqj2dwP7pmZeC8BbwmG3RkyjEeyze679UXU9eMXSExyWVo7qnjee7nD6qUTUEzpcWXzzrq2M1SyvwN"
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
