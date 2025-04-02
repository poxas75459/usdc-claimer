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
    "4Lyvc5J6jKhP8PG5rvAZqfHX99Tv4AdNgEDg8gJf7j3tJ45JnE7XwmsVjwTEuoyT63BpjP6dwrpY6bzsGu6uNoZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TsnLVtEvwLHSFhZjJDqb3gMx5aBvLqz2v4QZdPqXZbfVUURUnunqTwPvifBGdZFV7EAPYyoWghoVGHVUH3BydGi",
  "key1": "5sMBMfWrMaw4Svx8wh7XAiRfZrBmQ8SwiZf7kMVj73wfKX93tDzihR6YqLxwTxzu3DE5PfBVu1tqMmAyamELhr7R",
  "key2": "hSne35awQQZEJhB4axfNsVMEq9MMcaPrLnTDpDG44f2Kd1dUUR7BomtgLNwW8mPenorADMgs3TLZhea4YwHuuA9",
  "key3": "GQWGN2VyJRKBJ4CDSXuZXEhmJe1H6JZePqVbBDmKUEVpBXTb7kxEWP3CSxJLX35jkAZQUoefF4naj2GKhgqoYfR",
  "key4": "vgzQ12vjKFvrvvum53wn7XDx1cyqMzJSPX8kMeFfcvnhxgVaovPdo33bB5s6ng2df6Hx5txJNpWp7o3aazaWAKq",
  "key5": "52f5ScNMGdYEP6GEPeVdph1rX3qzJg58EBR6xkQuqKPoXtAsnKKNnfKSYDjBX9CsewuvXi4U8vHyyKHU3evDFqr8",
  "key6": "2Y72gXEZS7Z2KSA1zgszNNvbB25TwpFdcvPSVmjERxvraFSw663Zve9k2qJr1KvW92xYrNTXXNMiMYuXrxsQ53V8",
  "key7": "5pPh2gmH5G74iQYUJ8YYPxJmV7YuDUHmam4KdVvpQdqkrJTtJrZcyD5VJ96ub1uLkZzdD9eBFeGyWJ9LWwRCKUDy",
  "key8": "4bkY7eKf5qXoKWHsmzhzFfu8cLVaaNVqfSLqoBkuGWFQG4mTch24dJrseCocX4Fe3DHjpozk6hueCr1Yjtp2p46o",
  "key9": "BdKWGc25zaEg3fW88UYiCRLmrwswBkV7eFTGmuwsVztQgdSSkVGKfNoyKJXeL3Eb8JAUK9pgMauL7DoeicRrNVu",
  "key10": "22N55GnZZzZVcK9tua5pLUV3M6hrAYmTrvTgcZK8gRmwbxWR5iiveE5ssB15CB7Ms7EXwLuedoDX7HUYDNNzsm7M",
  "key11": "3C16yMqAvTRjbU1Mjhwk9Siw5TXbVSGVwDoQCUtcFatXSmDLdARX4dL7CXi2oEbtixgq4sxphhyij1uM4DqhicrA",
  "key12": "AvuNtnanTdViK2p2gj7szJRxt6DFmTobqa8PeDQEbK13aDqGwGEYaLm8xpLFKkzf9Y9aX6QatBopc9S6ujv26qv",
  "key13": "5GBVWu36PbRQJem7LkDn5GjgttNRSYEHnmTSjSaPPW2YAq62Yy9u9Bj8r9XwyrteBtxLtbVnu2HyTz9H1sPJbBp3",
  "key14": "2xRZu9YZM1KCCdLcEU2b6mrjcbwf8izMkZCjiGL1qki2PXtqJmjJng5syEmXcewZfQgZhhP3weiyxE282yjdAbwV",
  "key15": "3PEqHrcsZsV63yRZc45YfoKSeAyMK8KKPoKsFqt8mjAfgkxx5ifDmbsMoytGia17MPF78scgRaiRM3THREGwAAwy",
  "key16": "323yYsThLtDLaSJLKYuSBJ2cqzdQodkC6VkHUrBUYJs4Gf5MMMMJy6e6UxVBpooRwHwy1LGMFudmBYByqAgErubi",
  "key17": "57LsvuWiowe6t766gfAgPfhvtnU5WcUA5bu6Nzao6Z9gNzByaDa4cGJd5vfTp2T3XmMFboLXGnXS6g6F9fggvHJw",
  "key18": "2KHVvstjFWrkwzcBn8pjL7uqM94Jfa2AMZcgPtAxB3dXH9x8oQqdunAEAw3RLVwmRgkMXXnwauJ2tt5D3TnPW3oe",
  "key19": "5H5Bop2xzdBwTPhYLo4KiSsLx5VTEMQwjFABuCkrDuwricPhxF16y1fSFebcVuL3M8F8V1tGn6RLcNJsjZ5aJZBF",
  "key20": "jgozLGhMGZku616RsarLchsjnK4AkTQzHFYtj3ckGNpzBtwJqU22g7emgRxqRhsfx8xMDaBkAT8stsFf8SQ5caV",
  "key21": "5fgDxmhdjXf8gEYdhBB7mJzMUk8KfkPhqgcswuxfBjEs8MuY9WtNqzPh3fKifKUF4v8jWWJjVu1Dxqcs9y34ipSH",
  "key22": "5YHWHtcdAAZcSNhtMDEa2BYvqFZbMpbTjJSvan86ARivQaHSKQ74Jm9JDmWUkL4BVe18iFJ8Ziv6jVVNrXQR5V3E",
  "key23": "4giaAyQvMEFBR6dM9xXDjRssCRkGcFg9qPnMbxrMVTDXMDmv116SfzzEh4t3yzD4coKzbK3YvCprA7Gsc7P9QxeP",
  "key24": "34vGknhyWsC9Qtn3TjA5SX2zmPr5ZBqvJwW7E73ecH3Wxcuf8LBCVt8qU3xizNXzQQ96uju1kQMbCwRzVUT7EsEf",
  "key25": "3ia7QqKgh2QHTVqT2PFemouYKd7Vg4dYUsPdbQKq2QC6amJPR3YiWE1jWgEvVfC7CJ8bvtbXfGvwxLQ9tWryB7oi",
  "key26": "5iqkLf4nC3iKX7wV8PfR185bPvbcjxcjUFkAxrsHVniyV62wMi4xkXjnTj7s9U2B4ySPigdKjkx9uonJX9zfAZCA",
  "key27": "5m2gE4UJsPq81FPJ8V33JduCbHhTbXBFEuPKPWsRxNJHzWaJdDGbyFZBhzP82j2HubnomWXzCw63GQn4Agq388W1",
  "key28": "3J4X5o9RmGyJ7BuxqNhWeWTGS1pkU1DJf9jvAsfwJcu2Ao4qhC9minHzBb5N9N9p1fGKLX4sizJrmYpJr5jVY6Zy",
  "key29": "2SaF5zrmop2LL82dCVUEaQY1VgC2TPoijjunReBGmPSR7mC94gxR1cbyNncBsmUWtDRW5N4rTQ1kv7wK1qgFs677",
  "key30": "42fvKh1PGPXwuhnXh683n1tz77Zz4R1us6EmDR1jH3jBtdt1q91GFHAsq5EkiRgezyzWqHSQjciDzM59KWj2i2CV",
  "key31": "51AGFM3qFEPVK8uQ3Rm1ysMfPnxw5fqbY2sckqiJTNgo7MnEpMRGPSpeXWpSnNNkC4KEUUgbRnws4Lw65LnScNny",
  "key32": "4K5pSqWTU52Zkf89cbESE9FrxF8XzLBHjuMFGVi4UAZCrQykRZnZQbDer89gU977knMBKDmBLxE2ydnKKucsrtfu"
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
