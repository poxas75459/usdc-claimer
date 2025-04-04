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
    "637Gm7qZX8nVAcqAiXaZ4aqWqkk9jN8s4pY8k8ZWU1rtCoUYXWUTrNvoCRNzSv6jk9PcQtGNSGvkR3hrnhs56yr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sp5d29cmmf4xHMWQvwL7HJnZknZGkZKZ7qnAA5qVtLeSfoYXBnJofP8hLR2oH3Dee1aLgHY7myZzqoEtHq7yZ8o",
  "key1": "FZsPCsmgxk7zi9THWnqA8A6VgYKBGcnvgmABwWXwh8kREvB8BXTnbLHfE7d1XkWL7fxiKmBx9SvgGdLN4WAeggW",
  "key2": "4SCVVQAWQ8NNgwHEiarqYebCy7G3pM43Q2Jxe1a9cBW2D3JEWgA9umnQvLrhVhDGsxd8Zaa7QYepQ6murq32oypu",
  "key3": "gSVvX3ctLgUqUXAdtm4tQ485XxgVqCbY7EBZLenPeWqNY5XVfqabam2wDQ9yXhq8rQCk2VwdgzNYzGKG7mNJ6JP",
  "key4": "2MN81mu3oaVE3rhdpmJvNB8semY8F3mwZnbjdJ8ojsjvViL5jqe2F98oqGvBaCNuABfsBR9qeCh5pkD2rK45uayc",
  "key5": "3Kswqg4yDV9CBvkGSPuGtAVuJStVZpC2WzStR76UYpNzhEGemaEVdhBGy2BCncjk3MBH18uiFqoyqxr31BGNb7SN",
  "key6": "2oJZPUS6ySVCoYmWeZ7HyZyWWYV3ShQdrGgBaajfaWkkCg3pNsG43FQMC4N6WHd2mhKPzBkeHZEEbrvybNgEaVrp",
  "key7": "5VQdqjHVmSkBygXZVVAUVtDYaQrkdTdkMR4pYKfJu71kK5nBdwDJf7fyybkcceF1PFCv3g9cRiEiqBK5wFKJGCts",
  "key8": "3aCx7w9Me9gMc3aPX5yKUftM2K4ALNYqeU3K9NZsLwtwdEKqb2m8iPQgiAeqvxD8JGih8SHyYBGi8k1r9quTsQtu",
  "key9": "4nGZ7h7m9i6apkDFJzhJQfbDHiVDAtmJHcXH3N6Mowbxm8RAiELHydXdpgUenPhQNBFPBNou6qvamtNxmPmi17s6",
  "key10": "2wBo6uk1ns9wua2CvAryz8e7JVkfZdrNuJHqop9CVJUN5s5t93VaTJaDgY6kEmjr1tYpULTFRCt9QCVd3QBgfKuo",
  "key11": "GVMLs6U7iobMuVfBqrWdaMiqmsmxvAff8VqPjsjzUzcQCYkcsUY9nEJ1FGvuy4THUa1mapVaP2kSYhBgNSJDSHq",
  "key12": "2JKsddHuqxq2PyYfUwLacNaertADXteL8AxFiDJV5ZWSqJE2zXesVrLkVAkdUFLhhfa7JMmrkFWr6rc2LsVhVapW",
  "key13": "65YXgZ5nEeP4oBv2Qdg2NGPRTcxPLkeyfUYcm6g1z3NGEvJ3jC2Rra4vc6NS8bEFiTvePNxsnoeEZ7jip8SiGFoz",
  "key14": "4zkqAbr95Y1mdWvJEowK1VjciXMmFJ9nfeE73jBAKhjb8X47nb5o6sF4Upj6xdjUM4esNu7V3LSyx82etkEHr76C",
  "key15": "6RQ9ctSE8hLYCof6iKU1ZcMBMWr3i9NLKmb12x1JjkCvDg9ngJb458mUTQ2ijSTttT2WCMVEQ6o7MMNQ1oioQ6u",
  "key16": "2LyYyNbTw4mLLq6hoXrJMGYmsd6LpjupWAs4X89jC35vLBuHq5kenTbf7bss6VKct7nRDa9Vho1Hemyv8h6JD8Wk",
  "key17": "4AXqZwkqHRxWyZSuQzbk8tnABfHSr1tCqHg9mhEFtYVdNhXjxpKkQCnyDbzy33novq73Wz4hDJT1NeupKmHCUT81",
  "key18": "5uTLwb34vcvHUGoop7Q1zbmmMeDRaCBuj4mHoDfTcCndKhHVBpovSS63M3kzFh8dnkE8VhSiC9THpfrNaRRADqwL",
  "key19": "5B449jeZUpJfeAJtqswZBn1tBFayUadW9A1iBrWQoECAhFtBJDdc6V86U6cVyMt87KuG5W7QH75fEF216WfeSSph",
  "key20": "3RNRfbBhAfEwPdEZzv4ZxK5cTaQdKozgWz9LpSk4WkRgZ1Gk71sC9Dci4C7GJJTfQQ9r8vMoLxsCV5upgfxBtK2L",
  "key21": "5rFkS4KVktPhKfrebTgnsdzsyRTY7m5F6GCqTSJsJ7w4WxWooCrPWsKKQM4QTZrEeEysJFqWZ6Y9rrfkUPpc8kvN",
  "key22": "nJc9NtKZXacNTzGFMJwzGEgJpppWwQJ4evcNMxHSb3RtGbRE2V3eL88kj7b31DSWbaXnbdhJiJbY7uBqrTPjgxW",
  "key23": "2Z2ERNAz5XJSrM6sw8Kgw9DZ7QBoTanzAJ71FzuFbvmkF4LgDFjtYB9hTmah5V68hoQ8ktAofPukUwNxZqiVGV8E",
  "key24": "5d3bw8GEFnQjcvDEgGT8DU9SrBioKHocttYaiphfACiRK8Br3VbJAzpR5yr28H7aL8GzoHuUYDb3CKZjgHT7YdiB",
  "key25": "2BLxyWZ6jc8cdmQkGm37CRytuNnYDTqy8jwiXjWy57baVpPaSJFsbsmvTh45jpDzwnXtxaj1Wr82Thr2y3SgLGd5",
  "key26": "4Ho6ihxsSQHLy782DEhDSxQELeZLTzzLdEKrkEDDXbNQ2jSGKpgd3PRjyzBBakxsNGRkvrzZojVj1KbT4TvppKY9",
  "key27": "4NVrwyvknk5151NoEHb9SYdymJFkKFYuErhnMTnWR1DgqStMXx3iBMLVBGEJUqCoC5D41N3UwU5H8Npf7BhMqzWd",
  "key28": "4YPmXfLGaNTFXaSD5bdB6Q22rtkNzkczhCoESacw6XbFVYRFr8TiGNybcHXZv6ig7FTVBrcuaTiPb5D3PYFGqVJv",
  "key29": "4en4nKY9B2XQs9Nv2u4TjJEbYUch3jBnVxPuGK4BmsEyZcn3oWMfddhkoCVMedAYCTeNZHcr6AwrkTxWQ5pPYyt9",
  "key30": "3aoGTGw8384fXmfe1STPsRqGJYXKLsDmBXAG53k9fLD4sdsPLV9RJ3kYrUUrtfkvHHjzMjLGA9tTzPFQPDb5We68",
  "key31": "4uUVLkynYRc95zNFXGtaBFepnHwxZyEB983REuDcFWUoEJjGXTnFdZ9gNZm5iSvKhhyaGuYti3KnS3cXNTmN3rgD",
  "key32": "3RJFXmUCdt79Ftd4sf798JMumspvCCAfE1r1MTTc5VtgueE9k9HrEGp3BH9TppqiD6GGgVvZXJDSZ5fiFuHngFZg",
  "key33": "ungzvY41QCJDjNwdcaVKYmdAtNe8VdRCeXJ2YocXywnEGatvPnk9e4Sq9BZj1nGJeuDupsTVdaXPsk1q3Uy5Xqz",
  "key34": "5d4mxwgq9mUDQkWAb2mB8C7k2bRdvYJ2QoP6gBQMxZ9JVaAWjV7EJvdgoxnDSnqbf5oEzuvAGZTGvJBnxaHKi1tH",
  "key35": "4YZWfLuYPnvKDvHi3LQSPa8hXUVnzyWo5rTyWAz77HgcRU8dpn74WJpbu46MXjy7HyXNVCaUuEVtu1tQCJy7tfmZ",
  "key36": "4ys4Jm8m9X4B9ErQteV74Baw58ua3chMErEFu8oU5eCHuGjpbpQuq5cWS45kJAtg6aRD6N24JkfR1CnxGoygy2pq",
  "key37": "rsHu8MQjUeA36J6fhHsY3BGyDNmpQZUTnS7TGhEYeXxS5eX24WK3EEF5MbqHik5p16NEkWwvWb1m4KBPNGqFR5M",
  "key38": "3WMiBi3DpxG2usEHNDiq321x1KDjwRQ6S7zMTYKVAJrxX8u3zhounJoQPiprJRp4aRVUXCy7HUgY3kAYB7xX13ZB",
  "key39": "32cCo4B4ziFqX9wW3LRrHnTCzW1bKpFWdW6mrAny6rHsJ9yoGnqoCA9RMrzLFQbmty7J2YepHRN6amVuMRzvGHE5",
  "key40": "66yAk6hX4LT3GPRrBs6n1EpYxhm7WCPxAKHxAuTTMyuYtQQwUvaQ2G6mgiBJVqFvsWapdcp2Jk3sCE9gviLZnEzq",
  "key41": "5iLs74jMj55UPvMmJDfFKEPS9to4pTn6Wsup58SnSfZUtKo8q7LL5sXGfxCNGra2wV3NjncPjAjKeFbraodcjMDS",
  "key42": "65gVmr46Sxkcc44eToDFdVkBBzSjoBwP5rHkzWFGTqr4wpDjsLt3SgKjmD639wTQBCaADGr3h3FmuWnaQn46z79n",
  "key43": "67GpeaGXRvMhf5BuUe2NSfgLfoxorepS9vtEnD6RnZSVpw7VmjdJmnszGrkTwqpyJCZfevc7WjX2cu4UMEXVxc26",
  "key44": "4rptm8U7BV2PXMrg4haBAQJtVziASWBbdH522mbTVYXofTp8h3Fg7grWpxAvmBY6d3kxnLWAt7yTokfY3xewQJZX",
  "key45": "4cFYBxcdnzYnXSCSRDUNkjt3bm3LygRcePN4jeq8WaZCezeZhbLzUvrWRLeU8QDLGjeDEM3YJKkcvUB9ZAPQg1aY",
  "key46": "fidgd14LCWsRE8CwfGMaMZTQ8Z5Tsf1Mn3tD3Jw76PmTHzDgsqEqDWJWMko1UhivzBXJ48Ey4eR5npQicHFwExf"
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
