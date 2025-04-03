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
    "5gpg7cSCJt332yw5wCmYZLhcSATFprYamNR7Z9cV174wmmw9aPoPY4eb67EEjB62zbRkdZKXsdGFUEozwg4yD8Ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JoWvBjH137ZDhmwSFfvhTniJMV5FWG9qZpoUxmg1Err5ighnThrGTVyMFBk27QSKa3dG5atcgXBqRmTJcaj9GKY",
  "key1": "4yTfNh24HRbL9Tij1mNemhKXjXPTj72XugwLZFz14RUmFgmzsPxbW8Zuc7BcyJcVHYkDkA96LcvRKAvV9cVVQ9Z9",
  "key2": "5HnHXg23CyycuubCNN41r3MFKno38JuvQ3WyEH2gS9ytATEd9P4gSa6DUaSyF8v5TJUxLDPeSgPFjGvAqw5aJvyg",
  "key3": "45SfNF1zwxwLiN7Yf5owRAv6hH5rrJW1ZpKRbh1TM21164khtpyPFfowXezserpkkymfFsrqxkkAR7T1f8xb58UC",
  "key4": "2aJRLcUEyGXaAuDHWna9xQjc4qBgTAoRLJYNUm7uFzDMf2d1wGoWQgMwDQ6cPzV3N5o2orjPgLjxyM8Rm241AUfp",
  "key5": "2pKQ4qJfAM3EosPXFLZeZGHsg6hVK6NCpazHnfr3iZNYxsh3Y43puozEn16RRNYpDi4WN3wzLg32HPxbDzL1DLdk",
  "key6": "4LdXBAHrH8k5W1uYvH6ZDn6bhWE9nxkoAuWbShTMe7XWLmwpZdradyUXYdrNinc7nNP872Y27YnsvsXfbMc3WRaw",
  "key7": "2vLnJ4N67qayDvAj2Gv6Q5wGA1WeWzXtwk9F745UEmNXXgD6mr23FcB4XR4sQfaosaZNGfUyzsQ94VscAvPUbNtc",
  "key8": "4CvfJfxpHYxrjbkmuToY3tJ9xatzHWhGJBcghqhoXTABjnYB7THHwqBHK4kQALdgygEkp8hevQ3nYHK9QqTt3u2v",
  "key9": "2B1nRJ7Tff5buEFKB2dECrJcFp9js47b8rKouUGKLsKoSiGZizK3oo1MWpHHLpY3gjXeZVTKJNgnhQtAiUm6FV9i",
  "key10": "65PbNvsombRu6j7gP5JHqPj9Pb4uhPjGAfUSnb5dor395L9ePGoRTrvjQt3eRLJHxPD2iXLwmYAAh3JveECyBsUx",
  "key11": "25yWgxF7AS4FPhczCSNoJ8EvomYBXdy9mqBxbHPDrBT1ayAPyZxwbBY8vFwEGMj1FASQ3xoVb5i93gsnnRmc57zk",
  "key12": "52e9zuX32JD2qFYmzUD1GkA15WfDmXbA5U3aQep8i28pRop1ukvLyVkngRAwHv5LxaxS7chxFcvEZPz7DQYvfB8Z",
  "key13": "46C86q78PToRDz7Xd12uQHgtwdCZg114czpQbP4JiZD5mXSGEzgnBeVSsXsbDSqrRNaspFuiBMomCdBPgrqr4n5X",
  "key14": "4qtE3EXAFo4z3JfnFrKsLQ5F6MSWywZD38W6Z6MPWsKWSezp9DfUERtTLLTh2ybZho5goWUjRqdNmBg55ggarYYw",
  "key15": "SdwucEpDUNAn8knFi6HW1EBg1NmoVKCHREshV8T1fyh1qgXFzm7UR53ASPAWN2KYy3xHtLMF64YwxD4fknfGPVV",
  "key16": "5sgusf5Yf2sXmaWsAxgq24HhjTKB1U2gheC6APdToJoiBqUTLtYt5vxVj5BGTWksNxMRpd3wadr8goeSCeLEEa4c",
  "key17": "jnwwmjfujfHLQvBu7JL7GFQPGwMgdmf7WMB2M6z8nkKZV2BKvr9o6ng6ndNRpHE3tMaaRM66WSawJWrgwG5aw2G",
  "key18": "5uT98umrxSqp4dfo27pChxkkSfuwohVyRH5X5iSX4sVWmz3CQrxbQBuYG7jduYKqsTji2L5hF7UvXdYNkUBRMZwT",
  "key19": "3oLtpY9Ts5PMgwtTEUDRF6LnshoCJQsRxTfSuxJDjJqJHn91AcgK4h3XfhpbpcUbzSN8jx1RDVd3vaaAW24rwXi7",
  "key20": "ZDRYZoaraiULBxhR6oKexSZLeg56NCauBwGWhzE1vFQCxy4S9FZ6aZwMHxmh4rT9afwEgtk5mYvKxDtcdwGMAEA",
  "key21": "ZjmWeESd2nsS3Y5h3rnzKDaiJKWMU5v39pcPabMWqsSnhJUqTrUyhMpAvwiLThDQ3aTu54ye2iLHixY4DsAPB1K",
  "key22": "zewPXJF7PWB1YKQTBe9Cv1MT5nBcq8ntUvAdUDPQSoQdgZ135wxkHa57ipKE2mzLhFjgRyjDpUcEtxkdEiVEuhL",
  "key23": "4UaiTXCftrh56TbeCE1cdoRpN5A2T656Zq9dGbN8LmjhEca83sSEvFd3piV68Mg7D1QzfXAML8nwPS4RNfLTuueP",
  "key24": "2bNjbemjejoAs8NWnDhAPJ7HR7rUGu2mBeESVCUf7c1WA7v7wpQBkPSH2AwJkua1Yu1i7sntFV2DAjFiVYBHDs4K",
  "key25": "2N3nU92cEJqHzCfqzdQ4vShnUb6W4nQwrPoBV2nwEBUj6R3zLh6f6wGSQDnCodMsyTJsUgcDzGTu3jzt3Q2faGQu",
  "key26": "5W8uynWoVAR8qofMBNzHdJbYvLio6cZxMmFVuhVnn4Nc2vy4PsYtdEHnCfvrPCd7VDYKx84P5DcvsLWuxUwQ6NC6",
  "key27": "5EgR5AvUfKYLUoyrTRbi83H8hoRqwyjBadcK5fxCtrr6DJ4PdfR7EXdWuGDXGv6jRDGJtGaN87L2zUvGV2L7CAhH",
  "key28": "498CGQXjLZ7gZzHym1Q1JZB3iGuwnCRoLtP1J6VApn3UHjaRCR2hvVB7j4GsEAgeoYPfLuXMqiFqZumZfQnsuYfk",
  "key29": "2StfoSdhLsay24XfxmJyza36tzVu6WUSu2WrJhaLaNdVWDJamdpEHmq4d8en1An7Lhx22CrZRwEjTg3xLEvoNzhq",
  "key30": "5TRzo4BwSWn9pKXuYMhpoGd8EqDtUL6chJGrFfyGBYR3djp95VGDLL3zPYNNx7WHnshqcgYzHUponggBcPiVMUeR",
  "key31": "3r4m3BECSJXupAcEsTQ17j1RJASJzeQz2vos26vKAmiTWBDXs7xBRHkztCZfr24i2SN7gdryNpt9Ker299hojERP",
  "key32": "Fa4kYwKhvR8d22VcaSypEPGhAMBZ5H13wndMUx1amsqWNxo2nBoYRBwtoqCREPFynsYGvgXSmpF6goyYnFSSgT1",
  "key33": "2TDQxW3ZmyxWMQdvCKn1ReXvMdNonQhc5htf3teNbzwes55HVSpf32gpoK1dhxXBPMcucHNZJAvC2JnhJvMx5vmZ",
  "key34": "2Waf4nvSsQpkAT2QQWMbJyTZjTb559v61X3mG6GRxamB3RsRiS8vUY4xcyem3aidxRtfL49HPRsJEVALrn6Z5yCi",
  "key35": "5NMqSN1S4kmyqdJFkxAL3bKoV7v4Ghad9gkB8G3c5nJxwZEYkyLVeeeinU6AgrEZaCeHdtGQeFUB28pS8JRLsjZS",
  "key36": "pZnXL8R2rJgC3bhdAeCa2qmuUNzWFf8iPan8odfYGbA2ADDQy5U7TRexpESAidkbc8jytXcgtwFPCe4s9EYWXoK",
  "key37": "5b4NkjGBPhX622LCbCzpim38LTGgBj1TwvS57ajpMST2F5janQrteJv6r6sNHRG2Df7SKmwKJv13bBsZHgAjgiSS"
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
