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
    "AvJb9GkxKjadWPtKqyPgea2uzSNaFd4ax5Gxsjhx1amXc2BTeFSLHV8rfnM4qZhC8fav8N1485FmYDbopgDDQBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j1iaynrkdaHJXuy3e1kCgEVtCHEQcNT12Rv8K5yzZDeB9XKeysnzZD8wvySzk5bn6QWZmZzUUaS53GW6Zv7s9jX",
  "key1": "2XWDrgQsNqRY3Tb8APB67XnkVcaBxxjcHv8i5KkMiYPLDBuJHFxXnwairYZcWjfoP2kVmkoFX8rjX6Aos6Cxcc6k",
  "key2": "64Pmz89gH8z2YBrWfKh5J8mDaC9ZhJsUXiDvBm2g6QF2vHkTBc6Aq4rk4QLbqqwTzMEGx1La11Ah7GXqzXJ8nQHp",
  "key3": "21TDVrH6Y1sGwN6ik6BRH85KVKnZLBDAp6fAiY4rsvikx9BCFb1UQPKRHFZfRu1GkJ1EgvWUDud1Cf7Q5NNWnSHm",
  "key4": "5UcSnDfdVtaobmjdrnbbPpWh8hPBP86fopyoYpF3HEXLmPJnpCFwsmtdpffsAfT6qgWQCtfr1Qz3JZSJnPqBvygX",
  "key5": "2JZS3Br64c1pCD2Xg4GvJd6MSpgaJvLmF2t2NU1U2iLB9c13wbpXVpzF2myuPGU8GW4hz4v7xVm3V5W94kVENnwP",
  "key6": "4HXhk99ce5CEj4AQra5eU8Py7EbQbsQqNxRghgTJMWJv7xdocCpqz51FyFCARGL7tbhAfDNzGwoZuYkgdbBifRRq",
  "key7": "4zoJ7Gof3eCP5ZDasFu9PUMaJFuJFwxvuQSYpQveMeEN2EbaY3NnyQP98uVdLAabzfRTmcsMwTJ7c3BBhir8wWCQ",
  "key8": "33NVZ5C25DMuvgSNbAhtAscMTd3yxeKfNYoG2ikWqNkDZ8CSUMViU95am25weLipLnxQn4VoS8R4R29RtTF6Eu5C",
  "key9": "3F2boAyvr5aK3Bi5EYURyJYB9n5Qmao8EfCfQ7xY35PNnCwDu1QPLxzcAmSQkz2TpS1M8yDPnqiSG5f97KsrGc8n",
  "key10": "29skVSm15F8LMB9HtZGNkCY539Mkb3zbY9tVbYJ9hE35AWCmYnqWQ1vh4sYVXkzpPtUukrZu3WAyxTBq8k5ekLXw",
  "key11": "3v5g6kzNkwHRRaJmqiBND8nSTPVkwKTchPorWqY6ao5e7hhZuzVfaaKZYzTRAyjdfqr5m6GWyhDbKynv5PFLVtqy",
  "key12": "2r1DM3Pmvd6V2vRsCKTsmFiqQ2LEgYpH8k81P4dRyj3CsLTHoeLF55XBGYJLdrHjSko2ev6UF62sSnToNFndc91F",
  "key13": "73Mdbr657NyZuZuofdz8bUJ4DkFK4gs9YD9C7pCZbg3JSsG4rXMrZgx4DUJTiWAEYpeMXDh95iFLvQWRdo1GDnh",
  "key14": "5J75boqWLkSbU1w7G4wBNiA9QgvXm9tnJ846yPvQi4rfdcRLWsdCWHTsCzfZ3Rc7A3Cz2KSPfr5gqX3CnYJpYgMr",
  "key15": "3PBM7M4tizzT7zmxG1JBmA6TqXjsPojgp2BEicgWVXoEisZXUGLCFdBJLpkpMhcjLvxYUhdTCwcv9okfCPwh1Dup",
  "key16": "pHz3dhc6GD5KdW5nuEP4kcBvLQBMQ1nauDK1bmiPVHM3DqFJNa1gxd6GQbA7ub2oFsGLhFktW8QZjf1vbi8D8QZ",
  "key17": "4cp4E4MtQyuJrUv1b9ckWugW3itgQLhZ3QMsdxtgJcgC95d3eFRuNrC7WscgpUEaQu26uTf9MHogr8uTY3TgWHX1",
  "key18": "VTwetTKm7p4zDwNdAQHRNoDGKYmiUWyggsPSQG4Q5nUqEkdRgh69ei8UUGbu4NeG5kp32bATdAqfrKpPpJzCHzm",
  "key19": "5Q5SZqi9xWuCEL3MD85PuEkRykTP2g2nacP1mwZGMmHN1FaRSdfYerxBEUM7ZjPQFjhpPHpfE3oW96Vktuht4R8a",
  "key20": "4kU1RZmHBt6YTVLSR5dkuwEjyFFm6FVeHmLXqrqbMDeyMpRJa2A11sjFfnpL5iZm2LZgUyA5c746YQ82mekFSMs5",
  "key21": "xFSqL9JhHs7kngpgFThVcbrZQqXWrEEsfRwkyWGiVyNJCwENBga4qXcVeukWTNrsJFnkC41hxc19VRCBKpxb2qs",
  "key22": "5rLPhzSPJFirBH2KwWw6geSuKm6vruuTPUQfeLeC1RA5t6ffKmNKQPxidskFgosqJ1QzzD2dFvWZoFrZbbjgVW6S",
  "key23": "2yWHEdi2CLKWLCxEhRHQbEVHKvPeoMwgWMyXThFW13khNdX86BhEchEA5bSxPpDKrG2ZqpZ78MZQAadViiSqUQJJ",
  "key24": "1PMPbotLjVrnFzqi82DdA3vrcGzYJhK9SMFpxUpdRytbHXUdozGqszPpgV1XH8rwWyvSYdCDZu6FfGXvzWSxDKx",
  "key25": "3hDG3QqxZ65QnUmNtWA2er9c2LKszrLSNUyUcnbiqdMxWTBrsKT79uU3MZynEa76EN1G8pJwiX4zqsLHruQLNqYn",
  "key26": "3nHzVPHuUpAAPFPTEYusRaYozaqdP7nJdSSvnyFvdK8yR9sgtBkcw1t2LPdAvpHjY1owGLVqLTANWKSGG1ogC7Wt",
  "key27": "3vQU5vfksmQCXUCBu6hEQydRrq7MTdpNpsYRWPdvHt3NSqBEwBCaLNTKNhzWKyMJdwybkn4opnvDPhNpboRmoBi",
  "key28": "4ZpybyyfYA3tD52YBZLCuTJaYiWe9EunXb6V7JyGQxhieG8V3keBKtBjPoqiPiUdwew4AAinpXDNvK7VeWGkzWyb",
  "key29": "4MjjTLvTrnfW6ni1LdXgdug28NqCCYoNzEetWjvZnXNcW5UWhdsL669FHXKVsbCktW3ehhUZid1R263X4nBGa9BC",
  "key30": "XeL5AZNXLpPkoaLcDFiS8fsx7KjSfNG1hC5ESqemWGz6bNZQyuTRcaZ124nEVdNCP1gjt4acpAFa9mykMXykZF9",
  "key31": "3TE36fqcnRjbL6VLVDsng37Ls1AD9eDowUC7Xn4PVFRpuzYPtm4JdS7qznbfe8KzXrB3PauLsHAwGPkZxrPSfp9A",
  "key32": "YovDMK91QiLWaj3oPuxidofPwQ7ctGDBKHzxPjF4915gfiQeHnER34weu2BnMEocH6nn7eoQcKMrFkc4FoEAWFd",
  "key33": "gPcqi57KXoC51K7kwj8JdGJvF1sZUPRu8XRzRVkMKofTj9qaeWKxr8H7WLmMbV7VaSmJBrJoxY2gBEkZK1UAiGo",
  "key34": "fgNruaHjfqffjRiu18fjoqr9BT2RYMKF5mYLZuW43KeiweTuaYK1tUBKnqD5URqJcZB5GDEMYVzAT6YHFDGHGJB",
  "key35": "2BN7weVVWyBcsd5MwP31ijzPZT2ghwcHvbYc28NnrYk9v844nUbVSdQp7qiKfAU1vCxQNc8QwmgqkDSeUjgtznCk",
  "key36": "Q2uwSqrmQ8TeMZ42pvQ8AAVWNFBTntymzv4FEgCgg7VPNXS5yYFYE2qaVacZ8vtzNuubRdr8oTgmVWtUL9kE8du",
  "key37": "36d7da2N6QcdopQj2A7fmSHc298eARxuC9GLvFEkBdADZ2UcmLSQvtMJoLkQWJqnWzaKrm88CWUmVPmzt6gGbFnR",
  "key38": "3gvFvtCfxBeZ3rKKbPQCkjgdZJ8WByTd785DWkePprgH32cgAcxWYtAGya7CTVTWoprmwc2JsUqQCaX5XHbgt513",
  "key39": "5EcbbCYzAaQUCJidcmw9ysGXmZnEiHN7o3aF64J3xjjHTCTmYkggEaYGvsJ1H9KjnpkefeJFWYHGohTkBmdzfjaT",
  "key40": "YR36TufhkcqZZ9994zQjmQzv82Ejqj783Bs8W84BpKaQWjR8FFWcAELriZXrWuVscvpmVVGy2r3KuM83PAUd8vK",
  "key41": "3F7npTNypArW3q2BbnvGeqskZucQWcQgRSdrTpCcKNbeyuVga2vj5oVGeHraWS4nA1Bc6s5uet2QZSEBEwdrudhW",
  "key42": "ERevCZGuAQBway7QGdPSqjEBQbMsgWeYBK5bdqge77oLC9VubCCvHb6drxypUVxZyx8JoZrz9vKCkmV5Umh5yen",
  "key43": "428wVr4ENWWTgKyEDHCvdV8zGjbS7nThCTYdz7pDYYHg79sSwAHphKVsD51D49DSWHypcFCUT5Dzcyp6TaMnrgsD",
  "key44": "38DMpki3yifzrXgnPKEgW5U9XjUpfDLDC7smgqDdraH8C7L9i9XZHcrEwDveYQEAjzX7bPe3xYmCM1Z46r8nyrV8",
  "key45": "263Ab27ZQNbiHNTq496GZzXACCRK3q5SHQb7ok4zpdBd2KdapQ81QUA1HbxzCwtySNHXCRAHqtom5bAnogve7NqT",
  "key46": "36KGoUfLFK2YsTTg6A3tbJmNPbMSnPW4yBiZGMXCYH7ngyJyP7FxMdoBHzkKb8SwYy6JDx4ebVCUuyZyDL28n9M2",
  "key47": "3XVYDKA9hUbMwW56HvMS9XeeV4dbqDKd5yqmRWycG6QvQ7pdk4zhJLnqihQWzcZ9h5PStsFxWMmGyvY17FvjFcGF",
  "key48": "2oa7FvxkKpKgkLhAJy9DGTAUV9FPRmhJCv25NCCVx88qoybJVeHgdcEQ3sXdnZwbKNw17RazN5d8gk63xoDR3ASF"
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
