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
    "55xNSFT3qbqZ518xYc4evU5frkaq9LgdJ412A78FTxnTu8r8LwNkoiYEGrofJm4gEFYfbqHdfn4Vm1wm1R5eNDcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N15jfXNxLWsmTkPxvto1kcpJCDtk3ZnkD3JecdPqbQ1PVK1cr8NyiwtzeuHkcDENFB7bLtCHUtYJ1k8XZXuNMHA",
  "key1": "2UpuRQxXoS8KV63doEBzE2e5NShxD9bMuvdGHzgL4fnPfV1hKKybKyA9Bx7a8AqdyAcSYijmfBRE6acbREG4arAU",
  "key2": "4jpsjQpFdgnnF3TRjAYhHyW29qXg7e334eEcMygV1DfCaopJ2UnRvRpDPNaD49bTzPnshp5QiorHNL4G2jHGjLft",
  "key3": "2KeMMvqbtPRJeLuLAv2xooYXELPEyQEuaLcVD3U3qjandHMX5teQCuffYLKgiqF9MwDgNX8kC7t526ZEcykANxVj",
  "key4": "4cpwhBNJPuhXKUoBfp2redz1fzyTYFYPaogn1HrsDh7oirCfMBaKN2BTu8DobxYw7qCJGKLL51WQhmtNPnusYdQR",
  "key5": "5LuvQrr6aLca3Z7kNPESDLxEM6bAd3HnDgeaz2NXNVsGZw6xkWwuYY3zKhYvEBXgUXJPUMoveJ8tpLkgzEDpFrWQ",
  "key6": "iyhKhquTHhbA9X7db4pMVqMiXC3q2vfQupdYNLH9BqtA4XuzXcUAHvrLQZvttLedGzu1v9KdqyiKvSDexRscSHz",
  "key7": "4LFm1hz464VqvXmEEtFnD2MKMgiHc8rjUviVu6kfFiDgTbjmV1tB6e9qvm3HJuYfHLZDRbYzx5AZZAENVnFacDrg",
  "key8": "21emdUvLFd78cRDW2khDMhUxHBwYEFUVqTzfNTW1Cv8Qs8YjBgmPQTRtDm9jQbwZ6y6bspX6cKRHBTZ5XAdtyCEe",
  "key9": "mstUajnaZQUtmpgQmb2LkKUPxgcRgoJgvgUrNVHsLCp76WZq3tVj8rfsNV4TBEYmBABj6fdm6rB8ScWq5zhijte",
  "key10": "3zgQrXQ9D1apGgTD34B3f3VbxPrQyj4SD58h9ZPg46LjkdRMm7fL5w4zT3Jb68zDtpwpJs3UxAx75ZbauhZuUMRx",
  "key11": "42SYfbJRWDBd8SKxjXfiSoWfNeqitbZwqdDue8b9HrBUqg6R5ZfvQN3LFVEf9tV8f24ivVeyGTzWyt3UeTsV1kRj",
  "key12": "442ntnBz9SZbwSdRg6usdwC57xJohqUh19QKCEqhxkZ5R8rnLgo2KS7h5w9R9f7rFmyh7h4iSmsmeGGGUTmqHLnP",
  "key13": "YsfFsXDgM2aQJENfq6TBohp4MSfQPud64BxuPYtznuWA9idUgMPF11gNvjC5CemLW2zoCx74rauycJfU7cAxqo9",
  "key14": "5SeNdZhSHpJmBSyYUhXX2sjLk4wdA5cVgfZnZMk4hjiRFennaqXekcxnNU2ozzZBSVfKdb9e3mNmDypsmDub51vp",
  "key15": "4PfNWGvkXmygdr7wMoiQVFEoUXtkg1uAJyTDRKM9s4TatX39gWJxceBXpVJykTJgu75ep8BCf5FtcaHx6WrigcRt",
  "key16": "2djXEG83t1P3YQV8YDbmSRzVceYPSm6RJGWGxXzFmx8GjyzQCiSDfzFQdytHa3ddpZ4su1bHBR5roM6KYKXw7WaQ",
  "key17": "4y4FD2Q5mCy3xCpnwfET9vEhxnDt1bninfz3VnVngnbCCMsQfcdkR4WLxBxaeE5sSd7P6FCJL95tvJyUUidA5RcP",
  "key18": "57DwM2k2YDeCUBXCtzCKXSirkR1m9XywWXvWzFKC2wTztpc27nNRSuZJAmUeCpZsYWDdgFz32GE3DvvNBDk45rmF",
  "key19": "3kdukXmbtShYMKmsvs7hx2EbFs2NKihnpxZxD3xH7fS5zEaQCnDieSe1XaNTCL7LrgtWUJPwHtGKwtCVAUkjHKBe",
  "key20": "2wPJndCabSVPujaYBcZ5kzAhbUaLKxaD5Xb1FTgHWsFtn5pu63Mj4caBEU8FNGiYv7VVx8hfcTDkxHxWMyog9py5",
  "key21": "2JHHe29sjeYZaKWkWUT9vkF4DXKfZ5ZzovXg749QzxGPCSpe3UnC3oFH5V3HrKJ5L4RpWgt9aeP2BN9uu2HPiqif",
  "key22": "5nZB6UbV9UMFARhrvCHqutccPqZg9B3p7vXotxywJxqZpKUUGRcL6YpPfVYnHYcmUqB6uq4kvYd2DfuH6GYXxkfZ",
  "key23": "5ULdJdAWD3vHSG9q9FY9dy7FwFLhh3vGAponkLkQuqJEPcvzNxxHUinUQf9m6WBf4r5GUbepRNG9kg9xX5uPEWca",
  "key24": "CZRFMdhRJkMHXaGKSV3e12cypyKKZ5uyc53Us8xpv1SMTaYizw7MqRo8Sz3ZPpSW8BqKvWTp692MGJo8GnbtTcK",
  "key25": "37Q76qJHbDEZXMDfjUUEcHwE5LvNV62kpKMLwtyuQLY3ryVBE8tXorrffbtxXZZ42aQdKxVe965VdtvVyj81AEAb",
  "key26": "5kkn2HQcZjespy2ZyyT9JTf1WUwyin5RAjegY8xD8FhtZWz138BVEDQF5NyuqGQFWo3C7t9ZCsKgkUmhPKSe1eBR",
  "key27": "2WSwW3yt8FCv4b7pikatz8KNpaf6DYuR8XWAFLgLnNhqXZK4eE4HEaANVskdoCU4793VRSwEG5RzpKH3x5GPKHNB",
  "key28": "5umZm8PP9PKgcnNKhH3F4QqnvuoghKtLh9ADHnKiE6yXayVMPd4gdyQTstUBAQDBWiW2yy5Jr1q5iQisMJSj58ES",
  "key29": "2EbcHivnExVbLhXrqFTtxLLsy7f4742r5xRvaQVgxofCQsLvtp5e6Vu4UcxmNsAMgm2MffuTh865ACRiEXocLabP",
  "key30": "2ebmqYgmxQSRxktiXLQsPySfm6o6Skzmph14Nry5WdzaXMxyzkBfF78QAteUZcXYX6DggjADKmsSSYT8AJohncX8",
  "key31": "43Xa86axEyxTGz3pn9rJRRAX3FL7Nqr51vc6VRwdUc7uH7Fwr35tMh6iECaT9eejksJScaQxDNxZnJTY3JbfPRjH",
  "key32": "4Xmxke3PsKhojtqFigHkg5j5RwkH8h1ofmCbTx7tLovmdC8VwnsSb9DfHX1TQd4aopATpXhcjBGGFgsAY31MZd8u",
  "key33": "2U277Kf7xiwp3ugEAHQPqBqBYfvigBxMHnPyQNVcuBjsm4BkxvRKM1y5rKiRSsxADCpw6UK2qw9P4D3FoM1HkyGu",
  "key34": "22893QSDSuGQHBm8zgUXtQAaA2J4LNqY49MLFL2YU4aS5QPEMorn9f8uXo5yABydYm3nf5xvXdNn7REkvUxoZBaw",
  "key35": "412wKYTYrosfqZJEQC7Rh7GYfq5cGHaEAYCsRKc76hSokPhwQ9XgYBs2K1ypPtwMshEjpwNamXfeNkqto5MjucQ6",
  "key36": "2ZrHv3hYP6zqXPDsnf96YwKr6N2TneK4o55S6v4Yhv7i6Up8eLMiEde1QQgnwtu3ZHduFdWshNiTiqFbmUq7bhP6"
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
