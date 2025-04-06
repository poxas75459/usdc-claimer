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
    "cYzCwUF2WAKiRTckoY4enLeFrg1m8CNCsvEhxgwc3rmEkNqgBYeDYKMQGcCJKzGDkrn4yD4DnPFKRaPY88HH3eW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Dr77EKzDzSTRUq7UWSmxd3uKzc7MVhXsR72DwurroH57Yzu1RmmBzJB8sWqQT4GowB2gHrvotmSoxzuifqz2oC",
  "key1": "aifx2rTTx47TWigPBRgJJJYai6oc27bhVqwmWveREM3evZ6n5SLJHfueGT4vqVuxHvfuS2Yf1FezaWq9aMhSNDv",
  "key2": "579YgCqkqB2ywn46Xp49hCZyFwgMP9p6cLU49WWTVRjhiwc5jHZrpKeazqcSq4LLaj9u7cST8ZmBaE2czZtoj6tW",
  "key3": "4mpBfxyeK2mGFnhdWiJcNyQYZWJmhJB9q2m7PK16HMVHYLD9BGrRReUqw69LkrqaXMfnDyxgR1s4SgjgX54tVUjR",
  "key4": "2aqGY79YPph11z3uZrUezS3hrJVP8wz9bjELzBgW4SA51cWLDdXcyHvpAFhocKRBEBmGF3kAXPGDcHSjnisHhymY",
  "key5": "5YX2Eqmw8K4CF1y8GZVTyQMjrvwWTQedE9ANnamJ5RAYoKS3Nndq8TNJ5P6xjzmXwGQbRpuzCfXwGZNaXAeA9xFx",
  "key6": "3TDKsdoUvd9mbkpUbNQ67dt2esuFSjEnkK99ZbQHKyb5kEsDiaxpbHgHd9DZdbeeYmKiuAYuwDzLx9pSgBNgxq8M",
  "key7": "SVSE43Lexkmr8Lyxt1xzAj77u8kPskMQFwRUkUiC4PyPRP6z423AP36Se8n3cKtzG8AYZ3v2hMN9x89dUN1fc8K",
  "key8": "FEHakTJUBhZ9Kn9dzb6nShCCQ8xdP8iJmPEVppezDbdWeMkXcFbzY951KCbaFrjzd3phjqKb88gLvfF2h3UeP19",
  "key9": "avJB6GdKoewvN9MrDRBfZmKqJbtMS5fDabu9VvjQVPasYdFqwdVDXW1Xd61MsdG5ZKDUVsBUD7RRABXtcfNFZBZ",
  "key10": "3w4eFuWgs3d3U5YLy9JkYEdVqe8jDQnBTAMfQ7ho7ziuCqaUt7qMKpx2YCz7X2e4Vt7mSCz9y73Fmaz4N6si9agk",
  "key11": "3pVDEEfTGFw43fvZPfJYfonR9Jos4ZmkiSyen5oEn6PUun4uCntfuJZ3REw67MP6RanMQXdND6UEBsKav9NQrtE4",
  "key12": "2SEDxGDG1jRRDsAHHLbHbrZtRqoXfFjaqqjDMUC5ERWueMn2XHegyxZBqGr2r8tmrUwawQGeRiPqfcbPno4AmXAC",
  "key13": "3tpz8XDLUNFqENVUCHYXFLpZ5J2Z2oNeEb4spXph2CNjUjyTGNZRNBbPDzzXWc6tt8qV1ukJBxh7H5pzfZHbCdW3",
  "key14": "5H4rLnYX2yDErAhHrAwoUozaFBxL9hiJ72rt4PJbkZ5bGoTbNw8oMMLmssVAyLr11grjw9UvU3EGsHDETcePrmcK",
  "key15": "2FxKZ17BmYPm1ApDB6wTaPGLcSLULJby2UpmjHfM94w1y5rMPx9zKiMf2SQXqQSfjpK5m8UCQJ6YBfW9n9tjhLvP",
  "key16": "2tcpmyawJQ98wxyBceJ8X4GvSTBDfzZqw7KqzbAYYbpdbdUpVkM4cULi57mxS9v4wtpDPHnZ6yrbpGwWG5oY7Cx9",
  "key17": "2m3Auo7tUe6y7LZf2zKDAyQcbv5rDumFXBaWaRKkTKeE18fYmPLJmNv9mrCukZg5WnDFMPTuu3NxnoBQRcP9RQKA",
  "key18": "3cRQAaYfsWR3pFCX6GrVepiTjBn5YfpfAvKY1vr3UxnyFqbDmnN1WekmvPXcrCCi161XPcy4xj8iB5yULudFMjfb",
  "key19": "67hofjVFVN2X4wB8Uhwbk4MH7AjgJ1uXmeALPtcCFEJ39DsxTdwBnqYuCFd5SzPDzb2XxrN7Rym61E4UPvafXSVR",
  "key20": "2GUCRwEvYSMNpsnm7M6LCRzd93drysE65dZLTRDuSkMPepafHMnKMrc3kUAoeD8AYBebgLRNPmVwBYo6zJC8excA",
  "key21": "FuPwcA8gAV6iVTHR8Zhu5QGkg4cVcFmxvpRrstHXbDuaY3JfvwuiHGJXfEk7N1XtdnUJprkzjgP5LBzr499c3RG",
  "key22": "cJwhVrvB4bHD1jtsB9AnuSn1eYMy6w65apMU2aA12fGVXPKtkqU2JiJoa73kGiYZoRUjwnonNiY5iStPgqzuzgY",
  "key23": "2DgAzS9NbRxAzXoKGYnCd1zgTZe6hhPoma5xEpmu1qUFrnqcAaQYCzyA8dazYE5vZJVoxoBXTvqWUGmew84kVQ8h",
  "key24": "34wCGoqaBc8F4SibbBum2zoezE7v7NrK4cXZWAyyy38P4rMhSMD97EcPKAK8eo9vQKM2ndPVwZJFXFNAN1L82eLp",
  "key25": "4nAdq9UJnmNCiTFSWoWAHSVD3eps342HckjEhv2sePUJg7YxU55x4aFFffw1TWprJ4xTdnEYuvBjTijWBozb4gD1",
  "key26": "5vVLbHNhq7wFnm27iwV6kUgEEkt2QisbqfuZkTaGF7tKfpJEQEL1aE6zGtbhVyVtVq3bsWZbMTRJPbAzSnLya874",
  "key27": "2dxw7qEAg56NTF5VV4Jd28FLMZjKd797ha2GNr3BKVdrv6jWjYobUMA2Nac7BwFqyMXQphQxopF5hZrHwUYqwYLZ",
  "key28": "3pkhGtPSesjeS1hUSM9P1jbjKScxM7r8xRaswiU1gRH1Hs1BVPun3t64P6o8boST9MgF6dVSrcHy6uTZwZfqKZC2",
  "key29": "4tfFBd757xT28prX7vcTN28DpJAtVupYNdLr2asMc3ComxtDJykgwG7dGXM8WLQBT8e4gF1hXD3iWNpdjmQPeEiD",
  "key30": "3aoRTPYreRaoo5X69WGnz5axeMXX4B3ecd5FoTwrneb2KtKU65366iRHwcgQ64L2m3mZdtgguey959KMbevrSo6J",
  "key31": "5Gw88HvbyNkC3RfVCBRNHRt673JnDZEJ1AAEG8vBDjuudfVntaMiyQRrsuk18shfb95KpZeErwTX5tFuFrgMU2qr",
  "key32": "RCmiG3gcWbJLmmEMfXXvVjBcgBj3hFP3MfchTpGDTSDy4YEiA6p5MEfwEuXLFQhSCeWknFk6Y1T7XQNfRZXu5Kv",
  "key33": "cVNfuvNDMTuDV1HG4rJumfNBaoXSrccBNQ7m5j5935hrXsw9jpwFFMvNhDGYFRt9Vdr1EA3RSH7vV9XntcfbW3C",
  "key34": "hL93HxuA9PL8v5UssHYH9ZmqvcSCCNonrktAMJMw5kpoUyby6vXaHkH7o1ZsDWmAj3fJGNi2wf2uNDhZtdPCGHs",
  "key35": "5XJzxYCg7NiG3LKgeYQrwJBbnHAk84smdAioRff3oQTN2ixaR22N6KZ2um7YMTYyMWWKTFnQVivvwyWKhHAynSt5",
  "key36": "23n1b1KSc3MtXqo63NGvhan6cV8KuzaTgoSFbsjaV4EiCKwkxqaFbW5iuMKSTjADJTLHbnZBKPgB4STWsaXzyzrt",
  "key37": "449xCGtZTfW12KTEBDyGzRUxWBqQYwNETGtAXSP4chmzatJXDKSdduNGQD56gmk38GdQfuNuURcuRMcn6zJokUSS",
  "key38": "YvTTGkxNnaKyThmJf6Tj6HpBbyWwR5PcrBQRxQ7rwByRaoMVwpBhWt7wuvrL43i8jd1Eh9mfYzWufD9rJ5KDEMt",
  "key39": "5n4DjHyY77TtiyMo4Sir25EdMBKrWf7LBvRYFtbpwyxzwoFH4D512etwpcVsZ4Td5tgxebsoL2KJSRAY5f9RY4cN"
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
