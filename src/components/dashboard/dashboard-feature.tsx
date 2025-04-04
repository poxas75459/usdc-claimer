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
    "4RF5FEnT3chS1pLeVdZ5gENoTbgTgLJXs98nU6weazRLrb1TNmX6NDjG1oJ6zCB1kScFUs2oUA4t3Dh3z2o49r3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BDTJRmRksmSUpqUT7wqzygRsAJSqYMgR7GXwzPDCAtobMfm3Hj2DzijDVBtiHpsWQ2gG3QiBp1e6YpSxE3G7Qhs",
  "key1": "56BjTKf5FStsNovXvRvsUKXwcVyyDdkvJuVrVZxaQo7osBFQknta2s7SXfPtDn2okxP6AgjAE59m3kNqYHoUtQby",
  "key2": "2A2qzTjZwmfdqupaZnxsQx6FE3qCDfu4PH1MyKKFUYZQjbXR4gojci4n85X5gFZohKryPjwbsqNsy2raheU9vYSs",
  "key3": "3C7DuXJK241vieCQR5J4gCGCc3tcw9yuDeKaA8kRmWDyU7Tw2MnQkQXnCR97mWkxwVD7eWBAdQJ3AWeC7c37jc99",
  "key4": "zJmf54zPvcdMiFs9nJvaGLiFfu3axmTToaLGdXaxfHagm1FXzuj4xD1Xu5bD53GRBYEhpvGt7tGWHfBtGX58Qrz",
  "key5": "3a1izxFv3gEB1oaUmE323nK5SnGG5h5fpU9fT8yckS1soLWFT5Fcu9N1QyrZ1aQ71QSmnBPZedFoBucyWT11Z82f",
  "key6": "3AHCjc1WgShCu1MiFVuH23AbL5PGc3adJVW6u7mVvKYPP9uT7YnZK13uLzBs5Nkp9U14SLGfEkN4HBDLoqNXEdRh",
  "key7": "2xtoxQba6VM8XivSrkt1E1ke7PftzFNAynE4Ztbh7C794Lj46SBdp8uqpyNxB3DokxbQnsKZnkKra7oeMMoCcaQT",
  "key8": "2j7asQYc5m4bwMMKUWpCgZjjhFgFEparJvf7EnDob48CW5XgBK2JwD2HzkYwudbRTLMm7QMeCVYG2DUEf5LW5PKV",
  "key9": "25HmhXogAyqQNxQVfQvcpgXZunGkVdbsts7mFW7HENFJR8Kw9ASVpbf6Wb9vJfkTwWigJqgd7Nso9DAJAiTaRgEY",
  "key10": "3Utfb9dKX2UN99BaYzs4CLTgmisZqzE2wSg2MhVBHzf7iy9YVmqVF1ZKTbQV1WTmkr9bvMR8EKTjXdntBhL6su9A",
  "key11": "owpnFeomyf1S44dtvbyoJGcwSHgchCawvzE4zbuZnpfuTfL9agqhyZisUDgKjizSmHdr3M9DbGn4sbZ3j5nrJvf",
  "key12": "e1Q7SZC9zoEsTZ4vnLP4yEY3NJP55NLp89n6PVLEJpk2mxVR3kWgUanoZXYzXS4UM3gcc7d7bJgfjKfaVSEf2sH",
  "key13": "5xP9Bgt6HBZHHUqcZ6XKy4XXhgZgBPkuaB1qoaVwGVJE86LGNKEyoGDxNpsF5CJ2FX1CMJPbNtX6yytVdMBp7S3h",
  "key14": "VDLsmg8U9jL2kXZy5jpwXJVL2hTnLw4f5UqZmJ76fSYJdJYxSAJqKcjdr2EHc7TgpmhZzcdSCtQkgxNAMW7GzNS",
  "key15": "4TvjqeYrbHHgEyX7VyFzwcSJRDsDRmShK4ou1L9aa7LPqrGMwBpS2pCY8SesotybbUXwEgwfTpzkp83CU554Pzv3",
  "key16": "129pTy4D5rVUvNaRWLgj1As7M8P1TsM9DFGUFHk7Eg7yzMQ7EoM1PfKPNFiombw3Hm1pr2qrajQCE9XxGvuaehG9",
  "key17": "4PRawU3D71D9YXvws63h8Ut3VydKah5yNXTgXorjUN8DoaMNTFjyEwr3RmeeQC7G1jQXxTjw7pnaJDcgtLj3DdqG",
  "key18": "5U26qx7Nqvxi2EpEGZwwKN85RKMbP7qinQ36uX77pb4gYLezyzZAjC52vy88h7ibRmsNgwsNDhTunXGX1RFoZgih",
  "key19": "2AnSv55ftga9ZBb1i223pxwaRSj3EmScKWujWtsuuEQMCLVF9FqXqRqRyvatg5D6UG1GSF4ucrzdZVPNMph8HLiF",
  "key20": "4uYYeT12YSHWFYyr81iZ6MJpZxxCbSxAozMqeUFLyW6fDjxJV5iLt3cEirFZxjqMTAsaaWM13cp7SbLu2n1eDR5t",
  "key21": "37HMwN6CNLzQmevZG5AKcLFeck8fihyVLQnyniNJMZ1VcHPYFpyMNwizXQ8zXAz3jRr2W6bT1Ayv8sw2wubBszVd",
  "key22": "47WGDbeDs2fPgWphFXrNLgZBanrwF45Zg8MNS8e4PCTcmHbprBmmaXxaztdFinoj8WKmSrgTcZXa6zNaJPAVrR1o",
  "key23": "4JNg8dvoQnHArzzCahzbg385KUCBgZZ72Vq761eW9rqF1KLj1W6QXk2ctWZEQi6bmBZFLnFEyMKDwqpo1jhT3kmG",
  "key24": "4bqZZ1c1RFsehPedKTTYCTk55YhCDewSapErPWAEnE8NqicuPsvvyQXxg42z9uez39x3WTXdaeu3DFNMdknx95sb",
  "key25": "2KqYM1DABQeGfSmmmL9ZxmmESmSjrSUVKVfzbmf9VkgnwBaG1xtnUa9aLM1k7aZDmFB5UN1yjXxsJ2PFgHR6wrnr",
  "key26": "2DZejjrpcg41dMvzndjWA9mKtcxaDff5LCHsoXHepXReP6sEa6Ls5sAfMapE2p5tP4k71pv9vEbUrWu14qjX3ucc",
  "key27": "X8WqUfpJEJx4jw252Y7wpQR3WDzdayb2ijwEegg618D6kkxoSXnG7VwDUe7sUeEYMQK4o6rTT9kz3iDAPjYctAX",
  "key28": "3zrfuFbyircWFVbTtkFEXc3YuUc4nbP3bYXPjMEt9xx7oZPC84c4LmEkPRsqdf5SQcP5WSooUXSqcsKf6ULyDpDM",
  "key29": "4uEVmKA3zREQzJHPDtyLbAC6TNe7MrVbCPG8Bn1PH7Xnr85mRZ25mJdfCquZAeeMioMzFxoPFt9rkf5YGRHV3nsQ",
  "key30": "3Ewa1znW1jvQ3fdXSd9tkygCGK39d8umhsUhbWXLKswtZdhMveaFqaKKKV9z8bnm7Re1TLqe2oCPbsRG177Ku6e4"
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
