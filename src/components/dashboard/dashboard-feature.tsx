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
    "4ZJRvvtEzz5PjUR4y4ETmi7kkYrk5mz7M5h6D2ECZZhUBauL8PR7Tmeyh3Efiz2ZrgdfTB7CnJR5YQ1fYuWNEFZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jA44f1kgNuLL1N54hXs2J2r8JDzC36DBk5CnZitqFheBY275FRELqdwGCDFk9RkBRdUEDWVY9qP2H1ADmVLw7Ja",
  "key1": "Nmb4fT9dTF4Mj9whjkqkUuC53bjCiBW7JP5748m1ZLkzniG77e7LnhjU9pi66ctx8xG1rp7suqvsdTJvU1cYfne",
  "key2": "3j1QxzAwMqqSc9ft95omb1g8eGNfeD9HtwN2pPm1b35f1MSwqgB5DRJ6DMMRNM1Y5TgcZY6F4V1ZA8t9SmMhV1Dn",
  "key3": "64p49jvPkZhEq7erUUmiPh6X6tVnwthYBhLsn9w7bJLK3HXDRfEZsyKNAKimFNNcidEBEobJdxDJmKYD8oZ4R6hq",
  "key4": "4AZLuPQ4Pstxf6rY2JYyGUWC6MXDfSSUbzdxCkQASZufYF5aEiJp9Sf9QGGeFEzyBBUVphcaAGSbkh7NRtiAmGyQ",
  "key5": "61XCEQNquFMkj5QLxQRag8sZwCcQdJjqcjv3AnXWjPMJqCAEW9NpZAcGPuUw1d5ZKB3xWBxiTxEeYJMgqcSSk5nN",
  "key6": "5yK3pr13vCW2qDk4qik6UUCEhA9UE4nXWDn15AinQRDRgf18in5DLYWhd4vMEzuKs9bQ9P2u3LyneyY5CnqX8DEe",
  "key7": "5XjpMSy8miEHBCVXmuvm9nrRNdhwBAGmPRtWzr1PfhaSXD74ZpDrJvytnFV6ZpeEeLYbtFTAA1tt9DCGncXEChQd",
  "key8": "BhE7vm6rj6TFWrkqdZ8anwR3CY2vkB6MgXXQDHdMWCc8gttxg9U85jPQEFvGk6nWtDWxUoACm4h2G79E7op1R1C",
  "key9": "HcMJZEHisE6pDTHZpCCTbsUcmzKE98TaifBbdrAmkCUnRthvcNp2721VK6au4FbhNuQEVuYEa7YH3x5qBzSY2oK",
  "key10": "4D3S8UCYoWxy4RK7FaGTLkN16upjGmnVjKstZNQuEafnub5HK1SUMbLzhBW5m5YekhyWoaKLRwh7Neo8rKGW1hUi",
  "key11": "2Z3HUkmLvSpzy77CrQqdYatSJUUhdsPGd9o9C4u5iyVbpuBxLXfEjDmVVv7JicifHRSrgLBvdoJxc8zoeDG78htE",
  "key12": "1Wz7z4EiVbikxHiRWzqjVt6m1ZFRnv831HvjjCBAvbhwgh8vhuBsxw8PCHEarM2f29f7VMUp86xeozSpBcL4Dx5",
  "key13": "o6ULkmXRJXay4Uo9Jbrjjaf54ACevd4J7ATsNSF5QBgcZFvMpfn5ZNng8jgm8iaWjjVoiUbwgvr7KLA54MmKCX9",
  "key14": "2peAX9rnSHgeK7rnyTgCDd67aqppk6WDidwHrTRCFxyadKMceAenqknAWiwFGFssqfq2DYZVsdvAZUcgALN5rcze",
  "key15": "42ADNLmwELgyYBmrvv1WEsJcDmsPdjgXZYpas7ewqvCTrrjEkYCm1zqHSuHbk5ngeRggb7xWAAd9zUJo2dchS75u",
  "key16": "4yaBpdocQyYBpjm6eD6kgUTJKrzrfajRXjpRY8MaT8e65zks5qoPQpLh3oxU8kpNUp3UW8h7N1YpmBBGu8qDhsNe",
  "key17": "58yKpMRN773wHvAvzW1cBKpD3z3NTWYKXrxbP9chmKrXFSU5HAmtH74m7AhpB4p5fbovtupRjG9Kga6hh4iBq3SZ",
  "key18": "4dusKJ9dXE5SsKyqwXG3CxU6kFWkZefvyQMqRpycmbhfqigFTH6HmAywZE2g7weNNfKLXyrMc7gL9bekntDAEiyq",
  "key19": "3siW2vGX7vwyWFNfvJKKghAAT1YVDrULAj511sqwGhPeaLTP1s27v6qs828XkAz91Dg726KxFjWCR83dDjpFyyxo",
  "key20": "4GyTEQsCRt4TY5E4Qsc15EXcXSXKfodpwTKtHEd1dkkvvzRikeu9iSLghZHX4BzQ84LLFr4ByMqgPzewt7AbcA7a",
  "key21": "5YWbPgVXdQfj2M7xWGMhGbShULEbsdHo91nSrxBXPFcxQ3fEQCT978kxXfy3iJAoqp8wf5v9mYE71QFXaSKKQdta",
  "key22": "kqDbmuBFMSLZD2mBbX6HhvV3qwoCis5CMks4xp7GLYaCHQW6eVcZHB2aTpvdJTe7dGuNdPMN31JZgUUdfV5Gy5C",
  "key23": "3eJjcGiHTuUW7tuJA7Yx4rdrTj4jUxKe3cC4Lmd3WUdWHmKjpTTyvKLXf2ZjW9w5tLhgCeapRxgjKjC1BMwgDuEm",
  "key24": "vC1UUXpr5iBRBCtT4mUWHhTo6QYZJzzkU8yhjdNMo4PbSYD1C3RnwqX2x949DAdrJRzRXbopqKHrwUMshRxUCTq",
  "key25": "XeC4bg2BePie69HNiZQmx7mVNnZNeYFSJAGrWFaEXiF1mmJkkiUxPQwReCBWz956PFAg7tSBqFCkraym5CUh9sm",
  "key26": "2222jomdh5sP5j7nVe1iTCXkj7dpVGkoSPcsykvnNuZvuA2bxg8KtbfTJeGymw2FZ9gLzodiaFTUUMjyxAfp3uFo",
  "key27": "5EBVGrsySe26ukXxrvwDHHoWqnFYs1zrdWaJUbByQTfqp77ARtmZ55NrwSwq39p75ezaxJKjLBWJgsiRs2GZkWUg",
  "key28": "5pxaEe9WvUjVqFV5Hre9WPQziTQUYLBqjvozMro1mthKGXTMigbdo7JuKmMCH5dLjCArovseaTrPUZqFRNLSQRKt",
  "key29": "386Zskwf4NKfUqf919NoKoMcm3sTv3rLdu5h54E649qohpDzMJEEGzqNSxmohVXT9NkyjFp9CSktLaa6BZGyyzaK",
  "key30": "5G9uEeEZ2CDt8oQYZP7BZFS6prYy1Meks2Ftg6ubyoHN1E8wUhHfvfgXgub8MdyuNquHEmbQW4dAbvrLxWRGjdE2",
  "key31": "36Yg2krNCcL1jCDnZBAuKSAqTRDF2uv48pML2ufFcxfUDNz2AGPZ1dRNECArxKMieH8NDHWuBCSSmVfpVWharuQY"
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
