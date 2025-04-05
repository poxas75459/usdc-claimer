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
    "3AYKSrgqzSMQzidFFFotri9BmmQwzx8JbFgYmL4nyFbsa7wKtzpja8xd5cYy83iVgh7gZ2dWGZixBTDp7iv9Fxyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46ahuHXnhyoMvmhWPuMTcYMkDaLQGAzeNZfwHeHsmH4A1Sg7Xkh8ZiJQ1nRXVzFrbBcqYBg8tBA78pHoPztfZrzW",
  "key1": "4ZbqerUUSPF8ciy9sVQy1iY8r149eYtEQExL8z8uTtrNeYeKxTeXw4EPQhWby3CTWunG81T3br8Akt3cFwctQ7VZ",
  "key2": "3WbnBXgLW8v2ZuRYxidUHSPMx9iEvhPMeik3Cig6uaUa6q9XKg1dEC9eeDHmyRszKPDSvzaQX64m5MvkA3475HUj",
  "key3": "4wmnZwhTxCHzJFQWMcY4qi6vxFgiQRFupQXiUQS15KG9tf9WFnixEoUJSqQDS4BAcxcxxZVUi4MpRS5rdAnASpjD",
  "key4": "FUW4LG8zbMXDimQpKF7uahUpfonqEM4QLpC4VzCraTVp91dS8vVhsY6KFQ5QjmhpgNZnTwupqoaFWN23hubH5iq",
  "key5": "3suR4ecAho3AkzkEBGg8XacZKmBWWsjt94KjEoKPsR7kiV5So1TPzkAJBtP1dUiUcJ2nRihsWek26khqdALDiFLH",
  "key6": "4NVxwuQSQqS7dJPdUXwbpAvmhjXqkfcVNo91LknHFsV19PMwtKbv9rE8zGJ4kbHvDtekG2UsEfxg2YK1F9mzT9w4",
  "key7": "3ChnehDnXzHpN9fYqrYu683q4vFLNmdFtwsrquUryGaUAWLHDya18jtopofERGjJVKTasYDeL7FYeiiv9FwAbDjB",
  "key8": "3s6d8AuTMfXJj96ebUjQFdHvDTQ5F3qqwu2icGeL2wNAjMXHCQMd2phP351r5wwctvwFx4VXi7fB5vL38ZB6VPHd",
  "key9": "3PSEHbwvNR6PEvgvRxBMu9L6Pv6iPnABgkK8Bf1GLWJ8tubP6KHzMKZN4v2Lc1g7h65jzcmK3uLEHbwf8XZ8Qg5s",
  "key10": "nA5CpHrAJcjhDzn2gDNHhoKQCT271CFuQrEYQoMPcEVXfP9L7zywiDwkA3qcSBm7MT1vgsd6FrSLN7KgRhvH2B9",
  "key11": "55ZLRT2Uenuwb98PfH9SnCTznVg9zHhV3mk2NimR4JJ9XmBwaEA4zjdfbCep41zc8UmZx7Ei3VbUWNtv5cHVtuh3",
  "key12": "2BtZQKUL8TdsWkb1HiGgBAvPnuJ3pFyvRh8DTcoPDNFkafEvHnuPJ7LQwPcfPDotmw8YctPKvUnXoaEzSPnYzpZ4",
  "key13": "5RVhJvHM3zdoMwzV8tc67Lipfd2V3ssEpjQ9XPQrw8LCLmQmx6L6Xzu8pvFqMQnJCVbUgzY9bmWwnquVFRvL5jbr",
  "key14": "5iEgHamX5YmLruHQyExURYXCqLZAgX3Vt98UdTPSRZ3EDKeX2y7oTu6SttnYba9VdZYNVaUqnMCUPCRbWtptK9DP",
  "key15": "5DuaXhEfcHfH4nnSx2UweNU1MGUbNeNda3Py3QSi4Ah1wG796jKVGGEqSoknhwv63W7dTn9jkjeKLnHVgZaCaXER",
  "key16": "4qw6Fzcrw28LL4PBQ5DDTvDHEH6dLauMFps5gYz1YxJeoMD6mUnhHfxXbmy4sywefCrkhLzrpWcShx26kXnGSq5r",
  "key17": "2mdfUH18g2tp6whUfGAwXgVuY82XMYXVGjFYGp7kvLiPso1L9dThGHRQWaasBjLFeKD7nG9rM4pFZP49bvFnFiUy",
  "key18": "3zSAGDWWoXeasGdLNeekD6A8G4c4cXyiaP24SZ6gkpECfPE4taYa1C9Shcy7dfkSfJLFioCKayJkG3mxszVGcRKf",
  "key19": "3EaEjZjgTcSgD7WvW5dFj7PgxeqeFA61zwBnVK3K3n9Z5bBAuY9oqZ4e49AGjp43DeJZhBrcVSKoMyNsKWLSsoQe",
  "key20": "24ZGKM4jbamzYjqYCZPpQJhWm9dUFJN1FMU6WB1Xm7AG8A9tnvmipJUnjNVwofmjfig7HU1hMjKxA5DeBP6JwdvD",
  "key21": "67dkPcBGfXchX5kR7MznHPV591Mm5syw1G3Wy8jHsEYgcF3T1BFDuU5VKW8pMoNss2TCSnAFKf4ApDasA48hk26g",
  "key22": "646h2hzYALFjYNVJhQVNej6GfFJnTSEbh3D1VK6gCTw8D8hf1kU9iN2Yo7YHa77UWLYcGHnHqwgBkp25E38WbZu4",
  "key23": "vLfmKJWbQ91xkqG21XXPBhvQ8L4Mfoy3xjsC9kfRT6X88TH1869siqG5TvCzAkZfK9yFm8LEBa9xmDgMFu39ZFE",
  "key24": "5cCJhnxNvtc24YGwTAJ1mr6cdNcJGuBHmf6mR4AoLncpvdtA897p5UA4yuL2hp1SVc3hcde5rhgxwKRJa4WWM6e4",
  "key25": "64aPczqYA1sn7xR528fBnRo9TaS1eAMrzPsruRVKzQ9RFPxwWkQ27Em9XYLPB5uD4MfPcPjkRw6zYrdCoJCseF29",
  "key26": "5pGRJejxctvZtdmqnRJ9AUzSG8TBCEv4AbtFdbcRGNGQPYVrTkxFJYE55fneS6SKd73nHJ4CKv4f3ruQxmwWAgD4",
  "key27": "2hv6HTsxryHemjw4xzwLrUfUaqNFJ1RhSCTw1RoWF9TPBe5PzuvzTmA9CFdqXq8vSmHYGfMQ7sFYeQn6Kx1nkFkR",
  "key28": "5cRRzAqLoPjRnex2ky8cFaWqMKtNAv4CGowcZZemZseLncFgfDF8Q2SXm8Nyp7AmwL9UZWns9mHrnBtCCGUA1PrP",
  "key29": "36CdELSc6FM6tgVpBWZ1w3JpZAk52T2sYxq4aCoov9MfLBShGg7YrMj9rpgoRr79DrtFdkLPZCm8TsUpnN3gm6bS",
  "key30": "NstJt7pqh6pSDaRgj4dHyyMG8tPtqEUcJif7MqhJqMb4ut4twu3szdV9uANi6rmSZBozgA9mXxs9K7YJbYZpGxv",
  "key31": "4yuVrBJxAWqam16Kbrmyz1wwFg3HZcx2j53RLV2gUDw8RkqQWMUsFWH1uCBoh8Bezw2Xs1bWLCja72kSiiW39oSN",
  "key32": "5QywQKzn1pfftTuLFqUEoWeyr9uTHe4PN7Di5Wgh727kAGwG69PhVw3KLCLCC3YHHrKN9Ng84vbPtDRDW5vvRWZR",
  "key33": "aff7XjTU5kN5hkYipCtoGC4rpoJzZQnCZ4kG3N9pYSvs7yJ591TFQ15HQgW1KTAqmMF6BjbCCH4NFojoLibWE5r",
  "key34": "3qwANpNhHjdZZQU8NtNQHBRzjjamkAhqkxymFMnQt9RSGSfQu6Lpzrj1BZh2ctEW61Rx94eeV8BwSHEsF7TuWWU7",
  "key35": "2wS4A4aysGGFauTY2u67PXZoyVmTgeADknb8qcLpn7EK5brum2jwtLgzb1bwndjMuTqJsNANUV7BbZEJ6Yoznqfr"
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
