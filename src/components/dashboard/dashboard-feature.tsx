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
    "5aC4VHaMYsMMUK8vNUELLvZSudEVVoesQfyi6vJnz72vCb3nWsC37UwbmEBVmQ796GinE4rDSxJf1LhVxveke43u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YtrWEsNi9zTnTdqQCwAXRwhCeAuJFBkgjYPTJ3LaPU53jHY2mWRhnbXDKTLAzsJsXZsirirYCgwxk61GZNwwFJs",
  "key1": "3ry7BBeUE8NVTzxSzMsPDEEUmjHB2FpG7kcHATuBWfxxqbxqbNF8bFEjRHEV5bbJvYFB49hvWbYwDzteHRK6mcJd",
  "key2": "4Hv18Jodf7iiTSPfbnUyz2Pg26bCe6cF2rjVaBhtW5VvmKwWRRgC6jiXxVa2e8g9hJmk38DJun9QTpkFVAo53UDp",
  "key3": "259GCKLE8Jo6x6Z3ZN55wGBLFrDpVNWF6nB3zbYbK4szUSz1Hs2W5gjsPugJjJTKndCZozA9M5k5hs1ro53vYUVb",
  "key4": "3JHiRtsYh6oVj6YNR219vjEDEuBgY6ZuHGXK6nMDZW41VRfLAbfoKHCp8R4pXw2K3KiwAmoorG3VUdhUDeAymEr5",
  "key5": "5Db1jYBDvdGGpLP4qbPVghczyhaG76TL5H5xoyTNrAeTuichUTzs51XdY7s9kcrr7CfWn4jErjYMowwSbvHaLyZa",
  "key6": "5NQLnm3ivecRKZCDgmLFrndEfzFpPLzWT3HkNTVBwSWQs82kTTk4NXzgEKC9yStZy3sZsuQkf4eZtk6jRqhoyFQU",
  "key7": "tQM4KSuRZk7uxqChb5ZdTeNNBfGDn6XDLM17cV7rGkDucQEsowMxHh8gtCZS4FoUeNs8w1gUKoNQ1Zbr5bVodXX",
  "key8": "4yJnZmCusZTF3q3Hif7qWaKjriXNPbNT9xbK8utYiAxWp1GbdEdJqBWumbmncDBQLsNEPqm7VDyWtLxF2gZWg7sR",
  "key9": "QwWjGBz1DzM5ABdR2kB9wiz5gNuqpHkYBfoEvrgXajGL3pnvYZDoGTwYe3GQiixuwFRSQecS4tgxvnBg2HtK3yj",
  "key10": "5cehcvnhD3L1c9RNBNpjMEW18yz3fA5Qw4zhjG246MsSTdsZ9npypEX5YfJcXtmT3yjA1r4tuMzHhxYAWb1Y93nd",
  "key11": "5C74h5SEbARKFpSZLeorREgjVfPsxPJ8oQfPCRKJFtah8KZNQZKpEsEGLynFUv2B7FSN2gLMG8kAWQuUyJL64xCA",
  "key12": "3ezwW6te92rMpokSF9nhuJQzta7wr9m3rrkccRof3s3UUDVEMjHWtLsynr8UPDqt8hZUoUSWz3qWeyW5VapGy9v2",
  "key13": "5VAQviD38ksRFQUGAL6hdEGb5BT2JxWZqBNTBsSKdAL4C8X71AVLxkrjg7VuZcE1M1XcVAtua84UbLHtBmqyFrEz",
  "key14": "3NPfxGx4YANFKvvfsSZgr18BXTQAJFZrEXqvW1xed3X4x1F5kXim8G7BZm46RikWwJk5Jyj2w5tknTRxjnAXX5PW",
  "key15": "5zTPUaLh4oeT3hRTZjNa7RmyDKG1xJ33svjTX1SgCxnXb22na5CayF7NFEzJYvikbT36JCFcMQpxNa5ZBf3nGzmi",
  "key16": "ZrJenG3Hg1mJwJxwBhucAXyYP1ywPsxjbdt3hun73jCTQRayYaNfzzKBANPkkhq45rEjq62t9mHQCw5oRs5gma8",
  "key17": "3zd1825Ve95phaKWqNdSFjje9VzT9L5PrhoB73FACw4wJukxSeiutsxZWE9swNQM1q3DGT4kaAf9kuHUidVtBfwb",
  "key18": "5EjkxsVURYHpJmuxrvMV4vJ7oi95JEYHGJZU2xMcCnMNoAawmRHhphvDWjug1vxFNAhEb7ubmp7VTrnEnChA1LJg",
  "key19": "4dMAM3LE7Rv248ybXSezKHukUanoWwzsKBkkSMhsvs3FneSyyHHnM8uFuh1u3BFcfgKNfMHvQoTJog8rNC7Sfmjk",
  "key20": "2hdLPJhBqSHQRAPsBvBB13znyw1AZ6YcLBNofXfRgLYsPEp1PTDa8tsPCpbB3rj9wjgA4yszc5wnRESikLDyRb9G",
  "key21": "3uC1rzmF4gNYXymqtGNfYdETVmYkWA7GmF4yWciiFm5oPaHrmCnts237AXmic1qSBxzZxo4RfEHVcJmJKhwC7ffH",
  "key22": "2a85bEpdytVCkSr84R7R2acePM6PAQtoEYbpuUjzh8325UnHp3wehnNnfmpyWNAJb3sQpcSNm3fx8MsW7B4xeUi2",
  "key23": "2Tfj8sfqJKhqsFQtNxaego2DkKmxZ5iq6YjVj82vc5AsUPiAwPPM6ybyvnHnrkFFgQNU5NV5PgTppsn9W5VNND8R",
  "key24": "HSMV5kwKcxgwCHdroUuEGPwRzheQ8z7dXyUohFQFg8okihURubVFnkpLAHePUSDQ55fQnak7bFZgNZNbKDCxNKy",
  "key25": "4v3goVyioPB5d1ds7YdJeBb1Z1dd8BvD2j4Vbr1MgrsEDos3RWAWWJaz631dudbrjxdRZQQYiA1D7p9SGM7KMjfG",
  "key26": "5AqKPk4bqrqVQbERmfTJ9svhhYYkSDpJZ54CBrSa7MnHkwzW7fbt5y3Cqs3Xu1CpuUdRqfcUWLGXQCFU5LMJD13s",
  "key27": "3wtA7HMYBPyFcxHzzNYzmXjm4WjLWHdQMBnNZZCRPYgYBbcdy8E2rPifsEAGYnFDw7VTNRsKN9AMffZPJkhjGe1A",
  "key28": "RHoHmEEKMor2cq31HhJqoSXykDXsFNrfqPyRdv8qcKrXoenHsMNMDDekKs9zEmBcV4DbhZj3r5MowQnQo6K9r2Y",
  "key29": "2AF89BxBaZmygtU8WZdSPLUTvFw3X82JyTjqKkeXkzZrmJYbdYT6MUMnYNLrcz5Jr5koaiytvT1H1JZtgaJopJGB",
  "key30": "6419Cy9yJrgL6xzxPKicG1FbdFrmz3zTkrXXmiV8dTHwT7qoiSkbVm3wFKDLBnfyDYvKbcrSfV2EqmRNfTPnctXK",
  "key31": "2pksXp5t4HdBUx4weP6fQ98Skuz8s6Tszsn2uS7Xt872Ze5Eaj3z6vrE9HQqygNUErKNS3D6ak27Kib6YbKAHoGp",
  "key32": "4QZetBFJD7Ah5n6EAp1XThFF4JrjekwDGq4auvTwC4HQPMXTQBjzwZpQoRgXephwcmDQM6uhsSkCFsvuTMYnx6wh",
  "key33": "5VAJE15nSX41u5zrRScin8gxApr7GQ2f6ke3a3uBD41VDCmHkNWm5L1npkvYTBeKnSaQZ298Nd4zJwq1wdVFFDQt",
  "key34": "2QN6AsJ5WboXNf8wYHkGp6GsPu9sHYEYBpgYYikZ6sFoQaNrfGTeiwEU1W5odL5wP1ejZ7oRKbYKv6cMR8SSTWH5",
  "key35": "2wF3XzBmXojXRkgTVvgBbq3UyYNrXLQDxJeuXaSFV6gDuR1PTibdkHje9P2HkWT95N461PjopEhTYUtMiU5aiBpQ",
  "key36": "35wqdHDLtAg8UjygDoup1p1DwguxgKkZvX3jhdfhVAyK6dyC1mMdcWMrHoZS5ehE8bkyeTBtby1Z6GmpDHTHuKJj",
  "key37": "5hN5PR68cTNVzebhgCcDEswHhddwzoEuzjiwSRGkjcBDJWzCZZTT1XeaAoSDD4w2QV4RYEXTGHLcNE2iRaVnLHih",
  "key38": "3hags8fZGuuAJUxLbp3YtiMdDgcJtr8V4RtJpFgM3DqdKfqk3avyTntSeHve9HprCMfdafQksQKGwunn3YwxMqKH",
  "key39": "4fQwmUtfAKZha3vmnPTwWgp9nfQYSA79Ab26Wm2mmz1z8yMZ8pZ5xZxNUPMoCJMX6CHGxtVw5KLMwcWKQPJgAgwQ",
  "key40": "4iJGdD2pXGxL65pQ5dkmV65kB81SXdVNhhjMDXs9EMLJqJrN2rM3JKiqkHwq4k2KS9KducRwY71oV9ZH7vyPZ6Yp",
  "key41": "oerTvfPcGHuXfvbv8XZX5V99GAZ7LoKciE9z69KDkBdjx7Q8mw5rAHPNgCxc3KPDT1ifAL7WHG6GzvZJVMWCvZf",
  "key42": "Z2CeUdeWQLexZxyLJvTgxXSfEyALvtA6FFMSEXFxrnSv2CgSwqyiDX8349nFYUZuUYacFpXwbsn9c8TAEVpj8uv",
  "key43": "576W23jLHTB1YYcUQarMTFiE9Xv9EDh8rywgVbcQ7wMak2iqiD4KaxbGtF3moDi8R7puXhZefMAx1KJMQnW1ZDwQ",
  "key44": "j5jgQst9aUnStmzpXLTAau2So7571kWcPc5WWviQB2f8G7KfCc7Rym1uaNn1Wy4jYxALzwVXpY38XjR3LkiiCBJ",
  "key45": "5cVv1gy8kDsZNesX8Q8NSrM8MsM69WhE6p5fntf1P9eyPAAUG14WMiCvniEhdL4jpctXzKK3KRmyd6tTVAjRtoYG"
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
