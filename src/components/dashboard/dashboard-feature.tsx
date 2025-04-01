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
    "3WPviCR1MUH7omtJ7cqHqN13HuZrktXeU95qh8SkrQRzG7AFvXhfEjTUYYnQwPp8ZTuiNPGNsMGHkjhKHGadrSQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dnKs9qS9PUgKvxWJednHKURZKnn41XUKwBDvA32HZm83Rrsv6VDrr7mg6UKawKALv5miqM1MShMtPShnmadSjMf",
  "key1": "vswCAV7Yweyt8HtgLGcv5U2wAK6hdtFoXKVpA7SEXSdQ8DRSLNY8D9hto4aWjRFNKV8QHo8P9CkzH3enK8nwtqZ",
  "key2": "5LBEDBnjJwMteyHgcSCdbGdLipF51QZw9wsbcxFB3wnZBUz6m4BFoDZGgPEpbwqzcvMCFuKvmqaUCeFahpDkHjdg",
  "key3": "3XmWvVWhJxRGyCtVBCdhwJcEcD2AwRXnK5grRXFZh1tU7thG1cSod44VaPYQQCoMUXkmjM86wbowbfDEHHSZN3Ci",
  "key4": "4T2y8K1rXRZECMYB7QyZm274CHquQE2Y4FfSrVGciREUtRy4NH8f36MBZg49jKVAGCj2rWr5EVXSGXAQ93Ftk8EB",
  "key5": "iF5MGXDyb5uv52CiPhEJoguiSYVJfWS8pwvnERussavicyNWaxEXxKoHneKzUMdo4oPahu1X4sJXCofTcsnygct",
  "key6": "4EdkMUg1qEDgF1aZSSJiN42p1CeYi2VMneMs2JJd3LTkVqkgqLKNEmrc9EPJtfwuqVcT8L98iXiPLpiTjiVUHxW",
  "key7": "51hkFsshJK7TP5x4TQbU2E46x1xxTXHZhBnGiXfmxC9EkaLduxpVEkbApjTRZrpjx2xShK9MC7cFAH2oDNE34ZTS",
  "key8": "5oJGgcFV3jmMMQDhZxmP646uhpQxms1kCxG7oveN1smCiCgta53ZNnHPPmBHKSNc7N8QWz2W4XFprW7P9B4gfWiv",
  "key9": "4AGT9Jfc8PGP2CmHYmWrvxeFjDf8UX9F5MasctDUe2rtQDjzHvcWCaA4WyFvbxMM39WX7DMfvqdbnk5gEMRapFGE",
  "key10": "3y1nYFunsefRSrHYHzw4wmEfVi5yj5ropSiptzPQuAKnLhUWCkAWK6rQEVGcpLGMzRSX1DUwTuas9SeVPSaSP5C7",
  "key11": "5QmuZtyREUAjpKxaFW7suSMgujfeh75wfoJk9cX8FM654MkDccXC3t7KSDjJViYvu8Vk9LCUcZ6gjZruMuPwg54y",
  "key12": "4cot9BCDLJrtWhw9c9CWnV61zgbQMm74k8Zk6VPrPYmW5tPKiUwefajMJgiCLYMM8RTf2yrc6pwJDkNxPk9dJ3w5",
  "key13": "5uVbY9uaoh2KKhLc5ze1Ywoqqwv7VFmxpSRFVCnusDiGDR7KNB2ThxtDrPNzHoQC3tEKCTz7vdT8CHL127hPhEN1",
  "key14": "2v1sWCjDbcB2FLxKdMz1CshsroFky2PKeGyxnoPBDLr8Y57xjjWEn8TAhQ95fv615bqytC89Ly4aWz171eYrkwDQ",
  "key15": "mSF7tLw7vFbL25snBdaqVW9Wo8y85JGNgwHpqcDPLWahhqhACAYNsXm6gwPETAt4oFkXfZZGgXFiRrt7qy5XNb1",
  "key16": "U5CE1s97u4a2sgYHWwsnyfyuwrstC8TBTMaMfoJcRGJSywnxK1Zy8Y7Hhks5orLMPngXWwg4qwvzuMfoSRF66Ra",
  "key17": "4jNGEZ9jwzKJ4Qrh8wD87eCTwhEdeB5fp93xjpLqjdPnWePRg9HxviZ9g4P6yiuVuzC2dnfN2BDwSVhRUnxoAtAF",
  "key18": "4D8KLVaVJBj72fSYV24EwabiLwFuWr3nsuhG32rdU25JXdodFQ8gffmn6Yeat46DePtcNZekpZRoBVXUJeMaMEMn",
  "key19": "67Dysy8smdGBdYK3gZFjELHL6EXkxkahTfDr6aPqMWPeWunXj4enXjyRqSi94rzrfFLGxomxULdzFY92JULHhohs",
  "key20": "5QffQ1M2EDyCsuSb7wBgAHPCrFAuEVZq64uorysAcoVSDxYqeWCXxs7EN2nsXrPgxdv3wEj2L8RpKMcswioMxCY6",
  "key21": "4vcCg7RPKMwMtGx6NQWDMKw72DSpMoSaMLEAip1YhUwjFPFwx6WQ1LNXtLs3TBSayrtNgWJ77UvuPsYV6xMHthq8",
  "key22": "rJyZsDjbEnZGsSBmKA9Y5sRd6Nr48JG4ziBchsKhWFxKAAjWesyPcGPfsRvuroGyYbPtabyJDSGX22bEP7oyHTX",
  "key23": "4mXPtKQ7U8NdoYbB93jtmh5rwF7dowh1WC13vuWVUn1Fg8E7HZjEpmA1AQGtvZ96wZV939RrMDzPMPYLtAoTsgXx",
  "key24": "3VtPtZVHyp1VHMBkX6M6hgiJYtJaKX1Pz46NQbBzTxYJgT8GYYFX3k634UnmhexYCQQvaxMJkexCtFF8BQwH6SbR",
  "key25": "4JbaDcvcz3QhPBUe6byi24usLyETzxNcc23A9tjXuyTCCzR7in9zW9xkrufDFrievP5aLg59XLyoVjzUj7rhGHQ2",
  "key26": "4vg9M48G9k6irkKpE4HQWahnnaYQBUf1ud7M3Mv55uYsUzHUXSTxfxKcxssoqtB6FXBgvxezP85oWphSZ2SNPmff",
  "key27": "YhakC9p7EgcxCLbQZcJrqeRsNfkYvkZ5F4W89QsN9ajMLqEaxDCHitshB49GRMPPp1ZB8K7SVorZGnk5TgAk3Bx",
  "key28": "12ACV7NBNPLDR541EwFVbGW9SeLhRoofr8Nx9mxMYASMrCZawQtvr4gDoCauExFJDSMxCESy1va6dRSJkhnVeMit",
  "key29": "2ckJ35tZypTeHGJCRuQBmXUcqG4P2VKpiAcAgE2kf6RuCSe14T4DXMh3hkVGvAXBj9b6Ynbe3G17e8ofMeNFBGyq",
  "key30": "3zQazgGNr4khkkVv6hgeCJcLMVqw41PFDu5PzWqQ2DzguPYg2mfC1crSuSdc7yp3ZfeKGWKwxWhKAhZtyc96eqPm",
  "key31": "4M44bwUDNJbwRXGaGrm1q6PswdK8oxi4vDzpcs7iTaDAnMbVNFAAgCZNayMwBHNg5kakGPMSqCZ6TsCviur9w9pz",
  "key32": "5YLfpCLm5mdRHSKTSbndzutb2djKYiWQ9HRbBJkZEBiUXoMMKsyQLGMEtL2nSNZB4G8vFPbBkBsyThGtEsCjqtWm",
  "key33": "3Vz2Bxcip1GT32rkWkrv8w6aqKRsDiH5qyuN6Bntx9cRNvHuZKWdayZBEAJiuYeR1mEkyhiZYqJbyNQC8z1oriDd",
  "key34": "5iueirgpCrLfuLT2Dvy13v82ekHENMngrSYe8yjkskWpaWYZ9564AyncauCD4fCutU9bKCV82HoD18d9T2mNXKaD",
  "key35": "1TZgiH4r7yCCPnHXaSt9yuDTQQUKTPdUKQiRvjrecCQi6VZwNt81n94cRHzZx7aviL96jdxAp2jVsV7bLcechmk",
  "key36": "3z12byAxQi8CPfn8UeyTRokc452VadSF3ar9nyFgVtPUKakPtuDwj9goe8vUtoexcNNTAKJz467d13eNpMAj6BC7",
  "key37": "52fJkDCGKZGSY1u3srGMB5uAtBAii5gbnRMfXk7L1GDV5XHzDdjk7pJ7tF3VuULF6JnW3TdUfx2ZyGLrzJYv1e1t",
  "key38": "3hzBPTXW6t8Wsv11kxAmqFRHn5HuzXL4k4EzhGzawCG1P7moqKFE2PxFb24FwiL7C7ZtB5yP8rHSisCPwGRPk3DA",
  "key39": "2dmtKK6Xv7mXUxxd9pMpfSkeefYroxEH7pg4fneRDRTYi85QzfsJjwX6mweUWuKqs6hxP4V1te7juZ6H3eEt1sZo",
  "key40": "5kopgVwciswwW1YJRj1msgc4ag6K2CC58iCKBhizwCgYvuAhFjy7PqJJmNwfCXxqRKwYfT8ct9n3HHcr7xhUQXNW",
  "key41": "265GcANwqvQRmNaSawajfNVaCBoNSLCJQc2q34mrn2ztxxfDq67jQ31Kiq1rusYeiFFZgpv3DHxhSLT2QXhZ2twU",
  "key42": "3jMxTWAWcq8P93rgwmb6NoD7g2YJp7oGKq7NuKMeYyG9EHH3vogAijcvTqDPQv1PyKATms25qeQ9cB3hhxw539Gh",
  "key43": "Vi9psGo5nAkvmEtHBSLNmFzYALf23JugahqFho8tKDiYGFsVtj3j4C5quyyvCmCK4hym31rQuVBC4yBmxqnSMJk",
  "key44": "3nY7y7sNmZZVZ3GQHQJBtsH1pkRwpDEYL85jygAmx61UTYYdTsMyg2RSU4cqsokZY3VfkAZrzPYEvroZX6bk6zp1",
  "key45": "3AUjcBgGjZvVUJw996NtRZjN6y5pPgHaQ36fa9JeZmirc8W9BmszaYHrwjazx5qJxYCDFdjhjUmXFZs5QC5PHQCx",
  "key46": "4PJpp3Kz9nu5W6s9o6goEF5oMZBvtV9HUsmrtBBjggVTzsWKeF3MuqAFVK2KCtu66EtMCzeBoVyaJLobfTkkxxHW"
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
