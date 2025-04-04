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
    "4xztrCPWEGWHD31GCDJQrf4uo8MWSbXVbt62TXuJJBTADTj4ydqjrkeW8QCYJwbdWctxbjaaMy58PodQufYusjc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3otu5CbZxJysJHfedbES6YskcPhavgXpHvmZSxfn1PN31GCwMwgBkaiwjpZMnm7jDU8KnHvYTbNXEXEQiSriEjAe",
  "key1": "3nDbW3rgDAe5JPmYCmWh8oqjmLbWoVeQfezxK793w7rHSCG4RdMxYqnWWWvSVznMjLKB6vcmrz5b46ED7fGH3mLU",
  "key2": "35GMtZJDwGcRXYTB8C82Hn2w5UYcWimS7hQvd26mgSpyavXb7Jg8tmJCJrRjnUBz29yn32Zgm1NyR4HWKyDirnLK",
  "key3": "5ivxiWzJDZPviv3t5mjyXy8VxM9RbACh9Nqfbb9KpMs4XNopM8TwADNf8XfBz6iN43yq6oDRPD5DYMHBXSw1UUhy",
  "key4": "5AFyF5dHvAyihRnrKSe8eEwp48jsvhXkrgqkcz6dhwpKwqszqRonHwtTUTUDFQh8WrY9a2F4TB1aZRQoyhJE5dC7",
  "key5": "2SBtBo6QcKNW8kKKQX6iCM8tLkHfEcCdTRv2dupFAAA4wizmbCLgNnkFfgbjbe5cd9FTyMy6hbqD5LkaoegcKRt8",
  "key6": "4SnC7jjYy14W7ayEAh3ryattaYRaW7wN2mAfVNNGurtfZzKVPHKbFRpqKmtLifQNDdM9xD2nLsYFb9xo5GaqDWFF",
  "key7": "5Zvr5t3yFzPAttUijN6njzzYnJJEYY3c9uCC6pQjGB8p5tjqszzrDK8PFyPEhRjfgn127YTJfFp8A7nWMoBaWMqW",
  "key8": "5435fYoLtyCu8PgSqHKQhA713eXyheyyJUh5dCgiBuUVAUctRopuqS78TGD3mWLJwYMUWzjJKEb7qLHNTJBUuyZH",
  "key9": "hKZT4YiVtbs1gF2Wxib7vEMDC1EzhbwpeTCHcm8cv1HbXLTnEJYAoMfi2apyotZit2D46o8DSZELwsPgSqrSDu2",
  "key10": "QYAvHeYSGy8nRBqwSCuSzF66z2CF17AeimZPSRRzZwAqh2wv9Jg7Hhbm32XPRSEHj2S9RivVZWzLDBTxkQrencg",
  "key11": "98FigjYKDoA7ZGbBx3ncq6VVJFL3emJiumrZXw1PZuqRget9w4hbguV99p4UzyrRcuMSHQcGT5fzYmLFQibUCFF",
  "key12": "2rKuYeTKaqer27mQqvZ5Zkjn9pqnSHEgKUuZnWKXyuBa5KZ8cQdnD2hZK277DfKbjsZURqmvgpe2GRtavvvHqXVK",
  "key13": "eubJrYkJgojJexm1eDNxJdKVydP7E8SFxjk3WS31AKp66DRqogUrLmZmETxqwsg8EHSCJ6zaVeB7jjeBMBauB4s",
  "key14": "2yGAFA1FSCPea6Ny46niaUxdCcjMCCJYUXopBahAK69YeAhsSmMK6gftPNJPigWNkY8eiFJ1hugp2Tbx3t7P7JPr",
  "key15": "29HTB54dLHaTs6wQirUAaEB8fjQPD6P3XWCqE4Pt9CRW9TViDq3eqK1jL1ihZu3Q177LB1Sqmony5TC2Ywmx5svf",
  "key16": "5TH5K2hMPZ3hWcmzbv3jhpLxp9j1kDG7Lk5FTwGqHSB8BUAqiy9qfAuogFwrRkK1ZSDEv9qCw5u71gcQqC96RJYQ",
  "key17": "3QyP5rqPrjM6qFbxG5XU6QJx1RPBDKTqdAcu6bVmN833dFBcM2zg9ZV5UV3MXyLjeLQtSDhehxn5qJnDuymJUSG7",
  "key18": "5vu3P8KFPMu3bjmavCUFYh3E1fFGFtV5oxGKaBGWFeRmvRLZkekKL3CbmFC9kQ7fQfsJdU6jbu9V5cxEerrNGVXw",
  "key19": "4nmqUGfsjFXfgRtoFCXjTtpyKMMRu4MXxYvwoCZ8KG5DjLycEDA6WhMhTBSNi5sG6UTyDtvjyXFBvTs6hcUxwgNg",
  "key20": "31XYpDNSca5CiQAkSvQvKkkwX1Uo6MEzXSDZVMjptNNF7zNjUqswfB5BSNaQpHzNhzuHmayPtBrNrGco6RnVDMvH",
  "key21": "Eh8UrRKdLZtGAwxugfDTDS9nMXhGqRT4N3gdMrgRP2uSjXGTB9yX93ziChXBHhBHiBYtVK5i1b9VpL3MxpMcZBJ",
  "key22": "5ZE8vTVmKqUKVmLQZ2cKB79PHFgKQNyHXjLcA76SPGm7RU2wfR9k993XKvVfGpF3voWj4xGTXJACLNcmYKy3oNX4",
  "key23": "3DqtGBy6iNEnYnLaa7LnJBmACG5QZNDMBvMdYM8sQhawN25o3pj2tzxw57shVQChSrt3xps1gB1ZZHGN5ff9r2Hq",
  "key24": "25MxEiEVMxqJPXeG84SqqDLw9jRiYvZaNGsPRxqTynekga6HkjJYrK5ZHNFUjqcz3oQN8JWvDHQb4vdWNHkUpx3R",
  "key25": "3svFawffWaKJvZuSxUNdtr9DsXu53EVK2jZyVKFiWBeLagHwZnPNkYNneoLrNUc3wW6s3iSC8j9zEdZBpoPbJV82",
  "key26": "2hVRpXMqmaWF3wvxqvaY2pHx32wUFXdfhwJ8zrw4cbQ7ArYieA9JPmfFbmyANm9VW3587ymtZaP4ttjJpg3kHjW",
  "key27": "6zpscFSmju8iBtLfXS5srW91FAcLNEk8o3Gp3x1E6WoyF6CwLR22nvy7XsSZtaP8pCHA4Cg5WsKh6uyGzYbDXBd",
  "key28": "3Uo1sC8KshCBKRAv5jXKjdR6FCeyB4zGiZkE4vjxojRd3fGNVWM1mMDM7FF6a4Gs5Se1VNWoiDiPwhNHTnNbBshM",
  "key29": "2H8pntveCr94QE5gK8atNKF9QiAxXfv8asGTQiXo9SpnguEGHfxbXoirLk9hYTYq5QciRGEz3LyA3iYtCgofne5i"
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
