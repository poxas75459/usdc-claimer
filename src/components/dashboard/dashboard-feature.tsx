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
    "5LkSzmTe1LuwdFoBVvhQ7cG7KuZY2KkBYgcijaKg61DR44mNidyW9JdsuNnkQ9rLP8f86bKr63yhiPZntGnFfY5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wa1KNMxVg87yy2d4oLue4Ygo62u4HZP6N8fBhubbfEpsktkhsAiov6yYrmuPN1tfvoxik42vpGakUpBTk6pxf8A",
  "key1": "E4WQgaJMuSgDqp5zqHFzuj4eHDMhQSADEboc6kQorc9XyGU29ztpaUPF3iiqJNqUxbuShrPZSgZgLcSgFy5WRU2",
  "key2": "AJLrgDMuZnyA8DjYmguKuKF5ry7FLXuGUDtKTSC4YHpc4bknbszFY1oFFQSJaSPNb7qARfncVJSiC8GxhkqwoLH",
  "key3": "cd5RZHapUmQsgasny7qsKNQ9PXHjUZ4pLayALnk4tFrikBsYyUpNpT3AfgKDv7uoCVhdy3JCRAV5D839N2PgwUP",
  "key4": "4kp4kiVp9jWJmZ3wzVf91qtsiwUg2SKMaEMbw8Vga2kKXokpCDdHFRzDncEHQ9fsHgaT7SbQ9J3DsgEMa7fPt3wf",
  "key5": "44FxND4WRKmB5yna95X2fEeF7YKxQyHSfXHuDtxB1n589LDhw4MUrU3QJhBwiV2WGL1MgoaapQBviPiohhxrcw5v",
  "key6": "25oUog6TFt3NJZzYFGaNqgr2jUJzKgQrhHd4vL7XDhpb8bRtRFxUZyfqqHUUiozvULn8MYx5wG9cgseADicj4Yov",
  "key7": "3uwgZ9aZ2Te4yfzeJ3AucEe7NQQzXdhccKXbM4R2TDiyG4XwpLcHBm8nyaMrTpHtaKTNAjhywjo65dvHbdENRean",
  "key8": "58T3SsyvAeMGHqJyD4Gi7La9WFcyxHh9BJYKBN9L5xiesnoWJXWj6v2wzPT4rx9P7TqMpXhczx38Ra1KnAhWj2pw",
  "key9": "5xYSbDztQf2NdughNjjsZqyLmvapHofpCui8zWtPbJS62XCHs3e3kxwVw5f69SMcV8s5wGASLczPUZjiHviyS8RL",
  "key10": "3ztvPpqo4zXRjAkDVcor93asbVcLPgQYZpp3CEWNMi9Uk2F4fHX9vovG3k3DaG6sMCEdVdTTwZQz3g2tgBjAd441",
  "key11": "58znjaPQ3Hp43Dwg6o7X3dTqKJTmEAtnRgLorf2GUb3ogSUPYAj8caUqhvoCMsx6NNznALcnPJ4AoXhTocTBBzrf",
  "key12": "5nvrBpY2vvExVQpxLM7u1vRQMGe3HWD7DAj7AH7H3bWRHosFPL9Q61ABsmLQoGYXk8cRgM7JrJEwdivZDovtXnGU",
  "key13": "59FyZ4ghCbNcR5Uv4RVEVzFSNQQGXzgf3tdgSmP8orrVEa9Lp6Gp8Ko8NqZWTCNZNqYYVtsufZx5DXWWPDU79vSt",
  "key14": "2DvVfB9V6Rk6W2ACyNPgg2XGfXShaBEGCw3a1geD4bRZngPGJehkmZ9H8XnkT54noXWnF3YK2EXt61b2uGZcELbi",
  "key15": "2MqtmLaMdXFEYiKYkT36WCWs4cjn19DCp7XkGiP3V3LVVbfpiBqwjYnS397XwN77Zcm4MtWs2n7CNctUkfQkuz11",
  "key16": "2mEGYMPKAWk8oSimG7dH11mDvLJVCcqrHWiDLYxoyJAezRXPCsn6oTkHwbWv8AefhbnCxTCiMWpvpuLkwQx3DUoP",
  "key17": "iJMi49TaydXKXWSzgD2CLyq3PxdGpFb4sHGsbCcGHbr9nntrtJ9mDiadjDCnLBhdijk6W5adzckh3DDGg7H559p",
  "key18": "4DQ4nFjytMa4kQLexwBzwG2ueq8deru1b2hacsHcDG7q4fehvLKDtYzn3mCFDEg2WTn5yjA1haQNTMUHpfiQKQCc",
  "key19": "siCoV9VAzYPN4pMx8z2cqRzS3mYz3nTjQp3v6o7DECUQU2Dw2XDRf9hD9GeTHJ9va976coSrXo6UWuXcptN1RtB",
  "key20": "5KVLcXAbP5rt8eoQdWsufB39vcun5iDaNVfErRyPztknZX3FtfWmDPBMvXmovx35bWTUjAzqjodsMWCzngqkBizw",
  "key21": "54qd2Z1VkwBoo3MkVAqNZTbtG2F5kNfrCzWZSwji4qdKk698ZURczArzMsFCXaoZoNr9mDxsZGeQ8ZGUGR3LjzE3",
  "key22": "3QXygjDpueeCEzqVy1epekWrDTs1XUzAKtx6wkBaUXuG216pefuiRb5cKVD34moYWGF77gjQnpRgudoBqef4y8z7",
  "key23": "4HgksvW8PYUqwJSbYFa6h7sYqaC8xMy1sQTqyuFMGEdG9PJQGYwn5wBdWQYVi4vxaP5D3hbXmS7acdfQXuozMSga",
  "key24": "2dfDiPJiVniBHA82368SogMJPXKVjYvNhiccUsSYvJtm9n8mLMqaR9CSZSibCx9Z7ZXECvmVURDxeAQbGHT3qSh1",
  "key25": "62DEuPfB2ZYt2ayiLxu2Wo5Ph6PBKAUahNNkBWkkrHW9fmDkrkrqvt7ar8pnpAFCEcmGxT83MnT2cKVH75dEC2fA",
  "key26": "2eHZLwXgX9tfHhkG56fjojCu5vjQPTKWiUvzsf6UUNVBMgBtBcyYkvakDdubLd3CQ7XRnRiyzbVgbWd9zfKAakhL",
  "key27": "4Ve7AAtyXqBypqR2mypjizntNyQTWwcLnYBYfC4ECSVynwgKTbRb7NYgzeiLbth1RFXbniFgzeZtwSr5fgUCh1eQ",
  "key28": "5pLyXfVQDffjYiQCPsWbiL8xgJJ5CAt7wi61ReRP52Cju52j2syPi52bbsDNRkdK5oUfLdxcKVqVxfFeWLneZ49i",
  "key29": "FJJyhH6sz6nzinDs3epv6tCdj3pQzPsPTL53kNAoZMEqhAgYEgoaKJ9xxBDPbRyZgSD8s5BDSELUb8jiEpSa4zn",
  "key30": "4GUv42LFCwkvdAYg5Vxq5QsKWU97s5q4nzZJDApGdnNZ2kvv4YB5JdCHj4LZRe5XbhdEUzFm9hxYYbQYCwcNn8nv",
  "key31": "4vqtY892tGp17z3knZf4iZSZuQFDViacHQSVCSLF7cRkeyAXjEgEfCVWhZhKi4p4VT8dk8NbdNaeBcQVrqKyj1Nq",
  "key32": "24S4AqHW6nizhNy2DDMAjGBdPizRX6Dhq4CWAN9GhjLnYXn98yXiJcX7SGuMQCHavEAjo4tnqXeF9XZh47e13foi",
  "key33": "VDL3B7AvkBoh2gcQ4GkXdVvjHcwybnHqFbrcYPKGyo3isggLoNF8AiyZ85pSVv6pEG3K2NNHNQehbjY3K6d8pxu",
  "key34": "YiWwBAVEhNhmJwhNtGc7dvqL3FnmDYpwwaS56Rw5ZD1h8Wt7tAQTzspZMgYyu9J5Uoe6DF1Uyb9rbtnRYmgdJzb",
  "key35": "3yNxGPfrfcaX823ennMPvd6WmPpkNMp5ijoiKvtSLG1yhu4gva1kj6Zm2Ps7j2AYdDRkumYwFpLnodRo5ipxNCcs",
  "key36": "5fTkHpMJ6CAjNZr3GK18ez2owpSKyESGTH6n1xmreHuonJH37Ajb1Q4P2xr6q17qHuu23h3XKRB1xx4ZkMMPYrrd",
  "key37": "5eDRe2cGxAytMpHVL4iL7KzbbgADQRpZrMMtUS9AvhRJKc5XdUtG3wxTFYNjTqZNjdxdUf8w7cbze8V8nUXiH2Mb",
  "key38": "3DtPEz3D1LmDK8grcp7sKdMQ3ohQPTYHp67frikq7x8DXfaCEme6V38TUHLeNNs3ZHUsEWtaSYcLAdTvsX6HuchN",
  "key39": "3W8bwTQjHeU4cgutg9P5hP9GZhCcaD5QBRkDLuoR23K5q8x6VYkPh5NBsVxNqkeU6huh3hFGzXsSbXrrSNzpkpoz",
  "key40": "5V2jpkD5w9hF4CxinQoMtoNkb2NJWyRge3Z9BPVPsq29qR5p5zQKExvwLYnuMjDDzy2ntHy2RZ8pKf9mwZMwUmb3",
  "key41": "3C15ytVKxBoQgeFUQmarWHaBFwg6UoBPfinYnfqwi9f9awSWJrPN12tVxb5HR8jn4dmLq1pzm8bL78ohmtdZvXWv",
  "key42": "5kWXnfrSbFiRyXWTedhorZb6SMQcap4PHuQJvFG6NuywZSH2GyA8hCp2t5bTn4MjggARSfT9edPbLdcDVbzY51V7",
  "key43": "3qEhWbRbaedjhG6ousHdExerQNpYEwJDym6oJsCSmCYbABKvGffMTRMdkSZNv4Gv1cVfXAKPUNJckAfw2mJ5UpXi",
  "key44": "3e8RdrDszGP71bvfXyJ4NGJgJcMs8XCLtCxJdqDqr74v6HgdNV1uE696YR9NCidLAD1K8Hf8PShRYSKf6pSkS9Nk",
  "key45": "4XU42o9RhtqiAt7zdCYSQvWcrJrsDSeM8WqpU9wvDhq3yiekcuQ6LkNiVeJ4tCna4ZqUjPxVHaU9WQrFQcpedWQM",
  "key46": "SWqYRQyK2wSRLRkeozzEkf438Qbsz9LJco3C2t9Ry5cg6xfFzFbeiQ4DKGfZfkCvUnUgCLQEzEQoE7gFezTYb1S",
  "key47": "3Mt6GrMA3SLk96JqdeXq1KeZ4mE9SNEKJ5seyNhnCHTzgjTEa6zaTeeHKVhWNLotMHrZ9tV86oNt3TNBbhHuK8hM",
  "key48": "3jzkpScGaHXboHqVqFFBukjrbLbJgBEtbxeFKpah9kW3Jj4eKPfxQv7tRYDXoWHuiuMZtmyBPQfeqViEkSgkUYm3"
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
