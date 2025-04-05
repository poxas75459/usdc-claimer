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
    "491HVWx9GCi3pF9XzqHbEdCEKG8hmcFdbik4kTyZb4dZWuNtopNVwTwY8fyrL2rMz9ABeS1hbUosYzdzmo83vJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2563JdnpuNzqv5ZQJgHYqFJ552GHbuJ4GWcutfSv47c3JPhC2ZbjNcseKhaAtdQe39GvBQwFDmCMGyFM9XvSuD7S",
  "key1": "5bh8y7F1eeutyanxxgUa9hBpdB7wChiMmZr1p5TzdSdWf6MHcNSufPi1Dk1iYna33xCgisBZZJd6JYU9LRSS5vSW",
  "key2": "2292ue9G4KJ3u2ZN18bqGhQVUnxUX6d9UKXg1ev9RUGYWoxLvvYCMmox8ZAsoR5mDLcrFFCdQjKM1LRYjmqjg6o6",
  "key3": "21em4rSP69FQJW32D96KEJw4vEjL5abZGnQYg7g53dK7HA4S6mVTd5sCSnPxS28uAQoRN18KaWcgCRbWrZZz7E13",
  "key4": "2kiEVV25L2sM6sggsiiTJHieC2T7xf43gVkit9FRuZ6zrKpm9jD9PfKqd4ZGZ8Dtx6CHspuqL62NsGFRN5MEyH8d",
  "key5": "3ghSpwkZ44ztVdThhuuFp2N9npvQ2daET5C5fdDXom1b3ipqsgTmqTR43rcNY3MpXzYvf5xMRg1KLqYii852DDQD",
  "key6": "t9BGHmVe51RZ696xr3f81jfP5jpmRbo6Hn54tTR9SqJE1tWM56kn1DrxsSNTe2agqGpuMtctJUNcPmom4UEUooT",
  "key7": "2LTZm1biEiSCzK4oxQPJrGjWVRNQp3o7hLyZAThg4DL54RRpriz1VoAnR36ZRk87zZLUC6HxPoKhaLUxZduA3WNX",
  "key8": "5jEYgvgjGXY4omwsCdZnRk1DdPhtXVfPoRubTc9zMHZ7ETwr8MbEteqp2VSgFfpxDmNY9do6zfyuMWJVyVqb9XgU",
  "key9": "EQrSH2HACp7t8QNjMm5PcFianD3Vj9nJ4Rshoy1JD9Vq5C3RuP76Z4BpD2xV3XAgwMDVDbP1yLQfdQygzrivdB2",
  "key10": "4YJ2tA9xz124gbJcUG8s4LXJUwbuihtBcicn7HPMPx1aGgL3kuJLS7tzkqRXXaNdzPXDSsoEySpufb8KAHQva2AS",
  "key11": "3YCo3AGSKJ6Z9atrztoL5Q83TAKDD24V4RBZYLF34NEs92mejqu8DKunTGuT5pXuhHriLTsRiM7i8HWsKUvSjCsM",
  "key12": "4NeLDPtewDfw5KyAU1wCsYNcRBbaPCLsUyZhADfZhdDR8E6gWjdxqgiYRBXnXxbd57wPmVHgV7Cdb5p9dtXUNPvW",
  "key13": "4DSVVdRANL89e9jCq7Cm8Z5pykAudRg8BXoD66A8SsaM2C2Vu65QyLCoqJ2GRmqbtkpffrp11qv2RG4NG5E8r2gV",
  "key14": "26AgR52ztUfYLharENSoH7bcAN1CjfuzPjyAinLB8v8ktWB6EYzZZNMW2cr7e9dwnCNu4L9GvyS4Z7Ba7NPEDmBn",
  "key15": "5eJjGDfSXvTcWp7qMdXMkK9WGaGft4Mx2wi69piiVWARACBn6ggoBG1xQAu82FJJ17a7C7QZfWgG4GFpemF5BMUm",
  "key16": "4Uhnjx2Pho2XttuefN7M42SXCDZ6TD66vR9emjw6fpQuU1iwXewVza8BjdzL6shkZjgaZtFjtkYnZdAoUnpwPgTj",
  "key17": "4hhsPXPCoxyy3dXNeA9eH6DBhqdCu7gYjV65MYsHv5K6vBY1kXsHMX8kF8stTB9razy8ZRGkMWdoHbJ2Sam7PsW9",
  "key18": "66fYLVuuqHrkL3a2XKyYKwZRAJrCqTtNwT3xgpyCw9CUUbWcetvBnNtJgAn6yZb83BeFodowdaPRpqmz6kE6Tsna",
  "key19": "24WDqc4ddD4HsCAZ8mTL3CDv4uXP1UbxDGco31AHe5DK4QpQf31oc8Sixt8zX9HjF6kV6PD4KUzB3BFfEKdavKyq",
  "key20": "49JBFWrbETZoj26L3FM4GcAKbUMRiMxdZrK8F4a1JzVsv3K8HD4Eo25Nw5rUSm6K7zqgJPDzmV3D7XqNrmTV62Cd",
  "key21": "3ouEdZ3pV8s9Zimr6EQuYjMnHU99QFNqN7Qr8BqKzwJmYFbJMV1Yvz5b4DEi5iEsjASTsqaURod3twqhCfYthNd7",
  "key22": "GFGieEE8uNLGMhDyTfqCNdi3KjQ2D3VYR1mmiNP6GJG4w9PHv57UWwdge4DpBwqsFo6buMM1n4RKqnvmTHZjgaW",
  "key23": "mpfKGQXYBqhPDvYZUoKRzR31EJtayWExsZUGuuMQNisFkWUCiKzgHgvibdiKKEnfcMHEvPaKdmGLaXgKa3vB3Ev",
  "key24": "4BgaeXYbe9Xq1E8tLENKYtDCWxSfYZjmHNGTM4Z6ENU1QBf5VPSe5KDwn4Vp2M2fgEc47fNcWVp5PDV4spCn62Zy",
  "key25": "sVwCD92ZwmoqCvc1hwtt5hRrUqsyQFvAfmoohFUsy8gZ8ZJSpXSmoZozdXVjZgTsP4LtTKqFtk2pgA2FSi3yxvv",
  "key26": "5Uhnm1ZtRUHKVYztx9Y6x5RfTSjXB5akM5zHrHXWfxUMdmLiA99LwQFCMaMcRh5RX7GttsGM8gDy7zDF8CuSTQTv",
  "key27": "4ShYUbFMJzb4tuUJ4EV1iDmHXKZwu7qvaVsiyGC46aEFT4cYAkvpbrhxtaFTsQV3Q4BLsqkckRJYe3WGHNnYUFgR",
  "key28": "3G1c3JyozEeJhnQwY27zBaktoQENxUFYbarDd1czjK2y5bhUmVGXJChjzkDA8bv8vYAjdGzwSNCAdKbEvtDLfVBn",
  "key29": "5r2UkTwQNghg9PcBWgGfaFs47M1YAGCre2NtjrQDuijijN82GDymALGCGi9CPGu6TuHrsuWCmELek1ucfMAnp5Ns",
  "key30": "2Nqykb1zJuQ7bUKa9LvfFFLF4ukbhkMxCY2bVGfkH4mvueozcvWueedThDzQ2a8yAth3BoDcERAEBDrKJ6aZgdVz",
  "key31": "4L4Bo4N9UnhhQzijsYVsiSdLrurpiEuVpgaDntqLKhd6bMQ5hwtNTaAt7mzggiQuQdd9VwFMAURKWWJ8qoGpKMnd",
  "key32": "41qXAax7aUd3UDjTbdr9d1MtQUUXDbGgvUCnm3RsJLeYStsV62KC4tyLCmz4vYKKFJe5CNmJv2mT7NDLHS3Um8AV",
  "key33": "5BsNCSVUQYu5M1hioKrjJESRjKYAe5AiGMSm9faFMDFr7Y97vMUS55gWGPHAsg9FaCMyA2VjEU7fPSPpP643G6qQ",
  "key34": "4AMyqhpwQqZvjZYCFuQkbWUVLw2WsJxuyryxfRczXh51hjrzQ5mTy3KfZo6ps8VzJLNoicWka6KiENKSPF7t58sk",
  "key35": "2uhqnDCsMdeUTVgnkjmG21S5dP3PVn4VUG5S757jHc5mmko6pfRfeekWHrNyxFPPsDEWKWjVfQ9sEAZQE6bJhiXu",
  "key36": "5uNThtZmckqyp8vSqXDtTTPRDuqH6Bkga9zU6EtvpFytcgTcGQbsSNKGZGk1ULvpecMqVCv4crrno83fe6fXtaas",
  "key37": "5keiY94xfGjf69DLrZHN5tRCxHoJcfCKqVNYSWeoiGg8UimnjFweRLbBUuRB4ei94ySt4s4hA8ABo8GuNpNvF1LX",
  "key38": "53q2qi1FQGACpGBkgj5Qkhv9gmeT8qtV8YdLr1Mq5ysiV2kNoGK3VV9fjzPcaJ8fqvVfZ2gZFRjbXxrZYNGrTaJc",
  "key39": "5v2avRRDLT2aYH2EBgg4nvzf8V8RrUwNdJ9nww2bbeXuhUcBKgcyXjC57HQKB9DQhUpSJX7x7pMvyf2sVVTD5xb3",
  "key40": "5Z5dAFYJ3qMKuoQ5uWVp87QuWkeQU1yBhH18EpEDAbybdsbQWY1L32amfbRb5WNajGAjSWAzAUVTErHKWUQcLpor",
  "key41": "2NxaVLC47RAsQJejbeVTPNJCyC1GdCpuE1SKZGoQYSJUruXgQnoKn1C2jHC9m56PHRSEiBvEQu34KpNWZBYWrKw",
  "key42": "38bP2ucxiUjoNYxmAiTCBe2nMy529TkZastsShhEA2hcb8utAHTtJjWbGbAHSwn9JtFpm7hwNYUo4CYueK7N8xKV",
  "key43": "32qvaigYnstn8ja29Tyn4f96JxsEb9SVcAkwGL31GUKNmPoBjFjNCGyVpJKx9jGd4GuJNCXDKk15azqQEBbV9jQQ"
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
