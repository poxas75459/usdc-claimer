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
    "3vk5342QRdN6snxmSynvfST7quK2FfTkmXTPjAHqUFBJYGKiWwXa1tcwh87BCNuK6s9kDvSjNzYHdLG2HWzRHWCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mSkaUV7mi5CYeomHTEy3mQ9zJtL7Eka69cKoAvZaFYkAvVw3CjGvK92CcKN9Y53FoBHmZvtwh6GskPc6ckfgmFU",
  "key1": "3CDEUJkPfztNe2PF3G5aTsJdSTe9p8Bhx5NaJqQvhMek2QbxTUQ4ow3P6qWHCcDDN2LNgo6eqBaUcVdpyf7RJqLL",
  "key2": "5ZWhUk4U56a3qBkagoXwYjpPu2sdST19waqhcgFenTPEnYfFEFL9QweGW7tiBxecr1624ToaMP63z3cX72Wj5oPR",
  "key3": "3ekM8RA52bV9GPdnTFzad2hXxzDvMyWTZqLejfMmzP1tEe12EQuLUin5wvYVjsFfNDkcvKNNavJPB7cZ5pMDvdK4",
  "key4": "dJipEYJMkdToF2p2Zt7V8mPZSdrDPiE712h7ozHrBFdF4RP4yQyeDQRqPUra4JdByMPzC4CtsTFdEobsUQqgjKY",
  "key5": "66XGBF2WicyqxEXBdJqq2fbY5PifNmLqZxFUCk9EYswNTF5L2SjZ6AXJ55GaupVXDQsUi6Bb8dgEhaVS7FgqD6ZK",
  "key6": "3dBRcAHZUpNUNYiqkDJGYjH36LbrgaCYXY5Ve5f6XFR7CZvQwfCbeTeb4n311gHM7Yfrf6Sw5iPpM6RQDaHCeLNJ",
  "key7": "3EeGCBE6pt5MBwDvPY2tWmg17ckQuVnEmDAe1jDgn6SWq3AWpeAvZsBDDngWXsauVwpNsmHUj2BWv5gL24RJrndq",
  "key8": "5Zz63xLbqFMRUktH6vXw3oxLmx1qPJttPfLj9uGSAJeUGLEwkhHki2gNPaB2aURMYnpqcbdfoy5GzsQ91ibhPwiW",
  "key9": "4aiWZNwcCt8cPJkS9v4B8k99bRhxcT5BG4b1b9CZhZ9NuMN7tHu67U7tFVhE219vvpod3WDgSEwgvzQjCbhdooph",
  "key10": "5x4QJmRC2QUidk2LjwWxzWwZN9Aas29X2kFG1sFBSetjEgcY6TiEaiN5X7yfsd8QozwALuputELcu4AQ2SdqaVkJ",
  "key11": "u4dKLFkPw8PuoS3oaL8d4NbiEoiUZxGob6hwXoTSbSptnACWLfRkqHD38Yb88kGrCPUKkrikE5H5eh7GHbZwGs5",
  "key12": "ycjRNG6H1UXcrAdpNBaodEqgkg1Z4SomWQwpkKeHYzwT5XGvrMPXCeJRBa5Evtkqv1XweXo9i6suCq6zw6RLL8k",
  "key13": "4PetqmUZ7F4e8Y7GpRdWmW4yFP5sfpqBXShLG3LyQMRhzcHmX6UqhDL8DQa4FCXyat7ThR4jh4uqweJsaLpYx33c",
  "key14": "4LVsNDu1rkXF7E3PhATccAAJNvVeMmihMsF1UQP7pZVCJDbzDSdBFTCzQjFHwyCPy6cvy4gVTyAmqSnaNtHexWQB",
  "key15": "3QQPng1LH5AvCDMTDAscCBH5NLZ5N4nKruK4unuGEbMPdT9RtZQWeb5rsqotjffi5z6bFZeqjumztuDe2mCuJ4K2",
  "key16": "QVkom9esvE3TRvfUPwr8QH688cgqUWSp7qVGsRUdQV1G4bbq1a3TRvmTkFouTLUeNVsV6z97QPLZ7dn9nzJrhPH",
  "key17": "65tfeQrCuYNrcnLc4mHKEvQX24UvbFsgCKbN1qq9MF4tn5NQVkzBnwe5HvhRncbFbLUBBjWZNZt3gYmqDDf3LPCT",
  "key18": "2orETvonK39SvnGsWrZ1rz7XmhcEUo878BDM5odg2eJQPr6CcL2gvM9XHf8a8R2AGvSGJGN4zBVefi4HtucYiVB9",
  "key19": "2tLQ11B5B9ymR6kuHE3hqD7mLtykMzVSYh4cqDdS7ddhFWqGvMd8eLnbQN1DSyRopHWMEX1QkFZrxy6RgBBT6Ber",
  "key20": "23SX7J8Nr4kqyhUFGuJf2ub5XQWStUWnh89KGWGHJ1xEVTWF14UTbqVCnP1vEund3SZ9g26z8Yi2hvb27kFN47Cm",
  "key21": "BqTTSgWpn8NrFxENkJ25HqhpJ42AfHx5LzfTsebVCemJ4T7J2peQP9wEH7mXW7XPoQg2ydEs6RoBEeKSnc9ks5o",
  "key22": "gzE55RGjQsLJf31VftCDTfvHNYFFarCHkrvnGzvf29DnDQEW4qiwCRJaBv5aE5BeP5WBGdqV472iM8wzZBpbKoH",
  "key23": "3Nff2vNvPJukd2DRCYoYPQ5J75nPP92BXzMZ4n7AzM96kHZFTCPetZZ9agt1A4kcW6bW5vcEqQgntEsX9MAkgB6t",
  "key24": "2UcACJRYWRPp1Qm33Ao3UXnKvG7S8fLQLeNWKPE3picSBTUgzk7LPnfgWfJ94XavvJTbFX63vvRzerHUoXphwUGH",
  "key25": "35cxhkWh5H6pRntm3BqymdoyxygUXti3booqhA1wWyGzTq3T2pm1sTcHCQEuTR6FTKmzFWYj33mosZi4TbmPAATh",
  "key26": "S3hCUmTmgLaLbY737VktkWf5qCV151Dm7bQQtd6ume5irtf525aDvJN9vqYiF331yCi2ZRxHc4JBZUqEZ1X7PTo",
  "key27": "JyZ5rsWFnxQopcDzc6U1VtUZGJjeaZRPoNqws7VNh6pzJhy7Sy54AG16YSm4BywpATVDCyX29GwqUySDf17faYa",
  "key28": "3rxSDtvEf2ycHNBF8bKzcYfSjEc5hHnSQemkoYoKT6XNkpJyPuZhNNGfo1psPkG8a9dKgCXav9mPVDy1H9cVCShu",
  "key29": "5V4DxubWnpVoJCn1F3knFXPRZXQAVXe3qdvGaPcjzxftrk56ppjJXxfA6WWPferXmEcsMPyiD3xB2py4ZLxq7A5Q",
  "key30": "41Vf6DwAzHC3q9LCfgW69dcY5ZtviNZdYyEb1VyArEBAkjcnS6r7fowFLExHacrQDy34CyQ18MFA9pHjaU6gfiT4",
  "key31": "Uj1FgMr3L9jk7ZS6XtVbx87TcFtRzXjDE3r345s7GaBiwXbxKfT1BYtBNkEtvbo1grjEFR38rgzHCKfWfwnjXXq",
  "key32": "Na2WotWKbpCgqKHgCvFji45XEFnJQN2NcDWatqhXpVcXzG6DJX8rwfkf9JhDF7oEpQrTk4KrVjBfxhPLEwcZ6Sa",
  "key33": "5oQpTiR83Qgw7neE4SKhpqUzN51WGLCVDqR6rmY2ENwabkuvvmsWigbrjPLcRTEdTZ63GnU1oicN5y16YJrgfsAf"
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
