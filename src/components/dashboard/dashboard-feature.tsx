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
    "5o5cHnNKRnC3Xd15mAsAF4LDumx1Se6e4venqWaDU1JawUwSX7b8ss68Di6Bfomqw6HExP9FfZFE7La7PJT9pSok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "496qHwXyaYEiSrtgo8tnUiagr1bU7mCZyjjC8XodL378A4BWQdLLogczKCGK2fkgjDLEPooVifyw8PtXxorHHjUP",
  "key1": "C24yhuiHVDTrE1ALXedor2ityQcFkUk1psBUqXnuMAd1AYwv6riLQYajiS4oV2T7fgYTFqpeQ4wkwPqxySCRvgA",
  "key2": "2hFwwFfQC5M2LWE1YwevwZtvF9iyfMP7xbfNWRahNLPs876dGRnErRZ8pSxBWDsCC7nirVtVxQUhfotUw51RPyfs",
  "key3": "3JVK5CJrZazYywJe4i8gM5i73Bfue23CeXp6HJUWCnzWZWhDMKTZAZ65jhS7JHyhr4vgcsh53XEfzYwrvriY2LL2",
  "key4": "ZtwWfsdebFycf4dKYzudDUPy5iXPdqeDMjCfH3Pq35S6kP31PzvdS1uAL8k1iCtcZTmfFYgwqMXtBy2dW2xYMTC",
  "key5": "3yks17C1C1iK1WBrub4R84XDHjcF1DLpwkPBewb4ncSxBkYUEe9KvEFep41N7NFB634F2mubuF2k8KS6JC2JNfcU",
  "key6": "5L5BNvkKyhJhjTs6z5qAkjonbqsapHrc71f12E7W13sL7mtvHoaHK9mecXPm8VcRHHxJdPJ2pagm1dDfMkVVSVxy",
  "key7": "2cvxH7ztciH74WQRnviM4B9RZ5W4zewPFbxDV8hffv7bwNfq3zGrFtonDw5qc35b8dvncmQJBmBnsRMLzvQMZThM",
  "key8": "45S8WYcwjdL34tYG6G4QjMaNDbzHXbiwXa6EDMB7389KuTgof2gViLfqYLpUiQQcotNk54N9gimKE7Vxb7VkEMwX",
  "key9": "29gxStMX421MfAD2PwAG34Rz2HzDYjY89XPX5qSTky99LXUfoUNNKAiJZtD48MXmHmXbTfcHTxTi1ECwuFD7vFEY",
  "key10": "27ScyoR7xtTiGmBtJJZP4b7mMUbsAEZ888TsYmucyfnVr1wLZkRJkZpWmyUBU14NvPsY7ZV9bpmr9zRjbTjq86NS",
  "key11": "4wG7NGViUYYPzKtz3nAGx512cQBe7mcSCpdMwhoauCLTRTcfiaASQBTRMdKLq8rrNXYNMeVGg4CS4Lnpao7UC6fx",
  "key12": "559AdmfoTUXSUoLVvtf1544i6RBBndRJoDtnsP61u7jHh4c3RuozMvhkJjGkrb7suEoRzxa1ptmSVr3MkKh5gzcH",
  "key13": "foh8V6Niz6GyXwskn3dRcgiCkihuxsUmb1dgPUJGVVN3EA2d5VCMhN2PKKz7uJ1Ep52qgETag5rmCE4cJTVT4a7",
  "key14": "34TihQWHg2PpPeURV5JxHAUZtixbq7cmL4KvcuLbe8Tj2nhg5bfkECAnY9nzWBcgSscvcJHYYvsUNP1NuFq6UBPL",
  "key15": "sCLsM5UCmLggbAaHwMGRJpLdnBHoSrq83sXTRMemPvNtNa5bq6sRX7ZbhgHNopt1TNSWSDzHSpi3QvbJasg7m2N",
  "key16": "5Z6ThG2ehbAPXR8TFsztyG623T2w9RVyTtNidN3iZCBomu3UrGG8bCYtz4N2L6P66qPtiCrdoNi68vM1LCa18Xpz",
  "key17": "59Qwh3ERbmWVZU7x2LYEZumB5bE8mkkqydoTNVTEprQHonohV9EGhPqjzDWdgKoGRz8eJBMMCCWCuzMg96hwe24F",
  "key18": "5Kkjs1jTG4TJtYxnqKy5XiWSZhf7cgH1UrxK3B5G5fFg26qn3Az67SZdcvBLbgM1Rks1ngtJmnFxUVa9zLqwX8W7",
  "key19": "3ErYcASNEPtyVXMwcss5swoqjJqD7z992DhV7rb3VMV148jBGLJzH5PtSgQVpiSw4XQpCQwH4oojzNXYnjRBA4v8",
  "key20": "FWei9Zzmt17bnJYKxahbAS1vQ5cvawGzLYr9pxPgrinbsKZsVnW6BhnQhwhP31dJAccT1JV4fvvxxLub4d4tYRq",
  "key21": "5qre8LVrj8Km471J2Uo7WW4c1FwXi9HByTrBiYyU1yKWL7hPHgcghCxjhMR5pK94hCe1DChhP6Famdz98vJUUTru",
  "key22": "4ZyAuDYTFzhjyv3LCqHPgrNKCC7eNdKwasS6bMSsVeU9hMpDQoFhfL8QzekJ5SoZnpfQhcqRNKu3q3T8NcyaVwNo",
  "key23": "3Pi9nXBQQ4zWq7sgqnVp7JUz9nyhnGB4CrEFdMR5HMViGC8RvNWkLuqikyyQ4FCmxqhHoveZ8G1dUfD2f4Do2Y9N",
  "key24": "5TWsqvWhcR3jmhFag3ViXyt8o9hcWntpogTSFv8LwEXSNwWksttgJyKQncB13wTA7TGpPxsvoJcqtGDqZhY2DibZ",
  "key25": "4nXFKoW46zYCVWUfZMRKxz71fyfJSeMwn1foxAhD6N9ueXjypqkxpvhhH6fuU5QKdpTS3beLhXmY5TtDwxK6a7Ch",
  "key26": "Uo4TwYkfBVuT2TSfisu7XUWDhibk2zYz1QRdni57KyeJ8cd42v7rRWPdBk8cVbq5xHhWCjp336KAwgotcKJYQio",
  "key27": "4kUkSg4ccCNNNNWJyRYUYgRw1UJMGM1U1w3TDa9NAehX3mbgXdtmGPuiuXY44rWuhKraGWsWXPeZyM1ZQAfBoQLm",
  "key28": "5MccRqNTSfrm8i5d8jW7kNjfPnjN4U8ieFgAfeyEqwga8r8EM8Y7TnJk3xHG3raTZ5vjLhMC6kegmUWXLCSroe9F",
  "key29": "2Wvx8SvJQofPuidvConUfEsG2tiNBL7PTodvfGwATyayEUH9wVE98fzMA5eVFk9QUL3mkrTpuhMCm1KThbQNDMtF",
  "key30": "3dThkmaLSdq7b8RRVCXq2x1fk89QCy2WsDLJtUtsfxDoUTgtWrFJPM7YwryPeNhqzANzqsXQYhae2mEZDYbn3dge",
  "key31": "rqhM6uMFzUhcrW6VpZYwh7JrrjqLj2A5YPrqRcy8s5nv1NmXrC9wwKV9YpTKH8HTWHJoLyaW836HKJkeUsVaLPg",
  "key32": "y1wL63TmjbUxjtyXsaLVyCk2sKhG3VQEkvW2MrMoxh7Z3bZZoZ764QY6DpX4UfGRZXtWQA2pKEgFApCvqYVE2Hk",
  "key33": "24cCdceFKpjXAQWaFTqrinRzjeuEcDrzKVaEtZn5pRDLeVBL6E7aekZQcYyj92mFEXr5JEDTx8km1hUM4Gm6pt3x",
  "key34": "mmMW3aCz2TeoxKnXeHeVvn5YLjbm6sYCvMaFEuw8zx4KL2gQR7XdamkvsRMFRAW94HB3kfCXoiQawiDui5CUh43",
  "key35": "7zabMfeUVvigya2SQs1kHqw3bvP6Z5ANrqHJipCNaE91Ag5BrF3pkbpzxbBfFeJyZBssdaEMdGNFDLnU6SdU81K",
  "key36": "4NpK8BgNiU67rChWqYp71sQNPL7feTmgsi3x7YJLBeHMc5LNs4wMwd6eYacn8BU3JkxjBkGhH23ogYrqKk5nTfxV",
  "key37": "5SGW11X2qdzJWsbZEZdAQRbXDF2rdrTiiR5pTcxGBVwHzCcsPT7AVpHCkV7KCunMLhCg4fpHCqzm8rgudAqygxVN",
  "key38": "2tHt4BoGmLa3tjt5aLjXXv46ZJqSzRwpfuHcMDCJsgdrRVhRVtzm42ZbzAuBWxkc5b6FUBjtKXtC7oF45R5YrKUU",
  "key39": "3TPdwec3XTNjagYNPjgMKq91UiuDvvHw5YiUH4CtjZXwEv7eTW3TACuMYCYzYq9zcrYzCdNvL3Etotiq3FAHcPgz",
  "key40": "58bkbW8HC4tP23gCKBPa9a3yySax6Ww2S5mmLsGNZetRoAhuQqtw4UoAEsLM8QDTW5jSuDJ2BkqD6XqhXfQf8e7M",
  "key41": "EBb3U9gGhTbHdSu2dqF57C8QxBh4jmNrz7bw3b5E4UqQQeZUCaxg7rt7ZPLfBztFzKciBcXbabpzMSuy8diR1pf",
  "key42": "5x6FJwnTmpngjkvSrRBYUPLjtsFgtAufQR7syb7sqoiE6j3jAuRQBMaLG9EtN4fZk32ybZhytx6y9JKcs8izWwzL",
  "key43": "5GAV7ZCBLdesx3hegRtqJ77VZrb6nSiaDizhZcSH6VcE7Aaiuys1QmwvTWmKHvoHRXrSCQ1n6UyJ6oJyoc1Gc4WB",
  "key44": "447p7jZyUBMsnKG9qq47U7GgM7N5EmwWBELtMgKZztSPwnLXqL2sHrcktw3tK7pVrn7pNcwKa6HbfV79DuafxYdn",
  "key45": "613pdMHRt7CgfEPjjbM7fLcpvTbAtqDFNAcigyXzmj3obcM6uVPTUVfMyx8MrGBTErLjrgRtm3ZZNCm4hhcK7Mzy",
  "key46": "4xTazb2b3axcvAkQm5tJCNftTMq7133fNyyNYzJQGvxvfmSARvmkyf6AxKricU4DeVUgaWyWFvbVaC3GaAFwSCuH",
  "key47": "62x2mULntkgHcAYW4dK1dySK8zEdwF8XhPtT7BKAtUPQfznUzbRmBjKNzC15YffBRtkvQsVE99MVTcaDzaPxXfze",
  "key48": "5xLhuJvNRdv2FhDtinnXBA96nLotCygVN5AJgUNuwbx9QdAKgjJtUWVxMPJaKJ8nv5wsPbvdu7jNkvB3spt1g6xE",
  "key49": "5yRxf47Fnna8PFHRjEsfXsRvLgThVGwBxxZoTHTsotDo2djcFQwLXT2ioNSnC9Tt6yRm9VE6qFvvvTGepe4EXprb"
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
