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
    "4NG75Jn6uYdrRSsU1A7YxnLJ4pYNnYgXi6XPxHudA5q1og8jKeKimYv9BuMXNEcPGN1VFp9rwNFGnYsgM5L3uh32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fg84AhZkYkGPvaJy66kqpRWY5cLBRViJLU7si35JJsGELJ7mLM3QkAo1xk7zRYzkaWj2jDryZSoNbeCLY5C38Q",
  "key1": "3NdgHZGDHXqJqFquFAAUuT1ZeV7LkWYhNvdinH6KLYUXnvGLWoebEp77snKmDNRLUiaE3HViLfycaXS6YM6WyWGS",
  "key2": "2UrA13PLgYcbu4HeN2Ai1tZiCykKVeKSKRPTL48vL3bCTTJMd9Y4VTJ1Bf1svRwBYNhDboYC1uyR9YJtjed111rZ",
  "key3": "4ZAhtGeRqC3SPEuh5SNrc5rvrKbAYr9f1v75bYp6TZuyX6C86ukL6PkB785wzPhQETqhKi3xp9H7A9NsdbEyX85q",
  "key4": "2jrNURwgCrYbZUdKutsBrARyYUDondGquY8npXvTv7dV2iVfbsM6b1DE6eLbEV9Q2C9FEZ3eUMXnV8aRYnRnRUFw",
  "key5": "4fTcst8WGRbR6r9hhRBixsM3mpQCYmTMMGLGGNCAegspMy4Ets5brBgCoPRpQ6jfVf3K241mtUr2jcw7mXrcg5XH",
  "key6": "LESzyp8FQjHMCGh41wnXPvU86ozH83JnH7EquX2gy98bfRLXtZ2omaP4MoVTDvq6Zp8MGk7X45MhCyYoiSiwNp7",
  "key7": "4zFTXKoQS546zFqG2RaH3FcU992rhnUJuEti7cNCWhPvboWKjUHaAgs2pBayKoFFavgxL9ek2otBsvafX8YCjU6s",
  "key8": "7MBbDfoyWPny5iQubzURz7ziYjkU5BFbzPHZq8NxBRXA68bj3uQJLtJzrMWLHri8BES1tmmS8La3rZqsCf7jRgT",
  "key9": "4rGjFtXVC84r8j4sGQDtr3UFn9sXvCUaijLoezGLyJB1iCZx7dnAfqTB1Rc3e9rRPGFAnpURPfwQVENvA8meapGk",
  "key10": "2KyC7FVtfhmTvazim2hYi6rLNyuMeXo7epxBVWNjeSUob7tvXnuAZmw9PkhBnRvFQZmzqvGHNe8o5gjuHF9nGwRr",
  "key11": "4WcNH6WcnKDG9dvh7MP7URVdZhBkQ7rYZknRpimLg1uJji9wY5foFAKBt3Yx5mVbgo9afGZfG4fUJpstyNSXrBVP",
  "key12": "66fLw1vRwg4j1afKVowQWPbHx8yCbA4d79G4915aJFH8RgjJ8CS7p8vdFQmViTMKJJ6GHjiNfagZKKfyppyz8oDK",
  "key13": "4dFux9ndHU7kbFmg6gWNcy7ZJFMFk4wQrHpE17UaazFZ7cCTfRKAsTcpVqoHLRGUskaQjSbQR1oaQZMkAujLnzoW",
  "key14": "3PtxTii1UZCf9QKZZVb8fyzG7waNmmx4gubkFhk1mFx7okSdtBkzqqDhnN2AzfoPFCjkBbdnAtkNv528fiyJfoHD",
  "key15": "3sr7jKid9jnGCGgHQoXpQECxUHeGoPHsCrJuaU3tkEWyg67v92qxM5BwrQ9ceg781q43HRci63pCiAtRtMCWxmWz",
  "key16": "65XWcpn2TM1UqN8pBYQw61QtWwS5BosK4wi2AX5vphFApbSVjceYjdKjnBRJgAe76Mf69cqxnLD8ihSsCTTJJ7a1",
  "key17": "SBcQfouZbuJwf88tkXGGuHnAY7THFd57mDgJgKw4a9CW8JCNkEYAvoUXSjAPwAtUBk8KiPEpD2WMMN9YTiRAmxB",
  "key18": "RADYbUsawr3CorXdrCC8hsvaKi26gU6ZuP3cXX3vGtgrEzFQydwTskG1B5nfSDkDSH9bjV8yxHHAFV8sqjU884o",
  "key19": "43XRMKvBbMXec8squ9ekuC2gt9Y3yX8QYQCWfvkpPEvCwMBwTbBYswuj7N5L3rPeMKAiZB6NpjtfiaauwzBDK1T9",
  "key20": "4CcgGyXiJsFCEGSGeLbKaYxK8oAJsMxHWpEzU1i2pukFTqc7iHrowcvtiM6AobB58dQEq11aVE8HMWp9hVnQeP31",
  "key21": "ctgVMygehLTRNdkY42k79JqypF9xScmgcyxqt77PzgG9kYrQ3vsMwqCUcxMU8y8uAGr6ZWjujZJeM8Vm6ZeU7hj",
  "key22": "2BrqowRvpZAXUC2zYnYiq4ZGdjJhQM2pVfqXz8K2iuUKrapFKHW6vrQaYsHGdw8H22KT7U8y3jxdKkjY9TbZFf8k",
  "key23": "87Sygzy2vkcQS6dF77sHKC5hhJaqV8sT56CmovmyZdFDhxZCXfp5nQzE8NsrpNNiZFQ8do5tBKTLedR4ZatNsyj",
  "key24": "4hsyFxFmYX1xUXr4AQKkQqExqiT2e9rqYd3bMgwxmL9JYWD5CLNQ4LGhMjbQLGvAXHr2ryqYKToYaeAsd4uLo3Au",
  "key25": "5yQDK7hfDbWW8PRi1hcZHN2eEGCc6zGAHSZ96ZCMCN6ivoDJpEvynZkt3hozw8FUYGiXAsinwJkEaMi3dxUpZLqN",
  "key26": "4gp4QLVvRE5uG5XHvLw6JeeRzfDSUS3WZpRpxMZLNqWcKBWmxycqFUgFbkn38z1GbhGuGdQHopyGUjzPA65Zrjje",
  "key27": "3JBC2xgXea5MoaykC9LfaoUbDCSSWPnoNH6ErB5dRvgjPZeKUK96iMGsXEU48C1a44jnjCp5jaPC89X8rEsx6Atx",
  "key28": "5MLjs4EoYjgXd2Crj5hMZ8ox1EcqnywEdoEihbNBWuiTsNpUYpeoijHrvCHe4MzR2DgKP2QbgWGoS59uonStgoJw",
  "key29": "5AjpHnNuXR87Ey1TJ6DvZdfcswHGuPmZC6fQyD2e2FBRBFwd8JyBkvnpZfgW6GfY7Lup7oF1j5KdALBnhD225G3G",
  "key30": "44rgadHmMTWNbmk5CHUxMDQgZNxwKBSHyEXbz3vZupmxLmY6JQXtsDxuBkR2uQMB6cAPTxU6fowDk49hyR86UbBD",
  "key31": "3FQnyr1R5L9SVXxWPU3MbDyFAu3a3UDGfSnvytW5K6MR3EhVKo5EPtjW3y3MX9QKxfmpyNwBMT4p2vmEmYZZnzXM",
  "key32": "61GN62ihybm1bjAXxC88mbwChgVK7Z6XvpBaDisj5MQdEkHz1VuAscuyhiNPjECFCUUbAHM3AHtX2PPqSKQwqg6",
  "key33": "4Pr14uvFEaJeKKcgNXKBwGpq7Urd2vX3nMQ3PR3YPE67P4dCdWdR4gorWxT6Wefrbytjtwj4RjcSDnxrAp1hvVXf",
  "key34": "3ygA585eVbtRHD1HH2w5W6GrFPhhp9NAXBMsGii1LyMeUheLPFRktGqDw3sHR7EsET35LgsaxSBYJ6tdoHXKVSHQ",
  "key35": "4RumcfyQpcxFk7suMYimM56JVcFau6ra2rbTZ8yjef9cipEsDnjmhZxv9abpPpBD4QNhSMqULE3ZF815tTekXTfz",
  "key36": "4ZSPwUss28Z11Y9zQBzmx29GDrLMGCYscLMLTz5HiKppz9z9bCmf1gqxDhKiVJEJuZZnS7yeYHCHWzo7sKK1UXCf",
  "key37": "2vdfbxp6wHKCCaMtN8cuPrL53iszCnG8TXQnpH78UwNYR3TqA241p5455ZTKqoc8ZahHbUXxL2TBKJFXjmVaxg7i"
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
