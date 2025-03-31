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
    "3pDN2xBuFQiPBeBiYRQtJGCK5AtFdQu6i2KkU1DytpUk1wdgAHDfBtUbn3nMS4kmkDi8SkSUvNbMHKrRgiSd31Z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MyGuSWM3E7ptrnxY4GuwRYC9H3jMoyLoovB9rfWmDanLr3ACMFMo4wfEWoDtJAh6NzfoVMBestYbwsNj9McDS3L",
  "key1": "3z79AgRHZwWs1sMWYPhTTUAxBvTxbCps24bWfSzmR34AQNqPVXPB2jo2yWnChyRViMYRkc72ytzoByTPtWpiNoX",
  "key2": "LF9NnQF3ABhvxokADPAvVPpUX2NNdXMKqJrETsadyBAtN8JHfM6e3NpL6YJFn25ipDavPaP1aLVBzFiS7NcZFF8",
  "key3": "5wUpT2MM2oHjoeMbRebY3eEzKCZipkgzAVnPH5pRpSjorEKB3Ak3krARtTT3dfiavLiCUSNqLP664WFTwz8wi7N6",
  "key4": "4vcQEpQanJVosRAbTaVhw7zU8sgBF3yuu4kPDcuL6JaWAUi7B4xDa5TsfVyW3VakQDGoBYSuAiFXaa9csqFo7jQ1",
  "key5": "2scPZNnsNgPwBEt3mZQ7j87UT4yp9wK8wwMLebKMQ3o65gFsYPZEnpxaUo98CzQ4yQhd3rknsAuGL9A44no5rY7B",
  "key6": "2Boqfdf24pLZVC7D3JFmr4PJbPBq1ik6EARW2GnAzRL6peZ75G55Nt4ixfta3nCbp4y4JUjf2prN3wYEtioyphWa",
  "key7": "5jw8UFashoW5G8wUS6YMxDKuiWpeKU2sTwxLj2Vf2EkdJLDLmPFeRZR13A7ca4UshmzBijqQiDjFd9cDCrWUNQG7",
  "key8": "32BYwNaTWivwwRMbyWRtKDozFPd9hgu8Hw6eesxNomozP7suZHcvQywXhWroWyvsh1tNumj89kvoEE24akTWrYHL",
  "key9": "5qQzw9qfP7KKiAQkYZpnyMBdpUoRNgGYzpmkycfGew53NExgy5yEM67neT5J7y2SG1y7PF9n9z6tDZwvEcyUW8Us",
  "key10": "4LE45XgENzf4Z3Fsmvcq3XNq8sGpeb69xToR921pNqfUYGrivw1ZsXqi1QUjHwvKLektm9dx4ifiHYoXqWQmkNoZ",
  "key11": "3k4XB36WDinhs7TdjFi9BptTCPC1TpeaHFmn3FR7WLmfpdiPeMkVsyMXCvi3ttWMCgrMgRCTb8Eo5Pz2PQkaL8N6",
  "key12": "2P1Y7fQfC1Y9bEbAkzSG6ksEzxUr7gxkmJr5A49nPtqDByGLdMXenyDj9BLkZsueaJqPDpWTKcp4ETReEK6qVA6W",
  "key13": "5SXSp9JsAsqTUhE4M4scsCf71jWtPavzTF8XZgz6do5Vmp1mKXEWgY4zecdY1ek45HhR8d3CrGpBqskunxYcZyi4",
  "key14": "2NxBdLr8scAk1qcQ9J9cEGjAKjVDqUxrGVvKjBt6bsVLs845a5kNHU1HEHKHpEY5uc6TYLEBcn4mvZEe8WNp8nJ7",
  "key15": "3kST14eYaKLwC2QJZNgKwuUvvxJBM3DJ5JfUnDfSfAYvm7zmQBYQT8DYz9h7FJPT47DyTPPz2XVxSzvUcsM8iymW",
  "key16": "GRYjBxJ86Cc4aQJMDa6cveSew6j78wj7bw4rPFgUzKA2wVHiSbgVmZdohBCnv7yMmrqhR3VMaKAKSuqPnRF1Reu",
  "key17": "4BTcgUi1SqLF8M3KuAJkekb9HxsJxSq1QTK2RGHyKdA5p1GfjonYFYQJtE5pHzdoxKwamoBXZwK7CC297xKb9m7v",
  "key18": "4VhrVCQG2vXrcUhDZQ2xViGQWqubrMPzzH2iGhfA6YDSMaPbnXCuLS9mspoGJyH6VKhmhBEdaJdtxGFH2BP7mEZY",
  "key19": "3bjLZYuq8r2xs44Ztsd1yRYS2PaaLtzdJMXnEBxkd68umJFv8sN2CWy1d7hJ7Xk5548SNhwH6hBMuzmPbAsqGFaf",
  "key20": "62hT45TAAMLKQ2yAw13ykGRM2HwVframfQzDWYRnSrkLdQ4oCZ9DhwnvWhYpvh95r9undMsncucpqoZn9XeunpBZ",
  "key21": "5dZC6CAzH4ZqAgB9jvxS6nQj62mngQhvrGudoh32BxeyfPwKEyz1U8aUnyQVBbCWML6YN3ciH4e5HMm4qb88Rk8",
  "key22": "4KujRwg2ZpFVmPcfyLEys39Gw1HiTp6eFAjEwfgAVrccbdEzDvVFKDJwwMF1v459WPX8MT2zWVaR1WpHGg173Sf2",
  "key23": "4WX6FhbRA95Q7RCLhxix2owXE6z17EjTiDckkTQVpXoUDkQL1dL9FTanrBX4QcmxFFfJT39UktonM2jiWNy6rQnU",
  "key24": "4wfq8kQgLuUGmxpqqqdoKhWDZoN45QQCzNFBq952V18Vufc9rbChtmkPLJnC2wVhjgG5yeRumM2VvYA7jbsdSPrq",
  "key25": "2whBm2bZKUC23HsuMYo9f8NQAZh4aNFTg6nWTPwe3jLaEbYRTUzrnWKNQcAm2ay2EUJyChDqrPH16DqcRfdLV4Uc",
  "key26": "4GyowMM3odiBnutcALC1Et5WuwrLUWH8rHL9UmAjERRWN3qMsULhA5htfMAXcaie9q3jcyFbM24qcctuKjY2pLsC",
  "key27": "2tREeDozGEZ9ji9Xckd2JpRT6zqskZwz7qYkuVQpG5jGruQarrPF5cXDiX9rdSj46cfTWiZXs1WZQaYgup8bRvbU",
  "key28": "65vD5moLUm5dJLNL1vr88LhaCs3sYk4XzgGyPfNpxKoaoARet6eFWEK3D1fA8WZ7TBetmWLvaZkuZHjqb7GLUxiD",
  "key29": "54iAscHm1Q3cLdoB1Qi3pwQfsLksJ9qMouMhQKQ8ZM6qprQfpdDidQkpSZ1CKZgrfeqpqB3gknXJttKme4L5X563",
  "key30": "42jjZufBExT9UK2uDTcuCZKEVorVKxzyMoM3D13eBsJMFCJVpT4n1NYGSKVXvY3JB638kwxen73gEUVNwY9EZwNf"
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
