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
    "2xzzEAJ9DqJ5X8VG1PUEGu9PzwYGS1Ltq8WLQejHtw4YJ59EXSXN5DrTN3LpVbcQF5qjszN1y8NrZNSYKy34k8Qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4niit7JfYC56njfB8twWtzKYsr3LC9g3SjXme9xY4SbSefvwN1EEBKvjj32F1rkJGFgmNLYk7DXw6QHfmgT1jKra",
  "key1": "2Hj4bWvk66qy5GApmT536k7XdoHYCt5yQZXPd94hfBrR7rjs1FecaHxC2M9zRRgQ6RGpoNmyrdKt3xZ3qhDoydbh",
  "key2": "4y6Azihf8UpzrFd7YxFSmamk8D6N8yW17Wxx1qfcJJL6S4P6qq2LkGabNWodcJ95xyWcgh4sG2BZrSTU9GTnnCrg",
  "key3": "3RSGLNqkyD6aMTuUvYCMz1NfGg6jG4ckvUmduYmjyTvLeYu8iSNRdEfSogR55CkaHJ3K6RkckvTkyYQViz9PTWu",
  "key4": "5SPLheUXw7RjTkBerdHVKDXT9qDEvrWSS6UTgqFCo4CtpNx7eXFcNZBppM7f1JXUAEH9bYhhrNn7fQXkU7aaGbF",
  "key5": "3heiMNBUmBRMRCVsR5q6YafMZow7B15p4nd7gMvo4LaaHicH7cqbvSSUbH5TpyLGsQWJAY8xBtfx5f8Ay2hBxbeU",
  "key6": "4ZSQxJi78E5j4NyEEJjFQrf3rq4KmeDTms9RAEKxsVZKJKfiuXaN1YzjeethwMbe15iEMszdjXVwdMpEL9yHuyQa",
  "key7": "tjWgt2aFebW29fmFuTjXs7QEP158rS53eyDcJsbAdt7KNJfaq1JdUpu1rkNWTZwk8ccJumEbjJAbGCNRTjEJo8M",
  "key8": "qApZzWP32RDghNKtGvDxvNFcNFnnPzVTikgr6LgpvVvNVWeMnr1LuCQsje7buyauCbiYr9j2kkt4JbMRYsntKP7",
  "key9": "3SyWtMLzNGvAxf5nN4PQoaZkcAi4Kvx17ZaCoaZ7ynN6iV9rbTCdRRCJdTWJPS9tfuK9RUYnamWNMFrFk88b5zeT",
  "key10": "CXKcJRX4sobeXchm3WEPZMyGiWvUM9zHQy8ksGxqNaTkTKpZrx5ux8UmXJC3Le79V9WoQtnvSMSjot3Yt7npRdH",
  "key11": "2mpAsV8aMVu6jDuFU1Uv37ZnVXCTpyRQ3apUTMjGVRoewmphfsq5g2wfxYBNDJbgqqfRN9e5uwy8DpwvMdqpyzoJ",
  "key12": "4UXJQvZnDpLGnBhU1ZvpWxmaciLonUHHikjHHKqi3vz5ymPJJvQWXieTatxsNfAVUMt8z5Ekw7yuZ7y8Ua9dZeoA",
  "key13": "EK2TQXUpm2gFWkQYwR8ErGyneY4wvCrUymvtPgp9LVN2ZmfkuenVNn9pg5T6L3TLKtfCzr9cRKSiqq4MnneTC3L",
  "key14": "5Gj5AYLMwEEYbpgQUU6zjJigiFTp1fbnfRaE4hoqMwpwjJ4FtMddvxDSCi4UA1ZZyccZD8FNm1bAuHth6x3qzqSB",
  "key15": "2PSjKjpWKFP7sTWr8QqdMJCEt1miUP9nsMdTmkN2V2ShjVFhjkUQ2rei2amCL3E64NhjiyU1mhAZ8UHxtjNdDmgM",
  "key16": "4AU9NCtiPUv978RyzqsWAxUUjNgG8gwj5H1Bo8tKsVMcLZte5gYCLUsfwhYhNziNq76yqDpMVADmve26X2uxQSJ7",
  "key17": "58R7RGTBX7XPvU8vJMbuQSLgnRBRhNuZAWquiX6HsRu558dWtQfZNAHMVorYpehHZQHW2eBNF7vwi1RaDkwNhNsC",
  "key18": "4YQND1dnM9QuGfDFsFcutUJYRsNYhFz3V5Fr4HoCxqTZyjsm5YR75XrpfYD8a28NY295sTV7hCia6wm81ePmBtmS",
  "key19": "4KTGWYbsdGhGqyMif9Y3HaFKFgPV36nccWNHuBs7SiMHwgDcs5v1vU4vDeypgwHuTNu6JyKtNHRNmV3KYwomNuCh",
  "key20": "35M58ZeGTFsd6E35Q4JtXUiVKK1DMwhAeP5ZwLYSyYS2xGuvowbHyZMk7YowwPeZrbkJkTP6PSPXXshBSjk6ye4i",
  "key21": "48CytZX7X8Km6teE6C8xfHCvPGnNxJG5ezdVV7AHSfA4H79pcbo69VDUoAmsHNH3GW7bfpXENqCEZFri2monKZAi",
  "key22": "VYWo3HdeYVMFFXp34Civ2BLftsUnR42xCxt62mfc98g34v8JCSP6ujQ7pT2gc6AahuH59McbyR4zmm6izvYkoaa",
  "key23": "f2AgagZPrFucbLBYrVLeLxTuaVQtzH2K6PJdMGkBCTrqyxx3vVurZKyajGKRRakrba6qSbKd1M8q77x1umYbsXJ",
  "key24": "2Etac2ii7TGNtVX9PXfxS2RiTZtRWVaH5e9aCJbhAP1Dap8VBFkKGVBNjobuHZ2RnpYvtiY6GxELFr2X9CvnYAiB"
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
