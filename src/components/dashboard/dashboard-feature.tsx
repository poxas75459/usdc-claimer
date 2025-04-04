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
    "2EzY3ZijbWJjFUMnLKAvKExSBaCD5HRLbTvN3gfRjjPFx211z6rZM2aCF9G5UrRXLLr4ZAAcbfvTuD5Sc5t5iGow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YvhmJkCoC4aGLAzPobUZMwZ1DxNgm4eFLNv5UQtQ3vYedzmSUBkRxPj4mLwonegXWaKK1Hjg3Uyt3NWpQYedoUv",
  "key1": "3B8NZUfuFkdwyhSzp5daT6CGUWvxrJKGrJFjqGe7MVkTciuRa5qq1pxn8AnMN5bkeUjD616H93QgBMSo11eKNqh3",
  "key2": "3onBE3keDCekGoJGiGyxFoxQCu2BNLv87Dv9TfbsYNt54n1kamfpE5Svueabhzz8VGQWZo7NVws8CouEM6xk8R66",
  "key3": "5kNjN8FMWar3pLxj2zm2jyo4HAKev2Xk8sFa1q2meFoq42V47ohtktkS8dATrjxz8PreTecbpaD9YaKRAbKgRHzE",
  "key4": "4uCSyhmNXLjoywzKbx3BrrwX1QauiW6SdDJcumHWnPXnXxoSyhg9pWq8Cb3AmynFsGZ7cUM5fxqEHD7RJ93LtF4S",
  "key5": "5dog1Jzu3TeojVv4yAbW1oCExAUPAwKaYehc3jH2ChXpXHsx7qnfLCRRH2sgvKcsQjvK7pXgFmH1B9tDwM1Mcbhs",
  "key6": "3rAT2h2ChdjPxNr7QsCVKzpCJsVUyzf1TiNUNLnUhXmB7WeXGcH7QX59KZZBAcZ2iddqeG8cKMoS5Yo9EfKH7rJ8",
  "key7": "4YXYAaQCJM6vQHNcwPdVShFiq85wK5MHfQFGgEuH5LaKPXxmFBuwUKrbj6ZpRgKv841c29CxwDmzx9v2sbP9iU5W",
  "key8": "4fEP1WLvkfA8KtGcFcw6JJfDYHAF6cvJ9Lhx2DXkoHZceZnaaTdrrukF96qmpz8aDBFHwcnVbxjMxKAhGCi47TJq",
  "key9": "2DubyCTax9QmqLnmdnbp1xxskMS42QPMHLaovW7esFaPERiqbzaSNvr8XqENDcYDLrrZs1cNvHQ68syzunHQyL5e",
  "key10": "5KRQuYSNaodiDq3nqJT7ByPWVXoJ2F2zU2b6y3SHBufvugRkfBYzWauQVbHamTQhPuhksaPZs2UNCGenU62XKdJk",
  "key11": "5SpZFKvTj6RZ4drwQh6iUecnB1CMXmGogFUWwhBf9Pbdvpo8M4QeXFptDR8MX8hViNTF3Z9zCkKYSLj2unyWfaS5",
  "key12": "3aXQa4zrR81JakjrRYVwCcFXGJkvRpAt4dW57McjfvMapLc81Vg5fCqNFWfKkH3h7bqqhX3TqTvrqJV7fbbVwgD2",
  "key13": "fCvj5thQoGJyFj8hc47H4oNHRwDqawRmzNR1U7eRoyXgFPTjCg3uLSL1e6ToSnudxurZkY5pmvTn6p6pUVrTPD7",
  "key14": "34gpmKNemw9CYL7yyquHPz7yboJCVdSFYRWcMkEz3e9TPKgSkGZWcWrR7hz7H72CxiCv7XSqHLqT5i92dqnShczm",
  "key15": "bV3hTTF9neZLykSTns48ZHocrphMjHN152Mx4LFBoJYKce2FPSH3NNZ18thCoeJ1akLTe5g6mLgzFhLFz8pHGaD",
  "key16": "5jTEebQF7y384ezxFhQvYMn5HVDLfPdDe8UXs5ffCk8yAjDVgVhzwweesREgLayd7KAsUYa43Qvtxqh6Rzvw3FhE",
  "key17": "53a89PhSQ3ygEYcurZAY6qjYYrdn5MU4uhSTAf86dwLwbgVJLHtsgMni2kmAPMn76imjAbLtoiqSaH3H24uWKAJn",
  "key18": "3vAeMieZr1S4fkNQMwsmzXQKCRuVchdVJVh9BuBH2CtEm9AnGJeVny8mxEbyeZSsrA1WgHYv3WqCiyb8XiVuFEqJ",
  "key19": "61ny5K2ATek2Tz9NWrLq5bD1TDHeaD5JKyzuBuoY59FGmayJeKPSSRypUYTrXzK6XunaNRpam2dKuFBzTHBRXp6t",
  "key20": "3Bz8Roj5JGZ9Tva9vnYVyH3jQW63ZJgJXGyz1oY5R63QzwUexxRk2biXFuUEa5etq2M8V5z5dQEdFTbANCpCgLrB",
  "key21": "44Jkz3Uv9TYc7MDMDAKsX3gHzsAXUR2ShWQ7kiEpr9KQsiiRvjAtbshyErEajU71nVsGrNUQwW7teLAN4TFezBBc",
  "key22": "3M1eGjFBGTQ1ovjxmik7yPBdqnqVFPZvsJiESJKQcr2dMBytUycBZCsvCNKDsA7jc8ooieei4DBiXRzcVRAPExAt",
  "key23": "3K3Bk4TUK9H92q4nGY8qzh6XyS9D3t4gZSLLHVbP3T6LXw96UnUdxWcFPu823fDoWAwht7yEEarfCrvhSo4nkgrz",
  "key24": "2NsD7r9Mpk8PDdqx3N9UgKsEsJwhnPxPoa6KLz4H5bqmtqzJcj6WwZ26ZyVTiPwCnP4SRwuUSyph6bjCJ2AdCaJQ",
  "key25": "5BEAHcMzy313WbU7f1rNRHRokYuEpPd1CkR6T3U3cpKVBNhRA5GFkdxDemPjB6PhUqSFc1wHoPFQC6fp1oJvYEbD",
  "key26": "3BSDj9hVwqwJovbJw3bhhpsS4QsaffydJxNafxnRunQMGyTYEmak3EPSpKdvSUFuqZAvWRj224Kwvup5NZqLwFSq",
  "key27": "4YSpkwQ1sN5TnVRjqT2iNPMoGjxze9ffNSJtVrVybueyBLmWWBUAZyo9muFFHhwMukhJWSPj8vSWpUiMxGBwagXS",
  "key28": "2TRCHhMa9Kww9VTxvceb77xvFk631woJCvRGCcRcVP8ixF3pWXUnt3LrRLU3k6fiTtGQeaBHrqHYkwsUKgZ5Ajsw",
  "key29": "4LfmoVMBPGKxvA7JZu8pr1NCy88W6eq86VxsQXG7s6P95q1qsdh2q1jZrh9WkhigsmeJCguZNxqoV2ykCdN38Vuw"
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
