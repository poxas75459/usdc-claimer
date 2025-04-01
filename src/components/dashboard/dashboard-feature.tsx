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
    "5p8ddQ87SDXq8ZwdNMfJGuaVeCJYTfciHpKvS5sCzWTZ7vHnG3KJ8yib14e9xUK8BVnzppACMKMpDrBEUHqYtsrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s52ksTQJjxzhtZE3QA6XKLZVSFEVHnVuAViGXWENYZ1aAv6ugYbFevLxooXLwHamw4PZ11yhGt7UuR6c2v37Qey",
  "key1": "N2e87hWLTcaY7kKRYWbbWAWDDBnKyG8QgNVrTWEEKgNmf7XxdSuwAJWDJpZERDitHH8gaemXq138R5YNFEoTxTh",
  "key2": "2ThSy52PdNnjxLC9rkWVThX6pyXv8Qmuat2sJTwg8NxrZhm5D1EC1FjKwJTQwjKmx9zBcrQdok4pDcR6hXHN5Cx5",
  "key3": "2bwLaXJbiDoPu4mhVRuz1X24eARWFQMtzhRBAzkCXddbndUru3Lur8roXaJafxK1dveZoTCCNAf1gEWFbHpgUpqW",
  "key4": "2yHkBwtaaFoR1QfegWVHgviSh8cLGY1ZS9DpCDvKeZ8JtFVU899fW8qg4eRqh4fAZE4nyBDaTVHFJ7g3T5j7Zwrb",
  "key5": "4rNcPcmZ354oVtdwqinjYbN3sTKeRNcbqbY22CUZGFuRLqQpd2EkgkW5joMbZp5SrQqNTX3CGrx82bJSQUWESK5k",
  "key6": "m5cdqiRFmQQanYV5Z5HiaJ8b6jWj9c5kVehmM55QdMcQxi25Rwdu5Sx1woV86Fp3ZATg8YBRjmYFxTZq6f3kD1S",
  "key7": "4LV6x2RoqK196efSYqQJHVAwadx5y6hfZt5UEXXHW6Wc9UT2h4krzWmq27WZGdCbVLtcVVybiNCiu1TDkGhJ77m",
  "key8": "5Ue37ufyaNWWyMn4xJqpRQFZvrNGErrpZjsPbv45upXX2qiBwos9nUNEXWKw7uvoRQdoo76PUSt2MAkr9nbjVTKb",
  "key9": "4J7JE9VNwuMTzWP38ncQ5pEXL8HoA2KUB8bjUMS9USJzys5Hp4m3SaiCEqTcwn7wdmpHLNWJW7HzF3MfwMa5Gj5s",
  "key10": "2DGEdJ9C52YwRhR62ko6sExD1QVD2YhEcwPP27YKd3LRs4wsU1FGFvVA3vjCERWDb1xRVXRtAmB44JYiP6bcPPv",
  "key11": "45RhdrACSYZD16xgCpXQFZtcMJ72K1PJYXAxKTE7H9nkUUANmYEREYAVn9Px3DFQjVihyD2bZ5PM1MogfC1HJcUD",
  "key12": "5E7Tv3TExexpB3Zm4n4xevp3U9woZ6TCmrjUKo9PErozSwYYyJJEXB8ZgyfoTbdu36C2WgwPiDHjt6kG7oe9mW84",
  "key13": "31TcT9o6EdkWWdjvhjXcFR1YH3pfk7G7C55PeiZDcqGarEhLpT4uYWRzySjzBcaj1BGCdLsXnvASdPUyANRivQBj",
  "key14": "3f5WKfg8DXzVubStTceBCyVMLcubyZU6VzVQjGANiXn9mWCCV1QSawyePBVqirtTsYFMzTE9dWKoSC481QiDseBv",
  "key15": "4QEcQcB43vp7PMctUozNcRWvYUtmivJzMxUvRxP7cEbuqE74Zszh6oD7pSs3U9fd2BJi7oXWY1YTrsrKmm6NGSsM",
  "key16": "5RAQHmfLnqWyyk82iM87skmtgsjZ6Rv6WZtyNp7RVtHDap46DH3KDgsmWADUa7bP3TJAP8Q8qJ7T1MaQxvVHtS2D",
  "key17": "3AkmQN7nYwzL2VhKDQ6uKFKSaTacSLfLiT6UX9Kda2DKPW9eJcAxJcWrftfzEbaMhgWCc9yzhLCtRjxVbS3ogdQi",
  "key18": "2eeqCkSLDMJtvJK1CkGzrXdtd1M3aevh4szteGYtdqtkhLnVn74bd8r2tQNWu6DQg13omE2PojavCMjAr5GAM6J8",
  "key19": "3a14U1tqrWtY1DcjNtatnP9QdcoLgdHhK4PTGdrs6QR4AmauyrnvpVW6LhFr3MHBWmXFjpNzdh7aFKxqgzKzFU4i",
  "key20": "MvndqQff6Xcm6h6paANJ2TiY9a7NXnZ2h4Jc6PZuYWmJcLmHB2Y4NX77zHoxE9F5mg5iN4wbFaYmMq29uShz3ir",
  "key21": "4ZYHrSdXs6pdatQ6RJdQwzxW5YA2zz9ReTxuyZqchJCHSiqr6peqTbKjbgmy26TUbATQVwt3TzUh32Hu5dkEqonE",
  "key22": "WYGmNBqmuSMa9gb51nGjasJFqAfVSkutvcxcPZ9hNLAZRomRi4Tpm2Xof9bQahoaYVLQdnxkVuKwEKsw74imFCP",
  "key23": "9HBDvzZ9tVWn93vhdGuZaJv1wsy9gqC5vrAhybmCk3Np8iFcFsESMS4WswsL5aUfQK4TseFuPhqPwrMrnie1kLT",
  "key24": "5X9d5vGtH84hULN99nAgeqSKY19TFxMYPCe27jEuN2gJUwzR7tKZEvndnthJvm2DYSn8qVxAEWXXP3S7xK1i4AaL",
  "key25": "4Cii68ENHtbssQrADfvwuGND6cwVVVV4do6SqxWe7sdzMHwjvLMb58QXsSePESLhtxEQS2rHkLw5K6V1wq6MkzYN",
  "key26": "MD1FXo8ErBwDD7GYs93rBhi2jW3rfMtTUgdWSEx3SMdNC7Ds2zHKvoZUjH6dRnA2qs6MU7eLNgkZFFurfrFvdk7",
  "key27": "5uV6z4r58HjsNfq5Varbhcyi8HjXFeQy5VYVRXWwcDamoyMG8uWwjiAfVwbLhYLnJvo37oXFko4LkxcNV6WNQu9V",
  "key28": "5RcsHcQ9ChchYnFD8KSPz9gZmRNnnjoWpYGuXkok2WJg8hgirm848q63ZbYSXxt5kzRvTYuq5isKoQ99j2LvjXKB",
  "key29": "5pZhyRCTZFkD7NwxrBVAtCdTULAzTJt4t1bKxZJw9JWmYZ3TgTWqB6qfFtALskh5oRFrZNN4xcHq5MnjCcyavgTz",
  "key30": "59yWF7yKPvXUfxMiTxNFBU6y67NXwJzfBdFQWXpRmWAnz82eSgyDHaiZZBQr1Sv61MGUEZJ4xiFbuKqqXsyyvHpB",
  "key31": "2pKbi13sXDFLCoh4DjDWafh2WxcwTGTsuzCTj3yfP8ADf1HtpsCfN7CmJDwg5L7gd7nQvCF4j87SCPynqUsvLLRR",
  "key32": "37RUVaxeyYF7R1aeMm63xAd9DNyKGd6xJPsWoVbTXwYH6Rrwoi6tsNRKgmqBoX8xeS6k1GrYn5Kg9bR7eYsH1952",
  "key33": "54kQ7n4R383vswkpYUQcYUrR9jLQo1Rs4fP1rqmuq7iz5Vcb3p99dnetxRHcYhT83PUynQarsXwxB1uxt39jK4xG",
  "key34": "3UjHK7pyKPiZyQJt1fcfkKHno7JzDBBYJaSPoaPpBXNadCXq8BStR7Ngj6RH7Awp7zzxHH4Jzaa7Vzbz2yEAzrzb",
  "key35": "7aACEa5CnsYzMZ61WfGFKdAtHtLSwq2qLHPvDvnaK7aiFzNTCXyepGMDhu8K4RyC1qAaJCEzHcWajoYbwrzvtxA",
  "key36": "4DDwaxp5WdHvVfpgogx3bCZg3jpCni4BS4gDfxGbxVbw6rUNtTQFTkrY65u6aDtN6c8CMABZPf86DecdtSyKzvqg"
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
