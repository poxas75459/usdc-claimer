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
    "62bMEAGpP963QRdYgnMErrUs9kgwf4x6tTtAnJWuHftF35P6eTXrP2ymgrVivemupmEwwDQujfjQr8JGeVPm8DVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rGAnseaXK9DkxyvcLsLvcHsiZtRmz5JxR26idNn8iYuDMGpT8VUP3fMGHafjUhXxBrETdERo9LmtYRciLgRaVHc",
  "key1": "4E4q2gNxThSZQr4BpKs4J92osPg7npiMe5po3mZknZaB4QuCetnTEp158N6EweFjSKS1Kcd8PyV8dNmFfjcn6Kf1",
  "key2": "2jvN1Tvg9qjvS1dV5vHVLs5ew3XnCvQPGStVuE17aakgXaaEMnHm25phi9PtSTjBNJDUktaeqvWsNYEvFEa4ikdb",
  "key3": "2HmNsiBgegvY4DvmRV9epf6hMk6gVfQf6HN1gFc89kXAC1BYRoeP1mMekpPNmeazBZVC7we4CejahyxJFyJb1fcF",
  "key4": "5MRyd67ttr8D6dFzXP1XKBeieomejFx4basdHt5nSHjHXH98sMnyDqxyspJGUNbvHtdXcozQo482wsGTSgwmDaLm",
  "key5": "41LWus2e9BQDcUKukAzKXebPWBpRhN269fsmyiXwN632wdSZxHsFTmzJwzAK9EkcPF96LyDWqeW6pD4bRcTEEGU3",
  "key6": "5UWxfdK56Bdni8iTAgiGVPgbFhtM5FarjGccDRk6iAPqeoLk8uPmjmhcLLPErYmuKmLocdtvbTey7dfdGxr5VRWP",
  "key7": "3bNtaXBbAw1TR7iYeLnazkj6VbS8kGa8uN2pJHxvbMZ7EWXNamj5r6dcvWfjAMrC3mFTn317JsPHDEWrEVbZeUVB",
  "key8": "37rwuNnHE12uwrDR5mYF3kTNxMvL4tJ1ajyVZ5ZrbcxVacZ3hMoaToMHpw3aJaz4xHBr42iJoXVrifvpmiUhdqYs",
  "key9": "653w4Xv3t2Pa1kGL7kbuJGAaeiTVBmTCqtePqrTyv8VyJ33ZXeTz2Eu9j5wbhTvLGzwc9M1JMSUL6HM1DjG4WWJJ",
  "key10": "ZdWjoZpk6aoKjnn3RQBxVnjBTbuXCTRrbhpFwqiXMyMQ2UwyGNw9GCWofgFRfxCUJSJgvHUYQwrBShy85LNiygL",
  "key11": "45SkcwnDXc82wVan54xiQC9EeWw6EPfK9LFETyCUY8GxkKDdN4YBv71yEEK3KzgpMgLmBjinUHBra5XcM5JKnMRQ",
  "key12": "4hNufABYXfSY1Pq6x7sPQ3DYcQGFRoA4Sa1n3v88m9DUxNq86mVuqTmpbesvyDJCgmMhWw1jyvifQiRz19h4o1Xi",
  "key13": "UowZeJtfL8PRW3sXnDTaue6CVDoSsRit5aVzx7PbwGsULEB78gLxRqkFd6ZLNAiXYAwYUyiuSKV6AxUYA9WEghY",
  "key14": "3ZbJUqTxurZ6wXLLZN1hxPKgbsE4PuPHqjxkQTvMx1P5Fvmvg2oF8c4wPmFFkmTWiAYzFu8rrJgDcAPDAvQpjgfi",
  "key15": "4kYdo6PerzmDMTLj41zMMmhEHP8vLtUCeyJw7oi8yZQCsUJuSoJHro8D1RbNJwC6n6UiDfQxbtxczvY5YGMPwCQk",
  "key16": "r2cC1wwQdRGWQFwCuv62m4JBsweQrJh3YQh3jqJ7cwRsacrNawBBqs8HvdwVxQTMEyandr42qv4T2d5XtxZhixv",
  "key17": "28x1Hd3fnPwvZnBwuFxhFovaCfG9eUMrxErtA71f5MpmfH4tmmaCasf8E6Tv59WJf3t6nBaHdGcaePUKXkx6vVEj",
  "key18": "WkkiHLJ7F4AWboyCmJqaJVxGfBMFQhXimriBjTFWbd5GhEWC6Lo2MviEj1CNXTbq8wnxx6HmqfmHFrNV53E8Vzo",
  "key19": "2QMPwDKcGerz2sdXuas9eBXSsZXU6xSeLoyhfSwdF7ErZjQiRUbTH3YtAHBfdXe5CWYVtn67CpzJk7qY625BbcYd",
  "key20": "5nQ1yJWgR7UQ91nUh7SoLSNET1GjC7jWaTRXkkdF7pe16s1fKDXjv4EUFZEMVRN3MBY3h5P7SuCTR26d24ELRjRU",
  "key21": "59sxm1Jb4FKnDqFiwvFz6cQzqdRnv6S7mmNuwMrTrysZsmdvh1EgFLEDJMyHvtAUvmeY6PWBc6N4RQ7DDCtBohGr",
  "key22": "4D8qnCFuGM916jRVCwMWbw6qBtEEKhakxmQC7aWPbLKahMRFoSCUSvkGENsw2mRSp5sQ5R98mcsed9eQiRpJDgct",
  "key23": "24iGctcbv1ZPyqVCoWZyGHPFG37T1smHt54rLfcQhhWrjddxLNeWFEiQxB2pypYw35gtuutbBLp3WKSx7v2QBT49",
  "key24": "4zp3Ryvm1k9jsUMpq1bGRxnw8SFAfHH27vgJQqa3FLpSunqiL4ZjhcSQYzjWFPbkxZKAfXBHjRnvzE1XWco9mZwN",
  "key25": "3HbwhQC91hZXXb7ysNgQohZRg4C4GJXJAFVpBZhkyNH55rbixfVPiktPomobHNeEnNYdzcjydk3xkc29VT9KRwWy",
  "key26": "5fWRHcRRKyqN8Gw8wkiXCoD6RToZSTx9Nf9Rsz1SGcJvHWw7WiNJePhJtsB2sh6n3Bqvp3PtDrBygyQKecxwq487",
  "key27": "2uimrzJ1dzzKZexzBJrfhrWYSvFGrrfrQrXjJAcueNeDiwLAZg5qEbbkSk9KGVdyQ4oyix7Z8nvc2Tiw6tuRLiqi",
  "key28": "59qKPox5Cm3SawCbpkUnpCuTxmtVhTZgX1g9oFkGXFvcXSoqvRiGE5ZXSbtDwzMVtnGmKpiX3JG4d4ao196a6Q2u",
  "key29": "4dAsNxTCzJj9NHwnKrZQv5QVvVuCQmdq7LAiyspZ1DdJnPGF7FVSfQWV1LPiH1fmGoMRidn31xTP5KjYYdNNRELp",
  "key30": "4Mg7Tg67wgW6X65BwkPUhHN5b7soUGeHtUbVgNX1DyLARjaR1mmz11i9azf7n1gWPqbety1Pk1kthrwsxn3TU759",
  "key31": "4LhtR9d9kJA9dwqHYoAzfdBvWeYuVu37Zv7oTXAERkKoE6pFFedL4i2rhPgoLfUJApw9j1FNaJvk3FRmvbauXVMA",
  "key32": "55ZfwV6cdVXgrs42TgmeqzsRUCokPHiyK3U7NfkfFyubNZ5q6iT8Yw43stC8DW81SxoPum4VYyJDaGgTQKjR59XJ",
  "key33": "5Nyc5NEFFuKVfKnnSG4Tpojcwt6xWXLG8WFathiBpJQBQfkEJErNDocfLTZ96kaR69DKQg5EKkDtJTActzLU4kTf",
  "key34": "67TFrFYmHRJHZAK4829hNoce5yfFvj2DTyEQdBySHk7arXJuvoVHRHcsCixCYY4PepKJG64HiV5mFdSPBqy1fepf",
  "key35": "2wMfewPTKNxL5dcStSUwrUDVNZB31iYcoBiHeUYLNFhSCUD2UsAuwP1VmJauTjdy4hxFrUtkhMU6jh4RWgBKy4ab",
  "key36": "4uKbZWMER9cJKphTqHuHk2959fJXsBQTz7NqWePRDHEDnnvME5fAALXRtNvhxWn7yYKaD4prvaBS3eKH9jXTCRRH",
  "key37": "2Vm2jXKm6PM7C6c3vcY9LmMhvaFn3SDYQxx3aJkY9NPAJkvNFKu6zft74Pzn85r7VqRosZ8mwoFWZMGJ9J53GDbS",
  "key38": "2DvEm4M6Ctx1ucQ8i3dj7iLxRcep1y6GL6LKjkMN6ZooNk9GnsHcWaW2rSkYhhFX8jxcnD95oJ6EdHMNxXF9CT9V",
  "key39": "3RfGAWocjmrQTzVupXPBGicKWcwgtiaZ2U9vF7J8vErTMyv4EDMKsQ4BmJat9GCajxLsWvkZrfAUAkCQuM6dSu7J",
  "key40": "2CUQMMLSwazTpbvW3iPVE5GnjBmvtozKkwqfWUUJg7WbZBSuGATRnSNfD8zMye2PXmAngHerhVxtnBvzUPNgzN7v",
  "key41": "5JCk3DPYwhNjutimafQKpk9E3peUQLVTUKgySGtHuTDAuTwmFzt4S3mQJrFj1xS8GvC9weGi7mjhhnYXGUKqBG4q",
  "key42": "3xTwSgxmKUbdFE11qGJv1B9oHpqdJaNwe2z23wiMx9EigXdWr68jChrGg1fGL85AfZ1nF6eTspDk4fT6f7a8C5zU",
  "key43": "4UfjokEB3DEdU6UxyhqLwkRU551QPUMKnm5AgHbhSnCXeddFPQv22NXHEYDweguTvfgsTJtCq8AZ9CPKUwtYLHHg",
  "key44": "5B6ZZuvmtGxcwKENc2sBtC8QGE7yUnSpePY7NHAPXC8u1RDJWb6EkjTRTizJZc7tvrZnJNo5DYwYNspkdBeZdRXB",
  "key45": "2w88ZKbtuktvB6cetQ4ci3aBuBrKqPPSBZfUdrzKdkuZkScAfdBeTCJffegWUCE7b2MGXtedkD549hii3DCG8rmL",
  "key46": "kkNzYJuCr5756VHdhEM9qcvsuWEcBfkdEhKUH3NsoqqUmHvJ1T4CMSSeWRMiVotr8v6dJw56pQwgnFawKiknm95"
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
