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
    "4YVouKBPHBAwytgYZKpqaGb34qXuKdx3ohQSwuYtcqaMNYVhDJnnu7XVo62RXLU17LaPhq4KS7hivuuP9jWxNPxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ViMq4C88qchW6HrTAjbpnWGp8reVsJLtJ3GpuwQxo8LhWyPNyiH4PsxdmjFy5vtZW1C5EXJy4bYAxd2xkqiuGJQ",
  "key1": "HD55Jyti8cbg1rwfuM6UaC26aZvf6zPuDyGYRpg9GSKurKxX243hDerfgYQYwaXxMoyG73F2TCFHsYvLCUaWUcT",
  "key2": "o3DSFLj2KxWZ2d6dgm9AuWZ9zSVgapzJPEbu7V1pKe29WFNCF1um9rzym28fT5mxPauET7ioDiJLtJ6qEwhJfqm",
  "key3": "jKbsd7pbcnKDvrxtRjNto13tj1AcP9WFpT9q6ftcHCMjDS96duA1v3W5DAtYaUyX93X1h8bzb9BB83evVoKsEgC",
  "key4": "2BAA3FNuSJxpq7gYeLAm4BuiKYhYRT5NsVQEfUHHik8wUexnxr6hqm7KrDR9bqoH8cFDgfQpGYYRsk15RmgNkMMk",
  "key5": "3LEV66uuf7TAVa1cuja83GAfbekkvYkieTiUQQ96bKrrL3z71RJDjMBJcGTydXCmCXNDd89PsFJrhVtaLsq6qqdW",
  "key6": "3NUWDtJFqoAhfex2XNvqHEsY8KE8EwLLssCSvXpbWiUaJof35ByKNNhrrCq6CLsrZrJiErfMbQ54VGso6KGUV8t1",
  "key7": "4NY9ckUm2LNeFxAUbGKFJ1mG9fEETYdiCKpJyVR49BxH1f9BA1BYphqdwjYak9Eg2Vym9x5WWNbkrjucW8uoxc83",
  "key8": "5GqNovqtrCxKeRjG2a3bXbsAWurt7oEdz48AkMq9bgYUVT3U5sQEPFDwrBcbm11bH5QcsMfkprbyb1scq76NsNJQ",
  "key9": "3TaviyTVb2W7k493RauK8gFa8truUHhPRbqoWdmEp4netXM1vvr7717ADyu5ijHta2yxxUWd4hG37wHNDYTUkcr",
  "key10": "2NtH5oaTQNwpq8EhAncfq2k92gcD8igZmTpfuN7bcosaKb1ymmoA4gWMrL7DWZk8Tm5DgKgE7DCCnUmy8KQ7wh8F",
  "key11": "5tp2rmx7CkW8B6UNyzJiiKM5F8GnvEc9w7FXCEFheShueG3Zf7xs8j3ViUhaPTDfG2y6h1EwKaidK67bZrtGk9uo",
  "key12": "5Ew1NqoyVdMYYxwr2NYnae4foLKQ7G9VW4ZmbjFh6jrJAkvewCZbaAy5jZvYS1RHj7krpcCy3qsFoa3XvvBGYcbV",
  "key13": "3uCLm3bAw83cAuFWYL9hDLQHKgez2N3CbmKJjRBdxaRVT6msqeWbjok7HR9yX8RcpMYyLbTN8ZogBZUVqWntA9TN",
  "key14": "5fGAUU1itRMkjciqZn4tQXMwG8VnRqDW6HpkUAHdbhXkGsZiHa77mUp5a1URooXDoY7YvXKtmq43iQXxkoZpj75J",
  "key15": "4Ufpw9xMVCt1CCPcGrQT3HYG4dob7z9ydtGFTrJe9GQxYD26nHbpBR683Cqp3Rgi3xa9rKHFJ2xAMPC7dveVs9hd",
  "key16": "4CqGQRjXbN8CHi6rdh285bNDdbXPvWxfs1CvF6z9Wxg35iyyAqwUe4AM3w6ovm37T9uPh4vxG7JcZBvwUnNGBZF2",
  "key17": "2v5pVvoU9kaBk9G9fJ6zg3m4QY3D1HSFu9cPaR2DzkB2tuU1zVjAkR8Bk1XjmGLPRfjNQReda4AHEXAAmQ9fmbP9",
  "key18": "4S8FSSQedVoJCYxsUQUDgizAUWbvsyzcP4XebYEC5HJVMLm2pmSd2ZGwChm6pUtkhEV5SxtWR1TTr28R3Rb5jFtq",
  "key19": "N7hZHiQCXooFR9F26wAddcUmegrtsSmP6rNcBMTRcTj2bmHSnCp4edW9nBkUgiTPSnYYGjaTCKELpwdAYudMJ56",
  "key20": "EgcNW5AVDp3W3s7aVhgpCGbZf2NH5zVFsmKoHf3gStqwwth96NS1gwK6z3orRoR1F9ZFqNG9wqwVcNbB6TGGGS7",
  "key21": "4AiApuviMx3G1xKG4eEg72qGpy7T7WPUNojE8j6cQvmr3HBLT51Acd92QhGRF2BB88tkGkyxADYuPQrJAd4V7Phv",
  "key22": "5J8jHyrMCRKprHuTT5LFQAQRnRhrUtsfSCtZRUNhRRiuS2AUURC1NJAjyHGkvBgoYSmx7tRFnBCtrjaR3iRce24j",
  "key23": "5zm9tFd95aLPA7sP6EqubXmiekNTiSXV58hNUj1i6W8wUpVUsrsPsowZRDtwexS9WiByiAJ9s3Zn2eeUM6YwscPY",
  "key24": "4ir5tyv2BEs1qipHBUCxkyaCFwMYnE1bfxJLV2UPcVY9ynHg3bP7sp8594txHLSRuL5GoVBEKHBaR5SwXtBc8JKt",
  "key25": "zgNj5adS5S8GCod9fg76cGrw11nzC2t9gq6XbXnZKaHyyw1Eadafdkwany6yCqAZX3KS8VHferWDUr4NYfuWQMz",
  "key26": "2tHErXhx7HS3LMmH2rPB3s46JLV9aBYg97VrUdHbUiKjwcJdrUszD37TNorgb4EQX9yLELqC29tEzs6322SbERu8",
  "key27": "3e3C632R23BH9sLAvbKrvVr2cZ3gkCnK2hE2a7ZuFoERA8aRsc1KBzKHBFVG29bCLzAz3UNmiiNrdCwHRqrHaAue",
  "key28": "Cw9S7AdPE352UU7BYwPxoR4SGFDGbnb6uPfxN4PNGpoCb43M1MzhCEkCqQxmEhwpKePQvfV2Uc6XcE9ojT4NoCD",
  "key29": "3t9MpJNLety23DdudKrPJXHkL5vmJe9nJiKJ2ZLCsb2EsHkDRP2MBriWs78aAki3fehyPvjEmrqR8Hcqf28tDXi"
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
