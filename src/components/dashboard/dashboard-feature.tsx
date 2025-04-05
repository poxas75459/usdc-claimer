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
    "4vVcHEWzyXJ9KFWWpbJUK4PFtDweTmvLfGEw6x9whwJJV7Wud5CNEZ7jH3JXQnotXGJP3M9eqkxfAN5JnpA1BD7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pJtSKawrcNvTiGd9Sy5Fpzn4sES3oid2j7J9sBoTS7VUnf7XwBrZKRezp9kHZhEDvZJNLr8XBuBJqXvQmjtr8Zm",
  "key1": "5YRYBB9BMVnFN8UUxYr68qPS4j7FBEgX7s6uPrbxFXHvM7GvvLgL42tkRzUd1TU9Qrr9WPaVWbikfMFQMmHgXwG6",
  "key2": "3YW9tWkQJnUsQHqnToXUGvj36ExKN3QLZZNxciKQbka5C31mgQrabNu3SvarMvsaifUADMGhvFcMBWdvrwaqwL1H",
  "key3": "3MATVACw4iSnTYWQuuozoKXqMkhNLyqATs8JybNxMN9SGPyUjxDXYBE6j5RW9DvwpALv3tmCSVGaZS3xMFQSGkTs",
  "key4": "4wQ8mRU8jnKNLhm57ZuYnJHYeuHU1Us6puvrBqy2BjdE3gux7nuTC7dYDHNWxmvcvAWzRw7c3ciQ7rvBfq4ExvWU",
  "key5": "3eVbVPJeu9RuBds9VCTB31NwFxQYoRpUN1xyHubcx7f7FBnSjJaBsuCc4bBtRyFh9ndbFPcqetjttgMDudsoskjo",
  "key6": "2xhkM3m3uFRPJB21u8GVokmbR1T6HfbMPnqtBcbH4Uf5XBxpKG7wFwMCc8GwAmEKfMVNcZ3Q3rwxxs3qBHjFRTYA",
  "key7": "4Txkxj6qXq3GsoSWCMGzGGDEoWijjKXZFv9UL8vtR6Zx9kWgpRuWVAnLsoFPrPyn4BGur494mKeGcdR4QPLdYCuH",
  "key8": "ukqmQPNEr1vXz9ijjprUe1prViGHpE6CijkjNbDKVeDsHhJ6PjuHCGmrftW62xRVcPHahEU9g6ZLaZoqsPeiyUA",
  "key9": "5nBQ9HDtNc3SRoJB4hHX7oLpRVMEYEbrP4x5rQJZX6z6zFQbGbGZcDRSUE1q6xi8We4ZWXzMJt5dimRZoocrXJJo",
  "key10": "4pkgsP2FpgSsv5PkE3xM67z2b9T4LEMNVSBoG8VEqSkbF9GPSZVBLdRu3w8rd7hj8xE682soE1yM5L16KZKFDwGX",
  "key11": "3nV3R9NbFkEDXVwTH1jVYBq747UCspRGXR99wjHZdoDaujnrvH92RBVZ2d5sZKU8fHCs6cjZp5PbuwvX4VeTo6PV",
  "key12": "5d8EvkMeGNSaGytjBw6pfN2AnuCoiWsmee1WPppiCzeMkbfNXTdimcsvW2CBnvmbA4pMbkd7wD6PivTdUrhoScAz",
  "key13": "5XGPXD7FzLLYiep8YfHLkbgcZzfYrK2BGF6gfFGarb2annZAtL3gwr6wgdXXvVhMuYnHKDntJqKzqp2k7kGh517j",
  "key14": "3YG4w3r6T9V97HeEmHktsAK29cvq1dbhCxvB75iVetviQq1CRehktitXfhGSXjxcyAp6qAf5xevLwWdzunXsHC8U",
  "key15": "4ePEcNjAF3TpTRrpKXDY3TWDhSumFBdSPUqQhFM9xV4gJmCMbaorT8rpiEpVvVmAnuteqeRoHW2FrKZ39HKwHZA9",
  "key16": "3QMDRB2z7rhcgtvAoM93L5dfk2gkzwmTzQKiM32Ko1KmbdMwGjVfrX2coMo3vfMisXe8BbLNkuCKS9k3yNBcvti6",
  "key17": "xNWfCTSGMfn9zA5Q4RmU4A8Js7LDd45tTHCuKBp6srxy8MSMSmCZi8gDgTJSEVWYsakxrzEQ5AAJHYsHY2GXaqF",
  "key18": "ygm4ajsnqbyMvJciQt9vHuggTUvtfYQJGBiQMwMmQPxB4rQkWGMWmJpr1uksZjdQbgnnoNvyfP2uUkcmHhasA6V",
  "key19": "65i82ogWcriDkPhBK51zv8aozTqjP8wBMiXXcbe9zTQf8HBSEasP4NrbtZL39fg5w2EUNiEhrMxCN8FaeJdkZsd2",
  "key20": "eGo1PV8cxb5VJdkyvtzcZQmQ12k8DLgKYNbwHkpGHRGUBv6GWrkfKUVZLjz1qqBRtqRc4CbTS4ZN5dw1px1jSuW",
  "key21": "2B5P9oc8LWmL26uXn6Wfj5Cdn4dCAfkyP2styjNw6VXUqwppTjT25HXhLEhjpTkZbGFth7KvZqbBMURR99yjv7Qe",
  "key22": "ABVjSXZMg7K6van1zANk4Mva6AoPKhKryHYA6SkiSMPsAKiQj42FLJfBCvegDCvizBSaFd5TMymPRvTq4FjQcc9",
  "key23": "2gayu1TKg94ooT1Dqz9eMmVDEC8SLnCPVUBajyA2xGL4KYkQQQL7NUNVNJZbchnVKcXYKdLXhV8nbwGn9NfYffFn",
  "key24": "35BEJNnnQKHpTm74LB3t3z1xdAwA4Ki7vfhtRjTnFhv6knYw1QqGAP3HMjmamDut2QyAbJqjM3C4coGpe68beGw2"
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
