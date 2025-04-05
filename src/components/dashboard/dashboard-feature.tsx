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
    "3ARt35ac1WgWmZ6AyQtyfSvN8QYYcUPGL8UZfJPoD5SN47CUe7FUQSbPTxBEEx7X2awLU2APcX5MLNUxJsW41vEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LiRVX4e1GjspZnWcZUNjyxJPXxe6br3dFGNS5uYRZ28HoXXZHtvhJVPvs2jCJ7rv7oYAUEL1JXCvUkXtHvmuEDi",
  "key1": "4CpPqoiqnUHujs1zTWcTqb9c51wtzwantixG9drGfc8md1r1B867qodeReeRDAyTZD2Qwp4g4CZmZzF8pLkHW9i1",
  "key2": "5nNcebSFk566Yh83oPDAkTeND1pLvNv5jm6HeC7bEEoz68fHuQ3uif25T6XApqqwcfzE4Sya98nRkWuM5rYPPBn8",
  "key3": "ZiBkojhk9yZ66MwojmU6pRT9xpSXyvsHVMHq2GvJC3JeoT4k66nkKxHPCNmAo74zo6cmtzgkduVgf7VBCcCxACJ",
  "key4": "24vndumiUqYzkbbsEYkibLC48DJTvfKptxQPxoamDWpjdUzQf8FFpwSpUttGTHzDoLDhLzHRpeLfCn8UKPc9CMNz",
  "key5": "5xEspHaJfS2RABok4MTYeX8nnVjxUTZmxE2YQscpFLrUeNqMNti9GcFvL42cCCBm7ajoVSJbDTRQu1pa5sc4r8ft",
  "key6": "3PVEMZQPF9GUDor11fb5zfh84TbXxpLoPyh2Xb4fWpd4rXfeiBjFn6W16ZoQFmeWfBCWMiPiebNN1C4qxpBYeRVL",
  "key7": "4dj4ECBpf3Jn6sxwrU9JdgSmdet7VbDs3fAcSj9sCMRVEA3d9mVdu2meQoMpBboKQfQHix8iEd2MGUaWp563PZBx",
  "key8": "3bmQwYo8f28Bo8abYGzxCCPTQvB3RexjtNXPNRUbMJXaT36VmUmxjKmkZavc8HcEnUpmdb79JZGpoqLM9rkLZ35B",
  "key9": "3wCUdnoqMLXYiGZNZfEJRfxmzAfZAQvjMerv7VRDHJ8X3B6D2f2oP3QHuGZxgWSNVoKyMhnRjfG3riiYy1xFaMtx",
  "key10": "5zCE8BE1hiGaDRzuPB6jdzeanDok74LbJcdxnhy5kxXJbFDQXpvBHkwJ3XmgsTeBxytvDWTpRMw8r4atsNcznRD6",
  "key11": "2MMM1PEnk8KVCT4uCyeLYCU1MzwstCS6MATW3VPpL4Dk5Q8twy2hJL2VZ25qtfEMitMBvhcSEnsAXeJZEvuUDub5",
  "key12": "py6e3xugMxFdX9UPi9XxiiG98auqsRD3VaWzXoqzi7NXQjQmesCUmrjM6ZHLUqK841uLKUNBnojnMUjqmU1wkNt",
  "key13": "5oQmYc3gyPFiJJG6yj1bSmvnAaro6fnqu6nWsDNPYYH1qMNSzd6ykR3SiVRm3pKzmDQiCtneK9qG3npipjNBN94S",
  "key14": "TNygiXQKPGE8yghu82bmtrtmYDbyWfG4hJTTmL1RoFzh4eLj4hj9f6kzFNtn54zsQEVvP4SjKXdxyCRNmcKuQuQ",
  "key15": "4U73WGmrRhGSFg49T2rdgyRnJEfvVnTa1d7gdtXmUEYkreopPH7XMkPSSiy8u7q29tn6HQq37aLz9jYZ4Yej7frY",
  "key16": "4KxTBFZsStxMraHeAdp4S3Nyhg2eBns1JZdjTAHpUuqaK8FeoxRC5iUJyVwrLzHmcHEbRabvXX33aPhwe9Wyn6pn",
  "key17": "5Q4eATiYwJQiHnnJCnRjPh2HXWV6iiwF1tsENuV8eM7Trd8tgwhBgaj4vriuiTJfk81QVAEhNEx19pQQhaNzZGRM",
  "key18": "4ykoH2jd1XgMm5eEc27rWJirKNymxUrqUfscYccLhVLDEXdNMy96dYHTP3uZqFug6YBjeVCe3jFPhetDir3fD5PY",
  "key19": "3Zdse6Kj1Upc43eCENwnBe9upC4CQfiaZ1DhTwGjSUBW5AptRUKZrYSvZK7TtrZ3Nktr4BR9TwyP9h7sVP9Nn7t7",
  "key20": "T6WYsm6pX3JNMx8kstnXGKXVxn3B5rwymhfUJjW3Up7NKpxCE6mjXvAGEyKvqXh58dCBZFaq2RPZAgc9dHymncV",
  "key21": "2SNtgUt9zXYdrV1Gz8AQq9rsnvUb313dWVqEVW4xW5A7FpwJSDUGSNZ3v5GoAY7qBc9xhFR23UXDqUUEBkEujFmL",
  "key22": "TD13nCiAdJB9x49BcWWsVSba5qG8jXybhVmy4mQ2kqPPjSW8V1toCRejeTkeJxhNM5PmEYQZLNQ6qJ4YeQefhav",
  "key23": "3xtsXPrG64c5JDdGc81DgLQyjuPf2bYRNPYHd78xyZPkczLr5HrgmLBE4nU22K2QuVqGJtThmkmDJH8rGzsxP9FD",
  "key24": "WTvw1ywdQJxauZJw6e3PFEFgZdYVgVDxBakjJqt7WRgStmRoucotDrrxovXK3oxQ9iCtdcZRYoWaMTEFj29kdjC"
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
