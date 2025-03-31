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
    "4v9KMJgqXMU3DwWhZXcFriGyTK44tsvEWT5ycthE4YyyjRJLfqDjVM51G9pUXP4Kf7J9uyziPZM8ZJNhTUW4imG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QZTCWC6oJi1FRouDMTyjvRumNumDdnfAdLmW8aJvXFwh6mBo2CFh6iD9AJ8ZLV1jmY8URxbEmg4N4JzB4Q2jztM",
  "key1": "55RPS2L8LuuU7V9NVQqqPbsR4hM9Rwzz4CJ3oFLaEEuu7i5NXy4CoH4chSvGujLdTquc3hawpX8Nteyn88nDUD3i",
  "key2": "3CHUyeqDyQv6vvutKQcZKf5GB7aqsueA63NKvsmiXuhrArtotMWgk7dP9FviWXbjitsSYiR2Cmdy2wCzG5wzStFM",
  "key3": "5QDFi6mtCaEHgearwH7KFk3HjKyN6nvehbmgAc9raJ9SFzLzYuuec1SKnJqo4sbCZaub3i9RjdwA5ro7Sv5Sj7dE",
  "key4": "5e8yi2XRHVzkp8u5mcP3zJgvxrKEES973MbY8RHJ4Py9WRZEJjtrLeurQKtt9dws6cKtQ869ZgAnE39nmekzUMys",
  "key5": "262YK69syTrY6ByjWaDpaNanL1g7KXti7qMviBfGqBgF3bHb7h6fpr4oAcgDuTnwgutYCMYtVHbNEWy9vs3XpnNW",
  "key6": "5NBzcanW8UAZRFbKEQGxxijTGfAUUFmHdmbEMCZXQXX3pqdZhe3sXE1LsqycTDH5WNJEDRYBcQD3QUAqnwtD6MoZ",
  "key7": "jLqBRaaASMG5BnFwj2wCFW1gww2vkrUGqMq8Eg5Ny52TZe96cSJen7t6gdLEBfo4k418SKZ6w2udN1XmED3uAkh",
  "key8": "Q9ajyi53dtQfcwtD8BmYsai3siDyKAREyp5sThyFbfxvLs3qJimNqoh38jS4ZfcrrTRazU8vZdGZTK7AQCULNZ1",
  "key9": "2JEdx7RhvDurB6wTmx8P9t8pgLA5UzfwLJMD2A8fZEZa6M5GpAP7e8fJngBSJyRsYb9rXvxPnoiWWyGagJ994f1Q",
  "key10": "DVN77YmH5tnNJ7S5o5SdLNcrewp2SDL5bhc8gmu1g4Te6eLXKNcQ7AgfBifya8ueAENQCrRdZpbi9XM3K9x7Pvm",
  "key11": "QVv5vxGKyW6FZ176Aikhjenk2AkwhcHZ7A8zWyoq43XgFXusRrQhjvvN4ohnkSxV9vS7ydw6G43fSp43girxU5b",
  "key12": "2BubiBb7cRW9sNYUNBUg5E1jNAbk8Rogc3XK1XRehbTgZEbqK4gbTiHzRYF8CYasJGcmApmD7k1wqkgeaVr44svi",
  "key13": "3DfXwBdEiJ8J9Lpi2D2TdbDiQjoBPUZMe6HFfx3Jyzjq2vS3d9ZkPmf9N6kKiYsjZ8gudKXkwijpC6AdUfYAKkUX",
  "key14": "3pQufpz67XbphsHuqBkntjE31vTamJDAXhmwTG17GWJW2HnWDsbVmHY8QqirivZLtscHW7xbNcQzeuhTmKTuiTte",
  "key15": "3fBFGFhFTGnSynpEvTYTvEV6WC6Hnf2nYdLuSdi5aw7mxUSNdcHQuQybwXFXn5X4Jhp5Pq9gJghyCWF3DvEA1jwh",
  "key16": "4pfsf9oxoEHQindvHLibDYwDUsMYf3wkScgEY2HRdU1rEChyu85Qwy89Z2b59x5F7BgSWie6BQC7TKS2CkBpzkkz",
  "key17": "2BxSQnu2XQRbuHo8F7RDaxf8Hd8m9XSLpr3gHzVdaeBFneq4v1aMCnC5Xrup1z4BUDMmRxZi1575GxGkkiEXCSuh",
  "key18": "5qhWuZQC9HLmSrJqRB6CCgHy3jgaWWbcA9mTfuLdoB6rjPgptk9SeFFoqnDhiSUXKhJpmpWEzzGVztbCGfGg6L2z",
  "key19": "2WBnX2uA2M25NxyAE4TUWSjpFRY79bKiPgpPjkexSJqWEiJbfB3w9LFFVBsfWdTSoZJf5CRM5qxL1WeAMhuyeicW",
  "key20": "5cNs7znSiQysXPvGpcEX7d7iw9FQckqJ5U6qYPFtXLCi9m4dY8Pnkfu4jMY9Gxoa8WMDRLT4R7rQ9nCqXFeZ8YAH",
  "key21": "2TtqTiUbpLB7eFqXkPvass8zRdg89rsA7H7d7ChBDGmcPVJVjbnfvHihZ9Q3Snhpz2Hrn2vDceLWQoMWSesk8UP3",
  "key22": "4X9bMkTpkw54FQLNSdGSWJkzLXBq2FNVLJWJF6tw6Y9mJs2FAGP24jm4JuLcFbseToTnRGpQRMHiqBghtS4cKKNV",
  "key23": "rXXbYzuujGQud18oAJAv48waj4kmrChYyeeTRNoe5qmnpWFUdRkqbbwS8BVc8vga2ywUPdjxJVvVdo2NHnak6Zt",
  "key24": "4Heu8RbZtmgzYp8Q7vSTePbAzS14ohxZGXN66LJBVN1wZQR3UJCgXevQjSPhvVxNYvbTrnEYhHuU5TnWV58q8ZJz",
  "key25": "4ygCBHmzsAHZRgnbbZpv9avetPzFBg5AoisHSdRodusjcTCZh3gZMFvhcJFsiuQUcJWqsmPt6ERvfbZFVezn2ibP",
  "key26": "2ML3i9TDNmphdyqB8mRgMjR8vgY3tqnNfKMc16qVNe6FFPSn6yJRbLZ8CBedQisrx9ax62AXTbVgsiSW99gvUJ9R",
  "key27": "3434hjt8QdnD3UPRYnF611zxCjhVLoXzrgYasvPbDV6Xi4PCqGiQJMNHkeTrSVDu4aF1mGoeQ3YtyRFnwEQ42qj5",
  "key28": "2tpfhCm32eSmR3Va1sVcdbz3SppGPkVsQRpRczhhkA8PpfQvS8UnfuVXNuYvuWQFqfHebFPqQ9dQfHbjPpBQpFio",
  "key29": "2zkk29JSvcShvHSPtHyDzhqvu5iVCViC3mrZgNbLR8TwvEY4UpW4kvrCMkTnMtaGRqSwZDLJLwqWKHDKbnrNbyiD",
  "key30": "3Ri8qMZBCRSSM9Dpx9xoNR8m2DFSigGEYVBc5uyVLDg5j62SD2V3cmumiYZPBRkqYZcGRXRsMMuUNPGaRg3CCpZW",
  "key31": "5kipVjrS2LS7hJ1vhW19kXLszN9box5RcsS3tPJjouja9yn7cizJMvMYxzzp1E3xvu8gN3hEJ4HLZQtg9MkNBAXa"
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
