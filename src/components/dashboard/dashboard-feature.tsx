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
    "4ZDKptxT1C9upM3kVFFZt9Jb4SeEB2P56q36sk4WZHtr88ktXzvSZH4AUYwVHmknmoGYuhEZv1xBNR3y5fmvYmDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZQjcx9F4HzfT3fqhXQaBCaP5kmFao9D3g8hREvhjL94P17o28Uqu3G8uiW8aWCc9wb5UXMdB2o6Z4cKNUKLYU2q",
  "key1": "3JD2wNeDQRJckVDytdKruupoacBveiZjvsoAgf5rwTyaFxVvGr6eT6ywVKfoChUCiG6FaNBZzzv8VBpkjdQ2rTAM",
  "key2": "4Bn8jCmjjt6rH7ueHdSanBVXyhXRru7uhQaYZyprjmrvgzgptqVZhzdbsFxocpj4V2hZdDJK5DDZ9NAqN7ctWrE9",
  "key3": "V4b8h5FGBJ8nJ6NwDdR1SDRLgWde6imBLNigGApYtZUspXoB5cGbbzM33xV1tya1GVqgUqdsRMQQ9HjBSaWsTY6",
  "key4": "54iMsZpQRuL4mDKzvdLAc4y9eqK7TgN38HfG5Jx6UiyZjyndqqGCf1HaLYLmKaXXvuu9sL7coGtbmdBhejA4NnfD",
  "key5": "5kvZYXGCvD4tgPzEfK6WNVw7qY8rcHMLfCecPrjGTQtZ2QnA94y5ZzUdKA3ZXiPu9W1ddDb5o6UncckXTpYJWN3S",
  "key6": "4rn7cZjGUxQpVbzMqsGMYEUq6TkEVFf9UPCELc94PdWgQmRN7SPnWA7cbbvA1yTrUMkKKGNmQmZ8mvgQyQpy4ZdU",
  "key7": "4XS3j9ur45V1jWnsgJzozPBCNgWyF8HhyVbyZBsuhrWTwSLgseLFV2TACHjdrSyhmTEAf8ZJgExzkuJok231CnTX",
  "key8": "58aPP8yjuDjkPWp6p2fwhs6rJxKgTXM4NL48o1Z6EdoEBM5mr7ZEFM3RJqEEp9bRv21gB1rzBovcXB7DDQbugnhz",
  "key9": "2YtcXUEgpcUW8vSC6uC2UpjbKAvZYcp5zWzHQCKEcvmaZ3sg6QYGX5CYRuXyVocBaGKfbJHYnhKUBNh2qq4Sdcz4",
  "key10": "2ewD7ET97Yar4v2BgELgSpRQYo4pLkJ6RX1j6AyBNFYQqwoTTv377vkVfVuMXYWtVQhKN1qGD6Eupk2c4nJDwMbH",
  "key11": "2CTmt8b8dGNihX87ngGsEskf5tNnvdB7irW8kKu699Gru6rMRhuTBB8SbUShKvW2XXVoKUvVnPK76tmaH41PhiAW",
  "key12": "jSur9zaZdZzY1i9iNWvQ5HnLXMx6Q5oCuaFsDDfutPajeqyckJR7bnnHXqsD1okZVAgTUPAVDy78Vw8CK7PyBGC",
  "key13": "25oxrYx1r4Su2qpu5t9mAFhx2QHU5cy78z8GTKjru8tPGN4q59LRcbTqNx64wyFxwgiu8yP8jhs4PcM7q7TrdjnY",
  "key14": "2Jrir8EaWgKcyoNwd7FpWJecoTUhk9iJjqhGaLM4J3SBvFdvRpftJR3abXWKo3kNJnt5qLESixrEaCXTss5Atjrr",
  "key15": "5pVCmDGCdU45XGucJGBsjDoZTBWNnFTQSqEeA3aRrpMvSMRWhRUQwHtdvEvkfHcvqnJmvqXPaLiy2k5uskAHgxwS",
  "key16": "4kZChcGJXmBY3TM5bE6D57Rrt5CrT6RMa8UcHrWPKrFHWwuBQJyt2R5s8qjAk9jm5XNycHB2kgXSvAmR7nWJJ1aN",
  "key17": "4AM4AXG5K7wfX8SENhsH9iuRGim9KTEWwY6sv9qKRkagZCJDH8bHzpmqnnTjhnu349bTshr5jVkbXgWxcuA8mQDd",
  "key18": "4NTkQzKvGojJBVKx5KZBRL46DtZhJJsVA54h8WDKJSoDm8nQNf8gnxKtFoPLbcEZ4nffYu9tUmhRYzzpN6tTY6W9",
  "key19": "4HGKn6ne6oNPVG9sN5xykppbuncnWz8F4ZxcRs41mgJe8xEH1YHo3Bzazju5DgSSt1bgzeZ4MHdrNobVCGFfxirp",
  "key20": "5KciPvKsr8Y1HJYgdeEnwFbxESBcXrrvczZpJRvos2bfMs6moqzAKyfashnGkndiZBdzHsSxYKLUnopwBFwwCyri",
  "key21": "2RmUhGRx2vk6zZhZQDdUkiRMxhv2Hm6joouKQzxHQV5zKsM1zV4HM1EfCRosvgdXF5xKUtNUdxd6AEQHfYhnK4bE",
  "key22": "3TWk94aoWiPpscfxJywpytoinawsihsyMsDeE5MnQot9Bvnoq5XeSFcs5q3uhfvpqYsgRS5fTmdmba8Q9Cay2u6P",
  "key23": "3C8PzFWTLCM27pfyHFVEtQdgVkbezuaXVbUkNMqGqfNDP3ewDim7Bj55qD1fv4kXtcPXSJPVQSkyGos35sNFNB4t",
  "key24": "5vduDHeahtgtRRyXUcRMouaj2jeDKaULDnWAhSzxryyrrC8giyy22UnpoSHyEyvR3npiYPtqJKRktBxWN6ZFYHd4"
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
