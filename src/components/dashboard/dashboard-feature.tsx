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
    "2orTfmjJThTfnWix9mSDaYadEftVmCe86pGvMhm186TaH4WZYmyHLTyLBw6Z8nad3TA7S53ymKqgj7ocUNbkzeFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5avVkuKDb5BsSyCHLnUWU9aGQCridiucDWmyiSQ8u3Z74GWDddVjuLGeCJrEydvUpXAYcttNgPztjXp6rZcPGCk6",
  "key1": "3K8FDbBPFCqqSgs5KrApVPjki9jfxrAFTe7JuA3nmxYXfWWAnf7r7c4MD8Dw86JVD2deKsZCEmkFifWJ8SpKBBZq",
  "key2": "3mSw8YZjkYkTcfppcFzND21vGx6TNVZGpLZseyqB4gi717jtsTFxrwAxgmLCTNH19SLMbTNCuMQbqMaZaP5TxMDA",
  "key3": "3DTbkCrieoXtSk4cghJpxtKZLnYTTwgeeBABg3LpiMQy9hucHzXMrapQnfp1MjcxTcYTPGRpAsNvp6zpBkM4LXMg",
  "key4": "M4CEH83dzjbkVZWuxomt1tKbNQEeSMNMZRmFtF25KWpE57mpAmwy94npspSUwJ3ugiXPo6QDGEVrsE8oGZohdKJ",
  "key5": "3HByRxsA8XzK88bEqmW7NmFWp1hTJcQqggXUi4tJ5phou2co4tjs9dr7dtNteiNtDH4VPaQWD664uACu1XsrE1Ta",
  "key6": "43u1YwbWQTE8r9hfeMigS8kjkHJfrrwqy32MLKdbtUy6SbWEpFt1CmQGTV4BPUeaeYZkNaC5eGbPxCYwQctvXs2y",
  "key7": "nySs1cJgLYr9Q6o3omRSaaS3ZQGUzjMCH1N77BAHSCt9hXcUTMLdMUHDPmmV4awmuKTfvGabs8Xj4pVLxFqGx7r",
  "key8": "3U8uG2DXnhFj2hmDnR4EoY4N3awyxRMH6DJWDsPGrKDU5t3aL4L5ydKe2BXeHz6epi8N5huH9E49Cv7LTArtQjJj",
  "key9": "4xaV6rtU8GR8Du2W7oMsP8GxwP5m3EzpHKwfSuP87SgWxHh7q4FMnHeLcGhVTfPVaitounwzcVXSu3tGeedMfGED",
  "key10": "eScYp2iPkHcbHqSywhHvkSMreNGchgCSQdQmFPbPwJNRCu7v3HibPXqDA68grpxPJM8Hm4zyUzpmyKaPrRHmWGA",
  "key11": "4MjY8dEQ4v8y9DRV1PzHYGmruDULjLSTQumiVzBWqZKK91RVJuq7NeWGcCMds3WcTGco34sTnyN8M25KufZsXqZa",
  "key12": "3b9ADndDLXsv6AkUrC47jypdmUvEQp9L4UbMnjVjjA3YPR4vtVf7ZqNkt6x4u3dFdyqUDged4yeDe2X3z1sZ5h3M",
  "key13": "4nRL6aRnmZYauPnB1XaJYcte4iWL9jyh1FN8DWzst4FJWPWZuBP1rSxdhQA8Gatm5J7TqbUwcNu9SQaihxRkkBCE",
  "key14": "2FDTbcE7h5wuaAyRkPvnFzJzjx1ubwRytS3u6LWFoQxKsDwVVHheeYYonmBfeRWATPv2WPnkvbXWngSkumMSYSYM",
  "key15": "4tGA6tCKtgrqwmEgXeMuC3snXgwRauoSR3cga1prCxnsGqtdvNe96bvZPvDxWR4MCyu3oPT3ENw6d2e1b9ZhUkmX",
  "key16": "umzQMLFN5vysLh8f1L72fXp2AuHFoyBhxRGZpFZ286bD5uQKMeHxuFeYjTeHAL3SS2T89HL7ZtdWvBQoLk2Lz86",
  "key17": "E1dunVRWTPWdzsfzeEVYyDiNBcFsnRdWNLFgZmNUpVVkLeybvo9w2vU41Jmrynvxoc4CiwPd2daW1DEjSeseZh6",
  "key18": "kEcZ9pFbGENjRFi23eXQpY2eKK1YM4LpciFongo6viAS9jNF2JyCKao4jbDenUamgqMu2mBcNNvzwvrjVTy8EAi",
  "key19": "5ea7YMdvyZWUeUuEiPJfK938LW2yAuJZaVuJa8caBT9DmB7xuu6VbTXbuQLkrDwUJbBrgSpkZTVwkdiEZnNSf867",
  "key20": "i49XaFd5Ds8DS44nvZmRC1Yyii69FjSMyZRdy272sS4UVwMsVeqThaHQG7SPwqJnjwMwBD7qGfG4gorYVnZ1wN6",
  "key21": "2WH1ATCGx43Co31EMGYuHza5UyGK6NG7JNQhkG6WkTxsedc79gvcGLQFomTLXzLdDKtGa1NVzDE36xranwjoBXXH",
  "key22": "5tvp2DqbTovZQaUJnz85BVbz6FRNzgomDbFk6BnckA9ZAv6qtFSPTgPxPhF1dfpmyRgHBqDJ5VuBKCaWpYFhS9JP",
  "key23": "4VNe8Fz7TGsM1hhys7PKssmSvs1zfedWYm4GwPRe72E37U7mybGt9RRweG6XNsDpMNaqefKjDmWzXeVPbcZMX8BM",
  "key24": "5h6bGR2s4cckSofpkmBtcjePBA53x7W8DUG9zkWGQPQFBqeK5dmycwza6zBujFAox3XkihPhAH2nyC4nNb7UvJNq",
  "key25": "24quNjNehHGPqL7Yb6v11SBysnzqm411gdWvoCkai61oxYVPzF7d334QvB21wRyPE7bGEwS4p4EsTd9z1p2UdEq5",
  "key26": "47MVMh3ippePsnUKsGD4neyKhPAi7C1e7MfASwbP9ySYGTAcxr9bNtBrxHgKdxKk9a7Kbs9rKkDqFvm8LNrQA4cW",
  "key27": "5CbWbu96ogajXFdosdGcoEXuaHaRDcKxmd17XWAvdR73V3gzKzZUHMhgRmMCAHHMuk3VHUN54D12FphBDYVDW9Vt",
  "key28": "43Yhvn1KcDQ1D1RMP5PSWPBEDAUQRfv8oHPUcjoRerEz9fW5i65subT3uQeevYf8S6QkVZkueEsi7gHFo4TE2xmK",
  "key29": "QjpP6eufiq71synYGZpJqKhfLKVaYP134mvyXGqXiUdKeCmtQoga2RjB5o18VxdM94yxReEFTgSbow5ESALpUhH",
  "key30": "57zrUfcf1sosxiUipNSdXKUD84MvLMPc5iWAogNBRFrEZzYTyMLRmGKLxuWmd7nQ87xhVsErNpFKr9FfQJ2w6orG",
  "key31": "3HJCi81HpStgsXVbK5opxC91yXaf6D7gSJo2yfWZ6CxnWBy8NefwipnjDVSEcaenZSowcoy5x7JdpA4nH369mKjC",
  "key32": "35dnzeXPM5NCs6uU62S7xa319t89eibygorxnWhQnGdPwf9BTsuQPkpe79o7MCRRopThtSZD6Eb6HgrVWaM31Bad",
  "key33": "3KnDD1NUymzPJDcwk4uUVeadoXinugpS6mbpb4aeenvLrEQdjqDassra3YQ2gQMY6GpdW4b3rJjrtzwfnzskdbz8",
  "key34": "3ZchVJN62ctEWuMQgDjKcBSMsxHr1J6WVkLkbDZhXfybmpuSuSsfA7kK2bUyzNBLHdouxKkf64yJ7ajZga4zcmDc",
  "key35": "38RqvaZe8nngUtUGQ1BzQ4UeySmeez7vxG3SuafkzcLVxeVGGbNa16oXpVckA9nwFfxH9HQZqREkTTUKAXEe9Th4",
  "key36": "2nx2fqHHo9Y36ZJ7RY3HXXMa48D4MeC3SEg1jBb9GWxwhtQDBEqrAAXEnAfcNg5sDCKvoeFjEyTzL4BnqfoxeUdX",
  "key37": "Y9GFWaZCvuXToNkpHA2MrofveDS85GRJ6wXNQwfWw4oVaHhxsL72bKsMPQmvH6L5pka2b5nkYMTqKbyLY7YmCp6",
  "key38": "2t3bTf6SXw8SzpGYjqEd3k1x4DUb3jzzHw1c5byypvo5pFASkw48WXVbpLr9DUPH3DWj6yL917oAQa19ycVirmqm",
  "key39": "3TqJ5JRejQcwDaQyDWFSkKPgYePXQbcRuqzwDJrsosQfGmS4Bcr919nrXeHM7TB1NKMaC7UP3PMheJmWFe7G872v",
  "key40": "5oLzZn2YkoawdUfcZ14iiSB4iPJQv7c4eKP2ZFr7FL6GnP9tCq6RpJ33D7sMTzv24HRfxVjhfgtUXJC75vxPo5pb",
  "key41": "3sVVMFajR7R6kAZ3vQFtgde6aqJCAR4pyxzBMZCzrXM3dTKAezAPQ2ynHCoCewp9H7FAYCdKfsV7Qbg6Tmb5unTa",
  "key42": "3XZrTMavKGVus1u4FoNnspqSU5pfPwjVBwJVNGP3ZAHrGxcj6qgWSjQYx8M7excmZC8HnGfTVSy58ZSWvU5B4Lju",
  "key43": "34iuYVhioVDpw2Kn6GQ99BibD4vw3i3oH9iEpDwFYgFtv4255kn96DtRUV6jpXw1Bps9sLhq1Y2RLvBwco6N97bx"
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
