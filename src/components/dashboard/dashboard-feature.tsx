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
    "47oQ3p8yUjJQPPntaKCNDgXyCw8SfbcENx5pUv2t8KZtEVYdXwHefw7yFAUmi8NgJDmRvTngbaA49Pe4XXiTxKSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZMsoUWmYfmwEkWGx4ejpyHwdzxEg5LZG1fzP9pnya7Nj9BWeJ4HmnLqvsQav6EwTTVMKqBGfTtmEiQPXymVDEbR",
  "key1": "3Q1waSuHYgm4tigZyYM2ZNeZ15pEGd6woR12EGNWNtqs2uqvct9YnX1Ykrw1B5pBhm4BKA4SstbEdJ4W34HVs3RB",
  "key2": "4Dy1kqfrxNEGrEPyVzRg2HnwNmqcmpmm7DL1fMMxWWVaaSqpKRxtnu7jQLUzSJf6hAnDGeBVGBTM8LXzmhesZ6iM",
  "key3": "HuvQ8pQgn8BohJmChk7z8QNLJA7sxJRkzJHUGZt3eb1BQWjDeDPeFeeBeeuDznXfdkV8NSk2CpBRumaVT9KJKrR",
  "key4": "TDBLYpJzqoM6EiKLUGooktzZweMUU1wvRj4TSfqG8D93NoNHvCVHJ9wuGCNi23kh9eoMqJKDVaxvfAbrzaEs42e",
  "key5": "3F4rtFLZWGfP8BNNuWNiV35TjC9kSuTPrYswjpimB9WW4ZJApdpN8jiqqSm5HSE2eBNnLw8gwR693a4NDtywgLCp",
  "key6": "4natPcZu3BZkFhD1XAnMmNb2P3VWCferTAz4SnHNV5UNxEkkFnwV78t11uvqqXtbrg2QaRg5T1BPwzZD63Ahkmvv",
  "key7": "uDHm7x4pYpTQKAgkD2xSkNiDtNxLRnE1nhZSEY6MTZGU6eK5bz7yu5BakQEP27ddFt7Mvhnac3EuDZDUyk33CJN",
  "key8": "3TkxAgJVM1SpoCMFFAWCjPyrKBWH8Td8dhuHeEeRr4UNs7P2WJwy4Gox3JcHKnfPFyFsAcgoNnsP7jAGDqv8yPsG",
  "key9": "3obYJjraHma1jJDoE8fCQ8gZFHmMtdTv2N7KDFEET2Y7jcVye1qkRShreNNeS3DsZjGEBf75aVmWZTWsggiS5Gmq",
  "key10": "RaSNNu9sJNq1LWtoGJZEqvmHTvNSvMUV1hq8m9AHh1VubHGFyugw5bjG3dRKrvzZTSvfkxMvw7L2zZEF7a8TZMu",
  "key11": "2QV7gNwvuX2UA7yfhqkY9u95hnpVvZ15tnKFPscahTJb1nZnHZFG3DHCBF3vLvHfwp2q8RUNpPpxzx3uFq9Duqqa",
  "key12": "5QwqqC2vMYzCBpDbpHkVVGfvLN6eYHCuRQp9Se2iaqkZ5Es5vSGVPWXi6hvJkaE5NMgtubLuyhfXfoBcrTWowVKM",
  "key13": "5tVvS3vdy62zZEPzz87oAEEGhpd1uBr25uHsMmH2JLp7VD7ACVJUWg8yMXP9cCoSpWFz25UW8RqaDLuJmtc7SYaG",
  "key14": "5eU9Eic1fiDCyvXAP3mnZ8mU1pxwJuV9kx5yDYtbBy1A3u47oQ7mZBPkMxUdxZqovU82u39MKwoJTPxL6jvAYwkP",
  "key15": "4YyCd8zgknhhKouAMWSBT5cFCaZaqtGi7Uv5x8xUyGmXxSDPnRzo6EhgDbcH8jBww4X8nTAoFsVSgpULp6Pbu1Bn",
  "key16": "3NuSUnj3sTLttdJLpewN1cxGCpLekdxFN9saHeWw4ojRmjmyNesfBxwAFDnn6cc6fEjvbXZ8rYnE9S1tiU4aHPkg",
  "key17": "2T22eACKn9MtDhX4dz4t8ZwKYFR2kDP6yKp8E6YZ3teeAt3noi6jJykBPoYy7thGtsT445m6ZCKk1LC12EBCQWr2",
  "key18": "ZPFkNCVhKfHruzNtaCYmZUkQuyBu95kBsj7aXuRFgRgLx13Y9KApdDo1ba9qTRoB8HLHsczVTvk6RD6nZTuNJin",
  "key19": "61ev9dPS2aoBdUDCz56Td9WPXhgQm6kkZepm7mCdoKuwiVqoo89Sm1Wxa8bD3F1S7hRkRZ1Mw7hNYN3uuE8ooJKG",
  "key20": "VB5PiDTb3yeWP8pudXoXMm75FarWWCWx1HtBU8BRB4SGRygwxNvSsHTdkv37jbJBtWJKSwT7fqq2jKcygpvBE9z",
  "key21": "2H8a8LuvqMyH8ZoEivZFKXGrYxoSr7enEuhD8HW7eaJujLESzFh8S7Zzd9oSoSj5UK6WHxsLCAQRJU8A1bGqLCzq",
  "key22": "4xd1TW4SZDwPhTTc7TLGR2DYJFaYBMBM4Cff5PfpNTBTe2Vh3kv8RZAXQ2CDpLx29aBTB3BdQB2734euCi3hFrUj",
  "key23": "2ndrUvpmn6XvbU1XqV3JkbLcMoQHQ6B2NNEcpJKUMKTKaKTbufJJ9yXeiY7rYgREuXF6m68s1icgcidwzNKUs6JR",
  "key24": "zRhyh6NEQAdMALQy2mJVr8DbSLPkJ2Vm4ts7eNwJSp6LWkogbayErh5bPouAdmaBU7vS1MzpeJPxsJUuptF9epr"
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
