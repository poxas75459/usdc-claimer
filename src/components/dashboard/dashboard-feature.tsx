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
    "33mYMZLhBkv4qQz3kFUM8fwf7n4pSyEs4eTwykZm6FiebCzmeyeHZNZcrdBXp4EdSDiM1Fqcey5ENQ9jJrZ6zNqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TVdt4byScfzYBEDXhyJoz8cuCzr23hiy8jKpBjxVqjisvzqiUNs6iNZpjDrzt7QDtepotnEdtkeERFzriTWzfRV",
  "key1": "84i5gCJkeDWbNTztCwvgk4GeFHxvrgxMVSFepiaeJ2SzmF1CAa1tVRWKdfuTHgm3HQMU6txbygM4dBKSexosBvM",
  "key2": "5jSKf6eqqZR8BbwSmhmb5teEbUkXJmy7ETta7VfeDxc2RMeYniCWQAXQi2YqQf4VxPiAUvca5aBvXSSqsJYsqNJs",
  "key3": "3b9e7nHDWxzE4sqSn8C6wVefmUYefwFjTCcBc5FHRNxJdtmnD4ienQYP3RTSDGUPxBSaF1FEbnDLHGnmpbZeHqVm",
  "key4": "2AR29XJVe3X3w3sNa6eXUSW2a4adaro5JbvqbEpKdi6CRhXZpKfT62HfyFtFVA3d2EyKaddchhYK3Mr2g6vbk1DG",
  "key5": "31cnDqkRGY3F81nSLM2NJ49Tjq1DRTtZhjcX12eUUCsiTiFnyqp9eQAFGt4NoA6hin2S43oyYzr11GQApPVCU7Fy",
  "key6": "39WF6yELSzpAF6C5dv8uPrvxGjMpCi3uiveNTz1hN7QzYDnF1H9ZLxsGGiN6Cv8F1DB6LWPJumBtqRb5ECS83zD7",
  "key7": "5spAa3PPa5LWnmmXcS6JMjhTJX7qZMVjyUjD3Ezr6WEwe74bE99JJt4JSnmjz7rM5BLh3jwj5PUNbZpPNW4fr33s",
  "key8": "1EV6hsGvktEsndM8E3jibWgsTb1SJvQPMRADU3EDYaWUuFvz6rndiDHVqkxvKPiBuEEYv1C1edBas2mVQWqEsZz",
  "key9": "2hQwpqzvcvwvL1oC7t9ZdKfcA5QRoCPNWVCZauCvMfYEouur6qjYN5g3LWESZLQABXjH1KuwSedr5PfW83GtYY2W",
  "key10": "MvTYs8zGaKXcLpZhiLia9E66BADSvtxFBwMSbW2M1tVEdjGGcQxjpK1nAAZj6Rfn5H1W7xZEYhTZSmWCTaRhAcn",
  "key11": "3eDnVt96tkLpNFe8p5QdfLLB7hWq8yradMj8xTRoCavXZ48jqwY6gin6Bk9JvVXnEbawnEjf2K1rhCgJDxx2RFPb",
  "key12": "5KQ8FB2XR1YggMsc2k7Dwpm6HoVGo9fq7EsWkQ22SRx1nKfHJZVQSYCNNzgSPZZLCHtVCo6bTVtb9xwMq3xnwbNn",
  "key13": "5iXdEzB7WRFDuagmptNZVu95R7SVgYFNbmTqDaaAr86YEjojzdoU7pRdnqEQZK545Ty8L4tKYSiBbDiwhSzBhZDX",
  "key14": "5ZHHr7odEAjoZAU2otgCsJJWdZHVmoWMXqjm7UKbqLspYgx8M7Rju2FcyS7uMQdxikeWXcg33pWTdmCF6yehZQu2",
  "key15": "53RMEo6bVTuehcfV9ztaEf6A1zrhA2ai9PkC5JP9rUfJZR6LdNfE9pWK3Q8knCQuEH6WTjUZuXZ2atG7P7P9QjZ1",
  "key16": "2kR4tZKm8L73E5AXUKfQ1VXMgJfHh9Ae4Tmj33JrLw8G1n63bWi1EWpXkPkJrCzGBiW4xosZ5t2zpZsMjwhV9iFm",
  "key17": "4tH8a4AsPwn9Uzd1a1jA9c88rT6bHWAaT6JPtgRmobc7WRPsTw1vSsjLQXa2rxa71bavhv2a7uw4xCEtLjmcw5Wh",
  "key18": "63aNmuwttbBgrYy5GyfMtMTgTdbkgNsQMHSbAPVC6cAHbs8CgbUbm5CF41E6GU4qu9C36trivs6kn4Je8mCggGho",
  "key19": "2LxwQptGsWvcvSt8JnD8eZoZfqQW9egVPazHMwcMZfFeHmE8WXRitcPYqjfexV1tGk6mFRwzDA2N8u9ibBzkDzfp",
  "key20": "Z8kqTgZForLzt5iHju1gxijTiDNrR5n9xeU7LXtVxJnauM5pRbD3gMDN9pQYDydbtacy9oW9ed7VU4XMWG1jh4h",
  "key21": "5n69HLC6b9cPCkDNU9JWJZ8CV3GuTgNmnd7z3UkDPfYtDNDNWwwMHQY2B5jytL2hwk6NdXf2KaZtziCiRyw7tXf5",
  "key22": "4n7nXTsVtGGoPWPZwJgyj557EDS2VrQV1wAFtmzqWQNANmKxPFFEu1aoctUzLKXsXLbm1ia66prg82xwZby4zuHe",
  "key23": "TfJK2zpBh3GnQbW3HFJrsUbbDfK15zZKkSwLPRkaybgXEMaEh5n34Q89ZTuYDuvXQbggPykrnjW6uMsvJo9KZWe",
  "key24": "24SpuVSsN3ZBmQMCnGduMLKuUHd6rrsWjvVJc9g3tpFtzK66bP2qJKtqysqXPEVmpaDr5rM8zw4Uu8DwitoGvCpF",
  "key25": "eVsMtykZUx2Na3yTxUN5FSk28fLZEFepjUs557Az6ecBDvmu5TekZcAoqoTUtGJXFm5AWAUVkNQLiBD5FA8eSDV",
  "key26": "2VrbeSiut6mNzdoeNUEc9Vq4K2kwX9K12zCZEyaCHKzPj2BoALJB4WCcmgpHfQHCXHZV6NN7ULqkmwPpEKuivL5C",
  "key27": "2RysDpjNWnW4GjRXPWJJPUi4e56j4FjH6ogjGmti4MSefUWoVp5gGHXPTrPreT23p3cRGA4qsMVaisWMpBEhpGZx",
  "key28": "QxtysFbrygyQKLE1bDvm8xfq4BW3tXoZij7dUMKZW621TfZ9ngvm8TjfNBD4UwZ7gQ4Jcvm6oAASy8LayDiEC4k",
  "key29": "4uZp7dacyUbLf1yyPXvjCSuU76ajRd6vGmB2u726bEt9CWrCjicuP1NHTputAABkgeTCLDTncqUjmFEytdS6Tp47",
  "key30": "47XPmnoxEuQT2P7VFAJiApLC416geBCPnFmhsz8p9uf17eVMGYakKpXZVrHkxdwwHv4mGM3wjobUBgN5JRGrH8iD",
  "key31": "3CVECmzKuxDGHQX8FetK1ncWCGRvQ4a1cNKneF1zjzutMMRoFSgXxpaWJ9qJvC7XWn7HLJXUnb2vqAHJap59Uezc",
  "key32": "4FdiBF9VHurjPZNGtPkCmqP26x6ZqVDkya18s4vYLthFLzAwWVuvJiqAH11HzVYfkhvMxNNrV7B5KPupAU8nJDtT",
  "key33": "NLNfV2z8yqnSxuzAksek9NYoJft8GfdsftFTALKGJX9wJttxNtW3UTs3S1m7XimZpUGXeDEE1nRf6eNKGVWXqBz",
  "key34": "3AhoXVw62AUPDByj9hPnshCeHedTuRkA2dxzSUrXWUEa2p6fAjcwDk7bgoJ28HhHVNfpLY9f5ooW4Mh7VugjuUUi",
  "key35": "3Pjt4VbCn2HrrsNLkKiHBzNgxBNtkU8KX1hYpkLq9iDHxkJgi72vKYtTXbHP6Kby5rS8tVNFnMipwhdtMWgrU7E4",
  "key36": "5RYrnPWpnJVBeaL351EmBZX3j6zCmSUEmyhxVj3hgsKphbA1XX6w8SQNwwLz7catq5qnwrDsk7X1QWhd9VhK19pr"
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
