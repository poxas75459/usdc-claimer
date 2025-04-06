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
    "5tBfpuSU8UZfujY61mW1STWsbhasvziNUS7aJmjoCnmC9FbWr7mDvoafdsumT6ktFyC3eMS8hwahJixFVtVnsSJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L3eKHo51vYmPBcfXyoNia6qPtgWjLhmihLyED9rAFwcEJc7RKRWJRxWwc5rvkAojZzdYZNnNnebtj3LuhSsYsEk",
  "key1": "r32W7ABzF45bCxt7xsjCrst6SthPZSZuzwa7QrRbf5ofuWCcTf6jJxvzXdV9w1BaRdJqKtoRNnFoZvRx2mUrSzx",
  "key2": "5bh86G9cWKWzzRDjAniTrstLnVqTAofLYQTMVpocxiyWgxcdePKtsDWz2tpuQMrr7149PACTkg4MjeS5EE1gjzab",
  "key3": "5Pu8bu6Nqf47CmZcCHRnxZUzvkfrUK9mAWD9RujsBK4W5QboemxfE4ZBfN73yDnwLpyMs2mUKCzerhtNZqrZGQr",
  "key4": "66bm2Sgawusxqii2KR19K55Smfdwvsfoee41djejcupcNoTeQAqQzR7RkWrWLSAcmCYajJjrcKDkMTbk7Co7D9aT",
  "key5": "2kuq9WAxTsfQ9y5Ap4h2vADHD2e9JhRA7PgJ324B7d4UncUsX41FZ25vUdgKZENkpVvf7Um7Fhc7veMoXq6pJ5o6",
  "key6": "3BK9gq4q2nAN7ogzemvureXzMFUbJSWFxNWJYLnzyRDBQmJTzBe33jLU95Zbp4MDW7SGhkWDFtPqq7vNP4kYUu7N",
  "key7": "3YcYzsDk7M92DacsZCH34VZZ2qdvANcRetSGK3DeUsBg3BcaZDd8pA8iuVnuinmKFo9U3wCfzBbVSnd1YQnY8tsp",
  "key8": "5yEG4NtSH9MxcJ4eKohRkeK8ko9eNNxnSrPsSLj8FpDfxsLg7Vw5Jr58ywqAJ56M6LNSHv6fSizJGDQnqewTKHnM",
  "key9": "4FNdtFrFDyEQgG12NQEvEsSnMixFs4T9T5TnxWUBjTmw4GhVpSDjb4bTdSqWmWkD7ojjrJ7TcqoUkui9Zc3GZ9FH",
  "key10": "4evFizEECyUGa23JgwY5bREs3WMzATgnrqRRmKQdVdG8VHLA52m3dW532zLCYhUm5erzxfDMWXhNmiCQk9yFyHQy",
  "key11": "3RuPgtEeR8Ye7N84yn3sWwk3dtnQZ9WENg2yNHC5FefrGvnWQyrAL7EfWMbLsdzkx8NHdGAvULaDfL6LZh1ukp4C",
  "key12": "2t8587Xg7q94EY4nVgoJS9xaMw13kKVzwQRaXfUU6Ux17JJnCbKSrcY12o9WuGNki4YhHTwDmSDMRLv6Z4nH2afU",
  "key13": "5ZL55dMKaKQWrMPerijiJrhJtuDZjmiC7nVJZnNLjo2qQTBNxHBEYzHMp7VhtRkkYgErQ4Y6wTktdt6cNziFZwYX",
  "key14": "4qKzycfTuCMEJMHJS2KwcDLng8SSUDzTsidywe7p1nrTTDgmsT6g2BUFxAyneDTySM1Q5wDAifWpUEq5JVTwJMwq",
  "key15": "3F5JMeLWyZyVWj5thvjvJGTCkNxDvRbiZm32Ex664HsjZQb3bPmzJQUDar7pca3qeKJ25hJihPiiV1N92QPkvY8o",
  "key16": "5AXvsik9g3SCjFFvGoFwy4STSCS7bAyfnmTvzCvZiTP3iW26uAxmNi3zjnWFQQpHi3sQ5XkCrFeXeswMEyguypMy",
  "key17": "3ADENgGiJ7W6TPMz8TGWAHhi7KVgFeZAUp217S3T7zi3Hby1hphDhvsJBBJatPUweXSbRpuHGWydvJJfCmSdLRgr",
  "key18": "44wTNEA898Q2T2jkRPZFQV7AsWM2wxqHkQGbJ8GdHm36oRrKipE2QamgqWwePsMzof3tnzziqvjGBsmnK4Aui7KF",
  "key19": "3a9drooppFd2C82CSp73mwX2fVsVzJXQ5CUBZ7ZtCiVTPeSDeQfeLvP42yfipnyjJooTvKkjVQSaAk869PiVezSr",
  "key20": "5jzdiMrvhGDyH8XQujqBAdiNaY5cvPv8LrekoFwf3Ja8Af2KxMkosz1R1F8fKipFWDQnaR4GsgUzC1iThmvE9o1n",
  "key21": "2FnNusj2zfjtgYcQx8aP3eTuM2WpKjsb6HzjvCxryvFvBWTyH9umWYe9ND8siLpD9FiSjobVWGTzfoBMgcEGMfAc",
  "key22": "nq64bV9eNV4aZ4qWzbjcqPm4X3NDpvz3QdNK4NDhAFubj2ko5FhFqz79vRpGNPmPkP2bm4qSUdErzXCVCw1g9qp",
  "key23": "4ahEnNLHxCKPDoBQ3Cv7EDCLtco9vrSfEdQHi1z46HzfBsNXKaHaMnALFwkzmoTjZvPv2P6twgCX8SaKm15RjNfh",
  "key24": "3NpHNvBR7MQL1zmUfbvH2sAQdcmbTyWTC745VZbjJEEA4AGX668qNQnEqdbuzibH8tjrkVptLxmi13skMyjZDcDF",
  "key25": "5ovNzPdukS9PohaiHDrN4orVzha3XcZN9k9xxe6Eet7uNKdettWMMjvGBpi5DJHv2k1jhEabb6iqs293B748Kz89",
  "key26": "TheLdohYnu4trZpxSCm14xgzt4i1bQi8MVKa3cUiBX27XJk4AKmJUbZwDqpyqcCny46pYiByKRgoyekmDRDwdAC",
  "key27": "4Y6FPkFQUVFU2VNu76X61Kv7e1NBVFYzQ4yP5JxHKmPjgf4oheG3R4bGDTKptBaxxNdy6uoka2EaiXR9yhgAWMnJ",
  "key28": "gikkujtxK7cQYB2LJx9wuN8Ggi5rRhXJGQYsbf8JGhFpjaLTwJ8jY4qtiazUn2PiF6b31hqZQTKp2SRo8ZNh7YW",
  "key29": "62vxz2Zk54xzqY9nsPY41myrYqfMBC1ChUTGh5vFP2ykdZyKZ6xP3vZa7fAioyjKMhiCtsNkoEPaaZUKzTue4mMq",
  "key30": "ThrtH32TFixRqTjQhBhcNm9hvzwrRQeS4ZAXssijz7dNWLZE1CKwcPZDLrmViPRXnnsNr21vns4W4nnNYE5xX1z",
  "key31": "29z7mBTnQ5As9uGJguHiiC5DEKuH3GQ7u6NwaLui7arpAmfAhAeaZmbTiFAwzBQ55hUsQEgf8682auCDVEdTM1Ln",
  "key32": "66pKdfAESniUSG3fzbdGQDd9ab84Bfz1msqsMAHfsLh18T7ufxvY3grVbQ4TUBNgoqM5YuAjo9KDPGGwpQNhxanS",
  "key33": "2a26V6CkugAjokxEQj4F9pk7o2ZnmtRxShu7fHmvEHD6G13FHcWGu1MqKrWQpovCqZ4kYyFjiwnPcfwn2WFJMq28",
  "key34": "3GZGnJTVGkKD79GHwHcr92Qf215YHVaTYszc1nTN6dqqS4xUC9geX6Lpui5e3ag5of8mm75y5mxmTJAusViwGAck",
  "key35": "4Yhov4PtyVkcboGfAFprP2AYyPPQQ3E9wWhjfoyfkfYqCP9Y6XdrG7T5XYzjNbbQykAJEzzWKkR5YRg2Zo3pTJ2z",
  "key36": "2xxaCZBp8sgfeoBDd1z171HnE6kGu2TsdnLE1RkQcFbqz3iTvSe1PrDoPHH2d4PXd288ug3zbiMZ7GAXaW1R4up1",
  "key37": "3tGzHQ8qWuHWBraHQfsFBf55Akhjj24sjKxq7JMMTJGckkYyfrCKyCA2V83yWpoEXzjXLqwvohDrfnXduJsgrthc",
  "key38": "hTUjarZ5GmLwaThSocTC8mf5knjHtHagMXWn3KxR5aMAHdMCvkuJ9dpdpWnAxfFxo8P9bxkPmKbH8GC22dSkLq4",
  "key39": "4KPSeP8vmftkTz68t6sZ1Mkiggeom7KNsgMpsoUoyUS6pLyTYwksmh8hj3LYtyhrnh9U1wZ3yrd7ddVtLqAs9HTp",
  "key40": "4KjTd2TsYJQDbyJGc1j6L5vr81ZvjLrDNue9xq9mDJrEPJdKwZQfeXdgPJn26umedns728vGeyMSDwnUG5Emi9bd",
  "key41": "2GmB869Te1PwxqvTqti2QWKBpyVSzGduuS41mF2ZFmx6UBZYtbZ6fWa7j5ZtCcgztR2fesEnmN8bf2VhMWrXaDB6",
  "key42": "3yR77xoQzWYyXTxyS6Z231u8PCrhamUnUMvPfaHNz7egRXWwzWobULyAsmHqQYrdanns3FCmFprFcFPT2aNg9Jbh",
  "key43": "3CxW3hasGZXwrnZnPdyDkjeJrTBQDWvEf1rgan8tF3BRGRSyNXgUPJPFFEkXDA3NhC8BHrs7bKsYLKPtBmZE9GT9",
  "key44": "2Pn2tRdqqFoA9sxw88xTcLhhV7EqsFiuPVRUthXZeEYCzW47qHx5xToQuQMPfvvgxrYjnXmSKzUGdykK1Loutx4n",
  "key45": "g2JYHCx5Pa5QdKskPP6unqkGxo5SWteYdWK1SVSYKDkUSaEvRV9vvvMF16E26B3cA28iVR8Zs6sdaB1uS5sFfLY",
  "key46": "5eYZ3gKSj7EYwE2eqZmnHxs8bywGdGeJZDUzCeM84zQAc2aEWhVnvyW7yZaGoqt8QLgeL7Fz4UBuxPmsnkPzrBEf",
  "key47": "41nZuv7W9D9qSDR2y5JykXUS1kzmaLJim4iPVN9UNMT7rPeuWJU79KvqgcTUtTQ8WE4DKaTbwok4MuXvetgmu37b",
  "key48": "3QZUfiVZArBHDpJsHh6cWyPxx6rvqER9VVzTeYyFwe4WF8Mk5bU6zxm8k6rjHKmM152pE9gypJtwPmd3QzUx4xX7",
  "key49": "4BUXgNC9NezkeFaak5R9vWUBk3hAbp2Et8TZpKYRd4AE1nkBz6o8VFnMp6Crpe993rTRNBYraLykcYTt6NYiH562"
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
