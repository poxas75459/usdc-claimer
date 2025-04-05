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
    "2kPY3Hogz5MBkDGNfot1pxhEw4Kv6cvaTqYNoA8Djf7tE16F8aWmc5LoP1uTkeiwoPHCwHgxCWFMtVnC7wME5RWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L2STRCika69PGkq4XyoMauXY39nh1vcBm9p3PPGnZ8czuHRc5tWpgKNWoj1j4P3RHNA2NakUp4MUJVxE7C8yDtB",
  "key1": "T5MbiDLcgaEhNvhHYMqPFJXavt2BuLvYnrZUD64SyzH2vUASeiaa9WiUaksZX3TSdDqeNoaPivDja2us9NPfamB",
  "key2": "3fpNTUJPgcE91hiyM1UNEnXK6Bpb8cHz435mb5X6mHKeHHfRjckZPca19nKE9w7NB6nyJxYVEDJQ3WgKpx9WBfTc",
  "key3": "SRro59KyXvS7miM9c81j6P7Vnr5myAeU9XPLbVajX8PVy6LoLdYNiNmU6KtGrAv6o8okSEeUY5KTjsHa8MU5Mn5",
  "key4": "2KsnyFyj4oAczYouNikuz76aj3ckw5WjD7BnRvQAmU9zfAp7PdagJjUBpbJxMAaeqGKiYbEKVK2FD73bKmbqLfxP",
  "key5": "2wU6y9jpkZwBur1DtukCkqEBUQF6hHLqfRew7FLBzmXFC2seJ6Rk9tfm98ARGyajGW3m38ad9ejXd6BRFB9qDhJL",
  "key6": "55puFVuTG1Y4JBkAjJWeMT79msPzJnpXn4zdSq62MphFrxfQ3mdWiXGex8iwLfLtM8qQbfrFUC65xcj6v8K9XuyH",
  "key7": "ZwpWPkeyuv9s3x6V8yz4F4ymddzG6HNLF8JEZQxxS6QgeoSTLWYJCL8JiyHzVeaQexg6cRnAxq4iSD16LcdcPmF",
  "key8": "Tdy39dhkAAkGFXVETCtPZ8SbzwUH3MWeZKBrDyE2RD9b8oxWdCfXowSeY6tgGTw7cVyTgdgBCCum1UoE217xnEk",
  "key9": "3nPWQtS5DcfQoUDvAv978ynfNetUvCxkZPWqQRUnnyxyA5PF26pdpZLPBrokBzx5u8oVctNzFbgeBWc7CMmt9pht",
  "key10": "opCodFqsvQJ48xc1Jx1scGVRdbW3Tr1EyYNjK93Gn1D5RWgDXiaPuEbvrNnChbNuGVrQvopJSF7EAJo3RJCwVBt",
  "key11": "38o6ymXb4M9hNtS8U7wHtJFPAUMGu6u56v94zQxZ6u82Va8mjuW6BBrShm9qBV5b2KFB132SZ19Xvmprrg12Gv9X",
  "key12": "58bmQWwru7pFLdfAvuk1BB85wLsvNggtJ7CtErynrUcSyZPeaEACWQAMuMeqQC5dhjgEMAwJ9FKiggGVGuVQ5VSm",
  "key13": "2HVEeRof9LX3VBsR9EBiF5TA75ge1bFFqmTsstCKDxzi79tAc8DQvBmneQr4dgXvKuwgiPNoVDbWTEVyM9KSSfXG",
  "key14": "31hUBfHV9pkFbnpy2RCPZnAHhqwrVCmWfpHwHD53LPqem6B1gYoKv7JfMZQKSmF5LGhPsEzH5KaoneUFppNRXst",
  "key15": "5g8axe5Vhffh6vXYjwEQdBEWAfhfSCrFQeafrEciXwkQJxG22QpsJzNpXd5fc8SZi1j9UQv2NdapQSacJ9QTyN7q",
  "key16": "5Ag9uHCEwJa5U2AoV4uXYaKbqifZCGnL7JrnizSxDFYP1xbnyccoC2LoZC44c4NC7tpz5KbV5abzf81fAjToNfkz",
  "key17": "3vBG5ZXaJ4QszbzM9XJv6KK9LDKwmfQhqDyU8jtFLdUZcHjgYGTYNxW6pu3XTy4SQvST6VJHzCZ9qgyHXD3VjqZP",
  "key18": "54HJ7SX2VvcuTCyvnTUMYeHGjLNwRt44p4UbWgp29uHnmoFV8vvi5vBGn19ULf7koPmzMsNFg5F8eEgkSLy1pkjn",
  "key19": "2k9xgvgXr8CnEPbdM8oQt6CyKoFT9cfrCfeSedVNAiKzrffTGnzvZy38J7nmbWuvB3u7RMwJouu8zzDysezdZ7uJ",
  "key20": "5qbcDzTE4mYYMpU2yPw7McFbz2hupxHmesQLXTcoDfKFjs6AMeaqEDnHCexkRyGKNpyQ8yxnax4m8EMoQT7VZE6L",
  "key21": "2mVcBsberGNq3Huj6g92PwxeqCdVf5fykBM9m3cSiBNMzw3ki7B8QQZDSvmjuPmxFWU5nCZ5XSHiur3oPvqXsZs1",
  "key22": "2QZB3XmRzXa14KZzY7mBvhfJ98YhStFKdtYK6M8QDgKa8QRfcjMUPzhYGZDNYADECPV6De5LPcL4JkJzitsZf3xt",
  "key23": "5YqfhjmtfFV4tLKqW5Bv2kYWY4adb83rPr5gFhXEQswALqW4wiJMqVgoTzk3EAxbucDZPbFU3HdzM1Skb8nDLAsR",
  "key24": "5ECb9FSJxP97gz64PdE1jWaUdr6ukSx3kU2wTSKPw9iHxLNUJ88jtRDKJsCar4kidUyW1V61TQyv9cpVrT4a3PSe",
  "key25": "5mYoFkzC7aJxPj4h2mE8mKYfAALCNaVJKaZkc8uD9mRKMt2jpqY6STs1PP6i6AZdXLp26snau1efGd1s7ZHF7DBp",
  "key26": "3oDCNUuVyJn7oinUCwX48QFRFPiedcmdnzMhpNLLFAZLxPe1gyBA4V7y4fnLaHvC1zzqWWz1uAFPo8KVJGQtpv3j",
  "key27": "M2q4Juz8LGLkEAsQvVpf7fbJDPc9zq85F6VERErVgwV24eo7W3HUsXa3AyFvKzd7o5ATw1JeP9Bv2tPFasLbifU",
  "key28": "5DbTnEQwKLUHRw1ZC61rsQvhoJx1VgJpsniYhEBkYPVD8WidEbVu2xUTAisDCUmq6EdQf4gbTBY6VM151jAPDcHe",
  "key29": "3iuj6bGDwFTe7FAVp5JZEmqmeTrz7Lh2xVXdGbPntam4jCM4XcQ4RxnTmvtrY5fvf5reYo2mrYazh6FuzCS6Sfi7",
  "key30": "5Qzcashbt6TW2wiCPW5txiu1ANfgfzpzYw5a9KruiC4udVSpbKaFLcQReQCF9L8Gec1zbHD2vu8soZdYbAzJT8Xv",
  "key31": "66BzfXMaw4hbVceib76iF9bqSzAYe66P9cFVSyB117RVm6vBoX5cTttyqyRnycgyCrJzwnzpXvm5ipJ8f1gGYuRw",
  "key32": "3GYH8yuJDejDfHcaJxW3ck8KZfqDYjGGCAuw2q2o6xQ1T2fzrYzk14cYv4eLLkxyMYSc37bJAruSEMwTPnric2dW",
  "key33": "4PCc4W3iAFFm4U5hkkCxZWxbptKiZXbT1R2xsz3yU8wqb8UJQMw5b8eqT78CCSFnHPBP2j2guhXC84RVy9YVLrZf",
  "key34": "2qSoGZpGEJEAsTfvUtFRLz3NAsGW1SMXR6vGLVLJ9k3NNHGwZ8CNT6WMyQzS858XeeASBNCmDBQyVWJ23Tjypdr9",
  "key35": "52ovdwwdXZCjCFDp1fqBNjdGXSnQaENTTfVJMN5BdF4uvEhkua3vP1mKRX8W8KV3V25KNPFGtnGJdko3bkQTkpmY",
  "key36": "31qCBXzov5DWJ5HM15YMsdx7AbmRCMcn2nrUH4sg9JzhjBsajA2DhQh9mf1TXUHSJBEsWur5sEBGFodu2wak8vWD",
  "key37": "4HoHk2dXNijEJk84jZ3bQy2EdW72Xgwk4Dt699pAnCYLREKWD9umkemTjgdaASToeKVz5p6wYX8b4LWyMbPSHA2w",
  "key38": "Yd7ypirg6G8Fx5fcVYnAMrGekB2wNgHjwKZxzfU6Kf4o7YoxHCLQiagcLwX5uazNBEyHMExQ8SqauJob1Bgfy8C",
  "key39": "v6TwW8HtKrPqivBjD9T4Mfmmek8N4Uphcty7kkR6Y1ZJiopwZTi7HLpkd25r4bDy8K7PHxaDgFWfrAvjsTPWGJG",
  "key40": "2pttZm4ngmCZuHs3hqmGENNe9ddJmmFZermRih3VP76KzVYnHwsqG33KJy8w8KaiQWGLAaQDLhfQUsCdytNYCThf",
  "key41": "RJxwicJ7wEkpPQ5jgzPHBfWipjmC55CqzDd4Jjzeg8xDNTyVisQLmsuU9K3bfWHiwTzUfajghDm7mkcR2bMY65W"
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
