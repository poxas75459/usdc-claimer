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
    "3mKSH9h1QChvStS5xS821pDLFJrWDnFRfnEYqMGQywFjgYHpBNymbedX2RFrZGNiNNZcfKTmKNuuy2WXweTk4Vqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iasqcq4RVXPnUcnnkyK9VF3yDjACFAL4mTzzJ8guMDhpLowbyTY89AB8hhG6PvkG7eUKiwmaZgFDW6Cm7TupUKw",
  "key1": "3hxEitfA5Lq2kSQ9VMsTcckqKYmBUxN4PHRrfEGjnGEQCot2pJQhQktoDNjvMUPDAitE9Z88Xog7cncTXtdwTxDB",
  "key2": "33M2FZhjZi25CprZfaBpUFDpbFqoZcweLWR9UC3d5r7aD8H5VtDwSaHpMbKArfC3oH6CCcGBYtmP4T29vXoRpEp1",
  "key3": "5mLquaFQ3JA2TMgW5j6pdmTE5CrBW4EmZHMFitJxAVzZnhDHrvKqfRb9mVNwgfcGhhsjBP5zcEMfY5DUXpgHGzJH",
  "key4": "5gu5gtj4LiPy7NGWJiD8ZvyciUizmjdLVZe6HytCS6bEDjuGF74DbTnFvgScjREL85fxqya7TrEd4traTHC2Wopk",
  "key5": "frsZDpQtNpKZQ4jcGJN7X3NeRQaAEGzMVWizVghNHt8pnsUr27UA8iAUz2SzRGe7iAhm4m2JF49RinzykaCNS5H",
  "key6": "5jzmEysZGXAq97H4JCWRUYvkEm4VVunYiwDsECbRQtvEwqqfTsBVTPXk4oCbB4CNeXHezhcR1256soVmTGcV3trx",
  "key7": "3R25RxPBhUGYDcdq5YLpZ2yZyHw9y3DSuBy3GqQ35SevjTTS59oRFBbqdQUv5KEM3iKKMPthoNzARKbGN3JJQFmh",
  "key8": "276LfDcofFEX1equCc5ypGQsKjvPiWSUEqt4YKaYEyvNxCwnVedvgBJYATeQ1PARrymwJVvkPP7pWnjd39thgWmf",
  "key9": "7UKV7r6HoK8qaVynLYcGWUuQ7gysJqxjUeezi785SYG8xu49mvQ39fNnpzuC9gGovnwSdLBkPr8Pi3U3ygkWrfT",
  "key10": "3nfXHBRAcNqE87KVSmVn4qeinJ35jswxzBgxBURV4RgmetoHKhk3C3mpG7ZRCQnB69cSFFDTVYohUUqYEi2cMwrh",
  "key11": "gGgeFU2MxVSMwCHm18oCTe9VbHvrLzVfjtxPeAWS9f6YjE3F4nYc6crooFprWYozk5ybPgeUL4rMJdxkHH3JRFw",
  "key12": "5cQiKZSUvgThSYjF1yA6Kr8tb8GwTYaQNnY7XXsYKQYVqt4GJM2ibhkw1KffrevJkSuZyLHkuAsq8sRTxDGxHpAr",
  "key13": "5ZbTCJMMo36CgYuVeQBKz1ihpUM9FSL6SagoqUt8w7AvMGGDcZE4gt3BsZFJ5dtxskL5JWzLUhjJgAygyXGS2Ua7",
  "key14": "z5ekdr6zqCGPLyC7BHuebaE8iZPXjyGVmTZy9nL1b1vq5wFEBdmJpRTo9KYUN4TvwWmho57JGQ3Wmdu3q23V4W7",
  "key15": "28cR3HviEo7AaqpX4W8xLcNpHFy4PPKmR9ijicyxffa9hSxke6vfBj9DSAAoBgKgsVNdXVU76oseq8vAn2bDJtCh",
  "key16": "3qkufXQbL9zsd2aFmnHaWpXnTJ11Gmtbryue9cJqxsS6Sne57MwoevXqQ8fCnM7MvJacgBFPEuEaTJfe6gjfN5rP",
  "key17": "GkZTgYxHzr9eqgcKqHR7pZvrjnLyaCX9N7Y5nuEmMqchPFYdA5WADBXZdg8TUYA73nLPHvehLwZcSr6reV2eRNp",
  "key18": "ZtPHVcfUzEMFh1UBtWDtLYDwcoTJ671Z6Bq4DyfuYNwkLunHCQFnUvoaC3Prcsj9c8WdsfRn7sGNQguqnwifYHu",
  "key19": "4CiPd4VtvJtQY975VThuH6CD5ERQ9AAbMYuieP2fc7iKQz1aUSxVFdxb2vkswAf4yDLUKudSK9StmMvpLHiwSNug",
  "key20": "5CzdqHYVT8JZgGnuEDhSxv2CB9V4v7NR1WzUeHKu1K5NJh2TuzpE4fJrDgSpYoQ8foxh9FdhVmzYqdBkMcytV52x",
  "key21": "4yWJx31mbnPXdDU5sWYQWx293M5dsi9xjtrpkwJQn5AymmE5eTYZt3D3FqoMBUrPyiZGc8y8X5XUTDSGRZNNLB2Z",
  "key22": "Qv33V9Yi3o7Jf6MGHqKfma3oqe23anFcfm2wT47CKMhJY2ZwszemwNQUsqfS3wH98f5GPoFCAZ4NtgaaWmD11gw",
  "key23": "3rfqzdZjHsMWjtW49pcjs5A5WSzMKiRMbUCWFZW2SHmrTAYqEnSA3WjuxxcyzWAmXPn6zUo9fKQ6PJjsHhe1hLjw",
  "key24": "2GJbJJHzLhBsYvtft4wskem3SbBGz4BndudNG8oQZxNkD5QnTgaCpYL1SmCKpjXhEmuYdeUozzzQqF7Bcxg6j7b3",
  "key25": "614HeusWZvBTSm9aamQaMP6tugAm3UxnVqGC7kUkt4bZQvCiiGibnQfcmiDKxRNmRG4HajLiZBE4vK49Vc1k8rW1",
  "key26": "39meA4Hjk9M9SypLfKihu9ZTEaZ8xQEv2D2rwTYcFN5DVyFzud4kdsR32wkughz4f6hcyHs4vrXUjgtiWH7xrPBv",
  "key27": "3U4c2YzpUA45pfJsvd8SLydcdYds8zYy3j8BmKNvuAbX5RUjta2f3sUGhhJ7YvL8XVriRYuyafg9hXtqtahaZ9rS",
  "key28": "5JHwHLvrXNJg5SEuDcGg13J2FX9sSKhvZJ13uaXVQFsFPV8yUb4cwKERgnVTRmWmbM9d16PPpFdrsk1yZhFvJVdg",
  "key29": "4kfErUgoMad7G4853Di7cnS4iSBbqLB9tq9tzkrteRG3HFJHacMd7mnuggLRbDbyCDc9E2ztSn2tmLx1feuvxKz5",
  "key30": "3pP48ySPXnM9HAD6psUtXkPghbxE1AzVxRS58meKrCqAiTPKop4wdg9xEx7iyWnUDMMBTMPCE1sG1BNhjvZt3cVj",
  "key31": "3gLUMD9edXxXWuvv6Hpfhend9zcVrNPnktYXsZUxyf1AbAQ4nd9KySNXwQUKHy1g7y7d3Ap5tqyP48mTsenM8niU",
  "key32": "2DkgnVgb1V3Ndsr7vZdMhcoZPvJgmjdNDJU8rwbrfTnvBXjDKPMc4P5YzP4dJv3QhLPrnKG24bP8DwGqJwx77SGh",
  "key33": "4o9vnZeMVMRoKu9WymGQLArUa9mEFCDEknbc7bsFw4kbjajG4B4nk8ZGRB9Z2R9DXuF2p6WnTMhSuBmPSPocPARx",
  "key34": "LCHJAMRAy1mUc7qRexWKzZ2VVzWQDGv1izTY9nFdWw7ZUMotSc77fFP4v1yVhrD7SZSKagi21U6ZescVNfDzhUb",
  "key35": "34zzowajnrMbHAPebLQNzQySnCYenHNwHQFAM68GwhEDRYUNKjbGADC3tsDwVFychMbtBYzB43F6S99ZGwN1JrGN",
  "key36": "48vzSrj5y8i6vGWLkDbdumEnMmmySa9NWmGBCqcJPASee8sGNgsW1xE8Bi6GWBdtEYh9RjJJ5PvMEPYCtzjzPG9y",
  "key37": "3QgBLL2Lz2KqqiSgbeUK6Y3eCcBDkopKGCvzNDKopWzukdpmyqGbPvHUWuNWQF1tSJhQfjhSmPdRVJgrouyxKvPq",
  "key38": "eo6MUWhDvyi119E7USW4RFeGdTaUWVcCW4V2S1Da5X8GF2XgmP31ChYwNLooRBhWVjTA58F62KqhWJJy1b8k1Qo",
  "key39": "2qYGRRmgSUz69ZZZ6raZyePAUBDWyFSo11jk2E8pPztrzWq3SvNez83j8bphUE57Eh2XzpDZk84jUUnjPxr1cfP2",
  "key40": "3itzV2SbP6TfYMNfBZ4FTuc7sKYoUamkF9wj5j7p1iTMP3md3nH9PawegYTLStPxrHpCCixEomok8MkP4vP3F3xT",
  "key41": "2YeV5hs2Y9eStLjrff1WbfZqjoPdNNhdCQsSbkVdd2jYpAUxtejpqNLATMVriizLaCJo3B9EtUyHPF5eZvXapRxK",
  "key42": "5Z6CQ7To8jWuFZfRJdC8nLtfL8pSACSmrQbjHcsZsANfxDUAKPjKGhmcBURRHSCPhrcdLayHMaUpkjVsZtrkVuhX"
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
