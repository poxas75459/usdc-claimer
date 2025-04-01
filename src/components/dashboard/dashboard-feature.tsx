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
    "3icQ4FeptNVpRCyUomyVosVUgUu2fD7uiS7NswbcgtMCVEB8YiEX6yGDY2VzvKscXt5zY3SHxemUt5BYgPNTX3zt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kvH7DgNTB87HDnifXsEc9vCwnacjySqXXfDZ2jThFJqQufcCEL5zfX7tds9me9S3CLdqYmA24gpESBskRnXte7F",
  "key1": "5Ltg199fz7pvg5iv5fwNYsMpcpERqfM6Vv9cM6kRyKYAacCZzPRuakBLLSiyu4zRsCUNgCdzfWNgW8E5L3DnyRxQ",
  "key2": "53FR5DtXufS4dVZi9xMLWb5jAFXvXd6UuB1j28CNpESzWpVJriXkBinNePkQcHV9CkjWtVDULyYRWgpFfoBamtX",
  "key3": "7SXTgnbd2YZf2ofS9DHoGScmaAj5N7pFDYw2RWdPp3bb7RFskPsA9Hdfj2gXS5hENEdjyCXEBJdb2KaoQQgrWJs",
  "key4": "4P96woeMx9XGQHTxWq3UfDwngW1SLFKdHWfVtiWVuaJEET7g5xMjzC7jAfLNzmUTCmNTd3H7zf5Z7WAP3uyZPfwD",
  "key5": "2V84BVf1gtWymgwKD9jXFSHEZQJb7Uq2yadZ9WpJ41cXu7SLdkbdxSmeFt8CjjeNQqeN9N7RRmjyyhSZyudH1jVg",
  "key6": "2vA3hMNcWfwukWioX8uS3ceRoyGq261tcXE4VCqQ8ca7sLssFzEtu1kp6svCoFMoCZ37oFnrfRMEabSjSWA3ujXy",
  "key7": "2NDFs3cgx7TXQMsGSPvUhski8DwJ1S2G1FmCbsm7CsdhAFindNpUAQdCkiT6jeqpYa26XHqagcpDvUGKxnHU8iH7",
  "key8": "6zbXLkHancUCCQ4p3HnJ7CtJBRacQvukwDoZwcQKh1eidPtu1nWjhcDqoy9FzsdRwH1BKbcZeQnuTePa374XRrS",
  "key9": "4ofd6etoV7CuURB6XDY4kvBBebL1LNbmhazRYARA242FnUATDMB33p6beFZABEhsgbiEgVuG5fRiVJ5ecgZk6b1q",
  "key10": "25Xn4nnXJVYBSszhZXdy7feEZDkw2hPPS8QUsa7M26BzGDCRYgWNaN1J4UX7gQBJ7sfL9crJU3Gx4aizefpmqHaT",
  "key11": "GbNYSN7i2yAYm1EK8ytWazJbkLfLjzrWFVZLyKgpaKtxkHPgyXTBoradmQMhuSGUg354scWUszLSU5vRVEBrsng",
  "key12": "4SHTmChQGpRARfWEGY8X8JiAKxYx4oipg7w6bGBzToNBUWT9QkCwWKc6SsWTGdPEFSKPhAwxPHCdCWsEkV4o5Q6X",
  "key13": "2kiXgFRAh8zYc6ozadQCqpyjA36Sf4ovnj6Yf3Y2XPLNECKHWMCvjjqhqi8TDi6azBxdXcR2GmCoCxZ6vtArHroX",
  "key14": "2gQWW6wA8d6dh8MTCWgWnJDHkdsvZm2oDhxMa95E6yFRQbKXPU1ABtq8J9KCHHESTekx4A5P3A3uphCSEHLKmXjq",
  "key15": "5TEwZ8XFo9fXPgTzUUK8diJj1CDw6hpMUDHZQvqAVRaNUQqMJof5HtdkTanZXbutUTb5tBeP9YVCRThefA7BuRNG",
  "key16": "5iZSakowizETTvM91mtMdyFPSnWFfN5t7QDNseQVwnNkg5CejcZutyTdpV6einacxdYLLer8rc3n3yNrhoYiptCq",
  "key17": "41CDYNSZQKrvECx2q9wNx9CsBiJRrF2Yvr8F85QnPsysP6sMQVvn2PaJy1Fc8XTyYSAGZaUhfSiQV96AQRR8jVWr",
  "key18": "xW22eADTariZC9A29j9PhLrSg1n7i8waEZtxCcQZ7CkVBzR6BHXo8RgHf2ubXgrxp4ugEN3YsrDXEvFYguYB5mc",
  "key19": "3r11ykMkY5ZcFpddWeVDJigkGF2oDq3L3PTQHWVQYCg6w5f5QA65LzEgFDEnHAn9csrSAqtAZ9b9j5WcUoXcAbnW",
  "key20": "4M8JkwCh9n1WHQTXhQy7QUhW5nKDkG9vRwZu9rGoBoWXdortPoDANt5dkS9XmyWgVQom8DNetWZVff7mNdTdTUZ9",
  "key21": "3zB2mcKZ5XV6uRzH1vja9meXNkimEfjLVr4Lq4L12ecTpKnbABFzqqRweHmnDAe8nMNREkRg69Latxecb3YnxDu4",
  "key22": "3pQ8w1DwNdjK26FsFFPzoFTzoUuw49HccueS3FCw8qsJutFBSbwfaYncX4GPxYKD4zdshaEhnoUMcTyCpjfdQodn",
  "key23": "4z1zPVJSYMbt3oU18oatAc9gDb1eNVujmG6U1oUjKXgo5z3eVwwjMVKPxUJPY3cPd8K8f9FRLmS44PQEPGoCG7zV",
  "key24": "rmShTqwk5L2hkHCMFpt82xLz6qA6DjDrVkU92QUcKwVvtaX4AK2YhC9h5BPyY8Y6PdQXpoBUd3QGYqwpBjXbLSz"
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
