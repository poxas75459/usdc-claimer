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
    "52JkgxNgrLrTRKRNfuwFtsEHkqSWWXDvHJ5RDHjqoSoSxNs4rU7wsXQoopSEiP4W37P4a6XqtRC9BmoDDFvK4EzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hzW52hnfva4KgW7McyQgc6jyqZZ6mHTQd8btu7tfL8cJuVqUbL1SKWrJiYaJ7whamjpgBP18Xhg1b9haVAZgtzc",
  "key1": "4uLBZtD8z5pbECWe5k1ugRD6bGiDrTszKMLNRzTGprzM5niG4rNEm35sWCLVr3yvk2wMutVS4Z6BG1nbp6jYegQ2",
  "key2": "4qD1PM5BPnxXU4mf6BJHm5hPB97YZTjFGFam4tzDXLFo5UnDLzrfabYJ9iTniGQzoqK9jbn5edN7CoLtJjggxwTg",
  "key3": "63eCZ77Kjy8mBHrryRX11y8LhTTtNesJzHifUdknPPb2kFUbukJZd1zEeCXCKdKJebkjTWrSZJDdKLgjh1sPDtCR",
  "key4": "FfkYssP1YecZb8MrrKBp93sp8c9X1V5tqhReYvVHGdViNHPfGwFj8XVMcMDr2s61NGx9DGf7wBGhdw5LuicTuUL",
  "key5": "3UYpWZhbyRKNPGKuiL4wJbPaBadMHSFF44PKwJfsrDaod7hAwUXtthhMTpKJAgwFrUPY8PMgFWmV8YkonpUumMkr",
  "key6": "4TNeoLiLt3ko8ZLzyaKBsrwf7XZB7CTKL91vULetAn4QkCPEruHBKviNmEMcw3mTf5njNEHjH64tGa4iCQgjV2Pa",
  "key7": "Fy6VxHXPiqjsQ5UBAED7BkRr4xbg7JXQjTPryWeKfyn1jYLEEPmnyJU6ox68XhsNp6Hz4uSBX7KxRJ7W2GacoMC",
  "key8": "4VWWSbsp6EeYvE32662N9kY1PY9RtG6pynJ8DXkzj4zcVxdNNVPTKH1NQkzKcM47b1upoNHMog3M6VzLmDFW5Zrf",
  "key9": "2URpXEnbVZPmH9Z92SPcKaBFMyLaMyHVe9swQxeu1CJMqwF1PdZYHWv5Q6PsCidfyS99cs1iRLDRWgLW65pFTako",
  "key10": "4Bp9robAA2i6vW85SXSqPWJ88xz3o4t3eSeHjuWtstguoGN7Z8vZtzpNNoYtdR3jVaXftBYatYXy9td23PJsBHbh",
  "key11": "5soqhB4reorjGeYG4sbANCvvauj3L8Nqpp8t91ii7jMveQ6cbbXwo44Ypnp7x7DXgrHVPbV9vptdCkUJVBsV83rW",
  "key12": "3zhVcsMvARup66q85G1TdWArzaXFtai4RMu5DpeyLAbmnxvXYcGpdt4wx2ePH67yXEnYmtNUVLD4PVMGAzTPZbki",
  "key13": "5H51ggU4JBuQcWLcATBTziRq4VoCkGsjp2W8ArV6oPYxNQ3j1Bt24sdiWSCab4ma2ENzz7EWfrHKz5JgT8whSCyH",
  "key14": "5mnuifhEDkhaiNNrmLW5sabZmFc6k8YuBkXLdzyoLnpFhScdBPRBrFmd1FRbSVDjnmAZag5Wu2EWv741MTWKwddk",
  "key15": "2DWv5xwtPv5bc5N2K5LCQvkSmHGM9Hu1HD6EJP1uxCJV9PBHvJAPyRspzNgTEQeKT3UgUXTdq2BwMkmaejtcAVDP",
  "key16": "236X8sxTvJNPdwDM9PYGY7iRXGtkjSfBAjvGwCK6Dak4x5VVojG6HE6RtPAMvZa9B57UYAbmiZATMgTDUnHygkWY",
  "key17": "61UTqpPntNy6jJgoKJgu5ytDaCacNLXY4KvnnQGXXn34QZsx6ef95NDMpvNmRzyuoXLneMDgMR3pJwvLZzbXVxvq",
  "key18": "5mJgYJtnvQSuh6ZP3Qz2ivsxRb8ygpAemi8jeZatWyd69zXnuSaCsZxPfAPQX1xRViRFKjp57WnpNzxjY91Zo9uu",
  "key19": "eguwteDizTyiBic9s9tMQa15ESbPTJwNYXjfDEpGtv1G94S9VMijJsAQTJkeTXYs7Z9ywLDk9JEGsyQsEKheG8f",
  "key20": "62YJU5aeRSNVJ2KJ3no6H6aebVKTYxaLgbVAyVtrTpZ2W58tQcEJuwU44KFP9YSz8BnaocNqZULSp96SGpernf6",
  "key21": "9rbE2U8Un8PjczbbEKZoZpdV51HafntEKdk9EzJVmVt434F1ycGrUxCxErkmgvLRnxiJNwn1M7XGre97fEnjrhK",
  "key22": "5KRCwuVpWEvkBB5xRWLrw8HsRXQCZJMrgBo6TKr8AxuaDt9W3XfJ82gbLhTafmwz7VUu7t7T9QLMnYYyzqXnwRED",
  "key23": "2LGdj2FXDXykF7iCxpGbavcvQ9XdhAcMXKuP57jTXFYJyYBPvrcMT59PWZ24H9p4JzTDsyy8eTYUxchbGC7yHoU7",
  "key24": "3fwKe58TcQjNrrnEbiTVJ2DqXEcnW8iWZgKtQHqFVYbwimE9CrtVsCVPAqMg6nc9VN8qmfSHhEdJYtA7vUL9Cy2R",
  "key25": "55ar9BiCB9ZMsmqypd8pngVz8G4hRmPAa8Sgyeabpca9Xw3L8xxWgP9G7j1CDntTkepMYVbXe5gW7uzR1fqtucXT",
  "key26": "23k3niXS6FhHmymYCjqoVHVXb2vHo55ywuamyb3XypyuYhEMBxnfnKGKvZcqL3TTfprjFCrW4k9EyUNMVafHhF3n",
  "key27": "3cKDa8Ko3gWLVUPbPRfeqGSUxZ2Hjup9esS3yH5J2YhjEyYaraLFFuB3YiQSBK5E1thor8m77o1rpXqmfpH4KZ5a",
  "key28": "2MaRX8cX9VMjB53jExFTj13CW5xCdPLPx6vc1Xc79jY19fkf3sMWiEh7kqPCGykB1QwLFkWbrRGiD5YmqwLtfQvQ",
  "key29": "4fFcAxvfEobPKqvexFJ14d44rKzG7pTorao4hjrgHuij9DTrg1pX1GHkvCLkdeNh8mBZd9zZBmD3QSX1Cs79G1es",
  "key30": "3DwURsNFMSJFR8awnvTT4dHZXKJXb4FqrQFPs1PVp6obaBJ9rKsEN9PgwwkR5u7peRzLrEsSGn5nKsD5h3ZytvUD",
  "key31": "5FHLVbc4c8DNTrUcmLdA1yqeXEE1DBTGAohgNCk6SSG6fQ3JvjhX2GFhvy24s2gZbd4rdCTXbd9QUnzJE3e9ieMt"
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
