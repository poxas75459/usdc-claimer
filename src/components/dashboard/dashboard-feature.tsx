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
    "62PfG5b8NQihhyBm1eWX5DMUcd1GgWsSazoJk2adT1YNXJBQ1aufWFXBnY3yphZ4J97AbrHjuaXuEcsmQzbb2Bd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "641TL6Bjtn9JuwL56FzVpnMJQKpNQnTjrfXJBr5eNKARUeRdpjpLD8aoeqjwUovviXGc3stfiTzM5ChACRaa55HM",
  "key1": "2pbbXgEbTbqqBiCyANHoBkfcnm2JoQCe5Pep7PTwE1KF9kkfUuQj8GRCJDqeKyYpWg3ZEXp8JCBqZPWKsVVyjeZy",
  "key2": "65Vj1RS2RSqWK92HNhGq3Fa1PE8KHarDbwdX7EWgsXSahKBVRAVNt3i7sjLYs9U9L9JHjSRGcxGzzbhU6CshoHYp",
  "key3": "ifDXdbMg7PhDhGsovFujVCda2Gj4Ri2gCGymsS6N87y8RkynvBqwRE2nRcmqkWsLC7z1HxDaWCMidcAqMcvP2v4",
  "key4": "yvB8JjKcAmDLBPX81jgEsRVTL5fUVng57yu4RkjHRW3RoYUjcPf4i6hJUybfsxf97fUgepT6ExdmFFZ2TqcAuWm",
  "key5": "4GZK2hkRfQt3tiNhHcgZ6a4pamG9v6KhKTfyETqwKGUAvsU3rFmLPnApiAc9gKWB6VZuN4MHBHewwEWRYtrgLvTA",
  "key6": "wVti97bhvjoSP5kCjH5kADbhm3YGHWtUGKLnmdGTkbGfn7aXbbP5KqTeuEiBu8MdGSr4TpTmJ2wW9PKJyptUfcG",
  "key7": "UfH2gKSYAN57gAtaumhuPoXH1uy3B3bgoAdPHGvd2yycVhDMFHzFct5kmnCunfbJGokEQ2szpQhetUBMBMYeqmj",
  "key8": "2b7xmRiM5uooxvBZcVedbwmNcupcD4KJ6ZYWGhYmSxwZoMdoXQH5ZUCtDKAzajWhZXn39h2ciea4aUqRK9gNLWz2",
  "key9": "3jZRBX8Jtr6VGEG1MsHnFtLZeYPsE22CL1CjwLTGDUWxcRkaxMwyWA68ASPEsijYiJDhgJkx4oRJrQtWNhehrtFr",
  "key10": "2mg2ap37gdieC2u7KmSMz7uVbYargWPRHNwz4G8FdK3ukPYuzUFnL5jahYqSqmDYWiRNd1cghvn2hA6LdLt4Bovo",
  "key11": "2RCTS3E62RjBaVYtwLGw624cf9PK9vm4xztUMrp3tX7KJVrkBSrJNq7u6qoBKoajuCKmCG7jk3arH75oTBn2qHdP",
  "key12": "4mX4PczBNadNbW6dWCzxLf4MBCbP4arXwY6VKEzcGftwBBeUQrbQuXMRjyocUsPfG3Qrd8bBSDQpPMbs8nQdLPC1",
  "key13": "4EJopNZKEvKmwFTtAtvg55shy5Ln18vSvRtmswUFbpFvrTRgAan2sYmehgV7uxCazxMdekw7g2LUmRk45aSw2BXh",
  "key14": "122nC7qCD6Xtj3XPKdtcyNmuS45CjmyU3YWKty6HhrvtFHREWD8QpwTRLBrKgL7kRsuDBoCqPWvBhcFYcarUgQJ7",
  "key15": "2HJb3wYNmmLitrJAYkAbtu6NqNkDswhbmoiP1rk67Zk7LZrPCCGWnbMdE9ePi9H2J9gmtqQoRcWycywMRSoLwybS",
  "key16": "aid6KCAqXiUuoEXKNaMk8ZTgjgeHppKFjJmL9SH6XoWf81W4WJoUrAs9ZmipLDVrFkyKJhXErKv37UuxLXSMsRD",
  "key17": "5tM4pp1dTcZADkikTfVQw7qD7tfL4zh8Rzk1WMLXYVj3rH3e8RiWPxDT6jp4mpmDfVs35AM4r1LiFCSugC1oUo1Q",
  "key18": "2oc9hNzhS3yfJhSmR95RBhreXXLiWbncLPDnUvkm7E3t8YUy9EujKEQjpeLrmLNwt4YeXmLQnF1D3nK4XoUPejF4",
  "key19": "3jjQCWirtWk2PXCmgUsybcxgLPeR9p72FUED2p1Ji2sp781SzNS7LKrQwJscvxK7NMF87vocDNPtRTpKmAd4sziW",
  "key20": "4wmTZ5fAJXC2RWyba988W7XvpHd3UJzNXN9z2JBdwSWx4j835CUFmfZgAYuJGhpicigYJxSprJoxoYRm4nB9bZto",
  "key21": "4nVQ9rm9PtJMu8Ttyxuyb7hrVPxCUrtT1RN4BY231DDbcuwGWceePXyZUd3gBnE9xjxb2tfGa4EBcLU7bS3FgcLY",
  "key22": "4r3sFBQ8Lzx7wwognVhc9cSv9F5KUybv1Nyte9W4yp2NxeLgW5cPoJMyDqeVUT1dGWb2UUkiMT3dmQh74vu9KUkj",
  "key23": "2WWzZcVAsDYZkkUFp4Yftn6LQ3jeDrGviwxtEgRQNWQcXAEfHGdBcaKFK4FjwgArEo63L51W7QtP72S1xLFeJ1nj",
  "key24": "46AoHUmWxDPyLAMmPTwVYnGvfGeLjS85wT3nL1mbhMTCbtEoySyv2gXmjXA841GZJ7QUec5gPV7c3hDZgVotAg8G",
  "key25": "5mZEFQAEGQAiufjk16ZtXad1sejQJ4ZT9KchGWpVteX1vpMmdjVCezTCfbU4DbnnumTeUrQMii9K6vfdbvg4CEcB",
  "key26": "5Z3KhWnKreyUNDBbPkY9ZutU9GSaZYeY4U6By9HLaBr4VjboCQCPD1xumRyuVcR1DTFauKcotReQpvM1zrw4T7CL",
  "key27": "45BbZhRG9rECXxAHhLFeNtQSLeWH7urxvSAMwK8Hc3h2SbGJDCE2ZzFDvCgNTVAaBmQ4NvLdLHgYbrMfTtHZQaB",
  "key28": "2yCoUsoPcymJzSBNqxiBm4Audq84HDd4uE2WZikJtfmPrXPEUfedbUoKQBBFa3uHpJQH2XthhQBx5UxGyPPgzDuz",
  "key29": "5mPen8G3pbuaWN5mCRbHUHcvmhZshtzuFtGV6CxeJ9YuY5QtXc3oHFsq9biigxL8amPtFWFuNfBxyQDssRzDZ3Zi",
  "key30": "2LTrx5AUvvmb3QmDoZK98bGDFT3Aurk8en4qjtk9BaC4BduPcQruGfyDyv4JnmrrAZkMqhA5jjCwktzpfGKtPSTa",
  "key31": "2MCCtDaaSoegpzDQiQ6EAbYo7kP6W6pAR3aAckN1Vg35MAaMASZxvHAAhutzSsgkxEkQgGuvC5NYUWZAuMEvHHe7",
  "key32": "3CWX59hfJ6CK1z9imCPiAZgQoXqc6fDFvwh58YytWLA1DQ7xEzY67AjBWG3p8JxSRXRnq28tqetv7dRW1f6pVjwv",
  "key33": "2FJna9Pgid4zes7FCUfmckFsrPA2Y6ZCCfdTce9QJmCv4m6aJKLAq6vHVkTKJS6CrBDhC6Skmiotmi9sUhkXgkLG",
  "key34": "q9ytcvQr1JtXa633PKTPk5SWjFPg6qmrVswsLJpTMgnNRzVaw3o9Waa3LMaUtjWdHkzQEVnqYAPQJwSPXyHwqQQ",
  "key35": "5EP468XzfexjazKKiJPvognEFQwPhDVa8Ly4jKmyM66HRyn7DxnzMbsFTCNXYJnf2J8iMkXRYVacn6WHkAj2y1r2",
  "key36": "rxH5s67pfwpiieicfewf3LKwjy5tZt2tdtPnNBgbUf682kZBEZ9W4QcGnT7CU8LaCagn4nakhJFMLReR4FSz8Jm",
  "key37": "26AC1F4iMzHEJAvPeGFP55UQxYwrKjM2VdX7uUE48XzcfyiizxKdwFTgDgPffFMQxgJrs5dCcbt3Gd4TmTVELpMJ",
  "key38": "4gqKmSD63MMedyT6wiWWNcfAxbA3BNaqeDGiSaBSgNVb4kbZV6dhmZYEEXrj2LC9RUE5CYGPTw2x1Wqamjem4TYK",
  "key39": "iNnCD6SdwiwiiGETVKUeqNzvrspkzqnZJS1CvoXaEi11iZ8WJoQELQ5JD4zEWftkvRvg79iunGM1SPUL6tEVaj5",
  "key40": "CFpYe8z6ZLa9xUijPqxnLmVGWkoHSk1n9yESHm77NYk8X49Wph5z3fFDWHEq9ZYcWFKDwZ3aNqxoe9vBSDhCYMn",
  "key41": "44A1zPhcWEWf7NbpKWvJrm2kEbJymQUZpZrYmrMitp1sTisAeR8kQb1XXBT6HEUFohU67Bqu9ecA7xGAgMnqEkwU",
  "key42": "5GPQD4zs9MCiNCsNQMJCeQkc5gQ3tEFrSNVBV6XkZcUQN7aJ9oXaQUUdRb4FRnYzRTyuF2ZBBfdWQLxYNzin8F53",
  "key43": "QZs14CPTuGPVLTDfCVSsxFraauRTBhmsNXkohJe13fGxBgdyQGDvsVyovfJ6mbuv2YePDtSRP45UVCyiW122psy",
  "key44": "8v7AXc4ZuJwn9NZp8Bqud4uzkpsK63qNAjpjDWN7hbNLMR7o3FTkA4CTMqr74uF15MBpie9FVStFtxgbAcS4e6i",
  "key45": "fipxdtwYtY4E18pWcmQw1TRv1GgRLLjd5ZV28UbjG6dqk7Xpspz8GYVR9zjEddkBJ9Y58A4sXrBJXJTiFMkbNDe",
  "key46": "5JoTKN5iyHhiheb5XDVyvyiNkwcTXRU7g9xw7n5MHUypU16gWun4897g5nPTkvZbR1rppPTjubUxpbteicg4QygK",
  "key47": "4WxhVT6CQh8wNY4tVR3HfkD6ZkBiD1jk1ecb4kHmx11raPWpRWSk2N2BUkDGFkHf5uqpajJy1SzZNt96kJVfHieT",
  "key48": "61Tmb7uRfP1t2TYSgCiB7zezdTQa9irnJn1gkasWu8PYpUMdrHVv1YSekCoZKuYtVJ2rAfpPfak1RgrJiJUSwV2S",
  "key49": "5Xc9uX8p1S5mH65i95EagSNaeegVhLu5jrfxiLRN4UuLnfJAtpYYGZe4DtBHigVLdSHWwEZyUHg7hsPzy7YKotXD"
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
