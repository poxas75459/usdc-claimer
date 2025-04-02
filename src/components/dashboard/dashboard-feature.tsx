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
    "4JeJzsfGbmPZqSa76B4WY2U2iQDD4R15thD5fqMekU7EG7u62FTVWVKjo1YmC1bX2PX5iUEPT3K8d8FqJweQWRVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JFe47GTYPpGGFzi8G42hZY2NtenG7GkN96r5a3dArSQbGp1ngzR5QtDjnAzmQrAGKgqjnZReYirGn2PaGZyLkH3",
  "key1": "2oDmXXCLPE6kduYDgz7gUTgNVvm1Q8CwdZyTtADRZnMqkjFQF5tfSeVr69cxP5GPGUbhJHrLRU6SM6XJa6YfZB9p",
  "key2": "4DtG2FxSsFqsbQPHT5TCtnTUABxBGL2cPqF3QVCFmJTLgrtBJWT3tdB31FF2af4BmbYyk69Vf9ZEzbeY8fmvRTyC",
  "key3": "34oPgCX6a8Drr3Y6YuiA9aCAxmm1v3pH22YZpeedfHHyejz6KWQNcnk6RU1UWP7iEjcheMDvK77DDSG4NUTUdLAy",
  "key4": "3yxrQ88ZoFqbvnrx4kPV7yUpaFEuB1E1unrv39VZoFyYVmpjeC5rMn3QP6WNrnGaG6DJepzxPYqvy1dVrS13g67f",
  "key5": "2PRdGBxSSC1Pt6ANysz5TRxLTXkVXTtpF1HvaN6X1oG2ohxqpMCBsSdKxH1i5FwwSBSkg4FCEVxRepujw1nnt71s",
  "key6": "5fdbLW2vMGNBfSNhFYXNZuabemA9An3PRrxhVHsFf6r6WYQiz1MNDayKdeVsKiVpJ4nRHeBoKjSAnaeHfXbrfMNK",
  "key7": "5LZFmdo3QJkPjE2EFi8uyF3XYhHMuyFHAuVxB54JCKwPgtR6DPcKvFbroFF1GGSo7QfvjF1zeUrBgsdEKCbymmmV",
  "key8": "5stmeRG8WaQBVxELS6soaiP6yUEHeEWo5Bf8KHJJMH8ZdnQ9cpbmnEBMgjxJqdRmEp4zvLKKWaMrjEbJHa6K9LPt",
  "key9": "4M1pt3rUhzxgyTgoLe4E4AaiZWSwYLgdkPPVTrGNyoutzbwDqXZa7oNDP5FmoGsAziW6dQfMCsBrJiUwjjGoWWTd",
  "key10": "5YK5vDL5gVxogqBbhne7ofydQ9wi1rXkNrkiMm7vmpLSzGkj8vDFuxSuyoad3GbqKjAgsNiARq9ZFijMsqFyu8xC",
  "key11": "4B8KDoDvQXXuPq1f6RksZrHfPs9Rmo4KTaNEFevJn7mp46PA8SGWjSzDK5kCogSKvdLb1kYFsbzdRzuzoqnzZxZi",
  "key12": "5n5oogSKVsR59y7LVVrwRNRmvTXscaUYkttEM37uXuMsktUJ3E6GJYS9xf8ykZVtaAoP1kwaYkh19geYhyTQwnkE",
  "key13": "3ri55vGfDiRCioq3e5gk428kA8ATNNCQ39wE9r3A9Pqajyqk2Ti9VnSQ5VdyBQtd58HHruBmXDXnpRsEekoFisCB",
  "key14": "UYMVCtUwaZFn3S4tkZ7PFGkLBMPuaDJEFuB2tQMGB4nCfXdkrhJ8evV4TiXVivFd5mC51kXFDp67JLDEAuMkvE7",
  "key15": "X41gy5UbeJMkzmbLCourhPhScsg32zkjsagpna9fR99kRZtBiWTw1fkEc6ULCukwhKjTNmbixwSR6Zqpq8hnDQA",
  "key16": "3CL3kRM7D67bn5kCmgtrJk8nhryW5jhhKbtrGWWRsm9LvtX7BhNZ3TBw8Lsw4tDvaVMzaNrXrab1kv9YoHzsTsuk",
  "key17": "3eoTajHCnHEfPaM1GswEPmbejXZu44xhFJDnLrTpA4nGLAY5HWdDNu4StEZ3LVx8HrrdBFr85vMFHcTVvGz3JSid",
  "key18": "3ymhrDQiLQzL6gmrW8aVUPNWx9dYo5fu2gpf7sPp6dmookQ6pypKp1P7pVFRQ9DdcZrXkh9Ztx1SCrK785vaJ5jT",
  "key19": "53m17BDcxFvZ94oWhgSSNLQdnTUM3t1Syrz78xKpa5uwVovy9gvyZYVAi8bMz4KVp94VFYNe2FXGDfxnqbHdVsEH",
  "key20": "MSocSy8Ek8bUkurqWHEisXmPNir6LUGZQNkT28wXpxSBPFxkcogFcbMPK8Fs1DC6GG9x7JpWfjWa35PNRqaFreR",
  "key21": "2pcwo45JWF8LDGTvL4X7CcV6pNa5fVCiUJ9oAbbyYdZ3cECKFVZKCihRbzU6PtUDmr7HNbDA2HbU6rwxr4cZK3Ft",
  "key22": "4V4RzZaQWY7MHKvU9y7kBMeNfFNSJUPDNMPjzJ6rtb17FK146o3gaw7VSh98zYfFSUjVqwdVYryyfpE8kwXHfrKK",
  "key23": "8RK8dy7SUs9HP8XmqnKamahXQTQ3oYBZV5KQRNPcTXGtMGSacsRNpNZudBMP5u7WEDsJPGs85ry4Sm1tqXc3ARc",
  "key24": "66umiPhU8QEZfdBb6o2YfdgeR98UoPyXvVatSwtHFB2gVRJsqfi2wfmWbJX2vvpZApZKoJjnUrNCm8uvmv9e52g3",
  "key25": "2RJLXwW6aL2L6Q9mmHQBPCDWaPh9zTnk7pariJTP9ZJVpkT6msb74nJmCNruL7szVw3X4oiZU8skEmy23jWdzQ7x",
  "key26": "3XAZrfcVYNm2gwr9MpGiXqujK9B6V51qG3Byu6m1s4Fyy9TKAzodvrnmjgTEe7JvT9sd1x3yffw4C9962tLyZd3D",
  "key27": "49etYzyy9fk85ocbMAJFsbrPXHmN2yyUPfPLto246gsHqr2SQj9kP1UWcP5LRpsK7QrZVTdJ1KxRZyf2bXqATj9d"
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
