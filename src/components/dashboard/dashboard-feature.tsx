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
    "3RaFXk4TctPQuuhffpmw5BRMuZnXhsxHY1DrKDf3EDBrz42ps2kNndXwnt9gBKXhTVSYvPyHBiMF7RUHhqnEhkH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uYWqbhPT8s6vm9GewHzDavtt59S1rNx32tNShe4rhj6sBCrz34tpbUXvZfATc15TJLqK4pQkbikfX7FCNo6AySY",
  "key1": "2k6pBgBCx4rHDbvNrYAW42TiK6RrKBrH2m9u1rgWuzftpkm9aJTbnYsffReU8oC4CC1q65PcQHQMVKJQBt24ZGsU",
  "key2": "2NsWp7edbTpziFCKi1PRjGoWm1o72mEtsSmeXjZCEzJQx5iz1qAWNFEK4h1jLXxyisjAWoZVjLaDxue9Puu6ioTF",
  "key3": "5vNtTSiKtKry4TnojYzqALhCT2r6vLsUgPTcZLq5kp1vxDtKnWXgMEQMosgknSpC6VEfCPDVyyNTrdnk6YQ34pLA",
  "key4": "kEDJ2seCRjWeFMuedRSHcvbZBzLy2ftFgv8vz75rxJCKvNgpyqd5EMN4UYgWnoXUQkcdouGNaJj1qso2f42DBS4",
  "key5": "2sYmxhtDLMN76dSSQiztwdNHqEw6Vbxwj1FQ5YcEMEfWnAAmK1cPWdHefwEMZ5LN9AAkwQeq2bizw3rwXn2jkQJW",
  "key6": "3o2NYoECmgFGP1nCXQtBjwGtPioekLeak4c4Cu4fsrVXaMyZcydVPVf6TGcdyXh8AWcE9HxRUPEDvJucbomrXfjY",
  "key7": "4KvzkVmWi4huy9XZam6yXt8wmDGZ4C7axrQQsMTmf951s72Hv87wAC57AehQsVfsABGZftNL17pLPAwBXa1vH7xn",
  "key8": "RdSSmqULCLpigxMHLkPbUjA1hNG3TFpoaoRfwQXVK1vyggnFUzSGwLoFKYf9bbrXKM5wHT9ohWEmihLHeZkH19A",
  "key9": "4hv9v6YY4Kv33e5UBC5gFEFSyqPQMHoNPdhop3mnzBhwFruP3Hmv73SHmCj8tVNZR3VcpuCFzWLMRBE3oJkyJFr",
  "key10": "E1MhCCYjYL2nhpSNLtrKdjmiyQZ5XS6Xcr755bk1shVUfDCj9UYuf4exhEFrCmUagFycmfnKaG9k6uRgkBqWy38",
  "key11": "4ULdSdCRUxTQcTVwmkXJN6aPgkz31NTkJLp9qxAAL8SLoQuzhDCF8ghKH8zKTZYQ7pqBng6jFRZjW2X5httXDNZa",
  "key12": "5XMfaYpwPLGqeVEQM5FrVpDr3WSF5deKw16TKjvhLRymxYF2jiC2jf641zKetBtXpn8qwWcVPZk3ZcbayFsaVeNW",
  "key13": "3YP46d1B6BMDDNQLo1MJAMEwHqosgxUzJMp6xaKrXcgVfv59kGD8yUbp2uvqedbdCdi69K2eVorntkiefdq14RoR",
  "key14": "3Wg5uWoWAkMFKzpFNbR1xhcwQ8JCC7wSindGXwah7GZ9zaLXTaHtiX1B6tYa2LTJ1r45KL1ubxcin7UcpmaHhhoG",
  "key15": "24Moz8NvGWeVognHqQpEEj3TY5gMbs7zcwr6en8kwnjjSFkr29AUaTdkhxt6V6QBWdfeYM1KzMu43XaGFr3oiuN7",
  "key16": "3cAHGtxVtAkwW4oHZ3KuAHdxAfpD35F95joVTDDa1QqA9kPdGyJ9f4VTFYZxLEKGRVDgA5u6gar7ynQz4faMQ6i3",
  "key17": "3SopoRRPNiqgfV27DHvYjSjnAeyHDHfdrydFaQjcxrgBCQM8w8vW1wkNp18GJT9xVnMfJmXB5DzrSjTLJZTyTG9T",
  "key18": "ei6tPoPGF5kjkxQgHyuYjxg6t5bYxvXCdLede1CYFozmhdgguHivSWJjgBsHh8zcv6h1C9NGQdMKmGKFsgasar6",
  "key19": "5Z52HphRWe4c5DuHDY79SQtk1QQoHjaC8zTKuPJ9jjhwxKE3z6Uu23hNTvPYf36XPSVUhJUTpekvc6XeCnqbQAm8",
  "key20": "2amCRASNNuggoCjmreFbqsPuCpoQvDj9SjS3XFw7gNHVaGSYo1Htdvv7PVVacDFqcXu1TABYqykJcG8fKbGwMrpR",
  "key21": "3N8jEH7NHmphNoJYXQgMJ8AXP94qAsNnyi14JZxGuvHe5wXRmAGk4grdpwAxsBC4NH1HY5xv2XzdjsDZ64PZSWcY",
  "key22": "3xbYqQ6mgfeQvs7jK6pdX47Qw7VCSxdLAVuDyvYxmRQr7Sw8dkt95uFJtRo61Ddx6AcQZ6Q63GFbnXLb5fvG5rZU",
  "key23": "4ta94JrAxzwkUpMN89ySrN32cNGdnAKNqdj8qxvxd3ztP3nWPk9AZbJQS8mzGJyiKLoJPMbnqKEU47FgqhSXJa2G",
  "key24": "4EQ2t6rhDHutCdFQCoQQEx2Pjop2TFti83xUhSRaNdrBvEFD8gcrW6pUdrvmHGCc2DW5jWjAgQMNXaouvnJ1jFmk",
  "key25": "3sBswzimikJCkvBpeqX6ChaJxcfqMNsKZdAntPpVLbaZcpQAczViuKcZaUhUV7qPAM6QJGhQVc74RBkY2nyQ8Arc",
  "key26": "4tYBfu4e2PGm6kvMFeRUJPMJdmBRN35JGSbiLbouvBQYctVg9uUexnZd3mEfJPn3yp5gfFofwTgaDjzitk6pUgNo",
  "key27": "44BZUSfC2qCSwMWmJnuZvFhiy7Qd4VDHUVRJmocH4B3CAYPBz4dAuxp9ZHKJe8H3NKfKwhZnisRuVGZzXETzVGUA",
  "key28": "2vvSGq3aFPPViqEZGLXvK5VZbMvH9PYKPfh7QJQo5vAnCFyEszqiJBJgA4oDUM5wbG5sWgdcCtyNPbNXVUFi4KCJ",
  "key29": "51vUJv7LPdqCnXnnH8kZeyQsKykykDKWd9AHDXwqUB4UcVicsVS1shE5Gu5NZyAsJEj4qkv9TpMriFYQ3w6Dd9hW",
  "key30": "3V8rCfD9rRHPK1wv4zRvVQknwgCro1LGpxJceKieUoxaGfg4MHTaUujEUfYgB1zYbgbQJNFooHqnFdUxfZjHRrug",
  "key31": "3NaDucvejheQBrbputpzmn588cgnZMiAmao7BC4BhtnozxH8LDRjZJrE1E66ApGYBQeqA6n3D9pRNikBVTes1Bw3",
  "key32": "3pcaZrK7zqvrR2VyKkHanPzMBVsi5pHPHJ2dVW9P74ZTfbivgU6GgwCYBhyRxCKCoY2RtWXJVLM57WG5u9mnWERY",
  "key33": "2jAtq63WVretRRG2eBRPiewVkNqsbrEWWYbyu7c8Hjw2Svdz7fm8ZVvCwsmt5sLZig5no4TeKek5BSMwk1JwXeNW",
  "key34": "2GiwUbUPLiw69Y8CUGdvTbCaecJwebdSWf6QLZA7fcCffmat1Fd29kX74LeZHkZAtc9zGZCeNh5dFPCAKqcuyRXa",
  "key35": "3z9GNjiLGsRG7etE3DK1vWBKqwVSbRAPmpjKwUNAYXYJpfjZuNRbyednH22QgR8qHCBH87jtyVQXnJ2CamUqMXXT",
  "key36": "2nrAn1BCJ3KsJDA2xByhFYzgtfbGkQVJEXCxckDt6J7UHbwnhi1gcrQNG68MGvYqrEiStbiC2tJAzoBbpnBc4PxY",
  "key37": "4yrEXcswde6RAJDTmYQoLFQ6Mc5DPuH15MtyEsHUDrrKux2uM4xYwE5sNYBdeM1KVv1S9xvBTLE7VykHpFzMX5cY",
  "key38": "4a7QpzDdsN3WbmbVCeQTJoMg9mYBxrScYFF7dm9JPMqiqzH5t7tksjiksK2DgQbPmwpDsnBUqSmQsjG6p6R2csVN",
  "key39": "2JSN3YHNJucHPQGWB9rSvcFrVooUgDKzWehRY9gyczvd6pxyad73DGzHzG9JCf5a732RK45BAcp1aPD1YRszTz3S",
  "key40": "31ADdZ4Gi3wYfm7rmPcmYUsB3s8MyMRC2rhTdAcysPSmpvbpFNpWudZfvctrQWzMS7b8WqRknzwcFMi5ACoLwFpf",
  "key41": "27Dp6cwHFfoL9XYkhvjpQETxrCiEuqpLXo6ZmcfzjKKkXcm9fW93ierMeMerEV6Kkx37iW5xKhgd55B3kLv3WHDv"
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
