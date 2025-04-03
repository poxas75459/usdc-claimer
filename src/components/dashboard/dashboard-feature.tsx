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
    "4SpUqVEUAFHBMZC9Er8KrqG9Y2gJBpb4s4774vxxB2yoBo1v7zRUfLWRrRabRDY6nHputJ7aqjLJgxovuriZznJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WCMkbRXbymhUYDHz7Xm5yGVEomLUxrQscUccRa8rwsMNL1cEVPgfp8gm8jp2rV4H6f3KcekkHAK3mDdt2m7G68W",
  "key1": "VFtdrXUqKT5vfjR4zRv9782PaM3DSULnGfkDcH9Xf7JCnHSxpCARQzVj6sXBEsAoWX8rk3WWKCfCQrDC3mQ1Qaw",
  "key2": "xq7xtPxpZweRHqEVHNjgzahpEPJzaLNrrqfzXvr2wySwM81UXQXnkFhQZTzRv7YkFz72rKxL1tYf5wGoWauauM7",
  "key3": "63r3YvvW4p2UzF1BanWrdhRbqJe9npfKo7zpifLUa28qmC2beL7YXGwH91LouGDLWUQUS4AYZhSCnbB4zzVKuRm5",
  "key4": "2hqXfX3f1hDZrSVbwVHopLQJYy3YwnLP5F1AUu7sv1d2WpodGBXKZ4TD8EinEVpVcu4Lh6bu1FYAYnNdqPeWYDoK",
  "key5": "uDay62Fdpq3Pg2MMgQDqAKD4ZEqe2zi4HXxMUcEauNMH5pH5ewvmDrEaydaoioWgfx4653mqngq2nrNQyzenyZW",
  "key6": "5gpJB7dV816p8PVzYxu2Mzg3H1f7LSeLiDKL9N1hAodztAXLkphg7cLHCA8SddtJXvuvsLMs4qf26JpcXS2koVWV",
  "key7": "5d8TxWVw9geYD7rCRpwDMnSZL28gKwh4d6SB62WueNs5oGnzut1U5Z2HKcSfViztM7ggpsR92MFNnhGQ9crCb4h5",
  "key8": "5RYiFZsNT1Eqff7HXFBfakPDWaGsQKwKzbEn7gxVPD22Lui7kUL8EfmhBezzncbxZQp5kipQARZfha92mHoHVwxE",
  "key9": "2K5mQjpg6C196EnQnQzYowXZzsL4MLxsn2oNRVwG1uUVFnDT3RTAYx5maXCQ2MmhkjjcSaTQn5g5Md3NuV4BtZ8S",
  "key10": "4V6whzUUnFQUg7g6rKz9eLvzAMzeKX7cpkQ1mPeFDnfqQ1dQhf2bUuzuzM81xTW82Trwk6v8ELxgzTbxUk44677A",
  "key11": "4aZX6BLFhnveAug7ZhPsmEvFM3FTTt6zphfxYBfqxkRyV8EgiQ866SAGfTeQ6YGtwjdBzpEnVZP6dxSbwosksZce",
  "key12": "2apsQFof8w6m9ok4VJpVu4adrZ6rzPgde4vtYdE6sDWdTuRZspm9SukoJTDk7fDpdjaY33nrsXuQjkQ6wjj71q7n",
  "key13": "4J6RowgFxA86PGsSGiEYyjvPEWpgbz42MtLsQvPqnvjEDLMfGgiyo8pCqt7PXTwJEXKKksTmXrj8iHExyczFdJmu",
  "key14": "3DivhaiqDRUS5wxxDQJUqA57HTno9V6t2AtzriFr5M2Empb3zdYNGFbBiJjt1xkmuQC9HFbuk94yqtF8Sa77qDcq",
  "key15": "2ziePhEtNqge6PGDMJirUmetwc1ZFFMZmrVy1hJUDEPjaixaBU3rjGDTiGSjJHjFERUnzQYkY7aUfPpJfjG8rHwY",
  "key16": "2pLyPVNKaLNaX8HJQ2iBaoSjRkZmfo9PMzzs9TqEcirqhzDewWQ4RxJTzBU8EpeWCa1wepMg23xoXAh4UFak8qFd",
  "key17": "2ENpxeUCqSPJv93joEDSJbACY9Kdf7oYJaH6iEaR5QbiJ2Svtq2Jjio6PveQHqjxNYVaujXdi6ZRo88V1RLipGUT",
  "key18": "3wXA8fAQyUirgPiQFkEG8hGRd7aS5AARtmXmPEgJ9QRcBdNBBKHVWhkgpWRtUAgF3nyz6R5SEoocEWtSsLcAypEC",
  "key19": "28AFbSNHGqDeFLDugraL9VQx7e1gofQEFkTJq7ccmasVGovN7TtUm8ULsL5jNof1tYeWQAgk3w3PLYuCjneoUVH7",
  "key20": "5k5GUoNM3YsohDy1gZ4yqSMZpeziEkqe8MmHkdwH4WirnEka4XamYt1oHQ4CTtUnGMBeDK8PhA87aY3cjLE7TzU",
  "key21": "5N1RB27pmvigJU6pMdrrsPRHmFtREmMmNHQ7CcHg96nzKJAg1TABWe7ZmVsGS7Wc2AkM5Qp5R2KbpEsWQzNnw98A",
  "key22": "541QR2YZGPtYZFnwnSZ7xUBLBR25J8VWDAeU3rRuiiddPEJx2dqFf7GEX6r5T6EmDqF58eCda3Au7jxu3G4BQeQ1",
  "key23": "cQ6CUKRTJu7HZ2Zi2NZiYpwiiSXH3Z1tFmJHk8rwDUjwG736873ACoGBjeJkrtt2ERSGMCQ4tx5mN8t3nqvaUW6",
  "key24": "ovo6T4aQ3Nc1bZ3Y636mHx4Qe51SCDgTxP518FpVBXMgxfL34Rz5NER3PZ4yXkPsCf77xqL7o88GVSA9rWf7M3n",
  "key25": "XqS9KP9xuBgpUTJtkVTu3ANky3zXgVANN7ZtpgTWCuxrQMMsyPMipzs8V5kKnRExfeiuhUndBsgDKY6gJaMnUvQ",
  "key26": "3r4mkHGx9ESnsgUUnEPKwUP9veFwwx1kzuF3DwYBraZdG7z2ovN6Kh1xYtkKQMrWdZKULUyvgxMwkMPH1YtU48DB",
  "key27": "5Yb5sWvmWin5dvg3xjbF5o1rSf7ZtiwuBSVzZqkASaWPDDYwwDHru3Noumh7fcsVw1vVkrzi7zSs4SSkHHQ1Azg6",
  "key28": "4ssjZ6qLoyCovsfYjk9Bp2g3GFG3Mcjc1tUFTMHPmp68P7SeUbtesFHTsyV5D7Q2jDE7T8hHKt8mM5Hsx8sqjifJ",
  "key29": "33T5uhpkwYmspZNv3AWxbF8JDASB6PWcui1cq97rS3eWAWJvf9AQBHvrj4uyRPFfrtx3XZ7MJTAtdW8BUPPjout1",
  "key30": "35bXUgeNeeayxp4TNZCZcNLNtKjGNqv7gAR9j2DPyUbLsFB13JMDGnqFvdvqGVuboA5YDxdPmeJTohz2V6e5Hkqj",
  "key31": "2rxLAnSRofz5dKkzFT9QDikizGh5Hr1euq5szzoWsdVvqwpQjEt4g59anxJJsQBcaDwbeGsqpspsntZX9h5t5r8c",
  "key32": "4exEqnLwHYaKK3PPipcDNdrTfajwufR5uyMJf3EBLNNd11NjeviLk4VUraPYKnCtv9znuTVewGSWFaXkeTkMJdsr",
  "key33": "2BQdLSL9BsziqNWvGktpDoaNRgBQRATgviZ9JafQ9528onPDySptLXec7A5Lhv6qfHnHuuNvFgaEo5gzZSU3b7PK",
  "key34": "3sjZPmWXdtNcnNdquhAta37BWnDyNcK2RG6X2LKhf2rv4hi3HfTibBonLJ6M926dC1xU1ovmhn4V3T6b4rY5yMf2",
  "key35": "4V6jgZQwvBvTqsYmk2x9VBD3Sp8uNh4tnTYp26N28apmqpWXxbx5opmxXzbbDNjc7SzKWkvnYq6LYuqJAkujetrk",
  "key36": "3t2DiAnMZdXHr1GGEUFAGa64w6ZP6zdAHmxwqJjukqdSmfe8BVsMbcsx7kyxZWPYP6y2J83YToZxxTn5Tk6BsNeq",
  "key37": "51CHJ6Qmfv5NCerZTyUwdmpnTMztRXW3Qeg7YhKK1fRHGaJ8YMfT7oNfXnWRkmMkpuMBjxUxjXzChv9hBAuzK58o",
  "key38": "4nuSbxpaTP723e3dicW2uvyFBnfHZ4DMHWcFGShP2ZZhTXgHHgB18RJNsFkkNZZ4zbRuhyMYqxkv4ui18D1QXbhp",
  "key39": "3Lf9NnTtTmCn9QNa8ArGCLMhZMPtqsFnwELvLVJS3NM9mAFwztY5FWXRCZRs6Vw2gkXgCcoQTzQ77mDshvuaZtUe",
  "key40": "5qkuBrt97vrCbTYajadDh4nt6jHKwkX7B3cgPaEWvjHrizgovnLFmYPyXKDTRcq4oy7AzunSAvcubFWNinCYNmMS",
  "key41": "51DSku3FywgkMYmSVRFtaPtg8YgwcbLaKAJhjYfTsYRPu2ahBz31p95oyJKfM1EJDPJdbZgPdvE73u3Rcc8QhX7H",
  "key42": "3xrRSoQKynf3BUid5upsSFjAZNX3EKsDQuKnz71vHx6U3TCHxpfHNPANmevf5Wh63YaVT3eh55P3D8MKciCu5JRi",
  "key43": "2t1nJQbUe1ZtWPjaiEJ2UMkfvFk4apGjmZeTfZuoq2TnQcmwuqjisdZAVoApC6mUuV15FBYC7VDyVDD65oJpm2oj"
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
