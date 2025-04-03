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
    "3NA1EXYYBi6QVLJjpE9LMmV3XDZEsE1v8eGNWeTFe7kLBPBTD193RFnwFxAqWm2754XDmMTWPskJkKWdgZRmC3a4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25FP2KoFBTvuSxn62snF6u2o6E1DuJtB3NAiHE9Qm9xtWJ5QEFGPF9b12GpWtbMQ2Ju3NVyFj36Q5CQJRQzitAXV",
  "key1": "3GCej1nSLecHweKsyjg44NgPm7tQyA6Hz4xyXsmttwxSfoxBbrex7Y7fyibfCxtCd9ozGHJWXdaJG58hwn2bvkFK",
  "key2": "3tBW5YEmjWAJ3grNdRGPP41XzYofgSqdyeWCZZsJz3NDoMugCi9caVJgkWBPDqhKHg86Xeq1V8ue68mejMUzEamJ",
  "key3": "31pSuToD9s21iuRfX7zBZ4QtsH1m7tSUKLD4V5jndtcMjqrjukWG1DACWF4zsCFMbQcTfk7Q2pB3pCHBGUTjMEa7",
  "key4": "2gaeSgVY6HBFg6GbiRiniXj5ApYGciaTHtwHmTDVc72akhSCVVTtXwewZxTf1x4o8FcCEkgC3HbAcHVxeVXkSKVh",
  "key5": "DeUL5Fr6bK2GvTwRC4mVjkEEpaiVceWjAeC83ctvSnQiEfBdFQULRvGZdXfc5rmibZCTzcvHVYAwXjwaMtGuAkB",
  "key6": "3zjDT4L1udzHcTyNYfFZuwWnsh64Rn1hzZSqVACqhzgANPjAasYp1vUE7dCTCNBtGmenjJpf4mi8A8nJceut5Hcj",
  "key7": "3BX84kCM2zc5L7PTHLSBK5Swwx7VHbNqqGcphgSMLjBCqQ7eZvudhRVV5rZwj2whe76fAtzVBp3fGm56estcNKv4",
  "key8": "2JpXE4uEgvAK8tXXFmdKuBzLvSZfoTY66GGE9Bf38vtqxiveTGQHyVZ4T7MBHHBdfMTASe5nXu8zbJEw5DRAj16S",
  "key9": "2F6vknxZKK5qzQnKa561P35acxQaEyWquhqHFS2iLQ4SweNyAWb9gMiFgnbnCp8JEipR8RGpLEMDnqACWdG28guv",
  "key10": "ZeK5bL3qpAPVSJt1uW387tk5tGoh5PpHXrsvsTJuzMWqFYScuZYjTejxt9ktPfjJ2VKNcxzDxi6GghUtqn9jYYP",
  "key11": "4H4URGXqrFH68FeGaZJAj9Qq5jF5nh8qizbT2s9vWZYKXSSwc4L7vZBa4TBtUxTMwFVFQkEihu6G4kFkw6ckYGvD",
  "key12": "42Jt7qrsZ1PtCNM33eZuR6xPwa6XuWtS1un7hPst3cz98bx7sgjwK2eCbPx7P1vddPd28rXg9JHP9qF6xGn9K9kA",
  "key13": "4g1e96aqwtMUuQ4wSPaSeBRD7B4QEQ3q2du9Ff9jskeUTq452fbvNLrZGhU5nj6y21F7XFC8TRAwKzPcSAPBh5g9",
  "key14": "3JxAVBvw4hkks9BUpPZAoezjFu17jhD3SwTqxW3VdupJPLfgKE6RyYxbqUwY6gvztyuTXKxG5JQr5FGDCuYqDFKk",
  "key15": "27Y15qFXfRKL362iPFaFVDrbX5MD7oimpfJvvY5gAZ5aULtXtvL8ARWoRViepWCA6HXQ2nb1s9C5C2mdEA4J4fMp",
  "key16": "3aCuKoheuSaRHaUjfY8HeRdkGv3r1fbWmgVaVrFujA9ZyatRjBGTpJy7nLswt3rvTxhZjuMbACF4CFZDUVEDb9yw",
  "key17": "21jRtNbcHwZutxd7Pw8Thd9rmB5B9vxPDtGdWRgp8ppGsBcyFxxVjHSqZ33zHwTMWMDazGc5Nj1JCUWD7GJhiK5M",
  "key18": "Lpvhs9bVQwMrZcrMpiscfMjP751PLjStCW5CM9w8aJkhVfAmoU9LxneQa54XALAFTyefztSrNhWy3P66mnnVt4A",
  "key19": "5UNtwiYx9yRqymzzdjdiFCSPUhHFjCGRg5pwEhfTwtuyD754LCdf3wCbKB2zd4H3fBeGSWhDzDKztFhXGRFB5WXn",
  "key20": "ggPwR6EW14UuoCXDrQeq3W16biKQLemwWgwFWzV7DVFwzSk6aSbj3hodbT1ccajkfuPaewva9zKgma8GpYnTTnC",
  "key21": "2PquQhF7At397Z2wmaALm1XYCQgQKnpPVn13WqwxoCxUaMjnp5Wzs4qRCXXNKUZ2hMAzTp8YkiHmU6Phd7VzDw9Y",
  "key22": "2MZwVnQPRYmCwBrx2vWHkMAsK22UD9qJwdp5y7vaYNvhKVSwqvn6ut8wr9tANTWDRG26evY9eDwsTc5sDD3BtUmE",
  "key23": "51WKmENRN65eM5KZMbmmqS4KnR3Hx6ydAa2f9nfNWbKXPtXL7zqpLMsYP5WXgjGMfYxG1n3zVVWnbpGjwV9hsNEf",
  "key24": "3LjJ54h1jFqR9yfNXuL4jhuScf8SBkAbNxSWegC6T8DbxYinvZsuU7P4RUpcCPvQdv3ryPuiAXLViiLwCthiwo33",
  "key25": "65wwHfhGPJHApPkqWkJgZc2hoS1B63gWcUeWD2k8yAqg4vn1uAanMybMf5CJWpuGFHvBh7nKdDpjAM4rNk8h9sia",
  "key26": "22V5i7Sf1V9K8mwtjNNDPUGCmbJTV2AD6KSwweBWNUxmS83Rcrs8uKBtEtwbVBdK4TeHZFjAVNMxLPsU4fWPTE5g",
  "key27": "2UWN3xmAp62aPanPMcy3cZncLBpuHAU4rdnNtv17e4REU149wJEpgMcR3SJsHWcwK8m7niNVgPeWT8f6UEkRAjB",
  "key28": "2VvFoFCVQFMWwj4oDH1j2wwa9PEYMvyhp8uDEfbK43mMKknVus8SLmDEmJWShCZTS57YymfaEVHw7rcwGZvZN9uF",
  "key29": "4q3QEPNm4N7U9hznPkiNL1sNyX4ToFeSx9ybFPGH5ynURSsN1jbgpAwn2DvAN1ntmXp9dn7XoL5ozCmKJz2ZCtLZ",
  "key30": "5gfDWnKoRhiAnYHsMUu6cS5yLZ8BomWV3An4qnoB7ZTqffxC56ibuwuEZypgnEpUcKZJGyXnVbsy1v1JSPNGetPh",
  "key31": "37n2XgjmLfqaCgSiHEyg6fFN2c5HC3ZxdM8rFyTZA1pHbg93qca2UfqgDeDv65Yru7srQ8mWpA6taX525dD4xn1d",
  "key32": "26ce19heAtJZbEAng2DrPzjiJAoHxZaAQRGgwsiNG1TLp2xCtoVRnMBimknja7CHCQJ5Vjoy574iWDNkXAZFvWMe",
  "key33": "5wNvFE939oXDvSy76cGfFVDC2fsGamNo3QKL5V2NjydbRVunMfGz9hm5rcEGh5WSvfNiBn3kWWigUdGSkpUjaZR4",
  "key34": "2jCFNzj4gWBfE2Ucz4QJsxAziJSnW7fh3BdDr9LdwtRStVTLuTFCD9vYj12jnqbhnjvPjQxS4ztnZtJQoL6GwF3W",
  "key35": "5Le7xGGrspGcCkDfH8HgT7JrxdJQ5gfoBRK7N5U1kYtjSiERwNehFeUqwz3QuZiCa4XsL94GssNyksavGssvNRuh",
  "key36": "67TxWDfcBaPJwgfkovL8Pc9Q5h9nFv1o1hyBeUvAUWwmb2FdHHKeTqMkRBrezAHqnWiipykYzvgAD5czTwNEVLsU",
  "key37": "5skWTtLPBmAHrE1LVsf3yLHM9gX4j1SHiRhtZwWpzGpbULNUxJtGvdwjQUF1k93WwdjCwYknoPE2gwPrLGy1HoJd",
  "key38": "2iWVeDjwmb2oPZCynhh11P9ybESuoZs7sxSqziyyESvFHASCqt5Cj9qeVo7G1jBk6c273MpQ3qmknnUzPudEXxgq",
  "key39": "3HNFbDhDuJvD4WekeT7b1LkEJ2N46Yf9JccZqEg4qtjurejAGnV2Sg6kmXkFFsLVg3RGfLt7UtLQdSBkJ4cipSeT",
  "key40": "5qkxpFRetL39kktHjaUBProRgMGhY9W6fHeLWAado3wuNu9QpivHU2ZmS3ckfdvpzPhk4iU2dQKYkq2FSYMbMDMG",
  "key41": "2oKBE8yJ4C8LZtTGH78aPCW91dUTLqAggnLKz8Upr3mUZTJFK2TK97uidwaPXbRG7HqPQg5jjgpkShZEDnTqcbzP",
  "key42": "5JJrjPprmM2qvMbfe1ysdMe9pE99ceyMsa1K9RgnDLL2bCD8odz1znt8naCZoWLxVz8Ze4Xxv9w4agwPt75jEn5U"
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
