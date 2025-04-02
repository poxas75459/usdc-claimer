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
    "2Atn5f6QH8UPupqDvkNb2e8mQKA4weWXNSDL3V5eiKrL9xTRe7cUdN1QC6VNYU6RbJwiENhX1m9A6tgS1fckvfwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oJCYyV9Kow56WNU5QtupwKy2B8PK1jGD3g7SNJfUysdhJxJTJBvwo9nciFchkvGcQdqKqgEPge5uJAXpp9YxuF3",
  "key1": "5E5Yu63EpnnjHqx88f4ePRwc9NkFkKfuDrp5sveVL6be7uGLNpEDc5nzRjeVpJQ8aUzuNHGXGDSMP7bZFKJmcUVa",
  "key2": "5rv6mZdTGcYC9MUUY3RFvdijfKHNsBZgWE3Rhn799mJTuX5HVThWjWU3paP8g7vzX14T6Ko5cdV5W3UWEi2wq8RG",
  "key3": "3wPwMdJgJF2LyoyRAVhk3dK1U6BrRiiJYkXb7zRY9dN9145n7Xs14p3DTJwvZewVRrPjscuSVQpciSdAcqW3kMhG",
  "key4": "3UGCPTPLNTvReNSM6f8G5dsNWU1SLX2t2gbYSCkJgyKnyXovFXrzqcbeSWNvvPjYCEF6BxBm9CsuxtooGWJzvMLN",
  "key5": "5ZaSzBD6VgktDNfC1oPeSoyjeAm1rwBMaYNAtt8w5y6H5vaLFm8GUgEMLG9XYFKDom5qXS7DFUj14FWi6CgVe71R",
  "key6": "2QZn7TgLEzgVx3wZqyreDEa9zzapCEgV3koKFbcbAoggaymEbRXKLicrM7rsh1Jw27kyQwkvHegVbpU2DVZVTDoa",
  "key7": "4WGDdeyC6w34aN3tqwF4AaekkufEoYu1nvgHn8k1FbcHcyzCGozt7TruHwyZMLvsGVyZBZFa2axhL4pNCuzYCATh",
  "key8": "4v7wzkR9ZcCcAv2eYiV7yhv3HQ5YQPZkoRTUCqgmxJKegoX4Gs1zS8qXVYWJH1Ug87xEXXqM4HJ4Da65FophEusq",
  "key9": "5bGwCbyFCTgeSX4svSpvtrBxHc3KGJnPHr1gb8RzuhpVWJhpD4MYUqa6urCpc3U8XHms56Q2hV2ZMsmRQS71gVQ6",
  "key10": "wQFs4414VvmDhvrARM347Lx3SAMsHS9xCDBqpHk3Mzd3QLCDJMQ2ZYtLj8MEzQcyUtT3CD1phKqyeBYXkuoTxAB",
  "key11": "4iNhgWbUvx8Lxnp1TKpoAwwdYtyWez1yD398LLmdCPAHDksdDkaU5mKnhu8MWTjqvzzwfdGztriaLvGW1hwCEswr",
  "key12": "55YikiAuaGbPevbhB3CUQjw45Gx1fbKUFzJG9jrVRMp4v5C3yp8XAMmV1LHuNn7Dc2HBCw9V6Kvf2WYeeVY22uti",
  "key13": "32Tj8a1kG9GFb1MAhEzRVPsoc8U7bJf7cBakzMoExx6M2nBLXomFRCqnfaKQKCpqXm2kXwWwNcRc8s36XoYZs7Jv",
  "key14": "4LAEuwFKnmF6W6pCyVTUD8qzMgPzDqZLDVSxh8ZnL7nHC2PU9YG31Ph66t2trhUe3ofoHhTpjsUfhHn2CP5kSqdH",
  "key15": "5qUJUqT5pKw6XJZQzQxQuTvJbQuR2NEX2bPxmdux3B6dKSK58BPNQnDe3qRdF99bjGuMLaeJaUikDYSq53GFsk6X",
  "key16": "4mqjxUugcqQJ93v6Wa891i6z6rqiWwiddm2a5FY4PQCgJVWueJzEJd1f3rS7Wry7SBP7GVCrtuBiibvmLi4JXt1k",
  "key17": "229YE8KjVZqAAzRKMX86ZALYX6kbnvVKmULCVYk47UrhBZqTxhGUYdvSGNxEFZxmmgDb9WoGZqhLqcJQ5435U15z",
  "key18": "eCRYJdjG1YSQ5vHhZhYo3YSXTDzfy8uCXcVMHtwYXj6DnS8JSAdLfLYgYgzTxzWraimTUavZmUXFbNJtXFcZZEG",
  "key19": "8Xn3GaSEj6wJ98kL5eNVaAwdgipGDVPBN4KQvSMAvTL9QhrZURk3HY8DgDbqXqFfp9H12T87wPjbmG8oiuE882c",
  "key20": "54dpsMfBA6XuWjJNtNmC1bVZjmV3EP3XkxYWN3Na2Cypwk2ynjgvqRs96q8K8GBDGiF9WUw8mhE86psDcHjnx3Vw",
  "key21": "3muP1pqA87QqwtUA9Ponqnjr1Q1fbaxnGeXKpR7C7WcNnuM6cSvheBcEcmmCcGxTrKmCzH6iG9Ho6gohrPoyGDxi",
  "key22": "3SEC8nACTW2DNrDZNtBEHpityQUb8QAGXa8gyqQKqZ5rzgP6yVRicRpGdmk6jX9EhxXjoo7f7Yy5s1bh4qnKB75t",
  "key23": "2iLaXM8qSDiqbecAG4CLR4gNGF6oKRiJb73c3gnmjYWMeDPUKpkd3jE2c1aH357Ttt2ANPeKkwAc8zZFB31oxW1M",
  "key24": "52WSUbCvANvpe7AjqxwS97M6ZQJXNqk4YcJof1Y4sxeDehRsriygLo8mGrGvHP6cg5nPy1LqtUjD4bCGfcjaioCo",
  "key25": "2MFhP32jz7qsNFu3SAxgfuY6SvKpmDkw2RoWLhFmVF4DDJq2y6BZqweAineqP1aNEyua1iM2LjJJ4r5sjt3xDPGy"
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
