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
    "2r9NSeMyZwgZrCpLnps1gnRE2wTJctPmgwMdy8UgewCSahLWNFHnnR8vQ5ankzf7kuWGfsPMS9QMNUfjdcW4DvkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G2bLJJE13PwkRgxqapAcvjZsv1QF7PqmHuxKecbX86REyDJepLogTdsEcjSrxtgtCfoiuJN3Ak1cXUk5ssLvb7K",
  "key1": "1RMReJzfpiGyhFgUdpGnKA7uYGKbRSG2pmb9JBMi1HrxjLLXj5GwSyMYNpiUTzDMB4fw4Cyuqbb8bCCz1r6nwji",
  "key2": "2J7EgEoYK4wYxANhJxoZPAvZTstZhVGQmXYYwdDg8dmeKf4nk1GHUuAej5fpeRf2HdmXnNmFATJ5G1pUmnt8dqtV",
  "key3": "47T1BtXEmVR1BRtt5GmrrzTgCt9nNANGzQXuhg5jrnbrd6jHyH1xcYeVeanH1bptAXdtEGmTGK63z6zJ6ZUYtSjV",
  "key4": "3QKhF4JkE76EQJaTiJps5mH9BaD1wHBrBXWbtMXAPsJCAcnyopC5psv7q1hb88SpZ9ghyKEHQSgx1o3NVhP9vKBb",
  "key5": "dW6CM7yebM7TCDdhRvmsHQmC63tWQ95PuLxu8BZVQk6i6Vp7V6hjYfraa1MmT7pTnBo32xGMrUGsqce78Uck5F9",
  "key6": "FbWUPtViahLHTRZytuLqS1MHSXiWfJFdrxAyWRX7BXnDcNHpvo4RsoTkdXV2NZ83ZyuH5Z69abXKMZMWp1cd6Kt",
  "key7": "5ozhH6R5ihizkL6f6526kjvi7xkSrd4EucYa1fJEh5c81D2KJLuvcbr5EUzeofUr45vFH6nWVvYoKh6gdrRtH4Tg",
  "key8": "3mrn6nqDodQAfoj1pnkuZM3uzuzVnKHeBdEEpGDjmS6ZwFpPosp8YRLZCrpfN8M49GZABNA5bQehRniHSC5vyKsJ",
  "key9": "DTzv3DRw7Wo4RpqtHNDa65Pd6fBKsWJ9FtLdJLoRM6PyWoH1Z5QW3QoRWhQFD3jxU8VTfBrYY9oLQ66tBRq53mz",
  "key10": "3rpsqiuXBMsxGMWJ2spfRcWkJBoGAdwnvka7D1TnnByAb88eeS5d6998K3oPbxyzLhdZn9dKA9dfGZ1nV94cKrcV",
  "key11": "5rQGqahyqo8Xd2WpU3a6JpAPasZKzFufqmfWHi2YJn7KG82MpiTuUDSBDvFdoZANgGVGBS8gLC2i1Ff6Hh1KSKmT",
  "key12": "4GbTNHUe4mtxXt4SzrJALHLpVqNSXiEZD9F3hE5ZP4tYRxm8c7zCKvsJMXkU7NM3jEHseT3TFg52z6BsMBdCqdqV",
  "key13": "3pdSg6fUu8xxiNFsrLDX42jdcQoi48tfJu9RfgTeCM4mBYBPtd4Mn9nAYoa9X1hDw2MvPNkgSvphRHv7yE7xmGK6",
  "key14": "e1wtkLtdTNL2sNsqnkbLhzdQjgA2hiMWXsWdpKaZb68ZJqDk1iTv4RFwGnB6fYbR5vQ3LGPJAmJ8mZaUDEbyTh7",
  "key15": "BBKnApotd7YEVdkaww4jA8gM6RDrcjjQbA1HD7tgGQ44zWpKxN5JEpwZMGc85rrA7mmXpM7BV2MSbkmotxwaLcK",
  "key16": "5Uh712TDyt7h6udtddGiat1bgek4r1mY99Yztmfhp6aKHMbPeBiQCvj95J5NRhotk1H39ck7tdRPRDMJmx7ZLDFd",
  "key17": "RNNaoepyW48dEB5uxipso27TGHwz7qtJXCLGBYa6WKPA4hURSrgpGTjLwMp1d8iPbpn65ybvwtc3PZxfYQ48cmT",
  "key18": "24SvdDGTaSnfgbaGMj4WkYZhavPb4zN1LLVAQU2NTSg11ZwvntSKK5sTxkjaUKuBTfsu1NkuT9VDL4vppaX5sMN7",
  "key19": "Sp2BLDaDtwrLx1nuURPmPeacS7kuZEYc169VpSPZqV58bUuSb676qCYAjHxRWz872iTaPEttw2AgQnGkFCG5JNt",
  "key20": "2swUaZ3Lw9w22xaqc3LpKDYU8xfSrvWwziPe4satckWRJ4ZqyBHKnzv9UFnzBdE11u13hoJvNYj6Sg1FZKm2LhuG",
  "key21": "24UnYreYJ4mZyfhD1267gM53zCQC2YVagozDgnKMcSr4ZyBtJGjRruZD4TjbgdXNrMRNSrQdBmWKcj3WrnKcuJ3P",
  "key22": "4EmLgzLawZtqCja8k96Xzzp8xKrXqmKYQedZjN5PBLtLuAnatW95UkAJdgcKVEJ3BTYB9tFhUovGsFMhp3ocXLsE",
  "key23": "26oVzuqtVSkjQAPqJ9f18gUk4yAJM6xvPJhyzvCH1PNvknZWykQKkRim1jKzw432mDRZJm3DqmCoZUEXSo8PdeQz",
  "key24": "34XxhsYL3ajUBCfWUFMTqz8j9PgTXGxK3n9HQ4FjL2Uh8NbQaxVtuGm6vS7FCk3oi3Vok9kSbSX41GTzFkWSLpBq"
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
