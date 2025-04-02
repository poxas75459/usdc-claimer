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
    "Z9SbyEqCq74rH6epdyAuYAjGZnpKTbTVrkyGwwvafYnRTHhhNtB968gGfd1UFJPUVfPvTRmMccm5isghHm3hqs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gEb2MeCt2trsuDXbGpVV4SXp4AtEDkxKaBQ14CinRbNJ9P55snqPjpuWEMVGPHkwEGPy5AUkePmLG1igCF56SzV",
  "key1": "2trFp2ek9kw1XBJ93fnmh3i2o8D6MRDR7zS2VB9f2mnoHZhgVhuBdMaA9RDcq3CnUmTxbPSZ884WGMRk1rRnjE6b",
  "key2": "XkgcDTJHaeHL1q7dzsXDK3q3kJn3Zzw3Pg8BRY5vZApoML7Azzssup8P6Eck5EpJ6pFaPHM2DKmtv62v75vJTDC",
  "key3": "3yJqbuGD9SMjEeFKDj2vXDW83jYUBmUVacSmUXMJbH3DhWWZnq9a5e2tJRX2n4r3Nsp2TKkGG8FVPw5TviZVCjAf",
  "key4": "3vLb91aDwmB4SodUVGT5QAm7T9wGWQFBtUpdUmrqhG4zCgPneJsrCpWGBhz8G6HRxPWLBiNBWym5gWxiqHz8ykA3",
  "key5": "5dgiTWpbYtBL5Douony96tuaN13exRjYVbqQDoSjZK3oYfqpdS4DghbqQdZGoNNU9JMUHJRdPMGVdrJrwZxGLgtz",
  "key6": "3BP2cvWea9W1tf7syTvKvTHkQXbN3c12Cytw2LqVgoJVvJpXPEpGrrDZ2RJMMUwjy7xjAgm5PPCNAR4Qt8Nm2wqS",
  "key7": "3KEtcpvv8dF7fq6p1mQrqNePD5U54irXSERc5ra293RSLhSRXQioYsXYDUjZcNqQbkZc5UU44Qj2PPRTo5zT79WH",
  "key8": "2EqFA2NHRA7sZPB2hd64Q48dJsRPSaf9Px3TjGEqfdxvCv9TXcUUFCfkufu7KA2PN1Qh6ub6DUUXYxXp3CUrUA67",
  "key9": "4d1oHSMc1tU1gHyLKWLDbc9L4vaNJdywiE9hqumaUpT2vZNiHedh6jVxTdgnf1hqEGW6HgdofejpFVMpCweE6pUk",
  "key10": "2xu5Sanm8w6gbanb9xxgCB5621A8GSqUYjjA2kZVP4B85eiZUT9n6Rnpx92icTmifqHekfghERwPRSZSQGrzbzQi",
  "key11": "5NZEMVnxhNRCNUN5tMK9xNQ9KAifBBxaG1j1RdoMzTWiLxe6bH1jtXAF1jF47aGknBvihknBEgDiA6kEazLR2k2a",
  "key12": "2SQpmgV22evGmJPR8WB67WcFVVZsKm6L8WfVFHcebUWxK2Lu9oaHiQ3Joab7jvYbScbw7tKNvgDHn9XGHuu8zsmY",
  "key13": "2agAez5mDamZLLE3yzKEbisEbFjSUPex3vWDMqfhvtwGYY6jQWSxqJFXAvuTFsPkh6RnFgTpgLLc2oQoBhTctDoc",
  "key14": "2HFNeyRBfsqCBzkX4hhZxqaiG5WNafwDan3wCChpnwJmSVaNFjB6VzjJCnJoARbpxMLH1pwcb7KseLtKJq5EN9Vu",
  "key15": "43g7SvK2Nv1U1hmyhYtU2B4UGqYLGh2YwRWtkemZgY5v6eEqHyKThe8QtZUuSLSzUQZ3uzwR4QETNwHPVG4EoH1d",
  "key16": "25vyE2vyE5KB5TWkbfbmDTVcNsLAPp5F9UFfxHfqG35ytoMLTpnXbAs6mrpHfGVhc2VeQz98SRbjTJbTvAeUF9uy",
  "key17": "XNxvri71M4qZGtKQdFfJyC9dmQfHgKJXJBjczegEZq6LLvwT3uRyE6AZQf3QsUKN54kzXnkkaZnFkKxnqktfnEu",
  "key18": "3mnjM6EdActkrMYLchCWAfGDHY1XjcYmZem8ec3zZXqSbxEREpgmjycXLsKUix77aeUjW1D2FV99H4oSNCvTcxCL",
  "key19": "5WUUSHmPQronBsSZNTpK8G2ciRzS6wbCh8FBPdNRvrk8dFsm6rCCeouEAfcmD82sHJK69VENYjgKbzksM6kJC9uc",
  "key20": "5TnK3S4kmJWJ9jscbKPz9B8BQK5E9PcyCZxw32iCYLWpLhuUwQ3bdRXrTMxrEeg2Bz5T26kB6mHSUWSJ4gAAWShr",
  "key21": "4aYhFbfJYA3rhszayof77CKGQVXPD1HyHHGBpHSNWAZLJbGegMYjqJJmeJWBeSdHG7MKy7BkyFozcA4wM495jpfx",
  "key22": "4bPNP4YyPkQsuBn8bGsoeBjC2ooUExeUBidnxgnCncfUVyS5W7gfm5cUip2samwHfeUoEuZbq1YhzjGBQp4zwcSP",
  "key23": "3XxMBhMSxcwGJpQy9GBxwjUSwnWPNScoyPMzMo7QBsVXonhnXr8FypkmTPjySs5FHwrkMdJMNQGho8FgComExup5",
  "key24": "4d5RUsRRmmGumGBA5nAeUrTyYe7ZvfWBjiwhnrLGkGBPDrxyH3gn1vtQhWWekaLkhgPkJMUzeJRkDRdE5xX4BZQR",
  "key25": "DofJhVyu73kHrRfNCZAtgSBjD8GTLipBqRLBon3QpdoxoEZfxcAA3dj559UoS2JpukBLwNFrVkkk5vFfPc3P9Q9",
  "key26": "2X1bJToQgxmmuBSEiipjdbbvZzG1NADCqR4LL9GRGNDZHpSuqxJ6YGn1ywuCU27yPTPGP8fvHgvAeCNwJx8uJZZX",
  "key27": "4fq5e8amBDxfRRhFkFvoCvpamk7Dpq2swL2AePUqcTkLkuRoL3RgCWgrQNdFmMheV6puunWyvEgEEYMQcDPkHeGo",
  "key28": "F7QLUAJpfnmjJSXtmZQHCJr1kGXqveh1ML47pWpQ7c1ovR2TieRBncvm2ZA5pY683m9cerJdrjc5xJPHScnYGmm",
  "key29": "2BtEDkcfuTNwH3jJHmEBKy1PhZhfNRXTKw4HHazNLGAUgvcjd1ULf3Qvy5CWBC62bzUG8bXThsYhCc7pTKFxbi1",
  "key30": "pK7AVWbN3eescqXfGo6YGuyoor1zpFdVzbbc27AHpgqpCnh5HYZqSPR6b7qiArQUwEtJ9SNwCJB5jSGkS7wfB2j",
  "key31": "5HwhfFU2yF6nogBJtAaLxzrDYo3aujrLigGdSgZZWHsEZz1TjXBXA2jfxKNQLV7Vb2xSuDdUgfcRot8kX55QR3ej",
  "key32": "HqH5A8JfanWFNioSKASbYiT3Df5TdWR9MH6vuKULjp2MDGcnm8HNbWYTEDSgjLRdHaaD2zvrB8M6yPFNwEyP65p",
  "key33": "2SjK8Xb7DrsmdcFAXJPBsVXK5KjESPNKRoLLEzZWi1zDsuCArZVwyfNfKjkcQNsjw78skc4By3GEqHauQ77Fo1aA",
  "key34": "xYFEYUDuRL8JGgVAan363jzakZSmVCyrRRbwsqJd3WekUKwFEg4kV28UmdbShXWWX7aSn8hjvF5URv7e8fAAJQz",
  "key35": "XTpS8XUF8DQ52CuQjEndZ4w9VXjpq2veiRd28CZhEZ7Rg13v5c4XuizEmg8qLMG8i5ehrzS579o4NvVbyejin6w"
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
