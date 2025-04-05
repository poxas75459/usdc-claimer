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
    "49yfdvtyA7Xm6c8UfgWx5KtcSEttHhzdcfvWUKLgRzNAng957bzDELV9Pb52N8jYuguWR1jWE7yQ4QUF8UxwoydJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54hYBV1eaq6bQ6Qd4xUNbACgBy2Bmxx5Kkgp9SctzitPQff9uAvkyYE89N3TpWjbcacgyEPHgah2VcVSUTPX6Cd9",
  "key1": "jgecqgGuU2n4WUPrHJ33ZduFWRsFB1fbrcSPiLZYHukzYDBpn6Lbz5hYD6dLu6dbavEFqe7KT1UV4rS3sKyTfqv",
  "key2": "5bfbBAP3d77MVH5WuheNZR5jzyHpG9Zsb3MqCoCBqmCbzviJyquxnxyTisu6fRiv5iuskzL9CG9Ggt5azRcGbfwm",
  "key3": "2dcgjkWpfSMBGJM31d6XrZmr8L9VvTSaKwLY6EikwxQBpHEmWcDiciHVabVM72vMYjuRGYcupLgWkohMaTp6y8Bx",
  "key4": "2LcfetejkyywVchJGdjakyyvaeq5ngKqfcZeJiF5bgyTNueRtdAv4WJgD3Waqo9nY7SmzZGhCUpXWVJ7wf1N66xm",
  "key5": "3NMoPwJbhSY8n4FTA8ABazw42wwYRyJVTvycByxErNUYpCvMAdzeFsQLsnfH1HEeHZ5q6sCdgDrGZ5hPH2ihKbB6",
  "key6": "EgNGtahzz6XyEZdvz1ZWCgHtHvoiGNXf8cTsXzLtJoWwFdqqew7keqXBfZLKfoGAj6oHpQfqiNSoS3mVjjpTfvb",
  "key7": "3CrypTqrs5x3Dgwo5ZpWAsdkTHR5fMrbyLtCSxJTH68zCH82oU6HLo7rw8WXRiryN4kDV5GYAMYB5egh1xvUtHyW",
  "key8": "5kQsrHMda4xma3sQvroB379R3ZRR91DMDwTGYRvbY9ug2Y4Jdb8hdW38g777ejs8nFV6NA9JJtyR8LhBv3ybGUWQ",
  "key9": "poCgB7rpkgPH2BfdqBQX5yz7jXpB9fs2T4mXohnUomh5wT7rmiUpAn51anMfaaNRQmBEP6LUSFFVUGugrV6JcdB",
  "key10": "Lh3a3GhsnQxjMsGSybeqFNkZRPMuZ8LrkLeSxf1K3nMNrGvZgyqxxEYkFKjkWNnAAid9dKfNkTSfM7vD6H5fpUu",
  "key11": "5RL2NscTi6G8QK5n3APKAuUNH55mdRXohdwD3L83FPsHrw2K5p5MhE3tK4oFfs4uc4fRX67swwbXqTsGAGzde7LJ",
  "key12": "2VLvjCkQ4cUvDXb1NkZzKAcZZSzLh4H3q9UaVt5XajenGXaiwFfNoydRPR5WcCfoFoQYbx1mfi7DQkjundXrq6ek",
  "key13": "26iAjAnbcSNaekcWCicZDkc2ccfymn245YDbduSxNh2geFaukSvELgZXSmTAv1VNPMghGB3LyQWUkYQvGH5CzCSq",
  "key14": "4xt1gn15BnrjdpjF2e4ct3Lfysr7iHYVuqkr4mfzMvpkihJKHDTyp1vN5MgqbdTkjPuaHYdNGQtSMx6dQK7vf9F7",
  "key15": "1kJCt8QtYY3jTqbGrrD8x4q6ziHkfiHW61kkiixM4ztbPX3BBnHHZwjU9owTc4DGwxHDovFh8E6rzmUsCBYPJYf",
  "key16": "ivkYx6KmbDBfTEPyugKZHcqQZngJykkBcqqcWGAraxBc7XbvJ4uKSd2RbrrFHCQL6MGUhez29KZgC3vw6SywAgS",
  "key17": "2t6ZZdVgjGcVcFLzD47NedG1BY6Q2KtedQLNuE1h23wrUZnbXrBHXR8noTV3A1Xy5m8kYmgxhmeVt8v9nSJHjM8T",
  "key18": "3aXbMa7HGQZWno3ZN3dWHLuEpBVfyXiGo12UTVekM777kgk85paHArphCQnd2x6YWnDVcoLskwUWcZhrhx3VQFdG",
  "key19": "3rWEuSzzERWMsNrtgSPBBf3jUP4bTydFM4qbxpchG6cbmzSevtPqQN473LgBN4KXV26shdSapMyENigttV8rbYUh",
  "key20": "2PvSfz2x8aW4WADsLPJUXV8ecJq2AiCt9o3TpqNeXDdhWGh4jd5Pcq6J3AZ6c7BUngQ4ic4UGGN5ipKq1SqFsaTN",
  "key21": "31sfouHwk7McCfvWCgNw5EXUomqtBrdWePs5jp8hFLYnWCsfMZupNzJbB1nJuLRfje54znB72JV5dJjWCBsbvdp5",
  "key22": "2ogBT6p7C44T9dFgnbQG5NQNM5i6R6ggdZqiBN76MCZ7Uf8WEm2wwuThSX7t7hM448jPbkCWzV4NDnQJwBhz4V4v",
  "key23": "uMk499evn2WGYurSrxybuAbVnppuxpZ73469k2Pinx4Dgk4faNztYAxtSDdDJvgi5jqiYANUydUpCuwvQsjFqBh",
  "key24": "4uDc3mhbd6nr4qThjNoa4uC5viJewBDoSFYcPNquhYvFWDfcdhjBCT5L6RA1CUGd8Qdz4Lxz9xAhcC1Urv5k5Ryk",
  "key25": "4YJYhRTHpzQQQ7pcDEbV54T6y5aG5RiRhPsHxfswB359GarsFpYKonXzczo41ymwL2j9TFb5pm865YZotekKz6dY",
  "key26": "3sDQvuPYySMhPD29xTDGVhmXW1cTvLN9eyNLJLDtmvK9xvLRqUCoqqrjELjXnEMtHY14adxzzBisJAfptvKYC8eH",
  "key27": "39bdCi4JXqd6X5oS6shgmA3AbCAZPtaHGGd4GDHRQZQ1QLCQJQRkQSsk3TV83h46V9kcBdFiwVSGx7d7uFJmb9MJ",
  "key28": "3nUYJmmfvc8HMJspNnDRYGFsRUfTQw8KomKUCWQLJWhT4ye23rmKJfamrWt2jH1mn79bF54bRCxLhrCKBZ66j8HN",
  "key29": "3vgEsiAQ7hPRQ5o5nWp8peemNTp5wzFdbyWz9MBzSw2DEP7wuhwJMCBVcMjQPGn3RMQ6o9EWRx9e2bRHuYhtvgWU",
  "key30": "5x94XB3UeoQjL23bhXu5mtE4vLc5BbbLp9j3iaGneDdHW4JZSrZufsjCnA5xpekayUNKFTrSZf62EAhdtdYGssnd",
  "key31": "2hD6twCLXCmV6RaV5S9xPCnSAZpREGXpcmuVr3JjB4xLWqMszwg6SySSoLCEaEKKB8T2WEWH966RxrVi9mzbr4BR",
  "key32": "3ty5SbZynwkFFf643cZKMuJf2NYe2iVTVZ57oxSSiE3ZbireLRJMvszGx9SfqzfyZod6A1KdpAd3feZX7jeVonaR",
  "key33": "3PE3mcmBCfVxDR6kG2kjzAgZov3ZieyRB3NBjDE5EDqzwtfzPUb7bLFjo3MXbCwA2RUNMaQ8Tbzy75JYTECNzd9u",
  "key34": "35rg2jjLkhLx6XN8d1h8RUQqndTGV6VULtkueBLk4mPgVZqeqj3mHXyes5eaXN847MRPaFd9NxMHLnn3rmiLK3Tz",
  "key35": "2brcKhiz4Um2CoYXNGqEwvfQ829vRaoCaRshWwMd7oSUQJhXpbrziC7JFat733N9gbUPp7GX9oCDNu8cqNNoiUJs",
  "key36": "EggeXDAh1tvnZ7pCzgoYmqEFz23BhVSjLidgpGtLFTYRhMcp19eVswGHu5gCvhtaEpswtzgBkiTf7tGAMy1snxW",
  "key37": "2Bq6QWTTQjn3NW1iYVvQptgAjMm3xCsPLpeT44U7ArDFA37ZNjwgXfmn73o1twBEmZY9ti9Zxt373hA5hqEaW6HC",
  "key38": "3ykitXZyGJZonuX2EuDRY6eutpAxPm5yMUv7LN9fqKgExZkDGdJq7XtVxmDYPY3jZZoNZqRb8FjCJDAK2xNMjFfE",
  "key39": "5QfTm1crV1449GW9CbcEPNHUe3hEBUuNtg1zWqw9jY6Vft5stzgCMGNK7N39rxfL4SWXGKpFmYsaXGU1ewnXWExA",
  "key40": "4fNpWKWaDQXRM4HhtWRxxEE9ade2CMushFdTwco5d8q475sgxoGCAo6KGy4MNVg8v9qzeKffT5sYQhvXNckxoEPZ",
  "key41": "2Sji52FR7htosBbPvnpZodhqSJDMjnv86PcghNAwm8yewSDJAJP5aAt8GFKGF2Dk856z4VguaTn3i8VBm6dkviYi",
  "key42": "HVV2ek1rokhwWNK4uRPgfxykZBMmTL62APw4Pmnwui1JiPZpmzKkbiL8ueh5s2QMPCm2GLJ6zXMHbhHtTbiaEbS",
  "key43": "zJT2hCWFkN2HziLJUTSUdNH4xHtDLjQeHmsHCT8vZ9ZJnGPgMV99sswZN3gM5NLgPEbiu3S2FzPoengshx5s8GS",
  "key44": "2i6huS4mrotNBLAbWLb2ePpreEJz8stcyaZnFf4Dt5M2kHmnoTXq37FMJKQnTwifnGy6JynfcH7zoVdWhQKchwUX",
  "key45": "2FB2faLSBoWwGzriVpFq1weLcGhrf7arf2JLSgLsvTmH89PjRbyxDwVxqTaq8SdKYirPNWVAeeTeFXp7Zi7UfUyV",
  "key46": "2BMzzxysmiVG8Y9co7Lsf7uzhQNAdc3CKBLhfoUPBwYRRPvw9ruXnE4VRsi1sEoqVngbwS1eHrkjafXGTinoYDQ3",
  "key47": "743gty34HdPTJPz3hBMLZWWaGKX5KnTpunig6Gyncf3fZYJotpq5t982ZjkXdoeAN867uVBA3KBotMWRcpcRj5h",
  "key48": "2zZdKjjmiAcPqMFVhBoFi8aQCo17taxck4rbt2Mk2z2PzUc2Q9Lb57Ui9yg8srCpUHJ7juZtygkL9vAzQjREP9Ra",
  "key49": "63JKqEHFrUmJu5VyTrmy62V6soQETvZ3nkAvFa3RjAfmk3PynvDW4YW7HzoBt6rJ3RrTTwdcSRjzF9JszsrUiDmm"
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
