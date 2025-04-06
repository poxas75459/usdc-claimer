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
    "5Jdhau4KTj8wWcrQnPSxLTeTKw86ti1G7zE1rtWXicFWUGfiqeSkexQdwP93rZmat3sdkDgpdpym6FYgafAV3HuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vt3DyyE1BTLrD6aMwGfe125xZuGoHpmTQBZy7c1ou2TvdasCG2SqwUtsQBw7p6iCogsxzNbSM1fctLSGXQm5Rvc",
  "key1": "2btTcWxvKxNBWsiG2gv6WoKVw5WEUAf9UDZ5tvMTZV73oHieQ9VPkxetK65yXBrtBJBm6LSDshTTgLKoHBcVfsCn",
  "key2": "499iox5ty3oywvrvidNx1rBZjdv9DNkX9oEkaU4oi6svJMwfca4uzvVhkxgkNNPXyxZdgJMTPY1M5PvF1YUmP8CP",
  "key3": "2aUZCx5RzTqGuFsg6HwWzLgZE4rAeSAP6NH8rVAx7t8oFJoHKDRGpEmsCmj47bTXTzFmv7YcpV6cu1HECdGmMpoG",
  "key4": "cQCRn1KQrprTXN1NqX6ouBpaPcCCW9yaRp5wMfgCMZANU2Jhp4RtyqaY1DLkVByaUy7GNagDwP4XdAvP9XYt8EC",
  "key5": "45cquN4wqAaJ85yLGsUbPkfwden966UovAt5ybgmr6TfqgEkGxjrZTJEsFHWpJaXwfufEF2XrQpSD1n9jLFpvGcN",
  "key6": "5VVe1gTsSrig99Y9u3aMnEZyqf8dLVLdBPo7S1Fg4tzZckFz5YPVSVwtvRqKYszX7354hmxMLHpvYnCEqiXSGQRP",
  "key7": "4hNEuZo3rSygapALFcoHmuyzN7MUymtXbBtwH9GLt2eeSyZeeBQFhYP4hyPWe71oznMsS4jP7PJhFtN4SdfzYMrp",
  "key8": "2HTwVgEwKP8CP6TESgs8s7VEtaoLXxEoDL2TtSGAycFvep3fNBcMRBfpA2xw7DprvzD3bBjFBPu7kLjZ3CwwnBy",
  "key9": "dNd4hX3soEssQ77RLsAagQmoL8JLqJELKtqo4ufpZ9qsLxMQ4KBmVuzsCQmNvLmGmt7joh7wajfg33wRtiihVcL",
  "key10": "2egmxoFQ5HGuqMrooTNMh68dzDBZ4sPq3knPPRkNGHrGKB7Uo3KzDg4thUaWPavfS7LFm2HasgeXcqN8yLhc2Zvh",
  "key11": "PYCm8GsXmPvDC9cbsUMRTBXjuqM3qfZk8UPKRKraSeAQ2CeXc8LX99Abv8LHUmTtikNPt5Zzk323TYZdHkPiYv3",
  "key12": "4xYPwtQVRg7GrKtmPJwcbxeEA9BFgu4FKXGU53QhE1YuuuXMAoeHSRbJ65S7Tets4wqrUTi1nWdwHAkBzFihXoqm",
  "key13": "5Wj7hHBjwt5wpf1Tv26hYvpZqhWw8eBLZrZjFW7pHMjUC4rAQKkJPkPP3dijeXnsADHjQjoHewGbvi2DLAS4SDPt",
  "key14": "3wzXdVaeW2oy23fu2Gw8akU976tqvTb1YaR7hWpKuA6JG7172H8Rfrh86DyrCZcWptvFPaJ77WcCXtC5kvCytdtu",
  "key15": "4tWPyyH6n1GwLkpTWe1me6Hu7v5XRhzSnZz7xR2vdh51ewcwzjANuYHijPmNRzQrqNTskSArQsWWMiyTbDC75wL",
  "key16": "4NFH8KjvZuuwMxhik6xUkybKBPS1z15FqXJ64SehFLLbSivtb7LHqWFA5CiLH5ebH97hYBvZgadT6WNnAW3UWDAk",
  "key17": "61zBkxyqZmnCfzPGpzpocLc3i8tSBM7awpaomi9RLo9hH3aRA2pfE784RDZqEAZCrMhmx5LPQEh4YmfVppoRkpmc",
  "key18": "R7VDrwxqwRKjoVUcYENY3AHNE4KjMJgg5Rc14TAyur8xVYeLRzSbcFT4CVWeGvYK2ratJnjEtsEb9MBXybzSkWF",
  "key19": "4ryPXKeAaTo6c4X8aT4oYAYksDW5c9XCzCwKLaLEJV1mm3qzK5Ar3uP9RdqmfQcDgMEZ5LAp7iye9YUh5hdwdNYx",
  "key20": "5wmwnkZs5UX4vXSkGYk4AB6dSGKJkaGNhFA5C7E5SPpdiV7gvid73DGSCFoXR6npoD1gf5T9MRdFDixi4tiZXrTs",
  "key21": "UUAmCu11mLGraGYn7V6HHBdHy8RvNDTBA6n4j4nG7STiTXrjXvwnxdTVb2wt3P4jRXDTAm8RRvVgEobWgb5NiwS",
  "key22": "2SEuj4nuSDprat1Vdm7YrmQHBRznej7MoTXNvmv5dB7n3sqT8bxdgQ8u3vZfoiBig4AJksRbC9eyf3VsjvVcHwRN",
  "key23": "4Q5ZDdwmFKV5i4QC6bnXk3XVqfRG7UpaAchXT6FJUcjDScfn1RAuYxyyt3eFmVNnHrhu7RREE45vuTm4MDpyK3aP",
  "key24": "5wyEkukZBhkuKQqZ9yoP5eoz2ngVoiLNsHqDVcFe6DoxX3Z8HcsNBXixvCbEoEDcqBB4o4YHux9931w6dgnrvptz",
  "key25": "4P7aACLrRzmGAByk2DDYKohYUtyaaF2YGCTM7CcK1we6RUgZi1PMeMDN2sx1cd4ncjWGbbDJ3CjLZKbW41W6zKso",
  "key26": "2934XWwMmEiA6jQsv94tfgvc8v2TTL3Dnpg7xpV9Hm8MuwXCoD9Cyzz7uTYbvdtH9d61gZrJdTwDEyHytEVjoaLj",
  "key27": "38WcJgMxhizpNVqbeyik741z1jDBn4GdJ83rgFjZSHpA3QtZHRC9DKuEwuUZhZvMjSRxCCWAoFAviAvPfjXJvvoj",
  "key28": "2qnba89dJhWPTomzdWqwngg4rT3JCiRvKN5LcgnhEwE1d1qebWU1cS4vP5V3zd7MaiVooB3AgnMKTa8dNGZQeXH9",
  "key29": "5yy3KgXxNysJM7N3wZvCVt8bMAEwr6ADtYwCWP3iSDE7qerR3i2tzLWZZHWVHyyHYoyPMAXB6hftACf3TsZbSkSb",
  "key30": "3FWA5sSKsfyzuXXgtHRvy7KsvZVQNQQkb4CPnFXZbVgy85xotJefW2jmTfpZAiaoTeXpv8rqBF9fEnnajPYKPEsT",
  "key31": "3Z2SdTNkdfxiEh5TvyjaiXsfGSeB1YEUUeenhahXRHbFfrbDA89aWefjquwkfPfN8zx4Fg5JaMZQmvTTkRKG9nCW",
  "key32": "21QLGdL9win8u6t3EQc4K9oa4AKUdZ9m1bGudihiw3wiRA9eMemALxGMvEsoGyJTT8iRXru2GL5TQYcMzGzRcsqd",
  "key33": "2EA3JTmSbNqmNLHwYUCE2YUue7Lqk5QvYbzkhEf2BgY4eNvvExjAf4qFvMPocs9HZS4jdHSXEhAUyqYc93pSiNuB",
  "key34": "3rEnBpTWUn8EpeusoMdHv2ufpR2u6qyFBY4xNHruPAvhtXtKEjo15d7Mway3ttKAaNE93bwUhFVsjYLst56hcUFb",
  "key35": "3LjKUkb8DUkdvK9sbWDeNtseCPmuy7TZRTzgfjSSHDnm22mzqJWQ3mq8J2nBY1zzfmBcGUCoSGs4J6KW5ig7avES",
  "key36": "4XPamqpo1MtsYH5duQpXUPXXBXFxDZ2dWQvb93eNevnJDhKv2GEdTosRun6tLGkgNr9kB2Z3aLTQcCbP47KA1NvK",
  "key37": "2d9ToU6ACxPMc1mZqALprYWVXcunNoD3phLaU3QzUDMLjrBYb5DZpLBskAEWYm9YFYcJP53XxzKVEc9rbEuy5w54",
  "key38": "jnqLrNzT7jz26ShHuRhmSdoLGQRECXByS5VzErycgtmkYQcWBTAQq7SfgbU8yxaXMBuQdCWaTUc79zkhkDX3kSU",
  "key39": "58Us1g2dhDLVdux3adrYrcTsPS2rbT6qppijL5HgGE7LCorJH1kdmVPBkdACT3qpTwhCLxMduDhVj9i9oNLHo3cx",
  "key40": "48zXu74cMgr7FTvs5vFUGNcMvv9Ztn2Vgauw5XMi6VGugpzCnKejkhHmXTvUbojYe9DbR6i6BqEAxmk4KXby79ot",
  "key41": "3rv7hZnt3Vbzr6kAP8VoRxbLY27xU22DLvFb5Zam2y6iGTyE5DcjwzBtBKTkwGredBaameuKvS3LXLWbCvQGCbmB",
  "key42": "3WyShp8hbps3vbWpLrFEArpYwnWsFWe2NFBXdBexNF4ipmEQPJ4T6u3WVKfkexjCsjm9W19dwAybFbFpgFXfLoG5"
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
