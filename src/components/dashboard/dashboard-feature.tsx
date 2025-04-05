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
    "3Hd8Mjo3EkKudw5AJFsMDHhZEnKHwcpKXNzbRyvBTJu7HY1cxvwUddSCYFPTQVemqaX3HG6rszMaFfZ26kvg8Zi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "421wn1Fk6SGQUvpVdUyBsRJdeZy3T9UHDdeE4sHBbDq8ar5wFVG5tVTVA4sJ4A1UegK6FgZLgMwf2YF4gC9C1pco",
  "key1": "5udSmgCBzaFRamf8r3kKVHPXXndtx1sWbNsWoe16fhvn1AiKQTRAfDPoXoQYqnREYRnEhNL2P7Ktr9B5xs1Vt6Gg",
  "key2": "3EGPArqkm65MWdgoNvCKzeGUkpoiFe2SWUpczWt7PcxmF8kEdE87EXT31RFh8zNMj7jyzg6ib2frm11cFTHAY99y",
  "key3": "5Mhs4zBHrZDCMLt8UFY77Mpq8LMigEsVFpRQQj2ZGrGZ3eYfjKmWBpeirDZYeBwYaj1YLXBGmHqt89F2eaULTkhA",
  "key4": "gJHdJ6rDhRYoBxdpPqM7tfocMqSk29pzHkcWinV8KU2Gc1dqBF3B733Tr6Dd9hHrHiBy3r989AAsV4GErRDWEdV",
  "key5": "35rfr5chjbXCzZekAxGEXzWyRH2Px7XuWY7yF3XFgchLa7Yv8WaYnvVd5dKu8a7DM479jNb22mym4JRMXdiBuGUa",
  "key6": "2VSEff6S7PsTirLUSwuBQFwAvQ4pQahN8n96CzPuFNR4BiYEX5hJc8jLxZTuyPExjFf6PaAj2zQ6XDR6nBQcnnwQ",
  "key7": "5eDa6xRstDa4mHnkEg7fchzqjFX5Gw6ubKstAXKaFEvgjRMn3v1bccvg8iRwSg3jZsis2KCgTNDq7MxPUN8eL79b",
  "key8": "gUNs1rhencCcvxKy3TQ6yoSaVt85FiPFZwepbCdEC77UCiYJcg23Po4eA5DUk53ogWDyTZ661EGib2TgtebrZdp",
  "key9": "hvszatWKwQuCfTJrAiTjuXoSyZ6ikDHcDdsdc5Cht7gQkjKZpDoLx7nYAmd7ZCKdWLPTGT6e9pgojdFVejL63xz",
  "key10": "5gWQKbR2kdudRJ1s1rdz7h7MzjUMTYbzzyyTgZUScoxt1qgciT1rYTJrQ6FKnEUfzxMCotvHVuYzC34ofcPchULe",
  "key11": "4P2VNcwZqPUBMazCkeZDp2Bk1gTq6REWsxCZ9r1XYsmCyViM6GK84oSRgNpTu9oDr2gYy3DcQCi8NLWEm3UyumhZ",
  "key12": "4xrEW5kgExMnE9NHCTjuxDxTj637JkhHJMyEMghn1Vaj5yQ9fD1SqFnA6dZSigAujA8gYDYM6zjvhkaJW5hPvzV4",
  "key13": "5jzXuFFZDe6QSTgjgGUPbQYHBDq8RstWtfF15CXCzsyAyNMTJ4La5rciZ94ZJ11gM771XPHc7yVTbj4LrLEqUGrw",
  "key14": "44p8Vex4LBLCaiJEmFyrvn1ovbALjTRgy7UxXLBnkpMiA4UTpFaVU7t7mbLkkfuPQtcuDiwH4EVoaKw56QLxBxAD",
  "key15": "4KGuwiKamKzUUw3UpLVPkeprKC2jbysq3WqQZUfRwASRkHTrB4XncMsnYFj6KxeNk77wwVMSdexBuDbxopvpC8W8",
  "key16": "5GGZQ3kh1ckcKEThPC3dRmzTnAa2c9aSrkMBoKoNvYWiQ49L8pXnTBwwArfgpxnJ1eP5R1SRjubMK1raGtbN62Ja",
  "key17": "3BrLBwb2PvCU3gDv94rqTHFYun3mUbepXeBavwiH8qKmKbyTSG2Nhxs1F2H9ceFS29RGuPDvNTsdVC1NJMiJG9zb",
  "key18": "pw4AukeCC8WkT2SEVMfoUXQWEP5uwWomYfXrnH3Jy52wiqEFQQw3yh2pkPRmVT978CSHQWCiZBQDxWyr1wBLmSz",
  "key19": "32f48CmTY4f4zVr2mPCpLpecXwtk5s4P7QHbZKJY6pLWXTfTfyGLiFgQd4YtKeQvKDGVwmWuHfjQhdeVsupXTBzq",
  "key20": "3jM6GyUepMf1urJcW6mV857vyugBpC5ZX9bo5kwG5SDHCR1uMxFsG2smrFEP1LoBKk2e8ZjuXSQcxUB2x4Cn39Do",
  "key21": "4sQVh2qxMfE4mpKnGbZjXmzFpcoNHL6kkh6u7itAkJncqKAGSTFRgpNXtGLBqVY1WM3w3QDzZADxwHHS5jSfU79v",
  "key22": "5DAKBwmjGydu3FcaqoiGGanfTdjZXBfYkqXwBQ1mDdzwt48UL1bJzQw6Ypc5YSsAwrGNQ19tr1jc2k9UJ6jHsDFF",
  "key23": "jwNfwnBZuouV76XsgQgyZ44ieqzkYtUenMSGiF2WwaRdTVyNKT7Wx5gGsxP6DxnE8HUTQmNVoTs3t8YGixwCT9U",
  "key24": "2qopCnCBxM1kqaPWWwmWUJcfnmmcy3VmvDYjR36Tek9ReDRM7hqbE7tiVmQa3v7GJTysfoReaGi1BY65CcAQKGEW",
  "key25": "2bgN2FCBEHMkijLqE3Q2TrRun4DxEFUwL7QE9aoXanqADsfc6RpwezbQ128XFDJ4AKjGAKpBcFPRRoFyq4rxSc4B",
  "key26": "5BQNhBjD2vLJRS48Kds2qcpFxbLnn72c7m4JddzhFijhUPGriMAs9m8Hvbe3wJdLQ9fFGZxXhibUL3rXCDyJDhPe",
  "key27": "52WU9mfMcjNsMb15Sfs1fzeKVn5QDBJaJG8MnWUzVTuwEcuVKzfQDeETjMykVKwVogbbfK4DRGNNPcmtbXeQSXQ5"
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
