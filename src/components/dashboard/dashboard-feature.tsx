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
    "4tkCDvXpp9TExJSGTSYKYwZ4j8zWudh3oupACNTZrUDuBS17rAf9FYR962szPD87QLSWArTtgBcGBF5mxxyHZvSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gVZHW1BySSuacwyEs5mpCZnoe1UUun2SZF1camDjGTccx3igbyeeXyk3KB3CmKMa2gvXB7QLEPMGDz8HBhHBJQR",
  "key1": "3d5t6hZkDFwoZLVozADcpPAMnzjkYLdYh2aSS3jYJdK3X2NAzxNjyFZNYTDpBgGruwJqBMP3qjUoA34urjYfKekY",
  "key2": "2D81z7d6XF9QpAExba5TtQiHzRWXQw7qTmSn35iy1r9WhgKX6PD8idVKXMMSMmJDmQUHepGDsQUappg47RgN6E1x",
  "key3": "4G4gvswLG4RFLR1AnXsEqdZ6QcSM4sfebWCLGXqnCBQ4tZ7hZtg8Tm3WUhG7kP1FFmf3LaWRR3qQk7dFUALV5Ntt",
  "key4": "JpzDZjZbu4usFfq7zxfiQyJSMafbVGTqk9pxZw2n9M5VgdL2CXQuPUKPGSPHqu5syHEuRG7HzBRVXxyFzjcheoG",
  "key5": "EJyLz5NrnKohiNbTQ6rS4ApUvCpDY2GWEd96ALvNNSuMebszbBAJLP9RMiEQHXL24pCVnx7HsQPy4QjCCVtU7UC",
  "key6": "LPHHpVk9z3CJTN13MBdayaV48sPFjQhzBFKMYxytGWRzXQ25PKg5e6N2ypPo2QCcBkavfcG8U15M1UXsJ1vYPG9",
  "key7": "35TvS5a1FmPbKyiVrJQA69dsk2fQKx6abuDkfBZoBKKsE9Rq9FqiNRQKb3K4qcFjkQcky2zeZyme3YAVtjDcLqt3",
  "key8": "2kGfHxbVEgBXmkPzrd1mmHbsnGoeTFGLERK1UGfrsUFcRcLTCr24drp4H4z3z1czDHFknDcMyKc1QPAHpzwb9nD5",
  "key9": "31MKeu7tNRB3BN8Rxi2QGBY7RN8yiHxZgGthu2kg1LpSmCQe77Fmf7h7bJQPS683npP3qc9b8eVPYndQnXpCJ45Z",
  "key10": "2wyRnVGB5EiTUVeJ14xCdRbg63FjtTyxaCQBTMHXQusmXdb4L5kLyjcp2eL8d5KXE1CFZjekFERDnDoQkN7Sj26X",
  "key11": "1MKbAyPbvcciVn13pgaNjr1tBMz2MALmgfWbJkHFT4of2MonZQM5FeVq6gDkDjp1S9oC6uDmSzfxnb9E2pxA7A7",
  "key12": "2YH4henAPj2bbP61bAPUbuMfULFz7uSz5nNsE2xi1Vu4YQN3FqMva8NnVHhVN8g5ooLxTM84DZTzTUd6TTofqFaN",
  "key13": "2G4dda4jnf4Cu2uicXnmwH9b1gV7akscU4s2frAWx1XtppBuu1oWWEWQqJNhr3paEX4aZQwsGaqE3KW5DFK4c8eG",
  "key14": "58R8bgQEt7ewUGoCBBs3VyBRJgNchnXBfcPNxd19r9UsyzpKEyW5UUDWrYMJxHQNEBWYCfkoFuRgbYjRXfoq8qqf",
  "key15": "3uNP8pHF2GC7z1x9RJviBBSWBku8d5mgRrtUGPHBii8VHBAzAiVW3XojtzqucesSw62Gjk5wRCVc3CKUTMVRtjSs",
  "key16": "SR3MDKwT2RFVnpLVCrmuXzGHA7kqP93qJP9J4rVm5AUqYZoUrSRVoBVFmsED5PCDsZoRGfhksNrP63Rse8KbERq",
  "key17": "4odVbKLtbppPePRUEr5z5kyGWvkCtDJeMwf8h8LwD4yoDkQdk6LUnJMqtvG8q4UJJcw16VigF13btkRBcpiPGJyg",
  "key18": "2VzLFuDhKWfZRSgQtFPWjXsrAq9wPe9arLSVXLjp9RaCFGCJQxZ3MXnijSMkb45NC5Bch23E7FWwg58Sh4TKGtq7",
  "key19": "66WaJGMQQh7ZrxofaJy67kfj5qTxN9R13hREgUPq52R6uZ2GFu5YEbYxmyMa2jQCqKeVH8prxQEsHsgSbmqJY7Zk",
  "key20": "2TN5tF4E9cBmfWRj9oQPE53TNPrefLCibcJHLpb4ZJvtA3NxVWUJuh3wSXw3cofacbHJroSQsvErt1JNJiSaTD9R",
  "key21": "wiznaW5Ze9AfivtQHYnSx3exPiSNWWDYAhjoUPMwgp5Qt8GmxWdWykjJyCt9VV6CDTdH2gFXzbqdTeEZrwH85T2",
  "key22": "5nz44naWtNpw2EvZBXtVMEwqaxBnhXkhDbKmd48bV6h354M1u3jcgktMG3hTzJXi2aFfAtSGVbeTh7W4GWwoaXid",
  "key23": "24BZdU8G6NjKSM4gh5v8DEJgBNt6EXgyZ6s9PgUj72K3MPurX6xQ8DA2u3LXRPYeRBZ7FqhTDYyyLz3wfK6Hc4f4",
  "key24": "2bwV4hHsaip2P5W2RCYLxmtdChCaaDYe1zy96cWKEBLe6XXkHYxKMWBK38rFQLkXHt1Z9etWxLYTY7BB3wiBRsVA",
  "key25": "567hDxmwD2KWfGwGowBnpX7g4a5U6qbDCXyZbMYgf1EUTkN9Wye3nNrsySpPZhmPZXmMtF36WPqfw6SGviFKqg7q",
  "key26": "QffyamymTR6kBzqiYuHcoo47Wqq2J9uqNS1JVBLiAjdk524dDy5NGqoQBKWvwo3Rgpv8nPAxcbT863osS9fTLAh",
  "key27": "5NTHGRR3qdM3dc8KKdRVdXeTw2A29ej6ZDbnVBor37Nbu9GNEz8pMQLLzxHPJTXPwvDYHvDHaFtzN2KrPSQ7oHcY",
  "key28": "5uH2fg3JaequxYt7HsZMUimH6m9T8ys8LAakDFshuU1DSnoSEWN2JZscYTx3Z2u4FimzccjL9vuDdMR1R2ctYwMy",
  "key29": "3Cu8iAAwdP696a1jreLYFFGGTmEP2cAsnRQFT578VEM5eNdud5k2BwUaTm3fxqW7V64HpwHbCJfVCRHgqQ7ae14g",
  "key30": "61gAi3R9hgGLLWqukXtYEWXftB8pDje947BxRVXtksC6UBHLUTEKoCe26fGFuuomRoxmTAkTGSem8btFia91gdr9",
  "key31": "2h3W6TiXDS6eckN9fh4iwU3xsxsS4dSWQoa7moKPBsb7SukWgcmtRhc4KBwdRZhjBpLPwkh7k9RoYa8zTy4G8ypg",
  "key32": "iEHtLw9k5eETueyHvZcghQDxWYnC1iL1gyBb2nzzaeGecadiJqQHHJVmMuYu3XEqpfVhs4Ubq1rStQNjKdo2fNc",
  "key33": "oTxzL1duk2pEjUfXkJzAvK441beyWci9MrStCaNHkhr14GkTBieYBiYLpu5zVvtHfM8QNJ4fAkxX4PDBxYNxeUh",
  "key34": "5bE5Z7WzaBqPeKNA1MQM9V485bCYpSRB8oXiM2J9rxAUbfNmBb5JwcaDpQRmyfBvobeA3SWN6dRHCKEFymVhfDXy",
  "key35": "5ZaWnszUkXXJzmTrGm5qq6w88oto3MLKB24LavMK5jxZwojKLWQ4eHYT8xUf8acvwLqTXpYqV1YgKYGs98FSqSfu",
  "key36": "sQHWaXi9GEG7qnMn4pDzdLRWEmaZioZ7QCxau825KMbww4BoxFNS1YnWswyeVfsJPxpacWH4m4QR7EwGBiWoYQd"
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
