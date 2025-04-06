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
    "2LbGn9Pz9X4PnUfbUHfLttQys1G66WXM9XuMUAtKXGzxB8eZxZHxzrDPqvmM6FEtssarKRV9cf4ynYzNtuhkb9qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gsEmcEYbfXQGSerkJvaLhmcPCPFiZapWb7gjThikipSZwknaxsNEXdDDF66TE2qxFr2HoiDHA3FpKZV87D7wdkg",
  "key1": "2FwSLPiehjRwFVn3qZqqisbkCHUr8kRN2rSzHAADZHgBQaADJEJ1p5cxW8LXUteVSw5qoTAteBXYb9zSZFFK4qSk",
  "key2": "4MdBKSaLrifk7dVi6Kda6kEmvfpYcyH5Lr59o9VVmmTuRU5MuqbbVWRTW53KKBNStCYUDwjPLxtEGx6WfxBYuPy4",
  "key3": "3RsHb3kpsQnmY2TgLhUXWL5tZEzZ42AnD451e6kJzMracE8HUkCynTXEyGHyh3GTBBG2aYfwSJngUintb3z2nWQY",
  "key4": "4L4pEdjWumiTgSYpLEbywHsyRUAHbUZQw9e3STbF7pAVNag7dn3t8eXUhXFTEQWEpqb4CENkC8zmUnHZh7Ndj33f",
  "key5": "4o8fgUzmtr2h1oYRueMvYDSzTgRWq6EDH5QHSCJLmp3FU61iuRfEdV36zKpZhkiVjvA78HqvPNT5FKorr12cQrbC",
  "key6": "14qpCwSnfJGCciGNMbHaqGJJ4tP6m5dTWPrGeXwy7pYhKo5NHEk5fkfvAqDvc17aam21DPbEuQtVKQwj7V4ug7c",
  "key7": "dfLx3TARGZhLinzDizN4bHcsVCBSwEr3UxoxUtN5AJXgsTw83vankXh8omWikvTcAYMLhwqXUh2TbC4H1anadB7",
  "key8": "3WYvKo72MCugbDJwkcTMih2MnqPnSY7s6BpjDfp39CBTvNRFeAet3kiferBDgWYgavLtGe4f4kaJQmxTtJCmQB32",
  "key9": "2x88GfU1fPbRqMLjgzpGikU4ZcLrYNG6mGmUo4pAXhGFvK4cTWSxgXUkDgpMhuSnnmMubLbzjB7QJgDqYdudNi3m",
  "key10": "5ysNfDwHG6qtLixkejVhLTVviy2QoxarK2Hws11XxuZU4ZpCVX9dR6adSWRCkTmANs1dRbce43bXziEhy2Lnp5Nt",
  "key11": "22wptXGQgnUJASBci3MJHKDN19EPEkofQGrsTkGhgfsZFHyKVBpJEYGoLrCKCCFFLhfhHwrMvZZ4B8d76yamWJym",
  "key12": "4QxSXHt3auAo5qBMst3gUpnRbsr9uGf2Am2NVNDd68cCuf9tdHnN6PGM6uHjrWPywyety7MXjsbbbhsoi357as21",
  "key13": "4gHetKnCNqef28TAstbLTiMjEcVGBVoF9EFaMEVXBGbHheBRbiije7SEKbgpAgyHfgHfYcAW2K7m4JQ7nKUjc5mw",
  "key14": "2MfLQZvjamrYhUU8ohxWYxhwFURyTZBDNFV7HuKxufJfuPXUmCZapWLVxHnfdn1Sjvn6SZU3LPvyw8nneQ9Jc2xx",
  "key15": "imMLJNpphwDFyGeh7KSkfZmnuJgsQxjihxwgFWKYm3ShARCkQqKbRVfYknwdakcK1VVH3tDGL4YSQuo3WVHnkKJ",
  "key16": "2w5bZoN1uy7c9vKddbS8BpyJo9KSCqoawUeyTQm7cpLg4yTNiTHCWMLk6mac1s7Ey57xEZ3F6KqhHAMCKLfB9h5Y",
  "key17": "4TVtDBJuhiapXYtPePKJt3rg1uaU83jiMxq5jPQLGNho7mCvzCVHYM1DdS75SSuGni5G7ihXqUTfBbxGMPvS8YV8",
  "key18": "3rsxk9ASL5yuKhgZ9jCvQ6aoaXWzQxQCAxnpjpBCK1R1aLMxTPxTX8Tf654sj4qCaFAX316obuRNu8gLBCvFZkhT",
  "key19": "2TP5gA1hHKTRPyv5BGa41Fi3ftceoywiX8Qvu7ahkeu8k18mU6ZmU96APCVUwUw1dH7xnKP4e4ZikzSLTdmQvGEY",
  "key20": "SK25vouWqpSdCMbRCdtvsC8JXSTPGjqt3soR2YJwDVKxSEnf9bCFqBgMkSimkxVPg4yMFaLmMfzma9tq4yApasj",
  "key21": "iiZoTu23vjYCZU2mpTe2iechhftsXeZu1qTHU2TEj7JAKM7FcbzUt2vmQ6YDk1pDPkn3HqcJxevt1JnSZUuLZ6K",
  "key22": "2JdtR4xmN1n1dxArBNfMt1mVVBDeHyjim1fXkZ3K4ce2EE7VumhCza9b8hMQVLx1CkwvJg43q5ueGauGG1njcZ9s",
  "key23": "5V4vrADUEt7CGVnsJSoJKk22Yxnu8D97R5vgbji4oHrKXC9nKEczwnUFxMnoJD6jjjdt9EyCQ4CpXREjE4AMahzB",
  "key24": "4m8HcDsecWmgcHJV9QV4tsTTGZt2xDuvLc4WX2oa5ARxY2x2Q17cs6QWDk3fjH49b2VqwybRdyrVnM1DWV6AW4Eu",
  "key25": "3yk8ZTjin5tyewf411gmUYH4aspUfjzuj2F4GgqzaZp7ubR6itzGgFzhoMKVudYRZqRFoNhH5Z9q9VzxPy2TnDgP",
  "key26": "5WUikdbhaqzxABCLvk9tGJ9vzxK5w1WwLMbyp9HRHwbPpJXqvu4uwDx8LjUz8Auzbnx36s4P7dCTT93Qk6bqRvSp",
  "key27": "zeE7iUTWA2taRGRToj8EMsiLFcNMH2QZHBN2ANhgJJ3vdeFD7Cne7prtdVFNgEiR9aDsWTAb2MdxCoSzj6FFRnu",
  "key28": "4CDrHXNnXzZJ3w3NeJMDkvX8xT3LFxyZohh56hxLzJZPZW1hmdSQudHyiiobdpQtVTmcAvg3e4913ZsrtGpgmKXn",
  "key29": "4QZvVhzs6ksk13shd5ZFoSSmN59SS7WSHYFXmvFmGhJG82nDsnczGNFsSMcPKBKfyxcTLK19xbHXawz1EiCMTxC5",
  "key30": "5owL2hrqw24cUrZMwW3uWfr5gXDb8fZwMFibPzHzpgxwVwuXhDH5Tz9zGRDEn8mzfQCmpE6gfAcR6zXAmgcqHyGr",
  "key31": "5mQ2k1A1AHmZobuBNd8Smrz8akZ1LHzAb8wrWvnWgQ2zFEouq2hUvXubGim3oC9rdUiNWdH2ACs7HmyCoPqUGPUR",
  "key32": "5Fjb1PJnqeCNwk3S1Lf6ov2qyZiXLMJvGKKMutuULmLjriFoA8zX8Cm1Kp9cZoN4MpA36fCnY16nYW9ZXLg2rk1y",
  "key33": "45gjra5Br6RqhtEkJmstrBJHARN36u1baFdLRp9su8PS8kKMeDcQo54MaiF6U15ewydaSjQ541rEqNgrUFWcYCVB",
  "key34": "hKfXSCufikBdv4qbyFuYAUZXKmaY9CA5xPuYyb7XLUMMyLYhW2onWdGRtVqsbj7UxDs21FctSzSZ4dATBJSH9Jz",
  "key35": "5bYvP5Cv6AyrukGmubWL52a2kYpecybyz1fTaoPZtcKPzTGxSbBtXza7k2vsG6af61FsY7ybVZ9nCVKPwwpxz1Zn",
  "key36": "zG5oBUy3Cpvx2aLRPzf8pdkvF4h2UGi5d1r4W8pRGQuChVZ8k5kkEdjweyamfsGzo3jDhixXvyKc2qvEJEiudD7",
  "key37": "3gMf4HDkMBXCfQ3CoJrRE6A7j71L1Q7RBkj5zUcTJvdF848P2tf5T1mX2zqsppdZ8sBKX4YNTwbmufa6wQUC8fvb"
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
