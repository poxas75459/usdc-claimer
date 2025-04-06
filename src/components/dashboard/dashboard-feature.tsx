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
    "59EDvvANYJfydJbM7srMSTgY4NRDCvXitH2nTDcpWv6uV3qY9b3MCFVmB1pAJe27hNY3AYcnyfNveqwNH8xdBe6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CNQ1PgARW5z4hLcneNXgiePWQq13hiCz4h6VSR7KPsZM9GVMAXZwmHN8PvDZhpuGKDhLC6bcKUuYizpM1wUbLUA",
  "key1": "5HA9DQMyK6AQb6rEz9kRWCtURqCSm7oCthd5VJnyjPxjn9ZC4oFkzqhRxMZYSZsiksSJdK8Vq4mCxEqmceZGgV4e",
  "key2": "UGb8cS9VeRYortATowmabcya7ztsccC4fbvo4mdAeWDf5AXXf3d3NQGb4TozCxPgcxSNgK1GFu2dcXrc8j12uiw",
  "key3": "48ZExFReodLUYZhqmtx899BdAR5T63YZu5ZgvK7pzXUtiBucxceeKd3NwhTkF7y2jpLJQTyUS21bHE89EwakMgZq",
  "key4": "2JF45XvjDewFDrkSuSPJdQkYnc12Aorm1tY6WufovS4aELU3Goassp3GmSBNLtrP1qEcLrApUNHujHakMAbbrgbY",
  "key5": "4Ym6A7q4RBCeu3VLJRoind5Tg83zZKxtXvBWyXYeKA7VFuK1ee27oyQJcsVcFZFtfm6VrUJyoA1veTZHtXpN5wz3",
  "key6": "4H4WDnwSt7heRwUKCu4pu28AqDoRTpm5RnanDxXtzcZTt81vE886sVrGD626bmzDJydYq4hBU8bXnLGUZYNgXZv7",
  "key7": "2jrLK7BBZjJfKVhHrANeMbWFQCx2o7gYYqK1Wr1vdUSWzQT9LzK3zXAeHZNYek3P3tUKr7f1bZhURMscS8u7T4jW",
  "key8": "D1itmRgchuRmXuk9K3Ff8L9NyoVpPDBUwNFaEgZRovansAYFmM4UE9aFLDdj8VZkGi8dcTGpEECw9w6Ky4E41Fn",
  "key9": "4G79MsNh15PtKoMKfZ1jo6hk6skWEsWymUYTDWhpFBW4GLXwFmHGsGYePzMGsMDn6wKT396Q3DxA5xJCctxpgiQH",
  "key10": "3xNAbrRvKwkQcMFh7kzvh8Us8EsYAhmykh8tEWB8nYAQiDk8eWBDvpTQTuj8CpCGJkds5frZ6NTooFZEEMvHX7Jm",
  "key11": "3QjccF3UXXRzsfwDbqh7VMhueC83ddZxnQdaVXSMDYSwrPbRTRnwTQp16Jc3FPgHFe8VzGHwGBNYCF9hPnmSUo5",
  "key12": "3z5jKvpnDFyXao3ZQDR3wZpmo6ah9PTfstYe2UkyzoERhVVPdAVMt3XrkNbiK2YfGYtaojWHdqpJkqHigrThKYf5",
  "key13": "qEMW3ELaPPJcxUQmKvPNbnW58xaWTvMpdHfd6QtJjtv4iYKrcagT9zELdsq9qQX4Cdr667LgzHtrxcB7pRNWtqA",
  "key14": "VR7bKLyx9tnF7bt5HX22sB8XLFHatdFCKnmcX3q5WW3aseYQ8pifvkMk2KMWJaPGM99LyL9ifFnwnfhVduqP9WW",
  "key15": "2ioyGyKUCfR6ow2eiqBtzu73J4rp3FHtX1pfsVriSMB9nXUhbjFj7B5r6jRz3hKhFAK11mkUx1Jx2acdSqdePmxE",
  "key16": "4HNussfA6btsoUYtqChs1m6YyDUCJCGCBarpJCLYf42rtkiaTJfV4jVP46LRXUZDKoT8tFdHm3yNVzBwYz7rkeFn",
  "key17": "3xStVevPKEFetVumqxhL6FMPX2ZGof9TAZVp4qhZ5RP8M1BncmmVQrpAPKsAkEqZwsGEX6L87F8vwCxxdiksA6ZR",
  "key18": "3xj6PfMnqhbQ5CM22nf6iXZVkzeNY13mNG7AZPNsh1y4U7thVVjkrx7c6G8z1WKAeNYkwpVwhrGMkjdMhXGE6cTR",
  "key19": "4MHhDmHmnTtFkBTxNZnGWDFWkQx2rysv3hdZtUxK9d3jSdjHT5QskUGr2mNaoyMwRjZy3ebZvoNaLPsuNo2a4eDT",
  "key20": "2p7qyLzdtLUHEEajWcMRsZ3RpSpdksxJFGoBzG5cEHS8nTMx9FS7YjAUATrFKpXQBu2pMFqJJjm7HhsRhKotLYVo",
  "key21": "2Q3MCDeftL7BWkgENM21B9Pz49nFJpHL2NehsCHSt8MHG3qAvfbL74Wc7SzfxuWJJWnrSMf2dDUmrqmKzdEyoRcd",
  "key22": "bXqLJjMvd51FToHfSwhEiLGN33seTgiKhJCCMZQYT1xDbhQMPnQpEtSqjNvc2UDEmJfuUAeSh3EXD4b3sgVCg8b",
  "key23": "5RCgpB6fERm8nN6Fdab5yoqJfYZzKKh2hM82hwc6Pqw5KviNGrNwVLjS6eyrgrZfaQ4gAtLtUFudFc16aGFm8WZe",
  "key24": "814nMfkDebQrgb1rckU5h7i6mAuiJY7ahQGnARqL97fudozJMvq4odpWnTyNvjqw6hhZbdjAF8KCXqHJHCs9zmd",
  "key25": "5QG9GPKCrTXoQzo4tpeJzoFLqj7QGJr8FudexxN1kTQ4Pe9rZH63iMd7fgFfcviVAnk9wujiT8N4yXW5uxzks6va",
  "key26": "4oAWivNgjdysVo2Wmhs6pPp27gwQ1PkoLGM6jq8pA6hr3mmkt45F3f3MyxHuonmtN1MuCGn1Cy4dr9k9nRstwUpy",
  "key27": "67ByC3GD4WySJRGekd9MKpAfcbo8WKnxSePAgJrm1XjeGKSX85k3E7wbGLZLd3dpaxDVd4Dv8zF2rfMjNGquJqQA",
  "key28": "3d3NVTah9UZq5f2J4VDUhvD5dCtVYwcRLNTPsFbnAduMEN9bYr2iBUXGF8fMyr3xj1RfLmn6iXQUUwkgQLzoQiua",
  "key29": "5zjswcVktUepE9kBhVZDqtTT6cQCqafxxQbCU5vY2Vmv4PdGLdddnz5ggjnQRaag9kXFEjkLC21wnaYMMKhKgyVs",
  "key30": "64keh1gJmaS8rckdM5WDqWfcZjKw9aMwaTJEZMnmEBWiUGHZecg9zzD2zLA1wvhbhD7vS4M7xV9XF5whroLV36FU",
  "key31": "QAFu4oNZ4vFoxFcy8kuX1hdUcF8NHG3V1gpdX3EvNRFJpYYqH7CD3GEyz1VjZhfhGReS3RFDKdLPzAnK6YhQXsc",
  "key32": "64H5Ys5zqbPvQ5fqEc6RqcpmzMPg2XE7UvdAdt7KZaHHCE6ctSQji3PNPvYyV2iW4hRiZXeDvTzJv3wvpGiiNpkD",
  "key33": "3pTmqF8VcnCk9SQUL7z4aPt5bbVBGKGTd2Wsy3hPKZkvyDH1dBDfXwXuPi6BBxARpYV5qMeihCLGep8owwqAkQZy",
  "key34": "51u41m3oEYRzL1NifhoFLYkSMReuomZSNTPeXcGniWZ4WkK6SNyvT5KsDz7s2pnKdrnNmG5m4uRsh9kYrbZCCNY5",
  "key35": "44cH3ncabdN4RpiwA9Pc64wANKbTMyrDbCq5NUCyur6EwNbUVRzAC9fw5DZ53DXdVz7PUmzu83FsYiFbDeNx1iCS",
  "key36": "3ruibJb12fRBUTvuW5TTk1HiEwVemHyn27EhUQrLeaPvMN5UMcU1xHngqBbqzskGT7bMQwHDSd8cpExSzWHNnZrG",
  "key37": "45Qk5CzA6pJRU8xu729EWvvw2yddzyGVqAVWSNeZvTKzdK3bJi5EDovWvD7X7kVsBG3dxQy6A2jvv3bXrSpX2hDS",
  "key38": "4dSSKgzaSGsLTddr81kzMz71RzoMGuVgYZ66AFauY1DWHkUrmLnv1LMwBHt9cigBqRiZW1reH8GHyvV276pZE9kH",
  "key39": "4X8DMFKopoN76oZP1DJJCuSWPj62WGKodjMnJSA1d8Vy5c3zGz9gVFmydfre6N5uGgjGda6VQAK9oqRVu6bA9V93",
  "key40": "5NPHpYcjqpYVpPq9GoNMkLxxLmxecdvrAnbqiuuNFEs1XtFma9TU4EbXfLAp1HKB6HX1d2Sx1nQm22oFA7gZtEEF",
  "key41": "4wT74qbz7BKsvtbrC6Wu9kBJsScct6RwWTDjURvqicQfnnpQk8MbAuuqns6cMp33XAEsCczcoYNrUiuwyaYB89wy",
  "key42": "2cjPFaFeXdQbF9YcKXQSVzga9Zm1c2nwhVpcuCPMJK4AFs3Jb7BR9g1Uoggv5jyArFZTBCHkTBhcVcYxiwQKr3CV",
  "key43": "3nuj1RdaeHV6Lz1vm7WaHECJHZ4EyUTU3QQ2Ld21uHxi2MUZ3z1cVRt7aQjUnGqoD5mMu96uxBwunPPHyVjXE6qC",
  "key44": "4DZeka2J8x5XpeE3tsnpiD2qvDzrqRqePhSy5UqBVjqPdAQUFEHhVKh8Mdf68XMLN8GSi6xbJxVJmTdq8WiP3nXS",
  "key45": "2UzFSZ5c4W3jBcwRMoemaFmpsmE9hxKxDGCGtEoyHPTvXoAcfKHuyNUNwghWHQGrj62BQVdfWS3CqzYbMBEaiRdE",
  "key46": "s62ySwQ3tBRqhpxWgPYyMcCejRrPj9WXzKo5kuM9ugXhaVzwoTU4KGSPRfu8Dn6sNh6FSHvJNKffBfxgoWcg21e",
  "key47": "4wGwYMBsNcma8CuCxZRrhSUvPdVQQC8G43GXDJ7QRWZsioLwizmv2rrDPpMhW8tDT2U5WCDQed7RTuEk2YkVGnP1"
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
