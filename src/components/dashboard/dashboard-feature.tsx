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
    "2ouRtW5jyW2kf4nA4yS6x5z6UsGAjcvoxJ9HJdS74dvyei7dbmZrUSRPYv4qME3Wa4DX5rJsp1L4rR67dPgRoRSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4URgGJNpqkxTfuF4BzgitekCoXnUQM2wmCBbk1ywgej2a8tZidwjg9C2CcgGeeQDNRQh534dAPWSjtgEBrBDPp6",
  "key1": "uPCfwbKsUTMUCDQQpfrQwHMVZ38iYLdJrtwTLrGeX4MJ88WK6BySGXuHCkev6pWZp84iqYc3scChGN9yvcUoHSv",
  "key2": "FbCbaMq5HbZQADcZEVkXAUqeWno9dDV9CwWcHPThESaHS4RcnSCqbFXd5En1oLA5qdDMVdcaBxD6Z5um88Nj8sr",
  "key3": "ujLHHtvDRb35wxKu6TUixgs267SJc7GSg8j2Zjx16E4K2WjbKVWF7nhcohTwmzShzCbwoVdmWv3ntnDzKHEz6rX",
  "key4": "2APFSVWGozPaG7R7sAYeVT4vgdyZs9qKLCcTmxLwjAU94di6dQtoJCwHwCM1LW9JUn7YeoxpBz5oRHYXYDDjbWtM",
  "key5": "5MhMVnspgYkJu8hz6nBDVgnXfiCAi2Vm3SxUEHcE2CmJo3S3KhzCSdLR8K8NfdswwNESX9VAaK59NyobLL5DC5Lx",
  "key6": "3LTL5xmt8Yq5i7Lm5FzEKdJiy2d5tpkxtvEpUcK4Dz6yJ7LKk5JUTQksWb5PNJ5VbiSidSy8j9zqwCTczJBwfd5D",
  "key7": "5h45HGE7S2f4e7CSN65FerZHSgsFEtakE6yiQ5sAbmHz4brxGEQoapKkaCWY6mdGLWUCzJ2fZ8Uugpvs9p6McWJS",
  "key8": "ndoL11xzpg2CHCv6EAsPNZpd7hkpYoxvqU42VB8SA3EK9nbvhyu9vMB4gu5t6MxPS5VFQC4RgD9qLVwzeWcBTbA",
  "key9": "4USm5aoQoTKho1mnWy8f6wedLZAMYpm6zST8VPCnoC4MZnLbEvkiaC7ZwYqmkJGh1zrGUA3d2VuKAfe2z73ZBf9k",
  "key10": "3W6WSZzMtbz5DQVhNBdSybJhGiCZFW166iKck1y495xAyeRKY8NW18iPQCmH9PqkKsoBW7X1dMgrLja3DoaLr5gZ",
  "key11": "5tfkt7sozCtP6hUrokzyxuuWp5eaxJjz9CWqrfCj2aLuGyo5qTRuGnRviGMmUPS137z2DhoVRwcuwafqRRtKNhrm",
  "key12": "26C3RJYtvUGrqjNAszREx7oME9iK8mxpd9CrGKLTEZXEHqHwDhfwQnT1GNgDayGcFBuTfWmoLETbyQDqKJWeS9Cp",
  "key13": "BCtW3Jo1RaJ9BAgRT8TowjqPs5PbvV4yGnTJUq2Gz23aKZw4eeusTRW2MuJngSxJvBhXwPYkc3YWNFGTj4vmoBN",
  "key14": "3VEaHursUY6NmdsuUsBYoJjRMpGoUUmriUjbMnhUoSmSR3ZVoZH3BAQ2o2Ffc6fSoeL96R3dCbRQmAafspgP77TR",
  "key15": "559A55LfmRRGKU1eWMTrMkoYF3AGKU3jb6dQLdZZKpgvQ9iFSVdo4nVMEmuHKrCNswXHPNxNnxjSJJxSCjiZeLcw",
  "key16": "JTcDD6Fk3MGPY2eDyWN5iVQrhbhSgJoduYhDeDuZnaSy3WimJPzqnQDeE1unTQsHkmV5tqLNTjM2xuGYPbc47DA",
  "key17": "5dshuZJpNCAN97WbHoziR7f1xtB3YuGshbjaNArqps5vgXMvgLFDVjG3LF4YvYywdc5Y24P3oSBZfgYc7evHnmwX",
  "key18": "HKDSZYZxvY8ibUx6KizC4XAbwLr5mn7QDe3rcf9qRyzJyr5T1dcXbFpsBkV7jMgNzeUkDMh73x2xS5x6m4D72K1",
  "key19": "8wFAcBPRLzKdNb4e1GoccxYFd57bQf136kcWndt9gCZgHG3xxs9SS8itiQzK9fMj8XVrZ575GbmSe8kdfmy5c1y",
  "key20": "59w2ATgcpSFWTf6YpdGEbMd91JmssXVuPSdqVo337jL2wdPFavDz8Goxd86FLHpsuSP7F4HcT4neAVYGNeUimAnd",
  "key21": "5At8fYisJBB4xkTMLCiaHktPDayWkExZjBSUcKswzNGWcBAm9LLfufP61R3J5Cy8hJwyDWH7h8NCD3XkLbhjJGK4",
  "key22": "2MAtVMYnPkYWswxMS93cs44moR69u7UUZuKvgVDcfsLdaUUDbRHf4GGYFAtJY9MH6NUC2disn5432bP9FnXjQEKe",
  "key23": "2aEaTaMLfssWnSDBL8qV9qSZzZbfZqhzYatGqBo98otTnEfQzaZoUQ3NW35cXBvVk34sNvRrh1etH6B73oh8bWZ",
  "key24": "2FRhPdLrFZmEwqXpKp8eBXr2U1eL2momHywQTiXqZZyP4oqBUE2HEnbw8dscbZXptrGuphHq22xE3gfnUiANhqvh",
  "key25": "3P4d7rb2BNLhMRP9pZy2qMMXyRuro9nG29TxN91ADUvwr3MqiYDCWsMy5A2ECbqXLLDR7ieN3bnt1f2gHAKrRJWY",
  "key26": "4X6H5CVKvaV29BqR73FPqMm6wyPtaLqMpfP4gGkC34vwX6SDRJ4SafFbGScxZURXrjX2XtLtfZM9KxxKM5ZoPQ3L",
  "key27": "2Ez6ngmt1uyBhmZAwhDjRwhYuqheZ3FX7y7V4SWZpGmsHpmSJYKB2kSbkWWMs9yroxMt5LjMGd86xzUvGUNoVdVD",
  "key28": "5wb9ndjMkShQ5YePHGnX5395XWscY6HEJRRsm7jrg1p4WQ8aot7wyX6J5mbJNfLN2NGoH9FLYJyi2kn6yiU8V114",
  "key29": "3hr4E5Rk6c8xwXBJGTc4qjPSmVTRxhRf88JTGADv8tnpiXVuuK5WXQMNjU6sy5AcdXxtnc2YFQ2nVmFHpsonrkF3",
  "key30": "4ki9FfN2DiksFDLJEvKuE61RDPgNN3Awr2E6grsrtZ4DxkCUqVhc3TkDHCvkMJ3ASDPZfcWnqk94hD5uqxeFmXMZ",
  "key31": "4q4rPojarx9zt4SbVZrVHmvSD6GVKYwXpvYwQNtryhzbDK2k47K53JuabLUHV4M5boFTUsibH7wpRM77a76ax7Rh",
  "key32": "3np6iBnyH3pBjb9LYCpMMsWAj1RfqQWRmGJe5nRbT1q34PciHjZqaamzjvARNAYkXEgfoLEowLrmQtbS3mpxogp9",
  "key33": "5x3KjKkWZ3f4AgsYWKsqJMSFqhZ1dMn1cHTq6QU5Nf4nXH19mAAB5A55gyLvmwjvb1iHUCjrJznMGxpn5YzfSSU5",
  "key34": "2H51nxzCtG4Zw5KtEnEHaHfUbJ6d4yY2axSp8nvJfN2anTsxJqdkF7R9Q5nL6iKm5VwKtre6mKfoj1eH1DZ4Y4ZB",
  "key35": "3APBCVpNhetpWZJ5EMz7oev4eNcKj58dhrsfqGnXJCgyq96vgDTCVP7Q2rceA7UN2gXn922AjLk3CjNzh5GmXFrR",
  "key36": "2JXdV4nEFztEmKhfPEmMHDiifrCJfce81UefqbpLo4b18wNutSytgXmwAHe7UYmwuyWXv32WdEpQ9C3eGgtrUjcC",
  "key37": "5o8NBNrKDzdQHtCuN87rheSCgjbLoYiJJPDy3FwT4qbECby9wuPLZqS2Qso3zkoQkgNfzPJf5BHQ2e1GmsNviZ5T",
  "key38": "joWGdTxJy441wrofo82GvASNztndggMksLXvXpxsayAJs3XdXMeNauY9KZRakeE8vv95MH56AoA6CGAFwr5F6g5",
  "key39": "2Sb2fAj3ej44d1NYmrHUArbT9pVsBHC7WVs6NGgRs5d5Mi47GakMwoGCpkbsTXccaAwL66PPvQQSaKcbQjQLdbn6",
  "key40": "2fAEFtnj4vmuBtEVxQTFqMsqe7mRFCNXdQWfGcHAZRxMbJydyFh68mJ3YxxXFe6uXnfLwXdeNZmpsTk87trZd3Yp",
  "key41": "cTnbgXi63sHtYAKJ84FMVgMHZ69SJSUNJPHB1s8LYaAe6j9K19Jt9mHnee7DySnvZXefe7wM7CoacyGhxRy5CCo",
  "key42": "64jgLfoRncpqnSfZwBL9M8VecfM9ZBRu2LSsMXSFm9TTSgWssxS8JbuabMcR1gBph9dy2j9sgQQDhiMfasrj1oo6",
  "key43": "2nM9HeD9saGWe7wqQKkTrWuDSJfEERBq3uCSWj13ffCFn6qUwj3xdVg3jVyoM4Ujz2PtsBsxoNvfeXBYN8Qt8QzY"
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
