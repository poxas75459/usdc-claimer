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
    "5eK5q5j7sbMeBeeM3AoxCwKRc8QRZj66ZgzhVZTwuz5q9f2cZWSZV4k2e5Ptu9XBoyrQc9D5XsfPDtTmzkSoMu5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZoDBeQ2DAan1BHSwe41ssFHqRbhMrYMx7wi7Vm1kkMhkDvhpCBXYzDSzYEkCLbZCt2Y7yYK8qHgjsCYEZnbi55",
  "key1": "LkycCoCTjLhGHHQVTiw3h6JaSMfYBkq4jNuGPXqC678oyqCrLBKwjPMmjQmamr3cVacHLTJbokC4X9XPvjvFC95",
  "key2": "45UaffVZ4nymarfwNtVvaoRLCxrNE4p5NJiqxp1fmihKpgJBJfnBtwqMGyinmgZhdLhrSEGdsRjcgDmfoSVkiFeW",
  "key3": "2oKFHLGG9su6xL4c3iiGhBr55Qky5nnUCEH1QoouixhMFNRjKxieL1xe7j8B6Dk6rnhjVNgLoiBUje37RRPSyZ6h",
  "key4": "JcHM6C1dp75ydSGeFgRT5RuUyVVgdUJ3rbcNApyUVhQeoSe6MrfWXPeQp9a9vQM8K4qs7U4veWpU4Bk9z5dFASN",
  "key5": "2Uqvo4Lk7uen4fDDtn4dVn3xK2S4afD6A5VN5ZWHk5cus2hhxCnzDUE1dtZPJzHgoHLfwB9UFJrPcJ7SU3VsNUB3",
  "key6": "4jsSRSevSC8NGoTzYVcnRynRhzkzWn1JJ1SKfUdGsXdUvjjkULdUkCc2gKD1M48t4pCC346WtmHQZwDwyH6D53NN",
  "key7": "2XNBGGMoCu3Q4SmWNcmQaykh4Y85ptG3qjUgvB4fopP764A48Ks3U4uSCQvqthuuGpuMjg9ggjabVLLybsyKjEs7",
  "key8": "92CuWAmgkBB8jgN8zkmLSBKr87GZVvuYPAGeXEaGjguYr3k7ruEsQLooUbzHa1C6LvitXS9mhuZ7wkaAgbYwfUy",
  "key9": "C7czwgpawLM32ZEDxUzPQcrkPhpXGWj8LPntY4qBBzc6ALN7MyANyVVo6oFa4eR8x1maVUbK9MhiHHsAue27ffH",
  "key10": "35TcEsAsNA69eequ57ZH8PF4YTTCpXYGNr4RTXQkWvGx2bB5rmPpBKi1dJMrFs5BA8b6w2RZxRePK1AqrCju8Wsf",
  "key11": "61wdMRNidbGUQ2qfQWQ9UmVyFEmq5KyWgZ3Jo6HhkUkrYfDJycDDyn19AKoP4rqnTy6SnYkoEckkbupSBMJdLTjJ",
  "key12": "2JkU79a8npzJDcJTtM7T8t8b6HbYe5Hht6P8o7TKF2bkGJdXDMYLKW6JnUHHA8T2yq7D7HPxpyG7otKDZxqTfxeN",
  "key13": "3YntFNHDHhsNUJY8dtXwcr2JH1zS7i4Hr1mhcPx1yjGfvHkBLFxV44wvEVPYLZFSzvVtcKxLCfpYQbBF9Sc4wmdQ",
  "key14": "49zNYi2mkyApG5eetGrLuskHySf7f9V26xdCYqwha1HcLY8yEnVzmqU3rk3MfX5ipCaLHt3gNuszHQQhLZcwvJBn",
  "key15": "hsFUaNg5wqzqbhDhbwzBaJ4DuoVdZ7xd7EhdV4tmNtsQ5g3ZpgENf83ivUnovjYcFBu3YVzpAQdwXzFx1Gpm3Tf",
  "key16": "4RpWi5L297QJXzAEHkWBu7zuo4TZ18PTNnTdBs1birJp58HPYtV8yFzcpT1f1UryJ1v6AhdkGiGLtAjB7y1rH8XU",
  "key17": "3TmvzCtNx8L3ZTFHqKYagvSgKoZKZeg74BVheJmaPPbwXbAYpEe5ge8NuwnY7MAsSzWx7Bt3iXXnhMcbzCcR4twm",
  "key18": "3v8FhaZBeSX7TgVWyLsywmuRvRwDwwmGBc9LR1FNypYiieTZg4KrjrnqGT4ijXdW2aySw7aFZ83dvMLuxoP1cijA",
  "key19": "53mLjbynuJGBmSkY5xmrKYWGoYveFJ8LKmbPQxwoinWkBTWqxyqKMFgxhWFNeeo4vWo8mbUYz2GBpszXdHvgmiFt",
  "key20": "3JvpngzRp52GXtTun4bWPWda3iHFXEpAvxP3cyCBzrbZph97WJJnrdgYXhYg7HB8LjRZhywTUewpP5E427ZmjNUD",
  "key21": "383rqMiuomgviGg7BSauHBvz8zBh3bZNKoYGEk1bLD7artMWBUGT5BrmxxSB9hCiNMDaveGnyygqv2HRzdFCfxLn",
  "key22": "4ohvEVUCuHsUAsNS95dga15wXpYpi795GjxgG6Ur7oGnutkJMvDekLpTbGjHt9cCkuQCj5jhzqSqhWy9HPBk1Tt1",
  "key23": "3d2cXTvJobQJsdGdZseptGksNzFWFnLJozZSfP3c4o7egwuLtqDwV4MnGp79PCG4gsV7yFqt7nWcXu5Zq2gALCVD",
  "key24": "4nt6F7S9BTJkVhbTj6ZCx8qceaBttq4kXFVKHFPRB6aihBocvVUFCrK7cddZ4wHXT594GxwNUKsCHMUCHTPqcZ1A",
  "key25": "5yiQe2hGNkqApcwNCcDjJuRUCCFg52NCr7qHyEX15am3HHckXg7eovmCU5perUyp4UdQEPmBCyF59oLEVtRYTsjL",
  "key26": "KgFipWtHhTmrzSQdSvdyhGV4qnnTSnYvGiHtnkkbo3FsSZeXEAJp5ZjrobCCKZrbDfZ9XEUd6eyZW6voybF4LPH",
  "key27": "3JCXQSr8jM5SQkQWd1nKVMsrbDSjBMgv9afRkurPZxtijahChvHJw1VR2AYgVnBGmSQe5CmVVKqCFz5Uyp9Tf41z",
  "key28": "3fyVdPEGVdQ3v9JFzs7SVBZARDsKxwiVuFrFd9h2Wbf1exnxMDb4eyLyCDpueruCHSYbh1AhoUicJgmhjFKakY4y",
  "key29": "4kQEBRAseW6ogAQMyfYKjaZQhTLJv9SbdEpykpQCE5GzibgCPk5vRtgPRanPLenjeY46VxLKiLQgT1zS3CMb4RHD",
  "key30": "2SYo4u5stZnw1JcjaFaYfpMUxNrcaiPkkcssV79Z7E9HizNbqBeqrBqmQt5KwSrdcBtMvK7wY5K3MPtVBtzGUqmQ",
  "key31": "4jpMS6Vv6uK5f2yWqnCn2UBbpJUQxAmUoP2p2YwkEHqZhj7PZU5JbWG3VekBD1VRNzee86HHCwiPf5e5y8TaFkw4",
  "key32": "5ahxWhGJgP34GV5zZWEjGnJ9caGGVypynU1rrVPFXZnhzusZ9uZNBwpjzaVjBx3fyMBjtgdgTPMHeP1NkGddo69V",
  "key33": "2iTSGyw1HB8AupXaQeQcMewdbBJTpWCrUG8MRc1eEz5HfF4KY6sMq52yoADeKrPWnWKao2acjhr4p1k6iMT463N5",
  "key34": "dS5fjX8JWdZtmEMYPheG817kD9uo8MUF8uZTTzMADVSp6sYyDLxTTHtEmVMRdw9ULdBmqoXvMWqT9uYc7fnYzw5",
  "key35": "4cZUKzhoDmcJesGm6kTHtzc2Wo7SG2MkwTiwjPJr9qEdhMsqpVGQxH742C8DVuwkHyS6cp4LduKAnRZuFK9dQiiW"
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
