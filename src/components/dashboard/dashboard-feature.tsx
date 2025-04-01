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
    "5TQHrdurdrBgVgeafbfCn37SQfpU67Zm9NjrGNdnt5GiCRHjo8zufdKUE51DCbzHR8AstMsWP1DDw1TFo7sjZg2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wFK5B6Btbj6RYySvWwQPJT7NNQ7MvgEc8YEyUBTiyLNb1rd17awRZZX9SwveJujAtyiYxh77uviUKgWtBHHUEmM",
  "key1": "4ZeeiZTNBQ7HtVeNiCHdef5d9UVgKkQ3iz3QE4K2hGM2c5YmauyQxCx2GtKNGdcXozd1NwDHzgSPUgXahDfTZCUW",
  "key2": "3SQgcQEpE7bHcVcvhnqNc2UkWw229jxUeTAwhEsiRpZVSgSrUR6b7wuGBTmCYMnCiRmGkfX9QAt3JBuzEdULT51d",
  "key3": "418Vt9xvxZEQs4Whhfz6GkYgo2eshnVEwF1YWt1ZmvEKHG1mexok9tNnSwXb3ZNoyVXsEtxVuLkZT2XzhA32WAeJ",
  "key4": "MZxt8secrgZxRjqrpzgLSgP7dYbKcdoSFMpkFfKU4x4juYJD6fsdFPMNvx3Sf7dSNyqqiktuqt5DqRnjEo4ZYvo",
  "key5": "3z3idEkHM2FNSs6y23X2eEciQoXf4M3N8PEX5TgfCQxx8bkt5DQ8KzbxGQRc6SZYSx8Bwn9hrZSh6RE8Rrie8Pc1",
  "key6": "4geNsCvgZPwPDsZqtAYsiTA3p5kZmPkFUnXswzmDLezQwEX6JEXJfMJrkHe24FgZfhJCkDYaHp1xrsK87z2cw6Wd",
  "key7": "2HdxQQbjBaxuNpUnh2sSuLyeCLrt8KY6ZJ6XWysni5KQiLLWsqw39sJj3xNGNzBNFKgsRHnhs6idXXCGu3qkV4dp",
  "key8": "5p56sbqkPKAswiC5VSEpgr1QRQkNznunhdTcw2iWxyU3yTFzG7vZAzumtPMGdo92J4Puc3WEbNydouGR5jaw3yTr",
  "key9": "3BQT4gqQqEbdko7obGv3y2JHEYdxb9ZoJ27nEwBWyCeKNLemi5VXhoyx2bd8MuhT82dyQ6fDsRRvaBNHq7aK2ymz",
  "key10": "4mqhyM3vnnwCPA7XTXTpxa4jNPAKnLjcaum7HriYG31fdLo9Wan7YhPounsH7BMzAvR6YBGerFdf7rYJoX8bfrJD",
  "key11": "5eo3e2zBqVFUXPaorPmvnyjSM2dLzPSDwyMgn8c8EfzL6ix8CBJEZY8jRWZu98DbtBPk9u6GJHV1tVzb5H9RLkup",
  "key12": "YQH14NhCvwTGMY79Xne5KbpjZbzUh52jrt2nJgxTakgVzCXhF6adp1MgGnRYM9V5HP8WCsL3BgqytoqECk7XUXn",
  "key13": "4vZbhbPoZY32Rq6c3WdWqtsFFPpNtaFbCqAu2etpxDgrznU8f3adr2ZdFAJaPRXMKhQUGCeSKaGtLBjvBd4g7aE9",
  "key14": "2XYhLKhEKy9YLsB7VypregVzaDV91b7DVMddTaftwGU35Aab77gfC1iPwZpZnk6gD9WD8MgZKooy4JzWYcCqAKQw",
  "key15": "4MepemyLNeJHVZNhq34zSmVaNmbatFRVtvQ8prWLk7rBBbKbNSt9iVvvuipYJEvYBPnwibf5CFS78a46BHjDi2K",
  "key16": "TRFi3CZUcsz9F6EHnvSUHSW24Yp2XKaGBanjNMUYBmYTHnf1b8K8Zypo74iLTAXKKDRmVdj3JBmsaTUogLWTYkU",
  "key17": "5eSM6Ui2vrW98w6wC5tut9XsLtJZQptfHjzuktpTo4rR3f6pfhTjSmrdgfd1W9nYMhR7boutVs69BEjV9bQUEQFM",
  "key18": "5K7Yr1T7h8fTydetaVG8stdZFD92y4VVAEszybNkpy3aaMz4rDMgFaPPAt2oSG5UUp1Ba3eV8UFKFHHbXSx37RV9",
  "key19": "5C3rV7jGZouAkQ4dfP1rcnLhnbLnrPa74dZjD6rCQ8Yhen4MHpeRvAW2m6HGtzAMwH6EEAYKxwiAbsxcYaCo8WB8",
  "key20": "3xXY3qkyLn1wmVngNWibzKiEp4FaoebTxLbEgSj1TroP6NjeryTmQHBVRFUdbjS7Bih2gAsLyKcq29KLEXGiY8uz",
  "key21": "5618gFoqLXB5b1apKCwrMEegsh52JaUnSw5CbaEC2E2psdcQZZFosw26hFxwgVkQjW3nYsJk4YQXqZvrRcxX2REN",
  "key22": "5QKtxfxEcLbLsHNzibN76JgbjExS48xurg2yx8VKHBkcbhBMvEELZZVEbmyLWxggdPJfqJFdCUq55d3U2MbtuTro",
  "key23": "2E2xJyMumcsEx2YDej5QVEieD5HFgs6oY3Si2mY5GEywWUBAXJXxgsFrX3HNMzRosaxgAUiMW1Q77rexQXvq85y1",
  "key24": "2DZLswdK1WzDPbJ7UaHmm2usHZVadtuQhK291c5F8ExD5Bd6Dgx8YSx5vwUeNmN1SNDcEFiWCELqorTJib58YQKk",
  "key25": "3cKDNV8FLnuL7L2seHnDU15Ug2QFMPFa3FV4GgXYSnv6nGCDBvnBmfTPyoWU8jBsYGopQTe8ERyDiwGt1zqGy9mj",
  "key26": "3LRUu2VYH9LaWHyyCVGWXwkNrQWts59BXjG52MowxSc9La46edk1BcterTYDSvo68HPjS7yrm7wgEDVahN6TRFx9",
  "key27": "2eNFWKwNe3F7Em4eaS4pyBzr9h9oBjzjff9FS9V7quBMS9aSVvAKqiwpfdHKcEtypSmVA9fHF1qJoBnbEJdTAMpY",
  "key28": "4vVDKv8UQzvNJK9eEn22AkUCgm9HLQmdzaU84EfDwamX1xU8eLHfSs9A842JFjjpFj8PJkvrZAxcAD8BnVNHiLS5",
  "key29": "tzXhmvdsR3ksUjhAb9yzT6NvGzDRyqXvy1DNqNRka6kMqa8LwdRhW9fGoskWik1kLjDSNHVDxGLo8H4MiybS8oK",
  "key30": "5ELWZgyDxdudrHdfT4UdBLy2tVvess1y3Dkpwff24a4XBAgP4yrZz16VDC38unYKQX6dghPfVYQAqmEep5fvzx24",
  "key31": "59RsJyekyMvaGGkKQWu2Ke4zoSwh29rqmp2qsmJqWMN9KuG9RVb5fsZPPrQXe662kBmGejhaBgaL6rrXVxrjbSkh",
  "key32": "hGSYVdmNfHipSdoGFTiSKeXa8EGP2wudCgiqry3D4ghR7JzwxoC4sjS9xeWEPZsU4Dp7Spub2eJJfWEDdP7BY5G",
  "key33": "2UgjwTXdEQzgbCDDdrysLn1tbdzEAikQrSMbyjAbSKNkaEY5Pqd6rr1zM92bP9bDcNWwLw7Dr4du8gyC6RrbGcAZ",
  "key34": "35BsD84jDVqwL3rwJgpDUMmYPzkg5iSF6cPiCMzRtxurBHobCRebEPadtSfuLH742FcPVLJBGP2UBJy4DZRLWMtL",
  "key35": "vzR92NzUfjxcqEaWLqsoC43uvTsCHYhwSFiRiCuv2CzXQacS7oTurDnc2HMvBW1Bi96V2HYt6CXoFXfCVvvXUVc",
  "key36": "5VbbwLtBcnVFrdyG87hLYyKwMyJRxiuByCiHoJoySzYM6pi5bhc2h23KiFYwFND8vNWSeuQwnzaA72VUJR8bqGzD",
  "key37": "pvckE2No2h11L5w3JGzekvy6r8JVusXWVukU88DxwUaqExn8nephBeHbJkLCQ5DsaZJGHm672VapdWaVyNx3GFz",
  "key38": "4iXtYTmkEeAZyxPRXwvp8nSUBeoFx5FeFRkQfwdZ8ea6nJUcxjEBUTvzv8ijZnoc74qPf5RrDfbiquLSiGchUZyv",
  "key39": "d1xnu4A57QDRg9oQhgN2tmsj8mwAKJEws9jnHwUMvUwtGLVjz68Do3VZj8CNXfbtH8YEomhbktA6HF8PaUWMKJh",
  "key40": "2asDf2yoLG1iCFSoymuAZxcpHG2M3wham9mgzqsM9Rk113nnv6MEiPLtGexAqTVK7ZERF3eE3a2xQVDSMwsRLnes"
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
