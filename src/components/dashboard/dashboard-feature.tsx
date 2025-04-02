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
    "2j1cQS3a7CeT6vfL2pZJrD5Nm2f4LW3daKogaibisWar4gSyfPxzLYMNfDBDgrfwdhtNc3hareM2HbTLoo9gsat5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kowh98TivucN2qEw9HdKjnfP6o9MxN2xFexwEM1gssTDp6UHoyDkifHsgewskN3p2Uadt2mhhfwKG1Tsb4KMz4g",
  "key1": "iEeFmdBNupR7yCbvD7h7VPvqQeH9A5JnBWw9SVUPRhNKkZ81HqFnkrVnjYHpmzUGNxsEJgNeNDLxmjY6YBSPVwh",
  "key2": "5fTnX4G9XB6iAe29TkumNa9Lqk25cvKobax6Pb4KUHop4Eq1qp97ndDyf3CMejVVnCUmrmm2TDpm13tS5ymmPv4w",
  "key3": "4ceaTmK6w6hXKoGVyB7y34F6k4W92SNExj5HMYt2eQDUUNhyHnYRG78GovjhBCnRjmNZZC7D4tnRuDF139qRvkD9",
  "key4": "2nxtC5xewsn2nBEJ577LjinrrSsqjxrSBUb1ZYKHZQ3TGTkSkq4KQTeWKTjic5NVyt2TKhbMWGqUW256SG4o9sKU",
  "key5": "tc5DLAB6f6dYAGd85aHmoabFRs2Bt1Q9Ut56i9Gq6YacBo4A9c5ZKULnwj8PX2iHisxHdSNETrqhVziZzs52Ubq",
  "key6": "5Kys2SMVbiAod8buYweegab2bQPRAaPqkUeEyDMkhvbT6bmcPk5ZcLe8We2R6b69HZDtYNRo7wd3f8HdFputaTR4",
  "key7": "kTfyv7qLnWH9bVK4mbsSXuFdA8h9VtDaHSVkrccvQ9Ua2uyq1Jek9a4Wqkjavi9kGytUHTGmHyUNyw8h9jN8vmS",
  "key8": "4cgVKbJQdwSkTDePyvchteJKXushhbZJ8X9nXWhmJpKjJ129Bvh9XZdKiTC9k51CUaZvXXM2SiSvKvmpgBZPmC8u",
  "key9": "4ajCYKfJiXYqAk9eQ2yyopMAPPqeYkJSuYTcrprJtjoicAEdvxVcHFVeHxRPbdSMvJUJSq87umYMufHFtB49TA2p",
  "key10": "5r6XMtDuY1WLjsnvqqj9TzDYkTXip9AWJmfANuim8AvMprfs4TCGQWX95ojLnHoomJzr2mCvuiBrRnagwKJy7AfX",
  "key11": "3xFZF1m3Ehh4xmupYZEuHo3gmXAg549DyPmi46vg1jmmXurrB5t3eLyXyhhUzLYdMps6MpbTYUmhwT6qHrsYTJME",
  "key12": "2tTGmHifEw3nPeGEG17tHzGBEMXrUQiBagvL2StqNPdvu34BG9958CP6Esym1ZZ5WSq33QBGQ8EAzPgndvknJoN3",
  "key13": "gYVNbe3BdG1Z5tBa95FzXgj7on2scqQy7s2RtYSYp5KoCWG4UVq7QSWxn2cHj9tu1ArHhBRwbf8cyND1cFi9LP1",
  "key14": "2hyHgLJJnDMyhMzyafxrL1a2eMPYWYJyo22b4hQeJnyMAWVGZ3sG4s7V7eFF48Gf3bqjQdMHiAfCisAa1U7PRtgH",
  "key15": "47GtAoqm5BYySEu21awvaJoFfHYToMtRWTBxmAye27rxiFrFcLzvXuRBJyiZ8UtndPsVUi1LjaEijuv4np4jZTwS",
  "key16": "62GUAj8PPEZq6CG56XvMJsL8kXmkJ6nF9yZLktLY4hVU3NVyPUJ9VDFkWPo7QLgT8C4bJgwCjDo8BnxqpvxTcXiN",
  "key17": "2LNmVLuRsXxH9EWoQ3DiHwqzgJHBzqwyRw7ZLENHxeVS3728J6Y83Eut5U3igLgDUgdBPPT7yEMFGum47kJWEWSu",
  "key18": "5DSviNT68hgnoFfGQUgn7AgH5mGoJ5N1tt7aiW2VK8noz8biqPFp768GiRhPL85aWGaZXkrN7UGyktn7pSR7Tp6D",
  "key19": "5PUSkLHoK3Jgyqf2oSjUjSUGg4Zf4b2xdBjNJy4vXEE9F8KtbckdvjggxCLo3kCEm2aPsgLfySMgR6sCCz8Cp8BZ",
  "key20": "25m6Mz62vNr3KUtQBRWMpCvpqz1SNZbrvUpLyXF6h6RcT5aFPuBWPhe1yM84G1dAib9UfDAPq8sVXQB3ajm4Z7Jb",
  "key21": "T68ikzoMG2aLDk52H69eVojJGZgWwX6ZGek4v5L9sto5KqwTjddZQGz1LkBX6Qq4eWTqqSp5uftbvhLybuj73qR",
  "key22": "S518WAxKBgUf8NMBdfPutrkVRv9mc1bau7T5ihkbqw7ATKdjXjwzVai95fuDRy5XUneqsW68LM48EdoErrJjeCV",
  "key23": "67SBzSCKErNTnxWZ77ZJ8s7SDWpJu8EL5nwvq9ZGK5qoDcQ1SoJwAjRVerVrQD8KXLRMpDRFZ6BTXn82SiRHdgwh",
  "key24": "2wmtsqzhLA7gTwoHv7y9d62m26EJKYP3QpcdaBhhjHLBXA4BgsZUmQDmRuvfcSQsdbTk766Mnrp671XiEG1hAd92",
  "key25": "6JPY7tVwNrhoY2wHt1qTpq6EbTcnKahzcJkHG3xmFS2znbtsCBgmhxYiSaYqbfi99zGxG7ti2mptEFiahXBzSJe",
  "key26": "59a4ckx9Cd5mawghf4RrepFzyj1jDBjkdj9RQRPRZCww1fm981fUv7PSrGTbv8aqnGCvPi9uE5u5BHs5xqqkhrBh",
  "key27": "25TcbDj5n1cJn93nzKcjatLTarw49rd5SxN3Rn7rnowUTzTuqaF9Zn7B9bDsZ1YcB6BD4fRjJtch4mEVJY7GMFZZ",
  "key28": "TPP1akQPcLBhBUr9JVbGL7wndZ3xTNqQkqGWD6ncGDmM54TExQU3jPuvygx7jnK5EnyE2JpRkcSbryJ37kdwCVi",
  "key29": "48mMeN3KGTLo6rDjrGT7iBXtfi2takifYNk6zUWytnrvM6Yos3211mXWgicFPJYpBv7MkHxYMn7rFthfutkJMECj",
  "key30": "34AAYJfY7RG4Se2omo21iTUQYvPAmtrufH8SiV8YdgPtqKVoQtZzd8B3asQoipAuGxfkfbXXH7Gv8WMAxLaH8opN",
  "key31": "iy2vwRCm71GhQwKNqbxEVSbfqZpzMqGpCU9wnMqxa3PkCKsucRNTgdbiFXtvJ5xLfZVC6BaBPyCaSDNDtFFAJWo"
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
