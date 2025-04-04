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
    "5bDTFMM5mYCig6ALxq8fLCJQ9SsEismyBBSeVdrwA11kPwXJ75UXLn2vw5KjgHtbF81kpHnstwPMffJHxA8UCeUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TMc1nZYSBRfEHohwYWXUwveTHDYxaMyRjZzrFoBQJzzQ4DJz2kxT8gpxunNtXSXUbWiHSJXiubvJXRsX7qfXA3C",
  "key1": "Pbg4KfdJTrbcvc94XKV2VT6Cy5BftrWT4G1LhC2sfhkHmgNBzoYP361t59oRfwg3k1yPv1cbQdV63LGqWj5dndx",
  "key2": "3WFnzc4eJhrZ5AJgmcj5Gvfs6JRqVN31NZxGxJD9RMX1mFJRBx3dwPwPzKDfQgmvd9HbXiMcYXr88PNbPS6TniwQ",
  "key3": "6FDyxvZb8RAvYC3QBoUU6PjHr7uCpHR5c11wdeFNWmdPVYQL73CS6Tyx3b7v1Rn1mNLTcC9iBfTUpky4Rn7BNTZ",
  "key4": "5gikvcv2DRs89Lw6AchMz8Wjz8GkacX1cs53BMkKbVYQ2tFxFDHDKiggkEjLtsv4527x22TNTuYVAkNWvuyJhr6F",
  "key5": "3LvHKLpKtwzmgJ75dDyvoZ2CZftBgHQSiaD5afUv1bcarFv7TrArCdVyUN4QG5L5gLub3udAHXRTt5GztEpLvqHY",
  "key6": "4kXiTo8ScUPmZ4E8oj5PELZmJoHnGEDP29Bz6S3goGvajuSXtRHfTmns78QYrwpf6YqKWVKcStTrpVhiXpVyHn36",
  "key7": "TuFgmim9jQFqQz8oUQq1f728Dg1JYHgQGEx9oAnxLQQUYFrQJ9DfCMMe1unhgi2foBMhNpGzCApS9MBn7B15SPw",
  "key8": "RLfTLbWeQVcfpQLDeQtefo4TZJHAXnjoCggCjga3Nrz4hrjCJgZXCs9LEsZNSiD6byoc1RCh27uPY9TNrGfEfpS",
  "key9": "3fnrkHQYYm3fyVbAnVqokBrj2f1dAMuh6Px1X1ZodC1kPH88kUgBFnfdGwmjYmoh8qyv71SueWwJjmxzoGbJszuD",
  "key10": "4kcms6R9VUm72YZrhdRfKjKvHEDeRzoDShys16c55Ls2QzzdP3b1AAxgh35Q2V9t8pssqnm9ZG9t4eXNe98ffsBi",
  "key11": "2d9sU7L9hx9TVygMQHxK3EdhCFMX5bXD2enYLWmpdGDXdLbSGStmohWebZSoyJKvFsnBL434eP1grruhFJfdG5uP",
  "key12": "2CGxhgmdjdhnRdB25j9STeb5kQbcSE3Lhf4SgFaVfy2CYsFWdjEQKtZU21pzbeVy5eWUWoQXkcGRJmk3TAKfVEBn",
  "key13": "4CNFHNN6hButx2NvWmpWu6pEbC8fXNVchjKUAsZSmSZkKXVmDgQc6U9Xd45UKxFuF4yyoJYHGsGtE5JTWYjwvoUv",
  "key14": "2CWSm7zGvX1m28Md2LfvgVqpJUGfFt6fdcyQvx9qM9sQcWPG6ZJYueVNRa1M4ZSJsdDxX2P4gNKxr8juWdc9ReFm",
  "key15": "zoSQ9qVGNWtmRfbySDGV9basR9XBpg2rnZABe5hetqD8Gp6M9MzNJQKHhLApoV7iUj955UAP2FTm8t4icHLqiYa",
  "key16": "5Pfn5MVwjX2sCphXzVzxT6ckWTndSscyxVdPcdi52ka6iNdwRWoGAZdbuUVxQHe7b59etkpwxjzVwU5nU5P7ka2D",
  "key17": "2z4zm13ZVuERBYvGJkUBVmcvGH5SUefLKoU6abTe5fJ6iJUFtRQu97XfnKGvbdq11Le6W4oLwWui79kFioSS5u2P",
  "key18": "5eZAPurFFEoSGFvx1xJwhCttPDDDa8swjJSKRY7TWEYQUnQKA2U9YV2cLMmDGppJ1oxHuPBSp22wMeLNtPBBQXQ8",
  "key19": "5VEWx1dHkiGXM28S3rrBMRRCawz8EXfsZ9aA3QzCGBQ7FwpC9bV3oagfz5pRaDPYHw6bxKCPeQXtj6SrdntK3H95",
  "key20": "5DvsTukWXRppbyGLc3n4KW15uttyXSdLStRTFGuNBhXXX9uZQGQxaK3xUiwZn6pz2BZwKu2oEmwbUB7GFFEYTY1k",
  "key21": "TCk77akkgEm3HMWPdPWr7wsZ32wg2FJXZ14xEcTwMT3BFqj3pQVUja6jvG5U6vH1iokwhYUYd6B3aVB7qGTuGXD",
  "key22": "453cZrS7Am55oEP1KYhmKRLQfnwwG3hyjr5FeC1P67uf1XSQGvYjBFrKhzY63PytippMxsCCfAuKrvGRDQa2s2Th",
  "key23": "2MFuM1quFz7XTiJvLzHKcVhQD5w9VEDwqmKzvois51F81uiTAy87tviAAmaCcFCKRzJ8Ls81mw2YeXQkNcqAbn2B",
  "key24": "48dZNdLCHfY98Fpo2ThndK8eAbcD9KtEo4vADXyzdckZqn9T6Dhbx5zt6PKrxsq1ZKB8pCPyqotUiLugfMUD1TvD",
  "key25": "4Ws2Fi8YZWKGUdXRbCBJErUwyvNgSFv3njPzu4WjmmmYZDHz1rY5dXtLo1rPpBe8mzLD4snCPg3tuV1XcEo83HCm",
  "key26": "5jqaWZiCEdkap1UE2sP3WPosmbAMGwmA7UdCA32qkMnnZDjKQ16fikLcjzd1CxgmX2j8iDijET9vX2sUA37hieyS",
  "key27": "5cqWTVddtqBR8Z7Mw2JjVQmkBR3cQWoUf6S9nBi2MYdtmh1VeLPSonWYzzhmpvwggm99uPSnjc4mo9dohf8p2uif",
  "key28": "3LPxz2qifHo4hRwDTSo9QohLCfzNdFp2ewUBCQJNUwXWABrfkbARbfxMwfdVh2km1JSuMpvWRADMFk57t1TyMdXb",
  "key29": "4dtTGzQV9Cb2grCu8RHU1Wwk5Fw36e55TiERiLGe6w6kzE2Mv3f9myg4LWeJvgLYXcR3NCYt4U1rgLZ5sqqMfuVQ",
  "key30": "3ZVkp6YGH7BeP4x9RYTCyo5t8wmDpAFCcQwA8BSNHh1P2rvuMscwWvSQyVG3CEZP8HatCVZhiD3vZUPRwij5V4SP",
  "key31": "oseDwNyNYA2dkZRQSaXDKwguXBv8Sgt8eMAqQUAvpjxBWs9E9SBEzg32HBDShvA8bLuhS15skNimsh4YRCoWrKg",
  "key32": "hB4N1j5vYXfBjJse7KyfhZap68umgkF3pm6XMmaxrMhp8FdQSaPCkFyRFsaLxVFnGqvkWb63NVTSTrkMQZhLaxm",
  "key33": "389mjCfUcqtQT4gCbbKvBEhbXZ5tM7YRcQn2YY6Zg95utmw99iANfnWVBjPRpnV2fASvYyg9wiRkhkcUQAMSpMsx"
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
