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
    "3R4SotHPbhHkkTkAEz7ZL2xLsxqaTagMJP7GtS6yTrwKFwctCtDem5UWKKTSuy3Bqf7pYR56EG9TsCBZ9tKUgtb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56cF6d8TVQVya3YUJhD74RYGorAoEVUrdxvGvC9aFX8oayJbUyZ827bGxtRw3BgJnesUuGihgS2V1iJEPiX6DCPW",
  "key1": "4HxWYAvpc4nBSYUYs8j8NPydwDVfuaimLdxip654zT2kFWcXbLsYsWjPrBxfogfKgKkBCtXTNEXjvCZmY9L92e28",
  "key2": "5QYZx1JNEcfZHY8egXTSpJVut3WQVJhu1wMTSssqzXoJNAJXkBLL5wT9DQfoLyqKnXvmGTdGnUfiKS6KFCkfviWj",
  "key3": "4c2mH4nESDyw5F1pSzyL7kHfmtTfpjvyxnLe6by33LrGeGXMmvoXB2VgPdTEzNA6P8K87QoSQtKyjEsNjnTCbmvN",
  "key4": "2TGEC1VPfvCcm3WHJMqZeyeertaT7ViFaMQCpuhXgWaiTztwmUykgDVvNQybJDV3bkuWeDkNZXAzmZEWjJF2tY9z",
  "key5": "632JqnuXNgiffDagLN5aht9i5dGdUkB17qF6MVP96AnZXt2EBqJ18vsH54JpmpUy3zJkBVm17H17CE8Zo8G19QJo",
  "key6": "2y21wMrdwxQgTAUmEodT1Bjabzu1pFjMKDBsVHsjdwih48ZX1KfBM6igtEiR2KCkeKhFpXwyxPHkWmpbmEYYR5hG",
  "key7": "3To4WePLA7j9Kjiyid2XrZuD8wfKxHtQeUk6YaTkrLMy9a5fRF85CXrMdpXAQLcLBddwxDwmERUJD1tDuJXJ4Eqg",
  "key8": "66tCFJJvMKNvrJJmDw8HkxmNi2Amqdck8byTvsZPYwgSFxmuKBWypYC64y71uxunueG8t3CbUAFh1K5kVQksC13K",
  "key9": "5H6aCU1VDYj4cNpce3cJjcMhYnubYKST74inck6Jqvzci5sJqD7qd1u1pbuEyqdeMoAv1te4T6wxbsXtwTudh1d8",
  "key10": "64Fn6iFsg8e5ER57vBmTduBVW9QewyhbTrosk7Q133BhDg4V2EQHBe9dbUM5Rr3owUFUBCYZrM7QU5uWggBh6zf",
  "key11": "2BKq1mSdDYZbsF6qHopVBgcQXgLiHSKQHw44QMgiV5UU1eiEm6aUCsjMzyUQrnETmtFh1Wd8SZXrQ5PY61x4PGuz",
  "key12": "ZeDbbyJsWNufC3ykuWUqNQ7AzNQeXME28vpcx5AP9kbmjZ83Bw8uhkimZJRD27EREAMmesyBDJ2QtspTZPw8RXu",
  "key13": "3hjkVZPaSUV9CyMvz9B29Usr9nTxy5tmDoYR1ETAuCb3A4ZiYUR4rEdATf1eYazm8dTnZtEW6yDBiUTTDHSpU6ki",
  "key14": "3ppKBhMhUTXgUuBUG9CdfCMX7wbsSncmezMdqunavxENbvXhpvHnKmYCqStHKZhAkguqsxXVon4hq7fSEfMhrinY",
  "key15": "61f2qhGLwyoNMVxWMuzLmxicRxVKhxFdMX52mxiRz4CdmKvTYo2mZE4aGXsUK2jZGDpahjPPsYtasLAzrqKjprUD",
  "key16": "ukMwxCqxhXJLBUi5TqZkP6aTMJA94ouUYuirs1cphz3YQ7WVzfn8pR7H5mZgcg91cHV5ERaavBJQ8o1Vrnrk93K",
  "key17": "LBwGw42jidfrN2tJemBpG88M8qTmBTvuGbEq6ysUmpYC9cEa4kZZWSFYuPzmeJguhvHaurMKf1W63nYbpKvCeJn",
  "key18": "4ndmx4Cb3zd8dAE9v81LiE61i1Q7vgGeT6cA9prLCPNUvpmMibwUf5s8i6BE9qvgbXfsKdp2WwLr2wWQ1qG9gpbh",
  "key19": "56yY6T8EpZjXEfHcY7muKaknKzE4qdiM9Hodb3ZvAugX8CGnFTBJeoa8R2f5awopURu3HES9n6qLZnS6zDuvd1WD",
  "key20": "4K4hASgiEGVNy2YVo4qBVmUgF25pjkQKjtbxEfpdQo19AGnnfubUaCy64crG416BerUfE9W8YxLZiTLRF3inqAMW",
  "key21": "5xcPx2iGU6SpgzWGHMjMg9x5jTvWttg6BErEUm9P7VfwSTejyGxfySVF3CFusz2B446NZ4SNkNNzVWSYBUMUSDrm",
  "key22": "5h2HZF75W4ezECueqRWc6JGSiTgzBfTN9ohvUNfoG9FFTAzc493jX4cjh7TAWXK2KoHHZHqLpAGvFw8JfDbakNMy",
  "key23": "462Yi3n2rWLFXGjFXm2qSFZhhjg938TiVBbdfiEp3pry2t2xR52ptSd6XmzkDN2L6YjnDT8sZZiJX4cnFJgyzapH",
  "key24": "3s71LRdhPwqhQGyBqcRZ6n1Ns8cboXFcRxDKh5UPsHuGyYzoQyRWQjfuG55CPACZP5gPEaKaKs39RFvY7JJJoaGy"
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
