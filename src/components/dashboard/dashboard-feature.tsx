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
    "52nC6dRv69etEBnm4kh2AkEatk8if1x6coKKjEF4wwGbpPygQv2BZoRduieoiKQxzXWAayYF52m9UAkcPdcsQsai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uk4BWZVNtZFZcvMMN1WNSmBPrKVHe8r3x8HFZ46N8JF9nZzURd6rrDB49eCyU1Jd12WmcNFAGqP9pErih7huTc9",
  "key1": "3XpNr1yemRJzcSEVAb8P1YXStzxhy1ce1rtg8csoGCWdjHYRgfVP9kpMweXZPfaZibwL7pbAztXQcoWkgAWgHJAm",
  "key2": "FVHryc6ExQTwaAshtsAyjq6eqXx7K6vX2QmozS3WYS4AUJiDkZtk6F6VRF3HwvsEtzqePX7yD8LRr1BpBa1MiKP",
  "key3": "3N2xbjchzJrTSDZTQHL95fKdgdV9qqXfyX2T8FTndgK7Fku3KYngZc9wx3QsaRR74rCTcs2AbvVxqu7RuHSziQ3d",
  "key4": "3cXJ9EpshJtDh1YpXDcgDvrHQbCCRYwXXsffMAb41yzoG2gkJgu741egdNKzjh6eW9gWXteM7WkNXDxaGBcdQfxQ",
  "key5": "4rumPj3EAyGwaa8FQpNDoKgzukbcxGQwVqs7dohrqKg4nUga5f7YoF6bQrUsqgZfR13pqGRRaAAe9eCio31BDbvE",
  "key6": "5vGedK95GkfcUoy9eMuR7RKRaA11rmXCFHWhv1yWPLdgcXyaG8eaZg4sLTSVJkSWRmFbDvFjJ5GQeg4qaTacngwW",
  "key7": "3BjsRxGGt4acka3TrsoJejrNmBB8cLLoFHsmE42gYpZUhK6rxXFgyboJ4kWQZxi6SMi2PEWqz11cPYmMbmsHEHkF",
  "key8": "34kMnbuXxvVHhz1DNXy95hYWJnCoXNvecHhv6tpF45ALrdVaQCFXVBW8MoXcT2bb2M962FXbvojKBTLG6GvRT7ug",
  "key9": "PzmpfxBkxep6joBbm2ktkLL6dnVAFxH5BnVAxiiRYDBg3uyPfXF2L7pVYESPUpwzn9j8Wg6XrcshGwxGGznCb2d",
  "key10": "3FosS2xgxtuQWbKmhSYXNMzdWV2DwKkePi6jMce8PtddhwB2DDN7XnnDZ1Uc1BTdHfBBq2Z793PbiEUL4S8gSewX",
  "key11": "2DFzRULJmvYsbpDdxAxqstDNEUqt2G5johrKb8Fm7xocNqrysdhMUj7NQ6GfCM184JZytrNREsNcP22HpsVQb3pp",
  "key12": "3QPSzRevkDbUK3GxhMxaBXdqa5j1nEHgVsKHVBktac7SbERRJAHR67Lb9BYApQKYjYqX8tpggSFtGuHr65YZpaFq",
  "key13": "3TpDpqAsJceqBSxCeBz3UpRhXMKdEnXs5CPoLABr8FPwV8q9JBEoD1rHtqqrkqzs3eH9CF7YYGGR8ckT5DhWEFux",
  "key14": "2GHZKGn1AexZpzFzYFgG8dVM3eyqGuY28NdqY6dJMckkivAqRidaoWBhVqiRYNNh9PnRhY3dxiW9jjmRE199tD2T",
  "key15": "35RV7zvBJSThyacewK48UKAcv8uucdwVvhLxaMKnTX6tzNVrom5vT1VgnAZKkV4yttqCw3kYZag8CKNdWnHXC9pe",
  "key16": "4B2qEVWKk61KsyZGmCKRrg7QtWpVSSUWF3imnqg8W723JMMnpAyzBevaSryhKgJYYJ9486zPqSQu2jcu6zF3YpLg",
  "key17": "PSFRwQUMbbk71cZ1zPX8aonfwj4hwCcxis2U33NJx2K6iQP3zy8r6uWJnFHyFodbTsXsdtSVdHJ9PvrMXD675it",
  "key18": "39fMXsCa6dLFhchxYaRCif77md1Hef3rcPpcJpjYSynsgHsm1t3g7V76AvhNBf7uTUX5RiqEWR4uKnuGqF92bRqb",
  "key19": "3a6FrT9hwxwA5LRR8YBJ52YGGxJRFLLQG2YF9Fjq13qeJFT99MouFWoZj9SgijXPAwMDfMJd5we9qzsGAr23ERkH",
  "key20": "3bhrfKXFSgWdbTpYGryxvMuEM8PFW4C6BQkGzMjHfFarewurjn3guBg9ffQRBfbKLggcuHGBwecZiWLustaMdECg",
  "key21": "5efsy2VsjH1xeu35U9zrZeQFzMcL8wS8VCHWui8rfgXTZpsoUMYj9QSyzFuB1wjVPzsJ8APgtZaGwUCUpB7VMY9G",
  "key22": "2yvxNod4Ff4otz3kVN85xGRiA2PzMTdSvfXKDmXZFeRF7GgWzKFroU1Vukx2N88uRd4cekKiJfR6XQu4fKvCDKn9",
  "key23": "4HFd85h3TnCGr2MfY4C2aDwQHJhMbArbeVY82RKYc3ca3zVk9JYSfD2v6FwksmdKhjn8Eph9vS2waNHiVJXVUaSc",
  "key24": "2FoM2gACsknZJCJi6oqoVptQ8wUiztrFkgZWS42JmT5CU9bKr5Er5wj6e2SjYJTbNEbQacb1A1wLJKnNBb52n9ff",
  "key25": "5SjHmMfaAmb3xon4hw8LzC7uvAQJ64v6LYqBLBUW6VxWMVVT1kUJgp8R9R9zvdTapch4SeZpDMMs6xgJRuCYDWDY",
  "key26": "CwxkAYHRMLzemwCEzAeorQ5zoYP4dKJ3cFX31mmnzp4vKCUPjkKjziuk5n932czSjRniijSfZFsYJ7BTknFevuL",
  "key27": "4b54YbKgMxNhGaganKDyU7rdo8MC1yQgkjiXe2zMjovX2UtbRuy4NMPQbyvwXrj4JWwar2sRTZAQeYYLb8WNMLSo",
  "key28": "nVFr9fgmVY6snohHvhpm98VLBe15GUfsQNYSoHYxZkm1Vag4MfKShkCFjtnmfsQaeAqQ5xtVXJY5ChBCVpTnHiC",
  "key29": "2kDFbWYnfyfEdyMfZaTGH78ysfsdsJuqfLJPCacQ6EQrxA3vS2zzWBN2ZcNwMmKoTJEMTFTymzA78i6Xqj1hCwoK",
  "key30": "66v29WWHNKRgoVK7rY7AHNStcSc6bmUTnFS4n7Mb19hGkpxM23Egs5X4bcMEbGYr936sA2cTovxdHX82iHMZEqSC",
  "key31": "4zmGW5KyUDQBJUZa2NJCrVNhjoNRWB3skywfCxpt3CBbXgY1TC9Gru25YYa4mkzFFrGvXk9Tk2kzax3wCZAoU85A",
  "key32": "4cvWWfwPFF2AJyPBzFcqggLY46FkDjFgHT6irWFEFMrq9XANryUndRn442Eh5157hUW3HXqihrQoKAXj1eVHCjCm",
  "key33": "5coc8uSpE4nn2s4Lp8NbRvrBsEuB8tM2YWzd7ffXCqviwEiuK9BqjKQbYZk7RaMUTNmw7sUWrXKxWWkGKkma33zV",
  "key34": "2oxkKkBjLbm5cqgpSeUzahbPfmQGRkKpuy7hFZQUcaDQYiEW5zxMNBfzK9FRbowLmqEu8Xe7yGJV2ZsFS3NMoxCh",
  "key35": "5ChqwBSuHWVwhWrLPd3NtqpegHHdS5LRJwqozVYNvZokUShxzc8FuRsuenc3TH31kfi9xrHBoiqZNzhPT3or2eXV",
  "key36": "3zvkoT7GpoVAtgyUecRYiAtkUY5bRBWMCJLnLHpLXSsDrdSBciAQzJ5nVKM3JBFR2kY4MuL5K52Dcf7JqTqszujK",
  "key37": "3CNo58zWLP1eyiWzgPd1crjVrrXqVjAQroCLVHywrH5bYfpqNBnGZTmEpWkYabkXGinke4t7x84e5H3VtSYggyv7",
  "key38": "5ptnUGACreSeXq6ceG64DkGNzDvuXCxAJYDGsrNad6ct5djvQmsMNMz7nCF3fNrvRdn9JEsqve64cxrVcp53iyiE",
  "key39": "66Piaa5RGThkVSBAyqzwpmTXkP6Px6qAenAmbLvpd8RsEwzmaDWUd9cdXmN5HMEhiNxzEiDLrQSvVQN9N8nkTq6F",
  "key40": "CeiwPft2HCjZxbaPKyR79FC2kq366D4tKe6Gt4AppYCkTcP2c598sKx2mN6iUvkixShjZs8QDVTojPP9tb3HApN",
  "key41": "5XdXursmE5Fd4kSrQXm6zve6HC5QGugKrQXvFRCRoDPqA5Uqx49Kvt9BraUrJTfR6rmPW4mnd4znG6pjLCHvqYGm",
  "key42": "59RWNJfudimdu8ZmHq1ks8eie4Dzh9h4s51mHKngrTU2Hxr2YZJU7AzKgraorpUjramAoaeeH8VHy6F8PCL2wYHG",
  "key43": "3vjRtVX2dNmAkU8py7yGbMn2cdPLmZ5vY5xrQq5Qi6ojehg8sKbqxbDer9JDQnMXr56NAe7uK3GHCLyuMrYRDpYX",
  "key44": "ZaRGwWkMh3mFvdcW17qwM1iWQNj1bCvgZHG4j5ac9EMYBSih8i5A5xNWysePTT92ANhoZDLkByQMNf68KnrhEBJ",
  "key45": "2URnp1biWWFkTwwkKnbcNAp8gaSWgWuPYqfLJn4THxCP3HH48Hh1Fg53a247VpfaFm22smLhbppqHz7Cf6rGNmb7",
  "key46": "5P18Uxve1xHk8apLapTCMwtHqgnM3A6KurdqurJkqomG6W7kz1Y3ynUWEXFEo1eW14Js5GiGgXUxy29ZkzReBd5U",
  "key47": "2AczGycQ4DgpeBzzhMaTKeZVZZ3qoiokrnAHU8VY7zPzr8cKCDqsHBRh5QJUbE3MZLpDgmqoSWP2YUSLH3G6iYcR"
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
