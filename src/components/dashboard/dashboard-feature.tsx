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
    "rHV3wFQ2jUeZh2CpsdRBNp5xuX6x2BCHrdVnoHb2fWb9buvwY48V8eSjSh8d3RF3SyRGt4fceWMkznTRoLXRJPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kQWru28xknjiEcNX47zaovCoAM7hnqY6CzXkM83ysktoeXENXKJKP9KZYRt5kEiXNXurKom2mz98ZFV6RusxnMu",
  "key1": "4oe4cffkYLuhov7kCqhCiMJubamR7qojfHS9ZERGgyLBhCP5LgcgBNTN2GTi1wdKMxYgEnutVJujbSUUd2wKw8M4",
  "key2": "3ht68fQShoXTRBE7dnVQmrUjoxiYkMdCAip2141wZpqzcacyvt2kT956FHrL9u6DSrh5E294Sg2pUzjvnSgipfC4",
  "key3": "45VctsE1JG3RkEhELaCHqN8ng8LDHoXzCtv8PcRFWdgmQa5YsXvPSYmXKfvDJhVxhQ2H6Mtx3fsCvH77FDBtWtFq",
  "key4": "2CDzLKNKiXxShxT66Ajbu4ghPgJR89seYNEpiWoMC2zrUf8Ry8tqmE5iRFgyFE2v8GsNrZn12ZgXjUkseF7BDTks",
  "key5": "3icnwpSwsNQucWqwBiGdWA96YGcwPJqnyJ3mQGveVL5TGCc66fXz5pBwDFaW33XPeqP57PyaQ5qg8yuuTzcrY9pi",
  "key6": "3D2MWhLnQyaaniWe8mvZyem8a68NyDXuqVJR1338jp7dACriw7kXWpZBdB4K6FM5AQRHJWqNLX5VYZbkGLzbKVQd",
  "key7": "2kyguEJbJ6aW48WQNYTzatdc4G9MXELrbvJQkVKBg6CiAq4L5Z4NjnaazzzGHS6kFkLN1ZxU8NYVbbDK57zM3DTm",
  "key8": "4FL5XDkfCJjZkqrTS2DzGoZkmMvgLfGiyHeQ1idwHqJ3r9T6QEmSEZ8LE48CmXjw8g2N3eM1YS336EmR29BrXFqe",
  "key9": "4hjd1nTtrBvAtaUR3vKyd4Edxrx5fQZBiYa96gyua4S8GABCE5z5pK1z2xf64jHRxCBbaiRPGYuCdbjLViiF46XW",
  "key10": "4Gj4yHvaiSuX2CvzgGZyNe5VNPrZtPXc4RxwxygW3bYCVq7sBGN8ukkuHa379EZdijJqZdVGJFdvXAsyzzPQxC3H",
  "key11": "4sL6X9Kk1zrpTzC6jXQiQFejvPsLBARbm4tB9cG4iubWjHUDenDQgJp3eHHA5VmHJ7fAifjSaVVJnzSC3Njt3vZw",
  "key12": "4yh189AF2HaKp2qtLP2J4XDM4zgewsZpkdo5AUA3NV8GnF8KiiusLYYxPeyLMonHnCeDDLkHtsD3mQcUNWTcY4Au",
  "key13": "4AegWoJA6CTFo1K8cPmyTiRwBYssGHNfoqXTeJKtirXGTo1xycV8NcitGNgw3xBXKByqo1NUQ52EWMYJzRCqa4Cm",
  "key14": "4MvTZJbfS5jJTRRLREf2fPyF14ZrwG9dpT2a43gNKZdBrp2Snv211HHEvpD3avpSc3FieryuETkMFxeQZHPfFMFZ",
  "key15": "3LeeoazyPGkETKGnRTYwVjnEPfGj1ipZuY2fCSMxYqEPG39Y7cLxcXyJpjYdUSuAMVRMRfLNFPkLV3kvdnpwMpci",
  "key16": "wqCAFVvwZNnxA6Mh7hPANB3YbpkazFNn2Tn4pLbcc43aJyuHB6sn6rVNbuBgCZ8y9EtP2FcR32ZU3cMyqL8HscK",
  "key17": "415NiCcSNbESp2otSEpiACZBi4ioBgoRkpsGszMptiCyRQBVUQ7QZAYCKGM5PWKeUWetpQuAKBeVWR8PKyCcqiSN",
  "key18": "zyLUnKci6zeyCvdR5e8VnPwuPBgKieaYTJzfDhbWUo4k36h2wgXXYvGNajUC3v4KNEutUtxUQYMPpgFdcZVGhLD",
  "key19": "5AKLxq5qREKafPGZmhiCdtUkGFCEwnwH23cSnYmkbYVRxpqLcLdS3q616JA9S5JB8nYJwr5U1zbLNuDbYapq4tnb",
  "key20": "2Vgf4QjqifwQMYy7yz1GYJszFgz9oVZXyADvSxY888UYNer2iTdVxcFVG4Up9eKgyfXA25M65g41MgvnCn8c33ht",
  "key21": "5EqFXfCMEaMYvk23weNn48qxiyTYZbinFxg8X7ndi59Sd6b4uRc8ZrJdf5fTWrcLegxDuF48G91AKVEuExuhe5Nf",
  "key22": "2VnN6ZBfTHTUgGB46uKzFJTWHyNEReurZ9Bk3Wd6grpsvp3rovLtkxBtZHtHm6LahdeMsHPCFZbooXcbEPLH2ZVm",
  "key23": "V9cPdNphTTHev9Qm1em1WHaUQaomDDWFwmTMb6Z2kixn4JBWLvgx6qVamdfiweTTcXek6DCRjmTT1XSf6epCRa6",
  "key24": "4HmGK9ahkDNsTFRZHntUEP69Az8w5WdjyLzZPNU4qUVfS79GmqAoicgDxm257PsDQBfaN2yANWb8iX7pHfJevyor",
  "key25": "2oX17Uv3mZkyey67tE4nRUpqhPNyZQa6jvMiUJAvSfTTnZ7WWr4fM7tqav5XwGMvoDoRucRzibdnj5YLQkUuj6bM",
  "key26": "35yB8cMFcQMiGCJ8ZaK5tdugN3v98s3FDjVth3BLWunHRKWc1a9ms9Ca7Ym5MzBMsmywAwR63qoNs9hUsE1RQcFv",
  "key27": "4XTCKgV5eN6UCbzz5rXZ5fJHL68c6qEmshHnvdLgmWBWHw7zcxn8FrmwSNg95eXjX88sppSe6b4PM7YDRezUFTJs",
  "key28": "2Vu2wNgVtp3fhS9Ci9gv2tQUfPUNEayX87wfSZLZz5SJceTb6XZRNWTdHN6AUQ1qnMXa6CMfmTQ2tmTfU6VJUvGJ",
  "key29": "3PNvebgrT3DdKorix6qo7g7YrEsPytfqVebas7hGNVJ3jYgerTaN2yRvSRfPjiLz5kNcTKhTJ1wCxAeKFhczHQse",
  "key30": "2yJU72VtLt7HrEAfewjYs5Nae5BMgcsFYqMh4rUyaDi4y9mVTkp6BNhHyGsgcDeEVV8eUMMC4hKKR5R8ne4LDUe1",
  "key31": "2J7Sq4XUMDNXp4zaWBbG5YGdSNS3Eupwu7nskivBE3L3SoPRZKFsrvR2bEMjVTJGw63qcbVPP8yd2iF5jkmsLx14",
  "key32": "2LbwRQUYExDoQtxVZqKqY9c1yhcTsUfcq2vXAF4TwXj5rtdmdBR5dTBirLbrzHimUnPWuT9p9pUsXe325iDmSbVo",
  "key33": "PPuYPeT7Uv7KyZwMkegxM59zogkhLSokf4dP1ihmqjCkSsreSbkoaTZ344Pb8SbvP86jdAShFAXTNBWoZBmT66N",
  "key34": "5rqQNwSAroFKTHcbCsN1SPATmE3rfGRXkn94bCuZZyLsGaz5uTshKC8oG6vZurYdarsUbykoSqpTpcph4PKLbEfU",
  "key35": "3kRNnm9wfJWdn6dQuT9Vh79pGpvWK8Dt3jjw2pPjm3AKfUjUGk9hgsxCwseZs7dfBVvcSHBjmHNWgApshAvrbPpb",
  "key36": "4U8Ypkb6KSF3gY3xVM4jTNcYMdAVBP2wK2GEby9y9MvxjUHP2RKNMpeihziuktF16ZJ5n8NxDybtZSGPP9WwpNJi",
  "key37": "64zQ7xogamGsSPQaFVAFER9gQXv5bLXEvELeNVARMxu7tvGHyMQGK1bajEBzUxjp5HjkLCzGkpy65CTS3H6rkrzC",
  "key38": "651aBNs2nbwdRAhRQVmYQe9Aa9kKPxCz9RWpdCnAiEj6F8so5uvU4F5rguG2c7bKWMvYTVmSACBrMgjvc6PhN4pz",
  "key39": "4KGsUbUESjKyCcpNMSvuyaJvcFaJPXo6MupGVAWMCSK7QxRcmYMwbMSVsGvFvyL8bK4yFTJazEcYuzE9HfmnYoWA",
  "key40": "4tiiD8LQRBVAYDsxcZk7qQL29P1WZjg111QpUpwzgsLL6n31CVDiCGKmESCYiXpViZHkk9JPJ2tGnZChGo8oaRww",
  "key41": "4BvvZ1XfsJp5HFhXf79UJFv4SkjTRf9gEmmN7X7LKDczQAFAfpbxf8BABjnDtHNFRXH7QCoi9PuMjnZM9FAyqzbk",
  "key42": "qPcgWfsJGD8nUFSXfRatGukeweQqao4CCRj8VZYp8pgN3aWjU7p4QdREx1Fift4sQcQuAPigSNyUfXDAcBnFbQy",
  "key43": "5rEhWworcGEPo45U7W1DdPtPKExLJ2cYwKX8H6YPHCLGzVRuBxLchjJkC8GAHb9YZhMRjoftsFWS1YeivtaEiyiv",
  "key44": "YDYktx4Q8Kj6PgNk8TVU1Na99JKj1FYyRHWJgQHm2WiUz9rdAKVdNW1obdZWNpoBVaUsyjRJ5CFuUFySgrPseP7",
  "key45": "5nDaZn4MJTG2cJVXQjyhG3vQhyC6Er3xdcwFZeZ7zsc61z7RJ3BHC6C78F3AfjsBu3GYDHhhkGyqBGuqPNNDqeRU",
  "key46": "3afxEJ1x4k9dkhkkVXPoBKZmfDuSufss3yHgeyxLvQvB5QoCs6EnSNJdcdfH3wcP7GL7vurPsxuy3oWpBnC9FdKZ",
  "key47": "5VPQkHzvRjieANiVMCBSRQ5MQZqgBTN2wGGx3FUBV5P2XMq84ZCxMzUh5X6oSrQ1UCxbz97EST7q1bSYKELyV1ko",
  "key48": "5CcuAaf8EPao7z72ShYcpjiErNtrSKK81mzss4nwx6c5jyKHWvyzY9dzXDGgxXEW6zdNAGngcDyjybHg2kaypTzB"
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
