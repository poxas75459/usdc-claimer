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
    "4ykKgBLyhGqMav9g8waHd9pr6D14otXi7GJk7PzKX2uNSUpCtNV8i26DbzUTtqYMfGDjdnXMXVTF16FQ4jKQcfYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47WmWDoLSQzyJyrfHcHmfE6FCGmvWxMGR1v7NezSpbrjDDksFhdCt587nmY9jRXttqhyMvQbPDBerF4AXtoQy5xg",
  "key1": "46uqWmQzbebKqgbPPjYiJ6kC7JWdDif2fc2C8mEzfXZvDCCdX9fsnfZ1saBoCT9W5vwwp3DtQWGi5FTLvPuQ7v7U",
  "key2": "G1SiuKvsP4CyMGPn88psorgfiVaYZgourHd4e2oMdWT16mJhbUiMsnc77DKhHmeSNsDaKgvUbvdj3Y2FEqmurcv",
  "key3": "3B7mFHNbccULvcCVrxKDj1UUhp72Qn7TB68gy8fpBrZyGS49EaJMwdhrRnyX5FfzBJs2MMoLiWo8C2pGSD2bzoFT",
  "key4": "4bpNcEyQwCAQaveGhAATV9eGrQwxFKpTvzCS1kZgAnszTdTRB9pnGifuxp68ijzr8fhbZDrf5N6KJ7u5JBJquAwD",
  "key5": "257w5wcTRXRd3CsBJQGpH9MBfkcygnTkPHCSMpsvZ7KvdD61aUk6Jt2ehNYdPZBuPy4hYpesW3phKKJBzweRLJrs",
  "key6": "4fbdSG17MXKHf8UDTUGL8L5471P7qLUYUSazMVWqkuDey7m7vM9gLLnSYw9UwMiQNkZpMFgbJnojABWAL3wKjd5i",
  "key7": "5KEcBjEiVteo4uY5G6FdmBRvyJNFizJMK4qmWnPjqfSrW6aRvbNoHCCDmsSVLacz4CaQjFCrNHo7B1ggSAsf8dJ4",
  "key8": "2aqiJ5msX4Na8c7sRqaSJ7TCoRpvwJJYHNXeqNDGF5qiX2zg4pXVECGTLCJSb8f2nzVefk87QJ7X7VWBTWMN81x3",
  "key9": "4GfyHE296qzXBDFkEoSDAp9qAKgkHXr3nz5HZsGCftg1AkPnhodWS2xB3ctVzqSEVn1Kte6BZ7PXhvb2MomP9Kx3",
  "key10": "4NbeY5N1Mo8YhJiHsv7H9y9AoJ8dj2wc8xSo41GVkNKh4oT5yoMkUBjLF3xWxmV6Uqr1nKjkc9U1wUo2BSTaAb4L",
  "key11": "2nRUbNct5ZvtZz6WYF23re5RWYGYSbRKjqpbEs257XftQSVWd9abLYNUtpCa1HakwrSgzJ6LBCgd3JeKd3rkZqpY",
  "key12": "8LyQZyad4LiPDxJWRpNnE8iChXQqtFLv9fJnBFmHbn6ULzFSpp9ToUBVgWBNdRkYoAnmAkD1wkCTJXCJ2CywKr5",
  "key13": "4v5bHybE5Qvazu3Uig4jzNGp3omRkL1GcTMN4Wp5XxaLAEi3TMrP2K47GgxE7qwrtWx1FoVy87s8FC2aofrjoStw",
  "key14": "3rLRSJ59CyctjeNbxwWTUQWojtwPPsdC85AaUD1zGxiDb9kkK9jzQeHp4j2Us5JF15ApSZMYNaJH5E4vV35VnWZT",
  "key15": "2wAaeTs1Tj9tFcCmZeeduJnwWsTGVfXzi785iZRLzuaEqEvJURWiWCzGSDUe8yu9jUs4B6Qtm5Lu9Rr9qGdczBEh",
  "key16": "2Pw9UuhQkS55yFtmhHoa7H9kaTUGSdrsATttUxyTZw8KL25Ftq8F39HhBT88oFfm7hYxv4sQVEi4oqrvv4ANXGAp",
  "key17": "5scWqXq3xVpbTdWuTsyW7SGV9ysnXrjfP3GjDsCqpaPWJi14gvGmAbAfUh8KLptDoR13idUpB4t3tZ3c9cniY8LA",
  "key18": "XT1VK28gsSPvKmfoHgCZd2PRJ9AL1bPM34ugERZsq4qQqSjL62DceDmH5jnvezdMZ4BDKZxMK5D3YAWCTpYSufZ",
  "key19": "4qBgKgrKYeUZr5rQaSrttpZqsGyB1RmLbj69Zzmj7CCiDEjhq5XMjPz2SUDLWhFDX3VNLLBrREjrpiu5GZnVQSa6",
  "key20": "2T23Fo4uvjtSTVpF18EfYunmQV3ArpenuFcC6YNMF8972XccZ1u1GwPKpKTjYMsAPzHcp8dCxAUz4gms2hEbqyAz",
  "key21": "5Gd9zcARNYFAmTNJAdBj6N5jZ3zMftPL3mVCk9srGzjH9MKyS6fGZg59puEvHRegTTYJ1yGNaVRKufS5sKVc9Uw7",
  "key22": "4SBAfXR4KcVs6VsyhpWeeJTGVkS4cWiSMatkMAzbLsATexXAT2QyuR14Gxdwvhm4CwQ6NH4onpkwt8ThaMsoohid",
  "key23": "46Psuzf1CRWJLAKjayeVvZErNJ4k1wEmgvWS3XwKMWUUvSziiibjgFRods9ZNsi8NqbJQRtT4vimQVmQKiT1fRw5",
  "key24": "2KBdjzkyNzoHLKMh81oFdBceqjVA3UN79VEeHcXTbyKiEE8RCz92XZtNumYNiwqHR3jLRqVZPfLKvsGpPJ2oPUZY",
  "key25": "5M37Dnj4YySoKseQE5CKmUZVd2nK2ZErzXPQQCo2KhQmg1LsTEFhELRkAGSFGk8JvYnSUSVVbNtfEADW1HPCCsLj",
  "key26": "2AZoFAiKvHTX3PouH7ojiP1uAgVjkBCL4hryjYF27X8v2s7LLBjzu1EMN9XaBnLuU829ftuxz3X8NKC4eQtiMD2N",
  "key27": "53hRNNzrci6d2KFSEEgvfNroMrztyUUnmwovfYqeCMsH2nUnpXMNsWB9HCKK2do4B5hybiegH1vzVALKv5xaP5td",
  "key28": "2NPJxjqnWN8nGf55STqAaumLLFEsyheACAXU8ZkMChetHcHo2z9r2HL3HoKaZ5RH4gC2gfFz6JdzYtFbT8kxWxVV",
  "key29": "5irzYpHpyg5VsxYeBkiyiVsKP4ziPr5GjdStp76A5U3yDkqD5DricBpcx3sYS8h1NA6Nzp3CqMmCMh3T3HT9uxgq",
  "key30": "4PZZD8A8cRiYxcu7rRMMZhZaqvcMveVdDNfiq99qEjD4ULGzGLX8AhVV9CPgNAJfMiRHwQYtV8asGymNJLMFZEAk",
  "key31": "59PM5b2monAZr1tjwBT316RXFtuT46fDmU53kiskfGHdLNcMUfbtYTVgrRFsiGdzWoDQsZ8pZpYEJnTqFaxWd46C",
  "key32": "47vPMYYQhi1fsASQEgYn6zx8oPBu7Rg8V3LKXey7KaxY5ooSWTEWBKCorBvrGCzhwT8miTUXFvSQuXcKwCnDK8LU",
  "key33": "q9QoFUMGKZZjg152Co2Ay5qd9igFLmcez5wyLZs7VPvyouNUbcp7jkusbZcd9voewWUxBPTTmcQ6JC6EKWXunbd",
  "key34": "23hG5wqxkgeZo5NLddTfJhDyEiVgiLdctPb4PEFRcK1ch6mDGQcoMCxPooqK8mKt9A3KuPbFVJuo3KP4BW6ky1gD",
  "key35": "2gh6zwudq69La8HSRbdcBJ4RbdeDJ89ndcYU2M8Z4Fs6McHWNAmie3WnzLoGWF6PTorqPsZ75TmfcQWj3s4pnv4k",
  "key36": "496cNU6jV9BCZoKo8vRe2w86H344qRYGgemFBqdnM7MGSE4RXAZzeA6Ega1BGbSxyEmouNg3UUUtAnLcRAgxwFCB",
  "key37": "5Lj7kQAQDxQkQj75rvvu4wZWzkfQyAdin5Vy9ubZCeXTcghHfqdBsNjKuCJGFPAgnmRkZUkZFCJdnKesCnmUjKSH",
  "key38": "5WKfi8hdECgwgX5rd3QRnBHAiXyfS8qn2d3LAcmSL9aUYDTxcZmt2jEpniSgHvRv7Y1uc7k6uYDcKFta7JK5sWnm"
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
