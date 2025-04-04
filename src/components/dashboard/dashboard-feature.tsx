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
    "59HvamMszfnQAnKm7rMC9FmcD5VvGFR3ETZRDveLL22dk9aaYnZXn1huD5JahCkaDdtN2DHVr4efVARbMUkn4aeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qCRfPv6LFgR7HtXcgdKuKjD4ytdQNtGHD1WCy8D4zdLvQoskLVMPRK1AEgDoEBp9qWJVL4asskwfDNSmvvM3ccz",
  "key1": "FsTqNnr5UBL21LEZwCppgKDi5UTps1DftcfNsQizSZ9dFthyZ9Fiy5Zz6HH29DNP5XFzu7UpRFnD8mpYhABGPjp",
  "key2": "486rKrGGqGQkrAxcrdh6U2nMRXxvwvBGjpke52RidpCjcBodEek8BdGFMxQMNAeD3yhSiPL5iQeEcgRpd1PKFN5V",
  "key3": "5eFwXSzQH6NGAQmVkKpf35G85k2rpjTCqHhTBUP4CGq9WTa1kyG7686hHiRyRv777J12a8g1UuSyntrAtsmR1YY4",
  "key4": "3coevivweBdRPYUzyQmfFoeAiAWE7uLszuhFBJHMS8YZAs67WTdiKWaRmW7vyYhzoxjH8HzPM6z58UsuyioVwpv3",
  "key5": "65m9vFpsnYKCmhoza9Qc3RBC5qeHcUWq33vXMUhDYtC3ZUY5rNdjTNcv1NGWGxUpzyepJfByqXkvFrzb29JL7wwk",
  "key6": "2UMFES79qszfFEB24RCKQfXo5azCjAh8eJcKeYMN1RULWNzmJmxS2BNuoWkEW39YRTMzCVeGueS9nfwKXeaPJFQr",
  "key7": "2T2PsPxF2KyRuKsVYx3XYMJYK25yBqkoCbtsP6hoszy7Jgk27CCbt7tnTxH8zCvGjmpMyMaG4TstE9RipcT8AMBB",
  "key8": "3v4tsBfzujSAeGYhzRbo2ZJUKva619HVFmnS7rQ2SRCQxXvjx7NYUdRuiuX3KoZKmb4MiEoasqwx5M4P9ZMnH7E2",
  "key9": "4K8ki7YYiLh7EhoWo62DFkF5hKsy9Cw4334SHMWqTNyFjn66zqNh72nTzLKVzWaoncVMr7uzX3bMj33idBxntshA",
  "key10": "5Np3NUxFyUMJY8HxJY7pSRnZGgWA5kvehwF3R5DjizZuGQXYuDUVXjonayMKQ9oaNL1Y31Yg987bceuTMNzuB3fq",
  "key11": "4fDnhkZdwnZLLiv8hqvwEMw7GqK5ahWbB9sEAD8aZ3TYuM2vT9fCaKd9hA4mJ667jcYnhbNwcHAe8T4BZFqKLh8e",
  "key12": "5iGHrtvfaNWWoCJp1E5NFQtVm6ob5WRjFvwdWm68CoHEV3kWkTeD1oKSZ9GGVUGMs1asyQ51USeShcUfU7416zKa",
  "key13": "3mCY7FkDmo7ZiZ1A1Tdwv9V8Dg54M4QhDzysQ6xXHqrzHnUFW38LkEqE5U96mAPMCakSmzheVJrzw8SBKQE95Y9e",
  "key14": "5xHjPViiHfWrn7bNvKqqXmfuzAFYMr5qgE5pz7ksdtXQKUF3pTZXHcofih2X2TQJ47Jyiq7BKFPFztaNcQpNC2EH",
  "key15": "47x3bB1eM5KD9CReHgqafRuKbfvZxpDhLHRYGsWYBY8o85oFPUQsD89MrXdFTViMNbUvNtNafrL8ARYpDmiehJ3r",
  "key16": "4SD3ku88aPY22wvMbYskokTnRemSAP4fb9Tj7KkRNXVDHa6kkgodL519WxW7AizPhmfE1eW6zxEt8E4ietg6sjUK",
  "key17": "GNFF9N27vvnuKyNWVhU971VzXEuSSGadfhxUVqivxzgFPxy6cKbjHnjWrFEZQGZcWh5yWFByB5KT3xeKsumbRJz",
  "key18": "4891NcHqTsj4tWXt3id5fp9Ma6rqBcDuaVZEJRXCL3nyFWuPQvd5T5B8FJYyj16zXjKMJ8JAWGA58mcX37V1hgMG",
  "key19": "43H82f2ZQkcHer5bfwNSsfJinKfowwC19suokdGsfgpmPtYs26fsdfH6GmvnvhWzCusdCC6nKmmAdXkaw6iGHZgn",
  "key20": "43wszKSXG3cgnHcnzpCGZxkhqj36EzNXjyL63zgRDMaYQAEfV74nbCax45kiakdRjqNQFupVhTwTyk95DZzvyBqu",
  "key21": "51GLFqkX4au9QKcVKdE6HfPZeUZk7xZ6mihu5mntZDiHezqweWz2q56Hqp1QKy6tmzySLDa2UF4pE1QVdmoyhcAc",
  "key22": "5Wdu3cJkZgtUWHzJy4SGuZwP9FG8JJACoN9hm4SNW87FnPa6UsWjExRnsF9B6tPnANMELGrS3zpFz1cz8dN2pmJu",
  "key23": "4Dpq2h2jhroovxn5doy9QMb5wtVGGbiuvK1Y65yFFrrZwbM1q44Au1WgKM98R32yM4suBGMNLYLGpwEV9hL9f2Jd",
  "key24": "2nZfuYK1REW7ZNhg8dXkY2dvGQQjKHkp9LcdUnWcZUTfq11zE2xtTiadgGE9VkuVA3EBdz4vDy7PzMbnosHQsAUW",
  "key25": "4MowApxM52StmpSywb9hekq3ityXDpfY1wp5FeeA1cuZJUghsWBYiUVBUwN5ygLVjUrw55RoCYwkzW4e8kjYW7Lp",
  "key26": "emXdp5fF29CCxyKpMm2PW2oJgKB3rMPtwL2Z6st7wjvDU59DrMEEDkxpt99Nzay1nJFh1srpFRJtSKkaKvXyHmA",
  "key27": "2tKLtiXjj32tvbGd6JrPEzfoS6DYFJu4PXFxDp5GFF19txApdHGqKfpKjUt387NYDLN4nbWiLcXRusjKTNWxUfvG",
  "key28": "34SPGmiUJrGU8iZKjFS7jXfbYZBiBPwopE44nxkdSm5BtJnvEXHBivCwTaTikmwXxq6byYwK6UxH75YTGZnXTNFe",
  "key29": "25n1rxpPrqhWi3YzmEwdAWfr4LtK7fwbpixw3aVPVw8L3oq9RpZfvXZdyTCC6FHztrneMi85ZKK3hiy1kPAEBjPr",
  "key30": "2weTmHw6AkZ3NXCrguwgycDgFi5g8D1ZxF6hNjCkFDxdrghmzoUGry1QfQ3gCDAJXmguBLuhGLayqG8MDyXaVcu2",
  "key31": "35ngYnKunW932kGBmKc4yGFyjGoW1HmqRRoxXA42dAD4zgpfcDm13xGBqaGKeMJvAJXJNxpZJCRGUHQY1Jh8L7U9",
  "key32": "3NwP6Suw194oq2Fw9o3bVG8wJsrURsRvMn5bTnZwdCfAHgb2TuUgJnrG9txtnT5vhtw32R4m6kkM8HDKpGsxgjdt",
  "key33": "5CUfTY7SCceKenRyBEeXDi9G5eKo6qDFX423F2eDsqDvgRyogrdqYKWPNSx8CkCr3Nk5DTWaotTBXQU5wczB3zJZ",
  "key34": "52qHZrhMtvso3tWz52FHbQddzRyUhPaenfHPxdE6Hr3uXoEjwNSuhYWXGtv2vr8QbgGLeHq8oWJeLsquGb622Whv"
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
