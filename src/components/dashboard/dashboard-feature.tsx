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
    "2CMf6LafpJLeoKm2XZYgSEEkZkc9gXgmP8ziDz7pRK5ka3GNQatPUYdCSqvp7YY3R6Tv5sLSq8Dqy1iryhBiaX3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qMsE5yiLMt84Gemrj2NFK41SgKMNYuhPZamCzQvKfVP2rWwxUj5mH2nBePGnQaJeTUb65SREFRyiCbUo1bdzWXo",
  "key1": "46J3k5TTCb4jmcwnTPsA2PTMC6mAT2bMp4Nog5jHDdppArGbTuuE64153db1N75zxeySsDu7tfjZooiWwHeAb5C3",
  "key2": "5v75ic1zcQK6hThTgcM2wXBgXMXreQSkBotZHUsJ8pPSEMPgZx5vPGSu6gPuuTyFzpGCrPh1QXfEdMZr7gUFAdAN",
  "key3": "27UjUXZpiSYHUZKuZ4gnhiKqt8cZkEgHUJiCT5Jr3EM77aqBE9HBsJA3uQqtQp6XVqySWDtP6ns2qfWx65m8SSrZ",
  "key4": "s1ypgjmhnAF22wd15urQ76jDzarKVpL4ioTpMwipkh3kfpvSHUTCLZ38KdCYcCs95GfwP6fJ32ZZdrLFj359sV5",
  "key5": "2JCYgVGaN8Hqxk99tHA3Qh4MWWVKnAic5nPHnHS2fnofHoXTLfTbaEjGZcjyEkzSsANSJxS2E8TwyWhvZazES6c4",
  "key6": "2MjW6T2XbGaLJQyJfTjX5FAsrCpMgT6CB5r4BAwJKruvJCuAN4d2giWGrSKz9L67kXfynUt5DA9SXPUpRyPY4nZV",
  "key7": "3vH61KsUDLdHwyaCF9r7kc6eJHmJdmiRTM8DYJiu53GaiM8pF3XWCadUMAuhtgapdYgWTstr6DuQe7yjoX1TsC4p",
  "key8": "eEfBMPiUPAvWtnyF5w5d5yYoeyWdqNKuh9LtawisNDmVPLBMCcnLQuBF2uhyKF8URKorickdCVN2dSzrjx1VoBT",
  "key9": "3h4Zd6joACiSypQvHCVTNV8BtmmrVcebDg4BrM1P2W7r3QiJAK5ExF2t55XhjENmW57tVCTSAkuJSx86YSWHjTay",
  "key10": "2oiMkSk2gDfxkcgThrZ1sRYVgT35s4aFskBQBu378re9i4gNEuApuC9LCyf4tyuq9b41kLqKm56qn7X2YP8Kt4Ri",
  "key11": "3M3h2iLjg5VjTcqNuf1sWacPVJ1bPwhCkeibUHGfGexDPZgwMPYUeC4G7bbtJJWReqZy8vqMW2o9NouezF2Dum2",
  "key12": "5B7rxJyVK5eNZt2YVLbcHLFNGnthpyoM5DC4BAJLnDJpsNbcNR27PC2irZztpP8y4QAwnY46WryVi616EECjJPkk",
  "key13": "24wiqmBXgKE5y7Xa4DBLt5r8tiT3CEAC7Xhq3s97LsqBtPYdFdsDjtn1wtbgd8kPQjKHfs8ktc4ojiSGEg4dQdBL",
  "key14": "2Sgy5aYUpFfoFfRjHpX1sQoobxpnfuuQYyRvMBisjCwkgtYFG39i5DrvJjivQ9EnJaGMXbemqWJUHGXngBCStmFs",
  "key15": "3WrFTCtURpkwrDRgjsenkcPYoUNFewYm1Q1qBcmtyzFCDqAzh9PGSV7RAKyaZJ8vwEhYqAyFuy7KmTm5nBH23QwG",
  "key16": "39XS5NCMRrL56EKmsyA4GgoxrrvSVTdS6EEJuyBqJyhmw4i4twb49SbTBTgDYCSA85j1hQX5FZZs7LWciV8pLrY9",
  "key17": "4N1czqrLgFC8mwQQeTYZNp4qGB5AbU49e6DjLUUPNW3Bh5E4em1YxVR1cnTjiKsh4Zi2cNAZaW7rFgrw7DPb54ed",
  "key18": "2DpFqCtaSTwJGcCycBEFMCSf69SZ14JKp4JCVfoxrszg6zTqKoBvTz4nWNzudp5JcYwjtAX8eZy3aqsRV7M4L4Y6",
  "key19": "5CofdAg5bL3gWb5qd22a6sgig3QcYLj2KWvjDJsTacF1JBEb8Kv1EQvYq1fjopu2wY53NWTPjSfudaEzdpEMQoiV",
  "key20": "3WNEHz4ErK7zMBmvonZxpdiipLSrrEVQjVZWB7rjtr7fcJguHL1gvJ4ZT8AW73pTiLLJ3LBDEZQyz6agsGPXEq6m",
  "key21": "5DG42VzzUBiSNthAUavf3Ef6vqryK2CQ6ZRHQnFZtprKre8ND1if1dUChz7HDsVF4wdJWGs98n2jn3Mbe82NWv96",
  "key22": "4Qx5C5WWQ8SwiS48Jd7CPCVntwbuNrgGaYXVFiB6D4mJWxwgufWdmrzbRg61g1U56FZ1x4EobPkLC7zpEvqrv1Q2",
  "key23": "3UBwwF9urfQvWMDCv9A5M4SjaB9xp1yQdVcsZqsnqyaeXXaWYiyXFEfSyxMh9mYHb4Uich5E2JaQ2gYrfnZzqoLi",
  "key24": "pTDEci9ny4P3fXaPqbKKn63NV9FdcDT319qmckhdbGtzxWxZutQyqzMfktpbZwkTKXH4ZZJ5XuBTcBRwW64nitA",
  "key25": "2HQ5rVCgpVo2b2ecEVcPXiPPEAwy65i8Y4D93E3v4qZiwpeTDvCN8mFrx4Ve6mCJ67pUjNVHq1k4QvybKwGopn8X",
  "key26": "3jiZWmP6cLNBf4Nr3TMzbVhRoZFSzf6z5LMxV9GQ1fDNd8CRttXrj1VbNSYiHQoEZ1P6NFvB1HgFRAn7Pa3vE2Wc",
  "key27": "4wAkj8NM4yB8TcwTGupJBkRpzxqv6XcPaSxkFQrQTuAfQ572QgLsW12sEjx9LuS4GjLFpPsA88XPxFsgWBRctPGw",
  "key28": "3sTt2eS6E5QVkWxfynZigte3cSETS482wkskJtwknXVNuEA8uJvqgnYGMA4h5Gh2YgVfTbzjeyt9oRMDZLgiMkLN",
  "key29": "5U2ceSd89v7YVJgu9XefEmaiuYurFuD7MWUUBocTsuHUbEmhyKL7UeLHuJMfV1xyJv2ZU7GspX3kyqVKw3LyhSkx",
  "key30": "53pzYkc1X4VudkcwYLkFn7JrbeqDEhp5X3D9Nx8v6MHo4NaRPvRAtuWxPtkaxcrUyvEv6UgtmTe9QAos6C9uS3wR",
  "key31": "5k8SxkQBSU9ttb18g3TMRhCKyhxyXmPVTV4GZoD3f7kyYpacaTQrYvXx58pT1GZ66Ks33Mhn4zm9HzQEDsbf5rFK",
  "key32": "4WhwgeScKnvpiTbZSbS1v3zgJdFTLKHLPVmAMHcLkdNpjVWPdpnVQijkUu8mYbeq6GpgRpexPCd9tJRCNY8TTG7",
  "key33": "2SpkCC4q7VhriRLL41yB8EmVmGL8ZnD5Y1tzcrSFr9bjP2tqRBZTyR6s1SZ355Bua726P1QwPA5PMmLuQMqeFoFS",
  "key34": "3mbLpvLtzcSEkDDQyt6M85EGv6X4tBdsKMJR1t9RhRnSWcvshUZxTnSAc6dTL4NauDLsfLhHcYqJxP27Ti2B7eXV",
  "key35": "61Su95WKVvnUmoCwGhY4hPHAuF3DoSqahZf7afJAwUiHWGfKthpAV7Lbk2FatfjAdUDgs4WUA7YtKtzJhMGsdCjV",
  "key36": "4k39SskxWKz4okRkksRFemJmmH3cNd1WGi2PzXHhAAtMWD7T8pYRqZFxXn6JzzWrimQAYXoGRNfR89SuEhuzmGJm",
  "key37": "2qQ17zQ58bEDWne2WnL9pibfmJhpwHN9gTdVGP391szeBnyReLWihWyZRDRy9tMH5o3LFqpQ7A1vsgu2skhQSJtH",
  "key38": "2uC8ikqFTjqyugEF3fs1WJmH6XJpihChcmQ7Uh8sptxYUidAFnNFCeRp9iAsxa4UG8Sn2gH4wtkBmnZEgGrXLPJy",
  "key39": "2XcSgnkstom931L8Sw5FxvkzPe98ASr2PzbDmdTXuzoC4t7MrVqgfiFB6Nir38igmyDxS37pKbUY42wogn77YtPf",
  "key40": "3eq7gp4TUjA5Y7UfmtpGiTKEaZLnLtQNiZ1mEARPxUgfsBo1gQQEHQc4MBsBXvnEkLCpvVBC4V2YZ6DV9gwXtSXk",
  "key41": "3wQwnD2XD6m1skvGEakwPsqFZ4jos53xiKLuHX1N31u3EQKZmPQsPE4xJDdQ4Mi8J4nMfq1o5jS4UZb2z95oCary",
  "key42": "38a1WSqDM4zsJ43LvpEeTj4nhrBjKW7Fqm1xZDoUwvZ4agqBZaLY7UJJ4oio82BzRHcNFy6hy5cfTGs1RWWUF6qa",
  "key43": "44iL5VXmUngmurzFth8ckpCbscv3xt8ED2ebaiFSzZY946EMuPtijaWVusdB5CWZ5UB5KpG5ootQkQgi8fqGHX5m",
  "key44": "4eAMp2PYMHozoyzhtGVmLrQss7MKe7ckP5SZjeea5LeLHjBregdnf2c2wDaL8r9nCZnjaH4qdXbs4GaqJyHjZtvF",
  "key45": "4Dz6P8mr35FNyrrqPuLi6FVDoLTKeERs21aNr4SxFX2QAuSyQBf2cxJCFr8V1xYPbW3Tki1cnBWgNKzVKuvP14zv"
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
