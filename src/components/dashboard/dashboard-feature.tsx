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
    "5RGF7xm3tWPYeoapL24Q35rVhmcUxUZeKU6EjJsin22GvHWR1877LfFmLNByDXwH4UbdTuNPhtL6ArWc9FuRXRXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FgTZUcnVXJKu72ifB2ckHBFjwbFDRK8pemRaPkg2yyk5qkMUNkzFSU23GQzeq1kDeJyx2hBbW2FG5aVov6adBfH",
  "key1": "3XBaN8jeFqbJ6Zd6nCv5j1Vy3xa76zLTRDBh3Xe2hx9xgcGCAhG67ZGmEy7q13VupywihgTG6s3yGFdUQLuVB174",
  "key2": "oHd7KkRvUJUu2ubkNGgZiVw7bdZMrypGeMgWoHtuGRdnyencXRAL96Ubuq6auieHh5u5dsmn4NUBPjcz3RWuF6y",
  "key3": "34kmR42XaXHaCsfBU927p17Dr5UuBeuJroBN1qWdrnMhMSuTEa4scbqAN88XmSiLgcXZJS7CfzARTEmFzuurWaTh",
  "key4": "4kqMtUXkwvwCcu5KLiTngYtw6e2ANFWsLQstrkMWJTtqS2baVWK2WVpTCb26dsb7JbJWvgJQLY5smFeKVXHnaBmV",
  "key5": "5VTc4V6zNxQ6VoSjQD1roUMnEF65CNTGTf25nTrZK8MCYUk1ogpYtcXvhaURav9ifa67mvSR56marEF17UAQunF",
  "key6": "5JqyF7MT8ME4ZDSHKq55su9aAPXjyVqdj3BNPAbsZcGDwV8fMZ8UMEC6WD3hgVCiFw6Sy5bXr5XsGcWAf9Bja781",
  "key7": "Ah3WJ3ekecjmh9pC6CSiStC7uHMNfbJhHBcfMn1GyD1vurhYyW7cPNZjutQHtjXmR8x4WQij7yf3jz9NiqJwy7D",
  "key8": "4FLahJNHRKeVV1M3Xq2vhc7LiYykz29iZAA5Nk2CjirRxFVNrHwsSvHjsgZZGDVXPT2aRkBcqzXcycZK7jrxVkuR",
  "key9": "46KSYAvHR1EKXrrkmR9y5HvHQBh5mN6UVFhnBaY3nJTVN7mj4LMqYzXhxb3afZfUC4opBJWE3HfzXaK21dBnF34L",
  "key10": "2CgcmBCaEHa2gvVr66oLYpBU8C2X1fHNZUMYvY7TLRY3oitAg41UJKNBRTM8ukR2a9YnCcHUEav1R2RT3cRWVCDC",
  "key11": "3qo6w5cd9MZdJtN7Aebq5tqsYE85eyv6fLqkyKqFxsJaMCbkUDuXeLaTP96U8EmKqge9iR9BkLajo4wpYkdyhxRo",
  "key12": "2V1LpU2dSy6eMXjm5f7HWEJfKcxNhhibqHtaxkMTw2XyXeM4uywd8abHtpd3NeWcphZhXdrHrx5eNCiSYknVUUJC",
  "key13": "4cAsVNfyBW7C11aXsbR4mu2RFCBQNh9Ly6TLdxDjvQDTDy6ufx6AB7crbDjn7ihCDUoJZFKiKfY2G3eGrjehmhA5",
  "key14": "3NtJj9YP6NFukdczpY2UJwyuFqZ6ADK1Y5XHAwFZMJZGWCZrBEx1o3AFKtsXDQTan1w1cF6GeU3c4kYzDsJU1z8t",
  "key15": "3MGzXDVo5aQKACS5wSozXccxPYGYA2Q3PJbqg1YxURKfiQJCLccGczLiWFH4tX6NNeZW74PRwm8q6pYh1S43UPBX",
  "key16": "2dvW4iXjcWUJWswkhYZDyzU6ZM5Lu6HVvMvfHXdwgwY7Ldb2znUBEprLXb1XqVZL3AVBAsKFwfHGM18H4cPu6jih",
  "key17": "ssvrryJuLGvXpWS7QkHTynHG5p9TZTwT2x11LchMomHLT2fdhSajnUbwqdWjFkELKiJgf3LYSDbjunU8TshK3Cn",
  "key18": "272ijQQbZQxA34qPRGDGHcKE1HCmJAWATvUFCimkqnG1yKSnyR4JN4KBgvnvSs6LNBAfb3SELzAXGuU3NFjCgW5F",
  "key19": "2uP9T1PTqNFpPfDCNPXFp6SUqiuaT8FRAFfnrbmR1CpQAuwV258bAfUsJYSEk2vzCqSBAB38XtHLV67SdPmAzhUx",
  "key20": "4Mp2RwJXj12oF8WwjRPQVxYHK99tVjC5uxp6R36Cfur17MNVQsveeBLgUzvqQ9kur9oSE2A1LUYNfS39i1YjVxED",
  "key21": "62ezrETWeARYeVZKUDN2A6RdybqVnuX9DLmXFGyxxRpzFFroGcRjM5vwjRK3GBFMrwwZwi1aUu69JPZnk5gr6bAF",
  "key22": "2z59g66Ng71i98qqgxFcBCM6mPDLULEzy8oHKUfF4vaXhRA2qqXLzJAV2tzQAcry8pu7MFfsCsHVG25EV8vUFapF",
  "key23": "4HgLGHYVmhkCWKgotmBGruAgjsgU25SjtEGTghr3RGp5qfSXpy6Rcif5FAaRzCE53eoFDtDMYHrge7AFwFSnKwDZ",
  "key24": "39MPyn8yvZ7YDtc3PcfnvWjdahKYvFhTGYq3yaSJ4X337XaR4KAi6L9YowTuMaUpcRhB2esFczxBygVUgFB1xzwh",
  "key25": "3qeKEqsH6P5ZkVs4WgwqnVM8jzfMyScA8wY2bQEUhqZSbMRy3hbSEo5A22QnY8NyBQcKyV84G9FYWDxFdBrxUeuE",
  "key26": "3W4k1AdBPMUherxuFDjkZDPg1K8kN8RogsZPhomjsuTyHK7GU7BAy1YoMNzvX9iaGE3a4X5wcr5eu9iTa46HdPcQ",
  "key27": "hiZAdeiP5xwyi22sRwccA242VPJbx2ztH1pah4WmrD4WRKnsCkQUB93p4tYshqkiBDJPdPfLuqUewB6PKsiLVuk",
  "key28": "5wHT81R2yHesFe1HFdCnBnRg3Jo4v3EcSu1B88F9BYsMy69HUz3hCDUNVqDtoSE7kVoZVZa5AnLrLr8BybbqMRHN",
  "key29": "3rua6HzF9Rr89L2NLvqoNrUe325p1jPzWuT9NdwDiiLQ66dc6Jbxq9EYHYVAGUfCTzv8H5NwUc3KnAj4DY9PhZci",
  "key30": "44trwpwF9YEcom3peeGWBKLUJ8gWQLywDt5DiiLu3AxWPt7EdBnmwpELCMMmSyV5Za3TnvU7SfWUcSSpF12yYRMs",
  "key31": "5Bp3xwJEUaUXz7EfX4zQiMTZAjxc97vh3rVqf9SspppdXmW6ncv25YU53FKyxFt7t2L5rZMtgwoNZyHkK4eXjWk5",
  "key32": "5rYxu9M7Xp6YctwW65ED1uCNzzxMnZjFmjjq7A7SmGhxDDovzjxjoyrLy82f1u6id6LDcFMV6Ty4Fsn2NAjYT4ab",
  "key33": "29urWkvb9maxb9X4pkjKH9bL8UB6TYLQetUFzT6pazua28XUGx7vd8aB3EbLbqFQX8KW5hMRVbL9Gr7E2hHrrwX2",
  "key34": "Doqviu2KEPwuP1R9MtmS1vhtxPYc2SvzVzqaaomqwN8xMuBFMK8QkN9VombM4vBp9pQNfqaKRFYAnoJk5rUXfbB"
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
