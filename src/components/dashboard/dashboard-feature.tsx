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
    "412mU56iYoNemgxzRVYhp1aJkXw9Jw5m2VJQoC91hfhQyY6eGp1Zixpxwto5QJm2wqSaW7NunpEssgEXQ6vY4ocZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZQXWN5FdeCj5hgJC9KHZhLEDGbTyLwLAxagEweBA5MWhLyqdJ2UeWVhegmJWEvDVfAKo8xPFtYYZtUuPynGZ6kD",
  "key1": "54QVAZSuJi8bUDcrNBywTHpSauB4u7hNAiucQcK3dXJx6NUGPY9r9CAysbvpLEDcyUFF8UrcMn6Y1fJN9thjNpBM",
  "key2": "TBwLL3EPREvkcFWW6VfEtryCEwJiQW8FKEtYchuGp6Rt8BQ9JYNhgVbNPSUy9f2P8PguGZB5BneKhUGTdNTnfQD",
  "key3": "3pjf6UrDnMVHXEFqNqjgHt1dLE21zSJpNYW7UEqQYN6kktj9Hs4wFfDyU3uyFkgPrdqXFuxchQMEy4vCHRtR6mmM",
  "key4": "5ZJp1SRhc3vWmvxr4X47jXVxJHVmUTju4791HMiKTCvCk8Xebenw7tC5oMHjemBaW2X81ooT5Jv2ya78s3CjxgMe",
  "key5": "2tKZs13NJAooX31eVRjjyhGuv4ThTHD3G6mmAAnqQmECrQV3UPEi9z9kdigPrQbUJ4NGmohjDqVB53xjWWVAZR5v",
  "key6": "4X4aXMuhmSXrPYyqA13myWhjrkq6oEEgJm38FAyDiP3N3YGiLUVfBFPdrk2F878ed3PMBBC8dTfxj6wZkCnVWzhZ",
  "key7": "5Hz1shk3GgxTjerhHJmzTgLzAWbAersAy7MFU3d4gaMYnFKT1WFyKbfgyF5QFopuSoWDX4qhWAEiKLqf9vXJSFVt",
  "key8": "4gjf5A4V3oS7iSZVx9CvmumD4mYz8UyEVoxZvEuXPzyv3PjrbCUxTLXfKp6ateuRwRf1zBjXKBg8Fz4gcMczpiQp",
  "key9": "2aQiM8XNPHCnZujdmp7BN92ANpoBxZaBAXNSMJ7TrXgZALQdvaq4eM2MGnNA64UFMLWMEVbZwAjGdQJaBhEzxbXb",
  "key10": "2hmqyL3jwLQsH8BJ2eeoGGWpPkVVC9QUAmNs5397J8gjVNtCV7mP4ni8VXuiuvG65dMmk5WyGhKtLQ4Gdv4yRfUn",
  "key11": "Se1MQqnzr1aXzruKA2kMS7pcL5KHeyYvK7HRMjfVqPTcTiUecMScKyMTDU4RNuyqV6k1CKxnL3rwHtXnUtRwk76",
  "key12": "2pbeopNLw3XWiRao3fVgvRfAHVDeQhoLiCrr4gBdKjYFnEuNdogmeq4rfMVzBnvE3VXuWoahQKaNXrz15pwhTtf8",
  "key13": "25of5zmZhaJ5RjwrZJDRjYQpq7f7pw6pqR2PY5Jqb4YEok4ZKMjndUqprfS2GGqYnhAg1P4wJX562X1aTsDm4b5B",
  "key14": "4NyHhtA2gJXKy2Rf4fSgvhtJcGVb2xFe1jk8GcufFJXdH4dEogH1EkSqTTZeWqFmoDcEYghAuN1KnBQrYGk3fCZq",
  "key15": "4wJAXKm3sRSKiuZbPzF6i3LNRKSMComu7JWFTUVkyuz5PZ6emyNcVGcj5RAYnDFt2bg4PtMmcbT5KFeTcjFcrGVy",
  "key16": "x18qDHoeJM6URE8WKycpQ5rVYS2kbseBy8CWUBFTNnD4pwdf9rjmNFGWejnddYHwreG3WiZiadbucYJTcipfG7t",
  "key17": "38J2cwrNTgzCcDNBxwdDdBLFH8UnigV5EEGKj4vycWF5JXbo8tRmb2ZW7YJRHNaZBgcUVJxBfFgY2GPwvF4b9R5V",
  "key18": "qF2dt3zeeDfHyjcrFGam2gPnGb4kVwqDqQoAS6NZyuqMfUeucXANuz8Z3fntZknFNjbqN1nQjHdBoygA3qmD6JV",
  "key19": "2Ydw8PAQoeGhQJRRj8NAb8zD8jYrEUjNwr6oZx6Bg287SPe7mXEpBDGQnKaWHm5iKMAs67WVXnQ61sDBp5mfu8F5",
  "key20": "CVPZ6M8iFD6uqvHQNGFUceNJw7cWC4TVGG2iAtLkdxfyitSuedqP9aSQbvb5eheU1CNaa4bgpaBCiCycMraiot7",
  "key21": "42y7rykVDb9Ku7oc2TsyTdgcS36BAX79pC1gHsW3yp1FeUntntNk5dZ9ZG42eKSahZM1WrfgEd1KvuJ9rEFgwFEh",
  "key22": "ACqRzEJXZSJbgScHh2P8uwFjuVGmMsDFa9BEAkCwY5NrFZg377r6nWAzDiDn4vfeyXpgsiDtCL8mojopUsArNxc",
  "key23": "2E3MnZSMYYNVFfoBwMr5YmW4XJPuwj6pRV5RQcJqpa1cNkbjxuewcwTBfun2vDE97msADn7Dw5FAzecsRTczxpfz",
  "key24": "4Dk3HSuDNR1uSna5xqM9bJpkxH2XL9YDbu32NFe67SkrrWAiKvXcZM61FKdX2pZTUD3TQ49JSkt1K8oZ1qLJngzf",
  "key25": "EFJhWm7DkXEkGoEVxfbyohWdVxXY8cHsFaMdFsx4SqUJJiFSxK8PJHdE1utwX9Xi1HGCvXTJRyBFBcVEFTt2zBh",
  "key26": "5PYJLpJMtoanXadwXVJwzmpPzAmMX3TGaYcW69zWg2auBbcmdZFtwr8S4vRRFpPximphbLyHcSobjfpE8bBXgDWr",
  "key27": "5PSUQvafFJ1wVHF41suD9rgogWrnvqJ7ghnXUHFZSDCa5oP1HwyPyTX7N3uJwAF3aZGCEWUw4WeJwCasbNuJLKDv",
  "key28": "2zRo4FgQT3TbbmcLmwzduzQRGSAnRvG1tVVVdXSeMiARBoP7cYwrz8nkY52ghHSxboW8gY4U1aQ16xv2epC31vqr",
  "key29": "4ikjtXS6kZVwNw2jsFmv3ZcFLLQRptSHNKf9xqPTC7u5Ewdhg5KcJ2MbmYdHocQXpMYULtG27ZNFWg22qKsFCHqQ",
  "key30": "3nGCqs42EVsyY3rD9GG51Pr6Qw1Yry7NAm7RmASZ8J8yc6G5Y33fpoc2Asz8rKiwoz34EhbzYLWqu6MFTAJQazot",
  "key31": "5opTmJrwYVyZUSuVdAmfAanM6TG7GAYyScA55iatg8Yobaio8CHfgMRqxp7Pz9CWvM1jtdPTRVZgLenwzt35DLL2",
  "key32": "uT9Urq21KH75satbvYQAjFWUCbaa8Xq82rjFRTNokuBJRECYkAza1hhLHbHSmwbGXJTenDFw3qWXUmR3ZYALuqt",
  "key33": "2xTgfPXh1NG7faaEZk8qdmguV7x6QAmqUsjVccjAxmAjpKx5Wc8B9ePHCqyqAAdhmWUND66TSbW1VaN3JB52Lkeq",
  "key34": "VW2Tfn2X6icMvaLDrNF2dHAzp56h9PMXt5eTFVYf86fFSDzcequerzEStHv1hs5FvKuGmcbqeF9gikbLMKEEZ4V",
  "key35": "3BF1wn3wMdV9hYCy6uoi9tYGppWd55HV5QTB7TXeZC7zYYdeVBUpMFx65YNsoJVnQ9B5zbjvLDY5Yi9G6FY6sRKh",
  "key36": "2eFqWBxcfGBUqZ6aQm2nUwyPXBabjaizpVpq8am8fobJuvMjgzaYpmbVkwXLmgBMKPMDryt2m61NDNAkB8VWLTue",
  "key37": "44MYB8BiBX5wyA4KWHvJc6BJLQyramsQSfkjiLkADUHsf6ERH4BUZCbaiCSbNivRRA47xVKqbwa2mZpDZpCahufH",
  "key38": "667kHA9wSWzxjAbgWFZtHzQJFAZHBDrBPWdWq5K6NeiVgjSqmEhHsQJinDmr3wH5j8tM6AdBbbR1sU9PoqrfKUKT",
  "key39": "zm7vsmMfNdwHV4gAFh5s4B7R7cmMzMfSAGqBABBAu7pRb5Wo6BtU2pgAc1titen53SwdmNPD2nRQCaVXd9LNB31",
  "key40": "5Ty7XSn6fau6qswp9g9XZSjb3jcASpcaPmSE7QnDmyubdswV2bXHkX8wLD5nGJ5DxbZPbfZumdW4tyebBj2J7rNK",
  "key41": "ZDUWFzwkPCw6ajhwyQJZkV6gjSVbfr2eAygXr6gVpqGtTM1AbECNHuPihLCYL35BhbKJMbnXSgAtVu4gsjCigHc",
  "key42": "4aCX2FQHp4LWefF8TGrdGb6Px81hZc6qyBGc89Mpf4kDuts3Dkwb79V5AMTaEbvfGLZjANM9WudkJwhmwrTRkYLE",
  "key43": "VtWnEfDxrhiJ53ayBEaGMGhJSGziQAJcKr9kr3DPEtcGsaP3V2tdMasRp4qZeUvJrg7sFuMR2mBt6uG1uKSDCT1",
  "key44": "3CnHK19cevVfSdv2X6FBbzW8Y3ntKe9NcD192L3K3cv13uAt8JX2q8nT6qyhAJ34uRc3P4KwGfwvfUTbFNJhKoEa",
  "key45": "6HKH6PXYTHJNvYu7ucvQw2SGtPyWV1DJaDS55E4Jg6EMt3BHfAjSAcv6bXsU61YMz8ixnmA3cZdWSGvDrdjK4CW",
  "key46": "3xngo5mopmJSnUyYjnmgEX287ApenMY3UxzoPp7WrEBa7gxq4uiWZA145Dd3XZZKhEFViQVowVMxh8ThKgm2KPsq",
  "key47": "4MQ5vtxS1qzFTY2KNvPe7K9c64rMfQgZJzwkJbdrRS11tNqtRwqeMxBpJk24cANbSkZ4Fv82nZmrZVmVC1i8rczw",
  "key48": "2n7iFtCHttGF4xS6WqybPyT7fQLaRZSCAh7JiT8LJbYAv94JkXVqjo4yE6MHG8x8oqxu9tzSNic4Axt8YRRZiZA9"
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
