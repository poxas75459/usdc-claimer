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
    "2W9NXGWa7QdRodGXjx4CHEbcFGezFGD9YyxC4GphneHAeJZZmYwzS6YX2LB2mS1Ei6ApPhrFPLvQTJa2Gvnqbj7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AYMJPrgAXhWeYj15mc1jxPQmbuVJACjABpxNzMCM1r7pfzdFHciryhUgGqZV6wiGC1N62Qxj7nsvs3sZf9soLzo",
  "key1": "5xgCo9Bg2u7NfNSBNZqFBz5ZuCF75aBieuumgFLtRW1hDzep9Ai5hCTBW6YCJjPXYgt29qeH6FGLNF9EUR9H8hCD",
  "key2": "54eTogZWgZWNjPphasLGj7uPqmgpCS2RXJz86otJ6DMfKr93NZ3jaF4PG6DjXCCcmuyeFKso8LxgMVe6Yjbjoeaf",
  "key3": "T3JzTg8AC71Q3Sm7yR572b3oj4jHjxkGqDSEHitVwJbE7wrKr9QHRFyMp5ZnF2MgvQPbopSXUFuHEtLAt7gYfsZ",
  "key4": "2G9jKEN3btVJYbFSajwF7aS5XL31WY8tmJdQFzonBYcw3f9QzPvDpWse8UBUUSRUV4pEpFRVRkSNozuZcxQX8oNj",
  "key5": "3NJJ3dweSKXeDxVMFh3P6QA2mLbdS4748TFHFwUKhoKgQk57ZGy3RXZb3umJAx3qgA5XsrZ8u6jUWe7qujbnS2PC",
  "key6": "5kGc5CdRHciz7ahdudAw5NSrBEXRLs5DuZxqWtrq2Hcgg5oHyFkEmqKQN7XzohqYY3Mi9CM4WrebPFEmC7ACw3MS",
  "key7": "2LGMkkrsk23GMU6U9qkwNoSBGRo9WgN4CZp1yapJ43F3BYLKshC5E8guyNgPsZPUdFZEFwTrm5FEiJquVSmit2fb",
  "key8": "UpbKNd6ti2qRPzBVA3dNsAQzzYfwayk6PEAZv5o1gP9u5ndHowoz2bSa4jknbtDjDhqnrTAXq67Wie6aAuFj8sA",
  "key9": "5ASXuYMJQACfrNBxMAqV5C4TFt7fR62PUUJigFAsBoTUzoxXx2Z2JvsayKP18NrrKW18wWeVBK4iZwEvpvCd394J",
  "key10": "5FzxfvHuCY65ej2biLtFqrRe65HxHRnpATXxi4KDSt4TYvV9PaSdGLjngJQ1YFvhj2utJVuayHRCZN5vuRpLxxRQ",
  "key11": "5jqmMPMVoFU2dwWNHHAawfqMzcraT8cUhUsxsUPiwdi8XF4tNifqas2DSc6oJATVZ3Nk8mYkQwvProfZX7YouqGa",
  "key12": "ytRX7JeZeBL3xCjn7Bpi8rdNz4TU8KHEgciPd9zdSc2cUCDpwU6T8y5K5yv1KjCPTSRX3oGnirTFFyEtd3BxXt2",
  "key13": "5dNdApAL9gWQ5ArC54TjkKU3oUwyVJ1QAzabgVyCdohESCGEmudXZX8yeX8Awbta1Z8ESwq21QJ4f1dri7vnhgJZ",
  "key14": "3r5An7ygU1AUutaQGBLib6TqLZv7N3Dp3Y11ZmgefSPw5J8FfqANu23xCMAubravFeeMJYL53rNRJtnUnFLn7adM",
  "key15": "216TUNW3nMvikLDK47bJyUaocZ7NLjFjN7kyQVu3KEig6t2tTrWcvK6qHeKXHGHpUnkenWF3KrFJ8FGDq8qgb294",
  "key16": "4XyAqBNsfDqkRzHHe1yMWniE5vfYLApQLRCk17rNQZHskkjG2sYWfaxee7B9g3zre4GFYLmVeAZdzYW5bY4ZceEJ",
  "key17": "4yVux2hvrLXT77ibZLNtrnVFsB3GiKdXb6wyTMfUz287RVBnWemPo6VWgntbRQdx9zo91Pq9pLhpxswUtFfSbJ6t",
  "key18": "3YL2S7Z9oJTrQdmYEwvZMsew6EE3vqRPZNRQVSNrizdHJqCLm6hQrWY8F1mEF8jjGZ7G1Yf9tzAEfArzrtu8TcgT",
  "key19": "2Abx8qn3x1wDTnnfuti295GVcPuLDercUdwyHFqARtevs3NW71BXs9uzrny6jxErsHafbd52HZ5n6RRcycCyKCic",
  "key20": "3VMShbdFhbQqZVNteFCRHoxrPDdX7tvwn2TSdHwRvnQdLLsiJjQRmW2HVyaadUadw397PCGZWGvTXdr3hu5v2zn3",
  "key21": "5xLF98owy2GpQbbrgsugiPXjauVr9DWVomPWWhazb9TRmQq9E3rq4gsMQxzXT4oPTCHndz6PkkNnLAYrqFUaYsSf",
  "key22": "2b5dxxK6PZ4AxqMkV7KEZRgq5c6Xny62LcmNBB8KN5um5ibnPQU4Rwav26EkuAgppXv73U7kGffuiPk1Bf55FhgC",
  "key23": "4qoowPLQbdq6eauSAamxgnDmGH2sJ26xqRctgntRkrAGgAiXWVmye27dVTUfDnzxzvntyC3waXXR2GHe74uQ1iGi",
  "key24": "5CPTxWnUe545cmiRkp7DpSgQgfRzaytw3REN9qutTBPnQywLC6hUSU1DLKqKE8Zh1afxaYt1mhYjWoGKvfcso1iD",
  "key25": "2CXuWkvPAvSTvsjKU2sLAfEWPTYQ2FnFGH5jsj85Px9XSCnqpg8TtVvvTTqUkQAXMAd2W5xsnysTcoEQFt5eevYV",
  "key26": "vfBN1dVY3Xw3D3TPYFRQsWPdH15Pre9kqN3SawpZVoWxyF4JaWqHHrsYSUd1JHdyNhRH9rsZR83Q9GdmQSBGcfA",
  "key27": "53J9rozgxM4G4WRq7vKy6mJd7sTJLYHBo3L2EBCn9DT4tLbLAiXu2ownczZkz62eCt4MXuxtQUDKbZANGGcXhnKG",
  "key28": "Ccbs5KqpnJL5xcQvzTzmgJEpwfppbGBnqehLev4RYukwSW2pGAigdXu53r4vF6nnK4SvfQcqphZzTqhCE5DJwXx",
  "key29": "3oyBieFwbNyKYLiRWtQxxvbGXkz3wVcgsZ6zX9nM5aB8qQwjLZeuE6JUtbHvLSioskoTUn1aAWDhpwjCZLTgzrNs",
  "key30": "4ZjFFBzFsvQ4G69LDoZKeRFqMy9mBXDUdHx34gg6ije4RRLb4dnqfGseDdXxwtKm5VZeYTT9qow5EUBC47aSYwvq",
  "key31": "3HZSTdki1YGFuckr6SFASQgdwS7XJ5d7PDopBbQFUFdpHMZmTB2BR9BQAGwPpqwsR4cLgPUsBMtZZxtt8nQDHLz9",
  "key32": "2ZZ39rGkjekjQHBRcmjGTqtVAmVLUhzPrs8QJ6BtRYCTT1B7Rw4LU6CSrat6HmnotfTMMk3umjbKPRbnQgqcni4L",
  "key33": "3YQeAkm1MPTMSUtwsfPmvB9Wmz2PFgKHvuVXEXXabS29HRyPe3Lk2aUZQaW5DugtCAQrdfmf3hkc2QnJa3VauAog"
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
