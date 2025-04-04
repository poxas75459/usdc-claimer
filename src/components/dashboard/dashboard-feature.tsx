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
    "3ZfLMYdDMeLCq23Ns8uLT27v9RBNKmouz7pshE7WZy5FgZJFwgXJnGsg5jUqMC9NkG76dUBGijfhiLeRc5PVxDjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EZFMJySTEmQ5gr8LkS7DCs92eXCHUaCNsVzomtxdLir4oRNgFiS1PsMAV3BukmcetbN3Yo7QXzbxzSiWLCG6Rsm",
  "key1": "2rGzAGjDT5Dpb7a6pR7Evb5saBhWZV2Y48RYBvEmf9Dh6ChxswQeV9k1Ex4FbamaHQvaeMG82fMbDKGZZuz9RH5r",
  "key2": "22AzqsTFragvCLaEihaWSoj8HtYKQvwD7BcdGGRuREjEpfHFRT9V55uN4xzQ5Hz7gHdH6hcWoy4JfikdRa2NFTSa",
  "key3": "5QqHPrfmmFRnoVHvfPA6HiPcTQZ8weKwgVTN1cUmNdLTVA783HnL2zDcNou2NLdFqeEiQTdJa1t5e83BfPRpFjNE",
  "key4": "5KFGGNnY6mzJZEqn6pa51Bd7Vh5p1RJVhoMLGNxMQXbinFyHiGiVqMFJNw3sf2seLPRuGzni1NyRMMMTNKF3apUP",
  "key5": "u575FGjTAzPq9o9G63igxCjAC5bWd3LCHh8VKLkdt3nYC3JyscoqR5JrDb45VGtRPLdUziah64kFV85LazPXqbq",
  "key6": "sDrNJvT14VbbC8BXyfFa7dHENnP8jPXgXAEgR2y1tXLYfZb15wr1VEPFLcHpmMC2sRQBPPsAJ2ohFfCP58mg1cw",
  "key7": "5KFG9xGet9mfDesbQsceypehWHv2YL28N2L2s5WREdZwbB2DNEQE4YN9Eavfr3npn3p6dKi3XD8PrNBqjDnPnjQ4",
  "key8": "2zmJKppWdBkkfpFyqtEi7d3AAJg1vUcp4SozcNA9QW5nVAv2LScpXMNBKwF4Rq9LKFieRRzytfzcYF9Z8Fg74sha",
  "key9": "4DRZczfV6NLZj123AXBSyeocNeTwi4fxP5KZVTGCSyJcR9cFibGrMGvZMPKi2zctjangt55APyRrmAsdDJhM3qcA",
  "key10": "tfQ71FqXGgb38HoMozLriP2fSKEF6bVDxVk1qE6JMYnC3tch85ij5R6pdNnRajHivL8tQ2BnS9gHbXRVg8LhqNK",
  "key11": "Dqys4aGX8Ezr5jWVoUWp5J7WPpMTYsyf8jnajBTTTTJ3p4sKnEoMxaVioMZzo7uFALFhoKDQRkRVX8GVFw7uxyq",
  "key12": "5Px1YpgdeHpPkismb1fWRHLv94gbZD7yaQQG13mi1bUGHqYX8x2xQAyeRUaDiiSsRuJiWmuz1WTXHhZHw817pMtU",
  "key13": "5K4xksnLH3x4mtJ3asnzXjtbXimZ7VHQqHyFNf7an4KYfdqtEEsorFzBmpEhDCiQ2YDMTy2wMMXx3LkfHmyrgaKp",
  "key14": "3ecZh21NPxpq6y2YZnJ7cxvtrWdGHUyZzCkAgfZFf653MpibCDCqQhe7NLp7gerKxDexqamSg8raJFVfA8xnRioi",
  "key15": "4j7gbKZuaoD2Wqq7TFz6t2J9sxJgeMnEvyFAHqDXVuqd2C8hGuAAweKTXEoHmvQKE331dXzLSbrY6T2gShG6UAaV",
  "key16": "5QWTPD4zGJQEE5DLxZ4hmTMquTcor8HGCv6rJSnZ6jmosTQcDskNxgKRbddpUvhebb9H6CR2dmYxLCv5NVdpxm4g",
  "key17": "MMEW11qp1bEDeMQrr1US31dfjpVkjUpj19w9uutoEPgzFY1jbocG4qZ75acSZ4HT5Pktui6ibvtaDVyFty892sC",
  "key18": "2ZWs6FwKeJPrkCQqgWbqMwTcGBUeSpv3xtvRcYm2mum9M15CTt6GkvsvdZVPcozhcpphpUwZpNHSwBNvqJPtDab",
  "key19": "2xPZBXpuDTLr8MfaxELEGqTAvubY44RuaroN7QY1WHYxbj5LxgA2n7MKik2u8AJ9SVudzgk2se7EJW4nncLvSkRx",
  "key20": "x1j7pRnwuFTzzLgKzpHnuEK1Rp9EmCH8AbxB5tJxttwazy6Y9eH9j9gaLBwLEup4pKMSK1XmpPb8eUefte1xfrp",
  "key21": "ELtcEJ5o3PrRyrS7B8GVUBxoEDuE5CSVxWTF45UQ7nk8iSu6MxQfJvfQ2NNiTNk7aMGUaZCSx4YEPzE51v5WF8F",
  "key22": "4tkFRFSu1Ev6srbuatDM4B5kVZSEQTEh9STANiE9mZ1Hg1BVeMyfo5CWMkjbqZPJb6jbP1jSGT86HSDZNxscn3fG",
  "key23": "3hMKytb3qE27HHyTbQ2UuMuhXp5x5RkxeEMrqp7gXhqZeFB3E2Xu6n1CSJDpB9UoPuv6FH3nrcDvuCM9SrseS531",
  "key24": "5XF13YsEcKmciiLzA3zLTUtsaJn8bzajkdJx5nZs2cmQwkHvnfHNPG42rt7cxKVGz1S7i5m65GRSUSSN5vjdq8DY",
  "key25": "2s1KEovJZBp9MHcNhuKLTU6UQmLS7HPcZH1i6cS3AgEqiV4wd2UfyqVZ8puj6nLtbWphMUWkWa3SxSZFjB1QjAXM",
  "key26": "4VZ6G82ktEEzEP5AoA9dqJxci4XxBiUDGq6zWWkX54qGGZ23Yyv4CwLE8GMz2cNid7zHSFj4zW2nCjrsZs7DfSnc",
  "key27": "2GZYMAaYAvaVj6XeNhrrn6D3kChMsheXdGuEm35nWPsaPmYrm25czGUQVCmWdU6LyXGkKWV1vAXdZ6XwpCM2zBdA",
  "key28": "3iZxNNtKpzFf7CQiCxGzML3FLyiY6fV9WYf1oguS89ehsJJr8NopnV2vouk1u3JbwBhRbHjHSKQEczydXdrD8NAh",
  "key29": "5Zu9hU35Afen7HpdSWMRKbLf3kE8W6U48AiAL4PEV4iC5JiEnDniK9qdz9n69cJZC345MhTEMXsXxRRVTiUsA1Qi",
  "key30": "4PXUFSjbW4MxKDqDxggbu9NpsocCZHKeqJ42GiZFZaehJmT6HhwNbVvZhLjh77vdFg95dxtpXXXkHbbNaJviDBWs",
  "key31": "zw21oL1QFyTJrKmfF8JwCcFKCM13XHGFd6jMJf291u8FmvXvxgMsE4yAoK7Zt32oKdZgfLvDAG36iFe9QmNmAsH"
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
