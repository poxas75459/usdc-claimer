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
    "4Ut5ZpfbfdRvQGWnAFxipkCbbiZMaWxDTwypQH1FzKjBjuVuV8JwWNbuqdom6MgnmCdMhgRWXLmy8HXp8aRUtckz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RTCRu6gX7sMe4kA6tWRzAbqgXStRa4b8rFrKqdYbfaofYrdnumHuiS6gspKYrNrAa85qBGMq46omESZSsZTVVTj",
  "key1": "2yqTFD3sXg6rB95hjJMhdzUFLi3PtMazJ2xaHUHojgGttAMPuqzH2ESJRUXdkN2WGb7BQJW6oBeyctvTaVDSWCCK",
  "key2": "3pxZgsLPwJkNVgmYG4mbrhjxshxto1upi2dd5sfBiwtYXW9683eik1dswB33zZqt1sH4wkuw6FkQKbQY2qo7Ddeb",
  "key3": "fk4aoumywr3sfs6YxdrLe1r1JHkm7shKPfM8iaXjTAeQfsiEfdwprr6ZFv98cU9dnzkEmuUw9ADbfuvnLM2at2M",
  "key4": "BFeE32gUDZUJkpcNmMtyEmwS9AfaGwWawkcWCJaAhwWdkkQQUhqrifsedVGVjMqeCC1C72DZxy6eewoE4xJPmsh",
  "key5": "2TYpymUGFzkGW9k8WRPMDR4VMD3cEShcxDVC2krAaMLkkYWHA1kR99bf7GTCKYJhLY6uVj6cdwdyAhFzYoSE5Xiw",
  "key6": "4XwMgWop6N5FsrKUULSrkvxyrTm27eJcbxQTeMMwcjaQGJ23Am9DzJCc51RBcHbz73zNis42n8X9GjhPdvjUho8G",
  "key7": "3SCJYiBQW6QR6ZUkZKF1ekCSN8qH2x6wjL6p334kPwnYtdnDStL4M9QQ1vgizE7cV8auygm1oHhDEYmfd9uCW6N7",
  "key8": "3MWvcTJaWDhXCnctzZ3rN17fsRUgyKkB1R4oNKWzJKhbwMCLYP5oFMPKEqWfjieEgYfLXJKe4aXN2WsbC6pc4EzT",
  "key9": "2pfgw3HPST5c18Q6c6tMoNntb5gRjvjKiBsuChsH2AnEzX5Y6R1YJFHvSAWydcmSYDa6MHYZ9VKLbXPTYahvLR44",
  "key10": "29QfdnPMLAy1RGWe2UQpVzaiC4bq8sYtGn8eLHdLZGmtT5GmrAejoTz8C1VFoWAeCyBJFzfPT4zD8MPZTKRUJsUt",
  "key11": "3HobMZetcaHwdq8ADHBPRUafatmRjonRZsfPxttE4d6oNGXo266USqiLdgSyTLb8hPGoxY7cJNwTeTgKaUNPGY9f",
  "key12": "5FcBd9oKXrqfEeVeJpA4yok9bP2MFnwzbAYLXSGd79AbadEJPWoYygV7xSV4xDoDo93NBu6LDH95kU1FfkMdegJk",
  "key13": "42JTPte2s5mh7SNgFKc8CXGwMBAFdZixj3mH44ZqPZTc5CbinsVHfaNvPdG61yTHkdTcWKp8GUQU2zTgdVCCGDoe",
  "key14": "5QPr4wBC7vhHMUqUMrzgUYxrESWPbMYhUTz5MogxhXf4NFy3X3DCkyEmsis2wiVJ2SgsMQSxd9NvVj9iB8Yhb766",
  "key15": "2B5VGEGyMLdGs1JprEy1Axovo6vLQ5Feq3uy2AJhHyj2MmfAnTUqVicBJNf23nxm9XPR9LgSNofew5gi7G7iPoeC",
  "key16": "3jiZFv2RJmiUmFcHWg21SWSx5Taz71erM8ZjMtdRTeWS8GJVSUMnMhMuywGxbNA7XFh5R7BEX8epVrnaWntGdfvF",
  "key17": "2yWEQGzzF44a9yT8ZxNsSSVDTfB2jFDVTk5G6m85Vf2SJJxtzyAAieyMxnszHFXBWQp5LjN4WZpUqNqLLd9BmyYq",
  "key18": "4FQr2JFZFd6HzGVhkyzpULsfv2JnaURK9qCeSfTeksrqmtXxs36vBpunF2p6vxqikEzvL8Pu6rBtykN9Umb8ND4P",
  "key19": "4UpabY89jx2AofzT5wZjf5TGWQ1N49duN5C8H7cFFjeFxrbWbykmLMjVozD6p6bE174fFuRRPMMVSWNcnEXxcRV3",
  "key20": "3QEFjT7L3F1LkebRqajgvfxR2aVGHjUACAYFfDUugjvhAXDqa5AYR6W9uYr4Cnn8z89GvJHhb32PHZn6TquDS4Qe",
  "key21": "2c6EMqJVPyz3bz8dXB5efhog8C4nSqxHwcByjBpxPx1S4ebQ5Pz2Wv64rVpVvewhZ4h3NE13oatfQm8n7L2NhB9q",
  "key22": "25nK1VtuxLh3UD1Bcwf1DiQTdq41LmenevTLt6TCg66RwNKai2W9Re66QfEfwZNLFy65TC8WnTo7pdSroHYeyAkk",
  "key23": "3DPbXjejNybG14PDW5Dhv3fJmV2vcoFdJhjjBwwBNxufKRsbFwoqWK7ahkVcg99e2qf1QR63do1SewD25e5XdgmE",
  "key24": "23Z1AHaZCTzRLUVBEphfWDudG76SxcHuxccf6Ec5GrcUXhYC9dfATDuMU9tokd2Ft8FhAQD8EzFou7Z1YmoCqnie",
  "key25": "S7K4dVeKftxfdQRudXAyhNoya7SeBNm2qPLuh2vtnw4Xcmfj7mcQoqjcDBKxF2VWGvRFh8FymiCykmEB8zSNLh2",
  "key26": "3YT6MCdPfV8RvZYLE6672vqwSPBYKgpLQPqESUHzRCs8AdBwsRJxGAKL4GWDYgXvqiq8Daq4cbaHAk955qaCqq2a",
  "key27": "4qjSzamkcEt8rGHW6hHkpa2t9ac1oFXo1hkGMyaEhfN3WvB8WRMZACgzCMjRFQ3XYhgC15stHwZJWPg56UAzZr91",
  "key28": "3qUtuwHEKLe6gb3pgQ1RAXL5TAgjQNoJNtL2CmaCYJ2Pe2pdc7Ssbf8xzVGqFXwdzdP8Hoeg55K2CjUQaykYYBoF",
  "key29": "3UhEY6PRioDY7tRW48KPFsjGrrce57ViYxo2ALxouK5ie1KRMgqrMnJJQEaU313bLAJkUifZBvtVK75VgUq9NQsF",
  "key30": "4HXfTq9FDUSKYGq2WqwcECxw8v3kebD3czY5cBb6LoNG55u9PcvMtsmbh7mJHaJaPeTy5Yuv5g3JaNxYg8tWdXe5",
  "key31": "5bgbdpmkk4QL2Fdioo3xMbJokShgkiu6cvD3nTXooJfXxY2QHo1jr42KCDVjXi7dY8fzjbLP46T2kRZAzSXVniMz",
  "key32": "3vGRy9sLXX4oLWZZiiFRi3TrGq9GViv3BsWVzUkXnSvpdJ7FfMZ7juHFsNSiMdb3bxrQgEZ5XjjpRhsr68t7CZwk",
  "key33": "3X25nSZB9FqboYbKLr1xGMWmV4yLNorkmGeLVqbfvR2sCd7UoG73rZj1orzy7jCc4YTK9WjYgdaXhJiUdc3qjSw4",
  "key34": "4k98ZZSJmRQcDaLMYGFGp4TMohcuHwGhRVrTPysxDUDC6HxZak9znQbcyjNCVvqAA58hDx6NReRBdxpYKjgymKJP",
  "key35": "2tLYrCv1CVzqWKUY8QSg7B36Q4bQFJf9UPqUYxMVpAA5mxZoYD7iycGbv2T9yJYKCE5WcveNv7QrNieEYAveYccL",
  "key36": "4M7cSJNu686ZbHf8XkXeuVsKSfQR54YuDfTjfttogEtE3gPGLrsgQwfB3UNBg6NQKBYwzvUFKgpVLb9KwEeNbStE"
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
