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
    "5CVxHgPjbvD712FFiJqz6J6QNW2MbmzXJ6pVqiw5sYudgo4SEdxmUKeYYJdE8DqQ5p5EtWii8HRVeDcvwuyehnb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hFamzZnrgogpUrdQUsxfgRYp31vEhdQzBvZDYe4jjpJioUY7UUqC8j9bBZPEWRCMMEdpxhcthWsZ9fMnZGbsGnT",
  "key1": "5k8nUnw6DaZsQTJ6UDraGWezDwgnQ6Z2ck5vKnML1zMrnqLFWsSUVGTej7LyfDBaxC25rqyJ3pWq4WhtUqLVmNeS",
  "key2": "4mjXiVJCBGR8UWnYas91TNpr1D8EM3U99fhyYjMvwLbg9934GmLFaJVBXq513dZWBhvFMUh8ry4a8pGESZdpHFi4",
  "key3": "459AFid7ofUJ3wmxqjmTJKc2bbWD9EG4sKGnm7cvPY2cwifm58ENMUTci19Hqx3A3aBqJZhmcfsRkzYggZKbvpSM",
  "key4": "4L4asaZgTHQveZZWjnLXuCTWTkLJ9a7V5U8t69Gf426kW3CPXX8fc3mhRU8Ayp2ySdmcz2YCeU9EWV5Cafspiq9u",
  "key5": "2G3ocjLmoHYUM1xGe6oboJRALSbYzGnw3sLsp9HoEmuuuMA2C3cA9EbVHdFbkdCLTaTi51hsfi6wtfx3APBr5JQX",
  "key6": "izx1QNWoZ4vLF7yse1AZivQmNWE14qSewRxZkatwNkdwWC9ddoigvFu4fRsQwDx2ayUJcsChLHdaNQMmZsPFMFp",
  "key7": "3PCuKF7CMU9hKcPqKtG8PA3NCEsYeyrovDsqA8PibYfQiACuLZWuczs6guLGZkoNLykSB65RtoRTGdVuAVCWiDtN",
  "key8": "3Pa64QM148msZpFhPJXpEuV6zbhyAWJEZ459P7j2V2qWqYVtkWULDTNJwqrAQEP34oUvFogGxN8odf6Zr3UbA9BV",
  "key9": "3T6CGTigGdQB7Den1PR8ak6z1rjPsLU49kFf37JCh6SLcpzrA5wunBUspKSsd2um1mw4wpQBEyeJBqz6hxDAhPkE",
  "key10": "L2GgeXEZQjxGsbBHL9h2njhQs4pgx5UuZ38pG8zA6JbwLYvrE5P2b1FptBrZKxY4oXvhJYRybEq8BumDoVxgySY",
  "key11": "gTtXTPm9rHSR7tUuUSruwKY3K7C4RitVd8hroyKoUFN12VZT1MmUWqbBtbQwfxrcxwD3Nkacn6PhNvHbefWwMKF",
  "key12": "25D36zLz1YkhYtWmyahodzT8TbFRHKx9MeS8FmntQMfcmQ4ezDXjdtvgYNnCJoUm45dv1jcZpnuwA84xum1NGpZK",
  "key13": "5cAJSdiiZiygqy1dEG3Znjnmqe9DqQxhUJR3x9enjo11Yhrg5V2cxm8Hu9sxzNqyAQZxWC22yuv8mX39HLvFb4vE",
  "key14": "5wC1RrqSaKZe4xp5VEmVjvZ4mEbq6M2UZp8c1ayrL2BhPK6K6xSfJNT9g3nQmmz3nsk6VpnFR5XEYtGAo35mNRz",
  "key15": "2em8mmNBQM5WsjWrXaPBxZQa124CDfmx12hLnBKcdvrEp7AVz3SmxzRdkHQtKSqZEvoF5YCXZJxNhRjeuwVABegL",
  "key16": "45yse7TPWwir5Sdo3GkoQh3Rrn3iTbv3RGdayN8oeK33EFJi3aBvjhx1mdwk3EAPogz1rryds9dJzo7uVzg1JRum",
  "key17": "63pfk7wSsKHXXhoEawTVXdQSrKxGpDzrdooVe4i9CDcmFu9cxc8kJke6ANW7r9L9xJmxEFsJJ8uzgqbYdGF1Rqm2",
  "key18": "5xu9gAGauJQCbrwS2cebQn2egiLmyx6mgtbSjCzueQF1uCEdjTPMKjrbQYjGPNmUdnYPPBvRXmpJrRVZJErNVSGX",
  "key19": "2CvqHKawew1oLNA76xXXekCRoLQoUrp5eb4DBypdjSaXwPYejvpihxHq67KhJApGPmv7pU8jpDkNZoQBBQfgjyFo",
  "key20": "5B1d6H9fceYQWgEZnsYYzUaZXYFvJgFTpDKE2sb4teygGCs7vR239TZMffNpcPTFrY8TBYJ6TBBwWP3QftR6ikhT",
  "key21": "3GePWQfwC6gFq1r57e7JD21W4ZRiJBJqVe1T4LVehX7xduAi3hEQK6CJiiAekZbGRiaqa8VLYPCJ8UJBV831SWPj",
  "key22": "3rNVJgAYnJVhZnG5SYDpsvpev8fApDSm8ceYfRTG2VWEzW7s9YXwGpPw5n2eC8Nw9CjqVU7eRzt2J2FXY5hxzPpd",
  "key23": "24oktjr5z4mzMuGmd5KjePbCVRJhdsH1kgybu94qWTJyyctU5pKki8Fhj7gSYfqAUQyzHADmhNr9J2YpycnnwHjr",
  "key24": "ELnjTpo88EG4sby6qKVTAqSjMfdgwXtqWSKijiEjqdg9AM9hwxeiuinydwsENqGZiohZEgvWfNzkGJx4ocJXvrW",
  "key25": "4gtAQhV64YdTyQTyzy1hmXssYm17t9QdUv4hDrT72ym43FcEQJD2ic1XYSsVgoNy5v9kmbQaNty3VzqsWHC8M6kC",
  "key26": "2YXSEbGnC1cLckFa5Xg2gSm1kdssARHXRkWadcowFLMiUguFegYBZqfwxioW2eCCypsr8e9e3M1uj8d37kXHyigP",
  "key27": "4FiSfMJ182Pus6XGm1tqfkaTMHGDGMSYYyvJLTXbhDzQn8Awbu4BqNUUXH6xnHAnsKmX79J2bPkogsfiThh7dPv6",
  "key28": "448DPePYdBmjFJ5Qo4b44Mac4ex96ftckQJoowVGkVLzWVNB8SBFzWVHNSb7JTnvpQ1btRWFwKzKrpwJwGS4MVre",
  "key29": "5J2JfJLnKdaHngN6pA8WG2tWerCAnzdrPdM2QUMQzmdud7dGoaE3HgscczG5toRkkwry1SEnopwikSQxDTG1tDbQ",
  "key30": "67rb96ZzKThjCEAQtm24hqoz4MbKBtdUnyAkNe5ahBFtrx51Qc8EWEH4da62KrpEkxagsJPKDuyDn5tdWBgbrgt5",
  "key31": "uLjadFVxTrGbYwxyEmz2QmzrSvQeGEfmEYo3p4XeMyuaDovkkmZmvteUSgzbvJsysWxBDVkzoB63LsWjUamdT5q",
  "key32": "2Wq441N8qbCxJs1pBWYnPfq2pWJ5A8vzaXE1GQqK8EdYtu9Um8ugBczewhfBELPjoU8XLdyMp92gC7TQMGNSBuZb",
  "key33": "4SDTQ7H7ufgJ3xnfkYHSrbNFc8Dhxqm2sn8kM4Rwx2B5Ky5NcdmxEqoXwKdrDoHUXaFJmHx5HPQLZ2zFnrHicXez",
  "key34": "2h9h8nU3527HA7wbk1XvnxPm5qFyKd9Z5m48HckbxxH4dsZjt2GEwcrhvxsQAtPtosXT344PsASdS8ErMUbp2BNy",
  "key35": "4wzTPfWCJvTBXcnsgMx9KmqHkZZ2dVKF3hZfstPbe5Mg42GvEybELE8nY25pgvwu1QefcJxz7maEWzBmzcFSXuQJ",
  "key36": "2kvHVGTscoPWxEqYKVADLGPoXP6sYL4LoT4CTXoah34PGtxupW9WcH1yR8LCQJ3qsbZVe1KSZwCYdqVLN2Sggnii",
  "key37": "5wTtZ9VzdcCbcbZeNtfbmYDQorj1kxhFCmnHrfmTmw8BgbRzR4KrG9p51a4JhkU8ENJd5aAgNjcw6Qv3UNnz2BDa"
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
