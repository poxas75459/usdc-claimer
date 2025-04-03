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
    "21TUaN3qWMymS7cTjSZWEGjW5a1BpnSCFpFiiR4V1Nh5Av2SQTehuMKLY42VBoY5LjfDDZHjHWymvFrvM1tm5Fzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pPTNL3iksGd3adtcKVZ4ZZozU132p2tcNMwBzLuMVdg2W3ddg9QgwZXoFghFedsJ7DnhErHHyGyiabeWTYTqZT8",
  "key1": "3vhg5pC6fzMjFV3uEHuWiWDuzgihUXLiQz7kfmNboGhEU2FZUTU1aha3fMVKzv3bkbtuzZSv7edubRDK3QqvUHyA",
  "key2": "2UfciRWKZNAFEAZkUVwgw2MJP27Npcx36BVJqmm4Mfswe9nZMmE75rPwYuF187ShSV7WaWAroQDXyczPwHDw5h88",
  "key3": "kYpMRTzYwrRFzcGrxmKqC6gG6TCffk1ZupcSKE8KzVwxuTuNCFmAbqMr5KPnT7WdfUy2w1TuHD2Tc4EhuQZwSk1",
  "key4": "5FkZxsPgZujRfFjwPxb6g6vNc8jGFHUDd8gWNw1jxhjqfzKhLd7zZaE5doFEWgZkrnbXpY7To49ZvCiprSzfxb18",
  "key5": "WSxHForqz4DZhNAVcCvA4zhTx1kV4V8dupcChuU75MXyKNkgX2Xe4qNFHNHPbsvgo2eHx6FkyipK8Z7jagxDACA",
  "key6": "46nb9okJpw7vahcUTt3oYHzmZPRDVR4TXfUVHNH9gpQhz6BNmHz6vsp1j6jaj686DBub4cWjSpuYDMh83Y4enXRD",
  "key7": "3DmasR3MSC8tzpNEkxW4ig7NTfCCNnkKXc52mHh2S5YaHSHBdfSAPZ7tUwLkGZoXFyz43dcNFzfxnXco7b4fFGfm",
  "key8": "K3jDeajrotJb16oU9hsNLJ5wzmxRBzSsi9jNo5qDwFzWTCFYXjSQVzwpgQvjFzTGiqGUdz38U11JTrrVF2mh1nn",
  "key9": "2JFkLGz2rcPzPWCExGcTsizfAoor4zPAE9XHqQH4joQki3itJmLHQkGcUb8ccCXtDm42sVaNrDnbpzE5c8uskZCH",
  "key10": "28GaBUvZ1ugW3nrSXjDC5qrcYM7wnjUFxnDzaeRDxguwcXB1sJQkSfEsthCfHVdKprDMCY4xN4D68wAx3ZrwP7xj",
  "key11": "2g57eqbSEWoaMeYJkuWgfzEp1vYWjibr2TMwzBgftqKo7myJCdKVHkTCexqMhHLoL148bXi1TcGAC6w2pyRnwh3i",
  "key12": "5Cx18S9d42ueSUXxEGhyF5132Zyk6Dv8WprB7Wqdhf1ukScUw4JudUqv6JaCzfubJSNuScKFfGJhREAA4Duhoyed",
  "key13": "2eSfLZFCyuutyxoqSkR4SJ8mbeHBicf7bUxZbRfWDiDUTNmGZnp71HgJr4yUfwK77tV3S5aLaR2tBVQ6YsVfNNnR",
  "key14": "5kArQC5Rgk9hCkMNwntBCDdkaT6FCrtem5TjAQWreGdvbNBx9t376evEUsLev8TiTidfUDS5QowMbmTPRPAikeoN",
  "key15": "5mUNM57qC6XkNZkU8GPKFjor2bEoGUovoHqFAxLrp2WZ53PnV9U9ba1BzpAK7BtAyjvpEziCyG6F68MZqsLW69MG",
  "key16": "3KE8a9UqUuagJx1QUeecSL67HFyWBDavfZre6mrXYJMMy3rr6M4bPFan5QuTqeCb54fgs1aJTCpdgT5HvFkXKKJP",
  "key17": "5t2nNo8TDa43y64KjggPEkL7HS214Wv6QSJNVCULBrrXBYyPDcZeefg8HJPftz3MiB4PtEhr2cTuTY3qgrdLDu23",
  "key18": "adrgGNRkqXh4td7bYRWmxMJPPvuNdXpD1Eib3hVdhPssipRnXhShcX8t1GGsquUzUMPZ2Zopf938cMqVRSzV4wL",
  "key19": "5A2xtyAaf9m9wNFGANj1VUEbibvVKkUxmhXGjBPxxkymRbsr66xnCHWYExC46Jooyh3r5Zc4rkn79RyT5Zh8n4dr",
  "key20": "2r6X1BhkAjpCgV8SWAGwsuE6AdbtL3Y9VS5XiHuBFDH5uQ26bYFkjuwf32YBTpfn3cuRiwNwFHh9MZ3Lg7LAnmMp",
  "key21": "3QMGDgUm3T8uQdhECdEyTf8HjHiJSofa4YkeN1quu6d1ScUTyLgrMQWS1xKjn2dNtX5jFfsatGPGkQ22bWWRzwqo",
  "key22": "Wz37A7t6QADMizk1RbW4aZ4kW2rSvYfzWxeppGThwApNDiSPdtZHABV5THKydAzLrV9bGHdsemtTrxpne97BQPT",
  "key23": "4tpgBM2YKexqeC3mLpCW7ENiNeutmS4wFGZfhMapsD5x9txc7WT9tCnf9jen4rhddkhR92kmrRjS1F5n7MrkJnZ8",
  "key24": "FHVjHdVdGrSpY1ujvHCyeUxYKN87nzoowZZBStrCBCPq2sbPtxgvug6GTYhbSRhE7y6bRP3u1fGqAv5yyCmLtEn",
  "key25": "n2pDinPtYBXTGwxsiPhqxnxHtvKL3XJiFLB7r79iRrjGbv6NRYBwtzxpFyyq2q7Kb6ujVa9a11ggKo3MpMkQWFz",
  "key26": "4mtsjcVKW7bsgPBmoWHtucgwyBtVoYWrCSFWXMCLbYbj9waZJCuV6zTTt3DQuJwR1MNsHNEM8xt1oTtGvTH2FTBd",
  "key27": "FFvVfQaDjJz73GJKPmK2Ye1aTizwrrgc8VsVrJ6tNmrxRViH8NywZaDmaYfbam9U5CgC6AVzURJo78YJdnaWbuv",
  "key28": "2JBPAeEuwSpcR7o4nojimTCFeNdCwA43H23aNTnM1m71xT7m9mLmfWgwDQRPYtyHgWpqMcXEepSYnXqAaisrJBcX",
  "key29": "2qkkhgDcwv3HdMx7UXdfjMVaaizA8wVoARXpkUBPaNrrji67ftjrAvsD5Hn5BNHTKrtBkUxC6jLSCTr23Kx6yXuw",
  "key30": "4fLBDjNQjd28Ph3tDzq9DBRw9Hw3cVBoqnbd4W1v7yYLbfRSzfgKqBZbd2AZvNUhwXbWg7HWRJrSiicU2kpGCTms",
  "key31": "pSLVeNADT7ojQKXrGoVMcUNFrDD4Ve8cRc79xpeAFYAZRm59f98UNdqSUrWdh8yfSSkVNRXqU2Wq1AmxY2txjsX",
  "key32": "472sW2xEnXGFuNg2jXiM91XZxdJUjLyRXBSrcYWVUpZLXpV7rZrLwU3tvmNRc1hHrjgcAMJVxPt96514qo31bjwT",
  "key33": "31Ho9NyXKS61myG7EJd9sSkxWAkt5a4gXExixBk1qmfnaM41uVjwHFExCYfD2Tts7x55eWoCvpiLBTxhwj9Q95PT",
  "key34": "5WuXwd8tGQTZHw1u1VbnCJJRaqVr7PffWAod2oiDkkdED3C1ZmqMxAKcni9aecr3ZGAVJWsgWabZqDtuL3HvCo4",
  "key35": "w3BJBVE3Pk5XjazpWgyHTrCoKsKe4dLChzZyYXK5MxGEzTFxiAvYSEvfkqEqEpFTj3RXaoZg3PuAyjvSZVQnjKb",
  "key36": "CsPf2Hk6Tz7PSkhuUaKFQegvME4Jb4yhQoHXjK77iV3V4FrrnN5mis1P9FP4zSH3z7Cj3GxSU8rw5U6CTTaVNmy",
  "key37": "61Wc62dr2xETgVNNt2gpHFGnUGDBXTFVYNU7QyFvgm5ByTebi2sqrEKXNiWuCHXJ7aEvHHWseDhWjjVi5YZWLDAQ",
  "key38": "2EnqMKCADJjivu3YJauuiqdt6oC7XdvFX7xwyhmEiL3qD4VCvcWmNZrCjkMtGiyiDSAES4XUb6goFcafir2s6bwh",
  "key39": "4nK2nDUM6JjEViYjmV7So7FGJkjzz7PbA3vomZXdJfu6raGUiCoCcE9wuVsNLaQBgRzaLBRubg2dfG48qvJnb9Ho",
  "key40": "4w6SWW9N3T1QnYcGdF5N1qYTay3rFKdxwhubg376Mbj1tJRBeGqWzHyxbeHGW8FJeGMgKuakVv8tmV7V2XhRYq6s",
  "key41": "5KVtVrrcHwNtHgWCKBhMnZEx7LFeokCjNE64SGVj26D6f3LUoZvQJXJ5K6Tt28ue58tTedi9b7FC1id9C2Wfbo49",
  "key42": "2SVDzqR1q1EoZNjnszkF7Ry79y95wje5u76iZeE1gwEFEBEne3y53kpGVKaY5HPgzEvUX2dww7nd7bKHFCdaxrHg",
  "key43": "5UHX2wxQyt3RveSsvx4qadtQ6p5WvFEYtpQkmug5JzTsAk1gNkydYj3Je1ifMmMpAFYPfLjyJPqddfLy1Cc8sPyh"
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
