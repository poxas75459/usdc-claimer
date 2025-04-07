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
    "3a77kJ7z57DAUpwAt56RQNXJZpdqRht8GC9YaCHF1Lk9hjenc7kHNux5DHYsSTV42WRKw7pDvtx4r5hU3kNiBUvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QiifxZCw2ztMg7QPMf3TyzTwQJWaZj4nzLgSQXmvr7VVU4hSZsn5vZCTxaUeMqGey7BiFQKmozDtnRTkepRuWzG",
  "key1": "5dFpneHgtA8Bojnau5LshMKFWJvLokQntYQgdXuLJLA4KWY8fYYXqpXgqxYrHWF9m44gZv3nAvBLZ32AWPJwWeA9",
  "key2": "2R944HcBn7cY1t6bpYoRd2MhoZXsUVjXgJLqm6oNxVZWNBaQuMtdHoxVV5MdiUaNfFxnRVrwM1v18dnev156SZjK",
  "key3": "5P47iJinFQC2B1PTvx847DHpeFFec6oWy2Bxmo5vKCJRbnA3CwEAB7fus8iQUGT4y19P2XdPqe8gQRkbVBYnPbFn",
  "key4": "5ZjCRX11p7GPSqyFEh5PjiNDPhoB9uMnkmHBABRc1sXbrT1UC1KkAo3H2ruRXzvQNmuLiSUxGLgVneTpxXVPfThv",
  "key5": "4eiRpXt2WNThTrmJYqG9wfU92JeU66kvthaStC6PMnAneuJE8S64bBDt61WZ1J3Mq2MELjgQJLa8yjSUcWviZUXW",
  "key6": "3j1LQYnm653ichvqp8dca4xESUyGZzzW8DzAicStqQAJXyQg9WGZxK4aHjkta4SJCUaAyEspaSMw7X3Kxg1dAU1e",
  "key7": "E84jrLEQJbVfSeptBGSbNxXJRvLwYB52NvhSxpN4WbrJgHkqkHPE29xmfLETCK61KoYJ9VoNusuvxixvm59x1Vw",
  "key8": "3pr9GBbFdm779LrduT1wxNWqm3QhEnCooPb8XLNQHgk5T5nGrEnWLscMXpSAs2xC1Dcp8CnLQvwJVqMKqYKzXr4j",
  "key9": "MGfySpb5fnEuKhypwZMcu9pJXFwadASDCivoqcjdncfp9pjGihRpaV2yGDgfShRrLx8oRqGfJJ9LT3w9Aj1zUTQ",
  "key10": "KFMPMXYNzzTR7dN8FcwM8tvVsghrb9mJZ3iJkrYcjjTysd6PqL7xdXcbGfREJ6weEbMr8vbBNe7XwZkXRJQXGA8",
  "key11": "2fDFt6jyj9SrkGQNB2S2hUnq29mmyKhT3ujSEkhVov5j9hDJ5bEUgD2NmhY6PK3xFc1q3Pvoi7ZR2UeZmGQBZ8bG",
  "key12": "5HfyjcYvrEfukBgJH2cUfeEuwB1JRcZ5oPpd4vWszjEnW5CThW9RZTgCR7xhCYCwy3LEGFhBrPa3h4zD5NtwosgM",
  "key13": "377pPUA8Aqw2TVvaymhyUBS6EYbppACEPZyWU9sMmc6yowTtUJhFrXnHZrJCopL6E3NYnPkCDbk4PZaBHvRwYTFn",
  "key14": "4CAgFco6yx7wmqU7sjqUKBVSJzcnBeNk1TnwMFsCWvVFArw7QtHJgSy3UJxp7ReWBkvoi8r8eNV4PZkp6uupS7HG",
  "key15": "4f8fNXJwV1VoREzK5GPkuHkYzCewXMLaUAMepLCvFJaqzDr1tGwqakTBwuwxhxkLC3yf2YjVz4vWLWntNUWKC1b",
  "key16": "vVxq9qZyFyNpqMoNzM9cQ7C6RT4kNX3DEUu3WiyEyeQr71zoNRqXZaeJ85czfEvENMU5R6rWmRMKbkGmRyRtbNA",
  "key17": "4cRFsrxeHKYSU4YhTmGJg6LZu9RtXrBCyTmWa46U4UT8DM9sEmVpLXNHke3oSC1GrNjWqy6oWyUyC2Tc6F3Y5bZf",
  "key18": "4moNuSjPVoWCHgPLFT12WbhwgU14YR9jk47LFXNFf2spAF2s7Zo1RsA1eLQHP777gcEh2QAJAAVUhvJH6RfmH4Cb",
  "key19": "4F5z5qPM5K4W97J8HdmzkqS54ao2yK5X2L2r9U56uLDRJMyQ4fPhz4pHDdcDHqzZQMrhrSkDNZ2pSBSZCfGfx4Aj",
  "key20": "sZkUcsimfRk1N2tnFW6MxsSp3wu16hcfyWYuSfB3E86PHodJGmy3emsFaEFkUzMnykJUvUx4gL8ixoNs43mC4Mn",
  "key21": "2cx6LakdVL6QC5CfCSHWeUeQBkXzkkTeiA2ww9wQgrCBDbNzfCUxMfqkZ7PRwomyBJaQfKnRy1symrXJCtDsySqT",
  "key22": "2HC2qM1fyHK76uWwg4Z9nGFyzdWnJu7GxSmZAfa8eoFPumwnz8b1AcQrkagHX8cRQzXzsErh5HeyUsC5eYm3w6TR",
  "key23": "2aHkrT22gDSHbwxYFvY3cXGpZZuwyNTaN1UHcVNXJHEscHfhERZZS971bs9fu6LqqP3h4Z7SYERFQBLZbzHh3oTe",
  "key24": "w9cvR4GDfMcjnzgo1etovpiMRZmq3LqFUtzCLYWr9EL97pLCegzu9eegcaKrmHiYxRinCti1QfxAHoL9pYQvaDZ",
  "key25": "2RJZ4e9hSBNfiXUUiELmobqzYGDbtuN7V5J2nYhGesTTPCxJzCQw329FW6ydkjKuNDFsCoD3CCTAGTewz5A3hTZo",
  "key26": "embBN3UeVLA3Dnrb581Xa3HE6BXWUjhMS2ydhJUQA4xaXMJragMXpQyorBfLszpDCafT56Xj5uqnRwECgG2mWyz",
  "key27": "3VFxc1raoCoZ2yaCSb3txssERojF53qYL8SaBxTYPpBgLsUdPxrSdYm1eN44hV4ByoTMxDN2t4B6v6DGh36erH8Q",
  "key28": "2eJZVwK3sfCCqxE6MmZdCSWMHRBDJffiZkWRhP8so3jTW1Qa2Y7JegHtwYv9fqrPggm4Zwsypk4Bp8EuENYBJnCg"
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
