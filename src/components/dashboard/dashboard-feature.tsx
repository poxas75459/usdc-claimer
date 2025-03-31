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
    "2udHM83Yjx9rsmYJNeFFzbgkCyJoYWp2K6FyukLqnbYh93LDPTmaE41KF93VQzxDbi6Qo6RriY4LwuvcG93VmEvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ngDGqqGLEwEcNr7xpcSaQsx2iVRaGcqLxW53MTcK1KZWMcz9wDmb4Kcqu6NH1YZc9cZBU2KfxYdZZaT1x6baTUo",
  "key1": "WhHt5Uc7nM47p3p1HcgNNsb1gv2hFtNKaztT9qD3bdG1feQiibSs8iGRE8eY8bpWXdBdwfP9ZM1NBo8aGxXKiVV",
  "key2": "9npBKKEpMBFFqupcNx1Uba46mcEUvEmLKWF8Nxoba4BXuXw1DPjhDVfia6X1gjnVYWZaxUZbAFuFaS22De4Hy2f",
  "key3": "2CFthd112Hp7MDbXXtd9uLcuMTaCzGgdmzVkYXQDwTnibb3RKpGVsnmGoEGG94oasXTBhtJWa3y7FoxpnVfXrUL8",
  "key4": "43mkuTa4sTdfRez395LjjqbbDB8tYKbZz59qz4gH2nLCLkR6EFeAncGufTSoxhr7fo49x6RRcmZQVpyi6dgFWAKY",
  "key5": "41TDynnMMcEdjfqyD68Akdvs7kX68MiqJZdD3K9fy1BktHbHxYfCLmMMR9sNYuRj91Cnc6FjYqGhd4ZxpS8Ba6PB",
  "key6": "4LjSy5DEV74EnnX17jD7BMGw6UqLbej2WMM4q4X78F1tRj3HATrhyCWYKRR6VaSYJk4h227WpGydGGNuzn9eyktE",
  "key7": "4sVVus127vKiZMPH9URmMNpZdufzSy6gQArwP7kKhVEuNCY4oHtxMZQETt4henspNjDFLTzvARYGPcJrQc3XUTtE",
  "key8": "3qfHdCVC1tShLQUD258LcVEdFRtJfykik2dB3MoyDRnw4vPcegHqd6yzWqUvVMwcnBtwjy4B9QCt2Wyh77u8a1Tq",
  "key9": "417k2iTSLTbEGco46zQHxUTxzuYMJT7LstxfWFcwTsBp1MRk9uxCoxXM3yZ8ybkmQ5zDuB1j2QHmLjuxLyfyHRBQ",
  "key10": "5oKZbsZv1ncmMCtnajGWJJCyGAnoC8qMpnrWA3wjHa6BJcGRJCpPBPChZuHDARSgubg89zNdLWBWc5jFc9RGiXci",
  "key11": "jp74FDcVwiCESgGVa3oKmbTRjSAwrtYLq3MC5xSpHaHTqMXzyoBFxySpNgeSnrNPfbbpoNCvCkBkQPryWP32pGg",
  "key12": "51MrkQ7H3UjbpijR1GYEhKpMxY61xmokyqfmyHwH8b9euJPuQnt4zbrwqRdz7NsqcVhJ9pCDAgMo8VWKH3bx1qCh",
  "key13": "3smQi3TU5Xabwimb9soZTkZjof7ctub4pCKiF86KfrXBZb5FdhVbTT1VrbtsGYHDjYE2phZMScAMRMf96YU8sWPq",
  "key14": "66EU6KpmV2eCeqBZGR2Xs5wF9nsSNbh71iBYU4yZr86ug28gYfg2EidZPyKEeBVDNhAhcyuXMRHFdRxfo9pSG5jj",
  "key15": "2f6964mJyd8g2S3TJZBg1gmmgSVNbZXdvrQhEgmc8WWzFTXVV2etVS7vdPAQnwCRpXB9zCjuaLV4VJQLJPG5MT9s",
  "key16": "2vomvbj9pSPsgFYHDiahPLrrcvasbRphJzP5ei6m6y6sJiUcUYk8oc6yS5B6WUJNXvRdU9nCJqsTnbM7RsJqaZEg",
  "key17": "3k9dXYS9b9Jv9fD1EerXipjCpc7JG6C9dWyXYxDeEGHWrFoUxx18c9FHhwUW3x5d1CLFo628FbuFmQWekri1PVxg",
  "key18": "65ZNERpWreHpt1f4Y1PZquQFzzqVjBS8QmZTjaYEkCVzMvDHwa2imn8xRCbT8k1R7wrQVFAbPA1XfYdBLBXNEkn4",
  "key19": "P9AqnHaxx753pZjbDaVBPEyrzXhQexT4Q7cZt3JVojmdJrZ9Ar49F5nTduJmMir5RBTXZbtb4T9JQt18YZqtoun",
  "key20": "4EB473EMc4XXykfm5Xhtcxkp8kki54FY3MgG2Adu8WxznJi2KYNL76m6vX7ghBche7axRQFDkHdfunFDVMTXh9yA",
  "key21": "4a8fQTU5bSxPvUhJHdtEdWpwoouFdFJxZSLSPZzM3xfAeF9qRhvd2tNCz8qk51rwhbXThysddphPECSjKeT2GWbB",
  "key22": "2kK8rufnV9tysXuv35S3pzZzTfE6K43H1UWRZkRCsCb4wAq2WXYPpgjtfu2s7VdQNXov1LDQkmtuJZonqvPYh7Rq",
  "key23": "3PgLumkFKm3zoREtvY8WZcYiLZGxTE3sktWtAhnLWWSnSjhEx6JnUiEmk9DJW9zr7dGDnzxNpwk5M21EeJTPo2YL",
  "key24": "5Ar8LcmebAwqNQyu5xcKWzLogmG8WZ5WHrtyP1TEEXf8KJ1i7GMw5fQjHu1K3kfGEZiZCFMNRAeCC7kbs8abBtwN",
  "key25": "4uDy5x5p18uezRjHE5k1Ck1hCCPMxewmaeyQBYYezQnM5VZLtPtj2qZxmZvomUXXFvTWGdHCNMcYzsNDJGyTHdZC",
  "key26": "2GGGL11vT4omrX5BGf7pjfFwpDY2kYWNGmMhRdYLRyRkAQyFZhfWWDs5sTTeiTGmj8CvP6KM1gEqS35ADJNb9A1p",
  "key27": "VZUtywmRhcyVbVV4nbMBeQyM5F5UUDEqVfcSNCJEA8wrCA9barf3Y4iah1fQbWDWM888kS9SmVf41PKasyH8SAN",
  "key28": "2cZKuBCC1YSZgojZN7U4gH34mEaxUas2y7dC8GzR681WRq2zgNUwdx1akJMoPYQf4679Fv7fkxW9WBEwJqenhMRe",
  "key29": "2gtqXiUV8g1azW6kGiMQbyd5wyZXHTnvtMZg7WLxEJSCDKowLSwWfVCUquU1FEeBrw2mnTDFeZRNWt7t6k1SFFdQ",
  "key30": "2nNR5UiL6JXhYh9rwFerJtcYgXe7PkCuvWnC59KAFho3UqNofxYmgQRMUp68FLnpWn1Kp8NcRjQGz5UPcfucY97j",
  "key31": "562NJfy6gBTVycTRY2JPVMbVK55TYkYNE4oSCADPTJjFMNk9s9tm5Xt4SNsszgxsZWW38a5CZcQy3YudpMuWjcRW",
  "key32": "wQbQnXBXJVd4zdpozZhSvCi4m75HSnpqMNi1jwSWP86hJAksYEMX36Bqbr1wsnDiK9yAkwuTUgTAartNH2bqJ6o",
  "key33": "2J6EXxgLkKwous2Hr9yuMvQXQWfEXDMdXUDRSyo1ZHWmBGFZaHU3sNQht5iAGmgv7JUvLWrMoaKfjTbnZMKtMc4d",
  "key34": "3uXWadnaGoLHMy1kBGTBocGh32sAVojXTRwHy8DsPUUZ3v2uiAHA5GWii7UnHg3n9qczHrQcPzJWstLyiG3Ak3mu",
  "key35": "2jZ3VeZSmaDfqWYaRq7LmUBuqnSmHw6q9kUYNiZbKvfj3zy8eAyTzhMjzrtS3xB4smhhJWBd8Bast7A6CvWLY3Ur",
  "key36": "5qrhfRNEPeK75jjoTQQyg3U9V24strw9JJEKh53xgMCzwSTxNjGcmEoNn2ETVqseGDUjNmDQZm4Z9MMHpsV32MrZ",
  "key37": "2xX9tftLxzzUDoZ8u1v6gKNs2QSBVzc4F8e5z1N1rfNLeWZPZ31Wa1L1N1VXqNnKrnqtFtUYdnRMjN9s6z2NMN6t",
  "key38": "4b4Yew17r5GyHuxG6yzDaWcgWCeiasMFrLaqszgSur8nsmCDxecJqFGrVm4sQ5Mab61QzqdL6mmmHpemsDd2mqZ2",
  "key39": "485yqyLDL6irn2mTNLLjykkvwzJdj4mJGoHhaXKaqPdm6648ixPmshd5vyDL1sJigxyc97tqNivA23JniZLD9SJv",
  "key40": "5cwRVbsopghVzpoA5fhvVJeJSaWEWSHZ86gFKu5ef941HsFMxL7NZnPw6tk2H4JRnfA5PgQqTD7xWgn6f3mU4USW",
  "key41": "HKBbS6Xz97fbxjYLh6PV9NfTdGNPEMfJ1vDLzvdW6kE7CHzJErDNPBfKQb7SyCo8YfuBRX5QTBENLgtvMT4sxJr"
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
