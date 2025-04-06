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
    "2HEFJ8XGvYbheiSo8jv5K2JCMf9fWzAuSFzX9DBxMHLaAiHL3AytCVPvf2LSbc4WnFVMVrmM1ffyD1bBWHCh6pAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cX8CUpL1SU7uUmbDrgmkb6SgyaLzn7wL86Y3fhaJKXCeAC6rBkAEx2yqJswdVLoFzpmpjLFsFmmnCae6TasX2Dp",
  "key1": "399KXpUNdp4agUumtJGTePBRUBLauDyDUvxhjDcDkW74fgjAeGKZjYdxe1NceVrQjLe1sYyPRFqvdAwMsZE9MjY6",
  "key2": "2xaiBhgaBRBDNjs29y2sgXYTaN6crs3XHzYzGMGXxWJMES5sj93e4NAQ1R8RazS2fL8UcPLDeffuSp4u6jx6jXbq",
  "key3": "5ycXe7epHihPpcXeKEQRWuFGyn5cz8bcNZGLPnuUorHViS6hpbRS1ANq4J9jVtVcUb5kzfQxwQVzkVocUitF6Atr",
  "key4": "nuGErC4Q8k1BUmKSqtdWgPCGYxWaoRQuhcvTvMMvgy3sRodRiYhhPxHv3FmGgSPNKjrJ8mPXvYUQKfUoupjBumV",
  "key5": "5ZDnyS36PS6WbHtE3QogWry7ebf5N58Nr4K3RaXUEj1JcnH6LTS5SaA5mWbpA58vWwcGJGrFnC9WFereCqJTkjDQ",
  "key6": "ZSFpy9DAGE4V3LFJrC2Wgq3QvzhT5pwxmPouVLak8yrtqg82zWrtkKonRc34GUh6vsR69JHKdm7EtdiJ2gRXfm7",
  "key7": "465KrfcXv39WhM2wWDMxDenQZZwK82Trb67z8hpNLbSF7gasXqhezAYTYQio9hPCjtrmRcozVgddpZfUx9Et58uo",
  "key8": "5bDy88m62nX1YMs5TYXNgpB1fbbY1Pz3Bn8rvFBTpwAqPhfdZH1ausaTwMiTdq8qZZ3PnMkgnZgjYiHLHEDE3HtA",
  "key9": "4Nq862wuZBGBusRBx6VF7th14pV6W2VsjVbttGG8CtqeJKuwxVwKuodnJNUUv8YoGUMuQX61hNsgQkcPDJh6oFy6",
  "key10": "4rMGBH1Yr3n5YYAaUgoupP2q5dY67eg32vhmgkAv4A3Npwmta3JWTCC6LKfpcpTqKouPj9TcpBHef2maF8C5jo3H",
  "key11": "2jiiiwUHzHNjgAeDAT3Gjsd2RpWukKcndFZ8F4s9yGtYy3VEUtQxAmv8HihwUpALfmpbNUezxCchdsyNwGu6Epfo",
  "key12": "5479Lwtx7YDsp71SFd2kaV9FkjgqLJ2o5jcBHWTYyLucLEwSYUCR8EhELbMbwahnp27EYwmEpFDPdJMKnM7qhBUi",
  "key13": "4wwte1cKEcG7pEni5NkxXMR2uJhS1ENW1uLT4abRuqwFq791nVFY9NMX7xYerhgW3aqDf5Y3yG96JZdsdosUbjgd",
  "key14": "25tJnaVDxvytvgVur1GAPJE26NYdxVZwtzmovwnS3ga6ed5zLefxNmc5DDh8LW1jCq2RkNdPE12vGPA2EwuXZrFK",
  "key15": "47LrcGZKCCUQejTbHaJb6AyLy39dHWmLTwWEHNunEz6TSFgfY4wKgUdqS9w1iPBZDZJT4jZnChfvy8qcuTsReinf",
  "key16": "4YfjXrtxD19a15gbvNKVHEnW4uacu9d4M4oHj4xQ6unxGC7unVKf971sXEqrZdmn31CpqCdbgAqwfHFeLDWksxW2",
  "key17": "36gKLAQ7JNEdhd2vRez42cE7FN2myLSVvvvXJzeNiZmTqynVQzuNyE6g4h56v3poLTMVL3kkndmjzvZwQNv44jPw",
  "key18": "42FJTgxQ7CvZwseJ2o2nia3J4pbQdnXbsqzByxHGQRi5mTbtMnb7tZitYpjGFaWG91NTFHiwcebs16WqQkNR9PKS",
  "key19": "wn7VJw6W5RzVYuq5367Vgda1NnvW8irCRGAAnFcqZXztQXjykqeN5Vkev1WaxahDVJmK8NVAddhVBmAEFUJJjc4",
  "key20": "23xC4BzfsyWBAFaQ1XC4PjDQ9x7FJtjxk9bJLaUrEGQ1iRQBQLjHfxKzqw1c7toCHGFV8YjNgUK79QdtJyh4w4XU",
  "key21": "65P5fU2e71Ss4CfR7VazHipPQaKPEHybXNCscgFFN6Yi5X3ikUhiJWDtAxNtsxmHvrrRQufVkRfB1FJdap4PseKX",
  "key22": "3a4sRdXEzoVbYDaDF9rMLm52xxUCpGv1WsGoWNUaUDN3WbzRRp9wbLiXpxLd38dCeXZzLjMvMGCGHn4QofCCn2hR",
  "key23": "5g9XS4Ws8JVTEn3h1hGX2vmbzFgsEGhhFWgRZN4gnwvdPAiud4D1bMRfczf87ytWmSAAzFTxPxADp4GLB3ozWiiX",
  "key24": "4TGXco8LbSsYpXadS4N5EvRRC2pYNLHC9rea3EB63uXbhGDYAQsA8F1Zjke4dgbhYh7or152uuhvLH6iD5JmNePG",
  "key25": "2q95EjPXmfGVs3ZLeyj8kLLzC6qMfYNRV2H7irKNBiRQf7fCYxMwwBFbZ4sDM1xTwK6MPKLVyphoq4zaJWy8UPgu",
  "key26": "6QrAL6xhki3VfGrjwkNwhTpKMLDUstX3vZdANA314CLK7zDE8mvjsjydpmCE7kNMwxuA8RFEFSu83ZTpA82EZFz",
  "key27": "44XhLZ9DifzeKNTfeYLrM8FTY61bDLvPB4aL7V6FA1w5SqnaZZaPJ7Vbqrq4PpCbvjZoKY8PduW9TyHoAcTcCRBu",
  "key28": "51myAGfDNNvRTk79faXe4iaeW8HGqjjEXHkBfq51yGpAKuQ8DPCxDzoczXafk3uHsb1u14p7YgiM11RJCHVopDMo",
  "key29": "29QbRjiSeN21NZ84FxvNvFdTtzqS3pJk6qGkfCucRSwiZGNSfSmMsDQw6VhxGVSDVX1BnsuzPuBk3tSf3jdLnb9L",
  "key30": "22jkji63zcMFAdyecY76gmnRKGVTei9QwebETfsEruHqWWGAV34PT8HFrQNmAs1PtJ8fToF7JWQ9yMP8p9mh2jXF",
  "key31": "4fmWZTyDv5kY1o3mHPdMgNHEbRUTvMeKtvrx8fcvw6niJpetFbSnYZfuWaZLiVd8c5d7Psxv8JwUWLnPrq23F6wm",
  "key32": "MVWW2xPmyRMfSqxTjxXn2gdNuKMthEJhFytUyGDsnB2srch8UULLERawoWZznwtN6UN9AQPwKAcdyaaohwbVKND",
  "key33": "5crrGiBLiv6L5zcjg1ns1JSE6ACsrFW57yBPPh6AwoybkXBr5opeYucunqtLf5SHZDhhK9EyLGgQDEwiCjEVMcbt",
  "key34": "kLSnwfdR57bE1X9pJLpCyZGRnThnqLHvwuuFDWgz9H7mX2qrmRTWceMkns3MUUSEM8CPMTP243A8MFZZAj7fxU2",
  "key35": "2vjn52CUJ1RHT9Nc9FgN7UYJkhwTMXnCrJXVDr9PhfzwVq7yTb67gCxhizpur2NmFntxTKYTjtqyuR9UyCtf9d7S",
  "key36": "3VbRrtNgUsmjja6yBcM4JPBUs4aP4uwDzG5A86TQVRZAmekERPavpf5mgJ2nRSf2Vg9zPHybAzJpVxDsp8nahWwY",
  "key37": "5JMr8Qm4GmXFByjLjYNxjvnpQR1SWBLqpRFSTLt7rCJzHohJFiEcAN57dfcbTb5ZLoDFFEzEP2tv7wsvi4qGft7J",
  "key38": "64ztQNRLioJMCm2knEL8oLkUvvBiucfLitVouNdUD6pNKqAWY8fiwNrYbXDRbXeARHY262j3DvwmiBEGwvsJQMBT",
  "key39": "4LbSy9NyaHnq81y1uUsNEoNUyxymPfPS29ByYCZUQrbWvTtB1MUmynp1vqAiEG2K2sozWdwA4g83omPYkbQaxoJL",
  "key40": "64YNuATUgKBtxYHZWy9DEuStZmybs2ZLVqe3TBfuJaAQwBBekwu2D5XyxidfqC63afm8SyMaENbDLDyQhVcgFtJt",
  "key41": "VcdgyUVsMGn9vuCJdLDWnWz8zTFea9Jjms8zfc2orNczoiooShQr3udbZN6kgQxApgb9imFBcNDpHut54Jfg6Ub",
  "key42": "oWgFN1K7JBp54HDfrThUGKwkZ8GZwTaKBekkstjLw7X77LKCbSaFEMmU2nyX2nyDQMdB4crZvF27k8SahS48fhL",
  "key43": "3kRzQ7cmSQ5FDHdTADBy3N3SxvKaG3f4A5c7WdJT9H6jB2Eu97PbyRiri9ppVakZJZB3AHUoScVKsro5xpmayHxb",
  "key44": "3pE1ugZ2vnyTQ8i2smmrPv23ZXSg6njBzFMPivZzqEW5bfSUNqK3LH5EjL5k2KERKp7FTLxmpty8JzsNWqpRGkCh",
  "key45": "4WC8fXKdxwChfew5zW4UM9NPNSQwQGVzUnZBSM64ScHTfG77y1KxBc4SFwrV3TKuXmwQsjizBdobE79beyVc5uuJ"
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
