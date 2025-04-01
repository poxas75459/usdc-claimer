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
    "45tnkVwKeXBaQvp4YVLuhKQnT4bpLdPB8NEk3Rkkn8VLLs2DWGcagAR6xfk5wZKB1xKncnycUYU6Kyq1b4RFmEkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SsW9enYfk8L2j5iA3ZuHDYJYXVeiWa6WZwcSJcXKDzcnsnUGzirWhdWALC1UyavpQQoqDN9ZatbcC94mZA64iLY",
  "key1": "52yvTo8S9F2eQusU5ThBmaK2d2rbpm6RmfCUifZrz7skwhGXyjT2sYwbguzTu4tQzZ1x9bB3J1SuioqnAVrP1Nvo",
  "key2": "5z8A6rk5emtxnAHUuqNE1Vq6d6jJkPawst4b9PCA2QKnAiZkkq4T3NBmXouGSmSB3sKZEqpFsbog4kfLYCd2rbmA",
  "key3": "3H2JuUu4UYsoapYrRpmUUQvrqDEtL1gVb9wcpkxdmreGmJ1XiSED7ddVoRyd8NAiND4jp47XRWZDC2Y9bSPLZQzj",
  "key4": "4KDox45Pt5hJDfhrGeCq8RQrySUx5b6BWNzr79pHNvWRjz1g3LjHCBuLMdxS8e4Qm8HW7yQoqPU7YnpSWFpa8DpV",
  "key5": "2zsDL435AHVftkHtoADa5WLNVwbZqc9uQ7894KiAjhUxg5wEgsHhZqX6bWuMuCcZJTFKmPt4H5qPrRgbjUYuEPR4",
  "key6": "FammVZKHkEJ5btVFkLpmDgtELwYuYgiNMdK8UP2JbytYjwYMBAefdM2TZ5bv6zT3xS5baGrUyCmzv8QHgCa4kQt",
  "key7": "PcmU9xkp6qm33kitepsgdBbHUsNzhji53W3G9d1nr4LtfqCYEmtcZKM72p1RFX9bQDvjmQjeVnFrimMrAnB5JCJ",
  "key8": "mJjVhAabPQseH2iMBdPFNiec1YKrWjukwZtBj1mpraxvzwXUf4aMBc7GyZJJ8s6C9MnPPWK11DVsja1HmSGRovb",
  "key9": "8pPKebLs7yHEhtF6dHoUMPoHtEE1BHaCLjbiof5D4f2TAvgoVsPJfdjMikNuFXMZAufpUFqEs7aje6AVdazpYxE",
  "key10": "4pcQYcueTfUHHzhBKDnN4nsnr3aGUaRm8yGffvNqXBWrrT46txCM98RbhxJMvU9bkSV18eSPNfttXfdvxyNFxKfB",
  "key11": "5AHXETqYUNvBmc5s837MExXpFv5H8rMd7R49XfYFSPpVSaVzh1j1FUxbc2z6r3w56w15vfcXE1YUS6hRKrfCaiTe",
  "key12": "N3d3B5HJMwdukEJVRdjoY4EiPLn3M63jfWYGsBxXN4u26rYcVXFPDTCrE57j2goMk9vabzRsBXjWNFkKqupzGwr",
  "key13": "4sfKJfjYp3TCRKox1Hj1QpX2aeShpMPqsV4Ykmj4K9LFmiJPUBzxyGvnQf5ZAbCsBbnkSd5ChDpwvC4Ha9bxr7Y4",
  "key14": "3fGTAQRNtj6jZmzxTUAYGmStTn6ivg5ATiyZoM9UkCsEQjz2wHXMpxP37RFSHgFeNiwPjUPNANyHzexjrZqfokR9",
  "key15": "rCdyvSprkiDw8nPXTRwgTX3ArbQzSj8N1WecNatENZG9EC2o8DFz2sLcHtwmY1amARyDwFP1Ek5XPsLG7RUnB2A",
  "key16": "55bMALG6YjDxFCYt6WKc48cYGowvN7Jvbfb5P7GX28tHGgsGq8pK2J99AubPWaEtK8XsCU9MxSykZ9uHtJjsonay",
  "key17": "3iGHpyXx3snKvwUjF9bqPYVn1dZfMkpvqFiLRGuM1vnpQvY6wtc7uKFmqsZw8dY3u6jRrB2B1nqdVkLrWGE3sPXD",
  "key18": "52W3Ft44fCJeeqpeJTWtKBwy21kxmS9HtxJVRYAa9fwsKAWf9rYgDXS6c5UatztBqE7VgyHN32dWYwuPse33cwjn",
  "key19": "2pZ2sQHdtQTQ2YmFqbMKdHX2vXL11phAedyoPeCcJLnd4rvhxxWbJKKo2B5ch7vzda6zHNPFbkP6sTYDSEAH9d2v",
  "key20": "2HuiUCMNATK2YFd6Ldg7N9AtjW9kejfLteVebgeJEy96Wa5xQaMo68qTWouiqE6yvfbL9NkYCxLfEv3GBGMiygD",
  "key21": "35q4DgsU9rMCPUVokTjVFjwNeH44HXF3h89auoACbdKGdRJiiQW7P4A2ZmdpFCK6GvACAkkCrsFM4DEWjQimSF1u",
  "key22": "3SVGnGnfkLp4F8aCVk9dp53CrXKe84rVrRAFiSwYq84mxAP98AxCHWyzKaz6coCARztoFzLqz3gEVWERsav3AP4f",
  "key23": "3ZhRU1FHJqHKffjqR4SvE8vy8JJEaZyY5zfGxWjdP6vaFbZCtZ8XVc74stbsNWo5U6zQ5ZDZZ7tu73uimpj1jE4n",
  "key24": "14foojTAmQUR7x6ujzsfVcYMB67E6MzLYq2LBQLiVkJbe17rs31ne6a4K4gf29kxYiUmV9eYsYhjfstpYANmySq",
  "key25": "44vu6HJT6g5bycWKmcUjSV5zCa48tY74qF7cVyAFmCw3n1RW34oD8zpHGYq3spYeX9d3YQrAVHUUtnh747MkzyL5",
  "key26": "4pYCfMBbocDWZuBGxpTrMFUcr4NPUMKaZTY5vC16P2SLc9ASLF39E6QvS1mRovWBbHU6u3qD7UQVqX5nFsH2nzH1",
  "key27": "62FmJXSwxewVmuwFc13TkHontbmwHLXE1qhALFi8mzNmKzZPsr8zBXkgm1cWqKAqH1xZaqLVzqyU7bXD3WTtF7s2",
  "key28": "5G5TWPtd2LGqyf8p3pWSz6AgTi9hAFm8hC1cJuAidfE5XcEWEJYkFNVo5phwMpBSD4Hq8hzo7z6HorgKKk76QCc6",
  "key29": "3hhrm7LSeuspnp5NbbGiQA23mxhrGeyWSUSmF9DAwzpPQdjmRzjhP8jN6LCHbvwgy7PuH3XziFQDhxQJwHEgdKPz",
  "key30": "37XxJqY2sSc5vK4Q1VEkQsPyiTrLKeuME3PGWKJNfFhtfaCpTpY7XqXqv9fzk8dGQGjLk6txKzQ9Y2hiv8sxQpHK",
  "key31": "315VwCwkGxfv9zkad6SQh1ky1L3c3NmHGgmNCpL6x96jvtLwPsCGxvpS5NjoRmqbHRqx7U2xoNhtu9zqpPc3XLE6",
  "key32": "3pPS4Gko5ds9Ktkac1YPTxLCC396smLcAEhZUgsvotrLQ7AxC62dmNikGxJtmCufX2GDjxMgspLzpsHyzUV2mJon",
  "key33": "3eARCpzz1JrM4eBRKkepBKBdNhnrencFWYAaXjv5DuZkU6pNVp4CcdeSg2oCsTjPjvPZaomwU21Wsy5kKez7TWRk",
  "key34": "5GJ8aVmxa7vbJyAr1PJ9xdECx1kLyP1aaBGFZX6JL6L2Eg56FDrwvJ1WWV8TPZDhLapPLQ8d48b6zFdAQuK6nJ7N",
  "key35": "3JLcujforYopZJbj77WjFCDSjsNovZR8vwe2VYAr7pK2dZ5m55NaaUne7xzqsw2bSUftVydNHPwi1F7p1zrsgMHH",
  "key36": "5oopk1FMPXnWdXTYZ1UrUJT1bbeCa6D2xZPYh4wtHmoCXzuFNTjrNLZ52vxbdT6JdUDXfRs243gKDBaAo4VAYToa",
  "key37": "Do9MorkQQ6yAJcSSSaq1CLNHpbZYhsaxCCAHjRNQDaJ59LTrJWkZsgDfLDs1jH5vjLnTdXexuCRqQKNgeyrR45X",
  "key38": "4HNjqtuhZArk9yyiaiVPrpLWBuKjCqL64SK1iLhf4MnTcXy1QoVvKzLxUaUyGr74TDrkG5gTKtJ6ULj2tsn9qrM5",
  "key39": "6zauVa4tzsDBjiknctcFPerXndE14qL2jZxGWQ8e42emFjvMutepFdSPexNYdmNbpN7zwJ1zErtf1ZyCMPFsuXV",
  "key40": "2B16Ce14dUf8J3teNqiucDQCyN69kq5CHvX9izHktR62ThxvB6YH3eirJ9eEPSTQTZnSys4jwtuNUY8DDPtasygo",
  "key41": "5LsKAor23ubu95Ty3MEvc5Vgb8pcFjRD6FwLab67PDwGhx5MgzVRJW1QCVaS9WfAXCET6TQxTnNnZBA4Tv5mHnET"
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
