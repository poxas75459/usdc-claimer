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
    "2Ueb96EBDyvJTivTzFFkYdVQxEMj8RvyWYb1YX2zdALv1smmCJ4BthrTciqAghQPtdoRKuou8R1u8n3GqqE2m1V3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HBMKQZfawT2jza95scSWT91CfreN9TJ3wRLaaGHtqN2J1vshQ75pXsPsGywYQCQxa6sUapgZjj38abzcuMjHnqa",
  "key1": "3YREiGCg313nfTwvd5kZzEibrmoPa9E5DS6SWVu3atVuXETvPn53PZNJxGk6xthnqTyhLZu5wbLeR4SmmzJQscEo",
  "key2": "4Apgb5HT7x9MhL7LcsLkL9zEeqZqg2fgUPgtcLa2Q2RYcY57yiDpdoLf6NBjtPS6bAXp8goKcEujKpCFPXRwT6bt",
  "key3": "2m8edGCLaQpMeQRD5253mmsmvyNVniCpaZ6VrcxiSnfAaGftDpyV5wDuPfYCeKhfzSJwYrRwFjWu1CwwmfKHtxgG",
  "key4": "42cgh37cciGZh2Jt5f6G1FyjZkMpf4kt9e4o5Xi9Bmm9dfAxDAu2XRoNgmReaDJArXpZm2nmg9NECM9zCyDiDDP4",
  "key5": "2En4hE33gpnhwy4jtZtudywLPprm1sMDHCfLPAZaJk7wu7chjSwpLTkVfGfVVtqWhxrW3kGTpBF84bRkqVyJ6TDj",
  "key6": "2nzkDbDPanQNQ3twtiSCVwLGLLUgxNmzcf5R8kDhqHuE8P4eswJgxBTeNBpsMMWgqDP3QVHsyfUX4MKM4vHVwbCK",
  "key7": "4gJ6h42VRQnjshhN8kdiFhX6PRgomL5Rmz4SZDfqkZZmyedzCBTENUeUweE12j7214jcFWn5vpjhEL4X26ypZbCR",
  "key8": "31gU9sbC88RhDQHcyttL1kjqLy2uw9hSFaBGWu4YPd2T5Vtvm58N24w5BgubS9R1Jy6d6aZhkbwEDggesV985Jwd",
  "key9": "5WiMfDaRjDSDLTBBP8iL3pZya6itbL4tLzMFD9ETeEpcqHEeHVA5eWV6UHmYgJMccjyp4vmro4G5kJ8zXWNL8Ti1",
  "key10": "2Nr1miv9edrYfR4FqYz4ddLpnHhrdSqnKbKySkUQe6ZpLMnUa6qrm16t8HFjwTLviwJ8MBS811ADndjT5rHi1Puj",
  "key11": "5MiXdWx1X2i9b49poPhCibapfisFPUBoxnNeYxpJFyQj7oUJQn13ACALEBWBXXhsMS5T26ykgLXDDJ86dCJ1FjUW",
  "key12": "yNdGxjJdKYWjPJbPUWc8oZxvJV2GgScY2z1Kz3KwYDerqTkiLAYNRAsAyp68A7mX82dzMcxRMivitAoXyhGcMoK",
  "key13": "ud49tAtqNjWGTfRj9kPjf5MFQoQzR9zY5DPTPXSa4jcuMXqnpiQfkF8Ra4PBwxonR93xoz6rodBZmgpdFdpPw2m",
  "key14": "D8nEHU4LUxXWWAiWxYtSpC38QqLbmCC1KuetmQj1WqASewxwuJuvBaVSdQHtaDxUEoAbNj6UZGYpvycnA4CErDA",
  "key15": "3QPNKGQU9viuEaf1aYCgr2JksdPNfS3EtXn3DrBByHjhgSGUf7SMMVMwypXkD2JofPqi7h4FaiEGxj7XFpwa8xwc",
  "key16": "3c7Q1Q85WB6ZkGwsXwUTzG6xKWas2hXtMNDe7Pbiyc8Djm4QLWGBXwsUP4VCCGCCHNcT2FYdnrurwRV9YVpFD8R3",
  "key17": "rkxuT4DG6jqPfEdtuHYtioTKD4Y5wSFCVFHvk9EucTABeQ5ZWhBdWyNBnnc2VRFnZYv4y1SHqxYurfM6L63eSH5",
  "key18": "5vUTy9knDxhkkr4nkRYtqUBeVHgX87q9sUz1RxAe7zNH5BcLPo1Ld4HsB1jPE7bCypMXReGW3PL8WNEeZLEqiueL",
  "key19": "jHfdFubr3Rt86esjaqa8Kh56MkEcGrrTLZzPkrdhEEnj6kaxwXhNczeDnf9yES6UPgecABe9ticFU6KQCNBgPRa",
  "key20": "21KnXEP3ANbyLtVHkuNeVLLzrY1cVoTyDSaA6qDZgPNE3NfXtzYTVhmgNFoXjiAnRwodcyzpk3aUh51JDrkoZafq",
  "key21": "3QfV2yEvLquexDMCyCCuKrQGSjpM1SzgzWaKNoykeBZLJruc7T1QdLyff1SkcP37yYh8LeWDuSSHYiVyPBNZ6RsG",
  "key22": "2GP9wefZxJq62s6i9QXSuwAAWRHLgJFFtJd3TZZyZkpivxJReBoTzbfdt9DZ4QwmqNfAkLNRoCo9YcYcJtnev1Sc",
  "key23": "3qD7aGxp1a5EqpMKmi1FJBhdSonQRj8bANMmfi7ZSVQzqHYU5QUWLV78VCYF1UCpkjaJTygDgxbc4wJUyTfcaBMj",
  "key24": "3W9Pa3xRDKB1tpotiucH55jqEqWenknZbLXPEJ54DbNB954XES4ZjFHXHdsNkouFp4eGXewichLh5Kv2bjQ7XeSa",
  "key25": "4AdZQNzQrKXcjupdBeiTC31NbDktW3NW2UDiP12Wn2FaC4TphuWagJURncx4TvhdfKFFbPuPeMmhvMRAkjBE138P",
  "key26": "3TmCJmbZjMoJmp7Uxs2y7esrmDwuiB3DZEiiH77hmaWWHJvp1Cuqa1VMXotHZ2uacUevmjygFhUcTBDs93dMTgxu",
  "key27": "3b8EAV2jiPvaU5ucp3BCjpbDa6SDFSnJKXW5G7LKsZ9ecQRHMNXrq4GXBzEpJdf4dAiCxWR4EKr7R6vQmzupuAZP",
  "key28": "3GApzUeNW9QGNPQbezoYW1PDeCEnEsskMqd3SaakdV6DmaamGrMTg8tRXwV3affACH6CyCg1tPc3ERdSa3iKHdBf",
  "key29": "Td1yRAtmRHZqggfPVCN1buHhXbyDvmD5WCRKd1ktzqRwWfoq6zG71BEHaGKJ97QPmciLm2gkqwjNvSqQffWDHyf",
  "key30": "x14unMTHYSNCoRXS1KetZrh6Xvmwx4gZKVAVcjksNWoJtp64q3z738pHsS8w5GLhSXxQHLUHcthwpCFaZjpcogG",
  "key31": "62LjLnJJsv3ARDkUgVAwnv2pktYeMcPWzoiSdYiCKpv3VX54t9VsYdbeCG5zsteFfikgWy3MoTYXCZExvm1uabp2",
  "key32": "PY7Z85CbAxAxXEDJRM15EQ2SgePPxyhBFzdUyVcpRt4JAHkV1j2dPsg9m5LDXnNAcuK51KviMGtztsQUGWigZCH",
  "key33": "4vuyAzyVwzKqVsgcedsYewjrcXJLF57Gp2Je9p7fCNsLtfiBRKMqxUkcgUNx37QtW59h9PLEXQmSTvY6zXAzjLXB",
  "key34": "4GM1dqULAoB3zWocreJA12KYhvhEBw2DwVQQS1ycXChEwvttq2BdPXZnrDXmYxuVtLbXN49D7CPN5Ef3RQjDEenR",
  "key35": "2mtGkAbZNMh9jcTgakFQcenNHYu8c1ZpUL7GwydA35DzpJeGiXVB5Hsffp1QoeePgzxR8iNMDu3KZqG3mTaHxrXf",
  "key36": "4upTZNXN59tvARVXwPChRJWQta1KWERcqXJUaknKf9NJttr45Cw9gNNMaCTAduNavQzt6NPUR5fEFniVofCPf1aZ",
  "key37": "3C67oxy1MiXnfU3JjLySTsG3HpZkJyhAzgXZ8sfiafzH3xjXyTkmMdzidRVTC1WsQfJL8VB2Cuck95vfaii6e1sA",
  "key38": "5SQyeLHrqnd9vgWt9McqjCWNA4TTfdQDK3xDzt1xA25w4tHRZnEEPjpd79Kad773Bd5xHi6T7vZ4xsutnFJtjUh2",
  "key39": "2HhFG2amJPND2oH4RcBuUrLgK3b4JED1zjxqwLkjJ5hMDbC8Ny7ysvdYAV8pgda1DNfpeJ385BkSYaKcGEszLrEW",
  "key40": "5mKQEdjfC5Yas8bwbbs3fja6kfnKNLSjBRPWkV46nYZf2F9J2QLwsJ1VmpYAByvo9itorNY4Z8bQExeEfNJ6LzVV",
  "key41": "D7qJ8kQf5AyGJiBXSpRNKDkmFy2t7aHpFoefXoxpd85LRC6MobkJckBLQbjtj437jW7xrg4ajmeKtz8QW9eJJHG",
  "key42": "4YTmdWft44ZGXvdu6Twk8wuSepNM8mY1Mhicriqdb7BneqiRBUjM7LaJJnQa57B4DQgL8prKFn5gb25MFbSb5XCM",
  "key43": "57S8HGCnqLBjupYJfYr4Da38BpPVQZuc9XHqSrw9uJNkfPeK7byZSUGSrYou2hsAhwhFc5LikbcSQj9TkVD9ov5e",
  "key44": "3c2L4YaqPXSx3FFfVU8aQtDcQjU8DKjER92bwg9uaE9rjusQ9iEqGgdaSN4mpAxzw3jUnwwk1e6fyDwuuwA7aHGR",
  "key45": "2igt2Wi3McGYrudMnaTyDJ6v99skdr8j6WrqnCToruhEYyDL8UtuqYFXW5VfAG6JjVprQ5zE5n4LLPpEhex72id3"
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
