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
    "2jnr8CjszSFwgqabmg6wFKmvd8Zo1jQKkMHygaHiZWLkJ8AacuSnsrR2ZbiAyShmbHHHJVRcFBzTzi1ikKJgkfWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iXNXpgqvV4bCPVgmfPZ5vpENz2bDRH2SG1KQ3M24ZqzryuoBU9EzrhLhFMsbwjWYszSYYA3Jid8AcWPekNd882b",
  "key1": "4eaZttQ66Zk42USw8CfGfFC5vZzAqD1efHCSD4kEyv5HiU2X8y9Zv1LLwc3p1DLBDpWEsDMtpcnZSpebcJYU67zC",
  "key2": "38duokhv5BCoEbjcvDtCjydZq3KuhuWNfUtyWWwLsRZ48ntpVHPxrd5AettCdJVX38axLgv7tqFZ9csXnTbYB593",
  "key3": "1UFtdo8BUQtkDaGcPx8oRAHtpW7U1UTc9b1aLCHAT6mVh2VbzYVA5gNSx7aAutGvnGM514CbeM7kFRxLbSS84DL",
  "key4": "UJUJHzMzsvCYjNVqKyfy14hnQ9LC7Tpu2KXDi8pywsSp6Bea8BY8DMVwQv4Bi191ehCn1XxZtCJV46ysvEb7Br1",
  "key5": "2NwESABq555TnhRD3HLCwtxKYV1PdHtV1SrrDGNGLoDXDxvG38kzjSHY7JHWHRAgMhQi5n7QuFjFgvWP7pnyPVng",
  "key6": "4UefGkdnsgPnbaCnZagFXNrohT1hTqdiHXxDzj2snjeWNyWZkJTA3kFbPMadqKRBNJe3Bpgzq2aSQ1UrhUyDHjpa",
  "key7": "3fBgDf5LPfbcL661Fz9K8WsPM7kSK3bFv3QyJVkSYx6QBNcWHUoXFeja9EAKiRJ8giAmB7hPBSUcDiAefg4k1JWW",
  "key8": "47koa4vCTjnnu3jNCMemuuy5rEpJWMjHEWXA9Jn6swUUv3QCwAPxPGR73aZmuBecFxjmi2uNs7CrFLeXXjn9uXR9",
  "key9": "24PoCRVLMZ6GBr8p661uvhHA1qP5d1EQkVZEXdTeERUdCCU3TJLRbtYGWU5WFkFdJTNZRzXyYCXpLbSqinymuRV1",
  "key10": "3WuUN5gq1H5mChePpnLgjTy6fjE3cQfmwQM3D9Pist2cRfyruUEBY89Lk6YiSpqbXrq8fQUxMMNHtAtLUYiv6yWY",
  "key11": "4VD1er23hKi2F3TRonzpM56XNggSjwGgWtVFo5RTdCE6ZVtNvuFMKLEoYR2CRCvFi6pCt4ds5boFhJnF8f3taWQ6",
  "key12": "4LkggSeXvLnwAnQ2EmhiQpuTck4jBLFGuDRpZHHgYKknCSgQB8o476YYEnNhBcjgtYkaug3DUtyKsCEJRMaebxWZ",
  "key13": "3bbhGAY5jbSP6s731WJnMhqAZUg686Mhytxz6jAZDN3NXBsEVCjqtmTjaSV5PPp2K5Dia311a64L7pBPzUzjs9QU",
  "key14": "duGKB7K95dHCM4JuhnUXa3oHWWdopnd7NwTei6BxzxNN5yPJWPAEWMCChyRidG7RMN7mxGZq6HGz3LgC7d9guAv",
  "key15": "vD7L54Hg2qteCUPGNDnjdYZHFkYPdaNiLFiNruqqUXNqbEF8B9EGBRaUQKkEenwYLpiZ7LFwPGHMCXWEe8BnpaF",
  "key16": "2KyxLNkmeFmFLorMDBPjKsg5mxaJULmKLW8pp35pKoaRbdGNHw8SDnRzKzC9eXsEaz5RHGCQB8iGPrhEQBhn2X7s",
  "key17": "3i84YCGP6GUWfPeme6CNmxVagXHokhYerPwx482FockQgHsDmULaPwmxExTH2Cyuu2d6CctcTDDTafFQBzbDyMC",
  "key18": "5YYSRK9Ba2kR51SqL9JC6a7S5rDjwFu32N6U68XD8j4p3w3yd2xqR4VtqQA1G7hZA6DJ4oBohXmgwTvUAD5M7gAC",
  "key19": "4XyQJszeefTFiQ2Q5VUMgtMLNBoSoTCdb2oDTpEJy7iUQG59st4tW5CxeFYU3iy2JrapScUBSjdJa4GDQvVAjWWm",
  "key20": "1gqbTc1ccLeRFeRHU4hnHBSr5vKHmKQoSgbS55ukNahwMssgpkJy1ZfVpMNgydDgiDDuYzpxdXPG1Qa6TaJGGEJ",
  "key21": "5kR3cbHR5zthKBawSMmS3fpkaKeTyY67RNwL8sgGiiaJi8uYDzdeHVnweAmNCpd4hFcdJVxNvrZtBYm5aQrwEhUB",
  "key22": "4h2dZXtdV1yrGKV9JHhbEwaHjaxYBVYFfg4MUDPYT26W1m7CBvfch4KKjkb7A4FtoiM74P46C14zHRwcLfqdLWpu",
  "key23": "5LmuAtNGBVSpJ6r9Wdq1KjVbpSeeZcZQunxa33PfcqYhfghCzX3fCX3h1zPsgSYugPVAAc48WSUG7EA3ukp9UpEP",
  "key24": "4cRL1Y6YhDuijrSJSHMkrpaw8MYwHkB1pFihkyUjLN1xNpW7U4d73B2PsJcvtoazr3fYTL6DCQGWQB3A7QDLjMc7",
  "key25": "5Q6qASNB929ceuuGyTcMf7SKMqrjVWk6VLuoLcNMKGpeeC5QXjPHsHSeggRVGQXY2VsaBS2s48siAXsJJ8wbojmv",
  "key26": "2MwfNf6y4GgXyzqFbDPm8xWCoEF11ke6DVHGHNgG9CW8Mn7WNRvSTpWTdej2ibGjjLPmWGE51euwXwGs5NnbetUN",
  "key27": "4xMxQcA22dvKtN8B5qDptpqf55pWvA7a3Vox44PQ3t5nthXf62CpM2fkxrYCEaCxRdVrgPX5S7qBjkQ4FEEZNg45",
  "key28": "G4KS4V2VkLSQqo8x16gmqrpekpgaFQtfG55YrPvYgk3ykgJaaWCUDXkBtvhKm48appj9KL2bfNEjdyZu75ZmPyT",
  "key29": "qHy33aZkSMziuceYhQtP9SAp1iKQX5wkTg2SmX9Tbq3EgfNeeHYH9dSYFAkYG3vXm4y7Bf32F8w59U7gkbdqv6k"
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
