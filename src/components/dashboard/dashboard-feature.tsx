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
    "22g9Ru4jL2E1PQRXb6XXyC6Ah5Hu1Uc8x5DweF6wkXxgmSogxptAJ6p5eipjeTYzjiSLf3PqyYxdzQNFRdEch6Rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nLjSRvkDD4ZSdGvpdKpBfKRjsYrvJ1vTFZx8pdj1UfVHGcPV1UZvEmYrjBFezkK4E9Ed9oKTLBmrWsZuEcYc3XP",
  "key1": "4vDVL7CLb2Ni3bSjLyzv9T13S9cjrkLUF1C77F9Y8XU4KjRhPHK1Tt6WzeXmrrLzXHVbzXXbjkjaCBMgujt9gX73",
  "key2": "3bQQmt6eR8S6eJLCm1fHWN3wuy4PjMCEBUwv1XGoF2kjqQN5SRWj2qLuptyVDgJi1tFL9Gs6ScpqMEZzdK6NV9Lh",
  "key3": "5hkZngucYRVcaK8f18EsprBWa2WbYS4Sx6RL7HHbT3YJ58t9wigzwagHSWgqt2nU3XSTW8jAPd5M7JP1RqbDjhUA",
  "key4": "5gGaxUuoScjSg2uyZ4qfd1F1qSe17nUpUhR8YneFyfzZpRmSLgsucDXNa6vGu1FFwFQKJzSR6VpHEJmZPAPSvqMa",
  "key5": "2ecBShje6P4J3cJNdkzpBMENHtbRhsFuuo7Km6FfHkfHnpphaqSewLGB5NsVoyCrom6wHUecvxo66N26DYkcMCc2",
  "key6": "2awa9M2ZNF17bXUdWHDQDSMd7PHBjGyj1RfDXyJ5197pQFPD6Xxq99Jy3ZJVjqzHyC1y4Tb4T4ef8v5jU2XkFhD6",
  "key7": "2i9c3FKZvgPX4hV3MsBhkVjuRoHiuy74cJAV8urB6bD3QemP65iDQZm96yQjobnqiZtzR1fzUaakigUcD3aPYfsG",
  "key8": "289CjcgRr3D8YDfa5rmwMFa533fpjR8KJkpM6jQqNmHSgg7SMuzjWS8W5Hv94AbJUWqHLTWh8BTGyAhGHJKQeVFi",
  "key9": "XfXkSwSJTZMyMAnLG1GascuZ9xTqpJDCTSPUzChzj127HQDSSckLQhJtuCb9gPboU1fUKkMwkmqHf7pkUwN4wkX",
  "key10": "4mqaiG6ecTm2mm6zFq4MVBo1EugfZrYaj5L31JLwty5tfQjxKBz5eXs6162E8Ez2TL8Y9SqbUvLxP8RDLRLY783G",
  "key11": "5DAkb4aGz1ptRt13Ygzvs669Ap1o9wRTXb1KPD7MfGUZErhY1wzNiEX2aNvRFwF9YVYksNzL2heojGKGfrgJcJBX",
  "key12": "56jK9pZJp6MQU8xNi7YmthNwZcKQk5y5BqfBT1sKrttFxT5RDTTbm7TgiZM6SqDMQgv5tC8avcxje9TEoYtDnpFs",
  "key13": "67n8g4uYN93DLSY2FebKt3BnCYdqFdMkhTMyr2hSXaxQU4j7LJBMAR3iMH3Msgvm5e4fX8P5vPMwQrdBYpwduNFr",
  "key14": "2EGHo3dvFiEmoMhqnN4ben7LbceSHTZmXT7SHj1f5qCzGMnF52nyd4asmhs6EakLw7zp1kNkkJRHCoqYRYnzmYBW",
  "key15": "4sPHUQHFzmCECrknQgsdQXLbaegufyU2YsGjMXac6Xb2RPNnyiUCAXEcZWENhQhe4H1yTEYfb7gyzmNtZsy2CRsf",
  "key16": "4tYcSsNNf6vJVV8f4cRFJ4tQQss6fLhh7sxFFJWjjmiyVE1VBPmHAwdwKkp1bDgJquR5kgvjFfYYTji87c6QFDjz",
  "key17": "62DnaZFXHZN6CwUNjCKKWyDtT5qFQua5u8F97aUiymdJR9Tg8gW95FyLRy5pN79cG7TGnweroaQLn3gTGHBLeqvP",
  "key18": "2XuMKG6QRVXYa7ajW1wxTcHn6rih3jVdz7S4bD6GCuYBDhSAdCa8uLacmt797iy2Pzv2VDjnLJcak24P4eEFiLtY",
  "key19": "mij6oZuZYPxSgn7Gm8Kra2LQmNHFoUtBA6kw8tcZeki9fLCGWn9hqSiDcxGH8yjd9kKfWw9Snic2TqT158GeNpz",
  "key20": "4HkGU3tSEYzhzUD46tvoqHwL5pqXQbCmVMxMm9UNuD3z21VogZN8gWDpKFdzzCozMbbbPq9dtSZQrT6M6MjVSuFD",
  "key21": "3R5p13jDKnH8bzqQNbSr5wze7pFZ3bcWHPU9p3fNncYJW2WGhxCfmV8AUTT2RrZSD2esS6coQfa8mvNkTBwqatLc",
  "key22": "3kr8Ctq5oL9q9smUwWEPfSDCkZzjD6Dk6C3vosGuUggupvT5Xav5qVFjgHr3W569BHUNefpJd6YFYceKbPGqatmq",
  "key23": "5YL29pbZJMnZARX2hgpSLxYoqmY3iEPJ8Hh1k9byv2uJwyiCDfcCWE8xSX2tZyab6XxDAKC3WQqLMbYR1hdRqs6K",
  "key24": "5E552eat321xT8T1N8H5dybpa5Y6EvCdVHCHGGEKSJZ16DMzTcrdP7F6iZx2PUz4Gd6kgruLnTX1VNS8wQQiLTJd",
  "key25": "2yoeRT2S7rNwSE1nQpDGbz596UAG8xsgtDphuhzwvkiHvRUo7ymFT1QHNpTmA5a3HA8FdtnP4r2ekqrgNpuWpPZ3",
  "key26": "3jsk5G5Z4htHburcUPnrVoZyFAKe8R1CLFpf5cVj3oepLtTiV3zgLbSeajW4veLfUycJ9Ze3FWKLhtjmQXwjiUMn",
  "key27": "2CYZ8F7e67M3a7y9cSSCPvq23A8hpAr58mxY6Kbh4gEDaSurjatm2Y3cpfn9FrrcYp6C8DcBTY5RxTuS3H1stEGX",
  "key28": "67TKM3qPPdT3iRchbeVZVC9XiUdnZVoBrN8AxXhhuHRF5MyrZ49FN9rSZqihRhopkQc1pkkzswHAE9Ty8r4ANvh",
  "key29": "2mEgxJyNYCP5y6BHK9yGLXbNeYxvQ5TopNunok5b5MKNnAGs8AnMT3r352nAEpEwc4WD9GpZAGTshQmKbCW1Zp8B",
  "key30": "4gHgM58AWcNGY5YjVwJfcN37Bz9uY8cSXti75JjyM1B3QzhADRoAoQHSjFo5xayH2gKbnAUHQhGq2YtHChEj96sT",
  "key31": "5sdXYWJAzSz6sujCvUyne5EV98pK3AHmhTnJXncBfnXNGsQQkE78ZmzEu5vSzP1NFt4uPZu4GgpUkiba86V2KWhg",
  "key32": "2Z1J4tpBaFT4wZcbFpEAnKUBuWo8JY3xQohjXw6WUHpdsLkrT3ZNw9KVc1y2QgzzjGkqdwMEQQPLytyxWJ2HJxNs",
  "key33": "35FfURdrk3m97vaFBHsfWsWNPguGHBmBeKp2mYhJenchH157hcix6QLwHW6MJFBay4eY5LTS86ZuMEuswBHQLLsU",
  "key34": "v8GVWWfYaX2MLr44oDQf35C82n7HosKast6grnckD4z3rZsmeMrWCbNxaagAjY9Y2sQy7KrwYxY3Cqx7PNNmbRW",
  "key35": "4P7aAfzzKDj5o3k4uZ7PPuxUTBr16vE1WbQUPDyKuc1CN18Bv2pjm9LixuFmKWJANMP3J6xoov9U9BRH4YM8RS56",
  "key36": "5rZfS3FaeZXXJCjBC1KnAVXqjxvmDGtgwVx5QJXe3avajjbP6XWoMSxECLuGc7qkft1c2ezVwJWr9hg4Wrfn8azx",
  "key37": "xA2G5HMkQExidvQwo5KTLWpR79QnKgMEgwbRoZjZbpyxHJftp2VfLBrfTUy474RPuBpE74ykLMEigWU8xBnRmBr",
  "key38": "VFHnFR8Lo7Vpu5AxbKadUsCvx31ED5omZUw39Ms1vxkxC4P4PxxZS2cA3oF6JWyLzk6XuM7tWcgXkyoFpQF5bMh",
  "key39": "3BNLggLa3CGSBPWK3B8EjvahbUm1c2aUDvfYKKydpYe6xwbQ8CZTtBxqRMHqT6ox4ZvPodfBanPr8WQ58UjgKSCj",
  "key40": "4zRcR9CxCM8mpx5dPCZRsss7WUsjUPNPQgbvECV8HppUELd1Hv858Vyr3A9cBo8WsPGdALbhjRBwArxxauFxEK3i",
  "key41": "5ovg7DojG49GWRh3HZ3GHmmYWmPuutraVJEXz5bXvebzR26EDubQUkr2cfEg6pwZsWFAJTNf3svWWcNong7sSYV5",
  "key42": "5h6mvd22wCJWqKjZxCs4qxEVapYed2tmusQHb6NzfEqbDKeaA6Ef2TA1xV2aVAKoVocAF6V3DHPQRzF8TQrJxmRs"
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
