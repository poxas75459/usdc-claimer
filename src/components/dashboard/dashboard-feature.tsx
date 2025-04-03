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
    "yUtDeyYBbcKy6eJ91LsdhiHJDK3jYA6bp1uSy8RSvUQgoaZVcbPK3EdLkHLo42LFDxQBdjtEo8bVQG2D8sr7xEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NvFurQQGy88uHEhumR2w9TXfJjbgKQdhyj6VzcsjcmbPFY9T2P8TzrcWAfU4Df2sCTUHrHAA2r9un82EQ5r7FGu",
  "key1": "2ZwpzH8RnWqHr7j7EoR5pWQix6c5NrFdezTAsuV78Q8XkNRwxHLVEhUi8yoaY3PWmD7eYLpUbKb2EhY9UkiB69QB",
  "key2": "2zketJda3H2xq6CPcosvY6H7gtyBhjgn5J8n9LBn6QpJLbUG9MLrYjqSuTaooR2ZavmChD6AsrqQR76CpP1K73tJ",
  "key3": "4XqnQciGVAnVFbmhshiCdCSrhpZn4UvS8ZptVXad78f71HZTdhB9U2qEMrDKh8hsTELpNx4wJHKynGUDaiKkjUpS",
  "key4": "2KZzJxuEA8UjCKSMzCgpwqCU1HhT6w4WnRgzB8EAS2rsQHqKh7zZieRPa3rJKL7nuy1g3szyYpRiXNzLQb41V35W",
  "key5": "D2d8ab9zyReLQYNdTM3PyT3YNrHwapPJw2qFV2BGe5v9uoYfFVuyfttMSrgpnW1Mrwoz1iThb4893HkcmGyRN4H",
  "key6": "SF5w5yyMF6cLnHYXRQRwMqxb9DmhTiuEzgWaTD9iFU6mButesEyipoZ5XzAAssecgy5BFWzBQC2cWze51ZDBRi8",
  "key7": "SJEMosqa3mnD5sx3r6gy3hGbsXupLacfMo1rmWnpdGfc2Jz9Bu4ZFFJmPBA6gdpmBP9FkYJHF4bQWcZWr5nRmzD",
  "key8": "2NbySNbAEA87fTKaPFsvq2K1rNphGRk2u6DkmyFCHCeyqBtbuRpwzjFWsKEXB9JLyCo83psw5D3L415vFziaNSNF",
  "key9": "2SbUsxh4CFt3nQR97am1bnhJEfKULnz6VUNBmgPQb7wb1PBbW3C96WNJAhvnLVCiJ49p35jgNAvhXYmZsNmurHip",
  "key10": "3sj6Z828UobSDtbGUGqNrfvDeQFWYh6horfPcjTWwMp66UPKuq4LpeEDRRxiwzFXPxqyZPchThQs9bHLhLr3Qs49",
  "key11": "5VpLf1GZ94VMzk8vqtqxXfVESVYgTP9L9pDVaz6qrYiN1wz6oX4GYnMJFrJkLCooo9pmNoyKrS1xypH43Ng1DBR2",
  "key12": "5Q1bZswKwFA33wBVsedN7TG5ivQLoPtC1NBBzj9i8rBVdHT1rxP2K7wisH1vL9aVpQfoqJbQVDcCjS6LHfrx67DW",
  "key13": "5zZVpSNc4ijCPkfBpJBppazwvK1KqZDaASqwnfdnyVRANYama2wmGicMDmc1HgsDsbyJeP2TzVK8WJ3rMnaAmPqL",
  "key14": "2DbmWVJyvZSk7VVvQ1Bh3RgfWfAepiNtQoXA9m5uK6Bj9FpSSU8bWsCxmkExVm9RfHKsbDsdmm4o4ASePVuCXfD3",
  "key15": "x8Bvig4g7eLyuhQQj7VPrUJsfB1ed29HLvtihroPatE5Xg4ZWnJMNJgLvFThWaUr6zofj6AYSKVvYrdiTF2RY2L",
  "key16": "5pvgrpLJNuS76JEqviAW7pn8rEzqNQVHfj4TUPu1aBLxUGVY7yhPjafHwYjcWie1estfVhLExkP5f36wtvSyqEuM",
  "key17": "4X4c54wSMQidK1YLu1ZUoBVEad2No4pXXGsFWsL9pEFwJqksik9zw6BZ8iNKr95AWCA3MrsigoXA9QwMeBeU3745",
  "key18": "3iWm3gbPtktpJVFaUVbQgXNPiLhcKDrWZyC2SF5Qntkt65sYPdHkcuBqU1uhr9yoaX68GEpUPJMz49vTv64iCfK9",
  "key19": "3syUQpwLTpEDPZYPve6MUyyPsgLhTbPvuyW8QjtPW2cHPJB54WqZnNzpaxCYPE4X8PVb7hjpcimCBCqX6SXsDeh7",
  "key20": "VjKcCUCXdryj4zqH3yFWYugRqa2d1JSH3tLic2dYQ1Zzn5wLWLHkR9ayzxb3no4kZDKhCAr1bNWSFqpbzxfxSGp",
  "key21": "66BPEiUTq3C7vwSmzDkgb7spQpAYTTopDGswtjVB3Vz7AC2hiRZCbALQmheo8uty8nvfYu2TM2tsD59e7Jcs3FG3",
  "key22": "4Vf1WR2QaCDcvF8cFWqmYBUVSMsFaqp97A931kkyP4e5TJJdFwrN6bR2Mc2YLqapxnyccQT4JAo6v4NGHmjLZUoU",
  "key23": "2TApQZQT1WbMnUR84a5SiMcVLt4zBVnbwJEVixnNisb7PhKdKesq7HyBvcV6cpxokBUQNCuQ4CSJNjGGDRHXTSB8",
  "key24": "XhFYKpj4cM53g3Ki2KRGXBMBNnTxszZUzqywddu2s74CFS8FzqSXGauoDNg516kQLJm2ipnsJ2U73ksVyEkvtku",
  "key25": "5gUjPJXyZCTATVBuCpamWqoJ9KiABCEnmE2nTqWVvLwY48af1ce2whWwdb8yQtMPqRoQbJG9RdSzvF9PUQfBfBfY",
  "key26": "55CWoYfvrfZgnXfwtZ8Deid9KQQwCLAmca4b3ijsCwjBh721Zc5RAMxLjNq9pTE4mydAgopQXzQ3BTq6VC2Ueq9V",
  "key27": "2RbxbWfKAfDogKgjrFRHdFSe6fdgMhJxxf5d4sua5UhrkcK1vNtWYni6v7W3QGxifCvYU86iTR4AumRNt7MTLYnz",
  "key28": "jUqk2aSQ9eQeEwej8QVqC9SH82znxtSBFTqDYHm5QK4eG2CC3qPHSB2G3PV9dy6JecEDAHm1PjXkm236PW2QDQf",
  "key29": "2ZvGTY3Sh89qMGc3i7HUvCgm3sFPbm7VQupYmvJJR3Gssgzi9pmDrvTReNfThhRzpBTP8xD5F1RZzMR73kgZrzqM",
  "key30": "3uWacdAxFEcuf14Q5tUWZiENNg1QQjAedKjXqWo6LbdJa1yL361o1zWYsWu7mA9P6oQ6ofoUrAuEX7ofpfvhD3S5",
  "key31": "6a98uUiU7BRugP4ZqEUiBXWA8KL6GCTttaWJPAPR6KLWnEfd5TUhJHXnDj6d8bjjnyp4w7CnXwGUoo9YfVJPouN",
  "key32": "3NqbbM2d2oySGgTuTwv249o2g4X5y8aUTybuUXsRcHkVTCHenyNTEKK8KLzz8mEgdrFnv7hiXqm1EX3ozjXivWtQ",
  "key33": "g8QGuguSqg9gcd1qSRjRbNcVbEAcijuNihLcBibM8k3cbzuVjiG4LM1fRyRcmoAtzGjq5Sw9JcvC75A8irTuV3s",
  "key34": "5Vg6RgKwNKxQrMpTfQTxCtRnhdfbyY8uX9hHjJHrk7bG7HHnMjwT9qX3NpEDSMidCvaFxetFTKAnwtFraqtCmbPe",
  "key35": "4ijTCJW5awfqrtgYvYApTrwEePzjWNFU93bpzATtSUfzpU2PPdCAxoGM5bS3xG8VZ2Khxce4EtNRk8jhZeAgLM2b",
  "key36": "FBW3qiFBWyXEgLMUJTRZL2VyuFqBw7cYzhNQBR2wK7Azv848BMHaTfo9VVkMmKcGgci4YVe8qq165B75mShgxjZ",
  "key37": "4PhAkLNMDtAeHpyrVv3G8XLnjNaLivPFaPhRSiZmkiDEKmzMtbpJ3muvz2Md2gqL977ynBtYb5keNkq2ozmAVc9i",
  "key38": "67Se1xbsn3Zbwxteie5vZhkWZUL958bHdk6XnJBfC2HrqLE7qqvMtPsEAHDrtSFpu8DxNjN613VdPvKuBgPND1CP",
  "key39": "5pqYfgsMqDmHcvbjMmL15yfiBKEegwSZv3qxCJrdE77WQCQd5FQUVkcEKd2BiMcuxwZPQS3QZFkiLEKqmjVyERtk",
  "key40": "4Q5X7YyykdN2BxBKypaQsh9f3uCkpdNrt8C2SXKyxGbRZtQ3YEUZxG29uGvWxeGnkMjnwszsUEgv8GKxaovtGfdM",
  "key41": "3tmEigpDvBDcjj29AMEoX5Q9PCqEzpPXzH4qgKvCNS287qSBEYECz6CfhBs1JBwDHduN9pEWPMwCh84Hk7wL33cB",
  "key42": "58g8LGMB7gfPxRfaRiZDfBB313CgyatmAv7exeUCcga1TbcmLphfmHgjuCi935QikQWv59oaNXCbNZKjo4xfyXc4",
  "key43": "Yb1LRVu9fBcFT5GdhApLYPE5y5soFgRb2mUQDXYGcyDnX24fYYWKBc7cqhjmGighCJ23bcJ4qFMtxRZQQbkN183",
  "key44": "5e9Pxp7TVGVT53nkubWpcNV5zWc2a9BRQGvYbGJNPa2Szytmd8v23vP6bAJfh9kgnqc2PanNufuH8GNpbYkYRVqa",
  "key45": "4xfsZeXTEQeRHNLpmVrt6fQqrmqVNLjbDs89wpNPESuHnUFVC1pLGLzf3svAcZfMADu8RG1vwBPa4wAXxeyuBRKU",
  "key46": "2ebUkyLBsUGztLk7tFHrPm5CEAzZ9bpjQKF8V96LamsAUGxRa1fn5WhUYpiN7XXACsZeX7CNyobnHSs4fzRmEe73",
  "key47": "5sG87twbjdgq9dy5BxADCf9NizgvVpNpduw8VMKghij8trXob3Jk8jFja4pbXhvFeBctpAsZihUScQkpQhhNAp7e"
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
