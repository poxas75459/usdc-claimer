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
    "5pkjBNtQN8xotznwTEmnnAoKGWpw2UhyHpRpyzDjj8gA6QfE7VqbqxCTCDMeSVdcvn2pMhZgDsiMe8ibDeyyYKom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B9mVNvX2doQzu5osTUxnaqrPjMADCm7ENSk179d2vbgY455JmnsNzmJKREWAi56tcgxVhm33Jg27kCdVFFxAQ7Z",
  "key1": "3zLytaCmo472z23ZBvgDBtEhfsu29N1832RySUU29jTrjDW5LQTeszFm3y9K5PjhKZSTnKhoXzXkXi3L2CeptEGn",
  "key2": "nuAgjSpc41gfxWA3CLVHUuKQyMQEsAC2foBPxb9diKyo4B4YNw5Pnnrp5PchbCC1ZMkB5CGx6A6XcgEd6DvKCMh",
  "key3": "64fEhyqzkx5j8sd2GP3JdRKX5pdrvddwF1XkuKVnkd48pxJd3v1BT1u5ARGyHkwBFDFyPRoBTE8nMLtiekDkiAA6",
  "key4": "5k5tzWRXGc5uMeooWTZUGUvHs9vmBmUJrtviqA9rq89Euo97Lx8YDjTwZnM4V7eGCNknoVzrrqfV3wamsD6Pg3Uh",
  "key5": "2zoozDkvFfiTyK1h5qV2XN838r1m1Aqk3Lm4sAxM7NhDKQwprqYKyGibXLMZyhwbsQzuLgMQLUsWa2VBAxHCtvea",
  "key6": "5jL3KwGHDGakcLrw5jYzW1QJRY7voyKMQMp8XrB4cqLq3A8XtY7gwuvJw6z1uhtW6k7YtTyjVJFAHAC7XBeN8aGq",
  "key7": "5uHZVDHnjwyWvrBAi8kfKXndtMuUAWEPLes4ffUmtyB7EKZWeas8kRgYoP67rDiLvGCq7EyR4vwHRphKKx6FbfXn",
  "key8": "t6BaJz1HVobj5djbnAuumcmgCiL3haWrRZa3QTRezUr6mbgubKXkx6aTLm3bc7fE6aDCcEqfqHCL5M5Vh2C6Fsu",
  "key9": "jMYZ5nmuU8cvCfkvgdXU4nhk8bAuU1zVpLXScax4Kf66yr5b5J7VTnG1PUgwRk8qmcF19JvdZ3Q2gyuGbXDDC9v",
  "key10": "5hXQGtMCfmSSW2ysX8c3aZPtEopV4kbeJw6Mura2KG1j51ifxUd54dHVWARTavrns1aF5jpgjWncYSFAv594zU8i",
  "key11": "2XgxSez1zkUeiLHuiFqoa8mRjvZUCMH6C1ay2uf9wkngLpgCiStRmsZkH7Uksr4G1K2DE3DzVFthPoVZwkSa8VHr",
  "key12": "4wyswx2DzW2VNCTSdfyvDZc6sRQwpsHVqm9H6xSeT5kvCuVtdHPc7gRcYSmE5CxJkjEHnWaQR4gxqtUyPRRCJcnn",
  "key13": "QBCJrfU9oLVQSPDqftkHCKgGnS5ZrJAdv4iw6Zivw3i4yaqMeQwL8BXS9D7zSh7DC4p2UBWJQGYFGmeGEGWCpfP",
  "key14": "3Wy6nqPFPHFMjRmrJsyu1Md1x2Wvai7subB7ntu1ZT6MCefAiP6rZyeMUeM4VejYoKDU83zom2Fz6ZdvtMVJbh8x",
  "key15": "jjTyge5K2w5mokCQyGtk7CdvVbDTDpGNR2UejW2S4Rk1Br1jrN2j7DYQsQPWZjXawCCPv15sPgPcQ3KkQ5w4Lr5",
  "key16": "9Gf7Lh4CeJUurvXFRRhgtVySvQANoX9Ztf7avD85tGkwu72E13koSGFxRGynhEm75FXcvu7mxm6cSToQsLfz9Ld",
  "key17": "t7EzRy34y3czm1geNriLA3o6YqCdKPwRv239ZqrvZuEJ3ytwAikbmUuZVCDRPXb4tzZPuYhXT7GsoTLdCqr5JaW",
  "key18": "uvs8Aqih7ggeUuPvAPKgT2uVNN13P3wKe6xGgY728jweiH4DXA1KYrVxxw3mxMFdaa31xELLFJXhW2HJHKyjVJt",
  "key19": "5rTuUZ2NUMM39geqX3WTM6f6aXwzmixU7yvpBxrgT8J74xGLjoEHcDMpUur1qNTZE13efrzS744RxuwM9mF7GF3K",
  "key20": "51QA46ztdKZcRSXYBtgp1AKEc82jdDJyax68DvcS7f9cUHRmT47N3vNcmkJKAMoCkemDinYKH5D5DPHBrvUYEASu",
  "key21": "2n2ZBDCpf2H1c3KwpPedSsZLhwssTXeQhprTtjL4ah1i2UdmE9yh19u33Azjho6qr8Snx8UJPfsbwByLNs54yEDC",
  "key22": "PudsciNP55xhviGJPZJa5sVVawAgGXnKJDgQsGew4YqN6ZHwXqgsxkaVufMWPJoNP8iisyiZcGgoRgQvePEWQY2",
  "key23": "2kpdosFuEZ2mmeqQN5BzT4oMjmCYJxrgxF8wjfS8S6GhxeNtQw8kL8aMmeeQMRoRbQYBymd9tyqhfYimpxaNrBJr",
  "key24": "4u7VABWu1XWtUfhfw84pJwy9wnFKN3hp1qAKgajcvLCEkKz1zyEQ4A7iEMcEbcjRKJbRf4dJUM9tmtRonpXn5JVk",
  "key25": "4TyL8DRFtMEh8UvLXLycs91cH9hQCDa8mmhkcVRQFRYSHPw9mpGzpkCNqRRSzdZdyApWJ7xfM9B3PitCcQ9RVp33",
  "key26": "2V9soWQKtyQUsvjwkGMWNYzw7XhAhf6cAs4fLczq7tUdmAmorQYPvcZRQHyo6L18Lm8dHsJDjiaryVK1jmhFxM68",
  "key27": "3ML9uNBCHSXGUEwTPnJgSHxPz7zwGbbuwfYJDfWzy9WqwDRAeWPR2jqsKGgK2wjcBa8rLUpL2vHbopYb56vdRoRR",
  "key28": "41HLxL7LCugUEoRPy2rabAYn5mgxJbUXgmoaftYWvuwbEaD4NAEXWFpNfw3XPv3VC8qJ5YSjub5rNZ4yQ1GnA5gz",
  "key29": "mmz7eEQ6qj8BC5yBSgtBgRhrxGU4BpLaaftwDY99rh1HbCr9DhBQKtxotBJoJzs7Ea4DKKz9MhqJT9BmV4WnYrU",
  "key30": "2SQ2R18ABoX6KTpjjdrTXsD5Eij9EnRW6RBXXnptZwB6i4uUhC68krUYtfd8KpFnE61gb1FV71Xs6NE8AGca94fD",
  "key31": "5tzHpaT7CTNKhAoea9jv63ui1rxpgxgfpysHT2iBEGZGVaArLZgvAxYGBgfLeEX2T78px5raBJH7kgPexoNV1iB6",
  "key32": "4yqFpiXXFo6kzz2yKFfTM1u5umSeeDXLhniwFZzha6gUnAZdZifWWVDddQcJLqukMhz6xcBZmqCmf6EwsWZLZhns"
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
