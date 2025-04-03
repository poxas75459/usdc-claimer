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
    "5gpeyKJV9HAUWV8aCuoPFiv98VRoxHQcj4iiov2XkricxNksJWjfGSby5Uc21JG6gUqHqQ8A9p8M3f6rkaQxKqZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xnggwa6JkRGJoDxtkQ4uPVEew8h7EijdWEXDiH826YEj2qLqtZcEkKrvuARCBEFmEabrSVtsyYBkJHsP6zbqtXt",
  "key1": "z4zv1YwRVySsQWJ1HbDzM3KthyKVAHC5HLxv3EtmTXhkNwoaLUVLt75M6JFGZGy7noXaCDqvjbYUM497Yt5dHky",
  "key2": "5oPZaKpCYSPrh2RCtMXWY13WpF1dpUZzH53h1Md2yBpU7WKSSy1sW3jwcBWVKdcdcUFcCjg15UMLcWXCcJqef3n1",
  "key3": "2ohRjEFgCg38Vfa1kK7pkaZ16xJPKSQyP28FMzoagrsYWbbW3NSJNVf3e6fPqgUSpD4zGJnMjPFYgpW27d7kjxX7",
  "key4": "4tuVYDFgbe87AXWbY3N1L9vjU1s4r1ndY3iZoan9cgGKCHUBFnD9x6viWzKsWUQ7zCXt23cyrrqYLaAJDLkScDtm",
  "key5": "jwEeB6LTW8VoYK589CnDmd9dTvnrEjC85prBQBz8hLYS2PRwMfno4MjYQ3yR5oJD7aSxPkEWPZYhy799385fA37",
  "key6": "5xrqmKcqWaX91d6bQ88RUiwd2isCUYk8YrZviNfVpUG2NqVKw2eEt6fBmw3gEuGRvESim437dozDJHrJCzBFnV3d",
  "key7": "zCDv5gQw38z8BGH1i95fR5hNVZ1TwYJsTgoW6yKyPhiRjrM1tzkYdKoJNPr1pqLvRikgJdBoJdLNmfRLqJLrvte",
  "key8": "53gYGnCsamHFTkhy63V7eQW6dHCX7WQEjoWtkWiugq2LSYDnw1dH6YYaNoEbLYqSnCkK4JGfgxzKcM6Qmvjmc4sF",
  "key9": "3vqBb3VKPCdG6ghk2w932vBatyNVeXDbeRKX8AjRzNKSovL6JfTCgvCY3TjRzbVrBV2eJ3fLJVsQejcZYoPcBM8J",
  "key10": "unJXus8oRwUhyjXkadmHfBuFbLWuw7YksJiUagPoo7RtxKmRaYhKgwuqn74GXn19Sn99YccqcxHb3tBcxSYBMcF",
  "key11": "2CFHCwd8LyvST6tv8kvaXSabMAHnQqkZFGUHinYaUtHo6d8XkX141yhjAKBj5RswH6QBGtecPcwhQQZHPyEzWqNU",
  "key12": "3ZWNgYNquwNaR4eaQifctQkdNBdAXGN8f8PedRxUQhPusGxxJGq2Hu52wx3bA9Y3QP5VFvqfhWMh9XvwdteSJSnu",
  "key13": "4GrqGtLztQC2iueniqnVqUTfUrUZeUGj49jbKATGFbSn37RD53Aj2832bmhgfJvP5mKxveYcR26qKgcB1ahvXz92",
  "key14": "5AbfHrEEuTPRDUjVgeqU9e4SENk3szY21yiCmQ9PvfadsyjhMgyvkkNvSx53mKKeCkbyLq1YVStTx6rqu5EedCNJ",
  "key15": "3irjwnd9bRtaGSSMFgWUDvZ2BdHbX3AzJUp27rDEkrpyGseU6yu5bweTTWLMUsFwaNNVvHMxeNvDNjkB7TM5cpKx",
  "key16": "29KDqTMSBzFXEFzpk7BoTHGz552no4ps5HQs6xeruwENjeL8NkPPAYL8A6eSHz3jVVmzkWMJ2zSdwDCuVYmHpXgq",
  "key17": "5kFVsMaa2dB2SjhDJ1q2kqd4HdP5YWABVueH3p8qRcwqAyUcH85QJKsoCdLyFHdxvxLjxfKL2YQSkdGTNkdo5fpx",
  "key18": "4WZczYtHEpR9gv5iVP9SVz8ZA8NhwyPG39E6jZTihtao5WzzqYKaGujbAp38m3r865mwTx7fEYcWSGHj5Zjxr21u",
  "key19": "5unrUBJwy4A6J719cgom4dig8zCRyWaLDwbh3uENmD8RSXts1XAJGS31uxs2qtP4dVW61V62N4EFSVRuiFuqDVw8",
  "key20": "4iquCPeFrTm1YfSKmU57Gy9mhKVj4b5yxRzk5e2i1hFJWhs9nZW9FHXUUWxaVcXo6529hr95F65vKzWkuqNUrS85",
  "key21": "5ntdnPzjrTmUc5KEJ34kTHkP2Lote4tRC6o3rJXNmL3vYWndeKGrBGcg4QnPWYiA6cuwFe2rqtFqsLtF1GHwCLa2",
  "key22": "3VvNpeYhf9iCXs5ZkicfxMcoUsKYhb8X6Rqqn2jiEjMnWnACFmzxxM7LDnfTfVWnsNpcNHPeufan5pC7w2TRJCUe",
  "key23": "71ZDhgksMLoqAmZiaSZ8akT18su47oBvic5xWtov74d8TmdRPWnci7nWgCUA51pi1BdXLDWedkaB7p4r85Cq5xF",
  "key24": "5bAMWMnAwG9RZEC1rFnbTygioqqTFqniwRkxzn6nmQAqMX8hhJaJFwxys9hK3FcqWyACeQfKmAi51QtRdLhw7xE8",
  "key25": "2qhE4nPuqgYtLmvBPeVcu8YmFyyJpsQhTHLcpSb2dimUGBzZqJEPKMZSRS14PBpizNGruuUhC74FY9hT2tUMpJ15",
  "key26": "3PjWBD5Hyqfdh1ZJGDXXv7Z7vKq75YwZi4vrmZ6sE4cvhMvitRnkpRrF7gRv4D7EXWtadrwiJck3U5DixpqmZEbh",
  "key27": "4JSsvTrJnzKsQc3tQmCvRaskgfmxnsEY71v8tSGUZ1yYBcVtErr5djfNM5Ht48TSJTEwfjFLXVHiCkkRzhvFHdN6",
  "key28": "5VBs6zbHPYymkavT3km7aH2zpbY96NTP1bpUd2txtcJmKH3LTmbYijN3XCjQARx8FvCfzycU5XWihhZxh91bbrWr",
  "key29": "2DtSgJj5m5RN7bfA4Q9ajHdxQ3sv17uRwmLEWKdtNfYYAcDs1Gw4Y3vrdWJ2w2FP9uSFfKUsWR31dRHyQLiWEVac",
  "key30": "5ddsk3tuGLMVVnpgUn1Vmkg8tYuvDb5gsmfRWtC66dzCoENcffggWwhxzRcsSdyhXaJ8nv3vmWcYwEQwP53jv62V",
  "key31": "4SmJYPijRRFhyaDVDioGuu9m9CXMC5Qseicx5ZwkWPMsGWZvhwnHBXokpLbfotMZMRgVDEggkdKzMbYQ5hvpvwF7",
  "key32": "5xpJ6N4npkdoY7U2kXi63agwM6CwgtjwDxqQYRwJ3ajPkNZcyXo3QDGkZD9QcA1NNvpQYL8YBkQ3WETgDtXv1REr",
  "key33": "2enuzQhck5jAZdFDyPfWR9wpxC7JXqkg2rzZ54bPrYGBvYP7csWFYtwY9Wd7iq7URsA5BbXYHhGPmxjxuypEcprx",
  "key34": "5oDfUJfzxXF6f2B5XT48feYjg38s4mFVc4XJvwzC3i38jQrfojMyE8k6CmtD8QrneScHPAxDuvQbkHQcGAfjEGgF",
  "key35": "5zBsdStUAuHRsvNPggJyTNEiSTPTkmFgyNqFLB4jc9F1dtZ5RHVMXZsJX7Uyg1HDT74o7xvNUoTM53mJAXP9Uo7",
  "key36": "3aKsnxpzF7eXiXvGAjcN62WkS71qHtV9zXhV4pHDL9RRz5Q21uYKfwFP8hVb5ZqfSKRy8gQQEZCTNeCD3asGexrF",
  "key37": "3ZZzM9gxJG7yh5JhhXavvQTnR7rCR4qchaArVkfN3uU6FQq5EVas2vrTWUbAgrLNVC49frtx1Uqer9ZrsHnLpywx",
  "key38": "5JHc65grujz5Bx1NBNcxdYwQDdebUhn3Tw6bhy47eUiP6TgQYqCYjr2y9DNSVm4bAsQm2NGVMTGq4Fv5wv4yzyDH",
  "key39": "42L36zRHWcK2DZs52S8HsYD4VW2x2D7FcjejoahCAkfR6zbzqJLx4vfuXAZ1rG6N6fTwowrGG5emtVEaGsapgZur",
  "key40": "5CkEyUWSMZfP4jJhESPqPDqTv3HKMQYfFQTWuLfdeR2zT6NV9w3mDVyT9ZDpGAjSB4pPhkPrcZNpY6k97bosmcDW",
  "key41": "2fo8yoN71f6nKVzmtABjHaBkqXxJTdvVbVAkGee6ecYhfU85yCLxg2bHbUkMNScpA91WHGLepHmZNwwYerSZEd1F",
  "key42": "3iSiPcqhGAhfS4rbDYCSNrmNZ3JZevEK1r4Jznm5u6ReShdXSXMTsT1BhtHW79P6xQXfs8qpwuQ9RgkjUcUDLUqG",
  "key43": "4WHuVaZsrBj72yZx19Sn1FjFsA1MqsFbUgigYvuozUHBzphK5YvT2nXZhgnQd3sxymCibV4iSBWzAysKybcZggbn",
  "key44": "5Sx5tJznSZfZijTGSKoyMnWaSkofGr32G1SPv2Wf26imic34zPvC3gWseL2ucnHnTGRLzkqvbiB3d6JTQB1FYnkn",
  "key45": "1zm5YPbhJWyh9467ykpZDHFnkH9fGdUCpco4KUPtCLVrA7BPtvDkt83qrjLPHHhhquH4hJzPeWybDLHNdySKceT",
  "key46": "3p49AFJUskkzhTo1KSAGDZ4i4SSQj2nkTkuvNg8h5W5sgqnF5DUnKg6QoRG5QV2feNWQgxngXDW1YzapS4CkZy6W"
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
