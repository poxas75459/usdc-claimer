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
    "51Rh2eymSej59tZ9cds3ZmasNmuE6Aythxhunvh3jNv5FvmptXgY9mfNJzndLbpy1c2sTScc5N6Au7ge8qW4jgkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eHQtVbioZxVSNSGehhNGCKtgiA785gb4zsX1kJHFCBinxiorPLWgwQSnNjZyzUY5BnBrrPbozqwCBqVy25kXH8L",
  "key1": "2sqzkcjXJSPLZ2emH8om1WQiGu7aHa8A1mBafGGnw65UV7tCBvGW3bVMtUgcscwLRyqNDfzYBXjZ19dCTYWz2HnA",
  "key2": "2FHh7eCps4ZMSH4Nhvingij8GCvjUMHFGbV676a2ZkugZ8RZRUvFTqKuyuCvpsoy64iEab1Tg1yrgUvWTFEwFK8U",
  "key3": "4JiEFvSdwzqr5VzMsizVrQtjRxY6KPkKJUgxoFoHxW3GKQvhw3PPWpv9yrMBEme4deSxEbRTXnb8Ds1BaP94Z7oK",
  "key4": "4vBqBXujpX9AfpeNJhXmvCLEsMRdVkRsEM4KpvRNjdMViMnWNZxx2Rucp3JViiyk3y3gMd83SvLNjNz2tZbajQmq",
  "key5": "5mVZ4JGrUUP5h6ijTwgyRCgLk7AWPphW3YeqyiuDNa3cM1NmGsKJVNL6fGaxut2BhGTpd6RwZSumsjtcdvrW2a5E",
  "key6": "41kqpJh45ds62KwruZfemPXujhbD18bBDbfvg2rC6CEvYJwN7CxrCM2KaniXqW5YyDKn6RdTZ7Wu2sXD7QJVvA7j",
  "key7": "5vvjxiZx8qUjy3TxgfNeHjxy8kZ2KpkrHWZhZPAEhcqG2RjnWJBScPMLU8ohbdWEtXggZonrmqq95B6Wp7AmRnJN",
  "key8": "2pDhk8f6KjWtd84Ev3hk5u4jcNHfwTvNWQ5ZtKFX1dGHrfzbu8KpQadMEEdePiQ8Nv61a6gmxiqV9A4Wx1UXmQmH",
  "key9": "5LyU8C3piEvggK3edvDf9qLYuFeRGggLRXdTMjBJ1FL8i3UhHtATYNaaYYG76N5PWsYhwa3mdpnuKEPoYS5V4uLJ",
  "key10": "5kJajQbQpTJJgr8GXPi2LF2RmhvEgwezjq4j9bkrNUWxiS7LZWAqWFYXTdksF7wiv5FGuyns5yk5tajYiCvcoRXb",
  "key11": "47eXiDoJAc6e5qW2bwQJ6ppGzhpwb3sSvxNWQBg827naZ28PfNdR74qNX1cYtHCeVfHimEZDBxd7ZEax9JLZFjuY",
  "key12": "5kCUYGWHYKqqMpANM7aLHKEomdsKhgogfjew41n6nanmoRntnu7dBdwH4NvfmysW9N5M5KVYmBzp96FT3sDECYUn",
  "key13": "66J2mrbUsQSJ8uyrTx8iEFK9EB5g3tJBtrj6a9d7GFC9xKrDFB29wNQ7EvfN9URdUrmeMQKaW3HEAufFSrQwuez5",
  "key14": "xPp8rdfnSf991QhpP4dZ1TbzmWDznYxTMWxPQ4c7yBiNQaY3giezzp2fdw8brc4trsZeLeBD1ay3vsUm1XUi3JG",
  "key15": "ujBkqUWk2XWb4XqERTu4aKtnDc5TMMkq9LfDfd6d1ckPys4rCigZf5NMYVG2i7v6Z5nFnNbvCxLUJQwUt6J3oAa",
  "key16": "59kMS7YpBoVeESrvDhV7gYV1biBomx5mEn2xnjdyMi1F6yUrvyHsEk8jpTvH5EFAbhkVAjc9M8GZr43aDJoc2dgi",
  "key17": "4ifGbrx2nyCVFofbsZrEWv5DUz2T17X5fEED29F2VkgnSKGmSD3otMciSxjPX7t5Q94qsWssrAvcQ2DV1kDQfDhR",
  "key18": "3BjnT4gfXGZ3xHUP7fAbSTzNaM4npqwyPGgBvsf6MKPymoUUz5UrToXUmrHQiSDRL6NmsPB1NC1LBVAe1B2FoQHu",
  "key19": "5LafoXjryufLx8N16dZ1QqXAjb8SKj91MGLKqiq5xdX2XXYYfMbwK33DsVs88YYjLtc7igTcK5ZsEfY1oepjsZyf",
  "key20": "5fXLZ9VCBWy9JtUivUjAUHzux9CLKFkz37QnHc7fgWvSTgccLhNqLjVwcxdnzKpeBwhRYipit6awsxnLz4NzB2W5",
  "key21": "3HxcgPWAbVe462XT4jggPATPkZhvvK4RFnRx66CTCdkdREt7fCwoAK6DgdFyFRTxGTf9D6mHz45kw7pECNZPDf7h",
  "key22": "5oXVULG41PUPxzPfTRiem1uAV7oWXj1qj8ynWPpTvYeH6kFmmpnfFHehyvKLQziRktn6MQ43sNbjdeHttH5YK5N2",
  "key23": "5h28szBJc8ccUfDgDah5y7nTG9gTF8bWsMtSVSFEesfS4cVLFtZAaeCDeor2xEe6CeT3VtuenAYLEkVio5Vk2rSZ",
  "key24": "2t6PBS4CtwHXYxkUkGCT5D4pkvQkny7MN8XdCgVA3MrdNftape62rfXuL2VTcERbYV7BXfxUWbZJQRLfNdbSoXJ2",
  "key25": "4xzu6hErM8FofDseDPZg5Yj4RtDuhu2ArqitWa8a3vfZXE3Ppmru5ebRXj9BfujfkwEMRu8HWUXtpSj9FaM8VV46",
  "key26": "3nKMJvKe1VHHZXsWD3Gi2bWX44JxD1BQChGuTKX6nyMgFm6mWZtcDTGqigHwHkBhdiNcuoWvhT6Zo5uisWeQxdq8",
  "key27": "4pvCPVxBkotz5aPGCymtMShGujF31Fc9NfCutHzvYtCxrge4LzeevUQXFasdAdHaEK3DoorqH4CRB4AXmcS49PF4",
  "key28": "kFzg9chLoqooUiW5ccUKBWK6PdBtHpWM1cPzGYbj7mTGBLZAjXTznK8ws825SUcg7Doh3JvwfScxyLTmgVTUTje",
  "key29": "27dq4b2Yw74muHfW2PKicSRccnRZxRiKVv9TzUeEkEH55SVN6DcpV2N1J4bwMeVJvdm4V242a5prY41EXKUuczLt",
  "key30": "3W9YDk9bS9qTbiRTNmJLDbtF41dwcEnu5hRtUqxJ8MKxjcC1AmiBr1p6o2k9yYYVw8s22vtFsZdpJYpAnWSEeRHq",
  "key31": "c3JepGoadUsvyeXwDNewWm91ieGS8JaXeBhu2mZFSRaBrYN55vQvo2chfYmYJ511LjSGytgQsizvRj3bpfwYomF",
  "key32": "4Rze2w3MsHwy49k9Ts3NX27PxNPzFfotztSmG2myrdeSrgEsHXttzmN2tXMRztNe3xtXVZeuLE6ASbRoHGDs49C4",
  "key33": "21PVzEYfZTZNGZjPCbdsdjxrMtKF3aodU3p5t2zynVg3JetZCuRs1wCykmNBao5LDpTpbV7o9Soq9iTqqiPYmvZz",
  "key34": "27P8PXigpkHSjUH8R4VgWGxQK8vXYAwvkTaBcPVWJiqQ1mEEskgyPCzoFQ9yphxC6aPhktVgZLP3FKCpfikv1yAG",
  "key35": "5hLiLzPd8K8WGqg9XRwTjLRmb4ekdDjuDJxpMGzMyBEMLfyPf7U9V1TXSwPNFS9qFbkWekJDxJANFLu2sNTM3Zqz",
  "key36": "2NvDyNUDxNsM29wfFLuk53Rw3JXe88FY7DfED7skcPWPFu9eSjdasq3BmBEcG2WSTxfjXheGiS1gJuqj5jvNWkvJ",
  "key37": "nbmEAL5pH25jpGQxTMmA9LKxeAxaVVjBY7DiNLtVtPC9vj3EhoCGBeUN2r1P7VELDotbJRE4PoPBC2ERrQ3QSB8",
  "key38": "3vXHUdo9Y4Q78uyv6g5EBxhWEmmLu7DG4VfHGmEVFNFuo8jPDz8G5usRsmC2RurPFtTAzNcB54fyoKY7ndxq3FLU",
  "key39": "PmJiY2FAUcdad3Gky44sQ5CiisVVptRRQU28QMgqTehHxh3LEDVU2duT2UWqR8MhRYFfssWpcbpVYTUUUaNewoL",
  "key40": "3h64e2PxWgSQYs1FvBSQQ4gKeyUHw2H19wWGbfD11b8fEXT8FMiP8AQ1393gFpUsd4N48WcBuGBwAqWiApYEjnPu",
  "key41": "5J6iFZwn9N9xY7KAQuAXdNwuWS7BWwDZpdYwasGR7LfY2HKoVQqBSYKXKghr4DjTUfRnNn4YHvJiQRLeQkmoeemw",
  "key42": "4opQwJafpwPHswftewBsokJaoBMzzffm6dJWrTc7RMEccrsb9fsKh4zaj2wiHgGieEdYpXENJAY5bx3FXZ53ELHQ"
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
