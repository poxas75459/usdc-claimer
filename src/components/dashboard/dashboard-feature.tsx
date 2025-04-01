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
    "2FqvtZPmLnYka6w7LA1SAiVo6mXUtAxpDxjgbkwHtH7fFJckBm85KxFiy8K836mMFz8CExjb92SHz93YbwAMb3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ey8WQMRvVeM2EW6vfZwaHfxpeC9kdxkqc3wsPFV3iJaLnWddKSVaNu6GuDDg4rirMS6oK4Tkw1gz4DCBkDkXnUu",
  "key1": "2APh5Mr785UGAoNBC5axit5j1epGLijDMot9raa7TUzEdNDSZPorcHbSh3izRVaCMYzGuPV4p5dmqLdgV1JiEuZX",
  "key2": "3WT6Xrpx2GaRR885PQyqKnED7DJ3s7nRpKwb9BfKxE7sC8VPtCjCXctDNM6pBS6Xuhrxk5Q983uREN5RCP3KUtUh",
  "key3": "4Ej6FfeRUqw8ZDqJbUEYWdpkFCxS6ppsKtanBtForKiNqr2X3Hj2FTkos3Ms22t1UYQ5qCgiAB1r8BpYbRNuNWH4",
  "key4": "NS98QuRkfjeTcUHrsXkJ6p5n6N9YcdS58UTypumEBp3epgybb1eTgCwP3uxqNMLakseEB5MwRpYmA4Jj95YPxj3",
  "key5": "5EkBdnnCESnczmNKp5jTJwkEfos31U6RUpSyACPBB9pKGihFhedmm5sQwhfcEzkueZXJnLWHo9BfoYqxSn4LiA5P",
  "key6": "52t9uzvMcusSHmMRWKxB2uuyz7AicEzCovuq88Jq22NBZZCx9Xaf29JStyqYgYTiFLzTJhraAmaiNJi98Kk5sxPj",
  "key7": "6CRRhXVxHRcWs9b6rk2N4m1QXWV2SJksD6RAv3kiX98Gh4YXYwE8PJvBFCMdtmtdrENboYyM3cg3XUJUzyds9P6",
  "key8": "5jgQAGmicQtYeY7oPiQf7ksWfWdV1AWGNHc3q4D1zJisjFUwp9SmLA29XkvbCS4VTASynZkwgZpYGW75M1Vm1Sak",
  "key9": "4RJ52mJRvWYoErZpK5WsBGjkVJfaixVHraY7sJFHE2WzQ4AAhW2m7EwEUKaZbSsYZSABtmpbfzeYojEZnuCfMYCh",
  "key10": "4jkPKovJ536rRYTQSeEzCFU8NcJ1XDL1cWxRLPHGv4zSAv7SRoVGVNepQL4VRDN193pq5K6649ocqeSa414a8rr",
  "key11": "ArhS6DCoKZzgfxTZ7SK1kGfZY1ftF2o4c8ZTQk5W4DdG7Jwqg9N555QTEHx2RMgsHqwSbDGwoEcqQTbRiAvQN8r",
  "key12": "3MxevLJV5imyrb94R9oA8Go9UaLXr1aXy2uQH3puLH55fd79SP3yVV79dcqRk4JpPsLDjxZMrv8vN1x4d54z6d3S",
  "key13": "5UPuHPdK3QJz138RejcQBMZ2YFoop6mfK7mco9Hbuh5XMTH54cjypuuKeJcjwEdnPCLEuk5E8e6tDz6GpvEfwuPq",
  "key14": "U5W5TbKPuw1s3B22bBQfS9YVkw1TAFgmq7pDhXcLJQb5iWk7njWTpJmChSrpsv3SQKaqdFzsGdmawzuDZ4cX8U4",
  "key15": "5LSoWEB9sKLetWXBFgfzK2oTgsPYhZ3rBVJQneQfp8685414QLjJ7EAJ6eT5JT2USUBVJKHWxXsTMs1tg4VmdekE",
  "key16": "5dwk5Ma6VsM8r7VZJQGPj5moY2ztUUh6PGcr8JzVXMK3SFm8mgovNRiaufAo5H3hsSsbNqW7anVjKfuEcz8mVY73",
  "key17": "57yDQfJzDZASVYMP66jYpdwy43vA2z7DSyGUUvtrmRarQiGAU7ztWn5f3L7KV1Bcv3PWzmQzVZLCXMimf6bofsev",
  "key18": "2Jmzr6362FwC67CwDyWJQRzkHYc2prS9SSFSuJbUQnS9oer6MRawASSN9Lh3o7T23WQNDTkf1TyjdgPx37fLgxgp",
  "key19": "5wmFVCLeFkK5ymZ7wNE8NE6vnmHXVMN43tsxkHrLmMHEVi5RUYpTDBYizK4zs86EtrmJNRrmzsYRE8hgaRu1SGYY",
  "key20": "YJDCBpWoLUjcK8CLVb1Tf2daPwcNc65Ceq5eDVQk4K57X6rXZQSvpvBpnAt9EWXqj5H7UWnbepUUakGjDXoas7u",
  "key21": "4oGiQGFW8hAUWAm1mskUxCnrdY2mFStLJMhbZcNNdHreGR2BdvZAaViyJjEDeme2KN5TxRRuJ3Tx1DPwkFEZYdoy",
  "key22": "2K2rXA8JKq7BjseQBtYNZj23YpBTzc19fE6XC7gT8ULnSG7nT33wtmWoLtxQoy24VzKAG8J3bj1kiyC39rXMPEu1",
  "key23": "3q5GTHPkJGe6SY46FLgMnZGL6Zj3GrCs95J7E5KnuChZCRMaU2Ga525ynAZKHLNeAEnAEgcSq2kNrroCvL64wPZy",
  "key24": "2oP5TYcnRm629PvmcQ48DNCrHLRG9B8FKs1QVD4DyKLNAT5GPocXkh92LKbqz4wnYWAHy1h3Foi67eC5hQLgLabR",
  "key25": "4TSQyEXefQNZmQGJjawh82iz8xKqaBFVAyvp3FCv4wh4SXvgmhCz3rCjhVFpDZEgjSC1QFA63N9KGH8Emk8xgoG9",
  "key26": "3CBh7j41b7nCYfUwmJkzEPr98RySGkL1mZ76b9DDKrjbpyxaeDQ7Z6xQ28nqj4bFxB851c3X7VsKvBtd7Y2xQEnA",
  "key27": "2WHn1ZQv1Ztn8USjkenki4YaY3RgBCm589sMpYBr5NQn14JLs81CvGEYERbW86McFKrBbQ8ut3rGbzCdpSZDvMvj",
  "key28": "4v3Y4wrAE2YiGtmKJEMCJvSUTsjurarerLw14KTwLAgcJSC5Q2ow9XSMYeLXdawGciuhB5oYdY4xYqKXpkiYtw5k",
  "key29": "9swHCveqWXCBj7kTgCibRcGxjz9hb3ZWNiCg5HrjUsgCCScTfCZy5G2pW2f5BPkNMufyax4jjtRU43aCyiDj9U9",
  "key30": "5RdKsEXyCsQmvjUi6JHSExh7pWfmA82QdQPZWYuWDcmgq8mH5a3nvjzLLjNKZtk8HAFzfYHSgXAnHKK1uVfyirmP",
  "key31": "5iAU4wb7Hu5R46T4s29gzy4rt18f8xQFDKrBmDors9z99YoYoE7yQZ56v4E5aHc7HNetwS4ndVnG1KVf6qnRBj4J",
  "key32": "3Em9fFnr2crApa6mxFFHJvKNsRzEMds2cbkGjhwvGMkzjd4pmzC3JX3HBGrykScjzGYipNytPG1pqCH3RrfouR49",
  "key33": "3xdVKy3b6vWSCrQ54RjnF21Nqkywp29fWzuXAkbtVFVzmmQbKdmshXS87kCx8fV8eUogRKpyPbkYRg4ToGcMQZj5",
  "key34": "2qxrLYvXgJ1F3UMexqPMNLaysEgWFVs1bWnrfY7EHG6NnfZfnXi2k627HsQkbvWupKaeo5mZqDayfvMeD2JVHSD4",
  "key35": "4bGf3WEqeutcEq8UWs5mUQe6FzbfKFhv1RNCCdn1GFt4o6yeXtWSAaW6wd29oqAPeE7dPdbJHfw3arroJBXkdVWb",
  "key36": "5XhxnM6f4A2sHZQCR3V6xTvdLLzUY223BcHfSLTQwwUnYU8TNE2Eomd8gWANkBMkMNZUxWPF5FARvMbsvMALFguY",
  "key37": "5F6xru9oc1T6A7rq9ait1mcGjwor6baTiDfQoQxEZbeT6TfUNUSRzxBV1LWZmj3MkD7wWvms4E4vqGdmztec2HDJ",
  "key38": "1e8zBRaUsUBXTCDajuwGNqKzLBmbp7hcrDBKY3bEsMAxdpbZRFGftmvH8uvFi98oL8hEQBGhuMdco4PPqJmY3ZJ",
  "key39": "dULQyXQC5U9fDqkxYuoBssaSqmPQPpqGoEhfmfkh5bQvEWzfDoV9vcrG8tLBNjDtnPChkorLLy67KdSf3xLrYjw",
  "key40": "2j3Ds9cTNqrcBJaxERkLH2h4RnLHw8s25QruHfzLS9aEuqGnEipQLTR9fySSQzhAm1EfbKh63YKwPnyg6PmqhJAo",
  "key41": "ZGbaN5neUPWpnGE6188mLxxvvTWj7FzsnmUGRAyvcP1s8w1JMVDRMiqnihPU2QWhZR8SAcsLmMPchLF8WD1wLvP",
  "key42": "25ygPvgrUGgC5hurSjCy8R5VMaib1YHEYd6PU1ivgQRbMyNaHwbKa9t92XE2v7bNaTAfxYe98J1WHLRD5ZZ7Y8pj",
  "key43": "52dCpnAugS841MMxdyeybQ1YkfwqNMYkZCQMvj2vc51fdcdUfSpUwDHvk31ErAjDu9xji6tHN4KwoY89rJ6Yo52m",
  "key44": "3PLb8XyBwBu4qdrXXd3aK74i6AoZ1TW4YsxQZb3nL9G2dJmoywgjEqAzSaRHy77QgHCmF1SFFxpS68BP9Sfw1PQw",
  "key45": "26MiyANwadSoXNwEMoEDBagPoUeCq32HrC6R7SGPWJZcmBJpEX8aNLho9Vu9E8vnK8WqbvPL9CAjnaymsT1Dk8gi",
  "key46": "3XLQoqAnpyubZq35g8RZDUVEEobUs6qrh7rrACMDmcmYzqaNQTL2raQKHE4UMHboMWoFJxDfp1GvmR6ncWzm6fZL",
  "key47": "5c5mccvZnGSkHFompCeBRQb4355fZ1WkhVt1WJeGFMkQ3KE1fLCGSm5JtzHMgvcJbmyW6rfVW8qo9LAqvA1nw62B",
  "key48": "5Ta6WCNw3UH2Bqde2zrxGgod75vnePkC3z3pZNvPcAUqRFSEeY3GfpurUyMcZspEcoRbMXs7b5jg9kAf38desH8q"
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
