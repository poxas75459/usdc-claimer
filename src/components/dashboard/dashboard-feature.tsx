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
    "348yvixpcGuKkhGZfeeSKijuAx1ByYdKyogUuFmXyQ8eGgkBjdPjc4EH8PHqsm7zQpjv3yJUuS4kMvKCZ8hgKsky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KVpK4tNkuwWmxbmNj1uo6PBDQHvJh9W4iwzrAqShye9GPYpjNGSXpGWFA6dx7HVM5JbhgsXTfGToBp8fhVeRrsd",
  "key1": "4sP4H9uz5Xjjmf8Mv3EUdV81Anu22xPbBCnDLC3HHNWcTxKam6ZcH5usWinKzAqLTv9Ps9ecUFQDZ63CxYYNKcBb",
  "key2": "4nrkytpfr29Yweo2WzjbSUFvpMFG7p4EmNwNxxw1CWAnUzi8Sj8S9WXJ7EvGjJrbAPiE5YJLM2Z3Z4ZH17UFeUUQ",
  "key3": "3c6z97oxbdKniLM9wbjbrwdGLVvTYM93m96A9X9P85dmGCUQUwJJPKfP1XAkc1okFposRVa62vSWvK1tRSyZM8GZ",
  "key4": "2u96ZYDKNQiXZvk2h4pF3TbpTDB2KQ8tWjtsfM5sDoE6Np2aMAmSemgnE82WCYdzrJz9idnQTcco9v9nSS6ctT9w",
  "key5": "4r1H3P7g8P8x2mVVxG5a5rujE7XqCBtRokW5M1KtDKjZKEJzipp7kFhZaq4iZg9rfmqz71z7aQ8KXoJk4fhmqXeH",
  "key6": "2sLSBi3TqwPn2ouC43SNPKNg6dK36WD256SxqKXHWKaRWYhZLAoPJzZjPYFjmtEcw2feuZQeqdLNHLo4d5Z75SN6",
  "key7": "RF4ZSpvEhZEMk15vJ69tSW6hBkNufmYzVJAZkeKZQgnfMqJvbD3GrkTvEEdJTRRmDjTYyG14rAs8UaBSmMsLhQT",
  "key8": "4ckoJEecqm6QvC9tGdAHMkpo6WZpxtuPx9CQEA8e5gAV1TrsoXUvRxfamAcbL16uSctLvEgxVPQj9x6wEK9EEBcu",
  "key9": "3Ydcb5ah29CHr6sYZWevGkCBvDEzNWooEq3BiZrimfZvhM7djKtMsjmorx5HGCjJbEyPWc13pP21N2S1nmKQfZsd",
  "key10": "2KftvD2GEztMKQV7PbqudBmLcowTH2HzbY5PqnUP1eoV1Xr7MaXEqVMMNtRBXunynpWEYup8U7aXE2LUjejxjpwk",
  "key11": "3Y6PmKMDyGYUT81um6sDCbF1UPubAvCP1nxP4rLWDdxCNoEpqbJiZMdjaKMkZLmoHXPHia8mvpVBzPoJdk6K9Nem",
  "key12": "3m1dMUff8Ensxy5Xwxu7om93CURkpn3pAJg43iRZPNQYGQafv38nu6ykt6Y98qbMzQf7MjNBE3PSiJ4BcWYE9Ae6",
  "key13": "5B6W2jVDo6sWLxuVaQ7hBK1YUhpZXLG2JxRhL8PmJ8CQkqdwjvtvoV77qhuEpv2vkhMQZfJuc7SbxGog96shSjCy",
  "key14": "62y4nwPrRWvdMBW9ioakuE6Lx3BPNxQVgoi192sXiCwzYFTacUSaaxCSBRtwKFkdYBHGCyLV1aAYsPN8W4778tUp",
  "key15": "2voeinsnwqiPkbYLpedeUYqu4HNDHh4DHR4sxVZLFtnJVnuGXbyCD6K7K2wxksv7me4uTrAW1PuNZBKaReATKQtG",
  "key16": "5bzeWed3NU4LZo3nTiyFeomogXJVTycQp4a6dKuBFwxtZxqvZymnRFw5wRFGrDSGSdz46Sv81MZaQvGoT3KRAd9A",
  "key17": "296usca4oTRXPPWf7egao3rQAYuiFJWYV5MT3TAMmjHg8eJnhgnEQxGEbMh2xCyNPRCNRym4JfLUaK71vsrFiCdK",
  "key18": "5gPzfAYtk8c7TggEKy2e9sZV3JbUKptrNi7DBMJKhFRvEDB3Ly1NVCK6Vpf9vLrzTcE9kcXBhAWKgNjEQ2jDfSKs",
  "key19": "9WvSswfuvQmb76AMKRq2zRUgZAtYbqnVsLPbA6wRgHjXxpWzUVMWFKCXNCjxm8XUrKuEr1b5XaPFYhm77URHvy6",
  "key20": "33DKgeMj61f5TpujsJhycKGsZgw4TrLZBvJM7xt8Knt5vUPikjHVvB7sbSUbs9gA8517atPXos46ppxjbPuEYcrs",
  "key21": "2qSGPszPjfahqwyR2d4bsBP71qk3nHS4rAVfXvYB3rwr8tuxJfPeTaGVQd3HDQJWvZVNA8vuNgo38uFqj8LpEXub",
  "key22": "5qinmCvbZQcvZKxCqD916pfRNqUUjaVL8SyCGcTkidpPmjPZQVmbHGYyBzmqyqBGELVBdWvifYWUvPiuAFaSH5aG",
  "key23": "2Q6PgjvaRuR6pcfGxfNfCNLkeahou9eu4NSPbtUmTkDbLvm5aenojvEittdpH8YuccD7XXg5TV5HQZ5K9bHqQUL1",
  "key24": "4BDoZNmgs3bpzMCptAWajesvVCg9vvr47GrHtv9tV35xsCQMBGBgSwNaSTW7A4TFSRRwBbzhhTb5vBFuqzMXGd4u",
  "key25": "LnKMzjkcsRXY68A9N9QLduiJA5QdVi5VpGjsy9Ljm2ajPzX4c9bqK3f4ZAP68PnD44GGPXJkCPaWb9rS1oy6F7h",
  "key26": "LVAfYDPCkchnghW8QZxJz6BgANTwGUz4WFBaZRFXEvAorj7RcrE4jaV9TQdqxtF1XJV4y7psN35u8erx8ifjxqX",
  "key27": "9NrLBDrfVQLCV1M8TRGELLLNVqRuP1uqcyiTChxo6YcPxjqjrg5jcTa9JhVnq8dx5LVUfQwpXGnTsNGmfVvM1aM",
  "key28": "2wmLaMQsBZmBn4zU1TTx6V9zdR9NmcoGEvpiaLN3nzt9bwBh86u5HgrUjRqdVNqUX3s9YeHJ9WQzANLZfU4sieDt",
  "key29": "5KvaQAckKqt8MDzhL4YMH1EpGSujEnykrTwNj9kUJJsSeaLiiWqLMqT96mRRSuZWDJM5qa5yfpv5o44uzsHCcrx2",
  "key30": "jkRirupv1pYkVvSbSNfU1CvE3u6yza7m53smqtytrUfKneUAXjMHX3cXiZFLDnhc8mKxptWoD1BwKFbLmLfiGrP",
  "key31": "5534GpUemBUUEfVXWLyTxRmz6k9WrCxeWK2scWNzytpKkZYbQHqpNAXEeXEXybznmBqGLtk5pcuGF61LKB3iNMdJ",
  "key32": "5NmM5q6LLcnLTkjqbsLx57pQ3sEb5Yc6dfUiaNBrMMYA1idb58iQKnnwTmxb7tFxU9bB4EUwb8ubjQk73QAzX8i4",
  "key33": "4VarNzBYbXhjEzqazG5RE2e3Ui2N4JbbzW6P8CGf75fR5yK58QvWMaMGgUtNYq24Jwn4B9DZSeXmR39fNSJpvfaj",
  "key34": "5Hx3qiHWT6W3ifufUmwVWmJZo6u2pBTxV1ria7pyWVUkHgGXCrVL5uwAEdnxz61TYMEzwmHuyo5UNYzMCVi6n2W6",
  "key35": "4AekWJ4iDYU3qcQXqTrNLGuVAGpodFKAoR2oRA4msPPbHBbK3Tt8nU8stdjatfM76xnh4DusuwXLMZKZrWGE9SFy",
  "key36": "4zQ7B62TFEZ6rUSfajeCmUu9pg3rpouipG9uUkeyyHpdNbYE4jn2t78dTd7e83ZYh9LqVfGqDL6hsDoJeDqWqgxy",
  "key37": "4kKv65UMo9vSX5hh6LUceYaaL871YQtHfi8NiHP4mRsgmtSF45ibFuSprVVFK2iCEC4AxSURBgg6kAREDr9GzPH5"
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
