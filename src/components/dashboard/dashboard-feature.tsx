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
    "3ASexJSoyjPQHSvf6gZ1TGPzzEAM5g8FRaVKkPEfPciiTVHeQfb7Wa2QC2WGvLmMmDeBqAEBmupRMkTQydiYeS9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mdN18BeuBF3CSrc89z18dnAzvoMBB5ZXHhEg42F3qtjjj2mMye2sXVgb3ycHrU8aqYFAS9TBKn5Hi8kMQTW3Uig",
  "key1": "4QZNKQNWx8h7rwxjNP6LMQBAshBSYpX5ZHxfix1tbMrZBNL18UHQExtgE6DQfN4G2ih3RfKA76P4QBhvUPgyBUGM",
  "key2": "2yw7AsVY86ggzJSbz4cD9rgrWCxXeGK3KVjdhpP91HFMVVx88v1u11WSENM1CqNEc5VFmxCVYPe7ydhBZuukLzAG",
  "key3": "4Gya94VtHqh82kBxyNbstY7iNBYvko2imGjEEvRsxxnguopgiNwxDtNtTuWRWzzJTJAaQJan7x6ShjomrAd7tLpB",
  "key4": "5HnkesDhcyokEMesUxH4Vytm1iEeviZrsbNKi6Fp9tomjaVYKJXTPdqCPj25KqFKGcXAuKzBRmh53mGe6HVWekkj",
  "key5": "2BwfbUF4z5qYNpqkgn4faPDkUQSKenmfdwQkbbtz11dsDwRjV65AT6HC4LhmQGrdq7R9kuG4jD8ru3kXCvcPKtkP",
  "key6": "5bhMAqrhY6Htk5sTjbngzSSW6sv9eMrj4k96QA9UxfwQuaK4ZkMehUaGNsbbx2gp557WN5yZhtwYeJh9mxN4cRVg",
  "key7": "4W5KxkGDR8F9vR1nsRZrAJFSgD6R7D8yQFLPNLnPj2eKp6soQwnNRiBz6nGaeABhXKkEUbDAL5eMUQ4MCzvJVhn2",
  "key8": "61rPk1nkrE692bxD6T4yUFBJbdh2pQUEp6XwZFKG4nL9d7k2fgUp8rFm2sxTfYWcTsD8pj6ogdZo4zn3RejTem5w",
  "key9": "3rwVWfAuozTnNgizhtR2g3TjgGhnwPgSSvff1nhtMYgDPYsqFzfsWcNG2ygPU7G3TeaYc7EmsKr7c5BDkGWcmydb",
  "key10": "2vitedC2UHZ52RH3qxSKm1LG5dcDX16GP3w8oqiMqqeG4sohZhxUzGufxPoDHq3je3UXoSSGvuzSmGNQKHD4Q6A1",
  "key11": "28HLhfiiYQ1PKCaC2zQB5XWcR6y2SEjYWEnkoFWMELueKVb3gKouczn5jYaunEuMMvacVtuBN6MDfks7m4guNP2X",
  "key12": "5evPfhvjPJJKjsDpRMqHi6SU2sTb8QsNRsmAskteRdcCjEFfFcgTWNPUVPybBXtUG7CFNKs28WNqVMVCoU5WxnR2",
  "key13": "2gT2oyRvPrfs1NvMVMtrQeRn4tSaa7q6TimzYdMbBVA364Km3yPHjRMzfrrYHpiiAiBWw3zV6V6ttPgwvCeVNetz",
  "key14": "5PvApbDscew1JUtqaibv9ZAYkowtahtPQyktt4uYPMjjWnK8LGZfcgD5bKX9f9xuPBfDmFCTjPPr8p3bintZ7yy4",
  "key15": "4ngJfazXycoXozCsj5AaXak7zJLpzoSAQZGD9oVBBQ9x8eXoepRDeLuU8mnMKyYPG2NXnuTV3Xvec35J9d8xSfdf",
  "key16": "4ndkxpcdNVbNAN3ePDcXKx28wDCL7vu5Bvj7YWKGGvqeLW24TDMRhLJcLC8k9juZ87DqWJRaSJDqDNwLtHnvW1AS",
  "key17": "22sLroc4YKXP3AdtyLh5N1FJUdU3VtkTvYpGvqCPhqcbnWaKUz7fjSmEWvGKFztXAeiysK5Z5keUnVHNFo4VxHe2",
  "key18": "4rWPWBR7njtc7sESmY8KTLbgc2tit5TSGtcvWJ4hK4vT5bumiJBKmX2QWXLPwuw8xzsPH2sruot95vKkwgfsyZSB",
  "key19": "4nauE7AbD2KtSRhPZiHYuwtmrA6gfRxf5MaEMs4ocETxrnemm1CHN1C31jsdad5X7UVPkjp397G8pxLa2UQrE9St",
  "key20": "5bPknSQejWsthrwxVitU8i98zNR2K7FkvF8f89APjrK8Z7vr4yPMujfj2wYkSHa1yFX23L7NRRyN7zqNYrcHRG4x",
  "key21": "3vT2orxZCRmPhvJJy83d7ETGfYE2N5H8caFmg2EUoVcDaEWqQZv4qKNHJDn3wUUxMJr6C5kYi8yEGpKog4yHvY2G",
  "key22": "qLW9moUHiutbU6QSDDwFERR7bpvAakz178wScaxug8zR8JdRmLbMwnPbw6dr3u99q8aCVAbnDwQAuRYSrNT6MUh",
  "key23": "29ACPkA1jnM4W9ugn2Reos1V6w62U4Sjq7dAMZREBPU1d1MnjhyzhgHAF1wB9JEMz11kd7cv6egnTybB7Qf9kfTr",
  "key24": "4sVFpchmv7beZ5F8fWGsGh6nSyLRx2QecV9HNHfBHEQzhQr7Uf8aRhpR4fxWwc5bmda1j9KS1AqfEgeo7iAVTp1Q",
  "key25": "2wLvqoiASjPK6Tbv1mjvjiEqYgxe2zLxC5VqkqfnvBQDs2bjkTnNxa7qcMLTVoZXPgN5K437x3wQ6fph5BdvQhdn",
  "key26": "4UtL33xKvk4hpQgaui9Y5ZKJiLpJ77RAGbAqmvuyY2fJWynM74Y3DTgAXRZm6Xrd2PPSwvSsdHBZV5K5ShNqxmPg",
  "key27": "55yvZ4wHQpTCJqGFnNg4UdmoSxgt9FkwknsC3SCrCTvQ3eifVnvDTwn9AfH8t6gZzjQQs6Bp4FVQ8iek5cqz6NsW",
  "key28": "4QqrSrDKiqo5mzf4HjacP1466JejtHJJ8doKq6X4Z9Vij5fZidctnZna3wDAHe2TZJVbd1yGagyapn8np4KR1r3r",
  "key29": "3EMZ5QikL3VueHVSdAamHstDevNiNciMtpbYjwSBnb557A18iHoDZotFNF9S5kCs39EMBCWziCgZMSykButEsfKa",
  "key30": "3QqtqLMVsHGGNcuURvTuiMDu6XjBBgAXUUw4QWN4fqatF1wvpPHbpu8jQC12W8UqRHXUmu3WGcFpWktxF2XVuexq",
  "key31": "2SAxSfJDYtAFqiTVMKFPX3aLD1iBYZ6bErPEb43x3FDrkaECCaDHG8tHHeYQt1Bn7d3Hr1L3WfZp6W6h496Fag2U",
  "key32": "47zew7PKFMfkG2cwarRcdws1KXHVgAhLhMys5Ag7KxFeabe1Xrrq3mRywZuj7RvwXudqJuGYgEKawXUR69TdZkAV",
  "key33": "AwBPs1ZgF553n2KeDKxux7FtrjVhtRnMUXNuYjgvSh4bfvENjFTztKLieiEKFvyXSQjcYmiSkFnpKbeeP25p4xj"
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
