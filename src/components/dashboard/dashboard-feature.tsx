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
    "34JimcpJtnvu7koeMCtow95Xgw96T2XZPdhwqfQtk2Jj9ZyiZTVqb3VULfKqUj6vZwcPXcx1EwD3XzCWF6q9X8FJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58eXrqNqpCt6wZvpndDQKKsJXdXe31jmc8uXkUBQ8qNUUbvtybxutuKUw5SCvW2oUPqvrmb4fBvAaaH7dyuzL8C2",
  "key1": "5AGwyxrFvFZCzLKxzAx4MALykHuy9yNgQ3Pp3zJCsRGuTJqY2QXAi198mTYE6xtBbTDysR2FYwMAyQtqAj8BzGZf",
  "key2": "MzNhFeJwjTSBaUpvJz2H9P4ZM8enuc53NJcfiQ5YUWUwGRgHpBjEs2NHcR2bGsLToZZukpnrB5jho36efZzsgM6",
  "key3": "4TA6LPeN26dF57Ar5nXtVcpd5kNvZ19GPyUyTPmqtqBhqgzwtVCoMo173Vo4d2mbVfBw8eKmFGQJLiEPS5bxc2gE",
  "key4": "3SLyjad7w4SYgZEhVWuXUqW6RTB7PcgBHccvpEBGwXN7f8eXgQnQKCR6YQc3GAvzWMAwbEDQix79Khm4EEchbTAv",
  "key5": "2bioce58YnNLzPBcNRACFH8N8W1RehcizGhJCaMbfVyhEJaoRh34uTGNRQUeV6EUpXBsdLWux2SMN7pc8sdMKwDj",
  "key6": "4uGbfJCUsLGXUGDv66vJHzXDpvsPN9qgdbYfpuhtY562rGNTh31s8pBUiTFv2X55XoVu3jKJSXZrBGV5q8Jp4Z5q",
  "key7": "4bR2XaUEp2Hhq6zYq91S4cjWRwE7EjaeGT9NMdfVYBdzx3ZriGeuBgoUwxD33tW2BSw7iGYqexdacJJx34k98HHp",
  "key8": "BBefYTB5aujj55o8UkzmQqamH8UJdmjsJzdi6bDP1P9YDKoTHaPVGsVeXqAdnDLbY3U2rWCSqoHHiEHE8RSeo9q",
  "key9": "3HuvwH62zzuuZoXevezQeu5TTMNLqPfVkdDQkqQdGASikYbNBVvsL18vVhhZgjyKZwCeBPK16hkYwq5t3KDciTjM",
  "key10": "5HibZWT6ub1ghpqGdXHoMpgvN1ZvUyQA82P7UfiQY2R8aRgjHz8pNvGg13Cqq4odizMWGAALy4msfeGmHT76gV7A",
  "key11": "5hkgRrqPmSgW99LPEy9srmyDDU68am5vVinZodMzMg6wZr1eTFyj6M54DVRSSGUF1wKL4psqH7cgapiTogD7YWCc",
  "key12": "3KfFz9cp9nyp6bdDQ98hV7KQFWXa8vVAgm6GnFj5bSNbk5bpdF8D1mcPAJgmCQ5nF7RpUZRPSqTfY8uXmFpNjRuP",
  "key13": "4wmJSVgDfPR5AHL215aepj1DcQPgxSnjw53vXgruyi4vMXbggpgsk2gDK7bSi2KpVQakc7614dY4pPKddH7GgFjK",
  "key14": "5qkuvVCCqJhyEZM6gZTWEFAeWZeMEyxcybeyRXVf8A863BJjpuEJpkAJmdS9tsnXxM1Wx5QCQ13hCD1i6581hYws",
  "key15": "4h1KDuj8jeZ4L5vKLtArZ3rRcDqW3sFu4P9vVVQTEM57yaWGvf5tqaXsZyn6uAAZFWJ1DdYYoCctCChYKe7RVVqz",
  "key16": "4xptxQC6DbFHWydhVpnHFaYRNLoD2pZp7EG3W7F2FowgD3gS3ZFPxVZikSGmdgnvKf6eHW1ctMAyBosgiArHg6L1",
  "key17": "5j9w3ZxT79t253z26TuKR5PHbKpwrLq45SkxxTnE3BMzRY4tSFD3b1fbRv53JTr9fHSXVn8mgnnHNYEqXVLQDaNi",
  "key18": "5YEiozE3gyyTWD4se1aWZ5oKmK8v8GufHtBmik3rZBGnfxxRSgKmZ1FUDmP868Sww7iRkVRtWcm9yVTfURAMDs7P",
  "key19": "21vxmATDajz9dNHM2c91VZXxPrwP2oMBgvfY8CwQ3RrKXpCNHhsuxgX37fUgzmWR22gJW6aiQGydD34oiN2Ubrym",
  "key20": "u5FHqiCLANNy57mDydfWepHEpERwRh3FBb6pz7n86k4Xc4A69sZjcTSkjRnUVxkLofv8vYNsePwYSiWePn7XqX4",
  "key21": "3HqTp4h9XAUY7FVDv4DoJyc7gdhq4Hhj7byQgdsQ8UT2oDWojqNMFXdkhGhmBw9inT1UEFpYchSPMkHcowXMY2f2",
  "key22": "3BcP5gCkJFKNM5qX9bkwtRwW51GZqWxZz5bp5AHCQh5auzcRtrFPJ2EYnDrBRA4V77FyxL253pFSVYfW1VnD74GK",
  "key23": "4bnRfveT2VwqGewiHnrzTuNHUtEfzpsDeKeowWxPuiNgNuHM978PqKTuvugE4xdyRzm4tSF35BjygMaDgJ5TxDkR",
  "key24": "5x8LavdfKLEA3bKfk1tgSHVm3j4CV188g5JGARd4EiPPXNt6chJBuv4PifnUTy7ZeJT9CxnF6ZatmaXvudCmYqC5",
  "key25": "2cNnBn8aYJyNBxzFRyCYFobQUeJu7f4UBEwY9voS9sqAebZkTtpazUewnKEviFUZRbJPcLBBRP1C9wZPJtsxACco",
  "key26": "2x6baCreHPndiCzpyPPtGdA7rHWJjQzRUBEYVsgX6rjHGxheGmAJVvaqE95sGzcQQoUGCZGcfag1HqbSz5NoLUFY",
  "key27": "4kEztud2bwH8GqY8ZAQ3mLhyfgEZeZrf8egieJDyBn7VCYxe56F7ZMMtXJoaHLcERU2nYtfBQ6rQvf6qAMAhyS8o",
  "key28": "2MA4q7EhkJmrAgZWVGz6bVnhT8xXiM9P1r384TtVzcZQ4Df2rAYpA6fQVNx8XcK3GhYcHcPvboNyu7KLxBg8CrS2",
  "key29": "4X5h4uDBNyrwpQ4TiqxLb3ZvsnTU8P5LkcapyQ7MoMgFSgyKeELyDNfRUsPUCUajPZ1Asyn9MWtjHSGtWRdDAzvB",
  "key30": "ZBmd2qUfbVeKDnhEBGVfiAQDCaZ18nHd4fFsTbi754Wxitq3d2wzXxdAjUfKMb61RoW6vK6oQPboyRXj4vWQe8w",
  "key31": "5u4ruQRjK98iYv61eLFEutgxwGSjwmPKXvEAxQ1mRnMxN18eJiX9iLTEivqgfWdqJuEyrqVpoaUQJrzTv94ndgpQ",
  "key32": "3uFwtMX5gVBTETUvKoq1xxmDxQd6hfrD9BE5UF2FDWPMbZX3Pnrw8EsZKiuQTEgbGabAkd4bNjeapkHTp8oosbgp",
  "key33": "4E2iDCPLwfsbbu9CRpByCqYieVfgY4NiSTNpcREtzqNjbTs9xC6uMYnY2p3z7iGbnz3ZpFfcFdYTEuQmPATu5CS2"
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
