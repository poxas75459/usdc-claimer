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
    "3qvwbkQVfhwr7WvYs7Tab1mscTkgxmvNvLU9yiGJF3NMcxZT4a8nptkEZr6qfkAD34NtakvoLYVxcKi4Nr11bECo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rx7q7HVyvtpkiMBuvtuy3QVsps6P8x42nTThYCT4EKwgmC37P5d5ozn5uCrfooQDEt1aqDkBcHGyUG8rroKYXLx",
  "key1": "3r14ybHT46dFcLyXtWbMvDNN77cuWUXewAwX3BwQpeE4ysbGoh8rG5pd5kHbiTQwszQmHTpeQJduxxASNfvrPFH6",
  "key2": "TV4SuXdahbYarqguY9RHvfr7pVZ3BdfCEw2t2r9FT4sEu8hs91ijKVc4kF4zqxbaf7eALXiHpePNdREcgXUt8v2",
  "key3": "4bunqtCQmFjQjicZFA5GXRvV8snQ3YaAvgeHUF1VZNXJBd1eMbprreiHXHJzV3Y2SVpD4ERMPERAVAUyJ78W8kvN",
  "key4": "3ap9LGi85zzNXXeigxM3K5FeACCABkPmfXL5nye14CLusX1jg3SpUtn6oTfeiebACQHZpYvFjyP6GMkDXTojKdhE",
  "key5": "5Km8nzH8c3q27MmuYGBu2KjpUMGTSQ3fLud5sTqWKG7G9mdKc1WtJHdhPXKmgfNCsqZUrznhBsj1jkCi8pkga3GD",
  "key6": "3VCFeuuEVX6F41aAncw2CGJWwsd7AstavN5etUtiXUTcSpT2xtfio14uhrvAFQQEXiZDSi8b6HGay75hZiSUQ3qA",
  "key7": "5MzcjTvJUU9G2Pirrn14PCXhoXFVQTqwYFT1bx4jguSJVPq6EbFfMEY4ywLjNY9LL4RY5Jp3pCN6NzVF46Y4aYg7",
  "key8": "2LRo5EgsrjXfu4Wusomv26Nx8b1WxRB9RdYchYiQwvNaZ4g1251hhsgEeHB6bLbMXuJD2QwW5Cazq8BLFf3TZMdG",
  "key9": "EfFj6LB88nPACsdtUR94F4xoR71p8zYtcCByBfJmU5RuNWMBTyUWQWNHAtGE5jqe6ejjRJfbcoUqbYQuae3PPVM",
  "key10": "63djyh5cHJ1J5zXTB95d4K96dsY1D4ADNpF2ZV18CtM637EfeV9FG6M4NW5NfnyvZY2gTWF3HgYPJFRpZ8kvFaAn",
  "key11": "4UeEMYeX6Qgbbx3Hv5uh3uqJAghZpdvdJbWjLrdwiVw3ewzDEzCrxbrJP8jbaiBZ42WzJCG5wytFJCTNDGKnb4Wv",
  "key12": "4BrcoW2fw5bCoXYEeRngyLgwrQnU3ns5YVas1R4JY1WZsZw84s35zm5QpvoNTcGJUnFCfyaeBKi9kwbm4HuCYQZs",
  "key13": "65dvVeNwBVXXZKHjhznFzM6PxBikuXZNNwaWsT4wb85tnH79iGNUpSw5QzfhCAPoB1M75spoWdemSLTLFmkvazoJ",
  "key14": "MSvi7ZNDsYLD8xJt2vvo7v9bkTuEJkZ8nLZoXSV4Mgc4VVX8eyBqLA16E81ovU8VgsrY1XJaupQCzibwZsnjtuj",
  "key15": "2xhEt6CujGyXL1Rbsc71e8RMcn5LDP4zUjfccAXjZmWkCx2FfY2RzZg1Mq1ZWvp6hWRuAPSBTwWsjLJ2kEDneWKK",
  "key16": "3eiaxGffMTts83gnSFnDmoAms197U1Crp7LSE3yzaTbq9zUeAe3RSLvGaDLV7ig5oHjQDbhrzMDZVShGGSRJqYws",
  "key17": "66de6Yexz8cQxf41CVBZxaJiUjMPE2fEeQeT6mGY1dZuhcMZuHyyXvDTjBuP64q6dQLt9KPGdUkmxK4eujEaz1if",
  "key18": "LbojSNsJior9xVoqR6H9hdryVDuKVgfksnyiUbv1QHUoSBFkPvjetsBmU2UGKaeJCEejgYNmkqsn5gcyCK5Vh1s",
  "key19": "2ixfo3TGTk4TQs1kvbxvHDSM9q5GmbMLhn5T3ZgGsADPQipMnuwKAyumvyRveEyRXJgVkbw9Yvh7fqCx6BVTY1RE",
  "key20": "5Ww4TskycVAqitVbpALKNe6choY1fQ8Yh691HVJG4u4PrvZzsUjRNaW6RYRzfhpKC5H2bKSTekQZrK1fMgpJR1ud",
  "key21": "2JWo4nia8L8yraroH1STg3Z75xT9LHf7tEbFeXGhNnfYPLq4pJP2UK8yTZfrETd9EgmB9PaqUnRjZJurshmANHvc",
  "key22": "2sMd5kXE4EEB9sbpA5MTAtXTqmn73HmaZBRpNBNPMQRR51Uvds3etFoiDQcYHfLaR2qXhFGgqesWss8WwQujMdLT",
  "key23": "3WVbgu1QYNyup8aN7JU6gUSSc82FFsLFYRLgTbhUf5PoiZBK38LKsayNTTDJTvRwNeULwXhW2AM6cJwFyJ3QYUiz",
  "key24": "TTLKzGHUfPWDDuWkVKENd4aixwQph1CwpRYqFwWcJtEMBmGM8WGQbhXr91Pz8iMZNtRw2zaqJ7cwFnGMQxmA2xz",
  "key25": "2rBCP4ofXcU3eyvroh1bi7rV2Vo8wyDRUHdhqyk5hsRcNZuehMJYka9sh9njeW8uzyDNChQXcMKYiMiMQyGyzQsx",
  "key26": "3MEXokuFHH35WppDJtEZj6qFHv3rpVVjgF9jqptDgAqSya78bNvUr4LgZMcGyFaQaetLs8AgZNJPbhufzKdYCagq",
  "key27": "44NBLbHvZwKH3r8vH4UvxXG2vTmB3CUsuZBAsjzvL2xvrBXf4CL9YQTVJhgpeQ2VZthp7AH1pkz3mh81hrYbTjBR",
  "key28": "3JgrY8XXw6SBax5nYRouFMiqmR4pGstNSc3kSonkgAEGhdX5pLkPcDLYGLftvds9pGcF9xwLeaYbXiXtp2SFAH7G",
  "key29": "5VLpdSK5KFw8ziBmqwTJHg7SnUdLAhc3ezmQFjFan4soCskTrVruDJggrBSvzCgZvViEFx8HS1ZKKPhEk6k8zBrn",
  "key30": "2j8wGPFGBxe3gm4qZqyVfnntAZVm4roHnMVdXoEjCJ1gR7tNFFi6H6udt6c5KUB2q1hPdrR4Xgu4eKNT3DWiMGh5",
  "key31": "xpR24xU1gxvVAmGfbJz7ongG11Da1bm1tasHX49ZSavNtDuuEgxPjSmitEyaYHuQgukVn7vzFoa8Nr1hiDeND7s",
  "key32": "tji6UnetVF5mhzro2kYqK69oTEgPM57c3PvdRBPeDNzaXNinpozz94Lwj2dZvyNrgQceKfEG3B4kFSUXC6yJ9S3",
  "key33": "4ocNw5wZBHBDmjwD4tfgQNn9oou8bYLVNMyrKR9Mp6JCu67pJKGkqwYoR96mXZtdnqf3eQuAWv61ePSzQ9CVf7oR"
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
