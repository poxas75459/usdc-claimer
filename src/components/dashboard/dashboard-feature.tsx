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
    "2sFgnZSQYdHcqgXa7oQPSUGZTSduRupXSYaasuJ8ECJYVcHnz1KAjek3q2azWnqsFUzu5CTDBDiJ14Jmt9869A1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FE2rqkdn6umdvUeN9JiPPvgTFMcesAotFBCRNCwMGxqDe85YyTknLhvsNWSZrTuJY99sHAnDkiixw4bfqNugm2B",
  "key1": "55zQ4T5mvVb6JYSPrePGRkdfwJhGvJy9kadoCsvawk1zgqzoexGtjX2uCw3iP5hUAjF9F58KgMrmyr9tUwQHYti4",
  "key2": "3MUwuEdST6cJFMUyMCyQ3CXsx5eA3YZyoFcxaxHjinX3FZHSLv48dFRDKQGkisjo3z526zJ8upZYDzJ1iPBwWC5p",
  "key3": "2UTV7dySKj45SZb8yj7FRGnZhCJXEyNE8R5Vk8MFpQQaQXj7LuNLdy12k4jRGyT4ikAPU3rTJ94tq22D5haaazFK",
  "key4": "3gm9JWALjgYYxoM7pPce1ESMReDWhRA4qwVBcSTy6mWVA85z88VnZqjPGNSSwAxainAK4e5yccHMBK8Z7qjLVCcr",
  "key5": "3akRD3PxBrzPvWMGDd9BEt2GpEZ8S6zTPoGvKnaaPBfhMENPY8vESJVXkTaBFiDGookbbEeYA9RafoDvAgFBZY32",
  "key6": "5ieFJGAGjMVqRAa7HQdrqH42qKrgFQ9aouvrikGyBdaADV8PQkJz29VAsLbSmwZRNB8Q1jaNnyE29QdwvZQ5mVsC",
  "key7": "55T3Xo6Ky1qNnbD88MWiX1kJ6JR7CLH4ZQt5XpwxuNvWCCe3NjzbrirSsN3Ce1saiyuTHhTZ6TR1APH5w1qheLH8",
  "key8": "2QB3n6Js21csBYgQ3WuWhExRXYyHhhqTstTGjyqssY2jtRGpdqLTJhhdMAAJwmm4vU8ddv9JZq4ctyNKpwjxw2Cm",
  "key9": "3wLVgF5i7cJbfELLmuLsLqGGdLVQqrHBoyRFU8Tp2aXCmaeY797qtUEn3vz9pEaEJdSa3ug8Domm6xE5cqKsgm5B",
  "key10": "4adkrwojYXfBzC8mANywrMkeKAxuQvNyjxjn66uGqwZZaxWobgUq7jXeNEhMHtGk62ojyZVqwLeVdqAQLjw7kZH4",
  "key11": "xsycT36qTB4sZXZvVxv8H2AmV4hNRi9Lw6M79QskePbR8jWV7qK2zpHdtJGfWHJDubWMC9GWuHGWeQCfbW36kjq",
  "key12": "51DjUXSrUr7X267SiUUkW3gVJmKpYgFqqySfP3p3r1iKjqTqquqLbNRAMSffUgWqa8x3ZsQxXTjshcxcixZJ7Tbg",
  "key13": "664RsikRXRqd9p9xvPS4Ae1fsncjUeqUy4dnHdokBfiwZk2tjoCc2iGhK6RoNXogyfVyPGvmpoNUVkCwy6pZS2yN",
  "key14": "5NY5EYCBJLr1dCsg8MxiXVbVaBtFoiNYFYF5xt1WBWsh1sVPaoVhicyJCptnS15g44VoJsQAC6iCEweGsGtDVjpq",
  "key15": "5wdSDX2ELxPZxrag54DrNEa5pfwTNuStEMLB4Xf2yrq9pm8xitx9L1moeWr8WT8rtBe16MqYKEMvgKT7rW69Qdjz",
  "key16": "2VqzFMyCgbwYJDaTxfafTK833zBEi5Hji63DMcBB6Z8kpcBzcd8ZBBkjprPFeme3SMcR48HsktN3KsejoqJXZ8Rq",
  "key17": "wdWi5qzj5qLJTxBSMYCUsqe4rkabeHsMxMFXpMqLmx2HxYWuYV1QSrcjnWiktWGjLUmLaHZkPxDR5D33B2db2vM",
  "key18": "tCYFJ5DimTha4ap55ZLgjjCvG67F5ZHXY9bNb181nx7XmRut8M5mWFGN6RP2NUrkxYjujckR3dGX9R31hVtGhpD",
  "key19": "dLqt1G3kqRNxgSARXxq7pRaP8hCrFoRWmc2vWBwnZngYRkiFb2oHrXQ6kawfL3wGKDUD8YjtqE3Hms9aMKBAt25",
  "key20": "31wqdZN8TDUTkthhM2D4Pr9T8AWtngY8UpT3tNvdKWSmgcmgbwt9YzRbLpgwpJeZbXpb2943Ng8PUFemKuVCYsXb",
  "key21": "3yrWF7nZr7dUTkHDyK17ySe4GoMPpx8AGfSisTNzh1QbC2i84s7ceQgJRiPttAcKMzCYgKhzAPYHU24QYXBz3UAL",
  "key22": "f8uNRWZEzDv1xWTXzpV9pBHMmF4QzhHvf3arLpFcP1phLs98cAPC4n4jQERNVDDcrzb1FQZpLcYK6xqu46NjVGP",
  "key23": "rgCbTUj3RVKG6T9ameeHo685VH9QXmkH5mvBd4SmP8QSmRKRaiHUM6j1C5usF65PLjkGBQgjzE1onykwQaQGHui",
  "key24": "57nZSCFV8hgwcT9W58DLxwZnunByFS2Vc3CVF1Wxx8VG4UzYzVGjT4kEYJFgQDCFrmepL4BsfE4iJnbQrMMkRcWn",
  "key25": "4pCBvrjH5xeTmb5THu2QWmy9ajs4PL2LKbWZFs5rNSzwY79oJ5FXzxyaQ1scxuXUNpLTMkL8vnVXBCT8PUbxsApZ",
  "key26": "Fk5Ax6ZBtK5CkLqBSSaTAbnbMPccxt27AAtyQMYiRZaJuNd8cnmFucFhYBuTurFWwohZZNguZCKRV7L9GUehcZQ",
  "key27": "28fDnMXL2pEh3FsRvQd9WtckFrdMcrQTEGPBAYya3vRuczpPvdq4VUEeGqkXuq3TYL3BVGUh9QWD47Yr1RBtvTf9",
  "key28": "2iCZQ4t1i1b6AUa8ByFGSECvySZ6iKPe8q79cn8UzBpPY93EJuZqzW3B7UbrTaCoCxof8JmXv2oVmd6bxCU74d2E",
  "key29": "211zJkRB7ndm3586nRWWLwzW32xaHnJDsaQWhgGQbRx6bmRU8TeEaArwFS5sJSTTRQqkcyEPEe5PW8DBnZsEfmqW",
  "key30": "AyEWHYAypU2MofDt8GLod9uURvahjrkzZyG7yqWDQmKK8ncBC63nEA5VxBCTY4yMRGmYjpVqtp8LD9hhey24gJG",
  "key31": "2Ckp6kNHvHUf2X4XCyxomoZanqxB9vSfv9MybVWqQpm33WXfpjY3p71oY9g2jzbFiA89PMxu3bB8Y189vika1LDU",
  "key32": "5pLqRNMBosexKi3DkCSdrjbLaJ1Sd3jnvUqVnikK5ZQa3YjSE4zcegbWFrwXXuDMPMMki2Rmt1Aybj2rrytAjYmP",
  "key33": "63ki3r57HwJwRrg8h9CoJmer6kTL1139fZBEBS1UkWRLWVMANcV9prbHRrkTS9TQXhhsZK4WvAXCiPxwf7dpwoaz",
  "key34": "5CjyLSBt7HU3LeErNzoVUvfp3nCbBn2kjDrgLowxBmfHZzKnyffEamM3JpXsVopNuRWrfB5d4BNEhyAdydAdviDG",
  "key35": "4gDn6QUevrJdwdUvh6DwqP7KCyq7RTwHw7Fk2hU8K2rd1Gx66ibK2EAV4qK86yBypoobE6Wp7WqGpZWGaQVaS5Pm",
  "key36": "4YDCoM6k7UZcDPx6FEZPmcWCYzmu66UiHoDpUvkg4ze2idSrPYXaSpirEBb2m1binonwCSMWcUd9K6hfBiAs3Ltr"
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
