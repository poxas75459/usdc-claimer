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
    "21uyW2onxTrA56nGw5rotoXdkKBpwMnrsNNom46KvshG2P3iKN2a1Fv2asEiV7ydfFD1pdGUHXUNgd4hppH5zvwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bNTdBe1D9ZUTj7bccU8DXDiQjjkMgVS3Wuj2B14REjqjXq1jzp3eej4binF157q5HyWDf8i4Ae9bmmryCQyzLVQ",
  "key1": "3EjpKS2tiPkYsBLcDrfdgraLJvgoQdKMuaidkcFb2Yyds7uY2dFZPVqLTszBaVobhsXh2uP1WGfdP5soxTvvs2fh",
  "key2": "5VtPsTuPfvV9ndHEVpToN8hWomXeygwEbswiqMmaxHNePBC7sNrj5oQoiqtYnwiTa4eAe2rvua1WqtcRuDGLu2re",
  "key3": "28BSd4tgbtvQajbUftzB14pRQQXaN8F4t4UHfDK2H1cey4VerREdX3o4osfsoZxHTqs1rYwHvxawh2oiRMGdfJfH",
  "key4": "3d3heMmUcqyNpFESRbXMLrChmbnEFDRQB4WBzL3XvG5UMhaqAoJe7f3YkYEg6XtneGiRS7NWJc4JMGqn5YRsk1ks",
  "key5": "4UCnBmgur4hFNJGB8sfPQVMAmz9Fk9Tmh89VedzqZrekJev7ExtKFeqAJAgVd381XW5BevFXHM2fL8ZuXdb3bvZb",
  "key6": "2XPzH7Bi71ZHodGeMBy97vs2rnhL7PMg7va61AwSqGMqm6UJawBAwJZLpW3cCtN84PdGKWaawHYKornQFbE8gK5A",
  "key7": "3eDUaTK9Yk3DR4pZFtE9bM23tZ7x9uPKeF1AGeU3UtVb4K2z6SEjfrmM42e2QQyFcGFrssL3GmnPGynoKnrXmpDk",
  "key8": "4Pn9gBtX2LEFH8YEzuzf5Fvf39b8morN6HE5mVAL3AY1S3THzHaRbS5yD1RAASXyRtDz2PBgbFcvHmbgJn48yD3s",
  "key9": "tThkuvnP6xbme3fcrdS5fULy7TAAue224Rb85Go3h9czivdngNTJswE2f7DyZF2U3UaoYc2AEnHbhNN4HwAb5jV",
  "key10": "3iXXUEqNRGaXhZJu43TZfZMCKqJ1thTzASpWVWMfubBeKKfwwJe3SY52uCecKfxs1wE27T1oZ2DfmMsBifzTNg5u",
  "key11": "2w1jSD2u299pap2JD43h35QNETAxgBLzSwHjAyvxWpW5RyGbSXSbwt19vGtDp92Lp9Zy2JaB9F6WjCuLffV5BZJ8",
  "key12": "5zS9Wg6N4CzYci66fNHx3JUDPEH63g5poL2koH4Aj9JYnLk9zHsMwc4TMrxd9kDJrfWZZUW47TVsKWaW8G49x4Wy",
  "key13": "3nbvH5EUPrH8kkJER7brnz1viDytaex1yc3X4iyfc3psddDbjckqrBT2447YKbiDhupgMjrM2RR2YTxV6TTPFhFT",
  "key14": "5JDnu1YKDpFTD5a45NavdCLLuHjy8z5FuS1BwftMR7zbzdzHazNtQyykzCvxvtsmGoyiZzGEYCfJAnvw7cu3ir4V",
  "key15": "4cxsHzQvNFYgK2uR1iJyPqQbaSDmBD541ruJVQRk68M9o8E7yheQFxovVdv4YUGRVZGka3KLuRkKJQ54vEtYECcK",
  "key16": "64hsCPKBKmLKz9S4CA6U8kiw53rVypRTxdJU9Vd3U6btZBQheJStQ6ghRYjZzhtE72d2jtxgmtCKL6xDX2Rcindg",
  "key17": "5pApPytBsYrzpv13ECYwiHSFZdh4aEckWhbBm8bfP93jbVBJxzmZa8x6unLtFyh5fWiU9wdm7z9uPzxH3eEcyjAU",
  "key18": "4eEEzv36nbuYFCF7Sdo29yotNZCE2JpwVgPMgWrXTmcSimfztbS4qdqZebeJzMEdCV1K3o8ZBQEhwkpoPUhWwfFW",
  "key19": "4QhAzgz7GrarsTMfXKwEMc75sD95WK2Xf1CekpCT6GnjuLDLfwwqMHkxDff8witkDBfej3Ziuq18hwxbPurdc2dB",
  "key20": "5az62ExjMPEGXbi7HmSGg8PTArg9bVz1wi1mDUyLXUXPxnkWKnMiTuNbDexUXjNkgHrCZMPiKjtWAJEE2UwyCza3",
  "key21": "2ijYvkLG2GYbYDhq66PHZTTKLNGxLzZA7k6fRZeG61L7pSAwnnwMrSNiiGkpZAUD3v2JyZPPvnc7EgtAQH4W1cA",
  "key22": "3y9HfuKmTn611GVTyj53Kkp4c4c1x4uaifX53zXPmRxyLv9TPs4XjdzYrkh3Qm4y1kbHTGkYu6WSEA3tQesxAmPn",
  "key23": "47ZduWkKL494Excyq2pXmGVpwMyECkJatXd5H2PKBJdo4RA13BAPV5ExwcCGnHwEEBaBDMJwSEibC36e4kCXm3u5",
  "key24": "2GkbscNPAaMR8p5FS8vwtTuY5kM9rncxwXHyCAWebo5HPvW6yCFCXHPrTuQ8Z4KfZKAskRALZHZ8bPy6XrUPuKrf",
  "key25": "4SKivbzvGMbUXuxb2pFxMp27mQ9MhC5UgWaKstExqzHts5xufXLNqsPL9adxwzp3rKWpD24g7goXu4ouumTLDVmN",
  "key26": "3fLGAZcPYEuFUg9dCDxtBzs9aHMU6HQiWmDB7TSHxYXgdkoDGFw7vDeeXkXWbKLY6wUKjjumVHvtrdv3tZwKEPr5",
  "key27": "5KzAoKEncvYhrR2V8hLa4yuaR4bpcBfzL1Cw1McYNdD5BP1BK8n1dGrPadGYFJK3Mf62xtXLE91cUVgWKVV4osm3",
  "key28": "gARb3MWQprNpcBkJr3uhQk1qms3CHC6aGWi2pkVyN5R5abxhUmYpjfjdu8H3NLPenTFgAnD99NvJHpfCrxydc4S",
  "key29": "4tPY7Asjn5aehzRKAehjAzjZH8StW4CkqeJk318FUqgrHF2EHGfLSsqp7oi7TAPRwfEwiAFwHYCxx1z1SvWw2Evk",
  "key30": "4aJuF5jymr9fUcPjz99uER1zHoN8wvKei435JYRZT6bGRQXR9EG8Mr7Kunb8owaSwwYNG1QeSveKWFeNBiotvjGG",
  "key31": "2axoWZZfh8H97xJoX2NDacb1jngDFsQ2MDisiNkn3Sz3uwZMgruo1Cg7zuF88yLmQhP82CpkygjktMaMMuh8z1i6",
  "key32": "1hKSkcqEkqMgPNyzSpYt7T8eWqebkjsUgcdCcj4KBpo7UQVrhkq2v7XdghuiDAmvRL4ZfQn83aXBkGfgjHkKyU7",
  "key33": "5C6Y7Pnm3on5aJaWLGJBfRpwWrsX1YYTHkCPur7XU4MGDN17gAcH3qHYs7nQL7b47dJN24CuPHeAQv4AGddhhvFM",
  "key34": "3H13sax1W9CNhZJHQHMJxQMowg8DiMjzrPsZjFb9y2wPBGZAiefpmcDfFeciqAVY7J6GtECWSY6Sz9yDX5H7f3QM",
  "key35": "4a1gPWbfPomPSKTgjhLti8C4L3Ch5daNrWufqxga4GuoT76xbACj7Wwvo4Z4gDjntt5LJZPy4KkCU5KBSNJkkjvc",
  "key36": "5eDMT8mwKM5EtaKSEYdZCLLNNfXXsNeVm4S5wxcMkNkS8LQFe4kz4dJ8XM1wbHXxYuREBiuxE9LqhDBJUFRgrA6Z",
  "key37": "5pHdWKQtBLjdzP5ZWzmX135n5VVmPXXBYy4edgpbtQjAFywqN1aPj4yPyqek7oAYm47u7gLg1vzqoGrfrxZY7Paq"
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
