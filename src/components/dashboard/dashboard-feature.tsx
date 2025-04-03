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
    "Yr1LT5rnM6v4FK7ucH62656xGZZ2uovjAs8zfCtMNrtDQTaqaFxzJhDV1QX3hRSPsHwuTPvi334Vq4i6Drb4zGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rvb9NqNYn9DRHr4DRCsFLvybHfwyT1pmv84okKYebc2ocx5gYUf6s7RdDMMVvewvZD3daLFGhPB5edfteiGzXiJ",
  "key1": "5Hfn9THeQCjwtP8zxTMUTVJ3EVfxs5zDa1hu3Jt5W7KwTih46NkgWUAfB3mdi1A5uPD4im5Mnjneaysdo5uSSYdQ",
  "key2": "JqrYi8BangEiGo6siJw91jTTJ9WTyAxKz21F6D9TFBYS4aQXWgTvt92X1jq6hhdPZ9K1ZxjiYJorgFDWekiYpYu",
  "key3": "XVhNK5X6w4DsN2EgwkNymLXok7Td9pXw84hK4mXoWykcf5JsxQ8Xc1Gh2wJvNomdpwWToUKYEnCGiFiaQmdReEh",
  "key4": "34Usb7VafbSdBXkrRDnp7oUQT473aQSJbiZDQkDkxguD9Td2mW5egG315E2cqokV3RXGFMnUNFJdAHheCjyWochm",
  "key5": "59UeDjStfPZGPpMdcbeKX5XHtyy2X95NGoHqiQhm782FbFzJaaxsRknihWVVJhJuKULT2UECCsPJz2T9nh3cjyGf",
  "key6": "3biqGVV9jkcbxeffZMiEQ545sRgcYw1Nz7AjjAt1hM6WyUCzeatpzgDdHqWayaTiyJoNJaJ3a88djFux7SJFGXzB",
  "key7": "5dvm4sbBdHxzJZAtMyHCqiue4YY6f9hx6o1jm4NJUewZqxeLGJzoEF1ebcuExczjWtmPNZbNfXY4zJPbsucSQDLB",
  "key8": "23KkFNG4hS9dWCvAPJaj3PzFiZYMhrCfTETJrRCHY1HYKegQTPFo2Bb93fHJ2qdy2Cw9WVaXt7cXezwPwogSpzED",
  "key9": "4wtZySqZPNupCcRh1BF5CMdybrxPvBFN2jvnUqq22Jjdr6oEZK8s5Uif1XsV5cTu64RRk6K84XNS4S2DZgmKfA8Z",
  "key10": "orfiGnGpgZRkKBMFvatR3HPxzyrjs8dXruUi21SvXFZ2uXBPfm8zfXNDKmV5kXzUsADj1nPgHoWnD5Az3vtt9og",
  "key11": "yopMf48aaQm7ADYiSD5iUFZb8pab1i5FZvHGEXSb9rtjH7YjzF5Hm3MMXkjsDkm2yvRPn2w9k9YK3QSuS1Zmg2w",
  "key12": "4faUTxveQSu1GYMVDhUXZapfJdFp4Ho8Zsi2y1xmPupeMkZxycoKpvQe6E4XcgSjH2812PF3Yp26gBhgzNUu73xc",
  "key13": "3niSGXNyu6UcNPAngdFPkUz2NgFPzuLxsb6gKoEQuJvhesYdhYZirdGQ3xCwemdhnXEcz15MAQRMBnnP6kyXLPv5",
  "key14": "3dK6WYo3En5396zPRtaQzC4TZm2uDsrVNFXM7hfLcGheZVoTcN2mfoGCYJM3EjfkwJKKcZezvAR58DhUdCTt2Ew9",
  "key15": "3ERWTV3nR1NKkgRYAcymc1pbfQFZBTKHjGfmLU8kcXSXvWj87xyzLfVPEVzTSvzzmgxkmgHnAXqr3hMpL9hBh5rr",
  "key16": "4Mxj5Bk8LqSZoiEDDYLJcV8C7sVFkLaHvMRTJ8w1J2Cz3R2nSUfWdSUnjcNpth9seQzrNDG5yBcaxFxq5k94b8ZB",
  "key17": "4qMtqh6am1JjLwqrdCEoFMVzCd3iy8JHpVwvCk37jdjRZHEoqs3PwvkdLRxGTskW8aHPVeuaBeuMi4EGYoi2chQT",
  "key18": "2jWdQ2VXJDQr1koUWCTigoB9NJtuPToc3sk9okZpmWH4Bk8YXuihvY55WcCN5RCAQJ1BpzTDjaUaaJgyyRrCdaLw",
  "key19": "4JsgaFYo6cYLPcpMNnCt9DfsFThEvnTbxxHnxu7SD98E9BVU1UJo8v3SEcZVwqfsLPFChBQx436otfnzxnkc5dqF",
  "key20": "m6tWUTpv1Rh6PJUGNuDz6pmhKhxgH1oCAUB2o8NPpnwjbyffDvkqgEE5qHtvzwyY6HPgoQwriSGgi7CiCDaN3Bg",
  "key21": "4a5g4mxpAjRH3imHSiuzqifyivcWL2TvZAtC7EKwrvj5MhVm7YUfSfMN2dAV7JxSfNfWySW2KqFyFuPSXxWiVzQc",
  "key22": "3CjpdBgAg5tCyqKpxiqz4RbiyFmFzjpZGDuydb15Ai5pYp4WWaGnG2DFkpZJoo6TK6x1koYJ3RzgL42feavLvo8o",
  "key23": "4Gc936MUP4trJo1tQvmGKXGkMegsdafpcZb9hytyuZbwBz2WhuxwmAvLzoZrVB7DTo7Jw7dkVAT4R7L7dHnR4FUu",
  "key24": "2SmLSF9teB7PEZLnTE51an1QrP8ZbBjSneu7AQEEYbhfB4CAHdBQkgLqx4ey69SRtwAEZbVZRbVQsCHf3w9BbmvG",
  "key25": "2EY15EsDUpXDEsHdQuWbD6emAg2bsrm95Cm7LbJdA7kwmUU5UgsyGhWFd2s7zQriE8Rjc9kYNXXfDV2WMdAneWHg",
  "key26": "43BmMeHYWPbX4L4V9bmFTgWh3prGH5YBXgxwY41jFPTtVMv8z9nJxqwj4FdHUkGVDoQazeitTmupUvzcqED38wb9",
  "key27": "4PAHHy98orhuNwrQdNtbrYgqUPRNRAoxfmZ2TThdfqSjBBDKErZ4nVyzxMLUapwFyh8rdL7rRLUpPX9owDDbiFg8",
  "key28": "5WpuyY6oKLkcs4pR5xaQzosyRQ2Z96Uo7DVEQM97mowRR7QwhzguYm5urBxo8r9G9aK1ZyNvU5VrxNP8aFyyppDu",
  "key29": "3UBYXPiQtbh4V4s7Uqz8EnNiLK93579KbdxLdS36hoDhb5FeG8JsL4noe4STHsZj4T8DrWXWAUSgQiiUbEjMcHei",
  "key30": "5Yz4SuJBU1AWhpUCmMftTZS5kYZn3dysiDuzgBUSPNfJTihwke7KcHKKAf5WhnbS5jgA2roSZ4n9mTmePrcdNXiU",
  "key31": "4Xv3g2VowcxJMiJC7tQBmEbMtDSXhivUKE3zksgWD9PdQgu5ovnee14qWYwubSA4XAaZFTBpKEuxrqGk8Km2P81J",
  "key32": "59qYyDGhapk3w7fLasFZBqY6qkJ1zwFMbnPLLQapYuMCcejRPad42KFpCDz6sGKvDkL756XMKLR6CXFJCbaddzbW",
  "key33": "5GsWpDBB8FsVm4xpPiXPud39M74wjsuZmau6S6DxGTUrZV5meKxmrkdJFYftqF9BsjPvqmYTZRbVqcxqj5A6HXEC",
  "key34": "2WZdQfdiRirDLkm4U7JosYhfUi4Zb9MUv3bcWeuHrhVDCqnZamoiR85yMRJR2fobqvwEP6e5M8b8ouCiJT8gpuRe",
  "key35": "4XQ9DpYLDPmonC2qHV3Fpp3CPUyWMUXLCdR8ReZVmNnZedLfAHt6kHEQsQtWgmrFqqEgKfvpdAEbzLLhDBzeMizT",
  "key36": "5F1VVW2XRR5HM3cDj3KZY573hu4GSMiDv6jJEkztXDgq3SL9S8T8a1D38ew9AZKeVaBPqoTYAcSBwz2ouh5WXgRP",
  "key37": "5GG97hPsQRHL7wFmX4gmLPWobxnFtjsfLTRXjsvqwMgSQtEqDMLQospSy6wviVjSEbn3rEdfF6UGrUPkTGy2swyo",
  "key38": "3f6ttLQtwgjXX9NW2VsrJZbvJj2vL4ouBVp6ekDMtk6SniMaGEp3o95MFrJHoj1Ki52ZWqBSb3fa6jaj9yQR8w5D",
  "key39": "2wLcGbzhrmLg4LdBzzQqeR6FDeXBNpLNf7wR6BdXnF1etCwkC7A8iEkHMGM59YyEU6HHkmoDLeceFqvNgRsa8JsY",
  "key40": "3U3R5m8wW2vmsZMZ77tjuX9oQXwZEbrhcVHkNawfPd8YNQdnGTzbbjCRhe5yaWL3KTpbwM1QPXNUktuPGyRYERZD",
  "key41": "5P3SZhyv91S1bFLGMqCQNpigSRot4kegNUjytDT39ZpGjefRVjRhs7S1EL21qaHaqK6pEj9cTQFzudMgcCzCMzpW",
  "key42": "4NSMVZrWBQLQqeaPb1MHLzMjiYwrrvVCJPsVNYY6iLTDQuBCajW7EDd8VrqHwELko2eAVhqUJhj5jRNijH2mkiqU",
  "key43": "3K8DDE3poYdGVJee4UVmHCYXYzMcD82GD4RYSyjoyxKuFdh7f1o54G8KSErybcvMwEQWJyJa6PVsdG7zP9F4ZEb5"
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
