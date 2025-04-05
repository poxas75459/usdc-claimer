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
    "5o8ao2UvfsDYSZCdsTwKnR4oKM77qaKs4wTn4W1JgiFnYkyJsJqRvU1h6q4ZUsc2R7CZZztGRP5QXHbsGHYyys87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JEPhEFck7GNsUYhBpjvk6MDReap3dQpstjsB9cqNrpQ6vuDY2SBGZKbtLT2aJaCy1zgmxB1f4enNDUmkx6rPKpQ",
  "key1": "3nPxYjXa2vexB2RAwkFdBQipFjNxd9zTb9fvSz46nMEYfKZzShLifGrSH2S2zadxbZqy7Yp21CzpQL4MeWGMDide",
  "key2": "PKS6zZYgdpHoFVHpMwbm4BTTaBeP5whCYkNKTMtsbqVcR7J1QnZgFoCunSEin5UsN9uazA3jXbtwf6NQ6ZQXUuj",
  "key3": "26JTXB3aDMkStRArouhpKAeHMAw4gSMsZ3TfBX7vHkwZTvoCN9NbUNpLKi4BqMCYAz5oL39rKXsjTLBoQZGoQwXp",
  "key4": "644Dy7MFzDNfe6YFxi98d3EpKhQv9UkYNcTum5gUAygZ7UVvbvzfvvtwF15QNZ3voqSeZmjgS8tGQLwPYyDkqMTC",
  "key5": "3BsUHF1epaVoijBHRX8zWfah8XWnoQ7XJaJ35xfKoPvPnFq5DQkXgoBsikxuzkQYVRsNho2aGzfLb4omiXUm6uXM",
  "key6": "2BnogNGSJ4WEkGcTYvDJGvEpHGZ314ATD2Fkp7cLksWsTB44dyeCTzeyeBYEcxDsWDdnV3Shc5EUQvuHro4FmSPW",
  "key7": "7Q4G3i9zCpWHht8QasMQs1o7HmqatKVR2uiVSkv7N38cra3QdgLWgsETrvXTn1jB6mf4WrPrVSTE5qGp33n3k5R",
  "key8": "j4udVzd8rTgZLax84LRgkpHzCsZwf37nsdtJz4uSK4DFjSv8RHUXWp8kWzwX61LsqqFCZNf5G2gFjtF5mMMnoUH",
  "key9": "61j5e1epwmTjqqFYmnbxw75ekjVT12jRbCcWWvC8ELf4WzxcknA1hQfkcGCkps9uYPRpEPvte9XGBuExRQXPfbuk",
  "key10": "5Tq5CZNQrb5A3N9Lg4K3kMgFz6NPaezDZsJVvVyBLkyKj7tfvUMpkmCwBUyfG6fGXnsGQuTNTy5fjFf5o3sZkq2D",
  "key11": "35DGsTH4canGDuviQARibuLr9A6PvAa2dWZADUesiWLkm8D1nhgEXtrAdZFbaUWN3dryXiThH4zogKFnRdJdwia5",
  "key12": "4crjs9msLs6dtGwhdEVDuYhLZHjyK18Wp4wfry4csnE9MGuAZNHp6qSrxUsRoU2csQ5z7qADKZnFAnKTTTdA9v8r",
  "key13": "4CfsntUxniFU88xxKdcLCUVto7DvkJU7cR5THHsDmNkLPuhFkXKMz18QCRR5YYiWuwT8FPhSaE28P1oWbvS5XeaA",
  "key14": "5RYjonDU4pfkepBXSypteoGcGXmU1eHjSXtg1hNXjGmaaoiMkcrpBrJjZsFbN3f31PLs5wT4z6AaK9bSgTkT3oGT",
  "key15": "okiiYNYhKvqocwri4u12YkMEAKEk4hiYiBBZRmCBod4mUXebt9wrGudVrNaCQNUbwGWNVWZcx5nmb74YfExq3yE",
  "key16": "4Tg984zEbYLEhzLxn8q2nuPpVTFE75HWsgXGvFyoKEpDscMPKpwX2EcbcbzwTWMB9ve2Nmg9dq7jFUjJERsZkZpf",
  "key17": "fmgyNRk6TEexpFjf9TP4EgPwEbiXm5b6iCD7jXMeBSP1fuMCf892oSFTFcVd2WvYKKz6pvPymdcrZG92VioZsN5",
  "key18": "U7qBncFVBXjaVhCueQwQYecmWYKUuufR7VJpLq1ft2GRtth1ynsmECKBg4EekVeWKmRVvXf7CtQhbGqkpNi6Ejr",
  "key19": "2AZjPWKY39tcgkRfpqddTp6i7jsbYG3w9uMQtEetWfvxCVEripH6qh7BFwNK9uvyXgCPV9fF8Sn27ZbVxZvFLJNv",
  "key20": "3dC6HBkwypfd6saPTdvzM6NkPH5PfQipyt5ge1McJnu8fdUoSEmxWn5pv5TVnih4RYdDHU2zMocw78Etd7qpoxWn",
  "key21": "rhNHqoHDaUzijRZRaA6wXbeWRMbQEZnTNv3qqWWFsPU2kr69gfwQGwLUatiheWDjSZwUBRckbc22TVGX7j5DWFc",
  "key22": "3dbzoxTjbygmAFtcwC5vpBWtH7soYoEXZapgXVzfC4Yk3AbYyfm65VgAnUJQNnqbFbk6WnowLAx7PcCKLzJvdVjt",
  "key23": "5gvycyVosJAHmFEBbMZXUMGZLT3jR1NRcchTrnGMrC3eLTL1DSa1HfEHnZowqm882jYtpm6qFGQW6hXuvKTRbKRH",
  "key24": "3CddQPKjwuqg1WoRkv2kAxpunxYw1gCqii9zUsvAgipGA6uULrAuij6XKLfhPLHv1qRhPs6bMLxHyNboT494B9GD",
  "key25": "671R1Ri7gVxxL4HTB2GRiD7DHrehXbxQBqHKEUMf3K16BgsXVcqscFVbUXvZ9eXti8xvqrBYZLqcqiedTaTnVhpg",
  "key26": "2Y1zhk7EkbVtJX4J3dZf9m3QS1u8xS4JvcyESSdHBGmcV9yQ8sVQbCPjRx6FMoVNSwS8K5QirfYwKcav2zR7jkg9",
  "key27": "2AJu6y19mu6tverStCaHmTgN96WML71DfFMbV7Q8JfYvGJe4yzshzMbmDDVsdMaPF9xn6cvyLiuKJkUKYDUAP3rX",
  "key28": "2nPDUa5sbFCWQYPBunh4bH4Td6Ln6z7h7cRDHsZs9DzojzC5NXQSGWLZFUmmm7QGQKiB6EgVhDaTJakpDGqD9sGS",
  "key29": "2feVxW9XcF6kYwMSeDg5iQRnn4sbXaHf5KBHxru1PPJF1ycZ8fqUzom7N2RpiiMwF7fRCpPzQ8PKubE4E2mEPsMS",
  "key30": "UzpGBPwzP4NKEtB823SSzccUXtFVLENccNB7BViAgoWKf2ft46BZ14AUzckMrqQG8cuPMza52irKzakMdDHVZ6f",
  "key31": "3jBaHcfdkyvntNmnSdbkax5kVwydSJVoMMj4fbhjVf75AWqu7rtZTouWQxBWegt4jHHDv1D84ov9qHKivNCXjXpf",
  "key32": "3cC7HspZckSQmMzfLzkD2Crc7oempimsCnPJvknJko92icXtpJxQYk8TSyZYmS3VFU6NoL86KA84wnd82naxQsrQ",
  "key33": "3pcjxYvoKrJk8dwFVMXsBuVgubbHCrjhY6AHgm5s55uUnZvsioUWwoTnv6XHQUsGAbjqjxEjLXarnTb5hxLZc78k",
  "key34": "3eMyUjRdWiKn98wd6ScLfW29i8gLdHpE4U2GFxmU5kF6uK155rYjTqNz3gAYUTFuqfBJheej5wLf2bjiRH8Aw5zW",
  "key35": "5TNQPZRVBJhDBMceb6qGNedLGhEjXQdcVAHFjKa1oJsb8P8NzsSKqiV1KCQXtursqcCjW4MzG8tgS3r8Tq2M8tj3",
  "key36": "4D2oZFWoZqsqPyJwmh41HZGF53JydKxs8cJYLNtL6d11Wmx5KPWeaQ4BFbu8BVSrB14pG163Ts3zadHNViHQMzgY",
  "key37": "3kk3zeXqYBNj6dQ8K74Qevh6CsoZyLh8HDShfoYud395bFpuvsLKkkzVarjZwimf27Yce8sJMEpVvgPsi2QdPN7B",
  "key38": "5d9kXHSuA5cKhtr423Goi3dzFqnSCGhhcxSgmEiHieZBweoCtbGUXXfXNLsixz5wS76pS2zCCpcybRiHb7hkBWvG",
  "key39": "5nvMk36YKuhPYbTPM7DqiwEExf1MWVqjyxfh5WhC7h9L2nKby5DzD12GJKd4MbrHsoDtiteWz7NtETkt13GfwKbF",
  "key40": "3k8hSLxpKnkLjqwLmMBdeBHaupybanfieELBbb33qoEfxjgHN3RLSGcBQpq93hoKZtSBRL9T6Eefq6HpDJ4DbjhW",
  "key41": "3j1qTXVKXgicKPWM5JuKY7ugKKocTUAWBuVBh9GbpwPAoj6pRwAeVEYQW9F3KgMz9njX2TE6yuPbAmK1yPvnzEQB",
  "key42": "4UJ4Hhzunv43pXkGJaTsQ79CNabhRg9UDEJg4z8gDB9pZCR9nB3yRvFfXxKMqTruyyYdZE7LjeHqTw27u9Xs5JF7",
  "key43": "5jj9A1prna55btdUD2DDNmU6hQgyhg13Z5E7AcMPuLD229b4PzhLGkyqrsDEZKAHhwLn4qtgFGtqhnCMafhnVGVn",
  "key44": "29bXcTcnbcV1WZ6DWJQXzY5uZoAhzRyDMZsf6rup9w32TFn7SnQaKhfAHPBRz41Wzu6mCKCeZoRrzbCUop3gSbLo",
  "key45": "5bzJVgsYQF2pfA7Smv2yktgBk9xWwCxys4KdPs1SSaFy5scP3NThRhL1AwLipkk2FhEZPgwobcFa3rjH7MZNdwbP",
  "key46": "wfg1NLiT5TJyyXHpU8aAuvsvwcSFX3WL32EhcNm97hydQ7nGUrmyrr5RdSiZVh2TAdvH7RCjx5eLP8Fi1Eoeurx"
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
