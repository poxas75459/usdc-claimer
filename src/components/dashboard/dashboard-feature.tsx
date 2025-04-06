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
    "Cd7rReqKVaZfDusSXAqovUYQQJiQxHMosNfY48RJQGm36x7srxgg8tUp2HJHzrKANTqXHSSzZNEuL3FDXgtLRb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fEFNC3gRYVsZu6s8FMsyNp78nRoAVBoHTMocw4fpCPztMnoK492GaqziptxKGkQm73wTABn5Xa5RmkrTcPnk8xC",
  "key1": "3xQw4mX96UMDL7oA2nQNcaERS2yVDgYP2eVdNkLo8d26pxTtctTdFGmTwbsEkAUL7wURTnCu8isaQPwzUCd8Xo4s",
  "key2": "KSD8U1dtHkv7fJY3RZrWCiknjovjPBvpwt9ZnKrMSkANaa9pn2au8LZTPRPuT87XQpggM4GwPMgxMPmm3n6wnx2",
  "key3": "5D2S5ESRNCQGEebV6Q9dtjsr9nUiBJKXyUncDLBLe74j7JXM8Zq8EiVnXWpZK9DYDrPXnw7PicNev1c7osyTu592",
  "key4": "4cSdmS57YXuLNSMARPqG5TWywHLwcD9WDpXymNRfUcsgadx3J5W1rzZAGAtryUJuPLdMq4zRKBgfvq8TyxX8kDmj",
  "key5": "4NaL4LxVA1o2CuEWZCM8qbrer2NV1TJawtv9kQu92fr3EHBxKCupp9ABVAfSFBPH71WPq8yn68rABfQSGAMjJauw",
  "key6": "3SBBeBncDtDyFbrxcaPXT2G7eJvArkQ4mSqfMzuCoJ63f16A2VC3icoKhD81myfb1D7DJqUn4h8DGSa5xQzRvxg8",
  "key7": "54cH1gfRzdWQQjLdGhABy51vfa6zbbB3z3uwBazrawLN5my8P9jG7dXHGNqAhuvqsLgTJeNXX5BMNYxRNWVym8Th",
  "key8": "tunafTcndppUfYvuqL83SX4gLPu78j3brtUUL6ZboYteD3mokdaDEPgC6chwvXsUchmFmJhb7W4huCKxF2ACKWW",
  "key9": "5yfDiYpSM9nXnvD5WQ6gHQJXSET2bzSj8phTj9wgE7Q5eR7uwhmb5b3pozR88AtYrWcQYELXvyfL8ANNchk1Bzwq",
  "key10": "RQCDzY7uq8Qv9Ct62LWKs5x9pdv69SrVmFyaegaekj5rqLu9BfAhmWbz2c7a56zUtWU4qND7ZZV72Zc4bhSkUrY",
  "key11": "4R6LvrNvpFuT1UYRWVm9aL3uMn1PTFdB5XVorhHmShsqmgQ9EcrcBzu68oG7GT28aCjLjaLZeaWPfGCLtUnjy3DY",
  "key12": "2RwgyBv6GpmJkKy15zRsCPqdLrCHroXL62VGTDUmTQzUTJZEadX2y4ufL25PXFPvageqcs9TNUojF5QuWffAY3LE",
  "key13": "4DRqmKckQ2YYCzPmmhvdrRxacxpdkvrLZvZGPKWZCeRVmTY9gKzupMwKBhdiJTFa8j1cButd7gHHXfoHKiaxP3fb",
  "key14": "4B4Uaabx1wGRU5TuU1oaV6q6kvTYovjTKzqFSrozks4dpSByNa1oxSdFV9DBrk7xXwoSs696riCnE2VenNwcG9UY",
  "key15": "3nHxgvbAq6Zi6bQMjwaxqmYppcK1MzGCZkUpcQzn26GpkMsCodpPTLhwv7v3Bv9WZfzG6j4DiuTAsuAHZzLKkTrj",
  "key16": "5SNLMNo6vnKCmVQjmhP9M7KuYe5nSRXC8pb4hc1hF7RYfkM4YgWK84uaqrfYx5GU7D9wYoC9TXkxS4N6D6TBY1hU",
  "key17": "5Hmvg5DKKDhGWqjBHkTVfUVg4JpNBKsWVskCwJu6tLC7iMwCjP854mVHQX36PfSTKZR7EmkpWu4dGuc698Ai9ioD",
  "key18": "2Hy8kbZoeqaLjgmGJHB6zUVGbaeXUPAwbygQRJ2f42SoJbuUFYAwNEeYEKdcX6dg8ZKsx6JsSZuYzazR6j4Q9gpQ",
  "key19": "361R4jLZhYhKiBQiNYEzmaKwkXoystcger2jzohgS7ZHEc4NBAuA7YLB9PRH2aR6yVw4CYq1bF2yU2RwcCAki2SC",
  "key20": "4ZT9Y5eMAWxuNy1VKsa4jmHWuFjFo7cMVoVsrVgboux789TPQxZvkedYpP2F4trnhBGGnCcYNxrrs3LVF2fPxHzz",
  "key21": "2hnB6Y67RHRmHjLSn3HimHgVvonpSzaTp4hCkY7v98WfuGo5T3dnXxtzVWhgXkTu2WLZWrH7JeRkzD895L8REWCe",
  "key22": "495iGM5PouBxedEDiDMrENjLn9vLsmX83ke2UvQtt1zZTiDcEkxTD6NCjUyrCgr4h9i5nJd1jvP2jgHrSaTJSUwT",
  "key23": "4JNapWpaqBDhPpoHrcWYJnZxyBTRJoSZWx9j3VCGWoKRWPRmA2E56BEcUeQ3XUNdR9X4nuPDFZJs5R1iw2yZtKM8",
  "key24": "5tMb1XrQre19kgraK6MVtBweCf3ZJAqM6v6ByTU8Pzh5BHf8LQbZiE881rbDvjphw9L21LRe4Ur3rTa5P6m7WfMc",
  "key25": "5V25nQUdFgDFkQTNHLXyTo9vqKw3hJF11FQ9udL9CfaYSoKDAxAQvBnC5yGiqBsPrvYHCg9C1RzHmLGawUa2WGQi",
  "key26": "3pbf7hW42pP2Fru6Mrg8GuoNAt3SVoVp751TTALBXFe28GtQVYVGD3Eynchc4AdEnPDaLTD629gpzWHxRMZbSmp4",
  "key27": "CgrpUpsWQMUM8RDtxgFJbkgEfM6nCRFK1az3fgoJnMnLuGym4qeA6fLi2zPq97Q1mVXf3mGmB6kp4TBmjzJgZTB",
  "key28": "38KaC5oE8f3AEddMYMzeq7v5wXR1RiWG3sZd1BW5uJfyvrnJ8x314wX3bPru72bQahneAkmQM5KBAwJXGuf22WkU",
  "key29": "2j8f47mT79M5hVsogfSGRwWxNmz4fK7NvpiTwBAyHVVFubw2SCVZhmRQBBUAzZ5WdeFfBTDk2iZ6MxLxHLscZGPm",
  "key30": "3Ub5hERG75wpLWBkgTSPX7BYJe5NmFp37VWUPEJEcNACjehxSNXracmoZCdhLmZReAQH6UKxX1nfnyqTEXQFPCB3",
  "key31": "4MftyeqvwKeg9DnDXQeWQRnDpLD95LCUcJ9isW6zmFkk9oErEPTnGziPu44R9MydrzbcyYw795JEbiSXD3md7o1",
  "key32": "5Uq9AWZJeStkQoXAvq633T7Q8FAL6ySMXprVbbH164h1Zm7HppzEJawjdz9ZPgLRxUmJZStSeMW2cFiJ3KVkHu1X",
  "key33": "2R8V8eZxQcfKfhQhHhFZzJXaCYKjZvzJWMhx6GLzW17F3cMPy8CRNWyAYZAGwm68UamReuAXfLogrYiKJfhYEy6o",
  "key34": "kkFM3vKh2mTSBKtM56qE49vKAfBjkVxkqt3GLgfkpjTgfnTmP6UbewVzEiQTCUmL78kuqBb7GUdauU8q7zbnwMK",
  "key35": "4WHfQbGkMdJUhf7bHRJKD6KnDXAPQA7vmw3oxXSmNpBDK4d7jjnXA7Ee4783VC51RSLjwyPzqZqv1UqaPy6PW7V1",
  "key36": "2FHisk5nmrjRTXV4GRkKFHyVyzhK9j6aBzqa2yHREEN8h6KkkNpJ4ozFzPKUrbwV3863tAxzy78cSzMgtaLYbNvQ",
  "key37": "4JetfwqbYPy1AJHg5GwcRuGfzapGsidV4qffyk58m7QkG54N7BpwptvvBkMfweDCUmy3TWXUhnKBNW5wxjaRb29h",
  "key38": "DUEgqUgxpP2Eo9ngY4Ki7fpr4Wkxi9x93SCrmkFx5NJGkQTetdRv5nFKSDKSBxGW3QGMC61ECuUyZJwRXdYf7Ty",
  "key39": "4TPQ7sT6cCxcEYFC3ywKZD1xpfxf6bskMnMkgNVZyCiQyxfoFjTDJzF3m3SecpgZWuQaFUnYzxuRtuAghBuSDZwS",
  "key40": "3QJ24PkenAXf7GKWqooe1BYmsZoA9o3XXx4Qa5sNa6vrZv56SFL4V33RtqGEFy9AcM25PWLGyaBaH1HnZ5WSYfDN",
  "key41": "2581yBtuq2sgyMSzmfumhdEkcnhvFzxj9K6kwaZBmqRkfhMmRh5bkQzcHR5LGansSCb35KGbqYX9fZThypm6o1Ms",
  "key42": "5LH114Nv1Bgo6kTfUyEbPwhCcZho7AMfDMdihLgwatGL3cf4Xe9RHWhtNQsTwsKULRoGkV4bievNbREHLCD9vGK6",
  "key43": "2Ee3pseNPEx6UtX85GzntsuFtsZs1r8sNfTc48xhCGAuDzRe54p7BAwhB7QcPYuaEFKyndo62pepDqYJ5NihhSaG",
  "key44": "AGCw6w9X5GSRhs9m87Bm4epmdNMC4LmQwAhruoCuSh2EC9brYksA5ccHDeGvftq91iruX4FhhMKx8VBgyKEQ1Vi",
  "key45": "3aYdV2c7HdtHFeR1iaqitgDVKrJMJtFs7sZyS9XRiywhEhPHmjY5pAAenzsraAJWtdXXcWrnr5GsPMbfT8dcrzhA",
  "key46": "Zp422SxzrBXvFbm7GvZUeLX1PPaCSBCsRKWKWWb2sYUEuPTfeN5UpDXwbX6UgqLqHG8znQ42gPdDjsQWMfZbfm6",
  "key47": "4rXT2yLQ1quiEKrr7PBxwFtSxBkCiBL6SVTEc5Mi647JZTfv9fBLxnxkxs4jepCvoHQ1hqXQLiR6NDrM4ayKCCK9",
  "key48": "xBUujwBGnZtGse75LMh8h6fVaFCoKmRvgETXH916K1FRXWUh1BVg1tea95nQFHph98xhhAbeyKFemK9ohmZ5mjH",
  "key49": "4kLF2CzJUDV5LNpaKcn88SpuwdjrrfaBkRvJ91MB4euxmMXzzVD3BNwZWDuFaFmxL2uuxJkMQVypxG1YTq77joDj"
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
