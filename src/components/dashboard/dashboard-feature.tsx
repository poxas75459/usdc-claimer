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
    "4n5ZibnkdnECS8AWBTED6u3pJ4pFBELDPZ1GBnzcJ9UZTstKDvSWvRjbzEo9R9748Qdh8EdrqcS2r8ruTksZMXe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vbMRLSzRt15E4MFxTuFeAkx8haax4WZaeyxZsA8CxZP91X8E96cgQoK93QtoqeQJ78fm3Gka1ThR1NEGXSbkA2Q",
  "key1": "4GEZWyQDvuVN34tfgYdqCUfUwynzwvQgWrCcqDb8Qdg4nsEzRMKkD47Jce9RazTBVJowzbTPLLBkQjtEsCrUTr2p",
  "key2": "4UNM59L1wyQizhYAfDCGQ8SGKm27oWNvknPxRW2dckoJ2c5WDKZWjojLf2WknyrqXW2guTbEGG49NepvhJzfRMJd",
  "key3": "bVFBMRicyC5ZDZ4k5baXATXmpTnDYhbFUttiAFex8EmKn843SGXFcTHuKCo4UG6fmaen54XgzJmPQoAVwK5ZNu9",
  "key4": "5uJs6S9Et7NzhGchoAFFMYKK1G4gvrcyVBqpB4748jHYitFSMAypG1nC2QgvuuUwAyi7abd7X76LGWCZNh37rKuw",
  "key5": "4nadrCMdJCG5Yksqp7edQtdfWtbiYyRnoNtgJYysPn7WHahNdH1kn9wQK9H2GNRTngZJSo5ESNPhBFygdu7FFCLY",
  "key6": "44sfCE9BYHpJcreSrgTqX8tuK9x2FswLC52rDwvarrcxTH1aCDQ9rqnhKZszR1AxwYGB9tHQ1ugsojKFV1By9LJc",
  "key7": "MhDk6txx6Gt3dD5bg2wY576smM4GcrNobwpYvpFy5dWdhHUkLnAt66HnP6aGFgrHPBhLX4xnMgmXYJe9XEiQ9xx",
  "key8": "4b5nPTgi751k9QB8txLCDtneGhwdPsM3d79AgMp1pDTv5Xjkiz8uu23eQQ71UT1aoVtqDixLzamitXzErjoX66YT",
  "key9": "Uc7pyXZFs8DbQEsFyFWRUkH4oZCRFytseCCwbcQBdNg5ZAGRdcqCbVYqkGBiEVScwTYApcesV68RrE8S7a1PBEk",
  "key10": "3LZouJQqZHL1vMzTm2mHmDTUCiPH6sL3XjTCUzY8rTgjYt74op4ntgwkfu8GENRdELjzU5pLZiZ6mp4t2aJFgBqp",
  "key11": "45NZy41TxgE8T6yvR4xSb3DE9wRKobyAAMJpq7NHvphzUL6uDJEYMK7am5hmguou1nC8ZMWVNHdm9X5hgGkYoNBH",
  "key12": "uf3amBhyy6UWx7a5kbuNRLpUKiverLZQixb9ndc1Ue4eAt47au91vHQpEa9EMQs7tgFSCaS3XiCa3kfykeoaaxR",
  "key13": "32jN9v1DHkozJ9LD5AEj7EeeMjENZ3KxaMRY599u6b6oXjPT4t3MBx6cux4c1HSfg2LASvvDzEjmfCpDJmdLYBwg",
  "key14": "khX8D4X8ZsYnTuBZntTtcNHji3PJ6gdFxF7ECg1r2HeRp63X4yjydpSyvHxX4yrVpWQCLtRVDw4NE4v8daVfgo8",
  "key15": "3b68HEDcihAACCJkXfSXkFXtwWW8dCrXRXDDH6jZNzSe8RsHGdTHNyMNkSyvxty6Pp9uKeSNNR3DHVSttNJh7Muh",
  "key16": "v1iVHRvDFnd8zPPjSLjTTnbx15pT7un3DxQmCG4nYNjJVX6nt8xZ1TfECNNh25JDB1xoUiEYAmSerWcCoo8eLJg",
  "key17": "nWrGytUotKEBTYCZdev1VmKZSeibdVaq7z7ZUBnu5dd98bRJ4sGLB5opZxXdJrBPpDc4ChC5r99s2suEimuTw4M",
  "key18": "2sRuoSLBQXhhBC2LiYzyLUXfX4SXH2gc4c1d3QtdFX5ofy2Vt23yWKaE5ewKLGeuZrFLoi6BcMcG8UJJemRGGwKC",
  "key19": "AJg3fBLkdErJMs5oK8QotzsDWLQkNsMjrFKKNGUP4hStkmPaQgbkM3ZnKGMgMzHStKqxSJVF2MVohiHWTGaWyLP",
  "key20": "chf4QnNKD871MLpf4NR8791k1avbVWjsYpys8EDHMG7pG2bWrW7goJmTSe5dc8KdgHSEUYfCTMH7uQJV8Nw3Tm1",
  "key21": "2diKRFskkFXTWxVER9kz5apSz3yj4idaF6FWcJiRNZN6ha785iS9Qh1izAJUfvHsHBG2Edg4xF2VnRMhiEcPANc4",
  "key22": "38j1HgaBS9byjCGoHvtcHeGf3e6Gmzm4tarFAn7d4Hha6AoHEQeo1KdaUrwgQFkbyGsRA6dVht7AYqkzpUr6UPK3",
  "key23": "Q7FuKgSuiif5kcF4CsW8dCJXdJv5YBgkbcKKKr1HhPGx4kpu84oousdEw5gPu5WnaGik7J1fJgKHjLHuj98QJy2",
  "key24": "2JfpwbzBHLAS5VjMXm4wUZz7Pe5iyzoKf99Z8AKsxUrcbTzc56GjCjzHE6jsBsCyESqVxEJodmcVEjNW7wwifdr",
  "key25": "PtwLE5aiouUMP55WNzhB27hmW3i9dRLFAFzHFdVVKrKkUeSmoJCrfCvoS1x2GfKRiDA91D8do828YvdbAevT4QQ",
  "key26": "5fFFzHS7Cto1scomtx5aGquW8uHdbuYd7K7SbYHLaVqNAvf2KZC1BqfxVnny81hxHTyDmsa6ZHYj4Av6Ji41mP38",
  "key27": "3yd8RrHKyn1fuvMhWivFDnbvun7eyJwnniFzqxJSkXUm6k2ro8yYz7Aa7pk94C3TZChmmYcpJYn885i836VD9g7w",
  "key28": "4uPQdyUjsjjHjNygsDxJwntkjh5aYuUafhCm27mptTAJ6a6mAEf1AUNBCc37To1b7Bz4DJ26c9zmAAsCuzFfNLwB",
  "key29": "5Ej8PFhfzApe2HDQBVxKqHY2X6akMNymddCypbrrpe4PrMab8VFS8cXoFBZ72Swbs9vzfCbhmzfHLWVVgS6955g8",
  "key30": "5gyRBWa8Vsj2yK1oEn8hb4b6qFimRRf9memXQLqf6Ve3d2XNciseLGStzvFkh7nbAA9r7NXpfuhCV4PJi2hPsaJ9",
  "key31": "uFZst6oYGQpARYj46j67zR7T93r25vkBJbqi24zhW21oB5fuhMESohTaZ3Ts2Gaab43eAVAcdiUbeTvn2EC7CR9",
  "key32": "7de3HPxHvmc3pVta246BLPBKexLDYEP99GAC3meQwnMt36GLSMrks4TPu4B47bJyXrsXtFntqQ1JMn4FtnwEMnZ",
  "key33": "44fEBBB4YpjxES2s4Dv5wsqSieTsEe2heNFvrsqz9Hgon9zX8wzT6xrrurRgEkTiThFf6pvyPBp19pYU6MbK7hk6",
  "key34": "2JoD9YYgjdVtixuGcq7ivGgaucQJhgK5t1tXo43QEpDKucTWsq3QhBaUE5Magdk9gvcoDy1dbS5xsLKsbSxtfoyN"
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
