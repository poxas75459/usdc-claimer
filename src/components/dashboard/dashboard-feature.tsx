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
    "3SfskKSqRfC8VZn7dVAm3TCXUaE9VCnWTb8oTdW5RBXsBV7qUPksGCKkLYB2bfi2uv4tuKZEBqziAA6KsgM1LsuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gpcXtmVWE2pLgn9KwC3BjKnwzHRfKnqYTTjwVsmh59jYyMM7rEUBcHU4huisJL6ZNNEdBbi3xkZZ5D1kzpDAhwJ",
  "key1": "2jyYz6Pn4xGGfsYiZmMeioguRBeCsL9pM4SBvbtzjLEU7EX6ETyb8rZJ8wivTFkdsduu1YsCi34dG7fZhpEvJr97",
  "key2": "2PnhEhe8dGa4rY56ua53eDnAdMxohYxXKxvCLWJc3wBCWH22djMkCSvZUPVWwEthRHZLHA5Zw5U2Tm85NSXyttzz",
  "key3": "5QieW2CCCbRKsTKZNBYzCjAv2H6QtSPyYN25gbnFPkFGMUum32rYwGSB8GNwU4rCHdcVc4ewnksjQ1ECUDwf2oBo",
  "key4": "2LPLnM4uS48zb9sA4NhpXvibQbSzEMLzwCZrRZPqzFz4BNmy96vbNS6sAjHB9rgXjCWVPipqBhC9Fdp1kjoJ1Zq",
  "key5": "4k9bj1b2tquAKpbTfAaKTUDtrTV3NZ8fDgSmseYE9kxasUFYeDBvGimhoVBipsaJmppsiQmsv3TMvaeW5YAYCtkH",
  "key6": "5grtGjGvB2iHLwrf2pDwfMoy2FHpo6XnesKPd3v8zS69nwTNYA841nfsNQPJgEwwbiBDyHz8JzfD1UH1sepJgZ1o",
  "key7": "ScFLzerS1RRyYjMfwtcLMWeGQtAdCT1oh5o5q8pVMyD4wbrsgipiwm6dZsHtEkNhEft77osBuLxewo4sAmhvmHo",
  "key8": "bx91hWEryDczRRy7367QvGmycQnEJzsAWodXfzhtyDRg1PP72x6t9XCCcSWzdADcM4Rez1qn9MuPH8qnxZ2H7sb",
  "key9": "66Dthqw5hKd6yxDuy2u6ihRbWqh4wUcLA1RJsxuHQiBtJHXT9Xtinwo7DQVwAFGqeZRqSDrQUx861V4qjrpEBSZ6",
  "key10": "4kC5mAS7dDMqfo8tHtXK8K7kKbibCi9u6fvEVjitGbHUKcjtpwHw1rHLuTxymjeAnUv1ziPF1Bsz97bojoiLApFA",
  "key11": "31GY75LwXy4gPzzcc9xGoajqGnFhqEgwHsDYuHFGfyJB4BCX9v6PVNHgV5YpaL2CkcTa5m7gFpg2NJ6szypVVYEC",
  "key12": "5EG9nLxGFVpr2SaBRv5Gkbr5Z3NS517Ko2npRWsofVtTghtSQ2JyzZSPR9621zvumKYGnp8oH7eWyDx4aqo5vidy",
  "key13": "4oMTfm9QZ2qD7PcxyYkqCkoLrVpxcUmELiE2mJYBadnTrngwky9BBR6aNAPtbuQMmovY1qnZVtjWbEyjiU2Z4ccL",
  "key14": "442U3cx1zit6MGmiFHLkD8BGQXqwvhuSEvcZmUaoQXLYdBDqeiJU3DTsR9PTDvAS7rryYYUwwhqyUD4dtFPJKfGm",
  "key15": "dnpuYmcTfJwb1D5AkR6smYyCS1oUezwPKw5PKcw1D5MGawqWUWRhJBR2vdb5idsX5DkF1u3rqFM63AkHNvNFUnp",
  "key16": "joBNNpWoBYaJADGUbopumGGQZFv9wzLPT7C46gtjMSyvkjZR8rtTAYtFqULcD4hqFxvPkJmSxqW6seWTVr6WRnV",
  "key17": "4oAv6RfFndbkqXacRwtXH57buyqAYcbnxVG2VqxdmAsRH6pTVjriYgWwP9mZMxGWzxnsn5qyX8pNZae5oxrbrsM2",
  "key18": "oetrRPx8D3c9C99ytfLon96CPuXbwK3hqVHuLnFCxr64i5HNKDzjY9m7A2XvvMVqS4YdiqjtLU5EHEtWSPUYLRY",
  "key19": "2pxM7KdmaJr3jRUktn6ZY8mRsR1KhthPeLkyEgfKZwW6vXzmMNV3vZmhDvdhBUMY1zboLnZcSdCM4tC6cW3kvrtB",
  "key20": "57Yrd6qJvy3mQMNHGwraCjBNxvcYeiHsfYzrzrDoBLdqBDc1adMBvdmYbcRo8GSmeWXAn3pFQcqDDGR8MSFNpJ6U",
  "key21": "564Es5MwyGwfPhDskB9nBY7Ghxf99XjYazkrEx121nkf8WnpQGFSH9xDy7JaAtYEp3r6R8nCJKtcR5X2SMmpjhag",
  "key22": "8jMfjjXkMc7UtJik6pgWLMiuUP54S5cC8YUr1esLVJGNac1bWq3yaq1j9Xr74a5bcNJSSgewTxNSCfW6Aniq4TY",
  "key23": "TrSsUSf4ugmgXyqbuJGKmQuyEqB4JKB7SXCUWtdngRuxDaj2GT9vmuzUZePDjVqK3VBemxL1G6KpFn2Sbna5C9s",
  "key24": "a7rvMHVGMAbu9ZMGuuQmAu433dzJHUHT3Vp1Xk77tksUEinJ5C2Ebsee2XA4TLJtecVVD3hSpLrJoeWHgoznF58",
  "key25": "AF4iNoS78RHr9gX42FzPZdeMmgmvy7Bgg36GDP6vQ7TUfxV2TcqP4cFu8LXNVhkNwegQZe8sXnVX3zkW4eCnJAT",
  "key26": "yGfw9ThFvALPQu33rnyLAXbr6qFiYhFbbeXKMLkWaYtMxV6N5sryuQq2HLhVf1ZoCeUysWFWm4frNSZ7LakwjTt",
  "key27": "4NBmAKjGFX6K8yAyD4aRtDR1WG7p8vbaURz5y145odnGL8TaX4w5ZQntTAWdjAjeu4EdKsX5SjjsR55K6x1KDdno",
  "key28": "5hmUVCyKEfwgQjm9DU2hrUPFuYLWFCqJnUDUiJhL78Hm51Sx1TquqUgRGjnHjTjYbXbwBv4ACacLrxM5LxLUrFEo",
  "key29": "3HMkpdjEkvVvbqcocyUzivGT2fNobmGohBDYyARvDHNP6vrupeQU4FynC8ch7uthvBQ3xLnGproCptM18sWf4ySx",
  "key30": "334zzgw69kuD2XhFaxWEr7XnMVHcsPdj6uQLiciBXzKmZZjgxkfk6i7m9hh3nCPJLqpN8fbpswy8E8XBozGYu2Ju",
  "key31": "4zd9Gmvsowk7G7krQqTeUnoxsG8yQarf9Wvn42GYGbEet2Q63iPBpjxzsT1BPLNSzTxhZ4RzHe7VQYCYPGWJtq9F",
  "key32": "5wQ8i7PkoryUmJD47auHF2b56jRGWxjaBSXJYeu8LY7cQfY8nB4GPKpVuPi6MvDYy2nJBmshvzboP1rx7roxMaku",
  "key33": "DnrtJK1cK47ZtZ4TT4mzo5Yg8roz1Fq8hqyAJX1oRNmSBzKE2jTtW3De637D4CTy8L8vWaSRPWbaubM8ShD5fCR"
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
