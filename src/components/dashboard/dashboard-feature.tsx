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
    "48AuZEK8NVYxZy1To15aaFcuVBTvo1bEW4LpbbGTJM63fxhQN1m7rdjh2H8yg3XafwsraAaqi3stxeXuxJ241jAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QPBEzgCvRDUT6XcWts7uKug6JoPTKJjDcTGxxeUD7phNKzfKqkxGessEtVFvYy7Rpc3mDWfCpHK3kUgN56UFvLT",
  "key1": "JEwqztwbNRKdj6bjhgQxQxUYFLYfXPHVpskfSK7pijf1HjCuWEKaG5sLBNN95LF8s4H3jvqcQ5EN1HuZiBJRLae",
  "key2": "nv8KiHbphGyrNppWWVuK5iDUKnQVvWv9j8YvEAVwv68W1dqmcMQwy9DLnoNJyVXUjg9LeGS5bVczFyTKbaXahKc",
  "key3": "sfhT1EoGHQj3fT81zLDM9fG3hkysPhnYscgUPLRztGkn4hkQQmSJmJDgoi3Kimxhhi7VR7LCNykJDpETNJzrhmK",
  "key4": "GryfHvoDvSK1En7g53AQYqNkhQ96jnGJcf2uVyxnYhtQampKYDExYtAGEjdgDRHj6gdQBtwhkTgQ39xmoQGG7CJ",
  "key5": "2ShZT9DMEQGHxkpUiiVsuj3hsQuZCr1rHKgVvZDWmuc9JPWxjXXqWs8ueWANYN3TzpkrGxH7ZdX7xgE1VHK7Rs52",
  "key6": "433ARdpUHVQrYoa2PN5vQFdKo3rQvXTQXKZpD6Y9YvAzAPLVyxfpzhM6MY2SoKLx1R6gUy83r5CMrAC1UcPQjzds",
  "key7": "67CjzSH1eAV9cqS49WWsiHUZBiAhdA2bP72rY21S8aJ1reX8EvZgw7rtDJg3XKLcfnnPoYN3FyuxjZN6c4Q2LGZj",
  "key8": "5gYHFVcQsE3SakneeRZtJZhV4BAhsYKoVsUMAeitoGv3pymjkge4SohmaxbsLFbXP1ArUny9HgziXaKqRmfseSF1",
  "key9": "2evqVFomrfDKbvqZbfa16SQS2KKnhokCd5MhB2BtH2mfPJ6Ym9oZvWfAHqvgrAvnKzK8djYCnCi9Z5gCXx5nv9PD",
  "key10": "5VhmFHbD8drkpuwo9VBcZRE2omPvDeg6Ao2cS91mWDjfaFGgbHXYEAzqBteFzPCMy14KXpEooTSRWQu2KE8PbxDt",
  "key11": "2HmHf81itU5Xw5v4qkooPcnhoVgA4AS2FCTiTcP2KxRpELe3mtWCZBJP4ycty5Mz6nmWnCKE9uCCNsYeKpwvoLmh",
  "key12": "2LnTYGwqvZcdZBZbdDvDmZRujvwehBE4FrBacw6ehCMGhkP9Z3z3H6UZxXVuUabMHrr5BByS3t1aumViUexTPkZh",
  "key13": "4aDU2QZKJEzJcjPPSouYyLFeHgFfXK9WCfYfkg7ng5B1mGQeyVUmUPQJfXfQZgfe61qjbQs74Vm1YEubqa6ZgQAA",
  "key14": "3bnLoqPYKSxZH78VniWivJcujWWZpyZEKKtMhQp5iuhmunaG8K3x2BBYNPPg6N6sEhfqmufVLN4mqqc4UJTCDHS5",
  "key15": "2FfnUb8ZQ38LUknWySEUuAt6ZtAi79vaGAQpQNi3aC7Unx3EypztfDq7pdk2MLAyHm6rH24JJPBDhDSuuVA7GvmT",
  "key16": "4fVZMb4xh3XJ2Q6UaVZedPNxjXvByqeuVAyorAa5fhnCQ1CauxGgSaHSTVcPNx5N5XRfeCCXYRxgCKqTCvgWvPfG",
  "key17": "9a8Ln92GRn9oy2JypqDisg9b8wB1LrJVx5sqtL2b7gNBnJFyqctkha95RCRtNpmsW3YRxVwjYmXJ1UruoRV4zh3",
  "key18": "5JLdE2R5gEyiMdNhRMmhS2dCpaTCJgNZPpbLVLh2amwwWaFt1fTgj2Kof5VQKixJFq233Z4Wuo7CLF8cZtpAYXBM",
  "key19": "3T6SNf9MyxZSzKvrowX92oaYdoHVsX5cBCLpyzErj4Xcrn34fkf4Qy8PhCqg9hP5GXKrpCLZssAUx6VBsvyvZRJP",
  "key20": "5E864LWxb4RkLN6mYzeLSzV7TsLqpeg4BrvezjheQCQCCNt2D2NcYn5veFLk2UBZBBvdjvN8X7BgK1L9wxhEi9cA",
  "key21": "3Y97PFZGhKabUUZrA5D8T5AFgWn9FpNqQFoHaQHBaZNJ6CCT7NNfsVrayZTf3ia5A8HtnuKSaVfs7zz6uKQesFwP",
  "key22": "6trLaFpc4qby4RnTKzukasCVs2x3SA6XyCRvEnpy9nDi7JFE5uPoscg61v3wnkofH1cRbCCU8Vmo6npRXeNCk12",
  "key23": "4yGGJKEbok121xLgqrqnETD7GNb9BUz8RzGhuhm2SbBinnXxUro3KJqbNZ1gJatBNJSabRmeZSdECy7rqwvRKeZB",
  "key24": "ALgNiwCr3S6pGgzcoAX68iPUuJXdDJohq7TDJVC82ntXTsD6P2nBkRpjocJXm38Nvc3FFNSPx6z5ryFTLQjzhF3",
  "key25": "4NLGf5jboEKRJxMoJJ36eSEysQUEd6SGduyyd4PSrZhJzuSuWDLeRymoZBkvMtFrgPb9fkqgpRVnycE9D3VD99Mb",
  "key26": "4zTpUCeCpaBvG99y4Xr1mZTFRv2NKGrsy53tF8CfpCxh6TfhNxwjvmk42eGWtzoU3dYQq3HfwAgfsH2KUPLqgW61",
  "key27": "45cULGcPB23dRZVKBcBD9uSkppLsT91qf6NJaxnDh3hbT9N22R3M9kmh4UUjt3Geumk8JSycRTbKAqQ2RvgN8qqx",
  "key28": "33MRM8LE8CxoYwE7gyWwDknp9ZKUFnspYhL4GayJ4KnbP5n1wc34VcCcexCpVbFnqNHXCRss1mDqo5q4DzQLQN9t",
  "key29": "2xtGGqqdjugLXzLaVxTBezMHdkG9ZbLfHvCPrYcjVNZCC1abo1XDzvMkEH6CVh4vkVt5vSvRVzUsYBtnKgJ6k1Qk",
  "key30": "Nbc9nuKLSmRJi5k7k7JyeRt8E5b8S5WUzxqYyjqYnRkTkuEYwh5FEX8KkvXrRkFHyedZoRiGezhqAFX2TUfxbet",
  "key31": "4nEyeENwR3t4eAkKTSUSk1Mo8ZevLoDyRGnZGGyZ1bpxXcJEeEeQiX9JXQ7yQpGzc1oJMAL3AmLfVrPL4ePk9HPC",
  "key32": "5xWgj8qkL2JFZzqx8PkmBmeJHrSFa5ycQop1ZvGPqEyi6j1kSp6trMFB9ZmhQF9XUgRYmeHEFHkG8xwU23AfTZNa",
  "key33": "2uRMbhejpC7D8bnXTZX7vqMA7sTDL8oF2NczCDMwGKgS28vUFTK7gRHBYbd4DYLD5QRBXbWhCVA71QEFngt7FPJa",
  "key34": "4ebqGmV9sAJcm89RPfx6sCt6W8EN2oqh5iAaKNUnYkVQpuVmvm5k3URFjhjDufzyfLBtBxeFnLZiYpyFZErYJZ6D",
  "key35": "5vK3y1jeA4xcrsREeUgJ4i7LsM9SQ6bkHrvMQ9nKzZjntAueK5kGEoikMTKbtajjvf5bZmJQwjx7uv14z5G7u1i8",
  "key36": "3EigqEbchWb4DWVG8YkRS4iUkYhUG8rNxJCnM16BVNbPBBUNzwFj58ZHVwjMpqTRkxX4Np12BU2VuBTDaEMZyrat",
  "key37": "zBKuiwhpx4eqfW3kNkPoda5XtXLKT5DZN36QM5MXrZ1yLK8GUaULM23XsGxDDS8ndDC47EPb4keyZQzkj15mon4"
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
