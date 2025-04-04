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
    "4BmGqTcHtXoADkWUgLE4SQ3JpnhnMp8TJKsstGyus5p4hXpf1hSfkAGXZHTazNGBhKiW18ZikFd1n2hXHGdGVTzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sBtPW6tyFNrRXGy82ZsH5ZSmnHB8vEAxcDB55fCisAUvUT6DX1tFguw6sLcaP8mvVqcWwVF6EN2JUkodtTzbuWM",
  "key1": "5LPLWwtsi14YXN3vJMcRorNPbJE5PuP5NDfDzqTdqid1vgoPmhycnaLxNXBbfAnMo6RGHbGccRCN95bTqGWGsiZz",
  "key2": "2bmP6QVazGsQMorQxoZoueZD6n2HjTQzf6vD583wkJGp7fhmKsuQMQa4tQFAX77KosnVbtATdYM4APJT5v1nJ8Bk",
  "key3": "31S649mYQCkRYYDUWfwyvrnez8pY6x1TBhuh2z3ut9X1z6jNCycfv3p1n4zfE31VZocK6mgsQ1oYmBN44FGwqpDU",
  "key4": "2EZg2Vtq6PyZCgKT24msz1pGGhThWpasa4hyfkXidhdwD8z5vHv68ZvK8cQNfL3Rxwmccwn1BhWZoiT4zwRgd6Qg",
  "key5": "5aZoQPJktki9myztMsy3JrwjrqysDktaJix4UStfHaVzpR75eqV7ykU7Yy8na5yCUSbpKaG9WmyKqHEToiV1SKSj",
  "key6": "2jTHqLLk6MuZNTR9rXGGfLUZCXda2gNd7XiJcUZCzVY6gqS2ibt7Eie84dJv7CVNUa8C6RJhJgpcpZoH9ZpTFoC6",
  "key7": "5g5AxE1npd5DoUugfVZgyjJNhyiGq6ULhTf93ig7cBohb5dzoR1Y8Dn31dVBqFoN9Jhuh6MjDzR4uiQr354J7jru",
  "key8": "3yaxJ3QU7Ujv7LiaxxMGWxir6ud4uRrcgP2LRueEKe6xpqfwWgjvUXM3qv2aL14dbSs6oBSkhPBMxoyVRAVpGRf6",
  "key9": "5Nmh7rBaTz6rxKi45FrTR7bXLVCjsfSFDjfuNGynXepHiZBUJvoQSmjT4wQb2g2bnNWcu3ErU6S9drtqHs3CcnGX",
  "key10": "27FPSjaS8Ty9Qrk3esnTCTRLcCzDYBpLWBzDuRZgsRQJEdwYRV2LWNfWx84Y1oeaXqnPME2Kk65673U1iDHM1Gzg",
  "key11": "4BfwYmQ4wyP3iyUQEt6pkc1mt85TcEKzomZv9i5yybFusH11DAFdzyPcLG1PCeF1zVQFRn8EcS1pbEue6j33Dz8L",
  "key12": "4q6Fg8NnKcsL8X4BAC7keK8wTt6hfPn3QHPZ6neX9NADjv4py9eiZXugqndAgH94KvBeY2MkyZ2teBBi3iKwTQRi",
  "key13": "2EKAd2Q9N7hD8SKNUXfhtw6DvjssMMMdKKMe147EVvrtL4cDiPCTcQmmHvofGvJfKUZbS14Juk5kiwfvKuaAJeM2",
  "key14": "2sRLPQkPeQGLxCF8Bbo66cbr5LTsxUvLWb2GGA66SFxiJbntPU4L35AXYNsXWyta6jdUHTgMJPe8YdaPjMaJkG2v",
  "key15": "oRbmmSbtRLzbsmjHhqUmmNAo4whMonD11J1reJvPoCu47EebCasQGx6GsDTvYHTKALU81tBi39zA4ueLhqBcDj1",
  "key16": "C471WzM55zyxnb7vgNgLcasab7fArxRXcWFnKxoT4aCXeTCkwHXc2eaN7g3FggmL5sPgts7f5uspyggpLTU9z94",
  "key17": "3QG62h1j1umfYz6MSFp2NayDXfnVVzxYs798fQptpx34p9FaeRP1vxeWAH1tzxdyku5XAJ5hkKxE1rRd1QSqQTER",
  "key18": "EAe7wFtsTxZYptHPMfrJkKNfwHDDofC6FiK8B4Bp9gsBg8zNCGsNYVbdGaoKtTguvNcn5LmD3Xx6bSf4v2oBCYM",
  "key19": "242uXjbNH3H5mZiytm6GoSZgDAakhCypmpJNGi9LCAtDMX1gdwaYDqYX3zGB51aGZo8E9S4FKZjTkmeyeLAwVaiG",
  "key20": "5Vdeaf7oiHZdZryvCrPPm87MK97tva7eKUovP4MvH92g9seYGmobhYsqEJ57fnw5cvgpsDurR1ASnL1BxqNkiwum",
  "key21": "2LHb1MiLsrJmQd7Wvxe738yFoZoqgZWJJPRFrsUbwZTFLBWRtCgqr89WhuaDtdRnokp4uduZzQPpSzQXFirxvPTc",
  "key22": "bfjubPVnCDjUT91ko6e2icrymK1Hk5QZuiRR8ZxLUPRd9JwVXKWMxN2ohJkZYCfTpNtxrp3TzcMP6WLHLrjEED9",
  "key23": "5fpX1nU8CWzM3oGjcv78aX9JjnXiuBM861KR7XcsvbvKJjnN6vqy6GaMFjBuxUieHDoEvBDRraBFRkppkw4GHEi",
  "key24": "tqGgXUiPL5kcre8WtrvC2udGGGGRfRzVbnszU6FzQ8dzDx3ft8QXDrzEW6Rd9FRPAagVQpW7QkeWGicnBMbC9Qo",
  "key25": "3HUZnkohhi3JhxTnknn7DpLxhWK6FCLVw3K5tFr3oJu1fwPS4WbZJW3dhyXDVoLZ5fJpY3LTzGtWs9jBhuMEckmA"
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
