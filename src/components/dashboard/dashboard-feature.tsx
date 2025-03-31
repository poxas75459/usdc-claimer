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
    "2qWA6VFvAZxdt92PwbsHUQgSEtrevwAjrkfspktTXt7nWFAS57oGLtbdQ1cQzidSatrLDLbvEwQRWmH6JoTsfiVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tfzGioHQptFM7s9ap1gDngvREcEeCmrYUMbtzu5UZ9io9eWgZ9Jhw5wrihLwF5SaonGREQAdYguCxsKPWXAe8hG",
  "key1": "22Uv54FgWiq74SE2N4LVT64isMPCmZAFeTqpDF8aDgf1mGGeQp9PE2i4p6YNAnVeUoPhfCWwXh6LKQzTpMKesozs",
  "key2": "jMYUUZGYKqEsNGywFtRM27BMBVJy7B29SYW8QGUgkLX9YzRGUuQFQLVyaDC7y3J1n8eNVUpRN8CfF4ZprLsDSyg",
  "key3": "UfUa45BH8Jhgfc7t3Ae4wuMJ3nT3aHTgDvt8dG6wSNcrY1J3cymXmKSwqvnDGi11uMapWx1GrQXnJs3JoKbW2fA",
  "key4": "71DuvFYqPMGm3QDCojKVjFnMQby9KSxnfpZRFzbTo9Xm1gTCRhaB7s6o7mkDDbcpZ8c52kh2nb1MfnTd5NguJvr",
  "key5": "26zr5WqAfUxTRTQ5oQH3gUqZshg85GcVVhgZFNjT23KKNrHsWz95Y9bKMyZQSYEZCP7TGdp5scJB3Sd7iVvXYaos",
  "key6": "67dy9hmrvewqthQBU4PYb8m5fHp82UpsmTBS8av4iPXdyrvhPbgtnNyM2ho9cFW3gDW3R733EYvHb7zbW2YGep8y",
  "key7": "5J9mFVYd8MW4VhCRraGm41wmhiJjANHRJ2qWLoKjSovcCMMfCrzCcgpQG9BL5GhWgdXnRVHE9ymt4vSJzdQbQdg4",
  "key8": "414drWkzKhx7c1STTgLyaobeCFdEJWqA6qKgjuxU8xWVnb25YnPRUsi5i4JHBnZfjnZ3i1BDd3jqFDWidmD7x6v2",
  "key9": "4dwDGdzeNBtaFtmSvMi8PMNWEB4aPT2EeMqHutrnrqayWmq7wScYJBy7mB2hA16wsiKZq7gTL4ae5riADKNokFm9",
  "key10": "4tueibDYAkngoxtKHBmK2Juni5vnwxGocCzJvwCHUwcjq1aJihcZZPuTcNLF7ht5StcHCXmEMriCEc6dLPVxLYp7",
  "key11": "4wvGtudZcehzL7EY3mvneW1cbCAg5x6cScfA5nFZRff2gNb1qnr9VwQZtimrm6GY3hbEmmbt5CTfAjdXwNkuAr9E",
  "key12": "45V4yjxxT4rGZbEqQdvyDV9eBf8ed7q3UJNCy6n3fSWsb3nYEbgvfjamfBmcFCkXbuKZnbb6XQLmXPH7pKEUFd8B",
  "key13": "45up5zrBM3aC89PcX7yRTytLdRbFBy4SPkbEoqa96JDajsqjxmnrh6kRqeUFh86y4hJVpyxL44xY2cETJWxNNx47",
  "key14": "pTi2aTLXGWVMqFKHZwKwuMXvdgdU9VWWPM9HRAYqXPYCPeBDvsp9ujrwJ7CPTbVJwwJzX6ADSfTLGemcnkRn5KQ",
  "key15": "4mA8TbwNgCLwfWxkhdqAAVVQFefWhpoSbZ52LvRkLBSTsiyjUuhHuEkvZbdWP86LhFAoX7WPTKCVDLECiY78Mrkx",
  "key16": "4W7ddqkUUqnrnaRnB8uL4u3h3Y8VKxL5oKk748RCqLExFYZgRi9gMLpVhFb6oktWFDH52KuwAL2hmPUVKFpMkUQs",
  "key17": "2e7nGZw8fYsz1bWH95JxB9Se2MSH8Wyt3i2BchX2vjja6Kcsrm21x3m37q4dANQWAmHYoPVTGTNjzMb1fA1cC7dR",
  "key18": "295SjPphsUWNLbUNv2p4UHHJQtqh3EaTHYzmjWL7WwMiMZiQcTDYev7k8DMVS41zjCnsuAUWt8wabA2siJExx8Lm",
  "key19": "3BBi6Edq5Aqm9yDf7L7sriDWYGwWTLeqx9Za9XVxEhLCagZ7mM659FRYbpQQDbAouJ4TxceuhdcibgyaJxW5cKiB",
  "key20": "59xtkVN9d8vqpJuVwqqmzRXQUkauUyVp2JiMhbUuNrqeeQiRCTpwftUxVXYt59EeHNZNZBrtQmAhgm9V1bSPJBan",
  "key21": "3QzLPYa7exHkUAqiuWWX6psuJetP1LmkUnHT5Qq1EW7peLMAFT7v2vVND3ubMa6fzHeCNXHcCi9GDEUeQ39fxDsy",
  "key22": "5HdSqkTEoHuaLPCqWhsFUU3bJDopx4eSVTdLgowKwGuz6nvq7Q7XYqrqSUx1WF3UzkAJxCoSy6CuxousQRchEMCg",
  "key23": "hfiTrKa4wmgqL3ynLK391o22narXFz7bzVTkqfboYEDUWMmC7oHZCW5wSA9GjJ1veeuJubpxC3pjRfzWFhCvPD8",
  "key24": "64qrLNh17DH6rmKNBkBc3LK8yYDiS86ZE8k2LSriPhSCcSWMVHmYFYvsDcjkCnXNkimqN7TZkV3z77dHHRLyKBbx",
  "key25": "62aHg7JAwDHMVvDZ39NjibCutL2tRP5PNdQaBfH7hh8TeThVbwvebNXbM9MMmQHzDXn15ZUuF3Woshj2CkAa2FU2",
  "key26": "2iNmMVSkgR47NMg8g3gcKo8ujUidWspbnGnThT1ZbZJZ1zD5qQ1tevsj7VpyiZ5Rg782aU6kBaoWneUJqApFWWXj",
  "key27": "6K9crStq7VmUbuD8j3EJuktR8ygmnCXN76A37YL4F8FQWYMW5uYoGBPwTLbVFQb6QkmbK78sn7qUxmPVzkMCqKx",
  "key28": "49cc1qmKHxPxz6Js1DoQH4a1FmRquWV7MeS2CRAoBHp4uEuddGsnNiHHch6dqoKDRB65HxYrtczRZdB9HTPREQKM",
  "key29": "4mnhrDqhned8S1rfpQNsNF6Eb7vK56WfkM3g6Tyshkwvm8E5XctyL6a4cTFim6vsq3dh4UmzRZS4q8P3w2QEn72y",
  "key30": "HwH5AfWsZ7aFYMpJ87sqnGe5mcLujiVv1YAwEvVG8NcBpJd2kf4cC8UYJCRaCwcMpBQFXQheuR9PiuaWix2pnKV",
  "key31": "5q52japiZXQdvj1ff9ignynmMVZF7uc1C4uuGCDq2AXqSAQFiCruu7HHLuCxt6Pdzbgh4NGv3jRCEVdHbkvwsRF2",
  "key32": "2y1Xsan8xna4nMGVE34KWrwRyuXoCjBeWhnt7Q6LbGmiLyQgnMJfwXZqKkNQ7i6rmvshrECQmkokFDar5a5PcZUt",
  "key33": "2QskHVPv9jos3ox3MmT3Ad6qcs34UVssmKBmdNFSbi39WUW4Fg6ew1Ehc5phZ6zwxytMrN3qENDeG4p99hJCcceg",
  "key34": "2geyiGQygTfL8L76g46pwpAdGZJyEpPHmYVH1uRPz7FPZLJgrfUyJbcWn6AvwfCSQm8Ku9YBk91w6VLkSJCbgPFD",
  "key35": "3SCV3e3CgvMVcckYyQryBaNYB84PgjwnoL32Xf34PE1E9m9BtfSt4FUY4qyDQxTo8Yjw9nwTCxncEZnwKo9zSEHH",
  "key36": "4mt8W7V5Q2aAoqMwRjwmL4v6hoYHc24YwyBjMKJ6DGRd3K5zxVXreRAvBUZY3iN4YGVUSFTNTtjDASUmwSgN9v3a",
  "key37": "3MKXSwCFk4zZ8niAW7tVTnceDoNRnS7B7nq7snqK66QmuyQXyoQaKDEBX382JHbSv6pzB9g7osakpg3Ch83qUhqH",
  "key38": "4bBaLCLViv19gYcC5AjYcbdPVQcaQLWUHPj65tTJEoQLo7Bhtuxst7d42XJzJ24EyGhP3s5ad29NUHXHQW2uKFBj",
  "key39": "3xjMFDDxTEmboBRpvi6ojBFCiPnKq1RnogowpAFa9UobkJbxstYQMWtocQiNn9CaDT8vFPU6tGnVMtmu54tDXu6Z",
  "key40": "3zBCXWaeFKNobr17Z7Z76J4yjkL3iqc243pz7kRLgQdeFLkHtDGzBUL3Q7XVQD8BHR7r1KudgcL3wLMa7kcxPz5E",
  "key41": "4X2t64yviTzikwUPeqi7fKorWPaiqsL2bfMebq7yt3uXusoqrdrTNWHb9KLxsdkNvWbXLFZVDnEVTAHQ6tmgCzgP",
  "key42": "289USHuLhFeX7zaTyj11GStrAzA2x24GPeQUheuFiaQuaUoW8aSLs17HU61rV32YaBZEFW74hyjxpYR34i2DDNfr",
  "key43": "5uVueZG6YsRtvvjGuxCYFWPdZ5u2bbSMJs8WdGCayMBcwQqSqCzS25xiJYJEDHnF6yFLPtLF9Rpo8X5kjZ4HNSLa",
  "key44": "23uBXwuxLkNhPHuUYLUHcXYSFRPA3Mbd4b18Lj7Hg4kmZDVyq5Yd9ipDGxicAEW73V1Tif8bz6eZSpYHkdpfQyCG",
  "key45": "5TkNcgzMBpUhijFV8K5vnTGwVecQhES8eQy6dMerEZP7YkKQbrkDbBgN4zYrr2nEtX6duNc2bpWGB89uDBVhe3Ys",
  "key46": "n6mi87jgNUcSaTwWw91GYrgPRyz9T2WLxADRxVQk5axFfg34aw6y8CkXorYZFGjmsumT8bHLfiPWAeYCF9uVP9y",
  "key47": "4BzVNPgSnLbSjEiThTuBErM34PzCWVG5pVoUJ1RQf6ZVu2xSEBJ5Dfwt1gfd8RN5HWcgyLEzaGuc54JMkaMdJJkd",
  "key48": "4zML8sKq3xsiQ2rL6G5D1a8AVjvjLXx7zJUyL8q6CQuQfFVTWEjR9KLyxSSMewPmnaCstVNFWwRBQmsV7NKW91Fp",
  "key49": "pVSF1PZWEkXYao3jpvh3xfnQMKsrMfK2my4cbfA3H9ANckViJcfHGA5FYh8boFTEp2b6gMBsDpVaiA3YYV1MNdc"
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
