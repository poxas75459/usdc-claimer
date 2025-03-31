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
    "4FaxnykBb78yF2mWdfTwE751Ux62cEYmRM9byFgALUazEBhaNTEAwQbYpix9QNZ8HhpM3fwtfWRuirA9EghVHj1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KrgBTEvC2Y8N9CLkBdXiSGFSbaV73JEkP33BKFPemtidpDsJTbbNXHn3uqYU5DWMqW2ptGjNPNBaqxV67xURqfL",
  "key1": "5mfKVmauHvWgfY1NsLeABafbLhWGnZCLPLEHybAWFjtjvEZLKEGsMwXA7Ym9Wjm5hRRUuobCprfpVEUcqTNbWK68",
  "key2": "34giGP9sP9gEjTZmYstQVS2qGWRoANWpZufrGCQYKjB8LdhYZf27nw7rnPaGGxp3i5CmHfN8ybsPixvhYqTFochZ",
  "key3": "63wCm9rcU9Z6tkzatnPsxzdEUregUtvyNgyNxf2Zc2FACfr1SsDoAicHSGUTZAQRKfhzgKsyj5sU7E5gVrY7wxfg",
  "key4": "2KFs98Wqvp49N5hPJcoMc4hgbs2thDUJ2aipBDcy4jM4qmQUURMXg44p7fEFn2WTWNgo6NWFgL8ehG29LR4bZbku",
  "key5": "2WR4LFQi5H97JAvxBAbTNatR8AoF31JPgsggJy6fNCKfVacH1mgPFvuqnd3ZNEmBTDkUpxh9GeNyCuBXGiccmQC8",
  "key6": "XZoQdHhLcNeZdNMKAVnYSTDXAnYeTQDSWyw5QUj8gvfbSWqEokNDiCydF3USPSbJtmeYk7hvySDxz7BPkFGJ9Mp",
  "key7": "2sQYdaeJEKPNbSoiCm1xenC6WYUGnaGonBqS2E2CaiE4PyGoePQ46nFxuZYWhCjtWfjKsSDVUbr8Q2utfc5fA5gV",
  "key8": "61JYWKw6K8HR8EXJLpS7t2rTBjtnZBVzeRwA7wzPimttoB6JK8npNCvF4PsJKWcdLuvaaMet5uua8kFpQdcMBNqu",
  "key9": "4dAikyhFyBCCeahX3xVzQfhyLYcYwfZN8b4mUJU8jwL68hfdSoD4ivAgWR2xhQdWWocepdx3nKWxcxMZxnwH3ZKe",
  "key10": "22rw3U9PQNLmAt2fcAV6T5i2dTumSaUBcerQ6pvsPjVzTqDbyi2F9EaVbKRw9ZNFLyj1j8cSrM32yxUxy9h8WRvP",
  "key11": "3TxBSGzWDWpDWtyHPe6QBcJpxYiRu8m664KfxvUrocFrENFBXtRiS23xWCv9nvgqBYXZv8htqVBR1DNArcssspFT",
  "key12": "3DmVApehBhNU79MAbtcHVxZ6zE43K3MA2ZSB5AN1PBazBbvjNBLYXq3eV5AGTfjYvEEYsAzKAvUbisiJ8DY3AnD5",
  "key13": "HrYAgWEjP73j8aonoJiRk8fxmFksgkbjXXLLs5ETSTyMhsA4fQqwLPRR146VXQsfaE7W7TgRH9L4CeRj3hgKJw7",
  "key14": "637yKz8xR1o4TUGwiwRXpun5DguC2ciNJyShQDrsojDSyEfXAjn6stspocbxn2bZTs7i7Z2W2v5BePEuZi58Pr7w",
  "key15": "2KUJvScPQ4n2tXS2J8iBoKqgNavyN7mCNEtLcwnr5PzvTgZDp6K4YXWtZR2Mg8dhZ21TKsVShzzryhTc3oQuDK2V",
  "key16": "3GoYJCbD4pURWHS1VUPPK3nZHEjuJjHGnXbD38AdymWQoZsfuhDwL2BiNaCB9EBRsy6aJaUrQVZSwXHMu1BGe7sq",
  "key17": "2HNw67ZfYiwvkiK2g4sXrx15ooSLvFm5dH7JWvGFaS49uZ6k63c8TJGP6RNqv1wc6dqvmZ9XoQFYKHFzn6BhAeSt",
  "key18": "26ZHFZ9ijWuRLXgMUG8xTBAjQqQ6YyYXSH5ytvS8Qcr2puMVNLmeTr85tzNYf9G24Uh1HW9xwcPH2LGo91gbAUc7",
  "key19": "2CqXD8gFftUbij5CZaxuR2SVtynhiUEw1JQXkuXgnRKMGxnNXvfpDhB2kbeNyZ3dFZhwAFzwrZf4XeNcpgAtgFwi",
  "key20": "5bj9nuosdguhsAX7eGDkAxUzSvjiJbTp7JmSCpkMV2a8YZzhxiQtMBMXuXKs6CHS1gR2t4ePnWBcapiHYozxwPzU",
  "key21": "3ixkaf1RndEM6fsxDqNbm9UQtGNwrWyFYEnsR2E9vdfAhGY8UySJm8W5LTmYYuE9UZ8y4cp1yEVQHgAz3PoKd4yD",
  "key22": "2fvTXBNnMjtUj3v6jnMjE4De3obNK5VNP9xq77gWyCdkF9zF3RhCd5ucJvZZhXeBGXiQ9di4zx7Vrep7LBjN8Krp",
  "key23": "2so8AntknipCejfJTqPDpvNamFeFXAWP5JL5Y5MbeFMVzd8rG78hEScCTarjSnVzzgzjAGtiHD5U5ec4uG7E6qsU",
  "key24": "jbuXc8cyxyQ6GXApm7vnD6X8fTNth5Hkg3xJYmKBjSDvL3WJ3Z6dEHbxBA522Wh6Ehej6VMoeitkej7xZnX63Zf",
  "key25": "4uJa2QSwDPXjxzgUtiM2G5SXvKHYKdsY5KmjAhJNNxbdhTD5ifNDNqwgc1bGtCbJQdYg6ihm5kJa5GrBDgquZbgh",
  "key26": "2H7bHC8oc1CRsLKYpntMV7pDbUVKbPonw6FJKvevG2s45zjhYnbcSKZd9MGrssmWK7SrJGMaTutyJw5y5Vv3fYUH",
  "key27": "5pb1ugRkc6ncYvENJh5nhJqSxsN6SbYzotxPU7rkqR1rkVDBeMwtJm57AM54RKUPbd6jGQ3gHv6jcENMMfez76zx",
  "key28": "3LCVrWkvBmQcLRzPMoiATHS3k42JnKtrmEcijYgUhAPpZsyqfxqcwtH6YE25ew2QVhkTtazMevD5PzRF5rd5XFtm",
  "key29": "ugXyUdfcNfKRR8GEnyWBMJBzGyrPSPraz2uSaEq4qMcXJvuvDxivox4fJ5EU7SkchHnsPkW8EGaVRjoqRk8poSu",
  "key30": "3twHmJLj5dGpmjrQdnnpQYLDx34oh1ew8rGRG2jxvxrvmci2Bbzc4yyhujkD8a1UJYHhuKufJZGPAe6FSfCJ9nzT",
  "key31": "4x6MZCGHAEfefmgLkRdBvNfsG2CG2h7hGn4uYK3ZFGMX5tnFNYb68XdtPFKkCn7ARh43YKBpgkBCvJWax3udkHRx",
  "key32": "4PrEB3i6PBqvrreGJesyagAewDo3TtV4Y3o25sf9nBAtJgD3j9omWgzDgWZW8g4xwaKeZYAhzApcXzrioNVrivEL",
  "key33": "34vBzpLJFUR13vMgt7Fv5AejG7ZC6cYuZtrqQUPcni6xLs4wnqumDF7MMn2aAjnUSLBrfDYn6JPtdt8R3BbhLkEi",
  "key34": "Leg4dDuyM85tEc4EjjcfujBxvKcETVgC7DZND23Hb3hXxyezcqQQmjFgJJTmAb9BHGjc65wtK3bkyXoMMAS4jUP",
  "key35": "5TVvz8ag73Nt7vQU7ebtdRL6UT6stnKxkzrj6YTtEAMzukGc5t3DcePMft6tMYFbdrYEPkbXzzt2T9cstszWagu9",
  "key36": "5xwjMV6mbZ8bsQNK8FP6h878dUQqLoL5JZVyihKLJWrqUHVDwwtUsTfVEjYaw6RGv7VuJFmR4bAiQpcYLXnLy86j",
  "key37": "62yVueVLemiojFZeMkcfGRXqcJpUgSnzZLyAEsZY3YK8yqdBCRB9adWb5ZD1Y4xYS2pVFq1auj4FrZRbLqdcoLVD",
  "key38": "5sfr9G5yXzYj9nVrizBK3ws1z6ynyteCJ6w2ny9dy4b9ucE3KCAw5um7yXxYuvzzGGsnnBV7PbVXUx9saDciUawU",
  "key39": "4cF2wLNW6xm2tzughkm33uJBMjFpest39yEgXk2AGsbvttFLheDmS3pDHsrhaffqM5xHohfaitk3kGt5EXxvj4Rc",
  "key40": "4ihLFAyX3Mdd8AmiJyHEZAu6kKGoPp9RAiinC312Awt2d5KxbLSjWbypm4kfRSXRz2ZAj57pcBxZVPP1wVHzURjS",
  "key41": "496v3ptgsuykhMah8LXWhc6nPAwP6n83mKHqe2oD7NX18w3sxZMAwFNE2gSKYZHbkbokgUCA4uLcS1TLkCJM1tRS",
  "key42": "4oHf1sPgcwaRkiJdN8B8cPkkuNZCmvAiJ6WYe8fcrk9UB4CKBCcZUrLKByAnawgo8NfVBSMY8KwMrEYrmy2uNVbK",
  "key43": "5oGBsYs8oLKNVfNoz5vUwxWRKarJf7NuGsh9xv29EivuFGsGZ7TW9vQZKL4vjFFNJyjBihgYr4SNdbmqm3dMoKT6",
  "key44": "2MnGYZaZuwJBJCxsQfiXYSKK53qqFkDsWi73LRVcFjGxKMzDpuSPEgc5wfrhVXWn7be8FEgQVqr61wXF7gkPhR24",
  "key45": "ZajvfEQ6AXvQLkE4bvqtXDM5DQs3DKHd62jDNmViN6xWmUKKH7vJaih292bQonKEKcVfXCvYQrvWbvCAZZBk2YC",
  "key46": "4VXjaqeQmPSkPjboYY5iAYDY9DqKj7TSXJ8VK6NWwF2gnWQLs8mAMFBvuVVs6BsEdtHJB53TJSaPDxytsmnuDohc"
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
