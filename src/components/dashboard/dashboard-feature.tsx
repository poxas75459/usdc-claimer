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
    "54Ghk6hCZYH9qcMmrytCTSqDsKDikVE452MqTEfSEnd9vxfN4h9218HoUSkpGotgyjegrUFN2yepwsgtVnhPra5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gh2b7Sh9C73iyKsSuVKjtaymai6rmgnzUtbPXHgbUfuZQniqiH7uRN6RsJsw8CmGx9nXhLgoXiwXHLmg94SZExQ",
  "key1": "vKDM2w1ENSPLanUVU3PfssBqFP5sHmrmYPX39zgqwxGcpk2SL8GwK4NbWMyyjykbRDrwTnXobG7hq3QsYHZMBcS",
  "key2": "5HdwX7a4974RjntwL5CJesk41wvdQwXdAo5fpFfZZqVdYFCcGae8bxE1bD8G6SvefywzDFSwQ9R8BBhZ7R8esybS",
  "key3": "4QLLVzMbiFg6BHVVZ9ejs3KHuhTaDFyNrHgS7RDX66KKqmVEGDrenKL1FPaDpv58iDRFEscjbuZ2zGTHsZ3mj6eA",
  "key4": "Z7hqUGJ2C1ByWsbiwKciJPAMN4SpWqwZZ9jXPjFSzPg7T2eVUGiJB6yuXqVEeMsdZzrnBvxxZr4DDD2BrhpXEey",
  "key5": "3e9vMxdnpTL2PNxC63fpuHRYxkWXcnMkfjgAdDnhLmNGB59pvUMWgQjXQvfLGqWyHELD8qj83kt8Sw6U4KnE5a8F",
  "key6": "5r5J3cgaEQvaUiEmjuKswzsDqbJpovAy8FUyELNf1pKuEsqpLkXgpohnaNAjGAV1MY1vBnmq2ZFymY1rrutZvB8m",
  "key7": "2Nv7PGsuAS8gdZXXfznNeCgA2H3otb86ZpE8ZFewJPm5yAAJ3Ah92BmBZBZAFdDQxHjzkd9naW9zNw118KaYSmFL",
  "key8": "baT7jtxrSMkdgtmDYPmExWBwfBuMkZv1MJeGqEgduXaG9uTZ7q2g2Bbn3GKhXAAAnBn3af3boT9pd8VWo9McNPo",
  "key9": "5tNm4VwoG62dK5vmLKjBcQtyR7tXtm3LAmKgPPWmapu1aGV3JAkx1Qc7s5yPJh1XQJh3VEKEHGFUw8H1WE14NEWn",
  "key10": "5UrgrDf2LrJ3eJd1yF9nkQvwKF196XUjVZhxfucLACfUySeP9VUUPxMXcgkqHJBh7uCzpvQxaXEjFiwaP7RySkHd",
  "key11": "uwvAv7erBCXDf5kHYoATiTG7HG2MiJf4YG3pbDHR63B8eWnerY4Zx6RNWQRr6REgvDcy6BtYRx2YdP33EFvmFfF",
  "key12": "28wyTH3Sc7L6tv2sFL8aBpx1VmzPJo8iqheFAad7V5JZLbix9DCvyDTWHSidh7kxgTia9cZvhYHREB6USWzqqtsE",
  "key13": "4ExL2xuwS1yPfa1tMmCnvucJM9upkqVDjre2a75qAL9JL8qp6QWTRiEwQPCX3wTjQFMU6gEYhTL5ZVG3ZTbWn7yE",
  "key14": "yhikZrPAiwLfFFvShnE9pVYyYr7SoFWogMAYuxvotE9K7djCAWroANXzgdMB3QCa74ApssDoXmg7jY3oeZQr14T",
  "key15": "2YEVLPFGJZZP2FZJvSYMiEqTTZXiejAjAoruv4isrggDavjxFUXQk61X1nM7kdXxWSWQP9ZtdneLBHvfubBKLJmb",
  "key16": "4u1aqXDz9RWUfK8EDTxsLvKsJ43mmCe6nuEtaofdv5yMuXvQG7X9KHxHzpmZbin7MViR8s9QMuS8aS3joAvNrCtC",
  "key17": "3drLq9T3pdzJ7SnvP1DN4QsyLEKjhWysnL4wwfSaioXqpLEzowQ3mvnnpetVpmKJ2Bh9XAtnkGEj3d8SnraNbbhD",
  "key18": "4uvXZTEJnbEykXrMXAMxrWVGAtBuSfaTXtaXiPBVAQmyhMvpSRZHb5sXNLqWVZhHHbK4ABJffJSsQNvo4wTK2HDR",
  "key19": "4A7H5uew1dkVJmUw5nYvQnwnuBnWGUHLPLnqnaujJVLTZ1DM9eCCbaEhwE7mu4V96q4SzDQeJCJkXjs7esDiBoQv",
  "key20": "2mm1BHXV8bs47muKx3w5azx6j3DDJKcoo2DbydyoHKJH6xS8qTMfyNG87zEL1f8vCN5AUcRgQsVKoq6opWVM9tAQ",
  "key21": "5xwfJjyNfGHGMSZigzR4xk6f4MEhUAz5tcTh4zZQRyRRExdsMrLVJDFf52WnkEfFcZSYXPy1tnRcpLv1e1GCDLkm",
  "key22": "2WsyomjqLHXahKWvpVK8MAvXFyHYu4n51vjQov2BtJDMdxU6Utak6eZTT7uMPL6vuvZ6vWAQzZZ3KK1T2bCyyXgn",
  "key23": "Ta49DWgxtez1QTUp5MnkTrNyvAi1Wp6YnHSVyVPLjBbFDc41JzpPJfxQTuNwthgvrgGCwiW94j9b2JJHpauRtpB",
  "key24": "2xfVjoTE6XMbZ9fnmX1t88TT4BqHowcVvEiyuBUH9s6gVFcDBoFsA1S76TGcS9DjcwEiKjy653UJPwZB37fRKTxQ",
  "key25": "5j2axG3uhuphdHfmLQamApsfz8ggR9sENtxibw674XzjyBZebRbmryyMryzMYB6SkhFu6APGAXchCmGe1Yy4WwnD",
  "key26": "5uEaqVGmkknPVMrPEM4ndCkje5RHGN3dKhEQeBvbxRdq4ioYQzN2YaZ6hpDsa8Z3WRHpdbM4wyQnL2oGGLFg8jAf",
  "key27": "2iDiTQfPzBi33CRNjGnqu8ZqjKvVTR5hWNpmxh9NHRKiXgCzBxWxx5PStXj5CHE3ckHzj8GwVxjvHcETY3HYp81Z",
  "key28": "3i7s6Nep64KARfKqF2uGGUH1jftZW1i9BPZJxPdnmxLcAt8BBaaoYiVKCQWanEiHDughEX6K2X2qrShkwScxa6Ab",
  "key29": "3kvZrnAHmYi9RcVTBRzzP5gDzrKwAno68SPhobEny854syWzGAMA9xT8uMFYprLKUmJVD8QW3VHEfHnt9JTmxQtV",
  "key30": "3REUGrdsVMmN2gtwKWCz1BAGggPH5hnMJQxPJMcrPYaHW43x4hr38Fzf3n83PQVhtRZewLctyscRP2pmjrCZYA5j",
  "key31": "pMCz1AwLRK9QGQ7e6sJBZh4kgV2FFKiTro5AUPMG859B4RCv8s6BP1Z5b47vaR9CqLCbV2LDYmMtCAsYDY6D2Ds",
  "key32": "DsHxKovBEuV6YXc82pAqiVNcFXzCG7wB8AYKLyKoyD2pswJMeHcj1ornAzdNenXGr8rvtncbCqT7hrkYtj4npNc",
  "key33": "2Ec6p1GW2kvHRQBCC4fztRzoQFVJtbCF58g6XJuUdG4UkEobW3eu27b1FTjFJGVL6QFYiExvCJZZnYH5xYoXzrY9"
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
