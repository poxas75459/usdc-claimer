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
    "5TwE68vFR1o4V8NAmQQYa1GnFjqn7cb71WZxqKwT2B4fMsJXzMSCP1NjWRoaRYnasoijFnUb3Ko7GLhn24y1BHXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T6LueuRRP3QxNRgHTVSJD8N5oityuirNXHMJ3p8VaJTS78BPNUz5Wai11mS2BdCS6FCCTuYz88DK87reHz41ECa",
  "key1": "4jNCsQK3Z2b2DSAr5BHeD8gKJHiu7DFP8GkKrmQ1jMCKgAvP7eRRAwfsL59iUazAU8DgZjNMmv82Hx8aHCvauyP6",
  "key2": "3aU91TdZgk7BWBozAfEw9R628bkVoDXMu52bAaetaFpZAduuRED6jap5GAMMFpPuFEu7RtDcxRCyE8KJ8KbE3WyQ",
  "key3": "wucY4m6p4gUdipaiqbqCn7F98nkBkqhQUjpKi1TB8sXhC7Da97hwG4kK5DSjbwNiNEUtHwwb3bjYQnXCq1yosyk",
  "key4": "4fToJqJTtEwnxkPbLGbH7WPDfghbX2n3iusTqxuzh2Nwf7pDtTby3MYGjWiLQYzT4rSH2VwH9DGiwyFTR6KPTssa",
  "key5": "39Dkh17HyfZ8cPJT2e6NuxcKLJo5ATX9nYiPrdHs2k7L89FLUXBoFZCyXVAZc5KHYgRUaG7Ukqcg25Rere13CVvo",
  "key6": "5qXhjitbVcPLxxHZ4SXs2tFHmdBzTP3WQfNHWk4L8iCBLvWRmDRdcahwGcq4CUktZ3LW3yodBf7kcJwqZh4pYwXr",
  "key7": "4bsAoi71wAPr52gFMzv2SSEr3PWCiinkzzffQTfm5M7BjeFmE937iqNcKcpi9nEGThhabC2yQoRVrGANsWz3bZig",
  "key8": "4T9rZJQedyaLM6kVPjspDQgwNFxqBBXcVLUspiERZTUavcEctM8TdyCSNGG55vddRbfuwSdrzyi1PfXDsMtxraM1",
  "key9": "4VpwjxpTLG4EUdyQ5Q2AX3L9LHos4j79Zp9Xid4ZHS2EEbmYqdLA28DBm64ydUXaTKG2YMP7Z9v2awSfHKcMQxxE",
  "key10": "2UpcLMueGFhJUcZG1VArQTg7kQWBVd5kkRUAsCEMiniF8SvaCmVyWqZqTskqmMNZEE2tLnzkG3AJgo4JNUFvkfWK",
  "key11": "4t3Kbytuoysq7oAWPLGyukSu8zxQX6E2eR57iR7SpXHq94fcqyBmcRVj4EeyUhruqpE3MD4W3fbWoG15rb9YdNxw",
  "key12": "2V2fjPqnYvJDi5G4F6BMbXUxwtRjXAir1UM8o56VZFfNN3GpzXsjLiuWVbp6mqLWpAHq8JEnhkycj3oyVwQ9G1NC",
  "key13": "3KEuwHg4AkcZjEMXhWTJYsCKSzZAP28iT6cuibDuWamPpoSt9oHMvvuZt1jMcrmEgX3tjR5zxY61yfrx92xy6tzB",
  "key14": "5zDH3CbJ92kmDUTToUuSNBSpptHV69Cjdp1oU1QTH8N54FoWoKmUGEghSCPpxG3ufRXzw8K843y9EaRqhnmTqqeM",
  "key15": "sZAErUiTQEmhd2GgMMkDPayc8LskTgjheuYLdvVWLNGL2FFihWwo7KWbphbjqE8ytBEieA73T8xo6fKKc9tv4K1",
  "key16": "3B542VBDAD1x3XFdmDXkrs97MdPmdK87VEGVv2v8otFPnAzqAFQ5JpDCnb24piUUaVaumB67NwRn3TVzVo9m3xCH",
  "key17": "4nXAudx5x3tz8W7zfw8mxWvtxpcQ4CbZJEus6LmgXHMPQhv6BEMh7KnTzvCkJJ7qkxiNppYExSjd8SAaNYsBEZ9H",
  "key18": "ytFnqEygHtAnMDJq9PVktKMdyFqRTbkGzrfca2cPPdUTXqKmodMXDKJ7Y4RW6oGenZTkhtKJP4FjT2L66q2ybnJ",
  "key19": "3F3pSHVQMRKT5nUTF5Z5oVA4iZhjnYrFyEjUdfR7N6RDtCVabXGE6YAPaH2fW6h9bRy3Epw9kURSLVNCfZs3Epj1",
  "key20": "4zMV3CwR5okYzoSWSvntdY1gG4HvwjJaegSK7JSfJ4Sh77zE2yVaqTDLFTm8AnkwLfTgE2gAadA1Pa4kF7D4jj1S",
  "key21": "4GhscD264YrB2GJLGjByfSVNo8MawX1n3SNYETefoEmS1zt9mMc4zTn4zkjW321rpXoqwsa75agQBeG1eYgommw1",
  "key22": "HUWoB3FjsHsbQeTjMcSztBa2pr7XrDQMc6rZxHpbMky2CGJZVuV1SqB6YZ5XRF3nu3Emsqc4XpMLh4uPCx9w6bj",
  "key23": "8vmaKKb8CJ5UdWqj6Qmy3xkxK2V4G2xRc3Pb47rHo8dhUnFeDs2CYGVMnbQMNgxkUKFqKPtb7HKAtydti7ej6vH",
  "key24": "42tz9RtDPCjwKdr36j7j7NVJNzi6suf4t35Q5fMHa3rAaFJwvs819zpSPqSDnD5p2r5ogTNMKbVf7T1m4w1qBmJB",
  "key25": "4vvaJjHwREULuFa37guAbHd9679KBanhsytLWQexxGvid5RcnjANPnXDBW3LHh4Wu9y2A9czMjJVTJ7aWcPFzQFs",
  "key26": "4TXPG2UEFrFsh6Zw9ZzrqLd5uNW6KF2bQYYjzKbD2YLYNeBM3Htmg1F9eCd44jmx2XT7meRwyJ2RrHeoGGM9teSg",
  "key27": "h8ppsTwMMmNzCK3rvujHkM8VAVtqH7Kcpx9Ne975yQ6Li14FzwJPjccMZCbaARopAVRgKt1M1QFMmMYzJcxauQW",
  "key28": "2EcGuSoEHKmnjChwThhjsLMC8xCwSJ68pCVmfh6xiLViU4XLrTTSVLfj1KDknzU1WbTAJYjkavbEmcenJA643FXf",
  "key29": "2yxRXHp65ZJhbHztRmqLCxhN2ZcJcraCZmkEq1fyRD4NYRQYKgw8TF62o8xLi3VpRxovkQTd6B2HSjoVrcSx9YAf",
  "key30": "2r8NaptpvHJREDa726JdibngPEeYfK6dkTDEZ7Cc23jHiwcM5quXSWDyiy9sQx4MNb6rZjaRPebe6VHKmQTbkioy",
  "key31": "2gHDYtnxayLq1YruHizcucDvPxtb3KmQSqr463tuaPjoodX4BicBGnKo2C4zVxJasyzYwy2JdjjbdZpEwo9Paiqh",
  "key32": "m31DcUzsmHprwdipTbLBGsfKAeqxpGEAbgCEcxC2uxMew7fPUo3SDB8Bj7tLBQnhgEBwBZPxBCvTwqnQE8aXDXC",
  "key33": "u4B7sWZrTWSBo6ADDk7AwiUeYYKh13D2SR21SuVt1hNB5eSrhJmmUhvY4gWT7entJev19hu3ALTiewPmJHujbyL",
  "key34": "CLLzdvTUTQNPyGnE5zbDRsr9m1hV7AJK1DcC1FMLuRHHtgisezvLM3UgyQcNiJ5Liy9vbCirWZ1UWGV2EP1e9J5",
  "key35": "3ebZC9srwN7tMyU1w3rXLhEphVpRNcjKz3RxNZUjkeNfPu3wAdJEdyKLEdo2yb3ieVhZJu6U3yN6P5CQn7PFGGsZ",
  "key36": "4uiGCq4Vn8Y4kE82RfsVCMw3vwLUagV7iEGBr1H5vqxTJ3kTi9TgpoEmszM6jnTDrrfMH1j8au1JQFW4KcbKgKS4",
  "key37": "274Wzx13Tsy1Yg5hufRVcqFECNvSNoWSHaz5uqxfLyTerSxoo2PuWUsBSyirizgLk9ppTfAVFCL2XFghzgUGF44G",
  "key38": "2S4ZPLmJi9NdzTobqaHdW21m3SyNJDTra1JTzxEXLA1UBSTe8QSHJaKRmBU2HJN9ooM5Kra79HRUjm7U3X2mhSJN",
  "key39": "55r4Y9Ardde4FMSi27vibz6rwHNLULNdVXFT17UZr1kE7i16R4Vhm88hDnY7Nynk9NUMSUhymBNizqaZjdH5KuYa",
  "key40": "3YxKhH94vhE75ox2NhBLTGd2VEmg3syRwrztWwX5nqWSMqsQHRGLADKQMCYypmK9h2dpFv7kpPhq5Dcnzgyuhow3",
  "key41": "3cYPKhNzG8p2GERTyowGdMTEVHsb9eGkKM4LXTJNucLHfrTemw7yzhDnCtVd3HjyjyRtVwfdjYSyLwTU52NJCCKB",
  "key42": "2PpYCVEcH8A4uzyBdcg9iktKeGSr4wEVSY1A6cMVMnaqrjwYrbv7vEmJfCBLtt5CLpK7Z4iRAYFRD522BELXqVSj",
  "key43": "28sSxvEdeqjqb8idwner4uR2ow48qU9vCmG7Ruw6it7Q3rCNLkA1QEa7ugd8zaT1Zt1izdecC8ju15yeW9bt5YpG",
  "key44": "czjqZbLuLpttdk1Z3tTnLW7r1yBTSSqjUs15XCypkWbSF5ThmguUi61kf8yjT1bdrQxwjJbqBL1zc1LhqpHuvMu",
  "key45": "24APqwJdSiVvi2onL2jzg7QNGqy7EiH8utF3giW4qGK4ai1c8VYEcieRGyJzEQFr1JP7qzJbiL1SAYhp21wUL1Gf"
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
