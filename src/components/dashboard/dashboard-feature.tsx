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
    "2fegZLxRXfVi3D4PRRnaVaXH25nXgnxu6hdiVpocehHiHhTU9mJTUQBNgaz9k3a7Hb4nExM28kXGG46xyaM7iQU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22bbjSwspxxj96A2N19Pu9ES1rYhu1vknGibyTaKhgBPxPbSN5CTCqZmP1agSSp1iUgqQRDKmZjc1KzBvVjRpciu",
  "key1": "3Qq7xih5v6Kgtj4rKbu3FYN5uJVPo1s4NeVtp56picr3i3JW4NCTRP1P1mz2G3EvyWcTBe9iHnrGYBN8wneAVapU",
  "key2": "2DZumg19cTpn9QrGwDXH17zuGNk4bMJaZSBodMrKGoZbRHvujj6UyTp3efDHxbhRhzEBjYZo8sX6E9FBKAC7imQD",
  "key3": "5dLHzSksX3c2Wi9GzyEmvTQrdfR2n2By8Qe3mB4z9SosFCs1MVkfNWLHYfaqrkn74RkjwosqRbaZdtRZgGD6ufSd",
  "key4": "23fTZyZ3WqNHrSjeZbi9jr3XLWBB7xyfapXcr9wSgbZTCjP618nxAMbLigXqsM9DJ5tDwqzT1mcgdv1WpgnCv14n",
  "key5": "5yBuhYJbyou5dJYq9puyng8ynKfQcXH5BEobAXxXQCYXWcryA9gxcaCF4atK994kVMnzDea2S7Df6a9MU9sXMhVs",
  "key6": "wpurgriV7oD5g3ZguceoP2zJURbuK35j1sEdHobZ6iKdidchJ6tuMRBvMNXwHUwvZviJAuYRUV4d4YspEr4ujyf",
  "key7": "2E2EdCprSQNCucGBqtm3iTtp3wcRVVLuwg65SzasgffcdyPzfoYtShHwifZbEsXVCBHXCEGhGsBJsvSTZdD1vTBU",
  "key8": "3GBSZQ6RKwKgsGeHR4LAP1kn2xC6Gdeg2f9ksv2gndctMzkdALmM7yeCRJtJJisyJUcasxXX3VxqPhhi79qpc75R",
  "key9": "58RoxzSUPYruChxbhvbuCMPUjjxT8Pd18VdnAYR4PhRpkbebgS7KtJUcN2Mynr1b9GNm8EV7BwyFpu63NdHiWvXP",
  "key10": "2xpSyZjfsQMtRZGpXmystwSQ7S9oXnizpmyFb7n86x3dCozbhwgedoYZwmSkuYRfaLuR7S1isphnmgCx5FvyRWeq",
  "key11": "4bvvr8dLEdxRsU6ayhkurCkwrj5hrEH6pZVsNu9Ywhgzm33agBzAGks6C5GSTDHFhpqo3jMAyBYMWkJcMFWZeboE",
  "key12": "GYHN7pJghdcEcEcTihMeUfxRa9KBHqUvFmZqYQufxD7hiABkReRHNkgouz2jF3VQ2tZPMfC6juHabNxvwXikoNP",
  "key13": "37yZMzXtq9jaVTzAZEGYqMJgUdL2RC44xQogxsPS1RnVUhR1jpzCRd7sKF6tEah2yqnQPi7L4oyLo3MvsnghU33N",
  "key14": "5E7NBrGaQfgCKEAttQq3GDkKoDufEmPs4vBjmNJT12ueurNhk15jFhhqNGuidFsvjxBBjNTMUHRkPWmbMBKNTUve",
  "key15": "3AozhE3jPkBhJV5k64aQrRBBUJKMxMUpB1WcwMnaEHE9RX5qbJ9wuRnph8cQVCzGCm9q2XdS3jveTK5SsYVD4Esu",
  "key16": "4eLDu1yodnFSXy6exkFEjCLWb1G2a5PPi4SpLyXKxbN7yHeXX56aieGmWGDCCcssUENiP2CvT1BM9eZbXodtQm6a",
  "key17": "5Y5Td3WEvKhZ1qrsL6iRjJpymoVcrJ9VdspBXUdkq5nGmCEDBMquvXtXjqDytS3sp4GUtBzvYxzKabAMdN7kPRVp",
  "key18": "MHQ1RoPDJXK2f9hbp75xt4bSa5KCfBBEMniyRyKm9pukNhZAwcz8RxXwH2Rm8eErFqyyZR8qqXBB5fCGQNs4wPe",
  "key19": "5vXFNpcA4p4wsspWGPmH4sem5pgzEuKaAHvcPPjU93QnabNH2vb6tS93ZSfe9K1DFeXxmLsNviXvQpZje5RA3C3a",
  "key20": "31tBNGg8WwY3T3FasaEvMneuXWbkoNjDrn7LgwUUC44r9GnUvrxWAR9nHVnJYDeGxPaRCqHF5ALgYn6X9AyWXLHb",
  "key21": "5ZPdo8hfvnRPx5fizsLtjTmB7MXRXgxECh1vz7uUUxqvypmZrgGLBRjUMCvMKerq2yncKCFuGmrm4bTHv7bbvVX",
  "key22": "5wLvGQ25Z9HLNhfq2iTCAQWf4sJ7fbjwHkh7v2LrgKjBEvA5VBHmiXpozrP5ZdATXbycQY8wRn4aFjXB6koXA4sV",
  "key23": "3eHeximGYThEiCjrNrXzJHBEUBKDNvPRsmtyz3WT5FeoonK1k8BTbtzHpUfTgnb6iiwg5j9dXtCcdGURpMAmxRsm",
  "key24": "2YqKwqf7EWQBe7WmHwkjRXqcc1ye7FtaAeidccEAVU2873tpLGsxjaNvhMnJT5ceT1hfTVeFJMcD5Vezx5Bs8S4S",
  "key25": "59D9hZUdFnMwLshMPnXfnHfEZf8Gp7Eg2iUcgmYe785soaLfdwqCn6oadbhGnYR8WLkNBoWs1R6G6HxQiJ5mkKrB",
  "key26": "4JntDwdok5gYgEYVW2CEGVWtfpLwnYF4kqNqhcWRTpWwsvus9VkKDC1cQJTeRyttsDWCVLYbWEzefGYHzhqsRZ3X",
  "key27": "ctUcNmCWELaibRnmhdNhTqAKwUU2rh5REK3Bn9waZPjT8eYhTSZ44RZdRzdyAYncQUWXX5knkEATVFjdL3c4C1i",
  "key28": "5HVaEUSJtMysSoEzy9cYeQXaWhZXmZSEVYL3JuoqSDzuSCr6VEgxGe9MHpXBCZtMX2dSNLLT8E9mDb7Q67iafNwV",
  "key29": "2TLihY1pYP4E63r5VFr8CSFHmEqGZd14kdTBqFV3WMEp8VebNMiPa8wi25pM6eGiUXiDQA49zwxf6aN4CqUA3qVW"
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
