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
    "2FRPF8h8DDnavubFGd66W8vboqKX7kT66VGgzXRna35JDqbNiCNuDCanNHjEBsz5Uun4LyPdet4BF8VXZDm5N9en"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S2Qkq1CYMcbJhaBX3FdQkY8GsiioKWRr55kM7ckD48RfPKr4AFqgmVsySsTJ2QvRnTTny6ddBucygh9sgqBZyqf",
  "key1": "48t2zXt2WrKoaqJUP2Lwx17ytgqPkuTWnso4rHujMHpq5LtXyQGNHYYBnyENL5tr2AWajppXXv9brJwDYSFbiHQY",
  "key2": "4eWqr6NHxRHzzNcMqFRhAVQy4wejucMdNSc1GCR2urBJEhA6454dPY2QBTi2Kcta3MzAb37F1duZjb4rCtDGkrRf",
  "key3": "3tFd1iTDHSWGLZMAGR66Bi9v96XLBzrbVmeTZuy4A1SQjrF1mosu5xvCkR2UULh6mHbbn95MEcu2CPDfVVwb7N4J",
  "key4": "5Ug1sh9pqjBHrvG8ZY6kVVhjuUNSPF2CZfeDdKTHc3zrTYtnXPEUDzh1MQZ2rmrzgg1eB56kwSPStjkB1dwnm5CD",
  "key5": "tBFHZMdgQdPMxbi2JCggjtiLRcPxME2fHb4idcE2oLwTQiUAAfCJmkrRXtyG9nMLu6utGYCgZtdyu4RuQR7itc2",
  "key6": "3AyBcCfM8MySi9mAvUxa7CZG2yBtN1haK4hMbrkyPa7gmGhuXaRPrX375TrAAkjRWBQdygtW1V5pLcmwWEjbcA8v",
  "key7": "3RF49Nhs5s1czwkvFaZ5ahf5G1DvnkM6qCiNxfsJftUPjBdd8WTXuXpwrxZvoRkVH8AtQPUT5LYPsZBh2V5NTweJ",
  "key8": "4rSfx5xeRfiXpPYkw48ZU5mmBeHtaKkYCb6bATERDERG4NLacFbfstmVGnFs39fVHsc1V5vGv8xGHK7g9Zyh5toU",
  "key9": "LZMDo59ZUQrY7MpxoRiErVEANMxkR5UtdTATGVtAKK89RmkEhoak4bzJgrYXmrQrSuQhCVDBuuoDSrhQMk2Yw9L",
  "key10": "5fviyPTrQ8GFt4Hm3DtsjbiHcNis8z76fRtC9s5gjzdikndkXEnHHeifHxtCrMhA1BGoEqZArpDE3tksSUtzgPXn",
  "key11": "4TYUDtNVHGHTnUF1zFh1drEFjTYgAWF381WAj11s6CEE1qBfR83djD6VYJb9SDD6LtTypaNk4dB4HsUwzfA5QvuW",
  "key12": "4bhVZCs9pPMDpTRrfSrN413dFFvqteg51sfqSKtULntfzzaPoDSPvQhnyUFJrvDeoxmmFAVbQdtmqvhTLTL1AMs3",
  "key13": "4qWdhQQG2GqYMNEqGJbfRmc6yXMZxeWYgLSCoXSrMhtsCLCBufAcEFPmMAJ9pb3GebcBTnBUDWu9aMJTAqBD6AGM",
  "key14": "SfBBF5uhZHseM7BFF2kgsnDKudaGZpkexz4F8rBwi59ojsLdGDpprAmKqThL2K6Bg8cDEK4S7RCgkMxy9hvjDqd",
  "key15": "3WmPee66yNQGqmBjsr2eZa23MEqp6qBbEFedt1adJNz25BaDmRYZYQUyGpdb7MEkqyk18d3JYGUMWLPMZ8xjWSyb",
  "key16": "29mwC5UqfLGVFYVpNhx2buHeceaY5HHddxH4FVYNzfsagobfM3EskP4DbPWQrtgJnWQvEN6Mioh3BfEQSUJj3Bjq",
  "key17": "4zPgUcrB2MroSoxP8uo5rQXd6fNBacMyyvKQqXbdv5EmiWMcNyQr4vanPYN72iMwCab2wxYiAEEsQ9hz56bfhamx",
  "key18": "68TiUMcJh47ZehgFDW4sGetUecmviZK4aG1xSH6zCpoNWGA7njWZDTb6TooGgUG4uSq8AxjJ6u2NiEm3HrVh8G2",
  "key19": "38hakZy6BALeMpejCxr6Wxthi1H2gLQxcKXVmuRfPJkDd7XpUn3X32GEB59wBH2g2oUKTYG5YokRnmydF6HUySjH",
  "key20": "FP1XsGaBMfSpid5h1hyCuZLLYNnbkQLF6nS9XTarvMKdDSE5T5krbk3vr4GHJouUWsfZdYMJuxRZhnzrtVpvSXJ",
  "key21": "4LdrAeDgcuVz2WyiyfVMnxhxjR8Kt21ask9vM9wbQjKXjLbPk4SLwbitCk653saVULT2Btn92euBzHbYNzWXmhTr",
  "key22": "2MFMtDiFqcB9gZihSXaZtnjVvjGfwnawyZkdrFHe79GsrcvQpRgfBV2njtgs9U1utnpQcpy3ryz2gfeEDg6AoZxL",
  "key23": "reQ2J2iwbb2agkQk3vQKd2nt9diHAh4M3aDjBc3cjPW2KteE7UFFT4qNk49qoGAamB7zpbfcaLM33YHjuvn6UgS",
  "key24": "PY37baQUqbqzHQBbHitJSMvXbN2DEPzKfPWBN21ZUry4XUrGDAMzfAsPv4u9n2AcgW4kGmSqGxyUJa9yEPmxhwW",
  "key25": "3TTjUGaxFU9oXz172r6gYURRydVJbrKy3rv9exXmryuggfFd2PrWTyhK2idoRiEyULrMznM38a7vH6j3MeaTZGuM",
  "key26": "4rwY9u64aNgi8M8jEqihAfw1bhApwkT11fo3sa1x2ayHbGyNBBd9buQbEWvPA9Z6fMrF9F8aw3kE6FVxhjiJTcK5",
  "key27": "34ArDbHx89xHdPTwUpHaNKRtnxSk2jwvJwumsTTMzZTedMHjYAYAA3ukQksmmuY49dcdHvNKtxtv34FQ292E6FA",
  "key28": "4VuNSg1QQ8gSKoPTC7LV9VQRiGk5NYbBqA1AqHSpmfUgwL9ferCLZEv9kuTtgdZJ6Vx418y1Sh5jjopHXytE4vo3",
  "key29": "wFUuaDWknXTDYuGLkacuXQyv6tVZbv1cHtmciifDWVEs1pRNUvviehvnwKHHeQrF4RRL5e8WR2zLtT38MehaqG4",
  "key30": "2MnTw2CZy4virRSJ9nZ2eg1N9zqsGD6xxFusYxPxy8sMJVWYH5thBZUsxxc2Xb7SNmXuWpSfw5MRgaJV7zwWsgpt",
  "key31": "57J7LjtwyWurV7puaDKvLwLcGv4g8hXrvS4Ms9eNb42mqfUWC9kvGPSRVLLNFhoqho67VP3pCumYo7g4zqa32j3U",
  "key32": "3pkSBm3GEv9kgVboTkKM85wKEah7sNNK6A8Hg29ULeBtoopuGvY8Laf7y8ajGiYG9McwzJAYE2fvfej72zsFEBhN",
  "key33": "BD5n8Vrs3oDAV5czh7PxuzpEohG1MpWmGsjchTXYFTjR5eSrzd31jm2GxieB31apbvPYH4ePXq76EttaA7WoeRe",
  "key34": "4E7BJ3UFVFD1rrQvsqCZj2x9GDV1AcdPTxifBMVFGSuqUfrtmKXXEwo5a3B4pX22MzAjFUdDiE5q1kjbKvMg4Ddw",
  "key35": "5UahdryC3JKhN2r4pQccecWbemf2gXDTiYdUKzC1jDyAbaa4s8ZV4ptGCJcsPptFHXvYYhDjydUJxjfiXs2AR7aX",
  "key36": "4A7JAqTr4Q6m3iywQiWrgkmmeyZWRCZfn8jRjekBiZsrNkcXmX911bRqSAVCW2L63VJM7GpyNMzCRBWWzhAhjuL8",
  "key37": "5oqi5hP9XmEbRFgYk5y7VrHMxz6ZpLEdetvy9yQ6ACnMFyVgfEuqXwuqwH16MhEoWbxEY8GBNM9qNfNfATAiYLcu",
  "key38": "3ReP9J4w9upyXinKYfWWogAaSgDqLkbXcmDyM3jovA5fKajf7sUf99QogGTqwaBW9nkKH2tUVjYrmZYkqTBpgdQR",
  "key39": "5uihJRbPPUXWrcih1dsVKpx5YCebWXMDzLpNJrQ24xgw7uyr4J8sXAHpbgy9ANNXcsWTMTv6Rt8mUCWPf6j9p7iG",
  "key40": "29mHQjpEnAMohzZifxEEwKm6wp9D5ea5C1nd4eKFb7tdqG6ah6rJCixQ6w9FkUWaFnAQwh92o8ADMmrKwbiCjLV3",
  "key41": "4oMFyjtL7fRAWmvYBabNpwN53NnMhKToNi2ekfXP6PjL5Ec6H6THrqcFH5FmzdnEWvKvTFq8G3a1gjZoR7Vtgesb",
  "key42": "4awJtyR3XVcCSCRZJ5xdthxiiaw1Ejjb55oeth6BZUkJFHCrnVsdtiMPxaQnmkVCAEqhyyuyWpAenYPpCRErpFSA",
  "key43": "FqSNwuGAE7GM6gHZFfN4QZ3VfrRqpUUkunwig3RdatCr4GYunX94dLAPz7eNrXbFAk7zFJSwqzY6FjvKgdB6w4v",
  "key44": "2UpF9BJ1ZJK5Hc4FS7yLxqfoeoSBJJJ2yKWLcKsHzm9BBCSyzSKGAHyrk345pM4RX7ykpqQBFooZLAoEHy58jEih",
  "key45": "3whdPAaBo5xBh2usqYEMN3JkVEV1Hgx83NHs78CtpoaMAxp9pGGUePK6gErFuaptGsJbquMu1WuPNGgYSHkSUh95",
  "key46": "VguqpvpiZ1sCPAzmSokaGkRcVy8G538prf7UP3sdYHJFMCYRzPAaHHspSnzdoTLnHaESpwLxypAK2w34tRWuwHA",
  "key47": "3hKtw4D8ZNAzBT1rRi2LRBgREeSWm5SZxMKBtZinmmKJESPXGB1wxaKt6xVsfeJNax47trXTJvWHcc5vYWxB6jNB"
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
