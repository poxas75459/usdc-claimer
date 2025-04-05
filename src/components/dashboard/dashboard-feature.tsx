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
    "4UxfAkGFwdsgDNAjmpQt2gvYp6yBcdJn3A3ZVzHzjheC87stWL6NSzPY9ZGXKcBNY5YAeXQUEbCEZR3nh3XAyxwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXjPAw255rLfaBaKUCsytqPjHE8qq7QJJ43DC1GzQJXmYzsgmu5B9bua9gURfSfZUc9KcRAdyE9Etun6BV4UkgJ",
  "key1": "3KQB3jcB1UfraaX1uS5r5yQQRtTV4mW6ZWzXLRRVL1piPoACPZosLDRRX41RSPC7RUqQZvm43aB8bdjGPNmk9C4g",
  "key2": "5FYvAM65fP3DT4drom8GcBw8FAd8bJcvtwj4rgybK5KxrK7Nwuzf7GMz5H8QWhCq7uQ96HzqsicadNjwWiijHdFf",
  "key3": "24AxWpFzcposz82JdygxXZa5eNWbWXYww1d34oLdYX1whZGQRcs4X5HGVMr5yKJJ8MRDNHmjhmcYRwdXxcA1h6Bu",
  "key4": "27Hw6pqJRx7su6TmrQzukkV4XpL6pqvJQthWzMfWfMSaFTwLwjKfWojDTuqhq3tYVQuvMZCcc1MkaQWjPuv8xnJw",
  "key5": "2XWXL3S3MCTsy8kgCqx698Z3GtwBDzbxaC8GAPqQPeMyLUDQkt9vL5eSXSzUP9ziM3e9wktCzwxmpQ8QrWVrX1cG",
  "key6": "2BNdawaavhmB8HdwcojMvqFnKKrFPbPQgig3tJyUaV6Ger9H2T66WZRqoZadQZvg2a5SVXL9CADyBwm8SpsyPKo7",
  "key7": "xpWg8SAnfqbEpXXwyPbzAXBMtR8ToUyTDSqfmMRm6K2cZZvAjifgBum5fcTE2hXTbXVVfUuoWCApcKixcLUirQN",
  "key8": "4GqyArBV8FbKaSZHLtqfB1YW5kKNdrYckTiA2ech2jdxrJPFFn3MfFbHQ9wuyY2Nx7AR71p2iunUfDXobey6xRUc",
  "key9": "21sgCS8YTovhKai68g72KhEkghk5S21FkGthpjdo4eWKfYnpzLC177vEiSacTF5fk3psCSY1JV4oHHSz4nEjPBeK",
  "key10": "4jQuPMxDdTVuZvX4ji59bcPh1ecHiWpFRAtXGF6JvKKkRtrGMJrXWPvKx8t36BjU5ZXocgrCEam84wGbrRZTdt6N",
  "key11": "5QGKunuzZVNZUvkcMZK9CPb79PpLsMyKVbLPmmhofiCt9h1rF9hyd5YnWhA8NeAec3HJCuL4rgNNysZaJFW1yqJQ",
  "key12": "dfYoMt6cKChuyh25kMePs6GCewuhp6dRecne76HnBaYSGdk8SrpeUzhW1Vc3d3vN16McXcjVEVbiG3DxVSp4pEq",
  "key13": "vWqPh7q3jtd3HBamwFZxA1b8RfjYtfPAttoUdzRPJenTeV9Y9Ccm9NExTjXmgea8fodjfKfvvPhmcvAMyh5BtNE",
  "key14": "3AjightwM3kjMFwqgGzuSzjFoo2uR6rrLkY3DBzHPva8AB43SPuYSAYRDbn3vXbQ2e9vDiXNBt9VE8DJFSixAz51",
  "key15": "5mM3zfAobB3tDwCQmY9kntDC4nCsroofVoKjVnrVSHa6ZYsSVnn5rK1KKqe1iNxeB7XngEiv3d7NGjgNJL2ezz6P",
  "key16": "259Fj2td4BRQKQEuLtLzvB71YnVh1kVJSP7bhvCBWE94mqZy89FfCzKGaZfby4VhsuQSM8gu9qiBSxttnmzeNerT",
  "key17": "2jijcrjzVhp7KPUn4VeV8VFYh9E6fLL12uqzfd6qnVX9gBn6CnJ8u4grZGhwvRMnCy1zZmUZxqttn5zQPid35cVg",
  "key18": "2gvn5ZdwFqesTebZaLk1dTht3pnG8kaYPCwLV6zKDey2eSx7uamBVEkW3MRSmwwWyVMmEX9gm3zgt5qRJtjEorjL",
  "key19": "A8bmzAdNkRGLiGP8H3q29KMhCZr7ihFHtHpoHKixH9MBtCgKQ5c3huXinLnMWhdgxbAFnJ6a7tXTV5J9ViHLffp",
  "key20": "4czX3tJPEogth2jW2Tvhi28GuT5higbD4HirW2obyRRCLTn9w1XwpYcSPnjj5DjkWgpnqsqBegUShwYBRv8pcxpU",
  "key21": "DbKL2gK2zReVNhdt6nzDosKE8YdpKvwWcdgEv9R2do1PCYNZrmYe7G7uCK328A11wS1u6qTiGjVsXsK9Z7cCz24",
  "key22": "3quQ4dJVNWajwBAhUfRBeQymeECywYWZcD4SjE978wqLzqkZHytdr5Zas5zS1ViiQz7YexeXWfDrkTBKLJ7aaUpD",
  "key23": "2G5cyZPyQV2piqMZUYNWuBLNPAP76ruKJsbKVLzC2wcZ5fWwNYasp1f5W1NUPD7ShHMmaLXqjtg1wM2E9oGJdotx",
  "key24": "3B2SsYfnv7eRTJwx5dPBdb7mP5JWiDzEfqAiqFDbXjMXEY8QZNU9ZTBwT7BWfdgVcVeXSo69g79p5k5kh72WuK1s"
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
