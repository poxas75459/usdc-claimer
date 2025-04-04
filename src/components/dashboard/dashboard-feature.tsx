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
    "34SyBbjhP67RCnEV9ideZNRDAneSpPAJbJWzZtT6J1tHYzcQMaW9KvsmJfTHvLHVUBUVy95ushhUbwA82QmUyG7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nBjz8GNqYos1pNAm4PvzB8ezSa3jxVMFjv6eumAmTmfsnS7fBfpQbpxAtv6jbv75uTfGpoE2sQCUBewnv2RKGM7",
  "key1": "62hhk7ZyGQoaEVxbeTMrXA4R8Wem9aKvss85NC47fv4tXRzBN4sPoTBnW2NaJfoDc78nfe6hPd45AAsoTsErDB8C",
  "key2": "5niRS7ib29Y9my1cPcyeeV7XzF6ixWf5Ej1FC2m8aAMo3gqnaWjrxZzSJj4qQAXEWWGTZchrRQfDEVgjvu1vxjvn",
  "key3": "3ubVWUNSG8MTQDLfWb81RJWachKoM96qAmfVZEUZf3pEvfoKXCzZ8o5mCtSFcTBoeDqr2a7hftQjbk9r83575rKD",
  "key4": "46VxiB6dsaxC4hWtmmNSRhWGTKZx6Vznb43kBokQhPhYru9VR7w14Kaq8q2orpzFxdAxLdmYYnfouyZsTuYPmayY",
  "key5": "65EHZhLzpE5DZHh3tQBrNzhrufezfbAGyveQ86ZBDCwdazajvGyhGskLkDtuuvcuEpcDC2U6mpHJse4GRCvH4g6U",
  "key6": "F6kmsULPcJev22M9XLmtuf6pcNoaQ37o11W3BVuXuRrQYB7KDLe82Y2vJoJJaKBqBdnPYvNUjLwU4eHhaL9GN3x",
  "key7": "5Z6ZCCc9pvfFPnShgQfxrdBrCLA5ghN24MSiP6Q8n1fMfWLvjPWVhkXgVMGYfeHkZUvPNaeseMvmJHurXYD4MLSx",
  "key8": "5gN3sU7d9b4AWCGeSfhXHsSYXn6Nzwu5PfbX45W8FQ1Q5PiTvebMYg7yUjFnvaRB9JzRExTfX3ejKBqmJ3hE5f4s",
  "key9": "2GN6LHN3Ghb7Xyc4GDUSMVbeTWcYpST769PfjC5pLWyfgsBL26zDTPB7z5Cq5e73PPgs6GptVZnbNMmW99RSGw7u",
  "key10": "2a4W9C8NEapF7Hp5BKCupzU81pWr2m3dHcsrRqjusRmiD2nbvDGSkiKbFoWWjh4Vt7Ay6MbjcdLjzcQdBah92TGN",
  "key11": "4dVKQ4JKz2gd46JJFPHCfo9eYCgewBTa92JiwVyas4DsvwJTGZyuogzhWiLRHuHuZgmBRquZnAcu1Ni2V35otUpw",
  "key12": "4iaZbUMcdCa8bevtUb8s4h5k539YyV62DM5xvY4m6rCujYDEBpJfPwbSM3j8Zoow8AgGpLooAcw71iENX8HtFgrw",
  "key13": "2747RvdzVveL2msiTuojDgm6PcvhPhjaLWDPF25bDbugPPAtgN6c7sZGPsAKAHAbabMHggq83ZFEawYtaNxxVC47",
  "key14": "45pUbCJ8hJCqmaYWfNQ65iM89EtXHXxkJVE6wfTyKyDBw4BETwbPC6Nyon5YKjuF4A88LZbeqmNG7REPV8HemCtg",
  "key15": "af6iiGxMmSiKcftP2Ty5QawMre1jqCZD9CT9fbwDwh3fXKzvQs3K3BYr4PeMB6WxdNWfoxHcvjakBxzKvKmESc1",
  "key16": "24aRBAADGKhK7kDm5LKBRqoa2HnNxvmf1E5igXUzFeLqMa6RgZkKLzVt2hXCbYo5xh1BugNH6tP4MyLoUTatqmq8",
  "key17": "4RHCts9Js9QNPTBQKYEdwe3cDTXpTrByAVKdtNPvcDFtFnyoXCkn7C9M87C6SEJKgVYMTsZrfNZCctmmste8oCC",
  "key18": "5PTLgjq1DgVePQ7KEKmL9RHx6ax28wB7sAZ3xg6jW8xeXovfQsLPZa4qVHGWXXoBzMSGGYNKMbFYUaz4gJjbXjDy",
  "key19": "23oputZD97qg3HzKMPciHjU4bizE9gPaV3cq8KcZrPe9Ci1GmzK41TsPtBEmoqQDRQaM1kWs2EQgbH68H98QpLth",
  "key20": "34aPAhTZnobw9Bs3tiQuwaydGzHnyAKxajVjdQwCnm9bzYVX2FuJRY66vFybFJuXw4vSJmDPqFVHPN4cR31qaBcz",
  "key21": "3spTtrbjFZxz6dudgSVFrQiE695GvNjFGkPacLMNSBMAtMXgjr8c4xwhCmLiRnqgQ3RmzbowuAJai6tfQ9w54rTf",
  "key22": "3bgQA452q7muCZrx6QuHsAHe7tajsHCM1ujZWGasW9Ttrt6bshKUnjtPWrFXbUjmdUBeZiXaU4a6oVUGg6NWxuQ9",
  "key23": "3qG8nuxKPH9abh3Ca2o24tGE6ewoEMB4rd4srsARR5xQZnCeutTh1kmZcxHQq3t7crzecnHfLTpcRpvuxd2i56Sc",
  "key24": "4rvMo6i1xERkyBA8K7SfvPqmAdzFM2LdwYHsfH5q69cjSpGsC8Y1SxL51toSVoL61mdTTQhFq9UkgbwSaWq1Fz53",
  "key25": "4L8dU2Nrrd4ohdtNaGYVWxQbDGaqT9WSuuZneKnYJ7BBfCmAhZQdMgozCRBREotJMvW7MA3An8wbQBXixYNFx2cJ",
  "key26": "2K3dktncXMYihQyLeJJd8bfeuSTu1aUiTnHsaDggtqQ9fx33LtUVS3Ztp89bEgRfo9NHubjSnb9KPTR4DNkv14F7",
  "key27": "2aRVkfvrDG9oRdhuTy53EYQsYUWs6PYotN3pmKaBDCbaPCC6ENongpoJcmDTLQ4Rgzwu6vcQ89p7ybgoJuzArW4X",
  "key28": "5bfqUATvBtqQWFotYmrJF8qp9F8Nr8H6g4UF6AhbjzwiEyKD8Y2Dp9xwu8vBVdXzZYHwWt3W5MyLwcb1mKnaJgnX",
  "key29": "3oiT8SAvfzcvVgDH6kZBMcKP7qtLr2gWGfiBmzK57cqQsxjxBWqf3dAjPY5KXQcaxgW9TrsR52gjpdFCtgfLj6KN",
  "key30": "5KVpfzT8ii5DcCS68eaJF3AYZCxShye65uE2HHv9yViuTwZMHDzx28R3GDJjgKydpxDS4BC5ukz15uHX95ggonbS",
  "key31": "4YX7nPjDgUd16YQSwR6HS46Ui16CKyoNLvcLqZjkmBXuRNjHZf2rfewJx29FKfqWG6eqdGgwMCvzv5QbMPhLx8Ar",
  "key32": "4iAW88SVTTUrwASGgvorRUZHPEJeDmURc5GKNma8rzern3edMq8RtD2CBcP51anxHtZwz8CkVugvveWD3XUxPTip",
  "key33": "37juia8g6sDi6Npw6PEpB8uF8NjRqNykh4tFpqAbo9qMoE7JTrSre1Nd5x2FkCNaPJ97LqKSze3nJN6HV9KdDMLP",
  "key34": "35nTZfyPjt6mDhQCnPwVEp56T2QpuNZEdXacgFRfM55jfABzJXBdFg4coukL5d1tLSLyzYULxMthrtKYki1Kvy62",
  "key35": "4u2bA4WqQphQsbE6edc6YvqwT8rin7NyKyGrwL7u2EUs1yTHQCmFKvyWZaxGNMDmd4Q5pYvDg2trMggStQhg5ebm",
  "key36": "33Lwa1YcmvXZpxcHaSp1teTvXEhdue9be8UnWEKj6cd9DQeAtGhSastNPqWRJwezhjhax9Zwd8GMcEQJVLtgdFHq",
  "key37": "52186KCdt3qKhWb99Rvn7dCp1CoUyTqZUFc5G7KPBpaYtp3BbxyQRgBtjkiYmcwvgsbj8Ca23capYi1JyuPvReSK",
  "key38": "AjHBQPYZex8JA2iZe3X6gRBDWKwcfmaHGaTPYsskbX1pQvkRfWrqtwi9LdBuspGo11GNm3E9Vt2VJT5w5mYLbk8",
  "key39": "mpfAAFn6YizZ2i2vb7nao7TYGrPuAFd766xvrChFWR74mTCp9RnkXTBxMKp7HE6JYcH1RUjmdgFaK18MACqzCr7",
  "key40": "4J9EVauQjiMTT48XJPA6THBMtKB8vs7wHtqFajsUuUAtZXQBpwJt95VDuA7KJ6oqBpzx7hqX3aDvq42i2UY6VhyQ",
  "key41": "2vmNTYUrg7jgThTcJZcu6QYie18Xx6fy8wNFquV9Fbgdb2wVgQx6VkwFybwYupJpUNjHVrvJdG9UR3nXoPqbRypw",
  "key42": "25euBuEvucHEJMKE3FGAF3PvKdekTGnWKtofPfd1VwboPrbfkXW59EgLh4skLwxUKSEjZBo1Ao4kYijDpAMeoawi",
  "key43": "tdWNanVACqK6DsKj8UeJMNhWFUaX5DHWWFs7ZTaU7PmkK5Nt6LTpufgaev5WCLajZ6pcGeAhk7NiKkvFse6Twec",
  "key44": "5qW8a7j8MEcb1H3MufPZvd6y66PaXUTqdchCqkXYwAyFJvKEKpakbsLy5PZ2E6NZ7XrMNu85XJbS8wcMaw7PTC4C",
  "key45": "5KFuEJ6ZG5BM2GiUPK9KZj5hWeJ55FQECifTkFPLYa2TRA2h67JwSB6HbLx7FBN1t3bexnnzYwr7nNAo4HeUKirr",
  "key46": "2Q3W9VSK5GCH6NChcAnitJz1Ekt9bX2mJ73D6JmoDCD6fPqNYfyKDYSjKdhryAYBfFmjEb6xNLcXUtAbmmaxCDaH"
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
