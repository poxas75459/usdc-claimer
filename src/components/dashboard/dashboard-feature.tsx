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
    "35NnfrPVWWhvb69PgnWTSv576diw5SpnLQT3eHFHMW7XUK6xFL4zMaHhzL8FGHdshAV9HMjVCYSDsCwmffaoKUP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JDqThuP6g67mZ1SuBpMQzdHnQXbDVy1AswwP7YdYjkSzMthTxLZnYYFV6XEwcQVEQK2WhawiKuybdKC4qboqpue",
  "key1": "2Rcz5CNHdHVh797h8VQ1uJDW3d8BQxvmQLVfe978zvpZscNXasz6TYsG1Rj5XSaV3mMyqmcK1yXxJXpVvniSMbYT",
  "key2": "2qk4iLJ7MzZFbg9zBPKfgCcyPuVR2QZyaa4mKm3h7fedYLVrPerqxRJrgRK6DFBUfyM7nfD26nUnfmYLb2JoiiEc",
  "key3": "5AqXSVvnNpwSggru55txxffpZctTvK41pBGZyHDFyU2FgqhcHzvJW2ZZqZho7EFQm8ZnHJz6QZQgBF9QQXcoTNir",
  "key4": "239UmyxKst2oRBXaDrzcC4UsovA64sfSEbZvbvoqGKqsz1tncAyt8Rmvr63QC6AieQKYzaVoqhoXc1UsYggGbgaj",
  "key5": "56ohdB9q2jRdr3X6Qb6WPQBofkneZmZegSwg23GLPE69rRBC1yMXzf8C2AG1iXKFcMyX5SLfiVEJs5Y8qfVajwNh",
  "key6": "pDo6Fec2qieWwsFFHB9hBX6DHxd4PChWU8eneM1aTsEYE19rEb6jUj6pwQRmhPbSArURwpedgrz5moSa4UaK92X",
  "key7": "WvLCjzXqGJ54Cv4RrJeLkMHzs7MQzpfVHJWCSMHtW9THsWCkHkWpUYnSQ8Hd6XBYX4XNJYT6bYVNKty9q3CvhE7",
  "key8": "2ueVoj4nMuDhnrq6r6ehsTJMmTxS7PQGaboF21GAZmFYtiDLy7L6Tm1hYjqnN6CTpcvdm2Brd2yCZnr6wRr4gN1Y",
  "key9": "3VWXi6ijdoTM3kR3FLGrYhsUBEytym4BLac1NpgU39nNDD4boDMDy45Jpor1ausJZH1wHNK569Zd54GHMvFv9pvh",
  "key10": "3NThxdx8ceXHk93SQk6DgktczABes52fmK6MzeaxXxnPA3QAna5NBDxdynUn4ZbfqSZP1MKnwkXmybY1BkkfThfV",
  "key11": "42MaJxC66Vo3HReEb3FfPz3vvAmHQkojPokNG5pMNsjXw2hrYMbuQPJung1BZPxGq6VRo9aeVQgX4SG8kRhAUe4t",
  "key12": "4FmzPH59jE326F5our6xvmr9xqLjh48DtfDYy2yvF5GutmnS3vr6LY9exdWfzzuGQeNh7ARPDHxpBMdz66S6phv6",
  "key13": "cTd9c4CyTYdMLMa18XEh4wu2YpiWb3zCswg5UeeMWRQMBUmRAsbpVFTjYXZQZgmdSjHwZvxBoVisAwaoh4hgJjE",
  "key14": "4XaQDjLBPVzk77xbTe7Xhx795rtJBQmazY9Janc3LRK6WRnRtGaCc1HNSq83XghtirD76PjujEtJNLyDxhXHQcRw",
  "key15": "3d1JVXBTY7vWHW1GthndbZL9Sh6RusLHtv6hiRcvvw2UiLh9SGk7V8sJe9yuHFm5Qgox8e9d6mZdTZCEENCX6Pob",
  "key16": "4bdwUTaCpmkpnhjiLqvtjGn6kH1j1SQnEjb6JeeREuEb4WGdDAbZEiqKXBdtpzDE8HKvkX4EwmGiHKnfXi52MVHL",
  "key17": "cpnJyzJa8SRmJh7onDEmHosMgTHBpqHeAG3Tnmn9hui1btxDEvgtauc8voCrpJwHiwu7AZfjpgKoLhgTZZ49CmH",
  "key18": "211vkrL9wjZpgvg1S7fgTz1D7KESdhR26Q6PxBFGS3CHqmUawRshg2BdMsaLxo9fbK7WJBgp65FDxZbmhCesVXNd",
  "key19": "dbVqof5GAewAjany8D47xG993ns9AdSVhaCEPuofCY3YbQXeyz8ZcEC3qafdXV3vL54kRKrTwGtVRtWDeAfsfLf",
  "key20": "386EgCUpWacA9KdxuU8NGiHWMg4uuvWaqvYP3LATdX3LNVJQHPFqWbKuUNFBmvi2vaRXSraVtfASSFGx1AdvUoQe",
  "key21": "5a1nUf9hBrhPSQEurh1oW7Zcq9Ki4NGeGKh9zJ9LnwRijSmR2yyjF8w8fM2R2hdpYCs2SacUx4A8XRj9eJrJYkPn",
  "key22": "47UtsxtVXntqTJeEnHDoczmVEnUk3fkwQ53fKT1ekJ2DS93jjH1qsU8FPeJC6EzjN5LyLLS7ShccrdGHeuANLpKC",
  "key23": "37L523vVkVFLMxVJ9jpyB8VvtnuyF7XL5uEZKAmgynTJwu8tv1t4fXDh8GnFk7TPRfrnogvVgBA8b6cVZkQhQM4t",
  "key24": "5mr2Lzx4G1XyS9gfvcG5KgeYjZyGVCySxT2BoXhb5AZoE4cHU4yXDPDNiAchwGaPhQ2eoyhY9YcsFjrjmN9uhpg1",
  "key25": "9wZvrVNAHSZwL7Lg8Vth9LgkVeh6Eh23hACGhpqpQSWhFJbhYsM9ReC9QMD8wxp89h8qnVhnu46ThDuwsBLBd1Q",
  "key26": "2wEFjftfnzzCHG741rM2kmeepYxXDivZKpDcbsk3ahjWT8NhdFycYDvmqSLSD1zVrEuBPbHDAbmszbqZLNP7wtgD",
  "key27": "SaYQ846iBK4ndNJ5MVcjDqESTJqxC5NPX5up9ft9o3ErX2UcwJcMbaa4UvhtXwW4Z4BFjMkeAPeb8bN2gLeS464"
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
