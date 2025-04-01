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
    "4Rd9QC4vXQNHpQpP6Ui7GFGht8BzQisFFe46rWBptCLwQPdHHwjx1nTguE4ho3ByTVr6VkivpL4ewMd9JCNvW9Uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ehn5Zz1kCsxc6SPwGji1W3zzxfYcYMtEQNDKbUrCgimGFuLPYdGXnUCzUY23ZZK4wn9iRfq6v1pbiBWdKcDRfzi",
  "key1": "3SRWDYDcEnuuPi2MhY4MPtU1HugF65V8ghzzUnRPjiJFz2Mi7YoXWKq1fdtVXh2CYB1Ti5A5fNiaNhNFCJzCANuH",
  "key2": "4PV7LeLJusk329KYojDTSH69v5j7xAJffXcktTsQxxyNv9b5L4jnA1hAzCqeDCET6NkWgmUfm7Bp3MhzSFfpobYL",
  "key3": "qofqyxs7jnXsTahLHdz9oE32GDY2s5zdcopYPBzEGQUeXzSBg9iQJ8KkwdnZTghyBJw9tikRna3AubTn2bfmPRm",
  "key4": "34PsbqKe2PKiYZdMdniMQ45JHrEtezPr5r4xrwJcd5ERnJQFs2jHPvg6CNhnEJ2SCSixZZ8d52x6gVfYYEqEqf2w",
  "key5": "462J2YYZyeK9XNkUbZWYmK62e227M9uxyo6mBANzSo4NHHKXERpient3DsT29z7cuEeYsD3Ar9ceDsgVxLDB5L6r",
  "key6": "3VPTXeSLAn95PyHZcxeZkxoXqqk5ohX8o3AFKkWcf8QaxDgN2EMTdRXxGfjTYg4vsDKC5nBfZsbGHY3bsFgFz8bj",
  "key7": "NPRxBFpBPqWd347ubUJRWkY9U9uu5PDUqhArga6kUVubBjJSXie8TJ6eN1bHZQh8r5UgTeK9iCuWzfuxj6Xi9NL",
  "key8": "3LWT8p96CMqfbAtzsJJjoBXftXH3DsjXrTJgXW8wgsyaHBszUCNp6GCu5HX7p1PcCnN6sMg1uY4CG9We4RRzHkdL",
  "key9": "2CyWqdjVJ5gnyc13Ks2b9YWZ7ESFipSxxHsK3YqWa3atak1WVvunN4sbWjhLhNQoGTPFgsGWVC2FPrfbJNS7Zv9v",
  "key10": "5dQEVi3Dn87jWZ3JXucbHQbX5y3DfAMmHWyc16Ly55KccjnnQkhLQJgxMqMezKLHJkLa1WvAVQBvQtYEs6L1jgmF",
  "key11": "3KX96teQ1KQyie2nEaX398MPX2gXmbmUHLDWA4au4p68KuYW7Uv9HGxsX4c6f7XiJfsVM5BzwKpJnEtV6k4RDVKE",
  "key12": "ZcHMRkEwUvU4iYDSLtwestsqdGmtAVNY51YS5jsAPzW2nEgo1M6KRE8apNqVjNzYWy6rdyHiF2Bq9qmhYv6UQbk",
  "key13": "THwJuH22xkUrLaynp9Pia6ARW2KZCPc6qNFcTeYFAwEmUoyuobWbZ2vp6cxST157uPuzdtcNBd3a2zuC9RTu7WX",
  "key14": "3qBVwpB3Xs3vo2XhZkyX68PEAmi8NJ1bWFkGriC9VXKuq7YSBmLGQRzRJbCNsBmm3QrFiNaEUW9X6vRfH4L9kMCB",
  "key15": "5SUSBmgeX5Yy1zZfCvuWijMawWabboWCzXi3odJezo8Tp2MdAEPWiGDgus7tsaErZHSDx9wrfPB8tt82WsPbTPop",
  "key16": "2aZu5tarAq6hZ3Lgh838ddnhzUeT6fWMeMghvvngfxRkmdAa15qYdWTdE41ZQrVuCQzrtH8X6ti717ZqEGUsBjZT",
  "key17": "5u8EQ6Rm6s2S6MspVhjeGRGcS1Hr13npRZhWrMSyVEo7h9jPzCCuFiZjDTKgLdkuLFxJfetbRu7du6iUiMVVoXtM",
  "key18": "4QFC7rXvEe2k3pkoMrXu3QhSuaisHcRC7rXi1cehUFZES9JRo7SwPZ1RsxGsfWw5oxHtNHV6SwKrJDYb18RJUwaT",
  "key19": "4orcymfy4Lf6jFjwWPhbU2W7vnB29GEwt5g1FXP82N75rQmRH33aN4HsxwLy66NNQjiXLtz9hriEX671bJd88AUM",
  "key20": "5ejAEVMMzyXmS1hTMQF63ZPf8u4JSs2x28ew2SG4eSxPUzoGQAKuwY4HG3qB7GsciFtE3rAp568UJrCFcvWbMM18",
  "key21": "4qZfQqEaKZh5D3WwLfWVAeXBf8PVGzdcciPrwnWtJAZyVbcvFw1Zsgb65kFK8gPPujU9hQnWWPPvnqUgUq98ao5j",
  "key22": "4c8FaTyQrQohTRzXAHq7prZLUUFRnnAByyBaBWwofb2ag5n8N1wCqJcJsjn3TpUo7bB8oAN2q9Riw7AYnaZBUtQf",
  "key23": "4GcyJQrYTo4RhpPvJKkpwNqQG4GFeVC11M2yGfdsufm9WJR3CeNn2eiBSGLoh432ZgYCCFztRhjrDACyEb5fZR59",
  "key24": "4JgwcPnLSNxCaxQ6yCyzZj7oCbowtLjpq1JHDhMByF3R1KA3hccR5VCTjqMpSXUPxdEZbuq7yhXpRVsnZQK3G4ub",
  "key25": "61YtEhsZKZ6CjeqpuE2BtyVibJYgcUAVbBGojhjkxzPY9GBXSxMJoxCabB2EcsmZjCkkgWjwqSmZT4BtEmELhL7p",
  "key26": "HNKSGQuYiv3V8Wn7As47DoU8cLVP3xYpK9ycUQoXN3S8NswuJXyGnQBBwh4CVjYEMQj1QCxF643qk7BB2dW2riz",
  "key27": "4H6iSw4LDPMbZVSCDUBsbAT5Ek7jPV7suQ1i9QcFFgnT7TWfaGDGeemsQWK8jAn7BJYm1braPYapPkKqvgmdzd2q",
  "key28": "BWu8GAz3JFRxRMAMmf2bmeziFMudFYocQpovNan8oxUN9zUWbGGJRF3WzHLxKhW3KwpBEEggvk8jL9jZZnmpbqA",
  "key29": "3FC2R9HaHZVvnz8anycD8rDpbQGKaEetcJh1BQvE7z1KdR166PgZCK4ZcuSXcut25bWPGjFydttbzPRGGVTRdUH9",
  "key30": "3So4dkMCAoHFfNiNnT9RT359gVykod3PetPaTj5pW8ApMks9wuFyD71FSxNnTTFPqkBuh21jP3y1H3c88TwVWmbg",
  "key31": "ZZUvVv43yUeMaArExCHjeJvSQeSUhxMGJzM1eY4FNXedi2Qf372DxKUPrX6QGMNEWQWCmfiNwvZggmbkPSCbNg2",
  "key32": "4k5oDjRE84RipPMQq8utkEpWyjUKpQcuwi8KLYoqGCkweWg2Mxo5MaBqM1bF3rjiS7Gt5csjJsm996hj7UQqGog6",
  "key33": "pqBGe12pH8vmaeSKBWuRFy71tCKWJuPLhT3JtCvg1BSZkUon7n3tanU158jNGMjjHXds9eSvcfxFvtXs6E1yGBG",
  "key34": "45bfkPbMNtSu88mEfVfdgiuS2iYEZDj9CMRy2dUexetzGNwJtGDNCrxcGygPxe5AFEKog9nQf3fUNKizgeYWRYXz",
  "key35": "2fYnfFCMYhdhZJt2GuPx9zvvcicKX1VvKSxzEQmD8aCNR2U7KCGxRDhxQxZfuz6YZQLcDtsNUmBQezSZqmDyyZRT",
  "key36": "5cWpQNnAxNptnYAzGbV6JbdYh95rXSiu7bEErbhVfJyxH5vwq42f7SFiePyDJXwNsxSwiVkj46MDn3NKfwDvuNjv",
  "key37": "53WGTZ6ZTUxrTAaUNZ4BaqWFT24wPPA22wprEnq6TyudBy7C6dAZoZJbn7iKTgQ44R9qBQHWEm8L4ZaAN1QZYvd1"
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
