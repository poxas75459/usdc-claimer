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
    "jeDKxr16hm9r5SfKcv3rjzmPyjRwAPfGD9zi7rjFeRbY1bstLsxjVUixX1bo49KTKQoQR4Yo5hwwprjegjVf5hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kCuw9Y49y812Ra485HAqy2uQFGA4kiXrVaNnDyXwqmZ8oyECW5Ef65QTJG1eYdKiBTcvqBMXBPnF6cCzAy8DrPN",
  "key1": "2GKvueCGT9J1n6n5JYgZp9ASTdbjbg4uXak5NYz81tKhEPLqmEVyPKPaqrbVffTnRH819jjoUaCiZARp2D6yGs2E",
  "key2": "3XNR4m7Q6LMQwVZoPFxBDj8DtZFwFGRwh1mSNMWqxXev6DiyYozsRQoq5Pcri6vAr9GSWb8RQfhNqwCmhGvDEbCz",
  "key3": "3SmhnDSGvfRucTydoKdAz2QTedrPL2E56KaSEdhYBn4V2AzBrrQ7ytHsj6zkLgb7nq7qjh381RC68hLgjjQxC59b",
  "key4": "4c3LkmnwjY9noPSS6CUSq4Up1jjzUrEACU1TZVKNx36vdskabzVjK1nH17nmpBQRRDnnLibUEQgPeSVPrXe6fLsn",
  "key5": "3Rv5mXSamEe7J3yjCqqwq47oM3kNFwNExmfpwqjJyoyMUcjS38ddWVoy7VdStKeFiQM5PiF5wmCFr3qCsviaLJeH",
  "key6": "5s9ygdDKkAGCSbWBAT3hXfe1x7eyQobA8Npiq8dsuBCZyVjY5pZvYaorLJKxYWf6skLfH1fB1vPoBHJcJDGBtN8k",
  "key7": "3xGshwQEfxz6tkTHJuKCr1Xf97zJV9jqHDHBGSFspFb4gzBAqnEmyw1NUTL2R3uz4NBStrSavc1CRRNiuwQBB4zd",
  "key8": "5Hg8SawSQ1GJbSK6MZR5jfGGq5V6DVfqqRYHx4No13vc4Tcnty6X51pjzHMq5smbz4vSE7L3scMgrEQMLo7ZQEtP",
  "key9": "4bD3BdYz8axcX5iKNiWup3RUzzcv2Ge6TfA88XpQUiXdnR4HA5EJGm8XJ5VfFutSbEw5SFjf94heNWG7yVXCVF8R",
  "key10": "5AmYWLMwJvme2c9B1FgaSfh93GQBNkvhRerXiabtGjFyLf6gYoc4hNiVnBVxr9YYcEZahUeP5J7bW4gwSpkySujR",
  "key11": "3h9vE2B6AUzfnvajnEd8tnLriXjDkGsUYq5E5JtkVvA1P1R4fTYjugb1GGVEmuuUsiQXYahRELfVYafap6yNLcMY",
  "key12": "3Xk99Gkn1UnMn82a6nii9Z5y12QDq18MB2SuHN7BDHiZ6kaJ6ADzUp5cDSUkoqNhW1qpTvUoBtxr1jXuA3LWoCc5",
  "key13": "2fwoWNXgVGEPAu64gnMAvz9A1yMRfiwQMMe5zSPiXdQar2KFL8XSowYEoK2ocSSKDBhwRzhSFssvnMPxmYxN6pya",
  "key14": "4xXhdfUPhhkBHphFu2N5L8asyKBEB6Ett2Zc5c5NukCHsYMWAxSBxtR23tGJxMUB6Prq3HehK1hDXK8fNKu4S695",
  "key15": "3jmbMRsEGFNnL38ccUMpHR6KdVGiU6jbvrfXY7VwZReATiohfnXgQAoawtd1siQoeubn1JazVtxAaYMQP86ETVbX",
  "key16": "61mqBjzgNmt2ZchCqwAf6ECdDnga7zhqtnCgqHY7skB86P8fnfMQafipPursZgnDCGsDznsJFSUz7rvHYzDt3Dsp",
  "key17": "4SNd11Tj1VasnGi8C49FkHrz3yXDPMPXBhEPFiZoTx5npyRWrcqc3oTDdLLyBLqFY6rVsDsa42tk82RyRaPBVsaY",
  "key18": "gD8a24cfJhLVdmQXkGBnN4XvTzMo4PirKKgyHJzC2v5HzMrLxssrdnV155ftuzs8tunZxdpEcRviuKVaarRHUNa",
  "key19": "3S4ScHMvDZ15Kv3KWFqB3GKRzXBbyNX51hebFtaU4R9FfBM6oRtjPWKrvtL33QTg8SvebgCGzwQivSdwByrXJJtV",
  "key20": "5dAb9nWSivH6AzVyM4AdCYWSKZCAfY9XJ5Nk9akPAM3PRVjCeXWMNxbbG77ki8m13jNP1xPxi4HDvFzgJSdGeT6d",
  "key21": "3XVoa4QPGeuzZPeYymnUHto63axctyRJX9v9LUcFbQGunLSXZo8msUp8sQ7HyBzYEpSSMZkcP77qcGAssvnKn5Ro",
  "key22": "bvK1jjaGfgEsk8ajvKRsr1hTRFcz1WgwM9vunK7LDrcVQqskF9eTCqxtEFLezKcDND6zFMkPGj8w4aY135cYUHB",
  "key23": "j4eodBvoNuRGiH7HYsCkWxxuQ8DU1DHGfjKbFgRLBy8gHZQCZxQFk2sYD5fjac1PgTbusjGBDfQMoXKsVNcEdaR",
  "key24": "fPs5qWfsdHJkrDAB6SFY8gwr8rd57SZ2EHwk2CGXQ4rRD8AYSQKp2RwnFyPHTytCLhsgDhiwC47wSyY2PQhTsWn",
  "key25": "3D7CpE1xgM9jLJqRho1oZEYLnHCsSNV9WrF3Q11UytT1eamUt42WEx4cN9F3bRnuPdWhuzxcv3pRAWGJre3EcUgE",
  "key26": "2ttYsBWRgfVrKtToLNi1hVZhgBKJSXCeAEmeyVgyV2McXmkfks2abECfvdcnifdmjRnbRzLYqn2mDJmQ45KQgJBP",
  "key27": "4k1k33DBWLPCZqzmwzHqvJ6giwcz5BA7AmJcMHvvjVu3L3mv3NZevQ8oEahPh32vJp4LctTfxhULVCoy4qcspvEG",
  "key28": "5b2uYHxDKq3QYUc5b3dW2E63MfvCkxRbyDRvd4fKJveCs2NoVscU83JFhYZB4Cn8CPQERiijumXznh5oaVNkW1aX",
  "key29": "2LBmcEYfkJYdfPv7Vg3jGaVN43AGQSNoikpnJoZhEGgiXGwTbM2VAB5top6TZjbu6mXFPQhAyqRfp8JTWAtkgQez",
  "key30": "4XAE6bht81RopeQvixYgLAYNxfWRgJkiKGR1PQafTirrAiD8fFPLCp3ev7F2jpLgdTbTRkJqzoEShgHBo1hEF2bd",
  "key31": "jxfSGbr5hBrVS8d3F1FmVKvJLHpGsLmwD3aeRcMG4Vz9iRrGigiM8cLt4kjfQdLFtn1SDZQ5bktbbeLo61EVdB8",
  "key32": "4X6oSkkpym4PLyRzEyF7THBWriyiNnCLUABFmhXjaUd7vNBJyJrxuFNBQd2fGjqb4LZnf2r7rMJoVYoJkHqqZc9n",
  "key33": "3U9og45rWhrnbBTcaJs1epbvHoomBN9JRtgqnJv7Yp9cfwkRSniqo3jnGiUP5k2NXma7NvuvmtXc7PgEQf62egfe",
  "key34": "2PHD3aKqDUZk2kXQiaciUohepSCNZJK7fyM2yrKyJ2hPib4kiPNrt2PpjkgojupBCJjpgjKucD1AYK5hRXTGujfW",
  "key35": "21f1Q8DQMhcLKqCHZpnZz3hE5dbwCuL4Rbd8nD8DwCpCWxZgW5FSYSdJHUrDTuvncmwaLKYdoyeXHtFpumKttwDf",
  "key36": "5BpQxKENTgGLzG2pGcNxeb4FtzSzGRwUVcPYsb6hcUXq4wuae9nZgPNnChRGoAkjV2ET1Qxm9GmAGVKq6jvqjYHh",
  "key37": "4L7h1A9hkboWR8Lb8Nh9yac2Wi8WuyE2seT6X2bA5y8qB1uA24kt3KUoDJSW3iZjoA2Vk13cjypw94eFSYStPcaE",
  "key38": "44xg1Sa1zeEjHWqp43qfrCN1ANePCSGJ1BaaxUMQEhfGLyFZJm8WtyTuqoNoY2FZ6ic4QSYpUqdNcruZVdZ7kRmW",
  "key39": "54iaaCQtbQcnDEXZfw898iVMPmULiRiFz9saNpyw9w1KhoXVfa6yBVxJbDvHRUp329ygeGLFJEQGFR56a7fB31Xi",
  "key40": "2Dy3PAQskZk1xL6QsUdPT8usRaN68D22WxZKJXhU9Vrb9FvioL3ZBWC4RPw58Tv9DSk1HcndBQi4Foe989rb1Z6P",
  "key41": "2KWt7wzYdocPJALMJpHF3Tk4JxMx6JyV6LnUNjGdqsRkjLqoU2E7RkThZzdMq5PrN3PQb4ep8FzeJrruiGTMHamu",
  "key42": "2GnJRMN5VT4zyD3c95RPiN77bDjv5TBBU8CWwZqRxhALXfN7RYc3H3FGeJGeAyechgJwNMzKnqt1AwCQ3B9w4mZE",
  "key43": "3ZSDH4qpkk7Hwv9SRq2Bti48JxTEYqiBc5R21jnxoWDjKtBWDj35uCyqdos1Az4v9SsRqnULvapMpTKrg8Hyyb3U",
  "key44": "24rp1Y1yNMeQQHFaCGpxXpJAk94cRoS6QoSE4WsFHjq6XjuxmX6ek1acmaSkXdTKESYWsH2b1hykLb6T9AKaLG7Z",
  "key45": "3MotNoBUJtKgsoxFRtMAngfcyWQWYXwhp41GgTZAC1CcLWhvxJX1dQN11cfCe9c3Dz5HEmwUTp3wLxGPt5L1jtq3",
  "key46": "4YuVAgb2TKftbhmx9P8qbo5SLfAMfVHQBuHvtQHMRG1kVPcqN6C4TtV21pgGHijoXunGhymD4DdwQ4XLEdNdEX1F",
  "key47": "541rE9Ch9vqcMZ8SEwKA9z7mwGwRXbvFGdHWnGPxwwiwGHuKrEhDzFqhE8NY9HDJPcRXuGwn5ijuCS3niyEdqEtp",
  "key48": "dBwijSK97H6XzEVJznNeD3WpSYCqks5nVNQ3aXf99KstECY6JmdQKyGz71nSdF1Gsjy9NZuFq6PE5UpaPmaKAcH",
  "key49": "HdmioPX6x9z1EABD7wuGXXHEyh3zCAaFS5C3Ud4djNbmGapHueUxwbQcmXEkUrf6dzDdXuGqnQ3z5hSH7xDJSfy"
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
