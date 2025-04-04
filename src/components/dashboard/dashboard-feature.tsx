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
    "wj4dobVHTy8BBqcghnB4LWULAHjFERn1dt3oinC3ox95q9Y7DLyn6CHVQcUEHN4jUUHWaDW5xPLdpGZCWiBVgSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SaD1fdxCen33GYeVcXo1QVrqNHye19X2emRokhMxgY2ypnhovRo3DjJrs58uHLqcLv3aj596QLBcHwKXZSgxAs7",
  "key1": "5nUPeZa8VibBpgr5vVX2nyiRfXNhd1TwpC3fkUeFNjASFFxHQeAp5uJaz9mXAchcpEw93sDUfGss6r32iL8j21ci",
  "key2": "3eTi5XaBje7wo7DoHYGTN7QNCtAw3V5As5Cd7uSEjWkLwYSNxDW2QEK1zTmhbjetbSiCVc4iyHRQwbxMvfBVBdRS",
  "key3": "7R2CeDaKTjpYhcGXGPz9QAPwbjXgq99YFbWvQRoiSYoffYQWgVCVjNm2KvHM4QFhiMNj4KqNeUD3wTa9gnaGYQP",
  "key4": "jQKYHS1pY8eL3igRv2WpQ7PLfP1sKsCb4zDvuvk1JXwQzmXNHanHS8j7m3a5PESDJ3hPGSaTaXG3WJNWqWo3JnL",
  "key5": "2hHqu8n6yHSaJxcwAg25RYrodqJtQXFEPxpzCULkyRaNT73tjsDqZwEzxZg69YUXM5jvayMFJjwgiG5LYcb7657W",
  "key6": "3ZnYp3H9mK8yN92CRi7JKG25XUbmdLibxd5pktx56PdEH7bLrEDyKUryGGGBePsRmx1g7jWUYy8dKHPhgHXE1EPr",
  "key7": "5H4zDBsSavm4xqyNaoBaWjr6sCsPBwd5pD4hb4jSxdY2S5TYE1rx64SghzRyNpB2PiZzWAAM2Lid34XHZzXVqP4P",
  "key8": "4UpwNU8kvoXzofnjBTasorap4dTQ7hjsq772GtW5iyvezd5jL9dVepQSCGvaZB6uvFos8wBD8agdpSpVef1X55wz",
  "key9": "y9ayWhWFg1Y52QpccWPstoTFaEp1RSPv713tjK15JXatmvzBtdPsuxqa21C8omiBpsDeWxeRt6wYEjaXovq7fyZ",
  "key10": "4XKRvNP1bFdXusKH9AhUtugBiWCkqNhYyMMNgd6S96rGRZFzecEZhR7RFnEanR7dpSyZXpWeGrUD3DYdk38H9ygh",
  "key11": "3bbYXpbCj5kH9wvdXhADAoCURwfFWRty3DzMp2ekNW96iJ4rFrSaYxRaNHJh32FAecnKZWMpEmWt75ZyFZZfL3u5",
  "key12": "3gdt9RtddmZV5H2qfY1maaLm6VBBVsK91Dsd3vutvbSLgB8UPq8QL8K2nWGDc2wBbFGYSZ9p1nee5mtUkTi6KfN3",
  "key13": "2oj3BmZiS2viXZdbxuT74M2ZKhMdWfF7aWrmG6KY2RjeVYs5HpchPTvetjFiASYCcLgHtoDSw3m4Zqcxnnafmi6b",
  "key14": "3gPkLbQ3qXypA8cRTwaBcQetshSpviJEJoKuGi67eBDym3fbLp8zZWBjPDJHEdNRSYogwrDKiVAhWwL4JsDuP6zd",
  "key15": "4wRsYtabFdmYgVu7zVTrfTriGYoiyznGgsd3ShhEK8FygL8g9XKNCzVNHPWwdnRZ2P8TDA47dqrd9KLcCFTh1ysD",
  "key16": "5HQ8tDp1d8CEn9XjmZh7ABGcJhTQXDEr1THQ1DbGDS7XUTvqaD86c9GrpREM23PjBuQLDb6yw8VutW1x9aZJQL2t",
  "key17": "4X9LdeE78o6PDALGprTT13fKXANfgJYaWcqjZkpaSJTpKbGWxQAMQYHEMiPgFA2P88ipqPVmmS8QBeXP3yTnTFkn",
  "key18": "3abj8C8X1YfDgCbbNdXxEKCRmNyAhw76CU12aqAJ1xP3c7mgzcK2nECMRN5BsJr7z4youCqVNuZBsrep254X7Wfy",
  "key19": "4CDX1zHMrhPn8S8SjJu9f2D5hRWdp9qsXK9KMaRC6d1CcduVTi1iyzRdwFBXTUfQnQ1qTjf2Ut1w5mp7C5Hybyzm",
  "key20": "5aksA9TBDY4w8AVDraxhbAva4DGpXiZdAJ8ryshJY9C4qHsgHvomMfG8rWVPVXRQGGqYqvMArGDrf9nqmHHL977Q",
  "key21": "18vfFFbn9bz3JN9aXMr9y7Yzuz6kEcbS3g1PZvTCezSdMiy8rmQo8CWfyZsPUVoYaT64WaRW5x2cTe4NgEbLsc2",
  "key22": "461JbRaLnGWQFo6HX6mn3XRag6EFHbXkxNWEVsRY7hwwgiDkHKia1gy4zuB8dsVyYQs5i4oTKG2vjPsnyJYNCmYf",
  "key23": "4oubeKaHDYUb1Qp74ZFUYahmy8kaFgQa1eeQV7Ua1EtmZZ56KkBHyqXPxXXByBCyiet6m1tH1im5FYgXaTKjDeKu",
  "key24": "4ZY78urTLFwPKLnynwUc5EgDQ7F9Gb1mGqqTjwDfr3Vsogmd1QM4jxVMfoppgaXT9u6xzYhVXyZ33o7PNTHrz3BY",
  "key25": "5fsLhCcSiyzZLqkVJDWrGFaPrJ9bsqgrGmPt5N7D4RZfCzoQxtBBT6JpxATmMMqxBS1qUkSg1S8wxD9pp6UFGLWg",
  "key26": "4ihX83cwLHLkLqMV95GkwkP6mi2Lin6hNW5wNfkEVpu4NHU1ZamdeA6NpMvU4kp2JeC7MabTKyFR5BC9dUoLRBKN",
  "key27": "26yEE6YCr5GKCK7m8NpaQPTut25VWNMfUVe5GnXQHmZd3Edanc3kD2gwgZx65Zj27H3r4VQwAEKxYw3cqGdGX6Ws",
  "key28": "5yJKMuiKGe6VzSAr1opfTLrTi1rRtbsUULNJzRQ5pkd2VkBezsK89Fq9pWRcK9sU9BYAMVZwxEcwcBEZ4u1KsWLw",
  "key29": "24tqnqyiEi9H9xB11RTm7RpioLbPxE7rdmunCNrw8y3REFSc9ZUCixuu13YgEzC1Bhbc36zm44yTBzRBK1uaY1yX",
  "key30": "5L8qeSg2JLRhmdz8qDAuR9RMRJ5vBgh1UVxNDqjTHi9oeMPieeJfBuJoXDKxthSjm6ywZgVvGDn6wxZKDiwbuUxY",
  "key31": "57tCp3n5ckacngDtjwUM9fBwhDT12HFvnSj1SP4pCFYuafAtV46Fs4CrZe9Dxs3hhJymRjHnWb1bcvkwkmqRCoKb",
  "key32": "59WWRamJqFNAwgKtgbwMHDcqyrLcAA9FUvnT9rjD8S7Fjjeau8K9okAenZPpcVUnRtUZhu4AxhvRhnsNCTg1V5Bd",
  "key33": "3UNYMVKno8Yhw1wGcHg9kdBZNvRGGUnne73rNhw9SeJJLiTVWe9CAytDZM6i1c7xARgbHq1ErNCWLgYPmVhFaXiP",
  "key34": "4qNS4reRi6PqnnVSdaW5fquZKLAekGUiatyrj9sXDccsRVv7UzBmNXbHzN7VbgmNw4MvJj1ARPzxa1jq1b6bfk4u"
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
