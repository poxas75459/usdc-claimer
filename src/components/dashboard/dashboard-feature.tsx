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
    "29vnwUH7CNv9JpKnYKYC65X9ziRmcotFQUqqk2YqvpDYLhwR7KZwu8ZQRZmfyKBcb8VA9RKWxTHsqC3GuvzWv6Cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K8cnkTWBVAwgKU8owzVeVLXfiFuyrCmtFajqpQjFan412kw4Fo1T9awUPS5gJcX4r2aVWhLU3ziE8NgUMWtPZYg",
  "key1": "48L5vSZsM1iXvE1VqSUesgPkXdBD3y9BQbtJMciT2tKjCRkhRLeRqwofjueRWf2nw6bUUqML4B2rCC8VQh19MGee",
  "key2": "2uN35JZQYyXidPvsyYnXub6yYi7Uz4fsyXoWpWpxvF6S3xGEkJGHtmF2Anv636VGkU33VaoHnr7Tw3njqfR24uBL",
  "key3": "2GUz9A9GkDeFjU3DeCoKcqjybUiGQPiWQ51NN5aLXmvsfdj8ZjhyaxjnDSiMZ1koiEGCRifrJMfjRt65ZfUYmnbJ",
  "key4": "2joDjbyNk7C8tomiNmvxvMuNvhk1na9zvERdPzU5mbDm1Jgti5rknmaySzv1Y4ZSTDib7zXRevjpxL7QMdg3Xehj",
  "key5": "3KShYW8hNDZeB4WZs1MRND2Q51zt7seT6LrmZiH6gu7S44h69yvBpxQrfHeahmBviqEwRDHpWWtcsD4uaYS2DJcb",
  "key6": "2V5AZZ7fxuue8fpQuDPJwSJvxmumz3pR4WKUGP2cfSa61VeShRCbJziktTvtxN59YPzEfbi5TmQR5i9UBjzMzQi8",
  "key7": "5rSLYNjo2sPLtmTrgdxFLxZvxXXcBg95AKU2WmP8raKgzutrbHjaXMi9yPkEDrXF1Jxvst2WvongVsYNuAycdDdJ",
  "key8": "3UzgMyGTstANpJMesyM7m9TGNziKYA29s9SGLN8RmjP3WQp33CXvakTxKBvytoxKVWByLgLZRgw4ePuCdQkxhtiu",
  "key9": "4bWSmNLFXgGHEmxvGpXm3rtSqSNG3Fd1J2uxMgo7qcDfEd1k7bGFDZaHRqmUtXFGiXihpjJJ4KECfZCSxHqPtd8e",
  "key10": "28Uf1DwpdZEorjgrWwS5PhLZaiQmaJSsJ3sWNxxiCpnGvw1Z5gKVaWvviNWN8hRPWzQVmyGNiSyheHyhTq2L2nMa",
  "key11": "ZMobajW6CEGD6VG8VucqosxYtrTC36s3P1HbZcKXpRNpjMazoaiYLkvQcnoM91HehX5M4maDvzVjLFf88FRBaDS",
  "key12": "edjhoTTrbXrGo4Qq5DmFX7xvH28S7KEFWPzitX26Ls5SYf3Mn1b5pN2DoBqzxA3ukgAmnEjB8hFvmcqF5sLJbqi",
  "key13": "2a3wA7e6anL9sugSTHb5eVkt62A681hLGzaTgQW2F3soYPt724oSwRRD6BcbSrXkh1fHtJjnGcqVXo5ZQpwV2VKt",
  "key14": "3Mph9AqkFNsGXWMq6UZ3DgVZDPFECHSfhbr6hLBhswVUjLqWkrdWZ3FjQnLswVopYUsXswQdTw4rcYYWG3APWkXt",
  "key15": "5PRX5GeTmEQoo6uWXCbtAxwUP6kpRTv9iQF1f4ZprkFipngSUs3ATvTYqWGjBvTzXDWkN7Efo54V2eCSyVXJo3N4",
  "key16": "u7DHpVQYNULB8Hb4q7KNvfrJWnvAjsvrbRhvf4dCAwqzZR8xCu2Cq6RtKyMqNzra1QLhVBCk16nRksHo5aRirZB",
  "key17": "qdQrWNjr88ashckwF3o8vpXsRh9gWzomhes5MuZ1MmkHT7W1MvEM2MVBJVVmBZhxkPBzU5w1VEDyzw2JEqt1JuR",
  "key18": "2KKXLL7FCahdLfWRHrX3w6ManAYnkv4ave9As9zgS4sZvPs34BEGAwUKRyQzKCBcCEZUefqmdUYtNkLDkkC1YsvL",
  "key19": "4CRKcJQVwX1B2mYhPi4NKTsEfXyfv68PDTKcyE46v9m9JXiyNiBZ3WspXyfjomjF984rivTCShapf9qvKagQfXRN",
  "key20": "4aBr1JoXjPd3VtRR2jUnErhqZH7Zda4LjewceHC2665Z29kQnGiUUkJj658iuhxAgWn5aTcsYpuSVDxtUfPXGPYe",
  "key21": "4eMsK15JNBVnzLH3mKTDUkaBZSmvqRCLTqMuEaJUGHbnDQFKfWY2ABN8nrvzxuStqYWbxJYQBM7sJYbJB8vUp11k",
  "key22": "LNhRYDHP6CLQXZx95THEj2n78SVMtoUhiiwhqHQBPssrYEqWKDDFESEHWXKrQVmVBE3FzS2gCAejiF4snFETr2K",
  "key23": "3hVuFHbEwLQWB2TjLfvFXVh7FXkkYnGHdXo5bj2Sm6yE76SEcaBhcoFpF5UC9uGDQDuWxxNRggPpnhgEHofxRP4x",
  "key24": "BSd848MJE4Nx77FHnaWAb4o6BqSpx816gAym9eWwzgE65FiyMrJCddMPQPinFh6A2eFFj7LgC66CjTrPbt95qVr",
  "key25": "5SFaf6r6FiernxB7ACqXbLkwAbyYkhhrdPjewdTWp1a7rGEMf757oAKKR766YBGVrNTpxbxuXZAB7s8vfqnDbmLc",
  "key26": "3P8Pv998RsEEX5tN8uf8cwftqGucxo62NxbFQfskZBD1tYuncoHebb1BNS7sU1gnwJncvKqVNhtvLRtsqs9oFVAm",
  "key27": "4zsxsZ5mLzeYFN8UdpbS81gGVomemmK7Wdw3tVjZ84VvENV2P8GQvC1n2TzX4iXdmWxjSeJyhGeK5Q1ybxwm3Xb6",
  "key28": "bfsVVfq17uYrfh1dgWs8w391bMnY42Lpa4RLUCVxRtYK2AfAPV5ALVsedbB3dLwvAdtUTzNxtXZfG3KwoeBnz8y",
  "key29": "46jHuVfEeNiSBAjfb8PWZpcCMzGCsLVKVzt6AKyKapjyneJK3a6eJ7ng8KH2e424q7xieJSXkutqG6wi9KP9HVpf",
  "key30": "3B7qhsnfaPKCF9QLKRA5KDaYAtNJcSpyTLa841fmEJUHbxwiT81Rjjjvpbz148h6ZtNLiSx2py2Bj3FWms3W5AMR",
  "key31": "4ugY47My1onrAKaPur79Q7pDfwN3K4HYLdnjxRrhUd9FqVj4s73E2GHJCzidP1jKRWhHvT61fqBsYMBL8V9phnJ",
  "key32": "3pnUs2pLx2kNLsromXTsqfczVhLoRJcFrxkGNrUoySZrXdf4TXAtstts7jrn275g34RKzezGrDkDKQfgByYdqg6T",
  "key33": "45NyuZRtqzECr6RizMF5V52Lnmzih3qq57XxkqMzqt1NxiwZqbmWTyqueBdq8kdjLkGfApaAyfFGPckFzJLRjSyU",
  "key34": "4ugoJy9dkwefCwnDS5zTRVv1TcprM8QpW2nYhtzhzJjokseAZuxY1PX7VtrVWDsCHmJqQwnYSKksSS9gpZ3n2QSR",
  "key35": "3P5c2xqrK3jgcLU6dThZ21ZTc2N24kzaSPYXt6m8G7RxoPS9uV6z9qB95X2QDXCjQFLatGyBSxTg52bgrPFHdeUm",
  "key36": "245Bi1tWRebFZeapyH2RKEozhTQ6Up3Kbrw7mQBAwK9zG5UiKCJeMm48qJbbzGpPum3Gg6NVvwEtLm2zqB6tLwNU",
  "key37": "2mfBzs5uXrPk3sE7bWymHWZiU1QWn1MHZdm3Z9VASnY2x55wG2rAP3TpcT8hL34mE9jMhKhg9mkSnR6ucm7bpXfc",
  "key38": "5fciSSZLGRajkxe7tEL6R5s9F1ZfQTJ3ec2hwwojbCQmYTJ484ER6WWxbU6ETnbipVFf7zw49L16wNJM5mE5us5r",
  "key39": "554gLZRZMHQe5kJWtCxMEUKGdBpVQtBYw7SDzeWys8mJek7qBbqzKCARjth6cpQBiMRNKoNJH5kYPpbUnQ1GqEQ1",
  "key40": "5wCc87EawzM3RmhBfeEKfQxb2yMpo7BdYg7XBSY3hN6SnrRjUSrPDXnEFrB8aRpxyefddN8KgCyJ1eR9xXhGSV6K",
  "key41": "3oYfGQYVqdYjZrBh9jgQxDDpsj5Rjd6H3LXL5k3n1bowwV7TPovf7Sajx6HAKjQg3rsMmm2i1NbjSQ1YyyMfpCaz",
  "key42": "4heouNcTukKiaMsDE2sKPfymuAehZBoEZoYTXMt66oVjXhqnQAz9G4DhpKWufdVuiYUJp6huQM4w6mbG4QBWUSgs",
  "key43": "4cGPJXN9PPrYuFtseAxkhKjnwjevcTCbQ2C2BgxAoJaSzWpBMzsArDsAdGPuxuX6HbEtSWvKitHL5o6zFBozbbJT",
  "key44": "XiEi7oXULkkbjZLgjJsHVpGKQFWnJznbYEW3WF6b5fEfJz7rZjtvKiU22UX1SGotNAU3dtWifgPpDEWL98ccBPB",
  "key45": "MXC3CB1icwBCX4UNKLuYEaKufvUtUZa13ixdn2per9UMD1ysHQ6K99kadRAJ7PSuqFq3ZvEP5u7Gaf7UhtmsU5X",
  "key46": "4dfi4r89ZMj9iAgw5GSQkv94FQ9nRFm5ACREfBGHBAAR28m4wQgAuupRwJ7QtKWkPiEhGWUdcjoof5PQ61rzr73h"
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
