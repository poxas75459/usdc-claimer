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
    "4ge69B7Qe5Z2mmez4FfKhSABtgZZWAqzaxQLPtayirmA9pBnMEVmZmbGfcvShde1EPUKxSXKhbs4jRJiUmufAjsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qjj5SMJEFR28iE4s3V3mGGsdXmSD8y6EqYVX5GfNTmbHtG1xK2EwQHEsvL1FPxYsKfMV8J2Ryea8LCc2qnnz8sY",
  "key1": "qWeXF7BbRukVcMe1C4ssfQwk9AiLQNBNVmUnM5veCqsjwLcUsqiiy7Gfe9Li2thu6Poh7dhM8NRYp4GvT8NfXAm",
  "key2": "4mf9zPhiJfcrrUbTiEdg1h5swgkCT6SFqi1jZhnwRYQhgqwTU8JhR9ChriHH7rKJDVtetgqTSy4MwPx587SufDE9",
  "key3": "uuoB6yTUFdpbPrefmKd1zF4sDvWsgixEybbCn6YBCvGdspU19n47zZV1RebXLDv77jcNHgWs39DsSXmyGn48AU3",
  "key4": "RwYdpsV4URicqrmMpKJPD9qaZFLzeaVoEPHrwYt1nx6Y57FWYFTLUWHimLeokzgFc5rWynd7bwYhA9arMS28QEE",
  "key5": "5ivnrNLV6V2KuMAuu6GUz4ZLtv3zF9C39dxNVC3iunodzZ6pHbcPHGz8WXe8nesd3TtyZfj2wTLUYNLG1ZQjsdit",
  "key6": "4cDro8yERACdJB6HjN5qdxaM5WdFJPdBjmQhzZDJuVDb3ku1Njs4uMsahUaVZ6ppfG9UCyPCqfWA2AuedLtfDvo5",
  "key7": "43QdmjZc3PKtjqa8ydbp3wR6zLXPAvKQ2MYFEETjaEv1XrJeLgvDDERdBsTXRqMJE8GvAenHhFdjoPJhfK7eZ2jA",
  "key8": "5NbZeQucFxjseTc1LmF4bkhwhHx3GcKx2q8Z4BeK7RUkeQL3Ti4PwvnfC84tMCdLeLgmA121zZKLyaitK3Ced3Mx",
  "key9": "4THNzncL3gM13qmdb4YescaZxas1CofXh1TG1a8rkd6gFxNNxfJmnzztFqjExZ4aPMFrHZ6Xbogz5qp7CQrCRQaU",
  "key10": "37N64AZn2fBaM5pow5pPwx1DPQFpBNRrh8SrTGAW6K1TFrGbzXcDk9q7btjJbsqTkbmSUBMdeVLub5SgYHkzeZQL",
  "key11": "rCdDavFUWR7LUbCc4kv2t2t4mBkm7tG4KE1nzfUwfhWcaAB9aV6hKZiRdJo2Z3i2SLPySHPeWxpkFhAm7rZ2r63",
  "key12": "3meh73wPdVd9R2uzR8B2j6hZ8TqrMYdKPgLuwRtSy1FUSwUxnMPhmMgyHauKFGGumZLjiJejF52yYqs44AwRUx4o",
  "key13": "15A3zppn2ZyDAgpTmR78chP6qrY2vCZwspciqK6nFLd2VZFfvddE9eP4GSMvEgf2H4xq9RcVH6mcTZu4KsfHdDc",
  "key14": "3dpmNobTK5mzthREoVtFB2MimjvyT1xRMz7c39CHStKSuXWdRVDxhgQSjcdTik5je11ceHEWfbAnWqPMtf5uMRMH",
  "key15": "6UUbiAkLij3KnVFr1h31BwaZ3VTiB3EzV5bEwfnspNGaaoGjQjqxFPimHxTXPi5N9Gn1yFGybeVL35xTgLLwm4R",
  "key16": "2p27c8hWC1ew5YCPCBLHGwUTYaMHFxqmRNVhj5WFb84QZ9D6s2Fk6BGSznK4hXDfLSS2apvbFwpmcMtEiDoegfJw",
  "key17": "222oFgCqxVxeqFW1NAxpvUs5aUCGi1xCrM88ofyztUbVe2N2Yv9QPKVX3yBFoBPY975RP4NV6cW8rQK3gqTUve6Z",
  "key18": "2mZm4e8gTwa7HeT2bWvs4B25PrDrHjHhgbgUuptwvQnUhYYi2S1qDjMvAVc3PkNEYAM5puKHnVmzGoXHxFbagbQj",
  "key19": "24eVCLCUJrZCgrgmdWnAEyFmeEyHeKTtktSiJsSm4eKZe6PfnhvXUiy4pr4ibUwZHRE6iaPiSkQdvLArVir6N4Jy",
  "key20": "28jqP67xEMocXpKuWQqbRwVYHMK5xLDV7CToKqdFeCGYjkzNy7SxNzW8Y2SAjKJFGbre7HNwqVsMPGv6eGLs15YP",
  "key21": "3tdLqc2c7nFviJ3tW7GW5kArcm2NvaEGbbMrojCCujHsGsRWq3v9NfnijMKuWjPAhtykfk14QkhFhudsStuet57r",
  "key22": "rz5ND8F4n3R5QFv5XFQuuRjE1REHgz1ib8uNmTnJA8RwakAsUvKKK8kca9KNWwyRdcziQ36swfe8y7j5nVTeU7Q",
  "key23": "RhouLJQQ9WhkFtbjThC29WugZdG3jEzsHGbiUftMuuHacdehxi4H5HhFypAfmXFHR5WQLUwRs2YqHCUTxZUFwCm",
  "key24": "2oxQA3BvbhNX82MXYkyQCcMtPcakekzguVPSkgYzRZFEmp6V8YLqegzSM5PhsvtDx3bLndnaEDEiexcKM23aRNsH",
  "key25": "3UH6Mv44pWi9LGgEsvZsDL3Qvtsf5Z5TdhTx6gjyUJ6sxNspCHRjvGDEM4CGNoHJRow5DuBUsXY34aSLohYwQz8p",
  "key26": "3US4qjAbXBRkfG2BMAhYoUBwb9DFt4U7qaCQJB5YanVDpBVVfz8dLu9Rdk1Nopdj4k7p15BbuMAq3QL2Dy3kYdBs",
  "key27": "4uty2jF45ivNUeExmtkTfBv9WTZbVJoDoyEYMGRCx9PVCiNdDYrRD7hWSwFsHYsc9fUuN7RnHswv6hoRrRFHcznD",
  "key28": "2sRvcYayioV9upLR6fdEqXoFT9uNzk9aEbmotCqXUyA9xkFX23ECrdzN88LLCVu7S8zF9uWioqE41yHwYCjUdfib",
  "key29": "vhjwmoytXdsSEPG8ipnEGunucnJtN5VqCWrcqJnhcyx2bnKxXGw2fqdSQXSSuCZQZz7FNZShAQf9jWPMUHSgKTU"
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
