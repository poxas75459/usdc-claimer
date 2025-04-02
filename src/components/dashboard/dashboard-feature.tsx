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
    "3e1umoGxsf8DG1AMeaYEfemGnH4PPHRoeJfWvfRrzFL9WH9DMCG88xi1YAYSMqexNwZzT4fwCKJJXM5jnJiLcUu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VNr7bDsLwDUvSMoNdxU4U99gBHGBeegm8XbbdoJiT8WohF6mTM8YoQBGGBGDoUnQsTe3HLd3WNFDP74kB7ER85Y",
  "key1": "3GuZUyJyJ8CZxyMJvJsNCUzA5AGxpSVXqkdpugUe432ZftJoZydRKfhhfHH7fo88DfhGL8EudzEwNe3Jdgo2DoyE",
  "key2": "4YCmDr5vTyjopm3zuZjpzsac775MJA1DqAkbBfzb1NUsNyXs3mDD8rstUV75xLuHuSSYwMuARbYreGjn7NLw2qp",
  "key3": "LveWWT89jHWFUgegtChNjyprcA9SrXcT6SFADHehuvGQGcLpTEUzpZrXNbinFHVeqi5AFaiFJJvkjKS42YzLUAw",
  "key4": "5R8jUYeuziiMjMurija64VuEx7FamB4VWiHUYR7fAzEjZvjJE5CEdfKgPgt2ztfn5ofL9FUAKUptJCkeqYqvfQpJ",
  "key5": "5hg9qv5hNJNVhMAn49sg3ystbicGonqgLRqhdLhCfY6pympb26Febc4YgGdcLsCtwthY92M9hUCHNFbVKXfRoR47",
  "key6": "BrnPFqYfrckSamBoJZJgvhmLHA1CramficVwf2E3Wmp8uWV6huvwoG2zypz8wbxZ8nHDcXpwfRri2MLTYr2cqrY",
  "key7": "5NLHtqqscHRV1r8E6Qd2oraizYRKz8kFnjpuQHdiy2e3jNSPwh5x1wCLZc3gG1CcBr9wDXDzDkUUvrLHx99RFtbY",
  "key8": "3Q23JghggSjPdvNuiJRoVQyySpgCdaHqnd3ZRR764gHABn2bJ3GHKhtzJGFzLzVedbmCoVrz8Ws1xRCtSDtPD9tu",
  "key9": "4S47651zau7kYMS72Wnbs8wrGQiwt27MoeRNKWjh4TaCrwc8LKDV9ZmFDjv7yVh428s8J95EB7sAt1S5sgCpHRin",
  "key10": "4b6c95Q4pH4R5XbYsJ4SsFHunNDCWVxGWxc9EHc3jqVWeo3dERWbRx4bYbtJey6re8TGfmyNjeuDDkoYR7ZduFkn",
  "key11": "5S1ZD3vwv6kgC24WXcBhUfjmtwhoPog7DUKXpfZTawBZzhWaLR6iWSoFjyALGG97mhPR9bV8itsLbbZpYZX4WZbN",
  "key12": "GPNtF22XbKfiWoxsQoTyqC31ghiJxmwqgCgk2qq7ofxjLYavbYYpTaFEobx8scaXujSYcbXDuyficBouWxFp8LY",
  "key13": "3hkuEc54LkQMvyRqqe7FfUZp1hmBPDn1DoxW88XSBBT5Y58yfT71rDs72LCkzTJTD33jx7VRxf1KTEp446aK7kSk",
  "key14": "5WNWyQr3P9i4d9SqZUuDbSzWbz6HUE3TcUFP2fJLj3iY9NeYw3PNTnQS4tk1hfqK3CvNiPLdFSt9BwR7YPR5NeNF",
  "key15": "436jMV1qLaTMfz9bzLet22V34ABctfak7REqCLHj4FTJofoCXn5Wu7ZvVaqtPVqAaFN1BKgsTkS47486kqziSazM",
  "key16": "MnrMeXwNgdMG7sL99rP3L4kD1SK19jJTV9Fqqc11rVamv6Cw8KbHtyTUxLvMjH23UC3dHdzAGoWpxv53szY1GRg",
  "key17": "4KCkeQ6DG9sgFhhbffMYbAf2baV6DwLbUtDHKeB6193yxMd7qv5hzq7H3bx7YB1ZeLESQ8FetRvvcNZGUpQqwW7Q",
  "key18": "3Q6oHbeqxCM8kTpPukUmPK1qjmAomkcPievYdk73qn1Fkrb4neKAZcRh45cQCrJ3TQuy15prMuuTs2msqKQ5sgHi",
  "key19": "2UraPdWxdqcEu8MHqAfDLAoUYGKdopLbGUTUBg8bJ1rEps4Bhs3B2XGE2in52C36ypmoPE9mSQTQTP4ZSkRJSsVT",
  "key20": "3b1XGrDXtUEzNo1MpFTNBy6KFBg5ra4zUZeeLg8Aybd3ppf4Kw8wHWtppQkcF7536qUMBrWeuYsYH8qV75bUx8Rx",
  "key21": "2jbP9KxwFz7qm6NK4FVg1g52P1w43J9Eu6Do2sdojbRvjjgdxYf45SDwfNqvaTuAkKhZtk32PhfKi3YRHshavKVa",
  "key22": "3eSXpqgv2snA62ZmPArmwy1iSdhAHUZ4MbKY1QHCHzg7gYYqyVFbmiAdo6JMR26YJsBQjfvLB46HUKj4yvpQzujc",
  "key23": "vqmp2rQ5ed7RVqgPf34paYa2dctabRziJ887HUzpMYgrjKrYeVPpZ1A4ufHjgAXwdKuA88ctkJ5DaNVQS6VvUYp",
  "key24": "3CAXPvVvTRmy6EWCiiWdcbYwH4bdpWbUTfFDGQHRRfYCwERafpYKQNZCH6NduDDNXVKBo7CWAQpbjEZrDeaXrpvH",
  "key25": "4BRBt6urVKbFTTdTWq8vWJ9tgRokBYDeJDEGuZp4AajTimxxjMNQEKUzeth6hoRPC3uqtWXUmjgjfqUrAffGepZZ",
  "key26": "3JJAKfcbzKr2XsuvcrTeMGe9hHarc89CS7jahXWRV5auJJCHiCWb1BK1SGVgEuHzu3mSNXG55PyCAD98xnPjp5FN"
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
