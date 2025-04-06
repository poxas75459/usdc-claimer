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
    "2MPeRcTFr4bfcBfWPa5Hbka56LaeQ7Qt46dEZbCsQv2WB8sciSyCbXkojDsixyXkFX4JwZxEgiRjLm4svxuXSHzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DoM5hfYGxh96Kcyb9hqs2tSzYe1zJYeR1sMuTVoqrjTvMqGG1DregKvQ4J7V7X65KEq1tbDWM2WHAmeU5DGZ7MP",
  "key1": "4J5oWQRqh57TALZyT9k8R3u26escEGLbJViAV1kbVSktJ5YjcDKA2uSRTdTq9VN5PiUJmGWUUyj7Kp1mL9WtnED",
  "key2": "4dE8jPY5922MvnD8srxTn5DLcTGgChZYoYTcAPtwZ7nCPgP3x8fm4AmNU9iyZFLcZmu6H9qrriPB4T9TkadepAuU",
  "key3": "3CLcE7HyXVxvHFWt5fBcxi4B1h1rCwLeh4zJ8wYazedgB1Mg9hjXe5UMG7FeREzWvuJ78BcbcyFCpSE2oKFLycnP",
  "key4": "5LLc7zsVEQ7ue2y4LtxFygDgHTrGVvcZMDDSinK2jP5dRDZd352HkR7veUjh3wLyAocuNrfgwASxanySYdndQYys",
  "key5": "4t7Bv2YoH3PU7gk6T5pdrDN6itsgcPzykqic3NST1BNEzxS8wPKcY6NvsPPUkpE2t6F6t3WKNm2xraZJWmx7a8kb",
  "key6": "NmL7h8khkPXNMCkumATBMd4stfkEDgZU3e3uZKsdkhbzCKQiW71xGzSAsqaUk56et39peio3FXNfrC4kyHYCBez",
  "key7": "4Q3uGAgdTu2GQX69pHw3J9AAZXo3FtFyLGqaEzdMHwYGLC4Q6JR5mFehDge1tqDi5H2XHZrQPkQP3HuB9ffhqKYd",
  "key8": "5fu5yqSndASBz69ahuC4bfjT5Gy1C4qSMCAL87Y5Unqinpe3CiomJJiDk3ezcd9canJerBQXAdXtYrs7817xHSrS",
  "key9": "2XYpBhxWQgbCgNs4baMDGH9cJwY2xD1nAHTEA2hciuRC5Y4SztTvf1n2cmbwrPDjw2GmJc31UTLxvgnUcrhkwCiy",
  "key10": "5yejtKxFenUWtCK9UcHeGqDj1Tdz2dSrE3NkasF7yH2f33si1zWLxSirBA1cJ16VwXEFeDq3pg31r2wbHkBDoWwK",
  "key11": "5iXyD7LhqAyosy4f8TTE8s69Pc3Y2dreFLVMnYMoGdtA9NrGYaznCfVpQc8WgWJw6bJoQEPvCVHTwVZhmUCHxG5Z",
  "key12": "bE2ov184BUmP3kWUFHsRGFMRjKGxNcKv9KRNbXSBhm7jcdQ4zyLN8HV7c7Ci69U21Mxb9yAbVKRfGKYjR5iWCe3",
  "key13": "32A5gUM43ALw5xm7SPW2HPGVUfoebkozU9UA9w5QLyesPQEhMgeAgj6GGxZLs97eZ8c2De9bouctdzb7zKkjjD6",
  "key14": "62f3A94XvixW6XHcoXYzxNRpvDpAEru9SyL3b5ScQE4vUyaq1dT6Fj5ueHiEaGCv6CxTB7xdtG93JsmyBnQnh7gT",
  "key15": "45mBTqRD9s7g6Y8W7y1QeoLCkh3WfnCMLrrg9K21gdVSpMYjJGULqYbFiQPaAVVndGYosxK9ZRevPifSD5tqSf8A",
  "key16": "3GQw82Lst4tWtsH7cXfWoT6AiGB2HocXLhmkVGX5zVMTxtzQa8Q7egWeK15dos4ebvZga1N9P5r826p1ugqpayCs",
  "key17": "4bvV2h2ddnZH94x826HMJ1HPNnh1ixxUSUCjikjNiCpgWqoqKJW4cdMuS5SRRTGmsgeeiBxDRTBRTQQeRH4YAwFe",
  "key18": "BeCbV1jEAyiCrrqHTY3Cqk5aFJJHXyFTgst3gc3s77FiFN4vcjmLQA8KNbFg2HXuTFehrsYE6B82guMvGQcvF6T",
  "key19": "4uJtLiBjkbukCKjx7jei4bVRNtKPDFAmHnKaHoE2toB3hBeRdGnBybro9rCVe2BRhJjtXJXB1yK9uj1P7KQNqnvK",
  "key20": "tuHhgjmSALphzf53KjsMrMBQK8csUGmTZKfeqvMiCDeh3ntLJ7RhCuRTxZyDeq8m4ibm8UY8764pzqXnHdAnK22",
  "key21": "2DFeMpFDyAvVVxsdVaw5LmFAAQK8qQZ3MpU3LcJqK94ftDBExUDHowPCP11ve4QvrnEKnSLDjkTBHTv7SyZqfUKb",
  "key22": "2AvfAWFfUtT1hEM5DDpnTaHGbcF9NfA9a2jCKezxkdCPRnLi6P1eBkmxu3feqpHQtCkfheUfoqZJNkVgExi5YL3H",
  "key23": "4poGg9zmsGiwxw38E8FKws18JiYxyRFoWuSccjJM35nufUp5XFUMt7Yk8p8H53kAPYHUtccFauS578wMTe8kgqWp",
  "key24": "67JcwmNVzmLXm2sBmLar9EQzKMUcRiG3HDEuTj1eQ6dwsp6djG7961GWvRPs9jJu53m5BuuZtiijURvw1Y4Suuqy",
  "key25": "3kyLYxGv5vwtZk7iQm1V7uE4JDbQcpfVpq3wLvG7UyxJ1wJwe2XtmMeDuae8krQLJnJov2vqdsEd8DtKyNPX8QDk",
  "key26": "61RSFubtPsVL3wK3siXx4v5rSKm5xFJyctYYXy3YYjhH12ELVrRDCyg8juc25KSDzkmTzASM4zpKtCZY15zq8nrk",
  "key27": "4fQKSpcW69R5eQQuavWCvm25rjvzBjMXMJmYdCinsf29MfKf2fZu5EABrcv7jbj8aPTva5GmuLFgb9tvbP3jTF1C",
  "key28": "mg8pkTjk7uyh5z7fg3aJiqSVEmcut5e4Zr7whmRVi4FAnjHGeLMcVLwBAju3WGY83ktDTi5sXDjtSuhN9sGKuGC",
  "key29": "4zyqnQRgtj9nNnTNn6y1CjBQVPxcrFkRgnwgQymNVpWNBGCvPQhsfc7xkcWxRAzXtrUQpaM7inoDKP2zQ33BHvUa",
  "key30": "49azojmszKKgCZmguA9pY7kS2wCGcvDSTc6JtJcRktVHvodr2niG8EVawxTpNM5ibnqbLH7jNbpKC8ywo2UT8CR8",
  "key31": "RhWtCMjQnK9chabVCyBg36bxu7x5AkTvjZUMLCXiHZGP8SYJqxkDSjzKvphX83bzH9xwQ3PjdYuT5juCmSSC6FT",
  "key32": "4cHZCow9PVJoRAksBZqoXpBki3HwLUNyeN3HaeToAA1xSgGLhbaxhXzKVprR7Qc9HhL2ya1bx1NsHrDXkt74BNC1",
  "key33": "3B7gZZ2nSHAWFoCwhgigUg1ZMZLhPwJ2tfBDGL74bygnLRKHTnwr78Qu9BYBrV1G7soWjLrt8KEaw3KRN5SVvZdu",
  "key34": "294s2hq2LWhEgCJXnmqpe6WJt2Wv5p6D8Z1ncZ6Pk2eonPML6JD1CMGsmqNynAt8ai46vU8q5GYwXHUcpKqgcPpQ",
  "key35": "5Tc8EfHC2o41P9s5PsRV1KQvf9MXSYzJMcWWthwrkxZyh257jFcj7oq4YYH2qWaXe2Jaz867ZLGrRZDk5PmuR9B4",
  "key36": "3VtjjL9PojJpHrewcnHHDvioXsoXH6uhQCDr6YBgvDiAqayC3FP97ja3fYoxi7z3wGDiWWXp1TAU497wqeKq3gaK"
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
