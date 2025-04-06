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
    "5ZPyQiWigMvSJaQQnqqjjvyZWpZ54ctxAU4QHXzgdmjKzV6yWQj5imqcsBZ1BctRCMXYLoKkQjLVy4K3zcvn51pR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cQWTUs6xJM23SxURyhvQCPWz9AmyK7NjXqBjkwUE6dAUHaCiei3UZRnjkQri4pFAE3VvGU83G7spsXHdz71esTy",
  "key1": "62BEDUD1gd7HyMXvQr39VyrERfCX7JCgiSvbesGeyLLWaUywZdQz6KZuyxq9QAeaUWdBqUVxwrPD6T4D6Rjcmtuo",
  "key2": "3gBPrCV6fexTiP6fnxrkLG8TEHozF5Zr5aJ19JdQDyf8mSzFW8QQP9bNQLFMeKNMsihcSRLby8AH6Me9eS535Npu",
  "key3": "3Z1Xyizmp51wiEqYDYz1eVGVy4YNADFeeGxgbvc2ZjhDPT74xXawfMu4BfdXjzpFTmiDXP5QhsVe6KhiEbiAViy5",
  "key4": "4gnFUp8s16iCcqoakUnbGdmMn5yCpjEDCemN5Xgf6acWdV4XEiro55wAdvjiUqJydpfN7fjQFXZWkS9EVuvQ8gLh",
  "key5": "2bFTkw4fVePLjcZUVortf9EL7pJfodE9xsquHGmUPAjFKe5t1brKbzQXxuv5cs5Y6LeFDP4QBFrFAVynYVupMihh",
  "key6": "5739M3jjDfEunE8wZYXqt8vErwwoUR1jaEppDa4kLqRJgKxfodC8xNHVKnq9zE8ULRfi4yLYogmAdrdCmib65xG2",
  "key7": "5niSkJjH9gjQZPLiowqHdr1iBLezjojJHCmhxpZ2mCASiC4ZPKEE4wh56JsGQyLymLwutnTnU6LNznUVLJyvpj9T",
  "key8": "56wFFtz9oeoMQgGS1p8NYzkemQ9jiXbgcxiYsgt5jirqrmuAWAL7YxYJdTNTuf6iwmacotdarDhWg57a8ovfPcya",
  "key9": "2LqBHsdMmxYT2Ez9KpkegTcbzX1srM94yFwaUFaCYjRFBXDwE1EBHKDVjhDw46wAaQXb83gPTwUxcVCQyTixk6Qi",
  "key10": "4NUqitjGRn9TieKdn2nUPiThVo1xcE5Zn1Dd7PoAeVDbeEzhkDxPbXSMQi6dXZdNfTTjfEUmgGf4c2XfDB5PoykY",
  "key11": "3MsPCA4TPddADHC5ouvicWxr5UdxP7crQPV6LgqocDTEHXu5hkAUTCxJgGmyYRp2w9XUnii5QxVhWuAi9E78fKTk",
  "key12": "2e5YdmBqrbpJaAUijwkemWrzsU1tsEPYPGDVxLEjaCqAbbxMLEwKFZP7gZhKPq5HwexZiZMgs45GAVsxzc9E2pf8",
  "key13": "5mKZujvTWfUTLT6yfhRrUGXzJs4RAj4BMdrqLkvzqGQE7463SqSkt64A2yRzQJnBRDgUhfqebWJUCYxodi12oF4W",
  "key14": "2bKobzPMP1YDL2SGsDmMrFAnDjmeTGbAHsPcAPqirDz8qxQprAW6QVNvyu2tUeBn8L89UvgGjeA291squHrzrRs2",
  "key15": "m6voxBY6YeGavEpDxoewPoNZv13eUTWp5rC3Nav2WkjDJi5wNX8JFZRQYyXcuDSEGsiRZjwJ2qBmfKGqqxTmGBK",
  "key16": "zaH5NYeDSP6DrPogr3JAXwN9F48WhwrnwiiXKhZa5hRMW7pXBNUBUWq1MpWrC2V5Ntnr2D7YVoEnDUVWae2uNTK",
  "key17": "5zoD4n9BCdS73hi1QBzfK4QQZ5GUXkKYDBVLJ6vmV8DiSaMFroToVCpEqBJ8QQL2u4szxoLt1GoW59y6NoyQ2NnV",
  "key18": "47oJmrZR7vyWAEYpEuCp8uwEuSgNN18WaNeB6RGnitXBixP1zzVQjrT5YNkkfcF6pKgijLF9yn53HCKV6kTQnonW",
  "key19": "4Z9awjv6wjqdTD9K11SSpU26wf4YZVbSsKgc2sdANdeYCSSTUu7fngq7HL6fPe2z1Dr5QijT6DAQSSMgAq5CFJ45",
  "key20": "2CA6gzBNSfViQ2qxDykL5KoYatdKSzin92mF49S7NK2wH44xMd2aNeWZ81Rvexm4uyirdSZmD4VP9JgExSZ8V4kn",
  "key21": "Jc24Jqz3dik45mr3EAsZTSgCKuAmf5kQ1sC2DpDdtuyNR5cgwdJuvVbc34kDNoBW9iKgjmDmc5j8a5p9fSnVQ84",
  "key22": "4Et84QSRJ8LnfFsSy33gLH1YNVUgFHdH3ZAk2EuNwRUhf1CJUXzcvnRULbX13oTiqzy1XS9cYchwcDudqwUZAyNR",
  "key23": "3SDQGtk6g1DjR75NNwcvk3HmV1C4xEpmPcFP2zxyu5nLaJo6yTCgBUA1NZA37R8cwHHi2v6meuuX5sPp6bqkKsdY",
  "key24": "4i7hrTfCnh7aGcNzqZTmmHBesvEHLAvc5ACU6EHT9UWeXFmJdxmjrqVqoG4FUgThYPVfUXatbPFS3KHoSk8gN5An",
  "key25": "5H2Hu1qn1vjMAUsSrBSjvySSJUp2CtZwvgqJp49SqudSSL8m4R4mgyiVCFyNQr5cW8aoxxwSGkXvfQ6xfkicLUwH",
  "key26": "3hCuigCSVJAs4fC5vJcKAaRb2rTvADyNosxwerpG2Fyw7LT3krbNmbikCEFmQxmc3X31RVq9HZC2FGQoprbV1J2A",
  "key27": "45zLEYe98vJ9johwrtPy5bmDk3VwVGCMGrnNB7pwhEgFZiKukoN33uzQxitc3K2DskqwViGL47sCW2CbfyNizH6e",
  "key28": "5XHw1QCBjfukEuwUeWPCaMzvUnVKa3xiEvCd854DSo3nzjN9NAYF4SPgmCSd59h9oEAgrLYvrZQPFPYzi4PFuM1M",
  "key29": "4BsHQX8gURkuomRJaqYs4HTfjJPwqPPjakq3ga37onP51VPombMuxUymTKFWCxx8VCu6MiPLSM6G5zkmWBi7rZMv"
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
