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
    "4YCiYiAhNvfHb4eBLatqgGMDq61VcpCDhPboT3yaGNpN8VBLGgcGT2tAYMNoMSrc3wKfe3h4gZDw35koTTEVPKYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RsnUnUT7ErW76Wmh2fX9gY7oxLKFd3LvVuKwcKCHXkLZXmE1KTfTVBJfPMezhiGYrpWEZZXKp6p9D5YVhkvk32A",
  "key1": "4nETX3wCuvySbeYi9UsxRmo3hB1jb51MyQiEudfF43jyW2jTKDdredTdBfn5XquBThKyVNiwY5BSmkgcVJy3qGvn",
  "key2": "3zzLYLRUUr2GSGukuX1CFdd2H2ps6fgS4rdJhgBwxBbcWGZztvmpdk6DstsiVuacvgMC1y316wMcTRzAzDw8ebyL",
  "key3": "5zaie8Q2CnuVdjQvbvTTrhiaRiZqkqnxJXGXxWAJo27NLdqyYxCy7ujjjJM5HwTUJXnnjMPfeMyGBJSKFVEyTSAD",
  "key4": "4t47jfjb2JsjPrgrKnRYveavKi1tnbP7AdupAxxfYuSz29gKwBP6h8fRRAQTUYQn4AAU9uBAGig1vMvT3tAbYohM",
  "key5": "5yGsXVQepAmNZ42rLjXcKgycQmbkjfxMgLieNot5AReBfJrtsVjw7prfxdYWBjxkWd6tdqE7cHALuY5hZkdHkNKQ",
  "key6": "r4iQAt387oAKHqXyEjGtNAm7q3xcbSbp9i5Aa2WdZUWcCr3sTnFoq95mumGTEWoG1oyPEfuZNRKeGS9PfyuezDM",
  "key7": "3FHB7ZrcYDN6B9huBEU3ZRztPuCfHVSdB3d3V75ZX1P3Qewun9MGwmEXefC6AGwbhaeR5k6UqGRfNN8Ecz718DUM",
  "key8": "4SLnjeQBxsaqYDzaL5XHXiRuYjoxgY5rY5fGQcyw82ewteoERXhtgEdSzAAk1yGdz2FssG6A8Wvv2SEHnKw2Xgv2",
  "key9": "2acv85WeJik5JKQh7JBikjaZ2u4xyDMJyu3AAAgauE1Y9EP6LCJdeRiLJhpDnSizt6o6LaQHbwBWeh8BYNNkDfL4",
  "key10": "2Z1P3L6qobbYeDj2APf36J4PR9L14Neo4jy6JFT9pc1g5UdySXhrho9bNAFMYcCiYw6gtiNESNpXwWyBjtG16iF3",
  "key11": "PNy7HAkETgiLrBfwJymqjJ6STjMcwqNUBg7XyppHK6eCpaTRqEPQpoPQNi4qJLu2SMoerzDMmHJrj32YGYtq4Tg",
  "key12": "3JMdnrkcxSrKB3STxLmJU9m6RucB5d3MUU3imD5D3xpMWtXEU9Z19KdjV5QLqBZVV4KYQQJxXwQANevRPdhXdZuU",
  "key13": "3JfWUyP5mrLo3bz7e7VDD76nNAe491MyUy4rLWZfvHj8Sfznj5Wjjy4htsM3o5xJoVcQi9PfcACb2eP8Gx84Crey",
  "key14": "4jKSuLJomtXYHWBWwdryry2mge5YFw4tDXtQKfdzs7MwZ2KvcQSWv9fQPLuqTYUvZNQUmSTNaDDtPjTiKw7Z96Ce",
  "key15": "5hU4wjwNq4BYAMBhEfQj6kY4uoMioH24demzdCkTRjLMLQzRUDdyKRgG8MdmCY9ayNrcDZHGrSTQWZFMBJw1fxRH",
  "key16": "5U3H1kzUgtWAfiKA7R9yaybnFFFkKZgEoi7MCVU7Aje82i61vk6PhA3Z7SHK6QwPqBEvk3gdiPdy3YGK97639Hzb",
  "key17": "AENgWvxJyXtGMdjdKQtW4sb9VWdsLrGUysZmDhVYCqrfmgLsLcdanX7VHdmtw47xwUjuR6FZ8fhR2S2VDNCC2g7",
  "key18": "5xzsSgWJF6nJNnGkjtS9TnZEqiAsHxwuUJHr9RK6r8EdpGX8GDPHUb9tyzV6J3eWt6bBYdoCs9ZukqJxLervepf4",
  "key19": "3y4VyWthLwd2M3w4JQdkWCCGHGyhCTCA9ysxAptgqGXHhGnBVWAmr1E8WZBvbsWwiUekvfZgisELo5w1HMSv4dp1",
  "key20": "2XUt7dPYNkZbKjZNEs7eHo6yZ5C8AkKHkd23h5mcDidzsmCsRGg5oA5AQp1e5raRwMw8W2ypWPQWfTyCWjjVMYKj",
  "key21": "4urH999C5HpE5i9dEinwRWhrn1rrV9uYZghr5fahQStssW5NRnqifbZAZL5PobeKxdMA21R1Ezfi7yHaTM2nfY2T",
  "key22": "5etAoyuzpZFMt2hcHk8oxmbRQQFFKKu5tkbYv6pHTkMYMojgcp5TsTb8mvaCJS6zvzosJVdHJYqJdEBDkZpnk1Kf",
  "key23": "xjaicRwaxsTwgzJFreVQq3YBZiintyc71J9GZRa4WM6tUemrKjdyT1fLkYLua9mM4UEDhjxHq5R4dMPyLh5Rihs",
  "key24": "4WWo9CCRz3gSYmAJ6hkbJnyWRRHuYgJ8phdU1wPJYEDxov6fRdZ218SmzirS2mefR7kiFHgtXurEqAMC1jhSLPmz",
  "key25": "5fHPiadwbUyiRDyjUy3P5JEuWDirEA3fceSeCGQy4G8qMUzoBFT9SPbEUYEfH6R77YrHbm5eLQcUHANzsHVzJ4A3",
  "key26": "whcYRNYt5ACxNLsydEwXGrBmzZzLBY8NUBKkpYr98fLmFctpoxYYTbr8Qcwr2TLCJTC2tZTdzkJmtQrgmc2JdaB",
  "key27": "NsoMsWQzTArVp477NStYxBAY5spWvuMzQoD3kP9JJMyzcreGRyPkU2RcWmCRnMPKLRp8zGkwg5e7QmEATissjq2",
  "key28": "4r1koH9DWRrxaQisjGovuDNqh2W5rarW5ZR6hm2YkAWgwixW83LamFaHE6GmXoNtmtx57Tavp4ryfLozGfhBGCNw",
  "key29": "3fDJGYoMvMFh6is2SaxmY2ajxvvKqPtDx34Sa1kR4dCNftUsJhSueR3qXSSrfF2XpVNW8H8aeS4SrnALhTgAV2XX",
  "key30": "2WmK7LS5izXiyqSjAvRdfJ8VzFPyQY7YRp9P5HhLW7v8fVamVDLo13Z1pKxZycovYJxjXC89kVs9tbDaqjcurJrK",
  "key31": "5YQYSczzvEvJwH1t2XcbaBaGsAb3BbaWYRYUQzW1bcbYGjozq9YP97UPhwF6rxhenTUu8K33ZMKN9qABYUZsydNm",
  "key32": "51SGgMx25i7pKmDvUoqYQTp6yY3rYyt3GvtG9rNFB4JJAbByHvZvTHDuCtVjHZjaGsVJJVpiFw6xZiwZMGd1Z4Cm",
  "key33": "4r2esKjj5yFF1P4qkeP88dWHeVZhKbFWxyE6akfnvm6rC8aiMC77zcK12aUye8cQwSPdraGeCmJWfH1gKK5CHBU8",
  "key34": "MNB4TPvGShoUr8hdXWZHYS8qxqrQv8HwNUninHqKupJVpUJqdbPyGacWaGhSQzPPuRusmUvf7v4EKkJtDKrZ258",
  "key35": "5WQfg8oxQGoiYgY6i6XceQNGGVkH5Q4CxGMBH7xRW8h6qdK4QtSxP7Jj9Sko9eGWNzKWewtNDtu1gez2tEbV1i94",
  "key36": "QrEPs2DjCF2qcjFCKgPgRMoifCZykCv3mbugwficfiNXvx4G9zChNfA8KG5bGTnh5jFzgxPvbk5VMsMyweDxC55",
  "key37": "5S3W9a1KWLqrzKxjLXDZ46kAibm1mpxmsUzjyoJr7gpy5LYrweWng4cF1rxmt6LNKPpXAUz6WGgQqaPDXYpVpmZx",
  "key38": "2J1fix8VWwwoDxYq8ncqd1TEH5ezV6UnSNduH4isgeRXL1c7Q3QZSW6qHbaGNEx1AtT4CNNKxuUy6c5qBvigaV61",
  "key39": "hkzmMcwZhKRSD9gMDtSJjMUBWrrjm1vzDdwbcfh7kRfeyahXXHtAvW5ZUm7jdxbu6b6JXgf4nYAApMtXUgvFu9W",
  "key40": "27pMsaAkFAw8kx55sShkZ97XXTqVGHkurjWUCjvEQTTCgmNvTEHDuCoGwK49r2HPYy4i9c5xnDvqMhLN19GTcdss",
  "key41": "Taw9KBE9hBxt1paVjMNyhS1Guk3pXX6tRhwXJRHJm9DmhkkXMYhie8zXyuVGbm77Brr7SqxKkjw9XenjUvFZULN",
  "key42": "4xyUcdmBrtwFVcFdq9frA8qjRZevzxaSu23Fo1zt6hQbynkAXdA8YZzjAxMCJwr2pLQK3FnxeD1D9czVgr9HvXqJ",
  "key43": "3jiCH5CuyceJSYYMeTZSntdkhQH2KgnsgW8cKV7AzMgHk86ZRgbxApoccfLszy8XQoRf4S9zFAuUcbfc6HA1BZJr",
  "key44": "4fEZAUwLUufPPcb8M1JgvViwBP7DwZqUfbyBgnVKbpJh1PPjeFfipkqnr3PugvCTzKMvrBUxm8hdHW2ZsjpzE2yy",
  "key45": "4hER7Qmx8SFsLQUx11mVBDQPEvi5zXp1hTUx2yyzcfQ8QiEo7FuqqVnBGHh7QpBWWqiWUfbCYMZ9FEEB3jw5Jn4q"
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
