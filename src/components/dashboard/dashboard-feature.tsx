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
    "4oizg35SRTioDPgj3SwMq4mTrPMx8H2MdRbzNjqPk3e4f4CSLouk6oC4PGLuZ6EivCnNKJNqEJa2zG2bfZHrujV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u2U1igaUk75zxwm6BVAD1Pt4MJy3brxQugQoqpC8XdEjY6vmbKsCHDL2gaoVxuUnVE2JBitNbxCcscnmDmuRsN6",
  "key1": "4d2MKzg7wuo4Xk4UraebcNfxdy8Y6ys1oFkjbbZQ3RmPz59JHKSyLgKo4nQRCdXsuSECNP98nKgXqbnTQ5uDLsWy",
  "key2": "3RDePSvSgiSoMAfD43PofRJ5DcsTGEsPfbg8nULkhEd4H1iKtFwqeabFRjyem3T1RupZCp2XerGZnGChDAuPt6uc",
  "key3": "bDNLjwTw7xkWccinif5eFYVwTRcokJAtQZm3wLCmdYQg3Nd5QAzHzSMxPQCRot1MqcAdf73tRFUJQ5QzmktXT1E",
  "key4": "TRTFLmWsbv8VtJwS3KK7UxYHJ9oVB11v76WUz4XUH3xRvJXD3qfgpfsAesoZkid2X4k4BARgNin5LKLBiVf1rev",
  "key5": "3cwk8YjCajv6CcRRtPpvJCNj8cnNQBJfcqhCrEvUb69kmTATEDfLRNgtb2rGxcLFE1hRpfc4XQtYYkdUGgFk7iXt",
  "key6": "5tSxPNgSsGfQuXa2dcFBer63WbaNwhtsnjS9aPrxeVB9Kcqn1wTGYJqV8pvxqHdCxZQoTvnZs9KhQp4qBMVaGHPY",
  "key7": "5cBn6BDtydM5d9qEYiuXo7WUB52ruaHLzGmqejLotd32LFptN1EqGu4yiLh2QWMDcngFAgXeKBFPyg1xSH91rHBs",
  "key8": "Kq9a3zfM3w7yqbnpSSkgY1Whjk33EwZya4U7HYzsBqiQoVGqKV4JNWtoAcXK346cGgAV14VXcofT9oFRtTd2dQD",
  "key9": "2vWRnArUt71msbB59Q7z8B4LJkPWNvxXEoWL4L2Q55Sfd1PpQfcD8j7SpmjAKF2gBrTHv6CWcRNgL4f82pU4NUac",
  "key10": "39DMES266M9PrN6dCMDqudMvF6EHvcQWNEWNRgGhad2DarcsbqHbFkSjgaoEMQA1Tbf8n3wd9ArYNy7bvTutRxAv",
  "key11": "5JaMjBqRrtEzQQYn6iJJimBmp77J9xLqM5K9Ycwzo6FB89wDPuCiPoDzQ4H6tLUmgSVsn8etyr3pLmjZzZzhwN3e",
  "key12": "2LzkmzbYQjszJPNNjjf7fEMjNHxMnoajmCgh7fLrPYSkNsBsoJdrzFK1nMEPZJqymUEwzQi1FvGa9WaZn5Uhwmac",
  "key13": "3eJYPJzWnadjKZe1BHJPj7YxaPwpTByWM5AefET9LZv4HDY9J389dChfJTf8WwsVze6kWoxcbGrvZLMFioZfrRba",
  "key14": "3e5esBYaJZV6b7Fj9UFm1NP84a8H5ZtJaKkqczbhoGU8nFwfpvZEujsDTvNhs6U9qHQVPs3LfCDix37Fa5T1QLNq",
  "key15": "4kGhaTBRuD5nFBiswLFZJJDBbC3hCYmF5EvDQykAqUezCnpBpH7k4i5uuNAyHjeaMc4KxcSgq9hxhVyfeVh8hihZ",
  "key16": "3Ekw1b2b47etMVf6SGDMkNzbtvs9Qjvh3Lz3WiTBsmoBNDTbPB4psBo5hSucinWG7y4YQ8L5QEHbsnYHH4UfGUCz",
  "key17": "3zGVRkcUapdJ2oPo55v9ScFtuByZV5G48p6k4htiFqYXjm5YVJDVk59eSZXDjqUpnSuF1DqfnaRxb2mKxKvsao4s",
  "key18": "3biXU2xofDTz19jZQ5xRF5JhZC7c9nNcp18foQMQGJd49uW9QFSyePZTeH8pzjH2TbgxEpMfvYgmUQTHaWhK9RQU",
  "key19": "vyJMkGcUPZUSztMz2raFAasy1MuWmNZxQgy2gNAoaFhayMNmUZi5ewt3BVZVARqM95HfH9N1M7F7GTWJmXrN2kH",
  "key20": "4NUihVyq9AntxPLW1rxqt66iErvfkEre5YCwYAK52izPe9ZVao9Wmonn4w2BEASPc5qfzsbAwNJ2SKSquK3J6BpB",
  "key21": "495Y4gEjG7DaWBthNJrxhvDQEvw8LvbFdQ47HnCcUN38rZ7bZUMXQtNRoyg4HRQDc5g49KXWDutfLNZqeYtAhDLg",
  "key22": "2gbYhjkRmpqmekUbZPBUYqnB6aHxr7BwQDxH51DAHfMWQiLCB78mPmVymcjWzQSC58an7isK64iE5994JD8tL3Vp",
  "key23": "1tC6uBHsTnZWJjRfSv4yrJYz9gFt6AumYLCVyHdtT5R48SGKkYEZ2XhKpiWEKxhQtZgNdoJYGTXSEzU1LvCfDaf",
  "key24": "5zvGrxxvMUjJ8xrd38vx8HCgT8pXaniBmoCVwCFrSSKVqbBSCLR13SUbXnQFX5zTyii33Jqb5qj8wYV3N2my5k3W",
  "key25": "3eF2GW4LuemKXS4kEj9v9qXcmnJEhTZueD6R779ughFjkEnKqqN1agaFjzEG2qUbLpWcYDGr6pcb6UqbD5JFhWoG",
  "key26": "9UzS7SHBGCyKRh6rFXtJCHFhMB7ieCCZUXxKiukWXNxjo14TSGVnZbD6ri152DYt2iRsHCTCWFNEHYB7Lhu5sK3",
  "key27": "4eFHJncVruE4HhBLMNW2cP5ttp3cuW6nquepioGur4xwibXGr7aro5QLAtsJ4un8pt9dEZvZUFQuvm864DuPUPnW",
  "key28": "3BBYkw1pk9PFGhGPx6pXAjPFEtFXDCmnsvd8sKob8StkKuVurQwMqYjqXnG5PwYGeuT1KUQKZhGv1SED3tAhuUqb",
  "key29": "48J5i11syoVGntQknH5ANBpacgYJ6tc1gr7P7zQMmD59aaZKSCFQV6E5EobM9LTRrGyhrp1zsN67iSEnnBNALEU3",
  "key30": "4ojEcdmTmSUogzqP82Jcz7q14Y5vkCUrUJ9zCDEjQQnu5SShLmFaLG59ugZGavhYRWx2yuM3Nbu7weAeF6fkdNe5",
  "key31": "51fVjtci2MTFupqxin5W9kqHes1yRjAMykQZ7SKaZNtQTJjak4PxXbLu3WpWxgcUQBRqtAPcAYYLAbH5ctQiDkpw",
  "key32": "5NST1QFma9midKNUg8AzfnRTDfjw3g3N5E6Atyq6ebd5sqn4ntLEKFMraQUzwLj355aUcG18grGU5L1zdtDp9TSs",
  "key33": "5yvTmwFxCzaPpWngapnzMrgh53Yjnah1X8yUxLWjtfRHSDDvdLrztFpaRmntg7e3vD6WMmEAZ2igMJsedknCZAdn",
  "key34": "65XpL2gxWUAozzo4knKaBKvGzN52NSqFFfT9xNp64VMqQiZcm9MFRe1NzhRqaetkr4SJKjQ6YvB1U9wBconAQ7Pk",
  "key35": "K1o3tXR9b1Teps1x4wgdGfk1jy9gEGJVgy9tnJzkPwzyJ7M9ZADXV57W997rVYurMvCenjLSMnZNQBF9jP5944T",
  "key36": "5DsDhczb9vg2YJCttbp61aEV1VKbaZPL8rtXTDCfhUdz3DjgzR3FaZyyNBw9jUYyHx6Mjna2VMdqc2WZYXmUBUsQ",
  "key37": "3cyts3QZTmwCRnNMpcimBuGsLp8FT4qMBAqDQyP7P8hGptC1pMfqyAshGuQUFacHPCtZFnUe23hswAZe4rVJiyqn",
  "key38": "RaFsHVRDnK1VkFbYEwpeiDoRhFvD92MwgeyAMwEPyjHL8AW3WDAvuLYuwTWS2QwqVLehx1L1eDZ6dv7syrXznoX",
  "key39": "4hPp1JCekgLv9zkeCNJY9PmNJk7UjDYNHNysQjPbdjEz1QMHiG19uZp3SYWXWJQhQmq5uf3cb1abXh62Zr5BDyyb",
  "key40": "36XVzWGYxEah4HZgkYX78UxD5mXWR3VTpm43xLxUfSx1dbnMWzPd9nc3RYQgSyfS9YVdBrmZtqv6V5W24RZEiXqp",
  "key41": "4fYqxxhgpqD4wQZVL7T7fmCAH8xokun2ii9CHRvEbiDqe3xeiQMYz9H1meuHFN1JpFbHb2PuFxRc6WCVBxAGNzfA",
  "key42": "4AtEiguUpw5x1AeRHRQrqpb5LToqT6SBLTixu4koUrFxCSyiMXJ9GX5nvnXPNVyTnqW6BUmmPmvtRF65n9vUc6DH",
  "key43": "w2x1joyY25kBPTr1hBsWUgQi9jaQXKEyqoehtLcsXH1kABLWQkaPHHQzYVi51nmYnVmuc4msUJnFz6TiH3HC8mW",
  "key44": "2UU9aA3TVnPzFdo98g3cPDGETUiB9i8mg1H74FHXHbFNcCRTsAzoXKD1o64FsBsdhqWiUqPTzxNv9bsdg5V2y7Ni",
  "key45": "zeY3WVKLdN41vjfTiV5ffwcbUbsyqvGM1j63baawjZmCU4XBeenm9amf29ET8k5FjBGTetb8LBfgLSD1BS4RCP9",
  "key46": "3yQ4ATSbyb55juhmXBfs5f698L9ZBZEgmNrfAbRXN21dbzSPh8wp8cZkJJTXNHcvBsUVuUoatGqFutpYxkJuRpsZ",
  "key47": "3ujcyu7ZR97xz6LQSkughozYRyEiSWhw3zwGTfKXa2Ttj96jXcX1g3jy6N3S6bAAwP51DucEHsLj4BB2eBLVKMpu",
  "key48": "49WGkKVVd84nZbYQggJZia1DasdXcKLDw9NKEy2tfn1dydDNEJutnR5WQP6gkrNcdmoUK6e7CrNiJALst98a57VV"
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
