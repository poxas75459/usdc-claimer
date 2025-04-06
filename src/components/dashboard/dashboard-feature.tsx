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
    "3WMHNB6ZiiqPgKmkGoGEd9GwGKAhCDni9q17KnPGu3Cs39wYeTge2Hh3Aj6KTc72gkPoRYVNeH1vvSPFemfHkvXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qHRhVuGSu8YcHvaPYunpdajgtYzW63ZCKSHevPaehbTvrFX272RHnZNsnwMQNghKXd4GggnVTfvUAxFx4TtRvQ7",
  "key1": "MgMiCRCE7Rdrjn1vn7KGPpnPkm5B2VU3NxKFyVSsP2qko9JKn1ZJuMwcE9gqww79PVmqjbiVWPAnN2AwLYpLP78",
  "key2": "2dk4ucFT28VVRd4u2kAX89nY1Y69DtHr2JogiVbrryaLDDa4uyy6E1DT8CGue2GN74YJpQpGbcVMwq2qeYEdrFS9",
  "key3": "5ugv47Dyi5s3dqPH23PQR7YYQKJV7tMi3wYv7F1ami5L955ESJiGQruemVdBJcCcVxJg8ALxiVejkq1CNqnascYE",
  "key4": "5zSBrNHoheyaoD2i79GvtuSuucbMaaZgs4PLvpXPPksQPy9LLDfMXTY1oHXQPkxRgAtvPwpHgNAbJCfHi1KfrbFk",
  "key5": "5uYw3tgMrcSfZZ9cwNVZ9YCYrm2cp2EBW4hXhhogwDaGejKKR2AiaKGACxMSo9qerwggQnknKtCE4KDw84TmbTS7",
  "key6": "36SixTz1kLqQw34ybPBhM6EjANNq75Tf8Px2tKu5WXuJxrxKXNAB7ZoT51Hd7sn5GHRPQk8A7xdyecNk4kcBXcvv",
  "key7": "2CNE2Z78ZPg2EDqXGdZ9sgHMu1RBZwC4zgJ5wLDwoJ9CKTS8ShLMLunvJYcC8N4Cw53RUvk2kAQKEdTTbJWoQK1c",
  "key8": "4bRTVPiLRBvCrdgeT6QvWyqcbNZZksrS5YodwsFkmZLje4xfv3n4HYK6RvQqJfjH7Ypk4BtXtasv8vpGXcti28Fz",
  "key9": "4K1oQjHSg8eC16NQtuU5CnUct3ZzhTxgNbB3MuddmkiLJyhsA7TDiV2NL83URgLyawUWdyNJfuTRLUjkXuFhYMHW",
  "key10": "2Nm8uu6WPLRicMrNDCkvuvPCxAEVgLUqcMRgjdDMAA83aVE1eatKdrMJ7BZf7TUCdzRgYHrMMsSjaUd9gNspEAM5",
  "key11": "67Kd3LKwmPLAkGwgu1wSgS6MGg6JxHu6VXVpiH3Qe3BHzPe4rkHFTV8LF92W1P4i9MZBiAzWJuXgW1hwoThRy4zd",
  "key12": "5fgnv6q5gLRGS3kLtGJofukjLVX4kKEnP9vRieCHf2d1roLNZhdNtiahdg5uoYu4FHwfHwwEXCM4XNXrgsd4DvuV",
  "key13": "3tyHykEc7w1XzjbtKwkfTYPyVxFk8gQtdeXpkPe9snRkXQKwhwfyRnQmtQRFx3MUpSVkv5edDPDB3sWMsBFXm2jg",
  "key14": "ahcMi5UiPGUguSVfrgA5M4nkzmxB8FuxVwFgboDK51V9gCWPsmYpWZv4u9yk693ZRZ8Lz91A4ncgTymWSLEkTvm",
  "key15": "4e8LfFgmXpupHSe8jtmM7bcZQz7dr7VU2yU2gi2BddzmVKSEoRCUt2zBfF994hJnaWdcpxybr3WUPpBNouQtNA2D",
  "key16": "4c1DyirTjLoynu6BUyEp5yYTCfQHwmHbg2ANZAYH6LxRDvFqQQMZo6F3843HyLs1p7npE4A99kDnpeYRNYv5CM3C",
  "key17": "2nJfZi2bhV1f6P92dnW5qCHLfRCCGmQAAVEzYaDfM3kUqhPF9FLMg1RHdvjnGmQypG6CWr74CKF7omJ483QFjvCm",
  "key18": "2oNMZnbKWooTrQ4TAcmHjVovYyMJJ4Bd6YooC6jDbrMUELBz5CMR3yRH8JeKy17C3X3sz7rfbwBSBY2vpvMnAFmt",
  "key19": "4xciTx6eKZ8NDhm47PgtNgRYfykuW2tc9AbwQpsGxrr844pLssjD9BBtNXEW7cEaT8c7ojAWJLxadmduyUKmCuZL",
  "key20": "4sEfSBvrqgmZV9QqfgPT8pzWJ9nmiHYd4GqbfTuwj6zqsA2z3y9sMBEeQ23jXS5uWbhxsAtr5cAG7A5zqsAUnTF4",
  "key21": "43qP3LzbJ4mpKRdQEbLf2gDxxQDb95NABHCRdJEn6CBUkKg7H722bSYZXNxgrnKr6fpz82SZHwTdpAwHbkzStaay",
  "key22": "4iMzgvXhE34ep2gYaEsDV1qAGwqsEYpygMhBWFVBsu2TuTWVXqFhuSd2ro8Gx5ozE5pguvgEcc8PYpR5A9jxXgad",
  "key23": "2JyHgWWNdx59bZmwA8TEzseEWxEKWKRvpu9zZJWUT45LeGgkyoPdfA9QoiWVaftt4qJ6YayjVFSRtgdg9RxBgrCF",
  "key24": "TD2mJ2TPPPSpgQxxSv6ar68MFCAER1aMUee5f7sHBp6w86bb24sjiYY3cSkqheVT3SkvUjUvF677k3Qb2tdgRTB",
  "key25": "54ykJJ9YMND45RAo2yS9wQFK6FYUCeZiPhorEoiHh68gbEruJ6cfemejCmMREpFNcARhtankFTEhDUSfPYhucFYB",
  "key26": "3mnZHeet6gcxE2UYEm4GsahCRmSwgNhQY66B9TsmCaAFFb8WHTjz8yQqsKi8koCXHjMfbSkfRyWM59RaoC6xsBPc",
  "key27": "3VbbJE4JkHx2xhmFFmpqi231LF4A2JeRenZsybxJ7ZqwA4UedFbqLjbhfuidTMqsHAfiSJPF3pSdvQ5yQ2dGPKp9"
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
