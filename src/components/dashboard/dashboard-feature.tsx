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
    "k5v7CpSmz4BQEzKcQrdHiAaMEWADgAdPfjyZhD1p5e11f8eLYEBtoJN3Pk7uwtWf4X3k1Z3wBWv6HkaxXk1QkTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BcYUR3tb2MWnzD1MVjtQsiP3jhRitWSDgarHoXfEbimse18sBTP8XCL3vUc5VeHiqJetAUvM1eEqQSdJ7steRJX",
  "key1": "4efTgqrZFE5U5futxpVU2QjjAffigf1rqcGdBrNkVagYmipDnv2tnnpAbupkPMhVXvEJFLGMpFYw3iU6XHF9Y3nS",
  "key2": "GrFboGoHZT9j47w3t5bw9bs9AhUc5uApQJYZjYyviv7km5Xb1WHPNXyfwWPDECuSCzan7WWDzXZ3W7Rw9EJKRm3",
  "key3": "53wVd75P425fTAmzEfAoPzGMg4RQunxZiHWNeNHLhbeS9QVbk34soFbF8NN72qMCs8eybSpPrthCx3Wfnsw799nH",
  "key4": "5e1U4D1NTfDZC7bD5RjEsazQHzUuKVNcxYDujSAiuUpp5baEJv8dSSd1SjPnDELehvfsuj9Eqbaw3RXKj7wsPg2u",
  "key5": "5ctWeWemVguh2JwYW5ZTay8pcYQJGhJRpZ7CHxWAkh9bpg98kHGELCXdCxF6iYLuMD8Yxi6wp9YY5uAJb5gq6eS8",
  "key6": "4D1Xfc8etdRqayLTxUnNzronKbJqBz45vgMD42rYA7rtwkFuUZwjGqbJj4GFCmnupZmCbkqbFbEvNYj45PmoZzRe",
  "key7": "hnFCpn9JpmHD29F8akUAeCEQzhwLDTfima7UuEbfaocC1RJb8uwAJFBeumAt6QtiBiHirrqS4576FrAwNZCTg4x",
  "key8": "3hb2Y9Uqg3grVomFmYhVKQpSXB4b3vxjU8Ay8wo4TUc78x7BXVZmm1P43J4sZfeX92hQkSCoAuQBTasiXSdU4wm9",
  "key9": "5U8oYcN21pYYxLKTxqDddENJAiYkzMRbiZi6WkTFpWKtbPV6GxGFVfERDqtu5fHQJAk7zeBKAxY7rw7yVtDuaPzv",
  "key10": "qaE6WvCVCdNkyMX4JaTaVcFdsQ1S5ePCcMobq6bqMYVbuKbiHJRqfwWNVCsWAa1bDq6dNS19Kv6pjWzTgxVwNTe",
  "key11": "oNBr4y3FSxf5xtGsL342QmS9eg1WN7uDEevnkyx5eESHckVMJGJrAssTRUvp5euuMw8b1PZkz3kP5aeAgmqhSMZ",
  "key12": "2Ee83YGmnwhLz6c6KL3T6dEPQj32Rqonc39XcXChLa6NwPLHuNvtcm2JjyD3QsMXKRzW4gKZ8T5jdhBLK1HmqSHQ",
  "key13": "4oiFcniRy7JBSN8AHuhmERsgNHES5BcZq1Fi6CrSMLMg8A8FWuoLxZdKgzseS7ecsSPTHMzezEC9iqifjk9X6LEc",
  "key14": "U8sZimQ8Bn5jUDoTx8qpawNvzy9Mn534Jvop698kkD47iRjJ6r4SvAGMt4uTb6B318EkpEZgf64hoGqF71CeHLV",
  "key15": "3Z8cXkhKRr2MKDKQqDBgdkCoHEL36u2oK7Jjiz3cJ9kej7viSSTjPccVbbBnh5Upyj6zCZQ27FQPchwWZfiXmVEg",
  "key16": "3ZMdQ9YrMxj4xwhPyt1doimaXY1gyKqQRmSn8NAfkEUQLAKZkjJct25iE9GjtUCimeeLrTtmMp2pnN3Ja5XCge5o",
  "key17": "5JSR811dr7bpcyER8RELugdCGvYetcJVa79EBZqo6Umc9eeCERhDgCV4eBkFdrhcKgAbLozVzjaj9W1Lj25WbUMK",
  "key18": "5MZ1vyzLQZ69NW1e9CA5hANgG6GhkKNyP8pfvv8feEZkHY91ubQYjq9c8nLo31Msce6rSdu6Nr52NzbwBaVtRLCN",
  "key19": "3RxGGeAXR1iicrYnqXtAVVA5j4TSzh2NQFixtSbQiybWzuEGrooVb44GU7EJa6Xc6iif6e5ZiizRqYBiMTcxXQPB",
  "key20": "gPHdbSUFPzk3MEUzMkESpHtbqncEDzUR9Vd9MNhtvqYufm6cmwtTE4aEzoUXYQuEoXrBj8mcja2SD9cZSNwQggD",
  "key21": "9YWpvC11Q9fpFiK32U6yrgYvY1AvBEiALLPmgJiaHgZUPULwGuXf8fnxEYDFp3U235dCrdbe9izXcqdJG2uwxTV",
  "key22": "4Go57x9skPHcrvBsteVT3vE4NF7Kik571MbPqw9zagFK57Y9CDAe8V5aQoxkA2tAYaW9N34kUEgUkTthQAmoakut",
  "key23": "2BukPU21FiRG61hGdFettxeJeXPBxazqzWcrJKTVMgNVMiLUPWKZp1PANN4AZ82UM2eR2XRH5aVYUNjAzJGg55d4",
  "key24": "89BQbxhz3w6oCTtJEgdPty7zsgGULh5voZ1FAZh6TT78pCk5AEUmiYdds6Ju4vK9HA2TTjPjY1N5mqPTM7Y8AEo",
  "key25": "2UvAKWFpGqnznE1SiVUS8AcBXzCD8asP6DJiZkSWxNGZwhrAU29zHLjb9EhLm2XXGiNpyDvTqDJf2kaukH2tB1NF",
  "key26": "3Ec5BCy96xwHZvW7FdTtAryVN7GCRmNDimgBFhxbXH3Vc5TCZeUhWH3WykeAwWtu9rXmWiZMWzvsCgYEPtKeJsrT",
  "key27": "3WWNKnD8R5FM5ujdpfgnXETm9YprszAmUYWpfgu1tDoqh8Gmadue77An2PNxfjCj2XkhW3hhezzLrNedKvebXsWx",
  "key28": "a3Zx1Z7G6vR8uru3i4WR1QytaFw6pndG2PSMrwUn34iXydxi96Pv6AVGHQyMPmfxCnQZSBxq7u9Vs6oFPCVdQ2Y",
  "key29": "2rqy8JhSduA6XyN2ycRFYfk5qMpboWH9vdaxoxoGR8VHj8VDyCttSsg5NGtboCsvHMcp53JoCNdKasGuNMUoeCDg",
  "key30": "4qm6s8PjJGPrJ2D9n9k39u2PWVjBpyzU9LD4GGbgsFAQQvg3LtyecJbnuv5Lihf9kermKxYLjJaycc4CPHdcZeUa",
  "key31": "5zXmKk2Er395rPBcJJzsafSyznvpUeEjvP1U5v5YKw65iB7hMFFDvKc61DAB4WbPjDeckRSyBLD6srfQZbCxm689",
  "key32": "2vjPfRTsrr1zDU7EzgDFp7zeo7FFWzGj9nzDzTHgYY5SK4H2342JLrJebW6FMjumc6hr9aJkrFeMJUV13yoYQnUa",
  "key33": "5dQ31UWBdRQhMabb429aGrDqFfL8zKXAb3JK4ZmaFRAxfyiopGE681vp1nWgmq6MpFmBkac3oDfWNMg4WSHW8VRy",
  "key34": "2ax9m8AJNRzU9zhJSDqX8YdETBPYxBd3h2mXxHfwVN9dBqHEGZtffE1GeohgYDPdBcM5NhEnacccjedHYWUcfoNY",
  "key35": "3Egw4RuqtAVC6pDGHV8vHzwuxsRsmwSJsmNdnGfA2fcDwRsX4atoxqEirVwFd61t3uDrskQbt7QfHoFjqomEXjPe",
  "key36": "4D7VLMf19DYgGBKiu9hUJNqNq9XsCb2i1PYHPKMfWZBBVkfLCm8q8RCztDe684fxtYz2qWxLTc7f7DKJDhd6Cpda",
  "key37": "3SDNGyNEcvo1R9Q77ZbkNHJ1W9ncAk5YCTgYMrRPhHkzNGv1bD9jJbi5dnceG2jFeY1KMRnntbCBEA93gnHETAcW",
  "key38": "4R59zVbjwyhtCgM4xtfgT6NffLg8Ng21JVs2qQJedVT17BMY9QrYiQn9NzhKJhKBhu2Kr48YQ7qoSmpQWHLefGMe",
  "key39": "2UsYC5An9r1zgT4CAD8jSdRCuqABRgSws7cTWumaEW5vPti6wSgJxefPLZYvaiSRkQNKCZmsyCCDV4N6MMti53bd"
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
