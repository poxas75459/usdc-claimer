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
    "2EVXFHRXiBzBFzX3MXeobVspTikRNCbFVv5g1qZGwoJ6VrP746iMBc96C9WSt6qSXpbBsSFQnHAdUUX59FNpuGRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nnKa5tofJ5rfAhc5voVRSiQ9zf7hoiStk6cerQtC1MaxKYPmA5TD5kgXiPsma2vi9nyoDBm2bAh6hbdz1FTxCRy",
  "key1": "5tvHkbQAeNahVwbbxM2nNiGhRs3ZfJpUVRwTk3T8tzPJtp79zopnbMHcATvRKRNLqSCYjRmaDQwPhYsbS6TgoW2x",
  "key2": "BorpUS5e1Teh5NTYu1EvQef2GxUE1AFMLzQRnJmjnLip2NVnNB5Ca3etz7tFgopEhVRXR1ovvWJRkRJAaCmLSa4",
  "key3": "DHhUwDiCYXexFGiEYr5sqy7tuUQXjAwLTNeyLUnNYKLv5Y7SmxW9DABFjBDqSMqxZh7jwLGuKsLVpYDkHLV5qns",
  "key4": "3URPM5CTVUhJUc7Hcbja95FoECGLbBiUJZTuCrQF7CEQAJjWYhQ9NvnoNLtAJCi41f8cpy7HD655YBuPLPAr2DU9",
  "key5": "5ZYxpETQuu7U6YtDn9JtL2EmhLjdTT8Xk2C4VXsgx9gpFtBXFQY8GdcgZFQ7VfEVKQsGAbzjnkpGAyRPi9grgL2Y",
  "key6": "24VEJvERfrB8JZNkur77jQPSe29cKQUiEUkPYar8NDdEBgKW5ZVL9SCJu9FAFrKa141uR1Pn2jpF5VC9cZYXqhUT",
  "key7": "5oR79JowMdNigo5fnJkCF1SxUSSoLn3vcgtd22MmZahbSGLtdPf93HuwNDSM5Cd5xK4jpHu7RChTXuZLszFunaCH",
  "key8": "2k5ZaLRM4tSQQ39YfF5hMEv1epuN796YbLWA34vY35r1hzoecWn85MEMGVFdkojwjcqTLM8ka8cr8DRf62WWs37G",
  "key9": "eoHGSuVaFZDpdbiK54VRtP6ZP7mtP9wyv1dgHCftrDeofQSo8y8nqNtRGFv9heUNU3PVVk9YrrFcHcjmF4Tg7WN",
  "key10": "4Q7ANuXP9gffujdnmYXCust17MAukZnByqqoGUUatVfBW6W4A64A9DSwm5rFFGajoKqbDDnr6iBPVA6frZ6e7DUs",
  "key11": "2KjPrZRrBdf9mqSniDAPM4yGrkjJqZbxbuU3bWuUDp1gwVrpfA8XiPhEWzR1ThyKV9kQn8Ps7u7pXW568UUvyZge",
  "key12": "4cCd5tYHKpHeiYX2B4zp9jgEjJE2nRgA2ZSDes3hzPSjKpQNgtgDWWDm3JkffSiNksSRTDpeDQxK3e4g83TZQMRk",
  "key13": "jzcPeQCLGZGcjaErVmq9N9wcpaA44tt21pnwbJwLjLD7uZ69p8KpgmKnA7VyW1ZPcWh2X5q3K5ifS3i1iKFFyiU",
  "key14": "5uhacg84hgsJfJvNUnJejME5nUYeDa8uLibWkiKoAUo65Z92s46AyanjvXCfgm6bar964777cKkmH38iFJsvPbW4",
  "key15": "2nDKT7xm8aNq8GhvFXt9m2i1DtJQ8kXnurPKASbJ28U7ZTSNFwvxc4mSCVRvX8ecZ4S3DUEcSJNktJFPSaAWX4EE",
  "key16": "2JCto2rrohuZnjQQTgSdZhkDQgduPMJJ8oWPBghvEGbD6j3oDDoLhsRec9UQLqJUai7igYtbXndPPCzSA1Ef3Aie",
  "key17": "wnat7jju1RF63XVozozydQXDuE7CpJEPpFMQRNtQz2V2tRtDFUzrL2Fv7UBbSrv6NaETAHLsnx6aWNL14JzGzz6",
  "key18": "3YUxbhBTjKPgapysbM1uDEo482d1hpWUrttwYPDAiEaSvxi4GXPsTD4y2anxQwU6V5CpWpNMos89kErezuozhwVF",
  "key19": "3ZvcMV2oCw6FsXKA885VDY7q9bZMXRbjKgNdZn7LXwirZh7epMhodXMVPTuYUXPcUij4hWFToSurys47Ny3EJpxX",
  "key20": "4xs7BXbqRoXZFJ7EDEhTby5PWQmVxJaAotVtT52rBSsgTQNp7HfHR7JthtvVbb5qboT4YC2UqgRgMDr9W6HaN6v5",
  "key21": "3t91Gw2r6bgaQKPUR2oyymPMxGvXF7ET7Gj5ufHFheRFsXi9rcFGoQdmCuydCsHCdYgriPSmiTWX8NYP9PvsFuiP",
  "key22": "2TFz4agSFH5tQ8AARceTaZvSCm8G36g2ezYh8WAW8iyNzur2vJ8wuSccTm6w7Qc1qaUTiypkzTypkS8BEyqGfd5V",
  "key23": "5729UbPvn1N2tebYCzye9EUgdXoSmVjTFhjnvmHQomudLaTNomN3cJX2kHUmvrktamGkhbkWVvFdd2TLt1JWkxKj",
  "key24": "2VSRRb7ChZ6j2wLEtz6g4SyadbZa2Vipd4fSjfJV15rYGLo8b86RzCs94Dfawi3dB2xLZ9PBM3p6cN8qnp4nW8RY",
  "key25": "2FPaBsYhCweM2iZ6qFqc9wTEgoMWPcEAs3z7AehC8u7gNg4NqipqgBCm9ycjxq48Cm8AM2cX83qx8k4dFosiTCDz",
  "key26": "duKu8qdK7ZvPbwwwF8NdRMk7qtojx9s441W5nwDTbW9T7tv13KcjUU6RbimtSxN7NGt3HN6CGLzbNfXnFeLsay8",
  "key27": "4CxzcD9AuEYw7KjyFJJcJXm4itbWiHWcNFtgd6sc2kdZDbtfJ5b7vp6PKp4nsDo8tBFJdkfB9TRGkWvzpYxYjYAV",
  "key28": "2WbPwhhZrSdhuYj85HYpUwLV5VD79rKWP2sJrxhTxLoJRPcC5NmKHs43h5SfrPVDzMX3hp4HUuhSBxBpefLJyFju",
  "key29": "3ULqFHKa95Ezznrm5Cmhdnwr7dCsy51XxPPgsgDpJbLVbjAhqzS5FBhPVLEeUgDQ94JCrrMnaRGqjCrqukfVgPcG",
  "key30": "5pKDNeiQnj1ogjYbRkQ8XNxoNjrHqFo4YhHxqUQeRiVSWKk9ineW7zqXzgrAKS9dZSMuVhEykqNvS5QJ181A7TqN",
  "key31": "64p2MGR5w2ePELhnVcN9hq4M8Y4tpSaFGfxAAPeB8t8SV1ctP6x3U6fYSW7hwWSDw7BXR25PSrr5BWnGrkqAoKc7",
  "key32": "2zzZpJwigVM2zSULUXUMWTH9VyPbtkXGrB5UqQVCJnWpnbH5sYXoV8fCWJW9CzQ2TDEw9akL5biCekL5yWrDTYeu",
  "key33": "yubxRWvThgUkKG8ZYQk2ghQ1of2Z4eZryBj7paPvgy9jaoDbmxSkwMAmjduUsUcUVWLwcAABsdBeCSDNt5Npejk",
  "key34": "wsMdEUT3TLEGpBLkGJ1FvwpjFugwckSAGKbiKQ3RAnPuRGJrkDr325DupcDy2c4ymFy1pQVHHzMyxLuKc4kScKG",
  "key35": "2APTFvHiqZsxnf8iFwZFkGU4wH7ZuKSJdyMoKx6f58xqDQ3VugZZbYmUjAvh6Uvpw58tgVAi26gp2yxuzwNanipX",
  "key36": "2gFKYGbG2Go9VTU2N8fjNwAkNbMwSKQNh8DUHjtkQ7v5W4ewg5Em3GHBnWzhXsH1vGDawhA6ThQiq3F36x1S5SHp",
  "key37": "2pnTf8y5HPmLaCAgphn4hFUVb3SKwvTTGeVwuqSQ48q9N3frQ8siaoBER9ZGRcfro4cqa1qFj7CuxXT1Cb7vEc6N",
  "key38": "5PuLwEW6SesFmNkN6tQNte66NmKfidzKuXVomCLZALjWa3yc8owW5haBGH9ENS99AhsbKpjD5QNcGGMgNbWeACVC"
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
