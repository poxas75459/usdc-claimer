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
    "66Mdm8ZxEWSEEZbqxMtzs5KVb49sw5ryv2P2V5xtvsNKTicCY1sUvJhqyfg533LM2W7AxBHDhjn1R5tc5j53xxyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jbxpRtL8pP2Aj8Z5Z2aZAS8xyAAFGLrkrV7uvaKJhWEZUjL7BoVNK9Q8qF1TGDnvxsAXAvHsAnFXky7csMNRtVW",
  "key1": "4XiwkVKBKFWTgX8hq3XC4DAJkoyj1xtm1KaVVK224VvCQHZWdrWuXDA43AQijk8Nfaoksg4ZKSRC22Zuh5P7dTB5",
  "key2": "5vnQFCJuWs32GqieAc3DudrYbnH9xcbNbq4hhemExfBcbZbDVNYuJovQ2n5JBtRHN5DVkahJq96oH2E21VdtT4nZ",
  "key3": "5Ej8G3XhEb3MPCPHQFEsJUf4FwkjB77GmNFtEANQ2xXxbLjw8QhwdH2B9C5spXfvu97GxsV3hSRvspG6Jor2ZcXb",
  "key4": "3sYXDrv41hkaZwkqmKoMH2Lu2Lax1KVy5Vfitr3GeppQwAT9JnWUjVeP7Qk75RcnJjV8BkGFpiHKwdX7xE49j8hf",
  "key5": "4kB52P5NnUFZy9CQAhYYGhvT3c7zrtMJAMuXtRNbXbH9ogcnkmU9LngY6YTUbtHBjqUnnqFM6vn7jZC5xpPmFC6M",
  "key6": "4XezbfJkHxQ5876ZDiAVVawi2GFyFUSHUhvJ1RWGGqrrhnDefhSVpZT7P2UcQgLi7Y7hYZNJ9TRpjV13t7JFaiWP",
  "key7": "64HwQZE17Uw5Xx9hoXv15NFqbFRshtbovdq6pkvyYF2rdStoJcGQdeEF1a4bm6qGENS8rEFt3UbMVEZyMu1t1tt7",
  "key8": "5BDH2xsgevxVqib1z43HvFLnLLcY1TjnMvWr94BmU2LTPtALa4UGX64diWm987wuZTfKK3Hxx3JGnGose7FH5Cz9",
  "key9": "5e7HCDMYrZxcP8vnBVvpkmntwE9ovCmkLdgVHiSSfBjacB31ENiN5Kdrx2k6Ru3MVeh7JDznLrDJGAhtncU9YB3d",
  "key10": "W8geZdCN8UQ7EkLc6m3V52FHpvDBXbWvGitKag3rw4nq8wUPeX32P8YSXcpmh1GV5VtuhPS6CR36ogqLJUhxXgh",
  "key11": "4GdRTLxvrHMTskXjsTaGKS2tBsRnJJ698Eig1NFwrV9qq7mXsypenhoSbMLg5jYTTqyg6s9NjJrS2dXXZggVhJhY",
  "key12": "4JS4BGhUp85i4sD7wVUTUwhG3hHradngC6gbmYi5wznmaUKeenjdbEeZ2E5KHafsCJSGiBiqeTpiRG219weebuqh",
  "key13": "4DEDnq6fV16H7KwLSKKiCtCQ38RWHzUzqdDBU15URs298jYoZ7acAWYvtvUW6t42A65of6qKVw7JgmGRLndKuQCU",
  "key14": "2CJhpy4PPsVzR1FTGhMmF1kyYbid1yu96vUGJpXMmw7grpeTxNPcHS3uPWrrEaMFzV6spuRxnhe6kjfuREb3y5xb",
  "key15": "3i2TVywADnAdzR6WLg7ipRi4wVrgRrfZRXRxQvej7Y9aWuGQUExifmM8J9gQ19bdsW1Cnn13jdaWP3g8Hm5RXX6G",
  "key16": "3wEFEeW7VtSgEdW9zfX8kQBfWy86634fKuRvuzKhjJpeEYcFUCpmiPo32oinnr2q7mdY7QHBRRByTE26QsRwsPEu",
  "key17": "3Wjg4r16EatvHqFrFsNQdzVQHhDQvA2MnSNdC3Mjw2gRtRknNJmYFXwuoDAvqjV6RfGAXxoddJb7b1AfHpsP6jF6",
  "key18": "3XFGThmhSKcss48UYoa1yPTMz71mikaoiLmCkKc4RvLkQueYGHwhV82c1pxFPQATvjb64TEf5W46BPaEd65wHT7T",
  "key19": "THVHvHcTYi2p9KdDZ6KSYZmRgiVXqqBNUnCj4CfBQQtZBCs8gCnDV5X6TAJawvyBq5WGq8DM6fvoAz7hc91JQeH",
  "key20": "4LP4kPfwCwLQohYvDGADwrDo7cgQyJtrCgHwZZbKLnokYnQSoyE4uczggcoQeUEPKMsKuW7BzRs9kRuuTdND6bAi",
  "key21": "4bLDN4RVJ1hTQwnXqC6kKboAi4DJmhSiqQxTw4MuwRmCoMTHViuSDKm96B6GJZLHakVZyXqh8EMMTfd5Tqsm3Dev",
  "key22": "2HK7UXo3qrNLVfBSikce3La1FRAC9vUj2cfaEnufZpiPCqs6rBAYqyzKSn7Sjp5s54K6TUnrazpm6pTZTT7Yt2ix",
  "key23": "2egkuxEBd5tWxjwNa6iCEDr4NgtdZhy4nAM3zABztpERgDUag4JVmhHWLfC49zjLrTPYZH4FBM6q7KWY6r2xvqzZ",
  "key24": "2YNB1FzkHk4F7Y1E8j5oUSaMT8WddnuAxR6VaYqtZotFEtgQKDzXqkvHSBXwBBDxxmpgQ2GoVvqVb2BtW2dqVDyD",
  "key25": "2C74fzKgjJqQxfNfNdT8iedzc1WDrnR4gSedSiGTdAMHeT8FEysV9uQSNUgoLRESWDdamtPNoeKtsJ3gnsUZHhSn",
  "key26": "5aPNtkeUoJQrWUFDRLYfYjMsxZ8R8WyyXouxLsXXo7eQWFDpRfXaqr58pMJhGPBbwmtbMG4F6GJkPPvZms928LHi",
  "key27": "5xaHSeoAnjUxH5KM4bcuQ2oX9LtL6wePLkECGafGWWGf3XUGZmSQ4pwpy8VYUcKm9PzmH8sMRs4LZPoMQBGHaSzL",
  "key28": "3AVHoQ9mcJ39jAbKbZLbZ7oxTMj43Ti8A4tC4tDnqnSyWccr11kjbXFTVqyaqeo49K4EqKUbpvnq47HnWbq7xkrP",
  "key29": "j9qMHbdNa2uSEfNBpqNrXhUvEkmYfVBt4agDwpEkt6EZ5S9RRUTHP79hqgNBGfDPJM7TTAZc8ZXudqpoeg6HmU5"
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
