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
    "7zSmGLFuY6dy8i4mNXVX56yAqWJuppmsz48cT6V6M4dem9tDcAgirMCikS3FKqQsctD4tmSmLFoM8J4CBSsUUrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HMahwRTbmm7PUsA5m4G58V68a472D44UoyV5LgDJSoUm4DTqwjFuz688Y2uTfc49y9RN1eepUq67dWnWmAZK4NA",
  "key1": "5HLUwQpD1B137FRP7zRTnCCaQXrJ94ZyoJTnRg8dQR3fyJSNxrUnEUzR6q2awcGT5DnYCqC9qzWRfRTLQfUPtWu",
  "key2": "4Co7XLaxPhtTJww3Ro5ETE1BTdBT2ssVh4Cc7Vyu9W7h2pkmSUptdAvjns2rrgd1yjCP2eRidztQPhsN4h2DUKu",
  "key3": "29AB4EzZgF9yMdVx7eYKR2HzbUmMZiC1W52gSdfkXjo9Kh5HL1DMaMGvebRfQcRPZf5MCska2t22cH5mdxN2Akjc",
  "key4": "QSJJpQzrdDxJ6qppD35vFurzjZnEPzzE5utLEaQH9sykfMB32YenUcmH8paoQZvRWT2RbcyA1Kcn6djw1GP3Fey",
  "key5": "2o87LVG7hW7JEnvnAGTLdY2Tm9QpYQwBGs2f1rnMWbeRe4NNGUMJSWbiHFMaH2FtHXwpPE9PbnS9jRUEusnzH9pZ",
  "key6": "H6imtz4nWYKsLG6KXGpYkG6PVsoLWmTUMysJoCvGc4SSCaaFz2QCGjzRh4aohvGsSuDBLosf4WsXe23L1eAKmey",
  "key7": "4BPJKTUnZ5FbJWJhdSGjGgct9oSmgPWvFuyWSGd5LfctkLmabFeaSi3qJK7MLya9X8jjBjYv68nquMp67yVTboR6",
  "key8": "3FHNrAbD9pm8LZthqVQttFWmLUMQ8Rkt8TEyobzRspD2cH3RSrwD959kx1bjyYvt7szsB4YR1hs3a9J13SU2XsYr",
  "key9": "5vPvDyf6M7yUmEzpQ49RqGJRKHCChwNtkh289KbVeung3CX53KzULE1GBA8y7rSX8ZDLcWwSYcDkcgZPwjGDqPPD",
  "key10": "3JwyUiyqnndcmuzcTUuh1Uz7YhkSXRVVSQNTbaataPHf2e4H8658r6TBJWnRqXrftdzPD1xu9oqaAShsTJj153jC",
  "key11": "3xMFkALT47koDR1xxGyvM1KEvBkgog5GJt4HCXQoRPjgx9aMRBt7vADMUoMP4qnwc7mMgPmXvQJBE1X5TMSAJDYq",
  "key12": "46VQJssn424dhgRNP8LUndFBpTvE9LrUDNnZ7jjANecnVq8dCeyYTtbbLtD1ExQtqnyRAm8T8Kz1DkGJnRtW3eGm",
  "key13": "5PtmfZp8KbomwxN35f2P5qjdHrXu32H7QwmhWij2XfY1KSWaNNDXYvEfnq5QkRjyCpeWxGYU2oQJHcgrYUyGaMDC",
  "key14": "QS1XtwHs2K89RGG5yvHu2E9JFtqzEBjzZnc2XDS9ayk71d1JcL8H3EMDXUVAqDrd4ZvQ1Hb4GcmTbY5ihLjpeLq",
  "key15": "5wx5SuheiSpfiAqZLsyDigmi3XteGSwtw8VVifSZHgqUMCy13DcrTxqnFUocBR9e7RFiPJEqRrbyQKUahGozvZJv",
  "key16": "46USbYD65hndRnnQcH7ekxZTJhVkMGVBD9FaVMKnKwGcgEwjCFkng2YB8XYVwuk6Em4cvcp4G8wBm5yhthJqfSBQ",
  "key17": "D5sVieJXWD9hz3ZhvA7cBbWwNTgDKmDMuEFhzdcuEd22Tw7QYzeBkDftjZHeDvjpYsphoGuZcKjFrZRYzLkrzxq",
  "key18": "3be15pke47mZ1am4b7mEo1srpwrkHu1TjDGGBdvNzhGGxJayeGvcsfPN8qc8rQ53DGPPBjHpj1EKEcLjFxRkBWLY",
  "key19": "23uw7yntNajwmBapvQgDUKpZhc2rwgZNfcfywARHsTiwmGHHbuRJfz3EQSCCKuhNcNo8VtiJNGr5JmJ2V9CpWLHg",
  "key20": "64gjBGiEoJszrinSEJv1n5ZchGvWLfdod9GqjjGxXYvuqmXEdrwgvJiPx1GB6L4JGyYsMuCeYMoASBrNVmH7ncLX",
  "key21": "4sE8w44PPx8K3HvTWzzwyDoZVnow5FmeZauAvR4z6SJ7JZFKbrDQrTvVD8VK2dF35Fo7BhCQNGpq6eXDWKmiEeCd",
  "key22": "2SaYjyp3Xw9Pon8Cn96GKs9q982TdZc7qb3VFpyfDHNowcrhifU8pVPSZkGhdeDDfRgChycEcajVD8DstR47TYzd",
  "key23": "237HNoa7PsNcp9PN2whFSRWMJLW6hyMXknr2eKfunjK5wBSnuokoUMVRrcSNMAxEMhFjTfq4g52ajkiLLeW64FGR",
  "key24": "2dGK6PWYNWgxtX6iiv1A9ugCga6cmvNfMN5n2oi6jfShpNQBxXAhYQtHThnYM462SBpAoyLPgzdP9rYYjq2HuBPX",
  "key25": "cJryTyLLA1dtxvTNp7hPXg1AmPHgKU7FrC6Ztb2LXcacu7wAWbedXRWTg6yKy7iyAcGbhrGVDToehkQ52YsSnVL",
  "key26": "5i1Bn6e2LRkLqTWqhiFuFrtfRCyp8fDCxEXSLXgoBYUtRagwxyNDrxoWNchMWUHEX8cJmT6wfSVZWtGvqR4fSVZN",
  "key27": "4MdKdBdXpWBrvN8ekmvcFHvgCk3n5B5Ps82RUU8VSDPEJs14qdZEsnGgg2odVVUmF75MSxN4FwmEQaM5Gq62DXR3",
  "key28": "3cQzWKe5z29pVmgGdv1bCAvWThu4pGFkTjJuJ6K4G82XJCGzhwka3yCUNg1jU6ZM6UvbzzXqgSYb7tE4zEgDuhLp",
  "key29": "5K2ndEdjUzjmGQHbBR8ru14ENEv2NAr1YZXKKy1Wy2T7kWHcXriRNAorFQUbiS7Nukz5D3js5uc6shxbxNK943Yt",
  "key30": "5z5pTagGcby1fzv2QPHwPd9fsi8RkRj5EUugkvcQD7wyg9UaQxLEQ2MigFQnDcVhcw14EPUmLRsBea2axmXbngRb",
  "key31": "4jK2uGdFk2MempLHSGQH2WcyQKrSaZbufCs5TthQTRozFhaA5pzGoHjUYesTEs1je2S32xzPY3KpccGWkved5eBe",
  "key32": "c7xaD877s6pSyXi76DMJi38PezZqKrSEwnr48WfUowJmw3uagb1fEDkpY9mHoRrdDThKT3RSfopPjxd9xSz5qzs",
  "key33": "65aosPke62xX8Pir6s3Pb4bke4HzzPbLPpsTEkiZi2cERjQK73d72Exhvz9fNtLGgQrMhNJ2ASAEcf5AopB6PkVP",
  "key34": "5RC85g8R5yNdj5gVNr8UYGDcxMvvdyQEn89SyFeUDpXNbx9ndN6f53NvWTJGe9r7hP1HU6hQpR5u7pJZ6dyjcCFZ",
  "key35": "5HEpdvf5s5GDPq9CLzgEHhFjFy2LRMezLgiK6SGDiRP84u94TjbAjaxzaW21uzzrVDFT5bdmoTJWM6dBFUfNFFT7",
  "key36": "rg6xcLnBGioboprHcvRVm6woZdmTjoMaPknnHZ3FCf3rwH79yfQpgPjUGSvTX9qc7L5pHig3RrGncxzTtYSct2o",
  "key37": "4gwsKX1Y5Nuf185Sge7vYbvtb8gRz4rpumssbTTvMUd1JSUhSaYtZMidb5XHDMW2jmxQp6oBGN9LMANpskgW25rg",
  "key38": "2dg22WYAFdjD6RbPKwtx57vh3CzDVodYAsHQtZBs1yPju2xqcuKwFmN3PhyMd1b2vppRPghVeDEhhNWKwteMHhir",
  "key39": "4cDe4VTGUrasVRLmB4HbvU4N55VaghB16aqw7zfQVEpx9n8uSa6dkFa7Kb9RBY9iBWvrmibmFdy6PFbYJE5JcRCN",
  "key40": "5NwfFT1Ss5UoyVyRae5WJKuVvvMPmDPXL4HXVsMsPTbCmMqQtky8uWtF2nDcx5vd1FyNWAoPSEk7U6Zf3gYCyc54",
  "key41": "3oGrhaQB7jYznQFVQYR7qmmjTm8vMHUqkuB89LToSKeHMoQ6L7NbzoKdWSedHiL1m3nMJAQeYmya2bNTKPPDzrSU",
  "key42": "3H1iUX5KC83iRwf1RW93JmPefTR1Rra9arwftXBo4hzFpwinqfdH4H2HD2LdKiEPTsw3GG28An6i2YXAFh8MVdPE",
  "key43": "7cRgXRosFzrpV8QGF6y2vTDAP89jvwy2JJXjF8pDMfEc1bzTYwuezpGx9qkrSDmKbaFbvKH14hsKwbogL18tvPq",
  "key44": "3muC2qxC5uc8oRzfS8eobgemxV5DwCw8cpMJFTwiSSuSABh5rg3maQZ3TAVsLZUhoF5pizb2MggHU1nqkGxKKXiq",
  "key45": "ZjLL4BZkED7hCNVbE8RKiFBQYYPsYnddP4iDZhML98d2k5Y569xjFXm69toEBYBXmi4ihPb8kaVBsc7djVc3N3L"
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
