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
    "28RRsKe1Wreb3ptGz2C9p68TaUd6peqREGjRHwnuv2caLyQQLGzEd4fFcSe6t2kcuXsrVpcZAf5jMetf6zMN3eXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44nUZwDGWfKahf8aMaY8QSSq3kgmrZojuAHMGomx1bjSfDRxAvawERtbHasqoW8LkwZpFboTU9Str3VJEjiPfMXL",
  "key1": "4EBW9srVM4sRvK5yzhwWEEkn7qhVw24UYvYGrAefthPaL48inPHKmfcgWNEcVee2sCwyei4vSHpJqAXoLEh582gu",
  "key2": "61PJAmB7Wd9jBvq5dqHSnQc9WUFpGAWaCAJianCfGQpW28EzM7mpFzVWAdaJZbj3DJ34Nqg1c3uZmVJ9xgmzd3mb",
  "key3": "4eeVBZWgo2piZmpz7e5wJapYSqAzvMbJy8W1ksRWkGGAHeMwdb46uzHAxj5La4QFeZiarUbutt8J1gn1tCjyDCP7",
  "key4": "54mWgFjNi57eufj1kjiaMh3R2tqpFuxP1GrfWxVpngDna13DZehvi1nuRstNrox4rCxpAKp5q5gbwrUMYHRZ6dph",
  "key5": "3tKuWxRunaLH1mNefYEAWYZdPGDgQNDteP1qFKCeeMJaQV51QDBAwoGzLfixqSWHM3AKftxXmHDX2YS3sXkHh5Dz",
  "key6": "67QiVkSkMmy8FHd6ZEK8pXyzF6UYxJANsS7vWseJc3JtRo32TU9MS5H78Xad4MQkfVVvAtaq7cGTfbkRmd8Wede1",
  "key7": "5sG3VkvK4jU9CVmWjPn5949QxJtScMtyWtKp3EHv7kqdsoeFJ9toLL6wPdCGpzoARadMMLDcDPKJ4PfpTrSjFAEM",
  "key8": "3Vn6kgRgkc2Zz7nriaw9JjLTDCFWGJKse7Q3NuddZwGZw6RBBEX63k78gntnjSyzDsR1fqYBW8XMXR2KWJ1uSQ4v",
  "key9": "3Uku5KRH2u9akrEtkCF5BZ3LWcnMZiVhLXtagRgFQ65bb5HTqqurM2E5zZzs8m83yRKyyNz3KwZYZsiPNQtYF8yR",
  "key10": "QyxZQQRRGB76uKmsNmnvjAFmWauBKmtBnR9tn19iEPeVBZmg4tsNJjyKGgXre8MF5aP5mkTWHkJe8pSPgokNsTM",
  "key11": "3PZWuzjgVNTaxVN7t67o3gRzkv2Lzkne5yv4Ea9xYsYi5VpuuTZPKaeGqnaUuLy34hPFizepKU368y6UsZ4X516f",
  "key12": "66tkn6ccnoAgEVqKLxw4jSjjPiXCqySYwRpGC9Sjb7yrf8EQaoTYTAJ1dorDGrrXT7f6jT1f85LY8HH2kz5XuBGC",
  "key13": "2ZbrRtyhCZCcZf9ycsm3WUn2BbNhQE757mBS1BzEX9GbdtAiPrQdTpaSiCBQyJN2LctQNamAmMq1Z7QuTfVhwoiB",
  "key14": "3bWDjDJ9eFMAUfpqZdBNwPLDqphPVTM6kG1tkaawiNoyJ8nUYB7vACmNsKHTqEiwrvUxAgdL9gwMfLdYCDXmgTBa",
  "key15": "4P3KtKrcbtjC3wtMSntKeDu3mqjrT325t8AFfrTo64P8mSanXqxGn4a65w4LMhHAV2GEk7ddqmbsKnK416otqKFA",
  "key16": "ACGGo7c5GcmrwHtBiL3kgQCqYqjST9NSyGx2MY1uKyMqLyAv7QG9JFM19JDJFAt6NXvzcSiPehwXyNUEJ8nseoo",
  "key17": "mjZMiKUoe5TXPkCKuvyc1kpQbn51pJ9HADYappCnsPm9ExWBQnq9AemKGFL9e7KC2FNGAPgTgPniQMrKMmiyhHn",
  "key18": "4rz8JfFrz4sPGGb2dLJ7bsopZTu9rCAGKXaNYKx7DgPHd4ZR6Bh29bWSzJyfLkYgsk6p6LBpuT8AjwEjG6VZv34W",
  "key19": "Ceq754KvMLs9Gxk3v6sAd7c4mmk5CJi9ouuL7yMCUvYiQbuW6xTPprXGkEFpqf9bWcBNHzFdbxo1Y4zQHLLhYxH",
  "key20": "467hmaGmhec9RzwwW8yV2eSE36h6cJwaFfxs5kMsg4Gufbi2qPbP7Sx9aA2fjoVDvdV5tkYFZtuvsRxqJhQoXyMH",
  "key21": "2LPXoAsp3tzsUwckPg4Fuqy6kdK149fmxYryiEsH7EzKz5AoL52dXy3dwKcHz33RiXfBpqWa5ue4pabxMzLRKHK9",
  "key22": "3e6hPaeUJQJA6eFFJFGdugGdjDf92sFQAmQo3VZwWXY98CRm4UkE5PwUtxAvGpXeBZbBpQe6aeg31R8GBfjt5pcs",
  "key23": "hk9t7uzKRM2KRggJaffE8enKmtsEYFxpL7on3M3yLwTqxTxqDdfT1gaqr3qZsb2exBEuNxPMY1VdmP32bgd6SYs",
  "key24": "2Ntq4MXZCVH7wjLTGY2sVRQdKdcdPGbCnfNrftPT5LyqzoFcYE5CNDUCmf11RAmm7Yy2PE2BDMhGVphUNQUfbb1v",
  "key25": "GT77PuWv2J8WC2y4CvvRxTyLRumyNFLnmv2d5DrHgsK7vm7Ut1bxadt77E2V7DXy9cyzFnQzDFQ1wACF1Z14EUH",
  "key26": "4EEEwRgTsGpzZFVMCyXJUTZ1hp4x9JcibY34prUwQnPeYj4dY2JM7fdehm6cqCNr3rqDotULR6czcAbGE4PVfcnr",
  "key27": "5ss27zEVF2CaFt8idRkPDrPRjcnNvLLhFvF1pa51EGnN819inknzy5M6hCTBwViPAyJxs4wXbArWc1Yg9ViTMwzi",
  "key28": "Nw16YM1c2qfbaiCACSPBhLmRXNsxMRFABEp1fTzAjXs1Ea3mRiJu5mtZ7q4ybt1VY89vpEwCasyb5UMQ7mdDSeC",
  "key29": "2yPmmhp4KV1NGnVjXkFtVSVPko5os9zb7eUrEgWFWrMxvs9r68rVzLtWyVWkcewnq1NJ3oYcgNqn6AWUf8mxF9t1",
  "key30": "4JseXERMAsmpCh39QpXiuTpQQrFEJty9Ryp97kDnUXoSRiaKVC3FhKcaDNhhs61uRUpzAmzqNkPcdeZ4Z3J4wagk",
  "key31": "5ewgfDi91kzDseGdGcrUfHE6AMLXKScs2sxMQrgoigVxUMQumYRs6aFByzhFt5cBBr2SzWpNGWPR9CZeoBuPJwsC",
  "key32": "2kG2QVLB5QatTzYXPaXZuGp5rmkVcFYBFpLY3yrA83pbVPbMQaGZvzRnkLXzveFzAKyyXPVfyGneXP2kLS5weuPG",
  "key33": "38amcGgri2vm6rtRzz89gpbtGRTauhpHxK2QMYJEKkBTYE2FATXGjVLju1BvaKowfBtryug8TTPYjQZp8u9wfk7N",
  "key34": "54jpvZwdWAsK6bRmbMduE2G9hcdPE3VHqVoQHFauCvk6TnF9xKDLWLKrJ1pqqPC2azWsErzjNn2pgYWm4hJMxoGK"
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
