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
    "3Kp5XoF5v1PXW7tHX5gGGbNAx3R8EhC68mWFUNAB97emx7FvnPyio4RDVjKYvmq6SPaw4xGJjtmLE8spA142oggb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GGviYzZdRhXmffC9UmgF82LHDUGNPP8dVvKyNEcKDHyajUvec7UwMhceYohgdPrE7MdGQkhZ368A5uq2uNJSJBy",
  "key1": "3EsNEsoBcaEsEbLk7NM4wKLukzotUnosLCNiY7KYU2GmHPeVw8qRFywohH83RrMmmPqhA86K4cpYkV6RPStCtJ3q",
  "key2": "2hiudZ1XzxuCLGQWM6c7Tzm6SyqjutaNHw6CRYJnrjbv1wVaDwApNori2QHkhsS5sWFXDnivQeR57UzYerjNF3eJ",
  "key3": "4C1ZTL6b8wa9yBqFpU4nGNm9Ug6frLj9wfpjvbBZXqyFWoLcVKpPmGLYQwW7MR31efnvoyywpsShS3FhhxAoEMtD",
  "key4": "M9jBu2wCTu1oE9g1UwtC7dJSqwa6pp1oZaQHGHh1YwDFF4UBAH7RgRn3hMVZqgQXMypFTwYMTaqqJtC9AAHuFeb",
  "key5": "2Qe5RuHXiwBjY7QT3ygQxsuNr3kUQsag68LG45xRFkprVDqCYN65yP3HTTWbhzTXUJXFLjGZVygek42YUo6XQsLe",
  "key6": "3KbR6BmacupmnRwHqjQsKJhp5AnEdVaUFD8CQ2ucKVsCw1EP6Q6ndQVQxcdivA4JKTRAaxJesxmN6NwjsUUdmyfo",
  "key7": "53yLXbHCbpb2mE7Kp6sv5bQBTC1LxZFBPq48847dLDwtSbYujGPCZ7qtJuScBTWeEsqFEDvaYFpNXEaYUYgJxPyV",
  "key8": "4XPH8HmjSc3UU2ww5FYwNWJe4uSSZapkGXVwzKHR7qD37cFwZsuPv67w7ub8Uq53pAZbLAX93hGXq9g58YWobLc3",
  "key9": "jfZ6GRHDgMFamkpNigU72FqNF7KekuzQgdvmeo7UWD57wqogHiKxx9abdmxyToRwKFma3Nn79wy69fSDfVmnfYR",
  "key10": "3LWxN9Q9DBt6MfXzNcc426TxtiRK9xAvPurSZHL8z8GNd9mDVwidWYffEnhyntHW9La8fdZQpjkmYnhoQ14Jr2FZ",
  "key11": "4LdeTiab7DrThsGvRfPvVXLjGyctrJtTa46MEYf5MnMP8CcwWwSkeQ3Re2Dqt2Hto4dxizY8zs6hHS8oaGnhpjEK",
  "key12": "MBCFNG92qRbBGe7y4XvbWknxbTw1LbtigBfP5H6VNhPH2XD4uiRjW4Aa1sYcSbHowa4ZkwapZ7tMS9BYWi2Py9B",
  "key13": "Pr4DxDVTWHVjGzEHjMu2w5qQvgYmaqFhRrHo7aRsg3qz3edfEYBaGTqJpdikYm2HrHLrbb6UNkwPEsDfkDcLJqH",
  "key14": "xi6YphYP5ZQUXALLu16Dh5UXJG5ZwPX4S98et5fNiB2GgMxVBuguZFAZ4uq3ZxAQfjdgHn7piBGVrtyZWfy5Zco",
  "key15": "2Ee5dfQVvswms2Ufvp38VYc4kP5rdCqf2MKRiYyvybg7rQn2YjtMuYah5aDLR2jtcs9h34W4y8h2MnZm9tFRGsLz",
  "key16": "25LVSEtvqkBT9Z8rnWbHNo9sn3zADKLS9iYc5ETzsKJQ5WdaoGXiZ7be8Rc6CtASPDH4vQJEsHincomCjHZTAjcf",
  "key17": "52teUNnuU2Zk7mtmos3GGTrD6shbSvtAaAmvbhpxmM9nrQxrpBc1omhNgaAYizwhvgbqgS4RckFzkdxVBgbEb6qa",
  "key18": "4XeQQhrszRSmJNu3UuoRqEsajQDHuYzjzirEpKbVENG9YYVzCg588Hip3NBie6PfL7Z8b66ymEt84q4oVhWi8nXg",
  "key19": "2ZTccN9Avt9EJM8tjb46S68WS63xDD9c7K2EwcSSwcFQhvw2Tx4aYPMM2EtrLEox41EzdGFsEEx8Kthd5JWHRshu",
  "key20": "5KxGH3vMmj7SnV6FDE5J929kP9i4f8LhQe13LPPkEhF7RzdGwn2WkLCUfEt2duhXRh6Zmr6uTcnAjutokKqJnKxW",
  "key21": "4DpgRsDTS2uTYsvsmCVkbNveT6soHSWzZswtVhhLSvudwzrng8Q5pWA2MzVQuXfTs3hmX5zcortTYLVevo1eCnj6",
  "key22": "3gseQdc8HHMnKbjDhvNaQYEmXJPYqve4vnZc78X6myBKMdp1eiYCB9TBaN6JgrMaY8bgso6o65E95op3HmrbCLtw",
  "key23": "669uovuiLknCYoeF6Cz2Cq1Jy5ivR35DHStzvDVnK7yMqaJHiHz42nWY8Z8ft2k3dd2WygnwKRqGefC72EJpEt56",
  "key24": "4DvtV75bQqrmvbi1M8orWtFdMmQob66NkKbBFiquppXe4XUvk3sYj9o95Ew3UsPSZ8SDybk6vqmDXndu1GyDk49Y",
  "key25": "5jkhcZwGbVoowr5PzZRtVpFpJqMszAUcgNYtBJCV85LNyif8nZMt6xSj2Y5RpMYHQQtxcJGUYGEFVEMkga39uh5x",
  "key26": "YyupUKR51nR4J4YjK6ud24XVLGTz2pBTdo471NrdMu78gaMp9CWZDqvBR4b4YvSdt6LnwYUF5jqZs98vBuoZZM2",
  "key27": "4tPnDarBYUZUxEVQctrGLBzoPntr1pLADwCpGJ3oHCWBFoCNb5X5TeL8LX6SC6sgXjmTQW1QnH9FfxBVBXC4Pyph",
  "key28": "5WeJMA18qjt4umW3T4LQWKrpu525YX9zVHJo8ZyNFYpAe7TwddcSywy9TMxWF8sbHjG9ry269RzXYc6iSPNWxNks"
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
