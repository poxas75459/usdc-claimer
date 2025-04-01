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
    "35Qr6dseLjNy6a5QLnXHym9zKJ7RAm7jiMC2PQav2AgjGicpnQw6y3LsXrd1gacEs4kAwyququqicYY3pdawU1ps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vtEzj1tkmXKoWzUvoqXfoW27pvgHwKa5rfmjBHETwxQ8eW7RaKDsvAtYUrKeAcjWJAzyW2969EWqAsNqqwzVKC1",
  "key1": "3TC4uwcqiAZHjK28xpZ1PkhacYnQkySYfWjmKc5DcbPYa6tsRak8GLpkAxPmGoAQ7ky4UYGKv5YK5BVJJvrhwCyS",
  "key2": "5SvUpWAH2ZRq2rd45xppprj8V74xgZXCEpGapqtzw5ACs7M9wzevory8uacCJsayDdvZERCe8rMGQwmjaRuzsxDC",
  "key3": "4KcJ8rKRXW98ZJMheHXwbiqBdje5DfyqXFyDe8hxvecoMCs8CkE4NCJbvD4sBBJ5JfkpkXdShEkSDft8oZohSZA2",
  "key4": "3h3J9cDMzKSVJL5JXUnrj3XKuseTh8X3wTHEuVmH8YdGuWKno52sGkFgkKsYqy4QiEdLSdkL3mXS57bk7Yyu6425",
  "key5": "9A2cyzVZ5iRVvji1eVigQVKvtmwamwqFcj1cXisYBKvefU6HiTM7D8dxkbnenawm2LP3czZQ7LKDo6bMMkKMsA7",
  "key6": "5u15PZ52bs38ZcmT4YhCKKLPkFiCwEB49steTjh85iaSPEKgM1Zqw3hCpHBgv2SY347Kz9b1JfeD3E946jRjrZsL",
  "key7": "3u4xVocRdxL9BNWGpyDsst48GpNc5V1pWBaarZtqChCqinyJ7uZhWpGAmBqs4WJxqKt7JNmxxGg6mdqpjsTqi7fR",
  "key8": "3WPiRr6k8s6cKrHZjNwR57JnMw9sNPEbbsYcik4eEoP5v3QjckMToUh6wYv649zJHL6fcLAvzTnFhkv2YemeP6V9",
  "key9": "5QLZpcYDfGEwFDqcHFtK1a1XEdgiowrBM7RYhT7pz5dZ8Vt1FG4QGeVVQnFgRYNCQ9PVLdpHS5UV8Tsv1i4oKr5H",
  "key10": "4NfkGaDwzh1zonNzy5nasw5G5C9YJiuNBYHAwvHcr5UAjLYSnncCfjMPLYGgHZPHjL1fiUWQCKNyXArVvA3wYTXW",
  "key11": "2FEqUQxBtm5Mg89qnpsvgEkjcWZWKxNPAoeyLYEkpJNHeU6jxTQeVAhnHMUQwiVBYYMcjgasVX4WRpwbF5vizzUD",
  "key12": "3h8GhMKHH7tAkpuhvMK5MTBXkwYTYKphMiNR7FGtEAZKMG19JoQ4YZ8bK9WRGMEwBPDndtQc5KZBZB1Hrdotm4XQ",
  "key13": "jTP1co66WCC7EdeFngy8s36mQbi5M6v9kGA2cMWqjUX5xVJAqbtA7BT686HbqkqHvpPsVDhTGNMnZXvEgZz7sge",
  "key14": "ESZGv91kj9zvCpWzDzvcjMMcdhUPQ49vDi4ayWfb6S13mDkQcW1zRWnDMR6BifTLYWsaHxwfUjC8vHZyXnLJh3K",
  "key15": "kZBtAmcgFuQVgpA2a4sEFxaKgvcV2typETg3owRiDSGZTbK4WHWdmRgbtVzTVNri6LC8Jy82rn4MpcFJknNqaiX",
  "key16": "4Zk4eo6dJGmQ1p6wCRCaYKKxsP2gn42bfVS3HXqP3iyekniAo1KLuqnPREBBr8JRYV94NQByavoyYUP4MpG7NQa6",
  "key17": "2YPTkXGRNbTWqjQ94n2P5RqxVQSVrDfKAApK2J6fCywvpyu9qN5ssjnJHq7AiqhWHzq46ZwfAybKoSKaK71XwDKa",
  "key18": "27cX43NmGj5RheUhPbkaUU25AZ4bNYKzwzrn8SroxXpeKt5XvQqsA8quM5Ct1oVJkNN2uSBjkAfr7GBZn3Ws43RZ",
  "key19": "2ghzTet5WP4FDumyhNsrymnQBQ3QPeR4JjW8pVtDuAt8TPdpFd1ecDMkqbFEDJKz7grcvSfSRrzW8aF6NEK6arpY",
  "key20": "51HaKyaCYJzgqccUroe2WXccjtaNbgPXv1mkLRZLwKzhBQMtuubZd1pqqFBzyLJ9KWinbdRqdra5TGgGSiSfcR15",
  "key21": "5V7zUX97sA8BEYTSUANFsaYqAZnFQjb2tueemzESuVLBvzDPCfRArhTDmZP1hKPaYf6wr1ADtqChhJWhB2FLariu",
  "key22": "4zHKUTvC9AbwVcWFQ4sENpZzpGjYgTEQNUS6FVrSNYMt12odizTquSkLtHAMErBE5KunVRvZjX59khztRVUHsN7b",
  "key23": "e876v9MEAvuc9yDiGR86TW9rqb3yHLfkd8CTYCt1gira2K2PAF8sJ5gj6LCU7TE4DHkBkxfm48SbSxaiyBfrQq3",
  "key24": "4J32J7CvVevt6BEyQTUuZSnJoxAFBnKFxvjTPkaZhZQjwvBLPRXPGzbTFmYt581Pocrs7G9TJQWtXZo9poQas6oz",
  "key25": "4r485DGmt3CQyp4Tg3WuTazyYmvUZmdwpaVDzKo7JGX3pfB3AX32RjCXsoQrqyqKZ1PsxSxnHYSzTvSXJM9K241e",
  "key26": "Lro4hKPN2K3d1cxoUeqswFCG9KpMyzwyZhuuVe6kcGRmE4CHzJm1VPaGaviaBF9VKUFMybwyVfK9SdXik9bYf2K",
  "key27": "9kwEmdKCxjvqASBxXieBq53EbntVvhrxZnkbZNmM8uS1MDbLP2L1tfAKstJMWrWC5HzzjzpyzviBsdVeNYhBqJP",
  "key28": "sFPBEi83AsGdiFRYgXUdXj5LoBPwXMg45Jqxwe9wPVZnJEYsaauhX2z28NgjDoUCqYvSqQEgeBWVgjQKDmNc1gj",
  "key29": "48qDwpzVcoBQAEJiRHJjoRUEeveQRkKvrYvpwWRX5Guh4k8vawRLyRWiTmNCEqCqKQnJ1yMQfq8qsR1zd6zwzf5X",
  "key30": "5tfUph5GcNceSDCLmozzXK46eMNsbg4MsW1B3ZdHLuvqNdm778bA3XhchdtzPzYQpN2EHw5DcnXa2VGUfjTrUMv"
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
