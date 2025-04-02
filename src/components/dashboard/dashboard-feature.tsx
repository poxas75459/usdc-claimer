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
    "4LYUgYD28smAgDSEmTJQLHFAL3U6wY9iy2JujgkiEd225hoicaiLhYgzWdy5VcmA5MkPP4qKCXgDkaNFPGfABL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "313TAu79ewLuF5mBX56nyqnFUJ2xmfqpyWrwkPeEg95m3SaHm9thrv3zFTUKV7YWWWUgK3gBPPaTKrr4EvqwDq83",
  "key1": "3foRKaPupW8YPkDVqCV1FzVwyStTdFtRzqCGipoMiyEuJncxUaAPcNtT1geikEueVfKYxdw5YvPnZM1BC63cfjoT",
  "key2": "2cLrdsynREfXoTLdetG5N4Nx3koA9bH39qcanQDjDRiG4FiTGZHQyuUaReLtweahpBX1Fmpb3oGgVnVW6q96mws7",
  "key3": "4BtKRjK8fbya2HhbE5rn12HwCy6roXMPULcYqe5dDGJo1o1K5eEANrG8fCE699JUBApZjeE7mCfaAQctb356anu1",
  "key4": "2KETATVKLRzEwHnAUX8aN6uzP53p2ka1nFoLvPNkHc6JY2H1YhuQDiXQrPhezrVXDdnrLARG1z9YHmEkJuzZQvEy",
  "key5": "4xxqNdKMTvuMZUqD25yba7cLmPArq3Av9YoPxaFTzLBz9oyigpNfnABdHVxLLYBUC28wYVapuh9c6PXNedeoUSxe",
  "key6": "34BPt9McNo3LeHz1HGsHb9N3PfL2tq191m2miNCkk3LmwoFTUfG7DAJnVuPu2Cq2a8MP1n3x7EbTWXgQHrAVnPT2",
  "key7": "3BTD5FG9XJdYchMwJJvJvMXHxhFvWX25Zh2nbdeUwVqkUqxLQRAdEYCfQUcjsPDRAPtfofBfz9VzUoqDLWuttjkN",
  "key8": "48iN5d3AUS7eY6sCCaUg9t6xw1CDdAhpLGPFo9vsXXADymbL9fSjgUE2TtBwhFs6XXDpeH66xqFxPSFS24XJb8Lm",
  "key9": "3hg3hTX7mJ1BDgTmfWPMycpacVFHAstrqThoznDU2bFDScQ6TtuVC7z7NgRDkKJSNZqPVCWdrwe3C38bVgeUgNBT",
  "key10": "RkpkuCrYUZFXtAgA9z4jvMi7yhdRHDhvL8gGJXJyw7Me8TKaoAFS8rg5GYexPwE2rQ5LV9kNnxqc6pU6xG1UX8A",
  "key11": "5jY5staia6CxNtS5jDU1wUjsN1cRpZRtZnQVcF9GRPkbD5F3k7gwuByGNT5KJpJhiDZaqhYbhYSKqq63ydEjkfvS",
  "key12": "381AaANJG5ZXxaqMxnGUVdAxmCvjpHJEJ9J8a56kKqUbfZH1JLDAQBEZ4CUngZSBPcSr8FbxuoZmPRz661KwKYDx",
  "key13": "4Xhx6VXrHqPaFwZ8iw64RNE7f4F9BtShtxx3EZ1N2jxoRcFXhgjYvUBqi4uXboc9Hv9qLSzyzmzbGkEyt6KdSNTs",
  "key14": "51ieuoTRJzK3AApir6aRQiKY9cLjq2Lkqn4m4yymf7TpQhXqzQHHHCgjWrXVzDbH474JBZN4j8EzZK6W3zhW7xGN",
  "key15": "3symmA1uVB96HFW5H48y8S9sBrLdbCZyE2N1hEhUUASPHhpmS7KcLZzyqDJPJuF8MVw3bGi2hJdn6hakhsy5uaey",
  "key16": "2Jt4vT5F1TNdY2NmvvUAqBtffn85xQ7LBnG8K81BXR6bv6vVRMFqdogdPuPHgZ5sGxqvaGDYDosBKiSdnZeykYv9",
  "key17": "4neKkyzjdicYZgiMH6GnW8B3SWHuM3bpob4KaZKwLSJqdnDC38stw8eeBUomu9NKmhutvWW7ZYqHKdFjLRAm9yg1",
  "key18": "2rb2EjHYsa39ii7M3sCWaj7m9XFPs4WSJA2ctyJR55twphLL6CyAJytaQNxKd2UpPNNvnicnPH7AVZCVmT2hyQm2",
  "key19": "YHuBAuPiy8fdhSRVjjKKHwuVxDpmqXYeqNE1NMJ49z1LQkjVG3e8jx7pgnwfAxTfMAyEwQbR5UMVKHRW9CXjaJc",
  "key20": "f8LD5RfiSvRM6Ep3QzmCBq5sFA7HiGZazUDRZJFnKDknvpKk4TW1JWXqGoWjvNrsWGoJmBxBCoosvXCK9B5vmfr",
  "key21": "R6pVEvSFCs7sx1Cnm42yBFsVNkL6K1x5WhbGXH9K3pWfGLVKPwQyRCpdpk8msVZikhWguSperko7rVjRcpGcXCV",
  "key22": "2vj5UAM2ibCqVgVzHmQt7kCwq89YTrpPF3J5QFASz9SoyJpKcdixTA5fhD3C37sHTtma2wTkCtBJN2UWzxCCBURn",
  "key23": "46rGzB4tF7ai84eAwe5AGYLmTa44HCE1KRrLoBimDAmVY11oo4toPThpBPQjRPK28oHxMYk8gafNu37x2wAoXJrv",
  "key24": "3ZPRRtFTi8GFRiM18ZDrP74gro1a5eSvMwmWZQXhqcJxwBQxVbreB52RgzB2PUssUQpZjGhB7QAYJQcxR5U3Md1G",
  "key25": "2dSZvfdLNFidnfJ2LaaR9cX9NnxervNzhuPrbqXC35G4LSJ26z6Xhc4JjKCw624NVZpHdhkzvAJBwth9Eygj5mqm",
  "key26": "5nR5CFdRcc3GkEAzA36M82vdJyvj4a2vGUVZiw2bwEmh7V2LYtLnp69CWoZgZ3fbizfzKSu5UtLjLZHSYeiMgjxe",
  "key27": "5vggtAQF5E1XaqTdQpthyNHYVrWLV3DneZiUnj9poN7EK7KDzrmgU7owhw23JrnRcaoJic5oxgA7tumxLVW88WN6",
  "key28": "3QFRoFmBADM9aDYVP5NPuTPaRsJBjX3NJ6Jb8PoiCU8g3MjPoUq8d4UJkkLJZtXVFThZkcgEVVx4MToTpZPbmgqH",
  "key29": "48m1ANmUH4dz7AzA9vfwXJN5Vjv7YpiXpWZEFzn9SyEXZXHiSgRdjzZyKstyFQvU681vtsUqm1zZh6zjqnr2Wam4",
  "key30": "5sScmCZRq9Aj5G8cXHUL8tTpxzKxoGpqqzFYMz7zvNrZ1d7NhVunkrtrVhH6ZWVTzzxwGjvGigCuUH6Ky3nnbBPZ",
  "key31": "5o64baJRTap27h4sxs24foo2vuuvXkUUvvAbsciPrMeLmbfCUKH66KCzMLKVEzNugmkiVW69WX8jxUdfFZm9DqEH",
  "key32": "4EsMm1YsZChLX1LLP2QZ3KqDNdTQmhVAMpfMC1fzk8FJdTMRYxA3W6g8G9i4ecEaVt2iwudriek5zpibrBTXAtec",
  "key33": "56oMSzW2XvGREd8b9r3yS6zzkZHqqY7KGMsh1KcqcePUBDzR24FERdBi7AozVzyuYdiv7fkdCtCDAT4uU7Vfju9R",
  "key34": "26j2dLVnWqnVrMGhpqcB5RNczH8ZWStwtueeqp9eqiuUgNdg3oRWdcdmBrSwqNuQREFiYUg6URosDdKs1BWQmazM",
  "key35": "4rcteKD94pcECunGeWUitN6QEYNhLDhjsxVeEdLNMWCAZUmVqEbJG6xpVnzabtiYoGiTTx3KbhaaakrRcdAw8itP"
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
