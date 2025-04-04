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
    "6jtgBbdmQnWtN4KeMoLMcSgjrhy2a6a25Rp623Z81Z7NTRLEbqskXdoQhWe1U3vUPbNK7SaRm8ip2E84U8eF4Kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QjWStED2ohMN7mkMWX7HZgfS7LaSUzp77EqMQrv44qLWyFubSYFHV4W9UgjTpoC7mA2BFnQucu5QP1QjwaDrbBo",
  "key1": "znAxjHGPXGadYr8jh9rDYrbM6W29FX1SmwUwDJ29t37Vy35ZpypeyKCBZHsEcUSqz1x3ag3c3VURPtKnStxrPfV",
  "key2": "4iNjQJcvp15BNCMmzeTwe6Yu9aoYTtYSDycGMoCyscSe1y6DL3so7F7RwK6GTZ12FQwbY6tkeVUt2LumErpXtntX",
  "key3": "5ogyRr76pdxqLTj6aWdZQeHNcQyeEYePuqnfhcETfmE7BrAH1YoEYGxkx94xFBEkgS3rfbqSipGE1Hr6LRzcLrrC",
  "key4": "4Vj4bfzhyUdmia3ux4NAAi4MDoBttdWqw27oZyhHNWVbPgoEQ7hyL2P8xxtaRQ4UVLUHEDpTLHhkooD4zCJjf2DX",
  "key5": "3wkh3GXuZU92xpcxg7F5Nr6GoE4BPYvCsFjWvXS7qLedWWvFyS4fq4wRVigxZQq6FYL69sy8iT8GDdyyo9w5zPoM",
  "key6": "4WJuJgXu6KvLLyKknMfxKWzSDaZ4baJXDqoTfMAeNM9U357Hb6eAnnBPkDLgh2ShwfSug54eFkbgqqunuEwzu4xF",
  "key7": "2kfvZQzBMFTgMkTUEM5T8dahY5ujVvcggNQb7Av1AJXR6Aj1CkCrH96w9axNW5jA5juj53zynX95D4iRXPtJD7HV",
  "key8": "3FJoTAJdZn5ARBELviN97GaW8Pm84z6Ak9SLDSkT6oYw4JPWJQtCZhwUpheo8i6EEc1NEyb1LmjaHcX7aEcUCWk6",
  "key9": "4M4bMniqEuCGvrvLBL48tioduL4BhtJV2EoBEPPKTZExEn9uSi8XpxDF3gi2Nb5GHLoQFb2UYJwAST1L1vf2w9VQ",
  "key10": "CTVMqPBwkm2B7TyxXkAzpnApxfc2WCnztwWkiXcPhSFiF28TWWmWLf9ktDvSfDAuLTuGh3KG1UGSdZaFcYit1VN",
  "key11": "3j8FLq7LecqpLAwVRBx5MyX7rXZkeb3UATAvEA3csR711Ewkf29qXzdpAV7WvSahsbGUgLLTkxk2xhsRWqjYGUq7",
  "key12": "3g8oFRB2N8XXhzWJhE99fepxxNnXnXcDHKjAoWZq9LovKXG65r2Jg2kTPEWA3xCLUZbyu7xcrjy92xRWLPfAUKTb",
  "key13": "5wpkaFRGALi6Boi5BRPvgoZEcRJwp6jgMYwn5ccP4FYBYQvxadh2CQdecXo3PtSWCmoLFn9CuYEQiLsiNdktL1aK",
  "key14": "3LLsxdrE5grDuRY11NBAVUvDYNKaq5StipHKQ9vPos71UYGzXZWazf772YMU8mQuZFkeqszkGVZhUBniN4cBAJgq",
  "key15": "5tP2yU1aHy1WaRaUCnqguuPDthci9BAe7S191dz1cvwN2tfvj1Dh9TyDgrfnHmZztBhc5o8LopLaPSiY1hB6zFRC",
  "key16": "3nAEgmx6LexGZQx3WrjvGgqc7tffUx3kNZ2ULQJ5X8kJWszsu5Ywcrd7H7nWN8Nf3dMZ3EKEkNZSAGBx5UrmEJ6z",
  "key17": "27jmZazSkHJDiE9taGSK9ZxmjX8CekvpJjxXef6XCKahpFhruwWv9vFmMFfSFCAutykZJqCXnyibukrc6Rt6yjvb",
  "key18": "3E9DRqsXJ81B3JcEGBqBeWvPZXdtqMKVUbRHU3TNihJBW9xEdhPLenL6JeTU3zE7tSyzGP35drK15hpxkpEwh8AL",
  "key19": "272JqWEwBSiBjSvRgavqfbqDyy9UTf8bk5rdK7rR2nLhhZqUfVhW88f6TjMkzsQ8gJq4mmieT8JxRmBmrZ4Z1tsm",
  "key20": "3tALsim5HPbSNMXRoTGtfP6BHHTRuy47nsGipcdhj5VLcKtn76v7CtwDBADBbew4UWExKWo9eRFssJqhUFeuH22V",
  "key21": "s5zwcZiuam5wvRfZKuXPXA7xWxGznsErwrNWKGm7h38nBvyqYb42eEf9wj49FRTYkG5fkkrtNyKn7BWa7epUan2",
  "key22": "2xtFTzYZAvHgiiP1eeHKGy87saNvvbs7zNpXE2WyarnRHmjyzNt8a2LutgWDGQbGVjDDwPAqJAbu2TvCystkKMFe",
  "key23": "4U3qLnR98bpe8qp1AD7JzTmuELU4cifbHYvLukepqFyHvzaF97TetqGze8QtCmwzf9Y1CRMM7w12b86up4h3DBTi",
  "key24": "4HZ4i6yWSGupySk5V2XpWKZnf8Y6KBNFHhFANwbbA8QVrRvQoXhkkDDEBaVd9EPp5bY74PJQbess47ToM8DVGBrF",
  "key25": "47ayRcrTXebKxC43pxvJZsDaKV6yoJPGu88dC1SW94dYH9TrGxAANcJPgA8z6R6ocs4bVuZQtCcMJZigd3WDP4pL",
  "key26": "MrdR7j7psTYYpgC1o6mYK59re7ChNmpRWVHevRtPunxiyG6zRfvobdF18hdAsh1LRvzvriptVRfm6Uo35pbTCj4",
  "key27": "2qc18uUKt2r9oQADBNeRsqb7j3f3x7XBX99oQumZb1vaKX6BzHuAKa39oV2kfAc5pQv7zxeGCvCpqeeQf3TLyUPP",
  "key28": "5mJhyhhjCKpBgjwMqvKgqpBdinutUqnNEoYNvH29Goka5JFwMryn7uezys3aZtn8EaT5e7eEjyXNxjfykVB96GHr",
  "key29": "3nUmhCNZLs6MicW4yj6KerPSBU5fFJjQd1N3E44Vm3S2d9Up6ZXeKhV41WXkdDDMjCiUNHC961BD5u5Ezdun1FmE",
  "key30": "5ikWXCUZAjpAGFss9zKHDjEdo8hGedonXdh4MVf1V1vPRZmcezhCMpDneB6hxnML2aue51vgZkUbpL4LUEkSgYTr",
  "key31": "4X7y3VUaEsSPhshVJd9YdLdJ1kYL69Ni91XZRXQcQH4R7tgWeDAkoRXtgQgLkDsAkrQcsZtp8PxALxphrrad8ES7",
  "key32": "3cjLfv6BuexxWduAcepv7Jzzp3jAjhtMiy83K9haMFHMmCeo7dALddTf2wyws2wBLczbH9m75FWba13NsWDuBaNp",
  "key33": "5E2QAyvwYCjqEvBXecG1HSY1dvc5hx7nQGQu4PxDspoG5KBNPMVwJc3djkZmeF1PxPGEe7Ydja83dGcsLtpADmKs",
  "key34": "5oHMJJm271rBU6Wfkm7TSno2KH9wVuGucWnqmZoD4HqbEkV2pt8fQ6wgZgQ9fW3RGVMgXDze8Djw6CBWHpQzhrMF",
  "key35": "4kBE2N3Wspm5dPP8XsT1NBTV5j944AGgu4LHBxXdb4egf6pte9WJ9fquMF6rmE36xSwNJ241V9j6v9wW7u7aG7F5",
  "key36": "SNt7PSPsVvbUVcbtGJAzcbbxH8uo9SZW6NPBRiqoVAzUG5C6wXbBMFqtFWZ6x7YgZvZdKGXw77FgM1VLBMWjCmv"
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
