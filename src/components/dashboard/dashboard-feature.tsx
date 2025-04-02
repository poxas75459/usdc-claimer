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
    "f3iN1z6B4Dp48JSUxQFsLD5ZkttU7g15yTRZmJmAraBCKYWqLAzLEMnecgVAtAtQYhSuMnoniQGGqo6ePbZ9drN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E2fP3uCm9doZWhTcEu1FURNLhCdcL8KQKPutzBfNH2mUknZQYAFnt1YyUDo91S4LRgUxCHKt6P3YskQJNmM4gSk",
  "key1": "WmU8zqQi9HMfjnQ9YztynDQ3cEbWLnTtfXML911SsPYmqEDfHaTAzLR3zJHfBDb3d4nCM4N1iZV7dQNHZm7vCqe",
  "key2": "3MywEmEa6vbzk1JCRE5bALTcNph7RtwrFzkhyBKyCCGcxa8kstk7Diqx9C2pxdXbYXjP7Jx9jSSBcHTtusTgp9g6",
  "key3": "4mTeMC8oerbFmShk4T69mPRHQhxjXwnwBdW1xvAhgu2hAGj9UBQkBC8VRMDVxTcnCEj6VEozdsHnLuUzwL5GffXN",
  "key4": "2gZLu5MMgziZTywjjqGTx7JhvB2BRvNZxVAn3RaZGNdcKJ4TezBsgniJC5488W7qsXu1zurfN7kbHwk299graqhc",
  "key5": "2eNWVRFjk5h3qLJC2HF9aDukVmujiCaWMxowJfqsW6pn4H2ZFA7k1KnKxJNk6F9y3emyAeG9uSpsJZmw7pzbEjMT",
  "key6": "2vhzjYaj1G29zeWpJdLAANXyGcza48mGD1S99VJUPP8DwBpJTtf3UmgVY2iQiUcKZ8vATd3HB9s35nVQN87P1A1B",
  "key7": "3R9cXSKb3rp9dUdak8PEgspEzcdAh5RpEQ6mSsnjGGoLZnPAqocbEJywqQVUqLjSmQcnUFbGykbUeHZ8TXGmeiCr",
  "key8": "FQEEfEcHQSy5335Ce1YoZfhsibvnyqXNwbBNaH6VfeJWh7YgviqK8uttdFtrYCT7gAitmL4r6jgMQSpRJEBWY9v",
  "key9": "5DT7bH88kjFSZp8No29T6fhwbsmbajdo2stmuVdqF8eAKiS4b3RhJbBEr3CoCTYD1eedrpPZhhqD1EGmCtKXF1Rc",
  "key10": "4yMfbDL1v8kcg41eo1i9hQyDm1nXU36Kdd8FjB7WAp1pPfQwpYgBEVCvSd9sGdnbJq4ev742dM3oAgw7aqR2SSaP",
  "key11": "3chJEYefavek44tmaw3YhaG7cvHtJAydwGtEpfx9bdTQDL1GfK6u3dXiJJ1PpAjXvhjubVrLvG7muVYC6Mr2VZXc",
  "key12": "2YLDiXqqBaftaoLbDjCzBDgwwA74y5aNdBtuTzmkBskTTeYtExPqYGTMYB7hECh4FKTaGjzRbMMY9Xx7d488oGSu",
  "key13": "551QkETfDsK1CPHiRa5wHnaKxJbjsLgAZWVsfzDqfom3VWxRQj5t7yRAQJrGauftBx6YU5CiyoRXhzjQiri4cp9M",
  "key14": "2mqscr1e5JeUuHtzXM8EWbcZjhHTnFrFcciyMrWAQiRehfakS4zG24T8WZQ8jjM9KXiqxkH73Ls9mnucYtaTvWCP",
  "key15": "5b5dPzb1sU96WERF3qia5xcnZm544JeWfsrAmCRF9t53kWNgcYYKTtDRsZmrcbq1CyzfW33bASzJCYeKSyC7QEVz",
  "key16": "3uv4ddBsW61Khs2yAoNNY3t84UC3airBLoRj8TuNXvDBza6Fn5F1RptfaHGLEa2MR1Rkp6JwyVekWoQSw8ynDuvX",
  "key17": "5KFH2zNaLt4JkvFxv6SSnm8sKD8hCXNGJK1MaxMRYQ3KagY2k63Eom6MXUdwkyhRcMfCZyCipSTvEU6G9ZnLjyN2",
  "key18": "38BhE6riRaad6hzTSJeP9Mfx4vg3CsVeeyoM6eX9K8pwzsGb7ML7LARA8NKQYJa9LEJPYSU5y1Qnn2hbeBfXJfpE",
  "key19": "2iXE8LcuXca9Zt7euEfhfZm5UWqPrcvAWgfL3QCBbnY334iPjnp1RLvb5cz27C4iqQaCqjtypiKKovmCKd8CUV96",
  "key20": "4k7GkwbuoCr9Hfu1jTPMGwaftBeeCKw9vPQ4LtDmeWZG4WW4yeYZkNHzJeYvZNppoQoTFwwQhAM2dDmq2A11StoV",
  "key21": "5eRp8ANbTnPGgWBfSGVRn44EVYuPPrV77kncdFbgHRZ9Zj9qJsj24FNGDjXG7xRt5hppn382VNaY9biWNQCjo6qx",
  "key22": "4Cm8KA2woV9oYy6sLhTKmxSTQcm6NvZWxSBpzhfsMouMJw5xWT7TRtiA3mdQfFKXnosZfEL8pqPwGnheCafEccuP",
  "key23": "JSXiBQW3qLhFPqCx4oqat6btsoke2XefNhBqYAEmXpugpTsN9nsmABm3pCT2Az2RXrprHL68sA784kZ1PyxjPN1",
  "key24": "5k1Fc6qCboxT2VMg97rwQBqcdYcdxmbEyMRJW1C2pCYeRPDpmQDoh1v58NLPoRcJKUdaMwFFak17vUhBWyZ4moZv",
  "key25": "5u1qhfVCph4bJojrtkTmXmkjFPWq46eULuuiQaMBQwMPJ6VTgJLWRg2pD7bKayHP8SLLvYBDFDkyjzbU96HRo6Cd"
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
