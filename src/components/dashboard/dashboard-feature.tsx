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
    "4AaeLzvv9sAbR7Z8BLCFRteiPFqTMT1oKzxzjej61gqWTzRjpqKhmVX67nQkyWBRY8EihgoA7eWX9h3wTw1GdSZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cUKrfEzAZcPHZywJT6ZwjogYfk1eLqKPoYZomDQMv1f4HeNidbhnJ1JxGHExuxMDqxJyhi21wNznWTbYRxen6w8",
  "key1": "FbaP648ezzeVBHJ8ayhGSb4yzzajrkbmi1ekXGQ4mPpZ4NNXuyhwfzsGt5PwL4XtizxGx9GqKcxV4n2Sye6AyYm",
  "key2": "57iviVDBp9wdEbaUsnmTcJpNS1ERLPdKuzFnSkKTdPpkaHjkhQBjSgC7JvsouwXn6kbZ12amjHp1dmyNRQgx4Ny4",
  "key3": "5Y5pi5eqr86jaPWRHstVcukotomW1C3Aj8xTGF8YeMN4VTSPqsGo4Zn6RdcRdMWWCTMRrczoiQN4MbP8oitpmceh",
  "key4": "5atoJp7NsmS9uSiRE28G1Ji482UD9APXLMY64nyicuZQ39L8joqsJ8tJRSsopfbtFk8aGrq6VekZNnTdywMNFB4S",
  "key5": "3QCoDjmfStYD59MhBdEqLprzJLzbHcKyuCJdcDubVKft7ujw3YaSSmRcSs4DYdbPsAfZhm4tNLYZ3qsSo4Ha6XE3",
  "key6": "3x26XJfL9evcFhRc26HRVyqdPhjCa8UQzjkZD72p9LLWx87P3PiLGiHBZDjP5wMqdbu3gUBYTJYzDZzivZQomZra",
  "key7": "3g3J1g8bVNET3hDyZm2CSXn9xQsuRVVmbnAjCGX5PkVeodUBWGum7kCwJsu2sq3jzQzdwbxTbPpoMrPcdeszLVY1",
  "key8": "2qLDiAixftHLt3j88sunuyd9QT8iVzeE5wzEipcPJPeqgbFL9SH7J5ftpwcnJ2FNaZFSZpv5PtrmVKcprqfFu38G",
  "key9": "3LWZxbTvVY52Y66J6ZnDRCX42qnNJwBus9S6GY6VRxmfHoUtuZFyvaZ1eDghdQzqQAsn9Mkp4CQrjjmL7EdXZKWq",
  "key10": "5GA2FT2YgQsNsmmh6hRHPdU7E4b8a6uV4mZhootY3tZmmSEZjwn55JcbypjLe46caXGJ4RZrbF3xczTZFik5qcHK",
  "key11": "3vE6z723NALBr5PSvBrbTf8bsAtSg6pr2yVkfyJYyZQtk992fDqf1emS7SuCTBkBXEwz2XjsMbzAfWtAGkrsYKMU",
  "key12": "n332vjHz5QNLm73qMhNKzowRp3kVNGadyqZVTnWBufzAdBr4Rv3WmkQ7bDZRm9TpGqHgurMFxDkfnGvzGe4rGoF",
  "key13": "5T53FL6m4DDhEjYsEaxFB1YU6URfxBzEdrw7tDzWW2hutooqchgpZCLGmDrwpKrHy76E2BUaW3qEFMskoSwjfV9X",
  "key14": "pftDowqYsfq2HHT24s1VjCx6ZGJgJjCsEowQBJkUKvtG9kzDeArFky7WfhfbjCPEkW8kBac5m1idEcPHyggA2mT",
  "key15": "66hh4ecJnxwCLe4JGSjcGGxqGHJXBoHCWEg2ptwi5bEJYd7uA2WfwQYZWJazg8eje7uDkuYXiCSVZauzuRKnDBJ9",
  "key16": "64CWyESrW1wW5hsGtsfLGECFbmLNNV5wkacge1b5PvLJe91yiY4CS8bg8EgpogfrEpB7vRmmPXq5W8cidoXKfEe6",
  "key17": "VVfJjwQZZoyz7ySuwNbYoSeoLtPmeu1je71DT9XxQULRm8UcXnLdvv7drjKpZo29soznY8gcmC7gZq6vGvnqZ59",
  "key18": "4ZAp9koxe9RTMCsJFgvJHjHQCx7zSC7tXADJWU2jAv8kaEHRA3rbo2pu96BKRcVhwDFEmTZuwmRbs23nWkJywJt4",
  "key19": "37VNRgHLLQJrtitXDrhdVHJCtPbA95tPNbVQtztXAvMhoMn2zvb7n5uNa4YrpGZ3R29hJik8jtLbLp6XyqRMy9JD",
  "key20": "45LhPG8a97FHPEkmRWs6bWrxK4En6e7UCoxuQsn5QtCZBRnf2ebjJCp5Mj99gKNLiWqudqpubjMD9K85fdX89ggp",
  "key21": "4QTnowpdhFVgRbNB4yCgbDGyWXPEoFSpA4ybXdpZovpYLjcprTk9DwNd5MDsZxfpLLkdDMrJaU846YZuQett1sGq",
  "key22": "2vGZBESYkfNf2QsBKZ5EuD4aZb2rDRA4db8KXLdcL5dUgWbLt34M4L2MaE51CmZEDGD8wvr5d3nTpeBsYF7owbHu",
  "key23": "ngda5ATXUuWoxZEB6awyWdhbcCDKjjZKsoo8XvxjzKPkEqi5eVUm98cisKtx3rarbCmFHTjsW1LedmLdU1JN3Wh",
  "key24": "3h4zE5kd4SatCCtzDDnL6qBP8XtvM4FsrpQEMktet88NoskRJVRF6ncuo9cSXPL6Nz7bSfLaAzuas4KHhFqycKuv",
  "key25": "3tWf6FL6p8wbK652htv3dfWuLRYdi2646YvXw2CdzHrpK8jKLixQfnVXvRU4mu5EWNYQyxoBevDZuG5Qj6DKxaJG",
  "key26": "2oQZGwNFqM7hDi6qjj6GTGfnK9NQese5BKNwqmvnurSYGddN9a2pi9aty9Z4bT7FsAmPqfYL772FvvqE2a9Pxd9X",
  "key27": "4fDtX9BSzx3vbWNM6xEo1rEvimGoaDw5xg1zdTR8DnMniEXbRzCweNsPgTqErdU4KSE6VjQryUsDrcg5Y2WBVnnr",
  "key28": "5fiYjaG3nYccoukm3KT39sKg8WJvxpx2ue6KkqkNTPnRcSyvRN1GUZ5Jb2a3GsVey5bQ1UmVExzhstBfnikBUfWJ",
  "key29": "663hxcbWZvoQv75xtToyLie3xjLCGTLUmoBNLtjgqgz5Nx9ATeoHeBiRaL7HbhuiA4yBkxYQFBK5YHBYdMZbZTim",
  "key30": "4nwzPuTL848FkkkuLwyVhKvCcJszBRsjV16J3sjY9VRYiXsGMA5M4MAYk5NjdqN6G1PLX6vYGBCLNBHs2qpKMMxq",
  "key31": "CqmyZEpzuDyfA9odzgeJiZC8yJaEmvYcTBmMYNxckWYvTFU2vmASQQAKCPwEYQHC74R4dHnqVsyngUWberAbVrR",
  "key32": "2VvBxogfDfnostDBwPDA9jqbfPWb1W3x1jQgZkZfvsk7YTEiTMPWHgBXZ5ZRnebww1SomgqK657d1L94c24XFrZS",
  "key33": "2RnDCnD2q4difZhacBuFfmjDLDoHcpByB5HK1W2Emu4jhE5d8jyihDCY2QNEDbzV5LFtFxP2EUr4Jm3GQ21jRXoK",
  "key34": "hr9hfDJhgHv5ieQ7t4psJ7HppNqQsXYVCymmoeRge4TWreEshoURVyYQJyHPWs5twzcAESZU12oazsH1BhvVy6V",
  "key35": "3qtf7oY253aTbHEjaaUjWg7YQbThrHkHLHe9H3JzSoAdHX9J1JVVg2NAVtDhJYwUUfXh5ExnKkT82phedp1peWSL",
  "key36": "rFQRBV8GoJQHt4wTnemhevdEEhfovtchG6CX8K9hhLpeUTi3t59sJYgR6bXrSjarmTbQPmP8euKTz1s7yVAJVr5",
  "key37": "2upuqBQoHHrx3Pa83xyonJwzDscoFRLjAUoPr55KfSHmHq6DCU2nFy5d7mvXS9KV3MtH3XZ69DRqBszX25LPcmms"
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
