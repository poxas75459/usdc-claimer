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
    "HfWdc96RGpRsqM5tB6Wdo3MLEiPqUZe4sLtHEUJgckeCrHtyuYHVLzhqaXYkjcpG5EFGGBBJV4RPfyncQerJCH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FENtFsdCaZonzZdRxCuwhX6sBSR16jm37WkPj6rCYha7tpsNByayp4YZwF5RPA7BrkD37JvmbGfgZSYEbtSkAbG",
  "key1": "55zpw4PXubWMajwADX6CdtDsSA8354ujmfpf5BWo4jbx1xbpeYpvdswbd3FEr8jiRWr4Abt9A2AzyjC64G1xfD4k",
  "key2": "D1G9RX3swVx1beug2Ps9oizu9NLRrvaeVrm74wqw5wx4Rw6g1q4o6FhVUavU8RXwUNs7pzQqZfpQvoYRbVz6fun",
  "key3": "3zjTFiJoETCLwXiEEkAvUf3AYbmt4J7Vs8NFwSTHw4GDjj9wRpcgN551zJSPKJHrvTHPxVNEzrytcDnq5Zr97GYb",
  "key4": "5PHpEBb88co1ruwQ8FgwC4PfYzWaA5UCg9jmPAMp78m1MNLbf8yYwwjKCdJ3Bn7gcEgrx1EDoVb42mxdBLVV3BXD",
  "key5": "QiLTmvg3Ga9f3MVGsxjbx8z3BtQBPyHVmH91FyXShdMhpwSP5axEiEC1TW5beFgyTrWFboxqGG1NhobyRZB5DKr",
  "key6": "2uCYduhJqtZyCR9AXvSav5GKmJiqWpPBqwvQKqWtDwf5hA1v9mugGktQ1XYMyoFGW1FeydFsySRCxryvqVtuR9NR",
  "key7": "39mJEWjK9fK5W8vxEgMQuruxxfjmBsxydBuEvo58JAUYUAym5vqfTkhC4nhzd5WyFpmWsH74DpNVGgJUnajLbGzw",
  "key8": "3kv6f695Qvj7q95HEWT4BjGX2tLqkjiVwhvKdtjxPmcuQeWGvi3Cmi2iydHLCUairiuKDXiZe8whCCriwJrGWCBR",
  "key9": "2NggbYfuPmyYMbcX5JHsctnLp5JVPdmxy5TxSUYETSMkPrMWg5Ky3km1jrTtcb4HJcvuANE4vxbprqNXkRzTnyZ8",
  "key10": "3QR8hay6ZWwzTf5dzHGREqczWhCV7nXmXP41UNfojuTY9PKVkprfhTSyWf7PeCbgzpEmUcyFNG17KkJpn7PVPmr1",
  "key11": "5hv2nR4FDoUPEmAc5gUEayJDVbwXmVD5YoJTf9Tvvs8gSTFZiNavnYW4Ye5BnZ5iCPAdZfTaRRbdwkjxbZAvz1Jq",
  "key12": "5V76Wcc8Vi6u39DmU3yKoyrCFByqmLsX8ztouhaTajFEAqS86Fs4aUU2SgZpVeZue9QzCuUW1Gnh7wVhaGzZKGg2",
  "key13": "5zfXggqGr3fDznxuNEVABVm5afD717ZswTcUCCG7Km1wgw1vDkuipAdkG7AWWCtWUYWbyvHgSQuamC6LmpzsSHm6",
  "key14": "5v7gG2i4YBEcoHk5auSSkqrbtg8dqrSRAJ8dui3sDYj2qffkuP2Xtrr49H2f5vsKF9vQPoPpXnc1ozjM8r6fDf7u",
  "key15": "YLDz8cWczVByL3SgbcNqayuyNZX22WLHV3NrGJytEdknaoWSsdjwg6rdnR7R21iX97upLeF97PP47bd5tubwET3",
  "key16": "5aWPZydDzh5xNXhnWMSsiDyEP3qzquxBpFQPgxP18LhSeZXx1Fdd5vqwEZKqAWGdyYQnheNSDQRjHfGqgh5rKoTS",
  "key17": "2dezTZG2ZRMxGg1ysrPzDfMVnFWoCbWnhgh86f6EVKcyaTcsh36zPjgrAWBxJhsd645GkUihwS4yJCwNS8AZEAcG",
  "key18": "3WaZArAvQV9XftM8JjKZrcUHkEdPymakR5adx9dVoFqLW85jAnQYctsiMmHTHbg4Y8c3aVpqjNzaAFVzZsMFyDsR",
  "key19": "BXHjN9K14TWB7zVUbmVSwTceyJj3So6dc6EPuesPvisALoWxAfoZAzandrcAmvBeKmffxzCnuiBWRSvQwPfyjzW",
  "key20": "5uond7wATUoShAtCB4KJcRN6d5KVg6sDuWJKLz4DrMyM13TaAaf9XrVyG4jrvYc8XXVM5yvzobCdJQVdzgs8dAbb",
  "key21": "zKC5zK2NTv8Lc21iwS5D1W3qcxcv8im3M82RFm1RGc8TVpskf1xBDDRGuR8NdL7U3C3WoNhcCLra5ehRHavdgzU",
  "key22": "3uqURoXreJ8DMAKnzHzt4ekiqNyS7nNpdz12C32tWvdpDwGNgCZ6Sz5FwKHsx3QQZHsB3SgHyCApYSXyuj7YShcd",
  "key23": "3fKEstTaEbd1X6d57VwyWjKHJhR9sU4s2ZsypZLTFwZ691bQkuY8sCcCn3eM4HNqHNm1sGmmfs6vzCHvrnoq2s3c",
  "key24": "x9M616TJirvU4DSDvRaunFxpWqCLt9dsqoUZGKVSKTW2iyw89yNjCT3nbH8qSjMvn4WRGaDnYrfgUx8Mq3rSQnY",
  "key25": "4PnvwCyA86dRhvXZauqUXo3jHSAQRoDapio2KuwWwTga3uqcUFywpzZR9XcQnmE2JmM8LbrdVwXAVSMrCW8FLNRx",
  "key26": "2SrkTo3xNjXK4zo1JE8EKXA3Zz1ma5ixbquRDstotFocMwZ2YQgcwQ72ojuZRKn87KmPgnboz6js71W6hE2Y35bH"
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
