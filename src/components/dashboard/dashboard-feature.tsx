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
    "fT5Nf1rbzXTyHtagf8f1jvzJs4DKevubbRpFMQGKFTUSpW5TcGpFRKdqw8v1KCY1hTK2LMrzXxU6mHxj2fC2pvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EfZGoxNc8JDAWZNGPAghmh6JVBwb9qRicu4uUHJeXNyb9mEmiJNsw2odynh7aKKne2afMqQ5wWBacqTBRZwr5yr",
  "key1": "2SN2JyD8YYmfg1dQ2v1xB7sduCQTU8AjpfgcjeJvAZDYV96A6hDMda6WqBstLR8WyRmvHXhT5LDnqmpG6379q1UU",
  "key2": "5NCkaJBn8er2AjLHc1qd3m9qbPhthwHHrnhCK8qtnpkajYvGT5gYh3XXsv2xW63VSzJcBScVVeCGgiY1yYU2N69K",
  "key3": "gABoGexc8Ad7nXw7E4xLBD9Lxof2KddXZknGRgZ9j3UfVh96Dji7pgznNHvmKUbYe2oZsn4cDt5D4AfL8iXwayu",
  "key4": "5r68QTDBceNigHKnXDL2Ya9DSy4SU18Va4jGnr9i9V3WZbeprCoYwE66EzJSKKGTeP1UPtYmEDk2mKK2BVXYPXfb",
  "key5": "3VQH4wJ62ZfkG4ozwiYKBr78qUYnHyNzyUxjCPe7FzAMk68Qdf5rYAnyw7vSi31gtjZ47UBt2byKQY8Ayq9aBBYW",
  "key6": "5A9NHyTyok3fKocjdTt16fYJP2RegjbTmtrskTotY1GTPZu7eSjHCWEyq2XVbiYfwx6LcN1BbxfzrpfDe1oAF2rb",
  "key7": "4YCMHR3bvmxzgdgeR2kaE7JUJkhZ7wnbxfRxG2LWrh9kTrDPJzNukDZ2dTajGfR7R8bP8qtiPjhqg2N3R1gq1eXJ",
  "key8": "3hrtmdGs1CQg15o5DYNh37A3sbMjD7btgULQGok6E4AMX6ZdrCGuiJQfXx9VxFKSriRFcyN5N8wUJwcSCj4UxbrN",
  "key9": "4UEPrEQunyddCmNoN6p5AoQSrcDsWzMu8k6JdeXPceytKdEcM4t1YP9dDyWYhwJs2865BM2ZEGX2ypJdVPuLNhZm",
  "key10": "5HQedozfHV2cx1RnYm1VmRw4b7VKYDj3xr3uCckUSBiz3yJiZUVonNaEQZWJ1WA4A3dMGQA9vtS1VzUeJu8ho8zT",
  "key11": "3cryUX4CGeGJAznY2psEFKP4aYswDCeWnDko6DAX5rpuPhrb2Jyemp5c62fq4XpNcxDo7ZnsqRxmjQHN9Tk4RX1Y",
  "key12": "5WzJN4DESKLsLsbqUDTjQxPQY4RCjQYu1tz6WxYY7UQc5q8tWxKQXLhuQ45vwynanutwfwqjeoELc9cfXH3mQoM9",
  "key13": "3NZ42zULw9ctg4N9wyTUJMN1rDHLwRPLQPUCdyt81PekDUnPEMTMc4y9JbvQ7vN7HF5JcHfNuGk7mttxX9BwCF1z",
  "key14": "5QXqiRiAsCbGYzLtmxMyPm4RErfHjKVRTwDaLGkCQqz61k7w5rzNUUrWpASwgx44meWYLeGGABEMdgBr8ZebiSbX",
  "key15": "3nFuW6m8gJZgtyWtM7eJwWhQtS2ZXMELxtdcrUJRFHeQMW1HXQzwbffAWb4M27yGE6bFc5NajdF3rxP18mGfXju2",
  "key16": "3jooorkzBd98N48xDav69RW5PN15ZcqkMgqstufKwULwAVzPGHLBVmmFh3kWaTU5fUiwywP3KSryYv6Fb7AWUmHR",
  "key17": "3jkLzVbMj7AqHg1nNdHZtypc3co1o1zhqvjnHfWkr58jeYMgHUirUK3RRBoEnmmbu6PtLAzj7sH3yPdM6dKLGwy6",
  "key18": "2n42iixeTdNKnECc4P3CGaJz7KiS1Vp9hUFYZLVdMsr6AtftMpGACgMKtVzmoYVpkFn8ukztfochrsQgjv1gdxXE",
  "key19": "5wCoS4JyXdDbcqCUJB49ubwPHhf5RjNHrdxz6P25GJKsnSoHQMGeH3d7dzzGWTHmfz6tYrRNEXgL7fCn4PGrpQY",
  "key20": "2gMjt6mg8kJQHCjm8Zb3XfkSWL4UHQXHrj5833Uay4yxgynCjVbva9bSahjDwVhRZE7RrdxufiG7oQAL6U4trzoz",
  "key21": "2yWQNNQSw1L9h2XUgSD5mkbB5EmpHTrr6jLJPiK1WCQoP6Ee3jL6fHA95Q6kLwJ6sRnFBB8eSB4eyuieKKVjbTDF",
  "key22": "5sqxDiS9qWR7txazvHXKDDor378zQRsyazBcQ5ZPknE2S9B28s3gNW6PbjyaPnysrR8BCn7QzaNS5VW6FownsFhY",
  "key23": "48v1DTkoMKufNX3fUj6Kts9mbw3tJyF34AavD19oMAoW7wpfYgMyVpLmizntPXrwYoY9nafJDF622XAA2F8Z6rdz",
  "key24": "Qhk5xvUbq4PDNrhfiWuCRZnMjxLdXE5UY3gK2XczxSiTPSaLa2bKw3dJE5NmH2iiKhGZAPH9dhxCktzaiAtS8k6",
  "key25": "TzrdNQMoqKHv4A3Q6AZ99wS77GqH5Sf31HUtPHNv6yo4ae6mxjR3pdCNZgXy7nJpZfomHeQB8tDkKvGgXgHGhkJ",
  "key26": "4WhJ3QtpQL5hFUPFXGQadgFtyoPSw52SJxfsRoo42x619PCcQsdS52RvX66iRRFiVojTLBfnF9yD5XVJsuY39PR5",
  "key27": "5oMz7qTBJYzNKjo5ANfc7g6vWbJuMMFscd7ngiHYmSpYvBWvs4oAF8Fw21orwrcDuFeEfMUnJmVTneEcNKCVZ5aU",
  "key28": "64wjWbjhGqTSuLeCtQDukRtmswvHwj72UzjYxAvTD5GR3hrNKsMt5u6uCLkPYM7ajU1gD91BgYVC5gRMqtvRD2fC",
  "key29": "SS2kfATxGXJZAGSN7CXWCrBcYc9jtGkXDoNA7ZhnpupcMvcauAt42eezDy5kgMsYecJT1tHfmX6NrwnfYjAwn1q",
  "key30": "428s3sRoAViwuEHvt8mXrbscc3udqCbZaD15VGBJAedTrf2K4Pckan8BUT2admJTHLsRdEuSc6B6o9xqmitgEJ6W",
  "key31": "2LMgiovnvdPX5EkrhwMQ81U8bFQhufbn5hM1uL3KkXTK8MxYDqZSm8sdGmvaFTHPJQw54Hgb2JvLsxjnQmRiQkzq",
  "key32": "3VitLUF9C6ZzDgsbAdxqoHDJxjkyrHZqBnm7PTFpTmh2moxhyzcu6U476h4rgeGQH1p1CW3De6XYJiHBoi9McRkK",
  "key33": "2hjyHZUMEwBMd1WQabSLryvBfJzATymosn8nro3z223KdRFx3UQ4eBufc33YLyhs7xX7A2Vf522LqFHvaw9eyrdf",
  "key34": "2AYZ25hfUgXYcSom1MSNncJMGiMXvPkgbQbJKEmZF9wMi1S25mk1ayqBRtKZMB1DMshVJNWTG6DK1riCS67NNZW9",
  "key35": "5V2azr6oG3RuEzQ1T7XDyzVLidHBNXfx7TZU8YVohk3NokjKSTHqn94DaFBTfxikMFT4BBsxWJUNd9eN3Mw1HYH5"
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
