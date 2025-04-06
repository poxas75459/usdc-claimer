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
    "3YCU4MCGSwvDx14bfCVkMNxv3uqzC8AkigxhNWBBZzjQaS9XSZeW74VXmndZ4LxrqzJUdMdbTmwaokGfFK1gTQxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EQ6ypsnpXwboBH9f5aTjpuQz58MeKmSRtYsPEfp1pWyheNuBqxxbEeKWj6YuXQf29jtyhRFEVYWESxTBSY55wg4",
  "key1": "4P6w3EdaMHVUAFbeNgwS3LepmL6NXfMHXEU3WRjYsgp4YL5GbtjTLA9dPGctUBUKE1HBDiG52UHjp2Xw397YDWLK",
  "key2": "5fqDNBb1wtdQDAmPX83eERo1yabvKQnVBSN2ATt1QSTmGRPzte4P1eK6FfcUCHnNdCP2tgCxM4r7ivnzrQcx6McJ",
  "key3": "VeApfcarWpXda9xm3vdaiban5bkVLtsUrL953mkiRN5361YgCYePQvZkXgQDU6UA4tuJZeseUeL2uFUr7GPDrWJ",
  "key4": "56uH9WdjRVAc9Li2onpdt94EdW2mgFbpKY3Xzx1R5iPM8JstVBFtsSjSQJiEnoeuKcSbPLNrNae4cQaBtUTL467u",
  "key5": "4qfe2eYHwMgc9DWDQ3Y84swXZ6jAzocB4FUqEb9rLG2fJ2KB2NYMWXZ12q1gkFTtqverAAHMXVCgZmRV1vK7qoBK",
  "key6": "4tUhRqmpqnPykNRPEzXdSaQyMraLa3wC6UgY7B3EcBGNGZPX41tpWxq1xPH3hZvoAhso8qGUrD9MTsSahoFG6C44",
  "key7": "3bhi1Ko34pFSeiNiqKg2G1rWiP98HTzmdbMPnk9U9g5dxmB2kSV6gpP1mcFUGDMbRrc7zmQeZV1a2Ny1USKzWCkQ",
  "key8": "2HAACKhbx7VwDHU438YCbAMo645N1aqfE1wL9hwMdEJfUdMrcP6NhURiDwLVFWSBC2DY4i3EW3YeiXw2mSYniS28",
  "key9": "2PFbNrVKVFkfC1imj9uL2CZJCBcQvQuUWZZMgLXx7w7Ji7x67ZgM6w3wsJnMpgCrdCB8MqZ2PmwzxtCAa7hBXRU2",
  "key10": "5UGNtpdfWERUBT4QGkWZKGZr92NbF5BKx4uVZmbgEwtWfRaS3uj9rWKe8zXtwoWkYNsHrKfJUv87EPdM1qnJ8K58",
  "key11": "4JLeHkZSFK7cqnbActjD3DYUB9g4XXka1LAoPh1ghvcnpx2wZLpSY5BaFyFM2vWkB167vFi7oURPmEmKRm6SxZno",
  "key12": "5xyuBsFC1PZC4EXmwdtYhLB2QPULXRw8L2EunHyM6JUEsahvTcHS2JrXuVCmctxcbWpwUsVFEBoiGjaXkt89n8yv",
  "key13": "4Nnn3jQLTdXg9MF2tvg8YfXRS1Xk9TJpEtEhpZ7ktbdjSuYfRWGxJnbRBVZ2uDp2FAzj14nSsrMUhJimpuEDaY1r",
  "key14": "4S31PmsfhczyVVCZS6uKKx9CDzBcNN73FKXTNAN1Rc1hc3mQKfSPBzEo4G33Zp9BSqVYQ8FphZhLcsUiXWbjfQD3",
  "key15": "PG6yAC4ntP5LqucrTwHYA4KsEJ3Jv96vzLGJ6RjFt5XhXQ2Zr8GPnrpwDuqKpCqtMmGShHTbZz9hs47tScAnwYy",
  "key16": "2xpPf8xZpJuWLDW7CgJjbjwCFJHC5PF5qSyo2mX1ntSEvhbpMAA4Rn7qsbqM5EQMamdahsx5gK5fhRsFesVCbKj6",
  "key17": "SuhzGEcZAbcNryP7P14NQgVYZcB6AMD7n4tMG2g9LtpDx6WA7cCTDSYrcpVcXDnmvkBSZJrmXczL2NE62G2XCjm",
  "key18": "22wHGx3oZ3BogvkWJWVPNoojSbmywHxne1kxCHPn3okpHwrpn2XCjBNPcT3Y7yS7UnaPgwrmm5Z7oxK8ooDVcamA",
  "key19": "3iUXEfYoVh5hmSxFfz6GZhL12L2guHstffTtfw1Qgat4VAxevwpATLfRadkpyhWFR6D8VfuNSAxh85h8jLW4nqsa",
  "key20": "45ZnWUGwuuGHbX8rv7i63eAQFU1zq15yKRUpBxkeEWFVbsPrn2gxkrg4v8ETippT3QtDrnBY9VZZhfxQdZfBMV7f",
  "key21": "32vtTZkcHtoQwc8nAyPPgBq3K38nyEHozkRoigmfpwY9AdApXpEqrpmWw16R44r9HM7F3PjryjGu3wxwDpHurQPd",
  "key22": "5zo7y27r2W16qTbaFzUoYvnNCMqmQdQXbMWDwcHHqb5VZgBiV937qeJLNm544MRTUXV3LgQ6uv6W3GEHShh8khdq",
  "key23": "4M7trJfj9GVJGRj6Tj6H6Wm1Am3qLo9EXmKEgE4wU5afYczG2PKJQXXnLFmy6ZgWZ1qhumuWVBWPY9x7XX749nek",
  "key24": "2qSQ4hHLqs23Xojh8QEiwnzU28KwuoWHSxfgHbzPGhwirEGGZY6456rRUfAqAj3FkXz9uvXTbEjsnbWZJv8iaBbX",
  "key25": "51zdVx65kiFxj1btzsRma5xi5vmS8fUfM4NWE8Vo5nKKv9VB2uDKz5tcKXCerxw9Dn1mcuR8M5wZYoizbbsL6zXS",
  "key26": "2V3UmAtKBFx2EtVXYvezt5utiyo4U5ApzXCXpdcgtQF6WH3RtqGoj9gqqMCMhPSt2TTV8ZEdPJ4be1bdjaKob73b",
  "key27": "3EhdNywLqTD85hhueCMrbeEgacYaBqZkhpkf3BzVoWGsk8CHVNBbYK4dMwN1Y1GWHJpteAVeqHGi6ebMuzEjkB3q",
  "key28": "58xNy6WGL85nEfBKBrzjRu32qBAf27de39AKGtUp9TCZUciE7hENpRnQDAqT6VEUmD6CeMzAfThR8Xfnjv8uAM6a",
  "key29": "2tzhaRAQ6ymQsXCSSSzJC5zF8L5Sdzq8MEkEfzr89CakdRFGmM1Z45dBUa7h7VXX9pFWRzL3TD5xrdPgZXMFdmTL",
  "key30": "xYowipscUUFgRRkqPGidLSyJ7QXxgNLPYJZjT9JDq8X5TWX1BeWJcGTRKQtvv36gncVzirWBmnXA8TvrKowFbr8",
  "key31": "5VZcu18vB3rBD56N6kEFqTgxZNM3ahybFSVSvE2zFwqnF3WSxbfGTh51WKzhCuxXYDMPeXq4LhuvWHtKbiVdmC7x",
  "key32": "2V7gbgKf3V2DaFSHkscLjf4DqKbx486udseuBt4uJ3vwWqNpSQusaKLXuYM2adg2pqoqiYMzf6auuDEGibWpARH1",
  "key33": "2hD2NvcUD64zkWopfHAn29P5BdKLsrtNAUTZ3PuZymHJqMXss6gp7vhbDA4TcRD7EXCPw9aMvKy9zLbG1wNvmTMw",
  "key34": "9HTPNczPrDL6K4ckTe1yA6DmV3ypD56htPBvEsxhUt4fSg7jknJLNAsg6sVVZhXWWWyaChMjNz4kTZN3rTApaAh",
  "key35": "3kcvcB3d9EyZbxdjvjsF4z54MwSccxXoFnXhx4Gg4GU4gGh1ChsvYBzT9gQa8kT959xBHbz6NJKx3n7DEg7sSJbM",
  "key36": "3CF8cGR6zXXEy8uaUDhprWkGYff1Nu1FKWxJZPGPmHyDR8pZZ6PyprsRVzqZFFfseopNgrJdyMwiE6PuE3JCELMd",
  "key37": "5k1UGViWWiQLizazxpS4XTinVF5xemj6RzMoLQUWpsrZaU8eowhrh5597Zeuf2nFEh7PToUqtoy7B9nJZpminFdp",
  "key38": "3M1LtZdeRTAeidzDtiuVjdVhufJNWVSnJJHiEhSYji2w8nW4YzhyQqC3uJWXsfoshaBRbvoVduV4XaEfQw6p9kJb",
  "key39": "t8iNXe5DiHPiiE9GKfFZ43XcgMhGdPQxiC592kMz8esrrC1seYTQFCKPbo1ya1rMhieyk49UjeLqgfkYSo9uN4k",
  "key40": "4egF8MPp3Y1SCLw92zEwTes56Dckqta8J7tBVtu6r7ETwr3Y3dS5wjdSJd16GwFJLxUXP2uqzASKvPXoXbjuSy4o",
  "key41": "3Advp9fgikLJvNQek1z3a92cH4C7hd3FaJ3tDKPC5mzHk43CHWTAuzDZT8fNtjs4ZF7ZJGTQZJjsHfiw7xyrGwfh",
  "key42": "3KJR5jQsCoZKo5LQfD4mvUDKaXoue8ieSAZjY8pYEtJsUZsWfHmgnu6GQAXcoBxjqatxMbQi3ALsL4YvWLE3kmH4",
  "key43": "2TpRkMgwmMtgjGtmgSPgAjH2aV8at5aRCJtowGCy4E919uikZomq9djued4F7r8rvxczTqRfUuc376MoCkCDnqkb"
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
