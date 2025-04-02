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
    "5TFYYhhPw1aoB2KCQcKKAuvYknag8UAaReFSDBiaiPPiSsXi1KaVNDrnP38oqbCTcS385GyJRAJBd1xx3CoPjZcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S97yDtRntwoMw8xd7E3MQmCMVVMyu8ojM9XBuRq2gBw8SDTQKajzjZRcBfyckm2HCNgGkE56d18efpvxtibmTwp",
  "key1": "2ZCDJBrjgp6uG9RSj9Wyp8fhg1mihkoqYADkXGBFJY7fiXiDFBVQfMT3MA3csPew3ZK32RDW7H4ukbsFGEcASFk",
  "key2": "66pxcECuNJLNYwT5igFiFaqLwPmVSqiMHDqMuoUMzuGGC8XPvhohjDbe72i9cXFZCg8fg3fHDvDdCr65KhYhpEAo",
  "key3": "2KrdiUNppJ4AR6ZsXvRKXkrV8goGRq8tjnBbUyvhju71Gmem89RcZFMvFow72n9cJAb5h42vHbvakFHetj3WiqWG",
  "key4": "26Phi6kh17tFe4EtYxpTSzwpQXhJBRCsaXb8ERGjHmmvxGQQSH2nZEwZXPxJVEJMAgML5FsVgHv7S4PubVFnGaDk",
  "key5": "ayP16qqy3srWZeRdpVDFR4sQYA3eBo9VgrMPexqawwoqGoMDeTEwZEBf2iTza67jd79w1WmFhPRRchxaFsRN9uB",
  "key6": "4EJoCeYAgbtsrwcxxZ5uettB556fDop52NihfoDTH7unZ2WAj8z9Mnr7NMMHo5vQPu5AgfMwWQFZkNPH92ed6in5",
  "key7": "2r2JEgTTwe3VwieHkcRptAj6jnrjpQuRfa48UpPPgcTVNPzfSKtAhiniza1kqMP5N5xU2DSq8fw6fg5xMALi5NS1",
  "key8": "qEmn3276bMzZJVrRx48cEMuhbFzkXKfU9g6HPLqtw5KPujQHXni7DuXKjW9rMNBqGw1yf3K3fi2cgyEhmKZ6oFM",
  "key9": "4pjJt3smMy2Mp5Cr5bwmcf4MgcLVbTx1Km5yf9bWm4Se8Gy7KShBg5RzYVvXCHkHaFddEUZfMMBGfmuzDXXvnufS",
  "key10": "5pw7BEpVyLsC9RvCu9d9jTeY6zGrDQMBWAQVG6qd42SibrfW4kuZf4RMgpNbGACSBbuderUiZCQYQGBsyHBaBQrh",
  "key11": "3CPSD8R2GFFrbNNTsGAcJFpc8FjXyvNvdrC6G84QKAxUngzxqmPpSwHCihFwM7J6PRo5xDr2UHXiFf8CKAD6TxJ3",
  "key12": "46A6iMxASPnNSdjBkyqzzFssLdM7r8jTiWxxcvxvgHxjpm9YXxjJYf8n7CHXunvAbwqvxWhB6y7N2B6LtFgqDYm3",
  "key13": "gWva6eQhi1PrQx1s3Y8NV6RTvnAtmLHaeJTkhA2n3unxBKKerthAicHNgzwqe3KdNAvyNput4qTFc4puewymqks",
  "key14": "Q5exDzAQ7QRTEUGokdCbqc5udWJm78zvFNZ4cmbZaKzfot6umwsFJJZAD25UaBuxwcYt4mLdHZqTAohUVbMwp84",
  "key15": "3qwmA9hPEgTCgUSu9yVLskK52f1e1CyxqYHPHBGgiD2E1QZ7ckMiGfWELPPTykHUzDKrbAVGuQCWbCUyWZ22TQJR",
  "key16": "5XRpBgyTvR5v2rWkxQfUBrVJWyhR5ZLHtzbwxNJF1CKrKoyBRFDAC5tkPNXR157NV4vsxhjL9zXDhyTNUPViX2Qq",
  "key17": "9WU3mHWuo4gC25hFkSnpvF81nTnpE3jaBFrGgcSbVF6a7nvFFHxEFuxz7TABtakKuPYsdr9oxQaqUxoRU43L9wh",
  "key18": "3yocLabpb6XnnMgkpGiZHs8ffxKz2VQBMC4ZgxLYEpCfcrejWmbBUYnhRySp6sHj3ygJYeBDMYg49XUp7RquKogh",
  "key19": "43q4CyQYFoamHzeGpHpUNPiQABvHovZ3xpgA6Qutn6zWkHjYfULfKA7q9LovBjiJ3MtJporMiJKCoXtJBW7nCGn8",
  "key20": "4pyZxWhEihr5QwbG4kLs7LXhQySiwRfCYMaVKjXY8cKKai3Gz87dqiLKice3HVBvtYE5MSejXpa4xmqDYtQ2Gbru",
  "key21": "4oyjM7QqEbDCbEvvggPghnK32a2nnn8pPEnYjAbtsP71E1k4s9P5YxMFQ17siATZ7PFijBTXekJJTXshFoCXzttS",
  "key22": "4pubX6GGJ6Jsc5MMyAMKynaDRhDU1aP4f6nhkbD1epiVPw9Yr1zAUjYFjgm9t7XKcd4Bc93T8ghv5dich7oHsFJs",
  "key23": "2xfvaebutxA8p6L96YACUjdKvwYqdZHntoJ9kKdTyQZZ1Rd2KFmb43c1P7YzxTv9Z9jMZQPQAVp8ZrCtZoypxDmN",
  "key24": "4SN4NRTHBmMyVRfSgnAmESC1ZyNCQ55vWCCTEXhxoonPiTXwyRfiEJG97FCdmfDmSFt4WK2sptukca8XiX7121dj",
  "key25": "rdJhDixHMqaAe6gPY8hg9g5M8nD7nsSQWg8qegkVi7rw48ZGU9nLk7vLcQPzMbv98vekDuw1Ui4arxjzh6zmsni",
  "key26": "2URJT2abrdrBRf23UGGPBvTzBeqrj1mhBwLejiC8f735Uf31JhfBRcUJeCzd2hZsK1yhATxM1TTKLLKYf4HqJnyz",
  "key27": "3KLt3wi43mSwBKnHyf9N4v3PBeKvHQP6YhH48ip214SwDQsKQN2PPG5bX61LcBP3YdRrr9E5a6nJM9VKRVZ5W6jJ"
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
