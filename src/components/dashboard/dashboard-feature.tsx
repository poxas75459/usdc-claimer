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
    "4HGewBrutFFFbsc6xBwW21xer5ephyZBmZHuujct81d2ZCFYCjB8k4KWDBGk4pa7Cp9Z2tyWT9Yyjqrb8fwpEW8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o6UGQ8UMoNAqcqiry9tj4ipyn4vfi8wiWNLR3g4KqKfpq7WNx7WpbBEUvqSQfWDK5QVDyBD6EhnDnfevJJj9NZi",
  "key1": "m9dptQ6CtFAwWdVyS3VrESCsnazaGmXnu2LaqZP3ULwBzKQSKhHVyVh6PdCnnzHo98FctVL4q8954bF7rcjmTe3",
  "key2": "4xZC6357uAYyGuKdpfThzNsEg2nF5x1254FLYkLvoEjn1aFBDhUTnNcjHLZ31NyqSEZEiYCvk2NxyhFCFHmBX18F",
  "key3": "2QA59EUJ5knDvsba4u9k3KLFiMqU9UYgAQC1Rm4Q3aBTLr31Prr2M5L2zeBDfrtcDfzgBN3VNZ4bbFbikTsxpmqt",
  "key4": "2jMy1fNohPZjVz3YcSFDFPem32CYTaCSvF4BVHKsykVtkYjKA3vWtcN4DUCBe9ds9Q3ujwvt1vPJEBuv1za2vkUS",
  "key5": "4F525nEToFMGiXJUv9ChAAYmHfaRQebrfwuzKmT1QboJGjj4VxZwi3G3MWFBwhpkC2uWuvc3ABd11dJ9rV1cnsyU",
  "key6": "2L44hYFzhVYVmfc8673tSKHP5imLnc2oqZrfLg26uqCdh8DzLLgCgJvfNcp5iiqLAuePN2rMxfjz9PqSWSbHtRVh",
  "key7": "4eBobWgu3Fjug8ci1GBHMxSZA78LLPxMv894UcipdDnpCMv1vzrhXpsjRaEtdd6297ti5gbcxXcCx277WfuaRVyh",
  "key8": "4Yfadc1wibZaUvFTJaQorTC566g5iJ9JRtVJwMgvkf76EnXsXgms5Cz61HXPBC7Fa1boMLx6Snc1HLfjJApXJ2BG",
  "key9": "XJfyrDNHUUWeyyLioXo8jd5m2JKR3UUEZFYkWkEF7c24bnd1tMYkXqCw7rUZAnwWfxKWTBDo1RGuGU62yMG33eu",
  "key10": "MdpQrMqVJoQjiwwxUavisTgwY6oeyb8SSC4YUNdAQ7k6UMvLhqoqwtYRY9y8xCRVyyRWQzpWA54mo7DJJqdEibr",
  "key11": "24jyJJNFMDecB6Cys1gk8sHqU8rvy4iYJ4wYbmh71zXYxP4vYuHntgZsK1UB5cHMSB4qH1p1cMdDdV9VHTQTiNLi",
  "key12": "65nz6K2KMS1Rzo48u9y4BGt6M2hAKpKgKXZEPAjk5D7EyTqGqCGYeRn71gqZ6ijDvyUmnjFuQ7jcvUHsCQ1gCaki",
  "key13": "52e2YyCyNXs6dn8Tx9Fk8CvrwkAS9X8KSYsiZ4p8YP8jLRmqdT1HpvTbPh3gw7es6UvYByuMTA8AEoPhdZeJwoGR",
  "key14": "oSjeV4XJKVhJ1EMfQwySAQ3qw3SgqynSuhoeC6NPuiQkz9vLvJHxaw3okEroRMYkFPpRdBDm3QQtvwFC22fai3r",
  "key15": "fUmqbSzdotsWAgmkfNhhft8mkck1JXLc1WC94pp3un77xuWd8LR3MHKfYoAS7YbfyMz5JgVukZzfdcrBkBt3mUQ",
  "key16": "6yLe8bFxt2oEcwRMyoQRv1EyND2cYP8yXgR4MGD6FuB3unMFYSjU4jdgJN8vfQtTmDYjSKWa189b1eQdrQnLPij",
  "key17": "5fZCQxLfMbiRfrjvC8F2wnMMexMXULfWF5sHbwQH78Fvy8Ruv9i7hgnpH9GxxZox6vCi6RdX3PTvvtVB7xd3V8ML",
  "key18": "2CZM8FweguKaXs7nFuJjpuG1uPzPgR1bZ5eAZfMJvep7zfChDqVyUny2S7hzGyQEbtUjefVgc17tpuAtQxZ99jfD",
  "key19": "M8E7GU5T1mVJNMnHd89xAUnJJrUD6k3rxSQDcVLPuWT63XfXmBKptNYFmqupvq5ebzacevcWSANHwQBohVLidpz",
  "key20": "5sBkK3sohn4ayZ4nZThwsG8CKbMhkwKJkU1VpxwKB3b3Zu9pV3KXNSXuv3djHJjF9T2VP7J9aALeZU4HZXp6TaGf",
  "key21": "4CsaUHqnDBWWftx3gEjy5vWaK2vZMNMq8xFJTx1r9sD8ZTcsSVdaV1cbKd5vtVBrXTiwacHy5ZcgKg8qjDWeZnSo",
  "key22": "3gkdq4oLaGKChUwZ8SEFQBgaiyPSE7xZhViy1fgwcu5TpyP9rRAbDoPy3cVAepQJJnirPK7BAp3QLgUS9aJ54psk",
  "key23": "4QESEsnYVEpKYSjuwznZtKgCgdmMNSL2Vy9C9vP2dDL7HJEbdJUaNo5CqKktGop4wnVee8W2Y4yccD3Epsh275Qf",
  "key24": "kyUwtvzhBwHhZoDww4t2e4FvVN5h9dkPF8irSynTuVuYQ8gfxiJ5g7fXY9SU5xFiyAb5LjXdADajYeX2pk4f5mJ",
  "key25": "5u5ADYS5ivAUnRAxF2TPNkmvWaP7UKqefsYhK6JufQQjDpLgH9avt2mVg3CjyxZEoq9bMGPVxvvAL18dodLquGMb",
  "key26": "3yoVSB9sqMgJpvr58UeW5c7v4cmL5HXPZ1if8SW4pirenNTguRBm1GEwHSwmyvy5ZL6cgLqiuTrYmTHG7J91svhg",
  "key27": "3svkr72BW3TsY8CV2syEBp84SFUsHD9LuRYT5WwhwnWWbGD9CwTHALc8LgKWHSCC9jaL6r19chr43dy3EPepDtEN",
  "key28": "3FaFjcMKaL5WKb4BTjKi7H147ew6BLbSBGWictRAhbX1sxgEFzFzXhJm4Vti1dxCpkECTELxyAY14Lmr59zKDh6v",
  "key29": "2ZckMkt3vWMyr3wiLT2k79Xm3E6ghCT29cQYUtXLSdJ43QYbST8NPb4p5E1ZERP8YdwB6VYXMPPp29pcdaziUBtt",
  "key30": "2xcxwKN5f5yqseMi3JuqWtmLhEBjucyJpiYUv1rCPuYh8Ux2DQaXxU8QrtUevnynmy1pSfUQ82Qv6MLUVpewVL8k",
  "key31": "w4Q2EtmCpDECNNtmFhmKBe2ocsgwx1Swiv6FMtTBKnY3EPT6e7jZ1yHwCMMyo9Dzx4RnTQaLqXF5fjDNvGQjKvv"
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
