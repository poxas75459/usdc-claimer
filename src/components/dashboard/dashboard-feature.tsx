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
    "2szNvWbxN5SSMBv2UXXQJ2KWCGoLA55RiPMM6qgb4ychTkh9FBmag7AdXgLbhqMQHTfuWmxtTPqJVVs99oaADyvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aSAxWCK8ssn5PMDRMY9Snxm4rknEBCckx54CyxwgR7i7wH5sxLN1UKnxAmuu1GLtzFJxeyDtXo4CRiVTGP6oo9G",
  "key1": "5SrkGe98dTqArK9zTnmadg3o1LNuYahyF85qKEootoMVNtWxWVnmKkDT3tJ9rAUshu46Azve391D8dXq4tjQq34u",
  "key2": "2Bav3VNxk1JKkqh6St6QzSJywR4ygNKdwYHaWxvRW3Rx86JaqW3cRFR7xxZmosNKAoBnN5ARpLkvK5paLcTL2Fqq",
  "key3": "5Cqx5nVH3efGznj6eGbeYEdoejLhiZoDTG471kVZ1ossD4Zx9rPdEWv3kU7wFoYVH2e5K7gwn3fESnaLr2xLrcQe",
  "key4": "4PyoP64db6CPcwNx1RTVFFKiDEmFGmxAJPfVD1ShuQJkHcA6VndYLEQtKtSYGFaSAxeu4s587XNwWYzSAuHeyYzH",
  "key5": "44Mymr1PcJrzb9VLcHHbd6JU1qGaUJe4YquUbuLbizvFKPnsesCJ6aVTbwWuaeQsoqbEY2u6TRuFt8THWuvFTyyY",
  "key6": "3PPZ7WcqD3soeNVZGmc4xaN9adWoS5fy4qtSwwhmNCCSyRXs8VHhwPtycfBGDLNHXrxa1AvupDrhuwYH84ZAjHw5",
  "key7": "5DQAPJMNxZShJzhWdJjVPVFM8BdRxgTUY3bJtMSARU4wfo55vE53FHEw9CVgQjELmwpzAqoTkXboXpvBqKouomdX",
  "key8": "sA9kUEqVrMUArkcuNFLHeZ7akhYCTvDipNGPgPiHJK24Axv5CqUaZK6wWWU2AKwDgSXFXkfAdsQcFtVZxkeeadq",
  "key9": "61G4UnLYFbMEC4Jhx8r4UXwsgeEgsCUfe4D6EdG3t1kUpUZVuQVTA2wTe5SSgdQB5fubA9priqZYGLHq61HTxvqk",
  "key10": "avngBS2ydnRfinTCoSZG5fhn6JYgp3Bk9cBHMXsWD1WQkR1GQCyGHzEZ1AdR1UZ23yAUZfAqtXUYX1cm2UtD75P",
  "key11": "A4yXp38cJYAnAQ2ECtcjBuxDia3AB9Aqmc8oNj9hjbuFNJAcdGpysyZH2a7HMT8fRTBR7hqtRKknkCu5oTvtCUE",
  "key12": "3hjBkbxY6B99QWY67pz7Qf1hsECctLQmWqq6FGaidqVtCMB4GthyWufU7gDTj28aFy5vDh77V4DL7mzcZFAoNJgG",
  "key13": "3RybrCrTJeUUD5Dymtmm6wf86UdbVFkLMNYfXQcnxgbAHq3hCGVdYSGDpZHHZvjPR8VUeGkXpS3sf9b9pbFihSLf",
  "key14": "4AGwxYt55gQDtUWXeX7VXwd4Arj9KDw3BY9fxwacztfx7yZXYnEARqjGwQNc7qjYBcPfTWkBnSfk2WevfcQqWDt5",
  "key15": "4wk5yUSEsC4ArhhPrT4ZYQD882dpNEeBxRdhHiDHe57igZUiB3nYPyE6m51qTWkHdqpekfw1rFgyoqAzkfm7A5yG",
  "key16": "4YTzQHq7tGDHLFbBe8ZEh7qqbaWS78pcdAUWNuDWBomsEReZ5exRkwMfX4XEbdiU2YVKJb3Um2s8sN3VHyYWW12d",
  "key17": "5d3p1NEB7sKT9jyjVCLUvwQdMH9nEKPrtGgHMPbGyCces2A6DwQuWSU4VjpZQic3QFkA62CgncdMHN2DRhhaQCWe",
  "key18": "2TTrDsHZ6DVyLXXkH45dzcJjsBKmiMAYtgXct4gMuUeBgc6493SPfAr6turVhQu5mbJw1T9thbT3Tk9oC2zu78Mf",
  "key19": "5SeWGwjRgRqK9KfJrJvh9Vy9QPyoGYWonjMDknQe3ha3BabhiLfLmPAMQpsqKjfMrgt8x1kTqVG6z5tM8X1QosC",
  "key20": "4bz45aFjzKrMJ6uUfF6MSgunamHDozvSgcXdvm29LFYKj66uUMMbKB2gxvhkzJ6ZdjS9Q3uB1kWygSkxCqaZftwE",
  "key21": "yRsA93khNGPa5dDd9KRMb1QMxPjjxvEfP24Qh8QEvBDV14Zm5niAgz567jdrsKGTEze1Gcv7VGBB499p24f5tee",
  "key22": "65Z9fH3mqL5TmUkm1YtfJkoMCk24bynuzSi7z1U91af4t8K9QfbpW4gYmmb1pE4NzGxxAgNYH6jtfdi6BPJ5cs7t",
  "key23": "24RSLs6uQYNLwwREn7e1nfqEtMmYTJ1yvjVjsiEzDDv3XWHSUQE2nDdpRXQSaoKEtsUd3Gp3RhXhuFP6Z9mWFHGC",
  "key24": "3weUzPNNFvtyYpKLS2JoQyJPquy4urnxGvZKJFwHhS9y3FkkbJnzgYHxjRovtSu8iFEk7eVNvoWgJri94dnN4Dqr",
  "key25": "5c57xtadbWJR1i6tHpeJMJMRhrLEQ3MGkEkejY1ceTzBxfz74GYaMPuu1Z6vGhhMnV7x1CDNYR5TPQZewQ3k3Auh",
  "key26": "4skEb95TQRrM85Mg4RKFgCmMnUWNArBdEF3E5mFRCJm85HhE2QmFSzBaGmL1NdVDM7UzNDtwsM8pMQvUbTvVaCfZ",
  "key27": "2wVnrKJtWtYyuoWAsdc4hAQWYJSibBDUXnYV5jWndsVZ8oCfbTEaKWvYSV4LfxHuoiV8ogUSVTSAxpk9tRSZ46Z3",
  "key28": "5bnCSfxKDFxd37CtcwNyKEgdkdf4SDYz1TDx3TsTB1gVX4A1cTDyH7W7F6YJxha9CSBZCFcY7wtwAY2k2dJRYfnd",
  "key29": "4FYDGYhoaNvpRZcBpHfyz3BLQmtXhStW8Y1jztcbzbnMajidFgPbV3yw3gmyQTcjNWHSF2exAhCaAcJfLPNADCo4",
  "key30": "4qT6nHZbQbCB2q3DVzYbvu3gFNwB1pUhgwcb6UvLbaZoneYxq1Ek8e8GURSKGKi5T3DETBHV7AqDRucixmEfYwz9",
  "key31": "4F69c7cwBTE1qYbaZhNih9NE2tZ1p2g2CPhenLo8o7cDm9ijShqXwGvs6FWhL3SqFRQC63QXaDJxkaFX5A6b2AHh",
  "key32": "5JUkwMWHjqVab8L3KirjjSJBMoaUrgcujJkTbksi7fuumSH5euZJPtEmStcjLPS2aJxBXdTYqr67Jd1zWDK4hcUx",
  "key33": "2VCnvmNBLyaC7uKGpvzbvhNWQBDbvwqYkNv82pJGWqt1ik7WEojH7xoY1vNTANn1XD44q8cDU1ptqWp8oXfTjrvz",
  "key34": "4wxNQDUUDQy7rSmEk8qDRcU2jDkkQJtXBrCb99o7o8hvna9RjekoanK1mZzsD7drwPVSGb8CWuUZk6HkJWhEppxp",
  "key35": "371Tyv65HMfRbhnNXedztvuECJUGe1nnX2KvUizUNF1FDt4QX5tAPea37xun8PuUyDd14PU6bXeHtJWv641Cug89",
  "key36": "DC2MuCCkhrBmRc7WMtkp3wzDxDeWNbcj93WEQ1J7UoR42HHzdLRz7131yr72WSS1rLtHuNFoRoGMZuMMfatASsk",
  "key37": "3XuqGfwffRN4dpDa6vXGip8DaxghwPYw4TSsEcMdVrN9cvxVpw7uHvfWEyvqtzpYMBdq7PSpRZFgoUpNzpEbko2i",
  "key38": "2i7Eq19KZRtwWFizAX5Y168tzPr5U6sTpE12kL3mp65macBX3ktmrDutce2RiGAUYhdAKdTtdbmwnpWYnoBu8NpV",
  "key39": "4pA84ZBsAdQKJVPe82uGesyujuQxc6ox98ofEhdZfTuqBmLwHahsgwQyTgnWkjeZe5Xzvgf4dBvW7MUa1wSy4pgD",
  "key40": "4P6TZ4HYKq7hHUmB3gTxp6RNtWdugGC4whRJLJwTcPBVhqmbPCMqPMUjTcXAPninD97YLFRTD4kd8xxKfuXkkHSV",
  "key41": "3bxti8LyAG7HrGmb9QQyMnvqfhM4c9vSTZkFc3Q4F6vk14e8YLjU5qztDEBibJvBqKUssyoeFdFKgLCderznjyJj",
  "key42": "4UEoxjz8UaYCFhQNTjPYNjckkZWHThqtSVdW9cpC9tZC9TYRUo16pjZ8cavxEeZ1GqUpNLZsbmPZx7iML8kFfBKK"
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
