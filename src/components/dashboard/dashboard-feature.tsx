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
    "ejYrNbXQ4KNWM561nDNB6ACek3fG2HUSVR5V3js2ra4gN1FSqQ7Q3aMuVxVgXFiQbZWgCmCvnX98L7SFbwud5aA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ambYQRerVFvwZeqgujiPAg7JNarAxn7EfwyS9wkTa4Zc5cH8uvWvFqeXwkxACaCBRVxtLUBHZGgraGRneNeLjDx",
  "key1": "2UTJX97qfUgDCrmCFn9kfxn6dwC66LodPJnSnt45pKH4QMn3SgiednLq6UfJtAN3wKcN3FNTDAPNMM3PSiEP7Ze3",
  "key2": "3toWKyCPQmpWMsFXUY5QsPJuFLTXGmzwJuNLcjpVFrPNYk6zQz67sUQYj8DXaqjieVuvLcCzL3k7bG7VmqVZZeu9",
  "key3": "5mkVpp38WnKae87TTs2Dt3CAdZMWU2NEJPqt7hsM5EotVsiFBKUvYAo8q4qpiQvB6QoGkNccrnNsciny4pCvXihW",
  "key4": "5W8QNX8xPFzSNYkzse9mf5URGZwsPUY5XLuRdRnoERku82oRQ93MbzETCL6RyW11Csp6WyGhg6jQaYcD4h6yN3Ti",
  "key5": "5SzcbnnwLJnSPNiidQ91JMCC6PN7z3K3CgjZTbWYKsr2p53hmQSj3bbRtvz1vrWZUG7DGAGuraQ9DJVMqxtRj6Ut",
  "key6": "2jkJbEMmoxdspZK7zuSgK9JJM6PE1MdUtFan5tr4FsfBV6s5k9YjFRMYaqeuK58CV2dNjRniqXsYQUym8h5xXSCv",
  "key7": "2zKus41bGPp6rLQhqahqAEzdf4QwLcqa3ATtizutbAAeNTkX7qFdSjS9VqrsY9bUFpSaHpbqj8aRYrkDMRfeRghH",
  "key8": "aeJuAV8by52xvwNiEbujVk84MCoJPT5ek6mH7413rsVxuBJQETxfQ1FQRjxKoDdumxdhx1UNDgNm6i6WexTnksx",
  "key9": "p3Y4GtowUrTfnhrCnLJxRGJzGEJzFJPTTrghsiysacax6skR1tYucLHWnRCqnnPNHR8MbvyqgVEda3PzCF6GRPu",
  "key10": "2QzN51ACfV9fXTdDE6pjvet7jTAs7ZXWLtNT35bhukymmJqyfeg8iHUfhus62N69kBMBC1YmSukWzpnKj6czGZPP",
  "key11": "5f7oAck6skpfmUEaQzHbpJgwSCVbiVDsGQtvDMsPXFYmYKY3RfcJximudJgAD3xdaqoTFEJczN5PqVZo6bNRbomP",
  "key12": "86KR5x2TSSsNfsm7r8MnRR9HrqYXembuQFDhErQdHsZgV85ezG1BNvbCrjT1dvBqkrUp1wAL2hfGqCiKT2Tjomd",
  "key13": "3GR8CnG8UFpXXULZ1pmmJ88HqGgXERWgPbixRZQy6ggiQ8J67EA8Q6eZxnLPDXeWvXVnAw3HE6PGNp7cXzCKj8jG",
  "key14": "43nbQJH7BUZ1261rg3wZQdnn8Fo3LirXTvv2dsKT4ugzRprojUypxw4u1oQ3BfpeNHk1qbfv9U6vjCqphftbrejG",
  "key15": "4QCAwGNKjgC5mnxLb9PaKgycWJmn5DSc69QJX6zihkJnve9cphZUqqZrX2EzQY6FMm5dttJgL7cS6TrCEomEv2jZ",
  "key16": "4B58tjrmFtFW3SbR4aYivk4oxurP9YMDmpoao17Fc1jPTq7N5M5527AP7DjjVE7hLETLg2yP7EdYw8oNsgGeioXf",
  "key17": "5XaBa4tQSp8x6HKVfkBWBqQMipL7U8bf73DnUoaPpyHDgESFq6nJjPMeyh6E93M1GSi3r6NxPX5pt9sYjpieeQTC",
  "key18": "d51nofriw4UipgLFoWDCC8Lwj9cMskoLMgFsjB567trbLGpdtRTydGokAyTJ5hwTfpgrVh2Z1pB7AUDfJNt8F75",
  "key19": "5XWeVjTPKdzih6L3E3T37URGhxAqH1u5RgjxwFs4dwxwSxo4RSACe6HTJs1oxDNCEvQXuZ27HsbE1ZAFcNsMZAHi",
  "key20": "4KovGMLkchjRenbScBVBdgpFDe99MnPxtW3EhDuJZBZjyeEThijEzwQAj47Ra46Jig2TvQHjQNfmCYYG4sBURNwM",
  "key21": "N3aMXos1UG9uHx2dknvCbLKDGmRNp4cEEyCNvyX9ia3HqQwiqQYKNbhBb1P1JrcKftJAstXqTX55x5xqUPwwH1n",
  "key22": "5sELwaT6P2qPjngDhfDXpvnBEJp967nj5HH6QjqxEjzW26z8GaopDkBfqsEWwZ7SYmrFNJZ8FP6RVH5GTpqWUrYL",
  "key23": "3biDvLyBZNDEngd62U5masB2VhEd86U5UsFrp9p1NG88LXb1T6QgWwGqUJfezpteq2Vfs8ok1pepNpJ3QZ17tJ8",
  "key24": "3uHW1fXypSD4aGtrjwuVZRBpSKJBZmHbkMQsxUB2zWqMy7M6YAp35hiB9BruwoWcV8yzCnDeo8Gat23hU1SuDvbe",
  "key25": "3a2S1cuhWm9MQpejaKKLJTTG6xLJJnKhCzSLZTTgfrPnoTt6kqZo31uHVZbyc11V1yzsHXDEkeyFYnUiD6Nybq3M",
  "key26": "5rn8UNNmaGo5fcveCmZh2mmS31NAbMSEP4o3i6R2tew66FWW2DUDPFVL25fB96iD1WQwgcVfNGKzuz3e8sYPwqpd",
  "key27": "5PhLE3QZFbuBXMtKyTm1FhvNYGwz79pLHbaT7JVHrxoi5FKe3gaToiVez3AVUKZABse9UVi8rH8ikDRNLSFAKZ7",
  "key28": "4Kuftp4tUtv1AgduH4LhY2psB5Wf9iJnKZ5GX9bY9j9x3JRAVpyQkwTamF4HSGZTzyMjM9pEmmA3TNGr3ZaaY6E5",
  "key29": "Zd1riojnWyBZmCmvzWkMgU7cT5AcFf81Fgbb5aSM9FffxdVvmi8ZwEF9opRUm1wfkL9RJhY2Smc2y1sCUsCdWnF",
  "key30": "8qDrrSyi8RjNiNK19RjyzJhk7drgXCHGvvt9jDJucw6sW824e3XTRwzbEEuxQa5mGSELpcWVRX5Ti2Nbvf37zFX",
  "key31": "4JcLKtR2V987UGiEiQu4NUGp5jAjWEnjcHdf5AdYkvacGwY5TYLCzAs1edyK5LMLVp2wEAuLzhcYTXat1TH6nHgT",
  "key32": "2JhFqEqgaQukceS6Fc8xgPmcMkCLVc92FVgGSddto4bKYvkTiZ4eGri2hBNynLGSSyvPtjmRLKPREKPoKFudj6zx"
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
