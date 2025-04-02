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
    "4mXKxC2CCK1fyZocj1xnnkRyMTF7WiRAX3jszLuyYXnFKJqHUYtVYRr2VesfBP97ihBBvAXbCSKzCibNzsxqqLDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xNQboBGKbbbpuT9D5AZA1DW1x2RnDju6YVEjQUnRZrg7fwH2ysxPTWQn5FB4KK1RnUgPtyUu1C5PXXTfJ1QMuVj",
  "key1": "3ArafQymKH45GxHWGx32cH5gxJwQHNDb1hZ7GvVxjFSLxpVdK4uJ6b7SLMTQ9QDDtFhuKim6Jfs9kBZGLSieFS6b",
  "key2": "j75T9zTFBxFHHz8UKvCqQbzT8XXoMemcSqZYUL5bdvCx2UAcVvUHRMCrQXMzYQrxkit1SDdtLEswU8NguFqTSbf",
  "key3": "4ZJZQFvgPvrvFxZ6p4bQrWcDRk1oz99ujAasHGXTK3NqwnMYbNJE9T3abTtd9Uv1t1auWvebUdrWkjisb9QhZmMF",
  "key4": "2kiZu48SywjqgRWVK4R5zSyMhRbtDck5AurGqE3ZYPu9nsGt6Z7LRE4ZDh761xXjRgZE9zktBjWpAhSNSNyeuwA7",
  "key5": "4zmcghcFr9NTfmcueu3ALx1ef1PWL2FQ72pUoqkCbdjymnrh8cH5vWtWwNcTX6UCq7E5g6W2xQTPMwXRSX2QhkFM",
  "key6": "2Vc2a2hNnQoJQmRRwKLSRRyszMXFdSYcNZhukm2H4a2egCwa7xVB3FKinTDNfcbka4bbWg4LSr7u9fysJMjfrA6i",
  "key7": "3UXKeP7r8BrqSv1zvtWN1BSLBRpNzMuUYy8r8cM8xecBmY2ZiUR9K9aQVfxBMs4GMVYjuXBDcKz3SBwLZb8Suvpx",
  "key8": "2b4xCcWyKM4BM2Q45ry7waAPotdBRJAHt7c4tFR4PxM5RW2z5EBG2De4bjnpYr5U9krjxsUNvgvw84g8YDn8ph87",
  "key9": "3GvXWjQCz2ZWuoKSTJFyro71Vx11UC3E7WsVKNKUooTd27Rfyvmj9vTaW6dNPmW8sRDWLr1MjEWNZkxsGhoNwaGT",
  "key10": "rK1a3fydEDwzYKsVMpFkmLn4uYKqmqUYLwuiRANhHmkxmtsD7Erj3nV1ttqKVHgJdqwr8fAF2E1eXuGhS3FmC4q",
  "key11": "2mRnnurDapkRee6tsiqDgCQgLVhZVv1qKPBV6oD1rV5JiUzisaVnnDzExUyyJojwrndDbRA5zvfc5b48gvNsBc6k",
  "key12": "2tVwBnxyon4k5Ew2NQnx1k1Thj26N93znUckTxUSJ43tz5USE4TCwRQWLkjgUVVxkuixCBbp1GrTBz24bthcMsW9",
  "key13": "3NSk4nW3kDhNSm1vnPd48BDz9t4rrNTSiteWmCF41mEPAoswKDy3fDt27WGwjrGgacHkZfJcdqte6iCfaNeheX31",
  "key14": "3oxrKWfiofwcCwHrdmeMC8MtC4g11UYEJ9tLEMn8gFj3J6QfxocJgGTQZRAZDv1p85duJmkwY32dz7cox8dMFhfE",
  "key15": "2qwQ5Ev4g4tHgvSExXGoFGFyrJwXdZCCtEKLJXAze1imRUr6aSL5e2PkykSVJZXS24hi2XUfBpwan61odD5KUDcj",
  "key16": "gtgmboHH4oYrZzTWwGijN4xPUZNynKHj6m4K68Z46HZ5RTmAB3vCxD7C6ZAwJ7jRm7DLgE3H7y6cazuNUfwh8NU",
  "key17": "P5Zbh3kQKFyzq1wAPmjte7busRzubStmSUYNUdfhC83rbf2PLCmJwfe8ZoKtw2hXzm7D5H2R22Y3iMDSTCujHpz",
  "key18": "24E9mkdaHbuqNxVcifFGEN7i3Fu6dSkiyjSgdygenD3TCLoYH6tjgvhpUYpafotyGsWHQhySPNLMNbjfb8JPng5d",
  "key19": "5B3eKkbsGcr45xLCYo2d1qsT9M9ppTyBxusgMSVosTzVybAPq634uE8SL4CDYneAhgJZNDF3jgyKQg8XmNv7cUXh",
  "key20": "JJ19aF3WrRP5TrCsRN4w4TCJzFGPQqtxe2pq9Rc6wQG8G3L4YzpZwrdwj6MbXfTigibZsfLsLZMfb9x3DmXPDFX",
  "key21": "uhGwFfE55s3e1CudHhrHs8K3mEJT2RfNsmUaQjAxYZzEya6iRh8V7MDRnCfJWrTgnGrxc4HAPXetjwYzdLZEkjT",
  "key22": "2Z4p8mowpLC1T3hrui5amNtpRHBARTUoFJ47QjtV2mC5vXJfQ8N1LD8EDHpnLJ7JTSs8RKe2h1H8BhY9fve9Lntk",
  "key23": "X6MCw2SF8LzwqfJJw9fwWRYNrmw9JyGdwRCFRoUFPGTPGKsEXvpQcJxUK42wT4RNCcnW6aupbc1FSRWdQgEZemy",
  "key24": "38Q5CLi8j2DstzG1f7bktUEpcpsxxE7jr5Bt3zN16Ut8yA6JxkzdCLgvBipxrxyGfr86hWMuu2GjGFeqxYcTA7TV",
  "key25": "JBVGc1xtdGA5Qd5aVz4vmnqLborG9sGYrWzYt8BrFHUahHwny7rhxqS3RUSUJoxSmt2vTwjAFd2evLhFYPGboT2"
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
