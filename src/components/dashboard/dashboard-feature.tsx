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
    "4wp5uAkgH7BdbiC9f8Eijrxtdi4WaP7iLMyqMkcbxep4FPZiUBGpA9FFyG4qonMSqQqSwWCMoeT5WKSJjvvGER5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pENJVurMpZrxhLw5tyUzomwdbGEubNAFh2SangyyKkXtM5ehVMeJHAaVqU8ccRyGUmaxGDrdKiwY2UQBcqW6nLZ",
  "key1": "5m8L1JcAjNAAYPpKakjZeoR9sS7LaAUx4tVBbUyigDu5iTmGu3WCD1iRytg9vWcBz8bkumS46CZ9WBz1Ko2XqaMr",
  "key2": "459rLCL1ZuyxhhhtWXBzYvwUudYHQYG3Fz4oiTT29i7nXQgi8iaQCAr8aK1GTQ2M33fBPQR6kSLW386fQ9EqCewd",
  "key3": "2dyNzJ7569jKkAXuqd9VVmtHPLqA9yEoY8pdR1KC7kBeByssSbmHpMvSPnrZ1JyxPUU47BotENyFZhmpojyy4iSG",
  "key4": "4n1LE81veesUYJhbRWPwYDLcVR86Px77j36rCP6NmohedCU9t7VuLq4zabmyGRNkPqBmZmGY3YDBfuehJ15P883w",
  "key5": "4NSV7vhGFZcVGvJVH9g2dTE15secTGQGRsNTPrBMQ4A7tMYvicKY79Edi6GPp7mgUPhiS2bJHHeMAPjGvJNieqSf",
  "key6": "4roEnQFW1VXtxkpobUtjQ4MTwb5iUCBVbB8ciBvLcVKVA8Sy8kU75aYJGTQAQs2EpWXAkfCp5M4VfNUz58qV2rw1",
  "key7": "3pQnvwsDECFhj3zP5ramzMygBrRU26JwEUL4KMPUZFFqQrzPksuRPiSsKiB2h3kJuLEA1nsrDzyDSnk5H1Vgnhxs",
  "key8": "5t9WWSJWHetw42ioPZ5Tix4ptkkpAr2tjJo3EVByhhdKPVMK3GV235ajpa8mwdk1MXTnDMZANMvsmXBeEBiQrCn7",
  "key9": "8WUwEMS3oRgmeRb5WL3f5BVtirxe2bdyT2pVVFfX2tAr4XdQKMA5L9zkn2tnjBbaTzexi5PQnjYyasTGBHjtNEm",
  "key10": "5BvHVLzt54UWzeKMRYTg6bsUTo4FqUkkzVcgBFNypy1oUy5hjG5dhGCrNGR2iNLSFZyTPhSUw4Wz4gSLXjBTemgC",
  "key11": "4Kt7ktWYKPG9Ej1dY4kaUG12esZMDPX2YrCfWkKbSEXTWKHT5M1JRQGdwnJaJQqPinxhQR1MsmVH1Zkkf3vf89DR",
  "key12": "49u6GMiQbx2QAZPai7J778mPUgt8QfJ6pWoePzABtJFc9EMqwjyaKpD3aT8gJ58KKaKzsxMBAt6ZJ8qpNhQnzZNJ",
  "key13": "4f3cwY6RYEYV4fy7yvy7HNk7tzjeEZtuxq5A17KZoHTapbLqTcmjFi2xvCeFit5cGUWC1Eprz2W8tAnnbMpN7Ccm",
  "key14": "dxLLpvhv819DB64LP98qeUChz8p1BjGzWZDRnLATUv9qrFsZaSypEfN4PesJDF3Ffjyg3GkztDkhy9Xzdqx482c",
  "key15": "3tLJe5uSiPoHaYm6Zgpm8jP6rUPPoivXBYy43saaieGtNeEqEUciF5c4HEZemRWCZUHFfwY15ao4uYinwhmjDvum",
  "key16": "3dhh2QNt57xECivhnfxJUytfZKuEyz5AG4pF1YB5qi5gjdJ9s8yQXJvd9m1XU1sWyK2pxqY9Aksu4zz3SZnGQLFe",
  "key17": "3HmpcRihvd3x4Mxu1nevbqkbM1fKxv2ZiyT6xTdBZghWGjwtGYDEamk26hfuvg7VhzAatiPCA6iB9QHzy46ZEFJi",
  "key18": "421mB8VUgkm1L8RcRe2n71rYv5G6zA1TbMy94A1C4vDSE3ecZvFfPM88JuaWvjkVkd4iR4KUDNQSBCMYB2Y7SuNT",
  "key19": "5EgMsVca5UoCUvfSFgcbvtYmxSQdrFWcgZSDD2DW2jJ5hxBff7gKE8mdDtHVLwSJvyEjinxoHsZoj9yjEZHs1hki",
  "key20": "5mrny9AmpwyT3M5PwrG61bfifmARBmdAxp5bfcud4cxXBqJ1FfYJnhYJxH624zFRJrG1DyQGJfprnFvFjJ1Fci1d",
  "key21": "3XjZ5oFS92hZXLLaJUP5JKw5fhi181JPvNQE3fJduEx4y9KtAyu7iutGnjeLfaq8MPGfxhLJJu5jJZj7KE2i1DQC",
  "key22": "3w1Bmxz3MYH2XWDRa5MfHxenThSj35XBdkzUQ1EfCdKi5Y8jAee9DBbWTHNvz1StUHPRddv3BS3ogJGGKPH7Hv4G",
  "key23": "2mTNp4qJgdyRxfaGGBQKFQfkxMFY8pzLALyrzfw9zLVgMuZMWFpGdmHXouDQNX8bsK61HzVrvAXB7FMSRhqWZtgX",
  "key24": "4JLKeau3LM3RySPbkPuyYVmC7b6HKhYMtoFbxAx4DJNpeQDjzhL2CAB4fF9AaT2hAJ3ZXLd535nx1e31z2pV74ey",
  "key25": "2DQU56pkEvXfLEyVzm5oZC9zNyabFjp8cRsZ9Pu8mjbxmETEENwuT3EHjB6KJhX7DgmBHE5egPY9yswymhTnPcYX",
  "key26": "37rzNpiF1Rr143uUy4pLdX6viDFmakdD2NDwe7LSMuXcXEJxqDmexW5oh33cXCvAmfw8LzTAZQkNEtUpGb8SovKs",
  "key27": "4ua6z8TgrrvHxJmF5k9nCwX2t7wdEsdBQEpAANPfg7yJPFftQZCVcP3CXHy5iZzskDmijK9vUuB1gzvM4YfUDuH3",
  "key28": "2tAkGdBwsD4gY3xnfo5oe1P8wmZ7hTcngg2wKCVcLtCHwdxunuMUfBLh7uTRews8Ctx73JJRkan5fNVnfE8GGDJV"
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
