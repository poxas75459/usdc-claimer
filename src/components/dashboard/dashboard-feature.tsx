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
    "5SUh3eqk5V8hYMJxdiSwDq7ka3PConCBhn6qnSz4JxZ1ACJhn94yaZpvf6321NHdsrQsxwV8KmvmMaoVkVZtgpSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GRaKMFVtq2XhZ3kjPEpaRYkUF6ts9fAF16arjGM67zbksfgj43r3E3Wa6gLRy77Jmq3tkBH1vswXBVtGmYvoWtD",
  "key1": "53nP1VFR4sK6q7u1Smrrx7ovcjqUdu6yt15zFVW8cVUTD7mJCUDBLNob4N4aub8AQNkQaBm9bv7AnHBdZL1NAVCn",
  "key2": "4UxYBwSXCGFjaWfurFoJ9jG4pgiiAaJyET5raw1aJhiTDVGSp5hGGkv2gL8aEDtiKCGg7KYH89hFdtWL9Gg49pEb",
  "key3": "51dTEntrJ4oP8izdajVC3Af2Jde1sqB1PiHNKr68jz1cnuUM8zNBKRVyUJxoUZVpcK2L2qkQtR5nY4uQZHip26Rq",
  "key4": "4YvCmmYDjhPXTrsjkMnsVYZQZbLFXbV3Qcrmtw4fAdvhjKrnNjAoeKD12PZAuo5y5nnbgz4Ky4pMveWDmYWNjtRT",
  "key5": "58Yfg1qhchrg6bwcrK4TjzubCEHWoaN4F1D4mCnWYdYoRBzJTCfF3xNZwQTLvA73ehMu3pbMnNQVcCDhhKnwE6QP",
  "key6": "2D1axLxcRssXxpdjQgErsQmoBGhrvZDq14cAjoBbiwNYfWE6h5NMnp2ztZXMr22uy1ceMQ9NA3GcsSR9D88S2EKt",
  "key7": "3ePxeBq14URzLQCsDsbTMxo2zDGusWeMqSud86F5aKevppZBnhmxWgjT5YJTH7uWR4EgbymJy6qwed3MjDjCbJqf",
  "key8": "647rord8hgk7xKJSXVCqzZo2RwNS5GF2F9wMo6DmVHgVnZd6yj71jCs3qdwNeUaNim4s7W4SWgMUhfoscx1GjnME",
  "key9": "3EzzsDha2q3GeS5tiaV3ZTbqgo1E7JVWKxhkAE1BPucJjvd4YzMRuVHrcBUir8NsGMBedvyHyeq2F1ja8KB15T4b",
  "key10": "5X73MFTzXzwYxrZxRss4F8gy57ySChFCLPzwMefpBVB3ACBgSAX8bGQkzWVsitFt3TcdXTeHunyNwpHmGEwVVPeA",
  "key11": "2QKccypy3DfBeEpfCZxpoCk4zeXXnCHx4E6L1UsJjThRwi4jm1nRHYHFHd3EAGhKP8AD62xnFU2LFemC7LfYW4Tk",
  "key12": "4Q2YcAkPkb594k54Pfthsq5M9JX6Sx2cK4oDBg2yUGSEArUAfMbNFPKB8dDE7wtgvRfFrm44akifzsZ1YR8BtkNc",
  "key13": "5kauhmrzcViyDyQnJ9tz4bNRweiVJpX6LYuMnuiBfXktBFrpj5Hbzn75YAwwaubc7RdchX9QKBCFuSrdDjDoeAHE",
  "key14": "4hxojjfADNFhUBKGr9W3nNLUTR6NZ39J2f6dmJdG7oPH4Lu3QsFo9e9n1CxeUn78XcA7wjtedaDmBpjyNHsvw3UW",
  "key15": "xz72BDPGeQaZ5gpTvNbYhWkdjcTzfMphhUYGuLUXoqkH6VxpyeGdBeC7MDSaPgNf5Bi9LsvxXDChxKuYgDqHK7S",
  "key16": "34UiATTiTEnTPiy8KyS2cvdUyksARVhsXbkgfGxMWSFGFtUBQ4sCXhVBDo76JkGv24cdgXzXScrxLhLjWwASsSqj",
  "key17": "46xJzt3H3wTzwJsK5Zea8nSmSpz1oTZwGJk1F2D44cKfPSrUmZzm31oqqRXwz6LwVYdPPbnpZ1jKYxLenpJ4ApXT",
  "key18": "ugByByJy66kDaBpK4TfSmJRKr4bXhsgPzGLG82ipxUzBD3v3wwSsoCFRq5Qju1wPvvHNQkQYqhCLU5cPtcadoEM",
  "key19": "5yMiQfqhmo91x663maBVrmPwhNerype5iHDHE9ettA3dvbyEbGTYmwbRvpzyreoZmJYGnQ3vRzoxujUyhtWqvXzT",
  "key20": "2gVyHtj5qJZ9H45vofoxCDzdmUQXDKvVNVVayafU9FSfPx4sdyqZBTHQaZnKptMUTP69nrXGJBLdYp4mPtejVmNg",
  "key21": "2DWtxpMdV9rAGYLXR5k2FsU8AdUiUJfQgwyaq377UwSZnHKDGyfEEwyYKXBc2ZGeTxE4BBR9CEuFUA3rhgxvrD6C",
  "key22": "3A38aLVrGpChq3Rj1FDKmyFrTmN35h2M8uAgAGY1JrGLW1NHH57ca9NrySzwegsFXn21wr4pKDCqWQ81A7JS1Kxi",
  "key23": "5N2Jj8DPNB3cAKE5jFiFHJsF62Rn88jyvvzRwbn9KvMQzcUe965cZWGDqtdxVjNm1vRG2gZ7HJffMTKWKUyyDfjG",
  "key24": "3TDNZ3z4D2JxpN8ce6FX9Xstmzf4MRL3U6Bg8rLQuBeJCCtamw5NAUZ19Hn9tyfEWteup6YbShnT2nLdQHHDjVxw",
  "key25": "3joNF2TAiJdPx1uCmr2Lv6Uu8LWegVqVyhYZoEWrrD6HtSpKxhPrdYebLwmZykaNgFmU3Eui2njQpMFXR31Payjj",
  "key26": "5hZQWX9mKwkeDzsrzdqK8kL4LxHQQTNsMiJ2iF6r8JSpqziQUJz815V3mhLBjSmEEznpGytjNvXMxckSkELkiv1T",
  "key27": "55Mjn93b3bUmWEDvAwhdxWcJuTPGtdMdcPPzQKrx8Gz4doWSdWg94cK788Xg5yDHyBNMuYBbJGDCSs3RbeE6EXL4",
  "key28": "4wuH8NXFMrCMDb8En55UPxxK1pCjfLdqeVHnHfhasGFLmnCfzYay55mb7VHdawWwwLUmMTrmdZKrkfMPYyFL5Hio",
  "key29": "39yzavieedcsTCvJQLWFGcXLq5kvGgaWL4evydwPayWKB1EaiFuPnBWKizMPa8eaPF2mG5j45rDEww3SnAdcViey",
  "key30": "66fNpwvfq38b5RP6S8QcdU47DJrq9CAaQ9KoFniV3eriF8hqSsPMTWyCZEHUJqTbeTfqrrToGJaA2bZR3xCZG1CN"
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
