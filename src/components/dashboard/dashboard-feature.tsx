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
    "64tmEQMatnsrcqT6iVoeLmYw8kb2sVmPr1nvHef6xCYpuivzGJSBmPavy3wwyuPf5bQtseonwQCzbXaNfAq6hgbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GgyxjC7RRUeYmRuoKMmRZ8j4Hd2pwhWZCXuDK2xj3f7G9CLUwafwDouXPH6myd6DYURCaqzaYfdwcycZVZoCPYL",
  "key1": "SAL92sgX9ZXM2AsY3YCgQ6DnPm8QZW3XXQNDeDZUvcSZY8uVY2Du2bbw5CzjwedKArr664guVWjDrtPBj5i4pve",
  "key2": "3rrnVzvxEFznvQ1bqemLaXLBNRTjR4ph91QhtWoFozZFSAHsvfywwcmaKpcNEp8NRPqWEa52wiSGWr3LCL2JdQAV",
  "key3": "KbHBUHTphszxhZyZEJ8evr81zAhsHBduVx8emc82PX3wc3wVy7U52ZAi6RdnSpyou7jGfeRWvvkvmK6D7he5Sgx",
  "key4": "3zbuU63fHbnv7GfZFEK2z9Z4qJVLRr2QWdXWnbMqtxs29ZsoRcxStynksWzuE1LVdKdYoxpnxdRN15Rsg2Ktaiss",
  "key5": "2tJCW6gUYMox4v1TUAsSwRrfNNBaowrvbyvg8ZZqogZXU6xZL29yFsS4zHbkr2SntSLDTrTNhK5PQt4pD8EhRuWT",
  "key6": "2AVXhbADc7mDgRg85v9YgD5fKGGJj2Vv7WFkEcyQa3uqYHs3DNMjVpwd7CLMBvc5Bze3orDPzYe5F5Y68VmyrmLn",
  "key7": "4nxEpPzNVszMTZxbLjFLVWB6UQvTYy7p8QKh4ZcPDEkY5o6qS2Rj1p5qgGnsbBVUU4JXdPnu8Q73EvTqfR8xwDyw",
  "key8": "2MFf9iyCwb39p2PReFZYiYB9dcSUEJ8Ca8F76Bagn4JKWL4KqHiDeAieAGKUbY83MFPHjnMgm3znzmireMHcq3bS",
  "key9": "2YYN7nW4t8f1VoVGNQpaRNAWzNVvhMAJkkz3NKJQ4AMWSrSJF1fjmRgrHtM3vFieeiHQfv22tPiTzEMuuFG46naH",
  "key10": "55RVEbCrB6BbtLkLK2Rwyma5P8bbjVYbpaiEAHQvYWfnRf3KyxdmmP6ivUZm8hoyMBGfQ5qEqvkZ8hRcMnvW1Xdd",
  "key11": "ESBYMsu6wGAXZuTqLTdCGRwhuvyPPH7cBXdmvFYLohKCuJX3tBKrgU1p3djxThsJjAbtxfMjywvYuv1ANPUzQFv",
  "key12": "QvcF56W9Me1LixvGCfBsmGjkBvysop3ZdB8xDe7FkYUXNF8bZ537woveb3Dev5rj4ktm6bw4vTycnLQL5PCYhPe",
  "key13": "2YxMZmLpG2iwedruSMmd3Y8sY1hKV8nKnjNe5DxVsPiYytEssjghKSoa9cBafdKyZjEm9iAepetbqzj2KtRuVrEd",
  "key14": "q4yJWcnp95dvgc8EihrU7mHpn5xWynBqu6xr8HhEj59sVXZoQxK7qPi17MNz9XRHtCMANz9VJyGX1qpUkvLf9UL",
  "key15": "5c7dtf2oRqdKGaVhfaQmA6aCVwAq7DZwvRz1YrNxNsT3tyeqNn7QKzi6QiYbJYYVRKZah1riHyBy79FQbZj7Xmus",
  "key16": "47KqGFM68qjFtuCfMyXczYfdPFvjAJ6kZLxRSTH1WNXTpd4kmUgsPwQzMu9qGHNAwSr81qMbfXsYpKBC9YKhoBtt",
  "key17": "Jx9yAmxFpWSoG7aA3b8mfvG2KtfJvfSrCcFW1KcN47ZJwiQovGq5UsUfVhTmeuungG29p2sDR4HTzcdkm9w3nMn",
  "key18": "3cp8E5WubSREt1bTVAvnMEKDC9vdAXgacw4n4jYYzAVMpm7Msu8ofXcR9xT4udDug3vffntAAKrbtgcDpR8Qfm9x",
  "key19": "2MsQWjzpsqJWXSAjgde5kT6fK6zm8U5UX3HhrPJcyrPh7bADJ9sE3ajuheQmDUmvoEMkDLvfxBk11RPWYhQwstk6",
  "key20": "3AxU63i1sC54WKisDi58ZMvvoQfeD7gC23X3F1jad9QAA61qqykxxSibpsBHPwcwxpmfiY1oWo23UjxxA6BAYmEX",
  "key21": "3PRVpo2TzpjTZAojjg4UzT2PhNpWPc5KCbht7f1Y98ZoNvGcAXHiYnCZK35vEdrCH4WVG4mk4KStZsz29gJdkkuk",
  "key22": "5b1h1YJS8kz6LHyqSZgtRa8oBwZamrCBvNEADyTtmts3URZhxtiB6hNLWRMfSwbkHS25fTiaS68XX6Fy3kCaq79Y",
  "key23": "oqejH1qt8JSHXpCxzCYPyoVZK5byXk3yPDd8qX7fFUDEtPnXVaXdZQdvBs1LFCWq7hZzDu9X4ioLXxDn3ovVhYA",
  "key24": "3EohPeSc7hY6XWmuQmMi8pXCAQQBgRQ5rgtX9j1XJntZNtTVD9e4mUzyXQxxVk2EUkV8MpLB77zGWpWHyaWeWBkf",
  "key25": "5kEgsvHwwMNztoMppAdVURWwP1cMxbyXXPLcBZwFw2SWeecArvVjUZPMbKrWzRzy8oaAw5feGRQ7QeijeN4TQviK",
  "key26": "2LvKV5GfK64BUHFu5C3N5rohEa4drZxLUmEPfZZuxJMxZUMcKjx4UcjSYTyRAF3etTjXSVecm1ULoJfE8NrEbezN",
  "key27": "4afBu3DgRrpyfH7PjzYvaQhqjJB2J7c72t5UxW3zAcST84h6rxkc7vQtajYhA4f8YYqzNooQHzTWo2CS9irjHXkz",
  "key28": "t7HNSKEDDRcposv3E2bJ8ePW19FM7fEyFsk1V8MFmmb383RgGTYD9QffRGG7tvkCY9tN2UEozeLbqFnLzR2H7C1",
  "key29": "gEYpCJFUNW75c7sGSJWNL9zQCoo9rkhJdkDNGtVqGRsgRfySWuf4sXX1TTKKV6SF3oE44qVud6uHqvpak15oBim",
  "key30": "2L7ww1Czke1riUjaxA1vq7BWXFNaepY5UnQZbmTxmHB9LpqKEKHiJALryjQtMhzbksCBwsSNp2KczPF6GGTkYmF3",
  "key31": "5iHqJA3moyFv1gwrE7iN9TFU45bkyBk4KG9HvDuCRWtFCgZWKLJTBRGrQkinGgaE61wgZyZPgpcNHWKXqfgfV9UV",
  "key32": "4bBh8eETRpfTPewvSgLhoE6bUxmwKNRx6t99nHfHRM5g2rUbtfN46PBqMSU3J3NNUWEWi3y5CbVvqcUUe4tCBqtG",
  "key33": "514tntjFjs2SpNWbaTPuqKSoJZnPXkjK74EW52wN1XLjdzfnSNNtLy4FJGLhJWusQoXjoAkDbxoPaSWkf97b4hch",
  "key34": "27XA73UqhGKthdVCMdixV6kATjZo8f7PwkWfpZrarZnmVjPQaNCuVxUTifXp1oYnQF76fboNB3DCNLRb9iXWCaib",
  "key35": "3P4L475N7odnJzmSHthd3VsEt69wSYLxn3qdCAPaR7Bki9N5XXUBMQ7tfvLaJxyfzEGqkX7QtRhtW6UdFQeTNihr",
  "key36": "4qBXTFvY44ujbN45kcNALqaG2fzRDv5YZs2qARwLrpjWFYKk8W37vnNBdWmQEPWHGRsMs97aqdkYXKfXkZKgSkZ7",
  "key37": "5hY5xuZKNihd34E8GZUFmeRTp6Pc1h16dd7o193Xq7R2zi1nb1DeeFP8HzUefyhfof5V9NreYjgo3Thy9LV3j375",
  "key38": "3Zoj7AXwURKbSgTTBwFpghbwUmdwE1dfMVHLuPWsWCbaw59UrwdW23GB1KwVPNeQcM1sGHzPNbztRu9dY85EcqPg",
  "key39": "3SZ16cAD3cyA1SN6chQtKRzbVFih1rZheQJRSzvXPgdNSex6HxNiiuwPednBZcFbe7RKck3sCVfDtNpMeKfzVoDW",
  "key40": "59h6oxqMWxdFUikxzvmtp3ro8ncoBNgDNXRJbt6D1ux9kRrkXS3yPsAswtuLpSpCDnYSTntQcThFsjLnjPLZm6wt",
  "key41": "2H9bKJHwoFK8ckExx6QtsgkvMpYp4cM9nc1yfA1bfjGgDFUb2z9sb9asFnDqdBDVzqDzqxTCVXHASH4aCxSnuZdm",
  "key42": "FL7jv1o5TrWywj8D7Ua1x9Vyn77j3zZgZSmqK2BW3pHxujzPH51Xbwzq4NPWvr356YJe9q1o7JZHsS9EfNVtTJt",
  "key43": "2ojXt5gn2c2jzotSnux1pwbrstHzsKGaX2r3cqb3XnyvZ46zv2JbtLh7gGFKxSVgWmXu4xX8mua9NtiTnqTDPu1j"
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
