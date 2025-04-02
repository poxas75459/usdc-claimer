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
    "52FFkgwBaJzDnQFaBxtGE1whhDMoFVm3GrUz9rCUuvSUBYrBQBsX6TpCJhExPFfarFRTYbZ9KCWS4pcFxoYFNfCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iHovxotxJ7p7WVZvhS2NtkrvsuBjWBnRKFRET1GxwuDAkgrj8FeoX4BxK2jxAoAVWu1BXSepNwyQrbfYHd4Tsin",
  "key1": "21Q5HgF7srCm1rE45GjMooPbh6ZCWD2P21HxESDhjpybwjUkmqn7UACG4ftmA9fV9irGzV2QY82uVmi9XsZv37Qf",
  "key2": "F1DMRmToWmLuLH3i1s3NK1v6xPZGZbktFDwPrwe7EmEucPS2VLveMgXV2QXU1KFtSDn3EYDZJhbKAQ33p2Nqnkz",
  "key3": "269qm96PLuisu31FKV9P3LsyT6vCuGkCpZHb4sP3DQVQXMRd5RohgJ7i2Q7fcXRMNewvckiuLsN4BwGGerxMsRH5",
  "key4": "2QhUPAusXMjHUWh18jNjEG8A9g6ewuZFTK1DGAiduUetmwizTHHKjN5A8wYMJeHk3RJur9wnegW6mwtDPfegdLiW",
  "key5": "2Qr26FNEoVVwHA3WBc8U9aCThehu3KBwDjpiUfRcytkvtQFDLrjeSGmK7Ju9Qe9NN4qMMHpbiAspdzpcv4CeJsTK",
  "key6": "5xCzBEz78u2E3z7i6MAZrKWyGG27yqZBdzjg5cCQkeUE3ec2gWWfR7ne1znsBMRZdyi8kjvVivAUD77VaG8XVDDq",
  "key7": "3awfw4mWd2L8ZSdnuiic1sa22Kq32dyMqfeNGPCJhYxtqfM3rjndHJv4PqvzHFdmq36wmsU9BkP3Q7D5PzXyeayf",
  "key8": "5QYtBEcFTUzPpp4G3NSQZeoMScuTJ4qXg4XTd3wAy9jJwwcszn7MusikyWKbK18Xm8jErT9LogByvcqweWkz2Wi2",
  "key9": "2yejbAmmR7L7er9AELtwqCFGfAuRrt6sUKspx8VyS8s42t5hL7jEEfA6Xzy6Kvhz3KKSVymXzkW2ZHEour3ycnkP",
  "key10": "679LJCM9NZbdV36B6BVMKNb23p1iwFMCn4AGeTekP3PogyaavBV17mb7HHZFgxhGExorvofxErvQWeK8x1xEnqNq",
  "key11": "3tzW6QLtVGNLTFKMJFMFtKXsrAiGxYrYB6CFP5mEbv7sWmcmtktidXa8GtV2UjUDBTgHmwUTyS2CXDqXhUwdLyLu",
  "key12": "JDwufRvoBxsEcsvkrrCyvQK6hjsqj6pDtBJARk7WbLWqYPu9rGBp6q8Q74QU3GpT3PeyJKqRLW8YPKLjFgCpC5Z",
  "key13": "WAqYvXQtwCWKMF1rwz3ama8RDBj64WAvASSoXjYjz8RNMtGyzGua8KSWJjSCd4xmqss7MrcCgTKo6c7MBGkxkko",
  "key14": "x3CiPkM1B4abG8kPea1CJ6TAawnhJ7gTsuPnyrLdwDkLjo7CZZBkAg8PGij4m2GimkwHXrfjWfzmk7ZHTtPccxe",
  "key15": "5Pg4AvicKzSAujHQyjXFA6pcrejdS4bmBygniz1cAVfTP6Z3thnrBA6VkYzg6ri18aWqtdLPj3dQD5xUUZDos2Fq",
  "key16": "2PC8r9wXWkHJKJwRRGJuee7nQpiToX6GJHsRXRcXJVeqPy5SbnceWvCWxq3ToHjLgmhJTGkVx5MUqGAywXXQGeCN",
  "key17": "5FjBPzTJa8ab4av8UZxKmThvAELce5XhQQUbg358HuXE3gauMpQy3723Bfmq8GNKaRHiTDmh1j2GB9DXCEqXBrzt",
  "key18": "JCWdb2ewnXWZiwsZs6TqapDYNjiJZF9MXo3foB6msM8QgERDKvx4yRBzapABWpfnyYnZPMPFWVZMoV9mA8mz3ZT",
  "key19": "3fbZ81wTCSPBNEVL94JXr8rm5hCSvyo4Q3uoHKYrSXnwC6jJjtVLgftiaEe1xqCXApcmpvgRbVgdTMwCwSdb49bN",
  "key20": "2nVPRgxLxx7GJD1wqFxjke2EbKnSfDV22A5p2hCaRyMVjW4qgymRSrQcfvzHKnytDkXLLwuaeSFcTTMU9rwB3Gpy",
  "key21": "32RKKy4uegxXmdV4ekRdeUg8URoBbLR1HaEJpAu2pSxrteuEKKSjX3C2pKHAXQm654MaR6DnNPA31cyEeRQnPfC5",
  "key22": "3YR9Eh1gWuP5VbrMLG9SeLGab3zUZDPAVCtHEMSt8nRYipBpK8Y1CjfN1iTRzUzGeTx19pWBCAEfshAQyN6sbqCS",
  "key23": "2DYsWEYGWh76ZGYrVLQV1tsJYk6GvjHgCdVRbXbJNyhcHntRziaZBPY2dwjzmNFijPfL9KVow2yyu5LeM3RMQMKQ",
  "key24": "21S4BsEnjPmeyRa6kFfaEQMghcoCHFhvaM2bzVYYEZ5sbKnhog4RXgGg45hG2PwM7WLkmX4PgVAoAEybhkRU9yRr",
  "key25": "3BpmUnBJ3Zke41BoVoN2BetDN4JK4wc8MCPHjJ7yDy51w6rtGzg2qWUq3pRXVP3zSh3rQDBc5y82ZzyF22848fwD",
  "key26": "2UPT1TdgWRMBWxRvVziSD66XdtCATAiLBShV91ZMm6rChHozE6CLZiK4j9PDXhuWMDtSSeJCdfYruc8DrDC7dvNQ",
  "key27": "5X8vMhYNWajLoqVAoa2j6qwJ2FaaKC1U3pZxmbRW9jzz7DzoRmFhcf7TJUvGVFTHUmFgkNpFdGfDm3AoNnkh3EgV",
  "key28": "5j6rAn8wZdMnmVpWP4HUEA9PcquEySqD36N8jqtSSa1eA7U6n4u4mXsXMzD16y3NoubNAyNh6B64bWUbdwep5p6i",
  "key29": "BgqnaMaFcKqT72gMLXHAasHfWfpBp6vBKsaWibTpBxAdw6EszD8BG3nQFQX7obiJmyRrGNPtn8eciZ9kMjhNQgi",
  "key30": "4wFnC59vpXL8jDh1ey8jvs1YG7YMfRZ3oRCkeoNthCVLp5DGXnejRmkHomkZwYeSHFYjvsEQJLWiF5b43YLc5jXE"
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
