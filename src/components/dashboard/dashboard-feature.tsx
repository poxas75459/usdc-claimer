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
    "2d7qfzu59gnHR7Fc7DGAGS7rdwyBG9A1xsdN9v1Zacrjv4bj36XEavKYTQQJJo7wt4bgm7m1my82n5QuMyDwtEtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xeGDMQiPioP15rtHpkc2cDX5A3hrKk3ijK3mfu4wXhNWMRFXuq5c8gz4Pki5fpcbFvKC3iyy4j3GTVSvweE2jWg",
  "key1": "5ktkGGMne6SGJLRyJx7uuAEGMV6Ko25VJwMGt4cug9DpVXa2BWM6kXGBuBZFnGomxWtLmL6b5U9muuChbdkAyoRf",
  "key2": "2boYCKPoSS4X3iYkdrY1mAMNJBUnF9votoCEiA7VSm4LoBAzMA6D8nyvtabKzBbNttso8Zo86Fvqwjwo5jvnv5De",
  "key3": "53p6PbbKqNtKkzREZDLwd2DdjquydrDWEVdur2vUX65m3uKLF6mPkcxD8t4kevBvC5ryQiSnsMv34KDK6Mxn3n4",
  "key4": "46wrygKg9VUhe4wyCeUT2wpjW1FRWFaeKS8mEoA69oH2SUVCYexoMuttdHkHdZLVExE11Qt3M3xKrFUomv941Eds",
  "key5": "3Kr5yiPnAtHnFecWGzHiWJNbcNj6RFMfSgrWsZdSqabqT5XpaYQGt9YX3hWhXfS3Eqc5qWemDMkg97zL7y2d4Djw",
  "key6": "33RkLYqJZf93nq8H5AJ5m9rA2E1mii11T6p7XEuxNnTKdX8oC12F8ZXdsXNPQz1JSs1Zrq1ZkrA5NSSNM2vqRhRp",
  "key7": "43pgqFSFPekgdgT9cZMvkHG1fCUHkxK5tknRz3ZjWka3faHw396xQgnF5R29R2RYwSUWfsBhfCDnixWvniF3uTnJ",
  "key8": "5Jxf7fAZDNVr41vMYamXLDpWY8Xnyv5TjPUTg4WBzi1o9AAdrJmd7hSHBu4QShheWVesrjwp4yXfrtqbMQbq3dTh",
  "key9": "5X6VtAjnXULLK3hsKdaKGxFUa7f6g74p3M8NwALMZwKdN6ytQUgtQSJY6kpBf3LrXF9NYoRexYCDoZt5p5cJsB1A",
  "key10": "4tdDhgcsrFWaxc86xGmREu6K8jo4kcPbpSV5SBRQv189nbGN1yshJs9AH3RGQdxnu9bt1zfgAqQLBkMxppwuFsNV",
  "key11": "rHWTnaGXU92ZHrumr1RQhijZEVhkY2rm3odc4eVi7cQxoDQcHM9NsArvzG4keDZ412Hd9CVmjcu3eCWHRmTJV3E",
  "key12": "Lfb5t73Ry3g87dENjnh7EMgoSUrRauwaJ9bFBuCu7ywETDNQA94sEVkqNFYLPBgf8HZHTDUzj76Ap1nW58e1nzQ",
  "key13": "5TrjBcCqhZE1dbf2MmFStyHRYN3SdcyCpK3RKBQJhe733vEAvxr44kLMGooTDA5HEAdAfn2cbMcas8bRnxarvcu8",
  "key14": "3ZDH7P6h9ewrk1eZTcmmR6q8fJ7WHTMCgAEMaqCkDb63jKazeD3DiNCLyspYHfaH23hwYH18hDtZzJfSVPFGjoEn",
  "key15": "bqa7o6MST55yv2zYFaXNVC2ovoAVPq44aBM5JmPagGfDLrZDLeVHjibNF1mmn1p2NVtkbQbcMqGFRiK3x2Nk9qV",
  "key16": "39sDcHddn2TGmuNMQ5jp4fXvzPGXQF5Hvuusg59DZ1CRAHfC5EXGGjud14Xsh4koLUuaAra6cvCBucGYBCWSvjZ2",
  "key17": "5o7o79BRzoV3GNNuQTn8D7MwXZka8Rnvy8tmZ2AcwoaTCwChkC1p2Vz6XJBvsYDA5Bvu8QaT81kB2BGwPhYuZG3H",
  "key18": "3KawFbV23x4qiMHXkbA6ZWuC97ysmfXLj8c3VbSdsqLPQNkVa9of1cXzpxhyG1QZ7qHV1AHDpAHJ1cnyhXe3CYXQ",
  "key19": "5yPJCHGYRENPmD9stEsQvtiWDkDJBKtUSbE9bJzezCxxBygr8ThHa4xJZDiaEuRTRAXxbv3bCERWFfieMdHHDWw2",
  "key20": "55y961RxWqvYHn25w8Hiejcqxw2ZTJJ3nFZishAxPCwBL6KqW36hPELdHRsLUmZnFEu7J9nBsujPTsZPAKiGEWET",
  "key21": "2sBB2u4VLtCWveS5ewGQGh6YaDKHvtBZy1iq7TWePUN2VkoyjmQGQ7qV8hREvabrpv2gzTXrvsVfKkPJgCLieNZR",
  "key22": "34QAS9PXhmdEYB7TU2NboGWzdcgMfTWfPUrbwBcWCgnpx26f2mcLez3h1rYDr7s8vvzjX8HVyZeMMiVSrUezccpR",
  "key23": "5pXp48QkA2TsDkkoWiftnfxJSogdVrmRdtZcpH7BaayxWGdSaxUUUPJ5U1Kn96HL7o9htJ6K4JfCrf9L4XKRsK1e",
  "key24": "5SnWZ3afjxE8CQdvFahBVvFRGT95Z5hmNMz1BkNVWvYN592xURpuaupDRKyLjTfbNocajk1RV5b9QipJ8KLgnbwd",
  "key25": "21hUGqiWCrQgPRKMxGLZxSXqLdxhGKAENw6cnoUfTHdtbJZ3EFLEXSYiVoCLGS18QUEZjKDDWA5QpLGJazVsPr5q",
  "key26": "3Zqrjhm1TnK82hRKurUzziozMX3ywTJwAidRQS9M1a6jZbgTjJN1gkmhmBbZAphupqwvczFzaifiiR8s1icEHTx5",
  "key27": "5Go2NkDSCFmbjH96qktyYAi7eu2y8bnQCJA3vM6WHobvFSWUjiQ4SBK531aaZnn5ogtpxmPEo6mrx47yvbwkxpKv",
  "key28": "56os8pXrwshvfnVuCE2tuFPFaFmNuqsMdJrJqsyVAxPdmkp2uC1ibNar912cBiMtDN3MGg1qzZ2k1uEqPGTzdbLW",
  "key29": "3A7XjVeAGem6tcPPLSyvh5FYqXGuJJyxrrjQdQs4S8kxGSzc2eVTupEeb2SYktBmkz4JicayZtJrzRiRsCTbiXYN",
  "key30": "4vSTJZvrp2ZwWvyrEaP5hHRGhAodRw7sdi9itmCwYGQtb1tYw3SJSdRqFTtY6YGYw63PNHMe7YV9t5QhabZHRapq",
  "key31": "5ZwvFQcocna5VDucFDmErgL2NQMrdEgQ6cHFfen3DBsJYvjT72g3c6MVV6suNGCjcqP5tQkuenzzZchQDLa5fgaP",
  "key32": "3bhZ9EgM7uRgVd3845Z7MxoqQAHu6UHMmxEdpbzB92UArcR9RKdcXHVkrMN1EVgokFxTurmDMNib6vNsJWuwd3qB",
  "key33": "2VetJ4qe8C6H2DoAfonRas7dNw4VGjWTVGtW24T8QAMmH5EbvFnPmsbbrXLjucpJRWrmxhMs4pGyafKKGjKHfkH",
  "key34": "2gf5959eS5HYL9DM2EujydVULv4WkYctKw7g7reNEDMyubHSDKgcQstCviinbSWyskXpdcYyb12bC2bHahvwUCF1",
  "key35": "9u5ucS2tvDGZ9tKeqXfV6df3Ff8VWtC8LQifUR54M2vUPwnPYXSn5NJomwG26XT9MH8bTx44rkDiFsk8mZUTDMJ",
  "key36": "5ZdmFFFPazgegVMuWRwqomMZNPzvvkn1CXvdADLDNnjQciUF5wmu3dXNLE9NsXvxjSDMiXRYXxs8xMzgCAzRpaC",
  "key37": "3fojMUdK3UCSQs2tHgrE649o2yguzwusGm2MTTokjwnBQvmR7kRR7GxzMMd9WmZF5fP1e8icxnsr8QspRNfkbKhc",
  "key38": "29HdNLQKM3vgiqCorfEMna8d77xcz8V2SZ4sjdBscjWZ8CUVpVVBxCPwHXJLAxsGciwShjhpnaiyp3WCyzXbpto5",
  "key39": "2rJ2VQkFXt3tUEJK9TAabW4ezopLZtGq9hKHrvgsHaAdcvLtunSSEz2TyEJz4ufhUKD9rLiwwpaWe6gCW6wwMGg3",
  "key40": "2XXhwmCt6kEw5ivRaZb31tJ1vzKYT3avSKtVZiMgUUniTMX9kG9DoESp1GDuMdWiW81SiXHvy1BhfBJtYi4VP7rt",
  "key41": "53N6fN5Sm6qRg1zdDnpGwumrk2Q66mLJ5eLNMrWphp1WSFYi25a6qHgKFkDQdK66nZPuwJ7dixjXjHPoxg1JUUxh",
  "key42": "2567hyyRZgr1io6KsdzsxNpN89HrzmHAWpFazj1TfKwCJRKw4xNqqKctu5xo4c3YyVt5LRQTE2jNRtN6vmgK5813",
  "key43": "55o5xQDR7nVrwSSarHC7WzPYkjdKgoJ7ZhS1bGRwwBczywjNmXFSQfd1kDDrmsuP5KazR528Zw1N2zrxhgHMdDm1",
  "key44": "5Paz28n1GRkvv332VUb9mqkqKerHarbh8qTW41aGygp8nqydQLhn22zF4vxaUan5VoakzA74JyJLE7ZmNi9UrDMi"
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
