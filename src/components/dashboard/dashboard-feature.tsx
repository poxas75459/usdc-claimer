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
    "4SGv1ZCJAnQ1raTEpDTde4G94eyxDQMUchYA17uCSdd7VZFwjBpjTxHUTKgHQEcixgX7bEafcPBeUELpxN63c7kY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59o6tAxpn2VGJx44Wch5RmTvPV1v8gXdYiqTcq11TRHyfQxqvjNZq2SFCWY3LBFSgpSrnySxuXvGhJG8mcFDsCDb",
  "key1": "N2GPGL9v7MxSYpxzqjLGYBpb9z1BuWCMzZgY6SbFKUiq3xbzf3iQECUsyCpPip1aSAtncUfpKxau9JgbhxyXWsV",
  "key2": "66XhukXsd81UkNFHP2EfuXeVGNXiUWkdizp49tsvVvruGWaA14CB6AvGJHnbjayYkvjxR3Qk4hHbSjB6mmUN6pEJ",
  "key3": "4MbiFa5JDf146a3z3Xh3dQzkR955EecdM5YWeSynq8FuLt75HFxCDYrQzCnzyrmyLbqAgCSU1utyJScdyZya5RVU",
  "key4": "5xGGgZ3hEXcWZd1nJ1xZKW5t86p2VqcJUcvHRBVCDr3edK4gX59hSKkgfWCG48BtHQFwhmgPt6zNfQa2PD3SNPrC",
  "key5": "9WHLZH45mhhDeAhGqMBYHokQFuQFfJ1kKsNLaTht139S57eyRfVrDF9SrLmVPLa2zTAaEaexC8GbJdwE7S4Jnku",
  "key6": "5HGepZesrrJuve3HwXXous6pKwSjuvdevaK2nPFSwZaj2tBnupQo1GJftzfLQJM8PadpvDzTc3CRugETvB9KjrnQ",
  "key7": "45BkkUVZaz8Cuk5dxZcijmxnZMUTKNGkLqjYgeBRxyetFG2F2yLVmt5b2F3Nh3M1k1M6fM2HwwEsAerFWRMVa9gV",
  "key8": "3uBAhLN2br5TeCPWEAe7nutkSy8UdNMcWy8XYagPGgiEatFE4p2dFXmNRsQEr676zWzGNEnr9e4m5r1Pi2W4JP7y",
  "key9": "PEKWzXYfVCCw2kfy8rMkGvxVW7ADJQtKAVqMFddPCbxgsgD7WdHfunXKVtkT4gxGowSbZ8jD9vymGn4e6LpiSS8",
  "key10": "5UXvJSRc7knV5jRgVDmidMkWH4UQtRT1DoqfpHR8B52YiFRA7rY6oPq78MVTcPvofkMaERzCzZ6rWgPeVqkDYjvB",
  "key11": "4RjBC3umTaVmC91y9L8YW7g89cc2zSqohbZtUv6BLXTJhjDsPLwRUap9xmZqcMhgd1a6A5P3SdEtvL5jsCGbX9cU",
  "key12": "4tGv9WNb8fBnoNzZP9kAK2Bsmaztn82iXt6T4FzuHQgygWS8rUgZBCKn2AWsXSWmzH8LDUyrZxoUntnkMR18CaPa",
  "key13": "2xAXXH4v5RANfioiPZuwB3H8kU1LzrDAcsjzWj9YcZrG7sYJqumE8Jx455gkvdLgkxtt3Jmw9TAdNNDAZL7yuAHb",
  "key14": "3yYFT4uijLJA7BhdJifGtuHMACCNqpx5TXJwtQ5Fbtdy355YRA9DtT2meLQipgsH2HeYnt9oNj4hH2UaqoSXsRnF",
  "key15": "4JrRrTArj2YwX3xM1WEZxsphfnt7CArXpzQEvGkxdve5xUxPdiRmNttsW9Kz94wqFyzBcMmSrrMUSnEDeb7qNkuV",
  "key16": "3J2n72JKimSojeubwzFWE17mSnGG8SuDWUjoQbarng4vPs5wvFnr3q1z5YicizsGuNxqibqSqGg8GX1bwvCpWk8v",
  "key17": "5F8MHYALsHhwHfFZQaRfeCeFrTMdZxz9HVrUb5yorf3FFeBugqHefXpgfDXfAy7yii53pQqDtyfGSbvcAC7mxpuV",
  "key18": "5scxwCei6RXaRkLLsTwwPQVzhzSGMFm31Y5D3LPQ61Wj8iYnf3yXQgnH4mrvBAjTvHBK6kgVPVNqWkgQdss2Vw7Q",
  "key19": "LEMtvzF9Lzox7i3iZ6ZBihC2MfvXbJw7yFiE7cnFbTbcE9HrBoNTaxv1fW6pC4DDYM37jJGKg9fxZNw8MTjsCua",
  "key20": "5T5PWwpgqHStaYQPSGxLpuwpiS8q5CTxkWaXpi7K1oUJ7iVzuBjEkKppWVmPCu7Z9KzMrFZZmdAn8xmYXYXyx6PA",
  "key21": "4ZRcdkkW4d5iL1pz3zWv7YocyjSjHYFjq2kErA1YBDdxTvkDJAJxDCDFCX2j9yEaiJy6EbNb2V6DnS8aBtTbn8py",
  "key22": "3DBfbiFZYbvNoeiVXEfXEYYD94sLE42UeuZs3srrPjdVraku8s5uYPh6m8hrinshPFMc8KpHfmKeRiBM6gHZ6tgM",
  "key23": "56RCnZwxAWmK1Zr3urdvLHSHTUn3J1jyqvURhzEc3irxguS5fPkFft8AnMpm6mug6sPVH23m5ygFYtjkbQxxxRfe",
  "key24": "2QqpTdXtSFiphm5KS6rss1RhX3w7vu95TLgkXMTSR1xwV64WyRvdGgWPdQsJs42Npsrm1idmmBHFxcPrqsTkezo",
  "key25": "3jMushWMc76mEaXe6GxaXA81asqLrdF5MyapGCTc7BhdE5ZCYvfegtSDjqT9k178LjZVdT5u51srpAWfunXmA6Xx",
  "key26": "t62MP9B7M4LALQrJ8gbu1svRLwfBPtbLntwqYB8tjE4vyockUgSYKKSrpRyYvnvQQfxxRk9sAQGdEiDr2VNdKtu",
  "key27": "4dnJkd92pXhyBfUmAqxyWmekSnMKCNW4ngGN8kpXmqUqai4oLdJE7zNvv4jx2bkUTewfKRtDj5vqHauANG2GoUHX",
  "key28": "WbvCRX86AsaqvCvCkqUAxD951DYTmUr8EYrCq2EuCLDvNbJP69aYDBkM4Q4MgbBdJjsVXeJmrfzhpXPLxDVPLfq",
  "key29": "5whfxmcwMiYA1sX2sXorRU3Kwo35oARp8e3kzWtsZ6cMcw2kVJCscX8bQ4hQWE3c4bYofrdBwQxGGyyf7YuvsF7G",
  "key30": "9FCgGZ3E3YgmyV99kiLDoqmoJBdfnW3TLcVC33TeaAXepY4vUkkeJ3V6dbTaaTLomkuqxCZndM4BN7jW9Vg9skv",
  "key31": "4zA2jpX3KYXYfDkVkFRudj2xHVLp7NEicV1k49n4MRh1sSarAuHD2YU4AcLu9NusSMdgNmfdGm3C3qMwCaW5ndTT",
  "key32": "2fRRANdkzJcQsEJoCx941FEFbaXTLJAJwkamU74UB9ecNfYNmeNWWUPttBR6qMpZ77He1XfCBR2frdbQH77bwktE",
  "key33": "2ngPu3hD45kxXyj8JxhJEzS712dVg1zUynVgUM2bYpMPbejSESbfsGBM19syk9tfRcDxMLJS9QzVdeUnFE6QZwtP",
  "key34": "2XjXcGeonXZYH55LJDdJHZbZB4VG2Tw5Y7bvgwnboUCfWyme4bQLHTHvKfAwPauK66vPQeQXF9FmZ2jGUVkVWXCH",
  "key35": "2VeHGojaZv2MDsxYw7xz9NwUYSWKZvM1FaW9GzXH1uMD4ptn78doWZLzrKtEhoTBsE3mKTXn1jKsVt4t5wWRmBwM",
  "key36": "5NDwQJnLPZWSdZYh8dMpxQyvXgNAt5ihzxGb76bp6eg8fTannSKevE7wcrTxcnD2WDZHrGN2uA5GRpqRc3mh817P",
  "key37": "5ufvF6schC6HT64g7dLHq3TUBr1iyABNs4opP4w51ph1DA6CcF2J45HN4hbC8NVMUxR69sZCEE5hp7DVCb2q8xHo",
  "key38": "4e6TyTKrWYUQezcqZYVN8AurL7rp4QwRY2RT5q4wXaDJGXaA534KfV16exQorwq7wH4gtdwuZbyA5qhAUqhcGSgi",
  "key39": "5ARfCBzMiDKgbfKLQhykJdkNrMPpXRuSHBProiH1b3L31y3UryBP258Zb7tiEMnEynugXXiJB6EyA7gqw8kKR9wq",
  "key40": "2cj1a6QsuS2ty4yfKp98xwpmBR6CQ1cwGux5rDNy2iQ29q76mN3gVXdsdnEXGnRyWneCmHk8vVwqoxQ2znAxdkmi",
  "key41": "4eKhnM8mTehs7qtCAjDH1AQ2aqPysCAPdCYLiV2EH2FBauDL1bkEDXqEWRemUkDJRtvzFYdGzrpWGRNPdAUKyQsy",
  "key42": "48Kzn6jRnGMNFe319SPBe6KXTGStQ4FH4gDt1UvnM9GJ7ugNcWyBbYuydKA8VRMpfrw5hArEq4v3zSCBMa7efyfw",
  "key43": "5XXWZk58U6AR2QQN4LZ2HFrg6KSPBhNPH4wAzHnuEzos5EtAm9eq9h6i8FwerQLR6g58Pi5odY1hPLTYYkL4St2P",
  "key44": "4UAbbxCYob3gMoBb7NP5SAsn23F2EE2LirDZjUhhmGPvKgJDLLYqtN815tRgg3d2DTUbHPgK4p9JmAVzZdrxuUEB",
  "key45": "4gwpaJV3AwDcFRnGGj8WnSQmuRTZtVswyZSVebqgGK1fBLFpQFocMCmfcA9k9jouNrYfq3CRXcmAh7taXDs5MjK5",
  "key46": "3XUtYsBj8NzpEd4zpdX935cRyGDo4SBAjqfQkCBK7tsficGiCD8jCWt356o3VU2tXwjZbqskADHnrkiLGE2VgKUu",
  "key47": "hzD16vHjgbppJPH9LCmmvD9r7zJ5o39WDEKF78nszuA5QwRsC4h9UoUZivGB6jTFSHqgopYWxj9q8GgxBEqdHLR",
  "key48": "2uNKBszEmivS8E7ysaX8UjUgZ53oZADZ1Cs6GJbfhmiuYDzjZGfJy3UD8hoQv8xWgQ6QM9zd7gxcmz6EhvZA4CC2"
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
