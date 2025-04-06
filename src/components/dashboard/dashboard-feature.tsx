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
    "3eRifieZHTdjRZyjYerevvJRMuLmTeZiLzAzaXc4DjhDSNXvgz8qf4xzCbqmbQmuohn7m8pZzRoesBq9nYFsL1AD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mb7BWocxV9nTc5yZ4Xd8zznPbxGhXFqCDkzJ3doUHceSCn9xZdMFkX3k9NCd5jjmJKC7VbhaXS7sxqSZefUbh57",
  "key1": "1yBCoFU84ZsG7VAmQGSJPKcjLBccTnKGt4mNiBgBgTEUK2KSNuKnS9X5Bh2JxMTMJ3RvfetMXKMpMAxZu8ivPi5",
  "key2": "3M24ojEPFLDucNDZ4k7Teo76sV5SmeJWGAc4oBuSo4d2c2Pa6gaZmg7xT81fSMcvGNbamQBCEKBv2ghpKLbLxJw7",
  "key3": "53acosTmD5zhJM2aRuHzmwncoZWjJkL7atjTeQ8v3PqnrcWwCEgpk19xdYQ7WFind3HfeUkrFEeSTVd7e9iTeLpn",
  "key4": "2RQt9yM2W4JDfYPesvpxDDt4WYEtmKJSfaqbERGCrrHBsnMEGHCimLvn4GCCoym6rYS3P7Ed7pdsrLh5PoXLhNxR",
  "key5": "4j4FrkUEHs2WXsoXEaYvmbcgqSXmPhukZdzqGQV7ktZfAbEYRvX2EjgXZJ6F7numCH3wydST5dztiyPsgnL9G9ga",
  "key6": "51e77SoLhoSjNDSQAqr5c9prrfVmU7bUmbYegsUXyy31c3zxT8GhNcVaFH76upPMY5T73qRCQ5MQtUWWSG3DtBAC",
  "key7": "2mjjPBQfcf3PVxcuMt1oaDtoMN7HPDyzV3BZSpRzmVStg1gB4xy6y1SxNXm2dcMyxRnEk8FUHgSoBab6U14FGqzS",
  "key8": "3A4Vps9DX186RHThB1WheeKFwnknCpcLnWnxupQTwYeATg4TWR1Nr7msAvNuwiPbnQn3wdhsRmCfKshzvEzpbRbv",
  "key9": "66NyCnwiPfwn8xiX5XADqX5L8HezGypiNogFDRB7CwJZGJvp6mX7tQNZR778Jg6AiynUyQ5MhV8oYwWV3CF5jG3c",
  "key10": "62hheb6i9MuYkmL917X87qVCwKc3Qjwxntew96b8wT4uorD7VmLfdVd516qiSmxLj94TsddWS1jiZjt8seniGvcF",
  "key11": "2gnV3P4AGj7roiRC6TK8qxjeLMGn3eha8ijJuJJWrmqQioMCtFp7zKhP6pu5zwG5iKmPLaUC1UDqabpnbFrDkY4p",
  "key12": "N4Ba2KyuwVZgUa9HLLJLPSUvyC6HW1dzFsu8sULmspAoxyq4QEzbpMCMK7MH2kZ4cNjb1YxRy5pKeqxB6Pd8Ku1",
  "key13": "5QkVGRwNuN3WFzxEDPFnMUbRQbUCSa6nAXpziwV77cFZshXVGpjjLQrSxKdGiyWdZsUkcQt75RvPbpQwLVnh8Pyf",
  "key14": "2rxF6SHDSSiFeqiGfqAAhhcm1GyehFNgvGfvXFA92t9EvztGrfzpqvrLi6wdj3qSXoY3Ce7erE37G8FLgQBJthcf",
  "key15": "4qvJzi4x5Z9mjq7YjjVU2zLVrKz2LxokE7eqcPVPyz3QX4xNLhbRYbc568QBaofd3Vk5fNpiRnYKsAFkkPWxhanw",
  "key16": "4jCzZpwpUYGGRhfVweuoCE2qU9hZQRT9Lkgd3Q1HHtTvfYxDr9fdDY342TC9A7bqQVgPS5JSH5nx1CzfUPyXYEhB",
  "key17": "597rgYLdyW6bgquxmwHSvZsG3k1FHE6e6EzRJNPmHNj8EYALmojgUouGec19vHs3p4LQtHAyABYt5PRPbHACsCX3",
  "key18": "36yzN77KMu8XsUT4ovxXXtPbrbAfHrxVrEqAVyDPztMSVajkEYubPNCgsgAT4wE7XuMXabqJZEzrFTecjaLuWi6j",
  "key19": "5k792RUsBYiGhWFVArnvh56Wj9HcNVBwUq5sg2Amc8QhucLNwgHkvq5W3LteNaP9EcQvvE9dEHxr2sG1BiesfYSV",
  "key20": "2PtSaLTNVp8pqJUbbKf9Pm6stNeoFJLCQZa63CVtwsyD9gjzsYUCB6nMAfMjX73aP9ZKZqnD6bbaajhceEAkWMuQ",
  "key21": "5qBp6nZ8K7wcw5kH6i5dpQ3pWT9hGkHp3ukDL2P9s8Cy26LStn8CQQ2aqmphrax86EtScZgJjMBcrEWosCFDHUXg",
  "key22": "4KsLTHtY4QCvH2vWjkoXftypLpLj8uqG5HgMxhpXyB9Zm5knSELDi8Rajp3nBpvGhGodiJjxyDTSmYHpuboQthJu",
  "key23": "3u84q8VBb6ZomExSUxZzPWvHuyG3pnYFvXuUfcRJrjmK69E1KvsGkXnNrFp8dy4hPqAzbcCDVJp22WLpjjLtpx1c",
  "key24": "tS4tydGXx5SrYp8C7VFqfVTDnLyJDNrHrQZskxoNZ46jTvf6qNaVGZ6DPPDdau62W8RAKexyYseXXKtcz5riJJD",
  "key25": "61tLXeZmUrWowSjWG2hMT4oeAfjZHEbn8sgAWtLvzK58MbUgXQP9kFUQ99ookLQyjGPsCchvXJANu3X7i6UaoMTV",
  "key26": "3CXBRXV1VWQHpfxdBW5j2TpXh9jLSwF2XScn6h7YE7gbb1EJgZu4xxhvfThPfnkTWP1EBgV49oM8PKpSLGibhvvS",
  "key27": "boGpoeKRf4F88otGwgPFhVHp3xCgn63gx1wJNT6SqYsAoxLFRWf48wKz67kdPCmE5uu5gRBBNixEB2WWf9ZraYy",
  "key28": "UMQ5rwt2WFG2BNxXJ6U85GeT9xTqycE6R4f97QbBctACBbqNV5i4cPdnzmPLVGc8qVZUN4CmdtXBYrMRnMxhCKK",
  "key29": "4XUoFnjvQu43DWV9VZwn65aShvnkAiMvdkBES3BzUVVoQGeoFY9RQhPZRggoTGNqo4qJm6dHjVTHeMYbfLAuxXNR",
  "key30": "3DBeMspDtJRDkA5LpNn9dvnHLyiaqbs9FEZD244WMosPKkpQ3qCLRQaPSvf7yDMkHEdym1oyv2kuokgHCpVPajVJ",
  "key31": "5JoSGiBRHLZGspn8banSHtVLBQBrP7Yu51udW5CMPtemNug6pWPmFcj1XMKUDbf9itf7w8pskTV4YZV3zfPu3wje",
  "key32": "2eqCvL3Tx1xuSGRhuFsNjY6wFWw2J9Kmbuc2F8Ek5hUUt5v4DFLJ1wEwthR1oBKd96z8YiWpZQczyh5oPvGYdmAR",
  "key33": "5qZAXjwozqj75Af1uR4ZBswmMnG9P7r8dAck4TuUwwvSSPeNwuRjHPxf1qL2M4tbJabxyZ6YjH9WK2tSPHuDALux",
  "key34": "5NbnuWvJxePkmdLZDVSGdC2SX1bFtY6Pu18uUbTgBXgv7yGviiyst553YwjhC22XtCV5pjiP6PwG89KbtQgLgvej",
  "key35": "2rzftZAQeCevvQajPWuz2fa7agKYhsdXoe1or1kQ5r61e4GvW8yPaDMuVTCnkBLpNHts9PzAzxwsZvPJZKF9UWig",
  "key36": "FvFE8p2R3WhQfQmeZfh57Jr8yDjxq7Bz1BMkqjDfjnB9Put5qcyprJTrGtGEDXpDRNrwRhvykcfMTAdGKA6LsDx",
  "key37": "3AqFQSQucpdWx5hX6h76LhCmPVL1RFzMvdWibezSj4EC4rterPGXXvQKzwUFYAM1fyM29fPt6yTtDxP5dGccH7ZQ",
  "key38": "2QrgRR5fuSS29BA3NeqiYDpsmhgsgxfUfNZ8jtSmdZTWP625sVb1JdzsLJz9S4ipdBb61joeh82Zpzo8SNRAwCo",
  "key39": "3nRWuEChxYLHzBbSvmYbeQeLEcx6Xpm16bd52EeyMQGBi9xztrhT2huewDm6fE8ws9coqf47ShEfGzhiwCvFbh2e",
  "key40": "5Ysz7SsBUdF6qrTJ5DrWCwTsHZ2sD41Pq5MKEF9sj8uMHH9sYYzj5KWmTFgGK8SoUVXQzp5GbMhfCz4Rq352nX3d",
  "key41": "5ZtNWD4cJi4KZrpDbpQ6tF6Zpp9XQmyYPnR4behGqkBBUCqKsARevQgmAC6sSCgiW1GMGqKacnF3Z7Swj8bMdiFG",
  "key42": "3Y41uH9n4DQ8M9ae9snbP4JyD2z3XAiwuBMWudJwgCjQL3UJAhnc3HgGNBpPfT2Z1PLbDzLULVpW3mcPVmkgjpPm"
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
