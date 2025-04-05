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
    "3bnG57vPWegt1DZYdhZMTWa6wYS6g2dJwFfnm78wpWPDycoYzUUFtndwF5ATv5GRJVmGoeeKgMkwC5GDErVCX11W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GRCecr8cbE6yqopAjsuq95h1EmXoDUbwWJYVvKYwnPqAKXEE48kUvUFkySvVyJZpBdsYFve2yNB2g9hHJiX57Js",
  "key1": "5S8bqr74YxHezDrDAjYza7JXdktZ1PxGFonFKFvKtRQp7R4U8g8XwV3icm4TAHKS1vLuGyKWQTBDgrTqEFp4N5q3",
  "key2": "44K3tiffv8aa9oPfUWDvA48CfqrezWPV1nnDfPPomitbR8uCYHzuzS3DtZmoSQcVJRjVmWf8smELGd8fL3xcoyh2",
  "key3": "2qAP6tVHeqVFzHejSahMMERDLmTNdikvJXBJXm5qWXcKoZ5DdTGw67gHJEK98FQgntKfVqRZVrWnqDm6R17dU3kj",
  "key4": "24i2YNgUrXxUEnbKPK1G7EN3PN8M5S4xJD8mSoC1k1gw34jMmUJ4erwpRdNXEcJDSaqUS3hoUzsabUjbPrXqR9fj",
  "key5": "5U4XufnryEZjD1vVDyzDYa1zx2aoCpPK4xfi6eutXdn4Zv6feMkXrLiJdJ6JKuvYXe6stX3RdmGW3cXaEeMuY8gh",
  "key6": "63Z22XMKLTxCQFvUvnMkQtLgH91mjLQ6Lf5fJ2TtZNqfraGeHAGT7ctr43dgKXXtxdNMJxTAsj2EpK3xEu9w1kko",
  "key7": "JF928kGr2wMGh5YqDA5egY6vssEsLZQkgJsx9rg21dYY92fjPbHHmgQ5To5czgUTuuiuy93SsGinX3iNKZiNHCh",
  "key8": "oi2edvMuP7N8toZrua41Rm18P2Hd4jvXSjqFkFfZdfVbMrCtwkr2dyxUsLn6U1UoYKBqeM6oQikP26ExkbDsqgq",
  "key9": "8N6mY11SQtc8HZJM84UKd4fDS2qzVoxR4TfSq95d8MF4KBQW2yQV3Mb1qkbqPoRk4MZaXCRwGg528bgoDFbRJDQ",
  "key10": "2WztMUYEAM5H5Jxo21eLq5aqU5JDboFSBSnquJEBVKHLemp1ikbXZXdEbqfHTyT27JiExjmZkYVgUg14DQm3K7RN",
  "key11": "45xHsnQvXN31TGuaD3NKHRehPJnMYzN3gXEUbDpQb1iouAoMAmz4Nu7AEbxBgQePah4z6Dn6iGVRy97KnNwTqLaC",
  "key12": "5GBWJtU1ATfByQ667AiRaMo4fcfVMneoaa4HEBYJH1PToWtuprukFEd8nayYZ6EtiMxA55VXR4yizhaCVHS2AF2F",
  "key13": "2zUQxksoNxUF9TKbHiuP9dGfwqoMK37TKzSfmuhock9bon47nBcaxwNL7XahSQhyT6R3TJ8hN6bJJCGiR5JTC6rf",
  "key14": "4Fmrbjf2hRJnK6dThWZzo3aK9PAp7TdnonHS7q7wsubZKGytMVkPCPyhEdnRuJ1tNJ3coP5rRcpTFiEw8iHsVbdr",
  "key15": "2fQFLFboTo5AwSgGVwy1Zjtx4bjeQNptwEqzH5ZwGp6ykJtgSBpkHb2wfV5cSsfcD8yE7VhV2Y4zwc2dyZcEV2qB",
  "key16": "wAPWDVesT7nNYUVvEnztyU5JceepP3dMQ1YWhmWndfFptAeHkaEB7Gk1v8EraiGYFfqouXKQCynV9rAeXQ61KQj",
  "key17": "3ESX3ZWy2UReuY5EH4N6kbaMjzo85JdVKsdn17KMzLzDvGUbP4x3dSTe5QQ89aTFiXLtZydREygwxez2fjuaK3wr",
  "key18": "5NrduBt1TbGuXUuyMkQBSRJSeW8CvNz29Npbhj67Rx6SPmse9WyXPt6TaBfhpvuxwZdmDM3xqhGM8fx3it5fd87R",
  "key19": "ZTCpqJPyU6QrfCLKdNYJAZUm8QPVoQCb8HPJ4EP5aCjx5v26hAa4ujFV4e6sQDGXgv4RRjuc9DXVgY8RbC245WG",
  "key20": "2KYUHauQ8Z1vgrLeGeSAjzdB3bG7GToh5Lg56b8oQYuUYom4MHmjd6FGo7mWWfKfG7HJZPKiJeR3QPC5JzaVZqt6",
  "key21": "2LuTWx8KtVduwN5NiLrDxB89DEEpe8TnqjxTCVXxEDxShNyCZ1RqLh6dDXKe572eqnim8s7aNQhfiBHMb9VchjPD",
  "key22": "4VBz1QYK13mcok2aC6ZJY1qEcerCxy9EU61HQ9Uaqc2ScePoqxGWiJ2XaAGjdyYVAauzZ7fMQpC2Gt99c595HS5",
  "key23": "2ov3Wr41MofTpZpqD7uxDx4YrTF6H3yJZ22cXu9gP1rjkZ43ubRwA1y8mJwqkQj2uZ49QfgP76bhVtgdj2RuQSjk",
  "key24": "3ni3CekHw9xe5sYU8VdehKGuq2wntoHG7LK5FXtrtwaJrWHVCC7QTRQX1TTjy99ur8MgxLDoLStiNSh9ENpsxUJ6",
  "key25": "4UEMw7jgPo2bBLrDEZnjHTsYtJFvF3GJVsfC3xFXPRsX5Cm9XCrkNVR7mVrrauy9EfRqLoPV4eDjHRZuFkAWUHCD",
  "key26": "gWuxZGRhjgVBWcD2saoUxuT5xNmPKRMnEGNv2STBHvFV1dBYmT2Gppjhx2cHE3KYLa8vnp7nHNdSSxYTewZQYVK",
  "key27": "2JRiDywXCKEm1to6ZfiPM3YNH9p4BsBArQ4rgB2PAhQ6hNEDx96iVcGr1B5gFUVJBLkEqYzys8r9uyf4tbghnjnn",
  "key28": "62LQE58WRac59KDErs5KHxnD7B3q5oZUnxhuerdPtyGFv9PPz1SKd1cTNAa1wpp3RzyCPfgieKjoFgQWfNvivcZU",
  "key29": "uCbherdtdMQsJT8GBcJY3qVaBqBTtHNV39nkgFEbt9EDybubkEvcMeCo9ktnMVVRG53DXcJajr3qfzk6cTDpvDi",
  "key30": "4HBAEsgAvLzDi6VrCeWyDBTD4t4LCZtmHULtgpzzrgZ2NXsAGwm2S87KSf3upeH7B7KTBpHtxYQDefZbccib65nh",
  "key31": "2WVX8GytWDAgp6aJ3jH1gQDLhaTm2Tpbfgx3Qx4zGVDcBAkdjAgNRMeyEWDLMuSmcx4oBhgQxUqhg2cmGvUwevRr",
  "key32": "4sgkHxf3LN3vC6HLb5h4vFKmGfMP5UtQa7XQw9RRH6e6UytQ2MCzFeco1aLLz9yExgGJDzpccXqrMkZ9BV6CDbDm",
  "key33": "5QYEKdqcHFumddRAeGv9v9zF2TkHGcnn4D2UwtehtQZKS4acBKaHbBFymJarHhJpv9VXvFcdvKxhEzVfPuEgdnn",
  "key34": "637kGr7AHQbu7mWc2wL1FoNzBKUb4hJDT8AZwNt3hKzDW8pcup1y7QQK7rDbcu3TBWe9ZNe9HkmAMJURrjvX1Mjx",
  "key35": "2KyYssLRpcZVxFKWTZaxv3ErZTTVE3UWzTwp2iVquHAmLDmzBXwoRunj7Xct1QGzw8PyAPb3WeK4zu7WbZ4Vx9b7",
  "key36": "3cgG66n6j2MVR9UMY43HDtEhNQN4NXd7P9r4Eghunqt5p3uQeR2qyw77zhDZyyrMjBVB889p1p3BfNUj7FHpKVng",
  "key37": "5DcFxQ1uLApMyBVxPrBfxmE7HaAEdci2CZhZcgFQhJWSpZHbP5si9qUV7x69p6h3WdEhhRH5N4uzQ5MHyVuKWJRM",
  "key38": "3EJvMipp6JB6NDYsQR2b8ETBxpuRw5HGhYXT1pgccGdmtJEt1JCwhTRwKHdi2AEXsW2FYGpVaAme3h8cJB2PmtMd",
  "key39": "2DY8sLmz8rsYhvqvWxX8j2azfbbjwDWxs2pJ7rtmGDqScFWVrEnCDq3JhcBQvUNQexXcUbTHKCxDAbeoVMNyZett",
  "key40": "56pDTLmZ1yKVgqa2bBWfuSvnyosYMUoPT41LyUSTdci1ib25JDUv9Piqi7LUCWjcAnFiTT4rUBB3pVyA6AorJntf",
  "key41": "555FfxTTddMa1f9HiFKqjn1a1tNCDMeNFdeqCU8gzBHf2AQ9yERWpDgu8ivpF2ta9FX32sUjxWTg2pcu18a5Bcpw",
  "key42": "4kRcWeGTwtd4sncGEPh8YgvZYsCLV6x7vT2HnfhiP9VFriTwbce4kR4fZk16HCYnFgaQXUUGd8sfD3PsneXcrm2j",
  "key43": "dAkd5cgwnT3tXPPoiV11V3qkGFUs2Vzja4it6zHaZbrVgZedA147PF9EVUgNLRD1T27zG1DkFWq5ePeqgtZZA7x",
  "key44": "4zMnXy8G5iG9BHFXCrVHtabWKRTcYzzBnJcsgHD5nLqgEjTtYDxwT4nAvDP1JE2ir67DPyGPW4fxhrEyRwXn9DPD",
  "key45": "437jSRrrP5VuaXyhgmUWpTHZu2ZBEX8i5umRoV72gdgSxeSrqdYK24CAyT4BxrT8bTNEaH4xpcScNufo8ZM9rdUo",
  "key46": "2H3PsdRrrBt9J1XF61BUJfZYLn6o6ndNUU8eee5mqmajXEag5jZ3tb1vPXKtEndpZRKRc7nATDWE6TyBXR33Wz5L",
  "key47": "35NrRxKugaXYzktudEFBGY7xTKmg7XwZiFTFe3jA61kPKdJSWHnjGmMcWcwadgnrd2m9FL8uk9jGd5ZKBEmtdt9R",
  "key48": "5ub49itzxnyepjhCf3RxFLjKtjQAmsNE5XtSBWp5XzqL5qT4NNUNEs2b9i7N4jjENUvdkp3nzxZ9MHaDSQyFZJUK",
  "key49": "39EkjEAqmKE1fm1etG81hkjyFnBBh7hsUCavtoMAFsRUui2oRUq6jpcSeCiqCPaGBZjq4av5aV2kY5mdCuhuXn26"
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
