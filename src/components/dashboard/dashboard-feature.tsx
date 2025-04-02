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
    "2keK4qPKU3kYs9EwMwX9ABPnauEvJxWsGaNxSp9DHejT4kWdJYRHzjKXYnHoyv9tPEMeRKZzNL5qPYj65XoHiD9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RATBV3b4BWn872qtMfHYGxtR5jPRmCMVZq8eNgXNtVvX3BdDiAwLyxB9n7VDfnMSuyZ3gudpDw9YXqfU6uL54tW",
  "key1": "JmfYBWH8yRkcxFYhYAZHbAVbSw1NTtvGFstVJdMk2dugUE5YKdTubQXPBrHYmSfDUPV349kazsqu6TPmj5ZBcNv",
  "key2": "3XKekdFFEW1y8hhbrcY7A4HsimwhGNiXhULhWFxcPY8iQPoarYb5ZXZtGU5F9dDr9EHkFFEbjWnJzAaNffDTLfPZ",
  "key3": "424KYb6ZFBJctG28a7QASDVHUMYXNGxjArGBMaduGhMJhQXZzh6mmSz3QUNBfJ5jod4tjQP6hWcTPvBCmhi3cLCT",
  "key4": "37c8nyLUd1vhqvzywXHLacib8vLP3esVx8sbGMk62PZRtzuHW6ifo9b6G5xe6c2fvFEq3nCWmcrmj1yCm1263iYM",
  "key5": "38huXxDYkYMDVV5bRRTKP3FQ2JJ1hYgFbc43bB9LQCH1jTMtjWDK8XoviTxTQcNj81Kgw9mycojv5uX8a2UquxBG",
  "key6": "5jVfcz2jYA92NAkBKymgTHqeQ5fYrz6JNfaRTj7Rzk9ac9mU6Axvf77cG25uzcFL7xYUPNjo46suBYm3iNqkLtiB",
  "key7": "2fcFJwwatjVfCiS1yAJ4Jdi9BUFGkrq8YfecXbJEnUXgFnoFdUJ4bNgzAenE6eQgyTeP9GUgRtFN9R7WgEBb6tc2",
  "key8": "42Q5z9zStDKkxL7GAYvD81SJxmwkR5NbuSMTx27QuLoUf12BEaNdXgFnDjumqhWDDi46pGSUKEQbTcvUBmzLmAtR",
  "key9": "P965Wi76jNLu6Tid8sQq422HLEC8gTKSv66REev32vvaG8XE8cTb9CSM2yHq4TGXQxtADewuVpkEmZ2N9YfrEsE",
  "key10": "5FHxCytXp9USou2D3qAsczhGMwVd9DhQhnZT5mqxiEhXoWpyrsfUrVribtCDisVfYfamEvmNYEmgAYHm8a6bMtb1",
  "key11": "2k6u6FTAYxSGVNABRhcSFEFUXfo2wDJ8KuEzSCXaNFM9CbwzBhuecRzvU3e5sM2XfW2H8h5tfyTMLXp1TU6SCkPf",
  "key12": "HhJNB3rimDk4rRoTf2GdHrC5pUCqBFV1YGCTNaGMK8aScgoYU2PmJpWs932wrKvNLSGcXEAeLDBALHX3Q2CeaZK",
  "key13": "2A43DdHdpWC7Xz5gJz7Sour4gfDuiRbmAgBnyzwpdkc1KHsES1Xw23kzeAXEeFFNWyKczLYmXujtjjAvAT12YfLR",
  "key14": "5JWK2xgkxyBGkmw2hW129nQD2LqvuztFGB3ybeoyvfJbdMn7vgKaLonppxsFXfKpZVTDqNbiS4YvcuKaRtU7yeKe",
  "key15": "bpBLP5WvCPZzpMMcTP5JQgi6QS3iayR9qASjaMg8WgbygmujcXV7MYM1zD1E3SrdP1qnmkDSzRouFBquKwL8zPZ",
  "key16": "3YUnATztRijPrFDt2XzzadNcKL8NmNvUqZ9GpTVzzhaa43vKxqjRZkXLrVmTAR4N5rnDnevbh2oLFP6fxJwgmyGz",
  "key17": "2JrNggaAx3yJys1Hei8AN3RFHdFfXYs94EKefV2ddQZvBMXXG129NPMM8TqXask3c1SvTJmqBbHNxQmPVZNZoYDs",
  "key18": "2i1XBtUeghmWFQWWrRmJnrkyUQNTknGyHukeRT4TpJ6bihKyA2UnhQys5yzoLSVQT8jFpZjrjWU5AZqCD5Lmh1MU",
  "key19": "4X9x5HA58ijpZUB4bXUMTRYWUyJ1spcXsFHznLoToRw8vtrEhUJGJLGJdnuBGeK6wETdwadotwj43f7MWGD3fTds",
  "key20": "EcsLvCeAouMpC5p9KKKGgshah39SpQCQ7mPribxE6z1rKE2zmwM7NFeRtew3PYGzHkXQWt1i6DVyvvyvaC1t121",
  "key21": "5W2YurBJeGkHRpoYTSEhZSxJd2VsizcGsQhoaVM2eKtouoW34YUMqWQM8frd1s2becZpUNSBX9GYB36McotMGBHg",
  "key22": "4hKKpjhN28KXNvkDaJF7xMYbeznHw2HfJCBkPUhC2GNpZ1Wzu3xfv9ewjXUK31GodYgDrkdxDbcD8YoiE7ZHkNcT",
  "key23": "2dF8qDwFZwMZRexjP6Dv3YNtUsi8aQB2RyhrKWtRBAoW1RvhzCUnyLwQSJtSHhDvDUd3VpzczuRHeQKfGy6hXJrs",
  "key24": "2FqxJWsrepRQqMnHLMjaFPCrVbws3PYFqNonhR4dZEjhLarekX5pTpdX41Riev8hbdomXNwZLPdhac1bX73w5TDK",
  "key25": "2RcbFBjMjLkusESrmMA3VLFLvpuPJdd2eoD3jrcZKFrZxJYtETVAoWEa3y9z5weM1wGjcyNRucyzvdKYLNSoynCb",
  "key26": "6kXC2SUTpC4Hz8mMFswVLcSMtB8Z4YjubT1HNKgdA3jgqMrwtfGe54DJcBS6xPMcx214y6fXn5Q5awVqCFqQySF",
  "key27": "2X6shn7TS2QWxfS3H5PmXeoyJtxrwppfCMn2Rh6t32u9rgMA8RGKqe7QdFJaw8MQcFbw8xFKW77KEDKgkPVMbUAP",
  "key28": "4teKWAHjMnX7htsjc76NC22Z3KWgLVDKk1o87M6MVSQKeRFM6PjcAaFY1HvpKTe7gdzBwJxCn6b8CVi8jFHGhyJ8",
  "key29": "YN8htMf6iN7J4Wa7ewEyrsBAw8HefxPzmEC3dKZNGZyojJG52Z6KzsNR54az8VFsjPDDQFBaS9kW1ZLHznQUvEJ",
  "key30": "4YQzm2meUUez4wfXs34HTYWmJQgLMToogoVeLMA4PC83NHqH1DnKx6rS2Rxjvpzvuvf7wndi46zVafjTEApNaQzh",
  "key31": "uNzxzUwAAgLjmYwNLoYjTRtESdYbVnJvwSkarbcqkF1hdwZsRHDksnJpeMDZKLG3hqCLgADy4sgZUTdoE8rNvm6",
  "key32": "FG8PBMgwdfdprejsuzCFiJ6eb1TLNf3Mk9Yaj4gMznFBmpoqwZVSPaZX8R5TrjJVq2D3G6yYfvLQizhRVKhhqe4",
  "key33": "4nsTeqGT2yExKc4Shh5ye227M99Fua8Rz7CmG2hszdzgaozrxVhWq8ospPVbtEY4QjSELET3VdKCjQ2m4x46Qp3v",
  "key34": "58NbDUy9XjfQetaYG1md6a4irYiUvcK7u5AJP9x9JcPk8UNPw54ghr5cY1TPqpsXG6HsPmstBF5UDpHYeeGLrRZD",
  "key35": "2371gvhQX3xFSDT4DSSrh4B8YNPpdFJ4AE9CLzZzUQyd8HCSqhuGsM4ePqk61VH9hqRg7e5HxBaBfsmHkgJ6mJq2",
  "key36": "47CzLWTjjU91bFiKLef8NfmAeucT6JHfW7dsrDFRUpHcz2b3Ka9EN34Bvyt6pj2Q52VzjVKSFhdhE95XLudRY8WS",
  "key37": "3JjDFh4wnTriDtBkCMU1EQXrbYWLyNidKAnNWyAoAHso7Et3TdqkrXnQ7AQRYGLRLMBJnZ9XLsbunECXv7VWqSr5",
  "key38": "58nwZeqUDPHZQoHp8ALceotrGK4CD3RPRUaptGAkre4cr3b813BxNydJ8Wg4mECeFzBBrZMrSjE3GwasLNHKKte8",
  "key39": "4vY5ttobpu2Ca4ZT8sRrd3YA5DGCsh6aD3NZVwP9VU9RXLRJvSf2cJXWU6xGkkMnhTn1whrnEXfGPBycRAXarx2P",
  "key40": "39h3dAMxcoaJKp6aQwwWNcfjf7dD3rQ9YxibCAXAqj19Xm6Fx9bZQ4ZRSMotT8Gq4gR3fiDyq6AuYbkpJxc8iurR",
  "key41": "5fXjXaK2FbTnKzYmBqyB5fFRip4UHYK7CVY7u3n76UwCLLRgfksAtPYUzba7YbwCh3BycfKK9yapHqN2STobATx1",
  "key42": "3gQ4U8WYVxU1wMgwWUGxhJNBUVdpxbJarEeaM43M3GVsMhEZHXwWQmQfhufK5GbwXNuFzxp1MEJpuq6gDzpeVTnq",
  "key43": "KEimSaiWYrsRE11CUeeMczEvnzbVra9JERrb63ieSo9oqD2t8gc77o9azFfSStmm9wNZc3JXzt6biF7Kij394qH",
  "key44": "5ERT61U9M5NHFDxFp7CeE5h2tpdUwhVUwU3XsjMDX61wkKbCbQyWtgyFgi1CNQ2Q233bpc4YXcNhW6mQWogJ9nyX",
  "key45": "5SU33wXBfVWiFFf75a7CiMZSeSifq4WVH637hLPnbPsCHMUzdVp6Kt3RQw2v4v2bsYbLdfoJpPcg5NbK4nZHnHoG",
  "key46": "31tfKceXz2mimSRrx1jEb2rajPA7vj839Wg7TKjYok6cKPN34Xu12w5KThKy9Zc3VTqBL8GR5c6TiwWXEXYkJLzV",
  "key47": "XNtE9zSvhu4sLqc4PjbM6FPSZkfZo2dwkHbfao5H3w8X28ryNfybwz1m1cJFjqKn31gN2awRY6PnP5UR2cCKdnv",
  "key48": "3dVjDr7bSYDcwg3dRYf9BiqJBMFvZYB8bGgNLsCTNQjvhVbN1NA6QwaFZsS2dJohi6DHB3eVnKN6KXeF3DZdabPa"
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
