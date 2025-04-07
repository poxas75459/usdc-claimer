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
    "5bEBQZm23nLKYpLTpZjah885Fn118icGRYPPR1daHeTU3JSWGXbYMaAYdQYagX4NBdbfxDVmReAWuDXGypGzBP5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wx462ewebuyv1VVeVXin3oKxAYiMRecpfuBvHFc7HFyKcfCw1bVaoCSFpdMKAofUT2Ddmf1PKGxCjZzymhirvhE",
  "key1": "39Tw5MSwG6HhgpLXypKGW5vJ2TSiaiUcFeKTK7BHykpVyJPLTWMoEHEkWj28M5ze9pBJJxh85ugyHFLXzo55vxtm",
  "key2": "26WqJvXs8tMnTe5uKRDLWevw7tzgazL5cTWoeKbDmN8B6i9VyEuPF58r1aQRjzBAcHPq2fUDaoBoP7fGjssN3TnM",
  "key3": "2T2tYzBvSJfqsLvbwL7fZa952r3AwZVUP6BH5TJeGYRbxiWCkDxtMdCTGTDvTrpxKenXwd8nQjyzVTT4wdWQrT8w",
  "key4": "2WUAPG3hXeGYamCzfmVSicecDRxtLbeEomDgPunugNZ7c8thh2iboMhfPx2DAqLxWP2QCUKefg4XmcYoopSZE7xU",
  "key5": "3NUWG9hCt3dN5qi9bExit4LUeBS7YmUmZEXNxSU8mBa36D91rcTVajyJFrhcFiDbQX7fiRE4G8iTNQwhxaUrEjwb",
  "key6": "2UXTQt2YxfJAVuMkJk9ER3pTz3bNPaAQxpNsyDuBXuWdAp9wmQRmBDtDJFx5vqxDqjdjjTvvKtxLFpfDRNYxGVy1",
  "key7": "4EHTd7xa9QS4ShyrSXcar3Y2JXj91hAtJLoP9E6mohW3hsaRZQXYUB6YN7BxYe9se1j7Vh4DqfTyQkf8dJaDtpmA",
  "key8": "N7puKRH641abwDux4GgLFydejrLSm4Aw7YKdWmQyJYQiJUVykSKKjBPigWRiAbzFQcoAcw4VMoehZLZUUsStcNt",
  "key9": "5GRP7bZ1CsnLhVS5RAeSVD5bYTugwwLuEWxs6GQdnDAZirZMo3xDGEMdr31Xx5nqUUbiVkmP6pLK7ersaomrC8NM",
  "key10": "64aW4XPUZ5PxKMKPTRLXQ9UFX5fN8hA5mV8q8tCopJnkcHnnPEiybJqydSx3gUNZXhVx3yECEry23PyBf78MGc3J",
  "key11": "4jttBvbSZZvsz8KxWfhbi7rZRc8bULhYXLTeP8VuzF8PtigAcAczoTQF4ZWXmp8Xz9LcFfvi8fhQJGLoX9ywYy9y",
  "key12": "4Pn8S7nj1SPBvWkcDfBxGEuXvEvLRq14TJB4HxLkx8BGJXJimhYj2HQXYJyJHeshcBtqnaGmNngvaug4xQmi1TAP",
  "key13": "4h2PTeUB7BFXmL17BBrSGDV85AqXchzyoNV6QTNsit899uVQnmjETh7BJt8DJFBtGkZ4vT5nBMF4Bg5iZgjQEn58",
  "key14": "33M6uVEJuBPJ4LXWJeay9LmR4Gs5HKY2hp3NiRet4j2RqPdqKpN95MgPQS5XiAEVwUHJRGLSspWc6fPTXsDJY1eC",
  "key15": "3AT6H8o1m3xjANg1cHfMNjByuG1Bk9Xd2N4Sp4QLz5LrS2BY5EDGddRz8rm5gjfqtoY1tLHrLpPQ7iQisobJntKa",
  "key16": "36auFcpD8twHLP3d8E2g9UThbVFnZqLFkUCiq9mpqDJxp2wGnC7apiAPEeNbjjbHiP693mSCnnDDxevyY7oAQ6dS",
  "key17": "2t2GL45mW11GhQbiemECMm7XY3p7TymPezzsUHJ5FF5fd3YZaxknfBmaEARUCPkmAtZUwV19N3n4GbCJjAcdHisf",
  "key18": "5yPwyDcGeMAcqSED4mB8cC7SozckkoHxc2GozpmoHVUeFNdFzCPKerRTUoXoX8tdCBqokQmLok8QRhFzsHY4chE8",
  "key19": "3w4Ei5daPj5YTp4XXjQZxBMfwTkj1XQRKxyXRRU6PvepRqnrrjRABRFXY3ucNCEm6J8Wr2zRt65Gnv5meJbuvCA4",
  "key20": "5bEED9yuPQXXhWZA1RGWtWpnxnaXL6ub3P6FeYiLmCtLRF48eE2CW9m6NNzfTWSJXadKCPGHYmizqQS7rodsZLm9",
  "key21": "4Pck9625og2dYktN2zRqevkDjCZoDYz6GGx6REb1p9EMgsu8HJUDN47qsQN2YeVfZ4CCRFxTFmyeDrcm9XJEt5B3",
  "key22": "2TBNwe2CWvbVBJAPmTjNvbgdgN8pjgpQEL8f9aCwC8W1g9NN6bSmjtjmXaCGy5uC6EZG4np5M3xQY5UXwsgkBKej",
  "key23": "2n1ECZrD9x8zSfewHEZTXY4T1JA9SRQmU1ZKWnEwoqUnLz3bNgGCrkN1sa5XsV66EPvdLimN69i82SqZtDJRpQxB",
  "key24": "2JFM7Tnz13p5hzai6cB9e2c4kmAS4f9Z1Zx7f2Kwb5TRcb3wcgEDCww6TaUGsUC7AQqUgbELVKnEJTYnxjPNUuHt",
  "key25": "4iqg7nYr6SYbk1sd55sbKtkLAGsRxyY4SCZmkYepTK6o78NXf6m7qKbU2uCnA9CfCg434Qb7QX3BoRdvyXSMDwNL",
  "key26": "4Fy9Tm8azehNxq2xZ4pXBUjQUtHwXNVUKYGTMcD922qkB9U7sP14nRMjj7Gio6PibMxBned4n54LKcPhP4182Abd",
  "key27": "3qmecfeMHNnWK5PDX2CGz9pdUVeGXs71ZTKaXeDGmPyQ6AYxdc8NzQ8GnnK9wZirAPEYboS3SfTwwToRM6aGgSAr",
  "key28": "4tdJJdZXUizXo26c9LR8kqGdQbzPQ9vR2cPnVKspd99KuxwXhmBBxQy3iKsC5YanL8phfRKH5gnphqfG5nM4Mkxn",
  "key29": "3zFh3hEYH4Jet7DaMJoon4176VQnudJTwBxYYZfhquhLxERAgrpNutwTAH73uW8jFpp6iS8YXPJUgAUmf5Wk6pbZ",
  "key30": "1KRhoeqKZAdxusbavvy7hjyaqoq4aNVctxjhAFYJHVfR2NPmmVMBjdBwVjSecpmDTJJU1YF5Mbr9WPPwJJ17SJU",
  "key31": "2PEwhUrtU8dpRuK3JwV2NYiMv7o5W5rxbWgztTAAiucLqDwSMfkLfXiXRaUDiDnf9sefoWPBDraJz9CBVFGXCB6Z",
  "key32": "9rA3V9LFDHUFBWXxztZ9gjZZ85wZLq1wm4uR6phrJ7v4bjwTUkDqaT8ADDRKfizGaMaLczCGkgqtbXpQkBkBtyx",
  "key33": "ca7qNxk8hAknui21XtXaJti1jRSXAjSUVbdXxcdN7ubonzUfhUvjaf7b6xwuJdUh6N2ocaKteNR7N4KAMydLg9E",
  "key34": "3RnBq15ddagvVPfYq1Q1KdR4dz7ig2tG6ZZNvB3HYuJqhNW98Btuk1nJaCeDs9vYF8e3ms25ftw1GLwU1aQ8bgDb",
  "key35": "5ErArooixAPVQN5p1t12CPqEFyChFrTgJAHxfad4KLJRwWoCyDLYzprJMocekvbd5PcyU7DCb4a331dCSJQ2cAgL",
  "key36": "jRdMpFN3dy3UhuSG8B1ojxfGBwfFwN6bU2z5jdrhZoNmsmWtpGuRhtXPfPMJHUDuK7E9EJPoLRutkhJDJ27qVDD"
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
