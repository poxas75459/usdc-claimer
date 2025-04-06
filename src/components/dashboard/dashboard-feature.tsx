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
    "4AN7a7LD8CiyjSRHh7jYmoVrSPtduUyA68f55puARk3jkH7ypraSjES8dfBwR2gZoLSoxuRhTYtPwfmBCLrKdRXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ofV74cwA3yTUTySeK3m8HzuYTw6wDrkzEZ7VBiHYYtjKqTnfDLwySYt2go8DcQqjHqVvBPNQCyS6SMXSbCMdywx",
  "key1": "41Zmw1tvjaDR6nk1R2CGhqtTiBzg2ZAhkog6zANMrrVmf8GD67FMKP7T9NrFzoTKiyscCr1Y68sj8zb75y1jy9w1",
  "key2": "5wfYCQt11HAdfXHff4aBUbEjsWZCKtDag4GQRVoRyRRkZtcTSmKtkaj1yGyW3wv6H2U47gSHDXoKdua3YXcobc16",
  "key3": "5vzUTCniUaKqtyXstjkkDFGn8BJPDcPXzfMghfzEUCQKopkt1PVBcZTFNroHP4VaUbpu9J7QKVccMYMuTjz2bGN8",
  "key4": "3J3UivhnJ1NuBu9RkCKJYFNxtX1cSAvZjUf5tcBKuKbzkSePXJ5oskDZcHwfwsPeADKQ3NJshKpYm5YVrf43JbGc",
  "key5": "4tmDHSWv3PHnYWk4LDAM78TgJnqqa9BXzYmDoBbBTH3Ss52MMQy4kbQ6SQhLqARsQWahW8smDdMJpR1J3Sw7z3Jb",
  "key6": "43Ph8QVa1KKYFtniqzRtSLZKqCRpaurv1XZtHVQmtpfcFtSNB8FQ32ZZ7PCi3RDx1tfHHpktjQzVHEH5pnZbMiey",
  "key7": "2MkDwsePK28w8F22RTczYfp8KvJzbyu2fcwog2wgqgtDPrjEANftQmKYYgAkLYw1YHnnbXNnfSKEMKzZEXz8kqXe",
  "key8": "5yhVjursve8XrEYaVtHo66Gm6mAdAiHYUNG1XyjuvHZz3Yh6QnZBihawZu7Bke4dLUWKeYk6r78sriAs12hALgHX",
  "key9": "4woeRKnNjvLc9woVPueU9cQsdEyTXTn8hA3YPhT2sTdWyM1SbEfnY89s3B7UwuxcdN3wpmqZhPfP1Ds8CWKzJbPa",
  "key10": "2Ba4xEG8edsN5FnhekYvQesL2qmw9gq4raZ7kDphqDVmSTBbieLTJfQNmSAi9XytbToJ8krngDNHb8xY33gEu6ZJ",
  "key11": "ddaEaHeJ1XWk99PjBzYsVrBsLVt5SiRpZyQYmK8fPhzsu3HVtYZvm56r3kKg1XRLYxda9j3URxuW87gMFkGWjPE",
  "key12": "4VtryohMBEBzTFBqkECzxqMaEj9V4jJCQvWtXQrNfBYyX4UB4vw6GWuGhidfWAwxFdBdUeiezXNfRkTZhPpmcvRT",
  "key13": "5SjPngAum2BAFbZg7i1asVcE2Ua1EC9m4pffxMTjSFRK3rEmD3b7zUtFZMzXyRMA5KooL9eVDNDnL4vF7hSzKFrv",
  "key14": "5Y3poU1uYQgnoNrxbVKW4gN4mehsKnJU3vWF6r8CgRrEhexgH6d9F8zHR8adEDdC7kJqdB9Zc1bLuxBPydLkSMij",
  "key15": "b6dkssBRbjxkEKXpqWNztAmJHvAYLTQ3SQVYWYfEsmLGP9fCqTkhXT5Rd5EmfUiFdo2UShynyRs8xaBdVgGG4wt",
  "key16": "295EiB8RZyBcNYp9oiWAemVDpq3r7f7F171MihupkNhP8KxzJMVnFbhVszd8qbPVk7MBepuNCm72mVzSRphSf2TY",
  "key17": "ti3tugocrUYUVjVRz96vY2qBoDWPFBk2LjfRayz2McPGebMuHeCtL63BnzjY9GGECbtS9ArTcnhAAM6TfpfB7hj",
  "key18": "2qjNMFi9NVvn1BTYrnuHM2a7FLAmUDF1iaGPrqgFTENSaJEfkA4NMWseRXoyeEBsDgKuWL9ZuMiDomUP5w9QAx78",
  "key19": "3P5ewc7zjcPF2j2Jog8pppUFfpnyv2rNrgiwJ9Tm9vQLUpdf9hQb8TmzfCvL8EzGG43RGM4DF5wqEMGiea9cn4z8",
  "key20": "35KNKtwnzyCfrye7qQcDabJ2JmBtvqWeBQ4H13i9iJtGAqJ5J5fguMPsoNTFq8yZ1YFhPnczBSzVxn7wCseUjSF",
  "key21": "4DbL9MvvbXwZFhs332qG6xzirRpxghjnLCj9usUSDd33MwjGA4uf2MNzY8Y73Wmq8eV4Sw14T1Wmu1EbCUeomLHD",
  "key22": "411QaTWXRX3S7zyYhLUKewCK1ASRjmaA5tzXpNgxDXTj438bhsFmEdVk5aDCmwUErnfXLguiSpTctJGVP4omXPnh",
  "key23": "4BJyJtEsK82ExuhNgaDjmQBvU8BGc7j7i4Dx8UrpHYzBcNuwrUYgxf5hdot7ShusEWV14nJ6Q7SJD214ALbXdRr6",
  "key24": "2yMWArDBVvk4sfMyMtiA5FPtRdb8RxqemqjXEcTNrW13kn1seDLQuhUMrqxMGwR93esHhgvGzuGq5mpSDf9A8Ktr",
  "key25": "4dL2KGV9bsy7zXvqhRtWrEUAPRAgXqqKx82abARHv742AoE1tEievYMiQQis2WN74PXJP1RG13n7QNBshKqduUAG",
  "key26": "L7STx2tB4zkFg1wgw557djfpGoToVf6MXjL5ZpkuKvsQ56WHBzahnvwDFRRgxjcn2hLd3QfjMoFZ1GY86zxpCyx",
  "key27": "Q2gHeBwMgrRbtWXCogQ1xLv7okQPEXKC56HBC5Qj38zG1TdaKGqy9rJYio7FZFcRavNCjTm8fPDFXMLiQn1Ly4X",
  "key28": "2FdjWteSGty3mbRjfX2QMzPm47QTmxcYzE5PfNaRXcXGJ1aLaJsMzt3DksKEwAr4w2oytKMqGS74fr9gtscE5Vob",
  "key29": "QJbUbLUSzNmoDDxN5FqKcvoaipNgkKhRFbuRbjJByhAe3kcMdAnCYgxcrZXppuR6jjhuM8EXXDKKb4y7U2sW6Mu",
  "key30": "2D94PunJcb5sRHJEWZqMnrjjZzMV9o12Q7ZWqrdjqPfmKMV4tgu24kVoLNQdYm2XgPBuwfiz4fY1nEEtTqyUGKqo",
  "key31": "3BwEUzJnKSKnwGmeUXMCNDP8bbj2usWdvy9yc5qjwypUfu4KnFZtxHhC3ys4BKrs28kCy7f7F7CsgYBd2DKrg9UB",
  "key32": "3X9LwNLWWrzwhwyATxX1CvVruP3NrFRpbSVTyFZycvn32D3KT1itQvRxEV7G3u65Y7d7ttnG7cw3w7ByUU6ENnMy",
  "key33": "3zWCTz3zZSN9CRKsHGsAaAqUtg4mahtc58mmKUXUfs7VaN6LXKiz1oh6gc2LPrtwzjR2n5zf4UTtKEb9a13UcPfi"
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
