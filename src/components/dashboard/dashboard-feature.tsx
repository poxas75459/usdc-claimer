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
    "FvzpsaZZDRtKcvdV9EUEgGGEdti9Q18LdyZgyzkoMRCzunn9xvcaXUDPjZ8a1zWyxrgineCXRpwEae5Ld4swVzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xcjY5uRaeBvgc9DMvV4DLdyNebiahiQUbKXFnF6N8tyvGaKkqXGeggb8pzkUGryXMinGUnxS4mSXhjUoqSH2qP",
  "key1": "e8xzdktCQsBAAWZ59h5YgzHPPpqaaA5cuT5VqxggPfTvN9RdyV6NLm86Xh2g8FjhnKKTgWyzgbWVUa4qMSiwjd4",
  "key2": "32d9cFtMxF83xvdPGUcKf1GrPFcP5pLjyBYgfhKHB9HpMgbutc6YJifHnGK5t3zWqwvAvBRki1SnguharZFQyANr",
  "key3": "5QuKDiTFXZZEi57ePtkDDXEsFdLkhTVJpFDXdX8fhftnnLizWzU5yZjQgR22FdSVuXyMt1TgabKV3g9oXWD47BZA",
  "key4": "4Y8SX6xv8ZZki7vjGsUSwg9coFo6SWwVg4umknV8vykL3Q9UhX3QLVqoRvf1VNX51YBHj9CV3aE6mRe8uwZXTEo6",
  "key5": "2NpL9TQhVzRbiHXd2uZcV56Jt1Lny96urtpgXxUJScwffbs1y875RKzt1Excix8VeKCJ5arLm4QtX4M5uXZvGaYd",
  "key6": "ELxXtFFq8JLuXwjCvT8d9ttixTr9zLwBpPBHWBa5wJLBrzWTQJjnwyRGSe1uJ87TQcRtfSXMvSm89zbo1W3Zjgy",
  "key7": "4KXcqH6LCEYqtfRB9SjH99c4xsfQLDAcd9ZSPsZQsWykEVm21yKEQVX9JSdtkF5ZKd3m9q2zxJZmSZnNcWnMoXc3",
  "key8": "4babNa199qs7ThDXFUu92jHZHoPahmYWS7Y13cm4cfxb1dqEker97iYojhCHWLA9Z7VeWaNNwyjTJZeap1EjMPLL",
  "key9": "5gDh6virBbptxp7v9gqNng122H98bXnh5JnNwUt3tmXKCquy8G7yaXRu6QDipRQBXPAgYtRBKkwraiSeW2iVCLvp",
  "key10": "5PEkwPH4w9wQ3x2uShmSmCLM9A6TaffwQx1szG24KxcFpHtHXE5tn6C81JWNEv4KJJVx6b8A1qrhbLkXmgYsGzHC",
  "key11": "2jz8mN4NXsASKz3SUgA8SpQXKaHPahZSrHWgC4dhFRT8cA8oDwp5AQV2bMJeSJdqHUQ2ZsP9KyTRWVcvGpcFUhRy",
  "key12": "56gD5jPkpTGdWT2ZSsHYiHaow8Kddf1rVvCn1F7DG7g5PtYDzFMPvseQEzgaGtoNC7uG24CxPN28xjaEuCs5D1bV",
  "key13": "5KjAndpR5qLvM9yBNZLZXr1vckxG6sQpzZGFsREzL6LnjsATHyyzACNaEMw7SARWSKmQtm7erC85JB8uL9wyUXiG",
  "key14": "2GieEWTF27tbrfXZxkVZvkeLNgcaFNns1EAhoWeQ761poU8n8rBdnHM4rqAWn4eB28z6PpR9coJS8bNzsr8A2s13",
  "key15": "5i6EyFCX9sssC5zSYG3zEXVqLgNzuzkADNbs3ZnhVM6CzNrGCsUrNr7Q2ZWLVkGDGbbEKQ5bGt3DVx4NkVPDhxLb",
  "key16": "5hS5timsye9qyvJz4wsJGnDTq55HsNFbJhvzRhUjv4swhWFAuGTQhfbfu1Ss3eKy7k79JradW9ciqSvkcLjdgREh",
  "key17": "3ckEuxWUHqzKCaam5K2nFa2TkH2HFNe17hiebnKHjFQsrKCZxRCsjyhg4V7XfrT4VRNBLycoLd53anK9mjWwWjva",
  "key18": "4YhnG1opVGwa8XLhFttceqHsrD8iYJDKbMkrG1e63JnzPQTd3ivLwSMwnHjPDohdFNGB5SePQCm8UGSqHSphnVad",
  "key19": "4R4drsNF3FPGnF2fiRbyxPYgrgZxgvYX1LRSJARaWibca2gtMzyQ4exJ8kP3yRoCYkAsfhK6Tg8aFgpzAcZh9ts1",
  "key20": "3NGDkQ8feFp2dBqRRyAi7kBewS5GBr2rJHSbxrZ3NemUamMbALuvdoLqkAQwRrE5zH91Xy1qPqTeZszDdMrHf19g",
  "key21": "e5DZQghkUbhbM3ycpDkmzhMmfPQ6Tn1EA3SngrmSvJRmVM63mKvfoRbF5CaD2GavCBiJUdxJ6pQMhpH3WV8HNu2",
  "key22": "ZjKYjAmH4RSP6CXoiGKVsi3RUJDwN7NGJnN7Ciov5nwaZ6egnaxs8zGT1x25maXDdBMz6d2f8fjkqxirTmLps6s",
  "key23": "4hjmniJB6qm3LWrd63tU4gWYTBhQyUHgUsfPpX41XFzNhp6rMWbupUt1TYhi5MimG4H8qgyyEvV9Lhpk5y75yFxa",
  "key24": "67JeVQKU1cWBAntz3rhaZ3p4q6wWd8mPP8TzW2U85ovitN8AJ3n7TBcf9ANNb9Cj8MCyYyoGHoDXMY7j37y6EnE7",
  "key25": "3bzCdxXJyjAGTZapCpMNPxDvYXcXcL39T92sNFjLBUCkWmNCmyyYdzPvJagbJ1v2PQNbWGsEp4HswKXDrw6XU7rd",
  "key26": "36Z7RCz38qdba29549rbYu3KMSQyKxQRKoqNLk9SFg81r85tWiHmE4oZp7C7X4tgTjKJ73k8HkrjMk74HBf4Gf5",
  "key27": "4X2TbeLxFFtHFkbmzaJ1JcDj8kShyCBKLASyEaDq4AN6oDh6Mb3RzzY4kaLnPRq3Q8Y34HugP7KsVmZXG3UQmPQo",
  "key28": "3vTMMBFvvBEaYKLSdXuAJYVunpysxGNvo43F6xXmhieiSE4HvHjnBk3GXswQeXgtBRvLaKRuUcRNB681D4BxyA2P",
  "key29": "3awaQwpR8NZhUvArKigWsH9dCawpAEP7bTbS3hUVQwyPwAn2dUmT4PWXuExBRH8K7HbLAbWGpsX5Rxgb8JjqpVGA",
  "key30": "5aBf89X4wuHyEzVzkisjF8CcTSPSU8N5zDnqszHSFUfBhLtf2s3DzgyXEAErFB4dsLYgcTYy247CG5BqK4RWkEZB",
  "key31": "28JZoEj26xtpGrEEhZ9ezrRfVYoQAJnXZwKhGEhywdjHx1ekXJRg24Degry1vKEn2TGP9KWqSm83C1ifDhrTgZ3r",
  "key32": "4N6KSzKNqdc4mdQmT5wU56MhTgMvFx7r6dk9WuRKACqN36zFkrjabXuJtcqbNhqSyNAUo8BkucXGCRmqe8SFyHXs",
  "key33": "3ySENFtUUeVLHQZTEkua6NCrQY72TpDNp3byKFoDwv6WDXteKXBAyyFKFZ4WR5Da6nPC4H1jhaUH4vCreMow2qYR",
  "key34": "mZ9aYKiDvRP5StbmBhFqidaDZZ4wQtwScEBNvAfucNfvRabyyP5YQpgpkPBZwH4o34tFMMPJMRKTPf8KB2KhTRV",
  "key35": "5X24Ld7RuemnAWvpq7GLCxzzPW11BKxyYbJZdz9eKfhKjfpqW2FxZKrukRF1NwrZPPYijeSitz3WoEd7Ty1wbEud",
  "key36": "CDDopGxRs8oemgkafjzkAuQ7bG9jKSjPM2sp6LAPNLabZN2aFVCEEH12VnN7MFnM2cgYg3gRUs6dbA6gP9rdRKZ",
  "key37": "5VoDp6YQAePYtdTRzw8Ub2FnM7ZYkMkKRac58wxv5aee9HWyBsrASaT4xfzjDrRDyZW2234qUJhAq1D7pbaz4hPo"
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
