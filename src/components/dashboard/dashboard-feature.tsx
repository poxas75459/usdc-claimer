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
    "5qsf6XMRskCuXzVJbDRsJeMSL39wGxu9tLyiGE6TiqnUVQtgBnxi3JeahE2NfUPwwfqnXpUeR2MJqP96tXMGyxwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GkPU7Cux2H5Q3NtVggdhK3CDA9puTEZrt8YotwfTsNC8o9Hx1BGicaD8oi9F4gA9Hi74AfnK477wZjPb3PyPYk2",
  "key1": "2PAy9RBziJd66Veq72K5GuckA42kqiekAJu8xiP2Wb7Jh5HKDemkLdRFwjgiyE3vALtWei7wW1nkGsPr8VaQ5USo",
  "key2": "28h7jj6FYRZ4SLq3oPgra1tkT8cTnPrboyqNDbePKK67bH7NS2TxNobG9WW8xyLv52jjEoGQFmZd4qeJJHHR16u9",
  "key3": "63KdNRnDGfCaSMWXL1h7WEenVKUrYDjpSFJyFQSvjWSTRqCtgQxTN9a6gFGyJiB9CA4ew3nVDCAsfhkBb2w4UrG",
  "key4": "36eHdbMhsaXtc7YLCpKJTeyaqd9F7YkGAQdCBBgUkUwvrhEtx6pGUjwQ13gbmUeEkab7KbwdSDyA9j8YrHx7k21D",
  "key5": "2dMLZWJwQxgfvDkGbEqBfUpestcBixuvphthfz87S6iZFShE5WasPJk924NbMN7XTESupZ1C4u5Kuc5kDvUsUehm",
  "key6": "62f6zMKXLkCu6eYyfm6ZQ5aLu84JfShQ2Lnhuoj7Z8jiGq8eGTKattg7WTA3SvfQShCqaCyBVt21VfEW7fE6vbA9",
  "key7": "65XKnthngwFDZfuyV28kwwMtqWHkmGnoQeXiyz6XFLmgguPqE2M1gKu9ZQ4zGwStJYD57njG8TnYuqv1JcDq8Pwe",
  "key8": "2kEECnLRTzB5SX35SHn3nRvcJRZJrzLiUkxyoGSCgTaFzq7DG1w3JEFW3cmJuMC3UxDTec3EQTciD8bwrMjv5CgG",
  "key9": "3g49Djf8fKHaFnzyghXzNyNHmTcgwg3zRLbdCg6CeB4GqwVa6ad1yuD8hXwkDUGQHbyWHXrRFRmbttiiA3DzoxWS",
  "key10": "4fpzbp34RZAesYrAFjUPA5HjDh91qnKTT5U6aQ3iQLTXYsKJrjo84CQDSD3qEgEE6hodLvzX1oks4U78J5hXhMPy",
  "key11": "2J4N5WCPzhN7CSKmG9n7tpGYAawctYPPPMeQAM37kYC2oU9xjk3wow1xXGeKb2GQ1gvLmRRpeCfto1QyqgjzPT6A",
  "key12": "5aFSTxuLgH8rjn1i5ARNZj2DyNrTPqYBgYL7tFKXW2yTTks5pfQ8WjKSmLHkxVKWjcZaCg7NfyTB4WvKYtM5CJs2",
  "key13": "5uMSa8JFaCtpbJtJZGLwwWtehHgwX1D2JA7EqcrccrrtjKRTWyaSjomQGcrnbKUWFyEa7cxXSTqZ8AiEPaqQrEHT",
  "key14": "3A37WMCsojnEqNFHXtnsmCyK8KUMYPKLK8xDxNeCi26iDz8123o1SkceuYJ3B1qx7uWYy4bTSHKqzSvMprMQ4W9j",
  "key15": "2kDjsMupvZkW6SArTh59uFF3GB6Ss9yKdq63bsq42mHtQq5irgbsN3zayby8t3n2Hh4E7VKnTw2eHtCQvcyrZY6J",
  "key16": "3Hh4VffHNk5R2v3wLy5M44gDDwQfnJmPBVaBnn9DRkgxg8wQmNntohNWC51gZz3Zf8mSHSe6PRxhKDJF8drCpoTE",
  "key17": "5399mm1iC5qyQCPGJ7rzgpP4UKER64VRRFr7rpFkLxRJ52XgAmMrRNWMjKWXpD4XE2Bx6UfdbXDyfUQngtqFYj8K",
  "key18": "2c5u2E9GvbR3FU7Kbws19zSBxxmQzTkMwwL8MvvapSsVsw9AAhtqCSyAHnvPAJG9vaeebLcS7NbYiUYGFhjpU3Md",
  "key19": "3CvC4NECtBw838hhXCG5zdFKepAHx2bDKp93zg8426LHLZUMv2k33TdmnPNEJeht2UgsohuFeSb78a7vZqAePysd",
  "key20": "34xB5jmn8e36VL6DmnXD8BddiXyb5B8zgocMiEAuY1t9hALGZ2ushKCsb41XMc2XELsepZDbDzhq2s9dFDsrUoem",
  "key21": "3WYfFT1ffsGNhBxUm4FTpwyxXkeNdmGR9szPexicoQzjrDmLMJENvqtzeodNpmHUXjkM4PN8pMEXctE6YQQiexZb",
  "key22": "3jZs9ka3jfutTbXFpDR2vnV6tPoWhZ1SMvetaf5Cs69H3csffc3mzvMaTbnYCQD28k5oMRhUXoZrcvbn3Sq8Q9MD",
  "key23": "2M1Xkx34ZmwpPJpBYPkMgZ8Dux9YmQjqTdXniFzVWZHAzX2cryD7B7m4a8dPFwZh1ahJke5iU5uG2TFhyS4AqRWi",
  "key24": "5CSxAqwQWta2eSLbuo4ZJ14UiUvQu7FztQGTRMNL95EqAm9gx4VRwtgh7S28UUkyLRn6pqzrm97k5NJM92tK4c5t",
  "key25": "R5xuoeYuHKA1hkSDouzfgH2jAsAaAHjGyBpZEcpvXNphCynrfkc94idSuvNAoWoRQJFkt9oRjbrwMwkF2XXk7Vb",
  "key26": "65f8Arp4JRMgSAsaK1bd8K8K9UCW8Gs9eWeiSzhxM2sprwrDEHRJgqyvzoe9cXKLRBSyF6CxpHq9Q6C9d1s7b6ay",
  "key27": "9EgSKuwdRG2DnGebSDjdR4HP1hSfjW2m14HoHyv3f7HDM7i81QGfVVuzUCNtiGJxbaJLztt3HfQ6stSmm5fHsTt",
  "key28": "3YugmYFxwY6Z4kbgDp9P6AUcufR5HDRjsTBrPMPMGwi2soS36xS1FPke3rbyNXRNfvpPUUPpEzk3v1WzFBnm19rJ",
  "key29": "2KxLk4sycVcPMshkFnnEnqPkRFWpXeE27SqeecVfv7QkXsB1MrPnmwKZxGivLyJLzh2R1gWwBmsp5eJQPyFBXonC",
  "key30": "2MWFuN8yiifY8prx3nRedkC5V43KEBwYsh9Fg74yR7rEK1EEZd77eXHgF2pCdpHKKBTreLesFX1MNwjtvKsEEwZm"
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
