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
    "5cHPMhu86NAw43Yokri5nvdJdyFar1piTyc9Ezt6XxH6FzU5kF5YjQhfaJdqBz9xbBMUpRKH79b5Uq9dEKz15fLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yiqCLXBKLY2sNmQ3YmF9vEn2eTY7bQuajZk11vhd1kuXzZuRkihc5P5KNPLz5d7nVpZJ8ZyXWPWtzGpieNq9TjZ",
  "key1": "oFeocSgqKtJvb3ANPHVd4X13mCv7KYbDRPXhnhxg4tuZ9wZTQWperuWCf91QeCWqTCRuuHoF4a4pPpesKSwTapm",
  "key2": "4mtdfdCoDA7K5zxHBdDcdiGUYsx9evdLCMLF1uDZY4NBoV4tzVWf81XV9AwehkM9MhBgmSB79sQdCsi7D6aiTBMb",
  "key3": "5XbkCvDSxFH1QQpEgifGHPaesGTEpo4KizfkJeDhd6souHxW9SQEBPzKmNA3Bkw9e7A38bVQUmM1aYg8uMcYjftw",
  "key4": "4Xy8VUcpy576uHXhzFaZ23NiN3E5oF6zDZgmfFBPadX7hLvQnK6ahjVRfWVseV3f9i5wjhyWexP83eGg2aRDZrWT",
  "key5": "4ZdMCcd1DvXVAUB5xQifcAgEAMc8r7GYMvU27C8mfgAcnfMFeziiFeSdASJ8PufdvcXe8A87P6RsXJcRbQ2nuqec",
  "key6": "5XoSgaSdXUfuUVDWZTYYQe9oQMG6W63ouqjBXnzF3JAptUTEk9D9VNu9bJmGCPirkCKWzWWRM21NcFPR72wQak1Y",
  "key7": "NnrMb8U6B6Q1p23WTZT7of4NSP2BQbgjtNiyjkr4XYkFrVHsVaAnXQPwxkc62B8CxjsejzmDds46746bJ8cdG8r",
  "key8": "4x1tMibdHE4k4wnm8sdVUsBkxL6oL9brDwTmr872ePhuD4keAomR8jmEoW9vBs9FVMGWDrQx2uz2bV5oxas5tq4z",
  "key9": "cUDL5Jj9nDXAyVPR6oCRqourDVp7CufsyDUTy2ZuacvgBnBYuH3MeYrwehp9nrjL9yw4XxqqnCBHwTr5JZCZvuN",
  "key10": "4JSixFSz6hNchjX2G2bKsdtWoqPKzjw9JsB5A2fayqoPCPAVKWaHm7A6H8sx86wzavBSKBP4QfsmNmxzbqfuCeUa",
  "key11": "4g2ZPYQRVWkjSLEhBoYLtw6PEFAT5wpC5xtrzuPynwUVtGP8Lwv1unScKQZjfFcKc6Zt9ByCZw8jxTvb3WnEoQad",
  "key12": "4ybA59ZnXM1iVCE7SDFWbz4dE4iUavjdnuhMc3UVarPVjePni8QRpsvC6TaiQQGwZ9i1f97w4A1DCqV1iKvWkc6P",
  "key13": "D28kVk4eeiBva3ymiokjfPomn8dsmka2ReLXmY3SFaYPkr4naYenhSPZk4uEjGcE1qwq1HykGgxe5YqAZkus9Bp",
  "key14": "4P3EdKN7Fzm5hXZ6mNKsQoGVbtB5pazfT4GoqZWLxckcKupB8G8NDBFZMufXdnLQaQaBNTi3tGSa5GvH1w6hpuNf",
  "key15": "57HJnq1Z6efNdmAwZg2EREp7XCWZBVSGWuDp1CLcsF4nac56ochDJVCmkeNPE2SgmXTQwPFoN9NvQkiqLketAR7Q",
  "key16": "FrckgjoVstDAWCkCZrgezNMwpfCjUzDLchXX5sCUJHt2cZqSYHnMFb1Ne5ragCG1DRQgt2RYK9zad2qPEhiEHuX",
  "key17": "3qkrAJpgokC6tTB1FuC57WAAe1dzr3SU399q6ZkHUsXQk7MCDB2jaeAMrFNLWkRMU1aZkUrZRbuFAMBw7ob8k69Y",
  "key18": "3JkcCzUCbuwvg7gSqCQbppmar85pAGqznW9uMYWU3cPsnrccnhEXx5CKxMzbJ67Vz9GEShyuirG3fFHP4mQbtdL4",
  "key19": "28J3C319KE4a2VnqdmSFRiJ9F9PW8geWEAFWqttqkL8mrb8Ugm54S6AZYjL8MgZ872yWX4juT7sJoZ23CQNMs5ST",
  "key20": "4dRsnTRCon4UVMVyg12WWqFp9KYPgXHitk4H4WvSzKGyxHLnnk6CdqNXj2jvyN2YJQch8B5oY3Veu9v8bQR1uMmm",
  "key21": "2Y7n8uJsXP7u4BUg3wuQYZkHLuPDsZ5T9914F2xsa1sDzeC6i3af9j4e3v3KBK7QQgcC8AAcg7v2bMkJv2jg1VxD",
  "key22": "2jct1WWwMA3WpCzJU2yC3z5ZaRS5ABygo9TRPj7qhtcbDhebGzgs4HeWnmyqb3P6BuBBDxiTxKmbaWvhHCkHF1bj",
  "key23": "4wTjVxPDA4vnCoMKUcSNWyRKeZR1dKm9nrBHSh5vPApcz8TfA8oog6tLoJrPJVCfZFo4k72zUrycoMc3iB2fYnUm",
  "key24": "5yUoA9Lk9FpGTnGPdPiSQgqGAt8nimHgTkfRG9GEZLey42rj71XRAAKfja6w2anoFcEw1RttJJyficGBGi6BrvaB",
  "key25": "2Tqk8Ld5fLivE2vCJimzuYTR2D3qZLYggKt8srVrvbeMVabCQVeAuEyxcTrdev3hHdfEWYGnAgi2rpy4HwZWjjbb",
  "key26": "3qvE9cWwt1aaVc63j4MJd2jeqEHk28V3eVs2WELSUZdD3VLuqVxrphoKJcRbciGtAvViC4fAr7AHkPJgtmaoTjPH",
  "key27": "4gD1HzfeSfEYFcUvjd4q9sy2xSY32fxDbYRXWRPQDw9jopCxqDSEadohUNhWtcr4yLndAE9zEttpkqLryJKZ9HjA",
  "key28": "f22SWmc1Ayeno7H2fRQ4322Jk72W1t5zMP6ZEivX65QSkWmT7AFUbDk8gdnwa4qCrdG68Lcn9YLKXPXNdJJiLUw",
  "key29": "5pMxM2JXeaPRwG7asdyJtBWrPaR6YFgzdhWKVfBdFzVqSaMhkjwtADmzjiXz9k6Na1uFbAPvNq2qu3aFnEQL16q2"
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
