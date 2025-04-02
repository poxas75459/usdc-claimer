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
    "5NidwEgGRwgiJGwGYeFzBG7zxQ4G2DoJYTvfpvjQL9c3YWiJkWPgd7LT1pgAWPrEgeUA2iFaSoLScPfsENxh8k56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57tm8pG3XSgMY1qVT16yuVSaHBcyCicJ73oYhZuR85M1dJUco5jLexDJU644QsCH4z7xtoSfopab635iNBm5gHPB",
  "key1": "4VxN9qp6LmKHV7QSZWCMEkth9cdgo9X6jYxWHfHCCJtnVCTzLMynrqHmeUTUhnjosPFK1nUiFH7Riz7g4BvQ59ck",
  "key2": "23SZbCX7vVfUoGRBcPAnAojgSGfVQkjwhXaf3hZnvFQGLBnKxcQ5R5bhGQJFQJpuLKCAUMx8N2afkZiQyGcUHQPf",
  "key3": "3nWeE5ruYUtzs6YToLqBZBCGCJ3sFeWLJ3dbB6FNinUE9KhSQccCgyQRS6K4bBZTnFR2tVeGKrR7VFYYW1HtQ28h",
  "key4": "4K5jR6C6xQjrHtjDpwAw4rqXNrfPeEbXgepugbNaecZBDDaSk7s8TVHcTgEwHidavz3gGfUP7bJ9wK9y3UjA6S9q",
  "key5": "2CaKzoHmUU2CKACTnbhN2sQBbTj51PhSiuxvtQwjAYMMJPCuq3otM5pQZWyX8Dniystp1M6mRfGez4vc3o8JnWD6",
  "key6": "3W3c2rxVcAbjyFwX77UExFw5SG6veooJ2v6z3motg1QKydtLWkedYQnmWLo5PRMLFqpDU9Swno6ueZqt433rxApU",
  "key7": "57xTEkGjbhxk31DpGAZDyPkD1t4pDzhg5XbKZhmkv5Pj2qhib7HGS6hexNvhj6LV5URa6fkTS7Tv6LmgDQv4Joiv",
  "key8": "3VaHg7n4FZWk7W1tDvZnj1sXzgNHU8MmAxrKE9medh1fMSP5pkJw9Ga4GgPxCrubFBdn1nCQYNwUJtjFUGdZiqQ5",
  "key9": "kBj9Qbue9ePvHPuUZpLxzeXy6GKFj9qMD6yUViBv67xb6qKG2DXtwiYRoxh4YzgTK1YjQPG72Ye9EHLPZVrFV7e",
  "key10": "5kjEFNMG8M2GXAfhyi3xahmT2dU3vvdty1BvQLj7vyR12FXEkYFum6G3jgMdZcue8WarryuxBXqVMAdjutjcGSgA",
  "key11": "2TQ3EkqWSAQE4n1KV7uvXuPFfuXpZKctYUTfedKquizPXef4jrfW9z7XGhHZCr1Bbtxk2rPGsCL1gH6yk6aepaXc",
  "key12": "smCYabwiVYhiVKL5hk7CB398HRn7YRRAsgaXQJYBKE1zBViQyTmvBytDzm4D3so7Y5kSwjx8LvwDmP7vryfm1v8",
  "key13": "5nu7wEStaCCUGH4hsR6ApWVbaZT9zwBv442rs8Rc4aMHGSshTTJjeeaB3kwG8vFwGLCrLvAHW2jwAtTuuFEdHnkK",
  "key14": "3QSDoRiUaJ71ffHhZ9cS3s7aLb2ESxb6uov8ouQkveuPWewjeKmoQ65egvK8knf274yNhgso5AJuf6FYo3WcA9ae",
  "key15": "4HsSaRVn6BZaiLdHBJPh5M6g3Kb5zGmxtXVYNakaCfn97EMtCKq9wVAXfR2ikRZfuiiXWCn3syWJm9yAjQ2feQYs",
  "key16": "63RkgixP2FXbw28T8thcsxoiJxpdQVdonatS8DWGoKThCtsj6mijV4Xu2Feqjye6NE1dt1f4b7Sc7qoAHzcb9WA",
  "key17": "nk3Qpm4CVGB3AYHmYs6f9eYbwJ9Bdgs395Pi26ENZw945R5VaS53NtJzM9QbtnULLv4JM6eQUXAPgsVrzXrkzx2",
  "key18": "HUBmJMh3jKiM7FDwjv52hxEuLs3gER1ubGFv43cq3wx1uEg4SRCi8VSvPt1HDHM6qigJpabtJqArjPQEz3EagRq",
  "key19": "4FUjz1EAfJGBGMQPA8cFJM44AEZoQkx3U5FaAZrVyy3e6RSNutcA8rbf7rC1CgrhpseGo8AvEyziZHBXSb2Vm7dv",
  "key20": "49io7JSQge1L8BovfsSqoLRMyyXRg4tdnuC2py5sNYoivxCknrYCdQkM7GWUzuYyNcmX5b6MUfPfpgyo8UHxR9E4",
  "key21": "4TFtLrzmXzyYioeQDCHRn1Q9Dtf3qJhizH4fLqUPhN5CCHWbzUGj6NXpLhBkv9eEgKqTE6GxX6ALXsa2TWricfSQ",
  "key22": "MLma7inhVVcHn5d6QsbuYxi5bY11QmyQKnMLB9kbiXARq53r8fq5iCCgSXV3fiFHybcBXhEQWGgKYBGnx3A1sBi",
  "key23": "3VSbvb36pJNLqkEmcxzj9LDGPp7BE3mczko7cHdCUHn2QKA8j2GMF4ivoCUj7i4HLJ87bUDN8cUHAZKeXaXTftvU",
  "key24": "4A99jeFVriHxgSscJSHpJaHqfwbJ7SbGnYJPn2RJvMhMhcQSTecXn1uff6WpaftGz7sKas4BSZcMPVRwQvxSbKUS",
  "key25": "buYcAHpBkJ59SXcyYzWrR2shK2js1jbejesk2Ehmz8L6zQS2J2BDfDqYhWXpAUTtS5UMAvCS6SjhxMULq7fysp8",
  "key26": "4f9AZuK9uS5R2epgnTNcB9KJXY4EjaXc3quE9zv4v8TEruSM46eVDKacJDAbqYnLoaqZ8zW8hmbdNH9PSqUiGaBk",
  "key27": "aAYxvdMKkVojbDucF58YMd1Cs9VXbqdKkPXkMcM5hSPVKXd2Lo1bSPETyqGuBmHnA2SdmaPLBsyncXBpmjbLCJ3",
  "key28": "2tSc9W3NyQjP93udptYBkMZFa8K5cKhdr2oEhKPDsTjFWqejW5dsemBHRxAWU9SCq98XRi43Y6Pvma44QwBXYqT5",
  "key29": "5kLGF2QfkSzqn459jeawyQ41HknR8APvUS8LechhVWD4xeRiPWNT1xsXNnyR97DomjSaLWFypwEnZPXrKsAUbNg5",
  "key30": "3fagFHKHkR6PQyFHVpGxVdCLQWrFk7c3nuP74vnbPM4fs2YemY1E9WuHQLehFY9KPKL1insDG9FyubfMkmWPPcoR",
  "key31": "66KzyhLAkPZsTewQ8UPzQvf3YacGwoLNCNb8qicwVfdpTwrmyTCv8wLQXzxqCWfHR7QpHqYJv9ZRz836h38SGMYf",
  "key32": "3yd1WtxowoY8u7wGFLeixFbJ17mZJ9mR1SgXPaAMWcyq1MsNhCcMNj7vELd4LkQHi3HbypiSxNCF8LQUdJvyZSto"
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
