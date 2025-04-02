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
    "5wLmaomuSP3aant6FWKHubHo4ixvqWYWAwcLmMx6is5vHSzouNSiorxS5WCHyWvJX38ei74MDxod7ZVHr9qmEJH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48e8W64jRywhmCX8uHT94RVAZbZp8kCJiyp72AXB3Xd45ZjpGabtbEyiJuBHUiHsmibEzN7jqHBV4VvvVX4nNR2D",
  "key1": "5o3WbhFsvR4xCteaVsyPYgXAFxzF3u4rhhpVJrR13enhcpqka7x6JypmhEG27Uh8LRKQqVzvsjC3Fg1ytRE9ymhK",
  "key2": "2nJQaAaC6R7qLX1tJKVLtJZ4YSYuuisTK55ztfgZ72NtHt7SGFqji3sYM8CcwHKft6sDYhUVns3FvVGsZxnu3LvD",
  "key3": "koQHC9C5FfAd1SsJsrpJEcwPNqC34HDDSF119MGpdBc6J2EU15HGS6bZFb8FqaYy8UHg9ATdGSnM2sH61bEXe4K",
  "key4": "5nk4HR7rQNNhzbMoi41sM35d16y2k5D4hk5wJ27QrkrTTioBDKnmPgGQCZHPBaXGWCqhrc7gnHy2frj231QegftH",
  "key5": "SPaJVvhcY5KvD8ggshWjTei3VZeC8To7ozquiGztXpTDg2K5KgKkpWuWpjewDXhsnYEQiWoLuVDhas4bJUSYGxj",
  "key6": "2gdRL6ck94RGVGb45xyDkeJMiKxADjVmSRPRgEijD2a1dDjHZ6L1mE86pbc7PKr85iD3NQAPRsKug6jrP1RrUdpy",
  "key7": "4nHhpREm5qHd34at3qPsPA1YwGXtD3upX5rvvUmS7maChCbDuQvfM4TXSFPmarsPCvaKoWHBXch67NQxjZaC2wop",
  "key8": "4LKAWUMGAxbSsguamwuBxJKiT8EJ9cKuPEayxXnqCwuGFDXd9pSCiyz35KDmRiTjQhM7FsoiaNMPa5LEDSQva4xN",
  "key9": "4Qo7MxBcir2ppTCcYz3EWJ1AyxRZzEQ7PsFKoadRELC3iXuraHavmvHd2tsfAfXthJFvxE4bmgXWXVd2kGmhJjLf",
  "key10": "4T568kb3htv6CXQid5Eh6hWTwj8b3f96cZnQ8Ys5DEPWZD5ccbsUF46vDYGJ2K4DK3fkZx9VBSHT2Wv5j38jv5rV",
  "key11": "3ZKTfsAt8vJwdMgVQyQPsMnx4rV4Sa75LHyZNCKQtbz9Ehzxysr4HXxTQ2KGyH9j2tD8dTT42tYhFgz3uP9VjzFH",
  "key12": "66knHAFDCL4KViBLcdzgwRGeBM7VeVsoKSTt1TNM1pJ5YN6TxFkCk9irCEh9ctuh9xvvHyuopmMySyiB17LytyX9",
  "key13": "52muq59m1t1ubev8kTvCrL7Lsk2Rgc1kREnQDipxeNodvWPqYFhnkY2dgEt3ix1xVBLFyJnV3LzYsi5eR16WfTrC",
  "key14": "5v3aHkXcWWMfHWUHBLWZXBJSJbPZJuh1XWttGGFpTwKsZ1w61MnFDWTsDi11ohSijMi8LYfoqQSgGswETzRf272U",
  "key15": "2nggY7ge6sxdtDT5xWooZi9QYBzWArtoQjwmVqFJ1kz8wipd2JxKwdBxUYF1BFF5KZizj9d72FheLfYBa2iDc7MU",
  "key16": "3Bz93DBbgsNTVPjRgL2EtmZQFWVDd5aZmDvoVcfWJU6Mbwexf9sHxhb8YaZnvq51L9XtF9WzGkKt2QxgsRVSNnsb",
  "key17": "54h9GgsV7qA4rhCziv1YRBAxjnbxocKXRg5yHY2gLfC2iVPyUqLRZZ4qV28X4KLMW9y2ruoJ7x9V64pMa4yeniQY",
  "key18": "2VNc9JA2ayp3PiMKnjKZWZURfPywR5kJRYuVACUiW12auJsDXzMn3psohgXLfHJPidt69Pr1yxscGDJWvnSFXWYy",
  "key19": "5juUSc5znXDVxkseQhYBD2n7LQ4ZzSNwUKXZK1siJgjpcsHkc4jDZ9mPdQGT2afKR1Lm1wF3Ax86vQz4vGNeUksY",
  "key20": "3kwMu9SC9P37dBvS6EPzXZP7MGVcHEfKroBeTyLVu4GXrSw4qddDhxSW813RZQ43bKsoSVCJp5CzETbf1727ovqY",
  "key21": "XDCk4UXw6LP5Hfs5MRYcQU4sXeJ5NBiVVUbLm352x3T1CYZNYuDfira1NVr421fpyz8tpTB44bZxZddbeanziqd",
  "key22": "2q7TLX82TbSULRN1j59PEWGN1jheesNBGXXHm8C2QeLfv1ao3Hf4bf66B8DFLXPuhUbhzzpjsh8JBQkqi5sQbYou",
  "key23": "4SVSMKctePz8PmFQ46fMe6VXpLEM6jJKPZC85Qpx82ASq5XcxACyYWr6Q3fqs231wXUfFqUFc4VG5vW1kTvCL2cW",
  "key24": "5K4VTUJPe6padmvuo7gQXTjBCjSJMxFaPUtbh4bFhgMEMKahNyfkn2BhN5X5kYoCKuDpFWckgXDqqXfticjb1CCc",
  "key25": "47je82DoFXjTvc9gVGgpdv2pzzVgJaoQcxhz2o6k9nLxXb1u1cSnwxYEUzfhMnfxvRDeSqXLxzgTPumaihyvbvyg",
  "key26": "55d9pXHhRu8rVvqMXFWvqHtGVSUzFvV9qS5htgSbhvRTEcXvusCWJXppDG1ddi6SZ5Kn3yLV12Nb3oTHoxrLNdaA",
  "key27": "2KuDDTgftXJBLtBuW1uz1WwTVUxA7dDU9sszCcX4hYiz15oRmV4D98bZtL6ZfgSG3hFRz1QVKmbTkTwqbvh8ozp8",
  "key28": "LBSbTQZiEBiXv4epWeTvfENTeuesqikdCWybKQ9v8uWHnU6Ak9DrKYWs1pjkpmcVthyVNkbQrdWAtruMeqMED1n"
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
