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
    "3Cp9XJbiJWDwjUqWcPxhkNAMKhTiRScqZeFaSjXTwjAr3V16Lc4saimfCjebZWBuNk5GpVdz6pYqVFJ3qmSgwhFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jD97i4HX1chY2JPiFfKrSntTgcDb8Tw78K9GDnXTeDf8c9jnT4R5ucnL2KszGPWMFiLWxNuJ292k3JgK1J85yuX",
  "key1": "45bKqwu3PxBZ9gpwujgCueNHL5K7jDNBNAEXmBM5gGgc4P56wio23NHHRwnvHCuns4fPcpnXd6qvssuJPxuGY575",
  "key2": "2YVsismGVXa5dmFB49m38bBd1pMtDDB7ZiYh4qHPXhnVxgQ5RTC5Mmb8VSmgb66aMwN2jZs3N6Hm2GT9UrgXBahu",
  "key3": "27kKmHF2dofjLHGHNB77DAxcw9vrLBA3Jb46M1VFfRrudMk9GPhzyTR4eqHPaRvjLtv2nJUPxTAfqdFBgDUrumkn",
  "key4": "7nfrEpyqTYjaF6uvfpHqiVp4wA792Z9HNi8gsTyQvChr97Pi9GAuintPrxGVtMPLZ9yZY9rB7zNjm56fVXE52XS",
  "key5": "35db5SdoFWRWVHMyexabuCMDhGFqAmYkeqpybaqkT8FmmWmNvMgsqqkoynzaz3YTLvKnoYjtct8ht4q99QcyadU",
  "key6": "2aWhxhLNbGbJc92D3hd9YaumhN2g4tuNujxwopz7KQzEKrLw445ftpT2UHdm8fTgS6sMWsuJLRZZbdAE6b4TyHt9",
  "key7": "LguZ9X3ugtEAzGA77E1YYYzncYvUj1qj8zEVUqqJ3uZDSGEkzcq4UoeBgTyq4sD6BRorntPhkcWj8cfy1rDRRyP",
  "key8": "Mwq5V8kY12Mcw8QifpUW6awSh4CiZYKZcCCwVCZTCBFzKV8g4udpCT4BdWDNbHV7c8Z2VmmYyRu3eBD1MsZ2xTr",
  "key9": "37ZXv1Lh4xCq3fivW8YzU91DEaev5CRUWm13Pmvr32bELGuRovcVepscL3ReryRqNAMR3pz1dBUsFTmhgTVqVyUS",
  "key10": "2VKWbQSHB8A79qnEyVBVqMuRfrV2zHwniMH7y12qXqoLmQhr6JRJzkuQdHwrdSmr3uetEFC7g3LXwe1hTtnhV5kk",
  "key11": "3yb3rnZtCGT8EYqCJ6cjqWxD9MHnEGKZMmu2j1PhF2iLpmJUhsPeV1C9h93sX9Grj2kZK8z3Zn6EdxFRRqqxHLfR",
  "key12": "5vBvALi7aMMcgiGmngfVgjDby9c3Bg6276C9ayqMWaGTXJyGzZFGoPTDhdSrJkUJpEjHRHoJskBeqvyq56JD8RxG",
  "key13": "621e1Zf6zbt5WbwVk5dRpyLU5xEsEFXcMSK2XiADk3BBPD9cBuUjoJJEXgwtMzCNtMUfv9ReByxK84NTYExpLeVp",
  "key14": "2JA4RsZ2F2sxFa9ZjESeeNV5C1kjPB6qj7Lbtxfiv5vcziAJdFaKRiWCGv6Wmczis9d9HeRVujuH6B76iT1TzqT2",
  "key15": "2kQCVrgu4xKie17HeViWrVdLdRSdcGBDprnAG6o4kj11ZXjDHgjBWqUPBoHAAbu9xqRFThigrxf52CKff7SYxtLB",
  "key16": "5qLi4iMuxLd8j77YPvsJVDpdn6ax1Jqy6xKYE1f6aTM2Xpe5E3xKByrnYdXJevBKZ5BvbvdEUkpLFb9tS7PamriR",
  "key17": "53ucXvqWmgaKeGSin3x9Piej7X3C6mVKamL9aVfwyoWcCG6CgKQXxSMSx8cyi5u1Crfeg6faS4cxrWwDrDnfR4qa",
  "key18": "5nzDa7jjdJbcsWDzSxbPoiHyTodT59Gav8yyYDtBN27xNB4ArF93yD9wXk5LSzYnPwiazF6J4jTFjNmsbFuUVTHk",
  "key19": "4dUNXgRLYxR8MT5guw8wCLNENgMPRMai4fof8B2dVNa3BKUwBuPv95um86eSiAH6gLqJjWKMBbiDMephRiUy47y5",
  "key20": "4E1HuogWFbQ48evfPNa3XTJrT9GDyz7DasG6BCP4rE9sKeSPeYVVYnt2FkHRMqx4kguSXTyP64CjxwQMwARtvvEb",
  "key21": "2Ak1MunBd5cCmuW4iERxkssoCRiCgL1TywhQSmWRjFemR7F2TdrFHWpVfLyWtRcjoHhvM7aXuxtTAJwUU3oRxHUq",
  "key22": "KQjoYRKvTk4bij7hS4QEXMrF9EJuGUbpKUiU5pMsisdaUbm2wcYn23iymEJJXCsSqskBsYDB6mVA8josbK2HwMJ",
  "key23": "67GwJ8AQARcCMYj9THEw4Wob58j2gdE7au9TdL6cfKiWXtRCgSxkEFieMudiqf8VfgszvT2MMNMx2Uja1ACLheCv",
  "key24": "61uanCPkP77yKZ39EPfD7TqvcBAEQ43GM8Y58vUD5X87crzBqBXEsP6mbkHSWBhTD9yweJvrX8UXYnUr9Gv2DadJ",
  "key25": "ucfHZxM2KmkqsJkix6ffMsr37UhzeromvMBuar72xVKstoD7NMZrj7GNJfhTufc7Xt72sB7uXMLG4nCUsPDBBPw",
  "key26": "5quxz5HzGyDGWbmWvLPudct6jkPaMQpjsTzyaCdWCkE5m8ANsL7dm5RgCYKUHSR8RD9ne33CzqSGk5qYYALxxuUe",
  "key27": "ZygrhpA2ATM6Ld94vpG2t2otFtghJwHbhAK8tSy6ou8AbvZnoXR3CwhczQCwtoKjF6pvipNhhmR75iezdCuEBTS",
  "key28": "3oPY24isXK3PS4QPuz5cjq4KsXTzUrhSyUthqtikSz7D4skBmig35zSMF3nHd69GAFnKxeCX75ffmPvZscDuz378",
  "key29": "63WFbtbgMij7WmXJvmQNw2VzKy8YC45dr4jFYPTsvGxNG3v62fftN8qpZd8B8rwT7NnC2KofPPEahzrhET8Lq3dy",
  "key30": "4EtdoVTa556GLDQfAGyoa32tV95vnWF9ADSqQhkzrQhd3ZdU2dbuYoGK6R8apgKpb2oPvhbYKr5uJS71Dwa2VGxA",
  "key31": "5CBs9G888opoSP7Sr7186YSr5zk3fPmmMFTAzuGza66yPCemPk7qyFRFkk9JmWoz9etSV6AArH92xdi3y6NQj6eh",
  "key32": "MJGBHeaNEXDrsNgeZWJCBVGfqbt9XqtVxwAcRGKtfaNLcwwGus3M7LQcCWt6Ecmq48XKRLyz5wwPjvcnAn11VRv",
  "key33": "3FUHqZTLvEJf7tpjJP1MR6pj9JQdJdMKhocf3xqbkykrPceBDf6K3bt9WLRbykd56UxSsvbhDG6YE7myADLo1A2j",
  "key34": "5TxXxUvrVw2SPNrP5oUQ6nE3t9o17yDp8tCmfPaY5WusQS68bGVNZeSCyTAyDKB9wwZtWVH36RcK4H5SBqTxQXD9",
  "key35": "66J9f26aaUyGLfedD7rqWKyMv2Wn1ehDZBhzJWnh3DyYQ9ywHYLgn2uqokJ8CANdZwHhG68rqPAuz4PS45eX2EQp",
  "key36": "3SNTAsLxXJV3W8C2HKXa6JWZggXRKHejWecQHZVjz48uyPRuCqsmUPXNbgK2rf2CQVCUadJoQJCs9SSAeJPuwa2C",
  "key37": "3CDDWKR8vJ3tGrScfukpM5PZYiaz6qDVT8GkSebxwpudMrfMdJ26G56151VAFPZjFMGSEvHRyJNfVLjydQMiGknx",
  "key38": "2KznatRKkLc9X7zRUQMGXbr3xWc16iypzTHY6MChoCv21Rseu3FtEN2VEHh4QNfX1V99zFFhsCZWrSLzxTg99Ccv",
  "key39": "5vfHgCeicJQLQaF44Qn7g1j8uCjY21pE7PQrs8hJThZ8rBw5S6XWyZDKv3V8vsHaJTLrTqndMrggVyYZ7hEjamyZ",
  "key40": "4oHf5zNyMQbJkeqTYnUuciFXxuoCJqbhxKp6DKE5v2EDKN5aaZ9gqhj774FZ1oLRsbDfcg4a8ehiPhxGDcxpb96v",
  "key41": "2N5euWt4M19E2kEJbMomsn3Qj2CC3qtTitCU7MMmniXFeSM5kGE2qhxrPB2ek25yXWP5zviCAdZRMxeYbVjP3dAC",
  "key42": "2Ex8DHAPKeLqqrac1KKGYaqvPx3Scz6upgqvLbt4ZXDdX4EnYr9k1J7L1GoyFEiSwGuwLYkYESMcARtjfA8NN4hT",
  "key43": "59aMnNLufutTC3yqhiGXn2zcwkRLv9Euds1HLR2i29Wj5w3uyGxMzuik9wjBtij71CKg5R9emB9JgDapd3UURyRi",
  "key44": "5vaEuhqq3YgUx7C4DGLZvKi3S4tEk786VHcYzbV1ZTQ8HgF7qzUG2mR7QHy7DUYBhvPFQz4g2sfPN7AxcRTjQsxP",
  "key45": "3N7rtnXHHEhPBk4f83ssdZhWv1SGAZKqHKj8tXXxnsJCn6ux2NNquBdxCuH5hsSBWV78MYqmZEHUGxo3EuZj6NcA",
  "key46": "3YcUWPBiT6eAfcJ3SgXFN1dPGgsgSjH1YwVceapmPsPk3ofm6ssH2fLVqXpMApKsc93Zp611YuSNvQHNfzJUHBPL",
  "key47": "4HYbRSJNMTSvP31NsywGFg3gypAWMuaoNgr8bWmuCBWxtW7pmimFJBudUMbrRraJ9QKxZDNtfQy2FvGMkaP1xJ7H",
  "key48": "5mXYY7UrNEWGYWumpLUizbhRjoS2wL3N8VKukMfPuPimVJ6MEWPM9hDpXf39vWqTBLcLqeBBqEhATFt4YCUA1pHa",
  "key49": "2vZCTthkTyK4PAbjTFKHmAUpW1nxcvBoeW3ZSaQ64ujzLCHo1fPjsAyrTr1YX2rDMQSf89ZapiUiETSptoMedX2v"
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
