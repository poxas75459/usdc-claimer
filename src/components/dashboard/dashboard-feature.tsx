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
    "37JwTj6PZaadjYGwyaWzmJnrh8WpWjp9vFXVsQv8fNxtSaxGMSjdR1PgbGbPi3ng6GMn3LtwfPDk8GSxMG7HATjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RAoA1eyxQk3k66aR2FZdyadMH4hp29jz8veWhkcwYHbaU94nxdxrvJ53njLS87aKTCsob8Ls5zvevPgRbxfMxJU",
  "key1": "3wGrTrExTB9uB7Sw7sYde8WTm7kbbq1bn8gAMchZMFVWtGUcoXW8XEGMTP9wJLTVjiGUw4Bgf3M8F6BcDShDunzt",
  "key2": "3mXFBVhiNzWPq9dy2UVmUxh83N35wBxtZH1iDBkGykngqU1YKJWnX5xrk62UtoKU8jvg5jbgVwB6yw59cxADSUKb",
  "key3": "4Qc9xN4fkxAYCyiPkfJgN7FQdNdjSFiwyoj6gqFuHvUnooTCG1YwgF6j7vZ9HNpNthi1vq9cKBrJrxSAZPzWe2iS",
  "key4": "32t9yQNjNpkqpUW7onMpaCBCEAn82gWzfifwg6RYtXTJ4P4wDTEBTbMehAG5JdcsUfjknMT4a9tnjzxB2WyELfWo",
  "key5": "fRsFvQiQigKFw2KMrz2rLtaxTqTaeJMdVyAkKEBLDNRAjFSjLS3F9iNt4M9kgxmfH1txLcLG5w2cGHBiFbRbMds",
  "key6": "4NnA8SHUh8jC25KCes99d3msZ7fwFZCJMfUPPH1uJCppir2hnExp8WRFa6MixNZ34DyK6e8ZxeLnEew5njmrmn5a",
  "key7": "2VTYf2YnAFdSQLze9TatzaAzNUuQ7SrxzdiwS8ngoaEXT6z8j852V4Cm9PDA3rbogcFkzJ6WpZ7b52c6a2NhSqi",
  "key8": "4P2zBrYgb6jZ1LDzGtE76VYpFiNm3dziAPzPEePvjRpQA2BUTfCqf43JGEehLbr3SL9MEakjw1CzKeZWU6zUo2xp",
  "key9": "2WUAK5M6bqYrmM4JWGwqvJ68KcpC82zfxzyRiKkYukFLJQxmyn82X8w1njoxahNFMRJqS9sg4ts5NxBxZ2F2kj2J",
  "key10": "3uYiWawQYcVYHqpZQGtgPhytNWQ2S5vAWEqKToi53QsMSap7pFzz2zNR3jTeXmAsSGfLM5718j5wPbiC378GY2Xx",
  "key11": "gkVViPscosKukG8UfMj1KE2xUNiZRzCuVEFqshpvu1k6jzx127Whc8WvFso9mYjbZbf3yuqHi1mtzSRPn4mhKhr",
  "key12": "5RvPtbxKik1UyyaAo1RxCkVqnyDToe5UxMwBaS1ApL7No8jYqKXMfovMnKDW6DnMnCNKqLfrCBD663FCGRERdg5m",
  "key13": "2eNdUbzs82WxpqjcCfTEokziPnrLo2VFm4hHZPBDHgzrE4jfJGpuyD4A9CZCwiKPSbBL4FmYsKzQoqrL3PKCyYwH",
  "key14": "5subWgxEQqXHfXePtaGJkhkU5mKGqeog87hYQq87iZ6BYDhLfPP6bdGPCmsGpQS8e7f996taZ58wvCkNXVNAPibB",
  "key15": "4M4ALRFzmqpXKrRp7UVAg6tz4VFtUiJHxeoUarY1BjRCegu8NiPxy9aa3e9nY4wVGz8vmrq1sAASNkRFfQMotCXa",
  "key16": "47LRapKoYyw9H3fGvrsiUtQjCCmfFJTpzeTbUKJ23ThtZSUN4vsTvSftjxgwvhdEGPbP4BNqiLjt3jPEvdd8EhyR",
  "key17": "5wV32yhVopPW9L7g6NAo4x2BC55v5a7kq5eisbUBeiNvGLVT9XBDPKAZi967faJvc4VBPf8D453gAxz56vbrM82h",
  "key18": "3VhB3j1zG5SFehhkGEp25neQm2JMonQMKKKsUi4111vzuV82yZPsZS7JGeNqkVfsTo4dfnsH1dtar4EsJEhBiqH7",
  "key19": "5DWaF7FW5jWbS8dbpGjX2wZUCjSxgH37CiyP6Xhv1Ui1fTc3F7J6CGmATA5LsP91bShuTzjSxjpkCr2NfZFz9vpN",
  "key20": "5PEUHyWLkPtdiTzs9VyWV5aVXGyo1va7w86p1DLMEnp7wALsdgBUSoPAqzstn9TeD5VTJMbpkzYPNqimGML5Y68z",
  "key21": "22sAxkcARKUCEdoe9eevk7xVRbrKS5uLxiYn3whpwZJ1X1VTkXYcryZmYpgBGjADtYA2PWWqyAytCSsYbgtg5o2X",
  "key22": "iDDnN43vabYcNjxfVuUimL5FazgLeC8QQcr3j3TYU7Uz8V9NtCng3vSH3XGMFLeWgzCWxPU1WEtPVoyMJTywUWm",
  "key23": "q1KuPr59SSc6qeHLVWSNuSP7zHQuu8r8DxwnfxHJoAzQxWbt5EDEaC9tgNkV42QmiG5aWBZEq2FkHLFecZLwvt6",
  "key24": "5PV2ioz9U3ENFAgYTrJT4uaAsTaowCzxAYugGzy6VkJdLaqUb3VFTHiZYZjVqQUqxNX4X3CMVpYNHBBVujDfRsoa",
  "key25": "5xAJBbBRjTg1Qce65BmsQ69utiL9FmouTdhoc8cEz3W4sNuqr62YcJrF7VCou9a42TVrDdhGvhFkX4tcG1hQaLB3",
  "key26": "5NEwde32FhFb5aA8Y8CW1oEhjLEd6Vm3yL9WwuimjHEMmZALQeAoHQm9djmwyvKHtLmgS6TWaUV3aBa5d1Gtnx4y",
  "key27": "f7r2UwLvMXQw92cXnpbktNEeQ2LrRkbNpKtN1Lvt7heNepgmJajiWpsTg7V1QFG1DMvaeZhrQUCW4bgjSTfBdGv",
  "key28": "3qhktpbk2herHBRaLuBcxd7mrCBRVAcAADVDFsCNXDuoHcETM4abUVpHLsu5YX1SC25WJ2w2fd6Ve65QbB43CxyR",
  "key29": "4rUNzieuGVGz11bWaJWYUUtrdQ7joH3oGn1mJJyjNPyHnZaEHK6cekS1gtpAD63GVU89891FHYPgot6JGwXXHzP",
  "key30": "615mZQts3G4m7JV6HCGko3VUfR2HngLVYtwDRaLogcaSAUzWvbxsM3SxwkEzFWMmnwGV38VM4hxMq9pPRqDnqMBC",
  "key31": "2otY26fvoW2PRLGHeDEeVii44KqoC1skL5q2D9nG7Uex815RoPQGpAvmw1isgiMGoLKhZd6XZcf6vXrbP3m4S9ia",
  "key32": "5mZJ7iEiUZed7pmESppRSdsFTZCvivNfLPWQTqJQdr2jKz8rhY15ARmeESUSZQH5aEDHvxVoKLs3zKE72sQwKHkp",
  "key33": "2Kbth8HoGZqjjJHJ1AycPzWHa7nzmz9Vyt6EoYznSJVgLYT2bxvRwdRdHahu7wWHx93fVjngcK6CxvQX2KHoRAWJ",
  "key34": "8e11B5xzLoo2PydMB59uRvbNyujaSm9Rz3rqPD5ecgQLp7s1QsVdPkUTPzpjqbXJ9qg6LzXdrUk9NwTmPodiDuh",
  "key35": "4KxdovCZng292BhVt2GwZftxVy14StXoeR9gaXM61TmreaEeuB2yeHDkR99qH4w4JEyJXPrB1VWueGpjAA1pvBBj",
  "key36": "45weEjYZXfs66VRYZNEgtMd8jdH9FjTBSh22JE2ZBPGahcCAW7Wb6kRrbbJ1s3xPex5cAfa3wTHwTsnQqkWJB4z7",
  "key37": "2HjCPumxesmBcFmWMVTHftkSC9cWw9BcvephV6RYHuMn5WGQ91fy94yev5QsF58iabDPdf6WgGsTxHsibraDig6g",
  "key38": "54RR4wQzA6r7J8hLU1h3xYfa4sW61kJquoD2yRAaEPtiCfSmEGiNv7VEwQ1kdND7dHiZQCKoRZ7LiFZzCEP2NDGh",
  "key39": "Yqm1kbeRzzRnUHNSakc6zSDTNJe1dwG53vCEtjW9rgXShcEP9pcphNxshxTfSBu5LWq9uX9vVfaNPTWN8EnkTwZ",
  "key40": "5SoAw1syzDK23eHLziX1gXuTzDmCkgzZFyixtJFnwR8N4nVrMJiddivbjYtxEtnLq2xcKvqN9Xg9pTCXU62HYLnh",
  "key41": "3rgZE3FgVcfoB6Rar16Ed221AYeQeDEKAeywguHPckDcj8B6gNibTRDMHuAuPqGit7deoHSK9xPFMqfqTjSyJRqp",
  "key42": "2RuHmrKfHyGDi9Af8iD3w6km4yQMCr4YBFktXYV3dqP7LgkH6nLvuBEZJHKfxhU5cVJxZSPB95oU3NTcvnb8N9VH",
  "key43": "4VnKPj5bMf8NM9NVEY5ExUs14W7ERQRwpNAnSJJ8gddn4VtVHTFUTQEW8MNKPPJAf7LFNuw17D2VBiUMv965pxic",
  "key44": "b8FMAkpvs4XHjahY6JWNb44ocMYTrAZSyYPY1owKUtpxmcRMpqSm1b8z52g54if4hNLn5ecLkmQxF3CXthsYFBD",
  "key45": "5tQHg4emwSqXM7xy6y6YzJY5QzR5gLHcEfha7DdazNtdXG9M6RAwLTWDxMTKsewQz9VLhdVB1cx2WSBP3FLBKwE9",
  "key46": "3vxGYWvx9rz1A5a1SzJ1EyrAMXJdjs5cXpKuaLXSrvL9yUjcmBarHXggxGU9jv6JwXBKfsh76BFoLY4rvXeBZgEX",
  "key47": "3kyDZAEFRnSN2yiXyRZusxguhrF11VxaQc1aLvrcGVAPv85X4nSjqTGNvhmZS49xfc2w6n6nrzewHUxcc2g3MjmK",
  "key48": "5EkPBqSdzNsjRukEVCFLQVzVkEobnUgagsCAeSDrHaHyu9x1cNXvVGC5ESVLqw54zf4w4JG7x8mWALAfRyNWeb6a",
  "key49": "67N7TpfKJszx1ZwTMMFZAh5HtRAxRya4vzg3uUd9eyhcpXSkpLwasuA2MA9guqeKSDyn8RyYGkuosLztuzVMyXeH"
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
