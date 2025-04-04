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
    "2DUXETtdR6BNCWAVnjYXhdkjjLgSYvjK2YcSSsYo96kmH4AoQZHRdtBBWMzEgnrkDk3tCCMoT9ZgVa6RQys9cjKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4co34mvyYCWfZXepfFGtkhPgb84AXBPAXS1XKyN7ibScoqJnPF2E7rXo2sbq9ZC4AYKApQsncBYCQh7ESaqkTBkc",
  "key1": "37oXCjVH5csrKRhigzwVqX7t1WPXNxssiCmRHmyx1Ztj2uNYC4EXVwDpR6q4AuYQzFzRG3qJcEkJw7UtZRuZae41",
  "key2": "ggEw6kvo2cYMRnuDo9LHoJXjpXvdF5mUhQfLuyXzpdn6zvPjtqGFqKXM7GEk8YWtengX5rUUUHQyjRXPA6UGinN",
  "key3": "iKMZZvnALeZnMgkiWS2FoUADV1MAZ4Hkk46HD1aMQ7XAnfBVKYfKz2k41N56ksD7YQVZfLYvjqNp3j7Gt9fsuKt",
  "key4": "3Ch7PUYBhtetpYunLPEphdsNCU3pe4WsimpRUUbSNnopZWH8WYsmo8QVWrLpuRWkUCmjo2YX1uZDfPucY9XGH5FK",
  "key5": "37NkGfZ4yRCa23yFsqKWYw7MBuWRuRkYAHNppamXLrbpahFM7VSkKKFrpPV4i3n7M9dszvhVaAseSuDaq73vnZo9",
  "key6": "2mYZjHJGMXJU1x3PiTh2c4PG8vPyaUVxQAwQB6Uk7VD6Azjg1xEJwvoB9HH7eDPT5YfrU2fYWdT5VvDYQw2oZ13R",
  "key7": "2NZhbtcMDyZU4rRjR5ivQbLS1jZYMLEbCgGzqQvyEhqgb1Xvn9j8j2DfXjVrwZ4kV7UPH6CxmgnUCSTz2FyyWG4o",
  "key8": "98uxkXbLfVfnjyv1wNwrNsQnFrqeTSxN4aMp6BST8usLE5Wzp1Nr1CmU3AjdQkm9QdMfDA4udMNrEDWZfmpo6Z5",
  "key9": "61yiQ7i42bDhDds8a9Aqucooia8BgMooJxbKKHM6h6Hv21aRQmtTxPkTbwyVbUHCAJwHGujaVt2N9ksvpHPErkEg",
  "key10": "25VCVMeQFSj1Rit6cSiSv3RngQLkLFdnK7H3wrKtPWNd32Urfc3BgcT5UGW8Hjc418eihLdUQYpPho4i4R9ubX8G",
  "key11": "2CuYXkfTNT76Qtuj8rAVVrdUr9cU2fS6qKJFzybJR64SsCW1a9btsCTuainXz8K5yYqekhmdjmCgNDNE2Pm53SsT",
  "key12": "3TL2dGSVcb9BnBHc6zCFUU56hjBKJBz9a8xUXFzgT19VjyvYFvBUDB3rK39r99GeoAdR1PNN1SYF121doWABBpnE",
  "key13": "4LUXzqgyZEwv83wtVSUWzeBXn1remc3w2TU8rtpsDme6qHjqXMNn17T7UjBuyherPa2kgmCNuX3XP1KQcSeHnEcA",
  "key14": "5e2zmvJ9SSFYUYH7H5aP92zeysZDVya41Cg4Xa6J7cWww8Eg3ZFe3q1QuPSVPP1H7ecxhpoQoYUahKgxJKAmfbT9",
  "key15": "3jdcuz3QSqRbunwRtUY4wAn4HopRhDfjR6HecuKUsBkegT8RidrDznDP4W1AFa1s18iusJxTrjQa4b4j2FuL7k4f",
  "key16": "5XumDRKFxQUMUhmk42wUkVyi1fiwJHpSee4uaaQXefKiuwY42F88c58Laa4jkrTFtLZtPKSPVHwXEqjexvHKpZka",
  "key17": "4LmuH1TCY8gEEY4foKMFpDJckLvaqLMaodZnZhDkLXBCkVkwSwv5eVPHAA6kSz1wXax2t7KcKmS71oRiUQzbLu72",
  "key18": "3DpxkMiNGYNVgEcZKz37p1GwpugwTWXBhfxmazydcgZgoLmh4TBQ16FaDuZyGfedkK48KVNcVqDd8rs129XpT1Jw",
  "key19": "5AWXcE1RsLGnFhhTUkZdr36yBM4BrkR1Hw9hoJkfBG3E4AwbUC3KZueEqLnqfehiYPb4cTmpXqUHdtXnnJHKo65",
  "key20": "wE3Q2EgBpY3jZArbcwVnjZpvxvDAp5cbSR2p9DUAP5UfJrvj6ah67uiwePphtTKpC48UV2sd91k3MrNyDW1pfgW",
  "key21": "4AmvCYgGuat4YqiJpBCoWhiPyVuqPsoFb91K4FGLALCWhJQ6HP7mGAFo8D8MzNGfMTB1ikU5knYfsUmqLWWJf1Uy",
  "key22": "544ZcVaoxUBa5Ecg4xYk5Rs9NKL6Xc4pDNRPQqUjr2FP16TkG5pALsdMo21KcrJLNErv1gHk9ke17x9gMiS27WTo",
  "key23": "2joxsG27juSiL4hV7XSsZM6aaM3uqkQLqwbisFoG52R6TGMM6rDYSMNbkwFFjJJC44MxefH7xmNx2iiVjiACVPT1",
  "key24": "2aLxUN71t5JKvJcAL1ZTKBrf8VCpeuHj4kA7bNgVXi3SC4mr8egX4xgCVPLSTE3yQyR2gAMu9LeazqoPbjLR8Trn",
  "key25": "4aUzHKJYHta7VNhFQZkaqqwkauCRvwiXT6hp9ecPppbYnNKYdjyntRe6w2CPwBW4hpAT8KzWNr8B5Wmp93GUxvhj",
  "key26": "3m42pDUa486uBinfsbnpoZabf3EX3Do5JiCwLbn8sKUW7967dxsryqR2gJpmSZNMK2vA5UyKXiTjXeU1ZkEDwiCq",
  "key27": "3NPkMsmLQGZwvs5PVLugtA2i3KVXHbAwENs9dJAwbcFALw2J2LvhU3LTgMe1fjjEh37kzWHLASBeDHdfawXyMfwk"
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
