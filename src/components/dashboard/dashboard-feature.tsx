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
    "4KQN6pi3rdBTYij7FBuEvJHBwMUNPy8zjkcKzWCM6bM8PuFngJg4WWV8avNZvgx4VXCAMM9rSmmPN3RevkXg4CM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Eg87bXGSzuSvZZK42DrVbL85VvKLzk1Zoey4CR4ftkbKpMFPNPc4WAMiMjxXpVXVrA4zGT8UhuQoXbfkYxqwcEw",
  "key1": "2HDz5iGsZdsEJubt4mRUo9eyu557mf6ZdgvL5n7fnJryu9i4HDGLu7BLgSfEDHpyeRA5KS8ExKFs6zoxEB7p263z",
  "key2": "28P8JMJynZ4jR4FaVKsT6v312ApgV4Uc73vNuhE83BDGgnXeaMR6mjTyWPUtV5sXk232QVjg7N2m7r2BQnYYoX46",
  "key3": "334cGZfK3Vm9g5YBoUgiK2SJBikyJsrQUX3cdJVcdfxaDXNwqr3Co36fZVjkFFU8T6rHCQYc5qREvbotvQGw5gp6",
  "key4": "4FV9iTmxWPYnBSS78jLgjn6bzARY8braMhiEa8jLWJqq6shdabZyHvXyeSCsNYToXqa5Da7zZXTNM3QQ5Lni46a7",
  "key5": "2nCn2v1dhaVCvxpgDTL1mtCz8mLpoB2jXfDTarDLUR2pDPnnwzPVzncZ12jCV9fRrgxKcKdwz5vjdgVX6JJD3JBd",
  "key6": "4zFQY5dupBuRQwAAYA5v9zTfZZzWD2vmudPHWuYqFCK8KBZ4CffamhzHRBVsZynZYGeQPyxVNyk1ECxBScUdHtVY",
  "key7": "3RsWhFj6dtW3JMqzKYB8uiB1DKMarC8GySJVdJiHmtWyYCtn5gTYhpnexfJfVDxdvi47dhmDEWR98AL3n6j9vGDq",
  "key8": "5r2ys7AeqhdLn7cr9D7u3znx17iwtJEwr5oYE1q2Cym9bopnRGqAxXXSmtqasSwoLyt9RGkMXEcvTo6AoruHDQDQ",
  "key9": "VA45nPRwcJi7GUiajqKvyxEYHem4AqTkmWhsVazQKuPtqNogJMzzvDNJPKJZhCmvctUnTxCDny19t21Whj6h9Rc",
  "key10": "5kHscKCdK3TPjMPxDcvhUDmLqUUntngje5YQwm7vfpMdv7StGczu211F1tnxb542BKiGQL3kv43cMEPwBn2MWtri",
  "key11": "2v2ttGd63EbuJpwyvLaU2X4Pufvohz8fnFbyjzUFGmcWhBA5nWjYy6xApMCybxewgQvUehUwUgEqSTxiwUpJoRB8",
  "key12": "5RNBGL4dVFck5su9LqMTLT1GenZ49ANZ6tVJ5zdtZKxMvFGpAsJv2SsKAAfb9ca995WWd4yDXi7jyNHGQcZMPZ6W",
  "key13": "4agHK7E2nL92roMueXk5vwEE1TPPErtKEo1kAo5VVnhq8n369u4vmVXmaUwxdVDbjaBaEcEBvZrsQD1WNEZ4zUf9",
  "key14": "4nMC2kUJFNJf2zuXGvAmS2fAeWdmAneSZwGcz9MH1KqQLqmVr8Nru386wtgRP21PNzSa7gDokqr2EsgKrn8L9NUd",
  "key15": "3eYvjXE3dRU48csWmev9pM4VfxbZ7jaQ2qDL4JLE2Tqza8DhaxwWZVjMV44i1TQgz8emU3irBvfNtqh7sjkUHzFA",
  "key16": "66wVshss1MM5ELCb6V2LEDDy3ztLS31fekuq5XsFT4kq1igtjnydeJBwfGmsVRcSHKzo27sqRYaJbobaRnkv7j4Q",
  "key17": "UZh2BB2Xfwz9J3dp2pYMVicjer9XSfiqaWg3zGn1BDKJjqstkJfvrwGfA8h9o4trcbZvU9WTdTQuWkNxr9sJ6Jx",
  "key18": "2eP7LFv6Bf6iKJbdGjxA1SbQyhZULNqvgZZhoXTyGL8DhW6hn7XNEyfnjutQVrDGRZJvZse3yoLLuwmgbDyaGK5q",
  "key19": "32YBJcUk6xkiCp5SM2c22Rpsp6AmD7AjzVqXMmTdHHXHoRZ8CXDHnTwPxGRtwXzogAQ97DYGBvvBqL2R5S7XwSeK",
  "key20": "67pTDyhuwvAvm8a5wBaJRANRvy6ae8uFovNNLJDwBffCXmw7xTJncpCPAhvujskN1pbMBRWAhTHqiryf22myRNiE",
  "key21": "DpVNPpoDMhoiBzLCApLiPR4Mc9sEztmtS7Wu3PnvKsu8K59LM6p9b2NJeYh4j7nfoBCPAodQ1Q2ZYhMF2TdmnLi",
  "key22": "5aGk5SttR7EuDGQHHtTYbcRzoZgDfBJLkJjccFhr1AqjWHu8DnhUCpdY8iETFQfWe2ZPm4kJ9TVZ1WYWS3s1mv1Q",
  "key23": "qFMtrmEEN9cA2nuu25FSei5qZ6QqV1bcPcPXhSvAczwM4uB5LR63QBgqbSwBn5R1VdjHgAfozUT1Vn8MnHpFtvj",
  "key24": "5GsqttfLkMMGaSVw4kQ6zzfBscLkixXnininBLhAfTwAGhQxCNAeJ2f4copEkLe3sSnsPr1o4q6kciehom5HgKhc",
  "key25": "4t1pjZiduk3XEQLFAjKDg44siWTCLcgMcza1gUHEEBQFjbVxTifBUDaeUwSNCVEkWvLDn5GRubcGwM5xpuaz2BYB",
  "key26": "5S5KRxSfXY5xj3ScBFReLqPMRxBSygaPshTWJ16bxAT9SifeER2jGJLPCuUkVTGu1sLCX4tBo4QPVFXBKtz1HcS4",
  "key27": "vpDdg1GD4fYsxMyPF3eMQQBurYKz4GiKzWHQ1b9K5Zf7MAXX32jkwLMGMf73MEPH7yECMSMepbn9osqBypsjpYu",
  "key28": "smbN6ekYCndwZxaEcra7LJQm2h9FiiEaj9UBDtTnszhEg6PwHfL1YYyQ5FZPqTRvQMvoTe3yqNX34EjvPbnamXZ",
  "key29": "4uhVSpPTWLrG5hdywqyJ8fXBFWzsq3GRQEykFaG2XYHbXxe932ErKPS6psSoC7khUbnUXanj4wPd7Q3WSCFMZnv5",
  "key30": "4kHjuJYUnwuNZZpSN5QmwS6jys2SbVBtWcraW4Dc1uAD6QgMtLn1dDabXeJjaNtdM1pLrScgBVirzWap5MQBq4Um"
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
