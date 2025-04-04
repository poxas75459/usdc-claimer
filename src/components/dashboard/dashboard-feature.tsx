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
    "MdT1dFCJmL9BA1z2h7ihnYHqGWUa2sC48sv9U5MuYXG7QgEmpK7mxK3uA7qe79bqFtehsBjc8imJw6vQ8EMEeix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a6jQnWsmjNG2ApSfBTgtkipqjgUut6bfcR6o7TpJjocoSbyokDggn4cKjcJm99Jf5VmJ2S5Jr9KWKEezmSeun7J",
  "key1": "2PqnTyeyvJznJHm9oBwjt2a3ALj84iEP3gkYmTyct7E6o9M9SgzVo3ZUd1kL5RSJDw595B6wxArwE7T78ZhkVxse",
  "key2": "Tgi9ep3FX24pHTYMMQSSGGGBXxRqqvb8kk1cBqesTzYPBPjZGD7otr31yGvyw1jEYbvm8zCb7EfUSP1G4nWfGwG",
  "key3": "3wqnEheknS6FNzBCJnu91uxRU5T3UBRYjrRfMhXRxvNDTZuJgjMi8nGL1erjDmsD732BCKUWApgCCBzr7XUzh9C2",
  "key4": "5BmFGPwcwaRi83H2U6tfXTTEn4SUNxGmr2WMiEwo7QGaufRFJjhP5XJvH89DW1dVkPVSqRPC8MpzgukNr4A3AZNa",
  "key5": "2wPBx9icNj76H1sQWecexQSud9b9F1EEGB59j2WTW8tot3EFVf6npHAtDAYpYuUjSfnJQvqwxWNbtxq4FDLBosxR",
  "key6": "3Sh2r9jZpmWuXdGKYLUdxWF858H8dx5WvkBbiX76Np8tw5jzXApdd91a1FRUwsu36uyHwPAinQGDpB61DH4v9AFx",
  "key7": "3o7BsWcYeX5HspvFdxF4zP8a9sZhwrncvq5K3Jm5FKGd4SNDxP1PkFADqbQhNfmKWKLfGAMUqj5vT2pd8kMu7htD",
  "key8": "4cqKaRjnr3mzaCbMm72xqPovwY666eSpr2TdnWfTJYXwvfseRk5ZWAVQQwLTYAvrA8rdAFzyjQ8BtTFXAbXWv25q",
  "key9": "H4jGZesRjVg8bu6p15xtcq7CaVbpHnGX9RRtDVRWs8Sb1XzxpeheUndwGVLrpGG8AeF7Kob7BZSk2uFrHdb1EZA",
  "key10": "9XLeZ7QyrS3gNourB1euiMG52CGhWJPouhrSEyvGWTbyv41qS9CDtBcdgtsJDBVKjTpJiJ8FeNUTtpyx1tM2gZ5",
  "key11": "43VdnSBwuhkLZkd4kPwQQm3vVVNnDQhbJDJxGDaggx3YDtCR5jGpdxgJBHiynruLREWWuWRLtk65tVgKd8EmyXjK",
  "key12": "2rguGyj8Pr23ieF9azbWr59bSwKZYdzU4oXXY6h8px2vhYSYQRUqfqox8tASy2mgEYyWy5T2C75J2BB4gvWqNhHX",
  "key13": "3MRuy4HS8YehggKz9cFffZGtukrs3LAhu2d9T7Ph9EiJKa7gZFfjNMoGhRCApUQ8qyzYR9kbTyWGf51Xi7aECgG6",
  "key14": "2gF52iDn7TxGb3Fw13JDxvhkt5aXGjBabjR4RwTCWnLZdJG7KUp9t5o9tsUDr3dzLrMAvEM8acUgBvi3wXtXqdPE",
  "key15": "3k6VApd7Tp4bqgAEwdT6QY6SnEyCnGmm334wBYnuvpEXCKG1Q9zFQVxMUAqeZe7zLtkLXNQPpnKk2MPBbztY2tuk",
  "key16": "3dWrpB6pZmTSam8ahj8c1h5ATV5FbEJTjWUb4Uu9Mv4p6bRK94DbDJmYLAVnpAv8Ff4HzHF61y2vUbLRGK9mnoeJ",
  "key17": "2sdpKMW3wsmYkdmCj6Mg1fbk16LkrJBv3UmXruAtywGdMSFuzPowQyLgv1SvNc2ZGAQxQocDJZA67PsRBCfZ717F",
  "key18": "2GZ9tNcXGG7fKMyvrzcSaq6rmMfxfPKb6ixCes72xWDbyZibCwzeFmpQXBhCUjH5ZVDuXJis6p5DphxsmzfjQQrT",
  "key19": "4utJnTeYmVYBDcBhrGyzYCaiSgxnArU61E4B1zLPC3cYQZPfJctqvDaFTS8mV6evHb14vNmLdTjfgfWfYe5pvizw",
  "key20": "2V4Vg5TnUX4BEaEJaSEVXjEyC1GLo2d8wP5d1bHeUV5HJm4rH6o8qE9LKJB5tCiNJHqyvs8V6Ui8d1GzBB59DipT",
  "key21": "3UFw9bkM6y14hN8Wtr7DeviuTQCQh5aYh1RnntuoYXdREs19ys5rrnKpeTU2TSx9WeukxZrc9yhtP3qAkJCZWA7",
  "key22": "4WnBRNVDwRNJEeDn7WyuMCFTHm7XNU8MKjweCjvk6Ri3m8MnPtfGGMubv5qtNmcYg7e9fe6yjeoaz4fKSsndAxgi",
  "key23": "j7Bn5L6a2FyU3qTZYUQX6BCkb6gGitNJRkuvTi6o1pqStFBq8SoF1NCwLhwYjGFAg1oGC6Sit8oHnJMRYYmcMcL",
  "key24": "WgcbkWTpEBHwUmoNLU75WQTomZKqNnGvd5EUEnpXyL39wVoj6XjNekfj7Pg3ZBa5djAHDVwNCvK49cFxDR3sT21",
  "key25": "XfT2RS4uU1KQShcA67qM2iYrrjcxepALwuQ1Hkndf6CpkR2cKzVBLtMFmiYVDqrfbxMZKMjgqJeDRozia2HbgaE",
  "key26": "3VkrYkmGDQkoHV8MaXGenjNjYYif9MFSXqhRXqmaoL1jB8b64xKMJgL5PFXdTR3c4ZuF4LUmW6CVoi8J2Y3k6bqK",
  "key27": "4mFuDrMX4K5MffEx1UGVQzbzQSKQTvuZJCUQrDFxCaa5CwfyeWWpBH1ercC4MgkTHGjNAR2fsaMh6wvHPgTreK8q",
  "key28": "4xLymKPKmsEMt35fNRUAcA8isT3BdsD3Ei8em4UBLiLx5z92ZF1pqXMojK4RuUUkLzkfnGXNmcwrdWRuqX8h7dxH",
  "key29": "4ZyoMNLnogi4z54XeA9iXa1VSaHuetzGWzksSPaDnRjSoFNxJ7Jm1AJiSr6WwUxujjeNJTFtUSkehqXf4rLMWW1F"
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
