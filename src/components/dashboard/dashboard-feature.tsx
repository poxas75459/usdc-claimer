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
    "5p2DtUqZVgX3JV9pp2SbqsBzt3EpRUTxtumFFrSWrdyL9peoSUhYizTAjhfLGjkK7M5e6N17X85VS1eHz8XgSA8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Ssmu8WLtyECp5MFhS8yEsCddHxxQd4mptcYinjSYRtTPSXz52asQBfLLiuHC9pfZT9j7gzZ2FYEqKNQe2XwDYG",
  "key1": "5LrJbWwdZU9cYSJKXWXZYN6YpiQWgTFv8mtPGEyWi5KptqErN6cfTALrKwDnDMfNtWMB5Gaa1Zj7ait35XTP5T6Z",
  "key2": "4ctbi2uSQQjeqfNNLcxk6oTRGZvD2F8ei7oUJY3K4xhHeF6kPeXF53GFQxD9DVg1GH39aBm3R6K5AVivxtBX66A3",
  "key3": "5jP4BxhmQzGaG17GTaiRR76NpoUzFx8xKtbVcUnKjMUMtRZegi1AXDW5dRgiYRgR1XTeaCH3heB7sNbx7DnsWpdN",
  "key4": "2peyJBdhPkDSR4nWQfZ3Zr5HoUz17Uvg1osnHkK9AeV9jmcpGKrYfnk9zmu6U2QrKTP34RgQafjYVgpHSdztLVQ6",
  "key5": "3E5U3Nm625XHmSgFm5Ls3m9cQxNmuhbhbiqefamkJGgzQ5H5b7jzEYMGrntC2NR4B4JJDvJW45WuqbgPhNRF8oqT",
  "key6": "2yxS875mJoA8miaMh7ag7owD4ZvxonB8y3FVFcSw8UwFMLJiJrQFdR8dibDSEWbHPwS1jb5P3HYgaWAjJ4FWYtYp",
  "key7": "3Wbjz4pHNbEjzJ7BU6WCQ7ok4ATfaXLSWAAe5TJbLLLxg8cseKfTZbZB3QD9YiQmJ7ck1dHFYEMabVDzZ1tZDLji",
  "key8": "4jpaVQy7UdWWr6bVYy5yxuJRg2kKyRUuFWBjVvg5BjtwjbchVPZWjULaR34cFzDjWE84NNa4SbPxYUJKqcv6tDuh",
  "key9": "3XshN7NEg26u1m3fzpbMEPv42ftZcHYH24WzyWyxzVxCJa3cfcEjDdvELorg486aqs4jtjWg8VhTSEQBknu2Wu5G",
  "key10": "4baS9NQpdaDMEcA82NuEpYNbw5ppNzPrCubQn4ksLi6NjjdEWvYyQTFntM4mfGf759ZBV2s9wtpvg7WCBm4t62SA",
  "key11": "4RA4kDFaRgyLxP1sTCu3UmRn6zFxk92ErdgBEuLJGvPgaZEDmjcqVM6cLPnDA5TqX216esRV46oqFhL7C4ePixbX",
  "key12": "4KqCKxfmJkiammfCxiP2iWcnC97RZzzJK2EvJPnz7BEJWhAkxfqaMM37vCDSgpaTG9BxU3vEv2AWpiQcNPJJa2zs",
  "key13": "4gf13YCajPsc7gDc1bjteS2fH11MboxCpJrb5QSxYC1aAHzZAVL4XqiYwmk1dqiVnnkVkdrVGaBgNnW7XFTVeQKL",
  "key14": "5efK1CmMfyWf9ScryphyquU9CpMKbSRAxH1DTpFET67sbm9BnQoPRvM2cdjH2MZ4tAAbmcGhe3wNDQtu5XU5Dj11",
  "key15": "2WQJdmbfgen1XoUAv9tX8jXo535qtP3DLD7Yfr47SfgZSVbZoyQkvGw6friL7RyNsq6erN5bhJ1Et1R7Nv5dUubk",
  "key16": "4HtQ8ZjrMvW2mQ7CriYH3Ns48Aqppzs1qCXePU9b2ARZewo91Xy5sRCm1PL4V2DwN4dNBeuTyahnjfy4RrgRWw3Y",
  "key17": "5vWBd3qcwhEtL5o9HQFz8sGUqq7VU65Ahxjw1YMYGo589UMGqUVU819atgyLZUZsespReJq8B2UPpDLLqGNrA7cP",
  "key18": "cCcb26kdLBxAo8a1C6r9YyAWPWXKCunq8Yhc9EsNu2nNjBpyyKZ2qtFXWUFYGizndUtMDE6cey3mwozEcPX4eBa",
  "key19": "3mv8zKt5yguqXyRe5XisYywEEzvuXBMxpjXf3TA4WZvJR3T3Dr9FxGYjChXdf23VYQtkwPrGtjzF67nDNz9JGQmo",
  "key20": "2zAHqwfsyLxFrk7NZfXP6GbEuhCg9UEvNfmt5ez1Kbp8LMih4GWZ2PLRgkNJ86ZVFJMvEFsq6LHBhxLnHrS1npb",
  "key21": "531iyBgpiqVkXPwmoaXT9pLwjbZia9GcjbGa2hccwRpvcgciNLGPeFiHiWYGgMsVpa7ACXDVxC778aTjgNkDFkvi",
  "key22": "5aDQpM5B5zLsf6u9jqKeCR2iRqUc44xektDcWR17TipEjNuY2rDgu4sAfcTsTdWKyz1yUmDpwrW17wghB9n31yF8",
  "key23": "5npgySRQGQsC7WWUZR2NvMhqdno1wt4VGezm32RPkh7V1WsKhj38y1Wt9QAUs7gPthtDrDp7u4zb6LSnqQUJSuwP",
  "key24": "4fA6SfUSYLRa4RkLmU5WzExskdTJbcqAZQdQR7ezmpK4ktyhjwkQr8dFHswAnM7jULAo41doCUweCnc4qANpQ7s4",
  "key25": "3gSrKGgRUDB9oJb2DGSiRG9RszwxymkktHSr53NEJ4zwxyy6EWBxGwDWqKfbzUP4JighnpA75FJZvBG5bntMXQqZ",
  "key26": "2tNgvcLHf6FpnMnMrzwGUqA5yneVAHYYDCqA7AfYigyedGdXekiQjrSJo2BhB3sg6cU4ByJPeqszxgDhHdwMU7Q1",
  "key27": "Y1Yt7FYW7W22vZ5ZJgKEtfB8XXwMwy1CAHAWZuQGfoqLVKNBZEedVZhoskEAs8rxnfSL1sm9dzFDqbZJ7AhBwqv",
  "key28": "4Psr3c2C5otXqQiJjswv1BysYoxmKbhc6DzBfL3m6HhU32QZ11rNkZZGUQQhDHVLV2MV8YdE8NkXiY9mjQ3z534T"
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
