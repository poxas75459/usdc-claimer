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
    "3ciZdrZq41kHXRRkBxAGA72fVPsnaG3GNDghSp4bC76BK92W4jAJhxBxbN6qofxMMK3MsA3PbwosCSugb1zoRuDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Kri82gSUNtnbmV595Semta1m6qUzmYeJbVbzQZht2Jyp7CrwegYDzans3i3s45sEuhqnPi9wpp2tJ6y6AQuo1t",
  "key1": "DX46CXNUcZb8Ghce2CUiCvmrAeJtor6Np93JuszbG4wMALqW2qhyx7MYCeiGH5NaZenffSQt9pK2Ntqq4dH39rs",
  "key2": "2HZZSL16swfzJegVx8gQKMzLnpmHUEM1YKQxbDaqKnVxgsUAyaG7YBvMYV5qg5AYpkdD6f4Em7tEn32ZE12qwygp",
  "key3": "4esvtBjFuL7DdJobfhisjm7Px8HdhBnbhRvw2TXFnNZAbpwqXRfUETB6SEux22Xjh1CQySSzi2Da3tdrQkKM1ccD",
  "key4": "eRFppcVLVhNhcSVCfbWVEno1RZnDUPqY2KgPGMdQYfdFTihP6SDKGJ9sTFa1NXrVXuFjeA55dzsmyBDCXSDD13g",
  "key5": "2KGhPryjBR4kcWQXuehSi91QEZLxhsWjAA1T65TL7z2eW7zsTukQdrm9WB2NiaggT7dx3dUjx1nLK6w1kWw1TM8y",
  "key6": "Bpbo81FnoGGrtTRbPxnjP16Xdy2dARuHDDyintU1QCbKrNLtLTFqHWsjWc6XJxohUV93yFz6VpCTDxXR9ARwTMj",
  "key7": "5pw93HYLJp6gkiLnbc7c6f94RzGcNwyHZ4c7DtfpdyaWz7nBFWdSqWZhdQ1YqT9AXFvVV14YrY7YEc69tQhtahGy",
  "key8": "5QxW5JfDKo4enH71rxTLdBhTCPWvXhgx4qt1eRg4Ugevty1e6XAq57wA7mnY7U5YxobhDah5nBTdTMZtXmixoDL6",
  "key9": "3uPA3h9Soy9pxgHLxfmk9aST63prrDaG5tqErxqm8kW8fMcndkAwinsQBrk4eGY6wtJR9D8HFYCLCLihuuAWwa8a",
  "key10": "niPHYmFKfaj7ec57FvqaBFUmQG2sv2S9ajijiTf9CXLzsEbxnLqV6fmdGw5UusAvU6E6LsGMHmxDAPVhRyKRLpn",
  "key11": "2JFQN8GPjks8N8kvXxEoRZ2zFcSEhoshi7HnGqPmu9GrSmwD3qMNQjp3AfbVKLvYyzkuQ3GaKxMwnoHvVCicvrzg",
  "key12": "3zHTmdwERnZyjDn6Gcy62evrLGqoytHKxU8if4UMzPfFkogMTAcBGVXSUJ2nSm3unm55HkMDcT45JhsFrGALViow",
  "key13": "4mGHnmEc6zo9CeSxxyXS3dXqz5HjbQTaQSMX1vX9fhAYfPPxnWvMyVaXKiZLDS7g6Gt1VMFgZXA9Nm9fTeaCcKyz",
  "key14": "3wUZpRc77NXEFGg4d7qbC6yVRb9vrmwM4XdqD9Fa8moyq7uiziFt3dHdKzsNhc9uDn5rMCBify2JdDnw5T1j1mfp",
  "key15": "5EWMGL93FDxeB9YZmB8cqef6ypyaba1bEdXZL7VGeB9pWmc7sNri9ayq7hHG91xVJL5hTanYBwz7bR6kuSpUJ6Jq",
  "key16": "QRCuStgZBt8Dgoh7RQu1g93SywghUKYtiHVz6txFyd8cqKy8cANLuGVpghQDT1RAWoSDqxXfMyigS86uHsmYfjw",
  "key17": "4n1ekvHLTecX7ZWiFcJzM75RqeFpdycbDmcRtFKv9fgRdQXzm8S11Ljihu9xfPKno7pEjn1jTdSGyq5tEkEhYrVs",
  "key18": "31AQj4r8sKLRozr5ec87BPSamfgmq39gKwpsqvQongFyed7bpdwy5QAeGZ4TmnXYDJP9bi6TWnidZbCzchJeaeJi",
  "key19": "3issn2MXWbFHx4jGXE1KMshFs71hoH2XdUakmU1EeuTvoQ1sP8aaQvmTAinHfTxAQZgE1FTDvF8BaBKDKn2WngwW",
  "key20": "TtFFDdyEDeAZSoYV2v97CbyAAYfrh2Ty2qZPPNChyXCfCAxWHwTpcLoYxFhB1TQ2wSQwuH35KcFH3myMNgtd8Pg",
  "key21": "5u7FbMgaJJ9wAE3Du6nYDsxtmYHemErEA5yb21d83riXW3Z7JjWwfaooeFkT2GzQ73ScDT1Sse8rA2gKfcAguv2r",
  "key22": "5cPKaF4P9evBndtgVX4ujaebjr2n6JmkvEFdWS8bMPgxFrEve5dpkm8vYunKrYR632H4iLbq5smYGYQH5mHzQufH",
  "key23": "5egLBJTSrpnVsTzow81hfe175FWRBhFGmWDsmErMUpChuSMTFodFxLFWJYgJvUh7rBDiU7duFNq9fFVLY6XAJgt5",
  "key24": "VeECazdhEa2Rn2BBPP7V5UvfmuiH9nvj9BvUDXx6uMBvKovVcZHNPKhKdJvRb7yTu9JFAh6QMML1U1W9YDfTvrg",
  "key25": "zvV1WQNDmRxn16Eo5ALSaoKi1EKx2dyyBrBbrtJDJMd1qdv7YRMNxvdvoCQDXAQWJGZreZPAHNeGcFdsF2iBnto",
  "key26": "5MmhRUJuYAAVjHtWmgcgyCASJWGXb6QbkNHMWHxRLGfg13jnqFvgUDZwvHmDRXCtHdfWRwv5bLRUdyv36vYdJcyt",
  "key27": "4M2kDU4nviHWtAkeR6yFGkryVVxXeEf4b6ZZKiTS8NdoYtZJoxhM2jcfRPzcyTVWsBZjRBQMQsEeT4r1wVshHVuu",
  "key28": "4XkwrxCPAKyHg4L19BDxb5GrPAHbEuFGyhkqGDB7Pihpbg8vUYmbWT7BuxJpFfwVPBjCgFUXtXmcYhWyJU6KR2cw",
  "key29": "3EWS1YC4qQLHej5usBDaH4UU8FgAkR8msMsuPKKywccK49RG2eLkwNBAYg8EMBqJjLdjUfgoFH2jG4QdW2CVCe5G",
  "key30": "4qheZcsSyZ4MTTw2Bc34sZKMc7feujjdMEgxFKhUG9PQUXx8pfXkgHD6mL4MpCyjcqH4UYbPhtPoDnkAjyjkV3jP",
  "key31": "4bsW9JUVSAdVi4GxDSNdcFMd9FKoC6V7967RNQjrXCy7micR6qisg1ePaH8sFZnkT49xUtgmKoVmHGbbgSnNcDGZ",
  "key32": "371A5E6nnkARtjtbNYxyhGfvvujKRERfz7s3GZyZ6GeX5VzKLhn5RDkDeWDzv9Dw8YRrP1LzwhzkQ6NtcV18Wnee",
  "key33": "4S2m1SHy6vXgXjNTQFBWcaX2snbwp1gUm1fHzFv8tu5Ro5HMbDZwF7945CZbJSSr91u3egkz5gnjxvfSvP7HGKsZ",
  "key34": "62butKvyKjY2hjb7xvV99NiNz6eRXLUxNohSnQbx6zR8Lztx2pjpoAPnjMur32EJRNDRB68hkbANHebWsccuwo2k",
  "key35": "66LuHXpkexGQ6YRVai6vdHZM29kdmH7qAM782he6FouCDFZ8iwKtmJcQRM7YBDpva37NimVaH87LpvkPQ6VsMGZ1",
  "key36": "3mHDhseYMnC4ww1x3UqsBxBjnyzTqFDYxxmJcw66QvoUPtfgSjP6L7ZxtDmFjVjdUi4PzRZUX8q5KTjUNwNCWE9B",
  "key37": "Ybt9otZFNCYD63GNEahEKHggeju6CWGFUw6G5E4UNG742XZKZzDWY3kmyx5D3JVTntLrfH9hqqhyctWJ6EH2e8H",
  "key38": "ABN8Y6tguw7trsUyabDU8KXsV2wCP4RR8MjkVBFoyQp4rLamAoaCRggbNd6pzThqbUyMh2DGWenLFz4TMoRrtgC",
  "key39": "ahUqyqHFxhCQWffYzARB9PZHD3zBXsLdGMvsKfM7DMaomZHqVWacm67KM8J3VkP3LaskqvBbSBKrs6LSUTgjaeQ",
  "key40": "5HdzsGYh1DeVvixed32ks1LG3xgkNEwAaLGchcZ2m8hjZtCQnugi6D72Q7GWHRazwZYNakCNFhNP3rBcGtsoFSMy"
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
