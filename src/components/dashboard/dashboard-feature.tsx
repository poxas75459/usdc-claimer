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
    "2YsBt5HqstySP11iYT6qZp5ThhDx5gs7s797foe2FzzryNL3FCKMw4NkDov4Gm3YkKagw2yzhwSi96VVtuEbCQ73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TZ1w3nQuami8HYc1evKqKH5nee7nAks4oNC2zpwrbTPG46JtgESTYet8toUqebh6YoKv8fGZ13LvDMSUh4b13c5",
  "key1": "28dP3hXagNQS5Ay4HBrfzi4d2GKsVXcVZX96YAuDs9bpAdRq7mDjwwUeN717fmDnGGEfqW3LT3wBbFuL5HCaS83U",
  "key2": "4Fj1PfQELsXc2Lkd6ygx3duHTmcy9bcDwAtyCCMKK64fLKLFsLnxbB6we4BAS1bWUEJWBA1eVNhEGUTTjcm9cKVV",
  "key3": "4mehDWJNVLrWSJLdFMchppeTMsSkKH7a5DjwVcDGAoYpXaGNe77sdcgbtAiSkNQC59ntp1omGLiUGoGz4gi89naf",
  "key4": "4Rb6dYguFZweQJYdBNymz6RFvNDNSRLSckaaYcgxtkKUBcPXxrJENPjzs3Wq5MZqib3SyskwrJxwx9wrB9Sh5qMe",
  "key5": "SADu4FF2Vbp2hSpkpsiYeEAVbzYG6RsEjb2JHZ8rz4bReDYUWm2oHm8GoVq2jtoyDSsbyNE72dqHCiBFPXB5G8g",
  "key6": "3pMK1Ea2yRF4R7nnG7uHU9nqp34kfhkCR58Q2YSnmVnebFL4nQHXUzrpXed3idgADFhbbbUVjRGYdum2kA65MToM",
  "key7": "4xftz3ToAnbNoSmLbr56xgyrc2ZPvNVH85YzGJfQD1Lh6FujFhBAGF75J6ZxEfX69hkFa4vZfi5fLYWPijcBSJ6h",
  "key8": "44ZLKk3RMgQa4xUAY2nj4XG9fmBf2vhf3GkNa83VgWcAkQZdYoQRAU8dJC9GhpHcew2FgVSW9Cmi5imuQs1Hvgr4",
  "key9": "2egsUp3j4Ex7xiuy3i2dHPZsqzwSuhB5X3GsHzsVr3UYFssMufBAkk6ju8ykqvzQei2k8dYGoVW173EsyHAUYLny",
  "key10": "5EYdAMmDU3rqK7VAPn2ghdTx6M6ynGqWtVGvyKvTy3t913UhLNhACaqsvqE9WAMG5soTByeamsTTwDwFH5b268s9",
  "key11": "2eqfFM9yUXsqXAoJ5H3Mu8VwTytp96yMryzVbKuLjRmU6oZeDj1ixmmCQXxyAZqE3v4PAwgerULnrkedvHK93K6y",
  "key12": "2ssByDKq59qa7dMUJtmgtERjWmRynzQGrjvfmNL22WHBTvATXR9v19phM9bHr88djCjXSN3FrByB1t9u99jGzMoV",
  "key13": "3TdVFJS88UwmNFCP6ZsKijZ7G4D5qqiDvFtqedjiVds4RrFs7uxMAmKapnKCp9zfRtXkmYuconB5wJRKEkczWzzN",
  "key14": "28Jw8remU2QAyXvhemr1CyvGomQjLvGCxxY2AAX96C6zzLZgoUR7qXzRkfzyryAJShFeiuAhiraGjy4tvhx8KfBr",
  "key15": "5C6BdkssUgJA6x2yqgCjy19rwzDFyUttaLZdG1UNmhEtn65V8rCfuVjYLEn2euBYJgnC7TWmJMULGMXao9y2ruu1",
  "key16": "4SHDzpN7a8Fwc1i7udbjCbXNBX8JBs6TG59JDhUKAsPGuo8RTyLeLtqeLnNjjdKqSpRWEWTM5QKR3ktgarDQ33Ht",
  "key17": "fYfdoUeaKh6fq1AsHGzJFYsSvSBW671J14dfXuJ1qf1ZXtyLUjfHqoTr9D2BkNg8tMF5bHpbk6ZkqTpewY36W6C",
  "key18": "5qoZUZevTv7Z7xVXQmZxqtFqYa5gJXn6TU8g9Va9UYgn7zKyNhdDtrYDZJkuZfM6dMsRRbXatKRor1W54WJWQM33",
  "key19": "3QzkcxcAorEYM8sj9jSEczLWRyBcF44miZywZoyafFmSzNVF3AaFr8kZe5MYG1wW1GqRHyasX6vivW763RznShnK",
  "key20": "2MWJfo5LQUsA7ak4NNKSTYT3Shby8imqQpYEYREyPW77toDTC5H5dndsujR1YnCXCJELJTjZzV6JGKjfhwaoucvE",
  "key21": "4FSmvEz9ABXmKUCiAdMuh5CBwfsRtSVPdH9Vno1ncmhbJuPZdRq6XsUDd4Q515NCegVWVhP7QbVsbM75RgM8YkTR",
  "key22": "4DkXsn8r27uiYNTEjZdimCiS41MwWfYrkGSNT66FFVqwAEscNBDvjYAxES9VdahxJP4CTEeTueVhpmzFLWfTZAtA",
  "key23": "3bpvQ4e83tYMfSKWMWgaiGtPyXjXzG44geFSSbLeiy5AaATTzPmvsf9631MLR7DXGtjgtjGVtZ48nY6a9bHHYGSw",
  "key24": "fzHXBqiYyA3dwcJnJ5FEgx6foDTkgGJUhHGSpRYDqJm1AgWiSWS6Wn9JwT9ck9WhhZFnndGGADYNMNZcTuifz6c",
  "key25": "3qEhHD2eycCmS9BWYuPM4yoD96qp1yFghKwdgJdGHsezFEtdCVyTXSj1xjgAeUUnPgER7JiZQmFsbJVgyGmhHpaq",
  "key26": "4VASbYBjCCfbWBK8Pvdt5rX7bkaw9B1VWvd5nfYsgBcngRXogckuS6eZtji6aTVJkNpkG4WUF5tzThWmEbJKPQWB",
  "key27": "4Rd2Twv7DXySCMj7xzanAsUqRaLWsTkerghhP44sTLsW57NGZzqVEYZiFg64VVZp4EueLrQx2VWPFTagzJE8rsoS",
  "key28": "2ybDM2DEBJ6kpzFxbVRbpAu5o1vXT8wxgt6i7zY4tTDVS3hZYb1ue1MXxTwELzSMKU1186ZC438ieFvBDowC4edY"
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
