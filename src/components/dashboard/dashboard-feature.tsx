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
    "5juw1zokyhpY1aJkQc18pGXMwZzJ85LVURbyt4YUezPHnoRSTwc8tkNHyYJ6jYHuxp7nDwjZDwQo6Y7k8LcpFMPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kKDaSxCDurTx1xBovEGGih3MbXRqfppzxo2xrtrnmoGGcnAtv632ECdjL4si7KDbmfBCoVjPRzCzBcStsGupUXg",
  "key1": "29D7JbY5d9r7oPxyG7yL8PyJ6WFhgboRGCa9gNKfkj2FjUw5jmo7rKFaYQ8cbY6GacwtbbWH2sCDo6Xy9xk7M4sJ",
  "key2": "4SXMHcF8pjsXVrXtmCnNicQLxaVDphVkyJDwNYYCa6URD5WdmxLYvEFf86K8TedL4sdgKAXvkpRjQ9Vdpswwj7nH",
  "key3": "4QRcYCf3H6AeSwKr9h71LMTkF8ZZrdZAAK4bipYbTFHsUZhBgJknt1p4c3UzqaC6ihEUFd4sfuAYo6DZPBT4SbnA",
  "key4": "2Lcj9cyQ7J38s6oqWz5DmbVcPkZ35oVekLRKiY9zaAsYJD2qGpKa6epAhXX8R9xcVr4TWB2cEcTu5bJQFf4onQPg",
  "key5": "66tAtdMz8jCLaPU4drEVuVZBkyb3TjhC5u2ZWEhVszQm4Fs5H3hVESbHebVubvBdnD6yu2ix6mJWEV5G3mKPLGs5",
  "key6": "d8dQCeezrWhoMEVtf9kUYehrxfEGAAwefToJmNF7Rnkr6yk1u89D26aWndnuqibKmqn6VvUeZwUihombg6M9ZyE",
  "key7": "FZrrriua7sCzJqniroKea7xcEgd5FkZZBf96RUkPNm1Gvf6A2WSm9qvm9Q31NXFG6e8pQCGZrsQmJLA1y13FHAu",
  "key8": "55oXcvW9TQA6v6xEYocezsnuWEJiUdQsqMsScjWjXp7LRDAr1XbhkZv9bBvCdkE93dZd9jwwf1HhUmCixkA51bUX",
  "key9": "5w22jDAXSopWYUp9odBRjXK9zCXCQS5hmnU2cQELHxBPrUdweRcvSMQnwk8g2mjhaGtHjsLMi5JekRGRCdDxup61",
  "key10": "5BDGYgjYBs1ZsWcFVE3aTQn4VREiTNxjrtagrGD8MuG11sC7vV77ALcsYquVmm72dzFAMaf9Pn3hcaPfZiSivCLr",
  "key11": "3JPNAosniSDSujwp8nu8YwGw3EcSJb4awV6Ba2Tr2ycBSLHZXgYYuMXgupVrQRBzHtQBdsyNRfEmNLfice7AMXQ2",
  "key12": "5U5nmzg7XmeNSqKAV3DzW995QorDhfpsqRDTeeaAszBNVttc4FrsM54ZuxaJzdRAnDWyGwv85R8mvXhsz6Xzia4i",
  "key13": "63wbhvC5Bky7Z1zfpR4uv1iMATkNBirGvgmUARyKj8KyMwhnfESrAfUmUWxv7ZoU6frmyfa24bVfPPJTjXB7vM7D",
  "key14": "2eAf9vqSECohcKkfnrRCqXN7qJNqJ9BrtTTbVBHuLtj83d65M8Dg4JMVAWuKfqEEk7RHqQzREcK7BC7y14juXpZ1",
  "key15": "3P8sXwRkHqKyrfvJSG9hboKqWwNXd3dqAcxvxyZwkcr8FtFo44d8YRMzZymiDEs4DjsL1cgmZw3rYtv7H73Co1MH",
  "key16": "3DknoaS59UWFf6srbnWAuJfUaMNTVixKnX1npukArB8FLc6gfbRDwgnTLL2XfLVXPLWj29as1tLwpNrXfd6K7SEu",
  "key17": "5aUMKaN4jxWJDVfgdXC2RcQ8rHNKvYtMdKLdqeBMEZ9UkLtQTymfgfCeCwMPYfdLrq8jsQC7Z7zqnrRCzkEPt4Cv",
  "key18": "5dEwic52czcaGzxWZMqb5ym2qWTnx4u1AraaiTJci9SWPwVqHZ9ZaGViNpwEVKfRKsWq7qdHUiPSq4PqtBH7z74p",
  "key19": "5kwMjPxRuNjvmJQD1tG2cRanq57gxNN3tPLFqpQdDAVMPTnrK3ojyzAiP8JgJ9dUJFSxiyLzCdpsoyLjSVxJj17Q",
  "key20": "2FPWogcUuLQU99vtGNjjFd6U81nWW8XBVXb1aGVztrFjWJnoRt5eqUpDpJXAQmMNiwRnihtsdDB8XhffjYyRCMEm",
  "key21": "5D2AuLxnmSSLSe8Skjyqbc6Kfkmh1AAqDp9U9wBxg9KtEqajoGdJvn15c7LUz4gzGTd5Li3w8WscmnA3W65gNRW",
  "key22": "2121WdJTrnuVZPCvVuvMpwvpthkbMU8kUcLP6EUzm3dLsjqbPZ6caqSgtLVyuNWgxpkHZ8RW4Fbuq8bEhN4wMPA7",
  "key23": "49KnbGAAsznvSv11TcTf4UhnnfdY6Q1sZtDec7ukCpkzb23Ryx2SbenPnxzSx4KHULqqTb3HPDBfGMaNQSkRBxBg",
  "key24": "5mtJDr6ktvf1m3TFugTdHWLuxDdLJhkNgcHTneTJuKEmSXLt819914VvJ7eLcW2erqYLnJp7m8Mf9zPungc3jm2i",
  "key25": "3AnTpzsgPZxUkon7c1eaFP2mtGgh7c5WZrDBC4dWq2KP6mkXpD3vtMMC5fKZnJfVBgvZzgAhUpYKFfYu7iEP8rYt",
  "key26": "KEiUjkPDbbNKFr9WNZ6EexEWRBsK1s1Gd5EBHgbF8EmGBFcNuKFmhtRMJoP3cQLg2a5nLDDkRtNpgppSbesXnSr",
  "key27": "h8XEpDuvCe5xhvjXxd2xgGhdJVsMEW3Qd8ikgMF2wuq6qkQQUXgpzjgjvoSVMp2rp99qM9Ap4m3qGykmwQ64V9i"
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
