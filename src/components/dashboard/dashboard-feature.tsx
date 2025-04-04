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
    "3uCMYU5wWFRFk8Z3aE5iKeBNFcPPozjunVihFU3eEtzeX1myxt9iAPFcf4EraDH2uQyx1SC3ynJ4hBffSb96bB6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LHAHqcgQSkEGKmYttqrMc5GHpRPz1FNAUXxJjeXY2CfK4WGdqv1RhFxvM93d4DnfQpsVzVVC85Z1SQDPtTEogLp",
  "key1": "3rTGHP7kzrsXq8cRupj7byRK2pjRi8GdcELYnNMgWBRSRj2uq4inAt5nirZQ6LoTeLuUyyctRoUixYzxsDUaJWW9",
  "key2": "39bkzhDvEFi8gnWaDWVwpZR6t7fNjPYNCVYedf7qVkh8MDZuYutdZ4SaprYB8YthMsLX5B1MLuGtKqdW3gGE5NVu",
  "key3": "3cG1B3PS4eVLw3ah5bRdrPAGxU8q6K7EnS8s9f8mnha3tSXfYJHS3AoDbAJzQz4ZKr6CXnS38qXNNuDp9QphZ8Af",
  "key4": "erfiZdb7cG3LkpMKK8mFMkWkUL5D8TYqDKvCcCoY4e61GHkWR1wFJvcoFkyLLrWfZRLruYgPvgS9ei2P3rasa8D",
  "key5": "422qRV4ddC3BcjAnRA3BHd7ix3kP3udkhrCGDFZQi7QSLcm7Z1Katue54EgGxpaX1ZVXxbA1Nq4Nzsk6twmhiieR",
  "key6": "sVprK39emTM91NZfZjkaGwoyYGNzRv7v4i41FwPYhFkb5eSPr4jKMa1MFaFjNEfLTxxtdywBrmDMGVCapu4MpWv",
  "key7": "4qDBhyPj1ZR7Eg3KkrJp7VHsWfJEyHuJMhktNpNQrY29QLrfaWFrCkYxhKX1a3H9Cnu5u8rvDjz8TXhUx8WDKUR9",
  "key8": "Q884B9xdpqsDEWAkZSbKpc3mcRCJ8QtW8pg6CaGcJL2td819bm1Dtzizf7jVXWen8qojUniHPcW9cpc86sRj5f3",
  "key9": "3NXDNwu7VCy5eHpxZG4yf9fvgwZe4J5F8SmZcwSaM9knhCaDXwop3W7MwG8fiRSL8PSVc2jTJbYWHZMdyjPCXkgL",
  "key10": "2s3Xfodk1K7wWJaCwJUsG7PoKPtfLLcZWYoRVgnpqgMRzGT88BuQ73vM2yz6vA2eAEjYEvy92urW87r1e8emmTKw",
  "key11": "7gkAN83zKcwEW92NZLtJn23V3ySTNCyzwZDri5QGTrVDN6ShsHChouHB2XU528yM5pgG4hxE7bzLtSaAwEAsJpS",
  "key12": "2zZxpa3NY3kUf58MzMWM8QFdchYjZAzhmpd4Ur9fxKYq5S7TY6qgnZpTXS9fksm7E3EqPs9sQfMJF552LYLDyvTg",
  "key13": "5UfjxMjezthb61EtFwrGxexDp5Xx7o7hPcJhsqSQPnpsuXaSFwWe7Hn3b2mHRE7rFgToukxZU36aL7v4tvqvFYbc",
  "key14": "5uGbZpXG4EhXpkNZd3Sv1EcNgTQGo6iBbDC78FA55ES8AopdeS2CfJHNwmpdAp9edjpyrwYwg3TqRfPQbZhxScH8",
  "key15": "5D8xv2iwQKDru72PmmdKWNecoDQcDgh1HoeDxBGqwaqogZD8hjMhxQCZcnQgw87gJU6TABEVdcHHzzzGKwN6NbTV",
  "key16": "4kmGGuL9v4URyP5p1TyDSm1WYjvR8cX1vnoUyuJZRhXBK6gub4JKo61qr3AsokN265FaRgC8tqemCoSpzmTqypgJ",
  "key17": "2DGD5gWZBfu1dwsioR7Si6Us2fcjMxmPCFsCpRKChd3ZwkPbh5EZv9CucdFo4ZG7DKofRA67YzY5dv3HnaJU7M2M",
  "key18": "sZYEUBUiFL7yNmMDaFPshrYq8mLiC3id2tTda3j7cSvCJHWWnse6WTELcSRjstPaGPQNYrwrarw699QCT7y6Tgv",
  "key19": "Wjx8fK3huDbp4tDsyMf7hrCZz2iGCxPchAWgPbPXXpouS6xeAEQ8RdGBfZwaW81BS5sxBjNPr6JHDVLpskjfALX",
  "key20": "2Kmx3N9DvgjF34CpCxr8YeiypMnVC3BHet5VpHoquKjXYmeLHHH9Zr3Y1nSv1RC9nffb2kLR2UkQUoXADfkfxpbV",
  "key21": "5P5PivPXw8nzKrW6P6pskTxppKEs9qmRymSyY6o4r5CQV5AVweswR45nVR5Bbasvdhhaajxanim7711ob4cb7dqg",
  "key22": "eRuvLFkEQ5Z6WJAZXTiJ84WYccHRmRcdphA7vjp93THhxMcNsHyTb6jnvMPEwn62uvEecBirprBHXcD7ZoDPcQs",
  "key23": "58UgvPWFyZ7fdKhjTEYKfh3pXZ8juSLRrMKtyUkui3dGxJ6SeZzf7azfj3yiFHfUEBVSuYpnm5FJsdy1TCqYFRhQ",
  "key24": "3M8irR7yqGYPooXBDvFAX66b3gXxhvndY3wstb9tobX6buS44vqfJmFxD43hFEFgc9qbtGECp483cSnVycNyVijb"
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
