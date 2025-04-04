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
    "53CNPeJjxzAr4SxPn5LqqLkWAik6MyuDxa2Nm75z5EbyCBA5sE7SSCfurM6SYvCUWmNHh1KXeJHraQjcBmpJsdi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MDRh86f2mPiBy377X8XS3BShW7GKtYhJE3VUtjwPdMN5bcCYD7TQitfQdjCuwjKDw4HeqMqQW9BDMZn6A4Y4feX",
  "key1": "5GEXozSk49RP1ij7pPjeGa3zAun8R6Bqw5E1QYpnjrn5buaCHeYM415GRYVGVDFL62Dxh6RsaRqwbm1iEJ7goKNv",
  "key2": "Nr7hN7z3oDZEnocbZQ5Ap8ZN9P8cfsLJZHsMzB8Z9CuhdJzuKjHNQZVLpShVqRnYz2MPn1H1FZBp93QP5jGPYWr",
  "key3": "83b9EjiykiLD4JH81z3eZ5Di15TxjHd2476H49Ab74rRo38aKLYJniYE7r4gRopgSekmvekvb8mBWFNdACtTLQJ",
  "key4": "32zV8w5tHs4tDBnaxzumFimTxysdz5CeY1X2ucdEi1MFF5Spd9GHFQ3xnjSvUrjMUhBcrWCRPXXeVvXPjJwU2oRM",
  "key5": "wAsaG23T6tNNEqDPxK6A6EqVoGN5F5u9wpNZ5op66RtyHRQJiocwH7zBinmBYRPs7fgvN9DQpH1BV5ckMRvxrca",
  "key6": "rViutFAK7CKfy9Ud5jC4aihnS6nhbRp18h1YgNfvQauoPVRvjskn31ZfXEwrZPLS2SCgNHNXMhnHjVGgVNA2tWA",
  "key7": "1tFpuuyNBDGEKGKdGgrTkZPUKF2aniDeeoDM41axFBUTNW65QuAMUg3KjACs6FbKDa42NSq7X1h9jft8ZpDi2uQ",
  "key8": "4rH7FvJdU3FQ5FSkiXViHLeWgfa9TVZ48kRdFtawu4n6F9RVGMUrAWh1rBSKqSdfLPoYSaQLhLT4BCJgkJQFFkQk",
  "key9": "47cFGU3kBCGzvPN7D1MAJjZU1guM2sqLrKihRGPDyVvpRgWQ1Nw5njUkBUo5EuSSpyAsvWfB5TZQ7uedTeo9gUdC",
  "key10": "61ypRNzB2GC4URSyz3eoZzA86gbZM2WHqfVYMGm4F7jTpSmoVCcoKDJPAXW5LbnAm6UZW3ddWx2btGcu3LgjoKvv",
  "key11": "XJqjmUoNiBkmaTcvDRoss5tZ1kVAsWgVEtKZ4pQJWvQvnhuX8UwGofbd8wAxD7YofCtZo8dvBquH7EB3Dyb48Nr",
  "key12": "3D5Zbs6PjTjkM5YRjYbZP6Zph5AEwQkivoByGfcNB7VGketKSXnucYcCFKoyDCZ53qbrrZCdzTUaqjnQ4vgoKgNM",
  "key13": "v9qbi8QWUEyEQA2xjcyejkeVNdRhSiPcmqsj1MNGg14qdE7saEYqfrTwSE6gLTkc3NfPmyfBexiSCuX7ty6F1TJ",
  "key14": "2W7qFVPMF8no4HU2rrh59afpnf7Jb2VfoUFyzW4BsnWaPbYbfze1bsbtGNyJaKRh4yNEqw6woeBzU6Zkf5eZNmxf",
  "key15": "2XZtsfbWMjPJT8pj4nZYMsfAzczTirQoGFC4WRodZSXVDKFcXnffh3s8xRTpYRWJ8EoZu6nqE1A9CKPMzynaSzrg",
  "key16": "4Dsdqe19RZLdkaktfQMNgDaAsaK9oXDEXrBaGR3DsLiRtohWYiqE1FACDCqDtBvA7VRmM1eGs47KSFMNjEhUyJn9",
  "key17": "2DX4Y3BCCh8Uyp2e1R8bBGG6ukp7DC6Q8YtjBCcHAaGajbHyic9ydxNofQkMp9pUuFGRxQX8PfbrW8cfE2JxnkLT",
  "key18": "53txXwccQ2Ffwpo1rjvLQZNk9v9BCLCHKLhp6ykM3vv4yAUV9hj6x5rHpG5Hj8gZzoCRjGtxMkhQiJyHSoaBmt6q",
  "key19": "4FWL8RkUHV6oG6LZRXSSuALETjCC4bZaeMQQb4if6e77JvE1roW3kgATprhuKHmZ1oGb9Jjsr68Bw2cme4ePCNMy",
  "key20": "4XUZ1xv79WWLPKHZQAwvymrC2yxsNbPXNZgED2vddziRiDjG4nP6WxLrCPdzPpEXihWi56XyRbCt3ya2Tk9XKktv",
  "key21": "4C6jKEKneFiwHe1SZsHoYNcdfWJXcyMmJsFT1Epwwr9ZjhddHXNcsTMgiAd5jsMadyWqh17A7Mr2JLE9unFQJgXY",
  "key22": "5tSpq9LPpCXdAVdf56uGjRgwSZ235p6wvjEod4piXfqgZBfvY9u4WrEVpg7BxRaoYkbPGkNy3pAnk57wXd35qCvt",
  "key23": "29WrH6AEcjca9WpjwfT6fyHTp5YYRLd9ooKVXmHnWASma1kU3JLKdsUxUj4pd8GeewyyeMR826DiXkSWtYotSmtc",
  "key24": "5zjbVcTHJafELDJ8qmaLWivuAayz4AYnMahXvP8AJEVBS1cChPJbkZTW6kAwQqDi4uy4ZYnrqFD4bdzn5cdNgjSb",
  "key25": "G71rmyYGgDDgoqMYn16dfC8YesrycdbjWdb6RbXzkgLDfvriWTrfQzefvRj6WaschVKhQYyAVkfwiTSmjyp1f7G",
  "key26": "3JFSU7E7AJDUmUeSh1xB1ZTogNj2651SFa8t7srg4AydUYvtEQCjw159fyBFWNLHeLF3uYhwHeb3cwh2CDYbgNC7",
  "key27": "kveZkP97umW2bDVkGkoKpSoK8jDCgi5HoPHg4muXwvMRA3WZGMLt6jmCPQfSca3oPX9fJa91MTe3snWHVJqcXxt",
  "key28": "5xmJNBuLEVK7Lvip7gP7WjurGJ1DtnzaDXFxs3C4xRpQCow1d2sSvYxUKfjhHqmzKCxudse9r6uQax38kLXtvPcW",
  "key29": "2u3JtN9GxRd6iVzv2dDHPJxYp5qKyDZ3Pz84WDmyECvWN6oZ5uZ6aoUNkjv53CJNm2BN8PEceUQ22yagcrdaccFQ",
  "key30": "2LCZGb34xHwyYAqP5eTwMPpUvyJhvonydQWDjYTiu4UGJZhEqc6meyFChRebjRFgVEkZAo2dhUjKYYYoknVmSvHZ",
  "key31": "3LLudXhbvwJXz96zNTqVGRW6aGHdPWh7AMkr8e8vKK8swXKpE5ZeWfqcRuDuNpwQQt7b3Fa6xsUzGUSFWkDCThUV",
  "key32": "4CoW8DTzdjUPoBLapWDnfomN7PN3Zt6hm7qxwMB5oo964e6CKJQjoSx1vWsMS4FNsDFoLU7uWUK2Ey33xekt93eN",
  "key33": "qPZTKF1Q2xRdFWdoNeoLNKoNpxzFtijFg2NV8kxx1tKu5Z1QD9iymKEL4Ueq7KFCLnQbaaaXJMsWBeEzeuecaU2",
  "key34": "3qAZFMooBzPqvKtqm1d86qQ6xiDrY5Fpt7t9qJ3gycNeDNQ75HTHA99W76P38YEoutwjzRdyH6Tf53dwDaaR8Njb",
  "key35": "6uZybtFL2kwBwfPNvhpSYn3tf4mSd8Dm9ArKUvLTgov418FVTM1m7EydaVMZZZWDTBgpb1NJQQv6hrrzuKEjsZL"
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
