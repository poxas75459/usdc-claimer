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
    "5vzh9ydEALr9K1Sbo7anGroCLQ8wcpNsGW9ofcyThnzL3Kgm1eZ1oLebyiCWV85AMZcAdrY25iQCEvE17uMcLUBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jMsWbGByU9HzyyNxAth8fSAhanoJ1J2oEg1ubuvGvKkuaizgkobvdyEauh757zmLfVwjyNKU5ZgWxm1VXZfkRh3",
  "key1": "AbN3VVVR5k9snvmzYsRvLxiCEjTavqJFUdU3AGGmDaESEQH5Mgf9JyALYJPLJETGupoq6bB3cMrp3fKaYsjaLYg",
  "key2": "3fRTDQMAn5ej9nEyL2oPjCZp6wL9UojxbF43AcgcmYV4DnMG4QbctLKczpbavxNo5YfbHSJaN35zgyHkboewJod2",
  "key3": "2u8ozeCzjz3YpyrjxJqPXDNtq9wbRi2iZAxqgT19UEahctMhn3kaVVMYKxRUkEDusVwapHZKbDtqQfRaaT3Njwgb",
  "key4": "65352YWQnSzUNFkupsx1rgUY7XfJi8f56XWnXNYyBq8vKWRXzuDtKFKt6tk3ZZub1MLF6jhoSbR5CDYoXMtQF1az",
  "key5": "txJTdk22qovQAY3pq8M6pGDD68UBGoWSbX1LXrfmRbYhrpTAQzTHuR2sJtqDrhf5u8VksxefEbM52poa4Mzmz8y",
  "key6": "3VaLsrNB34HjeYqkdKioBzjNdGMMvHdqHFAyzuBxRG67XpetuFJMYSVvfYyQkiPbRYdMBJKk6ZrQBA4FYvqNohXt",
  "key7": "5Q1LBym69uqWj1Z5Aibf62WSqJ5eV35wfhYdK2b6XoX7XXQxmpN6jntm123L6Vxxm57m4o5HCkZQKgEyCMZ89MFU",
  "key8": "3dkPorTNsXNMt519u1xaj8b1CMkoFeQ3Qi85PUT1s1iXb6S7hZg9wHy7w9YxdGZ2kEYTuTGUMHNvgZsw725nY84T",
  "key9": "4gbuHUPhnYCXBGqPFfHTQv25LnjnDXYNVtARLsNQb3jmZjxiUfNnpR9xMr8b8KQUq5LVgbzesvTtLT2ATVENunxQ",
  "key10": "31KV6wzDBAzhGTQzzbbdxki4bYf569hNnCFuDX9NG2HUQqYYnQj6DAGXT5Zb9UBYSDBMHiG8uNEsz1EmMgv79iLX",
  "key11": "2uPk2tvsH7MPgz8Rs3V2SmcA1vzkBdBPqzkTCJD14somH58u7Sz2PHTKBqTX5uVcPYqF1wF2XEvMmdybfisMeHHd",
  "key12": "3Dxsj3pvrQcWyGtfDiQBjYrQBGU37vQt61aC2Wioy2RXLnpf5N6gWYwwov3SmS7T5s3EkFcXMzrsMscjAhZ9hcjZ",
  "key13": "4QBYi1B38ZHFdBcPsx4RGjpLZL7FWbJFke2wvD5x7maV6NyckFdyHZerDGbEMqq3aK8gMj7uWD4U8jM5RsSdUtqq",
  "key14": "3eVTQHzouEX89561k4TsNVAJ7g42yHtjJZceV9o37Jbo6FjDEmWpBaLbuJCTgEnnVyQ9RkRWNiuPJpgSBAtaLFdK",
  "key15": "5fQKiKD5qhy8jEUnnmdofrSbHwnMpo52E6F2PFGAWBWGNHNJMzHhwKzpyQNmhmab1Rze5reTWGqxK9a4q1dKW9jj",
  "key16": "5eJAjedNgWqV575RyYQnSr5EZvKBRbRXiJ57JZ5bB7E9brWCTAUAnZ7kW2aWmKH9vgJjYi2purgTwifqJcZKGN7S",
  "key17": "4XecjQJiu5oHQB8s5VBJB6vkffsEUJzZ3LMt2ex1NQJkVcuAZynfD1YbSPYA8PJHrpkqqSz2NPJouqxiXRq3otRd",
  "key18": "52qUJ6PCoedoYMiCMZCZgKvTkhfh1w1u7zzMQP1YBeHJbPzNANaXFtUBMPfLkCVJ8TTREGEBaG6cz2vUhLRruwPK",
  "key19": "4uCgKbfmk3HFVmU9faX4A1iwF64QPFz3L18Vjoh6nuaEe3SbUCxTvST6Sst66QN93xUHwLzni76bs6R1XBFKtAZv",
  "key20": "533GXECGmXs3htwtPmgfzDXZjSAH3j9M7PeR9wx77Zvh7ZGU5HREcKwyWtMVnWowJSjfmYWfZSuZN6oajb7f62fK",
  "key21": "3w1tkhvV7CKuWMc5fWG5zSrH81Ncq6PZUf1dhMgqkKJ8mynz52z5aMTExMzFEz5X8NcTstwy4kx3dhhKDgyjxz9F",
  "key22": "5yF5huu7HoKJiq2eKn9WMzfG9mBDQTcbKffEego9jZ2kdAqVBDMTN8qkMVmup2hx6CHeVWE3Dzzr1siSbNjF8jQi",
  "key23": "28DZcqGAkPa6qsToKQT3WmT1EcwmdkzBMpD69Wm5NooEXrNyPrCxKzugPzcdDAtKQNHfxKQM5btT6J4WHLFXgRnS",
  "key24": "53sCyqoHRBUqU1insBPtf8aoimg6V7c5gemsN4tKFUvpLggnW88SBihoFB4UTsLvEAR7JNj34UQS1KYZ8afK5roi"
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
