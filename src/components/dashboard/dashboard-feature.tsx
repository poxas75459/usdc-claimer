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
    "3dvmwhkMkEaEVedgqMm5vMLELgKMjka4tMm8yjii613BT2pfBUjfss2rJYA2TFmQZ7tRL8pD1cmpAGFLySoe2vLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UMFkFipZhDRmQyvCXHL5yKB7UWPnstpdGNUM5d6sDdy5mZaEskhNajetSZ1kqN4yTnJTcQ2jZQXXyExrMyjGmmQ",
  "key1": "4ib3CaMtYhbEg9ky9NbdeshjA2JhWhJEQM89F3YR4vyxHv8fvu1jruAYEPztga9eLtBCLPnZQymrK35WR5zGampK",
  "key2": "4x1AkbgtcgVhbDALUSxB5PGHGH5DbFEaQxdSDdSu7M3iGFSc1erYVi1xZ6eK2gqiEu4VyXVeD5cVpDx8khz9FAyd",
  "key3": "fjnY5Z7JZ3SVUFk89vzGorM7q41wNynPQgu3iGXmzBLhmGnU8CwFU7PmWvLQpXzJ2zV9r6oj2mQ8uVkHNPgLUS5",
  "key4": "4Pa9QtJA32FyGF99hhFvim821gRF49WfKkdENCVWymy6Bs1tF54yCg2gWYHuuoGCpup8qRKGmDRiAvxss4sdE5Po",
  "key5": "3LQiaX6tSnQxhGaua4wu5v13Yefn5QdcTUFFJXBuxYSvxC2bDKipMvksFqo24YFXWDowXncsgUbeRN7KAkgYkraM",
  "key6": "2b3qkHGesHDShbwniBFkqJUwLmhQxghXkkf9yn3rfNHsYJm5VGf1aaERv4betfimRDMavVuSPTBzW6CSNNaEr8Zc",
  "key7": "3mEcJDRvY7Sv2JovEfmZQ8HQyzdhicXmbqBSFdi8XPdsh5cRj981QRnydmUAj2icm9GaDnpEvu2thadMvfqSG2us",
  "key8": "2SQb5Gqb3wFjuDP2HtEWAzMhrT4nT7NuzmdC6cPiQWbfuLL3kh3Mm5DCh29kwLDcxfbehjhKva6qFe3bP2BNvD2g",
  "key9": "51m15bp77NEUWeByhLCyY4dYMVGGcFQ8sYkTipqFqfqCdj86yHw3nRL9fGid7iFKkq5kbpuePWm1khaDJpfqCDzM",
  "key10": "3c976A13dhizxAAjy2b4fhXc5LLotcGQMgfkAzHJ1wkUXMaVEYvSW8vvLydPitLgZFSAK2ZQC41PkDqEmxuygUV8",
  "key11": "3JQM1UGBZr6swW5VZRLoxPvtHvirzdtNDV7GDymsXJzdp6WR39zzkbXCcjpc5WKzyUzJBc54VRJLRURg3upNukvd",
  "key12": "6WwoYBvJhniLrXf9FmV92fTL7KHPzfNiv8anPCBv9JPg3UbMNwTaAj58gARJvoKXx7nNHvMYXLPV15Mcsna6GoF",
  "key13": "4avYzH9v29U5xv4pm2nsFMTQCzmDC23Ju9Z3X4mwtHNr6GN5qVdpcANR2ahYUQn3xv5irSPVzadhBgLSFACiqNGV",
  "key14": "4WVzprqyh5TPe4Lzt4qjqwNpvFFkQiDAtAws685AehtUL3JXMRjLR5VPEYCyBtcUyLNibXKdhJ79joWMDr8W7GmM",
  "key15": "gjTHnTiBUVJ5pNG1XKRiGc1NtAxcc996496UUb3jxg985grsPXEcGrA4TWuowXs9FxjR4FEdAeSm4nFhtHgEAr4",
  "key16": "5WkwbT3Shh2korw1snQYjkdGvZ63xUDUUWXgnrsPYXqS2CbdeW9hNmW24K3QZDYB1R7UhvvvjK1xDd44QkwjPSCw",
  "key17": "2wpmsK5CaLQsUuCQv2mkgBXKSHKCij5ZECY2UAKHuAfW1uM1xbYkSd3CXVn2HRbYty6qd6n5fBoyBVJnrpBsmwy",
  "key18": "4GMftK8maWqJGqhKh2Vpu7qJtoVE5mxKyF1HvpSDN81EudG1psqCfCMFVdTqkZPB3hgYrbc3E4qZh3UfH6EAdwmA",
  "key19": "3daCGy3PwAR4XzVbGyTwHFdVMWz2Hhq4CZomen1oqtX7xBJUcrXDotiVxb8k5k2kHioDVwzBtx5qXfWHRdF9WcNp",
  "key20": "3ipMZDA2kwWzmhoARX3EwqyXe3hVnjtqn2nWCsPgZ1DyrbqphmmUNUGKWAR3JsnKjkiHG3VQmBzhhLMhFaFL1Y7L",
  "key21": "3ymaTHGcHtoCHRqP42obVaKX4GxTCpYEZhSZVDLWay4siM31eqBRiQDrV19qzJS15tGqQJ1ZsJmi114JRVeo99ks",
  "key22": "3bhdEurP6TrLaYdFLpzQQK4vW3z3NYnXJZNHVdAvtTJFwNXzU9V7epgPrLNHuZMvufWvm14AWY77YcCJsGurmwdG",
  "key23": "2U8PC4tUyJPbuzctYW2SAH2ioL8frmTqrEiPUatbwBAiRMVnQj91x7jxjFYgCwnJz3A1GE45nA1rEerBMzXvybGy",
  "key24": "4cGKRW6mYJcYRf2rCLEuyKD35ptKCeNu2LeXhMBsQEUL5kTLEQEn3hVCsLVEts2mFGnuHcE58t8yDkJZe2DgemSm",
  "key25": "2Ti4x6fviz4MDcuFqJdgVd9dceaU97UdWsUDh2WGtEpumkqqiUPysW5uKPsx4C1YCM5KLmgpGZk3sRnGH7Hi4QJD",
  "key26": "34H7WuLkKQdCPjYrTUFYFwwvPVCZGRFadaeZH28ftSGevSvy2BUyZtuehGv365tWvmpvrWfcWZpFbsrMsWWNFzv7",
  "key27": "U6BKwgfxrc1NyqkuzMDYvBbX33HuA38ZLA31X9RyHBA8qnvLUmAxnCTKMuPs27tLvEEwxE7HH17SgdsM24qw5HP",
  "key28": "26nH2ePgbJEpJ7oPzd6uk3scW5F2y2gZrJ5b2mSHaq8qXgUFbWu6L1JJKgkptecLejT53dg1vXtyrkMuSPWnZBgo",
  "key29": "3Az6pa2L4J8XKpbBqF6RVmvRjDJDJCKnHFtdJmeeQbQx5HCX1nyLiyiMUf3QhshgJb4Ffky5ydeGFn6oiT81Veos",
  "key30": "2wL2AGZdRscxGpStxEqkv1joeSAS2Kre6UfUFZaweY6gXQjGdKDXEZuxfefB1FHcpDgDkpvHFThdENBfEWxsNXAe",
  "key31": "2NbGP2j6pUfCQrLxJaQmo2f88qP3gznKK7MPmRpuoBku9cve2rkyRwGthogX7eSo6UKCaC2vDWxgqxSafrDrqQzr",
  "key32": "YuBTY4jB1kEJzU5TRv1VVxhC7rzesLRJEb8wyuoXah19Pyo5uYth7Gj5qk2a2pdGRrSbiY2znXugERzkJ8Ga6rc",
  "key33": "3qxKWyGFkPwAF6hy6tUvC2uWmYvqWihYfmgXPiKMw4PtLDwRfEoHGodcPbc6fdQWA8FTGxpTF6mSbhgxqgKSguiT",
  "key34": "32avQp7AVGXZBoqkCqV6tCLBH1qHyvx9bBC58oXJK2BSv6XKLEkf6tuuL32RdfzoFFeZfV1qnVzNnd6KcdHg9fft"
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
