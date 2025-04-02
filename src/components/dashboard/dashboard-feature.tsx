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
    "ALxeUap3yT86ybyG482DFreZeWb8ZYAEYhhgpWJkudH5dSN95hFHiyU722VWM3cYGmHSYbSXi5K7yvaU9giTuny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bM93ekq6oDiLaQGVUAt4sZ4WQpq2VFEy91oKhzG8rVj76aGjByDcDLGVvRsp1X2dcu1bHdzJMFEQaqtqRt6AQZ9",
  "key1": "24DqRLKweYDwHRJXeJBFJAsqUCQZHdAS4zvqLdSyEzMmtseZnsYpigATizbUAb4VMkEKhadJwfuabGRHgkKcGeYf",
  "key2": "51cYVV6BgYVovBohCkw1BnDhFkwe9ZLSxkrAjJup1F5PcrJMbdB79akAg4qDaxi9RzFxYN6S8ViK7SCRrvfkDe7K",
  "key3": "5psYMfPm6tjV5YXi4u186fBS2KH8KKGqdggKyA4CSgP6FmnhHUFcCxe93x1dKjWwGebJzixBrzAstHMCfsVwreVt",
  "key4": "5WgkHb852ETiaZhHxariqCYjxhdNzYFV8hPvyK2UysEwg2LAbGB4ajCXojsa5bhnSXDaoZfBiqfuEWgWFgaasu1n",
  "key5": "4sSVj4yXzVbkfGMti3KNB15rzstBFoGZXGgpsToxbr24XMk9GERCvNfg1nrvapQ9EBBLbDNNTg9rBfCCQecHJqdd",
  "key6": "5x6zdgufqkkH8vvQWzfCpJmDBvwxXk3brXu62ExvK3P5do54otKSa28MWeNYvfsNbpd498oirtD3jmsweN9UkeNp",
  "key7": "4LLygGzFYSNsEzaHuQhinVRyHiPSt6dQ9vDnQ4YoLDC7Z4ZiZsykYEYxUjzM1FAy2pBbhgpPhdGdDL2k3FAcYfLH",
  "key8": "3CCvx3DrBp1mPd8omiU1NzkRJkamoQ39dE8Ry4NAhBfLivvejD1YmQ5AbzWb5ezdErVdqsjsTkMxJLyQSUNWKFSA",
  "key9": "3HnpAkj92qHG4B8fC2rJC1wvW72ECy97Bx6HAAjk475qnaemVpyB4NF23tTiHoRLdueopLNB2gavspi6td2QmABN",
  "key10": "429Gx7EG2Wq6DU5UiN1uRcvfF8RJQLtHvMa1DGXAbojy2fwcfkfzN9KMFmvHdzmkNJCD6ea2wBHZ71ZWjG1wg2SX",
  "key11": "YXfk68MSLQ9GHenCUgJyF8kzRdAsaF3ZZSgbmbSEh7f7oWG1NKwBmgMpyhHJzvBcZtiHzFxmKYwftxTnREAfmd1",
  "key12": "4vqhknojgr8jrzMKRyCnjhEkLBpbRiPieAH1ozxL7igepPKsBfejMV2eijZHopwz2g1UR8ADSw62KKQ1Pd7w6n7E",
  "key13": "2CMr4W1vHm3TxahRewVMND3VxtD68LZJAHeXy4yQ3DYxPj5otndRZqj2NVosMzgyZ2bku9SV4xx4zAjr7jHc7cnq",
  "key14": "54pFZVS2V7FYF2rRnUeLp13yBAznYKzHCFobZqnqVnj5uaYCqFaaYmRB3Gdf4HKUV1XePLNnPHVMMteCQc4jaPGz",
  "key15": "3ZSRi6hB1199K7LZgbHwwm2wftKS727j2DfHBMnyfmdEzmukBZ99tjYFvdsWtYpwuPqWRBuwmS8F73k1UCKvZp7p",
  "key16": "MuQg7CqqzQYSipCVKDEBeqehDqooQniGPVEdUUogGwDQdCdiyrNKyLiM7mWTms64JLwqWPxc1LB5cYrGE8bWwF7",
  "key17": "3kpZhGMNGCKNsuWiT1QnR1UfM9YxZiiUTPfdx2xCEmVdwNPdYbBooAqGNqQ949AD7VqG1wdYab8B3BUKGshWMzQH",
  "key18": "5a3dPA6BaBX56DhiwYmq63TawRk2GPTusrH1Uy4ZAgTTCHsFMcmrwiUuFY3KMPtGCoKZCac9UUqtA6sDdrzzMVRN",
  "key19": "3xNDUSkrB6SMXrbvfbSwG19TnpA6vvETPpBvTFV4u8cx9XcDKpWunSwG9cmbGXNubK8mg1vhLTtnfMbjSPHzFvyy",
  "key20": "3yFfZia29et6ZoTPFZCuiyqYHeqDJQrMDMUNn6UBX6QMgoRBaR5GbW3Z5ztptdr1kEc2aSPkxLFW5VJnDGyJEdBm",
  "key21": "5FmRgjFQK7yPg5VfMQC4j9UWJafQo1U6Fw67nybUmoEoSJjYd2kczS8rqqi8Qo94CLnnrChaMHLsCr3hRY8SUVwr",
  "key22": "eaSoD2Ah9HgYMBgPjDjp6Kx8mt61fpz5sT3nqVVNU7W9rUHNi6rnegZXMUYz8TmTVuZozsjhV41mCCVWYPX2J6T",
  "key23": "3rKZkbNxMsPnQd8MudEMV1ZR9L7sFDHa7fuzSYZonErQGCke8QV5yeZj2Aw9UQdAmYsAoRdHNfqRjY3jgCfR9dGv",
  "key24": "34inFTCAU9BtsX2LcSo14kJsXhUzyY6wuT5422Kp8Rz19bRoQdPuScHVnYXxqktnaABJVRbTTdUV99HnXHf8H9H4",
  "key25": "4v2dpXUgFK6FUy24HsuriNuJsxxJzzmtdFmf4N3nn6jL6smu3Y3ts7mceh23hjNnei8aWQxcGh4EqBhweRUNwopL",
  "key26": "P7HPW2TZNjCSRjxThaady6tV6dqBdr2xUPNCFLSZdmcc7Rtu5MqMSQh9G3gomcvjUYZDzhY212cw9rHE3iebAMJ",
  "key27": "46qJpVPAjcqTVss7vHB7DjvUE5BNYqAYTjrKXaivmYEL5LsTSrQLekHi5s3x2iEK5Cvx5JWTULTqDHXfxuhPbP2H",
  "key28": "2d53XGhEw36VH86SqgPFqucRWHTMTvugcuN3GafikvjVCFvUqTmdKATkCumyqmaABEK1cVbYzh9iUTmT9Y7jdiYY",
  "key29": "2CueQSk1a7yRkCavyM36nzvTmHJ16sPUyJpYWXpWVAsZJuxKhEan4LawycDgfF8PS5dz2JGjPy1nR4csYCLVME2V",
  "key30": "2W1a6gn5h4sL3TyF6PW56DPoQ1eWVZBvmhRjDM3Msqr4wX2FChrmVSed91Kq9sQ53GiFrff9PZrMq7G3oEWk9Hig",
  "key31": "g8JWVw31X3DRXpLTQyqJTYbSyiVcnx3FYz6fjLP2pPuNAEZwUGg1n9Q2mdqBkfGPvBXu6yPRFxdBbkAABGMkL7H",
  "key32": "qHRHbMJbhsxSewqtMsvzdcaNrmU8o4gzoZrWxYipPK9cxKVZvLZi2bo5kYGfJjGqeSYqvSmePFWhXJeBNCYAnvV"
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
