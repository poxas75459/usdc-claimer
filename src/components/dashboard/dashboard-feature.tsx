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
    "HqnZK46miKABFJupvzHrBxBeDkymNaCV1q743KxaZdJkpnUj9NTnkoc2aBpfQoXXKD7SAN7pJxdzpdDJoxCWQcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SaEjiNScN7LU4xW6zbXj6iUnniUYC75iSrgPi9nL9jeDEpP2tbt7BMGCngREMvgyuUywJkf45KRurYM4XGt4yke",
  "key1": "5WRRqHoie6vToVoAgBEafzFo6LVhEXTZHzKovLErq4x3Smg9zc8yNqXcZDZSEtTcNUPj6PMBu9hzKw6iEzWh5vn5",
  "key2": "4vDth14nMEdd8h1yJyfoyjCZtP2gbS7VLoBDPAdYoNnygoikiGFCpqjCJupSfAy64TFzpF58JPqKvtGn6awYG2dL",
  "key3": "4XQAbRwUut6oexw6LC36rqnx4ZE64zgGT8ERoY93AnGrN8MF4VFT5sgEvJ65cbs8jxoaW3rPkujb5bHRCXjKCH2J",
  "key4": "63xLg9bmgGC9HaKaR4nDedgxduTzuZYnVrzhxFZKSA9UwbNjQDE3GhWai4D9jXh9vCmjSvcZ6NSzix3vTkNmBmnN",
  "key5": "4G1jHYKLBRC2XF7WEpoBbyotNpE9NrVr78bvbao3iMSXwp84hr2mKAPupYBJJrXfHNCW9Qq6D3GcTsCVqHvHTZwx",
  "key6": "2NAnhqMgFZ572PdSjL1U7GbKny7nFh1KrQdiZhkbkZHVtdZrKTAaZ3vgYWutGegoLXgn8aSTXTtwihf5xkz1sgxu",
  "key7": "2SeWfPpdRCgNEJ2V33i79Mou2mNgVXRkmpzUrNBEFPkJNkqiHQnu2b341MwJ6Zwxc5xPDNBtoq4L19F59SjqSynD",
  "key8": "355zZ32Uxqj264sbYKcpJz6DZXYXTQqzX4j6gmTcq9MWVqEGP5KudrFrZvurUNp4Za2ywy3yJ4hZdov3LU4pN8Ke",
  "key9": "2QVfoz5PhTdqZWoVq9AKtLJnNYc5JgHKwPSSLBsZRG3CkiQ1QVUR7v86cCb5ZuL8ry7mq3f6E9E2Q4zhF1h5bxzn",
  "key10": "3uiv5VSRhsY3NRcwaiwocoW27f6s45UtAkuhUwC1zh7fd8NWzeF9oFhPq9ssPz4EhyPw8i1YuUDfF8wYSSLzRuMu",
  "key11": "5WK62j85BoBp8zKH6mkPU2fKAyiaLFPmRjKp3ByLFE8L81WZx9kyWjz8Jw5mVyNt6Lp18Gauj52XB3HXRjPi411q",
  "key12": "LxSXnHXQmLbV2VgeAXGcbtjLDWBY9cBgYrMjn6xnQ24USuBbzpdgMBb9Q2PiUazaqab1XyYqmQ6oEspH5mzRHGM",
  "key13": "oJ7YCssPfZKeirZWXzsy1RggdsTYF2jUhTKvBaucu44e1qndrXeGXdmFYgEoFS2ptjogEFFwXkqD499G8BLyd8s",
  "key14": "2LRMZ6VEoLUmmsaWWqvqagYQ5KgM36MNVRnQR1Q5w5KzNhnwaddUigHUzjDHi4tyLxXav7mncwjrLHSgag4FYho2",
  "key15": "4GAotQ4qS3oHvXrbAVYgY7qaWgxqUHGVbdnmB7ddcsgV5nfZWHkADp5BYHQeraB31Qhi4u4HDwMbKNGpUUdKLHVN",
  "key16": "2W5HJeVbRTmTgE9zYEu82dXtnGGpzuCQJEgHw4XotjUuT7qEMXh7b1sve9xWAfVKYCvarjzF5miKT3az74rHtAsd",
  "key17": "bAb3oasAeG6pnuu1v4UJGmxw3vnbVRLVcyTX9t8Z4nDXxjNYxyT8y7yuLiYcoAr7fSZFWEAp29epm8gm2WFwh8S",
  "key18": "WAYEHC3k6DzqyCnt7aMjPxSP9d5GApQpa5ufLff94Ncjt9CBhYCDUE7gfdJ69wewNGticKAyi1BwUNqs2rC2GB9",
  "key19": "5KnbuTseS1cwr9wqcAs2pEWsBGTegWbDivti7efFqRDzpCbkVErQKU3maQ3yas8HBqy6kZX8LWnES8EnBzAWu7Zc",
  "key20": "5zdPQJcsKvQ8ax6hy5ZE9Mg5DYPwgE97kGmRPgy2iVv3PHSuruXvoKoRnqmXEoPGbYZzqRDJpdd4d98Jb3eLZcCV",
  "key21": "3WKsnUZNdUot5o4zyBe5Hy3sH5sFytytRXbPunppd6xCDuuTbGtreyy2wF58wbUajoeHhVAJkU5qHjpZ76bm29wN",
  "key22": "53U56fymxFvYxs3SJWfaJv3bJ9ZqbjzBVchJqtr1HtsFiqD7gmTwJSBNdxTQnWyPQz3PeC6RgxQVUhHQRkdtseK8",
  "key23": "zVUpiWvgma2UTDnyPPWr6QnecoMWkPNemVL2u8EV4nQysk4FmHLHSXCKQ3ZNHWiEgRmmwzY8gAoYNgEmptG4RFT",
  "key24": "222QpTRQuuuA3zKpFhrm6yTbFKSNjq4cdg6MoxhuwEBw8gGrWpfnv1Mp3KiB4CxXvT4qDSrfjv1SAr8dFPPArsG5"
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
