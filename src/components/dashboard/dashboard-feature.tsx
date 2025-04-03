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
    "2v6fBaE58v7d66Dh4jkVDYoWzHdrRSyEXXtDcrtA3X5ujWuwCU1QNWmeAjTkDpfQMwurcXVkpkSEVZUnjsu7LjLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JSyAFfSPDnGks9kZnTA2hbQGyZ9bBqXj7hRPADLmyqa3DooS3BWrovv4AQfsZvYoSRQ6L1UyDSYxs1Q3MRKEX2w",
  "key1": "46SHGyiMac68VHpctPrm4thawp3Ybw5M5okMSiKveuriSLPqDVkEDJPyEQCBLtCDJswhLsXq3P6qqCFnH9KbH6pa",
  "key2": "3jgHwj6U3ziLjpGu6KJSUdLdTdC3bWThRk5xSdCxGqc32jYRZHnkLSmTYCQJvb93r1fkYcrE8yZo7qeDzU9ciPHa",
  "key3": "wMiBeA945GECd7CCRimAiCp831n5EFWn8hjpCRCHJRFTEc9yhso6ho7LqDAx6NnxyWBQEYcqAhjoyaVQ55YwH14",
  "key4": "5MF2L6qCCJPQRgkTgtdbzGqqArrfiXyacd6MbbBKkoZQ1MwjYBvDPJFncNgHQgHf6EqQY7pB2JRu6Jx97sb2q5GM",
  "key5": "61TaFowfhY2NL9mrmAG76iYmNJyCYmSx2FN9SZg6q1VAPj8Q2Wn2tKSA5kSTBFtpi9YAWzRH7JERjwpsiKFsHJuh",
  "key6": "4ZY3YHPiLc37i1dLqeiWjw7v6A8JxHLmRw3Ao8jrh42EboWfm6RphAWZTmG56CXkduuZZLGcAqkS7qofu837Ku8X",
  "key7": "3ATrd2EimyDAdCJ3GaFVDHUQ9DnvZUTzXGuydjRrFYowvXCzQCbfHdF9GhPkBGsdwB8CPYQnLAEjCBgW9AU2c7F1",
  "key8": "4GZC3ZtGfgbWDUW1tibFnB1ZEbCT3DVTgTv1j5nLZhWvQ4CRZtLZkx3uHar1pAHobMtKC9mCFYSc5CBsiRiN1XjN",
  "key9": "4beSHSVdPFATHCP8wVrSkbbNDzHxkvgYpmvEaagBg598jtPZpsteDpDsgPCq4esciZEFhqyPGUNWofxHbUhgK8cm",
  "key10": "3Gw8hJKtvAY2jWh8v7vbCGFzYEohtM1JhCLNHWSr9rSHSua4jDdrdpAKieJda1E1GRnGB8DWS4vDaXJ4Nz92rDps",
  "key11": "4VTjxetvLJH2Y4dRJrh35nEST8tznF1q6XHk8Z7EQxf6WSzZDst8LsQC81jrXniHkKzwfYauCrahizXiGKCLXRN4",
  "key12": "4tcCE5UieNGSvkd8tbk4yKZE4zEhZXHeqWPsVj7FYhGms9F2kHLwJHGXZo1cSr58eMmqxjXJgVaPBUUCqLgkuoZf",
  "key13": "33Q6Z6C4j3xzSP4jU8XFFmbS8c8q4Y5EkZrjcSmynd9yHUV5zJVugWSZp9XoVUYF5YV72FYH24CDJMLfHrhjsjQ3",
  "key14": "3VQu4istNzdLWTv1QTwEbuimJSepr6tigDtcLeZGze7ijYGQ5iEr3dUdM2dPfCPSxKXzZRuGG8RkGJeDV2oUkbe1",
  "key15": "543D5S26tXFHvLyotXeJKJNskabi8snRZpiRBDboQjynBU7CSaNdjejkSpMpWX9y8rF2yHPMSrkLvhoLw8nuttN9",
  "key16": "3GmzPDoSPmcG8vFs2DeYCdfc62ctZCidDKdU2SM342SSuZQ865vwYjvUFUdgZrQwNZW4hESvTG1rk9xW96Fzypko",
  "key17": "5tvd9MXCtkPGqs6zKUpUtJVunMg1X4FND1UX7A4jTYjnEGE2SW2RguAreUN7YmQMeTKbWbFyKnSyKURVSbXLkCqW",
  "key18": "bV9dNKFbGAzArVne9rBEp5YEGVUwoyoAauxoUiRCQ5s2WxVD5CNf8wniPQxWxB3KsXFNNng6o2utQttmmtV4SLZ",
  "key19": "3Qkj6EYqGtCXPzo8SBRJnMZzfTaMcTEgsnpcRdUpNpqRzUj8CLrVMNKaRGvHSNeY2MvyFLiAvzyUCbJmTsPnMBUe",
  "key20": "46giGzmRgsVYWeg3RLVnV9c82uD4FK92MPN3FXkfqaKL4n5mfs1j4fdtnvxX8mozbe7QoMLQakgDcpeZsvbZwbPn",
  "key21": "oZXvTTpeAhCwjxYj65QomgKM3MVLUi34hYeKtLpdW8h2SLk7Hu7WxNXgKE2ENUTgbCbyDiZYYjHMFfwy4N8LHfM",
  "key22": "5msbpuPnm7ru9gM886mEGZxNXkAmtZimHeor2kwRsn2yf5Xp3nnnkECyPKfAXXD7QCFGspxUjLb6VAuCzFN3UD6p",
  "key23": "439SFnvs7gsUq4sHDoc9qyNu95inLPJ9P4PBe5T5TW8TXs8afyfqY3g5oePKYAGt9wresF394aK8aWiQzPVPdVZd",
  "key24": "5JWjSgaet7vBxXGKDPqTN7S7WyZUpsDLBNYMQ3Ww3hUq7fa8izvMRNubx9xks5tURqXyqikEPkDC867E6YxrjXVW",
  "key25": "54dctASH4Skw94c4f9yWYjAN3vcvDtsxJmj5W3GQhHcj1kksAqK84Zo69Q5LZmAfDSFwL25ciKHkgBvs9vFi3b5S",
  "key26": "kooh6abkrjia6dDznpEGpYe84shJAzBC7i1KZMup1Y1sUZmFDx3Kks1ZDiPP7PbQaQTbK5MmrEGE1qmuK1xCypc",
  "key27": "RvVMMH1iSSXKZXQXX1bXipF8LHTJth4tz5SxeJ7EwGifVwbwavXYStfJw7gVR6Y7J6o7KCcfxoi2u22ygGHZfwz",
  "key28": "2top7YXhmPCWTfhtUnyhyWhHYQpbuW23mvpUBZdmc5q4D3JNBwHzbns7QQ7NuXjxmyxkeWsCNMfknBByQiqm4tPH",
  "key29": "2vFeXrSnC23R78maDrn8Mjqq33cGTibtCnsHju4VtPeGJr18BeJW9yxsdxyhsgtmM2xmycprqt3pLEosAKAaaQHq",
  "key30": "63X2ssbYsCno6WMwAuiWZq9TTWujC9pmpM2sGTssxEd4oQ2mTi9YF5RKeWMyUmCrmu7o5J1uuEwbKZjkqBsyqAnf"
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
