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
    "5a4LeFMzaCbhaRmWemUQ8yriB87TpmhPs8fCcMspPBMunLb1Qus1yghnZqGYNEKJDhmsWzAwWEDxjWAXJj89frUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pd9LcoK3k9nJ1a5AEnc9b1EEnET4TxCa4tXgQLYg8z2NfWW9Uty4eDNeD4GDyrv78dggXvEUe26icQXB1hJfv3i",
  "key1": "3ZSF2AAjvZpzsNA9L8XHUDWQQUupT6z7K1Q5cHo1vweTB8Jq1imjWSLAJpstgjTSJ9Tx4aii1sGk5WB9ughaToeT",
  "key2": "xHjuLSCguM143Y8iGYPHFhMmKX6gWmipvkPpch9cDKKmVVCYZJzqdZqV8J712bNbAjeYPQSpv61xbtJ3n8EFbkY",
  "key3": "PwRRHeha9R5UZApLvy3MtTDPM2dUPvj8a1yF7gZX9brfGfr4vd5mGrB62Lehz4RAvjuwN5EirUPkSKz8JimBHFX",
  "key4": "2nCacyp9oEiCebHuATd93MEpzy9QiCaDHGUT6xn1x8Z9XBRg8HHPmCsxVTHELpaxwZUtucRgz4x7emv9xZtde7yK",
  "key5": "4geimox1otSj2WfxSrdmM5hvbrGrHaqLbZ1HhHUABssDhvCNBHBn3b3zNJ6kuBLgmmDfbGTe9QrF6DV8tabEB4ef",
  "key6": "2NGHhB6tjSV4JiY1UrZpmpU3bUK3BtahET5hYbeNmyBeunc3U4LPHaNvuacPpX3rQXMgeZ8eqnCdrokuigUwETLb",
  "key7": "3kkFSwvPd8WMaHdpXGkQ9eJ6oYcmMMtAftUwa3eWNWWQAsV4xuYgW26WXa93XvpjMGTZf3jVEUk5UU61EsSqF2cT",
  "key8": "3AzHuQ2kkRrYKztHEQDtPRMEJZjX6ZDQMcDZYvFw42gz63dtHw1MJvzH7dukf8VxT7iLXrDhqiwYv2EGrZYL3MRG",
  "key9": "4eeBuNVJkaALGnsr4V7DbtwEK8bPpDg5gr15JakNeQnP6XfTur3H9J8Lrh66LmV728iEDnnb6NFyUpHsYzH4qoaF",
  "key10": "3QuHFpowVg6jbEkR31vFnUgpNLjNqVdni4fzXV3jCXbetoBQ7NdK4EYeN1AbYPWSScUvdXA8spoL488NJLSxib4Y",
  "key11": "593mBkjhPjbkXwTmUDgLEs4ob1y7Sjr1mL1vBVFKrvhCsvhjpjpGmN9N67JCiXzPKxDNf8Ajv2LNKbXzwyXYXMtT",
  "key12": "2WJtS9dEr52UnUYEzEAaDqa8gqW9VUT8dznBwnhmpjTXufrN9etDjAXhTUzsz6TZXtU9iViJJv6bX3PcddDeP9Yr",
  "key13": "5uTBVicP4JpJxXRXg4Q275qQzNPa1G8EhXQcVV1BigjtSNEQDi4s2Fdd3GfRnjVMgKsVqkvYFzM61SgF2SbPqu6i",
  "key14": "2tFv6PqFj9p2yfgmGo1aMxooZQW7CjZ8C9Bu5XWhuiyq49bzPkDEPQ99KrnyKV393KPeaHtsVEvwiwr4JzHdvWki",
  "key15": "587r6gPpUMegFUYbdfZfKkdPpwhMvtjqXmbgPZsg4jsyS84KYzWgG5jw9PH45DEZNvUQsqUA1hMRqYJ85PLDKypd",
  "key16": "5pz8kkfhiNMCztUJEAYnUceTbU55dBjjZZJ6ise6m488SvbKXJhsn5TcWH32ybDeE11fcfqF1rCkpSEcoVw785rD",
  "key17": "SU17E9mHunEVtjtCyq81Y5Cgx2PXUETVapJwtbXtNWYoseqm3PHrcGV4iVUUFQ1tLaFuqZqWU2q1Sh6f6LyUxPD",
  "key18": "3Y9BaaLRqou7JX41Wtpzp1NossfncbroqDCV1r9SGgdVWbDC8ehucTpEHoVLPepKW4EFHo87kLeWgb4kQJb9UJTy",
  "key19": "5qhDFH2uhxAKmoNfcjDbcyfcZ8ZYNpySUoSUFyu3vAHa1Ut2wLS6eN67aSCyrAbHPJELq5QzTGac2kcntVuuqBrx",
  "key20": "3rv28yrPAVNuPkiU2EBxE2wLRhAarPTQGr1unzb6vmU6vhERdx5ZDXYWYs3tEFj8wybRBhY2rQneL5aax5BjkK7r",
  "key21": "25sEcY6E83tNaVbwNVY5QtBfDU1t6z6wBiU6cQwX2GjeKJs9Ncf7EQAcEnR2GuquaLxpuHoBZBAGGSKJ6Q2iw61h",
  "key22": "4FRKcVByXw7wn8MQfytrCW8wfRtjEssUFtAzTyxgWq6HooXFJtx8MiM8FBhmwM8qaLcUhuvda8atMWb5UWHkSEwq",
  "key23": "5rSWxcd5fdrtd9aSNYD7XgBxD6WdzQHaDzxfSbEL1AdMetbNS77GPVLA1qQuS4UDKiSTbazM1ooMz4FsVm2rXhUd",
  "key24": "2dESmErDwMNddBDD7RDzXqbvu5mPYZhR9Lu68syBF5UcTrjhjejMhDqVTmsbMohPRdDexDrAJe58dKPbRpnk8Ch1",
  "key25": "5rgvtqd475UeLgftMXKv1gDBDuHJ4T9F8qScDSCvXBrm5WobbJWh9qrZueniJcy3vSbEugGkdfBLbxhPvyto8re9",
  "key26": "5JViawty9vbjgKsPtFJ5tC8Rz8VMyEU4sGNSC1hs1PkVi53NySdkeGtUfRLrZ2cBKzRApD4QJiKwQfSEc84KSdgs",
  "key27": "4MhxZkVxTaS7fJRPdjymdNAbpiBVrui4M7gprDWV6nuFdDJvVj7GaNfdxFBsC8FD3z8KNBE8Af7R4rHwnn2Jdzxb",
  "key28": "3gfZw98kFZhHxXfbgDr4AmSaHZ1CXkRJxvuzxhULDv63Pvbd2h2Bwz4std3xB47GjWguRrXWmcCpkMPok4Q2eKHP",
  "key29": "5VarQNFEXa8gdhy8JmPh5XNsaeazUz9xiZbJVtJi7GHKpDjXta5oCfhCJWPqEAjPJ9MPSSjLGdJ2uwn7MwUx8Eyy",
  "key30": "2Trs1byAj2h7UGtbwNw2beTQDS1Q4XErr97AAvs5SsRsx2imonNHieBxyCvamG89ZpwtDVDwtVSszjV3U9SgWwW",
  "key31": "5TgXrj7e9KtTiHY42PufjoVbrLGPweNKwb4anMXYV1yd7BDsRPZ1yacK9tB68MdYdVLTaqZj8A6ihGo7XrabMDX5",
  "key32": "2CFbCsSpmxMxU2w3rSNJdz8vVodHdRsDK3KJQpjsn2RCszQfe3m2AR2mNZPJd5eRQzsge2px6VNfeJ8gULotCg74",
  "key33": "VpeqUwFyRZmw53bydbcy3sopA44Z8TcqFNNxNu9jhqwUQtQgLJ55NcTrfXQHrSsQykYKHWNkrBrLXpUrz96ry3j",
  "key34": "5SSvY8ZVvzz7HS6wkgJruNyTX4RtHCgQtjVGqG1mp3zKvBBZWJq2Gryru3W3HF1g5jD2wMkFHzwaY8D9cGZuVfLw",
  "key35": "moQN9yeuadcbJoSFr4YaaPKssFtndBGw6zV2pp2wDBi4ryke4hpSzp8FwDYYDuDPNLcdGRcSjdgsK1tAeZcqsjK",
  "key36": "62NrSUAsVYgK4Q8aogU4kcMG6vxtoQjTRb23MCMDm6W3UmMy8nuN5w7Ej3eghZ7TtA1JVsUQMyTfzWdGnsYwG2m7",
  "key37": "552Dd2rjS5Wk4GZ7HfCgTYocM2yXke5K1y3wxrPdpWhN2tepkVokjHRiwiPh9hF8ikQm6G2N7qW7XKSEQYQ2385b",
  "key38": "293EhiJzNCeB9cYqQS8Y1ZLrXciGgygxB3nUhJsPB8622LkRkthWrk8WQdbs9tj7nYAXRaRL5Ls2uSXmUrBjg2sM",
  "key39": "2Ahzuh9B83DxBySpSQFyzcEaf2r9wmqCsNgYtidgCS4HqZvLwTMoVL8u25tMxf4eYXBVW1jcPCF9K4jv7dMYWxwM",
  "key40": "3wB1DmvhoEVSMqx9B4yPomybPbiwtDsTFfzGAfDkDjYmemeiJJyK8TW6bn64aDRDTLLkoc3pc5grXhfxHGijPaty",
  "key41": "5kigyCcD64XHs7ZL2Hydtm2YewKUKkthbT4ESxSSsbXZCtJBdn5vf11PkQT62FtyKf7MorBVGMkVgeZ2ocJoCj88",
  "key42": "5NquAE2cLQUCJVoYhykjQxczfKDZ4t2AL2xAvMTjE5uUoRynj6sCZfQWk9Tmji3pUUWMYnpGbMphzq1zm7VEda2j",
  "key43": "4tq4K9pkwvN1KdWEAY1uHwWHNPhLQ5v1pe3FaW7hhCY42rY2fHueJsEDDnSDVbE41YsqSoyWUq8Box6dCa2HZgqK",
  "key44": "4sZymNpV8y9Ycw2Seu1zgYcv36NcnN2EYgm9aGk4TAohMWtkg4LJfGiQAgjsbGt3Ur64y1HYVuGUpxRSjGDUmqwi",
  "key45": "7Ye931a3v8EdGgearWY84B4VBgVpHVwJvGXc6BZXR2mZc8P8FS86HB5xbSbHacGMbKbUXCLiP8s6YYMz6iaD1uh",
  "key46": "5WYpyhc5oThHXGjt75emGeVuLhFGRsfn2SdPnhfhygpgbESzqJdoGRwWu7dxZ9Vksf3d8iJyJSbqZbDVDT19422x",
  "key47": "1cLWDS6L6WJduCpmNZth1DWoQXig84SjLoXFGzkyAUxMHpEQAi9EYsRa93zqtwiEzRNvmVnC76S6XPzhqe4VZyb",
  "key48": "2MpbQUSLwDo5a4P9enoZ1TQnAHRTSq6V4i7pHVEnpv5YTfm7STF1Rh4kvFDPLmvNhW1y9hWAq4xMA7GBDJcdaiUm",
  "key49": "3cDmrVo2fVmfKFpkXJjMdDTRTsnCpXNR6EqgpbGBk7nvTy332eL46XwdPjsM2a5afL76M5ydDDuEtHJPgEFfZVD9"
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
