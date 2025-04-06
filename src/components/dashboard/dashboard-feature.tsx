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
    "649i5vTvZHsN9RxYQiz6HGH56N5AvdoyZdEy9jtRxCZBSqDAfyCmyRdbaFERLJJCPhC7DMrpodgQidHXiaxVpzdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jHWNRCSTrok4qLBqECyRvCzhBdzXfkrpvGfaAJKB94hCGbcDmCmwxCS1BcnmiDMHaBYtu9PrvX7zVbWwGWqPMR",
  "key1": "3QDWMG96VzqtRy7jok8ZSfR73fb8EZcwGP5PVDYXgaSRVA8Vg4ZQv1kGRBcxmkqpQWQF4VEUB3VyzxdR1jcQYp79",
  "key2": "4HY1kbyd5jVAT8LBzxKKyjSDWyWuz4ns8mzZMGaCmSeNQZPVT36Qs62hpxMAE85nJr6aPgc47Z5k3tLYqE9Mvb7",
  "key3": "521pKam3eng28mLr6nA9vk3wiwoat1s4vbvqMFTGAYvEmuikS1ZtELHdG6aaTzaYntDJ2ucC4B4s6Tr1LtLjxhFk",
  "key4": "4DwJJx2kZuYncNpcDEpmsXopk5biED2nxo6ENf4FK5tbKk1Bcc6Xm9b3Bruc6f9pdD9Kdg2f1vZwCe8ZmdAnvRAZ",
  "key5": "3owMTGBHvec4zfcGmTdmhEtUe73154QSRkCHEs3HX6qAQTQWDSn333fr4k18eEmAKWMvmm7GQcbLqgtNYpm1dXjE",
  "key6": "4MDD9JtGS9cUWLMgiLqZ2WUYpVdokQef3US7kCALgLDG9pCSxDX1UyPHDgttTcpW6VkgsrAjvzM1noAw4p4Q7nsm",
  "key7": "4ZFhRdb1U6cPnqCsSH7vVkoyG4A2LxHYWaebGt5dUwkTLtugQKFZUMgmiUBzK4va3L1BLKA1ad3uETcgVvVEBD4G",
  "key8": "4771uvuVbr1HyUFQLJK4kXRsmbGXQkReNkcDKMJeZKnAcRexp8hbkvmVXc7Qm21ZMPea9ynCCnmTMuawjXfPtybU",
  "key9": "3SeoKdhstKUNXvbi6JCQSEmpgzdgipcpSC3ZbLcbd891ewAJjz7JzeS2SvYhtEj1kPnq2Sx9PgeiNLU7AEdKvPdn",
  "key10": "2kus5EzWsL2DG7zVrK6AvaJAquBjEi33s5cdptfRLr5XUW8LeVUWEdAUfkRp4w14wmCmQstYCnZapMab9Ko4PW1W",
  "key11": "3yRoFLd7TFGCJucBF7MDWPQvZsUbgJ1gnGBrtth66CTHWw4WkB3hGNuNuoVTBHXWRnGtjiqhagvEVeQ82W19JMAY",
  "key12": "5KRTt1bQ9xK32119GATpB2Hqa31Tux6rhygTabZeTFDbCzJztV289GCeGLa5vWgXRbjm6yZNTqWBsiZtwXZEVciX",
  "key13": "efiPB5mztWHTimu6DXEbqq5SJf2TzwCQGoJHYzjqfmoqT1ReNMx2XMGvr9sQ24GHNkaQxBGtxQcpCm7jZh7TJrn",
  "key14": "5BtGKEUqcPb2c5Nk81bAHKtQw6QTeDd8bLK4VdQEps8Gr8JUKTpGgpEYzhq2nf3vkcajKGveMSdxCcWUN27K9Ktn",
  "key15": "4HxRAUYFfDLSYqRVjZN5cBK1bzwbsApiivgM1GFKBXkAFSbYr7xVxXFkRZhdLMJLkov1LA3MvtZULBNSAzup9AzQ",
  "key16": "3QyXtUYYA3Rt2yfZT51mT3tENZ8Z8AfZWnQzQxPbgdWgPYLgsN5ms3uFW3wpT8vmGX21GAuG6StG15tssmm3fAE4",
  "key17": "3rZ7WPqsEi4Hkr388eEdPCTRiWrAXTSCQxKiUjYS179vg8D8zfR8r9xkBJ77R7ua9XXHbRNnknXTqifbyse8s7Ra",
  "key18": "4NcHFVudTx4hDNfrnmETrRNq1yQGc6zAyccmQupxqPt8RAUfsf7uwS6X9M4FybdhgVGCTzDHSsp9PgK1vMMAi36Q",
  "key19": "uzPhzdsehbemAHbWwgJqpL9aXv8VTVEzpnjXD9GPsUqbLhLEgWksH7tWz8P4iokKBjT8ypBZMMhJLY71GZ8eshF",
  "key20": "2tsuDcxXPTanM9xMpea3C9ZAqPzD1VApMSVR6VtpbN4eyK2RvDC8V5Gyq8McMQKqttjVdzbPwkMYQJayxL47NRD6",
  "key21": "UzkusXpSxPs9Nzt82phUGBUE55xuDqwPu9Vaf6w7hmYGzEhF9QD7HRG7VaN5xUHZCMSmHjeTTvehEJFU4V6rXD4",
  "key22": "QNJqTPBg4nRNwfAg5cnBfBqJfHt4rMsktzKjvA7zAHk7MLgiPPNjybaQmEJWuXH6q67vqQjwk792S5Qn7igjuo5",
  "key23": "5V6yW3pg2GdMJSxaoEcNbesG3PJwcEPgWtrU8gQL7AqBL98mt2bQoQqabnaKYcChtSsoA9JxCsCUGWY5i8RUXEJG",
  "key24": "5W2o8d31vAuumBDqwZP5HCBCC6XGRQoTT8esZtJmQEZKo2meZpmtepRu1wcm6AB3P4SbpECJ14B16HVhT9B74Pd7"
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
