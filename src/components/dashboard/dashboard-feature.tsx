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
    "3ppMgygxxu8xMX8VZJmxriHnJLSrb1pur6SMa1MRPNCCRtpbmSUwgU3PTjjLhz9CQTmqNFeBK3RGoF6U25SAKu2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aSLi4acqBTLigM5RVppRm7zjCAqgpd5Gv8HkueKDrS1kENQQ17YRKKR3RPKD2waUjgpFpoogLbv3bm31R7wTjyq",
  "key1": "4YBN4qHqHNepMaPxg6xEkcEL8b4QL3XyXidH8wG56ZLHdjeP49TjLS742HkHyyJPkV34byaUfUUzneu1cedFwWGw",
  "key2": "3Aq1AjoAWzfd7PFDn3x1MbTAYPz25qNjQLP2WFgvrxt744pLuSBbdVMMu8cMbwwpjG5L9z2mvnrLh9D1rokSakC2",
  "key3": "4k8GqpjgsTYTnLASzhRoBgd1W1pkNj3X6537Shej1XHHStqP5Bh2da8cU3844xVmciVPzv6hgUVE33yG83Dpb1vV",
  "key4": "5BbfosGLsY3avz3v9WFF1pE6UQ45iudZhj7NHvDzkb6N2wjPeU3U8cJ4Tf1zbAy3bYybEESXNfe2KEqhKmphEhFy",
  "key5": "5ZHN5yfsd3VqMVnvJBfM5HJwsx2ng2dyJ8ZDvTLqUm28ba9qsEvtigFgrVwzNqvq1SBwWbx7uNCjosNayhDGHma",
  "key6": "5b6m9EqbjN9f3Kpn5ihKmRzuprMfwYrCs56bRvChq7y18vPPQSVdZEPv2phnNVcnH8YtWN65bUSVYtNQcj9QKZZW",
  "key7": "5hdM8N9dRMsXwhFAKtRhneMT3X39u7B8EeaWw8vYAiCSqyDwWSHGz1b5u65FSLVZ2aaWwzwNSZDqxSDRnwm5V5VG",
  "key8": "33pu59v5Ze1UHc84xXBTUp2jUKUQJs7VQg8u2nHNBabpHWcJTTEQPHPQYBQKCmPE81MAwkyPixb88RkVeCP3oxTn",
  "key9": "5TqR67p7McNT5Y2kpXu9jti5ytjfPutRng4QT7gJpqhMDUWpAJdJWGDQbq24HxCFPWAYdj68p8k4Ux3jXKWPPvd2",
  "key10": "572sGCnV4LcMLn4VfnKSj6xiyzPgMdJR9NvgHNEX5b3gN34brKwToERpNvyWHGeXHg5FWjEnriiB8XExCYpnWThq",
  "key11": "eTLpgF9VRKLxKyjqcW1in1s3NKPCCv5VP959v1nm1eo3w4LGcBHDUMhe8hikiHgyXtMh59Mwoanpu7m8WJ6H5Lv",
  "key12": "bpzPDZP28s2RVZCmYVa6JeXhdZWAABm534TYyEX3GMgp4oBWKXCSUUNY4JboQ2bXNU4AnSwaPjz8rVQyC3NzNRt",
  "key13": "P3vBsAVeNgQvxwKRWuNwZQ6vx1XjqL2244Tj3J68bskfm268XdoxTSuo5nL98tCoXAbHVomZZjYRuUqdyAWTfZz",
  "key14": "R62Ya5Yex7Hju5M4pEEVUXSeYPkYriarGz6gRUph4gU4PxxgmhvaWpVWp5yBz8Vn7pHTqBmdNPoe9gWhGVSbQMH",
  "key15": "LyLuy7wL3WM9ZMxnSQeviTTpYd4nyfGvjko5MwWjxxEWasWXgiY9w9ZUb2A6KzzVvkiGqrKMRUaJdvHqojycDhv",
  "key16": "4RB3tASRdoWmRrtiCdtD4Zj7WPwZjdMqbycv8UTJYzjSdPoT7BcecJ3AMorCb6nLuUHEC7x2fK8Zf3WjxUDzAUvH",
  "key17": "4ACTChdP85VjrW91MTcZCiNx68wob8fSZ2NCepy3RK5ohudeiZA77qQE4Pf9cQJCwuJGWnGthcVmAp6fAgDR5qhf",
  "key18": "2YkdxVBEt6bfZkj9qxwNJpQ4TiNyw5aZaUPwQnrMYQRBfyd7NUrv8MmMkzaY45GaYbCG8cX7WBdHH4aXLLsLX7QB",
  "key19": "3Kj3aVkeNwQv2wKeTvQ2it978KRvWWKSDAwegK1fukqWob7KxC2Dc79xYqHcu2ya1wmyj5Cc5PAonP3GmyyLyG68",
  "key20": "4Er57SSu8FmAt5tcZnjdPqSpJS7rs4bMHe7FK92Dc3n5cMbBLr5KKakhPznPjc3K6E6pzHHRsJ6taU9s9sZsWW6r",
  "key21": "4a5NW6N7WuiBApi4zKxXfVqKUWEZujYmfsPe4GuRwzwhs6vgkGTSBTSAjEQ2WLzv8zNVm785bD7bJaEjdcVeWj4m",
  "key22": "5aQgfSjRBQbR3xcJX8VF3gqNAHgqiM7AuRK8Tod5X8QM1tnQ8kM8zXLAidT5AJc5w2k7qqwU16nEnmZFUTowR7TX",
  "key23": "3KY98D7b6EoEseG2bzRaRnE5P8W2aFwnqCdKv2P7S2w8HmSqeqn2L6QH2uFyBKVrtHzvvWmJ8N6bEpGrbPnWQuH7",
  "key24": "2afNCnyuHtZmTszMVRYMQQDSHpHUygRNjtMyv7vtP1quv6WtLzBLjXqwyVais9ABdg2ez4m9WTrGmG3q4W8Frk93",
  "key25": "N4ErS55vBnpwTFpzojcDfbubgzYsdL9wj3xGi2j3h7C9KBbkvf294DprG9CyJeancnbhNfKp3ifVHxsvFxY9cec",
  "key26": "52BmtXMQciNv6MFM4VptruWJKUJg2YDo3km65DedgvQuXKxd8FeyEbcu5jBUvwPZAdpjAAgU6SzLaaWAijWHMiLA",
  "key27": "2rnvBNipT9NSWRvYDdwVbrXTnTrtWQZHhHLNAYVoGYAqk694PDq3y2t4xEXvERD12DM32jbENmCHSdgTgQuoPq37",
  "key28": "33rGDq2PvwM7YbBUJKRtn5kQVG1GHvBBtqBQuWqj9veytpFywuvUyNXu35ByP2JRc56N7NzGB8vsJqzbAcftbusn",
  "key29": "2ZCnnPHxcdiw1UoaSeQxkJg6QeA3aUWq7r8kojMQ8TkUNQbQtRxNcVxX98efeB3Fqr92BxxJSKq3S59xRCEtLw2G",
  "key30": "2tmcFqWCQF4gLWrbiLoJD2Rp258gVLh6r9Xj8r7cVA51FrvLseaVtMiE4H7Qn7Vg6cjVy2ExsynJJ4EqngBDkTKQ",
  "key31": "5rsECHdetv4C6g8fcW8raDtjAy8u374N3js9yiaRhcT94VDSYtuF2nW4GEaLQ18E8HLAe8gdVc5UE6SgvxyPStdx"
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
