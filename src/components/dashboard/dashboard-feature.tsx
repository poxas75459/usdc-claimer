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
    "3R8JsjU3w2v8LFTH5gXSyc3qcFHABdcdc1G8BWwBuxnSCXGJJMKGxmWtPZcwb4DFJJ46iPoUzp6oUknxbUJJ26hT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rBSJkrExZMaNZfjNf8KXLmyBHbQ5QZ7Bs9TF6dJKfpdBsqioTywufgC8goEaey8AT4T3vL98FWSDz5GP2xi2dxn",
  "key1": "2khs5pPmpdPjKaXTEGnJAE7Djfy1PVhGXdY1EcazrTCAwR88ke48RJ42j4rRXGwziYPYiFwHUXWSBa6EFFw69gk9",
  "key2": "65kZ4S8jeSRNuUfS5cDxHHezKP8EV1NLFut9JN52oePbz2YqtrjH1qrxeP5EdC8ykU8zZPdiX1o1vKqrv1VwtYzQ",
  "key3": "3V94peKHMGMYVHuAfy1YRCCfpDS1H5PF5bVZaR4Zbsgsfwb3kAvsnBQs1MHztjVHD6M7oqQ1sb2i1cFT2VG19NET",
  "key4": "5VL1ynbk7osb493wtSRMjr6dMqrXXnCBSdwXFGS94W7cqnoJYZhzjF6D1gcoRPtrJtTgsKN7A6EwgppuqHNWWv89",
  "key5": "4grzecXsqLnQFQUwtMfp92dvY44trTZ41VoDkM6LPPUHm115SmF3oBKoPyWLdCnhfg3tDQjUm76AXCdLkgD5MuG8",
  "key6": "MnQzprJAzLgXkwcbH8Sogqg1ZWVTFifXJtiNtggYUMBupeVC38T7kDuby9GACXYRxXhVtquKpaCVpPFBPfM9Wdw",
  "key7": "4YiWscqSwQALpGeRzcY4Jqex78nnKNLjmHUW85oxrEuZkb2wmVKBWi9xAVnk1UAm8vRUNJtVJyteHVVMDZponf9j",
  "key8": "5bj8Jqkwe4KqDhBrXreM7uAfxQw8ACpRX4i7nAaGLBkGxfhxC2HLNysMTkwGq8BSaP3WGNQqjHomGxPm3PsifUeU",
  "key9": "5wU8veFHrgeje5ivCgYTRvjgbzohx2bD81bByzLKDQuBDAVd2X93Ds37pdz3m8jh9Fixc6sibUpC34CVcW3FE3mN",
  "key10": "8e4oui56Y7RnaYSb85aZbQm8kZjRfFH14YpS3d8UxoW3T3z1ea4Z9zJYSTgDCn6GEG8JrnDRbQPxQ7Mys7PbpRM",
  "key11": "4mbF2Exayeh1LfpnQEJhhhqaj7nJA7Jca2sgMfTvkeeZKdnda1wWbbwDek8hB1fXym3pAY1Dx5fJizs6qBWjt7TY",
  "key12": "Qm5BkgotwSErrfN6PCfXXWdtsdt8efbpGDvJcNzmZyTiREeFRMxNtrBTrpFsy7dyxeiyc8uKbP6XRsmsNroygBi",
  "key13": "4ADeB7TUFFcqgrUVfP5tdDRwVFJpyVCApiyKuKvPAfcTuepvUezFgpe6fb4a853uJF4gopBwPJacSzsQdsqzT1vn",
  "key14": "5igsX6MtgSe5KSxYtx59Pn7MB4jTALF9UpqrGUvp67Gf75DZgpvhd32wPHmhpTuMTtWfTZpW4dBU4VHeHXcMufDj",
  "key15": "zrGxxE4qa7PdJsd2xtfmH2VEEK1xRo4YRkjKYXKG1wC4RjVEft7Aw6sruKd81HXD9Bp6rps7rHAAyEWFzLZ4nNA",
  "key16": "3rGLKUaNgM5xiUh5VeSNc5TXtV6SmY8LZPSxYR7gSM1QBLRFP2sX2954tTDqrQpFdLNGDdurAR7AMyuit1dx15HU",
  "key17": "U23KoLybThX7PkL4krJeQar2ErEMfekwzeeQnDr2oN5xcgY9Z4y5YUAQTtXofHbvfrWhh4sAHKFaeevXnLyagiD",
  "key18": "4nGWYr3rb3tQ56vTBxNJ6RruJ5qmzEwFqxfiyy5FdjHbspyAuSWuZ16gZ6n28LbikTYbDVxgmoj8QutkZxCyKDGm",
  "key19": "65GwBviKQD4mh1nnXUdSVGmhXc6focEzzYfr7QtbTWbWQHpBq7NguRt7GpiZnw1JUeuHia3C6XLaCZuewQGU7eU2",
  "key20": "pMnRyjdiqdG7YnpHoCqPeyZhNjabiscLG43w57PCHoh1GBSXZTVXn3P2v7bh9sshpdNG64nFJZnt4emW9kL3QfA",
  "key21": "3Xe8WFRJ8uWqdy25VCzbvXCsbuvQh2pfT6Vcy9TZNksLVucWf3cDc6s32rXL7ae6kZVJ5RENiTLJsx9ccGs1GX28",
  "key22": "3KMHP7j4xv12LNwxcRGxnqKpxUyAsnY4RgebrzhzxusAmVypTCTf9u6NQvxX6g717psJEF9MSDewjudqvZPgjsBB",
  "key23": "4xhA3wmKAg6BHaqga1keAHCb9M9KHA2PjCb6BcKB9LbE4KuhJhztkdD1qRffiLxJrvj8XXVrai9fk3Q1Hv4QWJnB",
  "key24": "3JFCeVnP3dk5Q2QEGTvikZjkVdkQNnAT9yCNqwoVx67dm4sHR8ZcJuHKhpRGwxfnAoyEiWepKDNuCDxezYUDQH22",
  "key25": "5BKBX7wQZfTKbRcwqC3wWXy61RzuW9Fm3StjDQRuq5Xy5DstJVKxutDnL8nQGuxRwy4NzqiPDkZ6q99N4cMq5hdx",
  "key26": "2j6kqnRDfgw6vNM4spCBeu5hMKRqwF3G93ZfwCjpYK7GcfNNDVdzHu4zvtv2dUNbqJxUeyyMQjpmJpKDfoQ17ZAo",
  "key27": "4DF6XQB2ZJNyrPMoB7LERTxQAXoUioCikz3a4MuhN1LNnn4pU9UQBSUkU5hLoqzBamPjdBMtgCUPjQcgPpYr9Ago",
  "key28": "4Ux29aJAc57GgNuHSX5QKzdueVQ3q9EDuD6gWQzpdox6RZWvj5B1EpAnbqwzbbmxt42AMZctaoRj9WqXUAwvQVsh",
  "key29": "3JeWJrtzRQNSV6NxuZexweEdJsXDspJiv2CtBLxsvFgMuHhYCdhUekspuuZVfYSsqKV9g4sM5zTpMt8quMMeWQvt",
  "key30": "4k7Uxbrp2QyRZj4kVxMNj5FGixdfb24D1no39L9hRNZQ5rowcBWQLxkF8hN4DoUEU7FwyYykrM59RHVY458XoA9q",
  "key31": "4Q5rSHcQKJJLSc9Uffmxxirsq4B61Wt7LBxhUbTY74MDiR5dFAgWoZiFWtDXhaZsa71JwgykddhJgXhAdRfqbEBF",
  "key32": "YKuaAjbswxssgGe6Lx8KAANM2eaiUMSbLmYAHrpf5n6Z5VtURZEVDkVE9oMcvg5Y9WZcg6LoGfVHK6sapgpkBvE",
  "key33": "36DtDn4KoJoHk8AwSDTaBLLeSzY42JioWw2R9fiHoAjrALJZcUv9Bp8Ng22hFjknxrjCvEntW5EraXatYwnjWBZ6",
  "key34": "5PBdp2EX8BSSfEuVpWDqZwZdfhNuJjCGyofPxE8izqUQDEJLtP5TGmGkMtCuRWuFoSvMQnWGyR3Dci8FEJVPWJ9x",
  "key35": "5tQ1ywhgg3JKLfTzZr74i4zrhpTf3CY2n1bFBAPndCj7FkpKRfQ1WDTxwmZowMZ2YiA6XytoDm5UEhK8djdGqqc4",
  "key36": "4spjjnFqt5bVQDe6J9ASEGWHX28aqCmEWDQ95UcSr9eVrXLiRRqLrzttSZHAbzEi5dfkqrukxGC3hdsBsApNs9KN",
  "key37": "51JpbPrUefUK6mYMeWTyfm9B57WwP7FasYBXVe8ygTJc1ZcqycBwfDposd1BTBsnMcQmMzYZz1PkYnY9SniwH44r",
  "key38": "31ah5okEGzQZapq6ueCvAX791q1rzc6zNGyPzULjdkgDA7L4WzVvRyjNrqzNhQCevoCZXUZazkUAd1uns9tfN2bi",
  "key39": "3nigFE4rxeZTu9wb9eVL38jBGnYBHaYKx4GFStAy1tjTGKmmfDFSpVKaDtnNbRJMkSdDGMzQ3dPk2za4hL27VT9A",
  "key40": "4qtKf4neZsBDTA1qtoUowsKSsXibzCSMK4ZCPiqG5yss5xC55t5d6PtfBU7UhMhDgbxMMqAsx8jGp8jNwrA2VUBg",
  "key41": "2Fj6USbBGsBFeasRFq7xmAmZwiSwriNTnN29nMMbXgE4TgKuXitduipDBsVEQ1CgyXVJcPs8aAJJCAYjd8Q5d4Vd",
  "key42": "35EBevnTDpRVmJRD28zhjXUPBBVFx5pEPj38tMn58b6Vc5tUNS4xCL5riga49L9JXHtJvB6Aspv3Ff5G72mT5VXg",
  "key43": "9tjFSMjGFR9ePAoSAMFLpPwjcfXnXuwM8PpNHLzE9q31g1ffn6LodsUxKAqbwu57ijjEqyHEZSLe3NtJF5YaJJn",
  "key44": "4f5zhV49nEeGqu6PdDL4nV5DhvHbxgHLEiq2vs7F6kuZ9cjYLXN3u6PN4R5P97nf6SNPuMrbYpkKWd1C3uQmrMvU",
  "key45": "M9WbYX8tf1uBfrNwxHS8mZKsNJga6X25gV9QLchLUjWWJ7t5TBzFz3dfUXBLhNnCc1PXF8iEKXie5m9qtgio9Jg",
  "key46": "4e1TPJAcPcEtYu6Tk7bsmCBYAzohH2Sp92AfiiGQwy5ugZRg7muwrnPyYGVhqCUKuhak6HS4w7GmU6tRvoNcN7kc"
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
