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
    "22LzVbRBq9xtmM3wJiEGpVU816jykW2cjhfXfEscSThdPSzFohYRd3ft8rwSfoXsJz3myCZtkEWn9waecThTqBPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gzniEsWjjMZ5QsoUxg1f5uubxd9e7z5uscRXxMuiTXQ3usnaLMLzuVGg8PccMcStb6M4Dqh9cx2KeRJk2xq2ATr",
  "key1": "3omVt2YPaSzcVQrGgoE85kHt48SYdWA8pei8SofobiY9AutCmWfqdtkcqZqSn34sGsKC3img2mQMkzYnECjTd9Hg",
  "key2": "2zpKuH9zeGxkMw2zY8X9evtdXTV1tnUwJiFmc7DxnH9UgSLQ1KkAA9c6Shq6WjccNQpHusMuWUMGtkbMT33QRtmR",
  "key3": "4TPfGtLW5iwTG4HWUEubFskMFjKqafELos6ra778CAUf2xFxQ1of4TBFBYSFtH1i4bLnpDBW399CfGXL1MWb2DCT",
  "key4": "24Uvqm6MCLY4eTVdEruJoxXPdgNqiYe77eABzdovJkAk2cTWDG7kP99cVdPfarS35CikEPy1C4moWJcx7A4xydKh",
  "key5": "5DURJFhxq7w5wZyWA1kT6Q5eyU2bPc4568Cx3xaWgAtqqBZktufFkMfBjxmyBKQLFz77obzo5FgF7HfeeWMd7ubK",
  "key6": "5YsfpTbHsvKBsSpsRBRekgh61ER5vvKNcEyHxczSowXVQ5dniAbwtAqx4j6Fq7zLESod7jiNcqB4AAV8m4V2bKPH",
  "key7": "3wEUvBM5YHe8XiKHitGLWr6fWEg6FUpHAovgVNxdrEsfjAJoh4RpF2AFhumvcGN7L9E1JbBnNib53tT74ZDDqxN1",
  "key8": "4NDreeB7bUD2Kf988X1FmtY3wJ37Dk325TpCssp1UtKimRM5k3KrmBUn2SfQx12wiQF3ZmWy2NxHZfWpGH2CK3Qf",
  "key9": "3Dhv3h6oA1BwGPs59eHwCwL2YpSRKJGhC1YQF1Eb8SyNZXsd6MW8ZdGjxLCYiaStMKMLgaSFkwojHsHfqZTVDm5F",
  "key10": "4CGcvoc9eTiu5WXuR8W5kbUikp1AyzCqMeLVbSCH4LpeGwm24vabQRF9tqvUZ2mrhMcPBKELTRX1nmaHNZMfner1",
  "key11": "29cBVjgHVS5rooiyrFWuEHWtBWuxZ5t8wmndsfDNqtipM9TComu1p6N91i25hgmHUgoP3tQXiJ7KJpT96Jn7nAmt",
  "key12": "3thCMVV6TCTpuLxu5DhjtrJeQYiGn4h595wTqRHGQQLfKAAMBTN2pydsbWfAeEQFtfWF5mUzNpWLnNncezawjWzf",
  "key13": "3jK6PwkFQc3PpWkjfzx2gdyqf97TqyFnKRVmaU1kKaMrkcgsgnapg7Lk4JWvAutiKpt1rCXdggFJRWN9VFjFPJuQ",
  "key14": "4dKNrAyuZqA4nmCT1VWT7QvouDbPwPy5nYWaQChgGmv1MfJHJSa5s7qQZxsy3sQRKKKuCfNNfzMyKb87qxJWEgJr",
  "key15": "468UVViK2rkuv6gJcgTh9HmMMqc5LY2ncaJhYPH2jcvbTzMh85hA24r6aDYjSFWfJ2vgfXuLv48KPRuGArxcpR2B",
  "key16": "2TfWwnQmXuTgLhj2pPcFqxeQAm5nzJShEy6WLC331D5E2LPTK1zRtotyWnyP1jsobsiZuBxuKaTPxworFezsUkHZ",
  "key17": "KVvwuVcBL5YBEcaC5rYJ4gHn3PHKxuiCASbMAXwYWtMpJ6RjwsN1NUVUGzEm6W6FTHvRabkCxNgwCbi24zT45ij",
  "key18": "3mMeFAvNS1Zc2mnbKmgMPUkqW3mwye5fyGXX1sxbhpu2nYYv18azMs2cf2cBbmYxKKWWBKCy1qNV2K7zjJFPohth",
  "key19": "en6KVgegzLhYF2eYsqK7RVB3t2KN7isxZt4ReJD32V1fUkuSREUGr599ovNhUtQbA5UyvS3egpujnbMWNKxDFD9",
  "key20": "2ZxW9v5UNLRvMhgytPFKXKSKpkQSmpTrwz8sY622gm3hQdNnVzytiwQ894VX7axV1phsM5pviswAN6TiPQHDbfAS",
  "key21": "4khavjupGfMPG7moYW8Azarb4q8FLgbMxuVn36eHVW7Q74tXYbsFhLRJ55Qbbjun434NoJBHSpCeXygsGybvWa4R",
  "key22": "2MUTLRvBsTbfcVfgi1yPdJhpXQTE7NPb7z4ZU18vL9DSMqWpT3VYXxekgEMaiy9dsvPSBv4mv7B7QKwd37jXPDiq",
  "key23": "5R3FeXqTYMwRsfNnwYe9baKPZYgiYLqPHt91kBkEZUYE1WnhZ1Bk8xynCJhMmazwA611azTyNtFN9MxYtfPvzHk1",
  "key24": "2NfsTBFAuSpAkBR7Nx95oNyme9yM91yM32TMPy5V1Tbib6SBgm9UBgVEFtdtdB3dzCG8AcGtGqrqjpdFqzD1fssy",
  "key25": "4ahAjrr5yA1puKYX9Gg3aJZXDdNYXMmdpTpRRjrDM34vmFtZQoCx2o3NntdVFg4fNLtPYcJPvN2T5E98d2qs7K8T",
  "key26": "4W3zRY7zAtgPXzizz7sEu5R39RSc1V8F2LaYe6VFEyuPcAXZzZLfFZxFtGDfTJihdPYkhJ61yBAkzZfaik58Ho6c",
  "key27": "4Saqky1CB8EtGtfNsL3uGCC1sgKDyqLf5g4SfxigY1bFL6BKGRNcoeEC2TVSptGsfiBeGzpWJmdNc2vFasmR2ytZ",
  "key28": "BmoHufgwo1jw8ewR6V9WteckyrMF82cPJzyAA5iSstCivBx35xc3hcBb8oApe4YJDEj979Tx3cz4i5sf8Xgd7ZA",
  "key29": "3SVg9KHSutWfo5VVCoHhXNyHgNNqh7JXPQ2NzBAVh3pZPhVtcPyfL2zmSBBCAUrj21Wd4yvfZ9np3yUXorGiAqXJ",
  "key30": "5zbtUiJc5tpbV7K4feua9T6JxwwjDFLCxpcaVjRZ71Hsv7d3EhGJZitphSGhoqEoXcjVmkDMKPGj4pEtAySoHNjG",
  "key31": "4Rso4mVk9bm92cAsDdJL8LYpxL7MsRLbjhmhK6NyWGYUGcRiwiJ8VTacTwkt5s5ByGLj3ssNdCHnnWLtLJhcwtgj",
  "key32": "5ab8TZfbTeNXepzijziu6eL1uE4Cg2zcmugQ1aFCcDqaZogjKUP7aZA91maP27gRjeZftnQmoshk3SvRM1QGwCkw",
  "key33": "5wwcujR4TUqEUopikdciFiEtzx6d2uxYdSfFBZ3mXPPBigq8TuwZQQDQwnGeXpBVyzosC7QVjsXjzBkLJNdLvmoJ"
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
