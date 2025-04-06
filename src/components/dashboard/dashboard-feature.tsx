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
    "4y3da2B2qhyn9mx9AiA1fKpnP4pggM44ERpaXJv3Ah8soJjnziLiPaT5hbo5Gx4XTQrrjYf5Rg8FHMyw4pwzQiDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DHCrwvJwgxuanwqawXoiKkJvARazNcpdCY2NRbWGENPiNyW5RjiXaeWAmzurv1DuEejdXzKU5GQvAhXYmdEac3n",
  "key1": "56Cuk9pCVp68s49nhrFaHE1YAQuQLVDWayw1UxqsXDyQck7RWqGBfN5B36dTBHonp9FwY4bb6Nz2NronaNub4o2y",
  "key2": "4etEf2YQLsDuzLhQK41w76SM1UZmzQZ4oafj8nzabRp4Bs323GRo4psQBdvmgVDC2u4CiJobBjMXTwN9b7L7svA3",
  "key3": "H6aTHgRvHFrzf5Qarf4GL3oSRQcRLAJb6AzPwKnSPY4WEuWxMvWaaThuKKdMJDyYyUeEDy8nXozzgvjZuD9RkkC",
  "key4": "3Tm1JqedG4Hwa4dyrjVfYubfjWH68EnJqM1tCwU142btGSMcoRTtvW4HQvUneEiun91TCZAWAEsuHtseJBYEGjiA",
  "key5": "njwdS7oKHFT2hD8gQgexps7e39vJYvttQc9HRwtMrrSZFhWRcg1ffbTSZN3jRHDpgZeBWPFaDUwYwCXUpRsmLvE",
  "key6": "2wkyeggP7XDXW5BHSwms6i2ZRmYDppeSP8adspnxNHKh3VQ16meayNtnRRX1qK39nJtQtX8ghziy1QYvaRynx4FR",
  "key7": "21cX7R3pgB8gkS52N4GivYuxgUYeaFsKbwQVt1pSBBNBLNTXdfgn1W4TX3ydxP3gDxy2KngfySQ95cRwcAb76iM7",
  "key8": "3cfV1GBn5uEZGqHRfEwMEELYY9uczb81RZ3d9emX4m4JPexSmevmnmTYXRFWvNNZ2gXrXdQ366aUaGhsC3u1fcRX",
  "key9": "n93kcDv4Nj65bBbzYdCopB35ZUFK7LTf2mfZmGt9YWd92iH4Tn5s8jtWbB4ed6184khwoFcwgvfTHis25jd2EGH",
  "key10": "pBoq6ZJVXi7WhMXAcayoK86UfCJSdRepqUSSkqYEgkkBGpJ3qVZkiL7FCSUw2gGyXGKwWktfXA4AzwoGWKqF4oC",
  "key11": "5avoQcWD11qQubMxBhrsxRFqaFceE6cyjbpmYWkU7tKCZgMV6bL65DH7doGVUDNEPMkhj57K1VFk9iSBQm24LNpU",
  "key12": "5Tc6mp8XBoWuZgNxkLkTh7ZEqj2mbKVF1ofQee7rrBkmhuvaFemfJmmL8fdE9uZnCHGAvESXwBSuiVUKv6Gipfo",
  "key13": "4BSXMErjLX78G4EtmqsztCqeqW8NCtcWshW1gsKyxy4CCtouWf1ur2Mjq2uFudJthwR8mfxxFunLE7p8zPRjrx37",
  "key14": "2nbaJaWe6N9zhuJFiQdawQuhN6PC1uBpwSGAoSuPM5eK69BhC4eRzLtPWPSWp8DreHy72nr5jcqG9QqiiNJPpP7w",
  "key15": "5FLKuxz3KtZcw3igwHPPgnPwafv34VnQtE9bTKnTETYmntV8F3HjB585F3wLKzS9nLqRT34JiriApdQ9JSrv5DeU",
  "key16": "EGtugYsM1icQCpDNHRAHoHGNQ5HQTiayMq3kxtDzipWkMiKtDqDNqEFfJzDuMKBuCE95xjFtxZodzYZbfCJPVqe",
  "key17": "5XWLFjjwDudQfD8qWs8cyEtbJbahh8p5hUzj5zZ9DoSyQTtpv1jaHpvRYdZuMztUwkb8mQsVdJzNopej6cV5Miia",
  "key18": "2RRLWbjaskyqGShSgRqyGThtjpqHnymF36hWVJakA2Dw8UCqVMVr2mKFBKc64anyt5iDs1L1LygjvP76KBLUfgBg",
  "key19": "3DGpyJjCBV6DVCcyKwKmGTcpwouMfapLxcExGL1dRqFqJ4vGcPEUc7TuYhLnG4d8LdAJayrMyGMANCZ5az2GPEkK",
  "key20": "4tsJ2b6DokJj6rorzBybHkWPqoezwBHzSjJijsbsQgTi6n3acNx2if3UvEK9FjpHrAnw6mriq9m4RgD958dEeGyt",
  "key21": "2SbrRHnMm4DCzFbcngVfbavQjp2Vqmr9cvXNHfWHPGydjohM2n5XSvXPkLwGMBPje6hAL5S2Y9hbxXnZrdRcwpYK",
  "key22": "3u4QBAdqL7bNdswbFiiTrb6GXS76QPe4nqjFkhwfcwMQqC2H5dByAhqhREX6mMSaY9ZrhZUBq9bAq5j8UKF1mrrQ",
  "key23": "3QJpoZur2P95L9USszvG4bmk1a5WVVeGaXN7WfyGK1e5dN44pnqZhxBc6zsH6BXwUU1eLzKe2cbrexxjeenuaSXD",
  "key24": "3YJvp2kZpk6mfwtNgTwR3FGxULHyksiA9SKQP5gXGrumFemhwqHqozB78FRd1fbzK9YuDnbKBCboV4LCMhJdyxfz",
  "key25": "3GrckJaqk6jLjryLaoG643srL4srisA4ehCprRCcwizuaYrBD6BgsVpuUTvthsewGGHhoXEf8NXqgxC9sfq5RuWo",
  "key26": "2NkNm395MMGUWZy6dAdaPCsuPVEsMVSzVyPwhU9wWTN6XTLrK6LZUGXpREEPXYTWK4LZ27i6cJQQrC4JdFqH1NFS",
  "key27": "5cdM71srrUQkGWqyUkEK1QFZ8vJusfjRd63Qm7314b2b3sUAh3dHS5LCrondfdXzaeWTSNz1ajVcL7Gf6cvbUjHi",
  "key28": "5cLt7TAecPQNs7KbN6LzDmLHvz9HK85koA5oqGaTsxaEWydpWAYSByYYACk5i5CiYyGkzLEpPnDcvd8nHFkN5ehT",
  "key29": "65dBGjYpBSpLckbGE9NXBpJWM4p2JxrzB6XabdnuomVZz22G7SWq8L6gfu9B9WJ5Sai19q1fCApCwSpEM2hK4GgC",
  "key30": "4wwUtBMkMd655Q8ibvQcT9iWrkYbiYRMW38rgRKuPPnvecNE6rg2G5TRSLA41iK6DtwRq7dD9uAZ2qmviQxko1G6",
  "key31": "3pq5FrkHtG59yDXLXhfbHi7LvYqj6LLBSiwspSK5NVv5EwBqERKEBEkSADrcGS7hwtiGy9ZyfUJb3Zf5tcfPtEg7",
  "key32": "4YGcK4Y12qcpLuBLUh9TUUo1gQzsv2EtxZ4bdnjuy7BxaZHzpPtTJbgwno8EBP6HEyxrNRFeEaTPqGaC4WfEVkHc",
  "key33": "ZKR3aegFegxsKzucdLDJLCbU1wAZ1UMh3vy6z9hNh2yQBF49xSkVRpLQxRXk6GYmiHQSarS6X8Jp1jXTd8kT3iW",
  "key34": "5nmM97ZzUmexouPVMVkoQJgSBwtJm2M9KzgK6W2RfWuqKCewaNrJW8ab3cMQJyL6qZJqXrgEhQxSrSv9csoQG7L3",
  "key35": "baMQaZFJ6zYc5KSp7Xbq8bCCvtdXFSgSrtSCeQV7kJMkXkkXeURrGpcjwA6ggwuqd5fErsrXc7QSGfSCvf7NzAK",
  "key36": "3kcL6pvBeeh7ECpDFXS85zZRBxRaWN1zk2TdUzPwb8fQzHhcVUrWuogNLX6ew6T77MLDwffyyQnkpD3YpWT5uTnA",
  "key37": "3EBQ1g7i2tsmDw4o4LMzfEZtEA8AxuTEXAFYTpdu91QoeeiLXfVZseoA4RyuNAFwB7tNoHyq2pTH7Dj8WaYxHREp",
  "key38": "4Wxv5tooyNPkmXGS8dbuqNBdRToYoiHaWUXmoXNBbjC8p1fcmdSVvcrZJ7XGJDZ5zFRwPaGdpcBCXba5AtCq47w4",
  "key39": "4Xnu2dXKvs8mhLnpsqE5uwpEnarkfSuhAyUwV1s2Zn2SUFSA9nPD2roLvvfC2paAkMGVf2MRKD6BZ5hEHV9r29L8",
  "key40": "2Wm65A9JgeFCjMQ16sTMgoCsCzHsF2jyM92mCVq2mc5ipzN6U5T5F7TJGtxeKaBb9s89ZSbmKomQEWyiwtyxDXT4",
  "key41": "2FuL8ApCSMZwQMEshhqEdxtAjxtWfJDgJi7mVjfwG7UZupg3VHffNCWWMkGGpKuAbXsShxLnJPt9cyWhWUfSyCYo",
  "key42": "2X4W5xKLzwnLF2WsNsPqWXDW3uTwk3zYkKti5Y5xRE2CgxofvvVNU8AWUMyzLTMAsd1iayeEE98hvrQqfMgR7dqm",
  "key43": "48E1wRivjG4gdJCphnS7Ua2ouid948k6FWf5usFBQsuWW51XbwkqnxwRWihjhvPhzX7jRVXAWBRbMQ8Pdq9wwAyR"
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
