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
    "5v76FFALJDnTaA1CQtw3qQruWiLv16GuxvXrSUrzFt9yzGg66iS2TTkdxRieBNvPDVxSMvFwXximhJEGfu2283Dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jpQubWK24mhDd61h4SLdByKTj6JsfeU81TkkiKSYuBmeM9SQJqYmKVZRDV7JMbdbFNWQKogzRBS4ZN17LL2A2Je",
  "key1": "2shUWoCCbNoW5TmUZkekwjtWfGyyyPWL75jeBVs9kSYXabNYnbv9vGB9JjXuG8XM49H88pTNDcS8fjzr25M2iPpz",
  "key2": "4WheRL3pMt55U1mvaF7oXAeiZmdsfk8XNjzHarKKubzxxgi3bGrgLZiccMjetHJw4x9DfTyp6yRb2hBff9x2mo6B",
  "key3": "3m6ETZ8cEYKrBEZVAbJk4Le2w7EnuWRZZphHyE4FUHBsM2fsLQwD2wConR19MVDFQrYxsCff7Li7mopS2PLSySya",
  "key4": "4VqnrWpPhpadYQrhVFFNCCFN5hxnXPw2xPZoYL3joduav9b2FA6k6XK5CSSk5TBBZBwHnLhnbeZADnQiNYxmxX6U",
  "key5": "23jx3Dtt7kDEMVFT7vAKvjpNdJpcKyXo4UMmT34M8nKZewsW7Ybm2eBepRdVP4NTVW7wqW7oyBGpKNG8xPjkWbkd",
  "key6": "2rY62J1kYPwM268sFTGc66BWfoKGKX3UtyEQWcztUobCZtx2GhinPEpSPy6iM82NBTYeBGM6qdyQwwh2jiULaQfN",
  "key7": "4pf4nmJDmwensH8EyQJUbPWRMGe2VnK9SdbpxaYEpzffca11j9kjQVyyoGe85msa9c4P2uRYwVFdqM5sHuRcbUGD",
  "key8": "2D6hL5pX5CwqAhtoXHWGxoHFCLJa5nHBwstsfQdKkHqDG7xrgN6tnDu1pEBPBUUsWSDsUedx85pR2PmW9TGvfcAX",
  "key9": "5WN8uK9miT7rZeCXRP9YmxrQtcHjcFiHmtmXWBxXWEU48gmxcpvdHcS7ot9AFwhhi53WiS2djRTuRvH4rxW3qekt",
  "key10": "4H5bD6DsWYowN44R9C1FmyiZkmGpk4LhdRWcqAD7Xr8Ef1AuEgnt1oTm3CrMJjWQ2JZxJ5Mo13arXornqHUt9qSs",
  "key11": "5swTJTw6CKzbMxEds7kdbdrG37k8N5WxUVnzMqqgu2xpY6zFv6xWKcxExWRwEGPWoV5oyACmHSVh4gc36nwTVdER",
  "key12": "EWRCMxtesrn7pgqsYhHCZzSNML8L6FdxL6whTUPfeRb3pHET5a4MVHvmvAa6Dk1XK7D8CdgD21vGdykSu7MbNYb",
  "key13": "3hyP4drVcBWtpDYB1a6m9sqYRaYVakGKaA5mRTgmjsTVfRotLNEaT3PrpRfHTq68z32LE5Vt3fvz75HR2E9hd2z9",
  "key14": "2oyxXECywiFP75x2qmGjLTM9R1fQmrKgfbFDwVyoTjLeA757vCiKb6eY2f1pUxzAHT8g34rmUgvtkLdg7SnF8CQZ",
  "key15": "4nXZbWEzkaRsDHHjDSqnNwDp5oyLnwzzjmeYWXyTqQ2s1S17vNVdtTkaf1hjNwXj19byonMPEWP9Put2tVFdz6gE",
  "key16": "p7pWocgwu9P89tgpLe3BMu1byzccRHtCZmBi5uncwwf8wME9r7a2fy4FZTWozQ2mTEFaompEjcrbUH8hQSCSZeS",
  "key17": "2hxV9TX96zXmtKpLZ9HTny2YPrDoxVx7MXgYVLCchhEvwiNe5rJoEuMpjkHpCnkZftDhRfPXq8NWpFi65drt72gF",
  "key18": "5mA4Q7DTbd9VFuWb53TBxSte48pTUfyDeDUT13css4QMMWrn1M4EbAXmG3WwZJv5pSYM9yfEMH8Pcrx3G6eiGmpH",
  "key19": "4EaARxfR6ScjcJuHHJsgZ5AZdT6PFpQvQZX1draf8RcXRzZHNdkjyxcH23AoSRZHRbez5xvcW8razFYJaiFT2d35",
  "key20": "tLDaRB8PoRT5oDnhnx3hvWWihc2U4sbM4bU3eaaR1DvGtCnQrbsTKuf6Rm7YtpL1CvjPpCJn5dyMeojmiowNGRY",
  "key21": "41x21Bp96e99HJGsDJVAqZCrkLXjqoZUhwBVJmBbMkGLJi1gZidv7NNd8rhgv6iSP1v7hvADDZfG43oNHW6wNRhS",
  "key22": "Pj9DBV93j4WrFsq5Qsyg19zDrjEP3uVakEesFRL4Z9XAgfjYE47Fz4cE4FW8tXmtiM5h1kCxju7cWV3NVeK8Rsg",
  "key23": "3zjn1JGwGE9grjDLwGFAXzgMWcepbhqQcjgVYZbb8M1isE57J2cwABxVdEUoex5VoDiQ1RXsdvj5o8e6Be1eaNWV",
  "key24": "3mrNBMQFRWQ81VaS7Sdwqfj1fgBnY9M8AM7EXzSrn6huN1s73VZNtkpV1jVTfCqVcWbXRvKzsaP57goPmrBcLWv",
  "key25": "ensEe6kMVyEarbfFiSRcs4zXg1u9q7sKGmD9ZQaZigCwvnTdgMeVYZTP1qCx2Kv89uUw8LhtGcLaN5bLVSYnodP",
  "key26": "5t9V2rKMjA6dRoj5Nrn9HvwSqswLsbT8VSzos6HkNtVUL9pbsQzn2eoowNdYqCB6hreqhCidvUf97b6KkyHvPBo",
  "key27": "5Bukhe8VN6113RHKsSZUutitC8CAEEmNs1sFi6G4MCcpPmLuTTpqztZkU8FsyEamMywEj13aokFdYEvj3JYMAaf7",
  "key28": "4a5AULf2kn6svqVuhkwRHvzz24cN7UDz9CC9scqyvT43zg8eUmbVHX3HFRDvPXLs5D1hGgHab6zfEQGgbSckQfyv",
  "key29": "4qsHjhVF8na8HkJcJGhuZce1SAcYw5tZUeUWbMb6heK1WDaFu4JscENcQJxN6zMP2pnfz86S1t9Z6bMrN1Aw6hHh",
  "key30": "3RL6nWe61ouCgMKKd4qy69TTYEsTAn6qLfi5s6ptVTnMHZhRJaMZAui7rWsncQdFM3NqsuNdEdpgBRFMarTnJgd7",
  "key31": "57w2tTsZ3JgxAwZtjWbLVaYxW7otHYFYhpkoLPk7Sp9EekeeGWy1ohGenFeotTwXTGFkErfSMmA7FLbm6EqoNnvH",
  "key32": "2srQz4EppjAHDqrnq6ubL7gRdKLfPGCmRHsLT6xat5Bz1V4siVqTmMZH8tSGhNN7GSD3imJvx4cSVcV9oDd5NKUh",
  "key33": "2gULL7TQchd1Wwm2StcKLWTwdmQy3kkfFKjaHpjA1PzfRcp2p6CEqaWB2DSNhS7Ug5PE3CBFsVQscHDXNoiuKJqL",
  "key34": "2XfNHvtjcMsWKKbTwcuAnJfmJoF6wBFRB4bJyeDUnf93g68uZssvDVZmf94xB38Z1QA4iDBa1MWaei4ybsUGnWLo",
  "key35": "2ieinmac3yckKe79sGjRjdbXxuAQ9iKZKP9k9816mMXUuSYYx5ccSBmCcA6Epfvxps3WSCkmCpeSbHGxkyHzNjku",
  "key36": "3JoXpYBEs69rEtniC3SsXHshazK8HCbJiXUhop7WB3wotK7obBP1sG4c6FJarhZc2adEQyjhAKMqq6i5oVFBcnXU",
  "key37": "5dpvEGVtKTQmozXckqHP84BW93XJ1hiUM3bHWBBhLRU6cWFiu92snsEdCpkRXXTFLCMk4TSYo1q9Zy6ADBUeyvFW",
  "key38": "3eb1CBRpfyqXEhDaAAYSCyGfUDLrAPAR6NHWhgmRkMbVtMSmPopuKSmV97occkmAr83pJRnviKH5D3jjHRCTDVx5",
  "key39": "4SvjEXVFxhXLuzzFeNFysfjceTEnK19a3683sEVgFMpVy8moe1MNbaxwR2cLDJFk64h2A7MupzUm15dBVHwnjCaT",
  "key40": "3vuQ2rMc4ABA1tut9JX95bkfkkqnLL9ebppGfnBR5XnguHCRsvV4ESvkXD8dNHCiU8V99zgfmpn9JspxTVr3HJbT",
  "key41": "QvMyf5Td4pBbbEwQqbPTVpxsN5SNtEs6Y896Gf5njHJJsSfwzVhj8RtN7H1qWsuikS9xbp1CvjHAu2rCcmD9bL8",
  "key42": "DBUaQpPyyCD29PSBgKgC3fkSGGtgSC24DjY9oNMLjSCrqUcgCdJnwJsVB78KxXKN3FZPvKnBGC72faRwwbzWF8q",
  "key43": "4Wwz3Hvt7WgvvXK9GgE4gabmvaV3qVoGA31e8o7FtTxxzzJSv5RRPapCKKJaFXprcSVUQqNi8esPsvZKhqrJog9m",
  "key44": "5fD22Dm3eH46bvRyCGQJQXyuZrLNaP2oPm6EbiZNVDMrSrrYErQigWM5wGBgtNhT5n1UdGZWCZadxkLpa7YKHdFL"
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
