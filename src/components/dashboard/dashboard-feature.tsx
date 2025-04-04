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
    "46SQ7uF8KYu1LmdnrT8vJHGMHaYTs9keyqqyzDkVgpgXFRTtQU2kWc3MSskBuba1nJvJ14jiQenNfoEMVF8VrREH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62t28jot4x2dXWFD4DL8Bcxy4Au7hNJeZoHzsXHB5DwHV1Dx2RCVSBPC8SFmviToyAduogYRZ8vARmzwY3yZmyFs",
  "key1": "pUY2fTvFg4Y37p58TZhBhmJx4LKe8TNVZmuxsG75imdYMKDa7MSScE2tdoayyTbCymxb83euXx3g9eHYqBJdn1A",
  "key2": "2zdqimo8PqRdf43DytwTSJRG45yvTjiRm7HrszoY9B7txoyux1bMsY2ksMGfUxxyQy2gKUMdNdJwzmrThqnzfDtm",
  "key3": "2hku7BfaNU3c2ga2esad2tZq7ESWEQUXqJEqmbzjGYXzJMjyHPStkeJ5eh3Vtmm2C2tWzzEyKDjRuLZbxVbRvJCd",
  "key4": "F1WPDQ4FDiehRyb5r8op3ywnyGtVJHmi2JasBcZ6i8F53o24YYdZ48uvGDuLoRXPRhqT1CzDyxnx9WQrzwjEM6Z",
  "key5": "4HA9kGWTGE9ZcHo6km7Kg447XoRM9LhnnkjyZuVEN5FqzyMUeftyT8eCxsxZBXYWr59bM1sPfKvfyHm46djmfEQa",
  "key6": "ho8uP27T1eQBdiu3hwJxF47QvfXm7BnsvTAHxLQGq9tkR2AuKVXRuTnsX1gFnF1w7LmDMukAos48LPomBfgE85m",
  "key7": "3rDqaYYxRRFyjei2nNdv6Dn8aBLyF7Fc2aqCtrxtRmf6J4bLNCvfAhqknUFvwuNUjNKQEJp23fTCK1gVD2Wkp8dz",
  "key8": "28ctQ15f8KXXHTBU8HXr6vxtbJx2jg9Rj6tDfPkHzbYo6SLpx1bbkzNcCnRLc4uGLPGQmdbTqoC3tJzpR35kweiL",
  "key9": "5dvkhpW7gMTGGSgWYzSproTnxUPNjRLaN5S5QGoNN6qBQJQvJB1Pbp2qrEge3xF3V9hMuacZHRfv36oaUkn6PGHh",
  "key10": "5xr6vXSTyfAixi1ezAy6vkzH7urFcuiBg45EEjSQ7Sgb7aGzU5VVvcgq7TpWKUHKahpo1CBJvPE93te9yZEhirq5",
  "key11": "3rf7htbKxXRA214muqcy1RdFbxVJk8KtHwKAHZFj5EwsH3usiCqM9vUfp5yzZ6QkSwbjcLG5vus3wrcCKCbiNuQu",
  "key12": "3JXxwD3FZgN4hE6Ts1amAomss7Uz6tXX4uc9vFXRXnYCjw8zfcF5XZyUU7N4hT3Byw94QvCNRoERNFApJhbKCCpH",
  "key13": "J5xqTWDcha52xxg9pjjfa5mfkkmc9f1E67p6twSnYp7C995jxMpjiiGRmAcwZ8rrDMK1nWtWn5oVTMYT9sqKmKB",
  "key14": "42iigfyNr4jCmaQp6Mrj81D7pa2gzceuuuR2FgXDmaPAuTr1zGSEKFv7BSfhjzg2zWU7UJpt4RpYmDoHtoacwmJP",
  "key15": "3YHW5KjLHhWzA9wFcy1TV27GsabdgH8KKAq93s3t3gPNfeua5gDofZEji7T6EtNBczdBkkSmYYi2Z89LyRRwE5EX",
  "key16": "3XQN5CuaNm2uDucaiV6vmZ5Ymy13jkvFgPnMMKpmsHT688Bw3T7tC7HCn5gKt4U18jRrxBGahhmAaZWp9FL7K7P7",
  "key17": "3eykbxfiJVMprDdz97t2rNfnoSV2eGZxSePXRCZqXYeeTiPghpakjR8oBpFZJk1yya7jG53dyfa6zLv6XSpB5ACH",
  "key18": "3Vdi3CvmUPaEppSGWznzmy9YD36uGJXcw9oYYHm1KFQbFy8Ha8hkFNFcdbwnJifoHb4KDXj1a4T8SzCrivswhBAf",
  "key19": "5Awbb2FCbp73vkm5FmKnrS3wvJEnEP9WTvMX9r3m3rWt6wsg43ReafxxVBe4Xwdv6uzxyM5ADzyMV8nAT51cMigu",
  "key20": "5CpuznNopVW69JKSrQ2cGJZzeCuTPPPPcq77yGojzDRsgmMsYdCjxjLhAnhL7crkb9Z3Es2LA8EHj8xg362Q3tfY",
  "key21": "oJGirmaRJf9kGqWBLB4rFFFvnvrjUqJZ532ueGbivK3d8vmfCJwhc5jQW15DohKEsgZyzyTMFNrCWqSEg4Cg4nA",
  "key22": "5ZyetAkTcC19Chx7a9RqERoNWyWbrGjxZRhin5QYexjFXo2gAwvMkmxs5RyjYoYtccWQ5BZTE5ucvweHJLXgSUN8",
  "key23": "3n1BQ4wUGsLmHeV1qoRpaEryvpk3wzdx1E2cH2vzCbsTvrcSCq1eKsnY4PhwnXL9W1rMczXQTKFXYzwhnW8VhmMe",
  "key24": "3JBd5FucVHa47HLEXUY6cprfL6mxjaVtzehqggiXta8zzkgB9qC1KeFFK9qK5QaiNXSkNF3Ck3NRgKxfYcoFwPhU",
  "key25": "2CzribimkJCo3xbqEpZDv8nyYbkBvQQqRJX8vVSQzZFtqweZdFdhSahz97kCKfowox1cJqyk1HCV4THEAicpqu4g",
  "key26": "3pWaN34d9aUB3p6Y5FstSBo67mtpHRLM12Mu8m1m264mUk4AFb1BR2kKH9Xaus8n9vY9Y8rya8gNj8KUE3APRaUL",
  "key27": "4CKyudGx5cG622hp8VDFXPzDK9wvoerjAgVTBTkSAdSmgFgcGNpHhgxrjWoS3ndKStp4FyPw643zShTtj2WYjocz",
  "key28": "4DvtkoqzovXH3FqdNseGSxjWRk4zNo3X7X31DmsgfQm3aPqzL782aMFSqTEZvj5s738pLqHnEcw3ypLtokunCj9H",
  "key29": "5iVLZRdnkKRpixtp3nadH86sYK5g3kaFz7eLfJ5yq6b8MwNiKevQkiCNViBwVmTZvez2KM8KyLC5Jm567aV9yejX",
  "key30": "5gBy93Z4zgEaSUagXVtBuAY5YS7mkdo6kdwucLHvgH26tZaMyg3dpSs74Bo6DaFuv9WQKTbPWEguUCRZpAo8ixyf",
  "key31": "3mZnBEJYkvLh73A8kKuq3X28CkcCPQNMQub4S4FMCv3fi75Z99f4Lbmt8TCXshynehdByE19EH7xznXPeCfANazF",
  "key32": "3tYxG1499TpgnYhxpeHakkB9mkQWCqT5XS7jy7W1rqpoZfV2i2ZJuLGmhPRWpDNjinGqiXbiHS5GKacxjUaVBZZq",
  "key33": "4312XRrrXYec5RgVXjb23vsGkGynyHQgs3JYAqrua8XGWgtfHqdid84PeDeFs3BG3oiTxB5rmmaYWZPuT4HcwRdK",
  "key34": "4uXXmkvaMP5yEmRSG93cjGknYVunSW95wG7ji6nQjRKLRM2huQuW6Tu8HTPEcH56pGnLHqdEY31sSha6YkXWvx9n",
  "key35": "5eeSxSBtioCGQMYcwp9x7oGDN2Wy1JTqyhCytKRnaaErLBTMCUTXwEHYYthqJpRq3F65z2yXuHYM7eGGzKhfjDEo"
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
