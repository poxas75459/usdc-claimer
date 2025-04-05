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
    "75mNd4rSU9oizgefoVqaLEUgPqCv7sXcNf6tyakS3nxV9LDdB3LwZaYP5WAaDHh6uzFKoSq5m3oYwuBaRH8LiMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zsX8QqXzDC8iiEudXovacTFghrvwgFxQXHk1xNUgdm1y18E1KAmqNdNaz1YnPBAnHXEmZYQqVsDug5evAXroWdt",
  "key1": "5wdgWbSFgyGRyDeEeXBHZSeKa1a8HUe51M1Xeq5rPxhkcxzs8EZsXgdVjB7XCF2aoPAWCs5Hy4DH3RAd4g8ryqng",
  "key2": "CqdwqTGBefjYRKe6U8rcAD6HcsbW6xV72DNcvQGDAZCSjM1S7VHyqC4pH2A8Trebq9K3mCFrMLFYx8GFSxvAz6j",
  "key3": "2ZM8abx4PVrTmV7qnbU2wyvRCM7B8dgxAo7dTPs8MY3D8LFFnwezE66vKAC4T2dp9JY57WFzViXg1yKfcR4ye6fk",
  "key4": "icJv6rrNugmxLSoQn456EqJPCRNUAr9SXZ9z8x34K8MNorCP1UN9PWRFinYpdi76r12ujV5SDopK3se7XQMmkeb",
  "key5": "MAzLAgBrx7QM5LkM7RPoRoTAY4xJfynBr3GHSmEaib9Y8GVvbFrbACd54bMaVATNS5pERa9HmXpMpWaHE7v17z9",
  "key6": "5mexVcNufBT3nR19X8pxzacUswEUUrTynDFoL8k5nqCBWWmrQDPFTsc4Dy1ngSY7CBHaVCg6Wz3pEKfS9NjmeAtN",
  "key7": "4D7yAVgwAwBT9P7yi57sfqVgEFHcHabbGBHmfWHBNDFxCkVrchavTU5crvLqcc9oDQhUJbcgGqZ6bmg1xQtjCk2y",
  "key8": "2PBMSsVgoSdmw5k12g6AFHqy6q55VWfH2EgzSpFT9RDwzzRg8kAp3raLrdFEJwMJubfMhopoUSgKy4TJg1GQBkgP",
  "key9": "3zJkktdgSdL1reM1VKXgxhu5EhYoPNMLUeWaGUWpqQcwnEkRc4XfikGqMD6QdtJAyjzygpCdQ7ebyad9zJTaDAKF",
  "key10": "4jEgoxA3CsJrje34ArSd7EYCjj1UVUB2aDBSfuEt4SsbouNx7meMeKjd7e9vbax8vriS2JsmhHX79f9QotheGb1Z",
  "key11": "2LPjtRK7MKNjdEQRg6NJgNUQahVUDnDMy8i7sqm6Sty1jeFgnbaTZUe3uPMm8ujrqz6BGfuFnwPeiTiNGQq9NRt1",
  "key12": "GdrsH1xAEBSEanpqGLq7DaM2spfTf3SLKeYmMyEzoGUKn5Me2G2fsXL7eEH5w3wQTscLg2sYUk5tQ5y3cN7yhR3",
  "key13": "36ivvC3U1Y2rAY3NSfGLZw2hBog4xouHH8rf3Lqfd9cAJYvYsQ7cjYuQWpusKERnuzi5TsLXk7nSXQHrtZUgQDHW",
  "key14": "4vLkBiDueniuH8gUvbjr1bfsKAEEyHvG1acudzutDy46LS1fXouBDZRPaChF3N5JMqYdAUA1umPPsFhy7c72zjUv",
  "key15": "4uKQrrCupJXTFj4kBhAurp8gvZtmeZfTeuDHbUKTKsxocoXy9bjcFFiUBnKAfvp7vcNL2KsJL138LH4jXKDeAv2E",
  "key16": "5gYiQbkXcVRVBJBtuoFTfEizkphBeTAcZdsSHFvSSzEaPD25bzjqNtpWXpmg8xHUKtHCxzMKBA6MZTVe5vwZt8FR",
  "key17": "5hDqkm18MzA4TUXmyEWQWPrM1ERCrwk1iEAhEBjEkTjR2aHT9mwzAbfWUTxHVreb7idSeCGNo4ijHjuMhUhF23mD",
  "key18": "2Vcv6q5HDHgXfSX3jxgeqJwLLDTbZ64kyTSci6VYzQ5buX8CynBhYeH2EhzN4s1GWtHhQbnFSiexTJfE6oAxZrXy",
  "key19": "3cKbmrFQFy9hmtpUzXDWdy9WQqxG5xVq5RTVyZZTbjafeqxMTnFoccUE7Q5c9QnCvg8C7aiKoiLo9iDNMd1U46a8",
  "key20": "2fRyscNhdwLJPASnGNdujvBmMq8VyhRw7eLt3nCh786zK2ASALzF5s6qq1gmLMVtqsP7sXRKj1gXwZ7KZo9u5euB",
  "key21": "5NvDZTnRYiuBiZCh3BoPvLP7Cwp8KqDzi38apfXu7yMjVAUGfkuSH74zQpvYQrLm5iKe47VnBaXrAr6Wnn87Jn11",
  "key22": "3qoaij9myZyLUgmReTV4rNJgMWYZqNpKokmCw7NvwXNkMjdSfAwbxpipFE4b3rakWsNVeMHugDsrGiF1kTtgpELY",
  "key23": "51NhwnNgh78o471R5Kkdz4n5taQwpe59GrXTguc3RvsPmEkrSsbWQv5KvzBpiTpWqM17pdPM8UwDHAW9RdwBG2Ct",
  "key24": "Zho5ytZMSyYUsEWPXuVbMqvnRb92KPUM5keU2tQx43UavVDtyRgspMvEQi4kuAjDTqWQKqMwvgHuxSgaXqYcXLP",
  "key25": "5F9pnfhKzWJ2bFmwCxUEHsjLx6zNJPMzk733BHaGY1Pv9qWgTBbZdbpR7fKqEjq8srH5uUUBYTsCCvjtkzxWjsam",
  "key26": "3Dnv8DB1a5DzTnVkdNZqbmp2XqRj7vpWNgZRv3HtNTxDWw1ayyN9uKsmhwrQV3szUPfwveoba4KtejvpDRTu8V3J"
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
