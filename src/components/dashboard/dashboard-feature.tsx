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
    "2Y6D5qgciXtAANCRUCws9sjg82Y86mKeTdSwtHJYdmTGZ4U4X85U77d3aLy2snSYh3uwX1CsvsiZK5hJb2w1X2PK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nbrEWSr8ruvVe3isZe4p4o1vrJ4hz9KwKPUNDcmZSNhutrAxMFZpu75pn5APWDWC95bjU2dqVS6cNRKGRqB76zm",
  "key1": "44DsybepP3HHzWviDrhexibNBrs6UYUL6VvyeTKGEbTbDkgMcWzS64PJvWZEayrGNG5icivcBJcaLPhBVS34bRS3",
  "key2": "4asTeBCnjJatDwUo14LDduixRfE3ab4tzn6JG6XfpcCVJiZFrtnscD94JneKTtJqGn3NKjimEGBUNtGnmN7MTjGm",
  "key3": "gkHJiMq4VDLfXAE58kmAFaoogFGEC18YgTHNGBsFqN67NkyZW59w2fqnEFM6j5mpdRrERFcqCV3tZ3tQhYumgH1",
  "key4": "4Z72GSxdPvxSxhLqrz7sx4f7zrJf5JiYYpenbbQ6UajaAeLjQK1fvr3f6qMLw8FaPZ6pyQqJj3TC5bTJGSsPrQPK",
  "key5": "3V7SMu1q858Dq3ad6Xwzbru8QPWi2XdaVq9HHBEDugpRC2FAQ3ZDtT7ddGs3jVtKhcxWEWwcPAdZc2PW9uDxkaYs",
  "key6": "3MXrpyhDMNzXDudamttG7xWiDUDYgTS6HHbBUAZTkSHqeLzBMPADtGhmAXytqaKMaeWmxMFvw5Ff5NvAXkoG8HEz",
  "key7": "3Xz54q46d5BQDdPxMf8rfh1KUShsYiNCXEAaLayNufoadsJ6r2YrqA7J5q8ogbixFJSG6Qw5qDNwJ964kdpr178y",
  "key8": "4rTCzKHbfYeMwbSRmDrjLBDtop6ehtxmc7N6sV3Ph9bnSV1YW8TLk3PrqhSmNAsnJbvCQYugP5FmWhei42Pb6dqy",
  "key9": "5HDHogijNMHdw7rxogrQEGNw9fX19YFuhydJM5NbZdAkzVXM51PnFTtfZeXCyfZ9rzV5YGHY82CmLsY29zMV3CmP",
  "key10": "2TVoCsAyXb9NPokPnhJtd4xBFGJrDRNV3KnZevxw4fM3r8P1h4RDwvxzEHFXg5qKbT3eiUSVzcRiGVkfHoQ8Xj3b",
  "key11": "5vKUq5S2KNqrXv1ypGiM9KRKDaQK6u39ahLV1aieug8otkMHGU8kBa2ebzFDGxcEXcfr6pjCymDNC4jjyt2s9wKW",
  "key12": "2kRS9Zu4pBGcZJ325KQ8RERt75nG7Jem8dL4qADNn8329W3JdjMb4qVEpRvrSQFPybcPVeQtznNTCDivBUREU9t4",
  "key13": "5oQqtsNFri7x9sbSq2sByKnSYZKQsA44C9ggfiCheSudAi113BnFQRprLvHkDEYdv31qco8UpaftwDwcmJ1qmAxt",
  "key14": "5tc3gfcBjcR6wH7RjwmvUE1QDk6Nx8ygRQvJuLigreXrY4fhP5uuSxM5y7Vx7sracwzyZYAtcaZo7XhCdzZPJoaB",
  "key15": "66x8mQ3WxcZWq8vSFvGMSVjdGB3dgKEdkE2DhRxgV5dCP6RRJi2KcootuBAg5nQso8U43KSFCqRT8KnRR5s8E7Z8",
  "key16": "5NEJue1UE1n1aezkvMMJMYeStdyhM41VKQuuYzdhyrLULb7C8CnmbhWP7foSE5MmQEj6cbdhNhbMbdaPDcE7i195",
  "key17": "2LcBuXGbom7VbtAv7Qhqi1KBApG2k6VCpB5z5J4QUwqwUxJ3Rga5tzjBJnzeRLbnGYNgwzSVPqPr3iiby7Mbj12w",
  "key18": "2btyBUBzHCBonhLrfeAvwFCckMHCzKhmNUAnXeFkwKRFHee1YnjniWWi2BHEw1BhVDo3Uvdq4mDV18pCPVQvvZeR",
  "key19": "nrFe85qFNU65yLf6gRfq9W4Vnr8K7funVBsPQDRyxY6xHmfRgfV3DCgruxvCneYjzZtxKnnTjDUsd8Q4gW5e7Po",
  "key20": "2fo2G8NXz8MhyRwgeXLDzRpEz1zSrLkdbFXVX3HccLmKKhqKtKDtAHN9LUaEU8ZSVG14acaq6C9EMb9hNi1JSkhH",
  "key21": "54GuCxAbVbeumNYSTg3WwW6L1rcLYYrMfQutpnji3rgu8T9r2UAT1YkLntJaHyCPUPSpCaU8yNQiB9cu5o7whQDa",
  "key22": "4Gba8sTH8JXXGb1W3zdKTU2B1J3tqTrCPc3Gxgbqenpm1DmiNHxbArQ5uQuEfZQ6SLN7AUemMpKmQgYVVbPt5iiV",
  "key23": "2qmfmMpb7AnXCfCg5n4VnmJPjkMqDTPFBWLeypoLu4GmBCfRsfbdacRAuep5gvL5HVYG39TL7Q3Xg5rKWT3h5uYv",
  "key24": "5pv1TLgvdLGXdX2boXmkwdeYcuFQDwAc9DkCFMdkgdAPNiMvVLabvZ37RLRBkzHrgDwZ6qhe6c28b3ankWYGQAVj",
  "key25": "55hfAdEKAJGaPjsyP2Vti8nDFKYGALK4Gjj7U9wYYB4dXmHqKhjbP9V1c86uL9bdfFXJjh2MrAjyA4QndSdd83a",
  "key26": "2GKLXTu2Hv6DN3yAHaL8hP1po6kJPXCUXtFGrxm7wngPbX7T5xUmte1LDGnD7uBE8SSRmgEt9tDk44AEsCKU2PCo",
  "key27": "22SuuwAQsFoDoPNnPPHdsgN6iX3CpUbAx7cL2AC35b7h8NQTpS7ZswA5TBkWV99MaAX8mCfPVr2hk9Zo99Uy3eTM"
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
