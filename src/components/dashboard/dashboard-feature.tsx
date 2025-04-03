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
    "4N6NEBK2wfoX13nAPmyEMAMHwkEYSTRjdzweJWmmAyUhHXwRsubccFJQNsTn9pwYTQP4roVrPkadxdfoAhpv61Ss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ruKPymAt2zrTfPru4hMJS292PwYuR127XnMSKH72oF2fWv59i9H8QTAWbk3YaVjBBYrqVbmwiMCoW2P99baap3Z",
  "key1": "CbRxfQyrVejeWjq7bF1wp2x5Kernds8DUX8No77wZF338pBjtd9mZS3i42g9GBAMxe9Kj9h6FL9EgDwUZz78fXa",
  "key2": "2TcfvNGpZi7juYS2GN1N3QyD7763VribB898bznzEaCqvR78qufhTpSWVHHdXoCVwbhw8QqSnUb5tr2GZUh1SJAm",
  "key3": "2Af3urmL4kwrv2w8ru4hmmXnEaimXNJWhtDPeCoJ2wM3ToynTyobjpWxD5Nks228cVWhyGtPRUn9YnbuiYN3FDUh",
  "key4": "4MrnbdRQXsWV6vtXGvg7awHW6E78omceT8yXz9TQBzmg1A28Gs66mha3HV5YAo5LdHm4dje1ptkTPUUGf3uGhGeM",
  "key5": "4Wyka8minfB5z7847eMmQeqtJowepLyyMYy72KYSaUHvJJP6CzMxSdAueA5ed6XRaYG39S2ijNPu6iQjBUuCj26i",
  "key6": "34CTQaL2tnSu2B2mJRpw34JRrQvnWhUahM3GVdsTyp5gBMQSLLd8rsbMCB3DMBx9KAoN2Pi2sNaWVK2QfQu2RiuH",
  "key7": "2ApsQA1XdRdWZTkTM3CdqiGe3sqPwJRg2zzr4aAzPHYHeLxBEyF29awXG3EEM7ZtCVGX4JtwXWHSb9NHnSHtVDyE",
  "key8": "TBqvPgz656TXvtrnU8C2U2sBCt8EpHuMsa2jVNuXDvyw1yGQkHZc8ZwsvbirC3B4y946RWwxmofx1ugwVhrUHSt",
  "key9": "3nz6TAxnQnqB6XGbLKZDcGLBjrDTGHSaLwacG8KAZNEe4xigAeqJYY1fAkEKQrdDEdhYEtrSNx2cAFRa6XDBShdY",
  "key10": "5YKZ6uS56GrbWYHdVC67zG2ESTuSnL7VsPhifoYqHoVwjk47FSwkQD8j8HHb71az3czQ9gmRoZwmpBFP3rCrn3Hq",
  "key11": "BJ2pu8W7uNJ874hjxAJRyRurGT3dL9GhioaCfxZD7Jaq3zS1vmAvydVmc52BQUmqVaKXEX94rZtA1bmN486ee1C",
  "key12": "2Xgno8YiXqtQrVPTUHuZ7GJqQVC66wxuSxWwXzHu2oux4Cb8BfDzpWsjvwmovhnoViR6vnqktJu3qQVvjPGSN3Ua",
  "key13": "42QyGjzVLtXYAbvTV3FRTyr3LuTvXNm7ABnAuKseudbjowAfag57rJcrAGjaKKwmC3CRFPZ2a3ghmpuWMSjirwvL",
  "key14": "2gNAFuXWJ4EZGTEPb8Sy11r2qaM3e3NRKhmXhNuyTY8mQtnF2CHGoFXZwYBGL6AqUNkWLnvmxtmqVDJSi8AXa9yn",
  "key15": "5iYPjY99BFMBDjZjEtvjoesuxbRv13hP4KTJBMSD6pGzGSP2cS4ED3L9ojrs2qQGD6DUtG1WjcXnGFJwfBqg7fu1",
  "key16": "57UMNvGaA1hD2YSJnQUzwS5MLcZ7i8DtqN6QiNZu8fgNZh8bfhn93bPEJS8ZjPxv5DZUWq3g4NencSYzT9UDnDCV",
  "key17": "2yqF3cAeDbrKutqWv7oVH7TMbGd9zQEminmtmgHWTVQsx74S3XvbmW6M1JoCQf1JVU5BCbfXsne6wT2ejHZbCeTv",
  "key18": "24MyThqrCpvQVohzZGqBRdMFtQ1U7s8TyfLh9Uu88G8twWjuPcCuhFEd2aQk5ZxrDmGJ8s96jJ7smWrBYLnhZFEh",
  "key19": "4iZKL52SS5mcVKj6QLe7ZVWV2BEq3iE7Rqs68ueCCsn2m9W1TEgLXzEEE83mLH37SfjHumkc8FXYeVk7yC81FnS9",
  "key20": "5QbPd2DTJxspBhWJ4GrkbrSxVCmomqQoWKzf5poemgb52zFUz2976225zrwiyozZEvAJ6aM3Pt1KWZiQPfGrrU9M",
  "key21": "2jSYkArAPbZybMQebkLzR6qwPRhDc2WuCGkyWYzi76np9rmgruCXzY8wgPZwZ7Qh8Ddrgwcg8JHJzBvXs1ifK6Vx",
  "key22": "cdtouSnjhVguwHXdbgPvKAAzmuPrXT6C85RdFkaVhSkbumXMwYD2F77EhMgk8fd4ScckPcBrtgPuPUbne4ZK75i",
  "key23": "45gLaHymUGW3EmfSC7fGXjVqqwF95NB9gE6ftpdbhvNKrTXpza8TcpfgwA8W69naKQCAEEZzthMwueXMDvUBPi8w",
  "key24": "PmufqWEVin33EYLd7WEdcauZ6dQG8j1VVpE7QzXRNJMoDJocLY8MsLs6AgUDKupc5iM261xhyjdvCoVv3iL3zf8",
  "key25": "5W7YucDPhqWaNKf1R2LfBFz8hXjMGvpcFAD2SNVqZsrtApsR9UQjmp2MgraoWWTJbpsEkjvjtYExNnXE9sRFq7Bf",
  "key26": "4pqWgzER2Lthoem679wFmP5dTXNTkedpc8DJNmb9t2tFr5U8fYecEGM5goHgXSLSjdMjdedjkY2oyoXfheKTqYhp",
  "key27": "e24VZFDnEkCoSdDgmzBp45xwbQxK1GnrDFSrMv3XqQKeTuV2U22tMYWx7fDqGinph7MGEmZ2dbiXw2sGyarp3B4",
  "key28": "3oGG7oewEMdzQLVDpgCQh174V1yu54fY7rzjz1n3xwirhm7HgUpmCAhDBb91Bs2D2YCnW5Kc4S2VUfsGp5orTfzm",
  "key29": "392xRQD9LddbZnvo5Jcsob2m2dmnskekDZB2XpPoMGzjyBbbHCmtPaMqBJNwk3ymvM2p1Yw7hSmiW4qbDQ9CnNjK",
  "key30": "S3rptU397NCC4gBZwbcgmHYWuHYmv8j2cHbh4qgGT4VgjAM4wqZh849U8URpQQEkKEPc8wcmX6FaaV1ygys9zB9"
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
