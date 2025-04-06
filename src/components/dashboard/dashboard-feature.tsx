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
    "2DaNEkJu6ZXTuQJVwesXVte7idEkeW8GfN83NJNJKjofE5tQMCFfQmY11Ddmt926v8Bd3BcTfn5PyqWucuLQA5A4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BiF8nrU4q9TZdHtwjQjQfS6diEnWxA1xfiNpBEnZTNoEMbLGDWa9DWAogMSKTd1KNQyFvPx7U4L6S8R4kHmA56Q",
  "key1": "2Jise9R2wJvDWiG8SWjffNVpzT6Qb9nMiRGL2cUxdXdXJagZLZMnJm7KCXgfmGdzGLZkiHbFpPehTwTqwrKuYLMw",
  "key2": "4GXtSojsLbqftJCnjm2doANkPMcyAhedgL4j82xmqf1NgDPi9aJ4Y6xk3621tKGdA8y63Fa9U2VWdmn8Hyfyc6rf",
  "key3": "3nBAVpAPuS55nsmTGNLafFYv9jHk6Gijb2J5128gnShUiRwXyuGdjBaTHaULAbqF6oQWAHoX6oGSS3SYmcDAHvaA",
  "key4": "53HeFmoPw5eLyTvT6LumdKZGvhPnBHB9nDDianhhvrnpwjZEpBgYXWSemGhth2VtpjekrwkJBMpRXKwqziR9wPhm",
  "key5": "4mLNLX9ZLvL7Q9EGikxKtVgV5KzjBvR4tfgLdQTFR2YDCSbQqiLzDSXXC2csLsGgQjRJ1MVRyBocpZYBsdxwrrUN",
  "key6": "R2ZYbzugJFwFsJzi64M8P8HQWApWkSsguRhPdNQBbJ4c3X6D9hVQHvFUsiSKWrDyRNHb3L3SNmrUYxnQsTUcAkZ",
  "key7": "4WAnwHNbZ6kJ77LhiMDVteGq8UQGCxjEVcZaYMgMdwi6pqE3KKuPz5HMET1VkEwf3jECDsfmYqUZLv7UFnJFHVcp",
  "key8": "66k4CjP33ktkHkscDwUztrbKKtvV6VvCjKY2bs7FCmGSiazTGTHyQSjrZaL6QhzjMf8AwhSocFaHvE4Mv6dvxTvr",
  "key9": "F2JSUhB4fzNzhtL7ZXizwePKSCEWQ9vdTdZ3KVqLmxh5ukaHof7TS6zBPbR1Vq7JaWhjxqxxW47hWoyFJXrgrSH",
  "key10": "3V1Kiizac4CAqmzHT86mKn1E558Pjtwh6CPX3iLPq37gpnchp7pGEkiGbUbvESD57spNFifAfce2YmBn6RjovWoW",
  "key11": "3S6eM8astk2Cb6WXTLHSZyjitfga4nKXVrzeihpeJ4rmJPqWuKqYGDcD4XtWqFLBZsoEotvRPqM7kfxVFPrfefz5",
  "key12": "484pShYAWUq7ZSES9JThK4aFXyvt8UGqcf3K9eDjBgvWvGUGZ9iybY7KZ6fPTDeSiSQpVAVT528z3YjEuSCaRa6L",
  "key13": "4xDVLkch2BbNWQj6UQ17MQ6cptjcqDg6UQGUX2o5iuKEWRuNZkrBiqzKdjU3fVjP3ZfBCpNB3dNWD12uMbz7raqX",
  "key14": "2Q9MXdHCa8SeiacYpsuR1rCXtVyYfoi9hwHPNBMcKBQ1r1NVjes9QnUV8BzkSBzLTqGuNwrFDxQfwyAaJFhUiyov",
  "key15": "4xbTV22bCMkncMy3JZAah7DvDjh1gpx3Deatw7vfcRDY8C3yEdmEVR5jeoBakBLw6H7MRruHaJQEhCXS1LadTeCP",
  "key16": "2az4QBnGAr7DwbmdbbK68TbdoJ9yNZyASesUP8esCZ5W7cauJpy5LipGAvLgqXXvYyd2rsUHxhUW61UpxK5E1HcD",
  "key17": "2EyRN3S281KAiVkY8g4H31rtxVqiEUmhpn4tbHy74dbpvgf3fUjQM4nybGLRdYBnUE2oM413UQDLRwwRAbzFuZY",
  "key18": "3xJbr5TcFB1kw84tpiad4JwZBorAZVcqnY2o7Pnb9rXhRwwMaWQpGUiQPd4AA2jdJHxkcS4VRxhhiWyVrATQn4mU",
  "key19": "3RfFFv444apiXr166Rycwqq5HyDhX7Xf1HofSwQrykk3c4bVzbqBw64RA3YSHBT7zjB5ng7EsjBYRo9BdHZ5N5uC",
  "key20": "2R6QTj8Z35w8fpdX1mdSMrH4CzzfWufKPaTXScnhVEJzLHt4HjJhgpHVLV2u6XebqPQKjqbV4ztgQYJijEUV36X4",
  "key21": "5KRhScV4htsZFSYsHWBATFNkSJjoMWLTx32GGDMUNnPFr8T8gd7kQw3jmhK7HHKoUMqL3Y4JbBTn2n8AfG2HnaZa",
  "key22": "5smqGNGz6ai5bz7VN3Yj6tfuSYJiwiGSA5YawNvkhSZa1Z8a5ABEcRaVSQGF8PrQmjULtg64Rfe5WAd4SkUWoYdd",
  "key23": "4XSrhvckV55EPT8Z8SVDh2nTQQjKKrn2LgUFUkAjXvG88qLBAAvwLbRfpb75SooH95RBLwpLLWZNPH67bLtv9nQZ",
  "key24": "2rGANenpTjyRuk86SatHUx5BcsBh2KXkkDBhKaKBdK3TDPo5uGLXgezAMAL8kP3SXC7UBisUCUGn9fKUJEgX3xKx",
  "key25": "AWMAexxpbAryx9mMHqkyG5A3ohEFG3jfRvqKB7TFvPx13C9TiSZwQMCZA47tEj96pGg6rxmDnYoLf2oz8xs4znZ",
  "key26": "58K6wuV4ynGqqzUwrPhn9HnCS163tcphSfDpbDyU7bU8ejuCVdu4NvKhfWHi6WeUhjkHSYa3Yt3vuoJgQjmkP8zU",
  "key27": "3iVKwpFPV4rgSXzoRgz1RhCaWhaNmFF13uzAXzWUVBxBEzp7qMr8G8Z4vDqXsLfq6LSusQ7yvLQzGXWEswDPHMEZ",
  "key28": "2JqPjH1G2QJe8rWYSroYrAxUCmiQuXriaJEGrbas8ag6CEpknXUVoyuxkr7Mni7Z3DH5gRRX94P25RJzyiCfWrZg",
  "key29": "48vZumdbBSMacDjmzzZDmG37SFUU3G4AGGNaAEHCmVZNxKHaJ2Vp4kTj24cqngdAGd5Cwg7FsmoTvyMTotUe23rC",
  "key30": "2U1rPRR8hzn5uvTew5JQA3uhfq2mr8TA7dN6a51Wa5Fzct1WiyPEzeP8npwB9AzZpxD6Pbruc7wMB3Pj8bopqucT",
  "key31": "5nPGbHMTuHXJohPsDzWd76JypK3t4YBiFkZWLZBquy9awQg6ZLFgXFbsPndu7qrGfUPhvF3GYDZU6jio3tQ4HBJB",
  "key32": "2AFhuZSwjWaqT8QLW9D1xzV6RzuuwunSZaiUdQA2dFf8Ss3dhrRGvAZaUaCXrb3dxxDQ3VcXFZAXyXi7x9TQkJDv",
  "key33": "Veo1Bdf2nwNGrBjKWeg8p3b9U4yeSs9TwJ3yAo8PKPajtxw5jyxUn9y6s4TgaKm8fNokFPfoN8DMWJM8cJRAJ4L",
  "key34": "4bCPexn3sd8Xze1WUrJWKuw9679SNqTYAVBEUxeJJ6wKCpLTkWpBtfEWQPDqMFAZ5VAywQkhdoFxFNFGvGW8KKcS",
  "key35": "24GZfjVhNhunzrSFRjUiCBCF7tx7xsZqZqUyRwCP8DwPsXCfXcFamrNmmz6zbcgd6wP4aoc5LJDLPFaYLb4ryLX4",
  "key36": "4WkSGkv8aZWoyKkQjDim4QpxQLusa7L7uZVnCedcMFJdqZZB1WvJRJaAT9jSMiMifwiSScktEDZ1rVPma8rzm6HZ",
  "key37": "Up34wifhMGhisnK8rZnGefYRW6avg8HRWm9mNyZC7NR5EDquvVLqzwPhoMFqeBPkDmeYVmCZFQVaY6vXkNmwqk4",
  "key38": "4Gd1UzerVadTf4tv7P8wDF9aau4S9pBGryJBLjasp3MJma2TV4tg6C9iAWzmRsYpBN7fC8HjJxFMNxJi4c7THENC",
  "key39": "4vxR9anzFKiCDj823HXk6s2j6U9eTKEi5bcpjBjksfNLYUeY2Qw8iTbxvuyssDvHJDa2KN8Fq7vJku3MxjT8qac4",
  "key40": "32UvKJaLGNhzwqCiyPmZSEXwVRsRmNqiuY68icKbMgNm85BQXpnCjAgqDgiDS9GWgiL6yEqggMPw2jPf9gHWnRdp",
  "key41": "3dXWTRkBb2CiSfR272mDtC4ZEw88PLjc3AtJE2aHSqpc7dBZTx7iGQELADJV6T58TRMckGiUhRo9Ut12ZEmFATzr",
  "key42": "49PvYt8Vz8vu7sYgnnWJmMP9x82rqkwGd7L9cYtNHP5GCKGA6iR4cJ7Q3SN11RFSQG69xyKugxMAwzWYynT6Y35X"
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
