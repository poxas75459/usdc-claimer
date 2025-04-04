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
    "4bJfBpWqGag5kLrS5ZvLpgDoRovPNCyS79mdqegr4dWQsNc6B4ZzNo5jQtG2ZALUMsLht4RKFxuhkDRSrPMnVe14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4evdHCAAXeg5ey9UmKp6DKUiLTH5oHUFjndNd56HdQ2vDuKdQ34L7oF5b6i7Xkh2ETusrT4ZXH5Rij8s6hSM6F4Z",
  "key1": "E5dq95BANi3VuoZZ2sn531okzN35HT76oVx36FtmhJZtjbFNcn73TqDjtDwGu417HGHc1NJHtn39kwyUSBgatxZ",
  "key2": "5daQh4F29AGGhFsdPFxME52vh4YYoRp1de5r3uN2qnHZGLhUG6iH5ppF3sGx7Lv6eeHVDL4Gi1YirVUpjMKiVvSd",
  "key3": "MU1sSa9uo9eBsmgc4UmVCDCrDqC2MvM15nadoaDNgj2cGsNiQK4Uv2cWNR9AzkhiQKzG4LGapn7NgcwD4tFxeBL",
  "key4": "5hjsMBGx3F6u5mFF2toMrEaZeFjPLgKeiPvsG8nQD5pw2NhhTQrDqr8fxScU7xSRTvrkyAXHdoFwhjdePVpExskA",
  "key5": "4pjMhssGKzrVxfkjhqM6vRk26JKBuhmBDNBhduzy6gfBamZz2B73KFJ5dNwbBKKqZc9t2tGU1C8badgd6jBo5KR9",
  "key6": "4x1PRtADHdT4V2Tr881k7fAoaYPsWzrBkd2BzykTMv7qtFsW6rcMMymJFFUapGmpXRRobfccTnmX2hrXfcb4R7JV",
  "key7": "4qzd4gTt7gtZracVgYBR7rfRPX97bjCeULvTchyy8zotXCgQnikSCVqyhpdvjgrhbTRfN73epyxERJqy7tDunY84",
  "key8": "55QNNJTKTSR1eMEiQVQ38fKoLCAMCQYyKCaVMHqXHTQmrmrrtDjXRzZQ1U3p3dfKnFMzHFrhuHurHcMdjsEbneB9",
  "key9": "2gghEb9tUh8wDR7w692VovNWX38V8b92nHkBj7WpXr9aJLpePwkzPFrDe3mRDmVtGhxDcNcgk1QnYFRY48wov9pV",
  "key10": "2re2kjAkRCvNZ8mpn3KQ6zHkZ336aB5gtVdxnPbGFG97i3j7snfHdNtK6DKqDXSZJwwFN5CYGHFQPLgwT81ubCj9",
  "key11": "33th6X7fG11UBKMHHGJf88qbMhAnrAQFHC3kbtDgpP4mK4f9mUPHi5JYvEv6WgsdjE7W4pZzdFPAs8bE44vMmvCw",
  "key12": "3V8q43zT5377C3KVNDTcdJcWgvy4tqgtALntuvEnT37eQTuwnW8teQhALUQw1CMarkkTisoF9AkmAdHqdgL4r83f",
  "key13": "4spr1eSJcq7VPUjYm5vkpNMCSxYsAgw1ehkCGdZWh4iSab92hxfpoovuFRXGJtzDhH3MVGDxsKT7j8DvYZdkhEQc",
  "key14": "59k5Bostr98F4fYbVL6cFWyfw44sAMHH554YsHGAdjgUztpoX12SMW3uRj9cUgu7HGq5dpcBH45osD6HJ6AfgFxE",
  "key15": "3JcFyE7jskRNfqs4sRAGz1HwBdifewEXdi5EprxTijVPwHr5u9rhyv4NWq2zBpwjGJ1tKhUMoYgNsF3TFbydjAeN",
  "key16": "5BN8RL5ZmZD6tVgr1WAViYYWrSVbZvTmERXkr6eyAxoxWj7gD75hZhJqZHUJ5T2R2wghKkFFBLYhUfQpNeCKomBA",
  "key17": "JEc7ZB8tjDKkY7xj9YobMg4HxTRVBBCsFdjw8kbf2vZCRMmiRWfdXU4dDiycENLcoCVN1TtFSguL9a4JF54weCA",
  "key18": "61yfjPDTHLu9dyH9SJV8bFFq4qFFpaen6PZK7Wk6p4sYLRgureG7aFisMkTP2V3qhATBzst6BurvD4JAV9wNSo3H",
  "key19": "2bkjVo6j8giSP5Rh2Pf5o66L86b2KiifnFATVp52kVRUd424ML3YQ9VbK21mKsfbvSGumBQPP3ywtbVPgbnuoeku",
  "key20": "31MeQmz9YaTMyuejiUMc66Ay3XdMxeQbznV4jY6qsYuDHw9uZHqmfxbvHcieWdzfLb7ZUp6kY9CCM5QiSayef2Qc",
  "key21": "9V2HGkEauNavFh5qYbwRaSxeViyb9ZMYRKVs5TDMi4CsGXXsaWyYnrZRfF3JYDyFv3KrWr8KYpids4yYaEZ4GL4",
  "key22": "fuVSHAFRdBiMxWEWG544k6gjEmdWvVmQNTyzQMStFKGPRv6q5cn6g6p4KwX7mdmiFPaxK3qSsFrKh5LTUYpgq9f",
  "key23": "beMST6xMkacmkg56cS8zyjnonCTRWRs7WjQkyu9zRRXKk6JQ4Ym2fn86K9DMZNobeUk6wsxLVqqwpYPjsd7Af9V",
  "key24": "es12cgLNjxXP62xcy4cvEhbucggAa3nrAF8geViFQ3m3DU8fU95F5ZDhFNQaf95fVLyPHqpFBYYLKMfShnWF7jW",
  "key25": "54uQMcvb83yGdpqvTdKhU2ebEQ53bmsEE7cfjbCCxMVUs4pAkHWA66mba5pbyLb2xRLCiXrQFNZJT9RRQF4zHutp",
  "key26": "4utgqH2qvxdJf59U5m8L4GBbHGGKFqVYPTN6fB2oNkyBPqG5xgWGucxSZ4ASZ1k5WUajBjb2cjv4LBdBka7TN6Ge",
  "key27": "KdNRTxuJPtGWGomMo8vCyiHzveXD6o35qTqMXCt1gnfeoSHRc9iPDR1eFw75Y7ZkDN2oW5JUiwHoasdQtrkVS5Q",
  "key28": "VB3yVgeotznxinZ8nEJfMveYKamEjw7AVPUMPkAThwKHMU1UG7qruyenGCu1B2aXnRvsrb418RujbrAYWnwKvq9",
  "key29": "MA8Vf6KkqSK7sLxX672Yske9fku789EiYr228pDFNUmpCfnhocRqPC8BrEknJqwnqEd9xJzKEdFg2vkoZqey898",
  "key30": "5QeADpiWXfHhgdcus3ig4K8AeJtae1k8HpgBPPQyayn82UvivyFf6rN6pbZStMaAuFJUiNpKwvSn79K25sLB6QdU",
  "key31": "2agNSZQZj23QjZfyKS7fR9CeTqHNThf9AABc6LqynykF38aUusasjHKcmqDSZm1HDKqtXQ5YiLTXXdeSWSXGHNhm",
  "key32": "26s5UDNPvLVGeX1saftGcPLuqnEnuGrZHy2PMQBqWyPAVu15ZMpb6pEfnJrjBcn65ZcFeq6c7e2NG6HuRJUMKyGZ",
  "key33": "5iqbiLwFwgGkCP8YRhBe3GL6CgQfsf2rihNS5VNjTh3iJScMtvbZj8UxeUhcxreVJZvctihUv6vRSRWdgjcQ1ZTr",
  "key34": "254vd7goVMjwLnwW64Jz2dAhfea1bLgxnrmhN1Eg2CEhFoGU49xRkXJG1C3Nt92mxzZbqrVkvYVVJgLK2JeBohDo",
  "key35": "3rZDEP7SQHcBeyAZKcJap3bct1bh4a3CW7GK9K3L5k39zSoqqFbo1fKEsSLvRoeBbW2n3ecY4rypieqzV2j6mbJY",
  "key36": "2n1MXEYB6N6q49yEudbB85mgimuyobtU4vPKj1YkWfPtcUDaa7py6chonDJKyFLanAycvryVG8fWnK1M33RNvezm",
  "key37": "3ZQ9MnLLAoGewhrTCaUYRj6QaEBrKGWunyWencSVafTPmoAoqyAgwWzqFxjPeKoheA3TW7dEsZdsdXgeJYngtigu",
  "key38": "224iReFxWWsoJwU8wYWyzAjit7jWtyfeJ9LzHFebU9gDEpwWNx3dArSL1TtsyExLWc8fMemzKhnfqWyNEpmQg2ux",
  "key39": "3ry7W77LPfyQYs9uWgxpFDEcqAKWK5UTxw6ErS1xs6SLNwzYqUBkeKaYSYmqsFFJ3315MjQj13sEqeQuKxERHjcR",
  "key40": "5oiW256L7vcExxH3bqE8AzUivcgdJ3EZKmSBYhCbj3AUuzbbuAoQCAZZpr2PspNHTDg838y3obsfFD4nqdDTk1Sy",
  "key41": "213BsqSPZqDGS23V5axZLhJPsmdBj8H38H7czAFL8STi8YXm6Jpuw7KgPG1uVjJsaSn7XTwHEcEWpooFaKCCNmhG",
  "key42": "eQMWn8SC9SQtoe7ZTCvBLdY55xyVnKeqTFSYPyHn6qQBcfG2pwGyV99XLC4U2MzhYQQhDWcJitoEj2a5RnK6pwC",
  "key43": "2nMBEeqM7vQBncqAAwYijEDWCSD1g3DJB7Qx6udLqgWpm3EJ444CzWag2d2Qe7Z4qpMj7dHsK5p3USeXbScZ3BZV",
  "key44": "2bNiNAysisLWeTXT4Rz239pmdWjbSv1E7NmaewePFiC7tAkSFQF4vr92TiM1X1oohsgFP3fgFS7LG2zbShTT1GR9"
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
