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
    "3WFedCnAD9ymXLfpoBY991BzuoFzRkouCHDnAmLZxyJFFdCA5Res4vzCi7H8w1CeBttHmMaKByU7YatYJ6jDfU6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jNeKZr6emUfPE2rEi567uDnTkmgAtBNnDDnDojrTpkquaVdYoiuKBMkbJBTVA33XHcb1aDdPAYAsB9i17jyr59t",
  "key1": "3JaSQ228dhuqUkw97wbCEQvm7N7RJyGt5mHK6pJwWvMeQgVc6B6goZ2SunKdEHRoWuHWCFsRq3BTzh2ju6rsa6a6",
  "key2": "4qFVqAro75e7YDHguWF3Usj4pxkhyK3kh4XDwdvv77afhRA4rXW9VoT1mRB4XiCsb8oM27kFQBiufhJsa6LqmxM5",
  "key3": "4BwPfNqMkC3AKHwpfs1q3rRJqMP5zsm6KWfVaNxD65wutnJVtALJMpuo2oEVSvkonhvWwL6j9r5FUD6tvAiL3Yju",
  "key4": "3GeBVYCBR99QYBWfsc8J6yhft3Q3Vdn343M9x7rED5acdD7wNjgTPKxmQYfsKpCFmyKLj5dCFu5Z11yAbCjw6yoP",
  "key5": "3TYZUijkYr1EKZfz5Zgx3sW8Ss6bJzCBk5csshWGHFpMW5XZyAJFqRNvuuJXcFjWcQCUGTJG4mco9urLTj3p7kfc",
  "key6": "jx1nZc19T82oSSYhA8yw47fFRYhCWPeoGqwWcA1NGPmhc3pzmTNrAsBQuAwCB4AiqPfUDb5sFd1X9mXkKnFuGzZ",
  "key7": "9r7W5HDtRV53JgCWXssQ6dFbGnWcE8yMx2AJhPXbqtnJ9VcUMpHnKDL8D6fS5o5rR6qycStu7pa5b1qg5XSAj2u",
  "key8": "5c5AHy5zfYZnPXxAUspx9CNiWmpFxzz1XbuhmpUTz3Ded2BLiEmujHjDz1kW9kPzkWQsgiaRmF26TvpLNUUG2xiV",
  "key9": "31JHJ5eCypEco1uVtaf4W4VsxHsEzysN7HMvJmVkSf42f4UuK662xDQJSmPGXxJxnmFTdygQQabDm9mzk6j6c4Vn",
  "key10": "5uwkjvk8apgMJovoFG6x3ok2sfVCYgeRCw2KUczbWpM6N2E4o64TAzQAtm5KdEJQNaCahy7RqmbP11ez86meEeaB",
  "key11": "4KhBNaLZF1HYVd3pVoa6NPrdbfYUeHaqpRQd6utVU9wgdBti46yAqaAeSQJDAhbiNecefV7CogLJ8vguoeud9iU7",
  "key12": "2WHjpwKjkgasfh8mKyexHVtE9pPrGCax1Q1Ec2mdAGevsHJ2mpRnAdnMvDxbibhRU9KyNiMAFrRAMiQXm6wAAbSo",
  "key13": "5RAnZhpwPRLx1wniQfqwqhacRc3X13BThqkVX9viBZ87iuNzRkq31cd55kYsW9YSQEe2bEb5h7JB7Vd1LJoVTpLG",
  "key14": "46orzbRSF4Ppm2nQQm1KdNbwGWBZJaSBLMULC7TK33NoLSwGuoDXPGTpRr7ACsWstoAu7dMesorqtCLJg9qbVLP1",
  "key15": "65vniJxcPvBZE21sskmVoukiXgZdT32fvtssq4gXGogM8V7qnQfRugcToTkcY5NMX5wZ5jEe3cu2PLCTCcMB2w9d",
  "key16": "2g6xNAp3nGVuViCpdMDsLPHPnwVNBEFKUJs2ZWVHF4swFF61vUaQUyXRZepPoh2beqQS3QoEEACnftPeuLfVviNP",
  "key17": "per8JMy1cuwwj6jbsijkJKjQnbgMF456yrkRZ6w1XbF9s1Rrs44Y9SpST9zRWMMaDvAm74P4bfwigwdffmVKY1b",
  "key18": "28LaWw9gQ97tUPGy9KNJuGfvCMNg5WXTt5tpcQrEaKqgYcMadvxiWY2pdcDDRWxmVXx2K2jwJ6r9gAjs7W978vpD",
  "key19": "4FNjct169fbeHXNiTqRjBN2zbpXRd5QebjKQWg9LHhBYEzuyec65v45Sk6NGtv9haobwyRGxCTBaPrBpuzHdgzmi",
  "key20": "1exb4qicMk23ZeskSnBfd4DtopcRmrf7w9JANz4wZVh5nkhuSgYA19qw4NqQmdBzPezgrpefrp16e7AUHz9NpK3",
  "key21": "aBd9DtmVe39Hpgzc9b4yHfD4nt3Sg4jAVyRqpD4MznpytqbQafy5Qx3f6nHZMw4rBTRMhVnkfM1iRs5Nvu519Ag",
  "key22": "2xxtZudgMsakxsnJhfjnczrPK9ATdxP6eYpgtNtEvjyQaZP833PbZjhdwSJtTLCLwYbHSvrqGMBEoNZazBTgJDo9",
  "key23": "5Ju9tQVWAv3A1eLRZHo1mfDzsEKx8CeJDdkTuZBfW9kNjf7eQQrSU7pWDigDABMuJ3sZj7rkeqEX3JXeAjMT7Nv5",
  "key24": "42GBgXirKB2sg6Gn3RuQQbqGqr7GfBWijYd9Ei3p1fKZkCBXWvQ32zHDxcGJMq77fen8DRzGoCn2NQuddfTPAw8A",
  "key25": "qMuB59aNPbScuSFGn4qekwspS4z1jKRzpT5bNDDTQjM7fqcYyaV4SomzHUjevz9J1EqfkpDowrHaEfq3BaqAcMp",
  "key26": "5fWEJWNAf2ZJRcE9rUcp7sqdxJ5mXfcvcB9gFStuqfFSNjVhnU1h3Y6iHJpy9RzB12cnecga6uiF5QPeNRyzJEuF"
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
