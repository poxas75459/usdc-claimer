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
    "5gHwQMoHYgtQXo7g945yuhkrqYMeoeRmzPE2Da6iSrQqVhCMAKwxVzUTSc16joVHSuoeFAjQDqqkm3UYeEw56RMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KcYKpwnV5PyhewJrmC5Q7c3j5oYr78uvHiwe1ncJv6t1onX5h3AoGBpaMWnFHAn3Z4FTHD2VFwd4PvVeK4YTfcd",
  "key1": "3P63sVXWm3bB61TxCtPvGJBP4B3uUjptjuwDwMt8xjYsGLaCwMGP4bwJJXZ74S1T2gsyCQ6JNVtrHGtDqQh7or5Z",
  "key2": "2U4mtgFu7KpyfXScvU85vsCLaZR4yAjNTGnWJkwepbGo2ZV6jpsQQDuJXyJ1XVGxd7h6P8ybp4afMQaajz9jYo1L",
  "key3": "4S6J9e2baGTRc2zHrdpbprvV2cf1PSnxUBJArQMSqYv7NxmarZ7ibwCAaYRxTRxgE3CJQxuXuARnswf9vjUnD8TT",
  "key4": "2fjsdiExPkkZe6zzJh6ZogepLbjoxiP4gPdwBBYG5e2RaSHYmwzSZBSNKG41emgWF9LxgppTWYAKqDYjRbUUN9qv",
  "key5": "4Xzj7GCDtNBGzJsARWrXgi5BCjv4opoUr7czCY32gBTMZmT3fFH91eF4L2UjHtccJ6KgrjRf4WQfTez2hsNPxJ3p",
  "key6": "2Aza239jcDs8LLiHx4vKHZFGzZuB24dnz6gMBEgiik12yCDrfN6L9FM2bhjda1fNc1ymxtghSgDYZuKkCs5drMgD",
  "key7": "6491GL2DhYPaRK5SNkB4P68UJ7sJy2yhBjV76bYvia7oC5Qpxu7vqj2DAMJaT8MFDXvLvSPhznakUxQXX625rZZx",
  "key8": "56caRsikXwtN1qXGV9h5YNLtzevrtgTV4azFKmb5upUbd5PDMrZQePkUzj4KNBSEcquqdRpMGbs4WLJS7SY2EyHm",
  "key9": "5bScRwhEyUBed4TWtwYXS975J8KxMwAwe8EqjP65nqTXDGLvGtB9edoVzZWHmi7BD9uLiCJZyd9cwdYHkw9sEupt",
  "key10": "35iwbFN28MxGtNPsLgTEwmbRJnwvdqaAjdyFqgAWiuJdpUpt9bteFttSpVC1icPkUGtRF4gfdMxiMtFM2ByYUr6n",
  "key11": "5BxLbB2xupaJe2mXESbaitC1q4CdNCdwkeUPW6sMYLjpokk3hCdn6rHKaVy7q7RXtBrgJ5r9Ym7Tzj4Usdzbu5Tb",
  "key12": "3574suH2CkhdnqygP4wXXdVatJwFrbk96Ueo5Sx5xRYVHXJ1m6Dinaf26aXFKZanL3JrDwU6Tyaxv78KXaLogCCq",
  "key13": "325zpiNfzHousDctEivtem2uSrJJ7opSDXuvoRbYraEeKYD7rjPzgK276uPCzxPa3qGQuwV5GEQTQnSmZvymU28c",
  "key14": "oau9grzHZy7kfHgp1JWdQhtWrZYSXpzXmVt7dhekbQUoo7ZvMFiTD33gjKsH5Vvj3aB5czjM13yASfbXgid19hv",
  "key15": "5ee4z6YTHzzDdHoBudqMRdqo3GpY2DT6Kp8gJdfSTVQgzWPdyz4MfGyzUwqdcsGt7dbyJzjKaYzyym4outcSwCEK",
  "key16": "5kUGx2AoABkfPj4aJ3aTtaCVBnC4DnFXDuobAVxwMUwhjZvRSGLmdRsxoFKinWwh3MswSyiCCWeFQpuq3CRgKyPg",
  "key17": "656Yjftvupw2qpZshPPUo9zbwoEbweVFQ2V7udvsXSVjR9QDhR13zZknVGkTZvw5pTMjT7UPiW8d4gkfAHTceoFJ",
  "key18": "3FTXQTh19sFLtUZSVt23tb2uaEhwATy8av1NR2wMFb74ydBUgQvpb3dNysUnVzXbzz3DK6Z18fcJ7FKAxRHPscMS",
  "key19": "MFZPRA4fEHozDFpxPAYpnANLk8eMnkSF8eFP559mBpAYn11U7xHVjjRkrxocg6Cene9B2ooJshAxZwxMBexLMjf",
  "key20": "2nL6ArFG84kNR6KZw2B4MFziaB14nZRYBd8oRu6Yo6mqr4JgTZRaUX6r7htssEkHtspmXo7HWWKen4Q8sJ3ynwcy",
  "key21": "2vH759MVbcxHN7fzkUpyJNb8W7rNk375bgs5JqtFqLvqgwLfmoovUZRkiCkztn4BzCeRwHQzGwxycDQNHPdhhC8H",
  "key22": "5Wsvg6wtcNxeu8xTBjggugw1s5i2H5G1V96ZM7aaRw5TmK4HLtmqgntGCuSRXVejn8FM7EX1kT5Bfanb35hKi455",
  "key23": "YKTpsicXGTWgFXpaNJHFrYYF47K1zDGQ9YsQ78yCwgvm3sLRjH9F3RSjDzVQ2oQKSZo5S8nVHNUJ9suP2r42nJJ",
  "key24": "3sdGPeRJt3ZPmzVFTo8uCiUhahASb5YHajUFbBGqBx2JNcFZCJDQaaXEyneNgewFkut3zr35AiBQ1nXWKQ3Q93f2",
  "key25": "3BbbvkdrwQhGggmebe62YeG6YzN5vpU9yi3VDjb6yeZrWT6jmbfsBb4oGuK9acs4SdZRppPffr8s4DQAjqBfafms",
  "key26": "4xLTcXC3HZ6Tbz4s9WgDtjKnNXKoKmD3c9QXQZJ5M4C1DDxv7reErW3tD6cfrJXBBBbvP4J1B3BHufYUfyw7BBnM",
  "key27": "JjZxFrM7EkRQC1VAF48TJg2p86jXfxuNk9oUDhRzu82LmGDcK1ZvpDiFtpWugz6iXzNDHPnrk1XcYkeiLWZZQ26",
  "key28": "3LcsGUJDTmHJZfYXMV7Bf7M8xia222WrqqT5oKAqqayXUeTWqeLCd4VMYtXAu9cwDekLz6c66T1iwrayjQHZTQ6b",
  "key29": "2hHRojiENnsjCpWpmV1XwX3mzLSD1aLDsWovkCDk9AkfiyC77n2T26AM44B7jLZcfCc8iqYosHdrwWqVP4VepGE4",
  "key30": "4NTfsgVpENubLV6xAD48tskukTF5wAj5XFH9ZexHEz28Cr6ZbBV4bWaLbpnFikEHacTNQBwzuxVYPHb5BLL1w67Z"
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
