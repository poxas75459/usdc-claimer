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
    "5H1371MrfV4cF3JvnjKS81sQb6trMaYNdW2ZoGmAcx5bvB2Lz2pQ3dh1hDQ7MueN3aP5yBWDQnWed3QJ49LNC5q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xMKyrLzFDuupjFpXBqz8gqwVHLAbQc2PcWEd7b5NxkKxc8xF6y5Ko5nLH1doMwDm4JQNDEf9dTyek2LfSUkXQMs",
  "key1": "4sa7woZN5ELWrTN11LXhGcagBxUXS4UnqVdFcena2HTauTFDCfU9GmawtpHoMLrvi4UYe79Mt5YwnXDWfULUxww",
  "key2": "4GrXNvDDPcnbEHSdZaJgsAdpHbURed9LpxsPBRkdhSA9rYg7REkNyLF49xEfpiaJJBjK2LRQXN7otaJmXsEK7R8g",
  "key3": "5qT9qHUu9vAxABMsRPRA2bbK61ZStQYPdtah4c4qXdWhvMMZPeHdHm6S1qortNpuZMcoWyzEgejiLF6K8KoQfMNW",
  "key4": "56hCdAd19WJuhhon8f8kTczGWUVpxzm7GqCw3aSK7QQdGRwDPK4CYZ5G6qvRQpUkZXibVZveC5wxssis7FSLrxwh",
  "key5": "3h5oMFe4APoZrvFt3Vx9asrp8g1xGKj3L5WXpnFFWrX6BEPfPQ1xag3C7oLvfygVvkpoaYNUcDFBv9a1bP4aRg9d",
  "key6": "5kVNGNwxNfdqW98QNwDRr9uTikFtZ4ogF13HgUUf934BTPau7U29ozCxCPf8hKna7vKArJo1c59Nr56eiPduSwSf",
  "key7": "4SvmwBJAMreLK252TEtjgNLYcKGcpUVV8f1Awbuh175u1eqie6BU5tK6g65kkT4op2Ht135LVtvdkkA3vETSiSam",
  "key8": "58bdZHmcQB3Q51QMUUHvFLuZkN6i1MofvofNfBVWhd4sJT5nVxG8nMg4LFyPqhbg66YCTXhW4f5XGg2TnnGUVRm5",
  "key9": "2GqqvS61TmX8YZKb13AFNCgVZBb2u67z76YRf71SmFpdMetjrMc5tDmr4KrRxisQeJijNJehradYbrv9QdP1TSpS",
  "key10": "5TBdLh3XrsvfjAvQ1ePvYcYracKPXbNZgmMNKbkoJpqEbxjzq64zogviLxG4YC6hx3Shp1YEBTW5RZ7NLQgjy2z3",
  "key11": "B4fknNJagtmUKBzuUoTo3TmHm5adA46BqV7keXUgKFT31G1yFhj16o7HnmJ2KnE8PevawWbvVCpFSG4Usp5CoX5",
  "key12": "n5JbryKoJ11VwwYsVz9WuopW3evjaGtmHNrgUFVxnAwWDMyh54ehtTmaY5An82CXe37VpiqUzrq4oDHy8WCLQVT",
  "key13": "3m6wPranQ4xkjMd9FwEheKRemUvKHokGrHUEGDA1UMzvw7eUFKS3b88Dcdy8hFjKeVioMfhD4eGdXe9D5JfzRtdQ",
  "key14": "4ojq8VgKv6WAWubcGxSM85UxF9JSbNGadhwpQPKyJDKTEHR8YFyRSmYiWFZkQNqJ9Kxkpbeg1mgDGkcZqoYWVhwK",
  "key15": "2Zo2x7LyrDQmpMcRkzDSDuWgZWLEPE812X81WA9XRafFzEGzAH1pW6tj5qcoGDo5QkVThgN4cvUC7V3XwnjbBLBx",
  "key16": "3TJteDExiLebMJgZeGQiDEDyLGSx3hn4uaoMb3nmNQFF9Eeu3YhpLT4kSVohCx6TNLkWwc9VTEfYgKnochH29uhN",
  "key17": "2WnqHgxYRNEABxrvSdtdX58ypj6oQ2QYFyzSGxD9YUXLYHR86N59EhioxxYH1ZiLiMYv9BtrR9wRAWtYSwm2ui2N",
  "key18": "5bcwbAaXnwy1Kebso6X9jFArtdUtak4asBKBXp2KnL9dvY33EdHpvUWACZhNTyEGctzjqymyjBpjS5g18GgipbS6",
  "key19": "21R5JeszUthuZmaCPF8gJ3E6BayuCkNCQHZwn7u7cmQum5SmvTtyVU3QPPkGStuCfMuAdJioMd3foemJR5D4Ak2t",
  "key20": "2tsgfMQ53PYyXKCq3f1RPYQEDXd1QHCPE6adnjFRZ6ff1YK2KYkCMfHxeZWsnrW4w5yGj8xq7oBig5eUbXGkdrbZ",
  "key21": "3m19qzpJDq7cCA76SyafawyfV6VF9FH1Fb24n54ntDcrBV3zTvbA7NXJ1XvTYp8ebpQN3xGYHdQpN1HRvwAgkBhz",
  "key22": "2thiacdsutFrxGj8McKGsp8dRNwpwAUkWdXWPoZFCxVYenzkc2xqWmx7uDnjofy4yTSGRboPbtKZJbvR3XGAcT3E",
  "key23": "XK3Qbmhfjdga3fYPRJjnviZKw8eb8Z5BNB5CoDz7ftQRVvq8rSpQCxcWBoMSALiaRZLNFW5JiruinjeHTB85aBV",
  "key24": "3Z2yvKsbQHtfGiHXqn2jawwSGASsb3dVPTAGm4Fatizq1Hy4QLucLRmdquJ6b4pDwK2gShAABnCMQUEQFiRdWQ7K",
  "key25": "4HBPGsNDaVE6UrGDhSQMGzqMEcGAUwACfVYT5H248Lr6uXfg5mqCQKZFrvp6hiCYqdNaYScjhC5Y8NRQwsUsSwop",
  "key26": "paGvi7sPpoXAGaxWKutRVbULNDfBZ5grTYEnoGCaN8yUbB3xDVuY6E2naB2j7DqDoCaYrZmmqiLpfzhr6yj2uzi",
  "key27": "5zVQ9bGyM4XPcSMQ3FTYMdHBJVQFxBijnLaJcd7Wxz5YKQVMRt8vWMQQW3gFhR1vcBNgf9o4MLRaWktAQnEqrPw5",
  "key28": "5KTXW7BPZZYytigLP4T8HQY3u7pjN1Sj39L2137MnVPVz5wv9sFjQNmCnTuXwgsQUKZX6AMSeWphZhEpWsgJmvyq",
  "key29": "3mU9RokrfSvahporx9iZvHRH7N4rYV5eUYmPpEzo6YGoBtr7cZJijaPSqnWZkjFLiX4zL88n2G29ugNCKemh9Ctu",
  "key30": "4nucqEap4bmnfqdhPM9HwGrHhqk1wjsfpz7AP7Gsk3XXrbBqYkPLixRhxD4x9cu5oyMd1mCRE2gkAtDCkXexAKYL",
  "key31": "4u1qTkPDP4MJMNQYN7QpkUGiSsutfdiS63EPbL4Ub1KRmGQScjgQkb5ZTN1V9EvE3mWC7MftiUmLQfMze8F3nZJD",
  "key32": "judWFTXjdDBe3ZrzqdeQcxHBkwhdH1mq3C6GgcCBNKMxch3TQmVyJR4EWFARszMo9PRtTbk1MeyEFTdWtBAcbdT",
  "key33": "2PrRkPqz4kiewA4rLg1r1QugpjD7eaRLKFKvim4yWZC59AAM8peWs5Ci4TN9ZPoGAVhkqPGjvHnwtyEcyDYMhzrF",
  "key34": "4Wm3L8zzVN5ksTP6iXEPtkCszSGZKuyXVMtB4ZgRc8QUpwzVGGUhaWCiV3MWH361DqwEtj1PCvALS8U4hkhbzCeR",
  "key35": "4doft6YrQz2DWhHDGDEBKtAZJEHXZgzyiXbPwWhQmUNrL9m9nPKSuMkivk76FpM5QNHS1KFfTguS2Ehz39nAv8EL",
  "key36": "36MHNVVeHFDMqQSyCnJjiuZaw5Czpr8m9HfnCmaQCqyTeiS74UDDGLDLgrW7k8o7WvpJrB3fpAGis4VeQmrPDwsq"
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
