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
    "49hd7Abd8QVwJCSDQ3bmmLnvLo7kjLiBExpxEGKMGV5xAT7u8fHBeSLmvJ21SA4j9wZrsikHGkzdYrvG1vpRbNx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oAyHwhBmrL2UCebHxZuamaUU9XtiudK2xP2GL4LqaJ23BuEd5eUCo6G7LSWgzbdQ9EmW1LTBE2ZTEbKzAZiubC7",
  "key1": "JXGztHA1ah9ojC3uwjADyXiPWQ4k6ZXGbYqNe7QQhqZFjmvutmycXhDSKwMiYaTJREM3wyocDmQULAwQvLzBkZy",
  "key2": "678bEpEE4BUD2r6hKqdso7cmFiruk4FDG9ZNrVUdpVA57nmix8xL3uaPHzR6F7hqhxaaNto6GFqoRBSVH96Yo8VX",
  "key3": "bPZRjWFjuSPkgZdYsWFec1spf6jYWFLBkFLVQtAv3ZQnfLBXQYEHWk6LQUD71x1QLUJoj8gHi11KA6v3mq5TsoK",
  "key4": "sr7TFXYQjezipHmRAAKbJYLoQSwMofLGoWcxrtYCiDRRKu5Kj6LVQXgigdqYD88YEwcrqc6rCdrZaroMCuvmB7Y",
  "key5": "3uBNQT4TdouhTz7BVmXE68gaEqjprCW4CrXMd4LvwG6QrfPKfYKhJmNwHbmwDMcbhuKokUCUJnzbbAiaqWkHMyKr",
  "key6": "2PvPBxQ3Vd2ETja1XWnDV91fJj1xgjdqZQuCwCmD7VF3txSteMPCTdi6m1FBo1aPdf2f6qyQMF7yGi7ce4T5vTUD",
  "key7": "49xcXWFQKJGTcVXPcj1amsD7ako4D3HgsHkQUFKTAnGZQDTYxERqdXcQh7eoZ6jrMR21qqBwyvsQReooVisoc8ju",
  "key8": "TUbPHX7mzFoXYzSj9Jb578WGHoy6E2EbFXGBbyMLhzx9FThZYduSSMFXcLrPFGrfzRummNmzSPH2peje4sBszEQ",
  "key9": "43mFADjbxeCwxrgXd3YgshB7ssBD9K4keqRRmpf4LscZSCq9cprgQNiey4hWQCLatjD68Lr7cqRDww8J4ymNjcDT",
  "key10": "2QfJa8rnnPyvo8sGRGVvVghPLpSfkt6MamVhxaxQjfkjD3XVpYTSEaJFzkcsFdzyaufGdLjnNH5R379cY2fJHJQn",
  "key11": "4Sao22kYaNEk2nSQ4JufqTqU9pxtnnF3doNULhH88BdRmN9DK7u3rYMB7J8TcFJuy2mtFWbKm6ih5MmygHDNVvCS",
  "key12": "4kd3wPM7qUaFjNKjTyteRUQ1hRwZjp6M6ahjQNQAbqK7iNbdRsGikHE4iS8pamyfDkCRxChq4D6EQbaTJ9Kuhxhu",
  "key13": "34ji7ZBGw1UqSF1a9F6mRkefDn5GGRd432Edmp2dBA8DbMhSF8BeDyGxtiBujxu7fFFYvkzKEVCP7u1no5tA81Yy",
  "key14": "2XmBjGbrdZRPvvd4dGj2zKxYGSJJtvpMZaiuxpFYQZmUo1ye47Up5N4S8h4drVPZY2DRcMBdfcUwZ1Q7XyrhprSX",
  "key15": "2kWswUzpgVSU9AwzxuGsVSr9NUU3bPdHw9B5XmkEtBoFBDbdTMGcjZ2k14geUGp9QMutZRZATUvnyuzFMR2ApaFf",
  "key16": "4cVb2wWhTHMyPmmLNhFPPmoqKzbHXkGbWAC4PYogfyvfkP13hX9VH43c6A4hDZzmsWReVix9rHFaaCfmyeHpXBa1",
  "key17": "3MotsxegV5KgS2vQM7JcYswH16unu59HH7keTNzu9YPEC9bsBYtVgFduqdUBRFXUr3FiBSL84W7GXa3g9hfSqthQ",
  "key18": "2RoSJsHj6xjNbamB8V88aHasRzfuSpUvDWJ1WtjrQaruWEnTxEJ7122oBAZbDj2YejCtpFaaAN5Xfs4bRs6C9pQE",
  "key19": "5R4yBg72qh9B7YUNKhf82WszkzstcJZPLdDXFzL1BYcgRgmx2pPnQWBHKAK1zTP4JFuKCM1dWMwRdJ42PBPQY5EG",
  "key20": "s9zz5Qf9dQc22YBGJXAgPeCKS7J9wq5dc4tr3LoX3tTLcmRoUJ9Aq9xYZmmSqdd5UYJ4EBjj3zGg5PmBKNmRY6p",
  "key21": "3WaN8adpn7SgFNEBymscgGif3gUrebREXPBwmYPCbibLX6BdUgfkhBKSccVyiBJxBsZsFu8LKThAXvXt3Ln8FEPh",
  "key22": "4fGEJ4szR4of3n16MSzCegamRXbeRM6vagV3wB5aN64M1eFhV1ztTkyLLRwjBaQJfgzGFhALCFET5KAkrusR6anX",
  "key23": "3WEKje2ws92ifyNrroa3KwMdzrK9HafR9qXNk2icWMHtaf8b66iHvLNVuJJ2PdL2PVyynokf9hv7zyFzvy6XhvRB",
  "key24": "3Mw5oVJgKVjbQDL6YmPkQMeaBTjuVxiJajiqJJACzTqg2fUjLoXg7us4NvWGWvfVJKP5jTNTHcwvFpUqDufC5sv3",
  "key25": "4fACFzHm5TxitEBKPCZVGZCv3zveLZjySzC3Csua4Q4HRVfGxCqWjrG2agSQ2mYB9ABRNF37FtxM8Sv7J7pEyqet",
  "key26": "3rTW2o6ZdJH6wvx22cfVFeWR1pX12T8Nb8h4Zkx4aHnWfNwqPU43wv3fFqxu5Eqy3sHS1hYwJBC1MTPSL2628f6q",
  "key27": "bJSH5567DiTrsyBAyiYzT9HydfUcpECvRgZYytoU1GFXPqo977CDyFkWQ3q8LhCr5F6pAuTaXrwFxVxXRNqZw93",
  "key28": "3GcaT2qMgEtBPvcPQrRKcNLSjzMDtUDTd4C7Eq9BDDXK2F8S9LXRHhFPVMKbdCcDjYSwmGHLRnQDAWvHgWxhq7bA",
  "key29": "oTdR9LXVgvVDLuVHkGZQXUebisRH4hH5rF9mAnyJ4G7A6PiCSfLeL1DwdRnxun7HT1JwsPNyVkVCfDA1itSHvvQ",
  "key30": "59XtED7mAq8GquPapepqU7HHrNPEDsRHCxxfGnid5Qoeix9teW9Cngou7J37K7uBZgP18qP6gPZsUFmKu7rydXZg",
  "key31": "xstUA2FuEoKbJ6gRxYJuEhsJ5hJgVqGzV1oqN56VQLSiN3CRbknCR8hhCiMVLLc8iLtMo9mFMkKuJuPreQPg6vD",
  "key32": "5eDC5FqtsNH2oUfGHKP79y4dBFkBXTTN1jfsnEkXDEQ91KkYiu6gNpY2FFUpNf8w8NFbhcNznE8aE9ytniSiMwas"
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
