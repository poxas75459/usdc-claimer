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
    "4qLjJTamZgijdnwf8g77NWig16jvQXyvDoAY1eHqVxeqZH7H2whxqGr8awG3YKedQYRBxficr28Vf5NFsgkkLqY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uu9eg4ZJ3nBxaFZrXDndxU64VKJpgGtVSCseatEQEvgDt5nijdhDnstkxsT6kVQXoTFTCfj9QHHYDs6sPyhXSCp",
  "key1": "48ZNaGjbFAeypVbiZj3nBpCUxjw9yQwXTJ9MgRb1Pb1wG4UrpUz4mJvMsWBNJUAsmLBQy5w5ouVv1Wu4fkmavs2U",
  "key2": "2WtDE4MyMEZvbn41ALEFFXiW4DYTRezKp6nTP7CNfV62HdC6kdfNkNMdCfkGXzQLKFZgEdUPhM5obtjmqGBZvCb7",
  "key3": "34yaFQ7XKkBGxmjDi5hYTDFc35Rv8MgrytX2dwC9gRsLe83BYPckTnj83VxWBd8A8Lm9GAUPgT1aGwtKcAepycND",
  "key4": "fstZPz6sbYDS7JSyCZyZGqQCYSfrAi4MnDWPPoPiqg7wLVn8CrPRdZaE362hTmLngBwTT7NsJjSC8tQWxHoUTxw",
  "key5": "4K1ZoQJrkWwh74wB9SU7N42RqcUzPGMWk7ktZKuKnEKiFYEDfBVDe79oVfpUDZLpqAifGT47ob1ZuE5cKVW817E8",
  "key6": "35tFRNJXwU7zDN7BPjt29pTRyTmB9gdmth2ZujkRdDbuHdwcqTkXmyEN9gTsgUMg3gUAyhq1dWkkpi3ZfMir7DuG",
  "key7": "5KSd8cF5qdTfWbdrovHFv8mHodTqynAnpYHwz64TDN63uZTdt8jKmTMjPWAm8HV9LNUEi4c2CLTpxYDg8U6h9GWb",
  "key8": "5bpGMKi2MsR4oJokeBbZ34mQYEBjSesjccJzwbBevPub4q3LCxvrjtiMPfixnkMQ7setpTkbYraBzFnetAU8cXVU",
  "key9": "5rZP6xE6S5xrMHbyZaKHgsN6hNGKSwEUyKTJz1UWWamRFkwuvqqGn6BUbBxTh1FiPt8J1YgsCmUiQdosUDz7mdm4",
  "key10": "2eh2i9gt7jKjQeMW5JutX1729xcBXuefgyhQawjHuT26KX5LnXxJvDe7GfQuB5UnFr6uF1gSg75hXKsTV2SY98nb",
  "key11": "4deMr62tyksgpWZVkPcNegJqkx7LWc2yvoAuRwy3w8EeYtnWt1RFiKR1kB1sc3JKEGa4wrVE92F11FQjojtszKyo",
  "key12": "ZxXtuAjsmqobCa6LFeh177zgtjAB8wefb8p9neuzmXYhcfWq2pmwahWMpnFSdWd1ZFUspVZccbkT5CLNYKjWHcQ",
  "key13": "4umXFXPiByCkbRaLa6QxXr1QZ7nfJ2RzaodYaLuUnYV8TMpSwh134QXmdNA5nz4yfAPrEF8Knre2qiPwiQFBkknY",
  "key14": "2M7orNhHHjwwXpzq1whpar9PKykHR2ENNzaYF2AAjPQcFM9L7PXWqynSXFXLZ31u7FFaCL2m8s29AxXdtoVZ4HAk",
  "key15": "8W26mu3FJPSi4HkE7izfgUQfWcJA9bByCw4X7xnvJ2HVXYQ7i176GcZs6YsSHVUVqrcThsz2y6nXDe1uZGjgv5i",
  "key16": "48THt6krUJStK4kHJVNY3ZdiPywwDE3AjJNcjMhkUfnHFr5PY2w65pvsrepWFf39mNBf7oPksoMazvv4BL52seiz",
  "key17": "3taq7A1DzP5GDjBC2cJjSeK5BRJC1TLjoQiAhyUDACfSHmDHGPcCPfveB2AgFuHNc376dCeLCjzr5ds5ofs4MeTA",
  "key18": "2h2NfviRJT857P97oBYF1B9V9FspSNWXvzb1TfyoaSqix6FCe4tj12eGLhqjFafaLy3jj6Wq1WkpqWqQgs6WY6BM",
  "key19": "2ExL6eRqU9cepKmDaEfr8ur1zMPCFDCCVakXUGXUTuVMRXKCGaZ4U5ehZWxfEZJ4FYQEpKfzjPovUyDiVkba7jc",
  "key20": "2PSxxmyLwsobP77oELSgp3Qg9D7orXKMHgZsPA4hNSkYwTNuVTkU5RDvD8jPgi75sRJ2zMvTaR4Pmk7dtTUGj8qv",
  "key21": "2t6jtg7Cs6izvbrPsU5mfTqQyr446rko6vdpDEHPiMKtvHJNwbZJQ22LjRT16x5eAWxaAPGcDXDU6mVwQDpiGbbY",
  "key22": "65X5esHHe5RjHNp6GE2F7d1s6WC6ioatEyRCr9EU7p4dToBui842C67t13XgJpG99uN5UX7e1kLK3cRZuStT53SQ",
  "key23": "645fhBQxNyvDeSkPKQ2tedE4JWR1EHUKhLCtKsCBCQD1ZKhd5t8qkvvZHSexkh2kZXcED4Bv7ordnrRxdGmWVX3Y",
  "key24": "waUVgPGq93Y3BiN4tQwBPqVMM6v6jmhHaz9VXoQ8h5GN7VJYw5dzuzPCUXNaGwZJo2spaPXnU9FQyuvdYoixca4",
  "key25": "2YE81wzGXnKsHXkNqLs6natD9G9FrktU3n6rTDDXr5s9pkTQJrG7c1RrsVfroupfLY2o4hVJjxVRKgMLo2tgDX9T",
  "key26": "5vC5Ad1kmBp9DnBPdaLw9kVvXpA3L4bSZk86E1uWmNKQvNMzLU8o7hQfbi21Aj3Urc3ZqfhYa3GWPADGeQKTfhtF",
  "key27": "4DKSeTx5GSPx7BwBKpaF6zd8uzdb4Wsx21unSbySzfrNPn32hRJUoYfWtJGdjhuVhF55wVkN7YApbJRSceVCJUt4",
  "key28": "4YLfNGoZMPDPFcu8KBnqfAFb3sfScC5aJW955CttsqKWffmLur28JUGZjZBKrfaistku81So5YythDuCWXZy5Sq9",
  "key29": "ZgSj8gQgtq2R5ZaBaoaZkjc3MbF7uT3Cv5Yz3XbJeWWVXCFMr1Ja7ZHtRHvrRaWuCmrGBghQqkwjd7HBb7EijZ9",
  "key30": "4kxr44vhDhWyrUbHwoCHT88wJyrJLZNVX6uBbBb3UQx6ijZ1JMFn3uPizzEXYwqTDKRDeSF6bAmF29qAhun7CwVP",
  "key31": "2ubXCWXgi7yx61rpueYvSMEy8fKr9Qvf9sVrqCDGsfbKK9K9xetJcKT2zfpvLoypJQPU5ZtE2z1gXENx18EKGwZF",
  "key32": "53pcHaRbX7wcimqpgsFYC1TFuAiU4b8vqJq1WBWrMpFmjVeXuSZVG2cECPouRy3NQVb1vzfRSZkYRAcu8Qp5r7sf",
  "key33": "26HKLEACj6SbsyoUbubhEfv7MVeKxC24piJnp6gnsJKkoWZ2fTiuSFMRno3j81jzEsmTcAvaDv3FAZupyj9BqEXV",
  "key34": "65gbYsic535PS9G8UxaKoDrHEyzcfEGZ14RRFLFtMru1iXQL95qaaWCfze4Cp4UovjmMRNjKh4kzm1jWxikCH14C",
  "key35": "55Em8Ki8Mtc7vfhwaPXTamtg99rTE4LUDe8WDd6jSWQcGZj65nwSMMayD2JMxRRatbxnFR93Wfnh14udEnghEVFb",
  "key36": "57qzY66FBTT2xnffV88i1AUpGEv2N5dA5rSUaGE5j1BKyz6qDXWJ374n2EieiSptaiCKnkZkKswiFc3w5REYTphu",
  "key37": "4PLcKPRpgNdHoYNvFaAPp3p2rJS8W5mSQHiEqtSVukoxB2txMoAcrAFHJMCLWG4gm7R4qpdgmFejbxo5MSy97H13",
  "key38": "2VZ2z524E27BzUMyRcEndn1JUd2jDYby3T4rRo8gB7tkBQ8pV9M98UhFLTvyYaZm9hKho7i66Ci92Wfst22GW5VU",
  "key39": "5BFF26CVz6tWYKA6tFC2EMrTJTZE6bQhiK8UM7AbKTV5Nxs6P2xVxP6LEhusWdEGGAkFMZRugu8gsXNjoAgjjqh1",
  "key40": "5gyrufTPXSWnHXBa7pWRhpMvMHUthvsk9u5kyGfJp94aStpQknaGoZdYNqZZcQyjbsPkMQMmc2YMJGuTpcnRvepZ"
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
