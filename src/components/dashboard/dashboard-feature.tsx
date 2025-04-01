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
    "32hNGH26wRmx8DuQe8oXBghgMjPLduHa8HzzrkaTqtpNUXP8hoJxrk1y6RdV6BEMakU4Lzi5VNNMcWpHvasikh7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xPdZXnnsiYcGJ5VhM6NWgFFmTGsogZz1XinLiRr3umkLHUdQ1eEfFH9GiVGRhxJXe4YS5CCYUWixqr1v9353oQY",
  "key1": "Y1Fx4gg69ojwRhttEXhY4DvmkCrFDJf4fLi5cci4F5y94Kn2vDVdG6oCMveZHyJNuGF9TySfSbn9kyNVjWA5zP8",
  "key2": "3ZdJLTE7PZQrw4GXNvHf7JZmVQunqpToDwUUDCz4e5FME7xniTCqQiFZCsgdVPjXAaiLmC2Da6oqm84ZGJdxdtd5",
  "key3": "4NvxzrMpqXM3b4nKGFfWtqVaT3kLt6HRaEUZkwswHJgBK9bsENLahKCCtmYuK7XQgcZujgQvttYkNdks7HtXumrW",
  "key4": "5H8iub2oX7TEV7qEfJG36u3vFxDVb155dyXXMSGsgTwHiAvyRUoAmsbVxeq5YzkYdJwb54xqTXNnunDB6meCKzG1",
  "key5": "YoB5rxx1otzg59TaaijKTvThUrMpjvRxToMCJkZajuSHYWuxqcDZ55G4yHmBEVYGdx2pT8N33CmxxtLPWSCUkyB",
  "key6": "3KHPYQytkvLCELVeawdC71U8adyoggqz719YFf1L6cHeyD9wmN1rsrM5GQ8mw9DLdxXnzXmayFUt8xqzovX9cYAW",
  "key7": "44W2YtUSrKyUBysCRXjoVCy7pxQXagmRwgUQ3sgs258gE47koTt7MBv4sgtHSVApcUuyeV57wKmacyS9FurQ2JPw",
  "key8": "5qJeVpMmBVAAQu2sRrVjP5faJte55rswYKPw3zX6uAdiHTX4mHatXgoDmq5SwQhL4R3PXSZY35WoQRoE7EGe3Nn",
  "key9": "4ecEJusPAyndUbZyBz9QdYNseE6jQiwsMLHdNBcfCAzykTy824Ls8jE4on58jgMEBCwfjy8LMScBQtupJCynoF4B",
  "key10": "29CBS4uu6Sw5AZMfpRxfHR2azy5PNTjqibvFLJ4mRvXdSYTZqTH8Lj63UKMiGoyKUi5FSdEzPmnZuRkt14wcNQp7",
  "key11": "5aHKKmFW5E9zk6op78qeh9hw3Bfrg12SSQH91jZ4t4APxcCbJPSHo9XTEeaXPN3j639sPkS8Jz2Din6KcSajUSFY",
  "key12": "3mahW1SFTGHmXi4QBLdms7phKaeTH2PjT3NtLjdzQcM8xJAxFvYSon5eZSWvbGo82xpUs3p8ADoTQHFko2n8giGa",
  "key13": "2n1PXxvUH52VJxCYN3j5kbTQZVVXtdAHTgU7Mh5baqhQxChfMZxW2JmpSarWTnbJSLns5rjmCh3n8eMhVtrSajMa",
  "key14": "3AfL1bkRojcS8aaEdQvWYqLsyiNrEDvF7oZMgDe33NF8FcQt8PraMt47nA6DZPtirBSEEYQsEG5dqvK1eBqwjiiE",
  "key15": "2qVj2yTBbdqguwrkHQWpttJWoyr8JpaqqabQCpAMXp2K7jqwcXzPJW3XEbDuqC3YMYTnhXg3P25j3obnURZmXCC8",
  "key16": "deVHw8W22uPPTgbbYmWa1Ckt6yHNdYHSZ8h4e15y1jcx7qturg8xyUktxei1yHM9ScoPoeR4Tdnr3iXgPk7yyYC",
  "key17": "2gMAymad9Cz8CGSoZnKMBxuCR9uDo44NMeXmuy1UjRRWgWF9sUnjATCMRV7R8qvt7LJq6aRDhyKo1T6PEN9PZYNA",
  "key18": "SzUoNX7S9kr1hyrqusMWmACVowZzEuF7URqPDtxz5UCqaJVGmg9wvNQTTFTRR1Hinw5xdtryZ4bSHgYvWwi1d9W",
  "key19": "3vME6vYXB5kTegAX5h7LLdfyrU3cz8pbBjs5Lt5BfBeGEe9pxx8CJxfkirtNNAmS4Mqx4bdSEdj1zdgz3ocee9Li",
  "key20": "5i31xsnLc6NrCSAKtixYvMtKmVQuBN3ABT3rmuEGgVGZ23ZLX4BsbfvDDCafLFYsZexnUTY7LfM9rESPAEPghxP3",
  "key21": "2rhCvUSqsuuafvHKosLnoAZLgtjwTbGLAnSEaagW1jXJiApFYDwU5hhmNWBYGRgWSBTuC5v8eMcFdwvxDD3WwoBr",
  "key22": "5zmjG2aHfXvnf1sA38Do4dZG77Dxr8YfzUsXFtTbsVzboo9L18qrJKfVHbKWcA2EaT7hv1JLLRZYisWYQCdy1z8M",
  "key23": "2Uu9h9yVmjxmS231ARYWrWJM6ntYUh2UHhoXLuAW5DwfmvRNA9HxyN3YVPFxCQhApVg1xzgRn2bhS5qXKFp7YbXr",
  "key24": "3ddbyPtZgYM9WcvdHVh7H8UMBuPQWw1x5PUeuibCn9CgzfNwyVarWhWsxseoqJyRrtbx3aeyeVfAxXhPdzn72aTj",
  "key25": "2PTMpNj5ZeYe3L68i6PjdQyNtcfLHhqPpDk8Rq6awL6b5M1pMcAWpv7qeSLovgx87Fi3snPBPfsyJrNYjMxqKvoX",
  "key26": "48wxXT8SEHjexnFjhpoiihVPAmNtVMTr5N2DNi38QMc4cPFSSXsxGQ56jeSZP4TKEuFyTF8mXdeo2Gk398DwzYMe",
  "key27": "4Q3fw2Ug1AQfYAsmjV8GBccu5LTMntARxNWqXpFUGHykDiCCHvTH1FktGaB5UuWwg8TQVCb7ARwYnQhyT49eh1G1",
  "key28": "3eJhhAs4QaKGcEjxxdyN3u1XMtaJW6AjqajJLxksmYSzE1nTwFXqYvG86rN1Aui3Jea4xr3kx1xds8ebXQLEfi2R",
  "key29": "5UVyTZHR5Ct49LQZp24S9QR2dBBvznCvbMaJXrmBHoaect5636ocnQRhp3xDSjEva12sJPuaxEALQGmYeBKMgn7E",
  "key30": "36mHbTxY3KJ34PN1EaG7ii8bzCu38H1zDbpWdFGyQywU6zaVLtMXACNgesVSSCNq4Bo3PD7zrrCGogc3qqJzeuRp",
  "key31": "2STib9kKKFdDUWWZ3bkFCHvuuL6QV86ofF85tFP5EBCjB3T4W3Uxtf9wvjXh7tTwM8Tdrj5KdhoLVaechcJj51pz",
  "key32": "5EEWWw65LK9jYMfSsHgUu9Fpv5t7Xfo8GHh9PjNTDkXKhYrYH87sh4Z3ywFw8CqPApRw2uDEQ9SSrDqtCSiajVdJ",
  "key33": "2VUziBqpEwkbEXJvZLWqdKq7SUVs9o3nfFEH6pjEH3VDKtQAW5XebfH1LsPNbiswSkWBt54JSS5XcaymmnCFn1BZ",
  "key34": "5m5N2x5MpwpZE29V46Pqd9aV5CSJ3eEoKaRg49mAzXuo61Yf6cNE3fjoxcjw9VpYyPyreDDyNTe2Tyfv8i5q21uw",
  "key35": "5WR1r4Lx7csQLKKM9LHpww2sYBRooBoFR5ZL1ovd164Q9Pjp6gCcdvL7TGucGPU39jvr7u8FKbRJMMr6GQGvs95f",
  "key36": "5RMzojj1kamyUTUjyLPEG8DzKpYHKv2Ksh9pNh1UhRKyyrp9ud8aSW1WimzdK7hLApzuCzC8NKszZVdzPXjgwLnt"
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
