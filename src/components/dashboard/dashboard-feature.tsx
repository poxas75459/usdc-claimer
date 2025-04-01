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
    "4c7Sn6cfytsWtUM1SdwiKcaVpLCd15UvAYvnYWJqRMt39a9B2qGtwZusmnUF8QHeEtQCBfee7dSQtWCUwEBtYgEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dA7iJgB78XfMzKv9By2dMYFbk5jayxqVdAkQnKTVNQbj6oayoGppy9bDio2KVNEwXnKRPFNKVJaUdGXoGqhJVFn",
  "key1": "4vH96D9EnmVnMVB2gtvcgSmpGuDD5Q1rBMYNuRdPpbuxGJiAUTzz2QsSojvYo5B6NDmBuz9zqu2tcYYfguhCFgcE",
  "key2": "3eC1ADSZWPx87SXCyv12BFPiv4en196ZoYycGTHihbrTJY6ejeyDZXB3fTsa54Veu3EkxDTSpU9i62t2HobESyoQ",
  "key3": "4f24wGGPxe1ZC3XR9or7hN4ritXKevinamY8YMeLLnyTfPGuSJscuhiJ3hZgZGP6gxePsrmLpJxtZYFzcGQ8LXB7",
  "key4": "5rKUNgTTVNhJxTvKsQx1NGYgLcq1ExKFMdLBRGvFhSGM2vj8TCkUw5eV1nEE9PFJD74enP2YYaVvtQXyEFS9tRY7",
  "key5": "5uCGiFt5zr24fMfKFciBEYmrLxveUDDr4gJFHkbah1eSMP95ei2u16kChatfvRRFgGxpjAu2xrB6bdXMgog7K5cQ",
  "key6": "25BkYTD8KzSndCzDC9vaguWASPku2KKveEEHY92dJYQqDfmRzcde18E56WLwxXwFCrtzTQqyL2fTpRWmVCV9Q1bb",
  "key7": "4KjzCYu6wJVgMquK7BUM63AsnuhpQpFr4WAEcKX5fkUgPN21MWvR3LVGdZeauQ3Kgnbb65cZvmaUFZCBe21UhFhR",
  "key8": "5Q5vG9mzbb25UdtbkNokj6TDkNW5G9z6kSi1e71qfDKFYtg6MenFVc7EzBQjZV6yithf7MyCCgfXSyN2A2N1QyTv",
  "key9": "5JjNHD1djoc5KxLqXUwjfYcGspxyf62aKP5d7Q6cwwjZoGiq7dvJnhuwYxxA33Zh7a9gSF71v7SEdJQidroCPLWr",
  "key10": "Tnpfbh1Uhxzhz8GSY6qCEwLvdW1A7g629LXtedw3MrmFrts95Tg4zCXF8ktxYpmhukCAx2Zbz6sdynuvhpwVMn2",
  "key11": "4iYAJaXVkLWJhpedDZPgxcLDELfJ2V5PfCckGA7sxPAtetfooNj6yGbsejgtZ3uKEG1gWRffph9dR4vE7Q6kLcJF",
  "key12": "2DzHpEYaKqTLygH89myHB72AqqR7jXBeSL5U94HT5wChpmD9P7Hf1THG8XU4eApnpwZFWEE8MwzA8TSZbsjjsLVp",
  "key13": "23U2cvg4QmvVgBJSMASvmgFZvik9uRi5nkujXxyCWzDgaXmMJ9Fk25UjAkMvVSVrsDk8ypXWENT4V4GEfwe5K8pE",
  "key14": "2zniDboTABhcwFDggEqmQ3LbMrYcgH6m2o1PcYrPzhw8AsDcTwHNYCkUYGQkYKYoWkJTSSTduptizyKEehQr81tQ",
  "key15": "5nGTa7zaexdSxFz5R5EBD9FVQxqhH7dLoUuDzGn2GqPBvP6DjkET895iofYqqhycgyVpeTHJci6PT7E27uLHwQET",
  "key16": "3d6MEHx4vJiK92kiXiDJRuKjsLT75D8DrgMB2ez1VXGjrX3ndEdsCWuEwBmUQpDkPqpE7QqiT9UcbfxpQHkinGXb",
  "key17": "28sjRtEWJeBqT6F6MyoCBv5WjZFBMYdTdcc5GNtUryzyfH4SCwBXfz9M8nAYw7EDRw5tcPzM648Cc23t1amFVPsn",
  "key18": "4JFkdLwySkUSDfmshxtYpFwdiw3FiSAqbkyqLqofjJN3b4zhpVyYurgtvoMC6i1fY6JgU6vG12xfjdaQHSWNz1yM",
  "key19": "pbZCyKB5XyDL97qbLMmbGeieU9MAufsZ58BQRNcUYzoDB9dnCGrFkqFoqDNYpq2enbkcdZvMuuZuSPM4CNaYjhb",
  "key20": "D2E2rxKkY79VZAPoXmcnVt5dnynD7Nc8J74gGW6XzwSkvysXAiLsnmoxXCVf6yVNTKtSDQ69r5nmgXEsCJS89fh",
  "key21": "4ZgVrswkSBszM8fzLzMQH6c7SrTkwYfpmZ7SEjM7KbA6aDXYgi6A26eFKWd7wXxYC6Wmgu6PFg1mGSjVRkqby8Ar",
  "key22": "nDGuytudxvPeHrbjus9ssfMg7uukskerTkb9dWNKphap8DxM4bGKADhQmJwnywqLdzGr4YeDx6XMEHWmLS4CmSj",
  "key23": "26zUEsAKhve5sfs4RaikDaMrRWYF5v8hWKJLYfBVLHMBTukM9zEPQbDZvrLGKKaXKw5otyLK7JX6oYAdqSDo39zs",
  "key24": "59DmcWyYhcezbE4wdNndjzbTwnfvPpxfzn59AgoaoTV3K4PKVaGyS5sGuBHajd6HLFgdjCFRqduPcytKcyLF9jJe",
  "key25": "4QPmcXvividcv3rcqFoxZxUzLhWm6CDaQuEqdnq83K7sdAUC1p3cEY6HYSzVd2vohWEaPg7GF4k3BE7mrnbDuymd",
  "key26": "5X3DSu3HZc4dkZK6x4WvTxSv8XfLqFRysaG9TiuAReVXQPMTQEydUWhoTsk7Qk8WKZw2pCPj2aR6Ugxv7PSsehhJ",
  "key27": "5z9xPx75n6NFaChRDGGe6912CMtQtzAAxM1nPoyUxQ1FZrPwm79PjX5bEM7YZJnTHiEGfx4q28dPdGs5EjXSw7hy",
  "key28": "2aBwSyFB2tya3ou8CdSX6EixXP2AU33aooHDHaV7diuwMfZSrWfvTk11jGMjDjibSX2X6uqB7zsbsiyS3ttTmtzR",
  "key29": "66sT4RCDjcGXhQgpXPtrVGbsqQWZ7V6tKxdMp4R6x9CfbQ1YZd1faEHa5Tm5MEJzUBrybBv3BQsTxVgyYjMMLgmB",
  "key30": "31igaQWwSHYoYRDyg79Ks4XWiuUkcw2rFC3d1q6vtvjM35xFzSj6iRL2P6Fg2StoaqnntnhgPrbNr5GtiDx4tr3c",
  "key31": "RS9gh73v9MVEk5sp2RyvUEz2vdrRjtzS1ARND6qVN8K7R7LHsGn2uH4wzisoR7ZwFy26dLNajbQMMBc1QPrkwFY",
  "key32": "2LCJkeMdzVHaGqkARcY5CrCxAC2dpAazCqSQcsEncjSRgmQsoHubR56TbAkhEPgctVb7HUQ3JerwLGUcSjaohZcc",
  "key33": "3eRSoXFHDC8WvPwqkHhff4FzdqSpMhdxXZjZishYCs8Y7BDJCrs28yBu8cAA6Q5RvNDmcGcKK2RyT28iRc9XqjKJ",
  "key34": "2x1T5AD6DWdSyrixwP7Ukfbkh3J6kAkvCZsgTDhJ2AB5CUeFDiPb6QnbU79WH9JcuWJRAmCwBMXRdhMLcLhuDE4x",
  "key35": "3ymJ26dzEY2vzXiH89mJXJE5v3fTR9YqJh4vfjRWJmqoETtxYaGjvcH7v5BHm75ESvi57sywqzggi7ZViaA269fd"
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
