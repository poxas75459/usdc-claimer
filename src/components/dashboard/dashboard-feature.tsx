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
    "324mFKanJkJvZLr4vASrdYb7TkWerGvxedHdPUBJEpHumuLp6YkEvFuD1iUaVZWLmF6dvnknycQkNTpfHY6QkVCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kCSd1ssBYUud8fvByCq9FSkNrNerbfsrNEPQnA24qi5vCViHbcKE6zSHwJjGameN2ivTzCRvj1xrD6XSYfaWcKw",
  "key1": "47UhbGykYACtgBPGn3pPp76CmLhpP8PbkUrBfpUjhtdzrtm6q5aQFwPGvzNNZd3vUdbnfJn1kGEULXWmPVfyC1G6",
  "key2": "3GSJLsbjBdc395PxjvWhrEGBaTm8RjmhYaTxyk1NXRjj3pkWhHWNYzCg38XgAbqnxZTngBz5ePpxDL3gXH8GrKH7",
  "key3": "91vcVjKMNLigSNn1aXYdyuAqsWYt8g2RssRdyiBTKyaFTUi7dkL9TiS9j8rQGewxj5YUhnbtohZkhRjQMfXamVL",
  "key4": "24R3wGLrTQmPD2UtzvQ5aHWtCLewQCJKpwW2rzZzE5q9yYyzB4H7ujkmUSLczE5AGUTbcVBPWTQ1owbinnwNLGyb",
  "key5": "4Ph1cc3zTZ9Ro9p7oabwKfWRpTMP66B8ovfZ7uL3JrxxJ3Q69SoPMaBgnXP8wRUqwhX2A2dHGjLy7AVB2eycVWHf",
  "key6": "4h3W6T7QN6UWQ8A6YTmnKS716AfQeSsAxkvvN2nvGQvT172CqmZiuAUKqP5PW97FJRfXjJkrFrkZtRH598RgK8KX",
  "key7": "FgENYBjXitMMxN7efFkihYBynV23UwGwkiMSbQqFiUvygi1aivePQJj2uodZyKCtMFWkTzCgNvyMPHiRzVDKs4X",
  "key8": "4AnhDk9jetz5u8JBPW29mm9T5GptCB2uu5gUGoSuomtPw87i6niWpTENFnctiqk2Ga7GyM3MQGWE4o9muFMNKnnW",
  "key9": "i57V4RgEbbUDPZX3DtTFFw4ikmbp8h2GKGtGWaNhofD9FJUWJq5avP3bAKxqhmJFhtXnxfpz5ZLdnngLtcxUMf4",
  "key10": "2wdshxdK8QqdbeQ7o9VA5i92hHPCG9X2e8DMZVoviCNzX8wsqEqgEyT9wy7My3rfwY5F3T9pf8mk8jJ9kTmv6VPq",
  "key11": "2a5YHvYg6Q6qGw3HWfZk2XnHrL4FCAZZpTKzP6pMU1xjCkConrv2rWBt8W2b3JfX2Wga3umwdTVMCVoWrENgTgLy",
  "key12": "HQQuywCDvYyWQ3SzEc9AxyXPogt3YDN9cBdPMAyruuWp8EHamoXrq8qsorwEYraRUEFMotquTQ9vJj4K3STRHz7",
  "key13": "i3Tg3UBjYtWix81uJ7eQXSTsnNJHUMVmJhXzvBfdcgHA1Z8VxS8KYvEoxaKdcmRwZbjnaHBjPB2RjREmxSjDBAq",
  "key14": "29gH2JzmdFtqnm5qeGHHbj12rzSAVx16P4GmGXZZMHQfXmyz62VXQqkWwY4UXV7h39DAUHx4SFWGr6mMVPR1HTvK",
  "key15": "4ZyvrQeww1hcW7fBgTSa1RrGBZUVkKaAR8onfJK3xqvcUc3K1XFHhHwADftj4o9FwvSK6jaaFBoxmBzMbwC3B7ei",
  "key16": "24kfCFXLL5Bo8Qvap6gZc7KVYVX1HX8Lnx2BXsAmuqSQmXgULyrNrhbVpYUy2QomzX8nGCB1fztrPtCeX59uXWp5",
  "key17": "5cPyabQay5oSuSouYY65RYZSjyH7t7aSTdBh5yjWk6kFjo2qXUpwjiEzjD7Do2YGF4EzvPowrezb5JHcnaPfHdaV",
  "key18": "8JCSri8QiHASrR7WutUybeiaHap5BR4ESbWkUTPxnb7xS4qDNxKR4XL6kJ3PTPQ9gckuqoLBq6zPjeCJc1WXDBp",
  "key19": "DGybELhqLRJxqncmCAZqthSL3AiCGmmd4oTY8FYTzYEZioyGuoauprsPC8MUdtrbTi4gWmh4rqQhpHviHwMLS9Q",
  "key20": "23FsfGx772NbgAE9jZ2yHxPsppYj1PdDwponoUUvYQKudY1vhrFJce28JqyBnc6vYDVBGDR8LrgLYUgPNjT432oJ",
  "key21": "2d42ffcqYeS2VysarR4vt4ZtgwBUM7VCrRedvFHNsztTRUpZRqXLJ77VmkZa5pr6uX2Ce64VxXBFuzukdejj2qe2",
  "key22": "5Qt3DMG54XkcsEQZ22b7MWqEuETYdHD1JoDLfUzWQktsgYhPE8BETE5ZnpVc9B8JQu8VTkdxZtoRcDvrLQvh5xLT",
  "key23": "44Yq5FD2kQ6iLagJw9JNCjAcyk9w5PeA5RuFazTN82pGEb1Aw84pWQTNMfkDE3xpcYWPnauGLQubpZkoKr97k4PW",
  "key24": "2rzag2UTa85CLdgZwjtqtFp1yuwQxyHKZmBAYHbGnChu3deBRc5UeWebwkKTw7zPRpSaL1kKrn7PsR1ZkHpdK2Wq",
  "key25": "5TtHAnXHdoYRXJHd9PBBBM4M5dHdkZKxAh1KHmeJcbUMrMChaDsMEGj3z9WRjGJt98FACKfXQqFXpWdchnyEvH5E"
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
