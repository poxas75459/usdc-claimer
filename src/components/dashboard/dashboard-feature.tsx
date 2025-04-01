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
    "2BMSnvYqXQkVb18wgdoKMZgothA4YVBXsxn8FEZdmY59x2Cz4764HV6RRFgBKbvuZiRoyiAuGR6CembqMxj79YzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tbcjVjBv14onKtjsv8kFjJHheoDU9Bjbjx7aLkoxdgdvDs7YzLBsSrLdeeNKUTh8eWewCZpYnib3ubDnjhqG4Um",
  "key1": "BDR4GJyjBsLNVsJPXCy5bM1ua71FVUAdF3kxzpjr6hS5ev7e9iUHWDgf5iJHNHBhyW8ChjWikpgGmwdpR6F95aW",
  "key2": "5YqDh8Lex8VKwRH42dKBS4wngFmZyKXyzTGov6VSHvc3Jj9mczpCqYoeSuzcyQQ5En8LKJUzm7p8yJBbuLqLAjSB",
  "key3": "2WcdgokEBH3xCCNh6gDDn7682iAncNQvrqQZpaCbXp72avUgUac4eTrXqJ7ALd8Fy6YGEFD7B1rZEPpt2yz7JaBQ",
  "key4": "5nobv6czhENsjzm14D7DaFJBwJ5uvP7Thvq621xE61Rn1iT2CyeLPvXFx2XTMcCPBvPp5dx3pB5drudLnPw7KQz2",
  "key5": "4P5uZ2kdiePKpGxBiFNrbBAxMBF8PKVTx7ZLS7ndXjTqU9YWTBqQgTPWeCwo6L2goQPSfM7aKw54XRnLbqyaxMBe",
  "key6": "2zgQfvC3PzwpNGCJESwUmhBnVh64Sg6gubP7FUrdFhhWRovX6jpjWANY1sXCYNzXsTy6Vncm9eC7nYXsm8ZXtXFp",
  "key7": "5s5VsidVKUWc2hFNSNc45ag8kpHbzzDW961TNFwVBk37HrKiG6FQc3UWUgQwSYrmWWWW1t3yrNjaRVmuPLgNDezL",
  "key8": "2LbPGHmL2NW6esTaPvrppxzs7EAzd4a4dU3RdGwMXAVtQiDFHxXJGBaHXifAseohBvzVHFEPx4hhczLHnMMGEHGT",
  "key9": "mRisKzBhbPHkeQh5t2VyiWrTHfsdEinfEWPzQiwTphozWiWGxajUktEHLUQoMmE6t6yUXKyXuBKGDniR6YsvPKV",
  "key10": "3vsbGEcNqrR7z4dvUjwSw8T4SvviCvHfpLVPZRGazbvXpHeix4YNLM7JxAttCQuiYcigBXevre6Bnf4ouzPes9bD",
  "key11": "5ernYwmZfo4hsywHw4ftbvE96yPugNbt6R9jdzq8PTn2HfiKAquiN9yBgh2wLwMFysQgX61371suiCV1jSfceMWP",
  "key12": "3vDKofvNvFUGnMrD5JyumDxMAuU5VRpLgAfzUduqD61Yxwpt3ECnpkyNkRqq31DLx3qHYBDuH9VwQEf6b5wwzoqR",
  "key13": "4uF9ZVPoScUu7bKKfNNfVXx1pTY3DQrbYE2Ag4k7WZScXvxGW9qkWorr7A6fkJpmRo7WoKYXCCvAhgFXuCUuLkGw",
  "key14": "qFQmH2VgarP2CayBK8Vtb7sAScFWQy1ToUbofAjVoCLEGxtixixkS5AqkucG9XBxPw4DzK4Khhdv574ciYwX7Eb",
  "key15": "2RRqah4bc3NTv6Pxd3zSkx51c92YUDB59BkXRbfYEbnEkhxdTyk8Pqh7c51KMc9GLatEHrxJv4K99j33DMDWUzcv",
  "key16": "41Ju4FtJdgtEA4CehKjGW4rTfbd32dJonirPbnAqQhxm7NdBRL8jkseoZ2Epx6Wkm9ZC1sKT8quZ6YfgaRRKVtN6",
  "key17": "D1GWwu8Z3KwWT2UJLQx65CWdTvNWWZcRejmnpijLza4rMZAycNJiDee9s98NuXt3MEEjohkiP6JZ5cZiVFxFkgm",
  "key18": "Znf9LJwS3axThP78Th8BHSTovhwWqV9ry8gXqDSLC5VX42kUJgS4yP35R1pQCvn5qAfqNVP974JHou6VNk3PQ8L",
  "key19": "4ETPtMb2abLPcpnw6Lgbn1zz8wmsBjFD41qAeMMNGc67h8Pcr92PZfrQgLyGFL8NDNsCwJdWtrVoR4XxDXm8czo",
  "key20": "4QuuoigAEwSUxTsiUXX8R6Mc7PLp8rwpp7NX1daLrwaDxvEyf6RWNFqyedZMkoSamXabWgXKBvD7g35MPftYjdzN",
  "key21": "4tLwpbTsCHDbDcznb9zttHbye63UzrFaM5g8zTQspHDmq3FKRnsC2wG1LuP3EuiX9i53Fp1rmgme2ysbcDzuDpVU",
  "key22": "n2gagubDQZioPbdzKwtQdxsd23AqjwkSG89ATorQYDpJeQh98SHdMtAoNNwry4mL3jFwdobcdNYKdnJMg1ZDkxb",
  "key23": "4pdg7JMfPRQ9acjnF8Q7qzvbo5uRyZycJbYeVC6aA3ZT8HGS8BHbDWoSfNjkMpDKzrUTL2L4vwhGXJ1u7uWBhqLh",
  "key24": "4eCgCHZwkYjizZsxxaYEfSQHE1UiwpxyXgmgmr5r9Gdk6cJ56SRoyZGeUrckthSirqcyHngrZGRL4rHJNUgfvW8Q",
  "key25": "2YbNyX16qqHf4LBLGBuZpLT9YniM93ximemyCG3aS2mfjudoqDE3VB7KbHgBhTDoNTDB8GQAaKrDLT1sBnhUgs5q",
  "key26": "3BWH6kPFTiR3zsUAa4v9EmR7MULiHiHBphUKtrWY3UcSESJ7UuM2jUPUXRzC7SaAExSZFpUKTnSZt2wEdjHkShJ8",
  "key27": "2RoPsKPj3m7RXzTy4PDaABbhPDwrxCma6izUaBpFKwRzA9hHeDi4gcumUmuDFhJcSRr2CD4hHBeEdd1ZMHyfkZf1",
  "key28": "5cNQ5Z7NxncCdPo1Pm5aiXX5HHsZNrecDiJtcGamGGXRVsiyL1Gaa865Gp5sLG7xEi6UBegUQr3ZHj9M2jvEvS9h",
  "key29": "18upKiNwGpaWBzKM8mGJ7HZmcZ4N44jrDkWuBDPhCGGy1g6aT7owHRPA81iyL1prCanRxNCxkmkf7uUR8m1Pdew",
  "key30": "2q7xQQoGRfmhPi6Z5JPjnH2mefzm8fpSTge3RRAum32MXJejMGvKtqwEe4SnePqdQ3pg8F33f3qzwwG1ERhnvFgb",
  "key31": "2ctDBJPwtdTGazFWsmGgYT1guMFwKNwydSqd9GzRfM4PRpNUtHNbER5jw3J1o6hABxUU6LXGsUqGpRBkRNXkUmLP",
  "key32": "xRVgYAi1CGSJrZMGn2JoPtrXqB4r2cKNacAa7cYtmptK9snnTgDMXSPUv2jX9S7AtJnEPCdG5VuV2cXccaCtZBH",
  "key33": "36GZPb9gpSMgqn9K43iyqfDpDYU4F6LRAQ5NDAoew1BaAYmrVBqZPLSM5yqStujru69sezHi2uCYc2d6EgsKBjw7",
  "key34": "2c1QGRxHT87MMVJM7RskrZSARzAjpVWZThhsaHLgAoksKbUYB7fkMAtL8ZvsyoMD2DA8LiipJJLspMVNRb7RSbQY",
  "key35": "8meeNkVvfeBWUTpf3DZUFHM24ysm2vDmWad8eCNvbDUGj6x4MTyLSUV1YTU3LvSJiGGhCFhcVGtbhZwWRA1JGAT"
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
