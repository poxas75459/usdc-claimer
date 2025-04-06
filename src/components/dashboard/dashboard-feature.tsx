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
    "2EZWHKWA2tRGbL1dKpdU5GgDrAVKpwEERL8HU8ptWgJa6a7MbX8yK6mZSizvELtm3G5gWwjv7oKApMq4iyxxNmY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gq6NCVE6qdK6WYtmkCRgKxnAAHrqTDGpmsadE94kBjobXWs5Tdq5f7Vc4RAE1c277UfAJ3UucW6rFaDoXGzbPYJ",
  "key1": "4ZsHiVHCe6UruWd9FaFA3bHyfE59n7k6zh3sm16cpGJv34bckK1mkZJhu9RVHhFs4KKBwAquHHQjP8iD5Uqq1Gyg",
  "key2": "4oT622Dt2CyZ16JKGFU72u9W9kgKanVrMXUW2VsJWrsojL1n61h9dUPms16J5yKUEec8nJgcjRrUTV6mTDaJc9iS",
  "key3": "3mhqFeoUYBkD6PN6TwtkHHZsowCRQzunv4eGGZAVWKoD9MF8M8ES4HTsiBY8WTi2dgejGszw7xDBaPr8g5CyqHRp",
  "key4": "Rav8doUKAm8C25inV43tos7FAgCQExqfz79ukkqgwFpt5FuDrDhRcQL2KGLF96mvFnR6Sv5PDiG6pTbEcH4cwG9",
  "key5": "62sGNJAv2uvcwLYVDhZjU452ygKkWuWH28u23araXM3qjNEgpjrfwzEFYoSwS2kqRuZkfctujoqZXBiHLp7Sa2Ka",
  "key6": "2sVvroZ1RCJiCrtFaVZTHQpbSjtUmmi6NzbB1Qvv5W5PEGbEviDpcNsUfR1CoptsDjjdXyGmfXYm6JmjWDRjFacQ",
  "key7": "4fev4wsLScvCCe8agsD2kBAvcTwqip8TnWNAPeX2dyHvUW1aeCPZs9gLFTwM44JME3jvAWDabXhRgmWEGw1oP4dN",
  "key8": "sdtRtVg1NzZc9aWbrmh9W7vMRcHXdTeog9sdp2Eg8f9fWkJjLqey9WyhUgY6cvB5PQxTf1NgkKeVzrxyXL5Vf54",
  "key9": "51gRch6o6S9dqPqJhSo7hALXo5EGd8fnmzp9L7bR6Qp3vecByGX8vfDkrc51F2RQjC1dqWZ7iLMJ5f3ABpzNgCA1",
  "key10": "vQ13LAc2KM9EYJtSiRyiUXp1ZBhzLAb1iHDrKNtsGRvDPXeY7tu4pf27wtzUgxT9uAFj7m9naKqaHj9U1H8vXyg",
  "key11": "5mo4pvMjJBDpyf1BC6F3nZ1wDf8jC78yFX8P8oT2kYyGswxJGhESVoduZ5ovRQcS6jq2rdPnAtxmWSFBFGqpt6Sf",
  "key12": "4FTTLZZqUbhQ1LKm9SFWbygFLqDmBrSobHYp47J4xymsneqPqfidh4csY4mgzMRdyNUjz19kLnDCzPA6etoYGi2P",
  "key13": "3vocDVqge6GXGPiVXTvFGowLkbYyphXcM9EWNmjh2PfXMwHfnnS4CDjYW2zLAcbtVqDboU9QzBfH88BK9fTSCb1d",
  "key14": "46oLA2APac2AzBx143hoapzuzTujeW7Sca3tvozvdpf8HjccH9CeLDfAnace9QDfVySGqz1drSoxoyksmr1pbHNJ",
  "key15": "5qTfDUZGZN88DVGB6FxGKhKuLr7DC3utW8GpcNHArUDAW4ufxyowvUkff23dGpuMjdjDY5iab36cF1DHzqnMz3Mt",
  "key16": "4CQawkDG2emAdMiAtaRzKLET55iTGVhPB5utYw1JKhm6exd4b5F9HnxDZDvb2baN5qsPgwhV6iBVRnkgpUg23isK",
  "key17": "3mUznDFpGrn4s8mRHBBRteSED2Nf2AJizuPGTik3ASm2kkGZCc8dotsZpQy3xNrJJhsZ1R1BruUhr6qF1i9JcXqb",
  "key18": "3m42DprEoKz2xSFua97r8MNKgrsNhEFZqcjKxvE4s3Yp9SnpeR6JBu2B5QamnZyCmRrwxhPCa9nUhyNJrTk2rwCz",
  "key19": "4LrhbV8mXeUVbifhv9DPbNMNhwa92ppqJNFchWAS6nZgRc7T5MNsk5Zm6RovUHeZ29hX1LKXcXxr4XWd4CXKBtAY",
  "key20": "5D8Qq7Z3dzaMAsuffHvrdqrZfQ77RgdxLcFW9gFev3dVrxNC5PLcxNwHwWJBSVA51zevXJ38edAgkHjd8F7PDpP7",
  "key21": "4VdFyWW99RyWvZ79qV1CCsGvb9jXUmQ3SCC81ukc2X2BeyKwTZz2Z6YgpZirAc4sY64Aca3pEj5ML7ZD76JKDjDs",
  "key22": "64Rkv8HZbUzDzAfMV6WxPVagGyx1bja49RVXU6MehHuEvQLyuXVnsyq9SRgEGbkUmXmvaG77J7fVr2WwzYtXZT1v",
  "key23": "2WodqmKrbr6FzoooAhWVyt52BnLXnuxRjdrnNWMAbJY5Dunx9udGvivZrK2mPCHqbjPFqKcNxYRG8S8vLfPH9Hw5",
  "key24": "2ccLGBHwn3BUiW9eWXKKqQs587Qb23SRBDZsdneNqne47W4BjmUgJGDpfpfqafqzScVipxkiXHX25hCRtNJGxn6z",
  "key25": "QZk1TGwyhYiiT7eiyxUnaHTw6gmJRDqAbbpCaNWXDR9BEKbbS5qoGReguBSevAxRAxgcQkDsb45VBNXsE6xLhSU",
  "key26": "5CoWQTDUGf9ErM9LQcEGsFZQPs4FwhKXHuUDaCJjfgGvTB3mw4fyRdP83DwCUpaCUhRG1Ye1TeDK6B5WR6NTSqwe"
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
