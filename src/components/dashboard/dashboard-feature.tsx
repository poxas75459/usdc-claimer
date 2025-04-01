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
    "51azu3tXYtcJDQmmwjJ8cNBdp5Y4UPNwB3wRNRALYKdS3ybtJfYsbYV1pgG611d9Gtg4e7spRFtjqXX8viovw8eM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mdN8eMBqpjfeBD5j2KyrUpQTjbKQwyuaWuFynUzyoseVhdGHhQBkrG6G6MVy18jW5GnLxVfr5mBHecZX7Z9Y3tV",
  "key1": "4gt5NMFihGDuSrEod4aGo6L5wSgDWh3vyf7QtEgXA9dursgwVsHS9DWdAKqjiAEPkcyXFjcUGWAztgGLdtuta3UX",
  "key2": "2ABP7gcxz9idbLeJYnCEVpS5QMDMSSGJ3Bdngn2XU7CFCEzKGqCC1pK5NHEmLCKi4r3SdGXPnnuf6gBAWo1Po8RA",
  "key3": "3pSfBfBwmhFFdqLZuquLMbucrPhCiZBxJJnj8WXVmYjN9RL62Q5h8eTfBTD3GK7oYr1B8xhg2t8ijWjZfEv45Jak",
  "key4": "5BogfhQCfwnej5PwHQsjN8z6yLoax1fKkApiR1qMBVWrN41oGrHYStUsHGBvnvsh2KxnTGD7XME4PDuJKmdSXtR8",
  "key5": "4RGFKjp61ovGbS85aFJFnRmboR1Djkmh3r2np3mc68yevvdoTkXf7z8ceP5guWERmXrP9dAXiX67ZDTiceaCdRik",
  "key6": "sYnYXjdt3GCvFDkgawSoLYKdvw58x3dKb7j9TpNwhx2MfVF3PgaQWMvG4SEt2tLHYNUbZ4Wtz4gu5fTXBoALtJ5",
  "key7": "2WAcYb9dADsPT1ymRfVgYRRudsty89Dw4QzEwVhBw8j3DHszeYzv84kcQSt5yZRNo62xhKGmtxGt9exBUDt6DfeM",
  "key8": "5Q2mESVKnMH91asF4axLQBR8M2pYj6Gh9u9vBsB4mbnfhoGzmzaGJHg9aeKntC3N5CPmeEq7Ceteowd4SrPTAoUh",
  "key9": "3REhuYb5J8trxzfCguVSGHnuu9Tjju9fWnFuwAsyqpHRpa9FiQDJXn7Gx51MbwLfuJzoTFd2Ew7Vj8fHFRqxDuTd",
  "key10": "29nnwsNHiH9ppDoj3SSkpwFQYmxUNQ1jFobY5VqCGAwMw7zkpD3xM7MHhJNAvBWoDyLVaP57pA2VT8qhx3BKQES1",
  "key11": "5ghdXs5kUEfjCdWqq8rVbkW2Ch4ggdSPYpFNrsQ2NVfxkZu6ssCbqGvTz4utbiCjyyMmkbX1dvRsvpABky89wAgA",
  "key12": "5o97A2CJE6YLsvcAmMByS4WuqV2w2AzSZDxeA3eSYHPNmciN9V3aB1v13tfD7RyR2MzbW177y9ygHG3SQk46y8XG",
  "key13": "UY7ic1kTkZFTPMZULbwU4N596s3LduzFVo35wprp7oP5F6MLdGXRs1zNr6GGLd9VmeqbifrMJPRPF9gCp2mxnEF",
  "key14": "TWhSqzXeqaji3rpptejzdomkfpNS1caRzu69nVe5LYrKBc2gjP7Y2gMMhdoyr7EfQ5S88kXDHPhbp3dxNJkpoJH",
  "key15": "3ufP6UPZNFEj1YynVfcuqanKG7Ywk7ek3K4qfvtXnkVn9R8Gi4jmSvBWLQepvpBSU6sYAgcyrHMSL5qmfAn9TmBB",
  "key16": "58jsyiZAtQ2dCsCZTRNAhUfEPXKrx6v7aeK7mY6s6wZwyKmq1LdFLaBwetLfdVm2xDTroAPz1zWRBGsfF4njPJ1t",
  "key17": "3ghXJuEf1aZqFsiG9XMqu4TqgYZjs7eRZFDqn5zDyPHRc4rywdNZ9aTD3BHoyXfuZP18EFuopwx67Dgnn8xkqM6R",
  "key18": "3C694Mxfxcq3vZE3fDezF4uMve2EaNwrXfxpHT6mjp3EjtmyTbu6QvFiX965k8Fn6A1MeresWHttT9eSYf8eVh5E",
  "key19": "mhdUiarT1XEPYyv4g3BuLCEx91R3gw1MBepyGydn6TnS4iyot79fRZkQxCLDw6ByqPihHdntMkVm7RTzccTJb7C",
  "key20": "2XrDBzoaKXrvmtpFJCfSXGJcK59Ljdpsw2d9popGYXVAevP4VZuDqfutw3zttQGtJELex3NJp31EVaYxJbxrGPnP",
  "key21": "4LcKsj1m9bdjg92Aihx2JbahbdzqSLiZELbirYgB8KiimSeqJcVRv6aaMqcUXW8cuseYr1KhmEJ3Cej13qPREBqn",
  "key22": "2gS64uRc7EtSdGZrCtCop6CNF1QQd4sQhktFV48KTnDb23NMr6qMM2cE5fhfgTzjyHrb4y1EDGKk9Q3oxTRUL6Xt",
  "key23": "2dMynaW2zCiihkVAf54zY76UYsir1tkWUSxb6tTrewRsuojnKoCKQffLBXfrjtN7ugz9BMhLwWgUaTGMDzymCntj",
  "key24": "4mnSq17dZBBoY5toYkQkksufsshDxg8znSBefj5SPEpg79WyvEB2fxKoon6cSU787cSnspWUbBgvax9ihRff8e6f",
  "key25": "4fMc7qe4KvbZ1chh5XDMkWnHSc8UA27uhGSZ3dzkbabSPjv8qqZ3PZRofAxbCnTc5cGcigXy4P7guu6wdbuQp6SV",
  "key26": "5xrzjHmWtNLCH4GRKFZV9gBs9MKU1kQR1d7SbUfPztAbaU63HkHNonAnvqwUHPgewqM4P2ptnMEddrZLKvTi1vnt"
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
