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
    "nrUmenbXbMwgDfKxYVz2QHqQdppx2Kn88wdhttPuCKiAhLusT5abNy1mBVaRcNikQgkeR3WoSG6Cx47KR9mqdF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KZUYhMXbjqG5DeDTkn3SqEDg74X7iSmVM7s2YX3WpxHCGAfqW1ZVkw2XNkerZp11hPiUsZYbgT2FReaAjEzNtsp",
  "key1": "4AWP8EWTdQ5L9MBRjhGhNPzbf6RMAET2XL352pAz43Nbenmyh3NdbXGPs38WS6g5JyBPw3McXGkxAM5FacEuJvMJ",
  "key2": "3uPuVYLEL7xeJ3vE6HjcG41FknhM4JEoLpVdekBszLyECbUwmfp5iXFC9nb9KvHD6mbwQBq7dt9R8SjAhtqdL1cP",
  "key3": "Qny1xP4wLpTS53CSAw2JeRriqjVaRmkcd8esdHFULNNryieLZAz55WwtURZZAdSQNCJnPf5qb9Qmoeyw1gpX4fW",
  "key4": "5KTe8LFB7xLNWZDeTE91vD3Gg8D8sSx9mynkKbJVY9k83NaTaEYdLCExQD8PFANripiy9N4738c8iSuYzZT377ej",
  "key5": "5m9LKKNc6sirfrRoRHpMc1gKDXkFJZZXr5m83upPcMBQeXTb4jZaXydWUvrJEBuZdYGLkk2mmhNcVZztgR15tXTk",
  "key6": "4G8WBZZc2B4cjE363r3p9EdT6tW3sQrienYSmWfiCkFHw9RKzyWGUy6ne38fVd7oxU1KSw1umR5XzbZ2FvenLhVC",
  "key7": "4GaLZ3ZrwMFW6Dmdk2kvmF2dD3VTQgziHHqkKXr9NzRGGszWkuiZsaQTPruqKdRorDFH9eWR8Re6TsDfp8MRYzzm",
  "key8": "51zVEMcyMpv2zBSsQQLaN7CYRv3Dv3gK2NNNtSgmNoV1XvrjmArWeRidkp9u5cxQDjgyBDHGcTa8PubnAHgXvU4a",
  "key9": "tCG2xFoEXcuXMQRBTL5GDeJpFHbv9BsUBFfmor179TiYtzEYMXpKwuuC1KSBftgrQyA9CVUZzkBWchRLbdqCffs",
  "key10": "pESyfvppnQsJCUuyy3XKyer5xD8UUsGzyc497hvurYLartBYEutT3zoznTXiJ4vdG1ra9pgv6LuNeiQKSFXUxon",
  "key11": "5x9uwPCKikcvRjMRjYDDnmHhpziewZPpGr4kvEDao1oy1hJnvrq1qH49LrSxgMT1qgb1SdZzx39abqNPLHLtNUzH",
  "key12": "3A8FJmWBgyUa9QiYGJjnyhdp28e9zmHyY66cqcpVphcJzqtuMJnGiH9ESxPdAM96LnSrgT3MUmDVHPwHsy9obaVo",
  "key13": "2adsTNwopChoDWw3bNbEQtWYQKAT1yBWcj3NXKPAyY9Mk2bK9PeeagEmM9pDkgj4TCNdfRefqdk2dAY5CGUkvTWt",
  "key14": "gHFaYTqZoT3BrBfxJrQLpR9ddBEHA9yfXHqNEmENGJ1HyseUkRJW9bz1f9QusFuK1v4UtWNjrQr8C5dsmVhwURm",
  "key15": "2eZTHTLrLQ1EC3gAHX28hSPMXu9RDTQZQB5JdPyvjP8qHhZSjMvgYsuc5xA74GBVBSf6bo3DEPfP6tQzqrUfJyvv",
  "key16": "5eUkskFfkZaAJ9v299yjsxNN9TJXJQR75aNLGbmLWqsgfd989Fetf8subbLYgd11QrwMnvECydcQx58XnZ1MhQ1b",
  "key17": "43LPZxFJfsqJqvFEj4deKJcTakTwVn3GJuv9U1DipNVyeHnTSRNd5d2uoB287T6UV14Zbs1xqar5MsX8yrUhFZAD",
  "key18": "47bQ7wJDJwLvAtbyYcxNYst1bPsBaRtPd9cmqo5Zn6XeyjjheiofA79V3ae38SKp4Hs1AtjrYWAVsoHhAjzQfipL",
  "key19": "4Hz7NKN4sVjCqBA7ipV88q3VupViGguoDMxzS6n8XDSbUWMgJJadVAkociXzgfUy4om5dUCToCUG4kSnpBzM6sqc",
  "key20": "32pdXGCf66RkAgR7QqHbpYaPmDxyk6NaoxggoyZNtHPikFf4qZz8Bxo1kQzs867YgjNnRZnexq6UqLGksgR5GN9b",
  "key21": "2TwPZ92R62S5BkE8CCAzqg5oSjn1McdkSE3fUj9hijjZDcve3ExzFNxGetgnpgmEt5G6LhQCeRyDHZjS16Hr7Tuy",
  "key22": "3MzGSEtUbTvZv5Ns3nzYv56E5xYK9r43LCD5fNcPf8XyWYCa5AnYT4S2bk7G15v2tspP2ZF8XJH1fnXi5YhRJ4QE",
  "key23": "5RyjqhEay9zDQgjXCSZ5gNJ8BAAQgwMCQm7gU3P34VPZbZpmMJnZtrAorwxhP1vAPmXcuxLYnvJ4nzxMbMn6yAwj",
  "key24": "S3m8kr7GUHJkL8aTVUeoPpt8wpjE5QQ8BVxD3MnEyFz3WvJ5p5gfuM7BgZVtHBdNLyVSSXU1KoUkTvaznVoEDHv",
  "key25": "5uHg94sKV23QDHBr5YAUMposuFaibSNNUBDdh7CH81ukWKed9sLdTZqdpNf8EJAj6peAVLUuqdKWzxV9MZGpCFoR",
  "key26": "xeyHaUVTo4AERuVad2B6bhSBcno9ozmmsDrLYLjxmxYG5uLiyVqnkQRxhYsRWxEkpTWYNRgMcGKi65vz9wmNxFF",
  "key27": "49fbggPeJnhm9KgUA5hcjh5KPa81VYDvva66z21Q1uzkWTq5z5XetigT7wu3fPUtNv4o3QF2sS9UQNBuBSzv5T81",
  "key28": "5bJBiZSfJG47Z8gsM9s2iG97MCoTxT7Mt2MZXpbFd1VT23b1Lcga9f9LZvtqmMuKVbPiN9nfL8vZCo5VniKHX56e",
  "key29": "WkbLtFyVDMn2vvvnjvjWiLX1AKi6iStpgNZxgzWQYrTkgvJ2A6qQZM8XZdDwWWGqS7L6zCrh3yMDJhbMjGYRyJB",
  "key30": "4ZPaVHGeTPtBwhx6LKfndygibX79Vs17N5nCwagmeLq2r8n2PGtBwxWCi2LUfpp2fGKnCFgwpSAV3W5q1WWcpec",
  "key31": "21Do3b79YwPRgn1EF7pPXpH1fZ2sLeYFEKwa6o7FkWgruHYdZiPetkVL6vr2x1gEohFMi12cdFiLG4Aspp68ztwY",
  "key32": "4uYKbdSpDrG3hiJNujJceRFUDJ1CQUihJm63zpxUnPrFDiWgEy2MDZFzt972Sw9HXPBRinwyH5SD63ybFaUQZYeU",
  "key33": "3wDkFtXFLjuh5L3Cxco8pg6Lzti5NPSMf7HHv6f5eQUmettc8gHCEBf8TmFRL2utcN7cHWTnqQoAQ1JH23D7CKAM",
  "key34": "27nEj5hD365r6348yJK1Pq53qNTd3VwtA7vFvQSSLZ3RMDsvKK4bY7SYuGS2aEwS8vyVvJ46p1XaT6hasccSBapv",
  "key35": "61RbZ9prpCyzB5zWBjc7ivTBkxtjRF9pHrMsLWZpa9uyKsS9CkFy7iEzcWbyfBGFUwgLwRXWebzFJyyuiKCQGGkG",
  "key36": "5Ez4votLpBMPwSJ8b9j9CxzTgkTNcScGj4U8UK1jftVxxuoeeJkyEnALQfJs83FV5PJE5jQsym2ugVMhfPMpnj1t",
  "key37": "Q37XYsG8ZbF6TgzAv7QEZQYnUGyw9WMBckUw5S2JFw2XT9fghASAS1SKPzVcaCuioYBGBxWyZaPNtvZQYpgk9od",
  "key38": "2kCbKbLqRvsGKwpNd23Xy9wAeffRnni7oV9LgYk8Qjqy446buicoPkWnaxzn4CqonaoaHisDwhZnMJ25ZXV33dSH",
  "key39": "MtnrpwTqKCsCLQTNo2ivETtAz3zWZKJAvQh8D5EdiHFDBwAKSVxPxE7vi51YzBJXy8dnQtMKtzUWKwhwKRdruqA",
  "key40": "44qVB37DSrVVDC5YvRnMdBd6mHfZBn4UbArjcuThxvSUcn2i6hM9qaJ4uEjVJBWEr85aNTL1wJ3qdHrRJjRpKktW",
  "key41": "37ZotsFeEJK4rLpNq7QxKUeT8fzZiAV2cSSvJ1cq3RBYrTQsD6Qnror7MRgdPDytP2DQUaCKaEdSArDfY5bUZP5o",
  "key42": "3BCiFtTPq4SwRSXyZJmhf5zsLZTsic41cT983fAYZobFjPrbg8VzswUPDDDZ1GSbkhC6BtSz3jpvavksPnmknQz4",
  "key43": "2GbF7joaX8Gaxv9mab7gCt22UE6AdsJ9XqcBJRNuVQKGJMDiz2MzjMyM8oPMJgwsoAKDqfeFxmJLN7SfXZoQbG2c",
  "key44": "616MWHbRyskLnm5VT7dPDE1bTWxHVahdTfCs7ZxHe1TmPd4Zt9xdq6A4mu35Go2KuhL9xhAyKuN6QKNfcmBDgpQD"
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
