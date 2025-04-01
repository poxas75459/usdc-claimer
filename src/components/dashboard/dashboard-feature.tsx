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
    "bFR4KKgjAKDZ9KoGbizcyDRgSaq18z6c4C11m3Cpk3mrqaoMFXGpGn5r5BS5Sr5FT9gAR2tMdawR6QgqPJf5Tck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vbDLXx2Vv8UYGDkWbDfeh9bKv2qAVyLwTQ1q4jsQQaywYaH148Ep6LcstiaraGNYmA9q3HSmhYATjR45kKiyANc",
  "key1": "3pCnv4ebqSQ9DyJjxdjPuxsck49FjzEivHRmPx2x8m49RUka7VpcJXEMKdcgJjkVyrUCE4GMTXBdFic9arsqxM2h",
  "key2": "5hBeW7HiR29Gk95Bd1oouWNd9pTcAhESEADbjfo7VLV6eDg9A7p46HtrVfsGuBM8z3jw6Vn7WsJNGEZui2r4eURT",
  "key3": "4cDjxyLseCjMRQbPb3trFogcPrNPaoVhSwnZmDpGAXvbdTqENvdquUQ8naNSc74ACShLTi94PtNb9pgVRA7Cx2G2",
  "key4": "4ZSfvTNXJ4JoJqfrjYSkp9BBJbv3RYQNMVeQCdKsXRFnWb8vWjuXeZDt33RAByTUsPskYP8YChG8VrGdQp5qHgJg",
  "key5": "4De9XFdALdPCDFqbZ5yJDFCJZeXoMiNx1S4RFKTJ5HEeQw8G2WvNQQYDBVg2cdqZsJsFYvPWCf87hDEuc4GsuKeG",
  "key6": "5iVeMLREu1mDy2uZkbUmoFC8jmiri7bWqcuUaYs92AGYCFFRjfLavc2JsZ9UgxfLe7AbGcyejUVdStAaMWok9mGG",
  "key7": "3kPXF84uwD9WZAdic8JnB1TWNNW9ygx9zibpQV9rfnFi8WxGThp15F6vBCAbYvbf6TmNcKzChjvKHNqnY8eBaaxT",
  "key8": "3jecNCdXY7RKAvcNrzoVUHuv8nVhvnZ5dQ2krCJWoWWVn1A7smtig5RWKpWT2jeo7p2NTPSGkc9tL1aNsCq7XF7f",
  "key9": "2SW9z2WL3aZfjm3TdJkkThMjrGWk1ijraVFyziYV3W8TqyC2KMEbUdmNqftTyynN3x2tcukSk1LuW6gXkJuVozoH",
  "key10": "ziBCbt2gEPpbckVzeGWFYML5z1cKEbiLJXkNspVDAUbGwf8qNx71hLkcw5kSUHRthsTzetaQ8YrZmCgH1sKcUWN",
  "key11": "3TD1HgFUqxqXiFo8umSKEwHnxCkZLVqaYSXbyGNhxnktmScpaamuaus9gBR2isfzw9BhUVXmfp1WcHG2PBasY3Kr",
  "key12": "2vZKfp1tvfBLHJSNTh76PABjY524BxZyQoX6eSHC3G4FZDZyhNNzbrdEL4RNCicEu1wVKp4HGGVpQrRg9MZzXNQj",
  "key13": "3fSRcKL6HA8bRT82s1y1zFkKGzMw4T7HqU7hACD8Z3hsKS2uJNcxpBab6M25wT2jBX5XnJc3BiRMKU7ujoX58dLA",
  "key14": "4nZy22et29yu5Kt3wrSa7rpJVmppAd8YjRWVXa61gFSHod6texG1nwKDPCPV2YkSVuurJkUaSdaMC4U6JQnA1G4j",
  "key15": "3DiXzr6K4jt5UsWtzs5EVFB1zkjzUzKipc4MVc5N3NiDxwcbLqeMkiDZLMkdL3WswaeMfoRAkqaXUwZC2JTaG1GR",
  "key16": "5h9BzXtyEn4KJQJkg4BeJBDtfvMANfMQv52kzqTrPBHagdmdbutLKtA4hfS6VA8sVUQib6b6kgC7UNwcMXjhseBT",
  "key17": "2yQiDZSju1ZvDJUfNjQfisa9DSndQQv7r24Hog8pgirmNZkbrNWuwBRM2tFRWF6ykB5WuNXqznpnkaKHpg15835k",
  "key18": "1bJcFNu5JcApqx7XA67JTT7CJqsoi1q1NSKp4cm3PCuFk8w7BvbG2UYXu57oKTdTG67dtfis9m1ZAPD233V8JVW",
  "key19": "2pqWucBejNb6UqdySTJDCvbMeh7QmpVzc397pW7PCBKLWtf824XT7huefr1Zy3Ey8kAwL5tbxY3MGnv2omWwtU7U",
  "key20": "TdLHXshCxdjJfnuJs2oV3X9dYudUsGtM3yxJvjzGaVayFyEJk8MDJbaopiUCi38tQxCjRkXP2CGAAwf9gz2zWyJ",
  "key21": "qBqcmG9cjThPjsoVckto9df2T2BhLPq7ut227bgL85UhcNvG6VTQJSFij5k4YqJ4n7a7bvyKdJ8e3AYoMa49VmD",
  "key22": "2bGeSmT6jd7FabjsHDJzMjUpN5JsnMgD9zZveBLm9wLYnHvi3Jdr2cAfAEzqyG86t89xGpUXmSPHu8Zpo2KMcCsA",
  "key23": "mj5uKB64jkdxKaJpjwCnt3fy6zNYpNLd3kvJ6mDH6fSBoD43G7rhBusmW4uF7EVo47YYnaCMMDfEkSpxMBpEqBW",
  "key24": "5h2JVB7fSxYgFEDfkBTxQzQnYTg4BxvyhLmHRDwdKSTSdWqG1efrc4wwZkMdq4SNBGWbNwB6osHYLRw7kcJUiRoc",
  "key25": "3PZVMC8B7NE3muxY5defnyCggSYBnNn6uCbEDQ5MBapsdA1rbtRTvaMWhugUYM5PH69ViMarQ89g6oMskeo5oeZT",
  "key26": "3zbAJPcHC7vTQTXLu7CXx2jQWgeQxbwGX7n7GCXQ7xNEPxvLDisEhuyx3bffoBWwSWsg87kR1poFTCF6gijGmfak",
  "key27": "5KAzPxicoy9YYs78yp4HXNrLPi1adRqhtDKWrHQYFyckwpMdoDac49uPBLXXz7KxBewK3ABfCuT9y6BjYKvomF7u",
  "key28": "5QvWeSYFfEQoPmExkAhTRvTULX4Lay32azfsBbp8n8yVNjwxbrHLVEohDDDpDsNjS7Xo3GiTZXC47axMZXXsAWz7",
  "key29": "4K2aePCPb1mGTVKFfEAph35n8o2bx7yyLtQFW6GVwyjT3bsvGkK7ULm855ZBRLpvoAcwhUGufTzqvFDQmGZZ5DBS",
  "key30": "43duMPLXpXEkdHBuhpCVnQeGjhm76dZ1Cm3NDtEfp8MnBZLiDLCT6BM463atAfH7bCy93QD5mQPzwR7MEuKCxVVD",
  "key31": "23vYGim4jmCG31XnGCATLiuuwtdHXPPg6b3CwCdUVtDAkiMvRho6jGEc9aWwdpX1d7wDiPZ6Fsm5YhteNybtc8ub",
  "key32": "2svDvAWsYijhF3eTRgg5H9V84C4Meni2zyeAmkosdkNXFK79wZXiZcoNWBMzbqyxDJiRmZRejXLw1HQeyqowkKwv",
  "key33": "4CXMgf2KTZfc3CdCefZJEf5cDBnAEoakDRskgfCurvXeDL4Agpv71eVWkQ9BUsuWeUBYNgVGrP5bTfotcQTotCmr",
  "key34": "65NpU7eGE52Bs8zhi2QqEtKo5WEgiHBnUn5VS19ZMFyKSP3TMfGfYfwHrhoULLfPUpqQ6qL7UuhnYciE4YehMWYq",
  "key35": "yfRQ2uWxsx8gSEgTXqRASp2xm8153xSUE23oP7C7atF6fFD1cfBMVNj8VhVLaw6afnFyfj4LrSqd8q77AAbSvE9",
  "key36": "4ZaifUhvWWp9rXkJ6SyRK2dGLnmcSmvaeSgyGZmKtjXDcY53XAqyg5sgN4JPny1P4ws648uT3bms9Tc9MQPUDmm2",
  "key37": "4kXJ6hkiQnjK7ZLu8MTGuLXV6wm1r6g7LPcffwHwd4xFzhsWQ5sUsxDehpa4eQkuuRjJD8yjTvPgmJ6VGsRFbH65",
  "key38": "4Wghni2NPjqfYGtiRUYBkwtuQGuhL9RDzQvsD6Hxe82AnCC5XDzV9v32ekvHE6Vyok5XVF5QxcqFeHPdqm4VhC9M",
  "key39": "5tHWBgpnhK5CcreHXpRjj19CGLmkA5pw33283bbTzPaeDKdPfPdoPD865VAqiBGNyHrTDcGvT8kBu1Bk6xekuUh2",
  "key40": "5BGUNBkYfenJXXGssnCXDFsgEG4d7P72AtoYgbjgLgkD2LFidv7EthwbYH4EWThw946qQ1awdMek2mTRrFrP6PoW",
  "key41": "5g6EfiN3Wg5vj3ryTKpFPJeECF8nbQQ11W7Aix1huNdYXs88eWcpqDT79d7yxwcCmA5f8fnoJ1oxBD91UGFMCjUz",
  "key42": "2Ts1TToK1Pph4vyKe7SGBMciJQeS9H4XCfv1MFS3iYBJTS2L2MZXx5y9uFG7gqxiph8RrRLaGNxMFruD8JwNufRt",
  "key43": "5qa6TV2Ctpe8XgC5FRy6BnpdNhpPBLfgfrcJUnhxNANzJbwdykJ3QaLJUWnnfxT78BjHGE1BhXF2XVa82ydo2hmS",
  "key44": "8Uv6EyVdMQtXTW1fr1mnmPHkznMUYP2XWzSg8ok1UReKiw4m5fZ3wRFckRDhdwCygBv9EPtbUvVxBtWVEwmj1Fz",
  "key45": "5ztVPiig4Z6xXggbZJSiepd28m8Pp66wNfhmjFugisKDUYLHGPWeNxZadANNJXm3MwQgrNDHLxnctfCR1TpuLdix",
  "key46": "5CCCuo8zRbPYCDrZDY6JyP4T8LvJbENVjLHRwHM9wtUW7cusUK27GZA6peGTxtNgZVAN9qoSTmYCjh52Ya2tDgb8",
  "key47": "2g2tbzym7B8gGdqAmYrujbbDw2PLdXhd2Hd6tzixmh1Z47ER3M4SqhaRmZTvghWEEpxVd8fsfk6sFPsdZ8ugxYtH",
  "key48": "4Y1SNTBCGWn2Giz3qHKzfp5Npe5XsUXavkXry7RorrFNB7GWfeEFiAaBpmRsGd55LM2G6Ci1Bd6wDsbnf6iwXEQj",
  "key49": "66KaNeRuHaxsJ4BFTNBExY2DRGsKj9EP7ARpmpe7pJVQcubjo4deBH6yTUASMJqJRgDYArS9SqKQ85Y4EbACDw9v"
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
