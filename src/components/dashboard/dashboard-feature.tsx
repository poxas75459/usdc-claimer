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
    "4NNZSVj4kHXmetk8G7THuLrGPwwVWeszLx6EjYi29TQ77J2BVgkkPZncRPeHkeemTAiYuRSdu4ZdFw5PrbQ2R9ZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MVdy6MUykfZCf3NHCP2FUW9xxn49avJijyrFQioobzYNoXam1widZNFSs8c4hGnPeQFHekiEJsgf8oPh1SzU5xz",
  "key1": "Y3LLJhEP79ByHsXPEwmJT4GvXgM14eZDdbKkmUM8Ba59Wtvq4uKkDwL1uHk6j96ovZZMXs96xShwHwgRa2YQMmq",
  "key2": "65JjXB35jnCmkemgstVZCyX564JdXJnAtcoNcjLMweptJZs53FyZNYLF6Hqf4HNxjKX7s2bZe2asLizEJ1cuTStm",
  "key3": "ooe3SgWCX5jvs7hCePdsRGY3b8gpYoDr5CdMnhqjafiyuv2o1tNRTC5hccEwnM4dJnmXar6dsPFE4NEPRDkCTsk",
  "key4": "4Fx7BZVMfoH9piQsTqriL7pSCbLC9z19fu2P4861pxv15LeGMsnNvoE7KGvDPeKxn3bze6vfRT9G77uWKXiCnxjq",
  "key5": "tQkt6cEN36MW9emKrjB6TcbrEsNhmtUZX4LeQgqsMbhoCHhVFGtDS67DrTcyeuh7uu3dW5H3pRn3nwedG8GbMT2",
  "key6": "54pAQdkDG14ZeE4nMi2vcKsD1qZwrWVkdraVHbvrg81NbXm3aTxb2QSo4qna62YAHssM3YN5JU38wdCMu6RbCahH",
  "key7": "ZmSVLJj8dBWEw646ygY1zqt4mDiFEPDUi8ppCsvxQVEjiCpiDvW5LUnJAqorbk3ZJpDeEz5MWciq2ZY13Ds3a88",
  "key8": "2mmFky323VsLJKT9knMTqxgUGX4ByGs6RAnYFErmYiXuXdh3pLwTVgTa6epdKKAUvKgNcWijs6TsnP8KjrahTWVs",
  "key9": "5fpjFc9UernGZ1A2VcGNrGFaXMyZQTRH8gEwStWciEppMSAXqYzqCMqsu9mEWrYALSNqihVmbwRuzYoAS65Bcf1h",
  "key10": "5kkCbSz73ixUerfoUw54zNCutZHB1Jmi31Y5cSMRzb5XDxTGE8nyHb9EyocfXGAZhj9AHHtviGZWRwZ3v32E1ZXp",
  "key11": "3Rq2qpcZeaFwUaL6joYjhPvADpzoNAVXT8xG6y6WX9YrzEUm3Jh6CNRhad1rgYXHqE7SGTR1RvG4TiaJki4Jajsj",
  "key12": "3bYCNG9dD6Y75THk2L4vDM53tZN9fdcpZfdjAkLAh7eJrQHe3EnWkgcemAquarGqs47Tppia6UYLYdrG34F2kBqK",
  "key13": "35DhF8TkDHZUrwWuDcwXjGMWsczPE6GPsfbj6P4xmAXfnCrQsHDitXzL9RU65inEAMAXnaEGzJ6tCKc72pDRqytg",
  "key14": "39ww6XdtFL8Ep5jTqz4iKQPwyGC3aDz7SByyyTisVnGWrRBS7K2T8Q6AC3fnb6fU8AZYmjC8DfAMffpttLwYvEMF",
  "key15": "3Suanz2jdFZTmKDUay4oEKiCsb8kjaVdytWBQsyVZLYfDcLfCdiAZmWvkH6L6UhSEqdEEt6tYotGL1rcPDHzteTY",
  "key16": "2sdBdNDasfKbssLLFaBDJFSm8y2vvV8rJAsHn44EN78zf47b7LDCzcqUcCMt4pQS1XMDpbNqpar2EKQ7fi1rS1VG",
  "key17": "5iVYDzJ9QRWUuUWGggrPVcmCVDqzujo1JanYkqjuStAfUPpFGajEYF1WhhZ4q93UtPGxAdNx1Bv9b4fvCEFwDGxH",
  "key18": "TJwwSC9X2Y4N4oAa55VCWU2rVmehRyxuH6zq5RA8ij79prXRbZbbubU5NG35WXXa8ESaV4uAGSEb4ddh97ZX5Rn",
  "key19": "65aimix68goR8zoKPQoGrDocnZ4EHDAzGHi3MCPyGwHz8z3RgVMBD6i31nw1s9zXW1c1ZDeypJXBiYA6tZrs2zJo",
  "key20": "41K4tiJ1uF4Zv4CPYLJ3Sqw4XYLnMudZCyUUBXqDjy7avwSfkXM4eippNFVB64zNGSvTzg938s233rrVLCxFqih8",
  "key21": "5iZJd6ND1LyFzAnByJjob5JU5Y73M8bpU8b4RqmQuZRMeGLK4nzV1CvRXtHnSxXFTd4ctd85589j4knUY1bpWg1u",
  "key22": "4JeqD3yppem5HZjDT14fikKRqdQdH2wuZri3BPSHrk2jq3oxgKxTArke1hJGp7sbszvPMmq3BBVpp4zCHYnnk8Ct",
  "key23": "4zKUX82TcgiVKm47y3Fe48wEN4Fs4hemicE3gfMSXr3jrGsr4unkucNLxnskWxep5wZAKKet5LV6JQSNMtCCLRyZ",
  "key24": "26Fb48eRQEnAmacvT7sgsFdwxHsiQsfMRpXR9QmtxgWm2pz21cFVxNkp4stqCVtJfU5Ak1QrLvz2w5Y61wefS9Ws",
  "key25": "QZqGevh3jzQVDmivh2dYCEFK5cbmPdmS59KoR5Pje1fSZTxmwTz7fGCLpqecSHELdDszgi6J4aCHoCWMaNBLTnp",
  "key26": "W8ejDK6GXKRtX5ofmXXrXJwhy1MqEpk91T8Sgs1yCaxd7TskuUDwfcZcFTS67kP6bf34hqooeH8zPQen6WcbC85",
  "key27": "22dYAPrw4BfEfDa5f4QmovYSeExLTCapp1stVoxh5rybuz29Z9AfcCZf6pFTkg663BTEJW5tWeodAejuZgRbBjZy",
  "key28": "3BX4zmTH9u3YYkGTf6Cq4Dvu9mxhQYnKUyLyBH9hXtg9G88Jjj7rr32PovicfxuEvUYn3HSSsW657o8n4pL13kAa",
  "key29": "2JU6Q8Wdtt38px2RcMYoc1sxFfcZPBbrH5DyoJc7LoSDJw3iJbAuaeKYHaHrZ13iMZ8gRHfQ2aVhRHjJyDkg5GL6",
  "key30": "2wPdFJ2C1BxRe1ViWJu5Q5AEjrQZ7ysfigxSQgzdQQAfSw1oyvtWe6qXtSgt7Wfyah8icunuz3aoqHD2iTHRefsv",
  "key31": "3XgJwT6mj3qCFkDcHdnzpxyStF2NkFrUyVrMtd9WgBudW2FP4P25Tuh5vyNsU5v8HvkCaZwBtzkh1dSGFaWmdTYL",
  "key32": "3jLTSh9V4E8EnVFtoHkCHy8A2gxyLHzTN1QkbHv4td3vhXe2fESoAAj4kSshoR8SxdXBB4Kbh7xhZJRi4KzcMdgu"
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
