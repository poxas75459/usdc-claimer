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
    "5g8tvTFUnJRWWmmjuTJaZSrf3tfaVbH8TXn7zw2F6vbqXEEJG9w6pT7ptzpjRuPPHTvUx7MzoRiEPeJvJk4oGfUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S1QAysagTqSSibNQtSWpMY7n7qEdY6zqwstZ2DS18E3h7tUSuJ1WPGw3YmV2WqHVJZ36aLbFqCuvKUYjhrDxZ7p",
  "key1": "3Me8JaMr4q9LVhUsPsGKUczvwxMUoDM2F5UoG2x8BuP4wTLnUa78LT2wNAoqs4s4ZVjkWjNxJQyHKJACCiocMjd3",
  "key2": "3kXBDqV5QP3QWwjgPgYsvAj2N3xi2j2aQaRepLJEmRTVVehBDcSsTpAndU4LcfgeCu2H4i7KzgKT2CbNigNgpSzv",
  "key3": "3QJyDFgXeEGKSWzMadZY7kavgfY116T8uLWLBANr8BfpCrtVTLcr1zXysM6sGoTJT3yAwgorWXDmb9qydozS8tWk",
  "key4": "4GNRqqaYAXMtavtujNQZrqBEh1615RhqZby12MJNmMig5wXFTH9VPstV8bdbrMUybSbUkBUjWHv4hb9rpzUft86J",
  "key5": "4B6w2zAwpdajbgn9tHt2BUuiW7uySNED1UUrDZywHynHJiUeGePF89AGGr3U4zNVbbAVRRCwyCX4B5zYAZRwYjNC",
  "key6": "61dtDFp8H5aeCxVEQPhon5XppBkXc2mRmkbi9iDiZptuuC9QRMhTpmAyF1aWRTiH52qe9TKPD6Vu8y8V9iu3eAaL",
  "key7": "3dkpUueXyKiWdT4TPZ5wHgAPyBS49kWx1MGrjDKd4tftYQ2tmeRDwAGvZoMrSatrPuikxbjgNWGrsHynJKAzZczX",
  "key8": "5Ygc4rp8zDRtWj1vMjtNiqfbfJ1n1hp7hquobLxDVeNK4geeXmnxcGi3NeEaFyTrpHL1j18EKQ1ToJ4DCzoZ53Y4",
  "key9": "2ETsXnkwNStNoCZc6yWhfFguocG9Sqfaphjgr1jbYEgtzFxV497r6dnh9YdPHRsqvQiiEdQ95FJENEnzEgGKszWa",
  "key10": "4R3yyVWUGsgt4Pje1hG92J84iEYMqzWreVv8n2qE9EX5GKHK4otgqGEKtkwsCbfMUXfqM9L62MkFqu7SqdnEGPyx",
  "key11": "w8RXc4YBhQ7vTCpbH5BDo4aWi8kaFSykUBjZt6GuMvnkeaRXi17Gy7YyJmx7t6h4oTmAUTBXYpbonQZAYanqqCX",
  "key12": "5LnEUf2Cx1wqPMcC6MtpsmqHAavAsQ6mSJZowM2cFNC1QjyvKgkCoaju5NotVaeWvhGit3QNwop3Jr87vbsuMPzZ",
  "key13": "MqVf6XP2ZM8BNhRkA1C5mc5zHEAXqfBSRR5BAECSYaYF7HGw3VY25QWjPCczJAgQMfQfHaXteMN7seHNNMbr2Pt",
  "key14": "HVbbXgRrBpvFTqB7WmEgLyPvztyYBbEviiNwvUSXQdH5W9HFNZtqqri9eKG26aYBm683CNiq3YdMSGnv3A8ZXbN",
  "key15": "2Vz61iFwoAFU5zjiLcor5euzrSaqFzJhRaLoGTK2yR61wGXfDXpkDKRXWHoMVSpEt7BjzxK4sMhGr4DcF6eVvctR",
  "key16": "4kJZjJhdAzy54KBWT76KN9iH6edCsiC5AtwDUrKZArsydzuYaVeixzRvq3ky4ELCzDUm9E3ekpFakCkVUUMuhvro",
  "key17": "2nbq5zdmNAG5NFdf4vUno3Awsd5yuCZ4PDqaj2VsnNC6rLMo2EAaz9h43uL9V7zu3qCiFbS88kSGVSsmwjQq7VhC",
  "key18": "2fKxs8YFobm7AZmCanqCkRJTfeiN3uEdq552GFfKD3QJgCnbJFHwPtXtJGQagVkuzCfXbSqyQegTgADQRXaV1mzk",
  "key19": "3vJ1oYoVVDsAXcnovcFxm6vBMznFCCxu5YC9oUUNAdKzXHvjKo4wVM9QfsE4cwaQBzpqFC7G1fhi5bVnPTgeSs27",
  "key20": "2rbXBCwmV6Nv74a1kn4wZZ1m15p6REaAn1SrctPHeEZSV8UvS73epfZqyBYLz9hxQFgffwvszhCLive7PvubcFRK",
  "key21": "2EmBE2VvXgZbVcVZqEx1ZepRftdUSPVoomBCRS2hkW8M7huuUZBMG4WhBhPicZCjj5sPXtbDoRKPiAJuozhk7oBA",
  "key22": "4AQ8X2GrJpsoFLmazrwyEeXde8GbgRzpLZYkzDqWAFmGtrSGCuz6YTXFMKtuJrk3eeJc3QMfnCxrAeSGwJ2gjS7s",
  "key23": "36i8KfEUnaiCKYJyAwHWpuw7uA8oAbzeYqaxPgYJx9jj8HGEmXFWhCb8EFTuVZJ1fMmgziJUReuPUQLVj2R7E37Z",
  "key24": "2hQWLKnQ8kA9zG4EZfj2ptRnWnP78MgvbzoqS2C4QRfWLFZEbdEnsfC1VxLRgPbKndkedtn5mdeywK1hNkpP8KhJ",
  "key25": "4AUc547QeZuxH1nFqo5o9mFPXhsTbxkmAmZ7pT4vN9fULUY4kkPV7x1Bah62S2xfGNQ5S9QHCpgCzr9kRhWqLneQ",
  "key26": "38k7cbwQ3y8y73fgHPff5oRguDvabrz25iqM8jGVZJcGH49r61BcuHFUiizHiZ3H8yXsxRJTJT3HcxtvdKemLRNq",
  "key27": "2nUR6vvyXg7HJay3ZnqJY1gUwD7Cb1BtKX671UAqcwdTiHJx8xY1wQYcRgNYDPicFsyZjp1bT6HWusZ2EV5rceeE",
  "key28": "5arVSgxNnwM5QWjdifSHX6LdP5YPqPB9h6oHmcnM1NjQf2ur84K833tFCzw4MdwiZA3mGWRxV1TD8r1cgHj2Lhg9",
  "key29": "4yrzookLnEYnQNJX8PJEzjPdye1awp9CEKSBKeJKHP34eqbxymecLvphUw43yKdPCoZvZqK89JLGzUkizsH3X2QY",
  "key30": "3gFYY9uximUhwiRbbsjxsoyYUmMQHz9is67aEwvGsXPWRCVbGJpPeTbokVC7cooF4165mBvbi1EZ9KUXCUPaDZV5",
  "key31": "3BaZoXNjQdxPyUh8ear6UumAbEBg17fstevTYQpAAjrvVE5dm4672WcCSgdqG64kkjAPRheQpUqDkQcKFpEeWsQB",
  "key32": "4fAfMzeCu4RgrrnhprAwrkNrZWYtYtzjBnkV4B1PHgD6iVypETWQ6Cxvv7bhRQwfVVFMBZ1Zk43xPxkEurUgpry2",
  "key33": "429DxtdqNifKvFVkahpvYi8C3cNYbDbfK5BCaESQWtMaembvb5o3Rrw8bBqL5FbB9cvTVuoViYqLsTwCvZUvXZvV",
  "key34": "2NYpz7jZyGrocWeDWF9UdFpMUSyPcFq73tr3RCKMsnF3fvTo7bpm1yBaMgMpSg9teFjkQVCnH5rpvhyg1ZCuHmDD",
  "key35": "Wcpp2yp1DQAHPhvtoCnjhdi4MHJNuKVZiZ35Hr9L7h56GhMtkPqBV55Nr1BJYVXCvgKGsGhbN4C4bjELanBZuUr",
  "key36": "5Bjfsb5mqCkaJQKqfKoTra2vxT5iY9gTG4VBUVLU7n933gRYgqHaLeqLChc8GLVPzGD67hJKsXAVRynn8b6MRu1W",
  "key37": "42KQbdsKTzNNk9YjngRupPe1HQ1nkBEm5VUoVC7CNH1UntfxCUB7nKnjBS6U5iMzcB6rcBcewxpQf4dcGQwggCXs",
  "key38": "4zm9ayPbVMW1aNurCHYjbA7rVoDPkKD2cSkJx8kX3ftbcMsagrSnTbAuGdXVsCBTL6tALa4uaAZn9GBvCmvqXENS",
  "key39": "oXCcYh9EuCyStk2erkKGW9zwrf2fsnfjiDn7AhnQieaEwSNu3P77tnowhKTziDLxD2hdDWnrQgqav2n8o4yBeDR",
  "key40": "3xXiwH9bHvKtb7ZDge37ni1GRcgFkauXJtqUf26PFNeCbyBrJ9TKx1W1h4Y9K5WpipPRacTHhWYz1BsKNhP6UG5Z",
  "key41": "YBJRBfKR8RNJbsyqJpCGAh3FxNnbTw1m1JanLipyhhTsUnRSHXGntqVru3rKhtKChqCBNdUAJ7bnb3rTNxWyNrK",
  "key42": "2HgUsJeqyFwBkmDnfLjHya232E36H1Q5SCXNVYWUyiujE5EecREmGJZbwvDdbH1UNYf1ibsLGufzNEZ9Cp4NcBSP",
  "key43": "2wcY9srsSpfo1dGDek3ZvnzGXuGZNaxFQ8caKjkPqcV1KsGvGnM7bppexXB3FaRDbdrztZtEbqryENnCg2Kr4JDA",
  "key44": "2hgQzptgEXapj2VthwYh8m9easKTKx9BvDfTnh4HurEfjuich21PeJ4fJ4E1xF48CiTGnmFAhRj47m53dYUQc7j1",
  "key45": "2gCNZ5VGSpwoyeD8MuyW5JGdyCbaJqSLUuyBTMAD13sKCHQJLw7fiS6X1Xj5R7TJnW9nQg6Rwhc7K3RZCqq8naYw",
  "key46": "2aSaJoT1NSqcwycVKK9pZztTNFNQUUWUFerzbdixWdD34Tcs9iT1mTVqp6QMqAomSgRrVz3wtr6CjvGMTCado51k",
  "key47": "3YYobjvHh8T14KeDw9pG1mfz5AcxgwLFD12taunPk5sz79bihPndGHsNLgUz4nxuLcCMMWtEdXFMd6SXUreRiEMs",
  "key48": "4vhg59SXmYjabPHGeYGShhL7hqid7aCQvnZebXxvaKDSGsS9BLmYkt5PhF8CxvAKRBgWNgCQAtFMhYBpZ77UhxHH",
  "key49": "kdanNV6wdM52egSSGNGugbgDFwNhATmnJq2cvDouufeGUcw64kaLi59wCzapze7skToG8GwJJSA1CUe7RMCBaBB"
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
