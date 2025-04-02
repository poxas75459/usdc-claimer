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
    "5cS2xC3eK7PvZnuoiML5KxhCYMthvGnWp3aBcVfkdBBwPeSXGkKkH3wSo89R61N99uGw5xQBARrFwQNCrUkdUHgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vp6yQxa6NYkbw5J61SSeeiaSLT2zgDzzgU6MjCD2xRcmkWKF8y1UbTTkGpMmuDfMmjw295mcg2P88pJ52Nagqqh",
  "key1": "3ArGNNgEMhhgAvjoiZmWAiFCEDDFAJUREmyvWy3g5s8U6cah8ow6SvWLJjHGKx5UzMRA1NxMwXVyMVkbgcyLy62G",
  "key2": "5K3z2J1T6Fb4F1vqM9R51ukacydAqbw9EUWf5HrJHr5LNoqfa4HA69B8QSdL7SAJ8RMLFf6Ki1FubRZMfBCCPLtF",
  "key3": "4cRBFfixE5GRmHmbETGdEogX4uciHjJiTA99RjKMnbuDpgtJqAqn2apDGv5bvnQCiu1Q4piFKDjerpYjCUkKtXdV",
  "key4": "5rNEavj67k5nqDsbhJjRttzCv4QK9yiMjVYAuDZoJbMLnSeT3NnCCjCfbP83aAZSW3XtzRb15ivwdgcVVaWrkFjf",
  "key5": "4RKLfiksLASNNGkxJ85pCN9JdV7HzVBC5Ydxe1vT6LgmZQCUpd4NjnXvadVxR9iq9o5753WLZ5n2nRRBw2DRmL29",
  "key6": "26niy7PQaLtzPfhDxMxZGKqW2aJGpWWFdYwewLUZS682z4qB7LSsnjx2cXaSTejm6KK83EoqQ5DfgB2RkKDD7Hk1",
  "key7": "3Dh4LBsDWuYfQoFYvFHMzhjVXWFc3D4B1xC23JTbcPsGrjBQ4H6weRQ3aTQTexZzyjQTEKCdpE6FGfEknPWKVo3V",
  "key8": "39qCdc9sWj7UDXvVm8X6S2znF1SA3EUN8txKfmFR1CDu5N6maiBLbmfmsJ7U9RBAzgq7hEkEMmgbRkRx9HoF7MXV",
  "key9": "5gHmAMuNWi3b73wMRmPrRWwAWRokW2XHa9v2tnsDQiCSbGHmJQUbjwtoGXZ1Fu9xWg9QZvEvXyTYYRDLseRgKLL4",
  "key10": "4U3zhQNoMCz1LFR2qVKYkd8ZMXRYfur8NET75myff15FqnwAHq3sGy4o2EeV6K8Qxn6MS31yxA2QHRwhKo8qEWDm",
  "key11": "2WN5M4b3zysKyBE2tGockE6vUWucukHPtVSmzq2eYofozRA2fJwfTJpsnzGHTKmSfWVhe1NGFQbTFp1QFbw5oMLP",
  "key12": "52iDgfycuB12ztHbiY2EGXzHjha4d4Vhz7GZwrrMtxwqnE42y3k9M5JwaHRhw1gcvnJYNrJwgBR484VV8c9mwAk6",
  "key13": "5F7Suf6V6AecWiUYXr2MSkXFbSridYeC8EzW9NK6hQD59Hr9rnrXX9nj1j2b8HMEDg91uQkhgxqQnu4RDibsxsd6",
  "key14": "4MLitM4tfkSCD7HoLWfxpudyxjzsW7DMKVdJQQ44sbKXvVczHD55LTh1KSrBLJ9s1Ub8ujw1rtKcM9HmkfbRertX",
  "key15": "3eQV2ADfAfi5FW9p5h8famigwiiYfoT3Us9JG55rZ146dQPtMt2MKbABiCmPjFXNHzjGvV1qQ6qJmVLUdjeWFNAH",
  "key16": "4gx8andLQX2u6f1swmQFbzNn49DcR3cpt37reR3aX9AjkJm3pN8kupQ97ZMzoQdJVTcFbzBZAKWzzv6jo4mZyxsm",
  "key17": "4KB2txRCzR74tQ4GTHjftUhhmQH8EFaTz4eGrFfRf497Fd5v3Vb8n2rAUfCTYQDmNi1P75VLKtcYnVSCp8J6femk",
  "key18": "L9q9SfVAtxuiRzj5G7aEE5nvdaDxH1tBEyrQagogZoBsFHEfKGw32WeQ7vDTnNtQ1ZPTQ1FWeWUvCX5QM84fG7f",
  "key19": "5C22y1X91KEUeVyK79Fn76eAtw4kfWjkcZma29A9B5s6MPQAVC9aeHVszf7rDDAXsZ18pFrc28VokJHmeUSyBtug",
  "key20": "5cQDJnw9JJUkCWdXv9utWtLcvyesEamrYEWYrfL4GBZ8yH9DFWd9XnUSuDCncrod2HMhLmwB48e9HdEMJ9iTaHgo",
  "key21": "3Gc7CBCMHBPCJq2bYseoGmEHA9KP4ZNiMsqitnmty4REGedbyikkzz7nyKuY3QZ2neE2koRHKHAhYXZLpoFwq9Yo",
  "key22": "2pGtT9QzyrxkGrSwS5ewKqzgg7LhWBhv8puQf1Z7mnNtXqoQS42hZh4Y7wrGuz2WDsK7LfRg8aRRK7idfBde5vQg",
  "key23": "2Wbyukfp5i2VeGfcRpH2tg9B9ZARsDTmqV9EnsLXpXV848aGmFCfZASpHwJH8shNxh117kbecQUdLwsXTJ3qxreX",
  "key24": "5tnqmVo67KMaxKs14n8DWXxxgkNTVukavTmAA1qsvRgdsQs3N5KRCqHcYCyx9ceLH43t7Myjb15RWkTxJHiCrAYi",
  "key25": "3mWzHe7UWymKPGuieXfbz8iqDmvAMv2ZDJX41sM3MfyA3WhsWLBwqiQjcdDNwJkiAp1ukHZZTG3YLVRmujHryXJJ",
  "key26": "458Ew2fzW58Tv4hysFNYfMpZwGLrdBrVB6kDZAL4xosavarHKnwg6JznTk2NbzLxFiSa75jozhrQUrEFpBGAkGbW",
  "key27": "54jVbVxNBQfMPqDiZam8PkXWcWKwvetgs3C4RNwPojCBvzyvGc4tMwYrMS7Exy1Px9vZyBgPA1Cc3yNBL7abzmVf",
  "key28": "66kLmpYKahm5zAMYy27Lg1zmqNBkfvapefqULmFWG6u5LS9w4trFN7YgDh3azdAfTgnxX65FjCSENBJpHMJsuGKx",
  "key29": "3MnSrbafKza5ENcV8Po3ktxG74WP1HUfjuZqwdej9rY7KuR8TGWLXjGgHeHnoN9y5F2fimQSBLa9cPxfhPyGXooa",
  "key30": "32HS2KxvD9Z11GpF6kVPhGrQeL8Xes9u1YwimBHALNaeFzexDSSaF2YWJ4BTzZ3USFjvymguLo2YzXQnJwaSeXDz",
  "key31": "3wpyU91WoC4qnx7w1ioRpNXfxYD1uZDFr8XgUoKEHtEea4DaXt6nYr7jJywuJC2fd7yWPKTYe8rs8jyZysUmnwtT",
  "key32": "5J4TPqoaDB2pdLVYPbJeLDuEHxg1NvJGkjXpWS5KXmLBtzB8eVJrTuvAF3KBe4vNk1RSPecPPL9d2MRJSsmj5FMB",
  "key33": "2kdkmnDxotvpVSkftb1WmPP1Z331kiVeiiuQNk5gxEwwjHLhVSAHddF2mzxCMQRvW1BzaqfGmEXYyYTAnximY6Hp",
  "key34": "5KTfmnHvjDL4btdLoDS1SVPxDTj7inrrEACJNf4v3VxfM2oHAkB4h6wQkgf2YAWENiR66ZES2ZxkSGwVT1MbuWJB",
  "key35": "4mEZSwTYbwf37wrKqXoQ1HnpZ6tfWkbKHXCgzdLxyZbVB2Em2J7bHKqpGx6cxxpswur1mUZmUkCJxNxBMDRB1EXp",
  "key36": "388mXc6wieEp9GTAtcTuyZLg8mr8eDFzvb3zbFwBPHyp74gD2r9RUi45gM8x7DKMna4RSWAHoMfz2zBfPAnH71hw",
  "key37": "241kbUn3pP457zF1KCtH5GkAVHrMHn2wFgyjSVxp3xAJzFCfARvs7DTRkGiNvxDxx45iaXz813egsSha2hgL8U4b",
  "key38": "337kg57FiQwYf5uou2hBhLaPRBZz4i6s3iYBxmyCFjdW91Tn5ZEi69BEbTMMsy98YXgAoaqh3oZ9UhnvYhPyeJor"
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
