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
    "32TaEjQyqcoMnVCXYaV7xAZ6qbZ9wHKLzBcbKyz7J4dkDpaYpbEa8DwcN8nN8JVVWLxG6AXLZ1Qn9SnsXfyTBkDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G3i7QacRmgy7Z2uKweV1MxFwPFp5nB6hEAXSZDzJ5xXf45mV31aAd184uEXSk38FiTCeaksuK4Fb5qKWocf5uH7",
  "key1": "5QjXN8WQxdNwwxt1t6KvP1iVphLSPgmGTrQEy9gq78VHYd4gBuYm9BBFKgqZN7Uw3ssDJby3ZaJ76QEWbDyL4sdt",
  "key2": "5Fy36eDdhFbxQJPuDWQBNhqLjaPTYipKX4Wrwh87Rpkqo4AfAaFs4ZZAMa3o8hUSGrAsUR68jyntxRCKD7FjxAtf",
  "key3": "5zMX9NjWkuVc1g1gVGDacA6YakLHDpYDuzHEoRQniKmFP6H88eMkgGubzyDNxBwrdH5gu7Rs5fcgqYakggr3gCEo",
  "key4": "27FA2cMpGmqaHriyqPCHoMV1GZDSiDSmgmkRKEa9ABXdVfFWymJ2nrVV2Cx3Cfy1Wgz4ALgVmk8jkedKhzeDru8K",
  "key5": "64MeSZe8jnSPGR7R92JCUYtCKXDtL4AjQSHv4K3p9YMLXKuu9NzMFS1v8jyPtNsz5qBqVK7qpyg1YQA2QTCmTCU",
  "key6": "3TkrWwERR6g8Ns8nsRu3hYJt6Au7hdPq8pvhPfz1a9Ym8vVsJtmxY4F5UtpxybVsQNJn2JkDrVr8pYj4D3wmcD7V",
  "key7": "4yjFuaXRnaarXeMAuMUaju9hyvhudqxtahbS1edYh5oJaFb519fjvKq8essLndvMqgv4NwxvWtq9t3LibVbaYQgn",
  "key8": "4zbYTdgEPVGuq5qmJQwykUbop6pPsi9JU25r2pHEed8qa7v4zwxAmuRFAokqdZo9CicRi4UgUFJWvb4Gi3opBghr",
  "key9": "qMouDRkW1PMNrTF9trHRWAEX5BKQh2UTvNNtQmUjRPyoVXKdu9n72fXrS4i529SeP1hT9nkoAe7gX9H4VB6SdNa",
  "key10": "Jw7RUw69QsCFBdPtFUC5RxENSDAnrM53UEoCDFVqTXQgECybJGYBTPezJWErjfytNybytFfKiddaDJB8TRX82W3",
  "key11": "5c7oQgkwB9AVWEQeWfhW2sxueL7RSm3D1iGHJK8Ag3UhLp5QpSZRyt3g6MP1pVHSBm5gCWz63zUJTjTk64c471eM",
  "key12": "5K8g4bGt13MRGfKQsNSWNmgixhjwPQyeAomGCvrsHMhhEuKy7HoNfi5BAf45PoCCveDv14XZMXbjPVjAXHiZkjt1",
  "key13": "5tYheNidc9zGAKkaAWiKGtor5pzt7S7N3GomRnn5GTq3JFcTAUS6F6htycAMXJgaRHJSbWhsUWgQhtNeNZDTghTP",
  "key14": "3hP2NVU7W32g1H8Tjmg7DSFTYwFcn9qcBFGpcCq768nB4Dtb8mEBPbuQw12uuREypvzPSgLF9S3DS1GapBnRQoo2",
  "key15": "rdqTEbd5CDvz9MaiDjJ3jy2PaYxNccwd6ST6oshm4vFBGWBMZXqYy4bY3pTjTXoDWUfijdwdHJBmidgixZfQLmz",
  "key16": "2MYjNhN5AyF96Y49fk13WnsMtiTkP6WYGgHabzK2ba2nNfUfBkd69JSqSKaPnV7bTAbDjAT1BNBw6u2QqQGn3D6m",
  "key17": "3k9rdU78Aeg4HmpYaxA8YSufFEfb4aeEktinENzF54XuD3Gv3yFhaahcnXEER3cMMJ92xCoWMR8dLYmg7jWZt8o1",
  "key18": "66BxVwEGeQVnxYpEMmnzwNzG9dk1uN2efH4qPAXAMXWRPjFJY2oiX5qFvPasXxMuwjvFMV6L6bEikGmdpKXQMwn6",
  "key19": "2BSp19B7w3M42pNA8DETvwpkoHEkBSyDfLSKkMz7ALDJeqR8L77dGTN3WbaPXAn3hwDrCFNECVimeTnPVxpcSgqA",
  "key20": "2za5wbpyo6wdSkeoMKufHhVN6xWeD1v2b8vQCH61oJSaWZVA9H9gGahnoSjXdvRFhMGgVkDBPZbgyZGwCKRRhC9c",
  "key21": "41BckjvtT8ANzcrRdjnzEk7NrQP9uWT9F1TqdwySsii5mnp1tY3KKHtDYcTXTQPQdwHpc8JYcXMf9EfuY5c6BAHT",
  "key22": "52ixNKip2gsPNo29pz9boa5kWihfhyFbwBjQE11cWMVcp7BshrXiKKo2dYnZcmgF1zDngSvt3UsxYw18uF3EPLEx",
  "key23": "2hhbXJ4ASVKWShM82SZ6xcfFK9VwvGmbVQynPHSx2Mofk9TNYzs7mGvpznqsb8XND1ewDgGSp5q1NbA63FeHbCkn",
  "key24": "2E4tm2bj1VLa3CXBKn16wj5vhsPPiZVJHXEtBe1vWPQAgo4PpS2myD3o6END8JCTh87emKLQez1CzCx8KKgejfjn",
  "key25": "23RNCoVgRBaDb7E2qeKdQYzYnTVXpCp4BEiVtQiqupm31SzPyCx2j4bejEWFupftHwmHjpBff3fzbabgiwRWQ1qf",
  "key26": "P8NqRaAY5Djs9dcEia5yK3WhgfA8ebJt2x9sYihe6NcpuiwFJGtFHutbJbA85Tbee53WJen84P5nVnMUXArwRed",
  "key27": "2ceqgp2QdSdG6BjrNfiZTCLHbFnfLq84BUTaqkHXsXMpL52zhiGjSbwnpPFkbbTdHPtjFhyPk2syf7bExRTs8iZj",
  "key28": "3hpzbwkvdyMb1oJmExiirYjmnrGAG1iLqtt3U4t9myTPKkNb65JkqZH2TuPJKmDetZhFeTp6umJ28z41jkUjFzAU",
  "key29": "5DdF5z4NdMMpSM6Mm2gFVzMdkmfX1UH4mk6ryUdryUcyTiRwR5pPDEoQygiFB34HaA7FjJU9eGB63bM3cYJCBxB8",
  "key30": "3VBzjhfesKKWLCVNge4yWnkXCS4EwucmsiDaQat2rV1x8SGNcLJ72Y94M16r188heVnfyvYAcALYYDCFJRTXFsXt",
  "key31": "66hpxHfZGVagR75Pd45cLWcp3JECC6jpKvyTXEKahymFC9ELsJ7hD4sp4JyeezchTZsrjnsiYVbbCPy7E6hX2KRr",
  "key32": "5kQw8wFYKj5sHhzE3sFDWKsJuXCYhJkqrJt7BLTYyuD6N7AmqKYaautR5pUnMgadvj9Pm2NuA17cdBADwTFXiv48",
  "key33": "SxmFFje2spiuzpZQyYDDttRQRHk77UqofHjdcvENqWzSJfAu7UgVTbxp44e6eufk8Yz1UMa781bVk8X5ZGsmUbD",
  "key34": "4JZrrdqs1J6X9iGg66XcCqEmDPkRWWNp8srpGdBAxeV4qjDbEM39t37uVfFXPhNfj4FKbbAqJ3xufbTt261UTSry",
  "key35": "455k3tMRkxNcgAPDzZ25YYgi2a4RhScEaHjVNAVZnKxEYGiWJyg15LFY1SzFXRPuFKvFPbcWxF9ghZMy6DRsvLej",
  "key36": "4vxruspNDXTdsuKnjkvS8oTwfkpfFwn9DBr57mNfNvLKwV5R1rsQHkEXvE85H826pAhwpTo3EDG7b1jVMp3Mx7w4",
  "key37": "3AnjfyFwUB5fQLS3N9vwaCRhppHx36C4SycZvvHSqaLtaXu8cPzDbVQX6JXxbnByAGnGL1KY4pe7VvEgGdiyLXz4",
  "key38": "3RvnLyY31jF1ZpmpRTfYKpUTYPHNVNYdM9onGEJShnPsu2a1RFLUaX7tw8Xd3YQmUbt6Q5hmxj1CSgmYAMw3AHqp",
  "key39": "4T9YP5iPAk51J8zTHAJG2CooXXaYNtKHHAF8T9HgkBtfgCoSLNHZNfFG3RK82Qv48xwLxjKpSnCvZrEYCnhsZRyy"
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
