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
    "cejDWc4SzTr71XTi2c3xV5KyGnaxJqCcHeQnQeVBzofUHYkYEB5GprJh1hjWkezkMjVsD4pP13wXHEdCKwShi3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UW6vNkzaFwLD6bxBY9jqrqbuVpue7iL4n3qbjBeNYdKUPTUsKiJ8jEiZmbZS4enPXKmSmWNN2b3irNGTxL3vS1Q",
  "key1": "isGiAvyezVkfc15iRniUfDY7wBrx6qMRLqQC4gWdpPerTtbD4V2N87c9JjrGkZzfzf7R8yLrtNrSwkhpBeW6tDd",
  "key2": "3ZwcVK2BjMTsEx6HqHUfMd8wscnAwwxaY6GEr3yFQpFMFYx8x2mYyHAVMrVmiyw3dpdEYTXoVjEHo9NqRu5r5k7L",
  "key3": "5JCxgWsB2NcV3DnP34VKSUXCgDCKNjYRDsSM6EtiCLpcxZsp2QbQDU5hBPv6tCgU1LxCs1moeYAvLQeUYe6gEWNm",
  "key4": "km4e2TzCaZ1o4vsETVkuCNP53zFgB4aUmw9zFwWVsCb8Lz8ZBUGB3SoULW8o9g33rRBaxd9aN12UUkn4g7jk25R",
  "key5": "2bAw84YX3ZwxmCi6Skp4yBtQdANNh1SS3iJ6UCh6SLc7jAYAkFrxLJd6GDcqAqLvqi3ZvmQn4UYvx85Cnkd99QiZ",
  "key6": "3YSUxXeFVHN9YdULZH547Br5LvuVRPbTofVFnHHzT9c4nWp6N9Vajc2WYrxAJxtJKh5sS8QqJKDbxrRYGQ6qGETE",
  "key7": "2zLKM5jyjzi8dY52SQq9gSbNJyrgWn5Mtq6qpKgdvJAf9YjnQ7RMSTSxQsSd3kCt3rQMpF7M5zvPTEqSsj6ofRHX",
  "key8": "51Wg5KXf2gwzooehxGDYZ9ijteAhoT3mkm4LbzinY2qMQXYpt7ECnFfRooZaB7gPvm4qeYMvHfEsVqR828qmbHZw",
  "key9": "52C5YkadPkKQBUbiPotKdkDyuazkzm6iy3GULs1MNiTiyvHAZpxeMBZa42bHxXTehHZxcERUb8ULvo6RETzDhhG1",
  "key10": "4hiyy9LNbrLDoZwr78tERh5g4o5Kz5B9jGf5dZawk4hCpYv9Ctk7ZFkwFDZ9cdkbt9jnxei6hoyi5DrBSKeLokhp",
  "key11": "5j8cDMPJvc8dAhuMMDYnsh35Ny3QBJkJYS8P3TJo8NYvPzntBTSpLjhTpQ6EGF5ETZQXVLbnV6c1yFCkcZJLFRRm",
  "key12": "4jQoG1BQwoTMGrreLqn3Afm8wzAd1pPMFce4emKp1axuSVoBQZCgqM7TqfxsQS3Z8ZmC9i74J5irSE99Lp2zWPaT",
  "key13": "53vcSnJbCqCMnmYC9LzhNg7Br3uLvm28AaYcuXDsqU13m6nTqYo9WhGhQ7gMbBbhkGtYzGqRehCeZDiYYPLsUjwG",
  "key14": "3asuRUeUfCvdwz9kYn5ji4sa2He75s5hPGxZqwE7V2mANK1UVy7WsfQ96gzf2puXx9ssbBHA2VP3JU4xt5SnRJVr",
  "key15": "2WfsRHm3q32bNx6fhFBhxPip9pTUp5LiabsEvsEs96FKWngRV4qksErLDjpMPNe1noxSiyE46QHHsjpXdYPiTkUt",
  "key16": "5CsLsWA8GUaNUCJnowKNa2Zku3oE9k4v4S3Q2T3Gwp3Mzs7QgR1i8Aq715anBwMM6wAbP9zKMwwacEz2PP6ehSVr",
  "key17": "4vbf1wNapz1zw4WNuQ6PcN4kzJ97FZeEqMdbTgNFr9dv8DJMrmVm61mnBcrZUWFMnFGEmevbbiqaquNGV9FE3f9d",
  "key18": "4jtCQkohv9DHAsJuNYAj4yscDhFNX8ojjCUD7NAGhZKejBVvj9NNHY9yvLQWiggZXh78jBY62D8ZBFds8sQSYSAa",
  "key19": "2pJ3GUygNfsBfB6WDmDrWdVf6vSqUJ2YbdajAvqLM7g96FCg3xmxSyXpzhiEeszRDbTXEn3U4SRYSG5FF5NwRdJw",
  "key20": "3w9d3yodLy3LzYcV2mVpee6wxDRAta37cEvhqs96bUzJgCwKMyc3M372ErTZ4nPGG5YcbusdmY2RdXQePXxuLB9",
  "key21": "R8LnxMZcEknMzunZCyKWWBbc7CSQJw257RftcrVZq1K7ELcQokjGnnUK9MNzGyedvg5yfuWXHdWF5qfZJnufSLq",
  "key22": "4vM8wEQf6J9xJbSY9TxVZ1fgpzT6xuFzqnRdQzAYkBovEZp5UcbdSbY7nZt8H3eG8J1eSXnmzpbvXy53vkdMz12u",
  "key23": "5on6E7gmmYK8FoxaNj52jfz2XhJwYT65H49zMGve1Zae4Fj71gsMQibWRi6WJURW1JT4MactRyXLu3nogGDHhwHC",
  "key24": "4SYFHtmove6iXLbtAZXaSu773Qbo4dYZ2TgkwvrUsEE6CK64MP2pHZJnJmdHk5VsySN9b4NsJpGDrLQgQZFyByCs",
  "key25": "66nYvc8aULJ5WYqoUER5t1dYFqavzVJVKTq3Gywm3KpYNMvv8pjLoKKVrBSJrBW5Cbik1xU2bjtL38ejqkFdn2Tf",
  "key26": "5C5W9yVxYtLhbAyekLc317AgnoiDanESLrCrwVmM4DJ3Wu4U1XimGTsfw9sTrh27P8hsoyvMytNB5xyqt5YnheKA",
  "key27": "64vVDaoPHc1DV23opu5Czzq5sdy7Y9nxisYoyzgrd3GFrpNiFtNfef5wPcSgpK9bGqP9KnbyANmLUx6knYs5Wzqm",
  "key28": "4CEVfGN1PnBYry5CxdjX4Px1Py9UJHVUHSZYf3c11knqBag9vvMYS7GbZDLVRdfLWX4bykYNjAr5mtLfSB4WpPyp",
  "key29": "2esuJ4CXV8TNAjEddzua8kTbcTm9pq3LinYBkJJrzzM3Ptkd6PgjEKdRmeRPeWgdAitDJCA5MH6GCpQyDEcinj1",
  "key30": "TmweyTTDnMYpgg8mErHBrCMSfGqy7XswxAmDeLPHZATPQfgpTMEPLFQfZetDESGPTTRLMkTzMnunhHM3sbw947H",
  "key31": "2Nvx1BLEinv2u3UN5vzPCq6ujzM2JxUABvMijamtLVKR3VdnVpfZDrehj1jxXa42A3eQA1B3QAz4DKHezntC3wgy",
  "key32": "XQoJQin5gLkS1NwuwWTSmcdyjUu72RqtvSJMUVF57hFpFPNEyaMGpTmQjmgkDfruo8KaCcRoQoLV1zbMwk1LDij",
  "key33": "59rJcNoRrT6HYK1uQG861JjLRFKoDNBbgLFCk915vsbkRBCUmhcbU5ABTAVWdrkbBchxP1fHyUm6YgRmBM6GzQaY",
  "key34": "3nRhi4SLMSA5pDBibnLfGA2MVaCKVTYMmFetTkZqb1LY2UAKos9jcAJ1kRzP5akYSgeaoAMZ9uy72JTvPsiBiFe7"
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
