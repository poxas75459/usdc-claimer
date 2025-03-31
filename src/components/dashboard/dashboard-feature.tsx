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
    "348fMPqzNHxC9tGKuF3EbaPY1VEQkpgfBrnhppAAAcUi4zuBMDgehUetCGWn1noyLU6AhDsB4c38391BnSb26Eey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vtxASqVKHSGTzN1YonpywyZ8zjXSkvLTmLhp9NZjjWdJ23GEMHTbnSGPaag5y4zuZ6EKDFHv9HJ4qeDRd4mEB5H",
  "key1": "5wEFkEnNuYp39QQaaZvYtfkFLsDnz8qF4R2VMyebUyGLitjfzaUeCGyup5EkA8VHQWVNv68BbmGZF6bVRtrJpTt9",
  "key2": "8vY9UvMUkxqEk2dc3zNJa1j9Lojq8qt339gmdTEM4WQ8jnhNTCEZa4Z2L6aP6zESnPKxex2KfWvP482VnyXmGiJ",
  "key3": "2uovykxut1DTt2xBRxMjPAzLCQXxLqNuE7wiAWA7MnbJrynuUMbQHGwN65PcfQi34GtaRPrh7ZH4R2LoEHyd1Nkp",
  "key4": "2FMjs9sDexcXEpFYcoZ1jXtTTB4FhyoiCbs6Mrf6S6XqM3ptFno9Msu2uSy8HCG1ns85ShptXkovDyHwUBuHzt1R",
  "key5": "HgpsQVPtkLKtnd7dBf7AwRLmGVhZdmLBH2CjbWeQSLrMfVdRh4A4wZSQAPWxWJfxftMzcHq2vCqJG51yyfwkSzK",
  "key6": "53HAJ3XciNNVm6PC5CbVjCTiasuKxSXoQyTQvzu4A4et3QJNCEKv4HX9pXM1g1fGDhuegM53YsVmw59EtaZVQ3h7",
  "key7": "3C97eh4ZnxZ8DdtYZxYt4A2VsrAnDr5jbakSYN1YVsrRWWU1TQEMUPoL5fLBGoBifirvRG9J1mZYh9dDq7UHJCXd",
  "key8": "5fj2KJXeyLwpy7d5RhRPVAUzACg7vb8yBkLBpTLnPsmuMmJdqZZLaDayuXtswitcCfey9tA8ZtGYLLbYKEVigMiE",
  "key9": "S3TD2pHmE89Aq8VLFw146wNF3p2zoAUf3MzTiCxRw1wGVmyyP8M2dcpYVHxyyEYR8ThLQHscgTgJwPJvh2VFjwy",
  "key10": "5fYBWtSrsAtpc1XEzEifnEaMqgTw2wJXpuayeYK6RUrvKd2jos9YtZCErAH6jTJdGVpo5zShARfMtazm9CNNKi6b",
  "key11": "2iZH8LzYD8DzoaMFpdAnGdhaqAcUbwELP37XPjf1hs7hK9N5vxTghTzK5Wz1nexKqbKvfb3CyLQvRbBXppiF9xjT",
  "key12": "4UdoubLnZubNNLpN8KKrS4Xebf5QDedmjCZivdqHzzhFeNzu1LTQV8TftTWa5GqbYAKxFf5PSVd1hPUGUPUwPsD7",
  "key13": "4GNrwPFZpAsXeZ5K1kDpr5GYVuLjiw4EH6Sca2R3Swg18Rc1Y2A2KphCSd9magijNDpLRLG5DnqsFidxU26DCyks",
  "key14": "tpq7jZr9avtjPmL8bBP9xRMTTQtk6HBjhpkdu8VfTR6zcJeyLhVQyHAkLEew8CwiX38bESfAenhjCDNehv5hJud",
  "key15": "38yU89iaJsgnrNpz6EjetP8MUy762TwFxadokL9xkafGg7xwtB7zLrBj8hauws2NC6vR6Kwdg3GpPt8e7YKnMMTJ",
  "key16": "4BFnem2v71Rf7bh7R4XDD6c6GFuEr8uWoVfdbUzdsTss48tG8en3hUZ7JwhwXWV5tcu1yHCHizRU6eQd7DUr6Sni",
  "key17": "2TgXVzZh1hQqUtjnvdKV7vWb5naVVHC6js9UsbPfFdq62Et3iWJubJdE8dZA2kLkTM7F25BDSifbCXUTsUpBzsRX",
  "key18": "6FJQfpSN9XwqW2SxrnZxdk1MrrESVNPcMH4ymeuyP5wXsmxzD1w51iiRgfT4W1zgguMrCdzWuTzwHyjUC4gF8pH",
  "key19": "V9SXbZHG5zCT4LGaum8UnkM2X1JdThJwUWZ92zkUh2YJwuFjMcnMWWHT6yAmsTwJMEQXBurVPaddSb5SFvx2kXR",
  "key20": "49JgqfjszNvhcpQsaGnHbV7JJPsQvh5qzGmAvVQNiHTZpMNEWyNLm67To3aKcePmkxbcVGiU8Uk6NZSZVQdJiaNz",
  "key21": "ZAMm1FPtfMwJGUYtXczctqobEpMTR3af7AuM1QmquHKQEenGb5JwCUadFnKohHf29WpteFHyV8tCt8Bj4iwZahJ",
  "key22": "3YRRNbdJqcqNnyYZg9QJbRJZLtgC5bP713B7hPQ6pDiQSt9u3VpiRGfe7MvPAkzpqG7YMBT5NGAwGdJ8WR16BLcz",
  "key23": "biPvHMmo8Pb9YqUwVvoMP7jaesLqLJTnDhj6hZm95ES2Rjjdxr2fgtohoZ1Pcef14EtafF9p7j63oGADHSESkJy",
  "key24": "5q4YauoMy9pbYoP8ioD3uKbWHH2ekPTuzeiVFcAGuQAL2SMaTtEbv7hKY9A5JTkg1EdWJyg172hw5UCqngZ3vuqK",
  "key25": "36ee9Tk3MJ99AvSVWKiTReK1cLUm2AzpPAbWFSdZoytwH4fiBQvxr4vbTBig3fzRuGzXjHL1mRaySV8974GVNNZ9",
  "key26": "2ebNTYA5GVFXLhZCz8Ne1WRwt8uPFHyng212C94GXUYtsSgexPhjgDBTvHmGLKqVj5RKuoKmfvJnPKstquahpq4Z",
  "key27": "3Wr2KJFnVPbFFRrxEa7bFwKjwKG5776snKXn9H2WHwu4VoFiTzaWiwUsxNJubJyaY5y9DaMet9jWBWq9C92XRCbZ",
  "key28": "ArUB6U3g7RR8AkE3jYjk9jjHG1fbpjBDGshHsiyAkxhKUHHSB2bS7vtg1HkmxNoCZ4FuzfnMy3yZJkQAeme9SW6",
  "key29": "5shtCJqdHdNmhVVnVgcbHdC4K4ZxUnNFabYU3YnDGNDQqaKyKoKP4XUD6vFXwTTpX6TBBLX7yrBxQ43ZSn9DyyTR",
  "key30": "3nAGTNdaqcxkNM2UfKgfvkyDVAZK6DdVrS9MrpHsVajxCKQFiahT81sHZVa9D2f6frHdfMWde6g5caQpkcPeXVik",
  "key31": "4jRYedgipqrFWLgS5eUGUpZabtqHfzxuieyGPoLkrY9T7TujVuPNDgrXEpqwRXGWsUgDtLARF4E3QzStcoYhwT7m",
  "key32": "2M5ybs3yXxTiSQU8Mik7azx3H8ixSRFoRp2QmLA1wscinSqNkVgWPaKZXGFxuX9KY9qVK1G2JH9MPUJq1AkCKFgn",
  "key33": "2MAGXYor6vSuT7GK7tdYQJQjpr6PJZZFbrpj99pLtuRyZCbV4S54Yy8jzzD8taxp7Lwv8gTLyXWY8XMBvTUfnyyG",
  "key34": "5MwGZXXNcggvN4MG152bRs5mnFCLZHDdv7L4ZSFuXgaKb1bghVEjCwGFCpZCiLNndokXrQbUMPTRbB6cKfM7UkZR"
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
