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
    "3UMFRUip7njhJymyTscZ6ETgGZ9Pq9F4XrKk4aGYcp15CEqiyCURre3awZRmuUiU8yGXpDeWnwHJ93yVkSg9c6zf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23BGYnwfgjF1Zy9fkLtMxKH2b6sj6LnbECumJNYnrgJz4Z641ZEGEBFea4GhQmrj3A7cyX7efTyoVd7GyuY3dC9j",
  "key1": "3yMzx6vueefVJfRBAfdC2Z4NPXZ36P6MoARtTUQ9gq5fMFDotLTw8NGBu88f3kUnmKstmVwcDB2pUXUKRBJTMHKh",
  "key2": "2koYuRBNVwLbs7S2pVE2GgzHtanPmdWe3p2rrEWhMR5BfkNFMmEf187yG5rJBNoTJXpyLTm2kXdgey1jnRH7R7yh",
  "key3": "2yGwxNivih752cobiKTDTxnXQrEaZr8o3F33Ts4SR14YrB5zs95HjLipfpNeEAoiHk5PfFruL33ndg4oEab8Z8mL",
  "key4": "MrPHejSjJwYMCVNEfwtmwGw2kqp6c7zaqHz5htdnLj8AGVYBv7tNiLTjzcntg8qeGE4NCPsJT3Ai2JR9QXYNx6A",
  "key5": "d8ujJKqwrkv2t1bZLCxkjW2RHdYhT1pZR7s1qkJgAdErPQDd7i4YP9uSeRRRdBegCtERfc1qddP8d1i1hRR9dfg",
  "key6": "5ZJVnPBv37J8p3TjnUuFR9Danyib4qiQJvhbyeeXB4aDxVF9ZbsB4xbiyT4cd6WmEPMiXBo1GbxtePwdyuXQ6fCh",
  "key7": "4kUns4qHYyYPQiyvRyaDuEUoZz16k2oLizU5tD3YvWePRgqhLTVefMCeXQUptvww4D8f9KyFpANimrKbkLE1zyaw",
  "key8": "GnKQNeGCxPQY31s5nqtcBSnuTuCwDJZFYY1LccR8ZW9N5W2z1jx225ZKhtjGfm7Q5GB2bs5MTZg6PaKzzko2LiB",
  "key9": "5qHhgmTp4dadbvUo9NpFtKAFRLno1TtLEn59d9rH7WfS48ZMkr37iBBEQPqPeCjfGNnrY9wrL6c1YGSn1hJ5Z2VW",
  "key10": "3Lr1cPdxjx1rTYNXEHeu65rAjSBYZvGn7oFUc8Sg8jLZ4JA9Bx2ebge84LwcdPC1FrejpsJr4eSjVMYfjuBedJ9K",
  "key11": "vkDMPfSM1JFTCZWVNQ1e4SGXzuaW364GuSMPxkSxnP9neHetiMpGQDNnpDa75jKP8GX6eV7ocCZpxVnr5WYHxzA",
  "key12": "21UcP5JJ7GD55NXjNMwBfYnXMgQtUfPexuCjLGK5pgRhJdQhKBTh9RUtMv8r664EAj5kMBsgyyjQnDf1TPtrP8gE",
  "key13": "2CNdgB33qvWupgfwgvz4RyPQ3316AXap4axhoCaxATHD4erTcejh77UcUFtyFoGRCcfzwwK5Bzt3ttgwKb6JEDMQ",
  "key14": "SQbUhfBsZbhNbHyepQpPPFa3FL8rTyJqHxoLNmzjTzRFTGNGHuFU4QjWDGRyTpCXDE7xJ9fduzfvTs1QYVQqASJ",
  "key15": "3M5eFSr5QwUMzezd1WQjk43KP6mY82vz4bkmuTA9Y35ycXSJb49aK7oesYS5WaPsSt6j3Cyxt2aPKrUX3FWkvt1i",
  "key16": "3TvSeGMnuqViKEoZULJh6exTDriirVjTG4w6PnGECRx9NqBZyU8oepZo1nJjEjRYcGpJFFVYevDRiwevxKJUfF8R",
  "key17": "2A21HgXaCVDQt8f8L41Bqtr8JgfhJdnPzYKWJaHTBPDZiw5hRGL83cVZqoDRAAsoqkJXMdcnEj7XsAmkZHMwz7Cn",
  "key18": "3vg26RYigwotQq8cTuhwpgQN9Q3oVeDRPYYuqz39HrLYECufKWrub2SUvAop4npvAqsE62Rwk9MDFgR4KHqKKBZk",
  "key19": "7Y3SqMZ2BCnqZrCwUuJS7kXQ3fGpwFrXfMPfjvw6dS1AKCxrpKSV8W7qsZQoDPrfbJ1L42JuJ16nGSqX8tFzJUs",
  "key20": "4ZSFQiuPXnBTWXoeMCyPnhSEqjyUMLQcxYquDTwjargzo77gb585Pu6ShH7fseT2TF4B88jQY9FiXzb7TLdWMZJU",
  "key21": "3389wLC3XC45V7VVLWDeYGzosGJQam9byUzPiVKTsEk5yR8TnDFASv453kXqxrxNK8eoPpq1BfmZD8gbMu6XLsph",
  "key22": "2mQTSUZwDTUCmMWmQw1FEqup75h98LgH8ax8hF3j99pMDcLMBn1wgjULqSgR4Qqo9WMG6zhvbxeYn9d8sRPdwDTx",
  "key23": "4r2eeHXy3f2fnK2TnyFEg5XMUpP8iDVpJdCtWhDhTBtVMbne3bWB9bAv1cfA2mgKZoHXTRntAPZgLisY7JUojEpF",
  "key24": "2ftMsMT5SSxHtbJxtUMogyk84dLJLvWRRhnVym3RkseYgJopaCgUbypusTxdirahoaizHpo7GBapqaJMt2BcuFj7",
  "key25": "5g5DHWMHBnzUimi4o4hvkAVhQSqXFHotqHihpnVJn2ioA4PKKNPba3oCntmHXWjDbVafLFsS5kcPqHsSQXEShGft"
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
