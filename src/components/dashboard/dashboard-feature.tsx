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
    "3MiTHwwi1gSTUqVNbuishq2rzcZFp68BvteKqsEeK11WYsFLgrr7ifuQyxubEKAeMjDSVjnZVcTYXAGnzrjHb3ig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61CY4bwiUuKWUUzWNUrAnztGbp7fctGyvjkrNyCYVjVRzTUkrDED2KAP3D6wTFNSoBfz1cJDLsYY61tNYoy26meB",
  "key1": "3eiCz3i7Az2ecqwxL9eUF8mKb6UniTDMf3ATP9FFFp5yvDjteVDcc7xE8x56Y8W3RHbDsvEkDpYoWoXfGDbVm5dv",
  "key2": "4Hq81fMmrr4yRzW1JVH4szp8X1n77zW8wSyGYfiDJfRWE6KjaA6vgqfpAboQ1D9boeXq9JxHbnPL3opb3oBSgCwP",
  "key3": "4FtidM4HzeAGbXsWkwCEeUB7gAoDhzwrx7sU2dEssoCbs4mVxM8L63QKogMHMbHhE8b237DF93LcDNFC1oZ7BLCc",
  "key4": "5BotzoBg7eQrMQxxGEfUMdmRcZKb1zDjmWkpb21FAHHnKu7jUp8zH3SNbYkz8T5aX7n8rf8LxzQRiNWbDoNHNpTn",
  "key5": "64M1Bohd8jwfvTUivB7fL7Eb8wc1kXULjFXM5haVkmrxx3vN2PftxRNW5k32qGqYKwRHyii4TDwbDcBDnhcJSj3r",
  "key6": "4eywm7F32J8M38wUr9vZaMfQVZzY1UEen2dMWwTyUFVrMowhcgqiDQ1Q9swdfaTeWUAYiXp2tdpChvrz1Doh7PRB",
  "key7": "923kgsk8KQbiuzQrRRAtxmmaWxCfCxTWNgEWvbBGNfUakD4xXvjoY9Cx7eHodTESy5fnZM1XS82u2969eAhxezh",
  "key8": "y3LjkpW9VoqyKzgExAB2ZAsGLo3J1iqyy9pMq4XQUVXdaMG289qM82wHxS7wGquCTndYk2XUtoemw3TFrzaqmUT",
  "key9": "3GMWBigzQVe9BsbsoANvCuRvhPA1hxjS28o9zbrZuwVsdZTUuZSZhbgehsxuwgNRo88uWRYPqL1doRLraJqZaLZh",
  "key10": "qXSx8FeHXKXcgSSmyuWo6i9TvfMeiLT2Ybzrx6rHV4MLai8gVKQpNvUGRjPe7jvVUavdDmoGQUs9NjwEPiEQbFA",
  "key11": "5C8JcENdyhYE2SupN8tsf2Shkkn32ZUJ9s9tohZ7S5u7Jks6PtD7qUqyZrvzeX5amkSb3BuznQpDYnMbAoGB27kh",
  "key12": "yosWT7ChazHVhRw2WHJZScSCDXEdPHuz6T3LHJLFgYcoGAXm8GDJQ2XYtmumvokatsGgEnesWrmiE6pZnngjX1p",
  "key13": "4Koq2fdWUTN34NsnZywPpXjJf3HsiaNvzvyXAzWFEsELv1rtmVopzzQYwj1FrtZoFbonBLrqPtUiAPjhTV21QFmZ",
  "key14": "5DAhNLFQiM8UsMKDeAgnmZc1t1b7nbe3K3oqp3FMV8PiXHZikkafpAEw2BBZFHhWXEzeJbqAPeqWF6VTBMpqmsgi",
  "key15": "3RrSfrJjVNqbi6aR1URk9X5RchyTLfns7vskQu4F6ARjBPi1xrRoCvCZPEcYVGSvTgPe4r3GA7VveicVBjFKSm8",
  "key16": "3yjT8y4FjygfxrtjPfWzwnatSoArnUyse3h7hynKHUZka2FrAjm7AG2rBm86Vxjm4gsEWVPcc1d663Qb3sLMZ5vu",
  "key17": "iUdcg6Br2fC1wJZUoPcFfWGajaM1NBPSvk6bAfbqJ1y6zQBMTbLxXGE4RW3rD4uKRiGWsyYNJtCVVJdEUrG6oUu",
  "key18": "4zJSH2WaAE1V4wNZ5LM6qVx9ZEnx7ZW65TrVBpRFtWTNaySrJw7HsDMmPrLjEFfvtrNWdc86sGt8qM5KSTA3FkBW",
  "key19": "4t6FuPJGHNjTSoUjUdEh9TZDmBKdaroWZe1rrAcVT3vj6uDEbHRnYxprF6MbG5A3wBGkZyxfzaRJeqwGJYXKq6bD",
  "key20": "2f4GJQJKhxBRy1tvrDNrt7sdPcu145KtdeGi6s8zXZ3jEBJU2JSbJgCKiZHkk1oeHdVjdV6dw44hoFumJnf92cwN",
  "key21": "5rtTc7vFpUEZ8zhxuPrtaxoQN3q3yT4p49pkrxk2tC7Mr3YrU4nwxjVJomjD7W1kFGGgGDFYBfrvA9HGGMXrj6jN",
  "key22": "5VitAMNHQMGyXn7wD9tbz2bbY9ATpU6UdDDuBPx9zFXBLfeCrn4VK3gRUMVjL196BgStadez3HpVQ7Af7xuLiBbk",
  "key23": "61SqVCkpMdzFjxoG7e5ZSXwdX5GSrziP1VWEcktUCmKntZYkcxRv7zRtCG71N9C7mAmvMTS3knMUrXMUXzBhmw4o",
  "key24": "224C5JZd7obFHVEs5gYHpfncz8JhKVdQGZo5gUDuHsPuL5MdZBEQgwGpeyGAMebvNSCvRdyUCByP9tEUXn9u4WiE",
  "key25": "5uMJdhiBgWHshTcvrmdbrHfFNnkakuAZyHtNdgTi1BhgkNtBmGfjN1zBMrq55q4SuiNHW6nMCsT88X9DW9QVmXMK",
  "key26": "2HRSQezrBuUvt21TT4HuEnHXp6kWFJdcn9ocBSunPRntLVDyE6QgYNdiB34JnvAUfBffeA4KrrpdLTJeNtDN2mfD",
  "key27": "5DBxgJBaU9BMeNL7CxSia3jygHDMf9C3cqZfptQxLYuAVQx98FNUTjZkGiqm9jPdKKM9jJrdTnEmaCzXUsdAEVM8",
  "key28": "2WbBMFWtuoTa7bHhnj6uFx9R87UEttqbgzzJQhQP9VkbkJCaLLy7wjCGfwxMdZfeE3yNWcTYpUHJV3q8m9aGASE5",
  "key29": "4dvvRbAZxq7oBFavbkzp5JWbh6nZkw72ZEsM6z8VY2M4gcsCAcZqHH6DzNQNVEjTbfqRjwP5nFjovveYzsEgpNL1",
  "key30": "cr553QCf8WPE2TixHYFxPo9BZmfB9CJK2eX1Pw5w3nu9rvWofGroT28jnmKEiW3k7TPpjBrWNxy5pqwTUUbb9K8",
  "key31": "3cx8qAk6BWyyd2LRDCnVyDnrmJNS1ytnBSYQ7rfTMjR1cUPekNbCYqqtRDESbqk2kHnGt93ftJtdEvYB2vyq85wd",
  "key32": "4dACdcAqPtW3AcYMkgF1yEDrajdbKEgm7xC9Z8YXt8uHtQ3y9LumWpJq3YbXnJ5YF32PGgY3doEDxjDeVZJa3sKH",
  "key33": "2JrEoKe2teG49gKbahwzTQv3StnNMPKfXet1NhHk7jnuyb3VqxNqTgKaUw6WTm6jxk42iF5ExEJP2XxrG3YNac4o",
  "key34": "25QD7JoFJafnaV5M4pVd4sdQmVSxcLDSwm4d3Yo2Lhsas4ri4eaXYGnuChaKCUFAHgtwTKxEcep8mzxbH7Wgd9KZ",
  "key35": "dmsW1b6upcen6hnwoYPvtizcck64y4HAPe5uw78uevynTCBqFFTAS8hLrVszPsKU1PFcgZQ4Dzp8hR3PdNSfS8q"
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
