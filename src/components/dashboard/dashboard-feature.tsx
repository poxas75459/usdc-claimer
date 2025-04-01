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
    "zNm83brbE4RcD6cfnZDUz7eDCgikLhaz6AnTmkriWsWcgWVvMkBnedE3kVT715gTemf1zxpzSpLPfJqrE9Wqc2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f7ANrS7ebBp2X9XALDrovdjmrNSrmAK8YomzhcNtW2wRjbySjK2WjZtdoUdMEs4iTxXwERqj98CFfGQTRoksmDq",
  "key1": "41ZMXJqNonZBrQ8eeLfaP56FKRPCToka2QavMrwy6ezfW7Exi9S3bXk1oBg5rKzAcqPeFc2a2efcTqMG2So1KE1K",
  "key2": "2NrKfSZzLMGvyyNcCwoMyDX4Ro68infF2c7ChBVY4RFWkRzdedZaEt4tQ7TBt4LucvgbYGtZWENsh8GjH4EG8rGJ",
  "key3": "3xHhEGMasjBrg3HLjgUEN8Cq4KP1VovkTbuApW5hU9atR9uZRuwd83jmpZ8iBf9doX5vHj1ioJvXWQYkhys5fq16",
  "key4": "aTcwRdtp3V8pvrKbGxmA7zcsXMCzqYyoVq7mmXRuHLBZ7nP9a9GsZJzQ1Q1zF6VLb7fTWYSHfpuSYM8iNtp32uW",
  "key5": "4NQQ76Lqi8mmqYAJGoNijdz6mPGPvTdiqDJRhdJTWUfcxHNLuLB5aptdFiA7kLiwUvMuqMEm1BBjztpxJXyebTJd",
  "key6": "P8ZYNxw3KmWmYuN9KZpBLSS4o43erAdo7SzofW8opM34uNgYJXq9gQN5ptKoHJ3Znhn3mZzYyC84Mp5RoFpg9FY",
  "key7": "4MGrBkDhagpt9cGFrQkAtcLxC4c9yX6arURMijJTMWNVv4UoDnCunh3DcfZbmD5uvyxGL1XEPxbs4eCyKtpR2ou8",
  "key8": "y3h9z1iy9mXZ3UA1ekC2MjdtyMjsYmj8zdctSvDSM5Qc5ie6kE4Tw2FHHTcHKhQZEayvRZdJs3MNFcr8vsQMeuY",
  "key9": "35KpSeJFMMWLhJwXjzPQF7rjvjScKjrsmChpxystM4sy56yMMxS4YaLSSVaX1i79Koa1Rqp1yS4Bw3MwUcj4MZ8m",
  "key10": "3tcHTu7si1phabntYxUwZuk2mYyv3Lc1x5dTu1CraM6hwH5faSfJHZXyzyNW9nKzFKKjQPWwkJbmU4EBuFjnH5eN",
  "key11": "2BXPegQ3xuasY77tw3E4ikPfXM9FCb1eSS3aNeQWctxLGiq44sJk4JK1Sfr8pPJLeQxX2UcwSv5SwRQMgyrKtj6N",
  "key12": "KnZZ1BGccKznpruH94NgHTzm9NwhY9Ei9YxgjnscKysZ6KHDBJQtHQhDpUrXMATDeMHBSHaoq8Fpnpp4xrgBwRe",
  "key13": "2aB1FP647o5rP8YLix3dCYGF2YqWpJCETVbqUibMDXxrkdyPkMFZZmtbchy5icxakpxrn1QzyaM55BGSvB18kQZ6",
  "key14": "4kmjigMk3pahHViMkKv5u9zCYqwJn6jGspCvEvxfLHiiQKrwwFbgfXZhPjYdgNMLMnFfTH2hGURpwysXDtTCjjJz",
  "key15": "3MoRAYPSgAUd36FYyNqAwci9WAjEi4B9ctKMA2m1UFJ13PS3b4nYoSwcFtmfS6ZDVN636JLfHZh9q9yBvv2LSVbA",
  "key16": "4PyY4T8CNJtFrPmsdBkQk93L5C79TvxUFm24L33BDQp3A55PuzmtucTs69PRW44Nn675qGUJgA5EFKR6B4FwzDrf",
  "key17": "5Ka6QffzQ9WBDN5guH2c5CpxH3r2HrjeSdL627Qn5MRCDwMXbaVA3YgjWJaiogKMt2QKkKXoTvHYp69bCf6c6P4R",
  "key18": "38P7BNcrdTQimLnkvTA75K9XB2UPrtFdcL31Z3kgwYHPGD4qKMhzsjSzeLQHh5zyjnNmwAbdUT54F5K2j8m3zskV",
  "key19": "5Se7GzeHsYduFvDfLGHj2Cm4xe3eb9F3bg9WZbPVej9fayvETYB1KeNcy6jsAQaZ7sHbc5jqmCRuS6U7qD79eRUC",
  "key20": "44QFyZLY7xjnjxfMvjRJWAMFLJqyGzmLJbmpSQJea7QYBjz6HvgaVVxkVTvHGz2rCTCooNvmpM2EbsGZzpYZ7ZMA",
  "key21": "2WQ48uRKc2x6Hc28PWkAVm2nqMDrJ5vNrgyEuUEZfy3bgcXERRbntaQZKEi8GURF8XKQWkiVD8sHhbC2bGuXpAEb",
  "key22": "5MhywMAY18pg88AeLwFJGSJTGNXQ9MiE6eNf6boxdHgmBFq6pi26vHYQ4mNhFYHumELCNvGhzTWm3GWv9z9mjEKS",
  "key23": "293fTdAyhVM3uFpK66eyfkeLmaSzagDR3JXgZARmezhgWBsVE2eRq77Nuq8ymFd6ZKChFSYFpBC3gWWsE5G1UTS2",
  "key24": "675AW7ccsQGbXqMoKeDhrwfBsmcTur91iQ7RuLMZwdmxAgwAS7tQqbqgx8TfxGvMWQCVnq9CJWHzsCJ1Kp7fuXVx",
  "key25": "42r1BgZtV3PEzZuSTjxNTov4F6aezFwyRnCk7Vt1DK1wV6mEPmwcMmgtDwiLyKT3fxcdDeFtzWHxcFiencwxCUzi",
  "key26": "41V2xC53EvaY7xY54M5wxdhycJoMxpPfGMyzzsrTjAE2SFB3bbu8XTqGSRHibKvboEg7zSU9fThZ5ExRbUb8TCpx",
  "key27": "3PPyFxPr7vjykZeuaVbYjewhWdFKtEvgdgyTjQqCTfhuNnPpE375HCyT8QHMApTknHdqGR2aGZBWFGtV9hXMg3ZF",
  "key28": "zdhNTb36CdpsQEq57978KqHnPBJcjQuPhakUCLTbwDSE2XzFYXwEGo4RSZC1T3WNDGxdKZ3n6q4YviwkohfnMCk",
  "key29": "65cXTpBJyPFCetXJyVttcfuykRRuXAjwgMetedfExoLnpN2NE6MCxGvTQsGrSNAb5bEwgiTy5fBDufeG4VQThY13",
  "key30": "LSoRE8r3xXZDP9Y9jyPsFD9PpNnfXvtv9fGr24mJXt2YNxBbTY6Kv1dAcqXqKLkhRDf5go1dsjAHaxDVRLebFNd",
  "key31": "46xMUDu2JpYfde5r3sJWZXJACmhzVxRnoMh28P8pRKEQoMDGhxLGmgDxEYhuAUWUjsDjg3abKbv2Wru7fhtRJMpn",
  "key32": "43PLtQLb93eUZ4hyXkv7kQQriLiuHyEeCDbNADVj4SSDbw9Tcj4igifLuseWYVyDw19Xh2fi5FmgupkjCVq8LPHq",
  "key33": "2sYKMmaCcEBCXnuxaxauUvhVSxY7FqafzV8s5L9RQf1udCfqCYEAZKnyTKoUMz3J1awXYxv8FbzRd3XSgKKJ9Mfo",
  "key34": "2wRBKARXyXbZyC63QfRV7iZRyY9bCXpPcUFkjp9NoLzkKrRBwGAs5ibCvZxip6UzSQjoZjyshdDEixGkjQocyqvW",
  "key35": "tBsfd6qi3kHqKe2vNjWzVY4SWSWd4hWkt5gLNbBkwnqHtxgD5ka6C7cdj2dJZ4UcKhWPjkmYTeDbxJogU65KgzP",
  "key36": "3GdNaMgnkB4po4eRE2BbdSC3t3WjEymXfSrqcD3cyhyH6GcCbLTVhujYwGaMroLPqwf74fQvvPSYm3V3e6Yw1DZB",
  "key37": "3iZB11QPUPNqcvxr1Zi4HZT3iv2stc2CAjfJHZq31Ns3zWt3C3U1zdRpkpxN4MWhKotUmuEmgMMTxxnULMxetEFN",
  "key38": "d8vvH7GDEshst5NNgxdMsRBZoXRfDf6E9cnoMuEHqh8Zm1BaQ43QGnJqsUoFP3EopRcg4hsrxJ5WSEH3Br581RD",
  "key39": "3PZPXpATa4R4V52dSC4ntMeTy9f3ai4TZt8Dw6N4aUcpHKy6sreTn4baufGANKXCYnRKH7iiuMDeyc5jzPBA7s4a"
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
