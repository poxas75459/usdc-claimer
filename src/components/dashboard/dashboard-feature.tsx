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
    "64bEjmyoYFRFJ5He2QCjGxPr5fGqJzvNufQW1SczMP7CT6dR9w6jt8973YRDxaPL6v9uWdWuhJapzFQH53TauwPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TXXUXX8B4pFEw5AXcezeVe49WRUaE4vCinAzQoqQnggjPXZDseG2gGdwv4hqoZGgATgKLBQ691MdvcR918MW79K",
  "key1": "4RSEKAGx3TERk1HggfCxgMAPgNeMLC4tHQSoXXF2huqVxjzvyctq8msSDzpajxRo14omydvnMvBw9tYt7hfgxSkH",
  "key2": "67bNCbmtCoqBNSgnyN89uzjAqepi2te5qTeSGnqUQGd4GJVV5iCyNWJQHcFd22TBdDtWTmYqjXZ4q3L3vYLpvbfn",
  "key3": "23LyW6Kb54jNb6dEbYPMDb56LvBWacjQiAvE3qhupp3ZsWpP9BNfk6iUWP2rR1LYPNPj46CRqRnh8KpqBzZKXK4c",
  "key4": "4uuk8u87NLp9vEYuW9FD1kH7prp7JxekBRLU4JPZ6nza7T7SHppqN43zzyWhYjPXQTPxX6V53i9amtjNeNRSjhfP",
  "key5": "KpG6byfk6RpXokiRb67t29FVbub3nijyMS3qrjTVtWh9ZBAgb5tmEiotpj771hPVxtft82CNU82AoMkTjEv1Eae",
  "key6": "28jz8aB5WkFdQ1Ba51sauQKYBq84ZEPz6bZrYyBcyzoRNfnebRLe8YWu4TdGebLVYzgFgxrswuk1VpTKtf55reTU",
  "key7": "5pREMSBxaxfPvDLiUT3xttxzkr6suxbXMX7q2xaoBMQjt2PdSD3NEfG5KfU4HWCfguM9hWPj9CLGhEyRppeSPqid",
  "key8": "3gEWqzMyaju6kuJsPLS4K75AC1w1wW8aMoHKBZPThu3bQcN2AZxdj21KhFCNvRB9PHaAGmAjUvXyhLEsFCXGB7Dj",
  "key9": "UYyJTCYaRSR69uyq9vZHmPPHYUrv5EzPoDuxUq34DyQk2Em3PMeCmpL1hEqsakVX9zkQnCUMBMVeGXE2TiDLBJH",
  "key10": "3tjwbPAgykxUUTa86skNpDX4AQsGjcyY6qikaYW7YtgYeEeYJb4K21mQVFLUkGkZfGtax2zJFUiukdWSDaebUGF7",
  "key11": "AUPjdJrsZsmdjAn5iJVvNwndoVLgUcFsocb1vjP4VrmtG95Tic7JZoxq1em7AJbCYJBaLC4YpnEcxuapyJ2JjLK",
  "key12": "diWJTWB41hhHihrUQ3GW3UY4UJnxdrXmv47Vw9qgpbbfPPzwCCWUYKgT1bHEGkmV8Ek8bWkuc4PYgoZRU7iuGa4",
  "key13": "4DTyyXEDSTKz87oER3iptCWQKgfTxwUP8TLgXYFwJ5sH8c1GUnzhaTuqdYUc4fJmQzmU57Q8mp2WoPWbM8auP1hE",
  "key14": "4ov4KTuJ1T59wKCT5Ehw8Sqw2eUhjjgCHtj3VjfYktb3KuK26Msgz294Xa6vWsuc1y5TRdbVyKrM2qndJB47WkeD",
  "key15": "48KveEGp4qia6CoUaReH6rizPJnS7PmeknNcdpcAWb6hgRQCYP1JD4pLKfc7typX5RFRAyK7bXdhRs18ANZh3BCq",
  "key16": "4bSKpwVcSM8RftyLmJKK5Pj5iBZCfc4oMDVRa2WFiqGVT53QDbxkk9WT4g7jViHp4NgM1Xxow6PjLXsWEoZNsgii",
  "key17": "4PBzcYBEEKbdn9RG1KcyzQA98VwxV5FRf1mpmx7Q1oNjft1yPDDteuaFV9i9Vgaagaewp4DWppe2ARRiP8sfoqQt",
  "key18": "3vtNVtnVZGDrEjoG2owFjXbVRJ7wMiMCeunwhWQsu6Jjf1dqu2vHzXava6uCM9hmFC1Qy7KFWVd21xVdWgb82J21",
  "key19": "3deBFC3eA5qjkZ3d4mtc4vm9LxMhwgWYdNsFzMXwPJJdj9skEeqwXu7ERT5woaDExGDVvNLQVNS99knHLMcLBv2s",
  "key20": "2v3711h8ydFfXHMzw5BnQQKZDdLBGiruT1wsdofdcM42toCHqu3ZBWKihgHBug5YuVrCWynEJNUaKnSxkdtUhYLx",
  "key21": "4MrUx7Z6DZHvcMe8Krxf7ekgz4hyJXp8nwKfmJoHf2rto1j9UH789rhmGY6EQpngCGdJZFSvW2tcLjiGKUdyrCNw",
  "key22": "2aRT9cqJPcqob9QS5yNnDTAhc3f9KDG9mb4SJqCrW1VFp3PZhkWUXWX8x47N5GGEZ9vnWSHTHCW1B6heWfAfpiXL",
  "key23": "4v57PF8Nv6CNCA5px2FA5Yuna3PvY8Zc8DFV5wBCsDb8HEJy545RRTK3j5tZyTzYpyweHLwCCQefgv3jqQcyqGZs",
  "key24": "2RGAC7kiPuQDVTu5YVWXgRscU83FsVHTuGcCKSPKMrXt5AACQJvaLG2a7hEfYSYTaoEDLb3puW8opVoQpZMk79vx",
  "key25": "4ADST4Ztk9dcXzEEaw8TYd4NKGP646HKecLc9ZWwpbctQFMjMADrpRNNkHkeoSUQx9FaQAWp4krUEHAgWg8e2kfo",
  "key26": "5tTwgsrUAJzKbmpX35qd1i632QvpNpjzpFzz7xirxfJCe5W8nFJ5WatQ3y3g3B7ymvDCEPrheXsZoBwZR5AycmUN",
  "key27": "4Zc1vokbqEFWMadJCz2dEdzSecWMhkCaWW1KeyKFsyzePLf6SBfoacytAQJsdgPC8YaztbochR2RUFerNhGidRSH",
  "key28": "5amiyCN6KpZdHj3yXutoLjeJwoPQFMjhrvjwgLqUNxCzvDLrgvKHvSN88y5QFUtZCf1wr7Ag2YgqJraUdoX1u98L",
  "key29": "5xR2xCsbWNRaUekp1kszq3dR8hYCSaPdhJffvLNPQFTfgWzbGei5URxYFCQApXSb7YU28yEBLYajVLZPbc6eiXBE",
  "key30": "2vvzLvqYCaztjZscEJWYfFSTgSGJjMxTPagefg87iqFMHMYxhS3Em5PyWNg3PKuucP768WU7JPbX5CdBFED9SWCq",
  "key31": "3vDzgFSdzzKkaqm9n2FJLR6bALZXDXAAg5y1VdCesUZ22XyLYT5u9j45yRrwH2WpeLW5ZHinEuhafGwGRrFj27YZ"
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
