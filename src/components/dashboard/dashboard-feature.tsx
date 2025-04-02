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
    "7KggTCegsjFbwDFDQAFyGRk7McXf2N6bvJDUT7ayt5KukBuB75NuuC4UDZfjk8f4mF55s9DR8Aj2MxQRC7qpBWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZyuCLXAz9DWpxjNfqm5jTm5BL5Gy26AUEbFv6d5wNdPPmKtjw485pVpPfCLpNECMhpr51MvrmfCmkjsQWGzBxEi",
  "key1": "5C4cxe2rCoyfV6XHhLoVjycDZbSSnBvC7XM12eJoFg6mFwZvTEd5YU1rVfwKS9HAhH1rThbyaNVvtFFkbstdRsHP",
  "key2": "33SbdLhavREJdPaHK3XXGR51je4EkyQerNYPjRsyHN2qPbNaKGcHPUTMfSp22EdEPEH6xTB7ebftqp8fZ9Xhx4PD",
  "key3": "2K2TV3zpPuJXdhBU1G5qpCfxNd4qeD9c5ZmPB8dHPExy9LnQNeRzzaQqAFAHXiMhdKVC1ewT5VCeiC9GqLhwtoB3",
  "key4": "5KVMAdYJFC6NgD9vKeJoAST26aytqmgJBk99qJbem6wfzLLrEh3LwJUjH6Svw7o8edE2CFfjjPo2R3CbnFTxn6H6",
  "key5": "VdaniCB7AQsZZ4nwEk73BRyd6SXT9TuGBcTqJ4GNrQHKKNieqt1znT3nYuzMF8SNZuzqtJ8phvL6ZNHDCJmCD8u",
  "key6": "2skDkD9GvBJmjFhACUxpwsBoud7zxXuJGYJ1tLP9DmQvgGe6aujQ2W2rihx9nkRmTx41MndmmwPmCBWMtJiSuqcz",
  "key7": "3V5oS3k4cdUVfERSVKrkXNfVHbjkcasrKoMhRswyA1MiBVgKYzVpfY15miWHDqsHR68gaZrfQm18ZpzSCprxTmeH",
  "key8": "2sC15DDRE3z5SWwu6vFTaA74QjWvZ61NAsYaxfBoNjUofwr9JqLCEXffcuexpu3YESBMk53tkRzRNyd1LuS8GcL9",
  "key9": "32uD2wC9bSdfH9xFLUeto29rgtJcp5zK8EMLzHH9urp9Wj7eMHxzgFqDLDZWZ6mJ1NRGceZnQgeKBJm3Wwhgw6GA",
  "key10": "gHPW5FUwXPyJDmu9Qa9iPr3e61CHE4LSv3UpprKihmYjb7HyvmBrGGYXLcc5pnKVavqywvQULoWaNp22sruJeSB",
  "key11": "2j5zScGU1cYmo6eysnYipC3JXSYdB7LotnLirYPTxmZ9zNSXtegU4kyM9LwMYeaoRkbMZzd1o9pWY8Q66sJbFHqR",
  "key12": "538SghTMe93kmvFjaFfhHWUB3hCb12qdNBEww68om4K53cJYTuiDKTAwUQV31AKFjraBp5P3LazRtZgNAgRtLHpb",
  "key13": "2knkJVQpMtsCkMU96dLpy9Zmdmyub7mZAsH2rgN8ke8aag4KZi7zYVDNT9w1X4wNdiDr5riaairoybb4ZBVaSPQM",
  "key14": "GDBJqoLZw7F9SGYNh3KRxAjMng8mZWviqvwtMYt3oqQR8woRgds3kVvYEjv8N74wCDMFcoLUHpsmajfgzUecZrM",
  "key15": "2p2cyL7tXWrDRQWm1WZHhBej4U8629ci329LSxWDCKZv1G1QmE1StMBxvTEReU4b3yDTEYKU2JA3ARTFRPJvqABM",
  "key16": "SKkhnyU9wmJf3m1QEzzawnoYDFoU5Xt9W2RiNHSNjSp45ZuDZ1ZYXn4MMeXjfgLP51GMy8YLU7JPG7cmgytbcmz",
  "key17": "44u3HyMujEEG3wFrNGGhRvC8Dmdgm1BDnSrBbm3sF5wjiDfrsfmxqYWxnWNqsywbevGEmMJ3PYABDLgNaarev7MF",
  "key18": "4UEUvK3yYHU7Y7PMAVnCLKCkuqJcXCSwGGQoqPDtiPQVqpSpMXeXQTcZPJNQgWY6jmAufKFKk1GMqUGtn9zBvhzb",
  "key19": "3Hi912FY279Yuro4hxYN9gPMfA7qPRVkZT4uMtiNRkhqQqtYhqW7yRYxHNaTNQuZtbLpxzqkqwZGqCgJJyhTXsV7",
  "key20": "3RmeK5FfYN7DndmPKdUnJzG5Y3idGTjxCwv1C5gg5rHZyVqSrcLHHxh4xBNCTg4ydKh9YXw9fCEgxegyhvwVUbAD",
  "key21": "5sR7RpLd36gtELpMk6UWnuZrngdoxpJRfDtP37mmkXSupzSB28mL59J7E2vNdURLvnvBLexCVYu6EfYc2XUrodXL",
  "key22": "2UHkrunG3B9PtbRpGtmrUFbD1tKErJfRLSpPFRsoC6GbfoMqK8pFocgJW6Y4puUKfTPA9x5Z7LNEQjDCV47o3bAq",
  "key23": "MMDkVLxoS2ZA4jFx4xWgYqznvtq4HLG3mWNk1rYZivBkhhkCBNMoyoDvHuwJcQQNE3RCSuookNJ6U4nUt3CMfPf",
  "key24": "2m6F1XLUvbadGKPHcUQafXaNJ3PZhUruG4spiKNokTuwiwSdXru82DMMB1fnjJUpCpbmbZCUns4qfq42sgGr39RZ",
  "key25": "3t54D8GVnAGQ27ML73EtpVsBhgB6m86yCQUFPv2WvFaiNLhrvkEsEJQQJcBinPLYCe834EMTxJRpWfE4jD6nQDsB",
  "key26": "a7hrV9Bgnuib8Xwi7tDLS2j8bi56tHjeWvYyXfxu5z3LxRdgKV9M92rRuJjMMncu66awLaBSMMxWqDQ9nXi6N1s",
  "key27": "9ZigfUwXyHzRQgMtDX25cYcemRTDLjV3rsqdfFsHvkRemgdNJ25n1PHHW58jeJeVmfz4Spk9BH2QPQwC7TWpT36",
  "key28": "4bKahdqggmAyhHazL4DfBHj9UteiUJP7YrnYEjVnYVCfcT49FjDfYFJGBqcMgTQtPoTokywxeEGNThYuLMvKU51M",
  "key29": "3ri3rtMkjtMpT7K1hVXBn9coEt3jopR56RwxDsbNUdyFkiMGbhXg3xveT8RjoxK669UsTmdJshEa9KohkY3hPoj1",
  "key30": "4P1By7WHdaq3VUsge9BAn8tyvVYwvX1TM9anct8SLYeYSBV5PG4ZVTQdiRbxErWtzBG2CnE1q8J9P1o6xLfmDEGn",
  "key31": "xzeGAHvsmWafK82D2d3YcTK8ERF9zuoe3iRZTRwENaq2RyNUnjVyfj1TdPATwyFQ5hanPyqCDh9hR3rhgSx557Y",
  "key32": "4yy4HNfAn2ZPxn5sZNrrQpKSi2g7g2pLs88KkiFs5coQZd4P6U3oqsSujKxVMio2F8NRLS1TsRuETo2jnZAkTVBy",
  "key33": "5FinYkZa1efkyFcAbdbHmByYwnmuGe3Uiadz8BkfrspgB7FVoGPqRMeeRcqfm4DyENpnP8bzriepxmj1anHbmk9E",
  "key34": "3VJQioCuwXhMpQ8RJXcrPoaG84Gzqat6ZUcxn7YKcXS9bEbt5nA2NKxtcKaqitLUxKEPDNfDqUMZ1XkHJN3oZqfv",
  "key35": "2fyXS81WPaLV3ML5hFiXfLanhj2ErGxSXqbnHCfgy9fSyMbVzTTgsR2JCZNDTQuQY2Ks9mtdKYZnS77yA96qzjMG",
  "key36": "3vcYXK6MSsYJntqviQMqPYgw9EUSSz7ANAwZPuAd1E2ykQ4jncLsniK7rtW2XxjvanPtK3XZPnFaXd6VeqDLEas1",
  "key37": "61ZbfnAr5geNXZaLFbXyj88BRkZADdRUwedKnSYttCToneiQux4BP9PBxX7cqcmLqEagKrTe7c6bNZHXR9KaJfkr",
  "key38": "3JrjGRJt3ozfdeDzxDXKT1ampYahT7azEmXdeALAAqKcdQP9ggGbCyD7LJi2XsXwM1dA9m53rYpkXCBxRiSHKxJ2",
  "key39": "2Bc1r7RVBtBEhY7E34J2WaLMV87rUVAGBw4cKpyLGsB9UNnksz9oDEABbRaNsemWzpeFwD9GsDku7pBczEv4auTZ",
  "key40": "5u1cCiVCGk3SpJn2vgweLp7UpCnhmunuSSAnPaX6fHncwDbNWjSB3yXK55uxThe1GfUraEpfYH2xRjPYhsnHvUko",
  "key41": "ND4H1FQUiCoEsyK9g5VdkfF7eGi1qSJCkho9XshpGzQxVPTFhDsWaTq6EzQag58WHChxZzwFFpoZtanYqFwMS3k",
  "key42": "4AmWgEokHuLpzXMp8ve6L56LKa2DUEJ8oL7pfdzQ9epHinV7r1uyuMmxc3L7aSvQkxC932MAgXKGmegD3ygzwvL1",
  "key43": "5MFymTVGy47Had11JaHnSc5e3Bd5kDJv5tFBsS4cQ9gjh5bzw76Bdvk2ehFuAmuyLHfnDoRNv2mnUXxFW35WaD94",
  "key44": "paXJCtPkGqi1GziJ3ZiC8RidRm2Rbw1qpSL1GLKeWqUsLJc9HZ2rb6KtrMmtXSDQ4mceLDQFWqpEwc6JtpvaGxn",
  "key45": "29dY1pFuL7ytjvbZd2UwHTb2oe9MMcAW6565PnGQ8HL6D8z4DVHiBGF3zx1Hxb5rZAyThZp8hXNHNgrwGbMF7kYw",
  "key46": "2ta6W9jU4dmjbMXPRbhhb2Dv9vv6dw8jqAaCAGwxzFhxATCf97zgizjQKTzkNeDoU3vG4FDoTEGf28j8WHeWdW7V",
  "key47": "5fGcyeioFQf1vq9oKEdv9JPXE3JzGR5uV5GFrguHH1KtoHHE31mLjRmG6M643aDxGyo2pvgLC3Bd6LeJZcGE1FjF"
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
