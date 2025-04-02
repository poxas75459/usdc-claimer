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
    "2JDWTRGSZxVXT4rftuReoc3QGFBJHwbZznurTzK34x63Wj5T9JthHmQVNq7at9N8VeoHyBHZqyjiP3xhd3ugy358"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2npdgmrWQiWsu4vMU6C8F74sVnrSgL8SYieM4815pwSY647EntmT1e7QAw4NFLwtmXTbbnJ2aP6RUHRhpi4de4Hf",
  "key1": "38GcUJq9rKpkvRgRP1wr58e8EftvPuDDM35ffvPsKt8vVJr1BCzT2pm7KtiXoaU8tjfmTqE2DkrzhuN7Wyva2977",
  "key2": "3hW3rtdYLep9VkpUUK7GsSS48k5KKL96TrcLwesEQ4g3E67SZ7f4qgXWN64k67wvZLgeHunMg51DHrWbiNvwnXk4",
  "key3": "52aSzytqMZrhCU1qdySyueMWkZHxsWwtosuKV82ZHEkTSz9cwBoRzyzj2grZwYxfSC9XUALEsQvxxLYTNGe9vjAs",
  "key4": "51ytG9n4wioEQpe4fw5jSTGrbft4thHPam7aYe2ApUbpeMhxPqMzSiCAV7AKxBSAqEoZqKuR9M2eTVDNzwdzAZMi",
  "key5": "q8oQzhG1vyrGjNSfiDuLTMH3aEaVnaeXpgHiKqhGFjzq4cmMZx2yeZNkSYinMg9SuDKzYZnCg12E3cy3rKwhZcw",
  "key6": "5DVNfpYD95CjkxgsPBaTMosqfEEEGbTvYkSuiTjFqUvrzf8FyPfgMiKCkqzAqbZmJiPqu1ugk3TAhSxHoHAkQzoh",
  "key7": "2AnW1wzi8sDPCiMWWuSFhRWMbZnZG7SzMcnCuoswUakQbank4MigUAyw7xvqQJeBhNVkfM2dDNGZdvvgk3meMoqc",
  "key8": "3GASaUbwWYKckQcLHJbhw9oz7vRVpt7s2wqX9hAhaBKFxB9jj3bj6BP5sLXhoYuntbhrNc2yepzgGrhvFgzLHkgN",
  "key9": "2rcb7zRgZavbVERbVfm6q2tXaL6TFjLG7ByJmbE8hjF2dHdrS2brKKPUzKXau7Bi2zAujAGSikVxSh17rjAHyuth",
  "key10": "4SW9UHPEXax3X7bqa24oEfC9kQLpjsAMC8tNrn6pE2ihvbXm4KfS21eTE6GLh4i2CZFFjr7EmgwmWHZbuvETjJjQ",
  "key11": "3PeCRr9QZv3up5ttzgUjmESpKw8FUKXJcGd9qZY6eggJQ9uGuNmiN7X31o45D9TvJcAe4SXSpfZehheYtXPrV3nV",
  "key12": "5kJZYAWcJhDpCFFNFKSau99YJEqnJ37JDJvMpRBdaes6bNbS46VPSS68kyNoUrkdhcWEijvwV1AhpQHBu9gSi876",
  "key13": "4AB6VqBUWtR4vZQMpbvcJzGR3VwWETV2UCSL92wrRcRjjsadrduzLavm1ynZNcBDeYPX7ZsPjGK1TRmzu14M6ebf",
  "key14": "28X1BGRUHm4cFdor1sD9okQXtwMbk7FsMQJNCQJoYKHPfHM5VmW2aagkoT1VjPmAjmxqX5JSxoLfUqDf1Dwe2aeN",
  "key15": "2N2FronHvCxtu82Lhdg4miWLMhasVxmSwpfHpddFDLL8fHwXGYsvVTqBkRZk3fKgJ7Js9ipiG1qfgNTuXhJ8r37h",
  "key16": "2UhvTUkpwyrc2yAAsGkp9SMrr1cibzCM54JRfqXVuNjbf697Hb2ghQPxGPbktFgtETygWq9ZUGMC8G3QdFS88k3x",
  "key17": "2hJwqUnVpMpGiQAPCo4ArVK82p6j7NWvdsheHAaVC1sAZWbccJSqzAKk72cvtymSsxS3UEQyunfnoAsVCLMvN5b8",
  "key18": "2NkJMFuTCQBTzdWeX6tb7E7psoGQHLaLsscErTjy6Zz1aEjDoaokpgMkyREsVgV2nLMzLysSD4MtMFqKUZ9ejLMD",
  "key19": "3cggiTLKtZHuGQLttSPWWosZ8bZRsXJjuuA4ZYxPZJQ8rnZs6TDX3DVzrymwbWYCczXbqjZLBz641CPux8d9gHE2",
  "key20": "D6DiCMgon2gQbRz43FX4LSWv5XNL949eFEU8GnVxjQUsNro3iHEPofA1Z1fVkwjw4w7wSFpauxHKvEuprXBwQvk",
  "key21": "5mWMAxn6xVrfB4AN2HPv3Ny3LuE2FwzSwmyUS8BDKQJ87DB5ji5UU2S7KNSHV1WLj5gqDz9wX2EBauFbbxZJ9LiD",
  "key22": "RLhZZFYXE475oYD1LmTCUXTs7HD4YKeoTLvnYuAXkDJQwDAH5r9udS9ntVXEPWy9vuJC9mULp19RdweCFDaiY6c",
  "key23": "4ULZie9ZdoeY1daFTXLhoam6aUwFZM1FwQgsMZZzTj1oiop6e7FPszmc4xerYzcjsKjD8GRTQwWSX37Qttv46Vdg",
  "key24": "2ezYXAJhYGhy6gMaeMU2KYqCWV8C2sQArUWR5ozEmH9yeBUUA7sNKb8qooGiQhTaHetpVGpmHat4Z35k4rR8XyX5",
  "key25": "56nkZUmuuzy6e7AQYqirBgh71LDjBXdNUMa1FGeEBmjqikqxDN8GCMgvDYzr2EcZeMDKVDF7Tu8iDvGRWjRuzeSV",
  "key26": "Ab9pkbvCtEiKBQWy8YQDf6vCQ5iLzt3MH7w6NX2K1v5bwFKBnjje69DJAaCZoLZSFq42BYfDbxD5Nsvn1NPxFEp",
  "key27": "2hSdrZDCz7RYVtfcm8AKUeZPhqbHC98ZjM5yq4x9db6HAUE8Wgyf88T2oGHEtD22Miq8cyFFbaJvEtqaFcpLLcA6",
  "key28": "jbnEHxkH3TMBhLS6ymDG1DeYm4FMcvgMwgto6WfyUMyeUbTu5NnCTzAjinfeW6HiNjbcLRGWkBR95vGsU2iUJDi",
  "key29": "qPGUVJ6f89WcpeGx2xH1Tf9YLRTGm8sKcJJoAU4kb38TrhVoykL13oAsgPMhbHi1ACpvvcgX2JisFmhi7W9EpJX",
  "key30": "2CrqPBzeYMyxXm2aJbds77GgrZzcFVPgo5aozftzdTeqfUm5ktVUB4qRVqmJ84sHDVGrxePSP8oPumtWd3ejVfkN",
  "key31": "5XgsAjhDYk8zeF1Xc1dpvvUzE6KwxcfGQyDSVRwpWnsjekYWqbMgPPQeQYWiVsFhxTWJHDs31fWbakddLpxWrFfW",
  "key32": "2TVshHRTF4ZKvK5jnp7RQPzWWhrzqGwQnmievWXbcjAmuCKb1M3AErjyaRxKH4HLxRiBtNAA2foY35NAER74TYua",
  "key33": "3iu5KGzTKXLzCdQikCFnnYanqM2jMc8ihgHs84oFD285y57d3v8xjjYGSGZ7DqSJ4zeRyehbGLmk9K5zcnD3ECXB",
  "key34": "Zj29nsXe1kTxv58gYUcaYaYSJZZV8QAmTxEFBkqQLwNuBdjjqoujncJw567wBZNNZfSjRzbPJmjJKxbrxYiUw1E",
  "key35": "2wccNQ97P1EN2kXPCyVPSSYXHvzDfWRRrW33phVYEN8vxCr6MCettVCceo7EYqPhaaQQKPL5fiPYChfaowRWW4Rn",
  "key36": "5Y6zX7frJBU7mVSC3aqM7LudhRPVV9kPeiyYZrar5P8j8A7pyPCGuFKHDGbMbR7xfmM9pqgSs9UJVFPNuPbQQ11u",
  "key37": "2VVppbaZmdCPvUhH7Jb1uXT7TgHxNqRwrWDhAvbSnMDooz5JJdmYNU7AW9FEJ8QTPnp35QyRjD3dbhEsdrVL31k1",
  "key38": "4mnLZ6T2aswKx5ZKp6VGQya73R3ckhtuLrwuNwVwQCfgQtzbLEEwpx9nwoi7TsjwgnLt8qvGGXyo3E4TySNhEjN",
  "key39": "3v5TvmBWisVk5VPNqXmWCgkx73sHz1YUs7R45ft547M47MC3P1DDSmHmUvJinD4waTUXrtT5UyjS3PqmkeLJYYyW"
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
