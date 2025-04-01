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
    "5hG83oCuVudxYahGekpiedqRMadpqECMzb8YBpwTzk2Aa2XeANMjRRdkVPYUedJ3TmPrYuy5ZjNqgqrZVoLkEu4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U2mF6oCvidueM2T5awNyLzTryGNr8Wd4xpAC2WThbLSK4ut7gpJwSa3cWoRZgeAL84HaUGUwywM4z4SJX4jZ3q5",
  "key1": "2dpeqjqYNeLmK545EcoLCz4VrkKkGh4CGsUFmRCkb1Se2bcffSRqxaSLBYPhj4MRyWHWGspgB6vFhYwoUKkVLvzu",
  "key2": "4py7hp65scWQFeooie1Yk45zWXEKWDBU1RGh363Qrk62Zx89hCUvQ2JpU7ZVBaJ5sfs1YBdmqFgBma512ZftWqDG",
  "key3": "5kkNMjyYwJibivRBxvNejXjPgKoSPcuxzYNjGcbmkNegptRSriGFmcn2Mv5KGceAKBaR44Hv62C4sPnHEjGm1rrN",
  "key4": "62aMi1jo7ZYw56KQ32Te1M1reNkr12LUqWjL32mPxFqLP8MiBnJJUtSdVJB19pYW3S7jji9ukkJUKrpXhyjaXzAN",
  "key5": "3DHx7HBo4uJnNkCxtPr8F7eBP6gGpVYdorziH6LmR529SUpxcMDcTeqnJQRZFvZYt8MUoGngGW4jKaK44wcZnMPK",
  "key6": "aMKP5wTVs9ftMMrGpKkvSVoMMNXiEtsdieci67j9Z9by8gsRnTFCwz8wG7DQWyDbbSHJA3rMduW5QkPeQN3HM8f",
  "key7": "4HALAhEG5RzA6zRXn2FizBWpTZSLHZtavv3mys7SXYyJF5JuWRVpvpY3Zad4tPedZyYMxVj2NQ1M8P19CUbc7ZcF",
  "key8": "2V5kSUHYR3esPYBBdZT5bZfgeWCG98gRLH7FbaexAcnBBpSdkCdd5PaD3CmAxDyHPCvDCm9wg4ie7QhuC34RceSh",
  "key9": "2FZ49mpfUEWNkKru8mCeHXuZozQwza84fnGyrxvW2W5KciUHUEHDBbrFqCN5LrSbcpqEWx9hSSRnuF3cEReqR3UW",
  "key10": "5rZqVsHtLaxTYNRoFmSZtf7MnM4dqTPpst88ukgkCQZVyGWGVrM1eBjg4W1zLQ4gU6sLe7zQ6SvbXGgEAznPEQnr",
  "key11": "2256BNFpKpVVk5dqSUZ8vfazGrZAFyZnEiZSMLqpteTLfqCibkgKFGfuhHEacVAA7NLY2nvGvv6V8VVYwc94RNVS",
  "key12": "5k2uG9nT5pbHZZUwSSfQP7utMGZMJ8b8uYhv4aahrgXmyy4Jykk7E9DqSEs6G3uWwUn9U7Q5TxX8k8LuxgN2Uazc",
  "key13": "2JmL6ieCczrfgCyAX3JPxWAFxXf8xo8t3uefrBXj1VzHoLzw5BfKDLCUgGQdJ2pCNKUSH8FHqEGvCC5Ny8UV62Kc",
  "key14": "2DHPWJUCGprkVRMSDCPEnPWzWbNhFMfWuFHysZXLWeEkoRd1nv8zscqRCvnVEf83gjQ1LrpXABs9VUheU8bHx93u",
  "key15": "57wE6FJkaU6kqK5Vo582zsA5L5sRqwJdkaoNr6gkBjBQkzrBsDi2Fa83LSXDPzxTHhsA2G6ADvWYm9REjEkeuLLT",
  "key16": "2DVuPDuBXHWxcVSoWFs3qzyUDNfe8bsFSLzrhvQa94mBUtUNEcKb2XN3VsVoasKbhdNNYXdewSapKfURLUjY48tn",
  "key17": "JvZT9D6bdpwsbtSiMFzbXuitSD7mhQuBnHvFmZhJAfb9hoCdQmC8A5aKToASRYBk7DkSKFwhzVE2ELNQoQF6rfP",
  "key18": "35y33Y3h5bnySh9pFfBJtSRp3pFiUsRLtWr2GhhjWTTiMLMqB7pMsmSsEkqYeh89oKMUL8Ej5BhxsUfS8MneAW6G",
  "key19": "3toTpv39VqsjTuPa4fikaJqYmPhEaYqtHWLb8h62shrq38iTb1nnFPBaqRpqKDqdq4evif31mbxWWqMipQpJdHTw",
  "key20": "3GgdirfnVECWRq5y4Us6uvfatpKR85DzE6fmiZM7sYmGEHiETMVUbk46HmQDgGeEoTS5SbGMsGxRDGYjbE2n5Kmv",
  "key21": "3qVSeMK2V9p5KEwTjj2y1N638Z1idbJDvT3HFS39kB9picT7GBYwcmWt2nA4VZJBMP2ZJ6Ft1wwjiZ1fMhVMxxHC",
  "key22": "22YgykWAyXT4AMgPrWqzV9WDPvMgxwvERJhk2yWL8cYap5gqcHdmuZ9JcuHEnqZko4e7isrcsuh8AwEmNaSVihTP",
  "key23": "2nrByKEWQCiEny68H5yCbpQSa1y916jNSBCXUNJ7KAEGgkGw7nS5ZqfvMGth3WqyA9wUWyYo4GG13XgqtL99FLSS",
  "key24": "2SsWL3BF7b2SbZiNLpyH53AyAwfZ74eWJ4znuDqfEj4CJmqMzC79qEkHd2bUqrfpJ4YPa5pNS4N8PjjtGB7tcF3N",
  "key25": "3xsgacKfzpdGRN7rU4k2iVmAKHKL7TM9eXJ6bwBCp5jmDCxkw3vbdEhSa9sKcjKU4EXLBNQWDdCqYp5GLGM7mnzV",
  "key26": "5QMo2dGM1Sj8yDkpwR5PV4GQ3zf8mC1HLspDvXxptKsYWiLJFXoZdkPQ4XgJPjgNiTwy7ujLWdZpNxzbhA2Xn7dx",
  "key27": "4rCHTT2gKt4Ryy3JmsNVs7RqGJA2AuwecVQ2KtpsPbYcQ18mz45ThTnwkTHmcEcq3BBYaxyFFCPWUxGP5BsEDKwG",
  "key28": "67hkE7AGDxNgDjyXSjn2dfDPpBBM6vhCSXD5N5GzDAQ99zXkq4hVYFJLJMHntx6TWN1TLEZzdNaAaszBJUYu8yyY",
  "key29": "5Ddcprnvzvz8NmBgcBd5VAeM7mThDweckQs7BRypLen5t31rBBtLWuydDgmWHmMtraK89eJye2ykMnd4BXhsqWDd"
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
