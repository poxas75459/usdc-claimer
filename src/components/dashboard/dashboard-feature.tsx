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
    "3uveZSV6TYWPqcneJsM1wwah8eCaxu1175vLj8gYg3emGBaVf6egmUcWXiJCM5DfPf9kddus56nxzFJDAsNkJpNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DuJvcSkDRXsgBafNc4m3Cm8vxvh1sTdVhF564GxvTzNn8NDjCfM3LhLMguMTmM1xVBC2XahSot4CE6GGegoVcgx",
  "key1": "44JvHZ3ZDm4iyAR1snkAp5t4ZGBnn3MvLWKWMrcVku4GdReMy9P1RHaNwLH8byp2WPT7k8hVXrNUhmoLVpm2P7A7",
  "key2": "SSWWZ4X9x3Di3RAGRNpz5YaEExsvvKttzzNww7ESaJSFf5wyURtru25rjd8xvt4qWSB8SsQ9KDm6VnshGsUwVXY",
  "key3": "4JDqiKZTj3hoeLqqJcw2bchioXMV1JhKenFbX2jDcVSbR1rSp8DhndHSN4AU6S3B4xLBPmDiEQSJpeTN6sPVCC5X",
  "key4": "2rxGSACscyqgsg37FNRZr8Jevs8yWmbxdjEwvDZTvYBuMJZ3KucyXh21WyLigYZiwC4Pg26NfEjd9TUCg3zCiTMJ",
  "key5": "3z3aCj3jvzQF53ZRdAd1tK7j9osaFPfaZd56EgJAq9n4uCaqqAmj4tpn9TJ3mueNjrhxejUvaVXYGqnDp4XfEfy3",
  "key6": "u3qTURhVQGWwWfVuM6GZ9LrNRXQ8VkofrAwugbS2Htdk4RW4Ns428MbpnxWirM5UZuJH6HnhohiyXES7XZMNbD3",
  "key7": "3iLuHyjJVjnMYHLmtr5BPfVAHchgxuUSCcdkRp5UiSNongDbsbxztvBchN84sECYbjHrCaKygySiD73tQZFuz5Mq",
  "key8": "3SsQyVJVQAvLqvzWprcVS15fqBHDJXzG9oGheLNFfgz5hxe2SCjpHGoRMzFz1WytfFesN4H48XAJcRHdoVnzQYcH",
  "key9": "3YaeSSfSd9LxQMwPSjUSiWvqNdwJxg6yyx4WjdGCes5eMtE3GSESaeYaRKU7QtaVrqZntLwHu2NGAxZTDfvGjeJ7",
  "key10": "2izUmeMYs8KCV4M42SEMCsDHTUL4DytNqj2fT419tCcBazHSacABkRX58Z1DKjf1NufWUhWtJ5fxtbyFjXkY46gp",
  "key11": "2Xx2s1m9e6STLnk3AhJ662DMSQpYbR9hAcg3qX3aPAbCkgrnspHawSAhVaPtdMph3F4nqyaquHVDaWEd6LZvgg7F",
  "key12": "2e7vG3WrMGDTNzFAjC91NibNbFo4qwN9PKT6JCSxnEF9kLixPRBH8R9dM7FCG17c8urnnsJiK6wrDVHJnoKy9SSY",
  "key13": "rA4jA8AHutbdv3QcSPB1CuZ9oZYxNW1MEpZN95d3fGTBHPsuuKthez6PjN4XiAKLDFeUGuZCyEFYWiVzPA8fHuH",
  "key14": "4oAFkDogRQ4143JqfBuzCoMHPYLgzUokbuqSXoqNkHkVr197uzY2AeGidWZqTKPbX5Y8oUUQk6ErppAGaxh5UdDj",
  "key15": "2oiYwctw5moz5Qb7q44Rv7fn6ojMhbiV4Q35CuYk2KWepM8vN2wshTQiX28uYQk2Xf2yTNJJeb9oFieGHg65bQLT",
  "key16": "sTZWWfWDsJ4tgvvK494cpKZDD4i5NTbJgZDLn3enkCGzNDpiuSqhJipP3z3AzeAFcTjN3BrsYxq4ytRPQwbhJyX",
  "key17": "5y9TAaCczu7d94jxuKoZwxUdezTXyvt3dVahfFTJCxfi8e69V8gRmfdDtwbYhVG821RCV3RYpnT4tkywFmHH7ZcN",
  "key18": "5QmojSJpan3wXfeBRBGffnuj26YQZBtJojzgqRKPfFwReiay6rym5JAKHvRp9ypkZNVHMKQB2Mxi6Xhg7AgkyE9W",
  "key19": "5YB2Liomi8iCBymg6p7ZZj7dzSYKpWdhDNmkKYEAjvurMBZcz8vHiuMRRQdu7ahFynaP3RSq2kewWJqascPx42ku",
  "key20": "5YETxz7f5NKLWyScD6LrJZ2YY7undnqBcq5RA2WMLQ9KotwmNDkX6CfsH6x2ey5b5ic555DxHpyZtc6pneraB685",
  "key21": "5FdL8sekiC4wFFtiGXP95ixPhB8dQgJ5baq8mtJT3XEDMFs6d5M3f66dJ1HcwF27SwXLTR3vqqrfXJBzd8pcgAsz",
  "key22": "5rndLpTZTjjSa74d9Xzrmd5imsL2wMo3BYwkoEs6TKE4tnBnE6TpmepvS1ijGQqkaquzSTyWm7WYxx3xDU2RBc5w",
  "key23": "3RYQa7JX8AojUeZYemwrd2KGTA6dy51UvK34hsVw9NMG9mXPp56fLEwQpG4c2FukpGiVpNiEJGkgkybGUAynb5ea",
  "key24": "P7spyjcnvkie7rV3yQqLGPN5LdAQea61frwZJWvSDvP7ucfq8d2VuJFzBPt5phw2y74gT6VZftv1VMjH3PnCwf7",
  "key25": "3899GMVRgoKzw7FjzxoHFaqo7eJ6vqkWZaGQsSKKYFQnstht7WPcNvicAHYZGz4kRmsW4TfSsVs9eRdG8Nvoqd6V",
  "key26": "2P2zFpND6Rn7pUCPsj55qjEYG5RABD2aB1bVBQg8549qkw9L7agLdthykmqmdhWkNN2ek2bBZ6JAYsw9Z4VSX6Uf",
  "key27": "QjwWUZd8ckBn8CPcHnVaGVqJz1WAM5wQHdVvu79dzbU7JXy2omZDwSra81J1d7F6xB1tNshPLMV1jbSFUxvkkgQ",
  "key28": "2NTBNvCJNvxzZYCV35jERRpUqjWtJq3jLit4zCua3WMCs1BkAz9gns94RL2SyYgVHZJ5afjQhSBWinCkcdJgPuWX",
  "key29": "4yEBNJWqpnDEyDgX5pbVBnBXLM7BVhAKuFRJa4nnDPTUjtBN1d8uojrSpuwdgWophcC4xQrn3AKA1Tku3RfErqUT",
  "key30": "Y5zgoPx6yLtFwdVJATFuVnzJ5mtBD5DTMZ2dSDuneEEenzk4c7gV3MYfXysWgcJpxgcSSjx1E1nJtXKttx6ZVTU",
  "key31": "3hWhXFjXdnffsxxg6vSqUxap58rWtb5HcdtrqZJa2gJiacCiGMNGb78Qa54VByLaMf2DAMeoVBrJsXojv5dAeban"
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
