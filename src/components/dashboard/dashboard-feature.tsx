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
    "2Zvxp7nzz4QpMDFknFBh81s4wvok7h9Fvbevp68L6jxxJC88Chb9rWeSLKBcgZkLWiLwSZ12Kjd2jkV6JjGQQksc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K57zyZPy7MiRpbeamJWHyicjWL5gFXXRtwBfR1ioPqNc8Uv5iFiVCqCR7FeQ2ZbtCT7DA4G8np3qXkiCzsADgkY",
  "key1": "3UikoA5K1teYYZ27JtXN4ShggCRwsMuJXqyjjsgLna7bdamFF6QBAGNU95dHJNSVKufC3RzznTpn8Goj2HX5d7aq",
  "key2": "5P6PVJVd7JpVE9dAi4bX6RtgZDC5L9DXHu3shcjJTK1UXmTmr5vFAM8TpiL2T4MyUZycL15vTWjy3bQ5AL77Un43",
  "key3": "5SBw1y6bW41Wg69Fi2Tb44ZSocpQ1qvNZeDL6rL8ZA3vsGtqgpw4Q37jUJ2AHSLciTp4SytunpkH7ApoP6vrSS4n",
  "key4": "65Hnx9RDHQ8d5UaqAN531VjSEp8r2FV5g66KqnZAdw7E5moB36usfRrUDAUDkSgtrL5VuWsRVWcVF5B6C46v4dk2",
  "key5": "5ERqUPnsetgPtSsMkdugUUmdG4ExvLNwJ8z5uspuAF9jGGZcdNzA8AkA8ae4qA46MXcn44vhRqcYnN8RriMrsduW",
  "key6": "3WprxpqASxMsg6tYmGK5vkKmRcVAYw7tB6Jjo81kqiLAm3uL4toBcdktGDsUQdRbNyheCQT7rAkCR7ywLmpV6zxb",
  "key7": "2FGEamwGy12W7ch65cFQecCjHpUwhEjUZdiKovHqNqAvnFQghE64RGsctZkyyjD5WM95Hb1PkjBzwS5GYqaNHnRn",
  "key8": "4FHCogBUmMNxP5ySzpjaTS23CxEVhQPE2uDK5Ey4WB2i7w83B18aT2iEZBVkgsbhHxEtuiApbuppyNHbzfykiLdr",
  "key9": "wDESjQPHp56nJzWhsDutrxBJxLmcmhctWMCm8utxgHvGrTCp7fqZKf6otbKioHHTMisyQhy8vU4GbwxGnPyiwp9",
  "key10": "5o79ECBnRhfy4R8Q79LFkBUDW1bwFWhRcgMh786XQjQmJCwaG3P2hrq6QCCgasYrdk41ujBhWVAYrVutThX39uNJ",
  "key11": "5S4cVAqnyQs2K4yHpmcwTpHDJeboidr5sahqPSo6kmc8KKcgq8NWYw7u8uL4yAKSS4TFnWhGjrvZjsz6jRwjNUjC",
  "key12": "4E43puHQN1dWWoaCqhkEqxvNBAeVt8iCmuf54Vgvbg9NJ6RTt4Lsj7hJ8oZay2zeeUUUCA7Dywrf1qSDTtFzsGby",
  "key13": "hHinPXs8wiRZTnkvhFePMaFqxL1K1yatTfsPJshhp2L3wNomZxqX72G9mW76PN6JGxpYQStcD7ELdS9ry6isWRs",
  "key14": "49VbTSQGxmmyB43rvx7H9XRswQCRFzcL4XkJV7FyvzGLdqQKunqj8BHVo9NjdD6xE3ApUJPs1j3AMEFy7xC8XVhN",
  "key15": "4fHS8Wpjd4z5wsYhVFFAvMJmSQWU5k7By8qa5Vnh5Pne5LY88PBH9AQRuLWE4VPKb1ggejSsSBXk2VwjA8WmmePr",
  "key16": "218uhsW5YRY83iSKgSMDagedaJ2bEA5iFfLFUe8dTxemyzQB6NF5iLbhRiWAK79n4bm33n6SsXjUoS6x9rG6R5e2",
  "key17": "KZXjaFrZHFe16fg49f1K4Z3EZYu8evPapu1cB82CJcCLXMscDsKCxRwgHYaLkAZo4Z616bALYYqBmMXWrgM7vHy",
  "key18": "5wuzuANMdSbDgtuRtM6GGZBFSM4Fx264UyDkVKnz8giB6r3wBS7zbVgvgNWpp2dGjF7bYnKqB6476CuHkcW23cgu",
  "key19": "2CgiWgzRjhksCVb7bVK8tt8NvkXMm3PMseksbDfdHEpnmYZUKqStanv75yD7BEd4yyk6ztiBfgR27ecuLSbrUuJB",
  "key20": "24UMkfTafrdp3pCBns5SHzVV5WWY8u9pLgeK9WbDQfR7Z23ksN1mzsoDD6LLpKLkLZWnekgj1wNAzh5dGgZezX7t",
  "key21": "43Rh6rcmvVWTLqm5RRBYaBB9qVDQU5Qk95g6K2yf1MpFM3Wzra7BTziVYSfCY2rVWdNFYkMxWQgjfHcB6kZ5eSMY",
  "key22": "66gYMbgs6WrwyUtRSVwGLh1LMWBekfciKw1JF68gtTUJS4VoMEDAcFSbV9Zz7tBtV5T2whbMAAEVaL9Nsgv3Jh2",
  "key23": "2uTPP4dj2KkVJEPiXJmb2kdA7Pid2RjEwNZBhGYoguoqQ5gcyasPzCRkobQLL5WW5qDhTLpszPsmXH87vy49B6dC",
  "key24": "3qhptch8NX4XbMjQRd6zs51soofGe4jCpX5xMvagi7cLEPqQpxxide1wCbBThgt3VoY3GYcnXahCBEqiZb43awXv",
  "key25": "5XjxDupZis5gcF3FGKuTKc7xpUBBuqXLfc8fR6Xma2prsJ9e6NHCeXXvnkpT9LNi2NucCyp4DTqCuVwR9K9mZ6Sm",
  "key26": "4XgPhEdLFkUTbGqKPWiMYzHJnnQXRozKTDk1v9hYXUEmDVw3sks4f2hLmqsgrSbB85HCrTXoQMz8uTAseuaCxHAa",
  "key27": "L1kesWCM9UbWqTKiroy1E17CaaKPaLFvKTaBx8dHWmVZmztNheZHumvKfjWCgiXvDWj1T8BVeYgkQt7fHLFdM65",
  "key28": "4hoBY5EpvRz7TsZAu5xe9ZHtJ5r2b7TN7G72Pv4hueYs7JkTDw9dXK1MAHxPMAeKEgsVaw7vGgKFjHPaNYFefPoh",
  "key29": "Tf4xu5fVzsGTbW3yikHT8eToT1cduBwvvxm7KbVuTekTGtai66mngs432DPXqETmLk3hLRB8t6PPRuhkmJ8eoeY",
  "key30": "4SXnHiqtjGrZWY1dLW631cKTEvC9KRwvY5L2XdyXVQdgojjAx4fk8Ppw1k7mpth2p111TFdCUN3RF2gGs22QGrhz",
  "key31": "5dvaC4BCKQY4FpTyMt4FTihorEAjGvZ6ZXcSLav3cEwNc5g8j8oCCRJkPmQTTd5vMdH6sBoTT6zZ8LqAL7fYC4UM",
  "key32": "5xfHEexWeuhAax2ay9wyq2RHo6BxSWpnMMv77fcRnD49fd9nJSQcpeAuV46EzVoEbjYq3bU8AZffYLrHxm7c6k3s",
  "key33": "3B1Cb1wMcqvZFaibnjAeTtWpK14rc2xCLmKVfZvvrhksBMmNqHFyHESRYDVcZr3wZAePEpRQzS7njvB1tqnbRpYy",
  "key34": "5KbEF3d8GYE5u71DkN64ZK3vXYuL3NXReeEgC1X2ZKQZwPHafpogD5ZgoHqcTkUumuJCdF82q8RbFQCqZTJ8FjRz",
  "key35": "3b47bTbMSbsDGuXtZGmRx3HUL2U7nKdDoLGMjgwir3bW7MK9nwxK3okp58NnxyfB4eVg8erGTHqKXENvVyVZJrkB",
  "key36": "3VCTDiwNXEqvMV5GY97c1WH1Ns2XCcT97BVcd7rA9FVHVraKXJ1RmJuBWMTzgLBgJyxXEJTD3EHxUnLda2YUUTxY"
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
