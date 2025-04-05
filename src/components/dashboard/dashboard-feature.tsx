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
    "3ACgkHCun68Wf6ypMH4mWZ7PjiBkmGSNjtUBJxqbLjYRmHhQ3hJ5QFCxJ512eTVGFbff8gELYc1m2cnoWncdjFCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g3NY5ALJRoe4dDAkvhurhd9rQM35zVpWSauFw6jrtKBFSXtrjC9WLyqjkVNRiACw9G4aQ6GMMTi6Mvrri5fpdKG",
  "key1": "5JSBhiBPeHcyCiNCJqFYvTUkh4UxhNmi7KCan79wHURN3HTaY9Tm33xSj8xZTJzgxkBzDo71deWMBQZBkGca6ZCV",
  "key2": "2AEYVMBZkdzgrznEWgpbgrSNHaGjs592RtULhkAHpCugvJggL9xGyt6zNdF7dG51Wb71LTHCWmwXXdm6WTMEDZFh",
  "key3": "2a4ECKAq9LqqaUhJXN7HYmRTsoaY8GbzMh5LfGbRYApWRQUmSJAep7KBWVB9vvY2FETbzjiPAt4To5w5Ri8iTqy6",
  "key4": "3w7HSevmbzVCVJvehErVHXNTaNrpFvetBkwCviVj26PFqCeTrL8SXhb3tR2Dhrwwc22TddPDfo9s9Boi52ZFq19m",
  "key5": "2KauFmTisJDF5F5jwDW5U2apwPFsY1jhdgqd4FdJ56WVKvVdZDAnaSJYpY5b1H6bmtjtpX9Z9Y8qWHeuU7vi94Pm",
  "key6": "4qN4PgHvyt5pMJZURZo3AX7EKpMxsyhMU6CVwtF6DoiMTikfD76XdTZKsCk6recE5FXoJXge3uRf1gderDojKYb4",
  "key7": "DQQYzVr3ELVJXG2xmKxr7ubfx75d4FLhEUcwMQMUgkUENUcNKoXc6GWQctKzBXq1EnZ91hqkewoYKhusPyfShUV",
  "key8": "2zaKEvCK2biJ7kGgLKkJTPS4itLjrE9cgQz7b1B5uMjz6E2afb17F1msGRMmeM1khbicn5gBeFoGpbco6wm8SAFy",
  "key9": "51GCBrDDxhseuwRQbABzL4QN1SWksM9yFbRb57rXVCARtQkD9VbwX5RePMYjnjWzWYxvCQbfxkin4iGtfZu8HEr1",
  "key10": "5m7aon6eEdCkRhH4DLesDs1kdv6AJMREgRpH8mme1UJ8dS9cbJ27s6izphoLRaAjE6HFJNtX68TitnaekcBan14s",
  "key11": "2q8j7tZwFQbSsvmVjpeoVyKWqFGsvHUCFWAFvV3auTvzZWLFNC1MSa3piUPvJ1phRkTYC8HL8xvd4p3eUvcJfJMj",
  "key12": "32z26QkGrzYnnLd31Hg7aQuQs6UecAkzxjidwkCrPQ3CBrdo9v3iW6KpuK6Ui3WbHh8Czpn5jN9JM9qXZg2CvLV1",
  "key13": "2F4JBgNMNPqsSNXS1LH4xZrWH1G21EjMRMnYeQWPeN4UVYEr1mqLe5CEEMW7vuRCxPK7mVe39YYdNrwCMEufZQJe",
  "key14": "5jKs9uehjXYA1D1nRCRG6npc1e2e4VRSxUVe8jzjBfvam1yoiVQPHZREGf2ZoSUFkwCWEW89mBzZrraF51j8jMGe",
  "key15": "vSbH8qRQQYYXCr3fCX7h7sNX4ByVmC8Fo7krFGYVffCqiavPzjjJm8Bnee3Aerzvi8qzk4vJpzX7JnAu2LCTHTS",
  "key16": "4kP8QynT47bTMyGqYW7ysv2Nd7KwmT7A2WMP19SNGF5twn1pGqWV1nXKY2Wfbo33gdTY7ThixctmaFkHpZQNxWJp",
  "key17": "2XuLss6cF35MsjFDVfSJgXhLvKJXedMfp3VYYN7iUahfkS2wF13gYJsHCT1hbWKkFgawg89Ute7tiNibonbz5Xiz",
  "key18": "2iUrtgksttp9YvxQCL6aJxvLuRE1QVD27oHob4zmxFnugNn6SetcQniW3he9M2aRT6EAbKtMdecvBRV6oziSCg6W",
  "key19": "2JLARAitLMeXpNC5HPeoKJC7SsLdWrEcvgWEiNMi8nwvTnj78Ct3Frkxy964L7NNa6miHsQGv7oCU89Qmr6kosZn",
  "key20": "3raJ76SexSeHwUmaKhYaJy7jhprheWNPu5itX8qpTavjz2xKGCs6WAD5L8c19WacZmHkTXn7tKh4h9Qt77R1ev6N",
  "key21": "5D1Rc1V5zUdutT8JmMbyXgkdqWi1v5iXSsShQ2TUNxnFhFSVosfxtJRbEwzdE9Cn8MuZ9Lg6km6e26XNHzahGqJ8",
  "key22": "ZbHvaukgP4y6XZ3MAgoSLV755DKSxN7z8xWRpsccrTN9PHjxBgJnKnCM4jwPGY6Gw9c5dH616k8tztmXPt5VkHg",
  "key23": "WZ8SFP4UjiyjX5soSc9Cx15ntU3bBSaxBSRdSGjuPZCqraMsJBYApwDs7xvjMRXS1BqXah9ZNREAzYboijrsQJV",
  "key24": "2tj2RagR87SRLm1GJZb6m2NC8Jqdrtjf3c6NxXaHJ1hUr7mRyJFiFCXxVqJ4Pp9Z2GkZNPUoHyoQ4hmeDy9Py2Wg",
  "key25": "caR9CF5Jt2ejusutEYaCuSwBpXNbjGq6VU6rmjkbVZhDuvy2Mf1RN26SJENgN91sS69J5FwDQqCZ1ZMNBnGtL4a",
  "key26": "2biWHNrnzatgTsena825CRAbZFY94B6pNFGASNWEB9F2RmiYLBYecqG3VZ3NkgwLRzHRyqkataUGnLmr3gEEUTxH",
  "key27": "4uig2S1DnTSqqt2gxESaAvy289KXr2ArfmkH3f5P97y9muDouxQUi9zQezAjWr8e9aeQjV4c5gt25ag2M6AToWZG"
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
