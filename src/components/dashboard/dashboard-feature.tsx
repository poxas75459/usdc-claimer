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
    "9tDCHJVBaQaSa1MQEGVDqKJmHGsjRjL33A8hUnTv1aFx5Guy33feXp8iAHjPVyDMfboCvCRponcRgKk9tD89GNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d5arEt9GKEkGGyCq8NHjZSmV9caH1fCHWvqp2Hk3Mom9i33PRTYoYPbsU56RRTp2dsGmZ7h7x26pVBGraCrCuL7",
  "key1": "5ji58epEkqLFSRqq4zqTFt8KwBV4ciPcZQN6JhuFTFSS6xbn5gpfyhCWfHPuJkS1QcLS44r8dC2bhY8quGYBbgbB",
  "key2": "2sMq6gNd28B9vx72aYYe5yvLPKjdZNGJJ9wJVBnqgbHwJcCTAeoq62wj53bixsNKDEufEyBVH4amJSQ9TwGDRSJF",
  "key3": "4LZveMAuyE9gGdWHbBnEPNqBmzJnEVWgaDPhwNqate6SsHojxScRw5BhMn9H8EZprnoVaUBpnCdoC81b5xdYopVS",
  "key4": "2Sn2yNZKuVy1QE3FEpgJus8RhSbpg64QxV8MWE66BtfnQv8gYPiogAvL4WH4UeiNmHS3GfWfsPSDpdF5isocbQVm",
  "key5": "2xAya9pSc6DYBCmLCZjH8RREDkLBeZD4Vz7ftZvPwCuDgGUmkaceGGFYMwLWjUrHc9ioBAts8w7zfzTyzwj3xury",
  "key6": "2hMVbpFPyEXgkpcS9VhHnrfABnTGA2eHPkHiQKCctjZbXY2fDHXZWbRpGZdSPbynN297dWS5eqqQPVKgdf4mGzMG",
  "key7": "2jjcFwpN6ST5AuEKYGjZPKYanNShsf7cVQskGQDFo5RCE7pcJaTaiQZTkE4WifVwUUH8iDJvFRdmU2ig6VzH7LKV",
  "key8": "5mgVXaWAtUGvAb58eEfLcfU7mahg1m1H8bGgiGFvjwzuHMdjYKYqSrKehdapF4JWy6LZA5t9Z3Wz6vtBBmLExq6Q",
  "key9": "4udWtEWFde38E6dLsZowaiFHDmirKTuCqx4TenxENVZF7iiS9MA8vgLMaTNiH8rftKeMfNhFy8mnZXog22QA9dK",
  "key10": "4KLAAeJW2nG1N9YyMpKX5wVsSqaaHiWke3R3BL6ArRRX5UQMzg6qK8Xz4c1dJAnjqBeiN26PvgW25VHFbTbttjen",
  "key11": "5kfNs5ywi6nXFpoZqsc1Kpbtx2zbFz9piGvFXWRPK3AwwmTKydti3ALyGehzRzPwG5mes5QAB5p44Lx1kUxe8iiX",
  "key12": "kwgukFMh1BEaZHkWBasCqTv1H6KZnTdasJ9zheZH5wA2L8jwmXPbeYfMrNcHLXUnUweCtbUnGniDrvsYA1uUC1f",
  "key13": "443bWR6Uw7EzgYxFsht9KuPaijmiYmY9ww7j51HeMcgQwegxnhdH8w28CicAbP1JK9syCsSAeygQinqkzoUChMs7",
  "key14": "4mjsiU7rD4JaRQa5yh4Z9eGUWLJix4KJVbceGZ4YbR1fsPncfkCzKF1a36T2ewSYB57JLZCz4WnHwmZu68wP6VQS",
  "key15": "12cXciPp3S6Ad1gm8Wopy3wYuP4DXM2sKxYtSHtZKG8jkMKVjWQrhJJBy9RYYki6Szx54XvgYhjFrc6JCYsiUej",
  "key16": "3TPoHp42KmkkM3caNi2UfawiHeyVC39Q8gR55i19sQW6drS3fuphdEgz5msQDkJ2Zn7yU8seu252S1BoKrS1RbRB",
  "key17": "3G3FVM6s2WZtYWL2BPcEHM1r3Zv1HAhzZHpuCah1MQd9pUuykTn3FQ3kkCdWosD1xg1cGs3FbrCvpv6YZowSYJNs",
  "key18": "2ihALZJaf4PYob8X6zTiwxfuE6bkfU79zZ4yMofXTmieAce5xVFvLj8uVRa1pDanc5FiR7tQ8S7RJ5sevv2kcvZT",
  "key19": "5cf9VNREfVTWobcknBNgsgtQ5jo8S2ATFk6KwYSGJh2pFEnFv6FanzdDPWk4c23DnHLizmuPHh7pZJNCkmTDq9KT",
  "key20": "331rCkA2JsmW2xGGX1gjCkHaKqA9r5djQxe2mq84Fkdhq656UiZjJZDTb5NknmYdFXFD8shrGaTGY8ALuPgFBSsd",
  "key21": "2qnoTUhJEFScxBuXUiY4Qem3YHJQcE1tjRzeXQyZPb8u7t7MGdWXodSUW41kjhxD3Fdrp5veP6WzgadNYyuWkH1t",
  "key22": "47wQUQDwMv5x6HkgeMcwF1MPKKwQjwn4VEKvFZqoPPFpoWhCpLg4QXGfkBybegoPUcm7WfyBWyKs1MEV6ms8seEZ",
  "key23": "27B3nC15NJed6tkV8vDJXKMwAPpmvXGZ2DySL4S3QibRenSD5s48Q5N6grPhou3GFr5MoEkrdzZwLGFQ79BEEabU",
  "key24": "4wBdRmf2f3jeAd1WXr5ru1KUxjm5HSxkx4KnJNfAjdWVXZZB39U5jm7VCbyVCPqjWrqAjU2yJPDwyyFd3RJ8Xr2h",
  "key25": "4Kp3czM6M4T8WqkD9yFu9MUf88gCXx4BNcGGiGs7BxrFrYDCcB1yKY868VT3BJ9Y4NfkBKHC8wVndarctiH1wEZ6"
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
