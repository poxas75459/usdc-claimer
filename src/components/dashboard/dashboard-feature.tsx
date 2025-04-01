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
    "64w3vwFKr3aRZeQT9bHzuqMWp7q8ix56TUqMmgoJaWEGzBVmDRFxLdpyvwV5ZvjWAqhSnLFd4LLUVyisR5mHJthc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BiELRKTyx3jLhJv9HWFt4aLzMo19puHZmqxodURouyTs1R1y8hhtf2iKjPAiBf5zQU7FFsgsjpVAWcJ1RzDorVs",
  "key1": "PvBJNoSa4QAx7HE5ihCjEKVhFC546WbwbrVW1u5ndBfaDxhmKzBYKWYEdFQBuyA8sakS6rTp68TkZHRneq5aqt3",
  "key2": "4Ng5QRrKwYw1RDU9YpqsAfbF6wJeA9VBuThC4zbQHYMCBgYsSN4MYDxUuZhFaxR1gckr8uNG42NtbFP4Zy6ejA1W",
  "key3": "MX4CnyYNGo2BTAhZuEwxGYV9ZTkPNjqCVHYuk5qY9935jfdUjM3nSjqENohEbxVC1qpFDKc8DX31R76iAxLTvod",
  "key4": "3JWHoahWR4ZFQHhbAr4eHqNCTm62grzSQDGYJEjs91etrbU2ZNefNbzfmYBFyAZxneQDYEiTtcLqmuXnSVtAzo6u",
  "key5": "5DkgHD4kNNGei5rDmMiBidhDimG9SuDsAfXJUD5vdSQ3t1BWrpyfUsUvrvUR9WzPiH9FWZfVpKs9YCyvwaNcd2y3",
  "key6": "geZUc9XPXhy6YwN3rmydCCG8oAuN51svNxKbdFEEfE1SCAt4Mui96EEgLahxzM7LJcM3bq4HzbgjqUQhpeQAuw5",
  "key7": "2jMi1J4kUo8tFQdXraCUnBL1eYKDmyfop8bPhVrRMjr9qafdzcwG2cSJ9wcR3gquqebkz7FxG2pjBarbNKszuQNY",
  "key8": "4QtwHtM74BXjPKJfj26MiY4xx9XiLCYtYWzN1X4zf62Uhc6GRAaNdeeXuuvvgQfCmjjB2XoaNJJqoPmzMC6yfUJw",
  "key9": "523dWmcwoCdfVXRStYBaRPniLubUzVxfCiTRE3MZ8ix67XQcCexa1X3wy1oikcr1WmzzhHw7gLxJiM5ght78YGP4",
  "key10": "4UYrgxuzYQgTxp75UrMv7zZihtspkAeEgdFnuXSsQzcqgbf142xTAouf33t1xXDLZdgT1giuL8FUf43jzWPyrs3X",
  "key11": "Yb3zajMUuvzBemgGTmBtV5FYg8BQodRDLV8LZ5WSb1hRiizMUFqCqh3fG9qznbWoTEapPc9KSHyUEobXNDYoGfR",
  "key12": "313n8QpmiDWthkTejkZVDgBjutH5uikd9dbhWHUgKiDMTjyo3cF5UufR9DDS5DVreDz3m7AxPzaaRarFxvN11hJp",
  "key13": "TduHK3MrfGzrQNZQBxXpZrb4iamvywG9UtcY5RDGGhsvHDYYQGxukF5h19MJVRnkKkZu8vYgDWzV5VuabECChn6",
  "key14": "26soC1dacHQyDTe46Wg3U2kq2YgWyi5LmwYaHThy4t3KW5DS5NAASwisQLXyN3Eg91D2Vmxzat4u1YPYNTCV7gEu",
  "key15": "16QDkASmSoMKZxQMLTdNS59YcmdJ9vo7GnF5evPg9Z6ui6a2Rwo5BHCyiSL2gp7bnd5dV6nzSnMCZbX4r1Ga3R4",
  "key16": "4hXtAvg8MEUdtbt493dwz5b4SiKkW5CUvfVHCNYWJag48NyCiC7pPX9J9sKkyiqjFspPiDsEJGAbWd1rXJA27c4g",
  "key17": "4T5QeuAXSP29qoiQNHTmU4K1iYgNESj8mu7cPHHBcJ7xFvSBxXPFqwPWe9MYcxLsvKvSWeQN2u3KDUsuSYQjnMbv",
  "key18": "4t16E8GHXTDorxsjPuASNRrKQyheKWbLnWi9YHKKPrvXzzPjWAbt6UQmeioimLkT9Tt1RsaWuxChAC8Jb9jWQBLJ",
  "key19": "41rhxYBSyNH2maD9RenWvEvXAh99xTWuV1gN5LD1YwK4tnzMQ6vWa71GB8N3j1D7aGM3Fm7GeE9cTG1oDsad1H44",
  "key20": "S99sxfuX3hU1w2mjChLLYTEjxTdoc3AZt1c3NRRuxJgoFX2xgXKsPUiLxA6viWUTB2nFDNEFkYBc1hn3MGbcUzo",
  "key21": "2qcVMEGq4WdBB2JeVmWsu66nEq9n7LqFHLYAKNLSvc2AMX1g6oMJff8EaypuoJzyLm311v3pYKN2tAksubcF2V9h",
  "key22": "3NTVJ4DN2VHk5qQH7EsHRpyVuqmARTDGJ1CQKYvqCyoPm2sNvEPFMtmAqWWVXF1YNrU6FvNGFMo7rhKAnVH46ftp",
  "key23": "5dHS4ChuvGLkmV3vfGRhGS2c2By6Akh4wyLdk53PLQVSqufiwwboVuT7uGgeJtZ4ozQT8rA9huJdMPJ5e8Gyq57V",
  "key24": "466MX5AxYNyzPQxLUuPXiHCZuFAywWnpuXpzfVhZrQNDC7EfAwxsDjvQ5J8p1MuogvyKYNEF8krjm9R2pjeJFyUb",
  "key25": "u8C6Wo1phmn4ygX6fbVPX1g3BxhA7rcK1pLMUPzJcUoWiSZzTGgjd8qiPbGGnDUmGYuCvRsSsX7ewf1VLFmjDhb",
  "key26": "55nk4T3rbwVKEzRggdsjt44RJfdk6d2cijhN3Vwv6EwuqeX6NveX1vtDFshkrK4aqY6RfQ6mmPj3RT4FCV2HXvgb",
  "key27": "3uWHm1PTDFAU1P9NejhVWush77Bk3Ru1AwpCHtpPgqV1T8iFN21RxiRjHsmsmXU6N71j6L6dX8rgYruictZwuqYh",
  "key28": "3i6BhQKA7BskuxUFhEJ5CYo8CDTUgh68Prf4dWepcTqig4JWRt7tWivDJQBut1sbDkeK6PeWrTjipyzUjFQUVjH7",
  "key29": "2sjHdHgYKoStpgHhZ8YEqzzwofZwAzpBD9ytkryeL97m9nYiBGvZJ1aPU6eejhoRnpLRQ5iHoLbEpsYEdvhCmLWq",
  "key30": "6723D4wy9vEPqMW4LEJrCxcP8RRhDMTjjB9A48xQTL8b7iG8MPsEZpigh6mG9LCUZF13X9r6vufKqPRhud2SGbry",
  "key31": "38eU6gt1f6cFEDQN6tCmmR6nrQrmhBMoNEeEMXDtoRrUmJrbz3QTjPbBRiJcRu59DMsQFMVZQJUrRUErhRV37CYZ",
  "key32": "Go7vPT9XUL3ekGanL7hjUK6J5gMGMG7mL5ayq88us1yWVrdSFTWGhiNab4uujYi7RALCXQtPSL2sVRyoXoZiT6N",
  "key33": "XXkB1azt38keTsSEkNq95kVSFk9hSErPJkGZ7efGkbsCkXmwv6oU47LpfaxMuJU9wWrEadjPAKKRjokbAYsiixw",
  "key34": "oM9u2NvcXDu5QeEA2JpVvWiBNoA2LWBDNx2argqiKWsPoTH3S3CdsnzqDCQ5KejeWVdqDiLJsuxjXp9uNpa6gGm",
  "key35": "4vZd1VrbrrguSiSrCZE6KTyTgvTxchAiew3xgr4JicUwY8LJgUnRKo2PjJ2Smach5k5dJFb3x3rnAfsHMLDKyfB",
  "key36": "GfqywQUdf9Bur1Y4b3x5aVjfAHboRv2etEcsnGqM5jQ1pEpDxi9iwGRYKXUWQk6ZT1px2APAxDHmhQYTS79Bx72",
  "key37": "BCu9YABC7ZQ7xQGp6nPvrJyff6KNUnoNbnZvw7zrroYn6nsgrMgfeweLB63CLrQtxWP42Ch4ecv7ESzjGt8KuBS",
  "key38": "3vciV5PW8Vaq5Fhcir2K5gqXmfyXeVgFRq5YeUotJXFgrY1jSrE1TwEE5sFa1guBCuxqigNkFXZbAn5QMswW9weX",
  "key39": "5LjbXxkdd9BiPRriwq471ARwYfdmNG8GmVoFrmBZf7G5VA5P5HdQTeFzm8xY7a7PXd1PoCyzU7sWpUb2VLnqHsjo",
  "key40": "3XMcJBYjJm3AnZYCQ1V39YYHzPujFx9xi4RhAof6rYVy6RHKSXaiUzZ8AaPLkvPVdCa5E22ySBPEfCbo9AnobU7G",
  "key41": "2AsmQ6aWsUQFb8MkJFwnGAL37xxRPufynN8zTuX3VcL8en1QyZy58soPwW5uecf9oeat6vKAqMcj945jf6JEDFxM",
  "key42": "3Vg2tRrD3JgzBNrpg1cPHtddzBejoV1yBeJDqvbk9ZwixYdpFYbwp365JCAVW4UYpRBngLmg5jHreTHPLTK4SWES",
  "key43": "MrQkGBXrXAi6ebvYnbSvidJEfUgn1pavbWugujHdCCxY97NcwkXpxkanJEqwuGg2FwiWYU52tdX28TVsMfubnf7"
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
