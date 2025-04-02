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
    "cDqXWPkQYFppqqa6aWi7cP8rASGvcUD7wHHpqUi32xvj3NKjWtDjK6t1dY7eBz4PBXPTz6MFFs9Rvtk9Ztc9k1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gZvhguwZrbnKeitR6ziriQ8gtm8KkunE75whhh5tFQivJGS3gPbZrYZob4tw8qBnNuuarFjHQG26dZoK9tc9Bcn",
  "key1": "17i9H6XwEQaTWiYrypBX7bSMJofgk68kFtSJkf1dwxfuWT7aQYoHp8uqA6gPZ2ygMp93KV3MRokfYDK7XxKFXoT",
  "key2": "4HYCZzfQTncRTCK12W1gAdF75fFgXzAxDNiihnjsD1QhZQz9AgLkvCCkLBKQ1xXMag9jt7nb2PTJemUEJRDY3QtV",
  "key3": "3J2fwje2f64xnrovkVyuXhT6bJJhyHu2tVFthKzqpad2LYqWKFrJ9cdkbcGdNvZux4ruTsJ5Hbs9TJnRj9iv3m85",
  "key4": "2mzAVioB6aJuQL8SvjwdHwdbvkQUFNkxvQj8rV5PdGSbxnHnhdB6Ljt2ZDVA1QdzPodf5gH2WTFeEp9LrrahyuCq",
  "key5": "2FuM2PtR1oK4HfbaWXS2ZMLJVAUUyGD8RPqSmhmCoxvWYCgVUqXbqZnNaHau4GCkDetwGVF6Pu1E133FWGowmrBe",
  "key6": "5CwG18nEEgeF5vc3dk3NzoKyQA6DeCfDoaZvUBKhctzrSFqbokdmokV9gp8kpa3MtenZ2xX155jwWz7ut7gXC5wX",
  "key7": "2pmtFTpNrrdFNeu4dL1D9GLjsQLTYzAjD47AnxRRF8rB9PTmgPdnGfaW5RHYN1oEiGM7do9V25rrsxsmES1hjkG",
  "key8": "4t4PGsRL47kc4ibGbXdgQcpvA1DFTYc3vkp2iJGH1nYVVn3SV7Ak5xsJMhcZZJNFgrR1oo3jqhE81nQaeHoVEuNT",
  "key9": "X11P7pgxFFetn6b8uMLCX2BcVAH4A8t9KUXSML1bime8h5bmNzyUC7NSsVQd4aecvXKBTgDdMMcGLMcThHx1dEE",
  "key10": "jhTqXpMijsHkAN5WGPjBcCVKZc3HQxSTHWtR415oHmHh3wPu99PEALqJkpDBViwLdNerLtZBc4kS3PWvd5Jz2sc",
  "key11": "385DpPdMBrWdnhieTevFCunZHRNhtWmfiS6zyTHxDU1U2YBczQLBm5yxg9h3S4ouwNs1Uhctu3qKYN51ApCDrCs6",
  "key12": "2ZCwicXDEdUsWsb2RYvh8RLmmAk3RBXLSTx67pML1ojDibM9XVPuiDs1vwoSZt8Vq4WMhQpwpv78wVYxVsvxXctk",
  "key13": "5kafaicyDvefX6ihrbzPQnPmJKyQuvKMwwkuwUy8Bt8RtVfz6JRPkm7UNhHCJTbx6Yw4UM3junxZN6NbdY4VWetq",
  "key14": "2yibVWu7NtZVw1mBDHMr1Riyfa257uvNYg16xdxE2fhrcyo2Z1vGVkPqurvwafVuVoGi1scS21skHGmmhnaQqgpi",
  "key15": "3e1pwf8S21wXQyjS3JNfjpDEHm4eh9N1fGTJ1rCtZ1Q2dEVq8Vr1mtaYSRM9FMxLhFsxReGq7kypmqCSB6oZtLG",
  "key16": "2NugguPKX3KjU6cXzSXYkG6BZCRR2GoJcjGqY62YQRJwF5dVw8TfLmaQJjCboG53wKW623VCqRsAdQJ36JrVMvmH",
  "key17": "VaZkZCobkZUiTY39xy6CuTdbuurnbnEwkXzAvaqjU7pUuVDub329sasyoFLkGxUEC7ijVGJKMdyBdTLbs4bFjKm",
  "key18": "4rvbj5naSTVpT4brZENvmmpXMwbagHDoEzanD73tauUYVVu6XcABZDssCgpyyoNcephZ6WNYpy7Phy3rfFHGEPYj",
  "key19": "2hKwov4YeEtkK5LqfxCwZTkuHhReiUtDs5vcfTkomL7zAPJZjKhNyRHJCBMFzPUrUmKBrzSu1WgehzLzb8eHEAq2",
  "key20": "3yUaNrX2gMxXajouXfjMr1ayfK5beb8eRMLnP3826cPy3DEcR4sLsUuCDvkTmUakbNMPpekETCZrMmdkjyH2wicT",
  "key21": "2aeRJsutm2YEtYBGtJvaXuNaZiACs5GMkke4rBdc4gvR1GDL66sKAobTRWwo8LNVGowT9UEbpGWgqfvMEKyFucm3",
  "key22": "55h8FszMXhAU9MTZtzEzM5G2icHxA9nrWFNW8d9QE1GNT8gpmEinzg8Qfud2xf4geZmZLW6MckaDhiUMh4cVDmbC",
  "key23": "5pJRwZVrxErkHbLG65M53BPdsGWUMyVzNLrfaD2ivomvPDiV4P2J7YaZTDH9MWLpGXCmKFEcS1qZ8sehLL8Fg9Yc",
  "key24": "5oCxBpxWgsPN3FkepVmkT6iMSr7atG77oH1djjCyhuZdKiokvftwjdvcaAQRpRqGTQyRTqqw1v68ULyST8CXDyEs",
  "key25": "6HrDEPHuKqjLQQcaoEZZn8SvtYjfXkSwZhuwiEtqVt6q8kHbdCH2aPL4gjP7GsapgcJ2hvhzzucoJZL61b3UmCw",
  "key26": "3b7bsyTGwap8jJESuyYVhfTCRML71K395rhjaPMAAT29tkY1GDeJxbWgndvKsZD9y7AvPEQS5qRKUtPiwhVZJG5P",
  "key27": "zFD354FyEnTw6452wUwzXfe1Re4FRn1gaxwpHJbFkp68czpjo6QvncCX24RVKpzPJAqpyLKb2sn8nPj9LCHM1ir",
  "key28": "55ZvL1HwLT2fgpLtWePqpRepL5qKeSRNGJaA1RCWxKAGS6eZScGphxYQmRCjctgazzTQBjPPnciKjnMVXqzmoubH",
  "key29": "38jLVMxwKyqNcdvYokYpND5uwE4DuthpHVeyidbVRnxbg6P6hMyURDzskx3DkzydaWQYUCHGVsuwt53FLZeg9rWu",
  "key30": "2wo1PfeUPBQK2617efRiVZwHZus129jN4wNGEH9FNeffGrpcdPRFM15NSuzUnSzqbMnbpgi3GSy8cr61KLTVYXZw",
  "key31": "2GCvchtHL2uLKL1TUNa7UYL5pC1y4PXTCMxEeb8ioFHmx2k2AH5yQjPLbhu32j7QTUomGeUuLtjKaze38mrRks9M",
  "key32": "fk1DBo3dCHyEmRCMRo4BMTGyQagrYv3HRCUGspSogcVxaxBYfj9yyPV85U6qSDDKNaryVg8AXYs1mjeDKRAJN3J",
  "key33": "cutwA8Kt66ZjaHAtWnTyRFcNFnMJoMoTm7jWU78DE7QrR2cBp9S8z4cCSuJhCYDM8g9BhokJmnjjkasTmfV155e",
  "key34": "4fnepocSR9WiX78YnjyWnaVUvirdxuR5r2NFmajbVn4QuWXJPnKFee7qs8aeQ6w7g6dedbmHRyS4Hv8GLUJgztK7",
  "key35": "36VHeXhtkkmy4y19Y7fsJjJRe6XFjo3DtAKbwfcYmZiRvoXvyhqboZM1URerGMZAMR8tQMQtDG5YvbQ5HgQYBbjp"
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
