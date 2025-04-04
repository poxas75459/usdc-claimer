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
    "66m29HuPmueidnT7SW3EFpQQrfREdbQ21ej3rpmHsB6yE75mLpDQahodb19sKEicxg9Pf5RLxmjudyHBRVVT7piz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bni7MUfUtcCsu1PzRAR6Gy2TpWDogUeapcSG5XB668yvpynY71gieWDhp8DQpHRZ41sDVvFiPT5rAjiYqsHUHHC",
  "key1": "7H5Lmh86kwc4YNCxeFPEdywJBNgUKQsAQA7wcLTEN7EdeLWGNkCkjZtZwokzJ8gfovPWWiPLegYWMqjmnbYKq3F",
  "key2": "61KYEqRLcE1jZNnBxLm4ZKnDggwdY7nc3pB1eb99MYrCZ47P6NWxJs6LKyiZLQyZxUp5P7YdTbhXfnGyrV4EEUwP",
  "key3": "RTtjPD6v4krgCG9MdjPJGrUEh5CGuXKtAKGbfQVGHhiZfAyH2svKnefRNBdyde1Q6C4t1y5YMrkXxC3PBASfRmh",
  "key4": "5GniA6JuX745KswL4CEMjend4CpCNaKSmWY3YqQ8zRr2FeMHdob7ffkK7nLuQKFg1J8Djtv7WiRp27a2bgnTj31h",
  "key5": "3UtzG18G5uLNaNYJ5aSG6xcHXFogjniUzPAfwcLnqDe5aYrCvdGsVChox2AFTEN6giJ5gjBu1MEWzmhs9qUaZipH",
  "key6": "34WUEQVev1FXDaYnqEQPSp8M47L7WJnMZa6aykfJNahK1cJ9poFELfrDYHKFXoRUNndMUwSEAArJiGroBiPpuRVw",
  "key7": "3qdWhN3qQbfyQsG1DaGhXiGgcoZX83MPkBusUiwnUVxEzw4Ed9p1i5cESSXvpZJDCJKcNft23H7vbQvmTR618o2d",
  "key8": "4getAf2PDnn8BzgRQa8UcBNVGAaDutQyxmzZ7svr5AgrPRW1HXBrpfjYeJGLkba4xQGnA1avqNxWX8f3TLw7CHL3",
  "key9": "3sbqVRSn31D9Lc3R1VzYPkHSdhYbYdeSEc2axmQKbCHy3NKpdNmmw3AbEQ33Hpyniat7o5hFjBpeiA1ELZzByW57",
  "key10": "4vrcdqgbFDKXRzPLc8aG2fP6W4wq3FM2pia7F3bcFUcePxxZWE9Rh5SHiGBBrmA9Syi67BL3dWnLWHefQmAQ3awA",
  "key11": "4WBk9mFKrF5sAYd4RLbyuz6zt3jN6YQCXTjhrFTTCKMWTj1wQXQJpy1h7gXXzdUA68zPLq8b4he2HQWQkjRznREy",
  "key12": "4dtFSDhYwwsRQcDGQv5eMjyb1RdBo2f8FbrEHtGGUCitu5Q6qWhHQt1J2tRrK7nt6vcx1mZqk8CExKB4gTqoiMix",
  "key13": "3MAmNtLHuqy99fmQfB1Gu8hC6DtsXLQogXwbob82p4eCnFTNUTmUs9nD8xRgAYyHtUESCWdjSpSpjasdudrmhVU",
  "key14": "smQkvcJTk9qkChFvJeBZJ8DXt5uPfuWvstZaSWJ4btS2rtKEDfT39PAeFsnR6u61XUMdCo3CdQSKz7RE4mghr4R",
  "key15": "2ENNkDZQVS9ZBcwJibdtdyKZWJKpHKKeD5taeku6J25wD8bXHughQ2uG5436SzKEvmS2SEzE2sbU4jBDfjA5twKH",
  "key16": "4zpMh6xLJaCLUiGWoQmnpqCRPHcom7CmHizhW3f7bMXyvd6WRfJykCZ8Y8JnJ7cQyQfJCj8D82A9iax3qqcVPK97",
  "key17": "4vXynxwuVVg9vQWoH7fboaKFV3hnbEr7rwTZQWGtongxBfk4Dk64d78HBEgpEaPuHTcDTzhL9bPdg1ZN618KXECm",
  "key18": "3jiwemVnvTV4MYWoeWKXBRZU55nVeNR8aSFHXSTNQA267B5try7YP9ighHCKVDx2nD4srMbGMgggLExryAJqwJ75",
  "key19": "4j7GEbbXtyTQih4AJXUFZSz8PusH4swTJTTJbeDpJXJZyrh2hKKdUm3Wg13QNWQknagMAE1umqjjokVbGmy6dfWm",
  "key20": "5EBx9CmXG2qNc2F4pK9e9cmc6WJThQoENNcHEdvrP9Ym9x3V7zRH3e79vTaweYGZsp3ia8RieUv9E5cCNkvTxhhZ",
  "key21": "37qjdpctkXzsNArSrYRyYbkwBpbArVpCr72ozvJNNDPzK4uotjqfNvitD2QYJmfQrmhQYdfF8rwm8MZ3M6CbPWTn",
  "key22": "4D36BLjFpxUmuaG9VmGG1rMZPZU2ZyEHWgKyogXnUf6qLGF6v6N6kKRxA7H8gm84b5ysuYbvcjUJJgthx5GL5LQw",
  "key23": "xeR7oRPfD29fETqEb2N7uTk5D3WzsWZyDhR1Kt3jABJVmyF3gpcgrffrdHD2Hx7PwMzoNsvmGZ7cMJtzENePyYi",
  "key24": "4JWwRciLFALCCEFA5jnrVK8MVHVaLAeUiFUCodSgSeMSGPqxBAxCvzFhg7npma2G1WSY7TpE5icdp8kTuM4cqqNU",
  "key25": "oQnkD7WLPUFnVe8DrXfyDwJGKgfWuWsNG1UHB8dGBxaRAAwWZkwvhjS68iGrtvzfhjK6ecFKbU1LkkmeyHe1y53",
  "key26": "5JEmLjAekKvKap9w1tsYDeowmZWz781fs3QPpPFz2fq8HRx8vgktpizzQz5UCu58188yqQkuAXvnrXD7TznvVtF7",
  "key27": "sP6Emjr7aGEAizxz1BHsbnQkeLJxnQQnTkdsX74DFxjWkEFKZghfoJSRjf9jua367GgAFER6dGmU2wr1QqgMwWW",
  "key28": "4MHmvtgj2Gj47rVww4ee8ih5mWhNHrDGmjM8FEbsPexcV4GfEeewJ5qfBhfCJMCCyJJDeBa1Dsfzz5ieYaLzjNCw",
  "key29": "37o282vimc4246hiALw78aHuRsZayDeCVewcaWnxT9oySXH1HxSkB8Y7M82ohCA4kbe1GyUGR7Bmn4rv6JNPvN4p",
  "key30": "61qzf4A4BKUaGFiZo4pRMcmzqzFXFmRaKCT2JyWJncdSgd4ETTA9wCTAz9RAbxsgMZjrpws3deZ1jzB7zBtKmwkM",
  "key31": "PEdqNM8wCR8FqkpRbR7FeCbffuZ6htEo365tybf9VpXECF4GiWGWkUCKb6ZLdPEKzF9h3gCKpZyD3CkmYSNp7n2",
  "key32": "2HoJuStFSWViQrbWkNXQ9VxUwf5ZJYoo4SKB6aJjcHwHfBPxb4H9pSnwLPwBuDhgBVq3xHJq1G2f34ohJKaLLKQG",
  "key33": "3udNFYmnPAv6hiCRnAnCczhW4BQoKXvLDueADdN8RRGFQQAjkn2D1UdDLkiESFdq1V7FfnYFeUAw6KT7cC6YFJTY",
  "key34": "x9n84awaBoV7xKkaAogQdMXFpJudLDKucZZJftUhfmwJ7Q8FP5huND4ThMd6ZGYHfuCjcaKX7zAjM57FqxHb4YD",
  "key35": "5B6GcRK1ZDYBScg9FyBbJqXqSFhY9Nywsd33q1Q73gYiuvfz5Ny1QehLnCsqR2Yq7v96peRnjm5ALwbhsEpoTgf4",
  "key36": "3JwyEb9RZhtPUFkbJNonc6rnxNZpEECDMQcKxDJE6ceSP38LEP9kNMkTPJJHD4PmMKn4a7SzxHG2zHEvGspHr6Pk",
  "key37": "3EzsRD7mWG3ywmFiPBKMskm9HCf6WdsCZeUFxttcfjoaagk5oj8L7VLebg2UqRZtyWgB8zU3WQFTpq53RPXW88zP",
  "key38": "9GN2GesAAiYWkyKm41DJUhT3mxdPApsWwA76p8agQojG6s5E3SCLimmn11HBHvjB1evPqZ9SsioNvPnjC6B7GK1"
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
