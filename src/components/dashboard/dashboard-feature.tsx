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
    "4Z5oXc9jwyftnzLvxj15s3R2HMxdQMDeXB8acpC6q87KtrxYnF6jaZG6MoUwnsf1pYwipi5zASGR7HXhZzL4d3UJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YtrTGsyunv2F48tS3iJi5UMRR4YdR2n5MqGGSrEymZfP91zzQH3E4hsS9vmPLcsPjxiX29h6TvAVKFrujkvvgqr",
  "key1": "3MgEM3c18c2JhfJziPgYpXw7zQwBKhtcGSzfVrJBdZz57W3A1GBJNPs4fwD1KiBF8L8mG2WjBjye9WTRKBHwjebJ",
  "key2": "5vGM8SAWbEcA1CCKxx5TH8wm3Wv7eEuXtKQZqLKCEzxFkWriaicVLYgSViNQCChLhuKVtvc9DoePEa9sykACBs9t",
  "key3": "4MprpgZYxBePTCKDFvrrGaZRwUyEwtqDMj6StkoY8wUKFTMw5vsgZRzHwZNyaDYXcZLUsPJ53efjtAp5cyiHbNUV",
  "key4": "3CPizJiVsGdEjj2Na59CALkxCXW9zULwxfpn98af5BDPtaeYCb66Jb4dDiKGEbFJwiDhxsaW5mDzHHGiQ8mqHat5",
  "key5": "5XYr7qn5ndap3zeZu7uVqs8d4MVZPg9ppy2PAVk5tu5H8BVW5UpbZfdVQnJa4CdTuxBuvYf1jd6de26YnCeveP1V",
  "key6": "3W7az6AGatHHnuEXBfj6tmWTG4iezGxFQRm7CzvZD7HcxCFrHqq5G7f2NNS6mxenZVBJHkjvHvv5GKahzhospKqp",
  "key7": "2AWNYYnZmt5Wtfn1j1cHiaFo3xCtoUVzB15AvcxDhgEJbH9re7XWsn9LG8q2nfXgE1nvzTcZuiAoeVQK8ZXkDTyV",
  "key8": "5wzCodWdpgrmC1cbPiSUZS2pAYMi9EoaWZbEgiw8h7jgMnWLQwYgnGQVKYVzvhD22nvzEHrw5EbXpMHcwd1egArx",
  "key9": "45thV5cakTK9qa4LnysPJH7b25XvMjMVSzV9YxupwFarZGnr7AgjRFcGZ57WGjEagCKp3HRK7mZXdF6oVz2V1tVC",
  "key10": "dSCRgygY2v78QQsJZ5y7Pj2RCkqiqzrjoiExBQhtaCieRcLNKbwBhgd7aYPjAaaks5f7APbYTSEmNSUcysW5Wow",
  "key11": "28EYmS9N1FB2mrYo91G8mrFWTyDivW3b9R3iKbg48qsaKi9gH8Hm3WBtNSAzPrY1MbXvsyasZqwnbZ2rFdDmQRJM",
  "key12": "gUBZcKi1uwPXnVLqA7tEnAqJhRwSVNhk9pUVNLJCP3B8FCw1B5QUcKeEHQ25iKKnvBukVszJpZyatGnyWUsERmw",
  "key13": "Jt7FfAmbTXmwPvcoTLiwcm1MkF2EUYxndvCX9YVimT3sfeyhunuCKvxcn2GaCS98KapdpJ9P6qDBdfKNu6SiQK5",
  "key14": "4pmESDLEBhRWrLAPqxBmgCJron96b2wuW83yAG9cGCBccvSkD2cw3FMi2XQswsGVXXRd2f2QfvznUgD7wYz84uLk",
  "key15": "2iTdVCvj4DM2xZxMALVKrptyo2hJJgYdm7MVBSN21R1rXGJcHjSV2hFu8BzVBQFEVQSyFhM8zBn8xoDQfPnSFXg2",
  "key16": "2V1uEpgfLKUpgjxybGb19BWpEerwzGNzkk9EPuu7pYR4397UsFGtgXWYJUsxj3Y3gHdnHgaic9dZAZkMk97Dvuwu",
  "key17": "65aXU1ZwHwfNCVeSzGUzYrVdv94AsETnWPxuPrcnUovsrma31VpwsMjuuRaS1vGTXkin6SvbnfZtvGk5Xkm4Hg3t",
  "key18": "4kGyDhBUJhrggixQPnLQ2wmhwJ9ivo3itUeXfyD6SRgcD92NC1a1jtAviQVUqr6iKjXS9C1xAYDEP5yjzkeRT3Cu",
  "key19": "2irmirRd8zgy1fwPdQuUYnZjheMmQJyDUTT9EMoEzQsshjXTpCtGvqbUrRWoyUV3QN1EgpTDPiyMbXzwxVxQdwiY",
  "key20": "3V1kvn5r6P1AQqiMpy42VCbHxs5sVJQrWsvBVRwRsVydQVgfkaFfoyTgCbqahYTbYYCxt167PzrFvVcwDYpfW28t",
  "key21": "4kQAA8mYuao8e92GXKap9vUh8KJJgzFrcGTuHxpk2QrMMSivbUyyt2J3V8UKVx64HoYTUFtxzqgoqejM64QRooGD",
  "key22": "31ir3QXtmNbvbFmafvmvK9mc15vApRwb9wJtMJgYDggrv9tXRHdAjGP7kqGEnoK3Xp6qwzWZV9LSjCC157bx8xpP",
  "key23": "5Bg4Ch3hNkY7UkAXe4dyxgLmZfxEefjrJGztR3ScPDBf7TWvVv24XuZ39CctAEucPzLDiq3jTToScCZAfKR5DxqY",
  "key24": "3P3ucbx7zS5nt1UuWf9inuZuK3QEEMEHQiMjXedviQZXB4PtssVBt6a218e6VTUunG1TpkpkifEKuDFKZfKdgrHZ",
  "key25": "2CNh6qVHpLuNH8ejprUjJx3bXyDhtykwmiJPoGre3TxyGy8L714hxxw69nCu5iBTbY3ZU6DRHvyddTAmGh1dfQtC",
  "key26": "Wsvv5EmNg5AnHBbBDsWSX8owiMp2Cs7nxVyGUsVS7iP43tkLYhyqLQvwkg6uBVrPRQguWg7fG5a6tGDgFQdpARD",
  "key27": "24us5FhAByGEb7CF4WH7MZNnnEPWWKXfAKRuDQWpj6CQS6EKqHy3L94GxRsV8YNGkWN481u7DUEs79x2esfq3G3n",
  "key28": "3vZv55Dhc4NbJoq2CRtBEqq33ewtohu4GAoEuC3exuc2PPpEMUtEtZvEixpJyfbd3vzTMafDeaGb7aBUhgx9T9Jd",
  "key29": "3tqe3tCsZck4D1cUu6ZMRp2bsBgWpoBiGQptthcTha3N8N8u1y36DL9esnZ8hdyfxuU6VEGGmgzy3js2Hu4g4GTj",
  "key30": "5KHz5inKcxy5JiYMzyU9wJtRxNcYxTkRDfQrZgzjjSKJhozJh72memxUWmMidDZ2phzd6yGisR1raoppGZA7LgVs",
  "key31": "3gYNpNQd41vLpzRwLeTjhV736LTvfLzrA2PJEsm4AHwc2M4f1X4boEG5ksKQ6KATmRG4i7VfeHDJg6gqWnCTUYmE"
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
