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
    "EtVLDGwVZNfLYje3Lh6LhovWLpJDwhdg8AeWToipa7kH6ro8osUVEyVT5itMN3mkcCvV5UgpCSNNQy33Jdcc88e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AQKMNXRRqgFbkBnbuH1S3JoZ1TCz6VWBdETLmfzsfUFnSMs7mLNy81xZRHHtH917P7gydnjGxw3ttqPNA1iG3Pb",
  "key1": "3Bh3uP3ztUJGDpQ3YHki3TuHLPpfyYv2gGiUXQp3otrdgeMRAJVr7GuzFHRuLAvdMGBpaExZh9EU99bhb51Nwupq",
  "key2": "3yCux8eKF2etWaSkTDQ4zHrPDDzf9wDMu32mfyrRGVQCS6oJksgYJZeJ52wvobxp4d8QGQR4xk6PbupsZgQbKVxV",
  "key3": "YZh8wEHntCSND3iJgXXqhw5wwQCLLB1GCXk1ufUMirECM2uwGHzK2Dygt27soNJk7GXueK1QRdetjHbFw6nVpqh",
  "key4": "4YAL3beStu9YHnH238aDnLk2dTP4c9frxCEWFdZA6HdoadPNf3ApjeQiHkgN6ipxm8tRP2FZLum1mknuceuVNmZB",
  "key5": "2sd2Y3CcB1gqsWdszBhW2WpdbNpM3onFGBADqQpF1JjfcakEc2Uyg81izo23F61hov8L9p1tGt2DmYcr4z2jCA4i",
  "key6": "4fLTNfSZZk1RnaC4iJUuJkF5shB54DKUgcuNkRwFeTuVtMwZ2yHCChH6w7qvmVxtGNMn9MJ52Vb3jjoMSMm1yY12",
  "key7": "3mfhiSH5aYWPrCEnJ4bobbMCg2LaZfEZwQUTm1VhoEu74BADRbKbPnTrsDQhUAYrZkhiV6xDNEWAbSXYzdH7ryZq",
  "key8": "28ZwjqHTQcUpmCoXDs8WbDZPWYfV7xnkXCDSunJgXeruCD1PWJoRPKcixPPisDH4X5AcENUuDLJNW5zouykLynf5",
  "key9": "rHozEUjE9eVHpwe79eDzerJpj4PKMFCQpJpLe7a1TEJz8rvpsYhYZaWecHeDindQCGNj6AMmeZZS4dwGPJGTPx3",
  "key10": "3GZEXXRfgrVXAHKdY3gAV9T4Sopr1qU31FpRS1nuuVvhopjUGLQtUWWB9sbNXCew2zC2Sr9WUKEq9qs1mKq3181B",
  "key11": "2skdN8H7AyqnaYsWr8zmdYVufEa7ZvYLcV2p1dx13eM2jbWkcE9YaybjmRFypBpnFYhSXY9drWS9x9Ny28xE598u",
  "key12": "4Gw4nVmCjNe8nWW2yAaCw87WWjiUZG5JcS2pgsRLosYwNzQ8Zdrq6f3msZ1MH7ESrXaYYDeWS6pefnLb6v4LoUd4",
  "key13": "4qEnh9wDC5aT84Qj6iQNP32pPMhZFQHCbsUWujmpaRvxt68dD7zK68SN7fYizKcLPPqCeLBzNBHLosCMLbiQwrD4",
  "key14": "2hMHaFu3ASpvzH1Qqzga7PCFirszKjn2yhqu2CUFo6WaDKz1BZV9JPfeWddKxHi9CJ1G6Q9Nvz78RHvGJYptpTqw",
  "key15": "5VRgt8CjU7cTefxQBE1FXotnNJDmECDfKUmKXL8p5eC8bsWYa9deitgCGyLLeGEerJS6Y4JX7Co32Sna7jUNLWqt",
  "key16": "4UP4dN1inSddUD3uk9hpNk6qrWcMewi4TL8TV2AWxce5533cDKhVTRjepUzGqWBpV4K8D9zP7Zg1wN5yqUcSVdzy",
  "key17": "5YZBg2FkDmm7BvxdXUV7Nb6D98fhBt6M83wbcq3pdTQ8iuP2pvpNyChSwyHz1uJPz6HqPKY5DQXRqEYtyedDqywA",
  "key18": "44aW9DSz5KSsX6eTCHWseESfs24sMonYkxGWehJBkcShSobtA57ymcv7QdQJLW1tLzhysRr79F4Ghm7mdsH11myT",
  "key19": "3o1BGe8VTNsiy2FoyjmD6C5Tk5cGishn7kZHBtbUW66wZ5LQ1hxTtp81iJDD9TfkxSUBcskbjTMHjHhiJQxeyBBf",
  "key20": "s1j4SDsxgTXxL53LpSxdXRiXH7EFCL69AHQD7tsjgTZbTj8yTygxRv21QbSz8BGEfTYjfo7dfE58t14t13V6KDh",
  "key21": "5zyw9YmzRd8axuhQAkpprBrbHwKDjMRtttX9oJMqUYgKyrd6mXFHPpdY148VxJPdPEBGYwyqBrTaNx6NmJ3JvuPk",
  "key22": "nCM7rLBzEopgDkQuSP7P2u4jsgZDjhCVBBn1npD2igwjoWtF1Jg6WJti5Hips5NUCZkPgQr2SoLwoZdh6suW65B",
  "key23": "4fbGNtyC2Sa342P6wFFPQ24Ra3f1asQCRkB3XG34KqzdB6RtZPGtDnCqBHJ4dros1pu5RMr7AayoTfJZGGUvyGDA",
  "key24": "2yGGuSNKh9dt5y7NbMyJhgtZZuRLjVaTogaMRgaAnQWVnruLEtCdWHkyer7grnbqydZ5CU1v488n2ftabDybfG9T",
  "key25": "458RF1uHNeBD9Uweq4yz71V39QvfDDip8TNv8XnBeJ7uaCKGSuiXQVNDaskXXzGcn9Ayp1zx8MmZkX8T9Kz3BcvE",
  "key26": "xbSUJSBvyYiUfBnqNpPD9Ea9DUhBNw6Z5GG2e6EYrScagK1F7JtuaXWGLZz94e8pw9Gb4hdd5edrQevzJUomyZ7",
  "key27": "5i53JyLiWakTGoGdYBgZv79XPE7r4z6opdUDJ9Bjo396wNSobbrzLp7d48Kidpj5yGLZkTqrcS7Jh2qZT9zSABrG",
  "key28": "3Fd8X9BegSoLUSdUff1sNrmg3XuDYxsxEBuW3wUNGckFRHa7wKf8uRgJneSk5K6LQgkuqsfs4ujAnZncYSc3fc3K",
  "key29": "5VhJq2MiRbUgNHnY9XSXA4iue1tNPZt5M4CJAYzSQG1tKSLky73FZid7X66NTDjPWZhyqqpoXktUaCTPf5kWY4B2",
  "key30": "5HB7nwpWq5S9c4wREfCAUQVEveGdqdL6WdU95JSe9jVfikoVYCi61xwbPWMnbeWKea7vJpziMBAADi2V9ArkW7ZE",
  "key31": "5h4HZdNTmtduTQrnQbo4Yzko1sXhG4Nr4vq7zQ4zWsEoXpRR1No2jLRjwbbKNYZhoY7oNohp5CVsnnr1bAipvwhB",
  "key32": "3LDtCVr64aWugCXWJge7zw4yycQGWHEsARPyBcyhzQqZBNtKjLvtzNa6xuf2JcM9tob3EB7D6wNerHTQ5ugJ5J2x",
  "key33": "3XinYG8WNo941zxrHtneAAjBfCEnMFSCdCT1aGBPphZgx84mbXNuAtEzRC2vRFvHraGVBPoLsWejMYBjSdrSmADu",
  "key34": "429cU2ebVPUcPsEFfmzxbDa5tjUL5RzEjCJ3DcWUXvUEvFYzrwzt9GUyN8EGaW3ugv8PxLbKJTePKGrQ5zTUq7m8",
  "key35": "2ZgUynHwspLeLMbjoLAJcfrCuYqrMhAbQFt3svbsZ4xZZx6SxYTLWH334f28YzBvke1S3bxVDj3iYh5Hx6XMNoiT",
  "key36": "Zne2iwLAFVrVXj3ie4AFaHmTPKYUFy2NLKb1LMAPnErrmELrM4FY4RiyY5mrLRVPup8YsLBgrvA4ehWKsSsXhNG",
  "key37": "58XyPggVK7V9qfbWSpKPvu5fpEyHdGBZGvQs76wRYZ4ExURQi5otjKxdKcgG9dTkVTHbFezihMGFa2dmAvbXoHpV",
  "key38": "Y6Um6pTQo8PahbtpqYUonWUskLsaJGcwQkb4V9HbjcbkqMJDLP75XjDmVh4ykr8AXbVTqL497xxYWu2pghXxT6j",
  "key39": "NbKpH6R8HwdUkwgHqSnnrzWS83gQPAaFMzbxaRd7RJ49JEpEJai4Zw5LNbsFH5YAjhewsVFggjdYpBGuXphEica",
  "key40": "21WK4g3FAJBP6QeL96nHyySdMDT3B2m7QwdbgGkCWRZt8EDmZjHVDjvucuHxepbNMX8zaefC696yNDTHjKdHjBCH",
  "key41": "T2DLHdpKG4qLJhMFiSDwB9xqX6vSuzsLvYiTpbQtNYHohWFkUaDncKAuQDm5e1gcLUJa5VtTYZMn3VAs7AkPzSf"
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
