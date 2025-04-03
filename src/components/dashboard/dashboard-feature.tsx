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
    "5ujymGLdS7MisNJq73nAaUxLVAJsVoA3ja5MBuaobMoZKMTjfV4RfGhPuTCCPLQMwLmwdMworPJDFYsk76kYP1b9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wno2XDQgoAunwkW7VHDLPUa9Z8EfGktjig832rkdkvrfgbR4f4nq4ER6oX1annKtJ4KRBpPSB8cGKCdGiaC7N1L",
  "key1": "3G813Jyrn7CWS2KqzwHfvny2aDEF4vPjPiNy7RhVjWboHWJc7uDNSA6rq5j2siKdqUsQfXgSfJwZrfsrYoYwi6Um",
  "key2": "fM5Bj2qFgRDFkh2TddU9wm5ycVa3UntKXLSZA5bW9xwVG9SP7nPxi1F7wNxHcEsUiKT5uNFNgUGvyXsqAucFN9K",
  "key3": "56kn71gqkvh6mGj813Tf1dMKqd2HAEpnKrSv3cFMXH5iNT1V1ZNoxYohyxVeGTai1iex379bZqnP3ZxhEbkW4Y8p",
  "key4": "2VyTrf2iJXTk1WmcsgGTz55PeroYczCYuS7oaGKsx5BRmfUi6mPdbwxtkGc1S7bdFGixB1o74EyozDZ6rC73hKji",
  "key5": "5aBcCm4MmZzt82kdLdvrMby24iJRwz16Qx4FATtisBPPu7kXxExvWUxYQERbaRvWJ69URgs2JVHs2eFtQfXiVzqZ",
  "key6": "3GFMUGWhZLc54B2W5apdwYfBnBprXRN83m1HG1tFU9PgxLrK2UhpuEUCVadHVN7VfvuG1WQQsADt6TbTE3bxvWpc",
  "key7": "2SqwzpXqLUFkYkWJp7vSZjKDc641dKsdANyZvBuSbiDgjmpuzbvAeD4eRC6qA5e5g44D4Gbj3sBn3Cn5rXojJpZp",
  "key8": "3oiiFUcqYqbcitjWUzuF2RTBspJieVApJsSFyzB2VEequDt77au21zY2hwnrn25DFZazd996kErhx4ZWPHF87zJS",
  "key9": "5hypayUJrdFNdKuppe7cimzZZ7iYM9crNEQW23HEnFupJuvU84k6VkQFXHeLEGm3qKx6nauaeVbddpKBKq3oThZ8",
  "key10": "5rpPvW5eH8eBPvKC96bYFLZZLK5rVkp5XBYLWb8cZVrG8UTKKaJ9vMzhv4GZaeHiePQ7vUgFxNeThA1WzxJUWBLS",
  "key11": "5faDp9MACivvp2viCrdTUCiJuZ5RXSab85c55bjaVYFahTBB4yZNMZYJabXV4dQSuRgNBAj2fo6xA56TD16tEXiX",
  "key12": "5U4PRQAGtxhN6hKdkp1bjV7q57NrwbRJQt2nEKF5pa4XpbtXDHd3781Q9tJCNBFxAd7kXNwb3LzSSmYZYV5eDtSf",
  "key13": "2Lo95rs2LYAm7ehojhKZRNqJkJTU85qT6hFtB8PZLT4xhyLTHixksv6MkiuxJC3XpHwihsERTYRa9es6hvzJj4iq",
  "key14": "4gCEJQDsZxbRsh382m2v9he8owEZtbpfGqMtKczzUoJuXw31ajQVEL9ev3PiW5EEkCcVDqoZ2VAQdZvNN6vshKH6",
  "key15": "PC6D5qvEimNrT9sEytrXxdvkrKZEQ924bXbTeY8BLqfengBWuEEZ1DJgbGs3rzk7ttoagf4ehwPkRLrbeGgwgPq",
  "key16": "5TJABKQVR4JaV7xE3hCh1fuC1bFqbvuNANYbZXTVGTRk37yuHtb9FrHJFijPSHha1AKaWJSrGPxUZA7BUAHfZFS3",
  "key17": "3Ffqsqy7y77fsQyK1RmjTiTk9VcR67xaJs9vEDKK3MYjmhjTn9M1GeTYHF6A6CRC4SxpD19dTkAfMfL6emqzGmtH",
  "key18": "sQdTYwcZ6mgxk3NhiwAj89sAe8ok223yEYUtRpxtM4YzSNWBMCbXzaT1iu437B8pLdaYphHLBpFcTmisCybRt8n",
  "key19": "3TK6rhFCnNGLrqg1UtcTVmYYd3FmEnoibgRiyAtKLG74sUvu5mWPThqsSqSK5ZuKpRZ5V9sTFPsCANUUakiKccuY",
  "key20": "4QkFbHTVAjRs5FKTPnXyMaBAtVVVXDe3B93cH1CMv9pXjUCebTEd2JJSm7pisApoG1jzWKnQfMXJrapwZqGCBMwc",
  "key21": "5ELjPD61o8nkDZSQsqFgwaScDVQxG2Eyt7EyE9BJskhfwCthSBxggdes9x7myexdrYwaHgqRqwUzDfrjQuyBALWe",
  "key22": "5sTwsVNmJCCDaF8aujfkPxDuJXfLBYR2fQpvfpYKfrNDyQNezXJ9gzyzkKtfQRhdQq14vxEZ7BwG2KeQHoGgDUQ5",
  "key23": "5fw4VhCgepbfvgsoAFevr1owKMQUC3az5JnSK7yMwHjZroWWvL1C5qhZVKng2eGnVVL2XFkf4bEHwfaL9MfX4ink",
  "key24": "2QdpBenTCEWQexVKuGz3rWk9CTMHCmkiEWVURkGxZSQBxxUnjLMYWDY1jfSsDwAzmbrzEadP7hNNemXQAr6FrLuC",
  "key25": "5Bvar9n4ahkmQbLk2UZnVLqZtoagL7tW9pfq6Gs8hHgdkLUVR2Xr9tRrkWHHkrrN799DyGimzeheWjFdMYbxTRYg",
  "key26": "2tbRhHDgW6DqYiuJMxk5eGAMq3rZtBgFjTAsWX573Y4Vxz3qVorUfpw2ZxdBkRih1RU77Bf7eXn6Bhjx6SghrdeS",
  "key27": "5XcyeAxpNzv2gQyQ5di3U9oeS5SG4wboSywseE1ojBVuarhRx1GaFMockKK9nLB3W5H4SW7dVy8nrisT6QMDqdet",
  "key28": "2XhKrLPi6o3LEPe8HfMPr5QduwJxhs2wUSpi8jC7B5n59cbTfNxtoKaSJx2JA6rFVr7kpSTBt3eGRm6AX5vUcWuw"
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
