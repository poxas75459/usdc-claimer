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
    "5o9HBRbEGBHtcpKbYKoG4v78Y1Lu8draM8WCQHDkQZxh2C5XQEaGR61Dw8whk9LPKeDW5VCX6JSQRKwndRoJhbQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wCkNfN5tyyhQyuEnBWhthTAzF5tzrUufPbxmt3CQDjeRZV2V45hSkCp8zawxfBRqJifQXfk7DtCniDNt1GFHCj7",
  "key1": "35mWxocKZJwNDSoYqKb8oZ5VJmdHzMYn1Ep5Bu56RfSF4Vi8v7QVGuNF8m2mvzY1YRaJDiYujDMir4aSDtGEjxjB",
  "key2": "Tqy88HSmv4dkhFxqAcvdFQi2nbQ7E39DKAxbCwC6gWmprjdGkwuUg9DqinfwwfbHMrFQLbUJc8UvJ4ACp4AkyfP",
  "key3": "4L9tg6a39pwcqRTkaVPc7W7ye4ChnVUjD7a5mT8yH6AhmrU9y89WLT1urKs5yFLP8jvaS3VgKWaUjaiKn5WZUBT1",
  "key4": "2m7n1YSwdQJ4uN7D5FhuzZsUgUmtReLXDPePLB8DLaMokks9MvdXmh2oP2nWe6D2bKVpZEf2dLGR6cdFr2hb6wxz",
  "key5": "4rguKBYxSUWgonUtCN4snL9bDct25T1pfza3x59P2UJarKJWhxNd6c9rdmn3gn2snsiRCqceGe5kn7LwAM74cnre",
  "key6": "4PEbojqPbECyBWfpgaexkcidvtZFhd7R2ueBYWbsZn9f8R4k45wyt9Wxpkccr2N1qiAkEszkL6Nq6L5V4kBkqiUn",
  "key7": "8HyNDDJ9Drojeid8p4Td7WRhcVinnLynq7Erm4AFUaqfGzvHnQyBMLb8z2jFiKmdp3CYRbFmQs9b9FdMQbNCTYH",
  "key8": "5Rfmw59T2NFH1EJUS1mgGUvsHZmQLuoWXjuKXedDB3vGY4W6pDnGzvKj5KK6SG11W6NNai3qS1grdCXr6cjEhxDF",
  "key9": "3UPDwypsgks3dPcyb2BBVRSV7xhmbaSbSQwNrM3nrWvFbY3KSVLJiKWL3UPR4MVgfvxoDea1T4FaE2L9y3qpxbkx",
  "key10": "5y4NHQnw5AiK1j9P9gPhrbNEhx9RyjEMaSEpnMCXtuVLCkccMvikRqySpCjgs3MTN53n51qaT3Er5N32vov4meqM",
  "key11": "4BZ7TUgfSNqZ7esCKAmMNCR37N6ad1dfPXgT25qidxmk3GgAbnYaYFHaNJYK9QFqaGMsGLQL9uvstBdqPfWJDhML",
  "key12": "4dFCoaYNJVvzwHjHKJ5PoQNHPq1JhHkRATf8ztm8QQUKdEuMVSQa2VrfstBYQzfsvrhbp6L8q5MEvnYqLw12RTWC",
  "key13": "5y97pcPfLnHDNEM77k83xLDzJtT1y7TNUp4euY7deGn9qqQH3GHC2kWGQPhe7ShjywPk68YwZvemz8b8e5W7ehyr",
  "key14": "4sd1TMuYYMXViXcVH7oN9EpEr2DVearTmzePSdC7H9BgvQw19QUop8ZwwHDNjx45xw1U6WPoawiiVAHc4AuccqYb",
  "key15": "4aVGA1UhB1VWaaGXSM2sbZMGuE2zRRM186fUgbzktPGAqfFsXW2caoBu4tB9JggGksWHknzxTAv3TwBVEEyYW1m6",
  "key16": "2TtwkzC2YXDqrkZak5FGdpLmprgB2Me62PbZPRhY3SQ8eRzf5XQqrBYbNbKxSZm4egh3X4iDmgXGfD8Mnoz9rGbJ",
  "key17": "4fQ66BvFyFzQ5rqPR9Z5DRjgvHKCvo5aq9pvPsRiS6TgmAfxofrmatM86iezFtPivGWaWScrUo51ng55FhdwAkfM",
  "key18": "5TJtqGAv1rjpu82RLC8fyUzR6xtsy52JqWyGfKRCmnAnyXDQp6Wa1eWMBBmbZNdXKN41cn8QcgkmwNakCLSSHhjg",
  "key19": "3BtrYWCuUmzCzwZMt1vS4RWNiu2nLdBCFhP4AJ6g59PubBKQWyyw9GT5omYX4KhrKYpEwSk7yuzKuswCuamArtHz",
  "key20": "5XEaFAukyCHwqTAAhER26Mm6WB951w4AtkGobsbd75ycfnA43Qo8BFDZUXCpm3MTFqQCHhfy41hTr1S1dZ9t7cgx",
  "key21": "4xWSmdV44aPwJ1stG9Tqj1a6qWyBJuKt7D8ivQS4aASnbWnW2G9DXX97kRDeHnpWYMQh4cfZ2eYu6XkQAyesLVjv",
  "key22": "2mZaP1AayuSASkeL78HUDFLosrG7rshuNaUwEFEyh4hKTWb5Gyex8CyJ2vFkKPFMWK5fr95aXreZorUFsxmA9yaJ",
  "key23": "3hcbvuMNf6GzqbGYRkfmCz3zCA75zuL51xDA36opbRefTuyRuY8hBKZikPdwydBvg8tqKPc6YYjrpkoBYzxMZuSx",
  "key24": "48taszPm1ZsF9qfim2TD2as3XGqEkPboN3kr4do5V471XsVqNorNDJKbDKBQipxC28q2kSXEJhjwkeF5MdFYKrKH",
  "key25": "4mQzNYfNNgp2spnVR4iMgA6FrFw97Yhe9eMLLume5GrGt7xVzbERh6PMDxjbdMhriipBfWCHcwAsK1YU1rG3soGv",
  "key26": "5oGTzUd9TM1kkBRMN3AtCJTCT7FYd3tVE5Bus1rYFuvgk1dk8P1Y1KyiGAPJcGgmiCnWYWmL5pAZ7b8VLaTd1u9x",
  "key27": "2cvU9A4LrQQ4SnAuVa5hfppCmpoTafLhRpQzW38zBtVjGjKZSUCCMtWnUB2iXYmfv9rBqhdt39hLiDZMp1c897R3",
  "key28": "4LRe51tWxxPzSXUt8DYpeP6rvvapYwDYqNMwdKFGiPmxTCCHyH5BbijtiVt8YJPkqRGB4aqyUp197T8xT615PeM8",
  "key29": "2jmbx4K9VpqTrWeNb8momvR4Cai6rtnLUZ6iB2xrm9zXFQRyyMYE5PZnSmUz3GmpapmRZ7ACzWWuuqjtBiwhknHp",
  "key30": "4i3N6yb2KZJMiy8JdTEqyecWXYC4NJs8zn5sMvetcBygqbyvWHodGoyXV8STAnZhNGeh5e7hWz9tK6bkddFBgQS4"
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
