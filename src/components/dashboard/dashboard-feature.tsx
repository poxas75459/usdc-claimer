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
    "4rs1LBfLBnZWQmP7V3Pz1R12E5iSZoMbXEJTfvVWhLwifu3UkmVQU2jvtMHFLYhiEmEpU7M3nH52S9R2UiLbGPts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WXcjjDk9wdM928gBPtwFdq86jt9fehotHPY1FYHEjBuhMp5ZPJ8LmCMqUPUWm4h1ZX8Q53EBoLCRUDsrHJoBpqw",
  "key1": "4fVAjdvEQyoxQqQzttq7Mro3hW7ojaybpev1awz1MArrWknHsmTAqeipgyJqK1w5rSMfKUTWZhTo7Yuvwau1VY2w",
  "key2": "2s9LeJpuXgmfLwitiuzREA7ATcEi9aoWWgqUfEnZD8Qq2Jij97hLkESqvqextx8mvCsFBEzqPx79PiHM13sHiwQR",
  "key3": "Vqy8LBtibxPTciNcmXyjoTA88EjBBQAmjCt5mvGWBzF8WMrEAk2VGUumjorDtsLht8jnYdQq2kM3LoW2XeVXh1y",
  "key4": "4sMrWshQpYAsjxJQCmwoemeZxap8aETMjGD4A3oGJyjTdLWjan2hAvSGx2CiKH8P2hGdzXfi3Fz2q3d1wCG38Q29",
  "key5": "2Mccjd9pMSCQ8TJWmZujeNx8sSr1AfucKQ4vAVUX1drUN54eKThN55ooJNrSokS3DDRkvSf9Q2VD4UgLDCDqvVmG",
  "key6": "4GuzFrBBr9vQcwcFKSo3cNu9aqnR28dmNnkGoP2LsnJbMixYQygkAuWcXV6DzjpQk7LSeukbqRvXgHPTscL8kBa4",
  "key7": "4fSZQUKog1aSTtQGfU4tyz7xyngR2T3bVDJoYdHRovnPcauHdBaNsxDNedm4Q6ZNBH4oTcpK49oKtcqcfevtPGLG",
  "key8": "2qtTd71JMHHoQiQfWySF98rM1KPSdFMtDgrirWLnNCQkdZGvWLDKjocaKjUa7Yq9yckxwWTw2rNyBxAErap95S38",
  "key9": "Y6Uf46sePJNmzHgNETSUwopMJz175zgJmMJbwneApvRV75Yw8aB3foPgF7B4kFYAXdd3tLkiF4quksH3LBq98Ch",
  "key10": "4LyKe52qMiUMNoUDBUznJQ2XYKb6Gq9F3s6gM8X1BhnwDT6QZ5U6Gw5Csfa2EvYk72bWgv4XGmH7vySVcguy6diD",
  "key11": "4QBNk8WSWbDAZzMzonPepkXuZFyGMGDhecrYXKrB3BCACF5aotijvFzinzY5uYvnNH3mx46DcAYk2M9ZyxZegWz",
  "key12": "4Xz5k6X3z5NkJu4YTfMLKL7MxH1QEGpXtcUWoEUWNZsc7ARnmHfCzsPVj9UKETYkzYGnwTn4NDhskXHSBn7SoH6o",
  "key13": "47cJhUTJ8DQF5NQLnsGgAZDDtrYDNBHwzwHcxHfWcSYgq47meh3b7Lfu3hvBLuSqVRZhJi8UDgSBZqJ6JFYKLNXa",
  "key14": "2WzQ6nf2j2uh2RoFHdqxnRpY6r9f7vFCnCvphK55BwHVM8gdT8qkyYG3QACh6fD9rYveNbW68tzchjErugK5sWex",
  "key15": "45X3k3JG6r1avnSP2ieJCJA9Dgst52SUxCnbEf3k3G9dmAbB18DWemo6YWR8AE4FHiue3hFhWfzhj2951jvVMHmf",
  "key16": "5Ggx9JQ9HJzxHqkt6ZvUiz1qzB1HMLCMK1vumbzttwRk5EM69ZP4sDxaeBxq4DbtrLFAsjWBVUXNvjwfti98rnJN",
  "key17": "iCRhnQgBtEiDrnntzkGP8PhMvrWe1WZXDiJhhKvtS3s6ydfpifVjfi7WjHEpg6phCU9GXXvhSy2EJCEc2AyvARv",
  "key18": "49Kz5oTxReWQf2Ddbxb8RRSngLwxauYrirk4m8Bd6MDuyAbcVdv8qpkiS6jiN1MqkMrJtxJKedGcy9ftvvWo85WJ",
  "key19": "2ugQzk7H7VWxGLAb4bJE6YpfjKdveYFtUSraabnQuVsZ7Hqn9Nb3pyuMEGu61SC89PcaRo7PoSQSUgFoJQzKWJYG",
  "key20": "3LyLeD6Zpy8KCPc9UrNdcJjVucBe3vZBNFAvqd59i8bEUQfhQjyfwD7ZtuKyBN6JRxegD3Vu8fktEPpzuUst2HjY",
  "key21": "3ex8CHSXuqSXAFkNLQfa5E8XgTe3Fo65ynKrTFGchLjKYNUzSQTEKDHnYjLZmHeAosSR9EMDLwEc5SebJfcFRR1P",
  "key22": "9sSZpo1WsR6ZGNNEHZSZXdQ9TQSD6wujcG6cp237HTYDy4WCHWN555WaBbrx4YNau8kZjaU9pVsihgTWsr6bEAg",
  "key23": "4Pgz73GRHVUxGAaNCUxtCvtfA9ntW8dtmWMhW1p27dXtn22uERSdq4WNqT5Q14mtz3MrXVusNbY5dVNuhUfN6Vuq",
  "key24": "381Kw4CCZ8Nk78uqjbyi1mV42gRbaLSPQGWzsZTPxJoZRB5GHrTMTY2vbNK7cngGP3xK33tLSph3ap2nzHTfVfb2",
  "key25": "AiykgVs5Sr2SAg5ALa7gmFtwoLMwhue6KzVTNdiA46N1tQXUTcGxkz22QfKaCuqtcB57oCRL6dJ5dtMHb2uKGGq",
  "key26": "54bX6ekw5YHegrpE1budgCFpQSWaochHp8tpyNEPK9negGUA5U26mGYtxkW8Qesumhs6p7T43ncxqo7GperksCmC",
  "key27": "3r1tFPk9hjAXkDCXkQE4VTeMaydSU16bJGXCtSKcfHCAvEfNjzbkhpV5AkqK171dvcMUD5NhuLxiM9d9EC2LzZqC",
  "key28": "3iiVQ6J3J98qongeMZoMaPZNYEb7SCSiQj1b5hRwa2MkcY4aFXRF4MViUQpVdSxpAWxHfVPd85H1NngE2EpFHpmW",
  "key29": "4miMjhQL7tqiUcgKkXpQop9JLGmiHv97TDbkHtA9UxnxekK9DQDGPBVhAKzhaKvKrb63GzkLPtJFTZMkRvcoPdA",
  "key30": "4MnZX46W6GMTYQ2dvy5UAi14zvo6VUwH5em7mCgDezScQG9jugacquZ4tsuArZ9oKQzNnRDw1WYZq5rNFCAC11Zs",
  "key31": "34QsrofZu92J3mUu4vKiFo7URwaDq8JgtF7HkabE4tUxSdSXr56XgJd7VEGAykF8ffAbiPB61nhGzpztMS4cjcce",
  "key32": "59gLVkGpnj3QrNHJCUosUsqsZDTSGF7NviH9CELDVwdCuoMWpf9UfBtCswEfWiL9H8dKqFcb3ssrY6JTUHntvxo9",
  "key33": "4J6ZaKV7cLHscG4YzzT6XXf8vEVuUtjC8wT7Cg12exSgamTvrfnvrxAXzt4mXWuNCR6MzcyWky4gxGa7Ju4o3YP9",
  "key34": "4oVDaYYLsbcu8kG8LMC8NXLzVTow7wYqj9ZdNYt1P6EumLp2f6YGvff4uHZf2rs339nkp7Nq3F4VQai2BntUegVS",
  "key35": "31kJ55sRdp92dMxZ4hUqi1b3vpHxQtW1pU9tDGbXJKE5jt7ZHfnLjxo6XHKzB3yZpoZVkyyDnsj2PEnM42TUgopt",
  "key36": "oenZvHbuckmBgJCuhSA1thb15VZRjc6b9BGWSMno9mndP9SdSVpHvwsQMqZ1bYmcsKkRBCamegqK3daPoB1dDsg",
  "key37": "5xVgsaDT5QNTHMeKxqHJruLbakkNcbRAAFuva4sqFfxp9rs4WACUtLsKN5fVUGULs1n4VLPN48FqjZEcq3B8VZvV",
  "key38": "5BVRn2EUZdW23kSP2z8Rp86kEqjP97B3tdgnqgYTZV8NtJZzS9MdgkZngMPagNyXsfzYFsUujqHXhpA21v9zfEbh",
  "key39": "5hjjeLJLhVfC5hH4hNfqqLnnEXB1TtUqrdWXQx2nzGjPQKWyVHS2bmp9qedSdg9qEYEGfpR4bq5Ja8fePqkygYLP",
  "key40": "4pjy2kUrKQvwHWQFE27pVmviyLCB141vv1Y75by4zpkTEBtVE4ParNqVLYUeB2NFtPKd7FcfnDjy6kfvFTdK33HA",
  "key41": "LP4ZQo3dJZZbe1BMf7b3za98zLfeZ2yJozEBrpgNJNVgH3cLyTxudPFQH99bPAL1PUsUsMNtPWgybtRanAWTLA4"
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
