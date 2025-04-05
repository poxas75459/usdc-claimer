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
    "vZ42oyYGFLPZ8FwDZPpF9YmHjo6k9BDYJSQWRZHX1dxetyf52vg99BAsPe5HwmboGQqiTrFouQJggszQKHUxg9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RdvbjHQpRhvXvgtxzSZA81XbLuonbwwBsB1NKGYtWkBmaFDw1i8U6wZTdNLUkz6on2sTnG1HvxWzY9iCkg2L3uU",
  "key1": "24xd5Hg8vfaq88CtxvQn5Xo2hAUWGdFpUtjh1hTmv9Cb96xY93QDcgwybqdiU4GiWBWqMtUwyb5BpJP9TXWK5ckL",
  "key2": "sNKV8A6RT189wJdo7S5gLZNamqN2FG6VG2B3QgiMDs3kbEkPRjfNBoMmCqYsd7wBiPHMArtemgFduF8b7zLrfJm",
  "key3": "7hzZicTvvNHX9JZRkqUcZoE7am4X16jTGv3uvzFeGwsvaH9Qu25x7eHBb46EZjj3UrbdVwSpdaZwL9KMskBGCKr",
  "key4": "Sq3se2QwndB3hsq7JnRqRppMcdQmrCgbq7KzH6YrfAPePqogj98FAfNqHC3WcXtPu8kVigjGPbzkFVnk8vqBrwa",
  "key5": "2bE8sq3nEYEeoLzHe5U2ybK53qHgjn92myhChJq9ueM4bHWvjFxsizst5BMy6e2Pz426fNteQDqwiMDj3rMkoENC",
  "key6": "3PWWxgMYiyNaSghPzJirEUMhVGJfSz5SVppiXDE91fvGuzee3aEsC2wgp21SxxQB349qr6AK9PzEWSupYJbTczQf",
  "key7": "2zBdrtz2fDryXaEic72W4ZmErScc6FaFqSRKXRXemSqkxy4bHJ3AzAy3TboyNooJtvytren36ABsWZSfddXS6XFQ",
  "key8": "2dwh1hJjnz93AVmAytiLDFTehqXiQ3rswGiRqjkZM3x85SVU8YYkyWVq3gcR32n9pP8GK2p2a8jbcuNasJ3Zdn9p",
  "key9": "3VGMZpPg2E8Eek1DMUj9FjrNYCKKyTwdf2GQBTvJnzQ3CfuWTzMFbogSdL82j2DqKWSt3sSDDtjNtj6pMppRExjY",
  "key10": "4uieFVDd2rVuFp11sHFJyLsaNdjDmEezorXMUDBNpFGu9cv5HkrnBFVYmDnNXRLnLqQPnNFVLT8p9S7BKH4KtQsK",
  "key11": "hTnepApLeiP2aZCCdGspPPMbwigLQTvg95mrWpzJtFS8QJH4g7PkSQxXms1oLap5QDp8n8E6CBKTTtBLnmpmJYT",
  "key12": "YbNWgZYaQcb4PsRqeNd1SXAB26zddu8KatWxGfN9VBJZmaR1mA38YcRcSgCX5ikBDsQcX2biUHojXy273AnP3Gi",
  "key13": "5TTDGqvJyHUU1TvSWWNQQzfEdvrBqRTNYbvHwwtNAZaZj2qSm6CN9R8kVN5v8Zr76ohmX1JJZ2vcbBzHayhVCkQ",
  "key14": "2Nzd2uWce7Bm1oNDPWb9gwDMBkV167fnDYLcgadNTen3moNe3yQciu4rchy2TY54xngccbTbELh2wwhWcC4rDVkV",
  "key15": "43WXuqLTjZFnbWunycYmQU3fCsXD2H8DxcMgx3SciUe4VXEg8cKXqdrKFiXt5sdwKpFNb6mw6W6DwPH9uRJRoZKa",
  "key16": "4D4FfkmFdXMKDEfTr1Au7MUB1a2jw4agkKNuQBxgexjmHzSJM9gCvRUAshLYMsJeGPdZ5Xa2D1XDZiSojii8ihnb",
  "key17": "3cZDfxe3Mt6CqdH4tkPVDLTK1GSGQ4TwCMxf5yyi7m13Sr4mgzivMNmszLhy5wMPna1hMV28veBcGu7Ckpq5i76C",
  "key18": "32kiffpDpoihteEzax4G9zkrS3enTtpauxsFfWSbKqdJMQnwKdQL5HgUXkuyniZrVH5EjZ9caYyv3VNB5MKcxpz3",
  "key19": "4ZsyQJn41eyLVzyv1perTG5rNph237WSxVoEm68A4eBivsFi6i2ajFyoArZVvcJKjUw7pFr4NXbVG5ttJMco4YQH",
  "key20": "ihsB9E6jGypDrYgydZtCDjLWB33D2QAmuxbGBj261EPFhjaWCqmBGTTziEmsnjgKVzQ4UuhRNgwHLVXEoEceevn",
  "key21": "2CsbNa3HuVxodxkN5LSNfPraefqCXvYykvXyMHyAe27kPf6cV7XnqTP3ogYm6kD5WEkZ2a9sAtrsyKhtUwPpQNZN",
  "key22": "41rnPvtZKzfPdeRXUwSrCtTTBqHZrTAJS1cXKn1w9SMM6xNYE9nYoJJ1wyYud8NPwofanNY82QuTZste88ggdKVh",
  "key23": "2ZZ5FsaiNy4CEUe2Y7HDpkHSK54JHScoWkjHW7i2fHFV3Qs1EUGgDYeGUyxLhHRqx7xJ3MdJcWDq7f4eH3hTHaP",
  "key24": "36EyQXnMSFXfx6ZYhprzNThKwVe9HgNZSMevouStAH99Q5a4mpY8j9MG83yn8YbPTQzW78D3zb83g35gVGeF6mib",
  "key25": "4Yj9S3CcAUsaFVePBjrbhpmTZc92J4JD2US2E7Vg1iGkL6StEiPFgZmak3ZnrVq8qJ4bPw64LEU9a7d3YVZYbAxX",
  "key26": "3scekxivipMxg6heTc1sS7yiMmZ8nWnfbH8YXs2GgUiQSLdMKLsyEJ6g5xYQgU3TYRSQNubMve47c6YXcSFJ3AZc",
  "key27": "hfELNgnKKnApLAEoWP4h6758F4m1bV7onVZ2qteLXY9R5QYN5Cx2ycEu3Y6APARP1ekhCzKwTPubCMhJkZHL8mK",
  "key28": "4vWwCvKqQPV5zZxLSZDJjsD9wJPGjuduXFGYbeVb4PhBm8NEEHEeMdQdyezmgM7cYPb1w1XKj3WYASHkYJp8Nq1T",
  "key29": "4bfrfcreRPnKZV4EWR2ZxoS9tEQDwXUsi3fqtGNFsnL4qz4jrskWDYYgHZK49ZbwG4top3BUt1vsVNRT4Do5ghbm",
  "key30": "3cy6nhjb5hTg7DRR8uLJncCtGng9MgmTqunHNBxV4gVRn2JC9xLyBhdaX8AVPwnWXHytwu7kJ6CeUBGS32DxF36C",
  "key31": "YBxbgcJjPCFB4dtiZjxAtdTUiM5Y7NAdj8yiDU1RVmZ7jCEiG7mTztzXQdEhMYkR2Tq8Gg6QHUg5dP8RXSL5KVG",
  "key32": "4y9efaw8AY2HjThPPoLviz5o5bQ2GbaFWRG5jmq6tRNwiecHZmNga1q3zagDDpGcTiEQ6vuHsrRMhz2nrLsmH8rS",
  "key33": "3cFRZhXJV9oLrceeo2ekrmhri3tqXvUwVF7mptcarfRKNwZMCvHUqPxTsQ8rYzKahsuZYUU92EpiqkdqF2f3WL6r",
  "key34": "44tn1QHVkJt9CGuLwZSYNkiXBfmZw2P9VAouV1eqTAXdWtaCzc7q4Jv2ebfbni5pMmZ21kafM8WaL6TjBZZu9U6H",
  "key35": "5nTvNBehmJGqZhXpi1hMLjb57xCCNCLFYiWpfkh6xfyQCDCjZa1ntMRFxakbAYdDpq45kG1ofMcFGdubAwCJf8X8",
  "key36": "4KMNoWiv8r9WwM14XAbPQjYxQTDr8ruSDNQPhiKasLQzRXTE6pLu3W8KTm1jXPzvppee79tNd8Z1LBzYtTytMkmn",
  "key37": "2M37TJd3BgVLhq7yfUq4fTsB6dRvVQKhqfWxsQ9f4pu94myUiHcAEDQ4Z51wGmHCe6J9v1vNRuHQYUqrJef5B2tw",
  "key38": "5A6MM46iN6mm3A5n1KAt9x4KCpVMUpVCvN8Xn8ec7RV22PsWzRYaCL8TM7rG93kFGndFXrY6H27mPxqk4aSTMVqS",
  "key39": "59J9Z74cMJpKrKuLRUEUqxmsTcW8FMiePcUrGRVJAyDhEBSHsTqrbFWV8SDhgFwa3xCKqxCTt3NN3vEdo13RY1xc",
  "key40": "3shQRgV3Stz6gcgSPeZPT6sA4KzhChgaTpuGqR4MWyKFHMASLuwDmKf6a66ziA8N2boExXKuh7iwpfWxgPF8sDBv",
  "key41": "4Nk45HFc63QhsfCMQgDwKr74Wyj4MDXsuR24tmrBgNTQybxWXpFmA2v9J9K33DXX1TYE4kQpimhaeQKErtwM7fhv",
  "key42": "4NeCy1Q7R583MDf8WAL71VpX3KHbBSfZCv4sbVwZJnSSaf1THq2CN9iGpZbygdPXqRH1URjrju9ThiExcRK8VPM8",
  "key43": "46E6hHVouWr6z1kV2gaKEzLti6ZqT6EtvP1rXzhMzkfuedeuedTsuFPWEHWjuN3ecEQdkZhjDxwdgBCuQCwPyiFp",
  "key44": "2gvyMSgagMcjTP2aW4P1Tyq4FFjuTqSeXwQT7HH3cREqbLAuUjfP68ii8cBhkaM2nTyZnZ1dobHLtKY7x3R1qsDL",
  "key45": "5LLq6aaMQY8Y9LKFnCqx24L9rV97dckcJKL2xiJudVG6sM7mkcQ2kD2pUUKan5MLYQWkM27NbGnXtkjc6msbbtTX",
  "key46": "5TpaAi6fh34MVH1dpm8qK1P6fSvmUgo2pPKgohNkDLrAaHLPnmUq54ov1pEEMSbtm7u8Nei5BP6WeY1y8B6xm3ta",
  "key47": "vB6EJjBLoj5DXQTRCPA3zoDEUjWoRqDx4ija1fthPL1PQ5WWPYcDQv3Suisrz6QKnG1yfDm3ETENjP8beHHk9UM",
  "key48": "2vzojRaVdUsjYSeupVX2xVsV4QMsE6nbJaAkBn3fkcwgjfYRnqMh11XjVX2Ykr2EMRC6U7NnXsQ3DRw4B8xzAYeu"
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
