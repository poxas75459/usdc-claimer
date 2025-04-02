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
    "tJcwTK2WFjTGZsCKvZ6rnQPG9xJiREKT2JeT2BV51sAEsQ59qLFr4rZvqTszaRnxkFK9CAt4hwMa7ofZy1GmKHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tMez6DUkC3Qk6UeyAkpcWRxkRagCjuj38VPAfpPZy3skbnv51nx9BSwxFdceDU9jRVAQ3XT9EKQNpF5kAqdYXdk",
  "key1": "3ekz7NddFgjCF4FxegarNTfSq89pCMbqimVi2uDHexDsHqbopegV6aqpGADSA2MtbqKfudrFshw4cDda2Ly4UgXk",
  "key2": "2iwr5cZfMRHvLMSmm2k7pMms3HhLctsH6fh26EhgV3BAVv6kuSJk6BXQHc9GktUp561Xi2cN38ihdeDVbwEbbfSK",
  "key3": "28NPiQvgHpmhgKxusbtutY2EuMzVYMLwUy2cgMjs6wr3K48pXo4QyULGHUAWfjW4fAgfbXPVvSMvW5uLMYdrz9X9",
  "key4": "5s1FgDjK1FHjPF5ivt72CcEMiFkycrB4iRJL7rrnEDy1EBjN3m1BBLNwLLxj9aWfBu3b2XYztieoVjoUm7VJAC6h",
  "key5": "5BwdzUqPKadZewdiJbiHAfjp7BVLEpKHLG82Zg3AMLqi8eTK6adjmmWP1aCS8gG9fGvtNKpZ6KhFw3ckYNiYNDZx",
  "key6": "5DkBPoi7yX1mMUYGNTggUc1o2skZS5bnpaXARBfMYokNMqqvg5EFE2rHErsHRDbs9444fV9f19wx9aN6vF9rWAgg",
  "key7": "4YuEHWDvrpPLduStyTiQT42JNg8MY6ABU5SRGmuwxmK397pj21E3cKko9kFGyrSszGJB3hhiRJ4pDWF3VrTJRR37",
  "key8": "3X4saPdnTSE1yLgdZAnWUdYXCYdRaD2tMWn6NA7qhV6U9EggBNwRkzSqZVLBa3DdXGGFK9iKM1G5zmRpe6BsZSJs",
  "key9": "EUG6JQa5zoEpKY89HwmDewvV64wZJHBc2KmZZWXSVzFE6dGePBNpesz1wBzUUady3LEjut85oXrmAAxeVtt2UYc",
  "key10": "2UCZQC92Cqf9KErXDrf1YU1WFjdo2XqUWZTUSispBnUk6RuLpyKGxHFa9vGreHh3qJvjEBVfCRGjAPeVreB39fn3",
  "key11": "3Xhf7EB6UuiMrF9uCU6HNZuKxXLnmbWkDEQ6gibhzwM6ceW49dUjeKosdWqveP7YGTc4i2D64QibvUmFvckmhtLn",
  "key12": "47mQFPRAcrk4HjP5Jao8FKdK6aBuNDianUPKNYTmxvwW48G5EnzjKireMK8GbwjCTuJJVzoF8jh8F1Mz5omcs7rQ",
  "key13": "3SyzHCDXRDPnHLDXLjxyBThyedk5oWuNcuHaU2Wm8s3XjF8KW1q7n5xUmvdkjwBDsxurNgx75ZWngB2U1nHUx4zF",
  "key14": "5m9dYSW2J1Acj9AS9tCjvz4Bu65iMME6SkExWnmKjAbtUjgYeifwpK2BDCH6HgMmd77SBTmDePQudgpUH9YUtDZ1",
  "key15": "42G7a4ttLmqCeKeU6X6VpuaBikLJAvBBqXmk68MZpyCCPYpsHAEmG5s6tf4GKXCCkcz6SSgAiu82T1N8fLvxp4oY",
  "key16": "4kaYgnrHiEzFq4UZkoYmEZGKsLWDrpKPz5TLNNCVH4CpzpfTYTGREBcF2oF4wzryvJ2U8gQszwxXsZ94osXj2CJu",
  "key17": "52ByhwK1K25dNgwhfoVQuKphvLAPgbX1d4vchfq4YHwCsSsMihtjgqVxQYTWMJrD2HAb7822TmoecdVK8bhTsVt8",
  "key18": "uBaPXsAmnj1exja7QaowpR2aPv1EXrmabGqmm37PfhMwzAXV4M3tHXNFHQCLB9Yjzfap89X26QyHvik649c3zwX",
  "key19": "TgZ3AR8R8RU8PbxhYdS6sV4oRsQZ9UrVgeWqq15TBH2jvpa9pnogCM2YhqbZrj9kPLBJBwYfPa6atzWQonrva3C",
  "key20": "611SsxshkA9VtWCrSaBnuZGnpJScVw9CNB4UHd965Nrj6vqr8je2ar1K8zBEuUNcqeNNHyjBbkVgtf5sKq9TYWuR",
  "key21": "2DTCdkjW975TSGAw8npjRzLBAoANTJ2fFubLvExBoQ5MZVUPnBTRL79v4L6SQpGwq7TzaTJYvFq1TdXuf2z6x7z",
  "key22": "4p9HKkPdEJy5n93HtrAmikhd7KDsBVyS8TQ3B6P4BT8rmzox4yNEtd6RZ8K31DXkMySHFPm4UDWq1Y9ho5QoLNad",
  "key23": "6nTm51bhjQjMUZosDS6YaWTSizkSPoxMW7chi5y998wivGNW2GkM8Ycq8ppPZMq8HZzB5LrZnd1u1ZKtEgvq5ja",
  "key24": "3WqSQSuFYqc3Hw7pVBJG3BDSEPvVqcfSXLGmNjDLbbHkQcuaHw1fMEcUrA6ZEuoNCMn2PthGjJthu87HvBZqivWa",
  "key25": "5ue3hCg12Pnb2UnQkjUxydwoSk2xyBZJULztXgPs1wdAKembxMg4rSi29LS89EVyU2f1ZBbQYWVu4TmVh3cL9KVR",
  "key26": "wqisFL4rLKC5dgip7B42fWbkggYX5R8UZrCrD9MCvV41mB2NMAYvTz89djKV4mvNrg9QqSgCBxMRv3UJkycgVkM",
  "key27": "5wHxxyHo47J1jaufT9JvPRLJkzZT2NqY3ZtQRZZG5rbdcWsRQakEeeT2SFZKqTBNKEiHYJ7zcbHQdi3StorbZUAs",
  "key28": "5y4uioYczcdGWmBnVik7Xbt2XnnR1GTTXw6KFSc7KJMP6p75dj6Z2mGhNnqZpYFqjU2JdyjJjGXdM5PMm4Y3QSy6",
  "key29": "HYMtksR5dQL4hEEePLPLQu4Tb5XXHBkRQu3eVYnF2kBu5UzVoxzy5kCxbTTcRGk5hwYvM5DmXoRYATFxdYATWxY",
  "key30": "3NKkaRMi5tQXsoEUpA4aTsoVRpe4w958mk19YiHwZFHyodSykfxG84EkdoR7rtR1YMbihBpViGPyHyt6vUyfqABa",
  "key31": "3U6uAgmFT7pFMbq3v2R92VQbQFpwXCRoyg2CZSeNdbjSw3iLCTGkoHnxAM4ia7RK4v2jDiBvXzy481n1P6dS15h",
  "key32": "2FH8iUe53ETLDA7DFhzFj8txmKTrQxK2TLtQKXPy56uXmUrvw9MkKJ3Ec7vnUmPCC1XB3LkZ5i5MbueVVPQTZZgd",
  "key33": "44S7eMSRGWi47xE4BEKBS6DSbyQpz5H1zGB1J32g6p6Rrioa1bBnEohtGWAstqgGZvHY9YVsiVxzA8iV4GWyWgpX",
  "key34": "4Zaki8iyir9WUK7iF8XaNNT1gZNvDNKQRNGEGvwR5Qh8N3jbpTcXVzh7v1Uofg5Jqyea1zt62wgS426gFaotozba",
  "key35": "4ZrjeDbt6kBZsgWzPaScmqGTXtTo8xn1VK1i2bkUwpgxbQU4j212McG2juafStc8GgBqMG7tzaC8DDLF8pfkiDk9",
  "key36": "u2wbVKXPmiQPuY4W3NDRWej1ToZUNZfqRuLKD6qdP3kxPm1uxi1hYMCYcrKy2K45uDRmukT8XJSFPEtyQwSEa38"
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
