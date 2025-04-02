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
    "3xocRdEhqY6GMmHqBtXKV3SJaScv6ArJ8p2FDVuqm3NFyw7kkypDWsCwstT4aSu9kR1j3StzZxB3WAq6qsa74Z1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nmcmiufgdLN7ABGAbPSY6zfvASKV4fLk882NLyieoe1SNK6eECvZ5TzFQhHVpMeJsBbjJajB9PvgeVyKvnodyyL",
  "key1": "MTaFicFfim7UHtupYGznvJJYuVQeUY8shZDG71MBG5KmHCFWTp5FJruywjvr9QDkyWAhkBrDzRRtvxiebcEsxV4",
  "key2": "3akTdfMSZhxw52cHZzmbGFSUV83M91WwEEJJMraYHWNx9AmgWXA1KC7hWeE8BkAfCPTrvGfaTkab48cZKmbg9qSy",
  "key3": "3SJWUkJtZdRdZ5DsbfVyf4fVNBQGWGnVVy9txQCryjph8fgnLKK4HzeJDCEkxfp75YAwjGqvTgB7PiYJQzXFXzEq",
  "key4": "2q3KSkm1D1MomqacmWCBG3fJyqF5aTMMsrZuZcoTn2qBb1R3Eaxmw8tsFvS9R6Z858YT1w3UVUga7RGrDje3v7Nq",
  "key5": "2s5Zjcni9vSN5E19G5jzsPqRdhieNfDRw1cCELXBDr8aPUfGh5yvUNVpWdzMmRsGdaE2SjBpyyJVbPVivXzQiMxw",
  "key6": "4pxom3mivDQuzAELRFP8mDmS3CebkvbkoWy3gLTqdQJkPcyr3C9oJDCHGWaWpxyUHYsppWv3hLRUCqSeuE9gGWfB",
  "key7": "2SYB6WEd1orr2w3p2VttCP9RgZCDn2iXYNZrucDN9EFnXJLJz9Pp8LKded5tahscu45QFWq2MnS7DomFosV1wHXR",
  "key8": "2JHDQZr7vrk2Dy7Nmu3e4uRqySwZ5FKTTMuBb33Xaq5Q15DNqwt9TJAFvAjiFci9PVpGCqmdoR6bXG2SRBPzr3ey",
  "key9": "YFdtNwwnUzwLCof2VKdVcQy4YGvjUimXJDz4sXqr5K2pPfcBXeouGBk68i59155qekyDTA77hDtHCkxbQfNpDfL",
  "key10": "3CsfZ1Fyr8qwTjBSACdkicWgMwJfpaiYASiW6gfv63ZMTAgfwF1QtNwhY16F5fyoWxjAAquBbJDXFRuNcRtLsHTk",
  "key11": "sETnKoQ9GLRS3aVKgpNeSczxVwrjnMYbJT4mpjKDswM6eEyD4VgGkzx53HzZMRF4Sdc6niW1vkJPk1vQZ4WdVXM",
  "key12": "2ZYPdM2Ra2iFMKG8MZsT51BtQvt4QtEeyPKKP3cvDUtFHGKCiNQ1PUWhWaxQ6NPfxfnef8jKg4KcKUQxjNQ526hA",
  "key13": "2QTvBcRueyQ78n23jFjeQgJ3eJHnZ26chztFHfHbRJF3QWcfxMhaNN7hZgc6CNUsxYHZVfwR1d3Qz7xP9RoAqsch",
  "key14": "f4Hy26BtGphKXHLuqkGhAiKECYAdQC8BmFXi2QvzAJxeZWD2bBPiF7RtM8GmSf9Q4gX7oYKUgNs6qHTndAaVMHo",
  "key15": "2eiHaNohdQbpP1jit1d149bRGUhhKm5mKsDthVy3nCi8nWs81k1cFdPALRcqvYc8uji4ha84Qo7ZZJtny3vYqAva",
  "key16": "2XK3U5TcwJHskvXaRGpiGKheWaU6iF8oXbCZHCXVDUBrCUB9k33QmuR4huWKHCw1LqX8Sd1YcSf85PiGjbXGBZbS",
  "key17": "4dxEJrNDum128bFPvCFMcL2nGBuUxY2cvgHDNjXdHWU7jZSWBhq5RxFVi1dRtfmP3PDhSsppZ4uSxQNZSk6AQDr9",
  "key18": "3TdyqWePGsVmRRNT91aNgmiQC6AfPRhr1WNdo3QyFnbXzgUF82SZB3C77kzeNs373Bwq5SzCtq8z922pAjiPpPAf",
  "key19": "1rFYvZz6ayyYCbfg9iyXvLKg1asGFTr6NXvuwgySknRUPFjTjYXMbsEGrUndMUUQXwzhfpd9a8G9us9ym2mq3E7",
  "key20": "fkBVUcPqiVfda9H1T3c8xQeZzn4WeP66upnKS9Hv8B175sf8QRNZoykaKrDCuEACsfk3GGFVosuKZ6uNFERGv2y",
  "key21": "5bXjsvb5A9Wvu8oXte57RnA8gXgiuj1xL4Pe3AX3pwRnGSey9hUY1dNQY99F7FSnSSZYSvBaSmFLztaSw9RHvoLN",
  "key22": "5zX6pceBhUHtFHQAK3wPL9aaj5nnJNcsd2jV6i1wotro22YxFLQmbYHCUv9G26Bow1Q7WtQoWG1bwaNxzGqydNRB",
  "key23": "2JaV43MFYSZJpey6cKzdR7VuQfw4LE9pxZepP1a3KZ6au789Bjj1cbWbENwqbJWbDMnQEMFLhMuzeN8ueD7PGvnP",
  "key24": "4PtRF2kkLpqTGS6e5xSJ83DnSj826PgztowVGQEeBPeu4oXCBaYSZXd145TbR7NX77NvyttSWYvFSfbqpz1FQV2F",
  "key25": "3D13ouujzdXhPcYmaYm8bMLRwWXoR1GMktPuhwcGMcYUYGQXpFsiZnAUZXWNwmppXSyMqyMV94PmKP2ZnVNjxRkS",
  "key26": "4cxDTwkFnvbzssxeYe8tC7HbS8s2CAuDYgodMcDe2c34iUsmAabamMdPCZVoaxgRWtuBESGJAJC68aLjk15pXFEE",
  "key27": "3ZKCRS6sjE6esB743eHCQRYoL6p5wUGz1WRY1T3k1sthFPzdddvsZUnVGFxom2d7ccsa7WNvQfQXehfdx2L95Fqj",
  "key28": "3zjYHK7JDmZwGTwZRrdSTiiV8DCwijG28LqSK1q5K12PgDu5kfMeh44K9bRqrXgFcxUHB22gPRHpzpGdfM4d9GZ2",
  "key29": "5HbrXLTMRjjNZH4obit74jZRwe5E2YtQoruCNbQAaAEfptaHZpraymbApx2sBVPXHX5B9DS8X3KnsAwUuCM6duyr",
  "key30": "kgRediu9c2ZmQrw989VUuKRguzdW3U4RrE7A3GAFgBb4WKbbrb42BpG51Eev5RF9GnQeEpBfJv4jnnKF5qKjSrN",
  "key31": "3qXjyAyBLMH9WRm3L4yDVTpZEEA8Cbr9gXPGFxxjKwZhNq2qafpEF4W5WJDrQZfG6P6uChGUzS8r1ZM5Lrvz9vfb",
  "key32": "2c83V2DyY8CR3pszT8s2gG4NJdowVUY9pwv2jJ8x4ctkyuCwJaLTKRR3kwzyxwK32GNtwBR7xqWRRkWw6ywbWMDi",
  "key33": "5YdxtfymcnD553pNsuxAWJ7VoMWyDMmf3Ac2WzxwK8oNxrG8bmQ2rRw8Kys6ALDaxvQtMzDXrFtQ38Uc5kLAGguL",
  "key34": "PZUbqpq2xckifz4puLH81152EVvpb5hJXChRXsPhceW3BGQhMKdS7C2Fdh5gAQLVHx8vdpG5dQHPDCdTPiqS8f1",
  "key35": "3Ch94snN98Wfd795TAisEf93buBvNof5LNztajstXDDeJTxjcQiRUYFrnR1u5vsSsGk5Rycnm3ohFDHbXMX1Mh1J",
  "key36": "4BJ62Sf8YixsKoNgxJyvbVShUDQn8DouET53T1RvUySLaNAxwB891zqTwLHmLQrrczyqYxf2bxi87KSmWNDpbGze",
  "key37": "4st2vE4yVJWF85TZdhVPmE1vxtNPkkZXWMk85PJCmUbQNGV6UnFCB4wTMbjQ9GURBvoFJxA3zvijnKa8ioEMDWci",
  "key38": "HxxZLiwa9mocWoEEVHnSfbPZwH6163wGXKYkPnfcqBLnGvwY8t9mxmh21v2FCs17JsfHeSEZaPD9MTWJrMh1McS"
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
