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
    "2GjND6cBgjtVxrwhKvNj1RmCqJTpaX8t3sBMhw35Ts1ia1NoVBYjGAzt8fiuuqnRDiwJ5SEjrBo8gfZhkkKDALPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SX3dkvUeHiVwYHDqTB4B4We3oECaBTGefc8vHmmpHCNFczR1RA6Tof122BKDouzY4gJD7ELAW9XxDR5EkVskfnd",
  "key1": "2ARxXcNQrtHpVSRZoVxAjLb7NXEadfjCRKnXhoDXxtn5eArtU84twAJZf6CC3ymf1UTctdVkw6vLnqVGpCw5RJt6",
  "key2": "2ZptCfrdjhYBbyPEZ3grcxhDnJT7gAKZYVevowU7fzM1QDSHK4JqbCN6ZSap7EZq3dpr6CcSuf1VQQpUdsPNnLdk",
  "key3": "37REELSZP8crMh6GyiXSZBCMthAYTXsGa3VG2JAkf5fDug3SVUmiR7cFYrvsRu8fbYYsquHtGkCQRc39XSEdCkxN",
  "key4": "5Zv8SzCndAwzw4wzRwibhjiEJbCqv6mJ1Zjzi3vc8njvruBApuaKQCUAate65KWsyoF2XgiYNCz6m5DaF7fTeExV",
  "key5": "4vwr2bw8JCsAZKTuGudcGJrSHfvBSjweNgxuAB7395YqJkHvixx9Bxuj75Ro1bCNDYXqUuqn2m5pNJoDMA6wWAdk",
  "key6": "32JwtULsoYkU2HwuAzuxBnSZP8v4V18Gj8hn82a5m53QHYYETDiq4CSqogQzeQmLCwZiT67TucoV93JU1sMAW9C8",
  "key7": "WZmNroB9n1kjXx6GEvygN2pP3u21JNS6q6v7JYvhHvLNUFavT5SbPoeCuksKR2cSNkvRwdtcSsTtocefN7E4k6j",
  "key8": "32hihYkigvEYdGqKindRSsaJ2bPH5P4iTixxN2JWZn9ZrvJSshwnbHA5JgRqwV7mYwKDVg55XS5nQ1vdAiTdhfy8",
  "key9": "HKP34smnPHy1WfD59fx7TEe3bHja9yvkN1ajGJdigYLgpDXknzbfsHpqcaZQAHZc1oh7gCfEbBkTavovFxMEKzY",
  "key10": "DvrdZysUFE8Q6gyEWr8sJpRxSWRGf5wEJAGsuCxNMy1PGKsuLtatDFtL3FzCBvJeDXjBAcgdehAaYd3ktbAd2WY",
  "key11": "26KaiNXKudSnYG6JyghSLRNkf8tEm2rVLTDo3wpNagn8Nq4S4ot1s822dpgUrpCzAymDEYYQfi6Zup4aMavxUJ18",
  "key12": "3Jj2yve584zBjjhyE7QuYCCxn8QyuwETSPGEssCq2qP8BjBmXPHUHWNhfrjHf9ZmyxRJVyiZMykfa6nW94dVDZio",
  "key13": "ZyC7SkpK3iPrAkutLyE5yDE4phcd37bafvZFAW2qm6Q3t7KokjQepeNx43QT95JVoM12uevi88EXDbLv3mVvMcn",
  "key14": "czEi93FgVMVfHei7pGcZpo8qSu36iBVsQw49WyChu9EvutXAQCDcHWGKL463LBEmfNAzQ2z1uxm5s4YCoqD777c",
  "key15": "4xTaMKswYfTdsU1dsEDGrKaSKxo6ib51xL8LKee9jHY4Kht4djkA44ddvcP8DAtUz2yKNJrxnfNbdUWd2offGysb",
  "key16": "5yQupQ9q6h5u5M4FbxV7YmT7tvHWVDYbLDrG3a8RKwafQrqnYgeQFNyYQmU5G1VSL7QsQBwXx1wkaP3ELUDhBLMq",
  "key17": "45egYhWXbyPZ5Q4QvDvJaMdZ1c2mvXuKNhbf4v9EejBdeS988aohS1QY2jWJ83iuVcbmteDDcKYYbQDgHeEzogPv",
  "key18": "5c7g93znzezYrA2ASwgzQTtqaUecwwHYpKzrXa9Un4nGCj3Mvint73aMDKgxRmVGPE4t1K9upFdzJkW4Pmhp2WjB",
  "key19": "5FfrN3cu4jmptL2ozmASiPGAsANgP7hJqjDoRoWVWiMnUeXsWViSCXCCpY7jtWUCGPEHfbcK1sxqwy4YtC8TXaMe",
  "key20": "2TrRByXZAGW9QQZceSan6sZiQABTLdXo7eWeznXyjqyLsjeQLAzaqDJM2PLixU5mndbuzGUyhNnttgEUtVh64vaD",
  "key21": "4eaEz7udNwiteBqM9TK98ZGCyjBA8BL98hBCzhyAhsxsbEdSAmS1LDi8t9ifnKD3WGmxT6kmuNwtQp3JYHycQWMv",
  "key22": "5GGSXsrFcHQ65xN7ZfB1WsEo3VEbTXSCoagksyTS6Lr7cGKkZS2obpvibZ1B6wH9dK4Kb2cy8HKF6ZTAR7jk6VST",
  "key23": "48FyjffzshbDiVDTyeUqKkMtw3YHgNgvSgVjENn8WBSfQcDCsCLJQCcwdHszux1QZCqxfEDkLARA7uV7ikaj1Lst",
  "key24": "5qm25KDP4KUHkJxLRDR1NWVaa22tcLPBVVzESm2zyrYoJvbuZLTekC7Bi5ndyZ1rZSe8o59UdqtRtEwkVchvRLif",
  "key25": "3EmD42mAL39PRvBvvHiZgEzm1Hxs7TgB9SGuYxk1jve8gNJTqV6cWk4ydmcLdp1RvhZ2WW8K9wjYjS9yfpwp6Tqu",
  "key26": "2k7SwX49jAdWVxavcCG2u1cyo66VT94brQzAE3uZLN7auG7SyGucJ4vqHHAhvbSFWR77fn2HwA9NMMGhkk1221yK",
  "key27": "Y96YJyhsdWPT4bLtXSS16UcMso2pDjrb5714QTyhk2sCKQrAfUcHaPsfkMXVr19bnQYuKh3CsuuW4nCKy67TYnh",
  "key28": "3uqrafQ8brzC4u46XkqvrNh5DJAmDm3kJcPbBBWSULS6hLvFo7hqZa9nKrsarGskJnYfS78EDhALpxPCH7iZc4hT",
  "key29": "2XDYk9wjQCcH3rHBg9C3yNTckoVGK4kAzC9kAmDUxYucHnvMHbfeeQr8wWFtyYucVMsrEfaqMELu6V4QxkmHYPdP",
  "key30": "2zYRW6b96NRDhkJG3j9fGKF9XRNGyCvM6ggNCEZy3TUDCZJh2HWTi9khF4THLN548J2EyPX9Ch7fCUZJEspr9iRS",
  "key31": "6uAuhvSQ9sAJaAR1tDF3xxqqQe8sVNv423vurqxzZYmHdQQeXYD3TjZ7rwdMmeMnKYiUj8wyggpBEQkxG3qAvKe",
  "key32": "Q9roz9erHRbYtVsH1ZpqhgBgdAEufnDzsXfu8wJFFVExAUTrKNNPuPzm4QJLyhYWBxFMWW4SAodh3h1MEWbdvtS",
  "key33": "2wdsoDbK9djj3j91zP22TZNVcSNzJt6iCjWkXTwyXv5JrDmQ4xXKDA5vd2vj1UQu5Swb3kEaUv1fB4DvuaRKP3Ag"
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
