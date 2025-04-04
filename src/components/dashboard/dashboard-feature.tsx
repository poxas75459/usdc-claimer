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
    "22NhQqVf7QXjtBhLLhrNfbW2zFQtbApgTcVDGKamB3UWpaLRjJonfGecUHi8BjTzhTS2xQewDDzuUAtQ6iXjwBSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LffY75LYYBZ5RpCkQzR3fc8uVXSEM49YCKg4B3Jfagpb47esXPh9P3J4WwrxPYAXs3taHvGV9KRaiWVYzTCeD4r",
  "key1": "5ZJsoV1hok2S5ptcUrZpcv1Mku2KpXJj466kzD4TPSU84HFkqSTmkJ5BmgENZN8yKUJrtwoNg25HzCTRd9zx2L9c",
  "key2": "31G9rKLAAHTQn5UXfwb3NHCV7aPJFvPcnqSSL7sEojdhxAmvSMijR8AkiMwuc8P285CBW8zCc8CwgQb5Ko2Jx6t8",
  "key3": "5SBEd7v6z5bMVDpyuRkGihskJnESk5RZgvLgMbMuXawpdNJkvrAssizyvPVyoGDMVgJD442zdoXKyCBSMPh3EcHe",
  "key4": "bSC1zbRZ9px5i986q86DCYRSuUwPQQ7PxphzEbvQkWrp8PvLJCeFY9azBhtvKoVMJ4N5EdT6ai7JWyPHoGPoqc4",
  "key5": "mPS4A8kxGzgjaF9BMArrYQEuFYskfmEyUF8BsUyuvtL9xQmdz6jc9uqFy7dbVfkMqCg8HDnyvM26Fd7oFsuhPFQ",
  "key6": "3d7KyYfSgchtqT14FvVJMQYqUKhKcaEtEPTps4pJc6z2CnZCBMjsQ4u58kyX5ZZRtepNtoYkXfBDffSM2Gfgm5dk",
  "key7": "29xBgXefc8naB2ycf8w8ST8WE5f3NLCX8kv1cEeCnba3DCgMjxKQGc8imZHU4ZQceXN5PGhoQYGwjvMVJDuEXaQa",
  "key8": "2kjYbgnaEmMMqVGUyMCYtGyQFySCjjQZTfv5hNZ1ekgiqDnmRDfYuURhYbf3yxYfZRMp6jeNzbPK8gJ3Gvimcvz",
  "key9": "59pLnqXe3MiMWMh2pedyZHpGBHu5TCFGRatSKAxbrEjs59FFjFiXCbPBvGXR3wNqkNjupFwfX4gAa3YPTLs4fTSU",
  "key10": "36Q4DkrMMKvcTT6Ydf2ALcU2hofon2so6b7w2aGH8qyMvVJBovAYw2CZHghmerimw4thBxhFjSq7WL8HGuvD3J8w",
  "key11": "5eA1T2cJcdMxSrwDKZj4rZSyAgbqQmwPev3cCSmW6dXsyepbnh1Vw4xfQkr8k9B2Py1qrysZLfKqPqPy1mtDVkHQ",
  "key12": "mAxXG6LHTvE9U83jCL3q42Md7eHSKSeHPnnKfMqxrRoud1fBesMmqvwnfbathN95pRfk3FwBABnvHkKQMY9etDQ",
  "key13": "393ytasGxFFoAHMcFXtnhobtwEtUg2ohAzyQyDcvV3UcZzP6GwdTMkTfqih6zY1mRrEmEPWQ3DDHkwpdNh79epz7",
  "key14": "2Vs7mdEYBkDm4YUXvivj58E2sEArTcVeWJwnZkbi6zJuhPKdo8AKUc28mBajtk2B3FmYKLVtbxic1Pg1dCDuGCx2",
  "key15": "2TjJE8c3Q9NZQtFgnYARSfJSgLtXYPu9WY2JqHfh6FBCNVox6BQZmprqzJQs6WTQtCEWWQLGi5v6H3sBpxnVfxK5",
  "key16": "4wCx9mCcApQ2KYCQoDYFw1ctdE9FGxjDZJsP3ch4dgezKFmWguhagspt5UEqLPHqAH86cWumNVUAR35cdo3CkEGc",
  "key17": "3mog7JGpwNm1YtAGSwySxgVgzHAxmzaSWr7xtYim25wNNJdFBbdEoLMzqwEuqWq1Xpntvm3yQjPw55Kntwjjrvgk",
  "key18": "2vWcrDtiEfS7oSH6SGgKWta837ppox3rkqXVbJ5dnhsNYShhivFFrcUbFPGSvRrSDE1ujqqCcxmCtCTeyjU9hyHz",
  "key19": "41hAJtoEhxHtTMu9WwLHXmkod9VcTCSP2NKRbEvnD8qEN4fL55vPAHJNMpjbPDNWonRQHFJ41xqzey8h6FNN8Joy",
  "key20": "2CoxhTpHNv3F15qDbYkFKBGYqUjVFzAMpexLmeV6B3Aitn7eUMqqcZEdZozmgt5n7i94Zr2Kd73VuHRcxnZNyyfJ",
  "key21": "4xzK3DGfSHSfGuGJyMuj5j3iGcoP9NK1ZNsZNjwHJwKHNMxqZgLJBCG1KcJfV8QzkLeNWV6J3n4AcfJmeWmoZp64",
  "key22": "26YcdunH9pbo8AdtifToq6EujiQzvRv6TfQZLk216SZSQjzAdL3NugLRgjoTEx9FMiTQryX1Zj2bk4MuzN6q1M2y",
  "key23": "MQ5ghiYQRsjyDvVr3B11mVSeuvP1MjW4xCQg5c6Lqu4imUqjXfMQMzdcBw81vjeuxG9vq8JT2pc94r2oXesRaq2",
  "key24": "4YxDDTz119ddaKjYBzxXXQDuENGtrgcedSa3CNmDaPKh4YndgFRWaz2qbbH8Py9xNZikTyZ2gRPjqnE8vedoPdsq",
  "key25": "7YSooXVZAbjTAkJSHHDdT6NeEpGurSWwck63j9DRxY4WcymRwhVWzoD8o7BBcBaaYWBkcAi8yCsmTVPRGRAGd8L",
  "key26": "3PxnvtvNfb37Zqku6BXuUMxkbojmQkKauSWZkMToNHppMEFhf5seRCpgPdxbZvFg2RdYumRGF9JCSRhR4LCPZWtv",
  "key27": "3RQZyWPtWQmJMSUGS1ceEveH9UFTu3A4653fTeJyjSyKYz8uFtehpyYG4dGP7P8xgiHzb6qhedtk6bqpCTfVvQFc",
  "key28": "2HqRwNpNRtCCn5LKEohPQ1y9ry5nPk4dLXguayzE2XeVdQHKSkhwcDvYDTqbDX72QPwRPgdB2k3TAuuid3U3Lqgp",
  "key29": "djaXJzHqv2PweE9TRYzTG9GdSm1U6nACLF2ASFR96f6zuwiLLQYn1dyJfZuGLbbwsz8mbrHP3nWdS2eV8QVyHhK",
  "key30": "5TjeFpjqptarnCrbVd4VoEYBa9c8X24RXTMCFMXLMVmre3GkuiaD9HhEQgWcewgZDBM22jKxVEu8yuN6RP6CvWgc",
  "key31": "5EojGZ6wfrmxTiqjN6Ysc778Q3MXTVnu5aMrEx34255HiaY32q5cw1rSK56yWU2nuzAoG8YufLtxkzgDHZ2s9eY3",
  "key32": "4fAGFUxf4LMrxeD5G8AbTx8ioDTvQXdrwWz8g4McwDzSUc59PESsd7L7EBg8oRg1bo3PAD7oYApQLby4d1YgJJRH",
  "key33": "jn3Hg2kcwPj5KFwHiegxwJpy5L6WxnooctZ4Gnvh8hVzWoGfEMJFUxPixaCMNBBStn9i63LketRmjLFCukEmZyY",
  "key34": "5CaC9eTLjcXXjPznFDEbED8izKaFerLULffCJJdUUJwsAviuozAisLNCFAXmRV9gNvLMXih4RRXge4EkmoXD1YyS",
  "key35": "5Yn2M7zt43ermAYTdxMvP4R7xgnFWUfx17tooBVjtopcQ7VALPKVU68kvRbNpK7UfcusGxGJNXJzxQfCnBwx3x5y",
  "key36": "29VzSqy1kBmMgzGcQssFhPUvBmPrvPAL3r2mSxBVMfJbSEW2Wr4JYEepbMPf1wzVhvKGnP4hQbR9NpYGTFDPgB3A",
  "key37": "3RmgDzsQf7uYEtwmQ5M3UcYFjHiMHbb7n96GQWfAPyEm52Gc74xpfFAmrgoC881ijgzuiSsvBwqeQyTk7L4oB8Hd",
  "key38": "2Qzm3AyxiBRNfvQ8nRL2aQ5Q81i3djyHBqDCaqpiUqW1EhdREXrXVtCooXRTUEsrNR5YQTyo3qV5zrktvP2WAwAG",
  "key39": "4HiyTFx7u2YggoABNSb9wD9r1BeUPfAELBgkXBi6c3gPfa3EGuLgqNwzWW2ufTKANJQf7F8qp6UKhRRu5LwnHugZ",
  "key40": "2iXywtvQ3ErgRJDyrVGq9AbWV2bkXRjka4cXqdTZwYsggwxQpnHRhthG3j6ujahk9kZPmUid93psvayzWtbAQRpu",
  "key41": "4iUhLDeTTkHc42tfo9qHV2JcpbvCyu2QoaeLYkhGb4XLCCdz8UpK54w1jcvw3b2giH7WAp8si8gdsKygH9oLHu6C",
  "key42": "5Hoxs7cZvmN9jFFNkzT4fYnoB9wmPna4uZRhLYhdvk2d2JBTR6fZjBA3gek71Gadqa5f9WhNfaXsLVcnSLJLzWdF",
  "key43": "4EHPeoa5dniFKr6Uk5Fdtyp6TF5rie1zKnBAC1597eSWcaSZBtkRarbEm5CDGR5v7V3oTQT1iQatt8ov3qYfJxhr",
  "key44": "3YxRx3wUz3MA4qLFQGFU57HvUdiFDqyiTGhPuwGpXFtzEXr2Y5LXmD23GSbiGWyqmqucMg79ukzJZZR98DYc7Kkx",
  "key45": "5z3AFxnJe3fpxM6jBNS57b6vb7m1wPidiaSWxxuivZjHQKtCFYYbACUNkeoZQhVEUYFyLdhaiKcXtPKNUBUrUiKp",
  "key46": "2ATSDYKEaEDCCHivQxPohAFePGuf3h2bBh5kfRarhuL6ibMhmBsiN7WCitdhazqaazEvaaCJMLmMy7jNE65N9iwv",
  "key47": "4DjZjgmHvYfuZx2d4y3x7mdXxKcPhk74fcvsCvwdeYbp2jjZ3CrHkVzBFtiMAmaZaZkdXPPiqs7kLgzR7tyJYpwN",
  "key48": "6kCG9pvyHzqdAeK27A739L3M4nGVUap9c16uFrkSfPUsJFTYzJHm4rVnfU7aSjk8PBC79cvW1uHL1njyD6EB76w"
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
