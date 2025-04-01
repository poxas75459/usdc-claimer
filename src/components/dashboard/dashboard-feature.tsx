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
    "2g3TSKxqfEj1vQU6AnvFj4uGVC7ag6YwHbCYrhXAoGXjAE3URnCNuMXQh9GQnmyXFbVk4xc3zMzzFcq7QWSfFz1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A7SXgbvhtv4QkRGs8WWsBsyZpw4U2XoVzGhFmCiFntSoEn83hCjhx29F1pUmy8iyPVbmNBEsroC7fRSsodPHtX9",
  "key1": "3phzikpVvY4E7d4oHKzybABEX3Effpd8AJ7YQ48EfjnxcLKNnaViA1Ksnm6yrT9e3duAF74aiKPMfGKKqmfXYyBN",
  "key2": "3iXw5nP48YAXQHvNrtUxhWAo6vfnBuvejzsXtgHuHKBCJJyXtgier95RtGRhV8pZtgtJBvaAzU6uztcJga3nnU2j",
  "key3": "4bRXg1EGaUG6836dxFXEYLTeDEHDmhFKUGYZZyRGzd1Jw5aFhDwpPQBmodMdaBpgnp5smZA96LZLZYxgo4uoZHVs",
  "key4": "Y7w47b8nN6opMvRzSmWiWvYnUzgBxCZJdRJFbLsdLpFouoG6LkUXoSnDQQ5X5DX7ht4YgSW3zyp7iNvMx8z6RX8",
  "key5": "3jbwSV7NQ66b5nJnixHAvgjrCNT5neEQsc8vspVYLLmZSnpprbBotoQhaCqtX4paB1n3LfjJyBQRfcKwrJpaDc6u",
  "key6": "4BSWfrVKZYVhoTtZiA5BGuxuhihVE4U1fYwTSAWLwjJTDUrEPw1ixXwCiZsmW8Ff7Hb63YaehY19NMHeccaptXAZ",
  "key7": "3UrpSr8uh9psafiFBMdDLmLcfnyBaQNoSjKYmkELdXG67Uyzb8kvTvZBUmFdQz3gSqt2Z7j7nmgiu82qmoeJX9vv",
  "key8": "3roupRRU7qw5BnphmyRhnXcheEG1XMgsyAed8A1dhqY4gazsr2D7QeTrwDMGZF3F78j8Np6pxvYehZzmvToWUVWV",
  "key9": "23nohuYs8Q2osDBQ62T8W3d2911abfvB23cUht2J5d4EXeHJHaFYQwZNiWu9QKUK44yPRNMZCNqRNPrTf2Lc7UGf",
  "key10": "46wy2JZUaRc8x2Xb9bnkznnTFHEGAUzAudA627L8uwatv3D4Y2rbqpTy8g7FcxALrR99aK5jrtRCtYLdqjP1Z9Uo",
  "key11": "5xD5sp3BHNvX9C66BNGSEALbMmPA9PgQXs4UnynLCk7pezNhmeupAt1iWi5U3j75fEEn8SAugBWDkp7KRQ9iL5uC",
  "key12": "36T1V2DbN2zpUXfvwWVwXhWbd1btkezr1ta1SvzUSSSBwkcsAAz41jX1EJzKLxd85ZJeuZwn7YWNFHd3CCuPRuk3",
  "key13": "2M94p2cWB6j83W4K8nYZjNrUf6RgT7Dvw6RDB1mr3sZsH49We6RUMh2yxbrSmKa5EsBF7pT5yEnhm1MALdMHrs3t",
  "key14": "2UUuUJEguGnWULa5GLiAYS2GCYMMeqXe5Z6WfTEsTnwzm3yPQzCf1XBrLAHb48oZ7tjX2kAfjs4QZ6fHPyhvSHc7",
  "key15": "27Q2RXf9t4S3etuYrNrrWqxxgUpwYBqGoq52k1c5LDitS3qW8VjeTnPvwddsY7CzHnhZAcm4GYoPR7zjqK5wfJnD",
  "key16": "2H6HUk7WzkP4XpXSgeZcbsiHuDLepmZbu8W5R7HdvAPRBe1XEimPJjdPKZdQfxdgEr97h2HyCGZEpHAihf67dfQL",
  "key17": "cCAnqELYGJSSzeryHWPBex6P4tvoGcYGTtGFQLUf6hVc2eFkKhdvpUaFVNVUvXQ48R4wBZkvLfjnYuEXvnZvjPw",
  "key18": "39aQMa9yTPTUvSx8TjP5aG8FKCUXF1vex8JxDBcykv4knyAgfQFMu6rZTg76s7be5ChcPmfHnbj1nTanFybGPJWQ",
  "key19": "5u8FM9Sjo7GYg5J7uY5wNHtT1W19sjmkyw1N6iM37PH2FLz5VkhXNGVMHMd8ywxaLSBc2ihcQueUPd2fTGhJzFnZ",
  "key20": "5w3jgMo85i1F1S22zdJVrBicRKaFzTezBV38fQjzzQVEobH9CxiyprAdBjLwvr5n5uV3pYuTNsio3HG2mafCUwQ2",
  "key21": "23LKCty4G129gvfJUcJWatrs1eweu7qLFMifnAuiFFprFQ6xFvMUAoGPmjSQKazpxyun6wHvD7A1hyYzxeiYrTJ3",
  "key22": "ZtU7RDu4yKshen3aymphvd8afji4dpm6WQcDp1kRNDRcXMWqwrwLMCsVDkdvvaio96vP4gktvTFedLiTpaFnCxG",
  "key23": "4qWQ6XDB1FurjrgLXGtss9HZoTS1tvPei4d4pMbHPLCxEiBKvaXCGwxsGtySK2rbg79d5GNuJWBUwgAqQBNii5VQ",
  "key24": "5SefgbrdQLXBMyHabJQjmKawFPsJfkSKo5uuMXkcCQrCchZLJisL2cMUnckr5UV7FmwUDXuX5Fu9yWZ9krQqX5LK",
  "key25": "iZiT57j1CpyubnfixUdi8gzxQibghfYQksF8wxZ5KGft7SJM7DCpscjC2pKoshw2VCrscBbKQ9FHS9C6G9Ubp3f",
  "key26": "4eCiNjvyujb596j3oxQ9wDjQBusWboBxC7tQoz7pYwEHRFSMdYWfjYK8jahq1gFsJeuavyFiFZZ1k64iumTsLPCB",
  "key27": "2W3pSgyiXPjDgfuP7jEr6Cuu9JxYYopgnLtno5jKZ5oHjcetPFGQSb8BH2kuShFf8divx825VrcRnRn5ik2MbXqv",
  "key28": "66iWki2DT6toKFqWtJZTFNWAtA8AGco155ihE5B5KV4QVNpmNm1CUK1731xFxg8ikEwQTgE5bdFf7SGggEcDUUUg",
  "key29": "5C3VQ9hc4HqbfYiogByAQY7QKhrzocBaUXNoGqdmzaYNGXSm4utHHPKMmUx4fsgptmwVJto2sdRXhb1tzR4ESmci",
  "key30": "344PMbmRgEruXNWfPtx6bXFBZfyr5CWb5s3hVUtC2Yvbr26ntZvQb9GvYofx9LmHBshd5pQALRNkY4DgRDtDhGB4"
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
