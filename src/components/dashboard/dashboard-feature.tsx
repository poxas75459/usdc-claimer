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
    "DaLZBodpm4BB9U6z8xSsuxMGZfm9yP2C9h78os1aMqUTr3nb33FNKkkWkh4tdRCv5NJPU3XUQ4FNpy85AQrNB6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4urVhX2nSLxpLMdHF74gqqrxxcgVgrgYxkZka2zBZoW68QdquurTiLnjq3kqXa3VM1TRiFQqoUtQUf3eEzYmn1HR",
  "key1": "4SjgD6uoVhK8og6C42V2rbvLKArKmF8uoEoUT54cdRrW2DtNUgKgAgXdANuQScN6g72ofNz9ACzQu7Dm2rTJDGVG",
  "key2": "38RKWBfB2EgXrRztTZoFcV1Ssj9mCBuafuBSMSToNGMXw9Q8VFK2CfsS6yEhmXJ1XjBHs4FVbbz8G4HQEutKNKV8",
  "key3": "ZZV5iRocYmtc8EnnTrEdqt4BRTiooAvBZAdLkq3sPNKVigxGCuEeNf2VoHn7UV3gEa4MS6LZP4fK6CbDVCP3Znk",
  "key4": "udzUKJKxWgKMV8jX2jrcDAyncb9RxW5YtJVBNgvXcZHuD3yzro8AoPVv4VSWCMvMnkguQFgMJp8EdCk9HaMQAyE",
  "key5": "7A4hKCBpWBvs5HybEq9HJf5bbt4eWiLMPNLML66nUjEpmW8J6QuS8wyvzqzeTwyqHVkutcA3MPwzikzNj8ZH7mD",
  "key6": "2EUz2srZFgC9H8kQtVgYLfzTPmi5dBMafCeEhPmRHSaYXTW1XnfKchSkCPBhAt8SGD2Gf18mV5NzyS4tCBCyi8cX",
  "key7": "4m1a12HDnrVVnnUodVwn5twVL6wSuBETQcFE7N3D3A1pTm317BbTqGqujfbXsoSpuhQndaine5RFzT5WRKYcv7xj",
  "key8": "2ehHkwQMpTgVDBzVWtm6SmjjUePBF7fqTdvxp714L1H69CgGQaJJFxanxwJtgDAGHe447spznpaMFS5FUmsg6E2a",
  "key9": "3pEsVXxHWZCwpkdgDHpWwPX8PZiWjZKRWpH3XMih9DX59rm2UBPhe9Bgeh25fYWft6eV6kTNN9KZKvdV7pbCwWK5",
  "key10": "K1F4PLXsrggKmfFrYr1RzuMvd638emremCWoXKCVH8igZuKBQ7QwnCXd32VatsdQiVuSD7N2WFYZyUSdn8ZYM1h",
  "key11": "2cNUz1J8wFCcSgQyp66oZeTZEpdfFrLJXqwxMh4vuXSCAo3ZrMTicnMN7cPqkFAMzJCGNfyVALw4AMjG1gsiGgRf",
  "key12": "39671kmBozrAE1RXxLe6gHcmS1d1cKYRRS9oDuPYc2TbYwfPh1pVLJ7899Y2nyH6i9ceKEszWtQdHivrsutS7gw5",
  "key13": "5My8XRviWCjbsXxX5FD3jQ39SPBec9P3oYi7wgY4twA5UYck1kNMw5dmiMzDCypQrD3awMKgJqNP451g6tEHYa2L",
  "key14": "3reKrDWnt6a2LUW7E5k2m5Zr1fgMdbDa78GZbDRpjhDvnY8hNi58djw9giNMfZ7ytEsSTgvLcEFdLZXt7BBhUk58",
  "key15": "4BsNG2WPkRmqwuCm69agxBdEDfpGTu9schyLhD5Wnu1ycTx93M4qE7Y7PMg3t1uFkCDPmgoyC6eNPpJr7sAj698g",
  "key16": "38YVAPbZpp8ekpiExGjkafdeejhw7emjFW41tUXvrhtr3658eeRVj5EGbswVhnAW7mh5vGft5mFWMxoFHugySi2H",
  "key17": "5oD5f9yiZBbuY81JXPSyqjf4mtBZHAHdSVNufRdsRBasDn8Wfp8jAqhFAcSkv7wkdiyUTy9orSY4rNJRAaw41koF",
  "key18": "2ET3woVCLJWPLzsqg9ngKcFr9pdGTo2ccGLYSbgzReVVudrnMFHgRK2AD5rDCZKsUVsRb9xvoR4Nk9B3omuBBggY",
  "key19": "3gHJVAuhk4XuHpk72iWW8wPRnptkQ8QAzWjX4d3GJaGwKqrsj3WmF5ZN8Fj1Uhdwdr8BBQLHrea2DUtcnauciEvU",
  "key20": "f4toNzyUubCn3nJBGy8z9G6VzPao1H7caW24kW9NShRNakmk5oQMHXJZLXUEkgKZ1WXn8gJcAek1YWj5ay8nmJL",
  "key21": "3buf1dc5S6gasBVz4ioKBHwwYRwCbJbYjkURowk2B7SuykmJ9XexZZm1z4BUEPyB3t2KH3gguxsPxJWpEKJJwRGT",
  "key22": "3oXpR1446ChqYudsxwkZ8RgkepGwWzpiuGyCaVQ7DdCHZVaDt81uGDtPvXyA2Xy4JhmLwGBMTgv85YnyH3M4u2nn",
  "key23": "VJQJUNdHvqmVuyi66MuxupRYveFkkE5q8N6TizFDcfUZgtRgLNtMyFjcrQyycJkYWKB8BmVv72qdYYxoJkGrU7W",
  "key24": "3CCcEAu8L4Jxk5ikycBvk34bDmNK5Hf29Qxf4J9r6MVarhmPY7BhzrAYQE6bdGEPgeJTKfBJyUgJu4DDUGX9zELN",
  "key25": "CqyfQ3P39Un25oiipUy2B1df5wno5XwDU64tsXUPn7dbgLia2crT2vmdtEc8MJ2rtpxiMnPYZszXXzc6LnZXbkx",
  "key26": "35WXWhWPD2pGHH9UB5UMeCVuDcj7hvMMauqs5Z3SXZxSr6iR8q5mArbsTMs3j7PhFN4rtSeWdmKZWgjMsoRTFUWq",
  "key27": "2NX3XHJL9bQksEpoHewunLKkCUmUmAStgA6ZxBn2tDJ6igxLK9JFigVeP5ReB5zqo17bYNQNRsNAnDBSHEfQ8nmW",
  "key28": "2ye1cRfFypQH6wjGsETPCs4SqCzfGiZbC9xYgs6Gw4Q6jy5oQ9MpZ26HHBFJfwfFG79eZGf6XhmTyvvyps2QBgKD",
  "key29": "65dMw8dqkVvHkWVK9xdZ7teeAUmpCLpGcScsVFdPgEAMtNRr2xuLnunyGfzXAQqtTDRrm8WiocscrsAeLQgy5smS",
  "key30": "5dsLKhK6mo8unFMPK4WGDTLdF4jpSHjQNobjHW5849B4Z1A66ftEYTKD5J6Du3xq9g3DUDzDWCqF6sUJ7GL9mcjD",
  "key31": "eTvEQV13RgJZYms54kSDaA96FDr1wiPazGxH3f9KvYCV1PGBcj3KDgQKVxvbDEMLk3wv29zgGCL3EFtf1aLhGCF",
  "key32": "56wdmyW8s8i1dPtBHxpe5CARq5mNSn8V1h8AMhTtnU8NiWrY3QzEVQUJQvxYbLrdWSmCRUNz1Mje1VRCzpnvYNLQ"
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
