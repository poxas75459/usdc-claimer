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
    "3SwcxdA1k8KXk5tXWmwHuPRGB66Qc9XCk8BveD9eadVncFArSorbPkhRkPL5XpWk7CTgb5uwxeEKbPKLYwxLx5ER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DwKQK757PPaMiSD5481ErVWMfUi82tz9WfrRFj2siDCpfpxMsanhzuaMVEQApj6GwL6xMPCMNvnFwwPRnZwkz8s",
  "key1": "23HCp8eUhH5Zhjuz6w75BkWMDxUHzLMtLL11MnkSSR1KXHzpsitNEo5rj26e5AiFyx2QsbG6EjTV9xkbaiUoxtoA",
  "key2": "4tNjFTmPJiZKp2C38x5Do7we8jZKRrsVStJYy5JgVWWaA7NaJtAee24rD39Y1PWRW6KBoPmhfCyzFYjofXSFohg5",
  "key3": "3sudgbaCPCNEJ45BfocSitvo7VgBXHkwEiibqWJRtxX81fSY46Q9Wm8US7f5LpFtQDFr9pjKRfpzHE2yiZxKzf8a",
  "key4": "4AZ16i5MZ3EvXE9rBNkerRBGsHd6uqCDWpc6M5pHukTqXH9xc7UhcHNtWBHWtBX6u6G2sfYAtuffBp29rShrtiJ8",
  "key5": "4GegDxqAvRf8T2dghwSz23RC2idiZtgjtAwWgXy8xQX9BPxgz2sVryUVFsuBgaqwBx4QmaDxUsF4c3E613KdymdF",
  "key6": "23kfqcp7GzXBciAaXiLDj2VnahU9VNh1CwAyYJwYNgKMnbQmyF7Kbchwm5xuHM1pM5EyJR1LGqcN7LWV6tKVgjDy",
  "key7": "3ugm6ySxxz15N2YtjLmhes9kawrJsvsVtfvziRmoJjKHhDM7MWt89kLTSBwF1ecHsZ34LE2UTj2zunGrs28crS6Y",
  "key8": "fRit8qop1JM2KoG2fvhzi5mYeeLPLBYxEvPgdudMDsr62XdvihDUSYk6Up2kasn5nzAZJiwfHCbpcBTpnjVUW94",
  "key9": "4DssSEuNRurcYgpx2sYqFPcRd5C3TX9i9kn53GFH9552LmX2umQKeCLomfK4HjerAMVh4D6oa1hRonUL2sdh1EiX",
  "key10": "3YchmnFpuvDbRsduFgH9S7pZqhLVZivFoNRfcnMPv4ydGRJxDJWLam19reRghBbHqE2HceYDmoo2TRF9dHQCBRWs",
  "key11": "3kYQmiEyqqeykRTJ6PTssK6Zaz3dRPv62c8NFHAzyZrb5V3QFXQroJg71LNLtP1UeKB2ZwTwPsuskCC4JFL3BsBq",
  "key12": "5wpvFLiZVAUR4PGyFSB1oSY1S5edLfydKdhYHS3Wk1sFxzg1fSySj4QmJ4wW7BwcYVZs5cPh3i8aYwMwFzgFZLms",
  "key13": "49wjj9JCLNcSxdtV8rq6Nsg5YAMgDAZhxBYFLA2puoVkQPLpwn5VdNdL6nNq3rmPP7LqzoPPoS6oCcPaAkVNA2Sc",
  "key14": "2RfzW6WGnfuJW1i3RnsRjT4u6yLhn2gKqcP4uCvVpkHUHvCixWsT2YxNyDG2qJtTqRwuNRHFQCzuLFZeJ1P7Kypu",
  "key15": "2dud6FMpAEfxhhmXwtQYXZ6ok1JwPeceDszwHMBYdwDL3qftkJkpWUyKWcbnrRKeo398CahUDXbb6dQ8WSxydC1u",
  "key16": "2EYLtGuJZqrKtbbqnCLp3nAPAmojLxMF7x4tsWxNeVybtCpiLiykcyyMUSeYuiWYnksnHUFX7nuQGdtZ3iJr8a7E",
  "key17": "5iXpFiJKSjzocTKYxqxCxnRhSJkFZno38JNKiCAC7FqQJ9Qbim9L2uDondHNLH4L6njk1MQL8Xj9NuE6ifP2KrMQ",
  "key18": "27v8MiX3kkbDfugb5ttDujn2BAynUM7HWVTXU7jFSXbJEQcpLtN9riHn84XWvPHVcU9UuJ5BojTwmjUSi9tAzGCw",
  "key19": "5hgUk2rpccuXzbeKPKgS8KgJTMBDnspESow58AmgDBpdNyxXyRjyTFifDUeDP571VASKa6M49XTuc5DUt7wdunkQ",
  "key20": "3BXtrpqapaZNpw4uswZuNw7SSrRa78Uowya5VrpypqdkQ5TxBrjm5zfxRxb83hbseT6qmwCTZdn5Li8zSA3SBxGA",
  "key21": "51p9ChECCeEaCzaCvBE7J9Pd7rp7p2sFYaEADsxZcJzyGwRgqDcqCp6aKhHYHLH3mszTsCcDXV45EhyUk53bu5Ep",
  "key22": "3ACqPXnrXpe6YFyQiHUwhGdTJQH24uV67aXf2CgfyEDbV7JocGgLhHzDXqcgk9NX9PbbSue1ignGCj5NAqZTiL4",
  "key23": "35ubGx3Hd7ftfeYuU6JgY9vKMHKXJVTkcFZq1VKYiUpbF2VTQYkG8zRAwJDQRJ8GxWhHbin1MCmT3Ay5yDzqvniK",
  "key24": "3eqNcumiCXVmFxJgMr1CM4tQxuqbn3Tbuv2uqTGmWU7SSaFwB65uPgSPhp4swzcm3jaK2kJWUaQG9vfiez7sYyJJ",
  "key25": "459vsa62knoHGTXYsVeyKY8uxKGHWyGjXnvw1UN63NRqPLkALGk4gQXJGZszMb1AyLJEgJzz9BL2zggDgaz9fX9s",
  "key26": "3DEBGpYL4yW6Rd27m5VQwuMXGTsGWTqt2SryzuReguTrW9wSFmTnnPu2KKRkwbH2TcCjB81PVhjPGtHufuxWKqGL",
  "key27": "36PdxaLtn9uRLMpYEeVzWcve7EqpTycm8N1d76KsYiEKSDY6pHkddk7a1gVbK4sThvfAyq5gVrAAG26BGa9vg6wS",
  "key28": "2UZjbwVjU8HVwGbyq6G9wmoVkws7SQPZv8KkDA6V3L3vbtDDAdjjryfYFKDN8o6iSWi2xPwPpCsALv7x2fpJ69fP",
  "key29": "2hnTCnPYV9njT7P5YMVynvmGVbSyrLLLJYTjiJxwfBcd25taKQNZvKXp527fLjKYgCPMtnzczSo9TyxoS4gzxPBe",
  "key30": "3WepotTRvM2WS9iAfrn9GiAyuuuLnuGhX48RQMNJJ1JstytcYE1kZG12wQbbTzLKr6yssPSPVabTRrgwWRmKgjpz"
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
