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
    "5QbmRpFoN8TVXTqmofHVFv9FN27rWfLqb9J5LjHh7ejLQYNhW5pEFdToqDZmwps6uvESwbiXT8twvdnyR5QowVjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51z3w6PUfoMFwmt6VZnnYXb4aZt7YGzsFHmQTY7FfUZvBk8k9wZks2wSsHsS6DXmoMsBBrTTusziRmvHDW6Hzbwg",
  "key1": "22DKjnvWNivCk35bGc6aXm4Mi5EoiQZj6ANaC521hhBjYiu3wtQpBeqs5XEct9DRr8CCNzkkX6fZnphWUVyfS1M6",
  "key2": "3MJ5X6YLBsfeGM6n4A4VRfKBnD3Rry7NEMjFgndHFK1h6WjK7PEcsPwHGiuoeCLBDuEbqpWqfpwT1jm8B7HwVPto",
  "key3": "2ms9i2sSnjUx68yK3Mo9Ssm1tEfeddoKo7vryvYnvwV3ATmKYDzNcfEKRZ5KTiSrxonSfzaVkNjajXEELLrHzrLv",
  "key4": "4kGpo7oK5M2kvrqnZBgA4vv8dbVvoN2VJNS5K8sFsZuceVHnMCQJKepFzyChXzDT5gFoy11gP3mgvMtddt7DkvYz",
  "key5": "2xKq5zd3Nf9RcfSz1G9uUymnurGeP5DsrYf7sW88uYgrj8ZTtf3v72MC6SRTFwjMpAT3VRk9TYP4BoHLWsRA5quC",
  "key6": "5WKFj1SdyzAT1y1MFEreRGxtSMAJCDrBqqopZMWUwq8a5wkqNG63fz5qPTYS3NncCtCYmjP6MdohLDUZu3TZrwvM",
  "key7": "2emyYZCJTraWbMvWczGbHP8RuJRaXWQh4aEfLbH95fjVWXBt95HoeFKwJSvUsNyobDSnD8hycnaefadUYKHExoBi",
  "key8": "54XrjwGoQQqXnuDtRpZcUMtsPuoe5Jb9xfUrz1fr63xiLMRBUCUiCATfT3C57fPRBeafHK8VF5TPS8AnG8WWHbdG",
  "key9": "4hoth12TnzBpNU9nKRW7LJn4oJh9rkMLmCRinojVDcRoiuZbkXNZ5DyEtAuYKLYvY2MsgxBx73MGiZJH8iHJHJ86",
  "key10": "ntvQcaLxyXH8mg4iChHV7vmc5GyV2JK3SHQW2wgypuQFa7RkZjo7m4hDY2Cjw71HasY5NMDgYfNZ7JqA12wdf3S",
  "key11": "R4VFZErVqTL4PFhvhf2WUDdLERTf2YnQoAvtErfQpqNSdhWSGpXQf5n2dntnV8S8d3GR4ezCtyBPFnpdth6nfF3",
  "key12": "5qzn186ypkeRWgCC5pQwxwT4fVcBMC92U3SVfmkALDpX9SaHvXVnoe3rotvvUEwZFMbECq3Ye2ecWBfkDuRvD1Tn",
  "key13": "3JCgyLhNzJbTNryFzY6rRBHe2Tj1ggWHG7kChPyK6KhU842sUGLqKihf4R8WBUP76TaPrcoFDEDjGUnCQtk9USRz",
  "key14": "22L9jd9tsu6PzXq9pA6PiVHs2D9gTtgFoEcgQE4ekZWzijwPAkTQVc6VFKYcHAjt7rYGK7MrVa4Bh9bRgxq3pLhn",
  "key15": "5B8LCq2XkkcMyQBZcWQ5XcvhAwsb3yV94nYL9eYp88wA1h4cbHZVSSGcDtAW7Kca32Uhr2ysBfQtugJKXcC33yJd",
  "key16": "uKkQ423ZcLwsG56ZNE1yrcGyswcEzHngiaSo5FQAb9yHYcaD8xnYpw9naK5RF8WpVsBhzSxKSVomMNwSHpc9pEt",
  "key17": "4Hb9J12Fpc8SPtZGBtoFiHf5A1cbEvM77ghNYcdRh1i4biP4Y6xkVGGMDdPVDJkeJP6tKB3gKm71ZfUrJmnMf45Y",
  "key18": "5XAZo98C7fBhV7wzGdThbQNc1PysbnFRmszF7FJiExBfBW11HgTxgojyEuqvgo6uyCEiBvDiXqRpnGXgWMRRuau8",
  "key19": "3oUFkQoi6FpTSDXVuCKifJqEi4p3hr7CRCgrdM9oM3BwrCRZvjN8nVGLANJ2Le3A3JjJTpps7nGaQcrDv5XfcafJ",
  "key20": "5w53EU7cjCAZapu39TNZF9195qh4zp5Y2tmcsuZerjq3svduLXo2qJdsxymZG2KhqAGYYKQuRUxob92sTpbfkpRn",
  "key21": "3QXNtzyG6bios6nZo2XJBh562cXVAHE9c3KYcaVtrRojCJWAPE5uaQLc9WYGSAuyqAY6BPbddGoySkQgPqZssoud",
  "key22": "penL91gHQicCggvfamDEMrPSMspcLok6YVy9MB3N4t98RXiz7jX3EGEMFLnaVZnJpvPcmDktia1UgTvpwLn22DM",
  "key23": "5kKMHrgY4ravUd66CR5NpBZFcBojKMNAikNitdpL3GZ8akE6gTWG5pPb4eKQRcYKjnirkoyZ6DmAUusk1NRprUkX",
  "key24": "29CjWGoep25QvRuY6wLrSFgabY8SEkiBTH3XU1AovK5gei5aGjtHbCxf74n6Ue9B4Pf7hBkkuXseM4CHnML8KKr1",
  "key25": "4Cr1rg4hS6c5ZwZE21q87LXcQaEoqc4tFAJBA5e1sjgsaXEtyoPC6kSVCmuqmUmFYr9SmehCqs9fanKdPJ7Xs37U",
  "key26": "2PM8hFKC31RvcDozESV9CnhMBhCUVDxc6ugyEuVY6Tpj9MkZx65Tahz8pHbn3UGEo5e4HBKyz2c1g5HxKMgw6ARv",
  "key27": "2qLQmau7Kt9ZRuepeMya6wncL3KVdWAKxdkNc7GVyZdoyHaAVoYCFUkPh2PpXe1E83dNWqEg7wUd8YcahFphWR79",
  "key28": "2GkSbmsnB3Ncp6hNQoJUBCWhPxJJokNSuiKjuo6fZrTy6SyErqh7zjsU7x9x6gmPzp1rff3NP7Y1K9fsEbstd6RJ",
  "key29": "4qm3RxL3Dpr5SZPjaSc2tG9ontP6Qygg7zydpquyQUfLUaLzVfJm55duF8awUXHt422am9tgqPq5hApXeLkFrNbB",
  "key30": "2y42gTHjbEVHhX9mdqrcXZNJB4ncnYGeThhaQ8FYfYnbv5PzSz9cRG1YpPX23ipUgW7DcHaKr9ZM7KFr9Y3wuYJW",
  "key31": "5fN3Y3Q74Cb9TKDFvX6koLkoT9Wi82E39zvNWGnETSTK3e8W9oSxFiXwPkuLRez1VJaStGufJ7J2XtndNv26Tru5",
  "key32": "2UqmR8vXzwgs2RCCtAuDGUwnnvbPBw5YTG15hRZCgRjz69nP4abKsS6o95KTL1voTxSkX7xLaEetoj4MvbG4vPLx",
  "key33": "3H3RFZNcJWSLqGD4pCCtzeHaU7MFFJ1Vi7xDmb1iQsCx1ishFJtQtwmQAft4WHNnuxiVPmQrrg98VgEVeEuVEqd7",
  "key34": "V2DjW4ZUD4ovcAmNaVThorAyobxDoc1s8cwS5B8FPNKiTKa67MPLxhkXRzetQrY5jnLSmswgCJqXfaCAHgAp3h7",
  "key35": "41uthFjMHVVormNedz6ZM9y3n7r1UcKpJMrbkVvqsADqwnjDC9XqyXZZQyCs4XRSz9qc1WWY8GqSAREn5te7xmHG",
  "key36": "2Yi6LfkwGKJLTybLBPURfouJh4tMeqtp4PmMNdLxxvq3jKzobuPcbZr5P9cYqpWD1xurhSUZVMgUa52WeUrkGFC5",
  "key37": "RZ74fGMPyVfzFY3gLBCLRsjNhXrpTHq45PMmdZJvHCW4N2Tc9uHrrWf4XN8s5Vvhd2JQn1ixYvpDgyyJgkQMhGF",
  "key38": "ur5ecK9YGiHwnHSJyrR3AmVvoXH8Ubhzg8uEm3atNqT4RUAcuPSfXnKXBUt94kf2HUEst5vemyvGkyF7Axk9J1x",
  "key39": "rxCDX9VKnocYu7snB6RTCfEHGCGKUhHZT58dqA6PMjqsS7jeaT9Bc74m5ck4gCHoEyiGZtUFA5bQ6NuQybHMPuw",
  "key40": "x4ZpaQy91KGTCsykCwEU9oKmq68MS8xJcaTrSsSduBeMtw2ofhCXSMyFrBK8jkz3KtWVSEmTMKFQDCEbF6pCkkr",
  "key41": "2BaLhxDhSnFbDs7QPpDzAqjT8Qk5H29gu3YcuHjC2uhEYojXkE5McNG1Z1P4vHUQqnF93WTQqFeJPuijseSDm495",
  "key42": "5EsWMZxskSP6x16wpZ9ihp6J2qXRdWpWeskjUvwbdUrgua51XD8jEq5QwjgacmeMGRkk6YQaWLpvXpdTvk5yZgAX"
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
