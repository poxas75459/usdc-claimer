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
    "3cf2Jj6F8m1FRWDdiojXBtKP1gg84yH9xNsNjFEu5vYsViSsEEnuCgzhXQP5f3bvWDscW7toiAD8UKfs24z27xWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pRUxRTPnqrdVXYKqdw4A598vfpV78T78mmLwQK6ZwggLsZXCRym6af6o2sfwUUiekwPHBYrfWELHW6TRBo2GDcQ",
  "key1": "4PXBFxdJYKx7JmEkLp9G9aW5hkCy3qSxRQzSef2uR6fzjmCKTQtKf9PCDDtevndTZT2XRjA45LZd6Pic8KdBHDXG",
  "key2": "5CQTuodfryzozmhyjLrK9xz7QfkznFq1pW39EfuSJixjidKgZq98cfWxEGd7wGC5dFevxnZYbas99CcqkhsAXwfC",
  "key3": "JV4HWE3HmD9kx9JQ9bhSpJgn6qBn8cLBsfqdBMmbjZfUPFTXwaV3xkhBjUCFU2vVfCbNn7ArjT2Ny7ViTTudBK8",
  "key4": "k7UyPXvfRZNBh78aSR6Wbv9EpE6z999ZqAhaeLhC9dozkvuZJuAY6nxi7QohxkRg8vo3SwNjhvuy2eYmkEu3dyQ",
  "key5": "sEBh9phUbYqVgdqMnZ66cGTiV5PnmybpcwgbXfYVPSpcHyZYQgKhkKoyZNuK7K13goTRcsLjdhAuBgqP1ce9o2C",
  "key6": "59F8wFtYGnpsUfj3PxbeMFbkj5PrBzhV8gqXW7BokoU7bi8c9WDWqyTcS7TqTcQSUNvJYtdh3sPbisGaZEszgH6z",
  "key7": "38WfeDQ6LkeaKBF31oy8ZnBRrSDdYAvYBRmhxnv18Df458ovAoodg3L8fZqZpfZUyfdiv3urKcghUR7T4oBuHeNZ",
  "key8": "2wP77vrKVEFAu1pej8eUZFHGW9R8eFMhxfhuNvTPqhiDEWzjsHo4Ka9DjmAGb8g7MeoQCZQ1FjuBg3JyDaBWAdPP",
  "key9": "5z4zp231L7wV9EfxbpoqNRzgNJBC2q3kV8KvizWaxZezhmrZNUHBZofzff18W6C2sERPnqkRMiD9kvMpBAUTDCF7",
  "key10": "2Gcsq7dEFYDVaXmgWX1kWsqXGJtfvFdnpNaegyS5gFS8sHoTCGkxb4c3znqbqqG4CvLjzweWhpXGU7uM9heiArsx",
  "key11": "3NH3GMEXZWHA97GReJokDDgqBq2rraWf5MWiF7MKd51eifnSoWnNz9nQgNFE5FPxEuG4MWTXX7ho9EenX2C1obTm",
  "key12": "49b5pvjHbtdWRMRkGy41VqPZgitAjZiQtvjcyEsZpLBaXxat7NB21ja551kcb2BGxjhMxgBPGBFEfdVTcrtSHvSG",
  "key13": "29Bb2duUu4rqAAaEhMozpZdNWDofP1pDUkPLaUJQiDLYaKZj8RFJbiaEwtwjJR5y7Fz8ZYah2mUmtLo2xHKrCdQ1",
  "key14": "qxFiNuxAD15sfJ4RkELXL27H8va7pyTFALD2SLBpq3xMFKPgkKsoykmx77JT7JuhzfL7kpkWYdu4GybVk76yJWD",
  "key15": "64q243zWyZHAiiVzGo2JWPzu1MF2k4Dz93vmphF6tPgyvnRZ1aAW2YVR74ryg3djzMcLr8URQJLoQFP5jguzEiN6",
  "key16": "3KYxowoxNkw3eNW6nJPaBfxcuw38UdEZVwSimhwAybwrYQRJL9r5KaocyPaZAYt1Tppbv7xJyCTQe8GSfZVPwUHD",
  "key17": "Tpn5T6QNbYTMtzXyKUg1ucd4R9tsF1qy3Ao49uM1SZ3TgXMXupKWHEvnw8EFsoUxHiW81T1R7mzhH85zerb92iF",
  "key18": "NwLtQif2tkRkG8BUceTM3h1v7yq6YGN2Bj1acSLQdqdav32PLYysqbqWv4EENakmnY4391Qo57YFm5jiLsjrAPH",
  "key19": "ZmAZNfBcowKFuYrhccMcbvV8N7bQMLWeHcZA4z1YzLzqf2EQnxV1cSKgQrtaffvSX1661thYt6xi42JwhLT92fP",
  "key20": "5zWDbZGFCBVvP6DwsTRpFA5hN7WULfLFNJAqJtfQZM8WmU9WjdkeDhTkRUM1moJF7xVU1QZKrKD3soV189JvpZdX",
  "key21": "67EUjj6pJQJjWH1WQgNohhwZnETjYJwrCFZD42XmDFcHWiDYzk7Qb49XeCtcgDG6g1mypM5fuKVBvbkiNELAZywT",
  "key22": "4QNcGDCm9bmLV9bHJoBoGTAjGdYth1BFyTwRHKTEmdvuTURSnVZVRjX8PL9ez3cTy695cn1Ad2seaX5wBdFZus3R",
  "key23": "3UJ3LkXxHz1mV2xW9BNpq3zjUi837VXxQh4whgrLUUWWVL1A43Nzq9RTLfCUdXabVTifmPsh5CW8gyrxcoTtMGEB",
  "key24": "5VSr3YbNDaFcsvSXpk3BkaERuSrPjzj2a2gtEqBG2HrFjiurnP3wNwfuExWXXavtPC3sQJ7WnshjgCBxzCEaCR1X",
  "key25": "CEZ8tK4ZdrUDDGUs5uJURDyeKpHXEwFZ8xi3mYtT1LDSfkouLqe619aZK1g61p7LbLkFACSecxJBtKvSi7qiMCJ",
  "key26": "2SmscdCCLVueSE7XZsQYyZHpAaJPvTrbpWMbL5wcwj2apEQq38wfmH6KNafXEXeZzMXnppUdGvARKVF2CzZTAtyk",
  "key27": "nY78PzjwVTjnGngBXKmo6vEHeoRGphSWgdLmzSH9GHfh4wNCde239YJT1XXZtyNNAvLhrMm6xe4HbPh7w8GVpEN",
  "key28": "3kAeAjzkeGxN9UXxmhVecnXzDX7VKB8SKTbJAzYp5cukhDUDWW8bvHPVH7scNLgYA7hJGKwM2kmkWbVfiAottBSX",
  "key29": "5PAT8qcEKUoJso9nUMoxybkBAJr1ut95CDvhFgZCF7bdm1za7dAQVo2vHMJMsDBdeqXUekxf8V98nDJqtyXMDW46",
  "key30": "2cLAmeSC8xE1osiwUNXr73JoumDgXn7y9DuoWxjrcW1PV8ixQatdGX46hRifk3syKsD1zrb8RFa3ZjwGR3WT4uT7",
  "key31": "5ux1BpivZCztA3uq2hx4WFE9X9Ve3rkfLMBqkMX2H48vHFTdmFCQrYytiuYwFpYYDno1nhFXHe2CGvLomKmdQRUD",
  "key32": "2EwzqDPCbnXWqTT7eiBopV9Xawbfwv7ocZaAiCRoKk2vzvoWZKnYWV6KgYTWvqxHs9yVqLYVdWqTrD5yE1HRT3cY"
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
