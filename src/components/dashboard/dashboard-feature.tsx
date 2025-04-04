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
    "5QhmUdghRcBKs4mPm53RTyRGvsFXhfBpXJzd4vHr4nKCrwRfyQZapgXi9HAotZqNhWauBTMaFyZvMjNNcy9wn1q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57UKKroFihr1Tz3QzRN3rWnUktgTmZsaf86o6v47kDm5VYpgSXGx8W3q4qb3DYzdnquPo2hqPvJj1YDtUdiojLGe",
  "key1": "2UBG6rojcbXFTPzvzran2MXpgCFbkbqf2L1RuQgBGEiNrXBxGSBiJjQeQMG4wNjfzfNRDURCVqcC2HbjTSD4KDBw",
  "key2": "3KVSx8fCHwDkQPjiUqRDguFfZ6U6MVt5xKgZBvr4FgFUaT6ZW3Wkymvqy97JsnD6PRS7nvcLpDNnjkvmXDoQHmfq",
  "key3": "5mjNinmSPipvZ5Lt6ubBZJhAL6fziHxJq8DkFDU4cF7Cn1AXvzrTrScNZHLQf26hb2hBUBP86uRLhrsFtGtAeTrT",
  "key4": "2g3YzonzjcnPwju9GMeqWmCeqniyu2uAqavAc6ez6T7Bsphxzw22Br8ny4SApMw8jpgJ2QoofSDxR5ch4mePHeAn",
  "key5": "44JiZYACSiTaZRTF3J1mGWVrnkmJTR8s4hk8FsadAG2D7ndnPBgpVKikZpdoiERWQw728b7Xn1MqMkU2XPA39Wog",
  "key6": "5EiHFgqJMbud6AjqCWGjMJWrkWstfAoCgmryBD7DC2aZRzHAGWejjGngL4ABeH4s9UFPoFZCehScsbuaEUx6xAjC",
  "key7": "4F5KN1dsWzeWXWiR9dyB4vsd63ufd7NSQpdUvbGzxbGBh8DMe2LbFsPwE8QXDeWteQdV2WN3WR42ogVatpByXUa7",
  "key8": "wvB7FMWfVer9SoJ6pTxR1X18Y8YPiLBdzHVwySNqXVAozHmxkhVusa46zftSsxNuSHmCQg6aTspjZcgSuEkd5GD",
  "key9": "31G2LxsgWMpx1sZviwtKCUjPRkiK16HLBQZwvcC743LNLT9kfmAenwQSPLGZY8pfJogQzvSNTjYA7Mcb7PU9CUyV",
  "key10": "4Q1hxvKEjyr85S1UCvLGjkHixpDDXURqT3s1qUnSKgBnQxJqWYFXBR1Qy4PUWCL79U525MEaYMsuUm8Gphi1uSmA",
  "key11": "2HbzNzURnJXFsLxpXjZnPz9rTL8EwHaYxkXBDXGnXckss5G5iurVVuGdCnqmLAu6mtbCpgUvL2FmAAFMWDPE3Pg",
  "key12": "3wz8XANSJnKfYmaPEqQza8d55Tqivj5ctN3G88xVXTR9MxFYBz9ptWLe2oUP6UujGepQDPT7Dc5uTjj39Lv7fFaV",
  "key13": "cuTQk9Rju9xFTFSQa674tAf6zFr63mZjYqUqsRV9EuGDHffaLCju99mk9QGD9wh5BSoqKNEVjM3rGv8zz34NEaL",
  "key14": "5Apmw3oqgZXgDmnAX5pNY478Mf8sTG2DhLSypEzoVmHUZ9E8cAJ9n3WAoSzMGobnr9aK6T3E8DMecfL6A6ZkZnRy",
  "key15": "2AiztwQxfxKXmRvApAJMA7hEwdN6xaJwnCZs3ufERkP2f8GQ3C3ReZJ3sHZQmjQFeDhCmg1VMcU3FBUJg1LuJUtE",
  "key16": "4Wh59ep8nHBNjxN9tXtoQ6uHa7wgoFKYYtgkETxr3HFGgFU8B6XDo7qzBv3M7jvjJa59FfnbDWuLnBbpC7hRxctd",
  "key17": "34jf18z6MgA5DQgvFR5DyFXjjJNfmQ9tHD1p1uBXu3mYXhNQBbWd5ftZRFD5FMDHVHYAd2icaFCDkQPDKpKgLRJ3",
  "key18": "4HGqy4SSCJGBM5xZgxNYWHzpGXX3SDxw8Lgaei7h3uS7cU67mkUpUdTFyMFUqbHXKzxxmZniBxmD3LhAc8CRSGoi",
  "key19": "2NZHMVqBsGMn6K9MsXP3C26od84k7cJGn1YWWLT9a1TBAi6qDfEMHHwNtvAnDty312xZnBGL1ise9dV5sqHEVz1j",
  "key20": "2ZHFNM8GR74KJnwxwRrfNeMBC8eP1hRTHvZz1geqwjPmPBwdjmEMtMqVL3JrLBimLkaDtJieVAk6x2MGMrVCFohq",
  "key21": "GKQo4rUaH2qvXNPMfb1ffmE7AEb8Ka3MkiQEHoa4FsmaKLWDNW4N27fwwygkwgEsga9d7rCzgQqquLWjkBG3Lhz",
  "key22": "5vXWxsqGh26DLPJVQM2UKyNXkfGXmufJNyRbz8dvnuc12ptZPQq5FV1BEcGRPJaxDmFPvSUhZBA6oKQ6KVTxc1PE",
  "key23": "4b5H3ywXHoCYrS7dN7mPSTWk91oDM13NehCA6U6SKAYtcyuTZjcMGPcXfJ9jBDCo4Gc11McqN1rEQskjgToSeqnW",
  "key24": "4UbPqKxxFmvhQcHpCHe9r5wMaTnGdgiFdnY4EAAHBrvC75mwejkAAXoaDaGaTYkMacyZo8Hg6yUhrMzgUqJXUbyH",
  "key25": "4wzE2tprXZ3NE8k6YEKp38qML9SxdNq4nD7xMgY8gX7TWiYALYhrMFe2xwb4a3maH8WCNCzXiuRsXCFbQiR2ijNz",
  "key26": "3HAzHYZFZPkUBbX3yLHx1PHMPipfVmfg4pLnBVehpvQnPxyDVBAoqdrLEGSk1CDLEFbGVr4p22Epp6L2Uz1UuS6n",
  "key27": "YV8WWkD7EYJFYpeowTLLg1ENMym9NNvJ27UuCU6sEG5gYUvzYPpwwWr9y8VXVR7mZU1DqpRwTwqJiFmcEzW2T1K",
  "key28": "2rpVDeh2k2GM9NTUamXomszJa4Du2hnX63CTZWB74SEUuHwQcXkoQCkHoaxmPAbmbu1njtkuEucsAGvyt54LHtHF",
  "key29": "4Nc6fzwcZUxiHn8iRaDeZiaSKkAEp5qtsRckmofSAD8uZbZvhbEoyufzskPhwXUYaBVdbAbdWUSWG17BaaHuR7Lu",
  "key30": "5emoG38mdjBEm8NzbeyiWkdrnDQhVFkye8mR9c1m8Fp63jFiPDxmGb9tHicmbJnyzG4nXbWMZYva7aMAiPNjbVeW",
  "key31": "2F8d92M82r2HerMk9EnjXtHA1rHtytxYFmM68tdfZyx4gqZkLaH8745sA4tJdEuSXAp6CJsceHLLLZ4eX1su7KFn",
  "key32": "23ZkVR9TtxLoPNzd9p5uhS6GMzYr81VZsQLdTr48M57pdpSbfyi84gkXeBUoHRinxwgdzdHKVPyHZTTHuX7hit11",
  "key33": "2fHc6pp9o3wMdiffP7x562Lp3xZSTUgMNnQsk32S6d9rGeBKXGYEkQM6f9591pUx4uGvsju5nHSFHPbPwCNeoLpf",
  "key34": "4XZajD1VammswR2R2tFegEXoQvhjLmmHGhzgHe1FDSJzn1SXUtHC4SWeF8K71N2DXZJ529EjGmj51HZsuoyYA1Xq",
  "key35": "Yh837RoNeEwYZdBNi382eswePAEjsVQnc2hKPiHZ6VgytP4KV5fTo6WiU5CKzjZzNQhdjJbEErSXhFocK9Cnu28",
  "key36": "5VF3CwGyKX1fCWS3SysDhnfqBHeUp3YhMDMEohXTisdGQ9wcAmyb13k9z5ahBzBKCFf7veN56P3jJ1NxYLbjt49q",
  "key37": "5wGS4ujmVBXo5hivzwXB5sRCp4xuFSgC7SQCFnDByhtjb6M5We36ogCbZHXzWSRcoHg118Nn53hsRF5M9i6ZAwts",
  "key38": "5zYbq4c9teihxYcmnDjXS46YUnkUr5rtsZcpEvZHdspoRuXucGyjTpp6SbBKgmJsAAJK7oZRRw1npimNpy5cBbvr",
  "key39": "2JfY6hVhjt5qRLxFJTN3iVgC6oGKdGpPoyfp5qEh8KpkGt2Y1uVntwjRteHAxionAeg8mqVbFjRLWuWHRHFYW5xT",
  "key40": "44kRazNvrCrx6MapqrguB5ZcSnG3mL8c24ZhyWxu3wqXkGikWp2jhme6WgjFe73GQnfCqNmMvp8ebqTfPHW23VSP",
  "key41": "3HjfWCUzEDzBYCyFMhULp3kymFtDjvKJMmQSboYZcFnLKQJRuVoBQyMyQaTm4xxPKrkc21UENBQ32GKF1CGFnbM7",
  "key42": "BqrNXFAcwdmWUpqQpEpcyNUkBCDUijxZbV6XZDv3Y48tofEyam9oNJQ1H9WidNncL8b6dtmVYqkXLbNM7oHrpD5",
  "key43": "22rSRdfUcKbYfttENEQRDLRQozQ6pxBT74NmeCNmZXJfwRDvqMYop9bdXHFFSWAVAScLJP8w5JzUMKXLDiLgcKDu",
  "key44": "4eLTTpyUtgpFCQbe4NCkHK69SjgrkFEpKSyaYRw1xDZSE9jsHB5Scdbpp6iN5nJcmczxsddb6FsCUmLPNC7ykbbp"
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
