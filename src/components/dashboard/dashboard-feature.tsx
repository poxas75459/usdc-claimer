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
    "3NvM2uAMf8uEYQHRyxFys6DbkN44pj3wBBWL2RqsowZjmXDfyEq76mahc51hbT1UAfX8nUg7L3kGUWRfrKFxAwtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "257UWmnd35RDdo2H44seKucht6jBrS9H2MFFKASLeHnD2URoebfGmFrf37bdUdB13mES1MCYffunQHxRiQYFDVNc",
  "key1": "4xZYHSgnntwCqhMmSSw6XnbyRW2TXaT5E5VHZbbKQqTK3XjGrJbbvz5FUjhSpvmXWHtHgnSLQn3Bokr3uoFGqXJw",
  "key2": "5BLHXRcPXxW3NzwGjwNATN8samJ7SnPEvnjAVAkkKkDB9CVnCn7RCyG2UH2RZDPAbfLta7VTV11zBLnEkU3Nstsd",
  "key3": "4dJUY7iv1FrnE54oFQYvm6mArcw4JfDyK5vBwGZXR81gox2DQL4g3zac9wbCdYvgi7jq5tkUJahbZqG7RwurwGoR",
  "key4": "24e1RVXVjD8wrmECdmprRemVbDaWeu25t3Cc2rW8erZCToENEWdUNSqggVuESgeTaPkXfLNqS7TncM9s9t874ShY",
  "key5": "hT1ppLRZsFm1mmCJ327NnJ1EeBsf22DbCQcMmqu3n61hmHjrQfeabM4NaZfacM6tseqP56ekChu9qsHyGP8Dctp",
  "key6": "HBYuNi4Xr4g41SyfK4kfM9FUz1F7CGC6t5WK1Xpm8GpW6V3fdu8pY7uCKPdrAE1DBbnuMhGUL9tueF45XT5GgZM",
  "key7": "4QmNazUZ7WjANuhvaidjELpRBTdcMZ8Dy1vvS1nY4BqfjRyxgKfocvsFMWHAyhwNaFGpxJ3RDaZt6fUDsHx3wSBa",
  "key8": "4HqoBjxPkrcv7241jbEKvnpPMRa4XXpZNx9GDktGMzFshybzeBczmSRiVzP7JeijvA9SUN4wULU6dh6sG3otHqDf",
  "key9": "4gFBYC18C7mQSrnj5izLkhc7c5ZWj9AjX9ddgzSvF9GsYSmfQAPER9voX6j2HUq54U3rAG1xBj6uV2Pt7asSKi69",
  "key10": "5AdQ3JXHyHNUvJno8QFCqAUk8BZEmmFQkpvSChN5dYcToyXFVvcmsc2gk1LhdW6pYEbkhDtfL4xYr7B8DmjgWA3e",
  "key11": "3ibNsGNT3T9Y1QVYBsUWHTfhx1rpcCrereeoNk5uW9q4aEaxsGwwywBFGujMufUhZN2FMfPUSwcU4zKRbuiuXRjJ",
  "key12": "4BkzqWSeq89gLELrnpVCTzeYa34sNfBNZLxRNL3MTb8wLURD7SfLKjSwJNzFKU5rAZ8GLJ6ygSL9pbCLgoubhQRZ",
  "key13": "3JgAyuYdt9FEht7PWn4dkJU8cRzA3FmfpzQftsT8W5ZLjsFXDqM7s7NKMdrwVt7VyvnCvjVDzwD86FjpH8v6M7Vf",
  "key14": "3L6ufjPhJy7SxCtvcVJFPuANuWof1h5pGd2rrtApeTvDhfzqAuJ5qYzTKVFNPv4p9Ri2sDfNB5BX8BhJgQvB3SGF",
  "key15": "3WwKUa4PS4RV3X1GQk6a5PKMQiZnCsMwbZAyVM8vNhJjAeCAqD8EaDoSKRRC8if8d6cjxjKbSX3TZLC4m7Dk9ncg",
  "key16": "5Sgkjcsbwqm2KJcWK1eK33o39WD5METoBC28is6UPCwWMAVb6cRjVxxJ15Rh9wiEXCf8suMdLjmSrb8J1UbHKd7w",
  "key17": "5Gk4nUzUXZCWBBUivYkhmVE7enYcTKYibUyCrsBQmKJ52y81oEab2WttymgtfGf958sYgEZFKDxegFxf4czTYokB",
  "key18": "vAS7rHdu9tnNzeAdbcVk3VoZr8hYEpGYktLRoyt6ZdA3u8VhT7XXPPVXMrHAQPMGZzsC7QH4n63m3UcJT3HDJHc",
  "key19": "2AtbisERxf8mow1xxK3RmrFrf2xd8po4ct9G4XuEf3RmQL9CN1B7w94V46Mj2j6u3AtGujcE7qFB3ctRmx6DrydP",
  "key20": "3L7yM1ibBaEarzeSz6K3f49o6JoRA79jvJteQMBqZsSy6fWXt6HPVqXLc8m1yVHzFgxR9a9uC1wTvySA9hWu58sn",
  "key21": "4BpPwPwQjQeXJnWKqmauiv5h63WJ1YVLe5rptFh7Tk45ZKh9vC8WDM1AsRAaM1VkxPinRwDc34SdCyKeckobr9Ep",
  "key22": "3Qz4KxXjQhPuAPvR4Bx2WxwgVLxcgjAm5Z6HRb1ERAxDtck5vBuMN91Hoaz34QwChivDxPe4FNHjrC35sgdo41W1",
  "key23": "5voV8NWBCPz9wnZFbFA9i8Gpe3ZN5NCUTLzaGL9LqV43RzxtLTBSJb8WbMqeLRENYTZkWViCEorgY55NnHLQtXbD",
  "key24": "rY2jn3fJGGfwJGJ47KR3EDTQCXARYC4xNMMNiemGV6fWJmH1EFvLuNkGt4ppd7ukLc2FJefo2vbyXjFGCLfjwS8",
  "key25": "5tP5vWDnGUS2xZwhw1jke7B2TxMh8AX5t1vE4cPUu6J9Sqb7ZWCr2k6Vx1Hp3AoXXov5Ro3Mm7zFdh4SzMEVPy1Z",
  "key26": "59B1jT6zFNjWM9GWTCXyRvTdgn4WBeGMnrnQQqHngfXxbVpruZHYrvKEsNHoZKYdVpioUKU3DU47d5kR763YR5Ff",
  "key27": "m1NAMmbiweHFavozcmSG6t4ArTGdDS4qJMXpPoGfpRX6YTyzsBaeLwxvcH5p83XyKTfh7cWfgwbc6sLsyfDpacB",
  "key28": "28wR52hPrUNxTHeHhvu4iNBjSGJBsL2tCSaFo38TC9EbeGVFAYxGxqrNPZk9GjnJtQo3pX41tnkjGcH8p6F5MzfK",
  "key29": "jcDK8JCafqtT4GHfspu67LvBpZhhgLgdG6WHBTmEvq8WcccToARxEMxJfJA8iaCtWX5UWxfa2oWpk6yXW6VVr4J",
  "key30": "3DbZKMN6sD2xTvc9BcUDNWwJkAYEFAHnRSsk61mER6crAVWFJEqJwJsFjJaWNA3hDPVrHFZo7fzX9LRNLUqq4rGk",
  "key31": "24NG4koDU7PQCfBkdJFvn8vHqjwDtVJeVNGfYuNfaQpSsqfnANFQRMCmA2BcNMA1H8DvNRLrzJsCuEDPXQujvfjV",
  "key32": "4NxnFUb4SaYo9PCEfS7XhJcnmXxTNyjmcY8eds5PFEyfwBNYqRUo93vs2SPEaGvRpDdtQAdS25fTSJQ3d7M9AVF2",
  "key33": "2AqfasPDyUxvbd1N7E5aP1ydcuNuYoJfNof6osH6bPaRNVdYM71sGuxjtMWNpTX5mwnuzo94cKbYCMZbkKGGNfX1",
  "key34": "47gN2Gd1osXySrHXQqps33tg8wZhVJ72huUjREogZPbVUhK5sfJaVJaVvQZzzQRCSwB6ahnnKUCmmSjoCA8skkKh",
  "key35": "3jwZHGe8GFE5hGWUVX2f1aDqrFtszqhptxi64XBWKKgatWkpkjFeZRGG7hVj7ttKpEvQHLNMDzk53mxDgFwfDQ7q",
  "key36": "5shXWvZqhffuBLYtUmBmXxJ7qSquWrU3aN27FTcCP2A22UmQ6y25kMbRbAsirCPjdW74rAeKX4osQQpbA838eWjt",
  "key37": "4XAGv3MHwLwFuQuoFVM1S7ka7Rr75trwk7dmNK3KWZoZpAnn6j7AVLHuW85NUPDRiTFXCwcffCTppxCaP1prdRu3",
  "key38": "2fw97MjQw1ZYL816nYBK2N9ZrUU3w2ruEnM8z6EMuvyw68hwSeg9jtcECBK7PbPMyFJi48Hd5Q3qEnt1gm7Mrye4",
  "key39": "seUuexwLqmN31ZK5R1NeJoqACqbgNsXzu4rM7yxjyQVZNetkRw15okkMz6NSuZ3QaSf1jx5WLDBe5DRMbXKQxnn"
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
