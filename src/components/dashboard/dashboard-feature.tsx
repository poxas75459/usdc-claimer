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
    "CTFCSMb3hxWKv4K8ap3Ta28MBLaGbZYKBRnr6Gr2c2QqHi6JRWYh4HifNExiUDip8cth3aTZdQWcGTJcs4iVtez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qRq1zwLQZiCW2t6cJLJyw7NbWv1THafDvPv7it4ZrRLt439H3a1vuvPGnKT77GwLGJfxC9Fk592yQT22AHcdtaF",
  "key1": "3rMBm3W68EpAoZHynB5cZKL1MLr1cVZe8rqtQ9zFKx2gR62BCsjcSexcPxmS7Ryx9ovouAdwgGz4B4axhRrDBsVv",
  "key2": "zwziTh6vGf91v4aS16TyT3ko4T5rZxjRRTfbEFv5vrBysKgULZWcYExFMN9ctD67hZUzFdaY33nyFBk4ov3o8Ed",
  "key3": "2Be7Fu5qbPxN1SsjesZyv3ZNqzaarveTvfcuKSCHTxgp7Sd88PyxMJ4T1foLXGyxdVZzwyavz8t4hucD5Ko8amUB",
  "key4": "2bS6aP3WiiMoxzj3TgGAdrsbzPLHhwNxeLdzgbVdrcNZFHjc3DviHXSVmswbzZzj24dBPvD1UhyNbXXAxynZstbi",
  "key5": "4sM2jsb8wY7vjsrBgKn27U7gSGoLkuUTbfs9oN6DTJ9Fnjty29Z31Pu1rYQzBfR9Xg4huHhRqwqvkk8do3R7hemu",
  "key6": "LBEtbtnDnXdQGMkzqXohDWPuULLYdv8i3fKNfFFGrodAvi2NGfyVxx2mvSmynEuaM3Xj6nZJnoYFsVUKk4Jss2f",
  "key7": "991yzMuJD2ymfnditejEi6WJ7zPL5gMzfLUKmj2j2acMyZdwdJ692jTzoqorRgN1vbMZUcH6i9Rep5xSNEXDYmf",
  "key8": "5HZZ2X17uGEZL5ujGdhQFowPURvx5jHh5YrQ2otpwLsfDuu8xRWu1qZqGTP844PChqruocYRzkdccbZYkSdMaSWC",
  "key9": "4h4oE66MfJQkPWgEaSTnNrbrKCFQKbx5c2zh8SCwJwUZ6fmWkAbaxTceVgjXBdpzPdyVTjUwn7GzxJpUgCfvNCAB",
  "key10": "CUf8qU8rGSvBsH6C6JsapZBGheqzmpvrTiVorn5ndWLQ4Hw6rryGyVrRnAF8cY5ZTVis9BgajoTyAob6FDY6af8",
  "key11": "4CgMmXi25x8RqKNUCEwb591diEfnRNyBgkZnCZFCkW2eQ9NLycVa2CGnopTNPjdgZQwUq4Pf5iqAej79SUmu4HdZ",
  "key12": "5tVrfxCUTp81bzzpKP94QDe33ogcromCkQP5A5xr9xieCgheiBAsRUJAwAMsQjKaM67n2pFbQ4g7yeXyMayxEdPQ",
  "key13": "8BtrothBz64fVuKsMkwgGY2SJZfJuTTB7BbrTTU4MG1C2uxpZxBiEfiAPXmYKHNmT4VrJDJTbzjYvuovuDPwUPa",
  "key14": "4odvJ2MCUHKcoimE6RPQpsRqsGHhJQceqZEQpTzwLqM4Hcr3e6Kebg4VS8Qa2zsv4XfNHKZaGA2ufSev1d2HhK6L",
  "key15": "7aB4Grnt54WFYm2GgaMLbsRgWt39DbBmkWej1Z5kQxT47NmTr8Dv8voux3AsK3x8q7N8Vwsg1HhVv3rhCEPqgKS",
  "key16": "29x83ndKPKJpZzKZwzKw4axXt2PbThpAKv3bbTVCMUGiyLm1rLy4kDC7yRy1jg2D7LTcX4T6fMdtzWvFn8tXMUh4",
  "key17": "vWkiDdGu5B1YbDN9kAcC44TwrCuH2ypoM867f2oace8Avuo1frVzpKZCwg1EtrzsHWRFVSc2wi5Gz13EY6dHkzu",
  "key18": "4BxzEQJWFU6BRNapTGJq5TfnpXaqUrZNbFR1tiqWSDSJvVzB8AxbgHCd7ZuB512Uv6vBy35XqzgXSmK737WKn4ht",
  "key19": "2LYqyUHoYLjnfawhz9oaran1s8QhTgA2ZqzDVJzPAVfW8TgGgaZ4dR4WdPFUANJQJbQBcrQ67gNrKzvQGb2Banhr",
  "key20": "29huLYE8UNFSRS1aDbiSsEuLHSeSgWTJUt2dgDMkMixarwC6fs4iGkQFxMG4L1uNsURRiNZFDdgscF3kN3JGzeht",
  "key21": "3LiA3qAuG3UAa1H99mbitzgJwjYb5LxCy4Js5HFTnftzZVzjiVShtDdXoCieyeyFsqymFmvGTqSb4GHzGULWhh1P",
  "key22": "3mZQtFmBtVxfgcRc3kdg6NKqct62e7NGYRgELU9UN1sBrqLGoEA6kEywTTPKtAwQkKfA5HoFfwUxbvcmMh8JKhZS",
  "key23": "3z8ccWNN5jGYRroLGZqdfR7zgCYgidWtaD15bNvumdd9kbaJJrqRooVEZ6fUcszYM9dsSaCYcVyYqF7NYu5fC9Zp",
  "key24": "44BhMap1giJ9E8d7g3TR1p19R1KeYpZrrLFgrA64mvTX4bLL47sbmX9Mnmj17UeoVRadCLgBS4jixC55cuHzVJGQ",
  "key25": "43XMz9ypE8oVEYCWRj1FsHorCGQDQwwuY4D3NnSWoPQLUsX1HWP55vH2gvDAGSDg4kT66pX7HBXBtWbPfTSuaDVG",
  "key26": "2Rt8UCkgVxJ8jaBFnXazUKcceve3BRAReZ3F9drwFvUzEWWwB2rW7BtmfzRrvsQjwKpWCB97xGGTbANEtV6zHhAK",
  "key27": "5Sb78c3sHTAu3Z3Fd6EyQQMQQF982KTPSPLaJTnMZhiKGmc95N1YfqBLC4TyJzrHBMkdoMFywsRFrD9aefs3WLxx",
  "key28": "5xJ5AWwHnsu642de1ep3hrh9XqqBocYCLCws4JgSYd8GT5dV5VnBdgAiEyUM5ZM4jMJMap2VWibht69xrj5UsfPc",
  "key29": "rd8HY9An7FAYP9kTnsd5U68QayA34qYabxs3d99cVmRF2uULKuRKRFFfGWZJhSM3eYjtGF7N2CFFd2ng2GJiruc",
  "key30": "3UwsPLsp36kRhkFLVrUYkACdumZCPC8vnC9Vw63g7QsxHCvH8RUDu3yGJTFhsAySgRmoJxZAnneXGQZRSVXWAxAv",
  "key31": "ZAKJi7hv51MFvSZiY6nMxyK97FLkBaMJq9Skfdyym6Y2X6wWSBxgP2uEmbaCKmhmsz9PcpW4G1DphDHW1PZcuEB",
  "key32": "3HR2V5txBzspYGrbNYFZPW1LSLrKnC4WP1ZjLYNPQ9Vp1srPDFer7NMBeBUm5kGpc648G68vuQUhtviRQsQEsust",
  "key33": "4FtbGbZASXh7pDBm9xBTmLz8stB4FJUKGxzQWA64vdGKRvwpW2mFgewoS3ADcuUJf5qzTDFrLwnY7CUPknRjVqE2",
  "key34": "36mwNDNbQV4MhCEsqebWGw3dLNNgTw3aX5SGjYxniSLoriLEqb5QK47i1FpbCFup7QDEUxY6U17LKPxsQgQrm3Wp",
  "key35": "4cm6afr1SdiG9vzGjGZzezXQKQyojjvb6FQaWcbo153VCDcu5QwzqsEhWxeECJwbXipa6QuY2xCNExHqzizC4GK8"
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
