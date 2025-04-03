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
    "4Y77DhBesVhoFadc9kpw1rzuEeLHGug64nrY9FkqKscRDXksAYy2m6tWZ4GTrDGiYyovvR94dcs4JpwcRcDt17Nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34CuegfwovcwuhUeqDUrB6uaJQXBwuLrADEpb3KBxb3WVo9nwTSkx7oYqTeLCUiCEW2RBPrkeE7HgD7tvs3xyMSW",
  "key1": "22mfCJFdqMXCWUrByTFHyd19aCGJQn7USSURTkSdP4EsKWRdX29hsT7qwge8uxJx45JFiXaR5aPwFbcYV8pT23Ui",
  "key2": "2eoWtu2iWxczmpKTicTKz7VTSLfGgEn2VvGKosRvKjkqthp7L8ztB7qEAE4mLGNCoRSkkFenEh8vPpGVk1kowXYn",
  "key3": "54PYDCuDPRQNmSkEUy5MmtBFmcWDo4tpTfZp59D7kE725CLc8XFcD9Nyn1WG5oBodaYfLJui3bwzVGTSqDqR15fJ",
  "key4": "QRKH62yxRCJJHgAw8oQnxztHtPbjEFf3NDnJ4UV9dQAQFrsHe3Ui9Xo1wZboHL9zgAJYQfGGukCXkDAWkBWmW8j",
  "key5": "3yZszTBZ3s7o7h7fYCHxcmFHDbcJJWYJHZUNKq8ZPJH7BzxmRhZjANx3rT5QJ8GDvFhcFpjQfYbi28fXnuwE9Er",
  "key6": "2AyqjAsvVm1avEkn887tx6gCiVYmykzwmTqocVVbE33GQ5NWKiE5VsNJkEntXypeVTr4j2ESMJGBWbThyAXnhsYG",
  "key7": "5sdTQ2Lm44qwHUmgKC1Pn4QV2NhRPHm7hcrHyg1KRJ2RCSqubvjDVBr5St7xBnzV6fkhunoGhK8hcM8UgGX4e7y2",
  "key8": "M21fFpXtZZ7Pd7ibbhJEAjRUaqr6ehCJcoA5WzWSVziN9jyrWJZhhNFv8GVA7iMcrNGPEigR6Er6hT8ZASwkoqd",
  "key9": "5Vn5Byk4Cg9mztaRMxBqGSxX827R4fCrsBgqKaFWRJcz32yYK2iLt51h1gsdEBFZgw34uQLwWc495N2QyuzeWtVe",
  "key10": "43a9VAFrcxXgEMqhgdQbxDjKDfTEMTcTuRAwsFNTNHK1tTPkwZ7oU2t8oA4TCanFboQ2oLcMtszcjXEs7mYU6fcR",
  "key11": "2S52fDThTYa8iD91z5LMAKZrzrE1kXiNwhioBq9r2YrQDwL32fzrc9TjpjKTAxPo2ibinq3ESvYybQvTx8kevWs8",
  "key12": "2nBGa9uCkgrEsg831EHpVvogwTDQThfZFnSvrkPqDqRYK2Lrtx17iopVqi5LXmmtbaGMDfPiCP4UpsuiZMfXddBS",
  "key13": "4DVEQyZyK85c4heeweja4ykqLAzSJ4hH4Q9WRdyCnTdgDk9t43ds5qeFtaNyG7E2pFKu2stvqTGdxJcKB9pcsYFJ",
  "key14": "2CNsShb6u1SzFQjAzWvQH9NVSyyVE75o65w3LyDLjiQ6SGqVizGF6AHhTyFaoyHRosDBM9CddKvww25Ciur7Hi7w",
  "key15": "hjG3CTTnFx5eBxesFSUpqkw5o8p8QUCVPAQbQhBD2NYhYyLHB447UuSyAyEPNhZNcPUPQjftDddqsjWLyRS32jj",
  "key16": "58eha6CUdjyXj35wH1tW8ci6FUoT8XMyoQzPqi4jEZjKV9hHxieiFikHgkkLx1MpZvJCRWN9zdBayj5AVnS3UNRN",
  "key17": "B1YJMH2aUq4wFGReJZteQGfL7FMNnYZkpANKAY4oFinF7TthYaTNKaNgzpyU27FbjC65pzdr5zHfXxqqBic7aaH",
  "key18": "7KwcNrHzLKBKxBGcGwDvik7KBxNGyM4AFocNAPEGEUa5QdoeGTqExu7z15dkw6R3my8iQZHjVe9pgmrZ3qTUq2V",
  "key19": "3SJCqsoMt5hHCZuRvf8QZfzxvRH4fk75Bcf2656bwGp7ptsoATJUxSZ61te8rhuxbZKnMUeAJv5Di5AxNcwaV7iR",
  "key20": "5zQYPNqCz6cH1LG5eaoc7Sb99RFTDBT3q4HBZyk2SmPbBhSgmnDTWPPTHEV5G3tDX247xbVwk2HgYuP2BUmYSccv",
  "key21": "3F8f9VBhya5CLvWFV6inXfZLMJxL8MwLFWNhQY254S1AGaKrskNzeAPKLxKsXWgyJAYPsimp4xEdG23zHSwGnAvH",
  "key22": "3azeZbAz511kxDkE31QVQBZLpXN1qqhEpwXd1iHxLGJRBW5egUmZkqz4XrV56u3b5q4EamDXwpnbdPVh4Huky9zD",
  "key23": "2LUhH438XYJyhyfGRz14mqUnEzwf9mBVLjXUjrufwSjFN4Gx4SJtPRDW1DDZ89ACqorZESw89FVoouyd9Pp8MDPJ",
  "key24": "mKBG4Niy5LKf8mHmNutxRNVX8A2981VbEAb6B1jH6fd5cDxFidtNKBRUi6MceK1zFLuRsFLLFjcdgeKpwG8zRs3",
  "key25": "36exc6WTULq6yr6SUkLrenFFMGAhSgdn99Pz5GbHbfcqAiKdJRY9BzRY7udBtgUH7V1VVSWK5znMk4ELvC9VpUMZ",
  "key26": "23dBToJqejohhucv7tVQqEk31LEvm5KB32CTXRrRotWutSXdeoKtRmgWyZVEBT3FAxwo4rf3xwDCjwpKgHttQvGz",
  "key27": "36kj2BRcJKda8G62o4ef3GEDT1STghftL92XWsQ8cHLVopznfSkyZcTDcS6ajq4BiSPZRUVVccYNMsSL4GPgnzUK",
  "key28": "3uopar1hcazPWUZuRnYpadAy3Q8VVxCvct4Ws2Mq3FwaRpnCWpmQRjGTeCZmaqZYjXZ4TfkqMCm3drPJ8N3pTEm"
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
