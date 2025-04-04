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
    "2ZbMcGeLw3gnDk8HAsDwchqeE92ZGH4DUddVAiws3toSjW1LkMpZHDLWzdqUZBymCHE416mSoVhnRkFF7Sra82Q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58uVEMyoxiqdXdXMsrMaiQAUguTEzSjceZyyPP81MwcctguP11KNYpPgBHDUD9seSM9JXvv3qKoSKuQr9JP9tsJh",
  "key1": "46hQm4GB3X4FRTBPNHEdz1AqpCgcPQywup2M6KxtXKeVSuE7dRnKs85KwGd2uFBWg9jymZ5S19ze8MDR8Jy71eoK",
  "key2": "2f8LRdRu1EN7yn5ByrXy4Mg1up38zi3k4uWfpuhqpZVpGLQXCyRUdGTvrLDcQL9tcJhWRVFjyrZGcBqng7m69fA4",
  "key3": "3JM8w5jyxG6jjUYV9dGHyzVyAPYyoCwqrCyW2vrump3vbfCQYPxdqKqHmBskjaBMtEPyALj3x3RuPQq5rowNYHD5",
  "key4": "2Z6XBMGEYekFdeywDXufY9kh7goAzQ19DDrRPknQWivrw63vhRkSkV3jSA92ABi86AhxBikrKRz1P5hZY58z1iP8",
  "key5": "5p86Ggp29jHwWWpgsJj3SxWLbfGXnndx9bm1pRtQUaFSEzrRMygPBp2PvbhToYTzoL8KoQrytBUdBqiMCWiZKkbk",
  "key6": "RynG6WX8XBPsukYUVBUuJsFVXk9g6w8PCjWGtPMAMXSjHvGWDxhpM9dXzbrapviXeY6UA98pv2TX56g3PNxabdv",
  "key7": "3PteSHb3Ckvu7AmTRFk2rKwKEkB5rxP27GvcXsAr1qMJzWbLq8c1LcbpQR4pR5NEVTuYEfGEGHMAodv1P2w22Fzk",
  "key8": "2w4AoTzKawdC4HzpuMKXLDWyojZZmhKBYNr8RCEK1U8tbziTUCZXiNDrktEswGwQosHCVRfarG6ZHixXzCk2TAiS",
  "key9": "5wyYkNBumuW7Kvs5HA1dCMUBvjWWfhX7a5JJC7rJhJrCKMTzVjY6bdfALFUVaWbVgejVhcsFCcsyiZoXmkwUKHpj",
  "key10": "2XZDy17bK5MkGjKpJqcmLXSS248UiGV2cTYryQqLexbin2mZD54VnxRztJUEepDHRXh2fDVsHMY7HxkurmLWWDGw",
  "key11": "5eaK5nuqSNiwCCtxmizjd5JLYq6XwvTWb1qdABth3p3HNJ9BqA96TjCjAfkrSUhdzu2qZC25xMAQ42EdRSf7LgMg",
  "key12": "iw8JuuB8dwQh5qwSdnHEXTwYjMqXEMw8yv8wzev2hruFyW5oqSxHXBoyqkxuznUjSPyewKh7E6BaSp4KyeeJPyp",
  "key13": "5nK41zhAjWh9qTc46jc8dMbnU36oAq7SStP1siMJD81Rh3YjcEt13AVvoGS2m8q8VmR8KLtZvuaFZa4JQCZmBqz4",
  "key14": "3mxLUK8mBW8Tjy7V7wpvnC74HSu7ykbu5YzbNXD3NwbjGaMs34q7bnqbSxWsxb7xcf1TsyUCW3kfVN8treZBC31M",
  "key15": "4Y5Yu8bmE1hUKWmUmFp3MsM4T9R6jb4xjfbwJRJsqBjQCas53BcpW2LntMg4oJ3gxLMxjEVx77JH39kG1nXnii3y",
  "key16": "367HoQzAQXhajqg4LiBiLUNpaR6RpXJAuRhppjL4d2knGkGoo3xz2a7xrZqb9mfjrftaec3sJtzAFny3bFgm5R6T",
  "key17": "5NrwJiLxw2239j41kUwK1sNq1xbEt9FNEQRx593nqbU7DQ2DEZLB8NcDHRdsz8ANtJ44JxjBCXq3xtViQiaxc7Xd",
  "key18": "2THXAkKkSfstKSzpApyEDwfMpFSz1RFUgCo4qaE9u7799nTcd8391TfD3bzSPxJnvuiDgG5PhHbJUc1FPEMXzkNc",
  "key19": "M5vWUMmv1tQ3pv1KD4qfgetCLqQeUfME924HYd99Uc9K9exLMDNBfDaA1gKTmK6KH3jzE2nous68eCv31wyMuHQ",
  "key20": "L6eMXend9steNHVA3DJu9rpcF4A323i2ZAe8NVT6WdK4TrL1vPJumPvqLsDqiu8Fe7Anr63B3tWLLrZ6V1zuTYw",
  "key21": "4E6UtzuhUbYxLaToSLeS47Lh8aRmGs89UQP5pQqqak174S8Ajyp5DDH6hmLUVuZqKHGpYE5CSpFQSHZfUzqQpR57",
  "key22": "2gyvVPcXrEv9Laok7Lrm9s9v4ghrv6vcYy8joSjV7FLp7PXDdyo6XEE3qsoEdVg1QdxxL2M7Hnn4puw9Qpu31gLW",
  "key23": "4dD61ZxFHUQgF9SioMz7rkB931JgRUVovH2p4daFNAvMaFh5ekPdCiHoCZmh6KCR9kjG5FYYsm8MtTL669dRR3P2",
  "key24": "GbEFM457KuzDdHkuMBVa99zz69bWy6QsK4eriqqkzb8fnJSkeSd6kSjQenaXYTh7PL7MZNLykmSSLyA4kzezf9c",
  "key25": "ZoDKPd3gWQL24gXi61hEMzryCeHWWZ3SgVZjAzRPyvUTSn4BokFE5RZyFvJJ4yAhrPFu8dAUKuvEvUBTDrg4hoq",
  "key26": "2QcbuEfjj4AwAsKnGBVj7FnaPsBu55vHGBn98buks8DTkkuc3njN6ec6EKdvHCGcCCxHGD7WhSLyKtKswqRoCo9v",
  "key27": "3omZrXCofaDu3GpMe94LvzRjMP6bCRxYhYoAXSipE9zsMFvDBzCCiP2srVY8ueSXNy4rRfNaDBdvasJBSkSiAQw1",
  "key28": "2N5ALKoUUewF8xzjh1ThQLhhXDWPZDQXMTxEqpPXBRnp7NtnZLq22mCq1D81MyNtsK8my1SfYS7nnMTiAnE5F4Fd",
  "key29": "2rxcmu5iN8dYSuUe85jzLJw7upX8J2qDCmfBAj6HSgKiJqwa7d3oBC1BpHVLQV9BFxxFPwwCBWsW8nNjCXBf2tmt",
  "key30": "45PAwom3s7CqjNj4r6nYRoJDGt8iUr5uGkEW7DtKVdb2G3BiHokmxQvHKPbmiJ5hQBvW6iZDVqo9WkR69uD638c1",
  "key31": "3ZdKwMJXHkpEq5TRFQhGnC1SMb9UdyRwujuKP8ftUPcYhHoJW8QXjn1MuGcQK5ScrsmpqjZi5SarK6xfaSFqEGKe",
  "key32": "4NRoCaZzF2P2zaJJYi7BpwGMsjapFcZZkbRAGJsU3KQvj88x8pPNsUnVeC9UfZgx7Z1bitBWVjMUPs9Yjp4khNiy",
  "key33": "2L9b62MZCziSSRgnh9Fq44zbDrun4DrS3zt6WJASEtpeYcYDYrxdh6yvd3dkLWDSvh7xpQgSxgAtyTzhKKYUj8Yo",
  "key34": "65uFUsmqcb4x9KPe1LuiMY5WrJ98eRpxNnY1hKjPrayUFNaEFo48eot4kf8rmLhn35RbtZMAjFQCyjiZqU98QDFT",
  "key35": "5LEAbeBuUAdhyEFQ7nHng1UYx9z4xeNBG414jqDXQExJdcCDeDHGDYUDH498tHJUo1RynRNTxjcax7xMK6h6Ybm2",
  "key36": "3qYgXVsVnpQayw2Xa7DhRmhrFNBf13PR7Usw5EbowqBK1FAXTxkN36qZL7PB3MFDfKryx97yvE5wMtqeqgjDqtuF"
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
