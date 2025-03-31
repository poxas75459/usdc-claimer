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
    "3dNLoTk3zsdewpKPzfp3jeX4gDbfAk3DeTDVqjwUN4RTdo5UmQMKqX9jkoh8g4PidqUoAyuG7FRBLqxZn8UA5Ceo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cF7tWZ8efSG23WpzqiEMYmyYKLR3x47WPak6EHXwWWQM75JnPU2nxCxYnYm4nu6ePJXPou98i52G8s4tMhjU6HA",
  "key1": "2VPfmzqgkxMycdfcENbsk4hzGgF4pP83ejm9xAzXN7TKdm8W6b9ivgpfmryueexdJzJk6MetyZvvXBkMERKAYbuB",
  "key2": "4TYb6Jjt1TqSFC1qAxT9QmPRU8dwEiKcjcef1xPPZNicaBrCXPJcVcbLZU6TxDAYRSPuLvetC67YZaY4yXhjCtfT",
  "key3": "4PD6bGx5rhUE5KihG3CSGNXJkUsfDdog9m7KS2wvqZTTsmB4y2nNAE7MJpADsGpsjCDA6F2MgiRxJZiE3EUUkmTe",
  "key4": "3psBu2uZBuhQczLy3wgkr4cgJEbpAu2GXDBws4sTAjbxbfuH8GC9jKoRdtc5nZMG4bHNuAse3yEBRBG1d7W6gXsP",
  "key5": "2Mpj86siVt4MzMVWvkv4vy1xpuvqcQMPbLU1Q56Jrvgf9nHbW6QNVnPvtJjTDqieH9QEdFFYeMY9NTUpBqwtzZgV",
  "key6": "3JiqMqA3D1RJXhLFyzBoBmZv7tnger6q9huuo5vgkvRKfPCPK3LiG6Z5gHrpruncqhioEY1hVEe2ESpH4wS6GcaX",
  "key7": "5L4fypEehtLhmkZcQZdjU4srSb2vjnseYC1oFBQq4FBevUYZRhNJPoqReyz5Zy1J4UQbCFfd64U29UcUrWaFzH6a",
  "key8": "5FsKT95GzdEuxYdZu8ZWs6RBz4qaKtUTP6iBwPaoxzfjRn3YKFxYFouJ9Zmu55c7vrd8DbRkF76qEydtdbdUzqXb",
  "key9": "hSyGEo6vZVecL8yZ2A4GAE6RaDcPrNhsD38k3iEjVT2GR9py2i6atJ5UcVKLAyWn45dBaERbdDW1KcNKZDgzbZ2",
  "key10": "4wzrV33X3Y56Jt4PMwQBkNuHB5PUzJu4SNHSRiup2z6AykknLqdeSm8MhXFeZ9ZL1QpFnGJYYytKrbq93zNq4yMc",
  "key11": "3TUZvcXZbjZ3eTGekvtfJThcRRXUq4QfiMH5epfop15Vss6HmzEaGVSxwQSvTmY6Ltmv6J9X575yY5StsxZkw8FT",
  "key12": "48BiRpyAbqGDcibYnFReha2s5rjNgba4ecxeUxhedmxkEit4AZn9qxY5bwvLScAYcTrLt58cHqxJCKHKJ1RiMFSp",
  "key13": "2fFgfRJztV6griQSjPTBYrNwEmZvVam5anRCw7A4TkYLUXkRf2Sfgdr2fFHZryiX69aQSBAdnK23o77zr5M35zAc",
  "key14": "6SdvkUpNHrv7oRfvgHFV5cP4HfRwn7j3NFQXM2VwiMfiJe3ntQTcgADmQRLrpNvZi6PNKLfvoksHRDe1uAs3rpn",
  "key15": "mFoC1e2q5woBQ27yxAjfpPz8pY73m4mmBASamfkGkAEvknmQqydj4QZvUiBAkkLnB3nNgTMRcYowtna2kSZ6BMc",
  "key16": "BcMyay2RzMre9S9WXMFGEguAX4N7Q6NbSBp5svLAs2v8YSgaVPCpFQSHFnb9DjEhU6jmCi1Qo4ovE6ScKWXrf9Z",
  "key17": "5abmxgENsPCbFZLAcUQg2kNhhpfBBfXJgaTt4gnoamWM5xQmncq5CUpeU333PUvCi6EBUheYPNgmhKaA7FQsYiUe",
  "key18": "3bSsngwumphcSv9X8ftTot9P7nQWUgcMEyhenqMp1VGu1oaSUxPoN1vCP54WyjGrQz3u21hmaKmzTLZDEZXgGYK",
  "key19": "2WnxZgy7Ljknw4ieDRFU4mMbiLR1WrQr3Knw3FujQYss9cw5uHt6KPWN8ESocjEe1itvBGNcZEUK3PRdAf1mB8dX",
  "key20": "53iD8SY6bU6HuED6tGEFCb2ZkyPUWLdnCMcYZmg5jxxvZX5vExmBBPW3TziYAdTLeZVHwgPjhkHzZwVEv4i7vFVa",
  "key21": "3Y8mCZjHWMC2EE3MmGqNUNp3P3GEjoPD3gKkrRG8s77JQLo2sbGJkwatLSbXKihXFragL3QRHahekHpodVy9Ziep",
  "key22": "fAd74YpKVqJY85bsGT3k6YtDc9fTDynyL3Ui6D7ALePmtqnaJY4RakwqyNnjWknkZwnvQyNA6eWn99rVhep4y9L",
  "key23": "3k1Ysht3HNbPCMPqe8j69SEjhaEnz1UwqEcC5nXEwwribuVkuwE6RPqeAbv1iG4MXyQL9XzufLZXSX8ree9BWGXC",
  "key24": "xUQGAj8HHxNgazF5H5Pwa6h89WXmxogztrqv742yJizVrLjoPHXbNTjbNjpf9NYRZrDs94LrvKFb9cr96kVzWw1",
  "key25": "mR4iFcCNwB14eYAFCCs7r9K22aJbaJ56mVMQm4d1UeyqeViZ95rJjZVoeMVm85VFP9Vvmik2GJ2x4C8g5g6ajAJ",
  "key26": "5bXUNsYscXcLnaBHPMtWUZkmDsS9AVRwJiYUiHw7k7Sqj3dWVAbhtJxcWzARVThwvoDpbtdLf52oocptHQaMVaH1",
  "key27": "4oCT4aP4frECNwxwhZTSi4ebZcHsmRtZZhWtFxMo5h2bL3fwCpScVv17Mcjfen1raTv4FRxCiZkstANd6kgRqNXg",
  "key28": "2zEUcPGQweeWdxgbq8Dqre7RXrkfJrvKeUJfbvf3nCZuLpFcKoJfQe3pArUVJWZzTnW3d2gqKDqkieKj1HC6rMpG",
  "key29": "5T66vs7CPtUgLqYjG6kezGEKC4hkYCNvn3eM9LkdSn7QmSGuyKf8hvVqeauDfAR8RWk1s74pZqQ2jc8DckcPZo4A",
  "key30": "4rdm9o81KazoALetN14kXeteS1FYGPqZHpitoLJeoMzHUF9VpcpLn6W9TdGd1QxEiHogepfoBQvXpVERQ2xryfFv",
  "key31": "2so5QnWcsHguQszUzc7P9UjEkFKLx2vpduSkR14FyjpuUpBn9bdPLCQsAH9314XdFtqSUGHhaVkDJEedH18945Zq",
  "key32": "R7CXiTY3PVLbm6CJvjThq5FYWDh66VJCnBBs1gcGJ9PquVigrvMpFeAJLDkPiS3Qx7AC99PHhymjQzZpWbivhEJ",
  "key33": "2M9kFrgZ1dM8M9CT2ZmHcK6GtHXYWgruf9o9FSXZor47ZaNGWvttHooYsWv1vrCuNuYZAQz1TcTpgn6K87m31mUL",
  "key34": "yfYks8GbApqNr3bJA9wNxDBnvg843B96cKWzSCa2FhDF6gzx2fQ3YN5NuXYhpJCP4epmixwVWoGkUnmPExMh5JL",
  "key35": "3QskeFS2sgSKL9azWM1zyFy3k16UvkA7APN2qdtAzZMPubyNHxTbBqaTWVWBVJ9KAHAyxRzdtLrw5sfLxVBGpuYv",
  "key36": "39YBbA2crh4GUBfLpLGAc9mAFpRDU7GGZXeUDRNmvcoJ81DE9JF5G6nWtGmPuwmVi4yAwRdSq8Ce9EHrgQAi1Gw1",
  "key37": "3uzeHF5y966agxYdf21SX5PXxMT9R9CCHFzCaquVQk48W5Yfuujdh6EN2ezeim5YBwNf7DhnQNabCJFPxUFbY98J"
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
