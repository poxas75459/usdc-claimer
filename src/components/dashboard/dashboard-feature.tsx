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
    "ax3qNvjXjGrQifuzhpUaWupQAasVYHRLWZsbPZXRMgxJP24d1ZidiytbbZu6tjuNiJZCQDCcrg3VjVZCVTUM1YZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cG7AfJXKTaq6U8JqaanDPBmJ8QNhJRJcoaBDNx4juYQh5zqougHSfV2uhZGMibAk9ipDHTEewVDBDgzs2uezWqu",
  "key1": "53Zv1kXejTCnfrf8dtxmFvCu68pBjtSLdZ1QjVuPpzgnvxHyZ1RGzsjXeYyjt9e2VFoLxyoxwvRZUe9EX21c6ZdN",
  "key2": "5SLeLcQBFwZ5uCX96Uq1DiJ5PQNWU1Ti7hk3wpAW7ykB3AbTa3wuhFv6PAtgtmyWmdC6fWqTDX3NdQDLQgMTnNRV",
  "key3": "6zGfwPw24BHjLgWZHnq1R3jF8zwKWE8esDiMxTcKAY3ymqhxFNHX6GanggqVxSb1EMhr4mJyC4D5eSe8zfzK9i9",
  "key4": "2iPkTan1VD5ocdEcoLyxwEKYJi5ma39Z7T4v84vthWmgEtcAogQvkcAKC5ADi4btGSWLYAwRsRwMFxJ8y78VJiof",
  "key5": "5fozjdjVUfjpPCn3j6EgKqaZATPckAMLzFd7cQd8sXYsiLjNGsAxnMZAdq6UHehsk86k85ogJWaNQsr4MXGNZ7qF",
  "key6": "2ZDJAQncff4G6wpPx3UUZquB5k6pHpuCmWv4U1B7opgGKvy4pKcWDg64sLHaaS28zneJnnbX5jjT6PiC7td7pT3Z",
  "key7": "2qHod7X5ZjzmKRwZtncoCKZ1yiJM7XbQ4iwe8fg9hsh1MAkGMXpEgrxJ6EtZpFtErpJRMNRmhJKYDA9vAs4L3pTp",
  "key8": "eSJ37ByabMFnnXeikGYYLonDn9F3sos3UQ3hbmvrVM7A2uYbVE2s531BKf8shCLjtG69FtvmYa3Vk3ZeEJsV6MK",
  "key9": "2gHYkbRnm8pNRfkrvAMDX9Cx2Gnwc6zsq1ycfKm7Vac18jB5SdA9WYz5kCSxf4726jqNFnxg7g8JQeKT38XNK3QX",
  "key10": "2ziqRYYGbWvZL9heUcrmvx3yE3KsPGdLXnV8Ty7K2ceoSkGZuXNkTYi1kVC4oaLCKqonqZdhCAZ88Lv6sTm7oK2K",
  "key11": "4bzxLpA55ihh4hdSfG3GXxCWDn9qP8pbvUDxQqA5ehEGPqt23WULzpvGbwPQsLXooXCnzqff4Vd1zhdyM4H1Nfuj",
  "key12": "4CLApyXKbmNQ2eVUXLErxpvGaMxi5ci5ByVtAMWfdab96XZv4NFhe1hugt3i9D6TfSTAYK6jvoayAm5y2DPxGd1k",
  "key13": "2dsm9qRQzUxWB9pe6FYg9zJJiXAoNnTxtamDQHbUMAyJsbbzPMZSbUKVxnpSVpMKELArxxAAh1diZJeA6Vrgrbza",
  "key14": "2KsUJqY9BRCqGid2o3dMu5sq3Wfukn3JdxvNcjSsrt31eEfBkAm84exEMy4uMVdi63TEnLcMR8Ax9xneE4YYJYrt",
  "key15": "3VcMJm96GiXTVQVrTY9P4BbUyfW9bu5Gp2SCKkCs1fkr6YdnBfSwE65sRg1M8nobizXcrZKPGZtgFx3ZSErnmpd8",
  "key16": "CCQE79Zg6LGtvGa96ETsssNN1j17WKUQqhzoxdtU6FKAwMt47tpbvgn7FVcQpFBoe2g3ZtzyQC2ARiu5jvo9Sdu",
  "key17": "3EqkYVirAixeXGDsmKrPiJQDaboeK6KZcxVTVFL1a5f2X6c26ruaNeT3i9is94v8M3rksp1e1v1zgonoquVCXBJ8",
  "key18": "3afqpMv3CsBMb53fMtaGA8W6mfi8MeT5nLvSdEyBjnuEPhuFNWaZRRpXa88oPQ4UGq5vpn6NN78zgHVnHiqUMcj5",
  "key19": "2BxUbnQz161tmG8zVo3JrDeJ5hKbFCmqUPbsLcCbrvcpJfNeFmTWRGtxm5hez4ueqvWbA1KrCKnFMqkM7A5sxcTe",
  "key20": "RptH6cksZ7RpX9E9TRExAcconXdUtbbzJQxGN9ycakkLbvC1yWRMYdU86LcfBH7JniJSdSoj93Lff5yiBfPdoMr",
  "key21": "2nsfZntEbZztaYv8FHD5ZZWrAVWSFNTkXg7Qgn3Eww1P6wZ9ikcRydFi8j2pZFM3Px769PDBvTwmyq3kF6qNMgsX",
  "key22": "Tg9fmpXmKnzYuAnTnuqzRVogZT3QKU9knQb3NUda94NyHm7QC31a7LvpdZWiAabYZV3Ba4HYBXPrdVtMf4FQ783",
  "key23": "3NaRpfPeHttT6WcCqx9Ru2tiEMV7DrNcLWpN2CZ1rDPXkMkc3ueRCG5iGALbN4g49kEbtVfRqvNxvhU89CAczMxE",
  "key24": "4f6XUNtthgm8aRu99aXRZGAR6ZfmoaNXc8GKKDL6uK2aj5Y59QCkCfBDW8opCw4xjmHcNf4VzkUPizdR7E75HfLy",
  "key25": "4hoor65kaoXy2TjmNVK6i1gMz7kiQRKDafmyg6RiKNMR7qALfDrmqnmZVJQHdBEmHVCLXuo4xeCGU56VgT6VKnU2",
  "key26": "67dBL9Hkr5fjT7cgZxy6oJ3vX5GB8RuBd8iaExAFVBttafawnAWSm22U46DxCtzjsAWP3jgEx5suBthruaf5fkWC",
  "key27": "5VZSZdRXgUX64Tg2PJKDRhtkEfMAgoXbbNaV4XYAmGXcWe5gc6KdSegQksYaRNBBqM6UZsuBSLK8fmCysXPrmsbT",
  "key28": "3iX1FRNSS4gWYTty17LyqDzMVqpxbDrfJtW5juF4RpLhVH1JFaJuJZPZZizvCwJ8fpyrwW52Eh3iWJKiuVuBJgtz",
  "key29": "4xtahGYEDWygMkHP1L6dfknXXCGMEaifV5PCTsnua4xnAk3mQQaVPpRb4GZe6Yxh7hvruvWVtmkukybshthLXiqw",
  "key30": "4zZFvrUawoDU63swEhHHB55SZSktmb3mYEAQg9tgSLHTxa5re8U9A3W5bkeZFHw69SddpfFAX4LPqRCVtJwZDCb1",
  "key31": "4tKWvGYHY6f71EtGpqxQ3Hwj6GRbLhgRBbxWUEqQN4he4RjU9FN8ay5rmj5v8wV69fEtyes6GZRn9Bf6b3A7QTyk"
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
