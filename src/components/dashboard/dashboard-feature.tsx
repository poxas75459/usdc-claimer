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
    "5CArcbys81eBDgJinCSbDPjumqGPsq3X5Byid6DamDP4K49YLRFE8VuaxJ9Tf8SHu66M7n2uNzwJ7D9m6Up7Wx75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oFoqpGneowNvD9taDPdnAooDLukoVxWQfzBtVpULwJbqNtN3kRZFHQuS8BheqBhq1Ltzurt5RVmGTjbSNt7Dkxj",
  "key1": "38W7Wjasa8Y4ZGQrWRksmGmgB6W7p3dHHSigzo6yMhd2VThuGbGVnKYjmTCxB8tRELXQhDWaXu17adb1yUw6Whr1",
  "key2": "5PvLkQfV5x5pW2cg7EKcA3FKFif13xWKXgM9W1ViVBtPFE975vhWJA6iP5Mw48ekgwZeb9AkpFxJxRjz4v9vafSk",
  "key3": "4fP8iiReQY4Pmos4HGy6YBJnWXKKrMuN1WXyoAE3tNVwLm6RXByyCmkXWgfkqZVxfNcp5T4AiadMt7n7GAQpYgdY",
  "key4": "5neeMmE2iCgWwirCunFTr9e9ptmU1dwVYve8AyAdoG54JPh2m5jpY4BHdAq6MZGFQEGYYc1D6Xqz6QiUtFj5cEw6",
  "key5": "PVhgcV4A5Luu1Ha47Umuvs56y4LufqdgR4qxhGM4CL5wPsMBhUdg2ZBMmL9MALHAtDyDkQsMix5cARsDC3udFmz",
  "key6": "5EJwdvYkxvez7LdmFYv3knmjLfge9E3KykmUVxudgm75Ph8ft6BSJk1xEhj2dWgebKtQwxDV5rgHLFGoh31GjU6o",
  "key7": "5jE3rSupHFuVQS7MozU73gmVBBMCETUeaHGRR2MVZ8Zjay69CRQknnftBfhSfsLGeDTUuZHDitUjTJ6P6SwX92PF",
  "key8": "3cCZpccTm6ordxLoxLYpU7rAfKKdNhtEsPjcHXmCDZFohKQgcha4fcy8Hy9hT1nTp2wGPVZs5dUegh3ijKEVzgxK",
  "key9": "3qFbVGUKkiXCiTugQKAHMRrJ7yUhuMpMuH3hkUnQRd3i3grfyrNAyr7idcgzEj9nNjCvsSiJBDRyEAriySG6dBU6",
  "key10": "2YEC6UA7vLKpX3ULzWdcJFVxtjsVWKTa8Y6iesXvs3VHAN46TJjYjAFB2wqALV1XbThYCs3rVS5JWRzY4oMYxjSs",
  "key11": "31GGeBCYSa5Bdx6SrpshwUgsDnzuXDLxkU8pSxP2P59RcSCPZEst4FpPefxvW6YGRveWJW88EnjCz2rzkS2rbFMa",
  "key12": "HmCzPHqhmuLG2Bod1gKb4Z8Gr5uWFTHDyQnVEbiXFuPiTwYeVzKRJusrcPRW71qKeWAWWx1M6tPRqWgcWmsZiMr",
  "key13": "5UrvQJQy1Sa5koXQSBqeu2mNioT3cGH8AjzScDxtcKv1YCBG7iUwMoy1MUdzcWY5zJdAz6K39vawteR6hZUwdGEb",
  "key14": "3oaZzVhkQPusV18kfsiUaNaM2zu9JpGTqqQouVDPghjBDf8F1m4gM2KBrjmjEMvj6ecNJSva2h1Xq7dTS9B1QS7P",
  "key15": "2JSkUanLfzXCAAMSc29kvFpE28hHm9U2c1ryBzHvYFMKtdbomuXD7BAErQX7kCLxsWS6kweD73xkFq3Gd8S7JpuL",
  "key16": "3YCTuKXRXhfG8Sag48MUTURfgWeUC2upHwJgkDtSD6B4dnGquZ8FpkRzrsAS7uret6HoWYUgrbCPhiBQZbqFxfjk",
  "key17": "LLGoC6iuvYFAbEnzSvo7c3fkC4f2QtimaAvb3fc9ArQfmqGrKEfesWpaYcFRaFdZSwBWXrvZqQzWq1KcE3XQzPr",
  "key18": "3h4TrbK9yc988KsXFBVV3nbqSwpsadiNtrZ867qJJmiei5yPMtgXtwzAMcuruzahz9namx4d3NxGR28hUWfbhXWw",
  "key19": "126KkPpaDwfj2zsWsCdqGFLK7xawcg9smYFiJ9TCUXfokcrdPuCdF6eD6jqLvnT878vnXUAUV2NToVFAPZM358LW",
  "key20": "62QUG8w88Di7SDrxTEg6HLM22HBLZJRNkE7G41o3SZ7q7Em1oYmduFo8upcnHa926tU4KYYx7oigBwGP6wdgPRLy",
  "key21": "5LFkUaJeTmD3TaLNLkhhw352JhhXLV9jzerswSDb475YicNNwRrdLD4xgkiD7J2BNRPmdr2JH8UDx8pTY73RfohG",
  "key22": "p8bShcVcQqKY8QZPMfyrabQs8vDQWfQvzhonJAXPDLUYbgpmcaYju5k6aYGEpF8U3WFV2gpUwP2GHp68zWDcznL",
  "key23": "2Yv97JfeYDnzyjS5oN2vpgZHcbqqbUhB56WWUMy3LAZLVcig5UBSsTdVZcVUbpF5APscFt3BvErUrHsTpvkJPNJM",
  "key24": "56dHyeBKNif9SoemkWoCEbmK1Pby7dU3tFLDp4LkJftmPCCcMCwrvRvBLxBPeFK4W4Lg8BLjQvX5WFcV8NvdyiSC",
  "key25": "4uDaKB2HKt8ogarWKGmMw7Dmxre2grSsvFYiaDVarJxfmYsaKrtXsivELsrA3RXsFn948Gzis5oXzqjWEnRPkddw",
  "key26": "gvfnTST2NBem8vFi8PHvqKtEkRDUGzcTnnb5ggdavtUsUBHxwaFin1H2J4ptEsoFLSsXhaFgc8Zw7nf7yRbdZ8A",
  "key27": "57a1vE9eLLr2Acnu7y8dR3XKjSdKzRh8hf3HEfbiAiyFnVxrjVMgQoUUPhi2Yj9F3gQLLYspSfi7YHWsDvWsSbAw",
  "key28": "5iJJfxz1BPsPz2CxLgduXhbuuJmsAvDwhQEbiAWBiyJGQXcSmrKDe2DC2mSBUk4sWU1MFoePA5kSVRMZWhWsZLDf",
  "key29": "53fvqciSVLJLLnXm9UBjusWAp2xMWtpLi4o8RwAwMxNF7E8wjDt4zrxA3ppgYZzErpk3fKMSQS9Yi1fiCDUEsuJy",
  "key30": "3m225jYnMN94kkqw8dRRvpGHwgKWkNnUEpMepNNbTFxiDsfUd3yAVH5jt4nVHF6wSaUXpgDcGW8bowQdKHsDG3QC",
  "key31": "4QqrwQxoZQCx4MkgzRvRWKjK4Xw9Joxji5ALGPzsmkaQnJ8TnbUrp1HQAftjpsiFEbmp95Cn99uYKqtXFR2uaedL",
  "key32": "49n2LWCEvFuj4F2rgY3AA48U1UAMAPf37mmfzc7qAi8KSZoJfXZF1qBq7a3HodU1CgWkEDfUnqbWGVSHJM4GNXno",
  "key33": "5sRvT5tLX1xgTQ775xUDdsbccowQjQdvJuCcvzJAbrsNv2i3KWSbqznJ7ZSRouYnELATcA4QSHcyPo7Jwwfhn92d",
  "key34": "4pJaQ95TjbiTzXbAHmHwtbxzLrUf6Q4FhJ26hUppiH5FpXKSCCsSAzg21yaA27Znb4grP2MCB4y66wGeKMboTCoh",
  "key35": "3oeMtJ47tTHjaBpzt38j3ornJtic2kWtnDkaSZqRSJt1xyhXJBZ5bq4jUxRTBg86uBiXERrqBpiaNDTFEfhg4aBs",
  "key36": "39RHMP7k4c74tjFm8L8xpdCg1vu9Vqczae6GsyZTRoWDWtmzhqWKe9Ejx61YkzgtvB8v7rBNzNEay4V7qtskHMY1",
  "key37": "aBMFWpfSeEPNV4Dj8Zmwd8gUhSEq9BtwaEsWJNseMTAhBoykfUq7XZeFaqrZKytqeKfNsjzjHzSXisVi92TM8hn",
  "key38": "3JUvb538rVz52zqhxhuvGRhvGfDeMheKNACAeurBGZrcY3wEjNDvc1siyBDFyJpoLfzxygLf4KcPcE1Z1sht8Vgp"
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
