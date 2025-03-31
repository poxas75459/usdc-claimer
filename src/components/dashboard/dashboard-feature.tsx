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
    "AmvDk9tojs93v3JsFCyMNAgavr16zddeagwXzeMv16e7dAvhzyceC8JpUFfpRwP8JpmZVh8wve3HY7VvWp9qxmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qsKDi6MvkjUmhTu6LzmrPcRFoW6B9PkmrcSBKt8RZHafAkxsLDNevd61WwaWffPXVaHxm2LFV7utoLoC6QZTbZU",
  "key1": "ad3gveoKT6fphRWLQgEQLTxDUAFL8FsuqknWMS9HDZZ6FS41ofPN5mYpSzx8v5YR1BrXhfKxU8Fc1GreTDPKmE8",
  "key2": "5DoaumUpKWWBuUWr6onbiunmXyuTy9u4Pez9TCt6S99wiAcaTPgo9R7aA53H6TiEgAdvh3jDXLiX6gfdEv6uVdfD",
  "key3": "2v4tKepyLFijjQLrJkeDeQNLDH5DRhmF7rHtShW3ZNVgnBi4Erkx6upRpfjxrAHh1qJowfdNW14btxUWH65GifYx",
  "key4": "tPzUqrjc96egNUVArXzaV2AzeEsGzXK64CsLsqncpBrVRLKgeh9sM8VaFv2xhGwTydMZRs4Dggm8NTsdBAYhJ9W",
  "key5": "3WKLeQNqUBFjXAy1YJUpfNGhRWYaiQTn2cSFYbwyVgorCnT8yjSeJJ1GpTheLbgBMQBHjA4x4B9Sbh1Nxa6LU9MZ",
  "key6": "3tky6Q43njXivHeVrhAEiVusfSQ3NjiNhcqQfMqJZ7yZW3U3FsmY7TjdpKHekWjTfQJtQt58gMG2pFQkh5d3miFE",
  "key7": "5sNj6VXStyiKxhcypLG2kSLxNky8BdcWSFgzc1UEogJUHw4LaYiMuE7fATKVWkC2QagmdWAmUxGVNoKdiAEGt9d",
  "key8": "4qBNBoKA3TmZaDbKcn7D7Pwc6xxSoDrVEaVhxK6LnyLgaVdKT8DaENb3fSgYaB2ApXevsNRbp4WbtASYPgeZJVEa",
  "key9": "TbaYLtTV1SkgUezMeZ72zRN7Ahg4aRojKx4JALCJbPQXfbDX2rYA1fv6wq8zZ7xVMtjcAMimULnuBwpCbVaTKNH",
  "key10": "STW95aDWuxzboHf5CUiadDGdCnY6rB3BejrzMfJ8zC9RMKu9xGLpdsv3Q8SjUex8JqyRNNUWW7e9xdWwRyfHerB",
  "key11": "4GNLWfeaHFRsMQrFoKdhgQqJkFz62WerMzoaLrkdAvRPxyTuPuBeC7QLYbPEy3Mixpow12BsxBi5QMYFyEYHBB6o",
  "key12": "2bLJjKu2hQbjfNieNcBdc6DAF4E4f7jwdyEyZarLdV9E2oEz1Yi947gCpHd1paGn5VqexDWNRZCXrdubcG64prxA",
  "key13": "66wfs8JhLDzf2wmVTMySomxxbGLUnEfAYWFMREDYCC41GHggKEfG14BFSxz8qdjWRar6VjcYXtWkyCPLrDKwzYEe",
  "key14": "5TcDzYsZr79bfnASyiN1VidiRU4CkWKNym1MAmy2wys39piQVWFxWeY8U4fn3od7P4nhtv6U6TSYHWuRduQP47uf",
  "key15": "2u4xMXR2DMsqb9Ce2CtbaFTmLtgt4YGsaHQMEGg3SyHYF8LC5dkCPYnuXqRnRus26CbLEnGjW1o1H4U7KeYef2Ca",
  "key16": "55kmhhYrt65Hv4PfrJK24XCCrFYayT78KN19mBNxrhgAHHt1nXD9xaQ19PYKc2gP4qHBZZ2abstwkqhNVHGnNvYS",
  "key17": "3Swx97qnQZGyTLi5y5qYK2q8iN4mCHZJVaaFBRCjdSb56iADSHqqN1kLNRBUaRLTSEkGGdkUF4JeqdHiAS9pkE8J",
  "key18": "bdrcXLnuBFRwTX1i6ibKhXfxbH2Y1GbvS1a4mdcpCetc14hSWgAubZGq3YWGb1xaH22z62PfRg9zNrtm2G2gpqe",
  "key19": "25F7Zfvx1moG68AJ5FFWDjfWB7BQdkfCLgwRRbQP8vfZvJPTnESj6k5iweDk7ZetJeT9ykuDL8XkFb94FTwCbeQJ",
  "key20": "5unA36TbDGFF7HDDd5p4ANVtHVQLu83MzacmgxVWdmFAC1NFdHH47y3PDP8xXfoZEX7NLywWzjY8sXtThypzjf1D",
  "key21": "4gsgHX9EYrjB483LVTG4dbtxifAWHY2cmdpwMUkycBKUKXAaHAccudSDfXXX7hUh6AmgJLCJuEqVrHJjCqwJ2tiG",
  "key22": "3DgPRG8vkrArQsd8mTLYHRbiqNFL3Hia7PDkZyCjViPNM7tqeoTVYpbdwPaY9BmhYHEKmQkoCoh8MnxaHvPfZzEH",
  "key23": "ZrJ3smFM3r7edRcfs1XSucHUMwmJgb64jwc8pc7R8PH8DeGaNSbgSipGHvWsLLULd8QWXAPtNekYmbtTvBP7N1V",
  "key24": "2RVtWVfCPume1DuMJP8GC8iRaWza2ZV11epdmVuh9qd9EW3PznBKb7uW5LKddT21MxBvg19TK4NYWWKoVTGLQwpT",
  "key25": "4i6qw2CzteZTqhm3HA8utXiBxU1hpyCs3hteMHgTzh83fxLCKhb2sfYYywjJJVkUYUGsFGFbaRmkoYLWEhfFTkR",
  "key26": "4iAiBGFMacGHjYVuGX6o3P7nRfXDADNP7iBxjEx8zUx5Jgv8Txm3Q5JqrpEUNUwG18GzxCz86TztRQhE75YfFL9X",
  "key27": "33GbD5c5aKNhKQcStHmjs15jNfNpQkx6R9G7PeemFsQSbLptK6cpGecC8Zvrj9JurodFkg9uHWYdHoCSjTpTToFj",
  "key28": "5GXeXW4kCF73q18XT6GDybCdYFVSWTZMWU34UYgnJHX3oz9oZNZ5SKVonw4kdsSX1NdQX3hLdza2mBRm29otuoWc",
  "key29": "4akcpeiYRFBxHTFX2KPinqm1T88EqQi4BajyWk7JhSjdPWakhm2VB6fLSTxwEZFgkKbkRDZyaX4dJQBejCySoFsG",
  "key30": "5ceoudiBoqdE28L8g3Ufd6cUzh2cfzCPmtNfZ8uroHC6mtY9CXadJt9VpSsu3rDE7oWrbg8hehmqCcUxkiwQyQM9",
  "key31": "3s6pcj1GrdU42PPxUBgTvQCJbUwJxWkcLWLaXWMF1G7DArbX7zXGgoMpHR9BEsWYYK8ZisKZpc7S5fiqzHYMWUvT",
  "key32": "5R7DHF1CD7su47tV1TQ7M1orc2TPSwv7ZJg8AY9W39U8VE2FGjEsGoAbVWf1MAkZgUYS3G53RCM8gQbZHBZHaDb8",
  "key33": "2L3KTfGCeBNe6RXgvAXhRuSqejTPGuayGmzBQaBmPcRJZDrgcxYe5nBfZdptzt1KWv58fZXkBts1oxFjxcLmABdA",
  "key34": "4pDtdehdCJ7UfDLqcVgn3gk4Y41MpgQzrTfZoSRNocN18nJ95SLN89iftsG5QdNs6LzQ5gk4KYda6TCKTVnFbWjW",
  "key35": "5Q3rdMDomP6VSP58ex166awA2Mq9H2Co5rq2Z3tGq766BgNcwntVpYSLb8Z9MsnZt8GvNq9b8sJxxCxCxR8ozjfi",
  "key36": "4G18vtgentXkPUECPNmKYG8m9mpKNYJKsDKBHFEprbf9iDeHPDp77wBQAX6YqYgfVGbPmUM7uw7zHZvRnUz2XYzH",
  "key37": "5m5zqwHNDZ3eUDxbLzGJ6EW7SB5FDtjaY2EY7e9LMAYCRSa1v5KLWatQnVDebJdc5iw2SWaaKswqVxL8v4FjEyUE"
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
