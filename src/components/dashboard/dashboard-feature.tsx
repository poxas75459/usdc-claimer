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
    "5Bwn256UsiJGbJj9roFzBz11wrsZpFupkCB2N8b5hGHfmZGnWMwFDjCHVu9PivAHy6CgLnagw4DwtD7JcSdRjB5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jmL5uGF9qWkBWppQHhge5wXNmhXVCc84C9wZczXKaF5PitRPNeBvNGUK8Ue2nbxkS8BjdCuFrQrhDFE9Du5ybAa",
  "key1": "5NvxX3jhUmzdZmEz1ffeTcwoEjkhZNspDojeQKJYa1Crhgp9ztXMGrupcf83Cy9scG1jVxRttE4p6s2XUh7UQwmk",
  "key2": "DTmcKRJDdv6YYFFvQoEuRvgVFY3N8j154wJuvQAAgWfjmjReiaMT2suZ2FgFSbzeGvcTwH3voP6dQBRUGyTCJUH",
  "key3": "2VCTGVeqKF3s8i9z3WCoWqiLaXezqkhGbfwzwr4FMTV9ep88ANPKe4YXjrEPnUpArispqpr4udTZU5DDweby52Kf",
  "key4": "xzcWZX7X9uGruooGpxc8xvFqnjxY98kLbP2kDeq7x3KZRPDeswnBFWQJBQ5MeWptjWvRREfETJbppso3GZPmpju",
  "key5": "3Jb8t94QcBuRNtfcKQ97sapy1DGLtuvuEqhix2Km2epWtAVV5Vik22cQJknbyGhmUrxivNaKeBbBD42WrhN2MRZb",
  "key6": "W7MA956rybFLBGCna5ppqRurJJygGCyvy3cDZb6xE2yCdJdSdrWiwzYGVbTbBBG55WEN9ou39hGKrkPLgbV9fhP",
  "key7": "4J8RzK6wR2c3YcG4daFU1hyj7fJ26WYpPRvzfy1XJhrc8GDQqVC5X5syJzLCAHrKFKZn9jVGRBAt1TRvLknaJweQ",
  "key8": "5CpSrfAigg3yNugNLjXXNEJyy55vdCifkZ8chFgf2r566v1BWgfxgugJAJv1cbAVPJgf7KFQma39bTX1FRaDaW7A",
  "key9": "2DXGw7HrtsS7snJg8KZwhuA71ZHag8KjsKCnyCdkRyySBJ8NVq1GLTr6dUyhu47nhPBEFW6JL1o6cfxnXA4WocHL",
  "key10": "CTqpYgZFUMAXpw35RKVAwwep5vJrb8PJ8MYzZZ5fAcvGUjmvzBSBqonECNELNu9tmfGSiFsCVbJU8x4LFnu2F7u",
  "key11": "5hrrRp5CBD8Hf6U9SbSFDXaapGz1NKvmYXaDRqmjVRPHxrxY1M5zc61J4BwfvK5X2XqBccn2P6N3t57X64gnuSv5",
  "key12": "epECasKyb1EnLYkrYM1KKxkeJvTsQNg8SXt1kpjVxZ6nzGaEPzbamwYEHP3zaJC7CLFGELQKqNQz4kFRMMod7Mu",
  "key13": "2mXzo6dVbuwL5pMj8FPBv9ytgso3esEbzsHK1qghViyxSQxTbDDT3nVY8z4oQQYYiAyu9YUSU8N7ZSJcKNDS91oX",
  "key14": "4tLfaNPFwVWF3jtE8aAEFRDKyEo2cCUKM4TDx1bWzdCrDeFyXK7Xk6e2bjkvANpxguN2sXvqBaNuvLgZ5f5hgTfy",
  "key15": "7XJtZw79UHTVkZjuodz7P94H1idqcnaUptNPAABriUHz9VWEZYGzy5eAL9phZPA8kK2gGibi2VwhGF7DKZ2y9q7",
  "key16": "4R79iUyULJHYZ3kbKCPfubNcByqvrTYZjbb3N8iDcH58P3YwAZAVuE5VP4Y9oJVNa8DS2Qz2GEm5vssViqBpdoGa",
  "key17": "3nuXRMHwB3FuYfFXiYqKE1ao6qYpuMVv1dd61Qi6XwEjs5LZxNBMZHm7Zd3kcKHqutsZYBbwjvYyBo4yfKGJJcky",
  "key18": "4rpceEoUU5XbgnRSZp2B6xFcGTdVa3kyDRNA7z584gctkWoFBGh8U5zVLCBrjpM4zu1hU7DKwVMfUssBwS7HyaxB",
  "key19": "4jj94j1ifjNpPrjwn2NdkpybFuDCE6b8drWrTuY1EoBamm3ff8k9pDFXuS77JdcimPBMcpQf6QbgqLxDPjfMr2hx",
  "key20": "NeCYaHjTKpR2WJ5zbpYXK7jUFxdeeJ9WiMkrcvBz8k2V2DW593Am3SYgq3AV6ALA9abTGurreZdzvCo8pFcuPYd",
  "key21": "s8AvNxxaGHaJHcwFFdmyg2kgEWcx7X9TJoM47KtDS4gPVRkBbbXn2u6vBw5SL6wxnQXPZnMtVTryAkTSwi3mVJY",
  "key22": "35VJgRHRvn9GrJivtKTCXCcASmFVxWF1NAdS4tB95TFMZrwHps18Xahapvh6DcGEGHiH1Yg2AqBJyA4SHWRXKqky",
  "key23": "P6Qz4g6T327gL9ndMLgkBMut7wUjSk1fQKNuQ2cva8qLcQG1NnuynNG2H7EVU2FL4QDrGceKGb4jD2qbSGTDt4t",
  "key24": "55TwBHci5JhxrbRExDb4RerqzXJLUwp3DGGsWoKcocMyTuZGKSijABSKjuiDXnF6sxGZ7UGvq7rkW4nxLh2daCFm",
  "key25": "3zUkoUHw7ZnsYrU4G9UnHTM67sUtgdxnSPwKiEQAVsdRnKP4c3y9drcBLQoiwY1xRc4dZWcaShAD2QrdBCAnE457",
  "key26": "3x2a8F1EXhJ9UpqG8xLFx2fkTaMww9bBU5xhzC9qD3DGmBsog5T8dzGaeCR5ewMtwNaNoJY9Es3AfPnL6Yv1v8a",
  "key27": "5FRJ7VgWtX95zBFNJF2iMRzYgfaq9S98NZqqutpXQJseHFfcVjWwKb8LfcBBkMkygu1HffpKf4FDMv6vCAAYihLN",
  "key28": "3u5F3nDQbfMDWPYKd42fhYAuSVmMGRR23Psan6viJtBbv1RDDyLRTSfaa212VqbSNQQchLH3QMY5tTwYu3aBXjTT",
  "key29": "4xkPAqH3UNocqfEQcYoKKwgSuvKLEfDy9mWfXix9ide5rAkWcWiigx4xGKzevhM1oiKzTrvxfSt5EA7YnUzWKi3j",
  "key30": "3CVcML4noLbuEos5oMH4gL4tagui915KjJirY6SKnguRhHrSyGjPxK3oMNR3dZ1KYyM27XY8ZuS264ep5f3WvRH5",
  "key31": "4wSByneA3ziFHHJNYznAnSesbtrMLVMEaqQEuxcUeucJxKLaZohfiMGgZVTRQJTJ3qvmriPJqtQjJfqoRxfNwwYb",
  "key32": "2giXEsm516bPHx5pHbmQpsuPnBVK2dWjnn67fUhxqsDaoFJkZKAssGbz9k7E1cEDMKcJbtXGJvFCfuRawq2JssZL",
  "key33": "3b3pqhzvpzJ7DBw7zXzNM882Qvg5qDPkdcSRZJdqcBa6Tjx89gtFha77WejYWbrZUdctUBtK3k2K1dMnvLWP5pwn"
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
