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
    "3FbgMs9HTEVt7GWf1cVXWqUxwcX9kzueVpS7FQCq29m97jiEKM4qpndNpjpMjRKhhsJrJvo6edUpC9TkTxX9zak8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UHhizQciQr7oXhfx98DnoXEPRakGXEpQKfvoYM5ZtePMoxF6x5zDNyqTkCuWk3hN83VtvUxMyVsVUVjCvm14A76",
  "key1": "4WUkb8P4cfFKUDZhrfxwf15TGk9s3MtKN8FhEE7Am76BpQ9QJ1Y7km24RT48XB2xG1j51CjEJHxzUiUE7KGrYeH5",
  "key2": "5jAZwTd9hRBA75VXVwR7AYxfFXRsNy1t5Dysn5msd5yryK2zQwfDXwoRPJVwSJkSXgpRQ4wKinaw82yNNkPRZ2Y",
  "key3": "4aZPKWzhEydtkqxBhEpXmWeWC3264edd28teHxw5RfoqKtCyTTGnS8VTTrvo5zLAak5uvZ3EMSg2bRTRUt6z56Mv",
  "key4": "FhSRkjtEKbWmnFtPNocHHBY8pVW2XwSnaA6RbPH9zGNEDR8u8Du6uA5vhM8BTsr63tnkaLdVmEkNbwokm8yVx1r",
  "key5": "53uD397NrWev6tvSnrF2WwghEZEaC88f4Db9v8zTxrd2APMnJfSGiCpiTHz8wesYaGZeCvFqQ9zzcnFK4Xp1vVsX",
  "key6": "LDCdPQxDJGxh8gQti7rg2ATxcdKizYZm8hGvPjU2vpzx4xkh16xgN9dvDdPBB7EG7ob46mcWfJZvLPgHo2FmqJC",
  "key7": "24dzdVCz4AgSJSHS7JaDQMHuAkzrDQm97CDFeKQPqKpCeQbZw8KNrvMnuo378KJPyxtitXwzwQUFk66qaBCg1Cor",
  "key8": "69LaGz46iUvUhgDE8MApjpvFxhfQuxnyZCoFUL1N3z47mY7Vq4PnmnHTHDC2Ym9eein4xtxKV9S9r9DSQRuV3Rv",
  "key9": "2tbuaaWBjdbKTLf4yUozSsucdweh6tEnNmEStzgdMVjbJF27cP5Gu86vqjzpivd5RVaLwcB4JS8CXCQW3ioLmSZY",
  "key10": "2tf467KA4pw3snGY7i8ofRNNNgXpiBENe7hU7HD24edLnjiqjwN2xDTvGDbU4VCC83Qo8EwVukhjCSLes3o9PKnC",
  "key11": "5KtLrhrH7Rv8vzpcjjAd35iyAWzG5Y8RLtGRAeYt4UqgwmaBj6cuwDfRfeyQAT9d9zpFdUDemaiZvHLQSuQL4Trp",
  "key12": "4xhTarzjAuw25rZo7TChAi7KW5K2PbrhWR9maEeGw7czuUbivS8sUCaofGUt2N5GufyiUZoNTZkjMHjkMfbYNHFy",
  "key13": "8F4N2kCJ3Zk9XYfdbG5Rsjinkr9CpttMtHS8KFVtwuPyaRcCP8SAuiv7tJdX7VBNFe8kjNHdtajZAbu1YeXSp4q",
  "key14": "2Haa6Nn37jkDWkNhjL9qaPNsA46bXmWBhRpGFFZLG4omX5to6ntt71aiQBgYH8KP46HvkczELv9oLiZxuiSA75p9",
  "key15": "57jAsasNqT5sGJe7FwZPFefi1N83RnQ32U7nHgvizUKEatEtQfecA3LX3CfHrEKe2WBc2XNBySLNhbbiXF6QLy2i",
  "key16": "Zs9fMopS36UcL2EgZ8c1g4R9StP9dizXzodjJbg2SsSM2bzx26gh3GmAkiv9ZCYeGYg29hjLCE1fsXrSkE6JjqR",
  "key17": "2FkaJyhWXPf5JkGSHtnUVr2AGXkxBUJFKyNRp1qPL9FDAShqbj4GMGAYTM46upuL5RBGxEermpxEyFR37Z5S9H2U",
  "key18": "XvMr6H776Kz43LU2r1pZjiwmt3zGGEWxy9XjjACkXNspxPKaELgzx3rzKwvJ2g5PUfbojzM3CFbFvbhNPXsmf57",
  "key19": "4kmQbq5BEPYFt1kFPqa4uz7Ad88dvJ53ZHdMUJ1oaowoDhJ4QFA249aAUMEW5NHBaF5gJSkQ9PCpFvsAAxCqh79j",
  "key20": "2Qs8rNkDfoF2pQ5e1PZvHnmW33srDiHGGztk3mcsfcoXnRsKbV74g376vve1zgGZQqnRLpSwWu4wSjHFF9W4rAGL",
  "key21": "bMsgK8Q8BCuNk44uLzzB7sGeMAERoD7hTYYJcgAxWtJWbxcpNoBwbDgGHotbHXfBRV184wVmB4dHBdEGUpi1iJK",
  "key22": "kXt2LDo4QEmGXVyvh4pXKR7a4mFxi7KPQpS9CfszABKBKFVk6cEXw3kTSWseotvVxySvLLFs8CwUhTvQiSQDrPL",
  "key23": "5GnTfbHuFksBQK71Larz4nC8NTmePSAfr52zbXuWjUxUhmXu5iEzHJjhENVEgMFLeH1ZN3QMDmnZaQANbvjgD7W2",
  "key24": "2XLFmUWJnqjZAW5JJkzcnabtMrLJWRP2eh2sWCysYn4RqvvCvXNedNxNWKUq3N1tV8V9AMy6MKguDA35CecFGH2Z",
  "key25": "48aGhBmz9s7vU6RNtVWCuTa7CC52277xPTLt4FqPpiro27S5EfP9vF3cqQZteGrzUcqUgJk8JzrLwwNyBsM9dFUL"
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
