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
    "5ipYPkoRYwdLfav9qdB4aqcB6QjyN8Sfnf2F4PbBR8Md1UptnsZybmK5733gCgdhSkyiFHdxDuZgJjBvZuhrKanC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NTeaNLEZYqHSa6bGudjxcDJS9CezAfopEKKE2mbiRpN8Po87sjAK9Q3Y7jsLaxWVSwwUJ7exjqG1oYooK3tQe9E",
  "key1": "4wiGZEriRATGpuiWoAgMgLgigeMk8JKJCHJmQbZbkaRQJ3SzJBXuUV9ByDHee2EqbAQqYdYGDzfBrgiVreoGJ52a",
  "key2": "2gvWmYUAoz8ecvp4Jo6rHfJyjxWpc6yxgaZeP3xZdDM3BDZvursywtkSBw2aruKZJRXvpgTQ5VyEqjZQotZD4Vhn",
  "key3": "2GQKgASKND1uGcKPK2XPpUrJUZH4Ug2EkitQd4DbVjGevNC2BStNzgs239J8z9te4y7zmQfDGTCfRrmoacJDB6rD",
  "key4": "5bFbMYByRjPbNATAV2qudqyEYgSH6Sttr2mq6RsNd1TvVvUgAZcsMP9sksQjuqjbrVG1GZWYvQgtaVNbGuKJwggK",
  "key5": "2jYFq8T3uT7nBWTVAtQhtspKLKLnytyZAhvcaSpz9ruzphyuiHhHy6ySxfX6HVi1Xhx5UrLvL7FYfotsVrcFKHg",
  "key6": "4pshX5qf1Kz92nKhLCukgSkUFSxQt28h48TEgXCKuZzVGzDU89mmdCdjx5Vqi7EK1hXdjQ1DG3yQCEjwZJNuD63v",
  "key7": "5VnvKD2Wd9ujJfAWNUy2V8KxRjubMifKzioSnqhZ1AyE1NrdZAPehWHzy8fAV42wXnQ6Uoy5vB26cprLd1YJVJyz",
  "key8": "4cx9MfdRS3eWTicHoJGkrxw2ytDtfpYcjdpiMijx4JLx6w9VqzKHyQiSrZMuatUJXpjmDbFBc72RCM9A67DXgUSR",
  "key9": "66wgtnNfFqULFD54e53cS5rqqSbWdWuPLWNv2Td4Ukia7okEMGZemiKfsj5Cm4FJX1Rrb3e7jZ1YvViKDQeirxNj",
  "key10": "2nuq1fvsTd8yGXGHBr2bU8B6jAki8K6XFyVL9siuxE9AwW3LLofujmXWWH3qRuXZitcz3st48Wdx6YEJRQUARF6g",
  "key11": "3d877qkshGLbU9kMikWw2gGoub1yNrE3rPhcYfo9jcMkdbj5gDfYm2ViBVsQeTsMQpzk3BmX3BhmcMY1J4r2PfsJ",
  "key12": "4gozgKqkmNiQv5HAfZRDGm1rcFLzvCLMCsQi4zBcZzuf1kDHjbw11DrRpHFTkrBAtRDfxXRYphE4secwpCqrziG6",
  "key13": "3cenwtse8jhJqTEbnHHHr91qUs5psSdLDGaoWSyqLb1knq37dGzJdhizMfWEXkPThoXW23P68325PSZspqqSpmyW",
  "key14": "4uaxzfS75GA4B5nMFPMp4V398JYKUQz9HyozS66ycHTfC2yjCZVE8AygZCTZqzZ2MDvpyj9T2PEqmDTPxUo3ReEP",
  "key15": "3Aa2LPHH12jcaPTzkwmgQ9VnBaa5RBt9EY1eix6chUkq6VBTBwR9GWrEd3yx1VZbX6rmsVCgALgmDgYf5Mpr49JV",
  "key16": "3ZU5GJcz9uUKaZV14nSTuw4ULzjrQ5deBZDm1pqaqrJHLyyVogp2wEi7QdBQFMLnAegjNtKuKR9vvv1PVJYSoWJ2",
  "key17": "5ADUwCZBuXYU9oAVs64SXhki2Aein8WUSXaAQjuoEnLCKm3Fw91R7TR9pSB1cjxSNFX9GC7ajhnEkJ5wAUcwjNuR",
  "key18": "Wi4t1fSDh6aPiXrKB7uifC2dCgEUTmb5tFuVHv379NPC74wgcp9ZGLbQoD3cphKCKa831D4hyuyLQecPTYY6R1n",
  "key19": "2TmUjmyvRN9uBpoWLFhVYLEffRLtthant8iMtEE31JKjZLC1FV2zpmQ3Gb7ayNGY5x2JXrm1sHENHhpQMNE94mQ4",
  "key20": "2NU6U97oPB3TsgLEnPQU5Vn2duE3XriEaUePCKhm6c91qiXzD8FmVGaLojCtrKdEbnEKPnDjwTzxscSUdwEKotHG",
  "key21": "4e66Dh41gAfTjyQpFQTcAhWdb9hqNV8tLDcf8y7xggSaPYN3NY4Di76hgTiqRHu7Gs8W1HnaxG2YhShrk8baACkh",
  "key22": "47ZenSWvvfiHar4pKuD553XnS59yCazYhLTzAR4LdPUtJTZiZSB322DbFdN89asqzNfg56wYNUYXPcGfhRZQN4Uk",
  "key23": "3iDiZ2q6Q1hV1usXEdP6uYdha4WgStdKVzqCciWC46r6JgbfLcJh1E7AeG4SDRFPxCVqWfdk89mdyWGVsmU13UYQ",
  "key24": "3yFDggrCmPff7wXKNK1JzKWGyXAZQ9aotmBxPDWyqpJ6b5gDMRQXh4QBAh3W45iYDV8RfyZrBffTi3KrEfCrm4qR",
  "key25": "66khHVyqNui2NukF6x4fEPNUdpDvNhVXCLHNJSjTxhsgY9pXi7RGKy8Gm8MgR9PYYxJDiEcTVHdLtANpWYnnGe9G",
  "key26": "5TsVm6SBv6xZQ4C4auTLztpSBoi2jtBcMM45ih9X3GPJkwDywjcw36FYjR5Xw74AuyZvhiotDA1BgonQtjRWpzfe",
  "key27": "4U1DsFFJasyWZaZM83E86FzHV6QviHPRD7WZwLpBkSktENVHsPKnrCP8simSLit4GcSmroRUABDobze9aN4LEKSH",
  "key28": "4pMxjBrvefhffEcACSL153MUcNag7s9BQNtyP9Lx4wrBP9ByLaHhZ2NLnsiGxBjny6WSwXJwp7V1Zn9wtsV7SeR",
  "key29": "4rLuYGGds65wHBdYLHNiQynzX7sUioVFbYK5QP4ft22RhgfCmbnG9akiigz3ZLWZe4bgdwaiVvNJqhNsrwxYUHui",
  "key30": "3eJpPZcndKemSwdd9BroryUu7ZNoxTbuSQqFFVBJdfijE41S95FuTXrefYkPR5Cr3b1mdAAK49RVojYxEDHERUFi",
  "key31": "3YzC7TJcXt8X7Fj1E3BMD3askQJGrcTzQoxYwVTK4hDUWSV4wwsoYCsWQcnMbfw9io2yetEYB19YjKA66ocxpiov",
  "key32": "4tMPot4bUyb6KZcdcYXedrRefuf6g733uS2annGmsq1PkUebPB8cxi6VsAvdVjRg63r71wKv9gCpsVvt18UPFwka",
  "key33": "4mpCsj5B8bNT6YSFYocQzXHEfHQ5rxwvvbMFcJ5kaK7kqR17fo5Ae5G2akWSUy3JLfQNYZYxHVHGf4g6hMi9SqWB",
  "key34": "5h7bNjAKdbjvKSv9g7WaoUUJBcky6RT1UAcgMFoUJAtyczPqp3UKecnjv6unb8dnrJtXpE6F7i45pmcbmXaYtcRq",
  "key35": "25zqEp3YptH9wYAiDny2YNRzfEP1kuoMYtCbX6y29DDbiqGrJ92AvZEcwtXJsXVZFmiataGVgQLVZFgaxN48Bk1R",
  "key36": "LjV5kcN6aMT1h4jG4JW9YzDrLBToAkPJwF7KX5mYi15QjjvA9TRUqVrua3VDpQaqx7QqRzyJuwxkrnkfErq37z4",
  "key37": "fAQgCneNJJ3yaQGDkHwSJRNd6b9Z82zW6YKRnqDd8dDHVZQGGMFKG69H9yLGs1uYzoQrDF4rMnTTyqbcC5yryTV",
  "key38": "ekgVRcoWKUrnrXH48F5EvdyroDuJ6GEVpL44fMnJruTfj1SAz9WXDDVBvr6AxLMFsWymjLnUtvhgYX7rro74pGw",
  "key39": "VXdLknV4TooFaXqgEgFdUvFSKUgoFokRb3joJM6z2W8XWHbwepe4FUEmjvcTETCen9YGYLQMMawAv9ensHUmXhr",
  "key40": "3TYsG1h4jibkTEVK3wJQVo4K5FpUUNh33YyaGenaARnBNT1tZ41SgAjPAar1KmtJKwpVsB8fgmxhj3Y2Sn3BawoS",
  "key41": "26iTA6sb6mp8dNtv5FvCLNW6VHSGueJUtNcWGvgUNzf3tm2TtK8tjqdfxjPGDCHMUtxSBwy8rccptaFHk927euaL",
  "key42": "59VKjPcbb2jwnfifquGBUWo2PkrjrfQ8zw6EjuhBBLMg5xFSij5NiQTRyQCY38fBGxJvHR1yqeqxDr7rCkkfK5bx",
  "key43": "3XQyj76RpVcxJ5rGGsvnzKadptSn3cbe7h57QSL2dviNxVfUX8tEQnXX2cwcYZFnK8UnkU5bBcVbNjvJBjBzzVDK"
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
