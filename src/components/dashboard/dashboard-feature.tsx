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
    "4KtqHCQZkUtXQKM5kPD9nuE2DpG8rhDV31gTFhEz2D5KtnNSNTeCZsMrFXVeYporQbdrvM9fa15B1rHg7TdSf2E7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rk9UszjNnicFcyEq8PJV8QhUTAzpSzMSDUdDCpQtTnZbKfdjzV8DzbMUW6eFGZ9jnaK4eGGbaZBSCyX6fyUvZFW",
  "key1": "35n4uoeiago1KrPS1JYKPRb83MRhsBz8KMC45D6b7YuxVyosw55CTZQBPx8HNB2oqmkHNCdQYCBjDzDZgHXf8Jy1",
  "key2": "CmkWQqKVWwufcR3EVmC23PDdfgno2i1CtXWKwedvMkczgTDNPviFjWfww3QxHPLRQT55pkUG9HuMd16qkqhfEBL",
  "key3": "47J9EhMi3fw4W7pLib8oPmYLDjCSm7cLeeuzFWnEA2DrvZimc4iHKG6j4r864ejgo6dQzBQx5ccDUYiUnbKQ3qin",
  "key4": "3KtsVym1xc23Y5qTDhGgJiTT8Emzw4a1qRkf49nsqxx27UiCd1pEpzycm8AtPZjnoyp1kxDivk18nSwDM3CbQQqu",
  "key5": "2cpFfaWYnXb4VvHP93Z687dztofFebCqFUjFtnkmE7rYDdLWDqnmw1uyenKbMmhwZpfJ64U9P92KB72byn9EUHcu",
  "key6": "67cGTdNroH1D6Mo9JAstDjr2K59K4xt4qVsDDxEXjeYrfkKJjX16hoEP16HqBYS5eg5pM76BF93qSFiBzhyehUNG",
  "key7": "5bEgxMjwtocecFuocBJuMzsKiWHwZZqrcnURGXbGzQto9rjvJ7UJV6qq1pEpaNDirxGZESfcSud66AaXFqS5LvyG",
  "key8": "hCUo7ei9mLNg2Rouvc3zqHz9xr9KXvMy2jVSEv6HF4XqVUr2UUvU9nHah4uGPkL5P3mYugoiEbBGBbXRYueu6ha",
  "key9": "4ZKT42Z5whhLrwVYz39R2Q6nqXT9jhiYK5fk8FqZg6saYEowUgJgNPXK1489fscYFeaTiCWV1K4bKTsdj3RpSSyb",
  "key10": "21x1pL1CoCotz85KSfgp1wZikuC9RSytJMLQfrg9ECphZYsXZ8fJDvVgYcqAcseWHMCxTuWzibP8KsCiqb4vmCdF",
  "key11": "5kYSAdevqwW3NKqRPrGLQPHmMiS57pdMdui4Cqn5vz141yuWRjbvbczQrJt6RA6wzQSKpyaSB7Wb4SZc7PR25RqN",
  "key12": "2eApyEdYUjEshsNGrho4i2U9vzoskjVsy5nZb8kgpM8M2iedg35wTKwURzRZgvsqWj797GMurJVFKdKy8DVJQp4X",
  "key13": "54FnotUGJ9MGtR86LXCsVsNcEo9jpLLZmwqRYUU2KZTDEANcEaDvXRHBwaU9xeq3M6RJUpBWyhMbTNUgTGZ188h6",
  "key14": "573HL3s4q1vkqZ2RDYZMUSxSxo46oEWLbuDnMHwTSsq2Cwg6Ldua59KBVTXsbYwZVPRKBiDVwY4973M7tKp2RDzT",
  "key15": "51zeNcq7cYafztJTQsy6VnCYtUJhjfeBf75x5zcMMd4WX4mGBsNXCGa1DPspmVmH4NDS9YNPgmz4fgJLtt4DiaFH",
  "key16": "5JXF4oidjqWzY4byFavBAgpgMM9oGZfqg2KYZTfJVz8XB5JmYeD8d2pnbtSMJeQYRJKJfKXUcGxiwG2GPqXEhf3o",
  "key17": "37j9hkTh35CCK9VNU8E6xk14wCDq2hDRq9qGWCYTjh7FwcfboD8iBFCevCbaxFMVFPRG81Q7hKToxBtmQBwLC33V",
  "key18": "2bJ7vLzshdmiiHLh3mV2JWivhZ52YpRvxjvsj93GK3upJqDH6xAkkswuZuES52Xq6HaimsUkHjhXjiYNujXnSdxd",
  "key19": "2LcGPRKQPLWrJcdUHKeitaNHCYrvkDsABksh88BFiFE8mD5VqNJzt13mpXrE9Ld38dTYJBGmAN6YzLzW61dsm3R1",
  "key20": "3UZamJ5y7o36M3SpURm86X4MRuiEgWCHRMxks62KhEhfNbvzJNVLjppGVcQScHAVkGMSxxVxxiKaZXtUPxRxZnL",
  "key21": "2XkhStfT56bmTphNZKPVy5V8haXJvCtu8dLvfdNzFMK6ffmFEz7jdGS6xNkJ7rnt28XPwivWrm3P19gNGUVSnH55",
  "key22": "5Q9Q58YtF32xGq6y1KaHi4qkHeY4VuaMugAA6Z9EFHyYjyB1KF3B2yWRZsp5GtwykLh5JBn1JwYZccNVNw7Ngnyi",
  "key23": "24GgoWY5ESfNJXThAgsKeGCTdADypVSbYo4GoNrJUQh8AJTZd56qMZkwA42e7nipES9Hbe8BTjPNxNrqPs9dvHLR",
  "key24": "Q2FvPHiZYYE75JtWEZAFTBT24etvvYUEzuiPUF59hmNVCQrimvnH7HGc9QXjpaBXHFAGrrbmyJJDrcBsLBYkiAo",
  "key25": "3FyRU8bxA7ny2gT3w9mLjMAiwj3WE7bdpbXw9Y9d3jj1uKKvwivgKLXPtCb8ttJk5f9gJjSaKWZtVKnJPpiN8F5c"
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
