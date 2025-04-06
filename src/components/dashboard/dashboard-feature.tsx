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
    "4V8s5bHXRB3von8iGpJqyvqEG2ziTYWWszMKdhqztFK5Cp3NHQwEQuzcTdnqr72fSBC4QJb27hhrofZRCfgaCGDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4okJSoSRoLUnKStUAfM6j74yfE6wD3efCZjTdvfLGWmk2mNR5fWvNAh1GMyMrgHocQ85btSNtAxbJcrqUUmTfWbt",
  "key1": "4wAQ59koUrVpzDZxvuzGGE2vS8QXsipS1KDU71keeCvb4dmmHAoysNS3m9j8w745mE2FEmGfnNw4ERe47RPiWY35",
  "key2": "3P8xsFmn8efTxeRuZkdWbv1LVv1gZKnxJ1r4kzBWEfPK5R5Jxmbp35ykK3zui3itNZCtxAYuRZXPsXSQddPY76xy",
  "key3": "26789PKfsrGoGsamonLhxMGVR72Rru6389RS7Zrrde3824Wc8LT33csS1yjuSn4Tkx3ZswVozNyJWEvvjGBJij8x",
  "key4": "5Txww54wC2Ho8a15qK54QMPDuEgniBLVFTQAXKm7udyDsxc5TUMr1vEQNKN3uohJyftn25jz6UZJbS24zMZV4T1r",
  "key5": "3tKNrt1QHpmme7XPhb3dVGGKXmDpNiF4WVcz64uPBMuVvgcPA9AbUxJaXkjxh5mn4DuFijYNashsT9D6WVRw5QyG",
  "key6": "Qj1ymWnZG84FmLaUWuZUvoomspLoBw6sX6CQf9aznx3hnk7DUftY9jmgCTXY5jQ7JQ5my7TVhNbePkVMPFn7LUq",
  "key7": "45DFhUnnGBcuKTAZQV1fjrgLDf6UgtwYWkM2Q2tpsG72zYPDcjU9GdhYt7uinpatbRUidDwQabJh1kiF4qDhA3uL",
  "key8": "2kWstqzmijYXRnED7pa9UJrGp1PKBDz8mEqMzeW57EbGKkDg9xHRB5gqBPi1nBbHFW5hHik3rehCLVZtdYdB2gnB",
  "key9": "BP9fgBLQQ5tszLyZZ1LqL3iYN9CwoaSytheKEbWuBFe18ztyu5zSUb4DsDukhJtLwhaYgsyGFQdkqF7Zt6F8sca",
  "key10": "3EBbkdxLEgitvmUFsjvsiygwRodsJPJByQcRCVrzu3uBRmgMMgpunukithSohtRKhfrujJapdQ3cQG2HzNdU8Np9",
  "key11": "5rNxebjbqMsqKPDtzS9hyMci9YzF4odRJCiWwLgQCkKX2FGuBZR1yPyy9cBdhwEofZm5XsaN3mPYr7i7F9HCt81d",
  "key12": "29xoPvgVSa54Mms1wHQso6r3ZFu9MFftVkPUeSXTtsL8eg16oYbgN19bprZAPcryMUJCJhxWkFemiktWeogCnwdu",
  "key13": "5tm48PemLBBV82JcBdN9sYeTEUcv5ivfbbPUHpetNuoPyFQqq4BQq92U8KX2gaSjB739DGrjhq6y2PK9m8KWxktx",
  "key14": "57HNa1G4CS9VB47riqch8XgVQkwKGkki9J8iofgyGWw1Zp2ig5W7DQnBvL8BHpNemEVmTJbgnCCkEBntXYaSrj3v",
  "key15": "2f5qa4bSNRiDkwcCVbJWGd2rB7JBovNa5MEJjBovq45pxr9Z4M42B9hiLqJrGuKCXokLjTgGczrWW2rTGZrpgwpw",
  "key16": "4Qojw2i8NxV18Lw414i6z2pMTAoPc7JNUmy2x6DJGdy84cFRpvuQT3FdfDW5tEfZmQhfesyDDC24hP1U7fYme6Yj",
  "key17": "48Pc4QYvP6McAJENpCSkRjyNvJCeo2eeVEwJoGS52mkRwoxhR1WMjSa5VE98TUnkTMZrgcubsJd5jx81bFzUsydw",
  "key18": "52hCi6ytgzRFL69obNpNXdbATUgTzUGpAQyCTfi5CFsYpzfSYRqCeuGqUspRxPrKp3VmrbFLfpB8zUL1ioWPADbv",
  "key19": "2uTAkMFMfi8DVnwvE5QdgubBAW86iHVV1RSqYP7DoX7rwpuhXJ233kEb5JRstpimrASNeXzBdZx6mSQZFptzkQXt",
  "key20": "i3fGvn7HCt2tsa6d3QaLCBgYjg82vEnt9AQaJvDCsQmU3XwCgNSLEofLgSWsV47whhaRhnfhJEv3gp9U4dkxYzg",
  "key21": "5MxtZV326qq93xhMnru5zJVyGLrzy7rFakvbDP2L3AcXG66bcTQ52FtNcWBDvdLGLp8H27WWiT7QDGc3YtTwq5Uw",
  "key22": "3kN1tbNQQJdYZghb3vmymDLPm12N1CxKkZaToRkDszHDRESzKC31cnRM9zMu7dVaKBf73KZZAELXwqP93VDNRA8f",
  "key23": "4RHuBxxgWjJnrBfMsKTLSP4CM5JHh9zmgeX6NLo8yRSEptiqjopGF49hTuRzpb1VveadwUfpAMf32GZFtmdMPTe4",
  "key24": "646RH1qHvpj2JH8JSs1kyXPsegQBqpG1gotEfjpFSJZYER8ck8cKkpCSiv1nuDMMavXAsJkyPU5NwvTYiGQVriWY",
  "key25": "4ePrCvqfr8EuY4RD3VaqTTzs7b37ysKQFBgrU8QvJxqyCLeaPc4jjwHYSxdSbuWcFYPitfstUpsoso27HeDhf5Ph",
  "key26": "4wiY1FSXgjzSSs1THMuSgegVuAaTwhSLNMCfnH84qUbFF79iRoLUgLsuvmLRLMZgGvgX263EJboaxdicGtVCAGmJ",
  "key27": "YFKu66DJJDZmuYHezZMzwFQHB21UdaY3bjCLyvEAvMfHBwenF31w5XvhPzAaPCQY5nHAdyFSxytPJ1nVgQoVerw",
  "key28": "3E1u1xzjGGvvPCK1JJgVRBep9vE9r19pTrUZnp5kuGc9R4GYmagz3EBerkdFKWW9cknGPZvnA1AvvYrfVNn9HASf",
  "key29": "2rUBYrTk7LhHam7BNaFLGjWi7ZPtCWAp3GUk57T8efqjcHLprm5FTkfSys2XC8YMJ4cXQJbrSx9FVfWZS3BMvCBH",
  "key30": "nhCY7U7Tf7iwz7TcasLpo4ihjsfF7nkTFzG9oG3mmFEbk7poHJQDY2EyMUBcuY2yNP1XjwU2Vx1zfqGSVQPbUfz",
  "key31": "2URxB437DWGpBXfSSQ1ZXsSG7dUJg5bnTdzoETPfKQjxQj3sW1YaxoXfGKgnffi8Gd8Cq5Kmza6KNbX34tuHgTS7",
  "key32": "2o64cQ4CPCjNxSq2ZpuVmU2BzN1ZKiKkN7kqMaXg466unQBZk5wFxJC7LtzKiqoJhVHXKyZGBCaCEYcZJrfgyoqN",
  "key33": "5ojBQbxGQtKxn8uhGKegRWUC6HMqbcobTDPuXsYyynERFRhkhMnQZAnqt1bUrzEnyjugyXFwp4LpFz5jfJEF9HSt",
  "key34": "2jszgJdarMA3kFxrqMU9eWKg7NFgMbiwsaVexk2PkCJMeEHUwQAtM3c8JxivcBS8toF4gfnDEvGr34kGaGthsrW2",
  "key35": "57goPX7yLat6s6bbuqhbKYwW9V6VHtnF49FiGcLShKH6DKRyuEgfSZvgvgc7i7k5MeKtG57rfV5KZxTQ4j66iPF2",
  "key36": "3MWZuL7TVcuJBiXLnTbUmA4nqrGu7vMRRk2n5JkcNqxZqUy9xdkzWJb9bADUSfQaTqGGCuB9CDbuzJJFqryDmMsD",
  "key37": "4QbYxER4Hd8DrBKeLZcfCZfoNzrbnyjCWueTkUPuCCoyADcA317j6mKuHdrBnihXAMaNjTwWNJy2QjSp24AnLEbK",
  "key38": "5cD8VR5eKY32h8317JCWaxsFDRcxXE1p6VT6W6hgGce5eWkhGgGyeooYDjesEZDSJxmYVT8AFDDyMBdV5RJmm9WF",
  "key39": "64jwNBsPgUQqVPnALXssBtEGNbb6Ez2SBUwAR1tfiUKiX3KKxr95jTULDdWaLpCBpbP52q61TV9MRLi3GDRJovph",
  "key40": "2t9rFZUKy7TSKQ3NxYMT7axXBELxWJVLDQioK6HMSEeihMKYrrkbuCnW4A6qvdfNNW6rFewTq2BjM992WKKzaxf9",
  "key41": "58ntzY9WnkGnFtDJsec2RTQikiJeHiyk3ZKd35DjBVrRAmuhBv6EdneAQ5MDuQnJCYRFNef3Rvgta6fvVRoe4L6m",
  "key42": "CTvdrvUCwWHjM26HsoncDHrAY94RAAhJJPaYTFeQH5p4bRXaUZyWMmgYAZiHFGdztQpgqPyZv1bSbcHHuVrqDCS",
  "key43": "pBDnk8ZxHrUhxiCvLRvcBvD2pHFhyWNcGzDg1wsenLJSF2xtmWTsPiiNbP8gEqxPtaoJGDaE5BrQdrfxucWamr3",
  "key44": "4rRu991NFW61mQUyEtKCGg6WP1izZtFCXYnRdjhGjtiWHchUdQNi6uhPMsGiSq18Er447p6fMoxpEfY5yX9mN4BM",
  "key45": "2euUji8ZcRtBY7dqLPnoqx3EFjf33xpuKHRKEPukMTmx2RBCs9t59wq2YibKLGgZYcqijcRHTuBTjVsJEs15Ezev",
  "key46": "4ABSwzGCs7wtd4Db1623oJDMUMW99ZAz6d1UFs5GJHPfUzitdw4qVSvCLjBPBjw497uwp6uRqRUsvbS3k9yEtiNK",
  "key47": "65NEagb4A1SQBc6ygz8Xrg8mc3Ae3Ne7Aq7F7mUVzRFSb3664AkswmmcnjrDAmyMr7YqvSWHWEcG4fxCu84eEZEr"
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
