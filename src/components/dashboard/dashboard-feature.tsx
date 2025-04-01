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
    "zDjE44xjCr1d5HioDac5NDRqvqXWKnGLmWZwE8kd6XB1EWBXkRm9p5z4gMo1PYsA8Jd2GRptAwbUTpEjC9Z9nGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YHcFe57bsjF7KvtRjGmFPpikJa9gsLAiRZp8M9hSjwjDAwYcsB4zSQDQEwMFAgHqxGFUD3bFcMp3LAqku4mgexr",
  "key1": "4aFAW53DvM7cjZttvfpT1s8VA9HuFpuQcoPz2coJpYRcbCRd72nZyDM4xnjr6D7oUxnqjSuLR8z4wfAVmymFfy5J",
  "key2": "4zgEPuS7WHWctHgcMw9XduEv6iBcdATwxVijgncM9UPZ9SenVkGH2iXXKEwVbHfhMPpPWydrFjwaytaVWh2NSGRz",
  "key3": "5wQCYVLxYq8LoZRo7H3FrS75BPM25wkxGpL9CsZYjtx39aX1i8XtTKSZS3kbutR367KVj3tiVGhpWh5N2KERgw9U",
  "key4": "4fYKKHh6kC2RfzZt8Ra7QBSEjX8gHTD1VNRh5VJ4GH1ha3eE2DpoTPiacMBUTYoKGoQhJHLz7M1Msjuk7gBoTFws",
  "key5": "4jrCNQxKbc1tV6pLyxGCzDMAPKUSHU2hJfWtcdzJr6TiACg8HjTwLpa6bfy4RPLEvNcMgUvRfgJ4tEbcAP513GTJ",
  "key6": "2tn8XyvNYHqn4EamhMvPpcweBMEhDSdMsddn3wJduWXcPPvcWqMqZZpnnjFJDPyuAevzDQ6Fhvff6g9jJ7Ms54vn",
  "key7": "2HxwjBQRmjS3CETBCXpBaEEKCx4HfFJQcJ1jDrTqdkvaTvJb5fYEGv3rJFNmXnyHU9XnufR7EkYThFbi4ctmuXKz",
  "key8": "fAPtpnw5obH4R6Srs1jsfWQbXTNRYCpKwKCb1WXvBS8gXehSmGezFkJW8Z8Pg5LjoWsuscXfZ3b56zon9kkM5DV",
  "key9": "2i5bBDFA8bpYGMprsEWBR9nZiEm7F2eUARKSJNp88wApu7hKuun2pyVtfLTvSegVgVbLwbewTxhKwFzFSrTcDE9j",
  "key10": "5UGVwSudGVfDScwPXuw5EBxCn5e4WquZgSGZKAx9MGNcosgp5fKm9Cmwz7nm4uMKcyqiUs2YfijiHrqAJhSCwuAT",
  "key11": "5o5ZeH4rjVM8QSCxbqGJ7aBfPW5y5f1bvhZKhFuohx3hVytBADecvEAp9E6g9xRgv1BM52kigJ52th1AF7XseX9r",
  "key12": "5ZRMbLuMiACM2ZYFB9xNNx7DBt7N6hbLXhWn8fc6AWLbgVormWdCqGYPBiskLnP4o81Jjzs24pEch46VyNDe5jK2",
  "key13": "4dXzPwvECMhsDW9EAC6TdcmSgvdEgUUizBGNChEu1UtX11uY3fP9ynx9mb7crUQBhcqtLZuJ128D2yNB21Vh39PG",
  "key14": "WPZXH2kaa17ufrp7GTqps2sTafbiGMJ7bVuSx19wbtPJw7oBJoQnM6w8SPG3GFxxE62E73f6Vi4Qwk76Kq5cb34",
  "key15": "2CH55sCigSYMbYwxVGT6nGT96JfBsWFCJjMizKF7zHzbuyX5CQZ2FFqWvdjYfqgdkFoVM1rKrJ5dnxwQKDuXMM4U",
  "key16": "318tHSeQMp3QgMk5aQPdmS5sX63qzFFkbadr373DPPTfS1ocGqYFwjjSYZhzf24aZzLqzHxrzQHR8hmmdGN7WCEA",
  "key17": "64sPRsk8YV82QhNZ7HJeu7TMLDgnysrDcdokrKccDLLCVno6r83z66aBrJ1HgoVP48aDyhcGFh5mvpp8ngH8fonU",
  "key18": "5xjQqTwAvmjeuVWxvSaLNrULKexHwmuhpBvGuMCq9XWbw2KbEg5vP5GZUXvcQCwzCnpkXaHPbtHREvFre3nVJAXm",
  "key19": "5xDqZ968mHyGHHyCixhaCPm6zr3fFg9fTwMjHGeFPxFiGb2crQhEQ68ABXccep4zESF8HvCVV2jwkQhcgnqdUJM1",
  "key20": "4JKFTK3THFJ2DCag9mZ7BmYJKGcHQkjj7TGfhyjrwrM64nrjT4mgGS1JUtwvatMyr22sEqwdn8s1pfRXZADignGH",
  "key21": "4MvhkVBHy2e7bZ2aXRjsFkGQkpTcEcqea2b3Y8HioSB3rKT7HoqQ4yWWtXxGv7H89CFuHP9KzsP3YtVWXwCe5iQu",
  "key22": "5qAac4FNKPhgNN6gW7oVQN8i5HFKxWkrw79gGqXQvscV6n3fa9NqgnASp4wkpSRSYvCqJYeipxvg1uV4Z9vpmApN",
  "key23": "2YAeevSaPRCHL46rXFrMtTkdJLadtbnoS5jcncxD6HnqX84BgfemNvxasJQyYVbopHe7Ckpwk77ddcAF5oVcXVPX",
  "key24": "379wB2DC6giZUDpQEnUhiY9BGy5frM4x4RgxBtWDRpUKpeiaQn8oEygFnsTCHbPJRLoR1Gm1FoxeEUnsWUAw3nf7",
  "key25": "5ZybktCyDWJKH7pVV9kmp7qRNNGgB5pPSq6m4jNjLuUMhztuy8gHeegxBrA4RD5wVAVPVaBFGPBV8JqJ2m3Zyd5",
  "key26": "3hwuii57TmZhT6E4C6s1YHQNDCB8nxHdRRDSM4AEshbqMWMYPpJZ9oi6MwhoJAMRHrNRnfttga99ErtcJUKDcU9f",
  "key27": "5F2N3BfE6RnZEan65QLMRdRgTTJCFXvsVDvNaC5QEyT5TG6sdkgUzhDTwYKJmrT7jTUtoca1w2FfLjtwP392zyYV",
  "key28": "4BnKcgF8Tk3jgPM52WpA8i6EuwxwTnUmudBgTfABB9xnW6RxLUTKbTxxpb5zzCfqfQodz2omKCVTQUzukJZBoinP"
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
