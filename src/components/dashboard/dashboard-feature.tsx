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
    "57P6cUBuFgvX5Qet859zoAtDhji2tQ93fgoxAGV4sagRnkqZ8XETK5QXJcArxgMZQui6BEohZkhRPxS9CpMwTVM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ytyjWVq5EcdmKBsEfzXugrgZ9dTdXjbUWYrfRjrBAAeaok7qCAsejBRFFDAsaRxZbw3Na5wvdy2e5sCn69Nt3xj",
  "key1": "5MPKUsEVjVxVkfAjx5L3eivj31p9DDh9Hzir82BVX1EVVSVxK5n59dP7u1pKU2G5Lg2SqsCpA2Sg6BQcsKyChNBi",
  "key2": "gCUV8dfW7qkxgSakSU6CwK3G9jyrJ7ohC3KT69WHvqPTx7RAwNSMFQGmHoRHpe5umVA8gAGuwetQ1JzHdDPqwoa",
  "key3": "5FbAJpinmPve7TdwFGnVCGPLXm51MSWZNevnmJBrH8hSHuUFuSJSHadsvd7C1zShNbb3B7o6V9QKbtp4tA3GBbXY",
  "key4": "2Kt39qvCJdvey5Fq8Ppci97btPw64ugpYvPuqMQj551WYCz9zjbQUq8hCSXr9PJChWJz2mbV2tZmRmqiLNwhXk6f",
  "key5": "2b8XBfVuLLp4UPLUGpPy7VH73bMrx4CBe8a6HWPWrMDNGhXsb2KPKzKoLCvuw4PaGNKMMxMPCqTx4cNe8enHSk2X",
  "key6": "4g8RqM6N96Yy9FjVFawesddBNH7ZmsL5JqkhHjdq7kEnbBwEdFomchz7E3o2D1ot7vfZvwiEozWmMKkiYCJGEENY",
  "key7": "5nqmVLPW4gV5JvLVPzNo2cJv1Aw8fZSYvAhcyegJtyGh2KhtTfDcjrCQACvY8MiUUg5NyAwwZmMxmX6oURszYrpk",
  "key8": "4VVR9YUtyFnvnzKtHhTg4ZmHz2VH9MekWVi3XBXWhQurbCNpd1rHDLzvoh2aohuBJcfQSYBNguAFZkVUZmgo3SaV",
  "key9": "47VWV7hHeieUABxm2qxweF9miBbnH46UsZjWn1bnw9g7tXyVHbkqyH2tu8BQP8dYpQMG44SUJ3svQm7UExAiC1uH",
  "key10": "3DksinUeWiEFYnq8zs5ogYN9qkvBuq1Uu4XooAgd8ztLUPffvQ4dZ27FunxhZZ5QhqNjw5dXwFdTHkeGyM3vJLzR",
  "key11": "4tapShgGASN7yoECWpHZ34s2qTDTGx4Yq7UX5uqLMdapKVYHhEQrEmfre97MNt4eHiE4BYmUGTS234JG2UhX4VAJ",
  "key12": "HFXGL1MsdrTbQukQa4zvN7MSb916EmXw4WAZgizzc1sJ3YpQWkmtCaxv4KeHA4kBgq7VmvXXKyr5RtUq5iRd6rb",
  "key13": "2cYdiKCSpPbKrxtUHycocVSGndHyhEwynmywYWH1TVUYAUcrnwrvjg235A4599G8LaynLr8JcLWWsP2YrL5AaBwu",
  "key14": "XxHeDokVV4WZt6vgkF9F2i16VfD3941Eqj7Xo3XbTEc8DKVKAxPB7zELcPvUda7uH7ufW1rVZZUaCcUGVwWrejc",
  "key15": "32H89A2K3J1jMnUoScX8KQTrPHtUuDVsZ7owbwgAjPWJdEdfhpXtA8xTD4cPDSntXPgBTEoC7NRtTcbBvG7n17fh",
  "key16": "4uewDSrjRW7pvp2etX5PrmCKmeJo5rLT1Fhj2i5jDXqazgnB5Da5mPy2UhfG7q23dEXfVbcHs66YqC1q6oMW8y1S",
  "key17": "vMYQEoZV4CypnPdma9tUKsKCbNbRBpVNrkwZqD7o8p71eW15Dyv88ZW1qasLNYYN6fhKAojKc5iQMFxxPfffc8N",
  "key18": "5g68fqHv38asdFhev1gN46obnoEkud3sjRgLHknc2tSoMVRSoMzcCGhWEJ4mhkVoRsWi7H5uN1QrmY3RB29Z85h5",
  "key19": "3NyTzA3gTsPKL2YL3VHxYoCKuHkQ8k8v8t7iYPoWvqRooC57kHKpS5WpLsaxgWzk8c4eX8CGD3H5iX1bQ5His6fM",
  "key20": "3JYhsL2krcVvKJDaSvhkYuUYxu4dUHMYwG1QLzgUBh9xDZNFzEta1B5r9vmdu3dsyHHT3CULW4GvGTBc57CbyWSL",
  "key21": "2zGexpz6Rjq55DGWRCS5T6ANkDigP2Fd1VPsgjZwzdvdrhdTQhHKUEXmVLiJv1PScgBCXTh4LtCacXW86CYa8qf5",
  "key22": "4F9LCPCnKqWdxRSmhALdLA1TZnyjdwCwe7wSfs3jRM4o8f4P2ZkQTujSWYa4NbNA6DyQC81pXzswdixHFyG6Wh4s",
  "key23": "2jGS1FjZcQkVJddsgjMwnyadsgS1uR5U8cmMHK4Na5hwoh4Vd88FZSs33MjraH4BgtHHVkc2pFzZrE1USREnBuYt",
  "key24": "4c8D9khB4oAFBUDTW9KrJPJyXUhnefRdWZeMz688YMwCJQNmHbXDgvbazA2DXh42Qkp8F9jP9tpnAyKA2puWyghM",
  "key25": "4o6vu5hM8bGMWWFe3gPrdz1TRvJ1VXy4H76kxYKTyFCM6rtMsChjjGzeAwa3kZFixsfapc7j36Lrpg6P3rvPCJ7L",
  "key26": "29yEra4B8uS1pM4Vi6NqycMQxygR9jAMcvHvjQuSXsfFXPUiu6hbMafy3guhTM1oWVJ9A8SpWFDpxZmzqcq8Bvm9",
  "key27": "3KK4i2udDGoiQL49K5pSMJmQDuZ9UAiszsUoRE28gqDgi2BkPJDKkFDbess1ZgDdpfev8FGLK2vCwfyaZfh3wbWV",
  "key28": "5ox1wqGFAAtuYkTh4kWK78S3uRqFUvqXFycY5cWKNvdJQUvUZPA1YeR9cXqFFF5NjLTSdf84yUTRwQGhNXe5XSts",
  "key29": "67rF5an8RKo18ZTsJU5LBU3SeQT8mFKPGFzSL5tbjhwZJvwniZZaEc58AStAUJa9SPGiHJH2sgvjFyx6FaAwr6Tc",
  "key30": "g571KVXrmbpx6DbMjX6v7XokUTyGHZntmfkyYPxgRDXGTm1ztZFjYSDuX6mv9mY7wHaGEDaA9pXtr3BH2ESJrPK",
  "key31": "5sqQkAKBNVHamG8km8rrhh4kt46tEjD1CxY3KLRcinSP814RtvaU9mF3kGPjaLoaMxGWjBrvgDjBoAEFnCkJgA4k",
  "key32": "JAYKTjiFYx8duwezjJtzneN4nhCGgRQNu6BttgFbJumgjYBebZasmgPqHGZ4Y9xHSZTd9zcVSbMCo8A4cScHhoC",
  "key33": "3oic7QJmnudC5cHtxganN7W7NoSrBovk6PBYqMFj52qa6fGtU51HSQEKvQUjbwKGoidCCoVyoHPWYkncqHW71Kmq",
  "key34": "mqbUpRu4JuhcKUyrPjHGH5pQHchKeM11CHpcNTCywT5aDcPtKdRQMehmAEmbA4kYHuQZU2veZaUucbM4HnHzVBC",
  "key35": "3V1EsyNEynXGrwaBzCXKiuAwYE6w6ytCdSEG8BU8P8eb5ggUrQBiqkUa1SJ51jGNJb6Bhs7TYAecptbYN6KW93b2",
  "key36": "4ngzaGHuTys88Hx8uU4EaeJHYFEC4ULhqN4cE5J4N1CKQUfpPtFhQufarJMiTpkMAaYcMvJGimtrttJ8wTPQcdUX",
  "key37": "33cYwVedttuCMp98y7AjDo4qif1qwwp7pvR1u5zKjafpGi1Dbf3VbM5oxJpN9aXNvxy4xN2bRYuwExu2fZ6ymxbR",
  "key38": "3SWGZYFbQzZSzDVgUtWWi1UVoJoJAaXy1QFzKDon667XfgUBtCDzbXYj8AJQWGZe2Wq8wcD3cBaMs2mUsrTeUQqX",
  "key39": "5C3qfsQhVMGVkQ3pzV1GTgtCZshv6Ppm1CWAqmCzjB3BP1dpgfNvfedCRmRcVyRVUVviEGpqMKTCFWAXweE93iWp",
  "key40": "2xEb2E64YfK5RwLDFqN686VkGErjLhbFjFvWLR72ChC6NTwKZeif5ZFsdYjP5ikShmN9vJyo9M27SXkaaVeykppM",
  "key41": "63Jgew9NLpgNkeBjSMGtobP25ZbS7dXzhHD5qdt1YVXihBNnZxwPXejVpaBveJdezPwUPV44DLCRP5n6xsqToXvo",
  "key42": "2NRDti7Qgqpi1FYjWuyVahaFPhUmMNwC2FmHgdcBCiFJVT4Tm42Wi8dCthmzfappRd4Me8TBjEqVsncoeaUmpQjU",
  "key43": "441rctQCJtU3UrqaRC7tJcDbtdj4eAQGndH9XNtxoSQ31rrAoTtCj3L7z4CfLKtSFdx9SukNK8VSSHYgjvFpnZay"
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
