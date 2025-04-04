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
    "39FQnur2QRX25fgGivqouGLSWHWoUZhDYdKYez6vugHKd413tzgn9BgE6mxVHuezZLmXv71Br7ijhFwy7Byu87Mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BQAySJHvxxQBaykG5QdPQWKCmSic2hwqVyXcy9Am6bM15ZPGw6TktK7hVF8FTPd2n5gVaxUZ5q2dS9c1uSCpXk3",
  "key1": "2iobgrMYAUjRb7VcrmPMZKMwQwGCSLfZWSH28QRVnVaDSqgS2MUXcNvwp3imhxiH3tqnxe85usq2tsadTv23fSgZ",
  "key2": "25SrLax6cxHKqwuHLFYVGt39dQA6CBmJhQkNk2CNq1QMMQmFoe9V1ub1tQuVZb6PJuqWTaRP9FHD2K8RNKidjcZK",
  "key3": "T6KfZkzq92d9v5RBee7RF3Poh9DKSkdPrxyPbcNWiBg2keGm9wxwuPz7e6p6WM7qtMVsQ4C8E676UXzwfr3Dzqh",
  "key4": "4uxjgepsL3qKXJGyi5xn8bi9SSekQpp7NWfspzgsgFvPVubeD8hbAMWdZV8JPaoPQYmLgUXVrLojMpu1oLfvzeEc",
  "key5": "4VE87Tce1mPPGF17ZHorJqcv45MeUeHbUJZ2N978fGy9j6NfK47BrXkG4i5pNa87GrvhCHN18SxDE9Yn39zstk6",
  "key6": "5JCse8S1wfvUBL3nqB5U4T3vHkm3gYZyzuPiMsyjWVoJBhg2FpJjJ5YpLaa8pUJsgRzepR71hNHehqRUQqdU9rhH",
  "key7": "2dkZs2kLvYvV8SywYh6dsEbdqgkGWt51yEoUHj13C2MVtXheVEYoXUMqfUyYpvvpbAdCB7CbLs3DVsmCimr3UnMe",
  "key8": "5CJNRHXYYqPhZ2BEEXVi6KCQPU42kyyuDxbkkz9M5bUf3uHAjryUSJXRTHTTn6jm2KBfTiKDygG5uu2QWniu5Q93",
  "key9": "rF1taZH5hvRGn3z1GnmhZsJvTCEz8nSvDgCNHnKBjY3vee8s6HkdMNDtwbPLQdShseCcU3PgUHzq9RCsmMAKWdo",
  "key10": "5Bps1MZSvfHFmokR2NjwvA8UWVzrDyiBMrTysh9WhgL6sXGR7Dn4hky15ofG52jzD1ipHzpcRXL1VVP57McYaJQo",
  "key11": "45oAqPrDCX184h6abTXnTTfq9LboWK43Y5GzrGf5Hnzss9cr4UAPTXae1XYtMEm94mEsygFoFxSUQQKEKfv2GQ9f",
  "key12": "44MCHFD54nkPBDV1sRNnpDNQGbFvxLRv16byYcNQXxmzsLBMFbaLW42SYYk9UhN9ePy68kmfgg8pre8stZWxbr9K",
  "key13": "2VvHVKEywrNYfsWfxT6cYaVAVhAjbNwBYFda56NX5CRCoH9fjZ4a2mGatLXWnJ8pUvdBqJFrC9BD7G82o9CnVvLg",
  "key14": "4Kz5m2iimg5JQhzvKqchY6cZ6NuX1936qzsA46x9kcMZkXtu1kfWQH92PiGjQ5FF6bByHGDLat8GjbyBAu5uEJK4",
  "key15": "FZMYAMcVWNgPwLqRTqZQWABcLKcKQt9YbM5LfMMsJx3vBA9FzskRmesKxuhnU9gQHj17YMQA6DJf2MjpeC2DjfF",
  "key16": "kiorZ8ZeqDaqM6rUkVjAsfy2cQAqK7TvsPdkpZx6Fc2XLhjaXtscvzaDJAyBqDLgGKuavFnioJGGFycRek77ydJ",
  "key17": "3rxKvmPLga5TPTxFdVAvD3xthhaNpE6CFuhaPw2kKj9LuvhRi2bzSPCTNH7QizE5agy3YuP3badi7TVpuQpmuvtk",
  "key18": "3uXQCSvNUrQX6z7GzPCnLGcZDMJ5AgDfSK3ZdPsj8Lpj6gLVQCmJA9MWNfD9FfVSjj9criH7maNP1jBYz2ZQtLrT",
  "key19": "351CC6aZjaUJaodwdETXVnmqV35ECkTYcGCZPsGndyLW33q7xH9LfoQrdTLW9cXRm8qHcRYQazB6kbkDco9zX4X5",
  "key20": "5Uhf3uQ1KxChedQY9VnM73mjMEFq1wBwXxwsMShHjFptVAyuMpv8DGqbP6UGnQnbWqVGcgXzNtHygVvGDTHbtSKm",
  "key21": "3Kgc1BT612cs41vAXdcA3MtsH4QSUe6cB98fzjiFPP9QqEaePkyTvc5VGRQtXp7c2HDZVkEuj8sYD2SPv1CYr12J",
  "key22": "3d6Q9HuCzm3qjH8atUYwVoEqgdcqXAKEaPoENaYxt1Ri4hBeBmfSLrPJig23oNjtcVK3APTqj9ipaKQme6VwHsdX",
  "key23": "5w8oMpBS8dDVPeUfXzrNqUt59rTcrWXDbxGkCFHfm7oSdibp5oaGkMkkj7BmoVZe9yM2XussVRJw7CL11kDrm3SL",
  "key24": "1F3Ty7cMtJch56DgtkqVnWJZdFuCYyYkBBVhggR8jaZHyFncSAjCEmSsvPFPKp2ggk738CRptBjCBUwSnxkTMBb",
  "key25": "FKgCWN4h333PgEJRdx63MsFsL6gyL2eVoDbHKrBWsQQhHk5vSJVqxeX6jzvxvDh8NJRqaRtT9ipmZxuSKNcAsaC",
  "key26": "4kwYtSyHUMqDVVQv32hpzTe4LGXU6FceHo1HPHTLUsevdv4YHLXUgFKv1emyk5eNJtPHbuKMgFGqRUeWiY7VFHD9"
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
