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
    "5miquBG7bDEf7JVpUTryBCfSw9uZHs6tod1QrPew4zRmCGC2sQ8B2tDdZfTE9QPgb3zQnzfoDnr6oX2cKmyaK3e5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cqq6Znh7ct4Xdcebp7bCjpVmundPjXpm7yVKqqy5JqU1CRu2Q5EvEQ7ZmmWkugeJeszVBTxagLS6wq2wnZUFAiQ",
  "key1": "4Mwzy2Fok79MitWppP35DAqt7vWom1Dv3idttuhVbz4t6ciK2nidecARN1UsyMMDqVGjhPkAwPb59eUxmk2CJd2",
  "key2": "5bPCtgcv4wmJHbVLZkRPh6EwwrbtPncPDTXne2QrNBtzCrwqZtGbuorvA9RWkGEu96mJ6jrAdCbrPaSV3pzBsviW",
  "key3": "PDhunwESVf2D8j7uHWnHJZutnV5Txqg2j5ZzhoT8Ummnu3ktdpopUqYdiWT5nWX2QMenUtjqLNukK3ia3Unendm",
  "key4": "3B41RYKpW7BL11RBo94LHZ6tNL38wYgZUhGBshsngBfirgBBK1Bs4g4KbGSbmpyw4UZeC7hPeD3D4jfk5eiYz2v9",
  "key5": "65veN1y9NvazQPXfFhvUbuRxNKYGV2b1kK6ZDrWiLnFTFCYavYwRrwNDvoFyvV8qtgyq4w3KgAKFynczmpMUJQgM",
  "key6": "5PyNtEnsgf74DWuWW93tzHuUz6B2Ro7hFbZNgYTKUZJLxa8pz6ixMyNyqyZraTbJE6gfQ2xRrqaxg541bpXPcWif",
  "key7": "4GqUCh9EPxUnmfG8nBBcm1kp1h1CNpf2XT7Ur9zLsCuX5TH69yP2rdzAD3HMDGMVTX3KB9gkssnosY3hknz2Ay7b",
  "key8": "5ntV8MrRrq7Rs8pq761SM4C6Pi45HTeRiqqYfP37VfvJxDGyup8H9XeMsP1MN38L7qGoR6sSpd1eepozGLua7SR9",
  "key9": "3yfVSaJr6VzZvLgVN7QX9ocNpHnZ5aZ3XLEbnBeH7RoDubRsuTfHPDXoGUGUc7XzL5YsTAqAm9GoCgimHrAQudGW",
  "key10": "3ijh6Dy9zEdXb1jMt23MKbCfWaEWnPxgLnm1asP5eK2vMjsyM25WiHjWaFj5yPhGTSzR2m4pTYurdQn7peaGuYte",
  "key11": "53EWDp9nb92aLJqutzvxJtzF1ueuTS9pihPM6r3wZ522S2n1KNDazUR8GGVDcUsnbH2UuJUbYJjmYQ9RfqU85AdY",
  "key12": "2fseKSnAxnaF2LzN9aYg7MfLcKJPbHyJSaMtJDSVhAELdXJfoDJz3yocqE3PxdDHGqyZMsJXorHBnA6PAnLUjg71",
  "key13": "DtA6vCv21tDpf4VbQe2feoqvUdhBNrHykNNp1spbKe6PLMNG4c3BD8P9dveXKJnCqhWmDwJgka5GABdAH9xrFQp",
  "key14": "o3Bgw158Tf2wwHnun6CPFfYXfBhDosXm5mCiwEH156iY88zceTR2uiVY2HAYeqhUmFt1rTxS6H4yVExD1891Ujz",
  "key15": "jPZpx3CYR5pzpetiEZxpQugoHefHdcmmpQ72pAvY27kriMuMxuGMThPt9RFGu8R6s25ReQCUx4ckUrDj2VrFKRk",
  "key16": "43Ps83kPemDE1p3Qnkcto5cKhGdbSdkF5uu8RJndNkTEVowgSkXf14jY6G9x9oKYEQKWv8Zp842mC54bAp8xYMHV",
  "key17": "MemDEdPcHRhLsbdsmQ2z3YeXENpq6XMmtu5q3G282H1w64PD4cjWgVBrBDEVgpKTEKEHv2bxd7VCznXsWHLYKdb",
  "key18": "55DyQxqqZcyGRBUV6hc7F2yU4GxpBTJBbgoW3oh6Zu8R2fozD4s45w2igtsEH1phe3C61EXH1Wpmpc874sgUiCSX",
  "key19": "4ZUEZ8YNM1AmiavKpD47zgAGrLNqMN7cgm1UDTdNwLNmMfLAUHzUPGkJ26Qha5FMPPZLeGYRyu2g3ZDkJDQ5Kh4b",
  "key20": "5m1T2NUkuDaWyL3bXSmwnbD7iEEoUUVxyon51aWr2pwgAUFLB4ekVetZt1q89wULqR5j6JeUVvtiaETzjaceJnkc",
  "key21": "35EuJPcbnevjExT1vRXu7R5HWfn8ntTDeHuPwhtqs8xPmRHNRKhFqPjJoRz3X9pAAziceURJX4us5QKr3wUciToz",
  "key22": "4jf78ph4QHSoGqykGFuPDgdHXdyARw65QKQCUaninuj7SUGyTqox3v8kwsUWGM2NBHdEngVEh3TSqzSvZEDGPcSL",
  "key23": "5ESyGM9mVbKwkWUo6PGw4SqRdnkw8ZzYEKH16sTY4ZJPCcZhVg1KrfZ41a3dMwgF6a9Qy2ecspkhsBABJQLsYEc9",
  "key24": "2xdzed87iDdiLRpd448sDWKYWwvon9UTLckG9dSoZRPhoQu3375szoSjrrKCwcHMHeQQW9jfJtxgc5aQgBYt7zVs",
  "key25": "2oRd6oScpw4uRYg3RXQEX2rwkHXCUiZ4F9AgD6UUSxJodEsXWB39zEDCsteE5XwhaWWcQUsFvDEeMKapWgzg3HgB",
  "key26": "nGf2J5RfH72ruSrTbQnEoUzRdC6TKEEpuoxy2WAP1JodPrDfhFfB41uhXPkBqCDpm9KribCtRMQmCSy9mSK2YRJ",
  "key27": "44GUdismfioGPjFBZbGApKn1Xbpn5C19jphxxwbAzoAEShPQgQcAjdXdYjWXoX2seZCa6epKE6Y4zxMyQmsgA53o",
  "key28": "5wtLjnBMTmDFZdJPHMBXQt7rRAeMTQCQHMiZPBzjQJzQSrmPRVe9dgr46jomffzcjRd8hZRRbpSsNArsJQLiLZC8",
  "key29": "z736Xk1iMr2VLztCJmrjoVWykkuvkihDEFgtcCJWpfXh7rvSncG3zsYqmXPkHsNRHJVnBPGrJVJaJqpYX2Q4oQ4",
  "key30": "52QNbB2Ziv64GBtx1PdGZ67qg9tp7cTqvPpiNx7nJfDudUZuKWGQV5FsAn18QLbpHmEvgNFUKa7Pe7QrfkegpEtk",
  "key31": "G79KFM2qVZojRrPifr5NEYe2t3qF8eenqzUm4ViSqmYfDFf2bsws6WbfpyoF1fabABqqwKJELMfTdbTwpaQpQKa",
  "key32": "4VHC9YRRrZPSHeiZgJEwWTTDwMoDFz8HNFtJ6jF6FnqitegVrVKnWiRqGe3iKaJaqKitx3CgqvK14utwZzj1iAMN",
  "key33": "5w6MmjLc2tMzd3GsZPHA84nBS2wWKy1E8NY84UZ74gDHEpjsrAQTexEffEcYBNtoYXkeG93VAjkr8Ja41WTXzbE1"
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
