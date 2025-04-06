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
    "qXPm5BJTXGBUjQctyq96jyEoJbEVc835VcA1RcGqN4Y7riV8viwMgMSbj4cY726Fc35a5KWaejy88Qigb8pve6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eg3MjTQZeKvWq6UrMm3cSVWyGedLmqctufZQzzhzfx2oS8utB6Dgf7HxX7HdN1dzQQnx9DQm8tX7Mr6z9SRCKoS",
  "key1": "5bASFGsV5zhHVbSjcsvC4JgPH4Q5Yemany6841T5t3yakMEZiWuDUCnhrbZGQAdqcvKunA16nac1wvdcRMasPtnS",
  "key2": "oDjWsmWmQwPZWP7tJi1CYsEipnUGJHrsBuZysZQatbQFfn4tX5xtU9GJkJKPrAio962PBdeDPm6fESFoU2ZfpiX",
  "key3": "ntvBTSAQu3ByZnH9Qx6ShLW9qkFcm5GQmzpcsvr5cDvDmgkFzV8QTqr95GZ1MgZjPAAZDctc8N5dRJkDSTe3cjG",
  "key4": "5LHwEYJVCrYxpvXCpt4wZcs6wVJcxdAbCoyysBCzrxXjunUPJ7TQsEYFT4pJPdge6MMacYuNbBk75EP3fuc6XBLa",
  "key5": "4wcuRjtCG8nbMuL1uRCCkuomGEJGt18YXm8Vx3dRvs6UG5DXUZsdZSYva8NBbXFt9m8dKWqxYf8ahQKBQDc5ZXdA",
  "key6": "27T9huk75dbSmVSoPH6XcNHzwGkkHyX7nRJZiyCzEoaiFXL7j3yRQVLa2zpvpdnjcdz2oBtoH2HS2G7SnTw7Y5iS",
  "key7": "63pxwGSVSHZnnsGVcsoa3BkNKfSKJA4xdsSPZHDBmP3ScQSMUTpXG1WSkczYDKbQ49np13NzZMu8ZGyNhEGmPyAN",
  "key8": "3YXBX7cZbLZJbFbSCgoxpvUPPWe64rX2xCihTzULyAGpkediU4WUnaMnnuREgv1QFanNbYwvpuWJEsJhfx5itLAR",
  "key9": "4JnYdMgDJ2zNhmmr2Rw1DwYV3VJadSc4D9zR3k6E775VguibhxBi7jt4onEdfLbkaK1HoDidoHUTvbgLb3zHEAeJ",
  "key10": "8iBv9RfCkbPE8gY9SxSVsSrrwqKzqdihkhtYKuZVVrSPctgvZH1W2LUtWUSBsMudRYMFkzg9Mc4QrSbum8Bz7SA",
  "key11": "TCnKqfnpCn1ctxVKxuaC5zzNdhemZQw6BB1mpFaZtDYsKqqmswXtS28pRt1KdPYpUHMaCo5QLMr3yMNjtexHrw9",
  "key12": "RMCJRM38cRQhvXtpZyJdXq34zmoD9aQgYNsR3hYox3pXMAnuNsKsYVz8daXQozpSM5DgZYCqKCwUVkEYHWWoraF",
  "key13": "5xFivZAvzi5piZwwXC8kk2F8BHT3PRQj6uLPND2z3FCjwmyWMuydxoMYK2TVpq5TVfGrvZmKbsiebEQgPCtRmsCv",
  "key14": "2YL5C6kFsyd5hEkhXEPUccf3y7rkzjN2gNTVjN4ym1sbRrtZY4J8KWjaBeBE8Wj4y2NYZFLWPwe94HgP3v3ueNEg",
  "key15": "6DXXGTBCJZ9ZskPGJK6FqsE3e639miKWqEZt1BPtXYHpuNeLo1UANAt294DhHxcf6imm3Ua7pFUPWD3fBLGRzsr",
  "key16": "5yysRqSVHXzqdcER8Ci62mGWXGD3sv7ppHkPCbWZ4NtpZSZGbjKjoSAKLQqZbjqYMT15GsrxS99CZAyZT392xxvs",
  "key17": "5o5N1MoNv5rdpw9S1ttDkr2hgKasi7BvRW6bSeNJBjiZUGEeGgQ5dcqRE6ZdQbJuPzrH6hU1t28nBwsLnjVcrg62",
  "key18": "V5yzg91UxD7yz5Xw1iLBchhyCLAnGj4LBod6RLHaKWcpjtUTDqCTPhne95mi5vAbKNK9bcEWwvAvtSFKmtSK66e",
  "key19": "5n8joxpG22GMbVxkfQL28hLVeSsSdkm1jSt4vZUbbniLbqKfizKcHM6dTNQ4LeCjBauQRJfHRZCfSHmBDkHFgdA5",
  "key20": "3Rk3EphWxBVA7E8gc9j65fjeCFCdMVpwz5y85v9v4jXCHy2DG3ij8S8Pc46xCaBEKNA4y2QeVUsW3GdwWTtm9mEQ",
  "key21": "5k6U4129RWrhg8FH4sbgE8dNKjqiSQrUhthVYvULMzSaD2pXHF8J96SbatiHMK8SN7UpMPocZ2L1QB4ZZdjubyNg",
  "key22": "3UUcMiYd2GfGqt8Rhropp3Sh9nzfFuWzF9RKQepJYg9pVnyQBKjupsJ4KLySfQuNn2pJgdGTmNq8bGgQM4uuXhat",
  "key23": "5n1nMYmwTy2VcVUiwcWgLKmhhLb2dYBbJjygGpLMhoowBPBuDD3zA4BJ3QLXj5SVHSwZR94gGY2TVovjFsSBrXK",
  "key24": "X3ySGx9Q6gZMUfkau3aHDKkgNRGjVmxyxr9MGKoSZuVufL444qnVnpf8UPoPEzjWBqZCcaX6WGDuBD92y92sPNd",
  "key25": "5SxgqTPKQvnnRqMW5DJHXkDgDG4rggPzHBG2ZLH5FQjQaduCoGtn2SKZvmxmeY5oyPLktDT6ETbNP2JoxpmHeqgX",
  "key26": "XbpSB4CBzPLVFe9ymLATS21JcCg3SgWLNXDRJiwPCLMkZrFodhkmqkwLHiaLugjyjxDhCWRdYsMrqFPeCmMK5k5",
  "key27": "4Pf1XcH6Dy3uadXc1zJr8o6ZxXvDWxnm54kjWUZMwtCe4bo2fsPi4mC1uon3HtybgKCbQNJmFxz4T1JePkVdf1x7"
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
