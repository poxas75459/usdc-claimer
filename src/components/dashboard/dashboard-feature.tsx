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
    "8DvJQmgKCyiHzMfUabPUxCt5iyuUWCRwguY9HChEfpUgg5R4go49P9fpCxfaNSJLwyFT2G2Kseta2rDtdH3eaKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h7Sc5geKWMTLFa2V4ms7H1qHwKa59DHbVTZHykhCm2FVgkyMiBsXDcekhNqsjZKku8m3PeGpD3NAfetmJq9ZP2x",
  "key1": "4uA5hex759iKTNRV54wtwRFpc1wrkm7rMZaURxrsR1ip8ytWPXnhp1MerJB3ALaPefMXvMMVrGp3Y6dHQBopTBsN",
  "key2": "4pj6ih2gmRMHhVa3FFX9EKm52qR7qiynTcHx47fYbW7RNBsec1gjNtKmvNyPTk6prMEVGnphJJ4u8hWRX2XqQzBv",
  "key3": "4FvEB8KSd7wc6mmxtbXSKxSY4nbkAjDmkajHQvgujQV2yfdaZrgUz2Kf9MaCHLvmj3BVnxdwQKz9jQCf2qprvaYB",
  "key4": "vrE4vaXPVBdBud2KNXakN1PCfQhnQh3kkvyQoLJY5WkjES7YK2b5Gy3kkjFoc8DKTV2RzqpRMdGzfXGEFj5n46L",
  "key5": "4bBfmJzidU4CDv5ok3npQe9RYYtGZXRkHKwDXj5cGe2Bx2CjQSRMzvhrQWTxe8TaHPkhGsWhHBxWWyQ7XFF6rgK2",
  "key6": "2FZLRr5h6kEMnXCoxye86bTNhzzpyC5yC9XgxC15fCafkygWY913DfZNt4zLs4qC3RgUz551qucv4CtB1x7bWwMP",
  "key7": "3DVoLYHTqKpVGdM98rWGAX728hDdE6dWVRjEyHUswyBN4LD16hPGQ7sGHazP6Q97omgrHvHQSeWY3xiYA1NEc9zp",
  "key8": "3knQNLGF6ziHtwgQexjkV6ddA1KSCAwfztkVyBct72NSMJyj14hzdAfLJ7kSTSb6jMuhSt4m4WYsgjWi9NJmMqdb",
  "key9": "2Nvs8pY9HcUxx8GEszDuwhm1nSMuDbAZ3RCZJL1gHr1afB3s4Pgq2o3USvaZ9qj5TZaoCEaoznssqCUhC7tsR3st",
  "key10": "63aVrEzcZf4pXTCB5Vo2d3xTTDvHqKkR1Q5aCZzj45ttSDosMEwxA5WGQW5PbgwW7SA29svyZSsM1FRMP25Cjut1",
  "key11": "3pYh6VZkybDtUtppHejqFpztEKd522G3V3kwXhPniug1wqKty8C9kmrFEFRvhmbQKwBZbF7387Fq1h3f4SJwFSAu",
  "key12": "w7vNypx13mbZtfMSWJrY8CqF8QHwXkZgSy9AGLdiLJEArKGoY4cbQwmm7W3dKSjByA9jw47vTacvr1u2SYfqNwC",
  "key13": "cD1gpF16ML42rGLxMWi3W2BD2MoWfXcQAnBxQFTzh3ju966k8GVSMN9MiWZYvwBXL2PkPxiH9Fj3JiMBEYYZqxc",
  "key14": "4Ymv5aP1u8pNhokaeG2MkE33qhVPAmRZphXQcDVdhvKHmn5a3Jk7df1JHKfZWGhgLr8x8CeTmrFBiwCZW7AiYv22",
  "key15": "556j5hwnZf83zByhdqytSaiG2Wjf5oWaY7gcDsCqwZaDfetLfrDAio5TYjoZYw5dnVfdnQFyqxDjM6QWLAxBHLoF",
  "key16": "2nJRfT3HHPYqUn3CZNfkyzK8qY21VpUQXzHEtP3nzcjP2d6FxL662Pc9osJBFiqKbxnNjrCgLuj7nzkfMtcNigwv",
  "key17": "2LpU5ZTN1r87KUQeAtyg2yStP6N8b4oRev8hHscYFQbcXLQfuwrPF7ayJbYSTUQFUrpXzGBHM41uYiwaTiUhoyGy",
  "key18": "FRy5iNgLup8dvoeiDYsJoHCex2c2xcevhNX8sq3QxPhL68YJ4CivnJxNsYkFegZYb9MtYDcZ8DbJgmpQHMNJFwt",
  "key19": "2EkfnWqNxSLsWmHLhEmzcZCSyvfnWQb2tgQphTEAmAxqR11FPwZwbSAD4E5Rzuf38Mh1jYuffdVw7aEYj42UU6iY",
  "key20": "5oSPTwnQY1WFmLBUfWHXTAXjGXUT1PoxWuBzWhnKbwFw3ryba8yCwRSV3NYnSPeQ8PG8XtksNxb7JFD4XrUgBt7Q",
  "key21": "5QdpYnyJPJpMopchBnnswfymS3gTb3HXDQa63G86FzFeZA4MHbHmEgBLJ2gXTPY5Cw3qxkFEBKj9EFUsizbitwoC",
  "key22": "5CBbWHiqF42XuSZzbGAJKVHagBBKg5DVkXhkiLv69YT4tEMewrATPcUkcysFZFaynQJZQCPaxT5CQ89x7TEhtTWc",
  "key23": "3uDUindVcP6bqCEhZySJXxZjgrXA5mkzUBcSboaPnu3rDMwMAmMoqpRdcjxwf8HDAhHypbg1HATduYBe3LYTB7Vx",
  "key24": "kcUVeVRLp5RGZdUYCNuJtRjp5ABmpeL9UZ1oZFw7SZZxP2ZNEqkBzfp5vRm9PSDg8wzaRJDwmvqJzgG9FEZXDtS",
  "key25": "2qKRKSs7yxjRKj2YKbVHwSx1CS8nr7sRpertf5qfdAvrc629EBJ8NUTZScA7CHsN5JyhJqsVNseDL9DGqPg8VpoK",
  "key26": "ksAbQVeuAsjaBQ5B6bSE6yCrKEvasez1s58df82HWZcyiw7YqUJLk7yoCtx5p4Xhzg75g1FPKahod3VpyjtuxKy",
  "key27": "5Bk8N3SAJpDL5fUmXGyj2gSRhYKuKfP3fURpchEBAALcFxwpwq6YTDXxFFmijVv55NpT69m1GCZabTrp5xE3Qssk",
  "key28": "5WzAsxToXSqX7ndkLqzMoVtjnQ2LXrn6p4VhYcMM8bG1bFzugxQHk17miQtc6SSYKGapPKb6PC4vocEfM7uS71MT",
  "key29": "2HPug2eWTAUrw3NWtjZ9TnxyxFUJMN4y5m9tggsBD3zqZGAj99WoZq8UsLdsZCR211pKQ22sfKCeXPjuL79ryLbN",
  "key30": "KikvQdn47rxcqdpZXfUTzbpsydbYf1ndSjHkwYMDqeKrGii4Q8F1iAa3f26CYcCqzQBsasEDeUwgkGNbH6vvXrD",
  "key31": "3LVsqLaeGj2mFoezewKSu4YrEswEt7M6DnWrJ6QpsoNz7Gef3VCzQdMarpHvhzet1rx1KU8aFKxouMp9xNRyJ4j9",
  "key32": "4jCX2BeBBGXDrJ6sNppcQN7mRijxnSu3gCG6BmwuWTPZxZkoCScD1eSo1F5zgScTdwj62FwKUWptPJJdC5EC8v1Z",
  "key33": "4kEJ2rzQjGWsg4NhCXBFiFcS2GZwP28mUDeXrKgbyzPcdnodAN2VnEi8FeErbt34QekoVER9DpyydFizPA3fgdmv",
  "key34": "5PrUiszRwEv5AXDTHGFygVi6dwPMeYCZULpKXhdp2LH69BQ4kiB2AuecQjQ5eFi4PY4aa6a7CyDPdGG8ZgEmFayc",
  "key35": "Z9KUXNFUoiuJ8mGu65CEfouseeQ4PFMfSgNVcHi9VBEkCC11enmrd3vUe1gsV3aCLeEg1o3UiFReCjrJUqJgJs3",
  "key36": "4cBCbLByij2La3ko5XH3PuCzAZRLMtMYD8N8wBmDF4pjbKenk7Rqcr1Uj8Aa1WmxnP6GEy75fs1jwkEHDvWiHzQi",
  "key37": "hVALnucPVUAB4UpZHFCkvC4zb2ghqcGvcJfdxpFpF7xjsUTcXhADybu2PMDSs2Gh3HrTGfJmAKtyYWChNBw5oY1",
  "key38": "2azYYhbt88RwJu5cSKgZUux1pCNzkaQarUCNvTnfvuN1SWtsmHrZ9WaUJCMN8kxb1LBmeQrRq74PuwKWKgQSifNV",
  "key39": "5oxywrnSuYwe1G7LkjiYVh6EsoxDAhmJqwTz9XwssjZ58YQ9cHH7kxMtuCdpWRpXTzW1QM6XSARexBqd8y8Nb4yu",
  "key40": "2B8Nrq4p5iwWfyUaSp2Uc9MgtxgTzcGdsjhcCvyEbqLJjScysRWFDAFZtBrmxbLnktnMRWq8AfAUVsdyu77YLS6Y",
  "key41": "iJ5jHmNmL7LRdxcxBorrcM87yqvLpQQv9j31VJzkzYr2jTxGivGfaFN85JZkHLBxuR5KTm2j4F4SgECoCtuJBwF",
  "key42": "6sqSa4RSWWuuPbi9XjB8iXtvQCRnqRjW92yt5Raz5xW6pS1nzXGY3sHWFCZhSDJWUU4dybVevgRY41dPvMuLaP7",
  "key43": "Eo1SgD8QLHkDN4qWD8FqDSHaEUpb3usHptaLPUspinQ86QgQcUC8Gp4THqfZz8ycAsYJG83XgfZcRckDnrr7Az6",
  "key44": "2qkPBGHUmzZhMjdhdqvxsvZaduGiuGrCpbhsMcFUs3vKKYEv6sUkEdWActvKd1sLohkrY5ewz4EPFGuBVWxw86jM",
  "key45": "5weWxw8tMubDWi7Li2XXMYwc5EYx7fAN1xj9RFMXWqC7CB2LEj4h5Lt1zTuQWPjAEvgq63Z2rUTrsjmNTqsStXZ8",
  "key46": "27FbL4Y76tvh3mAVocwKwVGyQx4hRLg8K2Jb4wDD821wYsZseprZ7QgKRJZKSAh1g2DMz9VyvQ3MywWUZrohfzYZ",
  "key47": "3YhzJ6pH1BAbHcYRpqfhSdxRDPmnSbsLJBed6jXP331UJzpWRPjqRPquJzrNRM7Re2gVJwvRxHSDgXBYmCR7WE4R",
  "key48": "SCNAGaNcB3WyqVcRiRjXZWUrveyH19idQzDxbLpvs1ymvmrnaYqafzPVb6uD6DJYCBsRHjUkRitraeGohaWLcXp",
  "key49": "javXyLTNMSJjtW8NXac23q7EQzUGM26BiGZ1pJZY95npezwwy1DeN3GsN663945a9PW3qiswvGdeREmDenN7Ztw"
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
