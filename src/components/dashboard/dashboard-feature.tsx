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
    "5Vm6CJvmsb4QEDWDL4KCj88oFABMss9V8mNthsb92NgV7mbBGRwCLWtQzTcZnhzWqU2cxzpxi7jiTL6bd5huhz5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dgXwAsCFhqdpibXwiASRSV4fppvhGMahQEuM4jzH2Pv1kB8vp2Yrz9KfhTTBuqbUAEDzwGLzPTpBkda9WcNCPhU",
  "key1": "4gNyuncgB2MmhjjQ1iGVUVAKQyZQwJL2HR9XsdZwhfrwUxxThF5zuzcchhx2hXViB8RXZaYpJ5n59uymm7aSAx2m",
  "key2": "bH6mKZP9XrPUpxPpbv3FbBWmm7dfBDat7csEWWi6EYa3ZZYt2ssVbpHZ989gttapqS9476f9sUqHSquQGbTHs55",
  "key3": "2g35wJUMgRhTdANPW26sXtV1q2DdDj5NC8b9Xzvsx8sVSnJyhRzKzsmmpZr4PfhgDxfioD3gt83uL8thEBuF3pTz",
  "key4": "48tLHbzse1xJg2gymfEghixfpCKhaLEXAvXNnhug6ApsGdhsUe1wpBg5DZeTsdQw7vqfekNa2hmpQsruvGqgP6EA",
  "key5": "4gVGvbCHZR25EB1Pg7Ap2XUQNNxtcHc3h1CEYUXyeqeNuoGAPJ4HJbW1AJ5ZxrnZFmgaqyf1rqUEsT5E7fhmB1BJ",
  "key6": "4fNTSHTxdhd9FcPffaM9pQFCDpykVyJ927ACrEkZTn3MWAJNJJ8vBJWjX1UcjwXphHZkeCveCxANoLMgASzb2S7F",
  "key7": "5RLfoBPVf5DoyV1jqGndd8cG5V5edJ1py6j6JVQ73eu1vZbYFBBuBc5oqhfQKppTti9cAohRqemXvUocY8as81ZH",
  "key8": "5m2b35DHYntggyh3FKATZn81hV8hiHyRWmVNeQbVpxUNNKhVFiPWQ2DmsyLh7hoxdMu23LQHJkUzGyJ7636xxnvq",
  "key9": "3PFicniP1HvncEsmus6vGK47sApEKznGGKo5zmaRLmqabtG3jV4b3CRNdq54hKcK6UTqxLnc3kEkNTxC1ytjcED5",
  "key10": "3vy9APwFQihe8EHSsyGJHrWyNNShcNWvAhD3cTdoAWQcE9HMGHE7MxP6aHEua5jQ1WUzupFxtoJu6MtUDPGY8a4L",
  "key11": "4zoGMysUfQdY7beV3LpRDRoLvv52cnucLt1Y8A2VevtEQki5JsLfNJh1GxJP9EXN4XUEqBG1itvZAgvCnjfkj5cQ",
  "key12": "46HFw3RBNPjTEMLKHNB1EbPdPpdEZG2fX3zAeArxMZir8N8Zber58gm6tTjwVxKQRLWHdx5R7WRi47i2K6EYz9UJ",
  "key13": "5xJzEmn6bLAu63E5fAedFPTQM2R5p47tigujADfAmMqeUbPha6zQxNBGmyvhq1WzEK4qWQFaFNHP1EwuobnwP1eK",
  "key14": "3Vxf2SDzh9wuHzfoCLjXWbxmjC7Y1Ekb5BLeRUaYea6KgKxJ8vE8jsFQjReUPKDDi11SbZNb1CaYZTdeieGSU37Y",
  "key15": "5MGekd59UG2UqqGXqkGe11TczURUbg2eJ1YtY35FugovJKY6c8wwGV1AkKiQfsqT2TQnPRoNLNiovaa1WUiUZ1wh",
  "key16": "3SN8SXrRmneAJJvn5M8CZe1PmcrDnb6xFQzfydZTKFZWByEgjLkk6hF9vzKVdhJjFSRu9wZsiAZqz9nfgoHEfpcv",
  "key17": "2c43zTs8x2XGZUF9nbzwSWm55mWFdqB6Da1LYyPXyzG4yFFj2ZHqVcxBB3kaF6DsoHdDS2PKTZnY6cKQYTsNkqgW",
  "key18": "2p9t6kjzaAVSbDMeNUoPq27gxShSQf3r1UDc581nwwkrRBN8KNoiMqJuYTPaj56SWXmzUGZ6NuUuLBnA1eLAxP5i",
  "key19": "52YBRx41s6LkajytHb99bhGw9WKn7gphxqKVDo5d3JUxHsLNGutEUUA3sudgn196qG2hXQeYygDQKy6MPodPyUC7",
  "key20": "2yYjXUqQxdXEQGCz3pNNXg99bXdKqdKgHNDNkXnbkfX17Vpk7NYUjFtEefno5HfdX9Q44HShHxfUx4bAsNzs938H",
  "key21": "4Qn2bh479xvJYTCWovdsvXAw7KKA82rL9txVKLBepPJArgdfFnJJEuwfFu6fhUG51aqhH8Zpye5yUD6iZRLMcovq",
  "key22": "GDBaWj4LGiamRofyzwkFdvvscjTjXxEVV1goaNjNnJ5NAm15k9Edvt8irnXCApx89SHF98LPyFgFXLvWnBadCgT",
  "key23": "3oys2831geSvJyzAwPLyifgctWhj3L6nbTHSLQgwifJWypoaNKxx7dNmrVzdFY433L631XaR6x4zPb6Mjed6DCdP",
  "key24": "3oqxTEYK6ThvQKuj6NcKYzMaY2x2gSvFj4XfknKnEYrPEHHizhdkECAAg7xcdRGTKwGZsGfGPF8kZjq5eTMwqpaX",
  "key25": "53uUVBPQXwZZypGv3X8XrVgrHcma6rtHMxmTd3nKSQuG3p1eAAacfAPPSBbfU9fgo31tqEVYxqv2MH6x5adE4hGj",
  "key26": "3C2R8G1imTHMis7TjWCsHrSfjqusa5zNFaDzNQi8XZPc4kbP4cFVrJKcitAmyZd1TveUWtAngTpWQxmg7H4Uk7Zy",
  "key27": "4HKR6pgcRbQWAf8ciyMT1s5MNaEhsTYkGMJrQUnPzj1Una4Bp4jfiYgbnk5nSQTnZLojmfQRpZ8Cam1Krbg4zWAx",
  "key28": "2WXfRRceqVkArrrPHwPUFmkjAp1cvesAVyQtaEE4eEkfaypR7RFXCiYv8gzN3JjwgsTreNmPzuKk7XNTfLXkqLod",
  "key29": "wK3CgrRkjNXqw5NdxMpFJdqhYiUrvqk4r1AG8uexp1w6piiNyPGLJDFq84cf3H9v9L7ZwUmf93naywhtEQbnbjy",
  "key30": "517QnYGRwLDdkgiRxTGD8bADiKZL4F7g4Frd9nYLBwCXKQCqr82Arm9mzcyRASt5B2iuSxnacZhiJaNSc2hTwCFC",
  "key31": "AUQ4QtiyLEXK4yNSbGswRMqJF87Pu6az9L8WT6E4N21PRjU8YyrsoWpcp18b4ZpE6TCsPUXBTUasCmYRs4D8Ruc",
  "key32": "2Gxnzk9PQHyegJJwHXGX7kcCsyTKZ9HYUQprKpgdALPimjbCWQTWApabLVgvcRXiMFYbJrPk2YZaxBpffQ6pGyky"
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
